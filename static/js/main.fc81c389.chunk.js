(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(13),n(14),n(1)),l=n(2),i=n(4),h=n(3),u=n(5),m=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"900px"}},e.children)},d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Ooops. That is not good"):this.props.children}}]),t}(a.Component),b=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email))))},f=function(e){return e.robots.map((function(t,n){return r.a.createElement(b,{key:n,id:e.robots[n].id,name:e.robots[n].name,email:e.robots[n].email})}))},p=function(e){return r.a.createElement("div",{className:"tc pd2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search-robots",onChange:e.searchChange}))},g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(p,{searchChange:this.onSearchChange}),r.a.createElement(m,null,r.a.createElement(d,null,r.a.createElement(f,{robots:t})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.fc81c389.chunk.js.map