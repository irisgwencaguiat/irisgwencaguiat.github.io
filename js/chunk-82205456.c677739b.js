(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82205456"],{"0fd9":function(t,n,r){"use strict";r("99af"),r("4160"),r("caad"),r("13d5"),r("4ec9"),r("b64b"),r("d3b7"),r("ac1f"),r("2532"),r("3ca3"),r("5319"),r("159b"),r("ddb0");var e=r("ade3"),i=r("5530"),o=(r("4b85"),r("2b0e")),a=r("d9f7"),s=r("80d2"),u=["sm","md","lg","xl"],c=["start","end","center"];function h(t,n){return u.reduce((function(r,e){return r[t+Object(s["o"])(e)]=n(),r}),{})}var l=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},f=h("align",(function(){return{type:String,default:null,validator:l}})),d=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},p=h("justify",(function(){return{type:String,default:null,validator:d}})),g=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},v=h("alignContent",(function(){return{type:String,default:null,validator:g}})),w={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(v)},m={align:"align",justify:"justify",alignContent:"align-content"};function b(t,n,r){var e=m[t];if(null!=r){if(n){var i=n.replace(t,"");e+="-".concat(i)}return e+="-".concat(r),e.toLowerCase()}}var y=new Map;n["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l}},f),{},{justify:{type:String,default:null,validator:d}},p),{},{alignContent:{type:String,default:null,validator:g}},v),render:function(t,n){var r=n.props,i=n.data,o=n.children,s="";for(var u in r)s+=String(r[u]);var c=y.get(s);return c||function(){var t,n;for(n in c=[],w)w[n].forEach((function(t){var e=r[t],i=b(n,t,e);i&&c.push(i)}));c.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(e["a"])(t,"align-".concat(r.align),r.align),Object(e["a"])(t,"justify-".concat(r.justify),r.justify),Object(e["a"])(t,"align-content-".concat(r.alignContent),r.alignContent),t)),y.set(s,c)}(),t(r.tag,Object(a["a"])(i,{staticClass:"row",class:c}),o)}})},"6d88":function(t,n,r){(function(n,r){t.exports=r()})(0,(function(){function t(){return t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},t.apply(this,arguments)}function n(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function e(t){var r=0;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t)))return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return r=t[Symbol.iterator](),r.next.bind(r)}var i="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function o(t){var n=t.split("-"),r=n[1],e=n[2],o=n[3];if(!r||!e||!o)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+i+'".');var a=e.split("x"),s=a[0],u=a[1],c=+s,h=+u,l=isFinite(c)&&isFinite(h);if(!l)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+i+'".');return{id:r,width:c,height:h,format:o}}var a=function(t){var n=t;return!!n&&"string"===typeof n._ref},s=function(t){var n=t;return!!n&&"string"===typeof n._id},u=function(t){var n=t;return!(!n||!n.asset)&&"string"===typeof n.asset.url};function c(t){if(!t)return null;var n;if("string"===typeof t&&h(t))n={asset:{_ref:l(t)}};else if("string"===typeof t)n={asset:{_ref:t}};else if(a(t))n={asset:t};else if(s(t))n={asset:{_ref:t._id||""}};else if(u(t))n={asset:{_ref:l(t.asset.url)}};else{if("object"!==typeof t.asset)return null;n=t}var r=t;return r.crop&&(n.crop=r.crop),r.hotspot&&(n.hotspot=r.hotspot),f(n)}function h(t){return/^https?:\/\//.test(""+t)}function l(t){var n=t.split("/").slice(-1);return("image-"+n[0]).replace(/\.([a-z]+)$/,"-$1")}function f(n){if(n.crop&&n.hotspot)return n;var r=t({},n);return r.crop||(r.crop={left:0,top:0,bottom:0,right:0}),r.hotspot||(r.hotspot={x:.5,y:.5,height:1,width:1}),r}var d=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"]];function p(n){var r=t({},n||{}),e=r.source;delete r.source;var i=c(e);if(!i)return null;var a=i.asset._ref||i.asset._id||"",s=o(a),u=Math.round(i.crop.left*s.width),h=Math.round(i.crop.top*s.height),l={left:u,top:h,width:Math.round(s.width-i.crop.right*s.width-u),height:Math.round(s.height-i.crop.bottom*s.height-h)},f=i.hotspot.height*s.height/2,d=i.hotspot.width*s.width/2,p=i.hotspot.x*s.width,w=i.hotspot.y*s.height,m={left:p-d,top:w-f,right:p+d,bottom:w+f};return r.rect||r.focalPoint||r.ignoreImageParams||r.crop||(r=t(t({},r),v({crop:l,hotspot:m},r))),g(t(t({},r),{},{asset:s}))}function g(t){var n=t.baseUrl||"https://cdn.sanity.io",r=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,e=n+"/images/"+t.projectId+"/"+t.dataset+"/"+r,i=[];if(t.rect){var o=t.rect,a=o.left,s=o.top,u=o.width,c=o.height,h=0!==a||0!==s||c!==t.asset.height||u!==t.asset.width;h&&i.push("rect="+a+","+s+","+u+","+c)}t.bg&&i.push("bg="+t.bg),t.focalPoint&&(i.push("fp-x="+t.focalPoint.x),i.push("fp-y="+t.focalPoint.y));var l=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return l&&i.push("flip="+l),d.forEach((function(n){var r=n[0],e=n[1];"undefined"!==typeof t[r]?i.push(e+"="+encodeURIComponent(t[r])):"undefined"!==typeof t[e]&&i.push(e+"="+encodeURIComponent(t[e]))})),0===i.length?e:e+"?"+i.join("&")}function v(t,n){var r,e=n.width,i=n.height;if(!e||!i)return{width:e,height:i,rect:t.crop};var o=t.crop,a=t.hotspot,s=e/i,u=o.width/o.height;if(u>s){var c=o.height,h=c*s,l=o.top,f=(a.right-a.left)/2+a.left,d=f-h/2;d<o.left?d=o.left:d+h>o.left+o.width&&(d=o.left+o.width-h),r={left:Math.round(d),top:Math.round(l),width:Math.round(h),height:Math.round(c)}}else{var p=o.width,g=p/s,v=o.left,w=(a.bottom-a.top)/2+a.top,m=w-g/2;m<o.top?m=o.top:m+g>o.top+o.height&&(m=o.top+o.height-g),r={left:Math.max(0,Math.floor(v)),top:Math.max(0,Math.floor(m)),width:Math.round(p),height:Math.round(g)}}return{width:e,height:i,rect:r}}var w=["clip","crop","fill","fillmax","max","scale","min"],m=["top","bottom","left","right","center","focalpoint","entropy"],b=["format"];function y(t){return!!t&&"object"===typeof t.clientConfig}function O(t){for(var n,r=d,i=e(r);!(n=i()).done;){var o=n.value,a=o[0],s=o[1];if(t===a||t===s)return a}return t}function j(t){var n=t;if(y(n)){var r=n.clientConfig,e=r.apiHost,i=r.projectId,o=r.dataset,a=e||"https://api.sanity.io";return new x(null,{baseUrl:a.replace(/^https:\/\/api\./,"https://cdn."),projectId:i,dataset:o})}return new x(null,t)}var x=function(){function n(n,r){this.options=t(n?t({},n.options||{}):{},r||{})}var r=n.prototype;return r.withOptions=function(r){var e=r.baseUrl||this.options.baseUrl,i={baseUrl:e};for(var o in r)if(r.hasOwnProperty(o)){var a=O(o);i[a]=r[o]}return new n(this,t({baseUrl:e},i))},r.image=function(t){return this.withOptions({source:t})},r.dataset=function(t){return this.withOptions({dataset:t})},r.projectId=function(t){return this.withOptions({projectId:t})},r.bg=function(t){return this.withOptions({bg:t})},r.dpr=function(t){return this.withOptions({dpr:t})},r.width=function(t){return this.withOptions({width:t})},r.height=function(t){return this.withOptions({height:t})},r.focalPoint=function(t,n){return this.withOptions({focalPoint:{x:t,y:n}})},r.maxWidth=function(t){return this.withOptions({maxWidth:t})},r.minWidth=function(t){return this.withOptions({minWidth:t})},r.maxHeight=function(t){return this.withOptions({maxHeight:t})},r.minHeight=function(t){return this.withOptions({minHeight:t})},r.size=function(t,n){return this.withOptions({width:t,height:n})},r.blur=function(t){return this.withOptions({blur:t})},r.sharpen=function(t){return this.withOptions({sharpen:t})},r.rect=function(t,n,r,e){return this.withOptions({rect:{left:t,top:n,width:r,height:e}})},r.format=function(t){return this.withOptions({format:t})},r.invert=function(t){return this.withOptions({invert:t})},r.orientation=function(t){return this.withOptions({orientation:t})},r.quality=function(t){return this.withOptions({quality:t})},r.forceDownload=function(t){return this.withOptions({download:t})},r.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},r.flipVertical=function(){return this.withOptions({flipVertical:!0})},r.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},r.fit=function(t){if(-1===w.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},r.crop=function(t){if(-1===m.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},r.saturation=function(t){return this.withOptions({saturation:t})},r.auto=function(t){if(-1===b.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},r.url=function(){return p(this.options)},r.toString=function(){return this.url()},n}();return j}))},"99d9":function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return s})),r.d(n,"d",(function(){return u}));var e=r("b0af"),i=r("80d2"),o=Object(i["e"])("v-card__actions"),a=Object(i["e"])("v-card__subtitle"),s=Object(i["e"])("v-card__text"),u=Object(i["e"])("v-card__title");e["a"]},f2d6:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("section",[r("v-card",{staticClass:"mt-2 mb-2",attrs:{elevation:"0"}},[r("v-row",[r("v-col",{attrs:{"offset-md":"1",md:"10"}},[r("v-card-actions",[r("v-img",{attrs:{height:"80vh",src:t.urlFor(t.getBlog[0].imageUrl).url()}})],1),t._l(t.getBlog[0].categories,(function(n){return r("v-card-actions",{staticClass:"d-inline-flex"},[r("v-btn",{staticStyle:{"background-color":"#787878"},attrs:{rounded:"",outlined:"",small:"",dark:""}},[t._v(" "+t._s(n.title)+" ")])],1)})),r("v-card-title",{staticClass:"text"},[t._v(t._s(t.getBlog[0].title))]),r("v-spacer"),t._l(t.getBlog[0].body,(function(n){return r("v-card-text",{staticClass:"text-justify",staticStyle:{"line-height":"20px"}},[r("span",[t._v(t._s(n.children[0].text))])])})),r("v-card-subtitle",{staticClass:"d-flex"},[r("span",[t._v(t._s(t.getBlog[0]._createdAt))]),r("v-spacer"),r("span",[t._v(t._s(t.getBlog[0].author.name))])],1)],2)],1)],1)],1)},i=[],o=(r("4de4"),r("9f4d")),a=r("6d88"),s=r.n(a),u=s()(o["a"]),c={methods:{urlFor:function(t){return u.image(t)}},computed:{getBlog:function(){var t=this,n=this.$store.state.blog.blogs;return n.filter((function(n){return n._id===t.$route.params.id}))}}},h=c,l=r("2877"),f=r("6544"),d=r.n(f),p=r("8336"),g=r("b0af"),v=r("99d9"),w=r("62ad"),m=r("adda"),b=r("0fd9"),y=r("2fa4"),O=Object(l["a"])(h,e,i,!1,null,null,null);n["default"]=O.exports;d()(O,{VBtn:p["a"],VCard:g["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:w["a"],VImg:m["a"],VRow:b["a"],VSpacer:y["a"]})}}]);
//# sourceMappingURL=chunk-82205456.c677739b.js.map