(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-zookeeper","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},AesF:function(e,t,n){"use strict";n.r(t),n.d(t,"pageTitle",(function(){return i})),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return u}));n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/"),n("q1tI");var r=n("7ljp"),a=n("xCMr");var s,i="Serving Server-Sent Events",o={},c=(s="Tip",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),l={pageTitle:i,_frontmatter:o},m=a.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(m,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"serving-server-sent-events",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h1"},{href:"#serving-server-sent-events","aria-label":"serving server sent events permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Serving Server-Sent Events"),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#adjusting-the-request-timeout"}),"Adjusting the request timeout"))),Object(r.b)(c,{mdxType:"Tip"},Object(r.b)("p",null,"Visit ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria-examples"}),"armeria-examples")," to find a fully working example.")),Object(r.b)("p",null,"A traditional web page has to send a request to the server in order to receive new data.\nWith ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3.org/TR/eventsource/"}),"Server-Sent Events"),", however, it is possible for a server to push a new data to\nthe web page whenever it wants to."),Object(r.b)("p",null,"Armeria provides several factory methods by ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://ServerSentEvents:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/streaming/ServerSentEvents.html"}),"type://ServerSentEvents")," class which help a user to easily send\nan event stream to the client. The following example shows how to build a server which serves services\nsending a response with ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3.org/TR/eventsource/"}),"Server-Sent Events"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.sse.ServerSentEvent;\nimport com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.streaming.ServerSentEvents;\nimport reactor.core.publisher.Flux;\n\nServer server =\n        Server.builder()\n              // Emit Server-Sent Events with the SeverSentEvent instances published by a publisher.\n              .service("/sse1",\n                       (ctx, req) -> ServerSentEvents.fromPublisher(\n                               Flux.just(ServerSentEvent.ofData("foo"), ServerSentEvent.ofData("bar"))))\n              // Emit Server-Sent Events with converting instances published by a publisher into\n              // ServerSentEvent instances.\n              .service("/sse2",\n                       (ctx, req) -> ServerSentEvents.fromPublisher(\n                               Flux.just("foo", "bar"), ServerSentEvent::ofData))\n              .build();\n')),Object(r.b)("p",null,"Of course, Armeria provides ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://@ProducesEventStream:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/ProducesEventStream.html"}),"type://@ProducesEventStream")," annotation in order to convert the result objects\nreturned from an annotated service method into ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3.org/TR/eventsource/"}),"Server-Sent Events"),".\nThe following example shows how to use the annotation."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.sse.ServerSentEvent;\nimport com.linecorp.armeria.server.annotation.Get;\nimport com.linecorp.armeria.server.annotation.ProducesEventStream;\nimport org.reactivestreams.Publisher;\n\n@Get("/sse")\n@ProducesEventStream\npublic Publisher<ServerSentEvent> sse() {\n    return Flux.just(ServerSentEvent.ofData("foo"), ServerSentEvent.ofData("bar"));\n}\n')),Object(r.b)("h2",{id:"adjusting-the-request-timeout",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#adjusting-the-request-timeout","aria-label":"adjusting the request timeout permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Adjusting the request timeout"),Object(r.b)("p",null,"An event stream may be sent for a longer period than the configured timeout depending on the application.\nIt even can continue infinitely, for example streaming stock quotes. Such a long running stream may be\nterminated prematurely because Armeria has the default request timeout of ",Object(r.b)("inlineCode",{parentName:"p"},"10")," seconds, i.e. your stream\nwill be broken after 10 seconds at most. Therefore, you must adjust the timeout if your event stream lasts\nlonger than the configured timeout. The following example shows how to adjust the timeout of a single request.\nAs you might know, it is not only for ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3.org/TR/eventsource/"}),"Server-Sent Events"),", so you can use this method for\nany requests which you want to adjust timeout for."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import java.time.Duration;\nimport com.linecorp.armeria.common.sse.ServerSentEvent;\nimport com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.streaming.ServerSentEvents;\nimport reactor.core.publisher.Flux;\n\nServer server =\n        Server.builder()\n              // This service infinitely sends numbers as the data of events every second.\n              .service("/long-sse", (ctx, req) -> {\n                  // Note that you MUST adjust the request timeout if you want to send events for a\n                  // longer period than the configured request timeout. The timeout can be disabled by\n                  // setting 0 like the below, but it is NOT RECOMMENDED in the real world application,\n                  // because it can leave a lot of unfinished requests.\n                  ctx.setRequestTimeout(Duration.ZERO);\n                  return ServerSentEvents.fromPublisher(\n                          Flux.interval(Duration.ofSeconds(1))\n                              .map(sequence -> ServerSentEvent.ofData(Long.toString(sequence))));\n              })\n              .build();\n')))}u.isMDXComponent=!0},LhBn:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"nodes":[{"tableOfContents":{"items":[{"url":"#requestcontext-custom-attributes","title":"RequestContext custom attributes"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-custom-attributes"}},{"tableOfContents":{"items":[{"url":"#production-checklist","title":"Production checklist"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-production-checklist"}},{"tableOfContents":{"items":[{"url":"#logging-contextual-information","title":"Logging contextual information"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-logging"}},{"tableOfContents":{"items":[{"url":"#structured-logging","title":"Structured logging"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-dropwizard","title":"Using Armeria with Dropwizard"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-dropwizard-integration"}},{"tableOfContents":{"items":[{"url":"#saml-single-sign-on","title":"SAML Single Sign-On"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-saml"}},{"tableOfContents":{"items":[{"url":"#unit-testing-client-and-service","title":"Unit-testing Client and Service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-unit-testing"}},{"tableOfContents":{"items":[{"url":"#structured-logging-with-kafka","title":"Structured logging with Kafka"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging-kafka"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-spring-webflux","title":"Using Armeria with Spring WebFlux"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-spring-webflux-integration"}},{"tableOfContents":{"items":[{"url":"#zipkin-integration","title":"Zipkin integration"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zipkin"}},{"tableOfContents":{"items":[{"url":"#service-discovery-with-zookeeper","title":"Service discovery with ZooKeeper"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zookeeper"}},{"tableOfContents":{"items":[{"url":"#circuit-breaker","title":"Circuit breaker"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-circuit-breaker"}},{"tableOfContents":{"items":[{"url":"#sending-custom-http-headers","title":"Sending custom HTTP headers"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-custom-http-headers"}},{"tableOfContents":{"items":[{"url":"#decorating-a-client","title":"Decorating a client"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-decorator"}},{"tableOfContents":{"items":[{"url":"#calling-an-http-service","title":"Calling an HTTP service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-http"}},{"tableOfContents":{"items":[{"url":"#calling-a-grpc-service","title":"Calling a gRPC service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-grpc"}},{"tableOfContents":{"items":[{"url":"#retrofit-integration","title":"Retrofit integration"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retrofit"}},{"tableOfContents":{"items":[{"url":"#calling-a-thrift-service","title":"Calling a Thrift service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-thrift"}},{"tableOfContents":{"items":[{"url":"#automatic-retry","title":"Automatic retry"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retry"}},{"tableOfContents":{"items":[{"url":"#client-side-load-balancing-and-service-discovery","title":"Client-side load balancing and service discovery"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-service-discovery"}},{"tableOfContents":{"items":[{"url":"#overriding-client-timeouts","title":"Overriding client timeouts"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-timeouts"}},{"tableOfContents":{"items":[{"url":"#user-manual","title":"User manual"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"index"}},{"tableOfContents":{"items":[{"url":"#writing-an-access-log","title":"Writing an access log"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-access-log"}},{"tableOfContents":{"items":[{"url":"#server-basics","title":"Server basics"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-basics"}},{"tableOfContents":{"items":[{"url":"#decorating-a-service","title":"Decorating a service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-decorator"}},{"tableOfContents":{"items":[{"url":"#configuring-cors","title":"Configuring CORS"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-cors"}},{"tableOfContents":{"items":[{"url":"#browsing-and-invoking-services-with-docservice","title":"Browsing and invoking services with DocService"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-docservice"}},{"tableOfContents":{"items":[{"url":"#running-a-grpc-service","title":"Running a gRPC service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-grpc"}},{"tableOfContents":{"items":[{"url":"#embedding-a-servlet-container","title":"Embedding a servlet container"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-servlet"}},{"tableOfContents":{"items":[{"url":"#serving-server-sent-events","title":"Serving Server-Sent Events"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-sse"}},{"tableOfContents":{"items":[{"url":"#annotated-services","title":"Annotated services"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-annotated-service"}},{"tableOfContents":{"items":[{"url":"#serving-static-files","title":"Serving static files"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-http-file"}},{"tableOfContents":{"items":[{"url":"#running-a-thrift-service","title":"Running a Thrift service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-thrift"}},{"tableOfContents":{"items":[{"url":"#setting-up-a-project","title":"Setting up a project"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"setup"}}]}}}')},xCMr:function(e,t,n){"use strict";n("E5k/");var r=n("LhBn"),a=n("q1tI"),s=n.n(a),i=n("/94A"),o=n("+ejy");t.a=function(e){var t=r.data.allMdx.nodes;return s.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:t,index:i,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-sse-mdx-8679fe01e90dd300d9f3.js.map