webpackJsonp([6],{j7e0:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1}},beforeRouteEnter:function(t,s,e){var n=s.name,o=t.params.logout;e(function(t){if(t.$store.state.auth)switch(n){case"Register":t.showMsg("注册成功");break;case"Login":t.showMsg("登录成功")}else o&&t.showMsg("操作成功")})},computed:{auth:function(){return this.$store.state.auth}},watch:{auth:function(t){t||this.showMsg("操作成功")}},methods:{showMsg:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=t,this.msgType=s,this.msgShow=!0}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(s){t.msgShow=s}}})],1)},staticRenderFns:[]};var a=e("VU/8")(n,o,!1,function(t){e("p3Tx")},"data-v-12d1ba82",null);s.default=a.exports},p3Tx:function(t,s){}});
//# sourceMappingURL=6.7898df605bd3c4bf7bf8.js.map