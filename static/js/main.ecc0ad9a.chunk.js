(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(24),a(11)),s=a(12),l=a(17),u=a(13),h=a(18),d=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2 tc"},r.a.createElement("img",{alt:"Robot",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(d,{key:e.id,id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.onChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",type:"search",placeholder:"Search Robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},E=(a(26),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"500px",border:"1px solid black"}},e.children)}),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onSearch=function(t){e.setState({searchTxt:t.target.value})},e.state={robotsArray:[],searchTxt:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robotsArray:t})})}},{key:"render",value:function(){var e=this.state,t=e.searchTxt,a=e.robotsArray,n=this.state.robotsArray.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Friends"),r.a.createElement(b,{onChange:this.onSearch}),r.a.createElement(E,null,r.a.createElement(m,{robots:n}))):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Loading"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(28);var v=a(16),f=a(3),p=a(4),w={searchField:""},O={isPending:!1,robots:[],error:""},y=a(15),S=(Object(y.createLogger)(),Object(f.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object(p.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(p.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(p.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(p.a)({},e,{error:t.payload,isPending:!1});default:return e}}})),j=Object(f.c)(S);c.a.render(r.a.createElement(v.a,{store:j},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.ecc0ad9a.chunk.js.map