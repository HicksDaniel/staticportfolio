import{e as uf,l as ii,m as Eu,f as Ra,h as Ps,i as Ls,j as hf,k as Jo,n as wu,p as ff,q as df,D as pf,s as ul,t as mf,u as gf,v as vf,w as Tt,G as Tu,T as Ot,E as Gt,x as ae,y as ar,z as hl,A as Au,B as Ru,C as _f,F as xf,H as yf,I as Mf,J as Sf,K as bf,L as Cu,M as Ef,N as wf,O as Tf,Q as Af,R as Rf,S as Cf,U as Pf}from"./vendor-BZcPPBZ-.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ds="154",Un={ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lf=0,fl=1,Df=2,Pu=1,qf=2,qn=3,ri=0,Ct=1,Ft=2,Bn=0,ti=1,dl=2,pl=3,ml=4,Uf=5,Qi=100,Of=101,If=102,gl=103,vl=104,Nf=200,Ff=201,Bf=202,zf=203,Lu=204,Du=205,Gf=206,Hf=207,kf=208,Vf=209,Wf=210,jf=0,Xf=1,$f=2,Qo=3,Yf=4,Kf=5,Zf=6,Jf=7,Na=0,Qf=1,ed=2,zn=0,td=1,nd=2,id=3,rd=4,ad=5,qu=300,or=301,sr=302,es=303,ts=304,Fa=306,ns=1e3,cn=1001,is=1002,Ut=1003,_l=1004,io=1005,Kt=1006,od=1007,Pr=1008,ni=1009,sd=1010,ld=1011,qs=1012,Uu=1013,Qn=1014,ei=1015,lr=1016,Ou=1017,Iu=1018,bi=1020,cd=1021,un=1023,ud=1024,hd=1025,Ei=1026,cr=1027,fd=1028,Nu=1029,dd=1030,Fu=1031,Bu=1033,ro=33776,ao=33777,oo=33778,so=33779,xl=35840,yl=35841,Ml=35842,Sl=35843,pd=36196,bl=37492,El=37496,wl=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Ll=37814,Dl=37815,ql=37816,Ul=37817,Ol=37818,Il=37819,Nl=37820,Fl=37821,lo=36492,md=36283,Bl=36284,zl=36285,Gl=36286,gd=0,vd=1,Hl=2,zu=3e3,wi=3001,_d=3200,xd=3201,Us=0,yd=1,Ti="",Ne="srgb",Sn="srgb-linear",Gu="display-p3",co=7680,Md=519,Sd=512,bd=513,Ed=514,wd=515,Td=516,Ad=517,Rd=518,Cd=519,rs=35044,kl="300 es",as=1035,In=2e3,Ca=2001;class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vl=1234567;const Er=Math.PI/180,Lr=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Os(i,e){return(i%e+e)%e}function Pd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ld(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function Dd(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function qd(i,e=1){return e-Math.abs(Os(i,e*2)-e)}function Ud(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Od(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Id(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nd(i,e){return i+Math.random()*(e-i)}function Fd(i){return i*(.5-Math.random())}function Bd(i){i!==void 0&&(Vl=i);let e=Vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zd(i){return i*Er}function Gd(i){return i*Lr}function os(i){return(i&i-1)===0&&i!==0}function Hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kd(i,e,t,n,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+n)/2),u=o((e+n)/2),h=a((e-n)/2),p=o((e-n)/2),d=a((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(s*u,l*h,l*p,s*c);break;case"YZY":i.set(l*p,s*u,l*h,s*c);break;case"ZXZ":i.set(l*h,l*p,s*u,s*c);break;case"XZX":i.set(s*u,l*g,l*d,s*c);break;case"YXY":i.set(l*d,s*u,l*g,s*c);break;case"ZYZ":i.set(l*g,l*d,s*u,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ss={DEG2RAD:Er,RAD2DEG:Lr,generateUUID:Mn,clamp:gt,euclideanModulo:Os,mapLinear:Pd,inverseLerp:Ld,lerp:wr,damp:Dd,pingpong:qd,smoothstep:Ud,smootherstep:Od,randInt:Id,randFloat:Nd,randFloatSpread:Fd,seededRandom:Bd,degToRad:zd,radToDeg:Gd,isPowerOfTwo:os,ceilPowerOfTwo:Hd,floorPowerOfTwo:Pa,setQuaternionFromProperEuler:kd,normalize:Je,denormalize:Nn};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,r,a,o,s,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,l,c)}set(e,t,n,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],d=n[5],g=n[8],_=r[0],m=r[3],f=r[6],x=r[1],v=r[4],S=r[7],y=r[2],E=r[5],b=r[8];return a[0]=o*_+s*x+l*y,a[3]=o*m+s*v+l*E,a[6]=o*f+s*S+l*b,a[1]=c*_+u*x+h*y,a[4]=c*m+u*v+h*E,a[7]=c*f+u*S+h*b,a[2]=p*_+d*x+g*y,a[5]=p*m+d*v+g*E,a[8]=p*f+d*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*a*u+n*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,p=s*l-u*a,d=c*a-o*l,g=t*h+n*p+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(s*n-r*o)*_,e[3]=p*_,e[4]=(u*t-r*l)*_,e[5]=(r*a-s*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new He;function Hu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Wl={};function Tr(i){i in Wl||(Wl[i]=!0,console.warn(i))}function nr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vd=new He().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Wd=new He().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jd(i){return i.convertSRGBToLinear().applyMatrix3(Wd)}function Xd(i){return i.applyMatrix3(Vd).convertLinearToSRGB()}const $d={[Sn]:i=>i,[Ne]:i=>i.convertSRGBToLinear(),[Gu]:jd},Yd={[Sn]:i=>i,[Ne]:i=>i.convertLinearToSRGB(),[Gu]:Xd},en={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Sn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=$d[e],r=Yd[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Di;class ku{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=Dr("canvas")),Di.width=e.width,Di.height=e.height;const n=Di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=nr(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nr(t[n]/255)*255):t[n]=nr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class Vu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(fo(r[o].image)):a.push(fo(r[o]))}else a=fo(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zd=0;class zt extends Gn{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=cn,r=cn,a=Kt,o=Pr,s=un,l=ni,c=zt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Mn(),this.name="",this.source=new Vu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===wi?Ne:Ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ns:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ns:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?wi:zu}set encoding(e){Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wi?Ne:Ti}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=qu;zt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,y=(f+1)/2,E=(u+p)/4,b=(h+_)/4,T=(g+m)/4;return v>S&&v>y?v<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(v),r=E/n,a=b/n):S>y?S<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),n=E/r,a=T/r):y<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(y),n=b/a,r=T/a),this.set(n,r,a,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(p-u)/x,this.w=Math.acos((c+d+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ai extends Gn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wi?Ne:Ti),this.texture=new zt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wu extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jd extends zt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const p=a[o+0],d=a[o+1],g=a[o+2],_=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==p||c!==d||u!==g){let m=1-s;const f=l*p+c*d+u*g+h*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const y=Math.sqrt(v),E=Math.atan2(y,f*x);m=Math.sin(m*E)/y,s=Math.sin(s*E)/y}const S=s*x;if(l=l*m+p*S,c=c*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=a[o],p=a[o+1],d=a[o+2],g=a[o+3];return e[t]=s*g+u*h+l*d-c*p,e[t+1]=l*g+u*p+c*h-s*d,e[t+2]=c*g+u*d+s*p-l*h,e[t+3]=u*g-s*h-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(r/2),h=s(a/2),p=l(n/2),d=l(r/2),g=l(a/2);switch(o){case"XYZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"YXZ":this._x=p*u*h+c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"ZXY":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h-p*d*g;break;case"ZYX":this._x=p*u*h-c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h+p*d*g;break;case"YZX":this._x=p*u*h+c*d*g,this._y=c*d*h+p*u*g,this._z=c*u*g-p*d*h,this._w=c*u*h-p*d*g;break;case"XZY":this._x=p*u*h-c*d*g,this._y=c*d*h-p*u*g,this._z=c*u*g+p*d*h,this._w=c*u*h+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],p=n+s+h;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(o-r)*d}else if(n>s&&n>h){const d=2*Math.sqrt(1+n-s-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(a+c)/d}else if(s>h){const d=2*Math.sqrt(1+s-n-h);this._w=(a-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-s);this._w=(o-r)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-n*c,this._z=a*u+o*c+n*l-r*s,this._w=o*u-n*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=a*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*r-s*n,u=l*n+s*t-a*r,h=l*r+a*n-o*t,p=-a*t-o*n-s*r;return this.x=c*l+p*-a+u*-s-h*-o,this.y=u*l+p*-o+h*-a-c*-s,this.z=h*l+p*-s+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-n*l,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new P,jl=new bn;class Hn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),qi.copy(e.boundingBox),qi.applyMatrix4(e.matrixWorld),this.union(qi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Rn.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Rn)}else r.boundingBox===null&&r.computeBoundingBox(),qi.copy(r.boundingBox),qi.applyMatrix4(e.matrixWorld),this.union(qi)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),zr.subVectors(this.max,mr),Ui.subVectors(e.a,mr),Oi.subVectors(e.b,mr),Ii.subVectors(e.c,mr),Vn.subVectors(Oi,Ui),Wn.subVectors(Ii,Oi),hi.subVectors(Ui,Ii);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-hi.z,hi.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,hi.z,0,-hi.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-hi.y,hi.x,0];return!mo(t,Ui,Oi,Ii,zr)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Ui,Oi,Ii,zr))?!1:(Gr.crossVectors(Vn,Wn),t=[Gr.x,Gr.y,Gr.z],mo(t,Ui,Oi,Ii,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new P,new P,new P,new P,new P,new P,new P,new P],Rn=new P,qi=new Hn,Ui=new P,Oi=new P,Ii=new P,Vn=new P,Wn=new P,hi=new P,mr=new P,zr=new P,Gr=new P,fi=new P;function mo(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){fi.fromArray(i,a);const s=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Qd=new Hn,gr=new P,go=new P;class Pi{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qd.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);const t=gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(go)),this.expandByPoint(gr.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new P,vo=new P,Hr=new P,jn=new P,_o=new P,kr=new P,xo=new P;class Ba{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){vo.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(vo);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Hr),s=jn.dot(this.direction),l=-jn.dot(Hr),c=jn.lengthSq(),u=Math.abs(1-o*o);let h,p,d,g;if(u>0)if(h=o*l-s,p=o*s-l,g=a*u,h>=0)if(p>=-g)if(p<=g){const _=1/u;h*=_,p*=_,d=h*(h+o*p+2*s)+p*(o*h+p+2*l)+c}else p=a,h=Math.max(0,-(o*p+s)),d=-h*h+p*(p+2*l)+c;else p=-a,h=Math.max(0,-(o*p+s)),d=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*a+s)),p=h>0?-a:Math.min(Math.max(-a,-l),a),d=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-a,-l),a),d=p*(p+2*l)+c):(h=Math.max(0,-(o*a+s)),p=h>0?a:Math.min(Math.max(-a,-l),a),d=-h*h+p*(p+2*l)+c);else p=o>0?-a:a,h=Math.max(0,-(o*p+s)),d=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vo).addScaledVector(Hr,p),d}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),r=Cn.dot(Cn)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(s=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||s>r)||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,r,a){_o.subVectors(t,e),kr.subVectors(n,e),xo.crossVectors(_o,kr);let o=this.direction.dot(xo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;jn.subVectors(this.origin,e);const l=s*this.direction.dot(kr.crossVectors(jn,kr));if(l<0)return null;const c=s*this.direction.dot(_o.cross(jn));if(c<0||l+c>o)return null;const u=-s*jn.dot(xo);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,a,o,s,l,c,u,h,p,d,g,_,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,l,c,u,h,p,d,g,_,m)}set(e,t,n,r,a,o,s,l,c,u,h,p,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=a,f[5]=o,f[9]=s,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ni.setFromMatrixColumn(e,0).length(),a=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const p=o*u,d=o*h,g=s*u,_=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=p-_*c,t[9]=-s*l,t[2]=_-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*u,d=l*h,g=c*u,_=c*h;t[0]=p+_*s,t[4]=g*s-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=d*s-g,t[6]=_+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*u,d=l*h,g=c*u,_=c*h;t[0]=p-_*s,t[4]=-o*h,t[8]=g+d*s,t[1]=d+g*s,t[5]=o*u,t[9]=_-p*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*u,d=o*h,g=s*u,_=s*h;t[0]=l*u,t[4]=g*c-d,t[8]=p*c+_,t[1]=l*h,t[5]=_*c+p,t[9]=d*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,d=o*c,g=s*l,_=s*c;t[0]=l*u,t[4]=_-p*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=d*h+g,t[10]=p-_*h}else if(e.order==="XZY"){const p=o*l,d=o*c,g=s*l,_=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=p*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=s*u,t[10]=_*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Xn.crossVectors(n,Vt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Xn.crossVectors(n,Vt)),Xn.normalize(),Vr.crossVectors(Vt,Xn),r[0]=Xn.x,r[4]=Vr.x,r[8]=Vt.x,r[1]=Xn.y,r[5]=Vr.y,r[9]=Vt.y,r[2]=Xn.z,r[6]=Vr.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],S=n[11],y=n[15],E=r[0],b=r[4],T=r[8],M=r[12],w=r[1],O=r[5],I=r[9],C=r[13],D=r[2],N=r[6],G=r[10],F=r[14],H=r[3],V=r[7],W=r[11],B=r[15];return a[0]=o*E+s*w+l*D+c*H,a[4]=o*b+s*O+l*N+c*V,a[8]=o*T+s*I+l*G+c*W,a[12]=o*M+s*C+l*F+c*B,a[1]=u*E+h*w+p*D+d*H,a[5]=u*b+h*O+p*N+d*V,a[9]=u*T+h*I+p*G+d*W,a[13]=u*M+h*C+p*F+d*B,a[2]=g*E+_*w+m*D+f*H,a[6]=g*b+_*O+m*N+f*V,a[10]=g*T+_*I+m*G+f*W,a[14]=g*M+_*C+m*F+f*B,a[3]=x*E+v*w+S*D+y*H,a[7]=x*b+v*O+S*N+y*V,a[11]=x*T+v*I+S*G+y*W,a[15]=x*M+v*C+S*F+y*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],p=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+a*l*h-r*c*h-a*s*p+n*c*p+r*s*d-n*l*d)+_*(+t*l*d-t*c*p+a*o*p-r*o*d+r*c*u-a*l*u)+m*(+t*c*h-t*s*d-a*o*h+n*o*d+a*s*u-n*c*u)+f*(-r*s*u-t*l*h+t*s*p+r*o*h-n*o*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],p=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=h*m*c-_*p*c+_*l*d-s*m*d-h*l*f+s*p*f,v=g*p*c-u*m*c-g*l*d+o*m*d+u*l*f-o*p*f,S=u*_*c-g*h*c+g*s*d-o*_*d-u*s*f+o*h*f,y=g*h*l-u*_*l-g*s*p+o*_*p+u*s*m-o*h*m,E=t*x+n*v+r*S+a*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=x*b,e[1]=(_*p*a-h*m*a-_*r*d+n*m*d+h*r*f-n*p*f)*b,e[2]=(s*m*a-_*l*a+_*r*c-n*m*c-s*r*f+n*l*f)*b,e[3]=(h*l*a-s*p*a-h*r*c+n*p*c+s*r*d-n*l*d)*b,e[4]=v*b,e[5]=(u*m*a-g*p*a+g*r*d-t*m*d-u*r*f+t*p*f)*b,e[6]=(g*l*a-o*m*a-g*r*c+t*m*c+o*r*f-t*l*f)*b,e[7]=(o*p*a-u*l*a+u*r*c-t*p*c-o*r*d+t*l*d)*b,e[8]=S*b,e[9]=(g*h*a-u*_*a-g*n*d+t*_*d+u*n*f-t*h*f)*b,e[10]=(o*_*a-g*s*a+g*n*c-t*_*c-o*n*f+t*s*f)*b,e[11]=(u*s*a-o*h*a-u*n*c+t*h*c+o*n*d-t*s*d)*b,e[12]=y*b,e[13]=(u*_*r-g*h*r+g*n*p-t*_*p-u*n*m+t*h*m)*b,e[14]=(g*s*r-o*_*r-g*n*l+t*_*l+o*n*m-t*s*m)*b,e[15]=(o*h*r-u*s*r+u*n*l-t*h*l-o*n*p+t*s*p)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+n,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+n,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,h=s+s,p=a*c,d=a*u,g=a*h,_=o*u,m=o*h,f=s*h,x=l*c,v=l*u,S=l*h,y=n.x,E=n.y,b=n.z;return r[0]=(1-(_+f))*y,r[1]=(d+S)*y,r[2]=(g-v)*y,r[3]=0,r[4]=(d-S)*E,r[5]=(1-(p+f))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(g+v)*b,r[9]=(m-x)*b,r[10]=(1-(p+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Ni.set(r[0],r[1],r[2]).length();const o=Ni.set(r[4],r[5],r[6]).length(),s=Ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/a,u=1/o,h=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=h,tn.elements[9]*=h,tn.elements[10]*=h,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=In){const l=this.elements,c=2*a/(t-e),u=2*a/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let d,g;if(s===In)d=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===Ca)d=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=In){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-a),p=(t+e)*c,d=(n+r)*u;let g,_;if(s===In)g=(o+a)*h,_=-2*h;else if(s===Ca)g=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ni=new P,tn=new Qe,ep=new P(0,0,0),tp=new P(1,1,1),Xn=new P,Vr=new P,Vt=new P,Xl=new Qe,$l=new bn;class Ri{constructor(e=0,t=0,n=0,r=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],h=r[2],p=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,d));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Is{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let np=0;const Yl=new P,Fi=new bn,Pn=new Qe,Wr=new P,vr=new P,ip=new P,rp=new bn,Kl=new P(1,0,0),Zl=new P(0,1,0),Jl=new P(0,0,1),ap={type:"added"},Ql={type:"removed"};class dt extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new P,t=new Ri,n=new bn,r=new P(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new He}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(vr,Wr,this.up):Pn.lookAt(Wr,vr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ql)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ql)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new P(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new P,Ln=new P,yo=new P,Dn=new P,Bi=new P,zi=new P,ec=new P,Mo=new P,So=new P,bo=new P;let jr=!1;class ln{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),nn.subVectors(e,t),r.cross(nn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){nn.subVectors(r,t),Ln.subVectors(n,t),yo.subVectors(e,t);const o=nn.dot(nn),s=nn.dot(Ln),l=nn.dot(yo),c=Ln.dot(Ln),u=Ln.dot(yo),h=o*c-s*s;if(h===0)return a.set(-2,-1,-1);const p=1/h,d=(c*l-s*u)*p,g=(o*u-s*l)*p;return a.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,n,r,a,o,s,l){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),this.getInterpolation(e,t,n,r,a,o,s,l)}static getInterpolation(e,t,n,r,a,o,s,l){return this.getBarycoord(e,t,n,r,Dn),l.setScalar(0),l.addScaledVector(a,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(s,Dn.z),l}static isFrontFacing(e,t,n,r){return nn.subVectors(n,t),Ln.subVectors(e,t),nn.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),nn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jr=!0),ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;Bi.subVectors(r,n),zi.subVectors(a,n),Mo.subVectors(e,n);const l=Bi.dot(Mo),c=zi.dot(Mo);if(l<=0&&c<=0)return t.copy(n);So.subVectors(e,r);const u=Bi.dot(So),h=zi.dot(So);if(u>=0&&h<=u)return t.copy(r);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Bi,o);bo.subVectors(e,a);const d=Bi.dot(bo),g=zi.dot(bo);if(g>=0&&d<=g)return t.copy(a);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(zi,s);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ec.subVectors(a,r),s=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(ec,s);const f=1/(m+_+p);return o=_*f,s=p*f,t.copy(n).addScaledVector(Bi,o).addScaledVector(zi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let op=0;class si extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=ti,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=en.workingColorSpace){if(e=Os(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Eo(o,a,e+1/3),this.g=Eo(o,a,e),this.b=Eo(o,a,e-1/3)}return en.toWorkingColorSpace(this,r),this}setStyle(e,t=Ne){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return en.fromWorkingColorSpace(Rt.copy(this),e),Math.round(gt(Rt.r*255,0,255))*65536+Math.round(gt(Rt.g*255,0,255))*256+Math.round(gt(Rt.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,r=Rt.g,a=Rt.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case n:l=(r-a)/h+(r<a?6:0);break;case r:l=(a-n)/h+2;break;case a:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Ne){en.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,r=Rt.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Xr);const n=wr(rn.h,Xr.h,t),r=wr(rn.s,Xr.s,t),a=wr(rn.l,Xr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Fe;Fe.NAMES=ju;class Nr extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new P,$r=new ce;class lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rs,this.updateRange={offset:0,count:-1},this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xu extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $u extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sp=0;const $t=new Qe,wo=new dt,Gi=new P,Wt=new Hn,_r=new Hn,Mt=new P;class et extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hu(e)?$u:Xu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new He().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Wt.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];_r.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(Wt.min,_r.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,_r.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(_r.min),Wt.expandByPoint(_r.max))}Wt.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Mt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Mt.fromBufferAttribute(s,c),l&&(Gi.fromBufferAttribute(e,c),Mt.add(Gi)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<s;w++)c[w]=new P,u[w]=new P;const h=new P,p=new P,d=new P,g=new ce,_=new ce,m=new ce,f=new P,x=new P;function v(w,O,I){h.fromArray(r,w*3),p.fromArray(r,O*3),d.fromArray(r,I*3),g.fromArray(o,w*2),_.fromArray(o,O*2),m.fromArray(o,I*2),p.sub(h),d.sub(h),_.sub(g),m.sub(g);const C=1/(_.x*m.y-m.x*_.y);isFinite(C)&&(f.copy(p).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(C),x.copy(d).multiplyScalar(_.x).addScaledVector(p,-m.x).multiplyScalar(C),c[w].add(f),c[O].add(f),c[I].add(f),u[w].add(x),u[O].add(x),u[I].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,O=S.length;w<O;++w){const I=S[w],C=I.start,D=I.count;for(let N=C,G=C+D;N<G;N+=3)v(n[N+0],n[N+1],n[N+2])}const y=new P,E=new P,b=new P,T=new P;function M(w){b.fromArray(a,w*3),T.copy(b);const O=c[w];y.copy(O),y.sub(b.multiplyScalar(b.dot(O))).normalize(),E.crossVectors(T,O);const C=E.dot(u[w])<0?-1:1;l[w*4]=y.x,l[w*4+1]=y.y,l[w*4+2]=y.z,l[w*4+3]=C}for(let w=0,O=S.length;w<O;++w){const I=S[w],C=I.start,D=I.count;for(let N=C,G=C+D;N<G;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const r=new P,a=new P,o=new P,s=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,p=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){s.isInterleavedBufferAttribute?d=l[_]*s.data.stride+s.offset:d=l[_]*u;for(let f=0;f<u;f++)p[g++]=c[d++]}return new lt(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new et,n=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,n);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,h=c.length;u<h;u++){const p=c[u],d=e(p,n);l.push(d)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],h=a[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tc=new Qe,di=new Ba,Yr=new Pi,nc=new P,Hi=new P,ki=new P,Vi=new P,To=new P,Kr=new P,Zr=new ce,Jr=new ce,Qr=new ce,ic=new P,rc=new P,ac=new P,ea=new P,ta=new P;class at extends dt{constructor(e=new et,t=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Kr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],h=a[l];u!==0&&(To.fromBufferAttribute(h,e),o?Kr.addScaledVector(To,u):Kr.addScaledVector(To.sub(t),u))}t.add(Kr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(a),di.copy(e.ray).recast(e.near),!(Yr.containsPoint(di.origin)===!1&&(di.intersectSphere(Yr,nc)===null||di.origin.distanceToSquared(nc)>(e.far-e.near)**2))&&(tc.copy(a).invert(),di.copy(e.ray).applyMatrix4(tc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,p=a.groups,d=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(s.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,y=v;S<y;S+=3){const E=s.getX(S),b=s.getX(S+1),T=s.getX(S+2);r=na(this,f,e,n,c,u,h,E,b,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(s.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const x=s.getX(m),v=s.getX(m+1),S=s.getX(m+2);r=na(this,o,e,n,c,u,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=x,y=v;S<y;S+=3){const E=S,b=S+1,T=S+2;r=na(this,f,e,n,c,u,h,E,b,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,S=m+2;r=na(this,o,e,n,c,u,h,x,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function lp(i,e,t,n,r,a,o,s){let l;if(e.side===Ct?l=n.intersectTriangle(o,a,r,!0,s):l=n.intersectTriangle(r,a,o,e.side===ri,s),l===null)return null;ta.copy(s),ta.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ta);return c<t.near||c>t.far?null:{distance:c,point:ta.clone(),object:i}}function na(i,e,t,n,r,a,o,s,l,c){i.getVertexPosition(s,Hi),i.getVertexPosition(l,ki),i.getVertexPosition(c,Vi);const u=lp(i,e,t,n,Hi,ki,Vi,ea);if(u){r&&(Zr.fromBufferAttribute(r,s),Jr.fromBufferAttribute(r,l),Qr.fromBufferAttribute(r,c),u.uv=ln.getInterpolation(ea,Hi,ki,Vi,Zr,Jr,Qr,new ce)),a&&(Zr.fromBufferAttribute(a,s),Jr.fromBufferAttribute(a,l),Qr.fromBufferAttribute(a,c),u.uv1=ln.getInterpolation(ea,Hi,ki,Vi,Zr,Jr,Qr,new ce),u.uv2=u.uv1),o&&(ic.fromBufferAttribute(o,s),rc.fromBufferAttribute(o,l),ac.fromBufferAttribute(o,c),u.normal=ln.getInterpolation(ea,Hi,ki,Vi,ic,rc,ac,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new P,materialIndex:0};ln.getNormal(Hi,ki,Vi,h.normal),u.face=h}return u}class fr extends et{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,a,0),g("z","y","x",1,-1,n,t,-e,o,a,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,a,4),g("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2));function g(_,m,f,x,v,S,y,E,b,T,M){const w=S/b,O=y/T,I=S/2,C=y/2,D=E/2,N=b+1,G=T+1;let F=0,H=0;const V=new P;for(let W=0;W<G;W++){const B=W*O-C;for(let j=0;j<N;j++){const ne=j*w-I;V[_]=ne*x,V[m]=B*v,V[f]=D,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[f]=E>0?1:-1,u.push(V.x,V.y,V.z),h.push(j/b),h.push(1-W/T),F+=1}}for(let W=0;W<T;W++)for(let B=0;B<b;B++){const j=p+B+N*W,ne=p+B+N*(W+1),re=p+(B+1)+N*(W+1),se=p+(B+1)+N*W;l.push(j,ne,se),l.push(ne,re,se),H+=6}s.addGroup(d,H,M),d+=H,p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=ur(i[t]);for(const r in n)e[r]=n[r]}return e}function cp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yu(i){return i.getRenderTarget()===null?i.outputColorSpace:Sn}const za={clone:ur,merge:qt};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ga extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends Ga{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,ji=1;class fp extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Zt(Wi,ji,e,t);r.layers=this.layers,this.add(r);const a=new Zt(Wi,ji,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Wi,ji,e,t);o.layers=this.layers,this.add(o);const s=new Zt(Wi,ji,e,t);s.layers=this.layers,this.add(s);const l=new Zt(Wi,ji,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Wi,ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,p=e.xr.enabled;e.toneMapping=zn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ku extends zt{constructor(e,t,n,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dp extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wi?Ne:Ti),this.texture=new Ku(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fr(5,5,5),a=new Xt({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Bn});a.uniforms.tEquirect.value=t;const o=new at(r,a),s=t.minFilter;return t.minFilter===Pr&&(t.minFilter=Kt),new fp(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const Ao=new P,pp=new P,mp=new He;class xi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ao.subVectors(n,t).cross(pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ao),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||mp.getNormalMatrix(e),r=this.coplanarPoint(Ao).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Pi,ia=new P;class Ha{constructor(e=new xi,t=new xi,n=new xi,r=new xi,a=new xi,o=new xi){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In){const n=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],h=r[6],p=r[7],d=r[8],g=r[9],_=r[10],m=r[11],f=r[12],x=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-a,p-c,m-d,S-f).normalize(),n[1].setComponents(l+a,p+c,m+d,S+f).normalize(),n[2].setComponents(l+o,p+u,m+g,S+x).normalize(),n[3].setComponents(l-o,p-u,m-g,S-x).normalize(),n[4].setComponents(l-s,p-h,m-_,S-v).normalize(),t===In)n[5].setComponents(l+s,p+h,m+_,S+v).normalize();else if(t===Ca)n[5].setComponents(s,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ia.x=r.normal.x>0?e.max.x:e.min.x,ia.y=r.normal.y>0?e.max.y:e.min.y,ia.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zu(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function gp(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,p=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,p),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,h){const p=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,p):(t?i.bufferSubData(h,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):i.bufferSubData(h,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(a(h.buffer,c,u),h.version=c.version)}return{get:o,remove:s,update:l}}class Ns extends et{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),l=Math.floor(r),c=s+1,u=l+1,h=e/s,p=t/l,d=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const x=f*p-o;for(let v=0;v<c;v++){const S=v*h-a;g.push(S,-x,0),_.push(0,0,1),m.push(v/s),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<s;x++){const v=x+c*f,S=x+c*(f+1),y=x+1+c*(f+1),E=x+1+c*f;d.push(v,S,E),d.push(S,y,E)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.widthSegments,e.heightSegments)}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,im=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,pm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_m=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sm=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,S0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:vp,alphahash_pars_fragment:_p,alphamap_fragment:xp,alphamap_pars_fragment:yp,alphatest_fragment:Mp,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:Ep,begin_vertex:wp,beginnormal_vertex:Tp,bsdfs:Ap,iridescence_fragment:Rp,bumpmap_pars_fragment:Cp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:qp,color_fragment:Up,color_pars_fragment:Op,color_pars_vertex:Ip,color_vertex:Np,common:Fp,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:zp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Hp,emissivemap_fragment:kp,emissivemap_pars_fragment:Vp,colorspace_fragment:Wp,colorspace_pars_fragment:jp,envmap_fragment:Xp,envmap_common_pars_fragment:$p,envmap_pars_fragment:Yp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:lm,envmap_vertex:Zp,fog_vertex:Jp,fog_pars_vertex:Qp,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:nm,lightmap_fragment:im,lightmap_pars_fragment:rm,lights_lambert_fragment:am,lights_lambert_pars_fragment:om,lights_pars_begin:sm,lights_toon_fragment:cm,lights_toon_pars_fragment:um,lights_phong_fragment:hm,lights_phong_pars_fragment:fm,lights_physical_fragment:dm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:vm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:ym,logdepthbuf_vertex:Mm,map_fragment:Sm,map_pars_fragment:bm,map_particle_fragment:Em,map_particle_pars_fragment:wm,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:Am,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:qm,normal_pars_fragment:Um,normal_pars_vertex:Om,normal_vertex:Im,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Gm,opaque_fragment:Hm,packing:km,premultiplied_alpha_fragment:Vm,project_vertex:Wm,dithering_fragment:jm,dithering_pars_fragment:Xm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Zm,shadowmap_vertex:Jm,shadowmask_pars_fragment:Qm,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:r0,specularmap_pars_fragment:a0,tonemapping_fragment:o0,tonemapping_pars_fragment:s0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:u0,uv_pars_vertex:h0,uv_vertex:f0,worldpos_vertex:d0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:v0,cube_vert:_0,cube_frag:x0,depth_vert:y0,depth_frag:M0,distanceRGBA_vert:S0,distanceRGBA_frag:b0,equirect_vert:E0,equirect_frag:w0,linedashed_vert:T0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:D0,meshmatcap_frag:q0,meshnormal_vert:U0,meshnormal_frag:O0,meshphong_vert:I0,meshphong_frag:N0,meshphysical_vert:F0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:G0,points_vert:H0,points_frag:k0,shadow_vert:V0,shadow_frag:W0,sprite_vert:j0,sprite_frag:X0},ge={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Nt={basic:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:qt([ge.points,ge.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:qt([ge.common,ge.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:qt([ge.sprite,ge.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:qt([ge.common,ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:qt([ge.lights,ge.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Nt.physical={uniforms:qt([Nt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ra={r:0,b:0,g:0};function $0(i,e,t,n,r,a,o){const s=new Fe(0);let l=a===!0?0:1,c,u,h=null,p=0,d=null;function g(m,f){let x=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(s,l):v&&v.isColor&&(_(v,1),x=!0),i.xr.getEnvironmentBlendMode()){case"opaque":x=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),x=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),x=!0;break}(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fa)?(u===void 0&&(u=new at(new fr(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:ur(Nt.backgroundCube.uniforms),vertexShader:Nt.backgroundCube.vertexShader,fragmentShader:Nt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ne,(h!==v||p!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new at(new Ns(2,2),new Xt({name:"BackgroundMaterial",uniforms:ur(Nt.background.uniforms),vertexShader:Nt.background.vertexShader,fragmentShader:Nt.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(ra,Yu(i)),n.buffers.color.setClear(ra.r,ra.g,ra.b,f,o)}return{getClearColor:function(){return s},setClearColor:function(m,f=1){s.set(m),l=f,_(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(s,l)},render:g}}function Y0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,s={},l=m(null);let c=l,u=!1;function h(D,N,G,F,H){let V=!1;if(o){const W=_(F,G,N);c!==W&&(c=W,d(c.object)),V=f(D,F,G,H),V&&x(D,F,G,H)}else{const W=N.wireframe===!0;(c.geometry!==F.id||c.program!==G.id||c.wireframe!==W)&&(c.geometry=F.id,c.program=G.id,c.wireframe=W,V=!0)}H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(V||u)&&(u=!1,T(D,N,G,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function p(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function d(D){return n.isWebGL2?i.bindVertexArray(D):a.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function _(D,N,G){const F=G.wireframe===!0;let H=s[D.id];H===void 0&&(H={},s[D.id]=H);let V=H[N.id];V===void 0&&(V={},H[N.id]=V);let W=V[F];return W===void 0&&(W=m(p()),V[F]=W),W}function m(D){const N=[],G=[],F=[];for(let H=0;H<r;H++)N[H]=0,G[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:F,object:D,attributes:{},index:null}}function f(D,N,G,F){const H=c.attributes,V=N.attributes;let W=0;const B=G.getAttributes();for(const j in B)if(B[j].location>=0){const re=H[j];let se=V[j];if(se===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),re===void 0||re.attribute!==se||se&&re.data!==se.data)return!0;W++}return c.attributesNum!==W||c.index!==F}function x(D,N,G,F){const H={},V=N.attributes;let W=0;const B=G.getAttributes();for(const j in B)if(B[j].location>=0){let re=V[j];re===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));const se={};se.attribute=re,re&&re.data&&(se.data=re.data),H[j]=se,W++}c.attributes=H,c.attributesNum=W,c.index=F}function v(){const D=c.newAttributes;for(let N=0,G=D.length;N<G;N++)D[N]=0}function S(D){y(D,0)}function y(D,N){const G=c.newAttributes,F=c.enabledAttributes,H=c.attributeDivisors;G[D]=1,F[D]===0&&(i.enableVertexAttribArray(D),F[D]=1),H[D]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,N),H[D]=N)}function E(){const D=c.newAttributes,N=c.enabledAttributes;for(let G=0,F=N.length;G<F;G++)N[G]!==D[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function b(D,N,G,F,H,V,W){W===!0?i.vertexAttribIPointer(D,N,G,H,V):i.vertexAttribPointer(D,N,G,F,H,V)}function T(D,N,G,F){if(n.isWebGL2===!1&&(D.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=F.attributes,V=G.getAttributes(),W=N.defaultAttributeValues;for(const B in V){const j=V[B];if(j.location>=0){let ne=H[B];if(ne===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){const re=ne.normalized,se=ne.itemSize,pe=t.get(ne);if(pe===void 0)continue;const k=pe.buffer,te=pe.type,Me=pe.bytesPerElement,Re=n.isWebGL2===!0&&(te===i.INT||te===i.UNSIGNED_INT||ne.gpuType===Uu);if(ne.isInterleavedBufferAttribute){const _e=ne.data,q=_e.stride,le=ne.offset;if(_e.isInstancedInterleavedBuffer){for(let K=0;K<j.locationSize;K++)y(j.location+K,_e.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let K=0;K<j.locationSize;K++)S(j.location+K);i.bindBuffer(i.ARRAY_BUFFER,k);for(let K=0;K<j.locationSize;K++)b(j.location+K,se/j.locationSize,te,re,q*Me,(le+se/j.locationSize*K)*Me,Re)}else{if(ne.isInstancedBufferAttribute){for(let _e=0;_e<j.locationSize;_e++)y(j.location+_e,ne.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<j.locationSize;_e++)S(j.location+_e);i.bindBuffer(i.ARRAY_BUFFER,k);for(let _e=0;_e<j.locationSize;_e++)b(j.location+_e,se/j.locationSize,te,re,se*Me,se/j.locationSize*_e*Me,Re)}}else if(W!==void 0){const re=W[B];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(j.location,re);break;case 3:i.vertexAttrib3fv(j.location,re);break;case 4:i.vertexAttrib4fv(j.location,re);break;default:i.vertexAttrib1fv(j.location,re)}}}}E()}function M(){I();for(const D in s){const N=s[D];for(const G in N){const F=N[G];for(const H in F)g(F[H].object),delete F[H];delete N[G]}delete s[D]}}function w(D){if(s[D.id]===void 0)return;const N=s[D.id];for(const G in N){const F=N[G];for(const H in F)g(F[H].object),delete F[H];delete N[G]}delete s[D.id]}function O(D){for(const N in s){const G=s[N];if(G[D.id]===void 0)continue;const F=G[D.id];for(const H in F)g(F[H].object),delete F[H];delete G[D.id]}}function I(){C(),u=!0,c!==l&&(c=l,d(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:S,disableUnusedAttributes:E}}function K0(i,e,t,n){const r=n.isWebGL2;let a;function o(c){a=c}function s(c,u){i.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,h){if(h===0)return;let p,d;if(r)p=i,d="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](a,c,u,h),t.update(u,a,h)}this.setMode=o,this.render=s,this.renderInstances=l}function Z0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,S=o||e.has("OES_texture_float"),y=v&&S,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:E}}function J0(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new xi,s=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const d=h.length!==0||p||n!==0||r;return r=p,n=h.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||a&&!m)a?u(null):c();else{const x=a?0:n,v=x*4;let S=f.clippingState||null;l.value=S,S=u(g,p,v,d);for(let y=0;y!==v;++y)S[y]=t[y];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=d+_*4,x=p.matrixWorldInverse;s.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(x,s),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Q0(i){let e=new WeakMap;function t(o,s){return s===es?o.mapping=or:s===ts&&(o.mapping=sr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===es||s===ts)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dp(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Fs extends Ga{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,oc=[.125,.215,.35,.446,.526,.582],Mi=20,Ro=new Fs,sc=new Fe;let Co=null;const yi=(1+Math.sqrt(5))/2,Xi=1/yi,lc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,yi,Xi),new P(0,yi,-Xi),new P(Xi,0,yi),new P(-Xi,0,yi),new P(yi,Xi,0),new P(-yi,Xi,0)];class cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Co=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Co),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Co=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:lr,format:un,colorSpace:Sn,depthBuffer:!1},r=uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e1(a)),this._blurMaterial=t1(a,e,t)}return r}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,r){const s=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(sc),u.toneMapping=zn,u.autoClear=!1;const d=new Nr({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new at(new fr,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(sc),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(s.up.set(0,l[f],0),s.lookAt(c[f],0,0)):x===1?(s.up.set(0,0,l[f]),s.lookAt(0,c[f],0)):(s.up.set(0,l[f],0),s.lookAt(0,0,c[f]));const v=this._cubeSize;aa(r,x*v,f>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===or||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lc[(r-1)%lc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new at(this._lodPlanes[r],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),_=a/g,m=isFinite(a)?1+Math.floor(u*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const f=[];let x=0;for(let b=0;b<Mi;++b){const T=b/_,M=Math.exp(-T*T/2);f.push(M),b===0?x+=M:b<m&&(x+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const S=this._sizeLods[r],y=3*S*(r>v-er?r-v+er:0),E=4*(this._cubeSize-S);aa(t,y,E,3*S,2*S),l.setRenderTarget(t),l.render(h,Ro)}}function e1(i){const e=[],t=[],n=[];let r=i;const a=i-er+1+oc.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>i-er?l=oc[o-i+er-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),S=new Float32Array(f*g*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,T=E>2?0:-1,M=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];x.set(M,_*g*E),v.set(p,m*g*E);const w=[E,E,E,E,E,E];S.set(w,f*g*E)}const y=new et;y.setAttribute("position",new lt(x,_)),y.setAttribute("uv",new lt(v,m)),y.setAttribute("faceIndex",new lt(S,f)),e.push(y),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uc(i,e,t){const n=new ai(i,e,t);return n.texture.mapping=Fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function t1(i,e,t){const n=new Float32Array(Mi),r=new P(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function hc(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function fc(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Bs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n1(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===es||l===ts,u=l===or||l===sr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new cc(i)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new cc(i));const p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function i1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function r1(i,e,t,n){const r={},a=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}p.removeEventListener("dispose",o),delete r[p.id];const d=a.get(p);d&&(e.remove(d),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){const p=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,S=x.length;v<S;v+=3){const y=x[v+0],E=x[v+1],b=x[v+2];p.push(y,E,E,b,b,y)}}else{const x=g.array;_=g.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const y=v+0,E=v+1,b=v+2;p.push(y,E,E,b,b,y)}}const m=new(Hu(p)?$u:Xu)(p,1);m.version=_;const f=a.get(h);f&&e.remove(f),a.set(h,m)}function u(h){const p=a.get(h);if(p){const d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return a.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function a1(i,e,t,n){const r=n.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function u(p,d){i.drawElements(a,d,s,p*l),t.update(d,a,1)}function h(p,d,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](a,d,s,p*l,g),t.update(d,a,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function o1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function s1(i,e){return i[0]-e[0]}function l1(i,e){return Math.abs(e[1])-Math.abs(i[1])}function c1(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,o=new ht,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=a.get(u);if(_===void 0||_.count!==g){let D=function(){I.dispose(),a.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;x===!0&&(T=1),v===!0&&(T=2),S===!0&&(T=3);let M=u.attributes.position.count*T,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const O=new Float32Array(M*w*4*g),I=new Wu(O,M,w,g);I.type=ei,I.needsUpdate=!0;const C=T*4;for(let N=0;N<g;N++){const G=y[N],F=E[N],H=b[N],V=M*w*4*N;for(let W=0;W<G.count;W++){const B=W*C;x===!0&&(o.fromBufferAttribute(G,W),O[V+B+0]=o.x,O[V+B+1]=o.y,O[V+B+2]=o.z,O[V+B+3]=0),v===!0&&(o.fromBufferAttribute(F,W),O[V+B+4]=o.x,O[V+B+5]=o.y,O[V+B+6]=o.z,O[V+B+7]=0),S===!0&&(o.fromBufferAttribute(H,W),O[V+B+8]=o.x,O[V+B+9]=o.y,O[V+B+10]=o.z,O[V+B+11]=H.itemSize===4?o.w:1)}}_={count:g,texture:I,size:new ce(M,w)},a.set(u,_),u.addEventListener("dispose",D)}let m=0;for(let x=0;x<p.length;x++)m+=p[x];const f=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",f),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=p===void 0?0:p.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<d;v++){const S=g[v];S[0]=v,S[1]=p[v]}g.sort(l1);for(let v=0;v<8;v++)v<d&&g[v][1]?(s[v][0]=g[v][0],s[v][1]=g[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(s1);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const S=s[v],y=S[0],E=S[1];y!==Number.MAX_SAFE_INTEGER&&E?(_&&u.getAttribute("morphTarget"+v)!==_[y]&&u.setAttribute("morphTarget"+v,_[y]),m&&u.getAttribute("morphNormal"+v)!==m[y]&&u.setAttribute("morphNormal"+v,m[y]),r[v]=E,f+=E):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const x=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function u1(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Ju=new zt,Qu=new Wu,eh=new Jd,th=new Ku,dc=[],pc=[],mc=new Float32Array(16),gc=new Float32Array(9),vc=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=dc[r];if(a===void 0&&(a=new Float32Array(r),dc[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ka(i,e){let t=pc[e];t===void 0&&(t=new Int32Array(e),pc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function f1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function d1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function p1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function m1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),_t(t,n)}}function g1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;gc.set(n),i.uniformMatrix3fv(this.addr,!1,gc),_t(t,n)}}function v1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;mc.set(n),i.uniformMatrix4fv(this.addr,!1,mc),_t(t,n)}}function _1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function M1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function S1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function E1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function T1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ju,r)}function A1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||eh,r)}function R1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||th,r)}function C1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Qu,r)}function P1(i){switch(i){case 5126:return h1;case 35664:return f1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return v1;case 5124:case 35670:return _1;case 35667:case 35671:return x1;case 35668:case 35672:return y1;case 35669:case 35673:return M1;case 5125:return S1;case 36294:return b1;case 36295:return E1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return C1}}function L1(i,e){i.uniform1fv(this.addr,e)}function D1(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function q1(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function U1(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function O1(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function I1(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function N1(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F1(i,e){i.uniform1iv(this.addr,e)}function B1(i,e){i.uniform2iv(this.addr,e)}function z1(i,e){i.uniform3iv(this.addr,e)}function G1(i,e){i.uniform4iv(this.addr,e)}function H1(i,e){i.uniform1uiv(this.addr,e)}function k1(i,e){i.uniform2uiv(this.addr,e)}function V1(i,e){i.uniform3uiv(this.addr,e)}function W1(i,e){i.uniform4uiv(this.addr,e)}function j1(i,e,t){const n=this.cache,r=e.length,a=ka(t,r);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ju,a[o])}function X1(i,e,t){const n=this.cache,r=e.length,a=ka(t,r);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||eh,a[o])}function $1(i,e,t){const n=this.cache,r=e.length,a=ka(t,r);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||th,a[o])}function Y1(i,e,t){const n=this.cache,r=e.length,a=ka(t,r);vt(n,a)||(i.uniform1iv(this.addr,a),_t(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qu,a[o])}function K1(i){switch(i){case 5126:return L1;case 35664:return D1;case 35665:return q1;case 35666:return U1;case 35674:return O1;case 35675:return I1;case 35676:return N1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return G1;case 5125:return H1;case 36294:return k1;case 36295:return V1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return Y1}}class Z1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=P1(t.type)}}class J1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=K1(t.type)}}class Q1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function _c(i,e){i.seq.push(e),i.map[e.id]=e}function eg(i,e,t){const n=i.name,r=n.length;for(Po.lastIndex=0;;){const a=Po.exec(n),o=Po.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){_c(t,c===void 0?new Z1(s,i,e):new J1(s,i,e));break}else{let h=t.map[s];h===void 0&&(h=new Q1(s),_c(t,h)),t=h}}}class Ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);eg(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function xc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let tg=0;function ng(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function ig(i){switch(i){case Sn:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function yc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ng(i.getShaderSource(e),o)}else return r}function rg(i,e){const t=ig(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ag(i,e){let t;switch(e){case td:t="Linear";break;case nd:t="Reinhard";break;case id:t="OptimizedCineon";break;case rd:t="ACESFilmic";break;case ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function og(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function sg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function br(i){return i!==""}function Mc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ls(i){return i.replace(cg,hg)}const ug=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hg(i,e){let t=Oe[e];if(t===void 0){const n=ug.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ls(t)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(fg,dg)}function dg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ec(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function mg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case sr:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function vg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Na:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case ed:e="ENVMAP_BLENDING_ADD";break}return e}function _g(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xg(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=pg(t),c=mg(t),u=gg(t),h=vg(t),p=_g(t),d=t.isWebGL2?"":og(t),g=sg(a),_=r.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),f=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),f.length>0&&(f+=`
`)):(m=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),f=[d,Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==zn?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,rg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=ls(o),o=Mc(o,t),o=Sc(o,t),s=ls(s),s=Mc(s,t),s=Sc(s,t),o=bc(o),s=bc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,S=x+f+s,y=xc(r,r.VERTEX_SHADER,v),E=xc(r,r.FRAGMENT_SHADER,S);if(r.attachShader(_,y),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(y).trim(),O=r.getShaderInfoLog(E).trim();let I=!0,C=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,y,E);else{const D=yc(r,y,"vertex"),N=yc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+D+`
`+N)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||O==="")&&(C=!1);C&&(this.diagnostics={runnable:I,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(y),r.deleteShader(E);let b;this.getUniforms=function(){return b===void 0&&(b=new Ea(r,_)),b};let T;return this.getAttributes=function(){return T===void 0&&(T=lg(r,_)),T},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=E,this}let yg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sg(e),t.set(e,n)),n}}class Sg{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}}function bg(i,e,t,n,r,a,o){const s=new Is,l=new Mg,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,O,I,C){const D=I.fog,N=C.geometry,G=M.isMeshStandardMaterial?I.environment:null,F=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),H=F&&F.mapping===Fa?F.image.height:null,V=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const W=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,B=W!==void 0?W.length:0;let j=0;N.morphAttributes.position!==void 0&&(j=1),N.morphAttributes.normal!==void 0&&(j=2),N.morphAttributes.color!==void 0&&(j=3);let ne,re,se,pe;if(V){const dn=Nt[V];ne=dn.vertexShader,re=dn.fragmentShader}else ne=M.vertexShader,re=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),pe=l.getFragmentShaderID(M);const k=i.getRenderTarget(),te=C.isInstancedMesh===!0,Me=!!M.map,Re=!!M.matcap,_e=!!F,q=!!M.aoMap,le=!!M.lightMap,K=!!M.bumpMap,ue=!!M.normalMap,ie=!!M.displacementMap,we=!!M.emissiveMap,xe=!!M.metalnessMap,Se=!!M.roughnessMap,De=M.anisotropy>0,ke=M.clearcoat>0,it=M.iridescence>0,L=M.sheen>0,A=M.transmission>0,J=De&&!!M.anisotropyMap,de=ke&&!!M.clearcoatMap,fe=ke&&!!M.clearcoatNormalMap,U=ke&&!!M.clearcoatRoughnessMap,oe=it&&!!M.iridescenceMap,he=it&&!!M.iridescenceThicknessMap,Y=L&&!!M.sheenColorMap,Te=L&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,Ce=!!M.specularColorMap,Ae=!!M.specularIntensityMap,be=A&&!!M.transmissionMap,qe=A&&!!M.thicknessMap,We=!!M.gradientMap,z=!!M.alphaMap,ve=M.alphaTest>0,Z=!!M.alphaHash,me=!!M.extensions,ye=!!N.attributes.uv1,Xe=!!N.attributes.uv2,ot=!!N.attributes.uv3;return{isWebGL2:u,shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:re,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:te,instancingColor:te&&C.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Sn,map:Me,matcap:Re,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:H,aoMap:q,lightMap:le,bumpMap:K,normalMap:ue,displacementMap:p&&ie,emissiveMap:we,normalMapObjectSpace:ue&&M.normalMapType===yd,normalMapTangentSpace:ue&&M.normalMapType===Us,metalnessMap:xe,roughnessMap:Se,anisotropy:De,anisotropyMap:J,clearcoat:ke,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:U,iridescence:it,iridescenceMap:oe,iridescenceThicknessMap:he,sheen:L,sheenColorMap:Y,sheenRoughnessMap:Te,specularMap:Pe,specularColorMap:Ce,specularIntensityMap:Ae,transmission:A,transmissionMap:be,thicknessMap:qe,gradientMap:We,opaque:M.transparent===!1&&M.blending===ti,alphaMap:z,alphaTest:ve,alphaHash:Z,combine:M.combine,mapUv:Me&&_(M.map.channel),aoMapUv:q&&_(M.aoMap.channel),lightMapUv:le&&_(M.lightMap.channel),bumpMapUv:K&&_(M.bumpMap.channel),normalMapUv:ue&&_(M.normalMap.channel),displacementMapUv:ie&&_(M.displacementMap.channel),emissiveMapUv:we&&_(M.emissiveMap.channel),metalnessMapUv:xe&&_(M.metalnessMap.channel),roughnessMapUv:Se&&_(M.roughnessMap.channel),anisotropyMapUv:J&&_(M.anisotropyMap.channel),clearcoatMapUv:de&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(M.sheenRoughnessMap.channel),specularMapUv:Pe&&_(M.specularMap.channel),specularColorMapUv:Ce&&_(M.specularColorMap.channel),specularIntensityMapUv:Ae&&_(M.specularIntensityMap.channel),transmissionMapUv:be&&_(M.transmissionMap.channel),thicknessMapUv:qe&&_(M.thicknessMap.channel),alphaMapUv:z&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||De),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:Xe,vertexUv3s:ot,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(Me||z),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:j,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:zn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ft,flipSided:M.side===Ct,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)w.push(O),w.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(x(w,M),v(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function x(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),M.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),M.push(s.mask)}function S(M){const w=g[M.type];let O;if(w){const I=Nt[w];O=za.clone(I.uniforms)}else O=M.uniforms;return O}function y(M,w){let O;for(let I=0,C=c.length;I<C;I++){const D=c[I];if(D.cacheKey===w){O=D,++O.usedTimes;break}}return O===void 0&&(O=new xg(i,w,M,a),c.push(O)),O}function E(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function b(M){l.remove(M)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:T}}function Eg(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function wg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,d,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function s(h,p,d,g,_,m){const f=o(h,p,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?r.push(f):t.push(f)}function l(h,p,d,g,_,m){const f=o(h,p,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,p){t.length>1&&t.sort(h||wg),n.length>1&&n.sort(p||wc),r.length>1&&r.sort(p||wc)}function u(){for(let h=e,p=i.length;h<p;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function Tg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Tc,i.set(n,[o])):r>=a.length?(o=new Tc,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ag(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Rg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cg=0;function Pg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lg(i,e){const t=new Ag,n=Rg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new P);const a=new P,o=new Qe,s=new Qe;function l(u,h){let p=0,d=0,g=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let _=0,m=0,f=0,x=0,v=0,S=0,y=0,E=0,b=0,T=0;u.sort(Pg);const M=h===!0?Math.PI:1;for(let O=0,I=u.length;O<I;O++){const C=u[O],D=C.color,N=C.intensity,G=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=D.r*N*M,d+=D.g*N*M,g+=D.b*N*M;else if(C.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(C.sh.coefficients[H],N);else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*M),C.castShadow){const V=C.shadow,W=n.get(C);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,r.directionalShadow[_]=W,r.directionalShadowMap[_]=F,r.directionalShadowMatrix[_]=C.shadow.matrix,S++}r.directional[_]=H,_++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(D).multiplyScalar(N*M),H.distance=G,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,r.spot[f]=H;const V=C.shadow;if(C.map&&(r.spotLightMap[b]=C.map,b++,V.updateMatrices(C),C.castShadow&&T++),r.spotLightMatrix[f]=V.matrix,C.castShadow){const W=n.get(C);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,r.spotShadow[f]=W,r.spotShadowMap[f]=F,E++}f++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(D).multiplyScalar(N),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),r.rectArea[x]=H,x++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity*M),H.distance=C.distance,H.decay=C.decay,C.castShadow){const V=C.shadow,W=n.get(C);W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,r.pointShadow[m]=W,r.pointShadowMap[m]=F,r.pointShadowMatrix[m]=C.shadow.matrix,y++}r.point[m]=H,m++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(N*M),H.groundColor.copy(C.groundColor).multiplyScalar(N*M),r.hemi[v]=H,v++}}x>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=d,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==x||w.hemiLength!==v||w.numDirectionalShadows!==S||w.numPointShadows!==y||w.numSpotShadows!==E||w.numSpotMaps!==b)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=E+b-T,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=T,w.directionalLength=_,w.pointLength=m,w.spotLength=f,w.rectAreaLength=x,w.hemiLength=v,w.numDirectionalShadows=S,w.numPointShadows=y,w.numSpotShadows=E,w.numSpotMaps=b,r.version=Cg++)}function c(u,h){let p=0,d=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const S=u[x];if(S.isDirectionalLight){const y=r.directional[p];y.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(f),p++}else if(S.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const y=r.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),s.identity(),o.copy(S.matrixWorld),o.premultiply(f),s.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),_++}else if(S.isPointLight){const y=r.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(f),d++}else if(S.isHemisphereLight){const y=r.hemi[m];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Ac(i,e){const t=new Lg(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function o(h){n.push(h)}function s(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Dg(i,e){let t=new WeakMap;function n(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Ac(i,e),t.set(a,[l])):o>=s.length?(l=new Ac(i,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class qg extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ug extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ng(i,e,t){let n=new Ha;const r=new ce,a=new ce,o=new ht,s=new qg({depthPacking:xd}),l=new Ug,c={},u=t.maxTextureSize,h={[ri]:Ct,[Ct]:ri,[Ft]:Ft},p=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Og,fragmentShader:Ig}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new et;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let f=this.type;this.render=function(y,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Bn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const I=f!==qn&&this.type===qn,C=f===qn&&this.type!==qn;for(let D=0,N=y.length;D<N;D++){const G=y[D],F=G.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const H=F.getFrameExtents();if(r.multiply(H),a.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/H.x),r.x=a.x*H.x,F.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/H.y),r.y=a.y*H.y,F.mapSize.y=a.y)),F.map===null||I===!0||C===!0){const W=this.type!==qn?{minFilter:Ut,magFilter:Ut}:{};F.map!==null&&F.map.dispose(),F.map=new ai(r.x,r.y,W),F.map.texture.name=G.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const V=F.getViewportCount();for(let W=0;W<V;W++){const B=F.getViewport(W);o.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),O.viewport(o),F.updateMatrices(G,W),n=F.getFrustum(),S(E,b,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===qn&&x(F,b),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,M,w)};function x(y,E){const b=e.update(_);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ai(r.x,r.y)),p.uniforms.shadow_pass.value=y.map.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(E,null,b,p,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(E,null,b,d,_,null)}function v(y,E,b,T){let M=null;const w=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(w!==void 0)M=w;else if(M=b.isPointLight===!0?l:s,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=M.uuid,I=E.uuid;let C=c[O];C===void 0&&(C={},c[O]=C);let D=C[I];D===void 0&&(D=M.clone(),C[I]=D),M=D}if(M.visible=E.visible,M.wireframe=E.wireframe,T===qn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=b}return M}function S(y,E,b,T,M){if(y.visible===!1)return;if(y.layers.test(E.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===qn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const I=e.update(y),C=y.material;if(Array.isArray(C)){const D=I.groups;for(let N=0,G=D.length;N<G;N++){const F=D[N],H=C[F.materialIndex];if(H&&H.visible){const V=v(y,H,T,M);i.renderBufferDirect(b,null,I,V,y,F)}}}else if(C.visible){const D=v(y,C,T,M);i.renderBufferDirect(b,null,I,D,y,null)}}const O=y.children;for(let I=0,C=O.length;I<C;I++)S(O[I],E,b,T,M)}}function Fg(i,e,t){const n=t.isWebGL2;function r(){let z=!1;const ve=new ht;let Z=null;const me=new ht(0,0,0,0);return{setMask:function(ye){Z!==ye&&!z&&(i.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){z=ye},setClear:function(ye,Xe,ot,xt,dn){dn===!0&&(ye*=xt,Xe*=xt,ot*=xt),ve.set(ye,Xe,ot,xt),me.equals(ve)===!1&&(i.clearColor(ye,Xe,ot,xt),me.copy(ve))},reset:function(){z=!1,Z=null,me.set(-1,0,0,0)}}}function a(){let z=!1,ve=null,Z=null,me=null;return{setTest:function(ye){ye?k(i.DEPTH_TEST):te(i.DEPTH_TEST)},setMask:function(ye){ve!==ye&&!z&&(i.depthMask(ye),ve=ye)},setFunc:function(ye){if(Z!==ye){switch(ye){case jf:i.depthFunc(i.NEVER);break;case Xf:i.depthFunc(i.ALWAYS);break;case $f:i.depthFunc(i.LESS);break;case Qo:i.depthFunc(i.LEQUAL);break;case Yf:i.depthFunc(i.EQUAL);break;case Kf:i.depthFunc(i.GEQUAL);break;case Zf:i.depthFunc(i.GREATER);break;case Jf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ye}},setLocked:function(ye){z=ye},setClear:function(ye){me!==ye&&(i.clearDepth(ye),me=ye)},reset:function(){z=!1,ve=null,Z=null,me=null}}}function o(){let z=!1,ve=null,Z=null,me=null,ye=null,Xe=null,ot=null,xt=null,dn=null;return{setTest:function(ct){z||(ct?k(i.STENCIL_TEST):te(i.STENCIL_TEST))},setMask:function(ct){ve!==ct&&!z&&(i.stencilMask(ct),ve=ct)},setFunc:function(ct,pn,Pt){(Z!==ct||me!==pn||ye!==Pt)&&(i.stencilFunc(ct,pn,Pt),Z=ct,me=pn,ye=Pt)},setOp:function(ct,pn,Pt){(Xe!==ct||ot!==pn||xt!==Pt)&&(i.stencilOp(ct,pn,Pt),Xe=ct,ot=pn,xt=Pt)},setLocked:function(ct){z=ct},setClear:function(ct){dn!==ct&&(i.clearStencil(ct),dn=ct)},reset:function(){z=!1,ve=null,Z=null,me=null,ye=null,Xe=null,ot=null,xt=null,dn=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,h=new WeakMap;let p={},d={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,y=null,E=null,b=null,T=null,M=!1,w=null,O=null,I=null,C=null,D=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=F>=1):H.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=F>=2);let V=null,W={};const B=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ne=new ht().fromArray(B),re=new ht().fromArray(j);function se(z,ve,Z,me){const ye=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(z,Xe),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<Z;ot++)n&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ve+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return Xe}const pe={};pe[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),k(i.DEPTH_TEST),l.setFunc(Qo),ie(!1),we(fl),k(i.CULL_FACE),K(Bn);function k(z){p[z]!==!0&&(i.enable(z),p[z]=!0)}function te(z){p[z]!==!1&&(i.disable(z),p[z]=!1)}function Me(z,ve){return d[z]!==ve?(i.bindFramebuffer(z,ve),d[z]=ve,n&&(z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function Re(z,ve){let Z=_,me=!1;if(z)if(Z=g.get(ve),Z===void 0&&(Z=[],g.set(ve,Z)),z.isWebGLMultipleRenderTargets){const ye=z.texture;if(Z.length!==ye.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,ot=ye.length;Xe<ot;Xe++)Z[Xe]=i.COLOR_ATTACHMENT0+Xe;Z.length=ye.length,me=!0}}else Z[0]!==i.COLOR_ATTACHMENT0&&(Z[0]=i.COLOR_ATTACHMENT0,me=!0);else Z[0]!==i.BACK&&(Z[0]=i.BACK,me=!0);me&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function _e(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const q={[Qi]:i.FUNC_ADD,[Of]:i.FUNC_SUBTRACT,[If]:i.FUNC_REVERSE_SUBTRACT};if(n)q[gl]=i.MIN,q[vl]=i.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(q[gl]=z.MIN_EXT,q[vl]=z.MAX_EXT)}const le={[Nf]:i.ZERO,[Ff]:i.ONE,[Bf]:i.SRC_COLOR,[Lu]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[kf]:i.DST_COLOR,[Gf]:i.DST_ALPHA,[zf]:i.ONE_MINUS_SRC_COLOR,[Du]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA};function K(z,ve,Z,me,ye,Xe,ot,xt){if(z===Bn){f===!0&&(te(i.BLEND),f=!1);return}if(f===!1&&(k(i.BLEND),f=!0),z!==Uf){if(z!==x||xt!==M){if((v!==Qi||E!==Qi)&&(i.blendEquation(i.FUNC_ADD),v=Qi,E=Qi),xt)switch(z){case ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,y=null,b=null,T=null,x=z,M=xt}return}ye=ye||ve,Xe=Xe||Z,ot=ot||me,(ve!==v||ye!==E)&&(i.blendEquationSeparate(q[ve],q[ye]),v=ve,E=ye),(Z!==S||me!==y||Xe!==b||ot!==T)&&(i.blendFuncSeparate(le[Z],le[me],le[Xe],le[ot]),S=Z,y=me,b=Xe,T=ot),x=z,M=!1}function ue(z,ve){z.side===Ft?te(i.CULL_FACE):k(i.CULL_FACE);let Z=z.side===Ct;ve&&(Z=!Z),ie(Z),z.blending===ti&&z.transparent===!1?K(Bn):K(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),s.setMask(z.colorWrite);const me=z.stencilWrite;c.setTest(me),me&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Se(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(z){w!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),w=z)}function we(z){z!==Lf?(k(i.CULL_FACE),z!==O&&(z===fl?i.cullFace(i.BACK):z===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):te(i.CULL_FACE),O=z}function xe(z){z!==I&&(G&&i.lineWidth(z),I=z)}function Se(z,ve,Z){z?(k(i.POLYGON_OFFSET_FILL),(C!==ve||D!==Z)&&(i.polygonOffset(ve,Z),C=ve,D=Z)):te(i.POLYGON_OFFSET_FILL)}function De(z){z?k(i.SCISSOR_TEST):te(i.SCISSOR_TEST)}function ke(z){z===void 0&&(z=i.TEXTURE0+N-1),V!==z&&(i.activeTexture(z),V=z)}function it(z,ve,Z){Z===void 0&&(V===null?Z=i.TEXTURE0+N-1:Z=V);let me=W[Z];me===void 0&&(me={type:void 0,texture:void 0},W[Z]=me),(me.type!==z||me.texture!==ve)&&(V!==Z&&(i.activeTexture(Z),V=Z),i.bindTexture(z,ve||pe[z]),me.type=z,me.texture=ve)}function L(){const z=W[V];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){ne.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ne.copy(z))}function Ae(z){re.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),re.copy(z))}function be(z,ve){let Z=h.get(ve);Z===void 0&&(Z=new WeakMap,h.set(ve,Z));let me=Z.get(z);me===void 0&&(me=i.getUniformBlockIndex(ve,z.name),Z.set(z,me))}function qe(z,ve){const me=h.get(ve).get(z);u.get(ve)!==me&&(i.uniformBlockBinding(ve,me,z.__bindingPointIndex),u.set(ve,me))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},V=null,W={},d={},g=new WeakMap,_=[],m=null,f=!1,x=null,v=null,S=null,y=null,E=null,b=null,T=null,M=!1,w=null,O=null,I=null,C=null,D=null,ne.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:k,disable:te,bindFramebuffer:Me,drawBuffers:Re,useProgram:_e,setBlending:K,setMaterial:ue,setFlipSided:ie,setCullFace:we,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:De,activeTexture:ke,bindTexture:it,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:J,texImage2D:Te,texImage3D:Pe,updateUBOMapping:be,uniformBlockBinding:qe,texStorage2D:he,texStorage3D:Y,texSubImage2D:de,texSubImage3D:fe,compressedTexSubImage2D:U,compressedTexSubImage3D:oe,scissor:Ce,viewport:Ae,reset:We}}function Bg(i,e,t,n,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,A){return f?new OffscreenCanvas(L,A):Dr("canvas")}function v(L,A,J,de){let fe=1;if((L.width>de||L.height>de)&&(fe=de/Math.max(L.width,L.height)),fe<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const U=A?Pa:Math.floor,oe=U(fe*L.width),he=U(fe*L.height);_===void 0&&(_=x(oe,he));const Y=J?x(oe,he):_;return Y.width=oe,Y.height=he,Y.getContext("2d").drawImage(L,0,0,oe,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+oe+"x"+he+")."),Y}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function S(L){return os(L.width)&&os(L.height)}function y(L){return s?!1:L.wrapS!==cn||L.wrapT!==cn||L.minFilter!==Ut&&L.minFilter!==Kt}function E(L,A){return L.generateMipmaps&&A&&L.minFilter!==Ut&&L.minFilter!==Kt}function b(L){i.generateMipmap(L)}function T(L,A,J,de,fe=!1){if(s===!1)return A;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let U=A;return A===i.RED&&(J===i.FLOAT&&(U=i.R32F),J===i.HALF_FLOAT&&(U=i.R16F),J===i.UNSIGNED_BYTE&&(U=i.R8)),A===i.RG&&(J===i.FLOAT&&(U=i.RG32F),J===i.HALF_FLOAT&&(U=i.RG16F),J===i.UNSIGNED_BYTE&&(U=i.RG8)),A===i.RGBA&&(J===i.FLOAT&&(U=i.RGBA32F),J===i.HALF_FLOAT&&(U=i.RGBA16F),J===i.UNSIGNED_BYTE&&(U=de===Ne&&fe===!1?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)),(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function M(L,A,J){return E(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==Ut&&L.minFilter!==Kt?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function w(L){return L===Ut||L===_l||L===io?i.NEAREST:i.LINEAR}function O(L){const A=L.target;A.removeEventListener("dispose",O),C(A),A.isVideoTexture&&g.delete(A)}function I(L){const A=L.target;A.removeEventListener("dispose",I),N(A)}function C(L){const A=n.get(L);if(A.__webglInit===void 0)return;const J=L.source,de=m.get(J);if(de){const fe=de[A.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&D(L),Object.keys(de).length===0&&m.delete(J)}n.remove(L)}function D(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const J=L.source,de=m.get(J);delete de[A.__cacheKey],o.memory.textures--}function N(L){const A=L.texture,J=n.get(L),de=n.get(A);if(de.__webglTexture!==void 0&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++)i.deleteFramebuffer(J.__webglFramebuffer[fe]),J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[fe]);else{if(i.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let fe=0;fe<J.__webglColorRenderbuffer.length;fe++)J.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[fe]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let fe=0,U=A.length;fe<U;fe++){const oe=n.get(A[fe]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(A[fe])}n.remove(A),n.remove(L)}let G=0;function F(){G=0}function H(){const L=G;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),G+=1,L}function V(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function W(L,A){const J=n.get(L);if(L.isVideoTexture&&ke(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const de=L.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(J,L,A);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function B(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Me(J,L,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function j(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Me(J,L,A);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function ne(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Re(J,L,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const re={[ns]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[is]:i.MIRRORED_REPEAT},se={[Ut]:i.NEAREST,[_l]:i.NEAREST_MIPMAP_NEAREST,[io]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[od]:i.LINEAR_MIPMAP_NEAREST,[Pr]:i.LINEAR_MIPMAP_LINEAR},pe={[Sd]:i.NEVER,[Cd]:i.ALWAYS,[bd]:i.LESS,[wd]:i.LEQUAL,[Ed]:i.EQUAL,[Rd]:i.GEQUAL,[Td]:i.GREATER,[Ad]:i.NOTEQUAL};function k(L,A,J){if(J?(i.texParameteri(L,i.TEXTURE_WRAP_S,re[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,re[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,re[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,se[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,se[A.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==cn||A.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,w(A.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Ut&&A.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,pe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ut||A.minFilter!==io&&A.minFilter!==Pr||A.type===ei&&e.has("OES_texture_float_linear")===!1||s===!1&&A.type===lr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(L,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function te(L,A){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const de=A.source;let fe=m.get(de);fe===void 0&&(fe={},m.set(de,fe));const U=V(A);if(U!==L.__cacheKey){fe[U]===void 0&&(fe[U]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),fe[U].usedTimes++;const oe=fe[L.__cacheKey];oe!==void 0&&(fe[L.__cacheKey].usedTimes--,oe.usedTimes===0&&D(A)),L.__cacheKey=U,L.__webglTexture=fe[U].texture}return J}function Me(L,A,J){let de=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=i.TEXTURE_3D);const fe=te(L,A),U=A.source;t.bindTexture(de,L.__webglTexture,i.TEXTURE0+J);const oe=n.get(U);if(U.version!==oe.__version||fe===!0){t.activeTexture(i.TEXTURE0+J),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const he=y(A)&&S(A.image)===!1;let Y=v(A.image,he,!1,u);Y=it(A,Y);const Te=S(Y)||s,Pe=a.convert(A.format,A.colorSpace);let Ce=a.convert(A.type),Ae=T(A.internalFormat,Pe,Ce,A.colorSpace);k(de,A,Te);let be;const qe=A.mipmaps,We=s&&A.isVideoTexture!==!0,z=oe.__version===void 0||fe===!0,ve=M(A,Y,Te);if(A.isDepthTexture)Ae=i.DEPTH_COMPONENT,s?A.type===ei?Ae=i.DEPTH_COMPONENT32F:A.type===Qn?Ae=i.DEPTH_COMPONENT24:A.type===bi?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:A.type===ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ei&&Ae===i.DEPTH_COMPONENT&&A.type!==qs&&A.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Qn,Ce=a.convert(A.type)),A.format===cr&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,A.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=bi,Ce=a.convert(A.type))),z&&(We?t.texStorage2D(i.TEXTURE_2D,1,Ae,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Y.width,Y.height,0,Pe,Ce,null));else if(A.isDataTexture)if(qe.length>0&&Te){We&&z&&t.texStorage2D(i.TEXTURE_2D,ve,Ae,qe[0].width,qe[0].height);for(let Z=0,me=qe.length;Z<me;Z++)be=qe[Z],We?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,be.width,be.height,Pe,Ce,be.data):t.texImage2D(i.TEXTURE_2D,Z,Ae,be.width,be.height,0,Pe,Ce,be.data);A.generateMipmaps=!1}else We?(z&&t.texStorage2D(i.TEXTURE_2D,ve,Ae,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,Pe,Ce,Y.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Y.width,Y.height,0,Pe,Ce,Y.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){We&&z&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ae,qe[0].width,qe[0].height,Y.depth);for(let Z=0,me=qe.length;Z<me;Z++)be=qe[Z],A.format!==un?Pe!==null?We?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,be.width,be.height,Y.depth,Pe,be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ae,be.width,be.height,Y.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,be.width,be.height,Y.depth,Pe,Ce,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ae,be.width,be.height,Y.depth,0,Pe,Ce,be.data)}else{We&&z&&t.texStorage2D(i.TEXTURE_2D,ve,Ae,qe[0].width,qe[0].height);for(let Z=0,me=qe.length;Z<me;Z++)be=qe[Z],A.format!==un?Pe!==null?We?t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,be.width,be.height,Pe,be.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Ae,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,be.width,be.height,Pe,Ce,be.data):t.texImage2D(i.TEXTURE_2D,Z,Ae,be.width,be.height,0,Pe,Ce,be.data)}else if(A.isDataArrayTexture)We?(z&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ae,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Pe,Ce,Y.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Y.width,Y.height,Y.depth,0,Pe,Ce,Y.data);else if(A.isData3DTexture)We?(z&&t.texStorage3D(i.TEXTURE_3D,ve,Ae,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Pe,Ce,Y.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Y.width,Y.height,Y.depth,0,Pe,Ce,Y.data);else if(A.isFramebufferTexture){if(z)if(We)t.texStorage2D(i.TEXTURE_2D,ve,Ae,Y.width,Y.height);else{let Z=Y.width,me=Y.height;for(let ye=0;ye<ve;ye++)t.texImage2D(i.TEXTURE_2D,ye,Ae,Z,me,0,Pe,Ce,null),Z>>=1,me>>=1}}else if(qe.length>0&&Te){We&&z&&t.texStorage2D(i.TEXTURE_2D,ve,Ae,qe[0].width,qe[0].height);for(let Z=0,me=qe.length;Z<me;Z++)be=qe[Z],We?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Pe,Ce,be):t.texImage2D(i.TEXTURE_2D,Z,Ae,Pe,Ce,be);A.generateMipmaps=!1}else We?(z&&t.texStorage2D(i.TEXTURE_2D,ve,Ae,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,Ce,Y)):t.texImage2D(i.TEXTURE_2D,0,Ae,Pe,Ce,Y);E(A,Te)&&b(de),oe.__version=U.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Re(L,A,J){if(A.image.length!==6)return;const de=te(L,A),fe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const U=n.get(fe);if(fe.version!==U.__version||de===!0){t.activeTexture(i.TEXTURE0+J),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const oe=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,Y=[];for(let Z=0;Z<6;Z++)!oe&&!he?Y[Z]=v(A.image[Z],!1,!0,c):Y[Z]=he?A.image[Z].image:A.image[Z],Y[Z]=it(A,Y[Z]);const Te=Y[0],Pe=S(Te)||s,Ce=a.convert(A.format,A.colorSpace),Ae=a.convert(A.type),be=T(A.internalFormat,Ce,Ae,A.colorSpace),qe=s&&A.isVideoTexture!==!0,We=U.__version===void 0||de===!0;let z=M(A,Te,Pe);k(i.TEXTURE_CUBE_MAP,A,Pe);let ve;if(oe){qe&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,z,be,Te.width,Te.height);for(let Z=0;Z<6;Z++){ve=Y[Z].mipmaps;for(let me=0;me<ve.length;me++){const ye=ve[me];A.format!==un?Ce!==null?qe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,ye.width,ye.height,Ce,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,ye.width,ye.height,Ce,Ae,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,be,ye.width,ye.height,0,Ce,Ae,ye.data)}}}else{ve=A.mipmaps,qe&&We&&(ve.length>0&&z++,t.texStorage2D(i.TEXTURE_CUBE_MAP,z,be,Y[0].width,Y[0].height));for(let Z=0;Z<6;Z++)if(he){qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Y[Z].width,Y[Z].height,Ce,Ae,Y[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,be,Y[Z].width,Y[Z].height,0,Ce,Ae,Y[Z].data);for(let me=0;me<ve.length;me++){const Xe=ve[me].image[Z].image;qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Xe.width,Xe.height,Ce,Ae,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,be,Xe.width,Xe.height,0,Ce,Ae,Xe.data)}}else{qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,Ae,Y[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,be,Ce,Ae,Y[Z]);for(let me=0;me<ve.length;me++){const ye=ve[me];qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Ce,Ae,ye.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,be,Ce,Ae,ye.image[Z])}}}E(A,Pe)&&b(i.TEXTURE_CUBE_MAP),U.__version=fe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function _e(L,A,J,de,fe){const U=a.convert(J.format,J.colorSpace),oe=a.convert(J.type),he=T(J.internalFormat,U,oe,J.colorSpace);n.get(A).__hasExternalTextures||(fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,he,A.width,A.height,A.depth,0,U,oe,null):t.texImage2D(fe,0,he,A.width,A.height,0,U,oe,null)),t.bindFramebuffer(i.FRAMEBUFFER,L),De(A)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,fe,n.get(J).__webglTexture,0,Se(A)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,fe,n.get(J).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(L,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let de=i.DEPTH_COMPONENT16;if(J||De(A)){const fe=A.depthTexture;fe&&fe.isDepthTexture&&(fe.type===ei?de=i.DEPTH_COMPONENT32F:fe.type===Qn&&(de=i.DEPTH_COMPONENT24));const U=Se(A);De(A)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,U,de,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,U,de,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,de,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const de=Se(A);J&&De(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,A.width,A.height):De(A)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const de=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let fe=0;fe<de.length;fe++){const U=de[fe],oe=a.convert(U.format,U.colorSpace),he=a.convert(U.type),Y=T(U.internalFormat,oe,he,U.colorSpace),Te=Se(A);J&&De(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Y,A.width,A.height):De(A)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Y,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Y,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),W(A.depthTexture,0);const de=n.get(A.depthTexture).__webglTexture,fe=Se(A);if(A.depthTexture.format===Ei)De(A)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(A.depthTexture.format===cr)De(A)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function K(L){const A=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");le(A.__webglFramebuffer,L)}else if(J){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]=i.createRenderbuffer(),q(A.__webglDepthbuffer[de],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),q(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(L,A,J){const de=n.get(L);A!==void 0&&_e(de.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),J!==void 0&&K(L)}function ie(L){const A=L.texture,J=n.get(L),de=n.get(A);L.addEventListener("dispose",I),L.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=A.version,o.memory.textures++);const fe=L.isWebGLCubeRenderTarget===!0,U=L.isWebGLMultipleRenderTargets===!0,oe=S(L)||s;if(fe){J.__webglFramebuffer=[];for(let he=0;he<6;he++)J.__webglFramebuffer[he]=i.createFramebuffer()}else{if(J.__webglFramebuffer=i.createFramebuffer(),U)if(r.drawBuffers){const he=L.texture;for(let Y=0,Te=he.length;Y<Te;Y++){const Pe=n.get(he[Y]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&L.samples>0&&De(L)===!1){const he=U?A:[A];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Y=0;Y<he.length;Y++){const Te=he[Y];J.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Y]);const Pe=a.convert(Te.format,Te.colorSpace),Ce=a.convert(Te.type),Ae=T(Te.internalFormat,Pe,Ce,Te.colorSpace,L.isXRRenderTarget===!0),be=Se(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Ae,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,J.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),q(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),k(i.TEXTURE_CUBE_MAP,A,oe);for(let he=0;he<6;he++)_e(J.__webglFramebuffer[he],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he);E(A,oe)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){const he=L.texture;for(let Y=0,Te=he.length;Y<Te;Y++){const Pe=he[Y],Ce=n.get(Pe);t.bindTexture(i.TEXTURE_2D,Ce.__webglTexture),k(i.TEXTURE_2D,Pe,oe),_e(J.__webglFramebuffer,L,Pe,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D),E(Pe,oe)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(s?he=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,de.__webglTexture),k(he,A,oe),_e(J.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,he),E(A,oe)&&b(he),t.unbindTexture()}L.depthBuffer&&K(L)}function we(L){const A=S(L)||s,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let de=0,fe=J.length;de<fe;de++){const U=J[de];if(E(U,A)){const oe=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=n.get(U).__webglTexture;t.bindTexture(oe,he),b(oe),t.unbindTexture()}}}function xe(L){if(s&&L.samples>0&&De(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,de=L.height;let fe=i.COLOR_BUFFER_BIT;const U=[],oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(L),Y=L.isWebGLMultipleRenderTargets===!0;if(Y)for(let Te=0;Te<A.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Te=0;Te<A.length;Te++){U.push(i.COLOR_ATTACHMENT0+Te),L.depthBuffer&&U.push(oe);const Pe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Pe===!1&&(L.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Y&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[Te]),Pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[oe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[oe])),Y){const Ce=n.get(A[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,J,de,0,0,J,de,fe,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let Te=0;Te<A.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,he.__webglColorRenderbuffer[Te]);const Pe=n.get(A[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Se(L){return Math.min(h,L.samples)}function De(L){const A=n.get(L);return s&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ke(L){const A=o.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function it(L,A){const J=L.colorSpace,de=L.format,fe=L.type;return L.isCompressedTexture===!0||L.format===as||J!==Sn&&J!==Ti&&(J===Ne?s===!1?e.has("EXT_sRGB")===!0&&de===un?(L.format=as,L.minFilter=Kt,L.generateMipmaps=!1):A=ku.sRGBToLinear(A):(de!==un||fe!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=ne,this.rebindTextures=ue,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=De}function zg(i,e,t){const n=t.isWebGL2;function r(a,o=Ti){let s;if(a===ni)return i.UNSIGNED_BYTE;if(a===Ou)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Iu)return i.UNSIGNED_SHORT_5_5_5_1;if(a===sd)return i.BYTE;if(a===ld)return i.SHORT;if(a===qs)return i.UNSIGNED_SHORT;if(a===Uu)return i.INT;if(a===Qn)return i.UNSIGNED_INT;if(a===ei)return i.FLOAT;if(a===lr)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===cd)return i.ALPHA;if(a===un)return i.RGBA;if(a===ud)return i.LUMINANCE;if(a===hd)return i.LUMINANCE_ALPHA;if(a===Ei)return i.DEPTH_COMPONENT;if(a===cr)return i.DEPTH_STENCIL;if(a===as)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===fd)return i.RED;if(a===Nu)return i.RED_INTEGER;if(a===dd)return i.RG;if(a===Fu)return i.RG_INTEGER;if(a===Bu)return i.RGBA_INTEGER;if(a===ro||a===ao||a===oo||a===so)if(o===Ne)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===so)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===xl||a===yl||a===Ml||a===Sl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===yl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===pd)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===bl||a===El)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===bl)return o===Ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===El)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===wl||a===Tl||a===Al||a===Rl||a===Cl||a===Pl||a===Ll||a===Dl||a===ql||a===Ul||a===Ol||a===Il||a===Nl||a===Fl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===wl)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Tl)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Al)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Rl)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Cl)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Pl)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ll)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Dl)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ql)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ul)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ol)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Il)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Nl)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Fl)return o===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===lo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===lo)return o===Ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===md||a===Bl||a===zl||a===Gl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===lo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Gl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===bi?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class Gg extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hg={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Hg)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class kg extends zt{constructor(e,t,n,r,a,o,s,l,c,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=Qn),n===void 0&&u===cr&&(n=bi),super(null,r,a,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vg extends Gn{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const x=[],v=[],S=new Zt;S.layers.enable(1),S.viewport=new ht;const y=new Zt;y.layers.enable(2),y.viewport=new ht;const E=[S,y],b=new Gg;b.layers.enable(1),b.layers.enable(2);let T=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=x[B];return j===void 0&&(j=new Lo,x[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=x[B];return j===void 0&&(j=new Lo,x[B]=j),j.getGripSpace()},this.getHand=function(B){let j=x[B];return j===void 0&&(j=new Lo,x[B]=j),j.getHandSpace()};function w(B){const j=v.indexOf(B.inputSource);if(j===-1)return;const ne=x[j];ne!==void 0&&(ne.update(B.inputSource,B.frame,c||o),ne.dispatchEvent({type:B.type,data:B.inputSource}))}function O(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",I);for(let B=0;B<x.length;B++){const j=v[B];j!==null&&(v[B]=null,x[B].disconnect(j))}T=null,M=null,e.setRenderTarget(m),d=null,p=null,h=null,r=null,f=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",O),r.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:d}),f=new ai(d.framebufferWidth,d.framebufferHeight,{format:un,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ne=null,re=null;_.depth&&(re=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=_.stencil?cr:Ei,ne=_.stencil?bi:Qn);const se={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:a};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(se),r.updateRenderState({layers:[p]}),f=new ai(p.textureWidth,p.textureHeight,{format:un,type:ni,depthTexture:new kg(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const pe=e.properties.get(f);pe.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),W.setContext(r),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(B){for(let j=0;j<B.removed.length;j++){const ne=B.removed[j],re=v.indexOf(ne);re>=0&&(v[re]=null,x[re].disconnect(ne))}for(let j=0;j<B.added.length;j++){const ne=B.added[j];let re=v.indexOf(ne);if(re===-1){for(let pe=0;pe<x.length;pe++)if(pe>=v.length){v.push(ne),re=pe;break}else if(v[pe]===null){v[pe]=ne,re=pe;break}if(re===-1)break}const se=x[re];se&&se.connect(ne)}}const C=new P,D=new P;function N(B,j,ne){C.setFromMatrixPosition(j.matrixWorld),D.setFromMatrixPosition(ne.matrixWorld);const re=C.distanceTo(D),se=j.projectionMatrix.elements,pe=ne.projectionMatrix.elements,k=se[14]/(se[10]-1),te=se[14]/(se[10]+1),Me=(se[9]+1)/se[5],Re=(se[9]-1)/se[5],_e=(se[8]-1)/se[0],q=(pe[8]+1)/pe[0],le=k*_e,K=k*q,ue=re/(-_e+q),ie=ue*-_e;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ie),B.translateZ(ue),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const we=k+ue,xe=te+ue,Se=le-ie,De=K+(re-ie),ke=Me*te/xe*we,it=Re*te/xe*we;B.projectionMatrix.makePerspective(Se,De,ke,it,we,xe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function G(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;b.near=y.near=S.near=B.near,b.far=y.far=S.far=B.far,(T!==b.near||M!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,M=b.far);const j=B.parent,ne=b.cameras;G(b,j);for(let re=0;re<ne.length;re++)G(ne[re],j);ne.length===2?N(b,S,y):b.projectionMatrix.copy(S.projectionMatrix),F(B,b,j)};function F(B,j,ne){ne===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(ne.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const re=B.children;for(let se=0,pe=re.length;se<pe;se++)re[se].updateMatrixWorld(!0);B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Lr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(B){l=B,p!==null&&(p.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let H=null;function V(B,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let re=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,re=!0);for(let se=0;se<ne.length;se++){const pe=ne[se];let k=null;if(d!==null)k=d.getViewport(pe);else{const Me=h.getViewSubImage(p,pe);k=Me.viewport,se===0&&(e.setRenderTargetTextures(f,Me.colorTexture,p.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(f))}let te=E[se];te===void 0&&(te=new Zt,te.layers.enable(se),te.viewport=new ht,E[se]=te),te.matrix.fromArray(pe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(pe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(k.x,k.y,k.width,k.height),se===0&&(b.matrix.copy(te.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),re===!0&&b.cameras.push(te)}}for(let ne=0;ne<x.length;ne++){const re=v[ne],se=x[ne];re!==null&&se!==void 0&&se.update(re,j,c||o)}H&&H(B,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const W=new Zu;W.setAnimationLoop(V),this.setAnimationLoop=function(B){H=B},this.dispose=function(){}}}function Wg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Yu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),h(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,S)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&s(m,f)):f.isPointsMaterial?l(m,f,x,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function s(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jg(i,e,t,n){let r={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const S=v.program;n.uniformBlockBinding(x,S)}function c(x,v){let S=r[x.id];S===void 0&&(g(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",m));const y=v.program;n.updateUBOMapping(x,y);const E=e.render.frame;a[x.id]!==E&&(p(x),a[x.id]=E)}function u(x){const v=h();x.__bindingPointIndex=v;const S=i.createBuffer(),y=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=r[x.id],S=x.uniforms,y=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,b=S.length;E<b;E++){const T=S[E];if(d(T,E,y)===!0){const M=T.__offset,w=Array.isArray(T.value)?T.value:[T.value];let O=0;for(let I=0;I<w.length;I++){const C=w[I],D=_(C);typeof C=="number"?(T.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,M+O,T.__data)):C.isMatrix3?(T.__data[0]=C.elements[0],T.__data[1]=C.elements[1],T.__data[2]=C.elements[2],T.__data[3]=C.elements[0],T.__data[4]=C.elements[3],T.__data[5]=C.elements[4],T.__data[6]=C.elements[5],T.__data[7]=C.elements[0],T.__data[8]=C.elements[6],T.__data[9]=C.elements[7],T.__data[10]=C.elements[8],T.__data[11]=C.elements[0]):(C.toArray(T.__data,O),O+=D.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,T.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,v,S){const y=x.value;if(S[v]===void 0){if(typeof y=="number")S[v]=y;else{const E=Array.isArray(y)?y:[y],b=[];for(let T=0;T<E.length;T++)b.push(E[T].clone());S[v]=b}return!0}else if(typeof y=="number"){if(S[v]!==y)return S[v]=y,!0}else{const E=Array.isArray(S[v])?S[v]:[S[v]],b=Array.isArray(y)?y:[y];for(let T=0;T<E.length;T++){const M=E[T];if(M.equals(b[T])===!1)return M.copy(b[T]),!0}}return!1}function g(x){const v=x.uniforms;let S=0;const y=16;let E=0;for(let b=0,T=v.length;b<T;b++){const M=v[b],w={boundary:0,storage:0},O=Array.isArray(M.value)?M.value:[M.value];for(let I=0,C=O.length;I<C;I++){const D=O[I],N=_(D);w.boundary+=N.boundary,w.storage+=N.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,b>0){E=S%y;const I=y-E;E!==0&&I-w.boundary<0&&(S+=y-E,M.__offset=S)}S+=w.storage}return E=S%y,E>0&&(S+=y-E),x.__size=S,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function f(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},a={}}return{bind:l,update:c,dispose:f}}function Xg(){const i=Dr("canvas");return i.style.display="block",i}class nh{constructor(e={}){const{canvas:t=Xg(),context:n=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ne,this.useLegacyLights=!0,this.toneMapping=zn,this.toneMappingExposure=1;const v=this;let S=!1,y=0,E=0,b=null,T=-1,M=null;const w=new ht,O=new ht;let I=null;const C=new Fe(0);let D=0,N=t.width,G=t.height,F=1,H=null,V=null;const W=new ht(0,0,N,G),B=new ht(0,0,N,G);let j=!1;const ne=new Ha;let re=!1,se=!1,pe=null;const k=new Qe,te=new ce,Me=new P,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return b===null?F:1}let q=n;function le(R,$){for(let Q=0;Q<R.length;Q++){const X=R[Q],ee=t.getContext(X,$);if(ee!==null)return ee}return null}try{const R={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ds}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",me,!1),q===null){const $=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&$.shift(),q=le($,R),q===null)throw le($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let K,ue,ie,we,xe,Se,De,ke,it,L,A,J,de,fe,U,oe,he,Y,Te,Pe,Ce,Ae,be,qe;function We(){K=new i1(q),ue=new Z0(q,K,e),K.init(ue),Ae=new zg(q,K,ue),ie=new Fg(q,K,ue),we=new o1(q),xe=new Eg,Se=new Bg(q,K,ie,xe,ue,Ae,we),De=new Q0(v),ke=new n1(v),it=new gp(q,ue),be=new Y0(q,K,it,ue),L=new r1(q,it,we,be),A=new u1(q,L,it,we),Te=new c1(q,ue,Se),oe=new J0(xe),J=new bg(v,De,ke,K,ue,be,oe),de=new Wg(v,xe),fe=new Tg,U=new Dg(K,ue),Y=new $0(v,De,ke,ie,A,p,l),he=new Ng(v,A,ue),qe=new jg(q,we,ue,ie),Pe=new K0(q,K,we,ue),Ce=new a1(q,K,we,ue),we.programs=J.programs,v.capabilities=ue,v.extensions=K,v.properties=xe,v.renderLists=fe,v.shadowMap=he,v.state=ie,v.info=we}We();const z=new Vg(v,q);this.xr=z,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=K.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=K.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(N,G,!1))},this.getSize=function(R){return R.set(N,G)},this.setSize=function(R,$,Q=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,G=$,t.width=Math.floor(R*F),t.height=Math.floor($*F),Q===!0&&(t.style.width=R+"px",t.style.height=$+"px"),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(N*F,G*F).floor()},this.setDrawingBufferSize=function(R,$,Q){N=R,G=$,F=Q,t.width=Math.floor(R*Q),t.height=Math.floor($*Q),this.setViewport(0,0,R,$)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(W)},this.setViewport=function(R,$,Q,X){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,$,Q,X),ie.viewport(w.copy(W).multiplyScalar(F).floor())},this.getScissor=function(R){return R.copy(B)},this.setScissor=function(R,$,Q,X){R.isVector4?B.set(R.x,R.y,R.z,R.w):B.set(R,$,Q,X),ie.scissor(O.copy(B).multiplyScalar(F).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(R){ie.setScissorTest(j=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){V=R},this.getClearColor=function(R){return R.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(R=!0,$=!0,Q=!0){let X=0;if(R){let ee=!1;if(b!==null){const Ee=b.texture.format;ee=Ee===Bu||Ee===Fu||Ee===Nu}if(ee){const Ee=b.texture.type,Le=Ee===ni||Ee===Qn||Ee===qs||Ee===bi||Ee===Ou||Ee===Iu,Ue=Y.getClearColor(),Ie=Y.getClearAlpha(),Ve=Ue.r,Be=Ue.g,ze=Ue.b;Le?(d[0]=Ve,d[1]=Be,d[2]=ze,d[3]=Ie,q.clearBufferuiv(q.COLOR,0,d)):(g[0]=Ve,g[1]=Be,g[2]=ze,g[3]=Ie,q.clearBufferiv(q.COLOR,0,g))}else X|=q.COLOR_BUFFER_BIT}$&&(X|=q.DEPTH_BUFFER_BIT),Q&&(X|=q.STENCIL_BUFFER_BIT),q.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",me,!1),fe.dispose(),U.dispose(),xe.dispose(),De.dispose(),ke.dispose(),A.dispose(),be.dispose(),qe.dispose(),J.dispose(),z.dispose(),z.removeEventListener("sessionstart",ct),z.removeEventListener("sessionend",pn),pe&&(pe.dispose(),pe=null),Pt.stop()};function ve(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=we.autoReset,$=he.enabled,Q=he.autoUpdate,X=he.needsUpdate,ee=he.type;We(),we.autoReset=R,he.enabled=$,he.autoUpdate=Q,he.needsUpdate=X,he.type=ee}function me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ye(R){const $=R.target;$.removeEventListener("dispose",ye),Xe($)}function Xe(R){ot(R),xe.remove(R)}function ot(R){const $=xe.get(R).programs;$!==void 0&&($.forEach(function(Q){J.releaseProgram(Q)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,Q,X,ee,Ee){$===null&&($=Re);const Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Ue=of(R,$,Q,X,ee);ie.setMaterial(X,Le);let Ie=Q.index,Ve=1;X.wireframe===!0&&(Ie=L.getWireframeAttribute(Q),Ve=2);const Be=Q.drawRange,ze=Q.attributes.position;let ut=Be.start*Ve,ft=(Be.start+Be.count)*Ve;Ee!==null&&(ut=Math.max(ut,Ee.start*Ve),ft=Math.min(ft,(Ee.start+Ee.count)*Ve)),Ie!==null?(ut=Math.max(ut,0),ft=Math.min(ft,Ie.count)):ze!=null&&(ut=Math.max(ut,0),ft=Math.min(ft,ze.count));const Qt=ft-ut;if(Qt<0||Qt===1/0)return;be.setup(ee,X,Ue,Q,Ie);let Tn,pt=Pe;if(Ie!==null&&(Tn=it.get(Ie),pt=Ce,pt.setIndex(Tn)),ee.isMesh)X.wireframe===!0?(ie.setLineWidth(X.wireframeLinewidth*_e()),pt.setMode(q.LINES)):pt.setMode(q.TRIANGLES);else if(ee.isLine){let je=X.linewidth;je===void 0&&(je=1),ie.setLineWidth(je*_e()),ee.isLineSegments?pt.setMode(q.LINES):ee.isLineLoop?pt.setMode(q.LINE_LOOP):pt.setMode(q.LINE_STRIP)}else ee.isPoints?pt.setMode(q.POINTS):ee.isSprite&&pt.setMode(q.TRIANGLES);if(ee.isInstancedMesh)pt.renderInstances(ut,Qt,ee.count);else if(Q.isInstancedBufferGeometry){const je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Qa=Math.min(Q.instanceCount,je);pt.renderInstances(ut,Qt,Qa)}else pt.render(ut,Qt)},this.compile=function(R,$){function Q(X,ee,Ee){X.transparent===!0&&X.side===Ft&&X.forceSinglePass===!1?(X.side=Ct,X.needsUpdate=!0,Br(X,ee,Ee),X.side=ri,X.needsUpdate=!0,Br(X,ee,Ee),X.side=Ft):Br(X,ee,Ee)}m=U.get(R),m.init(),x.push(m),R.traverseVisible(function(X){X.isLight&&X.layers.test($.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(v.useLegacyLights),R.traverse(function(X){const ee=X.material;if(ee)if(Array.isArray(ee))for(let Ee=0;Ee<ee.length;Ee++){const Le=ee[Ee];Q(Le,R,X)}else Q(ee,R,X)}),x.pop(),m=null};let xt=null;function dn(R){xt&&xt(R)}function ct(){Pt.stop()}function pn(){Pt.start()}const Pt=new Zu;Pt.setAnimationLoop(dn),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(R){xt=R,z.setAnimationLoop(R),R===null?Pt.stop():Pt.start()},z.addEventListener("sessionstart",ct),z.addEventListener("sessionend",pn),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera($),$=z.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,$,b),m=U.get(R,x.length),m.init(),x.push(m),k.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ne.setFromProjectionMatrix(k),se=this.localClippingEnabled,re=oe.init(this.clippingPlanes,se),_=fe.get(R,f.length),_.init(),f.push(_),rl(R,$,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,V),this.info.render.frame++,re===!0&&oe.beginShadows();const Q=m.state.shadowsArray;if(he.render(Q,R,$),re===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(_,R),m.setupLights(v.useLegacyLights),$.isArrayCamera){const X=$.cameras;for(let ee=0,Ee=X.length;ee<Ee;ee++){const Le=X[ee];al(_,R,Le,Le.viewport)}}else al(_,R,$);b!==null&&(Se.updateMultisampleRenderTarget(b),Se.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,$),be.resetDefaultState(),T=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function rl(R,$,Q,X){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ne.intersectsSprite(R)){X&&Me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(k);const Le=A.update(R),Ue=R.material;Ue.visible&&_.push(R,Le,Ue,Q,Me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ne.intersectsObject(R))){const Le=A.update(R),Ue=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Me.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Me.copy(Le.boundingSphere.center)),Me.applyMatrix4(R.matrixWorld).applyMatrix4(k)),Array.isArray(Ue)){const Ie=Le.groups;for(let Ve=0,Be=Ie.length;Ve<Be;Ve++){const ze=Ie[Ve],ut=Ue[ze.materialIndex];ut&&ut.visible&&_.push(R,Le,ut,Q,Me.z,ze)}}else Ue.visible&&_.push(R,Le,Ue,Q,Me.z,null)}}const Ee=R.children;for(let Le=0,Ue=Ee.length;Le<Ue;Le++)rl(Ee[Le],$,Q,X)}function al(R,$,Q,X){const ee=R.opaque,Ee=R.transmissive,Le=R.transparent;m.setupLightsView(Q),re===!0&&oe.setGlobalState(v.clippingPlanes,Q),Ee.length>0&&af(ee,Ee,$,Q),X&&ie.viewport(w.copy(X)),ee.length>0&&Fr(ee,$,Q),Ee.length>0&&Fr(Ee,$,Q),Le.length>0&&Fr(Le,$,Q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function af(R,$,Q,X){const ee=ue.isWebGL2;pe===null&&(pe=new ai(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?lr:ni,minFilter:Pr,samples:ee?4:0})),v.getDrawingBufferSize(te),ee?pe.setSize(te.x,te.y):pe.setSize(Pa(te.x),Pa(te.y));const Ee=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(C),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Le=v.toneMapping;v.toneMapping=zn,Fr(R,Q,X),Se.updateMultisampleRenderTarget(pe),Se.updateRenderTargetMipmap(pe);let Ue=!1;for(let Ie=0,Ve=$.length;Ie<Ve;Ie++){const Be=$[Ie],ze=Be.object,ut=Be.geometry,ft=Be.material,Qt=Be.group;if(ft.side===Ft&&ze.layers.test(X.layers)){const Tn=ft.side;ft.side=Ct,ft.needsUpdate=!0,ol(ze,Q,X,ut,ft,Qt),ft.side=Tn,ft.needsUpdate=!0,Ue=!0}}Ue===!0&&(Se.updateMultisampleRenderTarget(pe),Se.updateRenderTargetMipmap(pe)),v.setRenderTarget(Ee),v.setClearColor(C,D),v.toneMapping=Le}function Fr(R,$,Q){const X=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,Ee=R.length;ee<Ee;ee++){const Le=R[ee],Ue=Le.object,Ie=Le.geometry,Ve=X===null?Le.material:X,Be=Le.group;Ue.layers.test(Q.layers)&&ol(Ue,$,Q,Ie,Ve,Be)}}function ol(R,$,Q,X,ee,Ee){R.onBeforeRender(v,$,Q,X,ee,Ee),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(v,$,Q,X,R,Ee),ee.transparent===!0&&ee.side===Ft&&ee.forceSinglePass===!1?(ee.side=Ct,ee.needsUpdate=!0,v.renderBufferDirect(Q,$,X,ee,R,Ee),ee.side=ri,ee.needsUpdate=!0,v.renderBufferDirect(Q,$,X,ee,R,Ee),ee.side=Ft):v.renderBufferDirect(Q,$,X,ee,R,Ee),R.onAfterRender(v,$,Q,X,ee,Ee)}function Br(R,$,Q){$.isScene!==!0&&($=Re);const X=xe.get(R),ee=m.state.lights,Ee=m.state.shadowsArray,Le=ee.state.version,Ue=J.getParameters(R,ee.state,Ee,$,Q),Ie=J.getProgramCacheKey(Ue);let Ve=X.programs;X.environment=R.isMeshStandardMaterial?$.environment:null,X.fog=$.fog,X.envMap=(R.isMeshStandardMaterial?ke:De).get(R.envMap||X.environment),Ve===void 0&&(R.addEventListener("dispose",ye),Ve=new Map,X.programs=Ve);let Be=Ve.get(Ie);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===Le)return sl(R,Ue),Be}else Ue.uniforms=J.getUniforms(R),R.onBuild(Q,Ue,v),R.onBeforeCompile(Ue,v),Be=J.acquireProgram(Ue,Ie),Ve.set(Ie,Be),X.uniforms=Ue.uniforms;const ze=X.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ze.clippingPlanes=oe.uniform),sl(R,Ue),X.needsLights=lf(R),X.lightsStateVersion=Le,X.needsLights&&(ze.ambientLightColor.value=ee.state.ambient,ze.lightProbe.value=ee.state.probe,ze.directionalLights.value=ee.state.directional,ze.directionalLightShadows.value=ee.state.directionalShadow,ze.spotLights.value=ee.state.spot,ze.spotLightShadows.value=ee.state.spotShadow,ze.rectAreaLights.value=ee.state.rectArea,ze.ltc_1.value=ee.state.rectAreaLTC1,ze.ltc_2.value=ee.state.rectAreaLTC2,ze.pointLights.value=ee.state.point,ze.pointLightShadows.value=ee.state.pointShadow,ze.hemisphereLights.value=ee.state.hemi,ze.directionalShadowMap.value=ee.state.directionalShadowMap,ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ze.spotShadowMap.value=ee.state.spotShadowMap,ze.spotLightMatrix.value=ee.state.spotLightMatrix,ze.spotLightMap.value=ee.state.spotLightMap,ze.pointShadowMap.value=ee.state.pointShadowMap,ze.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ut=Be.getUniforms(),ft=Ea.seqWithValue(ut.seq,ze);return X.currentProgram=Be,X.uniformsList=ft,Be}function sl(R,$){const Q=xe.get(R);Q.outputColorSpace=$.outputColorSpace,Q.instancing=$.instancing,Q.skinning=$.skinning,Q.morphTargets=$.morphTargets,Q.morphNormals=$.morphNormals,Q.morphColors=$.morphColors,Q.morphTargetsCount=$.morphTargetsCount,Q.numClippingPlanes=$.numClippingPlanes,Q.numIntersection=$.numClipIntersection,Q.vertexAlphas=$.vertexAlphas,Q.vertexTangents=$.vertexTangents,Q.toneMapping=$.toneMapping}function of(R,$,Q,X,ee){$.isScene!==!0&&($=Re),Se.resetTextureUnits();const Ee=$.fog,Le=X.isMeshStandardMaterial?$.environment:null,Ue=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Sn,Ie=(X.isMeshStandardMaterial?ke:De).get(X.envMap||Le),Ve=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Be=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ze=!!Q.morphAttributes.position,ut=!!Q.morphAttributes.normal,ft=!!Q.morphAttributes.color,Qt=X.toneMapped?v.toneMapping:zn,Tn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,pt=Tn!==void 0?Tn.length:0,je=xe.get(X),Qa=m.state.lights;if(re===!0&&(se===!0||R!==M)){const kt=R===M&&X.id===T;oe.setState(X,R,kt)}let yt=!1;X.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Qa.state.version||je.outputColorSpace!==Ue||ee.isInstancedMesh&&je.instancing===!1||!ee.isInstancedMesh&&je.instancing===!0||ee.isSkinnedMesh&&je.skinning===!1||!ee.isSkinnedMesh&&je.skinning===!0||je.envMap!==Ie||X.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==oe.numPlanes||je.numIntersection!==oe.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==Be||je.morphTargets!==ze||je.morphNormals!==ut||je.morphColors!==ft||je.toneMapping!==Qt||ue.isWebGL2===!0&&je.morphTargetsCount!==pt)&&(yt=!0):(yt=!0,je.__version=X.version);let ci=je.currentProgram;yt===!0&&(ci=Br(X,$,ee));let ll=!1,pr=!1,eo=!1;const Lt=ci.getUniforms(),ui=je.uniforms;if(ie.useProgram(ci.program)&&(ll=!0,pr=!0,eo=!0),X.id!==T&&(T=X.id,pr=!0),ll||M!==R){if(Lt.setValue(q,"projectionMatrix",R.projectionMatrix),ue.logarithmicDepthBuffer&&Lt.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),M!==R&&(M=R,pr=!0,eo=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const kt=Lt.map.cameraPosition;kt!==void 0&&kt.setValue(q,Me.setFromMatrixPosition(R.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Lt.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ee.isSkinnedMesh)&&Lt.setValue(q,"viewMatrix",R.matrixWorldInverse)}if(ee.isSkinnedMesh){Lt.setOptional(q,ee,"bindMatrix"),Lt.setOptional(q,ee,"bindMatrixInverse");const kt=ee.skeleton;kt&&(ue.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Lt.setValue(q,"boneTexture",kt.boneTexture,Se),Lt.setValue(q,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const to=Q.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&ue.isWebGL2===!0)&&Te.update(ee,Q,ci),(pr||je.receiveShadow!==ee.receiveShadow)&&(je.receiveShadow=ee.receiveShadow,Lt.setValue(q,"receiveShadow",ee.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ui.envMap.value=Ie,ui.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),pr&&(Lt.setValue(q,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&sf(ui,eo),Ee&&X.fog===!0&&de.refreshFogUniforms(ui,Ee),de.refreshMaterialUniforms(ui,X,F,G,pe),Ea.upload(q,je.uniformsList,ui,Se)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ea.upload(q,je.uniformsList,ui,Se),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Lt.setValue(q,"center",ee.center),Lt.setValue(q,"modelViewMatrix",ee.modelViewMatrix),Lt.setValue(q,"normalMatrix",ee.normalMatrix),Lt.setValue(q,"modelMatrix",ee.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const kt=X.uniformsGroups;for(let no=0,cf=kt.length;no<cf;no++)if(ue.isWebGL2){const cl=kt[no];qe.update(cl,ci),qe.bind(cl,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function sf(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function lf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,$,Q){xe.get(R.texture).__webglTexture=$,xe.get(R.depthTexture).__webglTexture=Q;const X=xe.get(R);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Q===void 0,X.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,$){const Q=xe.get(R);Q.__webglFramebuffer=$,Q.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,Q=0){b=R,y=$,E=Q;let X=!0,ee=null,Ee=!1,Le=!1;if(R){const Ie=xe.get(R);Ie.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(q.FRAMEBUFFER,null),X=!1):Ie.__webglFramebuffer===void 0?Se.setupRenderTarget(R):Ie.__hasExternalTextures&&Se.rebindTextures(R,xe.get(R.texture).__webglTexture,xe.get(R.depthTexture).__webglTexture);const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Le=!0);const Be=xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ee=Be[$],Ee=!0):ue.isWebGL2&&R.samples>0&&Se.useMultisampledRTT(R)===!1?ee=xe.get(R).__webglMultisampledFramebuffer:ee=Be,w.copy(R.viewport),O.copy(R.scissor),I=R.scissorTest}else w.copy(W).multiplyScalar(F).floor(),O.copy(B).multiplyScalar(F).floor(),I=j;if(ie.bindFramebuffer(q.FRAMEBUFFER,ee)&&ue.drawBuffers&&X&&ie.drawBuffers(R,ee),ie.viewport(w),ie.scissor(O),ie.setScissorTest(I),Ee){const Ie=xe.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ie.__webglTexture,Q)}else if(Le){const Ie=xe.get(R.texture),Ve=$||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ie.__webglTexture,Q||0,Ve)}T=-1},this.readRenderTargetPixels=function(R,$,Q,X,ee,Ee,Le){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){ie.bindFramebuffer(q.FRAMEBUFFER,Ue);try{const Ie=R.texture,Ve=Ie.format,Be=Ie.type;if(Ve!==un&&Ae.convert(Ve)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===lr&&(K.has("EXT_color_buffer_half_float")||ue.isWebGL2&&K.has("EXT_color_buffer_float"));if(Be!==ni&&Ae.convert(Be)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===ei&&(ue.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-X&&Q>=0&&Q<=R.height-ee&&q.readPixels($,Q,X,ee,Ae.convert(Ve),Ae.convert(Be),Ee)}finally{const Ie=b!==null?xe.get(b).__webglFramebuffer:null;ie.bindFramebuffer(q.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(R,$,Q=0){const X=Math.pow(2,-Q),ee=Math.floor($.image.width*X),Ee=Math.floor($.image.height*X);Se.setTexture2D($,0),q.copyTexSubImage2D(q.TEXTURE_2D,Q,0,0,R.x,R.y,ee,Ee),ie.unbindTexture()},this.copyTextureToTexture=function(R,$,Q,X=0){const ee=$.image.width,Ee=$.image.height,Le=Ae.convert(Q.format),Ue=Ae.convert(Q.type);Se.setTexture2D(Q,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment),$.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,X,R.x,R.y,ee,Ee,Le,Ue,$.image.data):$.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,X,R.x,R.y,$.mipmaps[0].width,$.mipmaps[0].height,Le,$.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,X,R.x,R.y,Le,Ue,$.image),X===0&&Q.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(R,$,Q,X,ee=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=R.max.x-R.min.x+1,Le=R.max.y-R.min.y+1,Ue=R.max.z-R.min.z+1,Ie=Ae.convert(X.format),Ve=Ae.convert(X.type);let Be;if(X.isData3DTexture)Se.setTexture3D(X,0),Be=q.TEXTURE_3D;else if(X.isDataArrayTexture)Se.setTexture2DArray(X,0),Be=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const ze=q.getParameter(q.UNPACK_ROW_LENGTH),ut=q.getParameter(q.UNPACK_IMAGE_HEIGHT),ft=q.getParameter(q.UNPACK_SKIP_PIXELS),Qt=q.getParameter(q.UNPACK_SKIP_ROWS),Tn=q.getParameter(q.UNPACK_SKIP_IMAGES),pt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,pt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,pt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,R.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,R.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,R.min.z),Q.isDataTexture||Q.isData3DTexture?q.texSubImage3D(Be,ee,$.x,$.y,$.z,Ee,Le,Ue,Ie,Ve,pt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Be,ee,$.x,$.y,$.z,Ee,Le,Ue,Ie,pt.data)):q.texSubImage3D(Be,ee,$.x,$.y,$.z,Ee,Le,Ue,Ie,Ve,pt),q.pixelStorei(q.UNPACK_ROW_LENGTH,ze),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ut),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ft),q.pixelStorei(q.UNPACK_SKIP_ROWS,Qt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Tn),ee===0&&X.generateMipmaps&&q.generateMipmap(Be),ie.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Se.setTextureCube(R,0):R.isData3DTexture?Se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Se.setTexture2DArray(R,0):Se.setTexture2D(R,0),ie.unbindTexture()},this.resetState=function(){y=0,E=0,b=null,ie.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?wi:zu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wi?Ne:Sn}}class $g extends nh{}$g.prototype.isWebGL1Renderer=!0;class Yg extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ih{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new P;class Fn{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rh extends lt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Va extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rc=new P,Cc=new P,Pc=new Qe,Do=new Ba,oa=new Pi;class Wa extends dt{constructor(e=new et,t=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Rc.fromBufferAttribute(t,r-1),Cc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Rc.distanceTo(Cc);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),oa.radius+=a,e.ray.intersectsSphere(oa)===!1)return;Pc.copy(r).invert(),Do.copy(e.ray).applyMatrix4(Pc);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new P,u=new P,h=new P,p=new P,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=d){const y=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,E),Do.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(p);T<e.near||T>e.far||t.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=f,S=x-1;v<S;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Do.distanceSqToSegment(c,u,p,h)>l)continue;p.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(p);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}const Lc=new P,Dc=new P;class ah extends Wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Lc.fromBufferAttribute(t,r),Dc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Lc.distanceTo(Dc);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oh extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qc=new Qe,cs=new Ba,sa=new Pi,la=new P;class Kg extends dt{constructor(e=new et,t=new oh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),sa.radius+=a,e.ray.intersectsSphere(sa)===!1)return;qc.copy(r).invert(),cs.copy(e.ray).applyMatrix4(qc);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,h=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,_=d;g<_;g++){const m=c.getX(g);la.fromBufferAttribute(h,m),Uc(la,m,l,r,e,t,this)}}else{const p=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=p,_=d;g<_;g++)la.fromBufferAttribute(h,g),Uc(la,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Uc(i,e,t,n,r,a,o){const s=cs.distanceSqToPoint(i);if(s<t){const l=new P;cs.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const a=n.length;let o;t?o=t:o=e*n[a-1];let s=0,l=a-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=n[r]-o,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(a-1);const u=n[r],p=n[r+1]-u,d=(o-u)/p;return(r+d)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),l=t||(o.isVector2?new ce:new P);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,r=[],a=[],o=[],s=new P,l=new Qe;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new P)}a[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),s.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let d=1;d<=e;d++){if(a[d]=a[d-1].clone(),o[d]=o[d-1].clone(),s.crossVectors(r[d-1],r[d]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(gt(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(s,g))}o[d].crossVectors(r[d],a[d])}if(t===!0){let d=Math.acos(gt(a[0].dot(a[e]),-1,1));d/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(d=-d);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zs extends fn{constructor(e=0,t=0,n=1,r=1,a=0,o=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=l}getPoint(e,t){const n=t||new ce,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zg extends zs{constructor(e,t,n,r,a,o){super(e,t,n,n,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gs(){let i=0,e=0,t=0,n=0;function r(a,o,s,l){i=a,e=s,t=-3*a+3*o-2*s-l,n=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,c){r(o,s,c*(s-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,c,u,h){let p=(o-a)/c-(s-a)/(c+u)+(s-o)/u,d=(s-o)/u-(l-o)/(u+h)+(l-s)/h;p*=u,d*=u,r(o,s,p,d)},calc:function(a){const o=a*a,s=o*a;return i+e*a+t*o+n*s}}}const ca=new P,qo=new Gs,Uo=new Gs,Oo=new Gs;class Jg extends fn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),l=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:l===0&&s===a-1&&(s=a-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%a]:(ca.subVectors(r[0],r[1]).add(r[0]),c=ca);const h=r[s%a],p=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(ca.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=ca),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),qo.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,_,m),Uo.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,_,m),Oo.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(qo.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),Uo.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),Oo.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(qo.calc(l),Uo.calc(l),Oo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Oc(i,e,t,n,r){const a=(n-e)*.5,o=(r-t)*.5,s=i*i,l=i*s;return(2*t-2*n+a+o)*l+(-3*t+3*n-2*a-o)*s+a*i+t}function Qg(i,e){const t=1-i;return t*t*e}function ev(i,e){return 2*(1-i)*i*e}function tv(i,e){return i*i*e}function Ar(i,e,t,n){return Qg(i,e)+ev(i,t)+tv(i,n)}function nv(i,e){const t=1-i;return t*t*t*e}function iv(i,e){const t=1-i;return 3*t*t*i*e}function rv(i,e){return 3*(1-i)*i*i*e}function av(i,e){return i*i*i*e}function Rr(i,e,t,n,r){return nv(i,e)+iv(i,t)+rv(i,n)+av(i,r)}class sh extends fn{constructor(e=new ce,t=new ce,n=new ce,r=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ce){const n=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return n.set(Rr(e,r.x,a.x,o.x,s.x),Rr(e,r.y,a.y,o.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lh extends fn{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return n.set(Rr(e,r.x,a.x,o.x,s.x),Rr(e,r.y,a.y,o.y,s.y),Rr(e,r.z,a.z,o.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Hs extends fn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ov extends fn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends fn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,r=this.v0,a=this.v1,o=this.v2;return n.set(Ar(e,r.x,a.x,o.x),Ar(e,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uh extends fn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,a=this.v1,o=this.v2;return n.set(Ar(e,r.x,a.x,o.x),Ar(e,r.y,a.y,o.y),Ar(e,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Oc(s,l.x,c.x,u.x,h.x),Oc(s,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ce().fromArray(r))}return this}}var ks=Object.freeze({__proto__:null,ArcCurve:Zg,CatmullRomCurve3:Jg,CubicBezierCurve:sh,CubicBezierCurve3:lh,EllipseCurve:zs,LineCurve:Hs,LineCurve3:ov,QuadraticBezierCurve:ch,QuadraticBezierCurve3:uh,SplineCurve:hh});class sv extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Hs(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=n){const o=r[a]-n,s=this.curves[a],l=s.getLength(),c=l===0?0:1-o/l;return s.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,a=this.curves;r<a.length;r++){const o=a[r],s=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(s);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new ks[r.type]().fromJSON(r))}return this}}class us extends sv{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Hs(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const a=new ch(this.currentPoint.clone(),new ce(e,t),new ce(n,r));return this.curves.push(a),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,a,o){const s=new sh(this.currentPoint.clone(),new ce(e,t),new ce(n,r),new ce(a,o));return this.curves.push(s),this.currentPoint.set(a,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new hh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,a,o){const s=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+s,t+l,n,r,a,o),this}absarc(e,t,n,r,a,o){return this.absellipse(e,t,n,n,r,a,o),this}ellipse(e,t,n,r,a,o,s,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,a,o,s,l),this}absellipse(e,t,n,r,a,o,s,l){const c=new zs(e,t,n,r,a,o,s,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ja extends et{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const a=[],o=[],s=[],l=[],c=new P,u=new ce;o.push(0,0,0),s.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=t;h++,p+=3){const d=n+h/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),s.push(0,0,1),u.x=(o[p]/e+1)/2,u.y=(o[p+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)a.push(h,h+1,0);this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(s,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vs extends et{constructor(e=1,t=1,n=1,r=32,a=1,o=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],p=[],d=[];let g=0;const _=[],m=n/2;let f=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(d,2));function x(){const S=new P,y=new P;let E=0;const b=(t-e)/n;for(let T=0;T<=a;T++){const M=[],w=T/a,O=w*(t-e)+e;for(let I=0;I<=r;I++){const C=I/r,D=C*l+s,N=Math.sin(D),G=Math.cos(D);y.x=O*N,y.y=-w*n+m,y.z=O*G,h.push(y.x,y.y,y.z),S.set(N,b,G).normalize(),p.push(S.x,S.y,S.z),d.push(C,1-w),M.push(g++)}_.push(M)}for(let T=0;T<r;T++)for(let M=0;M<a;M++){const w=_[M][T],O=_[M+1][T],I=_[M+1][T+1],C=_[M][T+1];u.push(w,O,C),u.push(O,I,C),E+=6}c.addGroup(f,E,0),f+=E}function v(S){const y=g,E=new ce,b=new P;let T=0;const M=S===!0?e:t,w=S===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,m*w,0),p.push(0,w,0),d.push(.5,.5),g++;const O=g;for(let I=0;I<=r;I++){const D=I/r*l+s,N=Math.cos(D),G=Math.sin(D);b.x=M*G,b.y=m*w,b.z=M*N,h.push(b.x,b.y,b.z),p.push(0,w,0),E.x=N*.5+.5,E.y=G*.5*w+.5,d.push(E.x,E.y),g++}for(let I=0;I<r;I++){const C=y+I,D=O+I;S===!0?u.push(D,D+1,C):u.push(D+1,D,C),T+=3}c.addGroup(f,T,S===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wa extends us{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new us().fromJSON(r))}return this}}const lv={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let a=fh(i,0,r,t,!0);const o=[];if(!a||a.next===a.prev)return o;let s,l,c,u,h,p,d;if(n&&(a=dv(i,e,a,t)),i.length>80*t){s=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],p=i[g+1],h<s&&(s=h),p<l&&(l=p),h>c&&(c=h),p>u&&(u=p);d=Math.max(c-s,u-l),d=d!==0?32767/d:0}return qr(a,o,t,s,l,d,0),o}};function fh(i,e,t,n,r){let a,o;if(r===Ev(i,e,t,n)>0)for(a=e;a<t;a+=n)o=Ic(a,i[a],i[a+1],o);else for(a=t-n;a>=e;a-=n)o=Ic(a,i[a],i[a+1],o);return o&&Xa(o,o.next)&&(Or(o),o=o.next),o}function Ci(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xa(t,t.next)||st(t.prev,t,t.next)===0)){if(Or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qr(i,e,t,n,r,a,o){if(!i)return;!o&&a&&_v(i,n,r,a);let s=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,a?uv(i,n,r,a):cv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Or(i),i=c.next,s=c.next;continue}if(i=c,i===s){o?o===1?(i=hv(Ci(i),e,t),qr(i,e,t,n,r,a,2)):o===2&&fv(i,e,t,n,r,a):qr(Ci(i),e,t,n,r,a,1);break}}}function cv(i){const e=i.prev,t=i,n=i.next;if(st(e,t,n)>=0)return!1;const r=e.x,a=t.x,o=n.x,s=e.y,l=t.y,c=n.y,u=r<a?r<o?r:o:a<o?a:o,h=s<l?s<c?s:c:l<c?l:c,p=r>a?r>o?r:o:a>o?a:o,d=s>l?s>c?s:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=p&&g.y>=h&&g.y<=d&&tr(r,s,a,l,o,c,g.x,g.y)&&st(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function uv(i,e,t,n){const r=i.prev,a=i,o=i.next;if(st(r,a,o)>=0)return!1;const s=r.x,l=a.x,c=o.x,u=r.y,h=a.y,p=o.y,d=s<l?s<c?s:c:l<c?l:c,g=u<h?u<p?u:p:h<p?h:p,_=s>l?s>c?s:c:l>c?l:c,m=u>h?u>p?u:p:h>p?h:p,f=hs(d,g,e,t,n),x=hs(_,m,e,t,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=f&&S&&S.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&tr(s,u,l,h,c,p,v.x,v.y)&&st(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&tr(s,u,l,h,c,p,S.x,S.y)&&st(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&tr(s,u,l,h,c,p,v.x,v.y)&&st(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=x;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&tr(s,u,l,h,c,p,S.x,S.y)&&st(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function hv(i,e,t){let n=i;do{const r=n.prev,a=n.next.next;!Xa(r,a)&&dh(r,n,n.next,a)&&Ur(r,a)&&Ur(a,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Or(n),Or(n.next),n=i=a),n=n.next}while(n!==i);return Ci(n)}function fv(i,e,t,n,r,a){let o=i;do{let s=o.next.next;for(;s!==o.prev;){if(o.i!==s.i&&Mv(o,s)){let l=ph(o,s);o=Ci(o,o.next),l=Ci(l,l.next),qr(o,e,t,n,r,a,0),qr(l,e,t,n,r,a,0);return}s=s.next}o=o.next}while(o!==i)}function dv(i,e,t,n){const r=[];let a,o,s,l,c;for(a=0,o=e.length;a<o;a++)s=e[a]*n,l=a<o-1?e[a+1]*n:i.length,c=fh(i,s,l,n,!1),c===c.next&&(c.steiner=!0),r.push(yv(c));for(r.sort(pv),a=0;a<r.length;a++)t=mv(r[a],t);return t}function pv(i,e){return i.x-e.x}function mv(i,e){const t=gv(i,e);if(!t)return e;const n=ph(t,i);return Ci(n,n.next),Ci(t,t.next)}function gv(i,e){let t=e,n=-1/0,r;const a=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=a&&p>n&&(n=p,r=t.x<t.next.x?t:t.next,p===a))return r}t=t.next}while(t!==e);if(!r)return null;const s=r,l=r.x,c=r.y;let u=1/0,h;t=r;do a>=t.x&&t.x>=l&&a!==t.x&&tr(o<c?a:n,o,l,c,o<c?n:a,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(a-t.x),Ur(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&vv(r,t)))&&(r=t,u=h)),t=t.next;while(t!==s);return r}function vv(i,e){return st(i.prev,i,e.prev)<0&&st(e.next,i,i.next)<0}function _v(i,e,t,n){let r=i;do r.z===0&&(r.z=hs(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,xv(r)}function xv(i){let e,t,n,r,a,o,s,l,c=1;do{for(t=i,i=null,a=null,o=0;t;){for(o++,n=t,s=0,e=0;e<c&&(s++,n=n.nextZ,!!n);e++);for(l=c;s>0||l>0&&n;)s!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,s--):(r=n,n=n.nextZ,l--),a?a.nextZ=r:i=r,r.prevZ=a,a=r;t=n}a.nextZ=null,c*=2}while(o>1);return i}function hs(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function yv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tr(i,e,t,n,r,a,o,s){return(r-o)*(e-s)>=(i-o)*(a-s)&&(i-o)*(n-s)>=(t-o)*(e-s)&&(t-o)*(a-s)>=(r-o)*(n-s)}function Mv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sv(i,e)&&(Ur(i,e)&&Ur(e,i)&&bv(i,e)&&(st(i.prev,i,e.prev)||st(i,e.prev,e))||Xa(i,e)&&st(i.prev,i,i.next)>0&&st(e.prev,e,e.next)>0)}function st(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xa(i,e){return i.x===e.x&&i.y===e.y}function dh(i,e,t,n){const r=ha(st(i,e,t)),a=ha(st(i,e,n)),o=ha(st(t,n,i)),s=ha(st(t,n,e));return!!(r!==a&&o!==s||r===0&&ua(i,t,e)||a===0&&ua(i,n,e)||o===0&&ua(t,i,n)||s===0&&ua(t,e,n))}function ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ha(i){return i>0?1:i<0?-1:0}function Sv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&dh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ur(i,e){return st(i.prev,i,i.next)<0?st(i,e,i.next)>=0&&st(i,i.prev,e)>=0:st(i,e,i.prev)<0||st(i,i.next,e)<0}function bv(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ph(i,e){const t=new fs(i.i,i.x,i.y),n=new fs(e.i,e.x,e.y),r=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Ic(i,e,t,n){const r=new fs(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fs(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ev(i,e,t,n){let r=0;for(let a=e,o=t-n;a<t;a+=n)r+=(i[o]-i[a])*(i[a+1]+i[o+1]),o=a;return r}class ir{static area(e){const t=e.length;let n=0;for(let r=t-1,a=0;a<t;r=a++)n+=e[r].x*e[a].y-e[a].x*e[r].y;return n*.5}static isClockWise(e){return ir.area(e)<0}static triangulateShape(e,t){const n=[],r=[],a=[];Nc(e),Fc(n,e);let o=e.length;t.forEach(Nc);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Fc(n,t[l]);const s=lv.triangulate(n,r);for(let l=0;l<s.length;l+=3)a.push(s.slice(l,l+3));return a}}function Nc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ws extends et{constructor(e=new wa([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],a=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];o(c)}this.setAttribute("position",new $e(r,3)),this.setAttribute("uv",new $e(a,2)),this.computeVertexNormals();function o(s){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:wv;let v,S=!1,y,E,b,T;f&&(v=f.getSpacedPoints(u),S=!0,p=!1,y=f.computeFrenetFrames(u,!1),E=new P,b=new P,T=new P),p||(m=0,d=0,g=0,_=0);const M=s.extractPoints(c);let w=M.shape;const O=M.holes;if(!ir.isClockWise(w)){w=w.reverse();for(let q=0,le=O.length;q<le;q++){const K=O[q];ir.isClockWise(K)&&(O[q]=K.reverse())}}const C=ir.triangulateShape(w,O),D=w;for(let q=0,le=O.length;q<le;q++){const K=O[q];w=w.concat(K)}function N(q,le,K){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(le,K)}const G=w.length,F=C.length;function H(q,le,K){let ue,ie,we;const xe=q.x-le.x,Se=q.y-le.y,De=K.x-q.x,ke=K.y-q.y,it=xe*xe+Se*Se,L=xe*ke-Se*De;if(Math.abs(L)>Number.EPSILON){const A=Math.sqrt(it),J=Math.sqrt(De*De+ke*ke),de=le.x-Se/A,fe=le.y+xe/A,U=K.x-ke/J,oe=K.y+De/J,he=((U-de)*ke-(oe-fe)*De)/(xe*ke-Se*De);ue=de+xe*he-q.x,ie=fe+Se*he-q.y;const Y=ue*ue+ie*ie;if(Y<=2)return new ce(ue,ie);we=Math.sqrt(Y/2)}else{let A=!1;xe>Number.EPSILON?De>Number.EPSILON&&(A=!0):xe<-Number.EPSILON?De<-Number.EPSILON&&(A=!0):Math.sign(Se)===Math.sign(ke)&&(A=!0),A?(ue=-Se,ie=xe,we=Math.sqrt(it)):(ue=xe,ie=Se,we=Math.sqrt(it/2))}return new ce(ue/we,ie/we)}const V=[];for(let q=0,le=D.length,K=le-1,ue=q+1;q<le;q++,K++,ue++)K===le&&(K=0),ue===le&&(ue=0),V[q]=H(D[q],D[K],D[ue]);const W=[];let B,j=V.concat();for(let q=0,le=O.length;q<le;q++){const K=O[q];B=[];for(let ue=0,ie=K.length,we=ie-1,xe=ue+1;ue<ie;ue++,we++,xe++)we===ie&&(we=0),xe===ie&&(xe=0),B[ue]=H(K[ue],K[we],K[xe]);W.push(B),j=j.concat(B)}for(let q=0;q<m;q++){const le=q/m,K=d*Math.cos(le*Math.PI/2),ue=g*Math.sin(le*Math.PI/2)+_;for(let ie=0,we=D.length;ie<we;ie++){const xe=N(D[ie],V[ie],ue);k(xe.x,xe.y,-K)}for(let ie=0,we=O.length;ie<we;ie++){const xe=O[ie];B=W[ie];for(let Se=0,De=xe.length;Se<De;Se++){const ke=N(xe[Se],B[Se],ue);k(ke.x,ke.y,-K)}}}const ne=g+_;for(let q=0;q<G;q++){const le=p?N(w[q],j[q],ne):w[q];S?(b.copy(y.normals[0]).multiplyScalar(le.x),E.copy(y.binormals[0]).multiplyScalar(le.y),T.copy(v[0]).add(b).add(E),k(T.x,T.y,T.z)):k(le.x,le.y,0)}for(let q=1;q<=u;q++)for(let le=0;le<G;le++){const K=p?N(w[le],j[le],ne):w[le];S?(b.copy(y.normals[q]).multiplyScalar(K.x),E.copy(y.binormals[q]).multiplyScalar(K.y),T.copy(v[q]).add(b).add(E),k(T.x,T.y,T.z)):k(K.x,K.y,h/u*q)}for(let q=m-1;q>=0;q--){const le=q/m,K=d*Math.cos(le*Math.PI/2),ue=g*Math.sin(le*Math.PI/2)+_;for(let ie=0,we=D.length;ie<we;ie++){const xe=N(D[ie],V[ie],ue);k(xe.x,xe.y,h+K)}for(let ie=0,we=O.length;ie<we;ie++){const xe=O[ie];B=W[ie];for(let Se=0,De=xe.length;Se<De;Se++){const ke=N(xe[Se],B[Se],ue);S?k(ke.x,ke.y+v[u-1].y,v[u-1].x+K):k(ke.x,ke.y,h+K)}}}re(),se();function re(){const q=r.length/3;if(p){let le=0,K=G*le;for(let ue=0;ue<F;ue++){const ie=C[ue];te(ie[2]+K,ie[1]+K,ie[0]+K)}le=u+m*2,K=G*le;for(let ue=0;ue<F;ue++){const ie=C[ue];te(ie[0]+K,ie[1]+K,ie[2]+K)}}else{for(let le=0;le<F;le++){const K=C[le];te(K[2],K[1],K[0])}for(let le=0;le<F;le++){const K=C[le];te(K[0]+G*u,K[1]+G*u,K[2]+G*u)}}n.addGroup(q,r.length/3-q,0)}function se(){const q=r.length/3;let le=0;pe(D,le),le+=D.length;for(let K=0,ue=O.length;K<ue;K++){const ie=O[K];pe(ie,le),le+=ie.length}n.addGroup(q,r.length/3-q,1)}function pe(q,le){let K=q.length;for(;--K>=0;){const ue=K;let ie=K-1;ie<0&&(ie=q.length-1);for(let we=0,xe=u+m*2;we<xe;we++){const Se=G*we,De=G*(we+1),ke=le+ue+Se,it=le+ie+Se,L=le+ie+De,A=le+ue+De;Me(ke,it,L,A)}}}function k(q,le,K){l.push(q),l.push(le),l.push(K)}function te(q,le,K){Re(q),Re(le),Re(K);const ue=r.length/3,ie=x.generateTopUV(n,r,ue-3,ue-2,ue-1);_e(ie[0]),_e(ie[1]),_e(ie[2])}function Me(q,le,K,ue){Re(q),Re(le),Re(ue),Re(le),Re(K),Re(ue);const ie=r.length/3,we=x.generateSideWallUV(n,r,ie-6,ie-3,ie-2,ie-1);_e(we[0]),_e(we[1]),_e(we[3]),_e(we[1]),_e(we[2]),_e(we[3])}function Re(q){r.push(l[q*3+0]),r.push(l[q*3+1]),r.push(l[q*3+2])}function _e(q){a.push(q.x),a.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tv(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,o=e.shapes.length;a<o;a++){const s=t[e.shapes[a]];n.push(s)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ks[r.type]().fromJSON(r)),new Ws(n,e.options)}}const wv={generateTopUV:function(i,e,t,n,r){const a=e[t*3],o=e[t*3+1],s=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ce(a,o),new ce(s,l),new ce(c,u)]},generateSideWallUV:function(i,e,t,n,r,a){const o=e[t*3],s=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],p=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[a*3],m=e[a*3+1],f=e[a*3+2];return Math.abs(s-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-h),new ce(p,1-g),new ce(_,1-f)]:[new ce(s,1-l),new ce(u,1-h),new ce(d,1-g),new ce(m,1-f)]}};function Tv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class kn extends et{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const u=[],h=new P,p=new P,d=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let S=0;f===0&&o===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let y=0;y<=t;y++){const E=y/t;h.x=-e*Math.cos(r+E*a)*Math.sin(o+v*s),h.y=e*Math.cos(o+v*s),h.z=e*Math.sin(r+E*a)*Math.sin(o+v*s),g.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),m.push(E+S,1-v),x.push(c++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const v=u[f][x+1],S=u[f][x],y=u[f+1][x],E=u[f+1][x+1];(f!==0||o>0)&&d.push(v,S,E),(f!==n-1||l<Math.PI)&&d.push(S,y,E)}this.setIndex(d),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class js extends et{constructor(e=new uh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:a};const o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const s=new P,l=new P,c=new ce;let u=new P;const h=[],p=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(p,3)),this.setAttribute("uv",new $e(d,2));function _(){for(let v=0;v<t;v++)m(v);m(a===!1?t:0),x(),f()}function m(v){u=e.getPointAt(v/t,u);const S=o.normals[v],y=o.binormals[v];for(let E=0;E<=r;E++){const b=E/r*Math.PI*2,T=Math.sin(b),M=-Math.cos(b);l.x=M*S.x+T*y.x,l.y=M*S.y+T*y.y,l.z=M*S.z+T*y.z,l.normalize(),p.push(l.x,l.y,l.z),s.x=u.x+n*l.x,s.y=u.y+n*l.y,s.z=u.z+n*l.z,h.push(s.x,s.y,s.z)}}function f(){for(let v=1;v<=t;v++)for(let S=1;S<=r;S++){const y=(r+1)*(v-1)+(S-1),E=(r+1)*v+(S-1),b=(r+1)*v+S,T=(r+1)*(v-1)+S;g.push(y,E,T),g.push(E,b,T)}}function x(){for(let v=0;v<=t;v++)for(let S=0;S<=r;S++)c.x=v/t,c.y=S/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new js(new ks[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Av extends et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new P,a=new P;if(e.index!==null){const o=e.attributes.position,s=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:s.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],p=h.start,d=h.count;for(let g=p,_=p+d;g<_;g+=3)for(let m=0;m<3;m++){const f=s.getX(g+m),x=s.getX(g+(m+1)%3);r.fromBufferAttribute(o,f),a.fromBufferAttribute(o,x),Bc(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{const o=e.attributes.position;for(let s=0,l=o.count/3;s<l;s++)for(let c=0;c<3;c++){const u=3*s+c,h=3*s+(c+1)%3;r.fromBufferAttribute(o,u),a.fromBufferAttribute(o,h),Bc(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new $e(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Bc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class Rv extends si{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const zc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Cv{constructor(e,t,n){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Pv=new Cv;class Xs{constructor(e){this.manager=e!==void 0?e:Pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";class Lv extends Xs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=zc.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=Dr("img");function l(){u(),zc.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(h){u(),r&&r(h),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class $s extends Xs{constructor(e){super(e)}load(e,t,n,r){const a=new zt,o=new Lv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class mh extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Io=new Qe,Gc=new P,Hc=new P;class Dv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qv extends Dv{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bx extends mh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new qv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ex extends mh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Uv extends et{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class gh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kc(){return(typeof performance>"u"?Date:performance).now()}class ds extends ih{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ov{constructor(e,t,n=0,r=1/0){this.ray=new Ba(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ps(e,this,n,t),n.sort(Vc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)ps(e[r],this,n,t);return n.sort(Vc),n}}function Vc(i,e){return i.distance-e.distance}function ps(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ps(r[a],e,t,!0)}}class Wc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const jc=new P,fa=new P;class Iv{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){jc.subVectors(e,this.start),fa.subVectors(this.end,this.start);const n=fa.dot(fa);let a=fa.dot(jc)/n;return t&&(a=gt(a,0,1)),a}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Nv{constructor(){this.type="ShapePath",this.color=new Fe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new us,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,a,o){return this.currentPath.bezierCurveTo(e,t,n,r,a,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const x=[];for(let v=0,S=f.length;v<S;v++){const y=f[v],E=new wa;E.curves=y.curves,x.push(E)}return x}function n(f,x){const v=x.length;let S=!1;for(let y=v-1,E=0;E<v;y=E++){let b=x[y],T=x[E],M=T.x-b.x,w=T.y-b.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(b=x[E],M=-M,T=x[y],w=-w),f.y<b.y||f.y>T.y)continue;if(f.y===b.y){if(f.x===b.x)return!0}else{const O=w*(f.x-b.x)-M*(f.y-b.y);if(O===0)return!0;if(O<0)continue;S=!S}}else{if(f.y!==b.y)continue;if(T.x<=f.x&&f.x<=b.x||b.x<=f.x&&f.x<=T.x)return!0}}return S}const r=ir.isClockWise,a=this.subPaths;if(a.length===0)return[];let o,s,l;const c=[];if(a.length===1)return s=a[0],l=new wa,l.curves=s.curves,c.push(l),c;let u=!r(a[0].getPoints());u=e?!u:u;const h=[],p=[];let d=[],g=0,_;p[g]=void 0,d[g]=[];for(let f=0,x=a.length;f<x;f++)s=a[f],_=s.getPoints(),o=r(_),o=e?!o:o,o?(!u&&p[g]&&g++,p[g]={s:new wa,p:_},p[g].s.curves=s.curves,u&&g++,d[g]=[]):d[g].push({h:s,p:_[0]});if(!p[0])return t(a);if(p.length>1){let f=!1,x=0;for(let v=0,S=p.length;v<S;v++)h[v]=[];for(let v=0,S=p.length;v<S;v++){const y=d[v];for(let E=0;E<y.length;E++){const b=y[E];let T=!0;for(let M=0;M<p.length;M++)n(b.p,p[M].p)&&(v!==M&&x++,T?(T=!1,h[M].push(b)):f=!0);T&&h[v].push(b)}}x>0&&f===!1&&(d=h)}let m;for(let f=0,x=p.length;f<x;f++){l=p[f].s,c.push(l),m=d[f];for(let v=0,S=m.length;v<S;v++)l.holes.push(m[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ds}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ds);class Fv extends dt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ce(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const $i=new P,Xc=new Qe,$c=new Qe,Yc=new P,Kc=new P;class wx{constructor(e={}){const t=this;let n,r,a,o;const s={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:r}},this.render=function(d,g){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Xc.copy(g.matrixWorldInverse),$c.multiplyMatrices(g.projectionMatrix,Xc),c(d,d,g),p(d)},this.setSize=function(d,g){n=d,r=g,a=n/2,o=r/2,l.style.width=d+"px",l.style.height=g+"px"};function c(d,g,_){if(d.isCSS2DObject){$i.setFromMatrixPosition(d.matrixWorld),$i.applyMatrix4($c);const m=d.visible===!0&&$i.z>=-1&&$i.z<=1&&d.layers.test(_.layers)===!0;if(d.element.style.display=m===!0?"":"none",m===!0){d.onBeforeRender(t,g,_);const x=d.element;x.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+($i.x*a+a)+"px,"+(-$i.y*o+o)+"px)",x.parentNode!==l&&l.appendChild(x),d.onAfterRender(t,g,_)}const f={distanceToCameraSquared:u(_,d)};s.objects.set(d,f)}for(let m=0,f=d.children.length;m<f;m++)c(d.children[m],g,_)}function u(d,g){return Yc.setFromMatrixPosition(d.matrixWorld),Kc.setFromMatrixPosition(g.matrixWorld),Yc.distanceToSquared(Kc)}function h(d){const g=[];return d.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function p(d){const g=h(d).sort(function(m,f){if(m.renderOrder!==f.renderOrder)return f.renderOrder-m.renderOrder;const x=s.objects.get(m).distanceToCameraSquared,v=s.objects.get(f).distanceToCameraSquared;return x-v}),_=g.length;for(let m=0,f=g.length;m<f;m++)g[m].element.style.zIndex=_-m}}}function ms(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function Bv(i){if(Array.isArray(i))return i}function zv(i){if(Array.isArray(i))return ms(i)}function Cr(i,e,t){if(typeof i=="function"?i===e:i.has(e))return arguments.length<3?e:t;throw new TypeError("Private element is not present on this object")}function Gv(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Hv(i,e,t){return e=La(e),Jv(i,_h()?Reflect.construct(e,[],La(i).constructor):e.apply(i,t))}function vh(i,e){if(e.has(i))throw new TypeError("Cannot initialize the same private elements twice on an object")}function kv(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Ge(i,e){return i.get(Cr(i,e))}function $n(i,e,t){vh(i,e),e.set(i,t)}function Yn(i,e,t){return i.set(Cr(i,e),t),t}function Vv(i,e){vh(i,e),e.add(i)}function Wv(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,yh(n.key),n)}}function jv(i,e,t){return Wv(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function Yi(i,e,t){return(e=yh(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function La(i){return La=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},La(i)}function Xv(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&gs(i,e)}function _h(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_h=function(){return!!i})()}function $v(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Yv(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,s=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e!==0)for(;!(l=(n=a.call(t)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function Kv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jv(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Gv(i)}function gs(i,e){return gs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},gs(i,e)}function Ta(i,e){return Bv(i)||Yv(i,e)||Mh(i,e)||Kv()}function xh(i){return zv(i)||$v(i)||Mh(i)||Zv()}function Qv(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}function yh(i){var e=Qv(i,"string");return typeof e=="symbol"?e:e+""}function Mh(i,e){if(i){if(typeof i=="string")return ms(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ms(i,e):void 0}}var Sh=function(e){e instanceof Array?e.forEach(Sh):(e.map&&e.map.dispose(),e.dispose())},bh=function(e){e.geometry&&e.geometry.dispose(),e.material&&Sh(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(bh)},Zc=function(e){if(e&&e.children)for(;e.children.length;){var t=e.children[0];e.remove(t),bh(t)}};function Eh(i,e,t){var n=(90-i)*Math.PI/180,r=(90-e)*Math.PI/180;return{x:t*Math.sin(n)*Math.cos(r),y:t*Math.cos(n),z:t*Math.sin(n)*Math.sin(r)}}function e_(i){var e=i.x,t=i.y,n=i.z,r=Math.sqrt(e*e+t*t+n*n),a=Math.acos(t/r),o=Math.atan2(n,e);return{lat:90-a*180/Math.PI,lng:90-o*180/Math.PI-(o<-Math.PI/2?360:0),r}}function mi(i){return i*Math.PI/180}var wh=function(e){return 1-(Eu(0,(.5-e)*Math.PI)[1]/Math.PI+1)/2},No=function(e){return Math.max(0,Math.min(1,wh(e)))},Jc=function(e){return .5-Eu.invert(0,(2*(1-e)-1)*Math.PI)[1]/Math.PI},t_=function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=ii().domain([1,0]).range([t,n]).clamp(!0),a=ii().domain([No(t),No(n)]).range([1,0]).clamp(!0),o=function(h){return a(No(r(h)))},s=e.array,l=0,c=s.length;l<c;l+=2)s[l+1]=o(s[l+1]);e.needsUpdate=!0},Qc=function(e,t,n,r){var a=Math.pow(2,e),o=Math.max(0,Math.min(a-1,Math.floor((n+180)*a/360))),s=(90-r)/180;t&&(s=Math.max(0,Math.min(1,wh(s))));var l=Math.floor(s*a);return[o,l]},vs=function(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,s=[],l=Math.pow(2,e),c=360/l,u=180/l,h=a===void 0?l-1:a,p=o===void 0?l-1:o,d=n,g=Math.min(l-1,h);d<=g;d++)for(var _=r,m=Math.min(l-1,p);_<=m;_++){var f=_,x=u;if(t){f=_===0?_:Jc(_/l)*l;var v=_+1===l?_+1:Jc((_+1)/l)*l;x=(v-f)*180/l}var S=-180+(d+.5)*c,y=90-(f*180/l+x/2),E=x;s.push({x:d,y:_,lng:S,lat:y,latLen:E})}return s},n_=6,i_=7,r_=3,a_=90,_n=new WeakMap,Jn=new WeakMap,Fo=new WeakMap,da=new WeakMap,Yt=new WeakMap,Da=new WeakMap,rr=new WeakMap,gi=new WeakMap,pa=new WeakSet,o_=function(i){function e(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.tileUrl,o=r.minLevel,s=o===void 0?0:o,l=r.maxLevel,c=l===void 0?17:l,u=r.mercatorProjection,h=u===void 0?!0:u;return kv(this,e),n=Hv(this,e),Vv(n,pa),$n(n,_n,void 0),$n(n,Jn,void 0),$n(n,Fo,void 0),$n(n,da,void 0),$n(n,Yt,{}),$n(n,Da,void 0),$n(n,rr,void 0),$n(n,gi,void 0),Yi(n,"minLevel",void 0),Yi(n,"maxLevel",void 0),Yi(n,"thresholds",xh(new Array(30)).map(function(p,d){return 8/Math.pow(2,d)})),Yi(n,"curvatureResolution",5),Yi(n,"tileMargin",0),Yi(n,"clearTiles",function(){Object.values(Ge(Yt,n)).forEach(function(p){p.forEach(function(d){d.obj&&(n.remove(d.obj),Zc(d.obj),delete d.obj)})}),Yn(Yt,n,{})}),Yn(_n,n,t),n.tileUrl=a,Yn(Jn,n,h),n.minLevel=s,n.maxLevel=c,n.level=0,n.add(Yn(gi,n,new at(new kn(Ge(_n,n)*.99,180,90),new Nr({color:0})))),Ge(gi,n).visible=!1,Ge(gi,n).material.polygonOffset=!0,Ge(gi,n).material.polygonOffsetUnits=3,Ge(gi,n).material.polygonOffsetFactor=1,n}return Xv(e,i),jv(e,[{key:"tileUrl",get:function(){return Ge(Fo,this)},set:function(n){Yn(Fo,this,n),this.updatePov(Ge(rr,this))}},{key:"level",get:function(){return Ge(da,this)},set:function(n){var r=this;Ge(Yt,this)[n]||Cr(pa,this,s_).call(this,n);var a=Ge(da,this);if(Yn(da,this,n),!(n===a||a===void 0)){if(Ge(gi,this).visible=n>0,Ge(Yt,this)[n].forEach(function(s){return s.obj&&(s.obj.material.depthWrite=!0)}),a<n&&Ge(Yt,this)[a].forEach(function(s){return s.obj&&(s.obj.material.depthWrite=!1)}),a>n)for(var o=n+1;o<=a;o++)Ge(Yt,this)[o]&&Ge(Yt,this)[o].forEach(function(s){s.obj&&(r.remove(s.obj),Zc(s.obj),delete s.obj)});Cr(pa,this,eu).call(this)}}},{key:"updatePov",value:function(n){var r=this;if(!(!n||!(n instanceof Ga))){Yn(rr,this,n);var a;if(Yn(Da,this,function(u){if(!u.hullPnts){var h=360/Math.pow(2,r.level),p=u.lng,d=u.lat,g=u.latLen,_=p-h/2,m=p+h/2,f=d-g/2,x=d+g/2;u.hullPnts=[[d,p],[f,_],[x,_],[f,m],[x,m]].map(function(v){var S=Ta(v,2),y=S[0],E=S[1];return Eh(y,E,Ge(_n,r))}).map(function(v){var S=v.x,y=v.y,E=v.z;return new P(S,y,E)})}return a||(a=new Ha,n.updateMatrix(),n.updateMatrixWorld(),a.setFromProjectionMatrix(new Qe().multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse))),u.hullPnts.some(function(v){return a.containsPoint(v.clone().applyMatrix4(r.matrixWorld))})}),this.tileUrl){var o=n.position.clone(),s=o.distanceTo(this.getWorldPosition(new P)),l=(s-Ge(_n,this))/Ge(_n,this),c=this.thresholds.findIndex(function(u){return u&&u<=l});this.level=Math.min(this.maxLevel,Math.max(this.minLevel,c<0?this.thresholds.length:c)),Cr(pa,this,eu).call(this)}}}}])}(Bt);function s_(i){var e=this;if(i>i_){Ge(Yt,this)[i]=[];return}var t=Ge(Yt,this)[i]=vs(i,Ge(Jn,this));t.forEach(function(n){return n.centroid=Eh(n.lat,n.lng,Ge(_n,e))}),t.octree=uf().x(function(n){return n.centroid.x}).y(function(n){return n.centroid.y}).z(function(n){return n.centroid.z}).addAll(t)}function eu(){var i=this;if(!(!this.tileUrl||this.level===void 0||!Ge(Yt,this).hasOwnProperty(this.level))&&!(!Ge(Da,this)&&this.level>n_)){var e=Ge(Yt,this)[this.level];if(Ge(rr,this)){var t=this.worldToLocal(Ge(rr,this).position.clone());if(e.octree){var n,r=this.worldToLocal(Ge(rr,this).position.clone()),a=(r.length()-Ge(_n,this))*r_;e=(n=e.octree).findAllWithinRadius.apply(n,xh(r).concat([a]))}else{var o=e_(t),s=(o.r/Ge(_n,this)-1)*a_,l=s/Math.cos(mi(o.lat)),c=[o.lng-l,o.lng+l],u=[o.lat+s,o.lat-s],h=Qc(this.level,Ge(Jn,this),c[0],u[0]),p=Ta(h,2),d=p[0],g=p[1],_=Qc(this.level,Ge(Jn,this),c[1],u[1]),m=Ta(_,2),f=m[0],x=m[1];!e.record&&(e.record={});var v=e.record;if(!v.hasOwnProperty("".concat(Math.round((d+f)/2),"_").concat(Math.round((g+x)/2))))e=vs(this.level,Ge(Jn,this),d,g,f,x).map(function(T){var M="".concat(T.x,"_").concat(T.y);return v.hasOwnProperty(M)?v[M]:(v[M]=T,e.push(T),T)});else{for(var S=[],y=d;y<=f;y++)for(var E=g;E<=x;E++){var b="".concat(y,"_").concat(E);v.hasOwnProperty(b)||(v[b]=vs(this.level,Ge(Jn,this),y,E,y,E)[0],e.push(v[b])),S.push(v[b])}e=S}}}e.filter(function(T){return!T.obj}).filter(Ge(Da,this)||function(){return!0}).forEach(function(T){var M=T.x,w=T.y,O=T.lng,I=T.lat,C=T.latLen,D=360/Math.pow(2,i.level);if(!T.obj){var N=D*(1-i.tileMargin),G=C*(1-i.tileMargin),F=mi(O),H=mi(-I),V=new at(new kn(Ge(_n,i),Math.ceil(N/i.curvatureResolution),Math.ceil(G/i.curvatureResolution),mi(90-N/2)+F,mi(N),mi(90-G/2)+H,mi(G)),new li);if(Ge(Jn,i)){var W=[I+C/2,I-C/2].map(function(re){return .5-re/180}),B=Ta(W,2),j=B[0],ne=B[1];t_(V.geometry.attributes.uv,j,ne)}T.obj=V}T.loading||(T.loading=!0,new $s().load(i.tileUrl(M,w,i.level),function(re){var se=T.obj;se&&(re.colorSpace=Ne,se.material.map=re,se.material.color=null,se.material.needsUpdate=!0,i.add(se)),T.loading=!1}))})}}function _s(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function l_(i){if(Array.isArray(i))return i}function c_(i){if(Array.isArray(i))return _s(i)}function u_(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function h_(i,e,t){return e=qa(e),y_(i,Th()?Reflect.construct(e,[],qa(i).constructor):e.apply(i,t))}function f_(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function d_(i,e,t){return Object.defineProperty(i,"prototype",{writable:!1}),i}function p_(i,e){var t=typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(!t){if(Array.isArray(i)||(t=Ys(i))||e){t&&(i=t);var n=0,r=function(){};return{s:r,n:function(){return n>=i.length?{done:!0}:{done:!1,value:i[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){t=t.call(i)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,a=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw a}}}}function qa(i){return qa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},qa(i)}function m_(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&xs(i,e)}function Th(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Th=function(){return!!i})()}function g_(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function v_(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,s=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function __(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y_(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u_(i)}function xs(i,e){return xs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},xs(i,e)}function xr(i,e){return l_(i)||v_(i,e)||Ys(i,e)||__()}function M_(i){return c_(i)||g_(i)||Ys(i)||x_()}function Ys(i,e){if(i){if(typeof i=="string")return _s(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_s(i,e):void 0}}var tu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=[],r=null;return e.forEach(function(a){if(r){var o=Ps(a,r)*180/Math.PI;if(o>t)for(var s=Ls(r,a),l=r.length>2||a.length>2?hf(r[2]||0,a[2]||0):null,c=l?function(p){return[].concat(M_(s(p)),[l(p)])}:s,u=1/Math.ceil(o/t),h=u;h<1;)n.push(c(h)),h+=u}n.push(r=a)}),n},ys=typeof window<"u"&&window.THREE?window.THREE:{BufferGeometry:et,Float32BufferAttribute:$e},S_=new ys.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Ah=function(i){function e(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5;f_(this,e),n=h_(this,e),n.type="GeoJsonGeometry",n.parameters={geoJson:t,radius:r,resolution:a};var o=({Point:u,MultiPoint:h,LineString:p,MultiLineString:d,Polygon:g,MultiPolygon:_}[t.type]||function(){return[]})(t.coordinates,r),s=[],l=[],c=0;o.forEach(function(m){var f=s.length;yr({indices:s,vertices:l},m),n.addGroup(f,s.length-f,c++)}),s.length&&n.setIndex(s),l.length&&n[S_]("position",new ys.Float32BufferAttribute(l,3));function u(m,f){var x=Bo(m[1],m[0],f+(m[2]||0)),v=[];return[{vertices:x,indices:v}]}function h(m,f){var x={vertices:[],indices:[]};return m.map(function(v){return u(v,f)}).forEach(function(v){var S=xr(v,1),y=S[0];yr(x,y)}),[x]}function p(m,f){for(var x=tu(m,a).map(function(T){var M=xr(T,3),w=M[0],O=M[1],I=M[2],C=I===void 0?0:I;return Bo(O,w,f+C)}),v=Ra([x]),S=v.vertices,y=Math.round(S.length/3),E=[],b=1;b<y;b++)E.push(b-1,b);return[{vertices:S,indices:E}]}function d(m,f){var x={vertices:[],indices:[]};return m.map(function(v){return p(v,f)}).forEach(function(v){var S=xr(v,1),y=S[0];yr(x,y)}),[x]}function g(m,f){for(var x=m.map(function(N){return tu(N,a).map(function(G){var F=xr(G,3),H=F[0],V=F[1],W=F[2],B=W===void 0?0:W;return Bo(V,H,f+B)})}),v=Ra(x),S=v.vertices,y=v.holes,E=y[0]||1/0,b=S.slice(0,E*3),T=S.slice(E*3),M=new Set(y),w=Math.round(S.length/3),O=[],I=[],C=1;C<w;C++)M.has(C)||(C<E?O.push(C-1,C):I.push(C-1-E,C-E));var D=[{indices:O,vertices:b}];return y.length&&D.push({indices:I,vertices:T}),D}function _(m,f){var x={vertices:[],indices:[]},v={vertices:[],indices:[]};m.map(function(y){return g(y,f)}).forEach(function(y){var E=xr(y,2),b=E[0],T=E[1];yr(x,b),T&&yr(v,T)});var S=[x];return v.vertices.length&&S.push(v),S}return n}return m_(e,i),d_(e)}(ys.BufferGeometry);function yr(i,e){var t=Math.round(i.vertices.length/3);nu(i.vertices,e.vertices),nu(i.indices,e.indices.map(function(n){return n+t}))}function nu(i,e){var t=p_(e),n;try{for(t.s();!(n=t.n()).done;){var r=n.value;i.push(r)}}catch(a){t.e(a)}finally{t.f()}}function Bo(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=(90-i)*Math.PI/180,r=(90-e)*Math.PI/180;return[t*Math.sin(n)*Math.cos(r),t*Math.cos(n),t*Math.sin(n)*Math.sin(r)]}function b_(i,e,t=!0){if(!e||!e.isReady)throw new Error("BufferGeometryUtils: Initialized MikkTSpace library required.");if(!i.hasAttribute("position")||!i.hasAttribute("normal")||!i.hasAttribute("uv"))throw new Error('BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.');function n(o){if(o.normalized||o.isInterleavedBufferAttribute){const s=new Float32Array(o.count*o.itemSize);for(let l=0,c=0;l<o.count;l++)s[c++]=o.getX(l),s[c++]=o.getY(l),o.itemSize>2&&(s[c++]=o.getZ(l));return s}return o.array instanceof Float32Array?o.array:new Float32Array(o.array)}const r=i.index?i.toNonIndexed():i,a=e.generateTangents(n(r.attributes.position),n(r.attributes.normal),n(r.attributes.uv));if(t)for(let o=3;o<a.length;o+=4)a[o]*=-1;return r.setAttribute("tangent",new lt(a,4)),i!==r&&i.copy(r),i}function Rh(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),a={},o={},s=i[0].morphTargetsRelative,l=new et;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(s!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let p=0;p<i.length;++p){const d=i[p].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(const u in a){const h=Ua(a[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][p]);const g=Ua(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Ua(i){let e,t,n,r=-1,a=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.array.length}const o=new e(a);let s=0;for(let c=0;c<i.length;++c)o.set(i[c].array,s),s+=i[c].array.length;const l=new lt(o,t,n);return r!==void 0&&(l.gpuType=r),l}function E_(i){return i.isInstancedInterleavedBufferAttribute||i.isInterleavedBufferAttribute?Oa(i):i.isInstancedBufferAttribute?new rh().copy(i):new lt().copy(i)}function w_(i){let e,t=0,n=0;for(let c=0,u=i.length;c<u;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("AttributeBuffers of different types cannot be interleaved"),null;t+=h.array.length,n+=h.itemSize}const r=new ih(new e(t),n);let a=0;const o=[],s=["getX","getY","getZ","getW"],l=["setX","setY","setZ","setW"];for(let c=0,u=i.length;c<u;c++){const h=i[c],p=h.itemSize,d=h.count,g=new Fn(r,p,a,h.normalized);o.push(g),a+=p;for(let _=0;_<d;_++)for(let m=0;m<p;m++)g[l[m]](_,h[s[m]](_))}return o}function Oa(i){const e=i.data.array.constructor,t=i.count,n=i.itemSize,r=i.normalized,a=new e(t*n);let o;i.isInstancedInterleavedBufferAttribute?o=new rh(a,n,r,i.meshPerAttribute):o=new lt(a,n,r);for(let s=0;s<t;s++)o.setX(s,i.getX(s)),n>=2&&o.setY(s,i.getY(s)),n>=3&&o.setZ(s,i.getZ(s)),n>=4&&o.setW(s,i.getW(s));return o}function T_(i){const e=i.attributes,t=i.morphTargets,n=new Map;for(const r in e){const a=e[r];a.isInterleavedBufferAttribute&&(n.has(a)||n.set(a,Oa(a)),e[r]=n.get(a))}for(const r in t){const a=t[r];a.isInterleavedBufferAttribute&&(n.has(a)||n.set(a,Oa(a)),t[r]=n.get(a))}}function A_(i){let e=0;for(const n in i.attributes){const r=i.getAttribute(n);e+=r.count*r.itemSize*r.array.BYTES_PER_ELEMENT}const t=i.getIndex();return e+=t?t.count*t.itemSize*t.array.BYTES_PER_ELEMENT:0,e}function R_(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),a=n?n.count:r.count;let o=0;const s=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let m=0,f=s.length;m<f;m++){const x=s[m],v=i.attributes[x];l[x]=new lt(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);const S=i.morphAttributes[x];S&&(c[x]=new lt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}const d=Math.log10(1/e),g=Math.pow(10,d);for(let m=0;m<a;m++){const f=n?n.getX(m):m;let x="";for(let v=0,S=s.length;v<S;v++){const y=s[v],E=i.getAttribute(y),b=E.itemSize;for(let T=0;T<b;T++)x+=`${~~(E[h[T]](f)*g)},`}if(x in t)u.push(t[x]);else{for(let v=0,S=s.length;v<S;v++){const y=s[v],E=i.getAttribute(y),b=i.morphAttributes[y],T=E.itemSize,M=l[y],w=c[y];for(let O=0;O<T;O++){const I=h[O],C=p[O];if(M[C](o,E[I](f)),b)for(let D=0,N=b.length;D<N;D++)w[D][C](o,b[D][I](f))}}t[x]=o,u.push(o),o++}}const _=i.clone();for(const m in i.attributes){const f=l[m];if(_.setAttribute(m,new lt(f.array.slice(0,o*f.itemSize),f.itemSize,f.normalized)),m in c)for(let x=0;x<c[m].length;x++){const v=c[m][x];_.morphAttributes[m][x]=new lt(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)}}return _.setIndex(u),_}function C_(i,e){if(e===gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Hl||e===vd){let t=i.getIndex();if(t===null){const o=[],s=i.getAttribute("position");if(s!==void 0){for(let l=0;l<s.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Hl)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(r),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function P_(i){const e=new P,t=new P,n=new P,r=new P,a=new P,o=new P,s=new P,l=new P,c=new P;function u(V,W,B,j,ne,re,se,pe){e.fromBufferAttribute(W,ne),t.fromBufferAttribute(W,re),n.fromBufferAttribute(W,se);const k=V.morphTargetInfluences;if(B&&k){s.set(0,0,0),l.set(0,0,0),c.set(0,0,0);for(let te=0,Me=B.length;te<Me;te++){const Re=k[te],_e=B[te];Re!==0&&(r.fromBufferAttribute(_e,ne),a.fromBufferAttribute(_e,re),o.fromBufferAttribute(_e,se),j?(s.addScaledVector(r,Re),l.addScaledVector(a,Re),c.addScaledVector(o,Re)):(s.addScaledVector(r.sub(e),Re),l.addScaledVector(a.sub(t),Re),c.addScaledVector(o.sub(n),Re)))}e.add(s),t.add(l),n.add(c)}V.isSkinnedMesh&&(V.applyBoneTransform(ne,e),V.applyBoneTransform(re,t),V.applyBoneTransform(se,n)),pe[ne*3+0]=e.x,pe[ne*3+1]=e.y,pe[ne*3+2]=e.z,pe[re*3+0]=t.x,pe[re*3+1]=t.y,pe[re*3+2]=t.z,pe[se*3+0]=n.x,pe[se*3+1]=n.y,pe[se*3+2]=n.z}const h=i.geometry,p=i.material;let d,g,_;const m=h.index,f=h.attributes.position,x=h.morphAttributes.position,v=h.morphTargetsRelative,S=h.attributes.normal,y=h.morphAttributes.position,E=h.groups,b=h.drawRange;let T,M,w,O,I,C,D;const N=new Float32Array(f.count*f.itemSize),G=new Float32Array(S.count*S.itemSize);if(m!==null)if(Array.isArray(p))for(T=0,w=E.length;T<w;T++)for(I=E[T],C=Math.max(I.start,b.start),D=Math.min(I.start+I.count,b.start+b.count),M=C,O=D;M<O;M+=3)d=m.getX(M),g=m.getX(M+1),_=m.getX(M+2),u(i,f,x,v,d,g,_,N),u(i,S,y,v,d,g,_,G);else for(C=Math.max(0,b.start),D=Math.min(m.count,b.start+b.count),T=C,w=D;T<w;T+=3)d=m.getX(T),g=m.getX(T+1),_=m.getX(T+2),u(i,f,x,v,d,g,_,N),u(i,S,y,v,d,g,_,G);else if(Array.isArray(p))for(T=0,w=E.length;T<w;T++)for(I=E[T],C=Math.max(I.start,b.start),D=Math.min(I.start+I.count,b.start+b.count),M=C,O=D;M<O;M+=3)d=M,g=M+1,_=M+2,u(i,f,x,v,d,g,_,N),u(i,S,y,v,d,g,_,G);else for(C=Math.max(0,b.start),D=Math.min(f.count,b.start+b.count),T=C,w=D;T<w;T+=3)d=T,g=T+1,_=T+2,u(i,f,x,v,d,g,_,N),u(i,S,y,v,d,g,_,G);const F=new $e(N,3),H=new $e(G,3);return{positionAttribute:f,normalAttribute:S,morphedPositionAttribute:F,morphedNormalAttribute:H}}function L_(i){if(i.groups.length===0)return console.warn("THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge."),i;let e=i.groups;if(e=e.sort((o,s)=>o.materialIndex!==s.materialIndex?o.materialIndex-s.materialIndex:o.start-s.start),i.getIndex()===null){const o=i.getAttribute("position"),s=[];for(let l=0;l<o.count;l+=3)s.push(l,l+1,l+2);i.setIndex(s)}const t=i.getIndex(),n=[];for(let o=0;o<e.length;o++){const s=e[o],l=s.start,c=l+s.count;for(let u=l;u<c;u++)n.push(t.getX(u))}i.dispose(),i.setIndex(n);let r=0;for(let o=0;o<e.length;o++){const s=e[o];s.start=r,r+=s.count}let a=e[0];i.groups=[a];for(let o=1;o<e.length;o++){const s=e[o];a.materialIndex===s.materialIndex?a.count+=s.count:(a=s,i.groups.push(a))}return i}function D_(i,e=Math.PI/3){const t=Math.cos(e),n=(1+1e-10)*100,r=[new P,new P,new P],a=new P,o=new P,s=new P,l=new P;function c(_){const m=~~(_.x*n),f=~~(_.y*n),x=~~(_.z*n);return`${m},${f},${x}`}const u=i.toNonIndexed(),h=u.attributes.position,p={};for(let _=0,m=h.count/3;_<m;_++){const f=3*_,x=r[0].fromBufferAttribute(h,f+0),v=r[1].fromBufferAttribute(h,f+1),S=r[2].fromBufferAttribute(h,f+2);a.subVectors(S,v),o.subVectors(x,v);const y=new P().crossVectors(a,o).normalize();for(let E=0;E<3;E++){const b=r[E],T=c(b);T in p||(p[T]=[]),p[T].push(y)}}const d=new Float32Array(h.count*3),g=new lt(d,3,!1);for(let _=0,m=h.count/3;_<m;_++){const f=3*_,x=r[0].fromBufferAttribute(h,f+0),v=r[1].fromBufferAttribute(h,f+1),S=r[2].fromBufferAttribute(h,f+2);a.subVectors(S,v),o.subVectors(x,v),s.crossVectors(a,o).normalize();for(let y=0;y<3;y++){const E=r[y],b=c(E),T=p[b];l.set(0,0,0);for(let M=0,w=T.length;M<w;M++){const O=T[M];s.dot(O)>t&&l.add(O)}l.normalize(),g.setXYZ(f+y,l.x,l.y,l.z)}}return u.setAttribute("normal",g),u}function q_(i,e=!1){return console.warn("THREE.BufferGeometryUtils: mergeBufferGeometries() has been renamed to mergeGeometries()."),Rh(i,e)}function U_(i){return console.warn("THREE.BufferGeometryUtils: mergeBufferAttributes() has been renamed to mergeAttributes()."),Ua(i)}const Ks=Object.freeze(Object.defineProperty({__proto__:null,computeMikkTSpaceTangents:b_,computeMorphedAttributes:P_,deepCloneAttribute:E_,deinterleaveAttribute:Oa,deinterleaveGeometry:T_,estimateBytesUsed:A_,interleaveAttributes:w_,mergeAttributes:Ua,mergeBufferAttributes:U_,mergeBufferGeometries:q_,mergeGeometries:Rh,mergeGroups:L_,mergeVertices:R_,toCreasedNormals:D_,toTrianglesDrawMode:C_},Symbol.toStringTag,{value:"Module"}));function Ms(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function O_(i){if(Array.isArray(i))return i}function I_(i){if(Array.isArray(i))return Ms(i)}function N_(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function F_(i,e,t){return e=Ia(e),j_(i,Ch()?Reflect.construct(e,[],Ia(i).constructor):e.apply(i,t))}function B_(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function z_(i,e,t){return Object.defineProperty(i,"prototype",{writable:!1}),i}function Ia(i){return Ia=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ia(i)}function G_(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&Ss(i,e)}function Ch(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Ch=function(){return!!i})()}function H_(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function k_(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,s=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e!==0)for(;!(l=(n=a.call(t)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function V_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j_(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N_(i)}function Ss(i,e){return Ss=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},Ss(i,e)}function xn(i,e){return O_(i)||k_(i,e)||Ph(i,e)||V_()}function zo(i){return I_(i)||H_(i)||Ph(i)||W_()}function Ph(i,e){if(i){if(typeof i=="string")return Ms(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ms(i,e):void 0}}function X_(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.resolution,n=t===void 0?1/0:t,r=$_(i,n),a=Jo(r),o=Y_(i,n),s=[].concat(zo(a),zo(o)),l={type:"Polygon",coordinates:i},c=wu(l),u=xn(c,2),h=xn(u[0],2),p=h[0],d=h[1],g=xn(u[1],2),_=g[0],m=g[1],f=p>_||m>=89||d<=-89,x=[];if(f){var v=ff(s).triangles(),S=new Map(s.map(function(F,H){var V=xn(F,2),W=V[0],B=V[1];return["".concat(W,"-").concat(B),H]}));v.features.forEach(function(F){var H,V=F.geometry.coordinates[0].slice(0,3).reverse(),W=[];if(V.forEach(function(j){var ne=xn(j,2),re=ne[0],se=ne[1],pe="".concat(re,"-").concat(se);S.has(pe)&&W.push(S.get(pe))}),W.length===3){if(W.some(function(j){return j<a.length})){var B=F.properties.circumcenter;if(!bs(B,l,f))return}(H=x).push.apply(H,W)}})}else if(o.length)for(var M=pf.from(s),w=function(H){var V,W=[2,1,0].map(function(ne){return M.triangles[H+ne]}),B=W.map(function(ne){return s[ne]});if(W.some(function(ne){return ne<a.length})){var j=[0,1].map(function(ne){return vf(B,function(re){return re[ne]})});if(!bs(j,l,f))return 1}(V=x).push.apply(V,zo(W))},O=0,I=M.triangles.length;O<I;O+=3)w(O);else{var y=Ra(r),E=y.vertices,b=y.holes,T=b===void 0?[]:b;x=df(E,T,2)}var C=ii(ul(s,function(F){return F[0]}),[0,1]),D=ii(ul(s,function(F){return F[1]}),[0,1]),N=s.map(function(F){var H=xn(F,2),V=H[0],W=H[1];return[C(V),D(W)]}),G={points:s,indices:x,uvs:N};return{contour:r,triangles:G}}function $_(i,e){return i.map(function(t){var n=[],r;return t.forEach(function(a){if(r){var o=Ps(a,r)*180/Math.PI;if(o>e)for(var s=Ls(r,a),l=1/Math.ceil(o/e),c=l;c<1;)n.push(s(c)),c+=l}n.push(r=a)}),n})}function Y_(i,e){var t={type:"Polygon",coordinates:i},n=wu(t),r=xn(n,2),a=xn(r[0],2),o=a[0],s=a[1],l=xn(r[1],2),c=l[0],u=l[1];if(Math.min(Math.abs(c-o),Math.abs(u-s))<e)return[];var h=o>c||u>=89||s<=-89;return K_(e,{minLng:o,maxLng:c,minLat:s,maxLat:u}).filter(function(p){return bs(p,t,h)})}function K_(i){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.minLng,n=e.maxLng,r=e.minLat,a=e.maxLat,o=Math.round(Math.pow(360/i,2)/Math.PI),s=(1+Math.sqrt(5))/2,l=function(f){return f/s*360%360-180},c=function(f){return Math.acos(2*f/o-1)/Math.PI*180-90},u=function(f){return o*(Math.cos((f+90)*Math.PI/180)+1)/2},h=[a!==void 0?Math.ceil(u(a)):0,r!==void 0?Math.floor(u(r)):o-1],p=t===void 0&&n===void 0?function(){return!0}:t===void 0?function(m){return m<=n}:n===void 0?function(m){return m>=t}:n>=t?function(m){return m>=t&&m<=n}:function(m){return m>=t||m<=n},d=[],g=h[0];g<=h[1];g++){var _=l(g);p(_)&&d.push([_,c(g)])}return d}function bs(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return t?mf(e,i):gf(i,e)}var Aa=window.THREE?window.THREE:{BufferGeometry:et,Float32BufferAttribute:$e},iu=new Aa.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Zs=function(i){function e(t,n,r,a,o,s,l){var c;B_(this,e),c=F_(this,e),c.type="ConicPolygonGeometry",c.parameters={polygonGeoJson:t,bottomHeight:n,topHeight:r,closedBottom:a,closedTop:o,includeSides:s,curvatureResolution:l},n=n||0,r=r||1,a=a!==void 0?a:!0,o=o!==void 0?o:!0,s=s!==void 0?s:!0,l=l||5;var u=X_(t,{resolution:l}),h=u.contour,p=u.triangles,d=Jo(p.uvs),g=[],_=[],m=[],f=0,x=function(b){var T=Math.round(g.length/3),M=m.length;g=g.concat(b.vertices),_=_.concat(b.uvs),m=m.concat(T?b.indices.map(function(w){return w+T}):b.indices),c.addGroup(M,m.length-M,f++)};s&&x(S()),a&&x(y(n,!1)),o&&x(y(r,!0)),c.setIndex(m),c[iu]("position",new Aa.Float32BufferAttribute(g,3)),c[iu]("uv",new Aa.Float32BufferAttribute(_,2)),c.computeVertexNormals();function v(E,b){var T=typeof b=="function"?b:function(){return b},M=E.map(function(w){return w.map(function(O){var I=xn(O,2),C=I[0],D=I[1];return Z_(D,C,T(C,D))})});return Ra(M)}function S(){for(var E=v(h,n),b=E.vertices,T=E.holes,M=v(h,r),w=M.vertices,O=Jo([w,b]),I=Math.round(w.length/3),C=new Set(T),D=0,N=[],G=0;G<I;G++){var F=G+1;if(F===I)F=D;else if(C.has(F)){var H=F;F=D,D=H}N.push(G,G+I,F+I),N.push(F+I,F,G)}for(var V=[],W=1;W>=0;W--)for(var B=0;B<I;B+=1)V.push(B/(I-1),W);return{indices:N,vertices:O,uvs:V}}function y(E){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return{indices:b?p.indices:p.indices.slice().reverse(),vertices:v([p.points],E).vertices,uvs:d}}return c}return G_(e,i),z_(e)}(Aa.BufferGeometry);function Z_(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=(90-i)*Math.PI/180,r=(90-e)*Math.PI/180;return[t*Math.sin(n)*Math.cos(r),t*Math.cos(n),t*Math.sin(n)*Math.sin(r)]}const Go=class{},Lh=class{},J_=()=>{},Q_=()=>{},e2=()=>{},t2=()=>{},n2=()=>{},i2=()=>{},r2=()=>{},a2=()=>{},o2=()=>{},s2=()=>{},l2=()=>{},c2=()=>{},u2=()=>{},ru=new Hn,ma=new P;class Dh extends Uv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new $e(e,3)),this.setAttribute("uv",new $e(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new ds(t,6,1);return this.setAttribute("instanceStart",new Fn(n,3,0)),this.setAttribute("instanceEnd",new Fn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new ds(t,6,1);return this.setAttribute("instanceColorStart",new Fn(n,3,0)),this.setAttribute("instanceColorEnd",new Fn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Av(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ru.setFromBufferAttribute(t),this.boundingBox.union(ru))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)ma.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(ma)),ma.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(ma));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ce(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Nt.line={uniforms:za.merge([ge.common,ge.fog,ge.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Js extends Xt{constructor(e){super({type:"LineMaterial",uniforms:za.clone(Nt.line.uniforms),vertexShader:Nt.line.vertexShader,fragmentShader:Nt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const au=new P,ou=new P,bt=new ht,Et=new ht,mn=new ht,Ho=new P,ko=new Qe,wt=new Iv,su=new P,ga=new Hn,va=new Pi,gn=new ht;let yn,Ai;function lu(i,e,t){return gn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),gn.multiplyScalar(1/gn.w),gn.x=Ai/t.width,gn.y=Ai/t.height,gn.applyMatrix4(i.projectionMatrixInverse),gn.multiplyScalar(1/gn.w),Math.abs(Math.max(gn.x,gn.y))}function h2(i,e){const t=i.matrixWorld,n=i.geometry,r=n.attributes.instanceStart,a=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let s=0,l=o;s<l;s++){wt.start.fromBufferAttribute(r,s),wt.end.fromBufferAttribute(a,s),wt.applyMatrix4(t);const c=new P,u=new P;yn.distanceSqToSegment(wt.start,wt.end,u,c),u.distanceTo(c)<Ai*.5&&e.push({point:u,pointOnLine:c,distance:yn.origin.distanceTo(u),object:i,face:null,faceIndex:s,uv:null,uv1:null})}}function f2(i,e,t){const n=e.projectionMatrix,a=i.material.resolution,o=i.matrixWorld,s=i.geometry,l=s.attributes.instanceStart,c=s.attributes.instanceEnd,u=Math.min(s.instanceCount,l.count),h=-e.near;yn.at(1,mn),mn.w=1,mn.applyMatrix4(e.matrixWorldInverse),mn.applyMatrix4(n),mn.multiplyScalar(1/mn.w),mn.x*=a.x/2,mn.y*=a.y/2,mn.z=0,Ho.copy(mn),ko.multiplyMatrices(e.matrixWorldInverse,o);for(let p=0,d=u;p<d;p++){if(bt.fromBufferAttribute(l,p),Et.fromBufferAttribute(c,p),bt.w=1,Et.w=1,bt.applyMatrix4(ko),Et.applyMatrix4(ko),bt.z>h&&Et.z>h)continue;if(bt.z>h){const v=bt.z-Et.z,S=(bt.z-h)/v;bt.lerp(Et,S)}else if(Et.z>h){const v=Et.z-bt.z,S=(Et.z-h)/v;Et.lerp(bt,S)}bt.applyMatrix4(n),Et.applyMatrix4(n),bt.multiplyScalar(1/bt.w),Et.multiplyScalar(1/Et.w),bt.x*=a.x/2,bt.y*=a.y/2,Et.x*=a.x/2,Et.y*=a.y/2,wt.start.copy(bt),wt.start.z=0,wt.end.copy(Et),wt.end.z=0;const _=wt.closestPointToPointParameter(Ho,!0);wt.at(_,su);const m=ss.lerp(bt.z,Et.z,_),f=m>=-1&&m<=1,x=Ho.distanceTo(su)<Ai*.5;if(f&&x){wt.start.fromBufferAttribute(l,p),wt.end.fromBufferAttribute(c,p),wt.start.applyMatrix4(o),wt.end.applyMatrix4(o);const v=new P,S=new P;yn.distanceSqToSegment(wt.start,wt.end,S,v),t.push({point:S,pointOnLine:v,distance:yn.origin.distanceTo(S),object:i,face:null,faceIndex:p,uv:null,uv1:null})}}}class d2 extends at{constructor(e=new Dh,t=new Js({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,s=0,l=t.count;o<l;o++,s+=2)au.fromBufferAttribute(t,o),ou.fromBufferAttribute(n,o),r[s]=s===0?0:r[s-1],r[s+1]=r[s]+au.distanceTo(ou);const a=new ds(r,2,1);return e.setAttribute("instanceDistanceStart",new Fn(a,1,0)),e.setAttribute("instanceDistanceEnd",new Fn(a,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=e.params.Line2!==void 0&&e.params.Line2.threshold||0;yn=e.ray;const o=this.matrixWorld,s=this.geometry,l=this.material;Ai=l.linewidth+a,s.boundingSphere===null&&s.computeBoundingSphere(),va.copy(s.boundingSphere).applyMatrix4(o);let c;if(n)c=Ai*.5;else{const h=Math.max(r.near,va.distanceToPoint(yn.origin));c=lu(r,h,l.resolution)}if(va.radius+=c,yn.intersectsSphere(va)===!1)return;s.boundingBox===null&&s.computeBoundingBox(),ga.copy(s.boundingBox).applyMatrix4(o);let u;if(n)u=Ai*.5;else{const h=Math.max(r.near,ga.distanceToPoint(yn.origin));u=lu(r,h,l.resolution)}ga.expandByScalar(u),yn.intersectsBox(ga)!==!1&&(n?h2(this,t):f2(this,r,t))}}class qh extends Dh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class p2 extends d2{constructor(e=new qh,t=new Js({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}class cu extends Ws{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}class m2{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=g2(e,t,this.data);for(let a=0,o=r.length;a<o;a++)n.push(...r[a].toShapes());return n}}function g2(i,e,t){const n=Array.from(i),r=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let s=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)s=0,l-=a;else{const h=v2(u,r,s,l,t);s+=h.offsetX,o.push(h.path)}}return o}function v2(i,e,t,n,r){const a=r.glyphs[i]||r.glyphs["?"];if(!a){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new Nv;let s,l,c,u,h,p,d,g;if(a.o){const _=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let m=0,f=_.length;m<f;)switch(_[m++]){case"m":s=_[m++]*e+t,l=_[m++]*e+n,o.moveTo(s,l);break;case"l":s=_[m++]*e+t,l=_[m++]*e+n,o.lineTo(s,l);break;case"q":c=_[m++]*e+t,u=_[m++]*e+n,h=_[m++]*e+t,p=_[m++]*e+n,o.quadraticCurveTo(h,p,c,u);break;case"b":c=_[m++]*e+t,u=_[m++]*e+n,h=_[m++]*e+t,p=_[m++]*e+n,d=_[m++]*e+t,g=_[m++]*e+n,o.bezierCurveTo(h,p,d,g,c,u);break}}return{offsetX:a.ha*e,path:o}}function Es(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function _2(i){if(Array.isArray(i))return i}function x2(i){if(Array.isArray(i))return Es(i)}function Uh(i,e,t){if(typeof i=="function"?i===e:i.has(e))return arguments.length<3?e:t;throw new TypeError("Private element is not present on this object")}function y2(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function uu(i,e,t,n,r,a,o){try{var s=i[a](o),l=s.value}catch(c){return void t(c)}s.done?e(l):Promise.resolve(l).then(n,r)}function M2(i){return function(){var e=this,t=arguments;return new Promise(function(n,r){var a=i.apply(e,t);function o(l){uu(a,n,r,o,s,"next",l)}function s(l){uu(a,n,r,o,s,"throw",l)}o(void 0)})}}function $a(i,e,t){return e=hr(e),P2(i,el()?Reflect.construct(e,t||[],hr(i).constructor):e.apply(i,t))}function S2(i,e){if(e.has(i))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ya(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function Mr(i,e){return i.get(Uh(i,e))}function Vo(i,e,t){S2(i,e),e.set(i,t)}function Wo(i,e,t){return i.set(Uh(i,e),t),t}function Qs(i,e,t){if(el())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var r=new(i.bind.apply(i,n));return r}function b2(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,Oh(n.key),n)}}function Ka(i,e,t){return e&&b2(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function St(i,e,t){return(e=Oh(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function ws(){return ws=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(i,e,t){var n=L2(i,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(arguments.length<3?i:t):r.value}},ws.apply(null,arguments)}function hr(i){return hr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},hr(i)}function Za(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&As(i,e)}function el(){try{var i=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(el=function(){return!!i})()}function E2(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function w2(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,s=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function T2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hu(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Ye(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?hu(Object(t),!0).forEach(function(n){St(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):hu(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function R2(i,e){if(i==null)return{};var t,n,r=C2(i,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(i,t)&&(r[t]=i[t])}return r}function C2(i,e){if(i==null)return{};var t={};for(var n in i)if({}.hasOwnProperty.call(i,n)){if(e.indexOf(n)!==-1)continue;t[n]=i[n]}return t}function P2(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y2(i)}function Ts(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var i,e,t=typeof Symbol=="function"?Symbol:{},n=t.iterator||"@@iterator",r=t.toStringTag||"@@toStringTag";function a(d,g,_,m){var f=g&&g.prototype instanceof s?g:s,x=Object.create(f.prototype);return jt(x,"_invoke",function(v,S,y){var E,b,T,M=0,w=y||[],O=!1,I={p:0,n:0,v:i,a:C,f:C.bind(i,4),d:function(D,N){return E=D,b=0,T=i,I.n=N,o}};function C(D,N){for(b=D,T=N,e=0;!O&&M&&!G&&e<w.length;e++){var G,F=w[e],H=I.p,V=F[2];D>3?(G=V===N)&&(T=F[(b=F[4])?5:(b=3,3)],F[4]=F[5]=i):F[0]<=H&&((G=D<2&&H<F[1])?(b=0,I.v=N,I.n=F[1]):H<V&&(G=D<3||F[0]>N||N>V)&&(F[4]=D,F[5]=N,I.n=V,b=0))}if(G||D>1)return o;throw O=!0,N}return function(D,N,G){if(M>1)throw TypeError("Generator is already running");for(O&&N===1&&C(N,G),b=N,T=G;(e=b<2?i:T)||!O;){E||(b?b<3?(b>1&&(I.n=-1),C(b,T)):I.n=T:I.v=T);try{if(M=2,E){if(b||(D="next"),e=E[D]){if(!(e=e.call(E,T)))throw TypeError("iterator result is not an object");if(!e.done)return e;T=e.value,b<2&&(b=0)}else b===1&&(e=E.return)&&e.call(E),b<2&&(T=TypeError("The iterator does not provide a '"+D+"' method"),b=1);E=i}else if((e=(O=I.n<0)?T:v.call(S,I))!==o)break}catch(F){E=i,b=1,T=F}finally{M=1}}return{value:e,done:O}}}(d,_,m),!0),x}var o={};function s(){}function l(){}function c(){}e=Object.getPrototypeOf;var u=[][n]?e(e([][n]())):(jt(e={},n,function(){return this}),e),h=c.prototype=s.prototype=Object.create(u);function p(d){return Object.setPrototypeOf?Object.setPrototypeOf(d,c):(d.__proto__=c,jt(d,r,"GeneratorFunction")),d.prototype=Object.create(h),d}return l.prototype=c,jt(h,"constructor",c),jt(c,"constructor",l),l.displayName="GeneratorFunction",jt(c,r,"GeneratorFunction"),jt(h),jt(h,r,"Generator"),jt(h,n,function(){return this}),jt(h,"toString",function(){return"[object Generator]"}),(Ts=function(){return{w:a,m:p}})()}function jt(i,e,t,n){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}jt=function(a,o,s,l){if(o)r?r(a,o,{value:s,enumerable:!l,configurable:!l,writable:!l}):a[o]=s;else{let c=function(u,h){jt(a,u,function(p){return this._invoke(u,h,p)})};c("next",0),c("throw",1),c("return",2)}},jt(i,e,t,n)}function As(i,e){return As=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},As(i,e)}function nt(i,e){return _2(i)||w2(i,e)||Ih(i,e)||T2()}function L2(i,e){for(;!{}.hasOwnProperty.call(i,e)&&(i=hr(i))!==null;);return i}function jo(i,e,t,n){var r=ws(hr(i.prototype),e,t);return typeof r=="function"?function(a){return r.apply(t,a)}:r}function Ke(i){return x2(i)||E2(i)||Ih(i)||A2()}function D2(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Oh(i){var e=D2(i,"string");return typeof e=="symbol"?e:e+""}function Ih(i,e){if(i){if(typeof i=="string")return Es(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Es(i,e):void 0}}var Nh=function(e){e instanceof Array?e.forEach(Nh):(e.map&&e.map.dispose(),e.dispose())},tl=function(e){e.geometry&&e.geometry.dispose(),e.material&&Nh(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(tl)},Ze=function(e){if(e&&e.children)for(;e.children.length;){var t=e.children[0];e.remove(t),tl(t)}};function It(i,e){var t=new e;return{linkProp:function(r){return{default:t[r](),onChange:function(o,s){s[i][r](o)},triggerUpdate:!1}},linkMethod:function(r){return function(a){for(var o=a[i],s=arguments.length,l=new Array(s>1?s-1:0),c=1;c<s;c++)l[c-1]=arguments[c];var u=o[r].apply(o,l);return u===o?this:u}}}}var tt=100;function fu(){return tt}function Jt(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=(90-i)*Math.PI/180,r=(90-e)*Math.PI/180,a=tt*(1+t),o=Math.sin(n);return{x:a*o*Math.cos(r),y:a*Math.cos(n),z:a*o*Math.sin(r)}}function Fh(i){var e=i.x,t=i.y,n=i.z,r=Math.sqrt(e*e+t*t+n*n),a=Math.acos(t/r),o=Math.atan2(n,e);return{lat:90-a*180/Math.PI,lng:90-o*180/Math.PI-(o<-Math.PI/2?360:0),altitude:r/tt-1}}function Si(i){return i*Math.PI/180}var Ir=window.THREE?window.THREE:{BackSide:Ct,BufferAttribute:lt,Color:Fe,Mesh:at,ShaderMaterial:Xt},q2=`
uniform float hollowRadius;

varying vec3 vVertexWorldPosition;
varying vec3 vVertexNormal;
varying float vCameraDistanceToObjCenter;
varying float vVertexAngularDistanceToHollowRadius;

void main() {    
  vVertexNormal	= normalize(normalMatrix * normal);
  vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  
  vec4 objCenterViewPosition = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  vCameraDistanceToObjCenter = length(objCenterViewPosition);
  
  float edgeAngle = atan(hollowRadius / vCameraDistanceToObjCenter);
  float vertexAngle = acos(dot(normalize(modelViewMatrix * vec4(position, 1.0)), normalize(objCenterViewPosition)));
  vVertexAngularDistanceToHollowRadius = vertexAngle - edgeAngle;

  gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,U2=`
uniform vec3 color;
uniform float coefficient;
uniform float power;
uniform float hollowRadius;

varying vec3 vVertexNormal;
varying vec3 vVertexWorldPosition;
varying float vCameraDistanceToObjCenter;
varying float vVertexAngularDistanceToHollowRadius;

void main() {
  if (vCameraDistanceToObjCenter < hollowRadius) discard; // inside the hollowRadius
  if (vVertexAngularDistanceToHollowRadius < 0.0) discard; // frag position is within the hollow radius

  vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;
  vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;
  viewCameraToVertex = normalize(viewCameraToVertex);
  float intensity	= pow(
    coefficient + dot(vVertexNormal, viewCameraToVertex),
    power
  );
  gl_FragColor = vec4(color, intensity);
}`;function O2(i,e,t,n){return new Ir.ShaderMaterial({depthWrite:!1,transparent:!0,vertexShader:q2,fragmentShader:U2,uniforms:{coefficient:{value:i},color:{value:new Ir.Color(e)},power:{value:t},hollowRadius:{value:n}}})}function I2(i,e){for(var t=i.clone(),n=new Float32Array(i.attributes.position.count*3),r=0,a=n.length;r<a;r++){var o=i.attributes.normal.array[r],s=i.attributes.position.array[r];n[r]=s+o*e}return t.setAttribute("position",new Ir.BufferAttribute(n,3)),t}var N2=function(i){function e(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.color,o=a===void 0?"gold":a,s=r.size,l=s===void 0?2:s,c=r.coefficient,u=c===void 0?.5:c,h=r.power,p=h===void 0?1:h,d=r.hollowRadius,g=d===void 0?0:d,_=r.backside,m=_===void 0?!0:_;Ya(this,e),n=$a(this,e);var f=I2(t,l),x=O2(u,o,p,g);return m&&(x.side=Ir.BackSide),n.geometry=f,n.material=x,n}return Za(e,i),Ka(e)}(Ir.Mesh),vn=window.THREE?window.THREE:{Color:Fe,Group:Bt,LineBasicMaterial:Va,LineSegments:ah,Mesh:at,MeshPhongMaterial:Rv,SphereGeometry:kn,SRGBColorSpace:Ne,TextureLoader:$s},Bh=Tt({props:{globeImageUrl:{},bumpImageUrl:{},showGlobe:{default:!0,onChange:function(e,t){t.globeGroup.visible=!!e},triggerUpdate:!1},showGraticules:{default:!1,onChange:function(e,t){t.graticulesObj.visible=!!e},triggerUpdate:!1},showAtmosphere:{default:!0,onChange:function(e,t){t.atmosphereObj&&(t.atmosphereObj.visible=!!e)},triggerUpdate:!1},atmosphereColor:{default:"lightskyblue"},atmosphereAltitude:{default:.15},globeCurvatureResolution:{default:4},globeTileEngineUrl:{onChange:function(e,t){t.tileEngine.tileUrl=e}},globeTileEngineMaxLevel:{default:17,onChange:function(e,t){t.tileEngine.maxLevel=e},triggerUpdate:!1},updatePov:{onChange:function(e,t){t.tileEngine.updatePov(e)},triggerUpdate:!1},onReady:{default:function(){},triggerUpdate:!1}},methods:{globeMaterial:function(e,t){return t!==void 0?(e.globeObj.material=t||e.defaultGlobeMaterial,this):e.globeObj.material},_destructor:function(e){Ze(e.globeObj),Ze(e.tileEngine),Ze(e.graticulesObj)}},stateInit:function(){var e=new vn.MeshPhongMaterial({color:0}),t=new vn.Mesh(void 0,e);t.rotation.y=-Math.PI/2;var n=new o_(tt),r=new vn.Group;r.__globeObjType="globe",r.add(t),r.add(n);var a=new vn.LineSegments(new Ah(Sf(),tt,2),new vn.LineBasicMaterial({color:"lightgrey",transparent:!0,opacity:.1}));return{globeGroup:r,globeObj:t,graticulesObj:a,defaultGlobeMaterial:e,tileEngine:n}},init:function(e,t){Ze(e),t.scene=e,t.scene.add(t.globeGroup),t.scene.add(t.graticulesObj),t.ready=!1},update:function(e,t){var n=e.globeObj.material;if(e.tileEngine.visible=!(e.globeObj.visible=!e.globeTileEngineUrl),t.hasOwnProperty("globeCurvatureResolution")){var r;(r=e.globeObj.geometry)===null||r===void 0||r.dispose();var a=Math.max(4,Math.round(360/e.globeCurvatureResolution));e.globeObj.geometry=new vn.SphereGeometry(tt,a,a/2),e.tileEngine.curvatureResolution=e.globeCurvatureResolution}if(t.hasOwnProperty("globeImageUrl")&&(e.globeImageUrl?new vn.TextureLoader().load(e.globeImageUrl,function(s){s.colorSpace=vn.SRGBColorSpace,n.map=s,n.color=null,n.needsUpdate=!0,!e.ready&&(e.ready=!0)&&setTimeout(e.onReady)}):!n.color&&(n.color=new vn.Color(0))),t.hasOwnProperty("bumpImageUrl")&&(e.bumpImageUrl?e.bumpImageUrl&&new vn.TextureLoader().load(e.bumpImageUrl,function(s){n.bumpMap=s,n.needsUpdate=!0}):(n.bumpMap=null,n.needsUpdate=!0)),(t.hasOwnProperty("atmosphereColor")||t.hasOwnProperty("atmosphereAltitude"))&&(e.atmosphereObj&&(e.scene.remove(e.atmosphereObj),Ze(e.atmosphereObj)),e.atmosphereColor&&e.atmosphereAltitude)){var o=e.atmosphereObj=new N2(e.globeObj.geometry,{color:e.atmosphereColor,size:tt*e.atmosphereAltitude,hollowRadius:tt,coefficient:.1,power:3.5});o.visible=!!e.showAtmosphere,o.__globeObjType="atmosphere",e.scene.add(o)}!e.ready&&(!e.globeImageUrl||e.globeTileEngineUrl)&&(e.ready=!0,e.onReady())}}),En=function(e){return isNaN(e)?parseInt(Ef(e).toHex(),16):e},hn=function(e){return e&&isNaN(e)?Cu(e).opacity:1},oi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r,a=1,o=/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.eE+-]+)\s*\)$/.exec(e.trim().toLowerCase());if(o){var s=o.slice(1),l=nt(s,4),c=l[0],u=l[1],h=l[2],p=l[3];r=new Fe("rgb(".concat(+c,",").concat(+u,",").concat(+h,")")),a=Math.min(+p,1)}else r=new Fe(e);n&&r.convertLinearToSRGB();var d=r.toArray();return t?[].concat(Ke(d),[a]):d};function F2(i,e,t){return i.opacity=e,i.transparent=e<1,i.depthWrite=e>=1,i}var du=window.THREE?window.THREE:{BufferAttribute:lt};function wn(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Float32Array;if(e===1)return new du.BufferAttribute(new t(i),e);for(var n=new du.BufferAttribute(new t(i.length*e),e),r=0,a=i.length;r<a;r++)n.set(i[r],r*e);return n}function B2(i){for(var e=i.itemSize,t=[],n=0;n<i.count;n++)t.push(i.array.slice(n*e,(n+1)*e));return t}var Xo=new WeakMap,_a=new WeakMap,xa=new WeakMap,Ht=function(i){function e(t){var n,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.dataBindAttr,o=a===void 0?"__data":a,s=r.objBindAttr,l=s===void 0?"__threeObj":s,c=r.removeDelay,u=c===void 0?0:c;return Ya(this,e),n=$a(this,e),St(n,"scene",void 0),Vo(n,Xo,void 0),Vo(n,_a,void 0),Vo(n,xa,void 0),n.scene=t,Wo(Xo,n,o),Wo(_a,n,l),Wo(xa,n,u),n.onRemoveObj(function(){}),n}return Za(e,i),Ka(e,[{key:"onCreateObj",value:function(n){var r=this;return jo(e,"onCreateObj",this)([function(a){var o=n(a);return a[Mr(_a,r)]=o,o[Mr(Xo,r)]=a,r.scene.add(o),o}]),this}},{key:"onRemoveObj",value:function(n){var r=this;return jo(e,"onRemoveObj",this)([function(a,o){var s=jo(e,"getData",r)([a]);n(a,o);var l=function(){r.scene.remove(a),Ze(a),delete s[Mr(_a,r)]};Mr(xa,r)?setTimeout(l,Mr(xa,r)):l()}]),this}}])}(bf),an=window.THREE?window.THREE:{BufferGeometry:et,CylinderGeometry:Vs,Matrix4:Qe,Mesh:at,MeshLambertMaterial:li,Object3D:dt,Vector3:P},pu=Object.assign({},Ks),mu=pu.BufferGeometryUtils||pu,zh=Tt({props:{pointsData:{default:[]},pointLat:{default:"lat"},pointLng:{default:"lng"},pointColor:{default:function(){return"#ffffaa"}},pointAltitude:{default:.1},pointRadius:{default:.25},pointResolution:{default:12,triggerUpdate:!1},pointsMerge:{default:!1},pointsTransitionDuration:{default:1e3,triggerUpdate:!1}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjPoint"})},update:function(e,t){var n=ae(e.pointLat),r=ae(e.pointLng),a=ae(e.pointAltitude),o=ae(e.pointRadius),s=ae(e.pointColor),l=new an.CylinderGeometry(1,1,1,e.pointResolution);l.applyMatrix4(new an.Matrix4().makeRotationX(Math.PI/2)),l.applyMatrix4(new an.Matrix4().makeTranslation(0,0,-.5));var c=2*Math.PI*tt/360,u={};if(!e.pointsMerge&&t.hasOwnProperty("pointsMerge")&&Ze(e.scene),e.dataMapper.scene=e.pointsMerge?new an.Object3D:e.scene,e.dataMapper.onCreateObj(d).onUpdateObj(g).digest(e.pointsData),e.pointsMerge){var h=e.pointsData.length?(mu.mergeGeometries||mu.mergeBufferGeometries)(e.pointsData.map(function(_){var m=e.dataMapper.getObj(_),f=m.geometry.clone();m.updateMatrix(),f.applyMatrix4(m.matrix);var x=oi(s(_));return f.setAttribute("color",wn(Array(f.getAttribute("position").count).fill(x),4)),f})):new an.BufferGeometry,p=new an.Mesh(h,new an.MeshLambertMaterial({color:16777215,transparent:!0,vertexColors:!0}));p.__globeObjType="points",p.__data=e.pointsData,e.dataMapper.clear(),Ze(e.scene),e.scene.add(p)}function d(){var _=new an.Mesh(l);return _.__globeObjType="point",_}function g(_,m){var f=function(T){var M=_.__currentTargetD=T,w=M.r,O=M.alt,I=M.lat,C=M.lng;Object.assign(_.position,Jt(I,C));var D=e.pointsMerge?new an.Vector3(0,0,0):e.scene.localToWorld(new an.Vector3(0,0,0));_.lookAt(D),_.scale.x=_.scale.y=Math.min(30,w)*c,_.scale.z=Math.max(O*tt,.1)},x={alt:+a(m),r:+o(m),lat:+n(m),lng:+r(m)},v=_.__currentTargetD||Object.assign({},x,{alt:-.001});if(Object.keys(x).some(function(b){return v[b]!==x[b]})&&(e.pointsMerge||!e.pointsTransitionDuration||e.pointsTransitionDuration<0?f(x):e.tweenGroup.add(new Ot(v).to(x,e.pointsTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(f).start())),!e.pointsMerge){var S=s(m),y=S?hn(S):0,E=!!y;_.visible=E,E&&(u.hasOwnProperty(S)||(u[S]=new an.MeshLambertMaterial({color:En(S),transparent:y<1,opacity:y})),_.material=u[S])}}}}),Gh=function(){return{uniforms:{dashOffset:{value:0},dashSize:{value:1},gapSize:{value:0},dashTranslate:{value:0}},vertexShader:`
    `.concat(Oe.common,`
    `).concat(Oe.logdepthbuf_pars_vertex,`
  
    uniform float dashTranslate; 

    attribute vec4 color;
    varying vec4 vColor;
    
    attribute float relDistance;
    varying float vRelDistance;

    void main() {
      // pass through colors and distances
      vColor = color;
      vRelDistance = relDistance + dashTranslate;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  
      `).concat(Oe.logdepthbuf_vertex,`
    }
  `),fragmentShader:`
    `.concat(Oe.logdepthbuf_pars_fragment,`

    uniform float dashOffset; 
    uniform float dashSize;
    uniform float gapSize; 
    
    varying vec4 vColor;
    varying float vRelDistance;
    
    void main() {
      // ignore pixels in the gap
      if (vRelDistance < dashOffset) discard;
      if (mod(vRelDistance - dashOffset, dashSize + gapSize) > dashSize) discard;
    
      // set px color: [r, g, b, a], interpolated between vertices 
      gl_FragColor = vColor; 
  
      `).concat(Oe.logdepthbuf_fragment,`
    }
  `)}},Rs=function(e){return e.uniforms.surfaceRadius={type:"float",value:0},e.vertexShader=(`attribute float surfaceRadius;
varying float vSurfaceRadius;
varying vec3 vPos;
`+e.vertexShader).replace("void main() {",["void main() {","vSurfaceRadius = surfaceRadius;","vPos = position;"].join(`
`)),e.fragmentShader=(`uniform float surfaceRadius;
varying float vSurfaceRadius;
varying vec3 vPos;
`+e.fragmentShader).replace("void main() {",["void main() {","if (length(vPos) < max(surfaceRadius, vSurfaceRadius)) discard;"].join(`
`)),e},z2=function(e){return e.vertexShader=`
    attribute float r;
    
    const float PI = 3.1415926535897932384626433832795;
    float toRad(in float a) {
      return a * PI / 180.0;
    }
    
    vec3 Polar2Cartesian(in vec3 c) { // [lat, lng, r]
      float phi = toRad(90.0 - c.x);
      float theta = toRad(90.0 - c.y);
      float r = c.z;
      return vec3( // x,y,z
        r * sin(phi) * cos(theta),
        r * cos(phi),
        r * sin(phi) * sin(theta)
      );
    }
    
    vec2 Cartesian2Polar(in vec3 p) {
      float r = sqrt(p.x * p.x + p.y * p.y + p.z * p.z);
      float phi = acos(p.y / r);
      float theta = atan(p.z, p.x);
      return vec2( // lat,lng
        90.0 - phi * 180.0 / PI,
        90.0 - theta * 180.0 / PI - (theta < -PI / 2.0 ? 360.0 : 0.0)
      );
    }
    `.concat(e.vertexShader.replace("}",`                  
        vec3 pos = Polar2Cartesian(vec3(Cartesian2Polar(position), r));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `),`
  `),e},nl=function(e,t){return e.onBeforeCompile=function(n){e.userData.shader=t(n)},e},G2=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(r){return r};if(e.userData.shader)t(e.userData.shader.uniforms);else{var n=e.onBeforeCompile;e.onBeforeCompile=function(r){n(r),t(r.uniforms)}}},H2=["stroke"],on=window.THREE?window.THREE:{BufferGeometry:et,CubicBezierCurve3:lh,Curve:fn,Group:Bt,Line:Wa,Mesh:at,NormalBlending:ti,ShaderMaterial:Xt,TubeGeometry:js,Vector3:P},k2=ar.default||ar,Hh=Tt({props:{arcsData:{default:[]},arcStartLat:{default:"startLat"},arcStartLng:{default:"startLng"},arcEndLat:{default:"endLat"},arcEndLng:{default:"endLng"},arcColor:{default:function(){return"#ffffaa"}},arcAltitude:{},arcAltitudeAutoScale:{default:.5},arcStroke:{},arcCurveResolution:{default:64,triggerUpdate:!1},arcCircularResolution:{default:6,triggerUpdate:!1},arcDashLength:{default:1},arcDashGap:{default:0},arcDashInitialGap:{default:0},arcDashAnimateTime:{default:0},arcsTransitionDuration:{default:1e3,triggerUpdate:!1}},methods:{pauseAnimation:function(e){var t;(t=e.ticker)===null||t===void 0||t.pause()},resumeAnimation:function(e){var t;(t=e.ticker)===null||t===void 0||t.resume()},_destructor:function(e){var t;e.sharedMaterial.dispose(),(t=e.ticker)===null||t===void 0||t.dispose()}},stateInit:function(e){var t=e.tweenGroup;return{tweenGroup:t,ticker:new k2,sharedMaterial:new on.ShaderMaterial(Ye(Ye({},Gh()),{},{transparent:!0,blending:on.NormalBlending}))}},init:function(e,t){Ze(e),t.scene=e,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjArc"}).onCreateObj(function(){var n=new on.Group;return n.__globeObjType="arc",n}),t.ticker.onTick.add(function(n,r){t.dataMapper.entries().map(function(a){var o=nt(a,2),s=o[1];return s}).filter(function(a){return a.children.length&&a.children[0].material&&a.children[0].__dashAnimateStep}).forEach(function(a){var o=a.children[0],s=o.__dashAnimateStep*r,l=o.material.uniforms.dashTranslate.value%1e9;o.material.uniforms.dashTranslate.value=l+s})})},update:function(e){var t=ae(e.arcStartLat),n=ae(e.arcStartLng),r=ae(e.arcEndLat),a=ae(e.arcEndLng),o=ae(e.arcAltitude),s=ae(e.arcAltitudeAutoScale),l=ae(e.arcStroke),c=ae(e.arcColor),u=ae(e.arcDashLength),h=ae(e.arcDashGap),p=ae(e.arcDashInitialGap),d=ae(e.arcDashAnimateTime);e.dataMapper.onUpdateObj(function(f,x){var v=l(x),S=v!=null;if(!f.children.length||S!==(f.children[0].type==="Mesh")){Ze(f);var y=S?new on.Mesh:new on.Line(new on.BufferGeometry);y.material=e.sharedMaterial.clone(),f.add(y)}var E=f.children[0];Object.assign(E.material.uniforms,{dashSize:{value:u(x)},gapSize:{value:h(x)},dashOffset:{value:p(x)}});var b=d(x);E.__dashAnimateStep=b>0?1e3/b:0;var T=_(c(x),e.arcCurveResolution,S?e.arcCircularResolution+1:1),M=m(e.arcCurveResolution,S?e.arcCircularResolution+1:1,!0);E.geometry.setAttribute("color",T),E.geometry.setAttribute("relDistance",M);var w=function(D){var N=f.__currentTargetD=D,G=N.stroke,F=R2(N,H2),H=g(F);S?(E.geometry&&E.geometry.dispose(),E.geometry=new on.TubeGeometry(H,e.arcCurveResolution,G/2,e.arcCircularResolution),E.geometry.setAttribute("color",T),E.geometry.setAttribute("relDistance",M)):E.geometry.setFromPoints(H.getPoints(e.arcCurveResolution))},O={stroke:v,alt:o(x),altAutoScale:+s(x),startLat:+t(x),startLng:+n(x),endLat:+r(x),endLng:+a(x)},I=f.__currentTargetD||Object.assign({},O,{altAutoScale:-.001});Object.keys(O).some(function(C){return I[C]!==O[C]})&&(!e.arcsTransitionDuration||e.arcsTransitionDuration<0?w(O):e.tweenGroup.add(new Ot(I).to(O,e.arcsTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(w).start()))}).digest(e.arcsData);function g(f){var x=f.alt,v=f.altAutoScale,S=f.startLat,y=f.startLng,E=f.endLat,b=f.endLng,T=function(B){var j=nt(B,3),ne=j[0],re=j[1],se=j[2],pe=Jt(re,ne,se),k=pe.x,te=pe.y,Me=pe.z;return new on.Vector3(k,te,Me)},M=[y,S],w=[b,E],O=x;if(O==null&&(O=Ps(M,w)/2*v),O){var I=Ls(M,w),C=[.25,.75].map(function(W){return[].concat(Ke(I(W)),[O*1.5])}),D=nt(C,2),N=D[0],G=D[1],F=Qs(on.CubicBezierCurve3,Ke([M,N,G,w].map(T)));return F}else{var H=.001;return V.apply(void 0,Ke([[].concat(M,[H]),[].concat(w,[H])].map(T)))}function V(W,B){var j=W.angleTo(B),ne=j===0?function(){return W.clone()}:function(se){return new on.Vector3().addVectors(W.clone().multiplyScalar(Math.sin((1-se)*j)),B.clone().multiplyScalar(Math.sin(se*j))).divideScalar(Math.sin(j))},re=new on.Curve;return re.getPoint=ne,re}}function _(f,x){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,S=x+1,y;if(f instanceof Array||f instanceof Function){var E=f instanceof Array?ii().domain(f.map(function(C,D){return D/(f.length-1)})).range(f):f;y=function(D){return oi(E(D),!0,!0)}}else{var b=oi(f,!0,!0);y=function(){return b}}for(var T=[],M=0,w=S;M<w;M++)for(var O=y(M/(w-1)),I=0;I<v;I++)T.push(O);return wn(T,4)}function m(f){for(var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,S=f+1,y=[],E=0,b=S;E<b;E++)for(var T=E/(b-1),M=0;M<x;M++)y.push(T);return v&&y.reverse(),wn(y,1)}}}),Kn=window.THREE?window.THREE:{BufferGeometry:et,DoubleSide:Ft,Mesh:at,MeshLambertMaterial:li,Object3D:dt},gu=Object.assign({},Ks),vu=gu.BufferGeometryUtils||gu,kh=Tt({props:{hexBinPointsData:{default:[]},hexBinPointLat:{default:"lat"},hexBinPointLng:{default:"lng"},hexBinPointWeight:{default:1},hexBinResolution:{default:4},hexMargin:{default:.2},hexTopCurvatureResolution:{default:5},hexTopColor:{default:function(){return"#ffffaa"}},hexSideColor:{default:function(){return"#ffffaa"}},hexAltitude:{default:function(e){var t=e.sumWeight;return t*.01}},hexBinMerge:{default:!1},hexTransitionDuration:{default:1e3,triggerUpdate:!1}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjHexbin"})},update:function(e,t){var n=ae(e.hexBinPointLat),r=ae(e.hexBinPointLng),a=ae(e.hexBinPointWeight),o=ae(e.hexAltitude),s=ae(e.hexTopColor),l=ae(e.hexSideColor),c=ae(e.hexMargin),u=yf(e.hexBinPointsData.map(function(x){return Ye(Ye({},x),{},{h3Idx:Mf(n(x),r(x),e.hexBinResolution)})}),"h3Idx"),h=Object.entries(u).map(function(x){var v=nt(x,2),S=v[0],y=v[1];return{h3Idx:S,points:y,sumWeight:y.reduce(function(E,b){return E+ +a(b)},0)}}),p={};if(!e.hexBinMerge&&t.hasOwnProperty("hexBinMerge")&&Ze(e.scene),e.dataMapper.scene=e.hexBinMerge?new Kn.Object3D:e.scene,e.dataMapper.id(function(x){return x.h3Idx}).onCreateObj(m).onUpdateObj(f).digest(h),e.hexBinMerge){var d=h.length?(vu.mergeGeometries||vu.mergeBufferGeometries)(h.map(function(x){var v=e.dataMapper.getObj(x),S=v.geometry.toNonIndexed();v.updateMatrix(),S.applyMatrix4(v.matrix);var y=oi(s(x)),E=oi(l(x)),b=S.getAttribute("position").count,T=S.groups[0].count;return S.setAttribute("color",wn(Ke(new Array(b)).map(function(M,w){return w>=T?y:E}),4)),S})):new Kn.BufferGeometry,g=new Kn.MeshLambertMaterial({color:16777215,transparent:!0,vertexColors:!0,side:Kn.DoubleSide});g.onBeforeCompile=function(x){g.userData.shader=Rs(x)};var _=new Kn.Mesh(d,g);_.__globeObjType="hexBinPoints",_.__data=h,e.dataMapper.clear(),Ze(e.scene),e.scene.add(_)}function m(x){var v=new Kn.Mesh;v.__hexCenter=Au(x.h3Idx),v.__hexGeoJson=Ru(x.h3Idx,!0).reverse();var S=v.__hexCenter[1];return v.__hexGeoJson.forEach(function(y){var E=y[0];Math.abs(S-E)>170&&(y[0]+=S>E?360:-360)}),v.__globeObjType="hexbin",v}function f(x,v){var S=function(F,H,V){return F-(F-H)*V},y=Math.max(0,Math.min(1,+c(v))),E=nt(x.__hexCenter,2),b=E[0],T=E[1],M=y===0?x.__hexGeoJson:x.__hexGeoJson.map(function(G){var F=nt(G,2),H=F[0],V=F[1];return[[H,T],[V,b]].map(function(W){var B=nt(W,2),j=B[0],ne=B[1];return S(j,ne,y)})}),w=e.hexTopCurvatureResolution;x.geometry&&x.geometry.dispose(),x.geometry=new Zs([M],0,tt,!1,!0,!0,w);var O={alt:+o(v)},I=function(F){var H=x.__currentTargetD=F,V=H.alt;x.scale.x=x.scale.y=x.scale.z=1+V;var W=tt/(V+1);x.geometry.setAttribute("surfaceRadius",wn(Array(x.geometry.getAttribute("position").count).fill(W),1))},C=x.__currentTargetD||Object.assign({},O,{alt:-.001});if(Object.keys(O).some(function(G){return C[G]!==O[G]})&&(e.hexBinMerge||!e.hexTransitionDuration||e.hexTransitionDuration<0?I(O):e.tweenGroup.add(new Ot(C).to(O,e.hexTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(I).start())),!e.hexBinMerge){var D=l(v),N=s(v);[D,N].forEach(function(G){if(!p.hasOwnProperty(G)){var F=hn(G);p[G]=nl(new Kn.MeshLambertMaterial({color:En(G),transparent:F<1,opacity:F,side:Kn.DoubleSide}),Rs)}}),x.material=[D,N].map(function(G){return p[G]})}}}}),Vh=function(e){return e*e},On=function(e){return e*Math.PI/180};function V2(i,e){var t=Math.sqrt,n=Math.cos,r=function(u){return Vh(Math.sin(u/2))},a=On(i[1]),o=On(e[1]),s=On(i[0]),l=On(e[0]);return 2*Math.asin(t(r(o-a)+n(a)*n(o)*r(l-s)))}var W2=Math.sqrt(2*Math.PI);function j2(i,e){return Math.exp(-Vh(i/e)/2)/(e*W2)}var X2=function(e){var t=nt(e,2),n=t[0],r=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=o.lngAccessor,l=s===void 0?function(m){return m[0]}:s,c=o.latAccessor,u=c===void 0?function(m){return m[1]}:c,h=o.weightAccessor,p=h===void 0?function(){return 1}:h,d=o.bandwidth,g=[n,r],_=d*Math.PI/180;return Af(a.map(function(m){var f=p(m);if(!f)return 0;var x=V2(g,[l(m),u(m)]);return j2(x,_)*f}))},$2=function(){var i=M2(Ts().m(function e(t){var n,r,a,o,s,l,c,u,h,p,d,g,_,m,f,x,v,S,y,E,b,T,M,w,O,I,C,D,N,G,F,H,V,W,B,j,ne,re,se,pe,k=arguments,te,Me,Re,_e;return Ts().w(function(q){for(;;)switch(q.n){case 0:if(r=k.length>1&&k[1]!==void 0?k[1]:[],a=k.length>2&&k[2]!==void 0?k[2]:{},o=a.lngAccessor,s=o===void 0?function(le){return le[0]}:o,l=a.latAccessor,c=l===void 0?function(le){return le[1]}:l,u=a.weightAccessor,h=u===void 0?function(){return 1}:u,p=a.bandwidth,(n=navigator)!==null&&n!==void 0&&n.gpu){q.n=1;break}return console.warn("WebGPU not enabled in browser. Please consider enabling it to improve performance."),q.a(2,t.map(function(le){return X2(le,r,{lngAccessor:s,latAccessor:c,weightAccessor:h,bandwidth:p})}));case 1:return d=4,g=J_,_=Q_,m=e2,f=t2,x=n2,v=i2,S=r2,y=a2,E=o2,b=s2,T=l2,M=c2,w=u2,O=f(new Go(new Float32Array(t.flat().map(On)),2),"vec2",t.length),I=f(new Go(new Float32Array(r.map(function(le){return[On(s(le)),On(c(le)),h(le)]}).flat()),3),"vec3",r.length),C=new Go(t.length,1),D=f(C,"float",t.length),N=x(Math.PI),G=y(N.mul(2)),F=function(K){return K.mul(K)},H=function(K){return F(E(K.div(2)))},V=function(K,ue){var ie=x(K[1]),we=x(ue[1]),xe=x(K[0]),Se=x(ue[0]);return x(2).mul(T(y(H(we.sub(ie)).add(b(ie).mul(b(we)).mul(H(Se.sub(xe)))))))},W=function(K,ue){return M(w(F(K.div(ue)).div(2))).div(ue.mul(G))},B=m(On(p)),j=m(On(p*d)),ne=m(r.length),re=g(function(){var le=O.element(v),K=D.element(v);K.assign(0),S(ne,function(ue){var ie=ue.i,we=I.element(ie),xe=we.z;_(xe,function(){var Se=V(we.xy,le.xy);_(Se&&Se.lessThan(j),function(){K.addAssign(W(Se,B).mul(xe))})})})}),se=re().compute(t.length),pe=new Lh,q.n=2,pe.computeAsync(se);case 2:return te=Array,Me=Float32Array,q.n=3,pe.getArrayBufferAsync(C);case 3:return Re=q.v,_e=new Me(Re),q.a(2,te.from.call(te,_e))}},e)}));return function(t){return i.apply(this,arguments)}}(),ya=window.THREE?window.THREE:{Mesh:at,MeshLambertMaterial:li,SphereGeometry:kn},Y2=3.5,K2=.1,_u=100,Z2=function(e){var t=Cu(Tf(e));return t.opacity=Math.cbrt(e),t.formatRgb()},Wh=Tt({props:{heatmapsData:{default:[]},heatmapPoints:{default:function(e){return e}},heatmapPointLat:{default:function(e){return e[0]}},heatmapPointLng:{default:function(e){return e[1]}},heatmapPointWeight:{default:1},heatmapBandwidth:{default:2.5},heatmapColorFn:{default:function(){return Z2}},heatmapColorSaturation:{default:1.5},heatmapBaseAltitude:{default:.01},heatmapTopAltitude:{},heatmapsTransitionDuration:{default:0,triggerUpdate:!1}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjHeatmap"}).onCreateObj(function(){var a=new ya.Mesh(new ya.SphereGeometry(tt),nl(new ya.MeshLambertMaterial({vertexColors:!0,transparent:!0}),z2));return a.__globeObjType="heatmap",a})},update:function(e){var t=ae(e.heatmapPoints),n=ae(e.heatmapPointLat),r=ae(e.heatmapPointLng),a=ae(e.heatmapPointWeight),o=ae(e.heatmapBandwidth),s=ae(e.heatmapColorFn),l=ae(e.heatmapColorSaturation),c=ae(e.heatmapBaseAltitude),u=ae(e.heatmapTopAltitude);e.dataMapper.onUpdateObj(function(h,p){var d=o(p),g=s(p),_=l(p),m=c(p),f=u(p),x=t(p).map(function(b){var T=n(b),M=r(b),w=Jt(T,M),O=w.x,I=w.y,C=w.z;return{x:O,y:I,z:C,lat:T,lng:M,weight:a(b)}}),v=Math.max(K2,d/Y2),S=Math.ceil(360/(v||-1));h.geometry.parameters.widthSegments!==S&&(h.geometry.dispose(),h.geometry=new ya.SphereGeometry(tt,S,S/2));var y=B2(h.geometry.getAttribute("position")),E=y.map(function(b){var T=nt(b,3),M=T[0],w=T[1],O=T[2],I=Fh({x:M,y:w,z:O}),C=I.lng,D=I.lat;return[C,D]});$2(E,x,{latAccessor:function(T){return T.lat},lngAccessor:function(T){return T.lng},weightAccessor:function(T){return T.weight},bandwidth:d}).then(function(b){var T=Ke(new Array(_u)).map(function(I,C){return oi(g(C/(_u-1)))}),M=function(C){var D=h.__currentTargetD=C,N=D.kdeVals,G=D.topAlt,F=D.saturation,H=_f(N.map(Math.abs))||1e-15,V=xf([0,H/F],T);h.geometry.setAttribute("color",wn(N.map(function(B){return V(Math.abs(B))}),4));var W=ii([0,H],[tt*(1+m),tt*(1+(G||m))]);h.geometry.setAttribute("r",wn(N.map(W)))},w={kdeVals:b,topAlt:f,saturation:_},O=h.__currentTargetD||Object.assign({},w,{kdeVals:b.map(function(){return 0}),topAlt:f&&m,saturation:.5});O.kdeVals.length!==b.length&&(O.kdeVals=b.slice()),Object.keys(w).some(function(I){return O[I]!==w[I]})&&(!e.heatmapsTransitionDuration||e.heatmapsTransitionDuration<0?M(w):e.tweenGroup.add(new Ot(O).to(w,e.heatmapsTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(M).start()))})}).digest(e.heatmapsData)}}),Zn=window.THREE?window.THREE:{DoubleSide:Ft,Group:Bt,LineBasicMaterial:Va,LineSegments:ah,Mesh:at,MeshBasicMaterial:Nr},jh=Tt({props:{polygonsData:{default:[]},polygonGeoJsonGeometry:{default:"geometry"},polygonSideColor:{default:function(){return"#ffffaa"}},polygonSideMaterial:{},polygonCapColor:{default:function(){return"#ffffaa"}},polygonCapMaterial:{},polygonStrokeColor:{},polygonAltitude:{default:.01},polygonCapCurvatureResolution:{default:5},polygonsTransitionDuration:{default:1e3,triggerUpdate:!1}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjPolygon"}).id(function(a){return a.id}).onCreateObj(function(){var a=new Zn.Group;return a.__defaultSideMaterial=nl(new Zn.MeshBasicMaterial({side:Zn.DoubleSide,depthWrite:!0}),Rs),a.__defaultCapMaterial=new Zn.MeshBasicMaterial({side:Zn.DoubleSide,depthWrite:!0}),a.add(new Zn.Mesh(void 0,[a.__defaultSideMaterial,a.__defaultCapMaterial])),a.add(new Zn.LineSegments(void 0,new Zn.LineBasicMaterial)),a.__globeObjType="polygon",a})},update:function(e){var t=ae(e.polygonGeoJsonGeometry),n=ae(e.polygonAltitude),r=ae(e.polygonCapCurvatureResolution),a=ae(e.polygonCapColor),o=ae(e.polygonCapMaterial),s=ae(e.polygonSideColor),l=ae(e.polygonSideMaterial),c=ae(e.polygonStrokeColor),u=[];e.polygonsData.forEach(function(h){var p={data:h,capColor:a(h),capMaterial:o(h),sideColor:s(h),sideMaterial:l(h),strokeColor:c(h),altitude:+n(h),capCurvatureResolution:+r(h)},d=t(h),g=h.__id||"".concat(Math.round(Math.random()*1e9));h.__id=g,d.type==="Polygon"?u.push(Ye({id:"".concat(g,"_0"),coords:d.coordinates},p)):d.type==="MultiPolygon"?u.push.apply(u,Ke(d.coordinates.map(function(_,m){return Ye({id:"".concat(g,"_").concat(m),coords:_},p)}))):console.warn("Unsupported GeoJson geometry type: ".concat(d.type,". Skipping geometry..."))}),e.dataMapper.onUpdateObj(function(h,p){var d=p.coords,g=p.capColor,_=p.capMaterial,m=p.sideColor,f=p.sideMaterial,x=p.strokeColor,v=p.altitude,S=p.capCurvatureResolution,y=nt(h.children,2),E=y[0],b=y[1],T=!!x;b.visible=T;var M=!!(g||_),w=!!(m||f);J2(E.geometry.parameters||{},{polygonGeoJson:d,curvatureResolution:S,closedTop:M,includeSides:w})||(E.geometry&&E.geometry.dispose(),E.geometry=new Zs(d,0,tt,!1,M,w,S)),T&&(!b.geometry.parameters||b.geometry.parameters.geoJson.coordinates!==d||b.geometry.parameters.resolution!==S)&&(b.geometry&&b.geometry.dispose(),b.geometry=new Ah({type:"Polygon",coordinates:d},tt,S));var O=w?0:-1,I=M?w?1:0:-1;if(O>=0&&(E.material[O]=f||h.__defaultSideMaterial),I>=0&&(E.material[I]=_||h.__defaultCapMaterial),[[!f&&m,O],[!_&&g,I]].forEach(function(H){var V=nt(H,2),W=V[0],B=V[1];if(!(!W||B<0)){var j=E.material[B],ne=hn(W);j.color.set(En(W)),j.transparent=ne<1,j.opacity=ne}}),T){var C=b.material,D=hn(x);C.color.set(En(x)),C.transparent=D<1,C.opacity=D}var N={alt:v},G=function(V){var W=h.__currentTargetD=V,B=W.alt;E.scale.x=E.scale.y=E.scale.z=1+B,T&&(b.scale.x=b.scale.y=b.scale.z=1+B+1e-4),G2(h.__defaultSideMaterial,function(j){return j.surfaceRadius.value=tt/(B+1)})},F=h.__currentTargetD||Object.assign({},N,{alt:-.001});Object.keys(N).some(function(H){return F[H]!==N[H]})&&(!e.polygonsTransitionDuration||e.polygonsTransitionDuration<0||F.alt===N.alt?G(N):e.tweenGroup.add(new Ot(F).to(N,e.polygonsTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(G).start()))}).digest(u)}});function J2(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){return function(n,r){return n===r}};return Object.entries(e).every(function(n){var r=nt(n,2),a=r[0],o=r[1];return i.hasOwnProperty(a)&&t(a)(i[a],o)})}var Ki=window.THREE?window.THREE:{BufferGeometry:et,DoubleSide:Ft,Mesh:at,MeshLambertMaterial:li,Vector3:P},xu=Object.assign({},Ks),yu=xu.BufferGeometryUtils||xu,Xh=Tt({props:{hexPolygonsData:{default:[]},hexPolygonGeoJsonGeometry:{default:"geometry"},hexPolygonColor:{default:function(){return"#ffffaa"}},hexPolygonAltitude:{default:.001},hexPolygonResolution:{default:3},hexPolygonMargin:{default:.2},hexPolygonUseDots:{default:!1},hexPolygonCurvatureResolution:{default:5},hexPolygonDotResolution:{default:12},hexPolygonsTransitionDuration:{default:0,triggerUpdate:!1}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjHexPolygon"}).onCreateObj(function(){var a=new Ki.Mesh(void 0,new Ki.MeshLambertMaterial({side:Ki.DoubleSide}));return a.__globeObjType="hexPolygon",a})},update:function(e){var t=ae(e.hexPolygonGeoJsonGeometry),n=ae(e.hexPolygonColor),r=ae(e.hexPolygonAltitude),a=ae(e.hexPolygonResolution),o=ae(e.hexPolygonMargin),s=ae(e.hexPolygonUseDots),l=ae(e.hexPolygonCurvatureResolution),c=ae(e.hexPolygonDotResolution);e.dataMapper.onUpdateObj(function(u,h){var p=t(h),d=a(h),g=r(h),_=Math.max(0,Math.min(1,+o(h))),m=s(h),f=l(h),x=c(h),v=n(h),S=hn(v);u.material.color.set(En(v)),u.material.transparent=S<1,u.material.opacity=S;var y={alt:g,margin:_,curvatureResolution:f},E={geoJson:p,h3Res:d},b=u.__currentTargetD||Object.assign({},y,{alt:-.001}),T=u.__currentMemD||E;if(Object.keys(y).some(function(I){return b[I]!==y[I]})||Object.keys(E).some(function(I){return T[I]!==E[I]})){u.__currentMemD=E;var M=[];p.type==="Polygon"?hl(p.coordinates,d,!0).forEach(function(I){return M.push(I)}):p.type==="MultiPolygon"?p.coordinates.forEach(function(I){return hl(I,d,!0).forEach(function(C){return M.push(C)})}):console.warn("Unsupported GeoJson geometry type: ".concat(p.type,". Skipping geometry..."));var w=M.map(function(I){var C=Au(I),D=Ru(I,!0).reverse(),N=C[1];return D.forEach(function(G){var F=G[0];Math.abs(N-F)>170&&(G[0]+=N>F?360:-360)}),{h3Idx:I,hexCenter:C,hexGeoJson:D}}),O=function(C){var D=u.__currentTargetD=C,N=D.alt,G=D.margin,F=D.curvatureResolution;u.geometry&&u.geometry.dispose(),u.geometry=w.length?(yu.mergeGeometries||yu.mergeBufferGeometries)(w.map(function(H){var V=nt(H.hexCenter,2),W=V[0],B=V[1];if(m){var j=Jt(W,B,N),ne=Jt(H.hexGeoJson[0][1],H.hexGeoJson[0][0],N),re=.85*(1-G)*new Ki.Vector3(j.x,j.y,j.z).distanceTo(new Ki.Vector3(ne.x,ne.y,ne.z)),se=new ja(re,x);return se.rotateX(Si(-W)),se.rotateY(Si(B)),se.translate(j.x,j.y,j.z),se}else{var pe=function(Me,Re,_e){return Me-(Me-Re)*_e},k=G===0?H.hexGeoJson:H.hexGeoJson.map(function(te){var Me=nt(te,2),Re=Me[0],_e=Me[1];return[[Re,B],[_e,W]].map(function(q){var le=nt(q,2),K=le[0],ue=le[1];return pe(K,ue,G)})});return new Zs([k],tt,tt*(1+N),!1,!0,!1,F)}})):new Ki.BufferGeometry};!e.hexPolygonsTransitionDuration||e.hexPolygonsTransitionDuration<0?O(y):e.tweenGroup.add(new Ot(b).to(y,e.hexPolygonsTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(O).start())}}).digest(e.hexPolygonsData)}}),Q2=window.THREE?window.THREE:{Vector3:P};function e3(i,e){var t=function(o,s){var l=o[o.length-1];return[].concat(Ke(o),Ke(Array(s-o.length).fill(l)))},n=Math.max(i.length,e.length),r=wf.apply(void 0,Ke([i,e].map(function(a){return a.map(function(o){var s=o.x,l=o.y,c=o.z;return[s,l,c]})}).map(function(a){return t(a,n)})));return function(a){return a===0?i:a===1?e:r(a).map(function(o){var s=nt(o,3),l=s[0],c=s[1],u=s[2];return new Q2.Vector3(l,c,u)})}}var vi=window.THREE?window.THREE:{BufferGeometry:et,Color:Fe,Group:Bt,Line:Wa,NormalBlending:ti,ShaderMaterial:Xt,Vector3:P},t3=ar.default||ar,$h=Tt({props:{pathsData:{default:[]},pathPoints:{default:function(e){return e}},pathPointLat:{default:function(e){return e[0]}},pathPointLng:{default:function(e){return e[1]}},pathPointAlt:{default:.001},pathResolution:{default:2},pathColor:{default:function(){return"#ffffaa"}},pathStroke:{},pathDashLength:{default:1},pathDashGap:{default:0},pathDashInitialGap:{default:0},pathDashAnimateTime:{default:0},pathTransitionDuration:{default:1e3,triggerUpdate:!1},rendererSize:{}},methods:{pauseAnimation:function(e){var t;(t=e.ticker)===null||t===void 0||t.pause()},resumeAnimation:function(e){var t;(t=e.ticker)===null||t===void 0||t.resume()},_destructor:function(e){var t;(t=e.ticker)===null||t===void 0||t.dispose()}},stateInit:function(e){var t=e.tweenGroup;return{tweenGroup:t,ticker:new t3,sharedMaterial:new vi.ShaderMaterial(Ye(Ye({},Gh()),{},{transparent:!0,blending:vi.NormalBlending}))}},init:function(e,t){Ze(e),t.scene=e,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjPath"}).onCreateObj(function(){var n=new vi.Group;return n.__globeObjType="path",n}),t.ticker.onTick.add(function(n,r){t.dataMapper.entries().map(function(a){var o=nt(a,2),s=o[1];return s}).filter(function(a){return a.children.length&&a.children[0].material&&a.children[0].__dashAnimateStep}).forEach(function(a){var o=a.children[0],s=o.__dashAnimateStep*r;if(o.type==="Line"){var l=o.material.uniforms.dashTranslate.value%1e9;o.material.uniforms.dashTranslate.value=l+s}else if(o.type==="Line2"){for(var c=o.material.dashOffset-s,u=o.material.dashSize+o.material.gapSize;c<=-u;)c+=u;o.material.dashOffset=c}})})},update:function(e){var t=ae(e.pathPoints),n=ae(e.pathPointLat),r=ae(e.pathPointLng),a=ae(e.pathPointAlt),o=ae(e.pathStroke),s=ae(e.pathColor),l=ae(e.pathDashLength),c=ae(e.pathDashGap),u=ae(e.pathDashInitialGap),h=ae(e.pathDashAnimateTime);e.dataMapper.onUpdateObj(function(m,f){var x=o(f),v=x!=null;if(!m.children.length||v===(m.children[0].type==="Line")){Ze(m);var S=v?new p2(new qh,new Js):new vi.Line(new vi.BufferGeometry,e.sharedMaterial.clone());m.add(S)}var y=m.children[0],E=d(t(f),n,r,a,e.pathResolution),b=h(f);if(y.__dashAnimateStep=b>0?1e3/b:0,v){y.material.resolution=e.rendererSize;{var w=l(f),O=c(f),I=u(f);y.material.dashed=O>0,y.material.dashed?y.material.defines.USE_DASH="":delete y.material.defines.USE_DASH,y.material.dashed&&(y.material.dashScale=1/p(E),y.material.dashSize=w,y.material.gapSize=O,y.material.dashOffset=-I)}{var C=s(f);if(C instanceof Array){var D=g(s(f),E.length-1,1,!1);y.geometry.setColors(D.array),y.material.vertexColors=!0}else{var N=C,G=hn(N);y.material.color=new vi.Color(En(N)),y.material.transparent=G<1,y.material.opacity=G,y.material.vertexColors=!1}}y.material.needsUpdate=!0}else{Object.assign(y.material.uniforms,{dashSize:{value:l(f)},gapSize:{value:c(f)},dashOffset:{value:u(f)}});var T=g(s(f),E.length),M=_(E.length,1,!0);y.geometry.setAttribute("color",T),y.geometry.setAttribute("relDistance",M)}var F=e3(m.__currentTargetD&&m.__currentTargetD.points||[E[0]],E),H=function(j){var ne=m.__currentTargetD=j,re=ne.stroke,se=ne.interpolK,pe=m.__currentTargetD.points=F(se);if(v){var k;y.geometry.setPositions((k=[]).concat.apply(k,Ke(pe.map(function(te){var Me=te.x,Re=te.y,_e=te.z;return[Me,Re,_e]})))),y.material.linewidth=re,y.material.dashed&&y.computeLineDistances()}else y.geometry.setFromPoints(pe),y.geometry.computeBoundingSphere()},V={stroke:x,interpolK:1},W=Object.assign({},m.__currentTargetD||V,{interpolK:0});Object.keys(V).some(function(B){return W[B]!==V[B]})&&(!e.pathTransitionDuration||e.pathTransitionDuration<0?H(V):e.tweenGroup.add(new Ot(W).to(V,e.pathTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(H).start()))}).digest(e.pathsData);function p(m){var f=0,x;return m.forEach(function(v){x&&(f+=x.distanceTo(v)),x=v}),f}function d(m,f,x,v,S){var y=function(M,w,O){for(var I=[],C=1;C<=O;C++)I.push(M+(w-M)*C/(O+1));return I},E=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,O=[],I=null;return M.forEach(function(C){if(I){for(;Math.abs(I[1]-C[1])>180;)I[1]+=360*(I[1]<C[1]?1:-1);var D=Math.sqrt(Math.pow(C[0]-I[0],2)+Math.pow(C[1]-I[1],2));if(D>w)for(var N=Math.floor(D/w),G=y(I[0],C[0],N),F=y(I[1],C[1],N),H=y(I[2],C[2],N),V=0,W=G.length;V<W;V++)O.push([G[V],F[V],H[V]])}O.push(I=C)}),O},b=function(M){var w=nt(M,3),O=w[0],I=w[1],C=w[2],D=Jt(O,I,C),N=D.x,G=D.y,F=D.z;return new vi.Vector3(N,G,F)};return E(m.map(function(T){return[f(T),x(T),v(T)]}),S).map(b)}function g(m,f){var x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,S=f+1,y;if(m instanceof Array||m instanceof Function){var E=m instanceof Array?ii().domain(m.map(function(C,D){return D/(m.length-1)})).range(m):m;y=function(D){return oi(E(D),v,!0)}}else{var b=oi(m,v,!0);y=function(){return b}}for(var T=[],M=0,w=S;M<w;M++)for(var O=y(M/(w-1)),I=0;I<x;I++)T.push(O);return wn(T,v?4:3)}function _(m){for(var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,v=m+1,S=[],y=0,E=v;y<E;y++)for(var b=y/(E-1),T=0;T<f;T++)S.push(b);return x&&S.reverse(),wn(S,1)}}}),Ma=window.THREE?window.THREE:{Euler:Ri,Mesh:at,MeshLambertMaterial:li,SphereGeometry:kn},Yh=Tt({props:{tilesData:{default:[]},tileLat:{default:"lat"},tileLng:{default:"lng"},tileAltitude:{default:.01},tileWidth:{default:1},tileHeight:{default:1},tileUseGlobeProjection:{default:!0},tileMaterial:{default:function(){return new Ma.MeshLambertMaterial({color:"#ffbb88",opacity:.4,transparent:!0})}},tileCurvatureResolution:{default:5},tilesTransitionDuration:{default:1e3,triggerUpdate:!1}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjTile"}).onCreateObj(function(){var a=new Ma.Mesh;return a.__globeObjType="tile",a})},update:function(e){var t=ae(e.tileLat),n=ae(e.tileLng),r=ae(e.tileAltitude),a=ae(e.tileWidth),o=ae(e.tileHeight),s=ae(e.tileUseGlobeProjection),l=ae(e.tileMaterial),c=ae(e.tileCurvatureResolution);e.dataMapper.onUpdateObj(function(u,h){u.material=l(h);var p=s(h),d=c(h),g=function(x){var v=u.__currentTargetD=x,S=v.lat,y=v.lng,E=v.alt,b=v.width,T=v.height,M=Zi(y),w=Zi(-S);u.geometry&&u.geometry.dispose(),u.geometry=new Ma.SphereGeometry(tt*(1+E),Math.ceil(b/(d||-1)),Math.ceil(T/(d||-1)),Zi(90-b/2)+(p?M:0),Zi(b),Zi(90-T/2)+(p?w:0),Zi(T)),p||u.setRotationFromEuler(new Ma.Euler(w,M,0,"YXZ"))},_={lat:+t(h),lng:+n(h),alt:+r(h),width:+a(h),height:+o(h)},m=u.__currentTargetD||Object.assign({},_,{width:0,height:0});Object.keys(_).some(function(f){return m[f]!==_[f]})&&(!e.tilesTransitionDuration||e.tilesTransitionDuration<0?g(_):e.tweenGroup.add(new Ot(m).to(_,e.tilesTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(g).start()))}).digest(e.tilesData)}}),Zi=function(e){return e*Math.PI/180},Sr=window.THREE?window.THREE:{BufferGeometry:et,Color:Fe,Points:Kg,PointsMaterial:oh},Kh=Tt({props:{particlesData:{default:[]},particlesList:{default:function(e){return e}},particleLat:{default:"lat"},particleLng:{default:"lng"},particleAltitude:{default:.01},particlesSize:{default:.5},particlesSizeAttenuation:{default:!0},particlesColor:{default:function(){return"white"}},particlesTexture:{}},init:function(e,t){Ze(e),t.scene=e,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjParticles"}).onCreateObj(function(){var n=new Sr.Points(new Sr.BufferGeometry,new Sr.PointsMaterial);return n.__globeObjType="particles",n}).onUpdateObj(function(n,r){var a=ae(t.particlesList),o=ae(t.particleLat),s=ae(t.particleLng),l=ae(t.particleAltitude);n.geometry.setAttribute("position",wn(a(r).map(function(c){return Object.values(Jt(o(c),s(c),l(c)))}),3))})},update:function(e,t){["particlesData","particlesList","particleLat","particleLng","particleAltitude"].some(function(s){return t.hasOwnProperty(s)})&&e.dataMapper.digest(e.particlesData);var n=ae(e.particlesColor),r=ae(e.particlesSize),a=ae(e.particlesSizeAttenuation),o=ae(e.particlesTexture);e.dataMapper.entries().forEach(function(s){var l=nt(s,2),c=l[0],u=l[1];if(u.material.size=r(c),u.material.sizeAttenuation=a(c),e.particlesTexture)u.material.color=new Sr.Color(16777215),u.material.transparent=!1,u.material.alphaTest=.5,u.material.map=o(c);else{var h=n(c),p=hn(h);u.material.color=new Sr.Color(En(h)),u.material.transparent=p<1,u.material.opacity=p,u.material.alphaTest=0}})}}),n3=window.THREE?window.THREE:{BufferGeometry:et},i3=function(i){function e(){var t,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:32;Ya(this,e),t=$a(this,e),t.type="CircleLineGeometry",t.parameters={radius:n,segmentCount:r};for(var a=[],o=0;o<=r;o++){var s=(o/r-.25)*Math.PI*2;a.push({x:Math.cos(s)*n,y:Math.sin(s)*n,z:0})}return t.setFromPoints(a),t}return Za(e,i),Ka(e)}(n3.BufferGeometry),Ji=window.THREE?window.THREE:{Color:Fe,Group:Bt,Line:Wa,LineBasicMaterial:Va,Vector3:P},r3=ar.default||ar,Zh=Tt({props:{ringsData:{default:[]},ringLat:{default:"lat"},ringLng:{default:"lng"},ringAltitude:{default:.0015},ringColor:{default:function(){return"#ffffaa"},triggerUpdate:!1},ringResolution:{default:64,triggerUpdate:!1},ringMaxRadius:{default:2,triggerUpdate:!1},ringPropagationSpeed:{default:1,triggerUpdate:!1},ringRepeatPeriod:{default:700,triggerUpdate:!1}},methods:{pauseAnimation:function(e){var t;(t=e.ticker)===null||t===void 0||t.pause()},resumeAnimation:function(e){var t;(t=e.ticker)===null||t===void 0||t.resume()},_destructor:function(e){var t;(t=e.ticker)===null||t===void 0||t.dispose()}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjRing",removeDelay:3e4}).onCreateObj(function(){var a=new Ji.Group;return a.__globeObjType="ring",a}),t.ticker=new r3,t.ticker.onTick.add(function(a){if(t.ringsData.length){var o=ae(t.ringColor),s=ae(t.ringAltitude),l=ae(t.ringMaxRadius),c=ae(t.ringPropagationSpeed),u=ae(t.ringRepeatPeriod);t.dataMapper.entries().filter(function(h){var p=nt(h,2),d=p[1];return d}).forEach(function(h){var p=nt(h,2),d=p[0],g=p[1];if((g.__nextRingTime||0)<=a){var _=u(d)/1e3;g.__nextRingTime=a+(_<=0?1/0:_);var m=new Ji.Line(new i3(1,t.ringResolution),new Ji.LineBasicMaterial),f=o(d),x=f instanceof Array||f instanceof Function,v;x?f instanceof Array?(v=ii().domain(f.map(function(O,I){return I/(f.length-1)})).range(f),m.material.transparent=f.some(function(O){return hn(O)<1})):(v=f,m.material.transparent=!0):(m.material.color=new Ji.Color(En(f)),F2(m.material,hn(f)));var S=tt*(1+s(d)),y=l(d),E=y*Math.PI/180,b=c(d),T=b<=0,M=function(I){var C=I.t,D=(T?1-C:C)*E;if(m.scale.x=m.scale.y=S*Math.sin(D),m.position.z=S*(1-Math.cos(D)),x){var N=v(C);m.material.color=new Ji.Color(En(N)),m.material.transparent&&(m.material.opacity=hn(N))}};if(b===0)M({t:0}),g.add(m);else{var w=Math.abs(y/b)*1e3;t.tweenGroup.add(new Ot({t:0}).to({t:1},w).onUpdate(M).onStart(function(){return g.add(m)}).onComplete(function(){g.remove(m),tl(m)}).start())}}})}})},update:function(e){var t=ae(e.ringLat),n=ae(e.ringLng),r=ae(e.ringAltitude),a=e.scene.localToWorld(new Ji.Vector3(0,0,0));e.dataMapper.onUpdateObj(function(o,s){var l=t(s),c=n(s),u=r(s);Object.assign(o.position,Jt(l,c,u)),o.lookAt(a)}).digest(e.ringsData)}}),a3={0:{x_min:73,x_max:715,ha:792,o:"m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 "},1:{x_min:215.671875,x_max:574,ha:792,o:"m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 "},2:{x_min:59,x_max:731,ha:792,o:"m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 "},3:{x_min:54,x_max:737,ha:792,o:"m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 "},4:{x_min:48,x_max:742.453125,ha:792,o:"m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 "},5:{x_min:54.171875,x_max:738,ha:792,o:"m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 "},6:{x_min:53,x_max:739,ha:792,o:"m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 "},7:{x_min:58.71875,x_max:730.953125,ha:792,o:"m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 "},8:{x_min:55,x_max:736,ha:792,o:"m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 "},9:{x_min:53,x_max:739,ha:792,o:"m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 "},ο:{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 "},S:{x_min:0,x_max:788,ha:890,o:"m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 "},"¦":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"/":{x_min:183.25,x_max:608.328125,ha:792,o:"m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 "},Τ:{x_min:-.4375,x_max:777.453125,ha:839,o:"m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 "},y:{x_min:0,x_max:684.78125,ha:771,o:"m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 "},Π:{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 "},ΐ:{x_min:-111,x_max:339,ha:361,o:"m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 "},g:{x_min:0,x_max:686,ha:838,o:"m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 "},"²":{x_min:0,x_max:442,ha:539,o:"m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 "},"–":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},Κ:{x_min:0,x_max:819.5625,ha:893,o:"m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},ƒ:{x_min:-46.265625,x_max:392,ha:513,o:"m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 "},e:{x_min:0,x_max:714,ha:813,o:"m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 "},ό:{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 "},J:{x_min:0,x_max:588,ha:699,o:"m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 "},"»":{x_min:-1,x_max:503,ha:601,o:"m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 "},"©":{x_min:-3,x_max:1008,ha:1106,o:"m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 "},ώ:{x_min:0,x_max:922,ha:1030,o:"m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 "},"^":{x_min:193.0625,x_max:598.609375,ha:792,o:"m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 "},"«":{x_min:0,x_max:507.203125,ha:604,o:"m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 "},D:{x_min:0,x_max:828,ha:935,o:"m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 "},"∙":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},ÿ:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1009.71875,ha:1100,o:"m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 "},$:{x_min:0,x_max:700,ha:793,o:"m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 "},"\\":{x_min:-.015625,x_max:425.0625,ha:522,o:"m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 "},µ:{x_min:0,x_max:697.21875,ha:747,o:"m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 "},Ι:{x_min:42,x_max:181,ha:297,o:"m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 "},Ύ:{x_min:0,x_max:1144.5,ha:1214,o:"m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"’":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},Ν:{x_min:0,x_max:801,ha:915,o:"m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 "},"-":{x_min:8.71875,x_max:350.390625,ha:478,o:"m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 "},Q:{x_min:0,x_max:968,ha:1072,o:"m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 "},ς:{x_min:1,x_max:676.28125,ha:740,o:"m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 "},M:{x_min:0,x_max:954,ha:1067,o:"m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 "},Ψ:{x_min:0,x_max:1006,ha:1094,o:"m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 "},C:{x_min:0,x_max:886,ha:944,o:"m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 "},"!":{x_min:0,x_max:138,ha:236,o:"m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 "},"{":{x_min:0,x_max:480.5625,ha:578,o:"m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 "},X:{x_min:-.015625,x_max:854.15625,ha:940,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 "},"#":{x_min:0,x_max:963.890625,ha:1061,o:"m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 "},ι:{x_min:42,x_max:284,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 "},Ά:{x_min:0,x_max:906.953125,ha:982,o:"m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},")":{x_min:0,x_max:318,ha:415,o:"m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 "},ε:{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 "},Δ:{x_min:0,x_max:952.78125,ha:1028,o:"m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 "},"}":{x_min:0,x_max:481,ha:578,o:"m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 "},"‰":{x_min:-3,x_max:1672,ha:1821,o:"m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 "},a:{x_min:0,x_max:698.609375,ha:794,o:"m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 "},"—":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 "},"=":{x_min:8.71875,x_max:780.953125,ha:792,o:"m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 "},N:{x_min:0,x_max:801,ha:914,o:"m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 "},ρ:{x_min:0,x_max:712,ha:797,o:"m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 "},"¯":{x_min:0,x_max:941.671875,ha:938,o:"m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 "},Z:{x_min:0,x_max:779,ha:849,o:"m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 "},u:{x_min:0,x_max:617,ha:729,o:"m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 "},k:{x_min:0,x_max:612.484375,ha:697,o:"m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 "},Η:{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},Α:{x_min:0,x_max:906.953125,ha:985,o:"m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},s:{x_min:0,x_max:604,ha:697,o:"m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 "},B:{x_min:0,x_max:778,ha:876,o:"m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 "},"…":{x_min:0,x_max:614,ha:708,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 "},"?":{x_min:0,x_max:607,ha:704,o:"m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 "},H:{x_min:0,x_max:803,ha:915,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},ν:{x_min:0,x_max:675,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 "},c:{x_min:1,x_max:701.390625,ha:775,o:"m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 "},"¶":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},β:{x_min:0,x_max:660,ha:745,o:"m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 "},Μ:{x_min:0,x_max:954,ha:1068,o:"m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 "},Ό:{x_min:.109375,x_max:1120,ha:1217,o:"m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},Ή:{x_min:0,x_max:1158,ha:1275,o:"m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"•":{x_min:0,x_max:663.890625,ha:775,o:"m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 "},"¥":{x_min:.1875,x_max:819.546875,ha:886,o:"m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 "},"(":{x_min:0,x_max:318.0625,ha:415,o:"m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 "},U:{x_min:0,x_max:796,ha:904,o:"m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 "},γ:{x_min:.5,x_max:744.953125,ha:822,o:"m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 "},α:{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 "},F:{x_min:0,x_max:683.328125,ha:717,o:"m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 "},"­":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},":":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},Χ:{x_min:0,x_max:854.171875,ha:935,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 "},"*":{x_min:116,x_max:674,ha:792,o:"m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 "},"†":{x_min:0,x_max:777,ha:835,o:"m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 "},"°":{x_min:0,x_max:347,ha:444,o:"m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 "},V:{x_min:0,x_max:862.71875,ha:940,o:"m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 "},Ξ:{x_min:0,x_max:734.71875,ha:763,o:"m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 "}," ":{x_min:0,x_max:0,ha:853},Ϋ:{x_min:.328125,x_max:819.515625,ha:889,o:"m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 "},"”":{x_min:0,x_max:347,ha:454,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 "},"@":{x_min:0,x_max:1260,ha:1357,o:"m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 "},Ί:{x_min:0,x_max:499,ha:613,o:"m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 "},i:{x_min:14,x_max:136,ha:275,o:"m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 "},Β:{x_min:0,x_max:778,ha:877,o:"m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 "},υ:{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 "},"]":{x_min:0,x_max:275,ha:372,o:"m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 "},m:{x_min:0,x_max:1019,ha:1128,o:"m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 "},χ:{x_min:8.328125,x_max:780.5625,ha:815,o:"m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 "},ί:{x_min:42,x_max:326.71875,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 "},Ζ:{x_min:0,x_max:779.171875,ha:850,o:"m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 "},R:{x_min:0,x_max:781.953125,ha:907,o:"m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 "},o:{x_min:0,x_max:713,ha:821,o:"m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 "},K:{x_min:0,x_max:819.46875,ha:906,o:"m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},",":{x_min:0,x_max:142,ha:239,o:"m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 "},d:{x_min:0,x_max:683,ha:796,o:"m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 "},"¨":{x_min:-109,x_max:247,ha:232,o:"m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 "},E:{x_min:0,x_max:736.109375,ha:789,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},Y:{x_min:0,x_max:820,ha:886,o:"m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 "},'"':{x_min:0,x_max:299,ha:396,o:"m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"‹":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"„":{x_min:0,x_max:364,ha:467,o:"m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 "},δ:{x_min:1,x_max:710,ha:810,o:"m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 "},έ:{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 "},ω:{x_min:0,x_max:922,ha:1031,o:"m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 "},"´":{x_min:0,x_max:96,ha:251,o:"m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"±":{x_min:11,x_max:781,ha:792,o:"m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 "},"|":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},ϋ:{x_min:0,x_max:617,ha:725,o:"m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 "},"§":{x_min:0,x_max:593,ha:690,o:"m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 "},b:{x_min:0,x_max:685,ha:783,o:"m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 "},q:{x_min:0,x_max:683,ha:876,o:"m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 "},Ω:{x_min:-.171875,x_max:969.5625,ha:1068,o:"m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 "},ύ:{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 "},z:{x_min:-.015625,x_max:613.890625,ha:697,o:"m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 "},"™":{x_min:0,x_max:894,ha:1e3,o:"m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 "},ή:{x_min:.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 "},Θ:{x_min:0,x_max:960,ha:1056,o:"m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 "},"®":{x_min:-3,x_max:1008,ha:1106,o:"m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 "},"~":{x_min:0,x_max:833,ha:931,o:"m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 "},Ε:{x_min:0,x_max:736.21875,ha:778,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},"³":{x_min:0,x_max:450,ha:547,o:"m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 "},"[":{x_min:0,x_max:273.609375,ha:371,o:"m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 "},L:{x_min:0,x_max:645.828125,ha:696,o:"m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 "},σ:{x_min:0,x_max:803.390625,ha:894,o:"m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 "},ζ:{x_min:0,x_max:573,ha:642,o:"m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 "},θ:{x_min:0,x_max:674,ha:778,o:"m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 "},Ο:{x_min:0,x_max:958,ha:1054,o:"m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 "},Γ:{x_min:0,x_max:705.28125,ha:749,o:"m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:-3,x_max:1089,ha:1186,o:"m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 "},P:{x_min:0,x_max:726,ha:806,o:"m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 "},Έ:{x_min:0,x_max:1078.21875,ha:1118,o:"m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},Ώ:{x_min:.125,x_max:1136.546875,ha:1235,o:"m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 "},_:{x_min:0,x_max:705.5625,ha:803,o:"m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 "},Ϊ:{x_min:-110,x_max:246,ha:275,o:"m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 "},"+":{x_min:23,x_max:768,ha:792,o:"m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 "},"½":{x_min:0,x_max:1050,ha:1149,o:"m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 "},Ρ:{x_min:0,x_max:720,ha:783,o:"m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 "},"'":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},ª:{x_min:0,x_max:350,ha:397,o:"m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 "},"΅":{x_min:0,x_max:450,ha:553,o:"m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 "},T:{x_min:0,x_max:777,ha:835,o:"m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 "},Φ:{x_min:0,x_max:915,ha:997,o:"m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 "},"⁋":{x_min:0,x_max:0,ha:694},j:{x_min:-77.78125,x_max:167,ha:349,o:"m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 "},Σ:{x_min:0,x_max:756.953125,ha:819,o:"m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 "},"›":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"<":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"£":{x_min:0,x_max:704.484375,ha:801,o:"m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 "},t:{x_min:0,x_max:367,ha:458,o:"m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 "},"¬":{x_min:0,x_max:706,ha:803,o:"m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 "},λ:{x_min:0,x_max:750,ha:803,o:"m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 "},W:{x_min:0,x_max:1263.890625,ha:1351,o:"m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 "},">":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},v:{x_min:0,x_max:675.15625,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 "},τ:{x_min:.28125,x_max:644.5,ha:703,o:"m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 "},ξ:{x_min:0,x_max:624.9375,ha:699,o:"m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 "},"&":{x_min:-3,x_max:894.25,ha:992,o:"m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 "},Λ:{x_min:0,x_max:862.5,ha:942,o:"m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 "},I:{x_min:41,x_max:180,ha:293,o:"m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 "},G:{x_min:0,x_max:921,ha:1011,o:"m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 "},ΰ:{x_min:0,x_max:617,ha:725,o:"m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 "},"`":{x_min:0,x_max:138.890625,ha:236,o:"m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 "},"·":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},Υ:{x_min:.328125,x_max:819.515625,ha:889,o:"m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 "},r:{x_min:0,x_max:355.5625,ha:432,o:"m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 "},x:{x_min:0,x_max:675,ha:764,o:"m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 "},μ:{x_min:0,x_max:696.609375,ha:747,o:"m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 "},h:{x_min:0,x_max:615,ha:724,o:"m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 "},".":{x_min:0,x_max:142,ha:239,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},φ:{x_min:-2,x_max:878,ha:974,o:"m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 "},";":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 "},f:{x_min:0,x_max:378,ha:472,o:"m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 "},"“":{x_min:1,x_max:348.21875,ha:454,o:"m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 "},A:{x_min:.03125,x_max:906.953125,ha:1008,o:"m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 "},"‘":{x_min:1,x_max:139.890625,ha:236,o:"m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 "},ϊ:{x_min:-70,x_max:283,ha:361,o:"m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 "},π:{x_min:-.21875,x_max:773.21875,ha:857,o:"m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 "},ά:{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 "},O:{x_min:0,x_max:958,ha:1057,o:"m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 "},n:{x_min:0,x_max:615,ha:724,o:"m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 "},l:{x_min:41,x_max:166,ha:279,o:"m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 "},"¤":{x_min:40.09375,x_max:728.796875,ha:825,o:"m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 "},κ:{x_min:0,x_max:632.328125,ha:679,o:"m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 "},p:{x_min:0,x_max:685,ha:786,o:"m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 "},"‡":{x_min:0,x_max:777,ha:835,o:"m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 "},ψ:{x_min:0,x_max:808,ha:907,o:"m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 "},η:{x_min:.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 "}},o3="normal",s3=1189,l3=-100,c3="normal",u3={yMin:-334,xMin:-111,yMax:1189,xMax:1672},h3=1e3,f3={postscript_name:"Helvetiker-Regular",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Helvetiker",font_family_name:"Helvetiker",copyright:"Copyright (c) Μagenta ltd, 2004",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Μagenta ltd:Helvetiker:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Μagenta ltd",font_sub_family_name:"Regular"},d3=-334,p3="Helvetiker",m3=1522,g3=50,v3={glyphs:a3,cssFontWeight:o3,ascender:s3,underlinePosition:l3,cssFontStyle:c3,boundingBox:u3,resolution:h3,original_font_information:f3,descender:d3,familyName:p3,lineHeight:m3,underlineThickness:g3},sn=Ye(Ye({},window.THREE?window.THREE:{BoxGeometry:fr,CircleGeometry:ja,DoubleSide:Ft,Group:Bt,Mesh:at,MeshLambertMaterial:li,TextGeometry:cu,Vector3:P}),{},{Font:m2,TextGeometry:cu}),Jh=Tt({props:{labelsData:{default:[]},labelLat:{default:"lat"},labelLng:{default:"lng"},labelAltitude:{default:.002},labelText:{default:"text"},labelSize:{default:.5},labelTypeFace:{default:v3,onChange:function(e,t){t.font=new sn.Font(e)}},labelColor:{default:function(){return"lightgrey"}},labelRotation:{default:0},labelResolution:{default:3},labelIncludeDot:{default:!0},labelDotRadius:{default:.1},labelDotOrientation:{default:function(){return"bottom"}},labelsTransitionDuration:{default:1e3,triggerUpdate:!1}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r;var a=new sn.CircleGeometry(1,32);t.dataMapper=new Ht(e,{objBindAttr:"__threeObjLabel"}).onCreateObj(function(){var o=new sn.MeshLambertMaterial;o.side=Ft;var s=new sn.Group;s.add(new sn.Mesh(a,o));var l=new sn.Mesh(void 0,o);s.add(l);var c=new sn.Mesh;return c.visible=!1,l.add(c),s.__globeObjType="label",s})},update:function(e){var t=ae(e.labelLat),n=ae(e.labelLng),r=ae(e.labelAltitude),a=ae(e.labelText),o=ae(e.labelSize),s=ae(e.labelRotation),l=ae(e.labelColor),c=ae(e.labelIncludeDot),u=ae(e.labelDotRadius),h=ae(e.labelDotOrientation),p=new Set(["right","top","bottom"]),d=2*Math.PI*tt/360;e.dataMapper.onUpdateObj(function(g,_){var m=nt(g.children,2),f=m[0],x=m[1],v=nt(x.children,1),S=v[0],y=l(_),E=hn(y);x.material.color.set(En(y)),x.material.transparent=E<1,x.material.opacity=E;var b=c(_),T=h(_);!b||!p.has(T)&&(T="bottom");var M=b?+u(_)*d:1e-12;f.scale.x=f.scale.y=M;var w=+o(_)*d;if(x.geometry&&x.geometry.dispose(),x.geometry=new sn.TextGeometry(a(_),{font:e.font,size:w,depth:0,bevelEnabled:!0,bevelThickness:0,bevelSize:0,curveSegments:e.labelResolution}),S.geometry&&S.geometry.dispose(),x.geometry.computeBoundingBox(),S.geometry=Qs(sn.BoxGeometry,Ke(new sn.Vector3().subVectors(x.geometry.boundingBox.max,x.geometry.boundingBox.min).clampScalar(0,1/0).toArray())),T!=="right"&&x.geometry.center(),b){var O=M+w/2;T==="right"&&(x.position.x=O),x.position.y={right:-w/2,top:O+w/2,bottom:-O-w/2}[T]}var I=function(G){var F=g.__currentTargetD=G,H=F.lat,V=F.lng,W=F.alt,B=F.rot,j=F.scale;Object.assign(g.position,Jt(H,V,W)),g.lookAt(e.scene.localToWorld(new sn.Vector3(0,0,0))),g.rotateY(Math.PI),g.rotateZ(-B*Math.PI/180),g.scale.x=g.scale.y=g.scale.z=j},C={lat:+t(_),lng:+n(_),alt:+r(_),rot:+s(_),scale:1},D=g.__currentTargetD||Object.assign({},C,{scale:1e-12});Object.keys(C).some(function(N){return D[N]!==C[N]})&&(!e.labelsTransitionDuration||e.labelsTransitionDuration<0?I(C):e.tweenGroup.add(new Ot(D).to(C,e.labelsTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(I).start()))}).digest(e.labelsData)}}),_3=Ye(Ye({},window.THREE?window.THREE:{}),{},{CSS2DObject:Fv}),Qh=Tt({props:{htmlElementsData:{default:[]},htmlLat:{default:"lat"},htmlLng:{default:"lng"},htmlAltitude:{default:0},htmlElement:{},htmlElementVisibilityModifier:{triggerUpdate:!1},htmlTransitionDuration:{default:1e3,triggerUpdate:!1},isBehindGlobe:{onChange:function(){this.updateObjVisibility()},triggerUpdate:!1}},methods:{updateObjVisibility:function(e,t){if(e.dataMapper){var n=t?[t]:e.dataMapper.entries().map(function(r){var a=nt(r,2),o=a[1];return o}).filter(function(r){return r});n.forEach(function(r){var a=!e.isBehindGlobe||!e.isBehindGlobe(r.position);e.htmlElementVisibilityModifier?(r.visible=!0,e.htmlElementVisibilityModifier(r.element,a)):r.visible=a})}}},init:function(e,t,n){var r=n.tweenGroup;Ze(e),t.scene=e,t.tweenGroup=r,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjHtml"}).onCreateObj(function(a){var o=ae(t.htmlElement)(a),s=new _3.CSS2DObject(o);return s.__globeObjType="html",s})},update:function(e,t){var n=this,r=ae(e.htmlLat),a=ae(e.htmlLng),o=ae(e.htmlAltitude);t.hasOwnProperty("htmlElement")&&e.dataMapper.clear(),e.dataMapper.onUpdateObj(function(s,l){var c=function(p){var d=s.__currentTargetD=p,g=d.alt,_=d.lat,m=d.lng;Object.assign(s.position,Jt(_,m,g)),n.updateObjVisibility(s)},u={lat:+r(l),lng:+a(l),alt:+o(l)};!e.htmlTransitionDuration||e.htmlTransitionDuration<0||!s.__currentTargetD?c(u):e.tweenGroup.add(new Ot(s.__currentTargetD).to(u,e.htmlTransitionDuration).easing(Gt.Quadratic.InOut).onUpdate(c).start())}).digest(e.htmlElementsData)}}),Sa=window.THREE?window.THREE:{Group:Bt,Mesh:at,MeshLambertMaterial:li,SphereGeometry:kn},ef=Tt({props:{objectsData:{default:[]},objectLat:{default:"lat"},objectLng:{default:"lng"},objectAltitude:{default:.01},objectFacesSurface:{default:!0},objectRotation:{},objectThreeObject:{default:new Sa.Mesh(new Sa.SphereGeometry(1,16,8),new Sa.MeshLambertMaterial({color:"#ffffaa",transparent:!0,opacity:.7}))}},init:function(e,t){Ze(e),t.scene=e,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjObject"}).onCreateObj(function(n){var r=ae(t.objectThreeObject)(n);t.objectThreeObject===r&&(r=r.clone());var a=new Sa.Group;return a.add(r),a.__globeObjType="object",a})},update:function(e,t){var n=ae(e.objectLat),r=ae(e.objectLng),a=ae(e.objectAltitude),o=ae(e.objectFacesSurface),s=ae(e.objectRotation);t.hasOwnProperty("objectThreeObject")&&e.dataMapper.clear(),e.dataMapper.onUpdateObj(function(l,c){var u=+n(c),h=+r(c),p=+a(c);Object.assign(l.position,Jt(u,h,p)),o(c)?l.setRotationFromEuler(new Ri(Si(-u),Si(h),0,"YXZ")):l.rotation.set(0,0,0);var d=l.children[0],g=s(c);g&&d.setRotationFromEuler(new Ri(Si(g.x||0),Si(g.y||0),Si(g.z||0)))}).digest(e.objectsData)}}),tf=Tt({props:{customLayerData:{default:[]},customThreeObject:{},customThreeObjectUpdate:{triggerUpdate:!1}},init:function(e,t){Ze(e),t.scene=e,t.dataMapper=new Ht(e,{objBindAttr:"__threeObjCustom"}).onCreateObj(function(n){var r=ae(t.customThreeObject)(n,tt);return r&&(t.customThreeObject===r&&(r=r.clone()),r.__globeObjType="custom"),r})},update:function(e,t){e.customThreeObjectUpdate||Ze(e.scene);var n=ae(e.customThreeObjectUpdate);t.hasOwnProperty("customThreeObject")&&e.dataMapper.clear(),e.dataMapper.onUpdateObj(function(r,a){return n(r,a,tt)}).digest(e.customLayerData)}}),ba=window.THREE?window.THREE:{Camera:Ga,Group:Bt,Vector2:ce,Vector3:P},x3=["globeLayer","pointsLayer","arcsLayer","hexBinLayer","heatmapsLayer","polygonsLayer","hexedPolygonsLayer","pathsLayer","tilesLayer","particlesLayer","ringsLayer","labelsLayer","htmlElementsLayer","objectsLayer","customLayer"],nf=It("globeLayer",Bh),y3=Object.assign.apply(Object,Ke(["globeImageUrl","bumpImageUrl","globeCurvatureResolution","globeTileEngineUrl","globeTileEngineMaxLevel","showGlobe","showGraticules","showAtmosphere","atmosphereColor","atmosphereAltitude"].map(function(i){return St({},i,nf.linkProp(i))}))),M3=Object.assign.apply(Object,Ke(["globeMaterial"].map(function(i){return St({},i,nf.linkMethod(i))}))),S3=It("pointsLayer",zh),b3=Object.assign.apply(Object,Ke(["pointsData","pointLat","pointLng","pointColor","pointAltitude","pointRadius","pointResolution","pointsMerge","pointsTransitionDuration"].map(function(i){return St({},i,S3.linkProp(i))}))),E3=It("arcsLayer",Hh),w3=Object.assign.apply(Object,Ke(["arcsData","arcStartLat","arcStartLng","arcEndLat","arcEndLng","arcColor","arcAltitude","arcAltitudeAutoScale","arcStroke","arcCurveResolution","arcCircularResolution","arcDashLength","arcDashGap","arcDashInitialGap","arcDashAnimateTime","arcsTransitionDuration"].map(function(i){return St({},i,E3.linkProp(i))}))),T3=It("hexBinLayer",kh),A3=Object.assign.apply(Object,Ke(["hexBinPointsData","hexBinPointLat","hexBinPointLng","hexBinPointWeight","hexBinResolution","hexMargin","hexTopCurvatureResolution","hexTopColor","hexSideColor","hexAltitude","hexBinMerge","hexTransitionDuration"].map(function(i){return St({},i,T3.linkProp(i))}))),R3=It("heatmapsLayer",Wh),C3=Object.assign.apply(Object,Ke(["heatmapsData","heatmapPoints","heatmapPointLat","heatmapPointLng","heatmapPointWeight","heatmapBandwidth","heatmapColorFn","heatmapColorSaturation","heatmapBaseAltitude","heatmapTopAltitude","heatmapsTransitionDuration"].map(function(i){return St({},i,R3.linkProp(i))}))),P3=It("hexedPolygonsLayer",Xh),L3=Object.assign.apply(Object,Ke(["hexPolygonsData","hexPolygonGeoJsonGeometry","hexPolygonColor","hexPolygonAltitude","hexPolygonResolution","hexPolygonMargin","hexPolygonUseDots","hexPolygonCurvatureResolution","hexPolygonDotResolution","hexPolygonsTransitionDuration"].map(function(i){return St({},i,P3.linkProp(i))}))),D3=It("polygonsLayer",jh),q3=Object.assign.apply(Object,Ke(["polygonsData","polygonGeoJsonGeometry","polygonCapColor","polygonCapMaterial","polygonSideColor","polygonSideMaterial","polygonStrokeColor","polygonAltitude","polygonCapCurvatureResolution","polygonsTransitionDuration"].map(function(i){return St({},i,D3.linkProp(i))}))),U3=It("pathsLayer",$h),O3=Object.assign.apply(Object,Ke(["pathsData","pathPoints","pathPointLat","pathPointLng","pathPointAlt","pathResolution","pathColor","pathStroke","pathDashLength","pathDashGap","pathDashInitialGap","pathDashAnimateTime","pathTransitionDuration"].map(function(i){return St({},i,U3.linkProp(i))}))),I3=It("tilesLayer",Yh),N3=Object.assign.apply(Object,Ke(["tilesData","tileLat","tileLng","tileAltitude","tileWidth","tileHeight","tileUseGlobeProjection","tileMaterial","tileCurvatureResolution","tilesTransitionDuration"].map(function(i){return St({},i,I3.linkProp(i))}))),F3=It("particlesLayer",Kh),B3=Object.assign.apply(Object,Ke(["particlesData","particlesList","particleLat","particleLng","particleAltitude","particlesSize","particlesSizeAttenuation","particlesColor","particlesTexture"].map(function(i){return St({},i,F3.linkProp(i))}))),z3=It("ringsLayer",Zh),G3=Object.assign.apply(Object,Ke(["ringsData","ringLat","ringLng","ringAltitude","ringColor","ringResolution","ringMaxRadius","ringPropagationSpeed","ringRepeatPeriod"].map(function(i){return St({},i,z3.linkProp(i))}))),H3=It("labelsLayer",Jh),k3=Object.assign.apply(Object,Ke(["labelsData","labelLat","labelLng","labelAltitude","labelRotation","labelText","labelSize","labelTypeFace","labelColor","labelResolution","labelIncludeDot","labelDotRadius","labelDotOrientation","labelsTransitionDuration"].map(function(i){return St({},i,H3.linkProp(i))}))),V3=It("htmlElementsLayer",Qh),W3=Object.assign.apply(Object,Ke(["htmlElementsData","htmlLat","htmlLng","htmlAltitude","htmlElement","htmlElementVisibilityModifier","htmlTransitionDuration"].map(function(i){return St({},i,V3.linkProp(i))}))),j3=It("objectsLayer",ef),X3=Object.assign.apply(Object,Ke(["objectsData","objectLat","objectLng","objectAltitude","objectRotation","objectFacesSurface","objectThreeObject"].map(function(i){return St({},i,j3.linkProp(i))}))),$3=It("customLayer",tf),Y3=Object.assign.apply(Object,Ke(["customLayerData","customThreeObject","customThreeObjectUpdate"].map(function(i){return St({},i,$3.linkProp(i))}))),K3=Tt({props:Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye(Ye({onGlobeReady:{triggerUpdate:!1},rendererSize:{default:new ba.Vector2(window.innerWidth,window.innerHeight),onChange:function(e,t){t.pathsLayer.rendererSize(e)},triggerUpdate:!1}},y3),b3),w3),A3),C3),q3),L3),O3),N3),B3),G3),k3),W3),X3),Y3),methods:Ye({getGlobeRadius:fu,getCoords:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Jt.apply(void 0,n)},toGeoCoords:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Fh.apply(void 0,n)},setPointOfView:function(e,t){var n=t instanceof ba.Camera?t.position:t,r=fu(),a=void 0;if(e.scene&&n){var o,s,l,c;a=function(h){o===void 0&&(o=n.clone().applyMatrix4(e.scene.matrixWorld.clone().invert())),s===void 0&&(s=o.length()),l===void 0&&(l=Math.sqrt(Math.pow(s,2)-Math.pow(r,2))),c===void 0&&(c=Math.acos(l/s));var p=o.distanceTo(h);if(p<l)return!1;var d=h.length(),g=Math.acos((Math.pow(s,2)+Math.pow(p,2)-Math.pow(d,2))/(2*s*p));return g<c}}e.layersThatNeedUpdatePov.forEach(function(u){return u.updatePov(t)}),e.layersThatNeedBehindGlobeChecker.forEach(function(u){return u.isBehindGlobe(a)})},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),e.pausableLayers.forEach(function(t){var n;return(n=t.pauseAnimation)===null||n===void 0?void 0:n.call(t)}),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),e.pausableLayers.forEach(function(t){var n;return(n=t.resumeAnimation)===null||n===void 0?void 0:n.call(t)}),this},_animationCycle:function(e){e.animationFrameRequestId=requestAnimationFrame(this._animationCycle),e.tweenGroup.update()},_destructor:function(e){this.pauseAnimation(),e.destructableLayers.forEach(function(t){return t._destructor()})}},M3),stateInit:function(){var e=new Tu,t={tweenGroup:e},n={globeLayer:Bh(t),pointsLayer:zh(t),arcsLayer:Hh(t),hexBinLayer:kh(t),heatmapsLayer:Wh(t),polygonsLayer:jh(t),hexedPolygonsLayer:Xh(t),pathsLayer:$h(t),tilesLayer:Yh(t),particlesLayer:Kh(t),ringsLayer:Zh(t),labelsLayer:Jh(t),htmlElementsLayer:Qh(t),objectsLayer:ef(t),customLayer:tf(t)};return Ye(Ye({tweenGroup:e},n),{},{layersThatNeedUpdatePov:Object.values(n).filter(function(r){return r.hasOwnProperty("updatePov")}),layersThatNeedBehindGlobeChecker:Object.values(n).filter(function(r){return r.hasOwnProperty("isBehindGlobe")}),destructableLayers:Object.values(n).filter(function(r){return r.hasOwnProperty("_destructor")}),pausableLayers:Object.values(n).filter(function(r){return r.hasOwnProperty("pauseAnimation")})})},init:function(e,t,n){var r=n.animateIn,a=r===void 0?!0:r,o=n.waitForGlobeReady,s=o===void 0?!0:o;Ze(e),t.scene=e,t.scene.visible=!1,x3.forEach(function(c){var u=new ba.Group;t.scene.add(u),t[c](u)});var l=function(){if(a){t.scene.scale.set(1e-6,1e-6,1e-6),t.tweenGroup.add(new Ot({k:1e-6}).to({k:1},600).easing(Gt.Quadratic.Out).onUpdate(function(h){var p=h.k;return t.scene.scale.set(p,p,p)}).start());var u=new ba.Vector3(0,1,0);t.tweenGroup.add(new Ot({rot:Math.PI*2}).to({rot:0},1200).easing(Gt.Quintic.Out).onUpdate(function(h){var p=h.rot;return t.scene.setRotationFromAxisAngle(u,p)}).start())}t.scene.visible=!0,t.onGlobeReady&&t.onGlobeReady()};s?t.globeLayer.onReady(l):l(),this._animationCycle()},update:function(e){}});function Z3(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=function(r){function a(){var o;Ya(this,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return o=$a(this,a,[].concat(l)),o.__kapsuleInstance=Qs(i,[].concat(Ke(t?[o]:[]),l)),o}return Za(a,r),Ka(a)}(e);return Object.keys(i()).forEach(function(r){return n.prototype[r]=function(){var a,o=(a=this.__kapsuleInstance)[r].apply(a,arguments);return o===this.__kapsuleInstance?this:o}}),n}var J3=window.THREE?window.THREE:{Group:Bt},Tx=Z3(K3,J3.Group,!0);const $o={type:"change"},Yo={type:"start"},Ko={type:"end"};class Q3 extends Gn{constructor(e,t){super();const n=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.target=new P;const a=1e-6,o=new P;let s=1,l=r.NONE,c=r.NONE,u=0,h=0,p=0;const d=new P,g=new ce,_=new ce,m=new P,f=new ce,x=new ce,v=new ce,S=new ce,y=[],E={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const k=n.domElement.getBoundingClientRect(),te=n.domElement.ownerDocument.documentElement;n.screen.left=k.left+window.pageXOffset-te.clientLeft,n.screen.top=k.top+window.pageYOffset-te.clientTop,n.screen.width=k.width,n.screen.height=k.height};const b=function(){const k=new ce;return function(Me,Re){return k.set((Me-n.screen.left)/n.screen.width,(Re-n.screen.top)/n.screen.height),k}}(),T=function(){const k=new ce;return function(Me,Re){return k.set((Me-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-Re))/n.screen.width),k}}();this.rotateCamera=function(){const k=new P,te=new bn,Me=new P,Re=new P,_e=new P,q=new P;return function(){q.set(_.x-g.x,_.y-g.y,0);let K=q.length();K?(d.copy(n.object.position).sub(n.target),Me.copy(d).normalize(),Re.copy(n.object.up).normalize(),_e.crossVectors(Re,Me).normalize(),Re.setLength(_.y-g.y),_e.setLength(_.x-g.x),q.copy(Re.add(_e)),k.crossVectors(q,d).normalize(),K*=n.rotateSpeed,te.setFromAxisAngle(k,K),d.applyQuaternion(te),n.object.up.applyQuaternion(te),m.copy(k),p=K):!n.staticMoving&&p&&(p*=Math.sqrt(1-n.dynamicDampingFactor),d.copy(n.object.position).sub(n.target),te.setFromAxisAngle(m,p),d.applyQuaternion(te),n.object.up.applyQuaternion(te)),g.copy(_)}}(),this.zoomCamera=function(){let k;l===r.TOUCH_ZOOM_PAN?(k=u/h,u=h,n.object.isPerspectiveCamera?d.multiplyScalar(k):n.object.isOrthographicCamera?(n.object.zoom=ss.clamp(n.object.zoom/k,n.minZoom,n.maxZoom),s!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(k=1+(x.y-f.y)*n.zoomSpeed,k!==1&&k>0&&(n.object.isPerspectiveCamera?d.multiplyScalar(k):n.object.isOrthographicCamera?(n.object.zoom=ss.clamp(n.object.zoom/k,n.minZoom,n.maxZoom),s!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?f.copy(x):f.y+=(x.y-f.y)*this.dynamicDampingFactor)},this.panCamera=function(){const k=new ce,te=new P,Me=new P;return function(){if(k.copy(S).sub(v),k.lengthSq()){if(n.object.isOrthographicCamera){const _e=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,q=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;k.x*=_e,k.y*=q}k.multiplyScalar(d.length()*n.panSpeed),Me.copy(d).cross(n.object.up).setLength(k.x),Me.add(te.copy(n.object.up).setLength(k.y)),n.object.position.add(Me),n.target.add(Me),n.staticMoving?v.copy(S):v.add(k.subVectors(S,v).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(d.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,d.setLength(n.maxDistance)),f.copy(x)),d.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,d.setLength(n.minDistance)),f.copy(x)))},this.update=function(){d.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,d),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>a&&(n.dispatchEvent($o),o.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(o.distanceToSquared(n.object.position)>a||s!==n.object.zoom)&&(n.dispatchEvent($o),o.copy(n.object.position),s=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,c=r.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),d.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent($o),o.copy(n.object.position),s=n.object.zoom};function M(k){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",O)),ne(k),k.pointerType==="touch"?V(k):N(k))}function w(k){n.enabled!==!1&&(k.pointerType==="touch"?W(k):G(k))}function O(k){n.enabled!==!1&&(k.pointerType==="touch"?B(k):F(),re(k),y.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",O)))}function I(k){re(k)}function C(k){n.enabled!==!1&&(window.removeEventListener("keydown",C),c===r.NONE&&(k.code===n.keys[r.ROTATE]&&!n.noRotate?c=r.ROTATE:k.code===n.keys[r.ZOOM]&&!n.noZoom?c=r.ZOOM:k.code===n.keys[r.PAN]&&!n.noPan&&(c=r.PAN)))}function D(){n.enabled!==!1&&(c=r.NONE,window.addEventListener("keydown",C))}function N(k){if(l===r.NONE)switch(k.button){case n.mouseButtons.LEFT:l=r.ROTATE;break;case n.mouseButtons.MIDDLE:l=r.ZOOM;break;case n.mouseButtons.RIGHT:l=r.PAN;break}const te=c!==r.NONE?c:l;te===r.ROTATE&&!n.noRotate?(_.copy(T(k.pageX,k.pageY)),g.copy(_)):te===r.ZOOM&&!n.noZoom?(f.copy(b(k.pageX,k.pageY)),x.copy(f)):te===r.PAN&&!n.noPan&&(v.copy(b(k.pageX,k.pageY)),S.copy(v)),n.dispatchEvent(Yo)}function G(k){const te=c!==r.NONE?c:l;te===r.ROTATE&&!n.noRotate?(g.copy(_),_.copy(T(k.pageX,k.pageY))):te===r.ZOOM&&!n.noZoom?x.copy(b(k.pageX,k.pageY)):te===r.PAN&&!n.noPan&&S.copy(b(k.pageX,k.pageY))}function F(){l=r.NONE,n.dispatchEvent(Ko)}function H(k){if(n.enabled!==!1&&n.noZoom!==!0){switch(k.preventDefault(),k.deltaMode){case 2:f.y-=k.deltaY*.025;break;case 1:f.y-=k.deltaY*.01;break;default:f.y-=k.deltaY*25e-5;break}n.dispatchEvent(Yo),n.dispatchEvent(Ko)}}function V(k){switch(se(k),y.length){case 1:l=r.TOUCH_ROTATE,_.copy(T(y[0].pageX,y[0].pageY)),g.copy(_);break;default:l=r.TOUCH_ZOOM_PAN;const te=y[0].pageX-y[1].pageX,Me=y[0].pageY-y[1].pageY;h=u=Math.sqrt(te*te+Me*Me);const Re=(y[0].pageX+y[1].pageX)/2,_e=(y[0].pageY+y[1].pageY)/2;v.copy(b(Re,_e)),S.copy(v);break}n.dispatchEvent(Yo)}function W(k){switch(se(k),y.length){case 1:g.copy(_),_.copy(T(k.pageX,k.pageY));break;default:const te=pe(k),Me=k.pageX-te.x,Re=k.pageY-te.y;h=Math.sqrt(Me*Me+Re*Re);const _e=(k.pageX+te.x)/2,q=(k.pageY+te.y)/2;S.copy(b(_e,q));break}}function B(k){switch(y.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,_.copy(T(k.pageX,k.pageY)),g.copy(_);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let te=0;te<y.length;te++)if(y[te].pointerId!==k.pointerId){const Me=E[y[te].pointerId];_.copy(T(Me.x,Me.y)),g.copy(_);break}break}n.dispatchEvent(Ko)}function j(k){n.enabled!==!1&&k.preventDefault()}function ne(k){y.push(k)}function re(k){delete E[k.pointerId];for(let te=0;te<y.length;te++)if(y[te].pointerId==k.pointerId){y.splice(te,1);return}}function se(k){let te=E[k.pointerId];te===void 0&&(te=new ce,E[k.pointerId]=te),te.set(k.pageX,k.pageY)}function pe(k){const te=k.pointerId===y[0].pointerId?y[1]:y[0];return E[te.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",j),n.domElement.removeEventListener("pointerdown",M),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",H),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",O),window.removeEventListener("keydown",C),window.removeEventListener("keyup",D)},this.domElement.addEventListener("contextmenu",j),this.domElement.addEventListener("pointerdown",M),this.domElement.addEventListener("pointercancel",I),this.domElement.addEventListener("wheel",H,{passive:!1}),window.addEventListener("keydown",C),window.addEventListener("keyup",D),this.handleResize(),this.update()}}const Mu={type:"change"},Zo={type:"start"},Su={type:"end"};class ex extends Gn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",De),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mu),n.update(),a=r.NONE},this.update=function(){const U=new P,oe=new bn().setFromUnitVectors(e.up,new P(0,1,0)),he=oe.clone().invert(),Y=new P,Te=new bn,Pe=new P,Ce=2*Math.PI;return function(){const be=n.object.position;U.copy(be).sub(n.target),U.applyQuaternion(oe),s.setFromVector3(U),n.autoRotate&&a===r.NONE&&M(b()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let qe=n.minAzimuthAngle,We=n.maxAzimuthAngle;return isFinite(qe)&&isFinite(We)&&(qe<-Math.PI?qe+=Ce:qe>Math.PI&&(qe-=Ce),We<-Math.PI?We+=Ce:We>Math.PI&&(We-=Ce),qe<=We?s.theta=Math.max(qe,Math.min(We,s.theta)):s.theta=s.theta>(qe+We)/2?Math.max(qe,s.theta):Math.min(We,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),U.setFromSpherical(s),U.applyQuaternion(he),be.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Y.distanceToSquared(n.object.position)>o||8*(1-Te.dot(n.object.quaternion))>o||Pe.distanceToSquared(n.target)>0?(n.dispatchEvent(Mu),Y.copy(n.object.position),Te.copy(n.object.quaternion),Pe.copy(n.target),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",L),n.domElement.removeEventListener("pointerdown",K),n.domElement.removeEventListener("pointercancel",ie),n.domElement.removeEventListener("wheel",Se),n.domElement.removeEventListener("pointermove",ue),n.domElement.removeEventListener("pointerup",ie),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",De),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Wc,l=new Wc;let c=1;const u=new P;let h=!1;const p=new ce,d=new ce,g=new ce,_=new ce,m=new ce,f=new ce,x=new ce,v=new ce,S=new ce,y=[],E={};function b(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function M(U){l.theta-=U}function w(U){l.phi-=U}const O=function(){const U=new P;return function(he,Y){U.setFromMatrixColumn(Y,0),U.multiplyScalar(-he),u.add(U)}}(),I=function(){const U=new P;return function(he,Y){n.screenSpacePanning===!0?U.setFromMatrixColumn(Y,1):(U.setFromMatrixColumn(Y,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(he),u.add(U)}}(),C=function(){const U=new P;return function(he,Y){const Te=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;U.copy(Pe).sub(n.target);let Ce=U.length();Ce*=Math.tan(n.object.fov/2*Math.PI/180),O(2*he*Ce/Te.clientHeight,n.object.matrix),I(2*Y*Ce/Te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(he*(n.object.right-n.object.left)/n.object.zoom/Te.clientWidth,n.object.matrix),I(Y*(n.object.top-n.object.bottom)/n.object.zoom/Te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(U){n.object.isPerspectiveCamera?c/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(U){n.object.isPerspectiveCamera?c*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(U){p.set(U.clientX,U.clientY)}function F(U){x.set(U.clientX,U.clientY)}function H(U){_.set(U.clientX,U.clientY)}function V(U){d.set(U.clientX,U.clientY),g.subVectors(d,p).multiplyScalar(n.rotateSpeed);const oe=n.domElement;M(2*Math.PI*g.x/oe.clientHeight),w(2*Math.PI*g.y/oe.clientHeight),p.copy(d),n.update()}function W(U){v.set(U.clientX,U.clientY),S.subVectors(v,x),S.y>0?D(T()):S.y<0&&N(T()),x.copy(v),n.update()}function B(U){m.set(U.clientX,U.clientY),f.subVectors(m,_).multiplyScalar(n.panSpeed),C(f.x,f.y),_.copy(m),n.update()}function j(U){U.deltaY<0?N(T()):U.deltaY>0&&D(T()),n.update()}function ne(U){let oe=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),oe=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),oe=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),oe=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),oe=!0;break}oe&&(U.preventDefault(),n.update())}function re(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const U=.5*(y[0].pageX+y[1].pageX),oe=.5*(y[0].pageY+y[1].pageY);p.set(U,oe)}}function se(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const U=.5*(y[0].pageX+y[1].pageX),oe=.5*(y[0].pageY+y[1].pageY);_.set(U,oe)}}function pe(){const U=y[0].pageX-y[1].pageX,oe=y[0].pageY-y[1].pageY,he=Math.sqrt(U*U+oe*oe);x.set(0,he)}function k(){n.enableZoom&&pe(),n.enablePan&&se()}function te(){n.enableZoom&&pe(),n.enableRotate&&re()}function Me(U){if(y.length==1)d.set(U.pageX,U.pageY);else{const he=fe(U),Y=.5*(U.pageX+he.x),Te=.5*(U.pageY+he.y);d.set(Y,Te)}g.subVectors(d,p).multiplyScalar(n.rotateSpeed);const oe=n.domElement;M(2*Math.PI*g.x/oe.clientHeight),w(2*Math.PI*g.y/oe.clientHeight),p.copy(d)}function Re(U){if(y.length===1)m.set(U.pageX,U.pageY);else{const oe=fe(U),he=.5*(U.pageX+oe.x),Y=.5*(U.pageY+oe.y);m.set(he,Y)}f.subVectors(m,_).multiplyScalar(n.panSpeed),C(f.x,f.y),_.copy(m)}function _e(U){const oe=fe(U),he=U.pageX-oe.x,Y=U.pageY-oe.y,Te=Math.sqrt(he*he+Y*Y);v.set(0,Te),S.set(0,Math.pow(v.y/x.y,n.zoomSpeed)),D(S.y),x.copy(v)}function q(U){n.enableZoom&&_e(U),n.enablePan&&Re(U)}function le(U){n.enableZoom&&_e(U),n.enableRotate&&Me(U)}function K(U){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",ue),n.domElement.addEventListener("pointerup",ie)),A(U),U.pointerType==="touch"?ke(U):we(U))}function ue(U){n.enabled!==!1&&(U.pointerType==="touch"?it(U):xe(U))}function ie(U){J(U),y.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",ue),n.domElement.removeEventListener("pointerup",ie)),n.dispatchEvent(Su),a=r.NONE}function we(U){let oe;switch(U.button){case 0:oe=n.mouseButtons.LEFT;break;case 1:oe=n.mouseButtons.MIDDLE;break;case 2:oe=n.mouseButtons.RIGHT;break;default:oe=-1}switch(oe){case Un.DOLLY:if(n.enableZoom===!1)return;F(U),a=r.DOLLY;break;case Un.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;H(U),a=r.PAN}else{if(n.enableRotate===!1)return;G(U),a=r.ROTATE}break;case Un.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;G(U),a=r.ROTATE}else{if(n.enablePan===!1)return;H(U),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Zo)}function xe(U){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;V(U);break;case r.DOLLY:if(n.enableZoom===!1)return;W(U);break;case r.PAN:if(n.enablePan===!1)return;B(U);break}}function Se(U){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(U.preventDefault(),n.dispatchEvent(Zo),j(U),n.dispatchEvent(Su))}function De(U){n.enabled===!1||n.enablePan===!1||ne(U)}function ke(U){switch(de(U),y.length){case 1:switch(n.touches.ONE){case Li.ROTATE:if(n.enableRotate===!1)return;re(),a=r.TOUCH_ROTATE;break;case Li.PAN:if(n.enablePan===!1)return;se(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(),a=r.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;te(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Zo)}function it(U){switch(de(U),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(U),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Re(U),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(U),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;le(U),n.update();break;default:a=r.NONE}}function L(U){n.enabled!==!1&&U.preventDefault()}function A(U){y.push(U)}function J(U){delete E[U.pointerId];for(let oe=0;oe<y.length;oe++)if(y[oe].pointerId==U.pointerId){y.splice(oe,1);return}}function de(U){let oe=E[U.pointerId];oe===void 0&&(oe=new ce,E[U.pointerId]=oe),oe.set(U.pageX,U.pageY)}function fe(U){const oe=U.pointerId===y[0].pointerId?y[1]:y[0];return E[oe.pointerId]}n.domElement.addEventListener("contextmenu",L),n.domElement.addEventListener("pointerdown",K),n.domElement.addEventListener("pointercancel",ie),n.domElement.addEventListener("wheel",Se,{passive:!1}),this.update()}}const tx={type:"change"};class nx extends Gn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const n=this,r=1e-6,a=new bn,o=new P;this.tmpQuaternion=new bn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new P(0,0,0),this.rotationVector=new P(0,0,0),this.keydown=function(d){if(!(d.altKey||this.enabled===!1)){switch(d.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(d){if(this.enabled!==!1){switch(d.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(d){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(d.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(d){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const g=this.getContainerDimensions(),_=g.size[0]/2,m=g.size[1]/2;this.moveState.yawLeft=-(d.pageX-g.offset[0]-_)/_,this.moveState.pitchDown=(d.pageY-g.offset[1]-m)/m,this.updateRotationVector()}},this.pointerup=function(d){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(d.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.contextMenu=function(d){this.enabled!==!1&&d.preventDefault()},this.update=function(d){if(this.enabled===!1)return;const g=d*n.movementSpeed,_=d*n.rollSpeed;n.object.translateX(n.moveVector.x*g),n.object.translateY(n.moveVector.y*g),n.object.translateZ(n.moveVector.z*g),n.tmpQuaternion.set(n.rotationVector.x*_,n.rotationVector.y*_,n.rotationVector.z*_,1).normalize(),n.object.quaternion.multiply(n.tmpQuaternion),(o.distanceToSquared(n.object.position)>r||8*(1-a.dot(n.object.quaternion))>r)&&(n.dispatchEvent(tx),a.copy(n.object.quaternion),o.copy(n.object.position))},this.updateMovementVector=function(){const d=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-d+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",s),this.domElement.removeEventListener("pointerdown",c),this.domElement.removeEventListener("pointermove",l),this.domElement.removeEventListener("pointerup",u),window.removeEventListener("keydown",h),window.removeEventListener("keyup",p)};const s=this.contextMenu.bind(this),l=this.pointermove.bind(this),c=this.pointerdown.bind(this),u=this.pointerup.bind(this),h=this.keydown.bind(this),p=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",s),this.domElement.addEventListener("pointerdown",c),this.domElement.addEventListener("pointermove",l),this.domElement.addEventListener("pointerup",u),window.addEventListener("keydown",h),window.addEventListener("keyup",p),this.updateMovementVector(),this.updateRotationVector()}}const ix={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ja{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rx=new Fs(-1,1,1,-1,0,1),il=new et;il.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3));il.setAttribute("uv",new $e([0,2,0,0,2,0],2));class ax{constructor(e){this._mesh=new at(il,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ox extends Ja{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=za.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ax(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bu extends Ja{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class sx extends Ja{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:lr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ox(ix),this.copyPass.material.blending=Bn,this.clock=new gh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}bu!==void 0&&(o instanceof bu?n=!0:o instanceof sx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cx extends Ja{constructor(e,t,n,r,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}function ux(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i))}}var hx=`.scene-nav-info {
  position: absolute;
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;ux(hx);function Cs(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=Array(e);t<e;t++)n[t]=i[t];return n}function fx(i){if(Array.isArray(i))return i}function dx(i){if(Array.isArray(i))return Cs(i)}function px(i,e,t){return(e=Mx(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function mx(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function gx(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,a,o,s=[],l=!0,c=!1;try{if(a=(t=t.call(i)).next,e!==0)for(;!(l=(n=a.call(t)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function vx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xx(i,e){return fx(i)||gx(i,e)||rf(i,e)||vx()}function _i(i){return dx(i)||mx(i)||rf(i)||_x()}function yx(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Mx(i){var e=yx(i,"string");return typeof e=="symbol"?e:e+""}function rf(i,e){if(i){if(typeof i=="string")return Cs(i,e);var t={}.toString.call(i).slice(8,-1);return t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set"?Array.from(i):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Cs(i,e):void 0}}var rt=window.THREE?window.THREE:{WebGLRenderer:nh,Scene:Yg,PerspectiveCamera:Zt,Raycaster:Ov,SRGBColorSpace:Ne,TextureLoader:$s,Vector2:ce,Vector3:P,Box3:Hn,Color:Fe,Mesh:at,SphereGeometry:kn,MeshBasicMaterial:Nr,BackSide:Ct,Clock:gh},Ax=Tt({props:{width:{default:window.innerWidth,onChange:function(e,t,n){isNaN(e)&&(t.width=n)}},height:{default:window.innerHeight,onChange:function(e,t,n){isNaN(e)&&(t.height=n)}},viewOffset:{default:[0,0]},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.tooltip&&t.tooltip.content(null)},triggerUpdate:!1},pointerRaycasterThrottleMs:{default:50,triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},pointsHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){e.controls.enabled&&e.controls.update&&e.controls.update(Math.min(1,e.clock.getDelta())),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)});var t=+new Date;if(e.enablePointerInteraction&&t-e.lastRaycasterCheck>=e.pointerRaycasterThrottleMs){e.lastRaycasterCheck=t;var n=null;if(e.hoverDuringDrag||!e.isPointerDragging){var r=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y);e.hoverOrderComparator&&r.sort(function(o,s){return e.hoverOrderComparator(o.object,s.object)});var a=r.find(function(o){return e.hoverFilter(o.object)})||null;n=a?a.object:null,e.intersection=a||null}n!==e.hoverObj&&(e.onHover(n,e.hoverObj,e.intersection),e.tooltip.content(n&&ae(e.tooltipContent)(n,e.intersection)||null),e.hoverObj=n)}e.tweenGroup.update()}return this},getPointerPos:function(e){var t=e.pointerPos,n=t.x,r=t.y;return{x:n,y:r}},cameraPosition:function(e,t,n,r){var a=e.camera;if(t&&e.initialised){var o=t,s=n||{x:0,y:0,z:0};if(!r)u(o),h(s);else{var l=Object.assign({},a.position),c=p();e.tweenGroup.add(new Ot(l).to(o,r).easing(Gt.Quadratic.Out).onUpdate(u).start()),e.tweenGroup.add(new Ot(c).to(s,r/3).easing(Gt.Quadratic.Out).onUpdate(h).start())}return this}return Object.assign({},a.position,{lookAt:p()});function u(d){var g=d.x,_=d.y,m=d.z;g!==void 0&&(a.position.x=g),_!==void 0&&(a.position.y=_),m!==void 0&&(a.position.z=m)}function h(d){var g=new rt.Vector3(d.x,d.y,d.z);e.controls.enabled&&e.controls.target?e.controls.target=g:a.lookAt(g)}function p(){return Object.assign(new rt.Vector3(0,0,-1e3).applyQuaternion(a.quaternion).add(a.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return this.fitToBbox(this.getBbox.apply(this,a),t,n)},fitToBbox:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,a=e.camera;if(t){var o=new rt.Vector3(0,0,0),s=Math.max.apply(Math,_i(Object.entries(t).map(function(d){var g=xx(d,2),_=g[0],m=g[1];return Math.max.apply(Math,_i(m.map(function(f){return Math.abs(o[_]-f)})))})))*2,l=(1-r*2/e.height)*a.fov,c=s/Math.atan(l*Math.PI/180),u=c/a.aspect,h=Math.max(c,u);if(h>0){var p=o.clone().sub(a.position).normalize().multiplyScalar(-h);this.cameraPosition(p,o,n)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},n=new rt.Box3(new rt.Vector3(0,0,0),new rt.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(a){return n.expandByObject(a)}),Object.assign.apply(Object,_i(["x","y","z"].map(function(a){return px({},a,[n.min[a],n.max[a]])})))):null},getScreenCoords:function(e,t,n,r){var a=new rt.Vector3(t,n,r);return a.project(this.camera()),{x:(a.x+1)*e.width/2,y:-(a.y-1)*e.height/2}},getSceneCoords:function(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=new rt.Vector2(t/e.width*2-1,-(n/e.height)*2+1),o=new rt.Raycaster;return o.setFromCamera(a,e.camera),Object.assign({},o.ray.at(r,new rt.Vector3))},intersectingObjects:function(e,t,n){var r=new rt.Vector2(t/e.width*2-1,-(n/e.height)*2+1),a=new rt.Raycaster;return a.params.Line.threshold=e.lineHoverPrecision,a.params.Points.threshold=e.pointsHoverPrecision,a.setFromCamera(r,e.camera),a.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new rt.Scene,camera:new rt.PerspectiveCamera,clock:new rt.Clock,tweenGroup:new Tu,lastRaycasterCheck:0}},init:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.controlType,a=r===void 0?"trackball":r,o=n.useWebGPU,s=o===void 0?!1:o,l=n.rendererConfig,c=l===void 0?{}:l,u=n.extraRenderers,h=u===void 0?[]:u,p=n.waitForLoadComplete,d=p===void 0?!0:p;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[a]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.tooltip=new Pf(t.container),t.pointerPos=new rt.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(g){return t.container.addEventListener(g,function(_){if(g==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&_.type==="pointermove"&&(_.pressure>0||t.isPointerPressed)&&(_.pointerType==="mouse"||_.movementX===void 0||[_.movementX,_.movementY].some(function(x){return Math.abs(x)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var m=f(t.container);t.pointerPos.x=_.pageX-m.left,t.pointerPos.y=_.pageY-m.top}function f(x){var v=x.getBoundingClientRect(),S=window.pageXOffset||document.documentElement.scrollLeft,y=window.pageYOffset||document.documentElement.scrollTop;return{top:v.top+y,left:v.left+S}}},{passive:!0})}),t.container.addEventListener("pointerup",function(g){t.isPointerPressed&&(t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){g.button===0&&t.onClick(t.hoverObj||null,g,t.intersection),g.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,g,t.intersection)}))},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(g){t.onRightClick&&g.preventDefault()}),t.renderer=new(s?Lh:rt.WebGLRenderer)(Object.assign({antialias:!0,alpha:!0},c)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=h,t.extraRenderers.forEach(function(g){g.domElement.style.position="absolute",g.domElement.style.top="0px",g.domElement.style.pointerEvents="none",t.container.appendChild(g.domElement)}),t.postProcessingComposer=new lx(t.renderer),t.postProcessingComposer.addPass(new cx(t.scene,t.camera)),t.controls=new{trackball:Q3,orbit:ex,fly:nx}[a](t.camera,t.renderer.domElement),a==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(a==="trackball"||a==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(_i(t.extraRenderers)).forEach(function(g){return g.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new rt.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!d,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))){var n,r=e.width,a=e.height;e.container.style.width="".concat(r,"px"),e.container.style.height="".concat(a,"px"),[e.renderer,e.postProcessingComposer].concat(_i(e.extraRenderers)).forEach(function(d){return d.setSize(r,a)}),e.camera.aspect=r/a;var o=e.viewOffset.slice(0,2);o.some(function(d){return d})&&(n=e.camera).setViewOffset.apply(n,[r,a].concat(_i(o),[r,a])),e.camera.updateProjectionMatrix()}if(t.hasOwnProperty("viewOffset")){var s,l=e.width,c=e.height,u=e.viewOffset.slice(0,2);u.some(function(d){return d})?(s=e.camera).setViewOffset.apply(s,[l,c].concat(_i(u),[l,c])):e.camera.clearViewOffset()}if(t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new rt.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var h=Rf(e.backgroundColor).alpha;h===void 0&&(h=1),e.renderer.setClearColor(new rt.Color(Cf(1,e.backgroundColor)),h)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new rt.TextureLoader().load(e.backgroundImageUrl,function(d){d.colorSpace=rt.SRGBColorSpace,e.skysphere.material=new rt.MeshBasicMaterial({map:d,side:rt.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&p()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&p())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("lights")&&((t.lights||[]).forEach(function(d){return e.scene.remove(d)}),e.lights.forEach(function(d){return e.scene.add(d)})),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(d){return e.scene.remove(d)}),e.objects.forEach(function(d){return e.scene.add(d)}));function p(){e.loadComplete=e.scene.visible=!0}}});export{Ex as A,wx as C,bx as D,ri as F,at as M,Ds as R,kn as S,$s as T,ce as V,Ax as a,Nr as b,Ft as c,Tx as t};
