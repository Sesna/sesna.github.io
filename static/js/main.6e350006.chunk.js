(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/search.a87cbe0f.svg"},23:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},30:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),l=(a(29),a(3)),i=a(4),o=a(7),u=a(5),m=a(8),p=a(6),d=(a(30),a(22)),h=a.n(d);var f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={tip:!0},a.props=void 0,a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.handleTip=a.handleTip.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.handleTip(),this.props.onChange(e.target.value)}},{key:"handleClick",value:function(){this.setState({tip:!1})}},{key:"handleTip",value:function(){this.props.value?this.setState({tip:!1}):this.setState({tip:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"search-box"},r.a.createElement("div",{className:"background common-position"}),function(e){if(e)return r.a.createElement("div",{className:"tip common-position"},r.a.createElement("img",{alt:"search-icon",className:"search-icon",src:h.a}),r.a.createElement("span",null,"\u641c\u5bfb"))}(this.state.tip),r.a.createElement("input",{className:"search common-position",type:"text",maxLength:20,value:this.props.value,onChange:this.handleChange,onClick:this.handleClick,onBlur:this.handleTip}))}}]),t}(r.a.Component),v=a(2),b=a.n(v),y=a(9),g=a(10),O=a.n(g),E="/mockdata/appListData.json",j="/mockdata/recomendData.json";function k(){return new Promise(function(e,t){setTimeout(function(){e()},parseInt(1e3*Math.random()+"",10))})}function N(e,t){return w.apply(this,arguments)}function w(){return(w=Object(y.a)(b.a.mark(function e(t,a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:return e.next=5,O.a.get(E);case 5:return n=e.sent,e.abrupt("return",C(n.data,t,a));case 9:return e.prev=9,e.t0=e.catch(0),console.log("getTopN fail",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}var C=function(e,t,a){return console.log("parseTopNData",e.feed.entry.length),e.feed.entry.slice(t,t+a).map(function(e,a){return S(e,t+a+1)})},x=function(e){return console.log("parseTopGrossNData",e.feed.entry.length),e.feed.entry.map(function(e){return S(e)})},S=function(e,t){var a={icon:e["im:image"][1].label,name:e["im:name"].label,category:e.category.attributes.label,summary:e.summary.label,author:e["im:artist"].label};return t&&(a.rank=t,a.star=parseInt(5*Math.random()+1+"",10),a.comment=parseInt(1e3*Math.random()+100+"",10)),a};function W(e){return T.apply(this,arguments)}function T(){return(T=Object(y.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:return e.next=5,O.a.get(j);case 5:return a=e.sent,e.abrupt("return",x(a.data));case 9:return e.prev=9,e.t0=e.catch(0),console.log("getTopN fail",e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}var I=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading-bar"},r.a.createElement("div",{className:"load"},"loading"),r.a.createElement("div",{className:"bar-list"},r.a.createElement("div",{className:"bar bar1"}),r.a.createElement("div",{className:"bar bar2"}),r.a.createElement("div",{className:"bar bar3"}),r.a.createElement("div",{className:"bar bar4"}),r.a.createElement("div",{className:"bar bar5"}),r.a.createElement("div",{className:"bar bar6"})))}}]),t}(r.a.Component);var L=["name","summary","category","author"];function M(e,t){return t?(t=t.toUpperCase(),e.filter(function(e){return function(e,t){return L.some(function(a){return-1!==(e[a]+"").toUpperCase().indexOf(t)})}(e,t)})):e}var R=function(e){return{backgroundImage:"url("+e+")"}};function B(e){return e.map(function(e){return t=e,r.a.createElement("div",{className:"app",key:t.name},r.a.createElement("div",{className:"icon",style:R(t.icon)}),r.a.createElement("p",{className:"name"},t.name),r.a.createElement("p",{className:"category"},t.category));var t})}var P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).props=void 0,a.state={loading:!0,list:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(10);case 2:t=e.sent,this.setState({list:t,loading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"gross-list"},r.a.createElement("h6",{className:"title"},"\u63a8\u4ecb"),r.a.createElement("div",{className:"app-list"},this.state.loading?r.a.createElement(I,null):B(M(this.state.list,this.props.keyWord))))}}]),t}(r.a.Component),D=a(11),K=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading-circle"},r.a.createElement("div",{className:"rond"},r.a.createElement("div",{className:"test"})),r.a.createElement("div",{className:"load"},"loading"))}}]),t}(r.a.Component);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=r.a.createElement("defs",null,r.a.createElement("style",{type:"text/css"})),J=r.a.createElement("path",{d:"M762.88 1008c-16.576 0-33.152-4.096-47.744-12.032l-204.032-109.888-203.968 109.888c-32.96 17.6-74.432 15.232-104.832-5.632-31.36-21.632-47.424-59.264-41.216-96.128l39.936-238.656-172.352-172.16C2.176 457.152-6.784 418.88 5.312 383.68 17.344 348.8 47.744 323.712 84.736 318.208l234.432-34.816L421.12 72C437.504 37.952 472.832 16 511.104 16c38.4 0 73.664 21.952 89.984 56l101.952 211.392 234.432 34.816c36.928 5.504 67.456 30.592 79.488 65.344 12.032 35.264 3.136 73.536-23.296 99.968l-172.416 172.096 39.936 238.72c6.272 36.736-9.856 74.496-41.088 96C803.072 1001.856 783.36 1008 762.88 1008M511.104 821.888c4.992 0 9.856 1.28 14.336 3.648l218.176 117.504c13.12 6.976 30.016 6.016 42.24-2.368 12.096-8.384 18.176-22.272 15.808-36.352l-42.496-254.016c-1.6-9.6 1.408-19.52 8.384-26.368l183.424-183.04c10.048-10.048 13.44-24.448 8.96-37.568-4.608-13.376-16.64-23.168-31.296-25.408L678.4 340.672c-9.856-1.472-18.368-7.744-22.72-16.768l-108.8-225.856C540.48 84.864 526.464 76.224 511.104 76.224c-15.296 0-29.312 8.576-35.712 21.824l-108.8 225.856C362.304 332.928 353.792 339.2 343.936 340.672L93.568 377.792c-14.464 2.176-26.688 12.224-31.36 25.536-4.48 13.056-1.024 27.456 9.024 37.504l183.296 183.04c6.976 6.848 10.048 16.768 8.512 26.368l-42.496 254.016c-2.496 14.144 3.712 28.032 15.808 36.48 12.096 8.256 28.928 9.28 42.304 2.112l218.112-117.376C501.312 823.104 506.24 821.888 511.104 821.888","p-id":4835,fill:"#f4ea2a"}),A=function(e){var t=e.svgRef,a=U(e,["svgRef"]);return r.a.createElement("svg",q({t:1561564403518,className:"icon",viewBox:"0 0 1024 1024","p-id":4834,width:64,height:64,ref:t},a),H,J)},G=r.a.forwardRef(function(e,t){return r.a.createElement(A,q({svgRef:t},e))});a.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var F=r.a.createElement("defs",null,r.a.createElement("style",{type:"text/css"})),Q=r.a.createElement("path",{d:"M762.688 1007.936c-16.64 0-33.152-4.16-47.744-12.032l-203.968-109.824-203.904 109.824c-33.088 17.6-74.496 15.232-104.896-5.568-31.296-21.568-47.36-59.328-41.152-96.128l39.936-238.656L28.672 483.456C2.112 457.152-6.784 418.88 5.248 383.68 17.344 348.8 47.744 323.712 84.672 318.272l234.496-34.88 101.76-211.392c16.384-33.984 51.776-56 90.048-56 38.336 0 73.664 21.952 89.92 56l101.888 211.392 234.432 34.88c36.992 5.44 67.392 30.528 79.424 65.344 12.096 35.264 3.136 73.472-23.296 99.84l-172.416 172.096 40.064 238.656c6.208 36.864-9.984 74.624-41.216 96.064C802.88 1001.792 783.168 1007.936 762.688 1007.936","p-id":5100,fill:"#f4ea2a"}),V=function(e){var t=e.svgRef,a=z(e,["svgRef"]);return r.a.createElement("svg",$({t:1561597482864,className:"icon",viewBox:"0 0 1024 1024","p-id":5099,width:64,height:64,ref:t},a),F,Q)},X=r.a.forwardRef(function(e,t){return r.a.createElement(V,$({svgRef:t},e))});a.p;function Y(e,t){var a,n="app"+(t%2===1?" circle":"");return r.a.createElement("div",{className:n,key:e.name},r.a.createElement("div",{className:"left"},e.rank),r.a.createElement("div",{className:"middle"},r.a.createElement("div",{className:"icon",style:(a=e.icon,{backgroundImage:"url("+a+")"})})),r.a.createElement("div",{className:"right"},r.a.createElement("p",{className:"name"},e.name),r.a.createElement("p",{className:"category"},e.category),r.a.createElement("div",{className:"like"},function(e){for(var t=[],a=0;a<e;a++)t.push(r.a.createElement(X,{className:"rate-star",key:a}));for(var n=e;n<5;n++)t.push(r.a.createElement(G,{className:"rate-star",key:e+n}));return t}(e.star),r.a.createElement("span",{className:"comment"},"(",e.comment,")"))))}var Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).props=void 0,a.state={loading:!0,list:[],start:0,limit:10,lastScroll:0,appending:!1},a.onScroll=a.onScroll.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(y.a)(b.a.mark(function e(){var t,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#scrollable-content"),e.next=3,N(this.state.start,this.state.limit);case 3:a=e.sent,this.setState({list:a,loading:!1,start:this.state.start+this.state.limit}),t.addEventListener("scroll",this.onScroll);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){document.querySelector("#scrollable-content").removeEventListener("scroll",this.onScroll)}},{key:"arriveBottom",value:function(e){var t=e.scrollTop,a=e.clientHeight,n=e.scrollHeight,r=this.state.lastScroll;return this.setState({lastScroll:t}),!(r>t)&&n-a-t<200}},{key:"onScroll",value:function(){var e=this,t=document.querySelector("#scrollable-content");this.arriveBottom(t)&&!this.state.appending&&(this.state.start>90||this.setState({appending:!0},Object(y.a)(b.a.mark(function t(){var a;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.state.start,e.state.limit);case 2:a=t.sent,e.setState({list:[].concat(Object(D.a)(e.state.list),Object(D.a)(a)),appending:!1,start:e.state.start+e.state.limit});case 4:case"end":return t.stop()}},t)}))))}},{key:"render",value:function(){return r.a.createElement("div",{className:"top-list"},this.state.loading?r.a.createElement(K,null):M(this.state.list,this.props.keyWord).map(function(e,t){return Y(e,t)}),this.state.appending&&r.a.createElement("div",{className:"loader"}))}}]),t}(r.a.Component),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={keyWord:""},a.handleKeyWordChange=a.handleKeyWordChange.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleKeyWordChange",value:function(e){this.setState({keyWord:e})}},{key:"render",value:function(){return r.a.createElement("div",{id:"app"},r.a.createElement(f,{value:this.state.keyWord,onChange:this.handleKeyWordChange}),r.a.createElement("div",{className:"content",id:"scrollable-content"},r.a.createElement(P,{keyWord:this.state.keyWord}),r.a.createElement(Z,{keyWord:this.state.keyWord})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.6e350006.chunk.js.map