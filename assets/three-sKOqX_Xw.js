import{n as af}from"./rolldown-runtime-CXHxssQy.js";var of={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},lf={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Yc="attached",cf="detached";var Cr=1e3,qt=1001,Rr=1002,Et=1003,vo=1004,hf=1004,_o=1005,uf=1005,yt=1006,yo=1007,df=1007,tr=1008,ff=1008,Ri=1009,Zc=1010,Jc=1011,xo=1012,Kc=1013,Li=1014,Ui=1015,Ni=1016,Mo=1017,So=1018,bo=1020,$c=35902,Qc=35899,jc=1021,eh=1022,Di=1023,Jn=1026,To=1027,Ao=1028,Qs=1029,Ir=1030,Eo=1031,pf=1032,wo=1033,th=33776,ih=33777,nh=33778,rh=33779,sh=35840,ah=35841,oh=35842,lh=35843,ch=36196,hh=37492,uh=37496,dh=37488,fh=37489,ph=37490,mh=37491,gh=37808,vh=37809,_h=37810,yh=37811,xh=37812,Mh=37813,Sh=37814,bh=37815,Th=37816,Ah=37817,Eh=37818,wh=37819,Ch=37820,Rh=37821,Ih=36492,Ph=36494,Lh=36495,Uh=36283,Nh=36284,Dh=36285,Oh=36286,mf=2200,Fh=2201,Bh=2202,Pr=2300,Ys=2301,Gs=2302,ro=2303,fn=2400,pn=2401,Lr=2402,js=2500,Co=2501,zh=3200,gf=3201,vf=3202,_f=3203;var Qt="srgb",Zs="srgb-linear",Ur="linear",Nr="srgb",ks=7680,yf=7681,xf=7682,Mf=7683,Sf=34055,bf=34056,Tf=5386;var ea=35044,Af=35048,Ef=35040,wf=35045,Cf=35049,Rf=35041,If=35046,Pf=35050,Lf=35042,Uf="300 es",Yi=2e3,Nf=2001,Df={COMPUTE:"compute",RENDER:"render"},Of={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Ff={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Bf={TEXTURE_COMPARE:"depthTextureCompare"},zf={NONE:0,SHARED:1,FULL:2};function Vf(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}var Gf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Xn(e,t){return new Gf[e](t)}function Vh(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Dr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Gh(){const e=Dr("canvas");return e.style.display="block",e}var ml={},Zi=null;function kf(e){Zi=e}function Hf(){return Zi}function Or(...e){const t="THREE."+e.shift();Zi?Zi("log",t,...e):console.log(t,...e)}function kh(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function fe(...e){e=kh(e);const t="THREE."+e.shift();if(Zi)Zi("warn",t,...e);else{const i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Ie(...e){e=kh(e);const t="THREE."+e.shift();if(Zi)Zi("error",t,...e);else{const i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Ii(...e){const t=e.join(" ");t in ml||(ml[t]=!0,fe(...e))}function Wf(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var Xf={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=1234567,mn=Math.PI/180,Kn=180/Math.PI;function jt(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[e&255]+Dt[e>>8&255]+Dt[e>>16&255]+Dt[e>>24&255]+"-"+Dt[t&255]+Dt[t>>8&255]+"-"+Dt[t>>16&15|64]+Dt[t>>24&255]+"-"+Dt[i&63|128]+Dt[i>>8&255]+"-"+Dt[i>>16&255]+Dt[i>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Ve(e,t,i){return Math.max(t,Math.min(i,e))}function Ro(e,t){return(e%t+t)%t}function qf(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function Yf(e,t,i){return e!==t?(i-e)/(t-e):0}function Tr(e,t,i){return(1-i)*e+i*t}function Zf(e,t,i,n){return Tr(e,t,1-Math.exp(-i*n))}function Jf(e,t=1){return t-Math.abs(Ro(e,t*2)-t)}function Kf(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function $f(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Qf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function jf(e,t){return e+Math.random()*(t-e)}function ep(e){return e*(.5-Math.random())}function tp(e){e!==void 0&&(gl=e);let t=gl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ip(e){return e*mn}function np(e){return e*Kn}function rp(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function sp(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function ap(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function op(e,t,i,n,r){const s=Math.cos,a=Math.sin,o=s(i/2),l=a(i/2),c=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*f,o*c);break;case"YXY":e.set(l*f,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*f,o*h,o*c);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lp={DEG2RAD:mn,RAD2DEG:Kn,generateUUID:jt,clamp:Ve,euclideanModulo:Ro,mapLinear:qf,inverseLerp:Yf,lerp:Tr,damp:Zf,pingpong:Jf,smoothstep:Kf,smootherstep:$f,randInt:Qf,randFloat:jf,randFloatSpread:ep,seededRandom:tp,degToRad:ip,radToDeg:np,isPowerOfTwo:rp,ceilPowerOfTwo:sp,floorPowerOfTwo:ap,setQuaternionFromProperEuler:op,normalize:Ze,denormalize:Gt},ee=class Hh{static{Hh.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,n=this.y,r=t.elements;return this.x=r[0]*i+r[3]*n+r[6],this.y=r[1]*i+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y;return i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const n=Math.cos(i),r=Math.sin(i),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,a){let o=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],d=r[s+0],u=r[s+1],f=r[s+2],g=r[s+3];if(h!==g||o!==d||l!==u||c!==f){let _=o*d+l*u+c*f+h*g;_<0&&(d=-d,u=-u,f=-f,g=-g,_=-_);let m=1-a;if(_<.9995){const p=Math.acos(_),M=Math.sin(p);m=Math.sin(m*p)/M,a=Math.sin(a*p)/M,o=o*m+d*a,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a}else{o=o*m+d*a,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a;const p=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=p,l*=p,c*=p,h*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){const a=i[n],o=i[n+1],l=i[n+2],c=i[n+3],h=r[s],d=r[s+1],u=r[s+2],f=r[s+3];return e[t]=a*f+c*h+o*u-l*d,e[t+1]=o*f+c*d+l*h-a*u,e[t+2]=l*f+c*u+a*d-o*h,e[t+3]=c*f-a*h-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(i/2),c=a(n/2),h=a(r/2),d=o(i/2),u=o(n/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"YXZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"ZXY":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"ZYX":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"YZX":this._x=d*c*h+l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h-d*u*f;break;case"XZY":this._x=d*c*h-l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h+d*u*f;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(r-l)*u,this._z=(s-n)*u}else if(i>a&&i>h){const u=2*Math.sqrt(1+i-a-h);this._w=(c-o)/u,this._x=.25*u,this._y=(n+s)/u,this._z=(r+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-i-h);this._w=(r-l)/u,this._x=(n+s)/u,this._y=.25*u,this._z=(o+c)/u}else{const u=2*Math.sqrt(1+h-i-a);this._w=(s-n)/u,this._x=(r+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+s*a+n*l-r*o,this._y=n*c+s*o+r*a-i*l,this._z=r*c+s*l+i*o-n*a,this._w=s*c-i*a-n*o-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class Wh{static{Wh.prototype.isVector3=!0}constructor(t=0,i=0,n=0){this.x=t,this.y=i,this.z=n}set(t,i,n){return n===void 0&&(n=this.z),this.x=t,this.y=i,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vl.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6]*r,this.y=s[1]*i+s[4]*n+s[7]*r,this.z=s[2]*i+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*i+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*i+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*i+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*i+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const i=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*i-s*r),d=2*(s*n-a*i);return this.x=i+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*i+s[4]*n+s[8]*r,this.y=s[1]*i+s[5]*n+s[9]*r,this.z=s[2]*i+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this.z=Ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this.z=Ve(this.z,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const n=t.x,r=t.y,s=t.z,a=i.x,o=i.y,l=i.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return i*i+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,n){const r=Math.sin(i)*t;return this.x=r*Math.sin(n),this.y=Math.cos(i)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=r,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(t),this.y=i,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new C,vl=new kt,Ye=class Xh{static{Xh.prototype.isMatrix3=!0}constructor(t,i,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,l,c)}set(t,i,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=i,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],M=r[1],A=r[4],v=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*_+o*M+l*T,s[3]=a*m+o*A+l*w,s[6]=a*p+o*v+l*R,s[1]=c*_+h*M+d*T,s[4]=c*m+h*A+d*w,s[7]=c*p+h*v+d*R,s[2]=u*_+f*M+g*T,s[5]=u*m+f*A+g*w,s[8]=u*p+f*v+g*R,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*a*h-i*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=i*d+n*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*c-h*n)*_,t[2]=(o*n-r*a)*_,t[3]=u*_,t[4]=(h*i-r*l)*_,t[5]=(r*s-o*i)*_,t[6]=f*_,t[7]=(n*l-c*i)*_,t[8]=(a*i-n*s)*_,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+i,0,0,1),this}scale(t,i){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(va.makeScale(t,i)),this}rotate(t){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(va.makeRotation(-t)),this}translate(t,i){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(va.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<9;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},va=new Ye,_l=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){const e={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Ur:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[Zs]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:_l,fromXYZ:yl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:t,whitePoint:n,transfer:Nr,toXYZ:_l,fromXYZ:yl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),e}var je=cp();function Pi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Zn(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Sn,qh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sn===void 0&&(Sn=Dr("canvas")),Sn.width=e.width,Sn.height=e.height;const n=Sn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Sn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Pi(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hp=0,wi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=jt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(_a(n[s].image)):r.push(_a(n[s]))}else r=_a(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function _a(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?qh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}var up=class extends wi{constructor(e=null){Ii('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(e),this.isSource=!0}},dp=0,ya=new C,Rt=class Hs extends hi{constructor(t=Hs.DEFAULT_IMAGE,i=Hs.DEFAULT_MAPPING,n=qt,r=qt,s=yt,a=tr,o=Di,l=Ri,c=Hs.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=jt(),this.name="",this.source=new wi(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const n=t[i];if(n===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const r=this[i];if(r===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case qt:t.x=t.x<0?0:1;break;case Rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case qt:t.y=t.y<0?0:1;break;case Rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=300;Rt.DEFAULT_ANISOTROPY=1;var ft=class Yh{static{Yh.prototype.isVector4=!0}constructor(t=0,i=0,n=0,r=1){this.x=t,this.y=i,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,n,r){return this.x=t,this.y=i,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*i+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*i+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*i+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*i+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,n,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const A=(c+1)/2,v=(f+1)/2,T=(p+1)/2,w=(h+u)/4,R=(d+_)/4,y=(g+m)/4;return A>v&&A>T?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=w/n,s=R/n):v>T?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=y/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=R/s,r=y/s),this.set(n,r,s,i),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this.z=Ve(this.z,t.z,i.z),this.w=Ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this.z=Ve(this.z,t,i),this.w=Ve(this.w,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Io=class extends hi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},r=new Rt(n),s=i.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new wi(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Io{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ta=class extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},fp=class extends Yt{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new ta(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},ia=class extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Et,this.minFilter=Et,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},pp=class extends Yt{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new ia(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},He=class so{static{so.prototype.isMatrix4=!0}constructor(t,i,n,r,s,a,o,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,l,c,h,d,u,f,g,_,m)}set(t,i,n,r,s,a,o,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=i,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new so().fromArray(this.elements)}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){const i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,n=t.elements,r=1/bn.setFromMatrixColumn(t,0).length(),s=1/bn.setFromMatrixColumn(t,1).length(),a=1/bn.setFromMatrixColumn(t,2).length();return i[0]=n[0]*r,i[1]=n[1]*r,i[2]=n[2]*r,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=f+g*c,i[5]=u-_*c,i[9]=-o*l,i[2]=_-u*c,i[6]=g+f*c,i[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;i[0]=u+_*o,i[4]=g*o-f,i[8]=a*c,i[1]=a*d,i[5]=a*h,i[9]=-o,i[2]=f*o-g,i[6]=_+u*o,i[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;i[0]=u-_*o,i[4]=-a*d,i[8]=g+f*o,i[1]=f+g*o,i[5]=a*h,i[9]=_-u*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;i[0]=l*h,i[4]=g*c-f,i[8]=u*c+_,i[1]=l*d,i[5]=_*c+u,i[9]=f*c-g,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;i[0]=l*h,i[4]=_-u*d,i[8]=g*d+f,i[1]=d,i[5]=a*h,i[9]=-o*h,i[2]=-c*h,i[6]=f*d+g,i[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+_,i[5]=a*h,i[9]=f*d-g,i[2]=g*d-f,i[6]=o*h,i[10]=_*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mp,t,gp)}lookAt(t,i,n){const r=this.elements;return Kt.subVectors(t,i),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Vi.crossVectors(n,Kt),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Vi.crossVectors(n,Kt)),Vi.normalize(),Kr.crossVectors(Kt,Vi),r[0]=Vi.x,r[4]=Kr.x,r[8]=Kt.x,r[1]=Vi.y,r[5]=Kr.y,r[9]=Kt.y,r[2]=Vi.z,r[6]=Kr.z,r[10]=Kt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],A=n[7],v=n[11],T=n[15],w=r[0],R=r[4],y=r[8],b=r[12],N=r[1],I=r[5],D=r[9],X=r[13],L=r[2],V=r[6],J=r[10],k=r[14],he=r[3],q=r[7],Z=r[11],j=r[15];return s[0]=a*w+o*N+l*L+c*he,s[4]=a*R+o*I+l*V+c*q,s[8]=a*y+o*D+l*J+c*Z,s[12]=a*b+o*X+l*k+c*j,s[1]=h*w+d*N+u*L+f*he,s[5]=h*R+d*I+u*V+f*q,s[9]=h*y+d*D+u*J+f*Z,s[13]=h*b+d*X+u*k+f*j,s[2]=g*w+_*N+m*L+p*he,s[6]=g*R+_*I+m*V+p*q,s[10]=g*y+_*D+m*J+p*Z,s[14]=g*b+_*X+m*k+p*j,s[3]=M*w+A*N+v*L+T*he,s[7]=M*R+A*I+v*V+T*q,s[11]=M*y+A*D+v*J+T*Z,s[15]=M*b+A*X+v*k+T*j,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],M=l*f-c*u,A=o*f-c*d,v=o*u-l*d,T=a*f-c*h,w=a*u-l*h,R=a*d-o*h;return i*(_*M-m*A+p*v)-n*(g*M-m*T+p*w)+r*(g*A-_*T+p*R)-s*(g*v-_*w+m*R)}determinantAffine(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=i,r[14]=n),this}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=i*o-n*a,A=i*l-r*a,v=i*c-s*a,T=n*l-r*o,w=n*c-s*o,R=r*c-s*l,y=h*_-d*g,b=h*m-u*g,N=h*p-f*g,I=d*m-u*_,D=d*p-f*_,X=u*p-f*m,L=M*X-A*D+v*I+T*N-w*b+R*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/L;return t[0]=(o*X-l*D+c*I)*V,t[1]=(r*D-n*X-s*I)*V,t[2]=(_*R-m*w+p*T)*V,t[3]=(u*w-d*R-f*T)*V,t[4]=(l*N-a*X-c*b)*V,t[5]=(i*X-r*N+s*b)*V,t[6]=(m*v-g*R-p*A)*V,t[7]=(h*R-u*v+f*A)*V,t[8]=(a*D-o*N+c*y)*V,t[9]=(n*N-i*D-s*y)*V,t[10]=(g*w-_*v+p*M)*V,t[11]=(d*v-h*w-f*M)*V,t[12]=(o*b-a*I-l*y)*V,t[13]=(i*I-n*b+r*y)*V,t[14]=(_*A-g*T-m*M)*V,t[15]=(h*T-d*A+u*M)*V,this}scale(t){const i=this.elements,n=t.x,r=t.y,s=t.z;return i[0]*=n,i[4]*=r,i[8]*=s,i[1]*=n,i[5]*=r,i[9]*=s,i[2]*=n,i[6]*=r,i[10]*=s,i[3]*=n,i[7]*=r,i[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,r))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const n=Math.cos(i),r=Math.sin(i),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,i,r,1,0,0,0,0,1),this}compose(t,i,n){const r=this.elements,s=i._x,a=i._y,o=i._z,l=i._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,_=a*h,m=a*d,p=o*d,M=l*c,A=l*h,v=l*d,T=n.x,w=n.y,R=n.z;return r[0]=(1-(_+p))*T,r[1]=(f+v)*T,r[2]=(g-A)*T,r[3]=0,r[4]=(f-v)*w,r[5]=(1-(u+p))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(g+A)*R,r[9]=(m-M)*R,r[10]=(1-(u+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,i,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),i.identity(),this;let a=bn.set(r[0],r[1],r[2]).length();const o=bn.set(r[4],r[5],r[6]).length(),l=bn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),si.copy(this);const c=1/a,h=1/o,d=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,i.setFromRotationMatrix(si),n.x=a,n.y=o,n.z=l,this}makePerspective(t,i,n,r,s,a,o=Yi,l=!1){const c=this.elements,h=2*s/(i-t),d=2*s/(n-r),u=(i+t)/(i-t),f=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===2e3)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,n,r,s,a,o=Yi,l=!1){const c=this.elements,h=2/(i-t),d=2/(n-r),u=-(i+t)/(i-t),f=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===2e3)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===2001)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<16;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}},bn=new C,si=new He,mp=new C(0,0,0),gp=new C(1,1,1),Vi=new C,Kr=new C,Kt=new C,xl=new He,Ml=new kt,Oi=class Zh{constructor(t=0,i=0,n=0,r=Zh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,r=this._order){return this._x=t,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(i){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xl,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Oi.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vp=0,Sl=new C,Tn=new kt,yi=new He,$r=new C,or=new C,_p=new C,yp=new kt,bl=new C(1,0,0),Tl=new C(0,1,0),Al=new C(0,0,1),El={type:"added"},xp={type:"removed"},An={type:"childadded",child:null},xa={type:"childremoved",child:null},ot=class Ws extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ws.DEFAULT_UP.clone();const t=new C,i=new Oi,n=new kt,r=new C(1,1,1);function s(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new Ye}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Ws.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ws.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Tn.setFromAxisAngle(t,i),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(t,i){return Tn.setFromAxisAngle(t,i),this.quaternion.premultiply(Tn),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,i){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?$r.copy(t):$r.set(t,i,n);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(or,$r,this.up):yi.lookAt($r,or,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),Tn.setFromRotationMatrix(yi),this.quaternion.premultiply(Tn.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(El),An.child=t,this.dispatchEvent(An),An.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(xp),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(El),An.child=t,this.dispatchEvent(An),An.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*n-s[8]*r,s[13]+=n-s[1]*i-s[5]*n-s[9]*r,s[14]+=r-s[2]*i-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(i){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ot.DEFAULT_UP=new C(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const u of e.hand.values()){const f=t.getJointPose(u,i),g=this._getHandJoint(l,u);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position);l.inputState.pinching&&d>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Ma(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=je.workingColorSpace){if(e=Ro(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Ma(s,r,e+1/3),this.g=Ma(s,r,e),this.b=Ma(s,r,e-1/3)}return je.colorSpaceToWorking(this,n),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:fe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return je.workingToColorSpace(Ot.copy(this),e),Math.round(Ve(Ot.r*255,0,255))*65536+Math.round(Ve(Ot.g*255,0,255))*256+Math.round(Ve(Ot.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,n=Ot.g,r=Ot.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case i:o=(n-r)/h+(n<r?6:0);break;case n:o=(r-i)/h+2;break;case r:o=(i-n)/h+4}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Qt){je.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,n=Ot.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Qr);const i=Tr(Gi.h,Qr.h,t),n=Tr(Gi.s,Qr.s,t),r=Tr(Gi.l,Qr.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new xe;xe.NAMES=Jh;var Kh=class $h{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(t),this.density=i}clone(){return new $h(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Qh=class jh{constructor(t,i=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=i,this.far=n}clone(){return new jh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},eu=class extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ai=new C,xi=new C,Sa=new C,Mi=new C,En=new C,wn=new C,wl=new C,ba=new C,Ta=new C,Aa=new C,Ea=new ft,wa=new ft,Ca=new ft,qi=class Hn{constructor(t=new C,i=new C,n=new C){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,r){r.subVectors(n,i),ai.subVectors(t,i),r.cross(ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,i,n,r,s){ai.subVectors(r,i),xi.subVectors(n,i),Sa.subVectors(t,i);const a=ai.dot(ai),o=ai.dot(xi),l=ai.dot(Sa),c=xi.dot(xi),h=xi.dot(Sa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,i,n,r){return this.getBarycoord(t,i,n,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,i,n,r,s,a,o,l){return this.getBarycoord(t,i,n,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(t,i,n,r,s,a){return Ea.setScalar(0),wa.setScalar(0),Ca.setScalar(0),Ea.fromBufferAttribute(t,i),wa.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ea,s.x),a.addScaledVector(wa,s.y),a.addScaledVector(Ca,s.z),a}static isFrontFacing(t,i,n,r){return ai.subVectors(n,i),xi.subVectors(t,i),ai.cross(xi).dot(r)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,r){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,n,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),ai.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Hn.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,r,s){return Hn.getInterpolation(t,this.a,this.b,this.c,i,n,r,s)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const n=this.a,r=this.b,s=this.c;let a,o;En.subVectors(r,n),wn.subVectors(s,n),ba.subVectors(t,n);const l=En.dot(ba),c=wn.dot(ba);if(l<=0&&c<=0)return i.copy(n);Ta.subVectors(t,r);const h=En.dot(Ta),d=wn.dot(Ta);if(h>=0&&d<=h)return i.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),i.copy(n).addScaledVector(En,a);Aa.subVectors(t,s);const f=En.dot(Aa),g=wn.dot(Aa);if(g>=0&&f<=g)return i.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),i.copy(n).addScaledVector(wn,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return wl.subVectors(s,r),o=(d-h)/(d-h+(f-g)),i.copy(r).addScaledVector(wl,o);const p=1/(m+_+u);return a=_*p,o=u*p,i.copy(n).addScaledVector(En,a).addScaledVector(wn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,oi):oi.fromBufferAttribute(r,s),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),es.subVectors(this.max,lr),Cn.subVectors(e.a,lr),Rn.subVectors(e.b,lr),In.subVectors(e.c,lr),ki.subVectors(Rn,Cn),Hi.subVectors(In,Rn),ji.subVectors(Cn,In);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-ji.z,ji.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,ji.z,0,-ji.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-ji.y,ji.x,0];return!Ra(t,Cn,Rn,In,es)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,Cn,Rn,In,es))?!1:(ts.crossVectors(ki,Hi),t=[ts.x,ts.y,ts.z],Ra(t,Cn,Rn,In,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new C,new C,new C,new C,new C,new C,new C,new C],oi=new C,jr=new Bt,Cn=new C,Rn=new C,In=new C,ki=new C,Hi=new C,ji=new C,lr=new C,es=new C,ts=new C,en=new C;function Ra(e,t,i,n,r){for(let s=0,a=e.length-3;s<=a;s+=3){en.fromArray(e,s);const o=r.x*Math.abs(en.x)+r.y*Math.abs(en.y)+r.z*Math.abs(en.z),l=t.dot(en),c=i.dot(en),h=n.dot(en);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ei=Sp();function Sp(){const e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Xt(e){Math.abs(e)>65504&&fe("DataUtils.toHalfFloat(): Value out of range."),e=Ve(e,-65504,65504),Ei.floatView[0]=e;const t=Ei.uint32View[0],i=t>>23&511;return Ei.baseTable[i]+((t&8388607)>>Ei.shiftTable[i])}function Mr(e){const t=e>>10;return Ei.uint32View[0]=Ei.mantissaTable[Ei.offsetTable[t]+(e&1023)]+Ei.exponentTable[t],Ei.floatView[0]}var bp=class{static toHalfFloat(e){return Xt(e)}static fromHalfFloat(e){return Mr(e)}},bt=new C,is=new ee,Tp=0,pt=class extends hi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ea,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Ap=class extends pt{constructor(e,t,i){super(new Int8Array(e),t,i)}},Ep=class extends pt{constructor(e,t,i){super(new Uint8Array(e),t,i)}},wp=class extends pt{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Cp=class extends pt{constructor(e,t,i){super(new Int16Array(e),t,i)}},Po=class extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Rp=class extends pt{constructor(e,t,i){super(new Int32Array(e),t,i)}},Lo=class extends pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ip=class extends pt{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Mr(this.array[e*this.itemSize]);return this.normalized&&(t=Gt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=Xt(t),this}getY(e){let t=Mr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Gt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=Xt(t),this}getZ(e){let t=Mr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Gt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=Xt(t),this}getW(e){let t=Mr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Gt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=Xt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=Xt(t),this.array[e+1]=Xt(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array)),this.array[e+0]=Xt(t),this.array[e+1]=Xt(i),this.array[e+2]=Xt(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.array[e+0]=Xt(t),this.array[e+1]=Xt(i),this.array[e+2]=Xt(n),this.array[e+3]=Xt(r),this}},Te=class extends pt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Pp=new Bt,cr=new C,Ia=new C,Lt=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(cr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ia)),this.expandByPoint(cr.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lp=0,ti=new He,Pa=new ot,Pn=new C,$t=new Bt,hr=new Bt,It=new C,Je=class tu extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=jt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vf(t)?Lo:Po)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,i,n){return ti.makeTranslation(t,i,n),this.applyMatrix4(ti),this}scale(t,i,n){return ti.makeScale(t,i,n),this.applyMatrix4(ti),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{const n=Math.min(t.length,i.count);for(let r=0;r<n;r++){const s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,r=i.length;n<r;n++){const s=i[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(t),i)for(let s=0,a=i.length;s<a;s++){const o=i[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors($t.min,hr.min),$t.expandByPoint(It),It.addVectors($t.max,hr.max),$t.expandByPoint(It)):($t.expandByPoint(hr.min),$t.expandByPoint(hr.max))}$t.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)It.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(It));if(i)for(let s=0,a=i.length;s<a;s++){const o=i[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(Pn.fromBufferAttribute(t,c),It.add(Pn)),r=Math.max(r,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,r=i.normal,s=i.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new C,l[y]=new C;const c=new C,h=new C,d=new C,u=new ee,f=new ee,g=new ee,_=new C,m=new C;function p(y,b,N){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,N),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,N),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[y].add(_),o[b].add(_),o[N].add(_),l[y].add(m),l[b].add(m),l[N].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,b=M.length;y<b;++y){const N=M[y],I=N.start,D=N.count;for(let X=I,L=I+D;X<L;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const A=new C,v=new C,T=new C,w=new C;function R(y){T.fromBufferAttribute(r,y),w.copy(T);const b=o[y];A.copy(b),A.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(w,b);const N=v.dot(l[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,N)}for(let y=0,b=M.length;y<b;++y){const N=M[y],I=N.start,D=N.count;for(let X=I,L=I+D;X<L;X+=3)R(t.getX(X+0)),R(t.getX(X+1)),R(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new pt(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(i,g),s.fromBufferAttribute(i,_),a.fromBufferAttribute(i,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=i.count;u<f;u+=3)r.fromBufferAttribute(i,u+0),s.fromBufferAttribute(i,u+1),a.fromBufferAttribute(i,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)It.fromBufferAttribute(t,i),It.normalize(),t.setXYZ(i,It.x,It.y,It.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new pt(u,h,d)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new tu,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);i.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(i))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ra=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ea,this.updateRanges=[],this.version=0,this.uuid=jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},zt=new C,Fr=class iu{constructor(t,i,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,n=this.data.count;i<n;i++)zt.fromBufferAttribute(this,i),zt.applyMatrix4(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)zt.fromBufferAttribute(this,i),zt.applyNormalMatrix(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)zt.fromBufferAttribute(this,i),zt.transformDirection(t),this.setXYZ(i,zt.x,zt.y,zt.z);return this}getComponent(t,i){let n=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(n=Gt(n,this.array)),n}setComponent(t,i,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[t*this.data.stride+this.offset+i]=n,this}setX(t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Gt(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Gt(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Gt(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Gt(i,this.array)),i}setXY(t,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),n=Ze(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this}setXYZ(t,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),n=Ze(n,this.array),r=Ze(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,i,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ze(i,this.array),n=Ze(n,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[r+s])}return new pt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new iu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},La=new C,Up=new C,Np=new Ye,Ai=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=La.subVectors(i,t).cross(Up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(La),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Np.getNormalMatrix(e),n=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dp=0,Ut=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=jt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){fe(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ai().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Uo=class extends Ut{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ln,ur=new C,Un=new C,Nn=new C,Dn=new ee,dr=new ee,nu=new He,ns=new C,fr=new C,rs=new C,Cl=new ee,Ua=new ee,Rl=new ee,ru=class extends ot{constructor(e=new Uo){if(super(),this.isSprite=!0,this.type="Sprite",Ln===void 0){Ln=new Je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ra(t,5);Ln.setIndex([0,1,2,0,2,3]),Ln.setAttribute("position",new Fr(i,3,0,!1)),Ln.setAttribute("uv",new Fr(i,2,3,!1))}this.geometry=Ln,this.material=e,this.center=new ee(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Un.setFromMatrixScale(this.matrixWorld),nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Un.multiplyScalar(-Nn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const s=this.center;ss(ns.set(-.5,-.5,0),Nn,s,Un,n,r),ss(fr.set(.5,-.5,0),Nn,s,Un,n,r),ss(rs.set(.5,.5,0),Nn,s,Un,n,r),Cl.set(0,0),Ua.set(1,0),Rl.set(1,1);let a=e.ray.intersectTriangle(ns,fr,rs,!1,ur);if(a===null&&(ss(fr.set(-.5,.5,0),Nn,s,Un,n,r),Ua.set(0,1),a=e.ray.intersectTriangle(ns,rs,fr,!1,ur),a===null))return;const o=e.ray.origin.distanceTo(ur);o<e.near||o>e.far||t.push({distance:o,point:ur.clone(),uv:qi.getInterpolation(ur,ns,fr,rs,Cl,Ua,Rl,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ss(e,t,i,n,r,s){Dn.subVectors(e,i).addScalar(.5).multiply(n),r!==void 0?(dr.x=s*Dn.x-r*Dn.y,dr.y=r*Dn.x+s*Dn.y):dr.copy(Dn),e.copy(t),e.x+=dr.x,e.y+=dr.y,e.applyMatrix4(nu)}var as=new C,Il=new C,su=class extends ot{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let r=0;for(;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){as.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(as);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){as.setFromMatrixPosition(e.matrixWorld),Il.setFromMatrixPosition(this.matrixWorld);const i=as.distanceTo(Il)/e.zoom;t[0].object.visible=!0;let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),i>=s)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];const i=this.levels;for(let n=0,r=i.length;n<r;n++){const s=i[n];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}},bi=new C,Na=new C,os=new C,ls=new C,ir=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Na.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(Na);const r=e.distanceTo(t)*.5,s=-this.direction.dot(os),a=ls.dot(this.direction),o=-ls.dot(os),l=ls.lengthSq(),c=Math.abs(1-s*s);let h,d,u,f;if(c>0)if(h=s*o-a,d=s*a-o,f=r*c,h>=0)if(d>=-f)if(d<=f){const g=1/c;h*=g,d*=g,u=h*(h+s*d+2*a)+d*(s*h+d+2*o)+l}else d=r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d=-r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d<=-f?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l):d<=f?(h=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Na).addScaledVector(os,d),u}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),n=bi.dot(bi)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),c>=0?(r=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),h>=0?(a=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,n,r){const s=this.origin,a=this.direction,o=a.x,l=a.y,c=a.z,h=e.x-s.x,d=e.y-s.y,u=e.z-s.z,f=t.x-s.x,g=t.y-s.y,_=t.z-s.z,m=i.x-s.x,p=i.y-s.y,M=i.z-s.z,A=Math.abs(o),v=Math.abs(l),T=Math.abs(c);let w,R,y,b,N,I,D,X,L,V,J,k;if(A>=v&&A>=T?(y=o,I=h,L=f,k=m,o>=0?(w=l,R=c,b=d,N=u,D=g,X=_,V=p,J=M):(w=c,R=l,b=u,N=d,D=_,X=g,V=M,J=p)):v>=T?(y=l,I=d,L=g,k=p,l>=0?(w=c,R=o,b=u,N=h,D=_,X=f,V=M,J=m):(w=o,R=c,b=h,N=u,D=f,X=_,V=m,J=M)):(y=c,I=u,L=_,k=M,c>=0?(w=o,R=l,b=h,N=d,D=f,X=g,V=m,J=p):(w=l,R=o,b=d,N=h,D=g,X=f,V=p,J=m)),y===0)return null;const he=w/y,q=R/y,Z=1/y,j=b-he*I,Ge=N-q*I,Pe=D-he*L,lt=X-q*L,Xe=V-he*k,Y=J-q*k,re=Xe*lt-Y*Pe,ae=j*Y-Ge*Xe,Ue=Pe*Ge-lt*j;if(n){if(re<0||ae<0||Ue<0)return null}else if((re<0||ae<0||Ue<0)&&(re>0||ae>0||Ue>0))return null;const Fe=re+ae+Ue;if(Fe===0)return null;const de=Z*(re*I+ae*L+Ue*k);return(Fe>0?de<0:de>0)?null:this.at(de/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ki=class extends Ut{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pl=new He,tn=new ir,cs=new Lt,Ll=new C,hs=new C,us=new C,ds=new C,Da=new C,fs=new C,Ul=new C,ps=new C,Tt=class extends ot{constructor(e=new Je,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){fs.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],h=r[o];c!==0&&(Da.fromBufferAttribute(h,e),s?fs.addScaledVector(Da,c):fs.addScaledVector(Da.sub(t),c))}t.add(fs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),tn.copy(e.ray).recast(e.near),!(cs.containsPoint(tn.origin)===!1&&(tn.intersectSphere(cs,Ll)===null||tn.origin.distanceToSquared(Ll)>(e.far-e.near)**2))&&(Pl.copy(r).invert(),tn.copy(e.ray).applyMatrix4(Pl),!(i.boundingBox!==null&&tn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,tn)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const _=d[f],m=s[_.materialIndex],p=Math.max(_.start,u.start),M=Math.min(a.count,Math.min(_.start+_.count,u.start+u.count));for(let A=p,v=M;A<v;A+=3){const T=a.getX(A),w=a.getX(A+1),R=a.getX(A+2);n=ms(this,m,e,i,l,c,h,T,w,R),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const f=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let _=f,m=g;_<m;_+=3){const p=a.getX(_),M=a.getX(_+1),A=a.getX(_+2);n=ms(this,s,e,i,l,c,h,p,M,A),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const _=d[f],m=s[_.materialIndex],p=Math.max(_.start,u.start),M=Math.min(o.count,Math.min(_.start+_.count,u.start+u.count));for(let A=p,v=M;A<v;A+=3){const T=A,w=A+1,R=A+2;n=ms(this,m,e,i,l,c,h,T,w,R),n&&(n.faceIndex=Math.floor(A/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const f=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let _=f,m=g;_<m;_+=3){const p=_,M=_+1,A=_+2;n=ms(this,s,e,i,l,c,h,p,M,A),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}};function Op(e,t,i,n,r,s,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===0,o),l===null)return null;ps.copy(o),ps.applyMatrix4(e.matrixWorld);const c=i.ray.origin.distanceTo(ps);return c<i.near||c>i.far?null:{distance:c,point:ps.clone(),object:e}}function ms(e,t,i,n,r,s,a,o,l,c){e.getVertexPosition(o,hs),e.getVertexPosition(l,us),e.getVertexPosition(c,ds);const h=Op(e,t,i,n,hs,us,ds,Ul);if(h){const d=new C;qi.getBarycoord(Ul,hs,us,ds,d),r&&(h.uv=qi.getInterpolatedAttribute(r,o,l,c,d,new ee)),s&&(h.uv1=qi.getInterpolatedAttribute(s,o,l,c,d,new ee)),a&&(h.normal=qi.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};qi.getNormal(hs,us,ds,u.normal),h.face=u,h.barycoord=d}return h}var pr=new ft,Nl=new ft,Dl=new ft,Fp=new ft,Ol=new He,gs=new C,Oa=new Lt,Fl=new He,Fa=new ir,au=class extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gs),this.boundingBox.expandByPoint(gs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Lt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,gs),this.boundingSphere.expandByPoint(gs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(n),e.ray.intersectsSphere(Oa)!==!1&&(Fl.copy(n).invert(),Fa.copy(e.ray).applyMatrix4(Fl),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Nl.fromBufferAttribute(n.attributes.skinIndex,e),Dl.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(pr.copy(t),t.set(0,0,0,0)):(pr.set(...t,1),t.set(0,0,0)),pr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const s=Dl.getComponent(r);if(s!==0){const a=Nl.getComponent(r);Ol.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Fp.copy(pr).applyMatrix4(Ol),s)}}return t.isVector4&&(t.w=pr.w),t.applyMatrix4(this.bindMatrixInverse)}},No=class extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},ii=class extends Rt{constructor(e=null,t=1,i=1,n,r,s,a,o,l=Et,c=Et,h,d){super(null,s,a,o,l,c,n,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bl=new He,Bp=new He,ou=class lu{constructor(t=[],i=[]){this.uuid=jt(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){const n=new He;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,i=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Bp;Bl.multiplyMatrices(o,i[s]),Bl.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new lu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const i=new Float32Array(t*t*4);i.set(this.boneMatrices);const n=new ii(i,t,t,Di,Ui);return n.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=n,this}getBoneByName(t){for(let i=0,n=this.bones.length;i<n;i++){const r=this.bones[i];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let a=i[s];a===void 0&&(fe("Skeleton: No bone found with UUID:",s),a=new No),this.bones.push(a),this.boneInverses.push(new He().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const i=this.bones,n=this.boneInverses;for(let r=0,s=i.length;r<s;r++){const a=i[r];t.bones.push(a.uuid);const o=n[r];t.boneInverses.push(o.toArray())}return t}},$n=class extends pt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},On=new He,zl=new He,vs=[],Vl=new Bt,zp=new He,mr=new Tt,gr=new Lt,cu=class extends Tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $n(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,zp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,On),Vl.copy(e.boundingBox).applyMatrix4(On),this.boundingBox.union(Vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,On),gr.copy(e.boundingSphere).applyMatrix4(On),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let s=0;s<i.length;s++)i[s]=n[r+s]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,On),zl.multiplyMatrices(i,On),mr.matrixWorld=zl,mr.raycast(e,vs);for(let s=0,a=vs.length;s<a;s++){const o=vs[s];o.instanceId=r,o.object=this,t.push(o)}vs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $n(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ii(new Float32Array(n*this.count),n,this.count,Ao,Ui));const r=this.morphTexture.source.data.data;let s=0;for(let l=0;l<i.length;l++)s+=i[l];const a=this.geometry.morphTargetsRelative?1:1-s,o=n*e;return r[o]=a,r.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nn=new Lt,Vp=new ee(.5,.5),_s=new C,gn=class{constructor(e=new Ai,t=new Ai,i=new Ai,n=new Ai,r=new Ai,s=new Ai){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yi,i=!1){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],A=r[14],v=r[15];if(n[0].setComponents(l-s,u-c,m-f,v-p).normalize(),n[1].setComponents(l+s,u+c,m+f,v+p).normalize(),n[2].setComponents(l+a,u+h,m+g,v+M).normalize(),n[3].setComponents(l-a,u-h,m-g,v-M).normalize(),i)n[4].setComponents(o,d,_,A).normalize(),n[5].setComponents(l-o,u-d,m-_,v-A).normalize();else if(n[4].setComponents(l-o,u-d,m-_,v-A).normalize(),t===2e3)n[5].setComponents(l+o,u+d,m+_,v+A).normalize();else if(t===2001)n[5].setComponents(o,d,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nn)}intersectsSprite(e){nn.center.set(0,0,0);const t=Vp.distanceTo(e.center);return nn.radius=.7071067811865476+t,nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(nn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(_s.x=n.normal.x>0?e.max.x:e.min.x,_s.y=n.normal.y>0?e.max.y:e.min.y,_s.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gl=new He,hu=class uu{constructor(){this.coordinateSystem=Yi,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,n=this._frustums;for(let r=0;r<i.length;r++){const s=i[r];Gl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new gn),n[r].setFromProjectionMatrix(Gl,s.coordinateSystem,s.reversedDepth)}return this._count=i.length,this}intersectsObject(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,n=t._frustums;for(let r=0;r<t._count;r++)i[r]===void 0&&(i[r]=new gn),i[r].copy(n[r]);return this._count=t._count,this}clone(){return new uu().copy(this)}};function Ba(e,t){return e-t}function Gp(e,t){return e.z-t.z}function kp(e,t){return t.z-e.z}var Hp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];s.push(a),this.index++,a.start=e,a.count=t,a.z=i,a.index=n}reset(){this.list.length=0,this.index=0}},Wt=new He,Wp=new xe(1,1,1),Xp=new gn,qp=new hu,ys=new Bt,rn=new Lt,vr=new C,kl=new C,Yp=new C,za=new Hp,Ft=new Tt,xs=[];function Zp(e,t,i=0){const n=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){const r=e.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)t.setComponent(s+i,a,e.getComponent(s,a))}else t.array.set(e.array,i*n);t.needsUpdate=!0}function sn(e,t){if(e.constructor!==t.constructor){const i=Math.min(e.length,t.length);for(let n=0;n<i;n++)t[n]=e[n]}else{const i=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,i))}}var du=class extends Tt{constructor(e,t,i=t*2,n){super(new Je,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new ii(t,e,e,Di,Ui);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new ii(t,e,e,Qs,Li);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new ii(t,e,e,Di,Ui);i.colorSpace=je.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const{array:s,itemSize:a,normalized:o}=e.getAttribute(r),l=new s.constructor(i*a),c=new pt(l,a,o);t.setAttribute(r,c)}if(e.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new pt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Wt),this.getBoundingBoxAt(r,ys).applyMatrix4(Wt),e.union(ys)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Wt),this.getBoundingSphereAt(r,rn).applyMatrix4(Wt),e.union(rn)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const t={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ba),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));const n=this._matricesTexture;Wt.identity().toArray(n.image.data,i*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(Wp.toArray(r.image.data,i*4),r.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const s=e.getIndex();if(s!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?s.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let a;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ba),a=this._availableGeometryIds.shift(),r[a]=n):(a=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(a,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,a}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),s=t.getIndex(),a=this._geometryInfo[e];if(n&&s.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const o=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const c in i.attributes){const h=t.getAttribute(c),d=i.getAttribute(c);Zp(h,d,o);const u=h.itemSize;for(let f=h.count,g=l;f<g;f++){const _=o+f;for(let m=0;m<u;m++)d.setComponent(_,m,0)}d.needsUpdate=!0,d.addUpdateRange(o*u,l*u)}if(n){const c=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<s.count;d++)r.setX(c+d,o+s.getX(d));for(let d=s.count,u=h;d<u;d++)r.setX(c+d,o);r.needsUpdate=!0,r.addUpdateRange(c,a.reservedIndexCount)}return a.start=n?a.indexStart:a.vertexStart,a.count=n?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((s,a)=>a).sort((s,a)=>i[s].vertexStart-i[a].vertexStart),r=this.geometry;for(let s=0,a=i.length;s<a;s++){const o=i[n[s]];if(o.active!==!1){if(r.index!==null){if(o.indexStart!==t){const{indexStart:l,vertexStart:c,reservedIndexCount:h}=o,d=r.index,u=d.array,f=e-c;for(let g=l;g<l+h;g++)u[g]=u[g]+f;d.array.copyWithin(t,l,l+h),d.addUpdateRange(t,h),d.needsUpdate=!0,o.indexStart=t}t+=o.reservedIndexCount}if(o.vertexStart!==e){const{vertexStart:l,reservedVertexCount:c}=o,h=r.attributes;for(const d in h){const u=h[d],{array:f,itemSize:g}=u;f.copyWithin(e*g,l*g,(l+c)*g),u.addUpdateRange(e*g,c*g),u.needsUpdate=!0}o.vertexStart=e}e+=o.reservedVertexCount,o.start=r.index?o.indexStart:o.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const r=new Bt,s=i.index,a=i.attributes.position;for(let o=n.start,l=n.start+n.count;o<l;o++){let c=o;s&&(c=s.getX(c)),r.expandByPoint(vr.fromBufferAttribute(a,c))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const r=new Lt;this.getBoundingBoxAt(e,ys),ys.getCenter(r.center);const s=i.index,a=i.attributes.position;let o=0;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;s&&(h=s.getX(h)),vr.fromBufferAttribute(a,h),o=Math.max(o,r.center.distanceToSquared(vr))}r.radius=Math.sqrt(o),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this._visibilityChanged=!0,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Ba);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),r=new Int32Array(e);sn(this._multiDrawCounts,n),sn(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=e;const s=this._indirectTexture,a=this._matricesTexture,o=this._colorsTexture;s.dispose(),this._initIndirectTexture(),sn(s.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),sn(a.image.data,this._matricesTexture.image.data),o&&(o.dispose(),this._initColorsTexture(),sn(o.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(s=>s.active);if(Math.max(...i.map(s=>s.vertexStart+s.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(s=>s.indexStart+s.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const n=this.geometry;n.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Je,this._initializeGeometry(n));const r=this.geometry;n.index&&sn(n.index.array,r.index.array);for(const s in n.attributes)sn(n.attributes[s].array,r.attributes[s].array)}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,s=this.geometry;Ft.material=this.material,Ft.geometry.index=s.index,Ft.geometry.attributes=s.attributes,Ft.geometry.boundingBox===null&&(Ft.geometry.boundingBox=new Bt),Ft.geometry.boundingSphere===null&&(Ft.geometry.boundingSphere=new Lt);for(let a=0,o=i.length;a<o;a++){if(!i[a].visible||!i[a].active)continue;const l=i[a].geometryIndex,c=n[l];Ft.geometry.setDrawRange(c.start,c.count),this.getMatrixAt(a,Ft.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ft.geometry.boundingBox),this.getBoundingSphereAt(l,Ft.geometry.boundingSphere),Ft.raycast(e,xs);for(let h=0,d=xs.length;h<d;h++){const u=xs[h];u.object=this,u.batchId=a,t.push(u)}xs.length=0}Ft.material=null,Ft.geometry.index=null,Ft.geometry.attributes={},Ft.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._multiDrawBytesPerElement=e._multiDrawBytesPerElement,this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=n.getIndex();let a=s===null?1:s.array.BYTES_PER_ELEMENT,o=1;r.wireframe&&(o=2,a=n.attributes.position.count>65535?4:2);const l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,u=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data,_=i.isArrayCamera?qp:Xp;u&&(i.isArrayCamera?_.setFromArrayCamera(i):(Wt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),_.setFromProjectionMatrix(Wt,i.coordinateSystem,i.reversedDepth)));let m=0;if(this.sortObjects){Wt.copy(this.matrixWorld).invert(),vr.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Wt),kl.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Wt);for(let A=0,v=l.length;A<v;A++)if(l[A].visible&&l[A].active){const T=l[A].geometryIndex;this.getMatrixAt(A,Wt),this.getBoundingSphereAt(T,rn).applyMatrix4(Wt);let w=!1;if(u&&(w=!_.intersectsSphere(rn)),!w){const R=d[T],y=Yp.subVectors(rn.center,vr).dot(kl);za.push(R.start,R.count,y,A)}}const p=za.list,M=this.customSort;M===null?p.sort(r.transparent?kp:Gp):M.call(this,p,i);for(let A=0,v=p.length;A<v;A++){const T=p[A];c[m]=T.start*a*o,h[m]=T.count*o,g[m]=T.index,m++}za.reset()}else for(let p=0,M=l.length;p<M;p++)if(l[p].visible&&l[p].active){const A=l[p].geometryIndex;let v=!1;if(u&&(this.getMatrixAt(p,Wt),this.getBoundingSphereAt(A,rn).applyMatrix4(Wt),v=!_.intersectsSphere(rn)),!v){const T=d[A];c[m]=T.start*a*o,h[m]=T.count*o,g[m]=p,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,r,s){this.onBeforeRender(e,null,n,r,s)}},Ht=class extends Ut{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Js=new C,Ks=new C,Hl=new He,_r=new ir,Ms=new Lt,Va=new C,Wl=new C,Ji=class extends ot{constructor(e=new Je,t=new Ht){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Js.fromBufferAttribute(t,n-1),Ks.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Js.distanceTo(Ks);e.setAttribute("lineDistance",new Te(i,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ms.copy(i.boundingSphere),Ms.applyMatrix4(n),Ms.radius+=r,e.ray.intersectsSphere(Ms)===!1)return;Hl.copy(n).invert(),_r.copy(e.ray).applyMatrix4(Hl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let f=d,g=u-1;f<g;f+=l){const _=c.getX(f),m=c.getX(f+1),p=Ss(this,e,_r,o,_,m,f);p&&t.push(p)}if(this.isLineLoop){const f=c.getX(u-1),g=c.getX(d),_=Ss(this,e,_r,o,f,g,u-1);_&&t.push(_)}}else{const d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let f=d,g=u-1;f<g;f+=l){const _=Ss(this,e,_r,o,f,f+1,f);_&&t.push(_)}if(this.isLineLoop){const f=Ss(this,e,_r,o,u-1,d,u-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Ss(e,t,i,n,r,s,a){const o=e.geometry.attributes.position;if(Js.fromBufferAttribute(o,r),Ks.fromBufferAttribute(o,s),i.distanceSqToSegment(Js,Ks,Va,Wl)>n)return;Va.applyMatrix4(e.matrixWorld);const l=t.ray.origin.distanceTo(Va);if(!(l<t.near||l>t.far))return{distance:l,point:Wl.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var Xl=new C,ql=new C,vi=class extends Ji{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Xl.fromBufferAttribute(t,n),ql.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Xl.distanceTo(ql);e.setAttribute("lineDistance",new Te(i,1))}else fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fu=class extends Ji{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Do=class extends Ut{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yl=new He,ao=new ir,bs=new Lt,Ts=new C,pu=class extends ot{constructor(e=new Je,t=new Do){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(n),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;Yl.copy(n).invert(),ao.copy(e.ray).applyMatrix4(Yl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,c=i.attributes.position;if(l!==null){const h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let u=h,f=d;u<f;u++){const g=l.getX(u);Ts.fromBufferAttribute(c,g),Zl(Ts,g,o,n,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let u=h,f=d;u<f;u++)Ts.fromBufferAttribute(c,u),Zl(Ts,u,o,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Zl(e,t,i,n,r,s,a){const o=ao.distanceSqToPoint(e);if(o<i){const l=new C;ao.closestPointToPoint(e,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var mu=class extends Rt{constructor(e,t,i,n,r=yt,s=yt,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function h(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Jp=class extends mu{constructor(e,t,i,n,r,s,a,o){super({},e,t,i,n,r,s,a,o),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},Kp=class extends Rt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Et,this.minFilter=Et,this.generateMipmaps=!1,this.needsUpdate=!0}},sa=class extends Rt{constructor(e,t,i,n,r,s,a,o,l,c,h,d){super(null,s,a,o,l,c,n,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},$p=class extends sa{constructor(e,t,i,n,r,s){super(e,t,i,r,s),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=qt,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qp=class extends sa{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Wr=class extends Rt{constructor(e=[],t=301,i,n,r,s,a,o,l,c){super(e,t,i,n,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jp=class extends Rt{constructor(e,t,i,n,r,s,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},em=class extends Rt{constructor(e,t,i,n,r,s,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const c=e?e.parentNode:null;c!==null&&"requestPaint"in c&&(c.onpaint=()=>{this.needsUpdate=!0},c.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Qn=class extends Rt{constructor(e,t,i=Li,n,r,s,a=Et,o=Et,l,c=Jn,h=1){if(c!==1026&&c!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:h},n,r,s,a,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gu=class extends Qn{constructor(e,t=Li,i=301,n,r,s=Et,a=Et,o,l=Jn){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,a,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oo=class extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xr=class vu extends Je{constructor(t=1,i=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,i,t,a,s,0),g("z","y","x",1,-1,n,i,-t,a,s,1),g("x","z","y",1,1,t,n,i,r,a,2),g("x","z","y",1,-1,t,n,-i,r,a,3),g("x","y","z",1,-1,t,i,n,r,s,4),g("x","y","z",-1,-1,t,i,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function g(_,m,p,M,A,v,T,w,R,y,b){const N=v/R,I=T/y,D=v/2,X=T/2,L=w/2,V=R+1,J=y+1;let k=0,he=0;const q=new C;for(let Z=0;Z<J;Z++){const j=Z*I-X;for(let Ge=0;Ge<V;Ge++)q[_]=(Ge*N-D)*M,q[m]=j*A,q[p]=L,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(Ge/R),d.push(1-Z/y),k+=1}for(let Z=0;Z<y;Z++)for(let j=0;j<R;j++){const Ge=u+j+V*Z,Pe=u+j+V*(Z+1),lt=u+(j+1)+V*(Z+1),Xe=u+(j+1)+V*Z;l.push(Ge,Pe,Xe),l.push(Pe,lt,Xe),he+=6}o.addGroup(f,he,b),f+=he,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},_u=class yu extends Je{constructor(t=1,i=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:n,radialSegments:r,heightSegments:s},i=Math.max(0,i),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=i/2,d=Math.PI/2*t,u=i,f=2*d+u,g=n*2+s,_=r+1,m=new C,p=new C;for(let M=0;M<=g;M++){let A=0,v=0,T=0,w=0;if(M<=n){const b=M/n,N=b*Math.PI/2;v=-h-t*Math.cos(N),T=t*Math.sin(N),w=-t*Math.cos(N),A=b*d}else if(M<=n+s){const b=(M-n)/s;v=-h+b*i,T=t,w=0,A=d+b*u}else{const b=(M-n-s)/n,N=b*Math.PI/2;v=h+t*Math.sin(N),T=t*Math.cos(N),w=t*Math.sin(N),A=d+u+b*d}const R=Math.max(0,Math.min(1,A/f));let y=0;M===0?y=.5/r:M===g&&(y=-.5/r);for(let b=0;b<=r;b++){const N=b/r,I=N*Math.PI*2,D=Math.sin(I),X=Math.cos(I);p.x=-T*X,p.y=v,p.z=T*D,o.push(p.x,p.y,p.z),m.set(-T*X,w,T*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(N+y,R)}if(M>0){const b=(M-1)*_;for(let N=0;N<r;N++){const I=b+N,D=b+N+1,X=M*_+N,L=M*_+N+1;a.push(I,D,X),a.push(D,L,X)}}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yu(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},xu=class Mu extends Je{constructor(t=1,i=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:n,thetaLength:r},i=Math.max(3,i);const s=[],a=[],o=[],l=[],c=new C,h=new ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){const f=n+d/i*r;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=i;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fo=class Su extends Je{constructor(t=1,i=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&A(!0),i>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function M(){const v=new C,T=new C;let w=0;const R=(i-t)/n;for(let y=0;y<=s;y++){const b=[],N=y/s,I=N*(i-t)+t;for(let D=0;D<=r;D++){const X=D/r,L=X*l+o,V=Math.sin(L),J=Math.cos(L);T.x=I*V,T.y=-N*n+m,T.z=I*J,d.push(T.x,T.y,T.z),v.set(V,R,J).normalize(),u.push(v.x,v.y,v.z),f.push(X,1-N),b.push(g++)}_.push(b)}for(let y=0;y<r;y++)for(let b=0;b<s;b++){const N=_[b][y],I=_[b+1][y],D=_[b+1][y+1],X=_[b][y+1];(t>0||b!==0)&&(h.push(N,I,X),w+=3),(i>0||b!==s-1)&&(h.push(I,D,X),w+=3)}c.addGroup(p,w,0),p+=w}function A(v){const T=g,w=new ee,R=new C;let y=0;const b=v===!0?t:i,N=v===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,m*N,0),u.push(0,N,0),f.push(.5,.5),g++;const I=g;for(let D=0;D<=r;D++){const X=D/r*l+o,L=Math.cos(X),V=Math.sin(X);R.x=b*V,R.y=m*N,R.z=b*L,d.push(R.x,R.y,R.z),u.push(0,N,0),w.x=L*.5+.5,w.y=V*.5*N+.5,f.push(w.x,w.y),g++}for(let D=0;D<r;D++){const X=T+D,L=I+D;v===!0?h.push(L,L+1,X):h.push(L+1,L,X),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bo=class bu extends Fo{constructor(t=1,i=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,i,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new bu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nr=class Tu extends Je{constructor(t=[],i=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const A=new C,v=new C,T=new C;for(let w=0;w<i.length;w+=3)f(i[w+0],A),f(i[w+1],v),f(i[w+2],T),l(A,v,T,M)}function l(M,A,v,T){const w=T+1,R=[];for(let y=0;y<=w;y++){R[y]=[];const b=M.clone().lerp(v,y/w),N=A.clone().lerp(v,y/w),I=w-y;for(let D=0;D<=I;D++)D===0&&y===w?R[y][D]=b:R[y][D]=b.clone().lerp(N,D/I)}for(let y=0;y<w;y++)for(let b=0;b<2*(w-y)-1;b++){const N=Math.floor(b/2);b%2===0?(u(R[y][N+1]),u(R[y+1][N]),u(R[y][N])):(u(R[y][N+1]),u(R[y+1][N+1]),u(R[y+1][N]))}}function c(M){const A=new C;for(let v=0;v<s.length;v+=3)A.x=s[v+0],A.y=s[v+1],A.z=s[v+2],A.normalize().multiplyScalar(M),s[v+0]=A.x,s[v+1]=A.y,s[v+2]=A.z}function h(){const M=new C;for(let A=0;A<s.length;A+=3){M.x=s[A+0],M.y=s[A+1],M.z=s[A+2];const v=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;a.push(v,1-T)}g(),d()}function d(){for(let M=0;M<a.length;M+=6){const A=a[M+0],v=a[M+2],T=a[M+4];Math.max(A,v,T)>.9&&Math.min(A,v,T)<.1&&(A<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function f(M,A){const v=M*3;A.x=t[v+0],A.y=t[v+1],A.z=t[v+2]}function g(){const M=new C,A=new C,v=new C,T=new C,w=new ee,R=new ee,y=new ee;for(let b=0,N=0;b<s.length;b+=9,N+=6){M.set(s[b+0],s[b+1],s[b+2]),A.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),w.set(a[N+0],a[N+1]),R.set(a[N+2],a[N+3]),y.set(a[N+4],a[N+5]),T.copy(M).add(A).add(v).divideScalar(3);const I=m(T);_(w,N+0,M,I),_(R,N+2,A,I),_(y,N+4,v,I)}}function _(M,A,v,T){T<0&&M.x===1&&(a[A]=M.x-1),v.x===0&&v.z===0&&(a[A]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.vertices,t.indices,t.radius,t.detail)}},Au=class Eu extends nr{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(s,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Eu(t.radius,t.detail)}},As=new C,Es=new C,Ga=new C,ws=new qi,wu=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),n=Math.cos(mn*t),r=e.getIndex(),s=e.getAttribute("position"),a=r?r.count:s.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),h={},d=[];for(let u=0;u<a;u+=3){r?(o[0]=r.getX(u),o[1]=r.getX(u+1),o[2]=r.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);const{a:f,b:g,c:_}=ws;if(f.fromBufferAttribute(s,o[0]),g.fromBufferAttribute(s,o[1]),_.fromBufferAttribute(s,o[2]),ws.getNormal(Ga),c[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,c[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,c[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let m=0;m<3;m++){const p=(m+1)%3,M=c[m],A=c[p],v=ws[l[m]],T=ws[l[p]],w=`${M}_${A}`,R=`${A}_${M}`;R in h&&h[R]?(Ga.dot(h[R].normal)<=n&&(d.push(v.x,v.y,v.z),d.push(T.x,T.y,T.z)),h[R]=null):w in h||(h[w]={index0:o[m],index1:o[p],normal:Ga.clone()})}}for(const u in h)if(h[u]){const{index0:f,index1:g}=h[u];As.fromBufferAttribute(s,f),Es.fromBufferAttribute(s,g),d.push(As.x,As.y,As.z),d.push(Es.x,Es.y,Es.z)}this.setAttribute("position",new Te(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let a=0,o=r-1,l;for(;a<=o;)if(n=Math.floor(a+(o-a)/2),l=i[n]-s,l<0)a=n+1;else if(l>0)o=n-1;else{o=n;break}if(n=o,i[n]===s)return n/(r-1);const c=i[n],h=i[n+1]-c,d=(s-c)/h;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),a=this.getPoint(r),o=t||(s.isVector2?new ee:new C);return o.copy(a).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,n=[],r=[],s=[],a=new C,o=new He;for(let u=0;u<=e;u++){const f=u/e;n[u]=this.getTangentAt(f,new C)}r[0]=new C,s[0]=new C;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(Ve(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(a,f))}s[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(Ve(r[0].dot(r[e]),-1,1));u/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(o.makeRotationAxis(n[f],u*f)),s[f].crossVectors(n[f],r[f])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},aa=class extends ui{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(e,t=new ee){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Cu=class extends aa{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function zo(){let e=0,t=0,i=0,n=0;function r(s,a,o,l){e=s,t=o,i=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,r(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return e+t*s+i*a+n*o}}}var Jl=new C,Kl=new C,ka=new zo,Ha=new zo,Wa=new zo,Ru=class extends ui{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){const i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let l,c;this.closed||a>0?l=n[(a-1)%r]:(Kl.subVectors(n[0],n[1]).add(n[0]),l=Kl);const h=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?c=n[(a+2)%r]:(Jl.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=Jl),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let f=Math.pow(l.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(c),u);g<1e-4&&(g=1),f<1e-4&&(f=g),_<1e-4&&(_=g),ka.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,f,g,_),Ha.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,f,g,_),Wa.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,f,g,_)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),Ha.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),Wa.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return i.set(ka.calc(o),Ha.calc(o),Wa.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $l(e,t,i,n,r){const s=(n-t)*.5,a=(r-i)*.5,o=e*e,l=e*o;return(2*i-2*n+s+a)*l+(-3*i+3*n-2*s-a)*o+s*e+i}function tm(e,t){const i=1-e;return i*i*t}function im(e,t){return 2*(1-e)*e*t}function nm(e,t){return e*e*t}function Ar(e,t,i,n){return tm(e,t)+im(e,i)+nm(e,n)}function rm(e,t){const i=1-e;return i*i*i*t}function sm(e,t){const i=1-e;return 3*i*i*e*t}function am(e,t){return 3*(1-e)*e*e*t}function om(e,t){return e*e*e*t}function Er(e,t,i,n,r){return rm(e,t)+sm(e,i)+am(e,n)+om(e,r)}var Vo=class extends ui{constructor(e=new ee,t=new ee,i=new ee,n=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ee){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Er(e,n.x,r.x,s.x,a.x),Er(e,n.y,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Iu=class extends ui{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Er(e,n.x,r.x,s.x,a.x),Er(e,n.y,r.y,s.y,a.y),Er(e,n.z,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Go=class extends ui{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pu=class extends ui{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ko=class extends ui{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Ar(e,n.x,r.x,s.x),Ar(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends ui{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Ar(e,n.x,r.x,s.x),Ar(e,n.y,r.y,s.y),Ar(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),a=r-s,o=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set($l(a,o.x,l.x,c.x,h.x),$l(a,o.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ee().fromArray(n))}return this}},$s=Object.freeze({__proto__:null,ArcCurve:Cu,CatmullRomCurve3:Ru,CubicBezierCurve:Vo,CubicBezierCurve3:Iu,EllipseCurve:aa,LineCurve:Go,LineCurve3:Pu,QuadraticBezierCurve:ko,QuadraticBezierCurve3:Ho,SplineCurve:Wo}),Lu=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $s[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const s=n[r]-i,a=this.curves[r],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const s=r[n],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(a);for(let l=0;l<o.length;l++){const c=o[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new $s[n.type]().fromJSON(n))}return this}},Br=class extends Lu{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Go(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new ko(this.currentPoint.clone(),new ee(e,t),new ee(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){const a=new Vo(this.currentPoint.clone(),new ee(e,t),new ee(i,n),new ee(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Wo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,a,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,a,o),this}absellipse(e,t,i,n,r,s,a,o){const l=new aa(e,t,i,n,r,s,a,o);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qr=class extends Br{constructor(e){super(e),this.uuid=jt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Br().fromJSON(n))}return this}};function lm(e,t,i=2){const n=t&&t.length,r=n?t[0]*i:e.length;let s=Uu(e,0,r,i,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=fm(e,t,s,i)),e.length>80*i){o=e[0],l=e[1];let h=o,d=l;for(let u=i;u<r;u+=i){const f=e[u],g=e[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return zr(s,a,i,o,l,c,0),a}function Uu(e,t,i,n,r){let s;if(r===Tm(e,t,i,n)>0)for(let a=t;a<i;a+=n)s=Ql(a/n|0,e[a],e[a+1],s);else for(let a=i-n;a>=t;a-=n)s=Ql(a/n|0,e[a],e[a+1],s);return s&&jn(s,s.next)&&(Gr(s),s=s.next),s}function vn(e,t){if(!e)return e;t||(t=e);let i=e,n;do if(n=!1,!i.steiner&&(jn(i,i.next)||vt(i.prev,i,i.next)===0)){if(Gr(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function zr(e,t,i,n,r,s,a){if(!e)return;!a&&s&&_m(e,n,r,s);let o=e;for(;e.prev!==e.next;){const l=e.prev,c=e.next;if(s?hm(e,n,r,s):cm(e)){t.push(l.i,e.i,c.i),Gr(e),e=c.next,o=c.next;continue}if(e=c,e===o){a?a===1?(e=um(vn(e),t),zr(e,t,i,n,r,s,2)):a===2&&dm(e,t,i,n,r,s):zr(vn(e),t,i,n,r,s,1);break}}}function cm(e){const t=e.prev,i=e,n=e.next;if(vt(t,i,n)>=0)return!1;const r=t.x,s=i.x,a=n.x,o=t.y,l=i.y,c=n.y,h=Math.min(r,s,a),d=Math.min(o,l,c),u=Math.max(r,s,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Sr(r,o,s,l,a,c,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hm(e,t,i,n){const r=e.prev,s=e,a=e.next;if(vt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),_=Math.max(o,l,c),m=Math.max(h,d,u),p=oo(f,g,t,i,n),M=oo(_,m,t,i,n);let A=e.prevZ,v=e.nextZ;for(;A&&A.z>=p&&v&&v.z<=M;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==r&&A!==a&&Sr(o,h,l,d,c,u,A.x,A.y)&&vt(A.prev,A,A.next)>=0||(A=A.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Sr(o,h,l,d,c,u,v.x,v.y)&&vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==r&&A!==a&&Sr(o,h,l,d,c,u,A.x,A.y)&&vt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Sr(o,h,l,d,c,u,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function um(e,t){let i=e;do{const n=i.prev,r=i.next.next;!jn(n,r)&&Du(n,i,i.next,r)&&Vr(n,r)&&Vr(r,n)&&(t.push(n.i,i.i,r.i),Gr(i),Gr(i.next),i=e=r),i=i.next}while(i!==e);return vn(i)}function dm(e,t,i,n,r,s){let a=e;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Mm(a,o)){let l=Ou(a,o);a=vn(a,a.next),l=vn(l,l.next),zr(a,t,i,n,r,s,0),zr(l,t,i,n,r,s,0);return}o=o.next}a=a.next}while(a!==e)}function fm(e,t,i,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=Uu(e,t[s]*n,s<a-1?t[s+1]*n:e.length,n,!1);o===o.next&&(o.steiner=!0),r.push(xm(o))}r.sort(pm);for(let s=0;s<r.length;s++)i=mm(r[s],i);return i}function pm(e,t){let i=e.x-t.x;return i===0&&(i=e.y-t.y,i===0&&(i=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),i}function mm(e,t){const i=gm(e,t);if(!i)return t;const n=Ou(i,e);return vn(n,n.next),vn(i,i.next)}function gm(e,t){let i=t;const n=e.x,r=e.y;let s=-1/0,a;if(jn(e,i))return i;do{if(jn(e,i.next))return i.next;if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){const d=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=n&&d>s&&(s=d,a=i.x<i.next.x?i:i.next,d===n))return a}i=i.next}while(i!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;i=a;do{if(n>=i.x&&i.x>=l&&n!==i.x&&Nu(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){const d=Math.abs(r-i.y)/(n-i.x);Vr(i,e)&&(d<h||d===h&&(i.x>a.x||i.x===a.x&&vm(a,i)))&&(a=i,h=d)}i=i.next}while(i!==o);return a}function vm(e,t){return vt(e.prev,e,t.prev)<0&&vt(t.next,e,e.next)<0}function _m(e,t,i,n){let r=e;do r.z===0&&(r.z=oo(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,ym(r)}function ym(e){let t,i=1;do{let n=e,r;e=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<i&&(o++,a=a.nextZ,!!a);c++);let l=i;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=a}s.nextZ=null,i*=2}while(t>1);return e}function oo(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function xm(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Nu(e,t,i,n,r,s,a,o){return(r-a)*(t-o)>=(e-a)*(s-o)&&(e-a)*(n-o)>=(i-a)*(t-o)&&(i-a)*(s-o)>=(r-a)*(n-o)}function Sr(e,t,i,n,r,s,a,o){return!(e===a&&t===o)&&Nu(e,t,i,n,r,s,a,o)}function Mm(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Sm(e,t)&&(Vr(e,t)&&Vr(t,e)&&bm(e,t)&&(vt(e.prev,e,t.prev)||vt(e,t.prev,t))||jn(e,t)&&vt(e.prev,e,e.next)>0&&vt(t.prev,t,t.next)>0)}function vt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function jn(e,t){return e.x===t.x&&e.y===t.y}function Du(e,t,i,n){const r=Rs(vt(e,t,i)),s=Rs(vt(e,t,n)),a=Rs(vt(i,n,e)),o=Rs(vt(i,n,t));return!!(r!==s&&a!==o||r===0&&Cs(e,i,t)||s===0&&Cs(e,n,t)||a===0&&Cs(i,e,n)||o===0&&Cs(i,t,n))}function Cs(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Rs(e){return e>0?1:e<0?-1:0}function Sm(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Du(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Vr(e,t){return vt(e.prev,e,e.next)<0?vt(e,t,e.next)>=0&&vt(e,e.prev,t)>=0:vt(e,t,e.prev)<0||vt(e,e.next,t)<0}function bm(e,t){let i=e,n=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e);return n}function Ou(e,t){const i=lo(e.i,e.x,e.y),n=lo(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function Ql(e,t,i,n){const r=lo(e,t,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Gr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function lo(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tm(e,t,i,n){let r=0;for(let s=t,a=i-n;s<i;s+=n)r+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return r}var Am=class{static triangulate(e,t,i=2){return lm(e,t,i)}},Ci=class Fu{static area(t){const i=t.length;let n=0;for(let r=i-1,s=0;s<i;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Fu.area(t)<0}static triangulateShape(t,i){const n=[],r=[],s=[];jl(t),ec(n,t);let a=t.length;i.forEach(jl);for(let l=0;l<i.length;l++)r.push(a),a+=i[l].length,ec(n,i[l]);const o=Am.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function jl(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ec(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Bu=class zu extends Je{constructor(t=new qr([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Te(r,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals();function a(o){const l=[],c=i.curveSegments!==void 0?i.curveSegments:12,h=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1;let u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:f-.1,_=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3;const p=i.extrudePath,M=i.UVGenerator!==void 0?i.UVGenerator:Em;let A,v=!1,T,w,R,y;if(p){A=p.getSpacedPoints(h),v=!0,u=!1;const Q=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,Q),w=new C,R=new C,y=new C}u||(m=0,f=0,g=0,_=0);const b=o.extractPoints(c);let N=b.shape;const I=b.holes;if(!Ci.isClockWise(N)){N=N.reverse();for(let Q=0,$=I.length;Q<$;Q++){const le=I[Q];Ci.isClockWise(le)&&(I[Q]=le.reverse())}}function D(Q){const le=10000000000000001e-36;let _e=Q[0];for(let ye=1;ye<=Q.length;ye++){const Le=ye%Q.length,De=Q[Le],We=De.x-_e.x,qe=De.y-_e.y,P=We*We+qe*qe,mt=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(_e.x),Math.abs(_e.y));if(P<=le*mt*mt){Q.splice(Le,1),ye--;continue}_e=De}}D(N),I.forEach(D);const X=I.length,L=N;for(let Q=0;Q<X;Q++){const $=I[Q];N=N.concat($)}function V(Q,$,le){return $||Ie("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector($,le)}const J=N.length;function k(Q,$,le){let _e,ye,Le;const De=Q.x-$.x,We=Q.y-$.y,qe=le.x-Q.x,P=le.y-Q.y,mt=De*De+We*We,it=De*P-We*qe;if(Math.abs(it)>Number.EPSILON){const et=Math.sqrt(mt),E=Math.sqrt(qe*qe+P*P),x=$.x-We/et,U=$.y+De/et,H=le.x-P/E,te=le.y+qe/E,oe=((H-x)*P-(te-U)*qe)/(De*P-We*qe);_e=x+De*oe-Q.x,ye=U+We*oe-Q.y;const pe=_e*_e+ye*ye;if(pe<=2)return new ee(_e,ye);Le=Math.sqrt(pe/2)}else{let et=!1;De>Number.EPSILON?qe>Number.EPSILON&&(et=!0):De<-Number.EPSILON?qe<-Number.EPSILON&&(et=!0):Math.sign(We)===Math.sign(P)&&(et=!0),et?(_e=-We,ye=De,Le=Math.sqrt(mt)):(_e=De,ye=We,Le=Math.sqrt(mt/2))}return new ee(_e/Le,ye/Le)}const he=[];for(let Q=0,$=L.length,le=$-1,_e=Q+1;Q<$;Q++,le++,_e++)le===$&&(le=0),_e===$&&(_e=0),he[Q]=k(L[Q],L[le],L[_e]);const q=[];let Z,j=he.concat();for(let Q=0,$=X;Q<$;Q++){const le=I[Q];Z=[];for(let _e=0,ye=le.length,Le=ye-1,De=_e+1;_e<ye;_e++,Le++,De++)Le===ye&&(Le=0),De===ye&&(De=0),Z[_e]=k(le[_e],le[Le],le[De]);q.push(Z),j=j.concat(Z)}let Ge;if(m===0)Ge=Ci.triangulateShape(L,I);else{const Q=[],$=[];for(let le=0;le<m;le++){const _e=le/m,ye=f*Math.cos(_e*Math.PI/2),Le=g*Math.sin(_e*Math.PI/2)+_;for(let De=0,We=L.length;De<We;De++){const qe=V(L[De],he[De],Le);ae(qe.x,qe.y,-ye),_e===0&&Q.push(qe)}for(let De=0,We=X;De<We;De++){const qe=I[De];Z=q[De];const P=[];for(let mt=0,it=qe.length;mt<it;mt++){const et=V(qe[mt],Z[mt],Le);ae(et.x,et.y,-ye),_e===0&&P.push(et)}_e===0&&$.push(P)}}Ge=Ci.triangulateShape(Q,$)}const Pe=Ge.length,lt=g+_;for(let Q=0;Q<J;Q++){const $=u?V(N[Q],j[Q],lt):N[Q];v?(R.copy(T.normals[0]).multiplyScalar($.x),w.copy(T.binormals[0]).multiplyScalar($.y),y.copy(A[0]).add(R).add(w),ae(y.x,y.y,y.z)):ae($.x,$.y,0)}for(let Q=1;Q<=h;Q++)for(let $=0;$<J;$++){const le=u?V(N[$],j[$],lt):N[$];v?(R.copy(T.normals[Q]).multiplyScalar(le.x),w.copy(T.binormals[Q]).multiplyScalar(le.y),y.copy(A[Q]).add(R).add(w),ae(y.x,y.y,y.z)):ae(le.x,le.y,d/h*Q)}for(let Q=m-1;Q>=0;Q--){const $=Q/m,le=f*Math.cos($*Math.PI/2),_e=g*Math.sin($*Math.PI/2)+_;for(let ye=0,Le=L.length;ye<Le;ye++){const De=V(L[ye],he[ye],_e);ae(De.x,De.y,d+le)}for(let ye=0,Le=I.length;ye<Le;ye++){const De=I[ye];Z=q[ye];for(let We=0,qe=De.length;We<qe;We++){const P=V(De[We],Z[We],_e);v?ae(P.x,P.y+A[h-1].y,A[h-1].x+le):ae(P.x,P.y,d+le)}}}Xe(),Y();function Xe(){const Q=r.length/3;if(u){let $=0,le=J*$;for(let _e=0;_e<Pe;_e++){const ye=Ge[_e];Ue(ye[2]+le,ye[1]+le,ye[0]+le)}$=h+m*2,le=J*$;for(let _e=0;_e<Pe;_e++){const ye=Ge[_e];Ue(ye[0]+le,ye[1]+le,ye[2]+le)}}else{for(let $=0;$<Pe;$++){const le=Ge[$];Ue(le[2],le[1],le[0])}for(let $=0;$<Pe;$++){const le=Ge[$];Ue(le[0]+J*h,le[1]+J*h,le[2]+J*h)}}n.addGroup(Q,r.length/3-Q,0)}function Y(){const Q=r.length/3;let $=0;re(L,$),$+=L.length;for(let le=0,_e=I.length;le<_e;le++){const ye=I[le];re(ye,$),$+=ye.length}n.addGroup(Q,r.length/3-Q,1)}function re(Q,$){let le=Q.length;for(;--le>=0;){const _e=le;let ye=le-1;ye<0&&(ye=Q.length-1);for(let Le=0,De=h+m*2;Le<De;Le++){const We=J*Le,qe=J*(Le+1);Fe($+_e+We,$+ye+We,$+ye+qe,$+_e+qe)}}}function ae(Q,$,le){l.push(Q),l.push($),l.push(le)}function Ue(Q,$,le){de(Q),de($),de(le);const _e=r.length/3,ye=M.generateTopUV(n,r,_e-3,_e-2,_e-1);$e(ye[0]),$e(ye[1]),$e(ye[2])}function Fe(Q,$,le,_e){de(Q),de($),de(_e),de($),de(le),de(_e);const ye=r.length/3,Le=M.generateSideWallUV(n,r,ye-6,ye-3,ye-2,ye-1);$e(Le[0]),$e(Le[1]),$e(Le[3]),$e(Le[1]),$e(Le[2]),$e(Le[3])}function de(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function $e(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,n=this.parameters.options;return wm(i,n,t)}static fromJSON(t,i){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=i[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new $s[r.type]().fromJSON(r)),new zu(n,t.options)}},Em={generateTopUV:function(e,t,i,n,r){const s=t[i*3],a=t[i*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new ee(s,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){const a=t[i*3],o=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[r*3],f=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-d),new ee(u,1-g),new ee(_,1-p)]:[new ee(o,1-l),new ee(h,1-d),new ee(f,1-g),new ee(m,1-p)]}};function wm(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){const s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Vu=class Gu extends nr{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Gu(t.radius,t.detail)}},ku=class Hu extends Je{constructor(t=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],i=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:n,phiLength:r},i=Math.floor(i),r=Ve(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/i,d=new C,u=new ee,f=new C,g=new C,_=new C;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=i;M++){const A=n+M*h*r,v=Math.sin(A),T=Math.cos(A);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*v,d.y=t[w].y,d.z=t[w].x*T,a.push(d.x,d.y,d.z),u.x=M/i,u.y=w/(t.length-1),o.push(u.x,u.y);const R=l[3*w+0]*v,y=l[3*w+1],b=l[3*w+0]*T;c.push(R,y,b)}}for(let M=0;M<i;M++)for(let A=0;A<t.length-1;A++){const v=A+M*t.length,T=v,w=v+t.length,R=v+t.length+1,y=v+1;s.push(T,w,y),s.push(R,y,w)}this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hu(t.points,t.segments,t.phiStart,t.phiLength)}},Xo=class Wu extends nr{constructor(t=1,i=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Wu(t.radius,t.detail)}},oa=class Xu extends Je{constructor(t=1,i=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:r};const s=t/2,a=i/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=t/o,u=i/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let A=0;A<c;A++){const v=A*d-s;g.push(v,-M,0),_.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const A=M+c*p,v=M+c*(p+1),T=M+1+c*(p+1),w=M+1+c*p;f.push(A,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xu(t.width,t.height,t.widthSegments,t.heightSegments)}},qu=class Yu extends Je{constructor(t=.5,i=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let d=t;const u=(i-t)/r,f=new C,g=new ee;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/i+1)/2,g.y=(f.y/i+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,A=M,v=M+n+1,T=M+n+2,w=M+1;o.push(A,v,w),o.push(v,T,w)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Zu=class Ju extends Je{constructor(t=new qr([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(a,2));function c(h){const d=r.length/3,u=h.extractPoints(i);let f=u.shape;const g=u.holes;Ci.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Ci.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Ci.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){const M=f[m];r.push(M.x,M.y,0),s.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],A=M[0]+d,v=M[1]+d,T=M[2]+d;n.push(A,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return Cm(i,t)}static fromJSON(t,i){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=i[t.shapes[r]];n.push(a)}return new Ju(n,t.curveSegments)}};function Cm(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){const r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var qo=class Ku extends Je{constructor(t=1,i=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],A=p/n,v=a+A*o,T=t*Math.cos(v),w=Math.sqrt(t*t-T*T);let R=0;p===0&&a===0?R=.5/i:p===n&&l===Math.PI&&(R=-.5/i);for(let y=0;y<=i;y++){const b=y/i,N=r+b*s;d.x=-w*Math.cos(N),d.y=T,d.z=w*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(b+R,1-A),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<i;M++){const A=h[p][M+1],v=h[p][M],T=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(A,v,w),(p!==n-1||l<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},$u=class Qu extends nr{constructor(t=1,i=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Qu(t.radius,t.detail)}},ju=class ed extends Je{constructor(t=1,i=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let p=0;p<=r;p++){const M=p/r*s;f.x=(t+i*Math.cos(m))*Math.cos(M),f.y=(t+i*Math.cos(m))*Math.sin(M),f.z=i*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/r),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=r;m++){const p=(r+1)*_+m-1,M=(r+1)*(_-1)+m-1,A=(r+1)*(_-1)+m,v=(r+1)*_+m;l.push(p,M,v),l.push(M,A,v)}this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ed(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},td=class id extends Je{constructor(t=1,i=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],h=[],d=new C,u=new C,f=new C,g=new C,_=new C,m=new C,p=new C;for(let A=0;A<=n;++A){const v=A/n*s*Math.PI*2;M(v,s,a,t,f),M(v+.01,s,a,t,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let T=0;T<=r;++T){const w=T/r*Math.PI*2,R=-i*Math.cos(w),y=i*Math.sin(w);d.x=f.x+(R*p.x+y*_.x),d.y=f.y+(R*p.y+y*_.y),d.z=f.z+(R*p.z+y*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(A/n),h.push(T/r)}}for(let A=1;A<=n;A++)for(let v=1;v<=r;v++){const T=(r+1)*(A-1)+(v-1),w=(r+1)*A+(v-1),R=(r+1)*A+v,y=(r+1)*(A-1)+v;o.push(T,w,y),o.push(w,R,y)}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2));function M(A,v,T,w,R){const y=Math.cos(A),b=Math.sin(A),N=T/v*A,I=Math.cos(N);R.x=w*(2+I)*.5*y,R.y=w*(2+I)*b*.5,R.z=w*Math.sin(N)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new id(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},nd=class rd extends Je{constructor(t=new Ho(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),i=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(i,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new ee;let h=new C;const d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function _(){for(let A=0;A<i;A++)m(A);m(s===!1?i:0),M(),p()}function m(A){h=t.getPointAt(A/i,h);const v=a.normals[A],T=a.binormals[A];for(let w=0;w<=r;w++){const R=w/r*Math.PI*2,y=Math.sin(R),b=-Math.cos(R);l.x=b*v.x+y*T.x,l.y=b*v.y+y*T.y,l.z=b*v.z+y*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=i;A++)for(let v=1;v<=r;v++){const T=(r+1)*(A-1)+(v-1),w=(r+1)*A+(v-1),R=(r+1)*A+v,y=(r+1)*(A-1)+v;g.push(T,w,y),g.push(w,R,y)}}function M(){for(let A=0;A<=i;A++)for(let v=0;v<=r;v++)c.x=A/i,c.y=v/r,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new rd(new $s[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},sd=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new C,r=new C;if(e.index!==null){const s=e.attributes.position,a=e.index;let o=e.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,c=o.length;l<c;++l){const h=o[l],d=h.start,u=h.count;for(let f=d,g=d+u;f<g;f+=3)for(let _=0;_<3;_++){const m=a.getX(f+_),p=a.getX(f+(_+1)%3);n.fromBufferAttribute(s,m),r.fromBufferAttribute(s,p),tc(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){const c=3*a+l,h=3*a+(l+1)%3;n.fromBufferAttribute(s,c),r.fromBufferAttribute(s,h),tc(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function tc(e,t,i){const n=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(n)===!0||i.has(r)===!0?!1:(i.add(n),i.add(r),!0)}var ic=Object.freeze({__proto__:null,BoxGeometry:Xr,CapsuleGeometry:_u,CircleGeometry:xu,ConeGeometry:Bo,CylinderGeometry:Fo,DodecahedronGeometry:Au,EdgesGeometry:wu,ExtrudeGeometry:Bu,IcosahedronGeometry:Vu,LatheGeometry:ku,OctahedronGeometry:Xo,PlaneGeometry:oa,PolyhedronGeometry:nr,RingGeometry:qu,ShapeGeometry:Zu,SphereGeometry:qo,TetrahedronGeometry:$u,TorusGeometry:ju,TorusKnotGeometry:td,TubeGeometry:nd,WireframeGeometry:sd}),ad=class extends Ut{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function er(e){const t={};for(const i in e){t[i]={};for(const n in e[i]){const r=e[i][n];if(nc(r))r.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=r.clone();else if(Array.isArray(r))if(nc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function Vt(e){const t={};for(let i=0;i<e.length;i++){const n=er(e[i]);for(const r in n)t[r]=n[r]}return t}function nc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Rm(e){const t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function od(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:je.workingColorSpace}var ld={clone:er,merge:Vt},Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends Ut{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new xe().setHex(n.value);break;case"v2":this.uniforms[i].value=new ee().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(n.value);break;case"m4":this.uniforms[i].value=new He().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Yo=class extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zo=class extends Ut{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cd=class extends Zo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},hd=class extends Ut{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ud=class extends Ut{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dd=class extends Ut{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},fd=class extends Ut{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jo=class extends Ut{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ko=class extends Ut{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pd=class extends Ut{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},md=class extends Ht{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function li(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function wr(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function gd(e){function t(r,s){return e[r]-e[s]}const i=e.length,n=new Array(i);for(let r=0;r!==i;++r)n[r]=r;return n.sort(t),n}function co(e,t,i){const n=e.length,r=new e.constructor(n);for(let s=0,a=0;a!==n;++s){const o=i[s]*t;for(let l=0;l!==t;++l)r[a++]=e[o+l]}return r}function vd(e,t,i,n){let r=1,s=e[0];for(;s!==void 0&&s[n]===void 0;)s=e[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),i.push(...a)),s=e[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(i,i.length)),s=e[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),i.push(a)),s=e[r++];while(s!==void 0)}function Lm(e,t,i,n,r=30){const s=e.clone();s.name=t;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*r;if(!(g<i||g>=n)){d.push(c.times[f]);for(let _=0;_<h;++_)u.push(c.values[f*h+_])}}d.length!==0&&(c.times=li(d,c.times.constructor),c.values=li(u,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function Um(e,t=0,i=e,n=30){n<=0&&(n=30);const r=i.tracks.length,s=t/n;for(let a=0;a<r;++a){const o=i.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=e.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const g=o.times.length-1;let _;if(s<=o.times[0]){const p=h,M=d-h;_=o.values.slice(p,M)}else if(s>=o.times[g]){const p=g*d+h,M=p+d-h;_=o.values.slice(p,M)}else{const p=o.createInterpolant(),M=h,A=d-h;p.evaluate(s),_=p.resultBuffer.slice(M,A)}l==="quaternion"&&new kt().fromArray(_).normalize().conjugate().toArray(_);const m=c.times.length;for(let p=0;p<m;++p){const M=p*f+u;if(l==="quaternion")kt.multiplyQuaternionsFlat(c.values,M,_,0,c.values,M);else{const A=f-u*2;for(let v=0;v<A;++v)c.values[M+v]-=_[v]}}}return e.blendMode=Co,e}var Nm=class{static convertArray(e,t){return li(e,t)}static isTypedArray(e){return Vh(e)}static hasTangents(e){return wr(e)}static getKeyframeOrder(e){return gd(e)}static sortedArray(e,t,i){return co(e,t,i)}static flattenJSON(e,t,i,n){vd(e,t,i,n)}static subclip(e,t,i,n,r=30){return Lm(e,t,i,n,r)}static makeClipAdditive(e,t=0,i=e,n=30){return Um(e,t,i,n)}},rr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}s=t.length;break i}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=t[--i-1],e>=r)break t}s=i,i=0;break i}break e}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_d=class extends rr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fn,endingEnd:fn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,a=n[r],o=n[s];if(a===void 0)switch(this.getSettings_().endingStart){case pn:r=e,a=2*t-i;break;case Lr:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case pn:s=e,o=2*i-t;break;case Lr:s=1,o=i+n[1]-n[0];break;default:s=e-1,o=t}const l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(i-t)/(n-t),g=f*f,_=g*f,m=-d*_+2*d*g-d*f,p=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*f+1,M=(-1-u)*_+(1.5+u)*g+.5*f,A=u*_-u*g;for(let v=0;v!==a;++v)r[v]=m*s[c+v]+p*s[l+v]+M*s[o+v]+A*s[h+v];return r}},$o=class extends rr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(i-t)/(n-t),h=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*h+s[o+d]*c;return r}},yd=class extends rr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},xd=class extends rr{interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){const f=(i-t)/(n-t),g=1-f;for(let _=0;_!==a;++_)r[_]=s[l+_]*g+s[o+_]*f;return r}const d=a*2,u=e-1;for(let f=0;f!==a;++f){const g=s[l+f],_=s[o+f],m=u*d+f*2,p=h[m],M=h[m+1],A=e*d+f*2,v=c[A],T=c[A+1],w=Om(i,t,p,v,n);r[f]=Md(w,g,M,T,_)}return r}};function Md(e,t,i,n,r){const s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function Dm(e,t,i,n,r){const s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function Om(e,t,i,n,r){let s=(e-t)/(r-t);for(let a=0;a<8;a++){const o=Md(s,t,i,n,r)-e;if(Math.abs(o)<1e-10)break;const l=Dm(s,t,i,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ri=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=li(t,this.TimeBufferType),this.values=li(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:li(e.times,Array),values:li(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),wr(e.settings)&&(i.settings={inTangents:li(e.settings.inTangents,Array),outTangents:li(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _d(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new xd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case Gs:t=this.InterpolantFactoryMethodSmooth;break;case ro:t=this.InterpolantFactoryMethodBezier}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return Gs;case this.InterpolantFactoryMethodBezier:return ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;wr(this.settings)&&(rc(this.settings.inTangents,e),rc(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=i[a];if(typeof o=="number"&&isNaN(o)){Ie("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){Ie("KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(n!==void 0&&Vh(n))for(let a=0,o=n.length;a!==o;++a){const l=n[a];if(isNaN(l)){Ie("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Gs,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=e[a];if(l!==e[a+1]&&(a!==1||l!==e[0]))if(n)o=!0;else{const c=a*i,h=c-i,d=c+i;for(let u=0;u!==i;++u){const f=t[c+u];if(f!==t[h+u]||f!==t[d+u]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const c=a*i,h=s*i;for(let d=0;d!==i;++d)t[h+d]=t[c+d]}++s}}if(r>0){e[s]=e[r];for(let a=r*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,wr(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function rc(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Ys;var _n=class extends ri{constructor(e,t,i){super(e,t,i)}};_n.prototype.ValueTypeName="bool";_n.prototype.ValueBufferType=Array;_n.prototype.DefaultInterpolation=Pr;_n.prototype.InterpolantFactoryMethodLinear=void 0;_n.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends ri{constructor(e,t,i,n){super(e,t,i,n)}};Qo.prototype.ValueTypeName="color";var la=class extends ri{constructor(e,t,i,n){super(e,t,i,n)}};la.prototype.ValueTypeName="number";var Sd=class extends rr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t);let l=e*a;for(let c=l+a;l!==c;l+=4)kt.slerpFlat(r,0,s,l-a,s,l,o);return r}},ca=class extends ri{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var yn=class extends ri{constructor(e,t,i){super(e,t,i)}};yn.prototype.ValueTypeName="string";yn.prototype.ValueBufferType=Array;yn.prototype.DefaultInterpolation=Pr;yn.prototype.InterpolantFactoryMethodLinear=void 0;yn.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends ri{constructor(e,t,i,n){super(e,t,i,n)}};jo.prototype.ValueTypeName="vector";var kr=class{constructor(e="",t=-1,i=[],n=js){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=jt(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(Bm(i[s]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(ri.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,s=[];for(let a=0;a<r;a++){let o=[],l=[];o.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const c=gd(o);o=co(o,1,c),l=co(l,1,c),!n&&o[0]===0&&(o.push(r),l.push(l[0])),s.push(new la(".morphTargetInfluences["+t[a].name+"]",o,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.name.match(r);if(c&&c.length>1){const h=c[1];let d=n[h];d||(n[h]=d=[]),d.push(l)}}const s=[];for(const a in n)s.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return s}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Fm(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return la;case"vector":case"vector2":case"vector3":case"vector4":return jo;case"color":return Qo;case"quaternion":return ca;case"bool":case"boolean":return _n;case"string":return yn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Bm(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Fm(e.type);if(e.times===void 0){const n=[],r=[];vd(e.keys,n,r,"value"),e.times=n,e.values=r}let i;return t.parse!==void 0?i=t.parse(e):i=new t(e.name,e.times,e.values,e.interpolation),wr(e.settings)&&(i.settings={inTangents:li(e.settings.inTangents,Float32Array),outTangents:li(e.settings.outTangents,Float32Array)}),i}var gi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(sc(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!sc(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function sc(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var el=class{constructor(e,t,i){const n=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&n.onStart!==void 0&&n.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,n.onProgress!==void 0&&n.onProgress(c,s,a),s===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){const u=l[h],f=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new el,Zt=class{constructor(e){this.manager=e!==void 0?e:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ti={},zm=class extends Error{constructor(e,t){super(e),this.response=t}},Fi=class extends Zt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=gi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:i,onError:n});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=Ti[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,f=u!==0;let g=0;const _=new ReadableStream({start(m){p();function p(){h.read().then(({done:M,value:A})=>{if(M)m.close();else{g+=A.byteLength;const v=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:u});for(let T=0,w=c.length;T<w;T++){const R=c[T];R.onProgress&&R.onProgress(v)}m.enqueue(A),p()}},M=>{m.error(M)})}}});return new Response(_)}else throw new zm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),h=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(u=>d.decode(u))}}}).then(l=>{gi.add(`file:${e}`,l);const c=Ti[e];delete Ti[e];for(let h=0,d=c.length;h<d;h++){const u=c[h];u.onLoad&&u.onLoad(l)}}).catch(l=>{const c=Ti[e];if(c===void 0)throw this.manager.itemError(e),l;delete Ti[e];for(let h=0,d=c.length;h<d;h++){const u=c[h];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Vm=class extends Zt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Fi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):Ie(o),r.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=kr.parse(e[i]);t.push(n)}return t}},Gm=class extends Zt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=[],a=new sa,o=new Fi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let l=0;function c(h){o.load(e[h],function(d){const u=r.parse(d,!0);s[h]={width:u.width,height:u.height,format:u.format,mipmaps:u.mipmaps},l+=1,l===6&&(u.mipmapCount===1&&(a.minFilter=yt),a.image=s,a.format=u.format,a.needsUpdate=!0,t&&t(a))},i,n)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)c(h);else o.load(e,function(h){const d=r.parse(h,!0);if(d.isCubemap){const u=d.mipmaps.length/d.mipmapCount;for(let f=0;f<u;f++){s[f]={mipmaps:[]};for(let g=0;g<d.mipmapCount;g++)s[f].mipmaps.push(d.mipmaps[f*d.mipmapCount+g]),s[f].format=d.format,s[f].width=d.width,s[f].height=d.height}a.image=s}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=yt),a.format=d.format,a.needsUpdate=!0,t&&t(a)},i,n);return a}},Fn=new WeakMap,Hr=class extends Zt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=gi.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=Fn.get(s);h===void 0&&(h=[],Fn.set(s,h)),h.push({onLoad:t,onError:n})}return s}const a=Dr("img");function o(){c(),t&&t(this);const h=Fn.get(this)||[];for(let d=0;d<h.length;d++){const u=h[d];u.onLoad&&u.onLoad(this)}Fn.delete(this),r.manager.itemEnd(e)}function l(h){c(),n&&n(h),gi.remove(`image:${e}`);const d=Fn.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onError&&f.onError(h)}Fn.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},km=class extends Zt{constructor(e){super(e)}load(e,t,i,n){const r=new Wr;r.colorSpace=Qt;const s=new Hr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(l){s.load(e[l],function(c){r.images[l]=c,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let l=0;l<e.length;++l)o(l);return r}},Hm=class extends Zt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new ii,a=new Fi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(o){let l;try{l=r.parse(o)}catch(c){n!==void 0?n(c):Ie(c);return}r._applyTexData(s,l),t&&t(s,l)},i,n),s}createDataTexture(e){const t=new ii;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:qt,e.wrapT=t.wrapT!==void 0?t.wrapT:qt,e.magFilter=t.magFilter!==void 0?t.magFilter:yt,e.minFilter=t.minFilter!==void 0?t.minFilter:yt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=tr),t.mipmapCount===1&&(e.minFilter=yt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Wm=class extends Zt{constructor(e){super(e)}load(e,t,i,n){const r=new Rt,s=new Hr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},$i=class extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Td=class extends $i{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xa=new He,ac=new C,oc=new C,ha=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gn,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(ac),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=n?n.z/r.x:1,a=n?n.w/r.y:1,o=n?n.x/r.x:0,l=n?n.y/r.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Is=new C,Ps=new kt,pi=new C,ua=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Is,Ps,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Is,Ps,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Is,Ps,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Is,Ps,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new C,lc=new ee,cc=new ee,Pt=class extends ua{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kn*2*Math.atan(Math.tan(mn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,lc,cc),t.subVectors(cc,lc)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*n/o,t-=s.offsetY*i/l,n*=s.width/o,i*=s.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xm=class extends ha{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Kn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ad=class extends $i{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Xm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qm=class extends ha{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0}},Ed=class extends $i{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new qm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yr=class extends ua{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ym=class extends ha{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wd=class extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Ym}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Cd=class extends $i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Rd=class extends $i{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},tl=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*n),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*n)),t.addScaledVector(s[5],1.092548*(n*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(i*r)),t.addScaledVector(s[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],1.023328*n),t.addScaledVector(s[2],1.023328*r),t.addScaledVector(s[3],1.023328*i),t.addScaledVector(s[4],.858086*i*n),t.addScaledVector(s[5],.858086*n*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],.858086*i*r),t.addScaledVector(s[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}},Id=class extends $i{constructor(e=new tl,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},hc={},Pd=class Ld extends Zt{constructor(t){super(t),this.textures={}}load(t,i,n,r){const s=this,a=new Fi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{i(s.parse(JSON.parse(o)))}catch(l){r?r(l):Ie(l),s.manager.itemError(t)}},n,r)}parse(t){const i=this.createMaterialFromType(t.type);return i.fromJSON(t,this.textures),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return Ld.createMaterialFromType(t)}static createMaterialFromType(t){const i={ShadowMaterial:ad,SpriteMaterial:Uo,RawShaderMaterial:Yo,ShaderMaterial:ni,PointsMaterial:Do,MeshPhysicalMaterial:cd,MeshStandardMaterial:Zo,MeshPhongMaterial:hd,MeshToonMaterial:ud,MeshNormalMaterial:dd,MeshLambertMaterial:fd,MeshDepthMaterial:Jo,MeshDistanceMaterial:Ko,MeshBasicMaterial:Ki,MeshMatcapMaterial:pd,LineDashedMaterial:md,LineBasicMaterial:Ht,Material:Ut,...hc}[t];let n;return i===void 0?(Ii(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),n=new Ut):n=new i,n}static registerMaterial(t,i){hc[t]=i}},ho=class{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ud=class extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Nd=class extends Zt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Fi(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):Ie(o),r.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(d,u){if(t[u]!==void 0)return t[u];const f=d.interleavedBuffers[u],g=r(d,f.buffer),_=Xn(f.type,g),m=new ra(_,f.stride);return m.uuid=f.uuid,f.usage!==void 0&&m.setUsage(f.usage),t[u]=m,m}function r(d,u){if(i[u]!==void 0)return i[u];const f=d.arrayBuffers[u],g=new Uint32Array(f).buffer;return i[u]=g,g}const s=e.isInstancedBufferGeometry?new Ud:new Je,a=e.data.index;if(a!==void 0){const d=Xn(a.type,a.array);s.setIndex(new pt(d,1))}const o=e.data.attributes;for(const d in o){const u=o[d];let f;if(u.isInterleavedBufferAttribute){const g=n(e.data,u.data);f=new Fr(g,u.itemSize,u.offset,u.normalized)}else{const g=Xn(u.type,u.array);f=new(u.isInstancedBufferAttribute?$n:pt)(g,u.itemSize,u.normalized)}u.name!==void 0&&(f.name=u.name),u.usage!==void 0&&f.setUsage(u.usage),u.gpuType!==void 0&&(f.gpuType=u.gpuType),s.setAttribute(d,f)}const l=e.data.morphAttributes;if(l)for(const d in l){const u=l[d],f=[];for(let g=0,_=u.length;g<_;g++){const m=u[g];let p;if(m.isInterleavedBufferAttribute){const M=n(e.data,m.data);p=new Fr(M,m.itemSize,m.offset,m.normalized)}else{const M=Xn(m.type,m.array);p=new pt(M,m.itemSize,m.normalized)}m.name!==void 0&&(p.name=m.name),m.usage!==void 0&&p.setUsage(m.usage),m.gpuType!==void 0&&(p.gpuType=m.gpuType),f.push(p)}s.morphAttributes[d]=f}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let d=0,u=c.length;d!==u;++d){const f=c[d];s.addGroup(f.start,f.count,f.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(s.boundingSphere=new Lt().fromJSON(h)),e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}},qa={},Zm=class extends Zt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=this.path===""?ho.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const a=new Fi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){let l=null;try{l=JSON.parse(o)}catch(h){n!==void 0&&n(h),Ie("ObjectLoader: Can't parse "+e+".",h.message);return}const c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),Ie("ObjectLoader: Can't load "+e);return}r.parse(l,t)},i,n)}async loadAsync(e,t){const i=this,n=this.path===""?ho.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const r=new Fi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const s=await r.loadAsync(e,t);let a;try{a=JSON.parse(s)}catch(l){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+l.message)}const o=a.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(a)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,o,a,i),c=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,c),this.bindLightTargets(l),t!==void 0){let h=!1;for(const d in s)if(s[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,s),o=this.parseObject(e.object,n,a,s,t),l=this.parseSkeletons(e.skeletons,o);return this.bindSkeletons(o,l),this.bindLightTargets(o),o}static registerGeometry(e,t){qa[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const r=new qr().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=new ou().fromJSON(e[r],n);i[a.uuid]=a}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new Nd;for(let r=0,s=e.length;r<s;r++){let a;const o=e[r];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=n.parse(o);break;default:o.type in ic?a=ic[o.type].fromJSON(o,t):o.type in qa?a=qa[o.type].fromJSON(o,t):fe(`ObjectLoader: Unknown geometry type "${o.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),o.userData!==void 0&&(a.userData=o.userData),i[o.uuid]=a}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const r=new Pd;r.setTextures(t);for(let s=0,a=e.length;s<a;s++){const o=e[s];i[o.uuid]===void 0&&(i[o.uuid]=r.parse(o)),n[o.uuid]=i[o.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],r=kr.parse(n);t[r.uuid]=r}return t}parseImages(e,t){const i=this,n={};let r;function s(o){return o=i.manager.resolveURL(o),i.manager.itemStart(o),r.load(o,function(){i.manager.itemEnd(o)},void 0,function(){i.manager.itemError(o),i.manager.itemEnd(o)})}function a(o){if(typeof o=="string"){const l=o;return s(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l)}else return o.data?{data:Xn(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){const o=new el(t);r=new Hr(o),r.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){const h=e[l],d=h.url;if(Array.isArray(d)){const u=[];for(let f=0,g=d.length;f<g;f++){const _=d[f],m=a(_);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new ii(m.data,m.width,m.height)))}n[h.uuid]=new wi(u)}else{const u=a(h.url);n[h.uuid]=new wi(u)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function r(s){if(typeof s=="string"){const a=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await n.loadAsync(o)}else return s.data?{data:Xn(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){n=new Hr(this.manager),n.setCrossOrigin(this.crossOrigin);for(let s=0,a=e.length;s<a;s++){const o=e[s],l=o.url;if(Array.isArray(l)){const c=[];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=await r(u);f!==null&&(f instanceof HTMLImageElement?c.push(f):c.push(new ii(f.data,f.width,f.height)))}i[o.uuid]=new wi(c)}else{const c=await r(o.url);i[o.uuid]=new wi(c)}}}return i}parseTextures(e,t){function i(r,s){return typeof r=="number"?r:(fe("ObjectLoader.parseTexture: Constant should be in numeric form.",r),s[r])}const n={};if(e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=e[r];a.image===void 0&&fe('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&fe("ObjectLoader: Undefined image",a.image);const o=t[a.image],l=o.data;let c;Array.isArray(l)?(c=new Wr,l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new ii:c=new Rt,l&&(c.needsUpdate=!0)),c.source=o,c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,Jm)),a.channel!==void 0&&(c.channel=a.channel),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],uc),c.wrapT=i(a.wrap[1],uc)),a.format!==void 0&&(c.format=a.format),a.internalFormat!==void 0&&(c.internalFormat=a.internalFormat),a.type!==void 0&&(c.type=a.type),a.colorSpace!==void 0&&(c.colorSpace=a.colorSpace),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,dc)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,dc)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.generateMipmaps!==void 0&&(c.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(c.compareFunction=a.compareFunction),a.normalized!==void 0&&(c.normalized=a.normalized),a.userData!==void 0&&(c.userData=a.userData),n[a.uuid]=c}return n}parseObject(e,t,i,n,r){let s;function a(d){return t[d]===void 0&&fe("ObjectLoader: Undefined geometry",d),t[d]}function o(d){if(d!==void 0){if(Array.isArray(d)){const u=[];for(let f=0,g=d.length;f<g;f++){const _=d[f];i[_]===void 0&&fe("ObjectLoader: Undefined material",_),u.push(i[_])}return u}return i[d]===void 0&&fe("ObjectLoader: Undefined material",d),i[d]}}function l(d){return n[d]===void 0&&fe("ObjectLoader: Undefined texture",d),n[d]}let c,h;switch(e.type){case"Scene":s=new eu,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new xe(e.background):s.background=l(e.background)),e.environment!==void 0&&(s.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Qh(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new Kh(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&s.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(s.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&s.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":s=new Pt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new Yr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new Cd(e.color,e.intensity);break;case"DirectionalLight":s=new wd(e.color,e.intensity),s.target=e.target||"";break;case"PointLight":s=new Ed(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new Rd(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new Ad(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),s.target=e.target||"";break;case"HemisphereLight":s=new Td(e.color,e.groundColor,e.intensity);break;case"LightProbe":const d=new tl().fromArray(e.sh);s=new Id(d,e.intensity);break;case"SkinnedMesh":c=a(e.geometry),h=o(e.material),s=new au(c,h),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":c=a(e.geometry),h=o(e.material),s=new Tt(c,h);break;case"InstancedMesh":c=a(e.geometry),h=o(e.material);const u=e.count,f=e.instanceMatrix,g=e.instanceColor;s=new cu(c,h,u),s.instanceMatrix=new $n(new Float32Array(f.array),16),g!==void 0&&(s.instanceColor=new $n(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":c=a(e.geometry),h=o(e.material),s=new du(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),s.geometry=c,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._geometryInfo=e.geometryInfo.map(_=>{let m=null,p=null;return _.boundingBox!==void 0&&(m=new Bt().fromJSON(_.boundingBox)),_.boundingSphere!==void 0&&(p=new Lt().fromJSON(_.boundingSphere)),{..._,boundingBox:m,boundingSphere:p}}),s._instanceInfo=e.instanceInfo,s._availableInstanceIds=e._availableInstanceIds,s._availableGeometryIds=e._availableGeometryIds,s._nextIndexStart=e.nextIndexStart,s._nextVertexStart=e.nextVertexStart,s._geometryCount=e.geometryCount,s._maxInstanceCount=e.maxInstanceCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._matricesTexture=l(e.matricesTexture.uuid),s._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(s._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(s.boundingSphere=new Lt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(s.boundingBox=new Bt().fromJSON(e.boundingBox));break;case"LOD":s=new su;break;case"Line":s=new Ji(a(e.geometry),o(e.material));break;case"LineLoop":s=new fu(a(e.geometry),o(e.material));break;case"LineSegments":s=new vi(a(e.geometry),o(e.material));break;case"PointCloud":case"Points":s=new pu(a(e.geometry),o(e.material));break;case"Sprite":s=new ru(o(e.material));break;case"Group":s=new qn;break;case"Bone":s=new No;break;default:s=new ot}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.pivot!==void 0&&(s.pivot=new C().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(s.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.blurSamples!==void 0&&(s.shadow.blurSamples=e.shadow.blurSamples),e.shadow.focus!==void 0&&(s.shadow.focus=e.shadow.focus),e.shadow.aspect!==void 0&&(s.shadow.aspect=e.shadow.aspect),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.static!==void 0&&(s.static=e.static),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let u=0;u<d.length;u++)s.add(this.parseObject(d[u],t,i,n,r))}if(e.animations!==void 0){const d=e.animations;for(let u=0;u<d.length;u++){const f=d[u];s.animations.push(r[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const d=e.levels;for(let u=0;u<d.length;u++){const f=d[u],g=s.getObjectByProperty("uuid",f.object);g!==void 0&&s.addLevel(g,f.distance,f.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?fe("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new ot}})}},Jm={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},uc={RepeatWrapping:Cr,ClampToEdgeWrapping:qt,MirroredRepeatWrapping:Rr},dc={NearestFilter:Et,NearestMipmapNearestFilter:vo,NearestMipmapLinearFilter:_o,LinearFilter:yt,LinearMipmapNearestFilter:yo,LinearMipmapLinearFilter:tr},Ya=new WeakMap,Km=class extends Zt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=gi.get(`image-bitmap:${e}`);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(l=>{Ya.has(s)===!0?(n&&n(Ya.get(s)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const o=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return gi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){n&&n(l),Ya.set(o,l),gi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});gi.add(`image-bitmap:${e}`,o),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ls,il=class{static getContext(){return Ls===void 0&&(Ls=new(window.AudioContext||window.webkitAudioContext)),Ls}static setContext(e){Ls=e}},$m=class extends Zt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Fi(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{const l=o.slice(0),c=il.getContext(),h=e+"#decode";r.manager.itemStart(h),c.decodeAudioData(l,function(d){t(d),r.manager.itemEnd(h)}).catch(function(d){a(d),r.manager.itemEnd(h)})}catch(l){a(l)}},i,n);function a(o){n?n(o):Ie(o),r.manager.itemError(e)}}},fc=new He,pc=new He,an=new He,Qm=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Pt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Pt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,an.copy(e.projectionMatrix);const i=t.eyeSep/2,n=i*t.near/t.focus,r=t.near*Math.tan(mn*t.fov*.5)/t.zoom;let s,a;pc.elements[12]=-i,fc.elements[12]=i,s=-r*t.aspect+n,a=r*t.aspect+n,an.elements[0]=2*t.near/(a-s),an.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(an),s=-r*t.aspect-n,a=r*t.aspect-n,an.elements[0]=2*t.near/(a-s),an.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(an)}this.cameraL.matrix.copy(e.matrixWorld).multiply(pc),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(fc),this.cameraR.matrixWorldNeedsUpdate=!0}},Bn=-90,zn=1,Dd=class extends ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Pt(Bn,zn,e,t);n.layers=this.layers,this.add(n);const r=new Pt(Bn,zn,e,t);r.layers=this.layers,this.add(r);const s=new Pt(Bn,zn,e,t);s.layers=this.layers,this.add(s);const a=new Pt(Bn,zn,e,t);a.layers=this.layers,this.add(a);const o=new Pt(Bn,zn,e,t);o.layers=this.layers,this.add(o);const l=new Pt(Bn,zn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,a,o]=t;for(const l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Od=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Fd=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=jm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function jm(){this._document.hidden===!1&&this.reset()}var on=new C,Za=new kt,eg=new C,ln=new C,cn=new C,tg=class extends ot{constructor(){super(),this.type="AudioListener",this.context=il.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Fd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(on,Za,eg),ln.set(0,0,-1).applyQuaternion(Za),cn.set(0,1,0).applyQuaternion(Za),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(on.x,i),t.positionY.linearRampToValueAtTime(on.y,i),t.positionZ.linearRampToValueAtTime(on.z,i),t.forwardX.linearRampToValueAtTime(ln.x,i),t.forwardY.linearRampToValueAtTime(ln.y,i),t.forwardZ.linearRampToValueAtTime(ln.z,i),t.upX.linearRampToValueAtTime(cn.x,i),t.upY.linearRampToValueAtTime(cn.y,i),t.upZ.linearRampToValueAtTime(cn.z,i)}else t.setPosition(on.x,on.y,on.z),t.setOrientation(ln.x,ln.y,ln.z,cn.x,cn.y,cn.z)}},Bd=class extends ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){fe("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(fe("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){fe("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(fe("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},hn=new C,mc=new kt,ig=new C,un=new C,ng=class extends Bd{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(hn,mc,ig),un.set(0,0,1).applyQuaternion(mc);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(hn.x,i),t.positionY.linearRampToValueAtTime(hn.y,i),t.positionZ.linearRampToValueAtTime(hn.z,i),t.orientationX.linearRampToValueAtTime(un.x,i),t.orientationY.linearRampToValueAtTime(un.y,i),t.orientationZ.linearRampToValueAtTime(un.z,i)}else t.setPosition(hn.x,hn.y,hn.z),t.setOrientation(un.x,un.y,un.z)}},rg=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},zd=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,s;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==n;++a)i[r+a]=i[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(i,r,0,a,n)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const o=t*this._origIndex;this._mixBufferRegion(i,n,o,1-r,t)}s>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let o=t,l=t+t;o!==l;++o)if(i[o]!==i[o+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,s=n;r!==s;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let s=0;s!==r;++s)e[t+s]=e[i+s]}_slerp(e,t,i,n){kt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const s=this._workIndex*r;kt.multiplyQuaternionsFlat(e,s,e,t,e,i),kt.slerpFlat(e,t,e,t,e,s,n)}_lerp(e,t,i,n,r){const s=1-n;for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]*s+e[i+a]*n}}_lerpAdditive(e,t,i,n,r){for(let s=0;s!==r;++s){const a=t+s;e[a]=e[a]+e[i+s]*n}}},sg="\\[\\]\\.:\\/",ag=new RegExp("[\\[\\]\\.:\\/]","g"),nl="[^\\[\\]\\.:\\/]",og="[^"+sg.replace("\\.","")+"]",lg=/((?:WC+[\/:])*)/.source.replace("WC",nl),cg=/(WCOD+)?/.source.replace("WCOD",og),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nl),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nl),dg=new RegExp("^"+lg+cg+hg+ug+"$"),fg=["material","materials","bones","map"],pg=class{constructor(e,t,i){const n=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class Wn{constructor(t,i,n){this.path=i,this.parsedPath=n||Wn.parseTrackName(i),this.node=Wn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new Wn.Composite(t,i,n):new Wn(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ag,"")}static parseTrackName(t){const i=dg.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);fg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===i||o.uuid===i)return o;const l=n(o.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[i++]=n[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,n=i.objectName,r=i.propertyName;let s=i.propertyIndex;if(t||(t=Wn.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[r];if(a===void 0){const c=i.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=pg;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mg=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=jt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,s=r.length;let a,o=e.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){const d=arguments[c],u=d.uuid;let f=t[u];if(f===void 0){f=o++,t[u]=f,e.push(d);for(let g=0,_=s;g!==_;++g)r[g].push(new dt(d,i[g],n[g]))}else if(f<l){a=e[f];const g=--l,_=e[g];t[_.uuid]=f,e[f]=_,t[u]=g,e[g]=d;for(let m=0,p=s;m!==p;++m){const M=r[m],A=M[g];let v=M[f];M[f]=A,v===void 0&&(v=new dt(d,i[m],n[m])),M[g]=v}}else e[f]!==a&&Ie("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const o=arguments[s],l=o.uuid,c=t[l];if(c!==void 0&&c>=r){const h=r++,d=e[h];t[d.uuid]=c,e[c]=d,t[l]=h,e[h]=o;for(let u=0,f=n;u!==f;++u){const g=i[u],_=g[h],m=g[c];g[c]=_,g[h]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,s=e.length;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a].uuid,c=t[l];if(c!==void 0)if(delete t[l],c<r){const h=--r,d=e[h],u=--s,f=e[u];c!==h&&(t[d.uuid]=c),e[c]=d,h!==u&&(t[f.uuid]=h),e[h]=f,e.pop();for(let g=0,_=n;g!==_;++g){const m=i[g],p=m[h],M=m[u];m[c]=p,m[h]=M,m.pop()}}else{const h=--s,d=e[h];c!==h&&(t[d.uuid]=c),e[c]=d,e.pop();for(let u=0,f=n;u!==f;++u){const g=i[u];g[c]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const r=this._bindings;if(n!==void 0)return r[n];const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l);n=r.length,i[e]=n,s.push(e),a.push(t),r.push(h);for(let d=c,u=o.length;d!==u;++d){const f=o[d];h[d]=new dt(f,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a],l=n[a];t[l]=i,s[i]=o,s.pop(),r[i]=r[a],r.pop(),n[i]=n[a],n.pop()}}},Vd=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,s=r.length,a=new Array(s),o={endingStart:fn,endingEnd:fn};for(let l=0;l!==s;++l){const c=r[l].createInterpolant(null);a[l]=c,c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Fh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,r=e._clip.duration,s=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+i,l[0]=e/s,l[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const o=(e-r)*i;o<0||i===0?t=0:(this._startTime=null,t=i*o)}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const o=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Co:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(s),l[c].accumulateAdditive(a);break;case js:default:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(s),l[c].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const s=i===Bh;if(e===0)return r===-1?n:s&&(r&1)===1?t-n:n;if(i===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,r+=Math.abs(a);const o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(o===1){const l=e<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=n;if(s&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=pn,n.endingEnd=pn):(e?n.endingStart=this.zeroSlopeAtStart?pn:fn:n.endingStart=Lr,t?n.endingEnd=this.zeroSlopeAtEnd?pn:fn:n.endingEnd=Lr)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let s=this._weightInterpolant;s===null&&(s=n._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,o=s.sampleValues;return a[0]=r,o[0]=t,a[1]=r+e,o[1]=i,this}},gg=new Float32Array(1),vg=class extends hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,s=e._propertyBindings,a=e._interpolants,o=i.uuid,l=this._bindingsByRootAndName;let c=l[o];c===void 0&&(c={},l[o]=c);for(let h=0;h!==r;++h){const d=n[h],u=d.name;let f=c[u];if(f!==void 0)++f.referenceCount,s[h]=f;else{if(f=s[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,o,u));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;f=new zd(dt.create(i,u,g),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,o,u),s[h]=f}a[h].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],o.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let s=n[t];s===void 0&&(s={},n[t]=s),s[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,s=this._bindingsByRootAndName,a=s[n],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete a[r],Object.keys(a).length===0&&delete s[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new $o(new Float32Array(2),new Float32Array(2),1,gg),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let s=typeof e=="string"?kr.findByName(n,e):e;const a=s!==null?s.uuid:e,o=this._actionsByClip[a];let l=null;if(i===void 0&&(s!==null?i=s.blendMode:i=js),o!==void 0){const h=o.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const c=new Vd(this,s,t,i);return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?kr.findByName(i,e):e,s=r?r.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(n,e,r,s);const a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const s=r.knownActions;for(let a=0,o=s.length;a!==o;++a){const l=s[a];this._deactivateAction(l);const c=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,t[c]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const s=i[r].actionByRoot[t];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}const n=this._bindingsByRootAndName[t];if(n!==void 0)for(const r in n){const s=n[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},_g=class extends Io{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i;for(let r=0;r<this.textures.length;r++){const s=new ia(null,e,t,i);s.isRenderTargetTexture=!0,s.renderTarget=this,this.textures[r]=s}this._setTextureOptions(n)}},yg=class Gd{constructor(t){this.value=t}clone(){return new Gd(this.value.clone===void 0?this.value:this.value.clone())}},xg=0,Mg=class extends hi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:xg++}),this.name="",this.usage=ea,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const r=Array.isArray(t[i])?t[i]:[t[i]];for(let s=0;s<r.length;s++)this.uniforms.push(r[s].clone())}return this}clone(){return new this.constructor().copy(this)}},Sg=class extends ra{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},bg=class{constructor(e,t,i,n,r,s=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.normalized=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},gc=new He,Tg=class{constructor(e,t,i=0,n=1/0){this.ray=new ir(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gc),this}intersectObject(e,t=!0,i=[]){return uo(e,this,i,t),i.sort(vc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)uo(e[n],this,i,t);return i.sort(vc),i}};function vc(e,t){return e.distance-t.distance}function uo(e,t,i,n){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(r=!1),r===!0&&n===!0){const s=e.children;for(let a=0,o=s.length;a<o;a++)uo(s[a],t,i,!0)}}var Ag=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Eg=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},wg=class{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},Cg=class kd{static{kd.prototype.isMatrix2=!0}constructor(t,i,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let n=0;n<4;n++)this.elements[n]=t[n+i];return this}set(t,i,n,r){const s=this.elements;return s[0]=t,s[2]=i,s[1]=n,s[3]=r,this}},_c=new ee,Hd=class{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_c.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_c).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yc=new C,Us=new C,Vn=new C,Gn=new C,Ja=new C,Rg=new C,Ig=new C,Pg=class{constructor(e=new C,t=new C){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){yc.subVectors(e,this.start),Us.subVectors(this.end,this.start);const i=Us.dot(Us);if(i===0)return 0;let n=Us.dot(yc)/i;return t&&(n=Ve(n,0,1)),n}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=Rg,i=Ig){const n=10000000000000001e-32;let r,s;const a=this.start,o=e.start,l=this.end,c=e.end;Vn.subVectors(l,a),Gn.subVectors(c,o),Ja.subVectors(a,o);const h=Vn.dot(Vn),d=Gn.dot(Gn),u=Gn.dot(Ja);if(h<=n&&d<=n)return t.copy(a),i.copy(o),t.sub(i),t.dot(t);if(h<=n)r=0,s=u/d,s=Ve(s,0,1);else{const f=Vn.dot(Ja);if(d<=n)s=0,r=Ve(-f/h,0,1);else{const g=Vn.dot(Gn),_=h*d-g*g;_!==0?r=Ve((g*u-f*d)/_,0,1):r=0,s=(g*r+u)/d,s<0?(s=0,r=Ve(-f/h,0,1)):s>1&&(s=1,r=Ve((g-f)/h,0,1))}}return t.copy(a).addScaledVector(Vn,r),i.copy(o).addScaledVector(Gn,s),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},xc=new C,Lg=class extends ot{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Je,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){const l=s/o*Math.PI*2,c=a/o*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}i.setAttribute("position",new Te(n,3));const r=new Ht({fog:!1,toneMapped:!1});this.cone=new vi(i,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),xc.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(xc),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Xi=new C,Ns=new He,Ka=new He,Ug=class extends vi{constructor(e){const t=Wd(e),i=new Je,n=[],r=[];for(let l=0;l<t.length;l++){const c=t[l];c.parent&&c.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new Te(n,3)),i.setAttribute("color",new Te(r,3));const s=new Ht({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,s),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new xe(255),o=new xe(65280);this.setColors(a,o)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");Ka.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Ns.multiplyMatrices(Ka,a.matrixWorld),Xi.setFromMatrixPosition(Ns),n.setXYZ(s,Xi.x,Xi.y,Xi.z),Ns.multiplyMatrices(Ka,a.parent.matrixWorld),Xi.setFromMatrixPosition(Ns),n.setXYZ(s+1,Xi.x,Xi.y,Xi.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let n=0;n<i.count;n+=2)i.setXYZ(n,e.r,e.g,e.b),i.setXYZ(n+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Wd(e){const t=[];e.isBone===!0&&t.push(e);for(let i=0;i<e.children.length;i++)t.push(...Wd(e.children[i]));return t}var Ng=class extends Tt{constructor(e,t,i){const n=new qo(t,4,2),r=new Ki({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},Dg=new C,Mc=new xe,Sc=new xe,Og=class extends ot{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new Xo(t);n.rotateY(Math.PI*.5),this.material=new Ki({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),s=new Float32Array(r.count*3);n.setAttribute("color",new pt(s,3)),this.add(new Tt(n,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Mc.copy(this.light.color),Sc.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const r=i<n/2?Mc:Sc;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(Dg.setFromMatrixPosition(this.light.matrixWorld).negate())}},Fg=class extends vi{constructor(e=10,t=10,i=4473924,n=8947848){i=new xe(i),n=new xe(n);const r=t/2,s=e/t,a=e/2,o=[],l=[];for(let d=0,u=0,f=-a;d<=t;d++,f+=s){o.push(-a,0,f,a,0,f),o.push(f,0,-a,f,0,a);const g=d===r?i:n;g.toArray(l,u),u+=3,g.toArray(l,u),u+=3,g.toArray(l,u),u+=3,g.toArray(l,u),u+=3}const c=new Je;c.setAttribute("position",new Te(o,3)),c.setAttribute("color",new Te(l,3));const h=new Ht({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Bg=class extends vi{constructor(e=10,t=16,i=8,n=64,r=4473924,s=8947848){r=new xe(r),s=new xe(s);const a=[],o=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),u=Math.sin(d)*e,f=Math.cos(d)*e;a.push(0,0,0),a.push(u,0,f);const g=h&1?r:s;o.push(g.r,g.g,g.b),o.push(g.r,g.g,g.b)}for(let h=0;h<i;h++){const d=h&1?r:s,u=e-e/i*h;for(let f=0;f<n;f++){let g=f/n*(Math.PI*2),_=Math.sin(g)*u,m=Math.cos(g)*u;a.push(_,0,m),o.push(d.r,d.g,d.b),g=(f+1)/n*(Math.PI*2),_=Math.sin(g)*u,m=Math.cos(g)*u,a.push(_,0,m),o.push(d.r,d.g,d.b)}}const l=new Je;l.setAttribute("position",new Te(a,3)),l.setAttribute("color",new Te(o,3));const c=new Ht({vertexColors:!0,toneMapped:!1});super(l,c),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},bc=new C,Ds=new C,Tc=new C,zg=class extends ot{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Je;n.setAttribute("position",new Te([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Ht({fog:!1,toneMapped:!1});this.lightPlane=new Ji(n,r),this.add(this.lightPlane),n=new Je,n.setAttribute("position",new Te([0,0,0,0,0,1],3)),this.targetLine=new Ji(n,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),bc.setFromMatrixPosition(this.light.matrixWorld),Ds.setFromMatrixPosition(this.light.target.matrixWorld),Tc.subVectors(Ds,bc),this.lightPlane.lookAt(Ds),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ds),this.targetLine.scale.z=Tc.length()}},Os=new C,_t=new ua,Vg=class extends vi{constructor(e){const t=new Je,i=new Ht({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],s={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(f,g){o(f),o(g)}function o(f){n.push(0,0,0),r.push(0,0,0),s[f]===void 0&&(s[f]=[]),s[f].push(n.length/3-1)}t.setAttribute("position",new Te(n,3)),t.setAttribute("color",new Te(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const l=new xe(16755200),c=new xe(16711680),h=new xe(43775),d=new xe(16777215),u=new xe(3355443);this.setColors(l,c,h,d,u)}setColors(e,t,i,n,r){const s=this.geometry.getAttribute("color");return s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,n.r,n.g,n.b),s.setXYZ(39,n.r,n.g,n.b),s.setXYZ(40,r.r,r.g,r.b),s.setXYZ(41,r.r,r.g,r.b),s.setXYZ(42,r.r,r.g,r.b),s.setXYZ(43,r.r,r.g,r.b),s.setXYZ(44,r.r,r.g,r.b),s.setXYZ(45,r.r,r.g,r.b),s.setXYZ(46,r.r,r.g,r.b),s.setXYZ(47,r.r,r.g,r.b),s.setXYZ(48,r.r,r.g,r.b),s.setXYZ(49,r.r,r.g,r.b),s.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,n=1;let r,s;if(_t.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,s=0;else if(this.camera.coordinateSystem===2e3)r=-1,s=1;else if(this.camera.coordinateSystem===2001)r=0,s=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);St("c",t,e,_t,0,0,r),St("t",t,e,_t,0,0,s),St("n1",t,e,_t,-1,-1,r),St("n2",t,e,_t,i,-1,r),St("n3",t,e,_t,-1,n,r),St("n4",t,e,_t,i,n,r),St("f1",t,e,_t,-1,-1,s),St("f2",t,e,_t,i,-1,s),St("f3",t,e,_t,-1,n,s),St("f4",t,e,_t,i,n,s),St("u1",t,e,_t,i*.7,n*1.1,r),St("u2",t,e,_t,-.7,n*1.1,r),St("u3",t,e,_t,0,2,r),St("cf1",t,e,_t,-1,0,s),St("cf2",t,e,_t,i,0,s),St("cf3",t,e,_t,0,-1,s),St("cf4",t,e,_t,0,n,s),St("cn1",t,e,_t,-1,0,r),St("cn2",t,e,_t,i,0,r),St("cn3",t,e,_t,0,-1,r),St("cn4",t,e,_t,0,n,r),e.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function St(e,t,i,n,r,s,a){Os.set(r,s,a).unproject(n);const o=t[e];if(o!==void 0){const l=i.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Os.x,Os.y,Os.z)}}var Fs=new Bt,Gg=class extends vi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new Je;r.setIndex(new pt(i,1)),r.setAttribute("position",new pt(n,3)),super(r,new Ht({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Fs.setFromObject(this.object),Fs.isEmpty())return;const e=Fs.min,t=Fs.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},kg=class extends vi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Je;r.setIndex(new pt(i,1)),r.setAttribute("position",new Te(n,3)),super(r,new Ht({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Hg=class extends Ji{constructor(e,t=1,i=16776960){const n=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new Je;s.setAttribute("position",new Te(r,3)),s.computeBoundingSphere(),super(s,new Ht({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new Je;o.setAttribute("position",new Te(a,3)),o.computeBoundingSphere(),this.add(new Tt(o,new Ki({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Ac=new C,Bs,$a,Wg=class extends ot{constructor(e=new C(0,0,1),t=new C(0,0,0),i=1,n=16776960,r=i*.2,s=r*.2){super(),this.type="ArrowHelper",Bs===void 0&&(Bs=new Je,Bs.setAttribute("position",new Te([0,0,0,0,1,0],3)),$a=new Bo(.5,1,5,1),$a.translate(0,-.5,0)),this.position.copy(t),this.line=new Ji(Bs,new Ht({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Tt($a,new Ki({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ac.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ac,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Xg=class extends vi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Je;n.setAttribute("position",new Te(t,3)),n.setAttribute("color",new Te(i,3));const r=new Ht({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new xe,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},qg=class{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Br,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,s){return this.currentPath.bezierCurveTo(e,t,i,n,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(o,l){let c=!1;const h=l.length;for(let d=0,u=h-1;d<h;u=d++){const f=l[d],g=l[u];f.y>o.y!=g.y>o.y&&o.x<(g.x-f.x)*(o.y-f.y)/(g.y-f.y)+f.x&&(c=!c)}return c}function t(o,l){const c=l.getCenter(new ee);if(e(c,o))return c;const h=c.y,d=[],u=o.length;for(let f=0;f<u;f++){const g=o[f],_=o[(f+1)%u];if(g.y>h!=_.y>h){const m=g.x+(h-g.y)*(_.x-g.x)/(_.y-g.y);d.push(m)}}return d.length>1&&(d.sort((f,g)=>f-g),c.x=(d[0]+d[1])/2),c}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(fe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");const n=i==="nonzero"?(o=>o!==0):(o=>(o&1)!==0),r=[];for(const o of this.subPaths){const l=o.getPoints();if(l.length<3)continue;const c=Ci.area(l);if(c===0)continue;const h=new Hd;for(let d=0;d<l.length;d++)h.expandByPoint(l[d]);r.push({subPath:o,points:l,boundingBox:h,interiorPoint:t(l,h),absArea:Math.abs(c),winding:c<0?-1:1,container:null,exclude:!1,role:null})}r.sort((o,l)=>l.absArea-o.absArea);for(let o=0;o<r.length;o++){const l=r[o];let c=0;for(let h=o-1;h>=0;h--){const d=r[h];if(d.boundingBox.containsBox(l.boundingBox)&&e(l.interiorPoint,d.points)){l.container=d.exclude?d.container:d,c=d.winding,l.winding+=c;break}}n(l.winding)===n(c)&&(l.exclude=!0)}for(const o of r)o.exclude||(o.role=o.container===null||o.container.role==="hole"?"outer":"hole");const s=[],a=new Map;for(const o of r){if(o.exclude||o.role!=="outer")continue;const l=new qr;l.curves=o.subPath.curves,s.push(l),a.set(o,l)}for(const o of r){if(o.exclude||o.role!=="hole")continue;const l=a.get(o.container);if(!l)continue;const c=new Br;c.curves=o.subPath.curves,l.holes.push(c)}return s}},Yg=class extends hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Zg(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2):(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0),e}function Jg(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0):(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2),e}function Kg(e){return e.repeat.x=1,e.repeat.y=1,e.offset.x=0,e.offset.y=0,e}function fo(e,t,i,n){const r=$g(n);switch(i){case jc:return e*t;case Ao:return e*t/r.components*r.byteLength;case Qs:return e*t/r.components*r.byteLength;case Ir:return e*t*2/r.components*r.byteLength;case Eo:return e*t*2/r.components*r.byteLength;case eh:return e*t*3/r.components*r.byteLength;case Di:return e*t*4/r.components*r.byteLength;case wo:return e*t*4/r.components*r.byteLength;case th:case ih:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nh:case rh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ah:case lh:return Math.max(e,16)*Math.max(t,8)/4;case sh:case oh:return Math.max(e,8)*Math.max(t,8)/2;case ch:case hh:case dh:case fh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case uh:case ph:case mh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _h:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case yh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case xh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case bh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Th:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case wh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ch:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ih:case Ph:case Lh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Uh:case Nh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Dh:case Oh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $g(e){switch(e){case Ri:case Zc:return{byteLength:1,components:1};case xo:case Jc:case Ni:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case Li:case Kc:case Ui:return{byteLength:4,components:1};case $c:case Qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var Qg=class{static contain(e,t){return Zg(e,t)}static cover(e,t){return Jg(e,t)}static fill(e){return Kg(e)}static getByteLength(e,t,i,n){return fo(e,t,i,n)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");var g0=af({ACESFilmicToneMapping:()=>4,AddEquation:()=>100,AddOperation:()=>2,AdditiveAnimationBlendMode:()=>Co,AdditiveBlending:()=>2,AgXToneMapping:()=>6,AlphaFormat:()=>jc,AlwaysCompare:()=>519,AlwaysDepth:()=>1,AlwaysStencilFunc:()=>519,AmbientLight:()=>Cd,AnimationAction:()=>Vd,AnimationClip:()=>kr,AnimationLoader:()=>Vm,AnimationMixer:()=>vg,AnimationObjectGroup:()=>mg,AnimationUtils:()=>Nm,ArcCurve:()=>Cu,ArrayCamera:()=>Od,ArrowHelper:()=>Wg,AttachedBindMode:()=>Yc,Audio:()=>Bd,AudioAnalyser:()=>rg,AudioContext:()=>il,AudioListener:()=>tg,AudioLoader:()=>$m,AxesHelper:()=>Xg,BackSide:()=>1,BasicDepthPacking:()=>zh,BasicShadowMap:()=>0,BatchedMesh:()=>du,BezierInterpolant:()=>xd,Bone:()=>No,BooleanKeyframeTrack:()=>_n,Box2:()=>Hd,Box3:()=>Bt,Box3Helper:()=>kg,BoxGeometry:()=>Xr,BoxHelper:()=>Gg,BufferAttribute:()=>pt,BufferGeometry:()=>Je,BufferGeometryLoader:()=>Nd,ByteType:()=>Zc,Cache:()=>gi,Camera:()=>ua,CameraHelper:()=>Vg,CanvasTexture:()=>jp,CapsuleGeometry:()=>_u,CatmullRomCurve3:()=>Ru,CineonToneMapping:()=>3,CircleGeometry:()=>xu,ClampToEdgeWrapping:()=>qt,Clock:()=>Ag,Color:()=>xe,ColorKeyframeTrack:()=>Qo,ColorManagement:()=>je,Compatibility:()=>Bf,CompressedArrayTexture:()=>$p,CompressedCubeTexture:()=>Qp,CompressedTexture:()=>sa,CompressedTextureLoader:()=>Gm,ConeGeometry:()=>Bo,ConstantAlphaFactor:()=>213,ConstantColorFactor:()=>211,Controls:()=>Yg,CubeCamera:()=>Dd,CubeDepthTexture:()=>gu,CubeReflectionMapping:()=>301,CubeRefractionMapping:()=>302,CubeTexture:()=>Wr,CubeTextureLoader:()=>km,CubeUVReflectionMapping:()=>306,CubicBezierCurve:()=>Vo,CubicBezierCurve3:()=>Iu,CubicInterpolant:()=>_d,CullFaceBack:()=>1,CullFaceFront:()=>2,CullFaceFrontBack:()=>3,CullFaceNone:()=>0,Curve:()=>ui,CurvePath:()=>Lu,CustomBlending:()=>5,CustomToneMapping:()=>5,CylinderGeometry:()=>Fo,Cylindrical:()=>wg,Data3DTexture:()=>ia,DataArrayTexture:()=>ta,DataTexture:()=>ii,DataTextureLoader:()=>Hm,DataUtils:()=>bp,DecrementStencilOp:()=>Mf,DecrementWrapStencilOp:()=>bf,DefaultLoadingManager:()=>bd,DepthFormat:()=>Jn,DepthStencilFormat:()=>To,DepthTexture:()=>Qn,DetachedBindMode:()=>cf,DirectionalLight:()=>wd,DirectionalLightHelper:()=>zg,DiscreteInterpolant:()=>yd,DodecahedronGeometry:()=>Au,DoubleSide:()=>2,DstAlphaFactor:()=>206,DstColorFactor:()=>208,DynamicCopyUsage:()=>Pf,DynamicDrawUsage:()=>Af,DynamicReadUsage:()=>Cf,EdgesGeometry:()=>wu,EllipseCurve:()=>aa,EqualCompare:()=>514,EqualDepth:()=>4,EqualStencilFunc:()=>514,EquirectangularReflectionMapping:()=>303,EquirectangularRefractionMapping:()=>304,Euler:()=>Oi,EventDispatcher:()=>hi,ExternalTexture:()=>Oo,ExtrudeGeometry:()=>Bu,FileLoader:()=>Fi,Float16BufferAttribute:()=>Ip,Float32BufferAttribute:()=>Te,FloatType:()=>Ui,Fog:()=>Qh,FogExp2:()=>Kh,FramebufferTexture:()=>Kp,FrontSide:()=>0,Frustum:()=>gn,FrustumArray:()=>hu,GLBufferAttribute:()=>bg,GLSL1:()=>"100",GLSL3:()=>Uf,GreaterCompare:()=>516,GreaterDepth:()=>6,GreaterEqualCompare:()=>518,GreaterEqualDepth:()=>5,GreaterEqualStencilFunc:()=>518,GreaterStencilFunc:()=>516,GridHelper:()=>Fg,Group:()=>qn,HTMLTexture:()=>em,HalfFloatType:()=>Ni,HemisphereLight:()=>Td,HemisphereLightHelper:()=>Og,IcosahedronGeometry:()=>Vu,ImageBitmapLoader:()=>Km,ImageLoader:()=>Hr,ImageUtils:()=>qh,IncrementStencilOp:()=>xf,IncrementWrapStencilOp:()=>Sf,InstancedBufferAttribute:()=>$n,InstancedBufferGeometry:()=>Ud,InstancedInterleavedBuffer:()=>Sg,InstancedMesh:()=>cu,Int16BufferAttribute:()=>Cp,Int32BufferAttribute:()=>Rp,Int8BufferAttribute:()=>Ap,IntType:()=>Kc,InterleavedBuffer:()=>ra,InterleavedBufferAttribute:()=>Fr,Interpolant:()=>rr,InterpolateBezier:()=>ro,InterpolateDiscrete:()=>Pr,InterpolateLinear:()=>Ys,InterpolateSmooth:()=>Gs,InterpolationSamplingMode:()=>Ff,InterpolationSamplingType:()=>Of,InvertStencilOp:()=>Tf,KeepStencilOp:()=>ks,KeyframeTrack:()=>ri,LOD:()=>su,LatheGeometry:()=>ku,Layers:()=>na,LessCompare:()=>513,LessDepth:()=>2,LessEqualCompare:()=>515,LessEqualDepth:()=>3,LessEqualStencilFunc:()=>515,LessStencilFunc:()=>513,Light:()=>$i,LightProbe:()=>Id,LightShadow:()=>ha,Line:()=>Ji,Line3:()=>Pg,LineBasicMaterial:()=>Ht,LineCurve:()=>Go,LineCurve3:()=>Pu,LineDashedMaterial:()=>md,LineLoop:()=>fu,LineSegments:()=>vi,LinearFilter:()=>yt,LinearInterpolant:()=>$o,LinearMipMapLinearFilter:()=>ff,LinearMipMapNearestFilter:()=>df,LinearMipmapLinearFilter:()=>tr,LinearMipmapNearestFilter:()=>yo,LinearSRGBColorSpace:()=>Zs,LinearToneMapping:()=>1,LinearTransfer:()=>Ur,Loader:()=>Zt,LoaderUtils:()=>ho,LoadingManager:()=>el,LoopOnce:()=>mf,LoopPingPong:()=>Bh,LoopRepeat:()=>Fh,MOUSE:()=>of,Material:()=>Ut,MaterialBlending:()=>6,MaterialLoader:()=>Pd,MathUtils:()=>lp,Matrix2:()=>Cg,Matrix3:()=>Ye,Matrix4:()=>He,MaxEquation:()=>104,Mesh:()=>Tt,MeshBasicMaterial:()=>Ki,MeshDepthMaterial:()=>Jo,MeshDistanceMaterial:()=>Ko,MeshLambertMaterial:()=>fd,MeshMatcapMaterial:()=>pd,MeshNormalMaterial:()=>dd,MeshPhongMaterial:()=>hd,MeshPhysicalMaterial:()=>cd,MeshStandardMaterial:()=>Zo,MeshToonMaterial:()=>ud,MinEquation:()=>103,MirroredRepeatWrapping:()=>Rr,MixOperation:()=>1,MultiplyBlending:()=>4,MultiplyOperation:()=>0,NearestFilter:()=>Et,NearestMipMapLinearFilter:()=>uf,NearestMipMapNearestFilter:()=>hf,NearestMipmapLinearFilter:()=>_o,NearestMipmapNearestFilter:()=>vo,NeutralToneMapping:()=>7,NeverCompare:()=>512,NeverDepth:()=>0,NeverStencilFunc:()=>512,NoBlending:()=>0,NoColorSpace:()=>"",NoNormalPacking:()=>"",NoToneMapping:()=>0,NormalAnimationBlendMode:()=>js,NormalBlending:()=>1,NormalGAPacking:()=>"ga",NormalRGPacking:()=>"rg",NotEqualCompare:()=>517,NotEqualDepth:()=>7,NotEqualStencilFunc:()=>517,NumberKeyframeTrack:()=>la,Object3D:()=>ot,ObjectLoader:()=>Zm,ObjectSpaceNormalMap:()=>1,OctahedronGeometry:()=>Xo,OneFactor:()=>201,OneMinusConstantAlphaFactor:()=>214,OneMinusConstantColorFactor:()=>212,OneMinusDstAlphaFactor:()=>207,OneMinusDstColorFactor:()=>209,OneMinusSrcAlphaFactor:()=>205,OneMinusSrcColorFactor:()=>203,OrthographicCamera:()=>Yr,PCFShadowMap:()=>1,PCFSoftShadowMap:()=>2,PMREMGenerator:()=>po,Path:()=>Br,PerspectiveCamera:()=>Pt,Plane:()=>Ai,PlaneGeometry:()=>oa,PlaneHelper:()=>Hg,PointLight:()=>Ed,PointLightHelper:()=>Ng,Points:()=>pu,PointsMaterial:()=>Do,PolarGridHelper:()=>Bg,PolyhedronGeometry:()=>nr,PositionalAudio:()=>ng,PropertyBinding:()=>dt,PropertyMixer:()=>zd,QuadraticBezierCurve:()=>ko,QuadraticBezierCurve3:()=>Ho,Quaternion:()=>kt,QuaternionKeyframeTrack:()=>ca,QuaternionLinearInterpolant:()=>Sd,R11_EAC_Format:()=>dh,RED_GREEN_RGTC2_Format:()=>Dh,RED_RGTC1_Format:()=>Uh,REVISION:()=>"186",RG11_EAC_Format:()=>ph,RGBADepthPacking:()=>gf,RGBAFormat:()=>Di,RGBAIntegerFormat:()=>wo,RGBA_ASTC_10x10_Format:()=>wh,RGBA_ASTC_10x5_Format:()=>Th,RGBA_ASTC_10x6_Format:()=>Ah,RGBA_ASTC_10x8_Format:()=>Eh,RGBA_ASTC_12x10_Format:()=>Ch,RGBA_ASTC_12x12_Format:()=>Rh,RGBA_ASTC_4x4_Format:()=>gh,RGBA_ASTC_5x4_Format:()=>vh,RGBA_ASTC_5x5_Format:()=>_h,RGBA_ASTC_6x5_Format:()=>yh,RGBA_ASTC_6x6_Format:()=>xh,RGBA_ASTC_8x5_Format:()=>Mh,RGBA_ASTC_8x6_Format:()=>Sh,RGBA_ASTC_8x8_Format:()=>bh,RGBA_BPTC_Format:()=>Ih,RGBA_ETC2_EAC_Format:()=>uh,RGBA_PVRTC_2BPPV1_Format:()=>lh,RGBA_PVRTC_4BPPV1_Format:()=>oh,RGBA_S3TC_DXT1_Format:()=>ih,RGBA_S3TC_DXT3_Format:()=>nh,RGBA_S3TC_DXT5_Format:()=>rh,RGBDepthPacking:()=>vf,RGBFormat:()=>eh,RGBIntegerFormat:()=>pf,RGB_BPTC_SIGNED_Format:()=>Ph,RGB_BPTC_UNSIGNED_Format:()=>Lh,RGB_ETC1_Format:()=>ch,RGB_ETC2_Format:()=>hh,RGB_PVRTC_2BPPV1_Format:()=>ah,RGB_PVRTC_4BPPV1_Format:()=>sh,RGB_S3TC_DXT1_Format:()=>th,RGDepthPacking:()=>_f,RGFormat:()=>Ir,RGIntegerFormat:()=>Eo,RawShaderMaterial:()=>Yo,Ray:()=>ir,Raycaster:()=>Tg,RectAreaLight:()=>Rd,RedFormat:()=>Ao,RedIntegerFormat:()=>Qs,ReinhardToneMapping:()=>2,RenderObjectRefreshType:()=>zf,RenderTarget:()=>Io,RenderTarget3D:()=>_g,RepeatWrapping:()=>Cr,ReplaceStencilOp:()=>yf,ReverseSubtractEquation:()=>102,RingGeometry:()=>qu,SIGNED_R11_EAC_Format:()=>fh,SIGNED_RED_GREEN_RGTC2_Format:()=>Oh,SIGNED_RED_RGTC1_Format:()=>Nh,SIGNED_RG11_EAC_Format:()=>mh,SRGBColorSpace:()=>Qt,SRGBTransfer:()=>Nr,Scene:()=>eu,ShaderChunk:()=>Ke,ShaderLib:()=>ci,ShaderMaterial:()=>ni,ShadowMaterial:()=>ad,Shape:()=>qr,ShapeGeometry:()=>Zu,ShapePath:()=>qg,ShapeUtils:()=>Ci,ShortType:()=>Jc,Skeleton:()=>ou,SkeletonHelper:()=>Ug,SkinnedMesh:()=>au,Source:()=>up,Sphere:()=>Lt,SphereGeometry:()=>qo,Spherical:()=>Eg,SphericalHarmonics3:()=>tl,SplineCurve:()=>Wo,SpotLight:()=>Ad,SpotLightHelper:()=>Lg,Sprite:()=>ru,SpriteMaterial:()=>Uo,SrcAlphaFactor:()=>204,SrcAlphaSaturateFactor:()=>210,SrcColorFactor:()=>202,StaticCopyUsage:()=>If,StaticDrawUsage:()=>ea,StaticReadUsage:()=>wf,StereoCamera:()=>Qm,StreamCopyUsage:()=>Lf,StreamDrawUsage:()=>Ef,StreamReadUsage:()=>Rf,StringKeyframeTrack:()=>yn,SubtractEquation:()=>101,SubtractiveBlending:()=>3,TOUCH:()=>lf,TangentSpaceNormalMap:()=>0,TetrahedronGeometry:()=>$u,Texture:()=>Rt,TextureLoader:()=>Wm,TextureSource:()=>wi,TextureUtils:()=>Qg,Timer:()=>Fd,TimestampQuery:()=>Df,TorusGeometry:()=>ju,TorusKnotGeometry:()=>td,Triangle:()=>qi,TriangleFanDrawMode:()=>2,TriangleStripDrawMode:()=>1,TrianglesDrawMode:()=>0,TubeGeometry:()=>nd,UVMapping:()=>300,Uint16BufferAttribute:()=>Po,Uint32BufferAttribute:()=>Lo,Uint8BufferAttribute:()=>Ep,Uint8ClampedBufferAttribute:()=>wp,Uniform:()=>yg,UniformsGroup:()=>Mg,UniformsLib:()=>me,UniformsUtils:()=>ld,UnsignedByteType:()=>Ri,UnsignedInt101111Type:()=>Qc,UnsignedInt248Type:()=>bo,UnsignedInt5999Type:()=>$c,UnsignedIntType:()=>Li,UnsignedShort4444Type:()=>Mo,UnsignedShort5551Type:()=>So,UnsignedShortType:()=>xo,VSMShadowMap:()=>3,Vector2:()=>ee,Vector3:()=>C,Vector4:()=>ft,VectorKeyframeTrack:()=>jo,VideoFrameTexture:()=>Jp,VideoTexture:()=>mu,WebGL3DRenderTarget:()=>pp,WebGLArrayRenderTarget:()=>fp,WebGLCoordinateSystem:()=>Yi,WebGLCubeRenderTarget:()=>rl,WebGLRenderTarget:()=>Yt,WebGLRenderer:()=>p0,WebGLUtils:()=>$d,WebGPUCoordinateSystem:()=>Nf,WebXRController:()=>Xs,WireframeGeometry:()=>sd,WrapAroundEnding:()=>Lr,ZeroCurvatureEnding:()=>fn,ZeroFactor:()=>200,ZeroSlopeEnding:()=>pn,ZeroStencilOp:()=>0,createCanvasElement:()=>Gh,error:()=>Ie,getConsoleFunction:()=>Hf,log:()=>Or,setConsoleFunction:()=>kf,warn:()=>fe,warnOnce:()=>Ii});function Xd(){let e=null,t=!1,i=null,n=null;function r(s,a){n=e.requestAnimationFrame(r),i(s,a)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function jg(e){const t=new WeakMap;function i(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];e.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ke={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},me={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ci={basic:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vt([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vt([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vt([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Vt([me.common,me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Vt([me.lights,me.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ci.physical={uniforms:Vt([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var zs={r:0,b:0,g:0},ev=new He,qd=new Ye;qd.set(-1,0,0,0,1,0,0,0,1);function tv(e,t,i,n,r,s){const a=new xe(0);let o=r===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const v=M.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(M){let A=!1;const v=f(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),A=!0);const T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(M,A){const v=f(A);v&&(v.isCubeTexture||v.mapping===306)?(c===void 0&&(c=new Tt(new Xr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:er(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qd),c.material.toneMapped=je.getTransfer(v.colorSpace)!==Nr,(h!==v||d!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Tt(new oa(2,2),new ni({name:"BackgroundMaterial",uniforms:er(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=je.getTransfer(v.colorSpace)!==Nr,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(zs,od(e)),i.buffers.color.setClear(zs.r,zs.g,zs.b,A,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:p}}function iv(e,t){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(I,D,X,L,V){let J=!1;const k=d(I,L,X,D);s!==k&&(s=k,c(s.object)),J=f(I,L,X,V),J&&g(I,L,X,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(I,D,X,L),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function d(I,D,X,L){const V=L.wireframe===!0;let J=n[D.id];J===void 0&&(J={},n[D.id]=J);const k=I.isInstancedMesh===!0?I.id:0;let he=J[k];he===void 0&&(he={},J[k]=he);let q=he[X.id];q===void 0&&(q={},he[X.id]=q);let Z=q[V];return Z===void 0&&(Z=u(l()),q[V]=Z),Z}function u(I){const D=[],X=[],L=[];for(let V=0;V<i;V++)D[V]=0,X[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,D,X,L){const V=s.attributes,J=D.attributes;let k=0;const he=X.getAttributes();for(const q in he)if(he[q].location>=0){const Z=V[q];let j=J[q];if(j===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),Z===void 0||Z.attribute!==j||j&&Z.data!==j.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function g(I,D,X,L){const V={},J=D.attributes;let k=0;const he=X.getAttributes();for(const q in he)if(he[q].location>=0){let Z=J[q];Z===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));const j={};j.attribute=Z,Z&&Z.data&&(j.data=Z.data),V[q]=j,k++}s.attributes=V,s.attributesNum=k,s.index=L}function _(){const I=s.newAttributes;for(let D=0,X=I.length;D<X;D++)I[D]=0}function m(I){p(I,0)}function p(I,D){const X=s.newAttributes,L=s.enabledAttributes,V=s.attributeDivisors;X[I]=1,L[I]===0&&(e.enableVertexAttribArray(I),L[I]=1),V[I]!==D&&(e.vertexAttribDivisor(I,D),V[I]=D)}function M(){const I=s.newAttributes,D=s.enabledAttributes;for(let X=0,L=D.length;X<L;X++)D[X]!==I[X]&&(e.disableVertexAttribArray(X),D[X]=0)}function A(I,D,X,L,V,J,k){k===!0?e.vertexAttribIPointer(I,D,X,V,J):e.vertexAttribPointer(I,D,X,L,V,J)}function v(I,D,X,L){_();const V=L.attributes,J=X.getAttributes(),k=D.defaultAttributeValues;for(const he in J){const q=J[he];if(q.location>=0){let Z=V[he];if(Z===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const j=Z.normalized,Ge=Z.itemSize,Pe=t.get(Z);if(Pe===void 0)continue;const lt=Pe.buffer,Xe=Pe.type,Y=Pe.bytesPerElement,re=Xe===e.INT||Xe===e.UNSIGNED_INT||Z.gpuType===1013;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Ue=ae.stride,Fe=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let de=0;de<q.locationSize;de++)p(q.location+de,ae.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let de=0;de<q.locationSize;de++)m(q.location+de);e.bindBuffer(e.ARRAY_BUFFER,lt);for(let de=0;de<q.locationSize;de++)A(q.location+de,Ge/q.locationSize,Xe,j,Ue*Y,(Fe+Ge/q.locationSize*de)*Y,re)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)p(q.location+ae,Z.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<q.locationSize;ae++)m(q.location+ae);e.bindBuffer(e.ARRAY_BUFFER,lt);for(let ae=0;ae<q.locationSize;ae++)A(q.location+ae,Ge/q.locationSize,Xe,j,Ge*Y,Ge/q.locationSize*ae*Y,re)}}else if(k!==void 0){const j=k[he];if(j!==void 0)switch(j.length){case 2:e.vertexAttrib2fv(q.location,j);break;case 3:e.vertexAttrib3fv(q.location,j);break;case 4:e.vertexAttrib4fv(q.location,j);break;default:e.vertexAttrib1fv(q.location,j)}}}}M()}function T(){b();for(const I in n){const D=n[I];for(const X in D){const L=D[X];for(const V in L){const J=L[V];for(const k in J)h(J[k].object),delete J[k];delete L[V]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;const D=n[I.id];for(const X in D){const L=D[X];for(const V in L){const J=L[V];for(const k in J)h(J[k].object),delete J[k];delete L[V]}}delete n[I.id]}function R(I){for(const D in n){const X=n[D];for(const L in X){const V=X[L];if(V[I.id]===void 0)continue;const J=V[I.id];for(const k in J)h(J[k].object),delete J[k];delete V[I.id]}}}function y(I){for(const D in n){const X=n[D],L=I.isInstancedMesh===!0?I.id:0,V=X[L];if(V!==void 0){for(const J in V){const k=V[J];for(const he in k)h(k[he].object),delete k[he];delete V[J]}delete X[L],Object.keys(X).length===0&&delete n[D]}}}function b(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function nv(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,h){h!==0&&(e.drawArraysInstanced(n,l,c,h),i.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];i.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function rv(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==1023&&n.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==1009&&R!==1015&&!y&&n.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const h=l(c);h!==c&&(fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:T,samples:w}}function sv(e){const t=this;let i=null,n=0,r=!1,s=!1;const a=new Ai,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,A=M*4;let v=p.clippingState||null;l.value=v,v=h(g,u,A,f);for(let T=0;T!==A;++T)v[T]=i[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=f;A!==_;++A,v+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Yn=4,av=6,ov=20,lv=256,yr=new Yr,Ec=new xe,Qa=null,ja=0,eo=0,to=!1,cv=new C,dn=new C,po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:a=cv}=r;Qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,n,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,ja,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,kn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Ni,format:Di,colorSpace:Zs,depthBuffer:!1},n=wc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hv(r)),this._blurMaterial=dv(r,e,t),this._ggxMaterial=uv(r,e,t)}return n}_compileMaterial(e){const t=new Tt(new Je,e);this._renderer.compile(t,yr)}_sceneToCubeUV(e,t,i,n,r){const s=new Pt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ec),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Xr,new Ki({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,u=d.material;let f=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,f=!0):(u.color.copy(Ec),f=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(s.up.set(0,a[_],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[_],r.y,r.z)):m===1?(s.up.set(0,0,a[_]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[_],r.z)):(s.up.set(0,a[_],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[_]));const p=this._cubeSize;kn(n,m*p,_>2?p:0,p,p),l.setRenderTarget(n),f&&l.render(d,s),l.render(e,s)}l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;kn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,yr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const o=s.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c)*(l*1.25),{_lodMax:d}=this,u=this._sizeLods[i],f=3*u*(i>d-Yn?i-d+Yn:0),g=4*(this._cubeSize-u);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=d-t,kn(r,f,g,3*u,2*u),n.setRenderTarget(r),n.render(a,yr),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-i,kn(e,f,g,3*u,2*u),n.setRenderTarget(e),n.render(a,yr)}_blur(e,t,i,n){const r=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,n,r){const s=this._renderer,a=this._blurMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const c=this._sizeLods[n];kn(t,3*c*(n>this._lodMax-Yn?n-this._lodMax+Yn:0),4*(this._cubeSize-c),3*c,2*c),s.setRenderTarget(t),s.render(o,yr)}};function hv(e){const t=[],i=[];let n=e;const r=e-Yn+1+av;for(let s=0;s<r;s++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(108),_=new Float32Array(108);for(let p=0;p<d;p++){const M=p%3*2/3-1,A=p>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];g.set(v,18*p);for(let T=0;T<u;T++){const w=h[T*2]*2-1,R=h[T*2+1]*2-1;p===0?dn.set(1,R,w):p===1?dn.set(-w,1,-R):p===2?dn.set(-w,R,1):p===3?dn.set(-1,R,-w):p===4?dn.set(-w,-1,R):dn.set(w,R,-1),dn.toArray(_,(p*u+T)*f)}}const m=new Je;m.setAttribute("position",new pt(g,f)),m.setAttribute("outputDirection",new pt(_,f)),i.push(new Tt(m,null)),n>Yn&&n--}return{lodMeshes:i,sizeLods:t}}function wc(e,t,i){const n=new Yt(e,t,i);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kn(e,t,i,n,r){e.viewport.set(t,i,n,r),e.scissor.set(t,i,n,r)}function uv(e,t,i){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dv(e,t,i){return new ni({name:"SphericalGaussianBlur",defines:{SAMPLES:ov,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Rc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rl=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Wr(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Xr(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const s=new Tt(n,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=yt),new Dd(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}};function fv(e){let t=new WeakMap,i=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===303||f===304)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new rl(g.height);return _.fromEquirectangularTexture(e,u),t.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===303||f===304,_=f===301||f===302;if(g||_){let m=i.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new po(e)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new po(e)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===303?u.mapping=301:f===304&&(u.mapping=302),u}function l(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=i.get(f);g!==void 0&&(i.delete(f),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function pv(e){const t={};function i(n){if(t[n]!==void 0)return t[n];const r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const r=i(n);return r===null&&Ii("WebGLRenderer: "+n+" extension not supported."),r}}}function mv(e,t,i,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,i.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],e.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let A=0,v=M.length;A<v;A+=3){const T=M[A+0],w=M[A+1],R=M[A+2];u.push(T,w,w,R,R,T)}}else{const M=g.array;_=g.version;for(let A=0,v=M.length/3-1;A<v;A+=3){const T=A+0,w=A+1,R=A+2;u.push(T,w,w,R,R,T)}}const m=new(g.count>=65535?Lo:Po)(u,1);m.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function gv(e,t,i){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){e.drawElements(n,u,s,d*a),i.update(u,n,1)}function c(d,u,f){f!==0&&(e.drawElementsInstanced(n,u,s,d*a,f),i.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];i.update(g,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vv(e){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:Ie("WebGLInfo: Unknown draw mode:",a)}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function _v(e,t,i){const n=new WeakMap,r=new ft;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=o.attributes.position.count*A,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*T*4*d),R=new ta(w,v,T,d);R.type=Ui,R.needsUpdate=!0;const y=A*4;for(let N=0;N<d;N++){const I=m[N],D=p[N],X=M[N],L=v*T*4*N;for(let V=0;V<I.count;V++){const J=V*y;f===!0&&(r.fromBufferAttribute(I,V),w[L+J+0]=r.x,w[L+J+1]=r.y,w[L+J+2]=r.z,w[L+J+3]=0),g===!0&&(r.fromBufferAttribute(D,V),w[L+J+4]=r.x,w[L+J+5]=r.y,w[L+J+6]=r.z,w[L+J+7]=0),_===!0&&(r.fromBufferAttribute(X,V),w[L+J+8]=r.x,w[L+J+9]=r.y,w[L+J+10]=r.z,w[L+J+11]=X.itemSize===4?r.w:1)}}u={count:d,texture:R,size:new ee(v,T)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function yv(e,t,i,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:a,dispose:o}}var xv={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Mv(e,t,i,n,r,s){const a=new Yt(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Je;c.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Te([0,2,0,0,2,0],2));const h=new Yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Tt(c,h),u=new Yr(-1,1,1,-1,0,1);let f=null,g=null,_=!1,m,p=null,M=[],A=!1;this.setSize=function(v,T){a.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let w=0;w<M.length;w++){const R=M[w];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;const T=a.width,w=a.height;M.length>0&&o===null&&(o=new Yt(T,w,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new Yt(T,w,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const y=M[R];y.setSize&&y.setSize(T,w)}},this.begin=function(v,T){if(_||v.toneMapping===0&&M.length===0)return!1;if(p=T,T!==null){const w=T.width,R=T.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return A===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=0,!0},this.hasRenderPass=function(){return A},this.end=function(v,T){v.toneMapping=m,_=!0;let w=a,R=o;for(let y=0;y<M.length;y++){const b=M[y];b.enabled!==!1&&(b.render(v,R,w,T),b.needsSwap!==!1&&(w=R,R=R===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},je.getTransfer(f)==="srgb"&&(h.defines.SRGB_TRANSFER="");const y=xv[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Yd=new Rt,mo=new Qn(1,1),Zd=new ta,Jd=new ia,Kd=new Wr,Ic=[],Pc=[],Lc=new Float32Array(16),Uc=new Float32Array(9),Nc=new Float32Array(4);function sr(e,t,i){const n=e[0];if(n<=0||n>0)return e;const r=t*i;let s=Ic[r];if(s===void 0&&(s=new Float32Array(r),Ic[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(s,o)}return s}function wt(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Ct(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function fa(e,t){let i=Pc[t];i===void 0&&(i=new Int32Array(t),Pc[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Sv(e,t){const i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function bv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wt(i,t))return;e.uniform2fv(this.addr,t),Ct(i,t)}}function Tv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(wt(i,t))return;e.uniform3fv(this.addr,t),Ct(i,t)}}function Av(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wt(i,t))return;e.uniform4fv(this.addr,t),Ct(i,t)}}function Ev(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(wt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ct(i,t)}else{if(wt(i,n))return;Nc.set(n),e.uniformMatrix2fv(this.addr,!1,Nc),Ct(i,n)}}function wv(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(wt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ct(i,t)}else{if(wt(i,n))return;Uc.set(n),e.uniformMatrix3fv(this.addr,!1,Uc),Ct(i,n)}}function Cv(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(wt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ct(i,t)}else{if(wt(i,n))return;Lc.set(n),e.uniformMatrix4fv(this.addr,!1,Lc),Ct(i,n)}}function Rv(e,t){const i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Iv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wt(i,t))return;e.uniform2iv(this.addr,t),Ct(i,t)}}function Pv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wt(i,t))return;e.uniform3iv(this.addr,t),Ct(i,t)}}function Lv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wt(i,t))return;e.uniform4iv(this.addr,t),Ct(i,t)}}function Uv(e,t){const i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Nv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wt(i,t))return;e.uniform2uiv(this.addr,t),Ct(i,t)}}function Dv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wt(i,t))return;e.uniform3uiv(this.addr,t),Ct(i,t)}}function Ov(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wt(i,t))return;e.uniform4uiv(this.addr,t),Ct(i,t)}}function Fv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(mo.compareFunction=i.isReversedDepthBuffer()?518:515,s=mo):s=Yd,i.setTexture2D(t||s,r)}function Bv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(t||Jd,r)}function zv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(t||Kd,r)}function Vv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(t||Zd,r)}function Gv(e){switch(e){case 5126:return Sv;case 35664:return bv;case 35665:return Tv;case 35666:return Av;case 35674:return Ev;case 35675:return wv;case 35676:return Cv;case 5124:case 35670:return Rv;case 35667:case 35671:return Iv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Uv;case 36294:return Nv;case 36295:return Dv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Vv}}function kv(e,t){e.uniform1fv(this.addr,t)}function Hv(e,t){const i=sr(t,this.size,2);e.uniform2fv(this.addr,i)}function Wv(e,t){const i=sr(t,this.size,3);e.uniform3fv(this.addr,i)}function Xv(e,t){const i=sr(t,this.size,4);e.uniform4fv(this.addr,i)}function qv(e,t){const i=sr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function Yv(e,t){const i=sr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Zv(e,t){const i=sr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Jv(e,t){e.uniform1iv(this.addr,t)}function Kv(e,t){e.uniform2iv(this.addr,t)}function $v(e,t){e.uniform3iv(this.addr,t)}function Qv(e,t){e.uniform4iv(this.addr,t)}function jv(e,t){e.uniform1uiv(this.addr,t)}function e_(e,t){e.uniform2uiv(this.addr,t)}function t_(e,t){e.uniform3uiv(this.addr,t)}function i_(e,t){e.uniform4uiv(this.addr,t)}function n_(e,t,i){const n=this.cache,r=t.length,s=fa(i,r);wt(n,s)||(e.uniform1iv(this.addr,s),Ct(n,s));let a;this.type===e.SAMPLER_2D_SHADOW?a=mo:a=Yd;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||a,s[o])}function r_(e,t,i){const n=this.cache,r=t.length,s=fa(i,r);wt(n,s)||(e.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)i.setTexture3D(t[a]||Jd,s[a])}function s_(e,t,i){const n=this.cache,r=t.length,s=fa(i,r);wt(n,s)||(e.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)i.setTextureCube(t[a]||Kd,s[a])}function a_(e,t,i){const n=this.cache,r=t.length,s=fa(i,r);wt(n,s)||(e.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)i.setTexture2DArray(t[a]||Zd,s[a])}function o_(e){switch(e){case 5126:return kv;case 35664:return Hv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return Kv;case 35668:case 35672:return $v;case 35669:case 35673:return Qv;case 5125:return jv;case 36294:return e_;case 36295:return t_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return a_}}var l_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gv(t.type)}},c_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o_(t.type)}},h_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(e,t[a.id],i)}}},io=/(\w+)(\])?(\[|\.)?/g;function Dc(e,t){e.seq.push(t),e.map[t.id]=t}function u_(e,t,i){const n=e.name,r=n.length;for(io.lastIndex=0;;){const s=io.exec(n),a=io.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Dc(i,c===void 0?new l_(o,e,t):new c_(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new h_(o),Dc(i,h)),i=h}}}var qs=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s);u_(a,e.getUniformLocation(t,a.name),this)}const n=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}};function Oc(e,t,i){const n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var d_=37297,f_=0;function p_(e,t){const i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var Fc=new Ye;function m_(e){je._getMatrix(Fc,je.workingColorSpace,e);const t=`mat3( ${Fc.elements.map(i=>i.toFixed(4))} )`;switch(je.getTransfer(e)){case Ur:return[t,"LinearTransferOETF"];case Nr:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Bc(e,t,i){const n=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return i.toUpperCase()+`

`+r+`

`+p_(e.getShaderSource(t),a)}else return r}function g_(e,t){const i=m_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var v_={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function __(e,t){const i=v_[t];return i===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Vs=new C;function y_(){return je.getLuminanceCoefficients(Vs),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Vs.x.toFixed(4)}, ${Vs.y.toFixed(4)}, ${Vs.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function M_(e){const t=[];for(const i in e){const n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function S_(e,t){const i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function br(e){return e!==""}function zc(e,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b_=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(e){return e.replace(b_,A_)}var T_=new Map;function A_(e,t){let i=Ke[t];if(i===void 0){const n=T_.get(t);if(n!==void 0)i=Ke[n],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return go(i)}var E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(e){return e.replace(E_,w_)}function w_(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var C_={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function R_(e){return C_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var I_={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function P_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":I_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var L_={302:"ENVMAP_MODE_REFRACTION"};function U_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":L_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N_={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function D_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":N_[e.combine]||"ENVMAP_BLENDING_NONE"}function O_(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function F_(e,t,i,n){const r=e.getContext(),s=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=R_(i),c=P_(i),h=U_(i),d=D_(i),u=O_(i),f=x_(i),g=M_(s),_=r.createProgram();let m,p,M=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(br).join(`
`),p.length>0&&(p+=`
`)):(m=[kc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[kc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==0?"#define TONE_MAPPING":"",i.toneMapping!==0?Ke.tonemapping_pars_fragment:"",i.toneMapping!==0?__("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,g_("linearToOutputTexel",i.outputColorSpace),y_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(br).join(`
`)),a=go(a),a=zc(a,i),a=Vc(a,i),o=go(o),o=zc(o,i),o=Vc(o,i),a=Gc(a),o=Gc(o),i.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=M+m+a,v=M+p+o,T=Oc(r,r.VERTEX_SHADER,A),w=Oc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,T),r.attachShader(_,w),i.index0AttributeName!==void 0?r.bindAttribLocation(_,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(e.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",X=r.getShaderInfoLog(T)||"",L=r.getShaderInfoLog(w)||"",V=D.trim(),J=X.trim(),k=L.trim();let he=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(he=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,_,T,w);else{const Z=Bc(r,T,"vertex"),j=Bc(r,w,"fragment");Ie("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+Z+`
`+j)}else V!==""?fe("WebGLProgram: Program Info Log:",V):(J===""||k==="")&&(q=!1);q&&(I.diagnostics={runnable:he,programLog:V,vertexShader:{log:J,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(T),r.deleteShader(w),y=new qs(r,_),b=S_(r,_)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,d_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=f_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}var B_=0,z_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new V_(e),t.set(e,i)),i}},V_=class{constructor(e){this.id=B_++,this.code=e,this.usedTimes=0}};function G_(e){return e===1030||e===37490||e===36285}function k_(e,t,i,n,r,s){const a=new na,o=new z_,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,b,N,I,D,X){const L=I.fog,V=D.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,he=t.get(y.envMap||J,k),q=he&&he.mapping===306?he.image.height:null,Z=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&fe("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const j=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ge=j!==void 0?j.length:0;let Pe=0;V.morphAttributes.position!==void 0&&(Pe=1),V.morphAttributes.normal!==void 0&&(Pe=2),V.morphAttributes.color!==void 0&&(Pe=3);let lt,Xe,Y,re;if(Z){const At=ci[Z];lt=At.vertexShader,Xe=At.fragmentShader}else{lt=y.vertexShader,Xe=y.fragmentShader;const At=o.getVertexShaderStage(y),at=o.getFragmentShaderStage(y);o.update(y,At,at),Y=At.id,re=at.id}const ae=e.getRenderTarget(),Ue=e.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,de=D.isBatchedMesh===!0,$e=!!y.map,Q=!!y.matcap,$=!!he,le=!!y.aoMap,_e=!!y.lightMap,ye=!!y.bumpMap&&y.wireframe===!1,Le=!!y.normalMap,De=!!y.displacementMap,We=!!y.emissiveMap,qe=!!y.metalnessMap,P=!!y.roughnessMap,mt=y.anisotropy>0,it=y.clearcoat>0,et=y.dispersion>0,E=y.retroreflectivity>0,x=y.iridescence>0,U=y.sheen>0,H=y.transmission>0,te=mt&&!!y.anisotropyMap,oe=it&&!!y.clearcoatMap,pe=it&&!!y.clearcoatNormalMap,B=it&&!!y.clearcoatRoughnessMap,ce=x&&!!y.iridescenceMap,Se=x&&!!y.iridescenceThicknessMap,we=U&&!!y.sheenColorMap,se=U&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,Oe=!!y.specularColorMap,ke=!!y.specularIntensityMap,nt=H&&!!y.transmissionMap,F=H&&!!y.thicknessMap,K=!!y.gradientMap,ie=!!y.alphaMap,Me=y.alphaTest>0,Ce=!!y.alphaHash,ne=!!y.extensions;let ve=0;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ve=e.toneMapping);const ze={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:lt,fragmentShader:Xe,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:de,batchingColor:de&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:ae===null?e.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:Q,envMap:$,envMapMode:$&&he.mapping,envMapCubeUVHeight:q,aoMap:le,lightMap:_e,bumpMap:ye,normalMap:Le,displacementMap:De,emissiveMap:We,normalMapObjectSpace:Le&&y.normalMapType===1,normalMapTangentSpace:Le&&y.normalMapType===0,packedNormalMap:Le&&y.normalMapType===0&&G_(y.normalMap.format),metalnessMap:qe,roughnessMap:P,anisotropy:mt,anisotropyMap:te,clearcoat:it,clearcoatMap:oe,clearcoatNormalMap:pe,clearcoatRoughnessMap:B,dispersion:et,retroreflection:E,iridescence:x,iridescenceMap:ce,iridescenceThicknessMap:Se,sheen:U,sheenColorMap:we,sheenRoughnessMap:se,specularMap:Ee,specularColorMap:Oe,specularIntensityMap:ke,transmission:H,transmissionMap:nt,thicknessMap:F,gradientMap:K,opaque:y.transparent===!1&&y.blending===1&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:Me,alphaHash:Ce,combine:y.combine,mapUv:$e&&g(y.map.channel),aoMapUv:le&&g(y.aoMap.channel),lightMapUv:_e&&g(y.lightMap.channel),bumpMapUv:ye&&g(y.bumpMap.channel),normalMapUv:Le&&g(y.normalMap.channel),displacementMapUv:De&&g(y.displacementMap.channel),emissiveMapUv:We&&g(y.emissiveMap.channel),metalnessMapUv:qe&&g(y.metalnessMap.channel),roughnessMapUv:P&&g(y.roughnessMap.channel),anisotropyMapUv:te&&g(y.anisotropyMap.channel),clearcoatMapUv:oe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:se&&g(y.sheenRoughnessMap.channel),specularMapUv:Ee&&g(y.specularMap.channel),specularColorMapUv:Oe&&g(y.specularColorMap.channel),specularIntensityMapUv:ke&&g(y.specularIntensityMap.channel),transmissionMapUv:nt&&g(y.transmissionMap.channel),thicknessMapUv:F&&g(y.thicknessMap.channel),alphaMapUv:ie&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Le||mt),vertexNormals:!!V.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&($e||ie),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&Le===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ue,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:Pe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:ve,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)==="srgb",decodeVideoTextureEmissive:We&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===2,flipSided:y.side===1,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ne&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&y.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)b.push(N),b.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(p(b,y),M(b,y),b.push(e.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){const b=f[y.type];let N;if(b){const I=ci[b];N=ld.clone(I.uniforms)}else N=y.uniforms;return N}function v(y,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new F_(e,b,y,r),c.push(N),h.set(b,N)),N}function T(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:R}}function H_(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function r(a,o,l){e.get(a)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function W_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Hc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Wc(){const e=[];let t=0;const i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let M=e[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},e[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function l(u,f,g,_,m,p,M){M.reversedDepth===!0&&(m=-m);const A=o(u,f,g,_,m,p);g.transmission>0?n.push(A):g.transparent===!0?r.push(A):i.push(A)}function c(u,f,g,_,m,p){const M=o(u,f,g,_,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?r.unshift(M):i.unshift(M)}function h(u,f){i.length>1&&i.sort(u||W_),n.length>1&&n.sort(f||Hc),r.length>1&&r.sort(f||Hc)}function d(){for(let u=t,f=e.length;u<f;u++){const g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function X_(){let e=new WeakMap;function t(n,r){const s=e.get(n);let a;return s===void 0?(a=new Wc,e.set(n,[a])):r>=s.length?(a=new Wc,s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function q_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new C,color:new xe};break;case"SpotLight":i={position:new C,direction:new C,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new C,halfWidth:new C,halfHeight:new C}}return e[t.id]=i,i}}}function Y_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=i,i}}}var Z_=0;function J_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function K_(e){const t=new q_,i=Y_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new He,a=new He;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,A=0,v=0,T=0,w=0,R=0,y=0,b=0,N=0;c.sort(J_);for(let D=0,X=c.length;D<X;D++){const L=c[D],V=L.color,J=L.intensity,k=L.distance;let he=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===1030?he=L.shadow.map.texture:he=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=V.r*J,d+=V.g*J,u+=V.b*J;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],J);N++}else if(L.isSunLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,j=i.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=he;const Ge=Z.getViewportCount();for(let Pe=0;Pe<Ge;Pe++)n.sunShadowMatrix[_+Pe]=Z.getMatrix(Pe),n.sunShadowCascade[_+Pe]=Z._cascadeData[Pe];_+=Ge,g++}n.sun[f]=q,f++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,j=i.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=he,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=q,m++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(V).multiplyScalar(J),q.distance=k,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[M]=q;const Z=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,Z.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[M]=Z.matrix,L.castShadow){const j=i.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=he,R++}M++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(V).multiplyScalar(J),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=q,A++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const Z=L.shadow,j=i.get(L);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=he,n.pointShadowMatrix[p]=L.shadow.matrix,w++}n.point[p]=q,p++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(J),q.groundColor.copy(L.groundColor).multiplyScalar(J),n.hemi[v]=q,v++}}A>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==A||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==w||I.numSpotShadows!==R||I.numSpotMaps!==y||I.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=N,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=M,I.rectAreaLength=A,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=w,I.numSpotShadows=R,I.numSpotMaps=y,I.numLightProbes=N,n.version=Z_++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){const v=c[M];if(v.isSunLight){const T=n.sun[d];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),d++}else if(v.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),u++}else if(v.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Xc(e){const t=new K_(e),i=[],n=[],r=[];function s(u){d.camera=u,i.length=0,n.length=0,r.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){t.setup(i)}function h(u){t.setupView(i,u)}const d={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $_(e){let t=new WeakMap;function i(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Xc(e),t.set(r,[o])):s>=a.length?(o=new Xc(e),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,e0=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],t0=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],qc=new He,xr=new C,no=new C;function i0(e,t,i){let n=new gn;const r=new ee,s=new ee,a=new ft,o=new Jo,l=new Ko,c={},h=i.maxTextureSize,d={0:1,1:0,2:2},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Q_,fragmentShader:j_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(w,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===2&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const b=e.getRenderTarget(),N=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),D=e.state;D.setBlending(0),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const X=p!==this.type;X&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=w.length;L<V;L++){const J=w[L],k=J.shadow;if(k===void 0){fe("WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const he=k.getFrameExtents();r.multiply(he),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/he.x),r.x=s.x*he.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/he.y),r.y=s.y*he.y,k.mapSize.y=s.y));const q=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===3){if(J.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Yt(r.x,r.y,{format:Ir,type:Ni,minFilter:yt,magFilter:yt,generateMipmaps:!1}),k.map.texture.name=J.name+".shadowMap",k.map.depthTexture=new Qn(r.x,r.y,Ui),k.map.depthTexture.name=J.name+".shadowMapDepth",k.map.depthTexture.format=Jn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Et,k.map.depthTexture.magFilter=Et}else J.isPointLight?(k.map=new rl(r.x),k.map.depthTexture=new gu(r.x,Li)):(k.map=new Yt(r.x,r.y),k.map.depthTexture=new Qn(r.x,r.y,Li)),k.map.depthTexture.name=J.name+".shadowMap",k.map.depthTexture.format=Jn,this.type===1?(k.map.depthTexture.compareFunction=q?518:515,k.map.depthTexture.minFilter=yt,k.map.depthTexture.magFilter=yt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Et,k.map.depthTexture.magFilter=Et);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);const Z=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();J.isPointLight!==!0&&k.updateMatrices(J,y);for(let j=0;j<Z;j++){const Ge=k.getCamera(j);if(J.isPointLight){const Pe=k.camera,lt=k.matrix,Xe=J.distance||Pe.far;Xe!==Pe.far&&(Pe.far=Xe,Pe.updateProjectionMatrix()),xr.setFromMatrixPosition(J.matrixWorld),Pe.position.copy(xr),no.copy(Pe.position),no.add(e0[j]),Pe.up.copy(t0[j]),Pe.lookAt(no),Pe.updateMatrixWorld(),lt.makeTranslation(-xr.x,-xr.y,-xr.z),qc.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(qc,Pe.coordinateSystem,Pe.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,j),e.clear();else{j===0&&(e.setRenderTarget(k.map),e.clear());const Pe=k.getViewport(j);a.set(s.x*Pe.x,s.y*Pe.y,s.x*Pe.z,s.y*Pe.w),D.viewport(a)}n=k.getFrustum(j),v(R,y,Ge,J,this.type)}k.isPointLightShadow!==!0&&this.type===3&&M(k,y),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(b,N,I)};function M(w,R){const y=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Yt(r.x,r.y,{format:Ir,type:Ni}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(R,null,y,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(R,null,y,f,_,null)}function A(w,R,y,b){let N=null;const I=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)N=I;else if(N=y.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=N.uuid,X=R.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let V=L[X];V===void 0&&(V=N.clone(),L[X]=V,R.addEventListener("dispose",T)),N=V}if(N.visible=R.visible,N.wireframe=R.wireframe,b===3?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:d[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const D=e.properties.get(N);D.light=y}return N}function v(w,R,y,b,N){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===3)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);const D=t.update(w),X=w.material;if(Array.isArray(X)){const L=D.groups;for(let V=0,J=L.length;V<J;V++){const k=L[V],he=X[k.materialIndex];if(he&&he.visible){const q=A(w,he,b,N);w.onBeforeShadow(e,w,R,y,D,q,k),e.renderBufferDirect(y,null,D,q,w,k),w.onAfterShadow(e,w,R,y,D,q,k)}}}else if(X.visible){const L=A(w,X,b,N);w.onBeforeShadow(e,w,R,y,D,L,null),e.renderBufferDirect(y,null,D,L,w,null),w.onAfterShadow(e,w,R,y,D,L,null)}}const I=w.children;for(let D=0,X=I.length;D<X;D++)v(I[D],R,y,b,N)}function T(w){w.target.removeEventListener("dispose",T);for(const R in c){const y=c[R],b=w.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function n0(e,t){function i(){let F=!1;const K=new ft;let ie=null;const Me=new ft(0,0,0,0);return{setMask:function(Ce){ie!==Ce&&!F&&(e.colorMask(Ce,Ce,Ce,Ce),ie=Ce)},setLocked:function(Ce){F=Ce},setClear:function(Ce,ne,ve,ze,At){At===!0&&(Ce*=ze,ne*=ze,ve*=ze),K.set(Ce,ne,ve,ze),Me.equals(K)===!1&&(e.clearColor(Ce,ne,ve,ze),Me.copy(K))},reset:function(){F=!1,ie=null,Me.set(-1,0,0,0)}}}function n(){let F=!1,K=!1,ie=null,Me=null,Ce=null;return{setReversed:function(ne){if(K!==ne){const ve=t.get("EXT_clip_control");ne?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),K=ne;const ze=Ce;Ce=null,this.setClear(ze)}},getReversed:function(){return K},setTest:function(ne){ne?ae(e.DEPTH_TEST):Ue(e.DEPTH_TEST)},setMask:function(ne){ie!==ne&&!F&&(e.depthMask(ne),ie=ne)},setFunc:function(ne){if(K&&(ne=Xf[ne]),Me!==ne){switch(ne){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Me=ne}},setLocked:function(ne){F=ne},setClear:function(ne){Ce!==ne&&(Ce=ne,K&&(ne=1-ne),e.clearDepth(ne))},reset:function(){F=!1,ie=null,Me=null,Ce=null,K=!1}}}function r(){let F=!1,K=null,ie=null,Me=null,Ce=null,ne=null,ve=null,ze=null,At=null;return{setTest:function(at){F||(at?ae(e.STENCIL_TEST):Ue(e.STENCIL_TEST))},setMask:function(at){K!==at&&!F&&(e.stencilMask(at),K=at)},setFunc:function(at,di,_i){(ie!==at||Me!==di||Ce!==_i)&&(e.stencilFunc(at,di,_i),ie=at,Me=di,Ce=_i)},setOp:function(at,di,_i){(ne!==at||ve!==di||ze!==_i)&&(e.stencilOp(at,di,_i),ne=at,ve=di,ze=_i)},setLocked:function(at){F=at},setClear:function(at){At!==at&&(e.clearStencil(at),At=at)},reset:function(){F=!1,K=null,ie=null,Me=null,Ce=null,ne=null,ve=null,ze=null,At=null}}}const s=new i,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,A=null,v=null,T=null,w=null,R=null,y=new xe(0,0,0),b=0,N=!1,I=null,D=null,X=null,L=null,V=null;const J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,he=0;const q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=he>=1):q.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=he>=2);let Z=null,j={};const Ge=e.getParameter(e.SCISSOR_BOX),Pe=e.getParameter(e.VIEWPORT),lt=new ft().fromArray(Ge),Xe=new ft().fromArray(Pe);function Y(F,K,ie,Me){const Ce=new Uint8Array(4),ne=e.createTexture();e.bindTexture(F,ne),e.texParameteri(F,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(F,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ve=0;ve<ie;ve++)F===e.TEXTURE_3D||F===e.TEXTURE_2D_ARRAY?e.texImage3D(K,0,e.RGBA,1,1,Me,0,e.RGBA,e.UNSIGNED_BYTE,Ce):e.texImage2D(K+ve,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ce);return ne}const re={};re[e.TEXTURE_2D]=Y(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=Y(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[e.TEXTURE_2D_ARRAY]=Y(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=Y(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(e.DEPTH_TEST),a.setFunc(3),ye(!1),Le(1),ae(e.CULL_FACE),le(0);function ae(F){h[F]!==!0&&(e.enable(F),h[F]=!0)}function Ue(F){h[F]!==!1&&(e.disable(F),h[F]=!1)}function Fe(F,K){return u[F]!==K?(e.bindFramebuffer(F,K),u[F]=K,F===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=K),F===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=K),!0):!1}function de(F,K){let ie=g,Me=!1;if(F){ie=f.get(K),ie===void 0&&(ie=[],f.set(K,ie));const Ce=F.textures;if(ie.length!==Ce.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let ne=0,ve=Ce.length;ne<ve;ne++)ie[ne]=e.COLOR_ATTACHMENT0+ne;ie.length=Ce.length,Me=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,Me=!0);Me&&e.drawBuffers(ie)}function $e(F){return _!==F?(e.useProgram(F),_=F,!0):!1}const Q={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};Q[103]=e.MIN,Q[104]=e.MAX;const $={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(F,K,ie,Me,Ce,ne,ve,ze,At,at){if(F===0){m===!0&&(Ue(e.BLEND),m=!1);return}if(m===!1&&(ae(e.BLEND),m=!0),F!==5){if(F!==p||at!==N){if((M!==100||T!==100)&&(e.blendEquation(e.FUNC_ADD),M=100,T=100),at)switch(F){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ie("WebGLState: Invalid blending: ",F)}else switch(F){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",F)}A=null,v=null,w=null,R=null,y.set(0,0,0),b=0,p=F,N=at}return}Ce=Ce||K,ne=ne||ie,ve=ve||Me,(K!==M||Ce!==T)&&(e.blendEquationSeparate(Q[K],Q[Ce]),M=K,T=Ce),(ie!==A||Me!==v||ne!==w||ve!==R)&&(e.blendFuncSeparate($[ie],$[Me],$[ne],$[ve]),A=ie,v=Me,w=ne,R=ve),(ze.equals(y)===!1||At!==b)&&(e.blendColor(ze.r,ze.g,ze.b,At),y.copy(ze),b=At),p=F,N=!1}function _e(F,K){F.side===2?Ue(e.CULL_FACE):ae(e.CULL_FACE);let ie=F.side===1;K&&(ie=!ie),ye(ie),F.blending===1&&F.transparent===!1?le(0):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Me=F.stencilWrite;o.setTest(Me),Me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),We(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(e.SAMPLE_ALPHA_TO_COVERAGE):Ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(F){I!==F&&(F?e.frontFace(e.CW):e.frontFace(e.CCW),I=F)}function Le(F){F!==0?(ae(e.CULL_FACE),F!==D&&(F===1?e.cullFace(e.BACK):F===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ue(e.CULL_FACE),D=F}function De(F){F!==X&&(k&&e.lineWidth(F),X=F)}function We(F,K,ie){F?(ae(e.POLYGON_OFFSET_FILL),(L!==K||V!==ie)&&(L=K,V=ie,a.getReversed()&&(K=-K),e.polygonOffset(K,ie))):Ue(e.POLYGON_OFFSET_FILL)}function qe(F){F?ae(e.SCISSOR_TEST):Ue(e.SCISSOR_TEST)}function P(F){F===void 0&&(F=e.TEXTURE0+J-1),Z!==F&&(e.activeTexture(F),Z=F)}function mt(F,K,ie){ie===void 0&&(Z===null?ie=e.TEXTURE0+J-1:ie=Z);let Me=j[ie];Me===void 0&&(Me={type:void 0,texture:void 0},j[ie]=Me),(Me.type!==F||Me.texture!==K)&&(Z!==ie&&(e.activeTexture(ie),Z=ie),e.bindTexture(F,K||re[F]),Me.type=F,Me.texture=K)}function it(){const F=j[Z];F!==void 0&&F.type!==void 0&&(e.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{e.compressedTexImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function x(){try{e.texSubImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function U(){try{e.texSubImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function te(){try{e.compressedTexSubImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function oe(){try{e.texStorage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function pe(){try{e.texStorage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function B(){try{e.texImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function ce(){try{e.texImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function Se(F){return d[F]!==void 0?d[F]:e.getParameter(F)}function we(F,K){d[F]!==K&&(e.pixelStorei(F,K),d[F]=K)}function se(F){lt.equals(F)===!1&&(e.scissor(F.x,F.y,F.z,F.w),lt.copy(F))}function Ee(F){Xe.equals(F)===!1&&(e.viewport(F.x,F.y,F.z,F.w),Xe.copy(F))}function Oe(F,K){let ie=c.get(K);ie===void 0&&(ie=new WeakMap,c.set(K,ie));let Me=ie.get(F);Me===void 0&&(Me=e.getUniformBlockIndex(K,F.name),ie.set(F,Me))}function ke(F,K){const ie=c.get(K).get(F);l.get(K)!==ie&&(e.uniformBlockBinding(K,ie,F.__bindingPointIndex),l.set(K,ie))}function nt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,j={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,A=null,v=null,T=null,w=null,R=null,y=new xe(0,0,0),b=0,N=!1,I=null,D=null,X=null,L=null,V=null,lt.set(0,0,e.canvas.width,e.canvas.height),Xe.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Ue,bindFramebuffer:Fe,drawBuffers:de,useProgram:$e,setBlending:le,setMaterial:_e,setFlipSided:ye,setCullFace:Le,setLineWidth:De,setPolygonOffset:We,setScissorTest:qe,activeTexture:P,bindTexture:mt,unbindTexture:it,compressedTexImage2D:et,compressedTexImage3D:E,texImage2D:B,texImage3D:ce,pixelStorei:we,getParameter:Se,updateUBOMapping:Oe,uniformBlockBinding:ke,texStorage2D:oe,texStorage3D:pe,texSubImage2D:x,texSubImage3D:U,compressedTexSubImage2D:H,compressedTexSubImage3D:te,scissor:se,viewport:Ee,reset:nt}}function r0(e,t,i,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return g?new OffscreenCanvas(E,x):Dr("canvas")}function m(E,x,U){let H=1;const te=et(E);if((te.width>U||te.height>U)&&(H=U/Math.max(te.width,te.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const oe=Math.floor(H*te.width),pe=Math.floor(H*te.height);u===void 0&&(u=_(oe,pe));const B=x?_(oe,pe):u;return B.width=oe,B.height=pe,B.getContext("2d").drawImage(E,0,0,oe,pe),fe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+pe+")."),B}else return"data"in E&&fe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function p(E){return E.generateMipmaps}function M(E){e.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(E,x,U,H,te,oe=!1){if(E!==null){if(e[E]!==void 0)return e[E];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pe;H&&(pe=t.get("EXT_texture_norm16"),pe||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=x;if(x===e.RED&&(U===e.FLOAT&&(B=e.R32F),U===e.HALF_FLOAT&&(B=e.R16F),U===e.UNSIGNED_BYTE&&(B=e.R8),U===e.UNSIGNED_SHORT&&pe&&(B=pe.R16_EXT),U===e.SHORT&&pe&&(B=pe.R16_SNORM_EXT)),x===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.R8UI),U===e.UNSIGNED_SHORT&&(B=e.R16UI),U===e.UNSIGNED_INT&&(B=e.R32UI),U===e.BYTE&&(B=e.R8I),U===e.SHORT&&(B=e.R16I),U===e.INT&&(B=e.R32I)),x===e.RG&&(U===e.FLOAT&&(B=e.RG32F),U===e.HALF_FLOAT&&(B=e.RG16F),U===e.UNSIGNED_BYTE&&(B=e.RG8),U===e.UNSIGNED_SHORT&&pe&&(B=pe.RG16_EXT),U===e.SHORT&&pe&&(B=pe.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RG8UI),U===e.UNSIGNED_SHORT&&(B=e.RG16UI),U===e.UNSIGNED_INT&&(B=e.RG32UI),U===e.BYTE&&(B=e.RG8I),U===e.SHORT&&(B=e.RG16I),U===e.INT&&(B=e.RG32I)),x===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGB8UI),U===e.UNSIGNED_SHORT&&(B=e.RGB16UI),U===e.UNSIGNED_INT&&(B=e.RGB32UI),U===e.BYTE&&(B=e.RGB8I),U===e.SHORT&&(B=e.RGB16I),U===e.INT&&(B=e.RGB32I)),x===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),U===e.UNSIGNED_INT&&(B=e.RGBA32UI),U===e.BYTE&&(B=e.RGBA8I),U===e.SHORT&&(B=e.RGBA16I),U===e.INT&&(B=e.RGBA32I)),x===e.RGB&&(U===e.UNSIGNED_SHORT&&pe&&(B=pe.RGB16_EXT),U===e.SHORT&&pe&&(B=pe.RGB16_SNORM_EXT),U===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),U===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),x===e.RGBA){const ce=oe?Ur:je.getTransfer(te);U===e.FLOAT&&(B=e.RGBA32F),U===e.HALF_FLOAT&&(B=e.RGBA16F),U===e.UNSIGNED_BYTE&&(B=ce==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT&&pe&&(B=pe.RGBA16_EXT),U===e.SHORT&&pe&&(B=pe.RGBA16_SNORM_EXT),U===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function T(E,x){let U;return E?x===null||x===1014||x===1020?U=e.DEPTH24_STENCIL8:x===1015?U=e.DEPTH32F_STENCIL8:x===1012&&(U=e.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===1014||x===1020?U=e.DEPTH_COMPONENT24:x===1015?U=e.DEPTH_COMPONENT32F:x===1012&&(U=e.DEPTH_COMPONENT16),U}function w(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==1003&&E.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){const x=E.target;x.removeEventListener("dispose",R),b(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function y(E){const x=E.target;x.removeEventListener("dispose",y),I(x)}function b(E){const x=n.get(E);if(x.__webglInit===void 0)return;const U=E.source,H=f.get(U);if(H){const te=H[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(E),Object.keys(H).length===0&&f.delete(U)}n.remove(E)}function N(E){const x=n.get(E);e.deleteTexture(x.__webglTexture);const U=E.source,H=f.get(U);delete H[x.__cacheKey],a.memory.textures--}function I(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let te=0;te<x.__webglFramebuffer[H].length;te++)e.deleteFramebuffer(x.__webglFramebuffer[H][te]);else e.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)e.deleteFramebuffer(x.__webglFramebuffer[H]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=E.textures;for(let H=0,te=U.length;H<te;H++){const oe=n.get(U[H]);oe.__webglTexture&&(e.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(U[H])}n.remove(E)}let D=0;function X(){D=0}function L(){return D}function V(E){D=E}function J(){const E=D;return E>=r.maxTextures&&fe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function k(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function he(E,x){const U=n.get(E);if(E.isVideoTexture&&mt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const H=E.image;if(H===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(U,E,x);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+x)}function q(E,x){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Ue(U,E,x);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+x)}function Z(E,x){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Ue(U,E,x);return}i.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+x)}function j(E,x){const U=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Fe(U,E,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+x)}const Ge={[Cr]:e.REPEAT,[qt]:e.CLAMP_TO_EDGE,[Rr]:e.MIRRORED_REPEAT},Pe={[Et]:e.NEAREST,[vo]:e.NEAREST_MIPMAP_NEAREST,[_o]:e.NEAREST_MIPMAP_LINEAR,[yt]:e.LINEAR,[yo]:e.LINEAR_MIPMAP_NEAREST,[tr]:e.LINEAR_MIPMAP_LINEAR},lt={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Xe(E,x){if(x.type===1015&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===1006||x.magFilter===1007||x.magFilter===1005||x.magFilter===1008||x.minFilter===1006||x.minFilter===1007||x.minFilter===1005||x.minFilter===1008)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Ge[x.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Ge[x.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Ge[x.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Pe[x.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Pe[x.minFilter]),x.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Y(E,x){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));const H=x.source;let te=f.get(H);te===void 0&&(te={},f.set(H,te));const oe=k(x);if(oe!==E.__cacheKey){te[oe]===void 0&&(te[oe]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,U=!0),te[oe].usedTimes++;const pe=te[E.__cacheKey];pe!==void 0&&(te[E.__cacheKey].usedTimes--,pe.usedTimes===0&&N(x)),E.__cacheKey=oe,E.__webglTexture=te[oe].texture}return U}function re(E,x,U){return Math.floor(Math.floor(E/U)/x)}function ae(E,x,U,H){const oe=E.updateRanges;if(oe.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,U,H,x.data);else{oe.sort((we,se)=>we.start-se.start);let pe=0;for(let we=1;we<oe.length;we++){const se=oe[pe],Ee=oe[we],Oe=se.start+se.count,ke=re(Ee.start,x.width,4),nt=re(se.start,x.width,4);Ee.start<=Oe+1&&ke===nt&&re(Ee.start+Ee.count-1,x.width,4)===ke?se.count=Math.max(se.count,Ee.start+Ee.count-se.start):(++pe,oe[pe]=Ee)}oe.length=pe+1;const B=i.getParameter(e.UNPACK_ROW_LENGTH),ce=i.getParameter(e.UNPACK_SKIP_PIXELS),Se=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let we=0,se=oe.length;we<se;we++){const Ee=oe[we],Oe=Math.floor(Ee.start/4),ke=Math.ceil(Ee.count/4),nt=Oe%x.width,F=Math.floor(Oe/x.width),K=ke,ie=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(e.UNPACK_SKIP_ROWS,F),i.texSubImage2D(e.TEXTURE_2D,0,nt,F,K,ie,U,H,x.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,B),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(e.UNPACK_SKIP_ROWS,Se)}}function Ue(E,x,U){let H=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=e.TEXTURE_3D);const te=Y(E,x),oe=x.source;i.bindTexture(H,E.__webglTexture,e.TEXTURE0+U);const pe=n.get(oe);if(oe.version!==pe.__version||te===!0){if(i.activeTexture(e.TEXTURE0+U),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){const K=je.getPrimaries(je.workingColorSpace),ie=x.colorSpace===""?null:je.getPrimaries(x.colorSpace),Me=x.colorSpace===""||K===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let B=m(x.image,!1,r.maxTextureSize);B=it(x,B);const ce=s.convert(x.format,x.colorSpace),Se=s.convert(x.type);let we=v(x.internalFormat,ce,Se,x.normalized,x.colorSpace,x.isVideoTexture);Xe(H,x);let se;const Ee=x.mipmaps,Oe=x.isVideoTexture!==!0,ke=pe.__version===void 0||te===!0,nt=oe.dataReady,F=w(x,B);if(x.isDepthTexture)we=T(x.format===To,x.type),ke&&(Oe?i.texStorage2D(e.TEXTURE_2D,1,we,B.width,B.height):i.texImage2D(e.TEXTURE_2D,0,we,B.width,B.height,0,ce,Se,null));else if(x.isDataTexture)if(Ee.length>0){Oe&&ke&&i.texStorage2D(e.TEXTURE_2D,F,we,Ee[0].width,Ee[0].height);for(let K=0,ie=Ee.length;K<ie;K++)se=Ee[K],Oe?nt&&i.texSubImage2D(e.TEXTURE_2D,K,0,0,se.width,se.height,ce,Se,se.data):i.texImage2D(e.TEXTURE_2D,K,we,se.width,se.height,0,ce,Se,se.data);x.generateMipmaps=!1}else Oe?(ke&&i.texStorage2D(e.TEXTURE_2D,F,we,B.width,B.height),nt&&ae(x,B,ce,Se)):i.texImage2D(e.TEXTURE_2D,0,we,B.width,B.height,0,ce,Se,B.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&ke&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,we,Ee[0].width,Ee[0].height,B.depth);for(let K=0,ie=Ee.length;K<ie;K++)if(se=Ee[K],x.format!==1023)if(ce!==null)if(Oe){if(nt)if(x.layerUpdates.size>0){const Me=fo(se.width,se.height,x.format,x.type);for(const Ce of x.layerUpdates){const ne=se.data.subarray(Ce*Me/se.data.BYTES_PER_ELEMENT,(Ce+1)*Me/se.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,Ce,se.width,se.height,1,ce,ne)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,B.depth,ce,se.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,we,se.width,se.height,B.depth,0,se.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?nt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,B.depth,ce,Se,se.data):i.texImage3D(e.TEXTURE_2D_ARRAY,K,we,se.width,se.height,B.depth,0,ce,Se,se.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Oe&&ke&&i.texStorage2D(e.TEXTURE_2D,F,we,Ee[0].width,Ee[0].height);for(let K=0,ie=Ee.length;K<ie;K++)se=Ee[K],x.format!==1023?ce!==null?Oe?nt&&i.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,se.width,se.height,ce,se.data):i.compressedTexImage2D(e.TEXTURE_2D,K,we,se.width,se.height,0,se.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?nt&&i.texSubImage2D(e.TEXTURE_2D,K,0,0,se.width,se.height,ce,Se,se.data):i.texImage2D(e.TEXTURE_2D,K,we,se.width,se.height,0,ce,Se,se.data)}else if(x.isDataArrayTexture)if(Oe){if(ke&&i.texStorage3D(e.TEXTURE_2D_ARRAY,F,we,B.width,B.height,B.depth),nt)if(x.layerUpdates.size>0){const K=fo(B.width,B.height,x.format,x.type);for(const ie of x.layerUpdates){const Me=B.data.subarray(ie*K/B.data.BYTES_PER_ELEMENT,(ie+1)*K/B.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ie,B.width,B.height,1,ce,Se,Me)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ce,Se,B.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,we,B.width,B.height,B.depth,0,ce,Se,B.data);else if(x.isData3DTexture)Oe?(ke&&i.texStorage3D(e.TEXTURE_3D,F,we,B.width,B.height,B.depth),nt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ce,Se,B.data)):i.texImage3D(e.TEXTURE_3D,0,we,B.width,B.height,B.depth,0,ce,Se,B.data);else if(x.isFramebufferTexture){if(ke)if(Oe)i.texStorage2D(e.TEXTURE_2D,F,we,B.width,B.height);else{let K=B.width,ie=B.height;for(let Me=0;Me<F;Me++)i.texImage2D(e.TEXTURE_2D,Me,we,K,ie,0,ce,Se,null),K>>=1,ie>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const K=e.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),B.parentNode!==K){K.appendChild(B),d.add(x),K.onpaint=ie=>{const Me=ie.changedElements;for(const Ce of d)Me.includes(Ce.image)&&(Ce.needsUpdate=!0)},K.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,B);else{const Me=e.RGBA,Ce=e.RGBA,ne=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Me,Ce,ne,B)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Oe&&ke){const K=et(Ee[0]);i.texStorage2D(e.TEXTURE_2D,F,we,K.width,K.height)}for(let K=0,ie=Ee.length;K<ie;K++)se=Ee[K],Oe?nt&&i.texSubImage2D(e.TEXTURE_2D,K,0,0,ce,Se,se):i.texImage2D(e.TEXTURE_2D,K,we,ce,Se,se);x.generateMipmaps=!1}else if(Oe){if(ke){const K=et(B);i.texStorage2D(e.TEXTURE_2D,F,we,K.width,K.height)}nt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,Se,B)}else i.texImage2D(e.TEXTURE_2D,0,we,ce,Se,B);p(x)&&M(H),pe.__version=oe.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Fe(E,x,U){if(x.image.length!==6)return;const H=Y(E,x),te=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+U);const oe=n.get(te);if(te.version!==oe.__version||H===!0){i.activeTexture(e.TEXTURE0+U);const pe=je.getPrimaries(je.workingColorSpace),B=x.colorSpace===""?null:je.getPrimaries(x.colorSpace),ce=x.colorSpace===""||pe===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,we=x.image[0]&&x.image[0].isDataTexture,se=[];for(let ne=0;ne<6;ne++)!Se&&!we?se[ne]=m(x.image[ne],!0,r.maxCubemapSize):se[ne]=we?x.image[ne].image:x.image[ne],se[ne]=it(x,se[ne]);const Ee=se[0],Oe=s.convert(x.format,x.colorSpace),ke=s.convert(x.type),nt=v(x.internalFormat,Oe,ke,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,K=oe.__version===void 0||H===!0,ie=te.dataReady;let Me=w(x,Ee);Xe(e.TEXTURE_CUBE_MAP,x);let Ce;if(Se){F&&K&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Me,nt,Ee.width,Ee.height);for(let ne=0;ne<6;ne++){Ce=se[ne].mipmaps;for(let ve=0;ve<Ce.length;ve++){const ze=Ce[ve];x.format!==1023?Oe!==null?F?ie&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,ze.width,ze.height,Oe,ze.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,nt,ze.width,ze.height,0,ze.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,ze.width,ze.height,Oe,ke,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,nt,ze.width,ze.height,0,Oe,ke,ze.data)}}}else{if(Ce=x.mipmaps,F&&K){Ce.length>0&&Me++;const ne=et(se[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Me,nt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(we){F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,se[ne].width,se[ne].height,Oe,ke,se[ne].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,nt,se[ne].width,se[ne].height,0,Oe,ke,se[ne].data);for(let ve=0;ve<Ce.length;ve++){const ze=Ce[ve].image[ne].image;F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,ze.width,ze.height,Oe,ke,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,nt,ze.width,ze.height,0,Oe,ke,ze.data)}}else{F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Oe,ke,se[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,nt,Oe,ke,se[ne]);for(let ve=0;ve<Ce.length;ve++){const ze=Ce[ve];F?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Oe,ke,ze.image[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,nt,Oe,ke,ze.image[ne])}}}p(x)&&M(e.TEXTURE_CUBE_MAP),oe.__version=te.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function de(E,x,U,H,te,oe){const pe=s.convert(U.format,U.colorSpace),B=s.convert(U.type),ce=v(U.internalFormat,pe,B,U.normalized,U.colorSpace),Se=n.get(x),we=n.get(U);if(we.__renderTarget=x,!Se.__hasExternalTextures){const se=Math.max(1,x.width>>oe),Ee=Math.max(1,x.height>>oe);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?i.texImage3D(te,oe,ce,se,Ee,x.depth,0,pe,B,null):i.texImage2D(te,oe,ce,se,Ee,0,pe,B,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),P(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,te,we.__webglTexture,0,qe(x)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,te,we.__webglTexture,oe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function $e(E,x,U){if(e.bindRenderbuffer(e.RENDERBUFFER,E),x.depthBuffer){const H=x.depthTexture,te=H&&H.isDepthTexture?H.type:null,oe=T(x.stencilBuffer,te),pe=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;P(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qe(x),oe,x.width,x.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,qe(x),oe,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,oe,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,E)}else{const H=x.textures;for(let te=0;te<H.length;te++){const oe=H[te],pe=s.convert(oe.format,oe.colorSpace),B=s.convert(oe.type),ce=v(oe.internalFormat,pe,B,oe.normalized,oe.colorSpace);P(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qe(x),ce,x.width,x.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,qe(x),ce,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ce,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Q(E,x,U){const H=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=n.get(x.depthTexture);if(te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if(te.__webglInit===void 0&&(te.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,te.__webglTexture),Xe(e.TEXTURE_CUBE_MAP,x.depthTexture);const Se=s.convert(x.depthTexture.format),we=s.convert(x.depthTexture.type);let se;x.depthTexture.format===1026?se=e.DEPTH_COMPONENT24:x.depthTexture.format===1027&&(se=e.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,se,x.width,x.height,0,Se,we,null)}}else he(x.depthTexture,0);const oe=te.__webglTexture,pe=qe(x),B=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,ce=x.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===1026)P(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,B,oe,0,pe):e.framebufferTexture2D(e.FRAMEBUFFER,ce,B,oe,0);else if(x.depthTexture.format===1027)P(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,B,oe,0,pe):e.framebufferTexture2D(e.FRAMEBUFFER,ce,B,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(E){const x=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",te)};H.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=H}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let H=0;H<6;H++)Q(x.__webglFramebuffer[H],E,H);else{const H=E.texture.mipmaps;H&&H.length>0?Q(x.__webglFramebuffer[0],E,0):Q(x.__webglFramebuffer,E,0)}else if(U){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=e.createRenderbuffer(),$e(x.__webglDepthbuffer[H],E,!1);else{const te=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,oe)}}else{const H=E.texture.mipmaps;if(H&&H.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),$e(x.__webglDepthbuffer,E,!1);else{const te=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,oe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function le(E,x,U){const H=n.get(E);x!==void 0&&de(H.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&$(E)}function _e(E){const x=E.texture,U=n.get(E),H=n.get(x);E.addEventListener("dispose",y);const te=E.textures,oe=E.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=x.version,a.memory.textures++),oe){U.__webglFramebuffer=[];for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[B]=[];for(let ce=0;ce<x.mipmaps.length;ce++)U.__webglFramebuffer[B][ce]=e.createFramebuffer()}else U.__webglFramebuffer[B]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let B=0;B<x.mipmaps.length;B++)U.__webglFramebuffer[B]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(pe)for(let B=0,ce=te.length;B<ce;B++){const Se=n.get(te[B]);Se.__webglTexture===void 0&&(Se.__webglTexture=e.createTexture(),a.memory.textures++)}if(E.samples>0&&P(E)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let B=0;B<te.length;B++){const ce=te[B];U.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[B]);const Se=s.convert(ce.format,ce.colorSpace),we=s.convert(ce.type),se=v(ce.internalFormat,Se,we,ce.normalized,ce.colorSpace,E.isXRRenderTarget===!0),Ee=qe(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,se,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,U.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),$e(U.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(oe){i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Xe(e.TEXTURE_CUBE_MAP,x);for(let B=0;B<6;B++)if(x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)de(U.__webglFramebuffer[B][ce],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,ce);else de(U.__webglFramebuffer[B],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);p(x)&&M(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(pe){for(let B=0,ce=te.length;B<ce;B++){const Se=te[B],we=n.get(Se);let se=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(se=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(se,we.__webglTexture),Xe(se,Se),de(U.__webglFramebuffer,E,Se,e.COLOR_ATTACHMENT0+B,se,0),p(Se)&&M(se)}i.unbindTexture()}else{let B=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(B=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(B,H.__webglTexture),Xe(B,x),x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)de(U.__webglFramebuffer[ce],E,x,e.COLOR_ATTACHMENT0,B,ce);else de(U.__webglFramebuffer,E,x,e.COLOR_ATTACHMENT0,B,0);p(x)&&M(B),i.unbindTexture()}E.depthBuffer&&$(E)}function ye(E){const x=E.textures;for(let U=0,H=x.length;U<H;U++){const te=x[U];if(p(te)){const oe=A(E),pe=n.get(te).__webglTexture;i.bindTexture(oe,pe),M(oe),i.unbindTexture()}}}const Le=[],De=[];function We(E){if(E.samples>0){if(P(E)===!1){const x=E.textures,U=E.width,H=E.height;let te=e.COLOR_BUFFER_BIT;const oe=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=n.get(E),B=x.length>1;if(B)for(let Se=0;Se<x.length;Se++)i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ce=E.texture.mipmaps;ce&&ce.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[Se]);const we=n.get(x[Se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,we,0)}e.blitFramebuffer(0,0,U,H,0,0,U,H,te,e.NEAREST),l===!0&&(Le.length=0,De.length=0,Le.push(e.COLOR_ATTACHMENT0+Se),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(Le.push(oe),De.push(oe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,De)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let Se=0;Se<x.length;Se++){i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,pe.__webglColorRenderbuffer[Se]);const we=n.get(x[Se]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,we,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const x=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function qe(E){return Math.min(r.maxSamples,E.samples)}function P(E){const x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function mt(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function it(E,x){const U=E.colorSpace,H=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!=="srgb-linear"&&U!==""&&(je.getTransfer(U)==="srgb"?(H!==1023||te!==1009)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",U)),x}function et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=he,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=le,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=de,this.useMultisampledRTT=P,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function $d(e,t){function i(n,r=""){let s;const a=je.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var s0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,o0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ni({vertexShader:s0,fragmentShader:a0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},l0=class extends hi{constructor(e,t){super();const i=this;let n=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,f=null;const g=typeof XRWebGLBinding<"u",_=new o0,m={},p=t.getContextAttributes();let M=null,A=null;const v=[],T=[],w=new ee;let R=null,y=null;const b=new Pt;b.viewport=new ft;const N=new Pt;N.viewport=new ft;const I=[b,N],D=new Od;let X=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=v[Y];return re===void 0&&(re=new Xs,v[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=v[Y];return re===void 0&&(re=new Xs,v[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=v[Y];return re===void 0&&(re=new Xs,v[Y]=re),re.getHandSpace()};function V(Y){const re=T.indexOf(Y.inputSource);if(re===-1)return;const ae=v[re];ae!==void 0&&(ae.update(Y.inputSource,Y.frame,l||s),ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",J),n.removeEventListener("inputsourceschange",k);for(let Y=0;Y<v.length;Y++){const re=T[Y];re!==null&&(T[Y]=null,v[Y].disconnect(re))}X=null,L=null,_.reset();for(const Y in m)delete m[Y];if(e.setRenderTarget(M),u=null,d=null,h=null,n=null,A=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),y!==null){const Y=y.camera;Y.fov=y.fov,Y.zoom=y.zoom,Y.updateProjectionMatrix(),y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(M=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",J),n.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ae=null,Ue=null;p.depth&&(Ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?To:Jn,ae=p.stencil?bo:Li);const Fe={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Fe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Yt(d.textureWidth,d.textureHeight,{format:Di,type:Ri,depthTexture:new Qn(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,re),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new Yt(u.framebufferWidth,u.framebufferHeight,{format:Di,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await n.requestReferenceSpace(a),Xe.setContext(n),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(Y){for(let re=0;re<Y.removed.length;re++){const ae=Y.removed[re],Ue=T.indexOf(ae);Ue>=0&&(T[Ue]=null,v[Ue].disconnect(ae))}for(let re=0;re<Y.added.length;re++){const ae=Y.added[re];let Ue=T.indexOf(ae);if(Ue===-1){for(let de=0;de<v.length;de++)if(de>=T.length){T.push(ae),Ue=de;break}else if(T[de]===null){T[de]=ae,Ue=de;break}if(Ue===-1)break}const Fe=v[Ue];Fe&&Fe.connect(ae)}}const he=new C,q=new C;function Z(Y,re,ae){he.setFromMatrixPosition(re.matrixWorld),q.setFromMatrixPosition(ae.matrixWorld);const Ue=he.distanceTo(q),Fe=re.projectionMatrix.elements,de=ae.projectionMatrix.elements,$e=Fe[14]/(Fe[10]-1),Q=Fe[14]/(Fe[10]+1),$=(Fe[9]+1)/Fe[5],le=(Fe[9]-1)/Fe[5],_e=(Fe[8]-1)/Fe[0],ye=(de[8]+1)/de[0],Le=$e*_e,De=$e*ye,We=Ue/(-_e+ye),qe=We*-_e;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(qe),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Fe[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const P=$e+We,mt=Q+We,it=Le-qe,et=De+(Ue-qe),E=$*Q/mt*P,x=le*Q/mt*P;Y.projectionMatrix.makePerspective(it,et,E,x,P,mt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let re=Y.near,ae=Y.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),D.near=N.near=b.near=re,D.far=N.far=b.far=ae,(X!==D.near||L!==D.far)&&(n.updateRenderState({depthNear:D.near,depthFar:D.far}),X=D.near,L=D.far),D.layers.mask=Y.layers.mask|6,b.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;const Ue=Y.parent,Fe=D.cameras;j(D,Ue);for(let de=0;de<Fe.length;de++)j(Fe[de],Ue);Fe.length===2?Z(D,b,N):D.projectionMatrix.copy(b.projectionMatrix),y===null&&Y.isPerspectiveCamera&&(y={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ge(Y,D,Ue)};function Ge(Y,re,ae){ae===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Kn*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(Y){o=Y,d!==null&&(d.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function(Y){return m[Y]};let Pe=null;function lt(Y,re){if(c=re.getViewerPose(l||s),f=re,c!==null){const ae=c.views;u!==null&&(e.setRenderTargetFramebuffer(A,u.framebuffer),e.setRenderTarget(A));let Ue=!1;ae.length!==D.cameras.length&&(D.cameras.length=0,Ue=!0);for(let de=0;de<ae.length;de++){const $e=ae[de];let Q=null;if(u!==null)Q=u.getViewport($e);else{const le=h.getViewSubImage(d,$e);Q=le.viewport,de===0&&(e.setRenderTargetTextures(A,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(A))}let $=I[de];$===void 0&&($=new Pt,$.layers.enable(de),$.viewport=new ft,I[de]=$),$.matrix.fromArray($e.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray($e.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Q.x,Q.y,Q.width,Q.height),de===0&&(D.matrix.copy($.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ue===!0&&D.cameras.push($)}const Fe=n.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const de=h.getDepthInformation(ae[0]);de&&de.isValid&&de.texture&&_.init(de,n.renderState)}if(Fe&&Fe.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let de=0;de<ae.length;de++){const $e=ae[de].camera;if($e){let Q=m[$e];Q||(Q=new Oo,m[$e]=Q);const $=h.getCameraImage($e);Q.sourceTexture=$}}}}for(let ae=0;ae<v.length;ae++){const Ue=T[ae],Fe=v[ae];Ue!==null&&Fe!==void 0&&Fe.update(Ue,re,l||s)}Pe&&Pe(Y,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),f=null}const Xe=new Xd;Xe.setAnimationLoop(lt),this.setAnimationLoop=function(Y){Pe=Y},this.dispose=function(){}}},c0=new He,Qd=new Ye;Qd.set(-1,0,0,0,1,0,0,0,1);function h0(e,t){function i(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,od(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,i(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,i(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,i(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,i(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),A=M.envMap,v=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(c0.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,i(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u0(e,t,i,n){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const w=T.program;n.uniformBlockBinding(v,w)}function c(v,T){let w=r[v.id];w===void 0&&(m(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",M));const R=T.program;n.updateUBOMapping(v,R);const y=t.render.frame;s[v.id]!==y&&(u(v),s[v.id]=y)}function h(v){const T=d();v.__bindingPointIndex=T;const w=e.createBuffer(),R=v.__size,y=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,R,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=r[v.id],w=v.uniforms,R=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let y=0,b=w.length;y<b;y++){const N=w[y];if(Array.isArray(N))for(let I=0,D=N.length;I<D;I++)f(N[I],y,I,R);else f(N,y,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,T,w,R){if(_(v,T,w,R)===!0){const y=v.__offset,b=v.value;if(Array.isArray(b)){let N=0;for(let I=0;I<b.length;I++){const D=b[I],X=p(D);g(D,v.__data,N),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,v.__data)}}function g(v,T,w){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,w)}function _(v,T,w,R){const y=v.value,b=T+"_"+w;if(R[b]===void 0)return typeof y=="number"||typeof y=="boolean"?R[b]=y:ArrayBuffer.isView(y)?R[b]=y.slice():R[b]=y.clone(),!0;{const N=R[b];if(typeof y=="number"||typeof y=="boolean"){if(N!==y)return R[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(N.equals(y)===!1)return N.copy(y),!0}}return!1}function m(v){const T=v.uniforms;let w=0;const R=16;for(let b=0,N=T.length;b<N;b++){const I=Array.isArray(T[b])?T[b]:[T[b]];for(let D=0,X=I.length;D<X;D++){const L=I[D],V=Array.isArray(L.value)?L.value:[L.value];for(let J=0,k=V.length;J<k;J++){const he=V[J],q=p(he),Z=w%R,j=Z%q.boundary,Ge=Z+j;w+=j,Ge!==0&&R-Ge<q.storage&&(w+=R-Ge),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=q.storage}}}const y=w%R;return y>0&&(w+=R-y),v.__size=w,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",v),T}function M(v){const T=v.target;T.removeEventListener("dispose",M);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),e.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function A(){for(const v in r)e.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:A}}var d0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function f0(){return mi===null&&(mi=new ii(d0,16,16,Ir,Ni),mi.name="DFG_LUT",mi.minFilter=yt,mi.magFilter=yt,mi.wrapS=qt,mi.wrapT=qt,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var p0=class{constructor(e={}){const{canvas:t=Gh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Ri}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const g=u,_=new Set([wo,Eo,Qs]),m=new Set([Ri,Li,xo,bo,Mo,So]),p=new Uint32Array(4),M=new Int32Array(4),A=new C;let v=null,T=null;const w=[],R=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1,I=null,D=null,X=null,L=null;this._outputColorSpace=Qt;let V=0,J=0,k=null,he=-1,q=null;const Z=new ft,j=new ft;let Ge=null;const Pe=new xe(0);let lt=0,Xe=t.width,Y=t.height,re=1,ae=null,Ue=null;const Fe=new ft(0,0,Xe,Y),de=new ft(0,0,Xe,Y);let $e=!1;const Q=new gn;let $=!1,le=!1;const _e=new He,ye=new C,Le=new ft,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function qe(){return k===null?re:1}let P=i;function mt(S,O){return t.getContext(S,O)}let it,et,E,x,U,H,te,oe,pe,B,ce,Se,we,se,Ee,Oe,ke,nt,F,K,ie,Me,Ce;try{const S={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",at,!1),P===null){const O="webgl2";if(P=mt(O,S),P===null)throw mt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(S){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",at,!1),Ie("WebGLRenderer: "+S.message),S}function ne(){it=new pv(P),it.init(),ie=new $d(P,it),et=new rv(P,it,e,ie),E=new n0(P,it),et.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),D=P.createFramebuffer(),X=P.createFramebuffer(),L=P.createFramebuffer(),x=new vv(P),U=new H_,H=new r0(P,it,E,U,et,ie,x),te=new fv(b),oe=new jg(P),Me=new iv(P,oe),pe=new mv(P,oe,x,Me),B=new yv(P,pe,oe,Me,x),nt=new _v(P,et,H),Ee=new sv(U),ce=new k_(b,te,it,et,Me,Ee),Se=new h0(b,U),we=new X_,se=new $_(it),ke=new tv(b,te,E,B,f,o),Oe=new i0(b,B,et),Ce=new u0(P,x,et,E),F=new nv(P,it,x),K=new gv(P,it,x),x.programs=ce.programs,b.capabilities=et,b.extensions=it,b.properties=U,b.renderLists=we,b.shadowMap=Oe,b.state=E,b.info=x}g!==1009&&(y=new Mv(g,t.width,t.height,a,n,r));const ve=new l0(b,P);this.xr=ve,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(S){S!==void 0&&(re=S,this.setSize(Xe,Y,!1))},this.getSize=function(S){return S.set(Xe,Y)},this.setSize=function(S,O,W=!0){if(ve.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=S,Y=O,t.width=Math.floor(S*re),t.height=Math.floor(O*re),W===!0&&(t.style.width=S+"px",t.style.height=O+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(Xe*re,Y*re).floor()},this.setDrawingBufferSize=function(S,O,W){Xe=S,Y=O,re=W,t.width=Math.floor(S*W),t.height=Math.floor(O*W),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(g===1009){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(Z)},this.getViewport=function(S){return S.copy(Fe)},this.setViewport=function(S,O,W,G){S.isVector4?Fe.set(S.x,S.y,S.z,S.w):Fe.set(S,O,W,G),E.viewport(Z.copy(Fe).multiplyScalar(re).round())},this.getScissor=function(S){return S.copy(de)},this.setScissor=function(S,O,W,G){S.isVector4?de.set(S.x,S.y,S.z,S.w):de.set(S,O,W,G),E.scissor(j.copy(de).multiplyScalar(re).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(S){E.setScissorTest($e=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){Ue=S},this.getClearColor=function(S){return S.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,W=!0){let G=0;if(S){let z=!1;if(k!==null){const ue=k.texture.format;z=_.has(ue)}if(z){const ue=k.texture.type,ge=m.has(ue),be=ke.getClearColor(),Ae=ke.getClearAlpha(),Be=be.r,Qe=be.g,tt=be.b;ge?(p[0]=Be,p[1]=Qe,p[2]=tt,p[3]=Ae,P.clearBufferuiv(P.COLOR,0,p)):(M[0]=Be,M[1]=Qe,M[2]=tt,M[3]=Ae,P.clearBufferiv(P.COLOR,0,M))}else G|=P.COLOR_BUFFER_BIT}O&&(G|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",at,!1),ke.dispose(),we.dispose(),se.dispose(),U.dispose(),te.dispose(),B.dispose(),Me.dispose(),Ce.dispose(),ce.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",al),ve.removeEventListener("sessionend",ol),Qi.stop()};function ze(S){S.preventDefault(),Or("WebGLRenderer: Context Lost."),N=!0}function At(){Or("WebGLRenderer: Context Restored."),N=!1;const S=x.autoReset,O=Oe.enabled,W=Oe.autoUpdate,G=Oe.needsUpdate,z=Oe.type;ne(),x.autoReset=S,Oe.enabled=O,Oe.autoUpdate=W,Oe.needsUpdate=G,Oe.type=z}function at(S){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function di(S){const O=S.target;O.removeEventListener("dispose",di),_i(O)}function _i(S){jd(S),U.remove(S)}function jd(S){const O=U.get(S).programs;O!==void 0&&(O.forEach(function(W){ce.releaseProgram(W)}),S.isShaderMaterial&&ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,W,G,z,ue){O===null&&(O=De);const ge=z.isMesh&&z.matrixWorld.determinantAffine()<0,be=nf(S,O,W,G,z);E.setMaterial(G,ge);let Ae=W.index,Be=1;if(G.wireframe===!0){if(Ae=pe.getWireframeAttribute(W),Ae===void 0)return;Be=2}const Qe=W.drawRange,tt=W.attributes.position;let Ne=Qe.start*Be,ct=(Qe.start+Qe.count)*Be;ue!==null&&(Ne=Math.max(Ne,ue.start*Be),ct=Math.min(ct,(ue.start+ue.count)*Be)),Ae!==null?(Ne=Math.max(Ne,0),ct=Math.min(ct,Ae.count)):tt!=null&&(Ne=Math.max(Ne,0),ct=Math.min(ct,tt.count));const xt=ct-Ne;if(xt<0||xt===1/0)return;Me.setup(z,G,be,W,Ae);let gt,rt=F;if(Ae!==null&&(gt=oe.get(Ae),rt=K,rt.setIndex(gt)),z.isMesh)G.wireframe===!0?(E.setLineWidth(G.wireframeLinewidth*qe()),rt.setMode(P.LINES)):rt.setMode(P.TRIANGLES);else if(z.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),E.setLineWidth(Nt*qe()),z.isLineSegments?rt.setMode(P.LINES):z.isLineLoop?rt.setMode(P.LINE_LOOP):rt.setMode(P.LINE_STRIP)}else z.isPoints?rt.setMode(P.POINTS):z.isSprite&&rt.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(it.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Nt=z._multiDrawStarts,Re=z._multiDrawCounts,Jt=z._multiDrawCount,st=Ae?oe.get(Ae).bytesPerElement:1,ei=U.get(G).currentProgram.getUniforms();for(let fi=0;fi<Jt;fi++)ei.setValue(P,"_gl_DrawID",fi),rt.render(Nt[fi]/st,Re[fi])}else if(z.isInstancedMesh)rt.renderInstances(Ne,xt,z.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Re=Math.min(W.instanceCount,Nt);rt.renderInstances(Ne,xt,Re)}else rt.render(Ne,xt)};function sl(S,O,W,G){I!==null&&S.isNodeMaterial&&I.setObject(G,S),$===!0&&Ee.setState(S,W,!1),S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,Jr(S,O,G),S.side=0,S.needsUpdate=!0,Jr(S,O,G),S.side=2):Jr(S,O,G)}this.compile=function(S,O,W=null){W===null&&(W=S),I!==null&&I.renderStart(S,O,W),T=se.get(W),T.init(O),R.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),le=this.localClippingEnabled,$=Ee.init(this.clippingPlanes,le),$===!0&&Ee.setGlobalState(this.clippingPlanes,O),I!==null&&Oe.render(T.state.shadowsArray,W,O);const G=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ue=z.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const be=ue[ge];sl(be,W,O,z),G.add(be)}else sl(ue,W,O,z),G.add(ue)}),T=R.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(S,O,W=null){const G=this.compile(S,O,W);return new Promise(z=>{function ue(){if(G.forEach(function(ge){const be=U.get(ge).currentProgram;(be===void 0||be.isReady())&&G.delete(ge)}),G.size===0){z(S);return}setTimeout(ue,10)}it.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let pa=null;function ef(S){pa&&pa(S)}function al(){Qi.stop()}function ol(){Qi.start()}const Qi=new Xd;Qi.setAnimationLoop(ef),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(S){pa=S,ve.setAnimationLoop(S),S===null?Qi.stop():Qi.start()},ve.addEventListener("sessionstart",al),ve.addEventListener("sessionend",ol),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;I!==null&&I.renderStart(S,O);const W=ve.enabled===!0&&ve.isPresenting===!0,G=y!==null&&(k===null||W)&&y.begin(b,k);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,O,k),T=se.get(S,R.length),T.init(O),T.state.textureUnits=H.getTextureUnits(),R.push(T),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(_e,Yi,O.reversedDepth),le=this.localClippingEnabled,$=Ee.init(this.clippingPlanes,le),v=we.get(S,w.length),v.init(),w.push(v),ve.enabled===!0&&ve.isPresenting===!0){const ue=b.xr.getDepthSensingMesh();ue!==null&&ma(ue,O,-1/0,b.sortObjects)}ma(S,O,0,b.sortObjects),v.finish(),I!==null&&I.updateLights(T.state.lightsArray),b.sortObjects===!0&&v.sort(ae,Ue),We=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,We&&ke.addToRenderList(v,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$===!0&&Ee.beginShadows();const z=T.state.shadowsArray;if(Oe.render(z,S,O),$===!0&&Ee.endShadows(),(G&&y.hasRenderPass())===!1){const ue=v.opaque,ge=v.transmissive;if(T.setupLights(),O.isArrayCamera){const be=O.cameras;if(ge.length>0)for(let Ae=0,Be=be.length;Ae<Be;Ae++){const Qe=be[Ae];cl(ue,ge,S,Qe)}We&&ke.render(S);for(let Ae=0,Be=be.length;Ae<Be;Ae++){const Qe=be[Ae];ll(v,S,Qe,Qe.viewport)}}else ge.length>0&&cl(ue,ge,S,O),We&&ke.render(S),ll(v,S,O)}k!==null&&J===0&&(H.updateMultisampleRenderTarget(k),H.updateRenderTargetMipmap(k)),G&&y.end(b),S.isScene===!0&&S.onAfterRender(b,S,O),Me.resetDefaultState(),he=-1,q=null,R.pop(),R.length>0?(T=R[R.length-1],H.setTextureUnits(T.state.textureUnits),$===!0&&Ee.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,I!==null&&I.renderEnd()};function ma(S,O,W,G){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Q)){G&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);const ue=B.update(S),ge=S.material;ge.visible&&v.push(S,ue,ge,W,Le.z,null,O)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Q))){const ue=B.update(S),ge=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Le.copy(ue.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(ge)){const be=ue.groups;for(let Ae=0,Be=be.length;Ae<Be;Ae++){const Qe=be[Ae],tt=ge[Qe.materialIndex];tt&&tt.visible&&v.push(S,ue,tt,W,Le.z,Qe,O)}}else ge.visible&&v.push(S,ue,ge,W,Le.z,null,O)}}const z=S.children;for(let ue=0,ge=z.length;ue<ge;ue++)ma(z[ue],O,W,G)}function ll(S,O,W,G){const{opaque:z,transmissive:ue,transparent:ge}=S;T.setupLightsView(W),$===!0&&Ee.setGlobalState(b.clippingPlanes,W),G&&E.viewport(Z.copy(G)),z.length>0&&Zr(z,O,W),ue.length>0&&Zr(ue,O,W),ge.length>0&&Zr(ge,O,W),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function cl(S,O,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const tt=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Yt(1,1,{generateMipmaps:!0,type:tt?Ni:Ri,minFilter:tr,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const z=T.state.transmissionRenderTarget[G.id],ue=G.viewport||Z;z.setSize(ue.z*b.transmissionResolutionScale,ue.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),be=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(z),b.getClearColor(Pe),lt=b.getClearAlpha(),lt<1&&b.setClearColor(16777215,.5),b.clear(),We&&ke.render(W);const Be=b.toneMapping;b.toneMapping=0;const Qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),$===!0&&Ee.setGlobalState(b.clippingPlanes,G),Zr(S,W,G),H.updateMultisampleRenderTarget(z),H.updateRenderTargetMipmap(z),it.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ne=0,ct=O.length;Ne<ct;Ne++){const{object:xt,geometry:gt,material:rt,group:Nt}=O[Ne];if(rt.side===2&&xt.layers.test(G.layers)){const Re=rt.side;rt.side=1,rt.needsUpdate=!0,hl(xt,W,G,gt,rt,Nt),rt.side=Re,rt.needsUpdate=!0,tt=!0}}tt===!0&&(H.updateMultisampleRenderTarget(z),H.updateRenderTargetMipmap(z))}b.setRenderTarget(ge,be,Ae),b.setClearColor(Pe,lt),Qe!==void 0&&(G.viewport=Qe),b.toneMapping=Be}function Zr(S,O,W){const G=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ue=S.length;z<ue;z++){const ge=S[z],{object:be,geometry:Ae,group:Be}=ge;let Qe=ge.material;Qe.allowOverride===!0&&G!==null&&(Qe=G),be.layers.test(W.layers)&&hl(be,O,W,Ae,Qe,Be)}}function hl(S,O,W,G,z,ue){I!==null&&z.isNodeMaterial&&I.setObject(S,z),S.onBeforeRender(b,O,W,G,z,ue),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(b,O,W,G,S,ue),z.transparent===!0&&z.side===2&&z.forceSinglePass===!1?(z.side=1,z.needsUpdate=!0,b.renderBufferDirect(W,O,G,z,S,ue),z.side=0,z.needsUpdate=!0,b.renderBufferDirect(W,O,G,z,S,ue),z.side=2):b.renderBufferDirect(W,O,G,z,S,ue),S.onAfterRender(b,O,W,G,z,ue)}function Jr(S,O,W){O.isScene!==!0&&(O=De);const G=U.get(S),z=T.state.lights,ue=T.state.shadowsArray,ge=z.state.version,be=ce.getParameters(S,z.state,ue,O,W,T.state.lightProbeGridArray),Ae=ce.getProgramCacheKey(be);let Be=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=te.get(S.envMap||G.environment,Qe),G.envMapRotation=G.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",di),Be=new Map,G.programs=Be);let tt=Be.get(Ae);if(tt!==void 0){if(G.currentProgram===tt&&G.lightsStateVersion===ge)return dl(S,be),tt}else be.uniforms=ce.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,W,be),S.onBeforeCompile(be,b),tt=ce.acquireProgram(be,Ae),Be.set(Ae,tt),G.uniforms=be.uniforms;const Ne=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Ee.uniform),dl(S,be),G.needsLights=sf(S),G.lightsStateVersion=ge,G.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.sunLights.value=z.state.sun,Ne.sunLightShadows.value=z.state.sunShadow,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.sunShadowMatrix.value=z.state.sunShadowMatrix,Ne.sunShadowCascade.value=z.state.sunShadowCascade,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=tt,G.uniformsList=null,tt}function ul(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=qs.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function dl(S,O){const W=U.get(S);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function tf(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;A.setFromMatrixPosition(O.matrixWorld);for(let W=0,G=S.length;W<G;W++){const z=S[W];if(z.texture!==null&&z.boundingBox.containsPoint(A))return z}return null}function nf(S,O,W,G,z){O.isScene!==!0&&(O=De),H.resetTextureUnits();const ue=O.fog,ge=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,be=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:je.workingColorSpace,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Be=te.get(G.envMap||ge,Ae),Qe=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,tt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!W.morphAttributes.position,ct=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color;let gt=0;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(gt=b.toneMapping);const rt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Nt=rt!==void 0?rt.length:0,Re=U.get(G),Jt=T.state.lights;if($===!0&&(le===!0||S!==q)){const ut=S===q&&G.id===he;Ee.setState(G,S,ut)}let st=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Jt.state.version||Re.outputColorSpace!==be||z.isBatchedMesh&&Re.batching===!1||!z.isBatchedMesh&&Re.batching===!0||z.isBatchedMesh&&Re.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Re.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Re.instancing===!1||!z.isInstancedMesh&&Re.instancing===!0||z.isSkinnedMesh&&Re.skinning===!1||!z.isSkinnedMesh&&Re.skinning===!0||z.isInstancedMesh&&Re.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Re.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Re.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Re.instancingMorph===!1&&z.morphTexture!==null||Re.envMap!==Be||G.fog===!0&&Re.fog!==ue||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ee.numPlanes||Re.numIntersection!==Ee.numIntersection)||Re.vertexAlphas!==Qe||Re.vertexTangents!==tt||Re.morphTargets!==Ne||Re.morphNormals!==ct||Re.morphColors!==xt||Re.toneMapping!==gt||Re.morphTargetsCount!==Nt||!!Re.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Re.__version=G.version);let ei=Re.currentProgram;st===!0&&(ei=Jr(G,O,z),I&&G.isNodeMaterial&&I.onUpdateProgram(G,ei,Re));let fi=!1,Bi=!1,xn=!1;const ht=ei.getUniforms(),Mt=Re.uniforms;if(E.useProgram(ei.program)&&(fi=!0,Bi=!0,xn=!0),G.id!==he&&(he=G.id,Bi=!0),Re.needsLights){const ut=tf(T.state.lightProbeGridArray,z);Re.lightProbeGrid!==ut&&(Re.lightProbeGrid=ut,Bi=!0)}if(fi||q!==S){E.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(P,"projectionMatrix",S.projectionMatrix),ht.setValue(P,"viewMatrix",S.matrixWorldInverse);const ut=ht.map.cameraPosition;ut!==void 0&&ut.setValue(P,ye.setFromMatrixPosition(S.matrixWorld)),et.logarithmicDepthBuffer&&ht.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ht.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),q!==S&&(q=S,Bi=!0,xn=!0)}if(Re.needsLights&&(Jt.state.sunShadowMap.length>0&&ht.setValue(P,"sunShadowMap",Jt.state.sunShadowMap,H),Jt.state.directionalShadowMap.length>0&&ht.setValue(P,"directionalShadowMap",Jt.state.directionalShadowMap,H),Jt.state.spotShadowMap.length>0&&ht.setValue(P,"spotShadowMap",Jt.state.spotShadowMap,H),Jt.state.pointShadowMap.length>0&&ht.setValue(P,"pointShadowMap",Jt.state.pointShadowMap,H)),z.isSkinnedMesh){ht.setOptional(P,z,"bindMatrix"),ht.setOptional(P,z,"bindMatrixInverse");const ut=z.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),ht.setValue(P,"boneTexture",ut.boneTexture,H))}z.isBatchedMesh&&(ht.setOptional(P,z,"batchingTexture"),ht.setValue(P,"batchingTexture",z._matricesTexture,H),ht.setOptional(P,z,"batchingIdTexture"),ht.setValue(P,"batchingIdTexture",z._indirectTexture,H),ht.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(P,"batchingColorTexture",z._colorsTexture,H));const zi=W.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&nt.update(z,W,ei),(Bi||Re.receiveShadow!==z.receiveShadow)&&(Re.receiveShadow=z.receiveShadow,ht.setValue(P,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Mt.envMapIntensity.value=O.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=f0()),Bi){if(ht.setValue(P,"toneMappingExposure",b.toneMappingExposure),Re.needsLights&&rf(Mt,xn),ue&&G.fog===!0&&Se.refreshFogUniforms(Mt,ue),Se.refreshMaterialUniforms(Mt,G,re,Y,T.state.transmissionRenderTarget[S.id]),Re.needsLights&&Re.lightProbeGrid){const ut=Re.lightProbeGrid;Mt.probesSH.value=ut.texture,Mt.probesMin.value.copy(ut.boundingBox.min),Mt.probesMax.value.copy(ut.boundingBox.max),Mt.probesResolution.value.copy(ut.resolution)}qs.upload(P,ul(Re),Mt,H)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qs.upload(P,ul(Re),Mt,H),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ht.setValue(P,"center",z.center),ht.setValue(P,"modelViewMatrix",z.modelViewMatrix),ht.setValue(P,"normalMatrix",z.normalMatrix),ht.setValue(P,"modelMatrix",z.matrixWorld),G.uniformsGroups!==void 0){const ut=G.uniformsGroups;for(let ar=0,Mn=ut.length;ar<Mn;ar++){const pl=ut[ar];Ce.update(pl,ei),Ce.bind(pl,ei)}}return ei}function rf(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function sf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,O,W){const G=U.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),U.get(S.texture).__webglTexture=O,U.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const W=U.get(S);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,W=0){k=S,V=O,J=W;let G=null,z=!1,ue=!1;if(S){const ge=U.get(S);if(ge.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(P.FRAMEBUFFER,ge.__webglFramebuffer),Z.copy(S.viewport),j.copy(S.scissor),Ge=S.scissorTest,E.viewport(Z),E.scissor(j),E.setScissorTest(Ge),he=-1;return}else if(ge.__webglFramebuffer===void 0)H.setupRenderTarget(S);else if(ge.__hasExternalTextures)H.rebindTextures(S,U.get(S.texture).__webglTexture,U.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(ge.__boundDepthTexture!==Be){if(Be!==null&&U.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(S)}}const be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ue=!0);const Ae=U.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?G=Ae[O][W]:G=Ae[O],z=!0):S.samples>0&&H.useMultisampledRTT(S)===!1?G=U.get(S).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[W]:G=Ae,Z.copy(S.viewport),j.copy(S.scissor),Ge=S.scissorTest}else Z.copy(Fe).multiplyScalar(re).floor(),j.copy(de).multiplyScalar(re).floor(),Ge=$e;if(W!==0&&(G=D),E.bindFramebuffer(P.FRAMEBUFFER,G)&&E.drawBuffers(S,G),E.viewport(Z),E.scissor(j),E.setScissorTest(Ge),z){const ge=U.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,W)}else if(ue){const ge=O;for(let be=0;be<S.textures.length;be++){const Ae=U.get(S.textures[be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+be,Ae.__webglTexture,W,ge)}}else if(S!==null&&W!==0){const ge=U.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,W)}he=-1};function fl(S){const O=U.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=et.textureFormatReadable(S.format),O.__typeReadable=et.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,W,G,z,ue,ge,be=0){if(!(S&&S.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae){E.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const Be=S.textures[be],Qe=Be.format,tt=Be.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be);const Ne=fl(Be);if(Ne.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-G&&W>=0&&W<=S.height-z&&P.readPixels(O,W,G,z,ie.convert(Qe),ie.convert(tt),ue)}finally{const Be=k!==null?U.get(k).__webglFramebuffer:null;E.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(S,O,W,G,z,ue,ge,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ae=Ae[ge]),Ae)if(O>=0&&O<=S.width-G&&W>=0&&W<=S.height-z){E.bindFramebuffer(P.FRAMEBUFFER,Ae);const Be=S.textures[be],Qe=Be.format,tt=Be.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be);const Ne=fl(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.bufferData(P.PIXEL_PACK_BUFFER,ue.byteLength,P.STREAM_READ),P.readPixels(O,W,G,z,ie.convert(Qe),ie.convert(tt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const xt=k!==null?U.get(k).__webglFramebuffer:null;E.bindFramebuffer(P.FRAMEBUFFER,xt);const gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wf(P,gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ue),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ct),P.deleteSync(gt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,W=0){const G=Math.pow(2,-W),z=Math.floor(S.image.width*G),ue=Math.floor(S.image.height*G),ge=O!==null?O.x:0,be=O!==null?O.y:0;H.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ge,be,z,ue),E.unbindTexture()},this.copyTextureToTexture=function(S,O,W=null,G=null,z=0,ue=0){let ge,be,Ae,Be,Qe,tt,Ne,ct,xt;const gt=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(W!==null)ge=W.max.x-W.min.x,be=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,Qe=W.min.y,tt=W.isBox3?W.min.z:0;else{const Mt=Math.pow(2,-z);ge=Math.floor(gt.width*Mt),be=Math.floor(gt.height*Mt),S.isDataArrayTexture?Ae=gt.depth:S.isData3DTexture?Ae=Math.floor(gt.depth*Mt):Ae=1,Be=0,Qe=0,tt=0}G!==null?(Ne=G.x,ct=G.y,xt=G.z):(Ne=0,ct=0,xt=0);const rt=ie.convert(O.format),Nt=ie.convert(O.type);let Re;O.isData3DTexture?(H.setTexture3D(O,0),Re=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(H.setTexture2DArray(O,0),Re=P.TEXTURE_2D_ARRAY):(H.setTexture2D(O,0),Re=P.TEXTURE_2D),E.activeTexture(P.TEXTURE0),E.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),E.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),E.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const Jt=E.getParameter(P.UNPACK_ROW_LENGTH),st=E.getParameter(P.UNPACK_IMAGE_HEIGHT),ei=E.getParameter(P.UNPACK_SKIP_PIXELS),fi=E.getParameter(P.UNPACK_SKIP_ROWS),Bi=E.getParameter(P.UNPACK_SKIP_IMAGES);E.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),E.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),E.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),E.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),E.pixelStorei(P.UNPACK_SKIP_IMAGES,tt);const xn=S.isDataArrayTexture||S.isData3DTexture,ht=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const Mt=U.get(S),zi=U.get(O),ut=U.get(Mt.__renderTarget),ar=U.get(zi.__renderTarget);E.bindFramebuffer(P.READ_FRAMEBUFFER,ut.__webglFramebuffer),E.bindFramebuffer(P.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Mn=0;Mn<Ae;Mn++)xn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,U.get(S).__webglTexture,z,tt+Mn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,U.get(O).__webglTexture,ue,xt+Mn)),P.blitFramebuffer(Be,Qe,ge,be,Ne,ct,ge,be,P.DEPTH_BUFFER_BIT,P.NEAREST);E.bindFramebuffer(P.READ_FRAMEBUFFER,null),E.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||U.has(S)){const Mt=U.get(S),zi=U.get(O);E.bindFramebuffer(P.READ_FRAMEBUFFER,X),E.bindFramebuffer(P.DRAW_FRAMEBUFFER,L);for(let ut=0;ut<Ae;ut++)xn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.__webglTexture,z,tt+ut):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mt.__webglTexture,z),ht?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,zi.__webglTexture,ue,xt+ut):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,zi.__webglTexture,ue),z!==0?P.blitFramebuffer(Be,Qe,ge,be,Ne,ct,ge,be,P.COLOR_BUFFER_BIT,P.NEAREST):ht?P.copyTexSubImage3D(Re,ue,Ne,ct,xt+ut,Be,Qe,ge,be):P.copyTexSubImage2D(Re,ue,Ne,ct,Be,Qe,ge,be);E.bindFramebuffer(P.READ_FRAMEBUFFER,null),E.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ht?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Re,ue,Ne,ct,xt,ge,be,Ae,rt,Nt,gt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Re,ue,Ne,ct,xt,ge,be,Ae,rt,gt.data):P.texSubImage3D(Re,ue,Ne,ct,xt,ge,be,Ae,rt,Nt,gt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ue,Ne,ct,ge,be,rt,Nt,gt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ue,Ne,ct,gt.width,gt.height,rt,gt.data):P.texSubImage2D(P.TEXTURE_2D,ue,Ne,ct,ge,be,rt,Nt,gt);E.pixelStorei(P.UNPACK_ROW_LENGTH,Jt),E.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st),E.pixelStorei(P.UNPACK_SKIP_PIXELS,ei),E.pixelStorei(P.UNPACK_SKIP_ROWS,fi),E.pixelStorei(P.UNPACK_SKIP_IMAGES,Bi),ue===0&&O.generateMipmaps&&P.generateMipmap(Re),E.unbindTexture()},this.initRenderTarget=function(S){U.get(S).__webglFramebuffer===void 0&&H.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?H.setTextureCube(S,0):S.isData3DTexture?H.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?H.setTexture2DArray(S,0):H.setTexture2D(S,0),E.unbindTexture()},this.resetState=function(){V=0,J=0,k=null,E.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};export{C as _,je as a,Yr as c,Tg as d,Qt as f,ee as g,Ri as h,xe as i,Pt as l,ni as m,g0 as n,na as o,eu as p,Ag as r,Zs as s,p0 as t,Di as u};
