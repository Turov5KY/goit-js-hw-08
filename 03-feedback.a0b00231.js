!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var i,o,u,a,l,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,s=t,a=e.apply(r,n)}function O(e){return s=e,l=setTimeout(w,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=u}function w(){var e=p();if(h(e))return S(e);l=setTimeout(w,function(e){var n=t-(e-f);return m?g(n,u-(e-s)):n}(e))}function S(e){return l=void 0,d&&i?b(e):(i=o=void 0,a)}function T(){var e=p(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return O(f);if(m)return l=setTimeout(w,t),b(f)}return void 0===l&&(l=setTimeout(w,t)),a}return t=j(t)||0,y(n)&&(c=!!n.leading,u=(m="maxWait"in n)?v(j(n.maxWait)||0,t):u,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=o=l=void 0},T.flush=function(){return void 0===l?a:S(p())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var O="feedback-form-state",h=document.querySelector(".feedback-form"),w={};h.addEventListener("input",e(t)((function(e){e.preventDefault(),w.email=h.elements.email.value,w.message=h.elements.message.value,localStorage.setItem(O,JSON.stringify(w))}),500)),h.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.elements.email.value.trim()||""===h.elements.message.value.trim())return void alert("All fields must be filled");w.email=h.elements.email.value,w.message=h.elements.message.value,console.log(w),localStorage.removeItem(O),h.reset()})),function(){var e=localStorage.getItem(O),t=JSON.parse(e);if(null===e)return;h.elements.email.value=t.email,h.elements.message.value=t.message}()}();
//# sourceMappingURL=03-feedback.a0b00231.js.map
