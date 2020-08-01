(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[12],{201:function(e,t,r){},217:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(71),i=r(69),o=r(7),u=r.n(o),s=r(10),l=r(28),d=r(14);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=a.a.createElement("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"});const v=({svgRef:e,title:t,...r})=>a.a.createElement("svg",m({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42",ref:e},r),t?a.a.createElement("title",null,t):null,f),p=a.a.forwardRef((e,t)=>a.a.createElement(v,m({svgRef:t},e)));r.p;function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=a.a.createElement("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"});const j=({svgRef:e,title:t,...r})=>a.a.createElement("svg",b({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42",ref:e},r),t?a.a.createElement("title",null,t):null,g),O=a.a.forwardRef((e,t)=>a.a.createElement(j,b({svgRef:t},e)));r.p;var h=r(74),w=r(77);r(201);function x(e,t,r,n){if(null!==t)return t;const a=r.length;return n>0?(e+1)%a:(e-1+a)%a}t.default=({width:e,height:t,images:r,placeholder:o,...m})=>{const[f,v]=Object(n.useState)(0),[b,g]=Object(n.useState)(!1),[j,y]=Object(n.useState)(!0),[E,_]=Object(n.useState)(),[F,I]=Object(n.useState)(),R=Object(n.useRef)(),C=Object(n.useRef)(),M=Object(n.useRef)(),k=Object(n.useRef)(),A=Object(n.useRef)(),N=Object(n.useRef)(),S=Object(n.useRef)(),z=Object(n.useRef)(!1),L=Object(n.useRef)(),P=Object(n.useRef)(),D=Object(n.useRef)(),U=Object(s.g)(),q=Object(s.d)(R,!0),$=Object(n.useRef)(),B=Object(n.useRef)(),J=Object(n.useRef)(),T=Object(n.useRef)(),V=`Slide ${f+1} of ${r.length}. ${r[f].alt}`;Object(n.useEffect)(()=>{const r=[e/-2,e/2,t/2,t/-2,1,1e3];return S.current=new c.zb({canvas:R.current,antialias:!1}),N.current=new c.U(...r),A.current=new c.gb,S.current.setPixelRatio(h.d),S.current.setClearColor(1118481,1),S.current.setSize(e,t),S.current.domElement.style.width="100%",S.current.domElement.style.height="auto",A.current.background=new c.i(1118481),N.current.position.z=1,()=>{z.current=!1,Object(h.b)(A.current),Object(h.a)(S.current)}},[t,e]),Object(n.useEffect)(()=>{let n=!0;return q&&!b&&(async()=>{const a=new c.qb,i=S.current.capabilities.getMaxAnisotropy(),o=r.map(async e=>{const t=await Object(w.a)(e),r=await a.loadAsync(t);return await S.current.initTexture(r),r.encoding=c.Ab,r.minFilter=c.z,r.magFilter=c.z,r.anisotropy=i,r.generateMipmaps=!1,r}),u=await Promise.all(o);n&&(k.current=new c.hb({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:u[0]},nextImage:{type:"t",value:u[1]}},vertexShader:"\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  varying vec2 vUv;\n  uniform sampler2D currentImage;\n  uniform sampler2D nextImage;\n  uniform float dispFactor;\n  uniform float direction;\n\n  void main() {\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n",transparent:!1,opacity:1}),M.current=new c.W(e,t,1),C.current=new c.I(M.current,k.current),C.current.position.set(0,0,0),A.current.add(C.current),g(!0),_(u),requestAnimationFrame(()=>{S.current.render(A.current,N.current)}))})(),()=>{n=!1}},[t,r,q,b,e]);const K=Object(n.useCallback)(({index:e,direction:t=1})=>{if(!E)return;v(e);const r=k.current.uniforms;r.nextImage.value=E[e],r.direction.value=t;const n=()=>{r.currentImage.value=E[e],r.dispFactor.value=0,z.current=!1};U||1===r.dispFactor.value?(n(),requestAnimationFrame(()=>{S.current.render(A.current,N.current)})):(z.current=!0,J.current=Object(i.f)(r.dispFactor.value,e=>{r.dispFactor.value=e,1===e&&n()}),B.current=Object(i.e)({from:J.current.get(),to:1,velocity:J.current.getVelocity(),stiffness:100,damping:20}).start(J.current))},[U,E]),W=Object(n.useCallback)(({direction:e,index:t=null,...r})=>{if(!b)return;if(z.current)return cancelAnimationFrame(D.current),void(D.current=requestAnimationFrame(()=>W({direction:e,index:t,...r})));const n=x(f,t,E,e);K({index:n,direction:e,...r})},[K,f,b,E]),G=Object(n.useCallback)(e=>{if(e===f)return;W({direction:e>f?1:-1,index:e})},[f,W]);Object(n.useEffect)(()=>{const e=()=>{const e=R.current.getBoundingClientRect();I(e)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),Object(n.useEffect)(()=>{let e;const t=()=>{e=requestAnimationFrame(t),z.current&&S.current.render(A.current,N.current)};return e=requestAnimationFrame(t),()=>{cancelAnimationFrame(e),B.current&&B.current.stop()}},[]),Object(n.useEffect)(()=>{if(o){const e=()=>{y(!1)},t=$.current;return t.addEventListener("transitionend",e),()=>{t&&t.removeEventListener("transitionend",e)}}},[o]);const H=Object(n.useCallback)(e=>{if(z.current||!k.current||!E)return;const{x:t}=e;P.current=t;const n=Math.abs(t),a=F.width;L.current=t>0?-1:1;const c=1-(n-a)/a*-1,i=x(f,null,r,L.current),o=k.current.uniforms,u=Math.min(Math.max(c,0),1);o.currentImage.value=E[f],o.nextImage.value=E[i],o.direction.value=L.current,U||(o.dispFactor.value=u),requestAnimationFrame(()=>{S.current.render(A.current,N.current)})},[F,f,r,U,E]),Q=Object(n.useCallback)(()=>{if(!k.current)return;const e=k.current.uniforms,t=1e3*(1-e.dispFactor.value),r=Math.abs(P.current),n=.2*F.width;P.current=0,z.current||0!==r&&r&&(r>n?W({duration:t,direction:L.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,W({direction:-1*L.current,index:f})))},[F,f,W]);Object(n.useEffect)(()=>{let e;const t=Object(i.f)({x:0,y:0},e=>{H(e)}),r=Object(i.c)(T.current,"mousedown touchstart").start(r=>{r.preventDefault(),e=Object(i.d)({x:0,y:0}).start(t)}),n=Object(i.c)(document,"mouseup touchend").start(()=>{e&&(Q(),e.stop())});return()=>{r.stop(),n.stop(),e&&e.stop()}},[Q,H]);return a.a.createElement("div",Object.assign({className:"carousel",onKeyDown:e=>{const t={ArrowRight:()=>W({direction:1}),ArrowLeft:()=>W({direction:-1})}[e.key];t&&t()}},m),a.a.createElement("div",{className:"carousel__content"},a.a.createElement("div",{className:"carousel__image-wrapper",ref:T},a.a.createElement("div",{"aria-atomic":!0,className:"carousel__canvas-wrapper","aria-live":"polite","aria-label":V,role:"img"},a.a.createElement("canvas",{"aria-hidden":!0,className:"carousel__canvas",ref:R})),j&&o&&a.a.createElement("img",{"aria-hidden":!0,className:u()("carousel__placeholder",{"carousel__placeholder--loaded":!l.a&&b&&E}),src:o,ref:$,alt:"",role:"presentation"})),a.a.createElement("button",{className:"carousel__button carousel__button--prev","aria-label":"Previous slide",onClick:()=>W({direction:-1}),onMouseUp:d.a},a.a.createElement(p,null)),a.a.createElement("button",{className:"carousel__button carousel__button--next","aria-label":"Next slide",onClick:()=>W({direction:1}),onMouseUp:d.a},a.a.createElement(O,null))),a.a.createElement("div",{className:"carousel__nav"},r.map((e,t)=>a.a.createElement("button",{className:"carousel__nav-button",key:e.alt,onClick:()=>G(t),onMouseUp:d.a,"aria-label":"Jump to slide "+(t+1),"aria-pressed":t===f}))))}},74:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return o}));const n=e=>{e.traverse(e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)a(e.material);else for(const t of e.material)a(t)}),e.dispose()},a=e=>{e.dispose();for(const t of Object.keys(e)){const r=e[t];r&&"object"===typeof r&&"minFilter"in r&&r.dispose()}},c=e=>{e.dispose(),e.forceContextLoss(),e=null},i=e=>{for(const t of e)t.parent.remove(t)},o=2},77:function(e,t,r){"use strict";async function n({src:e,srcSet:t,sizes:r}){return new Promise((n,a)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const a=new Image;e&&(a.src=e),t&&(a.srcset=t),r&&(a.sizes=r);const c=()=>{a.removeEventListener("load",c);const e=a.currentSrc;n(e)};a.addEventListener("load",c)}catch(c){a(`Error loading ${t}: ${c}`)}})}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=12.106ebe88.chunk.js.map