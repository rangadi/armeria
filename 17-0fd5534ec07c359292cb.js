(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2+3N":function(e){e.exports=JSON.parse('{"/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("E5k/"),t("Ll4R"),t("rzGZ"),t("Dq+y"),t("8npG"),t("PZd/");var i=t("q1tI"),n=t.n(i),r=t("2+3N"),s=t("1lec"),c=t("+ejy"),b=t("+9zj");a.a=function(e){var a={},t={},i={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(r).forEach((function(e){var t=e[0],i=e[1];a[i]=t})),Object.entries(s).forEach((function(e){var a=e[0],i=e[1];t[i]=a}));var l=Object(b.a)(e.location),o=e.version||l.substring(l.lastIndexOf("/")+1);return o.match(/^[0-9]/)||(o=void 0),n.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:i,prefix:"release-notes",pageTitle:o?o+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),o?n.a.createElement("h1",{id:"release-notes"},n.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),o," release notes"):"",e.children)}},MnIR:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return o}));t("rzGZ"),t("Dq+y"),t("8npG"),t("Ggvi"),t("E5k/"),t("q1tI");var i=t("7ljp"),n=t("JkCF");var r,s={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={_frontmatter:s},l=n.a;function o(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(i.b)(l,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-new-features","aria-label":" new features permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🌟 New features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can now make your client connect via a SOCKS 4, SOCKS 5 or HTTP CONNECT proxy server. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2321"}),"#2321")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2496"}),"#2496"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ClientFactory.builder()\n             .proxyConfig(ProxyConfig.socks4(socksProxyServer.address()))\n             .build();\n"))),Object(i.b)("li",{parentName:"ul"},"You can now configure to send ",Object(i.b)("inlineCode",{parentName:"li"},"PING")," on idle HTTP/2 connections. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1263"}),"#1263")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2409"}),"#2409"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ClientFactory.builder()\n             .http2PingTimeoutMillis(3000)\n             .build();\n"))),Object(i.b)("li",{parentName:"ul"},"You can now make an alias for the pre-defined MDC key when using ",Object(i.b)("inlineCode",{parentName:"li"},"RequestContextExportingAppender"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2512"}),"#2512")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2531"}),"#2531"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),"<export>request_id=req.id</export> \x3c!-- request_id is an alias for the built-in property. --\x3e\n<export>my_foo_bar=attr:com.example.Foo#ATTR_BAR</export>    \x3c!-- my_foo_bar is an alias. --\x3e\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Please check out ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"http://line.github.io/armeria/advanced-logging.html#customizing-mdc-keys"}),"http://line.github.io/armeria/advanced-logging.html#customizing-mdc-keys")," for more information."))),Object(i.b)("li",{parentName:"ul"},"You can now set an example path and queries for ",Object(i.b)("inlineCode",{parentName:"li"},"DocService"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2195"}),"#2195")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2546"}),"#2546")),Object(i.b)("li",{parentName:"ul"},"You can now customize the default log name of a service. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2626"}),"#2626"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'sb.route().addRoute(...).defaultLogName("name").build(service);\n'))),Object(i.b)("li",{parentName:"ul"},"You can now access a parent log from a child log using ",Object(i.b)("inlineCode",{parentName:"li"},"RequestLogAccess.parent()"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2599"}),"#2599")),Object(i.b)("li",{parentName:"ul"},"gRPC client now supports gRPC ",Object(i.b)("inlineCode",{parentName:"li"},"CallCredentials"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2619"}),"#2619")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2622"}),"#2622")),Object(i.b)("li",{parentName:"ul"},"You can now send customized responses from ",Object(i.b)("inlineCode",{parentName:"li"},"ThrottlingService")," using ",Object(i.b)("inlineCode",{parentName:"li"},"ThrottlingAcceptHandler")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ThrottlingRejectHandler"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2482"}),"#2482")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2503"}),"#2503")),Object(i.b)("li",{parentName:"ul"},"You can now use advanced throttling algorithm based on Token-Bucket rate-limiting and Bucket4j library. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2566"}),"#2566")),Object(i.b)("li",{parentName:"ul"},"You can now create your own storage to store ",Object(i.b)("inlineCode",{parentName:"li"},"RequestContext"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2514"}),"#2514")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2610"}),"#2610"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"// You should implement `RequestContextStorageProvider` and use SPI to return the `RequestContextStorage`.\npublic class CustomizedStorageProvider implements RequestContextStorageProvider {\n    @Override\n    public RequestContextStorage newStorage() {\n        return new CustomizedStorage();\n    }\n}\n")))),Object(i.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"📈 Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can now set timeout using ",Object(i.b)("inlineCode",{parentName:"p"},"TimeoutMode.")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2535"}),"#2535")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2571"}),"#2571")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"// Before\nctx.extendResponseTimeoutMillis(10000);\nctx.setResponseTimeoutAfterMillis(10000);\n\n// After\nctx.setResponseTimeoutMillis(TimeoutMode.EXTEND, 10000);\nctx.setResponseTimeoutMillis(TimeoutMode.SET_FROM_NOW, 10000);\n")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"set(Request|Response)Timeout")," is now undeprecated.")))),Object(i.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🛠️ Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DNS resolution is timed out after ",Object(i.b)("inlineCode",{parentName:"li"},"queryTimeoutMillis"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2623"}),"#2623")),Object(i.b)("li",{parentName:"ul"},"You can now return ",Object(i.b)("inlineCode",{parentName:"li"},"Single<HttpResponse>")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Maybe<HttpResponse>")," in an annotated service. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2624"}),"#2624")),Object(i.b)("li",{parentName:"ul"},"You can now register and monitor Reactor ",Object(i.b)("inlineCode",{parentName:"li"},"Scheduler")," with Prometheus in Armeria Server. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2612"}),"#2612")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RequestLog.name")," and some other properties are copied to the child log in ",Object(i.b)("inlineCode",{parentName:"li"},"RetyringClient"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2551"}),"#2551")," ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2560"}),"#2560")),Object(i.b)("li",{parentName:"ul"},"You no longer see ",Object(i.b)("inlineCode",{parentName:"li"},"ClosedStreamException")," due to the stream creation reversal. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2597"}),"#2597")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"IllegalStateException")," is not raised anymore while building a WebFlux response. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2613"}),"#2613")),Object(i.b)("li",{parentName:"ul"},"Annotated service's log name is always set. ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2626"}),"#2626"))),Object(i.b)("h2",{id:"️-deprecations",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🏚️ Deprecations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deprecated ",Object(i.b)("inlineCode",{parentName:"li"},"ZooKeeperUpdatingListener.nodeValueCodec()")," in favor of ",Object(i.b)("inlineCode",{parentName:"li"},"ZooKeeperUpdatingListener.codec()"),". ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2552"}),"#2552"))),Object(i.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"☢️ Breaking changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Most of the deprecated APIs are gone. ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2543"}),"#2543")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If you have trouble finding APIs to replace, please upgrade to 0.98.7 first and use your IDE's advanced feature to search deprecated APIs. Then, you can easily upgrade to 0.99.0."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"armeria-dropwizard")," is now for Dropwizard 2. If you want to use Dropwizard ",Object(i.b)("inlineCode",{parentName:"p"},"1.3.x"),", use ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-dropwizard1"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2556"}),"#2556"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"armeria-rxjava")," is now for RxJava 3. If you want to use RxJava 2, use ",Object(i.b)("inlineCode",{parentName:"p"},"armeria-rxjava2"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2378"}),"#2378")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2501"}),"#2501"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ClientBuilder.path(path)")," is now gone. ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2525"}),"#2525")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2538"}),"#2538")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If you want to specify the path other than ",Object(i.b)("inlineCode",{parentName:"li"},"/"),", you should specify it when creating ",Object(i.b)("inlineCode",{parentName:"li"},"ClientBuilder"),".",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'// before\nClients.builer(SessionProtocol.HTTP, Endpoint.of("127.0.0.1"))\n       .path("/foo");\n// after\nClients.builer(SessionProtocol.HTTP, Endpoint.of("127.0.0.1"), "/foo");\n'))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ClosedSessionException")," now extends ",Object(i.b)("inlineCode",{parentName:"p"},"ClosedStreamException"),". ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2596"}),"#2596")," ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2616"}),"#2616"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"AuthSuccessHandler<HttpRequest, HttpResponse>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"AuthFailureHandler<HttpRequest, HttpResponse>")," now don't have type parameters.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The meter name ",Object(i.b)("inlineCode",{parentName:"p"},"armeriaBlockingTaskExecutor")," is now ",Object(i.b)("inlineCode",{parentName:"p"},"blockingTaskExecutor")," with the prefix ",Object(i.b)("inlineCode",{parentName:"p"},"armeria.executor"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"RequestContext.set*TimeoutAfter*()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"extend*Timeout*()")," methods have been removed. Call ",Object(i.b)("inlineCode",{parentName:"p"},"set*Timeout*()")," with a ",Object(i.b)("inlineCode",{parentName:"p"},"TimeoutMode")," specified instead."))),Object(i.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"⛓ Dependencies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Brave 5.9.5 -> 5.10.2"),Object(i.b)("li",{parentName:"ul"},"bucket4j-core 4.10.0"),Object(i.b)("li",{parentName:"ul"},"Curator 4.2.0 -> 4.3.0"),Object(i.b)("li",{parentName:"ul"},"java-jwt 3.10.0 -> 3.10.1"),Object(i.b)("li",{parentName:"ul"},"jetty-alpn-agent 2.0.9 -> 2.10.0"),Object(i.b)("li",{parentName:"ul"},"Micrometer 1.3.5 -> 1.4.0"),Object(i.b)("li",{parentName:"ul"},"Netty 4.1.37.Final -> 4.1.48.Final",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"netty-tcnative-boringssl-static 2.0.29.Final -> 2.0.30.Final"))),Object(i.b)("li",{parentName:"ul"},"Opensaml 3.4.3 -> 3.4.5"),Object(i.b)("li",{parentName:"ul"},"Reactor 3.3.3.RELEASE -> 3.3.4.RELEASE"),Object(i.b)("li",{parentName:"ul"},"Retrofit 2.7.2 -> 2.8.0"),Object(i.b)("li",{parentName:"ul"},"RxJava 3.0.0 -> 3.0.1"),Object(i.b)("li",{parentName:"ul"},"Spring Boot 2.2.4 -> 2.2.5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Spring2.1 2.1.12.RELEASE -> 2.1.13.RELEASE"))),Object(i.b)("li",{parentName:"ul"},"Tomcat 9.0.31 -> 9.0.33",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Tomcat8.5 8.5.51 -> 8.5.53"))),Object(i.b)("li",{parentName:"ul"},"Zookeeper 3.5.7 -> 3.6.0")),Object(i.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(i.b)("a",Object.assign({parentName:"h2"},{href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"}),Object(i.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(i.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🙇 Thank you"),Object(i.b)(c,{usernames:["adriancole","alex-lx","AmosDoan","andrewom","anuraaga","cricket007","heowc","hexoul","ikhoon","imasahiro","jyblue","joschi","jrhee17","KarboniteKream","kojilin","mauhiz","max904-github","minwoox","rstoyanchev","sivaalli","trustin"],mdxType:"ThankYou"}))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=17-0fd5534ec07c359292cb.js.map