/*! For license information please see index.95a34ff6.js.LICENSE.txt */
!function(){var e,t,r,n,a={40536:function(e,t,r){"use strict";r.r(t),r("94541"),r("38174"),r("43118"),r("66364"),r("31907"),r("67475"),r("18936"),r("54335"),r("64072"),r("87395");var n=r("11527"),a=r("50959"),s=r("84875"),i=r.n(s),l=r("67907"),o=r("56780"),c=r("71716"),u=r("77701"),d=r("27907"),p=r("939"),m=r("97248"),h=r("54121"),x=r("53768");let f=(0,l.makeStyles)({root:{display:"flex"},aside:{width:"330px",height:"100vh",backgroundColor:l.tokens.colorNeutralStroke3,display:"flex",flexShrink:0,flexDirection:"column"},empty:{textAlign:"center"},tabWrap:{alignItems:"flex-start",display:"flex",justifyContent:"center",...l.shorthands.padding("10px"),rowGap:"20px",flexShrink:0},menuWrap:{...l.shorthands.padding("20px"),overflowY:"auto",flexGrow:1,display:"flex",rowGap:"14px",flexDirection:"column"},eventTag:{flexGrow:"1",textAlign:"right"},menuItem:{...l.shorthands.padding("6px","16px"),...l.shorthands.borderRadius("4px"),...l.shorthands.transition("all","120ms"),backgroundColor:l.tokens.colorNeutralBackground1,display:"flex",alignItems:"center",cursor:"pointer",columnGap:"12px",color:l.tokens.colorNeutralForeground1,":hover":{color:l.tokens.colorCompoundBrandStrokePressed}},menuItemIsActive:{color:l.tokens.colorPaletteRedBorderActive,":hover":{color:l.tokens.colorPaletteRedBorderActive}},content:{height:"100vh",...l.shorthands.overflow("hidden","auto"),flexGrow:1,backgroundColor:l.tokens.colorSubtleBackgroundHover},header:{display:"flex",justifyContent:"space-between",...l.shorthands.padding("20px")},headerLeft:{...l.shorthands.gap("10px"),display:"flex"},headerRight:{...l.shorthands.gap("10px"),display:"flex",alignItems:"center"},link:{color:"inherit","&:active":{color:"inherit"}},player:{flexGrow:1,minHeight:"1px",boxSizing:"border-box",display:"flex",justifyContent:"center"}}),g=[{name:"\u6240\u6709",value:x.TypeEnum["\u6240\u6709"]},{name:"\u4E8B\u4EF6",value:x.TypeEnum["\u4E8B\u4EF6"]},{name:"\u54E8\u5175",value:x.TypeEnum["\u54E8\u5175"]},{name:"\u8BB0\u5F55\u4EEA",value:x.TypeEnum["\u884C\u8F66\u8BB0\u5F55\u4EEA"]}];t.default=function(){var e;let t=f(),[r,s]=(0,a.useState)(x.TypeEnum["\u6240\u6709"]),[v,j]=(0,a.useState)({type:x.TypeEnum["\u6240\u6709"],list:[],events:[]});function y(e){j({...v,list:e})}async function b(e){if(v.current){let{src_f:e,src_b:t,src_l:r,src_r:n}=v.current;URL.revokeObjectURL(e),URL.revokeObjectURL(t),URL.revokeObjectURL(r),URL.revokeObjectURL(n)}let t=v.list.find(t=>{let{time:r}=t;return r===e});if(!t)return;let[r,n,a,s]=[await t.src_f.get(),await t.src_b.get(),await t.src_l.get(),await t.src_r.get()];j({...v,current:{...t,src_f:r.url,src_f_name:r.name,src_f_path:t.src_f.path,src_b:n.url,src_b_name:n.name,src_b_path:t.src_b.path,src_l:a.url,src_l_name:a.name,src_l_path:t.src_l.path,src_r:s.url,src_r_name:s.name,src_r_path:t.src_r.path}})}(0,a.useEffect)(()=>(document.onkeydown=e=>{"Space"==e.code&&e.preventDefault()},()=>{document.onkeydown=null}),[]);let k=v.list.filter(e=>{let{type:t}=e;return t===r||r===x.TypeEnum["\u6240\u6709"]}).sort((e,t)=>t.time-e.time);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:t.root,children:[(0,n.jsxs)("div",{className:t.aside,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:t.tabWrap,children:(0,n.jsx)(l.TabList,{selectedValue:r,onTabSelect:(e,t)=>s(t.value),children:g.map(e=>{let{name:t,value:r}=e;return(0,n.jsx)(l.Tab,{value:r,children:t},r)})})}),(0,n.jsx)(l.Divider,{})]}),(0,n.jsxs)("div",{className:t.menuWrap,children:[k.map(e=>{var r;return(0,n.jsxs)("div",{className:i()(t.menuItem,{[t.menuItemIsActive]:e.time===(null===(r=v.current)||void 0===r?void 0:r.time)}),onClick:()=>b(e.time),onKeyDown:e=>{e.preventDefault()},onKeyUp:e=>{e.preventDefault()},children:[(0,n.jsx)(o.Record24Regular,{}),e.title,(0,n.jsx)("div",{className:t.eventTag,children:e.event?(0,n.jsx)(l.Badge,{color:"danger",size:"extra-small"}):null})]},e.time)}),!k.length&&(0,n.jsx)("div",{className:t.empty,children:"\u6682\u65E0\u6570\u636E"})]})]}),(0,n.jsxs)("div",{className:t.content,children:[(0,n.jsxs)("div",{className:t.header,children:[(0,n.jsxs)("div",{className:t.headerLeft,children:[window.__TAURI_IPC__?(0,n.jsx)(m.default,{onAccess:y}):(0,n.jsx)(u.default,{onAccess:y}),window.__TAURI_IPC__&&v.current?(0,n.jsx)(p.default,{video:v.current}):(0,n.jsx)(d.default,{video:v.current})]}),(0,n.jsxs)("div",{className:t.headerRight,children:[(0,n.jsx)(h.default,{}),(0,n.jsx)(l.Tooltip,{content:(0,n.jsxs)(n.Fragment,{children:["\u67E5\u770B\u6E90\u4EE3\u7801 (\u672C\u9879\u76EE",(0,n.jsx)(l.Caption1Stronger,{children:"\u4E0D\u4F1A\u4E0A\u4F20"}),"\u60A8\u7684\u9690\u79C1\u89C6\u9891\uFF0C\u5E76\u4E14\u63A5\u53D7\u516C\u5F00\u7684\u4EE3\u7801\u5BA1\u67E5)"]}),relationship:"label",children:(0,n.jsx)(l.Button,{icon:(0,n.jsx)("a",{className:t.link,href:"https://github.com/Mario34/tesla-camera",rel:"noreferrer",target:"_blank",children:(0,n.jsx)(o.Code24Regular,{})})})}),(0,n.jsx)(l.Tooltip,{content:(0,n.jsx)(n.Fragment,{children:"\u95EE\u9898\u53CD\u9988"}),relationship:"label",children:(0,n.jsx)(l.Button,{icon:(0,n.jsx)("a",{className:t.link,href:"https://github.com/Mario34/tesla-camera/issues/new?assignees=Mario34&labels=&template=%E6%84%8F%E8%A7%81%E6%88%96%E5%8F%8D%E9%A6%88.md&title=%E6%84%8F%E8%A7%81%E6%88%96%E5%8F%8D%E9%A6%88",rel:"noreferrer",target:"_blank",children:(0,n.jsx)(o.BookQuestionMark24Regular,{})})})})]})]}),(0,n.jsx)("div",{className:t.player,children:(0,n.jsx)(c.default,{video:v.current},null===(e=v.current)||void 0===e?void 0:e.time)})]})]})})}},54121:function(e,t,r){"use strict";r.r(t);var n=r("11527");r("50959");var a=r("67907"),s=r("56780"),i=r("15589"),l=r("74335"),o=r("30194");(0,l.onUpdaterEvent)(e=>{let{error:t,status:r}=e;console.log("Updater event",t,r)});t.default=()=>{let e=async()=>{try{(await (0,l.checkUpdate)()).shouldUpdate&&await (0,l.installUpdate)()}catch(e){(0,o.message)(JSON.stringify(e),{title:"\u66F4\u65B0\u53D1\u751F\u9519\u8BEF",type:"error"})}};return(0,n.jsx)(a.Tooltip,{content:`\u{5F53}\u{524D}\u{7248}\u{672C} v${i.version}\u{FF0C}\u{68C0}\u{67E5}\u{66F4}\u{65B0} `,relationship:"label",children:(0,n.jsx)(a.Button,{icon:(0,n.jsx)(s.ApprovalsApp24Regular,{}),onClick:()=>e()})})}},77701:function(e,t,r){"use strict";r.r(t),r("34210"),r("1056"),r("11160"),r("75698"),r("67475"),r("94541"),r("38174"),r("43118"),r("18936"),r("54335"),r("42464");var n=r("11527");r("50959");var a=r("67907"),s=r("56780"),i=r("74637"),l=r.n(i),o=r("53768");async function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[];for await(let n of(await e.values())){let e=`${t}/${n.name}`;"file"===n.kind&&r.push({fs:n,path:e,dir:`${t}/`}),"directory"===n.kind&&r.push(...await c(n,e))}return r}function u(e){let t=e.slice(0,10),r=e.slice(11,13),n=e.slice(14,16),a=e.slice(17,19);return l()(`${t} ${r}:${n}:${a}`).valueOf()}t.default=e=>{async function t(){let t=await window.showDirectoryPicker(),r=await c(t),n=function(e){let t=/^[0-9]{4}-[0-9]{2}-[0-9]{2}_[0-9]{2}-[0-9]{2}-[0-9]{2}-.+/,r={};return e.forEach(e=>{let{fs:n,path:a,dir:s}=e;if(!t.test(n.name))return;let i=n.name.slice(0,19),c=r[i];if(!c){var d;c={title:function(e){let t=u(e);return l()(t).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss")}(i),time:u(i),type:(d=a).includes("SavedClips")?o.TypeEnum["\u4E8B\u4EF6"]:d.includes("RecentClips")?o.TypeEnum["\u884C\u8F66\u8BB0\u5F55\u4EEA"]:d.includes("SentryClips")?o.TypeEnum["\u54E8\u5175"]:o.TypeEnum["\u6240\u6709"],dir:s},r[i]=c}let p={get:async()=>({url:URL.createObjectURL(await n.getFile()),name:i}),name:i,path:a};n.name.includes("front")&&(c.src_f=p),n.name.includes("back")&&(c.src_b=p),n.name.includes("right_repeater")&&(c.src_r=p),n.name.includes("left_repeater")&&(c.src_l=p)}),Object.values(r)}(r),a=r.filter(e=>{let{path:t}=e;return/.+event.json$/.test(t)}),s=[];for(let e=0;e<a.length;e++){let t=await a[e].fs.getFile();s.push(JSON.parse(await t.text()))}s=s.sort((e,t)=>l()(e.timestamp).valueOf()-l()(t.timestamp).valueOf());let i=n.sort((e,t)=>e.time-t.time);i.forEach((e,t)=>{let r=s.findIndex(t=>{let{timestamp:r}=t;return e.time>l()(r).valueOf()});if(r>-1){let e=s[r];s.splice(r,1),i[t-1]&&(i[t-1].event=l()(e.timestamp).valueOf())}}),e.onAccess(i)}return(0,n.jsx)(a.Tooltip,{content:(0,n.jsxs)(n.Fragment,{children:["\u9009\u62E9\u8F66\u8F7DU\u76D8\u4E2D\u7684",(0,n.jsx)(a.Body1Strong,{children:"TeslaCam"}),"\u76EE\u5F55\uFF0C\u6216\u8005\u662F",(0,n.jsx)(a.Body1Strong,{children:"TeslaCam"}),"\u6587\u4EF6\u76EE\u5F55\u7684\u62F7\u8D1D"]}),relationship:"label",children:(0,n.jsx)(a.Button,{icon:(0,n.jsx)(s.FolderAdd24Regular,{}),size:"large",onClick:()=>t()})})}},39363:function(e,t,r){"use strict";r.r(t),r("18936"),r("54335"),r("67475"),r("64072"),r("87395");var n=r("11527");r("50959");var a=r("67907"),s=r("56780"),i=r("53768");let l=(0,a.makeStyles)({root:{},badgeBox:{position:"relative"},badge:{position:"absolute",top:"0",left:"100%",transform:"translate(-40%, -40%)"},task:{marginBottom:"10px"},taskItem:{fontSize:"12px",whiteSpace:"break-spaces",wordBreak:"break-all",display:"flex",lineHeight:"24px",columnGap:"4px",alignItems:"center"},taskIcon:{height:"24px",width:"24px",flexShrink:"0"},taskLog:{fontSize:"12px"},taskCompletedLog:{fontSize:"12px"},failTag:{backgroundColor:a.tokens.colorPaletteRedBackground3,marginRight:"10px"},progressTag:{backgroundColor:a.tokens.colorPaletteMarigoldBackground2,marginRight:"10px"},completedTag:{backgroundColor:a.tokens.colorPaletteLightGreenBackground2,marginRight:"10px"}});t.default=e=>{var t,r;let o=l(),c=(null===(t=e.tasks)||void 0===t?void 0:t.filter(e=>e.status===i.ExportStatusEnum["\u8FDB\u884C\u4E2D"]))??[];return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Dialog,{modalType:"modal",children:[(0,n.jsx)(a.DialogTrigger,{children:(0,n.jsxs)("div",{className:o.badgeBox,children:[(0,n.jsx)(a.Button,{icon:(0,n.jsx)(s.TaskListSquareLtr24Regular,{}),size:"large"}),c.length>0?(0,n.jsx)(a.Badge,{appearance:"filled",className:o.badge,color:"severe",children:c.length>99?"99+":c.length}):null]})}),(0,n.jsx)(a.DialogSurface,{children:(0,n.jsxs)(a.DialogBody,{children:[(0,n.jsx)(a.DialogTitle,{children:"\u4EFB\u52A1\u5217\u8868"}),(0,n.jsx)(a.DialogContent,{children:null===(r=e.tasks)||void 0===r?void 0:r.map(e=>(0,n.jsxs)("div",{className:o.task,children:[(0,n.jsxs)("div",{className:o.taskItem,children:[(0,n.jsx)(s.VideoClipMultiple24Regular,{className:o.taskIcon}),e.exportDir,"/",e.name]}),(0,n.jsx)("div",{children:(0,n.jsx)(a.Field,{validationMessage:e.status===i.ExportStatusEnum["\u8FDB\u884C\u4E2D"]?`\u{6B63}\u{5728}\u{5BFC}\u{51FA}\u{FF0C}\u{8BF7}\u{7B49}\u{5F85} ${Math.floor(100*e.progress/e.duration)}%`:i.ExportStatusEnum[e.status]??"",validationState:"none",children:(0,n.jsx)(a.ProgressBar,{color:e.status===i.ExportStatusEnum["\u5BFC\u51FA\u6210\u529F"]?"success":"brand",max:100,shape:"rounded",value:e.status===i.ExportStatusEnum["\u5BFC\u51FA\u6210\u529F"]?100:100*e.progress/e.duration})})})]},e.path))}),(0,n.jsx)(a.DialogActions,{children:(0,n.jsx)(a.DialogTrigger,{disableButtonEnhancement:!0,children:(0,n.jsx)(a.Button,{appearance:"secondary",children:"\u5173\u95ED"})})})]})})]})})}},939:function(e,t,r){"use strict";r.r(t),r("66364"),r("31907"),r("67475"),r("34210");var n=r("11527"),a=r("50959"),s=r("67907"),i=r("56780"),l=r("53768"),o=r("30194"),c=r("36610"),u=r("76765"),d=r("29216"),p=r("229"),m=r("39363"),h=r("19934");let x=(0,s.makeStyles)({root:{},currentExportDir:{color:s.tokens.colorNeutralForeground3}}),f=(e,t)=>{switch(e){case"f":default:return{name:t.src_f_name,path:t.src_f_path};case"l":return{name:t.src_l_name,path:t.src_l_path};case"r":return{name:t.src_r_name,path:t.src_r_path};case"b":return{name:t.src_b_name,path:t.src_b_path}}},g=async(e,t,r,n)=>{let{path:a,name:s}=f(e,t),i=c.Command.sidecar("binaries/ffmpeg",["-y","-i",a,"-progress","-","-nostats","-vf",`drawtext=fontsize=52:fontcolor=white:box=1:boxborderw=10:x=10:y=10:boxcolor=black@0.4:text='%{pts\\:localtime\\:${t.time/1e3}}'`,`${r}/${s}`]);i.on("close",()=>{n({name:s,path:a,exportDir:r,status:l.ExportStatusEnum["\u5BFC\u51FA\u6210\u529F"],log:"success"})}),i.on("error",e=>{n({name:s,path:a,exportDir:r,status:l.ExportStatusEnum["\u5BFC\u51FA\u5931\u8D25"],log:e})}),i.stdout.on("data",e=>{n({name:s,path:a,exportDir:r,status:l.ExportStatusEnum["\u8FDB\u884C\u4E2D"],log:e})}),i.stderr.on("data",e=>{n({name:s,path:a,exportDir:r,status:l.ExportStatusEnum["\u8FDB\u884C\u4E2D"],log:e})});let o=await i.spawn();n({name:s,path:a,exportDir:r,status:l.ExportStatusEnum["\u8FDB\u884C\u4E2D"],log:`pid: ${o.pid}`})};t.default=e=>{let[t,r]=(0,a.useState)(!1),[c,v]=(0,a.useState)([]),j=(0,a.useRef)(c),[y,b]=(0,a.useState)(localStorage.getItem("exportDir")??""),[k,T]=(0,a.useState)(localStorage.getItem("camera")??"f"),_=(0,s.useId)("toaster"),{dispatchToast:S}=(0,s.useToastController)(_),E=x(),w=async()=>{let e=await (0,o.open)({directory:!0,multiple:!1,recursive:!0});e&&(localStorage.setItem("exportDir",e),b(e))},C=async()=>{if(!y){S((0,n.jsxs)(s.Toast,{children:[(0,n.jsx)(s.ToastTitle,{children:"\u63D0\u793A"}),(0,n.jsx)(s.ToastBody,{children:"\u8BF7\u9009\u62E9\u5BFC\u51FA\u6587\u4EF6\u76EE\u5F55"})]}),{intent:"warning"});return}let{path:t}=f(k,e.video);if(c.find(e=>e.path===t)){S((0,n.jsxs)(s.Toast,{children:[(0,n.jsx)(s.ToastTitle,{children:"\u63D0\u793A"}),(0,n.jsx)(s.ToastBody,{children:"\u5BFC\u51FA\u4EFB\u52A1\u5DF2\u5B58\u5728"})]}),{intent:"warning"});return}r(!1),!await (0,p.isPermissionGranted)()&&(0,p.requestPermission)(),g(k,e.video,y,async e=>{let r,a,{path:i,status:o,log:c,exportDir:m,name:x}=e,f=[...j.current],g=f.findIndex(e=>e.path===i),y=c.trim();if(y.startsWith("Duration")){var b,k;let e=null===(k=y.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?,/))||void 0===k?void 0:null===(b=k[0])||void 0===b?void 0:b.slice(0,-1);e&&(r=(0,h.durationToMs)(e))}if(y.startsWith("out_time_ms")){let e=y.slice(y.indexOf("=")+1);e&&(a=Math.max(0,+e/1e3))}if(g>-1?f.splice(g,1,{...f[g],status:o,duration:r??f[g].duration,progress:a??f[g].progress,log:[...f[g].log,c]}):f.push({name:x,path:t,exportDir:m,status:o,duration:r??1,progress:0,log:[c]}),o===l.ExportStatusEnum["\u5BFC\u51FA\u6210\u529F"]&&(S((0,n.jsxs)(s.Toast,{children:[(0,n.jsx)(s.ToastTitle,{children:"\u63D0\u793A"}),(0,n.jsxs)(s.ToastBody,{children:[m,"/",x," \u5BFC\u51FA\u6210\u529F"]})]}),{intent:"success"}),await (0,p.isPermissionGranted)())){let e=await (0,u.getName)(),t=await (0,d.resolveResource)("icons/128x128.png");(0,p.sendNotification)({title:`${e}\u{5BFC}\u{51FA}\u{901A}\u{77E5}`,body:`\u{6587}\u{4EF6}\u{5BFC}\u{51FA}\u{6210}\u{529F}: ${m}`,icon:t})}if(o===l.ExportStatusEnum["\u5BFC\u51FA\u5931\u8D25"]&&(S((0,n.jsxs)(s.Toast,{children:[(0,n.jsx)(s.ToastTitle,{children:"\u63D0\u793A"}),(0,n.jsxs)(s.ToastBody,{children:[m," \u5BFC\u51FA\u5931\u8D25"]})]}),{intent:"error"}),await (0,p.isPermissionGranted)())){let e=await (0,u.getName)(),t=await (0,d.resolveResource)("icons/128x128.png");(0,p.sendNotification)({title:`${e}\u{5BFC}\u{51FA}\u{901A}\u{77E5}`,body:`\u{6587}\u{4EF6}\u{5BFC}\u{51FA}\u{5931}\u{8D25}: ${m}`,icon:t})}j.current=f,v(f)}),S((0,n.jsxs)(s.Toast,{children:[(0,n.jsx)(s.ToastTitle,{children:"\u63D0\u793A"}),(0,n.jsx)(s.ToastBody,{children:"\u5BFC\u51FA\u4EFB\u52A1\u5DF2\u5F00\u59CB\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85"})]}),{intent:"info"})};return(0,n.jsxs)(n.Fragment,{children:[e.video?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.Dialog,{modalType:"modal",open:t,onOpenChange:(e,t)=>{"backdropClick"===t.type&&r(t.open)},children:[(0,n.jsx)(s.DialogTrigger,{children:(0,n.jsx)(s.Tooltip,{content:(0,n.jsx)(n.Fragment,{children:"\u5BFC\u51FA\u5E26\u6709\u65F6\u95F4\u7801\u7684\u89C6\u9891"}),relationship:"label",children:(0,n.jsx)(s.Button,{icon:(0,n.jsx)(i.ResizeVideo24Filled,{}),size:"large",onClick:()=>r(!0)})})}),(0,n.jsx)(s.DialogSurface,{children:(0,n.jsxs)(s.DialogBody,{children:[(0,n.jsx)(s.DialogTitle,{children:"\u5BFC\u51FA\u89C6\u9891"}),(0,n.jsxs)(s.DialogContent,{children:[(0,n.jsx)(s.Field,{label:"\u76F8\u673A\u89C6\u89D2",children:(0,n.jsxs)(s.RadioGroup,{layout:"horizontal",value:k,onChange:(e,t)=>T(t.value),children:[(0,n.jsx)(s.Radio,{label:"\u524D",value:"f"}),(0,n.jsx)(s.Radio,{label:"\u540E",value:"b"}),(0,n.jsx)(s.Radio,{label:"\u5DE6",value:"l"}),(0,n.jsx)(s.Radio,{label:"\u53F3",value:"r"})]})}),(0,n.jsx)(s.Field,{label:"\u5BFC\u51FA\u6587\u4EF6\u76EE\u5F55",children:(0,n.jsxs)("div",{className:E.currentExportDir,children:["\u5F53\u524D\u9009\u62E9\uFF1A",y,(0,n.jsx)(s.Button,{appearance:"transparent",size:"small",onClick:()=>w(),children:"\u9009\u62E9\u76EE\u5F55"})]})})]}),(0,n.jsx)(s.DialogActions,{children:(0,n.jsx)(s.DialogTrigger,{disableButtonEnhancement:!0,children:(0,n.jsx)(s.Button,{appearance:"primary",onClick:()=>C(),children:"\u786E\u8BA4\u5BFC\u51FA"})})})]})})]}),(0,n.jsx)(s.Toaster,{toasterId:_})]}):null,c.length>0?(0,n.jsx)(m.default,{tasks:c}):null]})}},27907:function(e,t,r){"use strict";r.r(t);var n=r("11527"),a=r("50959"),s=r("67907"),i=r("56780");t.default=e=>{var t;let[r,l]=(0,a.useState)(localStorage.getItem("ffmpegPath")??""),[o,c]=(0,a.useState)(localStorage.getItem("sourceRoot")??""),[u,d]=(0,a.useState)(localStorage.getItem("exportPath")??""),[p,m]=(0,a.useState)(localStorage.getItem("camera")??"f"),h=(0,s.useId)("toaster"),{dispatchToast:x}=(0,s.useToastController)(h),f=t=>{var r,n,a,s,i;switch(t){case"f":return null===(r=e.video)||void 0===r?void 0:r.src_f_name;case"l":return null===(n=e.video)||void 0===n?void 0:n.src_l_name;case"r":return null===(a=e.video)||void 0===a?void 0:a.src_r_name;case"b":return null===(s=e.video)||void 0===s?void 0:s.src_b_name;default:return null===(i=e.video)||void 0===i?void 0:i.src_f_name}},g=e.video?`${r} -y -i ${o}${e.video.dir}${f(p)} -vf "drawtext=fontsize=52:fontcolor=yellow:box=1:boxcolor=black@0.6:text='%{pts\\:localtime\\:${(null===(t=e.video)||void 0===t?void 0:t.time)/1e3}}'" ${u}/${f(p)}`:"";return e.video?(0,n.jsxs)(s.Dialog,{modalType:"non-modal",children:[(0,n.jsx)(s.DialogTrigger,{children:(0,n.jsx)(s.Tooltip,{content:(0,n.jsx)(n.Fragment,{children:"ffmpeg\u5FEB\u6377\u547D\u4EE4"}),relationship:"label",children:(0,n.jsx)(s.Button,{icon:(0,n.jsx)(i.ClipboardCode24Regular,{}),size:"large"})})}),(0,n.jsx)(s.DialogSurface,{children:(0,n.jsxs)(s.DialogBody,{children:[(0,n.jsx)(s.DialogTitle,{children:"ffmpeg\u5FEB\u6377\u5BFC\u51FA\u547D\u4EE4"}),(0,n.jsxs)(s.DialogContent,{children:[(0,n.jsx)(s.Field,{label:"\u76F8\u673A\u89C6\u89D2",children:(0,n.jsxs)(s.RadioGroup,{layout:"horizontal",value:p,onChange:(e,t)=>m(t.value),children:[(0,n.jsx)(s.Radio,{label:"\u524D",value:"f"}),(0,n.jsx)(s.Radio,{label:"\u540E",value:"b"}),(0,n.jsx)(s.Radio,{label:"\u5DE6",value:"l"}),(0,n.jsx)(s.Radio,{label:"\u53F3",value:"r"})]})}),(0,n.jsx)(s.Field,{label:"\u539F\u59CB\u6587\u4EF6\u6839\u76EE\u5F55",children:(0,n.jsx)(s.Input,{placeholder:"\u8BF7\u8F93\u5165\u539F\u59CB\u6587\u4EF6\u6839\u76EE\u5F55\uFF08path/../TeslaCam\uFF09",value:o,onInput:e=>{localStorage.setItem("sourceRoot",e.target.value),c(e.target.value)}})}),(0,n.jsx)(s.Field,{label:"ffmpeg\u8DEF\u5F84",children:(0,n.jsx)(s.Input,{placeholder:"\u8BF7\u8F93\u5165ffmpeg\u8DEF\u5F84\uFF08path/../ffmpeg\uFF09",value:r,onInput:e=>{localStorage.setItem("ffmpegPath",e.target.value),l(e.target.value)}})}),(0,n.jsx)(s.Field,{label:"\u5BFC\u51FA\u6587\u4EF6\u5730\u5740",children:(0,n.jsx)(s.Input,{placeholder:"\u5BFC\u51FA\u6587\u4EF6\u5730\u5740\uFF08path/../export\uFF09",value:u,onInput:e=>{localStorage.setItem("exportPath",e.target.value),d(e.target.value)}})}),(0,n.jsx)(s.Field,{label:"\u547D\u4EE4\u884C",children:(0,n.jsx)(s.Textarea,{value:g})})]}),(0,n.jsxs)(s.DialogActions,{children:[(0,n.jsx)(s.DialogTrigger,{disableButtonEnhancement:!0,children:(0,n.jsx)(s.Button,{appearance:"secondary",children:"\u5173\u95ED"})}),(0,n.jsx)(s.Toaster,{toasterId:h}),(0,n.jsx)(s.Button,{appearance:"primary",onClick:()=>{var e;let t;return e=g,void((t=document.getElementById("copy-input"))?document.body.append(t):((t=document.createElement("input")).setAttribute("id","copy-input"),t.setAttribute("style","position: fixed; top: -100vh; left: -100vw; optical: 0;")),t.value=e,t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value),x((0,n.jsx)(s.Toast,{children:(0,n.jsx)(s.ToastTitle,{children:"\u590D\u5236\u6210\u529F"})}),{intent:"success"}))},children:"\u590D\u5236"})]})]})})]}):null}},97248:function(e,t,r){"use strict";r.r(t),r("1056"),r("11160"),r("75698"),r("67475"),r("34210"),r("18936"),r("54335"),r("42464");var n=r("11527");r("50959");var a=r("67907"),s=r("56780"),i=r("74637"),l=r.n(i),o=r("53768"),c=r("17984"),u=r("30194"),d=r("96133");function p(e){let t=e.slice(0,10),r=e.slice(11,13),n=e.slice(14,16),a=e.slice(17,19);return l()(`${t} ${r}:${n}:${a}`).valueOf()}t.default=e=>{async function t(){let t=await (0,u.open)({directory:!0,multiple:!1,recursive:!0});t&&(0,d.readDir)(t,{recursive:!0}).then(async t=>{let r=function e(t){let r=[];return t.forEach(t=>{var n;(null===(n=t.children)||void 0===n?void 0:n.length)?r.push(...e(t.children)):r.push(t)}),r}(t),n=function(e){let t=/^[0-9]{4}-[0-9]{2}-[0-9]{2}_[0-9]{2}-[0-9]{2}-[0-9]{2}-.+/,r={};return e.forEach(e=>{let{name:n,path:a}=e;if(!t.test(n))return;let s=n.slice(0,19),i=r[s];if(!i){var u;i={title:function(e){let t=p(e);return l()(t).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss")}(s),time:p(s),type:(u=a).includes("SavedClips")?o.TypeEnum["\u4E8B\u4EF6"]:u.includes("RecentClips")?o.TypeEnum["\u884C\u8F66\u8BB0\u5F55\u4EEA"]:u.includes("SentryClips")?o.TypeEnum["\u54E8\u5175"]:o.TypeEnum["\u6240\u6709"],dir:a.replace(n,"")},r[s]=i}let d={get:async()=>Promise.resolve({url:(0,c.convertFileSrc)(a),name:n}),name:n,path:a};n.includes("front")&&(i.src_f=d),n.includes("back")&&(i.src_b=d),n.includes("right_repeater")&&(i.src_r=d),n.includes("left_repeater")&&(i.src_l=d)}),Object.values(r)}(r),a=r.filter(e=>{let{path:t}=e;return/.+event.json$/.test(t)}),s=[];for(let e=0;e<a.length;e++){let t=await (0,d.readTextFile)(a[e].path);s.push(JSON.parse(t))}s=s.sort((e,t)=>l()(e.timestamp).valueOf()-l()(t.timestamp).valueOf());let i=n.sort((e,t)=>e.time-t.time);i.forEach((e,t)=>{let r=s.findIndex(t=>{let{timestamp:r}=t;return e.time>l()(r).valueOf()});if(r>-1){let e=s[r];s.splice(r,1),i[t-1]&&(i[t-1].event=l()(e.timestamp).valueOf())}}),e.onAccess(i)})}return(0,n.jsx)(a.Tooltip,{content:(0,n.jsxs)(n.Fragment,{children:["\u9009\u62E9\u8F66\u8F7DU\u76D8\u4E2D\u7684",(0,n.jsx)(a.Body1Strong,{children:"TeslaCam"}),"\u76EE\u5F55\uFF0C\u6216\u8005\u662F",(0,n.jsx)(a.Body1Strong,{children:"TeslaCam"}),"\u6587\u4EF6\u76EE\u5F55\u7684\u62F7\u8D1D"]}),relationship:"label",children:(0,n.jsx)(a.Button,{icon:(0,n.jsx)(s.FolderAdd24Regular,{}),size:"large",onClick:()=>t()})})}},63372:function(e,t,r){"use strict";r.r(t);var n=r("11527"),a=r("50959"),s=r("67907"),i=r("84875"),l=r.n(i),o=r("53768");let c=(0,s.makeStyles)({root:{position:"absolute",height:"120px",width:"160px",cursor:"pointer",backgroundColor:s.tokens.colorSubtleBackgroundInvertedHover,...s.shorthands.borderRadius("6px"),...s.shorthands.overflow("hidden"),"&.c0":{top:"30px",left:"30px"},"&.c1":{top:"30px",right:"30px"},"&.c2":{bottom:"30px",left:"30px"},"&.c3":{bottom:"30px",right:"30px"}},video:{height:"100%",width:"100%","&.is-hidden":{opacity:0}},name:{position:"absolute",bottom:"6px",left:"6px",color:s.tokens.colorNeutralBackground1Hover,fontWeight:"500"}}),u=e=>{let t=c(),r=(0,a.useRef)(null),s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{r.current&&(e.paused&&!r.current.paused&&r.current.pause(),!e.paused&&r.current.paused&&(r.current.currentTime=e.currentTime,s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{var e;null===(e=r.current)||void 0===e||e.play(),s.current=null},200)))},[e.paused]),(0,a.useEffect)(()=>{r.current&&e.paused&&(r.current.currentTime=e.currentTime)},[e.currentTime]),(0,n.jsxs)("div",{className:l()(t.root,`c${e.camera}`),onClick:e.onClick,children:[(0,n.jsx)("span",{className:t.name,children:o.CameraEnum[e.camera]}),(0,n.jsx)("video",{muted:!0,className:l()(t.video,{"is-hidden":e.isActive}),ref:r,src:e.src,children:(0,n.jsx)("source",{src:e.src,type:"video/mp4"})})]})};u.defaultProps={currentTime:0,camera:0,isActive:!1,paused:!1},t.default=u},71716:function(e,t,r){"use strict";r.r(t),r("64072"),r("87395");var n=r("11527"),a=r("50959"),s=r("67907"),i=r("56780"),l=r("63372"),o=r("74637"),c=r.n(o),u=r("19934"),d=r("53768");let p=(0,s.makeStyles)({root:{...s.shorthands.padding(0,"20px")},videoWrap:{display:"block",position:"relative"},video:{width:"800px",height:"600px",backgroundColor:s.tokens.colorNeutralBackground5Selected,"@media screen and (min-width: 1440px)":{width:"1000px",height:"750px"},"@media screen and (min-width: 1680px)":{width:"1200px",height:"900px"}},time:{position:"absolute",top:"40px",left:"50%",transform:"translateX(-50%)",textAlign:"center",minWidth:"280px",color:s.tokens.colorNeutralBackground1Hover,fontSize:"18px",fontWeight:500,...s.shorthands.padding("4px","8px"),letterSpacing:"2px",backgroundColor:s.tokens.colorNeutralStencil1Alpha,...s.shorthands.borderRadius("2px")},controlWrap:{display:"flex",alignItems:"center",...s.shorthands.gap("10px")},slider:{flexGrow:1},sliderTime:{minWidth:"40px",textAlign:"center"},iconButton:{cursor:"pointer",":active":{color:s.tokens.colorNeutralForeground2}},empty:{},playFocusInput:{opacity:0,position:"fixed",top:"-100vh",left:"-100vw"}});function m(e,t){switch(e){case d.CameraEnum["\u524D"]:return t.src_f;case d.CameraEnum["\u540E"]:return t.src_b;case d.CameraEnum["\u5DE6"]:return t.src_l;case d.CameraEnum["\u53F3"]:return t.src_r}}function h(e){return`${Math.floor(e/60)}:${Math.ceil(e%60)}`}let x=e=>{let t=p(),[r,o]=(0,a.useState)(d.CameraEnum["\u524D"]),[x,f]=(0,a.useState)(d.CameraEnum["\u524D"]),[g,v]=(0,a.useState)(!0),[j,y]=(0,a.useState)(0),b=(0,a.useRef)(null),k=(0,a.useRef)(!1),{delayPlay:T}=(0,u.useDelayPlay)();function _(t){if(!b.current)return;o(t);let r=b.current.paused,n=b.current.currentTime;b.current.pause(),b.current.src=m(t,e.video),b.current.currentTime=n,!r&&T(b.current)}function S(){b.current&&(b.current.play(),v(!1))}function E(){b.current&&(b.current.pause(),v(!0))}return(0,n.jsx)("div",{className:t.root,children:e.video?(0,n.jsxs)("div",{className:t.root,children:[(0,n.jsxs)("label",{className:t.videoWrap,htmlFor:"player-focus-input",children:[(0,n.jsx)("video",{muted:!0,className:t.video,id:"player",ref:b,onLoadedMetadata:function(){b.current&&y(b.current.duration)},onPause:()=>v(!0),onPlay:()=>v(!1),onTimeUpdate:function(){b.current&&(b.current.currentTime>=b.current.duration?(f(0),b.current.pause()):f(b.current.currentTime))},children:(0,n.jsx)("source",{src:m(r,e.video),type:"video/mp4"})}),[d.CameraEnum["\u524D"],d.CameraEnum["\u540E"],d.CameraEnum["\u5DE6"],d.CameraEnum["\u53F3"]].map(t=>(0,n.jsx)(l.default,{camera:t,currentTime:x,isActive:r===t,paused:g,src:m(t,e.video),onClick:()=>_(t)},t)),(0,n.jsx)("div",{className:t.time,children:c()(e.video.time+1e3*x).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss")})]}),(0,n.jsxs)("div",{className:t.controlWrap,children:[g?(0,n.jsx)(i.Play24Filled,{className:t.iconButton,onClick:S}):(0,n.jsx)(i.Pause24Filled,{className:t.iconButton,onClick:E}),(0,n.jsx)("div",{className:t.sliderTime,children:h(x)}),(0,n.jsx)(s.Slider,{className:t.slider,max:j,min:0,value:x,onChange:(e,t)=>(function(e){if(!b.current)return;let t=b.current.paused;b.current.pause(),f(e),b.current.currentTime=e,!t&&T(b.current)})(t.value)}),(0,n.jsx)("div",{className:t.sliderTime,children:h(j)})]}),(0,n.jsx)("input",{autoFocus:!0,className:t.playFocusInput,id:"player-focus-input",onBlur:function(){k.current=!1},onFocus:function(){k.current=!0},onKeyUp:function(e){switch(e.preventDefault(),e.code){case"Space":var t;(null===(t=b.current)||void 0===t?void 0:t.paused)?S():E();break;case"KeyW":_(d.CameraEnum["\u524D"]);break;case"KeyS":_(d.CameraEnum["\u540E"]);break;case"KeyA":_(d.CameraEnum["\u5DE6"]);break;case"KeyD":_(d.CameraEnum["\u53F3"])}}})]}):(0,n.jsx)("div",{className:t.empty,children:"\u6682\u65E0\u6570\u636E"})})};x.defaultProps={},t.default=x},29197:function(e,t,r){"use strict";r.r(t);var n=r("11527"),a=r("50959"),s=r.n(a),i=r("44478"),l=r("40536");r("2341");var o=r("67907");i.createRoot(document.getElementById("root")).render((0,n.jsx)(s().StrictMode,{children:(0,n.jsx)(o.FluentProvider,{theme:o.teamsLightTheme,children:(0,n.jsx)(l.default,{})})}))},53768:function(e,t,r){"use strict";var n,a,s,i,l,o;r.r(t),r.d(t,{CameraEnum:function(){return a},ExportStatusEnum:function(){return s},TypeEnum:function(){return n}}),(i=n||(n={}))[i["\u6240\u6709"]=0]="\u6240\u6709",i[i["\u4E8B\u4EF6"]=1]="\u4E8B\u4EF6",i[i["\u54E8\u5175"]=2]="\u54E8\u5175",i[i["\u884C\u8F66\u8BB0\u5F55\u4EEA"]=3]="\u884C\u8F66\u8BB0\u5F55\u4EEA",(l=a||(a={}))[l["\u524D"]=0]="\u524D",l[l["\u540E"]=1]="\u540E",l[l["\u5DE6"]=2]="\u5DE6",l[l["\u53F3"]=3]="\u53F3",(o=s||(s={}))[o["\u8FDB\u884C\u4E2D"]=0]="\u8FDB\u884C\u4E2D",o[o["\u5BFC\u51FA\u6210\u529F"]=1]="\u5BFC\u51FA\u6210\u529F",o[o["\u5BFC\u51FA\u5931\u8D25"]=2]="\u5BFC\u51FA\u5931\u8D25"},19934:function(e,t,r){"use strict";r.r(t),r.d(t,{durationToMs:function(){return s},useDelayPlay:function(){return a}}),r("64072"),r("87395");var n=r("50959");function a(){let e=(0,n.useRef)(null);return{delayPlay:function(t){t.pause(),e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{t.play(),e.current=null},200)}}}function s(e){let[t,r,n]=e.split(":").map(e=>+e);return(3600*t+60*r+n)*1e3}},2341:function(e){},15589:function(e){"use strict";e.exports=JSON.parse('{"name":"tesla-camera","private":true,"version":"1.1.3","scripts":{"dev":"rsbuild dev","build":"rsbuild build","build:tauri":"rsbuild build --env-mode tauri","preview":"rsbuild preview --port 3091","app:dev":"pnpm tauri dev","app:build":"tauri build","lint":"eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0","bump:version":"node ./scripts/bump-version.js","prepare":"husky install"},"lint-staged":{"*.{js,ts,tsx}":"eslint --fix"},"engines":{"pnpm":">=8.0.0"},"dependencies":{"@fluentui/react-components":"^9.25.1","@fluentui/react-icons":"^2.0.204","@fluentui/react-tags-preview":"^0.1.3","@mario34/eslint-config-react":"^1.0.0","@tauri-apps/api":"^1.3.0","classnames":"^2.3.2","dayjs":"^1.11.7","lodash-es":"^4.17.21","react":"^18.2.0","react-dom":"^18.2.0"},"devDependencies":{"@commitlint/cli":"^17.7.1","@commitlint/config-angular":"^17.7.0","@rsbuild/core":"^0.5.2","@rsbuild/plugin-react":"^0.5.2","@tauri-apps/cli":"^1.3.1","@types/lodash-es":"^4.17.7","@types/react":"^18.0.28","@types/react-dom":"^18.0.11","@types/wicg-file-system-access":"^2020.9.6","@typescript-eslint/eslint-plugin":"^5.57.1","@typescript-eslint/parser":"^5.57.1","conventional-changelog-cli":"^3.0.0","eslint":"^8.38.0","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-react-refresh":"^0.3.4","husky":"^8.0.0","lint-staged":"^14.0.1","minimist":"^1.2.8","sass":"^1.62.1","simple-git":"^3.19.1","typescript":"^5.0.2"}}')}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return a[e].call(r.exports,r,r.exports,i),r.exports}i.m=a,i.es=function(e,t){return Object.keys(e).forEach(function(r){"default"!==r&&!Object.prototype.hasOwnProperty.call(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),e},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.k=function(e){return""+e+".css"},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=[],i.O=function(t,r,n,a){if(r){a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,n,a];return}for(var l=1/0,s=0;s<e.length;s++){for(var r=e[s][0],n=e[s][1],a=e[s][2],o=!0,c=0;c<r.length;c++)l>=a&&Object.keys(i.O).every(function(e){return i.O[e](r[c])})?r.splice(c--,1):(o=!1,a<l&&(l=a));if(o){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t},i.p="./",t={980:0},i.O.j=function(e){return 0===t[e]},r=function(e,r){var n=r[0],a=r[1],s=r[2],l,o,c=0;if(n.some(function(e){return 0!==t[e]})){for(l in a)i.o(a,l)&&(i.m[l]=a[l]);if(s)var u=s(i)}for(e&&e(r);c<n.length;c++)o=n[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(u)},(n=self.webpackChunktesla_camera=self.webpackChunktesla_camera||[]).forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n));var l=i.O(void 0,["126","361","365"],function(){return i("29197")});i.O(l)}();