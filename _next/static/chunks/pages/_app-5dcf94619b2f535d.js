(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1937)}])},7205:function(e,t,n){"use strict";n.d(t,{O_:function(){return u},Zv:function(){return r},a_:function(){return l},oZ:function(){return o}});let r=30,o={PHOTOS:"photos",VIDEOS:"videos"},l="MMXXIV",u=27},9720:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return s},isThenable:function(){return f}});let o="refresh",l="navigate",u="restore",i="server-patch",a="prefetch",c="fast-refresh",s="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},245:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(9082),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1032:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754)._(n(7294)),o=n(4879),l=n(1572),u=n(8373),i=n(6221),a=n(5933),c=n(4167),s=n(8874),f=n(6342),d=n(245),p=n(6015),h=n(9720),m=new Set;function b(e,t,n,r,o,u){if(u||(0,l.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let y=r.default.forwardRef(function(e,t){let n,u;let{href:m,as:y,children:x,prefetch:g=null,passHref:_,replace:j,shallow:T,scroll:E,locale:O,onClick:M,onMouseEnter:N,onTouchStart:C,legacyBehavior:w=!1,...k}=e;n=x,w&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let I=r.default.useContext(c.RouterContext),A=r.default.useContext(s.AppRouterContext),P=null!=I?I:A,R=!I,L=!1!==g,S=null===g?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:U,as:z}=r.default.useMemo(()=>{if(!I){let e=v(m);return{href:e,as:y?v(y):e}}let[e,t]=(0,o.resolveHref)(I,m,!0);return{href:e,as:y?(0,o.resolveHref)(I,y):t||e}},[I,m,y]),D=r.default.useRef(U),B=r.default.useRef(z);w&&(u=r.default.Children.only(n));let F=w?u&&"object"==typeof u&&u.ref:t,[H,K,V]=(0,f.useIntersection)({rootMargin:"200px"}),X=r.default.useCallback(e=>{(B.current!==z||D.current!==U)&&(V(),B.current=z,D.current=U),H(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[z,F,U,V,H]);r.default.useEffect(()=>{P&&K&&L&&b(P,U,z,{locale:O},{kind:S},R)},[z,U,K,O,L,null==I?void 0:I.locale,P,R,S]);let G={ref:X,onClick(e){w||"function"!=typeof M||M(e),w&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,o,u,i,a,c,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](n,o,{shallow:i,locale:c,scroll:e}):t[u?"replace":"push"](o||n,{scroll:e})};s?r.default.startTransition(d):d()}(e,P,U,z,j,T,E,O,R)},onMouseEnter(e){w||"function"!=typeof N||N(e),w&&u.props&&"function"==typeof u.props.onMouseEnter&&u.props.onMouseEnter(e),P&&(L||!R)&&b(P,U,z,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:S},R)},onTouchStart(e){w||"function"!=typeof C||C(e),w&&u.props&&"function"==typeof u.props.onTouchStart&&u.props.onTouchStart(e),P&&(L||!R)&&b(P,U,z,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:S},R)}};if((0,i.isAbsoluteUrl)(z))G.href=z;else if(!w||_||"a"===u.type&&!("href"in u.props)){let e=void 0!==O?O:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,d.getDomainLocale)(z,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);G.href=t||(0,p.addBasePath)((0,a.addLocale)(z,e,null==I?void 0:I.defaultLocale))}return w?r.default.cloneElement(u,G):r.default.createElement("a",{...k,...G},n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7294),o=n(6231),l="function"==typeof IntersectionObserver,u=new Map,i=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!l,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(c||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,s,d.current]),[p,s,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1937:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893);n(7133);var o=n(4298),l=n.n(o),u=n(7294),i=n(1664),a=n.n(i),c=e=>{let{name:t,logo:n}=e;return(0,r.jsx)("nav",{className:"flex py-2 border-b",children:(0,r.jsx)("div",{className:"w-3/12 md:w-7/12 md:mx-auto",children:(0,r.jsx)("div",{className:"md:w-2/12",children:(0,r.jsx)(a(),{href:"/",children:n?(0,r.jsx)("img",{alt:t,src:n,className:"w-full"}):(0,r.jsx)("h1",{className:"font-bold leading-relaxed tracking-tight text-2xl text-neutral-800",children:t})})})})})},s=n(7205),f=e=>{let{license:t,links:n,repo:o,commitID:l}=e;return(0,r.jsx)("footer",{className:"flex py-4 text-center md:mt-10 mt-5",children:(0,r.jsxs)("div",{className:"md:w-7/12 mx-auto font-semibold",children:[(0,r.jsxs)("div",{className:"md:text-sm mb-10",children:[n.map(e=>{let{url:t,label:n}=e;return(0,r.jsx)(a(),{href:t,className:"md:mx-4 mb-1 md:inline block",children:n},t+n)}),(0,r.jsx)(a(),{href:o,className:"mx-4",children:"Source Code"})]}),(0,r.jsx)("div",{className:"text-sm font-normal text-neutral-400",children:(0,r.jsxs)("p",{children:["\xa9 ",s.a_," ",(0,r.jsx)(a(),{className:"text-neutral-600",target:"_blank",rel:"noopener noreferer",href:"https://github.com/faultables",children:"faultables"})," ","• All media is licensed under"," ",(0,r.jsx)(a(),{className:"underline",href:t.url,children:t.name})," ","unless stated otherwise •"," ",(0,r.jsx)(a(),{className:"text-neutral-600",target:"_blank",rel:"noopener noreferer",href:"".concat(o,"/commit/").concat(l),children:l})]})})]})})},d=n(356),p=n(3454);let h=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"flex items-center justify-between w-full my-5",children:(0,r.jsx)("div",{className:"lg:w-7/12 mx-auto",children:t})})};var m=e=>{let{Component:t,pageProps:n}=e;return console.log(p.env.UMAMI_ENABLED),(0,r.jsxs)(u.Fragment,{children:[(0,r.jsx)(c,{name:d.mx.I,logo:d.mx.j}),(0,r.jsx)(h,{children:(0,r.jsx)(t,{...n})}),(0,r.jsx)(f,{repo:d.Mv.O9,links:d.Mv.Ok,license:d.Mv.Vl,commitID:"9258f93"}),p.env.UMAMI_ENABLED?(0,r.jsx)(l(),{strategy:"beforeInteractive",src:p.env.UMAMI_SCRIPT_URL,"data-website-id":p.env.UMAMI_WEBSITE_ID}):null]})}},7133:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function l(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var a=[],c=!1,s=-1;function f(){c&&r&&(c=!1,r.length?a=r.concat(a):s=-1,a.length&&d())}function d(){if(!c){var e=i(f);c=!0;for(var t=a.length;t;){for(r=a,a=[];++s<t;)r&&r[s].run();s=-1,t=a.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||c||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}},u=!0;try{t[e](l,l.exports,r),u=!1}finally{u&&delete n[e]}return l.exports}r.ab="//";var o=r(229);e.exports=o}()},1664:function(e,t,n){e.exports=n(1032)},4298:function(e,t,n){e.exports=n(3773)},356:function(e){"use strict";e.exports=JSON.parse('{"mx":{"I":"not instagram™","j":"https://s3.rizaldy.club/0x0/d43840c5ee4ec66a3bee3c6e2.png"},"N5":{"avatar":"https://s3.rizaldy.club/0x0/IMG_6279.JPG","username":"faultables","follow_url":"https://edgy.social/@rizaldy","message_url":"mailto:rizaldy@duck.com","display_name":"rizaldy","about":"SRE, DevOps, and everything in between","link":"rizaldy.club"},"Mv":{"O9":"https://github.com/faultables/ig.rizaldy.club","Ok":[{"label":"About","url":"/static/about"},{"label":"Blog","url":"https://rizaldy.club"},{"label":"Mastodon","url":"https://edgy.social/@rizaldy"},{"label":"Bluesky","url":"https://bsky.app/profile/rizaldy.club"}],"Vl":{"name":"CC BY-NC-SA 4.0","url":"https://creativecommons.org/licenses/by-nc-sa/4.0/"}}}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(2937)}),_N_E=e.O()}]);