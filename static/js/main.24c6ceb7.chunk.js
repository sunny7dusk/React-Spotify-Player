(this["webpackJsonpreact-spotify-player"]=this["webpackJsonpreact-spotify-player"]||[]).push([[0],{114:function(e,t){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),i=a.n(r),o=(a(90),a(46),a(190)),s=a(76),l=a(180),u=a(11),b=a(181),d=a(184),h=a(21),f=a(27),j=a.n(f),g=a(5),O=function(e){var t=Object(h.a)(),a=Object(n.useState)(""),c=Object(u.a)(a,2),r=(c[0],c[1],Object(n.useState)([])),i=Object(u.a)(r,2),o=i[0],s=i[1];return Object(g.jsx)(j.a,{value:o,onChange:function(e,t){s(e)},maxNumber:1,children:function(e){e.imageList,e.onImageUpload,e.onImageUpdate;return Object(g.jsx)(l.a,{theme:t,children:Object(g.jsx)(b.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{width:"100vw",height:"100vh"},children:Object(g.jsx)(d.a,{variant:"contained",href:"https://accounts.spotify.com/authorize?client_id=2a7b9ca071514e8a9fb2b2dea9953c8c&response_type=code&redirect_uri=https://sunny7dusk.github.io/React-Spotify-Player/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",style:{background:"linear-gradient(115deg, rgba(217,237,146,1) 0%, rgba(181,228,140,1) 10%, rgba(153,217,140,1) 20%, rgba(118,200,147,1) 30%, rgba(82,182,154,1) 40%, rgba(52,160,164,1) 50%, rgba(22,138,173,1) 60%, rgba(26,117,159,1) 70%, rgba(30,96,145,1) 80%, rgba(24,78,119,1) 90%)"},children:"LOGIN TO SPOTIFY"})})})}})},v=a(191),m=a(66),p=a.n(m),y=a(75),x=function(e){var t=e.accessToken,a=e.trackUri,c=e.playing,r=Object(n.useState)(!1),i=Object(u.a)(r,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){s(!0)}),[a]),t?Object(g.jsx)(y.a,{token:t,showSaveIcon:!0,uris:a||[],callback:function(e){e.isPlaying?(s(!0),c(!0)):(s(!1),c(!1))},play:o,styles:{height:"6vh",bgColor:"#ffffff00",color:"#ffffff",trackNameColor:"#ffffff"},initialVolume:10}):null},w=a(41),k=a.n(w),S=a(185),T=a(186),I=a(187),C=a(188),U=a(189),F=function(e){var t=e.track,a=e.chooseTrack,n=t;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(b.a,{item:!0,xs:6,style:{margin:"0.5rem"},children:Object(g.jsx)(S.a,{style:{width:"100vw",height:"100vh",maxWidth:"20vw",maxHeight:"20vh",background:"rgba( 255, 255, 255, 0.25 )",boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",backdropFilter:"blur( 4px )",borderRadius:"10px",border:"1px solid rgba( 255, 255, 255, 0.18 )"},children:Object(g.jsxs)(T.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",textAlign:"center"},onClick:function(){a(t)},children:[Object(g.jsx)(I.a,{component:"img",image:n.albumUrl,title:n.uri,style:{width:"100vw",maxWidth:"10vw",height:"100vh",maxHeight:"20vh"}}),Object(g.jsxs)(C.a,{style:{width:"100vw",maxWidth:"10vw"},children:[Object(g.jsx)(U.a,{variant:"body1",children:n.title}),Object(g.jsx)(U.a,{variant:"body2",children:n.artists})]})]})})})})},E=new p.a({clientId:"2a7b9ca071514e8a9fb2b2dea9953c8c"}),L=function(e){var t=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),s=o[0],l=o[1],b=Object(n.useState)(0),d=Object(u.a)(b,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){k.a.post("https://spotify-web-server.herokuapp.com/login",{code:e}).then((function(e){window.history.pushState({},"","/"),r(e.data.accessToken),l(e.data.refreshToken),f(e.data.expiresIn)})).catch((function(){}))}),[e]),Object(n.useEffect)((function(){if(s&&h){var e=setInterval((function(){k.a.post("https://spotify-web-server.herokuapp.com/refresh",{refreshToken:s}).then((function(e){r(e.data.accessToken),f(e.data.expiresIn)})).catch((function(){}))}),1e3*(h-60));clearInterval(e)}}),[s,h]),c}(e.code||""),a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),f=s[0],O=s[1],m=Object(n.useState)(),p=Object(u.a)(m,2),y=p[0],w=p[1],S=Object(n.useState)(!1),T=Object(u.a)(S,2),I=T[0],C=T[1],U=Object(n.useState)([]),L=Object(u.a)(U,2),P=L[0],N=L[1],R=Object(n.useState)([]),A=Object(u.a)(R,2),W=A[0],B=A[1],G=Object(h.a)();function H(e){w(e),i("")}!function(e){var a=Object(n.useState)(e),c=Object(u.a)(a,2),i=c[0],o=c[1];Object(n.useEffect)((function(){var a=setTimeout((function(){if(o(e),r){if(t){for(var a="",n=34;"?"!==e.substring(n,n+1);)a+=e.substring(n,n+1),n+=1;E.getPlaylistTracks(a).then((function(e){var t,n,c;if(console.log(e),null===(t=e.body)||void 0===t||t.items.map((function(e){return P.push(e.track.uri)})),null===(n=e.body)||void 0===n?void 0:n.next)for(var r=!0,i=100;r;)E.getPlaylistTracks(a,{offset:i}).then((function(e){var t;null===(t=e.body)||void 0===t||t.items.map((function(e){return P.push(e.track.uri)}))})),i+=100,e.body.next||(r=!1);for(var o=P.length-1;o>0;o-=1){var s=Math.floor(Math.random()*o),l=P[o];P[o]=P[s],P[s]=l}N(P),O(null===(c=e.body)||void 0===c?void 0:c.items.map((function(e){return{artists:e.track.artists[0].name,title:e.track.name,uri:e.track.uri,albumUrl:e.track.album.images[2].url}})))}),(function(e){console.log(e)}))}}else O([])}),500);return function(){clearTimeout(a)}}),[e])}(r),Object(n.useEffect)((function(){t&&E.setAccessToken(t)}),[t]),Object(n.useEffect)((function(){}),[P]),Object(n.useEffect)((function(){console.log(W)}),[W]);return window.history.pushState({},"","/"),Object(g.jsx)(j.a,{value:W,onChange:function(e,t){B(e)},maxNumber:1,children:function(e){var a=e.imageList,n=e.onImageUpload,c=e.onImageUpdate;return Object(g.jsxs)(l.a,{theme:G,children:[Object(g.jsxs)(b.a,{container:!0,direction:"column",alignItems:"center",style:{width:"100vw",height:"90vh"},children:[I?Object(g.jsx)(g.Fragment,{}):Object(g.jsx)("form",{noValidate:!0,autoComplete:"off",style:{width:"100vw"},children:Object(g.jsx)(v.a,{id:"filled-basic",label:"Paste spotify playlist code ",variant:"filled",value:r,fullWidth:!0,style:{background:"linear-gradient(115deg, rgba(217,237,146,1) 0%, rgba(181,228,140,1) 10%, rgba(153,217,140,1) 20%, rgba(118,200,147,1) 30%, rgba(82,182,154,1) 40%, rgba(52,160,164,1) 50%, rgba(22,138,173,1) 60%, rgba(26,117,159,1) 70%, rgba(30,96,145,1) 80%, rgba(24,78,119,1) 90%)"},onChange:function(e){i(e.target.value)}})}),W.length>0&&I?a.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{style:{width:"100vw",height:"100vh",overflow:"none"},children:Object(g.jsx)("img",{src:e.dataURL,alt:"",style:{height:"100vh",width:"100%"}},e.dataURL)})})})):Object(g.jsx)(d.a,{variant:"contained",onClick:function(){W.length>0?c(0):n()},style:{marginTop:"1rem"},children:"CLICK TO CHANGE BG"}),I&&0===W.length&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{style:{height:"80vh",overflowY:"auto",width:"90vw",marginTop:"1rem"},children:Object(g.jsx)(b.a,{container:!0,direction:"row",alignItems:"center",justify:"center",style:{overflowX:"hidden"},children:void 0!==f&&f.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(F,{track:e,chooseTrack:H})},e.uri)}))})})})]}),Object(g.jsx)("div",{style:{display:"block",position:"absolute",bottom:"1vh",width:"100vw"},children:P.length>0?Object(g.jsx)(x,{accessToken:t,trackUri:P,playing:C}):Object(g.jsx)(x,{accessToken:t,trackUri:null===y||void 0===y?void 0:y.uri,playing:C})})]})}})},P=new URLSearchParams(window.location.search).get("code"),N=Object(s.a)({palette:{primary:{main:"#52b69a"},secondary:{main:"#d9ed92"},background:{default:"#222222"}}});N.spacing(4);var R=function(){return Object(g.jsx)(l.a,{theme:N,children:Object(g.jsxs)("div",{className:"App",style:{width:"100vw",height:"100vh"},children:[Object(g.jsx)(o.a,{}),P?Object(g.jsx)(L,{code:P}):Object(g.jsx)(O,{})]})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),A()},46:function(e,t,a){},90:function(e,t,a){}},[[151,1,2]]]);
//# sourceMappingURL=main.24c6ceb7.chunk.js.map