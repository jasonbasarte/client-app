(function(e){function t(t){for(var l,c,r=t[0],i=t[1],u=t[2],d=0,b=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);s&&s(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],l=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(l=!1)}l&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var l={},o={app:0},a=[];function c(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=l,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)c.d(n,l,function(t){return e[t]}.bind(null,l));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"16d1":function(e,t,n){"use strict";n("71db")},4678:function(e,t,n){var l={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}o.keys=function(){return Object.keys(l)},o.resolve=a,e.exports=o,o.id="4678"},"49fc":function(e,t,n){"use strict";n("733b")},"4fc1":function(e,t,n){"use strict";n("c8d3")},"6f34":function(e,t,n){"use strict";n("99e3")},"71db":function(e,t,n){},"733b":function(e,t,n){},9389:function(e,t,n){},9435:function(e,t,n){},"99e3":function(e,t,n){},bc4a:function(e,t,n){"use strict";n("9389")},c8d3:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79df");var l=n("7a23");function o(e,t,n,o,a,c){var r=Object(l["G"])("HelloWorld");return Object(l["A"])(),Object(l["j"])(r,{msg:"Welcome to Your Vue.js + TypeScript App"})}var a=Object(l["T"])("data-v-6b969caa");Object(l["D"])("data-v-6b969caa");var c=Object(l["m"])("li",{style:{padding:"0px 20px"}},[Object(l["m"])("span",{style:{"font-size":"1.3em"}},"FREESWITCH")],-1),r={style:{display:"flex"}},i={style:{width:"80px"}},u=Object(l["m"])("span",null,"Home",-1),s=Object(l["m"])("span",null,"Click To Call",-1),d=Object(l["m"])("span",null,"Inbound Call Config",-1),b=Object(l["m"])("span",null,"Phone Number Config",-1),f={style:{flex:"1"}};Object(l["B"])();var m=a((function(e,t,n,o,m,j){var p=Object(l["G"])("a-menu"),O=Object(l["G"])("HomeOutlined"),g=Object(l["G"])("a-menu-item"),h=Object(l["G"])("NumberOutlined"),y=Object(l["G"])("PhoneOutlined"),C=Object(l["G"])("SettingOutlined");return Object(l["A"])(),Object(l["j"])("div",null,[Object(l["m"])(p,{mode:"horizontal",theme:"dark"},{default:a((function(){return[c]})),_:1}),Object(l["m"])("div",null,[Object(l["m"])("div",r,[Object(l["m"])("div",i,[Object(l["m"])(p,{class:"menu-style",style:{height:"100%"},mode:"inline",theme:"dark","inline-collapsed":!0,openKeys:e.openKeys,"onUpdate:openKeys":t[5]||(t[5]=function(t){return e.openKeys=t}),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[6]||(t[6]=function(t){return e.selectedKeys=t})},{default:a((function(){return[Object(l["m"])(g,{key:"1",onClick:t[1]||(t[1]=function(t){return e.setCurrentCompnent("Home")})},{icon:a((function(){return[Object(l["m"])(O)]})),default:a((function(){return[u]})),_:1}),Object(l["m"])(g,{key:"2",onClick:t[2]||(t[2]=function(t){return e.setCurrentCompnent("OutboundCall")})},{icon:a((function(){return[Object(l["m"])(h)]})),default:a((function(){return[s]})),_:1}),Object(l["m"])(g,{key:"3",onClick:t[3]||(t[3]=function(t){return e.setCurrentCompnent("InboundCall")})},{icon:a((function(){return[Object(l["m"])(y)]})),default:a((function(){return[d]})),_:1}),Object(l["m"])(g,{key:"4",onClick:t[4]||(t[4]=function(t){return e.setCurrentCompnent("Config")})},{icon:a((function(){return[Object(l["m"])(C)]})),default:a((function(){return[b]})),_:1})]})),_:1},8,["openKeys","selectedKeys"])]),Object(l["m"])("div",f,[(Object(l["A"])(),Object(l["j"])(Object(l["H"])(e.currentComponent)))])])])])})),j=n("5530"),p=n("0791"),O=n("179b"),g=n("16b1"),h=n("f014"),y=Object(l["T"])("data-v-b550b5a0");Object(l["D"])("data-v-b550b5a0");var C={style:{background:"white",padding:"20px"}},v=Object(l["m"])("div",{class:"call-config"},"Phone Number Config",-1),k=Object(l["l"])(" HTTP POST "),N=Object(l["l"])(" HTTP GET "),x=Object(l["l"])(" Save "),_=Object(l["l"])(" HTTP POST "),I=Object(l["l"])(" HTTP GET ");Object(l["B"])();var w=y((function(e,t,n,o,a,c){var r=Object(l["G"])("a-alert"),i=Object(l["G"])("a-aler"),u=Object(l["G"])("a-form-item"),s=Object(l["G"])("a-col"),d=Object(l["G"])("a-menu-item"),b=Object(l["G"])("a-menu"),f=Object(l["G"])("DownOutlined"),m=Object(l["G"])("a-button"),j=Object(l["G"])("a-dropdown"),p=Object(l["G"])("a-row"),O=Object(l["G"])("EditOutlined"),g=Object(l["G"])("DeleteOutlined"),h=Object(l["G"])("a-table"),w=Object(l["G"])("b-col"),T=Object(l["G"])("b-row"),S=Object(l["G"])("a-modal"),G=Object(l["G"])("a-layout-content"),P=Object(l["G"])("a-layout");return Object(l["A"])(),Object(l["j"])(P,null,{default:y((function(){return[Object(l["m"])(P,{style:{padding:"24px 24px 24px"}},{default:y((function(){return[Object(l["m"])(G,{style:{background:"#fff",padding:"24px",margin:0,minHeight:"280px"}},{default:y((function(){return[Object(l["m"])(p,null,{default:y((function(){return[Object(l["m"])(s,null,{default:y((function(){return[Object(l["m"])("div",C,[v,a.isSaved&&!a.hasError?(Object(l["A"])(),Object(l["j"])(r,{key:0,message:"Successfully saved",type:"success",style:{"text-align":"left","margin-bottom":"5px"}})):Object(l["k"])("",!0),a.isServerError?(Object(l["A"])(),Object(l["j"])(i,{key:1,message:"Error",type:"error",style:{"text-align":"left","margin-bottom":"5px"}})):Object(l["k"])("",!0),Object(l["m"])(p,null,{default:y((function(){return[Object(l["m"])(s,{style:{"margin-right":"15px"}},{default:y((function(){return[Object(l["m"])(u,{label:"Friendly Name",style:{display:"block","text-align":"left"}},{default:y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.friendlyName)],"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.friendlyName=e})},null,2),[[l["N"],a.friendlyName]])]})),_:1})]})),_:1}),Object(l["m"])(s,{style:{"margin-right":"15px"}},{default:y((function(){return[Object(l["m"])(u,{label:"Phone Number",style:{display:"block","text-align":"left"}},{default:y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.phoneNumber)],"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.phoneNumber=e})},null,2),[[l["N"],a.phoneNumber]])]})),_:1})]})),_:1}),Object(l["m"])(s,{style:{"margin-right":"15px"}},{default:y((function(){return[Object(l["m"])(u,{label:"HTTP Method",style:{display:"block","text-align":"left"}},{default:y((function(){return[Object(l["m"])(j,null,{overlay:y((function(){return[Object(l["m"])(b,null,{default:y((function(){return[Object(l["m"])(d,{key:"1",onClick:t[3]||(t[3]=function(e){return c.setMethod("POST")})},{default:y((function(){return[k]})),_:1}),Object(l["m"])(d,{key:"2",onClick:t[4]||(t[4]=function(e){return c.setMethod("GET")})},{default:y((function(){return[N]})),_:1})]})),_:1})]})),default:y((function(){return[Object(l["m"])(m,{style:{width:"100%","text-align":"left"}},{default:y((function(){return[Object(l["l"])(Object(l["I"])(c.selectedHttpMethod)+" ",1),Object(l["m"])(f,{style:{float:"right","margin-top":"5px"}})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(l["m"])(s,{style:{"margin-right":"15px"}},{default:y((function(){return[Object(l["m"])(u,{label:"Webhook URL",style:{display:"block","text-align":"left"}},{default:y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.webhookURL)],"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.webhookURL=e})},null,2),[[l["N"],a.webhookURL]])]})),_:1})]})),_:1}),Object(l["m"])(s,null,{default:y((function(){return[Object(l["m"])(u,{style:{"text-align":"left"}},{default:y((function(){return[Object(l["m"])(m,{type:"primary",onClick:c.saveConfig,style:{"margin-top":"32px"}},{default:y((function(){return[x]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1})]})),_:1}),a.configList?(Object(l["A"])(),Object(l["j"])(T,{key:0},{default:y((function(){return[Object(l["m"])(w,null,{default:y((function(){return[Object(l["m"])(h,{"data-source":a.configList.list,columns:a.columns},{action:y((function(e){var t=e.record;return[Object(l["m"])("a",{title:"Edit",onClick:function(e){return c.editConfig(t)}},[Object(l["m"])(O,{style:{"font-size":"1.2em","margin-right":"15px"}})],8,["onClick"]),Object(l["m"])("a",{title:"Delete",onClick:function(e){return c.deleteConfig(t)}},[Object(l["m"])(g,{style:{"font-size":"1.2em"}})],8,["onClick"])]})),_:1},8,["data-source","columns"])]})),_:1})]})),_:1})):Object(l["k"])("",!0),Object(l["m"])(S,{visible:a.modleVisibility,"onUpdate:visible":t[11]||(t[11]=function(e){return a.modleVisibility=e}),title:"Edit Config","ok-text":"Save",onOk:c.handleOk},{default:y((function(){return[Object(l["m"])(u,{label:"Friendly Name",style:{display:"block","text-align":"left"}},{default:y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input"],"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.selectedConfig.friendlyName=e})},null,512),[[l["N"],a.selectedConfig.friendlyName]])]})),_:1}),Object(l["m"])(u,{label:"Phone Number",style:{display:"block","text-align":"left"}},{default:y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input"],"onUpdate:modelValue":t[7]||(t[7]=function(e){return a.selectedConfig.phoneNumber=e})},null,512),[[l["N"],a.selectedConfig.phoneNumber]])]})),_:1}),Object(l["m"])(u,{label:"HTTP Method",style:{display:"block","text-align":"left"}},{default:y((function(){return[Object(l["m"])(j,null,{overlay:y((function(){return[Object(l["m"])(b,null,{default:y((function(){return[Object(l["m"])(d,{key:"1",onClick:t[8]||(t[8]=function(e){return c.setMethodUpdate("POST")})},{default:y((function(){return[_]})),_:1}),Object(l["m"])(d,{key:"2",onClick:t[9]||(t[9]=function(e){return c.setMethodUpdate("GET")})},{default:y((function(){return[I]})),_:1})]})),_:1})]})),default:y((function(){return[Object(l["m"])(m,{style:{width:"100%","text-align":"left"}},{default:y((function(){return[Object(l["l"])(Object(l["I"])(a.selectedConfig.httpMethod)+" ",1),Object(l["m"])(f,{style:{float:"right","margin-top":"5px"}})]})),_:1})]})),_:1})]})),_:1}),Object(l["m"])(u,{label:"Webhook URL",style:{display:"block","text-align":"left"}},{default:y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input"],"onUpdate:modelValue":t[10]||(t[10]=function(e){return a.selectedConfig.webhookUrl=e})},null,512),[[l["N"],a.selectedConfig.webhookUrl]])]})),_:1})]})),_:1},8,["visible","onOk"])]})),_:1})]})),_:1})]})),_:1})})),T=(n("99af"),n("bc3a")),S=n.n(T),G=S.a.create({baseURL:"http://www.freeswitchcallapp.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),P={getCallConfigById:function(e){return G.get("/api/freeswitch-call-config/getCallConfigById",{params:e})},addPhoneNumberConfig:function(e){return G.post("/api/freeswitch-phonenumber-config/add",e)},updatePhoneNumberConfig:function(e){return console.log("params: ",e),G.post("/api/freeswitch-phonenumber-config/update",e)},getPhoneNumberConfigs:function(e){return G.get("/api/freeswitch-phonenumber-config/getPhonenumberConfigs")},deletePhoneNumberConfig:function(e){return G.post("/api/freeswitch-phonenumber-config/deleteConfig/".concat(e))},getPhoneNumberConfigById:function(e){return G.get("/api/freeswitch-phonenumber-config/getPhoneNumberConfigById",{params:e})},clickToCall:function(e){return console.log("params: ",e),G.post("/api/freeswitch/clickToCall/".concat(e.phoneNumberFrom,"/").concat(e.phoneNumberTo,"/").concat(e.callerId))},getInboundCallConfigs:function(e){return G.get("/api/inbound-call-config/getInboundCallConfigs")},getInboundCallConfigById:function(e){return G.get("/api/inbound-call-config/getInboundCallConfigById/".concat(e))},addInboundCallConfig:function(e){return console.log("params: ",e),G.post("/api/inbound-call-config/add/".concat(e.phoneNumberTo,"/").concat(e.callerId,"/").concat(e.callForwardingNumber))},deleteInboundCallConfig:function(e){return G.post("/api/inbound-call-config/deleteConfig/".concat(e))},updateInboundCallConfig:function(e){return G.post("/api/inbound-call-config/".concat(e.phoneNumberTo,"/").concat(e.callerId,"/").concat(e.callForwardingNumber))}},E=n("35c8"),U=n("ba98"),F=n("b1c8"),M={data:function(){return{friendlyName:null,phoneNumber:null,httpMethod:"POST",webhookURL:null,from:null,to:null,callerId:null,hasError:!1,isSaved:!1,isServerError:!1,configList:null,columns:[{title:"Friendly Name",dataIndex:"friendlyName",key:"friendlyName"},{title:"HTTP Method",dataIndex:"httpMethod",key:"httpMethod"},{title:"Phone Number",dataIndex:"phoneNumber",key:"phoneNumber"},{title:"Weebhook URL",dataIndex:"webhookUrl",key:"webhookUrl"},{title:"Action",slots:{customRender:"action"},dataIndex:"webhookUrl"}],modleVisibility:!1,selectedConfig:{friendlyName:null,phoneNumber:null,httpMethod:"GET",webhookUrl:null}}},computed:{selectedHttpMethod:function(){return"POST"===this.httpMethod?"HTTP POST":"HTTP GET"}},methods:{setMethodUpdate:function(e){this.selectedConfig.httpMethod=e},deleteConfig:function(e){var t=this;confirm("Are you sure you want to delete this config?")&&P.deletePhoneNumberConfig(e.id).then((function(e){201===e.status&&t.getPhoneNumberConfigs()}))},editConfig:function(e){var t=this;this.selectedConfig.friendlyName=null,this.selectedConfig.phoneNumber=null,this.selectedConfig.webhookUrl=null,P.getPhoneNumberConfigById({id:e.id}).then((function(e){if(200===e.status){var n=e.data,l=n.friendlyName,o=n.phoneNumber,a=n.httpMethod,c=n.webhookUrl;t.modleVisibility=!0,t.selectedConfig.friendlyName=l,t.selectedConfig.phoneNumber=o,t.selectedConfig.httpMethod=a||"GET",t.selectedConfig.webhookUrl=c}})),console.log("val: ",e.id)},handleOk:function(){var e=this;P.updatePhoneNumberConfig(this.selectedConfig).then((function(t){201===t.status&&(e.getPhoneNumberConfigs(),e.modleVisibility=!1)}))},isInvalid:function(e){return!e&&this.hasError?"invalid":""},setMethod:function(e){this.httpMethod=e},saveConfig:function(){var e=this;if(this.friendlyName&&this.phoneNumber&&this.httpMethod&&this.webhookURL){this.hasError=!1;var t={friendlyName:this.friendlyName,phoneNumber:this.phoneNumber,httpMethod:this.httpMethod,webhookUrl:this.webhookURL};console.log("saveConfig params:",t),P.addPhoneNumberConfig(t).then((function(t){console.log("RESPONSE: ",t),201===t.status?(e.friendlyName=null,e.phoneNumber=null,e.webhookURL=null,e.isSaved=!0,e.getPhoneNumberConfigs()):e.isServerError=!0}))}else this.hasError=!0},getPhoneNumberConfigs:function(){var e=this;P.getPhoneNumberConfigs().then((function(t){200===t.status&&(e.configList={list:t.data.items,pager:t.data.meta}),console.log("configList: ",e.configList)}))}},created:function(){this.getPhoneNumberConfigs()},components:{DownOutlined:E["a"],EditOutlined:U["a"],DeleteOutlined:F["a"]}};n("d9a4");M.render=w,M.__scopeId="data-v-b550b5a0";var z=M,V=Object(l["l"])(" Weclome to freeswitch ");function H(e,t,n,o,a,c){var r=Object(l["G"])("a-layout-content"),i=Object(l["G"])("a-layout");return Object(l["A"])(),Object(l["j"])(i,null,{default:Object(l["R"])((function(){return[Object(l["m"])(i,{style:{padding:"24px 24px 24px"}},{default:Object(l["R"])((function(){return[Object(l["m"])(r,{style:{background:"#fff",padding:"24px",margin:0,minHeight:"280px",fontSize:"1.3em"}},{default:Object(l["R"])((function(){return[V]})),_:1},8,["style"])]})),_:1})]})),_:1})}var L=Object(l["n"])({setup:function(){return{selectedKeys1:Object(l["F"])(["2"]),selectedKeys2:Object(l["F"])(["1"]),collapsed:Object(l["F"])(!1),openKeys:Object(l["F"])(["sub1"])}}});n("16d1");L.render=H;var A=L,K=Object(l["T"])("data-v-282581d0");Object(l["D"])("data-v-282581d0");var R={style:{padding:"20px"}},D=Object(l["m"])("div",{class:"call-config"},"Click To Call",-1),B=Object(l["l"])(" Call ");Object(l["B"])();var W=K((function(e,t,n,o,a,c){var r=Object(l["G"])("a-form-item"),i=Object(l["G"])("a-col"),u=Object(l["G"])("a-button"),s=Object(l["G"])("a-row"),d=Object(l["G"])("a-layout-content"),b=Object(l["G"])("a-layout");return Object(l["A"])(),Object(l["j"])(b,null,{default:K((function(){return[Object(l["m"])(b,{style:{padding:"24px 24px 24px"}},{default:K((function(){return[Object(l["m"])(d,{style:{background:"#fff",padding:"24px",margin:0,minHeight:"280px"}},{default:K((function(){return[Object(l["m"])(s,null,{default:K((function(){return[Object(l["m"])(i,null,{default:K((function(){return[Object(l["m"])("div",R,[D,Object(l["m"])(s,null,{default:K((function(){return[Object(l["m"])(i,{style:{"margin-right":"15px"}},{default:K((function(){return[Object(l["m"])(r,{label:"From",style:{display:"block","text-align":"left"}},{default:K((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.from)],"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.from=e})},null,2),[[l["N"],a.from]])]})),_:1})]})),_:1}),Object(l["m"])(i,{style:{"margin-right":"15px"}},{default:K((function(){return[Object(l["m"])(r,{label:"To",style:{display:"block","text-align":"left"}},{default:K((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.to)],"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.to=e})},null,2),[[l["N"],a.to]])]})),_:1})]})),_:1}),Object(l["m"])(i,{style:{"margin-right":"15px"}},{default:K((function(){return[Object(l["m"])(r,{label:"Caller Id",style:{display:"block","text-align":"left"}},{default:K((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.callerId)],"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.callerId=e})},null,2),[[l["N"],a.callerId]])]})),_:1})]})),_:1}),Object(l["m"])(i,null,{default:K((function(){return[Object(l["m"])(r,{style:{"text-align":"left"}},{default:K((function(){return[Object(l["m"])(u,{type:"danger",onClick:c.clickToCall,style:{"margin-top":"32px"}},{default:K((function(){return[B]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})})),q={data:function(){return{from:null,to:null,callerId:null,hasError:!1}},methods:{isInvalid:function(e){return!e&&this.hasError?"invalid":""},clickToCall:function(){if(this.from&&this.to&&this.callerId){this.hasError=!1;var e={phoneNumberFrom:this.from,phoneNumberTo:this.to,callerId:this.callerId};console.log("click to call params: ",e),P.clickToCall(e)}else this.hasError=!0}}};n("bc4a");q.render=W,q.__scopeId="data-v-282581d0";var J=q,Y=Object(l["T"])("data-v-5d4ab088");Object(l["D"])("data-v-5d4ab088");var Q={style:{padding:"20px"}},X=Object(l["m"])("div",{class:"call-config"},"Inbound Call Config",-1),Z=Object(l["l"])(" Save ");Object(l["B"])();var $=Y((function(e,t,n,o,a,c){var r=Object(l["G"])("a-alert"),i=Object(l["G"])("a-aler"),u=Object(l["G"])("a-form-item"),s=Object(l["G"])("a-col"),d=Object(l["G"])("a-button"),b=Object(l["G"])("a-row"),f=Object(l["G"])("EditOutlined"),m=Object(l["G"])("DeleteOutlined"),j=Object(l["G"])("a-table"),p=Object(l["G"])("b-col"),O=Object(l["G"])("b-row"),g=Object(l["G"])("a-modal"),h=Object(l["G"])("a-layout-content"),y=Object(l["G"])("a-layout");return Object(l["A"])(),Object(l["j"])(y,null,{default:Y((function(){return[Object(l["m"])(y,{style:{padding:"24px 24px 24px"}},{default:Y((function(){return[Object(l["m"])(h,{style:{background:"#fff",padding:"24px",margin:0,minHeight:"280px"}},{default:Y((function(){return[Object(l["m"])(b,null,{default:Y((function(){return[Object(l["m"])(s,null,{default:Y((function(){return[Object(l["m"])("div",Q,[X,a.isSaved&&!a.hasError?(Object(l["A"])(),Object(l["j"])(r,{key:0,message:"Successfully saved",type:"success",style:{"text-align":"left","margin-bottom":"5px"}})):Object(l["k"])("",!0),a.isServerError?(Object(l["A"])(),Object(l["j"])(i,{key:1,message:"Error",type:"error",style:{"text-align":"left","margin-bottom":"5px"}})):Object(l["k"])("",!0),Object(l["m"])(b,null,{default:Y((function(){return[Object(l["m"])(s,{style:{"margin-right":"15px"}},{default:Y((function(){return[Object(l["m"])(u,{label:"Caller Id",style:{display:"block","text-align":"left"}},{default:Y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.callerId)],"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.callerId=e})},null,2),[[l["N"],a.callerId]])]})),_:1})]})),_:1}),Object(l["m"])(s,{style:{"margin-right":"15px"}},{default:Y((function(){return[Object(l["m"])(u,{label:"Phone Number To",style:{display:"block","text-align":"left"}},{default:Y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.phoneNumberTo)],"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.phoneNumberTo=e})},null,2),[[l["N"],a.phoneNumberTo]])]})),_:1})]})),_:1}),Object(l["m"])(s,{style:{"margin-right":"15px"}},{default:Y((function(){return[Object(l["m"])(u,{label:"Call Forwarding #",style:{display:"block","text-align":"left"}},{default:Y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input",c.isInvalid(a.callForwardingNumber)],"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.callForwardingNumber=e})},null,2),[[l["N"],a.callForwardingNumber]])]})),_:1})]})),_:1}),Object(l["m"])(s,null,{default:Y((function(){return[Object(l["m"])(u,{style:{"text-align":"left"}},{default:Y((function(){return[Object(l["m"])(d,{type:"primary",onClick:c.saveConfig,style:{"margin-top":"32px"}},{default:Y((function(){return[Z]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1})]})),_:1}),a.configList?(Object(l["A"])(),Object(l["j"])(O,{key:0},{default:Y((function(){return[Object(l["m"])(p,null,{default:Y((function(){return[Object(l["m"])(j,{dataSource:a.configList.list,columns:a.columns},{action:Y((function(e){var t=e.record;return[Object(l["m"])("a",{title:"Edit",onClick:function(e){return c.editConfig(t)}},[Object(l["m"])(f,{style:{"font-size":"1.2em","margin-right":"15px"}})],8,["onClick"]),Object(l["m"])("a",{title:"Delete",onClick:function(e){return c.deleteConfig(t)}},[Object(l["m"])(m,{style:{"font-size":"1.2em"}})],8,["onClick"])]})),_:1},8,["dataSource","columns"])]})),_:1})]})),_:1})):Object(l["k"])("",!0),Object(l["m"])(g,{visible:a.modleVisibility,"onUpdate:visible":t[7]||(t[7]=function(e){return a.modleVisibility=e}),title:"Edit Config","ok-text":"Save",onOk:c.handleOk},{default:Y((function(){return[Object(l["m"])(u,{label:"Caller Id",style:{display:"block","text-align":"left"}},{default:Y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input"],"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.selectedConfig.callerId=e})},null,512),[[l["N"],a.selectedConfig.callerId]])]})),_:1}),Object(l["m"])(u,{label:"Phone Number To",style:{display:"block","text-align":"left"}},{default:Y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input"],"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.selectedConfig.phoneNumberTo=e})},null,512),[[l["N"],a.selectedConfig.phoneNumberTo]])]})),_:1}),Object(l["m"])(u,{label:"Call Forwarding Number",style:{display:"block","text-align":"left"}},{default:Y((function(){return[Object(l["S"])(Object(l["m"])("input",{class:["ant-input"],"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.selectedConfig.callForwardingNumber=e})},null,512),[[l["N"],a.selectedConfig.callForwardingNumber]])]})),_:1})]})),_:1},8,["visible","onOk"])]})),_:1})]})),_:1})]})),_:1})})),ee={components:{EditOutlined:U["a"],DeleteOutlined:F["a"]},data:function(){return{from:null,to:null,hasError:!1,callerId:null,phoneNumberTo:null,callForwardingNumber:null,isSaved:!1,isServerError:!1,configList:null,columns:[{title:"Caller Id",dataIndex:"callerId",key:"callerId"},{title:"Phone Number To",dataIndex:"phoneNumberTo",key:"phoneNumberTo"},{title:"Call Forwarding Number",dataIndex:"callForwardingNumber",key:"callForwardingNumber"},{title:"Action",slots:{customRender:"action"}}],modleVisibility:!1,selectedConfig:{callerId:null,phoneNumberTo:null,callForwardingNumber:null}}},methods:{deleteConfig:function(e){var t=this;confirm("Are you sure you want to delete this config?")&&P.deleteInboundCallConfig(e.id).then((function(e){201===e.status&&t.getInboundCallConfigs()}))},editConfig:function(e){var t=this;this.selectedConfig.callerId=null,this.selectedConfig.phoneNumberTo=null,this.selectedConfig.callForwardingNumber=null,P.getInboundCallConfigById(e.id).then((function(e){if(200===e.status){t.modleVisibility=!0;var n=e.data,l=n.callerId,o=n.phoneNumberTo,a=n.callForwardingNumber;t.selectedConfig.callerId=l,t.selectedConfig.phoneNumberTo=o,t.selectedConfig.callForwardingNumber=a}}))},handleOk:function(){var e=this;P.updateInboundCallConfig(this.selectedConfig).then((function(t){201===t.status&&(e.getInboundCallConfigs(),e.modleVisibility=!1)}))},isInvalid:function(e){return!e&&this.hasError?"invalid":""},saveConfig:function(){var e=this;if(this.phoneNumberTo&&this.callerId&&this.callForwardingNumber){this.hasError=!1;var t={phoneNumberTo:this.phoneNumberTo,callerId:this.callerId,callForwardingNumber:this.callForwardingNumber};console.log("inbound call params: ",t),P.addInboundCallConfig(t).then((function(t){console.log("RESPONSE: ",t),201===t.status?(e.phoneNumberTo=null,e.callerId=null,e.callForwardingNumber=null,e.isSaved=!0,e.getInboundCallConfigs()):e.isServerError=!0}))}else this.hasError=!0},getInboundCallConfigs:function(){var e=this;P.getInboundCallConfigs().then((function(t){t.status&&(e.configList={list:t.data.items,pager:t.data.meta})}))}},created:function(){this.getInboundCallConfigs()}};n("49fc");ee.render=$,ee.__scopeId="data-v-5d4ab088";var te=ee,ne=[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}],le=Object(l["n"])({setup:function(){var e=Object(l["E"])({collapsed:!1,selectedKeys:["1"],openKeys:["sub1"],preOpenKeys:["sub1"],currentComponent:"Home"});Object(l["P"])((function(){return e.openKeys}),(function(t,n){e.preOpenKeys=n}));var t=function(){e.collapsed=!e.collapsed,e.openKeys=e.collapsed?[]:e.preOpenKeys},n=function(t){e.currentComponent=t};return Object(j["a"])(Object(j["a"])({},Object(l["L"])(e)),{},{toggleCollapsed:t,setCurrentCompnent:n,routes:ne})},components:{Config:z,HomeOutlined:p["a"],NumberOutlined:O["a"],PhoneOutlined:g["a"],SettingOutlined:h["a"],OutboundCall:J,InboundCall:te,Home:A}});n("4fc1");le.render=m,le.__scopeId="data-v-6b969caa";var oe=le,ae=Object(l["n"])({name:"App",components:{HelloWorld:oe}});n("6f34");ae.render=o;var ce=ae,re=(n("04f3"),n("ed3b")),ie=(n("9f9e3"),n("2c92")),ue=(n("73d0"),n("a600")),se=(n("a71a"),n("b558")),de=(n("c0ed"),n("9fd0")),be=(n("48e3"),n("2fc4")),fe=(n("b6e5"),n("55f1")),me=(n("3e86"),n("7571")),je=(n("a106"),n("09d9")),pe=(n("c721"),n("3af3")),Oe=(n("0723"),n("0020")),ge=(n("153b"),n("9571")),he=(n("50ac"),n("9a63")),ye=(n("1815"),n("e32c")),Ce=(n("ee33"),n("a79d")),ve=(n("19ac"),n("cdeb")),ke=(n("5e72"),n("3779")),Ne=(n("0c1d"),n("8592")),xe=(n("e1f5"),n("5efb")),_e=(n("d2a2"),n("98c5"));function Ie(e){e.use(_e["a"]),e.use(xe["a"]),e.use(Ne["a"]),e.use(ke["a"]),e.use(ve["a"]),e.use(Ce["a"]),e.use(ye["a"]),e.use(he["a"]),e.use(ge["a"]),e.use(Oe["a"]),e.use(pe["a"]),e.use(je["a"]),e.use(me["a"]),e.use(fe["a"]),e.use(be["a"]),e.use(de["a"]),e.use(se["a"]),e.use(ue["a"]),e.use(ie["a"]),e.use(re["a"])}var we=Object(l["i"])(ce);Ie(we),we.mount("#app")},d9a4:function(e,t,n){"use strict";n("9435")}});
//# sourceMappingURL=app.402aff42.js.map