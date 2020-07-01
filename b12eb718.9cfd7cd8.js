(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(7),i=(n(0),n(359)),l={id:"go-distributed-cron",title:"Distributed CRON"},s={id:"version-0.23.1/go-distributed-cron",isDocsHomePage:!1,title:"Distributed CRON",description:"It is relatively straightforward to turn any Temporal workflow into a Cron workflow. All you need",source:"@site/versioned_docs/version-0.23.1/go-distributed-cron.md",permalink:"/docs/0.23.1/go-distributed-cron",editUrl:"https://github.com/temporalio/temporal-documentation-legacy-v2/blob/master/versioned_docs/version-0.23.1/go-distributed-cron.md",version:"0.23.1",sidebar:"version-0.23.1/docs",previous:{title:"Sessions",permalink:"/docs/0.23.1/go-sessions"},next:{title:"Tracing and Context Propagation",permalink:"/docs/0.23.1/go-tracing"},latestVersionMainDocPermalink:"/docs/overview"},a=[{value:"Convert existing cron workflow",id:"convert-existing-cron-workflow",children:[]},{value:"Retrieve last successful result",id:"retrieve-last-successful-result",children:[]}],c={rightToc:a};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It is relatively straightforward to turn any Temporal workflow into a Cron workflow. All you need\nis to supply a cron schedule when starting the workflow using the CronSchedule\nparameter of\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://pkg.go.dev/go.temporal.io/temporal/internal#StartWorkflowOptions"}),"StartWorkflowOptions"),"."),Object(i.b)("p",null,"You can also start a workflow using the Temporal CLI with an optional cron schedule using the ",Object(i.b)("inlineCode",{parentName:"p"},"--cron")," argument."),Object(i.b)("p",null,"For workflows with CronSchedule:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Cron schedule is based on UTC time. For example cron schedule "15 8 ',"*"," ","*"," ","*",'"\nwill run daily at 8:15am UTC.'),Object(i.b)("li",{parentName:"ul"},"If a workflow failed and a RetryPolicy is supplied to the StartWorkflowOptions\nas well, the workflow will retry based on the RetryPolicy. While the workflow is\nretrying, the server will not schedule the next cron run."),Object(i.b)("li",{parentName:"ul"},"Temporal server only schedules the next cron run after the current run is\ncompleted. If the next schedule is due while a workflow is running (or retrying),\nthen it will skip that schedule."),Object(i.b)("li",{parentName:"ul"},"Cron workflows will not stop until they are terminated or cancelled.")),Object(i.b)("p",null,"Temporal supports the standard cron spec:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"// CronSchedule - Optional cron schedule for workflow. If a cron schedule is specified, the workflow will run\n// as a cron based on the schedule. The scheduling will be based on UTC time. The schedule for next run only happen\n// after the current run is completed/failed/timeout. If a RetryPolicy is also supplied, and the workflow failed\n// or timed out, the workflow will be retried based on the retry policy. While the workflow is retrying, it won't\n// schedule its next run. If next schedule is due while the workflow is running (or retrying), then it will skip that\n// schedule. Cron workflow will not stop until it is terminated or cancelled (by returning temporal.CanceledError).\n// The cron spec is as following:\n// \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 minute (0 - 59)\n// \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 hour (0 - 23)\n// \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the month (1 - 31)\n// \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 month (1 - 12)\n// \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 day of the week (0 - 6) (Sunday to Saturday)\n// \u2502 \u2502 \u2502 \u2502 \u2502\n// \u2502 \u2502 \u2502 \u2502 \u2502\n// * * * * *\nCronSchedule string\n")),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://crontab.guru/"}),"crontab guru site")," is useful for testing your cron expressions."),Object(i.b)("h2",{id:"convert-existing-cron-workflow"},"Convert existing cron workflow"),Object(i.b)("p",null,"Before CronSchedule was available, the previous approach to implementing cron\nworkflows was to use a delay timer as the last step and then return\n",Object(i.b)("inlineCode",{parentName:"p"},"ContinueAsNew"),". One problem with that implementation is that if the workflow\nfails or times out, the cron would stop."),Object(i.b)("p",null,"To convert those workflows to make use of Temporal CronSchedule, all you need is to\nremove the delay timer and return without using\n",Object(i.b)("inlineCode",{parentName:"p"},"ContinueAsNew"),". Then start the workflow with the desired CronSchedule."),Object(i.b)("h2",{id:"retrieve-last-successful-result"},"Retrieve last successful result"),Object(i.b)("p",null,"Sometimes it is useful to obtain the progress of previous successful runs.\nThis is supported by two new APIs in the client library:\n",Object(i.b)("inlineCode",{parentName:"p"},"HasLastCompletionResult")," and ",Object(i.b)("inlineCode",{parentName:"p"},"GetLastCompletionResult"),". Below is an example of how\nto use this in Go:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"func CronWorkflow(ctx workflow.Context) (CronResult, error) {\n    startTimestamp := time.Time{} // By default start from 0 time.\n    if workflow.HasLastCompletionResult(ctx) {\n        var progress CronResult\n        if err := workflow.GetLastCompletionResult(ctx, &progress); err == nil {\n            startTimestamp = progress.LastSyncTimestamp\n        }\n    }\n    endTimestamp := workflow.Now(ctx)\n\n    // Process work between startTimestamp (exclusive), endTimestamp (inclusive).\n    // Business logic implementation goes here.\n\n    result := CronResult{LastSyncTimestamp: endTimestamp}\n    return result, nil\n}\n")),Object(i.b)("p",null,"Note that this works even if one of the cron schedule runs failed. The\nnext schedule will still get the last successful result if it ever successfully\ncompleted at least once. For example, for a daily cron workflow, if the first day\nrun succeeds and the second day fails, then the third day run will still get\nthe result from first day's run using these APIs."))}u.isMDXComponent=!0},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?o.a.createElement(h,s({ref:t},c,{components:n})):o.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);