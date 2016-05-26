(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"2+3N":function(e){e.exports=JSON.parse('{"/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},J3ia:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("E5k/"),a("q1tI");var r=a("7ljp"),n=a("JkCF");var i,c={},s=(i="ThankYou",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),o={_frontmatter:c},l=n.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(l,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#-new-features","aria-label":" new features permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🌟 New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"New ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"}),"type://CircuitBreakerRule")," and ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://CircuitBreakerRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContent.html"}),"type://CircuitBreakerRuleWithContent")," API let you define a complex\ncircuit breaking policy conveniently. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2726"}),"#2726")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"CircuitBreakerRule myRule =\n    CircuitBreakerRule.of(\n        // A failure if an Exception is raised.\n        CircuitBreakerRule.onException(),\n        // Neither a success nor a failure because\n        // the request has not been handled by the server.\n        CircuitBreakerRule.builder()\n                          .onUnprocessed()\n                          .thenIgnore(),\n        // A failure if the response is 5xx.\n        CircuitBreakerRule.onServerErrorStatus(),\n        // A success if the response is 2xx.\n        CircuitBreakerRule.builder()\n                          .onStatusClass(HttpStatusClass.SUCCESS)\n                          .thenSuccess(),\n        // Neither a success nor a failure. Do not take this response into account.\n        CircuitBreakerRule.builder().thenIgnore());\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now easily bind an MDC property to a ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext")," and log it using a logging framework.\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2634"}),"#2634")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2724"}),"#2724")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2729"}),"#2729")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'MDC.put("transactionId", "1234");\nWebClient client = ...;\ntry (SafeCloseable ignored = Clients.withContextCustomizer(ctx -> {\n    RequestScopedMdc.copy(ctx, "transactionId");\n}) {\n    assert MDC.get("transactionId").equals("1234");\n\n    client.execute(...);\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now install a custom hook to ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContextStorage:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContextStorage.html"}),"type://RequestContextStorage")," in runtime, usually at startup time. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2723"}),"#2723")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'RequestContextStorage.hook(delegate -> new RequestContextStorageWrapper(delegate) {\n    @Nullable\n    @Override\n    public <T extends RequestContext> T push(RequestContext toPush) {\n        // Usually, you can just use RequestScopedMdc for this purpose.\n        MDC.put("foo", toPush.attr(FOO));\n        return super.push(toPush);\n    }\n\n    @Override\n    public void pop(RequestContext current, @Nullable RequestContext toRestore) {\n        MDC.remove("foo");\n        super.pop(current, toRestore);\n    }\n\n    ...\n}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now set method parameter descriptions for annotated services in\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"}),"type://DocService")," using Javadoc. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2697"}),"#2697"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now easily sanitize headers and content using ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RegexBasedSanitizer:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/RegexBasedSanitizer.html"}),"type://RegexBasedSanitizer"),". ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1810"}),"#1810")," ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2721"}),"#2721")))),Object(r.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"📈 Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can now easily call ",Object(r.b)("inlineCode",{parentName:"li"},"ownAttr()")," from ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2727"}),"#2727"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You don't have to check if the context is ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://ClientRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html"}),"type://ClientRequestContext")," or not anymore."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"root()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"ownAttrs()")," are pulled up as well.")))),Object(r.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🛠️ Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can now use Armeria 0.99.6 with Micrometer 1.3.9.\n(It is recommended to use Micrometer 1.5.1, though.) ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2742"}),"#2742")),Object(r.b)("li",{parentName:"ul"},"You can now retry even when the current ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://EndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointGroup.html"}),"type://EndpointGroup")," is empty. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2736"}),"#2736")),Object(r.b)("li",{parentName:"ul"},"You can send a request by setting the authority and scheme header to ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://RequestHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestHeaders.html"}),"type://RequestHeaders"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2730"}),"#2730")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2734"}),"#2734")),Object(r.b)("li",{parentName:"ul"},"You no longer see ",Object(r.b)("inlineCode",{parentName:"li"},"&lt;zero-length response&gt;")," in ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"}),"type://DocService")," anymore. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2732"}),"#2732")),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"NullPointerException")," is not raised anymore due to the dependency order when Armeria is shaded.\n",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2731"}),"#2731")," ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2735"}),"#2735"))),Object(r.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"☢️ Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RetryStrategy")," and ",Object(r.b)("inlineCode",{parentName:"li"},"RetryStrategyWithContent")," are gone in favor of\n",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://RetryRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html"}),"type://RetryRule")," and ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://RetryRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleWithContent.html"}),"type://RetryRuleWithContent"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2726"}),"#2726")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"CircuitBreakerStrategy")," and ",Object(r.b)("inlineCode",{parentName:"li"},"CircuitBreakerStrategyWithContent")," are gone in favor of\n",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"}),"type://CircuitBreakerRule")," and ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://CircuitBreakerRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContent.html"}),"type://CircuitBreakerRuleWithContent"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2726"}),"#2726")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EndpointSelector.select()")," (and thus EndpointGroup.select() as well) now returns ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"\ninstead of throwing an ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"type://EmptyEndpointGroupException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EmptyEndpointGroupException.html"}),"type://EmptyEndpointGroupException"),". ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2736"}),"#2736")),Object(r.b)("li",{parentName:"ul"},"The method signature of ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactory.acquireEventLoop()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"EventLoopScheduler.acquire()"),"\nhave been changed. ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2736"}),"#2736"))),Object(r.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"⛓ Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Brave 5.11.2 → 5.12.3"),Object(r.b)("li",{parentName:"ul"},"grpc-kotlin-stub 0.1.1 → 0.1.2"),Object(r.b)("li",{parentName:"ul"},"io.dropwizard.metrics 4.1.7 → 4.1.9"),Object(r.b)("li",{parentName:"ul"},"Jetty 9.4.28.v20200408 → 9.4.29.v20200521"),Object(r.b)("li",{parentName:"ul"},"reactor-grpc 1.0.0 → 1.0.1"),Object(r.b)("li",{parentName:"ul"},"Retrofit 2.8.1 → 2.9.0"),Object(r.b)("li",{parentName:"ul"},"Rxjava3 3.0.3 → 3.0.4"),Object(r.b)("li",{parentName:"ul"},"Shaded dependencies",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Caffeine 2.8.2 → 2.8.4"))),Object(r.b)("li",{parentName:"ul"},"Example dependencies",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Kotlin 1.3.71 → 1.3.72"),Object(r.b)("li",{parentName:"ul"},"Kotlin Coroutines 1.3.6 → 1.3.7")))),Object(r.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🙇 Thank you"),Object(r.b)(s,{usernames:["adriancole","amitvc","andrey-tpt","anuraaga","hueneburg","ikhoon","imasahiro","jrhee17","KarboniteKream","matsumana","minwoox","okue","trustin"],mdxType:"ThankYou"}))}b.isMDXComponent=!0},JkCF:function(e,t,a){"use strict";a("E5k/"),a("Ll4R"),a("rzGZ"),a("Dq+y"),a("8npG"),a("PZd/");var r=a("q1tI"),n=a.n(r),i=a("2+3N"),c=a("1lec"),s=a("+ejy"),o=a("+9zj");t.a=function(e){var t={},a={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(i).forEach((function(e){var a=e[0],r=e[1];t[r]=a})),Object.entries(c).forEach((function(e){var t=e[0],r=e[1];a[r]=t}));var l=Object(o.a)(e.location),b=e.version||l.substring(l.lastIndexOf("/")+1);return b.match(/^[0-9]/)||(b=void 0),n.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:b?b+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),b?n.a.createElement("h1",{id:"release-notes"},n.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),b," release notes"):"",e.children)}}}]);
//# sourceMappingURL=19-bf58e5fdaffc3755841b.js.map