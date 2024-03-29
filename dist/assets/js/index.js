(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))v(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&v(p)}).observe(document,{childList:!0,subtree:!0});function a(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function v(c){if(c.ep)return;c.ep=!0;const s=a(c);fetch(c.href,s)}})();function L(){const u=document.querySelector(".header-nav"),n=document.querySelector(".header-nav-toggle");n&&n.addEventListener("click",()=>{u.classList.toggle("is-active"),n.classList.toggle("is-active"),document.body.classList.toggle("no-scroll")})}function S(){const u=document.querySelectorAll("[data-motion]");if(u)for(let n of u)n.getBoundingClientRect().top<window.innerHeight-200&&n.classList.add("has-motion")}L();window.addEventListener("scroll",S);window.addEventListener("load",S);function _(u){return[(u>>16&255)/255,(u>>8&255)/255,(255&u)/255]}["SCREEN","LINEAR_LIGHT"].reduce((u,n,a)=>Object.assign(u,{[n]:a}),{});class D{constructor(n,a,v,c=!1){const s=this,p=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;s.canvas=n,s.gl=s.canvas.getContext("webgl",{antialias:!0}),s.meshes=[];const r=s.gl;a&&v&&this.setSize(a,v),s.lastDebugMsg,s.debug=c&&p?function(o){const l=new Date;l-s.lastDebugMsg>1e3&&console.log("---"),console.log(l.toLocaleTimeString()+Array(Math.max(0,32-o.length)).join(" ")+o+": ",...Array.from(arguments).slice(1)),s.lastDebugMsg=l}:()=>{},Object.defineProperties(s,{Material:{enumerable:!1,value:class{constructor(o,l,e={}){const t=this;function d(y,m){const g=r.createShader(y);return r.shaderSource(g,m),r.compileShader(g),r.getShaderParameter(g,r.COMPILE_STATUS)||console.error(r.getShaderInfoLog(g)),s.debug("Material.compileShaderSource",{source:m}),g}function h(y,m){return Object.entries(y).map(([g,f])=>f.getDeclaration(g,m)).join(`
`)}t.uniforms=e,t.uniformInstances=[];const b=`
              precision highp float;
            `;t.vertexSource=`
              ${b}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${h(s.commonUniforms,"vertex")}
              ${h(e,"vertex")}
              ${o}
            `,t.Source=`
              ${b}
              ${h(s.commonUniforms,"fragment")}
              ${h(e,"fragment")}
              ${l}
            `,t.vertexShader=d(r.VERTEX_SHADER,t.vertexSource),t.fragmentShader=d(r.FRAGMENT_SHADER,t.Source),t.program=r.createProgram(),r.attachShader(t.program,t.vertexShader),r.attachShader(t.program,t.fragmentShader),r.linkProgram(t.program),r.getProgramParameter(t.program,r.LINK_STATUS)||console.error(r.getProgramInfoLog(t.program)),r.useProgram(t.program),t.attachUniforms(void 0,s.commonUniforms),t.attachUniforms(void 0,t.uniforms)}attachUniforms(o,l){const e=this;o===void 0?Object.entries(l).forEach(([t,d])=>{e.attachUniforms(t,d)}):l.type=="array"?l.value.forEach((t,d)=>e.attachUniforms(`${o}[${d}]`,t)):l.type=="struct"?Object.entries(l.value).forEach(([t,d])=>e.attachUniforms(`${o}.${t}`,d)):(s.debug("Material.attachUniforms",{name:o,uniform:l}),e.uniformInstances.push({uniform:l,location:r.getUniformLocation(e.program,o)}))}}},Uniform:{enumerable:!1,value:class{constructor(o){this.type="float",Object.assign(this,o),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(o){this.value!==void 0&&r[`uniform${this.typeFn}`](o,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(o,l,e){const t=this;if(t.excludeFrom!==l){if(t.type==="array")return t.value[0].getDeclaration(o,l,t.value.length)+`
const int ${o}_length = ${t.value.length};`;if(t.type==="struct"){let d=o.replace("u_","");return d=d.charAt(0).toUpperCase()+d.slice(1),`uniform struct ${d} 
                                {
`+Object.entries(t.value).map(([h,b])=>b.getDeclaration(h,l).replace(/^uniform/,"")).join("")+`
} ${o}${e>0?`[${e}]`:""};`}return`uniform ${t.type} ${o}${e>0?`[${e}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(o,l,e,t,d){r.createBuffer(),this.attributes={position:new s.Attribute({target:r.ARRAY_BUFFER,size:3}),uv:new s.Attribute({target:r.ARRAY_BUFFER,size:2}),uvNorm:new s.Attribute({target:r.ARRAY_BUFFER,size:2}),index:new s.Attribute({target:r.ELEMENT_ARRAY_BUFFER,size:3,type:r.UNSIGNED_SHORT})},this.setTopology(e,t),this.setSize(o,l,d)}setTopology(o=1,l=1){const e=this;e.xSegCount=o,e.ySegCount=l,e.vertexCount=(e.xSegCount+1)*(e.ySegCount+1),e.quadCount=e.xSegCount*e.ySegCount*2,e.attributes.uv.values=new Float32Array(2*e.vertexCount),e.attributes.uvNorm.values=new Float32Array(2*e.vertexCount),e.attributes.index.values=new Uint16Array(3*e.quadCount);for(let t=0;t<=e.ySegCount;t++)for(let d=0;d<=e.xSegCount;d++){const h=t*(e.xSegCount+1)+d;if(e.attributes.uv.values[2*h]=d/e.xSegCount,e.attributes.uv.values[2*h+1]=1-t/e.ySegCount,e.attributes.uvNorm.values[2*h]=d/e.xSegCount*2-1,e.attributes.uvNorm.values[2*h+1]=1-t/e.ySegCount*2,d<e.xSegCount&&t<e.ySegCount){const b=t*e.xSegCount+d;e.attributes.index.values[6*b]=h,e.attributes.index.values[6*b+1]=h+1+e.xSegCount,e.attributes.index.values[6*b+2]=h+1,e.attributes.index.values[6*b+3]=h+1,e.attributes.index.values[6*b+4]=h+1+e.xSegCount,e.attributes.index.values[6*b+5]=h+2+e.xSegCount}}e.attributes.uv.update(),e.attributes.uvNorm.update(),e.attributes.index.update(),s.debug("Geometry.setTopology",{uv:e.attributes.uv,uvNorm:e.attributes.uvNorm,index:e.attributes.index})}setSize(o=1,l=1,e="xz"){const t=this;t.width=o,t.height=l,t.orientation=e,t.attributes.position.values&&t.attributes.position.values.length===3*t.vertexCount||(t.attributes.position.values=new Float32Array(3*t.vertexCount));const d=o/-2,h=l/-2,b=o/t.xSegCount,y=l/t.ySegCount;for(let m=0;m<=t.ySegCount;m++){const g=h+m*y;for(let f=0;f<=t.xSegCount;f++){const C=d+f*b,w=m*(t.xSegCount+1)+f;t.attributes.position.values[3*w+"xyz".indexOf(e[0])]=C,t.attributes.position.values[3*w+"xyz".indexOf(e[1])]=-g}}t.attributes.position.update(),s.debug("Geometry.setSize",{position:t.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(o,l){const e=this;e.geometry=o,e.material=l,e.wireframe=!1,e.attributeInstances=[],Object.entries(e.geometry.attributes).forEach(([t,d])=>{e.attributeInstances.push({attribute:d,location:d.attach(t,e.material.program)})}),s.meshes.push(e),s.debug("Mesh.constructor",{mesh:e})}draw(){r.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:o,location:l})=>o.update(l)),this.attributeInstances.forEach(({attribute:o,location:l})=>o.use(l)),r.drawElements(this.wireframe?r.LINES:r.TRIANGLES,this.geometry.attributes.index.values.length,r.UNSIGNED_SHORT,0)}remove(){s.meshes=s.meshes.filter(o=>o!=this)}}},Attribute:{enumerable:!1,value:class{constructor(o){this.type=r.FLOAT,this.normalized=!1,this.buffer=r.createBuffer(),Object.assign(this,o),this.update()}update(){this.values!==void 0&&(r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,this.values,r.STATIC_DRAW))}attach(o,l){const e=r.getAttribLocation(l,o);return this.target===r.ARRAY_BUFFER&&(r.enableVertexAttribArray(e),r.vertexAttribPointer(e,this.size,this.type,this.normalized,0,0)),e}use(o){r.bindBuffer(this.target,this.buffer),this.target===r.ARRAY_BUFFER&&(r.enableVertexAttribArray(o),r.vertexAttribPointer(o,this.size,this.type,this.normalized,0,0))}}}});const x=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];s.commonUniforms={projectionMatrix:new s.Uniform({type:"mat4",value:x}),modelViewMatrix:new s.Uniform({type:"mat4",value:x}),resolution:new s.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new s.Uniform({type:"float",value:1})}}setSize(n=640,a=480){this.width=n,this.height=a,this.canvas.width=n,this.canvas.height=a,this.gl.viewport(0,0,n,a),this.commonUniforms.resolution.value=[n,a],this.commonUniforms.aspectRatio.value=n/a,this.debug("MiniGL.setSize",{width:n,height:a})}setOrthographicCamera(n=0,a=0,v=0,c=-2e3,s=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(c-s),0,n,a,v,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(n=>n.draw())}}function i(u,n,a){return n in u?Object.defineProperty(u,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):u[n]=a,u}class A{constructor(...n){i(this,"el",void 0),i(this,"cssVarRetries",0),i(this,"maxCssVarRetries",200),i(this,"angle",0),i(this,"isLoadedClass",!1),i(this,"isScrolling",!1),i(this,"scrollingTimeout",void 0),i(this,"scrollingRefreshDelay",200),i(this,"isIntersecting",!1),i(this,"shaderFiles",void 0),i(this,"vertexShader",void 0),i(this,"sectionColors",void 0),i(this,"computedCanvasStyle",void 0),i(this,"conf",void 0),i(this,"uniforms",void 0),i(this,"t",1253106),i(this,"last",0),i(this,"width",void 0),i(this,"minWidth",1111),i(this,"height",600),i(this,"xSegCount",void 0),i(this,"ySegCount",void 0),i(this,"mesh",void 0),i(this,"material",void 0),i(this,"geometry",void 0),i(this,"minigl",void 0),i(this,"scrollObserver",void 0),i(this,"amp",320),i(this,"seed",5),i(this,"freqX",14e-5),i(this,"freqY",29e-5),i(this,"freqDelta",1e-5),i(this,"activeColors",[1,1,1,1]),i(this,"isMetaKey",!1),i(this,"isGradientLegendVisible",!1),i(this,"isMouseDown",!1),i(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),i(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),i(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),i(this,"handleMouseDown",a=>{this.isGradientLegendVisible&&(this.isMetaKey=a.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),i(this,"handleMouseUp",()=>{this.isMouseDown=!1}),i(this,"animate",a=>{if(!this.shouldSkipFrame(a)||this.isMouseDown){if(this.t+=Math.min(a-this.last,1e3/15),this.last=a,this.isMouseDown){let v=160;this.isMetaKey&&(v=-160),this.t+=v}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),i(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),i(this,"pause",()=>{this.conf.playing=!1}),i(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),i(this,"initGradient",a=>(this.el=document.querySelector(a),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,fragment:`varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new D(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let n=1;n<this.sectionColors.length;n+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[n],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+n/this.sectionColors.length,3+n/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*n}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*n}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*n}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*n})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(n){return!!window.document.hidden||!this.conf.playing||parseInt(n,10)%2==0||void 0}updateFrequency(n){this.freqX+=n,this.freqY+=n}toggleColor(n){this.activeColors[n]=this.activeColors[n]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(n=>{let a=this.computedCanvasStyle.getPropertyValue(n).trim();return a.length===4&&(a=`#${a.substr(1).split("").map(c=>c+c).join("")}`),a&&`0x${a.substr(1)}`}).filter(Boolean).map(_)}}const F=new A;F.initGradient("#mash-gradient");
