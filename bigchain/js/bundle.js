(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var $=require('jquery');
$('#test').text('browserify working');

const db= require('bigchaindb-driver')
console.log(db)
console.log("BCDB pretty much working :)")

var min=20000;
var max=99999;
$("#submitbtn"). click(function(){
    console.log("Button clicked");
    //Create an asset for bigchaindb
    var name = $("#name").val();
    var did=Math.random()*(max-min)+min;
    var organ = $("#organ").val();
    var oid=Math.random()*(max-min)+min;
    var bg = $("#bg").val();
    var hosp = $("#hospital").val();
    var status = $("#status").val();
    alert("New Block created. Transaction Entered."+"\nDonor ID:"+did);
    location.reload(true);
});

},{"bigchaindb-driver":2,"jquery":3}],2:[function(require,module,exports){
module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=87)}([function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(e,t,r){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var n=r(82),i=r(81),u=r(80);function a(){return d.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(e,t){if(a()<t)throw new RangeError("Invalid typed array length");return d.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=d.prototype:(null===e&&(e=new d(t)),e.length=t),e}function d(e,t,r){if(!(d.TYPED_ARRAY_SUPPORT||this instanceof d))return new d(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return c(this,e)}return f(this,e,t,r)}function f(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);d.TYPED_ARRAY_SUPPORT?(e=t).__proto__=d.prototype:e=h(e,t);return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!d.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|p(t,r),i=(e=o(e,n)).write(t,r);i!==n&&(e=e.slice(0,i));return e}(e,t,r):function(e,t){if(d.isBuffer(t)){var r=0|l(t.length);return 0===(e=o(e,r)).length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||function(e){return e!=e}(t.length)?o(e,0):h(e,t);if("Buffer"===t.type&&u(t.data))return h(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function s(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function c(e,t){if(s(t),e=o(e,t<0?0:0|l(t)),!d.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function h(e,t){var r=t.length<0?0:0|l(t.length);e=o(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function l(e){if(e>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|e}function p(e,t){if(d.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return z(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(e).length;default:if(n)return z(e).length;t=(""+t).toLowerCase(),n=!0}}function b(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=d.from(t,n)),d.isBuffer(t))return 0===t.length?-1:m(e,t,r,n,i);if("number"==typeof t)return t&=255,d.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):m(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(e,t,r,n,i){var u,a=1,o=e.length,d=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,o/=2,d/=2,r/=2}function f(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var s=-1;for(u=r;u<o;u++)if(f(e,u)===f(t,-1===s?0:u-s)){if(-1===s&&(s=u),u-s+1===d)return s*a}else-1!==s&&(u-=u-s),s=-1}else for(r+d>o&&(r=o-d),u=r;u>=0;u--){for(var c=!0,h=0;h<d;h++)if(f(e,u+h)!==f(t,h)){c=!1;break}if(c)return u}return-1}function g(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var u=t.length;if(u%2!=0)throw new TypeError("Invalid hex string");n>u/2&&(n=u/2);for(var a=0;a<n;++a){var o=parseInt(t.substr(2*a,2),16);if(isNaN(o))return a;e[r+a]=o}return a}function v(e,t,r,n){return q(z(t,e.length-r),e,r,n)}function _(e,t,r,n){return q(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function w(e,t,r,n){return _(e,t,r,n)}function S(e,t,r,n){return q(F(t),e,r,n)}function E(e,t,r,n){return q(function(e,t){for(var r,n,i,u=[],a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,i=r%256,u.push(i),u.push(n);return u}(t,e.length-r),e,r,n)}function A(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function x(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var u,a,o,d,f=e[i],s=null,c=f>239?4:f>223?3:f>191?2:1;if(i+c<=r)switch(c){case 1:f<128&&(s=f);break;case 2:128==(192&(u=e[i+1]))&&(d=(31&f)<<6|63&u)>127&&(s=d);break;case 3:u=e[i+1],a=e[i+2],128==(192&u)&&128==(192&a)&&(d=(15&f)<<12|(63&u)<<6|63&a)>2047&&(d<55296||d>57343)&&(s=d);break;case 4:u=e[i+1],a=e[i+2],o=e[i+3],128==(192&u)&&128==(192&a)&&128==(192&o)&&(d=(15&f)<<18|(63&u)<<12|(63&a)<<6|63&o)>65535&&d<1114112&&(s=d)}null===s?(s=65533,c=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=c}return function(e){var t=e.length;if(t<=k)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=k));return r}(n)}t.Buffer=d,t.SlowBuffer=function(e){+e!=e&&(e=0);return d.alloc(+e)},t.INSPECT_MAX_BYTES=50,d.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=a(),d.poolSize=8192,d._augment=function(e){return e.__proto__=d.prototype,e},d.from=function(e,t,r){return f(null,e,t,r)},d.TYPED_ARRAY_SUPPORT&&(d.prototype.__proto__=Uint8Array.prototype,d.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&d[Symbol.species]===d&&Object.defineProperty(d,Symbol.species,{value:null,configurable:!0})),d.alloc=function(e,t,r){return function(e,t,r,n){return s(t),t<=0?o(e,t):void 0!==r?"string"==typeof n?o(e,t).fill(r,n):o(e,t).fill(r):o(e,t)}(null,e,t,r)},d.allocUnsafe=function(e){return c(null,e)},d.allocUnsafeSlow=function(e){return c(null,e)},d.isBuffer=function(e){return!(null==e||!e._isBuffer)},d.compare=function(e,t){if(!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,u=Math.min(r,n);i<u;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(e,t){if(!u(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return d.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=d.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(!d.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i),i+=a.length}return n},d.byteLength=p,d.prototype._isBuffer=!0,d.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)b(this,t,t+1);return this},d.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},d.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},d.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?x(this,0,e):function(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return T(this,t,r);case"utf8":case"utf-8":return x(this,t,r);case"ascii":return M(this,t,r);case"latin1":case"binary":return I(this,t,r);case"base64":return A(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}.apply(this,arguments)},d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},d.prototype.compare=function(e,t,r,n,i){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var u=i-n,a=r-t,o=Math.min(u,a),f=this.slice(n,i),s=e.slice(t,r),c=0;c<o;++c)if(f[c]!==s[c]){u=f[c],a=s[c];break}return u<a?-1:a<u?1:0},d.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},d.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},d.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},d.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var u=!1;;)switch(n){case"hex":return g(this,e,t,r);case"utf8":case"utf-8":return v(this,e,t,r);case"ascii":return _(this,e,t,r);case"latin1":case"binary":return w(this,e,t,r);case"base64":return S(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return E(this,e,t,r);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var k=4096;function M(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function I(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function T(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",u=t;u<r;++u)i+=D(e[u]);return i}function B(e,t,r){for(var n=e.slice(t,r),i="",u=0;u<n.length;u+=2)i+=String.fromCharCode(n[u]+256*n[u+1]);return i}function C(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function P(e,t,r,n,i,u){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<u)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function O(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,u=Math.min(e.length-r,2);i<u;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function R(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,u=Math.min(e.length-r,4);i<u;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function j(e,t,r,n,i,u){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function U(e,t,r,n,u){return u||j(e,0,r,4),i.write(e,t,r,n,23,4),r+4}function L(e,t,r,n,u){return u||j(e,0,r,8),i.write(e,t,r,n,52,8),r+8}d.prototype.slice=function(e,t){var r,n=this.length;if(e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),d.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=d.prototype;else{var i=t-e;r=new d(i,void 0);for(var u=0;u<i;++u)r[u]=this[u+e]}return r},d.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var n=this[e],i=1,u=0;++u<t&&(i*=256);)n+=this[e+u]*i;return n},d.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},d.prototype.readUInt8=function(e,t){return t||C(e,1,this.length),this[e]},d.prototype.readUInt16LE=function(e,t){return t||C(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUInt16BE=function(e,t){return t||C(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUInt32LE=function(e,t){return t||C(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUInt32BE=function(e,t){return t||C(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},d.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var n=this[e],i=1,u=0;++u<t&&(i*=256);)n+=this[e+u]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},d.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||C(e,t,this.length);for(var n=t,i=1,u=this[e+--n];n>0&&(i*=256);)u+=this[e+--n]*i;return u>=(i*=128)&&(u-=Math.pow(2,8*t)),u},d.prototype.readInt8=function(e,t){return t||C(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){t||C(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},d.prototype.readInt16BE=function(e,t){t||C(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},d.prototype.readInt32LE=function(e,t){return t||C(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return t||C(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readFloatLE=function(e,t){return t||C(e,4,this.length),i.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return t||C(e,4,this.length),i.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return t||C(e,8,this.length),i.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return t||C(e,8,this.length),i.read(this,e,!1,52,8)},d.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||P(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,u=0;for(this[t]=255&e;++u<r&&(i*=256);)this[t+u]=e/i&255;return t+r},d.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t|=0,r|=0,n)||P(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,u=1;for(this[t+i]=255&e;--i>=0&&(u*=256);)this[t+i]=e/u&255;return t+r},d.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,1,255,0),d.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},d.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):O(this,e,t,!0),t+2},d.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,2,65535,0),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):O(this,e,t,!1),t+2},d.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):R(this,e,t,!0),t+4},d.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,4,4294967295,0),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):R(this,e,t,!1),t+4},d.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);P(this,e,t,r,i-1,-i)}var u=0,a=1,o=0;for(this[t]=255&e;++u<r&&(a*=256);)e<0&&0===o&&0!==this[t+u-1]&&(o=1),this[t+u]=(e/a>>0)-o&255;return t+r},d.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);P(this,e,t,r,i-1,-i)}var u=r-1,a=1,o=0;for(this[t+u]=255&e;--u>=0&&(a*=256);)e<0&&0===o&&0!==this[t+u+1]&&(o=1),this[t+u]=(e/a>>0)-o&255;return t+r},d.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,1,127,-128),d.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):O(this,e,t,!0),t+2},d.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,2,32767,-32768),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):O(this,e,t,!1),t+2},d.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,4,2147483647,-2147483648),d.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):R(this,e,t,!0),t+4},d.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||P(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),d.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):R(this,e,t,!1),t+4},d.prototype.writeFloatLE=function(e,t,r){return U(this,e,t,!0,r)},d.prototype.writeFloatBE=function(e,t,r){return U(this,e,t,!1,r)},d.prototype.writeDoubleLE=function(e,t,r){return L(this,e,t,!0,r)},d.prototype.writeDoubleBE=function(e,t,r){return L(this,e,t,!1,r)},d.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,u=n-r;if(this===e&&r<t&&t<n)for(i=u-1;i>=0;--i)e[i+t]=this[i+r];else if(u<1e3||!d.TYPED_ARRAY_SUPPORT)for(i=0;i<u;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+u),t);return u},d.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var u;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(u=t;u<r;++u)this[u]=e;else{var a=d.isBuffer(e)?e:z(new d(e,n).toString()),o=a.length;for(u=0;u<r-t;++u)this[u+t]=a[u%o]}return this};var N=/[^+\/0-9A-Za-z-_]/g;function D(e){return e<16?"0"+e.toString(16):e.toString(16)}function z(e,t){var r;t=t||1/0;for(var n=e.length,i=null,u=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&u.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&u.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&u.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&u.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;u.push(r)}else if(r<2048){if((t-=2)<0)break;u.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;u.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;u.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return u}function F(e){return n.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(N,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function q(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}}).call(this,r(0))},function(e,t,r){var n=r(84);e.exports=n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},function(e,t,r){var n=r(57),i=r(55);e.exports=function(e){return n(i(e))}},function(e,t,r){e.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r,n,i=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(r===setTimeout)return setTimeout(e,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:u}catch(e){r=u}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var d,f=[],s=!1,c=-1;function h(){s&&d&&(s=!1,d.length?f=d.concat(f):c=-1,f.length&&l())}function l(){if(!s){var e=o(h);s=!0;for(var t=f.length;t;){for(d=f,f=[];++c<t;)d&&d[c].run();c=-1,t=f.length}d=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function b(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new p(e,t)),1!==f.length||s||o(l)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var r=void 0;"getConditionUri"in t?r=t.getConditionUri():"serializeUri"in t&&(r=t.serializeUri());var i={details:{},uri:r};0===t.getTypeId()&&(i.details.type_id=0,i.details.bitmask=3,"preimage"in t&&(i.details.preimage=t.preimage.toString(),i.details.type="fulfillment"));if(2===t.getTypeId())return{details:{type:"threshold-sha-256",threshold:t.threshold,subconditions:t.subconditions.map(function(t){var r=e(t.body);return r.details})},uri:r};4===t.getTypeId()&&(i.details.type="ed25519-sha-256","publicKey"in t&&(i.details.public_key=n.default.encode(t.publicKey)));"hash"in t&&(i.details.hash=n.default.encode(t.hash),i.details.max_fulfillment_length=t.maxFulfillmentLength,i.details.type="condition");return i};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(3))},function(e,t,r){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function u(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new u(i.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new u(i.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},r(23),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,r(0))},function(module,exports,__webpack_require__){(function(setImmediate,clearImmediate){module.exports=function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=84)}([function(e,t,r){"use strict";(function(e){function n(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(e,t){if(n()<t)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=u.prototype:(null===e&&(e=new u(t)),e.length=t),e}function u(e,t,r){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return d(this,e)}return a(this,e,t,r)}function a(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n),u.TYPED_ARRAY_SUPPORT?(e=t).__proto__=u.prototype:e=f(e,t),e}(e,t,r,n):"string"==typeof t?function(e,t,r){if("string"==typeof r&&""!==r||(r="utf8"),!u.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|c(t,r),a=(e=i(e,n)).write(t,r);return a!==n&&(e=e.slice(0,a)),e}(e,t,r):function(e,t){if(u.isBuffer(t)){var r=0|s(t.length);return 0===(e=i(e,r)).length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||function(e){return e!=e}(t.length)?i(e,0):f(e,t);if("Buffer"===t.type&&z(t.data))return f(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function o(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function d(e,t){if(o(t),e=i(e,t<0?0:0|s(t)),!u.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function f(e,t){var r=t.length<0?0:0|s(t.length);e=i(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function s(e){if(e>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|e}function c(e,t){if(u.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return j(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(e).length;default:if(n)return j(e).length;t=(""+t).toLowerCase(),n=!0}}function h(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function l(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=u.from(t,n)),u.isBuffer(t))return 0===t.length?-1:p(e,t,r,n,i);if("number"==typeof t)return t&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):p(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function p(e,t,r,n,i){function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}var a,o=1,d=e.length,f=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,d/=2,f/=2,r/=2}if(i){var s=-1;for(a=r;a<d;a++)if(u(e,a)===u(t,-1===s?0:a-s)){if(-1===s&&(s=a),a-s+1===f)return s*o}else-1!==s&&(a-=a-s),s=-1}else for(r+f>d&&(r=d-f),a=r;a>=0;a--){for(var c=!0,h=0;h<f;h++)if(u(e,a+h)!==u(t,h)){c=!1;break}if(c)return a}return-1}function b(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var u=t.length;if(u%2!=0)throw new TypeError("Invalid hex string");n>u/2&&(n=u/2);for(var a=0;a<n;++a){var o=parseInt(t.substr(2*a,2),16);if(isNaN(o))return a;e[r+a]=o}return a}function y(e,t,r,n){return L(j(t,e.length-r),e,r,n)}function m(e,t,r,n){return L(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function g(e,t,r,n){return m(e,t,r,n)}function v(e,t,r,n){return L(U(t),e,r,n)}function _(e,t,r,n){return L(function(e,t){for(var r,n,i,u=[],a=0;a<e.length&&!((t-=2)<0);++a)r=e.charCodeAt(a),n=r>>8,i=r%256,u.push(i),u.push(n);return u}(t,e.length-r),e,r,n)}function w(e,t,r){return 0===t&&r===e.length?N.fromByteArray(e):N.fromByteArray(e.slice(t,r))}function S(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var u,a,o,d,f=e[i],s=null,c=f>239?4:f>223?3:f>191?2:1;if(i+c<=r)switch(c){case 1:f<128&&(s=f);break;case 2:128==(192&(u=e[i+1]))&&(d=(31&f)<<6|63&u)>127&&(s=d);break;case 3:u=e[i+1],a=e[i+2],128==(192&u)&&128==(192&a)&&(d=(15&f)<<12|(63&u)<<6|63&a)>2047&&(d<55296||d>57343)&&(s=d);break;case 4:u=e[i+1],a=e[i+2],o=e[i+3],128==(192&u)&&128==(192&a)&&128==(192&o)&&(d=(15&f)<<18|(63&u)<<12|(63&a)<<6|63&o)>65535&&d<1114112&&(s=d)}null===s?(s=65533,c=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=c}return function(e){var t=e.length;if(t<=F)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=F));return r}(n)}function E(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function A(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function x(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",u=t;u<r;++u)i+=R(e[u]);return i}function k(e,t,r){for(var n=e.slice(t,r),i="",u=0;u<n.length;u+=2)i+=String.fromCharCode(n[u]+256*n[u+1]);return i}function M(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function I(e,t,r,n,i,a){if(!u.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function T(e,t,r,n){t<0&&(t=65535+t+1);for(var i=0,u=Math.min(e.length-r,2);i<u;++i)e[r+i]=(t&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function B(e,t,r,n){t<0&&(t=4294967295+t+1);for(var i=0,u=Math.min(e.length-r,4);i<u;++i)e[r+i]=t>>>8*(n?i:3-i)&255}function C(e,t,r,n,i,u){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function P(e,t,r,n,i){return i||C(e,0,r,4),D.write(e,t,r,n,23,4),r+4}function O(e,t,r,n,i){return i||C(e,0,r,8),D.write(e,t,r,n,52,8),r+8}function R(e){return e<16?"0"+e.toString(16):e.toString(16)}function j(e,t){t=t||1/0;for(var r,n=e.length,i=null,u=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&u.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&u.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&u.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&u.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;u.push(r)}else if(r<2048){if((t-=2)<0)break;u.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;u.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;u.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return u}function U(e){return N.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(q,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function L(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}var N=r(86),D=r(87),z=r(48);t.Buffer=u,t.SlowBuffer=function(e){return+e!=e&&(e=0),u.alloc(+e)},t.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=n(),u.poolSize=8192,u._augment=function(e){return e.__proto__=u.prototype,e},u.from=function(e,t,r){return a(null,e,t,r)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(e,t,r){return function(e,t,r,n){return o(t),t<=0?i(e,t):void 0!==r?"string"==typeof n?i(e,t).fill(r,n):i(e,t).fill(r):i(e,t)}(null,e,t,r)},u.allocUnsafe=function(e){return d(null,e)},u.allocUnsafeSlow=function(e){return d(null,e)},u.isBuffer=function(e){return!(null==e||!e._isBuffer)},u.compare=function(e,t){if(!u.isBuffer(e)||!u.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},u.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(e,t){if(!z(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return u.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=u.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(!u.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i),i+=a.length}return n},u.byteLength=c,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)h(this,t,t+1);return this},u.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)h(this,t,t+3),h(this,t+1,t+2);return this},u.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)h(this,t,t+7),h(this,t+1,t+6),h(this,t+2,t+5),h(this,t+3,t+4);return this},u.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?S(this,0,e):function(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return x(this,t,r);case"utf8":case"utf-8":return S(this,t,r);case"ascii":return E(this,t,r);case"latin1":case"binary":return A(this,t,r);case"base64":return w(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}.apply(this,arguments)},u.prototype.equals=function(e){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===u.compare(this,e)},u.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},u.prototype.compare=function(e,t,r,n,i){if(!u.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var a=i-n,o=r-t,d=Math.min(a,o),f=this.slice(n,i),s=e.slice(t,r),c=0;c<d;++c)if(f[c]!==s[c]){a=f[c],o=s[c];break}return a<o?-1:o<a?1:0},u.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},u.prototype.indexOf=function(e,t,r){return l(this,e,t,r,!0)},u.prototype.lastIndexOf=function(e,t,r){return l(this,e,t,r,!1)},u.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var u=!1;;)switch(n){case"hex":return b(this,e,t,r);case"utf8":case"utf-8":return y(this,e,t,r);case"ascii":return m(this,e,t,r);case"latin1":case"binary":return g(this,e,t,r);case"base64":return v(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _(this,e,t,r);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var F=4096;u.prototype.slice=function(e,t){var r,n=this.length;if(e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e),u.TYPED_ARRAY_SUPPORT)(r=this.subarray(e,t)).__proto__=u.prototype;else{var i=t-e;r=new u(i,void 0);for(var a=0;a<i;++a)r[a]=this[a+e]}return r},u.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||M(e,t,this.length);for(var n=this[e],i=1,u=0;++u<t&&(i*=256);)n+=this[e+u]*i;return n},u.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||M(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},u.prototype.readUInt8=function(e,t){return t||M(e,1,this.length),this[e]},u.prototype.readUInt16LE=function(e,t){return t||M(e,2,this.length),this[e]|this[e+1]<<8},u.prototype.readUInt16BE=function(e,t){return t||M(e,2,this.length),this[e]<<8|this[e+1]},u.prototype.readUInt32LE=function(e,t){return t||M(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},u.prototype.readUInt32BE=function(e,t){return t||M(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},u.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||M(e,t,this.length);for(var n=this[e],i=1,u=0;++u<t&&(i*=256);)n+=this[e+u]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},u.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||M(e,t,this.length);for(var n=t,i=1,u=this[e+--n];n>0&&(i*=256);)u+=this[e+--n]*i;return u>=(i*=128)&&(u-=Math.pow(2,8*t)),u},u.prototype.readInt8=function(e,t){return t||M(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},u.prototype.readInt16LE=function(e,t){t||M(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt16BE=function(e,t){t||M(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},u.prototype.readInt32LE=function(e,t){return t||M(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},u.prototype.readInt32BE=function(e,t){return t||M(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},u.prototype.readFloatLE=function(e,t){return t||M(e,4,this.length),D.read(this,e,!0,23,4)},u.prototype.readFloatBE=function(e,t){return t||M(e,4,this.length),D.read(this,e,!1,23,4)},u.prototype.readDoubleLE=function(e,t){return t||M(e,8,this.length),D.read(this,e,!0,52,8)},u.prototype.readDoubleBE=function(e,t){return t||M(e,8,this.length),D.read(this,e,!1,52,8)},u.prototype.writeUIntLE=function(e,t,r,n){e=+e,t|=0,r|=0,n||I(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,u=0;for(this[t]=255&e;++u<r&&(i*=256);)this[t+u]=e/i&255;return t+r},u.prototype.writeUIntBE=function(e,t,r,n){e=+e,t|=0,r|=0,n||I(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,u=1;for(this[t+i]=255&e;--i>=0&&(u*=256);)this[t+i]=e/u&255;return t+r},u.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,1,255,0),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},u.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):T(this,e,t,!0),t+2},u.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):T(this,e,t,!1),t+2},u.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):B(this,e,t,!0),t+4},u.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):B(this,e,t,!1),t+4},u.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);I(this,e,t,r,i-1,-i)}var u=0,a=1,o=0;for(this[t]=255&e;++u<r&&(a*=256);)e<0&&0===o&&0!==this[t+u-1]&&(o=1),this[t+u]=(e/a>>0)-o&255;return t+r},u.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var i=Math.pow(2,8*r-1);I(this,e,t,r,i-1,-i)}var u=r-1,a=1,o=0;for(this[t+u]=255&e;--u>=0&&(a*=256);)e<0&&0===o&&0!==this[t+u+1]&&(o=1),this[t+u]=(e/a>>0)-o&255;return t+r},u.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,1,127,-128),u.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},u.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):T(this,e,t,!0),t+2},u.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):T(this,e,t,!1),t+2},u.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):B(this,e,t,!0),t+4},u.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||I(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),u.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):B(this,e,t,!1),t+4},u.prototype.writeFloatLE=function(e,t,r){return P(this,e,t,!0,r)},u.prototype.writeFloatBE=function(e,t,r){return P(this,e,t,!1,r)},u.prototype.writeDoubleLE=function(e,t,r){return O(this,e,t,!0,r)},u.prototype.writeDoubleBE=function(e,t,r){return O(this,e,t,!1,r)},u.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i,a=n-r;if(this===e&&r<t&&t<n)for(i=a-1;i>=0;--i)e[i+t]=this[i+r];else if(a<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+a),t);return a},u.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var i=e.charCodeAt(0);i<256&&(e=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!u.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var a;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var o=u.isBuffer(e)?e:j(new u(e,n).toString()),d=o.length;for(a=0;a<r-t;++a)this[a+t]=o[a%d]}return this};var q=/[^+\/0-9A-Za-z-_]/g}).call(t,r(9))},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},function(e,t,r){function n(e,t){for(var r in e)t[r]=e[r]}function i(e,t,r){return a(e,t,r)}var u=r(0),a=u.Buffer;a.from&&a.alloc&&a.allocUnsafe&&a.allocUnsafeSlow?e.exports=u:(n(u,t),t.Buffer=i),n(a,i),i.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return a(e,t,r)},i.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=a(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},i.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return a(e)},i.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return u.SlowBuffer(e)}},function(e,t,r){(function(e){!function(e,t){"use strict";function n(e,t){if(!e)throw new Error(t||"Assertion failed")}function i(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function u(e,t,r){if(u.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&("le"!==t&&"be"!==t||(r=t,t=10),this._init(e||0,t||10,r||"be"))}function a(e,t,r){for(var n=0,i=Math.min(e.length,r),u=t;u<i;u++){var a=e.charCodeAt(u)-48;n<<=4,n|=a>=49&&a<=54?a-49+10:a>=17&&a<=22?a-17+10:15&a}return n}function o(e,t,r,n){for(var i=0,u=Math.min(e.length,r),a=t;a<u;a++){var o=e.charCodeAt(a)-48;i*=n,i+=o>=49?o-49+10:o>=17?o-17+10:o}return i}function d(e,t,r){r.negative=t.negative^e.negative;var n=e.length+t.length|0;r.length=n,n=n-1|0;var i=0|e.words[0],u=0|t.words[0],a=i*u,o=67108863&a,d=a/67108864|0;r.words[0]=o;for(var f=1;f<n;f++){for(var s=d>>>26,c=67108863&d,h=Math.min(f,t.length-1),l=Math.max(0,f-e.length+1);l<=h;l++){var p=f-l|0;i=0|e.words[p],u=0|t.words[l],s+=(a=i*u+c)/67108864|0,c=67108863&a}r.words[f]=0|c,d=0|s}return 0!==d?r.words[f]=0|d:r.length--,r.strip()}function f(e,t,r){return(new s).mulp(e,t,r)}function s(e,t){this.x=e,this.y=t}function c(e,t){this.name=e,this.p=new u(t,16),this.n=this.p.bitLength(),this.k=new u(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function h(){c.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function l(){c.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function p(){c.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function b(){c.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function y(e){if("string"==typeof e){var t=u._prime(e);this.m=t.p,this.prime=t}else n(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function m(e){y.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new u(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}var g;"object"==typeof e?e.exports=u:t.BN=u,u.BN=u,u.wordSize=26;try{g=r(95).Buffer}catch(e){}u.isBN=function(e){return e instanceof u||null!==e&&"object"==typeof e&&e.constructor.wordSize===u.wordSize&&Array.isArray(e.words)},u.max=function(e,t){return e.cmp(t)>0?e:t},u.min=function(e,t){return e.cmp(t)<0?e:t},u.prototype._init=function(e,t,r){if("number"==typeof e)return this._initNumber(e,t,r);if("object"==typeof e)return this._initArray(e,t,r);"hex"===t&&(t=16),n(t===(0|t)&&t>=2&&t<=36);var i=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&i++,16===t?this._parseHex(e,i):this._parseBase(e,t,i),"-"===e[0]&&(this.negative=1),this.strip(),"le"===r&&this._initArray(this.toArray(),t,r)},u.prototype._initNumber=function(e,t,r){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(n(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===r&&this._initArray(this.toArray(),t,r)},u.prototype._initArray=function(e,t,r){if(n("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var u,a,o=0;if("be"===r)for(i=e.length-1,u=0;i>=0;i-=3)a=e[i]|e[i-1]<<8|e[i-2]<<16,this.words[u]|=a<<o&67108863,this.words[u+1]=a>>>26-o&67108863,(o+=24)>=26&&(o-=26,u++);else if("le"===r)for(i=0,u=0;i<e.length;i+=3)a=e[i]|e[i+1]<<8|e[i+2]<<16,this.words[u]|=a<<o&67108863,this.words[u+1]=a>>>26-o&67108863,(o+=24)>=26&&(o-=26,u++);return this.strip()},u.prototype._parseHex=function(e,t){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var r=0;r<this.length;r++)this.words[r]=0;var n,i,u=0;for(r=e.length-6,n=0;r>=t;r-=6)i=a(e,r,r+6),this.words[n]|=i<<u&67108863,this.words[n+1]|=i>>>26-u&4194303,(u+=24)>=26&&(u-=26,n++);r+6!==t&&(i=a(e,t,r+6),this.words[n]|=i<<u&67108863,this.words[n+1]|=i>>>26-u&4194303),this.strip()},u.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var n=0,i=1;i<=67108863;i*=t)n++;n--,i=i/t|0;for(var u=e.length-r,a=u%n,d=Math.min(u,u-a)+r,f=0,s=r;s<d;s+=n)f=o(e,s,s+n,t),this.imuln(i),this.words[0]+f<67108864?this.words[0]+=f:this._iaddn(f);if(0!==a){var c=1;for(f=o(e,s,e.length,t),s=0;s<a;s++)c*=t;this.imuln(c),this.words[0]+f<67108864?this.words[0]+=f:this._iaddn(f)}},u.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},u.prototype.clone=function(){var e=new u(null);return this.copy(e),e},u.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},u.prototype.strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},u.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},u.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var v=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],_=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],w=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];u.prototype.toString=function(e,t){var r;if(e=e||10,t=0|t||1,16===e||"hex"===e){r="";for(var i=0,u=0,a=0;a<this.length;a++){var o=this.words[a],d=(16777215&(o<<i|u)).toString(16);r=0!=(u=o>>>24-i&16777215)||a!==this.length-1?v[6-d.length]+d+r:d+r,(i+=2)>=26&&(i-=26,a--)}for(0!==u&&(r=u.toString(16)+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}if(e===(0|e)&&e>=2&&e<=36){var f=_[e],s=w[e];r="";var c=this.clone();for(c.negative=0;!c.isZero();){var h=c.modn(s).toString(e);c=c.idivn(s),r=c.isZero()?h+r:v[f-h.length]+h+r}for(this.isZero()&&(r="0"+r);r.length%t!=0;)r="0"+r;return 0!==this.negative&&(r="-"+r),r}n(!1,"Base should be between 2 and 36")},u.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&n(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},u.prototype.toJSON=function(){return this.toString(16)},u.prototype.toBuffer=function(e,t){return n(void 0!==g),this.toArrayLike(g,e,t)},u.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)},u.prototype.toArrayLike=function(e,t,r){var i=this.byteLength(),u=r||Math.max(1,i);n(i<=u,"byte array longer than desired length"),n(u>0,"Requested array length <= 0"),this.strip();var a,o,d="le"===t,f=new e(u),s=this.clone();if(d){for(o=0;!s.isZero();o++)a=s.andln(255),s.iushrn(8),f[o]=a;for(;o<u;o++)f[o]=0}else{for(o=0;o<u-i;o++)f[o]=0;for(o=0;!s.isZero();o++)a=s.andln(255),s.iushrn(8),f[u-o-1]=a}return f},Math.clz32?u.prototype._countBits=function(e){return 32-Math.clz32(e)}:u.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},u.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 0==(8191&t)&&(r+=13,t>>>=13),0==(127&t)&&(r+=7,t>>>=7),0==(15&t)&&(r+=4,t>>>=4),0==(3&t)&&(r+=2,t>>>=2),0==(1&t)&&r++,r},u.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},u.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},u.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},u.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},u.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},u.prototype.isNeg=function(){return 0!==this.negative},u.prototype.neg=function(){return this.clone().ineg()},u.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},u.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this.strip()},u.prototype.ior=function(e){return n(0==(this.negative|e.negative)),this.iuor(e)},u.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},u.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},u.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this.strip()},u.prototype.iand=function(e){return n(0==(this.negative|e.negative)),this.iuand(e)},u.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},u.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},u.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var n=0;n<r.length;n++)this.words[n]=t.words[n]^r.words[n];if(this!==t)for(;n<t.length;n++)this.words[n]=t.words[n];return this.length=t.length,this.strip()},u.prototype.ixor=function(e){return n(0==(this.negative|e.negative)),this.iuxor(e)},u.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},u.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},u.prototype.inotn=function(e){n("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),r=e%26;this._expand(t),r>0&&t--;for(var i=0;i<t;i++)this.words[i]=67108863&~this.words[i];return r>0&&(this.words[i]=~this.words[i]&67108863>>26-r),this.strip()},u.prototype.notn=function(e){return this.clone().inotn(e)},u.prototype.setn=function(e,t){n("number"==typeof e&&e>=0);var r=e/26|0,i=e%26;return this._expand(r+1),this.words[r]=t?this.words[r]|1<<i:this.words[r]&~(1<<i),this.strip()},u.prototype.iadd=function(e){var t,r,n;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(r=this,n=e):(r=e,n=this);for(var i=0,u=0;u<n.length;u++)t=(0|r.words[u])+(0|n.words[u])+i,this.words[u]=67108863&t,i=t>>>26;for(;0!==i&&u<r.length;u++)t=(0|r.words[u])+i,this.words[u]=67108863&t,i=t>>>26;if(this.length=r.length,0!==i)this.words[this.length]=i,this.length++;else if(r!==this)for(;u<r.length;u++)this.words[u]=r.words[u];return this},u.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},u.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r,n,i=this.cmp(e);if(0===i)return this.negative=0,this.length=1,this.words[0]=0,this;i>0?(r=this,n=e):(r=e,n=this);for(var u=0,a=0;a<n.length;a++)t=(0|r.words[a])-(0|n.words[a])+u,u=t>>26,this.words[a]=67108863&t;for(;0!==u&&a<r.length;a++)t=(0|r.words[a])+u,u=t>>26,this.words[a]=67108863&t;if(0===u&&a<r.length&&r!==this)for(;a<r.length;a++)this.words[a]=r.words[a];return this.length=Math.max(this.length,a),r!==this&&(this.negative=1),this.strip()},u.prototype.sub=function(e){return this.clone().isub(e)};var S=function(e,t,r){var n,i,u,a=e.words,o=t.words,d=r.words,f=0,s=0|a[0],c=8191&s,h=s>>>13,l=0|a[1],p=8191&l,b=l>>>13,y=0|a[2],m=8191&y,g=y>>>13,v=0|a[3],_=8191&v,w=v>>>13,S=0|a[4],E=8191&S,A=S>>>13,x=0|a[5],k=8191&x,M=x>>>13,I=0|a[6],T=8191&I,B=I>>>13,C=0|a[7],P=8191&C,O=C>>>13,R=0|a[8],j=8191&R,U=R>>>13,L=0|a[9],N=8191&L,D=L>>>13,z=0|o[0],F=8191&z,q=z>>>13,K=0|o[1],Y=8191&K,H=K>>>13,J=0|o[2],G=8191&J,V=J>>>13,X=0|o[3],W=8191&X,Z=X>>>13,$=0|o[4],Q=8191&$,ee=$>>>13,te=0|o[5],re=8191&te,ne=te>>>13,ie=0|o[6],ue=8191&ie,ae=ie>>>13,oe=0|o[7],de=8191&oe,fe=oe>>>13,se=0|o[8],ce=8191&se,he=se>>>13,le=0|o[9],pe=8191&le,be=le>>>13;r.negative=e.negative^t.negative,r.length=19,n=Math.imul(c,F),i=(i=Math.imul(c,q))+Math.imul(h,F)|0,u=Math.imul(h,q);var ye=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(ye>>>26)|0,ye&=67108863,n=Math.imul(p,F),i=(i=Math.imul(p,q))+Math.imul(b,F)|0,u=Math.imul(b,q),n=n+Math.imul(c,Y)|0,i=(i=i+Math.imul(c,H)|0)+Math.imul(h,Y)|0,u=u+Math.imul(h,H)|0;var me=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(me>>>26)|0,me&=67108863,n=Math.imul(m,F),i=(i=Math.imul(m,q))+Math.imul(g,F)|0,u=Math.imul(g,q),n=n+Math.imul(p,Y)|0,i=(i=i+Math.imul(p,H)|0)+Math.imul(b,Y)|0,u=u+Math.imul(b,H)|0,n=n+Math.imul(c,G)|0,i=(i=i+Math.imul(c,V)|0)+Math.imul(h,G)|0,u=u+Math.imul(h,V)|0;var ge=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(ge>>>26)|0,ge&=67108863,n=Math.imul(_,F),i=(i=Math.imul(_,q))+Math.imul(w,F)|0,u=Math.imul(w,q),n=n+Math.imul(m,Y)|0,i=(i=i+Math.imul(m,H)|0)+Math.imul(g,Y)|0,u=u+Math.imul(g,H)|0,n=n+Math.imul(p,G)|0,i=(i=i+Math.imul(p,V)|0)+Math.imul(b,G)|0,u=u+Math.imul(b,V)|0,n=n+Math.imul(c,W)|0,i=(i=i+Math.imul(c,Z)|0)+Math.imul(h,W)|0,u=u+Math.imul(h,Z)|0;var ve=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(ve>>>26)|0,ve&=67108863,n=Math.imul(E,F),i=(i=Math.imul(E,q))+Math.imul(A,F)|0,u=Math.imul(A,q),n=n+Math.imul(_,Y)|0,i=(i=i+Math.imul(_,H)|0)+Math.imul(w,Y)|0,u=u+Math.imul(w,H)|0,n=n+Math.imul(m,G)|0,i=(i=i+Math.imul(m,V)|0)+Math.imul(g,G)|0,u=u+Math.imul(g,V)|0,n=n+Math.imul(p,W)|0,i=(i=i+Math.imul(p,Z)|0)+Math.imul(b,W)|0,u=u+Math.imul(b,Z)|0,n=n+Math.imul(c,Q)|0,i=(i=i+Math.imul(c,ee)|0)+Math.imul(h,Q)|0,u=u+Math.imul(h,ee)|0;var _e=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(_e>>>26)|0,_e&=67108863,n=Math.imul(k,F),i=(i=Math.imul(k,q))+Math.imul(M,F)|0,u=Math.imul(M,q),n=n+Math.imul(E,Y)|0,i=(i=i+Math.imul(E,H)|0)+Math.imul(A,Y)|0,u=u+Math.imul(A,H)|0,n=n+Math.imul(_,G)|0,i=(i=i+Math.imul(_,V)|0)+Math.imul(w,G)|0,u=u+Math.imul(w,V)|0,n=n+Math.imul(m,W)|0,i=(i=i+Math.imul(m,Z)|0)+Math.imul(g,W)|0,u=u+Math.imul(g,Z)|0,n=n+Math.imul(p,Q)|0,i=(i=i+Math.imul(p,ee)|0)+Math.imul(b,Q)|0,u=u+Math.imul(b,ee)|0,n=n+Math.imul(c,re)|0,i=(i=i+Math.imul(c,ne)|0)+Math.imul(h,re)|0,u=u+Math.imul(h,ne)|0;var we=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(we>>>26)|0,we&=67108863,n=Math.imul(T,F),i=(i=Math.imul(T,q))+Math.imul(B,F)|0,u=Math.imul(B,q),n=n+Math.imul(k,Y)|0,i=(i=i+Math.imul(k,H)|0)+Math.imul(M,Y)|0,u=u+Math.imul(M,H)|0,n=n+Math.imul(E,G)|0,i=(i=i+Math.imul(E,V)|0)+Math.imul(A,G)|0,u=u+Math.imul(A,V)|0,n=n+Math.imul(_,W)|0,i=(i=i+Math.imul(_,Z)|0)+Math.imul(w,W)|0,u=u+Math.imul(w,Z)|0,n=n+Math.imul(m,Q)|0,i=(i=i+Math.imul(m,ee)|0)+Math.imul(g,Q)|0,u=u+Math.imul(g,ee)|0,n=n+Math.imul(p,re)|0,i=(i=i+Math.imul(p,ne)|0)+Math.imul(b,re)|0,u=u+Math.imul(b,ne)|0,n=n+Math.imul(c,ue)|0,i=(i=i+Math.imul(c,ae)|0)+Math.imul(h,ue)|0,u=u+Math.imul(h,ae)|0;var Se=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Se>>>26)|0,Se&=67108863,n=Math.imul(P,F),i=(i=Math.imul(P,q))+Math.imul(O,F)|0,u=Math.imul(O,q),n=n+Math.imul(T,Y)|0,i=(i=i+Math.imul(T,H)|0)+Math.imul(B,Y)|0,u=u+Math.imul(B,H)|0,n=n+Math.imul(k,G)|0,i=(i=i+Math.imul(k,V)|0)+Math.imul(M,G)|0,u=u+Math.imul(M,V)|0,n=n+Math.imul(E,W)|0,i=(i=i+Math.imul(E,Z)|0)+Math.imul(A,W)|0,u=u+Math.imul(A,Z)|0,n=n+Math.imul(_,Q)|0,i=(i=i+Math.imul(_,ee)|0)+Math.imul(w,Q)|0,u=u+Math.imul(w,ee)|0,n=n+Math.imul(m,re)|0,i=(i=i+Math.imul(m,ne)|0)+Math.imul(g,re)|0,u=u+Math.imul(g,ne)|0,n=n+Math.imul(p,ue)|0,i=(i=i+Math.imul(p,ae)|0)+Math.imul(b,ue)|0,u=u+Math.imul(b,ae)|0,n=n+Math.imul(c,de)|0,i=(i=i+Math.imul(c,fe)|0)+Math.imul(h,de)|0,u=u+Math.imul(h,fe)|0;var Ee=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,n=Math.imul(j,F),i=(i=Math.imul(j,q))+Math.imul(U,F)|0,u=Math.imul(U,q),n=n+Math.imul(P,Y)|0,i=(i=i+Math.imul(P,H)|0)+Math.imul(O,Y)|0,u=u+Math.imul(O,H)|0,n=n+Math.imul(T,G)|0,i=(i=i+Math.imul(T,V)|0)+Math.imul(B,G)|0,u=u+Math.imul(B,V)|0,n=n+Math.imul(k,W)|0,i=(i=i+Math.imul(k,Z)|0)+Math.imul(M,W)|0,u=u+Math.imul(M,Z)|0,n=n+Math.imul(E,Q)|0,i=(i=i+Math.imul(E,ee)|0)+Math.imul(A,Q)|0,u=u+Math.imul(A,ee)|0,n=n+Math.imul(_,re)|0,i=(i=i+Math.imul(_,ne)|0)+Math.imul(w,re)|0,u=u+Math.imul(w,ne)|0,n=n+Math.imul(m,ue)|0,i=(i=i+Math.imul(m,ae)|0)+Math.imul(g,ue)|0,u=u+Math.imul(g,ae)|0,n=n+Math.imul(p,de)|0,i=(i=i+Math.imul(p,fe)|0)+Math.imul(b,de)|0,u=u+Math.imul(b,fe)|0,n=n+Math.imul(c,ce)|0,i=(i=i+Math.imul(c,he)|0)+Math.imul(h,ce)|0,u=u+Math.imul(h,he)|0;var Ae=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,n=Math.imul(N,F),i=(i=Math.imul(N,q))+Math.imul(D,F)|0,u=Math.imul(D,q),n=n+Math.imul(j,Y)|0,i=(i=i+Math.imul(j,H)|0)+Math.imul(U,Y)|0,u=u+Math.imul(U,H)|0,n=n+Math.imul(P,G)|0,i=(i=i+Math.imul(P,V)|0)+Math.imul(O,G)|0,u=u+Math.imul(O,V)|0,n=n+Math.imul(T,W)|0,i=(i=i+Math.imul(T,Z)|0)+Math.imul(B,W)|0,u=u+Math.imul(B,Z)|0,n=n+Math.imul(k,Q)|0,i=(i=i+Math.imul(k,ee)|0)+Math.imul(M,Q)|0,u=u+Math.imul(M,ee)|0,n=n+Math.imul(E,re)|0,i=(i=i+Math.imul(E,ne)|0)+Math.imul(A,re)|0,u=u+Math.imul(A,ne)|0,n=n+Math.imul(_,ue)|0,i=(i=i+Math.imul(_,ae)|0)+Math.imul(w,ue)|0,u=u+Math.imul(w,ae)|0,n=n+Math.imul(m,de)|0,i=(i=i+Math.imul(m,fe)|0)+Math.imul(g,de)|0,u=u+Math.imul(g,fe)|0,n=n+Math.imul(p,ce)|0,i=(i=i+Math.imul(p,he)|0)+Math.imul(b,ce)|0,u=u+Math.imul(b,he)|0,n=n+Math.imul(c,pe)|0,i=(i=i+Math.imul(c,be)|0)+Math.imul(h,pe)|0,u=u+Math.imul(h,be)|0;var xe=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(xe>>>26)|0,xe&=67108863,n=Math.imul(N,Y),i=(i=Math.imul(N,H))+Math.imul(D,Y)|0,u=Math.imul(D,H),n=n+Math.imul(j,G)|0,i=(i=i+Math.imul(j,V)|0)+Math.imul(U,G)|0,u=u+Math.imul(U,V)|0,n=n+Math.imul(P,W)|0,i=(i=i+Math.imul(P,Z)|0)+Math.imul(O,W)|0,u=u+Math.imul(O,Z)|0,n=n+Math.imul(T,Q)|0,i=(i=i+Math.imul(T,ee)|0)+Math.imul(B,Q)|0,u=u+Math.imul(B,ee)|0,n=n+Math.imul(k,re)|0,i=(i=i+Math.imul(k,ne)|0)+Math.imul(M,re)|0,u=u+Math.imul(M,ne)|0,n=n+Math.imul(E,ue)|0,i=(i=i+Math.imul(E,ae)|0)+Math.imul(A,ue)|0,u=u+Math.imul(A,ae)|0,n=n+Math.imul(_,de)|0,i=(i=i+Math.imul(_,fe)|0)+Math.imul(w,de)|0,u=u+Math.imul(w,fe)|0,n=n+Math.imul(m,ce)|0,i=(i=i+Math.imul(m,he)|0)+Math.imul(g,ce)|0,u=u+Math.imul(g,he)|0,n=n+Math.imul(p,pe)|0,i=(i=i+Math.imul(p,be)|0)+Math.imul(b,pe)|0,u=u+Math.imul(b,be)|0;var ke=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(ke>>>26)|0,ke&=67108863,n=Math.imul(N,G),i=(i=Math.imul(N,V))+Math.imul(D,G)|0,u=Math.imul(D,V),n=n+Math.imul(j,W)|0,i=(i=i+Math.imul(j,Z)|0)+Math.imul(U,W)|0,u=u+Math.imul(U,Z)|0,n=n+Math.imul(P,Q)|0,i=(i=i+Math.imul(P,ee)|0)+Math.imul(O,Q)|0,u=u+Math.imul(O,ee)|0,n=n+Math.imul(T,re)|0,i=(i=i+Math.imul(T,ne)|0)+Math.imul(B,re)|0,u=u+Math.imul(B,ne)|0,n=n+Math.imul(k,ue)|0,i=(i=i+Math.imul(k,ae)|0)+Math.imul(M,ue)|0,u=u+Math.imul(M,ae)|0,n=n+Math.imul(E,de)|0,i=(i=i+Math.imul(E,fe)|0)+Math.imul(A,de)|0,u=u+Math.imul(A,fe)|0,n=n+Math.imul(_,ce)|0,i=(i=i+Math.imul(_,he)|0)+Math.imul(w,ce)|0,u=u+Math.imul(w,he)|0,n=n+Math.imul(m,pe)|0,i=(i=i+Math.imul(m,be)|0)+Math.imul(g,pe)|0,u=u+Math.imul(g,be)|0;var Me=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Me>>>26)|0,Me&=67108863,n=Math.imul(N,W),i=(i=Math.imul(N,Z))+Math.imul(D,W)|0,u=Math.imul(D,Z),n=n+Math.imul(j,Q)|0,i=(i=i+Math.imul(j,ee)|0)+Math.imul(U,Q)|0,u=u+Math.imul(U,ee)|0,n=n+Math.imul(P,re)|0,i=(i=i+Math.imul(P,ne)|0)+Math.imul(O,re)|0,u=u+Math.imul(O,ne)|0,n=n+Math.imul(T,ue)|0,i=(i=i+Math.imul(T,ae)|0)+Math.imul(B,ue)|0,u=u+Math.imul(B,ae)|0,n=n+Math.imul(k,de)|0,i=(i=i+Math.imul(k,fe)|0)+Math.imul(M,de)|0,u=u+Math.imul(M,fe)|0,n=n+Math.imul(E,ce)|0,i=(i=i+Math.imul(E,he)|0)+Math.imul(A,ce)|0,u=u+Math.imul(A,he)|0,n=n+Math.imul(_,pe)|0,i=(i=i+Math.imul(_,be)|0)+Math.imul(w,pe)|0,u=u+Math.imul(w,be)|0;var Ie=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,n=Math.imul(N,Q),i=(i=Math.imul(N,ee))+Math.imul(D,Q)|0,u=Math.imul(D,ee),n=n+Math.imul(j,re)|0,i=(i=i+Math.imul(j,ne)|0)+Math.imul(U,re)|0,u=u+Math.imul(U,ne)|0,n=n+Math.imul(P,ue)|0,i=(i=i+Math.imul(P,ae)|0)+Math.imul(O,ue)|0,u=u+Math.imul(O,ae)|0,n=n+Math.imul(T,de)|0,i=(i=i+Math.imul(T,fe)|0)+Math.imul(B,de)|0,u=u+Math.imul(B,fe)|0,n=n+Math.imul(k,ce)|0,i=(i=i+Math.imul(k,he)|0)+Math.imul(M,ce)|0,u=u+Math.imul(M,he)|0,n=n+Math.imul(E,pe)|0,i=(i=i+Math.imul(E,be)|0)+Math.imul(A,pe)|0,u=u+Math.imul(A,be)|0;var Te=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Te>>>26)|0,Te&=67108863,n=Math.imul(N,re),i=(i=Math.imul(N,ne))+Math.imul(D,re)|0,u=Math.imul(D,ne),n=n+Math.imul(j,ue)|0,i=(i=i+Math.imul(j,ae)|0)+Math.imul(U,ue)|0,u=u+Math.imul(U,ae)|0,n=n+Math.imul(P,de)|0,i=(i=i+Math.imul(P,fe)|0)+Math.imul(O,de)|0,u=u+Math.imul(O,fe)|0,n=n+Math.imul(T,ce)|0,i=(i=i+Math.imul(T,he)|0)+Math.imul(B,ce)|0,u=u+Math.imul(B,he)|0,n=n+Math.imul(k,pe)|0,i=(i=i+Math.imul(k,be)|0)+Math.imul(M,pe)|0,u=u+Math.imul(M,be)|0;var Be=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Be>>>26)|0,Be&=67108863,n=Math.imul(N,ue),i=(i=Math.imul(N,ae))+Math.imul(D,ue)|0,u=Math.imul(D,ae),n=n+Math.imul(j,de)|0,i=(i=i+Math.imul(j,fe)|0)+Math.imul(U,de)|0,u=u+Math.imul(U,fe)|0,n=n+Math.imul(P,ce)|0,i=(i=i+Math.imul(P,he)|0)+Math.imul(O,ce)|0,u=u+Math.imul(O,he)|0,n=n+Math.imul(T,pe)|0,i=(i=i+Math.imul(T,be)|0)+Math.imul(B,pe)|0,u=u+Math.imul(B,be)|0;var Ce=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,n=Math.imul(N,de),i=(i=Math.imul(N,fe))+Math.imul(D,de)|0,u=Math.imul(D,fe),n=n+Math.imul(j,ce)|0,i=(i=i+Math.imul(j,he)|0)+Math.imul(U,ce)|0,u=u+Math.imul(U,he)|0,n=n+Math.imul(P,pe)|0,i=(i=i+Math.imul(P,be)|0)+Math.imul(O,pe)|0,u=u+Math.imul(O,be)|0;var Pe=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,n=Math.imul(N,ce),i=(i=Math.imul(N,he))+Math.imul(D,ce)|0,u=Math.imul(D,he),n=n+Math.imul(j,pe)|0,i=(i=i+Math.imul(j,be)|0)+Math.imul(U,pe)|0,u=u+Math.imul(U,be)|0;var Oe=(f+n|0)+((8191&i)<<13)|0;f=(u+(i>>>13)|0)+(Oe>>>26)|0,Oe&=67108863,n=Math.imul(N,pe),i=(i=Math.imul(N,be))+Math.imul(D,pe)|0,u=Math.imul(D,be);var Re=(f+n|0)+((8191&i)<<13)|0;return f=(u+(i>>>13)|0)+(Re>>>26)|0,Re&=67108863,d[0]=ye,d[1]=me,d[2]=ge,d[3]=ve,d[4]=_e,d[5]=we,d[6]=Se,d[7]=Ee,d[8]=Ae,d[9]=xe,d[10]=ke,d[11]=Me,d[12]=Ie,d[13]=Te,d[14]=Be,d[15]=Ce,d[16]=Pe,d[17]=Oe,d[18]=Re,0!==f&&(d[19]=f,r.length++),r};Math.imul||(S=d),u.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?S(this,e,t):r<63?d(this,e,t):r<1024?function(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var n=0,i=0,u=0;u<r.length-1;u++){var a=i;i=0;for(var o=67108863&n,d=Math.min(u,t.length-1),f=Math.max(0,u-e.length+1);f<=d;f++){var s=u-f,c=0|e.words[s],h=0|t.words[f],l=c*h,p=67108863&l;o=67108863&(p=p+o|0),i+=(a=(a=a+(l/67108864|0)|0)+(p>>>26)|0)>>>26,a&=67108863}r.words[u]=o,n=a,a=i}return 0!==n?r.words[u]=n:r.length--,r.strip()}(this,e,t):f(this,e,t)},s.prototype.makeRBT=function(e){for(var t=new Array(e),r=u.prototype._countBits(e)-1,n=0;n<e;n++)t[n]=this.revBin(n,r,e);return t},s.prototype.revBin=function(e,t,r){if(0===e||e===r-1)return e;for(var n=0,i=0;i<t;i++)n|=(1&e)<<t-i-1,e>>=1;return n},s.prototype.permute=function(e,t,r,n,i,u){for(var a=0;a<u;a++)n[a]=t[e[a]],i[a]=r[e[a]]},s.prototype.transform=function(e,t,r,n,i,u){this.permute(u,e,t,r,n,i);for(var a=1;a<i;a<<=1)for(var o=a<<1,d=Math.cos(2*Math.PI/o),f=Math.sin(2*Math.PI/o),s=0;s<i;s+=o)for(var c=d,h=f,l=0;l<a;l++){var p=r[s+l],b=n[s+l],y=r[s+l+a],m=n[s+l+a],g=c*y-h*m;m=c*m+h*y,y=g,r[s+l]=p+y,n[s+l]=b+m,r[s+l+a]=p-y,n[s+l+a]=b-m,l!==o&&(g=d*c-f*h,h=d*h+f*c,c=g)}},s.prototype.guessLen13b=function(e,t){var r=1|Math.max(t,e),n=1&r,i=0;for(r=r/2|0;r;r>>>=1)i++;return 1<<i+1+n},s.prototype.conjugate=function(e,t,r){if(!(r<=1))for(var n=0;n<r/2;n++){var i=e[n];e[n]=e[r-n-1],e[r-n-1]=i,i=t[n],t[n]=-t[r-n-1],t[r-n-1]=-i}},s.prototype.normalize13b=function(e,t){for(var r=0,n=0;n<t/2;n++){var i=8192*Math.round(e[2*n+1]/t)+Math.round(e[2*n]/t)+r;e[n]=67108863&i,r=i<67108864?0:i/67108864|0}return e},s.prototype.convert13b=function(e,t,r,i){for(var u=0,a=0;a<t;a++)u+=0|e[a],r[2*a]=8191&u,u>>>=13,r[2*a+1]=8191&u,u>>>=13;for(a=2*t;a<i;++a)r[a]=0;n(0===u),n(0==(-8192&u))},s.prototype.stub=function(e){for(var t=new Array(e),r=0;r<e;r++)t[r]=0;return t},s.prototype.mulp=function(e,t,r){var n=2*this.guessLen13b(e.length,t.length),i=this.makeRBT(n),u=this.stub(n),a=new Array(n),o=new Array(n),d=new Array(n),f=new Array(n),s=new Array(n),c=new Array(n),h=r.words;h.length=n,this.convert13b(e.words,e.length,a,n),this.convert13b(t.words,t.length,f,n),this.transform(a,u,o,d,n,i),this.transform(f,u,s,c,n,i);for(var l=0;l<n;l++){var p=o[l]*s[l]-d[l]*c[l];d[l]=o[l]*c[l]+d[l]*s[l],o[l]=p}return this.conjugate(o,d,n),this.transform(o,d,h,u,n,i),this.conjugate(h,u,n),this.normalize13b(h,n),r.negative=e.negative^t.negative,r.length=e.length+t.length,r.strip()},u.prototype.mul=function(e){var t=new u(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},u.prototype.mulf=function(e){var t=new u(null);return t.words=new Array(this.length+e.length),f(this,e,t)},u.prototype.imul=function(e){return this.clone().mulTo(e,this)},u.prototype.imuln=function(e){n("number"==typeof e),n(e<67108864);for(var t=0,r=0;r<this.length;r++){var i=(0|this.words[r])*e,u=(67108863&i)+(67108863&t);t>>=26,t+=i/67108864|0,t+=u>>>26,this.words[r]=67108863&u}return 0!==t&&(this.words[r]=t,this.length++),this},u.prototype.muln=function(e){return this.clone().imuln(e)},u.prototype.sqr=function(){return this.mul(this)},u.prototype.isqr=function(){return this.imul(this.clone())},u.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var n=r/26|0,i=r%26;t[r]=(e.words[n]&1<<i)>>>i}return t}(e);if(0===t.length)return new u(1);for(var r=this,n=0;n<t.length&&0===t[n];n++,r=r.sqr());if(++n<t.length)for(var i=r.sqr();n<t.length;n++,i=i.sqr())0!==t[n]&&(r=r.mul(i));return r},u.prototype.iushln=function(e){n("number"==typeof e&&e>=0);var t,r=e%26,i=(e-r)/26,u=67108863>>>26-r<<26-r;if(0!==r){var a=0;for(t=0;t<this.length;t++){var o=this.words[t]&u,d=(0|this.words[t])-o<<r;this.words[t]=d|a,a=o>>>26-r}a&&(this.words[t]=a,this.length++)}if(0!==i){for(t=this.length-1;t>=0;t--)this.words[t+i]=this.words[t];for(t=0;t<i;t++)this.words[t]=0;this.length+=i}return this.strip()},u.prototype.ishln=function(e){return n(0===this.negative),this.iushln(e)},u.prototype.iushrn=function(e,t,r){var i;n("number"==typeof e&&e>=0),i=t?(t-t%26)/26:0;var u=e%26,a=Math.min((e-u)/26,this.length),o=67108863^67108863>>>u<<u,d=r;if(i-=a,i=Math.max(0,i),d){for(var f=0;f<a;f++)d.words[f]=this.words[f];d.length=a}if(0===a);else if(this.length>a)for(this.length-=a,f=0;f<this.length;f++)this.words[f]=this.words[f+a];else this.words[0]=0,this.length=1;var s=0;for(f=this.length-1;f>=0&&(0!==s||f>=i);f--){var c=0|this.words[f];this.words[f]=s<<26-u|c>>>u,s=c&o}return d&&0!==s&&(d.words[d.length++]=s),0===this.length&&(this.words[0]=0,this.length=1),this.strip()},u.prototype.ishrn=function(e,t,r){return n(0===this.negative),this.iushrn(e,t,r)},u.prototype.shln=function(e){return this.clone().ishln(e)},u.prototype.ushln=function(e){return this.clone().iushln(e)},u.prototype.shrn=function(e){return this.clone().ishrn(e)},u.prototype.ushrn=function(e){return this.clone().iushrn(e)},u.prototype.testn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26,i=1<<t;return!(this.length<=r||!(this.words[r]&i))},u.prototype.imaskn=function(e){n("number"==typeof e&&e>=0);var t=e%26,r=(e-t)/26;if(n(0===this.negative,"imaskn works only with positive numbers"),this.length<=r)return this;if(0!==t&&r++,this.length=Math.min(r,this.length),0!==t){var i=67108863^67108863>>>t<<t;this.words[this.length-1]&=i}return this.strip()},u.prototype.maskn=function(e){return this.clone().imaskn(e)},u.prototype.iaddn=function(e){return n("number"==typeof e),n(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},u.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},u.prototype.isubn=function(e){if(n("number"==typeof e),n(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this.strip()},u.prototype.addn=function(e){return this.clone().iaddn(e)},u.prototype.subn=function(e){return this.clone().isubn(e)},u.prototype.iabs=function(){return this.negative=0,this},u.prototype.abs=function(){return this.clone().iabs()},u.prototype._ishlnsubmul=function(e,t,r){var i,u=e.length+r;this._expand(u);var a,o=0;for(i=0;i<e.length;i++){a=(0|this.words[i+r])+o;var d=(0|e.words[i])*t;o=((a-=67108863&d)>>26)-(d/67108864|0),this.words[i+r]=67108863&a}for(;i<this.length-r;i++)a=(0|this.words[i+r])+o,o=a>>26,this.words[i+r]=67108863&a;if(0===o)return this.strip();for(n(-1===o),o=0,i=0;i<this.length;i++)a=-(0|this.words[i])+o,o=a>>26,this.words[i]=67108863&a;return this.negative=1,this.strip()},u.prototype._wordDiv=function(e,t){var r=this.length-e.length,n=this.clone(),i=e,a=0|i.words[i.length-1];0!=(r=26-this._countBits(a))&&(i=i.ushln(r),n.iushln(r),a=0|i.words[i.length-1]);var o,d=n.length-i.length;if("mod"!==t){(o=new u(null)).length=d+1,o.words=new Array(o.length);for(var f=0;f<o.length;f++)o.words[f]=0}var s=n.clone()._ishlnsubmul(i,1,d);0===s.negative&&(n=s,o&&(o.words[d]=1));for(var c=d-1;c>=0;c--){var h=67108864*(0|n.words[i.length+c])+(0|n.words[i.length+c-1]);for(h=Math.min(h/a|0,67108863),n._ishlnsubmul(i,h,c);0!==n.negative;)h--,n.negative=0,n._ishlnsubmul(i,1,c),n.isZero()||(n.negative^=1);o&&(o.words[c]=h)}return o&&o.strip(),n.strip(),"div"!==t&&0!==r&&n.iushrn(r),{div:o||null,mod:n}},u.prototype.divmod=function(e,t,r){return n(!e.isZero()),this.isZero()?{div:new u(0),mod:new u(0)}:0!==this.negative&&0===e.negative?(o=this.neg().divmod(e,t),"mod"!==t&&(i=o.div.neg()),"div"!==t&&(a=o.mod.neg(),r&&0!==a.negative&&a.iadd(e)),{div:i,mod:a}):0===this.negative&&0!==e.negative?(o=this.divmod(e.neg(),t),"mod"!==t&&(i=o.div.neg()),{div:i,mod:o.mod}):0!=(this.negative&e.negative)?(o=this.neg().divmod(e.neg(),t),"div"!==t&&(a=o.mod.neg(),r&&0!==a.negative&&a.isub(e)),{div:o.div,mod:a}):e.length>this.length||this.cmp(e)<0?{div:new u(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new u(this.modn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new u(this.modn(e.words[0]))}:this._wordDiv(e,t);var i,a,o},u.prototype.div=function(e){return this.divmod(e,"div",!1).div},u.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},u.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},u.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,n=e.ushrn(1),i=e.andln(1),u=r.cmp(n);return u<0||1===i&&0===u?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},u.prototype.modn=function(e){n(e<=67108863);for(var t=(1<<26)%e,r=0,i=this.length-1;i>=0;i--)r=(t*r+(0|this.words[i]))%e;return r},u.prototype.idivn=function(e){n(e<=67108863);for(var t=0,r=this.length-1;r>=0;r--){var i=(0|this.words[r])+67108864*t;this.words[r]=i/e|0,t=i%e}return this.strip()},u.prototype.divn=function(e){return this.clone().idivn(e)},u.prototype.egcd=function(e){n(0===e.negative),n(!e.isZero());var t=this,r=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var i=new u(1),a=new u(0),o=new u(0),d=new u(1),f=0;t.isEven()&&r.isEven();)t.iushrn(1),r.iushrn(1),++f;for(var s=r.clone(),c=t.clone();!t.isZero();){for(var h=0,l=1;0==(t.words[0]&l)&&h<26;++h,l<<=1);if(h>0)for(t.iushrn(h);h-- >0;)(i.isOdd()||a.isOdd())&&(i.iadd(s),a.isub(c)),i.iushrn(1),a.iushrn(1);for(var p=0,b=1;0==(r.words[0]&b)&&p<26;++p,b<<=1);if(p>0)for(r.iushrn(p);p-- >0;)(o.isOdd()||d.isOdd())&&(o.iadd(s),d.isub(c)),o.iushrn(1),d.iushrn(1);t.cmp(r)>=0?(t.isub(r),i.isub(o),a.isub(d)):(r.isub(t),o.isub(i),d.isub(a))}return{a:o,b:d,gcd:r.iushln(f)}},u.prototype._invmp=function(e){n(0===e.negative),n(!e.isZero());var t,r=this,i=e.clone();r=0!==r.negative?r.umod(e):r.clone();for(var a=new u(1),o=new u(0),d=i.clone();r.cmpn(1)>0&&i.cmpn(1)>0;){for(var f=0,s=1;0==(r.words[0]&s)&&f<26;++f,s<<=1);if(f>0)for(r.iushrn(f);f-- >0;)a.isOdd()&&a.iadd(d),a.iushrn(1);for(var c=0,h=1;0==(i.words[0]&h)&&c<26;++c,h<<=1);if(c>0)for(i.iushrn(c);c-- >0;)o.isOdd()&&o.iadd(d),o.iushrn(1);r.cmp(i)>=0?(r.isub(i),a.isub(o)):(i.isub(r),o.isub(a))}return(t=0===r.cmpn(1)?a:o).cmpn(0)<0&&t.iadd(e),t},u.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var n=0;t.isEven()&&r.isEven();n++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var i=t.cmp(r);if(i<0){var u=t;t=r,r=u}else if(0===i||0===r.cmpn(1))break;t.isub(r)}return r.iushln(n)},u.prototype.invm=function(e){return this.egcd(e).a.umod(e)},u.prototype.isEven=function(){return 0==(1&this.words[0])},u.prototype.isOdd=function(){return 1==(1&this.words[0])},u.prototype.andln=function(e){return this.words[0]&e},u.prototype.bincn=function(e){n("number"==typeof e);var t=e%26,r=(e-t)/26,i=1<<t;if(this.length<=r)return this._expand(r+1),this.words[r]|=i,this;for(var u=i,a=r;0!==u&&a<this.length;a++){var o=0|this.words[a];u=(o+=u)>>>26,o&=67108863,this.words[a]=o}return 0!==u&&(this.words[a]=u,this.length++),this},u.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},u.prototype.cmpn=function(e){var t,r=e<0;if(0!==this.negative&&!r)return-1;if(0===this.negative&&r)return 1;if(this.strip(),this.length>1)t=1;else{r&&(e=-e),n(e<=67108863,"Number is too big");var i=0|this.words[0];t=i===e?0:i<e?-1:1}return 0!==this.negative?0|-t:t},u.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},u.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var n=0|this.words[r],i=0|e.words[r];if(n!==i){n<i?t=-1:n>i&&(t=1);break}}return t},u.prototype.gtn=function(e){return 1===this.cmpn(e)},u.prototype.gt=function(e){return 1===this.cmp(e)},u.prototype.gten=function(e){return this.cmpn(e)>=0},u.prototype.gte=function(e){return this.cmp(e)>=0},u.prototype.ltn=function(e){return-1===this.cmpn(e)},u.prototype.lt=function(e){return-1===this.cmp(e)},u.prototype.lten=function(e){return this.cmpn(e)<=0},u.prototype.lte=function(e){return this.cmp(e)<=0},u.prototype.eqn=function(e){return 0===this.cmpn(e)},u.prototype.eq=function(e){return 0===this.cmp(e)},u.red=function(e){return new y(e)},u.prototype.toRed=function(e){return n(!this.red,"Already a number in reduction context"),n(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},u.prototype.fromRed=function(){return n(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},u.prototype._forceRed=function(e){return this.red=e,this},u.prototype.forceRed=function(e){return n(!this.red,"Already a number in reduction context"),this._forceRed(e)},u.prototype.redAdd=function(e){return n(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},u.prototype.redIAdd=function(e){return n(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},u.prototype.redSub=function(e){return n(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},u.prototype.redISub=function(e){return n(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},u.prototype.redShl=function(e){return n(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},u.prototype.redMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},u.prototype.redIMul=function(e){return n(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},u.prototype.redSqr=function(){return n(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},u.prototype.redISqr=function(){return n(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},u.prototype.redSqrt=function(){return n(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},u.prototype.redInvm=function(){return n(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},u.prototype.redNeg=function(){return n(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},u.prototype.redPow=function(e){return n(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var E={k256:null,p224:null,p192:null,p25519:null};c.prototype._tmp=function(){var e=new u(null);return e.words=new Array(Math.ceil(this.n/13)),e},c.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),r=(r=this.imulK(r)).iadd(this.tmp),t=r.bitLength()}while(t>this.n);var n=t<this.n?-1:r.ucmp(this.p);return 0===n?(r.words[0]=0,r.length=1):n>0?r.isub(this.p):r.strip(),r},c.prototype.split=function(e,t){e.iushrn(this.n,0,t)},c.prototype.imulK=function(e){return e.imul(this.k)},i(h,c),h.prototype.split=function(e,t){for(var r=Math.min(e.length,9),n=0;n<r;n++)t.words[n]=e.words[n];if(t.length=r,e.length<=9)return e.words[0]=0,void(e.length=1);var i=e.words[9];for(t.words[t.length++]=4194303&i,n=10;n<e.length;n++){var u=0|e.words[n];e.words[n-10]=(4194303&u)<<4|i>>>22,i=u}i>>>=22,e.words[n-10]=i,0===i&&e.length>10?e.length-=10:e.length-=9},h.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var n=0|e.words[r];t+=977*n,e.words[r]=67108863&t,t=64*n+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(l,c),i(p,c),i(b,c),b.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var n=19*(0|e.words[r])+t,i=67108863&n;n>>>=26,e.words[r]=i,t=n}return 0!==t&&(e.words[e.length++]=t),e},u._prime=function(e){if(E[e])return E[e];var t;if("k256"===e)t=new h;else if("p224"===e)t=new l;else if("p192"===e)t=new p;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new b}return E[e]=t,t},y.prototype._verify1=function(e){n(0===e.negative,"red works only with positives"),n(e.red,"red works only with red numbers")},y.prototype._verify2=function(e,t){n(0==(e.negative|t.negative),"red works only with positives"),n(e.red&&e.red===t.red,"red works only with red numbers")},y.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):e.umod(this.m)._forceRed(this)},y.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},y.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},y.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},y.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},y.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},y.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},y.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},y.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},y.prototype.isqr=function(e){return this.imul(e,e.clone())},y.prototype.sqr=function(e){return this.mul(e,e)},y.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(n(t%2==1),3===t){var r=this.m.add(new u(1)).iushrn(2);return this.pow(e,r)}for(var i=this.m.subn(1),a=0;!i.isZero()&&0===i.andln(1);)a++,i.iushrn(1);n(!i.isZero());var o=new u(1).toRed(this),d=o.redNeg(),f=this.m.subn(1).iushrn(1),s=this.m.bitLength();for(s=new u(2*s*s).toRed(this);0!==this.pow(s,f).cmp(d);)s.redIAdd(d);for(var c=this.pow(s,i),h=this.pow(e,i.addn(1).iushrn(1)),l=this.pow(e,i),p=a;0!==l.cmp(o);){for(var b=l,y=0;0!==b.cmp(o);y++)b=b.redSqr();n(y<p);var m=this.pow(c,new u(1).iushln(p-y-1));h=h.redMul(m),c=m.redSqr(),l=l.redMul(c),p=y}return h},y.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},y.prototype.pow=function(e,t){if(t.isZero())return new u(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new u(1).toRed(this),r[1]=e;for(var n=2;n<r.length;n++)r[n]=this.mul(r[n-1],e);var i=r[0],a=0,o=0,d=t.bitLength()%26;for(0===d&&(d=26),n=t.length-1;n>=0;n--){for(var f=t.words[n],s=d-1;s>=0;s--){var c=f>>s&1;i!==r[0]&&(i=this.sqr(i)),0!==c||0!==a?(a<<=1,a|=c,(4==++o||0===n&&0===s)&&(i=this.mul(i,r[a]),o=0,a=0)):o=0}d=26}return i},y.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},y.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},u.mont=function(e){return new m(e)},i(m,y),m.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},m.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},m.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),u=i;return i.cmp(this.m)>=0?u=i.isub(this.m):i.cmpn(0)<0&&(u=i.iadd(this.m)),u._forceRed(this)},m.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new u(0)._forceRed(this);var r=e.mul(t),n=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),i=r.isub(n).iushrn(this.shift),a=i;return i.cmp(this.m)>=0?a=i.isub(this.m):i.cmpn(0)<0&&(a=i.iadd(this.m)),a._forceRed(this)},m.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(void 0===e||e,this)}).call(t,r(94)(e))},function(e,t,r){"use strict";var n=t;n.version=r(152).version,n.utils=r(153),n.rand=r(72),n.curve=r(29),n.curves=r(158),n.ec=r(166),n.eddsa=r(170)},function(e,t){function r(e,t){if(!e)throw new Error(t||"Assertion failed")}e.exports=r,r.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)}},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function u(){p&&h&&(p=!1,h.length?l=h.concat(l):b=-1,l.length&&a())}function a(){if(!p){var e=i(u);p=!0;for(var t=l.length;t;){for(h=l,l=[];++b<t;)h&&h[b].run();b=-1,t=l.length}h=null,p=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===n||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function o(e,t){this.fun=e,this.array=t}function d(){}var f,s,c=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{s="function"==typeof clearTimeout?clearTimeout:n}catch(e){s=n}}();var h,l=[],p=!1,b=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new o(e,t)),1!==l.length||p||i(a)},o.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=d,c.addListener=d,c.once=d,c.off=d,c.removeListener=d,c.removeAllListeners=d,c.emit=d,c.prependListener=d,c.prependOnceListener=d,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(e,t,r){"use strict";function n(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function i(e){return 1===e.length?"0"+e:e}function u(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}var a=r(5),o=r(1);t.inherits=o,t.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var n=0;n<e.length;n++){var i=e.charCodeAt(n),u=i>>8,a=255&i;u?r.push(u,a):r.push(a)}else for(n=0;n<e.length;n++)r[n]=0|e[n];return r},t.toHex=function(e){for(var t="",r=0;r<e.length;r++)t+=i(e[r].toString(16));return t},t.htonl=n,t.toHex32=function(e,t){for(var r="",i=0;i<e.length;i++){var a=e[i];"little"===t&&(a=n(a)),r+=u(a.toString(16))}return r},t.zero2=i,t.zero8=u,t.join32=function(e,t,r,n){var i=r-t;a(i%4==0);for(var u=new Array(i/4),o=0,d=t;o<u.length;o++,d+=4){var f;f="big"===n?e[d]<<24|e[d+1]<<16|e[d+2]<<8|e[d+3]:e[d+3]<<24|e[d+2]<<16|e[d+1]<<8|e[d],u[o]=f>>>0}return u},t.split32=function(e,t){for(var r=new Array(4*e.length),n=0,i=0;n<e.length;n++,i+=4){var u=e[n];"big"===t?(r[i]=u>>>24,r[i+1]=u>>>16&255,r[i+2]=u>>>8&255,r[i+3]=255&u):(r[i+3]=u>>>24,r[i+2]=u>>>16&255,r[i+1]=u>>>8&255,r[i]=255&u)}return r},t.rotr32=function(e,t){return e>>>t|e<<32-t},t.rotl32=function(e,t){return e<<t|e>>>32-t},t.sum32=function(e,t){return e+t>>>0},t.sum32_3=function(e,t,r){return e+t+r>>>0},t.sum32_4=function(e,t,r,n){return e+t+r+n>>>0},t.sum32_5=function(e,t,r,n,i){return e+t+r+n+i>>>0},t.sum64=function(e,t,r,n){var i=e[t],u=e[t+1],a=n+u>>>0,o=(a<n?1:0)+r+i;e[t]=o>>>0,e[t+1]=a},t.sum64_hi=function(e,t,r,n){return(t+n>>>0<t?1:0)+e+r>>>0},t.sum64_lo=function(e,t,r,n){return t+n>>>0},t.sum64_4_hi=function(e,t,r,n,i,u,a,o){var d=0,f=t;return d+=(f=f+n>>>0)<t?1:0,d+=(f=f+u>>>0)<u?1:0,e+r+i+a+(d+=(f=f+o>>>0)<o?1:0)>>>0},t.sum64_4_lo=function(e,t,r,n,i,u,a,o){return t+n+u+o>>>0},t.sum64_5_hi=function(e,t,r,n,i,u,a,o,d,f){var s=0,c=t;return s+=(c=c+n>>>0)<t?1:0,s+=(c=c+u>>>0)<u?1:0,s+=(c=c+o>>>0)<o?1:0,e+r+i+a+d+(s+=(c=c+f>>>0)<f?1:0)>>>0},t.sum64_5_lo=function(e,t,r,n,i,u,a,o,d,f){return t+n+u+o+f>>>0},t.rotr64_hi=function(e,t,r){return(t<<32-r|e>>>r)>>>0},t.rotr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0},t.shr64_hi=function(e,t,r){return e>>>r},t.shr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0}},function(e,t,r){var n=t;n.bignum=r(3),n.define=r(96).define,n.base=r(16),n.constants=r(50),n.decoders=r(102),n.encoders=r(104)},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){function n(e){u.call(this),this.hashMode="string"==typeof e,this.hashMode?this[e]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}var i=r(2).Buffer,u=r(25).Transform,a=r(41).StringDecoder;r(1)(n,u),n.prototype.update=function(e,t,r){"string"==typeof e&&(e=i.from(e,t));var n=this._update(e);return this.hashMode?this:(r&&(n=this._toString(n,r)),n)},n.prototype.setAutoPadding=function(){},n.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},n.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},n.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},n.prototype._transform=function(e,t,r){var n;try{this.hashMode?this._update(e):this.push(this._update(e))}catch(e){n=e}finally{r(n)}},n.prototype._flush=function(e){var t;try{this.push(this.__final())}catch(e){t=e}e(t)},n.prototype._finalOrDigest=function(e){var t=this.__final()||i.alloc(0);return e&&(t=this._toString(t,e,!0)),t},n.prototype._toString=function(e,t,r){if(this._decoder||(this._decoder=new a(t),this._encoding=t),this._encoding!==t)throw new Error("can't switch encodings");var n=this._decoder.write(e);return r&&(n+=this._decoder.end()),n},e.exports=n},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);f.call(this,e),s.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",i)}function i(){this.allowHalfOpen||this._writableState.ended||a(u,this)}function u(e){e.end()}var a=r(26),o=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};e.exports=n;var d=r(19);d.inherits=r(1);var f=r(53),s=r(40);d.inherits(n,f);for(var c=o(s.prototype),h=0;h<c.length;h++){var l=c[h];n.prototype[l]||(n.prototype[l]=s.prototype[l])}Object.defineProperty(n.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),n.prototype._destroy=function(e,t){this.push(null),this.end(),a(t,e)}},function(e,t,r){"use strict";var n=r(15),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(n);e.exports=i},function(e,t,r){"use strict";(function(t,n){var i=r(2).Buffer,u=t.crypto||t.msCrypto;u&&u.getRandomValues?e.exports=function(e,r){if(e>65536)throw new Error("requested too many random bytes");var a=new t.Uint8Array(e);e>0&&u.getRandomValues(a);var o=i.from(a.buffer);return"function"==typeof r?n.nextTick(function(){r(null,o)}):o}:e.exports=function(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}}).call(t,r(9),r(6))},function(e,t,r){function n(e,t){this._block=i.alloc(e),this._finalSize=t,this._blockSize=e,this._len=0}var i=r(2).Buffer;n.prototype.update=function(e,t){"string"==typeof e&&(t=t||"utf8",e=i.from(e,t));for(var r=this._block,n=this._blockSize,u=e.length,a=this._len,o=0;o<u;){for(var d=a%n,f=Math.min(u-o,n-d),s=0;s<f;s++)r[d+s]=e[o+s];o+=f,(a+=f)%n==0&&this._update(r)}return this._len+=u,this},n.prototype.digest=function(e){var t=this._len%this._blockSize;this._block[t]=128,this._block.fill(0,t+1),t>=this._finalSize&&(this._update(this._block),this._block.fill(0));var r=8*this._len;if(r<=4294967295)this._block.writeUInt32BE(r,this._blockSize-4);else{var n=4294967295&r,i=(r-n)/4294967296;this._block.writeUInt32BE(i,this._blockSize-8),this._block.writeUInt32BE(n,this._blockSize-4)}this._update(this._block);var u=this._hash();return e?u.toString(e):u},n.prototype._update=function(){throw new Error("_update must be implemented by subclass")},e.exports=n},function(e,t,r){"use strict";var n=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return Object.defineProperty(r,"message",{configurable:!0,enumerable:!1,value:void 0!==e?String(e):""}),Object.defineProperty(r,"name",{configurable:!0,enumerable:!1,value:r.constructor.name}),Error.captureStackTrace&&Error.captureStackTrace(r,r.constructor),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(Error);e.exports=n},function(e,t,r){var n=t;n.Reporter=r(99).Reporter,n.DecoderBuffer=r(49).DecoderBuffer,n.EncoderBuffer=r(49).EncoderBuffer,n.Node=r(100)},function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(23),u=r(24),a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"generateHash",value:function(){var e=u.createHash("sha256");return e.update(this.getFingerprintContents()),e.digest()}}]),t}(i);e.exports=a},function(e,t,r){"use strict";(function(t){function n(e){f.call(this,"digest"),this._hash=e,this.buffers=[]}function i(e){f.call(this,"digest"),this._hash=e}var u=r(1),a=r(36),o=r(37),d=r(42),f=r(10);u(n,f),n.prototype._update=function(e){this.buffers.push(e)},n.prototype._final=function(){var e=t.concat(this.buffers),r=this._hash(e);return this.buffers=null,r},u(i,f),i.prototype._update=function(e){this._hash.update(e)},i.prototype._final=function(){return this._hash.digest()},e.exports=function(e){return"md5"===(e=e.toLowerCase())?new n(a):new i("rmd160"===e||"ripemd160"===e?new o:d(e))}}).call(t,r(0).Buffer)},function(e,t,r){(function(e){function r(e){return Object.prototype.toString.call(e)}t.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===r(e)},t.isBoolean=function(e){return"boolean"==typeof e},t.isNull=function(e){return null===e},t.isNullOrUndefined=function(e){return null==e},t.isNumber=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=function(e){return void 0===e},t.isRegExp=function(e){return"[object RegExp]"===r(e)},t.isObject=function(e){return"object"==typeof e&&null!==e},t.isDate=function(e){return"[object Date]"===r(e)},t.isError=function(e){return"[object Error]"===r(e)||e instanceof Error},t.isFunction=function(e){return"function"==typeof e},t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=e.isBuffer}).call(t,r(0).Buffer)},function(e,t,r){(function(t){e.exports=function(e,r){for(var n=Math.min(e.length,r.length),i=new t(n),u=0;u<n;++u)i[u]=e[u]^r[u];return i}}).call(t,r(0).Buffer)},function(e,t,r){"use strict";function n(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}var i=r(7),u=r(5);t.BlockHash=n,n.prototype.update=function(e,t){if(e=i.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var r=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=i.join32(e,0,e.length-r,this.endian);for(var n=0;n<e.length;n+=this._delta32)this._update(e,n,n+this._delta32)}return this},n.prototype.digest=function(e){return this.update(this._pad()),u(null===this.pending),this._digest(e)},n.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,n=new Array(r+this.padLength);n[0]=128;for(var i=1;i<r;i++)n[i]=0;if(e<<=3,"big"===this.endian){for(var u=8;u<this.padLength;u++)n[i++]=0;n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=e>>>24&255,n[i++]=e>>>16&255,n[i++]=e>>>8&255,n[i++]=255&e}else for(n[i++]=255&e,n[i++]=e>>>8&255,n[i++]=e>>>16&255,n[i++]=e>>>24&255,n[i++]=0,n[i++]=0,n[i++]=0,n[i++]=0,u=8;u<this.padLength;u++)n[i++]=0;return n}},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(88),u=r(32),a=r(92),o=r(93),d=r(12),f=r(33),s=r(34),c=r(35).Condition,h=/^ni:\/\/\/sha-256;([a-zA-Z0-9_-]{0,86})\?(.+)$/,l=h,p=/^0|[1-9]\d*$/,b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"getTypeId",value:function(){return this.type}},{key:"setTypeId",value:function(e){this.type=e}},{key:"getTypeName",value:function(){return u.findByTypeId(this.type).name}},{key:"getSubtypes",value:function(){return this.subtypes}},{key:"setSubtypes",value:function(e){this.subtypes=e}},{key:"getHash",value:function(){if(!this.hash)throw new d("Hash not set");return this.hash}},{key:"setHash",value:function(e){if(!t.isBuffer(e))throw new TypeError("Hash must be a Buffer");if(32!==e.length)throw new Error("Hash is of invalid length "+e.length+", should be 32");this.hash=e}},{key:"getCost",value:function(){if("number"!=typeof this.cost)throw new d("Cost not set");return this.cost}},{key:"setCost",value:function(e){if(!s(e))throw new TypeError("Cost must be an integer");if(e<0)throw new TypeError("Cost must be positive or zero");this.cost=e}},{key:"serializeUri",value:function(){var e=u.findByTypeId(this.type).Class,t="compound"===e.TYPE_CATEGORY;return"ni:///sha-256;"+f.encode(this.getHash())+"?fpt="+this.getTypeName()+"&cost="+this.getCost()+(t?"&subtypes="+Array.from(this.getSubtypes()).sort().join(","):"")}},{key:"serializeBinary",value:function(){var e=this.getAsn1Json();return c.encode(e)}},{key:"getAsn1Json",value:function(){var e=u.findByTypeId(this.type).Class,r={type:e.TYPE_ASN1_CONDITION,value:{fingerprint:this.getHash(),cost:this.getCost()}};if("compound"===e.TYPE_CATEGORY){var n=Array.from(this.getSubtypes()).map(u.findByName).map(function(e){return e.typeId}),i=n.reduce(function(e,t){return Math.max(e,t)},0),a=t.alloc(1+(i>>>3)),o=!0,d=!1,f=void 0;try{for(var s,c=n[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var h=s.value;a[h>>>3]|=1<<7-h%8}}catch(e){d=!0,f=e}finally{try{!o&&c.return&&c.return()}finally{if(d)throw f}}var l=7-i%8;r.value.subtypes={unused:l,data:a}}return r}},{key:"validate",value:function(){if(u.findByTypeId(this.getTypeId()),this.getSubtypes()>e.MAX_SAFE_SUBTYPES)throw new Error("Bitmask too large to be safely represented");if(this.getSubtypes()&~e.SUPPORTED_SUBTYPES)throw new Error("Condition requested unsupported feature suites");if(this.getCost()>e.MAX_COST)throw new Error("Condition requested too large of a max fulfillment size");return!0}}],[{key:"fromUri",value:function(t){if(t instanceof e)return t;if("string"!=typeof t)throw new Error("Serialized condition must be a string");if("ni"!==t.split(":")[0])throw new a('Serialized condition must start with "ni:"');var r=e.REGEX_STRICT.exec(t);if(!r)throw new o("Invalid condition format");var n=i.parse(r[2]),d=u.findByName(n.fpt);if(!p.exec(n.cost))throw new o("No or invalid cost provided");var s=new e;return s.setTypeId(d.typeId),"compound"===d.Class.TYPE_CATEGORY?s.setSubtypes(new Set(n.subtypes.split(","))):s.setSubtypes(new Set),s.setHash(f.decode(r[1])),s.setCost(Number(n.cost)),s}},{key:"fromBinary",value:function(t){var r=c.decode(t);return e.fromAsn1Json(r)}},{key:"fromAsn1Json",value:function(t){var r=u.findByAsn1ConditionType(t.type),n=new e;if(n.setTypeId(r.typeId),n.setHash(t.value.fingerprint),n.setCost(t.value.cost.toNumber()),"compound"===r.Class.TYPE_CATEGORY){for(var i=t.value.subtypes.data,a=new Set,o=0;o<i.length;){for(var d=0;d<8;d++)if(1<<7-d&i[o]){var f=8*o+d,s=u.findByTypeId(f).name;a.add(s)}o++}n.setSubtypes(a)}else n.setSubtypes(new Set);return n}}]),e}();b.MAX_SAFE_SUBTYPES=4294967295,b.SUPPORTED_SUBTYPES=63,b.MAX_COST=2097152,b.REGEX=h,b.REGEX_STRICT=l,e.exports=b}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(32),u=r(22),a=r(33),o=r(106).Fulfillment,d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"getTypeId",value:function(){return this.constructor.TYPE_ID}},{key:"getTypeName",value:function(){return this.constructor.TYPE_NAME}},{key:"getSubtypes",value:function(){return new Set}},{key:"getCondition",value:function(){var e=new u;return e.setHash(this.generateHash()),e.setTypeId(this.getTypeId()),e.setCost(this.calculateCost()),e.setSubtypes(this.getSubtypes()),e}},{key:"getConditionUri",value:function(){return this.getCondition().serializeUri()}},{key:"getConditionBinary",value:function(){return this.getCondition().serializeBinary()}},{key:"generateHash",value:function(){throw new Error("This method should be implemented by a subclass")}},{key:"calculateCost",value:function(){throw new Error("Condition types must implement calculateCost")}},{key:"parseAsn1JsonPayload",value:function(e){this.parseJson(e)}},{key:"serializeUri",value:function(){return a.encode(this.serializeBinary())}},{key:"getAsn1Json",value:function(){return{type:this.constructor.TYPE_ASN1_FULFILLMENT,value:this.getAsn1JsonPayload()}}},{key:"serializeBinary",value:function(){var e=this.getAsn1Json();return o.encode(e)}},{key:"serializeBase64Url",value:function(){return a.encode(this.serializeBinary())}},{key:"validate",value:function(){throw new Error("Not implemented")}}],[{key:"fromUri",value:function(r){if(r instanceof e)return r;if("string"!=typeof r)throw new TypeError("Serialized fulfillment must be a string");return e.fromBinary(t.from(r,"base64"))}},{key:"fromBinary",value:function(t){var r=o.decode(t);return e.fromAsn1Json(r)}},{key:"fromAsn1Json",value:function(e){var t=i.findByAsn1FulfillmentType(e.type).Class,r=new t;return r.parseAsn1JsonPayload(e.value),r}},{key:"fromJson",value:function(e){var t=i.findByName(e.type).Class,r=new t;return r.parseJson(e),r}}]),e}();e.exports=d}).call(t,r(0).Buffer)},function(e,t,r){"use strict";t.randomBytes=t.rng=t.pseudoRandomBytes=t.prng=r(13),t.createHash=t.Hash=r(18),t.createHmac=t.Hmac=r(59);var n=r(125),i=Object.keys(n),u=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(i);t.getHashes=function(){return u};var a=r(61);t.pbkdf2=a.pbkdf2,t.pbkdf2Sync=a.pbkdf2Sync;var o=r(127);t.Cipher=o.Cipher,t.createCipher=o.createCipher,t.Cipheriv=o.Cipheriv,t.createCipheriv=o.createCipheriv,t.Decipher=o.Decipher,t.createDecipher=o.createDecipher,t.Decipheriv=o.Decipheriv,t.createDecipheriv=o.createDecipheriv,t.getCiphers=o.getCiphers,t.listCiphers=o.listCiphers;var d=r(146);t.DiffieHellmanGroup=d.DiffieHellmanGroup,t.createDiffieHellmanGroup=d.createDiffieHellmanGroup,t.getDiffieHellman=d.getDiffieHellman,t.createDiffieHellman=d.createDiffieHellman,t.DiffieHellman=d.DiffieHellman;var f=r(150);t.createSign=f.createSign,t.Sign=f.Sign,t.createVerify=f.createVerify,t.Verify=f.Verify,t.createECDH=r(178);var s=r(179);t.publicEncrypt=s.publicEncrypt,t.privateEncrypt=s.privateEncrypt,t.publicDecrypt=s.publicDecrypt,t.privateDecrypt=s.privateDecrypt;var c=r(182);t.randomFill=c.randomFill,t.randomFillSync=c.randomFillSync,t.createCredentials=function(){throw new Error(["sorry, createCredentials is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))},t.constants={DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,ALPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6}},function(e,t,r){function n(){i.call(this)}e.exports=n;var i=r(38).EventEmitter;r(1)(n,i),n.Readable=r(39),n.Writable=r(116),n.Duplex=r(117),n.Transform=r(118),n.PassThrough=r(119),n.Stream=n,n.prototype.pipe=function(e,t){function r(t){e.writable&&!1===e.write(t)&&f.pause&&f.pause()}function n(){f.readable&&f.resume&&f.resume()}function u(){s||(s=!0,e.end())}function a(){s||(s=!0,"function"==typeof e.destroy&&e.destroy())}function o(e){if(d(),0===i.listenerCount(this,"error"))throw e}function d(){f.removeListener("data",r),e.removeListener("drain",n),f.removeListener("end",u),f.removeListener("close",a),f.removeListener("error",o),e.removeListener("error",o),f.removeListener("end",d),f.removeListener("close",d),e.removeListener("close",d)}var f=this;f.on("data",r),e.on("drain",n),e._isStdio||t&&!1===t.end||(f.on("end",u),f.on("close",a));var s=!1;return f.on("error",o),e.on("error",o),f.on("end",d),f.on("close",d),e.on("close",d),e.emit("pipe",f),e}},function(e,t,r){"use strict";(function(t){!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?e.exports=function(e,r,n,i){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var u,a,o=arguments.length;switch(o){case 0:case 1:return t.nextTick(e);case 2:return t.nextTick(function(){e.call(null,r)});case 3:return t.nextTick(function(){e.call(null,r,n)});case 4:return t.nextTick(function(){e.call(null,r,n,i)});default:for(u=new Array(o-1),a=0;a<u.length;)u[a++]=arguments[a];return t.nextTick(function(){e.apply(null,u)})}}:e.exports=t.nextTick}).call(t,r(6))},function(e,t,r){var n=r(2).Buffer,i=r(128);e.exports=function(e,t,r,u){if(n.isBuffer(e)||(e=n.from(e,"binary")),t&&(n.isBuffer(t)||(t=n.from(t,"binary")),8!==t.length))throw new RangeError("salt should be Buffer with 8 byte length");for(var a=r/8,o=n.alloc(a),d=n.alloc(u||0),f=n.alloc(0);a>0||u>0;){var s=new i;s.update(f),s.update(e),t&&s.update(t),f=s.digest();var c=0;if(a>0){var h=o.length-a;c=Math.min(a,f.length),f.copy(o,h,0,c),a-=c}if(c<f.length&&u>0){var l=d.length-u,p=Math.min(u,f.length-c);f.copy(d,l,c,c+p),u-=p}}return f.fill(0),{key:o,iv:d}}},function(e,t,r){function n(e){o.isBuffer(e)||(e=o.from(e));for(var t=e.length/4|0,r=new Array(t),n=0;n<t;n++)r[n]=e.readUInt32BE(4*n);return r}function i(e){for(;0<e.length;e++)e[0]=0}function u(e,t,r,n,i){for(var u,a,o,d,f=r[0],s=r[1],c=r[2],h=r[3],l=e[0]^t[0],p=e[1]^t[1],b=e[2]^t[2],y=e[3]^t[3],m=4,g=1;g<i;g++)u=f[l>>>24]^s[p>>>16&255]^c[b>>>8&255]^h[255&y]^t[m++],a=f[p>>>24]^s[b>>>16&255]^c[y>>>8&255]^h[255&l]^t[m++],o=f[b>>>24]^s[y>>>16&255]^c[l>>>8&255]^h[255&p]^t[m++],d=f[y>>>24]^s[l>>>16&255]^c[p>>>8&255]^h[255&b]^t[m++],l=u,p=a,b=o,y=d;return u=(n[l>>>24]<<24|n[p>>>16&255]<<16|n[b>>>8&255]<<8|n[255&y])^t[m++],a=(n[p>>>24]<<24|n[b>>>16&255]<<16|n[y>>>8&255]<<8|n[255&l])^t[m++],o=(n[b>>>24]<<24|n[y>>>16&255]<<16|n[l>>>8&255]<<8|n[255&p])^t[m++],d=(n[y>>>24]<<24|n[l>>>16&255]<<16|n[p>>>8&255]<<8|n[255&b])^t[m++],[u>>>=0,a>>>=0,o>>>=0,d>>>=0]}function a(e){this._key=n(e),this._reset()}var o=r(2).Buffer,d=[0,1,2,4,8,16,32,64,128,27,54],f=function(){for(var e=new Array(256),t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var r=[],n=[],i=[[],[],[],[]],u=[[],[],[],[]],a=0,o=0,d=0;d<256;++d){var f=o^o<<1^o<<2^o<<3^o<<4;f=f>>>8^255&f^99,r[a]=f,n[f]=a;var s=e[a],c=e[s],h=e[c],l=257*e[f]^16843008*f;i[0][a]=l<<24|l>>>8,i[1][a]=l<<16|l>>>16,i[2][a]=l<<8|l>>>24,i[3][a]=l,l=16843009*h^65537*c^257*s^16843008*a,u[0][f]=l<<24|l>>>8,u[1][f]=l<<16|l>>>16,u[2][f]=l<<8|l>>>24,u[3][f]=l,0===a?a=o=1:(a=s^e[e[e[h^s]]],o^=e[e[o]])}return{SBOX:r,INV_SBOX:n,SUB_MIX:i,INV_SUB_MIX:u}}();a.blockSize=16,a.keySize=32,a.prototype.blockSize=a.blockSize,a.prototype.keySize=a.keySize,a.prototype._reset=function(){for(var e=this._key,t=e.length,r=t+6,n=4*(r+1),i=[],u=0;u<t;u++)i[u]=e[u];for(u=t;u<n;u++){var a=i[u-1];u%t==0?(a=a<<8|a>>>24,a=f.SBOX[a>>>24]<<24|f.SBOX[a>>>16&255]<<16|f.SBOX[a>>>8&255]<<8|f.SBOX[255&a],a^=d[u/t|0]<<24):t>6&&u%t==4&&(a=f.SBOX[a>>>24]<<24|f.SBOX[a>>>16&255]<<16|f.SBOX[a>>>8&255]<<8|f.SBOX[255&a]),i[u]=i[u-t]^a}for(var o=[],s=0;s<n;s++){var c=n-s,h=i[c-(s%4?0:4)];o[s]=s<4||c<=4?h:f.INV_SUB_MIX[0][f.SBOX[h>>>24]]^f.INV_SUB_MIX[1][f.SBOX[h>>>16&255]]^f.INV_SUB_MIX[2][f.SBOX[h>>>8&255]]^f.INV_SUB_MIX[3][f.SBOX[255&h]]}this._nRounds=r,this._keySchedule=i,this._invKeySchedule=o},a.prototype.encryptBlockRaw=function(e){return u(e=n(e),this._keySchedule,f.SUB_MIX,f.SBOX,this._nRounds)},a.prototype.encryptBlock=function(e){var t=this.encryptBlockRaw(e),r=o.allocUnsafe(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r},a.prototype.decryptBlock=function(e){var t=(e=n(e))[1];e[1]=e[3],e[3]=t;var r=u(e,this._invKeySchedule,f.INV_SUB_MIX,f.INV_SBOX,this._nRounds),i=o.allocUnsafe(16);return i.writeUInt32BE(r[0],0),i.writeUInt32BE(r[3],4),i.writeUInt32BE(r[2],8),i.writeUInt32BE(r[1],12),i},a.prototype.scrub=function(){i(this._keySchedule),i(this._invKeySchedule),i(this._key)},e.exports.AES=a},function(e,t,r){"use strict";var n=t;n.base=r(154),n.short=r(155),n.mont=r(156),n.edwards=r(157)},function(e,t,r){(function(t){function n(e){var r;"object"!=typeof e||t.isBuffer(e)||(r=e.passphrase,e=e.key),"string"==typeof e&&(e=new t(e));var n,a,d=o(e,r),f=d.tag,s=d.data;switch(f){case"CERTIFICATE":a=u.certificate.decode(s,"der").tbsCertificate.subjectPublicKeyInfo;case"PUBLIC KEY":switch(a||(a=u.PublicKey.decode(s,"der")),n=a.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return u.RSAPublicKey.decode(a.subjectPublicKey.data,"der");case"1.2.840.10045.2.1":return a.subjectPrivateKey=a.subjectPublicKey,{type:"ec",data:a};case"1.2.840.10040.4.1":return a.algorithm.params.pub_key=u.DSAparam.decode(a.subjectPublicKey.data,"der"),{type:"dsa",data:a.algorithm.params};default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+f);case"ENCRYPTED PRIVATE KEY":s=i(s=u.EncryptedPrivateKey.decode(s,"der"),r);case"PRIVATE KEY":switch(a=u.PrivateKey.decode(s,"der"),n=a.algorithm.algorithm.join(".")){case"1.2.840.113549.1.1.1":return u.RSAPrivateKey.decode(a.subjectPrivateKey,"der");case"1.2.840.10045.2.1":return{curve:a.algorithm.curve,privateKey:u.ECPrivateKey.decode(a.subjectPrivateKey,"der").privateKey};case"1.2.840.10040.4.1":return a.algorithm.params.priv_key=u.DSAparam.decode(a.subjectPrivateKey,"der"),{type:"dsa",params:a.algorithm.params};default:throw new Error("unknown key id "+n)}throw new Error("unknown key type "+f);case"RSA PUBLIC KEY":return u.RSAPublicKey.decode(s,"der");case"RSA PRIVATE KEY":return u.RSAPrivateKey.decode(s,"der");case"DSA PRIVATE KEY":return{type:"dsa",params:u.DSAPrivateKey.decode(s,"der")};case"EC PRIVATE KEY":return{curve:(s=u.ECPrivateKey.decode(s,"der")).parameters.value,privateKey:s.privateKey};default:throw new Error("unknown key type "+f)}}function i(e,r){var n=e.algorithm.decrypt.kde.kdeparams.salt,i=parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(),10),u=a[e.algorithm.decrypt.cipher.algo.join(".")],o=e.algorithm.decrypt.cipher.iv,s=e.subjectPrivateKey,c=parseInt(u.split("-")[1],10)/8,h=f.pbkdf2Sync(r,n,i,c),l=d.createDecipheriv(u,h,o),p=[];return p.push(l.update(s)),p.push(l.final()),t.concat(p)}var u=r(173),a=r(175),o=r(176),d=r(43),f=r(61);e.exports=n,n.signature=u.signature}).call(t,r(0).Buffer)},function(e,t,r){"use strict";var n=r(8),i=r(35).Condition,u=n.define("PrefixFingerprintContents",function(){this.seq().obj(this.key("prefix").implicit(0).octstr(),this.key("maxMessageLength").implicit(1).int(),this.key("subcondition").explicit(2).use(i))}),a=n.define("ThresholdFingerprintContents",function(){this.seq().obj(this.key("threshold").implicit(0).int(),this.key("subconditions").implicit(1).setof(i))}),o=n.define("RsaFingerprintContents",function(){this.seq().obj(this.key("modulus").implicit(0).octstr())}),d=n.define("Ed25519FingerprintContents",function(){this.seq().obj(this.key("publicKey").implicit(0).octstr())});e.exports={PrefixFingerprintContents:u,ThresholdFingerprintContents:a,RsaFingerprintContents:o,Ed25519FingerprintContents:d}},function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(91),u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"findByTypeId",value:function(t){if(t>Number.MAX_SAFE_INTEGER)throw new i("Type "+t+" is not supported");var r=!0,n=!1,u=void 0;try{for(var a,o=e.registeredTypes[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var d=a.value;if(t===d.typeId)return d}}catch(e){n=!0,u=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw u}}throw new i("Type "+t+" is not supported")}},{key:"findByName",value:function(t){var r=!0,n=!1,u=void 0;try{for(var a,o=e.registeredTypes[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var d=a.value;if(t===d.name)return d}}catch(e){n=!0,u=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw u}}throw new i("Type "+t+" is not supported")}},{key:"findByAsn1ConditionType",value:function(t){var r=!0,n=!1,u=void 0;try{for(var a,o=e.registeredTypes[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var d=a.value;if(t===d.asn1Condition)return d}}catch(e){n=!0,u=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw u}}throw new i("Type "+t+" is not supported")}},{key:"findByAsn1FulfillmentType",value:function(t){var r=!0,n=!1,u=void 0;try{for(var a,o=e.registeredTypes[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var d=a.value;if(t===d.asn1Fulfillment)return d}}catch(e){n=!0,u=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw u}}throw new i("Type "+t+" is not supported")}},{key:"registerType",value:function(t){e.registeredTypes.push({typeId:t.TYPE_ID,name:t.TYPE_NAME,asn1Condition:t.TYPE_ASN1_CONDITION,asn1Fulfillment:t.TYPE_ASN1_FULFILLMENT,Class:t})}}]),e}();u.registeredTypes=[],e.exports=u},function(e,t,r){"use strict";(function(t){var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"decode",value:function(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");return t.from(r,"base64")}},{key:"encode",value:function(e){return e.toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}}]),e}();e.exports=n}).call(t,r(0).Buffer)},function(e,t,r){"use strict";e.exports=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},function(e,t,r){"use strict";var n=r(8);t.Simple256Condition=n.define("Simple256Condition",function(){this.seq().obj(this.key("fingerprint").implicit(0).octstr(),this.key("cost").implicit(1).int())}),t.Compound256Condition=n.define("Compound256Condition",function(){this.seq().obj(this.key("fingerprint").implicit(0).octstr(),this.key("cost").implicit(1).int(),this.key("subtypes").implicit(2).bitstr())}),t.Condition=n.define("Condition",function(){this.choice({preimageSha256Condition:this.implicit(0).use(t.Simple256Condition),prefixSha256Condition:this.implicit(1).use(t.Compound256Condition),thresholdSha256Condition:this.implicit(2).use(t.Compound256Condition),rsaSha256Condition:this.implicit(3).use(t.Simple256Condition),ed25519Sha256Condition:this.implicit(4).use(t.Simple256Condition)})})},function(e,t,r){"use strict";function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,n=-271733879,i=-1732584194,s=271733878,c=0;c<e.length;c+=16){var h=r,l=n,p=i,b=s;r=u(r,n,i,s,e[c+0],7,-680876936),s=u(s,r,n,i,e[c+1],12,-389564586),i=u(i,s,r,n,e[c+2],17,606105819),n=u(n,i,s,r,e[c+3],22,-1044525330),r=u(r,n,i,s,e[c+4],7,-176418897),s=u(s,r,n,i,e[c+5],12,1200080426),i=u(i,s,r,n,e[c+6],17,-1473231341),n=u(n,i,s,r,e[c+7],22,-45705983),r=u(r,n,i,s,e[c+8],7,1770035416),s=u(s,r,n,i,e[c+9],12,-1958414417),i=u(i,s,r,n,e[c+10],17,-42063),n=u(n,i,s,r,e[c+11],22,-1990404162),r=u(r,n,i,s,e[c+12],7,1804603682),s=u(s,r,n,i,e[c+13],12,-40341101),i=u(i,s,r,n,e[c+14],17,-1502002290),n=u(n,i,s,r,e[c+15],22,1236535329),r=a(r,n,i,s,e[c+1],5,-165796510),s=a(s,r,n,i,e[c+6],9,-1069501632),i=a(i,s,r,n,e[c+11],14,643717713),n=a(n,i,s,r,e[c+0],20,-373897302),r=a(r,n,i,s,e[c+5],5,-701558691),s=a(s,r,n,i,e[c+10],9,38016083),i=a(i,s,r,n,e[c+15],14,-660478335),n=a(n,i,s,r,e[c+4],20,-405537848),r=a(r,n,i,s,e[c+9],5,568446438),s=a(s,r,n,i,e[c+14],9,-1019803690),i=a(i,s,r,n,e[c+3],14,-187363961),n=a(n,i,s,r,e[c+8],20,1163531501),r=a(r,n,i,s,e[c+13],5,-1444681467),s=a(s,r,n,i,e[c+2],9,-51403784),i=a(i,s,r,n,e[c+7],14,1735328473),n=a(n,i,s,r,e[c+12],20,-1926607734),r=o(r,n,i,s,e[c+5],4,-378558),s=o(s,r,n,i,e[c+8],11,-2022574463),i=o(i,s,r,n,e[c+11],16,1839030562),n=o(n,i,s,r,e[c+14],23,-35309556),r=o(r,n,i,s,e[c+1],4,-1530992060),s=o(s,r,n,i,e[c+4],11,1272893353),i=o(i,s,r,n,e[c+7],16,-155497632),n=o(n,i,s,r,e[c+10],23,-1094730640),r=o(r,n,i,s,e[c+13],4,681279174),s=o(s,r,n,i,e[c+0],11,-358537222),i=o(i,s,r,n,e[c+3],16,-722521979),n=o(n,i,s,r,e[c+6],23,76029189),r=o(r,n,i,s,e[c+9],4,-640364487),s=o(s,r,n,i,e[c+12],11,-421815835),i=o(i,s,r,n,e[c+15],16,530742520),n=o(n,i,s,r,e[c+2],23,-995338651),r=d(r,n,i,s,e[c+0],6,-198630844),s=d(s,r,n,i,e[c+7],10,1126891415),i=d(i,s,r,n,e[c+14],15,-1416354905),n=d(n,i,s,r,e[c+5],21,-57434055),r=d(r,n,i,s,e[c+12],6,1700485571),s=d(s,r,n,i,e[c+3],10,-1894986606),i=d(i,s,r,n,e[c+10],15,-1051523),n=d(n,i,s,r,e[c+1],21,-2054922799),r=d(r,n,i,s,e[c+8],6,1873313359),s=d(s,r,n,i,e[c+15],10,-30611744),i=d(i,s,r,n,e[c+6],15,-1560198380),n=d(n,i,s,r,e[c+13],21,1309151649),r=d(r,n,i,s,e[c+4],6,-145523070),s=d(s,r,n,i,e[c+11],10,-1120210379),i=d(i,s,r,n,e[c+2],15,718787259),n=d(n,i,s,r,e[c+9],21,-343485551),r=f(r,h),n=f(n,l),i=f(i,p),s=f(s,b)}return[r,n,i,s]}function i(e,t,r,n,i,u){return f(function(e,t){return e<<t|e>>>32-t}(f(f(t,e),f(n,u)),i),r)}function u(e,t,r,n,u,a,o){return i(t&r|~t&n,e,t,u,a,o)}function a(e,t,r,n,u,a,o){return i(t&n|r&~n,e,t,u,a,o)}function o(e,t,r,n,u,a,o){return i(t^r^n,e,t,u,a,o)}function d(e,t,r,n,u,a,o){return i(r^(t|~n),e,t,u,a,o)}function f(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}var s=r(108);e.exports=function(e){return s(e,n)}},function(e,t,r){"use strict";(function(t){function n(){c.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}function i(e,t){return e<<t|e>>>32-t}function u(e,t,r,n,u,a,o,d){return i(e+(t^r^n)+a+o|0,d)+u|0}function a(e,t,r,n,u,a,o,d){return i(e+(t&r|~t&n)+a+o|0,d)+u|0}function o(e,t,r,n,u,a,o,d){return i(e+((t|~r)^n)+a+o|0,d)+u|0}function d(e,t,r,n,u,a,o,d){return i(e+(t&n|r&~n)+a+o|0,d)+u|0}function f(e,t,r,n,u,a,o,d){return i(e+(t^(r|~n))+a+o|0,d)+u|0}var s=r(1),c=r(109);s(n,c),n.prototype._update=function(){for(var e=new Array(16),t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t);var r=this._a,n=this._b,s=this._c,c=this._d,h=this._e;r=u(r,n,s,c,h,e[0],0,11),s=i(s,10),h=u(h,r,n,s,c,e[1],0,14),n=i(n,10),c=u(c,h,r,n,s,e[2],0,15),r=i(r,10),s=u(s,c,h,r,n,e[3],0,12),h=i(h,10),n=u(n,s,c,h,r,e[4],0,5),c=i(c,10),r=u(r,n,s,c,h,e[5],0,8),s=i(s,10),h=u(h,r,n,s,c,e[6],0,7),n=i(n,10),c=u(c,h,r,n,s,e[7],0,9),r=i(r,10),s=u(s,c,h,r,n,e[8],0,11),h=i(h,10),n=u(n,s,c,h,r,e[9],0,13),c=i(c,10),r=u(r,n,s,c,h,e[10],0,14),s=i(s,10),h=u(h,r,n,s,c,e[11],0,15),n=i(n,10),c=u(c,h,r,n,s,e[12],0,6),r=i(r,10),s=u(s,c,h,r,n,e[13],0,7),h=i(h,10),n=u(n,s,c,h,r,e[14],0,9),c=i(c,10),r=u(r,n,s,c,h,e[15],0,8),s=i(s,10),h=a(h,r,n,s,c,e[7],1518500249,7),n=i(n,10),c=a(c,h,r,n,s,e[4],1518500249,6),r=i(r,10),s=a(s,c,h,r,n,e[13],1518500249,8),h=i(h,10),n=a(n,s,c,h,r,e[1],1518500249,13),c=i(c,10),r=a(r,n,s,c,h,e[10],1518500249,11),s=i(s,10),h=a(h,r,n,s,c,e[6],1518500249,9),n=i(n,10),c=a(c,h,r,n,s,e[15],1518500249,7),r=i(r,10),s=a(s,c,h,r,n,e[3],1518500249,15),h=i(h,10),n=a(n,s,c,h,r,e[12],1518500249,7),c=i(c,10),r=a(r,n,s,c,h,e[0],1518500249,12),s=i(s,10),h=a(h,r,n,s,c,e[9],1518500249,15),n=i(n,10),c=a(c,h,r,n,s,e[5],1518500249,9),r=i(r,10),s=a(s,c,h,r,n,e[2],1518500249,11),h=i(h,10),n=a(n,s,c,h,r,e[14],1518500249,7),c=i(c,10),r=a(r,n,s,c,h,e[11],1518500249,13),s=i(s,10),h=a(h,r,n,s,c,e[8],1518500249,12),n=i(n,10),c=o(c,h,r,n,s,e[3],1859775393,11),r=i(r,10),s=o(s,c,h,r,n,e[10],1859775393,13),h=i(h,10),n=o(n,s,c,h,r,e[14],1859775393,6),c=i(c,10),r=o(r,n,s,c,h,e[4],1859775393,7),s=i(s,10),h=o(h,r,n,s,c,e[9],1859775393,14),n=i(n,10),c=o(c,h,r,n,s,e[15],1859775393,9),r=i(r,10),s=o(s,c,h,r,n,e[8],1859775393,13),h=i(h,10),n=o(n,s,c,h,r,e[1],1859775393,15),c=i(c,10),r=o(r,n,s,c,h,e[2],1859775393,14),s=i(s,10),h=o(h,r,n,s,c,e[7],1859775393,8),n=i(n,10),c=o(c,h,r,n,s,e[0],1859775393,13),r=i(r,10),s=o(s,c,h,r,n,e[6],1859775393,6),h=i(h,10),n=o(n,s,c,h,r,e[13],1859775393,5),c=i(c,10),r=o(r,n,s,c,h,e[11],1859775393,12),s=i(s,10),h=o(h,r,n,s,c,e[5],1859775393,7),n=i(n,10),c=o(c,h,r,n,s,e[12],1859775393,5),r=i(r,10),s=d(s,c,h,r,n,e[1],2400959708,11),h=i(h,10),n=d(n,s,c,h,r,e[9],2400959708,12),c=i(c,10),r=d(r,n,s,c,h,e[11],2400959708,14),s=i(s,10),h=d(h,r,n,s,c,e[10],2400959708,15),n=i(n,10),c=d(c,h,r,n,s,e[0],2400959708,14),r=i(r,10),s=d(s,c,h,r,n,e[8],2400959708,15),h=i(h,10),n=d(n,s,c,h,r,e[12],2400959708,9),c=i(c,10),r=d(r,n,s,c,h,e[4],2400959708,8),s=i(s,10),h=d(h,r,n,s,c,e[13],2400959708,9),n=i(n,10),c=d(c,h,r,n,s,e[3],2400959708,14),r=i(r,10),s=d(s,c,h,r,n,e[7],2400959708,5),h=i(h,10),n=d(n,s,c,h,r,e[15],2400959708,6),c=i(c,10),r=d(r,n,s,c,h,e[14],2400959708,8),s=i(s,10),h=d(h,r,n,s,c,e[5],2400959708,6),n=i(n,10),c=d(c,h,r,n,s,e[6],2400959708,5),r=i(r,10),s=d(s,c,h,r,n,e[2],2400959708,12),h=i(h,10),n=f(n,s,c,h,r,e[4],2840853838,9),c=i(c,10),r=f(r,n,s,c,h,e[0],2840853838,15),s=i(s,10),h=f(h,r,n,s,c,e[5],2840853838,5),n=i(n,10),c=f(c,h,r,n,s,e[9],2840853838,11),r=i(r,10),s=f(s,c,h,r,n,e[7],2840853838,6),h=i(h,10),n=f(n,s,c,h,r,e[12],2840853838,8),c=i(c,10),r=f(r,n,s,c,h,e[2],2840853838,13),s=i(s,10),h=f(h,r,n,s,c,e[10],2840853838,12),n=i(n,10),c=f(c,h,r,n,s,e[14],2840853838,5),r=i(r,10),s=f(s,c,h,r,n,e[1],2840853838,12),h=i(h,10),n=f(n,s,c,h,r,e[3],2840853838,13),c=i(c,10),r=f(r,n,s,c,h,e[8],2840853838,14),s=i(s,10),h=f(h,r,n,s,c,e[11],2840853838,11),n=i(n,10),c=f(c,h,r,n,s,e[6],2840853838,8),r=i(r,10),s=f(s,c,h,r,n,e[15],2840853838,5),h=i(h,10),n=f(n,s,c,h,r,e[13],2840853838,6),c=i(c,10);var l=this._a,p=this._b,b=this._c,y=this._d,m=this._e;l=f(l,p,b,y,m,e[5],1352829926,8),b=i(b,10),m=f(m,l,p,b,y,e[14],1352829926,9),p=i(p,10),y=f(y,m,l,p,b,e[7],1352829926,9),l=i(l,10),b=f(b,y,m,l,p,e[0],1352829926,11),m=i(m,10),p=f(p,b,y,m,l,e[9],1352829926,13),y=i(y,10),l=f(l,p,b,y,m,e[2],1352829926,15),b=i(b,10),m=f(m,l,p,b,y,e[11],1352829926,15),p=i(p,10),y=f(y,m,l,p,b,e[4],1352829926,5),l=i(l,10),b=f(b,y,m,l,p,e[13],1352829926,7),m=i(m,10),p=f(p,b,y,m,l,e[6],1352829926,7),y=i(y,10),l=f(l,p,b,y,m,e[15],1352829926,8),b=i(b,10),m=f(m,l,p,b,y,e[8],1352829926,11),p=i(p,10),y=f(y,m,l,p,b,e[1],1352829926,14),l=i(l,10),b=f(b,y,m,l,p,e[10],1352829926,14),m=i(m,10),p=f(p,b,y,m,l,e[3],1352829926,12),y=i(y,10),l=f(l,p,b,y,m,e[12],1352829926,6),b=i(b,10),m=d(m,l,p,b,y,e[6],1548603684,9),p=i(p,10),y=d(y,m,l,p,b,e[11],1548603684,13),l=i(l,10),b=d(b,y,m,l,p,e[3],1548603684,15),m=i(m,10),p=d(p,b,y,m,l,e[7],1548603684,7),y=i(y,10),l=d(l,p,b,y,m,e[0],1548603684,12),b=i(b,10),m=d(m,l,p,b,y,e[13],1548603684,8),p=i(p,10),y=d(y,m,l,p,b,e[5],1548603684,9),l=i(l,10),b=d(b,y,m,l,p,e[10],1548603684,11),m=i(m,10),p=d(p,b,y,m,l,e[14],1548603684,7),y=i(y,10),l=d(l,p,b,y,m,e[15],1548603684,7),b=i(b,10),m=d(m,l,p,b,y,e[8],1548603684,12),p=i(p,10),y=d(y,m,l,p,b,e[12],1548603684,7),l=i(l,10),b=d(b,y,m,l,p,e[4],1548603684,6),m=i(m,10),p=d(p,b,y,m,l,e[9],1548603684,15),y=i(y,10),l=d(l,p,b,y,m,e[1],1548603684,13),b=i(b,10),m=d(m,l,p,b,y,e[2],1548603684,11),p=i(p,10),y=o(y,m,l,p,b,e[15],1836072691,9),l=i(l,10),b=o(b,y,m,l,p,e[5],1836072691,7),m=i(m,10),p=o(p,b,y,m,l,e[1],1836072691,15),y=i(y,10),l=o(l,p,b,y,m,e[3],1836072691,11),b=i(b,10),m=o(m,l,p,b,y,e[7],1836072691,8),p=i(p,10),y=o(y,m,l,p,b,e[14],1836072691,6),l=i(l,10),b=o(b,y,m,l,p,e[6],1836072691,6),m=i(m,10),p=o(p,b,y,m,l,e[9],1836072691,14),y=i(y,10),l=o(l,p,b,y,m,e[11],1836072691,12),b=i(b,10),m=o(m,l,p,b,y,e[8],1836072691,13),p=i(p,10),y=o(y,m,l,p,b,e[12],1836072691,5),l=i(l,10),b=o(b,y,m,l,p,e[2],1836072691,14),m=i(m,10),p=o(p,b,y,m,l,e[10],1836072691,13),y=i(y,10),l=o(l,p,b,y,m,e[0],1836072691,13),b=i(b,10),m=o(m,l,p,b,y,e[4],1836072691,7),p=i(p,10),y=o(y,m,l,p,b,e[13],1836072691,5),l=i(l,10),b=a(b,y,m,l,p,e[8],2053994217,15),m=i(m,10),p=a(p,b,y,m,l,e[6],2053994217,5),y=i(y,10),l=a(l,p,b,y,m,e[4],2053994217,8),b=i(b,10),m=a(m,l,p,b,y,e[1],2053994217,11),p=i(p,10),y=a(y,m,l,p,b,e[3],2053994217,14),l=i(l,10),b=a(b,y,m,l,p,e[11],2053994217,14),m=i(m,10),p=a(p,b,y,m,l,e[15],2053994217,6),y=i(y,10),l=a(l,p,b,y,m,e[0],2053994217,14),b=i(b,10),m=a(m,l,p,b,y,e[5],2053994217,6),p=i(p,10),y=a(y,m,l,p,b,e[12],2053994217,9),l=i(l,10),b=a(b,y,m,l,p,e[2],2053994217,12),m=i(m,10),p=a(p,b,y,m,l,e[13],2053994217,9),y=i(y,10),l=a(l,p,b,y,m,e[9],2053994217,12),b=i(b,10),m=a(m,l,p,b,y,e[7],2053994217,5),p=i(p,10),y=a(y,m,l,p,b,e[10],2053994217,15),l=i(l,10),b=a(b,y,m,l,p,e[14],2053994217,8),m=i(m,10),p=u(p,b,y,m,l,e[12],0,8),y=i(y,10),l=u(l,p,b,y,m,e[15],0,5),b=i(b,10),m=u(m,l,p,b,y,e[10],0,12),p=i(p,10),y=u(y,m,l,p,b,e[4],0,9),l=i(l,10),b=u(b,y,m,l,p,e[1],0,12),m=i(m,10),p=u(p,b,y,m,l,e[5],0,5),y=i(y,10),l=u(l,p,b,y,m,e[8],0,14),b=i(b,10),m=u(m,l,p,b,y,e[7],0,6),p=i(p,10),y=u(y,m,l,p,b,e[6],0,8),l=i(l,10),b=u(b,y,m,l,p,e[2],0,13),m=i(m,10),p=u(p,b,y,m,l,e[13],0,6),y=i(y,10),l=u(l,p,b,y,m,e[14],0,5),b=i(b,10),m=u(m,l,p,b,y,e[0],0,15),p=i(p,10),y=u(y,m,l,p,b,e[3],0,13),l=i(l,10),b=u(b,y,m,l,p,e[9],0,11),m=i(m,10),p=u(p,b,y,m,l,e[11],0,11),y=i(y,10);var g=this._b+s+y|0;this._b=this._c+c+m|0,this._c=this._d+h+l|0,this._d=this._e+r+p|0,this._e=this._a+n+b|0,this._a=g},n.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var e=new t(20);return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e.writeInt32LE(this._e,16),e},e.exports=n}).call(t,r(0).Buffer)},function(e,t){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function u(e){return void 0===e}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!function(e){return"number"==typeof e}(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,r,a,o,d,f;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var s=new Error('Uncaught, unspecified "error" event. ('+t+")");throw s.context=t,s}if(u(r=this._events[e]))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(i(r))for(o=Array.prototype.slice.call(arguments,1),f=r.slice(),a=f.length,d=0;d<a;d++)f[d].apply(this,o);return!0},r.prototype.addListener=function(e,t){var a;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(a=u(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&a>0&&this._events[e].length>a&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function r(){this.removeListener(e,r),i||(i=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var i=!1;return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var r,u,a,o;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],a=r.length,u=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(r)){for(o=a;o-- >0;)if(r[o]===t||r[o].listener&&r[o].listener===t){u=o;break}if(u<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(u,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,r){(t=e.exports=r(53)).Stream=t,t.Readable=t,t.Writable=r(40),t.Duplex=r(11),t.Transform=r(56),t.PassThrough=r(115)},function(e,t,r){"use strict";(function(t,n,i){function u(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,r){var n=e.entry;for(e.entry=null;n;){var i=n.callback;t.pendingcb--,i(r),n=n.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}(t,e)}}function a(){}function o(e,t){m=m||r(11),e=e||{},this.objectMode=!!e.objectMode,t instanceof m&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var n=e.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===e.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var r=e._writableState,n=r.sync,i=r.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(r),t)!function(e,t,r,n,i){--t.pendingcb,r?(y(i,n),y(b,e,t),e._writableState.errorEmitted=!0,e.emit("error",n)):(i(n),e._writableState.errorEmitted=!0,e.emit("error",n),b(e,t))}(e,r,n,t,i);else{var u=l(r);u||r.corked||r.bufferProcessing||!r.bufferedRequest||h(e,r),n?g(c,e,r,u,i):c(e,r,u,i)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new u(this)}function d(e){if(m=m||r(11),!(_.call(d,this)||this instanceof m))return new d(e);this._writableState=new o(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),S.call(this)}function f(e,t,r,n,i,u){if(!r){var a=function(e,t,r){return e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=E.from(t,r)),t}(t,n,i);n!==a&&(r=!0,i="buffer",n=a)}var o=t.objectMode?1:n.length;t.length+=o;var d=t.length<t.highWaterMark;if(d||(t.needDrain=!0),t.writing||t.corked){var f=t.lastBufferedRequest;t.lastBufferedRequest={chunk:n,encoding:i,isBuf:r,callback:u,next:null},f?f.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else s(e,t,!1,o,n,i,u);return d}function s(e,t,r,n,i,u,a){t.writelen=n,t.writecb=a,t.writing=!0,t.sync=!0,r?e._writev(i,t.onwrite):e._write(i,u,t.onwrite),t.sync=!1}function c(e,t,r,n){r||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,n(),b(e,t)}function h(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var n=t.bufferedRequestCount,i=new Array(n),a=t.corkedRequestsFree;a.entry=r;for(var o=0,d=!0;r;)i[o]=r,r.isBuf||(d=!1),r=r.next,o+=1;i.allBuffers=d,s(e,t,!0,t.length,i,"",a.finish),t.pendingcb++,t.lastBufferedRequest=null,a.next?(t.corkedRequestsFree=a.next,a.next=null):t.corkedRequestsFree=new u(t)}else{for(;r;){var f=r.chunk,c=r.encoding,h=r.callback;if(s(e,t,!1,t.objectMode?1:f.length,f,c,h),r=r.next,t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequestCount=0,t.bufferedRequest=r,t.bufferProcessing=!1}function l(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function p(e,t){e._final(function(r){t.pendingcb--,r&&e.emit("error",r),t.prefinished=!0,e.emit("prefinish"),b(e,t)})}function b(e,t){var r=l(t);return r&&(function(e,t){t.prefinished||t.finalCalled||("function"==typeof e._final?(t.pendingcb++,t.finalCalled=!0,y(p,e,t)):(t.prefinished=!0,e.emit("prefinish")))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),r}var y=r(26);e.exports=d;var m,g=!t.browser&&["v0.10","v0.9."].indexOf(t.version.slice(0,5))>-1?n:y;d.WritableState=o;var v=r(19);v.inherits=r(1);var _,w={deprecate:r(114)},S=r(54),E=r(2).Buffer,A=i.Uint8Array||function(){},x=r(55);v.inherits(d,S),o.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(o.prototype,"buffer",{get:w.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(_=Function.prototype[Symbol.hasInstance],Object.defineProperty(d,Symbol.hasInstance,{value:function(e){return!!_.call(this,e)||e&&e._writableState instanceof o}})):_=function(e){return e instanceof this},d.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},d.prototype.write=function(e,t,r){var n=this._writableState,i=!1,u=function(e){return E.isBuffer(e)||e instanceof A}(e)&&!n.objectMode;return u&&!E.isBuffer(e)&&(e=function(e){return E.from(e)}(e)),"function"==typeof t&&(r=t,t=null),u?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof r&&(r=a),n.ended?function(e,t){var r=new Error("write after end");e.emit("error",r),y(t,r)}(this,r):(u||function(e,t,r,n){var i=!0,u=!1;return null===r?u=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||t.objectMode||(u=new TypeError("Invalid non-string/buffer chunk")),u&&(e.emit("error",u),y(n,u),i=!1),i}(this,n,e,r))&&(n.pendingcb++,i=f(this,n,u,e,t,r)),i},d.prototype.cork=function(){this._writableState.corked++},d.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||h(this,e))},d.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},d.prototype._write=function(e,t,r){r(new Error("_write() is not implemented"))},d.prototype._writev=null,d.prototype.end=function(e,t,r){var n=this._writableState;"function"==typeof e?(r=e,e=null,t=null):"function"==typeof t&&(r=t,t=null),null!==e&&void 0!==e&&this.write(e,t),n.corked&&(n.corked=1,this.uncork()),n.ending||n.finished||function(e,t,r){t.ending=!0,b(e,t),r&&(t.finished?y(r):e.once("finish",r)),t.ended=!0,e.writable=!1}(this,n,r)},Object.defineProperty(d.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),d.prototype.destroy=x.destroy,d.prototype._undestroy=x.undestroy,d.prototype._destroy=function(e,t){this.end(),t(e)}}).call(t,r(6),r(112).setImmediate,r(9))},function(e,t,r){"use strict";function n(e){var t;switch(this.encoding=function(e){var t=function(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(h.isEncoding===l||!l(e)))throw new Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=a,this.end=o,t=4;break;case"utf8":this.fillLast=u,t=4;break;case"base64":this.text=d,this.end=f,t=3;break;default:return this.write=s,void(this.end=c)}this.lastNeed=0,this.lastTotal=0,this.lastChar=h.allocUnsafe(t)}function i(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:-1}function u(e){var t=this.lastTotal-this.lastNeed,r=function(e,t,r){if(128!=(192&t[0]))return e.lastNeed=0,"�".repeat(r);if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�".repeat(r+1);if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�".repeat(r+2)}}(this,e,t);return void 0!==r?r:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function a(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function o(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function d(e,t){var r=(e.length-t)%3;return 0===r?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function f(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function s(e){return e.toString(this.encoding)}function c(e){return e&&e.length?this.write(e):""}var h=r(2).Buffer,l=h.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};t.StringDecoder=n,n.prototype.write=function(e){if(0===e.length)return"";var t,r;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""},n.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�".repeat(this.lastTotal-this.lastNeed):t},n.prototype.text=function(e,t){var r=function(e,t,r){var n=t.length-1;if(n<r)return 0;var u=i(t[n]);return u>=0?(u>0&&(e.lastNeed=u-1),u):--n<r?0:(u=i(t[n]))>=0?(u>0&&(e.lastNeed=u-2),u):--n<r?0:(u=i(t[n]))>=0?(u>0&&(2===u?u=0:e.lastNeed=u-3),u):0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var n=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,n),e.toString("utf8",t,n)},n.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},function(e,t,r){var t=e.exports=function(e){e=e.toLowerCase();var r=t[e];if(!r)throw new Error(e+" is not supported (we accept pull requests)");return new r};t.sha=r(120),t.sha1=r(121),t.sha224=r(122),t.sha256=r(57),t.sha384=r(123),t.sha512=r(58)},function(e,t,r){var n=r(130),i=r(138),u=r(67);t.createCipher=t.Cipher=n.createCipher,t.createCipheriv=t.Cipheriv=n.createCipheriv,t.createDecipher=t.Decipher=i.createDecipher,t.createDecipheriv=t.Decipheriv=i.createDecipheriv,t.listCiphers=t.getCiphers=function(){return Object.keys(u)}},function(e,t,r){var n={ECB:r(131),CBC:r(132),CFB:r(133),CFB8:r(134),CFB1:r(135),OFB:r(136),CTR:r(65),GCM:r(65)},i=r(67);for(var u in i)i[u].module=n[i[u].mode];e.exports=i},function(e,t,r){"use strict";t.utils=r(140),t.Cipher=r(141),t.DES=r(142),t.CBC=r(143),t.EDE=r(144)},function(e,t,r){(function(t){function n(e){var t=u(e);return{blinder:t.toRed(a.mont(e.modulus)).redPow(new a(e.publicExponent)).fromRed(),unblinder:t.invm(e.modulus)}}function i(e,r){var i=n(r),u=r.modulus.byteLength(),o=(a.mont(r.modulus),new a(e).mul(i.blinder).umod(r.modulus)),d=o.toRed(a.mont(r.prime1)),f=o.toRed(a.mont(r.prime2)),s=r.coefficient,c=r.prime1,h=r.prime2,l=d.redPow(r.exponent1),p=f.redPow(r.exponent2);l=l.fromRed(),p=p.fromRed();var b=l.isub(p).imul(s).umod(c);return b.imul(h),p.iadd(b),new t(p.imul(i.unblinder).umod(r.modulus).toArray(!1,u))}function u(e){for(var t=e.modulus.byteLength(),r=new a(o(t));r.cmp(e.modulus)>=0||!r.umod(e.prime1)||!r.umod(e.prime2);)r=new a(o(t));return r}var a=r(3),o=r(13);e.exports=i,i.getr=u}).call(t,r(0).Buffer)},function(e,t,r){var n=t;n.utils=r(7),n.common=r(21),n.sha=r(159),n.ripemd=r(163),n.hmac=r(164),n.sha1=n.sha.sha1,n.sha256=n.sha.sha256,n.sha224=n.sha.sha224,n.sha384=n.sha.sha384,n.sha512=n.sha.sha512,n.ripemd160=n.ripemd.ripemd160},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){function n(e,t){a.call(this,t),o.isBuffer(e)?(this.base=e,this.offset=0,this.length=e.length):this.error("Input not Buffer")}function i(e,t){if(Array.isArray(e))this.length=0,this.value=e.map(function(e){return e instanceof i||(e=new i(e,t)),this.length+=e.length,e},this);else if("number"==typeof e){if(!(0<=e&&e<=255))return t.error("non-byte EncoderBuffer value");this.value=e,this.length=1}else if("string"==typeof e)this.value=e,this.length=o.byteLength(e);else{if(!o.isBuffer(e))return t.error("Unsupported type: "+typeof e);this.value=e,this.length=e.length}}var u=r(1),a=r(16).Reporter,o=r(0).Buffer;u(n,a),t.DecoderBuffer=n,n.prototype.save=function(){return{offset:this.offset,reporter:a.prototype.save.call(this)}},n.prototype.restore=function(e){var t=new n(this.base);return t.offset=e.offset,t.length=this.offset,this.offset=e.offset,a.prototype.restore.call(this,e.reporter),t},n.prototype.isEmpty=function(){return this.offset===this.length},n.prototype.readUInt8=function(e){return this.offset+1<=this.length?this.base.readUInt8(this.offset++,!0):this.error(e||"DecoderBuffer overrun")},n.prototype.skip=function(e,t){if(!(this.offset+e<=this.length))return this.error(t||"DecoderBuffer overrun");var r=new n(this.base);return r._reporterState=this._reporterState,r.offset=this.offset,r.length=this.offset+e,this.offset+=e,r},n.prototype.raw=function(e){return this.base.slice(e?e.offset:this.offset,this.length)},t.EncoderBuffer=i,i.prototype.join=function(e,t){return e||(e=new o(this.length)),t||(t=0),0===this.length?e:(Array.isArray(this.value)?this.value.forEach(function(r){r.join(e,t),t+=r.length}):("number"==typeof this.value?e[t]=this.value:"string"==typeof this.value?e.write(this.value,t):o.isBuffer(this.value)&&this.value.copy(e,t),t+=this.length),e)}},function(e,t,r){var n=t;n._reverse=function(e){var t={};return Object.keys(e).forEach(function(r){(0|r)==r&&(r|=0);var n=e[r];t[n]=r}),t},n.der=r(101)},function(e,t,r){function n(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new i,this.tree._init(e.body)}function i(e){f.Node.call(this,"der",e)}function u(e,t){var r=e.readUInt8(t);if(e.isError(r))return r;var n=c.tagClass[r>>6],i=0==(32&r);if(31==(31&r)){var u=r;for(r=0;128==(128&u);){if(u=e.readUInt8(t),e.isError(u))return u;r<<=7,r|=127&u}}else r&=31;return{cls:n,primitive:i,tag:r,tagStr:c.tag[r]}}function a(e,t,r){var n=e.readUInt8(r);if(e.isError(n))return n;if(!t&&128===n)return null;if(0==(128&n))return n;var i=127&n;if(i>4)return e.error("length octect is too long");n=0;for(var u=0;u<i;u++){n<<=8;var a=e.readUInt8(r);if(e.isError(a))return a;n|=a}return n}var o=r(1),d=r(8),f=d.base,s=d.bignum,c=d.constants.der;e.exports=n,n.prototype.decode=function(e,t){return e instanceof f.DecoderBuffer||(e=new f.DecoderBuffer(e,t)),this.tree._decode(e,t)},o(i,f.Node),i.prototype._peekTag=function(e,t,r){if(e.isEmpty())return!1;var n=e.save(),i=u(e,'Failed to peek tag: "'+t+'"');return e.isError(i)?i:(e.restore(n),i.tag===t||i.tagStr===t||i.tagStr+"of"===t||r)},i.prototype._decodeTag=function(e,t,r){var n=u(e,'Failed to decode tag of "'+t+'"');if(e.isError(n))return n;var i=a(e,n.primitive,'Failed to get length of "'+t+'"');if(e.isError(i))return i;if(!r&&n.tag!==t&&n.tagStr!==t&&n.tagStr+"of"!==t)return e.error('Failed to match tag: "'+t+'"');if(n.primitive||null!==i)return e.skip(i,'Failed to match body of: "'+t+'"');var o=e.save(),d=this._skipUntilEnd(e,'Failed to skip indefinite length body: "'+this.tag+'"');return e.isError(d)?d:(i=e.offset-o.offset,e.restore(o),e.skip(i,'Failed to match body of: "'+t+'"'))},i.prototype._skipUntilEnd=function(e,t){for(;;){var r=u(e,t);if(e.isError(r))return r;var n,i=a(e,r.primitive,t);if(e.isError(i))return i;if(n=r.primitive||null!==i?e.skip(i):this._skipUntilEnd(e,t),e.isError(n))return n;if("end"===r.tagStr)break}},i.prototype._decodeList=function(e,t,r,n){for(var i=[];!e.isEmpty();){var u=this._peekTag(e,"end");if(e.isError(u))return u;var a=r.decode(e,"der",n);if(e.isError(a)&&u)break;i.push(a)}return i},i.prototype._decodeStr=function(e,t){if("bitstr"===t){var r=e.readUInt8();return e.isError(r)?r:{unused:r,data:e.raw()}}if("bmpstr"===t){var n=e.raw();if(n.length%2==1)return e.error("Decoding of string type: bmpstr length mismatch");for(var i="",u=0;u<n.length/2;u++)i+=String.fromCharCode(n.readUInt16BE(2*u));return i}if("numstr"===t){var a=e.raw().toString("ascii");return this._isNumstr(a)?a:e.error("Decoding of string type: numstr unsupported characters")}if("octstr"===t)return e.raw();if("objDesc"===t)return e.raw();if("printstr"===t){var o=e.raw().toString("ascii");return this._isPrintstr(o)?o:e.error("Decoding of string type: printstr unsupported characters")}return/str$/.test(t)?e.raw().toString():e.error("Decoding of string type: "+t+" unsupported")},i.prototype._decodeObjid=function(e,t,r){for(var n,i=[],u=0;!e.isEmpty();){var a=e.readUInt8();u<<=7,u|=127&a,0==(128&a)&&(i.push(u),u=0)}128&a&&i.push(u);var o=i[0]/40|0,d=i[0]%40;if(n=r?i:[o,d].concat(i.slice(1)),t){var f=t[n.join(" ")];void 0===f&&(f=t[n.join(".")]),void 0!==f&&(n=f)}return n},i.prototype._decodeTime=function(e,t){var r=e.raw().toString();if("gentime"===t)var n=0|r.slice(0,4),i=0|r.slice(4,6),u=0|r.slice(6,8),a=0|r.slice(8,10),o=0|r.slice(10,12),d=0|r.slice(12,14);else{if("utctime"!==t)return e.error("Decoding "+t+" time is not supported yet");var n=0|r.slice(0,2),i=0|r.slice(2,4),u=0|r.slice(4,6),a=0|r.slice(6,8),o=0|r.slice(8,10),d=0|r.slice(10,12);n=n<70?2e3+n:1900+n}return Date.UTC(n,i-1,u,a,o,d,0)},i.prototype._decodeNull=function(e){return null},i.prototype._decodeBool=function(e){var t=e.readUInt8();return e.isError(t)?t:0!==t},i.prototype._decodeInt=function(e,t){var r=e.raw(),n=new s(r);return t&&(n=t[n.toString(10)]||n),n},i.prototype._use=function(e,t){return"function"==typeof e&&(e=e(t)),e._getDecoder("der").tree}},function(e,t,r){function n(e){this.enc="der",this.name=e.name,this.entity=e,this.tree=new i,this.tree._init(e.body)}function i(e){f.Node.call(this,"der",e)}function u(e){return e<10?"0"+e:e}var a=r(1),o=r(0).Buffer,d=r(8),f=d.base,s=d.constants.der;e.exports=n,n.prototype.encode=function(e,t){return this.tree._encode(e,t).join()},a(i,f.Node),i.prototype._encodeComposite=function(e,t,r,n){var i=function(e,t,r,n){var i;if("seqof"===e?e="seq":"setof"===e&&(e="set"),s.tagByName.hasOwnProperty(e))i=s.tagByName[e];else{if("number"!=typeof e||(0|e)!==e)return n.error("Unknown tag: "+e);i=e}return i>=31?n.error("Multi-octet tag encoding unsupported"):(t||(i|=32),i|=s.tagClassByName[r||"universal"]<<6)}(e,t,r,this.reporter);if(n.length<128){var u=new o(2);return u[0]=i,u[1]=n.length,this._createEncoderBuffer([u,n])}for(var a=1,d=n.length;d>=256;d>>=8)a++;var u=new o(2+a);u[0]=i,u[1]=128|a;for(var d=1+a,f=n.length;f>0;d--,f>>=8)u[d]=255&f;return this._createEncoderBuffer([u,n])},i.prototype._encodeStr=function(e,t){if("bitstr"===t)return this._createEncoderBuffer([0|e.unused,e.data]);if("bmpstr"===t){for(var r=new o(2*e.length),n=0;n<e.length;n++)r.writeUInt16BE(e.charCodeAt(n),2*n);return this._createEncoderBuffer(r)}return"numstr"===t?this._isNumstr(e)?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: numstr supports only digits and space"):"printstr"===t?this._isPrintstr(e)?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"):/str$/.test(t)?this._createEncoderBuffer(e):"objDesc"===t?this._createEncoderBuffer(e):this.reporter.error("Encoding of string type: "+t+" unsupported")},i.prototype._encodeObjid=function(e,t,r){if("string"==typeof e){if(!t)return this.reporter.error("string objid given, but no values map found");if(!t.hasOwnProperty(e))return this.reporter.error("objid not found in values map");e=t[e].split(/[\s\.]+/g);for(var n=0;n<e.length;n++)e[n]|=0}else if(Array.isArray(e)){e=e.slice();for(var n=0;n<e.length;n++)e[n]|=0}if(!Array.isArray(e))return this.reporter.error("objid() should be either array or string, got: "+JSON.stringify(e));if(!r){if(e[1]>=40)return this.reporter.error("Second objid identifier OOB");e.splice(0,2,40*e[0]+e[1])}for(var i=0,n=0;n<e.length;n++){var u=e[n];for(i++;u>=128;u>>=7)i++}for(var a=new o(i),d=a.length-1,n=e.length-1;n>=0;n--){var u=e[n];for(a[d--]=127&u;(u>>=7)>0;)a[d--]=128|127&u}return this._createEncoderBuffer(a)},i.prototype._encodeTime=function(e,t){var r,n=new Date(e);return"gentime"===t?r=[u(n.getFullYear()),u(n.getUTCMonth()+1),u(n.getUTCDate()),u(n.getUTCHours()),u(n.getUTCMinutes()),u(n.getUTCSeconds()),"Z"].join(""):"utctime"===t?r=[u(n.getFullYear()%100),u(n.getUTCMonth()+1),u(n.getUTCDate()),u(n.getUTCHours()),u(n.getUTCMinutes()),u(n.getUTCSeconds()),"Z"].join(""):this.reporter.error("Encoding "+t+" time is not supported yet"),this._encodeStr(r,"octstr")},i.prototype._encodeNull=function(){return this._createEncoderBuffer("")},i.prototype._encodeInt=function(e,t){if("string"==typeof e){if(!t)return this.reporter.error("String int or enum given, but no values map");if(!t.hasOwnProperty(e))return this.reporter.error("Values map doesn't contain: "+JSON.stringify(e));e=t[e]}if("number"!=typeof e&&!o.isBuffer(e)){var r=e.toArray();!e.sign&&128&r[0]&&r.unshift(0),e=new o(r)}if(o.isBuffer(e)){var n=e.length;0===e.length&&n++;var i=new o(n);return e.copy(i),0===e.length&&(i[0]=0),this._createEncoderBuffer(i)}if(e<128)return this._createEncoderBuffer(e);if(e<256)return this._createEncoderBuffer([0,e]);for(var n=1,u=e;u>=256;u>>=8)n++;for(var i=new Array(n),u=i.length-1;u>=0;u--)i[u]=255&e,e>>=8;return 128&i[0]&&i.unshift(0),this._createEncoderBuffer(new o(i))},i.prototype._encodeBool=function(e){return this._createEncoderBuffer(e?255:0)},i.prototype._use=function(e,t){return"function"==typeof e&&(e=e(t)),e._getEncoder("der").tree},i.prototype._skipDefault=function(e,t,r){var n,i=this._baseState;if(null===i.default)return!1;var u=e.join();if(void 0===i.defaultBuffer&&(i.defaultBuffer=this._encodeValue(i.default,t,r).join()),u.length!==i.defaultBuffer.length)return!1;for(n=0;n<u.length;n++)if(u[n]!==i.defaultBuffer[n])return!1;return!0}},function(e,t,r){"use strict";(function(t,n){function i(e,t){S=S||r(11),e=e||{},this.objectMode=!!e.objectMode,t instanceof S&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var n=e.highWaterMark,i=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:i,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new P,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(C||(C=r(41).StringDecoder),this.decoder=new C(e.encoding),this.encoding=e.encoding)}function u(e){if(S=S||r(11),!(this instanceof u))return new u(e);this._readableState=new i(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),x.call(this)}function a(e,t,r,n,i){var u,a=e._readableState;return null===t?(a.reading=!1,function(e,t){if(!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,s(e)}}(e,a)):(i||(u=d(a,t)),u?e.emit("error",u):a.objectMode||t&&t.length>0?("string"==typeof t||a.objectMode||Object.getPrototypeOf(t)===k.prototype||(t=function(e){return k.from(e)}(t)),n?a.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):o(e,a,t,!0):a.ended?e.emit("error",new Error("stream.push() after EOF")):(a.reading=!1,a.decoder&&!r?(t=a.decoder.write(t),a.objectMode||0!==t.length?o(e,a,t,!1):h(e,a)):o(e,a,t,!1))):n||(a.reading=!1)),function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(a)}function o(e,t,r,n){t.flowing&&0===t.length&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,n?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&s(e)),h(e,t)}function d(e,t){var r;return function(e){return k.isBuffer(e)||e instanceof M}(t)||"string"==typeof t||void 0===t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk")),r}function f(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=j?e=j:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function s(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(B("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?w(c,e):c(e))}function c(e){B("emit readable"),e.emit("readable"),y(e)}function h(e,t){t.readingMore||(t.readingMore=!0,w(l,e,t))}function l(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(B("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}function p(e){B("readable nexttick read 0"),e.read(0)}function b(e,t){t.reading||(B("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),y(e),t.flowing&&!t.reading&&e.read(0)}function y(e){var t=e._readableState;for(B("flow",t.flowing);t.flowing&&null!==e.read(););}function m(e,t){return 0===t.length?null:(t.objectMode?r=t.buffer.shift():!e||e>=t.length?(r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):r=function(e,t,r){var n;return e<t.head.data.length?(n=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):n=e===t.head.data.length?t.shift():r?function(e,t){var r=t.head,n=1,i=r.data;for(e-=i.length;r=r.next;){var u=r.data,a=e>u.length?u.length:e;if(a===u.length?i+=u:i+=u.slice(0,e),0==(e-=a)){a===u.length?(++n,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=u.slice(a));break}++n}return t.length-=n,i}(e,t):function(e,t){var r=k.allocUnsafe(e),n=t.head,i=1;for(n.data.copy(r),e-=n.data.length;n=n.next;){var u=n.data,a=e>u.length?u.length:e;if(u.copy(r,r.length-e,0,a),0==(e-=a)){a===u.length?(++i,n.next?t.head=n.next:t.head=t.tail=null):(t.head=n,n.data=u.slice(a));break}++i}return t.length-=i,r}(e,t),n}(e,t.buffer,t.decoder),r);var r}function g(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,w(v,t,e))}function v(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function _(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1}var w=r(26);e.exports=u;var S,E=r(48);u.ReadableState=i;var A=(r(38).EventEmitter,function(e,t){return e.listeners(t).length}),x=r(54),k=r(2).Buffer,M=t.Uint8Array||function(){},I=r(19);I.inherits=r(1);var T=r(110),B=void 0;B=T&&T.debuglog?T.debuglog("stream"):function(){};var C,P=r(111),O=r(55);I.inherits(u,x);var R=["error","close","destroy","pause","resume"];Object.defineProperty(u.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),u.prototype.destroy=O.destroy,u.prototype._undestroy=O.undestroy,u.prototype._destroy=function(e,t){this.push(null),t(e)},u.prototype.push=function(e,t){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof e&&((t=t||n.defaultEncoding)!==n.encoding&&(e=k.from(e,t),t=""),r=!0),a(this,e,t,!1,r)},u.prototype.unshift=function(e){return a(this,e,null,!0,!1)},u.prototype.isPaused=function(){return!1===this._readableState.flowing},u.prototype.setEncoding=function(e){return C||(C=r(41).StringDecoder),this._readableState.decoder=new C(e),this._readableState.encoding=e,this};var j=8388608;u.prototype.read=function(e){B("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return B("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?g(this):s(this),null;if(0===(e=f(e,t))&&t.ended)return 0===t.length&&g(this),null;var n,i=t.needReadable;return B("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&B("length less than watermark",i=!0),t.ended||t.reading?B("reading or ended",i=!1):i&&(B("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=f(r,t))),null===(n=e>0?m(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&g(this)),null!==n&&this.emit("data",n),n},u.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},u.prototype.pipe=function(e,t){function r(e,t){B("onunpipe"),e===c&&t&&!1===t.hasUnpiped&&(t.hasUnpiped=!0,u())}function i(){B("onend"),e.end()}function u(){B("cleanup"),e.removeListener("close",d),e.removeListener("finish",f),e.removeListener("drain",b),e.removeListener("error",o),e.removeListener("unpipe",r),c.removeListener("end",i),c.removeListener("end",s),c.removeListener("data",a),m=!0,!h.awaitDrain||e._writableState&&!e._writableState.needDrain||b()}function a(t){B("ondata"),g=!1,!1!==e.write(t)||g||((1===h.pipesCount&&h.pipes===e||h.pipesCount>1&&-1!==_(h.pipes,e))&&!m&&(B("false write response, pause",c._readableState.awaitDrain),c._readableState.awaitDrain++,g=!0),c.pause())}function o(t){B("onerror",t),s(),e.removeListener("error",o),0===A(e,"error")&&e.emit("error",t)}function d(){e.removeListener("finish",f),s()}function f(){B("onfinish"),e.removeListener("close",d),s()}function s(){B("unpipe"),c.unpipe(e)}var c=this,h=this._readableState;switch(h.pipesCount){case 0:h.pipes=e;break;case 1:h.pipes=[h.pipes,e];break;default:h.pipes.push(e)}h.pipesCount+=1,B("pipe count=%d opts=%j",h.pipesCount,t);var l=(!t||!1!==t.end)&&e!==n.stdout&&e!==n.stderr,p=l?i:s;h.endEmitted?w(p):c.once("end",p),e.on("unpipe",r);var b=function(e){return function(){var t=e._readableState;B("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&A(e,"data")&&(t.flowing=!0,y(e))}}(c);e.on("drain",b);var m=!1,g=!1;return c.on("data",a),function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r);e._events&&e._events[t]?E(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",o),e.once("close",d),e.once("finish",f),e.emit("pipe",c),h.flowing||(B("pipe resume"),c.resume()),e},u.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r),this);if(!e){var n=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var u=0;u<i;u++)n[u].emit("unpipe",this,r);return this}var a=_(t.pipes,e);return-1===a?this:(t.pipes.splice(a,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r),this)},u.prototype.on=function(e,t){var r=x.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var n=this._readableState;n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.emittedReadable=!1,n.reading?n.length&&s(this):w(p,this))}return r},u.prototype.addListener=u.prototype.on,u.prototype.resume=function(){var e=this._readableState;return e.flowing||(B("resume"),e.flowing=!0,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,w(b,e,t))}(this,e)),this},u.prototype.pause=function(){return B("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(B("pause"),this._readableState.flowing=!1,this.emit("pause")),this},u.prototype.wrap=function(e){var t=this._readableState,r=!1,n=this;for(var i in e.on("end",function(){if(B("wrapped end"),t.decoder&&!t.ended){var e=t.decoder.end();e&&e.length&&n.push(e)}n.push(null)}),e.on("data",function(i){B("wrapped data"),t.decoder&&(i=t.decoder.write(i)),(!t.objectMode||null!==i&&void 0!==i)&&(t.objectMode||i&&i.length)&&(n.push(i)||(r=!0,e.pause()))}),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var u=0;u<R.length;u++)e.on(R[u],n.emit.bind(n,R[u]));return n._read=function(t){B("wrapped _read",t),r&&(r=!1,e.resume())},n},u._fromList=m}).call(t,r(9),r(6))},function(e,t,r){e.exports=r(38).EventEmitter},function(e,t,r){"use strict";function n(e,t){e.emit("error",t)}var i=r(26);e.exports={destroy:function(e,t){var r=this,u=this._readableState&&this._readableState.destroyed,a=this._writableState&&this._writableState.destroyed;u||a?t?t(e):!e||this._writableState&&this._writableState.errorEmitted||i(n,this,e):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(e){!t&&e?(i(n,r,e),r._writableState&&(r._writableState.errorEmitted=!0)):t&&t(e)}))},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},function(e,t,r){"use strict";function n(e){this.afterTransform=function(t,r){return function(e,t,r){var n=e._transformState;n.transforming=!1;var i=n.writecb;if(!i)return e.emit("error",new Error("write callback called multiple times"));n.writechunk=null,n.writecb=null,null!==r&&void 0!==r&&e.push(r),i(t);var u=e._readableState;u.reading=!1,(u.needReadable||u.length<u.highWaterMark)&&e._read(u.highWaterMark)}(e,t,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function i(e){if(!(this instanceof i))return new i(e);a.call(this,e),this._transformState=new n(this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(e,r){u(t,e,r)}):u(t)})}function u(e,t,r){if(t)return e.emit("error",t);null!==r&&void 0!==r&&e.push(r);var n=e._writableState,i=e._transformState;if(n.length)throw new Error("Calling transform done when ws.length != 0");if(i.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}e.exports=i;var a=r(11),o=r(19);o.inherits=r(1),o.inherits(i,a),i.prototype.push=function(e,t){return this._transformState.needTransform=!1,a.prototype.push.call(this,e,t)},i.prototype._transform=function(e,t,r){throw new Error("_transform() is not implemented")},i.prototype._write=function(e,t,r){var n=this._transformState;if(n.writecb=r,n.writechunk=e,n.writeencoding=t,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},i.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},i.prototype._destroy=function(e,t){var r=this;a.prototype._destroy.call(this,e,function(e){t(e),r.emit("close")})}},function(e,t,r){function n(){this.init(),this._w=p,c.call(this,64,56)}function i(e,t,r){return r^e&(t^r)}function u(e,t,r){return e&t|r&(e|t)}function a(e){return(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10)}function o(e){return(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7)}function d(e){return(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3}function f(e){return(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10}var s=r(1),c=r(14),h=r(2).Buffer,l=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],p=new Array(64);s(n,c),n.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,s=0|this._c,c=0|this._d,h=0|this._e,p=0|this._f,b=0|this._g,y=0|this._h,m=0;m<16;++m)t[m]=e.readInt32BE(4*m);for(;m<64;++m)t[m]=f(t[m-2])+t[m-7]+d(t[m-15])+t[m-16]|0;for(var g=0;g<64;++g){var v=y+o(h)+i(h,p,b)+l[g]+t[g]|0,_=a(r)+u(r,n,s)|0;y=b,b=p,p=h,h=c+v|0,c=s,s=n,n=r,r=v+_|0}this._a=r+this._a|0,this._b=n+this._b|0,this._c=s+this._c|0,this._d=c+this._d|0,this._e=h+this._e|0,this._f=p+this._f|0,this._g=b+this._g|0,this._h=y+this._h|0},n.prototype._hash=function(){var e=h.allocUnsafe(32);return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e.writeInt32BE(this._h,28),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=m,p.call(this,128,112)}function i(e,t,r){return r^e&(t^r)}function u(e,t,r){return e&t|r&(e|t)}function a(e,t){return(e>>>28|t<<4)^(t>>>2|e<<30)^(t>>>7|e<<25)}function o(e,t){return(e>>>14|t<<18)^(e>>>18|t<<14)^(t>>>9|e<<23)}function d(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^e>>>7}function f(e,t){return(e>>>1|t<<31)^(e>>>8|t<<24)^(e>>>7|t<<25)}function s(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^e>>>6}function c(e,t){return(e>>>19|t<<13)^(t>>>29|e<<3)^(e>>>6|t<<26)}function h(e,t){return e>>>0<t>>>0?1:0}var l=r(1),p=r(14),b=r(2).Buffer,y=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],m=new Array(160);l(n,p),n.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._ah,n=0|this._bh,l=0|this._ch,p=0|this._dh,b=0|this._eh,m=0|this._fh,g=0|this._gh,v=0|this._hh,_=0|this._al,w=0|this._bl,S=0|this._cl,E=0|this._dl,A=0|this._el,x=0|this._fl,k=0|this._gl,M=0|this._hl,I=0;I<32;I+=2)t[I]=e.readInt32BE(4*I),t[I+1]=e.readInt32BE(4*I+4);for(;I<160;I+=2){var T=t[I-30],B=t[I-30+1],C=d(T,B),P=f(B,T);T=t[I-4],B=t[I-4+1];var O=s(T,B),R=c(B,T),j=t[I-14],U=t[I-14+1],L=t[I-32],N=t[I-32+1],D=P+U|0,z=C+j+h(D,P)|0;z=(z=z+O+h(D=D+R|0,R)|0)+L+h(D=D+N|0,N)|0,t[I]=z,t[I+1]=D}for(var F=0;F<160;F+=2){z=t[F],D=t[F+1];var q=u(r,n,l),K=u(_,w,S),Y=a(r,_),H=a(_,r),J=o(b,A),G=o(A,b),V=y[F],X=y[F+1],W=i(b,m,g),Z=i(A,x,k),$=M+G|0,Q=v+J+h($,M)|0;Q=(Q=(Q=Q+W+h($=$+Z|0,Z)|0)+V+h($=$+X|0,X)|0)+z+h($=$+D|0,D)|0;var ee=H+K|0,te=Y+q+h(ee,H)|0;v=g,M=k,g=m,k=x,m=b,x=A,b=p+Q+h(A=E+$|0,E)|0,p=l,E=S,l=n,S=w,n=r,w=_,r=Q+te+h(_=$+ee|0,$)|0}this._al=this._al+_|0,this._bl=this._bl+w|0,this._cl=this._cl+S|0,this._dl=this._dl+E|0,this._el=this._el+A|0,this._fl=this._fl+x|0,this._gl=this._gl+k|0,this._hl=this._hl+M|0,this._ah=this._ah+r+h(this._al,_)|0,this._bh=this._bh+n+h(this._bl,w)|0,this._ch=this._ch+l+h(this._cl,S)|0,this._dh=this._dh+p+h(this._dl,E)|0,this._eh=this._eh+b+h(this._el,A)|0,this._fh=this._fh+m+h(this._fl,x)|0,this._gh=this._gh+g+h(this._gl,k)|0,this._hh=this._hh+v+h(this._hl,M)|0},n.prototype._hash=function(){function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}var t=b.allocUnsafe(64);return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),e(this._gh,this._gl,48),e(this._hh,this._hl,56),t},e.exports=n},function(e,t,r){"use strict";function n(e,t){a.call(this,"digest"),"string"==typeof t&&(t=o.from(t));var r="sha512"===e||"sha384"===e?128:64;this._alg=e,this._key=t,t.length>r?t=("rmd160"===e?new f:s(e)).update(t).digest():t.length<r&&(t=o.concat([t,c],r));for(var n=this._ipad=o.allocUnsafe(r),i=this._opad=o.allocUnsafe(r),u=0;u<r;u++)n[u]=54^t[u],i[u]=92^t[u];this._hash="rmd160"===e?new f:s(e),this._hash.update(n)}var i=r(1),u=r(124),a=r(10),o=r(2).Buffer,d=r(36),f=r(37),s=r(42),c=o.alloc(128);i(n,a),n.prototype._update=function(e){this._hash.update(e)},n.prototype._final=function(){var e=this._hash.digest();return("rmd160"===this._alg?new f:s(this._alg)).update(this._opad).update(e).digest()},e.exports=function(e,t){return"rmd160"===(e=e.toLowerCase())||"ripemd160"===e?new n("rmd160",t):"md5"===e?new u(d,t):new n(e,t)}},function(e,t){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},function(e,t,r){t.pbkdf2=r(126),t.pbkdf2Sync=r(64)},function(e,t){var r=Math.pow(2,30)-1;e.exports=function(e,t){if("number"!=typeof e)throw new TypeError("Iterations not a number");if(e<0)throw new TypeError("Bad iterations");if("number"!=typeof t)throw new TypeError("Key length not a number");if(t<0||t>r||t!=t)throw new TypeError("Bad key length")}},function(e,t,r){(function(t){var r;r=t.browser?"utf-8":parseInt(t.version.split(".")[0].slice(1),10)>=6?"utf-8":"binary",e.exports=r}).call(t,r(6))},function(e,t,r){function n(e,t,r){var n=i(e),u="sha512"===e||"sha384"===e?128:64;t.length>u?t=n(t):t.length<u&&(t=s.concat([t,c],u));for(var a=s.allocUnsafe(u+h[e]),o=s.allocUnsafe(u+h[e]),d=0;d<u;d++)a[d]=54^t[d],o[d]=92^t[d];var f=s.allocUnsafe(u+r+4);a.copy(f,0,0,u),this.ipad1=f,this.ipad2=a,this.opad=o,this.alg=e,this.blocksize=u,this.hash=n,this.size=h[e]}function i(e){return"rmd160"===e||"ripemd160"===e?a:"md5"===e?u:function(t){return o(e).update(t).digest()}}var u=r(36),a=r(37),o=r(42),d=r(62),f=r(63),s=r(2).Buffer,c=s.alloc(128),h={md5:16,sha1:20,sha224:28,sha256:32,sha384:48,sha512:64,rmd160:20,ripemd160:20};n.prototype.run=function(e,t){return e.copy(t,this.blocksize),this.hash(t).copy(this.opad,this.blocksize),this.hash(this.opad)},e.exports=function(e,t,r,i,u){s.isBuffer(e)||(e=s.from(e,f)),s.isBuffer(t)||(t=s.from(t,f)),d(r,i);var a=new n(u=u||"sha1",e,t.length),o=s.allocUnsafe(i),c=s.allocUnsafe(t.length+4);t.copy(c,0,0,t.length);for(var l=0,p=h[u],b=Math.ceil(i/p),y=1;y<=b;y++){c.writeUInt32BE(y,t.length);for(var m=a.run(c,a.ipad1),g=m,v=1;v<r;v++){g=a.run(g,a.ipad2);for(var _=0;_<p;_++)m[_]^=g[_]}m.copy(o,l),l+=p}return o}},function(e,t,r){function n(e){var t=e._cipher.encryptBlockRaw(e._prev);return a(e._prev),t}var i=r(20),u=r(2).Buffer,a=r(66);t.encrypt=function(e,t){var r=Math.ceil(t.length/16),a=e._cache.length;e._cache=u.concat([e._cache,u.allocUnsafe(16*r)]);for(var o=0;o<r;o++){var d=n(e),f=a+16*o;e._cache.writeUInt32BE(d[0],f+0),e._cache.writeUInt32BE(d[1],f+4),e._cache.writeUInt32BE(d[2],f+8),e._cache.writeUInt32BE(d[3],f+12)}var s=e._cache.slice(0,t.length);return e._cache=e._cache.slice(t.length),i(t,s)}},function(e,t){e.exports=function(e){for(var t,r=e.length;r--;){if(255!==(t=e.readUInt8(r))){t++,e.writeUInt8(t,r);break}e.writeUInt8(0,r)}}},function(e,t){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}},function(e,t,r){function n(e,t,r,n){a.call(this);var o=u.alloc(4,0);this._cipher=new i.AES(t);var f=this._cipher.encryptBlock(o);this._ghash=new d(f),r=function(e,t,r){if(12===t.length)return e._finID=u.concat([t,u.from([0,0,0,1])]),u.concat([t,u.from([0,0,0,2])]);var n=new d(r),i=t.length,a=i%16;n.update(t),a&&(a=16-a,n.update(u.alloc(a,0))),n.update(u.alloc(8,0));var o=8*i,f=u.alloc(8);f.writeUIntBE(o,0,8),n.update(f),e._finID=n.state;var c=u.from(e._finID);return s(c),c}(this,r,f),this._prev=u.from(r),this._cache=u.allocUnsafe(0),this._secCache=u.allocUnsafe(0),this._decrypt=n,this._alen=0,this._len=0,this._mode=e,this._authTag=null,this._called=!1}var i=r(28),u=r(2).Buffer,a=r(10),o=r(1),d=r(137),f=r(20),s=r(66);o(n,a),n.prototype._update=function(e){if(!this._called&&this._alen){var t=16-this._alen%16;t<16&&(t=u.alloc(t,0),this._ghash.update(t))}this._called=!0;var r=this._mode.encrypt(this,e);return this._decrypt?this._ghash.update(e):this._ghash.update(r),this._len+=e.length,r},n.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var e=f(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt&&function(e,t){var r=0;e.length!==t.length&&r++;for(var n=Math.min(e.length,t.length),i=0;i<n;++i)r+=e[i]^t[i];return r}(e,this._authTag))throw new Error("Unsupported state or unable to authenticate data");this._authTag=e,this._cipher.scrub()},n.prototype.getAuthTag=function(){if(this._decrypt||!u.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");return this._authTag},n.prototype.setAuthTag=function(e){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=e},n.prototype.setAAD=function(e){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(e),this._alen+=e.length},e.exports=n},function(e,t,r){function n(e,t,r,n){a.call(this),this._cipher=new i.AES(t),this._prev=u.from(r),this._cache=u.allocUnsafe(0),this._secCache=u.allocUnsafe(0),this._decrypt=n,this._mode=e}var i=r(28),u=r(2).Buffer,a=r(10);r(1)(n,a),n.prototype._update=function(e){return this._mode.encrypt(this,e,this._decrypt)},n.prototype._final=function(){this._cipher.scrub()},e.exports=n},function(e,t,r){function n(e){for(var t=function(){if(null!==g)return g;var e=[];e[0]=2;for(var t=1,r=3;r<1048576;r+=2){for(var n=Math.ceil(Math.sqrt(r)),i=0;i<t&&e[i]<=n&&r%e[i]!=0;i++);t!==i&&e[i]<=n||(e[t++]=r)}return g=e,e}(),r=0;r<t.length;r++)if(0===e.modn(t[r]))return 0===e.cmpn(t[r]);return!0}function i(e){var t=o.mont(e);return 0===h.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)}function u(e,t){if(e<16)return new o(2===t||5===t?[140,123]:[140,39]);t=new o(t);for(var r,u;;){for(r=new o(a(Math.ceil(e/8)));r.bitLength()>e;)r.ishrn(1);if(r.isEven()&&r.iadd(c),r.testn(1)||r.iadd(h),t.cmp(h)){if(!t.cmp(l))for(;r.mod(p).cmp(b);)r.iadd(m)}else for(;r.mod(d).cmp(y);)r.iadd(m);if(n(u=r.shrn(1))&&n(r)&&i(u)&&i(r)&&s.test(u)&&s.test(r))return r}}var a=r(13);e.exports=u,u.simpleSieve=n,u.fermatTest=i;var o=r(3),d=new o(24),f=r(71),s=new f,c=new o(1),h=new o(2),l=new o(5),p=(new o(16),new o(8),new o(10)),b=new o(3),y=(new o(7),new o(11)),m=new o(4),g=(new o(12),null)},function(e,t,r){function n(e){this.rand=e||new u.Rand}var i=r(3),u=r(72);e.exports=n,n.create=function(e){return new n(e)},n.prototype._randbelow=function(e){var t=e.bitLength(),r=Math.ceil(t/8);do{var n=new i(this.rand.generate(r))}while(n.cmp(e)>=0);return n},n.prototype._randrange=function(e,t){var r=t.sub(e);return e.add(this._randbelow(r))},n.prototype.test=function(e,t,r){var n=e.bitLength(),u=i.mont(e),a=new i(1).toRed(u);t||(t=Math.max(1,n/48|0));for(var o=e.subn(1),d=0;!o.testn(d);d++);for(var f=e.shrn(d),s=o.toRed(u);t>0;t--){var c=this._randrange(new i(2),o);r&&r(c);var h=c.toRed(u).redPow(f);if(0!==h.cmp(a)&&0!==h.cmp(s)){for(var l=1;l<d;l++){if(0===(h=h.redSqr()).cmp(a))return!1;if(0===h.cmp(s))break}if(l===d)return!1}}return!0},n.prototype.getDivisor=function(e,t){var r=e.bitLength(),n=i.mont(e),u=new i(1).toRed(n);t||(t=Math.max(1,r/48|0));for(var a=e.subn(1),o=0;!a.testn(o);o++);for(var d=e.shrn(o),f=a.toRed(n);t>0;t--){var s=this._randrange(new i(2),a),c=e.gcd(s);if(0!==c.cmpn(1))return c;var h=s.toRed(n).redPow(d);if(0!==h.cmp(u)&&0!==h.cmp(f)){for(var l=1;l<o;l++){if(0===(h=h.redSqr()).cmp(u))return h.fromRed().subn(1).gcd(e);if(0===h.cmp(f))break}if(l===o)return(h=h.redSqr()).fromRed().subn(1).gcd(e)}}return!1}},function(e,t,r){function n(e){this.rand=e}var i;if(e.exports=function(e){return i||(i=new n(null)),i.generate(e)},e.exports.Rand=n,n.prototype.generate=function(e){return this._rand(e)},n.prototype._rand=function(e){if(this.rand.getBytes)return this.rand.getBytes(e);for(var t=new Uint8Array(e),r=0;r<t.length;r++)t[r]=this.rand.getByte();return t},"object"==typeof self)self.crypto&&self.crypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.crypto.getRandomValues(t),t}:self.msCrypto&&self.msCrypto.getRandomValues?n.prototype._rand=function(e){var t=new Uint8Array(e);return self.msCrypto.getRandomValues(t),t}:"object"==typeof window&&(n.prototype._rand=function(){throw new Error("Not implemented yet")});else try{var u=r(147);if("function"!=typeof u.randomBytes)throw new Error("Not supported");n.prototype._rand=function(e){return u.randomBytes(e)}}catch(e){}},function(e,t,r){"use strict";function n(e){return 1===e.length?"0"+e:e}function i(e){for(var t="",r=0;r<e.length;r++)t+=n(e[r].toString(16));return t}var u=t;u.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var n=0;n<e.length;n++)r[n]=0|e[n];return r}if("hex"===t){(e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e);for(var n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var n=0;n<e.length;n++){var i=e.charCodeAt(n),u=i>>8,a=255&i;u?r.push(u,a):r.push(a)}return r},u.zero2=n,u.toHex=i,u.encode=function(e,t){return"hex"===t?i(e):e}},function(e,t,r){"use strict";function n(e,t,r){return e&t^~e&r}function i(e,t,r){return e&t^e&r^t&r}function u(e,t,r){return e^t^r}var a=r(7),o=a.rotr32;t.ft_1=function(e,t,r,a){return 0===e?n(t,r,a):1===e||3===e?u(t,r,a):2===e?i(t,r,a):void 0},t.ch32=n,t.maj32=i,t.p32=u,t.s0_256=function(e){return o(e,2)^o(e,13)^o(e,22)},t.s1_256=function(e){return o(e,6)^o(e,11)^o(e,25)},t.g0_256=function(e){return o(e,7)^o(e,18)^e>>>3},t.g1_256=function(e){return o(e,17)^o(e,19)^e>>>10}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;m.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=g,this.W=new Array(64)}var i=r(7),u=r(21),a=r(74),o=r(5),d=i.sum32,f=i.sum32_4,s=i.sum32_5,c=a.ch32,h=a.maj32,l=a.s0_256,p=a.s1_256,b=a.g0_256,y=a.g1_256,m=u.BlockHash,g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];i.inherits(n,m),e.exports=n,n.blockSize=512,n.outSize=256,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=f(y(r[n-2]),r[n-7],b(r[n-15]),r[n-16]);var i=this.h[0],u=this.h[1],a=this.h[2],m=this.h[3],g=this.h[4],v=this.h[5],_=this.h[6],w=this.h[7];for(o(this.k.length===r.length),n=0;n<r.length;n++){var S=s(w,p(g),c(g,v,_),this.k[n],r[n]),E=d(l(i),h(i,u,a));w=_,_=v,v=g,g=d(m,S),m=a,a=u,u=i,i=d(S,E)}this.h[0]=d(this.h[0],i),this.h[1]=d(this.h[1],u),this.h[2]=d(this.h[2],a),this.h[3]=d(this.h[3],m),this.h[4]=d(this.h[4],g),this.h[5]=d(this.h[5],v),this.h[6]=d(this.h[6],_),this.h[7]=d(this.h[7],w)},n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;B.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=C,this.W=new Array(160)}function i(e,t,r,n,i){var u=e&r^~e&i;return u<0&&(u+=4294967296),u}function u(e,t,r,n,i,u){var a=t&n^~t&u;return a<0&&(a+=4294967296),a}function a(e,t,r,n,i){var u=e&r^e&i^r&i;return u<0&&(u+=4294967296),u}function o(e,t,r,n,i,u){var a=t&n^t&u^n&u;return a<0&&(a+=4294967296),a}function d(e,t){var r=v(e,t,28),n=v(t,e,2),i=v(t,e,7),u=r^n^i;return u<0&&(u+=4294967296),u}function f(e,t){var r=_(e,t,28),n=_(t,e,2),i=_(t,e,7),u=r^n^i;return u<0&&(u+=4294967296),u}function s(e,t){var r=v(e,t,14),n=v(e,t,18),i=v(t,e,9),u=r^n^i;return u<0&&(u+=4294967296),u}function c(e,t){var r=_(e,t,14),n=_(e,t,18),i=_(t,e,9),u=r^n^i;return u<0&&(u+=4294967296),u}function h(e,t){var r=v(e,t,1),n=v(e,t,8),i=w(e,t,7),u=r^n^i;return u<0&&(u+=4294967296),u}function l(e,t){var r=_(e,t,1),n=_(e,t,8),i=S(e,t,7),u=r^n^i;return u<0&&(u+=4294967296),u}function p(e,t){var r=v(e,t,19),n=v(t,e,29),i=w(e,t,6),u=r^n^i;return u<0&&(u+=4294967296),u}function b(e,t){var r=_(e,t,19),n=_(t,e,29),i=S(e,t,6),u=r^n^i;return u<0&&(u+=4294967296),u}var y=r(7),m=r(21),g=r(5),v=y.rotr64_hi,_=y.rotr64_lo,w=y.shr64_hi,S=y.shr64_lo,E=y.sum64,A=y.sum64_hi,x=y.sum64_lo,k=y.sum64_4_hi,M=y.sum64_4_lo,I=y.sum64_5_hi,T=y.sum64_5_lo,B=m.BlockHash,C=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];y.inherits(n,B),e.exports=n,n.blockSize=1024,n.outSize=512,n.hmacStrength=192,n.padLength=128,n.prototype._prepareBlock=function(e,t){for(var r=this.W,n=0;n<32;n++)r[n]=e[t+n];for(;n<r.length;n+=2){var i=p(r[n-4],r[n-3]),u=b(r[n-4],r[n-3]),a=r[n-14],o=r[n-13],d=h(r[n-30],r[n-29]),f=l(r[n-30],r[n-29]),s=r[n-32],c=r[n-31];r[n]=k(i,u,a,o,d,f,s,c),r[n+1]=M(i,u,a,o,d,f,s,c)}},n.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,n=this.h[0],h=this.h[1],l=this.h[2],p=this.h[3],b=this.h[4],y=this.h[5],m=this.h[6],v=this.h[7],_=this.h[8],w=this.h[9],S=this.h[10],k=this.h[11],M=this.h[12],B=this.h[13],C=this.h[14],P=this.h[15];g(this.k.length===r.length);for(var O=0;O<r.length;O+=2){var R=C,j=P,U=s(_,w),L=c(_,w),N=i(_,0,S,0,M),D=u(0,w,0,k,0,B),z=this.k[O],F=this.k[O+1],q=r[O],K=r[O+1],Y=I(R,j,U,L,N,D,z,F,q,K),H=T(R,j,U,L,N,D,z,F,q,K);R=d(n,h),j=f(n,h),U=a(n,0,l,0,b),L=o(0,h,0,p,0,y);var J=A(R,j,U,L),G=x(R,j,U,L);C=M,P=B,M=S,B=k,S=_,k=w,_=A(m,v,Y,H),w=x(v,v,Y,H),m=b,v=y,b=l,y=p,l=n,p=h,n=A(Y,H,J,G),h=x(Y,H,J,G)}E(this.h,0,n,h),E(this.h,2,l,p),E(this.h,4,b,y),E(this.h,6,m,v),E(this.h,8,_,w),E(this.h,10,S,k),E(this.h,12,M,B),E(this.h,14,C,P)},n.prototype._digest=function(e){return"hex"===e?y.toHex32(this.h,"big"):y.split32(this.h,"big")}},function(e,t){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},function(e,t,r){(function(t){function n(e){var r=new t(4);return r.writeUInt32BE(e,0),r}var i=r(18);e.exports=function(e,r){for(var u,a=new t(""),o=0;a.length<r;)u=n(o++),a=t.concat([a,i("sha1").update(e).update(u).digest()]);return a.slice(0,r)}}).call(t,r(0).Buffer)},function(e,t){e.exports=function(e,t){for(var r=e.length,n=-1;++n<r;)e[n]^=t[n];return e}},function(e,t,r){(function(t){var n=r(3);e.exports=function(e,r){return new t(e.toRed(n.mont(r.modulus)).redPow(new n(r.publicExponent)).fromRed().toArray())}}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(8),u=i.define("RsaPublicKey",function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())}),a=i.define("RsaPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int(),this.optional().key("otherPrimeInfos").seqof(this.obj(this.key("prime").int(),this.key("exponent").int(),this.key("coefficient").int())))}),o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"modulusToPem",value:function(e){if(0===e[0])throw new Error("Modulus may not start with zero");return 128&e[0]&&(e=t.concat([t.from([0]),e])),"-----BEGIN RSA PUBLIC KEY-----\n"+u.encode({modulus:e,publicExponent:65537}).toString("base64").match(/.{1,64}/g).join("\n")+"\n-----END RSA PUBLIC KEY-----\n"}},{key:"modulusFromPrivateKey",value:function(e){var r=e.replace("-----BEGIN RSA PRIVATE KEY-----","").replace("-----END RSA PRIVATE KEY-----","").replace(/\s+|\n\r|\n|\r$/gm,""),n=t.from(r,"base64");return a.decode(n).modulus.toArrayLike(t)}}]),e}();e.exports=o}).call(t,r(0).Buffer)},function(e,t,r){"use strict";var n=r(15),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(n);e.exports=i},function(e,t){function r(e){throw new Error("Cannot find module '"+e+"'.")}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=83},function(e,t,r){e.exports=r(85)},function(e,t,r){"use strict";(function(t){var n=r(22),i=r(23),u=r(32),a=r(107),o=r(183),d=r(184),f=r(185),s=r(190),c=r(33),h=t.alloc(0);u.registerType(a),u.registerType(o),u.registerType(d),u.registerType(f),u.registerType(s),e.exports={Condition:n,Fulfillment:i,TypeRegistry:u,PreimageSha256:a,RsaSha256:f,PrefixSha256:o,ThresholdSha256:d,Ed25519Sha256:s,validateCondition:function(e){return n.fromUri(e).validate()},validateFulfillment:function(e,r,n){if(void 0===n&&(n=h),!t.isBuffer(n))throw new Error("Message must be provided as a Buffer");var u=i.fromUri(e),a=u.getConditionUri();if(a!==r)throw new Error("Fulfillment does not match condition (expected: "+r+", actual: "+a+")");return u.validate(n)},fulfillmentToCondition:function(e){return i.fromUri(e).getConditionUri()},fromJson:function(e){return i.fromJson(e)},base64url:c,fromConditionUri:n.fromUri.bind(n),fromConditionBinary:n.fromBinary.bind(n),fromFulfillmentUri:i.fromUri.bind(i),fromFulfillmentBinary:i.fromBinary.bind(i)}}).call(t,r(0).Buffer)},function(e,t,r){"use strict";function n(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===e[t-2]?2:"="===e[t-1]?1:0}function i(e){return a[e>>18&63]+a[e>>12&63]+a[e>>6&63]+a[63&e]}function u(e,t,r){for(var n,u=[],a=t;a<r;a+=3)n=(e[a]<<16)+(e[a+1]<<8)+e[a+2],u.push(i(n));return u.join("")}t.byteLength=function(e){return 3*e.length/4-n(e)},t.toByteArray=function(e){var t,r,i,u,a,f=e.length;u=n(e),a=new d(3*f/4-u),r=u>0?f-4:f;var s=0;for(t=0;t<r;t+=4)i=o[e.charCodeAt(t)]<<18|o[e.charCodeAt(t+1)]<<12|o[e.charCodeAt(t+2)]<<6|o[e.charCodeAt(t+3)],a[s++]=i>>16&255,a[s++]=i>>8&255,a[s++]=255&i;return 2===u?(i=o[e.charCodeAt(t)]<<2|o[e.charCodeAt(t+1)]>>4,a[s++]=255&i):1===u&&(i=o[e.charCodeAt(t)]<<10|o[e.charCodeAt(t+1)]<<4|o[e.charCodeAt(t+2)]>>2,a[s++]=i>>8&255,a[s++]=255&i),a},t.fromByteArray=function(e){for(var t,r=e.length,n=r%3,i="",o=[],d=0,f=r-n;d<f;d+=16383)o.push(u(e,d,d+16383>f?f:d+16383));return 1===n?(t=e[r-1],i+=a[t>>2],i+=a[t<<4&63],i+="=="):2===n&&(t=(e[r-2]<<8)+e[r-1],i+=a[t>>10],i+=a[t>>4&63],i+=a[t<<2&63],i+="="),o.push(i),o.join("")};for(var a=[],o=[],d="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,c=f.length;s<c;++s)a[s]=f[s],o[f.charCodeAt(s)]=s;o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,r,n,i){var u,a,o=8*i-n-1,d=(1<<o)-1,f=d>>1,s=-7,c=r?i-1:0,h=r?-1:1,l=e[t+c];for(c+=h,u=l&(1<<-s)-1,l>>=-s,s+=o;s>0;u=256*u+e[t+c],c+=h,s-=8);for(a=u&(1<<-s)-1,u>>=-s,s+=n;s>0;a=256*a+e[t+c],c+=h,s-=8);if(0===u)u=1-f;else{if(u===d)return a?NaN:1/0*(l?-1:1);a+=Math.pow(2,n),u-=f}return(l?-1:1)*a*Math.pow(2,u-n)},t.write=function(e,t,r,n,i,u){var a,o,d,f=8*u-i-1,s=(1<<f)-1,c=s>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:u-1,p=n?1:-1,b=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,a=s):(a=Math.floor(Math.log(t)/Math.LN2),t*(d=Math.pow(2,-a))<1&&(a--,d*=2),(t+=a+c>=1?h/d:h*Math.pow(2,1-c))*d>=2&&(a++,d/=2),a+c>=s?(o=0,a=s):a+c>=1?(o=(t*d-1)*Math.pow(2,i),a+=c):(o=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;e[r+l]=255&o,l+=p,o/=256,i-=8);for(a=a<<i|o,f+=i;f>0;e[r+l]=255&a,l+=p,a/=256,f-=8);e[r+l-p]|=128*b}},function(e,t,r){"use strict";t.decode=t.parse=r(89),t.encode=t.stringify=r(90)},function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,u){t=t||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var o=/\+/g;e=e.split(t);var d=1e3;u&&"number"==typeof u.maxKeys&&(d=u.maxKeys);var f=e.length;d>0&&f>d&&(f=d);for(var s=0;s<f;++s){var c,h,l,p,b=e[s].replace(o,"%20"),y=b.indexOf(r);y>=0?(c=b.substr(0,y),h=b.substr(y+1)):(c=b,h=""),l=decodeURIComponent(c),p=decodeURIComponent(h),n(a,l)?i(a[l])?a[l].push(p):a[l]=[a[l],p]:a[l]=p}return a};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,o){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?n(a(e),function(a){var o=encodeURIComponent(i(a))+r;return u(e[a])?n(e[a],function(e){return o+encodeURIComponent(i(e))}).join(t):o+encodeURIComponent(i(e[a]))}).join(t):o?encodeURIComponent(i(o))+r+encodeURIComponent(i(e)):""};var u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},a=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},function(e,t,r){"use strict";var n=r(15),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(n);e.exports=i},function(e,t,r){"use strict";var n=r(15),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(n);e.exports=i},function(e,t,r){"use strict";var n=r(15),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(n);e.exports=i},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){},function(e,t,r){function n(e,t){this.name=e,this.body=t,this.decoders={},this.encoders={}}var i=r(8),u=r(1);t.define=function(e,t){return new n(e,t)},n.prototype._createNamed=function(e){var t;try{t=r(97).runInThisContext("(function "+this.name+"(entity) {\n  this._initNamed(entity);\n})")}catch(e){t=function(e){this._initNamed(e)}}return u(t,e),t.prototype._initNamed=function(t){e.call(this,t)},new t(this)},n.prototype._getDecoder=function(e){return e=e||"der",this.decoders.hasOwnProperty(e)||(this.decoders[e]=this._createNamed(i.decoders[e])),this.decoders[e]},n.prototype.decode=function(e,t,r){return this._getDecoder(t).decode(e,r)},n.prototype._getEncoder=function(e){return e=e||"der",this.encoders.hasOwnProperty(e)||(this.encoders[e]=this._createNamed(i.encoders[e])),this.encoders[e]},n.prototype.encode=function(e,t,r){return this._getEncoder(t).encode(e,r)}},function(module,exports,__webpack_require__){function Context(){}var indexOf=__webpack_require__(98),Object_keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var r in e)t.push(r);return t},forEach=function(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(e,t,r){Object.defineProperty(e,t,{writable:!0,enumerable:!1,configurable:!0,value:r})}}catch(e){return function(e,t,r){e[t]=r}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];Context.prototype={};var Script=exports.Script=function(e){if(!(this instanceof Script))return new Script(e);this.code=e};Script.prototype.runInContext=function(e){if(!(e instanceof Context))throw new TypeError("needs a 'context' argument.");var t=document.createElement("iframe");t.style||(t.style={}),t.style.display="none",document.body.appendChild(t);var r=t.contentWindow,n=r.eval,i=r.execScript;!n&&i&&(i.call(r,"null"),n=r.eval),forEach(Object_keys(e),function(t){r[t]=e[t]}),forEach(globals,function(t){e[t]&&(r[t]=e[t])});var u=Object_keys(r),a=n.call(r,this.code);return forEach(Object_keys(r),function(t){(t in e||-1===indexOf(u,t))&&(e[t]=r[t])}),forEach(globals,function(t){t in e||defineProp(e,t,r[t])}),document.body.removeChild(t),a},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(e){var t=Script.createContext(e),r=this.runInContext(t);return forEach(Object_keys(t),function(r){e[r]=t[r]}),r},forEach(Object_keys(Script.prototype),function(e){exports[e]=Script[e]=function(t){var r=Script(t);return r[e].apply(r,[].slice.call(arguments,1))}}),exports.createScript=function(e){return exports.Script(e)},exports.createContext=Script.createContext=function(e){var t=new Context;return"object"==typeof e&&forEach(Object_keys(e),function(r){t[r]=e[r]}),t}},function(e,t){var r=[].indexOf;e.exports=function(e,t){if(r)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return-1}},function(e,t,r){function n(e){this._reporterState={obj:null,path:[],options:e||{},errors:[]}}function i(e,t){this.path=e,this.rethrow(t)}var u=r(1);t.Reporter=n,n.prototype.isError=function(e){return e instanceof i},n.prototype.save=function(){var e=this._reporterState;return{obj:e.obj,pathLen:e.path.length}},n.prototype.restore=function(e){var t=this._reporterState;t.obj=e.obj,t.path=t.path.slice(0,e.pathLen)},n.prototype.enterKey=function(e){return this._reporterState.path.push(e)},n.prototype.exitKey=function(e){var t=this._reporterState;t.path=t.path.slice(0,e-1)},n.prototype.leaveKey=function(e,t,r){var n=this._reporterState;this.exitKey(e),null!==n.obj&&(n.obj[t]=r)},n.prototype.path=function(){return this._reporterState.path.join("/")},n.prototype.enterObject=function(){var e=this._reporterState,t=e.obj;return e.obj={},t},n.prototype.leaveObject=function(e){var t=this._reporterState,r=t.obj;return t.obj=e,r},n.prototype.error=function(e){var t,r=this._reporterState,n=e instanceof i;if(t=n?e:new i(r.path.map(function(e){return"["+JSON.stringify(e)+"]"}).join(""),e.message||e,e.stack),!r.options.partial)throw t;return n||r.errors.push(t),t},n.prototype.wrapResult=function(e){var t=this._reporterState;return t.options.partial?{result:this.isError(e)?null:e,errors:t.errors}:e},u(i,Error),i.prototype.rethrow=function(e){if(this.message=e+" at: "+(this.path||"(shallow)"),Error.captureStackTrace&&Error.captureStackTrace(this,i),!this.stack)try{throw new Error(this.message)}catch(e){this.stack=e.stack}return this}},function(e,t,r){function n(e,t){var r={};this._baseState=r,r.enc=e,r.parent=t||null,r.children=null,r.tag=null,r.args=null,r.reverseArgs=null,r.choice=null,r.optional=!1,r.any=!1,r.obj=!1,r.use=null,r.useDecoder=null,r.key=null,r.default=null,r.explicit=null,r.implicit=null,r.contains=null,r.parent||(r.children=[],this._wrap())}var i=r(16).Reporter,u=r(16).EncoderBuffer,a=r(16).DecoderBuffer,o=r(5),d=["seq","seqof","set","setof","objid","bool","gentime","utctime","null_","enum","int","objDesc","bitstr","bmpstr","charstr","genstr","graphstr","ia5str","iso646str","numstr","octstr","printstr","t61str","unistr","utf8str","videostr"],f=["key","obj","use","optional","explicit","implicit","def","choice","any","contains"].concat(d);e.exports=n;var s=["enc","parent","children","tag","args","reverseArgs","choice","optional","any","obj","use","alteredUse","key","default","explicit","implicit","contains"];n.prototype.clone=function(){var e=this._baseState,t={};s.forEach(function(r){t[r]=e[r]});var r=new this.constructor(t.parent);return r._baseState=t,r},n.prototype._wrap=function(){var e=this._baseState;f.forEach(function(t){this[t]=function(){var r=new this.constructor(this);return e.children.push(r),r[t].apply(r,arguments)}},this)},n.prototype._init=function(e){var t=this._baseState;o(null===t.parent),e.call(this),t.children=t.children.filter(function(e){return e._baseState.parent===this},this),o.equal(t.children.length,1,"Root node can have only one child")},n.prototype._useArgs=function(e){var t=this._baseState,r=e.filter(function(e){return e instanceof this.constructor},this);e=e.filter(function(e){return!(e instanceof this.constructor)},this),0!==r.length&&(o(null===t.children),t.children=r,r.forEach(function(e){e._baseState.parent=this},this)),0!==e.length&&(o(null===t.args),t.args=e,t.reverseArgs=e.map(function(e){if("object"!=typeof e||e.constructor!==Object)return e;var t={};return Object.keys(e).forEach(function(r){r==(0|r)&&(r|=0);var n=e[r];t[n]=r}),t}))},["_peekTag","_decodeTag","_use","_decodeStr","_decodeObjid","_decodeTime","_decodeNull","_decodeInt","_decodeBool","_decodeList","_encodeComposite","_encodeStr","_encodeObjid","_encodeTime","_encodeNull","_encodeInt","_encodeBool"].forEach(function(e){n.prototype[e]=function(){var t=this._baseState;throw new Error(e+" not implemented for encoding: "+t.enc)}}),d.forEach(function(e){n.prototype[e]=function(){var t=this._baseState,r=Array.prototype.slice.call(arguments);return o(null===t.tag),t.tag=e,this._useArgs(r),this}}),n.prototype.use=function(e){o(e);var t=this._baseState;return o(null===t.use),t.use=e,this},n.prototype.optional=function(){return this._baseState.optional=!0,this},n.prototype.def=function(e){var t=this._baseState;return o(null===t.default),t.default=e,t.optional=!0,this},n.prototype.explicit=function(e){var t=this._baseState;return o(null===t.explicit&&null===t.implicit),t.explicit=e,this},n.prototype.implicit=function(e){var t=this._baseState;return o(null===t.explicit&&null===t.implicit),t.implicit=e,this},n.prototype.obj=function(){var e=this._baseState,t=Array.prototype.slice.call(arguments);return e.obj=!0,0!==t.length&&this._useArgs(t),this},n.prototype.key=function(e){var t=this._baseState;return o(null===t.key),t.key=e,this},n.prototype.any=function(){return this._baseState.any=!0,this},n.prototype.choice=function(e){var t=this._baseState;return o(null===t.choice),t.choice=e,this._useArgs(Object.keys(e).map(function(t){return e[t]})),this},n.prototype.contains=function(e){var t=this._baseState;return o(null===t.use),t.contains=e,this},n.prototype._decode=function(e,t){var r=this._baseState;if(null===r.parent)return e.wrapResult(r.children[0]._decode(e,t));var n,i=r.default,u=!0,o=null;if(null!==r.key&&(o=e.enterKey(r.key)),r.optional){var d=null;if(null!==r.explicit?d=r.explicit:null!==r.implicit?d=r.implicit:null!==r.tag&&(d=r.tag),null!==d||r.any){if(u=this._peekTag(e,d,r.any),e.isError(u))return u}else{var f=e.save();try{null===r.choice?this._decodeGeneric(r.tag,e,t):this._decodeChoice(e,t),u=!0}catch(e){u=!1}e.restore(f)}}if(r.obj&&u&&(n=e.enterObject()),u){if(null!==r.explicit){var s=this._decodeTag(e,r.explicit);if(e.isError(s))return s;e=s}var c=e.offset;if(null===r.use&&null===r.choice){if(r.any)var f=e.save();var h=this._decodeTag(e,null!==r.implicit?r.implicit:r.tag,r.any);if(e.isError(h))return h;r.any?i=e.raw(f):e=h}if(t&&t.track&&null!==r.tag&&t.track(e.path(),c,e.length,"tagged"),t&&t.track&&null!==r.tag&&t.track(e.path(),e.offset,e.length,"content"),i=r.any?i:null===r.choice?this._decodeGeneric(r.tag,e,t):this._decodeChoice(e,t),e.isError(i))return i;if(r.any||null!==r.choice||null===r.children||r.children.forEach(function(r){r._decode(e,t)}),r.contains&&("octstr"===r.tag||"bitstr"===r.tag)){var l=new a(i);i=this._getUse(r.contains,e._reporterState.obj)._decode(l,t)}}return r.obj&&u&&(i=e.leaveObject(n)),null===r.key||null===i&&!0!==u?null!==o&&e.exitKey(o):e.leaveKey(o,r.key,i),i},n.prototype._decodeGeneric=function(e,t,r){var n=this._baseState;return"seq"===e||"set"===e?null:"seqof"===e||"setof"===e?this._decodeList(t,e,n.args[0],r):/str$/.test(e)?this._decodeStr(t,e,r):"objid"===e&&n.args?this._decodeObjid(t,n.args[0],n.args[1],r):"objid"===e?this._decodeObjid(t,null,null,r):"gentime"===e||"utctime"===e?this._decodeTime(t,e,r):"null_"===e?this._decodeNull(t,r):"bool"===e?this._decodeBool(t,r):"objDesc"===e?this._decodeStr(t,e,r):"int"===e||"enum"===e?this._decodeInt(t,n.args&&n.args[0],r):null!==n.use?this._getUse(n.use,t._reporterState.obj)._decode(t,r):t.error("unknown tag: "+e)},n.prototype._getUse=function(e,t){var r=this._baseState;return r.useDecoder=this._use(e,t),o(null===r.useDecoder._baseState.parent),r.useDecoder=r.useDecoder._baseState.children[0],r.implicit!==r.useDecoder._baseState.implicit&&(r.useDecoder=r.useDecoder.clone(),r.useDecoder._baseState.implicit=r.implicit),r.useDecoder},n.prototype._decodeChoice=function(e,t){var r=this._baseState,n=null,i=!1;return Object.keys(r.choice).some(function(u){var a=e.save(),o=r.choice[u];try{var d=o._decode(e,t);if(e.isError(d))return!1;n={type:u,value:d},i=!0}catch(t){return e.restore(a),!1}return!0},this),i?n:e.error("Choice not matched")},n.prototype._createEncoderBuffer=function(e){return new u(e,this.reporter)},n.prototype._encode=function(e,t,r){var n=this._baseState;if(null===n.default||n.default!==e){var i=this._encodeValue(e,t,r);if(void 0!==i&&!this._skipDefault(i,t,r))return i}},n.prototype._encodeValue=function(e,t,r){var n=this._baseState;if(null===n.parent)return n.children[0]._encode(e,t||new i);var u=null;if(this.reporter=t,n.optional&&void 0===e){if(null===n.default)return;e=n.default}var a=null,o=!1;if(n.any)u=this._createEncoderBuffer(e);else if(n.choice)u=this._encodeChoice(e,t);else if(n.contains)a=this._getUse(n.contains,r)._encode(e,t),o=!0;else if(n.children)a=n.children.map(function(r){if("null_"===r._baseState.tag)return r._encode(null,t,e);if(null===r._baseState.key)return t.error("Child should have a key");var n=t.enterKey(r._baseState.key);if("object"!=typeof e)return t.error("Child expected, but input is not object");var i=r._encode(e[r._baseState.key],t,e);return t.leaveKey(n),i},this).filter(function(e){return e}),a=this._createEncoderBuffer(a);else if("seqof"===n.tag||"setof"===n.tag){if(!n.args||1!==n.args.length)return t.error("Too many args for : "+n.tag);if(!Array.isArray(e))return t.error("seqof/setof, but data is not Array");var d=this.clone();d._baseState.implicit=null,a=this._createEncoderBuffer(e.map(function(r){var n=this._baseState;return this._getUse(n.args[0],e)._encode(r,t)},d))}else null!==n.use?u=this._getUse(n.use,r)._encode(e,t):(a=this._encodePrimitive(n.tag,e),o=!0);if(!n.any&&null===n.choice){var f=null!==n.implicit?n.implicit:n.tag,s=null===n.implicit?"universal":"context";null===f?null===n.use&&t.error("Tag could be omitted only for .use()"):null===n.use&&(u=this._encodeComposite(f,o,s,a))}return null!==n.explicit&&(u=this._encodeComposite(n.explicit,!1,"context",u)),u},n.prototype._encodeChoice=function(e,t){var r=this._baseState,n=r.choice[e.type];return n||o(!1,e.type+" not found in "+JSON.stringify(Object.keys(r.choice))),n._encode(e.value,t)},n.prototype._encodePrimitive=function(e,t){var r=this._baseState;if(/str$/.test(e))return this._encodeStr(t,e);if("objid"===e&&r.args)return this._encodeObjid(t,r.reverseArgs[0],r.args[1]);if("objid"===e)return this._encodeObjid(t,null,null);if("gentime"===e||"utctime"===e)return this._encodeTime(t,e);if("null_"===e)return this._encodeNull();if("int"===e||"enum"===e)return this._encodeInt(t,r.args&&r.reverseArgs[0]);if("bool"===e)return this._encodeBool(t);if("objDesc"===e)return this._encodeStr(t,e);throw new Error("Unsupported tag: "+e)},n.prototype._isNumstr=function(e){return/^[0-9 ]*$/.test(e)},n.prototype._isPrintstr=function(e){return/^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)}},function(e,t,r){var n=r(50);t.tagClass={0:"universal",1:"application",2:"context",3:"private"},t.tagClassByName=n._reverse(t.tagClass),t.tag={0:"end",1:"bool",2:"int",3:"bitstr",4:"octstr",5:"null_",6:"objid",7:"objDesc",8:"external",9:"real",10:"enum",11:"embed",12:"utf8str",13:"relativeOid",16:"seq",17:"set",18:"numstr",19:"printstr",20:"t61str",21:"videostr",22:"ia5str",23:"utctime",24:"gentime",25:"graphstr",26:"iso646str",27:"genstr",28:"unistr",29:"charstr",30:"bmpstr"},t.tagByName=n._reverse(t.tag)},function(e,t,r){var n=t;n.der=r(51),n.pem=r(103)},function(e,t,r){function n(e){a.call(this,e),this.enc="pem"}var i=r(1),u=r(0).Buffer,a=r(51);i(n,a),e.exports=n,n.prototype.decode=function(e,t){for(var r=e.toString().split(/[\r\n]+/g),n=t.label.toUpperCase(),i=/^-----(BEGIN|END) ([^-]+)-----$/,o=-1,d=-1,f=0;f<r.length;f++){var s=r[f].match(i);if(null!==s&&s[2]===n){if(-1!==o){if("END"!==s[1])break;d=f;break}if("BEGIN"!==s[1])break;o=f}}if(-1===o||-1===d)throw new Error("PEM section not found for: "+n);var c=r.slice(o+1,d).join("");c.replace(/[^a-z0-9\+\/=]+/gi,"");var h=new u(c,"base64");return a.prototype.decode.call(this,h,t)}},function(e,t,r){var n=t;n.der=r(52),n.pem=r(105)},function(e,t,r){function n(e){u.call(this,e),this.enc="pem"}var i=r(1),u=r(52);i(n,u),e.exports=n,n.prototype.encode=function(e,t){for(var r=u.prototype.encode.call(this,e),n=r.toString("base64"),i=["-----BEGIN "+t.label+"-----"],a=0;a<n.length;a+=64)i.push(n.slice(a,a+64));return i.push("-----END "+t.label+"-----"),i.join("\n")}},function(e,t,r){"use strict";var n=r(8),i=r(35).Condition,u=n.define("PreimageFulfillment",function(){this.seq().obj(this.key("preimage").implicit(0).octstr())}),a=n.define("PrefixFulfillment",function(){this.seq().obj(this.key("prefix").implicit(0).octstr(),this.key("maxMessageLength").implicit(1).int(),this.key("subfulfillment").explicit(2).use(s))}),o=n.define("ThresholdFulfillment",function(){this.seq().obj(this.key("subfulfillments").implicit(0).setof(s),this.key("subconditions").implicit(1).setof(i))}),d=n.define("RsaSha256Fulfillment",function(){this.seq().obj(this.key("modulus").implicit(0).octstr(),this.key("signature").implicit(1).octstr())}),f=n.define("Ed25519Sha256Fulfillment",function(){this.seq().obj(this.key("publicKey").implicit(0).octstr(),this.key("signature").implicit(1).octstr())}),s=n.define("Fulfillment",function(){this.choice({preimageSha256Fulfillment:this.implicit(0).use(u),prefixSha256Fulfillment:this.implicit(1).use(a),thresholdSha256Fulfillment:this.implicit(2).use(o),rsaSha256Fulfillment:this.implicit(3).use(d),ed25519Sha256Fulfillment:this.implicit(4).use(f)})});e.exports={PreimageFulfillment:u,PrefixFulfillment:a,ThresholdFulfillment:o,RsaSha256Fulfillment:d,Ed25519Sha256Fulfillment:f,Fulfillment:s}},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(17),u=r(12),a=function(e){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),n(r,[{key:"getFingerprintContents",value:function(){if(!this.preimage)throw new u("Could not calculate hash, no preimage provided");return this.preimage}},{key:"setPreimage",value:function(e){if(!t.isBuffer(e))throw new TypeError("Preimage must be a buffer, was: "+e);this.preimage=e}},{key:"parseJson",value:function(e){this.preimage=t.from(e.preimage,"base64")}},{key:"getAsn1JsonPayload",value:function(){return{preimage:this.preimage}}},{key:"calculateCost",value:function(){if(!this.preimage)throw new u("Preimage must be specified");return this.preimage.length}},{key:"validate",value:function(e){return!0}}]),r}(i);a.TYPE_ID=0,a.TYPE_NAME="preimage-sha-256",a.TYPE_ASN1_CONDITION="preimageSha256Condition",a.TYPE_ASN1_FULFILLMENT="preimageSha256Fulfillment",a.TYPE_CATEGORY="simple",e.exports=a}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){function r(e){if(e.length%n!=0){var r=e.length+(n-e.length%n);e=t.concat([e,i],r)}for(var u=new Array(e.length>>>2),a=0,o=0;a<e.length;a+=n,o++)u[o]=e.readInt32LE(a);return u}var n=4,i=new t(n);i.fill(0),e.exports=function(e,n){var i=n(r(e),8*e.length);e=new t(16);for(var u=0;u<i.length;u++)e.writeInt32LE(i[u],u<<2,!0);return e}}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){function n(e){i.call(this),this._block=new t(e),this._blockSize=e,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}var i=r(25).Transform;r(1)(n,i),n.prototype._transform=function(e,r,n){var i=null;try{"buffer"!==r&&(e=new t(e,r)),this.update(e)}catch(e){i=e}n(i)},n.prototype._flush=function(e){var t=null;try{this.push(this._digest())}catch(e){t=e}e(t)},n.prototype.update=function(e,r){if(!t.isBuffer(e)&&"string"!=typeof e)throw new TypeError("Data must be a string or a buffer");if(this._finalized)throw new Error("Digest already called");t.isBuffer(e)||(e=new t(e,r||"binary"));for(var n=this._block,i=0;this._blockOffset+e.length-i>=this._blockSize;){for(var u=this._blockOffset;u<this._blockSize;)n[u++]=e[i++];this._update(),this._blockOffset=0}for(;i<e.length;)n[this._blockOffset++]=e[i++];for(var a=0,o=8*e.length;o>0;++a)this._length[a]+=o,(o=this._length[a]/4294967296|0)>0&&(this._length[a]-=4294967296*o);return this},n.prototype._update=function(e){throw new Error("_update is not implemented")},n.prototype.digest=function(e){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var t=this._digest();return void 0!==e&&(t=t.toString(e)),t},n.prototype._digest=function(){throw new Error("_digest is not implemented")},e.exports=n}).call(t,r(0).Buffer)},function(e,t){},function(e,t,r){"use strict";function n(e,t,r){e.copy(t,r)}var i=r(2).Buffer;e.exports=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,r=""+t.data;t=t.next;)r+=e+t.data;return r},e.prototype.concat=function(e){if(0===this.length)return i.alloc(0);if(1===this.length)return this.head.data;for(var t=i.allocUnsafe(e>>>0),r=this.head,u=0;r;)n(r.data,t,u),u+=r.data.length,r=r.next;return t},e}()},function(e,t,r){function n(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new n(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new n(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},r(113),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,r){(function(e,t){!function(e,r){"use strict";function n(e){delete o[e]}function i(e){if(d)setTimeout(i,0,e);else{var t=o[e];if(t){d=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}(t)}finally{n(e),d=!1}}}}if(!e.setImmediate){var u,a=1,o={},d=!1,f=e.document,s=Object.getPrototypeOf&&Object.getPrototypeOf(e);s=s&&s.setTimeout?s:e,"[object process]"==={}.toString.call(e.process)?u=function(e){t.nextTick(function(){i(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?function(){var t="setImmediate$"+Math.random()+"$",r=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&i(+r.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),u=function(r){e.postMessage(t+r,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){i(e.data)},u=function(t){e.port2.postMessage(t)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var e=f.documentElement;u=function(t){var r=f.createElement("script");r.onreadystatechange=function(){i(t),r.onreadystatechange=null,e.removeChild(r),r=null},e.appendChild(r)}}():u=function(e){setTimeout(i,0,e)},s.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return o[a]=n,u(a),a++},s.clearImmediate=n}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,r(9),r(6))},function(e,t,r){(function(t){function r(e){try{if(!t.localStorage)return!1}catch(e){return!1}var r=t.localStorage[e];return null!=r&&"true"===String(r).toLowerCase()}e.exports=function(e,t){if(r("noDeprecation"))return e;var n=!1;return function(){if(!n){if(r("throwDeprecation"))throw new Error(t);r("traceDeprecation")?console.trace(t):console.warn(t),n=!0}return e.apply(this,arguments)}}}).call(t,r(9))},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);i.call(this,e)}e.exports=n;var i=r(56),u=r(19);u.inherits=r(1),u.inherits(n,i),n.prototype._transform=function(e,t,r){r(null,e)}},function(e,t,r){e.exports=r(40)},function(e,t,r){e.exports=r(11)},function(e,t,r){e.exports=r(39).Transform},function(e,t,r){e.exports=r(39).PassThrough},function(e,t,r){function n(){this.init(),this._w=c,d.call(this,64,56)}function i(e){return e<<5|e>>>27}function u(e){return e<<30|e>>>2}function a(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}var o=r(1),d=r(14),f=r(2).Buffer,s=[1518500249,1859775393,-1894007588,-899497514],c=new Array(80);o(n,d),n.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,o=0|this._c,d=0|this._d,f=0|this._e,c=0;c<16;++c)t[c]=e.readInt32BE(4*c);for(;c<80;++c)t[c]=t[c-3]^t[c-8]^t[c-14]^t[c-16];for(var h=0;h<80;++h){var l=~~(h/20),p=i(r)+a(l,n,o,d)+f+t[h]+s[l]|0;f=d,d=o,o=u(n),n=r,r=p}this._a=r+this._a|0,this._b=n+this._b|0,this._c=o+this._c|0,this._d=d+this._d|0,this._e=f+this._e|0},n.prototype._hash=function(){var e=f.allocUnsafe(20);return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=h,f.call(this,64,56)}function i(e){return e<<1|e>>>31}function u(e){return e<<5|e>>>27}function a(e){return e<<30|e>>>2}function o(e,t,r,n){return 0===e?t&r|~t&n:2===e?t&r|t&n|r&n:t^r^n}var d=r(1),f=r(14),s=r(2).Buffer,c=[1518500249,1859775393,-1894007588,-899497514],h=new Array(80);d(n,f),n.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},n.prototype._update=function(e){for(var t=this._w,r=0|this._a,n=0|this._b,d=0|this._c,f=0|this._d,s=0|this._e,h=0;h<16;++h)t[h]=e.readInt32BE(4*h);for(;h<80;++h)t[h]=i(t[h-3]^t[h-8]^t[h-14]^t[h-16]);for(var l=0;l<80;++l){var p=~~(l/20),b=u(r)+o(p,n,d,f)+s+t[l]+c[p]|0;s=f,f=d,d=a(n),n=r,r=b}this._a=r+this._a|0,this._b=n+this._b|0,this._c=d+this._c|0,this._d=f+this._d|0,this._e=s+this._e|0},n.prototype._hash=function(){var e=s.allocUnsafe(20);return e.writeInt32BE(0|this._a,0),e.writeInt32BE(0|this._b,4),e.writeInt32BE(0|this._c,8),e.writeInt32BE(0|this._d,12),e.writeInt32BE(0|this._e,16),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=d,a.call(this,64,56)}var i=r(1),u=r(57),a=r(14),o=r(2).Buffer,d=new Array(64);i(n,u),n.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},n.prototype._hash=function(){var e=o.allocUnsafe(28);return e.writeInt32BE(this._a,0),e.writeInt32BE(this._b,4),e.writeInt32BE(this._c,8),e.writeInt32BE(this._d,12),e.writeInt32BE(this._e,16),e.writeInt32BE(this._f,20),e.writeInt32BE(this._g,24),e},e.exports=n},function(e,t,r){function n(){this.init(),this._w=d,a.call(this,128,112)}var i=r(1),u=r(58),a=r(14),o=r(2).Buffer,d=new Array(160);i(n,u),n.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},n.prototype._hash=function(){function e(e,r,n){t.writeInt32BE(e,n),t.writeInt32BE(r,n+4)}var t=o.allocUnsafe(48);return e(this._ah,this._al,0),e(this._bh,this._bl,8),e(this._ch,this._cl,16),e(this._dh,this._dl,24),e(this._eh,this._el,32),e(this._fh,this._fl,40),t},e.exports=n},function(e,t,r){"use strict";function n(e,t){a.call(this,"digest"),"string"==typeof t&&(t=u.from(t)),this._alg=e,this._key=t,t.length>d?t=e(t):t.length<d&&(t=u.concat([t,o],d));for(var r=this._ipad=u.allocUnsafe(d),n=this._opad=u.allocUnsafe(d),i=0;i<d;i++)r[i]=54^t[i],n[i]=92^t[i];this._hash=[r]}var i=r(1),u=r(2).Buffer,a=r(10),o=u.alloc(128),d=64;i(n,a),n.prototype._update=function(e){this._hash.push(e)},n.prototype._final=function(){var e=this._alg(u.concat(this._hash));return this._alg(u.concat([this._opad,e]))},e.exports=n},function(e,t,r){e.exports=r(60)},function(e,t,r){(function(t,n){function i(e){if(t.process&&!t.process.browser)return Promise.resolve(!1);if(!c||!c.importKey||!c.deriveBits)return Promise.resolve(!1);if(void 0!==l[e])return l[e];var r=u(a=a||s.alloc(8),a,10,128,e).then(function(){return!0}).catch(function(){return!1});return l[e]=r,r}function u(e,t,r,n,i){return c.importKey("raw",e,{name:"PBKDF2"},!1,["deriveBits"]).then(function(e){return c.deriveBits({name:"PBKDF2",salt:t,iterations:r,hash:{name:i}},e,n<<3)}).then(function(e){return s.from(e)})}var a,o=r(62),d=r(63),f=r(64),s=r(2).Buffer,c=t.crypto&&t.crypto.subtle,h={sha:"SHA-1","sha-1":"SHA-1",sha1:"SHA-1",sha256:"SHA-256","sha-256":"SHA-256",sha384:"SHA-384","sha-384":"SHA-384","sha-512":"SHA-512",sha512:"SHA-512"},l=[];e.exports=function(e,r,a,c,l,p){if(s.isBuffer(e)||(e=s.from(e,d)),s.isBuffer(r)||(r=s.from(r,d)),o(a,c),"function"==typeof l&&(p=l,l=void 0),"function"!=typeof p)throw new Error("No callback provided to pbkdf2");var b=h[(l=l||"sha1").toLowerCase()];if(!b||"function"!=typeof t.Promise)return n.nextTick(function(){var t;try{t=f(e,r,a,c,l)}catch(e){return p(e)}p(null,t)});!function(e,t){e.then(function(e){n.nextTick(function(){t(null,e)})},function(e){n.nextTick(function(){t(e)})})}(i(b).then(function(t){return t?u(e,r,a,c,b):f(e,r,a,c,l)}),p)}}).call(t,r(9),r(6))},function(e,t,r){function n(e,t,r){if(e=e.toLowerCase(),f[e])return a.createCipheriv(e,t,r);if(d[e])return new o({key:t,iv:r,mode:e});throw new TypeError("invalid suite type")}function i(e,t,r){if(e=e.toLowerCase(),f[e])return a.createDecipheriv(e,t,r);if(d[e])return new o({key:t,iv:r,mode:e,decrypt:!0});throw new TypeError("invalid suite type")}var u=r(27),a=r(43),o=r(139),d=r(145),f=r(44);t.createCipher=t.Cipher=function(e,t){var r,i;if(e=e.toLowerCase(),f[e])r=f[e].key,i=f[e].iv;else{if(!d[e])throw new TypeError("invalid suite type");r=8*d[e].key,i=d[e].iv}var a=u(t,!1,r,i);return n(e,a.key,a.iv)},t.createCipheriv=t.Cipheriv=n,t.createDecipher=t.Decipher=function(e,t){var r,n;if(e=e.toLowerCase(),f[e])r=f[e].key,n=f[e].iv;else{if(!d[e])throw new TypeError("invalid suite type");r=8*d[e].key,n=d[e].iv}var a=u(t,!1,r,n);return i(e,a.key,a.iv)},t.createDecipheriv=t.Decipheriv=i,t.listCiphers=t.getCiphers=function(){return Object.keys(d).concat(a.getCiphers())}},function(e,t,r){"use strict";(function(t){function n(){s.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878}function i(e,t){return e<<t|e>>>32-t}function u(e,t,r,n,u,a,o){return i(e+(t&r|~t&n)+u+a|0,o)+t|0}function a(e,t,r,n,u,a,o){return i(e+(t&n|r&~n)+u+a|0,o)+t|0}function o(e,t,r,n,u,a,o){return i(e+(t^r^n)+u+a|0,o)+t|0}function d(e,t,r,n,u,a,o){return i(e+(r^(t|~n))+u+a|0,o)+t|0}var f=r(1),s=r(129),c=new Array(16);f(n,s),n.prototype._update=function(){for(var e=c,t=0;t<16;++t)e[t]=this._block.readInt32LE(4*t);var r=this._a,n=this._b,i=this._c,f=this._d;r=u(r,n,i,f,e[0],3614090360,7),f=u(f,r,n,i,e[1],3905402710,12),i=u(i,f,r,n,e[2],606105819,17),n=u(n,i,f,r,e[3],3250441966,22),r=u(r,n,i,f,e[4],4118548399,7),f=u(f,r,n,i,e[5],1200080426,12),i=u(i,f,r,n,e[6],2821735955,17),n=u(n,i,f,r,e[7],4249261313,22),r=u(r,n,i,f,e[8],1770035416,7),f=u(f,r,n,i,e[9],2336552879,12),i=u(i,f,r,n,e[10],4294925233,17),n=u(n,i,f,r,e[11],2304563134,22),r=u(r,n,i,f,e[12],1804603682,7),f=u(f,r,n,i,e[13],4254626195,12),i=u(i,f,r,n,e[14],2792965006,17),n=u(n,i,f,r,e[15],1236535329,22),r=a(r,n,i,f,e[1],4129170786,5),f=a(f,r,n,i,e[6],3225465664,9),i=a(i,f,r,n,e[11],643717713,14),n=a(n,i,f,r,e[0],3921069994,20),r=a(r,n,i,f,e[5],3593408605,5),f=a(f,r,n,i,e[10],38016083,9),i=a(i,f,r,n,e[15],3634488961,14),n=a(n,i,f,r,e[4],3889429448,20),r=a(r,n,i,f,e[9],568446438,5),f=a(f,r,n,i,e[14],3275163606,9),i=a(i,f,r,n,e[3],4107603335,14),n=a(n,i,f,r,e[8],1163531501,20),r=a(r,n,i,f,e[13],2850285829,5),f=a(f,r,n,i,e[2],4243563512,9),i=a(i,f,r,n,e[7],1735328473,14),n=a(n,i,f,r,e[12],2368359562,20),r=o(r,n,i,f,e[5],4294588738,4),f=o(f,r,n,i,e[8],2272392833,11),i=o(i,f,r,n,e[11],1839030562,16),n=o(n,i,f,r,e[14],4259657740,23),r=o(r,n,i,f,e[1],2763975236,4),f=o(f,r,n,i,e[4],1272893353,11),i=o(i,f,r,n,e[7],4139469664,16),n=o(n,i,f,r,e[10],3200236656,23),r=o(r,n,i,f,e[13],681279174,4),f=o(f,r,n,i,e[0],3936430074,11),i=o(i,f,r,n,e[3],3572445317,16),n=o(n,i,f,r,e[6],76029189,23),r=o(r,n,i,f,e[9],3654602809,4),f=o(f,r,n,i,e[12],3873151461,11),i=o(i,f,r,n,e[15],530742520,16),n=o(n,i,f,r,e[2],3299628645,23),r=d(r,n,i,f,e[0],4096336452,6),f=d(f,r,n,i,e[7],1126891415,10),i=d(i,f,r,n,e[14],2878612391,15),n=d(n,i,f,r,e[5],4237533241,21),r=d(r,n,i,f,e[12],1700485571,6),f=d(f,r,n,i,e[3],2399980690,10),i=d(i,f,r,n,e[10],4293915773,15),n=d(n,i,f,r,e[1],2240044497,21),r=d(r,n,i,f,e[8],1873313359,6),f=d(f,r,n,i,e[15],4264355552,10),i=d(i,f,r,n,e[6],2734768916,15),n=d(n,i,f,r,e[13],1309151649,21),r=d(r,n,i,f,e[4],4149444226,6),f=d(f,r,n,i,e[11],3174756917,10),i=d(i,f,r,n,e[2],718787259,15),n=d(n,i,f,r,e[9],3951481745,21),this._a=this._a+r|0,this._b=this._b+n|0,this._c=this._c+i|0,this._d=this._d+f|0},n.prototype._digest=function(){this._block[this._blockOffset++]=128,this._blockOffset>56&&(this._block.fill(0,this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();var e=new t(16);return e.writeInt32LE(this._a,0),e.writeInt32LE(this._b,4),e.writeInt32LE(this._c,8),e.writeInt32LE(this._d,12),e},e.exports=n}).call(t,r(0).Buffer)},function(e,t,r){"use strict";function n(e){u.call(this),this._block=i.allocUnsafe(e),this._blockSize=e,this._blockOffset=0,this._length=[0,0,0,0],this._finalized=!1}var i=r(2).Buffer,u=r(25).Transform;r(1)(n,u),n.prototype._transform=function(e,t,r){var n=null;try{this.update(e,t)}catch(e){n=e}r(n)},n.prototype._flush=function(e){var t=null;try{this.push(this.digest())}catch(e){t=e}e(t)},n.prototype.update=function(e,t){if(function(e,t){if(!i.isBuffer(e)&&"string"!=typeof e)throw new TypeError(t+" must be a string or a buffer")}(e,"Data"),this._finalized)throw new Error("Digest already called");i.isBuffer(e)||(e=i.from(e,t));for(var r=this._block,n=0;this._blockOffset+e.length-n>=this._blockSize;){for(var u=this._blockOffset;u<this._blockSize;)r[u++]=e[n++];this._update(),this._blockOffset=0}for(;n<e.length;)r[this._blockOffset++]=e[n++];for(var a=0,o=8*e.length;o>0;++a)this._length[a]+=o,(o=this._length[a]/4294967296|0)>0&&(this._length[a]-=4294967296*o);return this},n.prototype._update=function(){throw new Error("_update is not implemented")},n.prototype.digest=function(e){if(this._finalized)throw new Error("Digest already called");this._finalized=!0;var t=this._digest();void 0!==e&&(t=t.toString(e)),this._block.fill(0),this._blockOffset=0;for(var r=0;r<4;++r)this._length[r]=0;return t},n.prototype._digest=function(){throw new Error("_digest is not implemented")},e.exports=n},function(e,t,r){function n(e,t,r){s.call(this),this._cache=new i,this._cipher=new c.AES(t),this._prev=d.from(r),this._mode=e,this._autopadding=!0}function i(){this.cache=d.allocUnsafe(0)}function u(e,t,r){var i=a[e.toLowerCase()];if(!i)throw new TypeError("invalid suite type");if("string"==typeof t&&(t=d.from(t)),t.length!==i.key/8)throw new TypeError("invalid key length "+t.length);if("string"==typeof r&&(r=d.from(r)),"GCM"!==i.mode&&r.length!==i.iv)throw new TypeError("invalid iv length "+r.length);return"stream"===i.type?new f(i.module,t,r):"auth"===i.type?new o(i.module,t,r):new n(i.module,t,r)}var a=r(44),o=r(68),d=r(2).Buffer,f=r(69),s=r(10),c=r(28),h=r(27);r(1)(n,s),n.prototype._update=function(e){this._cache.add(e);for(var t,r,n=[];t=this._cache.get();)r=this._mode.encrypt(this,t),n.push(r);return d.concat(n)};var l=d.alloc(16,16);n.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return e=this._mode.encrypt(this,e),this._cipher.scrub(),e;if(!e.equals(l))throw this._cipher.scrub(),new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},i.prototype.add=function(e){this.cache=d.concat([this.cache,e])},i.prototype.get=function(){if(this.cache.length>15){var e=this.cache.slice(0,16);return this.cache=this.cache.slice(16),e}return null},i.prototype.flush=function(){for(var e=16-this.cache.length,t=d.allocUnsafe(e),r=-1;++r<e;)t.writeUInt8(e,r);return d.concat([this.cache,t])},t.createCipheriv=u,t.createCipher=function(e,t){var r=a[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=h(t,!1,r.key,r.iv);return u(e,n.key,n.iv)}},function(e,t){t.encrypt=function(e,t){return e._cipher.encryptBlock(t)},t.decrypt=function(e,t){return e._cipher.decryptBlock(t)}},function(e,t,r){var n=r(20);t.encrypt=function(e,t){var r=n(t,e._prev);return e._prev=e._cipher.encryptBlock(r),e._prev},t.decrypt=function(e,t){var r=e._prev;e._prev=t;var i=e._cipher.decryptBlock(t);return n(i,r)}},function(e,t,r){function n(e,t,r){var n=t.length,a=u(t,e._cache);return e._cache=e._cache.slice(n),e._prev=i.concat([e._prev,r?t:a]),a}var i=r(2).Buffer,u=r(20);t.encrypt=function(e,t,r){for(var u,a=i.allocUnsafe(0);t.length;){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=i.allocUnsafe(0)),!(e._cache.length<=t.length)){a=i.concat([a,n(e,t,r)]);break}u=e._cache.length,a=i.concat([a,n(e,t.slice(0,u),r)]),t=t.slice(u)}return a}},function(e,t,r){function n(e,t,r){var n=e._cipher.encryptBlock(e._prev),u=n[0]^t;return e._prev=i.concat([e._prev.slice(1),i.from([r?t:u])]),u}var i=r(2).Buffer;t.encrypt=function(e,t,r){for(var u=t.length,a=i.allocUnsafe(u),o=-1;++o<u;)a[o]=n(e,t[o],r);return a}},function(e,t,r){function n(e,t,r){for(var n,u,a,o=-1,d=0;++o<8;)n=e._cipher.encryptBlock(e._prev),u=t&1<<7-o?128:0,a=n[0]^u,d+=(128&a)>>o%8,e._prev=i(e._prev,r?u:a);return d}function i(e,t){var r=e.length,n=-1,i=u.allocUnsafe(e.length);for(e=u.concat([e,u.from([t])]);++n<r;)i[n]=e[n]<<1|e[n+1]>>7;return i}var u=r(2).Buffer;t.encrypt=function(e,t,r){for(var i=t.length,a=u.allocUnsafe(i),o=-1;++o<i;)a[o]=n(e,t[o],r);return a}},function(e,t,r){(function(e){function n(e){return e._prev=e._cipher.encryptBlock(e._prev),e._prev}var i=r(20);t.encrypt=function(t,r){for(;t._cache.length<r.length;)t._cache=e.concat([t._cache,n(t)]);var u=t._cache.slice(0,r.length);return t._cache=t._cache.slice(r.length),i(r,u)}}).call(t,r(0).Buffer)},function(e,t,r){function n(e){var t=u.allocUnsafe(16);return t.writeUInt32BE(e[0]>>>0,0),t.writeUInt32BE(e[1]>>>0,4),t.writeUInt32BE(e[2]>>>0,8),t.writeUInt32BE(e[3]>>>0,12),t}function i(e){this.h=e,this.state=u.alloc(16,0),this.cache=u.allocUnsafe(0)}var u=r(2).Buffer,a=u.alloc(16,0);i.prototype.ghash=function(e){for(var t=-1;++t<e.length;)this.state[t]^=e[t];this._multiply()},i.prototype._multiply=function(){for(var e,t,r=function(e){return[e.readUInt32BE(0),e.readUInt32BE(4),e.readUInt32BE(8),e.readUInt32BE(12)]}(this.h),i=[0,0,0,0],u=-1;++u<128;){for(0!=(this.state[~~(u/8)]&1<<7-u%8)&&(i[0]^=r[0],i[1]^=r[1],i[2]^=r[2],i[3]^=r[3]),t=0!=(1&r[3]),e=3;e>0;e--)r[e]=r[e]>>>1|(1&r[e-1])<<31;r[0]=r[0]>>>1,t&&(r[0]=r[0]^225<<24)}this.state=n(i)},i.prototype.update=function(e){this.cache=u.concat([this.cache,e]);for(var t;this.cache.length>=16;)t=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(t)},i.prototype.final=function(e,t){return this.cache.length&&this.ghash(u.concat([this.cache,a],16)),this.ghash(n([0,e,0,t])),this.state},e.exports=i},function(e,t,r){function n(e,t,r){s.call(this),this._cache=new i,this._last=void 0,this._cipher=new c.AES(t),this._prev=o.from(r),this._mode=e,this._autopadding=!0}function i(){this.cache=o.allocUnsafe(0)}function u(e,t,r){var i=d[e.toLowerCase()];if(!i)throw new TypeError("invalid suite type");if("string"==typeof r&&(r=o.from(r)),"GCM"!==i.mode&&r.length!==i.iv)throw new TypeError("invalid iv length "+r.length);if("string"==typeof t&&(t=o.from(t)),t.length!==i.key/8)throw new TypeError("invalid key length "+t.length);return"stream"===i.type?new f(i.module,t,r,!0):"auth"===i.type?new a(i.module,t,r,!0):new n(i.module,t,r)}var a=r(68),o=r(2).Buffer,d=r(44),f=r(69),s=r(10),c=r(28),h=r(27);r(1)(n,s),n.prototype._update=function(e){this._cache.add(e);for(var t,r,n=[];t=this._cache.get(this._autopadding);)r=this._mode.decrypt(this,t),n.push(r);return o.concat(n)},n.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return function(e){for(var t=e[15],r=-1;++r<t;)if(e[r+(16-t)]!==t)throw new Error("unable to decrypt data");if(16!==t)return e.slice(0,16-t)}(this._mode.decrypt(this,e));if(e)throw new Error("data not multiple of block length")},n.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},i.prototype.add=function(e){this.cache=o.concat([this.cache,e])},i.prototype.get=function(e){var t;if(e){if(this.cache.length>16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t}else if(this.cache.length>=16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t;return null},i.prototype.flush=function(){if(this.cache.length)return this.cache},t.createDecipher=function(e,t){var r=d[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var n=h(t,!1,r.key,r.iv);return u(e,n.key,n.iv)},t.createDecipheriv=u},function(e,t,r){(function(t){function n(e){i.call(this);var r,n=e.mode.toLowerCase(),u=o[n];r=e.decrypt?"decrypt":"encrypt";var a=e.key;"des-ede"!==n&&"des-ede-cbc"!==n||(a=t.concat([a,a.slice(0,8)]));var d=e.iv;this._des=u.create({key:a,iv:d,type:r})}var i=r(10),u=r(45),a=r(1),o={"des-ede3-cbc":u.CBC.instantiate(u.EDE),"des-ede3":u.EDE,"des-ede-cbc":u.CBC.instantiate(u.EDE),"des-ede":u.EDE,"des-cbc":u.CBC.instantiate(u.DES),"des-ecb":u.DES};o.des=o["des-cbc"],o.des3=o["des-ede3-cbc"],e.exports=n,a(n,i),n.prototype._update=function(e){return new t(this._des.update(e))},n.prototype._final=function(){return new t(this._des.final())}}).call(t,r(0).Buffer)},function(e,t,r){"use strict";t.readUInt32BE=function(e,t){return(e[0+t]<<24|e[1+t]<<16|e[2+t]<<8|e[3+t])>>>0},t.writeUInt32BE=function(e,t,r){e[0+r]=t>>>24,e[1+r]=t>>>16&255,e[2+r]=t>>>8&255,e[3+r]=255&t},t.ip=function(e,t,r,n){for(var i=0,u=0,a=6;a>=0;a-=2){for(var o=0;o<=24;o+=8)i<<=1,i|=t>>>o+a&1;for(var o=0;o<=24;o+=8)i<<=1,i|=e>>>o+a&1}for(var a=6;a>=0;a-=2){for(var o=1;o<=25;o+=8)u<<=1,u|=t>>>o+a&1;for(var o=1;o<=25;o+=8)u<<=1,u|=e>>>o+a&1}r[n+0]=i>>>0,r[n+1]=u>>>0},t.rip=function(e,t,r,n){for(var i=0,u=0,a=0;a<4;a++)for(var o=24;o>=0;o-=8)i<<=1,i|=t>>>o+a&1,i<<=1,i|=e>>>o+a&1;for(var a=4;a<8;a++)for(var o=24;o>=0;o-=8)u<<=1,u|=t>>>o+a&1,u<<=1,u|=e>>>o+a&1;r[n+0]=i>>>0,r[n+1]=u>>>0},t.pc1=function(e,t,r,n){for(var i=0,u=0,a=7;a>=5;a--){for(var o=0;o<=24;o+=8)i<<=1,i|=t>>o+a&1;for(var o=0;o<=24;o+=8)i<<=1,i|=e>>o+a&1}for(var o=0;o<=24;o+=8)i<<=1,i|=t>>o+a&1;for(var a=1;a<=3;a++){for(var o=0;o<=24;o+=8)u<<=1,u|=t>>o+a&1;for(var o=0;o<=24;o+=8)u<<=1,u|=e>>o+a&1}for(var o=0;o<=24;o+=8)u<<=1,u|=e>>o+a&1;r[n+0]=i>>>0,r[n+1]=u>>>0},t.r28shl=function(e,t){return e<<t&268435455|e>>>28-t};var n=[14,11,17,4,27,23,25,0,13,22,7,18,5,9,16,24,2,20,12,21,1,8,15,26,15,4,25,19,9,1,26,16,5,11,23,8,12,7,17,0,22,3,10,14,6,20,27,24];t.pc2=function(e,t,r,i){for(var u=0,a=0,o=n.length>>>1,d=0;d<o;d++)u<<=1,u|=e>>>n[d]&1;for(var d=o;d<n.length;d++)a<<=1,a|=t>>>n[d]&1;r[i+0]=u>>>0,r[i+1]=a>>>0},t.expand=function(e,t,r){var n=0,i=0;n=(1&e)<<5|e>>>27;for(var u=23;u>=15;u-=4)n<<=6,n|=e>>>u&63;for(var u=11;u>=3;u-=4)i|=e>>>u&63,i<<=6;i|=(31&e)<<1|e>>>31,t[r+0]=n>>>0,t[r+1]=i>>>0};var i=[14,0,4,15,13,7,1,4,2,14,15,2,11,13,8,1,3,10,10,6,6,12,12,11,5,9,9,5,0,3,7,8,4,15,1,12,14,8,8,2,13,4,6,9,2,1,11,7,15,5,12,11,9,3,7,14,3,10,10,0,5,6,0,13,15,3,1,13,8,4,14,7,6,15,11,2,3,8,4,14,9,12,7,0,2,1,13,10,12,6,0,9,5,11,10,5,0,13,14,8,7,10,11,1,10,3,4,15,13,4,1,2,5,11,8,6,12,7,6,12,9,0,3,5,2,14,15,9,10,13,0,7,9,0,14,9,6,3,3,4,15,6,5,10,1,2,13,8,12,5,7,14,11,12,4,11,2,15,8,1,13,1,6,10,4,13,9,0,8,6,15,9,3,8,0,7,11,4,1,15,2,14,12,3,5,11,10,5,14,2,7,12,7,13,13,8,14,11,3,5,0,6,6,15,9,0,10,3,1,4,2,7,8,2,5,12,11,1,12,10,4,14,15,9,10,3,6,15,9,0,0,6,12,10,11,1,7,13,13,8,15,9,1,4,3,5,14,11,5,12,2,7,8,2,4,14,2,14,12,11,4,2,1,12,7,4,10,7,11,13,6,1,8,5,5,0,3,15,15,10,13,3,0,9,14,8,9,6,4,11,2,8,1,12,11,7,10,1,13,14,7,2,8,13,15,6,9,15,12,0,5,9,6,10,3,4,0,5,14,3,12,10,1,15,10,4,15,2,9,7,2,12,6,9,8,5,0,6,13,1,3,13,4,14,14,0,7,11,5,3,11,8,9,4,14,3,15,2,5,12,2,9,8,5,12,15,3,10,7,11,0,14,4,1,10,7,1,6,13,0,11,8,6,13,4,13,11,0,2,11,14,7,15,4,0,9,8,1,13,10,3,14,12,3,9,5,7,12,5,2,10,15,6,8,1,6,1,6,4,11,11,13,13,8,12,1,3,4,7,10,14,7,10,9,15,5,6,0,8,15,0,14,5,2,9,3,2,12,13,1,2,15,8,13,4,8,6,10,15,3,11,7,1,4,10,12,9,5,3,6,14,11,5,0,0,14,12,9,7,2,7,2,11,1,4,14,1,7,9,4,12,10,14,8,2,13,0,15,6,12,10,9,13,0,15,3,3,5,5,6,8,11];t.substitute=function(e,t){for(var r=0,n=0;n<4;n++){var u=e>>>18-6*n&63,a=i[64*n+u];r<<=4,r|=a}for(var n=0;n<4;n++){var u=t>>>18-6*n&63,a=i[256+64*n+u];r<<=4,r|=a}return r>>>0};var u=[16,25,12,11,3,20,4,15,31,17,9,6,27,14,1,22,30,24,8,18,0,5,29,23,13,19,2,26,10,21,28,7];t.permute=function(e){for(var t=0,r=0;r<u.length;r++)t<<=1,t|=e>>>u[r]&1;return t>>>0},t.padSplit=function(e,t,r){for(var n=e.toString(2);n.length<t;)n="0"+n;for(var i=[],u=0;u<t;u+=r)i.push(n.slice(u,u+r));return i.join(" ")}},function(e,t,r){"use strict";function n(e){this.options=e,this.type=this.options.type,this.blockSize=8,this._init(),this.buffer=new Array(this.blockSize),this.bufferOff=0}var i=r(5);e.exports=n,n.prototype._init=function(){},n.prototype.update=function(e){return 0===e.length?[]:"decrypt"===this.type?this._updateDecrypt(e):this._updateEncrypt(e)},n.prototype._buffer=function(e,t){for(var r=Math.min(this.buffer.length-this.bufferOff,e.length-t),n=0;n<r;n++)this.buffer[this.bufferOff+n]=e[t+n];return this.bufferOff+=r,r},n.prototype._flushBuffer=function(e,t){return this._update(this.buffer,0,e,t),this.bufferOff=0,this.blockSize},n.prototype._updateEncrypt=function(e){var t=0,r=0,n=(this.bufferOff+e.length)/this.blockSize|0,i=new Array(n*this.blockSize);0!==this.bufferOff&&(t+=this._buffer(e,t),this.bufferOff===this.buffer.length&&(r+=this._flushBuffer(i,r)));for(var u=e.length-(e.length-t)%this.blockSize;t<u;t+=this.blockSize)this._update(e,t,i,r),r+=this.blockSize;for(;t<e.length;t++,this.bufferOff++)this.buffer[this.bufferOff]=e[t];return i},n.prototype._updateDecrypt=function(e){for(var t=0,r=0,n=Math.ceil((this.bufferOff+e.length)/this.blockSize)-1,i=new Array(n*this.blockSize);n>0;n--)t+=this._buffer(e,t),r+=this._flushBuffer(i,r);return t+=this._buffer(e,t),i},n.prototype.final=function(e){var t,r;return e&&(t=this.update(e)),r="encrypt"===this.type?this._finalEncrypt():this._finalDecrypt(),t?t.concat(r):r},n.prototype._pad=function(e,t){if(0===t)return!1;for(;t<e.length;)e[t++]=0;return!0},n.prototype._finalEncrypt=function(){if(!this._pad(this.buffer,this.bufferOff))return[];var e=new Array(this.blockSize);return this._update(this.buffer,0,e,0),e},n.prototype._unpad=function(e){return e},n.prototype._finalDecrypt=function(){i.equal(this.bufferOff,this.blockSize,"Not enough data to decrypt");var e=new Array(this.blockSize);return this._flushBuffer(e,0),this._unpad(e)}},function(e,t,r){"use strict";function n(e){d.call(this,e);var t=new function(){this.tmp=new Array(2),this.keys=null};this._desState=t,this.deriveKeys(t,e.key)}var i=r(5),u=r(1),a=r(45),o=a.utils,d=a.Cipher;u(n,d),e.exports=n,n.create=function(e){return new n(e)};var f=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];n.prototype.deriveKeys=function(e,t){e.keys=new Array(32),i.equal(t.length,this.blockSize,"Invalid key length");var r=o.readUInt32BE(t,0),n=o.readUInt32BE(t,4);o.pc1(r,n,e.tmp,0),r=e.tmp[0],n=e.tmp[1];for(var u=0;u<e.keys.length;u+=2){var a=f[u>>>1];r=o.r28shl(r,a),n=o.r28shl(n,a),o.pc2(r,n,e.keys,u)}},n.prototype._update=function(e,t,r,n){var i=this._desState,u=o.readUInt32BE(e,t),a=o.readUInt32BE(e,t+4);o.ip(u,a,i.tmp,0),u=i.tmp[0],a=i.tmp[1],"encrypt"===this.type?this._encrypt(i,u,a,i.tmp,0):this._decrypt(i,u,a,i.tmp,0),u=i.tmp[0],a=i.tmp[1],o.writeUInt32BE(r,u,n),o.writeUInt32BE(r,a,n+4)},n.prototype._pad=function(e,t){for(var r=e.length-t,n=t;n<e.length;n++)e[n]=r;return!0},n.prototype._unpad=function(e){for(var t=e[e.length-1],r=e.length-t;r<e.length;r++)i.equal(e[r],t);return e.slice(0,e.length-t)},n.prototype._encrypt=function(e,t,r,n,i){for(var u=t,a=r,d=0;d<e.keys.length;d+=2){var f=e.keys[d],s=e.keys[d+1];o.expand(a,e.tmp,0),f^=e.tmp[0],s^=e.tmp[1];var c=o.substitute(f,s),h=o.permute(c),l=a;a=(u^h)>>>0,u=l}o.rip(a,u,n,i)},n.prototype._decrypt=function(e,t,r,n,i){for(var u=r,a=t,d=e.keys.length-2;d>=0;d-=2){var f=e.keys[d],s=e.keys[d+1];o.expand(u,e.tmp,0),f^=e.tmp[0],s^=e.tmp[1];var c=o.substitute(f,s),h=o.permute(c),l=u;u=(a^h)>>>0,a=l}o.rip(u,a,n,i)}},function(e,t,r){"use strict";var n=r(5),i=r(1),u={};t.instantiate=function(e){function t(t){e.call(this,t),this._cbcInit()}i(t,e);for(var r=Object.keys(u),n=0;n<r.length;n++){var a=r[n];t.prototype[a]=u[a]}return t.create=function(e){return new t(e)},t},u._cbcInit=function(){var e=new function(e){n.equal(e.length,8,"Invalid IV length"),this.iv=new Array(8);for(var t=0;t<this.iv.length;t++)this.iv[t]=e[t]}(this.options.iv);this._cbcState=e},u._update=function(e,t,r,n){var i=this._cbcState,u=this.constructor.super_.prototype,a=i.iv;if("encrypt"===this.type){for(var o=0;o<this.blockSize;o++)a[o]^=e[t+o];u._update.call(this,a,0,r,n);for(var o=0;o<this.blockSize;o++)a[o]=r[n+o]}else{u._update.call(this,e,t,r,n);for(var o=0;o<this.blockSize;o++)r[n+o]^=a[o];for(var o=0;o<this.blockSize;o++)a[o]=e[t+o]}}},function(e,t,r){"use strict";function n(e){o.call(this,e);var t=new function(e,t){i.equal(t.length,24,"Invalid key length");var r=t.slice(0,8),n=t.slice(8,16),u=t.slice(16,24);this.ciphers="encrypt"===e?[d.create({type:"encrypt",key:r}),d.create({type:"decrypt",key:n}),d.create({type:"encrypt",key:u})]:[d.create({type:"decrypt",key:u}),d.create({type:"encrypt",key:n}),d.create({type:"decrypt",key:r})]}(this.type,this.options.key);this._edeState=t}var i=r(5),u=r(1),a=r(45),o=a.Cipher,d=a.DES;u(n,o),e.exports=n,n.create=function(e){return new n(e)},n.prototype._update=function(e,t,r,n){var i=this._edeState;i.ciphers[0]._update(e,t,r,n),i.ciphers[1]._update(r,n,r,n),i.ciphers[2]._update(r,n,r,n)},n.prototype._pad=d.prototype._pad,n.prototype._unpad=d.prototype._unpad},function(e,t){t["des-ecb"]={key:8,iv:0},t["des-cbc"]=t.des={key:8,iv:8},t["des-ede3-cbc"]=t.des3={key:24,iv:8},t["des-ede3"]={key:24,iv:0},t["des-ede-cbc"]={key:16,iv:8},t["des-ede"]={key:16,iv:0}},function(e,t,r){(function(e){var n=r(70),i=r(148),u=r(149),a={binary:!0,hex:!0,base64:!0};t.DiffieHellmanGroup=t.createDiffieHellmanGroup=t.getDiffieHellman=function(t){var r=new e(i[t].prime,"hex"),n=new e(i[t].gen,"hex");return new u(r,n)},t.createDiffieHellman=t.DiffieHellman=function t(r,i,o,d){return e.isBuffer(i)||void 0===a[i]?t(r,"binary",i,o):(i=i||"binary",d=d||"binary",o=o||new e([2]),e.isBuffer(o)||(o=new e(o,d)),"number"==typeof r?new u(n(r,o),o,!0):(e.isBuffer(r)||(r=new e(r,i)),new u(r,o,!0)))}}).call(t,r(0).Buffer)},function(e,t){},function(e,t){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},function(e,t,r){(function(t){function n(e,r){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),this._pub=new o(e),this}function i(e,r){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),this._priv=new o(e),this}function u(e,t,r){this.setGenerator(t),this.__prime=new o(e),this._prime=o.mont(this.__prime),this._primeLen=e.length,this._pub=void 0,this._priv=void 0,this._primeCode=void 0,r?(this.setPublicKey=n,this.setPrivateKey=i):this._primeCode=8}function a(e,r){var n=new t(e.toArray());return r?n.toString(r):n}var o=r(3),d=r(71),f=new d,s=new o(24),c=new o(11),h=new o(10),l=new o(3),p=new o(7),b=r(70),y=r(13);e.exports=u;var m={};Object.defineProperty(u.prototype,"verifyError",{enumerable:!0,get:function(){return"number"!=typeof this._primeCode&&(this._primeCode=function(e,t){var r=t.toString("hex"),n=[r,e.toString(16)].join("_");if(n in m)return m[n];var i,u=0;if(e.isEven()||!b.simpleSieve||!b.fermatTest(e)||!f.test(e))return u+=1,u+="02"===r||"05"===r?8:4,m[n]=u,u;switch(f.test(e.shrn(1))||(u+=2),r){case"02":e.mod(s).cmp(c)&&(u+=8);break;case"05":(i=e.mod(h)).cmp(l)&&i.cmp(p)&&(u+=8);break;default:u+=4}return m[n]=u,u}(this.__prime,this.__gen)),this._primeCode}}),u.prototype.generateKeys=function(){return this._priv||(this._priv=new o(y(this._primeLen))),this._pub=this._gen.toRed(this._prime).redPow(this._priv).fromRed(),this.getPublicKey()},u.prototype.computeSecret=function(e){var r=(e=(e=new o(e)).toRed(this._prime)).redPow(this._priv).fromRed(),n=new t(r.toArray()),i=this.getPrime();if(n.length<i.length){var u=new t(i.length-n.length);u.fill(0),n=t.concat([u,n])}return n},u.prototype.getPublicKey=function(e){return a(this._pub,e)},u.prototype.getPrivateKey=function(e){return a(this._priv,e)},u.prototype.getPrime=function(e){return a(this.__prime,e)},u.prototype.getGenerator=function(e){return a(this._gen,e)},u.prototype.setGenerator=function(e,r){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),this.__gen=e,this._gen=new o(e),this}}).call(t,r(0).Buffer)},function(e,t,r){(function(t){function n(e){d.Writable.call(this);var t=h[e];if(!t)throw new Error("Unknown message digest");this._hashType=t.hash,this._hash=o(t.hash),this._tag=t.id,this._signType=t.sign}function i(e){d.Writable.call(this);var t=h[e];if(!t)throw new Error("Unknown message digest");this._hash=o(t.hash),this._tag=t.id,this._signType=t.sign}function u(e){return new n(e)}function a(e){return new i(e)}var o=r(18),d=r(25),f=r(1),s=r(151),c=r(177),h=r(60);Object.keys(h).forEach(function(e){h[e].id=new t(h[e].id,"hex"),h[e.toLowerCase()]=h[e]}),f(n,d.Writable),n.prototype._write=function(e,t,r){this._hash.update(e),r()},n.prototype.update=function(e,r){return"string"==typeof e&&(e=new t(e,r)),this._hash.update(e),this},n.prototype.sign=function(e,t){this.end();var r=this._hash.digest(),n=s(r,e,this._hashType,this._signType,this._tag);return t?n.toString(t):n},f(i,d.Writable),i.prototype._write=function(e,t,r){this._hash.update(e),r()},i.prototype.update=function(e,r){return"string"==typeof e&&(e=new t(e,r)),this._hash.update(e),this},i.prototype.verify=function(e,r,n){"string"==typeof r&&(r=new t(r,n)),this.end();var i=this._hash.digest();return c(r,i,e,this._signType,this._tag)},e.exports={Sign:u,Verify:a,createSign:u,createVerify:a}}).call(t,r(0).Buffer)},function(e,t,r){(function(t){function n(e,t,r){for(var n,o=t.params.priv_key,s=t.params.p,c=t.params.q,h=t.params.g,p=new l(0),b=a(e,c).mod(c),y=!1,m=u(o,c,e,r);!1===y;)n=d(c,m,r),p=f(h,n,s,c),0===(y=n.invm(c).imul(b.add(o.mul(p))).mod(c)).cmpn(0)&&(y=!1,p=new l(0));return i(p,y)}function i(e,r){e=e.toArray(),r=r.toArray(),128&e[0]&&(e=[0].concat(e)),128&r[0]&&(r=[0].concat(r));var n=e.length+r.length+4,i=[48,n,2,e.length];return i=i.concat(e,[2,r.length],r),new t(i)}function u(e,r,n,i){if((e=new t(e.toArray())).length<r.byteLength()){var u=new t(r.byteLength()-e.length);u.fill(0),e=t.concat([u,e])}var a=n.length,d=o(n,r),f=new t(a);f.fill(1);var c=new t(a);return c.fill(0),c=s(i,c).update(f).update(new t([0])).update(e).update(d).digest(),f=s(i,c).update(f).digest(),c=s(i,c).update(f).update(new t([1])).update(e).update(d).digest(),f=s(i,c).update(f).digest(),{k:c,v:f}}function a(e,t){var r=new l(e),n=(e.length<<3)-t.bitLength();return n>0&&r.ishrn(n),r}function o(e,r){e=(e=a(e,r)).mod(r);var n=new t(e.toArray());if(n.length<r.byteLength()){var i=new t(r.byteLength()-n.length);i.fill(0),n=t.concat([i,n])}return n}function d(e,r,n){var i,u;do{for(i=new t(0);8*i.length<e.bitLength();)r.v=s(n,r.k).update(r.v).digest(),i=t.concat([i,r.v]);u=a(i,e),r.k=s(n,r.k).update(r.v).update(new t([0])).digest(),r.v=s(n,r.k).update(r.v).digest()}while(-1!==u.cmp(e));return u}function f(e,t,r,n){return e.toRed(l.mont(r)).redPow(t).fromRed().mod(n)}var s=r(59),c=r(46),h=r(4).ec,l=r(3),p=r(30),b=r(77);e.exports=function(e,r,i,u,a){var o=p(r);if(o.curve){if("ecdsa"!==u&&"ecdsa/rsa"!==u)throw new Error("wrong private key type");return function(e,r){var n=b[r.curve.join(".")];if(!n)throw new Error("unknown curve "+r.curve.join("."));var i=new h(n).keyFromPrivate(r.privateKey).sign(e);return new t(i.toDER())}(e,o)}if("dsa"===o.type){if("dsa"!==u)throw new Error("wrong private key type");return n(e,o,i)}if("rsa"!==u&&"ecdsa/rsa"!==u)throw new Error("wrong private key type");e=t.concat([a,e]);for(var d=o.modulus.byteLength(),f=[0,1];e.length+f.length+1<d;)f.push(255);f.push(0);for(var s=-1;++s<e.length;)f.push(e[s]);return c(f,o)},e.exports.getKey=u,e.exports.makeKey=d}).call(t,r(0).Buffer)},function(e,t){e.exports={_from:"elliptic@^6.0.0",_id:"elliptic@6.4.0",_inBundle:!1,_integrity:"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",_location:"/elliptic",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"elliptic@^6.0.0",name:"elliptic",escapedName:"elliptic",rawSpec:"^6.0.0",saveSpec:null,fetchSpec:"^6.0.0"},_requiredBy:["/browserify-sign","/create-ecdh"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",_shasum:"cac9af8762c85836187003c8dfe193e5e2eae5df",_spec:"elliptic@^6.0.0",_where:"/Users/jpregelj/js-crypto-conditions/node_modules/browserify-sign",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},bundleDependencies:!1,dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},deprecated:!1,description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.0"}},function(e,t,r){"use strict";var n=t,i=r(3),u=r(5),a=r(73);n.assert=u,n.toArray=a.toArray,n.zero2=a.zero2,n.toHex=a.toHex,n.encode=a.encode,n.getNAF=function(e,t){for(var r=[],n=1<<t+1,i=e.clone();i.cmpn(1)>=0;){var u;if(i.isOdd()){var a=i.andln(n-1);u=a>(n>>1)-1?(n>>1)-a:a,i.isubn(u)}else u=0;r.push(u);for(var o=0!==i.cmpn(0)&&0===i.andln(n-1)?t+1:1,d=1;d<o;d++)r.push(0);i.iushrn(o)}return r},n.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var n=0,i=0;e.cmpn(-n)>0||t.cmpn(-i)>0;){var u,a,o=e.andln(3)+n&3,d=t.andln(3)+i&3;if(3===o&&(o=-1),3===d&&(d=-1),0==(1&o))u=0;else{var f=e.andln(7)+n&7;u=3!==f&&5!==f||2!==d?o:-o}if(r[0].push(u),0==(1&d))a=0;else{var f=t.andln(7)+i&7;a=3!==f&&5!==f||2!==o?d:-d}r[1].push(a),2*n===u+1&&(n=1-n),2*i===a+1&&(i=1-i),e.iushrn(1),t.iushrn(1)}return r},n.cachedProperty=function(e,t,r){var n="_"+t;e.prototype[t]=function(){return void 0!==this[n]?this[n]:this[n]=r.call(this)}},n.parseBytes=function(e){return"string"==typeof e?n.toArray(e,"hex"):e},n.intFromLE=function(e){return new i(e,"hex","le")}},function(e,t,r){"use strict";function n(e,t){this.type=e,this.p=new u(t.p,16),this.red=t.prime?u.red(t.prime):u.mont(this.p),this.zero=new u(0).toRed(this.red),this.one=new u(1).toRed(this.red),this.two=new u(2).toRed(this.red),this.n=t.n&&new u(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4);var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}function i(e,t){this.curve=e,this.type=t,this.precomputed=null}var u=r(3),a=r(4),o=a.utils,d=o.getNAF,f=o.getJSF,s=o.assert;e.exports=n,n.prototype.point=function(){throw new Error("Not implemented")},n.prototype.validate=function(){throw new Error("Not implemented")},n.prototype._fixedNafMul=function(e,t){s(e.precomputed);var r=e._getDoubles(),n=d(t,1),i=(1<<r.step+1)-(r.step%2==0?2:1);i/=3;for(var u=[],a=0;a<n.length;a+=r.step){for(var o=0,t=a+r.step-1;t>=a;t--)o=(o<<1)+n[t];u.push(o)}for(var f=this.jpoint(null,null,null),c=this.jpoint(null,null,null),h=i;h>0;h--){for(var a=0;a<u.length;a++){var o=u[a];o===h?c=c.mixedAdd(r.points[a]):o===-h&&(c=c.mixedAdd(r.points[a].neg()))}f=f.add(c)}return f.toP()},n.prototype._wnafMul=function(e,t){var r=4,n=e._getNAFPoints(r);r=n.wnd;for(var i=n.points,u=d(t,r),a=this.jpoint(null,null,null),o=u.length-1;o>=0;o--){for(var t=0;o>=0&&0===u[o];o--)t++;if(o>=0&&t++,a=a.dblp(t),o<0)break;var f=u[o];s(0!==f),a="affine"===e.type?f>0?a.mixedAdd(i[f-1>>1]):a.mixedAdd(i[-f-1>>1].neg()):f>0?a.add(i[f-1>>1]):a.add(i[-f-1>>1].neg())}return"affine"===e.type?a.toP():a},n.prototype._wnafMulAdd=function(e,t,r,n,i){for(var u=this._wnafT1,a=this._wnafT2,o=this._wnafT3,s=0,c=0;c<n;c++){var h=t[c],l=h._getNAFPoints(e);u[c]=l.wnd,a[c]=l.points}for(var c=n-1;c>=1;c-=2){var p=c-1,b=c;if(1===u[p]&&1===u[b]){var y=[t[p],null,null,t[b]];0===t[p].y.cmp(t[b].y)?(y[1]=t[p].add(t[b]),y[2]=t[p].toJ().mixedAdd(t[b].neg())):0===t[p].y.cmp(t[b].y.redNeg())?(y[1]=t[p].toJ().mixedAdd(t[b]),y[2]=t[p].add(t[b].neg())):(y[1]=t[p].toJ().mixedAdd(t[b]),y[2]=t[p].toJ().mixedAdd(t[b].neg()));var m=[-3,-1,-5,-7,0,7,5,1,3],g=f(r[p],r[b]);s=Math.max(g[0].length,s),o[p]=new Array(s),o[b]=new Array(s);for(var v=0;v<s;v++){var _=0|g[0][v],w=0|g[1][v];o[p][v]=m[3*(_+1)+(w+1)],o[b][v]=0,a[p]=y}}else o[p]=d(r[p],u[p]),o[b]=d(r[b],u[b]),s=Math.max(o[p].length,s),s=Math.max(o[b].length,s)}for(var S=this.jpoint(null,null,null),E=this._wnafT4,c=s;c>=0;c--){for(var A=0;c>=0;){for(var x=!0,v=0;v<n;v++)E[v]=0|o[v][c],0!==E[v]&&(x=!1);if(!x)break;A++,c--}if(c>=0&&A++,S=S.dblp(A),c<0)break;for(var v=0;v<n;v++){var k=E[v];0!==k&&(k>0?h=a[v][k-1>>1]:k<0&&(h=a[v][-k-1>>1].neg()),S="affine"===h.type?S.mixedAdd(h):S.add(h))}}for(var c=0;c<n;c++)a[c]=null;return i?S:S.toP()},n.BasePoint=i,i.prototype.eq=function(){throw new Error("Not implemented")},i.prototype.validate=function(){return this.curve.validate(this)},n.prototype.decodePoint=function(e,t){e=o.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r)return 6===e[0]?s(e[e.length-1]%2==0):7===e[0]&&s(e[e.length-1]%2==1),this.point(e.slice(1,1+r),e.slice(1+r,1+2*r));if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw new Error("Unknown point format")},i.prototype.encodeCompressed=function(e){return this.encode(e,!0)},i.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},i.prototype.encode=function(e,t){return o.encode(this._encode(t),e)},i.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},i.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},i.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],n=this,i=0;i<t;i+=e){for(var u=0;u<e;u++)n=n.dbl();r.push(n)}return{step:e,points:r}},i.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,n=1===r?null:this.dbl(),i=1;i<r;i++)t[i]=t[i-1].add(n);return{wnd:e,points:t}},i.prototype._getBeta=function(){return null},i.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}},function(e,t,r){"use strict";function n(e){s.call(this,"short",e),this.a=new d(e.a,16).toRed(this.red),this.b=new d(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}function i(e,t,r,n){s.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new d(t,16),this.y=new d(r,16),n&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function u(e,t,r,n){s.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===n?(this.x=this.curve.one,this.y=this.curve.one,this.z=new d(0)):(this.x=new d(t,16),this.y=new d(r,16),this.z=new d(n,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}var a=r(29),o=r(4),d=r(3),f=r(1),s=a.base,c=o.utils.assert;f(n,s),e.exports=n,n.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r,n;if(e.beta)t=new d(e.beta,16).toRed(this.red);else{var i=this._getEndoRoots(this.p);t=(t=i[0].cmp(i[1])<0?i[0]:i[1]).toRed(this.red)}if(e.lambda)r=new d(e.lambda,16);else{var u=this._getEndoRoots(this.n);0===this.g.mul(u[0]).x.cmp(this.g.x.redMul(t))?r=u[0]:(r=u[1],c(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}return n=e.basis?e.basis.map(function(e){return{a:new d(e.a,16),b:new d(e.b,16)}}):this._getEndoBasis(r),{beta:t,lambda:r,basis:n}}},n.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:d.mont(e),r=new d(2).toRed(t).redInvm(),n=r.redNeg(),i=new d(3).toRed(t).redNeg().redSqrt().redMul(r);return[n.redAdd(i).fromRed(),n.redSub(i).fromRed()]},n.prototype._getEndoBasis=function(e){for(var t,r,n,i,u,a,o,f,s,c=this.n.ushrn(Math.floor(this.n.bitLength()/2)),h=e,l=this.n.clone(),p=new d(1),b=new d(0),y=new d(0),m=new d(1),g=0;0!==h.cmpn(0);){var v=l.div(h);f=l.sub(v.mul(h)),s=y.sub(v.mul(p));var _=m.sub(v.mul(b));if(!n&&f.cmp(c)<0)t=o.neg(),r=p,n=f.neg(),i=s;else if(n&&2==++g)break;o=f,l=h,h=f,y=p,p=s,m=b,b=_}u=f.neg(),a=s;var w=n.sqr().add(i.sqr());return u.sqr().add(a.sqr()).cmp(w)>=0&&(u=t,a=r),n.negative&&(n=n.neg(),i=i.neg()),u.negative&&(u=u.neg(),a=a.neg()),[{a:n,b:i},{a:u,b:a}]},n.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],n=t[1],i=n.b.mul(e).divRound(this.n),u=r.b.neg().mul(e).divRound(this.n),a=i.mul(r.a),o=u.mul(n.a),d=i.mul(r.b),f=u.mul(n.b);return{k1:e.sub(a).sub(o),k2:d.add(f).neg()}},n.prototype.pointFromX=function(e,t){(e=new d(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),n=r.redSqrt();if(0!==n.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var i=n.fromRed().isOdd();return(t&&!i||!t&&i)&&(n=n.redNeg()),this.point(e,n)},n.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,n=this.a.redMul(t),i=t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);return 0===r.redSqr().redISub(i).cmpn(0)},n.prototype._endoWnafMulAdd=function(e,t,r){for(var n=this._endoWnafT1,i=this._endoWnafT2,u=0;u<e.length;u++){var a=this._endoSplit(t[u]),o=e[u],d=o._getBeta();a.k1.negative&&(a.k1.ineg(),o=o.neg(!0)),a.k2.negative&&(a.k2.ineg(),d=d.neg(!0)),n[2*u]=o,n[2*u+1]=d,i[2*u]=a.k1,i[2*u+1]=a.k2}for(var f=this._wnafMulAdd(1,n,i,2*u,r),s=0;s<2*u;s++)n[s]=null,i[s]=null;return f},f(i,s.BasePoint),n.prototype.point=function(e,t,r){return new i(this,e,t,r)},n.prototype.pointFromJSON=function(e,t){return i.fromJSON(this,e,t)},i.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,n=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(n)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(n)}}}return t}},i.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},i.fromJSON=function(e,t,r){function n(t){return e.point(t[0],t[1],r)}"string"==typeof t&&(t=JSON.parse(t));var i=e.point(t[0],t[1],r);if(!t[2])return i;var u=t[2];return i.precomputed={beta:null,doubles:u.doubles&&{step:u.doubles.step,points:[i].concat(u.doubles.points.map(n))},naf:u.naf&&{wnd:u.naf.wnd,points:[i].concat(u.naf.points.map(n))}},i},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return this.inf},i.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),n=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,n)},i.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),n=e.redInvm(),i=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),u=i.redSqr().redISub(this.x.redAdd(this.x)),a=i.redMul(this.x.redSub(u)).redISub(this.y);return this.curve.point(u,a)},i.prototype.getX=function(){return this.x.fromRed()},i.prototype.getY=function(){return this.y.fromRed()},i.prototype.mul=function(e){return e=new d(e,16),this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},i.prototype.mulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i):this.curve._wnafMulAdd(1,n,i,2)},i.prototype.jmulAdd=function(e,t,r){var n=[this,t],i=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(n,i,!0):this.curve._wnafMulAdd(1,n,i,2,!0)},i.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},i.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,n=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(n)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(n)}}}return t},i.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},f(u,s.BasePoint),n.prototype.jpoint=function(e,t,r){return new u(this,e,t,r)},u.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),n=this.y.redMul(t).redMul(e);return this.curve.point(r,n)},u.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},u.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),n=this.x.redMul(t),i=e.x.redMul(r),u=this.y.redMul(t.redMul(e.z)),a=e.y.redMul(r.redMul(this.z)),o=n.redSub(i),d=u.redSub(a);if(0===o.cmpn(0))return 0!==d.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var f=o.redSqr(),s=f.redMul(o),c=n.redMul(f),h=d.redSqr().redIAdd(s).redISub(c).redISub(c),l=d.redMul(c.redISub(h)).redISub(u.redMul(s)),p=this.z.redMul(e.z).redMul(o);return this.curve.jpoint(h,l,p)},u.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,n=e.x.redMul(t),i=this.y,u=e.y.redMul(t).redMul(this.z),a=r.redSub(n),o=i.redSub(u);if(0===a.cmpn(0))return 0!==o.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var d=a.redSqr(),f=d.redMul(a),s=r.redMul(d),c=o.redSqr().redIAdd(f).redISub(s).redISub(s),h=o.redMul(s.redISub(c)).redISub(i.redMul(f)),l=this.z.redMul(a);return this.curve.jpoint(c,h,l)},u.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();if(this.curve.zeroA||this.curve.threeA){for(var t=this,r=0;r<e;r++)t=t.dbl();return t}for(var n=this.curve.a,i=this.curve.tinv,u=this.x,a=this.y,o=this.z,d=o.redSqr().redSqr(),f=a.redAdd(a),r=0;r<e;r++){var s=u.redSqr(),c=f.redSqr(),h=c.redSqr(),l=s.redAdd(s).redIAdd(s).redIAdd(n.redMul(d)),p=u.redMul(c),b=l.redSqr().redISub(p.redAdd(p)),y=p.redISub(b),m=l.redMul(y);m=m.redIAdd(m).redISub(h);var g=f.redMul(o);r+1<e&&(d=d.redMul(h)),u=b,o=g,f=m}return this.curve.jpoint(u,f.redMul(i),o)},u.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},u.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),u=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(u);a=a.redIAdd(a);var o=n.redAdd(n).redIAdd(n),d=o.redSqr().redISub(a).redISub(a),f=u.redIAdd(u);f=(f=f.redIAdd(f)).redIAdd(f),e=d,t=o.redMul(a.redISub(d)).redISub(f),r=this.y.redAdd(this.y)}else{var s=this.x.redSqr(),c=this.y.redSqr(),h=c.redSqr(),l=this.x.redAdd(c).redSqr().redISub(s).redISub(h);l=l.redIAdd(l);var p=s.redAdd(s).redIAdd(s),b=p.redSqr(),y=h.redIAdd(h);y=(y=y.redIAdd(y)).redIAdd(y),e=b.redISub(l).redISub(l),t=p.redMul(l.redISub(e)).redISub(y),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(e,t,r)},u.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var n=this.x.redSqr(),i=this.y.redSqr(),u=i.redSqr(),a=this.x.redAdd(i).redSqr().redISub(n).redISub(u);a=a.redIAdd(a);var o=n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),d=o.redSqr().redISub(a).redISub(a);e=d;var f=u.redIAdd(u);f=(f=f.redIAdd(f)).redIAdd(f),t=o.redMul(a.redISub(d)).redISub(f),r=this.y.redAdd(this.y)}else{var s=this.z.redSqr(),c=this.y.redSqr(),h=this.x.redMul(c),l=this.x.redSub(s).redMul(this.x.redAdd(s));l=l.redAdd(l).redIAdd(l);var p=h.redIAdd(h),b=(p=p.redIAdd(p)).redAdd(p);e=l.redSqr().redISub(b),r=this.y.redAdd(this.z).redSqr().redISub(c).redISub(s);var y=c.redSqr();y=(y=(y=y.redIAdd(y)).redIAdd(y)).redIAdd(y),t=l.redMul(p.redISub(e)).redISub(y)}return this.curve.jpoint(e,t,r)},u.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,n=this.z,i=n.redSqr().redSqr(),u=t.redSqr(),a=r.redSqr(),o=u.redAdd(u).redIAdd(u).redIAdd(e.redMul(i)),d=t.redAdd(t),f=(d=d.redIAdd(d)).redMul(a),s=o.redSqr().redISub(f.redAdd(f)),c=f.redISub(s),h=a.redSqr();h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var l=o.redMul(c).redISub(h),p=r.redAdd(r).redMul(n);return this.curve.jpoint(s,l,p)},u.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),n=t.redSqr(),i=e.redAdd(e).redIAdd(e),u=i.redSqr(),a=this.x.redAdd(t).redSqr().redISub(e).redISub(n),o=(a=(a=(a=a.redIAdd(a)).redAdd(a).redIAdd(a)).redISub(u)).redSqr(),d=n.redIAdd(n);d=(d=(d=d.redIAdd(d)).redIAdd(d)).redIAdd(d);var f=i.redIAdd(a).redSqr().redISub(u).redISub(o).redISub(d),s=t.redMul(f);s=(s=s.redIAdd(s)).redIAdd(s);var c=this.x.redMul(o).redISub(s);c=(c=c.redIAdd(c)).redIAdd(c);var h=this.y.redMul(f.redMul(d.redISub(f)).redISub(a.redMul(o)));h=(h=(h=h.redIAdd(h)).redIAdd(h)).redIAdd(h);var l=this.z.redAdd(a).redSqr().redISub(r).redISub(o);return this.curve.jpoint(c,h,l)},u.prototype.mul=function(e,t){return e=new d(e,t),this.curve._wnafMul(this,e)},u.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var n=t.redMul(this.z),i=r.redMul(e.z);return 0===this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)},u.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var n=e.clone(),i=this.curve.redN.redMul(t);;){if(n.iadd(this.curve.n),n.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(i),0===this.x.cmp(r))return!0}return!1},u.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},u.prototype.isInfinity=function(){return 0===this.z.cmpn(0)}},function(e,t,r){"use strict";function n(e){d.call(this,"mont",e),this.a=new a(e.a,16).toRed(this.red),this.b=new a(e.b,16).toRed(this.red),this.i4=new a(4).toRed(this.red).redInvm(),this.two=new a(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}function i(e,t,r){d.BasePoint.call(this,e,"projective"),null===t&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):(this.x=new a(t,16),this.z=new a(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)))}var u=r(29),a=r(3),o=r(1),d=u.base,f=r(4),s=f.utils;o(n,d),e.exports=n,n.prototype.validate=function(e){var t=e.normalize().x,r=t.redSqr(),n=r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t);return 0===n.redSqrt().redSqr().cmp(n)},o(i,d.BasePoint),n.prototype.decodePoint=function(e,t){return this.point(s.toArray(e,t),1)},n.prototype.point=function(e,t){return new i(this,e,t)},n.prototype.pointFromJSON=function(e){return i.fromJSON(this,e)},i.prototype.precompute=function(){},i.prototype._encode=function(){return this.getX().toArray("be",this.curve.p.byteLength())},i.fromJSON=function(e,t){return new i(e,t[0],t[1]||e.one)},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.z.cmpn(0)},i.prototype.dbl=function(){var e=this.x.redAdd(this.z),t=e.redSqr(),r=this.x.redSub(this.z),n=r.redSqr(),i=t.redSub(n),u=t.redMul(n),a=i.redMul(n.redAdd(this.curve.a24.redMul(i)));return this.curve.point(u,a)},i.prototype.add=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.diffAdd=function(e,t){var r=this.x.redAdd(this.z),n=this.x.redSub(this.z),i=e.x.redAdd(e.z),u=e.x.redSub(e.z),a=u.redMul(r),o=i.redMul(n),d=t.z.redMul(a.redAdd(o).redSqr()),f=t.x.redMul(a.redISub(o).redSqr());return this.curve.point(d,f)},i.prototype.mul=function(e){for(var t=e.clone(),r=this,n=this.curve.point(null,null),i=[];0!==t.cmpn(0);t.iushrn(1))i.push(t.andln(1));for(var u=i.length-1;u>=0;u--)0===i[u]?(r=r.diffAdd(n,this),n=n.dbl()):(n=r.diffAdd(n,this),r=r.dbl());return n},i.prototype.mulAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.jumlAdd=function(){throw new Error("Not supported on Montgomery curve")},i.prototype.eq=function(e){return 0===this.getX().cmp(e.getX())},i.prototype.normalize=function(){return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()}},function(e,t,r){"use strict";function n(e){this.twisted=1!=(0|e.a),this.mOneA=this.twisted&&-1==(0|e.a),this.extended=this.mOneA,f.call(this,"edwards",e),this.a=new o(e.a,16).umod(this.red.m),this.a=this.a.toRed(this.red),this.c=new o(e.c,16).toRed(this.red),this.c2=this.c.redSqr(),this.d=new o(e.d,16).toRed(this.red),this.dd=this.d.redAdd(this.d),s(!this.twisted||0===this.c.fromRed().cmpn(1)),this.oneC=1==(0|e.c)}function i(e,t,r,n,i){f.BasePoint.call(this,e,"projective"),null===t&&null===r&&null===n?(this.x=this.curve.zero,this.y=this.curve.one,this.z=this.curve.one,this.t=this.curve.zero,this.zOne=!0):(this.x=new o(t,16),this.y=new o(r,16),this.z=n?new o(n,16):this.curve.one,this.t=i&&new o(i,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.t&&!this.t.red&&(this.t=this.t.toRed(this.curve.red)),this.zOne=this.z===this.curve.one,this.curve.extended&&!this.t&&(this.t=this.x.redMul(this.y),this.zOne||(this.t=this.t.redMul(this.z.redInvm()))))}var u=r(29),a=r(4),o=r(3),d=r(1),f=u.base,s=a.utils.assert;d(n,f),e.exports=n,n.prototype._mulA=function(e){return this.mOneA?e.redNeg():this.a.redMul(e)},n.prototype._mulC=function(e){return this.oneC?e:this.c.redMul(e)},n.prototype.jpoint=function(e,t,r,n){return this.point(e,t,r,n)},n.prototype.pointFromX=function(e,t){(e=new o(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr(),n=this.c2.redSub(this.a.redMul(r)),i=this.one.redSub(this.c2.redMul(this.d).redMul(r)),u=n.redMul(i.redInvm()),a=u.redSqrt();if(0!==a.redSqr().redSub(u).cmp(this.zero))throw new Error("invalid point");var d=a.fromRed().isOdd();return(t&&!d||!t&&d)&&(a=a.redNeg()),this.point(e,a)},n.prototype.pointFromY=function(e,t){(e=new o(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr(),n=r.redSub(this.one),i=r.redMul(this.d).redAdd(this.one),u=n.redMul(i.redInvm());if(0===u.cmp(this.zero)){if(t)throw new Error("invalid point");return this.point(this.zero,e)}var a=u.redSqrt();if(0!==a.redSqr().redSub(u).cmp(this.zero))throw new Error("invalid point");return a.isOdd()!==t&&(a=a.redNeg()),this.point(a,e)},n.prototype.validate=function(e){if(e.isInfinity())return!0;e.normalize();var t=e.x.redSqr(),r=e.y.redSqr(),n=t.redMul(this.a).redAdd(r),i=this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));return 0===n.cmp(i)},d(i,f.BasePoint),n.prototype.pointFromJSON=function(e){return i.fromJSON(this,e)},n.prototype.point=function(e,t,r,n){return new i(this,e,t,r,n)},i.fromJSON=function(e,t){return new i(e,t[0],t[1],t[2])},i.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,2)+">"},i.prototype.isInfinity=function(){return 0===this.x.cmpn(0)&&0===this.y.cmp(this.z)},i.prototype._extDbl=function(){var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr();r=r.redIAdd(r);var n=this.curve._mulA(e),i=this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),u=n.redAdd(t),a=u.redSub(r),o=n.redSub(t),d=i.redMul(a),f=u.redMul(o),s=i.redMul(o),c=a.redMul(u);return this.curve.point(d,f,c,s)},i.prototype._projDbl=function(){var e,t,r,n=this.x.redAdd(this.y).redSqr(),i=this.x.redSqr(),u=this.y.redSqr();if(this.curve.twisted){var a=this.curve._mulA(i),o=a.redAdd(u);if(this.zOne)e=n.redSub(i).redSub(u).redMul(o.redSub(this.curve.two)),t=o.redMul(a.redSub(u)),r=o.redSqr().redSub(o).redSub(o);else{var d=this.z.redSqr(),f=o.redSub(d).redISub(d);e=n.redSub(i).redISub(u).redMul(f),t=o.redMul(a.redSub(u)),r=o.redMul(f)}}else{var a=i.redAdd(u),d=this.curve._mulC(this.c.redMul(this.z)).redSqr(),f=a.redSub(d).redSub(d);e=this.curve._mulC(n.redISub(a)).redMul(f),t=this.curve._mulC(a).redMul(i.redISub(u)),r=a.redMul(f)}return this.curve.point(e,t,r)},i.prototype.dbl=function(){return this.isInfinity()?this:this.curve.extended?this._extDbl():this._projDbl()},i.prototype._extAdd=function(e){var t=this.y.redSub(this.x).redMul(e.y.redSub(e.x)),r=this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),n=this.t.redMul(this.curve.dd).redMul(e.t),i=this.z.redMul(e.z.redAdd(e.z)),u=r.redSub(t),a=i.redSub(n),o=i.redAdd(n),d=r.redAdd(t),f=u.redMul(a),s=o.redMul(d),c=u.redMul(d),h=a.redMul(o);return this.curve.point(f,s,h,c)},i.prototype._projAdd=function(e){var t,r,n=this.z.redMul(e.z),i=n.redSqr(),u=this.x.redMul(e.x),a=this.y.redMul(e.y),o=this.curve.d.redMul(u).redMul(a),d=i.redSub(o),f=i.redAdd(o),s=this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(u).redISub(a),c=n.redMul(d).redMul(s);return this.curve.twisted?(t=n.redMul(f).redMul(a.redSub(this.curve._mulA(u))),r=d.redMul(f)):(t=n.redMul(f).redMul(a.redSub(u)),r=this.curve._mulC(d).redMul(f)),this.curve.point(c,t,r)},i.prototype.add=function(e){return this.isInfinity()?e:e.isInfinity()?this:this.curve.extended?this._extAdd(e):this._projAdd(e)},i.prototype.mul=function(e){return this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve._wnafMul(this,e)},i.prototype.mulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!1)},i.prototype.jmulAdd=function(e,t,r){return this.curve._wnafMulAdd(1,[this,t],[e,r],2,!0)},i.prototype.normalize=function(){if(this.zOne)return this;var e=this.z.redInvm();return this.x=this.x.redMul(e),this.y=this.y.redMul(e),this.t&&(this.t=this.t.redMul(e)),this.z=this.curve.one,this.zOne=!0,this},i.prototype.neg=function(){return this.curve.point(this.x.redNeg(),this.y,this.z,this.t&&this.t.redNeg())},i.prototype.getX=function(){return this.normalize(),this.x.fromRed()},i.prototype.getY=function(){return this.normalize(),this.y.fromRed()},i.prototype.eq=function(e){return this===e||0===this.getX().cmp(e.getX())&&0===this.getY().cmp(e.getY())},i.prototype.eqXToP=function(e){var t=e.toRed(this.curve.red).redMul(this.z);if(0===this.x.cmp(t))return!0;for(var r=e.clone(),n=this.curve.redN.redMul(this.z);;){if(r.iadd(this.curve.n),r.cmp(this.curve.p)>=0)return!1;if(t.redIAdd(n),0===this.x.cmp(t))return!0}return!1},i.prototype.toP=i.prototype.normalize,i.prototype.mixedAdd=i.prototype.add},function(e,t,r){"use strict";function n(e){"short"===e.type?this.curve=new d.curve.short(e):"edwards"===e.type?this.curve=new d.curve.edwards(e):this.curve=new d.curve.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,f(this.g.validate(),"Invalid curve"),f(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function i(e,t){Object.defineProperty(a,e,{configurable:!0,enumerable:!0,get:function(){var r=new n(t);return Object.defineProperty(a,e,{configurable:!0,enumerable:!0,value:r}),r}})}var u,a=t,o=r(47),d=r(4),f=d.utils.assert;a.PresetCurve=n,i("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:o.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),i("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:o.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),i("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:o.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),i("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:o.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),i("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:o.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),i("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["9"]}),i("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:o.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{u=r(165)}catch(e){u=void 0}i("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:o.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",u]})},function(e,t,r){"use strict";t.sha1=r(160),t.sha224=r(161),t.sha256=r(75),t.sha384=r(162),t.sha512=r(76)},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;c.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}var i=r(7),u=r(21),a=r(74),o=i.rotl32,d=i.sum32,f=i.sum32_5,s=a.ft_1,c=u.BlockHash,h=[1518500249,1859775393,2400959708,3395469782];i.inherits(n,c),e.exports=n,n.blockSize=512,n.outSize=160,n.hmacStrength=80,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.W,n=0;n<16;n++)r[n]=e[t+n];for(;n<r.length;n++)r[n]=o(r[n-3]^r[n-8]^r[n-14]^r[n-16],1);var i=this.h[0],u=this.h[1],a=this.h[2],c=this.h[3],l=this.h[4];for(n=0;n<r.length;n++){var p=~~(n/20),b=f(o(i,5),s(p,u,a,c),l,r[n],h[p]);l=c,c=a,a=o(u,30),u=i,i=b}this.h[0]=d(this.h[0],i),this.h[1]=d(this.h[1],u),this.h[2]=d(this.h[2],a),this.h[3]=d(this.h[3],c),this.h[4]=d(this.h[4],l)},n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h,"big"):i.split32(this.h,"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;u.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}var i=r(7),u=r(75);i.inherits(n,u),e.exports=n,n.blockSize=512,n.outSize=224,n.hmacStrength=192,n.padLength=64,n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h.slice(0,7),"big"):i.split32(this.h.slice(0,7),"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;u.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}var i=r(7),u=r(76);i.inherits(n,u),e.exports=n,n.blockSize=1024,n.outSize=384,n.hmacStrength=192,n.padLength=128,n.prototype._digest=function(e){return"hex"===e?i.toHex32(this.h.slice(0,12),"big"):i.split32(this.h.slice(0,12),"big")}},function(e,t,r){"use strict";function n(){if(!(this instanceof n))return new n;l.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function i(e,t,r,n){return e<=15?t^r^n:e<=31?t&r|~t&n:e<=47?(t|~r)^n:e<=63?t&n|r&~n:t^(r|~n)}function u(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function a(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}var o=r(7),d=r(21),f=o.rotl32,s=o.sum32,c=o.sum32_3,h=o.sum32_4,l=d.BlockHash;o.inherits(n,l),t.ripemd160=n,n.blockSize=512,n.outSize=160,n.hmacStrength=192,n.padLength=64,n.prototype._update=function(e,t){for(var r=this.h[0],n=this.h[1],o=this.h[2],d=this.h[3],l=this.h[4],g=r,v=n,_=o,w=d,S=l,E=0;E<80;E++){var A=s(f(h(r,i(E,n,o,d),e[p[E]+t],u(E)),y[E]),l);r=l,l=d,d=f(o,10),o=n,n=A,A=s(f(h(g,i(79-E,v,_,w),e[b[E]+t],a(E)),m[E]),S),g=S,S=w,w=f(_,10),_=v,v=A}A=c(this.h[1],o,w),this.h[1]=c(this.h[2],d,S),this.h[2]=c(this.h[3],l,g),this.h[3]=c(this.h[4],r,v),this.h[4]=c(this.h[0],n,_),this.h[0]=A},n.prototype._digest=function(e){return"hex"===e?o.toHex32(this.h,"little"):o.split32(this.h,"little")};var p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],b=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],y=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],m=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]},function(e,t,r){"use strict";function n(e,t,r){if(!(this instanceof n))return new n(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(i.toArray(t,r))}var i=r(7),u=r(5);e.exports=n,n.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),u(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},n.prototype.update=function(e,t){return this.inner.update(e,t),this},n.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)}},function(e,t){e.exports={doubles:{step:4,points:[["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a","f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508","11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739","d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c","4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda","96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa","5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0","cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d","9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d","e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1","9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0","5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047","10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862","283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7","7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd","56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83","7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a","53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8","bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d","4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725","7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754","4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c","17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6","6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39","c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891","893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b","febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03","2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d","eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070","7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4","e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da","662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11","1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e","efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41","2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef","67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8","db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d","648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96","35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd","ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5","9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266","40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71","34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac","c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751","1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e","493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241","c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3","be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f","4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19","aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be","b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9","6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2","8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13","7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c","ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba","2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151","e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073","d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458","38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b","69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366","d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa","40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0","620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787","7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e","ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]]},naf:{wnd:7,points:[["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9","388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4","d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc","6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe","cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb","d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8","ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e","581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34","4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c","85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5","321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f","2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714","73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729","a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db","2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4","e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5","b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479","2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d","80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f","1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb","d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9","eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963","758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74","958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530","e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b","5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247","cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1","cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120","4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435","91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18","673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8","59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb","3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f","55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143","efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba","e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45","f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a","744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e","c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8","e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c","30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519","e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab","100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca","ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf","8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610","68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4","f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c","d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940","edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980","a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3","66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf","9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63","4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448","fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf","5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5","8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6","8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5","5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99","f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51","f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5","42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5","204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997","4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881","73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5","39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66","d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726","ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede","6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94","60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31","3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51","b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252","ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5","cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b","6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4","322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f","6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889","2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246","b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984","998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a","b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030","bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197","6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593","c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef","21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38","60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a","49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111","5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502","7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea","be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26","8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986","39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e","62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4","25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda","ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859","cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f","f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c","6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942","fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a","1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80","5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d","438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1","cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63","c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352","6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193","ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00","9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58","ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7","d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8","c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e","67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d","cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b","299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f","f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6","462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297","62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a","7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c","ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52","4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb","bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065","bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917","603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9","cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3","553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57","712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66","ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8","9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721","9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180","4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]]}}},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);"string"==typeof e&&(d(a.curves.hasOwnProperty(e),"Unknown curve "+e),e=a.curves[e]),e instanceof a.curves.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var i=r(3),u=r(167),a=r(4),o=a.utils,d=o.assert,f=r(168),s=r(169);e.exports=n,n.prototype.keyPair=function(e){return new f(this,e)},n.prototype.keyFromPrivate=function(e,t){return f.fromPrivate(this,e,t)},n.prototype.keyFromPublic=function(e,t){return f.fromPublic(this,e,t)},n.prototype.genKeyPair=function(e){e||(e={});for(var t=new u({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||a.rand(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),n=this.n.sub(new i(2));;){var o=new i(t.generate(r));if(!(o.cmp(n)>0))return o.iaddn(1),this.keyFromPrivate(o)}},n.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},n.prototype.sign=function(e,t,r,n){"object"==typeof r&&(n=r,r=null),n||(n={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new i(e,16));for(var a=this.n.byteLength(),o=t.getPrivate().toArray("be",a),d=e.toArray("be",a),f=new u({hash:this.hash,entropy:o,nonce:d,pers:n.pers,persEnc:n.persEnc||"utf8"}),c=this.n.sub(new i(1)),h=0;;h++){var l=n.k?n.k(h):new i(f.generate(this.n.byteLength()));if(!((l=this._truncateToN(l,!0)).cmpn(1)<=0||l.cmp(c)>=0)){var p=this.g.mul(l);if(!p.isInfinity()){var b=p.getX(),y=b.umod(this.n);if(0!==y.cmpn(0)){var m=l.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));if(0!==(m=m.umod(this.n)).cmpn(0)){var g=(p.getY().isOdd()?1:0)|(0!==b.cmp(y)?2:0);return n.canonical&&m.cmp(this.nh)>0&&(m=this.n.sub(m),g^=1),new s({r:y,s:m,recoveryParam:g})}}}}}},n.prototype.verify=function(e,t,r,n){e=this._truncateToN(new i(e,16)),r=this.keyFromPublic(r,n);var u=(t=new s(t,"hex")).r,a=t.s;if(u.cmpn(1)<0||u.cmp(this.n)>=0)return!1;if(a.cmpn(1)<0||a.cmp(this.n)>=0)return!1;var o=a.invm(this.n),d=o.mul(e).umod(this.n),f=o.mul(u).umod(this.n);if(!this.curve._maxwellTrick){var c=this.g.mulAdd(d,r.getPublic(),f);return!c.isInfinity()&&0===c.getX().umod(this.n).cmp(u)}var c=this.g.jmulAdd(d,r.getPublic(),f);return!c.isInfinity()&&c.eqXToP(u)},n.prototype.recoverPubKey=function(e,t,r,n){d((3&r)===r,"The recovery param is more than two bits"),t=new s(t,n);var u=this.n,a=new i(e),o=t.r,f=t.s,c=1&r,h=r>>1;if(o.cmp(this.curve.p.umod(this.curve.n))>=0&&h)throw new Error("Unable to find sencond key candinate");o=h?this.curve.pointFromX(o.add(this.curve.n),c):this.curve.pointFromX(o,c);var l=t.r.invm(u),p=u.sub(a).mul(l).umod(u),b=f.mul(l).umod(u);return this.g.mulAdd(p,o,b)},n.prototype.getKeyRecoveryParam=function(e,t,r,n){if(null!==(t=new s(t,n)).recoveryParam)return t.recoveryParam;for(var i=0;i<4;i++){var u;try{u=this.recoverPubKey(e,t,i)}catch(e){continue}if(u.eq(r))return i}throw new Error("Unable to find valid recovery factor")}},function(e,t,r){"use strict";function n(e){if(!(this instanceof n))return new n(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=u.toArray(e.entropy,e.entropyEnc||"hex"),r=u.toArray(e.nonce,e.nonceEnc||"hex"),i=u.toArray(e.pers,e.persEnc||"hex");a(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i)}var i=r(47),u=r(73),a=r(5);e.exports=n,n.prototype._init=function(e,t,r){var n=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var i=0;i<this.V.length;i++)this.K[i]=0,this.V[i]=1;this._update(n),this._reseed=1,this.reseedInterval=281474976710656},n.prototype._hmac=function(){return new i.hmac(this.hash,this.K)},n.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},n.prototype.reseed=function(e,t,r,n){"string"!=typeof t&&(n=r,r=t,t=null),e=u.toArray(e,t),r=u.toArray(r,n),a(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},n.prototype.generate=function(e,t,r,n){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof t&&(n=r,r=t,t=null),r&&(r=u.toArray(r,n||"hex"),this._update(r));for(var i=[];i.length<e;)this.V=this._hmac().update(this.V).digest(),i=i.concat(this.V);var a=i.slice(0,e);return this._update(r),this._reseed++,u.encode(a,t)}},function(e,t,r){"use strict";function n(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var i=r(3),u=r(4),a=u.utils,o=a.assert;e.exports=n,n.fromPublic=function(e,t,r){return t instanceof n?t:new n(e,{pub:t,pubEnc:r})},n.fromPrivate=function(e,t,r){return t instanceof n?t:new n(e,{priv:t,privEnc:r})},n.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},n.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},n.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},n.prototype._importPrivate=function(e,t){this.priv=new i(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},n.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?o(e.x,"Need x coordinate"):"short"!==this.ec.curve.type&&"edwards"!==this.ec.curve.type||o(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},n.prototype.derive=function(e){return e.mul(this.priv).getX()},n.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},n.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},n.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"}},function(e,t,r){"use strict";function n(e,t){if(e instanceof n)return e;this._importDER(e,t)||(s(e.r&&e.s,"Signature without r or s"),this.r=new o(e.r,16),this.s=new o(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}function i(e,t){var r=e[t.place++];if(!(128&r))return r;for(var n=15&r,i=0,u=0,a=t.place;u<n;u++,a++)i<<=8,i|=e[a];return t.place=a,i}function u(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function a(e,t){if(t<128)e.push(t);else{var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}}var o=r(3),d=r(4),f=d.utils,s=f.assert;e.exports=n,n.prototype._importDER=function(e,t){e=f.toArray(e,t);var r=new function(){this.place=0};if(48!==e[r.place++])return!1;if(i(e,r)+r.place!==e.length)return!1;if(2!==e[r.place++])return!1;var n=i(e,r),u=e.slice(r.place,n+r.place);if(r.place+=n,2!==e[r.place++])return!1;var a=i(e,r);if(e.length!==a+r.place)return!1;var d=e.slice(r.place,a+r.place);return 0===u[0]&&128&u[1]&&(u=u.slice(1)),0===d[0]&&128&d[1]&&(d=d.slice(1)),this.r=new o(u),this.s=new o(d),this.recoveryParam=null,!0},n.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=u(t),r=u(r);!(r[0]||128&r[1]);)r=r.slice(1);var n=[2];a(n,t.length),(n=n.concat(t)).push(2),a(n,r.length);var i=n.concat(r),o=[48];return a(o,i.length),o=o.concat(i),f.encode(o,e)}},function(e,t,r){"use strict";function n(e){if(o("ed25519"===e,"only tested with ed25519 so far"),!(this instanceof n))return new n(e);var e=u.curves[e].curve;this.curve=e,this.g=e.g,this.g.precompute(e.n.bitLength()+1),this.pointClass=e.point().constructor,this.encodingLength=Math.ceil(e.n.bitLength()/8),this.hash=i.sha512}var i=r(47),u=r(4),a=u.utils,o=a.assert,d=a.parseBytes,f=r(171),s=r(172);e.exports=n,n.prototype.sign=function(e,t){e=d(e);var r=this.keyFromSecret(t),n=this.hashInt(r.messagePrefix(),e),i=this.g.mul(n),u=this.encodePoint(i),a=this.hashInt(u,r.pubBytes(),e).mul(r.priv()),o=n.add(a).umod(this.curve.n);return this.makeSignature({R:i,S:o,Rencoded:u})},n.prototype.verify=function(e,t,r){e=d(e),t=this.makeSignature(t);var n=this.keyFromPublic(r),i=this.hashInt(t.Rencoded(),n.pubBytes(),e),u=this.g.mul(t.S());return t.R().add(n.pub().mul(i)).eq(u)},n.prototype.hashInt=function(){for(var e=this.hash(),t=0;t<arguments.length;t++)e.update(arguments[t]);return a.intFromLE(e.digest()).umod(this.curve.n)},n.prototype.keyFromPublic=function(e){return f.fromPublic(this,e)},n.prototype.keyFromSecret=function(e){return f.fromSecret(this,e)},n.prototype.makeSignature=function(e){return e instanceof s?e:new s(this,e)},n.prototype.encodePoint=function(e){var t=e.getY().toArray("le",this.encodingLength);return t[this.encodingLength-1]|=e.getX().isOdd()?128:0,t},n.prototype.decodePoint=function(e){var t=(e=a.parseBytes(e)).length-1,r=e.slice(0,t).concat(-129&e[t]),n=0!=(128&e[t]),i=a.intFromLE(r);return this.curve.pointFromY(i,n)},n.prototype.encodeInt=function(e){return e.toArray("le",this.encodingLength)},n.prototype.decodeInt=function(e){return a.intFromLE(e)},n.prototype.isPoint=function(e){return e instanceof this.pointClass}},function(e,t,r){"use strict";function n(e,t){this.eddsa=e,this._secret=o(t.secret),e.isPoint(t.pub)?this._pub=t.pub:this._pubBytes=o(t.pub)}var i=r(4),u=i.utils,a=u.assert,o=u.parseBytes,d=u.cachedProperty;n.fromPublic=function(e,t){return t instanceof n?t:new n(e,{pub:t})},n.fromSecret=function(e,t){return t instanceof n?t:new n(e,{secret:t})},n.prototype.secret=function(){return this._secret},d(n,"pubBytes",function(){return this.eddsa.encodePoint(this.pub())}),d(n,"pub",function(){return this._pubBytes?this.eddsa.decodePoint(this._pubBytes):this.eddsa.g.mul(this.priv())}),d(n,"privBytes",function(){var e=this.eddsa,t=this.hash(),r=e.encodingLength-1,n=t.slice(0,e.encodingLength);return n[0]&=248,n[r]&=127,n[r]|=64,n}),d(n,"priv",function(){return this.eddsa.decodeInt(this.privBytes())}),d(n,"hash",function(){return this.eddsa.hash().update(this.secret()).digest()}),d(n,"messagePrefix",function(){return this.hash().slice(this.eddsa.encodingLength)}),n.prototype.sign=function(e){return a(this._secret,"KeyPair can only verify"),this.eddsa.sign(e,this)},n.prototype.verify=function(e,t){return this.eddsa.verify(e,t,this)},n.prototype.getSecret=function(e){return a(this._secret,"KeyPair is public only"),u.encode(this.secret(),e)},n.prototype.getPublic=function(e){return u.encode(this.pubBytes(),e)},e.exports=n},function(e,t,r){"use strict";function n(e,t){this.eddsa=e,"object"!=typeof t&&(t=f(t)),Array.isArray(t)&&(t={R:t.slice(0,e.encodingLength),S:t.slice(e.encodingLength)}),o(t.R&&t.S,"Signature without R or S"),e.isPoint(t.R)&&(this._R=t.R),t.S instanceof i&&(this._S=t.S),this._Rencoded=Array.isArray(t.R)?t.R:t.Rencoded,this._Sencoded=Array.isArray(t.S)?t.S:t.Sencoded}var i=r(3),u=r(4),a=u.utils,o=a.assert,d=a.cachedProperty,f=a.parseBytes;d(n,"S",function(){return this.eddsa.decodeInt(this.Sencoded())}),d(n,"R",function(){return this.eddsa.decodePoint(this.Rencoded())}),d(n,"Rencoded",function(){return this.eddsa.encodePoint(this.R())}),d(n,"Sencoded",function(){return this.eddsa.encodeInt(this.S())}),n.prototype.toBytes=function(){return this.Rencoded().concat(this.Sencoded())},n.prototype.toHex=function(){return a.encode(this.toBytes(),"hex").toUpperCase()},e.exports=n},function(e,t,r){"use strict";var n=r(8);t.certificate=r(174);var i=n.define("RSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("modulus").int(),this.key("publicExponent").int(),this.key("privateExponent").int(),this.key("prime1").int(),this.key("prime2").int(),this.key("exponent1").int(),this.key("exponent2").int(),this.key("coefficient").int())});t.RSAPrivateKey=i;var u=n.define("RSAPublicKey",function(){this.seq().obj(this.key("modulus").int(),this.key("publicExponent").int())});t.RSAPublicKey=u;var a=n.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(o),this.key("subjectPublicKey").bitstr())});t.PublicKey=a;var o=n.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("none").null_().optional(),this.key("curve").objid().optional(),this.key("params").seq().obj(this.key("p").int(),this.key("q").int(),this.key("g").int()).optional())}),d=n.define("PrivateKeyInfo",function(){this.seq().obj(this.key("version").int(),this.key("algorithm").use(o),this.key("subjectPrivateKey").octstr())});t.PrivateKey=d;var f=n.define("EncryptedPrivateKeyInfo",function(){this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(),this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(),this.key("kdeparams").seq().obj(this.key("salt").octstr(),this.key("iters").int())),this.key("cipher").seq().obj(this.key("algo").objid(),this.key("iv").octstr()))),this.key("subjectPrivateKey").octstr())});t.EncryptedPrivateKey=f;var s=n.define("DSAPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("p").int(),this.key("q").int(),this.key("g").int(),this.key("pub_key").int(),this.key("priv_key").int())});t.DSAPrivateKey=s,t.DSAparam=n.define("DSAparam",function(){this.int()});var c=n.define("ECPrivateKey",function(){this.seq().obj(this.key("version").int(),this.key("privateKey").octstr(),this.key("parameters").optional().explicit(0).use(h),this.key("publicKey").optional().explicit(1).bitstr())});t.ECPrivateKey=c;var h=n.define("ECParameters",function(){this.choice({namedCurve:this.objid()})});t.signature=n.define("signature",function(){this.seq().obj(this.key("r").int(),this.key("s").int())})},function(e,t,r){"use strict";var n=r(8),i=n.define("Time",function(){this.choice({utcTime:this.utctime(),generalTime:this.gentime()})}),u=n.define("AttributeTypeValue",function(){this.seq().obj(this.key("type").objid(),this.key("value").any())}),a=n.define("AlgorithmIdentifier",function(){this.seq().obj(this.key("algorithm").objid(),this.key("parameters").optional())}),o=n.define("SubjectPublicKeyInfo",function(){this.seq().obj(this.key("algorithm").use(a),this.key("subjectPublicKey").bitstr())}),d=n.define("RelativeDistinguishedName",function(){this.setof(u)}),f=n.define("RDNSequence",function(){this.seqof(d)}),s=n.define("Name",function(){this.choice({rdnSequence:this.use(f)})}),c=n.define("Validity",function(){this.seq().obj(this.key("notBefore").use(i),this.key("notAfter").use(i))}),h=n.define("Extension",function(){this.seq().obj(this.key("extnID").objid(),this.key("critical").bool().def(!1),this.key("extnValue").octstr())}),l=n.define("TBSCertificate",function(){this.seq().obj(this.key("version").explicit(0).int(),this.key("serialNumber").int(),this.key("signature").use(a),this.key("issuer").use(s),this.key("validity").use(c),this.key("subject").use(s),this.key("subjectPublicKeyInfo").use(o),this.key("issuerUniqueID").implicit(1).bitstr().optional(),this.key("subjectUniqueID").implicit(2).bitstr().optional(),this.key("extensions").explicit(3).seqof(h).optional())}),p=n.define("X509Certificate",function(){this.seq().obj(this.key("tbsCertificate").use(l),this.key("signatureAlgorithm").use(a),this.key("signatureValue").bitstr())});e.exports=p},function(e,t){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},function(e,t,r){(function(t){var n=/Proc-Type: 4,ENCRYPTED\n\r?DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\n\r?\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?/m,i=/^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----\n/m,u=/^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?-----END \1-----$/m,a=r(27),o=r(43);e.exports=function(e,r){var d,f=e.toString(),s=f.match(n);if(s){var c="aes"+s[1],h=new t(s[2],"hex"),l=new t(s[3].replace(/\r?\n/g,""),"base64"),p=a(r,h.slice(0,8),parseInt(s[1],10)).key,b=[],y=o.createDecipheriv(c,p,h);b.push(y.update(l)),b.push(y.final()),d=t.concat(b)}else{var m=f.match(u);d=new t(m[2].replace(/\r?\n/g,""),"base64")}return{tag:f.match(i)[1],data:d}}}).call(t,r(0).Buffer)},function(e,t,r){(function(t){function n(e,t,r){var n=f[r.data.algorithm.curve.join(".")];if(!n)throw new Error("unknown curve "+r.data.algorithm.curve.join("."));var i=new o(n),u=r.data.subjectPrivateKey.data;return i.verify(t,e,u)}function i(e,t,r){var n=r.data.p,i=r.data.q,o=r.data.g,f=r.data.pub_key,s=d.signature.decode(e,"der"),c=s.s,h=s.r;u(c,i),u(h,i);var l=a.mont(n),p=c.invm(i);return 0===o.toRed(l).redPow(new a(t).mul(p).mod(i)).fromRed().mul(f.toRed(l).redPow(h.mul(p).mod(i)).fromRed()).mod(n).mod(i).cmp(h)}function u(e,t){if(e.cmpn(0)<=0)throw new Error("invalid sig");if(e.cmp(t)>=t)throw new Error("invalid sig")}var a=r(3),o=r(4).ec,d=r(30),f=r(77);e.exports=function(e,r,u,o,f){var s=d(u);if("ec"===s.type){if("ecdsa"!==o&&"ecdsa/rsa"!==o)throw new Error("wrong public key type");return n(e,r,s)}if("dsa"===s.type){if("dsa"!==o)throw new Error("wrong public key type");return i(e,r,s)}if("rsa"!==o&&"ecdsa/rsa"!==o)throw new Error("wrong public key type");r=t.concat([f,r]);for(var c=s.modulus.byteLength(),h=[1],l=0;r.length+h.length+2<c;)h.push(255),l++;h.push(0);for(var p=-1;++p<r.length;)h.push(r[p]);h=new t(h);var b=a.mont(s.modulus);e=(e=new a(e).toRed(b)).redPow(new a(s.publicExponent)),e=new t(e.fromRed().toArray());var y=l<8?1:0;for(c=Math.min(e.length,h.length),e.length!==h.length&&(y=1),p=-1;++p<c;)y|=e[p]^h[p];return 0===y}}).call(t,r(0).Buffer)},function(e,t,r){(function(t){function n(e){this.curveType=o[e],this.curveType||(this.curveType={name:e}),this.curve=new u.ec(this.curveType.name),this.keys=void 0}function i(e,r,n){Array.isArray(e)||(e=e.toArray());var i=new t(e);if(n&&i.length<n){var u=new t(n-i.length);u.fill(0),i=t.concat([u,i])}return r?i.toString(r):i}var u=r(4),a=r(3);e.exports=function(e){return new n(e)};var o={secp256k1:{name:"secp256k1",byteLength:32},secp224r1:{name:"p224",byteLength:28},prime256v1:{name:"p256",byteLength:32},prime192v1:{name:"p192",byteLength:24},ed25519:{name:"ed25519",byteLength:32},secp384r1:{name:"p384",byteLength:48},secp521r1:{name:"p521",byteLength:66}};o.p224=o.secp224r1,o.p256=o.secp256r1=o.prime256v1,o.p192=o.secp192r1=o.prime192v1,o.p384=o.secp384r1,o.p521=o.secp521r1,n.prototype.generateKeys=function(e,t){return this.keys=this.curve.genKeyPair(),this.getPublicKey(e,t)},n.prototype.computeSecret=function(e,r,n){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),i(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(),n,this.curveType.byteLength)},n.prototype.getPublicKey=function(e,t){var r=this.keys.getPublic("compressed"===t,!0);return"hybrid"===t&&(r[r.length-1]%2?r[0]=7:r[0]=6),i(r,e)},n.prototype.getPrivateKey=function(e){return i(this.keys.getPrivate(),e)},n.prototype.setPublicKey=function(e,r){return r=r||"utf8",t.isBuffer(e)||(e=new t(e,r)),this.keys._importPublic(e),this},n.prototype.setPrivateKey=function(e,r){r=r||"utf8",t.isBuffer(e)||(e=new t(e,r));var n=new a(e);return n=n.toString(16),this.keys._importPrivate(n),this}}).call(t,r(0).Buffer)},function(e,t,r){t.publicEncrypt=r(180),t.privateDecrypt=r(181),t.privateEncrypt=function(e,r){return t.publicEncrypt(e,r,!0)},t.publicDecrypt=function(e,r){return t.privateDecrypt(e,r,!0)}},function(e,t,r){(function(t){function n(e,r){var n=e.modulus.byteLength(),i=r.length,u=d("sha1").update(new t("")).digest(),a=u.length,h=2*a;if(i>n-h-2)throw new Error("message too long");var l=new t(n-i-h-2);l.fill(0);var p=n-a-1,b=o(a),y=s(t.concat([u,l,new t([1]),r],p),f(b,p)),m=s(b,f(y,a));return new c(t.concat([new t([0]),m,y],n))}function i(e,r,n){var i,a=r.length,o=e.modulus.byteLength();if(a>o-11)throw new Error("message too long");return n?(i=new t(o-a-3)).fill(255):i=u(o-a-3),new c(t.concat([new t([0,n?1:2]),i,new t([0]),r],o))}function u(e,r){for(var n,i=new t(e),u=0,a=o(2*e),d=0;u<e;)d===a.length&&(a=o(2*e),d=0),(n=a[d++])&&(i[u++]=n);return i}var a=r(30),o=r(13),d=r(18),f=r(78),s=r(79),c=r(3),h=r(80),l=r(46);e.exports=function(e,t,r){var u;u=e.padding?e.padding:r?1:4;var o,d=a(e);if(4===u)o=n(d,t);else if(1===u)o=i(d,t,r);else{if(3!==u)throw new Error("unknown padding");if((o=new c(t)).cmp(d.modulus)>=0)throw new Error("data too long for modulus")}return r?l(o,d):h(o,d)}}).call(t,r(0).Buffer)},function(e,t,r){(function(t){function n(e,r){var n=(e.modulus,e.modulus.byteLength()),i=(r.length,f("sha1").update(new t("")).digest()),o=i.length;if(0!==r[0])throw new Error("decryption error");var d=r.slice(1,o+1),s=r.slice(o+1),c=a(d,u(s,o)),h=a(s,u(c,n-o-1));if(function(e,r){e=new t(e),r=new t(r);var n=0,i=e.length;e.length!==r.length&&(n++,i=Math.min(e.length,r.length));for(var u=-1;++u<i;)n+=e[u]^r[u];return n}(i,h.slice(0,o)))throw new Error("decryption error");for(var l=o;0===h[l];)l++;if(1!==h[l++])throw new Error("decryption error");return h.slice(l)}var i=r(30),u=r(78),a=r(79),o=r(3),d=r(46),f=r(18),s=r(80);e.exports=function(e,r,u){var a;a=e.padding?e.padding:u?1:4;var f,c=i(e),h=c.modulus.byteLength();if(r.length>h||new o(r).cmp(c.modulus)>=0)throw new Error("decryption error");f=u?s(new o(r),c):d(r,c);var l=new t(h-f.length);if(l.fill(0),f=t.concat([l,f],h),4===a)return n(c,f);if(1===a)return function(e,t,r){for(var n=t.slice(0,2),i=2,u=0;0!==t[i++];)if(i>=t.length){u++;break}var a=t.slice(2,i-1);if(t.slice(i-1,i),("0002"!==n.toString("hex")&&!r||"0001"!==n.toString("hex")&&r)&&u++,a.length<8&&u++,u)throw new Error("decryption error");return t.slice(i)}(0,f,u);if(3===a)return f;throw new Error("unknown padding")}}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(e,n){function i(){throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")}function u(e,t){if("number"!=typeof e||e!=e)throw new TypeError("offset must be a number");if(e>l||e<0)throw new TypeError("offset must be a uint32");if(e>c||e>t)throw new RangeError("offset out of range")}function a(e,t,r){if("number"!=typeof e||e!=e)throw new TypeError("size must be a number");if(e>l||e<0)throw new TypeError("size must be a uint32");if(e+t>r||e>c)throw new RangeError("buffer too small")}function o(e,t,r,i){if(n.browser){var u=e.buffer,a=new Uint8Array(u,t,r);return h.getRandomValues(a),i?void n.nextTick(function(){i(null,e)}):e}return i?void f(r,function(r,n){if(r)return i(r);n.copy(e,t),i(null,e)}):(f(r).copy(e,t),e)}var d=r(2),f=r(13),s=d.Buffer,c=d.kMaxLength,h=e.crypto||e.msCrypto,l=Math.pow(2,32)-1;h&&h.getRandomValues||!n.browser?(t.randomFill=function(t,r,n,i){if(!(s.isBuffer(t)||t instanceof e.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');if("function"==typeof r)i=r,r=0,n=t.length;else if("function"==typeof n)i=n,n=t.length-r;else if("function"!=typeof i)throw new TypeError('"cb" argument must be a function');return u(r,t.length),a(n,r,t.length),o(t,r,n,i)},t.randomFillSync=function(t,r,n){if(void 0===r&&(r=0),!(s.isBuffer(t)||t instanceof e.Uint8Array))throw new TypeError('"buf" argument must be a Buffer or Uint8Array');return u(r,t.length),void 0===n&&(n=t.length-r),a(n,r,t.length),o(t,r,n)}):(t.randomFill=i,t.randomFillSync=i)}).call(t,r(9),r(6))},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(22),u=r(23),a=r(17),o=r(12),d=r(34),f=r(31).PrefixFingerprintContents,s=function(e){function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.prefix=t.alloc(0),e.subcondition=null,e.maxMessageLength=16384,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),n(r,[{key:"setSubcondition",value:function(e){if("string"==typeof e)e=i.fromUri(e);else if(!(e instanceof i))throw new Error("Subconditions must be URIs or objects of type Condition");this.subcondition=e}},{key:"setSubfulfillment",value:function(e){if("string"==typeof e)e=u.fromUri(e);else if(!(e instanceof u))throw new Error("Subfulfillments must be objects of type Fulfillment");this.subcondition=e}},{key:"setPrefix",value:function(e){if(!t.isBuffer(e))throw new TypeError("Prefix must be a Buffer, was: "+e);this.prefix=e}},{key:"setMaxMessageLength",value:function(e){if(!d(e)||e<0)throw new TypeError("Max message length must be an integer greater than or equal to zero, was: "+e);this.maxMessageLength=e}},{key:"getSubtypes",value:function(){var e=new Set([].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.subcondition.getSubtypes()),[this.subcondition.getTypeName()]));return e.delete(this.constructor.TYPE_NAME),e}},{key:"getFingerprintContents",value:function(){if(!this.subcondition)throw new o("Requires subcondition");return f.encode({prefix:this.prefix,maxMessageLength:this.maxMessageLength,subcondition:this.subcondition instanceof i?this.subcondition.getAsn1Json():this.subcondition.getCondition().getAsn1Json()})}},{key:"getAsn1JsonPayload",value:function(){return{prefix:this.prefix,maxMessageLength:this.maxMessageLength,subfulfillment:this.subcondition.getAsn1Json()}}},{key:"parseJson",value:function(e){this.setPrefix(t.from(e.prefix,"base64")),this.setMaxMessageLength(e.maxMessageLength),this.setSubfulfillment(u.fromJson(e.subfulfillment))}},{key:"parseAsn1JsonPayload",value:function(e){this.setPrefix(t.from(e.prefix,"base64")),this.setMaxMessageLength(e.maxMessageLength.toNumber()),this.setSubfulfillment(u.fromAsn1Json(e.subfulfillment))}},{key:"calculateCost",value:function(){if(!this.prefix)throw new o("Prefix must be specified");if(!this.subcondition)throw new o("Subcondition must be specified");var e=this.subcondition instanceof i?this.subcondition.getCost():this.subcondition.getCondition().getCost();return Number(this.prefix.length)+this.maxMessageLength+e+1024}},{key:"validate",value:function(e){if(!(this.subcondition instanceof u))throw new Error("Subcondition is not a fulfillment");if(!t.isBuffer(e))throw new Error("Message must be provided as a Buffer, was: "+e);return this.subcondition.validate(t.concat([this.prefix,e]))}}]),r}(a);s.TYPE_ID=1,s.TYPE_NAME="prefix-sha-256",s.TYPE_ASN1_CONDITION="prefixSha256Condition",s.TYPE_ASN1_FULFILLMENT="prefixSha256Fulfillment",s.TYPE_CATEGORY="compound",s.CONSTANT_BASE_COST=16384,s.CONSTANT_COST_DIVISOR=256,s.prototype.setSubconditionUri=s.prototype.setSubcondition,s.prototype.setSubfulfillmentUri=s.prototype.setSubfulfillment,e.exports=s}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(22),u=r(23),a=r(17),o=r(12),d=r(34),f=r(31).ThresholdFingerprintContents,s=function(e){function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.threshold=null,e.subconditions=[],e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),n(r,[{key:"addSubcondition",value:function(e){if("string"==typeof e)e=i.fromUri(e);else if(!(e instanceof i))throw new Error("Subconditions must be URIs or objects of type Condition");this.subconditions.push({type:"condition",body:e})}},{key:"addSubfulfillment",value:function(e){if("string"==typeof e)e=u.fromUri(e);else if(!(e instanceof u))throw new Error("Subfulfillments must be URIs or objects of type Fulfillment");this.subconditions.push({type:"fulfillment",body:e})}},{key:"setThreshold",value:function(e){if(!d(e)||e<1)throw new TypeError("Threshold must be a integer greater than zero, was: "+e);this.threshold=e}},{key:"getSubtypes",value:function(){var e=this.subconditions.map(function(e){return Array.from(e.body.getSubtypes()).concat(e.body.getTypeName())}),t=new Set(Array.prototype.concat.apply([],e));return t.delete(this.constructor.TYPE_NAME),t}},{key:"getFingerprintContents",value:function(){return f.encode({threshold:this.threshold,subconditions:this.subconditions.map(function(e){return e.body instanceof i?e.body:e.body.getCondition()}).sort(r.compareConditions).map(function(e){return e.getAsn1Json()})})}},{key:"calculateCost",value:function(){var e=this.subconditions.map(this.constructor.getSubconditionCost),t=this.constructor.calculateWorstCaseLength(this.threshold,e);if(t===-1/0)throw new o("Insufficient number of subconditions to meet the threshold");return t+1024*e.length}},{key:"parseJson",value:function(e){if(this.setThreshold(e.threshold),e.subfulfillments){var t=!0,r=!1,n=void 0;try{for(var a,o=e.subfulfillments[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var d=a.value;this.addSubfulfillment(u.fromJson(d))}}catch(e){r=!0,n=e}finally{try{!t&&o.return&&o.return()}finally{if(r)throw n}}}if(e.subconditions){var f=!0,s=!1,c=void 0;try{for(var h,l=e.subconditions[Symbol.iterator]();!(f=(h=l.next()).done);f=!0){var p=h.value;this.addSubcondition(i.fromJson(p))}}catch(e){s=!0,c=e}finally{try{!f&&l.return&&l.return()}finally{if(s)throw c}}}}},{key:"parseAsn1JsonPayload",value:function(e){if(this.setThreshold(e.subfulfillments.length),e.subfulfillments){var t=!0,r=!1,n=void 0;try{for(var a,o=e.subfulfillments[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var d=a.value;this.addSubfulfillment(u.fromAsn1Json(d))}}catch(e){r=!0,n=e}finally{try{!t&&o.return&&o.return()}finally{if(r)throw n}}}if(e.subconditions){var f=!0,s=!1,c=void 0;try{for(var h,l=e.subconditions[Symbol.iterator]();!(f=(h=l.next()).done);f=!0){var p=h.value;this.addSubcondition(i.fromAsn1Json(p))}}catch(e){s=!0,c=e}finally{try{!f&&l.return&&l.return()}finally{if(s)throw c}}}}},{key:"getAsn1JsonPayload",value:function(){var e=this.subconditions.filter(function(e){return"fulfillment"===e.type}).sort(function(e,t){return e.body.getCondition().getCost()-t.body.getCondition().getCost()}),t=this.subconditions.filter(function(e){return"condition"===e.type});if(e.length<this.threshold)throw new Error("Not enough fulfillments");var n=e.slice(0,this.threshold),i=t.map(function(e){return e.body}).concat(e.slice(this.threshold).map(function(e){return e.body.getCondition()}));return{subfulfillments:n.map(function(e){return e.body}).sort(r.compareConditions).map(function(e){return e.getAsn1Json()}),subconditions:i.sort(r.compareConditions).map(function(e){return e.getAsn1Json()})}}},{key:"validate",value:function(e){var t=this.subconditions.filter(function(e){return"fulfillment"===e.type});if(t.length<this.threshold)throw new Error("Threshold not met");if(t.length>this.threshold)throw new Error("Fulfillment is not minimal");return t.every(function(t){return t.body.validate(e)})}}],[{key:"compareConditions",value:function(e,r){return t.compare(e.serializeBinary(),r.serializeBinary())}},{key:"getSubconditionCost",value:function(e){return"fulfillment"===e.type?e.body.getCondition().getCost():e.body.getCost()}},{key:"calculateWorstCaseLength",value:function(e,t){return t.length<e?-1/0:t.sort(function(e,t){return e-t}).slice(-e).reduce(function(e,t){return e+t},0)}},{key:"calculateSmallestValidFulfillmentSet",value:function(e,t){return t.sort(function(e,t){return t.size-e.size}),t.slice(0,e)}}]),r}(a);s.TYPE_ID=2,s.TYPE_NAME="threshold-sha-256",s.TYPE_ASN1_CONDITION="thresholdSha256Condition",s.TYPE_ASN1_FULFILLMENT="thresholdSha256Fulfillment",s.TYPE_CATEGORY="compound",s.prototype.addSubconditionUri=s.prototype.addSubcondition,s.prototype.addSubfulfillmentUri=s.prototype.addSubfulfillment,e.exports=s}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(186),u=r(81),a=r(17),o=r(12),d=r(82),f=r(31).RsaFingerprintContents,s=new i,c=function(e){function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.modulus=null,e.signature=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),n(r,[{key:"parseJson",value:function(e){this.modulus=t.from(e.modulus,"base64"),this.signature=t.from(e.signature,"base64")}},{key:"getFingerprintContents",value:function(){if(!this.modulus)throw new o("Requires modulus");return f.encode({modulus:this.modulus})}},{key:"getAsn1JsonPayload",value:function(){return{modulus:this.modulus,signature:this.signature}}},{key:"setPublicModulus",value:function(e){if(!t.isBuffer(e))throw new TypeError("Modulus must be a buffer, was: "+e);if(0===e[0])throw new Error("Modulus may not contain leading zeros");if(e.length>512||e.length<128)throw new Error("Modulus must be between 128 bytes (1017 bits) and 512 bytes (4096 bits), was: "+e.length+" bytes");this.modulus=e}},{key:"setSignature",value:function(e){if(!t.isBuffer(e))throw new TypeError("Signature must be a buffer, was: "+e);this.signature=e}},{key:"sign",value:function(e,t){this.modulus||this.setPublicModulus(u.modulusFromPrivateKey(t)),this.signature=s.sign(t,e)}},{key:"calculateCost",value:function(){if(!this.modulus)throw new o("Requires a public modulus");return Math.pow(s.getModulusBitLength(this.modulus),2)>>>r.COST_RIGHT_SHIFT}},{key:"validate",value:function(e){if(!t.isBuffer(e))throw new Error("Message must be provided as a Buffer, was: "+e);if(!s.verify(this.modulus,e,this.signature))throw new d("Invalid RSA signature");return!0}}]),r}(a);c.TYPE_ID=3,c.TYPE_NAME="rsa-sha-256",c.TYPE_ASN1_CONDITION="rsaSha256Condition",c.TYPE_ASN1_FULFILLMENT="rsaSha256Fulfillment",c.TYPE_CATEGORY="simple",c.COST_RIGHT_SHIFT=6,e.exports=c}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(24),u=i.constants,a=r(187),o=r(81),d=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),t=t||{},this.hashAlgorithm=t.hashAlgorithm||"sha256",this.pss=new a({hashAlgorithm:this.hashAlgorithm})}return n(e,[{key:"getModulusBitLength",value:function(e){var t=e[0].toString(2).length;return 8*(e.length-1)+t}},{key:"sign",value:function(r,n){var a=o.modulusFromPrivateKey(r),d=this.getModulusBitLength(a),f=this.pss.encode(n,d-1),s=f.length<a.length?t.concat([e.ZERO_BYTE,f]):f;return i.privateEncrypt({key:r,padding:u.RSA_NO_PADDING},s)}},{key:"verify",value:function(e,t,r){var n=o.modulusToPem(e),a=i.publicDecrypt({key:n,padding:u.RSA_NO_PADDING},r),d=this.getModulusBitLength(e),f=d%8==1?a.slice(1):a;return this.pss.verify(t,f,d-1)}}]),e}();d.ZERO_BYTE=t.from([0]),e.exports=d}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(24),u=r(188),a=r(189),o=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),t=t||{},this.hashAlgorithm=t.hashAlgorithm||"sha256",this.hashLength=i.createHash(this.hashAlgorithm).digest().length,this.saltLength=this.hashLength}return n(e,[{key:"encode",value:function(e,r){var n=Math.ceil(r/8),o=i.createHash(this.hashAlgorithm).update(e).digest();if(n<this.hashLength+this.saltLength+2)throw new Error("Encoding error: RSA modulus is too small for "+this.hashAlgorithm);var d=i.randomBytes(this.saltLength),f=i.createHash(this.hashAlgorithm).update(t.alloc(8).fill(0)).update(o).update(d).digest(),s=t.concat([t.alloc(n-this.saltLength-this.hashLength-2).fill(0),t.from([1]),d]),c=new u({hashAlgorithm:this.hashAlgorithm}),h=c.generate(f,n-this.hashLength-1),l=a(s,h);return l[0]&=255>>>8*n-r,t.concat([l,f,t.from([188])])}},{key:"verify",value:function(e,r,n){var o=Math.ceil(n/8),d=i.createHash(this.hashAlgorithm).update(e).digest();if(o<this.hashLength+this.saltLength+2)return!1;if(188!==r[r.length-1])return!1;var f=o-this.hashLength-1,s=r.slice(0,f),c=r.slice(f,f+this.hashLength),h=255>>>8*o-n;if(s[0]&~h)return!1;var l=new u({hashAlgorithm:this.hashAlgorithm}),p=l.generate(c,o-this.hashLength-1),b=a(s,p);b[0]&=h;for(var y=o-this.hashLength-this.saltLength-2,m=0;m<y;m++)if(0!==b[m])return!1;if(1!==b[y])return!1;var g=b.slice(b.length-this.saltLength),v=i.createHash(this.hashAlgorithm).update(t.alloc(8).fill(0)).update(d).update(g).digest();return 0===t.compare(c,v)}}]),e}();o.EMPTY_BUFFER=t.alloc(0),e.exports=o}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(24),u=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),t=t||{},this.hashAlgorithm=t.hashAlgorithm||"sha256",this.hashLength=i.createHash(this.hashAlgorithm).digest().length,this.saltLength=this.hashLength}return n(e,[{key:"generate",value:function(e,r){for(var n=t.alloc(r),u=Math.ceil(r/this.hashLength),a=0;a<u;a++){var o=t.alloc(4);o.writeInt32BE(a,0),i.createHash(this.hashAlgorithm).update(e).update(o).digest().copy(n,a*this.hashLength)}return n}}]),e}();e.exports=u}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){e.exports=function(e,r){if(!t.isBuffer(e)||!t.isBuffer(r))throw new Error("Arguments must be buffers");if(e.length!==r.length)throw new Error("Buffers must be the same length");for(var n=t.alloc(e.length),i=0;i<e.length;i++)n[i]=e[i]^r[i];return n}}).call(t,r(0).Buffer)},function(e,t,r){"use strict";(function(t){var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(191),u=r(17),a=r(12),o=r(82),d=r(31).Ed25519FingerprintContents,f=void 0;try{f=r(193)}catch(e){}var s=function(e){function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.publicKey=null,e.signature=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,e),n(r,[{key:"setPublicKey",value:function(e){if(!t.isBuffer(e))throw new TypeError("Public key must be a Buffer, was: "+e);if(32!==e.length)throw new Error("Public key must be 32 bytes, was: "+e.length);this.publicKey=e}},{key:"setSignature",value:function(e){if(!t.isBuffer(e))throw new TypeError("Signature must be a Buffer, was: "+e);if(64!==e.length)throw new Error("Signature must be 64 bytes, was: "+e.length);this.signature=e}},{key:"sign",value:function(e,r){if(!t.isBuffer(e))throw new a("Message must be a Buffer");if(!t.isBuffer(r))throw new TypeError("Private key must be a Buffer, was: "+r);if(32!==r.length)throw new Error("Private key must be 32 bytes, was: "+r.length);if(f){var n=f.MakeKeypair(r);this.setPublicKey(n.publicKey),this.signature=f.Sign(e,n)}else{var u=i.sign.keyPair.fromSeed(r);this.setPublicKey(t.from(u.publicKey)),this.signature=t.from(i.sign.detached(e,u.secretKey))}}},{key:"parseJson",value:function(e){this.setPublicKey(t.from(e.publicKey,"base64")),this.setSignature(t.from(e.signature,"base64"))}},{key:"getFingerprintContents",value:function(){if(!this.publicKey)throw new a("Requires public key");return d.encode({publicKey:this.publicKey})}},{key:"getAsn1JsonPayload",value:function(){return{publicKey:this.publicKey,signature:this.signature}}},{key:"calculateCost",value:function(){return r.CONSTANT_COST}},{key:"validate",value:function(e){if(!t.isBuffer(e))throw new TypeError("Message must be a Buffer");if(!0!==(f?f.Verify(e,this.signature,this.publicKey):i.sign.detached.verify(e,this.signature,this.publicKey)))throw new o("Invalid ed25519 signature");return!0}}]),r}(u);s.TYPE_ID=4,s.TYPE_NAME="ed25519-sha-256",s.TYPE_ASN1_CONDITION="ed25519Sha256Condition",s.TYPE_ASN1_FULFILLMENT="ed25519Sha256Fulfillment",s.TYPE_CATEGORY="simple",s.CONSTANT_COST=131072,e.exports=s}).call(t,r(0).Buffer)},function(e,t,r){!function(e){"use strict";function t(e,t,r,n){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r,e[t+4]=n>>24&255,e[t+5]=n>>16&255,e[t+6]=n>>8&255,e[t+7]=255&n}function n(e,t,r,n,i){var u,a=0;for(u=0;u<i;u++)a|=e[t+u]^r[n+u];return(1&a-1>>>8)-1}function i(e,t,r,i){return n(e,t,r,i,16)}function u(e,t,r,i){return n(e,t,r,i,32)}function a(e,t,r,n){!function(e,t,r,n){for(var i,u=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,o=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,d=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,f=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,h=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,b=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,m=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,g=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,v=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,_=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,w=u,S=a,E=o,A=d,x=f,k=s,M=c,I=h,T=l,B=p,C=b,P=y,O=m,R=g,j=v,U=_,L=0;L<20;L+=2)w^=(i=(O^=(i=(T^=(i=(x^=(i=w+O|0)<<7|i>>>25)+w|0)<<9|i>>>23)+x|0)<<13|i>>>19)+T|0)<<18|i>>>14,k^=(i=(S^=(i=(R^=(i=(B^=(i=k+S|0)<<7|i>>>25)+k|0)<<9|i>>>23)+B|0)<<13|i>>>19)+R|0)<<18|i>>>14,C^=(i=(M^=(i=(E^=(i=(j^=(i=C+M|0)<<7|i>>>25)+C|0)<<9|i>>>23)+j|0)<<13|i>>>19)+E|0)<<18|i>>>14,U^=(i=(P^=(i=(I^=(i=(A^=(i=U+P|0)<<7|i>>>25)+U|0)<<9|i>>>23)+A|0)<<13|i>>>19)+I|0)<<18|i>>>14,w^=(i=(A^=(i=(E^=(i=(S^=(i=w+A|0)<<7|i>>>25)+w|0)<<9|i>>>23)+S|0)<<13|i>>>19)+E|0)<<18|i>>>14,k^=(i=(x^=(i=(I^=(i=(M^=(i=k+x|0)<<7|i>>>25)+k|0)<<9|i>>>23)+M|0)<<13|i>>>19)+I|0)<<18|i>>>14,C^=(i=(B^=(i=(T^=(i=(P^=(i=C+B|0)<<7|i>>>25)+C|0)<<9|i>>>23)+P|0)<<13|i>>>19)+T|0)<<18|i>>>14,U^=(i=(j^=(i=(R^=(i=(O^=(i=U+j|0)<<7|i>>>25)+U|0)<<9|i>>>23)+O|0)<<13|i>>>19)+R|0)<<18|i>>>14;w=w+u|0,S=S+a|0,E=E+o|0,A=A+d|0,x=x+f|0,k=k+s|0,M=M+c|0,I=I+h|0,T=T+l|0,B=B+p|0,C=C+b|0,P=P+y|0,O=O+m|0,R=R+g|0,j=j+v|0,U=U+_|0,e[0]=w>>>0&255,e[1]=w>>>8&255,e[2]=w>>>16&255,e[3]=w>>>24&255,e[4]=S>>>0&255,e[5]=S>>>8&255,e[6]=S>>>16&255,e[7]=S>>>24&255,e[8]=E>>>0&255,e[9]=E>>>8&255,e[10]=E>>>16&255,e[11]=E>>>24&255,e[12]=A>>>0&255,e[13]=A>>>8&255,e[14]=A>>>16&255,e[15]=A>>>24&255,e[16]=x>>>0&255,e[17]=x>>>8&255,e[18]=x>>>16&255,e[19]=x>>>24&255,e[20]=k>>>0&255,e[21]=k>>>8&255,e[22]=k>>>16&255,e[23]=k>>>24&255,e[24]=M>>>0&255,e[25]=M>>>8&255,e[26]=M>>>16&255,e[27]=M>>>24&255,e[28]=I>>>0&255,e[29]=I>>>8&255,e[30]=I>>>16&255,e[31]=I>>>24&255,e[32]=T>>>0&255,e[33]=T>>>8&255,e[34]=T>>>16&255,e[35]=T>>>24&255,e[36]=B>>>0&255,e[37]=B>>>8&255,e[38]=B>>>16&255,e[39]=B>>>24&255,e[40]=C>>>0&255,e[41]=C>>>8&255,e[42]=C>>>16&255,e[43]=C>>>24&255,e[44]=P>>>0&255,e[45]=P>>>8&255,e[46]=P>>>16&255,e[47]=P>>>24&255,e[48]=O>>>0&255,e[49]=O>>>8&255,e[50]=O>>>16&255,e[51]=O>>>24&255,e[52]=R>>>0&255,e[53]=R>>>8&255,e[54]=R>>>16&255,e[55]=R>>>24&255,e[56]=j>>>0&255,e[57]=j>>>8&255,e[58]=j>>>16&255,e[59]=j>>>24&255,e[60]=U>>>0&255,e[61]=U>>>8&255,e[62]=U>>>16&255,e[63]=U>>>24&255}(e,t,r,n)}function o(e,t,r,n){!function(e,t,r,n){for(var i,u=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,o=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,d=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,f=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,h=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,b=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,m=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,g=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,v=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,_=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,w=u,S=a,E=o,A=d,x=f,k=s,M=c,I=h,T=l,B=p,C=b,P=y,O=m,R=g,j=v,U=_,L=0;L<20;L+=2)w^=(i=(O^=(i=(T^=(i=(x^=(i=w+O|0)<<7|i>>>25)+w|0)<<9|i>>>23)+x|0)<<13|i>>>19)+T|0)<<18|i>>>14,k^=(i=(S^=(i=(R^=(i=(B^=(i=k+S|0)<<7|i>>>25)+k|0)<<9|i>>>23)+B|0)<<13|i>>>19)+R|0)<<18|i>>>14,C^=(i=(M^=(i=(E^=(i=(j^=(i=C+M|0)<<7|i>>>25)+C|0)<<9|i>>>23)+j|0)<<13|i>>>19)+E|0)<<18|i>>>14,U^=(i=(P^=(i=(I^=(i=(A^=(i=U+P|0)<<7|i>>>25)+U|0)<<9|i>>>23)+A|0)<<13|i>>>19)+I|0)<<18|i>>>14,w^=(i=(A^=(i=(E^=(i=(S^=(i=w+A|0)<<7|i>>>25)+w|0)<<9|i>>>23)+S|0)<<13|i>>>19)+E|0)<<18|i>>>14,k^=(i=(x^=(i=(I^=(i=(M^=(i=k+x|0)<<7|i>>>25)+k|0)<<9|i>>>23)+M|0)<<13|i>>>19)+I|0)<<18|i>>>14,C^=(i=(B^=(i=(T^=(i=(P^=(i=C+B|0)<<7|i>>>25)+C|0)<<9|i>>>23)+P|0)<<13|i>>>19)+T|0)<<18|i>>>14,U^=(i=(j^=(i=(R^=(i=(O^=(i=U+j|0)<<7|i>>>25)+U|0)<<9|i>>>23)+O|0)<<13|i>>>19)+R|0)<<18|i>>>14;e[0]=w>>>0&255,e[1]=w>>>8&255,e[2]=w>>>16&255,e[3]=w>>>24&255,e[4]=k>>>0&255,e[5]=k>>>8&255,e[6]=k>>>16&255,e[7]=k>>>24&255,e[8]=C>>>0&255,e[9]=C>>>8&255,e[10]=C>>>16&255,e[11]=C>>>24&255,e[12]=U>>>0&255,e[13]=U>>>8&255,e[14]=U>>>16&255,e[15]=U>>>24&255,e[16]=M>>>0&255,e[17]=M>>>8&255,e[18]=M>>>16&255,e[19]=M>>>24&255,e[20]=I>>>0&255,e[21]=I>>>8&255,e[22]=I>>>16&255,e[23]=I>>>24&255,e[24]=T>>>0&255,e[25]=T>>>8&255,e[26]=T>>>16&255,e[27]=T>>>24&255,e[28]=B>>>0&255,e[29]=B>>>8&255,e[30]=B>>>16&255,e[31]=B>>>24&255}(e,t,r,n)}function d(e,t,r,n,i,u,o){var d,f,s=new Uint8Array(16),c=new Uint8Array(64);for(f=0;f<16;f++)s[f]=0;for(f=0;f<8;f++)s[f]=u[f];for(;i>=64;){for(a(c,s,o,ae),f=0;f<64;f++)e[t+f]=r[n+f]^c[f];for(d=1,f=8;f<16;f++)d=d+(255&s[f])|0,s[f]=255&d,d>>>=8;i-=64,t+=64,n+=64}if(i>0)for(a(c,s,o,ae),f=0;f<i;f++)e[t+f]=r[n+f]^c[f];return 0}function f(e,t,r,n,i){var u,o,d=new Uint8Array(16),f=new Uint8Array(64);for(o=0;o<16;o++)d[o]=0;for(o=0;o<8;o++)d[o]=n[o];for(;r>=64;){for(a(f,d,i,ae),o=0;o<64;o++)e[t+o]=f[o];for(u=1,o=8;o<16;o++)u=u+(255&d[o])|0,d[o]=255&u,u>>>=8;r-=64,t+=64}if(r>0)for(a(f,d,i,ae),o=0;o<r;o++)e[t+o]=f[o];return 0}function s(e,t,r,n,i){var u=new Uint8Array(32);o(u,n,i,ae);for(var a=new Uint8Array(8),d=0;d<8;d++)a[d]=n[d+16];return f(e,t,r,a,u)}function c(e,t,r,n,i,u,a){var f=new Uint8Array(32);o(f,u,a,ae);for(var s=new Uint8Array(8),c=0;c<8;c++)s[c]=u[c+16];return d(e,t,r,n,i,s,f)}function h(e,t,r,n,i,u){var a=new oe(u);return a.update(r,n,i),a.finish(e,t),0}function l(e,t,r,n,u,a){var o=new Uint8Array(16);return h(o,0,r,n,u,a),i(e,t,o,0)}function p(e,t,r,n,i){var u;if(r<32)return-1;for(c(e,0,t,0,r,n,i),h(e,16,e,32,r-32,e),u=0;u<16;u++)e[u]=0;return 0}function b(e,t,r,n,i){var u,a=new Uint8Array(32);if(r<32)return-1;if(s(a,0,32,n,i),0!==l(t,16,t,32,r-32,a))return-1;for(c(e,0,t,0,r,n,i),u=0;u<32;u++)e[u]=0;return 0}function y(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r]}function m(e){var t,r,n=1;for(t=0;t<16;t++)r=e[t]+n+65535,n=Math.floor(r/65536),e[t]=r-65536*n;e[0]+=n-1+37*(n-1)}function g(e,t,r){for(var n,i=~(r-1),u=0;u<16;u++)n=i&(e[u]^t[u]),e[u]^=n,t[u]^=n}function v(e,t){var r,n,i,u=V(),a=V();for(r=0;r<16;r++)a[r]=t[r];for(m(a),m(a),m(a),n=0;n<2;n++){for(u[0]=a[0]-65517,r=1;r<15;r++)u[r]=a[r]-65535-(u[r-1]>>16&1),u[r-1]&=65535;u[15]=a[15]-32767-(u[14]>>16&1),i=u[15]>>16&1,u[14]&=65535,g(a,u,1-i)}for(r=0;r<16;r++)e[2*r]=255&a[r],e[2*r+1]=a[r]>>8}function _(e,t){var r=new Uint8Array(32),n=new Uint8Array(32);return v(r,e),v(n,t),u(r,0,n,0)}function w(e){var t=new Uint8Array(32);return v(t,e),1&t[0]}function S(e,t){var r;for(r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}function E(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]+r[n]}function A(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]-r[n]}function x(e,t,r){var n,i,u=0,a=0,o=0,d=0,f=0,s=0,c=0,h=0,l=0,p=0,b=0,y=0,m=0,g=0,v=0,_=0,w=0,S=0,E=0,A=0,x=0,k=0,M=0,I=0,T=0,B=0,C=0,P=0,O=0,R=0,j=0,U=r[0],L=r[1],N=r[2],D=r[3],z=r[4],F=r[5],q=r[6],K=r[7],Y=r[8],H=r[9],J=r[10],G=r[11],V=r[12],X=r[13],W=r[14],Z=r[15];n=t[0],u+=n*U,a+=n*L,o+=n*N,d+=n*D,f+=n*z,s+=n*F,c+=n*q,h+=n*K,l+=n*Y,p+=n*H,b+=n*J,y+=n*G,m+=n*V,g+=n*X,v+=n*W,_+=n*Z,n=t[1],a+=n*U,o+=n*L,d+=n*N,f+=n*D,s+=n*z,c+=n*F,h+=n*q,l+=n*K,p+=n*Y,b+=n*H,y+=n*J,m+=n*G,g+=n*V,v+=n*X,_+=n*W,w+=n*Z,n=t[2],o+=n*U,d+=n*L,f+=n*N,s+=n*D,c+=n*z,h+=n*F,l+=n*q,p+=n*K,b+=n*Y,y+=n*H,m+=n*J,g+=n*G,v+=n*V,_+=n*X,w+=n*W,S+=n*Z,n=t[3],d+=n*U,f+=n*L,s+=n*N,c+=n*D,h+=n*z,l+=n*F,p+=n*q,b+=n*K,y+=n*Y,m+=n*H,g+=n*J,v+=n*G,_+=n*V,w+=n*X,S+=n*W,E+=n*Z,n=t[4],f+=n*U,s+=n*L,c+=n*N,h+=n*D,l+=n*z,p+=n*F,b+=n*q,y+=n*K,m+=n*Y,g+=n*H,v+=n*J,_+=n*G,w+=n*V,S+=n*X,E+=n*W,A+=n*Z,n=t[5],s+=n*U,c+=n*L,h+=n*N,l+=n*D,p+=n*z,b+=n*F,y+=n*q,m+=n*K,g+=n*Y,v+=n*H,_+=n*J,w+=n*G,S+=n*V,E+=n*X,A+=n*W,x+=n*Z,n=t[6],c+=n*U,h+=n*L,l+=n*N,p+=n*D,b+=n*z,y+=n*F,m+=n*q,g+=n*K,v+=n*Y,_+=n*H,w+=n*J,S+=n*G,E+=n*V,A+=n*X,x+=n*W,k+=n*Z,n=t[7],h+=n*U,l+=n*L,p+=n*N,b+=n*D,y+=n*z,m+=n*F,g+=n*q,v+=n*K,_+=n*Y,w+=n*H,S+=n*J,E+=n*G,A+=n*V,x+=n*X,k+=n*W,M+=n*Z,n=t[8],l+=n*U,p+=n*L,b+=n*N,y+=n*D,m+=n*z,g+=n*F,v+=n*q,_+=n*K,w+=n*Y,S+=n*H,E+=n*J,A+=n*G,x+=n*V,k+=n*X,M+=n*W,I+=n*Z,n=t[9],p+=n*U,b+=n*L,y+=n*N,m+=n*D,g+=n*z,v+=n*F,_+=n*q,w+=n*K,S+=n*Y,E+=n*H,A+=n*J,x+=n*G,k+=n*V,M+=n*X,I+=n*W,T+=n*Z,n=t[10],b+=n*U,y+=n*L,m+=n*N,g+=n*D,v+=n*z,_+=n*F,w+=n*q,S+=n*K,E+=n*Y,A+=n*H,x+=n*J,k+=n*G,M+=n*V,I+=n*X,T+=n*W,B+=n*Z,n=t[11],y+=n*U,m+=n*L,g+=n*N,v+=n*D,_+=n*z,w+=n*F,S+=n*q,E+=n*K,A+=n*Y,x+=n*H,k+=n*J,M+=n*G,I+=n*V,T+=n*X,B+=n*W,C+=n*Z,n=t[12],m+=n*U,g+=n*L,v+=n*N,_+=n*D,w+=n*z,S+=n*F,E+=n*q,A+=n*K,x+=n*Y,k+=n*H,M+=n*J,I+=n*G,T+=n*V,B+=n*X,C+=n*W,P+=n*Z,n=t[13],g+=n*U,v+=n*L,_+=n*N,w+=n*D,S+=n*z,E+=n*F,A+=n*q,x+=n*K,k+=n*Y,M+=n*H,I+=n*J,T+=n*G,B+=n*V,C+=n*X,P+=n*W,O+=n*Z,n=t[14],v+=n*U,_+=n*L,w+=n*N,S+=n*D,E+=n*z,A+=n*F,x+=n*q,k+=n*K,M+=n*Y,I+=n*H,T+=n*J,B+=n*G,C+=n*V,P+=n*X,O+=n*W,R+=n*Z,n=t[15],_+=n*U,a+=38*(S+=n*N),o+=38*(E+=n*D),d+=38*(A+=n*z),f+=38*(x+=n*F),s+=38*(k+=n*q),c+=38*(M+=n*K),h+=38*(I+=n*Y),l+=38*(T+=n*H),p+=38*(B+=n*J),b+=38*(C+=n*G),y+=38*(P+=n*V),m+=38*(O+=n*X),g+=38*(R+=n*W),v+=38*(j+=n*Z),n=(u+=38*(w+=n*L))+(i=1)+65535,i=Math.floor(n/65536),u=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,n=_+i+65535,i=Math.floor(n/65536),_=n-65536*i,n=(u+=i-1+37*(i-1))+(i=1)+65535,i=Math.floor(n/65536),u=n-65536*i,n=a+i+65535,i=Math.floor(n/65536),a=n-65536*i,n=o+i+65535,i=Math.floor(n/65536),o=n-65536*i,n=d+i+65535,i=Math.floor(n/65536),d=n-65536*i,n=f+i+65535,i=Math.floor(n/65536),f=n-65536*i,n=s+i+65535,i=Math.floor(n/65536),s=n-65536*i,n=c+i+65535,i=Math.floor(n/65536),c=n-65536*i,n=h+i+65535,i=Math.floor(n/65536),h=n-65536*i,n=l+i+65535,i=Math.floor(n/65536),l=n-65536*i,n=p+i+65535,i=Math.floor(n/65536),p=n-65536*i,n=b+i+65535,i=Math.floor(n/65536),b=n-65536*i,n=y+i+65535,i=Math.floor(n/65536),y=n-65536*i,n=m+i+65535,i=Math.floor(n/65536),m=n-65536*i,n=g+i+65535,i=Math.floor(n/65536),g=n-65536*i,n=v+i+65535,i=Math.floor(n/65536),v=n-65536*i,n=_+i+65535,i=Math.floor(n/65536),_=n-65536*i,u+=i-1+37*(i-1),e[0]=u,e[1]=a,e[2]=o,e[3]=d,e[4]=f,e[5]=s,e[6]=c,e[7]=h,e[8]=l,e[9]=p,e[10]=b,e[11]=y,e[12]=m,e[13]=g,e[14]=v,e[15]=_}function k(e,t){x(e,t,t)}function M(e,t){var r,n=V();for(r=0;r<16;r++)n[r]=t[r];for(r=253;r>=0;r--)k(n,n),2!==r&&4!==r&&x(n,n,t);for(r=0;r<16;r++)e[r]=n[r]}function I(e,t,r){var n,i,u=new Uint8Array(32),a=new Float64Array(80),o=V(),d=V(),f=V(),s=V(),c=V(),h=V();for(i=0;i<31;i++)u[i]=t[i];for(u[31]=127&t[31]|64,u[0]&=248,S(a,r),i=0;i<16;i++)d[i]=a[i],s[i]=o[i]=f[i]=0;for(o[0]=s[0]=1,i=254;i>=0;--i)n=u[i>>>3]>>>(7&i)&1,g(o,d,n),g(f,s,n),E(c,o,f),A(o,o,f),E(f,d,s),A(d,d,s),k(s,c),k(h,o),x(o,f,o),x(f,d,c),E(c,o,f),A(o,o,f),k(d,o),A(f,s,h),x(o,f,ee),E(o,o,s),x(f,f,o),x(o,s,h),x(s,d,a),k(d,c),g(o,d,n),g(f,s,n);for(i=0;i<16;i++)a[i+16]=o[i],a[i+32]=f[i],a[i+48]=d[i],a[i+64]=s[i];var l=a.subarray(32),p=a.subarray(16);return M(l,l),x(p,p,l),v(e,p),0}function T(e,t){return I(e,t,Z)}function B(e,t){return X(t,32),T(e,t)}function C(e,t,r){var n=new Uint8Array(32);return I(n,r,t),o(e,W,n,ae)}function P(e,t,r,n){for(var i,u,a,o,d,f,s,c,h,l,p,b,y,m,g,v,_,w,S,E,A,x,k,M,I,T,B=new Int32Array(16),C=new Int32Array(16),P=e[0],O=e[1],R=e[2],j=e[3],U=e[4],L=e[5],N=e[6],D=e[7],z=t[0],F=t[1],q=t[2],K=t[3],Y=t[4],H=t[5],J=t[6],G=t[7],V=0;n>=128;){for(S=0;S<16;S++)E=8*S+V,B[S]=r[E+0]<<24|r[E+1]<<16|r[E+2]<<8|r[E+3],C[S]=r[E+4]<<24|r[E+5]<<16|r[E+6]<<8|r[E+7];for(S=0;S<80;S++)if(i=P,u=O,a=R,o=j,d=U,f=L,s=N,c=D,h=z,l=F,p=q,b=K,y=Y,m=H,g=J,v=G,k=65535&(x=G),M=x>>>16,I=65535&(A=D),T=A>>>16,k+=65535&(x=(Y>>>14|U<<18)^(Y>>>18|U<<14)^(U>>>9|Y<<23)),M+=x>>>16,I+=65535&(A=(U>>>14|Y<<18)^(U>>>18|Y<<14)^(Y>>>9|U<<23)),T+=A>>>16,k+=65535&(x=Y&H^~Y&J),M+=x>>>16,I+=65535&(A=U&L^~U&N),T+=A>>>16,A=se[2*S],x=se[2*S+1],k+=65535&x,M+=x>>>16,I+=65535&A,T+=A>>>16,A=B[S%16],x=C[S%16],M+=x>>>16,I+=65535&A,T+=A>>>16,I+=(M+=(k+=65535&x)>>>16)>>>16,k=65535&(x=w=65535&k|M<<16),M=x>>>16,I=65535&(A=_=65535&I|(T+=I>>>16)<<16),T=A>>>16,k+=65535&(x=(z>>>28|P<<4)^(P>>>2|z<<30)^(P>>>7|z<<25)),M+=x>>>16,I+=65535&(A=(P>>>28|z<<4)^(z>>>2|P<<30)^(z>>>7|P<<25)),T+=A>>>16,M+=(x=z&F^z&q^F&q)>>>16,I+=65535&(A=P&O^P&R^O&R),T+=A>>>16,c=65535&(I+=(M+=(k+=65535&x)>>>16)>>>16)|(T+=I>>>16)<<16,v=65535&k|M<<16,k=65535&(x=b),M=x>>>16,I=65535&(A=o),T=A>>>16,M+=(x=w)>>>16,I+=65535&(A=_),T+=A>>>16,O=i,R=u,j=a,U=o=65535&(I+=(M+=(k+=65535&x)>>>16)>>>16)|(T+=I>>>16)<<16,L=d,N=f,D=s,P=c,F=h,q=l,K=p,Y=b=65535&k|M<<16,H=y,J=m,G=g,z=v,S%16==15)for(E=0;E<16;E++)A=B[E],x=C[E],k=65535&x,M=x>>>16,I=65535&A,T=A>>>16,A=B[(E+9)%16],x=C[(E+9)%16],k+=65535&x,M+=x>>>16,I+=65535&A,T+=A>>>16,_=B[(E+1)%16],w=C[(E+1)%16],k+=65535&(x=(w>>>1|_<<31)^(w>>>8|_<<24)^(w>>>7|_<<25)),M+=x>>>16,I+=65535&(A=(_>>>1|w<<31)^(_>>>8|w<<24)^_>>>7),T+=A>>>16,_=B[(E+14)%16],w=C[(E+14)%16],M+=(x=(w>>>19|_<<13)^(_>>>29|w<<3)^(w>>>6|_<<26))>>>16,I+=65535&(A=(_>>>19|w<<13)^(w>>>29|_<<3)^_>>>6),T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,B[E]=65535&I|T<<16,C[E]=65535&k|M<<16;k=65535&(x=z),M=x>>>16,I=65535&(A=P),T=A>>>16,A=e[0],x=t[0],M+=x>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[0]=P=65535&I|T<<16,t[0]=z=65535&k|M<<16,k=65535&(x=F),M=x>>>16,I=65535&(A=O),T=A>>>16,A=e[1],x=t[1],M+=x>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[1]=O=65535&I|T<<16,t[1]=F=65535&k|M<<16,k=65535&(x=q),M=x>>>16,I=65535&(A=R),T=A>>>16,A=e[2],x=t[2],M+=x>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[2]=R=65535&I|T<<16,t[2]=q=65535&k|M<<16,k=65535&(x=K),M=x>>>16,I=65535&(A=j),T=A>>>16,A=e[3],x=t[3],M+=x>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[3]=j=65535&I|T<<16,t[3]=K=65535&k|M<<16,k=65535&(x=Y),M=x>>>16,I=65535&(A=U),T=A>>>16,A=e[4],x=t[4],M+=x>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[4]=U=65535&I|T<<16,t[4]=Y=65535&k|M<<16,k=65535&(x=H),M=x>>>16,I=65535&(A=L),T=A>>>16,A=e[5],x=t[5],M+=x>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[5]=L=65535&I|T<<16,t[5]=H=65535&k|M<<16,k=65535&(x=J),M=x>>>16,I=65535&(A=N),T=A>>>16,A=e[6],x=t[6],M+=x>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[6]=N=65535&I|T<<16,t[6]=J=65535&k|M<<16,k=65535&(x=G),M=x>>>16,I=65535&(A=D),T=A>>>16,A=e[7],x=t[7],M+=x>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[7]=D=65535&I|T<<16,t[7]=G=65535&k|M<<16,V+=128,n-=128}return n}function O(e,r,n){var i,u=new Int32Array(8),a=new Int32Array(8),o=new Uint8Array(256),d=n;for(u[0]=1779033703,u[1]=3144134277,u[2]=1013904242,u[3]=2773480762,u[4]=1359893119,u[5]=2600822924,u[6]=528734635,u[7]=1541459225,a[0]=4089235720,a[1]=2227873595,a[2]=4271175723,a[3]=1595750129,a[4]=2917565137,a[5]=725511199,a[6]=4215389547,a[7]=327033209,P(u,a,r,n),n%=128,i=0;i<n;i++)o[i]=r[d-n+i];for(o[n]=128,o[(n=256-128*(n<112?1:0))-9]=0,t(o,n-8,d/536870912|0,d<<3),P(u,a,o,n),i=0;i<8;i++)t(e,8*i,u[i],a[i]);return 0}function R(e,t){var r=V(),n=V(),i=V(),u=V(),a=V(),o=V(),d=V(),f=V(),s=V();A(r,e[1],e[0]),A(s,t[1],t[0]),x(r,r,s),E(n,e[0],e[1]),E(s,t[0],t[1]),x(n,n,s),x(i,e[3],t[3]),x(i,i,re),x(u,e[2],t[2]),E(u,u,u),A(a,n,r),A(o,u,i),E(d,u,i),E(f,n,r),x(e[0],a,o),x(e[1],f,d),x(e[2],d,o),x(e[3],a,f)}function j(e,t,r){var n;for(n=0;n<4;n++)g(e[n],t[n],r)}function U(e,t){var r=V(),n=V(),i=V();M(i,t[2]),x(r,t[0],i),x(n,t[1],i),v(e,n),e[31]^=w(r)<<7}function L(e,t,r){var n,i;for(y(e[0],$),y(e[1],Q),y(e[2],Q),y(e[3],$),i=255;i>=0;--i)n=r[i/8|0]>>(7&i)&1,j(e,t,n),R(t,e),R(e,e),j(e,t,n)}function N(e,t){var r=[V(),V(),V(),V()];y(r[0],ne),y(r[1],ie),y(r[2],Q),x(r[3],ne,ie),L(e,r,t)}function D(e,t,r){var n,i=new Uint8Array(64),u=[V(),V(),V(),V()];for(r||X(t,32),O(i,t,32),i[0]&=248,i[31]&=127,i[31]|=64,N(u,i),U(e,u),n=0;n<32;n++)t[n+32]=e[n];return 0}function z(e,t){var r,n,i,u;for(n=63;n>=32;--n){for(r=0,i=n-32,u=n-12;i<u;++i)t[i]+=r-16*t[n]*ce[i-(n-32)],r=t[i]+128>>8,t[i]-=256*r;t[i]+=r,t[n]=0}for(r=0,i=0;i<32;i++)t[i]+=r-(t[31]>>4)*ce[i],r=t[i]>>8,t[i]&=255;for(i=0;i<32;i++)t[i]-=r*ce[i];for(n=0;n<32;n++)t[n+1]+=t[n]>>8,e[n]=255&t[n]}function F(e){var t,r=new Float64Array(64);for(t=0;t<64;t++)r[t]=e[t];for(t=0;t<64;t++)e[t]=0;z(e,r)}function q(e,t,r,n){var i,u,a=new Uint8Array(64),o=new Uint8Array(64),d=new Uint8Array(64),f=new Float64Array(64),s=[V(),V(),V(),V()];O(a,n,32),a[0]&=248,a[31]&=127,a[31]|=64;var c=r+64;for(i=0;i<r;i++)e[64+i]=t[i];for(i=0;i<32;i++)e[32+i]=a[32+i];for(O(d,e.subarray(32),r+32),F(d),N(s,d),U(e,s),i=32;i<64;i++)e[i]=n[i];for(O(o,e,r+64),F(o),i=0;i<64;i++)f[i]=0;for(i=0;i<32;i++)f[i]=d[i];for(i=0;i<32;i++)for(u=0;u<32;u++)f[i+u]+=o[i]*a[u];return z(e.subarray(32),f),c}function K(e,t){var r=V(),n=V(),i=V(),u=V(),a=V(),o=V(),d=V();return y(e[2],Q),S(e[1],t),k(i,e[1]),x(u,i,te),A(i,i,e[2]),E(u,e[2],u),k(a,u),k(o,a),x(d,o,a),x(r,d,i),x(r,r,u),function(e,t){var r,n=V();for(r=0;r<16;r++)n[r]=t[r];for(r=250;r>=0;r--)k(n,n),1!==r&&x(n,n,t);for(r=0;r<16;r++)e[r]=n[r]}(r,r),x(r,r,i),x(r,r,u),x(r,r,u),x(e[0],r,u),k(n,e[0]),x(n,n,u),_(n,i)&&x(e[0],e[0],ue),k(n,e[0]),x(n,n,u),_(n,i)?-1:(w(e[0])===t[31]>>7&&A(e[0],$,e[0]),x(e[3],e[0],e[1]),0)}function Y(e,t,r,n){var i,a=new Uint8Array(32),o=new Uint8Array(64),d=[V(),V(),V(),V()],f=[V(),V(),V(),V()];if(r<64)return-1;if(K(f,n))return-1;for(i=0;i<r;i++)e[i]=t[i];for(i=0;i<32;i++)e[i+32]=n[i];if(O(o,e,r),F(o),L(d,f,o),N(f,t.subarray(32)),R(d,f),U(a,d),r-=64,u(t,0,a,0)){for(i=0;i<r;i++)e[i]=0;return-1}for(i=0;i<r;i++)e[i]=t[i+64];return r}function H(e,t){if(e.length!==he)throw new Error("bad key size");if(t.length!==le)throw new Error("bad nonce size")}function J(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function G(e){for(var t=0;t<e.length;t++)e[t]=0}var V=function(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;t++)r[t]=e[t];return r},X=function(){throw new Error("no PRNG")},W=new Uint8Array(16),Z=new Uint8Array(32);Z[0]=9;var $=V(),Q=V([1]),ee=V([56129,1]),te=V([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),re=V([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),ne=V([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),ie=V([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),ue=V([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]),ae=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]),oe=function(e){var t,r,n,i,u,a,o,d;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&e[0]|(255&e[1])<<8,this.r[0]=8191&t,r=255&e[2]|(255&e[3])<<8,this.r[1]=8191&(t>>>13|r<<3),n=255&e[4]|(255&e[5])<<8,this.r[2]=7939&(r>>>10|n<<6),i=255&e[6]|(255&e[7])<<8,this.r[3]=8191&(n>>>7|i<<9),u=255&e[8]|(255&e[9])<<8,this.r[4]=255&(i>>>4|u<<12),this.r[5]=u>>>1&8190,a=255&e[10]|(255&e[11])<<8,this.r[6]=8191&(u>>>14|a<<2),o=255&e[12]|(255&e[13])<<8,this.r[7]=8065&(a>>>11|o<<5),d=255&e[14]|(255&e[15])<<8,this.r[8]=8191&(o>>>8|d<<8),this.r[9]=d>>>5&127,this.pad[0]=255&e[16]|(255&e[17])<<8,this.pad[1]=255&e[18]|(255&e[19])<<8,this.pad[2]=255&e[20]|(255&e[21])<<8,this.pad[3]=255&e[22]|(255&e[23])<<8,this.pad[4]=255&e[24]|(255&e[25])<<8,this.pad[5]=255&e[26]|(255&e[27])<<8,this.pad[6]=255&e[28]|(255&e[29])<<8,this.pad[7]=255&e[30]|(255&e[31])<<8};oe.prototype.blocks=function(e,t,r){for(var n,i,u,a,o,d,f,s,c,h,l,p,b,y,m,g,v,_,w,S=this.fin?0:2048,E=this.h[0],A=this.h[1],x=this.h[2],k=this.h[3],M=this.h[4],I=this.h[5],T=this.h[6],B=this.h[7],C=this.h[8],P=this.h[9],O=this.r[0],R=this.r[1],j=this.r[2],U=this.r[3],L=this.r[4],N=this.r[5],D=this.r[6],z=this.r[7],F=this.r[8],q=this.r[9];r>=16;)n=255&e[t+0]|(255&e[t+1])<<8,E+=8191&n,i=255&e[t+2]|(255&e[t+3])<<8,A+=8191&(n>>>13|i<<3),u=255&e[t+4]|(255&e[t+5])<<8,x+=8191&(i>>>10|u<<6),a=255&e[t+6]|(255&e[t+7])<<8,k+=8191&(u>>>7|a<<9),o=255&e[t+8]|(255&e[t+9])<<8,M+=8191&(a>>>4|o<<12),I+=o>>>1&8191,d=255&e[t+10]|(255&e[t+11])<<8,T+=8191&(o>>>14|d<<2),f=255&e[t+12]|(255&e[t+13])<<8,B+=8191&(d>>>11|f<<5),s=255&e[t+14]|(255&e[t+15])<<8,h=c=0,h+=E*O,h+=A*(5*q),h+=x*(5*F),h+=k*(5*z),c=(h+=M*(5*D))>>>13,h&=8191,h+=I*(5*N),h+=T*(5*L),h+=B*(5*U),h+=(C+=8191&(f>>>8|s<<8))*(5*j),l=c+=(h+=(P+=s>>>5|S)*(5*R))>>>13,l+=E*R,l+=A*O,l+=x*(5*q),l+=k*(5*F),c=(l+=M*(5*z))>>>13,l&=8191,l+=I*(5*D),l+=T*(5*N),l+=B*(5*L),l+=C*(5*U),c+=(l+=P*(5*j))>>>13,l&=8191,p=c,p+=E*j,p+=A*R,p+=x*O,p+=k*(5*q),c=(p+=M*(5*F))>>>13,p&=8191,p+=I*(5*z),p+=T*(5*D),p+=B*(5*N),p+=C*(5*L),b=c+=(p+=P*(5*U))>>>13,b+=E*U,b+=A*j,b+=x*R,b+=k*O,c=(b+=M*(5*q))>>>13,b&=8191,b+=I*(5*F),b+=T*(5*z),b+=B*(5*D),b+=C*(5*N),y=c+=(b+=P*(5*L))>>>13,y+=E*L,y+=A*U,y+=x*j,y+=k*R,c=(y+=M*O)>>>13,y&=8191,y+=I*(5*q),y+=T*(5*F),y+=B*(5*z),y+=C*(5*D),m=c+=(y+=P*(5*N))>>>13,m+=E*N,m+=A*L,m+=x*U,m+=k*j,c=(m+=M*R)>>>13,m&=8191,m+=I*O,m+=T*(5*q),m+=B*(5*F),m+=C*(5*z),g=c+=(m+=P*(5*D))>>>13,g+=E*D,g+=A*N,g+=x*L,g+=k*U,c=(g+=M*j)>>>13,g&=8191,g+=I*R,g+=T*O,g+=B*(5*q),g+=C*(5*F),v=c+=(g+=P*(5*z))>>>13,v+=E*z,v+=A*D,v+=x*N,v+=k*L,c=(v+=M*U)>>>13,v&=8191,v+=I*j,v+=T*R,v+=B*O,v+=C*(5*q),_=c+=(v+=P*(5*F))>>>13,_+=E*F,_+=A*z,_+=x*D,_+=k*N,c=(_+=M*L)>>>13,_&=8191,_+=I*U,_+=T*j,_+=B*R,_+=C*O,w=c+=(_+=P*(5*q))>>>13,w+=E*q,w+=A*F,w+=x*z,w+=k*D,c=(w+=M*N)>>>13,w&=8191,w+=I*L,w+=T*U,w+=B*j,w+=C*R,E=h=8191&(c=(c=((c+=(w+=P*O)>>>13)<<2)+c|0)+(h&=8191)|0),A=l+=c>>>=13,x=p&=8191,k=b&=8191,M=y&=8191,I=m&=8191,T=g&=8191,B=v&=8191,C=_&=8191,P=w&=8191,t+=16,r-=16;this.h[0]=E,this.h[1]=A,this.h[2]=x,this.h[3]=k,this.h[4]=M,this.h[5]=I,this.h[6]=T,this.h[7]=B,this.h[8]=C,this.h[9]=P},oe.prototype.finish=function(e,t){var r,n,i,u,a=new Uint16Array(10);if(this.leftover){for(u=this.leftover,this.buffer[u++]=1;u<16;u++)this.buffer[u]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(r=this.h[1]>>>13,this.h[1]&=8191,u=2;u<10;u++)this.h[u]+=r,r=this.h[u]>>>13,this.h[u]&=8191;for(this.h[0]+=5*r,r=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=r,r=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=r,a[0]=this.h[0]+5,r=a[0]>>>13,a[0]&=8191,u=1;u<10;u++)a[u]=this.h[u]+r,r=a[u]>>>13,a[u]&=8191;for(a[9]-=8192,n=(1^r)-1,u=0;u<10;u++)a[u]&=n;for(n=~n,u=0;u<10;u++)this.h[u]=this.h[u]&n|a[u];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,u=1;u<8;u++)i=(this.h[u]+this.pad[u]|0)+(i>>>16)|0,this.h[u]=65535&i;e[t+0]=this.h[0]>>>0&255,e[t+1]=this.h[0]>>>8&255,e[t+2]=this.h[1]>>>0&255,e[t+3]=this.h[1]>>>8&255,e[t+4]=this.h[2]>>>0&255,e[t+5]=this.h[2]>>>8&255,e[t+6]=this.h[3]>>>0&255,e[t+7]=this.h[3]>>>8&255,e[t+8]=this.h[4]>>>0&255,e[t+9]=this.h[4]>>>8&255,e[t+10]=this.h[5]>>>0&255,e[t+11]=this.h[5]>>>8&255,e[t+12]=this.h[6]>>>0&255,e[t+13]=this.h[6]>>>8&255,e[t+14]=this.h[7]>>>0&255,e[t+15]=this.h[7]>>>8&255},oe.prototype.update=function(e,t,r){var n,i;if(this.leftover){for((i=16-this.leftover)>r&&(i=r),n=0;n<i;n++)this.buffer[this.leftover+n]=e[t+n];if(r-=i,t+=i,this.leftover+=i,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(r>=16&&(i=r-r%16,this.blocks(e,t,i),t+=i,r-=i),r){for(n=0;n<r;n++)this.buffer[this.leftover+n]=e[t+n];this.leftover+=r}};var de=p,fe=b,se=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],ce=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),he=32,le=24,pe=32,be=32,ye=le;e.lowlevel={crypto_core_hsalsa20:o,crypto_stream_xor:c,crypto_stream:s,crypto_stream_salsa20_xor:d,crypto_stream_salsa20:f,crypto_onetimeauth:h,crypto_onetimeauth_verify:l,crypto_verify_16:i,crypto_verify_32:u,crypto_secretbox:p,crypto_secretbox_open:b,crypto_scalarmult:I,crypto_scalarmult_base:T,crypto_box_beforenm:C,crypto_box_afternm:de,crypto_box:function(e,t,r,n,i,u){var a=new Uint8Array(32);return C(a,i,u),de(e,t,r,n,a)},crypto_box_open:function(e,t,r,n,i,u){var a=new Uint8Array(32);return C(a,i,u),fe(e,t,r,n,a)},crypto_box_keypair:B,crypto_hash:O,crypto_sign:q,crypto_sign_keypair:D,crypto_sign_open:Y,crypto_secretbox_KEYBYTES:he,crypto_secretbox_NONCEBYTES:le,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:pe,crypto_box_SECRETKEYBYTES:be,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:ye,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},e.randomBytes=function(e){var t=new Uint8Array(e);return X(t,e),t},e.secretbox=function(e,t,r){J(e,t,r),H(r,t);for(var n=new Uint8Array(32+e.length),i=new Uint8Array(n.length),u=0;u<e.length;u++)n[u+32]=e[u];return p(i,n,n.length,t,r),i.subarray(16)},e.secretbox.open=function(e,t,r){J(e,t,r),H(r,t);for(var n=new Uint8Array(16+e.length),i=new Uint8Array(n.length),u=0;u<e.length;u++)n[u+16]=e[u];return n.length<32?null:0!==b(i,n,n.length,t,r)?null:i.subarray(32)},e.secretbox.keyLength=he,e.secretbox.nonceLength=le,e.secretbox.overheadLength=16,e.scalarMult=function(e,t){if(J(e,t),32!==e.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var r=new Uint8Array(32);return I(r,e,t),r},e.scalarMult.base=function(e){if(J(e),32!==e.length)throw new Error("bad n size");var t=new Uint8Array(32);return T(t,e),t},e.scalarMult.scalarLength=32,e.scalarMult.groupElementLength=32,e.box=function(t,r,n,i){var u=e.box.before(n,i);return e.secretbox(t,r,u)},e.box.before=function(e,t){J(e,t),function(e,t){if(e.length!==pe)throw new Error("bad public key size");if(t.length!==be)throw new Error("bad secret key size")}(e,t);var r=new Uint8Array(32);return C(r,e,t),r},e.box.after=e.secretbox,e.box.open=function(t,r,n,i){var u=e.box.before(n,i);return e.secretbox.open(t,r,u)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var e=new Uint8Array(pe),t=new Uint8Array(be);return B(e,t),{publicKey:e,secretKey:t}},e.box.keyPair.fromSecretKey=function(e){if(J(e),e.length!==be)throw new Error("bad secret key size");var t=new Uint8Array(pe);return T(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.box.publicKeyLength=pe,e.box.secretKeyLength=be,e.box.sharedKeyLength=32,e.box.nonceLength=ye,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(e,t){if(J(e,t),64!==t.length)throw new Error("bad secret key size");var r=new Uint8Array(64+e.length);return q(r,e,e.length,t),r},e.sign.open=function(e,t){if(J(e,t),32!==t.length)throw new Error("bad public key size");var r=new Uint8Array(e.length),n=Y(r,e,e.length,t);if(n<0)return null;for(var i=new Uint8Array(n),u=0;u<i.length;u++)i[u]=r[u];return i},e.sign.detached=function(t,r){for(var n=e.sign(t,r),i=new Uint8Array(64),u=0;u<i.length;u++)i[u]=n[u];return i},e.sign.detached.verify=function(e,t,r){if(J(e,t,r),64!==t.length)throw new Error("bad signature size");if(32!==r.length)throw new Error("bad public key size");var n,i=new Uint8Array(64+e.length),u=new Uint8Array(64+e.length);for(n=0;n<64;n++)i[n]=t[n];for(n=0;n<e.length;n++)i[n+64]=e[n];return Y(u,i,i.length,r)>=0},e.sign.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(64);return D(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(J(e),64!==e.length)throw new Error("bad secret key size");for(var t=new Uint8Array(32),r=0;r<t.length;r++)t[r]=e[32+r];return{publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(J(e),32!==e.length)throw new Error("bad seed size");for(var t=new Uint8Array(32),r=new Uint8Array(64),n=0;n<32;n++)r[n]=e[n];return D(t,r,!0),{publicKey:t,secretKey:r}},e.sign.publicKeyLength=32,e.sign.secretKeyLength=64,e.sign.seedLength=32,e.sign.signatureLength=64,e.hash=function(e){J(e);var t=new Uint8Array(64);return O(t,e,e.length),t},e.hash.hashLength=64,e.verify=function(e,t){return J(e,t),0!==e.length&&0!==t.length&&e.length===t.length&&0===n(e,0,t,0,e.length)},e.setPRNG=function(e){X=e},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null;t&&t.getRandomValues?e.setPRNG(function(e,r){var n,i=new Uint8Array(r);for(n=0;n<r;n+=65536)t.getRandomValues(i.subarray(n,n+Math.min(r-n,65536)));for(n=0;n<r;n++)e[n]=i[n];G(i)}):(t=r(192))&&t.randomBytes&&e.setPRNG(function(e,r){var n,i=t.randomBytes(r);for(n=0;n<r;n++)e[n]=i[n];G(i)})}()}(void 0!==e&&e.exports?e.exports:self.nacl=self.nacl||{})},function(e,t){},function(e,t,r){e.exports=r(194)("ed25519")},function(e,t,r){(function(n,i){var u=r(195),a=r(196),o=a.join,d=a.dirname,f=u.accessSync&&function(e){try{u.accessSync(e)}catch(e){return!1}return!0}||u.existsSync||a.existsSync,s={arrow:n.env.NODE_BINDINGS_ARROW||" → ",compiled:n.env.NODE_BINDINGS_COMPILED_DIR||"compiled",platform:n.platform,arch:n.arch,version:n.versions.node,bindings:"bindings.node",try:[["module_root","build","bindings"],["module_root","build","Debug","bindings"],["module_root","build","Release","bindings"],["module_root","out","Debug","bindings"],["module_root","Debug","bindings"],["module_root","out","Release","bindings"],["module_root","Release","bindings"],["module_root","build","default","bindings"],["module_root","compiled","version","platform","arch","bindings"]]};e.exports=t=function(e){"string"==typeof e?e={bindings:e}:e||(e={}),Object.keys(s).map(function(t){t in e||(e[t]=s[t])}),e.module_root||(e.module_root=t.getRoot(t.getFileName())),".node"!=a.extname(e.bindings)&&(e.bindings+=".node");for(var r,n,i,u=[],d=0,f=e.try.length;d<f;d++){r=o.apply(null,e.try[d].map(function(t){return e[t]||t})),u.push(r);try{return e.path,n=!function(){var e=new Error('Cannot find module "."');throw e.code="MODULE_NOT_FOUND",e}(),e.path||(n.path=r),n}catch(e){if(!/not find/i.test(e.message))throw e}}throw(i=new Error("Could not locate the bindings file. Tried:\n"+u.map(function(t){return e.arrow+t}).join("\n"))).tries=u,i},t.getFileName=function(e){var t,r=Error.prepareStackTrace,n=Error.stackTraceLimit;return Error.stackTraceLimit=10,Error.prepareStackTrace=function(r,n){for(var u=0,a=n.length;u<a;u++)if((t=n[u].getFileName())!==i){if(!e)return;if(t!==e)return}},Error.captureStackTrace({}),Error.prepareStackTrace=r,Error.stackTraceLimit=n,t},t.getRoot=function(e){for(var t,r=d(e);;){if("."===r&&(r=n.cwd()),f(o(r,"package.json"))||f(o(r,"node_modules")))return r;if(t===r)throw new Error('Could not find module root given file: "'+e+'". Do you have a `package.json` file? ');t=r,r=o(r,"..")}}}).call(t,r(6),"/index.js")},function(e,t){},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(e){return i.exec(e).slice(1)};t.resolve=function(){for(var t="",i=!1,u=arguments.length-1;u>=-1&&!i;u--){var a=u>=0?arguments[u]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,i="/"===a.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),u="/"===a(e,-1);return(e=r(n(e.split("/"),function(e){return!!e}),!i).join("/"))||i||(e="."),e&&u&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var i=n(e.split("/")),u=n(r.split("/")),a=Math.min(i.length,u.length),o=a,d=0;d<a;d++)if(i[d]!==u[d]){o=d;break}for(var f=[],d=o;d<i.length;d++)f.push("..");return(f=f.concat(u.slice(o))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=u(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},t.basename=function(e,t){var r=u(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){return u(e)[3]};var a="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(t,r(6))}])}()}).call(this,__webpack_require__(10).setImmediate,__webpack_require__(10).clearImmediate)},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(4),i=r(54),u=r(53);e.exports=function(e){return function(t,r,a){var o,d=n(t),f=i(d.length),s=u(a,f);if(e&&r!=r){for(;f>s;)if((o=d[s++])!=o)return!0}else for(;f>s;s++)if((e||s in d)&&d[s]===r)return e||s||0;return!e&&-1}}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){var n=r(7),i=r(1),u=r(69),a=r(67),o=r(14),d=function(e,t,r){var f,s,c,h=e&d.F,l=e&d.G,p=e&d.S,b=e&d.P,y=e&d.B,m=e&d.W,g=l?i:i[t]||(i[t]={}),v=g.prototype,_=l?n:p?n[t]:(n[t]||{}).prototype;for(f in l&&(r=t),r)(s=!h&&_&&void 0!==_[f])&&o(g,f)||(c=s?_[f]:r[f],g[f]=l&&"function"!=typeof _[f]?r[f]:y&&s?u(c,n):m&&_[f]==c?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):b&&"function"==typeof c?u(Function.call,c):c,b&&((g.virtual||(g.virtual={}))[f]=c,e&d.R&&v&&!v[f]&&a(v,f,c)))};d.F=1,d.G=2,d.S=4,d.P=8,d.B=16,d.W=32,d.U=64,d.R=128,e.exports=d},function(e,t,r){r(70),e.exports=r(1).Object.entries},function(e,t,r){var n;!function(){"use strict";var i={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function u(e){return function(e,t){var r,n,a,o,d,f,s,c,h,l=1,p=e.length,b="";for(n=0;n<p;n++)if("string"==typeof e[n])b+=e[n];else if(Array.isArray(e[n])){if((o=e[n])[2])for(r=t[l],a=0;a<o[2].length;a++){if(!r.hasOwnProperty(o[2][a]))throw new Error(u('[sprintf] property "%s" does not exist',o[2][a]));r=r[o[2][a]]}else r=o[1]?t[o[1]]:t[l++];if(i.not_type.test(o[8])&&i.not_primitive.test(o[8])&&r instanceof Function&&(r=r()),i.numeric_arg.test(o[8])&&"number"!=typeof r&&isNaN(r))throw new TypeError(u("[sprintf] expecting number but found %T",r));switch(i.number.test(o[8])&&(c=r>=0),o[8]){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,o[6]?parseInt(o[6]):0);break;case"e":r=o[7]?parseFloat(r).toExponential(o[7]):parseFloat(r).toExponential();break;case"f":r=o[7]?parseFloat(r).toFixed(o[7]):parseFloat(r);break;case"g":r=o[7]?String(Number(r.toPrecision(o[7]))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=o[7]?r.substring(0,o[7]):r;break;case"t":r=String(!!r),r=o[7]?r.substring(0,o[7]):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=o[7]?r.substring(0,o[7]):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=o[7]?r.substring(0,o[7]):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}i.json.test(o[8])?b+=r:(!i.number.test(o[8])||c&&!o[3]?h="":(h=c?"+":"-",r=r.toString().replace(i.sign,"")),f=o[4]?"0"===o[4]?"0":o[4].charAt(1):" ",s=o[6]-(h+r).length,d=o[6]&&s>0?f.repeat(s):"",b+=o[5]?h+r+d:"0"===f?h+d+r:d+h+r)}return b}(function(e){if(o[e])return o[e];var t,r=e,n=[],u=0;for(;r;){if(null!==(t=i.text.exec(r)))n.push(t[0]);else if(null!==(t=i.modulo.exec(r)))n.push("%");else{if(null===(t=i.placeholder.exec(r)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){u|=1;var a=[],d=t[2],f=[];if(null===(f=i.key.exec(d)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(f[1]);""!==(d=d.substring(f[0].length));)if(null!==(f=i.key_access.exec(d)))a.push(f[1]);else{if(null===(f=i.index_access.exec(d)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(f[1])}t[2]=a}else u|=2;if(3===u)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push(t)}r=r.substring(t[0].length)}return o[e]=n}(e),arguments)}function a(e,t){return u.apply(null,[e].concat(t||[]))}var o=Object.create(null);t.sprintf=u,t.vsprintf=a,"undefined"!=typeof window&&(window.sprintf=u,window.vsprintf=a,void 0===(n=function(){return{sprintf:u,vsprintf:a}}.call(t,r,t,e))||(e.exports=n))}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){if("hash"in t){var r=new u.default.Condition;return r.type=t.type_id,r.bitmask=t.bitmask,r.hash=n.Buffer.from(i.default.decode(t.hash)),r.maxFulfillmentLength=parseInt(t.max_fulfillment_length,10),r}var a=void 0;return"threshold-sha-256"===t.type&&((a=new u.default.ThresholdSha256).threshold=t.threshold,t.subconditions.forEach(function(t){var r=e(t);"getConditionUri"in r?a.addSubfulfillment(r):"serializeUri"in r&&a.addSubcondition(r)})),"ed25519-sha-256"===t.type&&((a=new u.default.Ed25519Sha256).publicKey=n.Buffer.from(i.default.decode(t.public_key))),a};var n=r(2),i=a(r(3)),u=a(r(11));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t){(function(t){e.exports=t}).call(this,{})},function(e,t,r){(function(n,i){var u;
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.7.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2017
 * @license MIT
 */
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.7.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2017
 * @license MIT
 */
!function(){"use strict";var a="input is invalid type",o="object"==typeof window,d=o?window:{};d.JS_SHA3_NO_WINDOW&&(o=!1);var f=!o&&"object"==typeof self;!d.JS_SHA3_NO_NODE_JS&&"object"==typeof n&&n.versions&&n.versions.node?d=i:f&&(d=self);var s=!d.JS_SHA3_NO_COMMON_JS&&"object"==typeof e&&e.exports,c=r(20),h=!d.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,l="0123456789abcdef".split(""),p=[4,1024,262144,67108864],b=[0,8,16,24],y=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],m=[224,256,384,512],g=[128,256],v=["hex","buffer","arrayBuffer","array","digest"],_={128:168,256:136};!d.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!h||!d.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var w=function(e,t,r){return function(n){return new U(e,t,e).update(n)[r]()}},S=function(e,t,r){return function(n,i){return new U(e,t,i).update(n)[r]()}},E=function(e,t,r){return function(t,n,i,u){return I["cshake"+e].update(t,n,i,u)[r]()}},A=function(e,t,r){return function(t,n,i,u){return I["kmac"+e].update(t,n,i,u)[r]()}},x=function(e,t,r,n){for(var i=0;i<v.length;++i){var u=v[i];e[u]=t(r,n,u)}return e},k=function(e,t){var r=w(e,t,"hex");return r.create=function(){return new U(e,t,e)},r.update=function(e){return r.create().update(e)},x(r,w,e,t)},M=[{name:"keccak",padding:[1,256,65536,16777216],bits:m,createMethod:k},{name:"sha3",padding:[6,1536,393216,100663296],bits:m,createMethod:k},{name:"shake",padding:[31,7936,2031616,520093696],bits:g,createMethod:function(e,t){var r=S(e,t,"hex");return r.create=function(r){return new U(e,t,r)},r.update=function(e,t){return r.create(t).update(e)},x(r,S,e,t)}},{name:"cshake",padding:p,bits:g,createMethod:function(e,t){var r=_[e],n=E(e,0,"hex");return n.create=function(n,i,u){return i||u?new U(e,t,n).bytepad([i,u],r):I["shake"+e].create(n)},n.update=function(e,t,r,i){return n.create(t,r,i).update(e)},x(n,E,e,t)}},{name:"kmac",padding:p,bits:g,createMethod:function(e,t){var r=_[e],n=A(e,0,"hex");return n.create=function(n,i,u){return new L(e,t,i).bytepad(["KMAC",u],r).bytepad([n],r)},n.update=function(e,t,r,i){return n.create(e,r,i).update(t)},x(n,A,e,t)}}],I={},T=[],B=0;B<M.length;++B)for(var C=M[B],P=C.bits,O=0;O<P.length;++O){var R=C.name+"_"+P[O];if(T.push(R),I[R]=C.createMethod(P[O],C.padding),"sha3"!==C.name){var j=C.name+P[O];T.push(j),I[j]=I[R]}}function U(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function L(e,t,r){U.call(this,e,t,r)}U.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw a;if(null===e)throw a;if(h&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||h&&ArrayBuffer.isView(e)))throw a;t=!0}for(var n,i,u=this.blocks,o=this.byteCount,d=e.length,f=this.blockCount,s=0,c=this.s;s<d;){if(this.reset)for(this.reset=!1,u[0]=this.block,n=1;n<f+1;++n)u[n]=0;if(t)for(n=this.start;s<d&&n<o;++s)u[n>>2]|=e[s]<<b[3&n++];else for(n=this.start;s<d&&n<o;++s)(i=e.charCodeAt(s))<128?u[n>>2]|=i<<b[3&n++]:i<2048?(u[n>>2]|=(192|i>>6)<<b[3&n++],u[n>>2]|=(128|63&i)<<b[3&n++]):i<55296||i>=57344?(u[n>>2]|=(224|i>>12)<<b[3&n++],u[n>>2]|=(128|i>>6&63)<<b[3&n++],u[n>>2]|=(128|63&i)<<b[3&n++]):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++s)),u[n>>2]|=(240|i>>18)<<b[3&n++],u[n>>2]|=(128|i>>12&63)<<b[3&n++],u[n>>2]|=(128|i>>6&63)<<b[3&n++],u[n>>2]|=(128|63&i)<<b[3&n++]);if(this.lastByteIndex=n,n>=o){for(this.start=n-o,this.block=u[f],n=0;n<f;++n)c[n]^=u[n];N(c),this.reset=!0}else this.start=n}return this}},U.prototype.encode=function(e,t){var r=255&e,n=1,i=[r];for(r=255&(e>>=8);r>0;)i.unshift(r),r=255&(e>>=8),++n;return t?i.push(n):i.unshift(n),this.update(i),i.length},U.prototype.encodeString=function(e){var t,r=typeof e;if("string"!==r){if("object"!==r)throw a;if(null===e)throw a;if(h&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||h&&ArrayBuffer.isView(e)))throw a;t=!0}var n=0,i=e.length;if(t)n=i;else for(var u=0;u<e.length;++u){var o=e.charCodeAt(u);o<128?n+=1:o<2048?n+=2:o<55296||o>=57344?n+=3:(o=65536+((1023&o)<<10|1023&e.charCodeAt(++u)),n+=4)}return n+=this.encode(8*n),this.update(e),n},U.prototype.bytepad=function(e,t){for(var r=this.encode(t),n=0;n<e.length;++n)r+=this.encodeString(e[n]);var i=t-r%t,u=[];return u.length=i,this.update(u),this},U.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,r=this.blockCount,n=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(e[0]=e[r],t=1;t<r+1;++t)e[t]=0;for(e[r-1]|=2147483648,t=0;t<r;++t)n[t]^=e[t];N(n)}},U.prototype.toString=U.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,u=0,a=0,o="";a<n;){for(u=0;u<t&&a<n;++u,++a)e=r[u],o+=l[e>>4&15]+l[15&e]+l[e>>12&15]+l[e>>8&15]+l[e>>20&15]+l[e>>16&15]+l[e>>28&15]+l[e>>24&15];a%t==0&&(N(r),u=0)}return i&&(e=r[u],o+=l[e>>4&15]+l[15&e],i>1&&(o+=l[e>>12&15]+l[e>>8&15]),i>2&&(o+=l[e>>20&15]+l[e>>16&15])),o},U.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,u=0,a=0,o=this.outputBits>>3;e=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(o);for(var d=new Uint32Array(e);a<n;){for(u=0;u<t&&a<n;++u,++a)d[a]=r[u];a%t==0&&N(r)}return i&&(d[u]=r[u],e=e.slice(0,o)),e},U.prototype.buffer=U.prototype.arrayBuffer,U.prototype.digest=U.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,n=this.s,i=this.outputBlocks,u=this.extraBytes,a=0,o=0,d=[];o<i;){for(a=0;a<r&&o<i;++a,++o)e=o<<2,t=n[a],d[e]=255&t,d[e+1]=t>>8&255,d[e+2]=t>>16&255,d[e+3]=t>>24&255;o%r==0&&N(n)}return u&&(e=o<<2,t=n[a],d[e]=255&t,u>1&&(d[e+1]=t>>8&255),u>2&&(d[e+2]=t>>16&255)),d},L.prototype=new U,L.prototype.finalize=function(){return this.encode(this.outputBits,!0),U.prototype.finalize.call(this)};var N=function(e){var t,r,n,i,u,a,o,d,f,s,c,h,l,p,b,m,g,v,_,w,S,E,A,x,k,M,I,T,B,C,P,O,R,j,U,L,N,D,z,F,q,K,Y,H,J,G,V,X,W,Z,$,Q,ee,te,re,ne,ie,ue,ae,oe,de,fe,se;for(n=0;n<48;n+=2)i=e[0]^e[10]^e[20]^e[30]^e[40],u=e[1]^e[11]^e[21]^e[31]^e[41],a=e[2]^e[12]^e[22]^e[32]^e[42],o=e[3]^e[13]^e[23]^e[33]^e[43],d=e[4]^e[14]^e[24]^e[34]^e[44],f=e[5]^e[15]^e[25]^e[35]^e[45],s=e[6]^e[16]^e[26]^e[36]^e[46],c=e[7]^e[17]^e[27]^e[37]^e[47],t=(h=e[8]^e[18]^e[28]^e[38]^e[48])^(a<<1|o>>>31),r=(l=e[9]^e[19]^e[29]^e[39]^e[49])^(o<<1|a>>>31),e[0]^=t,e[1]^=r,e[10]^=t,e[11]^=r,e[20]^=t,e[21]^=r,e[30]^=t,e[31]^=r,e[40]^=t,e[41]^=r,t=i^(d<<1|f>>>31),r=u^(f<<1|d>>>31),e[2]^=t,e[3]^=r,e[12]^=t,e[13]^=r,e[22]^=t,e[23]^=r,e[32]^=t,e[33]^=r,e[42]^=t,e[43]^=r,t=a^(s<<1|c>>>31),r=o^(c<<1|s>>>31),e[4]^=t,e[5]^=r,e[14]^=t,e[15]^=r,e[24]^=t,e[25]^=r,e[34]^=t,e[35]^=r,e[44]^=t,e[45]^=r,t=d^(h<<1|l>>>31),r=f^(l<<1|h>>>31),e[6]^=t,e[7]^=r,e[16]^=t,e[17]^=r,e[26]^=t,e[27]^=r,e[36]^=t,e[37]^=r,e[46]^=t,e[47]^=r,t=s^(i<<1|u>>>31),r=c^(u<<1|i>>>31),e[8]^=t,e[9]^=r,e[18]^=t,e[19]^=r,e[28]^=t,e[29]^=r,e[38]^=t,e[39]^=r,e[48]^=t,e[49]^=r,p=e[0],b=e[1],G=e[11]<<4|e[10]>>>28,V=e[10]<<4|e[11]>>>28,T=e[20]<<3|e[21]>>>29,B=e[21]<<3|e[20]>>>29,oe=e[31]<<9|e[30]>>>23,de=e[30]<<9|e[31]>>>23,K=e[40]<<18|e[41]>>>14,Y=e[41]<<18|e[40]>>>14,j=e[2]<<1|e[3]>>>31,U=e[3]<<1|e[2]>>>31,m=e[13]<<12|e[12]>>>20,g=e[12]<<12|e[13]>>>20,X=e[22]<<10|e[23]>>>22,W=e[23]<<10|e[22]>>>22,C=e[33]<<13|e[32]>>>19,P=e[32]<<13|e[33]>>>19,fe=e[42]<<2|e[43]>>>30,se=e[43]<<2|e[42]>>>30,te=e[5]<<30|e[4]>>>2,re=e[4]<<30|e[5]>>>2,L=e[14]<<6|e[15]>>>26,N=e[15]<<6|e[14]>>>26,v=e[25]<<11|e[24]>>>21,_=e[24]<<11|e[25]>>>21,Z=e[34]<<15|e[35]>>>17,$=e[35]<<15|e[34]>>>17,O=e[45]<<29|e[44]>>>3,R=e[44]<<29|e[45]>>>3,x=e[6]<<28|e[7]>>>4,k=e[7]<<28|e[6]>>>4,ne=e[17]<<23|e[16]>>>9,ie=e[16]<<23|e[17]>>>9,D=e[26]<<25|e[27]>>>7,z=e[27]<<25|e[26]>>>7,w=e[36]<<21|e[37]>>>11,S=e[37]<<21|e[36]>>>11,Q=e[47]<<24|e[46]>>>8,ee=e[46]<<24|e[47]>>>8,H=e[8]<<27|e[9]>>>5,J=e[9]<<27|e[8]>>>5,M=e[18]<<20|e[19]>>>12,I=e[19]<<20|e[18]>>>12,ue=e[29]<<7|e[28]>>>25,ae=e[28]<<7|e[29]>>>25,F=e[38]<<8|e[39]>>>24,q=e[39]<<8|e[38]>>>24,E=e[48]<<14|e[49]>>>18,A=e[49]<<14|e[48]>>>18,e[0]=p^~m&v,e[1]=b^~g&_,e[10]=x^~M&T,e[11]=k^~I&B,e[20]=j^~L&D,e[21]=U^~N&z,e[30]=H^~G&X,e[31]=J^~V&W,e[40]=te^~ne&ue,e[41]=re^~ie&ae,e[2]=m^~v&w,e[3]=g^~_&S,e[12]=M^~T&C,e[13]=I^~B&P,e[22]=L^~D&F,e[23]=N^~z&q,e[32]=G^~X&Z,e[33]=V^~W&$,e[42]=ne^~ue&oe,e[43]=ie^~ae&de,e[4]=v^~w&E,e[5]=_^~S&A,e[14]=T^~C&O,e[15]=B^~P&R,e[24]=D^~F&K,e[25]=z^~q&Y,e[34]=X^~Z&Q,e[35]=W^~$&ee,e[44]=ue^~oe&fe,e[45]=ae^~de&se,e[6]=w^~E&p,e[7]=S^~A&b,e[16]=C^~O&x,e[17]=P^~R&k,e[26]=F^~K&j,e[27]=q^~Y&U,e[36]=Z^~Q&H,e[37]=$^~ee&J,e[46]=oe^~fe&te,e[47]=de^~se&re,e[8]=E^~p&m,e[9]=A^~b&g,e[18]=O^~x&M,e[19]=R^~k&I,e[28]=K^~j&L,e[29]=Y^~U&N,e[38]=Q^~H&G,e[39]=ee^~J&V,e[48]=fe^~te&ne,e[49]=se^~re&ie,e[0]^=y[n],e[1]^=y[n+1]};if(s)e.exports=I;else{for(B=0;B<T.length;++B)d[T[B]]=I[T[B]];c&&(void 0===(u=function(){return I}.call(t,r,t,e))||(e.exports=u))}}()}).call(this,r(8),r(0))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n.default.sha3_256.create().update(e).hex()};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(21))},function(e,t,r){(function(e,t){!function(e,r){"use strict";if(!e.setImmediate){var n,i=1,u={},a=!1,o=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick(function(){s(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?function(){var t="setImmediate$"+Math.random()+"$",r=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&s(+r.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),n=function(r){e.postMessage(t+r,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){s(e.data)},n=function(t){e.port2.postMessage(t)}}():o&&"onreadystatechange"in o.createElement("script")?function(){var e=o.documentElement;n=function(t){var r=o.createElement("script");r.onreadystatechange=function(){s(t),r.onreadystatechange=null,e.removeChild(r),r=null},e.appendChild(r)}}():n=function(e){setTimeout(s,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var a={callback:e,args:t};return u[i]=a,n(i),i++},d.clearImmediate=f}function f(e){delete u[e]}function s(e){if(a)setTimeout(s,0,e);else{var t=u[e];if(t){a=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}(t)}finally{f(e),a=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,r(0),r(8))},function(e,t,r){(function(t){var r=function(){"use strict";function e(e,t){return null!=t&&e instanceof t}var r,n,i;try{r=Map}catch(e){r=function(){}}try{n=Set}catch(e){n=function(){}}try{i=Promise}catch(e){i=function(){}}function u(a,d,f,s,c){"object"==typeof d&&(f=d.depth,s=d.prototype,c=d.includeNonEnumerable,d=d.circular);var h=[],l=[],p=void 0!==t;return void 0===d&&(d=!0),void 0===f&&(f=1/0),function a(f,b){if(null===f)return null;if(0===b)return f;var y,m;if("object"!=typeof f)return f;if(e(f,r))y=new r;else if(e(f,n))y=new n;else if(e(f,i))y=new i(function(e,t){f.then(function(t){e(a(t,b-1))},function(e){t(a(e,b-1))})});else if(u.__isArray(f))y=[];else if(u.__isRegExp(f))y=new RegExp(f.source,o(f)),f.lastIndex&&(y.lastIndex=f.lastIndex);else if(u.__isDate(f))y=new Date(f.getTime());else{if(p&&t.isBuffer(f))return y=new t(f.length),f.copy(y),y;e(f,Error)?y=Object.create(f):void 0===s?(m=Object.getPrototypeOf(f),y=Object.create(m)):(y=Object.create(s),m=s)}if(d){var g=h.indexOf(f);if(-1!=g)return l[g];h.push(f),l.push(y)}for(var v in e(f,r)&&f.forEach(function(e,t){var r=a(t,b-1),n=a(e,b-1);y.set(r,n)}),e(f,n)&&f.forEach(function(e){var t=a(e,b-1);y.add(t)}),f){var _;m&&(_=Object.getOwnPropertyDescriptor(m,v)),_&&null==_.set||(y[v]=a(f[v],b-1))}if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(f);for(v=0;v<w.length;v++){var S=w[v];(!(A=Object.getOwnPropertyDescriptor(f,S))||A.enumerable||c)&&(y[S]=a(f[S],b-1),A.enumerable||Object.defineProperty(y,S,{enumerable:!1}))}}if(c){var E=Object.getOwnPropertyNames(f);for(v=0;v<E.length;v++){var A,x=E[v];(A=Object.getOwnPropertyDescriptor(f,x))&&A.enumerable||(y[x]=a(f[x],b-1),Object.defineProperty(y,x,{enumerable:!1}))}}return y}(a,f)}function a(e){return Object.prototype.toString.call(e)}function o(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return u.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},u.__objToStr=a,u.__isDate=function(e){return"object"==typeof e&&"[object Date]"===a(e)},u.__isArray=function(e){return"object"==typeof e&&"[object Array]"===a(e)},u.__isRegExp=function(e){return"object"==typeof e&&"[object RegExp]"===a(e)},u.__getRegExpFlags=o,u}();"object"==typeof e&&e.exports&&(e.exports=r)}).call(this,r(2).Buffer)},function(e,t){var r,n,i,u=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,a={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function o(e){return u.lastIndex=0,u.test(e)?'"'+e.replace(u,function(e){var t=a[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}e.exports=function(e,t,u){var a;if(r="",n="","number"==typeof u)for(a=0;a<u;a+=1)n+=" ";else"string"==typeof u&&(n=u);if(i=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return function e(t,u){var a,d,f,s,c,h=r,l=u[t];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(t)),"function"==typeof i&&(l=i.call(u,t,l)),typeof l){case"string":return o(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(r+=n,c=[],"[object Array]"===Object.prototype.toString.apply(l)){for(s=l.length,a=0;a<s;a+=1)c[a]=e(a,l)||"null";return f=0===c.length?"[]":r?"[\n"+r+c.join(",\n"+r)+"\n"+h+"]":"["+c.join(",")+"]",r=h,f}if(i&&"object"==typeof i)for(s=i.length,a=0;a<s;a+=1)"string"==typeof(d=i[a])&&(f=e(d,l))&&c.push(o(d)+(r?": ":":")+f);else for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&(f=e(d,l))&&c.push(o(d)+(r?": ":":")+f);return f=0===c.length?"{}":r?"{\n"+r+c.join(",\n"+r)+"\n"+h+"}":"{"+c.join(",")+"}",r=h,f}}("",{"":e})}},function(e,t){var r,n,i,u,a={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},o=function(e){throw{name:"SyntaxError",message:e,at:r,text:i}},d=function(e){return e&&e!==n&&o("Expected '"+e+"' instead of '"+n+"'"),n=i.charAt(r),r+=1,n},f=function(){var e,t="";for("-"===n&&(t="-",d("-"));n>="0"&&n<="9";)t+=n,d();if("."===n)for(t+=".";d()&&n>="0"&&n<="9";)t+=n;if("e"===n||"E"===n)for(t+=n,d(),"-"!==n&&"+"!==n||(t+=n,d());n>="0"&&n<="9";)t+=n,d();if(e=+t,isFinite(e))return e;o("Bad number")},s=function(){var e,t,r,i="";if('"'===n)for(;d();){if('"'===n)return d(),i;if("\\"===n)if(d(),"u"===n){for(r=0,t=0;t<4&&(e=parseInt(d(),16),isFinite(e));t+=1)r=16*r+e;i+=String.fromCharCode(r)}else{if("string"!=typeof a[n])break;i+=a[n]}else i+=n}o("Bad string")},c=function(){for(;n&&n<=" ";)d()};u=function(){switch(c(),n){case"{":return function(){var e,t={};if("{"===n){if(d("{"),c(),"}"===n)return d("}"),t;for(;n;){if(e=s(),c(),d(":"),Object.hasOwnProperty.call(t,e)&&o('Duplicate key "'+e+'"'),t[e]=u(),c(),"}"===n)return d("}"),t;d(","),c()}}o("Bad object")}();case"[":return function(){var e=[];if("["===n){if(d("["),c(),"]"===n)return d("]"),e;for(;n;){if(e.push(u()),c(),"]"===n)return d("]"),e;d(","),c()}}o("Bad array")}();case'"':return s();case"-":return f();default:return n>="0"&&n<="9"?f():function(){switch(n){case"t":return d("t"),d("r"),d("u"),d("e"),!0;case"f":return d("f"),d("a"),d("l"),d("s"),d("e"),!1;case"n":return d("n"),d("u"),d("l"),d("l"),null}o("Unexpected '"+n+"'")}()}},e.exports=function(e,t){var a;return i=e,r=0,n=" ",a=u(),c(),n&&o("Syntax error"),"function"==typeof t?function e(r,n){var i,u,a=r[n];if(a&&"object"==typeof a)for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(void 0!==(u=e(a,i))?a[i]=u:delete a[i]);return t.call(r,n,a)}({"":a},""):a}},function(e,t,r){t.parse=r(26),t.stringify=r(25)},function(e,t,r){var n="undefined"!=typeof JSON?JSON:r(27);e.exports=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});var r=t.space||"";"number"==typeof r&&(r=Array(r+1).join(" "));var a="boolean"==typeof t.cycles&&t.cycles,o=t.replacer||function(e,t){return t},d=t.cmp&&function(e){return function(t){return function(r,n){var i={key:r,value:t[r]},u={key:n,value:t[n]};return e(i,u)}}}(t.cmp),f=[];return function e(t,s,c,h){var l=r?"\n"+new Array(h+1).join(r):"",p=r?": ":":";if(c&&c.toJSON&&"function"==typeof c.toJSON&&(c=c.toJSON()),void 0!==(c=o.call(t,s,c))){if("object"!=typeof c||null===c)return n.stringify(c);if(i(c)){for(var b=[],y=0;y<c.length;y++){var m=e(c,y,c[y],h+1)||n.stringify(null);b.push(l+r+m)}return"["+b.join(",")+l+"]"}if(-1!==f.indexOf(c)){if(a)return n.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}f.push(c);var g=u(c).sort(d&&d(c));for(b=[],y=0;y<g.length;y++){var v=e(c,s=g[y],c[s],h+1);if(v){var _=n.stringify(s)+p+v;b.push(l+r+_)}}return f.splice(f.indexOf(c),1),"{"+b.join(",")+l+"}"}}({"":e},"",e,0)};var i=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},u=Object.keys||function(e){var t=Object.prototype.hasOwnProperty||function(){return!0},r=[];for(var n in e)t.call(e,n)&&r.push(n);return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(2),u=c(r(28)),a=c(r(24)),o=c(r(3)),d=c(r(11)),f=c(r(9)),s=c(r(22));function c(e){return e&&e.__esModule?e:{default:e}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"serializeTransactionIntoCanonicalString",value:function(e){var t=(0,a.default)(e);return(0,u.default)(t,function(e,t){return e.key>t.key?1:-1})}},{key:"makeInputTemplate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{fulfillment:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,fulfills:t,owners_before:e}}},{key:"makeTransactionTemplate",value:function(){return{id:null,operation:null,outputs:[],inputs:[],metadata:null,asset:null,version:"2.0"}}},{key:"makeTransaction",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],a=e.makeTransactionTemplate();return a.operation=t,a.asset=r,a.metadata=n,a.inputs=u,a.outputs=i,a}},{key:"makeCreateTransaction",value:function(t,r,n){for(var i={data:t||null},u=arguments.length,a=Array(u>3?u-3:0),o=3;o<u;o++)a[o-3]=arguments[o];var d=a.map(function(t){return e.makeInputTemplate([t])});return e.makeTransaction("CREATE",i,r,n,d)}},{key:"makeEd25519Condition",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=i.Buffer.from(o.default.decode(e)),n=new d.default.Ed25519Sha256;return n.setPublicKey(r),t?(0,f.default)(n):n}},{key:"makeOutput",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1";if("string"!=typeof t)throw new TypeError("`amount` must be of type string");var r=[];return function e(t){"ed25519-sha-256"===t.type?r.includes(t.public_key)||r.push(t.public_key):"threshold-sha-256"===t.type&&t.subconditions.map(e)}(e.details),{condition:e,amount:t,public_keys:r}}},{key:"makeSha256Condition",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new d.default.PreimageSha256;return r.preimage=i.Buffer.from(e),t?(0,f.default)(r):r}},{key:"makeThresholdCondition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=new d.default.ThresholdSha256;return n.threshold=e,t.forEach(function(e){n.addSubfulfillment(e)}),r?(0,f.default)(n):n}},{key:"makeTransferTransaction",value:function(t,r,n){var i=t.map(function(t){var r={tx:t.tx,outputIndex:t.output_index},n=r.tx,i=r.outputIndex,u=n.outputs[i],a={output_index:i,transaction_id:n.id};return e.makeInputTemplate(u.public_keys,a)}),u={id:"CREATE"===t[0].tx.operation?t[0].tx.id:t[0].tx.asset.id};return e.makeTransaction("TRANSFER",u,n,r,i)}},{key:"signTransaction",value:function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),u=1;u<r;u++)n[u-1]=arguments[u];var f=(0,a.default)(t),c=e.serializeTransactionIntoCanonicalString(t);f.inputs.forEach(function(e,t){var r=n[t],u=i.Buffer.from(o.default.decode(r)),a=e.fulfills?c.concat(e.fulfills.transaction_id).concat(e.fulfills.output_index):c,f=(0,s.default)(a),h=new d.default.Ed25519Sha256;h.sign(i.Buffer.from(f,"hex"),u);var l=h.serializeUri();e.fulfillment=l});var h=e.serializeTransactionIntoCanonicalString(f);return f.id=(0,s.default)(h),f}}]),e}();t.default=h},function(e,t){e.exports=function(){}},function(e,t,r){"use strict";var n=r(16),i=r(13)(!0);n(n.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(30)("includes")},function(e,t,r){r(31),e.exports=r(1).Array.includes},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,u=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,u=e}finally{try{!n&&o.return&&o.return()}finally{if(i)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e){return function(e,t){return function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).isInclusion,n=void 0===r||r;if(t&&Array.isArray(t))return d(e,n?function(e,r){return(0,u.default)(t,r)}:function(e,r){return!(0,u.default)(t,r)});if(t&&"function"==typeof t)return d(e,n?t:function(){return!t.apply(void 0,arguments)});throw new Error("The given filter is not an array or function. Exclude aborted")}(e,t)}(e,function(e){return!!e})};var u=o(r(32)),a=o(r(17));function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==t)return i({},e);var r={};return(0,a.default)(e).forEach(function(e){var i=n(e,2),u=i[0],a=i[1];t(a,u)&&(r[u]=a)}),r}},function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");function u(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],u(r),u(n))}function a(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=u(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=i.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=a(r[0]);n!==r[0]&&(t[r[0]]=n)}r=i.exec(e)}t["%C2"]="�";for(var u=Object.keys(t),o=0;o<u.length;o++){var d=u[o];e=e.replace(new RegExp(d,"g"),t[d])}return e}(e)}}},function(e,t,r){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},function(e,t,r){"use strict";const n=r(35),i=r(34);function u(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function a(e,t){return t.decode?i(e):e}function o(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function d(e,t){const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const i of e.split("&")){let[e,u]=i.replace(/\+/g," ").split("=");u=void 0===u?null:a(u,t),r(a(e,t),u,n)}return Object.keys(n).sort().reduce((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=o,t.parse=d,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const r=function(e){switch(e.arrayFormat){case"index":return(t,r,n)=>null===r?[u(t,e),"[",n,"]"].join(""):[u(t,e),"[",u(n,e),"]=",u(r,e)].join("");case"bracket":return(t,r)=>null===r?[u(t,e),"[]"].join(""):[u(t,e),"[]=",u(r,e)].join("");default:return(t,r)=>null===r?u(t,e):[u(t,e),"=",u(r,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(n=>{const i=e[n];if(void 0===i)return"";if(null===i)return u(n,t);if(Array.isArray(i)){const e=[];for(const t of i.slice())void 0!==t&&e.push(r(n,t,e.length));return e.join("&")}return u(n,t)+"="+u(i,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:d(o(e),t)}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
/*!
 * XRegExp Unicode Scripts 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
t.default=function(e){if(!e.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");e.addUnicodeData([{name:"Adlam",astral:"\ud83a[\udd00-\udd4a\udd50-\udd59\udd5e\udd5f]"},{name:"Ahom",astral:"\ud805[\udf00-\udf19\udf1d-\udf2b\udf30-\udf3f]"},{name:"Anatolian_Hieroglyphs",astral:"\ud811[\udc00-\ude46]"},{name:"Arabic",bmp:"؀-؄؆-؋؍-ؚ؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࢠ-ࢴࢶ-ࢽࣔ-ࣣ࣡-ࣿﭐ-﯁ﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷽ﹰ-ﹴﹶ-ﻼ",astral:"\ud803[\ude60-\ude7e]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb\udef0\udef1]"},{name:"Armenian",bmp:"Ա-Ֆՙ-՟ա-և֊֍-֏ﬓ-ﬗ"},{name:"Avestan",astral:"\ud802[\udf00-\udf35\udf39-\udf3f]"},{name:"Balinese",bmp:"ᬀ-ᭋ᭐-᭼"},{name:"Bamum",bmp:"ꚠ-꛷",astral:"\ud81a[\udc00-\ude38]"},{name:"Bassa_Vah",astral:"\ud81a[\uded0-\udeed\udef0-\udef5]"},{name:"Batak",bmp:"ᯀ-᯳᯼-᯿"},{name:"Bengali",bmp:"ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৻"},{name:"Bhaiksuki",astral:"\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc45\udc50-\udc6c]"},{name:"Bopomofo",bmp:"˪˫ㄅ-ㄭㆠ-ㆺ"},{name:"Brahmi",astral:"\ud804[\udc00-\udc4d\udc52-\udc6f\udc7f]"},{name:"Braille",bmp:"⠀-⣿"},{name:"Buginese",bmp:"ᨀ-ᨛ᨞᨟"},{name:"Buhid",bmp:"ᝀ-ᝓ"},{name:"Canadian_Aboriginal",bmp:"᐀-ᙿᢰ-ᣵ"},{name:"Carian",astral:"\ud800[\udea0-\uded0]"},{name:"Caucasian_Albanian",astral:"\ud801[\udd30-\udd63\udd6f]"},{name:"Chakma",astral:"\ud804[\udd00-\udd34\udd36-\udd43]"},{name:"Cham",bmp:"ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟"},{name:"Cherokee",bmp:"Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ"},{name:"Common",bmp:"\0-@\\x5B-`\\x7B-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·։؅،؛؜؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-₾℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-⏾␀-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⸀-⹄⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\ufeff！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",astral:"\ud800[\udd00-\udd02\udd07-\udd33\udd37-\udd3f\udd90-\udd9b\uddd0-\uddfc\udee1-\udefb]|\ud82f[\udca0-\udca3]|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd66\udd6a-\udd7a\udd83\udd84\udd8c-\udda9\uddae-\udde8\udf00-\udf56\udf60-\udf71]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udfcb\udfce-\udfff]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd00-\udd0c\udd10-\udd2e\udd30-\udd6b\udd70-\uddac\udde6-\uddff\ude01\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\udf00-\udfff]|\ud83d[\udc00-\uded2\udee0-\udeec\udef0-\udef6\udf00-\udf73\udf80-\udfd4]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd10-\udd1e\udd20-\udd27\udd30\udd33-\udd3e\udd40-\udd4b\udd50-\udd5e\udd80-\udd91\uddc0]|\udb40[\udc01\udc20-\udc7f]"},{name:"Coptic",bmp:"Ϣ-ϯⲀ-ⳳ⳹-⳿"},{name:"Cuneiform",astral:"\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc70-\udc74\udc80-\udd43]"},{name:"Cypriot",astral:"\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f]"},{name:"Cyrillic",bmp:"Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯"},{name:"Deseret",astral:"\ud801[\udc00-\udc4f]"},{name:"Devanagari",bmp:"ऀ-ॐ॓-ॣ०-ॿ꣠-ꣽ"},{name:"Duployan",astral:"\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9c-\udc9f]"},{name:"Egyptian_Hieroglyphs",astral:"\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]"},{name:"Elbasan",astral:"\ud801[\udd00-\udd27]"},{name:"Ethiopic",bmp:"ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ"},{name:"Georgian",bmp:"Ⴀ-ჅჇჍა-ჺჼ-ჿⴀ-ⴥⴧⴭ"},{name:"Glagolitic",bmp:"Ⰰ-Ⱞⰰ-ⱞ",astral:"\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]"},{name:"Gothic",astral:"\ud800[\udf30-\udf4a]"},{name:"Grantha",astral:"\ud804[\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf50\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]"},{name:"Greek",bmp:"Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",astral:"\ud800[\udd40-\udd8e\udda0]|\ud834[\ude00-\ude45]"},{name:"Gujarati",bmp:"ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ"},{name:"Gurmukhi",bmp:"ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵ"},{name:"Han",bmp:"⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿕豈-舘並-龎",astral:"[\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]"},{name:"Hangul",bmp:"ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"},{name:"Hanunoo",bmp:"ᜠ-᜴"},{name:"Hatran",astral:"\ud802[\udce0-\udcf2\udcf4\udcf5\udcfb-\udcff]"},{name:"Hebrew",bmp:"֑-ׇא-תװ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ"},{name:"Hiragana",bmp:"ぁ-ゖゝ-ゟ",astral:"𛀁|🈀"},{name:"Imperial_Aramaic",astral:"\ud802[\udc40-\udc55\udc57-\udc5f]"},{name:"Inherited",bmp:"̀-ًͯ҅҆-ٰٕ॒॑᪰-᪾᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷵᷻-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",astral:"\ud800[\uddfd\udee0]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad]|\udb40[\udd00-\uddef]"},{name:"Inscriptional_Pahlavi",astral:"\ud802[\udf60-\udf72\udf78-\udf7f]"},{name:"Inscriptional_Parthian",astral:"\ud802[\udf40-\udf55\udf58-\udf5f]"},{name:"Javanese",bmp:"ꦀ-꧍꧐-꧙꧞꧟"},{name:"Kaithi",astral:"\ud804[\udc80-\udcc1]"},{name:"Kannada",bmp:"ಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲ"},{name:"Katakana",bmp:"ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",astral:"𛀀"},{name:"Kayah_Li",bmp:"꤀-꤭꤯"},{name:"Kharoshthi",astral:"\ud802[\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude38-\ude3a\ude3f-\ude47\ude50-\ude58]"},{name:"Khmer",bmp:"ក-៝០-៩៰-៹᧠-᧿"},{name:"Khojki",astral:"\ud804[\ude00-\ude11\ude13-\ude3e]"},{name:"Khudawadi",astral:"\ud804[\udeb0-\udeea\udef0-\udef9]"},{name:"Lao",bmp:"ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ"},{name:"Latin",bmp:"A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꞮꞰ-ꞷꟷ-ꟿꬰ-ꭚꭜ-ꭤﬀ-ﬆＡ-Ｚａ-ｚ"},{name:"Lepcha",bmp:"ᰀ-᰷᰻-᱉ᱍ-ᱏ"},{name:"Limbu",bmp:"ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏"},{name:"Linear_A",astral:"\ud801[\ude00-\udf36\udf40-\udf55\udf60-\udf67]"},{name:"Linear_B",astral:"\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa]"},{name:"Lisu",bmp:"ꓐ-꓿"},{name:"Lycian",astral:"\ud800[\ude80-\ude9c]"},{name:"Lydian",astral:"\ud802[\udd20-\udd39\udd3f]"},{name:"Mahajani",astral:"\ud804[\udd50-\udd76]"},{name:"Malayalam",bmp:"ഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ"},{name:"Mandaic",bmp:"ࡀ-࡛࡞"},{name:"Manichaean",astral:"\ud802[\udec0-\udee6\udeeb-\udef6]"},{name:"Marchen",astral:"\ud807[\udc70-\udc8f\udc92-\udca7\udca9-\udcb6]"},{name:"Meetei_Mayek",bmp:"ꫠ-꫶ꯀ-꯭꯰-꯹"},{name:"Mende_Kikakui",astral:"\ud83a[\udc00-\udcc4\udcc7-\udcd6]"},{name:"Meroitic_Cursive",astral:"\ud802[\udda0-\uddb7\uddbc-\uddcf\uddd2-\uddff]"},{name:"Meroitic_Hieroglyphs",astral:"\ud802[\udd80-\udd9f]"},{name:"Miao",astral:"\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]"},{name:"Modi",astral:"\ud805[\ude00-\ude44\ude50-\ude59]"},{name:"Mongolian",bmp:"᠀᠁᠄᠆-᠎᠐-᠙ᠠ-ᡷᢀ-ᢪ",astral:"\ud805[\ude60-\ude6c]"},{name:"Mro",astral:"\ud81a[\ude40-\ude5e\ude60-\ude69\ude6e\ude6f]"},{name:"Multani",astral:"\ud804[\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea9]"},{name:"Myanmar",bmp:"က-႟ꧠ-ꧾꩠ-ꩿ"},{name:"Nabataean",astral:"\ud802[\udc80-\udc9e\udca7-\udcaf]"},{name:"New_Tai_Lue",bmp:"ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟"},{name:"Newa",astral:"\ud805[\udc00-\udc59\udc5b\udc5d]"},{name:"Nko",bmp:"߀-ߺ"},{name:"Ogham",bmp:" -᚜"},{name:"Ol_Chiki",bmp:"᱐-᱿"},{name:"Old_Hungarian",astral:"\ud803[\udc80-\udcb2\udcc0-\udcf2\udcfa-\udcff]"},{name:"Old_Italic",astral:"\ud800[\udf00-\udf23]"},{name:"Old_North_Arabian",astral:"\ud802[\ude80-\ude9f]"},{name:"Old_Permic",astral:"\ud800[\udf50-\udf7a]"},{name:"Old_Persian",astral:"\ud800[\udfa0-\udfc3\udfc8-\udfd5]"},{name:"Old_South_Arabian",astral:"\ud802[\ude60-\ude7f]"},{name:"Old_Turkic",astral:"\ud803[\udc00-\udc48]"},{name:"Oriya",bmp:"ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୷"},{name:"Osage",astral:"\ud801[\udcb0-\udcd3\udcd8-\udcfb]"},{name:"Osmanya",astral:"\ud801[\udc80-\udc9d\udca0-\udca9]"},{name:"Pahawh_Hmong",astral:"\ud81a[\udf00-\udf45\udf50-\udf59\udf5b-\udf61\udf63-\udf77\udf7d-\udf8f]"},{name:"Palmyrene",astral:"\ud802[\udc60-\udc7f]"},{name:"Pau_Cin_Hau",astral:"\ud806[\udec0-\udef8]"},{name:"Phags_Pa",bmp:"ꡀ-꡷"},{name:"Phoenician",astral:"\ud802[\udd00-\udd1b\udd1f]"},{name:"Psalter_Pahlavi",astral:"\ud802[\udf80-\udf91\udf99-\udf9c\udfa9-\udfaf]"},{name:"Rejang",bmp:"ꤰ-꥓꥟"},{name:"Runic",bmp:"ᚠ-ᛪᛮ-ᛸ"},{name:"Samaritan",bmp:"ࠀ-࠭࠰-࠾"},{name:"Saurashtra",bmp:"ꢀ-ꣅ꣎-꣙"},{name:"Sharada",astral:"\ud804[\udd80-\uddcd\uddd0-\udddf]"},{name:"Shavian",astral:"\ud801[\udc50-\udc7f]"},{name:"Siddham",astral:"\ud805[\udd80-\uddb5\uddb8-\udddd]"},{name:"SignWriting",astral:"\ud836[\udc00-\ude8b\ude9b-\ude9f\udea1-\udeaf]"},{name:"Sinhala",bmp:"ංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",astral:"\ud804[\udde1-\uddf4]"},{name:"Sora_Sompeng",astral:"\ud804[\udcd0-\udce8\udcf0-\udcf9]"},{name:"Sundanese",bmp:"ᮀ-ᮿ᳀-᳇"},{name:"Syloti_Nagri",bmp:"ꠀ-꠫"},{name:"Syriac",bmp:"܀-܍܏-݊ݍ-ݏ"},{name:"Tagalog",bmp:"ᜀ-ᜌᜎ-᜔"},{name:"Tagbanwa",bmp:"ᝠ-ᝬᝮ-ᝰᝲᝳ"},{name:"Tai_Le",bmp:"ᥐ-ᥭᥰ-ᥴ"},{name:"Tai_Tham",bmp:"ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭"},{name:"Tai_Viet",bmp:"ꪀ-ꫂꫛ-꫟"},{name:"Takri",astral:"\ud805[\ude80-\udeb7\udec0-\udec9]"},{name:"Tamil",bmp:"ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺"},{name:"Tangut",astral:"𖿠|[\ud81c-\ud820][\udc00-\udfff]|\ud821[\udc00-\udfec]|\ud822[\udc00-\udef2]"},{name:"Telugu",bmp:"ఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-్ౕౖౘ-ౚౠ-ౣ౦-౯౸-౿"},{name:"Thaana",bmp:"ހ-ޱ"},{name:"Thai",bmp:"ก-ฺเ-๛"},{name:"Tibetan",bmp:"ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚"},{name:"Tifinagh",bmp:"ⴰ-ⵧⵯ⵰⵿"},{name:"Tirhuta",astral:"\ud805[\udc80-\udcc7\udcd0-\udcd9]"},{name:"Ugaritic",astral:"\ud800[\udf80-\udf9d\udf9f]"},{name:"Vai",bmp:"ꔀ-ꘫ"},{name:"Warang_Citi",astral:"\ud806[\udca0-\udcf2\udcff]"},{name:"Yi",bmp:"ꀀ-ꒌ꒐-꓆"}])},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
/*!
 * XRegExp Unicode Properties 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
t.default=function(e){if(!e.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");var t=[{name:"ASCII",bmp:"\0-"},{name:"Alphabetic",bmp:"A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևְ-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࢠ-ࢴࢶ-ࢽࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೞೠ-ೣೱೲഁ-ഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ၢၥ-ၨၮ-ႆႎႜႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፟ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜓᜠ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᬀ-ᬳᬵ-ᭃᭅ-ᭋᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰵᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺꩾ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",astral:"\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\udd40-\udd74\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf30-\udf4a\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf\udfd1-\udfd5]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2]|\ud804[\udc00-\udc45\udc82-\udcb8\udcd0-\udce8\udd00-\udd32\udd50-\udd72\udd76\udd80-\uddbf\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude34\ude37\ude3e\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udee8\udf00-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d-\udf44\udf47\udf48\udf4b\udf4c\udf50\udf57\udf5d-\udf63]|\ud805[\udc00-\udc41\udc43-\udc45\udc47-\udc4a\udc80-\udcc1\udcc4\udcc5\udcc7\udd80-\uddb5\uddb8-\uddbe\uddd8-\udddd\ude00-\ude3e\ude40\ude44\ude80-\udeb5\udf00-\udf19\udf1d-\udf2a]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc36\udc38-\udc3e\udc40\udc72-\udc8f\udc92-\udca7\udca9-\udcb6]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50-\udf7e\udf93-\udf9f\udfe0]|\ud821[\udc00-\udfec]|\ud822[\udc00-\udef2]|\ud82c[\udc00\udc01]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9e]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udc00-\udcc4\udd00-\udd43\udd47]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]"},{name:"Any",isBmpLast:!0,bmp:"\0-￿",astral:"[\ud800-\udbff][\udc00-\udfff]"},{name:"Default_Ignorable_Code_Point",bmp:"­͏؜ᅟᅠ឴឵᠋-᠎​-‏‪-‮⁠-⁯ㅤ︀-️\ufeffﾠ￰-￸",astral:"\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|[\udb40-\udb43][\udc00-\udfff]"},{name:"Lowercase",bmp:"a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯա-ևᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞵꞷꟸ-ꟺꬰ-ꭚꭜ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",astral:"\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"},{name:"Noncharacter_Code_Point",bmp:"﷐-﷯￾￿",astral:"[\ud83f\ud87f\ud8bf\ud8ff\ud93f\ud97f\ud9bf\ud9ff\uda3f\uda7f\udabf\udaff\udb3f\udb7f\udbbf\udbff][\udffe\udfff]"},{name:"Uppercase",bmp:"A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶＡ-Ｚ",astral:"\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]|\ud83c[\udd30-\udd49\udd50-\udd69\udd70-\udd89]"},{name:"White_Space",bmp:"\t-\r    - \u2028\u2029  　"}];t.push({name:"Assigned",inverseOf:"Cn"}),e.addUnicodeData(t)},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
/*!
 * XRegExp Unicode Categories 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
t.default=function(e){if(!e.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");e.addUnicodeData([{name:"C",alias:"Other",isBmpLast:!0,bmp:"\0--­͸͹΀-΃΋΍΢԰՗՘ՠֈ֋֌֐׈-׏׫-ׯ׵-؅؜؝۝܎܏݋݌޲-޿߻-߿࠮࠯࠿࡜࡝࡟-࢟ࢵࢾ-࣓࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥ৼ-਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੶-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸ૺ-଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿ఄ఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಄಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-ഀഄ഍഑഻഼൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠏᠚-᠟ᡸ-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-Ჿ᳈-᳏᳷ᳺ-᳿᷶-᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟₿-⃏⃱-⃿↌-↏⏿␧-␿⑋-⑟⭴⭵⮖⮗⮺-⮼⯉⯒-⯫⯰-⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹅-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄ㄮ-㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿖-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿ꞯꞸ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟ꣾꣿ꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",astral:"\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2f\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude34-\ude37\ude3b-\ude3e\ude48-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd00-\ude5f\ude7f-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcbd\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd44-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf3b\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5e-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1a-\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc00-\udc9f\udcf3-\udcfe\udd00-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud874-\ud87d\ud87f-\udb3f\udb41-\udbff][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe1-\udfff]|\ud821[\udfed-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udc02-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca0-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udd73-\udd7a\udde9-\uddff\ude46-\udeff\udf57-\udf5f\udf72-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd2f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\udeff]|\ud83d[\uded3-\udedf\udeed-\udeef\udef7-\udeff\udf74-\udf7f\udfd5-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udd0f\udd1f\udd28-\udd2f\udd31\udd32\udd3f\udd4c-\udd4f\udd5f-\udd7f\udd92-\uddbf\uddc1-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00-\udcff\uddf0-\udfff]"},{name:"Cc",alias:"Control",bmp:"\0--"},{name:"Cf",alias:"Format",bmp:"­؀-؅؜۝܏࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\ufeff￹-￻",astral:"𑂽|\ud82f[\udca0-\udca3]|\ud834[\udd73-\udd7a]|\udb40[\udc01\udc20-\udc7f]"},{name:"Cn",alias:"Unassigned",bmp:"͸͹΀-΃΋΍΢԰՗՘ՠֈ֋֌֐׈-׏׫-ׯ׵-׿؝܎݋݌޲-޿߻-߿࠮࠯࠿࡜࡝࡟-࢟ࢵࢾ-࣓঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥ৼ-਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੶-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸ૺ-଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୕୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿ఄ఍఑఩఺-఼౅౉౎-౔౗౛-౟౤౥౰-౷಄಍಑಩಴಺಻೅೉೎-೔೗-ೝ೟೤೥೰ೳ-ഀഄ഍഑഻഼൅൉൐-൓൤൥඀ඁ඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅ຆຉ຋ຌຎ-ຓຘຠ຤຦ຨຩຬ຺຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿ᜍ᜕-ᜟ᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠏᠚-᠟ᡸ-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯ᪿ-᫿ᭌ-᭏᭽-᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-Ჿ᳈-᳏᳷ᳺ-᳿᷶-᷺἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟₿-⃏⃱-⃿↌-↏⏿␧-␿⑋-⑟⭴⭵⮖⮗⮺-⮼⯉⯒-⯫⯰-⯿Ⱟⱟ⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹅-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄ㄮ-㄰㆏ㆻ-ㆿ㇤-㇯㈟㋿䶶-䶿鿖-鿿꒍-꒏꓇-꓏꘬-꘿꛸-꛿ꞯꞸ-ꟶ꠬-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟ꣾꣿ꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯ꭦ-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯂-﯒﵀-﵏﶐﶑﷈-﷯﷾﷿︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",astral:"\ud800[\udc0c\udc27\udc3b\udc3e\udc4e\udc4f\udc5e-\udc7f\udcfb-\udcff\udd03-\udd06\udd34-\udd36\udd8f\udd9c-\udd9f\udda1-\uddcf\uddfe-\ude7f\ude9d-\ude9f\uded1-\udedf\udefc-\udeff\udf24-\udf2f\udf4b-\udf4f\udf7b-\udf7f\udf9e\udfc4-\udfc7\udfd6-\udfff]|\ud801[\udc9e\udc9f\udcaa-\udcaf\udcd4-\udcd7\udcfc-\udcff\udd28-\udd2f\udd64-\udd6e\udd70-\uddff\udf37-\udf3f\udf56-\udf5f\udf68-\udfff]|\ud802[\udc06\udc07\udc09\udc36\udc39-\udc3b\udc3d\udc3e\udc56\udc9f-\udca6\udcb0-\udcdf\udcf3\udcf6-\udcfa\udd1c-\udd1e\udd3a-\udd3e\udd40-\udd7f\uddb8-\uddbb\uddd0\uddd1\ude04\ude07-\ude0b\ude14\ude18\ude34-\ude37\ude3b-\ude3e\ude48-\ude4f\ude59-\ude5f\udea0-\udebf\udee7-\udeea\udef7-\udeff\udf36-\udf38\udf56\udf57\udf73-\udf77\udf92-\udf98\udf9d-\udfa8\udfb0-\udfff]|\ud803[\udc49-\udc7f\udcb3-\udcbf\udcf3-\udcf9\udd00-\ude5f\ude7f-\udfff]|\ud804[\udc4e-\udc51\udc70-\udc7e\udcc2-\udccf\udce9-\udcef\udcfa-\udcff\udd35\udd44-\udd4f\udd77-\udd7f\uddce\uddcf\udde0\uddf5-\uddff\ude12\ude3f-\ude7f\ude87\ude89\ude8e\ude9e\udeaa-\udeaf\udeeb-\udeef\udefa-\udeff\udf04\udf0d\udf0e\udf11\udf12\udf29\udf31\udf34\udf3a\udf3b\udf45\udf46\udf49\udf4a\udf4e\udf4f\udf51-\udf56\udf58-\udf5c\udf64\udf65\udf6d-\udf6f\udf75-\udfff]|\ud805[\udc5a\udc5c\udc5e-\udc7f\udcc8-\udccf\udcda-\udd7f\uddb6\uddb7\uddde-\uddff\ude45-\ude4f\ude5a-\ude5f\ude6d-\ude7f\udeb8-\udebf\udeca-\udeff\udf1a-\udf1c\udf2c-\udf2f\udf40-\udfff]|\ud806[\udc00-\udc9f\udcf3-\udcfe\udd00-\udebf\udef9-\udfff]|\ud807[\udc09\udc37\udc46-\udc4f\udc6d-\udc6f\udc90\udc91\udca8\udcb7-\udfff]|\ud808[\udf9a-\udfff]|\ud809[\udc6f\udc75-\udc7f\udd44-\udfff]|[\ud80a\ud80b\ud80e-\ud810\ud812-\ud819\ud823-\ud82b\ud82d\ud82e\ud830-\ud833\ud837\ud839\ud83f\ud874-\ud87d\ud87f-\udb3f\udb41-\udb7f][\udc00-\udfff]|\ud80d[\udc2f-\udfff]|\ud811[\ude47-\udfff]|\ud81a[\ude39-\ude3f\ude5f\ude6a-\ude6d\ude70-\udecf\udeee\udeef\udef6-\udeff\udf46-\udf4f\udf5a\udf62\udf78-\udf7c\udf90-\udfff]|\ud81b[\udc00-\udeff\udf45-\udf4f\udf7f-\udf8e\udfa0-\udfdf\udfe1-\udfff]|\ud821[\udfed-\udfff]|\ud822[\udef3-\udfff]|\ud82c[\udc02-\udfff]|\ud82f[\udc6b-\udc6f\udc7d-\udc7f\udc89-\udc8f\udc9a\udc9b\udca4-\udfff]|\ud834[\udcf6-\udcff\udd27\udd28\udde9-\uddff\ude46-\udeff\udf57-\udf5f\udf72-\udfff]|\ud835[\udc55\udc9d\udca0\udca1\udca3\udca4\udca7\udca8\udcad\udcba\udcbc\udcc4\udd06\udd0b\udd0c\udd15\udd1d\udd3a\udd3f\udd45\udd47-\udd49\udd51\udea6\udea7\udfcc\udfcd]|\ud836[\ude8c-\ude9a\udea0\udeb0-\udfff]|\ud838[\udc07\udc19\udc1a\udc22\udc25\udc2b-\udfff]|\ud83a[\udcc5\udcc6\udcd7-\udcff\udd4b-\udd4f\udd5a-\udd5d\udd60-\udfff]|\ud83b[\udc00-\uddff\ude04\ude20\ude23\ude25\ude26\ude28\ude33\ude38\ude3a\ude3c-\ude41\ude43-\ude46\ude48\ude4a\ude4c\ude50\ude53\ude55\ude56\ude58\ude5a\ude5c\ude5e\ude60\ude63\ude65\ude66\ude6b\ude73\ude78\ude7d\ude7f\ude8a\ude9c-\udea0\udea4\udeaa\udebc-\udeef\udef2-\udfff]|\ud83c[\udc2c-\udc2f\udc94-\udc9f\udcaf\udcb0\udcc0\udcd0\udcf6-\udcff\udd0d-\udd0f\udd2f\udd6c-\udd6f\uddad-\udde5\ude03-\ude0f\ude3c-\ude3f\ude49-\ude4f\ude52-\udeff]|\ud83d[\uded3-\udedf\udeed-\udeef\udef7-\udeff\udf74-\udf7f\udfd5-\udfff]|\ud83e[\udc0c-\udc0f\udc48-\udc4f\udc5a-\udc5f\udc88-\udc8f\udcae-\udd0f\udd1f\udd28-\udd2f\udd31\udd32\udd3f\udd4c-\udd4f\udd5f-\udd7f\udd92-\uddbf\uddc1-\udfff]|\ud869[\uded7-\udeff]|\ud86d[\udf35-\udf3f]|\ud86e[\udc1e\udc1f]|\ud873[\udea2-\udfff]|\ud87e[\ude1e-\udfff]|\udb40[\udc00\udc02-\udc1f\udc80-\udcff\uddf0-\udfff]|[\udbbf\udbff][\udffe\udfff]"},{name:"Co",alias:"Private_Use",bmp:"-",astral:"[\udb80-\udbbe\udbc0-\udbfe][\udc00-\udfff]|[\udbbf\udbff][\udc00-\udffd]"},{name:"Cs",alias:"Surrogate",bmp:"\ud800-\udfff"},{name:"L",alias:"Letter",bmp:"A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",astral:"\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udcb0-\udcd3\udcd8-\udcfb\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48\udc80-\udcb2\udcc0-\udcf2]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf19]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50\udf93-\udf9f\udfe0]|\ud821[\udc00-\udfec]|\ud822[\udc00-\udef2]|\ud82c[\udc00\udc01]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udd00-\udd43]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]"},{name:"Ll",alias:"Lowercase_Letter",bmp:"a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯա-ևᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱞⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞵꞷꟺꬰ-ꭚꭠ-ꭥꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",astral:"\ud801[\udc28-\udc4f\udcd8-\udcfb]|\ud803[\udcc0-\udcf2]|\ud806[\udcc0-\udcdf]|\ud835[\udc1a-\udc33\udc4e-\udc54\udc56-\udc67\udc82-\udc9b\udcb6-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udccf\udcea-\udd03\udd1e-\udd37\udd52-\udd6b\udd86-\udd9f\uddba-\uddd3\uddee-\ude07\ude22-\ude3b\ude56-\ude6f\ude8a-\udea5\udec2-\udeda\udedc-\udee1\udefc-\udf14\udf16-\udf1b\udf36-\udf4e\udf50-\udf55\udf70-\udf88\udf8a-\udf8f\udfaa-\udfc2\udfc4-\udfc9\udfcb]|\ud83a[\udd22-\udd43]"},{name:"Lm",alias:"Modifier_Letter",bmp:"ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟｰﾞﾟ",astral:"\ud81a[\udf40-\udf43]|\ud81b[\udf93-\udf9f\udfe0]"},{name:"Lo",alias:"Other_Letter",bmp:"ªºƻǀ-ǃʔא-תװ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎა-ჺჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡷᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳱᳵᳶℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",astral:"\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\ude80-\ude9c\udea0-\uded0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf75\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc50-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udce0-\udcf2\udcf4\udcf5\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00\ude10-\ude13\ude15-\ude17\ude19-\ude33\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee4\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48]|\ud804[\udc03-\udc37\udc83-\udcaf\udcd0-\udce8\udd03-\udd26\udd50-\udd72\udd76\udd83-\uddb2\uddc1-\uddc4\uddda\udddc\ude00-\ude11\ude13-\ude2b\ude80-\ude86\ude88\ude8a-\ude8d\ude8f-\ude9d\ude9f-\udea8\udeb0-\udede\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3d\udf50\udf5d-\udf61]|\ud805[\udc00-\udc34\udc47-\udc4a\udc80-\udcaf\udcc4\udcc5\udcc7\udd80-\uddae\uddd8-\udddb\ude00-\ude2f\ude44\ude80-\udeaa\udf00-\udf19]|\ud806[\udcff\udec0-\udef8]|\ud807[\udc00-\udc08\udc0a-\udc2e\udc40\udc72-\udc8f]|\ud808[\udc00-\udf99]|\ud809[\udc80-\udd43]|[\ud80c\ud81c-\ud820\ud840-\ud868\ud86a-\ud86c\ud86f-\ud872][\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udf00-\udf2f\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50]|\ud821[\udc00-\udfec]|\ud822[\udc00-\udef2]|\ud82c[\udc00\udc01]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99]|\ud83a[\udc00-\udcc4]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d\udc20-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]"},{name:"Lt",alias:"Titlecase_Letter",bmp:"ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ"},{name:"Lu",alias:"Uppercase_Letter",bmp:"A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰮⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶＡ-Ｚ",astral:"\ud801[\udc00-\udc27\udcb0-\udcd3]|\ud803[\udc80-\udcb2]|\ud806[\udca0-\udcbf]|\ud835[\udc00-\udc19\udc34-\udc4d\udc68-\udc81\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb5\udcd0-\udce9\udd04\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd38\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd6c-\udd85\udda0-\uddb9\uddd4-\udded\ude08-\ude21\ude3c-\ude55\ude70-\ude89\udea8-\udec0\udee2-\udefa\udf1c-\udf34\udf56-\udf6e\udf90-\udfa8\udfca]|\ud83a[\udd00-\udd21]"},{name:"M",alias:"Mark",bmp:"̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఃా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",astral:"\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud804[\udc00-\udc02\udc38-\udc46\udc7f-\udc82\udcb0-\udcba\udd00-\udd02\udd27-\udd34\udd73\udd80-\udd82\uddb3-\uddc0\uddca-\uddcc\ude2c-\ude37\ude3e\udedf-\udeea\udf00-\udf03\udf3c\udf3e-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc35-\udc46\udcb0-\udcc3\uddaf-\uddb5\uddb8-\uddc0\udddc\udddd\ude30-\ude40\udeab-\udeb7\udf1d-\udf2b]|\ud807[\udc2f-\udc36\udc38-\udc3f\udc92-\udca7\udca9-\udcb6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf51-\udf7e\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"},{name:"Mc",alias:"Spacing_Mark",bmp:"ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡ᳲᳳ〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦽ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",astral:"\ud804[\udc00\udc02\udc82\udcb0-\udcb2\udcb7\udcb8\udd2c\udd82\uddb3-\uddb5\uddbf\uddc0\ude2c-\ude2e\ude32\ude33\ude35\udee0-\udee2\udf02\udf03\udf3e\udf3f\udf41-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf62\udf63]|\ud805[\udc35-\udc37\udc40\udc41\udc45\udcb0-\udcb2\udcb9\udcbb-\udcbe\udcc1\uddaf-\uddb1\uddb8-\uddbb\uddbe\ude30-\ude32\ude3b\ude3c\ude3e\udeac\udeae\udeaf\udeb6\udf20\udf21\udf26]|\ud807[\udc2f\udc3e\udca9\udcb1\udcb4]|\ud81b[\udf51-\udf7e]|\ud834[\udd65\udd66\udd6d-\udd72]"},{name:"Me",alias:"Enclosing_Mark",bmp:"҈҉᪾⃝-⃠⃢-⃤꙰-꙲"},{name:"Mn",alias:"Nonspacing_Mark",bmp:"̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഁു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷵᷻-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄ꣅ꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",astral:"\ud800[\uddfd\udee0\udf76-\udf7a]|\ud802[\ude01-\ude03\ude05\ude06\ude0c-\ude0f\ude38-\ude3a\ude3f\udee5\udee6]|\ud804[\udc01\udc38-\udc46\udc7f-\udc81\udcb3-\udcb6\udcb9\udcba\udd00-\udd02\udd27-\udd2b\udd2d-\udd34\udd73\udd80\udd81\uddb6-\uddbe\uddca-\uddcc\ude2f-\ude31\ude34\ude36\ude37\ude3e\udedf\udee3-\udeea\udf00\udf01\udf3c\udf40\udf66-\udf6c\udf70-\udf74]|\ud805[\udc38-\udc3f\udc42-\udc44\udc46\udcb3-\udcb8\udcba\udcbf\udcc0\udcc2\udcc3\uddb2-\uddb5\uddbc\uddbd\uddbf\uddc0\udddc\udddd\ude33-\ude3a\ude3d\ude3f\ude40\udeab\udead\udeb0-\udeb5\udeb7\udf1d-\udf1f\udf22-\udf25\udf27-\udf2b]|\ud807[\udc30-\udc36\udc38-\udc3d\udc3f\udc92-\udca7\udcaa-\udcb0\udcb2\udcb3\udcb5\udcb6]|\ud81a[\udef0-\udef4\udf30-\udf36]|\ud81b[\udf8f-\udf92]|\ud82f[\udc9d\udc9e]|\ud834[\udd67-\udd69\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud836[\ude00-\ude36\ude3b-\ude6c\ude75\ude84\ude9b-\ude9f\udea1-\udeaf]|\ud838[\udc00-\udc06\udc08-\udc18\udc1b-\udc21\udc23\udc24\udc26-\udc2a]|\ud83a[\udcd0-\udcd6\udd44-\udd4a]|\udb40[\udd00-\uddef]"},{name:"N",alias:"Number",bmp:"0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",astral:"\ud800[\udd07-\udd33\udd40-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23\udf41\udf4a\udfd1-\udfd5]|\ud801[\udca0-\udca9]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude47\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e]|\ud804[\udc52-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udde1-\uddf4\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf3b]|\ud806[\udce0-\udcf2]|\ud807[\udc50-\udc6c]|\ud809[\udc00-\udc6e]|\ud81a[\ude60-\ude69\udf50-\udf59\udf5b-\udf61]|\ud834[\udf60-\udf71]|\ud835[\udfce-\udfff]|\ud83a[\udcc7-\udccf\udd50-\udd59]|\ud83c[\udd00-\udd0c]"},{name:"Nd",alias:"Decimal_Number",bmp:"0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",astral:"\ud801[\udca0-\udca9]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udc50-\udc59\udcd0-\udcd9\ude50-\ude59\udec0-\udec9\udf30-\udf39]|\ud806[\udce0-\udce9]|\ud807[\udc50-\udc59]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]|\ud83a[\udd50-\udd59]"},{name:"Nl",alias:"Letter_Number",bmp:"ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",astral:"\ud800[\udd40-\udd74\udf41\udf4a\udfd1-\udfd5]|\ud809[\udc00-\udc6e]"},{name:"No",alias:"Other_Number",bmp:"²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",astral:"\ud800[\udd07-\udd33\udd75-\udd78\udd8a\udd8b\udee1-\udefb\udf20-\udf23]|\ud802[\udc58-\udc5f\udc79-\udc7f\udca7-\udcaf\udcfb-\udcff\udd16-\udd1b\uddbc\uddbd\uddc0-\uddcf\uddd2-\uddff\ude40-\ude47\ude7d\ude7e\ude9d-\ude9f\udeeb-\udeef\udf58-\udf5f\udf78-\udf7f\udfa9-\udfaf]|\ud803[\udcfa-\udcff\ude60-\ude7e]|\ud804[\udc52-\udc65\udde1-\uddf4]|\ud805[\udf3a\udf3b]|\ud806[\udcea-\udcf2]|\ud807[\udc5a-\udc6c]|\ud81a[\udf5b-\udf61]|\ud834[\udf60-\udf71]|\ud83a[\udcc7-\udccf]|\ud83c[\udd00-\udd0c]"},{name:"P",alias:"Punctuation",bmp:"!-#%-\\x2A,-/:;\\x3F@\\x5B-\\x5D_\\x7B}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰૰෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹄、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",astral:"\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc9\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud807[\udc41-\udc45\udc70\udc71]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"},{name:"Pc",alias:"Connector_Punctuation",bmp:"_‿⁀⁔︳︴﹍-﹏＿"},{name:"Pd",alias:"Dash_Punctuation",bmp:"\\x2D֊־᐀᠆‐-―⸗⸚⸺⸻⹀〜〰゠︱︲﹘﹣－"},{name:"Pe",alias:"Close_Punctuation",bmp:"\\x29\\x5D}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"},{name:"Pf",alias:"Final_Punctuation",bmp:"»’”›⸃⸅⸊⸍⸝⸡"},{name:"Pi",alias:"Initial_Punctuation",bmp:"«‘‛“‟‹⸂⸄⸉⸌⸜⸠"},{name:"Po",alias:"Other_Punctuation",bmp:"!-#%-'\\x2A,\\x2E/:;\\x3F@\\x5C¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰૰෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙭᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃⹄、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",astral:"\ud800[\udd00-\udd02\udf9f\udfd0]|𐕯|\ud802[\udc57\udd1f\udd3f\ude50-\ude58\ude7f\udef0-\udef6\udf39-\udf3f\udf99-\udf9c]|\ud804[\udc47-\udc4d\udcbb\udcbc\udcbe-\udcc1\udd40-\udd43\udd74\udd75\uddc5-\uddc9\uddcd\udddb\udddd-\udddf\ude38-\ude3d\udea9]|\ud805[\udc4b-\udc4f\udc5b\udc5d\udcc6\uddc1-\uddd7\ude41-\ude43\ude60-\ude6c\udf3c-\udf3e]|\ud807[\udc41-\udc45\udc70\udc71]|\ud809[\udc70-\udc74]|\ud81a[\ude6e\ude6f\udef5\udf37-\udf3b\udf44]|𛲟|\ud836[\ude87-\ude8b]|\ud83a[\udd5e\udd5f]"},{name:"Ps",alias:"Open_Punctuation",bmp:"\\x28\\x5B\\x7B༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"},{name:"S",alias:"Symbol",bmp:"\\x24\\x2B<->\\x5E`\\x7C~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₾℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-⏾␀-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",astral:"\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud83b[\udef0\udef1]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd2e\udd30-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\udf00-\udfff]|\ud83d[\udc00-\uded2\udee0-\udeec\udef0-\udef6\udf00-\udf73\udf80-\udfd4]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd10-\udd1e\udd20-\udd27\udd30\udd33-\udd3e\udd40-\udd4b\udd50-\udd5e\udd80-\udd91\uddc0]"},{name:"Sc",alias:"Currency_Symbol",bmp:"\\x24¢-¥֏؋৲৳৻૱௹฿៛₠-₾꠸﷼﹩＄￠￡￥￦"},{name:"Sk",alias:"Modifier_Symbol",bmp:"\\x5E`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛﮲-﯁＾｀￣",astral:"\ud83c[\udffb-\udfff]"},{name:"Sm",alias:"Math_Symbol",bmp:"\\x2B<->\\x7C~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",astral:"\ud835[\udec1\udedb\udefb\udf15\udf35\udf4f\udf6f\udf89\udfa9\udfc3]|\ud83b[\udef0\udef1]"},{name:"So",alias:"Other_Symbol",bmp:"¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-⏾␀-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﷽￤￨￭￮￼�",astral:"\ud800[\udd37-\udd3f\udd79-\udd89\udd8c-\udd8e\udd90-\udd9b\udda0\uddd0-\uddfc]|\ud802[\udc77\udc78\udec8]|𑜿|\ud81a[\udf3c-\udf3f\udf45]|𛲜|\ud834[\udc00-\udcf5\udd00-\udd26\udd29-\udd64\udd6a-\udd6c\udd83\udd84\udd8c-\udda9\uddae-\udde8\ude00-\ude41\ude45\udf00-\udf56]|\ud836[\udc00-\uddff\ude37-\ude3a\ude6d-\ude74\ude76-\ude83\ude85\ude86]|\ud83c[\udc00-\udc2b\udc30-\udc93\udca0-\udcae\udcb1-\udcbf\udcc1-\udccf\udcd1-\udcf5\udd10-\udd2e\udd30-\udd6b\udd70-\uddac\udde6-\ude02\ude10-\ude3b\ude40-\ude48\ude50\ude51\udf00-\udffa]|\ud83d[\udc00-\uded2\udee0-\udeec\udef0-\udef6\udf00-\udf73\udf80-\udfd4]|\ud83e[\udc00-\udc0b\udc10-\udc47\udc50-\udc59\udc60-\udc87\udc90-\udcad\udd10-\udd1e\udd20-\udd27\udd30\udd33-\udd3e\udd40-\udd4b\udd50-\udd5e\udd80-\udd91\uddc0]"},{name:"Z",alias:"Separator",bmp:"    - \u2028\u2029  　"},{name:"Zl",alias:"Line_Separator",bmp:"\u2028"},{name:"Zp",alias:"Paragraph_Separator",bmp:"\u2029"},{name:"Zs",alias:"Space_Separator",bmp:"    -   　"}])},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
/*!
 * XRegExp Unicode Blocks 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2010-2017 MIT License
 * Unicode data by Mathias Bynens <mathiasbynens.be>
 */
t.default=function(e){if(!e.addUnicodeData)throw new ReferenceError("Unicode Base must be loaded before Unicode Blocks");e.addUnicodeData([{name:"InAdlam",astral:"\ud83a[\udd00-\udd5f]"},{name:"InAegean_Numbers",astral:"\ud800[\udd00-\udd3f]"},{name:"InAhom",astral:"\ud805[\udf00-\udf3f]"},{name:"InAlchemical_Symbols",astral:"\ud83d[\udf00-\udf7f]"},{name:"InAlphabetic_Presentation_Forms",bmp:"ﬀ-ﭏ"},{name:"InAnatolian_Hieroglyphs",astral:"\ud811[\udc00-\ude7f]"},{name:"InAncient_Greek_Musical_Notation",astral:"\ud834[\ude00-\ude4f]"},{name:"InAncient_Greek_Numbers",astral:"\ud800[\udd40-\udd8f]"},{name:"InAncient_Symbols",astral:"\ud800[\udd90-\uddcf]"},{name:"InArabic",bmp:"؀-ۿ"},{name:"InArabic_Extended_A",bmp:"ࢠ-ࣿ"},{name:"InArabic_Mathematical_Alphabetic_Symbols",astral:"\ud83b[\ude00-\udeff]"},{name:"InArabic_Presentation_Forms_A",bmp:"ﭐ-﷿"},{name:"InArabic_Presentation_Forms_B",bmp:"ﹰ-\ufeff"},{name:"InArabic_Supplement",bmp:"ݐ-ݿ"},{name:"InArmenian",bmp:"԰-֏"},{name:"InArrows",bmp:"←-⇿"},{name:"InAvestan",astral:"\ud802[\udf00-\udf3f]"},{name:"InBalinese",bmp:"ᬀ-᭿"},{name:"InBamum",bmp:"ꚠ-꛿"},{name:"InBamum_Supplement",astral:"\ud81a[\udc00-\ude3f]"},{name:"InBasic_Latin",bmp:"\0-"},{name:"InBassa_Vah",astral:"\ud81a[\uded0-\udeff]"},{name:"InBatak",bmp:"ᯀ-᯿"},{name:"InBengali",bmp:"ঀ-৿"},{name:"InBhaiksuki",astral:"\ud807[\udc00-\udc6f]"},{name:"InBlock_Elements",bmp:"▀-▟"},{name:"InBopomofo",bmp:"㄀-ㄯ"},{name:"InBopomofo_Extended",bmp:"ㆠ-ㆿ"},{name:"InBox_Drawing",bmp:"─-╿"},{name:"InBrahmi",astral:"\ud804[\udc00-\udc7f]"},{name:"InBraille_Patterns",bmp:"⠀-⣿"},{name:"InBuginese",bmp:"ᨀ-᨟"},{name:"InBuhid",bmp:"ᝀ-᝟"},{name:"InByzantine_Musical_Symbols",astral:"\ud834[\udc00-\udcff]"},{name:"InCJK_Compatibility",bmp:"㌀-㏿"},{name:"InCJK_Compatibility_Forms",bmp:"︰-﹏"},{name:"InCJK_Compatibility_Ideographs",bmp:"豈-﫿"},{name:"InCJK_Compatibility_Ideographs_Supplement",astral:"\ud87e[\udc00-\ude1f]"},{name:"InCJK_Radicals_Supplement",bmp:"⺀-⻿"},{name:"InCJK_Strokes",bmp:"㇀-㇯"},{name:"InCJK_Symbols_and_Punctuation",bmp:"　-〿"},{name:"InCJK_Unified_Ideographs",bmp:"一-鿿"},{name:"InCJK_Unified_Ideographs_Extension_A",bmp:"㐀-䶿"},{name:"InCJK_Unified_Ideographs_Extension_B",astral:"[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\udedf]"},{name:"InCJK_Unified_Ideographs_Extension_C",astral:"\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf3f]"},{name:"InCJK_Unified_Ideographs_Extension_D",astral:"\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1f]"},{name:"InCJK_Unified_Ideographs_Extension_E",astral:"\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udeaf]"},{name:"InCarian",astral:"\ud800[\udea0-\udedf]"},{name:"InCaucasian_Albanian",astral:"\ud801[\udd30-\udd6f]"},{name:"InChakma",astral:"\ud804[\udd00-\udd4f]"},{name:"InCham",bmp:"ꨀ-꩟"},{name:"InCherokee",bmp:"Ꭰ-᏿"},{name:"InCherokee_Supplement",bmp:"ꭰ-ꮿ"},{name:"InCombining_Diacritical_Marks",bmp:"̀-ͯ"},{name:"InCombining_Diacritical_Marks_Extended",bmp:"᪰-᫿"},{name:"InCombining_Diacritical_Marks_Supplement",bmp:"᷀-᷿"},{name:"InCombining_Diacritical_Marks_for_Symbols",bmp:"⃐-⃿"},{name:"InCombining_Half_Marks",bmp:"︠-︯"},{name:"InCommon_Indic_Number_Forms",bmp:"꠰-꠿"},{name:"InControl_Pictures",bmp:"␀-␿"},{name:"InCoptic",bmp:"Ⲁ-⳿"},{name:"InCoptic_Epact_Numbers",astral:"\ud800[\udee0-\udeff]"},{name:"InCounting_Rod_Numerals",astral:"\ud834[\udf60-\udf7f]"},{name:"InCuneiform",astral:"\ud808[\udc00-\udfff]"},{name:"InCuneiform_Numbers_and_Punctuation",astral:"\ud809[\udc00-\udc7f]"},{name:"InCurrency_Symbols",bmp:"₠-⃏"},{name:"InCypriot_Syllabary",astral:"\ud802[\udc00-\udc3f]"},{name:"InCyrillic",bmp:"Ѐ-ӿ"},{name:"InCyrillic_Extended_A",bmp:"ⷠ-ⷿ"},{name:"InCyrillic_Extended_B",bmp:"Ꙁ-ꚟ"},{name:"InCyrillic_Extended_C",bmp:"ᲀ-᲏"},{name:"InCyrillic_Supplement",bmp:"Ԁ-ԯ"},{name:"InDeseret",astral:"\ud801[\udc00-\udc4f]"},{name:"InDevanagari",bmp:"ऀ-ॿ"},{name:"InDevanagari_Extended",bmp:"꣠-ꣿ"},{name:"InDingbats",bmp:"✀-➿"},{name:"InDomino_Tiles",astral:"\ud83c[\udc30-\udc9f]"},{name:"InDuployan",astral:"\ud82f[\udc00-\udc9f]"},{name:"InEarly_Dynastic_Cuneiform",astral:"\ud809[\udc80-\udd4f]"},{name:"InEgyptian_Hieroglyphs",astral:"\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2f]"},{name:"InElbasan",astral:"\ud801[\udd00-\udd2f]"},{name:"InEmoticons",astral:"\ud83d[\ude00-\ude4f]"},{name:"InEnclosed_Alphanumeric_Supplement",astral:"\ud83c[\udd00-\uddff]"},{name:"InEnclosed_Alphanumerics",bmp:"①-⓿"},{name:"InEnclosed_CJK_Letters_and_Months",bmp:"㈀-㋿"},{name:"InEnclosed_Ideographic_Supplement",astral:"\ud83c[\ude00-\udeff]"},{name:"InEthiopic",bmp:"ሀ-፿"},{name:"InEthiopic_Extended",bmp:"ⶀ-⷟"},{name:"InEthiopic_Extended_A",bmp:"꬀-꬯"},{name:"InEthiopic_Supplement",bmp:"ᎀ-᎟"},{name:"InGeneral_Punctuation",bmp:" -⁯"},{name:"InGeometric_Shapes",bmp:"■-◿"},{name:"InGeometric_Shapes_Extended",astral:"\ud83d[\udf80-\udfff]"},{name:"InGeorgian",bmp:"Ⴀ-ჿ"},{name:"InGeorgian_Supplement",bmp:"ⴀ-⴯"},{name:"InGlagolitic",bmp:"Ⰰ-ⱟ"},{name:"InGlagolitic_Supplement",astral:"\ud838[\udc00-\udc2f]"},{name:"InGothic",astral:"\ud800[\udf30-\udf4f]"},{name:"InGrantha",astral:"\ud804[\udf00-\udf7f]"},{name:"InGreek_Extended",bmp:"ἀ-῿"},{name:"InGreek_and_Coptic",bmp:"Ͱ-Ͽ"},{name:"InGujarati",bmp:"઀-૿"},{name:"InGurmukhi",bmp:"਀-੿"},{name:"InHalfwidth_and_Fullwidth_Forms",bmp:"＀-￯"},{name:"InHangul_Compatibility_Jamo",bmp:"㄰-㆏"},{name:"InHangul_Jamo",bmp:"ᄀ-ᇿ"},{name:"InHangul_Jamo_Extended_A",bmp:"ꥠ-꥿"},{name:"InHangul_Jamo_Extended_B",bmp:"ힰ-퟿"},{name:"InHangul_Syllables",bmp:"가-힯"},{name:"InHanunoo",bmp:"ᜠ-᜿"},{name:"InHatran",astral:"\ud802[\udce0-\udcff]"},{name:"InHebrew",bmp:"֐-׿"},{name:"InHigh_Private_Use_Surrogates",bmp:"\udb80-\udbff"},{name:"InHigh_Surrogates",bmp:"\ud800-\udb7f"},{name:"InHiragana",bmp:"぀-ゟ"},{name:"InIPA_Extensions",bmp:"ɐ-ʯ"},{name:"InIdeographic_Description_Characters",bmp:"⿰-⿿"},{name:"InIdeographic_Symbols_and_Punctuation",astral:"\ud81b[\udfe0-\udfff]"},{name:"InImperial_Aramaic",astral:"\ud802[\udc40-\udc5f]"},{name:"InInscriptional_Pahlavi",astral:"\ud802[\udf60-\udf7f]"},{name:"InInscriptional_Parthian",astral:"\ud802[\udf40-\udf5f]"},{name:"InJavanese",bmp:"ꦀ-꧟"},{name:"InKaithi",astral:"\ud804[\udc80-\udccf]"},{name:"InKana_Supplement",astral:"\ud82c[\udc00-\udcff]"},{name:"InKanbun",bmp:"㆐-㆟"},{name:"InKangxi_Radicals",bmp:"⼀-⿟"},{name:"InKannada",bmp:"ಀ-೿"},{name:"InKatakana",bmp:"゠-ヿ"},{name:"InKatakana_Phonetic_Extensions",bmp:"ㇰ-ㇿ"},{name:"InKayah_Li",bmp:"꤀-꤯"},{name:"InKharoshthi",astral:"\ud802[\ude00-\ude5f]"},{name:"InKhmer",bmp:"ក-៿"},{name:"InKhmer_Symbols",bmp:"᧠-᧿"},{name:"InKhojki",astral:"\ud804[\ude00-\ude4f]"},{name:"InKhudawadi",astral:"\ud804[\udeb0-\udeff]"},{name:"InLao",bmp:"຀-໿"},{name:"InLatin_Extended_Additional",bmp:"Ḁ-ỿ"},{name:"InLatin_Extended_A",bmp:"Ā-ſ"},{name:"InLatin_Extended_B",bmp:"ƀ-ɏ"},{name:"InLatin_Extended_C",bmp:"Ⱡ-Ɀ"},{name:"InLatin_Extended_D",bmp:"꜠-ꟿ"},{name:"InLatin_Extended_E",bmp:"ꬰ-꭯"},{name:"InLatin_1_Supplement",bmp:"-ÿ"},{name:"InLepcha",bmp:"ᰀ-ᱏ"},{name:"InLetterlike_Symbols",bmp:"℀-⅏"},{name:"InLimbu",bmp:"ᤀ-᥏"},{name:"InLinear_A",astral:"\ud801[\ude00-\udf7f]"},{name:"InLinear_B_Ideograms",astral:"\ud800[\udc80-\udcff]"},{name:"InLinear_B_Syllabary",astral:"\ud800[\udc00-\udc7f]"},{name:"InLisu",bmp:"ꓐ-꓿"},{name:"InLow_Surrogates",bmp:"\udc00-\udfff"},{name:"InLycian",astral:"\ud800[\ude80-\ude9f]"},{name:"InLydian",astral:"\ud802[\udd20-\udd3f]"},{name:"InMahajani",astral:"\ud804[\udd50-\udd7f]"},{name:"InMahjong_Tiles",astral:"\ud83c[\udc00-\udc2f]"},{name:"InMalayalam",bmp:"ഀ-ൿ"},{name:"InMandaic",bmp:"ࡀ-࡟"},{name:"InManichaean",astral:"\ud802[\udec0-\udeff]"},{name:"InMarchen",astral:"\ud807[\udc70-\udcbf]"},{name:"InMathematical_Alphanumeric_Symbols",astral:"\ud835[\udc00-\udfff]"},{name:"InMathematical_Operators",bmp:"∀-⋿"},{name:"InMeetei_Mayek",bmp:"ꯀ-꯿"},{name:"InMeetei_Mayek_Extensions",bmp:"ꫠ-꫿"},{name:"InMende_Kikakui",astral:"\ud83a[\udc00-\udcdf]"},{name:"InMeroitic_Cursive",astral:"\ud802[\udda0-\uddff]"},{name:"InMeroitic_Hieroglyphs",astral:"\ud802[\udd80-\udd9f]"},{name:"InMiao",astral:"\ud81b[\udf00-\udf9f]"},{name:"InMiscellaneous_Mathematical_Symbols_A",bmp:"⟀-⟯"},{name:"InMiscellaneous_Mathematical_Symbols_B",bmp:"⦀-⧿"},{name:"InMiscellaneous_Symbols",bmp:"☀-⛿"},{name:"InMiscellaneous_Symbols_and_Arrows",bmp:"⬀-⯿"},{name:"InMiscellaneous_Symbols_and_Pictographs",astral:"\ud83c[\udf00-\udfff]|\ud83d[\udc00-\uddff]"},{name:"InMiscellaneous_Technical",bmp:"⌀-⏿"},{name:"InModi",astral:"\ud805[\ude00-\ude5f]"},{name:"InModifier_Tone_Letters",bmp:"꜀-ꜟ"},{name:"InMongolian",bmp:"᠀-᢯"},{name:"InMongolian_Supplement",astral:"\ud805[\ude60-\ude7f]"},{name:"InMro",astral:"\ud81a[\ude40-\ude6f]"},{name:"InMultani",astral:"\ud804[\ude80-\udeaf]"},{name:"InMusical_Symbols",astral:"\ud834[\udd00-\uddff]"},{name:"InMyanmar",bmp:"က-႟"},{name:"InMyanmar_Extended_A",bmp:"ꩠ-ꩿ"},{name:"InMyanmar_Extended_B",bmp:"ꧠ-꧿"},{name:"InNKo",bmp:"߀-߿"},{name:"InNabataean",astral:"\ud802[\udc80-\udcaf]"},{name:"InNew_Tai_Lue",bmp:"ᦀ-᧟"},{name:"InNewa",astral:"\ud805[\udc00-\udc7f]"},{name:"InNumber_Forms",bmp:"⅐-↏"},{name:"InOgham",bmp:" -᚟"},{name:"InOl_Chiki",bmp:"᱐-᱿"},{name:"InOld_Hungarian",astral:"\ud803[\udc80-\udcff]"},{name:"InOld_Italic",astral:"\ud800[\udf00-\udf2f]"},{name:"InOld_North_Arabian",astral:"\ud802[\ude80-\ude9f]"},{name:"InOld_Permic",astral:"\ud800[\udf50-\udf7f]"},{name:"InOld_Persian",astral:"\ud800[\udfa0-\udfdf]"},{name:"InOld_South_Arabian",astral:"\ud802[\ude60-\ude7f]"},{name:"InOld_Turkic",astral:"\ud803[\udc00-\udc4f]"},{name:"InOptical_Character_Recognition",bmp:"⑀-⑟"},{name:"InOriya",bmp:"଀-୿"},{name:"InOrnamental_Dingbats",astral:"\ud83d[\ude50-\ude7f]"},{name:"InOsage",astral:"\ud801[\udcb0-\udcff]"},{name:"InOsmanya",astral:"\ud801[\udc80-\udcaf]"},{name:"InPahawh_Hmong",astral:"\ud81a[\udf00-\udf8f]"},{name:"InPalmyrene",astral:"\ud802[\udc60-\udc7f]"},{name:"InPau_Cin_Hau",astral:"\ud806[\udec0-\udeff]"},{name:"InPhags_pa",bmp:"ꡀ-꡿"},{name:"InPhaistos_Disc",astral:"\ud800[\uddd0-\uddff]"},{name:"InPhoenician",astral:"\ud802[\udd00-\udd1f]"},{name:"InPhonetic_Extensions",bmp:"ᴀ-ᵿ"},{name:"InPhonetic_Extensions_Supplement",bmp:"ᶀ-ᶿ"},{name:"InPlaying_Cards",astral:"\ud83c[\udca0-\udcff]"},{name:"InPrivate_Use_Area",bmp:"-"},{name:"InPsalter_Pahlavi",astral:"\ud802[\udf80-\udfaf]"},{name:"InRejang",bmp:"ꤰ-꥟"},{name:"InRumi_Numeral_Symbols",astral:"\ud803[\ude60-\ude7f]"},{name:"InRunic",bmp:"ᚠ-᛿"},{name:"InSamaritan",bmp:"ࠀ-࠿"},{name:"InSaurashtra",bmp:"ꢀ-꣟"},{name:"InSharada",astral:"\ud804[\udd80-\udddf]"},{name:"InShavian",astral:"\ud801[\udc50-\udc7f]"},{name:"InShorthand_Format_Controls",astral:"\ud82f[\udca0-\udcaf]"},{name:"InSiddham",astral:"\ud805[\udd80-\uddff]"},{name:"InSinhala",bmp:"඀-෿"},{name:"InSinhala_Archaic_Numbers",astral:"\ud804[\udde0-\uddff]"},{name:"InSmall_Form_Variants",bmp:"﹐-﹯"},{name:"InSora_Sompeng",astral:"\ud804[\udcd0-\udcff]"},{name:"InSpacing_Modifier_Letters",bmp:"ʰ-˿"},{name:"InSpecials",bmp:"￰-￿"},{name:"InSundanese",bmp:"ᮀ-ᮿ"},{name:"InSundanese_Supplement",bmp:"᳀-᳏"},{name:"InSuperscripts_and_Subscripts",bmp:"⁰-₟"},{name:"InSupplemental_Arrows_A",bmp:"⟰-⟿"},{name:"InSupplemental_Arrows_B",bmp:"⤀-⥿"},{name:"InSupplemental_Arrows_C",astral:"\ud83e[\udc00-\udcff]"},{name:"InSupplemental_Mathematical_Operators",bmp:"⨀-⫿"},{name:"InSupplemental_Punctuation",bmp:"⸀-⹿"},{name:"InSupplemental_Symbols_and_Pictographs",astral:"\ud83e[\udd00-\uddff]"},{name:"InSupplementary_Private_Use_Area_A",astral:"[\udb80-\udbbf][\udc00-\udfff]"},{name:"InSupplementary_Private_Use_Area_B",astral:"[\udbc0-\udbff][\udc00-\udfff]"},{name:"InSutton_SignWriting",astral:"\ud836[\udc00-\udeaf]"},{name:"InSyloti_Nagri",bmp:"ꠀ-꠯"},{name:"InSyriac",bmp:"܀-ݏ"},{name:"InTagalog",bmp:"ᜀ-ᜟ"},{name:"InTagbanwa",bmp:"ᝠ-᝿"},{name:"InTags",astral:"\udb40[\udc00-\udc7f]"},{name:"InTai_Le",bmp:"ᥐ-᥿"},{name:"InTai_Tham",bmp:"ᨠ-᪯"},{name:"InTai_Viet",bmp:"ꪀ-꫟"},{name:"InTai_Xuan_Jing_Symbols",astral:"\ud834[\udf00-\udf5f]"},{name:"InTakri",astral:"\ud805[\ude80-\udecf]"},{name:"InTamil",bmp:"஀-௿"},{name:"InTangut",astral:"[\ud81c-\ud821][\udc00-\udfff]"},{name:"InTangut_Components",astral:"\ud822[\udc00-\udeff]"},{name:"InTelugu",bmp:"ఀ-౿"},{name:"InThaana",bmp:"ހ-޿"},{name:"InThai",bmp:"฀-๿"},{name:"InTibetan",bmp:"ༀ-࿿"},{name:"InTifinagh",bmp:"ⴰ-⵿"},{name:"InTirhuta",astral:"\ud805[\udc80-\udcdf]"},{name:"InTransport_and_Map_Symbols",astral:"\ud83d[\ude80-\udeff]"},{name:"InUgaritic",astral:"\ud800[\udf80-\udf9f]"},{name:"InUnified_Canadian_Aboriginal_Syllabics",bmp:"᐀-ᙿ"},{name:"InUnified_Canadian_Aboriginal_Syllabics_Extended",bmp:"ᢰ-᣿"},{name:"InVai",bmp:"ꔀ-꘿"},{name:"InVariation_Selectors",bmp:"︀-️"},{name:"InVariation_Selectors_Supplement",astral:"\udb40[\udd00-\uddef]"},{name:"InVedic_Extensions",bmp:"᳐-᳿"},{name:"InVertical_Forms",bmp:"︐-︟"},{name:"InWarang_Citi",astral:"\ud806[\udca0-\udcff]"},{name:"InYi_Radicals",bmp:"꒐-꓏"},{name:"InYi_Syllables",bmp:"ꀀ-꒏"},{name:"InYijing_Hexagram_Symbols",bmp:"䷀-䷿"}])},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
/*!
 * XRegExp Unicode Base 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2008-2017 MIT License
 */
t.default=function(e){var t={},r=e._dec,n=e._hex,i=e._pad4;function u(e){return e.replace(/[- _]+/g,"").toLowerCase()}function a(e){var t=/^\\[xu](.+)/.exec(e);return t?r(t[1]):e.charCodeAt("\\"===e[0]?1:0)}function o(r){return t[r]["b!"]||(t[r]["b!"]=function(t){var r="",u=-1;return e.forEach(t,/(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/,function(e){var t=a(e[1]);t>u+1&&(r+="\\u"+i(n(u+1)),t>u+2&&(r+="-\\u"+i(n(t-1)))),u=a(e[2]||e[1])}),u<65535&&(r+="\\u"+i(n(u+1)),u<65534&&(r+="-\\uFFFF")),r}(t[r].bmp))}function d(e,r){var n=r?"a!":"a=";return t[e][n]||(t[e][n]=function(e,r){var n=t[e],i="";return n.bmp&&!n.isBmpLast&&(i="["+n.bmp+"]"+(n.astral?"|":"")),n.astral&&(i+=n.astral),n.isBmpLast&&n.bmp&&(i+=(n.astral?"|":"")+"["+n.bmp+"]"),r?"(?:(?!"+i+")(?:[\ud800-\udbff][\udc00-\udfff]|[\0-￿]))":"(?:"+i+")"}(e,r))}e.addToken(/\\([pP])(?:{(\^?)([^}]*)}|([A-Za-z]))/,function(e,r,n){var i="P"===e[1]||!!e[2],a=-1!==n.indexOf("A"),f=u(e[4]||e[3]),s=t[f];if("P"===e[1]&&e[2])throw new SyntaxError("Invalid double negation "+e[0]);if(!t.hasOwnProperty(f))throw new SyntaxError("Unknown Unicode token "+e[0]);if(s.inverseOf){if(f=u(s.inverseOf),!t.hasOwnProperty(f))throw new ReferenceError("Unicode token missing data "+e[0]+" -> "+s.inverseOf);s=t[f],i=!i}if(!s.bmp&&!a)throw new SyntaxError("Astral mode required for Unicode token "+e[0]);if(a){if("class"===r)throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");return d(f,i)}return"class"===r?i?o(f):s.bmp:(i?"[^":"[")+s.bmp+"]"},{scope:"all",optionalFlags:"A",leadChar:"\\"}),e.addUnicodeData=function(r){for(var n=void 0,i=0;i<r.length;++i){if(!(n=r[i]).name)throw new Error("Unicode token requires name");if(!(n.inverseOf||n.bmp||n.astral))throw new Error("Unicode token has no character data "+n.name);t[u(n.name)]=n,n.alias&&(t[u(n.alias)]=n)}e.cache.flush("patterns")},e._getUnicodeProperty=function(e){var r=u(e);return t[r]}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
/*!
 * XRegExp.matchRecursive 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2009-2017 MIT License
 */
t.default=function(e){function t(e,t,r,n){return{name:e,value:t,start:r,end:n}}e.matchRecursive=function(r,n,i,u,a){u=u||"",a=a||{};var o=-1!==u.indexOf("g"),d=-1!==u.indexOf("y"),f=u.replace(/y/g,""),s=a.escapeChar,c=a.valueNames,h=[],l=0,p=0,b=0,y=0,m=void 0,g=void 0,v=void 0,_=void 0,w=void 0;if(n=e(n,f),i=e(i,f),s){if(s.length>1)throw new Error("Cannot use more than one escape character");s=e.escape(s),w=new RegExp("(?:"+s+"[\\S\\s]|(?:(?!"+e.union([n,i],"",{conjunction:"or"}).source+")[^"+s+"])+)+",u.replace(/[^imu]+/g,""))}for(;;){if(s&&(b+=(e.exec(r,w,b,"sticky")||[""])[0].length),v=e.exec(r,n,b),_=e.exec(r,i,b),v&&_&&(v.index<=_.index?_=null:v=null),v||_)b=(p=(v||_).index)+(v||_)[0].length;else if(!l)break;if(d&&!l&&p>y)break;if(v)l||(m=p,g=b),++l;else{if(!_||!l)throw new Error("Unbalanced delimiter found in string");if(!--l&&(c?(c[0]&&m>y&&h.push(t(c[0],r.slice(y,m),y,m)),c[1]&&h.push(t(c[1],r.slice(m,g),m,g)),c[2]&&h.push(t(c[2],r.slice(g,p),g,p)),c[3]&&h.push(t(c[3],r.slice(p,b),p,b))):h.push(r.slice(g,p)),y=b,!o))break}p===b&&++b}return o&&!d&&c&&c[0]&&r.length>y&&h.push(t(c[0],r.slice(y),y,r.length)),h}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),
/*!
 * XRegExp.build 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2012-2017 MIT License
 */
t.default=function(e){var t="xregexp",r=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,n=e.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/,r],"g",{conjunction:"or"});function i(e){var t=/^(?:\(\?:\))*\^/,r=/\$(?:\(\?:\))*$/;return t.test(e)&&r.test(e)&&r.test(e.replace(/\\[\s\S]/g,""))?e.replace(t,"").replace(r,""):e}function u(r,n){var i=n?"x":"";return e.isRegExp(r)?r[t]&&r[t].captureNames?r:e(r.source,i):e(r,i)}function a(t){return t instanceof RegExp?t:e.escape(t)}function o(e,t,r){return e["subpattern"+r]=t,e}function d(e,t,r){return e+(t<r.length-1?"{{subpattern"+t+"}}":"")}e.tag=function(t){return function(r){for(var n=arguments.length,i=Array(n>1?n-1:0),u=1;u<n;u++)i[u-1]=arguments[u];var f=i.map(a).reduce(o,{}),s=r.raw.map(d).join("");return e.build(s,f,t)}},e.build=function(a,o,d){var f=-1!==(d=d||"").indexOf("x"),s=/^\(\?([\w$]+)\)/.exec(a);s&&(d=e._clipDuplicates(d+s[1]));var c={};for(var h in o)if(o.hasOwnProperty(h)){var l=u(o[h],f);c[h]={pattern:i(l.source),names:l[t].captureNames||[]}}var p=u(a,f),b=0,y=void 0,m=0,g=[0],v=p[t].captureNames||[],_=p.source.replace(n,function(e,t,n,i,u){var a=t||n,o=void 0,d=void 0,f=void 0;if(a){if(!c.hasOwnProperty(a))throw new ReferenceError("Undefined property "+e);return t?(o=v[m],g[++m]=++b,d="(?<"+(o||a)+">"):d="(?:",y=b,""+d+c[a].pattern.replace(r,function(e,t,r){if(t){if(o=c[a].names[b-y],++b,o)return"(?<"+o+">"}else if(r)return f=+r-1,c[a].names[f]?"\\k<"+c[a].names[f]+">":"\\"+(+r+y);return e})+")"}if(i){if(o=v[m],g[++m]=++b,o)return"(?<"+o+">"}else if(u)return v[f=+u-1]?"\\k<"+v[f]+">":"\\"+g[+u];return e});return e(_,d)}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
/*!
 * XRegExp 4.0.0
 * <xregexp.com>
 * Steven Levithan (c) 2007-2017 MIT License
 */
var n="xregexp",i={astral:!1},u={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},a={},o={},d={},f=[],s="default",c="class",h={default:/\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,class:/\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/},l=/\$(?:{([\w$]+)}|<([\w$]+)>|(\d\d?|[\s\S]))/g,p=void 0===u.exec.call(/()??/,"")[1],b=void 0!==/x/.flags,y={}.toString;function m(e){var t=!0;try{new RegExp("",e)}catch(e){t=!1}return t}var g=m("u"),v=m("y"),_={g:!0,i:!0,m:!0,u:g,y:v};function w(e,t,r,i,u){var a=void 0;if(e[n]={captureNames:t},u)return e;if(e.__proto__)e.__proto__=R.prototype;else for(a in R.prototype)e[a]=R.prototype[a];return e[n].source=r,e[n].flags=i?i.split("").sort().join(""):i,e}function S(e){return u.replace.call(e,/([\s\S])(?=[\s\S]*\1)/g,"")}function E(e,t){if(!R.isRegExp(e))throw new TypeError("Type RegExp expected");var r=e[n]||{},i=function(e){return b?e.flags:u.exec.call(/\/([a-z]*)$/i,RegExp.prototype.toString.call(e))[1]}(e),a="",o="",d=null,f=null;return(t=t||{}).removeG&&(o+="g"),t.removeY&&(o+="y"),o&&(i=u.replace.call(i,new RegExp("["+o+"]+","g"),"")),t.addG&&(a+="g"),t.addY&&(a+="y"),a&&(i=S(i+a)),t.isInternalOnly||(void 0!==r.source&&(d=r.source),null!=r.flags&&(f=a?S(r.flags+a):r.flags)),e=w(new RegExp(t.source||e.source,i),function(e){return!(!e[n]||!e[n].captureNames)}(e)?r.captureNames.slice(0):null,d,f,t.isInternalOnly)}function A(e){return parseInt(e,16)}function x(e,t,r){return"("===e.input[e.index-1]||")"===e.input[e.index+e[0].length]||function(e,t,r){return u.test.call(-1!==r.indexOf("x")?/^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/:/^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/,e.slice(t))}(e.input,e.index+e[0].length,r)?"":"(?:)"}function k(e){return parseInt(e,10).toString(16)}function M(e,t){return y.call(e)==="[object "+t+"]"}function I(e){for(;e.length<4;)e="0"+e;return e}function T(e){var t={};return M(e,"String")?(R.forEach(e,/[^\s,]+/,function(e){t[e]=!0}),t):e}function B(e){if(!/^[\w$]$/.test(e))throw new Error("Flag must be a single character A-Za-z0-9_$");_[e]=!0}function C(e,t,r,n,i){for(var u=f.length,a=e[r],o=null,d=void 0,s=void 0;u--;)if(!((s=f[u]).leadChar&&s.leadChar!==a||s.scope!==n&&"all"!==s.scope||s.flag&&-1===t.indexOf(s.flag))&&(d=R.exec(e,s.regex,r,"sticky"))){o={matchLength:d[0].length,output:s.handler.call(i,d,n,t),reparse:s.reparse};break}return o}function P(e){i.astral=e}function O(e){if(null==e)throw new TypeError("Cannot convert null or undefined to object");return e}function R(e,t){if(R.isRegExp(e)){if(void 0!==t)throw new TypeError("Cannot supply flags when copying a RegExp");return E(e)}if(e=void 0===e?"":String(e),t=void 0===t?"":String(t),R.isInstalled("astral")&&-1===t.indexOf("A")&&(t+="A"),d[e]||(d[e]={}),!d[e][t]){for(var r={hasNamedCapture:!1,captureNames:[]},n=s,i="",a=0,o=void 0,f=function(e,t){var r=void 0;if(S(t)!==t)throw new SyntaxError("Invalid duplicate regex flag "+t);for(e=u.replace.call(e,/^\(\?([\w$]+)\)/,function(e,r){if(u.test.call(/[gy]/,r))throw new SyntaxError("Cannot use flag g or y in mode modifier "+e);return t=S(t+r),""}),r=0;r<t.length;++r)if(!_[t[r]])throw new SyntaxError("Unknown regex flag "+t[r]);return{pattern:e,flags:t}}(e,t),l=f.pattern,p=f.flags;a<l.length;){do{(o=C(l,p,a,n,r))&&o.reparse&&(l=l.slice(0,a)+o.output+l.slice(a+o.matchLength))}while(o&&o.reparse);if(o)i+=o.output,a+=o.matchLength||1;else{var b=R.exec(l,h[n],a,"sticky")[0];i+=b,a+=b.length,"["===b&&n===s?n=c:"]"===b&&n===c&&(n=s)}}d[e][t]={pattern:u.replace.call(i,/(?:\(\?:\))+/g,"(?:)"),flags:u.replace.call(p,/[^gimuy]+/g,""),captures:r.hasNamedCapture?r.captureNames:null}}var y=d[e][t];return w(new RegExp(y.pattern,y.flags),y.captures,e,t)}R.prototype=/(?:)/,R.version="4.0.0",R._clipDuplicates=S,R._hasNativeFlag=m,R._dec=A,R._hex=k,R._pad4=I,R.addToken=function(e,t,r){var n=(r=r||{}).optionalFlags,i=void 0;if(r.flag&&B(r.flag),n)for(n=u.split.call(n,""),i=0;i<n.length;++i)B(n[i]);f.push({regex:E(e,{addG:!0,addY:v,isInternalOnly:!0}),handler:t,scope:r.scope||s,flag:r.flag,reparse:r.reparse,leadChar:r.leadChar}),R.cache.flush("patterns")},R.cache=function(e,t){return o[e]||(o[e]={}),o[e][t]||(o[e][t]=R(e,t))},R.cache.flush=function(e){"patterns"===e?d={}:o={}},R.escape=function(e){return u.replace.call(O(e),/[-\[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},R.exec=function(e,t,r,i){var u,o="g",d=!1,f=void 0;(u=v&&!!(i||t.sticky&&!1!==i))?o+="y":i&&(d=!0,o+="FakeY"),t[n]=t[n]||{};var s=t[n][o]||(t[n][o]=E(t,{addG:!0,addY:u,source:d?t.source+"|()":void 0,removeY:!1===i,isInternalOnly:!0}));return r=r||0,s.lastIndex=r,f=a.exec.call(s,e),d&&f&&""===f.pop()&&(f=null),t.global&&(t.lastIndex=f?s.lastIndex:0),f},R.forEach=function(e,t,r){for(var n=0,i=-1,u=void 0;u=R.exec(e,t,n);)r(u,++i,e,t),n=u.index+(u[0].length||1)},R.globalize=function(e){return E(e,{addG:!0})},R.install=function(e){e=T(e),!i.astral&&e.astral&&P(!0)},R.isInstalled=function(e){return!!i[e]},R.isRegExp=function(e){return"[object RegExp]"===y.call(e)},R.match=function(e,t,r){var i=t.global&&"one"!==r||"all"===r,a=(i?"g":"")+(t.sticky?"y":"")||"noGY";t[n]=t[n]||{};var o=t[n][a]||(t[n][a]=E(t,{addG:!!i,removeG:"one"===r,isInternalOnly:!0})),d=u.match.call(O(e),o);return t.global&&(t.lastIndex="one"===r&&d?d.index+d[0].length:0),i?d||[]:d&&d[0]},R.matchChain=function(e,t){return function e(r,n){var i=t[n].regex?t[n]:{regex:t[n]},u=[];function a(e){if(i.backref){if(!(e.hasOwnProperty(i.backref)||+i.backref<e.length))throw new ReferenceError("Backreference to undefined group: "+i.backref);u.push(e[i.backref]||"")}else u.push(e[0])}for(var o=0;o<r.length;++o)R.forEach(r[o],i.regex,a);return n!==t.length-1&&u.length?e(u,n+1):u}([e],0)},R.replace=function(e,t,r,i){var u=R.isRegExp(t),o=t.global&&"one"!==i||"all"===i,d=(o?"g":"")+(t.sticky?"y":"")||"noGY",f=t;u?(t[n]=t[n]||{},f=t[n][d]||(t[n][d]=E(t,{addG:!!o,removeG:"one"===i,isInternalOnly:!0}))):o&&(f=new RegExp(R.escape(String(t)),"g"));var s=a.replace.call(O(e),f,r);return u&&t.global&&(t.lastIndex=0),s},R.replaceEach=function(e,t){var r=void 0,n=void 0;for(r=0;r<t.length;++r)n=t[r],e=R.replace(e,n[0],n[1],n[2]);return e},R.split=function(e,t,r){return a.split.call(O(e),t,r)},R.test=function(e,t,r,n){return!!R.exec(e,t,r,n)},R.uninstall=function(e){e=T(e),i.astral&&e.astral&&P(!1)},R.union=function(e,t,r){var i=(r=r||{}).conjunction||"or",a=0,o=void 0,d=void 0;function f(e,t,r){var n=d[a-o];if(t){if(++a,n)return"(?<"+n+">"}else if(r)return"\\"+(+r+o);return e}if(!M(e,"Array")||!e.length)throw new TypeError("Must provide a nonempty array of patterns to merge");for(var s=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g,c=[],h=void 0,l=0;l<e.length;++l)h=e[l],R.isRegExp(h)?(o=a,d=h[n]&&h[n].captureNames||[],c.push(u.replace.call(R(h.source).source,s,f))):c.push(R.escape(h));var p="none"===i?"":"|";return R(c.join(p),t)},a.exec=function(e){var t=this.lastIndex,r=u.exec.apply(this,arguments);if(r){if(!p&&r.length>1&&-1!==r.indexOf("")){var i=E(this,{removeG:!0,isInternalOnly:!0});u.replace.call(String(e).slice(r.index),i,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,u=1;u<i-2;++u)void 0===t[u]&&(r[u]=void 0)})}if(this[n]&&this[n].captureNames)for(var a=1;a<r.length;++a){var o=this[n].captureNames[a-1];o&&(r[o]=r[a])}this.global&&!r[0].length&&this.lastIndex>r.index&&(this.lastIndex=r.index)}return this.global||(this.lastIndex=t),r},a.test=function(e){return!!a.exec.call(this,e)},a.match=function(e){if(R.isRegExp(e)){if(e.global){var t=u.match.apply(this,arguments);return e.lastIndex=0,t}}else e=new RegExp(e);return a.exec.call(e,O(this))},a.replace=function(e,t){var r=R.isRegExp(e),i=void 0,a=void 0,o=void 0;return r?(e[n]&&(a=e[n].captureNames),i=e.lastIndex):e+="",o=M(t,"Function")?u.replace.call(String(this),e,function(){for(var n=arguments.length,i=Array(n),u=0;u<n;u++)i[u]=arguments[u];if(a){i[0]=new String(i[0]);for(var o=0;o<a.length;++o)a[o]&&(i[0][a[o]]=i[o+1])}return r&&e.global&&(e.lastIndex=i[i.length-2]+i[0].length),t.apply(void 0,i)}):u.replace.call(null==this?this:String(this),e,function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return u.replace.call(String(t),l,function(e,t,n,i){if(t=t||n){var u=+t;if(u<=r.length-3)return r[u]||"";if((u=a?a.indexOf(t):-1)<0)throw new SyntaxError("Backreference to undefined group "+e);return r[u+1]||""}if("$"===i)return"$";if("&"===i||0==+i)return r[0];if("`"===i)return r[r.length-1].slice(0,r[r.length-2]);if("'"===i)return r[r.length-1].slice(r[r.length-2]+r[0].length);if(i=+i,!isNaN(i)){if(i>r.length-3)throw new SyntaxError("Backreference to undefined group "+e);return r[i]||""}throw new SyntaxError("Invalid token "+e)})}),r&&(e.global?e.lastIndex=0:e.lastIndex=i),o},a.split=function(e,t){if(!R.isRegExp(e))return u.split.apply(this,arguments);var r=String(this),n=[],i=e.lastIndex,a=0,o=void 0;return t=(void 0===t?-1:t)>>>0,R.forEach(r,e,function(e){e.index+e[0].length>a&&(n.push(r.slice(a,e.index)),e.length>1&&e.index<r.length&&Array.prototype.push.apply(n,e.slice(1)),o=e[0].length,a=e.index+o)}),a===r.length?u.test.call(e,"")&&!o||n.push(""):n.push(r.slice(a)),e.lastIndex=i,n.length>t?n.slice(0,t):n},R.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/,function(e,t){if("B"===e[1]&&t===s)return e[0];throw new SyntaxError("Invalid escape "+e[0])},{scope:"all",leadChar:"\\"}),R.addToken(/\\u{([\dA-Fa-f]+)}/,function(e,t,r){var n=A(e[1]);if(n>1114111)throw new SyntaxError("Invalid Unicode code point "+e[0]);if(n<=65535)return"\\u"+I(k(n));if(g&&-1!==r.indexOf("u"))return e[0];throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u")},{scope:"all",leadChar:"\\"}),R.addToken(/\[(\^?)\]/,function(e){return e[1]?"[\\s\\S]":"\\b\\B"},{leadChar:"["}),R.addToken(/\(\?#[^)]*\)/,x,{leadChar:"("}),R.addToken(/\s+|#[^\n]*\n?/,x,{flag:"x"}),R.addToken(/\./,function(){return"[\\s\\S]"},{flag:"s",leadChar:"."}),R.addToken(/\\k<([\w$]+)>/,function(e){var t=isNaN(e[1])?this.captureNames.indexOf(e[1])+1:+e[1],r=e.index+e[0].length;if(!t||t>this.captureNames.length)throw new SyntaxError("Backreference to undefined group "+e[0]);return"\\"+t+(r===e.input.length||isNaN(e.input[r])?"":"(?:)")},{leadChar:"\\"}),R.addToken(/\\(\d+)/,function(e,t){if(!(t===s&&/^[1-9]/.test(e[1])&&+e[1]<=this.captureNames.length)&&"0"!==e[1])throw new SyntaxError("Cannot use octal escape or backreference to undefined group "+e[0]);return e[0]},{scope:"all",leadChar:"\\"}),R.addToken(/\(\?P?<([\w$]+)>/,function(e){if(!isNaN(e[1]))throw new SyntaxError("Cannot use integer as capture name "+e[0]);if("length"===e[1]||"__proto__"===e[1])throw new SyntaxError("Cannot use reserved word as capture name "+e[0]);if(-1!==this.captureNames.indexOf(e[1]))throw new SyntaxError("Cannot use same name for multiple groups "+e[0]);return this.captureNames.push(e[1]),this.hasNamedCapture=!0,"("},{leadChar:"("}),R.addToken(/\((?!\?)/,function(e,t,r){return-1!==r.indexOf("n")?"(?:":(this.captureNames.push(null),"(")},{optionalFlags:"n",leadChar:"("}),t.default=R,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(44)),i=c(r(43)),u=c(r(42)),a=c(r(41)),o=c(r(40)),d=c(r(39)),f=c(r(38)),s=c(r(37));function c(e){return e&&e.__esModule?e:{default:e}}(0,i.default)(n.default),(0,u.default)(n.default),(0,a.default)(n.default),(0,o.default)(n.default),(0,d.default)(n.default),(0,f.default)(n.default),(0,s.default)(n.default),t.default=n.default,e.exports=t.default},function(e,t,r){"use strict";const n=r(45);e.exports=((e,t)=>{if("string"!=typeof e)throw new TypeError("Expected a string");t=void 0===t?"_":t;const r=n("([\\p{Ll}\\d])(\\p{Lu})","g"),i=n("(\\p{Lu}+)(\\p{Lu}[\\p{Ll}\\d]+)","g");return e.replace(r,`$1${t}$2`).replace(i,`$1${t}$2`).toLowerCase()})},function(e,t){t.f={}.propertyIsEnumerable},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t){e.exports=!0},function(e,t,r){var n=r(1),i=r(7),u=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return u[e]||(u[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(50)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(51)("keys"),i=r(49);e.exports=function(e){return n[e]||(n[e]=i(e))}},function(e,t,r){var n=r(12),i=Math.max,u=Math.min;e.exports=function(e,t){return(e=n(e))<0?i(e+t,0):u(e,t)}},function(e,t,r){var n=r(12),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(56);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t,r){var n=r(14),i=r(4),u=r(13)(!1),a=r(52)("IE_PROTO");e.exports=function(e,t){var r,o=i(e),d=0,f=[];for(r in o)r!=a&&n(o,r)&&f.push(r);for(;t.length>d;)n(o,r=t[d++])&&(~u(f,r)||f.push(r));return f}},function(e,t,r){var n=r(58),i=r(48);e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,r){var n=r(59),i=r(4),u=r(47).f;e.exports=function(e){return function(t){for(var r,a=i(t),o=n(a),d=o.length,f=0,s=[];d>f;)u.call(a,r=o[f++])&&s.push(e?[r,a[r]]:a[r]);return s}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(6);e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t,r){var n=r(6),i=r(7).document,u=n(i)&&n(i.createElement);e.exports=function(e){return u?i.createElement(e):{}}},function(e,t,r){e.exports=!r(5)&&!r(15)(function(){return 7!=Object.defineProperty(r(63)("div"),"a",{get:function(){return 7}}).a})},function(e,t,r){var n=r(6);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var n=r(65),i=r(64),u=r(62),a=Object.defineProperty;t.f=r(5)?Object.defineProperty:function(e,t,r){if(n(e),t=u(t,!0),n(r),i)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(66),i=r(61);e.exports=r(5)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){var n=r(68);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t,r){var n=r(16),i=r(60)(!0);n(n.S,"Object",{entries:function(e){return i(e)}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,u=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,u=e}finally{try{!n&&o.return&&o.return()}finally{if(i)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.default;if(!e||"object"!==(void 0===e?"undefined":i(e))||!Object.keys(e).length)return"";var r=(0,u.default)(e).reduce(function(e,r){var i=n(r,2),u=i[0],a=i[1];return e[t(u)]=a,e},{});return"?"+o.default.stringify(r)};var u=d(r(17)),a=d(r(46)),o=d(r(36));function d(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){for(var t=e,r=arguments.length,a=Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];if(e&&1===a.length&&"object"===n(a[0])){var d=a[0];t=e.replace(u.TEMPLATE_LITERAL,function(e,t){var r=t,n=void 0,i=u.KEY.exec(r);if(null!==i)for(n=d[i[1]];(r=r.substring(i[0].length))&&null!=n;)if(i=u.KEY_ACCESS.exec(r))n=n[i[1]];else{if(!(i=u.INDEX_ACCESS.exec(r)))break;n=n[i[1]]}if(r.length)throw new SyntaxError("[formatText] failed to parse named argument key: "+t);return n})}return i.sprintf.apply(void 0,[t].concat(a))};var i=r(18),u={TEMPLATE_LITERAL:/\${([^)]+?)}/g,KEY:/^([a-z_][a-z_\d]*)/i,KEY_ACCESS:/^\.([a-z_][a-z_\d]*)/i,INDEX_ACCESS:/^\[(\d+)\]/}},function(e,t,r){(function(n){var i;!function(n){"use strict";function u(e){var t=e&&e.Promise||n.Promise,r=e&&e.XMLHttpRequest||n.XMLHttpRequest,i=n;return function(){var e=Object.create(i,{fetch:{value:void 0,writable:!0}});return function(e){if(!e.fetch){var n={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(n.arrayBuffer)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=function(e){return e&&DataView.prototype.isPrototypeOf(e)},a=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};h.prototype.append=function(e,t){e=f(e),t=s(t);var r=this.map[e];this.map[e]=r?r+","+t:t},h.prototype.delete=function(e){delete this.map[f(e)]},h.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},h.prototype.set=function(e,t){this.map[f(e)]=s(t)},h.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},h.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),c(e)},h.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),c(e)},h.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),c(e)},n.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var o=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},m.call(g.prototype),m.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},_.error=function(){var e=new _(null,{status:0,statusText:""});return e.type="error",e};var d=[301,302,303,307,308];_.redirect=function(e,t){if(-1===d.indexOf(t))throw new RangeError("Invalid status code");return new _(null,{status:t,headers:{location:e}})},e.Headers=h,e.Request=g,e.Response=_,e.fetch=function(e,i){return new t(function(t,u){var a=new g(e,i),o=new r;o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:function(e){var t=new h;return e.split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var i=r.join(":").trim();t.append(n,i)}}),t}(o.getAllResponseHeaders()||"")};e.url="responseURL"in o?o.responseURL:e.headers.get("X-Request-URL");var r="response"in o?o.response:o.responseText;t(new _(r,e))},o.onerror=function(){u(new TypeError("Network request failed"))},o.ontimeout=function(){u(new TypeError("Network request failed"))},o.open(a.method,a.url,!0),"include"===a.credentials&&(o.withCredentials=!0),"responseType"in o&&n.blob&&(o.responseType="blob"),a.headers.forEach(function(e,t){o.setRequestHeader(t,e)}),o.send(void 0===a._bodyInit?null:a._bodyInit)})},e.fetch.polyfill=!0}function f(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function c(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n.iterable&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function l(e){if(e.bodyUsed)return t.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new t(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function b(e){var t=new FileReader,r=p(t);return t.readAsArrayBuffer(e),r}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(n.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(n.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(n.arrayBuffer&&n.blob&&u(e))this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!n.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!a(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=y(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return t.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return t.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return t.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||t.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=p(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return t.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return t.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}function g(e,t){var r=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=function(e){var t=e.toUpperCase();return o.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function v(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),i=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(i))}}),t}function _(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}}(void 0!==e?e:this),{fetch:e.fetch,Headers:e.Headers,Request:e.Request,Response:e.Response}}()}void 0===(i=function(){return u}.call(t,r,t,e))||(e.exports=i)}("undefined"!=typeof self?self:void 0!==n?n:this)}).call(this,r(0))},function(e,t,r){(function(t,r){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
!function(t,r){e.exports=r()}(0,function(){"use strict";function e(e){return"function"==typeof e}var n=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,u=void 0,a=void 0,o=function(e,t){p[i]=e,p[i+1]=t,2===(i+=2)&&(a?a(b):y())};var d="undefined"!=typeof window?window:void 0,f=d||{},s=f.MutationObserver||f.WebKitMutationObserver,c="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){var e=setTimeout;return function(){return e(b,1)}}var p=new Array(1e3);function b(){for(var e=0;e<i;e+=2){(0,p[e])(p[e+1]),p[e]=void 0,p[e+1]=void 0}i=0}var y=void 0;function m(e,t){var r=this,n=new this.constructor(_);void 0===n[v]&&j(n);var i=r._state;if(i){var u=arguments[i-1];o(function(){return O(i,n,u,r._result)})}else C(r,n,e,t);return n}function g(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(_);return M(t,e),t}y=c?function(){return t.nextTick(b)}:s?function(){var e=0,t=new s(b),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}():h?function(){var e=new MessageChannel;return e.port1.onmessage=b,function(){return e.port2.postMessage(0)}}():void 0===d?function(){try{var e=Function("return this")().require("vertx");return void 0!==(u=e.runOnLoop||e.runOnContext)?function(){u(b)}:l()}catch(e){return l()}}():l();var v=Math.random().toString(36).substring(2);function _(){}var w=void 0,S=1,E=2,A={error:null};function x(e){try{return e.then}catch(e){return A.error=e,A}}function k(t,r,n){r.constructor===t.constructor&&n===m&&r.constructor.resolve===g?function(e,t){t._state===S?T(e,t._result):t._state===E?B(e,t._result):C(t,void 0,function(t){return M(e,t)},function(t){return B(e,t)})}(t,r):n===A?(B(t,A.error),A.error=null):void 0===n?T(t,r):e(n)?function(e,t,r){o(function(e){var n=!1,i=function(e,t,r,n){try{e.call(t,r,n)}catch(e){return e}}(r,t,function(r){n||(n=!0,t!==r?M(e,r):T(e,r))},function(t){n||(n=!0,B(e,t))},e._label);!n&&i&&(n=!0,B(e,i))},e)}(t,r,n):T(t,r)}function M(e,t){e===t?B(e,new TypeError("You cannot resolve a promise with itself")):!function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}(t)?T(e,t):k(e,t,x(t))}function I(e){e._onerror&&e._onerror(e._result),P(e)}function T(e,t){e._state===w&&(e._result=t,e._state=S,0!==e._subscribers.length&&o(P,e))}function B(e,t){e._state===w&&(e._state=E,e._result=t,o(I,e))}function C(e,t,r,n){var i=e._subscribers,u=i.length;e._onerror=null,i[u]=t,i[u+S]=r,i[u+E]=n,0===u&&e._state&&o(P,e)}function P(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var n=void 0,i=void 0,u=e._result,a=0;a<t.length;a+=3)n=t[a],i=t[a+r],n?O(r,n,i,u):i(u);e._subscribers.length=0}}function O(t,r,n,i){var u=e(n),a=void 0,o=void 0,d=void 0,f=void 0;if(u){if((a=function(e,t){try{return e(t)}catch(e){return A.error=e,A}}(n,i))===A?(f=!0,o=a.error,a.error=null):d=!0,r===a)return void B(r,new TypeError("A promises callback cannot return that same promise."))}else a=i,d=!0;r._state!==w||(u&&d?M(r,a):f?B(r,o):t===S?T(r,a):t===E&&B(r,a))}var R=0;function j(e){e[v]=R++,e._state=void 0,e._result=void 0,e._subscribers=[]}var U=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(_),this.promise[v]||j(this.promise),n(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&T(this.promise,this._result))):B(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===w&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===g){var i=x(e);if(i===m&&e._state!==w)this._settledAt(e._state,t,e._result);else if("function"!=typeof i)this._remaining--,this._result[t]=e;else if(r===L){var u=new r(_);k(u,e,i),this._willSettleAt(u,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(n(e),t)},e.prototype._settledAt=function(e,t,r){var n=this.promise;n._state===w&&(this._remaining--,e===E?B(n,r):this._result[t]=r),0===this._remaining&&T(n,this._result)},e.prototype._willSettleAt=function(e,t){var r=this;C(e,void 0,function(e){return r._settledAt(S,t,e)},function(e){return r._settledAt(E,t,e)})},e}();var L=function(){function e(t){this[v]=R++,this._result=this._state=void 0,this._subscribers=[],_!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){try{t(function(t){M(e,t)},function(t){B(e,t)})}catch(t){B(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var t=this.constructor;return this.then(function(r){return t.resolve(e()).then(function(){return r})},function(r){return t.resolve(e()).then(function(){throw r})})},e}();return L.prototype.then=m,L.all=function(e){return new U(this,e).promise},L.race=function(e){var t=this;return n(e)?new t(function(r,n){for(var i=e.length,u=0;u<i;u++)t.resolve(e[u]).then(r,n)}):new t(function(e,t){return t(new TypeError("You must pass an array to race."))})},L.resolve=g,L.reject=function(e){var t=new this(_);return B(t,e),t},L._setScheduler=function(e){a=e},L._setAsap=function(e){o=e},L._asap=o,L.polyfill=function(){var e=void 0;if(void 0!==r)e=r;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=L},L.Promise=L,L})}).call(this,r(8),r(0))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.jsonBody,i=t.query,u=t.urlTemplateSpec,f=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["jsonBody","query","urlTemplateSpec"]),c=e;null!=u&&(Array.isArray(u)&&u.length?c=(0,a.vsprintf)(e,u):u&&"object"===(void 0===u?"undefined":n(u))&&Object.keys(u).length&&(c=(0,o.default)(e,u)));null!=i&&("string"==typeof i?c+=i:i&&"object"===(void 0===i?"undefined":n(i))&&(c+=(0,d.default)(i)));null!=r&&(f.body=JSON.stringify(r));return s.fetch(c,f).then(function(e){if(!e||!e.ok){var t={message:"HTTP Error: Requested page not reachable",status:e.status+" "+e.statusText,requestURI:e.url};throw t}return e})};var i=r(74),u=f(r(73)),a=r(18),o=f(r(72)),d=f(r(71));function f(e){return e&&e.__esModule?e:{default:e}}var s=(0,u.default)(i.Promise)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n({},o,t,{query:t.query&&(0,u.default)(t.query)}),a=e;r.jsonBody&&(r.headers=n({},r.headers,{"Content-Type":"application/json"}));if(!e)return Promise.reject(new Error("Request was not given a url."));return(0,i.default)(a,r).then(function(e){return e.json()}).catch(function(e){throw console.error(e),e})};var i=a(r(75)),u=a(r(33));function a(e){return e&&e.__esModule?e:{default:e}}var o={headers:{Accept:"application/json"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e){return e&&e.__esModule?e:{default:e}}(r(76));var a=["content-type"],o=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.path=t,this.headers=n({},r),Object.keys(r).forEach(function(e){if(a.includes(e.toLowerCase()))throw new Error("Header "+e+" is reserved and cannot be set.")})}return i(e,[{key:"getApiUrls",value:function(e){return this.path+{blocks:"blocks",blocksDetail:"blocks/%(blockHeight)s",outputs:"outputs",transactions:"transactions",transactionsSync:"transactions?mode=sync",transactionsAsync:"transactions?mode=async",transactionsCommit:"transactions?mode=commit",transactionsDetail:"transactions/%(transactionId)s",assets:"assets",metadata:"metadata",votes:"votes"}[e]}},{key:"_req",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.headers=n({},t.headers,this.headers),(0,u.default)(e,t)}},{key:"getBlock",value:function(e){return this._req(this.getApiUrls("blocksDetail"),{urlTemplateSpec:{blockHeight:e}})}},{key:"getTransaction",value:function(e){return this._req(this.getApiUrls("transactionsDetail"),{urlTemplateSpec:{transactionId:e}})}},{key:"listBlocks",value:function(e){return this._req(this.getApiUrls("blocks"),{query:{transaction_id:e}})}},{key:"listOutputs",value:function(e,t){var r={public_key:e};return void 0!==t&&(r.spent=t.toString()),this._req(this.getApiUrls("outputs"),{query:r})}},{key:"listTransactions",value:function(e,t){return this._req(this.getApiUrls("transactions"),{query:{asset_id:e,operation:t}})}},{key:"listVotes",value:function(e){return this._req(this.getApiUrls("votes"),{query:{block_id:e}})}},{key:"postTransaction",value:function(e){return this.postTransactionCommit(e)}},{key:"postTransactionSync",value:function(e){return this._req(this.getApiUrls("transactionsSync"),{method:"POST",jsonBody:e})}},{key:"postTransactionAsync",value:function(e){return this._req(this.getApiUrls("transactionsAsync"),{method:"POST",jsonBody:e})}},{key:"postTransactionCommit",value:function(e){return this._req(this.getApiUrls("transactionsCommit"),{method:"POST",jsonBody:e})}},{key:"searchAssets",value:function(e){return this._req(this.getApiUrls("assets"),{query:{search:e}})}},{key:"searchMetadata",value:function(e){return this._req(this.getApiUrls("metadata"),{query:{search:e}})}}]),e}();t.default=o},function(e,t){},function(e,t,r){!function(e){"use strict";var t=function(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;t++)r[t]=e[t];return r},n=function(){throw new Error("no PRNG")},i=new Uint8Array(16),u=new Uint8Array(32);u[0]=9;var a=t(),o=t([1]),d=t([56129,1]),f=t([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),s=t([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),c=t([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),h=t([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),l=t([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function p(e,t,r,n){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r,e[t+4]=n>>24&255,e[t+5]=n>>16&255,e[t+6]=n>>8&255,e[t+7]=255&n}function b(e,t,r,n,i){var u,a=0;for(u=0;u<i;u++)a|=e[t+u]^r[n+u];return(1&a-1>>>8)-1}function y(e,t,r,n){return b(e,t,r,n,16)}function m(e,t,r,n){return b(e,t,r,n,32)}function g(e,t,r,n){!function(e,t,r,n){for(var i,u=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,o=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,d=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,f=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,h=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,b=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,m=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,g=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,v=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,_=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,w=u,S=a,E=o,A=d,x=f,k=s,M=c,I=h,T=l,B=p,C=b,P=y,O=m,R=g,j=v,U=_,L=0;L<20;L+=2)w^=(i=(O^=(i=(T^=(i=(x^=(i=w+O|0)<<7|i>>>25)+w|0)<<9|i>>>23)+x|0)<<13|i>>>19)+T|0)<<18|i>>>14,k^=(i=(S^=(i=(R^=(i=(B^=(i=k+S|0)<<7|i>>>25)+k|0)<<9|i>>>23)+B|0)<<13|i>>>19)+R|0)<<18|i>>>14,C^=(i=(M^=(i=(E^=(i=(j^=(i=C+M|0)<<7|i>>>25)+C|0)<<9|i>>>23)+j|0)<<13|i>>>19)+E|0)<<18|i>>>14,U^=(i=(P^=(i=(I^=(i=(A^=(i=U+P|0)<<7|i>>>25)+U|0)<<9|i>>>23)+A|0)<<13|i>>>19)+I|0)<<18|i>>>14,w^=(i=(A^=(i=(E^=(i=(S^=(i=w+A|0)<<7|i>>>25)+w|0)<<9|i>>>23)+S|0)<<13|i>>>19)+E|0)<<18|i>>>14,k^=(i=(x^=(i=(I^=(i=(M^=(i=k+x|0)<<7|i>>>25)+k|0)<<9|i>>>23)+M|0)<<13|i>>>19)+I|0)<<18|i>>>14,C^=(i=(B^=(i=(T^=(i=(P^=(i=C+B|0)<<7|i>>>25)+C|0)<<9|i>>>23)+P|0)<<13|i>>>19)+T|0)<<18|i>>>14,U^=(i=(j^=(i=(R^=(i=(O^=(i=U+j|0)<<7|i>>>25)+U|0)<<9|i>>>23)+O|0)<<13|i>>>19)+R|0)<<18|i>>>14;w=w+u|0,S=S+a|0,E=E+o|0,A=A+d|0,x=x+f|0,k=k+s|0,M=M+c|0,I=I+h|0,T=T+l|0,B=B+p|0,C=C+b|0,P=P+y|0,O=O+m|0,R=R+g|0,j=j+v|0,U=U+_|0,e[0]=w>>>0&255,e[1]=w>>>8&255,e[2]=w>>>16&255,e[3]=w>>>24&255,e[4]=S>>>0&255,e[5]=S>>>8&255,e[6]=S>>>16&255,e[7]=S>>>24&255,e[8]=E>>>0&255,e[9]=E>>>8&255,e[10]=E>>>16&255,e[11]=E>>>24&255,e[12]=A>>>0&255,e[13]=A>>>8&255,e[14]=A>>>16&255,e[15]=A>>>24&255,e[16]=x>>>0&255,e[17]=x>>>8&255,e[18]=x>>>16&255,e[19]=x>>>24&255,e[20]=k>>>0&255,e[21]=k>>>8&255,e[22]=k>>>16&255,e[23]=k>>>24&255,e[24]=M>>>0&255,e[25]=M>>>8&255,e[26]=M>>>16&255,e[27]=M>>>24&255,e[28]=I>>>0&255,e[29]=I>>>8&255,e[30]=I>>>16&255,e[31]=I>>>24&255,e[32]=T>>>0&255,e[33]=T>>>8&255,e[34]=T>>>16&255,e[35]=T>>>24&255,e[36]=B>>>0&255,e[37]=B>>>8&255,e[38]=B>>>16&255,e[39]=B>>>24&255,e[40]=C>>>0&255,e[41]=C>>>8&255,e[42]=C>>>16&255,e[43]=C>>>24&255,e[44]=P>>>0&255,e[45]=P>>>8&255,e[46]=P>>>16&255,e[47]=P>>>24&255,e[48]=O>>>0&255,e[49]=O>>>8&255,e[50]=O>>>16&255,e[51]=O>>>24&255,e[52]=R>>>0&255,e[53]=R>>>8&255,e[54]=R>>>16&255,e[55]=R>>>24&255,e[56]=j>>>0&255,e[57]=j>>>8&255,e[58]=j>>>16&255,e[59]=j>>>24&255,e[60]=U>>>0&255,e[61]=U>>>8&255,e[62]=U>>>16&255,e[63]=U>>>24&255}(e,t,r,n)}function v(e,t,r,n){!function(e,t,r,n){for(var i,u=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24,o=255&r[4]|(255&r[5])<<8|(255&r[6])<<16|(255&r[7])<<24,d=255&r[8]|(255&r[9])<<8|(255&r[10])<<16|(255&r[11])<<24,f=255&r[12]|(255&r[13])<<8|(255&r[14])<<16|(255&r[15])<<24,s=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,h=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,p=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,b=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,y=255&r[16]|(255&r[17])<<8|(255&r[18])<<16|(255&r[19])<<24,m=255&r[20]|(255&r[21])<<8|(255&r[22])<<16|(255&r[23])<<24,g=255&r[24]|(255&r[25])<<8|(255&r[26])<<16|(255&r[27])<<24,v=255&r[28]|(255&r[29])<<8|(255&r[30])<<16|(255&r[31])<<24,_=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,w=0;w<20;w+=2)u^=(i=(m^=(i=(l^=(i=(f^=(i=u+m|0)<<7|i>>>25)+u|0)<<9|i>>>23)+f|0)<<13|i>>>19)+l|0)<<18|i>>>14,s^=(i=(a^=(i=(g^=(i=(p^=(i=s+a|0)<<7|i>>>25)+s|0)<<9|i>>>23)+p|0)<<13|i>>>19)+g|0)<<18|i>>>14,b^=(i=(c^=(i=(o^=(i=(v^=(i=b+c|0)<<7|i>>>25)+b|0)<<9|i>>>23)+v|0)<<13|i>>>19)+o|0)<<18|i>>>14,_^=(i=(y^=(i=(h^=(i=(d^=(i=_+y|0)<<7|i>>>25)+_|0)<<9|i>>>23)+d|0)<<13|i>>>19)+h|0)<<18|i>>>14,u^=(i=(d^=(i=(o^=(i=(a^=(i=u+d|0)<<7|i>>>25)+u|0)<<9|i>>>23)+a|0)<<13|i>>>19)+o|0)<<18|i>>>14,s^=(i=(f^=(i=(h^=(i=(c^=(i=s+f|0)<<7|i>>>25)+s|0)<<9|i>>>23)+c|0)<<13|i>>>19)+h|0)<<18|i>>>14,b^=(i=(p^=(i=(l^=(i=(y^=(i=b+p|0)<<7|i>>>25)+b|0)<<9|i>>>23)+y|0)<<13|i>>>19)+l|0)<<18|i>>>14,_^=(i=(v^=(i=(g^=(i=(m^=(i=_+v|0)<<7|i>>>25)+_|0)<<9|i>>>23)+m|0)<<13|i>>>19)+g|0)<<18|i>>>14;e[0]=u>>>0&255,e[1]=u>>>8&255,e[2]=u>>>16&255,e[3]=u>>>24&255,e[4]=s>>>0&255,e[5]=s>>>8&255,e[6]=s>>>16&255,e[7]=s>>>24&255,e[8]=b>>>0&255,e[9]=b>>>8&255,e[10]=b>>>16&255,e[11]=b>>>24&255,e[12]=_>>>0&255,e[13]=_>>>8&255,e[14]=_>>>16&255,e[15]=_>>>24&255,e[16]=c>>>0&255,e[17]=c>>>8&255,e[18]=c>>>16&255,e[19]=c>>>24&255,e[20]=h>>>0&255,e[21]=h>>>8&255,e[22]=h>>>16&255,e[23]=h>>>24&255,e[24]=l>>>0&255,e[25]=l>>>8&255,e[26]=l>>>16&255,e[27]=l>>>24&255,e[28]=p>>>0&255,e[29]=p>>>8&255,e[30]=p>>>16&255,e[31]=p>>>24&255}(e,t,r,n)}var _=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function w(e,t,r,n,i,u,a){var o,d,f=new Uint8Array(16),s=new Uint8Array(64);for(d=0;d<16;d++)f[d]=0;for(d=0;d<8;d++)f[d]=u[d];for(;i>=64;){for(g(s,f,a,_),d=0;d<64;d++)e[t+d]=r[n+d]^s[d];for(o=1,d=8;d<16;d++)o=o+(255&f[d])|0,f[d]=255&o,o>>>=8;i-=64,t+=64,n+=64}if(i>0)for(g(s,f,a,_),d=0;d<i;d++)e[t+d]=r[n+d]^s[d];return 0}function S(e,t,r,n,i){var u,a,o=new Uint8Array(16),d=new Uint8Array(64);for(a=0;a<16;a++)o[a]=0;for(a=0;a<8;a++)o[a]=n[a];for(;r>=64;){for(g(d,o,i,_),a=0;a<64;a++)e[t+a]=d[a];for(u=1,a=8;a<16;a++)u=u+(255&o[a])|0,o[a]=255&u,u>>>=8;r-=64,t+=64}if(r>0)for(g(d,o,i,_),a=0;a<r;a++)e[t+a]=d[a];return 0}function E(e,t,r,n,i){var u=new Uint8Array(32);v(u,n,i,_);for(var a=new Uint8Array(8),o=0;o<8;o++)a[o]=n[o+16];return S(e,t,r,a,u)}function A(e,t,r,n,i,u,a){var o=new Uint8Array(32);v(o,u,a,_);for(var d=new Uint8Array(8),f=0;f<8;f++)d[f]=u[f+16];return w(e,t,r,n,i,d,o)}var x=function(e){var t,r,n,i,u,a,o,d;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&e[0]|(255&e[1])<<8,this.r[0]=8191&t,r=255&e[2]|(255&e[3])<<8,this.r[1]=8191&(t>>>13|r<<3),n=255&e[4]|(255&e[5])<<8,this.r[2]=7939&(r>>>10|n<<6),i=255&e[6]|(255&e[7])<<8,this.r[3]=8191&(n>>>7|i<<9),u=255&e[8]|(255&e[9])<<8,this.r[4]=255&(i>>>4|u<<12),this.r[5]=u>>>1&8190,a=255&e[10]|(255&e[11])<<8,this.r[6]=8191&(u>>>14|a<<2),o=255&e[12]|(255&e[13])<<8,this.r[7]=8065&(a>>>11|o<<5),d=255&e[14]|(255&e[15])<<8,this.r[8]=8191&(o>>>8|d<<8),this.r[9]=d>>>5&127,this.pad[0]=255&e[16]|(255&e[17])<<8,this.pad[1]=255&e[18]|(255&e[19])<<8,this.pad[2]=255&e[20]|(255&e[21])<<8,this.pad[3]=255&e[22]|(255&e[23])<<8,this.pad[4]=255&e[24]|(255&e[25])<<8,this.pad[5]=255&e[26]|(255&e[27])<<8,this.pad[6]=255&e[28]|(255&e[29])<<8,this.pad[7]=255&e[30]|(255&e[31])<<8};function k(e,t,r,n,i,u){var a=new x(u);return a.update(r,n,i),a.finish(e,t),0}function M(e,t,r,n,i,u){var a=new Uint8Array(16);return k(a,0,r,n,i,u),y(e,t,a,0)}function I(e,t,r,n,i){var u;if(r<32)return-1;for(A(e,0,t,0,r,n,i),k(e,16,e,32,r-32,e),u=0;u<16;u++)e[u]=0;return 0}function T(e,t,r,n,i){var u,a=new Uint8Array(32);if(r<32)return-1;if(E(a,0,32,n,i),0!==M(t,16,t,32,r-32,a))return-1;for(A(e,0,t,0,r,n,i),u=0;u<32;u++)e[u]=0;return 0}function B(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r]}function C(e){var t,r,n=1;for(t=0;t<16;t++)r=e[t]+n+65535,n=Math.floor(r/65536),e[t]=r-65536*n;e[0]+=n-1+37*(n-1)}function P(e,t,r){for(var n,i=~(r-1),u=0;u<16;u++)n=i&(e[u]^t[u]),e[u]^=n,t[u]^=n}function O(e,r){var n,i,u,a=t(),o=t();for(n=0;n<16;n++)o[n]=r[n];for(C(o),C(o),C(o),i=0;i<2;i++){for(a[0]=o[0]-65517,n=1;n<15;n++)a[n]=o[n]-65535-(a[n-1]>>16&1),a[n-1]&=65535;a[15]=o[15]-32767-(a[14]>>16&1),u=a[15]>>16&1,a[14]&=65535,P(o,a,1-u)}for(n=0;n<16;n++)e[2*n]=255&o[n],e[2*n+1]=o[n]>>8}function R(e,t){var r=new Uint8Array(32),n=new Uint8Array(32);return O(r,e),O(n,t),m(r,0,n,0)}function j(e){var t=new Uint8Array(32);return O(t,e),1&t[0]}function U(e,t){var r;for(r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}function L(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]+r[n]}function N(e,t,r){for(var n=0;n<16;n++)e[n]=t[n]-r[n]}function D(e,t,r){var n,i,u=0,a=0,o=0,d=0,f=0,s=0,c=0,h=0,l=0,p=0,b=0,y=0,m=0,g=0,v=0,_=0,w=0,S=0,E=0,A=0,x=0,k=0,M=0,I=0,T=0,B=0,C=0,P=0,O=0,R=0,j=0,U=r[0],L=r[1],N=r[2],D=r[3],z=r[4],F=r[5],q=r[6],K=r[7],Y=r[8],H=r[9],J=r[10],G=r[11],V=r[12],X=r[13],W=r[14],Z=r[15];u+=(n=t[0])*U,a+=n*L,o+=n*N,d+=n*D,f+=n*z,s+=n*F,c+=n*q,h+=n*K,l+=n*Y,p+=n*H,b+=n*J,y+=n*G,m+=n*V,g+=n*X,v+=n*W,_+=n*Z,a+=(n=t[1])*U,o+=n*L,d+=n*N,f+=n*D,s+=n*z,c+=n*F,h+=n*q,l+=n*K,p+=n*Y,b+=n*H,y+=n*J,m+=n*G,g+=n*V,v+=n*X,_+=n*W,w+=n*Z,o+=(n=t[2])*U,d+=n*L,f+=n*N,s+=n*D,c+=n*z,h+=n*F,l+=n*q,p+=n*K,b+=n*Y,y+=n*H,m+=n*J,g+=n*G,v+=n*V,_+=n*X,w+=n*W,S+=n*Z,d+=(n=t[3])*U,f+=n*L,s+=n*N,c+=n*D,h+=n*z,l+=n*F,p+=n*q,b+=n*K,y+=n*Y,m+=n*H,g+=n*J,v+=n*G,_+=n*V,w+=n*X,S+=n*W,E+=n*Z,f+=(n=t[4])*U,s+=n*L,c+=n*N,h+=n*D,l+=n*z,p+=n*F,b+=n*q,y+=n*K,m+=n*Y,g+=n*H,v+=n*J,_+=n*G,w+=n*V,S+=n*X,E+=n*W,A+=n*Z,s+=(n=t[5])*U,c+=n*L,h+=n*N,l+=n*D,p+=n*z,b+=n*F,y+=n*q,m+=n*K,g+=n*Y,v+=n*H,_+=n*J,w+=n*G,S+=n*V,E+=n*X,A+=n*W,x+=n*Z,c+=(n=t[6])*U,h+=n*L,l+=n*N,p+=n*D,b+=n*z,y+=n*F,m+=n*q,g+=n*K,v+=n*Y,_+=n*H,w+=n*J,S+=n*G,E+=n*V,A+=n*X,x+=n*W,k+=n*Z,h+=(n=t[7])*U,l+=n*L,p+=n*N,b+=n*D,y+=n*z,m+=n*F,g+=n*q,v+=n*K,_+=n*Y,w+=n*H,S+=n*J,E+=n*G,A+=n*V,x+=n*X,k+=n*W,M+=n*Z,l+=(n=t[8])*U,p+=n*L,b+=n*N,y+=n*D,m+=n*z,g+=n*F,v+=n*q,_+=n*K,w+=n*Y,S+=n*H,E+=n*J,A+=n*G,x+=n*V,k+=n*X,M+=n*W,I+=n*Z,p+=(n=t[9])*U,b+=n*L,y+=n*N,m+=n*D,g+=n*z,v+=n*F,_+=n*q,w+=n*K,S+=n*Y,E+=n*H,A+=n*J,x+=n*G,k+=n*V,M+=n*X,I+=n*W,T+=n*Z,b+=(n=t[10])*U,y+=n*L,m+=n*N,g+=n*D,v+=n*z,_+=n*F,w+=n*q,S+=n*K,E+=n*Y,A+=n*H,x+=n*J,k+=n*G,M+=n*V,I+=n*X,T+=n*W,B+=n*Z,y+=(n=t[11])*U,m+=n*L,g+=n*N,v+=n*D,_+=n*z,w+=n*F,S+=n*q,E+=n*K,A+=n*Y,x+=n*H,k+=n*J,M+=n*G,I+=n*V,T+=n*X,B+=n*W,C+=n*Z,m+=(n=t[12])*U,g+=n*L,v+=n*N,_+=n*D,w+=n*z,S+=n*F,E+=n*q,A+=n*K,x+=n*Y,k+=n*H,M+=n*J,I+=n*G,T+=n*V,B+=n*X,C+=n*W,P+=n*Z,g+=(n=t[13])*U,v+=n*L,_+=n*N,w+=n*D,S+=n*z,E+=n*F,A+=n*q,x+=n*K,k+=n*Y,M+=n*H,I+=n*J,T+=n*G,B+=n*V,C+=n*X,P+=n*W,O+=n*Z,v+=(n=t[14])*U,_+=n*L,w+=n*N,S+=n*D,E+=n*z,A+=n*F,x+=n*q,k+=n*K,M+=n*Y,I+=n*H,T+=n*J,B+=n*G,C+=n*V,P+=n*X,O+=n*W,R+=n*Z,_+=(n=t[15])*U,a+=38*(S+=n*N),o+=38*(E+=n*D),d+=38*(A+=n*z),f+=38*(x+=n*F),s+=38*(k+=n*q),c+=38*(M+=n*K),h+=38*(I+=n*Y),l+=38*(T+=n*H),p+=38*(B+=n*J),b+=38*(C+=n*G),y+=38*(P+=n*V),m+=38*(O+=n*X),g+=38*(R+=n*W),v+=38*(j+=n*Z),u=(n=(u+=38*(w+=n*L))+(i=1)+65535)-65536*(i=Math.floor(n/65536)),a=(n=a+i+65535)-65536*(i=Math.floor(n/65536)),o=(n=o+i+65535)-65536*(i=Math.floor(n/65536)),d=(n=d+i+65535)-65536*(i=Math.floor(n/65536)),f=(n=f+i+65535)-65536*(i=Math.floor(n/65536)),s=(n=s+i+65535)-65536*(i=Math.floor(n/65536)),c=(n=c+i+65535)-65536*(i=Math.floor(n/65536)),h=(n=h+i+65535)-65536*(i=Math.floor(n/65536)),l=(n=l+i+65535)-65536*(i=Math.floor(n/65536)),p=(n=p+i+65535)-65536*(i=Math.floor(n/65536)),b=(n=b+i+65535)-65536*(i=Math.floor(n/65536)),y=(n=y+i+65535)-65536*(i=Math.floor(n/65536)),m=(n=m+i+65535)-65536*(i=Math.floor(n/65536)),g=(n=g+i+65535)-65536*(i=Math.floor(n/65536)),v=(n=v+i+65535)-65536*(i=Math.floor(n/65536)),_=(n=_+i+65535)-65536*(i=Math.floor(n/65536)),u=(n=(u+=i-1+37*(i-1))+(i=1)+65535)-65536*(i=Math.floor(n/65536)),a=(n=a+i+65535)-65536*(i=Math.floor(n/65536)),o=(n=o+i+65535)-65536*(i=Math.floor(n/65536)),d=(n=d+i+65535)-65536*(i=Math.floor(n/65536)),f=(n=f+i+65535)-65536*(i=Math.floor(n/65536)),s=(n=s+i+65535)-65536*(i=Math.floor(n/65536)),c=(n=c+i+65535)-65536*(i=Math.floor(n/65536)),h=(n=h+i+65535)-65536*(i=Math.floor(n/65536)),l=(n=l+i+65535)-65536*(i=Math.floor(n/65536)),p=(n=p+i+65535)-65536*(i=Math.floor(n/65536)),b=(n=b+i+65535)-65536*(i=Math.floor(n/65536)),y=(n=y+i+65535)-65536*(i=Math.floor(n/65536)),m=(n=m+i+65535)-65536*(i=Math.floor(n/65536)),g=(n=g+i+65535)-65536*(i=Math.floor(n/65536)),v=(n=v+i+65535)-65536*(i=Math.floor(n/65536)),_=(n=_+i+65535)-65536*(i=Math.floor(n/65536)),u+=i-1+37*(i-1),e[0]=u,e[1]=a,e[2]=o,e[3]=d,e[4]=f,e[5]=s,e[6]=c,e[7]=h,e[8]=l,e[9]=p,e[10]=b,e[11]=y,e[12]=m,e[13]=g,e[14]=v,e[15]=_}function z(e,t){D(e,t,t)}function F(e,r){var n,i=t();for(n=0;n<16;n++)i[n]=r[n];for(n=253;n>=0;n--)z(i,i),2!==n&&4!==n&&D(i,i,r);for(n=0;n<16;n++)e[n]=i[n]}function q(e,r,n){var i,u,a=new Uint8Array(32),o=new Float64Array(80),f=t(),s=t(),c=t(),h=t(),l=t(),p=t();for(u=0;u<31;u++)a[u]=r[u];for(a[31]=127&r[31]|64,a[0]&=248,U(o,n),u=0;u<16;u++)s[u]=o[u],h[u]=f[u]=c[u]=0;for(f[0]=h[0]=1,u=254;u>=0;--u)P(f,s,i=a[u>>>3]>>>(7&u)&1),P(c,h,i),L(l,f,c),N(f,f,c),L(c,s,h),N(s,s,h),z(h,l),z(p,f),D(f,c,f),D(c,s,l),L(l,f,c),N(f,f,c),z(s,f),N(c,h,p),D(f,c,d),L(f,f,h),D(c,c,f),D(f,h,p),D(h,s,o),z(s,l),P(f,s,i),P(c,h,i);for(u=0;u<16;u++)o[u+16]=f[u],o[u+32]=c[u],o[u+48]=s[u],o[u+64]=h[u];var b=o.subarray(32),y=o.subarray(16);return F(b,b),D(y,y,b),O(e,y),0}function K(e,t){return q(e,t,u)}function Y(e,t){return n(t,32),K(e,t)}function H(e,t,r){var n=new Uint8Array(32);return q(n,r,t),v(e,i,n,_)}x.prototype.blocks=function(e,t,r){for(var n,i,u,a,o,d,f,s,c,h,l,p,b,y,m,g,v,_,w,S=this.fin?0:2048,E=this.h[0],A=this.h[1],x=this.h[2],k=this.h[3],M=this.h[4],I=this.h[5],T=this.h[6],B=this.h[7],C=this.h[8],P=this.h[9],O=this.r[0],R=this.r[1],j=this.r[2],U=this.r[3],L=this.r[4],N=this.r[5],D=this.r[6],z=this.r[7],F=this.r[8],q=this.r[9];r>=16;)E+=8191&(n=255&e[t+0]|(255&e[t+1])<<8),A+=8191&(n>>>13|(i=255&e[t+2]|(255&e[t+3])<<8)<<3),x+=8191&(i>>>10|(u=255&e[t+4]|(255&e[t+5])<<8)<<6),k+=8191&(u>>>7|(a=255&e[t+6]|(255&e[t+7])<<8)<<9),M+=8191&(a>>>4|(o=255&e[t+8]|(255&e[t+9])<<8)<<12),I+=o>>>1&8191,T+=8191&(o>>>14|(d=255&e[t+10]|(255&e[t+11])<<8)<<2),B+=8191&(d>>>11|(f=255&e[t+12]|(255&e[t+13])<<8)<<5),s=255&e[t+14]|(255&e[t+15])<<8,h=c=0,h+=E*O,h+=A*(5*q),h+=x*(5*F),h+=k*(5*z),c=(h+=M*(5*D))>>>13,h&=8191,h+=I*(5*N),h+=T*(5*L),h+=B*(5*U),h+=(C+=8191&(f>>>8|s<<8))*(5*j),l=c+=(h+=(P+=s>>>5|S)*(5*R))>>>13,l+=E*R,l+=A*O,l+=x*(5*q),l+=k*(5*F),c=(l+=M*(5*z))>>>13,l&=8191,l+=I*(5*D),l+=T*(5*N),l+=B*(5*L),l+=C*(5*U),c+=(l+=P*(5*j))>>>13,l&=8191,p=c,p+=E*j,p+=A*R,p+=x*O,p+=k*(5*q),c=(p+=M*(5*F))>>>13,p&=8191,p+=I*(5*z),p+=T*(5*D),p+=B*(5*N),p+=C*(5*L),b=c+=(p+=P*(5*U))>>>13,b+=E*U,b+=A*j,b+=x*R,b+=k*O,c=(b+=M*(5*q))>>>13,b&=8191,b+=I*(5*F),b+=T*(5*z),b+=B*(5*D),b+=C*(5*N),y=c+=(b+=P*(5*L))>>>13,y+=E*L,y+=A*U,y+=x*j,y+=k*R,c=(y+=M*O)>>>13,y&=8191,y+=I*(5*q),y+=T*(5*F),y+=B*(5*z),y+=C*(5*D),m=c+=(y+=P*(5*N))>>>13,m+=E*N,m+=A*L,m+=x*U,m+=k*j,c=(m+=M*R)>>>13,m&=8191,m+=I*O,m+=T*(5*q),m+=B*(5*F),m+=C*(5*z),g=c+=(m+=P*(5*D))>>>13,g+=E*D,g+=A*N,g+=x*L,g+=k*U,c=(g+=M*j)>>>13,g&=8191,g+=I*R,g+=T*O,g+=B*(5*q),g+=C*(5*F),v=c+=(g+=P*(5*z))>>>13,v+=E*z,v+=A*D,v+=x*N,v+=k*L,c=(v+=M*U)>>>13,v&=8191,v+=I*j,v+=T*R,v+=B*O,v+=C*(5*q),_=c+=(v+=P*(5*F))>>>13,_+=E*F,_+=A*z,_+=x*D,_+=k*N,c=(_+=M*L)>>>13,_&=8191,_+=I*U,_+=T*j,_+=B*R,_+=C*O,w=c+=(_+=P*(5*q))>>>13,w+=E*q,w+=A*F,w+=x*z,w+=k*D,c=(w+=M*N)>>>13,w&=8191,w+=I*L,w+=T*U,w+=B*j,w+=C*R,E=h=8191&(c=(c=((c+=(w+=P*O)>>>13)<<2)+c|0)+(h&=8191)|0),A=l+=c>>>=13,x=p&=8191,k=b&=8191,M=y&=8191,I=m&=8191,T=g&=8191,B=v&=8191,C=_&=8191,P=w&=8191,t+=16,r-=16;this.h[0]=E,this.h[1]=A,this.h[2]=x,this.h[3]=k,this.h[4]=M,this.h[5]=I,this.h[6]=T,this.h[7]=B,this.h[8]=C,this.h[9]=P},x.prototype.finish=function(e,t){var r,n,i,u,a=new Uint16Array(10);if(this.leftover){for(u=this.leftover,this.buffer[u++]=1;u<16;u++)this.buffer[u]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(r=this.h[1]>>>13,this.h[1]&=8191,u=2;u<10;u++)this.h[u]+=r,r=this.h[u]>>>13,this.h[u]&=8191;for(this.h[0]+=5*r,r=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=r,r=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=r,a[0]=this.h[0]+5,r=a[0]>>>13,a[0]&=8191,u=1;u<10;u++)a[u]=this.h[u]+r,r=a[u]>>>13,a[u]&=8191;for(a[9]-=8192,n=(1^r)-1,u=0;u<10;u++)a[u]&=n;for(n=~n,u=0;u<10;u++)this.h[u]=this.h[u]&n|a[u];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),i=this.h[0]+this.pad[0],this.h[0]=65535&i,u=1;u<8;u++)i=(this.h[u]+this.pad[u]|0)+(i>>>16)|0,this.h[u]=65535&i;e[t+0]=this.h[0]>>>0&255,e[t+1]=this.h[0]>>>8&255,e[t+2]=this.h[1]>>>0&255,e[t+3]=this.h[1]>>>8&255,e[t+4]=this.h[2]>>>0&255,e[t+5]=this.h[2]>>>8&255,e[t+6]=this.h[3]>>>0&255,e[t+7]=this.h[3]>>>8&255,e[t+8]=this.h[4]>>>0&255,e[t+9]=this.h[4]>>>8&255,e[t+10]=this.h[5]>>>0&255,e[t+11]=this.h[5]>>>8&255,e[t+12]=this.h[6]>>>0&255,e[t+13]=this.h[6]>>>8&255,e[t+14]=this.h[7]>>>0&255,e[t+15]=this.h[7]>>>8&255},x.prototype.update=function(e,t,r){var n,i;if(this.leftover){for((i=16-this.leftover)>r&&(i=r),n=0;n<i;n++)this.buffer[this.leftover+n]=e[t+n];if(r-=i,t+=i,this.leftover+=i,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(r>=16&&(i=r-r%16,this.blocks(e,t,i),t+=i,r-=i),r){for(n=0;n<r;n++)this.buffer[this.leftover+n]=e[t+n];this.leftover+=r}};var J=I,G=T;var V=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function X(e,t,r,n){for(var i,u,a,o,d,f,s,c,h,l,p,b,y,m,g,v,_,w,S,E,A,x,k,M,I,T,B=new Int32Array(16),C=new Int32Array(16),P=e[0],O=e[1],R=e[2],j=e[3],U=e[4],L=e[5],N=e[6],D=e[7],z=t[0],F=t[1],q=t[2],K=t[3],Y=t[4],H=t[5],J=t[6],G=t[7],X=0;n>=128;){for(S=0;S<16;S++)E=8*S+X,B[S]=r[E+0]<<24|r[E+1]<<16|r[E+2]<<8|r[E+3],C[S]=r[E+4]<<24|r[E+5]<<16|r[E+6]<<8|r[E+7];for(S=0;S<80;S++)if(i=P,u=O,a=R,o=j,d=U,f=L,s=N,c=D,h=z,l=F,p=q,b=K,y=Y,m=H,g=J,v=G,k=65535&(x=G),M=x>>>16,I=65535&(A=D),T=A>>>16,k+=65535&(x=(Y>>>14|U<<18)^(Y>>>18|U<<14)^(U>>>9|Y<<23)),M+=x>>>16,I+=65535&(A=(U>>>14|Y<<18)^(U>>>18|Y<<14)^(Y>>>9|U<<23)),T+=A>>>16,k+=65535&(x=Y&H^~Y&J),M+=x>>>16,I+=65535&(A=U&L^~U&N),T+=A>>>16,A=V[2*S],k+=65535&(x=V[2*S+1]),M+=x>>>16,I+=65535&A,T+=A>>>16,A=B[S%16],M+=(x=C[S%16])>>>16,I+=65535&A,T+=A>>>16,I+=(M+=(k+=65535&x)>>>16)>>>16,k=65535&(x=w=65535&k|M<<16),M=x>>>16,I=65535&(A=_=65535&I|(T+=I>>>16)<<16),T=A>>>16,k+=65535&(x=(z>>>28|P<<4)^(P>>>2|z<<30)^(P>>>7|z<<25)),M+=x>>>16,I+=65535&(A=(P>>>28|z<<4)^(z>>>2|P<<30)^(z>>>7|P<<25)),T+=A>>>16,M+=(x=z&F^z&q^F&q)>>>16,I+=65535&(A=P&O^P&R^O&R),T+=A>>>16,c=65535&(I+=(M+=(k+=65535&x)>>>16)>>>16)|(T+=I>>>16)<<16,v=65535&k|M<<16,k=65535&(x=b),M=x>>>16,I=65535&(A=o),T=A>>>16,M+=(x=w)>>>16,I+=65535&(A=_),T+=A>>>16,O=i,R=u,j=a,U=o=65535&(I+=(M+=(k+=65535&x)>>>16)>>>16)|(T+=I>>>16)<<16,L=d,N=f,D=s,P=c,F=h,q=l,K=p,Y=b=65535&k|M<<16,H=y,J=m,G=g,z=v,S%16==15)for(E=0;E<16;E++)A=B[E],k=65535&(x=C[E]),M=x>>>16,I=65535&A,T=A>>>16,A=B[(E+9)%16],k+=65535&(x=C[(E+9)%16]),M+=x>>>16,I+=65535&A,T+=A>>>16,_=B[(E+1)%16],k+=65535&(x=((w=C[(E+1)%16])>>>1|_<<31)^(w>>>8|_<<24)^(w>>>7|_<<25)),M+=x>>>16,I+=65535&(A=(_>>>1|w<<31)^(_>>>8|w<<24)^_>>>7),T+=A>>>16,_=B[(E+14)%16],M+=(x=((w=C[(E+14)%16])>>>19|_<<13)^(_>>>29|w<<3)^(w>>>6|_<<26))>>>16,I+=65535&(A=(_>>>19|w<<13)^(w>>>29|_<<3)^_>>>6),T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,B[E]=65535&I|T<<16,C[E]=65535&k|M<<16;k=65535&(x=z),M=x>>>16,I=65535&(A=P),T=A>>>16,A=e[0],M+=(x=t[0])>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[0]=P=65535&I|T<<16,t[0]=z=65535&k|M<<16,k=65535&(x=F),M=x>>>16,I=65535&(A=O),T=A>>>16,A=e[1],M+=(x=t[1])>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[1]=O=65535&I|T<<16,t[1]=F=65535&k|M<<16,k=65535&(x=q),M=x>>>16,I=65535&(A=R),T=A>>>16,A=e[2],M+=(x=t[2])>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[2]=R=65535&I|T<<16,t[2]=q=65535&k|M<<16,k=65535&(x=K),M=x>>>16,I=65535&(A=j),T=A>>>16,A=e[3],M+=(x=t[3])>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[3]=j=65535&I|T<<16,t[3]=K=65535&k|M<<16,k=65535&(x=Y),M=x>>>16,I=65535&(A=U),T=A>>>16,A=e[4],M+=(x=t[4])>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[4]=U=65535&I|T<<16,t[4]=Y=65535&k|M<<16,k=65535&(x=H),M=x>>>16,I=65535&(A=L),T=A>>>16,A=e[5],M+=(x=t[5])>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[5]=L=65535&I|T<<16,t[5]=H=65535&k|M<<16,k=65535&(x=J),M=x>>>16,I=65535&(A=N),T=A>>>16,A=e[6],M+=(x=t[6])>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[6]=N=65535&I|T<<16,t[6]=J=65535&k|M<<16,k=65535&(x=G),M=x>>>16,I=65535&(A=D),T=A>>>16,A=e[7],M+=(x=t[7])>>>16,I+=65535&A,T+=A>>>16,T+=(I+=(M+=(k+=65535&x)>>>16)>>>16)>>>16,e[7]=D=65535&I|T<<16,t[7]=G=65535&k|M<<16,X+=128,n-=128}return n}function W(e,t,r){var n,i=new Int32Array(8),u=new Int32Array(8),a=new Uint8Array(256),o=r;for(i[0]=1779033703,i[1]=3144134277,i[2]=1013904242,i[3]=2773480762,i[4]=1359893119,i[5]=2600822924,i[6]=528734635,i[7]=1541459225,u[0]=4089235720,u[1]=2227873595,u[2]=4271175723,u[3]=1595750129,u[4]=2917565137,u[5]=725511199,u[6]=4215389547,u[7]=327033209,X(i,u,t,r),r%=128,n=0;n<r;n++)a[n]=t[o-r+n];for(a[r]=128,a[(r=256-128*(r<112?1:0))-9]=0,p(a,r-8,o/536870912|0,o<<3),X(i,u,a,r),n=0;n<8;n++)p(e,8*n,i[n],u[n]);return 0}function Z(e,r){var n=t(),i=t(),u=t(),a=t(),o=t(),d=t(),f=t(),c=t(),h=t();N(n,e[1],e[0]),N(h,r[1],r[0]),D(n,n,h),L(i,e[0],e[1]),L(h,r[0],r[1]),D(i,i,h),D(u,e[3],r[3]),D(u,u,s),D(a,e[2],r[2]),L(a,a,a),N(o,i,n),N(d,a,u),L(f,a,u),L(c,i,n),D(e[0],o,d),D(e[1],c,f),D(e[2],f,d),D(e[3],o,c)}function $(e,t,r){var n;for(n=0;n<4;n++)P(e[n],t[n],r)}function Q(e,r){var n=t(),i=t(),u=t();F(u,r[2]),D(n,r[0],u),D(i,r[1],u),O(e,i),e[31]^=j(n)<<7}function ee(e,t,r){var n,i;for(B(e[0],a),B(e[1],o),B(e[2],o),B(e[3],a),i=255;i>=0;--i)$(e,t,n=r[i/8|0]>>(7&i)&1),Z(t,e),Z(e,e),$(e,t,n)}function te(e,r){var n=[t(),t(),t(),t()];B(n[0],c),B(n[1],h),B(n[2],o),D(n[3],c,h),ee(e,n,r)}function re(e,r,i){var u,a=new Uint8Array(64),o=[t(),t(),t(),t()];for(i||n(r,32),W(a,r,32),a[0]&=248,a[31]&=127,a[31]|=64,te(o,a),Q(e,o),u=0;u<32;u++)r[u+32]=e[u];return 0}var ne=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function ie(e,t){var r,n,i,u;for(n=63;n>=32;--n){for(r=0,i=n-32,u=n-12;i<u;++i)t[i]+=r-16*t[n]*ne[i-(n-32)],r=t[i]+128>>8,t[i]-=256*r;t[i]+=r,t[n]=0}for(r=0,i=0;i<32;i++)t[i]+=r-(t[31]>>4)*ne[i],r=t[i]>>8,t[i]&=255;for(i=0;i<32;i++)t[i]-=r*ne[i];for(n=0;n<32;n++)t[n+1]+=t[n]>>8,e[n]=255&t[n]}function ue(e){var t,r=new Float64Array(64);for(t=0;t<64;t++)r[t]=e[t];for(t=0;t<64;t++)e[t]=0;ie(e,r)}function ae(e,r,n,i){var u,a,o=new Uint8Array(64),d=new Uint8Array(64),f=new Uint8Array(64),s=new Float64Array(64),c=[t(),t(),t(),t()];W(o,i,32),o[0]&=248,o[31]&=127,o[31]|=64;var h=n+64;for(u=0;u<n;u++)e[64+u]=r[u];for(u=0;u<32;u++)e[32+u]=o[32+u];for(W(f,e.subarray(32),n+32),ue(f),te(c,f),Q(e,c),u=32;u<64;u++)e[u]=i[u];for(W(d,e,n+64),ue(d),u=0;u<64;u++)s[u]=0;for(u=0;u<32;u++)s[u]=f[u];for(u=0;u<32;u++)for(a=0;a<32;a++)s[u+a]+=d[u]*o[a];return ie(e.subarray(32),s),h}function oe(e,r){var n=t(),i=t(),u=t(),d=t(),s=t(),c=t(),h=t();return B(e[2],o),U(e[1],r),z(u,e[1]),D(d,u,f),N(u,u,e[2]),L(d,e[2],d),z(s,d),z(c,s),D(h,c,s),D(n,h,u),D(n,n,d),function(e,r){var n,i=t();for(n=0;n<16;n++)i[n]=r[n];for(n=250;n>=0;n--)z(i,i),1!==n&&D(i,i,r);for(n=0;n<16;n++)e[n]=i[n]}(n,n),D(n,n,u),D(n,n,d),D(n,n,d),D(e[0],n,d),z(i,e[0]),D(i,i,d),R(i,u)&&D(e[0],e[0],l),z(i,e[0]),D(i,i,d),R(i,u)?-1:(j(e[0])===r[31]>>7&&N(e[0],a,e[0]),D(e[3],e[0],e[1]),0)}function de(e,r,n,i){var u,a=new Uint8Array(32),o=new Uint8Array(64),d=[t(),t(),t(),t()],f=[t(),t(),t(),t()];if(-1,n<64)return-1;if(oe(f,i))return-1;for(u=0;u<n;u++)e[u]=r[u];for(u=0;u<32;u++)e[u+32]=i[u];if(W(o,e,n),ue(o),ee(d,f,o),te(f,r.subarray(32)),Z(d,f),Q(a,d),n-=64,m(r,0,a,0)){for(u=0;u<n;u++)e[u]=0;return-1}for(u=0;u<n;u++)e[u]=r[u+64];return n}var fe=32,se=24,ce=32,he=32,le=se;function pe(e,t){if(e.length!==fe)throw new Error("bad key size");if(t.length!==se)throw new Error("bad nonce size")}function be(){for(var e=0;e<arguments.length;e++)if(!(arguments[e]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function ye(e){for(var t=0;t<e.length;t++)e[t]=0}e.lowlevel={crypto_core_hsalsa20:v,crypto_stream_xor:A,crypto_stream:E,crypto_stream_salsa20_xor:w,crypto_stream_salsa20:S,crypto_onetimeauth:k,crypto_onetimeauth_verify:M,crypto_verify_16:y,crypto_verify_32:m,crypto_secretbox:I,crypto_secretbox_open:T,crypto_scalarmult:q,crypto_scalarmult_base:K,crypto_box_beforenm:H,crypto_box_afternm:J,crypto_box:function(e,t,r,n,i,u){var a=new Uint8Array(32);return H(a,i,u),J(e,t,r,n,a)},crypto_box_open:function(e,t,r,n,i,u){var a=new Uint8Array(32);return H(a,i,u),G(e,t,r,n,a)},crypto_box_keypair:Y,crypto_hash:W,crypto_sign:ae,crypto_sign_keypair:re,crypto_sign_open:de,crypto_secretbox_KEYBYTES:fe,crypto_secretbox_NONCEBYTES:se,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:16,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:ce,crypto_box_SECRETKEYBYTES:he,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:le,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:64,crypto_sign_PUBLICKEYBYTES:32,crypto_sign_SECRETKEYBYTES:64,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64},e.randomBytes=function(e){var t=new Uint8Array(e);return n(t,e),t},e.secretbox=function(e,t,r){be(e,t,r),pe(r,t);for(var n=new Uint8Array(32+e.length),i=new Uint8Array(n.length),u=0;u<e.length;u++)n[u+32]=e[u];return I(i,n,n.length,t,r),i.subarray(16)},e.secretbox.open=function(e,t,r){be(e,t,r),pe(r,t);for(var n=new Uint8Array(16+e.length),i=new Uint8Array(n.length),u=0;u<e.length;u++)n[u+16]=e[u];return n.length<32?null:0!==T(i,n,n.length,t,r)?null:i.subarray(32)},e.secretbox.keyLength=fe,e.secretbox.nonceLength=se,e.secretbox.overheadLength=16,e.scalarMult=function(e,t){if(be(e,t),32!==e.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var r=new Uint8Array(32);return q(r,e,t),r},e.scalarMult.base=function(e){if(be(e),32!==e.length)throw new Error("bad n size");var t=new Uint8Array(32);return K(t,e),t},e.scalarMult.scalarLength=32,e.scalarMult.groupElementLength=32,e.box=function(t,r,n,i){var u=e.box.before(n,i);return e.secretbox(t,r,u)},e.box.before=function(e,t){be(e,t),function(e,t){if(e.length!==ce)throw new Error("bad public key size");if(t.length!==he)throw new Error("bad secret key size")}(e,t);var r=new Uint8Array(32);return H(r,e,t),r},e.box.after=e.secretbox,e.box.open=function(t,r,n,i){var u=e.box.before(n,i);return e.secretbox.open(t,r,u)},e.box.open.after=e.secretbox.open,e.box.keyPair=function(){var e=new Uint8Array(ce),t=new Uint8Array(he);return Y(e,t),{publicKey:e,secretKey:t}},e.box.keyPair.fromSecretKey=function(e){if(be(e),e.length!==he)throw new Error("bad secret key size");var t=new Uint8Array(ce);return K(t,e),{publicKey:t,secretKey:new Uint8Array(e)}},e.box.publicKeyLength=ce,e.box.secretKeyLength=he,e.box.sharedKeyLength=32,e.box.nonceLength=le,e.box.overheadLength=e.secretbox.overheadLength,e.sign=function(e,t){if(be(e,t),64!==t.length)throw new Error("bad secret key size");var r=new Uint8Array(64+e.length);return ae(r,e,e.length,t),r},e.sign.open=function(e,t){if(be(e,t),32!==t.length)throw new Error("bad public key size");var r=new Uint8Array(e.length),n=de(r,e,e.length,t);if(n<0)return null;for(var i=new Uint8Array(n),u=0;u<i.length;u++)i[u]=r[u];return i},e.sign.detached=function(t,r){for(var n=e.sign(t,r),i=new Uint8Array(64),u=0;u<i.length;u++)i[u]=n[u];return i},e.sign.detached.verify=function(e,t,r){if(be(e,t,r),64!==t.length)throw new Error("bad signature size");if(32!==r.length)throw new Error("bad public key size");var n,i=new Uint8Array(64+e.length),u=new Uint8Array(64+e.length);for(n=0;n<64;n++)i[n]=t[n];for(n=0;n<e.length;n++)i[n+64]=e[n];return de(u,i,i.length,r)>=0},e.sign.keyPair=function(){var e=new Uint8Array(32),t=new Uint8Array(64);return re(e,t),{publicKey:e,secretKey:t}},e.sign.keyPair.fromSecretKey=function(e){if(be(e),64!==e.length)throw new Error("bad secret key size");for(var t=new Uint8Array(32),r=0;r<t.length;r++)t[r]=e[32+r];return{publicKey:t,secretKey:new Uint8Array(e)}},e.sign.keyPair.fromSeed=function(e){if(be(e),32!==e.length)throw new Error("bad seed size");for(var t=new Uint8Array(32),r=new Uint8Array(64),n=0;n<32;n++)r[n]=e[n];return re(t,r,!0),{publicKey:t,secretKey:r}},e.sign.publicKeyLength=32,e.sign.secretKeyLength=64,e.sign.seedLength=32,e.sign.signatureLength=64,e.hash=function(e){be(e);var t=new Uint8Array(64);return W(t,e,e.length),t},e.hash.hashLength=64,e.verify=function(e,t){return be(e,t),0!==e.length&&0!==t.length&&(e.length===t.length&&0===b(e,0,t,0,e.length))},e.setPRNG=function(e){n=e},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(t&&t.getRandomValues){e.setPRNG(function(e,r){var n,i=new Uint8Array(r);for(n=0;n<r;n+=65536)t.getRandomValues(i.subarray(n,n+Math.min(r-n,65536)));for(n=0;n<r;n++)e[n]=i[n];ye(i)})}else(t=r(78))&&t.randomBytes&&e.setPRNG(function(e,r){var n,i=t.randomBytes(r);for(n=0;n<r;n++)e[n]=i[n];ye(i)})}()}(void 0!==e&&e.exports?e.exports:self.nacl=self.nacl||{})},function(e,t){var r={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t){t.read=function(e,t,r,n,i){var u,a,o=8*i-n-1,d=(1<<o)-1,f=d>>1,s=-7,c=r?i-1:0,h=r?-1:1,l=e[t+c];for(c+=h,u=l&(1<<-s)-1,l>>=-s,s+=o;s>0;u=256*u+e[t+c],c+=h,s-=8);for(a=u&(1<<-s)-1,u>>=-s,s+=n;s>0;a=256*a+e[t+c],c+=h,s-=8);if(0===u)u=1-f;else{if(u===d)return a?NaN:1/0*(l?-1:1);a+=Math.pow(2,n),u-=f}return(l?-1:1)*a*Math.pow(2,u-n)},t.write=function(e,t,r,n,i,u){var a,o,d,f=8*u-i-1,s=(1<<f)-1,c=s>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:u-1,p=n?1:-1,b=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,a=s):(a=Math.floor(Math.log(t)/Math.LN2),t*(d=Math.pow(2,-a))<1&&(a--,d*=2),(t+=a+c>=1?h/d:h*Math.pow(2,1-c))*d>=2&&(a++,d/=2),a+c>=s?(o=0,a=s):a+c>=1?(o=(t*d-1)*Math.pow(2,i),a+=c):(o=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;e[r+l]=255&o,l+=p,o/=256,i-=8);for(a=a<<i|o,f+=i;f>0;e[r+l]=255&a,l+=p,a/=256,f-=8);e[r+l-p]|=128*b}},function(e,t,r){"use strict";t.byteLength=function(e){var t=f(e),r=t[0],n=t[1];return 3*(r+n)/4-n},t.toByteArray=function(e){for(var t,r=f(e),n=r[0],a=r[1],o=new u(function(e,t,r){return 3*(t+r)/4-r}(0,n,a)),d=0,s=a>0?n-4:n,c=0;c<s;c+=4)t=i[e.charCodeAt(c)]<<18|i[e.charCodeAt(c+1)]<<12|i[e.charCodeAt(c+2)]<<6|i[e.charCodeAt(c+3)],o[d++]=t>>16&255,o[d++]=t>>8&255,o[d++]=255&t;2===a&&(t=i[e.charCodeAt(c)]<<2|i[e.charCodeAt(c+1)]>>4,o[d++]=255&t);1===a&&(t=i[e.charCodeAt(c)]<<10|i[e.charCodeAt(c+1)]<<4|i[e.charCodeAt(c+2)]>>2,o[d++]=t>>8&255,o[d++]=255&t);return o},t.fromByteArray=function(e){for(var t,r=e.length,i=r%3,u=[],a=0,o=r-i;a<o;a+=16383)u.push(c(e,a,a+16383>o?o:a+16383));1===i?(t=e[r-1],u.push(n[t>>2]+n[t<<4&63]+"==")):2===i&&(t=(e[r-2]<<8)+e[r-1],u.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"="));return u.join("")};for(var n=[],i=[],u="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,d=a.length;o<d;++o)n[o]=a[o],i[a.charCodeAt(o)]=o;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function s(e){return n[e>>18&63]+n[e>>12&63]+n[e>>6&63]+n[63&e]}function c(e,t,r){for(var n,i=[],u=t;u<r;u+=3)n=(e[u]<<16&16711680)+(e[u+1]<<8&65280)+(255&e[u+2]),i.push(s(n));return i.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(e,t,r){var n=r(2),i=n.Buffer;function u(e,t){for(var r in e)t[r]=e[r]}function a(e,t,r){return i(e,t,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?e.exports=n:(u(n,t),t.Buffer=a),u(i,a),a.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number");return i(e,t,r)},a.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number");var n=i(e);return void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},a.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return i(e)},a.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n.SlowBuffer(e)}},function(e,t,r){var n=r(83).Buffer;e.exports=function(e){for(var t={},r=e.length,i=e.charAt(0),u=0;u<e.length;u++){var a=e.charAt(u);if(void 0!==t[a])throw new TypeError(a+" is ambiguous");t[a]=u}function o(e){if("string"!=typeof e)throw new TypeError("Expected String");if(0===e.length)return n.allocUnsafe(0);for(var u=[0],a=0;a<e.length;a++){var o=t[e[a]];if(void 0===o)return;for(var d=0,f=o;d<u.length;++d)f+=u[d]*r,u[d]=255&f,f>>=8;for(;f>0;)u.push(255&f),f>>=8}for(var s=0;e[s]===i&&s<e.length-1;++s)u.push(0);return n.from(u.reverse())}return{encode:function(t){if(0===t.length)return"";for(var n=[0],u=0;u<t.length;++u){for(var a=0,o=t[u];a<n.length;++a)o+=n[a]<<8,n[a]=o%r,o=o/r|0;for(;o>0;)n.push(o%r),o=o/r|0}for(var d="",f=0;0===t[f]&&f<t.length-1;++f)d+=i;for(var s=n.length-1;s>=0;--s)d+=e[n[s]];return d},decodeUnsafe:o,decode:function(e){var t=o(e);if(t)return t;throw new Error("Non-base"+r+" character")}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e?i.default.sign.keyPair.fromSeed(e):i.default.sign.keyPair();this.publicKey=n.default.encode(t.publicKey),this.privateKey=n.default.encode(t.secretKey.slice(0,32))};var n=u(r(3)),i=u(r(79));function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ccJsonify=t.ccJsonLoad=t.Transaction=t.Connection=t.Ed25519Keypair=void 0;var n=d(r(85)),i=d(r(77)),u=d(r(29)),a=d(r(19)),o=d(r(9));function d(e){return e&&e.__esModule?e:{default:e}}t.Ed25519Keypair=n.default,t.Connection=i.default,t.Transaction=u.default,t.ccJsonLoad=a.default,t.ccJsonify=o.default},function(e,t,r){e.exports=r(86)}]);

},{}],3:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

},{}]},{},[1]);
