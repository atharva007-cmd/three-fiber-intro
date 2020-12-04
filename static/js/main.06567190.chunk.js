(this["webpackJsonpthree-fiber-intro"]=this["webpackJsonpthree-fiber-intro"]||[]).push([[0],{67:function(e,t,s){},68:function(e,t,s){},82:function(e,t,s){"use strict";s.r(t);var i=s(8),a=s(1),c=s.n(a),n=s(28),r=s.n(n),o=(s(67),s(10)),j=s(9),b=s(44),l=function(){return Object(i.jsxs)("header",{children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)("span",{children:"REACT THREE FIBER"})}),Object(i.jsxs)("div",{className:"details",children:[Object(i.jsx)("h4",{className:"heading",children:"Canvas"}),Object(i.jsxs)("span",{className:"content",children:["The canvas object is your portal into three.js.",Object(i.jsx)("br",{}),"It renders three.js elements and not DOM elements.",Object(i.jsx)("br",{}),"Defaults setup:",Object(i.jsx)("br",{}),"- Translucent WebGL-renderer"," ",Object(i.jsx)("br",{}),"- Perspective camera ",Object(i.jsx)("br",{}),"- Orthographic camera"," ",Object(i.jsx)("br",{}),"- A scene ",Object(i.jsx)("br",{}),"- Wrapping container with resizable observer ",Object(i.jsx)("br",{})]}),Object(i.jsx)("h4",{className:"heading",children:"Ambient Light"}),Object(i.jsxs)("span",{className:"content",children:["This light globally illuminates all objects in the scene equally.",Object(i.jsx)("br",{}),"This light cannot be used to cast shadows as it does not have any direction.",Object(i.jsx)("br",{})]}),Object(i.jsx)("h4",{className:"heading",children:"Directional Light"}),Object(i.jsxs)("span",{className:"content",children:["A light that gets emmited in a specific direction.",Object(i.jsx)("br",{}),"This light acts as if it's infinitely far away and rays produced are parallel.",Object(i.jsx)("br",{}),"A common usecase is daylight simulation.",Object(i.jsx)("br",{})]}),Object(i.jsx)("h4",{className:"heading",children:"Point Light"}),Object(i.jsxs)("span",{className:"content",children:["A light that gets emmited from a single point in all direction.",Object(i.jsx)("br",{}),"A common usecase is simulation of light emmited from bare lightbulb.",Object(i.jsx)("br",{})]})]})]})},h=(s(68),s(49));Object(b.c)({});var d=function(e){var t=e.position,s=e.color,c=e.speed,n=e.args,r=Object(a.useRef)(null);Object(j.f)((function(){return r.current.rotation.x=r.current.rotation.y+=.01}));var l=Object(a.useState)(!1),d=Object(o.a)(l,2),O=d[0],m=d[1],p=Object(h.b)({scale:O?[1.4,1.4,1.4]:[1,1,1]});return Object(i.jsxs)(h.a.mesh,{position:t,ref:r,onClick:function(){return m(!O)},scale:p.scale,castShadow:!0,children:[Object(i.jsx)("boxBufferGeometry",{attach:"geometry",args:n}),Object(i.jsx)(b.a,{color:s,speed:c,attach:"material",factor:.5})]})},O=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsxs)(j.a,{colorManagement:!0,shadowMap:!0,camera:{position:[-5,2,10],fov:70},children:[Object(i.jsx)("ambientLight",{intensity:.3}),Object(i.jsx)("directionalLight",{castShadow:!0,position:[0,10,0],intensity:.25,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(i.jsx)("pointLight",{position:[-10,0,-20],intensity:.5}),Object(i.jsx)("pointLight",{position:[0,-10,0],intensity:.5}),Object(i.jsxs)("group",{children:[Object(i.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[Object(i.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(i.jsx)("shadowMaterial",{attach:"material",opacity:.3})]}),Object(i.jsx)(d,{position:[0,1,0],color:"lightblue",args:[3,2,1],speed:2}),Object(i.jsx)(d,{position:[-2,1,-5],color:"pink",args:[1,1,1],speed:6}),Object(i.jsx)(d,{position:[5,1,-2],color:"pink",args:[1,1,1],speed:6}),Object(i.jsx)(d,{position:[2,1,5],color:"pink",args:[1,1,1],speed:6}),Object(i.jsx)(d,{position:[-5,1,2],color:"pink",args:[1,1,1],speed:6})]}),Object(i.jsx)(b.b,{})]})]})},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,83)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),c(e),n(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),m()}},[[82,1,2]]]);
//# sourceMappingURL=main.06567190.chunk.js.map