(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a55b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-page"},[n("div",{staticClass:"login"},[n("div",{staticClass:"login-container"},[n("div",{staticClass:"login-form-column"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.authLoginUser(t)}}},[n("h3",[e._v("Hello!")]),e._m(0),n("div",{staticClass:"form-wrapper"},[n("label",[e._v("Username")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",name:"username",id:"username",placeholder:"Enter your username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("button",{attrs:{type:"submit"}},[e._v("LOG IN   "),e.showSpinner?n("span",{staticClass:"fa fa-spin fa-spinner"}):e._e()])])]),e._m(1)])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v('Welcome to our little Vue demo powered by CometChat. Login with the username "superhero1" or "superhero2" and test the chat out.\n                           To create your own user, see '),n("a",{attrs:{href:"https://prodocs.cometchat.com/reference#createuser"}},[e._v("our documentation")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-image-column"},[n("div",{staticClass:"image-holder"})])}],s=n("9ada"),o={data:function(){return{username:"",showSpinner:!1}},methods:{authLoginUser:function(){var e=this,t="64ab7da26792f5833bb9db5ca86e546653bec76a";this.showSpinner=!0,s["CometChat"].login(this.username,t).then(function(){e.showSpinner=!1,e.$router.push({name:"home"})},function(t){e.showSpinner=!1,console.error(t.code)})}}},i=o,u=n("2877"),c=Object(u["a"])(i,a,r,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=about.e095d448.js.map