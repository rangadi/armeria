/*
 * Copyright 2015 LINE Corporation
 *
 * LINE Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package com.linecorp.armeria.server;

import static java.util.Objects.requireNonNull;

import java.util.function.Function;

import javax.annotation.Nullable;

import com.google.common.base.MoreObjects;
import com.google.common.base.MoreObjects.ToStringHelper;

import com.linecorp.armeria.common.logging.RequestLog;
import com.linecorp.armeria.common.logging.RequestLogBuilder;
import com.linecorp.armeria.server.annotation.decorator.CorsDecorator;
import com.linecorp.armeria.server.cors.CorsService;
import com.linecorp.armeria.server.logging.AccessLogWriter;

/**
 * An {@link HttpService} configuration.
 *
 * @see ServerConfig#serviceConfigs()
 * @see VirtualHost#serviceConfigs()
 */
public final class ServiceConfig {

    @Nullable
    private final VirtualHost virtualHost;

    private final Route route;
    private final HttpService service;
    @Nullable
    private final String defaultLogName;

    private final long requestTimeoutMillis;
    private final long maxRequestLength;
    private final boolean verboseResponses;

    private final AccessLogWriter accessLogWriter;
    private final boolean shutdownAccessLogWriterOnStop;
    private final boolean handlesCorsPreflight;

    /**
     * Creates a new instance.
     */
    ServiceConfig(Route route, HttpService service, @Nullable String defaultLogName,
                  long requestTimeoutMillis, long maxRequestLength, boolean verboseResponses,
                  AccessLogWriter accessLogWriter, boolean shutdownAccessLogWriterOnStop) {
        this(null, route, service, defaultLogName, requestTimeoutMillis, maxRequestLength,
             verboseResponses, accessLogWriter, shutdownAccessLogWriterOnStop);
    }

    /**
     * Creates a new instance.
     */
    private ServiceConfig(@Nullable VirtualHost virtualHost, Route route, HttpService service,
                          @Nullable String defaultLogName,
                          long requestTimeoutMillis, long maxRequestLength, boolean verboseResponses,
                          AccessLogWriter accessLogWriter, boolean shutdownAccessLogWriterOnStop) {
        this.virtualHost = virtualHost;
        this.route = requireNonNull(route, "route");
        this.service = requireNonNull(service, "service");
        this.defaultLogName = defaultLogName;
        this.requestTimeoutMillis = validateRequestTimeoutMillis(requestTimeoutMillis);
        this.maxRequestLength = validateMaxRequestLength(maxRequestLength);
        this.verboseResponses = verboseResponses;
        this.accessLogWriter = requireNonNull(accessLogWriter, "accessLogWriter");
        this.shutdownAccessLogWriterOnStop = shutdownAccessLogWriterOnStop;

        handlesCorsPreflight = service.as(CorsService.class) != null;
    }

    static long validateRequestTimeoutMillis(long requestTimeoutMillis) {
        if (requestTimeoutMillis < 0) {
            throw new IllegalArgumentException(
                    "requestTimeoutMillis: " + requestTimeoutMillis + " (expected: >= 0)");
        }
        return requestTimeoutMillis;
    }

    static long validateMaxRequestLength(long maxRequestLength) {
        if (maxRequestLength < 0) {
            throw new IllegalArgumentException("maxRequestLength: " + maxRequestLength + " (expected: >= 0)");
        }
        return maxRequestLength;
    }

    ServiceConfig withVirtualHost(VirtualHost virtualHost) {
        requireNonNull(virtualHost, "virtualHost");
        return new ServiceConfig(virtualHost, route, service, defaultLogName,
                                 requestTimeoutMillis, maxRequestLength, verboseResponses,
                                 accessLogWriter, shutdownAccessLogWriterOnStop);
    }

    ServiceConfig withDecoratedService(Function<? super HttpService, ? extends HttpService> decorator) {
        requireNonNull(decorator, "decorator");
        return new ServiceConfig(virtualHost, route, service.decorate(decorator), defaultLogName,
                                 requestTimeoutMillis, maxRequestLength, verboseResponses,
                                 accessLogWriter, shutdownAccessLogWriterOnStop);
    }

    /**
     * Returns the {@link VirtualHost} the {@link #service()} belongs to.
     */
    public VirtualHost virtualHost() {
        if (virtualHost == null) {
            throw new IllegalStateException("Server has not been configured yet.");
        }
        return virtualHost;
    }

    /**
     * Returns the {@link Server} the {@link #service()} belongs to.
     */
    public Server server() {
        return virtualHost().server();
    }

    /**
     * Returns the {@link Route} of the {@link #service()}.
     */
    public Route route() {
        return route;
    }

    /**
     * Returns the {@link HttpService}.
     */
    public HttpService service() {
        return service;
    }

    /**
     * Returns the default value of the {@link RequestLog#name()} property which is used when no name was set
     * via {@link RequestLogBuilder#name(String)}. If {@code null}, HTTP method name will be used instead.
     */
    @Nullable
    public String defaultLogName() {
        return defaultLogName;
    }

    /**
     * Returns the timeout of a request.
     *
     * @see VirtualHost#requestTimeoutMillis()
     */
    public long requestTimeoutMillis() {
        return requestTimeoutMillis;
    }

    /**
     * Returns the maximum allowed length of the content decoded at the session layer.
     * e.g. the content length of an HTTP request.
     *
     * @see VirtualHost#maxRequestLength()
     */
    public long maxRequestLength() {
        return maxRequestLength;
    }

    /**
     * Returns whether the verbose response mode is enabled. When enabled, the service response will contain
     * the exception type and its full stack trace, which may be useful for debugging while potentially
     * insecure. When disabled, the service response will not expose such server-side details to the client.
     *
     * @see VirtualHost#verboseResponses()
     */
    public boolean verboseResponses() {
        return verboseResponses;
    }

    /**
     * Returns the access log writer.
     *
     * @see VirtualHost#accessLogWriter()
     */
    public AccessLogWriter accessLogWriter() {
        return accessLogWriter;
    }

    /**
     * Tells whether the {@link AccessLogWriter} is shut down when the {@link Server} stops.
     *
     * @see VirtualHost#shutdownAccessLogWriterOnStop()
     */
    public boolean shutdownAccessLogWriterOnStop() {
        return shutdownAccessLogWriterOnStop;
    }

    /**
     * Returns {@code true} if the service has {@link CorsDecorator} in the decorator chain.
     */
    boolean handlesCorsPreflight() {
        return handlesCorsPreflight;
    }

    @Override
    public String toString() {
        final ToStringHelper toStringHelper = MoreObjects.toStringHelper(this).omitNullValues();
        if (virtualHost != null) {
            toStringHelper.add("hostnamePattern", virtualHost.hostnamePattern());
        }
        return toStringHelper.add("route", route)
                             .add("service", service)
                             .add("defaultLogName", defaultLogName)
                             .add("requestTimeoutMillis", requestTimeoutMillis)
                             .add("maxRequestLength", maxRequestLength)
                             .add("verboseResponses", verboseResponses)
                             .add("accessLogWriter", accessLogWriter)
                             .add("shutdownAccessLogWriterOnStop", shutdownAccessLogWriterOnStop)
                             .toString();
    }
}
