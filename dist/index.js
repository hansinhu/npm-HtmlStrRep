!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.HtmlStrReplace=t():e.HtmlStrReplace=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return n});class n{constructor(){this.endObj={tag:"",children:[],nextStr:null},this.originStr="",this.sFrom="",this.sToColor=""}startRep(e,t,r="#f44c3f"){return this.originStr=e,this.sFrom=t,this.sToColor=r,this.endObj=this.strToObj(e),this.reGroup(this.endObj)}reGroup(e){let t="";if(e.tag){let r=[];e.children.forEach(e=>{r.push(this.reGroup(e))}),t+=r.join(e.tag)}else t+=this.replace(e.nextStr);return t}replace(e){return e.replace(new RegExp(this.sFrom,"gi"),e=>""!==e?'<span style="color: '+this.sToColor+';">'+e+"</span>":"")}strToObj(e){let t={tag:"",children:[],nextStr:null},r=this.deleHave(this.machTag(e));if(r){let n=r[0];t.tag=n,t.nextStr="";let o=e.split(n);o.forEach((e,r)=>{t.children.push({tag:"",children:[],nextStr:o[r]}),e&&this.deleHave(this.machTag(e))&&(t.children[r]=this.strToObj(e))})}else t.nextStr=e;return t}machTag(e){return e.match(/<[^>]+>/g)}deleHave(e){if(!e)return e;let t=[];for(let r of e)-1===t.indexOf(r)&&t.push(r);return t}}}])});