(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1ZmW":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return o}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var n=a("7ljp"),i=a("JkCF");var r,s={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:s},l=i.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(l,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"new-features",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now specify decorators for all services in a ",Object(n.b)("inlineCode",{parentName:"p"},"Server")," in a functional way. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1882"}),"#1882")," ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1900"}),"#1900")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = new ServerBuilder();\nsb.service(...);\n// After:\nsb.decorator((delegate, ctx, req) -> {\n    ...\n    return delegate.serve(ctx, req);\n});\n// Before:\nsb.decorator(delegate -> new SimpleServiceDecorator<HttpRequest, HttpResponse>(delegate) {\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) throws Exception {\n        ...\n        return delegate().serve(ctx, req);\n    }\n});\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now use ",Object(n.b)("inlineCode",{parentName:"p"},"HealthCheckService")," which has richer functionality than its predecessor ",Object(n.b)("inlineCode",{parentName:"p"},"HttpHealthCheckService"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1878"}),"#1878")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ServerBuilder sb = new ServerBuilder();\nsb.service("/internal/l7check",\n           HealthCheckService.builder()\n                             .checkers(...)\n                             .healthyResponse(...)\n                             .unhealthyResponse(...)\n                             .longPolling(Durations.ofMinutes(1))\n                             .updatable(true)\n                             .build());\n')),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Long-polling query support",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You can wait until the server becomes healthy or unhealthy and get notified immediately."))),Object(n.b)("li",{parentName:"ul"},"Easy customization of healthy/unhealthy responses"),Object(n.b)("li",{parentName:"ul"},"Easy customization of update request handler"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You now know exact host you are sending your request to when using Armeria client. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1917"}),"#1917")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"It was previously not possible when you specified an ",Object(n.b)("inlineCode",{parentName:"li"},"EndpointGroup")," as the destination."),Object(n.b)("li",{parentName:"ul"},"Therefore, ",Object(n.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," may return ",Object(n.b)("inlineCode",{parentName:"li"},"null")," since this release when Armeria failed to determine the destination host."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpointSelector()")," has been added so that you still know which ",Object(n.b)("inlineCode",{parentName:"li"},"EndpointGroup")," you are connecting to."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"BraveClient")," and ",Object(n.b)("inlineCode",{parentName:"p"},"BraveService")," now accept ",Object(n.b)("inlineCode",{parentName:"p"},"HttpTracing")," as well as ",Object(n.b)("inlineCode",{parentName:"p"},"Tracing"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1223"}),"#1223")," ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1906"}),"#1906")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'Tracing tracing = ...;\n\n// Server-side\nServerBuilder sb = new ServerBuilder();\n//// Before\nsb.service("/", myService.decorate(BraveService.newDecorator(tracing)));\n//// After\nHttpTracing httpTracing = HttpTracing.create(tracing);\nsb.service("/", myService.decorate(BraveService.newDecorator(httpTracing)));\n\n// Client-side\nHttpClientBuilder cb = new HttpClientBuilder(...);\n//// Before\ncb.decorator(BraveClient.newDecorator(tracing, "myBackend"));\n//// After\ncb.decorator(BraveClient.newDecorator(httpTracing.clientOf("myBackend")));\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can now create a decorating ",Object(n.b)("inlineCode",{parentName:"p"},"Service")," or ",Object(n.b)("inlineCode",{parentName:"p"},"Client")," in a less verbose way by extending new ",Object(n.b)("inlineCode",{parentName:"p"},"SimpleDecorating*")," classes. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1881"}),"#1881")," ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1925"}),"#1925")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"SimpleDecoratingHttpService extends SimpleDecoratingService<HttpRequest, HttpResponse>")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"SimpleDecoratingRpcService extends SimpleDecoratingService<RpcRequest, RpcResponse>")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"SimpleDecoratingHttpClient extends SimpleDecoratingClient<HttpRequest, HttpResponse>")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"SimpleDecoratingRpcClient extends SimpleDecoratingClient<RpcRequest, RpcResponse>")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"RpcService")," has been added for your convenience. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1881"}),"#1881")," ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1925"}),"#1925")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"RpcService extends Service<RpcRequest, RpcResponse>"))))),Object(n.b)("h2",{id:"improvements",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#improvements","aria-label":"improvements permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The output type of ",Object(n.b)("inlineCode",{parentName:"li"},"RequestLog")," sanitizer functions has been relaxed to ",Object(n.b)("inlineCode",{parentName:"li"},"?")," so that a user can write much simpler and more efficient sanitizer function. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1810"}),"#1810")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1879"}),"#1879"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'// Before\nFunction<HttpHeaders, HttpHeaders> sanitizer = headers -> {\n    return headers.toBuilder().removeAndThen("authorization").build();\n};\n// After\nFunction<HttpHeaders, Object> sanitizer = headers -> {\n    // No need to construct a new HttpHeaders object.\n    return headers.toBuilder().removeAndThen("authorization").toString();\n};\n// Even more efficiently\nFunction<HttpHeaders, Object> sanitizer = headers -> "sanitized!";\n'))),Object(n.b)("li",{parentName:"ul"},"A glob path mapping is not translated into a regex path mapping when combined with path prefix anymore. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1929"}),"#1929")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ByteBufHttpData.toInputStream()")," does not perform extra memory copy anymore. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1918"}),"#1918")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1919"}),"#1919"))),Object(n.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Armeria client now sends ",Object(n.b)("inlineCode",{parentName:"li"},"OPTIONS * HTTP/1.1")," instead of ",Object(n.b)("inlineCode",{parentName:"li"},"HEAD / HTTP/1.1"),", so that the initial protocol upgrade does not trigger business logic when a server has business logic bound at ",Object(n.b)("inlineCode",{parentName:"li"},"/"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1895"}),"#1895")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1896"}),"#1896")),Object(n.b)("li",{parentName:"ul"},"Response content is not sanitized twice anymore. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1879"}),"#1879")),Object(n.b)("li",{parentName:"ul"},"gRPC message compression is now enabled by default on the server side, so that the default behavior matches that of the upstream implementation. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1885"}),"#1885")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1889"}),"#1889")),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"max-age")," attribute in a ",Object(n.b)("inlineCode",{parentName:"li"},"set-cookie")," header is now handled correctly when using Spring WebFlux. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1904"}),"#1904")),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where the base URL of the received request is set incorrectly when using Spring WebFlux. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1904"}),"#1904")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"HttpHealthCheckedEndpoint")," does not leak connections and requests after ",Object(n.b)("inlineCode",{parentName:"li"},"close()")," is called. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1899"}),"#1899")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"BraveClient")," does not trigger ",Object(n.b)("inlineCode",{parentName:"li"},"RequestLogAvailabilityException")," anymore when the request being traced has failed without sending any data. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1911"}),"#1911")," ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1912"}),"#1912")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"@ConsumesJson")," annotation now accepts JSON documents with any charsets rather than only ",Object(n.b)("inlineCode",{parentName:"li"},"UTF-8"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1920"}),"#1920")),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"IllegalStateException")," raised by ",Object(n.b)("inlineCode",{parentName:"li"},"pushIfAbsent()")," is now propagated properly to the ",Object(n.b)("inlineCode",{parentName:"li"},"CompletableFuture")," created by ",Object(n.b)("inlineCode",{parentName:"li"},"RequestContext.makeContextAware()"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1920"}),"#1920"))),Object(n.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Deprecations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"HttpHealthCheckService")," and ",Object(n.b)("inlineCode",{parentName:"li"},"SettableHttpHealthCheckService")," have been deprecated in favor of ",Object(n.b)("inlineCode",{parentName:"li"},"HealthCheckService")," and its builder. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1878"}),"#1878"))),Object(n.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking changes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," may return ",Object(n.b)("inlineCode",{parentName:"li"},"null")," since this release. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1917"}),"#1917")),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"Endpoint")," returned by ",Object(n.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," now always refers to a single host, not an ",Object(n.b)("inlineCode",{parentName:"li"},"EndpointGroup"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1917"}),"#1917"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Use ",Object(n.b)("inlineCode",{parentName:"li"},"ClientRequestContext.endpointSelector().group()")," to retrieve the related ",Object(n.b)("inlineCode",{parentName:"li"},"EndpointGroup"),".")))),Object(n.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"gRPC 1.21.0 -> 1.22.1"),Object(n.b)("li",{parentName:"ul"},"Netty 4.1.37 -> 4.1.38"),Object(n.b)("li",{parentName:"ul"},"Tomcat 9.0.21 -> 9.0.22, 8.5.42 -> 8.5.43")),Object(n.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(n.b)(c,{usernames:["adriancole","anuraaga","babjo","hirakida","hyeonjames","ikhoon","imasahiro","kojilin","minwoox","trustin","woohhan"],mdxType:"ThankYou"}))}o.isMDXComponent=!0},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("E5k/"),a("Ll4R"),a("rzGZ"),a("Dq+y"),a("8npG"),a("PZd/");var n=a("q1tI"),i=a.n(n),r=a("2+3N"),s=a("1lec"),c=a("+ejy"),b=a("+9zj");t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(r).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var l=Object(b.a)(e.location),o=e.version||l.substring(l.lastIndexOf("/")+1);return o.match(/^[0-9]/)||(o=void 0),i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:o?o+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),o?i.a.createElement("h1",{id:"release-notes"},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),o," release notes"):"",e.children)}}}]);
//# sourceMappingURL=8-b189d3df9d27d3671ff9.js.map