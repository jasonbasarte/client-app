(function(e){function t(t){for(var c,s,r=t[0],o=t[1],u=t[2],b=0,i=[];b<r.length;b++)s=r[b],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&i.push(a[s][0]),a[s]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);f&&f(t);while(i.length)i.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],c=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(c=!1)}c&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},a={app:0},l=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var f=o;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"17aa":function(e,t,n){"use strict";n("79e9")},4678:function(e,t,n){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=l(e);return n(t)}function l(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=l,e.exports=a,a.id="4678"},"6f34":function(e,t,n){"use strict";n("99e3")},"75bc":function(e,t,n){},"79e9":function(e,t,n){},"99e3":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79df");var c=n("7a23");function a(e,t,n,a,l,s){var r=Object(c["F"])("HelloWorld");return Object(c["z"])(),Object(c["j"])(r,{msg:"Welcome to Your Vue.js + TypeScript App"})}var l=Object(c["P"])("data-v-15a3963b");Object(c["C"])("data-v-15a3963b");var s=Object(c["l"])("span",{style:{"font-size":"1.3em"}},"FREESWITCH",-1),r={style:{display:"flex"}},o={style:{width:"80px"}},u=Object(c["l"])("span",null,"Option 1",-1),f=Object(c["l"])("span",null,"Option 3",-1),b=Object(c["k"])("Navigation Two"),i={style:{flex:"1"}};Object(c["A"])();var d=l((function(e,t,n,a,d,j){var p=Object(c["F"])("a-menu-item"),O=Object(c["F"])("a-menu"),m=Object(c["F"])("HomeOutlined"),h=Object(c["F"])("NumberOutlined"),y=Object(c["F"])("DesktopOutlined"),v=Object(c["F"])("UserOutlined"),g=Object(c["F"])("AppstoreOutlined"),k=Object(c["F"])("Config");return Object(c["z"])(),Object(c["j"])("div",null,[Object(c["l"])(O,{selectedKeys:e.current,"onUpdate:selectedKeys":t[1]||(t[1]=function(t){return e.current=t}),mode:"horizontal",theme:"dark"},{default:l((function(){return[Object(c["l"])(p,{key:"mail"},{default:l((function(){return[s]})),_:1})]})),_:1},8,["selectedKeys"]),Object(c["l"])("div",null,[Object(c["l"])("div",r,[Object(c["l"])("div",o,[Object(c["l"])(O,{class:"menu-style",style:{height:"100%"},mode:"inline",theme:"dark","inline-collapsed":!0,openKeys:e.openKeys,"onUpdate:openKeys":t[2]||(t[2]=function(t){return e.openKeys=t}),selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[3]||(t[3]=function(t){return e.selectedKeys=t})},{default:l((function(){return[Object(c["l"])(p,{key:"1"},{icon:l((function(){return[Object(c["l"])(m)]})),default:l((function(){return[u]})),_:1}),Object(c["l"])(p,{key:"3"},{icon:l((function(){return[Object(c["l"])(h)]})),default:l((function(){return[f]})),_:1}),Object(c["l"])(p,{key:"2"},{icon:l((function(){return[Object(c["l"])(y)]})),_:1}),Object(c["l"])(p,{key:"4"},{icon:l((function(){return[Object(c["l"])(v)]})),_:1}),Object(c["l"])(p,{key:"5"},{icon:l((function(){return[Object(c["l"])(g)]})),title:l((function(){return[b]})),_:1})]})),_:1},8,["openKeys","selectedKeys"])]),Object(c["l"])("div",i,[Object(c["l"])(k)])])])])})),j=n("5530"),p=n("0791"),O=n("edc4"),m=n("816a"),h=n("179b"),y=n("42a3"),v=Object(c["P"])("data-v-520afe1f");Object(c["C"])("data-v-520afe1f");var g={style:{background:"white",padding:"20px","margin-top":"15px"}},k=Object(c["l"])("div",{class:"call-config"}," Config ",-1),_=Object(c["k"])(" Save "),w={style:{padding:"20px"}},C=Object(c["l"])("div",{class:"call-config"}," Click To Call ",-1),z=Object(c["k"])(" Call ");Object(c["A"])();var K=v((function(e,t,n,a,l,s){var r=Object(c["F"])("a-form-item"),o=Object(c["F"])("a-button"),u=Object(c["F"])("a-col"),f=Object(c["F"])("a-row");return Object(c["z"])(),Object(c["j"])("div",null,[Object(c["l"])(f,null,{default:v((function(){return[Object(c["l"])(u,{span:10},{default:v((function(){return[Object(c["l"])("div",g,[k,Object(c["l"])(r,{label:"Friendly Name"},{default:v((function(){return[Object(c["O"])(Object(c["l"])("input",{class:"ant-input","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.friendlyName=e})},null,512),[[c["K"],l.friendlyName]])]})),_:1}),Object(c["l"])(r,{label:"Phone Number"},{default:v((function(){return[Object(c["O"])(Object(c["l"])("input",{class:"ant-input","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.phoneNumber=e})},null,512),[[c["K"],l.phoneNumber]])]})),_:1}),Object(c["l"])(r,{label:"HTTP Method"},{default:v((function(){return[Object(c["O"])(Object(c["l"])("input",{class:"ant-input","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.httpMethod=e})},null,512),[[c["K"],l.httpMethod]])]})),_:1}),Object(c["l"])(r,{label:"Webhook URL"},{default:v((function(){return[Object(c["O"])(Object(c["l"])("input",{class:"ant-input","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.webhookURL=e})},null,512),[[c["K"],l.webhookURL]])]})),_:1}),Object(c["l"])(r,{style:{"text-align":"left"}},{default:v((function(){return[Object(c["l"])(o,{type:"primary",onClick:s.saveConfig},{default:v((function(){return[_]})),_:1},8,["onClick"])]})),_:1})])]})),_:1})]})),_:1}),Object(c["l"])(f,null,{default:v((function(){return[Object(c["l"])(u,{span:10},{default:v((function(){return[Object(c["l"])("div",w,[C,Object(c["l"])(f,null,{default:v((function(){return[Object(c["l"])(u,{span:6,style:{"margin-right":"20px"}},{default:v((function(){return[Object(c["l"])(r,{label:"From"},{default:v((function(){return[Object(c["O"])(Object(c["l"])("input",{class:"ant-input","onUpdate:modelValue":t[5]||(t[5]=function(e){return l.from=e})},null,512),[[c["K"],l.from]])]})),_:1})]})),_:1}),Object(c["l"])(u,{span:6},{default:v((function(){return[Object(c["l"])(r,{label:"To",style:{"margin-right":"20px"}},{default:v((function(){return[Object(c["O"])(Object(c["l"])("input",{class:"ant-input","onUpdate:modelValue":t[6]||(t[6]=function(e){return l.to=e})},null,512),[[c["K"],l.to]])]})),_:1})]})),_:1}),Object(c["l"])(u,{span:6,style:{"margin-right":"20px"}},{default:v((function(){return[Object(c["l"])(r,{label:"Caller Id"},{default:v((function(){return[Object(c["O"])(Object(c["l"])("input",{class:"ant-input","onUpdate:modelValue":t[7]||(t[7]=function(e){return l.callerId=e})},null,512),[[c["K"],l.callerId]])]})),_:1})]})),_:1}),Object(c["l"])(u,{span:3,style:{position:"relative"}},{default:v((function(){return[Object(c["l"])(o,{type:"danger",onClick:s.clickToCall,style:{position:"absolute",right:"0px",top:"32px"}},{default:v((function(){return[z]})),_:1},8,["onClick"])]})),_:1})]})),_:1})])]})),_:1})]})),_:1})])})),x=n("bc3a"),N=n.n(x),U=N.a.create({baseURL:"http://localhost:3000/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),F={getCallConfigById:function(e){return U.get("/freeswitch-call-config/getCallConfigById",{params:e})},saveRecord:function(e){return U.post("/freeswitch-call-config/saveRecord",e)},clickToCall:function(e){return U.post("/freeswitch/clickToCall",e)}},T={data:function(){return{friendlyName:null,phoneNumber:null,httpMethod:null,webhookURL:null,from:null,to:null,callerId:null}},methods:{saveConfig:function(){console.log("saveConfig: ");var e={friendlyName:this.friendlyName,phoneNumber:this.phoneNumber,httpMethod:this.httpMethod,webhookUrl:this.webhookURL};F.saveRecord(e).then((function(e){console.log("Save config return: ",e)})),console.log(e)},clickToCall:function(){var e={phoneNumberFrom:this.from,phoneNumberTo:this.to,callerId:this.callerId};F.clickToCall(e),console.log("params: ",e)}},created:function(){F.getCallConfigById({id:2})}};n("fbce");T.render=K,T.__scopeId="data-v-520afe1f";var M=T,I=[{path:"index",breadcrumbName:"First-level Menu"},{path:"first",breadcrumbName:"Second-level Menu"},{path:"second",breadcrumbName:"Third-level Menu"}],P=Object(c["m"])({setup:function(){var e=Object(c["D"])({collapsed:!1,selectedKeys:["1"],openKeys:["sub1"],preOpenKeys:["sub1"],friendlyName:"wtf"});Object(c["M"])((function(){return e.openKeys}),(function(t,n){e.preOpenKeys=n}));var t=function(){e.collapsed=!e.collapsed,e.openKeys=e.collapsed?[]:e.preOpenKeys};return Object(j["a"])(Object(j["a"])({},Object(c["I"])(e)),{},{toggleCollapsed:t,routes:I})},components:{Config:M,HomeOutlined:p["a"],UserOutlined:O["a"],DesktopOutlined:m["a"],NumberOutlined:h["a"],AppstoreOutlined:y["a"]}});n("17aa");P.render=d,P.__scopeId="data-v-15a3963b";var R=P,S=Object(c["m"])({name:"App",components:{HelloWorld:R}});n("6f34");S.render=a;var V=S,A=(n("a71a"),n("b558")),L=(n("c0ed"),n("9fd0")),H=(n("48e3"),n("2fc4")),D=(n("b6e5"),n("55f1")),W=(n("3e86"),n("7571")),E=(n("a106"),n("09d9")),B=(n("c721"),n("3af3")),q=(n("0723"),n("0020")),J=(n("153b"),n("9571")),Y=(n("50ac"),n("9a63")),G=(n("1815"),n("e32c")),Q=(n("ee33"),n("a79d")),X=(n("19ac"),n("cdeb")),Z=(n("5e72"),n("3779")),$=(n("0c1d"),n("8592")),ee=(n("e1f5"),n("5efb")),te=(n("d2a2"),n("98c5"));function ne(e){e.use(te["a"]),e.use(ee["a"]),e.use($["a"]),e.use(Z["a"]),e.use(X["a"]),e.use(Q["a"]),e.use(G["a"]),e.use(Y["a"]),e.use(J["a"]),e.use(q["a"]),e.use(B["a"]),e.use(E["a"]),e.use(W["a"]),e.use(D["a"]),e.use(H["a"]),e.use(L["a"]),e.use(A["a"])}var ce=Object(c["i"])(V);ne(ce),ce.mount("#app")},fbce:function(e,t,n){"use strict";n("75bc")}});
//# sourceMappingURL=app.0f71952c.js.map