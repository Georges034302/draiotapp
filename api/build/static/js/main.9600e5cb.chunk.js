(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){e.exports=n(77)},36:function(e,t,n){},37:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),l=(n(36),n(37),n(1)),s=n(2),i=n.n(s),u=n(4),m=n(26),f=n.n(m),b=n(7),d=n(27),p=n.n(d),g=new function e(){Object(b.a)(this,e),this.pusherClient=void 0;var t=new p.a("13d42090d9298d2858ef",{cluster:"ap4",encrypted:!0});this.pusherClient=t},v=new f.a,h=function(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=c.a.useState(!1),o=Object(l.a)(r,2),s=(o[0],o[1],c.a.useState()),m=Object(l.a)(s,2)[1],f=c.a.useCallback(function(){return m({})},[]),b=c.a.useState(!1),d=Object(l.a)(b,2),p=d[0],h=d[1],E=c.a.useState("0000"),O=Object(l.a)(E,2),y=O[0],w=O[1],j=c.a.useRef();c.a.useEffect(function(){g.pusherClient.subscribe("segment-channel").bind("segment-data-event",function(e){var t=JSON.stringify(e);e&&w(t)})},[]);var N=function(e){i.a.post("/segment-display",{operation:e}).then(function(e){u.NotificationManager.success("Success","Sent")}).catch(function(e){u.NotificationManager.error("Error","Something went wrong")})};return c.a.useEffect(function(){i.a.get("/segment-display").then(function(e){h(e.data.status)}).catch(function(e){console.log(e)})},[]),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},c.a.createElement("a",null,"Segment")),c.a.createElement("h4",{className:"card-title"},c.a.createElement("a",null,"Data: ",y)),c.a.createElement("button",{className:"btn waves-effect waves-light ".concat(p?"btn-blue":"btn-outline-blue"),onClick:function(){N("on"),h(!0)}},"On"),c.a.createElement("button",{className:"btn waves-effect waves-light ".concat(p?"btn-outline-blue":"btn-blue"),onClick:function(){N("off"),h(!1),w("0000")}},"Off"),c.a.createElement("div",{className:"mt-2"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){if(!v.allValid())return f(),void v.showMessages();var t=parseInt(e);i.a.post("/segment-display/numbers",{numbers:JSON.stringify(t)}).then(function(e){u.NotificationManager.success("Success","Sent")}).catch(function(e){u.NotificationManager.error("Error","Something went wrong")}).finally(function(){a(""),v.hideMessages(),f()})}(n)}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Display numbers"),c.a.createElement("input",{disabled:!p,ref:j,name:"numbers",value:n,onChange:function(e){return a(e.target.value)},className:"form-control"}),v.message("numbers",n,"required|numeric|max:4")),c.a.createElement("button",{onClick:function(){v.showMessages()},className:"btn btn-outline-primary",type:"submit"},"Submit")))))},E=n(5);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var y=function(e){var t=c.a.useState(!1),n=Object(l.a)(t,2),a=n[0],r=n[1],o=function(t){var n={color:e.color,operation:t};i.a.post("led",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(E.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n)).then(function(e){console.log(e)}).catch(function(e){console.log(e)})};return e.color?c.a.createElement("div",{className:"card-body"},c.a.createElement("button",{onClick:function(){r(!0),o("on")},className:"btn waves-effect waves-light ".concat(a?"btn-"+e.color:"btn-outline-"+e.color)},"On"),c.a.createElement("button",{onClick:function(){o("off"),r(!1)},className:"btn waves-effect waves-light ".concat(a?"btn-outline-"+e.color:"btn-"+e.color)},"Off")):c.a.createElement(c.a.Fragment,null)},w=function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},c.a.createElement("a",null,"LED"))),c.a.createElement(y,{color:"red"}),c.a.createElement(y,{color:"blue"}),c.a.createElement(y,{color:"yellow"}),c.a.createElement(y,{color:"green"}))};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var N=function(){var e=c.a.useState("0"),t=Object(l.a)(e,2),n=(t[0],t[1]),a=c.a.useState(!1),r=Object(l.a)(a,2),o=r[0],s=r[1],u=c.a.useState(!1),m=Object(l.a)(u,2),f=m[0],b=m[1];c.a.useEffect(function(){g.pusherClient.subscribe("motion-channel").bind("motion-data-event",function(e){var t=e;"DETECTED"===t?(b(!0),n(t)):(b(!1),n("None"))}),d()},[]);var d=function(){i.a.get("/pir").then(function(e){s(e.data.status)}).catch(function(e){return console.log(e)})},p=function(e){var t={operation:e};i.a.post("pir",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach(function(t){Object(E.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)).then(function(e){console.log(e)}).catch(function(e){console.log(e)})};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},c.a.createElement("a",null,"Motion")),c.a.createElement("h4",{className:"card-title"},c.a.createElement("button",{className:"btn ".concat(f?"btn-danger":"btn-outline-danger"),style:{borderRadius:"45%"}},"o")),c.a.createElement("button",{onClick:function(){p("on"),s(!0)},className:"btn waves-effect waves-light ".concat(o?"btn-blue":"btn-outline-blue")},"On"),c.a.createElement("button",{onClick:function(){p("off"),s(!1),b(!1)},className:"btn waves-effect waves-light ".concat(o?"btn-outline-blue":"btn-blue")},"Off")))};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var P=function(){var e=c.a.useState("0"),t=Object(l.a)(e,2),n=t[0],a=t[1],r=c.a.useState("CM"),o=Object(l.a)(r,2),s=o[0],u=o[1],m=c.a.useState(!1),f=Object(l.a)(m,2),b=f[0],d=f[1];c.a.useEffect(function(){g.pusherClient.subscribe("ultra-channel").bind("ultra-data-event",function(e){var t=JSON.stringify(e);try{var n=parseFloat(t).toFixed(2);if("M"===s){var c=parseFloat(n);a((c/=100).toFixed(4))}else"CM"===s&&a(n)}catch(r){a("0")}})},[s]),c.a.useEffect(function(){i.a.get("/ultra").then(function(e){d(e.data.status)}).catch(function(e){return console.log(e)})},[]);var p=function(e){var t={operation:e};i.a.post("ultra",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(E.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t)).then(function(e){console.log(e)}).catch(function(e){console.log(e)})};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},c.a.createElement("a",null,"Distance")),c.a.createElement("h4",{className:"card-title"},c.a.createElement("a",null,"Data: ",n)),c.a.createElement("div",{className:"dropdown"},c.a.createElement("button",{className:"btn btn-info dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},s),c.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},c.a.createElement("a",{onClick:function(){u("M")},className:"dropdown-item"},"M"),c.a.createElement("a",{onClick:function(){u("CM")},className:"dropdown-item"},"CM"))),c.a.createElement("button",{onClick:function(){p("on"),d(!0)},className:"btn waves-effect waves-light ".concat(b?"btn-blue":"btn-outline-blue")},"On"),c.a.createElement("button",{onClick:function(){p("off"),d(!1),a("0")},className:"btn waves-effect waves-light ".concat(b?"btn-outline-blue":"btn-blue")},"Off")))},C=n(8),k="user:storage",D=function(){function e(){Object(b.a)(this,e)}return Object(C.a)(e,null,[{key:"save",value:function(e){localStorage.setItem(k,JSON.stringify(e))}},{key:"load",value:function(){return localStorage.getItem(k)||""}},{key:"clear",value:function(){localStorage.removeItem(k)}}]),e}(),M=function(e){return c.a.createElement("div",{className:"container-fluid mt-3"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",null,"Sensors Controller"),c.a.createElement("button",{onClick:function(){D.clear(),e.setAuth(!1)},className:"btn btn-danger"},"Logout")))},A=n(29),F=n(28),x=n(30);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var I=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],r=n[1],o=c.a.useState(""),s=Object(l.a)(o,2),m=s[0],f=s[1];c.a.useEffect(function(){},[]);return c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"col-md-6 offset-md-3 col-12 col-sm-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",null,"Login to system"),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={username:a,password:m};i.a.post("/auth/login",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach(function(t){Object(E.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n)).then(function(t){t.data.payload.token&&(D.save(t.data.payload.token),e.setAuth(!0))}).catch(function(e){u.NotificationManager.error("Username or password is incorrect"),console.log(e)})}},c.a.createElement("label",null,"Username"),c.a.createElement("input",{onChange:function(e){return r(e.target.value)},type:"text",className:"form-control"}),c.a.createElement("label",null,"Password"),c.a.createElement("input",{onChange:function(e){return f(e.target.value)},type:"password",className:"form-control"}),c.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary mt-4"}))))))},B=function(e){return function(t){function n(e){var t;return Object(b.a)(this,n),(t=Object(A.a)(this,Object(F.a)(n).call(this,e))).state={auth:!1},t.setAuth=function(e){t.setState({auth:e})},t}return Object(x.a)(n,t),Object(C.a)(n,[{key:"componentWillMount",value:function(){var e=D.load();e&&e.length>0&&this.setState({auth:!0})}},{key:"render",value:function(){return this.state.auth?c.a.createElement(e,Object.assign({},this.props,{setAuth:this.setAuth})):c.a.createElement(I,Object.assign({},this.props,{setAuth:this.setAuth}))}}]),n}(c.a.Component)}(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{setAuth:e.setAuth}),c.a.createElement("div",{className:"container p-2"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-12 col-sm-12 mt-3"},c.a.createElement(P,null)),c.a.createElement("div",{className:"col-lg-6 col-12 col-sm-12 mt-3"},c.a.createElement(N,null))),c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-lg-6 col-12 col-sm-12 mt-3"},c.a.createElement(w,null)),c.a.createElement("div",{className:"col-lg-6 col-12 col-sm-12 mt-3"},c.a.createElement(h,null)))))}),L=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(B,null),c.a.createElement(u.NotificationContainer,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(76);o.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.9600e5cb.chunk.js.map