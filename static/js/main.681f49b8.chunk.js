(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){e.exports=n(180)},111:function(e,t,n){},113:function(e,t,n){},123:function(e,t,n){},125:function(e,t,n){},127:function(e,t,n){},129:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),o=n.n(r),c=(n(111),n(14)),u=n(15),i=n(18),s=n(16),m=n(19),p=(n(113),n(90)),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p.a,null))}}]),t}(a.Component),d=(n(178),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"player"},l.a.createElement(E,null)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=n(0),l=n.n(a);function r(e){var t=e.className,n=e.seconds;return l.a.createElement("time",{dateTime:"P".concat(Math.round(n),"S"),className:t},o(n))}function o(e){var t=new Date(1e3*e),n=t.getUTCHours(),a=t.getUTCMinutes(),l=c(t.getUTCSeconds());return n?"".concat(n,":").concat(c(a),":").concat(l):"".concat(a,":").concat(l)}function c(e){return("0"+e).slice(-2)}},90:function(e,t,n){"use strict";(function(e){var a=n(14),l=n(15),r=n(18),o=n(16),c=n(19),u=n(0),i=n.n(u),s=n(5),m=n(102),p=n(91),E=n.n(p),d=n(65),f=n.n(d),h=n(34),y=n(92),b=n(37),g=(n(123),n(125),n(127),n(129),n(93)),v=n(98),k=function(e){function t(){var e,n;Object(a.a)(this,t);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={url:null,pip:!1,playing:!0,volume:.8,muted:!1,played:0,loaded:0,duration:0,playbackRate:1,loop:!1},n.load=function(e){n.setState({url:e,played:0,loaded:0,pip:!1})},n.playPause=function(){n.setState({playing:!n.state.playing})},n.pip=function(){n.setState({pip:!n.state.pip})},n.stop=function(){n.setState({url:null,playing:!1})},n.toggleLoop=function(){n.setState({loop:!n.state.loop})},n.setVolume=function(e){n.setState({volume:parseFloat(e.target.value)})},n.toggleMuted=function(){n.setState({muted:!n.state.muted})},n.setPlaybackRate=function(e){n.setState({playbackRate:parseFloat(e.target.value)})},n.onPlay=function(){console.log("onPlay"),n.setState({playing:!0})},n.onEnablePIP=function(){console.log("onEnablePIP"),n.setState({pip:!0})},n.onDisablePIP=function(){console.log("onDisablePIP"),n.setState({pip:!1})},n.onPause=function(){console.log("onPause"),n.setState({playing:!1})},n.onSeekMouseDown=function(e){n.setState({seeking:!0})},n.onSeekChange=function(e){n.setState({played:parseFloat(e.target.value)})},n.onSeekMouseUp=function(e){n.setState({seeking:!1}),n.player.seekTo(parseFloat(e.target.value))},n.onProgress=function(e){n.state.seeking||n.setState(e)},n.onEnded=function(){console.log("onEnded"),n.setState({playing:n.state.loop})},n.onDuration=function(e){console.log("onDuration",e),n.setState({duration:e})},n.onClickFullscreen=function(){E.a.request(Object(s.findDOMNode)(n.player))},n.renderLoadButton=function(e,t){return i.a.createElement(h.a,{size:"small",type:"ghost",onClick:function(){return n.load(e)}},t)},n.ref=function(e){n.player=e},n.playLocal=function(e){n.urlInput.value=e,n.setState({url:e})},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.url,a=t.playing,l=t.volume,r=t.muted,o=t.loop,c=t.played,u=t.loaded,s=t.duration,m=t.playbackRate,p=t.pip,E=Object(b.b)(s*c);return i.a.createElement("div",{className:"app1"},i.a.createElement("section",{className:"section"},i.a.createElement("h1",null,"\u7ffb\u8bd1\u5c0f\u5de5\u51770.1"," ","by \u77f3\u5b87"),i.a.createElement("div",{className:"player-wrapper"},i.a.createElement(f.a,{ref:this.ref,className:"react-player",width:"100%",height:"100%",url:n,pip:p,playing:a,loop:o,playbackRate:m,volume:l,muted:r,onReady:function(){return console.log("onReady")},onStart:function(){return console.log("onStart")},onPlay:this.onPlay,onEnablePIP:this.onEnablePIP,onDisablePIP:this.onDisablePIP,onPause:this.onPause,onBuffer:function(){return console.log("onBuffer")},onSeek:function(e){return console.log("onSeek",e)},onEnded:this.onEnded,onError:function(e){return console.log("onError",e)},onProgress:this.onProgress,onDuration:this.onDuration})),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Controls"),i.a.createElement("td",null,i.a.createElement("button",{onClick:this.stop},"Stop"),i.a.createElement("button",{onClick:this.playPause},a?"Pause":"Play"),i.a.createElement("button",{onClick:this.onClickFullscreen},"Fullscreen"),f.a.canEnablePIP(n)&&i.a.createElement("button",{onClick:this.pip},p?"Disable PiP":"Enable PiP"))),i.a.createElement("tr",null,i.a.createElement("th",null,"Speed"),i.a.createElement("td",null,i.a.createElement("button",{onClick:this.setPlaybackRate,value:1},"1x"),i.a.createElement("button",{onClick:this.setPlaybackRate,value:1.5},"1.5x"),i.a.createElement("button",{onClick:this.setPlaybackRate,value:2},"2x"))),i.a.createElement("tr",null,i.a.createElement("th",null,"Seek"),i.a.createElement("td",null,i.a.createElement("input",{type:"range",min:0,max:1,step:"any",value:c,onMouseDown:this.onSeekMouseDown,onChange:this.onSeekChange,onMouseUp:this.onSeekMouseUp}))),i.a.createElement("tr",null,i.a.createElement("th",null,"Volume"),i.a.createElement("td",null,i.a.createElement("input",{type:"range",min:0,max:1,step:"any",value:l,onChange:this.setVolume}))),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("label",{htmlFor:"muted"},"Muted")),i.a.createElement("td",null,i.a.createElement("input",{id:"muted",type:"checkbox",checked:r,onChange:this.toggleMuted}))),i.a.createElement("tr",null,i.a.createElement("th",null,i.a.createElement("label",{htmlFor:"loop"},"Loop")),i.a.createElement("td",null,i.a.createElement("input",{id:"loop",type:"checkbox",checked:o,onChange:this.toggleLoop}))),i.a.createElement("tr",null,i.a.createElement("th",null,"Played"),i.a.createElement("td",null,i.a.createElement("progress",{max:1,value:c}))),i.a.createElement("tr",null,i.a.createElement("th",null,"Loaded"),i.a.createElement("td",null,i.a.createElement("progress",{max:1,value:u})))))),i.a.createElement("section",{className:"section"},i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Custom URL"),i.a.createElement("td",null,i.a.createElement("input",{ref:function(t){e.urlInput=t},type:"text",placeholder:"Enter URL"}),i.a.createElement("button",{onClick:function(){return e.setState({url:e.urlInput.value})}},"Load"))),i.a.createElement("tr",null,i.a.createElement("th",null,"\u672c\u5730\u6587\u4ef6"),i.a.createElement("td",null,i.a.createElement(g.a,{play:this.playLocal}))),i.a.createElement(v.a,{elapsed:E}))),i.a.createElement("h2",null,"State"),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"url"),i.a.createElement("td",{className:n?"":"faded"},(n instanceof Array?"Multiple":n)||"null")),i.a.createElement("tr",null,i.a.createElement("th",null,"playing"),i.a.createElement("td",null,a?"true":"false")),i.a.createElement("tr",null,i.a.createElement("th",null,"volume"),i.a.createElement("td",null,l.toFixed(3))),i.a.createElement("tr",null,i.a.createElement("th",null,"played"),i.a.createElement("td",null,c.toFixed(3))),i.a.createElement("tr",null,i.a.createElement("th",null,"loaded"),i.a.createElement("td",null,u.toFixed(3))),i.a.createElement("tr",null,i.a.createElement("th",null,"duration"),i.a.createElement("td",null,i.a.createElement(b.a,{seconds:s}))),i.a.createElement("tr",null,i.a.createElement("th",null,"elapsed"),i.a.createElement("td",null,i.a.createElement(b.a,{seconds:s*c}))),i.a.createElement("tr",null,i.a.createElement("th",null,"remaining"),i.a.createElement("td",null,i.a.createElement(b.a,{seconds:s*(1-c)})))))),i.a.createElement("footer",{className:"footer"},"Version ",i.a.createElement("strong",null,y.a)," \xb7 ",i.a.createElement("a",{href:"https://github.com/CookPete/react-player"},"GitHub")," \xb7 ",i.a.createElement("a",{href:"https://www.npmjs.com/package/react-player"},"npm")))}}]),t}(u.Component);t.a=Object(m.hot)(e)(k)}).call(this,n(115)(e))},93:function(e,t,n){"use strict";var a=n(14),l=n(15),r=n(18),o=n(16),c=n(19),u=n(0),i=n.n(u),s=n(5),m=n.n(s),p=n(182),E=function(e){function t(){var e,n;Object(a.a)(this,t);for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).inputRef=null,n.ref=function(e){n.inputRef=e,m.a.findDOMNode(n.inputRef).addEventListener("change",n.play,!1)},n.play=function(e){var t=e.target.files[0];if(t){var a=URL.createObjectURL(t);n.props.play(a)}else p.a.warn("\u6ca1\u6709\u4e0a\u4f20\u6587\u4ef6")},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("input",{ref:this.ref,type:"file",accept:"video/*"}))}}]),t}(u.Component);t.a=E},98:function(e,t,n){"use strict";var a=n(104),l=n(14),r=n(15),o=n(18),c=n(16),u=n(19),i=n(0),s=n.n(i),m=n(181),p=n(34),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).download=function(){var e=n.formatTrans(0),t=new Blob([e],{type:"text/plain"});n.saveFile(t,"\u7ffb\u8bd1.txt")},n.formatTrans=function(e){var t=JSON.parse(JSON.stringify(n.state.texts));return e&&t.reverse(),t.map(function(e){return"".concat(e.time,"  ").concat(e.text)}).join("\n")},n.saveFile=function(e,t){(function(){var e=document.createElement("a");return document.body.appendChild(e),e.style="display: none",function(t,n){var a=window.URL.createObjectURL(t);e.href=a,e.download=n,e.click(),window.URL.revokeObjectURL(a)}})()(e,t)},n.onPressEnter=function(e){var t=n.props.elapsed,l=e.target.value.split("\n"),r={time:t,text:l[l.length-1]};n.setState(function(e){return Object(a.a)({},e,{texts:e.texts.concat(r)})})},n.state={texts:[]},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement("tr",null,s.a.createElement("th",null,"\u7ffb\u8bd1"),s.a.createElement("td",null,s.a.createElement("div",{className:"input"},s.a.createElement(m.a.TextArea,{onPressEnter:this.onPressEnter})))),s.a.createElement("tr",null,s.a.createElement("th",null,"\u9884\u89c8"),s.a.createElement("td",null,s.a.createElement("div",{className:"output"},s.a.createElement("pre",null,this.formatTrans(1))))),s.a.createElement("tr",null,s.a.createElement("th",null,"\u4e0b\u8f7d"),s.a.createElement("td",null,s.a.createElement(p.a,{type:"ghost",size:"small",onClick:this.download},"\u70b9\u51fb\u4e0b\u8f7d\u7ffb\u8bd1\u6587\u6863"))))}}]),t}(i.Component);t.a=E}},[[106,2,1]]]);
//# sourceMappingURL=main.681f49b8.chunk.js.map