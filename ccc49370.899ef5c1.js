(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{358:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(367),m=t(369),i=t(361);var c=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:n}=a,{title:i,description:o,nextItem:s,prevItem:g,editUrl:v}=n;return r.a.createElement(l.a,{title:i,description:o},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,v&&r.a.createElement("a",{href:v,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(s||g)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(c,{nextItem:s,prevItem:g}))))))}},369:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(365),m=t(359),i=t(368),c=t(361),o=t(372),s=t(366),g=t(96),v=t.n(g);const E=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:g,isBlogPostPage:u=!1}=e,{date:p,permalink:d,tags:_,readingTime:h}=n,{author:b,title:N,image:f}=t,k=t.author_url||t.authorURL,w=t.author_title||t.authorTitle,x=t.author_image_url||t.authorImageURL,I=Object(s.a)(f,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,f&&r.a.createElement("meta",{property:"og:image",content:I}),f&&r.a.createElement("meta",{property:"twitter:image",content:I}),f&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),r.a.createElement("article",{className:u?void 0:"margin-bottom--xl"},(()=>{const e=u?"h1":"h2",a=p.substring(0,10).split("-"),t=a[0],n=E[parseInt(a[1],10)-1],m=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",v.a.blogPostTitle)},u?N:r.a.createElement(c.a,{to:d},N)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:p,className:v.a.blogPostDate},n," ",m,", ",t," ",h&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(h)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:k,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:x,alt:b})),r.a.createElement("div",{className:"avatar__intro"},b&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},b)),r.a.createElement("small",{className:"avatar__subtitle"},w)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:o.a},a)),(_.length>0||g)&&r.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),_.map(({label:e,permalink:a})=>r.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},e))),g&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:n.permalink,"aria-label":"Read more about "+N},r.a.createElement("strong",null,"Read More"))))))}}}]);