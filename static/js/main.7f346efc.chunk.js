(this["webpackJsonpreact-spotify-player"]=this["webpackJsonpreact-spotify-player"]||[]).push([[0],{114:function(e,t){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),i=a.n(r),s=(a(90),a(46),a(190)),o=a(76),l=a(180),b=a(11),u=a(181),d=a(184),h=a(21),j=a(27),f=a.n(j),g=a(5),O=function(e){var t=Object(h.a)(),a=Object(n.useState)(""),c=Object(b.a)(a,2),r=(c[0],c[1],Object(n.useState)([])),i=Object(b.a)(r,2),s=i[0],o=i[1];return Object(g.jsx)(f.a,{value:s,onChange:function(e,t){o(e)},maxNumber:1,children:function(e){e.imageList,e.onImageUpload,e.onImageUpdate;return Object(g.jsx)(l.a,{theme:t,children:Object(g.jsx)(u.a,{container:!0,direction:"column",justify:"center",alignItems:"center",style:{width:"100vw",height:"100vh"},children:Object(g.jsx)(d.a,{variant:"contained",href:"https://accounts.spotify.com/authorize?client_id=2a7b9ca071514e8a9fb2b2dea9953c8c&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",style:{background:"linear-gradient(115deg, rgba(217,237,146,1) 0%, rgba(181,228,140,1) 10%, rgba(153,217,140,1) 20%, rgba(118,200,147,1) 30%, rgba(82,182,154,1) 40%, rgba(52,160,164,1) 50%, rgba(22,138,173,1) 60%, rgba(26,117,159,1) 70%, rgba(30,96,145,1) 80%, rgba(24,78,119,1) 90%)"},children:"LOGIN TO SPOTIFY"})})})}})},v=a(191),m=a(66),p=a.n(m),x=a(75),y=function(e){var t=e.accessToken,a=e.trackUri,c=e.playing,r=Object(n.useState)(!1),i=Object(b.a)(r,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){o(!0)}),[a]),t?Object(g.jsx)(x.a,{token:t,showSaveIcon:!0,uris:a||[],callback:function(e){e.isPlaying?(o(!0),c(!0)):(o(!1),c(!1))},play:s,styles:{height:"6vh",bgColor:"#ffffff00",color:"#ffffff",trackNameColor:"#ffffff"},initialVolume:10}):null},w=a(41),k=a.n(w),S=a(185),T=a(186),I=a(187),C=a(188),U=a(189),F=function(e){var t=e.track,a=e.chooseTrack,n=t;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(u.a,{item:!0,xs:6,style:{margin:"0.5rem"},children:Object(g.jsx)(S.a,{style:{width:"100vw",height:"100vh",maxWidth:"20vw",maxHeight:"20vh",background:"rgba( 255, 255, 255, 0.25 )",boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",backdropFilter:"blur( 4px )",borderRadius:"10px",border:"1px solid rgba( 255, 255, 255, 0.18 )"},children:Object(g.jsxs)(T.a,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",textAlign:"center"},onClick:function(){a(t)},children:[Object(g.jsx)(I.a,{component:"img",image:n.albumUrl,title:n.uri,style:{width:"100vw",maxWidth:"10vw",height:"100vh",maxHeight:"20vh"}}),Object(g.jsxs)(C.a,{style:{width:"100vw",maxWidth:"10vw"},children:[Object(g.jsx)(U.a,{variant:"body1",children:n.title}),Object(g.jsx)(U.a,{variant:"body2",children:n.artists})]})]})})})})},L=new p.a({clientId:"2a7b9ca071514e8a9fb2b2dea9953c8c"}),P=function(e){var t=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(b.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(0),d=Object(b.a)(u,2),h=d[0],j=d[1];return Object(n.useEffect)((function(){k.a.post("https://spotify-web-server.herokuapp.com/login",{code:e}).then((function(e){window.history.pushState({},"","/"),r(e.data.accessToken),l(e.data.refreshToken),j(e.data.expiresIn)})).catch((function(){}))}),[e]),Object(n.useEffect)((function(){if(o&&h){var e=setInterval((function(){k.a.post("https://spotify-web-server.herokuapp.com/refresh",{refreshToken:o}).then((function(e){r(e.data.accessToken),j(e.data.expiresIn)})).catch((function(){}))}),1e3*(h-60));clearInterval(e)}}),[o,h]),c}(e.code||""),a=Object(n.useState)(""),c=Object(b.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)([]),o=Object(b.a)(s,2),j=o[0],O=o[1],m=Object(n.useState)(),p=Object(b.a)(m,2),x=p[0],w=p[1],S=Object(n.useState)(!1),T=Object(b.a)(S,2),I=T[0],C=T[1],U=Object(n.useState)([]),P=Object(b.a)(U,2),E=P[0],N=P[1],A=Object(n.useState)([]),R=Object(b.a)(A,2),W=R[0],B=R[1],G=Object(h.a)();function H(e){w(e),i("")}function M(e,t,a,n){L.getPlaylistTracks(e,{offset:t}).then((function(c){var r;(null===(r=c.body)||void 0===r||r.items.map((function(e){n.push(e.track.uri)})),c.body.next)&&M(e,t+100,a,n)}))}!function(e){var a=Object(n.useState)(e),c=Object(b.a)(a,2),i=c[0],s=c[1];Object(n.useEffect)((function(){var a=setTimeout((function(){if(s(e),r){if(t&&r.includes("playlist")){for(var a="",n=34;"?"!==e.substring(n,n+1);)a+=e.substring(n,n+1),n+=1;L.getPlaylistTracks(a,{offset:0}).then((function(e){var t,n;console.log(e);var c=[];null===(t=e.body)||void 0===t||t.items.map((function(e){E.push(e.track.uri),null===c||void 0===c||c.push({artists:e.track.artists[0].name,title:e.track.name,uri:e.track.uri,albumUrl:e.track.album.images[2].url})})),(null===(n=e.body)||void 0===n?void 0:n.next)&&M(a,100,c,E);for(var r=E.length-1;r>0;r-=1){var i=Math.floor(Math.random()*r),s=E[r];E[r]=E[i],E[i]=s}N(E),O(c)}),(function(e){console.log(e)}))}}else O([])}),500);return function(){clearTimeout(a)}}),[e])}(r),Object(n.useEffect)((function(){t&&L.setAccessToken(t)}),[t]);return window.history.pushState({},"","/"),Object(g.jsx)(f.a,{value:W,onChange:function(e,t){B(e)},maxNumber:1,children:function(e){var a=e.imageList,n=e.onImageUpload,c=e.onImageUpdate;return Object(g.jsxs)(l.a,{theme:G,children:[Object(g.jsxs)(u.a,{container:!0,direction:"column",alignItems:"center",style:{width:"100vw",height:"90vh"},children:[I?Object(g.jsx)(g.Fragment,{}):Object(g.jsx)("form",{noValidate:!0,autoComplete:"off",style:{width:"100vw"},children:Object(g.jsx)(v.a,{id:"filled-basic",label:"Paste spotify playlist code ",variant:"filled",value:r,fullWidth:!0,style:{background:"linear-gradient(115deg, rgba(217,237,146,1) 0%, rgba(181,228,140,1) 10%, rgba(153,217,140,1) 20%, rgba(118,200,147,1) 30%, rgba(82,182,154,1) 40%, rgba(52,160,164,1) 50%, rgba(22,138,173,1) 60%, rgba(26,117,159,1) 70%, rgba(30,96,145,1) 80%, rgba(24,78,119,1) 90%)"},onChange:function(e){i(e.target.value)}})}),W.length>0&&I?a.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{style:{width:"100vw",height:"100vh",overflow:"none"},children:Object(g.jsx)("img",{src:e.dataURL,alt:"",style:{height:"100vh",width:"100%"}},e.dataURL)})})})):Object(g.jsx)(d.a,{variant:"contained",onClick:function(){W.length>0?c(0):n()},style:{marginTop:"1rem"},children:"CLICK TO CHANGE BG"}),I&&0===W.length&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{style:{height:"80vh",overflowY:"auto",width:"90vw",marginTop:"1rem"},children:Object(g.jsx)(u.a,{container:!0,direction:"row",alignItems:"center",justify:"center",style:{overflowX:"hidden"},children:void 0!==j&&j.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(F,{track:e,chooseTrack:H})},e.uri)}))})})})]}),Object(g.jsx)("div",{style:{display:"block",position:"absolute",bottom:"1vh",width:"100vw"},children:E.length>0?Object(g.jsx)(y,{accessToken:t,trackUri:E,playing:C}):Object(g.jsx)(y,{accessToken:t,trackUri:null===x||void 0===x?void 0:x.uri,playing:C})})]})}})},E=new URLSearchParams(window.location.search).get("code"),N=Object(o.a)({palette:{primary:{main:"#52b69a"},secondary:{main:"#d9ed92"},background:{default:"#222222"}}});N.spacing(4);var A=function(){return Object(g.jsx)(l.a,{theme:N,children:Object(g.jsxs)("div",{className:"App",style:{width:"100vw",height:"100vh"},children:[Object(g.jsx)(s.a,{}),E?Object(g.jsx)(P,{code:E}):Object(g.jsx)(O,{})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root")),R()},46:function(e,t,a){},90:function(e,t,a){}},[[151,1,2]]]);
//# sourceMappingURL=main.7f346efc.chunk.js.map