// ==UserScript==
// @name               DeepSeek Exporter
// @name:zh-CN         DeepSeek Exporter
// @name:zh-TW         DeepSeek Exporter
// @namespace          pionxzh
// @version            0.1.4
// @author             pionxzh
// @description        Export DeepSeek conversations with one click — including reasoning and sources.
// @description:zh-CN  一键导出 DeepSeek 对话，支持深度思考与搜索来源
// @description:zh-TW  一鍵匯出 DeepSeek 對話，支援深度思考與搜尋來源
// @license            MIT
// @icon               https://chat.deepseek.com/favicon.svg
// @match              https://chat.deepseek.com/*
// @exclude            https://chat.deepseek.com/sign_in*
// @require            https://cdn.jsdelivr.net/npm/jszip@3.9.1/dist/jszip.min.js
// @require            https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js
// @grant              GM_deleteValue
// @grant              GM_getValue
// @grant              GM_setValue
// @run-at             document-end
// ==/UserScript==

(function(jszip, html2canvas) {
	"use strict";
	var __create$1 = Object.create;
	var __defProp$16 = Object.defineProperty;
	var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames$1 = Object.getOwnPropertyNames;
	var __getProtoOf$1 = Object.getPrototypeOf;
	var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
	var __copyProps$1 = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames$1(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp$1.call(to, key) && key !== except) __defProp$16(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp$1.call(mod, "default") ? __defProp$16(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	jszip = __toESM$1(jszip);
	html2canvas = __toESM$1(html2canvas);
	var __create = Object.create;
	var __defProp$15 = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __esmMin = (fn, res, err) => () => {
		if (err) throw err[0];
		try {
			return fn && (res = fn(fn = 0)), res;
		} catch (e) {
			throw err = [e], e;
		}
	};
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp$15(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp$15(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp$15(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp$15(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp$15({}, "__esModule", { value: true }), mod);
	function m$3(n, l) {
		for (var u in l) n[u] = l[u];
		return n;
	}
	function b$3(n) {
		n && n.parentNode && n.parentNode.removeChild(n);
	}
	function k$2(l, u, t) {
		var i, r, o, e = {};
		for (o in u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
		if (arguments.length > 2 && (e.children = arguments.length > 3 ? n$3.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === e[o] && (e[o] = l.defaultProps[o]);
		return x$2(l, e, i, r, null);
	}
	function x$2(n, t, i, r, o) {
		var e = {
			type: n,
			props: t,
			key: i,
			ref: r,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: null == o ? ++u$5 : o,
			__i: -1,
			__u: 0
		};
		return null == o && null != l$5.vnode && l$5.vnode(e), e;
	}
	function M$2() {
		return { current: null };
	}
	function S(n) {
		return n.children;
	}
	function C$6(n, l) {
		this.props = n, this.context = l;
	}
	function $$1(n, l) {
		if (null == l) return n.__ ? $$1(n.__, n.__i + 1) : null;
		for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
		return "function" == typeof n.type ? $$1(n) : null;
	}
	function I$3(n) {
		if (n.__P && n.__d) {
			var u = n.__v, t = u.__e, i = [], r = [], o = m$3({}, u);
			o.__v = u.__v + 1, l$5.vnode && l$5.vnode(o), q$2(n.__P, o, u, n.__n, n.__P.namespaceURI, 32 & u.__u ? [t] : null, i, null == t ? $$1(u) : t, !!(32 & u.__u), r), o.__v = u.__v, o.__.__k[o.__i] = o, D$3(i, o, r), u.__e = u.__ = null, o.__e != t && P$4(o);
		}
	}
	function P$4(n) {
		if (null != (n = n.__) && null != n.__c) return n.__e = n.__c.base = null, n.__k.some(function(l) {
			if (null != l && null != l.__e) return n.__e = n.__c.base = l.__e;
		}), P$4(n);
	}
	function A$3(n) {
		(!n.__d && (n.__d = !0) && i$3.push(n) && !H$3.__r++ || r$4 != l$5.debounceRendering) && ((r$4 = l$5.debounceRendering) || o$6)(H$3);
	}
	function H$3() {
		try {
			for (var n, l = 1; i$3.length;) i$3.length > l && i$3.sort(e$4), n = i$3.shift(), l = i$3.length, I$3(n);
		} finally {
			i$3.length = H$3.__r = 0;
		}
	}
	function L$4(n, l, u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, _, g = t && t.__k || w$4, m = l.length;
		for (f = T$2(u, l, g, f, m), s = 0; s < m; s++) null != (p = u.__k[s]) && (h = -1 != p.__i && g[p.__i] || d$2, p.__i = s, _ = q$2(n, p, h, i, r, o, e, f, c, a), v = p.__e, p.ref && h.ref != p.ref && (h.ref && J$1(h.ref, null, p), a.push(p.ref, p.__c || v, p)), null == y && null != v && (y = v), 4 & p.__u ? (f = j$4(p, f, n), h.__e && (h.__e = null)) : "function" == typeof p.type && void 0 !== _ ? f = _ : v && (f = v.nextSibling), p.__u &= -7);
		return u.__e = y, f;
	}
	function T$2(n, l, u, t, i) {
		var r, o, e, f, c, a = u.length, s = a, h = 0;
		for (n.__k = new Array(i), r = 0; r < i; r++) null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? ("string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? o = n.__k[r] = x$2(null, o, null, null, null) : g$3(o) ? o = n.__k[r] = x$2(S, { children: o }, null, null, null) : void 0 === o.constructor && o.__b > 0 ? o = n.__k[r] = x$2(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : n.__k[r] = o, f = r + h, o.__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = O$1(o, u, f, s)) && (s--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > a ? h-- : i < a && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
		if (s) for (r = 0; r < a; r++) null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = $$1(e)), K$2(e, e));
		return t;
	}
	function j$4(n, l, u) {
		var t, i;
		if ("function" == typeof n.type) {
			for (t = n.__k, i = 0; t && i < t.length; i++) t[i] && (t[i].__ = n, l = j$4(t[i], l, u));
			return l;
		}
		n.__e != l && (l && n.type && !l.parentNode && (l = $$1(n)), l = u.insertBefore(n.__e, l || null));
		do
			l = l && l.nextSibling;
		while (null != l && 8 == l.nodeType);
		return l;
	}
	function F$3(n, l) {
		return l = l || [], null == n || "boolean" == typeof n || (g$3(n) ? n.some(function(n) {
			F$3(n, l);
		}) : l.push(n)), l;
	}
	function O$1(n, l, u, t) {
		var i, r, o, e = n.key, f = n.type, c = l[u], a = null != c && 0 == (2 & c.__u);
		if (null === c && null == e || a && e == c.key && f == c.type) return u;
		if (t > (a ? 1 : 0)) {
			for (i = u - 1, r = u + 1; i >= 0 || r < l.length;) if (null != (c = l[o = i >= 0 ? i-- : r++]) && 0 == (2 & c.__u) && e == c.key && f == c.type) return o;
		}
		return -1;
	}
	function z$2(n, l, u) {
		"-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || _$2.test(l) ? u : u + "px";
	}
	function N$2(n, l, u, t, i) {
		var r, o;
		n: if ("style" == l) if ("string" == typeof u) n.style.cssText = u;
		else {
			if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || z$2(n.style, l, "");
			if (u) for (l in u) t && u[l] == t[l] || z$2(n.style, l, u[l]);
		}
		else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace(s$6, "$1")), o = l.toLowerCase(), l = o in n || "onFocusOut" == l || "onFocusIn" == l ? o.slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u[a$5] = t[a$5] : (u[a$5] = h$2, n.addEventListener(l, r ? v$1 : p$4, r)) : n.removeEventListener(l, r ? v$1 : p$4, r);
		else {
			if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
				n[l] = null == u ? "" : u;
				break n;
			} catch (n) {}
			"function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
		}
	}
	function V$3(n) {
		return function(u) {
			if (this.l) {
				var t = this.l[u.type + n];
				if (null == u[c$3]) u[c$3] = h$2++;
				else if (u[c$3] < t[a$5]) return;
				return t(l$5.event ? l$5.event(u) : u);
			}
		};
	}
	function q$2(n, u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, d, _, k, x, M, I, P, A, H, T, j, F = u.type;
		if (void 0 !== u.constructor) return null;
		128 & t.__u && (c = !!(32 & t.__u), o = [f = u.__e = t.__e]), (s = l$5.__b) && s(u);
		n: if ("function" == typeof F) {
			h = e.length;
			try {
				if (x = u.props, M = F.prototype && F.prototype.render, I = (s = F.contextType) && i[s.__c], P = s ? I ? I.props.value : s.__ : i, t.__c ? k = (p = u.__c = t.__c).__ = p.__E : (M ? u.__c = p = new F(x, P) : (u.__c = p = new C$6(x, P), p.constructor = F, p.render = Q$1), I && I.sub(p), p.state || (p.state = {}), p.__n = i, v = p.__d = !0, p.__h = [], p._sb = []), M && null == p.__s && (p.__s = p.state), M && null != F.getDerivedStateFromProps && (p.__s == p.state && (p.__s = m$3({}, p.__s)), m$3(p.__s, F.getDerivedStateFromProps(x, p.__s))), y = p.props, d = p.state, p.__v = u, v) M && null == F.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), M && null != p.componentDidMount && p.__h.push(p.componentDidMount);
				else {
					if (M && null == F.getDerivedStateFromProps && x !== y && null != p.componentWillReceiveProps && p.componentWillReceiveProps(x, P), u.__v == t.__v || !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(x, p.__s, P)) {
						u.__v != t.__v && (p.props = x, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
							n && (n.__ = u);
						}), w$4.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && e.push(p), f = $$1(t);
						break n;
					}
					null != p.componentWillUpdate && p.componentWillUpdate(x, p.__s, P), M && null != p.componentDidUpdate && p.__h.push(function() {
						p.componentDidUpdate(y, d, _);
					});
				}
				if (p.context = P, p.props = x, p.__P = n, p.__e = !1, A = l$5.__r, H = 0, M) p.state = p.__s, p.__d = !1, A && A(u), s = p.render(p.props, p.state, p.context), w$4.push.apply(p.__h, p._sb), p._sb = [];
				else do
					p.__d = !1, A && A(u), s = p.render(p.props, p.state, p.context), p.state = p.__s;
				while (p.__d && ++H < 25);
				p.state = p.__s, null != p.getChildContext && (i = m$3(m$3({}, i), p.getChildContext())), M && !v && null != p.getSnapshotBeforeUpdate && (_ = p.getSnapshotBeforeUpdate(y, d)), T = null != s && s.type === S && null == s.key ? E$5(s.props.children) : s, f = L$4(n, g$3(T) ? T : [T], u, t, i, r, o, e, f, c, a), p.base = u.__e, u.__u &= -161, p.__h.length && e.push(p), k && (p.__E = p.__ = null);
			} catch (n) {
				if (e.length = h, u.__v = null, c || null != o) {
					if (n.then) {
						for (u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;) f = f.nextSibling;
						null != o && (o[o.indexOf(f)] = null), u.__e = f;
					} else if (null != o) for (j = o.length; j--;) b$3(o[j]);
				} else u.__e = t.__e;
				u.__k ??= t.__k || [], n.then || B$2(u), l$5.__e(n, u, t);
			}
		} else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = G$2(t.__e, u, t, i, r, o, e, c, a);
		return (s = l$5.diffed) && s(u), 128 & u.__u ? void 0 : f;
	}
	function B$2(n) {
		n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(B$2));
	}
	function D$3(n, u, t) {
		for (var i = 0; i < t.length; i++) J$1(t[i], t[++i], t[++i]);
		l$5.__c && l$5.__c(u, n), n.some(function(u) {
			try {
				n = u.__h, u.__h = [], n.some(function(n) {
					n.call(u);
				});
			} catch (n) {
				l$5.__e(n, u.__v);
			}
		});
	}
	function E$5(n) {
		return "object" != typeof n || null == n || n.__b > 0 ? n : g$3(n) ? n.map(E$5) : void 0 !== n.constructor ? null : m$3({}, n);
	}
	function G$2(u, t, i, r, o, e, f, c, a) {
		var s, h, p, v, y, w, _, m = i.props || d$2, k = t.props, x = t.type;
		if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
			for (s = 0; s < e.length; s++) if ((y = e[s]) && "setAttribute" in y == !!x && (x ? y.localName == x : 3 == y.nodeType)) {
				u = y, e[s] = null;
				break;
			}
		}
		if (null == u) {
			if (null == x) return document.createTextNode(k);
			u = document.createElementNS(o, x, k.is && k), c && (l$5.__m && l$5.__m(t, e), c = !1), e = null;
		}
		if (null == x) m === k || c && u.data == k || (u.data = k);
		else {
			if (e = "textarea" == x && null != k.defaultValue ? null : e && n$3.call(u.childNodes), !c && null != e) for (m = {}, s = 0; s < u.attributes.length; s++) m[(y = u.attributes[s]).name] = y.value;
			for (s in m) y = m[s], "dangerouslySetInnerHTML" == s ? p = y : "children" == s || s in k || "value" == s && "defaultValue" in k || "checked" == s && "defaultChecked" in k || N$2(u, s, null, y, o);
			for (s in k) y = k[s], "children" == s ? v = y : "dangerouslySetInnerHTML" == s ? h = y : "value" == s ? w = y : "checked" == s ? _ = y : c && "function" != typeof y || m[s] === y || N$2(u, s, y, m[s], o);
			if (h) c || p && (h.__html == p.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
			else if (p && (u.innerHTML = ""), L$4("template" == t.type ? u.content : u, g$3(v) ? v : [v], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $$1(i, 0), c, a), null != e) for (s = e.length; s--;) b$3(e[s]);
			c && "textarea" != x || (s = "value", "progress" == x && null == w ? u.removeAttribute("value") : null != w && (w !== u[s] || "progress" == x && !w || "option" == x && w != m[s]) && N$2(u, s, w, m[s], o), s = "checked", null != _ && _ != u[s] && N$2(u, s, _, m[s], o));
		}
		return u;
	}
	function J$1(n, u, t) {
		try {
			if ("function" == typeof n) {
				var i = "function" == typeof n.__u;
				i && n.__u(), i && null == u || (n.__u = n(u));
			} else n.current = u;
		} catch (n) {
			l$5.__e(n, t);
		}
	}
	function K$2(n, u, t) {
		var i, r;
		if (l$5.unmount && l$5.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || J$1(i, null, u)), null != (i = n.__c)) {
			if (i.componentWillUnmount) try {
				i.componentWillUnmount();
			} catch (n) {
				l$5.__e(n, u);
			}
			i.base = i.__P = i.__n = null;
		}
		if (i = n.__k) for (r = 0; r < i.length; r++) i[r] && K$2(i[r], u, t || "function" != typeof n.type);
		t || b$3(n.__e), n.__c = n.__ = n.__e = void 0;
	}
	function Q$1(n, l, u) {
		return this.constructor(n, u);
	}
	function R$1(u, t, i) {
		var r, o, e, f;
		t == document && (t = document.documentElement), l$5.__ && l$5.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], q$2(t, u = (!r && i || t).__k = k$2(S, null, [u]), o || d$2, d$2, t.namespaceURI, !r && i ? [i] : o ? null : t.firstChild ? n$3.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), D$3(e, u, f), u.props.children = null;
	}
	function U$3(n, l) {
		R$1(n, l, U$3);
	}
	function W$1(l, u, t) {
		var i, r, o, e, f = m$3({}, l.props);
		for (o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u) "key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = void 0 === u[o] && null != e ? e[o] : u[o];
		return arguments.length > 2 && (f.children = arguments.length > 3 ? n$3.call(arguments, 2) : t), x$2(l.type, f, i || l.key, r || l.ref, null);
	}
	function X$1(n) {
		function l(n) {
			var u, t;
			return this.getChildContext || (u = new Set(), (t = {})[l.__c] = this, this.getChildContext = function() {
				return t;
			}, this.componentWillUnmount = function() {
				u = null;
			}, this.shouldComponentUpdate = function(n) {
				this.props.value != n.value && u.forEach(function(n) {
					n.__e = !0, A$3(n);
				});
			}, this.sub = function(n) {
				u.add(n);
				var l = n.componentWillUnmount;
				n.componentWillUnmount = function() {
					u && u.delete(n), l && l.call(n);
				};
			}), n.children;
		}
		return l.__c = "__cC" + y$2++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
			return n.children(l);
		}).contextType = l, l;
	}
	var n$3;
	var l$5;
	var u$5;
	var i$3;
	var r$4;
	var o$6;
	var e$4;
	var f$5;
	var c$3;
	var a$5;
	var s$6;
	var h$2;
	var p$4;
	var v$1;
	var y$2;
	var d$2;
	var w$4;
	var _$2;
	var g$3;
	var init_preact_module = __esmMin((() => {
		d$2 = {};
		w$4 = [];
		_$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
		g$3 = Array.isArray;
		n$3 = w$4.slice, l$5 = { __e: function(n, l, u, t) {
			for (var i, r, o; l = l.__;) if ((i = l.__c) && !i.__) try {
				if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
			} catch (l) {
				n = l;
			}
			throw n;
		} }, u$5 = 0, C$6.prototype.setState = function(n, l) {
			var u = null != this.__s && this.__s != this.state ? this.__s : this.__s = m$3({}, this.state);
			"function" == typeof n && (n = n(m$3({}, u), this.props)), n && m$3(u, n), null != n && this.__v && (l && this._sb.push(l), A$3(this));
		}, C$6.prototype.forceUpdate = function(n) {
			this.__v && (this.__e = !0, n && this.__h.push(n), A$3(this));
		}, C$6.prototype.render = S, i$3 = [], o$6 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e$4 = function(n, l) {
			return n.__v.__b - l.__v.__b;
		}, H$3.__r = 0, f$5 = Math.random().toString(8), c$3 = "__d" + f$5, a$5 = "__a" + f$5, s$6 = /(PointerCapture)$|Capture$/i, h$2 = 0, p$4 = V$3(!1), v$1 = V$3(!0), y$2 = 0;
	}));
	init_preact_module();
	var package_default = {
		name: "@pionxzh/deepseek-exporter",
		type: "module",
		version: "0.1.4",
		"private": true,
		packageManager: "pnpm@11.21.0",
		title: "DeepSeek Exporter",
		"title:zh-CN": "DeepSeek Exporter",
		"title:zh-TW": "DeepSeek Exporter",
		description: "Export DeepSeek conversations with one click — including reasoning and sources.",
		"description:zh-CN": "一键导出 DeepSeek 对话，支持深度思考与搜索来源",
		"description:zh-TW": "一鍵匯出 DeepSeek 對話，支援深度思考與搜尋來源",
		author: "pionxzh",
		license: "MIT",
		engines: { "node": ">=22.13.0" },
		scripts: {
			"dev": "vite",
			"build": "vite build",
			"test": "tsc --noEmit && vitest run",
			"test:types": "tsc --noEmit",
			"lint": "eslint .",
			"lint:fix": "eslint . --fix"
		},
		dependencies: {
			"@headlessui/react": "^2.2.10",
			"@radix-ui/react-dialog": "^1.1.23",
			"hast-util-sanitize": "^5.0.2",
			"hast-util-to-html": "^9.0.5",
			"html2canvas": "^1.4.1",
			"i18next": "^26.3.6",
			"jszip": "3.9.1",
			"mdast-util-from-markdown": "^2.0.3",
			"mdast-util-gfm": "^3.1.0",
			"mdast-util-to-hast": "^13.2.1",
			"mdast-util-to-markdown": "^2.1.2",
			"micromark-extension-gfm": "^3.0.0",
			"mitt": "^3.0.1",
			"preact": "^10.29.8",
			"react": "^19.2.8",
			"react-dom": "^19.2.8",
			"react-i18next": "^17.0.11",
			"sanitize-filename": "^1.6.4"
		},
		devDependencies: {
			"@commitlint/cli": "^21.2.1",
			"@commitlint/config-conventional": "^21.2.0",
			"@eslint-react/eslint-plugin": "^1.53.1",
			"@pionxzh/eslint-config": "^2.0.2",
			"@preact/preset-vite": "^2.10.6",
			"@types/mdast": "^4.0.4",
			"@types/node": "^26.2.0",
			"@types/unist": "^3.0.3",
			"autoprefixer": "^10.5.4",
			"eslint": "^9.39.5",
			"eslint-plugin-react-hooks": "^4.6.2",
			"eslint-plugin-react-refresh": "^0.4.26",
			"husky": "^9.1.7",
			"lint-staged": "^17.3.0",
			"postcss": "^8.5.26",
			"tailwindcss": "^3.4.19",
			"typescript": "^5.9.3",
			"vite": "^8.2.1",
			"vite-plugin-monkey": "^8.1.0",
			"vitest": "^4.1.10"
		}
	};
	var style_default = ".Select {\n    padding: 0 2rem 0 0.5rem;\n    width: auto;\n    min-width: 7.5rem;\n    border: 1px solid #7b8492;\n    border-radius: 4px;\n    background-color: #fff;\n    box-shadow: none;\n    outline: none;\n}\n\n.dark .Select {\n    background-color: #2f2f2f;\n    color: #fff;\n    border-color: #747d8a;\n}\n\n.Select:focus-visible {\n    border-color: #4c89ff;\n    box-shadow: 0 0 0 2px rgba(76, 137, 255, 0.22);\n}\n\n:host {\n    all: initial;\n    z-index: 2147483000;\n    display: block;\n    --ce-menu-primary: #ffffff;\n    --ce-menu-secondary: #f1f4f9;\n    --ce-border-light: rgba(31, 35, 41, 0.16);\n    --ce-text-primary: #1f2329;\n    --ce-native-hover: color-mix(in srgb, var(--ce-text-primary) 7%, transparent);\n    --ce-native-active: color-mix(in srgb, var(--ce-text-primary) 11%, transparent);\n}\n\n:host([data-role=\"trigger\"][data-placement=\"floating\"]) {\n    position: fixed;\n    left: max(16px, env(safe-area-inset-left));\n    bottom: max(16px, env(safe-area-inset-bottom));\n}\n\n:host([data-role=\"trigger\"][data-placement=\"native\"]) {\n    position: relative;\n    z-index: 10;\n    display: block;\n    flex: 0 0 auto;\n    align-self: stretch;\n    width: auto;\n    min-width: 0;\n    margin: 4px 0 8px;\n}\n\n:host([data-role=\"portal\"]) {\n    position: fixed;\n    inset: 0;\n    z-index: 2147483001;\n    display: block;\n    pointer-events: none;\n}\n\n:host([data-role=\"portal\"]) :where(.ce-menu-panel, .ce-clickout-backdrop, .dropdown-backdrop, .DialogOverlay, .DialogContent) {\n    pointer-events: auto;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n    box-sizing: border-box;\n}\n\n:host h1,\n:host h2,\n:host h3,\n:host p,\n:host dl,\n:host dd,\n:host ul,\n:host ol {\n    margin: 0;\n}\n\n:host ul,\n:host ol {\n    padding: 0;\n    list-style: none;\n}\n\n.deepseek-exporter-shell {\n    color: var(--ce-text-primary);\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n    font-size: 16px;\n    line-height: 1.5;\n    text-align: left;\n}\n\n:host :where(button, input, select) {\n    font: inherit;\n    color: inherit;\n}\n\n:host :where(button) {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: none;\n    cursor: pointer;\n}\n\n:host .ce-nav-trigger {\n    min-width: 148px;\n    height: 42px;\n    margin: 0;\n    padding: 0 14px;\n    gap: 9px;\n    border: 1px solid rgba(76, 137, 255, 0.35);\n    border-radius: 12px;\n    background: var(--ce-menu-primary);\n    box-shadow: 0 8px 24px rgba(31, 35, 41, 0.16);\n}\n\n:host .ce-nav-trigger:hover {\n    background: var(--ce-menu-secondary);\n}\n\n:host([data-placement=\"native\"]) .ce-nav-trigger {\n    width: 100%;\n    min-width: 0;\n    height: 44px;\n    padding: 0 12px;\n    border: 0;\n    border-radius: 12px;\n    background: transparent;\n    box-shadow: none;\n    font-size: 14px;\n    transition: background-color 120ms ease;\n}\n\n:host([data-placement=\"native\"]) .ce-nav-trigger:hover {\n    background: var(--dsw-specific-sidebar-nav-item-hover, var(--ce-native-hover));\n}\n\n:host([data-placement=\"native\"]) .ce-nav-trigger:active {\n    background: var(--ce-native-active);\n}\n\n:host hr {\n    display: none;\n}\n\n@media (max-width: 767px) {\n    :host([data-role=\"trigger\"][data-placement=\"floating\"]) {\n        left: 12px;\n        bottom: 12px;\n    }\n\n}\n\n.dark {\n    --ce-text-primary: #eceff4;\n    --ce-menu-primary: #2A2A2A;\n    --ce-menu-secondary: #21242b;\n    --ce-border-light: rgba(255, 255, 255, .15);\n}\n\n.bg-menu {\n    background-color: var(--ce-menu-primary);\n}\n\n.border-menu {\n    border-color: var(--ce-border-light);\n}\n\n.menu-item {\n    height: 46px;\n    width: 100%;\n    min-width: 0;\n    padding: 0 12px;\n    justify-content: flex-start;\n    border: 1px solid var(--ce-border-light);\n    color: var(--ce-text-primary);\n    background: transparent;\n    text-align: left;\n}\n\n.ce-menu-item-copy {\n    display: flex;\n    min-width: 0;\n    flex: 1;\n    flex-direction: column;\n    line-height: 1.25;\n}\n\n.ce-menu-item-description {\n    overflow: hidden;\n    color: color-mix(in srgb, var(--ce-text-primary) 68%, transparent);\n    font-size: 12px;\n    line-height: 1.35;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.menu-item:hover:not([disabled]) {\n    background: var(--ce-menu-secondary);\n}\n\n/* Inside the dropdown panel, items read as a menu: no per-item borders,\n * hover background only. Bordered cards remain for standalone contexts\n * such as the JSON export dialog. */\n.ce-menu-panel .menu-item {\n    height: 42px;\n    border-color: transparent;\n}\n\n.ce-menu-divider {\n    height: 1px;\n    margin: 4px 10px;\n    background: var(--ce-border-light);\n}\n\n.menu-item[disabled] {\n    filter: brightness(0.5);\n    cursor: not-allowed;\n}\n\n.menu-item:focus-visible {\n    outline: 2px solid #4c89ff;\n    outline-offset: 2px;\n}\n\n/* `:host button` deliberately resets host-page button styles. Re-apply the\n * complete switch appearance here so the unchecked state cannot disappear. */\n:host .toggle-switch {\n    position: relative;\n    flex-shrink: 0;\n    width: 36px;\n    height: 22px;\n    border: 1px solid #8a94a3;\n    border-radius: 9999px;\n    background-color: #d8dde5;\n    box-shadow: inset 0 0 0 1px rgba(31, 35, 41, 0.05);\n    outline: none;\n    cursor: pointer;\n    transition: background-color 120ms ease, border-color 120ms ease, box-shadow 120ms ease;\n}\n\n:host .toggle-switch:hover {\n    background-color: #cbd2dc;\n}\n\n:host .toggle-switch:focus-visible {\n    border-color: #4c89ff;\n    box-shadow: 0 0 0 3px rgba(76, 137, 255, 0.25);\n}\n\n:host .toggle-switch[data-state=\"checked\"] {\n    border-color: #3978ed;\n    background-color: #4c89ff;\n}\n\n:host .toggle-switch-handle {\n    display: block;\n    width: 18px;\n    height: 18px;\n    border-radius: 9999px;\n    background-color: #fff;\n    box-shadow: 0 1px 3px rgba(31, 35, 41, 0.32);\n    transform: translateX(1px);\n    transition: transform 120ms ease;\n    will-change: transform;\n}\n\n:host .toggle-switch-handle[data-state=\"checked\"] {\n    transform: translateX(15px);\n}\n\n:host .dark .toggle-switch {\n    border-color: #747d8a;\n    background-color: #454b55;\n}\n\n:host .dark .toggle-switch:hover {\n    background-color: #535b67;\n}\n\n:host .dark .toggle-switch[data-state=\"checked\"] {\n    border-color: #4c89ff;\n    background-color: #4c89ff;\n}\n\n.ce-nav-trigger {\n    min-width: 0;\n    border: 0;\n    color: var(--ce-text-primary);\n}\n\n.ce-nav-trigger .ce-menu-item-text {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.ce-menu-root {\n    position: relative;\n}\n\n.ce-menu-panel {\n    position: fixed;\n    z-index: 2;\n    width: 268px;\n    max-height: calc(100vh - 32px);\n    overflow-y: auto;\n    border: 1px solid var(--ce-border-light);\n}\n\n.ce-clickout-backdrop {\n    position: fixed;\n    z-index: 1;\n    inset: 0;\n    background: transparent;\n}\n\n@media (max-width: 767px) {\n    .ce-menu-panel {\n        position: fixed;\n        left: 12px;\n        right: 12px;\n        bottom: 64px;\n        width: auto;\n        max-width: 316px;\n    }\n}\n\n.ce-card {\n    border-radius: 1rem;\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n\n.dark .ce-card {\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n\n.inputFieldSet {\n    display: block;\n    border-width: 2px;\n    border-style: groove;\n}\n\n.inputFieldSet legend {\n    margin-left: 4px;\n}\n\n.inputFieldSet input {\n    background-color: transparent;\n    box-shadow: none!important;\n}\n\n.row-half {\n    grid-column: auto / span 1;\n}\n\n.row-full {\n    grid-column: auto / span 2;\n}\n\n.dropdown-backdrop {\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0,0,0,.5);\n    animation-name: pointerFadeIn;\n    animation-duration: .3s;\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes slideUp {\n    from {\n        transform: translateY(100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n@keyframes pointerFadeIn {\n    from {\n        opacity: 0;\n        pointer-events: none;\n    }\n    to {\n        opacity: 1;\n        pointer-events: auto;\n    }\n}\n\n@keyframes rotate {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes circularDash {\n    0% {\n        stroke-dasharray: 1px, 200px;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 100px, 200px;\n        stroke-dashoffset: -15px;\n    }\n    100% {\n        stroke-dasharray: 100px, 200px;\n        stroke-dashoffset: -125px;\n    }\n}\n";
	var missing_tailwind_default = ".animate-fadeIn  {\n    animation: fadeIn .3s;\n}\n\n.animate-slideUp  {\n    animation: slideUp .3s;\n}\n\n.bg-blue-600 {\n    background-color: rgb(28 100 242);\n}\n\n.hover\\:bg-gray-500\\/10:hover {\n    background-color: hsla(0, 0%, 61%, .1)\n}\n\n.border-\\[\\#6f6e77\\] {\n    border-color: #6f6e77;\n}\n\n.cursor-help {\n    cursor: help;\n}\n\n.dark .dark\\:bg-white\\/5 {\n    background-color: rgb(255 255 255 / 5%);\n}\n\n.dark .dark\\:text-gray-200 {\n    color: rgb(229 231 235 / 1);\n}\n\n.dark .dark\\:text-gray-300 {\n    color: rgb(209 213 219 / 1);\n}\n\n.dark .dark\\:border-gray-\\[\\#86858d\\] {\n    border-color: #86858d;\n}\n\n.gap-x-1 {\n    -moz-column-gap: 0.25rem;\n         column-gap: 0.25rem;\n}\n\n.h-2\\.5 {\n    height: 0.625rem;\n}\n\n.h-4 {\n    height: 1rem;\n}\n\n.inline-flex {\n    display: inline-flex;\n}\n\n.items-center {\n    align-items: center;\n}\n\n.ml-3 {\n    margin-left: 0.75rem;\n}\n\n.ml-4 {\n    margin-left: 1rem;\n}\n\n.mr-8 {\n    margin-right: 2rem;\n}\n\n.pb-0 {\n    padding-bottom: 0;\n}\n\n.pr-8 {\n    padding-right: 2rem;\n}\n\n.right-4 {\n    right: 1rem;\n}\n\n.rounded-full {\n    border-radius: 9999px;\n}\n\n.select-all {\n    -webkit-user-select: all!important;\n       -moz-user-select: all!important;\n            user-select: all!important;\n}\n\n.shrink-0 {\n    flex-shrink: 0;\n}\n\n.space-y-6>:not([hidden])~:not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n\n.truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.whitespace-nowrap {\n    white-space: nowrap;\n}\n\n@media (min-width:768px) {\n    /* md */\n}\n\n@media (min-width:1024px) {\n    .lg\\:mt-0 {\n        margin-top: 0;\n    }\n\n    .lg\\:top-8 {\n        top: 2rem;\n    }\n}\n\n\n.toggle-switch {\n    position: relative;\n    outline: none;\n    background-color: rgb(229 231 235);\n    border: 1px solid rgb(107 114 128);\n    border-radius: 9999px;\n    cursor: pointer;\n    height: 20px;\n    width: 32px;\n}\n\n.dark .toggle-switch {\n    background-color: rgb(255 255 255 / 5%);\n    border-color: rgb(255 255 255 / 1);\n}\n\n.toggle-switch[data-state=\"checked\"] {\n    background-color: rgb(0 0 0);\n    border-color: rgb(0 0 0);\n}\n\n.dark .toggle-switch[data-state=\"checked\"] {\n    background-color: rgb(22 163 74);\n    border-color: rgb(22 163 74);\n}\n\n.toggle-switch-handle {\n    display: block;\n    background-color: rgb(255 255 255);\n    border-radius: 9999px;\n    height: 16px;\n    width: 16px;\n    transition: transform 0.1s;\n    will-change: transform;\n    transform: translateX(1px);\n}\n\n.toggle-switch-handle[data-state=\"checked\"] {\n    transform: translateX(14px);\n}\n\n.toggle-switch-handle:hover {\n    background-color: rgb(243 244 246);\n}\n\n.toggle-switch-label {\n    color: rgb(107 114 128);\n    margin-left: 0.75rem;\n    font-size: 0.875rem;\n    font-weight: 500;\n}\n\n.toggle-switch-label:hover {\n    color: rgb(71 85 105);\n}\n";
	var tailwind_default = ".visible {\n    visibility: visible\n}\n.static {\n    position: static\n}\n.fixed {\n    position: fixed\n}\n.absolute {\n    position: absolute\n}\n.relative {\n    position: relative\n}\n.sticky {\n    position: sticky\n}\n.right-4 {\n    right: 1rem\n}\n.m-0 {\n    margin: 0px\n}\n.mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem\n}\n.mb-1 {\n    margin-bottom: 0.25rem\n}\n.mb-3 {\n    margin-bottom: 0.75rem\n}\n.mb-4 {\n    margin-bottom: 1rem\n}\n.ml-2 {\n    margin-left: 0.5rem\n}\n.ml-auto {\n    margin-left: auto\n}\n.mt-1\\.5 {\n    margin-top: 0.375rem\n}\n.mt-2 {\n    margin-top: 0.5rem\n}\n.mt-3 {\n    margin-top: 0.75rem\n}\n.mt-4 {\n    margin-top: 1rem\n}\n.block {\n    display: block\n}\n.inline-block {\n    display: inline-block\n}\n.inline {\n    display: inline\n}\n.flex {\n    display: flex\n}\n.inline-flex {\n    display: inline-flex\n}\n.table {\n    display: table\n}\n.grid {\n    display: grid\n}\n.hidden {\n    display: none\n}\n.h-2 {\n    height: 0.5rem\n}\n.h-2\\.5 {\n    height: 0.625rem\n}\n.h-3 {\n    height: 0.75rem\n}\n.h-4 {\n    height: 1rem\n}\n.h-6 {\n    height: 1.5rem\n}\n.h-full {\n    height: 100%\n}\n.w-3 {\n    width: 0.75rem\n}\n.w-4 {\n    width: 1rem\n}\n.w-6 {\n    width: 1.5rem\n}\n.w-full {\n    width: 100%\n}\n.flex-shrink-0 {\n    flex-shrink: 0\n}\n.shrink-0 {\n    flex-shrink: 0\n}\n.flex-grow {\n    flex-grow: 1\n}\n.border-collapse {\n    border-collapse: collapse\n}\n.transform {\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n.cursor-help {\n    cursor: help\n}\n.cursor-pointer {\n    cursor: pointer\n}\n.select-all {\n    -webkit-user-select: all;\n       -moz-user-select: all;\n            user-select: all\n}\n.resize {\n    resize: both\n}\n.appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none\n}\n.grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr))\n}\n.flex-col {\n    flex-direction: column\n}\n.flex-wrap {\n    flex-wrap: wrap\n}\n.items-center {\n    align-items: center\n}\n.justify-center {\n    justify-content: center\n}\n.justify-between {\n    justify-content: space-between\n}\n.gap-1 {\n    gap: 0.25rem\n}\n.gap-2 {\n    gap: 0.5rem\n}\n.gap-3 {\n    gap: 0.75rem\n}\n.gap-4 {\n    gap: 1rem\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse))\n}\n.truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap\n}\n.whitespace-nowrap {\n    white-space: nowrap\n}\n.rounded {\n    border-radius: 0.25rem\n}\n.rounded-full {\n    border-radius: 9999px\n}\n.rounded-lg {\n    border-radius: 0.5rem\n}\n.rounded-md {\n    border-radius: 0.375rem\n}\n.border {\n    border-width: 1px\n}\n.border-b-\\[1px\\] {\n    border-bottom-width: 1px\n}\n.border-\\[\\#6f6e77\\] {\n    --tw-border-opacity: 1;\n    border-color: rgb(111 110 119 / var(--tw-border-opacity, 1))\n}\n.border-blue-400\\/70 {\n    border-color: rgb(96 165 250 / 0.7)\n}\n.bg-amber-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(245 158 11 / var(--tw-bg-opacity, 1))\n}\n.bg-black\\/5 {\n    background-color: rgb(0 0 0 / 0.05)\n}\n.bg-blue-50 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1))\n}\n.bg-blue-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1))\n}\n.bg-gray-200 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1))\n}\n.bg-white {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))\n}\n.p-1 {\n    padding: 0.25rem\n}\n.p-3 {\n    padding: 0.75rem\n}\n.p-4 {\n    padding: 1rem\n}\n.px-1 {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem\n}\n.px-1\\.5 {\n    padding-left: 0.375rem;\n    padding-right: 0.375rem\n}\n.py-0\\.5 {\n    padding-top: 0.125rem;\n    padding-bottom: 0.125rem\n}\n.py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem\n}\n.pb-3 {\n    padding-bottom: 0.75rem\n}\n.pr-8 {\n    padding-right: 2rem\n}\n.text-right {\n    text-align: right\n}\n.font-mono {\n    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace\n}\n.text-\\[0\\.8rem\\] {\n    font-size: 0.8rem\n}\n.text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem\n}\n.text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem\n}\n.font-bold {\n    font-weight: 700\n}\n.font-medium {\n    font-weight: 500\n}\n.font-normal {\n    font-weight: 400\n}\n.italic {\n    font-style: italic\n}\n.tabular-nums {\n    --tw-numeric-spacing: tabular-nums;\n    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)\n}\n.text-blue-950 {\n    --tw-text-opacity: 1;\n    color: rgb(23 37 84 / var(--tw-text-opacity, 1))\n}\n.text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity, 1))\n}\n.text-gray-500 {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity, 1))\n}\n.text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity, 1))\n}\n.text-gray-700 {\n    --tw-text-opacity: 1;\n    color: rgb(55 65 81 / var(--tw-text-opacity, 1))\n}\n.text-gray-800 {\n    --tw-text-opacity: 1;\n    color: rgb(31 41 55 / var(--tw-text-opacity, 1))\n}\n.text-red-600 {\n    --tw-text-opacity: 1;\n    color: rgb(220 38 38 / var(--tw-text-opacity, 1))\n}\n.underline {\n    text-decoration-line: underline\n}\n.filter {\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)\n}\n.transition {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\n}\n.transition-colors {\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\n}\n.transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\n}\n.duration-150 {\n    transition-duration: 150ms\n}\n.duration-200 {\n    transition-duration: 200ms\n}\n.ease-in-out {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n.hover\\:bg-gray-100:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1))\n}\n.dark\\:border-blue-500\\/60:is(.dark *) {\n    border-color: rgb(59 130 246 / 0.6)\n}\n.dark\\:border-gray-700:is(.dark *) {\n    --tw-border-opacity: 1;\n    border-color: rgb(55 65 81 / var(--tw-border-opacity, 1))\n}\n.dark\\:bg-blue-950\\/40:is(.dark *) {\n    background-color: rgb(23 37 84 / 0.4)\n}\n.dark\\:bg-gray-700:is(.dark *) {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1))\n}\n.dark\\:bg-white\\/10:is(.dark *) {\n    background-color: rgb(255 255 255 / 0.1)\n}\n.dark\\:bg-white\\/5:is(.dark *) {\n    background-color: rgb(255 255 255 / 0.05)\n}\n.dark\\:text-blue-100:is(.dark *) {\n    --tw-text-opacity: 1;\n    color: rgb(219 234 254 / var(--tw-text-opacity, 1))\n}\n.dark\\:text-gray-200:is(.dark *) {\n    --tw-text-opacity: 1;\n    color: rgb(229 231 235 / var(--tw-text-opacity, 1))\n}\n.dark\\:text-gray-300:is(.dark *) {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity, 1))\n}\n.dark\\:text-gray-400:is(.dark *) {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity, 1))\n}\n.dark\\:text-gray-500:is(.dark *) {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity, 1))\n}\n.dark\\:text-red-400:is(.dark *) {\n    --tw-text-opacity: 1;\n    color: rgb(248 113 113 / var(--tw-text-opacity, 1))\n}\n.dark\\:text-white:is(.dark *) {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity, 1))\n}\n.dark\\:hover\\:bg-gray-700:hover:is(.dark *) {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1))\n}\n";
	var CheckBox_default = ".CheckBoxLabel {\n    position: relative;\n    display: flex;\n    font-size: 16px;\n    vertical-align: middle;\n}\n\n.CheckBoxLabel * {\n    cursor: pointer;\n}\n\n.CheckBoxLabel[aria-disabled=\"true\"] {\n    opacity: 0.7;\n}\n\n.CheckBoxLabel[aria-disabled=\"true\"] * {\n    cursor: not-allowed;\n}\n\n.CheckBoxLabel input {\n    position: absolute;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n}\n\n.CheckBoxLabel .IconWrapper {\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    vertical-align: middle;\n    font-size: 1.5rem;\n}\n\n.CheckBoxLabel input:checked ~ svg {\n    color: rgb(28 100 242);\n}\n\n.dark .CheckBoxLabel input:checked ~ svg {\n    color: rgb(144, 202, 249);\n}\n\n.CheckBoxLabel .LabelText {\n    margin-left: 0.5rem;\n    font-size: 1rem;\n    line-height: 1.5;\n}\n";
	var Dialog_default = ".DialogOverlay {\n    background-color: rgba(15, 23, 42, 0.28);\n    backdrop-filter: blur(2px);\n    position: fixed;\n    inset: 0;\n    z-index: 1000;\n    animation: fadeIn 150ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.DialogContent {\n    background-color: rgba(245, 247, 250, 0.9);\n    backdrop-filter: blur(18px) saturate(140%);\n    border: 1px solid rgba(31, 35, 41, 0.16);\n    border-radius: 12px;\n    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 90vw;\n    max-width: 560px;\n    max-height: 85vh;\n    overflow: hidden;\n    padding: 16px 24px;\n    z-index: 1001;\n    outline: none;\n    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n.DialogContent._settings {\n    height: 85vh;\n    height: min(760px, 85dvh);\n}\n\n.JsonExportDialog {\n    width: min(420px, calc(100vw - 32px));\n}\n\n.JsonExportOption {\n    height: auto;\n    min-height: 58px;\n    padding-top: 9px;\n    padding-bottom: 9px;\n}\n\n.JsonExportOption > svg {\n    flex-shrink: 0;\n}\n\n.dark .DialogContent {\n    background-color: rgba(35, 38, 44, 0.9);\n    border-color: #40414f;\n    border-width: 1px;\n}\n\n.DialogContent._export {\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.dark .DialogContent._export {\n    background-color: rgba(35, 38, 44, 0.9);\n}\n\n.DialogContent .bg-white {\n    background-color: rgba(255, 255, 255, 0.85);\n    border: 1px solid rgba(31, 35, 41, 0.08);\n}\n\n.dark .DialogContent .bg-white {\n    background-color: rgba(255, 255, 255, 0.07);\n    border-color: rgba(255, 255, 255, 0.08);\n}\n\n.DialogContent input[type=\"checkbox\"] {\n    border: none;\n    outline: none;\n    box-shadow: none;\n}\n\n.DialogTitle {\n    margin: 0 0 16px 0;\n    font-weight: 500;\n    color: #1a1523;\n    font-size: 20px;\n    flex-shrink: 0;\n}\n\n.DialogBody {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding-right: 8px;\n    scrollbar-gutter: stable;\n    scrollbar-width: thin;\n    scrollbar-color: #9aa3af transparent;\n    overscroll-behavior: contain;\n    touch-action: pan-y;\n    -webkit-overflow-scrolling: touch;\n}\n\n.DialogBody::-webkit-scrollbar {\n    width: 8px;\n}\n\n.DialogBody::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n.DialogBody::-webkit-scrollbar-thumb {\n    border: 2px solid transparent;\n    border-radius: 9999px;\n    background: #9aa3af;\n    background-clip: padding-box;\n}\n\n.DialogBody::-webkit-scrollbar-thumb:hover {\n    background: #747d8a;\n    background-clip: padding-box;\n}\n\n.SettingsDialogFooter {\n    display: flex;\n    flex-shrink: 0;\n    justify-content: flex-end;\n    margin: 12px -24px -16px;\n    padding: 12px 24px 16px;\n    background-color: rgba(245, 247, 250, 0.96);\n    border-top: 1px solid rgba(31, 35, 41, 0.12);\n    box-shadow: 0 -8px 20px rgba(31, 35, 41, 0.06);\n}\n\n.dark .SettingsDialogFooter {\n    background-color: rgba(35, 38, 44, 0.96);\n    border-top-color: rgba(255, 255, 255, 0.12);\n    box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.18);\n}\n\n.dark .DialogTitle {\n    color: #fff;\n}\n\n.Button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    min-width: 76px;\n    padding: 0 18px;\n    font-size: 15px;\n    line-height: 1;\n    height: 38px;\n}\n/* Primary action: solid green. */\n.Button.green {\n    background-color: #1a8754;\n    color: #fff;\n}\n/* Destructive action: red outline so it reads as secondary next to the primary. */\n.Button.red {\n    background-color: transparent;\n    color: #c2313f;\n    border: 1px solid #e3919a;\n}\n.dark .Button.red {\n    color: #f28b95;\n    border-color: #8a4a51;\n}\n.Button.red:hover:not(:disabled) {\n    background-color: rgba(194, 49, 63, 0.08);\n}\n.Button.neutral {\n    background-color: transparent;\n    color: #6f6e77;\n    border: 1px solid #6f6e77;\n    font-size: 13px;\n    min-width: 0;\n    height: 26px;\n    padding: 0 8px;\n}\n.Button.green:hover:not(:disabled) {\n    background-color: #146c43;\n}\n.Button.neutral:hover {\n    background-color: rgba(111, 110, 119, 0.1);\n}\n.dark .Button.neutral {\n    color: #a0a0a8;\n    border-color: #a0a0a8;\n}\n.dark .Button.neutral:hover {\n    background-color: rgba(160, 160, 168, 0.1);\n}\n.Button:disabled {\n    opacity: 0.5;\n    color: #6f6e77;\n    background-color: #e0e0e0;\n    border-color: transparent;\n    cursor: not-allowed;\n}\n.Button:disabled:hover {\n    background-color: #e0e0e0;\n}\n\n.IconButton {\n    font-family: inherit;\n    border-radius: 100%;\n    height: 25px;\n    width: 25px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    color: #6f6e77;\n}\n.IconButton:hover {\n    background-color: rgba(0, 0, 0, 0.06);\n}\n\n.CloseButton {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.Fieldset {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    margin-bottom: 15px;\n}\n\n.Label {\n    font-size: 15px;\n    color: #1a1523;\n    min-width: 90px;\n    text-align: right;\n}\n\n.dark .Label {\n    color: #fff;\n}\n\n.Input {\n    width: 100%;\n    flex: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    padding: 0 10px;\n    font-size: 15px;\n    line-height: 1;\n    color: #000;\n    background-color: #fafafa;\n    border: 1px solid #7b8492;\n    box-shadow: none;\n    height: 35px;\n    outline: none;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    transition: border-color 120ms ease, box-shadow 120ms ease;\n}\n\n.Input:focus-visible {\n    border-color: #4c89ff;\n    box-shadow: 0 0 0 2px rgba(76, 137, 255, 0.22);\n}\n\n.dark .Input {\n    background-color: #2f2f2f;\n    color: #fff;\n    border-color: #747d8a;\n}\n\n.Description {\n    font-size: 13px;\n    color: #5a5865;\n    text-align: right;\n    margin-bottom: 4px;\n}\n\n.dark .Description {\n    color: #bcbcbc;\n}\n\n.SelectSearch {\n    width: 100%;\n    padding: 8px 16px;\n    border: 1px solid #6f6e77;\n    border-bottom: none;\n    border-radius: 4px 4px 0 0;\n    background-color: transparent;\n    color: inherit;\n    font-size: 14px;\n    outline: none;\n    flex-shrink: 0;\n}\n.SelectSearch::-moz-placeholder {\n    color: #9ca3af;\n}\n.SelectSearch::placeholder {\n    color: #9ca3af;\n}\n\n.SelectToolbar {\n    display: flex;\n    align-items: center;\n    padding: 12px 16px;\n    border-radius: 0;\n    border: 1px solid #6f6e77;\n    border-bottom: none;\n    flex-shrink: 0;\n}\n\n.ProjectSelect .Select {\n    width: auto;\n}\n\n.SelectList {\n    position: relative;\n    width: 100%;\n    flex: 1;\n    min-height: 120px;\n    padding: 12px 16px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    border: 1px solid #6f6e77;\n    border-radius: 0 0 4px 4px;\n    white-space: nowrap;\n}\n\n.SelectItem {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    overflow: hidden;\n}\n\n.SelectItem .CheckBoxLabel {\n    flex: 1;\n    min-width: 0;\n}\n\n.SelectItem .LabelText {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.SelectItem label, .SelectItem input {\n    cursor: pointer;\n}\n\n.SelectItem span {\n    vertical-align: middle;\n}\n\n.SelectItemMeta {\n    flex-shrink: 0;\n    font-size: 0.7rem;\n    color: #9ca3af;\n    white-space: nowrap;\n    font-variant-numeric: tabular-nums;\n    min-width: 6.5rem;\n    text-align: right;\n}\n.SelectItemMetaActive {\n    color: #6b7280;\n    font-weight: 600;\n}\n.dark {\n    .SelectItemMetaActive { color: #d1d5db; }\n}\n\n/* ── Sortable column header row ── */\n.SelectListHeader {\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    border: 1px solid #6f6e77;\n    border-bottom: none;\n    background: #f9fafb;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    flex-shrink: 0;\n}\n\n.dark {\n    .SelectListHeader { background: #1f2937; }\n}\n\n.SelectListHeaderCell {\n    flex-shrink: 0;\n    font-size: 0.68rem;\n    font-weight: 600;\n    color: #9ca3af;\n    letter-spacing: 0.03em;\n    text-transform: uppercase;\n    background: transparent;\n    border: none;\n    padding: 5px 4px;\n    cursor: pointer;\n    white-space: nowrap;\n    min-width: 6.5rem;\n    text-align: right;\n}\n.SelectListHeaderCell:hover { color: #374151; }\n.dark {\n    .SelectListHeaderCell:hover { color: #e5e7eb; }\n}\n.SelectListHeaderCellTitle {\n    flex: 1;\n    text-align: left;\n    padding-left: 28px; /* align with checkbox label */\n}\n.SelectListHeaderCellActive {\n    color: #2563eb;\n}\n.dark {\n    .SelectListHeaderCellActive { color: #60a5fa; }\n}\n\n\n@media (max-width: 480px) {\n    .DialogContent { max-height: 90vh; }\n    .SelectListHeaderCell:last-child { display: none; }\n    .SelectItemMeta:last-child { display: none; }\n    .ActionBar { justify-content: flex-end; }\n    .ActionBar > .Select { width: 100%; }\n    .ActionBar > .flex-grow { display: none; }\n}\n\n@keyframes contentShow {\n    from {\n        opacity: 0;\n        transform: translate(-50%, -48%) scale(0.96);\n    }\n    to {\n        opacity: 1;\n        transform: translate(-50%, -50%) scale(1);\n    }\n}\n";
	function s$5(n, t) {
		c$2.__h && c$2.__h(r$3, n, o$5 || t), o$5 = 0;
		var u = r$3.__H || (r$3.__H = {
			__: [],
			__h: []
		});
		return n >= u.__.length && u.__.push({}), u.__[n];
	}
	function d$1(n) {
		return o$5 = 1, y$1(D$2, n);
	}
	function y$1(n, u, i) {
		var o = s$5(t$4++, 2);
		if (o.t = n, !o.__c && (o.__ = [i ? i(u) : D$2(void 0, u), function(n) {
			var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
			t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
		}], o.__c = r$3, !r$3.__f)) {
			var f = function(n, t, r) {
				if (!o.__c.__H) return !0;
				var u = !1, i = o.__c.props !== n;
				if (o.__c.__H.__.some(function(n) {
					if (n.__N) {
						u = !0;
						var t = n.__[0];
						n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
					}
				}), c) {
					var f = c.call(this, n, t, r);
					return u ? f || i : f;
				}
				return !u || i;
			};
			r$3.__f = !0;
			var c = r$3.shouldComponentUpdate, e = r$3.componentWillUpdate;
			r$3.componentWillUpdate = function(n, t, r) {
				if (this.__e) {
					var u = c;
					c = void 0, f(n, t, r), c = u;
				}
				e && e.call(this, n, t, r);
			}, r$3.shouldComponentUpdate = f;
		}
		return o.__N || o.__;
	}
	function h$1(n, u) {
		var i = s$5(t$4++, 3);
		!c$2.__s && C$5(i.__H, u) && (i.__ = n, i.u = u, r$3.__H.__h.push(i));
	}
	function _$1(n, u) {
		var i = s$5(t$4++, 4);
		!c$2.__s && C$5(i.__H, u) && (i.__ = n, i.u = u, r$3.__h.push(i));
	}
	function A$2(n) {
		return o$5 = 5, T$1(function() {
			return { current: n };
		}, []);
	}
	function F$2(n, t, r) {
		o$5 = 6, _$1(function() {
			if ("function" == typeof n) {
				var r = n(t());
				return function() {
					n(null), r && "function" == typeof r && r();
				};
			}
			if (n) return n.current = t(), function() {
				return n.current = null;
			};
		}, null == r ? r : r.concat(n));
	}
	function T$1(n, r) {
		var u = s$5(t$4++, 7);
		return C$5(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
	}
	function q$1(n, t) {
		return o$5 = 8, T$1(function() {
			return n;
		}, t);
	}
	function x$1(n) {
		var u = r$3.context[n.__c], i = s$5(t$4++, 9);
		return i.c = n, u ? (i.__ ?? (i.__ = !0, u.sub(r$3)), u.props.value) : n.__;
	}
	function P$3(n, t) {
		c$2.useDebugValue && c$2.useDebugValue(t ? t(n) : n);
	}
	function b$2(n) {
		var u = s$5(t$4++, 10), i = d$1();
		return u.__ = n, r$3.componentDidCatch || (r$3.componentDidCatch = function(n, t) {
			u.__ && u.__(n, t), i[1](n);
		}), [i[0], function() {
			i[1](void 0);
		}];
	}
	function g$2() {
		var n = s$5(t$4++, 11);
		if (!n.__) {
			for (var u = r$3.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
			var i = u.__m || (u.__m = [0, 0]);
			n.__ = "P" + i[0] + "-" + i[1]++;
		}
		return n.__;
	}
	function j$3() {
		for (var n; n = f$4.shift();) {
			var t = n.__H;
			if (n.__P && t) try {
				t.__h.some(z$1), t.__h.some(B$1), t.__h = [];
			} catch (r) {
				t.__h = [], c$2.__e(r, n.__v);
			}
		}
	}
	function w$3(n) {
		var t, r = function() {
			clearTimeout(u), k$1 && cancelAnimationFrame(t), setTimeout(n);
		}, u = setTimeout(r, 35);
		k$1 && (t = requestAnimationFrame(r));
	}
	function z$1(n) {
		var t = r$3, u = n.__c;
		"function" == typeof u && (n.__c = void 0, u()), r$3 = t;
	}
	function B$1(n) {
		var t = r$3;
		n.__c = n.__(), r$3 = t;
	}
	function C$5(n, t) {
		return !n || n.length !== t.length || t.some(function(t, r) {
			return t !== n[r];
		});
	}
	function D$2(n, t) {
		return "function" == typeof t ? t(n) : t;
	}
	var t$4;
	var r$3;
	var u$4;
	var i$2;
	var o$5;
	var f$4;
	var c$2;
	var e$3;
	var a$4;
	var v;
	var l$4;
	var m$2;
	var p$3;
	var k$1;
	var init_hooks_module = __esmMin((() => {
		o$5 = 0;
		f$4 = [];
		c$2 = l$5;
		e$3 = c$2.__b;
		a$4 = c$2.__r;
		v = c$2.diffed;
		l$4 = c$2.__c;
		m$2 = c$2.unmount;
		p$3 = c$2.__;
		c$2.__b = function(n) {
			r$3 = null, e$3 && e$3(n);
		}, c$2.__ = function(n, t) {
			n && t.__k && t.__k.__m && (n.__m = t.__k.__m), p$3 && p$3(n, t);
		}, c$2.__r = function(n) {
			a$4 && a$4(n), t$4 = 0;
			var i = (r$3 = n.__c).__H;
			i && (u$4 === r$3 ? (i.__h = [], r$3.__h = [], i.__.some(function(n) {
				n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
			})) : (i.__h.some(z$1), i.__h.some(B$1), i.__h = [], t$4 = 0)), u$4 = r$3;
		}, c$2.diffed = function(n) {
			v && v(n);
			var t = n.__c;
			t && t.__H && (t.__H.__h.length && (1 !== f$4.push(t) && i$2 === c$2.requestAnimationFrame || ((i$2 = c$2.requestAnimationFrame) || w$3)(j$3)), t.__H.__.some(function(n) {
				n.u && (n.__H = n.u, n.u = void 0);
			})), u$4 = r$3 = null;
		}, c$2.__c = function(n, t) {
			t.some(function(n) {
				try {
					n.__h.some(z$1), n.__h = n.__h.filter(function(n) {
						return !n.__ || B$1(n);
					});
				} catch (r) {
					t.some(function(n) {
						n.__h && (n.__h = []);
					}), t = [], c$2.__e(r, n.__v);
				}
			}), l$4 && l$4(n, t);
		}, c$2.unmount = function(n) {
			m$2 && m$2(n);
			var t, r = n.__c;
			r && r.__H && (r.__H.__.some(function(n) {
				try {
					z$1(n);
				} catch (n) {
					t = n;
				}
			}), r.__H = void 0, t && c$2.__e(t, r.__v));
		};
		k$1 = "function" == typeof requestAnimationFrame;
	}));
	var compat_module_exports = __exportAll({
		Children: () => L$3,
		Component: () => C$6,
		Fragment: () => S,
		PureComponent: () => M$1,
		StrictMode: () => S,
		Suspense: () => P$2,
		SuspenseList: () => B,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => an,
		cloneElement: () => mn,
		createContext: () => X$1,
		createElement: () => k$2,
		createFactory: () => sn,
		createPortal: () => $,
		createRef: () => M$2,
		default: () => gn,
		findDOMNode: () => yn,
		flushSync: () => bn,
		forwardRef: () => D$1,
		hydrate: () => tn,
		isElement: () => Sn,
		isFragment: () => vn,
		isMemo: () => dn,
		isValidElement: () => hn,
		lazy: () => z,
		memo: () => N$1,
		render: () => nn,
		startTransition: () => x,
		unmountComponentAtNode: () => pn,
		unstable_batchedUpdates: () => _n,
		useCallback: () => q$1,
		useContext: () => x$1,
		useDebugValue: () => P$3,
		useDeferredValue: () => w$2,
		useEffect: () => h$1,
		useErrorBoundary: () => b$2,
		useId: () => g$2,
		useImperativeHandle: () => F$2,
		useInsertionEffect: () => I$2,
		useLayoutEffect: () => _$1,
		useMemo: () => T$1,
		useReducer: () => y$1,
		useRef: () => A$2,
		useState: () => d$1,
		useSyncExternalStore: () => C$4,
		useTransition: () => k,
		version: () => cn
	});
	function g$1(n, t) {
		for (var e in t) n[e] = t[e];
		return n;
	}
	function E$4(n, t) {
		for (var e in n) if ("__source" !== e && !(e in t)) return !0;
		for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
		return !1;
	}
	function C$4(n, t) {
		var e = t(), r = d$1({ t: {
			__: e,
			u: t
		} }), u = r[0].t, o = r[1];
		return _$1(function() {
			u.__ = e, u.u = t, R(u) && o({ t: u });
		}, [
			n,
			e,
			t
		]), h$1(function() {
			return R(u) && o({ t: u }), n(function() {
				R(u) && o({ t: u });
			});
		}, [n]), e;
	}
	function R(n) {
		try {
			return !((t = n.__) === (e = n.u()) && (0 !== t || 1 / t == 1 / e) || t != t && e != e);
		} catch (n) {
			return !0;
		}
		var t, e;
	}
	function x(n) {
		n();
	}
	function w$2(n) {
		return n;
	}
	function k() {
		return [!1, x];
	}
	function M$1(n, t) {
		this.props = n, this.context = t;
	}
	function N$1(n, e) {
		function r(n) {
			var t = this.props.ref;
			return t != n.ref && t && ("function" == typeof t ? t(null) : t.current = null), e ? !e(this.props, n) || t != n.ref : E$4(this.props, n);
		}
		function u(e) {
			return this.shouldComponentUpdate = r, k$2(n, e);
		}
		return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.__f = u.prototype.isReactComponent = !0, u.type = n, u;
	}
	function D$1(n) {
		function t(t) {
			var e = g$1({}, t);
			return delete e.ref, n(e, t.ref || null);
		}
		return t.$$typeof = A$1, t.render = n, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
	}
	function V$2(n, t, e) {
		return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n) {
			"function" == typeof n.__c && n.__c();
		}), n.__c.__H = null), null != (n = g$1({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c.__e = !0, n.__c = null), n.__k = n.__k && n.__k.map(function(n) {
			return V$2(n, t, e);
		})), n;
	}
	function W(n, t, e) {
		return n && e && (n.__v = null, n.__k = n.__k && n.__k.map(function(n) {
			return W(n, t, e);
		}), n.__c && n.__c.__P === t && (n.__e && e.appendChild(n.__e), n.__c.__e = !0, n.__c.__P = e)), n;
	}
	function P$2() {
		this.__u = 0, this.o = null, this.__b = null;
	}
	function j$2(n) {
		var t = n.__ && n.__.__c;
		return t && t.__a && t.__a(n);
	}
	function z(n) {
		var e, r, u, o = null;
		function i(i) {
			if (e || (e = n()).then(function(n) {
				n && (o = n.default || n), u = !0;
			}, function(n) {
				r = n, u = !0;
			}), r) throw r;
			if (!u) throw e;
			return o ? k$2(o, i) : null;
		}
		return i.displayName = "Lazy", i.__f = !0, i;
	}
	function B() {
		this.i = null, this.l = null;
	}
	function Z$1(n) {
		return this.getChildContext = function() {
			return n.context;
		}, n.children;
	}
	function Y$1(n) {
		var e = this, r = n.h;
		if (e.componentWillUnmount = function() {
			R$1(null, e.v), e.v = null, e.h = null;
		}, e.h && e.h !== r && e.componentWillUnmount(), !e.v) {
			for (var u = e.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
			e.h = r, e.v = {
				nodeType: 1,
				parentNode: r,
				childNodes: [],
				__k: { __m: u.__m },
				contains: function() {
					return !0;
				},
				namespaceURI: r.namespaceURI,
				insertBefore: function(n, t) {
					this.childNodes.push(n), e.h.insertBefore(n, t);
				},
				removeChild: function(n) {
					this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.h.removeChild(n);
				}
			};
		}
		R$1(k$2(Z$1, { context: e.context }, n.__v), e.v);
	}
	function $(n, e) {
		var r = k$2(Y$1, {
			__v: n,
			h: e
		});
		return r.containerInfo = e, r;
	}
	function nn(n, t, e) {
		return t.__k ?? (t.textContent = ""), R$1(n, t), "function" == typeof e && e(), n ? n.__c : null;
	}
	function tn(n, t, e) {
		return U$3(n, t), "function" == typeof e && e(), n ? n.__c : null;
	}
	function sn(n) {
		return k$2.bind(null, n);
	}
	function hn(n) {
		return !!n && n.$$typeof === q;
	}
	function vn(n) {
		return hn(n) && n.type === S;
	}
	function dn(n) {
		return !!n && "string" == typeof n.displayName && 0 == n.displayName.indexOf("Memo(");
	}
	function mn(n) {
		return hn(n) ? W$1.apply(null, arguments) : n;
	}
	function pn(n) {
		return !!n.__k && (R$1(null, n), !0);
	}
	function yn(n) {
		return n && (n.base || 1 === n.nodeType && n) || null;
	}
	var I$2;
	var T;
	var A$1;
	var F$1;
	var L$3;
	var O;
	var U$2;
	var H$2;
	var q;
	var G$1;
	var J;
	var K$1;
	var Q;
	var X;
	var en;
	var rn;
	var un;
	var on;
	var ln;
	var fn;
	var an;
	var cn;
	var _n;
	var bn;
	var Sn;
	var gn;
	var init_compat_module = __esmMin((() => {
		init_preact_module();
		init_hooks_module();
		init_hooks_module();
		I$2 = _$1;
		(M$1.prototype = new C$6()).isPureReactComponent = !0, M$1.prototype.shouldComponentUpdate = function(n, t) {
			return E$4(this.props, n) || E$4(this.state, t);
		};
		T = l$5.__b;
		l$5.__b = function(n) {
			n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T && T(n);
		};
		A$1 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
		F$1 = function(n, t) {
			return null == n ? null : F$3(F$3(n).map(t));
		};
		L$3 = {
			map: F$1,
			forEach: F$1,
			count: function(n) {
				return n ? F$3(n).length : 0;
			},
			only: function(n) {
				var t = F$3(n);
				if (1 !== t.length) throw "Children.only";
				return t[0];
			},
			toArray: F$3
		};
		O = l$5.__e;
		l$5.__e = function(n, t, e, r) {
			if (n.then) {
				for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return t.__e ?? (t.__e = e.__e, t.__k = e.__k || []), u.__c(n, t);
			}
			O(n, t, e, r);
		};
		U$2 = l$5.unmount;
		l$5.unmount = function(n) {
			var t = n.__c;
			t && (t.__z = !0), t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), U$2 && U$2(n);
		}, (P$2.prototype = new C$6()).__c = function(n, t) {
			var e = t.__c, r = this;
			r.o ??= [], r.o.push(e);
			var u = j$2(r.__v), o = !1, i = function() {
				o || r.__z || (o = !0, e.__R = null, u ? u(f) : f());
			};
			e.__R = i;
			var l = e.__P;
			e.__P = null;
			var f = function() {
				if (!--r.__u) {
					if (r.state.__a) {
						var n = r.state.__a;
						r.__v.__k[0] = W(n, n.__c.__P, n.__c.__O);
					}
					var t;
					for (r.setState({ __a: r.__b = null }); t = r.o.pop();) t.__P = l, t.forceUpdate();
				}
			};
			r.__u++ || 32 & t.__u || r.setState({ __a: r.__b = r.__v.__k[0] }), n.then(i, i);
		}, P$2.prototype.componentWillUnmount = function() {
			this.o = [];
		}, P$2.prototype.render = function(n, e) {
			if (this.__b) {
				if (this.__v.__k) {
					var r = document.createElement("div"), o = this.__v.__k[0].__c;
					this.__v.__k[0] = V$2(this.__b, r, o.__O = o.__P);
				}
				this.__b = null;
			}
			var i = e.__a && k$2(S, null, n.fallback);
			return i && (i.__u &= -33), [k$2(S, null, e.__a ? null : n.children), i];
		};
		H$2 = function(n, t, e) {
			if (++e[1] === e[0] && n.l.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e = n.i; e;) {
				for (; e.length > 3;) e.pop()();
				if (e[1] < e[0]) break;
				n.i = e = e[2];
			}
		};
		(B.prototype = new C$6()).__a = function(n) {
			var t = this, e = j$2(t.__v), r = t.l.get(n);
			return r[0]++, function(u) {
				var o = function() {
					t.props.revealOrder ? (r.push(u), H$2(t, n, r)) : u();
				};
				e ? e(o) : o();
			};
		}, B.prototype.render = function(n) {
			this.i = null, this.l = new Map();
			var t = F$3(n.children);
			n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
			for (var e = t.length; e--;) this.l.set(t[e], this.i = [
				1,
				0,
				this.i
			]);
			return n.children;
		}, B.prototype.componentDidUpdate = B.prototype.componentDidMount = function() {
			var n = this;
			this.l.forEach(function(t, e) {
				H$2(n, e, t);
			});
		};
		q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
		G$1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
		J = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
		K$1 = /[A-Z0-9]/g;
		Q = "undefined" != typeof document;
		X = function(n) {
			return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
		};
		C$6.prototype.isReactComponent = !0, [
			"componentWillMount",
			"componentWillReceiveProps",
			"componentWillUpdate"
		].forEach(function(t) {
			Object.defineProperty(C$6.prototype, t, {
				configurable: !0,
				get: function() {
					return this["UNSAFE_" + t];
				},
				set: function(n) {
					Object.defineProperty(this, t, {
						configurable: !0,
						writable: !0,
						value: n
					});
				}
			});
		});
		en = l$5.event;
		l$5.event = function(n) {
			return en && (n = en(n)), n.persist = function() {}, n.isPropagationStopped = function() {
				return this.cancelBubble;
			}, n.isDefaultPrevented = function() {
				return this.defaultPrevented;
			}, n.nativeEvent = n;
		};
		un = {
			configurable: !0,
			get: function() {
				return this.class;
			}
		};
		on = l$5.vnode;
		l$5.vnode = function(n) {
			"string" == typeof n.type && function(n) {
				var t = n.props, e = n.type, u = {}, o = -1 == e.indexOf("-");
				for (var i in t) {
					var l = t[i];
					if (!("value" === i && "defaultValue" in t && null == l || Q && "children" === i && "noscript" === e || "class" === i || "className" === i)) {
						var f = i.toLowerCase();
						"defaultValue" === i && "value" in t && null == t.value ? i = "value" : "download" === i && !0 === l ? l = "" : "translate" === f && "no" === l ? l = !1 : "o" === f[0] && "n" === f[1] ? "ondoubleclick" === f ? i = "ondblclick" : "onchange" !== f || "input" !== e && "textarea" !== e || X(t.type) ? "onfocus" === f ? i = "onfocusin" : "onblur" === f ? i = "onfocusout" : J.test(i) && (i = f) : f = i = "oninput" : o && G$1.test(i) ? i = i.replace(K$1, "-$&").toLowerCase() : null === l && (l = void 0), "oninput" === f && u[i = f] && (i = "oninputCapture"), u[i] = l;
					}
				}
				"select" == e && (u.multiple && Array.isArray(u.value) && (u.value = F$3(t.children).forEach(function(n) {
					n.props.selected = -1 != u.value.indexOf(n.props.value);
				})), null != u.defaultValue && (u.value = F$3(t.children).forEach(function(n) {
					n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
				}))), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", un)) : t.className && (u.class = u.className = t.className), n.props = u;
			}(n), n.$$typeof = q, on && on(n);
		};
		ln = l$5.__r;
		l$5.__r = function(n) {
			ln && ln(n), rn = n.__c;
		};
		fn = l$5.diffed;
		l$5.diffed = function(n) {
			fn && fn(n);
			var t = n.props, e = n.__e;
			null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value), rn = null;
		};
		an = { ReactCurrentDispatcher: { current: {
			readContext: function(n) {
				return rn.__n[n.__c].props.value;
			},
			useCallback: q$1,
			useContext: x$1,
			useDebugValue: P$3,
			useDeferredValue: w$2,
			useEffect: h$1,
			useId: g$2,
			useImperativeHandle: F$2,
			useInsertionEffect: I$2,
			useLayoutEffect: _$1,
			useMemo: T$1,
			useReducer: y$1,
			useRef: A$2,
			useState: d$1,
			useSyncExternalStore: C$4,
			useTransition: k
		} } };
		cn = "18.3.1";
		_n = function(n, t) {
			return n(t);
		};
		bn = function(n, t) {
			var r, u = l$5.debounceRendering;
			l$5.debounceRendering = function(n) {
				r = n;
			};
			try {
				var o = n(t);
				return r && r(), o;
			} finally {
				l$5.debounceRendering = u;
			}
		};
		Sn = hn;
		gn = {
			useState: d$1,
			useId: g$2,
			useReducer: y$1,
			useEffect: h$1,
			useLayoutEffect: _$1,
			useInsertionEffect: I$2,
			useTransition: k,
			useDeferredValue: w$2,
			useSyncExternalStore: C$4,
			startTransition: x,
			useRef: A$2,
			useImperativeHandle: F$2,
			useMemo: T$1,
			useCallback: q$1,
			useContext: x$1,
			useDebugValue: P$3,
			version: "18.3.1",
			Children: L$3,
			render: nn,
			hydrate: tn,
			unmountComponentAtNode: pn,
			createPortal: $,
			createElement: k$2,
			createContext: X$1,
			createFactory: sn,
			cloneElement: mn,
			createRef: M$2,
			Fragment: S,
			isValidElement: hn,
			isElement: Sn,
			isFragment: vn,
			isMemo: dn,
			findDOMNode: yn,
			Component: C$6,
			PureComponent: M$1,
			memo: N$1,
			forwardRef: D$1,
			flushSync: bn,
			unstable_batchedUpdates: _n,
			StrictMode: S,
			Suspense: P$2,
			SuspenseList: B,
			lazy: z,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: an
		};
	}));
	init_compat_module();
	var __defProp$14 = Object.defineProperty;
	var __name$14 = (target, value) => __defProp$14(target, "name", {
		value,
		configurable: true
	});
	var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
	function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
		return __name$14(function handleEvent(event) {
			originalEventHandler?.(event);
			if (checkForDefaultPrevented === false || !event || !event.defaultPrevented) return ourEventHandler?.(event);
		}, "handleEvent");
	}
	__name$14(composeEventHandlers, "composeEventHandlers");
	function getOwnerWindow(element) {
		if (!canUseDOM) throw new Error("Cannot access window outside of the DOM");
		return element?.ownerDocument?.defaultView ?? window;
	}
	__name$14(getOwnerWindow, "getOwnerWindow");
	function getOwnerDocument(element) {
		if (!canUseDOM) throw new Error("Cannot access document outside of the DOM");
		return element?.ownerDocument ?? document;
	}
	__name$14(getOwnerDocument, "getOwnerDocument");
	function getActiveElement(node, activeDescendant = false) {
		const { activeElement } = getOwnerDocument(node);
		if (!activeElement?.nodeName) return null;
		if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
		if (activeDescendant) {
			const id = activeElement.getAttribute("aria-activedescendant");
			if (id) {
				const element = getOwnerDocument(activeElement).getElementById(id);
				if (element) return element;
			}
		}
		return activeElement;
	}
	__name$14(getActiveElement, "getActiveElement");
	function isFrame(element) {
		return element.tagName === "IFRAME";
	}
	__name$14(isFrame, "isFrame");
	var __defProp$13 = Object.defineProperty;
	var __name$13 = (target, value) => __defProp$13(target, "name", {
		value,
		configurable: true
	});
	function setRef$1(ref, value) {
		if (typeof ref === "function") return ref(value);
		else if (ref !== null && ref !== void 0) ref.current = value;
	}
	__name$13(setRef$1, "setRef");
	function composeRefs(...refs) {
		return (node) => {
			let hasCleanup = false;
			const cleanups = refs.map((ref) => {
				const cleanup = setRef$1(ref, node);
				if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
				return cleanup;
			});
			if (hasCleanup) return () => {
				for (let i = 0; i < cleanups.length; i++) {
					const cleanup = cleanups[i];
					if (typeof cleanup == "function") cleanup();
					else setRef$1(refs[i], null);
				}
			};
		};
	}
	__name$13(composeRefs, "composeRefs");
	function useComposedRefs(...refs) {
		return q$1(composeRefs(...refs), refs);
	}
	__name$13(useComposedRefs, "useComposedRefs");
	init_preact_module();
	var f$3 = 0;
	Array.isArray;
	function u$3(e, t, n, o, i, u) {
		t || (t = {});
		var a, c, p = t;
		if ("ref" in p) for (c in p = {}, t) "ref" == c ? a = t[c] : p[c] = t[c];
		var l = {
			type: e,
			props: p,
			key: n,
			ref: a,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --f$3,
			__i: -1,
			__u: 0,
			__source: i,
			__self: u
		};
		if ("function" == typeof e && (a = e.defaultProps)) for (c in a) void 0 === p[c] && (p[c] = a[c]);
		return l$5.vnode && l$5.vnode(l), l;
	}
	init_compat_module();
	var __defProp$12 = Object.defineProperty;
	var __name$12 = (target, value) => __defProp$12(target, "name", {
		value,
		configurable: true
	});
	function createContext2(rootComponentName, defaultContext) {
		const Context = X$1(defaultContext);
		Context.displayName = rootComponentName + "Context";
		const Provider = __name$12((props) => {
			const { children, ...context } = props;
			const value = T$1(() => context, Object.values(context));
			return u$3(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, options = {}) {
			const { optional = false } = options;
			const context = x$1(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$12(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$12(createContext2, "createContext");
	function createContextScope(scopeName, createContextScopeDeps = []) {
		let defaultContexts = [];
		function createContext3(rootComponentName, defaultContext) {
			const BaseContext = X$1(defaultContext);
			BaseContext.displayName = rootComponentName + "Context";
			const index = defaultContexts.length;
			defaultContexts = [...defaultContexts, defaultContext];
			const Provider = __name$12((props) => {
				const { scope, children, ...context } = props;
				const Context = scope?.[scopeName]?.[index] || BaseContext;
				const value = T$1(() => context, Object.values(context));
				return u$3(Context.Provider, {
					value,
					children
				});
			}, "Provider");
			Provider.displayName = rootComponentName + "Provider";
			function useContext2(consumerName, scope, options = {}) {
				const { optional = false } = options;
				const context = x$1(scope?.[scopeName]?.[index] || BaseContext);
				if (context) return context;
				if (defaultContext !== void 0) return defaultContext;
				if (optional) return void 0;
				throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
			}
			__name$12(useContext2, "useContext");
			return [Provider, useContext2];
		}
		__name$12(createContext3, "createContext");
		const createScope = __name$12(() => {
			const scopeContexts = defaultContexts.map((defaultContext) => {
				return X$1(defaultContext);
			});
			return __name$12(function useScope(scope) {
				const contexts = scope?.[scopeName] || scopeContexts;
				return T$1(() => ({ [`__scope${scopeName}`]: {
					...scope,
					[scopeName]: contexts
				} }), [scope, contexts]);
			}, "useScope");
		}, "createScope");
		createScope.scopeName = scopeName;
		return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
	}
	__name$12(createContextScope, "createContextScope");
	function composeContextScopes(...scopes) {
		const baseScope = scopes[0];
		if (scopes.length === 1) return baseScope;
		const createScope = __name$12(() => {
			const scopeHooks = scopes.map((createScope2) => ({
				useScope: createScope2(),
				scopeName: createScope2.scopeName
			}));
			return __name$12(function useComposedScopes(overrideScopes) {
				const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
					const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
					return {
						...nextScopes2,
						...currentScope
					};
				}, {});
				return T$1(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
			}, "useComposedScopes");
		}, "createScope");
		createScope.scopeName = baseScope.scopeName;
		return createScope;
	}
	__name$12(composeContextScopes, "composeContextScopes");
	init_compat_module();
	var useLayoutEffect2 = globalThis?.document ? _$1 : () => {};
	init_compat_module();
	var __defProp$11 = Object.defineProperty;
	var __name$11 = (target, value) => __defProp$11(target, "name", {
		value,
		configurable: true
	});
	var useReactId = compat_module_exports[" useId ".trim().toString()] || (() => void 0);
	var count$1 = 0;
	function useId(deterministicId) {
		const [id, setId] = d$1(useReactId());
		useLayoutEffect2(() => {
			if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
		}, [deterministicId]);
		return deterministicId || (id ? `radix-${id}` : "");
	}
	__name$11(useId, "useId");
	init_compat_module();
	var __defProp$10 = Object.defineProperty;
	var __name$10 = (target, value) => __defProp$10(target, "name", {
		value,
		configurable: true
	});
	var useReactEffectEvent = compat_module_exports[" useEffectEvent ".trim().toString()];
	var useReactInsertionEffect = compat_module_exports[" useInsertionEffect ".trim().toString()];
	function useEffectEvent(callback) {
		if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
		const ref = A$2(() => {
			throw new Error("Cannot call an event handler while rendering.");
		});
		if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
			ref.current = callback;
		});
		else useLayoutEffect2(() => {
			ref.current = callback;
		});
		return T$1(() => ((...args) => ref.current?.(...args)), []);
	}
	__name$10(useEffectEvent, "useEffectEvent");
	init_compat_module();
	var __defProp$9 = Object.defineProperty;
	var __name$9 = (target, value) => __defProp$9(target, "name", {
		value,
		configurable: true
	});
	var useInsertionEffect = compat_module_exports[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
	function useControllableState({ prop, defaultProp, onChange = __name$9(() => {}, "onChange"), caller }) {
		const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
			defaultProp,
			onChange
		});
		const isControlled = prop !== void 0;
		return [isControlled ? prop : uncontrolledProp, q$1((nextValue) => {
			if (isControlled) {
				const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
				if (value2 !== prop) onChangeRef.current?.(value2);
			} else setUncontrolledProp(nextValue);
		}, [
			isControlled,
			prop,
			setUncontrolledProp,
			onChangeRef
		])];
	}
	__name$9(useControllableState, "useControllableState");
	function useUncontrolledState({ defaultProp, onChange }) {
		const [value, setValue] = d$1(defaultProp);
		const prevValueRef = A$2(value);
		const onChangeRef = A$2(onChange);
		useInsertionEffect(() => {
			onChangeRef.current = onChange;
		}, [onChange]);
		h$1(() => {
			if (prevValueRef.current !== value) {
				onChangeRef.current?.(value);
				prevValueRef.current = value;
			}
		}, [value, prevValueRef]);
		return [
			value,
			setValue,
			onChangeRef
		];
	}
	__name$9(useUncontrolledState, "useUncontrolledState");
	function isFunction(value) {
		return typeof value === "function";
	}
	__name$9(isFunction, "isFunction");
	var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
	function useControllableStateReducer(reducer, userArgs, initialArg, init) {
		const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
		const isControlled = controlledState !== void 0;
		const onChange = useEffectEvent(onChangeProp);
		const args = [{
			...initialArg,
			state: defaultProp
		}];
		if (init) args.push(init);
		const [internalState, dispatch] = y$1((state2, action) => {
			if (action.type === SYNC_STATE) return {
				...state2,
				state: action.state
			};
			const next = reducer(state2, action);
			if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
			return next;
		}, ...args);
		const uncontrolledState = internalState.state;
		const prevValueRef = A$2(uncontrolledState);
		h$1(() => {
			if (prevValueRef.current !== uncontrolledState) {
				prevValueRef.current = uncontrolledState;
				if (!isControlled) onChange(uncontrolledState);
			}
		}, [
			uncontrolledState,
			prevValueRef,
			isControlled
		]);
		const state = T$1(() => {
			if (controlledState !== void 0) return {
				...internalState,
				state: controlledState
			};
			return internalState;
		}, [internalState, controlledState]);
		h$1(() => {
			if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
				type: SYNC_STATE,
				state: controlledState
			});
		}, [
			controlledState,
			internalState.state,
			isControlled
		]);
		return [state, dispatch];
	}
	__name$9(useControllableStateReducer, "useControllableStateReducer");
	init_compat_module();
	var __defProp$8 = Object.defineProperty;
	var __name$8 = (target, value) => __defProp$8(target, "name", {
		value,
		configurable: true
	});
	function createSlot(ownerName) {
		const Slot2 = D$1((props, forwardedRef) => {
			let { children, ...slotProps } = props;
			let slottableElement = null;
			let hasSlottable = false;
			const newChildren = [];
			if (isLazyComponent(children) && typeof use$1 === "function") children = use$1(children._payload);
			L$3.forEach(children, (maybeSlottable) => {
				if (isSlottable(maybeSlottable)) {
					hasSlottable = true;
					const slottable = maybeSlottable;
					let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
					if (isLazyComponent(child) && typeof use$1 === "function") child = use$1(child._payload);
					slottableElement = getSlottableElementFromSlottable(slottable, child);
					newChildren.push(slottableElement?.props?.children);
				} else newChildren.push(maybeSlottable);
			});
			if (slottableElement) slottableElement = mn(slottableElement, void 0, newChildren);
			else if (!hasSlottable && L$3.count(children) === 1 && hn(children)) slottableElement = children;
			const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
			const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
			if (!slottableElement) {
				if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
				return children;
			}
			const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
			if (slottableElement.type !== S) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
			return mn(slottableElement, mergedProps);
		});
		Slot2.displayName = `${ownerName}.Slot`;
		return Slot2;
	}
	__name$8(createSlot, "createSlot");
	var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
	function createSlottable(ownerName) {
		const Slottable2 = __name$8((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
		Slottable2.displayName = `${ownerName}.Slottable`;
		Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
		return Slottable2;
	}
	__name$8(createSlottable, "createSlottable");
	var getSlottableElementFromSlottable = __name$8((slottable, child) => {
		if ("child" in slottable.props) {
			const child2 = slottable.props.child;
			if (!hn(child2)) return null;
			return mn(child2, void 0, slottable.props.children(child2.props.children));
		}
		return hn(child) ? child : null;
	}, "getSlottableElementFromSlottable");
	function mergeProps(slotProps, childProps) {
		const overrideProps = { ...childProps };
		for (const propName in childProps) {
			const slotPropValue = slotProps[propName];
			const childPropValue = childProps[propName];
			if (/^on[A-Z]/.test(propName)) {
				if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
					const result = childPropValue(...args);
					slotPropValue(...args);
					return result;
				};
				else if (slotPropValue) overrideProps[propName] = slotPropValue;
			} else if (propName === "style") overrideProps[propName] = {
				...slotPropValue,
				...childPropValue
			};
			else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
		}
		return {
			...slotProps,
			...overrideProps
		};
	}
	__name$8(mergeProps, "mergeProps");
	function getElementRef$1(element) {
		let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
		let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
		if (mayWarn) return element.ref;
		getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
		mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
		if (mayWarn) return element.props.ref;
		return element.props.ref || element.ref;
	}
	__name$8(getElementRef$1, "getElementRef");
	function isSlottable(child) {
		return hn(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
	}
	__name$8(isSlottable, "isSlottable");
	var REACT_LAZY_TYPE = Symbol.for("react.lazy");
	function isLazyComponent(element) {
		return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
	}
	__name$8(isLazyComponent, "isLazyComponent");
	function isPromiseLike(value) {
		return typeof value === "object" && value !== null && "then" in value;
	}
	__name$8(isPromiseLike, "isPromiseLike");
	var createSlotError = __name$8((ownerName) => {
		return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
	}, "createSlotError");
	var createSlottableError = __name$8((ownerName) => {
		return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
	}, "createSlottableError");
	var use$1 = compat_module_exports[" use ".trim().toString()];
	init_compat_module();
	var __defProp$7 = Object.defineProperty;
	var __name$7 = (target, value) => __defProp$7(target, "name", {
		value,
		configurable: true
	});
	var Primitive = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"select",
		"span",
		"svg",
		"ul"
	].reduce((primitive, node) => {
		const Slot = createSlot(`Primitive.${node}`);
		const Node = D$1((props, forwardedRef) => {
			const { asChild, ...primitiveProps } = props;
			const Comp = asChild ? Slot : node;
			if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
			return u$3(Comp, {
				...primitiveProps,
				ref: forwardedRef
			});
		});
		Node.displayName = `Primitive.${node}`;
		return {
			...primitive,
			[node]: Node
		};
	}, {});
	function dispatchDiscreteCustomEvent(target, event) {
		if (target) bn(() => target.dispatchEvent(event));
	}
	__name$7(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
	init_compat_module();
	var __defProp$6 = Object.defineProperty;
	var __name$6 = (target, value) => __defProp$6(target, "name", {
		value,
		configurable: true
	});
	function useCallbackRef(callback) {
		const callbackRef = A$2(callback);
		h$1(() => {
			callbackRef.current = callback;
		});
		return T$1(() => ((...args) => callbackRef.current?.(...args)), []);
	}
	__name$6(useCallbackRef, "useCallbackRef");
	init_compat_module();
	var __defProp$5 = Object.defineProperty;
	var __name$5 = (target, value) => __defProp$5(target, "name", {
		value,
		configurable: true
	});
	var CONTEXT_UPDATE = "dismissableLayer.update";
	var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
	var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
	var originalBodyPointerEvents;
	var DismissableLayerContext = X$1({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
		dismissableSurfaces: new Set()
	});
	var DismissableLayer = D$1(__name$5(function DismissableLayer2(props, forwardedRef) {
		const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
		const context = x$1(DismissableLayerContext);
		const [node, setNode] = d$1(null);
		const ownerDocument = node?.ownerDocument ?? globalThis?.document;
		const [, force] = d$1({});
		const composedRefs = useComposedRefs(forwardedRef, setNode);
		const layers = Array.from(context.layers);
		const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
		const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
		const index = node ? layers.indexOf(node) : -1;
		const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
		const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
		const isDeferredPointerDownOutsideRef = A$2(false);
		const pointerDownOutside = usePointerDownOutside((event) => {
			onPointerDownOutside?.(event);
			onInteractOutside?.(event);
			if (!event.defaultPrevented) onDismiss?.();
		}, {
			ownerDocument,
			deferPointerDownOutside,
			isDeferredPointerDownOutsideRef,
			dismissableSurfaces: context.dismissableSurfaces,
			shouldHandlePointerDownOutside: q$1((target) => {
				if (!(target instanceof Node)) return false;
				const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
				return isPointerEventsEnabled && !isPointerDownOnBranch;
			}, [context.branches, isPointerEventsEnabled])
		});
		const focusOutside = useFocusOutside((event) => {
			if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
			const target = event.target;
			if ([...context.branches].some((branch) => branch.contains(target))) return;
			onFocusOutside?.(event);
			onInteractOutside?.(event);
			if (!event.defaultPrevented) onDismiss?.();
		}, ownerDocument);
		const isHighestLayer = node ? index === layers.length - 1 : false;
		const handleKeyDown = useCallbackRef((event) => {
			if (event.key !== "Escape") return;
			onEscapeKeyDown?.(event);
			if (!event.defaultPrevented && onDismiss) {
				event.preventDefault();
				onDismiss();
			}
		});
		h$1(() => {
			if (!isHighestLayer) return;
			ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
			return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
		}, [
			ownerDocument,
			isHighestLayer,
			handleKeyDown
		]);
		h$1(() => {
			if (!node) return;
			if (disableOutsidePointerEvents) {
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
					originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
					ownerDocument.body.style.pointerEvents = "none";
				}
				context.layersWithOutsidePointerEventsDisabled.add(node);
			}
			context.layers.add(node);
			dispatchUpdate();
			return () => {
				if (disableOutsidePointerEvents) {
					context.layersWithOutsidePointerEventsDisabled.delete(node);
					if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
				}
			};
		}, [
			node,
			ownerDocument,
			disableOutsidePointerEvents,
			context
		]);
		h$1(() => {
			return () => {
				if (!node) return;
				context.layers.delete(node);
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				dispatchUpdate();
			};
		}, [node, context]);
		h$1(() => {
			const handleUpdate = __name$5(() => force({}), "handleUpdate");
			document.addEventListener(CONTEXT_UPDATE, handleUpdate);
			return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
		}, []);
		return u$3(Primitive.div, {
			...layerProps,
			ref: composedRefs,
			style: {
				pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
				...props.style
			},
			onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
			onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
			onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
		});
	}, "DismissableLayer"));
	function useDismissableLayerSurface() {
		const context = x$1(DismissableLayerContext);
		const [node, setNode] = d$1(null);
		h$1(() => {
			if (!node) return;
			context.dismissableSurfaces.add(node);
			return () => {
				context.dismissableSurfaces.delete(node);
			};
		}, [node, context.dismissableSurfaces]);
		return setNode;
	}
	__name$5(useDismissableLayerSurface, "useDismissableLayerSurface");
	var IS_TRUE = __name$5(() => true, "IS_TRUE");
	function usePointerDownOutside(onPointerDownOutside, args) {
		const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
		const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
		const isPointerInsideReactTreeRef = A$2(false);
		const isPointerDownOutsideRef = A$2(false);
		const interceptedOutsideInteractionEventsRef = A$2(new Map());
		const handleClickRef = A$2(() => {});
		h$1(() => {
			function resetOutsideInteraction() {
				isPointerDownOutsideRef.current = false;
				isDeferredPointerDownOutsideRef.current = false;
				interceptedOutsideInteractionEventsRef.current.clear();
			}
			__name$5(resetOutsideInteraction, "resetOutsideInteraction");
			function isOutsideInteractionIntercepted() {
				return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
			}
			__name$5(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
			function handleInteractionCapture(event) {
				if (!isPointerDownOutsideRef.current) return;
				const target = event.target;
				if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
				if (event.type === "click") window.setTimeout(() => {
					if (isPointerDownOutsideRef.current) handleClickRef.current();
				}, 0);
			}
			__name$5(handleInteractionCapture, "handleInteractionCapture");
			function handleInteractionBubble(event) {
				if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
			}
			__name$5(handleInteractionBubble, "handleInteractionBubble");
			const handlePointerDown = __name$5((event) => {
				if (event.target && !isPointerInsideReactTreeRef.current) {
					let handleAndDispatchPointerDownOutsideEvent2 = function() {
						ownerDocument.removeEventListener("click", handleClickRef.current);
						const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
						resetOutsideInteraction();
						if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
					};
					__name$5(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
					if (!shouldHandlePointerDownOutside(event.target)) {
						ownerDocument.removeEventListener("click", handleClickRef.current);
						resetOutsideInteraction();
						isPointerInsideReactTreeRef.current = false;
						return;
					}
					const eventDetail = { originalEvent: event };
					isPointerDownOutsideRef.current = true;
					isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
					interceptedOutsideInteractionEventsRef.current.clear();
					if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
					else {
						ownerDocument.removeEventListener("click", handleClickRef.current);
						handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
						ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
					}
				} else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
				}
				isPointerInsideReactTreeRef.current = false;
			}, "handlePointerDown");
			const outsideInteractionEvents = [
				"pointerup",
				"mousedown",
				"mouseup",
				"touchstart",
				"touchend",
				"click"
			];
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.addEventListener(eventName, handleInteractionBubble);
			}
			const timerId = window.setTimeout(() => {
				ownerDocument.addEventListener("pointerdown", handlePointerDown);
			}, 0);
			return () => {
				window.clearTimeout(timerId);
				ownerDocument.removeEventListener("pointerdown", handlePointerDown);
				ownerDocument.removeEventListener("click", handleClickRef.current);
				for (const eventName of outsideInteractionEvents) {
					ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
					ownerDocument.removeEventListener(eventName, handleInteractionBubble);
				}
			};
		}, [
			ownerDocument,
			handlePointerDownOutside,
			deferPointerDownOutside,
			isDeferredPointerDownOutsideRef,
			dismissableSurfaces,
			shouldHandlePointerDownOutside
		]);
		return { onPointerDownCapture: __name$5(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
	}
	__name$5(usePointerDownOutside, "usePointerDownOutside");
	function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
		const handleFocusOutside = useCallbackRef(onFocusOutside);
		const isFocusInsideReactTreeRef = A$2(false);
		h$1(() => {
			const handleFocus = __name$5((event) => {
				if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
			}, "handleFocus");
			ownerDocument.addEventListener("focusin", handleFocus);
			return () => ownerDocument.removeEventListener("focusin", handleFocus);
		}, [ownerDocument, handleFocusOutside]);
		return {
			onFocusCapture: __name$5(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
			onBlurCapture: __name$5(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
		};
	}
	__name$5(useFocusOutside, "useFocusOutside");
	function dispatchUpdate() {
		const event = new CustomEvent(CONTEXT_UPDATE);
		document.dispatchEvent(event);
	}
	__name$5(dispatchUpdate, "dispatchUpdate");
	function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
		const target = detail.originalEvent.target;
		const event = new CustomEvent(name, {
			bubbles: false,
			cancelable: true,
			detail
		});
		if (handler) target.addEventListener(name, handler, { once: true });
		if (discrete) dispatchDiscreteCustomEvent(target, event);
		else target.dispatchEvent(event);
	}
	__name$5(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
	init_compat_module();
	var __defProp$4 = Object.defineProperty;
	var __name$4 = (target, value) => __defProp$4(target, "name", {
		value,
		configurable: true
	});
	var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
	var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
	var EVENT_OPTIONS = {
		bubbles: false,
		cancelable: true
	};
	var FocusScope = D$1(__name$4(function FocusScope2(props, forwardedRef) {
		const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
		const [container, setContainer] = d$1(null);
		const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
		const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
		const lastFocusedElementRef = A$2(null);
		const composedRefs = useComposedRefs(forwardedRef, setContainer);
		const focusScope = A$2({
			paused: false,
			pause() {
				this.paused = true;
			},
			resume() {
				this.paused = false;
			}
		}).current;
		h$1(() => {
			if (trapped) {
				let handleFocusIn2 = function(event) {
					if (focusScope.paused || !container) return;
					const target = event.target;
					if (container.contains(target)) lastFocusedElementRef.current = target;
					else focus(lastFocusedElementRef.current, { select: true });
				}, handleFocusOut2 = function(event) {
					if (focusScope.paused || !container) return;
					const relatedTarget = event.relatedTarget;
					if (relatedTarget === null) return;
					if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
				}, handleMutations2 = function(mutations) {
					if (document.activeElement !== document.body) return;
					for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
				};
				__name$4(handleFocusIn2, "handleFocusIn");
				__name$4(handleFocusOut2, "handleFocusOut");
				__name$4(handleMutations2, "handleMutations");
				document.addEventListener("focusin", handleFocusIn2);
				document.addEventListener("focusout", handleFocusOut2);
				const mutationObserver = new MutationObserver(handleMutations2);
				if (container) mutationObserver.observe(container, {
					childList: true,
					subtree: true
				});
				return () => {
					document.removeEventListener("focusin", handleFocusIn2);
					document.removeEventListener("focusout", handleFocusOut2);
					mutationObserver.disconnect();
				};
			}
		}, [
			trapped,
			container,
			focusScope.paused
		]);
		h$1(() => {
			if (container) {
				focusScopesStack.add(focusScope);
				const previouslyFocusedElement = document.activeElement;
				if (!container.contains(previouslyFocusedElement)) {
					const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
					container.dispatchEvent(mountEvent);
					if (!mountEvent.defaultPrevented) {
						focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
						if (document.activeElement === previouslyFocusedElement) focus(container);
					}
				}
				return () => {
					container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
					setTimeout(() => {
						const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
						container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
						container.dispatchEvent(unmountEvent);
						if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
						container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
						focusScopesStack.remove(focusScope);
					}, 0);
				};
			}
		}, [
			container,
			onMountAutoFocus,
			onUnmountAutoFocus,
			focusScope
		]);
		const handleKeyDown = q$1((event) => {
			if (!loop && !trapped) return;
			if (focusScope.paused) return;
			const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
			const focusedElement = document.activeElement;
			if (isTabKey && focusedElement) {
				const container2 = event.currentTarget;
				const [first, last] = getTabbableEdges(container2);
				if (!(first && last)) {
					if (focusedElement === container2) event.preventDefault();
				} else if (!event.shiftKey && focusedElement === last) {
					event.preventDefault();
					if (loop) focus(first, { select: true });
				} else if (event.shiftKey && focusedElement === first) {
					event.preventDefault();
					if (loop) focus(last, { select: true });
				}
			}
		}, [
			loop,
			trapped,
			focusScope.paused
		]);
		return u$3(Primitive.div, {
			tabIndex: -1,
			...scopeProps,
			ref: composedRefs,
			onKeyDown: handleKeyDown
		});
	}, "FocusScope"));
	function focusFirst(candidates, { select = false } = {}) {
		const previouslyFocusedElement = document.activeElement;
		for (const candidate of candidates) {
			focus(candidate, { select });
			if (document.activeElement !== previouslyFocusedElement) return;
		}
	}
	__name$4(focusFirst, "focusFirst");
	function getTabbableEdges(container) {
		const candidates = getTabbableCandidates(container);
		return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
	}
	__name$4(getTabbableEdges, "getTabbableEdges");
	function getTabbableCandidates(container) {
		const nodes = [];
		const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: __name$4((node) => {
			const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
			if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
			return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
		}, "acceptNode") });
		while (walker.nextNode()) nodes.push(walker.currentNode);
		return nodes;
	}
	__name$4(getTabbableCandidates, "getTabbableCandidates");
	function findVisible(elements, container) {
		const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
		for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
	}
	__name$4(findVisible, "findVisible");
	function isHidden(node, { upTo }) {
		if (getComputedStyle(node).visibility === "hidden") return true;
		while (node) {
			if (upTo !== void 0 && node === upTo) return false;
			if (getComputedStyle(node).display === "none") return true;
			node = node.parentElement;
		}
		return false;
	}
	__name$4(isHidden, "isHidden");
	function isSelectableInput(element) {
		return element instanceof HTMLInputElement && "select" in element;
	}
	__name$4(isSelectableInput, "isSelectableInput");
	function focus(element, { select = false } = {}) {
		if (element && element.focus) {
			const previouslyFocusedElement = document.activeElement;
			element.focus({ preventScroll: true });
			if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
		}
	}
	__name$4(focus, "focus");
	var focusScopesStack = createFocusScopesStack();
	function createFocusScopesStack() {
		let stack = [];
		return {
			add(focusScope) {
				const activeFocusScope = stack[0];
				if (focusScope !== activeFocusScope) activeFocusScope?.pause();
				stack = arrayRemove(stack, focusScope);
				stack.unshift(focusScope);
			},
			remove(focusScope) {
				stack = arrayRemove(stack, focusScope);
				stack[0]?.resume();
			}
		};
	}
	__name$4(createFocusScopesStack, "createFocusScopesStack");
	function arrayRemove(array, item) {
		const updatedArray = [...array];
		const index = updatedArray.indexOf(item);
		if (index !== -1) updatedArray.splice(index, 1);
		return updatedArray;
	}
	__name$4(arrayRemove, "arrayRemove");
	function removeLinks(items) {
		return items.filter((item) => item.tagName !== "A");
	}
	__name$4(removeLinks, "removeLinks");
	init_compat_module();
	var __defProp$3 = Object.defineProperty;
	var __name$3 = (target, value) => __defProp$3(target, "name", {
		value,
		configurable: true
	});
	var Portal = D$1(__name$3(function Portal2(props, forwardedRef) {
		const { container: containerProp, ...portalProps } = props;
		const [mounted, setMounted] = d$1(false);
		useLayoutEffect2(() => setMounted(true), []);
		const container = containerProp || mounted && globalThis?.document?.body;
		return container ? $(u$3(Primitive.div, {
			...portalProps,
			ref: forwardedRef
		}), container) : null;
	}, "Portal"));
	init_compat_module();
	var __defProp$2 = Object.defineProperty;
	var __name$2 = (target, value) => __defProp$2(target, "name", {
		value,
		configurable: true
	});
	function useStateMachine(initialState, machine) {
		return y$1((state, event) => {
			return machine[state][event] ?? state;
		}, initialState);
	}
	__name$2(useStateMachine, "useStateMachine");
	var Presence = __name$2((props) => {
		const { present, children } = props;
		const presence = usePresence(present);
		const child = typeof children === "function" ? children({ present: presence.isPresent }) : L$3.only(children);
		const ref = useStableComposedRefs(presence.ref, getElementRef(child));
		return typeof children === "function" || presence.isPresent ? mn(child, { ref }) : null;
	}, "Presence");
	function usePresence(present) {
		const [node, setNode] = d$1();
		const stylesRef = A$2(null);
		const prevPresentRef = A$2(present);
		const prevAnimationNameRef = A$2("none");
		const mountAnimationNameRef = A$2(void 0);
		const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
			mounted: {
				UNMOUNT: "unmounted",
				ANIMATION_OUT: "unmountSuspended"
			},
			unmountSuspended: {
				MOUNT: "mounted",
				ANIMATION_END: "unmounted"
			},
			unmounted: { MOUNT: "mounted" }
		});
		h$1(() => {
			if (state === "mounted") {
				prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
				mountAnimationNameRef.current = void 0;
			} else prevAnimationNameRef.current = "none";
		}, [state]);
		useLayoutEffect2(() => {
			const styles = stylesRef.current;
			const wasPresent = prevPresentRef.current;
			if (wasPresent !== present) {
				const prevAnimationName = prevAnimationNameRef.current;
				const currentAnimationName = getAnimationName(styles);
				if (present) {
					mountAnimationNameRef.current = currentAnimationName;
					send("MOUNT");
				} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
				else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
				else send("UNMOUNT");
				prevPresentRef.current = present;
			}
		}, [present, send]);
		useLayoutEffect2(() => {
			if (node) {
				let timeoutId;
				const ownerWindow = node.ownerDocument.defaultView ?? window;
				const handleAnimationEnd = __name$2((event) => {
					const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
					if (event.target === node && isCurrentAnimation) {
						send("ANIMATION_END");
						if (!prevPresentRef.current) {
							const currentFillMode = node.style.animationFillMode;
							node.style.animationFillMode = "forwards";
							timeoutId = ownerWindow.setTimeout(() => {
								if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
							});
						}
					}
				}, "handleAnimationEnd");
				const handleAnimationStart = __name$2((event) => {
					if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
				}, "handleAnimationStart");
				node.addEventListener("animationstart", handleAnimationStart);
				node.addEventListener("animationcancel", handleAnimationEnd);
				node.addEventListener("animationend", handleAnimationEnd);
				return () => {
					ownerWindow.clearTimeout(timeoutId);
					node.removeEventListener("animationstart", handleAnimationStart);
					node.removeEventListener("animationcancel", handleAnimationEnd);
					node.removeEventListener("animationend", handleAnimationEnd);
				};
			} else send("ANIMATION_END");
		}, [node, send]);
		return {
			isPresent: ["mounted", "unmountSuspended"].includes(state),
			ref: q$1((node2) => {
				if (node2) {
					const styles = getComputedStyle(node2);
					stylesRef.current = styles;
					mountAnimationNameRef.current = getAnimationName(styles);
				} else stylesRef.current = null;
				setNode(node2);
			}, [])
		};
	}
	__name$2(usePresence, "usePresence");
	function setRef(ref, value) {
		if (typeof ref === "function") return ref(value);
		else if (ref !== null && ref !== void 0) ref.current = value;
	}
	__name$2(setRef, "setRef");
	function useStableComposedRefs(...refs) {
		const refsRef = A$2(refs);
		refsRef.current = refs;
		return q$1((node) => {
			const currentRefs = refsRef.current;
			let hasCleanup = false;
			const cleanups = currentRefs.map((ref) => {
				const cleanup = setRef(ref, node);
				if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
				return cleanup;
			});
			if (hasCleanup) return () => {
				for (let i = 0; i < cleanups.length; i++) {
					const cleanup = cleanups[i];
					if (typeof cleanup === "function") cleanup();
					else setRef(currentRefs[i], null);
				}
			};
		}, []);
	}
	__name$2(useStableComposedRefs, "useStableComposedRefs");
	function getAnimationName(styles) {
		return styles?.animationName || "none";
	}
	__name$2(getAnimationName, "getAnimationName");
	function getElementRef(element) {
		let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
		let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
		if (mayWarn) return element.ref;
		getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
		mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
		if (mayWarn) return element.props.ref;
		return element.props.ref || element.ref;
	}
	__name$2(getElementRef, "getElementRef");
	init_compat_module();
	var __defProp$1 = Object.defineProperty;
	var __name$1 = (target, value) => __defProp$1(target, "name", {
		value,
		configurable: true
	});
	var count = 0;
	var guards = null;
	function FocusGuards(props) {
		useFocusGuards();
		return props.children;
	}
	__name$1(FocusGuards, "FocusGuards");
	function useFocusGuards() {
		h$1(() => {
			if (!guards) guards = {
				start: createFocusGuard(),
				end: createFocusGuard()
			};
			const { start, end } = guards;
			if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
			if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
			count++;
			return () => {
				if (count === 1) {
					guards?.start.remove();
					guards?.end.remove();
					guards = null;
				}
				count = Math.max(0, count - 1);
			};
		}, []);
	}
	__name$1(useFocusGuards, "useFocusGuards");
	function createFocusGuard() {
		const element = document.createElement("span");
		element.setAttribute("data-radix-focus-guard", "");
		element.tabIndex = 0;
		element.style.outline = "none";
		element.style.opacity = "0";
		element.style.position = "fixed";
		element.style.pointerEvents = "none";
		return element;
	}
	__name$1(createFocusGuard, "createFocusGuard");
	var getDefaultParent = function(originalTarget) {
		if (typeof document === "undefined") return null;
		return (Array.isArray(originalTarget) ? originalTarget[0] : originalTarget).ownerDocument.body;
	};
	var counterMap = new WeakMap();
	var uncontrolledNodes = new WeakMap();
	var markerMap = {};
	var lockCount = 0;
	var unwrapHost = function(node) {
		return node && (node.host || unwrapHost(node.parentNode));
	};
	var correctTargets = function(parent, targets) {
		return targets.map(function(target) {
			if (parent.contains(target)) return target;
			var correctedTarget = unwrapHost(target);
			if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
			console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
			return null;
		}).filter(function(x) {
			return Boolean(x);
		});
	};
	var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
		var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
		if (!markerMap[markerName]) markerMap[markerName] = new WeakMap();
		var markerCounter = markerMap[markerName];
		var hiddenNodes = [];
		var elementsToKeep = new Set();
		var elementsToStop = new Set(targets);
		var keep = function(el) {
			if (!el || elementsToKeep.has(el)) return;
			elementsToKeep.add(el);
			keep(el.parentNode);
		};
		targets.forEach(keep);
		var deep = function(parent) {
			if (!parent || elementsToStop.has(parent)) return;
			Array.prototype.forEach.call(parent.children, function(node) {
				if (elementsToKeep.has(node)) deep(node);
				else try {
					var attr = node.getAttribute(controlAttribute);
					var alreadyHidden = attr !== null && attr !== "false";
					var counterValue = (counterMap.get(node) || 0) + 1;
					var markerValue = (markerCounter.get(node) || 0) + 1;
					counterMap.set(node, counterValue);
					markerCounter.set(node, markerValue);
					hiddenNodes.push(node);
					if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
					if (markerValue === 1) node.setAttribute(markerName, "true");
					if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
				} catch (e) {
					console.error("aria-hidden: cannot operate on ", node, e);
				}
			});
		};
		deep(parentNode);
		elementsToKeep.clear();
		lockCount++;
		return function() {
			hiddenNodes.forEach(function(node) {
				var counterValue = counterMap.get(node) - 1;
				var markerValue = markerCounter.get(node) - 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				if (!counterValue) {
					if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
					uncontrolledNodes.delete(node);
				}
				if (!markerValue) node.removeAttribute(markerName);
			});
			lockCount--;
			if (!lockCount) {
				counterMap = new WeakMap();
				counterMap = new WeakMap();
				uncontrolledNodes = new WeakMap();
				markerMap = {};
			}
		};
	};
	var hideOthers = function(originalTarget, parentNode, markerName) {
		if (markerName === void 0) markerName = "data-aria-hidden";
		var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
		var activeParentNode = parentNode || getDefaultParent(originalTarget);
		if (!activeParentNode) return function() {
			return null;
		};
		targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
		return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
	};
	init_compat_module();
	var __defProp = Object.defineProperty;
	var __name = (target, value) => __defProp(target, "name", {
		value,
		configurable: true
	});
	var DIALOG_NAME = "Dialog";
	var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
	var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
	var Dialog = __name((props) => {
		const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
		const triggerRef = A$2(null);
		const contentRef = A$2(null);
		const [open, setOpen] = useControllableState({
			prop: openProp,
			defaultProp: defaultOpen ?? false,
			onChange: onOpenChange,
			caller: DIALOG_NAME
		});
		const [titleCount, setTitleCount] = d$1(0);
		const [descriptionCount, setDescriptionCount] = d$1(0);
		return u$3(DialogProvider, {
			scope: __scopeDialog,
			triggerRef,
			contentRef,
			contentId: useId(),
			titleId: useId(),
			descriptionId: useId(),
			titlePresent: titleCount > 0,
			descriptionPresent: descriptionCount > 0,
			setTitleCount,
			setDescriptionCount,
			open,
			onOpenChange: setOpen,
			onOpenToggle: q$1(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
			modal,
			children
		});
	}, "Dialog");
	var PORTAL_NAME = "DialogPortal";
	var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
	var DialogPortal = __name((props) => {
		const { __scopeDialog, forceMount, children, container } = props;
		const context = useDialogContext(PORTAL_NAME, __scopeDialog);
		return u$3(PortalProvider, {
			scope: __scopeDialog,
			forceMount,
			children: L$3.map(children, (child) => u$3(Presence, {
				present: forceMount || context.open,
				children: u$3(Portal, {
					asChild: true,
					container,
					children: child
				})
			}))
		});
	}, "DialogPortal");
	var CONTENT_NAME = "DialogContent";
	var DialogContent$1 = D$1(__name(function DialogContent2(props, forwardedRef) {
		const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
		const { forceMount = portalContext.forceMount, ...contentProps } = props;
		const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
		return u$3(Presence, {
			present: forceMount || context.open,
			children: context.modal ? u$3(DialogContentModal, {
				...contentProps,
				ref: forwardedRef
			}) : u$3(DialogContentNonModal, {
				...contentProps,
				ref: forwardedRef
			})
		});
	}, "DialogContent"));
	var DialogContentModal = D$1(__name(function DialogContentModal2(props, forwardedRef) {
		const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
		const contentRef = A$2(null);
		const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
		h$1(() => {
			const content = contentRef.current;
			if (content) return hideOthers(content);
		}, []);
		return u$3(DialogContentImpl, {
			...props,
			ref: composedRefs,
			trapFocus: context.open,
			disableOutsidePointerEvents: context.open,
			onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
				event.preventDefault();
				context.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
				const originalEvent = event.detail.originalEvent;
				const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
				if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
			}),
			onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
		});
	}, "DialogContentModal"));
	var DialogContentNonModal = D$1(__name(function DialogContentNonModal2(props, forwardedRef) {
		const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
		const hasInteractedOutsideRef = A$2(false);
		const hasPointerDownOutsideRef = A$2(false);
		return u$3(DialogContentImpl, {
			...props,
			ref: forwardedRef,
			trapFocus: false,
			disableOutsidePointerEvents: false,
			onCloseAutoFocus: (event) => {
				props.onCloseAutoFocus?.(event);
				if (!event.defaultPrevented) {
					if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
					event.preventDefault();
				}
				hasInteractedOutsideRef.current = false;
				hasPointerDownOutsideRef.current = false;
			},
			onInteractOutside: (event) => {
				props.onInteractOutside?.(event);
				if (!event.defaultPrevented) {
					hasInteractedOutsideRef.current = true;
					if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
				}
				const target = event.target;
				if (context.triggerRef.current?.contains(target)) event.preventDefault();
				if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
			}
		});
	}, "DialogContentNonModal"));
	var DialogContentImpl = D$1(__name(function DialogContentImpl2(props, forwardedRef) {
		const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
		const context = useDialogContext(CONTENT_NAME, __scopeDialog);
		useFocusGuards();
		return u$3(S, { children: u$3(FocusScope, {
			asChild: true,
			loop: true,
			trapped: trapFocus,
			onMountAutoFocus: onOpenAutoFocus,
			onUnmountAutoFocus: onCloseAutoFocus,
			children: u$3(DismissableLayer, {
				role: "dialog",
				id: context.contentId,
				"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
				"aria-labelledby": context.titlePresent ? context.titleId : void 0,
				"data-state": getState(context.open),
				...contentProps,
				ref: forwardedRef,
				deferPointerDownOutside: true,
				onDismiss: () => context.onOpenChange(false)
			})
		}) });
	}, "DialogContentImpl"));
	var TITLE_NAME = "DialogTitle";
	var DialogTitle = D$1(__name(function DialogTitle2(props, forwardedRef) {
		const { __scopeDialog, ...titleProps } = props;
		const context = useDialogContext(TITLE_NAME, __scopeDialog);
		const { setTitleCount } = context;
		useLayoutEffect2(() => {
			setTitleCount((count) => count + 1);
			return () => setTitleCount((count) => count - 1);
		}, [setTitleCount]);
		return u$3(Primitive.h2, {
			id: context.titleId,
			...titleProps,
			ref: forwardedRef
		});
	}, "DialogTitle"));
	var CLOSE_NAME = "DialogClose";
	var DialogClose = D$1(__name(function DialogClose2(props, forwardedRef) {
		const { __scopeDialog, ...closeProps } = props;
		const context = useDialogContext(CLOSE_NAME, __scopeDialog);
		return u$3(Primitive.button, {
			type: "button",
			...closeProps,
			ref: forwardedRef,
			onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
		});
	}, "DialogClose"));
	function getState(open) {
		return open ? "open" : "closed";
	}
	__name(getState, "getState");
	var isString$1 = (obj) => typeof obj === "string";
	var defer = () => {
		let res;
		let rej;
		const promise = new Promise((resolve, reject) => {
			res = resolve;
			rej = reject;
		});
		promise.resolve = res;
		promise.reject = rej;
		return promise;
	};
	var makeString = (object) => {
		if (object == null) return "";
		return String(object);
	};
	var copy = (a, s, t) => {
		a.forEach((m) => {
			if (s[m]) t[m] = s[m];
		});
	};
	var lastOfPathSeparatorRegExp = /###/g;
	var cleanKey = (key) => key && key.includes("###") ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
	var canNotTraverseDeeper = (object) => !object || isString$1(object);
	var getLastOfPath = (object, path, Empty) => {
		const stack = !isString$1(path) ? path : path.split(".");
		let stackIndex = 0;
		while (stackIndex < stack.length - 1) {
			if (canNotTraverseDeeper(object)) return {};
			const key = cleanKey(stack[stackIndex]);
			if (!object[key] && Empty) object[key] = new Empty();
			if (Object.prototype.hasOwnProperty.call(object, key)) object = object[key];
			else object = {};
			++stackIndex;
		}
		if (canNotTraverseDeeper(object)) return {};
		return {
			obj: object,
			k: cleanKey(stack[stackIndex])
		};
	};
	var setPath = (object, path, newValue) => {
		const { obj, k } = getLastOfPath(object, path, Object);
		if (obj !== void 0 || path.length === 1) {
			obj[k] = newValue;
			return;
		}
		let e = path[path.length - 1];
		let p = path.slice(0, path.length - 1);
		let last = getLastOfPath(object, p, Object);
		while (last.obj === void 0 && p.length) {
			e = `${p[p.length - 1]}.${e}`;
			p = p.slice(0, p.length - 1);
			last = getLastOfPath(object, p, Object);
			if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") last.obj = void 0;
		}
		last.obj[`${last.k}.${e}`] = newValue;
	};
	var pushPath = (object, path, newValue, concat) => {
		const { obj, k } = getLastOfPath(object, path, Object);
		obj[k] = obj[k] || [];
		obj[k].push(newValue);
	};
	var getPath = (object, path) => {
		const { obj, k } = getLastOfPath(object, path);
		if (!obj) return void 0;
		if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
		return obj[k];
	};
	var getPathWithDefaults = (data, defaultData, key) => {
		const value = getPath(data, key);
		if (value !== void 0) return value;
		return getPath(defaultData, key);
	};
	var deepExtend = (target, source, overwrite) => {
		for (const prop in source) if (prop !== "__proto__" && prop !== "constructor") {
			if (Object.prototype.hasOwnProperty.call(target, prop)) {
				if (isString$1(target[prop]) || target[prop] instanceof String || isString$1(source[prop]) || source[prop] instanceof String) {
					if (overwrite) target[prop] = source[prop];
				} else deepExtend(target[prop], source[prop], overwrite);
			} else target[prop] = source[prop];
		}
		return target;
	};
	var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	var _entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;",
		"/": "&#x2F;"
	};
	var escape = (data) => {
		if (isString$1(data)) return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
		return data;
	};
	var RegExpCache = class {
		constructor(capacity) {
			this.capacity = capacity;
			this.regExpMap = new Map();
			this.regExpQueue = [];
		}
		getRegExp(pattern) {
			const regExpFromCache = this.regExpMap.get(pattern);
			if (regExpFromCache !== void 0) return regExpFromCache;
			const regExpNew = new RegExp(pattern);
			if (this.regExpQueue.length === this.capacity) this.regExpMap.delete(this.regExpQueue.shift());
			this.regExpMap.set(pattern, regExpNew);
			this.regExpQueue.push(pattern);
			return regExpNew;
		}
	};
	var chars = [
		" ",
		",",
		"?",
		"!",
		";"
	];
	var looksLikeObjectPathRegExpCache = new RegExpCache(20);
	var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
		nsSeparator = nsSeparator || "";
		keySeparator = keySeparator || "";
		const possibleChars = chars.filter((c) => !nsSeparator.includes(c) && !keySeparator.includes(c));
		if (possibleChars.length === 0) return true;
		const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
		let matched = !r.test(key);
		if (!matched) {
			const ki = key.indexOf(keySeparator);
			if (ki > 0 && !r.test(key.substring(0, ki))) matched = true;
		}
		return matched;
	};
	var deepFind = (obj, path, keySeparator = ".") => {
		if (!obj) return void 0;
		if (obj[path]) {
			if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
			return obj[path];
		}
		const tokens = path.split(keySeparator);
		let current = obj;
		for (let i = 0; i < tokens.length;) {
			if (!current || typeof current !== "object") return;
			let next;
			let nextPath = "";
			for (let j = i; j < tokens.length; ++j) {
				if (j !== i) nextPath += keySeparator;
				nextPath += tokens[j];
				next = current[nextPath];
				if (next !== void 0) {
					if ([
						"string",
						"number",
						"boolean"
					].includes(typeof next) && j < tokens.length - 1) continue;
					i += j - i + 1;
					break;
				}
			}
			current = next;
		}
		return current;
	};
	var getCleanedCode = (code) => code?.replace(/_/g, "-");
	var consoleLogger = {
		type: "logger",
		log(args) {
			this.output("log", args);
		},
		warn(args) {
			this.output("warn", args);
		},
		error(args) {
			this.output("error", args);
		},
		output(type, args) {
			console?.[type]?.apply?.(console, args);
		}
	};
	var baseLogger = new class Logger {
		constructor(concreteLogger, options = {}) {
			this.init(concreteLogger, options);
		}
		init(concreteLogger, options = {}) {
			this.prefix = options.prefix || "i18next:";
			this.logger = concreteLogger || consoleLogger;
			this.options = options;
			this.debug = options.debug;
		}
		log(...args) {
			return this.forward(args, "log", "", true);
		}
		warn(...args) {
			return this.forward(args, "warn", "", true);
		}
		error(...args) {
			return this.forward(args, "error", "");
		}
		deprecate(...args) {
			return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
		}
		forward(args, lvl, prefix, debugOnly) {
			if (debugOnly && !this.debug) return null;
			args = args.map((a) => isString$1(a) ? a.replace(/[\r\n\x00-\x1F\x7F]/g, " ") : a);
			if (isString$1(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
			return this.logger[lvl](args);
		}
		create(moduleName) {
			return new Logger(this.logger, {
				prefix: `${this.prefix}:${moduleName}:`,
				...this.options
			});
		}
		clone(options) {
			options = options || this.options;
			options.prefix = options.prefix || this.prefix;
			return new Logger(this.logger, options);
		}
	}();
	var EventEmitter = class {
		constructor() {
			this.observers = {};
		}
		on(events, listener) {
			events.split(" ").forEach((event) => {
				if (!this.observers[event]) this.observers[event] = new Map();
				const numListeners = this.observers[event].get(listener) || 0;
				this.observers[event].set(listener, numListeners + 1);
			});
			return this;
		}
		off(event, listener) {
			if (!this.observers[event]) return;
			if (!listener) {
				delete this.observers[event];
				return;
			}
			this.observers[event].delete(listener);
		}
		once(event, listener) {
			const wrapper = (...args) => {
				listener(...args);
				this.off(event, wrapper);
			};
			this.on(event, wrapper);
			return this;
		}
		emit(event, ...args) {
			if (this.observers[event]) Array.from(this.observers[event].entries()).forEach(([observer, numTimesAdded]) => {
				for (let i = 0; i < numTimesAdded; i++) observer(...args);
			});
			if (this.observers["*"]) Array.from(this.observers["*"].entries()).forEach(([observer, numTimesAdded]) => {
				for (let i = 0; i < numTimesAdded; i++) observer(event, ...args);
			});
		}
	};
	var ResourceStore = class extends EventEmitter {
		constructor(data, options = {
			ns: ["translation"],
			defaultNS: "translation"
		}) {
			super();
			this.data = data || {};
			this.options = options;
			if (this.options.keySeparator === void 0) this.options.keySeparator = ".";
			if (this.options.ignoreJSONStructure === void 0) this.options.ignoreJSONStructure = true;
		}
		addNamespaces(ns) {
			if (!this.options.ns.includes(ns)) this.options.ns.push(ns);
		}
		removeNamespaces(ns) {
			const index = this.options.ns.indexOf(ns);
			if (index > -1) this.options.ns.splice(index, 1);
		}
		getResource(lng, ns, key, options = {}) {
			const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
			const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
			let path;
			if (lng.includes(".")) path = lng.split(".");
			else {
				path = [lng, ns];
				if (key) {
					if (Array.isArray(key)) path.push(...key);
					else if (isString$1(key) && keySeparator) path.push(...key.split(keySeparator));
					else path.push(key);
				}
			}
			const result = getPath(this.data, path);
			if (!result && !ns && !key && lng.includes(".")) {
				lng = path[0];
				ns = path[1];
				key = path.slice(2).join(".");
			}
			if (result || !ignoreJSONStructure || !isString$1(key)) return result;
			return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
		}
		addResource(lng, ns, key, value, options = { silent: false }) {
			const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
			let path = [lng, ns];
			if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
			if (lng.includes(".")) {
				path = lng.split(".");
				value = ns;
				ns = path[1];
			}
			this.addNamespaces(ns);
			setPath(this.data, path, value);
			if (!options.silent) this.emit("added", lng, ns, key, value);
		}
		addResources(lng, ns, resources, options = { silent: false }) {
			for (const m in resources) if (isString$1(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], { silent: true });
			if (!options.silent) this.emit("added", lng, ns, resources);
		}
		addResourceBundle(lng, ns, resources, deep, overwrite, options = {
			silent: false,
			skipCopy: false
		}) {
			let path = [lng, ns];
			if (lng.includes(".")) {
				path = lng.split(".");
				deep = resources;
				resources = ns;
				ns = path[1];
			}
			this.addNamespaces(ns);
			let pack = getPath(this.data, path) || {};
			if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
			if (deep) deepExtend(pack, resources, overwrite);
			else pack = {
				...pack,
				...resources
			};
			setPath(this.data, path, pack);
			if (!options.silent) this.emit("added", lng, ns, resources);
		}
		removeResourceBundle(lng, ns) {
			if (this.hasResourceBundle(lng, ns)) delete this.data[lng][ns];
			this.removeNamespaces(ns);
			this.emit("removed", lng, ns);
		}
		hasResourceBundle(lng, ns) {
			return this.getResource(lng, ns) !== void 0;
		}
		getResourceBundle(lng, ns) {
			if (!ns) ns = this.options.defaultNS;
			return this.getResource(lng, ns);
		}
		getDataByLanguage(lng) {
			return this.data[lng];
		}
		hasLanguageSomeTranslations(lng) {
			const data = this.getDataByLanguage(lng);
			return !!(data && Object.keys(data) || []).find((v) => data[v] && Object.keys(data[v]).length > 0);
		}
		toJSON() {
			return this.data;
		}
	};
	var postProcessor = {
		processors: {},
		addPostProcessor(module) {
			this.processors[module.name] = module;
		},
		handle(processors, value, key, options, translator) {
			processors.forEach((processor) => {
				value = this.processors[processor]?.process(value, key, options, translator) ?? value;
			});
			return value;
		}
	};
	var PATH_KEY = Symbol("i18next/PATH_KEY");
	function createProxy() {
		const state = [];
		const handler = Object.create(null);
		let proxy;
		handler.get = (target, key) => {
			proxy?.revoke?.();
			if (key === PATH_KEY) return state;
			state.push(key);
			proxy = Proxy.revocable(target, handler);
			return proxy.proxy;
		};
		return Proxy.revocable(Object.create(null), handler).proxy;
	}
	function keysFromSelector(selector, opts) {
		const { [PATH_KEY]: path } = selector(createProxy());
		const keySeparator = opts?.keySeparator ?? ".";
		const nsSeparator = opts?.nsSeparator ?? ":";
		const strict = opts?.enableSelector === "strict";
		if (path.length > 1 && nsSeparator) {
			const ns = opts?.ns;
			const nsList = strict ? Array.isArray(ns) ? ns : ns ? [ns] : null : Array.isArray(ns) ? ns : null;
			if (nsList) {
				if ((strict ? nsList : nsList.length > 1 ? nsList.slice(1) : []).includes(path[0])) return `${path[0]}${nsSeparator}${path.slice(1).join(keySeparator)}`;
			}
		}
		return path.join(keySeparator);
	}
	var shouldHandleAsObject = (res) => !isString$1(res) && typeof res !== "boolean" && typeof res !== "number";
	var Translator = class Translator extends EventEmitter {
		constructor(services, options = {}) {
			super();
			copy([
				"resourceStore",
				"languageUtils",
				"pluralResolver",
				"interpolator",
				"backendConnector",
				"i18nFormat",
				"utils"
			], services, this);
			this.options = options;
			if (this.options.keySeparator === void 0) this.options.keySeparator = ".";
			this.logger = baseLogger.create("translator");
			this.checkedLoadedFor = {};
		}
		changeLanguage(lng) {
			if (lng) this.language = lng;
		}
		exists(key, o = { interpolation: {} }) {
			const opt = { ...o };
			if (key == null) return false;
			const resolved = this.resolve(key, opt);
			if (resolved?.res === void 0) return false;
			const isObject = shouldHandleAsObject(resolved.res);
			if (opt.returnObjects === false && isObject) return false;
			return true;
		}
		extractFromKey(key, opt) {
			let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
			if (nsSeparator === void 0) nsSeparator = ":";
			const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
			let namespaces = opt.ns || this.options.defaultNS || [];
			const wouldCheckForNsInKey = nsSeparator && key.includes(nsSeparator);
			const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
			if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
				const m = key.match(this.interpolator.nestingRegexp);
				if (m && m.length > 0) return {
					key,
					namespaces: isString$1(namespaces) ? [namespaces] : namespaces
				};
				const parts = key.split(nsSeparator);
				if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.includes(parts[0])) namespaces = parts.shift();
				key = parts.join(keySeparator);
			}
			return {
				key,
				namespaces: isString$1(namespaces) ? [namespaces] : namespaces
			};
		}
		translate(keys, o, lastKey) {
			let opt = typeof o === "object" ? { ...o } : o;
			if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) opt = this.options.overloadTranslationOptionHandler(arguments);
			if (typeof opt === "object") opt = { ...opt };
			if (!opt) opt = {};
			if (keys == null) return "";
			if (typeof keys === "function") keys = keysFromSelector(keys, {
				...this.options,
				...opt
			});
			if (!Array.isArray(keys)) keys = [String(keys)];
			keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
				...this.options,
				...opt
			}) : String(k));
			const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
			const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
			const { key, namespaces } = this.extractFromKey(keys[keys.length - 1], opt);
			const namespace = namespaces[namespaces.length - 1];
			let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
			if (nsSeparator === void 0) nsSeparator = ":";
			const lng = opt.lng || this.language;
			const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
			if (lng?.toLowerCase() === "cimode") {
				if (appendNamespaceToCIMode) {
					if (returnDetails) return {
						res: `${namespace}${nsSeparator}${key}`,
						usedKey: key,
						exactUsedKey: key,
						usedLng: lng,
						usedNS: namespace,
						usedParams: this.getUsedParamsDetails(opt)
					};
					return `${namespace}${nsSeparator}${key}`;
				}
				if (returnDetails) return {
					res: key,
					usedKey: key,
					exactUsedKey: key,
					usedLng: lng,
					usedNS: namespace,
					usedParams: this.getUsedParamsDetails(opt)
				};
				return key;
			}
			const resolved = this.resolve(keys, opt);
			let res = resolved?.res;
			const resUsedKey = resolved?.usedKey || key;
			const resExactUsedKey = resolved?.exactUsedKey || key;
			const noObject = [
				"[object Number]",
				"[object Function]",
				"[object RegExp]"
			];
			const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
			const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
			const needsPluralHandling = opt.count !== void 0 && !isString$1(opt.count);
			const hasDefaultValue = Translator.hasDefaultValue(opt);
			const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
			const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, { ordinal: false }) : "";
			const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
			const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
			let resForObjHndl = res;
			if (handleAsObjectInI18nFormat && !res && hasDefaultValue) resForObjHndl = defaultValue;
			const handleAsObject = shouldHandleAsObject(resForObjHndl);
			const resType = Object.prototype.toString.apply(resForObjHndl);
			if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && !noObject.includes(resType) && !(isString$1(joinArrays) && Array.isArray(resForObjHndl))) {
				if (!opt.returnObjects && !this.options.returnObjects) {
					if (!this.options.returnedObjectHandler) this.logger.warn("accessing an object - but returnObjects options is not enabled!");
					const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
						...opt,
						ns: namespaces
					}) : `key '${key} (${this.language})' returned an object instead of string.`;
					if (returnDetails) {
						resolved.res = r;
						resolved.usedParams = this.getUsedParamsDetails(opt);
						return resolved;
					}
					return r;
				}
				if (keySeparator) {
					const resTypeIsArray = Array.isArray(resForObjHndl);
					const copy = resTypeIsArray ? [] : {};
					const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
					for (const m in resForObjHndl) if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
						const deepKey = `${newKeyToUse}${keySeparator}${m}`;
						if (hasDefaultValue && !res) copy[m] = this.translate(deepKey, {
							...opt,
							defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
							joinArrays: false,
							ns: namespaces
						});
						else copy[m] = this.translate(deepKey, {
							...opt,
							joinArrays: false,
							ns: namespaces
						});
						if (copy[m] === deepKey) copy[m] = resForObjHndl[m];
					}
					res = copy;
				}
			} else if (handleAsObjectInI18nFormat && isString$1(joinArrays) && Array.isArray(res)) {
				res = res.join(joinArrays);
				if (res) res = this.extendTranslation(res, keys, opt, lastKey);
			} else {
				let usedDefault = false;
				let usedKey = false;
				if (!this.isValidLookup(res) && hasDefaultValue) {
					usedDefault = true;
					res = defaultValue;
				}
				if (!this.isValidLookup(res)) {
					usedKey = true;
					res = key;
				}
				const resForMissing = (opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && usedKey ? void 0 : res;
				const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
				if (usedKey || usedDefault || updateMissing) {
					this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, needsPluralHandling && !updateMissing ? `${key}${this.pluralResolver.getSuffix(lng, opt.count, opt)}` : key, updateMissing ? defaultValue : res);
					if (keySeparator) {
						const fk = this.resolve(key, {
							...opt,
							keySeparator: false
						});
						if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
					}
					let lngs = [];
					const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
					if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) for (let i = 0; i < fallbackLngs.length; i++) lngs.push(fallbackLngs[i]);
					else if (this.options.saveMissingTo === "all") lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
					else lngs.push(opt.lng || this.language);
					const send = (l, k, specificDefaultValue) => {
						const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
						if (this.options.missingKeyHandler) this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
						else if (this.backendConnector?.saveMissing) this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
						this.emit("missingKey", l, namespace, k, res);
					};
					if (this.options.saveMissing) {
						if (this.options.saveMissingPlurals && needsPluralHandling) lngs.forEach((language) => {
							const suffixes = this.pluralResolver.getSuffixes(language, opt);
							if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && !suffixes.includes(`${this.options.pluralSeparator}zero`)) suffixes.push(`${this.options.pluralSeparator}zero`);
							suffixes.forEach((suffix) => {
								send([language], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
							});
						});
						else send(lngs, key, defaultValue);
					}
				}
				res = this.extendTranslation(res, keys, opt, resolved, lastKey);
				if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}${nsSeparator}${key}`;
				if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
			}
			if (returnDetails) {
				resolved.res = res;
				resolved.usedParams = this.getUsedParamsDetails(opt);
				return resolved;
			}
			return res;
		}
		extendTranslation(res, key, opt, resolved, lastKey) {
			if (this.i18nFormat?.parse) res = this.i18nFormat.parse(res, {
				...this.options.interpolation.defaultVariables,
				...opt
			}, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, { resolved });
			else if (!opt.skipInterpolation) {
				if (opt.interpolation) this.interpolator.init({
					...opt,
					interpolation: {
						...this.options.interpolation,
						...opt.interpolation
					}
				});
				const skipOnVariables = isString$1(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
				let nestBef;
				if (skipOnVariables) {
					const nb = res.match(this.interpolator.nestingRegexp);
					nestBef = nb && nb.length;
				}
				let data = opt.replace && !isString$1(opt.replace) ? opt.replace : opt;
				if (this.options.interpolation.defaultVariables) data = {
					...this.options.interpolation.defaultVariables,
					...data
				};
				res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
				if (skipOnVariables) {
					const na = res.match(this.interpolator.nestingRegexp);
					const nestAft = na && na.length;
					if (nestBef < nestAft) opt.nest = false;
				}
				if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
				if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
					if (lastKey?.[0] === args[0] && !opt.context) {
						this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
						return null;
					}
					return this.translate(...args, key);
				}, opt);
				if (opt.interpolation) this.interpolator.reset();
			}
			const postProcess = opt.postProcess || this.options.postProcess;
			const postProcessorNames = isString$1(postProcess) ? [postProcess] : postProcess;
			if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
				i18nResolved: {
					...resolved,
					usedParams: this.getUsedParamsDetails(opt)
				},
				...opt
			} : opt, this);
			return res;
		}
		resolve(keys, opt = {}) {
			let found;
			let usedKey;
			let exactUsedKey;
			let usedLng;
			let usedNS;
			if (isString$1(keys)) keys = [keys];
			if (Array.isArray(keys)) keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
				...this.options,
				...opt
			}) : k);
			keys.forEach((k) => {
				if (this.isValidLookup(found)) return;
				const extracted = this.extractFromKey(k, opt);
				const key = extracted.key;
				usedKey = key;
				let namespaces = extracted.namespaces;
				if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
				const needsPluralHandling = opt.count !== void 0 && !isString$1(opt.count);
				const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
				const needsContextHandling = opt.context !== void 0 && (isString$1(opt.context) || typeof opt.context === "number") && opt.context !== "";
				const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
				namespaces.forEach((ns) => {
					if (this.isValidLookup(found)) return;
					usedNS = ns;
					if (!this.checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
						this.checkedLoadedFor[`${codes[0]}-${ns}`] = true;
						this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
					}
					codes.forEach((code) => {
						if (this.isValidLookup(found)) return;
						usedLng = code;
						const finalKeys = [key];
						if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
						else {
							let pluralSuffix;
							if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
							const zeroSuffix = `${this.options.pluralSeparator}zero`;
							const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
							if (needsPluralHandling) {
								if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
								finalKeys.push(key + pluralSuffix);
								if (needsZeroSuffixLookup) finalKeys.push(key + zeroSuffix);
							}
							if (needsContextHandling) {
								const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
								finalKeys.push(contextKey);
								if (needsPluralHandling) {
									if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
									finalKeys.push(contextKey + pluralSuffix);
									if (needsZeroSuffixLookup) finalKeys.push(contextKey + zeroSuffix);
								}
							}
						}
						let possibleKey;
						while (possibleKey = finalKeys.pop()) if (!this.isValidLookup(found)) {
							exactUsedKey = possibleKey;
							found = this.getResource(code, ns, possibleKey, opt);
						}
					});
				});
			});
			return {
				res: found,
				usedKey,
				exactUsedKey,
				usedLng,
				usedNS
			};
		}
		isValidLookup(res) {
			return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
		}
		getResource(code, ns, key, options = {}) {
			if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
			return this.resourceStore.getResource(code, ns, key, options);
		}
		getUsedParamsDetails(options = {}) {
			const optionsKeys = [
				"defaultValue",
				"ordinal",
				"context",
				"replace",
				"lng",
				"lngs",
				"fallbackLng",
				"ns",
				"keySeparator",
				"nsSeparator",
				"returnObjects",
				"returnDetails",
				"joinArrays",
				"postProcess",
				"interpolation"
			];
			const useOptionsReplaceForData = options.replace && !isString$1(options.replace);
			let data = useOptionsReplaceForData ? options.replace : options;
			if (useOptionsReplaceForData && typeof options.count !== "undefined") data = {
				...data,
				count: options.count
			};
			if (this.options.interpolation.defaultVariables) data = {
				...this.options.interpolation.defaultVariables,
				...data
			};
			if (!useOptionsReplaceForData) {
				data = { ...data };
				for (const key of optionsKeys) delete data[key];
			}
			return data;
		}
		static hasDefaultValue(options) {
			const prefix = "defaultValue";
			for (const option in options) if (Object.prototype.hasOwnProperty.call(options, option) && option.startsWith(prefix) && void 0 !== options[option]) return true;
			return false;
		}
	};
	var LanguageUtil = class {
		constructor(options) {
			this.options = options;
			this.supportedLngs = this.options.supportedLngs || false;
			this.logger = baseLogger.create("languageUtils");
		}
		getScriptPartFromCode(code) {
			code = getCleanedCode(code);
			if (!code || !code.includes("-")) return null;
			const p = code.split("-");
			if (p.length === 2) return null;
			p.pop();
			if (p[p.length - 1].toLowerCase() === "x") return null;
			return this.formatLanguageCode(p.join("-"));
		}
		getLanguagePartFromCode(code) {
			code = getCleanedCode(code);
			if (!code || !code.includes("-")) return code;
			const p = code.split("-");
			return this.formatLanguageCode(p[0]);
		}
		formatLanguageCode(code) {
			if (isString$1(code) && code.includes("-")) {
				let formattedCode;
				try {
					formattedCode = Intl.getCanonicalLocales(code)[0];
				} catch (e) {}
				if (formattedCode && this.options.lowerCaseLng) formattedCode = formattedCode.toLowerCase();
				if (formattedCode) return formattedCode;
				if (this.options.lowerCaseLng) return code.toLowerCase();
				return code;
			}
			return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
		}
		isSupportedCode(code) {
			if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) code = this.getLanguagePartFromCode(code);
			return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(code);
		}
		getBestMatchFromCodes(codes) {
			if (!codes) return null;
			let found;
			codes.forEach((code) => {
				if (found) return;
				const cleanedLng = this.formatLanguageCode(code);
				if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
			});
			if (!found && this.options.supportedLngs) codes.forEach((code) => {
				if (found) return;
				const lngScOnly = this.getScriptPartFromCode(code);
				if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
				const lngOnly = this.getLanguagePartFromCode(code);
				if (this.isSupportedCode(lngOnly)) return found = lngOnly;
				found = this.options.supportedLngs.find((supportedLng) => {
					if (supportedLng === lngOnly) return true;
					if (!supportedLng.includes("-") && !lngOnly.includes("-")) return false;
					if (supportedLng.includes("-") && !lngOnly.includes("-") && supportedLng.slice(0, supportedLng.indexOf("-")) === lngOnly) return true;
					if (supportedLng.startsWith(lngOnly) && lngOnly.length > 1) return true;
					return false;
				});
			});
			if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
			return found;
		}
		getFallbackCodes(fallbacks, code) {
			if (!fallbacks) return [];
			if (typeof fallbacks === "function") fallbacks = fallbacks(code);
			if (isString$1(fallbacks)) fallbacks = [fallbacks];
			if (Array.isArray(fallbacks)) return fallbacks;
			if (!code) return fallbacks.default || [];
			let found = fallbacks[code];
			if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
			if (!found) found = fallbacks[this.formatLanguageCode(code)];
			if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
			if (!found) found = fallbacks.default;
			return found || [];
		}
		toResolveHierarchy(code, fallbackCode) {
			const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
			const codes = [];
			const addCode = (c) => {
				if (!c) return;
				if (this.isSupportedCode(c)) codes.push(c);
				else this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
			};
			if (isString$1(code) && (code.includes("-") || code.includes("_"))) {
				if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
				if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
				if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
			} else if (isString$1(code)) addCode(this.formatLanguageCode(code));
			fallbackCodes.forEach((fc) => {
				if (!codes.includes(fc)) addCode(this.formatLanguageCode(fc));
			});
			return codes;
		}
	};
	var suffixesOrder = {
		zero: 0,
		one: 1,
		two: 2,
		few: 3,
		many: 4,
		other: 5
	};
	var dummyRule = {
		select: (count) => count === 1 ? "one" : "other",
		resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
	};
	var PluralResolver = class {
		constructor(languageUtils, options = {}) {
			this.languageUtils = languageUtils;
			this.options = options;
			this.logger = baseLogger.create("pluralResolver");
			this.pluralRulesCache = {};
		}
		clearCache() {
			this.pluralRulesCache = {};
		}
		getRule(code, options = {}) {
			const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
			const type = options.ordinal ? "ordinal" : "cardinal";
			const cacheKey = JSON.stringify({
				cleanedCode,
				type
			});
			if (cacheKey in this.pluralRulesCache) return this.pluralRulesCache[cacheKey];
			let rule;
			try {
				rule = new Intl.PluralRules(cleanedCode, { type });
			} catch (err) {
				if (typeof Intl === "undefined") {
					this.logger.error("No Intl support, please use an Intl polyfill!");
					return dummyRule;
				}
				if (!code.match(/-|_/)) return dummyRule;
				const lngPart = this.languageUtils.getLanguagePartFromCode(code);
				rule = this.getRule(lngPart, options);
			}
			this.pluralRulesCache[cacheKey] = rule;
			return rule;
		}
		needsPlural(code, options = {}) {
			let rule = this.getRule(code, options);
			if (!rule) rule = this.getRule("dev", options);
			return rule?.resolvedOptions().pluralCategories.length > 1;
		}
		getPluralFormsOfKey(code, key, options = {}) {
			return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
		}
		getSuffixes(code, options = {}) {
			let rule = this.getRule(code, options);
			if (!rule) rule = this.getRule("dev", options);
			if (!rule) return [];
			return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
		}
		getSuffix(code, count, options = {}) {
			const rule = this.getRule(code, options);
			if (rule) return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
			this.logger.warn(`no plural rule found for: ${code}`);
			return this.getSuffix("dev", count, options);
		}
	};
	var deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
		let path = getPathWithDefaults(data, defaultData, key);
		if (!path && ignoreJSONStructure && isString$1(key)) {
			path = deepFind(data, key, keySeparator);
			if (path === void 0) path = deepFind(defaultData, key, keySeparator);
		}
		return path;
	};
	var regexSafe = (val) => val.replace(/\$/g, "$$$$");
	var Interpolator = class {
		constructor(options = {}) {
			this.logger = baseLogger.create("interpolator");
			this.options = options;
			this.format = options?.interpolation?.format || ((value) => value);
			this.init(options);
		}
		init(options = {}) {
			if (!options.interpolation) options.interpolation = { escapeValue: true };
			const { escape: escape$1, escapeValue, useRawValueToEscape, prefix, prefixEscaped, suffix, suffixEscaped, formatSeparator, unescapeSuffix, unescapePrefix, nestingPrefix, nestingPrefixEscaped, nestingSuffix, nestingSuffixEscaped, nestingOptionsSeparator, maxReplaces, alwaysFormat } = options.interpolation;
			this.escape = escape$1 !== void 0 ? escape$1 : escape;
			this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
			this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
			this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
			this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
			this.formatSeparator = formatSeparator || ",";
			this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix ? regexEscape(unescapePrefix) : "-";
			this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix ? regexEscape(unescapeSuffix) : "";
			this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
			this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
			this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
			this.maxReplaces = maxReplaces || 1e3;
			this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
			this.resetRegExp();
		}
		reset() {
			if (this.options) this.init(this.options);
		}
		resetRegExp() {
			const getOrResetRegExp = (existingRegExp, pattern) => {
				if (existingRegExp?.source === pattern) {
					existingRegExp.lastIndex = 0;
					return existingRegExp;
				}
				return new RegExp(pattern, "g");
			};
			this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
			this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
			this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
		}
		interpolate(str, data, lng, options) {
			let match;
			let value;
			let replaces;
			const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
			const handleFormat = (key) => {
				if (!key.includes(this.formatSeparator)) {
					const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
					return this.alwaysFormat ? this.format(path, void 0, lng, {
						...options,
						...data,
						interpolationkey: key
					}) : path;
				}
				const p = key.split(this.formatSeparator);
				const k = p.shift().trim();
				const f = p.join(this.formatSeparator).trim();
				return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
					...options,
					...data,
					interpolationkey: k
				});
			};
			this.resetRegExp();
			if (!this.escapeValue && typeof str === "string" && /\$t\([^)]*\{[^}]*\{\{/.test(str)) this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");
			const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
			const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
			[{
				regex: this.regexpUnescape,
				safeValue: (val) => val
			}, {
				regex: this.regexp,
				safeValue: (val) => this.escapeValue ? this.escape(val) : val
			}].forEach((todo) => {
				replaces = 0;
				while (match = todo.regex.exec(str)) {
					const matchedVar = match[1].trim();
					value = handleFormat(matchedVar);
					if (value === void 0) {
						if (typeof missingInterpolationHandler === "function") {
							const temp = missingInterpolationHandler(str, match, options);
							value = isString$1(temp) ? temp : "";
						} else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) value = "";
						else if (skipOnVariables) {
							value = match[0];
							continue;
						} else {
							this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
							value = "";
						}
					} else if (!isString$1(value) && !this.useRawValueToEscape) value = makeString(value);
					const safeValue = todo.safeValue(value);
					str = str.replace(match[0], regexSafe(safeValue));
					if (skipOnVariables) {
						todo.regex.lastIndex += safeValue.length;
						todo.regex.lastIndex -= match[0].length;
					} else todo.regex.lastIndex = 0;
					replaces++;
					if (replaces >= this.maxReplaces) break;
				}
			});
			return str;
		}
		nest(str, fc, options = {}) {
			let match;
			let value;
			let clonedOptions;
			const handleHasOptions = (key, inheritedOptions) => {
				const sep = this.nestingOptionsSeparator;
				if (!key.includes(sep)) return key;
				const c = key.split(new RegExp(`${regexEscape(sep)}[ ]*{`));
				let optionsString = `{${c[1]}`;
				key = c[0];
				optionsString = this.interpolate(optionsString, clonedOptions);
				const matchedSingleQuotes = optionsString.match(/'/g);
				const matchedDoubleQuotes = optionsString.match(/"/g);
				if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || (matchedDoubleQuotes?.length ?? 0) % 2 !== 0) optionsString = optionsString.replace(/'/g, "\"");
				try {
					clonedOptions = JSON.parse(optionsString);
					if (inheritedOptions) clonedOptions = {
						...inheritedOptions,
						...clonedOptions
					};
				} catch (e) {
					this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
					return `${key}${sep}${optionsString}`;
				}
				if (clonedOptions.defaultValue && clonedOptions.defaultValue.includes(this.prefix)) delete clonedOptions.defaultValue;
				return key;
			};
			while (match = this.nestingRegexp.exec(str)) {
				let formatters = [];
				clonedOptions = { ...options };
				clonedOptions = clonedOptions.replace && !isString$1(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
				clonedOptions.applyPostProcessor = false;
				delete clonedOptions.defaultValue;
				const keyEndIndex = /{.*}/s.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
				if (keyEndIndex !== -1) {
					formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
					match[1] = match[1].slice(0, keyEndIndex);
				}
				value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
				if (value && match[0] === str && !isString$1(value)) return value;
				if (!isString$1(value)) value = makeString(value);
				if (!value) {
					this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
					value = "";
				}
				if (formatters.length) value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
					...options,
					interpolationkey: match[1].trim()
				}), value.trim());
				str = str.replace(match[0], value);
				this.regexp.lastIndex = 0;
			}
			return str;
		}
	};
	var parseFormatStr = (formatStr) => {
		let formatName = formatStr.toLowerCase().trim();
		const formatOptions = {};
		if (formatStr.includes("(")) {
			const p = formatStr.split("(");
			formatName = p[0].toLowerCase().trim();
			const optStr = p[1].slice(0, -1);
			if (formatName === "currency" && !optStr.includes(":")) {
				if (!formatOptions.currency) formatOptions.currency = optStr.trim();
			} else if (formatName === "relativetime" && !optStr.includes(":")) {
				if (!formatOptions.range) formatOptions.range = optStr.trim();
			} else optStr.split(";").forEach((opt) => {
				if (opt) {
					const [key, ...rest] = opt.split(":");
					const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
					const trimmedKey = key.trim();
					if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
					if (val === "false") formatOptions[trimmedKey] = false;
					if (val === "true") formatOptions[trimmedKey] = true;
					if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
				}
			});
		}
		return {
			formatName,
			formatOptions
		};
	};
	var createCachedFormatter = (fn) => {
		const cache = {};
		return (v, l, o) => {
			let optForCache = o;
			if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) optForCache = {
				...optForCache,
				[o.interpolationkey]: void 0
			};
			const key = l + JSON.stringify(optForCache);
			let frm = cache[key];
			if (!frm) {
				frm = fn(getCleanedCode(l), o);
				cache[key] = frm;
			}
			return frm(v);
		};
	};
	var createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
	var Formatter = class {
		constructor(options = {}) {
			this.logger = baseLogger.create("formatter");
			this.options = options;
			this.init(options);
		}
		init(services, options = { interpolation: {} }) {
			this.formatSeparator = options.interpolation.formatSeparator || ",";
			const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
			this.formats = {
				number: cf((lng, opt) => {
					const formatter = new Intl.NumberFormat(lng, { ...opt });
					return (val) => formatter.format(val);
				}),
				currency: cf((lng, opt) => {
					const formatter = new Intl.NumberFormat(lng, {
						...opt,
						style: "currency"
					});
					return (val) => formatter.format(val);
				}),
				datetime: cf((lng, opt) => {
					const formatter = new Intl.DateTimeFormat(lng, { ...opt });
					return (val) => formatter.format(val);
				}),
				relativetime: cf((lng, opt) => {
					const formatter = new Intl.RelativeTimeFormat(lng, { ...opt });
					return (val) => formatter.format(val, opt.range || "day");
				}),
				list: cf((lng, opt) => {
					const formatter = new Intl.ListFormat(lng, { ...opt });
					return (val) => formatter.format(val);
				})
			};
		}
		add(name, fc) {
			this.formats[name.toLowerCase().trim()] = fc;
		}
		addCached(name, fc) {
			this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
		}
		format(value, format, lng, options = {}) {
			if (!format) return value;
			if (value == null) return value;
			const rawFormats = format.split(this.formatSeparator);
			const formats = [];
			for (let i = 0; i < rawFormats.length; i++) {
				let f = rawFormats[i];
				while (f.indexOf("(") > -1 && !f.includes(")") && i + 1 < rawFormats.length) f = `${f}${this.formatSeparator}${rawFormats[++i]}`;
				formats.push(f);
			}
			return formats.reduce((mem, f) => {
				const { formatName, formatOptions } = parseFormatStr(f);
				if (this.formats[formatName]) {
					let formatted = mem;
					try {
						const valOptions = options?.formatParams?.[options.interpolationkey] || {};
						const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
						formatted = this.formats[formatName](mem, l, {
							...formatOptions,
							...options,
							...valOptions
						});
					} catch (error) {
						this.logger.warn(error);
					}
					return formatted;
				} else this.logger.warn(`there was no format function for ${formatName}`);
				return mem;
			}, value);
		}
	};
	var removePending = (q, name) => {
		if (q.pending[name] !== void 0) {
			delete q.pending[name];
			q.pendingCount--;
		}
	};
	var Connector = class extends EventEmitter {
		constructor(backend, store, services, options = {}) {
			super();
			this.backend = backend;
			this.store = store;
			this.services = services;
			this.languageUtils = services.languageUtils;
			this.options = options;
			this.logger = baseLogger.create("backendConnector");
			this.waitingReads = [];
			this.maxParallelReads = options.maxParallelReads || 10;
			this.readingCalls = 0;
			this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
			this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
			this.state = {};
			this.queue = [];
			this.backend?.init?.(services, options.backend, options);
		}
		queueLoad(languages, namespaces, options, callback) {
			const toLoad = {};
			const pending = {};
			const toLoadLanguages = {};
			const toLoadNamespaces = {};
			languages.forEach((lng) => {
				let hasAllNamespaces = true;
				namespaces.forEach((ns) => {
					const name = `${lng}|${ns}`;
					if (!options.reload && this.store.hasResourceBundle(lng, ns)) this.state[name] = 2;
					else if (this.state[name] < 0);
					else if (this.state[name] === 1) {
						if (pending[name] === void 0) pending[name] = true;
					} else {
						this.state[name] = 1;
						hasAllNamespaces = false;
						if (pending[name] === void 0) pending[name] = true;
						if (toLoad[name] === void 0) toLoad[name] = true;
						if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
					}
				});
				if (!hasAllNamespaces) toLoadLanguages[lng] = true;
			});
			if (Object.keys(toLoad).length || Object.keys(pending).length) this.queue.push({
				pending,
				pendingCount: Object.keys(pending).length,
				loaded: {},
				errors: [],
				callback
			});
			return {
				toLoad: Object.keys(toLoad),
				pending: Object.keys(pending),
				toLoadLanguages: Object.keys(toLoadLanguages),
				toLoadNamespaces: Object.keys(toLoadNamespaces)
			};
		}
		loaded(name, err, data) {
			const s = name.split("|");
			const lng = s[0];
			const ns = s[1];
			if (err) this.emit("failedLoading", lng, ns, err);
			if (!err && data) this.store.addResourceBundle(lng, ns, data, void 0, void 0, { skipCopy: true });
			this.state[name] = err ? -1 : 2;
			if (err && data) this.state[name] = 0;
			const loaded = {};
			this.queue.forEach((q) => {
				pushPath(q.loaded, [lng], ns);
				removePending(q, name);
				if (err) q.errors.push(err);
				if (q.pendingCount === 0 && !q.done) {
					Object.keys(q.loaded).forEach((l) => {
						if (!loaded[l]) loaded[l] = {};
						const loadedKeys = q.loaded[l];
						if (loadedKeys.length) loadedKeys.forEach((n) => {
							if (loaded[l][n] === void 0) loaded[l][n] = true;
						});
					});
					q.done = true;
					if (q.errors.length) q.callback(q.errors);
					else q.callback();
				}
			});
			this.emit("loaded", loaded);
			this.queue = this.queue.filter((q) => !q.done);
		}
		read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
			if (!lng.length) return callback(null, {});
			if (this.readingCalls >= this.maxParallelReads) {
				this.waitingReads.push({
					lng,
					ns,
					fcName,
					tried,
					wait,
					callback
				});
				return;
			}
			this.readingCalls++;
			const resolver = (err, data) => {
				this.readingCalls--;
				if (this.waitingReads.length > 0) {
					const next = this.waitingReads.shift();
					this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
				}
				if (err && data && tried < this.maxRetries) {
					setTimeout(() => {
						this.read(lng, ns, fcName, tried + 1, wait * 2, callback);
					}, wait);
					return;
				}
				callback(err, data);
			};
			const fc = this.backend[fcName].bind(this.backend);
			if (fc.length === 2) {
				try {
					const r = fc(lng, ns);
					if (r && typeof r.then === "function") r.then((data) => resolver(null, data)).catch(resolver);
					else resolver(null, r);
				} catch (err) {
					resolver(err);
				}
				return;
			}
			return fc(lng, ns, resolver);
		}
		prepareLoading(languages, namespaces, options = {}, callback) {
			if (!this.backend) {
				this.logger.warn("No backend was added via i18next.use. Will not load resources.");
				return callback && callback();
			}
			if (isString$1(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
			if (isString$1(namespaces)) namespaces = [namespaces];
			const toLoad = this.queueLoad(languages, namespaces, options, callback);
			if (!toLoad.toLoad.length) {
				if (!toLoad.pending.length) callback();
				return null;
			}
			toLoad.toLoad.forEach((name) => {
				this.loadOne(name);
			});
		}
		load(languages, namespaces, callback) {
			this.prepareLoading(languages, namespaces, {}, callback);
		}
		reload(languages, namespaces, callback) {
			this.prepareLoading(languages, namespaces, { reload: true }, callback);
		}
		loadOne(name, prefix = "") {
			const s = name.split("|");
			const lng = s[0];
			const ns = s[1];
			this.read(lng, ns, "read", void 0, void 0, (err, data) => {
				if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
				if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
				this.loaded(name, err, data);
			});
		}
		saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {}) {
			if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
				this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
				return;
			}
			if (key === void 0 || key === null || key === "") return;
			if (this.backend?.create) {
				const opts = {
					...options,
					isUpdate
				};
				const fc = this.backend.create.bind(this.backend);
				if (fc.length < 6) try {
					let r;
					if (fc.length === 5) r = fc(languages, namespace, key, fallbackValue, opts);
					else r = fc(languages, namespace, key, fallbackValue);
					if (r && typeof r.then === "function") r.then((data) => clb(null, data)).catch(clb);
					else clb(null, r);
				} catch (err) {
					clb(err);
				}
				else fc(languages, namespace, key, fallbackValue, clb, opts);
			}
			if (!languages || !languages[0]) return;
			this.store.addResource(languages[0], namespace, key, fallbackValue);
		}
	};
	var get = () => ({
		debug: false,
		initAsync: true,
		ns: ["translation"],
		defaultNS: ["translation"],
		fallbackLng: ["dev"],
		fallbackNS: false,
		supportedLngs: false,
		nonExplicitSupportedLngs: false,
		load: "all",
		preload: false,
		keySeparator: ".",
		nsSeparator: ":",
		pluralSeparator: "_",
		contextSeparator: "_",
		enableSelector: false,
		partialBundledLanguages: false,
		saveMissing: false,
		updateMissing: false,
		saveMissingTo: "fallback",
		saveMissingPlurals: true,
		missingKeyHandler: false,
		missingInterpolationHandler: false,
		postProcess: false,
		postProcessPassResolved: false,
		returnNull: false,
		returnEmptyString: true,
		returnObjects: false,
		joinArrays: false,
		returnedObjectHandler: false,
		parseMissingKeyHandler: false,
		appendNamespaceToMissingKey: false,
		appendNamespaceToCIMode: false,
		overloadTranslationOptionHandler: (args) => {
			let ret = {};
			if (typeof args[1] === "object") ret = args[1];
			if (isString$1(args[1])) ret.defaultValue = args[1];
			if (isString$1(args[2])) ret.tDescription = args[2];
			if (typeof args[2] === "object" || typeof args[3] === "object") {
				const options = args[3] || args[2];
				Object.keys(options).forEach((key) => {
					ret[key] = options[key];
				});
			}
			return ret;
		},
		interpolation: {
			escapeValue: true,
			prefix: "{{",
			suffix: "}}",
			formatSeparator: ",",
			unescapePrefix: "-",
			nestingPrefix: "$t(",
			nestingSuffix: ")",
			nestingOptionsSeparator: ",",
			maxReplaces: 1e3,
			skipOnVariables: true
		},
		cacheInBuiltFormats: true
	});
	var transformOptions = (options) => {
		if (isString$1(options.ns)) options.ns = [options.ns];
		if (isString$1(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
		if (isString$1(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
		if (options.supportedLngs && !options.supportedLngs.includes("cimode")) options.supportedLngs = options.supportedLngs.concat(["cimode"]);
		return options;
	};
	var noop$1 = () => {};
	var bindMemberFunctions = (inst) => {
		Object.getOwnPropertyNames(Object.getPrototypeOf(inst)).forEach((mem) => {
			if (typeof inst[mem] === "function") inst[mem] = inst[mem].bind(inst);
		});
	};
	var instance = class I18n extends EventEmitter {
		constructor(options = {}, callback) {
			super();
			this.options = transformOptions(options);
			this.services = {};
			this.logger = baseLogger;
			this.modules = { external: [] };
			bindMemberFunctions(this);
			if (callback && !this.isInitialized && !options.isClone) {
				if (!this.options.initAsync) {
					this.init(options, callback);
					return this;
				}
				setTimeout(() => {
					this.init(options, callback);
				}, 0);
			}
		}
		init(options = {}, callback) {
			this.isInitializing = true;
			if (typeof options === "function") {
				callback = options;
				options = {};
			}
			if (options.defaultNS == null && options.ns) {
				if (isString$1(options.ns)) options.defaultNS = options.ns;
				else if (!options.ns.includes("translation")) options.defaultNS = options.ns[0];
			}
			const defOpts = get();
			this.options = {
				...defOpts,
				...this.options,
				...transformOptions(options)
			};
			this.options.interpolation = {
				...defOpts.interpolation,
				...this.options.interpolation
			};
			if (options.keySeparator !== void 0) this.options.userDefinedKeySeparator = options.keySeparator;
			if (options.nsSeparator !== void 0) this.options.userDefinedNsSeparator = options.nsSeparator;
			if (typeof this.options.overloadTranslationOptionHandler !== "function") this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
			const createClassOnDemand = (ClassOrObject) => {
				if (!ClassOrObject) return null;
				if (typeof ClassOrObject === "function") return new ClassOrObject();
				return ClassOrObject;
			};
			if (!this.options.isClone) {
				if (this.modules.logger) baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
				else baseLogger.init(null, this.options);
				let formatter;
				if (this.modules.formatter) formatter = this.modules.formatter;
				else formatter = Formatter;
				const lu = new LanguageUtil(this.options);
				this.store = new ResourceStore(this.options.resources, this.options);
				const s = this.services;
				s.logger = baseLogger;
				s.resourceStore = this.store;
				s.languageUtils = lu;
				s.pluralResolver = new PluralResolver(lu, { prepend: this.options.pluralSeparator });
				if (formatter) {
					s.formatter = createClassOnDemand(formatter);
					if (s.formatter.init) s.formatter.init(s, this.options);
					this.options.interpolation.format = s.formatter.format.bind(s.formatter);
				}
				s.interpolator = new Interpolator(this.options);
				s.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) };
				s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
				s.backendConnector.on("*", (event, ...args) => {
					this.emit(event, ...args);
				});
				if (this.modules.languageDetector) {
					s.languageDetector = createClassOnDemand(this.modules.languageDetector);
					if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
				}
				if (this.modules.i18nFormat) {
					s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
					if (s.i18nFormat.init) s.i18nFormat.init(this);
				}
				this.translator = new Translator(this.services, this.options);
				this.translator.on("*", (event, ...args) => {
					this.emit(event, ...args);
				});
				this.modules.external.forEach((m) => {
					if (m.init) m.init(this);
				});
			}
			this.format = this.options.interpolation.format;
			if (!callback) callback = noop$1;
			if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
				const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
				if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
			}
			if (!this.services.languageDetector && !this.options.lng) this.logger.warn("init: no languageDetector is used and no lng is defined");
			[
				"getResource",
				"hasResourceBundle",
				"getResourceBundle",
				"getDataByLanguage"
			].forEach((fcName) => {
				this[fcName] = (...args) => this.store[fcName](...args);
			});
			[
				"addResource",
				"addResources",
				"addResourceBundle",
				"removeResourceBundle"
			].forEach((fcName) => {
				this[fcName] = (...args) => {
					this.store[fcName](...args);
					return this;
				};
			});
			const deferred = defer();
			const load = () => {
				const finish = (err, t) => {
					this.isInitializing = false;
					if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
					this.isInitialized = true;
					if (!this.options.isClone) this.logger.log("initialized", this.options);
					this.emit("initialized", this.options);
					deferred.resolve(t);
					callback(err, t);
				};
				if ((this.languages || this.isLanguageChangingTo) && !this.isInitialized) return finish(null, this.t.bind(this));
				this.changeLanguage(this.options.lng, finish);
			};
			if (this.options.resources || !this.options.initAsync) load();
			else setTimeout(load, 0);
			return deferred;
		}
		loadResources(language, callback = noop$1) {
			let usedCallback = callback;
			const usedLng = isString$1(language) ? language : this.language;
			if (typeof language === "function") usedCallback = language;
			if (!this.options.resources || this.options.partialBundledLanguages) {
				if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
				const toLoad = [];
				const append = (lng) => {
					if (!lng) return;
					if (lng === "cimode") return;
					this.services.languageUtils.toResolveHierarchy(lng).forEach((l) => {
						if (l === "cimode") return;
						if (!toLoad.includes(l)) toLoad.push(l);
					});
				};
				if (!usedLng) this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => append(l));
				else append(usedLng);
				this.options.preload?.forEach?.((l) => append(l));
				this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
					if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
					usedCallback(e);
				});
			} else usedCallback(null);
		}
		reloadResources(lngs, ns, callback) {
			const deferred = defer();
			if (typeof lngs === "function") {
				callback = lngs;
				lngs = void 0;
			}
			if (typeof ns === "function") {
				callback = ns;
				ns = void 0;
			}
			if (!lngs) lngs = this.languages;
			if (!ns) ns = this.options.ns;
			if (!callback) callback = noop$1;
			this.services.backendConnector.reload(lngs, ns, (err) => {
				deferred.resolve();
				callback(err);
			});
			return deferred;
		}
		use(module) {
			if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
			if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
			if (module.type === "backend") this.modules.backend = module;
			if (module.type === "logger" || module.log && module.warn && module.error) this.modules.logger = module;
			if (module.type === "languageDetector") this.modules.languageDetector = module;
			if (module.type === "i18nFormat") this.modules.i18nFormat = module;
			if (module.type === "postProcessor") postProcessor.addPostProcessor(module);
			if (module.type === "formatter") this.modules.formatter = module;
			if (module.type === "3rdParty") this.modules.external.push(module);
			return this;
		}
		setResolvedLanguage(l) {
			if (!l || !this.languages) return;
			if (["cimode", "dev"].includes(l)) return;
			for (let li = 0; li < this.languages.length; li++) {
				const lngInLngs = this.languages[li];
				if (["cimode", "dev"].includes(lngInLngs)) continue;
				if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
					this.resolvedLanguage = lngInLngs;
					break;
				}
			}
			if (!this.resolvedLanguage && !this.languages.includes(l) && this.store.hasLanguageSomeTranslations(l)) {
				this.resolvedLanguage = l;
				this.languages.unshift(l);
			}
		}
		changeLanguage(lng, callback) {
			this.isLanguageChangingTo = lng;
			const deferred = defer();
			this.emit("languageChanging", lng);
			const setLngProps = (l) => {
				this.language = l;
				this.languages = this.services.languageUtils.toResolveHierarchy(l);
				this.resolvedLanguage = void 0;
				this.setResolvedLanguage(l);
			};
			const done = (err, l) => {
				if (l) {
					if (this.isLanguageChangingTo === lng) {
						setLngProps(l);
						this.translator.changeLanguage(l);
						this.isLanguageChangingTo = void 0;
						this.emit("languageChanged", l);
						this.logger.log("languageChanged", l);
					}
				} else this.isLanguageChangingTo = void 0;
				deferred.resolve((...args) => this.t(...args));
				if (callback) callback(err, (...args) => this.t(...args));
			};
			const setLng = (lngs) => {
				if (!lng && !lngs && this.services.languageDetector) lngs = [];
				const fl = isString$1(lngs) ? lngs : lngs && lngs[0];
				const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString$1(lngs) ? [lngs] : lngs);
				if (l) {
					if (!this.language) setLngProps(l);
					if (!this.translator.language) this.translator.changeLanguage(l);
					this.services.languageDetector?.cacheUserLanguage?.(l);
				}
				this.loadResources(l, (err) => {
					done(err, l);
				});
			};
			if (!lng && this.services.languageDetector && !this.services.languageDetector.async) setLng(this.services.languageDetector.detect());
			else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
				if (this.services.languageDetector.detect.length === 0) this.services.languageDetector.detect().then(setLng);
				else this.services.languageDetector.detect(setLng);
			} else setLng(lng);
			return deferred;
		}
		getFixedT(lng, ns, keyPrefix, fixedOpts) {
			const scopeNs = fixedOpts?.scopeNs;
			const fixedT = (key, opts, ...rest) => {
				let o;
				if (typeof opts !== "object") o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
				else o = { ...opts };
				o.lng = o.lng || fixedT.lng;
				o.lngs = o.lngs || fixedT.lngs;
				const explicitCallNs = o.ns !== void 0 && o.ns !== null;
				o.ns = o.ns || fixedT.ns;
				if (o.keyPrefix !== "") o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
				const selectorOpts = {
					...this.options,
					...o
				};
				if (Array.isArray(scopeNs) && !explicitCallNs) selectorOpts.ns = scopeNs;
				if (typeof o.keyPrefix === "function") o.keyPrefix = keysFromSelector(o.keyPrefix, selectorOpts);
				const keySeparator = this.options.keySeparator || ".";
				let resultKey;
				if (o.keyPrefix && Array.isArray(key)) resultKey = key.map((k) => {
					if (typeof k === "function") k = keysFromSelector(k, selectorOpts);
					return `${o.keyPrefix}${keySeparator}${k}`;
				});
				else {
					if (typeof key === "function") key = keysFromSelector(key, selectorOpts);
					resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
				}
				return this.t(resultKey, o);
			};
			if (isString$1(lng)) fixedT.lng = lng;
			else fixedT.lngs = lng;
			fixedT.ns = ns;
			fixedT.keyPrefix = keyPrefix;
			return fixedT;
		}
		t(...args) {
			return this.translator?.translate(...args);
		}
		exists(...args) {
			return this.translator?.exists(...args);
		}
		setDefaultNamespace(ns) {
			this.options.defaultNS = ns;
		}
		hasLoadedNamespace(ns, options = {}) {
			if (!this.isInitialized) {
				this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
				return false;
			}
			if (!this.languages || !this.languages.length) {
				this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
				return false;
			}
			const lng = options.lng || this.resolvedLanguage || this.languages[0];
			const fallbackLng = this.options ? this.options.fallbackLng : false;
			const lastLng = this.languages[this.languages.length - 1];
			if (lng.toLowerCase() === "cimode") return true;
			const loadNotPending = (l, n) => {
				const loadState = this.services.backendConnector.state[`${l}|${n}`];
				return loadState === -1 || loadState === 0 || loadState === 2;
			};
			if (options.precheck) {
				const preResult = options.precheck(this, loadNotPending);
				if (preResult !== void 0) return preResult;
			}
			if (this.hasResourceBundle(lng, ns)) return true;
			if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
			if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
			return false;
		}
		loadNamespaces(ns, callback) {
			const deferred = defer();
			if (!this.options.ns) {
				if (callback) callback();
				return Promise.resolve();
			}
			if (isString$1(ns)) ns = [ns];
			ns.forEach((n) => {
				if (!this.options.ns.includes(n)) this.options.ns.push(n);
			});
			this.loadResources((err) => {
				deferred.resolve();
				if (callback) callback(err);
			});
			return deferred;
		}
		loadLanguages(lngs, callback) {
			const deferred = defer();
			if (isString$1(lngs)) lngs = [lngs];
			const preloaded = this.options.preload || [];
			const newLngs = lngs.filter((lng) => !preloaded.includes(lng) && this.services.languageUtils.isSupportedCode(lng));
			if (!newLngs.length) {
				if (callback) callback();
				return Promise.resolve();
			}
			this.options.preload = preloaded.concat(newLngs);
			this.loadResources((err) => {
				deferred.resolve();
				if (callback) callback(err);
			});
			return deferred;
		}
		dir(lng) {
			if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
			if (!lng) return "rtl";
			try {
				const l = new Intl.Locale(lng);
				if (l && l.getTextInfo) {
					const ti = l.getTextInfo();
					if (ti && ti.direction) return ti.direction;
				}
			} catch (e) {}
			const rtlLngs = [
				"ar",
				"shu",
				"sqr",
				"ssh",
				"xaa",
				"yhd",
				"yud",
				"aao",
				"abh",
				"abv",
				"acm",
				"acq",
				"acw",
				"acx",
				"acy",
				"adf",
				"ads",
				"aeb",
				"aec",
				"afb",
				"ajp",
				"apc",
				"apd",
				"arb",
				"arq",
				"ars",
				"ary",
				"arz",
				"auz",
				"avl",
				"ayh",
				"ayl",
				"ayn",
				"ayp",
				"bbz",
				"pga",
				"he",
				"iw",
				"ps",
				"pbt",
				"pbu",
				"pst",
				"prp",
				"prd",
				"ug",
				"ur",
				"ydd",
				"yds",
				"yih",
				"ji",
				"yi",
				"hbo",
				"men",
				"xmn",
				"fa",
				"jpr",
				"peo",
				"pes",
				"prs",
				"dv",
				"sam",
				"ckb"
			];
			const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
			if (lng.toLowerCase().indexOf("-latn") > 1) return "ltr";
			return rtlLngs.includes(languageUtils.getLanguagePartFromCode(lng)) || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
		}
		static createInstance(options = {}, callback) {
			const instance = new I18n(options, callback);
			instance.createInstance = I18n.createInstance;
			return instance;
		}
		cloneInstance(options = {}, callback = noop$1) {
			const forkResourceStore = options.forkResourceStore;
			if (forkResourceStore) delete options.forkResourceStore;
			const mergedOptions = {
				...this.options,
				...options,
				isClone: true
			};
			const clone = new I18n(mergedOptions);
			if (options.debug !== void 0 || options.prefix !== void 0) clone.logger = clone.logger.clone(options);
			[
				"store",
				"services",
				"language"
			].forEach((m) => {
				clone[m] = this[m];
			});
			clone.services = { ...this.services };
			clone.services.utils = { hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone) };
			if (forkResourceStore) {
				clone.store = new ResourceStore(Object.keys(this.store.data).reduce((prev, l) => {
					prev[l] = { ...this.store.data[l] };
					prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
						acc[n] = { ...prev[l][n] };
						return acc;
					}, prev[l]);
					return prev;
				}, {}), mergedOptions);
				clone.services.resourceStore = clone.store;
			}
			if (options.interpolation) {
				const mergedInterpolation = {
					...get().interpolation,
					...this.options.interpolation,
					...options.interpolation
				};
				const mergedForInterpolator = {
					...mergedOptions,
					interpolation: mergedInterpolation
				};
				clone.services.interpolator = new Interpolator(mergedForInterpolator);
			}
			clone.translator = new Translator(clone.services, mergedOptions);
			clone.translator.on("*", (event, ...args) => {
				clone.emit(event, ...args);
			});
			clone.init(mergedOptions, callback);
			clone.translator.options = mergedOptions;
			clone.translator.backendConnector.services.utils = { hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone) };
			return clone;
		}
		toJSON() {
			return {
				options: this.options,
				store: this.store,
				language: this.language,
				languages: this.languages,
				resolvedLanguage: this.resolvedLanguage
			};
		}
	}.createInstance();
	instance.createInstance;
	instance.dir;
	instance.init;
	instance.loadResources;
	instance.reloadResources;
	instance.use;
	instance.changeLanguage;
	instance.getFixedT;
	instance.t;
	instance.exists;
	instance.setDefaultNamespace;
	instance.hasLoadedNamespace;
	instance.loadNamespaces;
	instance.loadLanguages;
	var warn = (i18n, code, msg, rest) => {
		const args = [msg, {
			code,
			...rest || {}
		}];
		if (i18n?.services?.logger?.forward) return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
		if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
		if (i18n?.services?.logger?.warn) i18n.services.logger.warn(...args);
		else if (console?.warn) console.warn(...args);
	};
	var alreadyWarned = {};
	var warnOnce = (i18n, code, msg, rest) => {
		if (isString(msg) && alreadyWarned[msg]) return;
		if (isString(msg)) alreadyWarned[msg] = new Date();
		warn(i18n, code, msg, rest);
	};
	var loadedClb = (i18n, cb) => () => {
		if (i18n.isInitialized) cb();
		else {
			const initialized = () => {
				setTimeout(() => {
					i18n.off("initialized", initialized);
				}, 0);
				cb();
			};
			i18n.on("initialized", initialized);
		}
	};
	var loadNamespaces = (i18n, ns, cb) => {
		i18n.loadNamespaces(ns, loadedClb(i18n, cb));
	};
	var loadLanguages = (i18n, lng, ns, cb) => {
		if (isString(ns)) ns = [ns];
		if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
		ns.forEach((n) => {
			if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
		});
		i18n.loadLanguages(lng, loadedClb(i18n, cb));
	};
	var hasLoadedNamespace = (ns, i18n, options = {}) => {
		if (!i18n.languages || !i18n.languages.length) {
			warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: i18n.languages });
			return true;
		}
		return i18n.hasLoadedNamespace(ns, {
			lng: options.lng,
			precheck: (i18nInstance, loadNotPending) => {
				if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
			}
		});
	};
	var isString = (obj) => typeof obj === "string";
	var isObject = (obj) => typeof obj === "object" && obj !== null;
	var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
	var htmlEntities = {
		"&amp;": "&",
		"&#38;": "&",
		"&lt;": "<",
		"&#60;": "<",
		"&gt;": ">",
		"&#62;": ">",
		"&apos;": "'",
		"&#39;": "'",
		"&quot;": "\"",
		"&#34;": "\"",
		"&nbsp;": " ",
		"&#160;": " ",
		"&copy;": "©",
		"&#169;": "©",
		"&reg;": "®",
		"&#174;": "®",
		"&hellip;": "…",
		"&#8230;": "…",
		"&#x2F;": "/",
		"&#47;": "/"
	};
	var unescapeHtmlEntity = (m) => htmlEntities[m];
	var unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
	var defaultOptions = {
		bindI18n: "languageChanged",
		bindI18nStore: "",
		transEmptyNodeValue: "",
		transSupportBasicHtmlNodes: true,
		transWrapTextNodes: "",
		transKeepBasicHtmlNodesFor: [
			"br",
			"strong",
			"i",
			"p"
		],
		useSuspense: true,
		unescape,
		transDefaultProps: void 0
	};
	var setDefaults = (options = {}) => {
		defaultOptions = {
			...defaultOptions,
			...options
		};
	};
	var getDefaults = () => defaultOptions;
	var i18nInstance;
	var setI18n = (instance) => {
		i18nInstance = instance;
	};
	var getI18n = () => i18nInstance;
	var initReactI18next = {
		type: "3rdParty",
		init(instance) {
			setDefaults(instance.options.react);
			setI18n(instance);
		}
	};
	init_compat_module();
	var I18nContext = X$1();
	var ReportNamespaces = class {
		constructor() {
			this.usedNamespaces = {};
		}
		addUsedNamespaces(namespaces) {
			namespaces.forEach((ns) => {
				if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
			});
		}
		getUsedNamespaces() {
			return Object.keys(this.usedNamespaces);
		}
	};
	var require_use_sync_external_store_shim_production = __commonJSMin(((exports) => {
		var React = (init_compat_module(), __toCommonJS(compat_module_exports));
		function is(x, y) {
			return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
		}
		var objectIs = "function" === typeof Object.is ? Object.is : is;
		var useState = React.useState;
		var useEffect = React.useEffect;
		var useLayoutEffect = React.useLayoutEffect;
		var useDebugValue = React.useDebugValue;
		function useSyncExternalStore$2(subscribe, getSnapshot) {
			var value = getSnapshot(), _useState = useState({ inst: {
				value,
				getSnapshot
			} }), inst = _useState[0].inst, forceUpdate = _useState[1];
			useLayoutEffect(function() {
				inst.value = value;
				inst.getSnapshot = getSnapshot;
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			}, [
				subscribe,
				value,
				getSnapshot
			]);
			useEffect(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				return subscribe(function() {
					checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				});
			}, [subscribe]);
			useDebugValue(value);
			return value;
		}
		function checkIfSnapshotChanged(inst) {
			var latestGetSnapshot = inst.getSnapshot;
			inst = inst.value;
			try {
				var nextValue = latestGetSnapshot();
				return !objectIs(inst, nextValue);
			} catch (error) {
				return !0;
			}
		}
		function useSyncExternalStore$1(subscribe, getSnapshot) {
			return getSnapshot();
		}
		var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
		exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	}));
	var require_shim = __commonJSMin(((exports, module) => {
		module.exports = require_use_sync_external_store_shim_production();
	}));
	init_compat_module();
	var import_shim = require_shim();
	var notReadyT = (k, optsOrDefaultValue) => {
		if (isString(optsOrDefaultValue)) return optsOrDefaultValue;
		if (isObject(optsOrDefaultValue) && isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
		if (typeof k === "function") return "";
		if (Array.isArray(k)) {
			const last = k[k.length - 1];
			return typeof last === "function" ? "" : last;
		}
		return k;
	};
	var notReadySnapshot = {
		t: notReadyT,
		ready: false
	};
	var dummySubscribe = () => () => {};
	var useTranslation = (ns, props = {}) => {
		const { i18n: i18nFromProps } = props;
		const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = x$1(I18nContext) || {};
		const i18n = i18nFromProps || i18nFromContext || getI18n();
		if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
		if (!i18n) warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");
		const i18nOptions = T$1(() => ({
			...getDefaults(),
			...i18n?.options?.react,
			...props
		}), [i18n, props]);
		const { useSuspense, keyPrefix } = i18nOptions;
		const nsOrContext = ns || defaultNSFromContext || i18n?.options?.defaultNS;
		const unstableNamespaces = isString(nsOrContext) ? [nsOrContext] : nsOrContext || ["translation"];
		const namespaces = T$1(() => unstableNamespaces, unstableNamespaces);
		i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
		const revisionRef = A$2(0);
		const subscribe = q$1((callback) => {
			if (!i18n) return dummySubscribe;
			const { bindI18n, bindI18nStore } = i18nOptions;
			const wrappedCallback = () => {
				revisionRef.current += 1;
				callback();
			};
			if (bindI18n) i18n.on(bindI18n, wrappedCallback);
			if (bindI18nStore) i18n.store.on(bindI18nStore, wrappedCallback);
			return () => {
				if (bindI18n) bindI18n.split(" ").forEach((e) => i18n.off(e, wrappedCallback));
				if (bindI18nStore) bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, wrappedCallback));
			};
		}, [i18n, i18nOptions]);
		const snapshotRef = A$2();
		const getSnapshot = q$1(() => {
			if (!i18n) return notReadySnapshot;
			const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace(n, i18n, i18nOptions));
			const currentLng = props.lng || i18n.language;
			const currentRevision = revisionRef.current;
			const lastSnapshot = snapshotRef.current;
			if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) return lastSnapshot;
			const newSnapshot = {
				t: i18n.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix, { scopeNs: namespaces }),
				ready: calculatedReady,
				lng: currentLng,
				keyPrefix,
				revision: currentRevision
			};
			snapshotRef.current = newSnapshot;
			return newSnapshot;
		}, [
			i18n,
			namespaces,
			keyPrefix,
			i18nOptions,
			props.lng
		]);
		const [loadCount, setLoadCount] = d$1(0);
		const { t, ready } = (0, import_shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
		h$1(() => {
			if (i18n && !ready && !useSuspense) {
				const onLoaded = () => setLoadCount((c) => c + 1);
				if (props.lng) loadLanguages(i18n, props.lng, namespaces, onLoaded);
				else loadNamespaces(i18n, namespaces, onLoaded);
			}
		}, [
			i18n,
			props.lng,
			namespaces,
			ready,
			useSuspense,
			loadCount
		]);
		const finalI18n = i18n || {};
		const wrapperRef = A$2(null);
		const wrapperLangRef = A$2();
		const createI18nWrapper = (original) => {
			const descriptors = Object.getOwnPropertyDescriptors(original);
			if (descriptors.__original) delete descriptors.__original;
			const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
			if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) try {
				Object.defineProperty(wrapper, "__original", {
					value: original,
					writable: false,
					enumerable: false,
					configurable: false
				});
			} catch (_) {}
			return wrapper;
		};
		const ret = T$1(() => {
			const original = finalI18n;
			const lang = original?.language;
			let i18nWrapper = original;
			if (original) {
				if (wrapperRef.current && wrapperRef.current.__original === original) {
					if (wrapperLangRef.current !== lang) {
						i18nWrapper = createI18nWrapper(original);
						wrapperRef.current = i18nWrapper;
						wrapperLangRef.current = lang;
					} else i18nWrapper = wrapperRef.current;
				} else {
					i18nWrapper = createI18nWrapper(original);
					wrapperRef.current = i18nWrapper;
					wrapperLangRef.current = lang;
				}
			}
			const effectiveT = !ready && !useSuspense ? (...args) => {
				warnOnce(i18n, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t.");
				return t(...args);
			} : t;
			const arr = [
				effectiveT,
				i18nWrapper,
				ready
			];
			arr.t = effectiveT;
			arr.i18n = i18nWrapper;
			arr.ready = ready;
			return arr;
		}, [
			t,
			finalI18n,
			ready,
			finalI18n.resolvedLanguage,
			finalI18n.language,
			finalI18n.languages
		]);
		if (i18n && useSuspense && !ready) {
			let inDevelopment = false;
			try {
				inDevelopment = false;
			} catch (e) {}
			if (inDevelopment) warnOnce(i18n, "SUSPENDED_WHILE_LOADING", "useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook");
			throw new Promise((resolve) => {
				const onLoaded = () => resolve();
				if (props.lng) loadLanguages(i18n, props.lng, namespaces, onLoaded);
				else loadNamespaces(i18n, namespaces, onLoaded);
			});
		}
		return ret;
	};
	var baseUrl = typeof location === "undefined" ? "https://chat.deepseek.com" : new URL(location.href).origin;
	var apiUrl = baseUrl;
	var KEY_LANGUAGE = "exporter:language";
	var KEY_FILENAME_FORMAT = "exporter:filename_format";
	var KEY_TIMESTAMP_ENABLED = "exporter:enable_timestamp";
	var KEY_TIMESTAMP_24H = "exporter:timestamp_24h";
	var KEY_TIMESTAMP_MARKDOWN = "exporter:timestamp_markdown";
	var KEY_TIMESTAMP_HTML = "exporter:timestamp_html";
	var KEY_META_ENABLED = "exporter:enable_meta";
	var KEY_META_LIST = "exporter:meta_list";
	var KEY_THINKING_ENABLED = "exporter:enable_thinking";
	var KEY_SOURCES_ENABLED = "exporter:enable_sources";
	var KEY_EXPORT_ALL_LIMIT = "exporter:export_all_limit";
	function getPageTitle() {
		return document.title.replace(/\s*[-|·]\s*DeepSeek\s*$/i, "");
	}
	function getChatIdFromUrl() {
		return location.pathname.match(/^\/a\/[^/]+\/s\/([^/?#]+)/i)?.[1] ?? null;
	}
	var defaultAvatar = "data:image/svg+xml,%3Csvg%20stroke%3D%22white%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%20viewBox%3D%22-6%20-6%2036%2036%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20style%3D%22background%3A%20%234c89ff%3B%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%2021v-2a4%204%200%200%200-4-4H8a4%204%200%200%200-4%204v2%22%2F%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%227%22%20r%3D%224%22%2F%3E%3C%2Fsvg%3E";
	async function getUserAvatar() {
		return defaultAvatar;
	}
	function checkIfConversationStarted() {
		return getChatIdFromUrl() !== null;
	}
	function blobToDataURL(blob) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onerror = reject;
			reader.onload = () => resolve(reader.result);
			reader.readAsDataURL(blob);
		});
	}
	var CLIENT_VERSION = "2.3.0";
	var LIST_PAGE_SIZE = 50;
	var FILE_SERVICE_API_URL = "https://files.deepseeksvc.com/api";
	function createListState() {
		return {
			initialized: true,
			items: [],
			seen: new Set(),
			cursor: null,
			hasMore: true,
			cursorSignature: ""
		};
	}
	var sessionListState = createListState();
	var RateLimitError = class extends Error {
		retryAfterMs;
		constructor(retryAfterHeader) {
			super("Too Many Requests (429)");
			this.name = "RateLimitError";
			const seconds = retryAfterHeader == null ? NaN : Number(retryAfterHeader);
			const retryAt = retryAfterHeader == null ? NaN : Date.parse(retryAfterHeader);
			this.retryAfterMs = Number.isFinite(seconds) && seconds > 0 ? Math.ceil(seconds * 1e3) : Number.isFinite(retryAt) && retryAt > Date.now() ? retryAt - Date.now() : 3e4;
		}
	};
	function parseUserToken(raw) {
		if (!raw) return null;
		const findToken = (value, depth = 0) => {
			if (depth > 3) return null;
			if (typeof value === "string") return value.trim() || null;
			if (!value || typeof value !== "object") return null;
			const record = value;
			return findToken(record.value, depth + 1) ?? findToken(record.token, depth + 1) ?? findToken(record.access_token, depth + 1) ?? findToken(record.accessToken, depth + 1);
		};
		try {
			return findToken(JSON.parse(raw));
		} catch {
			return raw.trim() || null;
		}
	}
	function getAccessToken() {
		const token = parseUserToken(localStorage.getItem("userToken"));
		if (!token) throw new Error("DeepSeek login token was not found. Sign in to chat.deepseek.com and reload the page.");
		return token;
	}
	function clientLocale() {
		return (document.documentElement.lang || navigator.language || "en-US").replace("-", "_");
	}
	function apiHeaders(includeJson = false) {
		return {
			"Accept": "application/json",
			"Authorization": `Bearer ${getAccessToken()}`,
			"x-client-bundle-id": "com.deepseek.chat",
			"x-client-platform": "web",
			"x-client-version": CLIENT_VERSION,
			"x-client-locale": clientLocale(),
			"x-client-timezone-offset": String(-new Date().getTimezoneOffset() * 60),
			...includeJson ? { "Content-Type": "application/json" } : {}
		};
	}
	function endpoint(path) {
		return new URL(path, apiUrl);
	}
	function isSuccessCode(code) {
		return code == null || code === 0 || code === "0";
	}
	async function requestBiz(url, options = {}) {
		const response = await fetch(url, {
			...options,
			credentials: "include",
			headers: {
				...apiHeaders(options.body != null),
				...options.headers
			}
		});
		if (response.status === 429) throw new RateLimitError(response.headers.get("retry-after"));
		let payload = null;
		try {
			payload = await response.json();
		} catch {
			if (!response.ok) throw new Error(`DeepSeek API request failed (${response.status}).`);
		}
		if (!response.ok) {
			const reason = payload?.msg || response.statusText || "Request failed";
			throw new Error(`DeepSeek API error ${response.status}: ${reason}`);
		}
		if (!payload) throw new Error("DeepSeek API returned an empty response.");
		if (!isSuccessCode(payload.code)) throw new Error(payload.msg || `DeepSeek API returned error code ${String(payload.code)}`);
		const data = payload.data;
		if (data && typeof data === "object" && "biz_code" in data) {
			const business = data;
			if (!isSuccessCode(business.biz_code)) throw new Error(business.biz_msg || `DeepSeek API returned business error ${String(business.biz_code)}`);
			return business.biz_data;
		}
		return data;
	}
	function toEpochSeconds(value, fallback = 0) {
		if (typeof value === "number" && Number.isFinite(value)) return value > 1e10 ? Math.floor(value / 1e3) : value;
		if (typeof value === "string") {
			const numeric = Number(value);
			if (Number.isFinite(numeric)) return toEpochSeconds(numeric, fallback);
			const milliseconds = Date.parse(value);
			if (Number.isFinite(milliseconds)) return Math.floor(milliseconds / 1e3);
		}
		return fallback;
	}
	function sessionToListItem(session) {
		const updatedAt = toEpochSeconds(session.updated_at);
		const createdAt = toEpochSeconds(session.inserted_at, updatedAt);
		return {
			id: String(session.id),
			title: session.title?.trim() || "Untitled DeepSeek conversation",
			create_time: createdAt,
			update_time: updatedAt || createdAt,
			is_starred: Boolean(session.pinned),
			pinned_time: session.pinned && updatedAt ? new Date(updatedAt * 1e3).toISOString() : null
		};
	}
	async function fetchSessionPage(cursor, count) {
		const url = endpoint("/api/v0/chat_session/fetch_page");
		url.searchParams.set("count", String(count));
		if (cursor) {
			url.searchParams.set("lte_cursor.pinned", String(cursor.pinned));
			url.searchParams.set("lte_cursor.updated_at", String(cursor.updatedAt));
		}
		return await requestBiz(url);
	}
	function resetSessionList() {
		sessionListState = createListState();
	}
	async function ensureSessionCount(target, onPage, state = sessionListState) {
		while (state.items.length < target && state.hasMore) {
			const page = await fetchSessionPage(state.cursor, LIST_PAGE_SIZE);
			if (!page || !Array.isArray(page.chat_sessions)) throw new Error("DeepSeek returned an invalid conversation list. Please retry loading.");
			const sessions = page.chat_sessions;
			let novelCount = 0;
			for (const session of sessions) {
				const item = sessionToListItem(session);
				if (state.seen.has(item.id)) continue;
				state.seen.add(item.id);
				state.items.push(item);
				novelCount++;
			}
			if (novelCount > 0) onPage?.();
			const last = sessions.at(-1);
			if (last) {
				const nextCursor = {
					pinned: Boolean(last.pinned),
					updatedAt: typeof last.updated_at === "number" || typeof last.updated_at === "string" ? Number(last.updated_at) : NaN
				};
				if (page.has_more && !Number.isFinite(nextCursor.updatedAt)) throw new Error("DeepSeek returned an invalid pagination cursor. Please retry loading.");
				const signature = `${String(nextCursor.pinned)}:${String(nextCursor.updatedAt)}`;
				if (page.has_more && novelCount === 0) throw new Error("DeepSeek pagination made no progress. Loaded conversations are available; please retry loading earlier conversations.");
				state.cursor = nextCursor;
				state.cursorSignature = signature;
			}
			if (page.has_more && sessions.length === 0) throw new Error("DeepSeek returned an empty page with more conversations remaining. Please retry loading.");
			state.hasMore = Boolean(page.has_more);
		}
	}
	async function getCurrentChatId() {
		const chatId = getChatIdFromUrl();
		if (chatId) return chatId;
		resetSessionList();
		await ensureSessionCount(1);
		const first = sessionListState.items[0];
		if (first) return first.id;
		throw new Error("No DeepSeek conversation was found.");
	}
	function normalizeConversation(data, chatId) {
		const session = data.chat_session;
		const messageTimes = data.chat_messages.map((message) => toEpochSeconds(message.inserted_at)).filter((time) => time > 0);
		const updatedAt = toEpochSeconds(session.updated_at, messageTimes.at(-1) ?? 0);
		const createdAt = toEpochSeconds(session.inserted_at, messageTimes[0] ?? updatedAt);
		return {
			...data,
			id: String(session.id || chatId),
			title: session.title?.trim() || "DeepSeek Conversation",
			create_time: createdAt,
			update_time: updatedAt || createdAt
		};
	}
	function fileUrl(file) {
		const value = typeof file.signed_path === "string" ? file.signed_path : typeof file.url === "string" ? file.url : null;
		if (!value) return null;
		if (value.startsWith("data:")) return value;
		if (/^\/file(?:\?|$)/.test(value)) try {
			const url = new URL(`${FILE_SERVICE_API_URL}${value}`);
			if (!url.searchParams.has("ty")) url.searchParams.set("ty", "p");
			return url.href;
		} catch {
			return value;
		}
		try {
			return new URL(value, baseUrl).href;
		} catch {
			return value;
		}
	}
	function isImageFile(file) {
		if (file.is_image === true) return true;
		if ((typeof file.mime_type === "string" ? file.mime_type : typeof file.mimetype === "string" ? file.mimetype : "").startsWith("image/")) return true;
		const name = file.file_name || file.filename || file.name || "";
		return /\.(?:avif|bmp|gif|jpe?g|png|svg|webp)$/i.test(name);
	}
	async function replaceFileAssets(conversation) {
		const files = conversation.chat_messages.flatMap(collectMessageFiles);
		await Promise.all(files.map(async (file) => {
			const url = fileUrl(file);
			if (!url || url.startsWith("data:") || !isImageFile(file)) return;
			try {
				const assetUrl = new URL(url);
				const sameOrigin = assetUrl.origin === baseUrl;
				const response = await fetch(assetUrl, {
					credentials: sameOrigin ? "include" : "omit",
					headers: sameOrigin ? {
						...apiHeaders(),
						Accept: "*/*"
					} : void 0
				});
				if (!response.ok) return;
				const blob = await response.blob();
				const contentType = (response.headers.get("content-type") || blob.type).toLowerCase();
				if (contentType && !contentType.startsWith("image/")) {
					console.warn(`[DeepSeek Exporter] Refused non-image attachment response (${contentType})`);
					return;
				}
				file.signed_path = await blobToDataURL(blob);
			} catch (error) {
				console.warn("[DeepSeek Exporter] Failed to embed attachment", error);
			}
		}));
	}
	async function fetchConversation(chatId, shouldReplaceAssets) {
		const url = endpoint("/api/v0/chat/history_messages");
		url.searchParams.set("chat_session_id", chatId);
		const conversation = normalizeConversation(await requestBiz(url), chatId);
		if (shouldReplaceAssets) await replaceFileAssets(conversation);
		return conversation;
	}
	async function fetchConversationsPage(_project, offset, limit) {
		if (!sessionListState.initialized || offset === 0) resetSessionList();
		const state = sessionListState;
		await ensureSessionCount(offset + limit, void 0, state);
		return {
			has_missing_conversations: false,
			items: state.items.slice(offset, offset + limit),
			limit,
			offset,
			total: state.hasMore ? null : state.items.length,
			cursor: state.hasMore ? state.cursorSignature : null
		};
	}
	async function fetchAllConversations(_project = null, maxConversations = 1e3, onBatch, onHasMore) {
		resetSessionList();
		const state = sessionListState;
		let reported = 0;
		try {
			await ensureSessionCount(maxConversations, () => {
				const next = state.items.slice(reported, maxConversations);
				if (next.length === 0) return;
				reported += next.length;
				onBatch?.(next);
			}, state);
			return state.items.slice(0, maxConversations);
		} finally {
			onHasMore?.(state.items.length > maxConversations || state.hasMore);
		}
	}
	async function deleteConversation(chatId) {
		await requestBiz(endpoint("/api/v0/chat_session/delete"), {
			method: "POST",
			body: JSON.stringify({ chat_session_id: chatId })
		});
		resetSessionList();
		return true;
	}
	function fragmentType(fragment) {
		return typeof fragment.type === "string" ? fragment.type.toUpperCase() : "";
	}
	function stringContent(value) {
		return typeof value === "string" ? value.trim() : "";
	}
	function visibleMessageText(message) {
		const accepted = message.role.toUpperCase() === "USER" ? new Set(["REQUEST"]) : new Set(["RESPONSE", "TEMPLATE_RESPONSE"]);
		const parts = (message.fragments ?? []).filter((fragment) => accepted.has(fragmentType(fragment))).map((fragment) => stringContent(fragment.content)).filter(Boolean);
		if (parts.length > 0) return parts.join("\n\n");
		if (typeof message.content === "string") return message.content;
		return (message.fragments ?? []).filter((fragment) => ![
			"THINK",
			"TOOL_SEARCH",
			"TOOL_OPEN",
			"SEARCH",
			"TIP",
			"FILE"
		].includes(fragmentType(fragment))).map((fragment) => stringContent(fragment.content)).filter(Boolean).join("\n\n");
	}
	function collectMessageFiles(message) {
		const files = [...message.files ?? []];
		for (const fragment of message.fragments ?? []) {
			if (fragmentType(fragment) !== "FILE") continue;
			if (Array.isArray(fragment.files)) files.push(...fragment.files);
			if (fragment.file && typeof fragment.file === "object") files.push(fragment.file);
		}
		return files;
	}
	function messageContent(message, text) {
		const files = collectMessageFiles(message);
		if (files.length === 0) return {
			content_type: "text",
			parts: [text]
		};
		const parts = [];
		if (text) parts.push(text);
		for (const file of files) {
			const name = file.file_name || file.filename || file.name || "attachment";
			const url = fileUrl(file);
			if (url && isImageFile(file)) parts.push({
				content_type: "image_asset_pointer",
				asset_pointer: url,
				fovea: 0,
				height: typeof file.height === "number" ? file.height : 0,
				width: typeof file.width === "number" ? file.width : 0,
				size_bytes: typeof file.size === "number" ? file.size : typeof file.file_size === "number" ? file.file_size : 0
			});
			else if (url) parts.push(`[${name}](${url})`);
			else parts.push(`[File: ${name}]`);
		}
		return {
			content_type: "multimodal_text",
			parts
		};
	}
	function extractThinking(message) {
		const fragments = (message.fragments ?? []).filter((fragment) => fragmentType(fragment) === "THINK");
		const thoughts = fragments.map((fragment) => stringContent(fragment.content)).filter(Boolean).map((content) => ({
			summary: "",
			content
		}));
		if (thoughts.length === 0) return void 0;
		const durations = fragments.map((fragment) => fragment.elapsed_secs).filter((value) => typeof value === "number" && Number.isFinite(value));
		return {
			thoughts,
			durationSeconds: durations.length > 0 ? durations.reduce((total, duration) => total + duration, 0) : void 0
		};
	}
	function collectSourceEntries(value, entries, visited) {
		if (!value || typeof value !== "object" || visited.has(value)) return;
		visited.add(value);
		if (Array.isArray(value)) {
			for (const item of value) collectSourceEntries(item, entries, visited);
			return;
		}
		const record = value;
		if (typeof record.url === "string") {
			const source = {
				url: record.url,
				title: typeof record.title === "string" ? record.title : typeof record.site_name === "string" ? record.site_name : record.url,
				attribution: typeof record.site_name === "string" ? record.site_name : void 0,
				snippet: typeof record.snippet === "string" ? record.snippet : typeof record.description === "string" ? record.description : void 0,
				publishedAt: typeof record.published_at === "number" || typeof record.published_at === "string" ? record.published_at : void 0
			};
			const index = typeof record.cite_index === "number" ? record.cite_index : typeof record.index === "number" ? record.index : void 0;
			entries.push({
				index,
				source
			});
		}
		for (const child of Object.values(record)) collectSourceEntries(child, entries, visited);
	}
	function sourceReferences(message, content) {
		const entries = [];
		for (const fragment of message.fragments ?? []) {
			const type = fragmentType(fragment);
			if (type === "SEARCH" || type === "TOOL_SEARCH" || type === "TOOL_OPEN") collectSourceEntries(fragment, entries, new Set());
		}
		const unique = [];
		const positions = new Map();
		for (const entry of entries) {
			const key = entry.source.url || entry.source.title || "";
			if (!key) continue;
			const position = positions.get(key);
			if (position == null) {
				positions.set(key, unique.length);
				unique.push(entry);
				continue;
			}
			const existing = unique[position];
			existing.source = mergeSourceDetails(existing.source, entry.source);
			existing.index ??= entry.index;
		}
		if (unique.length === 0) return [];
		const byIndex = new Map();
		unique.forEach((entry, index) => {
			byIndex.set(entry.index ?? index, entry.source);
		});
		const usesZeroBasedCitationIndexes = byIndex.has(0);
		const references = [];
		const markerRegex = /\[(?:citation|reference):(\d+)\]/gi;
		let match = markerRegex.exec(content);
		while (match !== null) {
			const index = Number(match[1]);
			const source = byIndex.get(index) ?? unique[index]?.source ?? unique[index - 1]?.source;
			references.push({
				type: "webpage",
				matched_text: match[0],
				start_idx: match.index,
				end_idx: match.index + match[0].length,
				alt: source ? `[${String(usesZeroBasedCitationIndexes ? index + 1 : index)}]` : "",
				items: source ? [source] : []
			});
			match = markerRegex.exec(content);
		}
		references.push({
			type: "sources_footnote",
			start_idx: content.length,
			end_idx: content.length,
			sources: unique.map((entry) => entry.source)
		});
		return references;
	}
	function mergeSourceDetails(current, candidate) {
		const currentTitle = current.title?.trim();
		const candidateTitle = candidate.title?.trim();
		const currentLooksGeneric = !currentTitle || currentTitle === current.url || currentTitle === current.attribution;
		const candidateLooksSpecific = !!candidateTitle && candidateTitle !== candidate.url && candidateTitle !== candidate.attribution;
		return {
			...current,
			title: currentLooksGeneric && candidateLooksSpecific ? candidate.title : current.title || candidate.title,
			attribution: current.attribution || candidate.attribution,
			snippet: chooseLongerText(current.snippet, candidate.snippet),
			publishedAt: current.publishedAt ?? candidate.publishedAt
		};
	}
	function chooseLongerText(current, candidate) {
		if (!current) return candidate;
		if (!candidate) return current;
		return candidate.trim().length > current.trim().length ? candidate : current;
	}
	function activeMessagePath(conversation) {
		const messages = conversation.chat_messages;
		const byId = new Map(messages.map((message) => [String(message.message_id), message]));
		let currentId = conversation.chat_session.current_message_id == null ? "" : String(conversation.chat_session.current_message_id);
		if (!currentId || !byId.has(currentId)) {
			const parentIds = new Set(messages.map((message) => message.parent_id).filter((id) => id != null).map(String));
			const leaves = messages.filter((message) => !parentIds.has(String(message.message_id)));
			const current = [...leaves.length > 0 ? leaves : messages].sort((left, right) => {
				return toEpochSeconds(left.inserted_at) - toEpochSeconds(right.inserted_at);
			}).at(-1);
			currentId = current ? String(current.message_id) : "";
		}
		const path = [];
		const visited = new Set();
		while (currentId && !visited.has(currentId)) {
			visited.add(currentId);
			const message = byId.get(currentId);
			if (!message) break;
			path.push(message);
			currentId = message.parent_id == null ? "" : String(message.parent_id);
		}
		return path.reverse();
	}
	function normalizeRole(role) {
		const normalized = role.toUpperCase();
		if (normalized === "USER") return "user";
		if (normalized === "ASSISTANT") return "assistant";
		if (normalized === "SYSTEM") return "system";
		return "tool";
	}
	function modelDisplayName(modelSlug) {
		if (/reason|expert|r1/i.test(modelSlug)) return "DeepSeek Reasoner";
		if (/vision|vl/i.test(modelSlug)) return "DeepSeek Vision";
		return "DeepSeek Chat";
	}
	function shouldSkipMessageInExport(message) {
		return !message || message.metadata?.is_visually_hidden_from_conversation === true || message.author.role !== "user" && message.author.role !== "assistant";
	}
	function processConversation(conversation, options = {}) {
		const rawPath = activeMessagePath(conversation);
		const pathIds = new Set(rawPath.map((message) => String(message.message_id)));
		const children = new Map();
		for (const message of conversation.chat_messages) {
			if (message.parent_id == null) continue;
			const parentId = String(message.parent_id);
			if (!pathIds.has(parentId) || !pathIds.has(String(message.message_id))) continue;
			children.set(parentId, [...children.get(parentId) ?? [], String(message.message_id)]);
		}
		const modelSlug = conversation.chat_session.model_type || rawPath.findLast((message) => Boolean(message.model))?.model || "deepseek-chat";
		const conversationNodes = rawPath.map((raw) => {
			const id = String(raw.message_id);
			const text = visibleMessageText(raw);
			const role = normalizeRole(raw.role);
			const metadata = {
				model_slug: raw.model || modelSlug,
				content_references: role === "assistant" ? sourceReferences(raw, text) : []
			};
			const message = {
				id,
				author: {
					role,
					metadata: {}
				},
				content: messageContent(raw, text),
				create_time: toEpochSeconds(raw.inserted_at),
				update_time: toEpochSeconds(raw.updated_at, toEpochSeconds(raw.inserted_at)),
				metadata,
				recipient: "all",
				status: raw.status || "FINISHED",
				end_turn: raw.status?.toUpperCase() === "FINISHED",
				weight: 1
			};
			return {
				id,
				parent: raw.parent_id == null ? void 0 : String(raw.parent_id),
				children: children.get(id) ?? [],
				message,
				thinking: options.enableThinking ? extractThinking(raw) : void 0
			};
		});
		return {
			id: conversation.id,
			title: conversation.title,
			modelSlug,
			model: modelDisplayName(modelSlug),
			createTime: conversation.create_time,
			updateTime: conversation.update_time,
			conversationNodes
		};
	}
	var en_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "Export",
		Setting: "Setting",
		Language: "Language",
		"Copy Text": "Copy Text",
		"Copied!": "Copied!",
		Screenshot: "Screenshot",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Archive",
		Save: "Save",
		Delete: "Delete",
		Download: "Download",
		"Batch downloads ready": "The selected files are ready. Click below to download them.",
		"Select All": "Select All",
		Export: "Export",
		Error: "Error",
		Loading: "Loading",
		Preview: "Preview",
		"File Name": "File Name",
		"Export All": "Export All",
		"Exporter Settings": "Exporter Settings",
		"Export Dialog Title": "Export Conversations",
		"Invalid File Format": "Invalid File Format",
		"Export from official export file": "Export from official export file",
		"Export from API": "Export from API",
		"Available variables": "Available variables",
		"Conversation Timestamp": "Conversation Timestamp",
		"Conversation Timestamp Description": "Can be included in selected export formats.",
		"Enable on HTML": "Enable on HTML files",
		"Enable on Markdown": "Enable on Markdown files",
		"Use 24-hour format": "Use 24-hour format (eg. 23:59)",
		"Export Format": "Export Format",
		"Export Metadata": "Export Metadata",
		"Export Metadata Description": "Add metadata to exported Markdown and HTML files.",
		"Export Thinking Process": "Export Thinking Process",
		"Export Thinking Process Description": "Include the model's thinking/reasoning process in exported Markdown and HTML files.",
		"Export Sources": "Export Sources",
		"Export Sources Description": "Include the source list shown at the end of each answer in exported Markdown and HTML files.",
		Sources: "Sources",
		Thinking: "Thinking",
		"Thought for {{duration}} seconds": "Thought for {{duration}} seconds",
		"Conversation Archive Alert": "Are you sure you want to archive all selected conversations?",
		"Conversation Archived Message": "All selected conversations have been archived. Please refresh the page to see the changes.",
		"Conversation Delete Alert": "Are you sure you want to delete all selected conversations?",
		"Conversation Deleted Message": "All selected conversations have been deleted. Please refresh the page to see the changes.",
		"Please start a conversation first": "Please start a conversation first.",
		"Select Project": "Select Project",
		"(no project)": "(no project)",
		"Export All Limit": "Export All Limit",
		"Export All Limit Description": "Set the maximum number of conversations to load. Exports run in waves of 100 conversations to stay within API rate limits.",
		"Select a source to load conversations": "Select a project above to load conversations.",
		Search: "Search",
		"Selected of total": "{{selected}} selected / {{total}}",
		"Shift Click Hint": "Shift+click to select a range",
		"No results": "No results",
		"Date From": "From",
		"Date To": "To",
		"Date Filter Label": "Date",
		"Date Filter Hint": "Filters by the chosen timestamp field. Leave blank for no date restriction.",
		"Date Filter Field Created": "Created",
		"Date Filter Field Updated": "Updated",
		"Date Preset 7d": "7d",
		"Date Preset 30d": "30d",
		"Date Preset 90d": "90d",
		"Date Preset Year": "This year",
		"Clear filter": "Clear",
		"Selected count": "{{count}} selected",
		"Export batch info": "Exports in batches of 100 per download",
		"Exporting batch": "Exporting batch {{current}} of {{total}}",
		"Export batches button": "Export ({{n}} downloads)",
		"Batch progress": "Batch {{current}}/{{total}}",
		"All conversations": "All conversations",
		"Load more conversations": "Load {{n}} more",
		"Load more conversations remaining": "Load {{n}} more · {{remaining}} left",
		Title: "Title",
		Created: "Created",
		Updated: "Updated",
		Today: "Today",
		Yesterday: "Yesterday",
		Starred: "Starred",
		"Native Format": "Native format",
		"All export parts ready": "All {{total}} parts are ready. Download every part to save the complete export.",
		"Export parts in progress": "Export still running: {{prepared}}/{{total}} parts ready. You can download these parts now; keep this window open for the remaining parts.",
		"Export parts stopped": "Export stopped: only {{prepared}}/{{total}} parts are ready. The files below contain only part of the selected conversations.",
		"Export parts info": "{{total}} files, up to {{size}} conversations per file",
		Cancel: "Cancel"
	};
	var es_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "Exportar",
		Setting: "Ajustes",
		Language: "Idioma",
		"Copy Text": "Copiar Texto",
		"Copied!": "¡Copiado!",
		Screenshot: "Captura De Pantalla",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Archivo",
		Save: "Guardar",
		Delete: "Borrar",
		"Select All": "Seleccionar Todos",
		Export: "Exportar",
		Error: "Error",
		Loading: "Cargando",
		Preview: "Previsualizar",
		"File Name": "Nombre del Archivo",
		"Export All": "Exportar Todos",
		"Exporter Settings": "Ajustes De Exportación",
		"Export Dialog Title": "Exportar Conversaciones",
		"Invalid File Format": "Formato de archivo inválido",
		"Export from official export file": "Exportar desde archivo de exportación oficial",
		"Export from API": "Exportar desde API",
		"Available variables": "Variables Disponibles",
		"Conversation Timestamp": "Marca de Tiempo",
		"Conversation Timestamp Description": "Puede incluirse en los formatos de exportación seleccionados.",
		"Enable on HTML": "Habilitar en archivos HTML",
		"Enable on Markdown": "Habilitar en archivos Markdown",
		"Use 24-hour format": "Usar formato de 24 horas (ej. 23:59)",
		"Export Format": "Formato de Exportación",
		"Export Metadata": "Exportar Metadatos",
		"Export Metadata Description": "Añadir Metadatos a los archivos Markdown y HTML exportados.",
		"Export Thinking Process": "Exportar Proceso de Pensamiento",
		"Export Thinking Process Description": "Incluir el proceso de pensamiento/razonamiento del modelo en los archivos Markdown y HTML exportados.",
		"Export Sources": "Exportar fuentes",
		"Export Sources Description": "Incluir la lista de fuentes que se muestra al final de cada respuesta en los archivos Markdown y HTML exportados.",
		Sources: "Fuentes",
		"Conversation Archive Alert": "¿Estás seguro que quieres archivar todas las conversaciones seleccionadas?",
		"Conversation Archived Message": "Todos las conversaciones seleccionadas se han archivado. Por favor refresca la página para ver los cambios.",
		"Conversation Delete Alert": "¿Estás seguro que quieres borrar todas las conversaciones seleccionadas?",
		"Conversation Deleted Message": "Todos las conversaciones seleccionadas se han borrado. Por favor refresca la página para ver los cambios.",
		"Please start a conversation first": "Por favor empieza una conversación antes.",
		"Select Project": "Seleccionar proyecto",
		"(no project)": "(sin proyecto)",
		"Export All Limit": "Límite de Exportar Todos",
		"Export All Limit Description": "Establece el número máximo de conversaciones a cargar en el diálogo 'Exportar Todos'.",
		"Select a source to load conversations": "Selecciona un proyecto arriba para cargar conversaciones.",
		Search: "Buscar",
		"Selected of total": "{{selected}} seleccionadas / {{total}}",
		"Shift Click Hint": "Shift+clic para seleccionar un rango",
		"No results": "Sin resultados",
		Title: "Título",
		Created: "Creado",
		Updated: "Actualizado",
		Today: "Hoy",
		Yesterday: "Ayer",
		Starred: "Destacado",
		"Native Format": "Formato nativo"
	};
	var fr_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "Exporter",
		Setting: "Paramètre",
		Language: "Langue",
		"Copy Text": "Copier le texte",
		"Copied!": "Copié !",
		Screenshot: "Capture d'écran",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Archiver",
		Save: "Enregistrer",
		Delete: "Supprimer",
		"Select All": "Tout sélectionner",
		Export: "Exporter",
		Error: "Erreur",
		Loading: "Chargement",
		Preview: "Aperçu",
		"File Name": "Nom du fichier",
		"Export All": "Tout exporter",
		"Exporter Settings": "Paramètres de l'exportateur",
		"Export Dialog Title": "Exporter les conversations",
		"Invalid File Format": "Format de fichier invalide",
		"Export from official export file": "Exporter depuis un fichier officiel",
		"Export from API": "Exporter depuis l'API",
		"Available variables": "Variables disponibles",
		"Conversation Timestamp": "Horodatage de la conversation",
		"Conversation Timestamp Description": "Peut être inclus dans les formats d’exportation sélectionnés.",
		"Enable on HTML": "Activer sur les fichiers HTML",
		"Enable on Markdown": "Activer sur les fichiers Markdown",
		"Use 24-hour format": "Utiliser le format 24 heures (ex. 23:59)",
		"Export Format": "Format d'exportation",
		"Export Metadata": "Exporter les métadonnées",
		"Export Metadata Description": "Ajouter des métadonnées aux fichiers Markdown et HTML exportés.",
		"Export Thinking Process": "Exporter le processus de réflexion",
		"Export Thinking Process Description": "Inclure le processus de réflexion/raisonnement du modèle dans les fichiers Markdown et HTML exportés.",
		"Export Sources": "Exporter les sources",
		"Export Sources Description": "Inclure la liste des sources affichée à la fin de chaque réponse dans les fichiers Markdown et HTML exportés.",
		Sources: "Sources",
		"Conversation Archive Alert": "Êtes-vous sûr de vouloir archiver toutes les conversations sélectionnées ?",
		"Conversation Archived Message": "Toutes les conversations sélectionnées ont été archivées. Veuillez actualiser la page pour voir les changements.",
		"Conversation Delete Alert": "Êtes-vous sûr de vouloir supprimer toutes les conversations sélectionnées ?",
		"Conversation Deleted Message": "Toutes les conversations sélectionnées ont été supprimées. Veuillez actualiser la page pour voir les changements.",
		"Please start a conversation first": "Veuillez commencer une conversation d'abord.",
		"Select Project": "Sélectionner un projet",
		"(no project)": "(aucun projet)",
		"Export All Limit": "Limite d'Exportation Multiple",
		"Export All Limit Description": "Définit le nombre maximal de conversations à charger dans la boîte de dialogue 'Tout exporter'.",
		"Select a source to load conversations": "Sélectionnez un projet ci-dessus pour charger les conversations.",
		Search: "Rechercher",
		"Selected of total": "{{selected}} sélectionnées / {{total}}",
		"Shift Click Hint": "Maj+clic pour sélectionner une plage",
		"No results": "Aucun résultat",
		Title: "Titre",
		Created: "Créée",
		Updated: "Mise à jour",
		Today: "Aujourd’hui",
		Yesterday: "Hier",
		Starred: "Favori",
		"Native Format": "Format natif"
	};
	var id_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "Ekspor",
		Setting: "Pengaturan",
		Language: "Bahasa",
		"Copy Text": "Salin Teks",
		"Copied!": "Disalin!",
		Screenshot: "Tangkapan Layar",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Arsip",
		Save: "Simpan",
		Delete: "Hapus",
		"Select All": "Pilih Semua",
		Export: "Ekspor",
		Error: "Kesalahan",
		Loading: "Memuat",
		Preview: "Pratinjau",
		"File Name": "Nama File",
		"Export All": "Ekspor Semua",
		"Exporter Settings": "Pengaturan Pengekspor",
		"Export Dialog Title": "Ekspor Percakapan",
		"Invalid File Format": "Format File Tidak Valid",
		"Export from official export file": "Ekspor dari file ekspor resmi",
		"Export from API": "Ekspor dari API",
		"Available variables": "Variabel yang Tersedia",
		"Conversation Timestamp": "Timestamp Percakapan",
		"Conversation Timestamp Description": "Dapat disertakan dalam format ekspor yang dipilih.",
		"Enable on HTML": "Aktifkan pada file HTML",
		"Enable on Markdown": "Aktifkan pada file Markdown",
		"Use 24-hour format": "Gunakan format 24 jam (contohnya: 23:59)",
		"Export Format": "Format Ekspor",
		"Export Metadata": "Ekspor Metada",
		"Export Metadata Description": "Tambahkan metadata ke file Markdown dan HTML yang diekspor.",
		"Export Thinking Process": "Ekspor Proses Berpikir",
		"Export Thinking Process Description": "Sertakan proses berpikir/penalaran model dalam file Markdown dan HTML yang diekspor.",
		"Export Sources": "Ekspor Sumber",
		"Export Sources Description": "Sertakan daftar sumber yang ditampilkan di akhir setiap jawaban dalam file Markdown dan HTML yang diekspor.",
		Sources: "Sumber",
		"Conversation Archive Alert": "Apakah Anda yakin ingin mengarsipkan semua percakapan yang dipilih?",
		"Conversation Archived Message": "Semua percakapan yang dipilih telah diarsipkan. Harap segarkan halaman untuk melihat perubahan.",
		"Conversation Delete Alert": "Apakah Anda yakin ingin menghapus semua percakapan yang dipilih?",
		"Conversation Deleted Message": "Semua percakapan yang dipilih telah dihapus. Harap segarkan halaman untuk melihat perubahan.",
		"Please start a conversation first": "Harap mulai percakapan terlebih dahulu.",
		"Select Project": "Pilih Proyek",
		"(no project)": "(tidak ada proyek)",
		"Export All Limit": "Batas Ekspor Semua",
		"Export All Limit Description": "Atur jumlah maksimum percakapan yang akan dimuat dalam dialog 'Ekspor Semua'.",
		"Select a source to load conversations": "Pilih proyek di atas untuk memuat percakapan.",
		Search: "Cari",
		"Selected of total": "{{selected}} dipilih / {{total}}",
		"Shift Click Hint": "Shift+klik untuk memilih rentang",
		"No results": "Tidak ada hasil",
		Title: "Judul",
		Created: "Dibuat",
		Updated: "Diperbarui",
		Today: "Hari ini",
		Yesterday: "Kemarin",
		Starred: "Berbintang",
		"Native Format": "Format asli"
	};
	var jp_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "エクスポート",
		Setting: "設定",
		Language: "言語",
		"Copy Text": "テキストをコピー",
		"Copied!": "コピーしました！",
		Screenshot: "スクリーンショット",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "アーカイブ",
		Save: "保存",
		Delete: "削除",
		"Select All": "すべて選択",
		Export: "エクスポート",
		Error: "エラー",
		Loading: "読み込み中",
		Preview: "プレビュー",
		"File Name": "ファイル名",
		"Export All": "すべてエクスポート",
		"Exporter Settings": "エクスポーター設定",
		"Export Dialog Title": "会話をエクスポート",
		"Invalid File Format": "無効なファイル形式",
		"Export from official export file": "公式エクスポートファイルからエクスポートする",
		"Export from API": "APIからエクスポートする",
		"Available variables": "使用可能な変数",
		"Conversation Timestamp": "会話のタイムスタンプ",
		"Conversation Timestamp Description": "選択したエクスポート形式に含められます。",
		"Enable on HTML": "HTML ファイルで有効にする",
		"Enable on Markdown": "Markdown ファイルで有効にする",
		"Use 24-hour format": "24時間形式を使用する (例: 23:59)",
		"Export Format": "エクスポートフォーマット",
		"Export Metadata": "メタデータをエクスポート",
		"Export Metadata Description": "エクスポートされたMarkdownおよびHTMLファイルにメタデータを追加します。",
		"Export Thinking Process": "思考プロセスをエクスポート",
		"Export Thinking Process Description": "エクスポートされたMarkdownおよびHTMLファイルにモデルの思考・推論プロセスを含めます。",
		"Export Sources": "ソースをエクスポート",
		"Export Sources Description": "各回答の末尾に表示されるソース一覧を、エクスポートされた Markdown および HTML ファイルに含めます。",
		Sources: "出典",
		"Conversation Archive Alert": "選択したすべての会話をアーカイブしてもよろしいですか？",
		"Conversation Archived Message": "選択したすべての会話がアーカイブされました。変更を表示するには、ページを更新してください。",
		"Conversation Delete Alert": "選択したすべての会話を削除してもよろしいですか？",
		"Conversation Deleted Message": "選択したすべての会話が削除されました。変更を表示するには、ページを更新してください。",
		"Please start a conversation first": "まず会話を開始してください。",
		"Select Project": "プロジェクトを選択",
		"(no project)": "（プロジェクトなし）",
		"Export All Limit": "すべてエクスポートの上限",
		"Export All Limit Description": "「すべてエクスポート」ダイアログで読み込む会話の最大数を設定します。",
		"Select a source to load conversations": "上からプロジェクトを選択して会話を読み込んでください。",
		Search: "検索",
		"Selected of total": "選択済み {{selected}} / {{total}}",
		"Shift Click Hint": "Shift+クリックで範囲選択",
		"No results": "結果なし",
		Title: "タイトル",
		Created: "作成",
		Updated: "更新",
		Today: "今日",
		Yesterday: "昨日",
		Starred: "スター付き",
		"Native Format": "ネイティブ形式"
	};
	var ru_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "Export",
		Setting: "Параметры",
		Language: "Язык",
		"Copy Text": "Копировать текст",
		"Copied!": "Скопировано!",
		Screenshot: "Скриншот",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Архивировать",
		Save: "Сохранить",
		Delete: "Удалить",
		"Select All": "Выбрать все",
		Export: "Экспорт",
		Error: "Ошибка",
		Loading: "Загрузка",
		Preview: "Предпросмотр",
		"File Name": "Имя файла",
		"Export All": "Экспортировать все",
		"Exporter Settings": "Параметры экспорта",
		"Export Dialog Title": "Экспортировать беседы",
		"Invalid File Format": "Неверный формат файла",
		"Export from official export file": "Экспорт из официального файла",
		"Export from API": "Экспорт из API",
		"Available variables": "Доступные переменные",
		"Conversation Timestamp": "Временная метка разговора",
		"Conversation Timestamp Description": "Можно включить в выбранные форматы экспорта.",
		"Enable on HTML": "Включить для HTML-файлов",
		"Enable on Markdown": "Включить для файлов Markdown",
		"Use 24-hour format": "Использовать 24-часовой формат (например, 23:59)",
		"Export Format": "Формат экспорта",
		"Export Metadata": "Экспорт метаданных",
		"Export Metadata Description": "Добавляйте метаданные в экспортированные файлы Markdown и HTML.",
		"Export Thinking Process": "Экспорт процесса мышления",
		"Export Thinking Process Description": "Включить процесс мышления/рассуждения модели в экспортированные файлы Markdown и HTML.",
		"Export Sources": "Экспорт источников",
		"Export Sources Description": "Включить список источников, показанный в конце каждого ответа, в экспортированные файлы Markdown и HTML.",
		Sources: "Источники",
		"Conversation Archive Alert": "Вы уверены, что хотите архивировать все выбранные разговоры?",
		"Conversation Archived Message": "Все выбранные разговоры были заархивированы. Пожалуйста, обновите страницу, чтобы увидеть изменения.",
		"Conversation Delete Alert": "Вы уверены, что хотите удалить все выбранные разговоры?",
		"Conversation Deleted Message": "Все выбранные разговоры были удалены. Пожалуйста, обновите страницу, чтобы увидеть изменения.",
		"Please start a conversation first": "Пожалуйста, начните разговор первым.",
		"Select Project": "Выберите проект",
		"(no project)": "(нет проекта)",
		"Export All Limit": "Лимит экспорта всех",
		"Export All Limit Description": "Установите максимальное количество бесед для загрузки в диалоге 'Экспортировать все'.",
		"Select a source to load conversations": "Выберите проект выше, чтобы загрузить беседы.",
		Search: "Поиск",
		"Selected of total": "Выбрано {{selected}} / {{total}}",
		"Shift Click Hint": "Shift+клик — выбрать диапазон",
		"No results": "Нет результатов",
		Title: "Название",
		Created: "Создано",
		Updated: "Обновлено",
		Today: "Сегодня",
		Yesterday: "Вчера",
		Starred: "Избранное",
		"Native Format": "Нативный формат"
	};
	var tr_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "Dışa Aktar",
		Setting: "Ayarlar",
		Language: "Dil",
		"Copy Text": "Metni Kopyala",
		"Copied!": "Kopyalandı!",
		Screenshot: "Ekran Alıntısı",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Arşiv",
		Save: "Kaydet",
		Delete: "Sil",
		"Select All": "Tümünü Seç",
		Export: "Dışa Aktar",
		Error: "Hata",
		Loading: "Yükleniyor",
		Preview: "Önizleme",
		"File Name": "Dosya Adı",
		"Export All": "Tümünü Dışa Aktar",
		"Exporter Settings": "Dışa Aktarma Ayarları",
		"Export Dialog Title": "Konuşmaları Dışa Aktar",
		"Invalid File Format": "Dosya Biçimi Geçersiz",
		"Export from official export file": "Resmi dışa aktarma dosyasından dışa aktar",
		"Export from API": "API'den dışa aktar",
		"Available variables": "Kullanılabilir değişkenler",
		"Conversation Timestamp": "Konuşma zaman bilgisi",
		"Conversation Timestamp Description": "Seçilen dışa aktarma biçimlerine eklenebilir.",
		"Enable on HTML": "HTML dosyalarında etkinleştir",
		"Enable on Markdown": "Markdown dosyalarında etkinleştir",
		"Use 24-hour format": "24 saat biçimini kullan (örn. 23:59)",
		"Export Format": "Dışa Aktarma Formatı",
		"Export Metadata": "Üst veriyi dışa aktar",
		"Export Metadata Description": "Dışa aktarılan Markdown ve HTML dosyalarına üst veri ekle",
		"Export Thinking Process": "Düşünme Sürecini Dışa Aktar",
		"Export Thinking Process Description": "Dışa aktarılan Markdown ve HTML dosyalarına modelin düşünme/akıl yürütme sürecini dahil et.",
		"Export Sources": "Kaynakları Dışa Aktar",
		"Export Sources Description": "Her yanıtın sonunda gösterilen kaynak listesini dışa aktarılan Markdown ve HTML dosyalarına dahil et.",
		Sources: "Kaynaklar",
		"Conversation Archive Alert": "Seçilen tüm konuşmaları arşivlemek istediğinizden emin misiniz?",
		"Conversation Archived Message": "Seçilen tüm konuşmalar arşivlendi. Değişiklikleri görmek için sayfayı yenileyin.",
		"Conversation Delete Alert": "Seçilen tüm konuşmaları silmek istediğinizden emin misiniz?",
		"Conversation Deleted Message": "Seçilen tüm konuşmalar silindi. Değişiklikleri görmek için sayfayı yenileyin.",
		"Please start a conversation first": "Lütfen önce bir konuşma başlatın.",
		"Select Project": "Proje Seç",
		"(no project)": "(proje yok)",
		"Export All Limit": "Tümünü Dışa Aktarma Limiti",
		"Export All Limit Description": "'Tümünü Dışa Aktar' iletişim kutusunda yüklenecek maksimum konuşma sayısını ayarlayın.",
		"Select a source to load conversations": "Konuşmaları yüklemek için yukarıdan bir proje seçin.",
		Search: "Ara",
		"Selected of total": "{{selected}} seçildi / {{total}}",
		"Shift Click Hint": "Aralık seçmek için Shift+tık",
		"No results": "Sonuç yok",
		Title: "Başlık",
		Created: "Oluşturuldu",
		Updated: "Güncellendi",
		Today: "Bugün",
		Yesterday: "Dün",
		Starred: "Yıldızlı",
		"Native Format": "Yerel biçim"
	};
	var zh_Hans_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "导出",
		Setting: "设置",
		Language: "语言",
		"Copy Text": "复制文字",
		"Copied!": "已复制!",
		Screenshot: "截屏",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "归档",
		Save: "保存",
		Delete: "删除",
		Download: "下载",
		"Batch downloads ready": "所选文件已经准备好，请点击下方按钮下载。",
		"Select All": "全选",
		Export: "导出",
		Error: "错误",
		Loading: "加载中",
		Preview: "预览",
		"File Name": "文件名",
		"Export All": "批量导出",
		"Exporter Settings": "导出设置",
		"Export Dialog Title": "导出对话",
		"Invalid File Format": "无效的文件格式",
		"Export from official export file": "从官方导出文件导出",
		"Export from API": "从 API 导出",
		"Available variables": "可用变量",
		"Conversation Timestamp": "对话时间戳",
		"Conversation Timestamp Description": "可按下方选项包含在导出文件中。",
		"Enable on HTML": "在 HTML 文件上启用",
		"Enable on Markdown": "在 Markdown 文件上启用",
		"Use 24-hour format": "使用24小时制 (例如 23:59)",
		"Export Format": "导出格式",
		"Export Metadata": "导出元数据",
		"Export Metadata Description": "会添加至 Markdown 以及 HTML 导出。",
		"Export Thinking Process": "导出思考过程",
		"Export Thinking Process Description": "在导出的 Markdown 和 HTML 文件中包含模型的思考/推理过程。",
		"Export Sources": "导出来源",
		"Export Sources Description": "在导出的 Markdown 和 HTML 文件中包含每个回答末尾显示的来源列表。",
		Sources: "来源",
		Thinking: "思考过程",
		"Thought for {{duration}} seconds": "已思考 {{duration}} 秒",
		"Conversation Archive Alert": "确定要归档所有选取的对话？",
		"Conversation Archived Message": "所有所选的对话已归档。请刷新页面。",
		"Conversation Delete Alert": "确定要删除所有选取的对话？",
		"Conversation Deleted Message": "所有所选的对话已删除。请刷新页面。",
		"Please start a conversation first": "请先开始对话。",
		"Select Project": "选择项目",
		"(no project)": "（无项目）",
		"Export All Limit": "批量导出上限",
		"Export All Limit Description": "设置“批量导出”对话框中加载的最大对话数量。",
		"Select a source to load conversations": "请在上方选择一个项目以加载对话。",
		Search: "搜索",
		"Selected of total": "已选 {{selected}} / 共 {{total}}",
		"Shift Click Hint": "按住 Shift 点击可选择范围",
		"No results": "无结果",
		Title: "标题",
		Created: "创建时间",
		Updated: "更新时间",
		Today: "今天",
		Yesterday: "昨天",
		Starred: "已加星标",
		"Native Format": "原生格式",
		"All export parts ready": "全部 {{total}} 包已生成，请下载所有分包以保存完整记录。",
		"Export parts in progress": "仍在导出，已生成 {{prepared}}/{{total}} 包。可先下载已生成的分包，请保持窗口打开，等待剩余分包。",
		"Export parts stopped": "导出已停止，仅生成 {{prepared}}/{{total}} 包。下方文件只包含部分所选对话。",
		"Export parts info": "分为 {{total}} 个文件，每个最多 {{size}} 条对话",
		"Batch progress": "第 {{current}}/{{total}} 包",
		Cancel: "取消"
	};
	var zh_Hant_default = {
		title: "DeepSeek Exporter",
		ExportHelper: "匯出",
		Setting: "設定",
		Language: "語言",
		"Copy Text": "複製文字",
		"Copied!": "已複製!",
		Screenshot: "截圖",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "封存",
		Save: "保存",
		Delete: "刪除",
		Download: "下載",
		"Batch downloads ready": "所選檔案已經準備好，請點擊下方按鈕下載。",
		"Select All": "全選",
		Export: "匯出",
		Error: "錯誤",
		Loading: "載入中",
		Preview: "預覽",
		"File Name": "檔案名稱",
		"Export All": "批量匯出",
		"Exporter Settings": "設定",
		"Export Dialog Title": "匯出對話",
		"Invalid File Format": "無效的檔案格式",
		"Export from official export file": "從官方匯出檔案匯出",
		"Export from API": "從 API 匯出",
		"Available variables": "可用變數",
		"Conversation Timestamp": "對話時間戳",
		"Conversation Timestamp Description": "可依下方選項包含在匯出檔案中。",
		"Enable on HTML": "在 HTML 檔案上啟用",
		"Enable on Markdown": "在 Markdown 檔案上啟用",
		"Use 24-hour format": "使用24小時制 (例如 23:59)",
		"Export Format": "匯出格式",
		"Export Metadata": "匯出元資料",
		"Export Metadata Description": "會添加至 Markdown 以及 HTML 匯出。",
		"Export Thinking Process": "匯出思考過程",
		"Export Thinking Process Description": "在匯出的 Markdown 和 HTML 檔案中包含模型的思考/推理過程。",
		"Export Sources": "匯出來源",
		"Export Sources Description": "在匯出的 Markdown 和 HTML 檔案中包含每個回答末尾顯示的來源列表。",
		Sources: "來源",
		Thinking: "思考過程",
		"Thought for {{duration}} seconds": "已思考 {{duration}} 秒",
		"Conversation Archive Alert": "確定要封存所有選取的對話？",
		"Conversation Archived Message": "所有選取的對話已封存。請重新整理頁面。",
		"Conversation Delete Alert": "確定要刪除所有選取的對話？",
		"Conversation Deleted Message": "所有選取的對話已刪除。請重新整理頁面。",
		"Please start a conversation first": "請先開始對話。",
		"Select Project": "選擇專案",
		"(no project)": "（無專案）",
		"Export All Limit": "批量匯出上限",
		"Export All Limit Description": "設定「批量匯出」對話方塊中載入的最大對話數量。",
		"Select a source to load conversations": "請在上方選擇一個專案以載入對話。",
		Search: "搜尋",
		"Selected of total": "已選 {{selected}} / 共 {{total}}",
		"Shift Click Hint": "按住 Shift 點擊可選擇範圍",
		"No results": "無結果",
		Title: "標題",
		Created: "建立時間",
		Updated: "更新時間",
		Today: "今天",
		Yesterday: "昨天",
		Starred: "已加星號",
		"Native Format": "原生格式",
		"All export parts ready": "全部 {{total}} 包已產生，請下載所有分包以儲存完整記錄。",
		"Export parts in progress": "仍在匯出，已產生 {{prepared}}/{{total}} 包。可先下載已產生的分包，請保持視窗開啟，等待剩餘分包。",
		"Export parts stopped": "匯出已停止，僅產生 {{prepared}}/{{total}} 包。下方檔案只包含部分所選對話。",
		"Export parts info": "分為 {{total}} 個檔案，每個最多 {{size}} 條對話",
		"Batch progress": "第 {{current}}/{{total}} 包",
		Cancel: "取消"
	};
	var _GM_deleteValue = (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
	var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
	var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
	var GMStorage = class {
		static supported = typeof _GM_getValue === "function" && typeof _GM_setValue === "function" && typeof _GM_deleteValue === "function";
		static get(key) {
			const item = _GM_getValue(key, "");
			if (item) try {
				return JSON.parse(item);
			} catch {
				return null;
			}
			return null;
		}
		static set(key, value) {
			_GM_setValue(key, JSON.stringify(value));
		}
		static delete(key) {
			_GM_deleteValue(key);
		}
	};
	var LocalStorage = class {
		static supported = typeof localStorage === "object";
		static get(key) {
			const item = localStorage.getItem(key);
			if (item) try {
				return JSON.parse(item);
			} catch {
				return null;
			}
			return null;
		}
		static set(key, value) {
			const item = JSON.stringify(value);
			localStorage.setItem(key, item);
		}
		static delete(key) {
			localStorage.removeItem(key);
		}
	};
	var MemoryStorage = class {
		static map = new Map();
		static supported = true;
		static get(key) {
			const item = this.map.get(key);
			if (!item) return null;
			return item;
		}
		static set(key, value) {
			this.map.set(key, value);
		}
		static delete(key) {
			this.map.delete(key);
		}
	};
	var ScriptStorage = class {
		static get(key) {
			if (GMStorage.supported) try {
				return GMStorage.get(key);
			} catch {}
			if (LocalStorage.supported) try {
				return LocalStorage.get(key);
			} catch {}
			return MemoryStorage.get(key);
		}
		static set(key, value) {
			if (GMStorage.supported) try {
				return GMStorage.set(key, value);
			} catch {}
			if (LocalStorage.supported) try {
				return LocalStorage.set(key, value);
			} catch {}
			return MemoryStorage.set(key, value);
		}
		static delete(key) {
			if (GMStorage.supported) try {
				return GMStorage.delete(key);
			} catch {}
			if (LocalStorage.supported) try {
				return LocalStorage.delete(key);
			} catch {}
			return MemoryStorage.delete(key);
		}
	};
	var EN_US = {
		name: "English",
		code: "en-US",
		resource: en_default
	};
	var ES = {
		name: "Español",
		code: "es",
		resource: es_default
	};
	var FR = {
		name: "Français",
		code: "fr",
		resource: fr_default
	};
	var ID_ID = {
		name: "Indonesia",
		code: "id-ID",
		resource: id_default
	};
	var JA_JP = {
		name: "日本語",
		code: "ja-JP",
		resource: jp_default
	};
	var RU = {
		name: "Русский",
		code: "ru",
		resource: ru_default
	};
	var TR_TR = {
		name: "Türkçe",
		code: "tr-TR",
		resource: tr_default
	};
	var ZH_Hans = {
		name: "简体中文",
		code: "zh-Hans",
		resource: zh_Hans_default
	};
	var ZH_Hant = {
		name: "繁體中文",
		code: "zh-Hant",
		resource: zh_Hant_default
	};
	var LOCALES = [
		EN_US,
		ES,
		FR,
		ID_ID,
		JA_JP,
		RU,
		TR_TR,
		ZH_Hans,
		ZH_Hant
	];
	var LanguageMapping = {
		"en": EN_US.code,
		"en-US": EN_US.code,
		"es": ES.code,
		"es-ES": ES.code,
		"es-AR": ES.code,
		"es-CL": ES.code,
		"es-CO": ES.code,
		"es-MX": ES.code,
		"es-US": ES.code,
		"fr": FR.code,
		"fr-FR": FR.code,
		"id": ID_ID.code,
		"id-ID": ID_ID.code,
		"ja": JA_JP.code,
		"ja-JP": JA_JP.code,
		"ru": RU.code,
		"ru-RU": RU.code,
		"tr": TR_TR.code,
		"tr-TR": TR_TR.code,
		"zh": ZH_Hans.code,
		"zh-CN": ZH_Hans.code,
		"zh-MO": ZH_Hans.code,
		"zh-SG": ZH_Hans.code,
		"zh-Hans": ZH_Hans.code,
		"zh-HK": ZH_Hant.code,
		"zh-TW": ZH_Hant.code,
		"zh-Hant": ZH_Hant.code
	};
	var resources = LOCALES.reduce((acc, cur) => {
		acc[cur.code] = { translation: cur.resource };
		return acc;
	}, {});
	function standardizeLanguage(language) {
		if (!language) return null;
		if (language in LanguageMapping) return LanguageMapping[language];
		const shortLang = language.split("-")[0];
		if (shortLang in LanguageMapping) return LanguageMapping[shortLang];
		return null;
	}
	function getNavigatorLanguage() {
		const { language, languages } = navigator;
		if (language) return language;
		if (languages && languages.length) return languages[0];
		return null;
	}
	function getDefaultLanguage() {
		const storedLanguage = ScriptStorage.get(KEY_LANGUAGE);
		const browserLanguage = getNavigatorLanguage();
		return standardizeLanguage(storedLanguage) ?? standardizeLanguage(browserLanguage) ?? EN_US.code;
	}
	instance.use(initReactI18next).init({
		fallbackLng: EN_US.code,
		lng: getDefaultLanguage(),
		debug: false,
		resources,
		interpolation: { escapeValue: false }
	});
	instance.on("languageChanged", (lng) => {
		ScriptStorage.set(KEY_LANGUAGE, lng);
	});
	var i18n_default = instance;
	var template_default = "<!DOCTYPE html>\n<html lang=\"{{lang}}\" data-theme=\"{{theme}}\">\n<head>\n    <meta charset=\"UTF-8\" />\n    <link rel=\"icon\" href=\"https://chat.deepseek.com/favicon.svg\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>{{title}}</title>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css\">\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js\"><\/script>\n    <script>\n        hljs.highlightAll()\n    <\/script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.css\">\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.js\"><\/script>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/contrib/auto-render.min.js\"><\/script>\n    <script>\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            renderMathInElement(document.body, {\n                delimiters: [\n                    { left: \"$$\", right: \"$$\", display: true },\n                    { left: \"$\", right: \"$\", display: false },\n                    { left: \"\\\\[\", right: \"\\\\]\", display: true },\n                    { left: \"\\\\(\", right: \"\\\\)\", display: false }\n                ],\n                throwOnError: false,\n                ignoredClasses: [\"no-katex\"],\n                preProcess: function(math) {\n                    return `\\\\displaystyle \\\\Large ${math}`;\n                }\n            });\n            document.querySelectorAll('.katex').forEach(function(el) {\n                const parent = el.parentNode;\n                const grandparent = parent.parentNode;\n                if (grandparent.tagName === 'P' && isOnlyContent(grandparent, parent)) {\n                    el.style.width = '100%';\n                    el.style.display = 'block';\n                    el.style.textAlign = 'center';\n                    parent.style.textAlign = 'center';\n                } else {\n                    el.style.display = 'inline-block';\n                    el.style.width = 'fit-content';\n                }\n            });\n            function isOnlyContent(parent, element) {\n                let onlyKaTeX = true;\n                parent.childNodes.forEach(function(child) {\n                    if (child !== element) {\n                        if (child.nodeType === Node.TEXT_NODE) {\n                            if (child.textContent.trim().length > 0) {\n                                onlyKaTeX = false;\n                            }\n                        } else if (child.nodeType === Node.ELEMENT_NODE) {\n                            onlyKaTeX = false;\n                        }\n                    }\n                });\n                return onlyKaTeX;\n            }\n        });\n    <\/script>\n\n    <style>\n        :root {\n            --page-text: #0d0d0d;\n            --page-bg: #fff;\n            --td-borders: #374151;\n            --th-borders: #4b5563;\n            --tw-prose-code: var(--page-text);\n            --tw-prose-counters: #9b9b9b;\n            --tw-prose-headings: var(--page-text);\n            --tw-prose-hr: rgba(0,0,0,.25);\n            --tw-prose-links: var(--page-text);\n            --tw-prose-quotes: var(--page-text);\n            --meta-title: #616c77;\n            --source-border: #e5e7eb;\n            --source-bg: #f8fafc;\n            --source-muted: #64748b;\n        }\n\n        [data-theme=\"dark\"] {\n            --page-text: #ececec;\n            --page-bg: #212121;\n            --tw-prose-code: var(--page-text);\n            --tw-prose-counters: #9b9b9b;\n            --tw-prose-headings: var(--page-text);\n            --tw-prose-hr: hsla(0,0%,100%,.25);\n            --tw-prose-links: var(--page-text);\n            --tw-prose-quotes: var(--page-text);\n            --meta-title: #959faa;\n            --source-border: #374151;\n            --source-bg: #27272a;\n            --source-muted: #a1a1aa;\n        }\n\n        * {\n            box-sizing: border-box;\n            font-size: 16px;\n        }\n\n        ::-webkit-scrollbar {\n            height: 1rem;\n            width: .5rem\n        }\n\n        ::-webkit-scrollbar:horizontal {\n            height: .5rem;\n            width: 1rem\n        }\n\n        ::-webkit-scrollbar-track {\n            background-color: transparent;\n            border-radius: 9999px\n        }\n\n        ::-webkit-scrollbar-thumb {\n            --tw-border-opacity: 1;\n            background-color: rgba(217,217,227,.8);\n            border-color: rgba(255,255,255,var(--tw-border-opacity));\n            border-radius: 9999px;\n            border-width: 1px\n        }\n\n        ::-webkit-scrollbar-thumb:hover {\n            --tw-bg-opacity: 1;\n            background-color: rgba(236,236,241,var(--tw-bg-opacity))\n        }\n\n        .dark ::-webkit-scrollbar-thumb {\n            --tw-bg-opacity: 1;\n            background-color: rgba(86,88,105,var(--tw-bg-opacity))\n        }\n\n        .dark ::-webkit-scrollbar-thumb:hover {\n            --tw-bg-opacity: 1;\n            background-color: rgba(172,172,190,var(--tw-bg-opacity))\n        }\n\n        @media (min-width: 768px) {\n            .scrollbar-trigger ::-webkit-scrollbar-thumb {\n                visibility:hidden\n            }\n\n            .scrollbar-trigger:hover ::-webkit-scrollbar-thumb {\n                visibility: visible\n            }\n        }\n\n        body {\n            font-family: Söhne,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\n            font-size: 14px;\n            line-height: 1.5;\n            color: var(--page-text);\n            background-color: var(--page-bg);\n            margin: 0;\n            padding: 0;\n        }\n\n        [data-theme=\"light\"] .sun {\n            display: none;\n        }\n\n        [data-theme=\"dark\"] .moon {\n            display: none;\n        }\n\n        .toggle {\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            width: 32px;\n            height: 32px;\n            border-radius: 4px;\n            background-color: #fff;\n            border: 1px solid #e2e8f0;\n        }\n\n        [data-width=\"narrow\"] .width-toggle .expand {\n            display: block;\n        }\n\n        [data-width=\"wide\"] .width-toggle .narrow {\n            display: block;\n        }\n\n        .width-toggle {\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            width: 32px;\n            height: 32px;\n            border-radius: 4px;\n            background-color: #fff;\n            border: 1px solid #e2e8f0;\n            margin-left: 8px;\n            cursor: pointer;\n        }\n\n        .width-toggle svg {\n            display: none;\n        }\n\n        .metadata_container {\n            display: flex;\n            flex-direction: column;\n            margin-top: 8px;\n            padding-left: 1rem;\n        }\n\n        .metadata_item {\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            border-radius: 16px;\n            padding: 4px 0.5rem;\n        }\n\n        .metadata_item:hover {\n            background-color: rgba(0,0,0,.1);\n        }\n\n        .metadata_item > div:first-child {\n            flex: 0 1 100px;\n            color: var(--meta-title);\n        }\n\n        .metadata_item > div:last-child {\n            flex: 1;\n        }\n\n        a {\n            color: var(--tw-prose-links);\n            font-size: 0.8rem;\n            text-decoration-line: underline;\n            text-underline-offset: 2px;\n        }\n\n        .conversation-content > p:first-child,\n        ol:first-child {\n            margin-top: 0;\n        }\n\n        p>code, li>code {\n            color: var(--tw-prose-code);\n            font-weight: 600;\n            font-size: .875em;\n        }\n\n        p>code::before,\n        p>code::after,\n        li>code::before,\n        li>code::after {\n            content: \"`\";\n        }\n\n        hr {\n            width: 100%;\n            height: 0;\n            border: 1px solid var(--tw-prose-hr);\n            margin-bottom: 1em;\n            margin-top: 1em;\n        }\n\n        pre {\n            color: #ffffff;\n            background-color: #000000;\n            overflow-x: auto;\n            margin: 0 0 1rem 0;\n            border-radius: 0.375rem;\n        }\n\n        pre>code {\n            font-family: Söhne Mono, Monaco, Andale Mono, Ubuntu Mono, monospace !important;\n            font-weight: 400;\n            font-size: .875em;\n            line-height: 1.7142857;\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n            color: var(--tw-prose-headings);\n            margin: 0;\n        }\n\n        h1 {\n            font-size: 2.25em;\n            font-weight: 600;\n            line-height: 1.1111111;\n            margin-bottom: 0.8888889em;\n            margin-top: 0;\n        }\n\n        h2 {\n            font-size: 1.5em;\n            font-weight: 700;\n            line-height: 1.3333333;\n            margin-bottom: 1em;\n            margin-top: 2em;\n        }\n\n        h3 {\n            font-size: 1.25em;\n            font-weight: 600;\n            line-height: 1.6;\n            margin-bottom: .6em;\n            margin-top: 1.6em;\n        }\n\n        h4 {\n            font-weight: 400;\n            line-height: 1.5;\n            margin-bottom: .5em;\n            margin-top: 1.5em\n        }\n\n        h3,h4 {\n            margin-bottom: .5rem;\n            margin-top: 1rem;\n        }\n\n        h5 {\n            font-weight: 600;\n        }\n\n        blockquote {\n            border-left: 2px solid rgba(142,142,160,1);\n            color: var(--tw-prose-quotes);\n            font-style: italic;\n            font-style: normal;\n            font-weight: 500;\n            line-height: 1rem;\n            margin: 1.6em 0;\n            padding-left: 1em;\n            quotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\n        }\n\n        blockquote p:first-of-type:before {\n            content: open-quote;\n        }\n\n        blockquote p:last-of-type:after {\n            content: close-quote;\n        }\n\n        ol, ul {\n            padding-left: 1.1rem;\n        }\n\n        ::marker {\n            color: var(--tw-prose-counters);\n            font-weight: 400;\n        }\n\n        table {\n            width: 100%;\n            border-collapse: separate;\n            border-spacing: 0 0;\n            table-layout: auto;\n            text-align: left;\n            font-size: .875em;\n            line-height: 1.7142857;\n        }\n\n        table * {\n            box-sizing: border-box;\n            border-width: 0;\n            border-style: solid;\n            border-color: #d9d9e3;\n        }\n\n        table thead {\n            border-bottom-color: var(--th-borders);\n            border-bottom-width: 1px;\n        }\n\n        table th {\n            background-color: rgba(236,236,241,.2);\n            border-bottom-width: 1px;\n            border-left-width: 1px;\n            border-top-width: 1px;\n            padding: 0.25rem 0.75rem;\n        }\n\n        table th:first-child {\n            border-top-left-radius: 0.375rem;\n        }\n\n        table th:last-child {\n            border-right-width: 1px;\n            border-top-right-radius: 0.375rem;\n        }\n\n        table tbody tr {\n            border-bottom-color: var(--td-borders);\n            border-bottom-width: 1px;\n        }\n\n        table tbody tr:last-child {\n            border-bottom-width: 0;\n        }\n\n        table tbody tr:last-child td:first-child {\n            border-bottom-left-radius: 0.375rem;\n        }\n\n        table tbody tr:last-child td:last-child {\n            border-bottom-right-radius: 0.375rem;\n        }\n\n        table td {\n            border-bottom-width: 1px;\n            border-left-width: 1px;\n            padding: 0.25rem 0.75rem;\n        }\n\n        table td:last-child {\n            border-right-width: 1px;\n        }\n\n        [type=checkbox], [type=radio] {\n            accent-color: #2563eb;\n        }\n\n        .conversation {\n            margin: 0 auto;\n            padding: 1rem;\n            max-width: 64rem;\n        }\n\n        [data-width=\"narrow\"] .conversation {\n            max-width: 64rem;\n        }\n\n        [data-width=\"wide\"] .conversation {\n            max-width: 90%;\n        }\n\n        @media (min-width: 1280px) {\n            .conversation {\n                max-width: 48rem;\n            }\n        }\n\n        @media (min-width: 1024px) {\n            .conversation {\n                max-width: 40rem;\n            }\n        }\n\n        @media (min-width: 768px) {\n            .conversation {\n                max-width: 48rem;\n            }\n        }\n\n        .conversation-header {\n            margin-bottom: 1rem;\n        }\n\n        .conversation-header h1 {\n            margin: 0;\n        }\n\n        .conversation-header h1 a {\n            font-size: 1.5rem;\n        }\n\n        .conversation-header .conversation-export {\n            margin-top: 0.5rem;\n            font-size: 0.8rem;\n        }\n\n        .conversation-header p {\n            margin-top: 0.5rem;\n            font-size: 0.8rem;\n        }\n\n        .conversation-item {\n            display: flex;\n            position: relative;\n            padding: 1rem;\n            border-left: 1px solid rgba(0,0,0,.1);\n            border-right: 1px solid rgba(0,0,0,.1);\n            border-bottom: 1px solid rgba(0,0,0,.1);\n        }\n\n        .conversation-item:first-of-type {\n            border-top: 1px solid rgba(0,0,0,.1);\n        }\n\n        .author {\n            display: flex;\n            flex: 0 0 30px;\n            justify-content: center;\n            align-items: center;\n            width: 30px;\n            height: 30px;\n            border-radius: 0.125rem;\n            margin-right: 1rem;\n            overflow: hidden;\n        }\n\n        .author svg {\n            color: #fff;\n            width: 22px;\n            height: 22px;\n        }\n\n        .author img {\n            content: url(\"{{avatar}}\");\n            width: 100%;\n            height: 100%;\n        }\n\n        .author.DeepSeek {\n            background-color: #4c89ff;\n            color: #fff;\n        }\n\n        .deepseek-avatar {\n            font-size: 0.68rem;\n            font-weight: 700;\n            letter-spacing: -0.04em;\n        }\n\n        .conversation-content-wrapper {\n            display: flex;\n            position: relative;\n            overflow: hidden;\n            flex: 1 1 auto;\n            flex-direction: column;\n        }\n\n        .thinking {\n            font-size: 0.875rem;\n            line-height: 1.5;\n            margin-bottom: 0.75rem;\n            border: 1px solid #d1d5db;\n            border-radius: 0.5rem;\n            padding: 0.5rem 0.75rem;\n            min-width: 0;\n            color: #6b7280;\n            overflow-wrap: anywhere;\n        }\n\n        .thinking summary {\n            cursor: pointer;\n            font-weight: 500;\n            color: #6b7280;\n        }\n\n        .thinking p {\n            margin: 0.5rem 0;\n            white-space: pre-wrap;\n        }\n\n        .thinking-content {\n            margin-top: 0.75rem;\n        }\n\n        .thinking-content > :first-child {\n            margin-top: 0;\n        }\n\n        .thinking-content > :last-child {\n            margin-bottom: 0;\n        }\n\n        .thinking pre {\n            padding: 0.75rem;\n            white-space: pre;\n            overflow-wrap: normal;\n        }\n\n        .thinking img {\n            max-width: 100%;\n            height: auto;\n        }\n\n        [data-theme=\"dark\"] .thinking {\n            border-color: #4b5563;\n        }\n\n        [data-theme=\"dark\"] .thinking summary,\n        [data-theme=\"dark\"] .thinking {\n            color: #9ca3af;\n        }\n\n        .conversation-content {\n            font-size: 1rem;\n            line-height: 1.5;\n        }\n\n        .conversation-content p {\n            white-space: pre-wrap;\n            line-height: 28px;\n        }\n\n        .conversation-content img, .conversation-content video {\n            display: block;\n            max-width: 100%;\n            height: auto;\n            margin-bottom: 2em;\n            margin-top: 2em;\n        }\n\n        .export-sources {\n            border-top: 1px solid var(--source-border);\n            margin-top: 2rem;\n            padding-top: 1.25rem;\n        }\n\n        .export-sources > summary {\n            align-items: center;\n            cursor: pointer;\n            display: flex;\n            font-size: 1.05rem;\n            font-weight: 600;\n            list-style: none;\n        }\n\n        .export-sources > summary::-webkit-details-marker {\n            display: none;\n        }\n\n        .export-sources > summary::before {\n            color: var(--source-muted);\n            content: \"▶\";\n            display: inline-block;\n            font-size: 0.7rem;\n            margin-right: 0.5rem;\n            transform: rotate(0deg);\n            transition: transform 0.15s ease;\n        }\n\n        .export-sources[open] > summary::before {\n            transform: rotate(90deg);\n        }\n\n        .export-sources[open] > summary {\n            margin-bottom: 0.875rem;\n        }\n\n        .export-source-list {\n            display: grid;\n            gap: 0.75rem;\n            list-style-position: outside;\n            margin: 0;\n            padding-left: 1.75rem;\n        }\n\n        .export-source-item {\n            background: var(--source-bg);\n            border: 1px solid var(--source-border);\n            border-radius: 0.625rem;\n            padding: 0.75rem 0.875rem;\n        }\n\n        .export-source-item::marker {\n            color: var(--source-muted);\n            font-size: 0.8rem;\n            font-variant-numeric: tabular-nums;\n        }\n\n        .export-source-title a {\n            font-size: 0.925rem;\n            font-weight: 600;\n            line-height: 1.4;\n        }\n\n        .export-source-meta {\n            color: var(--source-muted);\n            font-size: 0.75rem;\n            margin-top: 0.25rem;\n        }\n\n        .conversation-content .export-source-snippet {\n            color: var(--source-muted);\n            font-size: 0.825rem;\n            line-height: 1.5;\n            margin: 0.4rem 0 0;\n            white-space: normal;\n        }\n\n        .time {\n            position: absolute;\n            right: 8px;\n            bottom: 0;\n            font-size: 0.8rem;\n            color: #acacbe\n        }\n\n    </style>\n</head>\n\n<body>\n    <svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <symbol id=\"unused-assistant-mark\" viewBox=\"0 0 41 41\">\n            <path d=\"M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z\" fill=\"currentColor\"></path>\n        </symbol>\n    </svg>\n    <div class=\"conversation\">\n        <div class=\"conversation-header\">\n            <h1>\n                <a href=\"{{source}}\" target=\"_blank\" rel=\"noopener noreferrer\">{{title}}</a>\n                <button class=\"toggle\">\n                    <svg class=\"sun w-4 h-4\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line></svg>\n                    <svg class=\"moon w-4 h-4\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>\n                </button>\n                <button class=\"toggle width-toggle\">\n                    <svg class=\"expand w-4 h-4\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display: block;\">\n                        <path d=\"M3 12h18M6 8l-4 4 4 4M18 8l4 4-4 4\"></path>\n                    </svg>\n                    <svg class=\"narrow w-4 h-4\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n                        <path d=\"M3 12h7M14 12h7M6 16l4-4-4-4M18 16l-4-4 4-4\"></path>\n                    </svg>\n                </button>\n            </h1>\n            <div class=\"conversation-export\">\n                <p>Exported by\n                <a href=\"https://github.com/pionxzh/deepseek-exporter\">DeepSeek Exporter</a>\n                at {{time}}</p>\n            </div>\n            {{details}}\n        </div>\n\n        {{content}}\n    </div>\n\n\n    <script>\n        function toggleDarkMode(mode) {\n            const html = document.querySelector('html');\n            const isDarkMode = html.getAttribute('data-theme') === 'dark';\n            const newMode = mode || (isDarkMode ? 'light' : 'dark');\n            if (newMode !== 'dark' && newMode !== 'light') return;\n            html.setAttribute('data-theme', newMode);\n\n            const url = new URL(window.location);\n            url.searchParams.set('theme', newMode);\n            window.history.replaceState({}, '', url);\n        }\n        function toggleWidthMode(mode) {\n            const body = document.querySelector('body');\n            const widthToggleButton = document.querySelector('.width-toggle');\n            const isWide = body.getAttribute('data-width') === 'wide';\n            const newWidthMode = mode || (isWide ? 'narrow' : 'wide');\n            if (newWidthMode !== 'narrow' && newWidthMode !== 'wide') return;\n            body.setAttribute('data-width', newWidthMode);\n\n            const url = new URL(window.location);\n            url.searchParams.set('width', newWidthMode);\n            window.history.replaceState({}, '', url);\n\n            // Update the icon based on the current mode\n            const narrowIcon = widthToggleButton.querySelector('.narrow');\n            const expandIcon = widthToggleButton.querySelector('.expand');\n\n            if (newWidthMode === 'wide') {\n                expandIcon.style.display = \"none\";\n                narrowIcon.style.display = \"block\";\n            } else {\n                expandIcon.style.display = \"block\";\n                narrowIcon.style.display = \"none\";\n            }\n        }\n\n        const urlParams = new URLSearchParams(window.location.search);\n        const theme = urlParams.get('theme');\n        const width = urlParams.get('width');\n\n        if (theme) toggleDarkMode(theme);\n        if (width) toggleWidthMode(width);\n\n        document.querySelector('.toggle').addEventListener('click', () => toggleDarkMode());\n        document.querySelector('.width-toggle').addEventListener('click', () => toggleWidthMode());\n    <\/script>\n</body>\n\n</html>\n";
	var CitationMarkerRegex = /\uE200cite(?:\uE202[^\uE200\uE201]*)+\uE201/gu;
	function normalizeCitationText(input) {
		return input.replaceAll(/[\u00A0\u202F\u2007\u2060]/gu, " ").replaceAll(/[\u2010-\u2015\u2212]/gu, "-").replaceAll(/[\uE203\uE204]/gu, "");
	}
	function transformContentReferences(input, metadata, options = {}) {
		const outputType = options.output ?? "markdown";
		const inlineReferenceMode = options.inlineReferenceMode ?? "expanded";
		const contentRefs = metadata?.content_references ?? [];
		let output = normalizeCitationText(input);
		const sortedRefs = [...contentRefs].filter((ref) => ref.type !== "sources_footnote").sort((a, b) => (b.matched_text?.length || 0) - (a.matched_text?.length || 0));
		for (const ref of sortedRefs) {
			if (!ref.matched_text) continue;
			const matchedText = normalizeCitationText(ref.matched_text);
			if (!matchedText) continue;
			const replacement = formatInlineReference(ref, outputType, inlineReferenceMode);
			output = output.replaceAll(matchedText, replacement);
		}
		output = output.replace(CitationMarkerRegex, "");
		if (options.includeSourceList !== false) {
			const sources = getSourcesFootnoteSources(contentRefs);
			if (sources.length > 0) output = appendSourcesSection(output, sources, outputType, options.sourceListLabel ?? "Sources");
		}
		return output;
	}
	function formatCitationSource(source, output, labelMode = "title") {
		const label = labelMode === "compact" ? getCompactSourceLabel(source) : getSourceTitle(source);
		const url = safeCitationUrl(source.url);
		if (!url) {
			if (output === "markdown") return escapeMarkdownText(label);
			if (output === "html") return escapeHtmlText(label);
			return label;
		}
		if (output === "text") return `${label}: ${url}`;
		if (output === "html") return `<a href="${escapeHtmlAttribute$1(url)}" target="_blank" rel="noopener noreferrer">${escapeHtmlText(label)}</a>`;
		return `[${escapeMarkdownText(label)}](<${escapeMarkdownUrl(url)}>)`;
	}
	function formatInlineReference(ref, output, mode) {
		if (mode === "alt") return ref.alt || "";
		const sources = getInlineSources(ref);
		if (sources.length > 0) {
			const separator = output === "text" ? "; " : ", ";
			return `(${sources.map((source) => formatCitationSource(source, output, "compact")).join(separator)})`;
		}
		if (ref.alt) return ref.alt;
		return "";
	}
	function getInlineSources(ref) {
		const sources = [];
		for (const item of ref.items ?? []) {
			sources.push(item);
			sources.push(...item.supporting_websites ?? []);
		}
		sources.push(...ref.fallback_items ?? []);
		if (sources.length === 0 && (ref.url || ref.title || ref.attribution)) sources.push(ref);
		if (sources.length === 0 && ref.safe_urls?.length) sources.push(...ref.safe_urls.map((url) => ({
			title: url,
			url
		})));
		return dedupeSources(sources);
	}
	function getSourcesFootnoteSources(contentRefs) {
		return dedupeSources(contentRefs.filter((ref) => ref.type === "sources_footnote").flatMap((ref) => {
			if (ref.sources?.length) return ref.sources;
			if (ref.items?.length) return ref.items;
			if (ref.fallback_items?.length) return ref.fallback_items;
			if (ref.safe_urls?.length) return ref.safe_urls.map((url) => ({
				title: url,
				url
			}));
			return [];
		}));
	}
	function appendSourcesSection(input, sources, output, label) {
		const trimmed = input.trimEnd();
		let sourceList;
		if (output === "markdown") sourceList = [
			"<details>",
			`<summary>${escapeMarkdownText(label)} (${sources.length})</summary>`,
			"",
			...sources.map((source) => `- ${formatMarkdownSourceListItem(source)}`),
			"",
			"</details>"
		].join("\n");
		else if (output === "html") sourceList = formatHtmlSourcesSection(sources, label);
		else sourceList = [`${label}:`, ...sources.map((source, index) => `${index + 1}. ${formatCitationSource(source, output)}`)].join("\n");
		return trimmed ? `${trimmed}\n\n${sourceList}` : sourceList;
	}
	function formatMarkdownSourceListItem(source) {
		const link = formatCitationSource(source, "markdown");
		const attribution = source.attribution?.trim();
		const title = getSourceTitle(source);
		if (!attribution || attribution === title) return link;
		return `${link} — ${escapeMarkdownText(attribution)}`;
	}
	function formatHtmlSourcesSection(sources, label) {
		const items = sources.map((source) => {
			const title = formatCitationSource(source, "html");
			const meta = getSourceMeta(source);
			const snippet = normalizeSnippet(source.snippet);
			return `<li class="export-source-item">
    <div class="export-source-title">${title}</div>
    ${meta ? `<div class="export-source-meta">${escapeHtmlText(meta)}</div>` : ""}
    ${snippet ? `<p class="export-source-snippet">${escapeHtmlText(snippet)}</p>` : ""}
</li>`;
		}).join("\n");
		return `<details class="export-sources">
<summary>${escapeHtmlText(label)} (${sources.length})</summary>
<ol class="export-source-list">
${items}
</ol>
</details>`;
	}
	function dedupeSources(sources) {
		const seen = new Set();
		const result = [];
		for (const source of sources) {
			const key = source.url?.trim() || getSourceTitle(source);
			if (!key || seen.has(key)) continue;
			seen.add(key);
			result.push(source);
		}
		return result;
	}
	function getSourceTitle(source) {
		return source.title?.trim() || source.attribution?.trim() || source.url?.trim() || "Source";
	}
	function getCompactSourceLabel(source) {
		return source.attribution?.trim() || getSourceTitle(source);
	}
	function getSourceMeta(source) {
		const parts = [];
		const attribution = source.attribution?.trim();
		const host = getHostname(source.url);
		const published = formatPublishedDate(source.publishedAt);
		if (attribution) parts.push(attribution);
		if (host && host.toLocaleLowerCase() !== attribution?.toLocaleLowerCase()) parts.push(host);
		if (published) parts.push(published);
		return parts.join(" · ");
	}
	function getHostname(url) {
		if (!url) return "";
		try {
			return new URL(url).hostname.replace(/^www\./, "");
		} catch {
			return "";
		}
	}
	function formatPublishedDate(value) {
		if (value == null || value === "") return "";
		const numeric = typeof value === "number" ? value : Number(value);
		const milliseconds = Number.isFinite(numeric) ? numeric > 0xe8d4a51000 ? numeric : numeric * 1e3 : Date.parse(String(value));
		if (!Number.isFinite(milliseconds)) return "";
		const date = new Date(milliseconds);
		if (!Number.isFinite(date.getTime())) return "";
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
	}
	function normalizeSnippet(value) {
		if (!value) return "";
		const normalized = value.replaceAll(/<[^>]*>/g, " ").replaceAll(/\s+/g, " ").trim();
		if (normalized.length <= 360) return normalized;
		return `${normalized.slice(0, 357).trimEnd()}…`;
	}
	function escapeMarkdownText(input) {
		return input.replaceAll("\\", "\\\\").replaceAll("[", "\\[").replaceAll("]", "\\]").replaceAll("\n", " ");
	}
	function escapeHtmlText(input) {
		return input.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;").replaceAll("\n", " ");
	}
	function escapeHtmlAttribute$1(input) {
		return escapeHtmlText(input).replaceAll("\r", "");
	}
	function safeCitationUrl(value) {
		const url = value?.trim();
		if (!url) return "";
		try {
			const parsed = new URL(url);
			return parsed.protocol === "http:" || parsed.protocol === "https:" ? url : "";
		} catch {
			return "";
		}
	}
	function escapeMarkdownUrl(input) {
		return input.replaceAll("<", "%3C").replaceAll(">", "%3E").replaceAll("\n", "");
	}
	var require_truncate = __commonJSMin(((exports, module) => {
		function isHighSurrogate(codePoint) {
			return codePoint >= 55296 && codePoint <= 56319;
		}
		function isLowSurrogate(codePoint) {
			return codePoint >= 56320 && codePoint <= 57343;
		}
		module.exports = function truncate(getLength, string, byteLength) {
			if (typeof string !== "string") throw new Error("Input must be string");
			var charLength = string.length;
			var curByteLength = 0;
			var codePoint;
			var segment;
			for (var i = 0; i < charLength; i += 1) {
				codePoint = string.charCodeAt(i);
				segment = string[i];
				if (isHighSurrogate(codePoint) && isLowSurrogate(string.charCodeAt(i + 1))) {
					i += 1;
					segment += string[i];
				}
				curByteLength += getLength(segment);
				if (curByteLength === byteLength) return string.slice(0, i + 1);
				else if (curByteLength > byteLength) return string.slice(0, i - segment.length + 1);
			}
			return string;
		};
	}));
	var require_browser$1 = __commonJSMin(((exports, module) => {
		function isHighSurrogate(codePoint) {
			return codePoint >= 55296 && codePoint <= 56319;
		}
		function isLowSurrogate(codePoint) {
			return codePoint >= 56320 && codePoint <= 57343;
		}
		module.exports = function getByteLength(string) {
			if (typeof string !== "string") throw new Error("Input must be string");
			var charLength = string.length;
			var byteLength = 0;
			var codePoint = null;
			var prevCodePoint = null;
			for (var i = 0; i < charLength; i++) {
				codePoint = string.charCodeAt(i);
				if (isLowSurrogate(codePoint)) {
					if (prevCodePoint != null && isHighSurrogate(prevCodePoint)) byteLength += 1;
					else byteLength += 3;
				} else if (codePoint <= 127) byteLength += 1;
				else if (codePoint >= 128 && codePoint <= 2047) byteLength += 2;
				else if (codePoint >= 2048 && codePoint <= 65535) byteLength += 3;
				prevCodePoint = codePoint;
			}
			return byteLength;
		};
	}));
	var require_browser = __commonJSMin(((exports, module) => {
		var truncate = require_truncate();
		var getLength = require_browser$1();
		module.exports = truncate.bind(null, getLength);
	}));
	var import_sanitize_filename = __toESM(__commonJSMin(((exports, module) => {
		var truncate = require_browser();
		var illegalRe = /[\/\?<>\\:\*\|"]/g;
		var controlRe = /[\x00-\x1f\x80-\x9f]/g;
		var reservedRe = /^\.+$/;
		var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
		function replaceTrailingDotsAndSpaces(str, replacement) {
			var end = str.length;
			while (end > 0 && (str[end - 1] === "." || str[end - 1] === " ")) end--;
			return end < str.length ? str.slice(0, end) + replacement : str;
		}
		function sanitize(input, replacement) {
			if (typeof input !== "string") throw new Error("Input must be string");
			var sanitized = input.replace(illegalRe, replacement).replace(controlRe, replacement).replace(reservedRe, replacement).replace(windowsReservedRe, replacement);
			sanitized = replaceTrailingDotsAndSpaces(sanitized, replacement);
			return truncate(sanitized, 255);
		}
		module.exports = function(input, options) {
			var replacement = options && options.replacement || "";
			var output = sanitize(input, replacement);
			if (replacement === "") return output;
			return sanitize(output, "");
		};
	}))(), 1);
	function noop() {}
	function nonNullable(x) {
		return x != null;
	}
	function onloadSafe(fn) {
		if (document.readyState === "complete") fn();
		else window.addEventListener("load", fn);
	}
	var _WORKER_SRC = "onmessage=function(e){setTimeout(function(){postMessage(e.data)},e.data.ms)}";
	var _sleepWorker = null;
	var _sleepWorkerFailed = false;
	var _pendingResolves = new Map();
	var _sleepIdCounter = 0;
	function _getSleepWorker() {
		if (_sleepWorkerFailed) return null;
		if (_sleepWorker) return _sleepWorker;
		try {
			const blob = new Blob([_WORKER_SRC], { type: "application/javascript" });
			const url = URL.createObjectURL(blob);
			const w = new Worker(url);
			URL.revokeObjectURL(url);
			w.onmessage = (e) => {
				const resolve = _pendingResolves.get(e.data.id);
				if (resolve) {
					_pendingResolves.delete(e.data.id);
					resolve();
				}
			};
			w.onerror = () => {
				_sleepWorkerFailed = true;
				_sleepWorker = null;
				for (const resolve of _pendingResolves.values()) resolve();
				_pendingResolves.clear();
			};
			_sleepWorker = w;
			return w;
		} catch {
			_sleepWorkerFailed = true;
			return null;
		}
	}
	function sleep(ms) {
		if (ms <= 0) return Promise.resolve();
		const worker = _getSleepWorker();
		if (!worker) return new Promise((resolve) => setTimeout(resolve, ms));
		return new Promise((resolve) => {
			const id = _sleepIdCounter++;
			_pendingResolves.set(id, resolve);
			worker.postMessage({
				id,
				ms
			});
		});
	}
	function dateStr(date = new Date()) {
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
	}
	function timestamp() {
		return new Date().toISOString().replace(/:/g, "-").replace(/\..+/, "");
	}
	function getColorScheme() {
		const roots = [document.documentElement, document.body].filter(Boolean);
		if (roots.some((root) => root.classList.contains("dark") || root.dataset.theme === "dark")) return "dark";
		if (roots.some((root) => root.classList.contains("light") || root.dataset.theme === "light")) return "light";
		const colorScheme = getComputedStyle(document.documentElement).colorScheme;
		if (colorScheme === "dark") return "dark";
		if (colorScheme === "light") return "light";
		return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	function unixTimestampToISOString(timestamp) {
		if (!timestamp) return "";
		return new Date(timestamp * 1e3).toISOString();
	}
	function jsonlStringify(list) {
		return list.map((msg) => JSON.stringify(msg)).join("\n");
	}
	function prepareDownload(filename, type, content) {
		return {
			filename,
			blob: content instanceof Blob ? content : new Blob([content], { type })
		};
	}
	function triggerBrowserDownload(download) {
		const url = URL.createObjectURL(download.blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = download.filename;
		try {
			document.body.appendChild(a);
			a.click();
		} finally {
			a.remove();
			setTimeout(() => URL.revokeObjectURL(url), 1e3);
		}
	}
	function downloadFile(filename, type, content) {
		triggerBrowserDownload(prepareDownload(filename, type, content));
	}
	function downloadUrl(filename, url) {
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
	function normalizeProjectName(projectName) {
		return projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
	}
	function partSuffix(partInfo) {
		if (!partInfo || partInfo.total <= 1) return "";
		const pad = (n) => String(n).padStart(2, "0");
		return `-part-${pad(partInfo.part)}-of-${pad(partInfo.total)}`;
	}
	function buildZipFileName(format, projectName, partInfo) {
		const suffix = partSuffix(partInfo);
		if (projectName) return `deepseek-export-${format}-project-${normalizeProjectName(projectName)}${suffix}.zip`;
		return `deepseek-export-${format}${suffix}.zip`;
	}
	function buildJsonBatchFileName(projectName, partInfo) {
		const suffix = partSuffix(partInfo);
		if (projectName) return `deepseek-export-project-${normalizeProjectName(projectName)}${suffix}.json`;
		return `deepseek-export${suffix}.json`;
	}
	function getFileNameWithFormat(format, ext, { title = getPageTitle(), chatId = "", createTime = Math.floor(Date.now() / 1e3), updateTime = Math.floor(Date.now() / 1e3) } = {}) {
		const _createTime = unixTimestampToISOString(createTime);
		const _updateTime = unixTimestampToISOString(updateTime);
		const rendered = format.replaceAll("{title}", title).replaceAll("{date}", dateStr()).replaceAll("{timestamp}", timestamp()).replaceAll("{chat_id}", chatId).replaceAll("{create_time}", _createTime).replaceAll("{update_time}", _updateTime).concat(`.${ext}`);
		return (0, import_sanitize_filename.default)(rendered, { replacement: "_" }).replace(/\s+/g, "_") || `DeepSeek.${ext}`;
	}
	function formatDurationSeconds(seconds) {
		if (!Number.isFinite(seconds) || seconds < 0) return null;
		const rounded = Math.round((seconds + Number.EPSILON) * 10) / 10;
		return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
	}
	function escapeHtml(value) {
		return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#039;");
	}
	function escapeCssString(value) {
		return value.replaceAll("\\", "\\\\").replaceAll("\"", "\\\"").replaceAll("<", "\\3c ").replaceAll(">", "\\3e ").replaceAll("\n", "\\a ").replaceAll("\r", "").replaceAll("\f", "\\c ");
	}
	function safeImageUrl(value) {
		if (typeof value !== "string") return "";
		const url = value.trim();
		if (/^data:image\/(?:avif|bmp|gif|jpe?g|png|svg\+xml|webp)(?:;[^,]*)?,/i.test(url)) return url;
		try {
			const parsed = new URL(url);
			return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : "";
		} catch {
			return "";
		}
	}
	var htmlVoidElements = [
		"area",
		"base",
		"basefont",
		"bgsound",
		"br",
		"col",
		"command",
		"embed",
		"frame",
		"hr",
		"image",
		"img",
		"input",
		"keygen",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	];
	var Schema = class {
		constructor(property, normal, space) {
			this.normal = normal;
			this.property = property;
			if (space) this.space = space;
		}
	};
	Schema.prototype.normal = {};
	Schema.prototype.property = {};
	Schema.prototype.space = void 0;
	function merge(definitions, space) {
		const property = {};
		const normal = {};
		for (const definition of definitions) {
			Object.assign(property, definition.property);
			Object.assign(normal, definition.normal);
		}
		return new Schema(property, normal, space);
	}
	function normalize(value) {
		return value.toLowerCase();
	}
	var Info = class {
		constructor(property, attribute) {
			this.attribute = attribute;
			this.property = property;
		}
	};
	Info.prototype.attribute = "";
	Info.prototype.booleanish = false;
	Info.prototype.boolean = false;
	Info.prototype.commaOrSpaceSeparated = false;
	Info.prototype.commaSeparated = false;
	Info.prototype.defined = false;
	Info.prototype.mustUseProperty = false;
	Info.prototype.number = false;
	Info.prototype.overloadedBoolean = false;
	Info.prototype.property = "";
	Info.prototype.spaceSeparated = false;
	Info.prototype.space = void 0;
	var types_exports = __exportAll({
		boolean: () => boolean,
		booleanish: () => booleanish,
		commaOrSpaceSeparated: () => commaOrSpaceSeparated,
		commaSeparated: () => commaSeparated,
		number: () => number,
		overloadedBoolean: () => overloadedBoolean,
		spaceSeparated: () => spaceSeparated
	});
	var powers = 0;
	var boolean = increment();
	var booleanish = increment();
	var overloadedBoolean = increment();
	var number = increment();
	var spaceSeparated = increment();
	var commaSeparated = increment();
	var commaOrSpaceSeparated = increment();
	function increment() {
		return 2 ** ++powers;
	}
	var checks = Object.keys(types_exports);
	var DefinedInfo = class extends Info {
		constructor(property, attribute, mask, space) {
			let index = -1;
			super(property, attribute);
			mark(this, "space", space);
			if (typeof mask === "number") while (++index < checks.length) {
				const check = checks[index];
				mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
			}
		}
	};
	DefinedInfo.prototype.defined = true;
	function mark(values, key, value) {
		if (value) values[key] = value;
	}
	function create(definition) {
		const properties = {};
		const normals = {};
		for (const [property, value] of Object.entries(definition.properties)) {
			const info = new DefinedInfo(property, definition.transform(definition.attributes || {}, property), value, definition.space);
			if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) info.mustUseProperty = true;
			properties[property] = info;
			normals[normalize(property)] = property;
			normals[normalize(info.attribute)] = property;
		}
		return new Schema(properties, normals, definition.space);
	}
	var aria$1 = create({
		properties: {
			ariaActiveDescendant: null,
			ariaAtomic: booleanish,
			ariaAutoComplete: null,
			ariaBusy: booleanish,
			ariaChecked: booleanish,
			ariaColCount: number,
			ariaColIndex: number,
			ariaColSpan: number,
			ariaControls: spaceSeparated,
			ariaCurrent: null,
			ariaDescribedBy: spaceSeparated,
			ariaDetails: null,
			ariaDisabled: booleanish,
			ariaDropEffect: spaceSeparated,
			ariaErrorMessage: null,
			ariaExpanded: booleanish,
			ariaFlowTo: spaceSeparated,
			ariaGrabbed: booleanish,
			ariaHasPopup: null,
			ariaHidden: booleanish,
			ariaInvalid: null,
			ariaKeyShortcuts: null,
			ariaLabel: null,
			ariaLabelledBy: spaceSeparated,
			ariaLevel: number,
			ariaLive: null,
			ariaModal: booleanish,
			ariaMultiLine: booleanish,
			ariaMultiSelectable: booleanish,
			ariaOrientation: null,
			ariaOwns: spaceSeparated,
			ariaPlaceholder: null,
			ariaPosInSet: number,
			ariaPressed: booleanish,
			ariaReadOnly: booleanish,
			ariaRelevant: null,
			ariaRequired: booleanish,
			ariaRoleDescription: spaceSeparated,
			ariaRowCount: number,
			ariaRowIndex: number,
			ariaRowSpan: number,
			ariaSelected: booleanish,
			ariaSetSize: number,
			ariaSort: null,
			ariaValueMax: number,
			ariaValueMin: number,
			ariaValueNow: number,
			ariaValueText: null,
			role: null
		},
		transform(_, property) {
			return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
		}
	});
	function caseSensitiveTransform(attributes, attribute) {
		return attribute in attributes ? attributes[attribute] : attribute;
	}
	function caseInsensitiveTransform(attributes, property) {
		return caseSensitiveTransform(attributes, property.toLowerCase());
	}
	var html$5 = create({
		attributes: {
			acceptcharset: "accept-charset",
			classname: "class",
			htmlfor: "for",
			httpequiv: "http-equiv"
		},
		mustUseProperty: [
			"checked",
			"multiple",
			"muted",
			"selected"
		],
		properties: {
			abbr: null,
			accept: commaSeparated,
			acceptCharset: spaceSeparated,
			accessKey: spaceSeparated,
			action: null,
			allow: null,
			allowFullScreen: boolean,
			allowPaymentRequest: boolean,
			allowUserMedia: boolean,
			alpha: boolean,
			alt: null,
			as: null,
			async: boolean,
			autoCapitalize: null,
			autoComplete: spaceSeparated,
			autoFocus: boolean,
			autoPlay: boolean,
			blocking: spaceSeparated,
			capture: null,
			charSet: null,
			checked: boolean,
			cite: null,
			className: spaceSeparated,
			closedBy: null,
			colorSpace: null,
			cols: number,
			colSpan: number,
			command: null,
			commandFor: null,
			content: null,
			contentEditable: booleanish,
			controls: boolean,
			controlsList: spaceSeparated,
			coords: number | commaSeparated,
			crossOrigin: null,
			data: null,
			dateTime: null,
			decoding: null,
			default: boolean,
			defer: boolean,
			dir: null,
			dirName: null,
			disabled: boolean,
			download: overloadedBoolean,
			draggable: booleanish,
			encType: null,
			enterKeyHint: null,
			fetchPriority: null,
			form: null,
			formAction: null,
			formEncType: null,
			formMethod: null,
			formNoValidate: boolean,
			formTarget: null,
			headers: spaceSeparated,
			height: number,
			hidden: overloadedBoolean,
			high: number,
			href: null,
			hrefLang: null,
			htmlFor: spaceSeparated,
			httpEquiv: spaceSeparated,
			id: null,
			imageSizes: null,
			imageSrcSet: null,
			inert: boolean,
			inputMode: null,
			integrity: null,
			is: null,
			isMap: boolean,
			itemId: null,
			itemProp: spaceSeparated,
			itemRef: spaceSeparated,
			itemScope: boolean,
			itemType: spaceSeparated,
			kind: null,
			label: null,
			lang: null,
			language: null,
			list: null,
			loading: null,
			loop: boolean,
			low: number,
			manifest: null,
			max: null,
			maxLength: number,
			media: null,
			method: null,
			min: null,
			minLength: number,
			multiple: boolean,
			muted: boolean,
			name: null,
			nonce: null,
			noModule: boolean,
			noValidate: boolean,
			onAbort: null,
			onAfterPrint: null,
			onAuxClick: null,
			onBeforeMatch: null,
			onBeforePrint: null,
			onBeforeToggle: null,
			onBeforeUnload: null,
			onBlur: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onContextLost: null,
			onContextMenu: null,
			onContextRestored: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFormData: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLanguageChange: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadEnd: null,
			onLoadStart: null,
			onMessage: null,
			onMessageError: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRejectionHandled: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onScrollEnd: null,
			onSecurityPolicyViolation: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onSlotChange: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnhandledRejection: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onWheel: null,
			open: boolean,
			optimum: number,
			pattern: null,
			ping: spaceSeparated,
			placeholder: null,
			playsInline: boolean,
			popover: null,
			popoverTarget: null,
			popoverTargetAction: null,
			poster: null,
			preload: null,
			readOnly: boolean,
			referrerPolicy: null,
			rel: spaceSeparated,
			required: boolean,
			reversed: boolean,
			rows: number,
			rowSpan: number,
			sandbox: spaceSeparated,
			scope: null,
			scoped: boolean,
			seamless: boolean,
			selected: boolean,
			shadowRootClonable: boolean,
			shadowRootCustomElementRegistry: boolean,
			shadowRootDelegatesFocus: boolean,
			shadowRootMode: null,
			shadowRootSerializable: boolean,
			shape: null,
			size: number,
			sizes: null,
			slot: null,
			span: number,
			spellCheck: booleanish,
			src: null,
			srcDoc: null,
			srcLang: null,
			srcSet: null,
			start: number,
			step: null,
			style: null,
			tabIndex: number,
			target: null,
			title: null,
			translate: null,
			type: null,
			typeMustMatch: boolean,
			useMap: null,
			value: booleanish,
			width: number,
			wrap: null,
			writingSuggestions: null,
			align: null,
			aLink: null,
			archive: spaceSeparated,
			axis: null,
			background: null,
			bgColor: null,
			border: number,
			borderColor: null,
			bottomMargin: number,
			cellPadding: null,
			cellSpacing: null,
			char: null,
			charOff: null,
			classId: null,
			clear: null,
			code: null,
			codeBase: null,
			codeType: null,
			color: null,
			compact: boolean,
			declare: boolean,
			event: null,
			face: null,
			frame: null,
			frameBorder: null,
			hSpace: number,
			leftMargin: number,
			link: null,
			longDesc: null,
			lowSrc: null,
			marginHeight: number,
			marginWidth: number,
			noResize: boolean,
			noHref: boolean,
			noShade: boolean,
			noWrap: boolean,
			object: null,
			profile: null,
			prompt: null,
			rev: null,
			rightMargin: number,
			rules: null,
			scheme: null,
			scrolling: booleanish,
			standby: null,
			summary: null,
			text: null,
			topMargin: number,
			valueType: null,
			version: null,
			vAlign: null,
			vLink: null,
			vSpace: number,
			allowTransparency: null,
			autoCorrect: null,
			autoSave: null,
			credentialless: boolean,
			disablePictureInPicture: boolean,
			disableRemotePlayback: boolean,
			exportParts: commaSeparated,
			part: spaceSeparated,
			prefix: null,
			property: null,
			results: number,
			security: null,
			unselectable: null
		},
		space: "html",
		transform: caseInsensitiveTransform
	});
	var svg$1 = create({
		attributes: {
			accentHeight: "accent-height",
			alignmentBaseline: "alignment-baseline",
			arabicForm: "arabic-form",
			baselineShift: "baseline-shift",
			capHeight: "cap-height",
			className: "class",
			clipPath: "clip-path",
			clipRule: "clip-rule",
			colorInterpolation: "color-interpolation",
			colorInterpolationFilters: "color-interpolation-filters",
			colorProfile: "color-profile",
			colorRendering: "color-rendering",
			crossOrigin: "crossorigin",
			dataType: "datatype",
			dominantBaseline: "dominant-baseline",
			enableBackground: "enable-background",
			fillOpacity: "fill-opacity",
			fillRule: "fill-rule",
			floodColor: "flood-color",
			floodOpacity: "flood-opacity",
			fontFamily: "font-family",
			fontSize: "font-size",
			fontSizeAdjust: "font-size-adjust",
			fontStretch: "font-stretch",
			fontStyle: "font-style",
			fontVariant: "font-variant",
			fontWeight: "font-weight",
			glyphName: "glyph-name",
			glyphOrientationHorizontal: "glyph-orientation-horizontal",
			glyphOrientationVertical: "glyph-orientation-vertical",
			hrefLang: "hreflang",
			horizAdvX: "horiz-adv-x",
			horizOriginX: "horiz-origin-x",
			horizOriginY: "horiz-origin-y",
			imageRendering: "image-rendering",
			letterSpacing: "letter-spacing",
			lightingColor: "lighting-color",
			markerEnd: "marker-end",
			markerMid: "marker-mid",
			markerStart: "marker-start",
			maskType: "mask-type",
			navDown: "nav-down",
			navDownLeft: "nav-down-left",
			navDownRight: "nav-down-right",
			navLeft: "nav-left",
			navNext: "nav-next",
			navPrev: "nav-prev",
			navRight: "nav-right",
			navUp: "nav-up",
			navUpLeft: "nav-up-left",
			navUpRight: "nav-up-right",
			onAbort: "onabort",
			onActivate: "onactivate",
			onAfterPrint: "onafterprint",
			onBeforePrint: "onbeforeprint",
			onBegin: "onbegin",
			onCancel: "oncancel",
			onCanPlay: "oncanplay",
			onCanPlayThrough: "oncanplaythrough",
			onChange: "onchange",
			onClick: "onclick",
			onClose: "onclose",
			onCopy: "oncopy",
			onCueChange: "oncuechange",
			onCut: "oncut",
			onDblClick: "ondblclick",
			onDrag: "ondrag",
			onDragEnd: "ondragend",
			onDragEnter: "ondragenter",
			onDragExit: "ondragexit",
			onDragLeave: "ondragleave",
			onDragOver: "ondragover",
			onDragStart: "ondragstart",
			onDrop: "ondrop",
			onDurationChange: "ondurationchange",
			onEmptied: "onemptied",
			onEnd: "onend",
			onEnded: "onended",
			onError: "onerror",
			onFocus: "onfocus",
			onFocusIn: "onfocusin",
			onFocusOut: "onfocusout",
			onHashChange: "onhashchange",
			onInput: "oninput",
			onInvalid: "oninvalid",
			onKeyDown: "onkeydown",
			onKeyPress: "onkeypress",
			onKeyUp: "onkeyup",
			onLoad: "onload",
			onLoadedData: "onloadeddata",
			onLoadedMetadata: "onloadedmetadata",
			onLoadStart: "onloadstart",
			onMessage: "onmessage",
			onMouseDown: "onmousedown",
			onMouseEnter: "onmouseenter",
			onMouseLeave: "onmouseleave",
			onMouseMove: "onmousemove",
			onMouseOut: "onmouseout",
			onMouseOver: "onmouseover",
			onMouseUp: "onmouseup",
			onMouseWheel: "onmousewheel",
			onOffline: "onoffline",
			onOnline: "ononline",
			onPageHide: "onpagehide",
			onPageShow: "onpageshow",
			onPaste: "onpaste",
			onPause: "onpause",
			onPlay: "onplay",
			onPlaying: "onplaying",
			onPopState: "onpopstate",
			onProgress: "onprogress",
			onRateChange: "onratechange",
			onRepeat: "onrepeat",
			onReset: "onreset",
			onResize: "onresize",
			onScroll: "onscroll",
			onSeeked: "onseeked",
			onSeeking: "onseeking",
			onSelect: "onselect",
			onShow: "onshow",
			onStalled: "onstalled",
			onStorage: "onstorage",
			onSubmit: "onsubmit",
			onSuspend: "onsuspend",
			onTimeUpdate: "ontimeupdate",
			onToggle: "ontoggle",
			onUnload: "onunload",
			onVolumeChange: "onvolumechange",
			onWaiting: "onwaiting",
			onZoom: "onzoom",
			overlinePosition: "overline-position",
			overlineThickness: "overline-thickness",
			paintOrder: "paint-order",
			panose1: "panose-1",
			pointerEvents: "pointer-events",
			referrerPolicy: "referrerpolicy",
			renderingIntent: "rendering-intent",
			shapeRendering: "shape-rendering",
			stopColor: "stop-color",
			stopOpacity: "stop-opacity",
			strikethroughPosition: "strikethrough-position",
			strikethroughThickness: "strikethrough-thickness",
			strokeDashArray: "stroke-dasharray",
			strokeDashOffset: "stroke-dashoffset",
			strokeLineCap: "stroke-linecap",
			strokeLineJoin: "stroke-linejoin",
			strokeMiterLimit: "stroke-miterlimit",
			strokeOpacity: "stroke-opacity",
			strokeWidth: "stroke-width",
			tabIndex: "tabindex",
			textAnchor: "text-anchor",
			textDecoration: "text-decoration",
			textRendering: "text-rendering",
			transformOrigin: "transform-origin",
			typeOf: "typeof",
			underlinePosition: "underline-position",
			underlineThickness: "underline-thickness",
			unicodeBidi: "unicode-bidi",
			unicodeRange: "unicode-range",
			unitsPerEm: "units-per-em",
			vAlphabetic: "v-alphabetic",
			vHanging: "v-hanging",
			vIdeographic: "v-ideographic",
			vMathematical: "v-mathematical",
			vectorEffect: "vector-effect",
			vertAdvY: "vert-adv-y",
			vertOriginX: "vert-origin-x",
			vertOriginY: "vert-origin-y",
			wordSpacing: "word-spacing",
			writingMode: "writing-mode",
			xHeight: "x-height",
			playbackOrder: "playbackorder",
			timelineBegin: "timelinebegin"
		},
		properties: {
			about: commaOrSpaceSeparated,
			accentHeight: number,
			accumulate: null,
			additive: null,
			alignmentBaseline: null,
			alphabetic: number,
			amplitude: number,
			arabicForm: null,
			ascent: number,
			attributeName: null,
			attributeType: null,
			azimuth: number,
			bandwidth: null,
			baselineShift: null,
			baseFrequency: null,
			baseProfile: null,
			bbox: null,
			begin: null,
			bias: number,
			by: null,
			calcMode: null,
			capHeight: number,
			className: spaceSeparated,
			clip: null,
			clipPath: null,
			clipPathUnits: null,
			clipRule: null,
			color: null,
			colorInterpolation: null,
			colorInterpolationFilters: null,
			colorProfile: null,
			colorRendering: null,
			content: null,
			contentScriptType: null,
			contentStyleType: null,
			crossOrigin: null,
			cursor: null,
			cx: null,
			cy: null,
			d: null,
			dataType: null,
			defaultAction: null,
			descent: number,
			diffuseConstant: number,
			direction: null,
			display: null,
			dur: null,
			divisor: number,
			dominantBaseline: null,
			download: boolean,
			dx: null,
			dy: null,
			edgeMode: null,
			editable: null,
			elevation: number,
			enableBackground: null,
			end: null,
			event: null,
			exponent: number,
			externalResourcesRequired: null,
			fill: null,
			fillOpacity: number,
			fillRule: null,
			filter: null,
			filterRes: null,
			filterUnits: null,
			floodColor: null,
			floodOpacity: null,
			focusable: null,
			focusHighlight: null,
			fontFamily: null,
			fontSize: null,
			fontSizeAdjust: null,
			fontStretch: null,
			fontStyle: null,
			fontVariant: null,
			fontWeight: null,
			format: null,
			fr: null,
			from: null,
			fx: null,
			fy: null,
			g1: commaSeparated,
			g2: commaSeparated,
			glyphName: commaSeparated,
			glyphOrientationHorizontal: null,
			glyphOrientationVertical: null,
			glyphRef: null,
			gradientTransform: null,
			gradientUnits: null,
			handler: null,
			hanging: number,
			hatchContentUnits: null,
			hatchUnits: null,
			height: null,
			href: null,
			hrefLang: null,
			horizAdvX: number,
			horizOriginX: number,
			horizOriginY: number,
			id: null,
			ideographic: number,
			imageRendering: null,
			initialVisibility: null,
			in: null,
			in2: null,
			intercept: number,
			k: number,
			k1: number,
			k2: number,
			k3: number,
			k4: number,
			kernelMatrix: commaOrSpaceSeparated,
			kernelUnitLength: null,
			keyPoints: null,
			keySplines: null,
			keyTimes: null,
			kerning: null,
			lang: null,
			lengthAdjust: null,
			letterSpacing: null,
			lightingColor: null,
			limitingConeAngle: number,
			local: null,
			markerEnd: null,
			markerMid: null,
			markerStart: null,
			markerHeight: null,
			markerUnits: null,
			markerWidth: null,
			mask: null,
			maskContentUnits: null,
			maskType: null,
			maskUnits: null,
			mathematical: null,
			max: null,
			media: null,
			mediaCharacterEncoding: null,
			mediaContentEncodings: null,
			mediaSize: number,
			mediaTime: null,
			method: null,
			min: null,
			mode: null,
			name: null,
			navDown: null,
			navDownLeft: null,
			navDownRight: null,
			navLeft: null,
			navNext: null,
			navPrev: null,
			navRight: null,
			navUp: null,
			navUpLeft: null,
			navUpRight: null,
			numOctaves: null,
			observer: null,
			offset: null,
			onAbort: null,
			onActivate: null,
			onAfterPrint: null,
			onBeforePrint: null,
			onBegin: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnd: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFocusIn: null,
			onFocusOut: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadStart: null,
			onMessage: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onMouseWheel: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRepeat: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onShow: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onZoom: null,
			opacity: null,
			operator: null,
			order: null,
			orient: null,
			orientation: null,
			origin: null,
			overflow: null,
			overlay: null,
			overlinePosition: number,
			overlineThickness: number,
			paintOrder: null,
			panose1: null,
			path: null,
			pathLength: number,
			patternContentUnits: null,
			patternTransform: null,
			patternUnits: null,
			phase: null,
			ping: spaceSeparated,
			pitch: null,
			playbackOrder: null,
			pointerEvents: null,
			points: null,
			pointsAtX: number,
			pointsAtY: number,
			pointsAtZ: number,
			preserveAlpha: null,
			preserveAspectRatio: null,
			primitiveUnits: null,
			propagate: null,
			property: commaOrSpaceSeparated,
			r: null,
			radius: null,
			referrerPolicy: null,
			refX: null,
			refY: null,
			rel: commaOrSpaceSeparated,
			rev: commaOrSpaceSeparated,
			renderingIntent: null,
			repeatCount: null,
			repeatDur: null,
			requiredExtensions: commaOrSpaceSeparated,
			requiredFeatures: commaOrSpaceSeparated,
			requiredFonts: commaOrSpaceSeparated,
			requiredFormats: commaOrSpaceSeparated,
			resource: null,
			restart: null,
			result: null,
			rotate: null,
			rx: null,
			ry: null,
			scale: null,
			seed: null,
			shapeRendering: null,
			side: null,
			slope: null,
			snapshotTime: null,
			specularConstant: number,
			specularExponent: number,
			spreadMethod: null,
			spacing: null,
			startOffset: null,
			stdDeviation: null,
			stemh: null,
			stemv: null,
			stitchTiles: null,
			stopColor: null,
			stopOpacity: null,
			strikethroughPosition: number,
			strikethroughThickness: number,
			string: null,
			stroke: null,
			strokeDashArray: commaOrSpaceSeparated,
			strokeDashOffset: null,
			strokeLineCap: null,
			strokeLineJoin: null,
			strokeMiterLimit: number,
			strokeOpacity: number,
			strokeWidth: null,
			style: null,
			surfaceScale: number,
			syncBehavior: null,
			syncBehaviorDefault: null,
			syncMaster: null,
			syncTolerance: null,
			syncToleranceDefault: null,
			systemLanguage: commaOrSpaceSeparated,
			tabIndex: number,
			tableValues: null,
			target: null,
			targetX: number,
			targetY: number,
			textAnchor: null,
			textDecoration: null,
			textRendering: null,
			textLength: null,
			timelineBegin: null,
			title: null,
			transformBehavior: null,
			type: null,
			typeOf: commaOrSpaceSeparated,
			to: null,
			transform: null,
			transformOrigin: null,
			u1: null,
			u2: null,
			underlinePosition: number,
			underlineThickness: number,
			unicode: null,
			unicodeBidi: null,
			unicodeRange: null,
			unitsPerEm: number,
			values: null,
			vAlphabetic: number,
			vMathematical: number,
			vectorEffect: null,
			vHanging: number,
			vIdeographic: number,
			version: null,
			vertAdvY: number,
			vertOriginX: number,
			vertOriginY: number,
			viewBox: null,
			viewTarget: null,
			visibility: null,
			width: null,
			widths: null,
			wordSpacing: null,
			writingMode: null,
			x: null,
			x1: null,
			x2: null,
			xChannelSelector: null,
			xHeight: number,
			y: null,
			y1: null,
			y2: null,
			yChannelSelector: null,
			z: null,
			zoomAndPan: null
		},
		space: "svg",
		transform: caseSensitiveTransform
	});
	var xlink = create({
		properties: {
			xLinkActuate: null,
			xLinkArcRole: null,
			xLinkHref: null,
			xLinkRole: null,
			xLinkShow: null,
			xLinkTitle: null,
			xLinkType: null
		},
		space: "xlink",
		transform(_, property) {
			return "xlink:" + property.slice(5).toLowerCase();
		}
	});
	var xmlns = create({
		attributes: { xmlnsxlink: "xmlns:xlink" },
		properties: {
			xmlnsXLink: null,
			xmlns: null
		},
		space: "xmlns",
		transform: caseInsensitiveTransform
	});
	var xml = create({
		properties: {
			xmlBase: null,
			xmlLang: null,
			xmlSpace: null
		},
		space: "xml",
		transform(_, property) {
			return "xml:" + property.slice(3).toLowerCase();
		}
	});
	var cap = /[A-Z]/g;
	var dash = /-[a-z]/g;
	var valid = /^data[-\w.:]+$/i;
	function find(schema, value) {
		const normal = normalize(value);
		let property = value;
		let Type = Info;
		if (normal in schema.normal) return schema.property[schema.normal[normal]];
		if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
			if (value.charAt(4) === "-") {
				const rest = value.slice(5).replace(dash, camelcase);
				property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
			} else {
				const rest = value.slice(4);
				if (!dash.test(rest)) {
					let dashes = rest.replace(cap, kebab);
					if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
					value = "data" + dashes;
				}
			}
			Type = DefinedInfo;
		}
		return new Type(property, value);
	}
	function kebab($0) {
		return "-" + $0.toLowerCase();
	}
	function camelcase($0) {
		return $0.charAt(1).toUpperCase();
	}
	var html$4 = merge([
		aria$1,
		html$5,
		xlink,
		xmlns,
		xml
	], "html");
	var svg = merge([
		aria$1,
		svg$1,
		xlink,
		xmlns,
		xml
	], "svg");
	var own$6 = {}.hasOwnProperty;
	function zwitch(key, options) {
		const settings = options || {};
		function one(value, ...parameters) {
			let fn = one.invalid;
			const handlers = one.handlers;
			if (value && own$6.call(value, key)) {
				const id = String(value[key]);
				fn = own$6.call(handlers, id) ? handlers[id] : one.unknown;
			}
			if (fn) return fn.call(this, value, ...parameters);
		}
		one.handlers = settings.handlers || {};
		one.invalid = settings.invalid;
		one.unknown = settings.unknown;
		return one;
	}
	var defaultSubsetRegex = /["&'<>`]/g;
	var surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
	var controlCharactersRegex = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
	var regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
	var subsetToRegexCache = new WeakMap();
	function core(value, options) {
		value = value.replace(options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex, basic);
		if (options.subset || options.escapeOnly) return value;
		return value.replace(surrogatePairsRegex, surrogate).replace(controlCharactersRegex, basic);
		function surrogate(pair, index, all) {
			return options.format((pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536, all.charCodeAt(index + 2), options);
		}
		function basic(character, index, all) {
			return options.format(character.charCodeAt(0), all.charCodeAt(index + 1), options);
		}
	}
	function charactersToExpressionCached(subset) {
		let cached = subsetToRegexCache.get(subset);
		if (!cached) {
			cached = charactersToExpression(subset);
			subsetToRegexCache.set(subset, cached);
		}
		return cached;
	}
	function charactersToExpression(subset) {
		const groups = [];
		let index = -1;
		while (++index < subset.length) groups.push(subset[index].replace(regexEscapeRegex, "\\$&"));
		return new RegExp("(?:" + groups.join("|") + ")", "g");
	}
	var hexadecimalRegex = /[\dA-Fa-f]/;
	function toHexadecimal(code, next, omit) {
		const value = "&#x" + code.toString(16).toUpperCase();
		return omit && next && !hexadecimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
	}
	var decimalRegex = /\d/;
	function toDecimal(code, next, omit) {
		const value = "&#" + String(code);
		return omit && next && !decimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
	}
	var characterEntitiesLegacy = [
		"AElig",
		"AMP",
		"Aacute",
		"Acirc",
		"Agrave",
		"Aring",
		"Atilde",
		"Auml",
		"COPY",
		"Ccedil",
		"ETH",
		"Eacute",
		"Ecirc",
		"Egrave",
		"Euml",
		"GT",
		"Iacute",
		"Icirc",
		"Igrave",
		"Iuml",
		"LT",
		"Ntilde",
		"Oacute",
		"Ocirc",
		"Ograve",
		"Oslash",
		"Otilde",
		"Ouml",
		"QUOT",
		"REG",
		"THORN",
		"Uacute",
		"Ucirc",
		"Ugrave",
		"Uuml",
		"Yacute",
		"aacute",
		"acirc",
		"acute",
		"aelig",
		"agrave",
		"amp",
		"aring",
		"atilde",
		"auml",
		"brvbar",
		"ccedil",
		"cedil",
		"cent",
		"copy",
		"curren",
		"deg",
		"divide",
		"eacute",
		"ecirc",
		"egrave",
		"eth",
		"euml",
		"frac12",
		"frac14",
		"frac34",
		"gt",
		"iacute",
		"icirc",
		"iexcl",
		"igrave",
		"iquest",
		"iuml",
		"laquo",
		"lt",
		"macr",
		"micro",
		"middot",
		"nbsp",
		"not",
		"ntilde",
		"oacute",
		"ocirc",
		"ograve",
		"ordf",
		"ordm",
		"oslash",
		"otilde",
		"ouml",
		"para",
		"plusmn",
		"pound",
		"quot",
		"raquo",
		"reg",
		"sect",
		"shy",
		"sup1",
		"sup2",
		"sup3",
		"szlig",
		"thorn",
		"times",
		"uacute",
		"ucirc",
		"ugrave",
		"uml",
		"uuml",
		"yacute",
		"yen",
		"yuml"
	];
	var characterEntitiesHtml4 = {
		nbsp: "\xA0",
		iexcl: "¡",
		cent: "¢",
		pound: "£",
		curren: "¤",
		yen: "¥",
		brvbar: "¦",
		sect: "§",
		uml: "¨",
		copy: "©",
		ordf: "ª",
		laquo: "«",
		not: "¬",
		shy: "­",
		reg: "®",
		macr: "¯",
		deg: "°",
		plusmn: "±",
		sup2: "²",
		sup3: "³",
		acute: "´",
		micro: "µ",
		para: "¶",
		middot: "·",
		cedil: "¸",
		sup1: "¹",
		ordm: "º",
		raquo: "»",
		frac14: "¼",
		frac12: "½",
		frac34: "¾",
		iquest: "¿",
		Agrave: "À",
		Aacute: "Á",
		Acirc: "Â",
		Atilde: "Ã",
		Auml: "Ä",
		Aring: "Å",
		AElig: "Æ",
		Ccedil: "Ç",
		Egrave: "È",
		Eacute: "É",
		Ecirc: "Ê",
		Euml: "Ë",
		Igrave: "Ì",
		Iacute: "Í",
		Icirc: "Î",
		Iuml: "Ï",
		ETH: "Ð",
		Ntilde: "Ñ",
		Ograve: "Ò",
		Oacute: "Ó",
		Ocirc: "Ô",
		Otilde: "Õ",
		Ouml: "Ö",
		times: "×",
		Oslash: "Ø",
		Ugrave: "Ù",
		Uacute: "Ú",
		Ucirc: "Û",
		Uuml: "Ü",
		Yacute: "Ý",
		THORN: "Þ",
		szlig: "ß",
		agrave: "à",
		aacute: "á",
		acirc: "â",
		atilde: "ã",
		auml: "ä",
		aring: "å",
		aelig: "æ",
		ccedil: "ç",
		egrave: "è",
		eacute: "é",
		ecirc: "ê",
		euml: "ë",
		igrave: "ì",
		iacute: "í",
		icirc: "î",
		iuml: "ï",
		eth: "ð",
		ntilde: "ñ",
		ograve: "ò",
		oacute: "ó",
		ocirc: "ô",
		otilde: "õ",
		ouml: "ö",
		divide: "÷",
		oslash: "ø",
		ugrave: "ù",
		uacute: "ú",
		ucirc: "û",
		uuml: "ü",
		yacute: "ý",
		thorn: "þ",
		yuml: "ÿ",
		fnof: "ƒ",
		Alpha: "Α",
		Beta: "Β",
		Gamma: "Γ",
		Delta: "Δ",
		Epsilon: "Ε",
		Zeta: "Ζ",
		Eta: "Η",
		Theta: "Θ",
		Iota: "Ι",
		Kappa: "Κ",
		Lambda: "Λ",
		Mu: "Μ",
		Nu: "Ν",
		Xi: "Ξ",
		Omicron: "Ο",
		Pi: "Π",
		Rho: "Ρ",
		Sigma: "Σ",
		Tau: "Τ",
		Upsilon: "Υ",
		Phi: "Φ",
		Chi: "Χ",
		Psi: "Ψ",
		Omega: "Ω",
		alpha: "α",
		beta: "β",
		gamma: "γ",
		delta: "δ",
		epsilon: "ε",
		zeta: "ζ",
		eta: "η",
		theta: "θ",
		iota: "ι",
		kappa: "κ",
		lambda: "λ",
		mu: "μ",
		nu: "ν",
		xi: "ξ",
		omicron: "ο",
		pi: "π",
		rho: "ρ",
		sigmaf: "ς",
		sigma: "σ",
		tau: "τ",
		upsilon: "υ",
		phi: "φ",
		chi: "χ",
		psi: "ψ",
		omega: "ω",
		thetasym: "ϑ",
		upsih: "ϒ",
		piv: "ϖ",
		bull: "•",
		hellip: "…",
		prime: "′",
		Prime: "″",
		oline: "‾",
		frasl: "⁄",
		weierp: "℘",
		image: "ℑ",
		real: "ℜ",
		trade: "™",
		alefsym: "ℵ",
		larr: "←",
		uarr: "↑",
		rarr: "→",
		darr: "↓",
		harr: "↔",
		crarr: "↵",
		lArr: "⇐",
		uArr: "⇑",
		rArr: "⇒",
		dArr: "⇓",
		hArr: "⇔",
		forall: "∀",
		part: "∂",
		exist: "∃",
		empty: "∅",
		nabla: "∇",
		isin: "∈",
		notin: "∉",
		ni: "∋",
		prod: "∏",
		sum: "∑",
		minus: "−",
		lowast: "∗",
		radic: "√",
		prop: "∝",
		infin: "∞",
		ang: "∠",
		and: "∧",
		or: "∨",
		cap: "∩",
		cup: "∪",
		int: "∫",
		there4: "∴",
		sim: "∼",
		cong: "≅",
		asymp: "≈",
		ne: "≠",
		equiv: "≡",
		le: "≤",
		ge: "≥",
		sub: "⊂",
		sup: "⊃",
		nsub: "⊄",
		sube: "⊆",
		supe: "⊇",
		oplus: "⊕",
		otimes: "⊗",
		perp: "⊥",
		sdot: "⋅",
		lceil: "⌈",
		rceil: "⌉",
		lfloor: "⌊",
		rfloor: "⌋",
		lang: "〈",
		rang: "〉",
		loz: "◊",
		spades: "♠",
		clubs: "♣",
		hearts: "♥",
		diams: "♦",
		quot: "\"",
		amp: "&",
		lt: "<",
		gt: ">",
		OElig: "Œ",
		oelig: "œ",
		Scaron: "Š",
		scaron: "š",
		Yuml: "Ÿ",
		circ: "ˆ",
		tilde: "˜",
		ensp: " ",
		emsp: " ",
		thinsp: " ",
		zwnj: "‌",
		zwj: "‍",
		lrm: "‎",
		rlm: "‏",
		ndash: "–",
		mdash: "—",
		lsquo: "‘",
		rsquo: "’",
		sbquo: "‚",
		ldquo: "“",
		rdquo: "”",
		bdquo: "„",
		dagger: "†",
		Dagger: "‡",
		permil: "‰",
		lsaquo: "‹",
		rsaquo: "›",
		euro: "€"
	};
	var dangerous = [
		"cent",
		"copy",
		"divide",
		"gt",
		"lt",
		"not",
		"para",
		"times"
	];
	var own$5 = {}.hasOwnProperty;
	var characters = {};
	var key;
	for (key in characterEntitiesHtml4) if (own$5.call(characterEntitiesHtml4, key)) characters[characterEntitiesHtml4[key]] = key;
	var notAlphanumericRegex = /[^\dA-Za-z]/;
	function toNamed(code, next, omit, attribute) {
		const character = String.fromCharCode(code);
		if (own$5.call(characters, character)) {
			const name = characters[character];
			const value = "&" + name;
			if (omit && characterEntitiesLegacy.includes(name) && !dangerous.includes(name) && (!attribute || next && next !== 61 && notAlphanumericRegex.test(String.fromCharCode(next)))) return value;
			return value + ";";
		}
		return "";
	}
	function formatSmart(code, next, options) {
		let numeric = toHexadecimal(code, next, options.omitOptionalSemicolons);
		let named;
		if (options.useNamedReferences || options.useShortestReferences) named = toNamed(code, next, options.omitOptionalSemicolons, options.attribute);
		if ((options.useShortestReferences || !named) && options.useShortestReferences) {
			const decimal = toDecimal(code, next, options.omitOptionalSemicolons);
			if (decimal.length < numeric.length) numeric = decimal;
		}
		return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
	}
	function stringifyEntities(value, options) {
		return core(value, Object.assign({ format: formatSmart }, options));
	}
	var htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;
	var bogusCommentEntitySubset = [">"];
	var commentEntitySubset = ["<", ">"];
	function comment$1(node, _1, _2, state) {
		return state.settings.bogusComments ? "<?" + stringifyEntities(node.value, Object.assign({}, state.settings.characterReferences, { subset: bogusCommentEntitySubset })) + ">" : "<!--" + node.value.replace(htmlCommentRegex, encode) + "-->";
		function encode($0) {
			return stringifyEntities($0, Object.assign({}, state.settings.characterReferences, { subset: commentEntitySubset }));
		}
	}
	function doctype$1(_1, _2, _3, state) {
		return "<!" + (state.settings.upperDoctype ? "DOCTYPE" : "doctype") + (state.settings.tightDoctype ? "" : " ") + "html>";
	}
	function ccount(value, character) {
		const source = String(value);
		if (typeof character !== "string") throw new TypeError("Expected character");
		let count = 0;
		let index = source.indexOf(character);
		while (index !== -1) {
			count++;
			index = source.indexOf(character, index + character.length);
		}
		return count;
	}
	function stringify$1(values, options) {
		const settings = options || {};
		return (values[values.length - 1] === "" ? [...values, ""] : values).join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
	}
	function stringify(values) {
		return values.join(" ").trim();
	}
	var re = /[ \t\n\f\r]/g;
	function whitespace(thing) {
		return typeof thing === "object" ? thing.type === "text" ? empty$1(thing.value) : false : empty$1(thing);
	}
	function empty$1(value) {
		return value.replace(re, "") === "";
	}
	var siblingAfter = siblings(1);
	var siblingBefore = siblings(-1);
	var emptyChildren$1 = [];
	function siblings(increment) {
		return sibling;
		function sibling(parent, index, includeWhitespace) {
			const siblings = parent ? parent.children : emptyChildren$1;
			let offset = (index || 0) + increment;
			let next = siblings[offset];
			if (!includeWhitespace) while (next && whitespace(next)) {
				offset += increment;
				next = siblings[offset];
			}
			return next;
		}
	}
	var own$4 = {}.hasOwnProperty;
	function omission(handlers) {
		return omit;
		function omit(node, index, parent) {
			return own$4.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
		}
	}
	var closing = omission({
		body: body$1,
		caption: headOrColgroupOrCaption,
		colgroup: headOrColgroupOrCaption,
		dd,
		dt,
		head: headOrColgroupOrCaption,
		html: html$3,
		li,
		optgroup,
		option,
		p: p$2,
		rp: rubyElement,
		rt: rubyElement,
		tbody: tbody$1,
		td: cells,
		tfoot,
		th: cells,
		thead,
		tr
	});
	function headOrColgroupOrCaption(_, index, parent) {
		const next = siblingAfter(parent, index, true);
		return !next || next.type !== "comment" && !(next.type === "text" && whitespace(next.value.charAt(0)));
	}
	function html$3(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type !== "comment";
	}
	function body$1(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type !== "comment";
	}
	function p$2(_, index, parent) {
		const next = siblingAfter(parent, index);
		return next ? next.type === "element" && (next.tagName === "address" || next.tagName === "article" || next.tagName === "aside" || next.tagName === "blockquote" || next.tagName === "details" || next.tagName === "div" || next.tagName === "dl" || next.tagName === "fieldset" || next.tagName === "figcaption" || next.tagName === "figure" || next.tagName === "footer" || next.tagName === "form" || next.tagName === "h1" || next.tagName === "h2" || next.tagName === "h3" || next.tagName === "h4" || next.tagName === "h5" || next.tagName === "h6" || next.tagName === "header" || next.tagName === "hgroup" || next.tagName === "hr" || next.tagName === "main" || next.tagName === "menu" || next.tagName === "nav" || next.tagName === "ol" || next.tagName === "p" || next.tagName === "pre" || next.tagName === "section" || next.tagName === "table" || next.tagName === "ul") : !parent || !(parent.type === "element" && (parent.tagName === "a" || parent.tagName === "audio" || parent.tagName === "del" || parent.tagName === "ins" || parent.tagName === "map" || parent.tagName === "noscript" || parent.tagName === "video"));
	}
	function li(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type === "element" && next.tagName === "li";
	}
	function dt(_, index, parent) {
		const next = siblingAfter(parent, index);
		return Boolean(next && next.type === "element" && (next.tagName === "dt" || next.tagName === "dd"));
	}
	function dd(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
	}
	function rubyElement(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type === "element" && (next.tagName === "rp" || next.tagName === "rt");
	}
	function optgroup(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type === "element" && next.tagName === "optgroup";
	}
	function option(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type === "element" && (next.tagName === "option" || next.tagName === "optgroup");
	}
	function thead(_, index, parent) {
		const next = siblingAfter(parent, index);
		return Boolean(next && next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot"));
	}
	function tbody$1(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
	}
	function tfoot(_, index, parent) {
		return !siblingAfter(parent, index);
	}
	function tr(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type === "element" && next.tagName === "tr";
	}
	function cells(_, index, parent) {
		const next = siblingAfter(parent, index);
		return !next || next.type === "element" && (next.tagName === "td" || next.tagName === "th");
	}
	var opening = omission({
		body,
		colgroup,
		head,
		html: html$2,
		tbody
	});
	function html$2(node) {
		const head = siblingAfter(node, -1);
		return !head || head.type !== "comment";
	}
	function head(node) {
		const seen = new Set();
		for (const child of node.children) if (child.type === "element" && (child.tagName === "base" || child.tagName === "title")) {
			if (seen.has(child.tagName)) return false;
			seen.add(child.tagName);
		}
		const child = node.children[0];
		return !child || child.type === "element";
	}
	function body(node) {
		const head = siblingAfter(node, -1, true);
		return !head || head.type !== "comment" && !(head.type === "text" && whitespace(head.value.charAt(0))) && !(head.type === "element" && (head.tagName === "meta" || head.tagName === "link" || head.tagName === "script" || head.tagName === "style" || head.tagName === "template"));
	}
	function colgroup(node, index, parent) {
		const previous = siblingBefore(parent, index);
		const head = siblingAfter(node, -1, true);
		if (parent && previous && previous.type === "element" && previous.tagName === "colgroup" && closing(previous, parent.children.indexOf(previous), parent)) return false;
		return Boolean(head && head.type === "element" && head.tagName === "col");
	}
	function tbody(node, index, parent) {
		const previous = siblingBefore(parent, index);
		const head = siblingAfter(node, -1);
		if (parent && previous && previous.type === "element" && (previous.tagName === "thead" || previous.tagName === "tbody") && closing(previous, parent.children.indexOf(previous), parent)) return false;
		return Boolean(head && head.type === "element" && head.tagName === "tr");
	}
	var constants = {
		name: [["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")], ["\0	\n\f\r \"&'/<=>".split(""), "\0	\n\f\r \"&'/<=>`".split("")]],
		unquoted: [["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")], ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]],
		single: [["&'".split(""), "\"&'`".split("")], ["\0&'".split(""), "\0\"&'`".split("")]],
		double: [["\"&".split(""), "\"&'`".split("")], ["\0\"&".split(""), "\0\"&'`".split("")]]
	};
	function element$2(node, index, parent, state) {
		const schema = state.schema;
		const omit = schema.space === "svg" ? false : state.settings.omitOptionalTags;
		let selfClosing = schema.space === "svg" ? state.settings.closeEmptyElements : state.settings.voids.includes(node.tagName.toLowerCase());
		const parts = [];
		let last;
		if (schema.space === "html" && node.tagName === "svg") state.schema = svg;
		const attributes = serializeAttributes(state, node.properties);
		const content = state.all(schema.space === "html" && node.tagName === "template" ? node.content : node);
		state.schema = schema;
		if (content) selfClosing = false;
		if (attributes || !omit || !opening(node, index, parent)) {
			parts.push("<", node.tagName, attributes ? " " + attributes : "");
			if (selfClosing && (schema.space === "svg" || state.settings.closeSelfClosing)) {
				last = attributes.charAt(attributes.length - 1);
				if (!state.settings.tightSelfClosing || last === "/" || last && last !== "\"" && last !== "'") parts.push(" ");
				parts.push("/");
			}
			parts.push(">");
		}
		parts.push(content);
		if (!selfClosing && (!omit || !closing(node, index, parent))) parts.push("</" + node.tagName + ">");
		return parts.join("");
	}
	function serializeAttributes(state, properties) {
		const values = [];
		let index = -1;
		let key;
		if (properties) {
			for (key in properties) if (properties[key] !== null && properties[key] !== void 0) {
				const value = serializeAttribute(state, key, properties[key]);
				if (value) values.push(value);
			}
		}
		while (++index < values.length) {
			const last = state.settings.tightAttributes ? values[index].charAt(values[index].length - 1) : void 0;
			if (index !== values.length - 1 && last !== "\"" && last !== "'") values[index] += " ";
		}
		return values.join("");
	}
	function serializeAttribute(state, key, value) {
		const info = find(state.schema, key);
		const x = state.settings.allowParseErrors && state.schema.space === "html" ? 0 : 1;
		const y = state.settings.allowDangerousCharacters ? 0 : 1;
		let quote = state.quote;
		let result;
		if (info.overloadedBoolean && (value === info.attribute || value === "")) value = true;
		else if ((info.boolean || info.overloadedBoolean) && (typeof value !== "string" || value === info.attribute || value === "")) value = Boolean(value);
		if (value === null || value === void 0 || value === false || typeof value === "number" && Number.isNaN(value)) return "";
		const name = stringifyEntities(info.attribute, Object.assign({}, state.settings.characterReferences, { subset: constants.name[x][y] }));
		if (value === true) return name;
		value = Array.isArray(value) ? (info.commaSeparated ? stringify$1 : stringify)(value, { padLeft: !state.settings.tightCommaSeparatedLists }) : String(value);
		if (state.settings.collapseEmptyAttributes && !value) return name;
		if (state.settings.preferUnquoted) result = stringifyEntities(value, Object.assign({}, state.settings.characterReferences, {
			attribute: true,
			subset: constants.unquoted[x][y]
		}));
		if (result !== value) {
			if (state.settings.quoteSmart && ccount(value, quote) > ccount(value, state.alternative)) quote = state.alternative;
			result = quote + stringifyEntities(value, Object.assign({}, state.settings.characterReferences, {
				subset: (quote === "'" ? constants.single : constants.double)[x][y],
				attribute: true
			})) + quote;
		}
		return name + (result ? "=" + result : result);
	}
	var textEntitySubset = ["<", "&"];
	function text$6(node, _, parent, state) {
		return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node.value : stringifyEntities(node.value, Object.assign({}, state.settings.characterReferences, { subset: textEntitySubset }));
	}
	function raw(node, index, parent, state) {
		return state.settings.allowDangerousHtml ? node.value : text$6(node, index, parent, state);
	}
	function root$3(node, _1, _2, state) {
		return state.all(node);
	}
	var handle$1 = zwitch("type", {
		invalid: invalid$1,
		unknown: unknown$1,
		handlers: {
			comment: comment$1,
			doctype: doctype$1,
			element: element$2,
			raw,
			root: root$3,
			text: text$6
		}
	});
	function invalid$1(node) {
		throw new Error("Expected node, not `" + node + "`");
	}
	function unknown$1(node_) {
		throw new Error("Cannot compile unknown node `" + node_.type + "`");
	}
	var emptyOptions$2 = {};
	var emptyCharacterReferences = {};
	var emptyChildren = [];
	function toHtml$1(tree, options) {
		const options_ = options || emptyOptions$2;
		const quote = options_.quote || "\"";
		const alternative = quote === "\"" ? "'" : "\"";
		if (quote !== "\"" && quote !== "'") throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
		return {
			one: one$1,
			all: all$1,
			settings: {
				omitOptionalTags: options_.omitOptionalTags || false,
				allowParseErrors: options_.allowParseErrors || false,
				allowDangerousCharacters: options_.allowDangerousCharacters || false,
				quoteSmart: options_.quoteSmart || false,
				preferUnquoted: options_.preferUnquoted || false,
				tightAttributes: options_.tightAttributes || false,
				upperDoctype: options_.upperDoctype || false,
				tightDoctype: options_.tightDoctype || false,
				bogusComments: options_.bogusComments || false,
				tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
				tightSelfClosing: options_.tightSelfClosing || false,
				collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
				allowDangerousHtml: options_.allowDangerousHtml || false,
				voids: options_.voids || htmlVoidElements,
				characterReferences: options_.characterReferences || emptyCharacterReferences,
				closeSelfClosing: options_.closeSelfClosing || false,
				closeEmptyElements: options_.closeEmptyElements || false
			},
			schema: options_.space === "svg" ? svg : html$4,
			quote,
			alternative
		}.one(Array.isArray(tree) ? {
			type: "root",
			children: tree
		} : tree, void 0, void 0);
	}
	function one$1(node, index, parent) {
		return handle$1(node, index, parent, this);
	}
	function all$1(parent) {
		const results = [];
		const children = parent && parent.children || emptyChildren;
		let index = -1;
		while (++index < children.length) results[index] = this.one(children[index], index, parent);
		return results.join("");
	}
	var env = typeof self === "object" ? self : globalThis;
	var guard = (name, init) => {
		switch (name) {
			case "Function":
			case "SharedWorker":
			case "Worker":
			case "eval":
			case "setInterval":
			case "setTimeout": throw new TypeError("unable to deserialize " + name);
		}
		return new env[name](init);
	};
	var deserializer = ($, _) => {
		const as = (out, index) => {
			$.set(index, out);
			return out;
		};
		const unpair = (index) => {
			if ($.has(index)) return $.get(index);
			const [type, value] = _[index];
			switch (type) {
				case 0:
				case -1: return as(value, index);
				case 1: {
					const arr = as([], index);
					for (const index of value) arr.push(unpair(index));
					return arr;
				}
				case 2: {
					const object = as({}, index);
					for (const [key, index] of value) object[unpair(key)] = unpair(index);
					return object;
				}
				case 3: return as(new Date(value), index);
				case 4: {
					const { source, flags } = value;
					return as(new RegExp(source, flags), index);
				}
				case 5: {
					const map = as(new Map(), index);
					for (const [key, index] of value) map.set(unpair(key), unpair(index));
					return map;
				}
				case 6: {
					const set = as(new Set(), index);
					for (const index of value) set.add(unpair(index));
					return set;
				}
				case 7: {
					const { name, message } = value;
					return as(typeof env[name] === "function" ? guard(name, message) : new Error(message), index);
				}
				case 8: return as(BigInt(value), index);
				case "BigInt": return as(Object(BigInt(value)), index);
				case "ArrayBuffer": return as(new Uint8Array(value).buffer, value);
				case "DataView": {
					const { buffer } = new Uint8Array(value);
					return as(new DataView(buffer), value);
				}
			}
			return as(guard(type, value), index);
		};
		return unpair;
	};
	var deserialize = (serialized) => deserializer(new Map(), serialized)(0);
	var EMPTY = "";
	var { toString: toString$1 } = {};
	var { keys } = Object;
	var typeOf = (value) => {
		const type = typeof value;
		if (type !== "object" || !value) return [0, type];
		const asString = toString$1.call(value).slice(8, -1);
		switch (asString) {
			case "Array": return [1, EMPTY];
			case "Object": return [2, EMPTY];
			case "Date": return [3, EMPTY];
			case "RegExp": return [4, EMPTY];
			case "Map": return [5, EMPTY];
			case "Set": return [6, EMPTY];
			case "DataView": return [1, asString];
		}
		if (asString.includes("Array")) return [1, asString];
		if (value instanceof Error) return [7, value.name || "Error"];
		return [2, asString];
	};
	var shouldSkip = ([TYPE, type]) => TYPE === 0 && (type === "function" || type === "symbol");
	var serializer = (strict, json, $, _) => {
		const as = (out, value) => {
			const index = _.push(out) - 1;
			$.set(value, index);
			return index;
		};
		const pair = (value) => {
			if ($.has(value)) return $.get(value);
			let [TYPE, type] = typeOf(value);
			switch (TYPE) {
				case 0: {
					let entry = value;
					switch (type) {
						case "bigint":
							TYPE = 8;
							entry = value.toString();
							break;
						case "function":
						case "symbol":
							if (strict) throw new TypeError("unable to serialize " + type);
							entry = null;
							break;
						case "undefined": return as([-1], value);
					}
					return as([TYPE, entry], value);
				}
				case 1: {
					if (type) {
						let spread = value;
						if (type === "DataView") spread = new Uint8Array(value.buffer);
						else if (type === "ArrayBuffer") spread = new Uint8Array(value);
						return as([type, [...spread]], value);
					}
					const arr = [];
					const index = as([TYPE, arr], value);
					for (const entry of value) arr.push(pair(entry));
					return index;
				}
				case 2: {
					if (type) switch (type) {
						case "BigInt": return as([type, value.toString()], value);
						case "Boolean":
						case "Number":
						case "String": return as([type, value.valueOf()], value);
					}
					if (json && "toJSON" in value) return pair(value.toJSON());
					const entries = [];
					const index = as([TYPE, entries], value);
					for (const key of keys(value)) if (strict || !shouldSkip(typeOf(value[key]))) entries.push([pair(key), pair(value[key])]);
					return index;
				}
				case 3: return as([TYPE, isNaN(value.getTime()) ? EMPTY : value.toISOString()], value);
				case 4: {
					const { source, flags } = value;
					return as([TYPE, {
						source,
						flags
					}], value);
				}
				case 5: {
					const entries = [];
					const index = as([TYPE, entries], value);
					for (const [key, entry] of value) if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry)))) entries.push([pair(key), pair(entry)]);
					return index;
				}
				case 6: {
					const entries = [];
					const index = as([TYPE, entries], value);
					for (const entry of value) if (strict || !shouldSkip(typeOf(entry))) entries.push(pair(entry));
					return index;
				}
			}
			const { message } = value;
			return as([TYPE, {
				name: type,
				message
			}], value);
		};
		return pair;
	};
	var serialize$1 = (value, { json, lossy } = {}) => {
		const _ = [];
		return serializer(!(json || lossy), !!json, new Map(), _)(value), _;
	};
	var esm_default = typeof structuredClone === "function" ? (any, options) => options && ("json" in options || "lossy" in options) ? deserialize(serialize$1(any, options)) : structuredClone(any) : (any, options) => deserialize(serialize$1(any, options));
	var pointEnd = point$2("end");
	var pointStart = point$2("start");
	function point$2(type) {
		return point;
		function point(node) {
			const point = node && node.position && node.position[type] || {};
			if (typeof point.line === "number" && point.line > 0 && typeof point.column === "number" && point.column > 0) return {
				line: point.line,
				column: point.column,
				offset: typeof point.offset === "number" && point.offset > -1 ? point.offset : void 0
			};
		}
	}
	function position$1(node) {
		const start = pointStart(node);
		const end = pointEnd(node);
		if (start && end) return {
			start,
			end
		};
	}
	var aria = [
		"ariaDescribedBy",
		"ariaLabel",
		"ariaLabelledBy"
	];
	var defaultSchema = {
		ancestors: {
			tbody: ["table"],
			td: ["table"],
			th: ["table"],
			thead: ["table"],
			tfoot: ["table"],
			tr: ["table"]
		},
		attributes: {
			a: [
				...aria,
				"dataFootnoteBackref",
				"dataFootnoteRef",
				["className", "data-footnote-backref"],
				"href"
			],
			blockquote: ["cite"],
			code: [["className", /^language-./]],
			del: ["cite"],
			div: ["itemScope", "itemType"],
			dl: [...aria],
			h2: [["className", "sr-only"]],
			img: [
				...aria,
				"longDesc",
				"src"
			],
			input: [["disabled", true], ["type", "checkbox"]],
			ins: ["cite"],
			li: [["className", "task-list-item"]],
			ol: [...aria, ["className", "contains-task-list"]],
			q: ["cite"],
			section: ["dataFootnotes", ["className", "footnotes"]],
			source: ["srcSet"],
			summary: [...aria],
			table: [...aria],
			ul: [...aria, ["className", "contains-task-list"]],
			"*": [
				"abbr",
				"accept",
				"acceptCharset",
				"accessKey",
				"action",
				"align",
				"alt",
				"axis",
				"border",
				"cellPadding",
				"cellSpacing",
				"char",
				"charOff",
				"charSet",
				"checked",
				"clear",
				"colSpan",
				"color",
				"cols",
				"compact",
				"coords",
				"dateTime",
				"dir",
				"encType",
				"frame",
				"hSpace",
				"headers",
				"height",
				"hrefLang",
				"htmlFor",
				"id",
				"isMap",
				"itemProp",
				"label",
				"lang",
				"maxLength",
				"media",
				"method",
				"multiple",
				"name",
				"noHref",
				"noShade",
				"noWrap",
				"open",
				"prompt",
				"readOnly",
				"rev",
				"rowSpan",
				"rows",
				"rules",
				"scope",
				"selected",
				"shape",
				"size",
				"span",
				"start",
				"summary",
				"tabIndex",
				"title",
				"useMap",
				"vAlign",
				"value",
				"width"
			]
		},
		clobber: [
			"ariaDescribedBy",
			"ariaLabelledBy",
			"id",
			"name"
		],
		clobberPrefix: "user-content-",
		protocols: {
			cite: ["http", "https"],
			href: [
				"http",
				"https",
				"irc",
				"ircs",
				"mailto",
				"xmpp"
			],
			longDesc: ["http", "https"],
			src: ["http", "https"]
		},
		required: { input: {
			disabled: true,
			type: "checkbox"
		} },
		strip: ["script"],
		tagNames: [
			"a",
			"b",
			"blockquote",
			"br",
			"code",
			"dd",
			"del",
			"details",
			"div",
			"dl",
			"dt",
			"em",
			"h1",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"hr",
			"i",
			"img",
			"input",
			"ins",
			"kbd",
			"li",
			"ol",
			"p",
			"picture",
			"pre",
			"q",
			"rp",
			"rt",
			"ruby",
			"s",
			"samp",
			"section",
			"source",
			"span",
			"strike",
			"strong",
			"sub",
			"summary",
			"sup",
			"table",
			"tbody",
			"td",
			"tfoot",
			"th",
			"thead",
			"tr",
			"tt",
			"ul",
			"var"
		]
	};
	var own$3 = {}.hasOwnProperty;
	function sanitize$1(node, options) {
		let result = {
			type: "root",
			children: []
		};
		const replace = transform({
			schema: options ? {
				...defaultSchema,
				...options
			} : defaultSchema,
			stack: []
		}, node);
		if (replace) {
			if (Array.isArray(replace)) {
				if (replace.length === 1) result = replace[0];
				else result.children = replace;
			} else result = replace;
		}
		return result;
	}
	function transform(state, node) {
		if (node && typeof node === "object") {
			const unsafe = node;
			switch (typeof unsafe.type === "string" ? unsafe.type : "") {
				case "comment": return comment(state, unsafe);
				case "doctype": return doctype(state, unsafe);
				case "element": return element$1(state, unsafe);
				case "root": return root$2(state, unsafe);
				case "text": return text$5(state, unsafe);
			}
		}
	}
	function comment(state, unsafe) {
		if (state.schema.allowComments) {
			const result = typeof unsafe.value === "string" ? unsafe.value : "";
			const index = result.indexOf("-->");
			const node = {
				type: "comment",
				value: index < 0 ? result : result.slice(0, index)
			};
			patch$1(node, unsafe);
			return node;
		}
	}
	function doctype(state, unsafe) {
		if (state.schema.allowDoctypes) {
			const node = { type: "doctype" };
			patch$1(node, unsafe);
			return node;
		}
	}
	function element$1(state, unsafe) {
		const name = typeof unsafe.tagName === "string" ? unsafe.tagName : "";
		state.stack.push(name);
		const content = children(state, unsafe.children);
		const properties_ = properties(state, unsafe.properties);
		state.stack.pop();
		let safeElement = false;
		if (name && name !== "*" && (!state.schema.tagNames || state.schema.tagNames.includes(name))) {
			safeElement = true;
			if (state.schema.ancestors && own$3.call(state.schema.ancestors, name)) {
				const ancestors = state.schema.ancestors[name];
				let index = -1;
				safeElement = false;
				while (++index < ancestors.length) if (state.stack.includes(ancestors[index])) safeElement = true;
			}
		}
		if (!safeElement) return state.schema.strip && !state.schema.strip.includes(name) ? content : void 0;
		const node = {
			type: "element",
			tagName: name,
			properties: properties_,
			children: content
		};
		patch$1(node, unsafe);
		return node;
	}
	function root$2(state, unsafe) {
		const node = {
			type: "root",
			children: children(state, unsafe.children)
		};
		patch$1(node, unsafe);
		return node;
	}
	function text$5(_, unsafe) {
		const node = {
			type: "text",
			value: typeof unsafe.value === "string" ? unsafe.value : ""
		};
		patch$1(node, unsafe);
		return node;
	}
	function children(state, children) {
		const results = [];
		if (Array.isArray(children)) {
			const childrenUnknown = children;
			let index = -1;
			while (++index < childrenUnknown.length) {
				const value = transform(state, childrenUnknown[index]);
				if (value) {
					if (Array.isArray(value)) results.push(...value);
					else results.push(value);
				}
			}
		}
		return results;
	}
	function properties(state, properties) {
		const tagName = state.stack[state.stack.length - 1];
		const attributes = state.schema.attributes;
		const required = state.schema.required;
		const specific = attributes && own$3.call(attributes, tagName) ? attributes[tagName] : void 0;
		const defaults = attributes && own$3.call(attributes, "*") ? attributes["*"] : void 0;
		const properties_ = properties && typeof properties === "object" ? properties : {};
		const result = {};
		let key;
		for (key in properties_) if (own$3.call(properties_, key)) {
			const unsafe = properties_[key];
			let safe = propertyValue(state, findDefinition(specific, key), key, unsafe);
			if (safe === null || safe === void 0) safe = propertyValue(state, findDefinition(defaults, key), key, unsafe);
			if (safe !== null && safe !== void 0) result[key] = safe;
		}
		if (required && own$3.call(required, tagName)) {
			const properties = required[tagName];
			for (key in properties) if (own$3.call(properties, key) && !own$3.call(result, key)) result[key] = properties[key];
		}
		return result;
	}
	function propertyValue(state, definition, key, value) {
		return definition ? Array.isArray(value) ? propertyValueMany(state, definition, key, value) : propertyValuePrimitive(state, definition, key, value) : void 0;
	}
	function propertyValueMany(state, definition, key, values) {
		let index = -1;
		const result = [];
		while (++index < values.length) {
			const value = propertyValuePrimitive(state, definition, key, values[index]);
			if (typeof value === "number" || typeof value === "string") result.push(value);
		}
		return result;
	}
	function propertyValuePrimitive(state, definition, key, value) {
		if (typeof value !== "boolean" && typeof value !== "number" && typeof value !== "string") return;
		if (!safeProtocol(state, key, value)) return;
		if (typeof definition === "object" && definition.length > 1) {
			let ok = false;
			let index = 0;
			while (++index < definition.length) {
				const allowed = definition[index];
				if (allowed && typeof allowed === "object" && "flags" in allowed) {
					if (allowed.test(String(value))) {
						ok = true;
						break;
					}
				} else if (allowed === value) {
					ok = true;
					break;
				}
			}
			if (!ok) return;
		}
		return state.schema.clobber && state.schema.clobberPrefix && state.schema.clobber.includes(key) ? state.schema.clobberPrefix + value : value;
	}
	function safeProtocol(state, key, value) {
		const protocols = state.schema.protocols && own$3.call(state.schema.protocols, key) ? state.schema.protocols[key] : void 0;
		if (!protocols || protocols.length === 0) return true;
		const url = String(value);
		const colon = url.indexOf(":");
		const questionMark = url.indexOf("?");
		const numberSign = url.indexOf("#");
		const slash = url.indexOf("/");
		if (colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign) return true;
		let index = -1;
		while (++index < protocols.length) {
			const protocol = protocols[index];
			if (colon === protocol.length && url.slice(0, protocol.length) === protocol) return true;
		}
		return false;
	}
	function patch$1(node, unsafe) {
		const cleanPosition = position$1(unsafe);
		if (unsafe.data) node.data = esm_default(unsafe.data);
		if (cleanPosition) node.position = cleanPosition;
	}
	function findDefinition(definitions, key) {
		let dataDefault;
		let index = -1;
		if (definitions) while (++index < definitions.length) {
			const entry = definitions[index];
			const name = typeof entry === "string" ? entry : entry[0];
			if (name === key) return entry;
			if (name === "data*") dataDefault = entry;
		}
		if (key.length > 4 && key.slice(0, 4).toLowerCase() === "data") return dataDefault;
	}
	var emptyOptions$1 = {};
	function toString(value, options) {
		const settings = options || emptyOptions$1;
		return one(value, typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true, typeof settings.includeHtml === "boolean" ? settings.includeHtml : true);
	}
	function one(value, includeImageAlt, includeHtml) {
		if (node(value)) {
			if ("value" in value) return value.type === "html" && !includeHtml ? "" : value.value;
			if (includeImageAlt && "alt" in value && value.alt) return value.alt;
			if ("children" in value) return all(value.children, includeImageAlt, includeHtml);
		}
		if (Array.isArray(value)) return all(value, includeImageAlt, includeHtml);
		return "";
	}
	function all(values, includeImageAlt, includeHtml) {
		const result = [];
		let index = -1;
		while (++index < values.length) result[index] = one(values[index], includeImageAlt, includeHtml);
		return result.join("");
	}
	function node(value) {
		return Boolean(value && typeof value === "object");
	}
	var element = document.createElement("i");
	function decodeNamedCharacterReference(value) {
		const characterReference = "&" + value + ";";
		element.innerHTML = characterReference;
		const character = element.textContent;
		if (character.charCodeAt(character.length - 1) === 59 && value !== "semi") return false;
		return character === characterReference ? false : character;
	}
	function splice(list, start, remove, items) {
		const end = list.length;
		let chunkStart = 0;
		let parameters;
		if (start < 0) start = -start > end ? 0 : end + start;
		else start = start > end ? end : start;
		remove = remove > 0 ? remove : 0;
		if (items.length < 1e4) {
			parameters = Array.from(items);
			parameters.unshift(start, remove);
			list.splice(...parameters);
		} else {
			if (remove) list.splice(start, remove);
			while (chunkStart < items.length) {
				parameters = items.slice(chunkStart, chunkStart + 1e4);
				parameters.unshift(start, 0);
				list.splice(...parameters);
				chunkStart += 1e4;
				start += 1e4;
			}
		}
	}
	function push(list, items) {
		if (list.length > 0) {
			splice(list, list.length, 0, items);
			return list;
		}
		return items;
	}
	var hasOwnProperty = {}.hasOwnProperty;
	function combineExtensions(extensions) {
		const all = {};
		let index = -1;
		while (++index < extensions.length) syntaxExtension(all, extensions[index]);
		return all;
	}
	function syntaxExtension(all, extension) {
		let hook;
		for (hook in extension) {
			const left = (hasOwnProperty.call(all, hook) ? all[hook] : void 0) || (all[hook] = {});
			const right = extension[hook];
			let code;
			if (right) for (code in right) {
				if (!hasOwnProperty.call(left, code)) left[code] = [];
				const value = right[code];
				constructs(left[code], Array.isArray(value) ? value : value ? [value] : []);
			}
		}
	}
	function constructs(existing, list) {
		let index = -1;
		const before = [];
		while (++index < list.length) (list[index].add === "after" ? existing : before).push(list[index]);
		splice(existing, 0, 0, before);
	}
	function decodeNumericCharacterReference(value, base) {
		const code = Number.parseInt(value, base);
		if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) return "�";
		return String.fromCodePoint(code);
	}
	function normalizeIdentifier(value) {
		return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
	}
	var asciiAlpha = regexCheck(/[A-Za-z]/);
	var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
	var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
	function asciiControl(code) {
		return code !== null && (code < 32 || code === 127);
	}
	var asciiDigit = regexCheck(/\d/);
	var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
	var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
	function markdownLineEnding(code) {
		return code !== null && code < -2;
	}
	function markdownLineEndingOrSpace(code) {
		return code !== null && (code < 0 || code === 32);
	}
	function markdownSpace(code) {
		return code === -2 || code === -1 || code === 32;
	}
	var unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
	var unicodeWhitespace = regexCheck(/\s/);
	function regexCheck(regex) {
		return check;
		function check(code) {
			return code !== null && code > -1 && regex.test(String.fromCharCode(code));
		}
	}
	function normalizeUri(value) {
		const result = [];
		let index = -1;
		let start = 0;
		let skip = 0;
		while (++index < value.length) {
			const code = value.charCodeAt(index);
			let replace = "";
			if (code === 37 && asciiAlphanumeric(value.charCodeAt(index + 1)) && asciiAlphanumeric(value.charCodeAt(index + 2))) skip = 2;
			else if (code < 128) {
				if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) replace = String.fromCharCode(code);
			} else if (code > 55295 && code < 57344) {
				const next = value.charCodeAt(index + 1);
				if (code < 56320 && next > 56319 && next < 57344) {
					replace = String.fromCharCode(code, next);
					skip = 1;
				} else replace = "�";
			} else replace = String.fromCharCode(code);
			if (replace) {
				result.push(value.slice(start, index), encodeURIComponent(replace));
				start = index + skip + 1;
				replace = "";
			}
			if (skip) {
				index += skip;
				skip = 0;
			}
		}
		return result.join("") + value.slice(start);
	}
	function factorySpace(effects, ok, type, max) {
		const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
		let size = 0;
		return start;
		function start(code) {
			if (markdownSpace(code)) {
				effects.enter(type);
				return prefix(code);
			}
			return ok(code);
		}
		function prefix(code) {
			if (markdownSpace(code) && size++ < limit) {
				effects.consume(code);
				return prefix;
			}
			effects.exit(type);
			return ok(code);
		}
	}
	var content$1 = { tokenize: initializeContent };
	function initializeContent(effects) {
		const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
		let previous;
		return contentStart;
		function afterContentStartConstruct(code) {
			if (code === null) {
				effects.consume(code);
				return;
			}
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return factorySpace(effects, contentStart, "linePrefix");
		}
		function paragraphInitial(code) {
			effects.enter("paragraph");
			return lineStart(code);
		}
		function lineStart(code) {
			const token = effects.enter("chunkText", {
				contentType: "text",
				previous
			});
			if (previous) previous.next = token;
			previous = token;
			return data(code);
		}
		function data(code) {
			if (code === null) {
				effects.exit("chunkText");
				effects.exit("paragraph");
				effects.consume(code);
				return;
			}
			if (markdownLineEnding(code)) {
				effects.consume(code);
				effects.exit("chunkText");
				return lineStart;
			}
			effects.consume(code);
			return data;
		}
	}
	var document$2 = { tokenize: initializeDocument };
	var containerConstruct = { tokenize: tokenizeContainer };
	function initializeDocument(effects) {
		const self = this;
		const stack = [];
		let continued = 0;
		let childFlow;
		let childToken;
		let lineStartOffset;
		return start;
		function start(code) {
			if (continued < stack.length) {
				const item = stack[continued];
				self.containerState = item[1];
				return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
			}
			return checkNewContainers(code);
		}
		function documentContinue(code) {
			continued++;
			if (self.containerState._closeFlow) {
				self.containerState._closeFlow = void 0;
				if (childFlow) closeFlow();
				const indexBeforeExits = self.events.length;
				let indexBeforeFlow = indexBeforeExits;
				let point;
				while (indexBeforeFlow--) if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
					point = self.events[indexBeforeFlow][1].end;
					break;
				}
				exitContainers(continued);
				let index = indexBeforeExits;
				while (index < self.events.length) {
					self.events[index][1].end = { ...point };
					index++;
				}
				splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
				self.events.length = index;
				return checkNewContainers(code);
			}
			return start(code);
		}
		function checkNewContainers(code) {
			if (continued === stack.length) {
				if (!childFlow) return documentContinued(code);
				if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) return flowStart(code);
				self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
			}
			self.containerState = {};
			return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
		}
		function thereIsANewContainer(code) {
			if (childFlow) closeFlow();
			exitContainers(continued);
			return documentContinued(code);
		}
		function thereIsNoNewContainer(code) {
			self.parser.lazy[self.now().line] = continued !== stack.length;
			lineStartOffset = self.now().offset;
			return flowStart(code);
		}
		function documentContinued(code) {
			self.containerState = {};
			return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
		}
		function containerContinue(code) {
			continued++;
			stack.push([self.currentConstruct, self.containerState]);
			return documentContinued(code);
		}
		function flowStart(code) {
			if (code === null) {
				if (childFlow) closeFlow();
				exitContainers(0);
				effects.consume(code);
				return;
			}
			childFlow = childFlow || self.parser.flow(self.now());
			effects.enter("chunkFlow", {
				_tokenizer: childFlow,
				contentType: "flow",
				previous: childToken
			});
			return flowContinue(code);
		}
		function flowContinue(code) {
			if (code === null) {
				writeToChild(effects.exit("chunkFlow"), true);
				exitContainers(0);
				effects.consume(code);
				return;
			}
			if (markdownLineEnding(code)) {
				effects.consume(code);
				writeToChild(effects.exit("chunkFlow"));
				continued = 0;
				self.interrupt = void 0;
				return start;
			}
			effects.consume(code);
			return flowContinue;
		}
		function writeToChild(token, endOfFile) {
			const stream = self.sliceStream(token);
			if (endOfFile) stream.push(null);
			token.previous = childToken;
			if (childToken) childToken.next = token;
			childToken = token;
			childFlow.defineSkip(token.start);
			childFlow.write(stream);
			if (self.parser.lazy[token.start.line]) {
				let index = childFlow.events.length;
				while (index--) if (childFlow.events[index][1].start.offset < lineStartOffset && (!childFlow.events[index][1].end || childFlow.events[index][1].end.offset > lineStartOffset)) return;
				const indexBeforeExits = self.events.length;
				let indexBeforeFlow = indexBeforeExits;
				let seen;
				let point;
				while (indexBeforeFlow--) if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
					if (seen) {
						point = self.events[indexBeforeFlow][1].end;
						break;
					}
					seen = true;
				}
				exitContainers(continued);
				index = indexBeforeExits;
				while (index < self.events.length) {
					self.events[index][1].end = { ...point };
					index++;
				}
				splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
				self.events.length = index;
			}
		}
		function exitContainers(size) {
			let index = stack.length;
			while (index-- > size) {
				const entry = stack[index];
				self.containerState = entry[1];
				entry[0].exit.call(self, effects);
			}
			stack.length = size;
		}
		function closeFlow() {
			childFlow.write([null]);
			childToken = void 0;
			childFlow = void 0;
			self.containerState._closeFlow = void 0;
		}
	}
	function tokenizeContainer(effects, ok, nok) {
		return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
	}
	function classifyCharacter(code) {
		if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) return 1;
		if (unicodePunctuation(code)) return 2;
	}
	function resolveAll(constructs, events, context) {
		const called = [];
		let index = -1;
		while (++index < constructs.length) {
			const resolve = constructs[index].resolveAll;
			if (resolve && !called.includes(resolve)) {
				events = resolve(events, context);
				called.push(resolve);
			}
		}
		return events;
	}
	var attention = {
		name: "attention",
		resolveAll: resolveAllAttention,
		tokenize: tokenizeAttention
	};
	function resolveAllAttention(events, context) {
		let index = -1;
		let open;
		let group;
		let text;
		let openingSequence;
		let closingSequence;
		let use;
		let nextEvents;
		let offset;
		while (++index < events.length) if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
			open = index;
			while (open--) if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
				if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) continue;
				use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
				const start = { ...events[open][1].end };
				const end = { ...events[index][1].start };
				movePoint(start, -use);
				movePoint(end, use);
				openingSequence = {
					type: use > 1 ? "strongSequence" : "emphasisSequence",
					start,
					end: { ...events[open][1].end }
				};
				closingSequence = {
					type: use > 1 ? "strongSequence" : "emphasisSequence",
					start: { ...events[index][1].start },
					end
				};
				text = {
					type: use > 1 ? "strongText" : "emphasisText",
					start: { ...events[open][1].end },
					end: { ...events[index][1].start }
				};
				group = {
					type: use > 1 ? "strong" : "emphasis",
					start: { ...openingSequence.start },
					end: { ...closingSequence.end }
				};
				events[open][1].end = { ...openingSequence.start };
				events[index][1].start = { ...closingSequence.end };
				nextEvents = [];
				if (events[open][1].end.offset - events[open][1].start.offset) nextEvents = push(nextEvents, [[
					"enter",
					events[open][1],
					context
				], [
					"exit",
					events[open][1],
					context
				]]);
				nextEvents = push(nextEvents, [
					[
						"enter",
						group,
						context
					],
					[
						"enter",
						openingSequence,
						context
					],
					[
						"exit",
						openingSequence,
						context
					],
					[
						"enter",
						text,
						context
					]
				]);
				nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context));
				nextEvents = push(nextEvents, [
					[
						"exit",
						text,
						context
					],
					[
						"enter",
						closingSequence,
						context
					],
					[
						"exit",
						closingSequence,
						context
					],
					[
						"exit",
						group,
						context
					]
				]);
				if (events[index][1].end.offset - events[index][1].start.offset) {
					offset = 2;
					nextEvents = push(nextEvents, [[
						"enter",
						events[index][1],
						context
					], [
						"exit",
						events[index][1],
						context
					]]);
				} else offset = 0;
				splice(events, open - 1, index - open + 3, nextEvents);
				index = open + nextEvents.length - offset - 2;
				break;
			}
		}
		index = -1;
		while (++index < events.length) if (events[index][1].type === "attentionSequence") events[index][1].type = "data";
		return events;
	}
	function tokenizeAttention(effects, ok) {
		const attentionMarkers = this.parser.constructs.attentionMarkers.null;
		const previous = this.previous;
		const before = classifyCharacter(previous);
		let marker;
		return start;
		function start(code) {
			marker = code;
			effects.enter("attentionSequence");
			return inside(code);
		}
		function inside(code) {
			if (code === marker) {
				effects.consume(code);
				return inside;
			}
			const token = effects.exit("attentionSequence");
			const after = classifyCharacter(code);
			const open = !after || after === 2 && before || attentionMarkers.includes(code);
			const close = !before || before === 2 && after || attentionMarkers.includes(previous);
			token._open = Boolean(marker === 42 ? open : open && (before || !close));
			token._close = Boolean(marker === 42 ? close : close && (after || !open));
			return ok(code);
		}
	}
	function movePoint(point, offset) {
		point.column += offset;
		point.offset += offset;
		point._bufferIndex += offset;
	}
	var autolink = {
		name: "autolink",
		tokenize: tokenizeAutolink
	};
	function tokenizeAutolink(effects, ok, nok) {
		let size = 0;
		return start;
		function start(code) {
			effects.enter("autolink");
			effects.enter("autolinkMarker");
			effects.consume(code);
			effects.exit("autolinkMarker");
			effects.enter("autolinkProtocol");
			return open;
		}
		function open(code) {
			if (asciiAlpha(code)) {
				effects.consume(code);
				return schemeOrEmailAtext;
			}
			if (code === 64) return nok(code);
			return emailAtext(code);
		}
		function schemeOrEmailAtext(code) {
			if (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) {
				size = 1;
				return schemeInsideOrEmailAtext(code);
			}
			return emailAtext(code);
		}
		function schemeInsideOrEmailAtext(code) {
			if (code === 58) {
				effects.consume(code);
				size = 0;
				return urlInside;
			}
			if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
				effects.consume(code);
				return schemeInsideOrEmailAtext;
			}
			size = 0;
			return emailAtext(code);
		}
		function urlInside(code) {
			if (code === 62) {
				effects.exit("autolinkProtocol");
				effects.enter("autolinkMarker");
				effects.consume(code);
				effects.exit("autolinkMarker");
				effects.exit("autolink");
				return ok;
			}
			if (code === null || code === 32 || code === 60 || asciiControl(code)) return nok(code);
			effects.consume(code);
			return urlInside;
		}
		function emailAtext(code) {
			if (code === 64) {
				effects.consume(code);
				return emailAtSignOrDot;
			}
			if (asciiAtext(code)) {
				effects.consume(code);
				return emailAtext;
			}
			return nok(code);
		}
		function emailAtSignOrDot(code) {
			return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
		}
		function emailLabel(code) {
			if (code === 46) {
				effects.consume(code);
				size = 0;
				return emailAtSignOrDot;
			}
			if (code === 62) {
				effects.exit("autolinkProtocol").type = "autolinkEmail";
				effects.enter("autolinkMarker");
				effects.consume(code);
				effects.exit("autolinkMarker");
				effects.exit("autolink");
				return ok;
			}
			return emailValue(code);
		}
		function emailValue(code) {
			if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
				const next = code === 45 ? emailValue : emailLabel;
				effects.consume(code);
				return next;
			}
			return nok(code);
		}
	}
	var blankLine = {
		partial: true,
		tokenize: tokenizeBlankLine
	};
	function tokenizeBlankLine(effects, ok, nok) {
		return start;
		function start(code) {
			return markdownSpace(code) ? factorySpace(effects, after, "linePrefix")(code) : after(code);
		}
		function after(code) {
			return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
		}
	}
	var blockQuote = {
		continuation: { tokenize: tokenizeBlockQuoteContinuation },
		exit: exit$1,
		name: "blockQuote",
		tokenize: tokenizeBlockQuoteStart
	};
	function tokenizeBlockQuoteStart(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			if (code === 62) {
				const state = self.containerState;
				if (!state.open) {
					effects.enter("blockQuote", { _container: true });
					state.open = true;
				}
				effects.enter("blockQuotePrefix");
				effects.enter("blockQuoteMarker");
				effects.consume(code);
				effects.exit("blockQuoteMarker");
				return after;
			}
			return nok(code);
		}
		function after(code) {
			if (markdownSpace(code)) {
				effects.enter("blockQuotePrefixWhitespace");
				effects.consume(code);
				effects.exit("blockQuotePrefixWhitespace");
				effects.exit("blockQuotePrefix");
				return ok;
			}
			effects.exit("blockQuotePrefix");
			return ok(code);
		}
	}
	function tokenizeBlockQuoteContinuation(effects, ok, nok) {
		const self = this;
		return contStart;
		function contStart(code) {
			if (markdownSpace(code)) return factorySpace(effects, contBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code);
			return contBefore(code);
		}
		function contBefore(code) {
			return effects.attempt(blockQuote, ok, nok)(code);
		}
	}
	function exit$1(effects) {
		effects.exit("blockQuote");
	}
	var characterEscape = {
		name: "characterEscape",
		tokenize: tokenizeCharacterEscape
	};
	function tokenizeCharacterEscape(effects, ok, nok) {
		return start;
		function start(code) {
			effects.enter("characterEscape");
			effects.enter("escapeMarker");
			effects.consume(code);
			effects.exit("escapeMarker");
			return inside;
		}
		function inside(code) {
			if (asciiPunctuation(code)) {
				effects.enter("characterEscapeValue");
				effects.consume(code);
				effects.exit("characterEscapeValue");
				effects.exit("characterEscape");
				return ok;
			}
			return nok(code);
		}
	}
	var characterReference = {
		name: "characterReference",
		tokenize: tokenizeCharacterReference
	};
	function tokenizeCharacterReference(effects, ok, nok) {
		const self = this;
		let size = 0;
		let max;
		let test;
		return start;
		function start(code) {
			effects.enter("characterReference");
			effects.enter("characterReferenceMarker");
			effects.consume(code);
			effects.exit("characterReferenceMarker");
			return open;
		}
		function open(code) {
			if (code === 35) {
				effects.enter("characterReferenceMarkerNumeric");
				effects.consume(code);
				effects.exit("characterReferenceMarkerNumeric");
				return numeric;
			}
			effects.enter("characterReferenceValue");
			max = 31;
			test = asciiAlphanumeric;
			return value(code);
		}
		function numeric(code) {
			if (code === 88 || code === 120) {
				effects.enter("characterReferenceMarkerHexadecimal");
				effects.consume(code);
				effects.exit("characterReferenceMarkerHexadecimal");
				effects.enter("characterReferenceValue");
				max = 6;
				test = asciiHexDigit;
				return value;
			}
			effects.enter("characterReferenceValue");
			max = 7;
			test = asciiDigit;
			return value(code);
		}
		function value(code) {
			if (code === 59 && size) {
				const token = effects.exit("characterReferenceValue");
				if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) return nok(code);
				effects.enter("characterReferenceMarker");
				effects.consume(code);
				effects.exit("characterReferenceMarker");
				effects.exit("characterReference");
				return ok;
			}
			if (test(code) && size++ < max) {
				effects.consume(code);
				return value;
			}
			return nok(code);
		}
	}
	var nonLazyContinuation = {
		partial: true,
		tokenize: tokenizeNonLazyContinuation
	};
	var codeFenced = {
		concrete: true,
		name: "codeFenced",
		tokenize: tokenizeCodeFenced
	};
	function tokenizeCodeFenced(effects, ok, nok) {
		const self = this;
		const closeStart = {
			partial: true,
			tokenize: tokenizeCloseStart
		};
		let initialPrefix = 0;
		let sizeOpen = 0;
		let marker;
		return start;
		function start(code) {
			return beforeSequenceOpen(code);
		}
		function beforeSequenceOpen(code) {
			const tail = self.events[self.events.length - 1];
			initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
			marker = code;
			effects.enter("codeFenced");
			effects.enter("codeFencedFence");
			effects.enter("codeFencedFenceSequence");
			return sequenceOpen(code);
		}
		function sequenceOpen(code) {
			if (code === marker) {
				sizeOpen++;
				effects.consume(code);
				return sequenceOpen;
			}
			if (sizeOpen < 3) return nok(code);
			effects.exit("codeFencedFenceSequence");
			return markdownSpace(code) ? factorySpace(effects, infoBefore, "whitespace")(code) : infoBefore(code);
		}
		function infoBefore(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("codeFencedFence");
				return self.interrupt ? ok(code) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code);
			}
			effects.enter("codeFencedFenceInfo");
			effects.enter("chunkString", { contentType: "string" });
			return info(code);
		}
		function info(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("chunkString");
				effects.exit("codeFencedFenceInfo");
				return infoBefore(code);
			}
			if (markdownSpace(code)) {
				effects.exit("chunkString");
				effects.exit("codeFencedFenceInfo");
				return factorySpace(effects, metaBefore, "whitespace")(code);
			}
			if (code === 96 && code === marker) return nok(code);
			effects.consume(code);
			return info;
		}
		function metaBefore(code) {
			if (code === null || markdownLineEnding(code)) return infoBefore(code);
			effects.enter("codeFencedFenceMeta");
			effects.enter("chunkString", { contentType: "string" });
			return meta(code);
		}
		function meta(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("chunkString");
				effects.exit("codeFencedFenceMeta");
				return infoBefore(code);
			}
			if (code === 96 && code === marker) return nok(code);
			effects.consume(code);
			return meta;
		}
		function atNonLazyBreak(code) {
			return effects.attempt(closeStart, after, contentBefore)(code);
		}
		function contentBefore(code) {
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return contentStart;
		}
		function contentStart(code) {
			return initialPrefix > 0 && markdownSpace(code) ? factorySpace(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code) : beforeContentChunk(code);
		}
		function beforeContentChunk(code) {
			if (code === null || markdownLineEnding(code)) return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code);
			effects.enter("codeFlowValue");
			return contentChunk(code);
		}
		function contentChunk(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("codeFlowValue");
				return beforeContentChunk(code);
			}
			effects.consume(code);
			return contentChunk;
		}
		function after(code) {
			effects.exit("codeFenced");
			return ok(code);
		}
		function tokenizeCloseStart(effects, ok, nok) {
			let size = 0;
			return startBefore;
			function startBefore(code) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return start;
			}
			function start(code) {
				effects.enter("codeFencedFence");
				return markdownSpace(code) ? factorySpace(effects, beforeSequenceClose, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code) : beforeSequenceClose(code);
			}
			function beforeSequenceClose(code) {
				if (code === marker) {
					effects.enter("codeFencedFenceSequence");
					return sequenceClose(code);
				}
				return nok(code);
			}
			function sequenceClose(code) {
				if (code === marker) {
					size++;
					effects.consume(code);
					return sequenceClose;
				}
				if (size >= sizeOpen) {
					effects.exit("codeFencedFenceSequence");
					return markdownSpace(code) ? factorySpace(effects, sequenceCloseAfter, "whitespace")(code) : sequenceCloseAfter(code);
				}
				return nok(code);
			}
			function sequenceCloseAfter(code) {
				if (code === null || markdownLineEnding(code)) {
					effects.exit("codeFencedFence");
					return ok(code);
				}
				return nok(code);
			}
		}
	}
	function tokenizeNonLazyContinuation(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			if (code === null) return nok(code);
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return lineStart;
		}
		function lineStart(code) {
			return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
		}
	}
	var codeIndented = {
		name: "codeIndented",
		tokenize: tokenizeCodeIndented
	};
	var furtherStart = {
		partial: true,
		tokenize: tokenizeFurtherStart
	};
	function tokenizeCodeIndented(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			effects.enter("codeIndented");
			return factorySpace(effects, afterPrefix, "linePrefix", 5)(code);
		}
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code) : nok(code);
		}
		function atBreak(code) {
			if (code === null) return after(code);
			if (markdownLineEnding(code)) return effects.attempt(furtherStart, atBreak, after)(code);
			effects.enter("codeFlowValue");
			return inside(code);
		}
		function inside(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("codeFlowValue");
				return atBreak(code);
			}
			effects.consume(code);
			return inside;
		}
		function after(code) {
			effects.exit("codeIndented");
			return ok(code);
		}
	}
	function tokenizeFurtherStart(effects, ok, nok) {
		const self = this;
		return furtherStart;
		function furtherStart(code) {
			if (self.parser.lazy[self.now().line]) return nok(code);
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return furtherStart;
			}
			return factorySpace(effects, afterPrefix, "linePrefix", 5)(code);
		}
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : markdownLineEnding(code) ? furtherStart(code) : nok(code);
		}
	}
	var codeText = {
		name: "codeText",
		previous: previous$1,
		resolve: resolveCodeText,
		tokenize: tokenizeCodeText
	};
	function resolveCodeText(events) {
		let tailExitIndex = events.length - 4;
		let headEnterIndex = 3;
		let index;
		let enter;
		if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
			index = headEnterIndex;
			while (++index < tailExitIndex) if (events[index][1].type === "codeTextData") {
				events[headEnterIndex][1].type = "codeTextPadding";
				events[tailExitIndex][1].type = "codeTextPadding";
				headEnterIndex += 2;
				tailExitIndex -= 2;
				break;
			}
		}
		index = headEnterIndex - 1;
		tailExitIndex++;
		while (++index <= tailExitIndex) if (enter === void 0) {
			if (index !== tailExitIndex && events[index][1].type !== "lineEnding") enter = index;
		} else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
			events[enter][1].type = "codeTextData";
			if (index !== enter + 2) {
				events[enter][1].end = events[index - 1][1].end;
				events.splice(enter + 2, index - enter - 2);
				tailExitIndex -= index - enter - 2;
				index = enter + 2;
			}
			enter = void 0;
		}
		return events;
	}
	function previous$1(code) {
		return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
	}
	function tokenizeCodeText(effects, ok, nok) {
		let sizeOpen = 0;
		let size;
		let token;
		return start;
		function start(code) {
			effects.enter("codeText");
			effects.enter("codeTextSequence");
			return sequenceOpen(code);
		}
		function sequenceOpen(code) {
			if (code === 96) {
				effects.consume(code);
				sizeOpen++;
				return sequenceOpen;
			}
			effects.exit("codeTextSequence");
			return between(code);
		}
		function between(code) {
			if (code === null) return nok(code);
			if (code === 32) {
				effects.enter("space");
				effects.consume(code);
				effects.exit("space");
				return between;
			}
			if (code === 96) {
				token = effects.enter("codeTextSequence");
				size = 0;
				return sequenceClose(code);
			}
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return between;
			}
			effects.enter("codeTextData");
			return data(code);
		}
		function data(code) {
			if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
				effects.exit("codeTextData");
				return between(code);
			}
			effects.consume(code);
			return data;
		}
		function sequenceClose(code) {
			if (code === 96) {
				effects.consume(code);
				size++;
				return sequenceClose;
			}
			if (size === sizeOpen) {
				effects.exit("codeTextSequence");
				effects.exit("codeText");
				return ok(code);
			}
			token.type = "codeTextData";
			return data(code);
		}
	}
	var SpliceBuffer = class {
		constructor(initial) {
			this.left = initial ? [...initial] : [];
			this.right = [];
		}
		get(index) {
			if (index < 0 || index >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + index + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
			if (index < this.left.length) return this.left[index];
			return this.right[this.right.length - index + this.left.length - 1];
		}
		get length() {
			return this.left.length + this.right.length;
		}
		shift() {
			this.setCursor(0);
			return this.right.pop();
		}
		slice(start, end) {
			const stop = end === null || end === void 0 ? Number.POSITIVE_INFINITY : end;
			if (stop < this.left.length) return this.left.slice(start, stop);
			if (start > this.left.length) return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
			return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
		}
		splice(start, deleteCount, items) {
			const count = deleteCount || 0;
			this.setCursor(Math.trunc(start));
			const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
			if (items) chunkedPush(this.left, items);
			return removed.reverse();
		}
		pop() {
			this.setCursor(Number.POSITIVE_INFINITY);
			return this.left.pop();
		}
		push(item) {
			this.setCursor(Number.POSITIVE_INFINITY);
			this.left.push(item);
		}
		pushMany(items) {
			this.setCursor(Number.POSITIVE_INFINITY);
			chunkedPush(this.left, items);
		}
		unshift(item) {
			this.setCursor(0);
			this.right.push(item);
		}
		unshiftMany(items) {
			this.setCursor(0);
			chunkedPush(this.right, items.reverse());
		}
		setCursor(n) {
			if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
			if (n < this.left.length) {
				const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
				chunkedPush(this.right, removed.reverse());
			} else {
				const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
				chunkedPush(this.left, removed.reverse());
			}
		}
	};
	function chunkedPush(list, right) {
		let chunkStart = 0;
		if (right.length < 1e4) list.push(...right);
		else while (chunkStart < right.length) {
			list.push(...right.slice(chunkStart, chunkStart + 1e4));
			chunkStart += 1e4;
		}
	}
	function subtokenize(eventsArray) {
		const jumps = {};
		let index = -1;
		let event;
		let lineIndex;
		let otherIndex;
		let otherEvent;
		let parameters;
		let subevents;
		let more;
		const events = new SpliceBuffer(eventsArray);
		while (++index < events.length) {
			while (index in jumps) index = jumps[index];
			event = events.get(index);
			if (index && event[1].type === "chunkFlow" && events.get(index - 1)[1].type === "listItemPrefix") {
				subevents = event[1]._tokenizer.events;
				otherIndex = 0;
				if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") otherIndex += 2;
				if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") while (++otherIndex < subevents.length) {
					if (subevents[otherIndex][1].type === "content") break;
					if (subevents[otherIndex][1].type === "chunkText") {
						subevents[otherIndex][1]._isInFirstContentOfListItem = true;
						otherIndex++;
					}
				}
			}
			if (event[0] === "enter") {
				if (event[1].contentType) {
					Object.assign(jumps, subcontent(events, index));
					index = jumps[index];
					more = true;
				}
			} else if (event[1]._container) {
				otherIndex = index;
				lineIndex = void 0;
				while (otherIndex--) {
					otherEvent = events.get(otherIndex);
					if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
						if (otherEvent[0] === "enter") {
							if (lineIndex) events.get(lineIndex)[1].type = "lineEndingBlank";
							otherEvent[1].type = "lineEnding";
							lineIndex = otherIndex;
						}
					} else if (otherEvent[1].type === "linePrefix" || otherEvent[1].type === "listItemIndent") {} else break;
				}
				if (lineIndex) {
					event[1].end = { ...events.get(lineIndex)[1].start };
					parameters = events.slice(lineIndex, index);
					parameters.unshift(event);
					events.splice(lineIndex, index - lineIndex + 1, parameters);
				}
			}
		}
		splice(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
		return !more;
	}
	function subcontent(events, eventIndex) {
		const token = events.get(eventIndex)[1];
		const context = events.get(eventIndex)[2];
		let startPosition = eventIndex - 1;
		const startPositions = [];
		let tokenizer = token._tokenizer;
		if (!tokenizer) {
			tokenizer = context.parser[token.contentType](token.start);
			if (token._contentTypeTextTrailing) tokenizer._contentTypeTextTrailing = true;
		}
		const childEvents = tokenizer.events;
		const jumps = [];
		const gaps = {};
		let stream;
		let previous;
		let index = -1;
		let current = token;
		let adjust = 0;
		let start = 0;
		const breaks = [start];
		while (current) {
			while (events.get(++startPosition)[1] !== current);
			startPositions.push(startPosition);
			if (!current._tokenizer) {
				stream = context.sliceStream(current);
				if (!current.next) stream.push(null);
				if (previous) tokenizer.defineSkip(current.start);
				if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = true;
				tokenizer.write(stream);
				if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = void 0;
			}
			previous = current;
			current = current.next;
		}
		current = token;
		while (++index < childEvents.length) if (childEvents[index][0] === "exit" && childEvents[index - 1][0] === "enter" && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
			start = index + 1;
			breaks.push(start);
			current._tokenizer = void 0;
			current.previous = void 0;
			current = current.next;
		}
		tokenizer.events = [];
		if (current) {
			current._tokenizer = void 0;
			current.previous = void 0;
		} else breaks.pop();
		index = breaks.length;
		while (index--) {
			const slice = childEvents.slice(breaks[index], breaks[index + 1]);
			const start = startPositions.pop();
			jumps.push([start, start + slice.length - 1]);
			events.splice(start, 2, slice);
		}
		jumps.reverse();
		index = -1;
		while (++index < jumps.length) {
			gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
			adjust += jumps[index][1] - jumps[index][0] - 1;
		}
		return gaps;
	}
	var content = {
		resolve: resolveContent,
		tokenize: tokenizeContent
	};
	var continuationConstruct = {
		partial: true,
		tokenize: tokenizeContinuation
	};
	function resolveContent(events) {
		subtokenize(events);
		return events;
	}
	function tokenizeContent(effects, ok) {
		let previous;
		return chunkStart;
		function chunkStart(code) {
			effects.enter("content");
			previous = effects.enter("chunkContent", { contentType: "content" });
			return chunkInside(code);
		}
		function chunkInside(code) {
			if (code === null) return contentEnd(code);
			if (markdownLineEnding(code)) return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
			effects.consume(code);
			return chunkInside;
		}
		function contentEnd(code) {
			effects.exit("chunkContent");
			effects.exit("content");
			return ok(code);
		}
		function contentContinue(code) {
			effects.consume(code);
			effects.exit("chunkContent");
			previous.next = effects.enter("chunkContent", {
				contentType: "content",
				previous
			});
			previous = previous.next;
			return chunkInside;
		}
	}
	function tokenizeContinuation(effects, ok, nok) {
		const self = this;
		return startLookahead;
		function startLookahead(code) {
			effects.exit("chunkContent");
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return factorySpace(effects, prefixed, "linePrefix");
		}
		function prefixed(code) {
			if (code === null || markdownLineEnding(code)) return nok(code);
			const tail = self.events[self.events.length - 1];
			if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) return ok(code);
			return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
		}
	}
	function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
		const limit = max || Number.POSITIVE_INFINITY;
		let balance = 0;
		return start;
		function start(code) {
			if (code === 60) {
				effects.enter(type);
				effects.enter(literalType);
				effects.enter(literalMarkerType);
				effects.consume(code);
				effects.exit(literalMarkerType);
				return enclosedBefore;
			}
			if (code === null || code === 32 || code === 41 || asciiControl(code)) return nok(code);
			effects.enter(type);
			effects.enter(rawType);
			effects.enter(stringType);
			effects.enter("chunkString", { contentType: "string" });
			return raw(code);
		}
		function enclosedBefore(code) {
			if (code === 62) {
				effects.enter(literalMarkerType);
				effects.consume(code);
				effects.exit(literalMarkerType);
				effects.exit(literalType);
				effects.exit(type);
				return ok;
			}
			effects.enter(stringType);
			effects.enter("chunkString", { contentType: "string" });
			return enclosed(code);
		}
		function enclosed(code) {
			if (code === 62) {
				effects.exit("chunkString");
				effects.exit(stringType);
				return enclosedBefore(code);
			}
			if (code === null || code === 60 || markdownLineEnding(code)) return nok(code);
			effects.consume(code);
			return code === 92 ? enclosedEscape : enclosed;
		}
		function enclosedEscape(code) {
			if (code === 60 || code === 62 || code === 92) {
				effects.consume(code);
				return enclosed;
			}
			return enclosed(code);
		}
		function raw(code) {
			if (!balance && (code === null || code === 41 || markdownLineEndingOrSpace(code))) {
				effects.exit("chunkString");
				effects.exit(stringType);
				effects.exit(rawType);
				effects.exit(type);
				return ok(code);
			}
			if (balance < limit && code === 40) {
				effects.consume(code);
				balance++;
				return raw;
			}
			if (code === 41) {
				effects.consume(code);
				balance--;
				return raw;
			}
			if (code === null || code === 32 || code === 40 || asciiControl(code)) return nok(code);
			effects.consume(code);
			return code === 92 ? rawEscape : raw;
		}
		function rawEscape(code) {
			if (code === 40 || code === 41 || code === 92) {
				effects.consume(code);
				return raw;
			}
			return raw(code);
		}
	}
	function factoryLabel(effects, ok, nok, type, markerType, stringType) {
		const self = this;
		let size = 0;
		let seen;
		return start;
		function start(code) {
			effects.enter(type);
			effects.enter(markerType);
			effects.consume(code);
			effects.exit(markerType);
			effects.enter(stringType);
			return atBreak;
		}
		function atBreak(code) {
			if (size > 999 || code === null || code === 91 || code === 93 && !seen || code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs) return nok(code);
			if (code === 93) {
				effects.exit(stringType);
				effects.enter(markerType);
				effects.consume(code);
				effects.exit(markerType);
				effects.exit(type);
				return ok;
			}
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return atBreak;
			}
			effects.enter("chunkString", { contentType: "string" });
			return labelInside(code);
		}
		function labelInside(code) {
			if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
				effects.exit("chunkString");
				return atBreak(code);
			}
			effects.consume(code);
			if (!seen) seen = !markdownSpace(code);
			return code === 92 ? labelEscape : labelInside;
		}
		function labelEscape(code) {
			if (code === 91 || code === 92 || code === 93) {
				effects.consume(code);
				size++;
				return labelInside;
			}
			return labelInside(code);
		}
	}
	function factoryTitle(effects, ok, nok, type, markerType, stringType) {
		let marker;
		return start;
		function start(code) {
			if (code === 34 || code === 39 || code === 40) {
				effects.enter(type);
				effects.enter(markerType);
				effects.consume(code);
				effects.exit(markerType);
				marker = code === 40 ? 41 : code;
				return begin;
			}
			return nok(code);
		}
		function begin(code) {
			if (code === marker) {
				effects.enter(markerType);
				effects.consume(code);
				effects.exit(markerType);
				effects.exit(type);
				return ok;
			}
			effects.enter(stringType);
			return atBreak(code);
		}
		function atBreak(code) {
			if (code === marker) {
				effects.exit(stringType);
				return begin(marker);
			}
			if (code === null) return nok(code);
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return factorySpace(effects, atBreak, "linePrefix");
			}
			effects.enter("chunkString", { contentType: "string" });
			return inside(code);
		}
		function inside(code) {
			if (code === marker || code === null || markdownLineEnding(code)) {
				effects.exit("chunkString");
				return atBreak(code);
			}
			effects.consume(code);
			return code === 92 ? escape : inside;
		}
		function escape(code) {
			if (code === marker || code === 92) {
				effects.consume(code);
				return inside;
			}
			return inside(code);
		}
	}
	function factoryWhitespace(effects, ok) {
		let seen;
		return start;
		function start(code) {
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				seen = true;
				return start;
			}
			if (markdownSpace(code)) return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
			return ok(code);
		}
	}
	var definition$1 = {
		name: "definition",
		tokenize: tokenizeDefinition
	};
	var titleBefore = {
		partial: true,
		tokenize: tokenizeTitleBefore
	};
	function tokenizeDefinition(effects, ok, nok) {
		const self = this;
		let identifier;
		return start;
		function start(code) {
			effects.enter("definition");
			return before(code);
		}
		function before(code) {
			return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
		}
		function labelAfter(code) {
			identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
			if (code === 58) {
				effects.enter("definitionMarker");
				effects.consume(code);
				effects.exit("definitionMarker");
				return markerAfter;
			}
			return nok(code);
		}
		function markerAfter(code) {
			return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, destinationBefore)(code) : destinationBefore(code);
		}
		function destinationBefore(code) {
			return factoryDestination(effects, destinationAfter, nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(code);
		}
		function destinationAfter(code) {
			return effects.attempt(titleBefore, after, after)(code);
		}
		function after(code) {
			return markdownSpace(code) ? factorySpace(effects, afterWhitespace, "whitespace")(code) : afterWhitespace(code);
		}
		function afterWhitespace(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("definition");
				self.parser.defined.push(identifier);
				return ok(code);
			}
			return nok(code);
		}
	}
	function tokenizeTitleBefore(effects, ok, nok) {
		return titleBefore;
		function titleBefore(code) {
			return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, beforeMarker)(code) : nok(code);
		}
		function beforeMarker(code) {
			return factoryTitle(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
		}
		function titleAfter(code) {
			return markdownSpace(code) ? factorySpace(effects, titleAfterOptionalWhitespace, "whitespace")(code) : titleAfterOptionalWhitespace(code);
		}
		function titleAfterOptionalWhitespace(code) {
			return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
		}
	}
	var hardBreakEscape = {
		name: "hardBreakEscape",
		tokenize: tokenizeHardBreakEscape
	};
	function tokenizeHardBreakEscape(effects, ok, nok) {
		return start;
		function start(code) {
			effects.enter("hardBreakEscape");
			effects.consume(code);
			return after;
		}
		function after(code) {
			if (markdownLineEnding(code)) {
				effects.exit("hardBreakEscape");
				return ok(code);
			}
			return nok(code);
		}
	}
	var headingAtx = {
		name: "headingAtx",
		resolve: resolveHeadingAtx,
		tokenize: tokenizeHeadingAtx
	};
	function resolveHeadingAtx(events, context) {
		let contentEnd = events.length - 2;
		let contentStart = 3;
		let content;
		let text;
		if (events[contentStart][1].type === "whitespace") contentStart += 2;
		if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") contentEnd -= 2;
		if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
		if (contentEnd > contentStart) {
			content = {
				type: "atxHeadingText",
				start: events[contentStart][1].start,
				end: events[contentEnd][1].end
			};
			text = {
				type: "chunkText",
				start: events[contentStart][1].start,
				end: events[contentEnd][1].end,
				contentType: "text"
			};
			splice(events, contentStart, contentEnd - contentStart + 1, [
				[
					"enter",
					content,
					context
				],
				[
					"enter",
					text,
					context
				],
				[
					"exit",
					text,
					context
				],
				[
					"exit",
					content,
					context
				]
			]);
		}
		return events;
	}
	function tokenizeHeadingAtx(effects, ok, nok) {
		let size = 0;
		return start;
		function start(code) {
			effects.enter("atxHeading");
			return before(code);
		}
		function before(code) {
			effects.enter("atxHeadingSequence");
			return sequenceOpen(code);
		}
		function sequenceOpen(code) {
			if (code === 35 && size++ < 6) {
				effects.consume(code);
				return sequenceOpen;
			}
			if (code === null || markdownLineEndingOrSpace(code)) {
				effects.exit("atxHeadingSequence");
				return atBreak(code);
			}
			return nok(code);
		}
		function atBreak(code) {
			if (code === 35) {
				effects.enter("atxHeadingSequence");
				return sequenceFurther(code);
			}
			if (code === null || markdownLineEnding(code)) {
				effects.exit("atxHeading");
				return ok(code);
			}
			if (markdownSpace(code)) return factorySpace(effects, atBreak, "whitespace")(code);
			effects.enter("atxHeadingText");
			return data(code);
		}
		function sequenceFurther(code) {
			if (code === 35) {
				effects.consume(code);
				return sequenceFurther;
			}
			effects.exit("atxHeadingSequence");
			return atBreak(code);
		}
		function data(code) {
			if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
				effects.exit("atxHeadingText");
				return atBreak(code);
			}
			effects.consume(code);
			return data;
		}
	}
	var htmlBlockNames = [
		"address",
		"article",
		"aside",
		"base",
		"basefont",
		"blockquote",
		"body",
		"caption",
		"center",
		"col",
		"colgroup",
		"dd",
		"details",
		"dialog",
		"dir",
		"div",
		"dl",
		"dt",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"frame",
		"frameset",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hr",
		"html",
		"iframe",
		"legend",
		"li",
		"link",
		"main",
		"menu",
		"menuitem",
		"nav",
		"noframes",
		"ol",
		"optgroup",
		"option",
		"p",
		"param",
		"search",
		"section",
		"summary",
		"table",
		"tbody",
		"td",
		"tfoot",
		"th",
		"thead",
		"title",
		"tr",
		"track",
		"ul"
	];
	var htmlRawNames = [
		"pre",
		"script",
		"style",
		"textarea"
	];
	var htmlFlow = {
		concrete: true,
		name: "htmlFlow",
		resolveTo: resolveToHtmlFlow,
		tokenize: tokenizeHtmlFlow
	};
	var blankLineBefore = {
		partial: true,
		tokenize: tokenizeBlankLineBefore
	};
	var nonLazyContinuationStart = {
		partial: true,
		tokenize: tokenizeNonLazyContinuationStart
	};
	function resolveToHtmlFlow(events) {
		let index = events.length;
		while (index--) if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") break;
		if (index > 1 && events[index - 2][1].type === "linePrefix") {
			events[index][1].start = events[index - 2][1].start;
			events[index + 1][1].start = events[index - 2][1].start;
			events.splice(index - 2, 2);
		}
		return events;
	}
	function tokenizeHtmlFlow(effects, ok, nok) {
		const self = this;
		let marker;
		let closingTag;
		let buffer;
		let index;
		let markerB;
		return start;
		function start(code) {
			return before(code);
		}
		function before(code) {
			effects.enter("htmlFlow");
			effects.enter("htmlFlowData");
			effects.consume(code);
			return open;
		}
		function open(code) {
			if (code === 33) {
				effects.consume(code);
				return declarationOpen;
			}
			if (code === 47) {
				effects.consume(code);
				closingTag = true;
				return tagCloseStart;
			}
			if (code === 63) {
				effects.consume(code);
				marker = 3;
				return self.interrupt ? ok : continuationDeclarationInside;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				buffer = String.fromCharCode(code);
				return tagName;
			}
			return nok(code);
		}
		function declarationOpen(code) {
			if (code === 45) {
				effects.consume(code);
				marker = 2;
				return commentOpenInside;
			}
			if (code === 91) {
				effects.consume(code);
				marker = 5;
				index = 0;
				return cdataOpenInside;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				marker = 4;
				return self.interrupt ? ok : continuationDeclarationInside;
			}
			return nok(code);
		}
		function commentOpenInside(code) {
			if (code === 45) {
				effects.consume(code);
				return self.interrupt ? ok : continuationDeclarationInside;
			}
			return nok(code);
		}
		function cdataOpenInside(code) {
			if (code === "CDATA[".charCodeAt(index++)) {
				effects.consume(code);
				if (index === 6) return self.interrupt ? ok : continuation;
				return cdataOpenInside;
			}
			return nok(code);
		}
		function tagCloseStart(code) {
			if (asciiAlpha(code)) {
				effects.consume(code);
				buffer = String.fromCharCode(code);
				return tagName;
			}
			return nok(code);
		}
		function tagName(code) {
			if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
				const slash = code === 47;
				const name = buffer.toLowerCase();
				if (!slash && !closingTag && htmlRawNames.includes(name)) {
					marker = 1;
					return self.interrupt ? ok(code) : continuation(code);
				}
				if (htmlBlockNames.includes(buffer.toLowerCase())) {
					marker = 6;
					if (slash) {
						effects.consume(code);
						return basicSelfClosing;
					}
					return self.interrupt ? ok(code) : continuation(code);
				}
				marker = 7;
				return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : closingTag ? completeClosingTagAfter(code) : completeAttributeNameBefore(code);
			}
			if (code === 45 || asciiAlphanumeric(code)) {
				effects.consume(code);
				buffer += String.fromCharCode(code);
				return tagName;
			}
			return nok(code);
		}
		function basicSelfClosing(code) {
			if (code === 62) {
				effects.consume(code);
				return self.interrupt ? ok : continuation;
			}
			return nok(code);
		}
		function completeClosingTagAfter(code) {
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeClosingTagAfter;
			}
			return completeEnd(code);
		}
		function completeAttributeNameBefore(code) {
			if (code === 47) {
				effects.consume(code);
				return completeEnd;
			}
			if (code === 58 || code === 95 || asciiAlpha(code)) {
				effects.consume(code);
				return completeAttributeName;
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeAttributeNameBefore;
			}
			return completeEnd(code);
		}
		function completeAttributeName(code) {
			if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
				effects.consume(code);
				return completeAttributeName;
			}
			return completeAttributeNameAfter(code);
		}
		function completeAttributeNameAfter(code) {
			if (code === 61) {
				effects.consume(code);
				return completeAttributeValueBefore;
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeAttributeNameAfter;
			}
			return completeAttributeNameBefore(code);
		}
		function completeAttributeValueBefore(code) {
			if (code === null || code === 60 || code === 61 || code === 62 || code === 96) return nok(code);
			if (code === 34 || code === 39) {
				effects.consume(code);
				markerB = code;
				return completeAttributeValueQuoted;
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeAttributeValueBefore;
			}
			return completeAttributeValueUnquoted(code);
		}
		function completeAttributeValueQuoted(code) {
			if (code === markerB) {
				effects.consume(code);
				markerB = null;
				return completeAttributeValueQuotedAfter;
			}
			if (code === null || markdownLineEnding(code)) return nok(code);
			effects.consume(code);
			return completeAttributeValueQuoted;
		}
		function completeAttributeValueUnquoted(code) {
			if (code === null || code === 34 || code === 39 || code === 47 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) return completeAttributeNameAfter(code);
			effects.consume(code);
			return completeAttributeValueUnquoted;
		}
		function completeAttributeValueQuotedAfter(code) {
			if (code === 47 || code === 62 || markdownSpace(code)) return completeAttributeNameBefore(code);
			return nok(code);
		}
		function completeEnd(code) {
			if (code === 62) {
				effects.consume(code);
				return completeAfter;
			}
			return nok(code);
		}
		function completeAfter(code) {
			if (code === null || markdownLineEnding(code)) return continuation(code);
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeAfter;
			}
			return nok(code);
		}
		function continuation(code) {
			if (code === 45 && marker === 2) {
				effects.consume(code);
				return continuationCommentInside;
			}
			if (code === 60 && marker === 1) {
				effects.consume(code);
				return continuationRawTagOpen;
			}
			if (code === 62 && marker === 4) {
				effects.consume(code);
				return continuationClose;
			}
			if (code === 63 && marker === 3) {
				effects.consume(code);
				return continuationDeclarationInside;
			}
			if (code === 93 && marker === 5) {
				effects.consume(code);
				return continuationCdataInside;
			}
			if (markdownLineEnding(code) && (marker === 6 || marker === 7)) {
				effects.exit("htmlFlowData");
				return effects.check(blankLineBefore, continuationAfter, continuationStart)(code);
			}
			if (code === null || markdownLineEnding(code)) {
				effects.exit("htmlFlowData");
				return continuationStart(code);
			}
			effects.consume(code);
			return continuation;
		}
		function continuationStart(code) {
			return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code);
		}
		function continuationStartNonLazy(code) {
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return continuationBefore;
		}
		function continuationBefore(code) {
			if (code === null || markdownLineEnding(code)) return continuationStart(code);
			effects.enter("htmlFlowData");
			return continuation(code);
		}
		function continuationCommentInside(code) {
			if (code === 45) {
				effects.consume(code);
				return continuationDeclarationInside;
			}
			return continuation(code);
		}
		function continuationRawTagOpen(code) {
			if (code === 47) {
				effects.consume(code);
				buffer = "";
				return continuationRawEndTag;
			}
			return continuation(code);
		}
		function continuationRawEndTag(code) {
			if (code === 62) {
				const name = buffer.toLowerCase();
				if (htmlRawNames.includes(name)) {
					effects.consume(code);
					return continuationClose;
				}
				return continuation(code);
			}
			if (asciiAlpha(code) && buffer.length < 8) {
				effects.consume(code);
				buffer += String.fromCharCode(code);
				return continuationRawEndTag;
			}
			return continuation(code);
		}
		function continuationCdataInside(code) {
			if (code === 93) {
				effects.consume(code);
				return continuationDeclarationInside;
			}
			return continuation(code);
		}
		function continuationDeclarationInside(code) {
			if (code === 62) {
				effects.consume(code);
				return continuationClose;
			}
			if (code === 45 && marker === 2) {
				effects.consume(code);
				return continuationDeclarationInside;
			}
			return continuation(code);
		}
		function continuationClose(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("htmlFlowData");
				return continuationAfter(code);
			}
			effects.consume(code);
			return continuationClose;
		}
		function continuationAfter(code) {
			effects.exit("htmlFlow");
			return ok(code);
		}
	}
	function tokenizeNonLazyContinuationStart(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return after;
			}
			return nok(code);
		}
		function after(code) {
			return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
		}
	}
	function tokenizeBlankLineBefore(effects, ok, nok) {
		return start;
		function start(code) {
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return effects.attempt(blankLine, ok, nok);
		}
	}
	var htmlText = {
		name: "htmlText",
		tokenize: tokenizeHtmlText
	};
	function tokenizeHtmlText(effects, ok, nok) {
		const self = this;
		let marker;
		let index;
		let returnState;
		return start;
		function start(code) {
			effects.enter("htmlText");
			effects.enter("htmlTextData");
			effects.consume(code);
			return open;
		}
		function open(code) {
			if (code === 33) {
				effects.consume(code);
				return declarationOpen;
			}
			if (code === 47) {
				effects.consume(code);
				return tagCloseStart;
			}
			if (code === 63) {
				effects.consume(code);
				return instruction;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				return tagOpen;
			}
			return nok(code);
		}
		function declarationOpen(code) {
			if (code === 45) {
				effects.consume(code);
				return commentOpenInside;
			}
			if (code === 91) {
				effects.consume(code);
				index = 0;
				return cdataOpenInside;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				return declaration;
			}
			return nok(code);
		}
		function commentOpenInside(code) {
			if (code === 45) {
				effects.consume(code);
				return commentEnd;
			}
			return nok(code);
		}
		function comment(code) {
			if (code === null) return nok(code);
			if (code === 45) {
				effects.consume(code);
				return commentClose;
			}
			if (markdownLineEnding(code)) {
				returnState = comment;
				return lineEndingBefore(code);
			}
			effects.consume(code);
			return comment;
		}
		function commentClose(code) {
			if (code === 45) {
				effects.consume(code);
				return commentEnd;
			}
			return comment(code);
		}
		function commentEnd(code) {
			return code === 62 ? end(code) : code === 45 ? commentClose(code) : comment(code);
		}
		function cdataOpenInside(code) {
			if (code === "CDATA[".charCodeAt(index++)) {
				effects.consume(code);
				return index === 6 ? cdata : cdataOpenInside;
			}
			return nok(code);
		}
		function cdata(code) {
			if (code === null) return nok(code);
			if (code === 93) {
				effects.consume(code);
				return cdataClose;
			}
			if (markdownLineEnding(code)) {
				returnState = cdata;
				return lineEndingBefore(code);
			}
			effects.consume(code);
			return cdata;
		}
		function cdataClose(code) {
			if (code === 93) {
				effects.consume(code);
				return cdataEnd;
			}
			return cdata(code);
		}
		function cdataEnd(code) {
			if (code === 62) return end(code);
			if (code === 93) {
				effects.consume(code);
				return cdataEnd;
			}
			return cdata(code);
		}
		function declaration(code) {
			if (code === null || code === 62) return end(code);
			if (markdownLineEnding(code)) {
				returnState = declaration;
				return lineEndingBefore(code);
			}
			effects.consume(code);
			return declaration;
		}
		function instruction(code) {
			if (code === null) return nok(code);
			if (code === 63) {
				effects.consume(code);
				return instructionClose;
			}
			if (markdownLineEnding(code)) {
				returnState = instruction;
				return lineEndingBefore(code);
			}
			effects.consume(code);
			return instruction;
		}
		function instructionClose(code) {
			return code === 62 ? end(code) : instruction(code);
		}
		function tagCloseStart(code) {
			if (asciiAlpha(code)) {
				effects.consume(code);
				return tagClose;
			}
			return nok(code);
		}
		function tagClose(code) {
			if (code === 45 || asciiAlphanumeric(code)) {
				effects.consume(code);
				return tagClose;
			}
			return tagCloseBetween(code);
		}
		function tagCloseBetween(code) {
			if (markdownLineEnding(code)) {
				returnState = tagCloseBetween;
				return lineEndingBefore(code);
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return tagCloseBetween;
			}
			return end(code);
		}
		function tagOpen(code) {
			if (code === 45 || asciiAlphanumeric(code)) {
				effects.consume(code);
				return tagOpen;
			}
			if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) return tagOpenBetween(code);
			return nok(code);
		}
		function tagOpenBetween(code) {
			if (code === 47) {
				effects.consume(code);
				return end;
			}
			if (code === 58 || code === 95 || asciiAlpha(code)) {
				effects.consume(code);
				return tagOpenAttributeName;
			}
			if (markdownLineEnding(code)) {
				returnState = tagOpenBetween;
				return lineEndingBefore(code);
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return tagOpenBetween;
			}
			return end(code);
		}
		function tagOpenAttributeName(code) {
			if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
				effects.consume(code);
				return tagOpenAttributeName;
			}
			return tagOpenAttributeNameAfter(code);
		}
		function tagOpenAttributeNameAfter(code) {
			if (code === 61) {
				effects.consume(code);
				return tagOpenAttributeValueBefore;
			}
			if (markdownLineEnding(code)) {
				returnState = tagOpenAttributeNameAfter;
				return lineEndingBefore(code);
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return tagOpenAttributeNameAfter;
			}
			return tagOpenBetween(code);
		}
		function tagOpenAttributeValueBefore(code) {
			if (code === null || code === 60 || code === 61 || code === 62 || code === 96) return nok(code);
			if (code === 34 || code === 39) {
				effects.consume(code);
				marker = code;
				return tagOpenAttributeValueQuoted;
			}
			if (markdownLineEnding(code)) {
				returnState = tagOpenAttributeValueBefore;
				return lineEndingBefore(code);
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return tagOpenAttributeValueBefore;
			}
			effects.consume(code);
			return tagOpenAttributeValueUnquoted;
		}
		function tagOpenAttributeValueQuoted(code) {
			if (code === marker) {
				effects.consume(code);
				marker = void 0;
				return tagOpenAttributeValueQuotedAfter;
			}
			if (code === null) return nok(code);
			if (markdownLineEnding(code)) {
				returnState = tagOpenAttributeValueQuoted;
				return lineEndingBefore(code);
			}
			effects.consume(code);
			return tagOpenAttributeValueQuoted;
		}
		function tagOpenAttributeValueUnquoted(code) {
			if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) return nok(code);
			if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) return tagOpenBetween(code);
			effects.consume(code);
			return tagOpenAttributeValueUnquoted;
		}
		function tagOpenAttributeValueQuotedAfter(code) {
			if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) return tagOpenBetween(code);
			return nok(code);
		}
		function end(code) {
			if (code === 62) {
				effects.consume(code);
				effects.exit("htmlTextData");
				effects.exit("htmlText");
				return ok;
			}
			return nok(code);
		}
		function lineEndingBefore(code) {
			effects.exit("htmlTextData");
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return lineEndingAfter;
		}
		function lineEndingAfter(code) {
			return markdownSpace(code) ? factorySpace(effects, lineEndingAfterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code) : lineEndingAfterPrefix(code);
		}
		function lineEndingAfterPrefix(code) {
			effects.enter("htmlTextData");
			return returnState(code);
		}
	}
	var labelEnd = {
		name: "labelEnd",
		resolveAll: resolveAllLabelEnd,
		resolveTo: resolveToLabelEnd,
		tokenize: tokenizeLabelEnd
	};
	var resourceConstruct = { tokenize: tokenizeResource };
	var referenceFullConstruct = { tokenize: tokenizeReferenceFull };
	var referenceCollapsedConstruct = { tokenize: tokenizeReferenceCollapsed };
	function resolveAllLabelEnd(events) {
		let index = -1;
		const newEvents = [];
		while (++index < events.length) {
			const token = events[index][1];
			newEvents.push(events[index]);
			if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
				const offset = token.type === "labelImage" ? 4 : 2;
				token.type = "data";
				index += offset;
			}
		}
		if (events.length !== newEvents.length) splice(events, 0, events.length, newEvents);
		return events;
	}
	function resolveToLabelEnd(events, context) {
		let index = events.length;
		let offset = 0;
		let token;
		let open;
		let close;
		let media;
		while (index--) {
			token = events[index][1];
			if (open) {
				if (token.type === "link" || token.type === "labelLink" && token._inactive) break;
				if (events[index][0] === "enter" && token.type === "labelLink") token._inactive = true;
			} else if (close) {
				if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
					open = index;
					if (token.type !== "labelLink") {
						offset = 2;
						break;
					}
				}
			} else if (token.type === "labelEnd") close = index;
		}
		const group = {
			type: events[open][1].type === "labelLink" ? "link" : "image",
			start: { ...events[open][1].start },
			end: { ...events[events.length - 1][1].end }
		};
		const label = {
			type: "label",
			start: { ...events[open][1].start },
			end: { ...events[close][1].end }
		};
		const text = {
			type: "labelText",
			start: { ...events[open + offset + 2][1].end },
			end: { ...events[close - 2][1].start }
		};
		media = [[
			"enter",
			group,
			context
		], [
			"enter",
			label,
			context
		]];
		media = push(media, events.slice(open + 1, open + offset + 3));
		media = push(media, [[
			"enter",
			text,
			context
		]]);
		media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
		media = push(media, [
			[
				"exit",
				text,
				context
			],
			events[close - 2],
			events[close - 1],
			[
				"exit",
				label,
				context
			]
		]);
		media = push(media, events.slice(close + 1));
		media = push(media, [[
			"exit",
			group,
			context
		]]);
		splice(events, open, events.length, media);
		return events;
	}
	function tokenizeLabelEnd(effects, ok, nok) {
		const self = this;
		let index = self.events.length;
		let labelStart;
		let defined;
		while (index--) if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
			labelStart = self.events[index][1];
			break;
		}
		return start;
		function start(code) {
			if (!labelStart) return nok(code);
			if (labelStart._inactive) return labelEndNok(code);
			defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
				start: labelStart.end,
				end: self.now()
			})));
			effects.enter("labelEnd");
			effects.enter("labelMarker");
			effects.consume(code);
			effects.exit("labelMarker");
			effects.exit("labelEnd");
			return after;
		}
		function after(code) {
			if (code === 40) return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code);
			if (code === 91) return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code);
			return defined ? labelEndOk(code) : labelEndNok(code);
		}
		function referenceNotFull(code) {
			return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code);
		}
		function labelEndOk(code) {
			return ok(code);
		}
		function labelEndNok(code) {
			labelStart._balanced = true;
			return nok(code);
		}
	}
	function tokenizeResource(effects, ok, nok) {
		return resourceStart;
		function resourceStart(code) {
			effects.enter("resource");
			effects.enter("resourceMarker");
			effects.consume(code);
			effects.exit("resourceMarker");
			return resourceBefore;
		}
		function resourceBefore(code) {
			return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, resourceOpen)(code) : resourceOpen(code);
		}
		function resourceOpen(code) {
			if (code === 41) return resourceEnd(code);
			return factoryDestination(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code);
		}
		function resourceDestinationAfter(code) {
			return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, resourceBetween)(code) : resourceEnd(code);
		}
		function resourceDestinationMissing(code) {
			return nok(code);
		}
		function resourceBetween(code) {
			if (code === 34 || code === 39 || code === 40) return factoryTitle(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
			return resourceEnd(code);
		}
		function resourceTitleAfter(code) {
			return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, resourceEnd)(code) : resourceEnd(code);
		}
		function resourceEnd(code) {
			if (code === 41) {
				effects.enter("resourceMarker");
				effects.consume(code);
				effects.exit("resourceMarker");
				effects.exit("resource");
				return ok;
			}
			return nok(code);
		}
	}
	function tokenizeReferenceFull(effects, ok, nok) {
		const self = this;
		return referenceFull;
		function referenceFull(code) {
			return factoryLabel.call(self, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code);
		}
		function referenceFullAfter(code) {
			return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
		}
		function referenceFullMissing(code) {
			return nok(code);
		}
	}
	function tokenizeReferenceCollapsed(effects, ok, nok) {
		return referenceCollapsedStart;
		function referenceCollapsedStart(code) {
			effects.enter("reference");
			effects.enter("referenceMarker");
			effects.consume(code);
			effects.exit("referenceMarker");
			return referenceCollapsedOpen;
		}
		function referenceCollapsedOpen(code) {
			if (code === 93) {
				effects.enter("referenceMarker");
				effects.consume(code);
				effects.exit("referenceMarker");
				effects.exit("reference");
				return ok;
			}
			return nok(code);
		}
	}
	var labelStartImage = {
		name: "labelStartImage",
		resolveAll: labelEnd.resolveAll,
		tokenize: tokenizeLabelStartImage
	};
	function tokenizeLabelStartImage(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			effects.enter("labelImage");
			effects.enter("labelImageMarker");
			effects.consume(code);
			effects.exit("labelImageMarker");
			return open;
		}
		function open(code) {
			if (code === 91) {
				effects.enter("labelMarker");
				effects.consume(code);
				effects.exit("labelMarker");
				effects.exit("labelImage");
				return after;
			}
			return nok(code);
		}
		function after(code) {
			return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
		}
	}
	var labelStartLink = {
		name: "labelStartLink",
		resolveAll: labelEnd.resolveAll,
		tokenize: tokenizeLabelStartLink
	};
	function tokenizeLabelStartLink(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			effects.enter("labelLink");
			effects.enter("labelMarker");
			effects.consume(code);
			effects.exit("labelMarker");
			effects.exit("labelLink");
			return after;
		}
		function after(code) {
			return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
		}
	}
	var lineEnding = {
		name: "lineEnding",
		tokenize: tokenizeLineEnding
	};
	function tokenizeLineEnding(effects, ok) {
		return start;
		function start(code) {
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return factorySpace(effects, ok, "linePrefix");
		}
	}
	var thematicBreak$2 = {
		name: "thematicBreak",
		tokenize: tokenizeThematicBreak
	};
	function tokenizeThematicBreak(effects, ok, nok) {
		let size = 0;
		let marker;
		return start;
		function start(code) {
			effects.enter("thematicBreak");
			return before(code);
		}
		function before(code) {
			marker = code;
			return atBreak(code);
		}
		function atBreak(code) {
			if (code === marker) {
				effects.enter("thematicBreakSequence");
				return sequence(code);
			}
			if (size >= 3 && (code === null || markdownLineEnding(code))) {
				effects.exit("thematicBreak");
				return ok(code);
			}
			return nok(code);
		}
		function sequence(code) {
			if (code === marker) {
				effects.consume(code);
				size++;
				return sequence;
			}
			effects.exit("thematicBreakSequence");
			return markdownSpace(code) ? factorySpace(effects, atBreak, "whitespace")(code) : atBreak(code);
		}
	}
	var list$3 = {
		continuation: { tokenize: tokenizeListContinuation },
		exit: tokenizeListEnd,
		name: "list",
		tokenize: tokenizeListStart
	};
	var listItemPrefixWhitespaceConstruct = {
		partial: true,
		tokenize: tokenizeListItemPrefixWhitespace
	};
	var indentConstruct = {
		partial: true,
		tokenize: tokenizeIndent$1
	};
	function tokenizeListStart(effects, ok, nok) {
		const self = this;
		const tail = self.events[self.events.length - 1];
		let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
		let size = 0;
		return start;
		function start(code) {
			const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
			if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
				if (!self.containerState.type) {
					self.containerState.type = kind;
					effects.enter(kind, { _container: true });
				}
				if (kind === "listUnordered") {
					effects.enter("listItemPrefix");
					return code === 42 || code === 45 ? effects.check(thematicBreak$2, nok, atMarker)(code) : atMarker(code);
				}
				if (!self.interrupt || code === 49) {
					effects.enter("listItemPrefix");
					effects.enter("listItemValue");
					return inside(code);
				}
			}
			return nok(code);
		}
		function inside(code) {
			if (asciiDigit(code) && ++size < 10) {
				effects.consume(code);
				return inside;
			}
			if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
				effects.exit("listItemValue");
				return atMarker(code);
			}
			return nok(code);
		}
		function atMarker(code) {
			effects.enter("listItemMarker");
			effects.consume(code);
			effects.exit("listItemMarker");
			self.containerState.marker = self.containerState.marker || code;
			return effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
		}
		function onBlank(code) {
			self.containerState.initialBlankLine = true;
			initialSize++;
			return endOfPrefix(code);
		}
		function otherPrefix(code) {
			if (markdownSpace(code)) {
				effects.enter("listItemPrefixWhitespace");
				effects.consume(code);
				effects.exit("listItemPrefixWhitespace");
				return endOfPrefix;
			}
			return nok(code);
		}
		function endOfPrefix(code) {
			self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
			return ok(code);
		}
	}
	function tokenizeListContinuation(effects, ok, nok) {
		const self = this;
		self.containerState._closeFlow = void 0;
		return effects.check(blankLine, onBlank, notBlank);
		function onBlank(code) {
			self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
			return factorySpace(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
		}
		function notBlank(code) {
			if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
				self.containerState.furtherBlankLines = void 0;
				self.containerState.initialBlankLine = void 0;
				return notInCurrentItem(code);
			}
			self.containerState.furtherBlankLines = void 0;
			self.containerState.initialBlankLine = void 0;
			return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
		}
		function notInCurrentItem(code) {
			self.containerState._closeFlow = true;
			self.interrupt = void 0;
			return factorySpace(effects, effects.attempt(list$3, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code);
		}
	}
	function tokenizeIndent$1(effects, ok, nok) {
		const self = this;
		return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
		}
	}
	function tokenizeListEnd(effects) {
		effects.exit(this.containerState.type);
	}
	function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
		const self = this;
		return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return !markdownSpace(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
		}
	}
	var setextUnderline = {
		name: "setextUnderline",
		resolveTo: resolveToSetextUnderline,
		tokenize: tokenizeSetextUnderline
	};
	function resolveToSetextUnderline(events, context) {
		let index = events.length;
		let content;
		let text;
		let definition;
		while (index--) if (events[index][0] === "enter") {
			if (events[index][1].type === "content") {
				content = index;
				break;
			}
			if (events[index][1].type === "paragraph") text = index;
		} else {
			if (events[index][1].type === "content") events.splice(index, 1);
			if (!definition && events[index][1].type === "definition") definition = index;
		}
		const heading = {
			type: "setextHeading",
			start: { ...events[content][1].start },
			end: { ...events[events.length - 1][1].end }
		};
		events[text][1].type = "setextHeadingText";
		if (definition) {
			events.splice(text, 0, [
				"enter",
				heading,
				context
			]);
			events.splice(definition + 1, 0, [
				"exit",
				events[content][1],
				context
			]);
			events[content][1].end = { ...events[definition][1].end };
		} else events[content][1] = heading;
		events.push([
			"exit",
			heading,
			context
		]);
		return events;
	}
	function tokenizeSetextUnderline(effects, ok, nok) {
		const self = this;
		let marker;
		return start;
		function start(code) {
			let index = self.events.length;
			let paragraph;
			while (index--) if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
				paragraph = self.events[index][1].type === "paragraph";
				break;
			}
			if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
				effects.enter("setextHeadingLine");
				marker = code;
				return before(code);
			}
			return nok(code);
		}
		function before(code) {
			effects.enter("setextHeadingLineSequence");
			return inside(code);
		}
		function inside(code) {
			if (code === marker) {
				effects.consume(code);
				return inside;
			}
			effects.exit("setextHeadingLineSequence");
			return markdownSpace(code) ? factorySpace(effects, after, "lineSuffix")(code) : after(code);
		}
		function after(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("setextHeadingLine");
				return ok(code);
			}
			return nok(code);
		}
	}
	var flow$1 = { tokenize: initializeFlow };
	function initializeFlow(effects) {
		const self = this;
		const initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix")));
		return initial;
		function atBlankEnding(code) {
			if (code === null) {
				effects.consume(code);
				return;
			}
			effects.enter("lineEndingBlank");
			effects.consume(code);
			effects.exit("lineEndingBlank");
			self.currentConstruct = void 0;
			return initial;
		}
		function afterConstruct(code) {
			if (code === null) {
				effects.consume(code);
				return;
			}
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			self.currentConstruct = void 0;
			return initial;
		}
	}
	var resolver = { resolveAll: createResolver() };
	var string$1 = initializeFactory("string");
	var text$4 = initializeFactory("text");
	function initializeFactory(field) {
		return {
			resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0),
			tokenize: initializeText
		};
		function initializeText(effects) {
			const self = this;
			const constructs = this.parser.constructs[field];
			const text = effects.attempt(constructs, start, notText);
			return start;
			function start(code) {
				return atBreak(code) ? text(code) : notText(code);
			}
			function notText(code) {
				if (code === null) {
					effects.consume(code);
					return;
				}
				effects.enter("data");
				effects.consume(code);
				return data;
			}
			function data(code) {
				if (atBreak(code)) {
					effects.exit("data");
					return text(code);
				}
				effects.consume(code);
				return data;
			}
			function atBreak(code) {
				if (code === null) return true;
				const list = constructs[code];
				let index = -1;
				if (list) while (++index < list.length) {
					const item = list[index];
					if (!item.previous || item.previous.call(self, self.previous)) return true;
				}
				return false;
			}
		}
	}
	function createResolver(extraResolver) {
		return resolveAllText;
		function resolveAllText(events, context) {
			let index = -1;
			let enter;
			while (++index <= events.length) if (enter === void 0) {
				if (events[index] && events[index][1].type === "data") {
					enter = index;
					index++;
				}
			} else if (!events[index] || events[index][1].type !== "data") {
				if (index !== enter + 2) {
					events[enter][1].end = events[index - 1][1].end;
					events.splice(enter + 2, index - enter - 2);
					index = enter + 2;
				}
				enter = void 0;
			}
			return extraResolver ? extraResolver(events, context) : events;
		}
	}
	function resolveAllLineSuffixes(events, context) {
		let eventIndex = 0;
		while (++eventIndex <= events.length) if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
			const data = events[eventIndex - 1][1];
			const chunks = context.sliceStream(data);
			let index = chunks.length;
			let bufferIndex = -1;
			let size = 0;
			let tabs;
			while (index--) {
				const chunk = chunks[index];
				if (typeof chunk === "string") {
					bufferIndex = chunk.length;
					while (chunk.charCodeAt(bufferIndex - 1) === 32) {
						size++;
						bufferIndex--;
					}
					if (bufferIndex) break;
					bufferIndex = -1;
				} else if (chunk === -2) {
					tabs = true;
					size++;
				} else if (chunk === -1) {} else {
					index++;
					break;
				}
			}
			if (context._contentTypeTextTrailing && eventIndex === events.length) size = 0;
			if (size) {
				const token = {
					type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
					start: {
						_bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex,
						_index: data.start._index + index,
						line: data.end.line,
						column: data.end.column - size,
						offset: data.end.offset - size
					},
					end: { ...data.end }
				};
				data.end = { ...token.start };
				if (data.start.offset === data.end.offset) Object.assign(data, token);
				else {
					events.splice(eventIndex, 0, [
						"enter",
						token,
						context
					], [
						"exit",
						token,
						context
					]);
					eventIndex += 2;
				}
			}
			eventIndex++;
		}
		return events;
	}
	var constructs_exports = __exportAll({
		attentionMarkers: () => attentionMarkers,
		contentInitial: () => contentInitial,
		disable: () => disable,
		document: () => document$1,
		flow: () => flow,
		flowInitial: () => flowInitial,
		insideSpan: () => insideSpan,
		string: () => string,
		text: () => text$3
	});
	var document$1 = {
		[42]: list$3,
		[43]: list$3,
		[45]: list$3,
		[48]: list$3,
		[49]: list$3,
		[50]: list$3,
		[51]: list$3,
		[52]: list$3,
		[53]: list$3,
		[54]: list$3,
		[55]: list$3,
		[56]: list$3,
		[57]: list$3,
		[62]: blockQuote
	};
	var contentInitial = { [91]: definition$1 };
	var flowInitial = {
		[-2]: codeIndented,
		[-1]: codeIndented,
		[32]: codeIndented
	};
	var flow = {
		[35]: headingAtx,
		[42]: thematicBreak$2,
		[45]: [setextUnderline, thematicBreak$2],
		[60]: htmlFlow,
		[61]: setextUnderline,
		[95]: thematicBreak$2,
		[96]: codeFenced,
		[126]: codeFenced
	};
	var string = {
		[38]: characterReference,
		[92]: characterEscape
	};
	var text$3 = {
		[-5]: lineEnding,
		[-4]: lineEnding,
		[-3]: lineEnding,
		[33]: labelStartImage,
		[38]: characterReference,
		[42]: attention,
		[60]: [autolink, htmlText],
		[91]: labelStartLink,
		[92]: [hardBreakEscape, characterEscape],
		[93]: labelEnd,
		[95]: attention,
		[96]: codeText
	};
	var insideSpan = { null: [attention, resolver] };
	var attentionMarkers = { null: [42, 95] };
	var disable = { null: [] };
	function createTokenizer(parser, initialize, from) {
		let point = {
			_bufferIndex: -1,
			_index: 0,
			line: from && from.line || 1,
			column: from && from.column || 1,
			offset: from && from.offset || 0
		};
		const columnStart = {};
		const resolveAllConstructs = [];
		let chunks = [];
		let stack = [];
		const effects = {
			attempt: constructFactory(onsuccessfulconstruct),
			check: constructFactory(onsuccessfulcheck),
			consume,
			enter,
			exit,
			interrupt: constructFactory(onsuccessfulcheck, { interrupt: true })
		};
		const context = {
			code: null,
			containerState: {},
			defineSkip,
			events: [],
			now,
			parser,
			previous: null,
			sliceSerialize,
			sliceStream,
			write
		};
		let state = initialize.tokenize.call(context, effects);
		if (initialize.resolveAll) resolveAllConstructs.push(initialize);
		return context;
		function write(slice) {
			chunks = push(chunks, slice);
			main();
			if (chunks[chunks.length - 1] !== null) return [];
			addResult(initialize, 0);
			context.events = resolveAll(resolveAllConstructs, context.events, context);
			return context.events;
		}
		function sliceSerialize(token, expandTabs) {
			return serializeChunks(sliceStream(token), expandTabs);
		}
		function sliceStream(token) {
			return sliceChunks(chunks, token);
		}
		function now() {
			const { _bufferIndex, _index, line, column, offset } = point;
			return {
				_bufferIndex,
				_index,
				line,
				column,
				offset
			};
		}
		function defineSkip(value) {
			columnStart[value.line] = value.column;
			accountForPotentialSkip();
		}
		function main() {
			let chunkIndex;
			while (point._index < chunks.length) {
				const chunk = chunks[point._index];
				if (typeof chunk === "string") {
					chunkIndex = point._index;
					if (point._bufferIndex < 0) point._bufferIndex = 0;
					while (point._index === chunkIndex && point._bufferIndex < chunk.length) go(chunk.charCodeAt(point._bufferIndex));
				} else go(chunk);
			}
		}
		function go(code) {
			state = state(code);
		}
		function consume(code) {
			if (markdownLineEnding(code)) {
				point.line++;
				point.column = 1;
				point.offset += code === -3 ? 2 : 1;
				accountForPotentialSkip();
			} else if (code !== -1) {
				point.column++;
				point.offset++;
			}
			if (point._bufferIndex < 0) point._index++;
			else {
				point._bufferIndex++;
				if (point._bufferIndex === chunks[point._index].length) {
					point._bufferIndex = -1;
					point._index++;
				}
			}
			context.previous = code;
		}
		function enter(type, fields) {
			const token = fields || {};
			token.type = type;
			token.start = now();
			context.events.push([
				"enter",
				token,
				context
			]);
			stack.push(token);
			return token;
		}
		function exit(type) {
			const token = stack.pop();
			token.end = now();
			context.events.push([
				"exit",
				token,
				context
			]);
			return token;
		}
		function onsuccessfulconstruct(construct, info) {
			addResult(construct, info.from);
		}
		function onsuccessfulcheck(_, info) {
			info.restore();
		}
		function constructFactory(onreturn, fields) {
			return hook;
			function hook(constructs, returnState, bogusState) {
				let listOfConstructs;
				let constructIndex;
				let currentConstruct;
				let info;
				return Array.isArray(constructs) ? handleListOfConstructs(constructs) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
				function handleMapOfConstructs(map) {
					return start;
					function start(code) {
						const left = code !== null && map[code];
						const all = code !== null && map.null;
						return handleListOfConstructs([...Array.isArray(left) ? left : left ? [left] : [], ...Array.isArray(all) ? all : all ? [all] : []])(code);
					}
				}
				function handleListOfConstructs(list) {
					listOfConstructs = list;
					constructIndex = 0;
					if (list.length === 0) return bogusState;
					return handleConstruct(list[constructIndex]);
				}
				function handleConstruct(construct) {
					return start;
					function start(code) {
						info = store();
						currentConstruct = construct;
						if (!construct.partial) context.currentConstruct = construct;
						if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) return nok(code);
						return construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
					}
				}
				function ok(code) {
					onreturn(currentConstruct, info);
					return returnState;
				}
				function nok(code) {
					info.restore();
					if (++constructIndex < listOfConstructs.length) return handleConstruct(listOfConstructs[constructIndex]);
					return bogusState;
				}
			}
		}
		function addResult(construct, from) {
			if (construct.resolveAll && !resolveAllConstructs.includes(construct)) resolveAllConstructs.push(construct);
			if (construct.resolve) splice(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
			if (construct.resolveTo) context.events = construct.resolveTo(context.events, context);
		}
		function store() {
			const startPoint = now();
			const startPrevious = context.previous;
			const startCurrentConstruct = context.currentConstruct;
			const startEventsIndex = context.events.length;
			const startStack = Array.from(stack);
			return {
				from: startEventsIndex,
				restore
			};
			function restore() {
				point = startPoint;
				context.previous = startPrevious;
				context.currentConstruct = startCurrentConstruct;
				context.events.length = startEventsIndex;
				stack = startStack;
				accountForPotentialSkip();
			}
		}
		function accountForPotentialSkip() {
			if (point.line in columnStart && point.column < 2) {
				point.column = columnStart[point.line];
				point.offset += columnStart[point.line] - 1;
			}
		}
	}
	function sliceChunks(chunks, token) {
		const startIndex = token.start._index;
		const startBufferIndex = token.start._bufferIndex;
		const endIndex = token.end._index;
		const endBufferIndex = token.end._bufferIndex;
		let view;
		if (startIndex === endIndex) view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
		else {
			view = chunks.slice(startIndex, endIndex);
			if (startBufferIndex > -1) {
				const head = view[0];
				if (typeof head === "string") view[0] = head.slice(startBufferIndex);
				else view.shift();
			}
			if (endBufferIndex > 0) view.push(chunks[endIndex].slice(0, endBufferIndex));
		}
		return view;
	}
	function serializeChunks(chunks, expandTabs) {
		let index = -1;
		const result = [];
		let atTab;
		while (++index < chunks.length) {
			const chunk = chunks[index];
			let value;
			if (typeof chunk === "string") value = chunk;
			else switch (chunk) {
				case -5:
					value = "\r";
					break;
				case -4:
					value = "\n";
					break;
				case -3:
					value = "\r\n";
					break;
				case -2:
					value = expandTabs ? " " : "	";
					break;
				case -1:
					if (!expandTabs && atTab) continue;
					value = " ";
					break;
				default: value = String.fromCharCode(chunk);
			}
			atTab = chunk === -2;
			result.push(value);
		}
		return result.join("");
	}
	function parse(options) {
		const parser = {
			constructs: combineExtensions([constructs_exports, ...(options || {}).extensions || []]),
			content: create(content$1),
			defined: [],
			document: create(document$2),
			flow: create(flow$1),
			lazy: {},
			string: create(string$1),
			text: create(text$4)
		};
		return parser;
		function create(initial) {
			return creator;
			function creator(from) {
				return createTokenizer(parser, initial, from);
			}
		}
	}
	function postprocess(events) {
		while (!subtokenize(events));
		return events;
	}
	var search = /[\0\t\n\r]/g;
	function preprocess() {
		let column = 1;
		let buffer = "";
		let start = true;
		let atCarriageReturn;
		return preprocessor;
		function preprocessor(value, encoding, end) {
			const chunks = [];
			let match;
			let next;
			let startPosition;
			let endPosition;
			let code;
			value = buffer + (typeof value === "string" ? value.toString() : new TextDecoder(encoding || void 0).decode(value));
			startPosition = 0;
			buffer = "";
			if (start) {
				if (value.charCodeAt(0) === 65279) startPosition++;
				start = void 0;
			}
			while (startPosition < value.length) {
				search.lastIndex = startPosition;
				match = search.exec(value);
				endPosition = match && match.index !== void 0 ? match.index : value.length;
				code = value.charCodeAt(endPosition);
				if (!match) {
					buffer = value.slice(startPosition);
					break;
				}
				if (code === 10 && startPosition === endPosition && atCarriageReturn) {
					chunks.push(-3);
					atCarriageReturn = void 0;
				} else {
					if (atCarriageReturn) {
						chunks.push(-5);
						atCarriageReturn = void 0;
					}
					if (startPosition < endPosition) {
						chunks.push(value.slice(startPosition, endPosition));
						column += endPosition - startPosition;
					}
					switch (code) {
						case 0:
							chunks.push(65533);
							column++;
							break;
						case 9:
							next = Math.ceil(column / 4) * 4;
							chunks.push(-2);
							while (column++ < next) chunks.push(-1);
							break;
						case 10:
							chunks.push(-4);
							column = 1;
							break;
						default:
							atCarriageReturn = true;
							column = 1;
					}
				}
				startPosition = endPosition + 1;
			}
			if (end) {
				if (atCarriageReturn) chunks.push(-5);
				if (buffer) chunks.push(buffer);
				chunks.push(null);
			}
			return chunks;
		}
	}
	var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
	function decodeString(value) {
		return value.replace(characterEscapeOrReference, decode);
	}
	function decode($0, $1, $2) {
		if ($1) return $1;
		if ($2.charCodeAt(0) === 35) {
			const head = $2.charCodeAt(1);
			const hex = head === 120 || head === 88;
			return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
		}
		return decodeNamedCharacterReference($2) || $0;
	}
	function stringifyPosition(value) {
		if (!value || typeof value !== "object") return "";
		if ("position" in value || "type" in value) return position(value.position);
		if ("start" in value || "end" in value) return position(value);
		if ("line" in value || "column" in value) return point$1(value);
		return "";
	}
	function point$1(point) {
		return index(point && point.line) + ":" + index(point && point.column);
	}
	function position(pos) {
		return point$1(pos && pos.start) + "-" + point$1(pos && pos.end);
	}
	function index(value) {
		return value && typeof value === "number" ? value : 1;
	}
	var own$2 = {}.hasOwnProperty;
	function fromMarkdown$1(value, encoding, options) {
		if (encoding && typeof encoding === "object") {
			options = encoding;
			encoding = void 0;
		}
		return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
	}
	function compiler(options) {
		const config = {
			transforms: [],
			canContainEols: [
				"emphasis",
				"fragment",
				"heading",
				"paragraph",
				"strong"
			],
			enter: {
				autolink: opener(link),
				autolinkProtocol: onenterdata,
				autolinkEmail: onenterdata,
				atxHeading: opener(heading),
				blockQuote: opener(blockQuote),
				characterEscape: onenterdata,
				characterReference: onenterdata,
				codeFenced: opener(codeFlow),
				codeFencedFenceInfo: buffer,
				codeFencedFenceMeta: buffer,
				codeIndented: opener(codeFlow, buffer),
				codeText: opener(codeText, buffer),
				codeTextData: onenterdata,
				data: onenterdata,
				codeFlowValue: onenterdata,
				definition: opener(definition),
				definitionDestinationString: buffer,
				definitionLabelString: buffer,
				definitionTitleString: buffer,
				emphasis: opener(emphasis),
				hardBreakEscape: opener(hardBreak),
				hardBreakTrailing: opener(hardBreak),
				htmlFlow: opener(html, buffer),
				htmlFlowData: onenterdata,
				htmlText: opener(html, buffer),
				htmlTextData: onenterdata,
				image: opener(image),
				label: buffer,
				link: opener(link),
				listItem: opener(listItem),
				listItemValue: onenterlistitemvalue,
				listOrdered: opener(list, onenterlistordered),
				listUnordered: opener(list),
				paragraph: opener(paragraph),
				reference: onenterreference,
				referenceString: buffer,
				resourceDestinationString: buffer,
				resourceTitleString: buffer,
				setextHeading: opener(heading),
				strong: opener(strong),
				thematicBreak: opener(thematicBreak)
			},
			exit: {
				atxHeading: closer(),
				atxHeadingSequence: onexitatxheadingsequence,
				autolink: closer(),
				autolinkEmail: onexitautolinkemail,
				autolinkProtocol: onexitautolinkprotocol,
				blockQuote: closer(),
				characterEscapeValue: onexitdata,
				characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
				characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
				characterReferenceValue: onexitcharacterreferencevalue,
				characterReference: onexitcharacterreference,
				codeFenced: closer(onexitcodefenced),
				codeFencedFence: onexitcodefencedfence,
				codeFencedFenceInfo: onexitcodefencedfenceinfo,
				codeFencedFenceMeta: onexitcodefencedfencemeta,
				codeFlowValue: onexitdata,
				codeIndented: closer(onexitcodeindented),
				codeText: closer(onexitcodetext),
				codeTextData: onexitdata,
				data: onexitdata,
				definition: closer(),
				definitionDestinationString: onexitdefinitiondestinationstring,
				definitionLabelString: onexitdefinitionlabelstring,
				definitionTitleString: onexitdefinitiontitlestring,
				emphasis: closer(),
				hardBreakEscape: closer(onexithardbreak),
				hardBreakTrailing: closer(onexithardbreak),
				htmlFlow: closer(onexithtmlflow),
				htmlFlowData: onexitdata,
				htmlText: closer(onexithtmltext),
				htmlTextData: onexitdata,
				image: closer(onexitimage),
				label: onexitlabel,
				labelText: onexitlabeltext,
				lineEnding: onexitlineending,
				link: closer(onexitlink),
				listItem: closer(),
				listOrdered: closer(),
				listUnordered: closer(),
				paragraph: closer(),
				referenceString: onexitreferencestring,
				resourceDestinationString: onexitresourcedestinationstring,
				resourceTitleString: onexitresourcetitlestring,
				resource: onexitresource,
				setextHeading: closer(onexitsetextheading),
				setextHeadingLineSequence: onexitsetextheadinglinesequence,
				setextHeadingText: onexitsetextheadingtext,
				strong: closer(),
				thematicBreak: closer()
			}
		};
		configure$1(config, (options || {}).mdastExtensions || []);
		const data = {};
		return compile;
		function compile(events) {
			let tree = {
				type: "root",
				children: []
			};
			const context = {
				stack: [tree],
				tokenStack: [],
				config,
				enter,
				exit,
				buffer,
				resume,
				data
			};
			const listStack = [];
			let index = -1;
			while (++index < events.length) if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
				if (events[index][0] === "enter") listStack.push(index);
				else index = prepareList(events, listStack.pop(), index);
			}
			index = -1;
			while (++index < events.length) {
				const handler = config[events[index][0]];
				if (own$2.call(handler, events[index][1].type)) handler[events[index][1].type].call(Object.assign({ sliceSerialize: events[index][2].sliceSerialize }, context), events[index][1]);
			}
			if (context.tokenStack.length > 0) {
				const tail = context.tokenStack[context.tokenStack.length - 1];
				(tail[1] || defaultOnError).call(context, void 0, tail[0]);
			}
			tree.position = {
				start: point(events.length > 0 ? events[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: point(events.length > 0 ? events[events.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			};
			index = -1;
			while (++index < config.transforms.length) tree = config.transforms[index](tree) || tree;
			return tree;
		}
		function prepareList(events, start, length) {
			let index = start - 1;
			let containerBalance = -1;
			let listSpread = false;
			let listItem;
			let lineIndex;
			let firstBlankLineIndex;
			let atMarker;
			while (++index <= length) {
				const event = events[index];
				switch (event[1].type) {
					case "listUnordered":
					case "listOrdered":
					case "blockQuote":
						if (event[0] === "enter") containerBalance++;
						else containerBalance--;
						atMarker = void 0;
						break;
					case "lineEndingBlank":
						if (event[0] === "enter") {
							if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) firstBlankLineIndex = index;
							atMarker = void 0;
						}
						break;
					case "linePrefix":
					case "listItemValue":
					case "listItemMarker":
					case "listItemPrefix":
					case "listItemPrefixWhitespace": break;
					default: atMarker = void 0;
				}
				if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
					if (listItem) {
						let tailIndex = index;
						lineIndex = void 0;
						while (tailIndex--) {
							const tailEvent = events[tailIndex];
							if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
								if (tailEvent[0] === "exit") continue;
								if (lineIndex) {
									events[lineIndex][1].type = "lineEndingBlank";
									listSpread = true;
								}
								tailEvent[1].type = "lineEnding";
								lineIndex = tailIndex;
							} else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {} else break;
						}
						if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) listItem._spread = true;
						listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
						events.splice(lineIndex || index, 0, [
							"exit",
							listItem,
							event[2]
						]);
						index++;
						length++;
					}
					if (event[1].type === "listItemPrefix") {
						const item = {
							type: "listItem",
							_spread: false,
							start: Object.assign({}, event[1].start),
							end: void 0
						};
						listItem = item;
						events.splice(index, 0, [
							"enter",
							item,
							event[2]
						]);
						index++;
						length++;
						firstBlankLineIndex = void 0;
						atMarker = true;
					}
				}
			}
			events[start][1]._spread = listSpread;
			return length;
		}
		function opener(create, and) {
			return open;
			function open(token) {
				enter.call(this, create(token), token);
				if (and) and.call(this, token);
			}
		}
		function buffer() {
			this.stack.push({
				type: "fragment",
				children: []
			});
		}
		function enter(node, token, errorHandler) {
			this.stack[this.stack.length - 1].children.push(node);
			this.stack.push(node);
			this.tokenStack.push([token, errorHandler || void 0]);
			node.position = {
				start: point(token.start),
				end: void 0
			};
		}
		function closer(and) {
			return close;
			function close(token) {
				if (and) and.call(this, token);
				exit.call(this, token);
			}
		}
		function exit(token, onExitError) {
			const node = this.stack.pop();
			const open = this.tokenStack.pop();
			if (!open) throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
				start: token.start,
				end: token.end
			}) + "): it’s not open");
			else if (open[0].type !== token.type) {
				if (onExitError) onExitError.call(this, token, open[0]);
				else (open[1] || defaultOnError).call(this, token, open[0]);
			}
			node.position.end = point(token.end);
		}
		function resume() {
			return toString(this.stack.pop());
		}
		function onenterlistordered() {
			this.data.expectingFirstListItemValue = true;
		}
		function onenterlistitemvalue(token) {
			if (this.data.expectingFirstListItemValue) {
				const ancestor = this.stack[this.stack.length - 2];
				ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
				this.data.expectingFirstListItemValue = void 0;
			}
		}
		function onexitcodefencedfenceinfo() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.lang = data;
		}
		function onexitcodefencedfencemeta() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.meta = data;
		}
		function onexitcodefencedfence() {
			if (this.data.flowCodeInside) return;
			this.buffer();
			this.data.flowCodeInside = true;
		}
		function onexitcodefenced() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
			this.data.flowCodeInside = void 0;
		}
		function onexitcodeindented() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data.replace(/(\r?\n|\r)$/g, "");
		}
		function onexitdefinitionlabelstring(token) {
			const label = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.label = label;
			node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
		}
		function onexitdefinitiontitlestring() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.title = data;
		}
		function onexitdefinitiondestinationstring() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.url = data;
		}
		function onexitatxheadingsequence(token) {
			const node = this.stack[this.stack.length - 1];
			if (!node.depth) node.depth = this.sliceSerialize(token).length;
		}
		function onexitsetextheadingtext() {
			this.data.setextHeadingSlurpLineEnding = true;
		}
		function onexitsetextheadinglinesequence(token) {
			const node = this.stack[this.stack.length - 1];
			node.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
		}
		function onexitsetextheading() {
			this.data.setextHeadingSlurpLineEnding = void 0;
		}
		function onenterdata(token) {
			const siblings = this.stack[this.stack.length - 1].children;
			let tail = siblings[siblings.length - 1];
			if (!tail || tail.type !== "text") {
				tail = text();
				tail.position = {
					start: point(token.start),
					end: void 0
				};
				siblings.push(tail);
			}
			this.stack.push(tail);
		}
		function onexitdata(token) {
			const tail = this.stack.pop();
			tail.value += this.sliceSerialize(token);
			tail.position.end = point(token.end);
		}
		function onexitlineending(token) {
			const context = this.stack[this.stack.length - 1];
			if (this.data.atHardBreak) {
				const tail = context.children[context.children.length - 1];
				tail.position.end = point(token.end);
				this.data.atHardBreak = void 0;
				return;
			}
			if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
				onenterdata.call(this, token);
				onexitdata.call(this, token);
			}
		}
		function onexithardbreak() {
			this.data.atHardBreak = true;
		}
		function onexithtmlflow() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data;
		}
		function onexithtmltext() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data;
		}
		function onexitcodetext() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data;
		}
		function onexitlink() {
			const node = this.stack[this.stack.length - 1];
			if (this.data.inReference) {
				const referenceType = this.data.referenceType || "shortcut";
				node.type += "Reference";
				node.referenceType = referenceType;
				delete node.url;
				delete node.title;
			} else {
				delete node.identifier;
				delete node.label;
			}
			this.data.referenceType = void 0;
		}
		function onexitimage() {
			const node = this.stack[this.stack.length - 1];
			if (this.data.inReference) {
				const referenceType = this.data.referenceType || "shortcut";
				node.type += "Reference";
				node.referenceType = referenceType;
				delete node.url;
				delete node.title;
			} else {
				delete node.identifier;
				delete node.label;
			}
			this.data.referenceType = void 0;
		}
		function onexitlabeltext(token) {
			const string = this.sliceSerialize(token);
			const ancestor = this.stack[this.stack.length - 2];
			ancestor.label = decodeString(string);
			ancestor.identifier = normalizeIdentifier(string).toLowerCase();
		}
		function onexitlabel() {
			const fragment = this.stack[this.stack.length - 1];
			const value = this.resume();
			const node = this.stack[this.stack.length - 1];
			this.data.inReference = true;
			if (node.type === "link") node.children = fragment.children;
			else node.alt = value;
		}
		function onexitresourcedestinationstring() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.url = data;
		}
		function onexitresourcetitlestring() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.title = data;
		}
		function onexitresource() {
			this.data.inReference = void 0;
		}
		function onenterreference() {
			this.data.referenceType = "collapsed";
		}
		function onexitreferencestring(token) {
			const label = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.label = label;
			node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
			this.data.referenceType = "full";
		}
		function onexitcharacterreferencemarker(token) {
			this.data.characterReferenceType = token.type;
		}
		function onexitcharacterreferencevalue(token) {
			const data = this.sliceSerialize(token);
			const type = this.data.characterReferenceType;
			let value;
			if (type) {
				value = decodeNumericCharacterReference(data, type === "characterReferenceMarkerNumeric" ? 10 : 16);
				this.data.characterReferenceType = void 0;
			} else value = decodeNamedCharacterReference(data);
			const tail = this.stack[this.stack.length - 1];
			tail.value += value;
		}
		function onexitcharacterreference(token) {
			const tail = this.stack.pop();
			tail.position.end = point(token.end);
		}
		function onexitautolinkprotocol(token) {
			onexitdata.call(this, token);
			const node = this.stack[this.stack.length - 1];
			node.url = this.sliceSerialize(token);
		}
		function onexitautolinkemail(token) {
			onexitdata.call(this, token);
			const node = this.stack[this.stack.length - 1];
			node.url = "mailto:" + this.sliceSerialize(token);
		}
		function blockQuote() {
			return {
				type: "blockquote",
				children: []
			};
		}
		function codeFlow() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			};
		}
		function codeText() {
			return {
				type: "inlineCode",
				value: ""
			};
		}
		function definition() {
			return {
				type: "definition",
				identifier: "",
				label: null,
				title: null,
				url: ""
			};
		}
		function emphasis() {
			return {
				type: "emphasis",
				children: []
			};
		}
		function heading() {
			return {
				type: "heading",
				depth: 0,
				children: []
			};
		}
		function hardBreak() {
			return { type: "break" };
		}
		function html() {
			return {
				type: "html",
				value: ""
			};
		}
		function image() {
			return {
				type: "image",
				title: null,
				url: "",
				alt: null
			};
		}
		function link() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			};
		}
		function list(token) {
			return {
				type: "list",
				ordered: token.type === "listOrdered",
				start: null,
				spread: token._spread,
				children: []
			};
		}
		function listItem(token) {
			return {
				type: "listItem",
				spread: token._spread,
				checked: null,
				children: []
			};
		}
		function paragraph() {
			return {
				type: "paragraph",
				children: []
			};
		}
		function strong() {
			return {
				type: "strong",
				children: []
			};
		}
		function text() {
			return {
				type: "text",
				value: ""
			};
		}
		function thematicBreak() {
			return { type: "thematicBreak" };
		}
	}
	function point(d) {
		return {
			line: d.line,
			column: d.column,
			offset: d.offset
		};
	}
	function configure$1(combined, extensions) {
		let index = -1;
		while (++index < extensions.length) {
			const value = extensions[index];
			if (Array.isArray(value)) configure$1(combined, value);
			else extension(combined, value);
		}
	}
	function extension(combined, extension) {
		let key;
		for (key in extension) if (own$2.call(extension, key)) switch (key) {
			case "canContainEols": {
				const right = extension[key];
				if (right) combined[key].push(...right);
				break;
			}
			case "transforms": {
				const right = extension[key];
				if (right) combined[key].push(...right);
				break;
			}
			case "enter":
			case "exit": {
				const right = extension[key];
				if (right) Object.assign(combined[key], right);
				break;
			}
		}
	}
	function defaultOnError(left, right) {
		if (left) throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
			start: left.start,
			end: left.end
		}) + "): a different token (`" + right.type + "`, " + stringifyPosition({
			start: right.start,
			end: right.end
		}) + ") is open");
		else throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
			start: right.start,
			end: right.end
		}) + ") is still open");
	}
	function escapeStringRegexp(string) {
		if (typeof string !== "string") throw new TypeError("Expected a string");
		return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
	}
	var convert = (function(test) {
		if (test === null || test === void 0) return ok;
		if (typeof test === "function") return castFactory(test);
		if (typeof test === "object") return Array.isArray(test) ? anyFactory(test) : propertiesFactory(test);
		if (typeof test === "string") return typeFactory(test);
		throw new Error("Expected function, string, or object as test");
	});
	function anyFactory(tests) {
		const checks = [];
		let index = -1;
		while (++index < tests.length) checks[index] = convert(tests[index]);
		return castFactory(any);
		function any(...parameters) {
			let index = -1;
			while (++index < checks.length) if (checks[index].apply(this, parameters)) return true;
			return false;
		}
	}
	function propertiesFactory(check) {
		const checkAsRecord = check;
		return castFactory(all);
		function all(node) {
			const nodeAsRecord = node;
			let key;
			for (key in check) if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
			return true;
		}
	}
	function typeFactory(check) {
		return castFactory(type);
		function type(node) {
			return node && node.type === check;
		}
	}
	function castFactory(testFunction) {
		return check;
		function check(value, index, parent) {
			return Boolean(looksLikeANode(value) && testFunction.call(this, value, typeof index === "number" ? index : void 0, parent || void 0));
		}
	}
	function ok() {
		return true;
	}
	function looksLikeANode(value) {
		return value !== null && typeof value === "object" && "type" in value;
	}
	function color(d) {
		return d;
	}
	var empty = [];
	function visitParents(tree, test, visitor, reverse) {
		let check;
		if (typeof test === "function" && typeof visitor !== "function") {
			reverse = visitor;
			visitor = test;
		} else check = test;
		const is = convert(check);
		const step = reverse ? -1 : 1;
		factory(tree, void 0, [])();
		function factory(node, index, parents) {
			const value = node && typeof node === "object" ? node : {};
			if (typeof value.type === "string") {
				const name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
				Object.defineProperty(visit, "name", { value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")" });
			}
			return visit;
			function visit() {
				let result = empty;
				let subresult;
				let offset;
				let grandparents;
				if (!test || is(node, index, parents[parents.length - 1] || void 0)) {
					result = toResult(visitor(node, parents));
					if (result[0] === false) return result;
				}
				if ("children" in node && node.children) {
					const nodeAsParent = node;
					if (nodeAsParent.children && result[0] !== "skip") {
						offset = (reverse ? nodeAsParent.children.length : -1) + step;
						grandparents = parents.concat(nodeAsParent);
						while (offset > -1 && offset < nodeAsParent.children.length) {
							const child = nodeAsParent.children[offset];
							subresult = factory(child, offset, grandparents)();
							if (subresult[0] === false) return subresult;
							offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
						}
					}
				}
				return result;
			}
		}
	}
	function toResult(value) {
		if (Array.isArray(value)) return value;
		if (typeof value === "number") return [true, value];
		return value === null || value === void 0 ? empty : [value];
	}
	function findAndReplace(tree, list, options) {
		const ignored = convert((options || {}).ignore || []);
		const pairs = toPairs(list);
		let pairIndex = -1;
		while (++pairIndex < pairs.length) visitParents(tree, "text", visitor);
		function visitor(node, parents) {
			let index = -1;
			let grandparent;
			while (++index < parents.length) {
				const parent = parents[index];
				const siblings = grandparent ? grandparent.children : void 0;
				if (ignored(parent, siblings ? siblings.indexOf(parent) : void 0, grandparent)) return;
				grandparent = parent;
			}
			if (grandparent) return handler(node, parents);
		}
		function handler(node, parents) {
			const parent = parents[parents.length - 1];
			const find = pairs[pairIndex][0];
			const replace = pairs[pairIndex][1];
			let start = 0;
			const index = parent.children.indexOf(node);
			let change = false;
			let nodes = [];
			find.lastIndex = 0;
			let match = find.exec(node.value);
			while (match) {
				const position = match.index;
				const matchObject = {
					index: match.index,
					input: match.input,
					stack: [...parents, node]
				};
				let value = replace(...match, matchObject);
				if (typeof value === "string") value = value.length > 0 ? {
					type: "text",
					value
				} : void 0;
				if (value === false) find.lastIndex = position + 1;
				else {
					if (start !== position) nodes.push({
						type: "text",
						value: node.value.slice(start, position)
					});
					if (Array.isArray(value)) nodes.push(...value);
					else if (value) nodes.push(value);
					start = position + match[0].length;
					change = true;
				}
				if (!find.global) break;
				match = find.exec(node.value);
			}
			if (change) {
				if (start < node.value.length) nodes.push({
					type: "text",
					value: node.value.slice(start)
				});
				parent.children.splice(index, 1, ...nodes);
			} else nodes = [node];
			return index + nodes.length;
		}
	}
	function toPairs(tupleOrList) {
		const result = [];
		if (!Array.isArray(tupleOrList)) throw new TypeError("Expected find and replace tuple or list of tuples");
		const list = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
		let index = -1;
		while (++index < list.length) {
			const tuple = list[index];
			result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
		}
		return result;
	}
	function toExpression(find) {
		return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
	}
	function toFunction(replace) {
		return typeof replace === "function" ? replace : function() {
			return replace;
		};
	}
	var inConstruct = "phrasing";
	var notInConstruct = [
		"autolink",
		"link",
		"image",
		"label"
	];
	function gfmAutolinkLiteralFromMarkdown() {
		return {
			transforms: [transformGfmAutolinkLiterals],
			enter: {
				literalAutolink: enterLiteralAutolink,
				literalAutolinkEmail: enterLiteralAutolinkValue,
				literalAutolinkHttp: enterLiteralAutolinkValue,
				literalAutolinkWww: enterLiteralAutolinkValue
			},
			exit: {
				literalAutolink: exitLiteralAutolink,
				literalAutolinkEmail: exitLiteralAutolinkEmail,
				literalAutolinkHttp: exitLiteralAutolinkHttp,
				literalAutolinkWww: exitLiteralAutolinkWww
			}
		};
	}
	function gfmAutolinkLiteralToMarkdown() {
		return { unsafe: [
			{
				character: "@",
				before: "[+\\-.\\w]",
				after: "[\\-.\\w]",
				inConstruct,
				notInConstruct
			},
			{
				character: ".",
				before: "[Ww]",
				after: "[\\-.\\w]",
				inConstruct,
				notInConstruct
			},
			{
				character: ":",
				before: "[ps]",
				after: "\\/",
				inConstruct,
				notInConstruct
			}
		] };
	}
	function enterLiteralAutolink(token) {
		this.enter({
			type: "link",
			title: null,
			url: "",
			children: []
		}, token);
	}
	function enterLiteralAutolinkValue(token) {
		this.config.enter.autolinkProtocol.call(this, token);
	}
	function exitLiteralAutolinkHttp(token) {
		this.config.exit.autolinkProtocol.call(this, token);
	}
	function exitLiteralAutolinkWww(token) {
		this.config.exit.data.call(this, token);
		const node = this.stack[this.stack.length - 1];
		node.type;
		node.url = "http://" + this.sliceSerialize(token);
	}
	function exitLiteralAutolinkEmail(token) {
		this.config.exit.autolinkEmail.call(this, token);
	}
	function exitLiteralAutolink(token) {
		this.exit(token);
	}
	function transformGfmAutolinkLiterals(tree) {
		findAndReplace(tree, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, findEmail]], { ignore: ["link", "linkReference"] });
	}
	function findUrl(_, protocol, domain, path, match) {
		let prefix = "";
		if (!previous(match)) return false;
		if (/^w/i.test(protocol)) {
			domain = protocol + domain;
			protocol = "";
			prefix = "http://";
		}
		if (!isCorrectDomain(domain)) return false;
		const parts = splitUrl(domain + path);
		if (!parts[0]) return false;
		const result = {
			type: "link",
			title: null,
			url: prefix + protocol + parts[0],
			children: [{
				type: "text",
				value: protocol + parts[0]
			}]
		};
		if (parts[1]) return [result, {
			type: "text",
			value: parts[1]
		}];
		return result;
	}
	function findEmail(_, atext, label, match) {
		if (!previous(match, true) || /[-\d_]$/.test(label)) return false;
		return {
			type: "link",
			title: null,
			url: "mailto:" + atext + "@" + label,
			children: [{
				type: "text",
				value: atext + "@" + label
			}]
		};
	}
	function isCorrectDomain(domain) {
		const parts = domain.split(".");
		if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) return false;
		return true;
	}
	function splitUrl(url) {
		const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
		if (!trailExec) return [url, void 0];
		url = url.slice(0, trailExec.index);
		let trail = trailExec[0];
		let closingParenIndex = trail.indexOf(")");
		const openingParens = ccount(url, "(");
		let closingParens = ccount(url, ")");
		while (closingParenIndex !== -1 && openingParens > closingParens) {
			url += trail.slice(0, closingParenIndex + 1);
			trail = trail.slice(closingParenIndex + 1);
			closingParenIndex = trail.indexOf(")");
			closingParens++;
		}
		return [url, trail];
	}
	function previous(match, email) {
		const code = match.input.charCodeAt(match.index - 1);
		return (match.index === 0 || unicodeWhitespace(code) || unicodePunctuation(code)) && (!email || code !== 47);
	}
	footnoteReference$1.peek = footnoteReferencePeek;
	function enterFootnoteCallString() {
		this.buffer();
	}
	function enterFootnoteCall(token) {
		this.enter({
			type: "footnoteReference",
			identifier: "",
			label: ""
		}, token);
	}
	function enterFootnoteDefinitionLabelString() {
		this.buffer();
	}
	function enterFootnoteDefinition(token) {
		this.enter({
			type: "footnoteDefinition",
			identifier: "",
			label: "",
			children: []
		}, token);
	}
	function exitFootnoteCallString(token) {
		const label = this.resume();
		const node = this.stack[this.stack.length - 1];
		node.type;
		node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
		node.label = label;
	}
	function exitFootnoteCall(token) {
		this.exit(token);
	}
	function exitFootnoteDefinitionLabelString(token) {
		const label = this.resume();
		const node = this.stack[this.stack.length - 1];
		node.type;
		node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
		node.label = label;
	}
	function exitFootnoteDefinition(token) {
		this.exit(token);
	}
	function footnoteReferencePeek() {
		return "[";
	}
	function footnoteReference$1(node, _, state, info) {
		const tracker = state.createTracker(info);
		let value = tracker.move("[^");
		const exit = state.enter("footnoteReference");
		const subexit = state.enter("reference");
		value += tracker.move(state.safe(state.associationId(node), {
			after: "]",
			before: value
		}));
		subexit();
		exit();
		value += tracker.move("]");
		return value;
	}
	function gfmFootnoteFromMarkdown() {
		return {
			enter: {
				gfmFootnoteCallString: enterFootnoteCallString,
				gfmFootnoteCall: enterFootnoteCall,
				gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
				gfmFootnoteDefinition: enterFootnoteDefinition
			},
			exit: {
				gfmFootnoteCallString: exitFootnoteCallString,
				gfmFootnoteCall: exitFootnoteCall,
				gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
				gfmFootnoteDefinition: exitFootnoteDefinition
			}
		};
	}
	function gfmFootnoteToMarkdown(options) {
		let firstLineBlank = false;
		if (options && options.firstLineBlank) firstLineBlank = true;
		return {
			handlers: {
				footnoteDefinition,
				footnoteReference: footnoteReference$1
			},
			unsafe: [{
				character: "[",
				inConstruct: [
					"label",
					"phrasing",
					"reference"
				]
			}]
		};
		function footnoteDefinition(node, _, state, info) {
			const tracker = state.createTracker(info);
			let value = tracker.move("[^");
			const exit = state.enter("footnoteDefinition");
			const subexit = state.enter("label");
			value += tracker.move(state.safe(state.associationId(node), {
				before: value,
				after: "]"
			}));
			subexit();
			value += tracker.move("]:");
			if (node.children && node.children.length > 0) {
				tracker.shift(4);
				value += tracker.move((firstLineBlank ? "\n" : " ") + state.indentLines(state.containerFlow(node, tracker.current()), firstLineBlank ? mapAll : mapExceptFirst));
			}
			exit();
			return value;
		}
	}
	function mapExceptFirst(line, index, blank) {
		return index === 0 ? line : mapAll(line, index, blank);
	}
	function mapAll(line, index, blank) {
		return (blank ? "" : "    ") + line;
	}
	var constructsWithoutStrikethrough = [
		"autolink",
		"destinationLiteral",
		"destinationRaw",
		"reference",
		"titleQuote",
		"titleApostrophe"
	];
	handleDelete.peek = peekDelete;
	function gfmStrikethroughFromMarkdown() {
		return {
			canContainEols: ["delete"],
			enter: { strikethrough: enterStrikethrough },
			exit: { strikethrough: exitStrikethrough }
		};
	}
	function gfmStrikethroughToMarkdown() {
		return {
			unsafe: [{
				character: "~",
				inConstruct: "phrasing",
				notInConstruct: constructsWithoutStrikethrough
			}],
			handlers: { delete: handleDelete }
		};
	}
	function enterStrikethrough(token) {
		this.enter({
			type: "delete",
			children: []
		}, token);
	}
	function exitStrikethrough(token) {
		this.exit(token);
	}
	function handleDelete(node, _, state, info) {
		const tracker = state.createTracker(info);
		const exit = state.enter("strikethrough");
		let value = tracker.move("~~");
		value += state.containerPhrasing(node, {
			...tracker.current(),
			before: value,
			after: "~"
		});
		value += tracker.move("~~");
		exit();
		return value;
	}
	function peekDelete() {
		return "~";
	}
	function defaultStringLength(value) {
		return value.length;
	}
	function markdownTable(table, options) {
		const settings = options || {};
		const align = (settings.align || []).concat();
		const stringLength = settings.stringLength || defaultStringLength;
		const alignments = [];
		const cellMatrix = [];
		const sizeMatrix = [];
		const longestCellByColumn = [];
		let mostCellsPerRow = 0;
		let rowIndex = -1;
		while (++rowIndex < table.length) {
			const row = [];
			const sizes = [];
			let columnIndex = -1;
			if (table[rowIndex].length > mostCellsPerRow) mostCellsPerRow = table[rowIndex].length;
			while (++columnIndex < table[rowIndex].length) {
				const cell = serialize(table[rowIndex][columnIndex]);
				if (settings.alignDelimiters !== false) {
					const size = stringLength(cell);
					sizes[columnIndex] = size;
					if (longestCellByColumn[columnIndex] === void 0 || size > longestCellByColumn[columnIndex]) longestCellByColumn[columnIndex] = size;
				}
				row.push(cell);
			}
			cellMatrix[rowIndex] = row;
			sizeMatrix[rowIndex] = sizes;
		}
		let columnIndex = -1;
		if (typeof align === "object" && "length" in align) while (++columnIndex < mostCellsPerRow) alignments[columnIndex] = toAlignment(align[columnIndex]);
		else {
			const code = toAlignment(align);
			while (++columnIndex < mostCellsPerRow) alignments[columnIndex] = code;
		}
		columnIndex = -1;
		const row = [];
		const sizes = [];
		while (++columnIndex < mostCellsPerRow) {
			const code = alignments[columnIndex];
			let before = "";
			let after = "";
			if (code === 99) {
				before = ":";
				after = ":";
			} else if (code === 108) before = ":";
			else if (code === 114) after = ":";
			let size = settings.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
			const cell = before + "-".repeat(size) + after;
			if (settings.alignDelimiters !== false) {
				size = before.length + size + after.length;
				if (size > longestCellByColumn[columnIndex]) longestCellByColumn[columnIndex] = size;
				sizes[columnIndex] = size;
			}
			row[columnIndex] = cell;
		}
		cellMatrix.splice(1, 0, row);
		sizeMatrix.splice(1, 0, sizes);
		rowIndex = -1;
		const lines = [];
		while (++rowIndex < cellMatrix.length) {
			const row = cellMatrix[rowIndex];
			const sizes = sizeMatrix[rowIndex];
			columnIndex = -1;
			const line = [];
			while (++columnIndex < mostCellsPerRow) {
				const cell = row[columnIndex] || "";
				let before = "";
				let after = "";
				if (settings.alignDelimiters !== false) {
					const size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
					const code = alignments[columnIndex];
					if (code === 114) before = " ".repeat(size);
					else if (code === 99) {
						if (size % 2) {
							before = " ".repeat(size / 2 + .5);
							after = " ".repeat(size / 2 - .5);
						} else {
							before = " ".repeat(size / 2);
							after = before;
						}
					} else after = " ".repeat(size);
				}
				if (settings.delimiterStart !== false && !columnIndex) line.push("|");
				if (settings.padding !== false && !(settings.alignDelimiters === false && cell === "") && (settings.delimiterStart !== false || columnIndex)) line.push(" ");
				if (settings.alignDelimiters !== false) line.push(before);
				line.push(cell);
				if (settings.alignDelimiters !== false) line.push(after);
				if (settings.padding !== false) line.push(" ");
				if (settings.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) line.push("|");
			}
			lines.push(settings.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join(""));
		}
		return lines.join("\n");
	}
	function serialize(value) {
		return value === null || value === void 0 ? "" : String(value);
	}
	function toAlignment(value) {
		const code = typeof value === "string" ? value.codePointAt(0) : 0;
		return code === 67 || code === 99 ? 99 : code === 76 || code === 108 ? 108 : code === 82 || code === 114 ? 114 : 0;
	}
	var own$1 = {}.hasOwnProperty;
	function configure(base, extension) {
		let index = -1;
		let key;
		if (extension.extensions) while (++index < extension.extensions.length) configure(base, extension.extensions[index]);
		for (key in extension) if (own$1.call(extension, key)) switch (key) {
			case "extensions": break;
			case "unsafe":
				list$2(base[key], extension[key]);
				break;
			case "join":
				list$2(base[key], extension[key]);
				break;
			case "handlers":
				map$2(base[key], extension[key]);
				break;
			default: base.options[key] = extension[key];
		}
		return base;
	}
	function list$2(left, right) {
		if (right) left.push(...right);
	}
	function map$2(left, right) {
		if (right) Object.assign(left, right);
	}
	function blockquote$1(node, _, state, info) {
		const exit = state.enter("blockquote");
		const tracker = state.createTracker(info);
		tracker.move("> ");
		tracker.shift(2);
		const value = state.indentLines(state.containerFlow(node, tracker.current()), map$1);
		exit();
		return value;
	}
	function map$1(line, _, blank) {
		return ">" + (blank ? "" : " ") + line;
	}
	function patternInScope(stack, pattern) {
		return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
	}
	function listInScope(stack, list, none) {
		if (typeof list === "string") list = [list];
		if (!list || list.length === 0) return none;
		let index = -1;
		while (++index < list.length) if (stack.includes(list[index])) return true;
		return false;
	}
	function hardBreak$1(_, _1, state, info) {
		let index = -1;
		while (++index < state.unsafe.length) if (state.unsafe[index].character === "\n" && patternInScope(state.stack, state.unsafe[index])) return /[ \t]/.test(info.before) ? "" : " ";
		return "\\\n";
	}
	function longestStreak(value, substring) {
		const source = String(value);
		let index = source.indexOf(substring);
		let expected = index;
		let count = 0;
		let max = 0;
		if (typeof substring !== "string") throw new TypeError("Expected substring");
		while (index !== -1) {
			if (index === expected) {
				if (++count > max) max = count;
			} else count = 1;
			expected = index + substring.length;
			index = source.indexOf(substring, expected);
		}
		return max;
	}
	function formatCodeAsIndented(node, state) {
		return Boolean(state.options.fences === false && node.value && !node.lang && /[^ \r\n]/.test(node.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value));
	}
	function checkFence(state) {
		const marker = state.options.fence || "`";
		if (marker !== "`" && marker !== "~") throw new Error("Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`");
		return marker;
	}
	function code$2(node, _, state, info) {
		const marker = checkFence(state);
		const raw = node.value || "";
		const suffix = marker === "`" ? "GraveAccent" : "Tilde";
		if (formatCodeAsIndented(node, state)) {
			const exit = state.enter("codeIndented");
			const value = state.indentLines(raw, map);
			exit();
			return value;
		}
		const tracker = state.createTracker(info);
		const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
		const exit = state.enter("codeFenced");
		let value = tracker.move(sequence);
		if (node.lang) {
			const subexit = state.enter(`codeFencedLang${suffix}`);
			value += tracker.move(state.safe(node.lang, {
				before: value,
				after: " ",
				encode: ["`"],
				...tracker.current()
			}));
			subexit();
		}
		if (node.lang && node.meta) {
			const subexit = state.enter(`codeFencedMeta${suffix}`);
			value += tracker.move(" ");
			value += tracker.move(state.safe(node.meta, {
				before: value,
				after: "\n",
				encode: ["`"],
				...tracker.current()
			}));
			subexit();
		}
		value += tracker.move("\n");
		if (raw) value += tracker.move(raw + "\n");
		value += tracker.move(sequence);
		exit();
		return value;
	}
	function map(line, _, blank) {
		return (blank ? "" : "    ") + line;
	}
	function checkQuote(state) {
		const marker = state.options.quote || "\"";
		if (marker !== "\"" && marker !== "'") throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
		return marker;
	}
	function definition(node, _, state, info) {
		const quote = checkQuote(state);
		const suffix = quote === "\"" ? "Quote" : "Apostrophe";
		const exit = state.enter("definition");
		let subexit = state.enter("label");
		const tracker = state.createTracker(info);
		let value = tracker.move("[");
		value += tracker.move(state.safe(state.associationId(node), {
			before: value,
			after: "]",
			...tracker.current()
		}));
		value += tracker.move("]: ");
		subexit();
		if (!node.url || /[\0- \u007F]/.test(node.url)) {
			subexit = state.enter("destinationLiteral");
			value += tracker.move("<");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: ">",
				...tracker.current()
			}));
			value += tracker.move(">");
		} else {
			subexit = state.enter("destinationRaw");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: node.title ? " " : "\n",
				...tracker.current()
			}));
		}
		subexit();
		if (node.title) {
			subexit = state.enter(`title${suffix}`);
			value += tracker.move(" " + quote);
			value += tracker.move(state.safe(node.title, {
				before: value,
				after: quote,
				...tracker.current()
			}));
			value += tracker.move(quote);
			subexit();
		}
		exit();
		return value;
	}
	function checkEmphasis(state) {
		const marker = state.options.emphasis || "*";
		if (marker !== "*" && marker !== "_") throw new Error("Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`");
		return marker;
	}
	function encodeCharacterReference(code) {
		return "&#x" + code.toString(16).toUpperCase() + ";";
	}
	function encodeInfo(outside, inside, marker) {
		const outsideKind = classifyCharacter(outside);
		const insideKind = classifyCharacter(inside);
		if (outsideKind === void 0) return insideKind === void 0 ? marker === "_" ? {
			inside: true,
			outside: true
		} : {
			inside: false,
			outside: false
		} : insideKind === 1 ? {
			inside: true,
			outside: true
		} : {
			inside: false,
			outside: true
		};
		if (outsideKind === 1) return insideKind === void 0 ? {
			inside: false,
			outside: false
		} : insideKind === 1 ? {
			inside: true,
			outside: true
		} : {
			inside: false,
			outside: false
		};
		return insideKind === void 0 ? {
			inside: false,
			outside: false
		} : insideKind === 1 ? {
			inside: true,
			outside: false
		} : {
			inside: false,
			outside: false
		};
	}
	emphasis$1.peek = emphasisPeek;
	function emphasis$1(node, _, state, info) {
		const marker = checkEmphasis(state);
		const exit = state.enter("emphasis");
		const tracker = state.createTracker(info);
		const before = tracker.move(marker);
		let between = tracker.move(state.containerPhrasing(node, {
			after: marker,
			before,
			...tracker.current()
		}));
		const betweenHead = between.charCodeAt(0);
		const open = encodeInfo(info.before.charCodeAt(info.before.length - 1), betweenHead, marker);
		if (open.inside) between = encodeCharacterReference(betweenHead) + between.slice(1);
		const betweenTail = between.charCodeAt(between.length - 1);
		const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
		if (close.inside) between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
		const after = tracker.move(marker);
		exit();
		state.attentionEncodeSurroundingInfo = {
			after: close.outside,
			before: open.outside
		};
		return before + between + after;
	}
	function emphasisPeek(_, _1, state) {
		return state.options.emphasis || "*";
	}
	function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
		let reverse;
		let test;
		let visitor;
		if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
			test = void 0;
			visitor = testOrVisitor;
			reverse = visitorOrReverse;
		} else {
			test = testOrVisitor;
			visitor = visitorOrReverse;
			reverse = maybeReverse;
		}
		visitParents(tree, test, overload, reverse);
		function overload(node, parents) {
			const parent = parents[parents.length - 1];
			const index = parent ? parent.children.indexOf(node) : void 0;
			return visitor(node, index, parent);
		}
	}
	function formatHeadingAsSetext(node, state) {
		let literalWithBreak = false;
		visit(node, function(node) {
			if ("value" in node && /\r?\n|\r/.test(node.value) || node.type === "break") {
				literalWithBreak = true;
				return false;
			}
		});
		return Boolean((!node.depth || node.depth < 3) && toString(node) && (state.options.setext || literalWithBreak));
	}
	function heading$1(node, _, state, info) {
		const rank = Math.max(Math.min(6, node.depth || 1), 1);
		const tracker = state.createTracker(info);
		if (formatHeadingAsSetext(node, state)) {
			const exit = state.enter("headingSetext");
			const subexit = state.enter("phrasing");
			const value = state.containerPhrasing(node, {
				...tracker.current(),
				before: "\n",
				after: "\n"
			});
			subexit();
			exit();
			return value + "\n" + (rank === 1 ? "=" : "-").repeat(value.length - (Math.max(value.lastIndexOf("\r"), value.lastIndexOf("\n")) + 1));
		}
		const sequence = "#".repeat(rank);
		const exit = state.enter("headingAtx");
		const subexit = state.enter("phrasing");
		tracker.move(sequence + " ");
		let value = state.containerPhrasing(node, {
			before: "# ",
			after: "\n",
			...tracker.current()
		});
		if (/^[\t ]/.test(value)) value = encodeCharacterReference(value.charCodeAt(0)) + value.slice(1);
		value = value ? sequence + " " + value : sequence;
		if (state.options.closeAtx) value += " " + sequence;
		subexit();
		exit();
		return value;
	}
	html$1.peek = htmlPeek;
	function html$1(node) {
		return node.value || "";
	}
	function htmlPeek() {
		return "<";
	}
	image$1.peek = imagePeek;
	function image$1(node, _, state, info) {
		const quote = checkQuote(state);
		const suffix = quote === "\"" ? "Quote" : "Apostrophe";
		const exit = state.enter("image");
		let subexit = state.enter("label");
		const tracker = state.createTracker(info);
		let value = tracker.move("![");
		value += tracker.move(state.safe(node.alt, {
			before: value,
			after: "]",
			...tracker.current()
		}));
		value += tracker.move("](");
		subexit();
		if (!node.url && node.title || /[\0- \u007F]/.test(node.url)) {
			subexit = state.enter("destinationLiteral");
			value += tracker.move("<");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: ">",
				...tracker.current()
			}));
			value += tracker.move(">");
		} else {
			subexit = state.enter("destinationRaw");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: node.title ? " " : ")",
				...tracker.current()
			}));
		}
		subexit();
		if (node.title) {
			subexit = state.enter(`title${suffix}`);
			value += tracker.move(" " + quote);
			value += tracker.move(state.safe(node.title, {
				before: value,
				after: quote,
				...tracker.current()
			}));
			value += tracker.move(quote);
			subexit();
		}
		value += tracker.move(")");
		exit();
		return value;
	}
	function imagePeek() {
		return "!";
	}
	imageReference$1.peek = imageReferencePeek;
	function imageReference$1(node, _, state, info) {
		const type = node.referenceType;
		const exit = state.enter("imageReference");
		let subexit = state.enter("label");
		const tracker = state.createTracker(info);
		let value = tracker.move("![");
		const alt = state.safe(node.alt, {
			before: value,
			after: "]",
			...tracker.current()
		});
		value += tracker.move(alt + "][");
		subexit();
		const stack = state.stack;
		state.stack = [];
		subexit = state.enter("reference");
		const reference = state.safe(state.associationId(node), {
			before: value,
			after: "]",
			...tracker.current()
		});
		subexit();
		state.stack = stack;
		exit();
		if (type === "full" || !alt || alt !== reference) value += tracker.move(reference + "]");
		else if (type === "shortcut") value = value.slice(0, -1);
		else value += tracker.move("]");
		return value;
	}
	function imageReferencePeek() {
		return "!";
	}
	inlineCode$1.peek = inlineCodePeek;
	function inlineCode$1(node, _, state) {
		let value = node.value || "";
		let sequence = "`";
		let index = -1;
		while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) sequence += "`";
		if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) value = " " + value + " ";
		while (++index < state.unsafe.length) {
			const pattern = state.unsafe[index];
			const expression = state.compilePattern(pattern);
			let match;
			if (!pattern.atBreak) continue;
			while (match = expression.exec(value)) {
				let position = match.index;
				if (value.charCodeAt(position) === 10 && value.charCodeAt(position - 1) === 13) position--;
				value = value.slice(0, position) + " " + value.slice(match.index + 1);
			}
		}
		return sequence + value + sequence;
	}
	function inlineCodePeek() {
		return "`";
	}
	function formatLinkAsAutolink(node, state) {
		const raw = toString(node);
		return Boolean(!state.options.resourceLink && node.url && !node.title && node.children && node.children.length === 1 && node.children[0].type === "text" && (raw === node.url || "mailto:" + raw === node.url) && /^[a-z][a-z+.-]+:/i.test(node.url) && !/[\0- <>\u007F]/.test(node.url));
	}
	link$1.peek = linkPeek;
	function link$1(node, _, state, info) {
		const quote = checkQuote(state);
		const suffix = quote === "\"" ? "Quote" : "Apostrophe";
		const tracker = state.createTracker(info);
		let exit;
		let subexit;
		if (formatLinkAsAutolink(node, state)) {
			const stack = state.stack;
			state.stack = [];
			exit = state.enter("autolink");
			let value = tracker.move("<");
			value += tracker.move(state.containerPhrasing(node, {
				before: value,
				after: ">",
				...tracker.current()
			}));
			value += tracker.move(">");
			exit();
			state.stack = stack;
			return value;
		}
		exit = state.enter("link");
		subexit = state.enter("label");
		let value = tracker.move("[");
		value += tracker.move(state.containerPhrasing(node, {
			before: value,
			after: "](",
			...tracker.current()
		}));
		value += tracker.move("](");
		subexit();
		if (!node.url && node.title || /[\0- \u007F]/.test(node.url)) {
			subexit = state.enter("destinationLiteral");
			value += tracker.move("<");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: ">",
				...tracker.current()
			}));
			value += tracker.move(">");
		} else {
			subexit = state.enter("destinationRaw");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: node.title ? " " : ")",
				...tracker.current()
			}));
		}
		subexit();
		if (node.title) {
			subexit = state.enter(`title${suffix}`);
			value += tracker.move(" " + quote);
			value += tracker.move(state.safe(node.title, {
				before: value,
				after: quote,
				...tracker.current()
			}));
			value += tracker.move(quote);
			subexit();
		}
		value += tracker.move(")");
		exit();
		return value;
	}
	function linkPeek(node, _, state) {
		return formatLinkAsAutolink(node, state) ? "<" : "[";
	}
	linkReference$1.peek = linkReferencePeek;
	function linkReference$1(node, _, state, info) {
		const type = node.referenceType;
		const exit = state.enter("linkReference");
		let subexit = state.enter("label");
		const tracker = state.createTracker(info);
		let value = tracker.move("[");
		const text = state.containerPhrasing(node, {
			before: value,
			after: "]",
			...tracker.current()
		});
		value += tracker.move(text + "][");
		subexit();
		const stack = state.stack;
		state.stack = [];
		subexit = state.enter("reference");
		const reference = state.safe(state.associationId(node), {
			before: value,
			after: "]",
			...tracker.current()
		});
		subexit();
		state.stack = stack;
		exit();
		if (type === "full" || !text || text !== reference) value += tracker.move(reference + "]");
		else if (type === "shortcut") value = value.slice(0, -1);
		else value += tracker.move("]");
		return value;
	}
	function linkReferencePeek() {
		return "[";
	}
	function checkBullet(state) {
		const marker = state.options.bullet || "*";
		if (marker !== "*" && marker !== "+" && marker !== "-") throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
		return marker;
	}
	function checkBulletOther(state) {
		const bullet = checkBullet(state);
		const bulletOther = state.options.bulletOther;
		if (!bulletOther) return bullet === "*" ? "-" : "*";
		if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") throw new Error("Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
		if (bulletOther === bullet) throw new Error("Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different");
		return bulletOther;
	}
	function checkBulletOrdered(state) {
		const marker = state.options.bulletOrdered || ".";
		if (marker !== "." && marker !== ")") throw new Error("Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`");
		return marker;
	}
	function checkRule(state) {
		const marker = state.options.rule || "*";
		if (marker !== "*" && marker !== "-" && marker !== "_") throw new Error("Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`");
		return marker;
	}
	function list$1(node, parent, state, info) {
		const exit = state.enter("list");
		const bulletCurrent = state.bulletCurrent;
		let bullet = node.ordered ? checkBulletOrdered(state) : checkBullet(state);
		const bulletOther = node.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
		let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
		if (!node.ordered) {
			const firstListItem = node.children ? node.children[0] : void 0;
			if ((bullet === "*" || bullet === "-") && firstListItem && (!firstListItem.children || !firstListItem.children[0]) && state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0) useDifferentMarker = true;
			if (checkRule(state) === bullet && firstListItem) {
				let index = -1;
				while (++index < node.children.length) {
					const item = node.children[index];
					if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
						useDifferentMarker = true;
						break;
					}
				}
			}
		}
		if (useDifferentMarker) bullet = bulletOther;
		state.bulletCurrent = bullet;
		const value = state.containerFlow(node, info);
		state.bulletLastUsed = bullet;
		state.bulletCurrent = bulletCurrent;
		exit();
		return value;
	}
	function checkListItemIndent(state) {
		const style = state.options.listItemIndent || "one";
		if (style !== "tab" && style !== "one" && style !== "mixed") throw new Error("Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
		return style;
	}
	function listItem$1(node, parent, state, info) {
		const listItemIndent = checkListItemIndent(state);
		let bullet = state.bulletCurrent || checkBullet(state);
		if (parent && parent.type === "list" && parent.ordered) bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
		let size = bullet.length + 1;
		if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) size = Math.ceil(size / 4) * 4;
		const tracker = state.createTracker(info);
		tracker.move(bullet + " ".repeat(size - bullet.length));
		tracker.shift(size);
		const exit = state.enter("listItem");
		const value = state.indentLines(state.containerFlow(node, tracker.current()), map);
		exit();
		return value;
		function map(line, index, blank) {
			if (index) return (blank ? "" : " ".repeat(size)) + line;
			return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
		}
	}
	function paragraph$1(node, _, state, info) {
		const exit = state.enter("paragraph");
		const subexit = state.enter("phrasing");
		const value = state.containerPhrasing(node, info);
		subexit();
		exit();
		return value;
	}
	var phrasing = convert([
		"break",
		"delete",
		"emphasis",
		"footnote",
		"footnoteReference",
		"image",
		"imageReference",
		"inlineCode",
		"inlineMath",
		"link",
		"linkReference",
		"mdxJsxTextElement",
		"mdxTextExpression",
		"strong",
		"text",
		"textDirective"
	]);
	function root$1(node, _, state, info) {
		return (node.children.some(function(d) {
			return phrasing(d);
		}) ? state.containerPhrasing : state.containerFlow).call(state, node, info);
	}
	function checkStrong(state) {
		const marker = state.options.strong || "*";
		if (marker !== "*" && marker !== "_") throw new Error("Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`");
		return marker;
	}
	strong$1.peek = strongPeek;
	function strong$1(node, _, state, info) {
		const marker = checkStrong(state);
		const exit = state.enter("strong");
		const tracker = state.createTracker(info);
		const before = tracker.move(marker + marker);
		let between = tracker.move(state.containerPhrasing(node, {
			after: marker,
			before,
			...tracker.current()
		}));
		const betweenHead = between.charCodeAt(0);
		const open = encodeInfo(info.before.charCodeAt(info.before.length - 1), betweenHead, marker);
		if (open.inside) between = encodeCharacterReference(betweenHead) + between.slice(1);
		const betweenTail = between.charCodeAt(between.length - 1);
		const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
		if (close.inside) between = between.slice(0, -1) + encodeCharacterReference(betweenTail);
		const after = tracker.move(marker + marker);
		exit();
		state.attentionEncodeSurroundingInfo = {
			after: close.outside,
			before: open.outside
		};
		return before + between + after;
	}
	function strongPeek(_, _1, state) {
		return state.options.strong || "*";
	}
	function text$2(node, _, state, info) {
		return state.safe(node.value, info);
	}
	function checkRuleRepetition(state) {
		const repetition = state.options.ruleRepetition || 3;
		if (repetition < 3) throw new Error("Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more");
		return repetition;
	}
	function thematicBreak$1(_, _1, state) {
		const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
		return state.options.ruleSpaces ? value.slice(0, -1) : value;
	}
	var handle = {
		blockquote: blockquote$1,
		break: hardBreak$1,
		code: code$2,
		definition,
		emphasis: emphasis$1,
		hardBreak: hardBreak$1,
		heading: heading$1,
		html: html$1,
		image: image$1,
		imageReference: imageReference$1,
		inlineCode: inlineCode$1,
		link: link$1,
		linkReference: linkReference$1,
		list: list$1,
		listItem: listItem$1,
		paragraph: paragraph$1,
		root: root$1,
		strong: strong$1,
		text: text$2,
		thematicBreak: thematicBreak$1
	};
	var join = [joinDefaults];
	function joinDefaults(left, right, parent, state) {
		if (right.type === "code" && formatCodeAsIndented(right, state) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, state))) return false;
		if ("spread" in parent && typeof parent.spread === "boolean") {
			if (left.type === "paragraph" && (left.type === right.type || right.type === "definition" || right.type === "heading" && formatHeadingAsSetext(right, state))) return;
			return parent.spread ? 1 : 0;
		}
	}
	var fullPhrasingSpans = [
		"autolink",
		"destinationLiteral",
		"destinationRaw",
		"reference",
		"titleQuote",
		"titleApostrophe"
	];
	var unsafe = [
		{
			character: "	",
			after: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: "	",
			before: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: "	",
			inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
		},
		{
			character: "\r",
			inConstruct: [
				"codeFencedLangGraveAccent",
				"codeFencedLangTilde",
				"codeFencedMetaGraveAccent",
				"codeFencedMetaTilde",
				"destinationLiteral",
				"headingAtx"
			]
		},
		{
			character: "\n",
			inConstruct: [
				"codeFencedLangGraveAccent",
				"codeFencedLangTilde",
				"codeFencedMetaGraveAccent",
				"codeFencedMetaTilde",
				"destinationLiteral",
				"headingAtx"
			]
		},
		{
			character: " ",
			after: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: " ",
			before: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: " ",
			inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
		},
		{
			character: "!",
			after: "\\[",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			character: "\"",
			inConstruct: "titleQuote"
		},
		{
			atBreak: true,
			character: "#"
		},
		{
			character: "#",
			inConstruct: "headingAtx",
			after: "(?:[\r\n]|$)"
		},
		{
			character: "&",
			after: "[#A-Za-z]",
			inConstruct: "phrasing"
		},
		{
			character: "'",
			inConstruct: "titleApostrophe"
		},
		{
			character: "(",
			inConstruct: "destinationRaw"
		},
		{
			before: "\\]",
			character: "(",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			atBreak: true,
			before: "\\d+",
			character: ")"
		},
		{
			character: ")",
			inConstruct: "destinationRaw"
		},
		{
			atBreak: true,
			character: "*",
			after: "(?:[ 	\r\n*])"
		},
		{
			character: "*",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			atBreak: true,
			character: "+",
			after: "(?:[ 	\r\n])"
		},
		{
			atBreak: true,
			character: "-",
			after: "(?:[ 	\r\n-])"
		},
		{
			atBreak: true,
			before: "\\d+",
			character: ".",
			after: "(?:[ 	\r\n]|$)"
		},
		{
			atBreak: true,
			character: "<",
			after: "[!/?A-Za-z]"
		},
		{
			character: "<",
			after: "[!/?A-Za-z]",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			character: "<",
			inConstruct: "destinationLiteral"
		},
		{
			atBreak: true,
			character: "="
		},
		{
			atBreak: true,
			character: ">"
		},
		{
			character: ">",
			inConstruct: "destinationLiteral"
		},
		{
			atBreak: true,
			character: "["
		},
		{
			character: "[",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			character: "[",
			inConstruct: ["label", "reference"]
		},
		{
			character: "\\",
			after: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: "]",
			inConstruct: ["label", "reference"]
		},
		{
			atBreak: true,
			character: "_"
		},
		{
			character: "_",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			atBreak: true,
			character: "`"
		},
		{
			character: "`",
			inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
		},
		{
			character: "`",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			atBreak: true,
			character: "~"
		}
	];
	function association(node) {
		if (node.label || !node.identifier) return node.label || "";
		return decodeString(node.identifier);
	}
	function compilePattern(pattern) {
		if (!pattern._compiled) {
			const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
			pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
		}
		return pattern._compiled;
	}
	function containerPhrasing(parent, state, info) {
		const indexStack = state.indexStack;
		const children = parent.children || [];
		const results = [];
		let index = -1;
		let before = info.before;
		let encodeAfter;
		indexStack.push(-1);
		let tracker = state.createTracker(info);
		while (++index < children.length) {
			const child = children[index];
			let after;
			indexStack[indexStack.length - 1] = index;
			if (index + 1 < children.length) {
				let handle = state.handle.handlers[children[index + 1].type];
				if (handle && handle.peek) handle = handle.peek;
				after = handle ? handle(children[index + 1], parent, state, {
					before: "",
					after: "",
					...tracker.current()
				}).charAt(0) : "";
			} else after = info.after;
			if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
				results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
				before = " ";
				tracker = state.createTracker(info);
				tracker.move(results.join(""));
			}
			let value = state.handle(child, parent, state, {
				...tracker.current(),
				after,
				before
			});
			if (encodeAfter && encodeAfter === value.slice(0, 1)) value = encodeCharacterReference(encodeAfter.charCodeAt(0)) + value.slice(1);
			const encodingInfo = state.attentionEncodeSurroundingInfo;
			state.attentionEncodeSurroundingInfo = void 0;
			encodeAfter = void 0;
			if (encodingInfo) {
				if (results.length > 0 && encodingInfo.before && before === results[results.length - 1].slice(-1)) results[results.length - 1] = results[results.length - 1].slice(0, -1) + encodeCharacterReference(before.charCodeAt(0));
				if (encodingInfo.after) encodeAfter = after;
			}
			tracker.move(value);
			results.push(value);
			before = value.slice(-1);
		}
		indexStack.pop();
		return results.join("");
	}
	function containerFlow(parent, state, info) {
		const indexStack = state.indexStack;
		const children = parent.children || [];
		const tracker = state.createTracker(info);
		const results = [];
		let index = -1;
		indexStack.push(-1);
		while (++index < children.length) {
			const child = children[index];
			indexStack[indexStack.length - 1] = index;
			results.push(tracker.move(state.handle(child, parent, state, {
				before: "\n",
				after: "\n",
				...tracker.current()
			})));
			if (child.type !== "list") state.bulletLastUsed = void 0;
			if (index < children.length - 1) results.push(tracker.move(between(child, children[index + 1], parent, state)));
		}
		indexStack.pop();
		return results.join("");
	}
	function between(left, right, parent, state) {
		let index = state.join.length;
		while (index--) {
			const result = state.join[index](left, right, parent, state);
			if (result === true || result === 1) break;
			if (typeof result === "number") return "\n".repeat(1 + result);
			if (result === false) return "\n\n<!---->\n\n";
		}
		return "\n\n";
	}
	var eol = /\r?\n|\r/g;
	function indentLines(value, map) {
		const result = [];
		let start = 0;
		let line = 0;
		let match;
		while (match = eol.exec(value)) {
			one(value.slice(start, match.index));
			result.push(match[0]);
			start = match.index + match[0].length;
			line++;
		}
		one(value.slice(start));
		return result.join("");
		function one(value) {
			result.push(map(value, line, !value));
		}
	}
	function safe(state, input, config) {
		const value = (config.before || "") + (input || "") + (config.after || "");
		const positions = [];
		const result = [];
		const infos = {};
		let index = -1;
		while (++index < state.unsafe.length) {
			const pattern = state.unsafe[index];
			if (!patternInScope(state.stack, pattern)) continue;
			const expression = state.compilePattern(pattern);
			let match;
			while (match = expression.exec(value)) {
				const before = "before" in pattern || Boolean(pattern.atBreak);
				const after = "after" in pattern;
				const position = match.index + (before ? match[1].length : 0);
				if (positions.includes(position)) {
					if (infos[position].before && !before) infos[position].before = false;
					if (infos[position].after && !after) infos[position].after = false;
				} else {
					positions.push(position);
					infos[position] = {
						before,
						after
					};
				}
			}
		}
		positions.sort(numerical);
		let start = config.before ? config.before.length : 0;
		const end = value.length - (config.after ? config.after.length : 0);
		index = -1;
		while (++index < positions.length) {
			const position = positions[index];
			if (position < start || position >= end) continue;
			if (position + 1 < end && positions[index + 1] === position + 1 && infos[position].after && !infos[position + 1].before && !infos[position + 1].after || positions[index - 1] === position - 1 && infos[position].before && !infos[position - 1].before && !infos[position - 1].after) continue;
			if (start !== position) result.push(escapeBackslashes(value.slice(start, position), "\\"));
			start = position;
			if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || !config.encode.includes(value.charAt(position)))) result.push("\\");
			else {
				result.push(encodeCharacterReference(value.charCodeAt(position)));
				start++;
			}
		}
		result.push(escapeBackslashes(value.slice(start, end), config.after));
		return result.join("");
	}
	function numerical(a, b) {
		return a - b;
	}
	function escapeBackslashes(value, after) {
		const expression = /\\(?=[!-/:-@[-`{-~])/g;
		const positions = [];
		const results = [];
		const whole = value + after;
		let index = -1;
		let start = 0;
		let match;
		while (match = expression.exec(whole)) positions.push(match.index);
		while (++index < positions.length) {
			if (start !== positions[index]) results.push(value.slice(start, positions[index]));
			results.push("\\");
			start = positions[index];
		}
		results.push(value.slice(start));
		return results.join("");
	}
	function track(config) {
		const options = config || {};
		const now = options.now || {};
		let lineShift = options.lineShift || 0;
		let line = now.line || 1;
		let column = now.column || 1;
		return {
			move,
			current,
			shift
		};
		function current() {
			return {
				now: {
					line,
					column
				},
				lineShift
			};
		}
		function shift(value) {
			lineShift += value;
		}
		function move(input) {
			const value = input || "";
			const chunks = value.split(/\r?\n|\r/g);
			const tail = chunks[chunks.length - 1];
			line += chunks.length - 1;
			column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
			return value;
		}
	}
	function toMarkdown$1(tree, options) {
		const settings = options || {};
		const state = {
			associationId: association,
			containerPhrasing: containerPhrasingBound,
			containerFlow: containerFlowBound,
			createTracker: track,
			compilePattern,
			enter,
			handlers: { ...handle },
			handle: void 0,
			indentLines,
			indexStack: [],
			join: [...join],
			options: {},
			safe: safeBound,
			stack: [],
			unsafe: [...unsafe]
		};
		configure(state, settings);
		if (state.options.tightDefinitions) state.join.push(joinDefinition);
		state.handle = zwitch("type", {
			invalid,
			unknown,
			handlers: state.handlers
		});
		let result = state.handle(tree, void 0, state, {
			before: "\n",
			after: "\n",
			now: {
				line: 1,
				column: 1
			},
			lineShift: 0
		});
		if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) result += "\n";
		return result;
		function enter(name) {
			state.stack.push(name);
			return exit;
			function exit() {
				state.stack.pop();
			}
		}
	}
	function invalid(value) {
		throw new Error("Cannot handle value `" + value + "`, expected node");
	}
	function unknown(value) {
		throw new Error("Cannot handle unknown node `" + value.type + "`");
	}
	function joinDefinition(left, right) {
		if (left.type === "definition" && left.type === right.type) return 0;
	}
	function containerPhrasingBound(parent, info) {
		return containerPhrasing(parent, this, info);
	}
	function containerFlowBound(parent, info) {
		return containerFlow(parent, this, info);
	}
	function safeBound(value, config) {
		return safe(this, value, config);
	}
	function gfmTableFromMarkdown() {
		return {
			enter: {
				table: enterTable,
				tableData: enterCell,
				tableHeader: enterCell,
				tableRow: enterRow
			},
			exit: {
				codeText: exitCodeText,
				table: exitTable,
				tableData: exit,
				tableHeader: exit,
				tableRow: exit
			}
		};
	}
	function enterTable(token) {
		const align = token._align;
		this.enter({
			type: "table",
			align: align.map(function(d) {
				return d === "none" ? null : d;
			}),
			children: []
		}, token);
		this.data.inTable = true;
	}
	function exitTable(token) {
		this.exit(token);
		this.data.inTable = void 0;
	}
	function enterRow(token) {
		this.enter({
			type: "tableRow",
			children: []
		}, token);
	}
	function exit(token) {
		this.exit(token);
	}
	function enterCell(token) {
		this.enter({
			type: "tableCell",
			children: []
		}, token);
	}
	function exitCodeText(token) {
		let value = this.resume();
		if (this.data.inTable) value = value.replace(/\\([\\|])/g, replace);
		const node = this.stack[this.stack.length - 1];
		node.type;
		node.value = value;
		this.exit(token);
	}
	function replace($0, $1) {
		return $1 === "|" ? $1 : $0;
	}
	function gfmTableToMarkdown(options) {
		const settings = options || {};
		const padding = settings.tableCellPadding;
		const alignDelimiters = settings.tablePipeAlign;
		const stringLength = settings.stringLength;
		const around = padding ? " " : "|";
		return {
			unsafe: [
				{
					character: "\r",
					inConstruct: "tableCell"
				},
				{
					character: "\n",
					inConstruct: "tableCell"
				},
				{
					atBreak: true,
					character: "|",
					after: "[	 :-]"
				},
				{
					character: "|",
					inConstruct: "tableCell"
				},
				{
					atBreak: true,
					character: ":",
					after: "-"
				},
				{
					atBreak: true,
					character: "-",
					after: "[:|-]"
				}
			],
			handlers: {
				inlineCode: inlineCodeWithTable,
				table: handleTable,
				tableCell: handleTableCell,
				tableRow: handleTableRow
			}
		};
		function handleTable(node, _, state, info) {
			return serializeData(handleTableAsData(node, state, info), node.align);
		}
		function handleTableRow(node, _, state, info) {
			const value = serializeData([handleTableRowAsData(node, state, info)]);
			return value.slice(0, value.indexOf("\n"));
		}
		function handleTableCell(node, _, state, info) {
			const exit = state.enter("tableCell");
			const subexit = state.enter("phrasing");
			const value = state.containerPhrasing(node, {
				...info,
				before: around,
				after: around
			});
			subexit();
			exit();
			return value;
		}
		function serializeData(matrix, align) {
			return markdownTable(matrix, {
				align,
				alignDelimiters,
				padding,
				stringLength
			});
		}
		function handleTableAsData(node, state, info) {
			const children = node.children;
			let index = -1;
			const result = [];
			const subexit = state.enter("table");
			while (++index < children.length) result[index] = handleTableRowAsData(children[index], state, info);
			subexit();
			return result;
		}
		function handleTableRowAsData(node, state, info) {
			const children = node.children;
			let index = -1;
			const result = [];
			const subexit = state.enter("tableRow");
			while (++index < children.length) result[index] = handleTableCell(children[index], node, state, info);
			subexit();
			return result;
		}
		function inlineCodeWithTable(node, parent, state) {
			let value = handle.inlineCode(node, parent, state);
			if (state.stack.includes("tableCell")) value = value.replace(/\|/g, "\\$&");
			return value;
		}
	}
	function gfmTaskListItemFromMarkdown() {
		return { exit: {
			taskListCheckValueChecked: exitCheck,
			taskListCheckValueUnchecked: exitCheck,
			paragraph: exitParagraphWithTaskListItem
		} };
	}
	function gfmTaskListItemToMarkdown() {
		return {
			unsafe: [{
				atBreak: true,
				character: "-",
				after: "[:|-]"
			}],
			handlers: { listItem: listItemWithTaskListItem }
		};
	}
	function exitCheck(token) {
		const node = this.stack[this.stack.length - 2];
		node.type;
		node.checked = token.type === "taskListCheckValueChecked";
	}
	function exitParagraphWithTaskListItem(token) {
		const parent = this.stack[this.stack.length - 2];
		if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
			const node = this.stack[this.stack.length - 1];
			node.type;
			const head = node.children[0];
			if (head && head.type === "text") {
				const siblings = parent.children;
				let index = -1;
				let firstParaghraph;
				while (++index < siblings.length) {
					const sibling = siblings[index];
					if (sibling.type === "paragraph") {
						firstParaghraph = sibling;
						break;
					}
				}
				if (firstParaghraph === node) {
					head.value = head.value.slice(1);
					if (head.value.length === 0) node.children.shift();
					else if (node.position && head.position && typeof head.position.start.offset === "number") {
						head.position.start.column++;
						head.position.start.offset++;
						node.position.start = Object.assign({}, head.position.start);
					}
				}
			}
		}
		this.exit(token);
	}
	function listItemWithTaskListItem(node, parent, state, info) {
		const head = node.children[0];
		const checkable = typeof node.checked === "boolean" && head && head.type === "paragraph";
		const checkbox = "[" + (node.checked ? "x" : " ") + "] ";
		const tracker = state.createTracker(info);
		if (checkable) tracker.move(checkbox);
		let value = handle.listItem(node, parent, state, {
			...info,
			...tracker.current()
		});
		if (checkable) value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
		return value;
		function check($0) {
			return $0 + checkbox;
		}
	}
	function gfmFromMarkdown() {
		return [
			gfmAutolinkLiteralFromMarkdown(),
			gfmFootnoteFromMarkdown(),
			gfmStrikethroughFromMarkdown(),
			gfmTableFromMarkdown(),
			gfmTaskListItemFromMarkdown()
		];
	}
	function gfmToMarkdown(options) {
		return { extensions: [
			gfmAutolinkLiteralToMarkdown(),
			gfmFootnoteToMarkdown(options),
			gfmStrikethroughToMarkdown(),
			gfmTableToMarkdown(options),
			gfmTaskListItemToMarkdown()
		] };
	}
	function blockquote(state, node) {
		const result = {
			type: "element",
			tagName: "blockquote",
			properties: {},
			children: state.wrap(state.all(node), true)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function hardBreak(state, node) {
		const result = {
			type: "element",
			tagName: "br",
			properties: {},
			children: []
		};
		state.patch(node, result);
		return [state.applyData(node, result), {
			type: "text",
			value: "\n"
		}];
	}
	function code$1(state, node) {
		const value = node.value ? node.value + "\n" : "";
		const properties = {};
		const language = node.lang ? node.lang.split(/\s+/) : [];
		if (language.length > 0) properties.className = ["language-" + language[0]];
		let result = {
			type: "element",
			tagName: "code",
			properties,
			children: [{
				type: "text",
				value
			}]
		};
		if (node.meta) result.data = { meta: node.meta };
		state.patch(node, result);
		result = state.applyData(node, result);
		result = {
			type: "element",
			tagName: "pre",
			properties: {},
			children: [result]
		};
		state.patch(node, result);
		return result;
	}
	function strikethrough(state, node) {
		const result = {
			type: "element",
			tagName: "del",
			properties: {},
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function emphasis(state, node) {
		const result = {
			type: "element",
			tagName: "em",
			properties: {},
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function footnoteReference(state, node) {
		const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
		const id = String(node.identifier).toUpperCase();
		const safeId = normalizeUri(id.toLowerCase());
		const index = state.footnoteOrder.indexOf(id);
		let counter;
		let reuseCounter = state.footnoteCounts.get(id);
		if (reuseCounter === void 0) {
			reuseCounter = 0;
			state.footnoteOrder.push(id);
			counter = state.footnoteOrder.length;
		} else counter = index + 1;
		reuseCounter += 1;
		state.footnoteCounts.set(id, reuseCounter);
		const link = {
			type: "element",
			tagName: "a",
			properties: {
				href: "#" + clobberPrefix + "fn-" + safeId,
				id: clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
				dataFootnoteRef: true,
				ariaDescribedBy: ["footnote-label"]
			},
			children: [{
				type: "text",
				value: String(counter)
			}]
		};
		state.patch(node, link);
		const sup = {
			type: "element",
			tagName: "sup",
			properties: {},
			children: [link]
		};
		state.patch(node, sup);
		return state.applyData(node, sup);
	}
	function heading(state, node) {
		const result = {
			type: "element",
			tagName: "h" + node.depth,
			properties: {},
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function html(state, node) {
		if (state.options.allowDangerousHtml) {
			const result = {
				type: "raw",
				value: node.value
			};
			state.patch(node, result);
			return state.applyData(node, result);
		}
	}
	function revert(state, node) {
		const subtype = node.referenceType;
		let suffix = "]";
		if (subtype === "collapsed") suffix += "[]";
		else if (subtype === "full") suffix += "[" + (node.label || node.identifier) + "]";
		if (node.type === "imageReference") return [{
			type: "text",
			value: "![" + node.alt + suffix
		}];
		const contents = state.all(node);
		const head = contents[0];
		if (head && head.type === "text") head.value = "[" + head.value;
		else contents.unshift({
			type: "text",
			value: "["
		});
		const tail = contents[contents.length - 1];
		if (tail && tail.type === "text") tail.value += suffix;
		else contents.push({
			type: "text",
			value: suffix
		});
		return contents;
	}
	function imageReference(state, node) {
		const id = String(node.identifier).toUpperCase();
		const definition = state.definitionById.get(id);
		if (!definition) return revert(state, node);
		const properties = {
			src: normalizeUri(definition.url || ""),
			alt: node.alt
		};
		if (definition.title !== null && definition.title !== void 0) properties.title = definition.title;
		const result = {
			type: "element",
			tagName: "img",
			properties,
			children: []
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function image(state, node) {
		const properties = { src: normalizeUri(node.url) };
		if (node.alt !== null && node.alt !== void 0) properties.alt = node.alt;
		if (node.title !== null && node.title !== void 0) properties.title = node.title;
		const result = {
			type: "element",
			tagName: "img",
			properties,
			children: []
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function inlineCode(state, node) {
		const text = {
			type: "text",
			value: node.value.replace(/\r?\n|\r/g, " ")
		};
		state.patch(node, text);
		const result = {
			type: "element",
			tagName: "code",
			properties: {},
			children: [text]
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function linkReference(state, node) {
		const id = String(node.identifier).toUpperCase();
		const definition = state.definitionById.get(id);
		if (!definition) return revert(state, node);
		const properties = { href: normalizeUri(definition.url || "") };
		if (definition.title !== null && definition.title !== void 0) properties.title = definition.title;
		const result = {
			type: "element",
			tagName: "a",
			properties,
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function link(state, node) {
		const properties = { href: normalizeUri(node.url) };
		if (node.title !== null && node.title !== void 0) properties.title = node.title;
		const result = {
			type: "element",
			tagName: "a",
			properties,
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function listItem(state, node, parent) {
		const results = state.all(node);
		const loose = parent ? listLoose(parent) : listItemLoose(node);
		const properties = {};
		const children = [];
		if (typeof node.checked === "boolean") {
			const head = results[0];
			let paragraph;
			if (head && head.type === "element" && head.tagName === "p") paragraph = head;
			else {
				paragraph = {
					type: "element",
					tagName: "p",
					properties: {},
					children: []
				};
				results.unshift(paragraph);
			}
			if (paragraph.children.length > 0) paragraph.children.unshift({
				type: "text",
				value: " "
			});
			paragraph.children.unshift({
				type: "element",
				tagName: "input",
				properties: {
					type: "checkbox",
					checked: node.checked,
					disabled: true
				},
				children: []
			});
			properties.className = ["task-list-item"];
		}
		let index = -1;
		while (++index < results.length) {
			const child = results[index];
			if (loose || index !== 0 || child.type !== "element" || child.tagName !== "p") children.push({
				type: "text",
				value: "\n"
			});
			if (child.type === "element" && child.tagName === "p" && !loose) children.push(...child.children);
			else children.push(child);
		}
		const tail = results[results.length - 1];
		if (tail && (loose || tail.type !== "element" || tail.tagName !== "p")) children.push({
			type: "text",
			value: "\n"
		});
		const result = {
			type: "element",
			tagName: "li",
			properties,
			children
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function listLoose(node) {
		let loose = false;
		if (node.type === "list") {
			loose = node.spread || false;
			const children = node.children;
			let index = -1;
			while (!loose && ++index < children.length) loose = listItemLoose(children[index]);
		}
		return loose;
	}
	function listItemLoose(node) {
		const spread = node.spread;
		return spread === null || spread === void 0 ? node.children.length > 1 : spread;
	}
	function list(state, node) {
		const properties = {};
		const results = state.all(node);
		let index = -1;
		if (typeof node.start === "number" && node.start !== 1) properties.start = node.start;
		while (++index < results.length) {
			const child = results[index];
			if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
				properties.className = ["contains-task-list"];
				break;
			}
		}
		const result = {
			type: "element",
			tagName: node.ordered ? "ol" : "ul",
			properties,
			children: state.wrap(results, true)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function paragraph(state, node) {
		const result = {
			type: "element",
			tagName: "p",
			properties: {},
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function root(state, node) {
		const result = {
			type: "root",
			children: state.wrap(state.all(node))
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function strong(state, node) {
		const result = {
			type: "element",
			tagName: "strong",
			properties: {},
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function table(state, node) {
		const rows = state.all(node);
		const firstRow = rows.shift();
		const tableContent = [];
		if (firstRow) {
			const head = {
				type: "element",
				tagName: "thead",
				properties: {},
				children: state.wrap([firstRow], true)
			};
			state.patch(node.children[0], head);
			tableContent.push(head);
		}
		if (rows.length > 0) {
			const body = {
				type: "element",
				tagName: "tbody",
				properties: {},
				children: state.wrap(rows, true)
			};
			const start = pointStart(node.children[1]);
			const end = pointEnd(node.children[node.children.length - 1]);
			if (start && end) body.position = {
				start,
				end
			};
			tableContent.push(body);
		}
		const result = {
			type: "element",
			tagName: "table",
			properties: {},
			children: state.wrap(tableContent, true)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function tableRow(state, node, parent) {
		const siblings = parent ? parent.children : void 0;
		const tagName = (siblings ? siblings.indexOf(node) : 1) === 0 ? "th" : "td";
		const align = parent && parent.type === "table" ? parent.align : void 0;
		const length = align ? align.length : node.children.length;
		let cellIndex = -1;
		const cells = [];
		while (++cellIndex < length) {
			const cell = node.children[cellIndex];
			const properties = {};
			const alignValue = align ? align[cellIndex] : void 0;
			if (alignValue) properties.align = alignValue;
			let result = {
				type: "element",
				tagName,
				properties,
				children: []
			};
			if (cell) {
				result.children = state.all(cell);
				state.patch(cell, result);
				result = state.applyData(cell, result);
			}
			cells.push(result);
		}
		const result = {
			type: "element",
			tagName: "tr",
			properties: {},
			children: state.wrap(cells, true)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function tableCell(state, node) {
		const result = {
			type: "element",
			tagName: "td",
			properties: {},
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	var tab = 9;
	var space = 32;
	function trimLines(value) {
		const source = String(value);
		const search = /\r?\n|\r/g;
		let match = search.exec(source);
		let last = 0;
		const lines = [];
		while (match) {
			lines.push(trimLine(source.slice(last, match.index), last > 0, true), match[0]);
			last = match.index + match[0].length;
			match = search.exec(source);
		}
		lines.push(trimLine(source.slice(last), last > 0, false));
		return lines.join("");
	}
	function trimLine(value, start, end) {
		let startIndex = 0;
		let endIndex = value.length;
		if (start) {
			let code = value.codePointAt(startIndex);
			while (code === tab || code === space) {
				startIndex++;
				code = value.codePointAt(startIndex);
			}
		}
		if (end) {
			let code = value.codePointAt(endIndex - 1);
			while (code === tab || code === space) {
				endIndex--;
				code = value.codePointAt(endIndex - 1);
			}
		}
		return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
	}
	function text$1(state, node) {
		const result = {
			type: "text",
			value: trimLines(String(node.value))
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function thematicBreak(state, node) {
		const result = {
			type: "element",
			tagName: "hr",
			properties: {},
			children: []
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	var handlers = {
		blockquote,
		break: hardBreak,
		code: code$1,
		delete: strikethrough,
		emphasis,
		footnoteReference,
		heading,
		html,
		imageReference,
		image,
		inlineCode,
		linkReference,
		link,
		listItem,
		list,
		paragraph,
		root,
		strong,
		table,
		tableCell,
		tableRow,
		text: text$1,
		thematicBreak,
		toml: ignore,
		yaml: ignore,
		definition: ignore,
		footnoteDefinition: ignore
	};
	function ignore() {}
	function defaultFootnoteBackContent(_, rereferenceIndex) {
		const result = [{
			type: "text",
			value: "↩"
		}];
		if (rereferenceIndex > 1) result.push({
			type: "element",
			tagName: "sup",
			properties: {},
			children: [{
				type: "text",
				value: String(rereferenceIndex)
			}]
		});
		return result;
	}
	function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
		return "Back to reference " + (referenceIndex + 1) + (rereferenceIndex > 1 ? "-" + rereferenceIndex : "");
	}
	function footer(state) {
		const clobberPrefix = typeof state.options.clobberPrefix === "string" ? state.options.clobberPrefix : "user-content-";
		const footnoteBackContent = state.options.footnoteBackContent || defaultFootnoteBackContent;
		const footnoteBackLabel = state.options.footnoteBackLabel || defaultFootnoteBackLabel;
		const footnoteLabel = state.options.footnoteLabel || "Footnotes";
		const footnoteLabelTagName = state.options.footnoteLabelTagName || "h2";
		const footnoteLabelProperties = state.options.footnoteLabelProperties || { className: ["sr-only"] };
		const listItems = [];
		let referenceIndex = -1;
		while (++referenceIndex < state.footnoteOrder.length) {
			const definition = state.footnoteById.get(state.footnoteOrder[referenceIndex]);
			if (!definition) continue;
			const content = state.all(definition);
			const id = String(definition.identifier).toUpperCase();
			const safeId = normalizeUri(id.toLowerCase());
			let rereferenceIndex = 0;
			const backReferences = [];
			const counts = state.footnoteCounts.get(id);
			while (counts !== void 0 && ++rereferenceIndex <= counts) {
				if (backReferences.length > 0) backReferences.push({
					type: "text",
					value: " "
				});
				let children = typeof footnoteBackContent === "string" ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
				if (typeof children === "string") children = {
					type: "text",
					value: children
				};
				backReferences.push({
					type: "element",
					tagName: "a",
					properties: {
						href: "#" + clobberPrefix + "fnref-" + safeId + (rereferenceIndex > 1 ? "-" + rereferenceIndex : ""),
						dataFootnoteBackref: "",
						ariaLabel: typeof footnoteBackLabel === "string" ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
						className: ["data-footnote-backref"]
					},
					children: Array.isArray(children) ? children : [children]
				});
			}
			const tail = content[content.length - 1];
			if (tail && tail.type === "element" && tail.tagName === "p") {
				const tailTail = tail.children[tail.children.length - 1];
				if (tailTail && tailTail.type === "text") tailTail.value += " ";
				else tail.children.push({
					type: "text",
					value: " "
				});
				tail.children.push(...backReferences);
			} else content.push(...backReferences);
			const listItem = {
				type: "element",
				tagName: "li",
				properties: { id: clobberPrefix + "fn-" + safeId },
				children: state.wrap(content, true)
			};
			state.patch(definition, listItem);
			listItems.push(listItem);
		}
		if (listItems.length === 0) return;
		return {
			type: "element",
			tagName: "section",
			properties: {
				dataFootnotes: true,
				className: ["footnotes"]
			},
			children: [
				{
					type: "element",
					tagName: footnoteLabelTagName,
					properties: {
						...esm_default(footnoteLabelProperties),
						id: "footnote-label"
					},
					children: [{
						type: "text",
						value: footnoteLabel
					}]
				},
				{
					type: "text",
					value: "\n"
				},
				{
					type: "element",
					tagName: "ol",
					properties: {},
					children: state.wrap(listItems, true)
				},
				{
					type: "text",
					value: "\n"
				}
			]
		};
	}
	var own = {}.hasOwnProperty;
	var emptyOptions = {};
	function createState(tree, options) {
		const settings = options || emptyOptions;
		const definitionById = new Map();
		const footnoteById = new Map();
		const state = {
			all,
			applyData,
			definitionById,
			footnoteById,
			footnoteCounts: new Map(),
			footnoteOrder: [],
			handlers: {
				...handlers,
				...settings.handlers
			},
			one,
			options: settings,
			patch,
			wrap
		};
		visit(tree, function(node) {
			if (node.type === "definition" || node.type === "footnoteDefinition") {
				const map = node.type === "definition" ? definitionById : footnoteById;
				const id = String(node.identifier).toUpperCase();
				if (!map.has(id)) map.set(id, node);
			}
		});
		return state;
		function one(node, parent) {
			const type = node.type;
			const handle = state.handlers[type];
			if (own.call(state.handlers, type) && handle) return handle(state, node, parent);
			if (state.options.passThrough && state.options.passThrough.includes(type)) {
				if ("children" in node) {
					const { children, ...shallow } = node;
					const result = esm_default(shallow);
					result.children = state.all(node);
					return result;
				}
				return esm_default(node);
			}
			return (state.options.unknownHandler || defaultUnknownHandler)(state, node, parent);
		}
		function all(parent) {
			const values = [];
			if ("children" in parent) {
				const nodes = parent.children;
				let index = -1;
				while (++index < nodes.length) {
					const result = state.one(nodes[index], parent);
					if (result) {
						if (index && nodes[index - 1].type === "break") {
							if (!Array.isArray(result) && result.type === "text") result.value = trimMarkdownSpaceStart(result.value);
							if (!Array.isArray(result) && result.type === "element") {
								const head = result.children[0];
								if (head && head.type === "text") head.value = trimMarkdownSpaceStart(head.value);
							}
						}
						if (Array.isArray(result)) values.push(...result);
						else values.push(result);
					}
				}
			}
			return values;
		}
	}
	function patch(from, to) {
		if (from.position) to.position = position$1(from);
	}
	function applyData(from, to) {
		let result = to;
		if (from && from.data) {
			const hName = from.data.hName;
			const hChildren = from.data.hChildren;
			const hProperties = from.data.hProperties;
			if (typeof hName === "string") {
				if (result.type === "element") result.tagName = hName;
				else result = {
					type: "element",
					tagName: hName,
					properties: {},
					children: "children" in result ? result.children : [result]
				};
			}
			if (result.type === "element" && hProperties) Object.assign(result.properties, esm_default(hProperties));
			if ("children" in result && result.children && hChildren !== null && hChildren !== void 0) result.children = hChildren;
		}
		return result;
	}
	function defaultUnknownHandler(state, node) {
		const data = node.data || {};
		const result = "value" in node && !(own.call(data, "hProperties") || own.call(data, "hChildren")) ? {
			type: "text",
			value: node.value
		} : {
			type: "element",
			tagName: "div",
			properties: {},
			children: state.all(node)
		};
		state.patch(node, result);
		return state.applyData(node, result);
	}
	function wrap(nodes, loose) {
		const result = [];
		let index = -1;
		if (loose) result.push({
			type: "text",
			value: "\n"
		});
		while (++index < nodes.length) {
			if (index) result.push({
				type: "text",
				value: "\n"
			});
			result.push(nodes[index]);
		}
		if (loose && nodes.length > 0) result.push({
			type: "text",
			value: "\n"
		});
		return result;
	}
	function trimMarkdownSpaceStart(value) {
		let index = 0;
		let code = value.charCodeAt(index);
		while (code === 9 || code === 32) {
			index++;
			code = value.charCodeAt(index);
		}
		return value.slice(index);
	}
	function toHast(tree, options) {
		const state = createState(tree, options);
		const node = state.one(tree, void 0);
		const foot = footer(state);
		const result = Array.isArray(node) ? {
			type: "root",
			children: node
		} : node || {
			type: "root",
			children: []
		};
		if (foot) {
			"children" in result;
			result.children.push({
				type: "text",
				value: "\n"
			}, foot);
		}
		return result;
	}
	var wwwPrefix = {
		tokenize: tokenizeWwwPrefix,
		partial: true
	};
	var domain = {
		tokenize: tokenizeDomain,
		partial: true
	};
	var path = {
		tokenize: tokenizePath,
		partial: true
	};
	var trail = {
		tokenize: tokenizeTrail,
		partial: true
	};
	var emailDomainDotTrail = {
		tokenize: tokenizeEmailDomainDotTrail,
		partial: true
	};
	var wwwAutolink = {
		name: "wwwAutolink",
		tokenize: tokenizeWwwAutolink,
		previous: previousWww
	};
	var protocolAutolink = {
		name: "protocolAutolink",
		tokenize: tokenizeProtocolAutolink,
		previous: previousProtocol
	};
	var emailAutolink = {
		name: "emailAutolink",
		tokenize: tokenizeEmailAutolink,
		previous: previousEmail
	};
	var text = {};
	function gfmAutolinkLiteral() {
		return { text };
	}
	var code = 48;
	while (code < 123) {
		text[code] = emailAutolink;
		code++;
		if (code === 58) code = 65;
		else if (code === 91) code = 97;
	}
	text[43] = emailAutolink;
	text[45] = emailAutolink;
	text[46] = emailAutolink;
	text[95] = emailAutolink;
	text[72] = [emailAutolink, protocolAutolink];
	text[104] = [emailAutolink, protocolAutolink];
	text[87] = [emailAutolink, wwwAutolink];
	text[119] = [emailAutolink, wwwAutolink];
	function tokenizeEmailAutolink(effects, ok, nok) {
		const self = this;
		let dot;
		let data;
		return start;
		function start(code) {
			if (!gfmAtext(code) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) return nok(code);
			effects.enter("literalAutolink");
			effects.enter("literalAutolinkEmail");
			return atext(code);
		}
		function atext(code) {
			if (gfmAtext(code)) {
				effects.consume(code);
				return atext;
			}
			if (code === 64) {
				effects.consume(code);
				return emailDomain;
			}
			return nok(code);
		}
		function emailDomain(code) {
			if (code === 46) return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code);
			if (code === 45 || code === 95 || asciiAlphanumeric(code)) {
				data = true;
				effects.consume(code);
				return emailDomain;
			}
			return emailDomainAfter(code);
		}
		function emailDomainDot(code) {
			effects.consume(code);
			dot = true;
			return emailDomain;
		}
		function emailDomainAfter(code) {
			if (data && dot && asciiAlpha(self.previous)) {
				effects.exit("literalAutolinkEmail");
				effects.exit("literalAutolink");
				return ok(code);
			}
			return nok(code);
		}
	}
	function tokenizeWwwAutolink(effects, ok, nok) {
		const self = this;
		return wwwStart;
		function wwwStart(code) {
			if (code !== 87 && code !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) return nok(code);
			effects.enter("literalAutolink");
			effects.enter("literalAutolinkWww");
			return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code);
		}
		function wwwAfter(code) {
			effects.exit("literalAutolinkWww");
			effects.exit("literalAutolink");
			return ok(code);
		}
	}
	function tokenizeProtocolAutolink(effects, ok, nok) {
		const self = this;
		let buffer = "";
		let seen = false;
		return protocolStart;
		function protocolStart(code) {
			if ((code === 72 || code === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
				effects.enter("literalAutolink");
				effects.enter("literalAutolinkHttp");
				buffer += String.fromCodePoint(code);
				effects.consume(code);
				return protocolPrefixInside;
			}
			return nok(code);
		}
		function protocolPrefixInside(code) {
			if (asciiAlpha(code) && buffer.length < 5) {
				buffer += String.fromCodePoint(code);
				effects.consume(code);
				return protocolPrefixInside;
			}
			if (code === 58) {
				const protocol = buffer.toLowerCase();
				if (protocol === "http" || protocol === "https") {
					effects.consume(code);
					return protocolSlashesInside;
				}
			}
			return nok(code);
		}
		function protocolSlashesInside(code) {
			if (code === 47) {
				effects.consume(code);
				if (seen) return afterProtocol;
				seen = true;
				return protocolSlashesInside;
			}
			return nok(code);
		}
		function afterProtocol(code) {
			return code === null || asciiControl(code) || markdownLineEndingOrSpace(code) || unicodeWhitespace(code) || unicodePunctuation(code) ? nok(code) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code);
		}
		function protocolAfter(code) {
			effects.exit("literalAutolinkHttp");
			effects.exit("literalAutolink");
			return ok(code);
		}
	}
	function tokenizeWwwPrefix(effects, ok, nok) {
		let size = 0;
		return wwwPrefixInside;
		function wwwPrefixInside(code) {
			if ((code === 87 || code === 119) && size < 3) {
				size++;
				effects.consume(code);
				return wwwPrefixInside;
			}
			if (code === 46 && size === 3) {
				effects.consume(code);
				return wwwPrefixAfter;
			}
			return nok(code);
		}
		function wwwPrefixAfter(code) {
			return code === null ? nok(code) : ok(code);
		}
	}
	function tokenizeDomain(effects, ok, nok) {
		let underscoreInLastSegment;
		let underscoreInLastLastSegment;
		let seen;
		return domainInside;
		function domainInside(code) {
			if (code === 46 || code === 95) return effects.check(trail, domainAfter, domainAtPunctuation)(code);
			if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code) || code !== 45 && unicodePunctuation(code)) return domainAfter(code);
			seen = true;
			effects.consume(code);
			return domainInside;
		}
		function domainAtPunctuation(code) {
			if (code === 95) underscoreInLastSegment = true;
			else {
				underscoreInLastLastSegment = underscoreInLastSegment;
				underscoreInLastSegment = void 0;
			}
			effects.consume(code);
			return domainInside;
		}
		function domainAfter(code) {
			if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) return nok(code);
			return ok(code);
		}
	}
	function tokenizePath(effects, ok) {
		let sizeOpen = 0;
		let sizeClose = 0;
		return pathInside;
		function pathInside(code) {
			if (code === 40) {
				sizeOpen++;
				effects.consume(code);
				return pathInside;
			}
			if (code === 41 && sizeClose < sizeOpen) return pathAtPunctuation(code);
			if (code === 33 || code === 34 || code === 38 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 60 || code === 63 || code === 93 || code === 95 || code === 126) return effects.check(trail, ok, pathAtPunctuation)(code);
			if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) return ok(code);
			effects.consume(code);
			return pathInside;
		}
		function pathAtPunctuation(code) {
			if (code === 41) sizeClose++;
			effects.consume(code);
			return pathInside;
		}
	}
	function tokenizeTrail(effects, ok, nok) {
		return trail;
		function trail(code) {
			if (code === 33 || code === 34 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 63 || code === 95 || code === 126) {
				effects.consume(code);
				return trail;
			}
			if (code === 38) {
				effects.consume(code);
				return trailCharacterReferenceStart;
			}
			if (code === 93) {
				effects.consume(code);
				return trailBracketAfter;
			}
			if (code === 60 || code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) return ok(code);
			return nok(code);
		}
		function trailBracketAfter(code) {
			if (code === null || code === 40 || code === 91 || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) return ok(code);
			return trail(code);
		}
		function trailCharacterReferenceStart(code) {
			return asciiAlpha(code) ? trailCharacterReferenceInside(code) : nok(code);
		}
		function trailCharacterReferenceInside(code) {
			if (code === 59) {
				effects.consume(code);
				return trail;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				return trailCharacterReferenceInside;
			}
			return nok(code);
		}
	}
	function tokenizeEmailDomainDotTrail(effects, ok, nok) {
		return start;
		function start(code) {
			effects.consume(code);
			return after;
		}
		function after(code) {
			return asciiAlphanumeric(code) ? nok(code) : ok(code);
		}
	}
	function previousWww(code) {
		return code === null || code === 40 || code === 42 || code === 95 || code === 91 || code === 93 || code === 126 || markdownLineEndingOrSpace(code);
	}
	function previousProtocol(code) {
		return !asciiAlpha(code);
	}
	function previousEmail(code) {
		return !(code === 47 || gfmAtext(code));
	}
	function gfmAtext(code) {
		return code === 43 || code === 45 || code === 46 || code === 95 || asciiAlphanumeric(code);
	}
	function previousUnbalanced(events) {
		let index = events.length;
		let result = false;
		while (index--) {
			const token = events[index][1];
			if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
				result = true;
				break;
			}
			if (token._gfmAutolinkLiteralWalkedInto) {
				result = false;
				break;
			}
		}
		if (events.length > 0 && !result) events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
		return result;
	}
	var indent = {
		tokenize: tokenizeIndent,
		partial: true
	};
	function gfmFootnote() {
		return {
			document: { [91]: {
				name: "gfmFootnoteDefinition",
				tokenize: tokenizeDefinitionStart,
				continuation: { tokenize: tokenizeDefinitionContinuation },
				exit: gfmFootnoteDefinitionEnd
			} },
			text: {
				[91]: {
					name: "gfmFootnoteCall",
					tokenize: tokenizeGfmFootnoteCall
				},
				[93]: {
					name: "gfmPotentialFootnoteCall",
					add: "after",
					tokenize: tokenizePotentialGfmFootnoteCall,
					resolveTo: resolveToPotentialGfmFootnoteCall
				}
			}
		};
	}
	function tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
		const self = this;
		let index = self.events.length;
		const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
		let labelStart;
		while (index--) {
			const token = self.events[index][1];
			if (token.type === "labelImage") {
				labelStart = token;
				break;
			}
			if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") break;
		}
		return start;
		function start(code) {
			if (!labelStart || !labelStart._balanced) return nok(code);
			const id = normalizeIdentifier(self.sliceSerialize({
				start: labelStart.end,
				end: self.now()
			}));
			if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) return nok(code);
			effects.enter("gfmFootnoteCallLabelMarker");
			effects.consume(code);
			effects.exit("gfmFootnoteCallLabelMarker");
			return ok(code);
		}
	}
	function resolveToPotentialGfmFootnoteCall(events, context) {
		let index = events.length;
		while (index--) if (events[index][1].type === "labelImage" && events[index][0] === "enter") {
			events[index][1];
			break;
		}
		events[index + 1][1].type = "data";
		events[index + 3][1].type = "gfmFootnoteCallLabelMarker";
		const call = {
			type: "gfmFootnoteCall",
			start: Object.assign({}, events[index + 3][1].start),
			end: Object.assign({}, events[events.length - 1][1].end)
		};
		const marker = {
			type: "gfmFootnoteCallMarker",
			start: Object.assign({}, events[index + 3][1].end),
			end: Object.assign({}, events[index + 3][1].end)
		};
		marker.end.column++;
		marker.end.offset++;
		marker.end._bufferIndex++;
		const string = {
			type: "gfmFootnoteCallString",
			start: Object.assign({}, marker.end),
			end: Object.assign({}, events[events.length - 1][1].start)
		};
		const chunk = {
			type: "chunkString",
			contentType: "string",
			start: Object.assign({}, string.start),
			end: Object.assign({}, string.end)
		};
		const replacement = [
			events[index + 1],
			events[index + 2],
			[
				"enter",
				call,
				context
			],
			events[index + 3],
			events[index + 4],
			[
				"enter",
				marker,
				context
			],
			[
				"exit",
				marker,
				context
			],
			[
				"enter",
				string,
				context
			],
			[
				"enter",
				chunk,
				context
			],
			[
				"exit",
				chunk,
				context
			],
			[
				"exit",
				string,
				context
			],
			events[events.length - 2],
			events[events.length - 1],
			[
				"exit",
				call,
				context
			]
		];
		events.splice(index, events.length - index + 1, ...replacement);
		return events;
	}
	function tokenizeGfmFootnoteCall(effects, ok, nok) {
		const self = this;
		const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
		let size = 0;
		let data;
		return start;
		function start(code) {
			effects.enter("gfmFootnoteCall");
			effects.enter("gfmFootnoteCallLabelMarker");
			effects.consume(code);
			effects.exit("gfmFootnoteCallLabelMarker");
			return callStart;
		}
		function callStart(code) {
			if (code !== 94) return nok(code);
			effects.enter("gfmFootnoteCallMarker");
			effects.consume(code);
			effects.exit("gfmFootnoteCallMarker");
			effects.enter("gfmFootnoteCallString");
			effects.enter("chunkString").contentType = "string";
			return callData;
		}
		function callData(code) {
			if (size > 999 || code === 93 && !data || code === null || code === 91 || markdownLineEndingOrSpace(code)) return nok(code);
			if (code === 93) {
				effects.exit("chunkString");
				const token = effects.exit("gfmFootnoteCallString");
				if (!defined.includes(normalizeIdentifier(self.sliceSerialize(token)))) return nok(code);
				effects.enter("gfmFootnoteCallLabelMarker");
				effects.consume(code);
				effects.exit("gfmFootnoteCallLabelMarker");
				effects.exit("gfmFootnoteCall");
				return ok;
			}
			if (!markdownLineEndingOrSpace(code)) data = true;
			size++;
			effects.consume(code);
			return code === 92 ? callEscape : callData;
		}
		function callEscape(code) {
			if (code === 91 || code === 92 || code === 93) {
				effects.consume(code);
				size++;
				return callData;
			}
			return callData(code);
		}
	}
	function tokenizeDefinitionStart(effects, ok, nok) {
		const self = this;
		const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
		let identifier;
		let size = 0;
		let data;
		return start;
		function start(code) {
			effects.enter("gfmFootnoteDefinition")._container = true;
			effects.enter("gfmFootnoteDefinitionLabel");
			effects.enter("gfmFootnoteDefinitionLabelMarker");
			effects.consume(code);
			effects.exit("gfmFootnoteDefinitionLabelMarker");
			return labelAtMarker;
		}
		function labelAtMarker(code) {
			if (code === 94) {
				effects.enter("gfmFootnoteDefinitionMarker");
				effects.consume(code);
				effects.exit("gfmFootnoteDefinitionMarker");
				effects.enter("gfmFootnoteDefinitionLabelString");
				effects.enter("chunkString").contentType = "string";
				return labelInside;
			}
			return nok(code);
		}
		function labelInside(code) {
			if (size > 999 || code === 93 && !data || code === null || code === 91 || markdownLineEndingOrSpace(code)) return nok(code);
			if (code === 93) {
				effects.exit("chunkString");
				const token = effects.exit("gfmFootnoteDefinitionLabelString");
				identifier = normalizeIdentifier(self.sliceSerialize(token));
				effects.enter("gfmFootnoteDefinitionLabelMarker");
				effects.consume(code);
				effects.exit("gfmFootnoteDefinitionLabelMarker");
				effects.exit("gfmFootnoteDefinitionLabel");
				return labelAfter;
			}
			if (!markdownLineEndingOrSpace(code)) data = true;
			size++;
			effects.consume(code);
			return code === 92 ? labelEscape : labelInside;
		}
		function labelEscape(code) {
			if (code === 91 || code === 92 || code === 93) {
				effects.consume(code);
				size++;
				return labelInside;
			}
			return labelInside(code);
		}
		function labelAfter(code) {
			if (code === 58) {
				effects.enter("definitionMarker");
				effects.consume(code);
				effects.exit("definitionMarker");
				if (!defined.includes(identifier)) defined.push(identifier);
				return factorySpace(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
			}
			return nok(code);
		}
		function whitespaceAfter(code) {
			return ok(code);
		}
	}
	function tokenizeDefinitionContinuation(effects, ok, nok) {
		return effects.check(blankLine, ok, effects.attempt(indent, ok, nok));
	}
	function gfmFootnoteDefinitionEnd(effects) {
		effects.exit("gfmFootnoteDefinition");
	}
	function tokenizeIndent(effects, ok, nok) {
		const self = this;
		return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 5);
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok(code) : nok(code);
		}
	}
	function gfmStrikethrough(options) {
		let single = (options || {}).singleTilde;
		const tokenizer = {
			name: "strikethrough",
			tokenize: tokenizeStrikethrough,
			resolveAll: resolveAllStrikethrough
		};
		if (single === null || single === void 0) single = true;
		return {
			text: { [126]: tokenizer },
			insideSpan: { null: [tokenizer] },
			attentionMarkers: { null: [126] }
		};
		function resolveAllStrikethrough(events, context) {
			let index = -1;
			while (++index < events.length) if (events[index][0] === "enter" && events[index][1].type === "strikethroughSequenceTemporary" && events[index][1]._close) {
				let open = index;
				while (open--) if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
					events[index][1].type = "strikethroughSequence";
					events[open][1].type = "strikethroughSequence";
					const strikethrough = {
						type: "strikethrough",
						start: Object.assign({}, events[open][1].start),
						end: Object.assign({}, events[index][1].end)
					};
					const text = {
						type: "strikethroughText",
						start: Object.assign({}, events[open][1].end),
						end: Object.assign({}, events[index][1].start)
					};
					const nextEvents = [
						[
							"enter",
							strikethrough,
							context
						],
						[
							"enter",
							events[open][1],
							context
						],
						[
							"exit",
							events[open][1],
							context
						],
						[
							"enter",
							text,
							context
						]
					];
					const insideSpan = context.parser.constructs.insideSpan.null;
					if (insideSpan) splice(nextEvents, nextEvents.length, 0, resolveAll(insideSpan, events.slice(open + 1, index), context));
					splice(nextEvents, nextEvents.length, 0, [
						[
							"exit",
							text,
							context
						],
						[
							"enter",
							events[index][1],
							context
						],
						[
							"exit",
							events[index][1],
							context
						],
						[
							"exit",
							strikethrough,
							context
						]
					]);
					splice(events, open - 1, index - open + 3, nextEvents);
					index = open + nextEvents.length - 2;
					break;
				}
			}
			index = -1;
			while (++index < events.length) if (events[index][1].type === "strikethroughSequenceTemporary") events[index][1].type = "data";
			return events;
		}
		function tokenizeStrikethrough(effects, ok, nok) {
			const previous = this.previous;
			const events = this.events;
			let size = 0;
			return start;
			function start(code) {
				if (previous === 126 && events[events.length - 1][1].type !== "characterEscape") return nok(code);
				effects.enter("strikethroughSequenceTemporary");
				return more(code);
			}
			function more(code) {
				const before = classifyCharacter(previous);
				if (code === 126) {
					if (size > 1) return nok(code);
					effects.consume(code);
					size++;
					return more;
				}
				if (size < 2 && !single) return nok(code);
				const token = effects.exit("strikethroughSequenceTemporary");
				const after = classifyCharacter(code);
				token._open = !after || after === 2 && Boolean(before);
				token._close = !before || before === 2 && Boolean(after);
				return ok(code);
			}
		}
	}
	var EditMap = class {
		constructor() {
			this.map = [];
		}
		add(index, remove, add) {
			addImplementation(this, index, remove, add);
		}
		consume(events) {
			this.map.sort(function(a, b) {
				return a[0] - b[0];
			});
			if (this.map.length === 0) return;
			let index = this.map.length;
			const vecs = [];
			while (index > 0) {
				index -= 1;
				vecs.push(events.slice(this.map[index][0] + this.map[index][1]), this.map[index][2]);
				events.length = this.map[index][0];
			}
			vecs.push(events.slice());
			events.length = 0;
			let slice = vecs.pop();
			while (slice) {
				for (const element of slice) events.push(element);
				slice = vecs.pop();
			}
			this.map.length = 0;
		}
	};
	function addImplementation(editMap, at, remove, add) {
		let index = 0;
		if (remove === 0 && add.length === 0) return;
		while (index < editMap.map.length) {
			if (editMap.map[index][0] === at) {
				editMap.map[index][1] += remove;
				editMap.map[index][2].push(...add);
				return;
			}
			index += 1;
		}
		editMap.map.push([
			at,
			remove,
			add
		]);
	}
	function gfmTableAlign(events, index) {
		let inDelimiterRow = false;
		const align = [];
		while (index < events.length) {
			const event = events[index];
			if (inDelimiterRow) {
				if (event[0] === "enter") {
					if (event[1].type === "tableContent") align.push(events[index + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
				} else if (event[1].type === "tableContent") {
					if (events[index - 1][1].type === "tableDelimiterMarker") {
						const alignIndex = align.length - 1;
						align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
					}
				} else if (event[1].type === "tableDelimiterRow") break;
			} else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") inDelimiterRow = true;
			index += 1;
		}
		return align;
	}
	function gfmTable() {
		return { flow: { null: {
			name: "table",
			tokenize: tokenizeTable,
			resolveAll: resolveTable
		} } };
	}
	function tokenizeTable(effects, ok, nok) {
		const self = this;
		let size = 0;
		let sizeB = 0;
		let seen;
		return start;
		function start(code) {
			let index = self.events.length - 1;
			while (index > -1) {
				const type = self.events[index][1].type;
				if (type === "lineEnding" || type === "linePrefix") index--;
				else break;
			}
			const tail = index > -1 ? self.events[index][1].type : null;
			const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
			if (next === bodyRowStart && self.parser.lazy[self.now().line]) return nok(code);
			return next(code);
		}
		function headRowBefore(code) {
			effects.enter("tableHead");
			effects.enter("tableRow");
			return headRowStart(code);
		}
		function headRowStart(code) {
			if (code === 124) return headRowBreak(code);
			seen = true;
			sizeB += 1;
			return headRowBreak(code);
		}
		function headRowBreak(code) {
			if (code === null) return nok(code);
			if (markdownLineEnding(code)) {
				if (sizeB > 1) {
					sizeB = 0;
					self.interrupt = true;
					effects.exit("tableRow");
					effects.enter("lineEnding");
					effects.consume(code);
					effects.exit("lineEnding");
					return headDelimiterStart;
				}
				return nok(code);
			}
			if (markdownSpace(code)) return factorySpace(effects, headRowBreak, "whitespace")(code);
			sizeB += 1;
			if (seen) {
				seen = false;
				size += 1;
			}
			if (code === 124) {
				effects.enter("tableCellDivider");
				effects.consume(code);
				effects.exit("tableCellDivider");
				seen = true;
				return headRowBreak;
			}
			effects.enter("data");
			return headRowData(code);
		}
		function headRowData(code) {
			if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
				effects.exit("data");
				return headRowBreak(code);
			}
			effects.consume(code);
			return code === 92 ? headRowEscape : headRowData;
		}
		function headRowEscape(code) {
			if (code === 92 || code === 124) {
				effects.consume(code);
				return headRowData;
			}
			return headRowData(code);
		}
		function headDelimiterStart(code) {
			self.interrupt = false;
			if (self.parser.lazy[self.now().line]) return nok(code);
			effects.enter("tableDelimiterRow");
			seen = false;
			if (markdownSpace(code)) return factorySpace(effects, headDelimiterBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code);
			return headDelimiterBefore(code);
		}
		function headDelimiterBefore(code) {
			if (code === 45 || code === 58) return headDelimiterValueBefore(code);
			if (code === 124) {
				seen = true;
				effects.enter("tableCellDivider");
				effects.consume(code);
				effects.exit("tableCellDivider");
				return headDelimiterCellBefore;
			}
			return headDelimiterNok(code);
		}
		function headDelimiterCellBefore(code) {
			if (markdownSpace(code)) return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code);
			return headDelimiterValueBefore(code);
		}
		function headDelimiterValueBefore(code) {
			if (code === 58) {
				sizeB += 1;
				seen = true;
				effects.enter("tableDelimiterMarker");
				effects.consume(code);
				effects.exit("tableDelimiterMarker");
				return headDelimiterLeftAlignmentAfter;
			}
			if (code === 45) {
				sizeB += 1;
				return headDelimiterLeftAlignmentAfter(code);
			}
			if (code === null || markdownLineEnding(code)) return headDelimiterCellAfter(code);
			return headDelimiterNok(code);
		}
		function headDelimiterLeftAlignmentAfter(code) {
			if (code === 45) {
				effects.enter("tableDelimiterFiller");
				return headDelimiterFiller(code);
			}
			return headDelimiterNok(code);
		}
		function headDelimiterFiller(code) {
			if (code === 45) {
				effects.consume(code);
				return headDelimiterFiller;
			}
			if (code === 58) {
				seen = true;
				effects.exit("tableDelimiterFiller");
				effects.enter("tableDelimiterMarker");
				effects.consume(code);
				effects.exit("tableDelimiterMarker");
				return headDelimiterRightAlignmentAfter;
			}
			effects.exit("tableDelimiterFiller");
			return headDelimiterRightAlignmentAfter(code);
		}
		function headDelimiterRightAlignmentAfter(code) {
			if (markdownSpace(code)) return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code);
			return headDelimiterCellAfter(code);
		}
		function headDelimiterCellAfter(code) {
			if (code === 124) return headDelimiterBefore(code);
			if (code === null || markdownLineEnding(code)) {
				if (!seen || size !== sizeB) return headDelimiterNok(code);
				effects.exit("tableDelimiterRow");
				effects.exit("tableHead");
				return ok(code);
			}
			return headDelimiterNok(code);
		}
		function headDelimiterNok(code) {
			return nok(code);
		}
		function bodyRowStart(code) {
			effects.enter("tableRow");
			return bodyRowBreak(code);
		}
		function bodyRowBreak(code) {
			if (code === 124) {
				effects.enter("tableCellDivider");
				effects.consume(code);
				effects.exit("tableCellDivider");
				return bodyRowBreak;
			}
			if (code === null || markdownLineEnding(code)) {
				effects.exit("tableRow");
				return ok(code);
			}
			if (markdownSpace(code)) return factorySpace(effects, bodyRowBreak, "whitespace")(code);
			effects.enter("data");
			return bodyRowData(code);
		}
		function bodyRowData(code) {
			if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
				effects.exit("data");
				return bodyRowBreak(code);
			}
			effects.consume(code);
			return code === 92 ? bodyRowEscape : bodyRowData;
		}
		function bodyRowEscape(code) {
			if (code === 92 || code === 124) {
				effects.consume(code);
				return bodyRowData;
			}
			return bodyRowData(code);
		}
	}
	function resolveTable(events, context) {
		let index = -1;
		let inFirstCellAwaitingPipe = true;
		let rowKind = 0;
		let lastCell = [
			0,
			0,
			0,
			0
		];
		let cell = [
			0,
			0,
			0,
			0
		];
		let afterHeadAwaitingFirstBodyRow = false;
		let lastTableEnd = 0;
		let currentTable;
		let currentBody;
		let currentCell;
		const map = new EditMap();
		while (++index < events.length) {
			const event = events[index];
			const token = event[1];
			if (event[0] === "enter") {
				if (token.type === "tableHead") {
					afterHeadAwaitingFirstBodyRow = false;
					if (lastTableEnd !== 0) {
						flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
						currentBody = void 0;
						lastTableEnd = 0;
					}
					currentTable = {
						type: "table",
						start: Object.assign({}, token.start),
						end: Object.assign({}, token.end)
					};
					map.add(index, 0, [[
						"enter",
						currentTable,
						context
					]]);
				} else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
					inFirstCellAwaitingPipe = true;
					currentCell = void 0;
					lastCell = [
						0,
						0,
						0,
						0
					];
					cell = [
						0,
						index + 1,
						0,
						0
					];
					if (afterHeadAwaitingFirstBodyRow) {
						afterHeadAwaitingFirstBodyRow = false;
						currentBody = {
							type: "tableBody",
							start: Object.assign({}, token.start),
							end: Object.assign({}, token.end)
						};
						map.add(index, 0, [[
							"enter",
							currentBody,
							context
						]]);
					}
					rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
				} else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
					inFirstCellAwaitingPipe = false;
					if (cell[2] === 0) {
						if (lastCell[1] !== 0) {
							cell[0] = cell[1];
							currentCell = flushCell(map, context, lastCell, rowKind, void 0, currentCell);
							lastCell = [
								0,
								0,
								0,
								0
							];
						}
						cell[2] = index;
					}
				} else if (token.type === "tableCellDivider") {
					if (inFirstCellAwaitingPipe) inFirstCellAwaitingPipe = false;
					else {
						if (lastCell[1] !== 0) {
							cell[0] = cell[1];
							currentCell = flushCell(map, context, lastCell, rowKind, void 0, currentCell);
						}
						lastCell = cell;
						cell = [
							lastCell[1],
							index,
							0,
							0
						];
					}
				}
			} else if (token.type === "tableHead") {
				afterHeadAwaitingFirstBodyRow = true;
				lastTableEnd = index;
			} else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
				lastTableEnd = index;
				if (lastCell[1] !== 0) {
					cell[0] = cell[1];
					currentCell = flushCell(map, context, lastCell, rowKind, index, currentCell);
				} else if (cell[1] !== 0) currentCell = flushCell(map, context, cell, rowKind, index, currentCell);
				rowKind = 0;
			} else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) cell[3] = index;
		}
		if (lastTableEnd !== 0) flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
		map.consume(context.events);
		index = -1;
		while (++index < context.events.length) {
			const event = context.events[index];
			if (event[0] === "enter" && event[1].type === "table") event[1]._align = gfmTableAlign(context.events, index);
		}
		return events;
	}
	function flushCell(map, context, range, rowKind, rowEnd, previousCell) {
		const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
		const valueName = "tableContent";
		if (range[0] !== 0) {
			previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
			map.add(range[0], 0, [[
				"exit",
				previousCell,
				context
			]]);
		}
		const now = getPoint(context.events, range[1]);
		previousCell = {
			type: groupName,
			start: Object.assign({}, now),
			end: Object.assign({}, now)
		};
		map.add(range[1], 0, [[
			"enter",
			previousCell,
			context
		]]);
		if (range[2] !== 0) {
			const relatedStart = getPoint(context.events, range[2]);
			const relatedEnd = getPoint(context.events, range[3]);
			const valueToken = {
				type: valueName,
				start: Object.assign({}, relatedStart),
				end: Object.assign({}, relatedEnd)
			};
			map.add(range[2], 0, [[
				"enter",
				valueToken,
				context
			]]);
			if (rowKind !== 2) {
				const start = context.events[range[2]];
				const end = context.events[range[3]];
				start[1].end = Object.assign({}, end[1].end);
				start[1].type = "chunkText";
				start[1].contentType = "text";
				if (range[3] > range[2] + 1) {
					const a = range[2] + 1;
					const b = range[3] - range[2] - 1;
					map.add(a, b, []);
				}
			}
			map.add(range[3] + 1, 0, [[
				"exit",
				valueToken,
				context
			]]);
		}
		if (rowEnd !== void 0) {
			previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
			map.add(rowEnd, 0, [[
				"exit",
				previousCell,
				context
			]]);
			previousCell = void 0;
		}
		return previousCell;
	}
	function flushTableEnd(map, context, index, table, tableBody) {
		const exits = [];
		const related = getPoint(context.events, index);
		if (tableBody) {
			tableBody.end = Object.assign({}, related);
			exits.push([
				"exit",
				tableBody,
				context
			]);
		}
		table.end = Object.assign({}, related);
		exits.push([
			"exit",
			table,
			context
		]);
		map.add(index + 1, 0, exits);
	}
	function getPoint(events, index) {
		const event = events[index];
		const side = event[0] === "enter" ? "start" : "end";
		return event[1][side];
	}
	var tasklistCheck = {
		name: "tasklistCheck",
		tokenize: tokenizeTasklistCheck
	};
	function gfmTaskListItem() {
		return { text: { [91]: tasklistCheck } };
	}
	function tokenizeTasklistCheck(effects, ok, nok) {
		const self = this;
		return open;
		function open(code) {
			if (self.previous !== null || !self._gfmTasklistFirstContentOfListItem) return nok(code);
			effects.enter("taskListCheck");
			effects.enter("taskListCheckMarker");
			effects.consume(code);
			effects.exit("taskListCheckMarker");
			return inside;
		}
		function inside(code) {
			if (markdownLineEndingOrSpace(code)) {
				effects.enter("taskListCheckValueUnchecked");
				effects.consume(code);
				effects.exit("taskListCheckValueUnchecked");
				return close;
			}
			if (code === 88 || code === 120) {
				effects.enter("taskListCheckValueChecked");
				effects.consume(code);
				effects.exit("taskListCheckValueChecked");
				return close;
			}
			return nok(code);
		}
		function close(code) {
			if (code === 93) {
				effects.enter("taskListCheckMarker");
				effects.consume(code);
				effects.exit("taskListCheckMarker");
				effects.exit("taskListCheck");
				return after;
			}
			return nok(code);
		}
		function after(code) {
			if (markdownLineEnding(code)) return ok(code);
			if (markdownSpace(code)) return effects.check({ tokenize: spaceThenNonSpace }, ok, nok)(code);
			return nok(code);
		}
	}
	function spaceThenNonSpace(effects, ok, nok) {
		return factorySpace(effects, after, "whitespace");
		function after(code) {
			return code === null ? nok(code) : ok(code);
		}
	}
	function gfm(options) {
		return combineExtensions([
			gfmAutolinkLiteral(),
			gfmFootnote(),
			gfmStrikethrough(options),
			gfmTable(),
			gfmTaskListItem()
		]);
	}
	function fromMarkdown(content) {
		return fromMarkdown$1(content, {
			extensions: [gfm()],
			mdastExtensions: [gfmFromMarkdown()]
		});
	}
	function toMarkdown(ast) {
		return toMarkdown$1(ast, {
			bullet: "-",
			bulletOther: "*",
			bulletOrdered: ".",
			emphasis: "*",
			fence: "`",
			fences: true,
			listItemIndent: "one",
			resourceLink: false,
			rule: "-",
			ruleRepetition: 3,
			ruleSpaces: false,
			strong: "*",
			extensions: [gfmToMarkdown()]
		});
	}
	function toHtml(node) {
		const htmlTree = toHast(node);
		return htmlTree ? toHtml$1(sanitize$1(htmlTree)) : "";
	}
	function flatMap(tree, fn) {
		function transform(node, i, parent) {
			if ("children" in node) {
				const p = node;
				p.children = p.children.flatMap((item, i) => transform(item, i, p));
			}
			return fn(node, i, parent);
		}
		return transform(tree, 0, void 0)[0];
	}
	function standardizeLineBreaks(text) {
		return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	}
	async function exportToHtml(fileNameFormat, metaList) {
		if (!checkIfConversationStarted()) {
			alert(i18n_default.t("Please start a conversation first"));
			return false;
		}
		const userAvatar = await getUserAvatar();
		const chatId = await getCurrentChatId();
		const conversation = processConversation(await fetchConversation(chatId, true), { enableThinking: ScriptStorage.get("exporter:enable_thinking") ?? false });
		const html = conversationToHtml(conversation, userAvatar, metaList);
		await downloadFile(getFileNameWithFormat(fileNameFormat, "html", {
			title: conversation.title,
			chatId,
			createTime: conversation.createTime,
			updateTime: conversation.updateTime
		}), "text/html", standardizeLineBreaks(html));
		return true;
	}
	async function exportAllToHtml(fileNameFormat, apiConversations, metaList, projectName, partIndex, totalParts) {
		const userAvatar = await getUserAvatar();
		const zip = new jszip.default();
		const filenameMap = new Map();
		const enableThinking = ScriptStorage.get("exporter:enable_thinking") ?? false;
		apiConversations.map((x) => processConversation(x, { enableThinking })).forEach((conversation) => {
			let fileName = getFileNameWithFormat(fileNameFormat, "html", {
				title: conversation.title,
				chatId: conversation.id,
				createTime: conversation.createTime,
				updateTime: conversation.updateTime
			});
			if (filenameMap.has(fileName)) {
				const count = filenameMap.get(fileName) ?? 1;
				filenameMap.set(fileName, count + 1);
				fileName = `${fileName.slice(0, -5)} (${count}).html`;
			} else filenameMap.set(fileName, 1);
			const content = conversationToHtml(conversation, userAvatar, metaList);
			zip.file(fileName, content);
		});
		const blob = await zip.generateAsync({
			type: "blob",
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		});
		return prepareDownload(buildZipFileName("html", projectName, partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0), "application/zip", blob);
	}
	function conversationToHtml(conversation, avatar, metaList) {
		const { id, title, model, modelSlug, createTime, updateTime, conversationNodes } = conversation;
		const enableTimestamp = ScriptStorage.get("exporter:enable_timestamp") ?? false;
		const timeStampHtml = ScriptStorage.get("exporter:timestamp_html") ?? false;
		const timeStamp24H = ScriptStorage.get("exporter:timestamp_24h") ?? false;
		const enableSources = ScriptStorage.get("exporter:enable_sources") ?? true;
		const conversationHtml = conversationNodes.map(({ message, thinking }) => {
			if (!message || !message.content) return null;
			if (shouldSkipMessageInExport(message)) return null;
			const author = transformAuthor$2(message.author);
			const authorType = message.author.role === "user" ? "user" : "DeepSeek";
			const avatarEl = message.author.role === "user" ? `<img alt="${escapeHtml(author)}" />` : "<span class=\"deepseek-avatar\">DS</span>";
			let postSteps = [];
			if (message.author.role === "assistant") {
				postSteps.push(renderMarkdownHtml);
				postSteps.push((input) => transformContentReferences(input, message.metadata, {
					output: "html",
					includeSourceList: enableSources,
					sourceListLabel: i18n_default.t("Sources")
				}));
			}
			if (message.author.role === "user") postSteps = [...postSteps, (input) => `<p class="no-katex">${escapeHtml(input)}</p>`];
			const postProcess = (input) => postSteps.reduce((acc, fn) => fn(acc), input);
			const content = transformContent$2(message.content, postProcess);
			const timestamp = message?.create_time ?? "";
			const showTimestamp = enableTimestamp && timeStampHtml && timestamp;
			let timestampHtml = "";
			let conversationTime = "";
			if (showTimestamp) {
				const date = new Date(timestamp * 1e3);
				conversationTime = date.toLocaleTimeString("en-US", {
					hour: "2-digit",
					minute: "2-digit",
					hour12: !timeStamp24H
				});
				timestampHtml = `<time class="time" datetime="${escapeHtml(date.toISOString())}" title="${escapeHtml(date.toLocaleString())}">${escapeHtml(conversationTime)}</time>`;
			}
			return `
<div class="conversation-item">
    <div class="author ${authorType}">
        ${avatarEl}
    </div>
    <div class="conversation-content-wrapper">
        ${thinking ? formatThinkingHtml(thinking) : ""}
        <div class="conversation-content">
            ${content}
        </div>
    </div>
    ${timestampHtml}
</div>`;
		}).filter(Boolean).join("\n\n");
		const date = dateStr();
		const time = new Date().toISOString();
		const source = `${baseUrl}/a/chat/s/${encodeURIComponent(id)}`;
		const lang = document.documentElement.lang || "en";
		const theme = getColorScheme();
		const _metaList = metaList?.filter((x) => !!x.name).map(({ name, value }) => {
			return [name, value.replaceAll("{title}", title).replaceAll("{date}", date).replaceAll("{timestamp}", timestamp()).replaceAll("{source}", source).replaceAll("{model}", model).replaceAll("{model_name}", modelSlug).replaceAll("{create_time}", unixTimestampToISOString(createTime)).replaceAll("{update_time}", unixTimestampToISOString(updateTime))];
		}) ?? [];
		const detailsHtml = _metaList.length > 0 ? `<details>
    <summary>Metadata</summary>
    <div class="metadata_container">
        ${_metaList.map(([key, value]) => `<div class="metadata_item"><div>${escapeHtml(key)}</div><div>${escapeHtml(value)}</div></div>`).join("\n")}
    </div>
</details>` : "";
		return template_default.replaceAll("{{title}}", escapeHtml(title)).replaceAll("{{date}}", escapeHtml(date)).replaceAll("{{time}}", escapeHtml(time)).replaceAll("{{source}}", escapeHtml(source)).replaceAll("{{lang}}", escapeHtml(lang)).replaceAll("{{theme}}", escapeHtml(theme)).replaceAll("{{avatar}}", escapeCssString(safeImageUrl(avatar))).replaceAll("{{details}}", detailsHtml).replaceAll("{{content}}", conversationHtml);
	}
	function transformAuthor$2(author) {
		switch (author.role) {
			case "assistant": return "DeepSeek";
			case "user": return "You";
			case "tool": return `Plugin${author.name ? ` (${author.name})` : ""}`;
			default: return author.role;
		}
	}
	function transformContent$2(content, postProcess) {
		switch (content.content_type) {
			case "text": return postProcess(content.parts?.join("\n") || "");
			case "multimodal_text": return content.parts?.map((part) => {
				if (typeof part === "string") return postProcess(part);
				const source = safeImageUrl(part.asset_pointer);
				if (!source) return "<span>[image]</span>";
				const height = Number.isFinite(part.height) && part.height > 0 ? Math.round(part.height) : void 0;
				const width = Number.isFinite(part.width) && part.width > 0 ? Math.round(part.width) : void 0;
				return `<img src="${escapeHtml(source)}"${height ? ` height="${height}"` : ""}${width ? ` width="${width}"` : ""} />`;
			}).join("\n") || "";
		}
	}
	function renderMarkdownHtml(input) {
		const latexRegex = /(\s\$\$.+?\$\$\s|\s\$.+?\$\s|\\\[[\S\s]+?\\\]|\\\([^\n]+?\\\))|(^\$$[\S\s]+?^\$$)|(^\$\$[\S\s]+?^\$\$)/gm;
		const matches = input.match(latexRegex);
		if (matches) {
			let index = 0;
			input = input.replace(latexRegex, () => `╬${index++}╬`);
		}
		let transformed = toHtml(fromMarkdown(input));
		if (matches) transformed = transformed.replace(/╬(\d+)╬/g, (_, index) => escapeHtml(matches[+index]));
		return transformed;
	}
	function formatThinkingHtml(thinking) {
		const duration = thinking.durationSeconds == null ? null : formatDurationSeconds(thinking.durationSeconds);
		const durationLabel = duration == null ? i18n_default.t("Thinking") : i18n_default.t("Thought for {{duration}} seconds", { duration });
		const parts = [];
		if (thinking.activities?.length) {
			const items = thinking.activities.map((a) => `<li>${escapeHtml(a)}</li>`).join("");
			parts.push(`<ul>${items}</ul>`);
		}
		const thoughts = thinking.thoughts.map((t) => t.content || t.summary).filter(Boolean).map(renderMarkdownHtml).join("\n");
		if (thoughts) parts.push(thoughts);
		const body = parts.join("\n");
		if (!body) return "";
		return `<details class="thinking"><summary>${escapeHtml(durationLabel)}</summary><div class="thinking-content">${body}</div></details>`;
	}
	var Effect = class {
		_sideEffects = [];
		_cleanupFns = [];
		_isDisposed = false;
		add(sideEffect) {
			if (this._isDisposed) return;
			this._sideEffects.push(sideEffect);
		}
		run() {
			if (this._isDisposed) return;
			this._sideEffects.forEach((fn) => {
				const cleanupFn = fn();
				if (cleanupFn) this._cleanupFns.push(cleanupFn);
			});
			this._sideEffects = [];
		}
		dispose() {
			if (this._isDisposed) return;
			this._cleanupFns.forEach((fn) => fn());
			this._cleanupFns = [];
			this._isDisposed = true;
		}
	};
	function fnIgnoreElements(el) {
		return typeof el.shadowRoot === "object" && el.shadowRoot !== null;
	}
	var CAPTURE_STICKY_ATTRIBUTE = "data-deepseek-exporter-capture-sticky";
	var CAPTURE_OVERLAY_ATTRIBUTE = "data-deepseek-exporter-capture-overlay";
	function markThinkingCaptureElements(thread) {
		const markedSticky = [];
		const markedOverlays = [];
		for (const content of Array.from(thread.querySelectorAll(".ds-think-content"))) {
			const container = content.parentElement;
			if (!container) continue;
			for (const sibling of Array.from(container.children)) {
				if (!(sibling instanceof HTMLElement)) continue;
				if (getComputedStyle(sibling).position !== "sticky") continue;
				sibling.setAttribute(CAPTURE_STICKY_ATTRIBUTE, "");
				markedSticky.push(sibling);
				const stickyRect = sibling.getBoundingClientRect();
				for (const descendant of Array.from(sibling.querySelectorAll("*"))) {
					const style = getComputedStyle(descendant);
					const rect = descendant.getBoundingClientRect();
					if (style.position === "absolute" && !descendant.textContent?.trim() && rect.bottom > stickyRect.bottom) {
						descendant.setAttribute(CAPTURE_OVERLAY_ATTRIBUTE, "");
						markedOverlays.push(descendant);
					}
				}
			}
		}
		return () => {
			markedSticky.forEach((element) => element.removeAttribute(CAPTURE_STICKY_ATTRIBUTE));
			markedOverlays.forEach((element) => element.removeAttribute(CAPTURE_OVERLAY_ATTRIBUTE));
		};
	}
	async function exportToPng(fileNameFormat) {
		if (!checkIfConversationStarted()) {
			alert(i18n_default.t("Please start a conversation first"));
			return false;
		}
		const effect = new Effect();
		const thread = document.querySelector(".ds-virtual-list-items") ?? document.querySelector(".ds-virtual-list--printable");
		if (!thread || thread.children.length === 0 || thread.scrollHeight < 50) {
			alert(i18n_default.t("Failed to export to PNG. Failed to find the element node."));
			return false;
		}
		const isDarkMode = document.body.classList.contains("dark");
		effect.add(() => markThinkingCaptureElements(thread));
		effect.add(() => {
			const style = document.createElement("style");
			style.textContent = `
            .ds-virtual-list-items,
            .ds-virtual-list-visible-items {
                color: ${isDarkMode ? "#f4f4f5" : "#1f2329"};
                background-color: ${isDarkMode ? "#202124" : "#f8faff"};
            }

            /* https://github.com/niklasvh/html2canvas/issues/2775#issuecomment-1204988157 */
            img {
                display: initial !important;
            }

            pre {
                margin-top: 8px !important;
            }

            pre > div > div > span {
                margin-top: -12px;
                padding-bottom: 2px;
            }

            [${CAPTURE_STICKY_ATTRIBUTE}] {
                position: static !important;
                inset: auto !important;
                z-index: auto !important;
            }

            [${CAPTURE_OVERLAY_ATTRIBUTE}] {
                display: none !important;
            }

            #page-header,
            #thread-bottom-container,
            /* any other elements that are not conversation turns */
            #thread div:has(> [data-testid="conversation-turn-1"]) > :not([data-testid^="conversation-turn-"]),
            /* hide back to top button */
            button.absolute,
            /* question button */
            .group.absolute > button {
                display: none;
            }

            /* conversation action bar */
            .group\\/conversation-turn > div > div.absolute,
            /* code block buttons */
            #thread pre button,
            .ds-virtual-list-items button,
            .ds-virtual-list-items [role="button"],
            .ds-virtual-list-items textarea {
                visibility: hidden;
            }
            `;
			thread.appendChild(style);
			return () => style.remove();
		});
		const threadEl = thread;
		const passLimit = 10;
		const takeScreenshot = async (width, height, additionalScale = 1, currentPass = 1) => {
			const scale = (window.devicePixelRatio || 1) * 2 * additionalScale;
			let canvas = null;
			try {
				canvas = await (0, html2canvas.default)(threadEl, {
					scale,
					useCORS: true,
					scrollX: -window.scrollX,
					scrollY: -window.scrollY,
					windowWidth: width,
					windowHeight: height,
					ignoreElements: fnIgnoreElements
				});
			} catch (error) {
				console.error("[DeepSeek Exporter] Failed to take screenshot:", error);
			}
			const context = canvas?.getContext("2d");
			if (context) context.imageSmoothingEnabled = false;
			const dataUrl = canvas?.toDataURL("image/png", 1).replace(/^data:image\/[^;]/, "data:application/octet-stream");
			if (!canvas || !dataUrl || dataUrl === "data:,") {
				if (currentPass > passLimit) return null;
				return takeScreenshot(width, height, additionalScale / 1.4, currentPass + 1);
			}
			return dataUrl;
		};
		let dataUrl = null;
		effect.run();
		try {
			await sleep(100);
			dataUrl = await takeScreenshot(thread.scrollWidth, thread.scrollHeight);
		} finally {
			effect.dispose();
		}
		if (!dataUrl) {
			alert("Failed to export to PNG. This might be caused by the size of the conversation. Please try to export a smaller conversation.");
			return false;
		}
		downloadUrl(getFileNameWithFormat(fileNameFormat, "png", { chatId: getChatIdFromUrl() || void 0 }), dataUrl);
		return true;
	}
	function contentToText(node) {
		const content = node.message?.content;
		if (!content) return "";
		return content.parts.map((part) => typeof part === "string" ? part : "[image]").join("\n");
	}
	function convertMessageToTavern(node) {
		if (!node.message || shouldSkipMessageInExport(node.message)) return null;
		const authorRole = node.message.author.role;
		const createTime = node.message.create_time || new Date().getTime() / 1e3;
		const text = contentToText(node);
		return {
			name: authorRole === "assistant" ? "DeepSeek" : "You",
			is_user: authorRole === "user",
			is_name: authorRole === "assistant",
			send_date: createTime,
			mes: text,
			swipes: [text],
			swipe_id: 0
		};
	}
	function convertToTavern(conversation) {
		return jsonlStringify([{
			user_name: "You",
			character_name: "DeepSeek"
		}, ...conversation.conversationNodes.map(convertMessageToTavern).filter(nonNullable)]);
	}
	function convertToOoba(conversation) {
		const pairs = [];
		const messages = conversation.conversationNodes.filter((node) => {
			return !!node.message && !shouldSkipMessageInExport(node.message);
		});
		let idx = 0;
		while (idx < messages.length) {
			const message = messages[idx];
			const nextMessage = messages[idx + 1];
			if (!message.message) {
				idx += 1;
				continue;
			}
			const role = message.message.author.role;
			const text = contentToText(message);
			const nextRole = nextMessage?.message?.author.role;
			const nextText = nextMessage ? contentToText(nextMessage) : "";
			if (role === "system") {
				if (text !== "") pairs.push(["<|BEGIN-VISIBLE-CHAT|>", text]);
				idx += 1;
				continue;
			}
			if (role === "user") {
				if (nextRole === "assistant") {
					pairs.push([text, nextText]);
					idx += 2;
					continue;
				} else if (nextRole === "user") {
					pairs.push([text, ""]);
					idx += 1;
					continue;
				}
				pairs.push([text, ""]);
				idx += 1;
				continue;
			}
			if (role === "assistant") {
				pairs.push(["", text]);
				idx += 1;
				continue;
			}
			idx += 1;
		}
		const oobaData = {
			internal: pairs,
			visible: JSON.parse(JSON.stringify(pairs))
		};
		if (oobaData.visible[0] && oobaData.visible[0][0] === "<|BEGIN-VISIBLE-CHAT|>") oobaData.visible[0][0] = "";
		return JSON.stringify(oobaData, null, 2);
	}
	async function exportToJson(fileNameFormat) {
		if (!checkIfConversationStarted()) {
			alert(i18n_default.t("Please start a conversation first"));
			return false;
		}
		const chatId = await getCurrentChatId();
		const rawConversation = await fetchConversation(chatId, false);
		await downloadFile(getFileNameWithFormat(fileNameFormat, "json", {
			title: processConversation(rawConversation).title,
			chatId
		}), "application/json", conversationToJson([rawConversation]));
		return true;
	}
	async function exportToTavern(fileNameFormat) {
		if (!checkIfConversationStarted()) {
			alert(i18n_default.t("Please start a conversation first"));
			return false;
		}
		const chatId = await getCurrentChatId();
		const conversation = processConversation(await fetchConversation(chatId, false));
		await downloadFile(getFileNameWithFormat(`${fileNameFormat}.tavern`, "jsonl", {
			title: conversation.title,
			chatId
		}), "application/json-lines", convertToTavern(conversation));
		return true;
	}
	async function exportToOoba(fileNameFormat) {
		if (!checkIfConversationStarted()) {
			alert(i18n_default.t("Please start a conversation first"));
			return false;
		}
		const chatId = await getCurrentChatId();
		const conversation = processConversation(await fetchConversation(chatId, false));
		await downloadFile(getFileNameWithFormat(`${fileNameFormat}.ooba`, "json", {
			title: conversation.title,
			chatId
		}), "application/json", convertToOoba(conversation));
		return true;
	}
	async function exportAllToOfficialJson(_fileNameFormat, apiConversations, _metaList, projectName, partIndex, totalParts) {
		const partInfo = partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0;
		const content = conversationToJson(apiConversations);
		return prepareDownload(buildJsonBatchFileName(projectName, partInfo), "application/json", content);
	}
	async function exportAllToJson(fileNameFormat, apiConversations, _metaList, projectName, partIndex, totalParts) {
		const zip = new jszip.default();
		const filenameMap = new Map();
		apiConversations.map((x) => ({
			conversation: processConversation(x),
			rawConversation: x
		})).forEach(({ conversation, rawConversation }) => {
			let fileName = getFileNameWithFormat(fileNameFormat, "json", {
				title: conversation.title,
				chatId: conversation.id,
				createTime: conversation.createTime,
				updateTime: conversation.updateTime
			});
			if (filenameMap.has(fileName)) {
				const count = filenameMap.get(fileName) ?? 1;
				filenameMap.set(fileName, count + 1);
				fileName = `${fileName.slice(0, -5)} (${count}).json`;
			} else filenameMap.set(fileName, 1);
			const content = conversationToJson(rawConversation);
			zip.file(fileName, content);
		});
		const blob = await zip.generateAsync({
			type: "blob",
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		});
		return prepareDownload(buildZipFileName("json", projectName, partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0), "application/zip", blob);
	}
	function conversationToJson(conversation) {
		return JSON.stringify(conversation);
	}
	async function exportToMarkdown(fileNameFormat, metaList) {
		if (!checkIfConversationStarted()) {
			alert(i18n_default.t("Please start a conversation first"));
			return false;
		}
		const chatId = await getCurrentChatId();
		const conversation = processConversation(await fetchConversation(chatId, true), { enableThinking: ScriptStorage.get("exporter:enable_thinking") ?? false });
		const markdown = conversationToMarkdown(conversation, metaList);
		await downloadFile(getFileNameWithFormat(fileNameFormat, "md", {
			title: conversation.title,
			chatId,
			createTime: conversation.createTime,
			updateTime: conversation.updateTime
		}), "text/markdown", standardizeLineBreaks(markdown));
		return true;
	}
	async function createMarkdownArchive(fileNameFormat, apiConversations, metaList) {
		const zip = new jszip.default();
		const filenameMap = new Map();
		const enableThinking = ScriptStorage.get("exporter:enable_thinking") ?? false;
		apiConversations.map((x) => processConversation(x, { enableThinking })).forEach((conversation) => {
			let fileName = getFileNameWithFormat(fileNameFormat, "md", {
				title: conversation.title,
				chatId: conversation.id,
				createTime: conversation.createTime,
				updateTime: conversation.updateTime
			});
			if (filenameMap.has(fileName)) {
				const count = filenameMap.get(fileName) ?? 1;
				filenameMap.set(fileName, count + 1);
				fileName = `${fileName.slice(0, -3)} (${count}).md`;
			} else filenameMap.set(fileName, 1);
			const content = conversationToMarkdown(conversation, metaList);
			zip.file(fileName, content);
		});
		return await zip.generateAsync({
			type: "blob",
			mimeType: "application/zip",
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		});
	}
	async function exportAllToMarkdown(fileNameFormat, apiConversations, metaList, projectName, partIndex, totalParts) {
		const blob = await createMarkdownArchive(fileNameFormat, apiConversations, metaList);
		return prepareDownload(buildZipFileName("markdown", projectName, partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0), "application/zip", blob);
	}
	function conversationToMarkdown(conversation, metaList) {
		const { id, title, model, modelSlug, createTime, updateTime, conversationNodes } = conversation;
		const source = `${baseUrl}/a/chat/s/${encodeURIComponent(id)}`;
		const _metaList = metaList?.filter((x) => !!x.name).map(({ name, value }) => {
			const val = value.replaceAll("{title}", title).replaceAll("{date}", dateStr()).replaceAll("{timestamp}", timestamp()).replaceAll("{source}", source).replaceAll("{model}", model).replaceAll("{model_name}", modelSlug).replaceAll("{create_time}", unixTimestampToISOString(createTime)).replaceAll("{update_time}", unixTimestampToISOString(updateTime));
			return `${quoteYamlScalar(name)}: ${quoteYamlScalar(val)}`;
		}) ?? [];
		const frontMatter = _metaList.length > 0 ? `---\n${_metaList.join("\n")}\n---\n\n` : "";
		const enableTimestamp = ScriptStorage.get("exporter:enable_timestamp") ?? false;
		const timeStampMarkdown = ScriptStorage.get("exporter:timestamp_markdown") ?? false;
		const timeStamp24H = ScriptStorage.get("exporter:timestamp_24h") ?? false;
		const enableSources = ScriptStorage.get("exporter:enable_sources") ?? true;
		const content = conversationNodes.map(({ message, thinking }) => {
			if (!message || !message.content) return null;
			if (shouldSkipMessageInExport(message)) return null;
			const timestamp = message?.create_time ?? "";
			const showTimestamp = enableTimestamp && timeStampMarkdown && timestamp;
			let timestampHtml = "";
			if (showTimestamp) {
				const date = new Date(timestamp * 1e3);
				const conversationTime = date.toLocaleTimeString("en-US", {
					hour: "2-digit",
					minute: "2-digit",
					hour12: !timeStamp24H
				});
				timestampHtml = `<time datetime="${escapeHtmlAttribute(date.toISOString())}" title="${escapeHtmlAttribute(date.toLocaleString())}">${escapeHtmlAttribute(conversationTime)}</time>\n\n`;
			}
			const author = transformAuthor$1(message.author);
			const thinkingBlock = thinking ? formatThinkingMarkdown(thinking) : "";
			const postSteps = [];
			if (message.author.role === "assistant") {
				postSteps.push(normalizeAssistantMarkdown);
				postSteps.push((input) => transformContentReferences(input, message.metadata, {
					includeSourceList: enableSources,
					sourceListLabel: i18n_default.t("Sources")
				}));
			}
			const postProcess = (input) => postSteps.reduce((acc, fn) => fn(acc), input);
			const content = transformContent$1(message.content, postProcess);
			return `#### ${author}:\n${timestampHtml}${thinkingBlock}${content}`;
		}).filter(Boolean).join("\n\n");
		return `${frontMatter}# ${escapeMarkdownHeading(title)}\n\n${content}`;
	}
	function normalizeAssistantMarkdown(input) {
		const protectedParts = [];
		const protect = (value) => {
			const token = `╬DEEPSEEK${protectedParts.length}╬`;
			protectedParts.push(value);
			return token;
		};
		input = input.replace(/(?:^|\n)(?:```|~~~)[^\n]*\n[\s\S]*?\n(?:```|~~~)(?=\n|$)/g, protect);
		input = input.replace(/\\\[([\s\S]*?)\\\]/g, (_, formula) => protect(`$$${formula}$$`)).replace(/\\\(([^\n]*?)\\\)/g, (_, formula) => protect(`$${formula}$`));
		let transformed = toMarkdown(fromMarkdown(input));
		transformed = transformed.replace(/╬DEEPSEEK(\d+)╬/g, (_, index) => protectedParts[+index] ?? "");
		return transformed;
	}
	function quoteYamlScalar(value) {
		return JSON.stringify(value);
	}
	function escapeHtmlAttribute(value) {
		return value.replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
	}
	function escapeMarkdownHeading(value) {
		return value.replaceAll("\\", "\\\\").replaceAll("\n", " ").replaceAll("\r", " ").replaceAll(/([`*_[\]<>#])/g, "\\$1");
	}
	function transformAuthor$1(author) {
		switch (author.role) {
			case "assistant": return "DeepSeek";
			case "user": return "You";
			case "tool": return `Plugin${author.name ? ` (${author.name})` : ""}`;
			default: return author.role;
		}
	}
	function transformContent$1(content, postProcess) {
		switch (content.content_type) {
			case "text": return postProcess(content.parts?.join("\n") || "");
			case "multimodal_text": return content.parts?.map((part) => {
				if (typeof part === "string") return postProcess(part);
				return `![image](${part.asset_pointer})`;
			}).join("\n") || "";
		}
	}
	function formatThinkingMarkdown(thinking) {
		const duration = thinking.durationSeconds == null ? null : formatDurationSeconds(thinking.durationSeconds);
		const durationLabel = duration == null ? i18n_default.t("Thinking") : i18n_default.t("Thought for {{duration}} seconds", { duration });
		const parts = [];
		if (thinking.activities?.length) parts.push(thinking.activities.map((a) => `- ${a}`).join("\n"));
		const thoughts = thinking.thoughts.map((t) => t.content || t.summary).filter(Boolean).map((text) => normalizeAssistantMarkdown(text).trim()).join("\n\n");
		if (thoughts) parts.push(thoughts);
		const body = parts.join("\n\n");
		if (!body) return "";
		return `<details>\n<summary>${durationLabel}</summary>\n\n${body}\n\n</details>\n\n`;
	}
	async function copyToClipboard(text) {
		try {
			if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.style.position = "fixed";
			textarea.style.opacity = "0";
			try {
				document.body.appendChild(textarea);
				textarea.focus();
				textarea.select();
				return document.execCommand("copy");
			} finally {
				textarea.remove();
			}
		}
	}
	async function exportToText() {
		if (!checkIfConversationStarted()) {
			alert(i18n_default.t("Please start a conversation first"));
			return false;
		}
		const { conversationNodes } = processConversation(await fetchConversation(await getCurrentChatId(), false));
		return await copyToClipboard(standardizeLineBreaks(conversationNodes.map(({ message }) => transformMessage(message)).filter(Boolean).join("\n\n")));
	}
	var LatexRegex = /(\s\$\$.+\$\$\s|\s\$.+\$\s|\\\[.+\\\]|\\\(.+\\\))|(^\$$[\S\s]+^\$$)|(^\$\$[\S\s]+^\$\$$)/gm;
	function transformMessage(message) {
		if (!message || !message.content) return null;
		if (shouldSkipMessageInExport(message)) return null;
		const author = transformAuthor(message.author);
		let content = transformContent(message.content);
		const matches = content.match(LatexRegex);
		if (matches) {
			let index = 0;
			content = content.replace(LatexRegex, () => {
				return `╬${index++}╬`;
			});
		}
		if (message.author.role === "assistant") content = transformContentReferences(content, message.metadata, {
			output: "text",
			inlineReferenceMode: "alt",
			includeSourceList: false
		});
		if (message.author.role === "assistant" && content) content = reformatContent(content);
		if (matches) content = content.replace(/╬(\d+)╬/g, (_, index) => {
			return matches[+index];
		});
		return `${author}:\n${content}`;
	}
	function transformContent(content) {
		switch (content.content_type) {
			case "text": return content.parts?.join("\n") || "";
			case "multimodal_text": return content.parts?.map((part) => {
				if (typeof part === "string") return part;
				return "[image]";
			}).join("\n") || "";
		}
	}
	function reformatContent(input) {
		const root = fromMarkdown(input);
		flatMap(root, (item) => {
			if (item.type === "strong") return item.children;
			if (item.type === "emphasis") return item.children;
			return [item];
		});
		const result = toMarkdown(root);
		if (result.startsWith("\\[") && input.startsWith("[")) return result.slice(1);
		return result;
	}
	function transformAuthor(author) {
		switch (author.role) {
			case "assistant": return "DeepSeek";
			case "user": return "You";
			case "tool": return `Plugin${author.name ? ` (${author.name})` : ""}`;
			default: return author.role;
		}
	}
	init_compat_module();
	function useWindowResize(selector) {
		return C$4(subscribe$1, selector);
	}
	function subscribe$1(callback) {
		window.addEventListener("resize", callback);
		return () => window.removeEventListener("resize", callback);
	}
	function isRecord(value) {
		return value != null && typeof value === "object" && !Array.isArray(value);
	}
	function isConversation(value) {
		if (!isRecord(value) || !isRecord(value.chat_session) || !Array.isArray(value.chat_messages)) return false;
		const session = value.chat_session;
		const id = value.id ?? session.id;
		if (typeof id !== "string" && typeof id !== "number" || String(id).trim() === "") return false;
		return value.chat_messages.every((message) => isRecord(message) && (typeof message.message_id === "string" || typeof message.message_id === "number") && typeof message.role === "string");
	}
	function parseConversationExport(input) {
		const value = JSON.parse(input);
		if (!Array.isArray(value) || value.length === 0 || !value.every(isConversation)) throw new TypeError("Invalid DeepSeek conversation export");
		return value.map((conversation) => {
			const session = conversation.chat_session;
			const id = String(conversation.id ?? session.id);
			return {
				...conversation,
				id,
				title: typeof conversation.title === "string" ? conversation.title : session.title?.trim() || "DeepSeek Conversation",
				create_time: typeof conversation.create_time === "number" ? conversation.create_time : 0,
				update_time: typeof conversation.update_time === "number" ? conversation.update_time : 0
			};
		});
	}
	function mitt_default(n) {
		return {
			all: n = n || new Map(),
			on: function(t, e) {
				var i = n.get(t);
				i ? i.push(e) : n.set(t, [e]);
			},
			off: function(t, e) {
				var i = n.get(t);
				i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
			},
			emit: function(t, e) {
				var i = n.get(t);
				i && i.slice().map(function(n) {
					n(e);
				}), (i = n.get("*")) && i.slice().map(function(n) {
					n(t, e);
				});
			}
		};
	}
	var MAX_RETRIES = 5;
	var MAX_GLOBAL_PAUSES = 5;
	var DEFAULT_429_PAUSE_MS = 6e4;
	var RequestQueue = class {
		minBackoff;
		maxBackoff;
		eventEmitter = mitt_default();
		queue = [];
		results = [];
		failures = [];
		status = "IDLE";
		backoffMultiplier = 2;
		backoff;
		total = 0;
		completed = 0;
		pauseUntil = 0;
		globalPauses = 0;
		generation = 0;
		constructor(minBackoff, maxBackoff) {
			this.minBackoff = minBackoff;
			this.maxBackoff = maxBackoff;
			this.backoff = minBackoff;
		}
		add(requestObject) {
			this.queue.push({
				...requestObject,
				retries: 0
			});
		}
		start() {
			if (this.status !== "IDLE" || this.queue.length === 0) return false;
			this.status = "IN_PROGRESS";
			this.total = this.queue.length;
			const generation = ++this.generation;
			this.process(generation);
			return true;
		}
		cancel() {
			if (this.status !== "IN_PROGRESS") return false;
			this.status = "STOPPED";
			this.generation++;
			this.emitDone("cancelled");
			return true;
		}
		clear() {
			this.generation++;
			this.queue = [];
			this.results = [];
			this.failures = [];
			this.status = "IDLE";
			this.backoff = this.minBackoff;
			this.pauseUntil = 0;
			this.globalPauses = 0;
			this.total = 0;
			this.completed = 0;
		}
		on(event, fn) {
			this.eventEmitter.on(event, fn);
			return () => this.eventEmitter.off(event, fn);
		}
		isActive(generation) {
			return this.status === "IN_PROGRESS" && generation === this.generation;
		}
		async process(generation) {
			while (this.isActive(generation)) {
				if (this.queue.length === 0) {
					this.finish(this.failures.length > 0 ? "failed" : "completed");
					return;
				}
				const remaining = this.pauseUntil - Date.now();
				if (remaining > 0) {
					this.progress(this.queue[0].name, "rate_limited", Math.ceil(remaining / 1e3));
					await sleep(remaining);
					if (!this.isActive(generation)) return;
					this.pauseUntil = 0;
				}
				const requestObject = this.queue.shift();
				if (!requestObject) continue;
				const { name, request } = requestObject;
				let waitMs = this.backoff;
				try {
					this.progress(name, "processing");
					const result = await request();
					if (!this.isActive(generation)) return;
					this.results.push(result);
					this.completed++;
					this.progress(name, "processing");
					this.backoff = this.minBackoff;
				} catch (error) {
					if (!this.isActive(generation)) return;
					if (error instanceof RateLimitError) {
						this.globalPauses++;
						if (this.globalPauses > MAX_GLOBAL_PAUSES) {
							this.failures.push({
								name,
								error
							});
							console.warn("[DeepSeek Exporter] Queue failed: API rate limit did not clear after", MAX_GLOBAL_PAUSES, "pauses");
							this.finish("failed");
							return;
						}
						const pauseMs = Math.max(error.retryAfterMs, DEFAULT_429_PAUSE_MS * this.globalPauses);
						this.pauseUntil = Date.now() + pauseMs;
						this.progress(name, "rate_limited", Math.round(pauseMs / 1e3));
						console.warn(`[DeepSeek Exporter] Rate limited (429). Pausing queue for ${Math.round(pauseMs / 1e3)}s (pause #${this.globalPauses})`);
						this.queue.unshift(requestObject);
						waitMs = 0;
					} else {
						console.error(`[DeepSeek Exporter] "${name}" failed:`, error);
						requestObject.retries++;
						if (requestObject.retries > MAX_RETRIES) {
							this.failures.push({
								name,
								error
							});
							this.completed++;
							this.progress(name, "retrying");
							this.backoff = this.minBackoff;
							waitMs = 0;
						} else {
							this.backoff = Math.min(this.backoff * this.backoffMultiplier, this.maxBackoff);
							waitMs = this.backoff;
							this.progress(name, "retrying");
							this.queue.unshift(requestObject);
						}
					}
				}
				await sleep(waitMs);
			}
		}
		progress(name, status, rateLimitWaitSecs) {
			this.eventEmitter.emit("progress", {
				total: this.total,
				completed: this.completed,
				currentName: name,
				currentStatus: status,
				rateLimitWaitSecs
			});
		}
		finish(status) {
			if (this.status !== "IN_PROGRESS") return;
			this.status = "COMPLETED";
			this.emitDone(status);
		}
		emitDone(status) {
			this.eventEmitter.emit("done", {
				status,
				results: [...this.results],
				failures: [...this.failures]
			});
		}
	};
	function FileCode() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "w-4 h-4 shrink-0",
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", { d: "M14 3v4a1 1 0 0 0 1 1h4" }),
				u$3("path", { d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" }),
				u$3("path", { d: "M10 13l-1 2l1 2" }),
				u$3("path", { d: "M14 13l1 2l-1 2" })
			]
		});
	}
	function IconCamera() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "w-4 h-4 shrink-0",
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", { d: "M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" }),
				u$3("path", { d: "M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" })
			]
		});
	}
	function IconMarkdown() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "w-4 h-4 shrink-0",
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", { d: "M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" }),
				u$3("path", { d: "M7 15v-6l2 2l2 -2v6" }),
				u$3("path", { d: "M14 13l2 2l2 -2m-2 2v-6" })
			]
		});
	}
	function IconCopy() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "w-4 h-4 shrink-0",
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", { d: "M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" }),
				u$3("path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" })
			]
		});
	}
	function IconArrowRightFromBracket() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "w-4 h-4 shrink-0",
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", { d: "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" }),
				u$3("path", { d: "M9 12h12l-3 -3" }),
				u$3("path", { d: "M18 15l3 -3" })
			]
		});
	}
	function IconSetting() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 15 15",
			className: "w-4 h-4 shrink-0",
			stroke: "currentColor",
			"stroke-width": "0.5",
			children: u$3("path", {
				d: "M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",
				fill: "currentColor",
				fillRule: "evenodd",
				clipRule: "evenodd"
			})
		});
	}
	function IconCross() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 15 15",
			width: "15",
			height: "15",
			children: u$3("path", {
				d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
				fill: "currentColor",
				fillRule: "evenodd",
				clipRule: "evenodd"
			})
		});
	}
	function IconJSON() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "w-4 h-4 shrink-0",
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", { d: "M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" }),
				u$3("path", { d: "M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" })
			]
		});
	}
	function IconZip() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "w-4 h-4 shrink-0",
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", { d: "M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" }),
				u$3("path", { d: "M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z" }),
				u$3("path", { d: "M11 5l-1 0" }),
				u$3("path", { d: "M13 7l-1 0" }),
				u$3("path", { d: "M11 9l-1 0" }),
				u$3("path", { d: "M13 11l-1 0" }),
				u$3("path", { d: "M11 13l-1 0" }),
				u$3("path", { d: "M13 15l-1 0" })
			]
		});
	}
	function IconLoading({ className, style }) {
		return u$3("span", {
			style: { animation: "1.4s linear 0s infinite normal none running rotate" },
			children: u$3("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "22 22 44 44",
				className,
				style: {
					animation: "1.4s ease-in-out 0s infinite normal none running circularDash",
					...style
				},
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				children: u$3("circle", {
					cx: "44",
					cy: "44",
					r: "20.2",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "3.6"
				})
			})
		});
	}
	function IconCheckBox() {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: {
				width: "1em",
				height: "1em",
				display: "inline-block"
			},
			fill: "currentColor",
			children: u$3("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })
		});
	}
	function IconCheckBoxChecked({ className }) {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className,
			style: {
				width: "1em",
				height: "1em",
				display: "inline-block"
			},
			fill: "currentColor",
			children: u$3("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
		});
	}
	function IconTrash({ className, style }) {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className,
			style,
			fill: "none",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", {
					d: "M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z",
					"stroke-width": "0",
					fill: "currentColor"
				}),
				u$3("path", {
					d: "M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z",
					"stroke-width": "0",
					fill: "currentColor"
				})
			]
		});
	}
	function IconUpload({ className, style }) {
		return u$3("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className,
			style,
			fill: "none",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			children: [
				u$3("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				u$3("path", {
					stroke: "currentColor",
					d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
				}),
				u$3("path", {
					stroke: "currentColor",
					d: "M7 9l5 -5l5 5"
				}),
				u$3("path", {
					stroke: "currentColor",
					d: "M12 4l0 12"
				})
			]
		});
	}
	init_hooks_module();
	var CheckBox = ({ className, checked = false, disabled, label, onCheckedChange }) => {
		const [isChecked, setChecked] = d$1(checked);
		const onChange = (e) => {
			const newValue = e.currentTarget.checked;
			setChecked(newValue);
			onCheckedChange?.(newValue);
		};
		h$1(() => {
			setChecked(checked);
		}, [checked]);
		return u$3("label", {
			className: `CheckBoxLabel ${className ?? ""}`,
			"aria-disabled": disabled,
			children: [u$3("span", {
				className: "IconWrapper",
				children: [u$3("input", {
					type: "checkbox",
					checked: isChecked,
					onChange,
					disabled
				}), isChecked ? u$3(IconCheckBoxChecked, {}) : u$3(IconCheckBox, {})]
			}), u$3("span", {
				className: "LabelText",
				children: label
			})]
		});
	};
	init_hooks_module();
	function useGMStorage(key, initialValue) {
		const [storedValue, setStoredValue] = d$1(() => ScriptStorage.get(key) ?? initialValue);
		return [storedValue, q$1((value) => {
			setStoredValue(value);
			ScriptStorage.set(key, value);
		}, [key])];
	}
	init_compat_module();
	init_hooks_module();
	var defaultFormat = "DeepSeek-{title}";
	var defaultExportAllLimit = 1e3;
	var defaultExportMetaList = [{
		name: "title",
		value: "{title}"
	}, {
		name: "source",
		value: "{source}"
	}];
	var SettingContext = X$1({
		format: defaultFormat,
		setFormat: (_) => {},
		enableTimestamp: false,
		setEnableTimestamp: (_) => {},
		timeStamp24H: false,
		setTimeStamp24H: (_) => {},
		enableTimestampHTML: false,
		setEnableTimestampHTML: (_) => {},
		enableTimestampMarkdown: false,
		setEnableTimestampMarkdown: (_) => {},
		enableMeta: false,
		setEnableMeta: (_) => {},
		exportMetaList: defaultExportMetaList,
		setExportMetaList: (_) => {},
		enableThinking: false,
		setEnableThinking: (_) => {},
		enableSources: true,
		setEnableSources: (_) => {},
		exportAllLimit: defaultExportAllLimit,
		setExportAllLimit: (_) => {},
		resetDefault: () => {}
	});
	var SettingProvider = ({ children }) => {
		const [format, setFormat] = useGMStorage(KEY_FILENAME_FORMAT, defaultFormat);
		const [enableTimestamp, setEnableTimestamp] = useGMStorage(KEY_TIMESTAMP_ENABLED, false);
		const [timeStamp24H, setTimeStamp24H] = useGMStorage(KEY_TIMESTAMP_24H, false);
		const [enableTimestampHTML, setEnableTimestampHTML] = useGMStorage(KEY_TIMESTAMP_HTML, false);
		const [enableTimestampMarkdown, setEnableTimestampMarkdown] = useGMStorage(KEY_TIMESTAMP_MARKDOWN, false);
		const [enableMeta, setEnableMeta] = useGMStorage(KEY_META_ENABLED, false);
		const [exportMetaList, setExportMetaList] = useGMStorage(KEY_META_LIST, defaultExportMetaList);
		const [enableThinking, setEnableThinking] = useGMStorage(KEY_THINKING_ENABLED, false);
		const [enableSources, setEnableSources] = useGMStorage(KEY_SOURCES_ENABLED, true);
		const [exportAllLimit, setExportAllLimit] = useGMStorage(KEY_EXPORT_ALL_LIMIT, defaultExportAllLimit);
		const resetDefault = q$1(() => {
			setFormat(defaultFormat);
			setEnableTimestamp(false);
			setEnableMeta(false);
			setExportMetaList(defaultExportMetaList);
			setEnableThinking(false);
			setEnableSources(true);
			setExportAllLimit(defaultExportAllLimit);
		}, [
			setFormat,
			setEnableTimestamp,
			setEnableMeta,
			setExportMetaList,
			setEnableThinking,
			setEnableSources,
			setExportAllLimit
		]);
		const value = T$1(() => ({
			format,
			setFormat,
			enableTimestamp,
			setEnableTimestamp,
			timeStamp24H,
			setTimeStamp24H,
			enableTimestampHTML,
			setEnableTimestampHTML,
			enableTimestampMarkdown,
			setEnableTimestampMarkdown,
			enableMeta,
			setEnableMeta,
			exportMetaList,
			setExportMetaList,
			enableThinking,
			setEnableThinking,
			enableSources,
			setEnableSources,
			exportAllLimit,
			setExportAllLimit,
			resetDefault
		}), [
			format,
			setFormat,
			enableTimestamp,
			setEnableTimestamp,
			timeStamp24H,
			setTimeStamp24H,
			enableTimestampHTML,
			setEnableTimestampHTML,
			enableTimestampMarkdown,
			setEnableTimestampMarkdown,
			enableMeta,
			setEnableMeta,
			exportMetaList,
			setExportMetaList,
			enableThinking,
			setEnableThinking,
			enableSources,
			setEnableSources,
			exportAllLimit,
			setExportAllLimit,
			resetDefault
		]);
		return u$3(SettingContext.Provider, {
			value,
			children
		});
	};
	var useSettingContext = () => x$1(SettingContext);
	init_hooks_module();
	var exportingRef = { current: false };
	function toMs(time) {
		if (time == null) return 0;
		if (typeof time === "number") return time * 1e3;
		return new Date(time).getTime();
	}
	function chunkArray(arr, size) {
		const result = [];
		for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
		return result;
	}
	function formatConvDate(time, todayLabel, yesterdayLabel) {
		if (!time) return "—";
		const ms = typeof time === "number" ? time * 1e3 : new Date(time).getTime();
		if (Number.isNaN(ms) || ms === 0) return "—";
		const d = new Date(ms);
		const diffDays = Math.floor((Date.now() - ms) / 864e5);
		if (diffDays === 0) return todayLabel;
		if (diffDays === 1) return yesterdayLabel;
		return d.toLocaleDateString(void 0, {
			year: "numeric",
			month: "short",
			day: "numeric"
		});
	}
	function textSearch(title, query) {
		const q = query.trim();
		if (!q) return true;
		const lower = q.toLowerCase();
		if (!lower.includes("*") && !lower.includes("?")) return title.toLowerCase().includes(lower);
		const regexStr = lower.replace(/[\\\^$.|+()[\]{}]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".");
		try {
			return new RegExp(regexStr).test(title.toLowerCase());
		} catch {
			return title.toLowerCase().includes(lower);
		}
	}
	var ConversationSelect = ({ conversations, selected, setSelected, disabled, loading, error }) => {
		const { t } = useTranslation();
		const [query, setQuery] = d$1("");
		const lastClickedIndex = A$2(-1);
		const [sortField, setSortField] = d$1("create_time");
		const [sortDir, setSortDir] = d$1("desc");
		const filtered = T$1(() => {
			let result = conversations;
			const q = query.trim();
			if (q) result = result.filter((c) => textSearch(c.title, q));
			const dir = sortDir === "asc" ? 1 : -1;
			return [...result].sort((a, b) => {
				if (sortField === "title") return dir * (a.title ?? "").localeCompare(b.title ?? "");
				const aMs = toMs(sortField === "update_time" ? a.update_time : a.create_time);
				const bMs = toMs(sortField === "update_time" ? b.update_time : b.create_time);
				return dir * (aMs - bMs);
			});
		}, [
			conversations,
			query,
			sortField,
			sortDir
		]);
		const allFilteredSelected = filtered.length > 0 && filtered.every((c) => selected.some((x) => x.id === c.id));
		return u$3(S, { children: [
			u$3("input", {
				type: "search",
				className: "SelectSearch",
				placeholder: t("Search"),
				value: query,
				disabled,
				onInput: (e) => {
					const val = e.currentTarget.value;
					lastClickedIndex.current = -1;
					setQuery(val);
				}
			}),
			u$3("div", {
				className: "SelectToolbar",
				children: [u$3(CheckBox, {
					label: t("Select All"),
					disabled,
					checked: allFilteredSelected,
					onCheckedChange: (checked) => {
						lastClickedIndex.current = -1;
						setSelected(checked ? filtered : []);
					}
				}), u$3("div", {
					className: "flex items-center gap-3 ml-auto flex-wrap",
					children: [
						loading && conversations.length > 0 && u$3("span", {
							className: "flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400",
							children: [
								u$3(IconLoading, { className: "w-3 h-3" }),
								t("Loading"),
								"... (",
								conversations.length,
								")"
							]
						}),
						u$3("span", {
							className: "text-xs text-gray-400 dark:text-gray-500",
							children: t("Shift Click Hint")
						}),
						u$3("span", {
							className: "text-sm font-medium tabular-nums text-gray-500 dark:text-gray-400",
							children: t("Selected of total", {
								selected: selected.length,
								total: filtered.length
							})
						})
					]
				})]
			}),
			u$3("div", {
				className: "SelectListHeader",
				children: [
					u$3("button", {
						type: "button",
						className: `SelectListHeaderCell SelectListHeaderCellTitle${sortField === "title" ? " SelectListHeaderCellActive" : ""}`,
						onClick: () => {
							if (sortField === "title") setSortDir((d) => d === "asc" ? "desc" : "asc");
							else {
								setSortField("title");
								setSortDir("asc");
							}
						},
						children: [
							t("Title"),
							" ",
							sortField === "title" ? sortDir === "asc" ? "↑" : "↓" : "↕"
						]
					}),
					u$3("button", {
						type: "button",
						className: `SelectListHeaderCell${sortField === "create_time" ? " SelectListHeaderCellActive" : ""}`,
						onClick: () => {
							if (sortField === "create_time") setSortDir((d) => d === "asc" ? "desc" : "asc");
							else {
								setSortField("create_time");
								setSortDir("desc");
							}
						},
						children: [
							t("Created"),
							" ",
							sortField === "create_time" ? sortDir === "asc" ? "↑" : "↓" : "↕"
						]
					}),
					u$3("button", {
						type: "button",
						className: `SelectListHeaderCell${sortField === "update_time" ? " SelectListHeaderCellActive" : ""}`,
						onClick: () => {
							if (sortField === "update_time") setSortDir((d) => d === "asc" ? "desc" : "asc");
							else {
								setSortField("update_time");
								setSortDir("desc");
							}
						},
						children: [
							t("Updated"),
							" ",
							sortField === "update_time" ? sortDir === "asc" ? "↑" : "↓" : "↕"
						]
					})
				]
			}),
			u$3("ul", {
				className: "SelectList",
				children: [
					loading && conversations.length === 0 && u$3("li", {
						className: "SelectItem",
						children: [t("Loading"), "..."]
					}),
					error && u$3("li", {
						className: "SelectItem",
						children: [
							t("Error"),
							":",
							" ",
							error
						]
					}),
					filtered.map((c, index) => {
						const isSelected = selected.some((x) => x.id === c.id);
						return u$3("li", {
							className: "SelectItem",
							onClickCapture: (e) => {
								if (disabled) return;
								if (e.shiftKey && lastClickedIndex.current !== -1) {
									e.preventDefault();
									const start = Math.min(lastClickedIndex.current, index);
									const end = Math.max(lastClickedIndex.current, index);
									const rangeItems = filtered.slice(start, end + 1);
									const newSelected = [...selected];
									for (const item of rangeItems) if (!newSelected.some((x) => x.id === item.id)) newSelected.push(item);
									setSelected(newSelected);
									return;
								}
								lastClickedIndex.current = index;
							},
							children: [
								u$3(CheckBox, {
									label: c.title,
									disabled,
									checked: isSelected,
									onCheckedChange: (checked) => {
										setSelected(checked ? [...selected, c] : selected.filter((x) => x.id !== c.id));
									}
								}),
								c.is_starred && u$3("span", {
									title: t("Starred"),
									style: {
										color: "#f59e0b",
										flexShrink: 0
									},
									children: "★"
								}),
								u$3("span", {
									className: `SelectItemMeta${sortField === "create_time" ? " SelectItemMetaActive" : ""}`,
									title: `${t("Created")}: ${c.create_time ?? "—"}`,
									children: formatConvDate(c.create_time, t("Today"), t("Yesterday"))
								}),
								u$3("span", {
									className: `SelectItemMeta${sortField === "update_time" ? " SelectItemMetaActive" : ""}`,
									title: `${t("Updated")}: ${c.update_time ?? "—"}`,
									children: formatConvDate(c.update_time, t("Today"), t("Yesterday"))
								})
							]
						}, c.id);
					}),
					!loading && !error && filtered.length === 0 && conversations.length > 0 && u$3("li", {
						className: "SelectItem text-gray-400 dark:text-gray-500",
						children: t("No results")
					})
				]
			})
		] });
	};
	var DialogContent = ({ format }) => {
		const { t } = useTranslation();
		const { enableMeta, exportMetaList, exportAllLimit } = useSettingContext();
		const metaList = T$1(() => enableMeta ? exportMetaList : [], [enableMeta, exportMetaList]);
		const exportAllOptions = T$1(() => [
			{
				label: "Markdown",
				callback: exportAllToMarkdown
			},
			{
				label: "HTML",
				callback: exportAllToHtml
			},
			{
				label: "JSON",
				callback: exportAllToOfficialJson
			},
			{
				label: "JSON (ZIP)",
				callback: exportAllToJson
			}
		], []);
		const fileInputRef = A$2(null);
		const [exportSource, setExportSource] = d$1("API");
		const [apiConversations, setApiConversations] = d$1([]);
		const [localConversations, setLocalConversations] = d$1([]);
		const conversations = exportSource === "API" ? apiConversations : localConversations;
		const [loading, setLoading] = d$1(false);
		const [error, setError] = d$1("");
		const [operationError, setOperationError] = d$1("");
		const [processing, setProcessing] = d$1(false);
		const [pendingDownloads, setPendingDownloads] = d$1([]);
		const [downloadSummary, setDownloadSummary] = d$1({
			prepared: 0,
			total: 0
		});
		const [selected, setSelected] = d$1([]);
		const [exportType, setExportType] = d$1(exportAllOptions[0].label);
		const disabled = processing || selected.length === 0;
		const [hasMore, setHasMore] = d$1(false);
		const [loadingMore, setLoadingMore] = d$1(false);
		const [totalAvailable, setTotalAvailable] = d$1(null);
		const requestQueue = T$1(() => new RequestQueue(200, 1600), []);
		const deleteQueue = T$1(() => new RequestQueue(200, 1600), []);
		const [progress, setProgress] = d$1({
			total: 0,
			completed: 0,
			currentName: "",
			currentStatus: "",
			rateLimitWaitSecs: void 0,
			batchIndex: 0,
			totalBatches: 0
		});
		const pendingBatchesRef = A$2([]);
		const batchIndexRef = A$2(0);
		const totalBatchesRef = A$2(0);
		const selectedTotalRef = A$2(0);
		const activeOperationRef = A$2(null);
		const localCancelRef = A$2(false);
		const fetchGenRef = A$2(0);
		const keepPreparedDownload = q$1((download) => {
			setPendingDownloads((prev) => [...prev, download]);
			setDownloadSummary((prev) => ({
				...prev,
				prepared: prev.prepared + 1
			}));
		}, []);
		const downloadPendingFile = q$1((download) => {
			triggerBrowserDownload(download);
			setPendingDownloads((prev) => prev.filter((item) => item !== download));
		}, []);
		const onUpload = q$1((e) => {
			const input = e.currentTarget;
			const file = input.files?.[0];
			if (!file) return;
			const fileReader = new FileReader();
			fileReader.onload = () => {
				try {
					const data = parseConversationExport(String(fileReader.result ?? ""));
					setSelected([]);
					setError("");
					setOperationError("");
					setExportSource("Local");
					setLocalConversations(data);
				} catch (error) {
					console.error("[DeepSeek Exporter] Invalid import file:", error);
					alert(t("Invalid File Format"));
				} finally {
					input.value = "";
				}
			};
			fileReader.onerror = () => {
				input.value = "";
				alert(t("Invalid File Format"));
			};
			fileReader.readAsText(file);
		}, [t]);
		const startApiBatch = q$1((chunk) => {
			requestQueue.clear();
			chunk.forEach(({ id, title }) => {
				requestQueue.add({
					name: title,
					request: () => fetchConversation(id, exportType !== "JSON")
				});
			});
			if (!requestQueue.start()) throw new Error("Unable to start export queue");
		}, [requestQueue, exportType]);
		h$1(() => {
			const off = requestQueue.on("progress", (prog) => {
				const completed = batchIndexRef.current * 100 + prog.completed;
				setProcessing(true);
				setProgress({
					...prog,
					rateLimitWaitSecs: prog.rateLimitWaitSecs,
					batchIndex: batchIndexRef.current,
					totalBatches: totalBatchesRef.current,
					completed: Math.min(selectedTotalRef.current, completed),
					total: selectedTotalRef.current
				});
			});
			return () => off();
		}, [requestQueue]);
		h$1(() => {
			const off = deleteQueue.on("progress", (prog) => {
				setProcessing(true);
				setProgress({
					...prog,
					rateLimitWaitSecs: prog.rateLimitWaitSecs,
					batchIndex: 0,
					totalBatches: 0
				});
			});
			return () => off();
		}, [deleteQueue]);
		h$1(() => {
			const off = requestQueue.on("done", (outcome) => {
				(async () => {
					if (outcome.status === "cancelled") {
						setProcessing(false);
						exportingRef.current = false;
						activeOperationRef.current = null;
						return;
					}
					if (outcome.status === "failed") {
						const fetched = batchIndexRef.current * 100 + outcome.results.length;
						setOperationError(`Export stopped after ${fetched} of ${selectedTotalRef.current} conversations were fetched. No incomplete download was created; ${outcome.failures.length} request(s) failed.`);
						setProcessing(false);
						exportingRef.current = false;
						activeOperationRef.current = null;
						return;
					}
					let startedNextBatch = false;
					try {
						const batchIdx = batchIndexRef.current;
						const totalBatches = totalBatchesRef.current;
						const partIndex = batchIdx + 1;
						const callback = exportAllOptions.find((o) => o.label === exportType)?.callback;
						if (!callback) throw new Error(`Unknown export type: ${exportType}`);
						setProgress((prev) => ({
							...prev,
							currentName: `${t("Export")} ${exportType === "JSON" ? "JSON" : "ZIP"}…`,
							currentStatus: "packaging"
						}));
						const downloadResult = await callback(format, outcome.results, metaList, void 0, partIndex, totalBatches);
						keepPreparedDownload(downloadResult);
						if (partIndex < totalBatches) {
							await sleep(400);
							if (activeOperationRef.current !== "api-export") return;
							batchIndexRef.current++;
							const nextChunk = pendingBatchesRef.current[batchIndexRef.current];
							if (!nextChunk) throw new Error("The next export batch is missing");
							startApiBatch(nextChunk);
							startedNextBatch = true;
						}
					} catch (error) {
						console.error("[DeepSeek Exporter] Batch export failed:", error);
						setOperationError(error instanceof Error ? error.message : String(error));
					} finally {
						if (!startedNextBatch) {
							setProcessing(false);
							exportingRef.current = false;
							activeOperationRef.current = null;
						}
					}
				})();
			});
			return () => off();
		}, [
			requestQueue,
			exportAllOptions,
			exportType,
			format,
			metaList,
			startApiBatch,
			t,
			keepPreparedDownload
		]);
		h$1(() => {
			const off = deleteQueue.on("done", (outcome) => {
				const deletedIds = new Set(outcome.results);
				if (deletedIds.size > 0) {
					setApiConversations((prev) => prev.filter((c) => !deletedIds.has(c.id)));
					setSelected((prev) => prev.filter((c) => !deletedIds.has(c.id)));
				}
				if (outcome.status === "completed") alert(t("Conversation Deleted Message"));
				else if (outcome.status === "failed") setOperationError(`Deleted ${deletedIds.size} of ${selectedTotalRef.current} conversations before the operation stopped.`);
				setProcessing(false);
				exportingRef.current = false;
				activeOperationRef.current = null;
			});
			return () => off();
		}, [deleteQueue, t]);
		const cancelExport = q$1(() => {
			if (activeOperationRef.current === "api-export") {
				activeOperationRef.current = null;
				if (!requestQueue.cancel()) {
					setProcessing(false);
					exportingRef.current = false;
				}
			} else if (activeOperationRef.current === "delete") deleteQueue.cancel();
			else if (activeOperationRef.current === "local-export") localCancelRef.current = true;
		}, [requestQueue, deleteQueue]);
		const exportAllFromApi = q$1(() => {
			if (disabled) return;
			const chunks = chunkArray(selected, 100);
			pendingBatchesRef.current = chunks;
			batchIndexRef.current = 0;
			totalBatchesRef.current = chunks.length;
			selectedTotalRef.current = selected.length;
			activeOperationRef.current = "api-export";
			exportingRef.current = true;
			setOperationError("");
			setPendingDownloads([]);
			setDownloadSummary({
				prepared: 0,
				total: chunks.length
			});
			setProcessing(true);
			setProgress({
				total: selected.length,
				completed: 0,
				currentName: "",
				currentStatus: "processing",
				rateLimitWaitSecs: void 0,
				batchIndex: 0,
				totalBatches: chunks.length
			});
			try {
				startApiBatch(chunks[0]);
			} catch (error) {
				activeOperationRef.current = null;
				setProcessing(false);
				exportingRef.current = false;
				setOperationError(error instanceof Error ? error.message : String(error));
			}
		}, [
			disabled,
			selected,
			startApiBatch
		]);
		const exportAllFromLocal = q$1(async () => {
			if (disabled) return;
			const results = localConversations.filter((c) => selected.some((s) => s.id === c.id));
			const callback = exportAllOptions.find((o) => o.label === exportType)?.callback;
			if (!callback) return;
			const chunks = chunkArray(results, 100);
			localCancelRef.current = false;
			activeOperationRef.current = "local-export";
			exportingRef.current = true;
			setOperationError("");
			setPendingDownloads([]);
			setDownloadSummary({
				prepared: 0,
				total: chunks.length
			});
			setProcessing(true);
			try {
				for (let i = 0; i < chunks.length; i++) {
					if (localCancelRef.current) break;
					const downloadResult = await callback(format, chunks[i], metaList, void 0, i + 1, chunks.length);
					keepPreparedDownload(downloadResult);
					if (i < chunks.length - 1 && !localCancelRef.current) await sleep(400);
				}
			} catch (error) {
				console.error("[DeepSeek Exporter] Local export failed:", error);
				setOperationError(error instanceof Error ? error.message : String(error));
			} finally {
				activeOperationRef.current = null;
				localCancelRef.current = false;
				setProcessing(false);
				exportingRef.current = false;
			}
		}, [
			disabled,
			selected,
			localConversations,
			exportAllOptions,
			exportType,
			format,
			metaList,
			keepPreparedDownload
		]);
		const exportAll = T$1(() => {
			return exportSource === "API" ? exportAllFromApi : exportAllFromLocal;
		}, [
			exportSource,
			exportAllFromApi,
			exportAllFromLocal
		]);
		const deleteAll = q$1(() => {
			if (disabled) return;
			if (!confirm(t("Conversation Delete Alert"))) return;
			deleteQueue.clear();
			selectedTotalRef.current = selected.length;
			activeOperationRef.current = "delete";
			exportingRef.current = true;
			setOperationError("");
			setProcessing(true);
			selected.forEach(({ id, title }) => {
				deleteQueue.add({
					name: title,
					request: async () => {
						await deleteConversation(id);
						return id;
					}
				});
			});
			if (!deleteQueue.start()) {
				activeOperationRef.current = null;
				setProcessing(false);
				exportingRef.current = false;
				setOperationError("Unable to start delete queue");
			}
		}, [
			disabled,
			selected,
			deleteQueue,
			t
		]);
		h$1(() => {
			const genRef = fetchGenRef;
			return () => {
				exportingRef.current = false;
				activeOperationRef.current = null;
				localCancelRef.current = true;
				genRef.current++;
				requestQueue.clear();
				deleteQueue.clear();
			};
		}, [requestQueue, deleteQueue]);
		h$1(() => {
			exportingRef.current = processing;
		}, [processing]);
		h$1(() => {
			const gen = ++fetchGenRef.current;
			const alive = () => gen === fetchGenRef.current;
			setSelected([]);
			setApiConversations([]);
			setError("");
			setHasMore(false);
			setLoadingMore(false);
			setTotalAvailable(null);
			setLoading(true);
			fetchAllConversations(null, exportAllLimit, (batch) => {
				if (alive()) setApiConversations((prev) => [...prev, ...batch]);
			}, (hasMore) => {
				if (alive()) setHasMore(hasMore);
			}).catch((err) => {
				if (!alive()) return;
				console.error("[DeepSeek Exporter] Failed to fetch conversations:", err);
				setError(err.message || "Failed to load conversations");
			}).finally(() => {
				if (alive()) setLoading(false);
			});
		}, [exportAllLimit]);
		const loadMore = q$1(async () => {
			if (loadingMore) return;
			const gen = fetchGenRef.current;
			const alive = () => gen === fetchGenRef.current;
			setLoadingMore(true);
			try {
				const page = await fetchConversationsPage(null, apiConversations.length, 100);
				if (!alive()) return;
				setApiConversations((prev) => [...prev, ...page.items]);
				setError("");
				if (page.total !== null) setTotalAvailable(page.total);
				setHasMore(page.total === null || apiConversations.length + page.items.length < page.total);
			} catch (err) {
				if (!alive()) return;
				console.error("[DeepSeek Exporter] Failed to load more conversations:", err);
				setError(err instanceof Error ? err.message : "Failed to load conversations");
			} finally {
				if (alive()) setLoadingMore(false);
			}
		}, [loadingMore, apiConversations.length]);
		const totalBatches = Math.ceil(selected.length / 100) || 1;
		return u$3(S, { children: [
			u$3(DialogTitle, {
				className: "DialogTitle",
				children: [t("Export Dialog Title"), u$3("span", {
					className: "ml-2 text-xs font-normal text-gray-400 dark:text-gray-500",
					children: `v${package_default.version}`
				})]
			}),
			u$3("div", {
				className: "flex items-center text-gray-600 dark:text-gray-300 flex justify-between border-b-[1px] pb-3 mb-3 dark:border-gray-700",
				children: [exportSource === "API" ? t("Export from API") : t("Export from official export file"), u$3("div", {
					className: "flex items-center gap-2",
					children: exportSource === "API" && u$3("button", {
						type: "button",
						className: "Button neutral relative",
						"aria-label": t("Export from official export file"),
						title: t("Export from official export file"),
						onClick: () => fileInputRef.current?.click(),
						children: u$3(IconUpload, { className: "w-4 h-4" })
					})
				})]
			}),
			u$3("input", {
				type: "file",
				accept: "application/json",
				className: "hidden",
				ref: fileInputRef,
				onChange: onUpload
			}),
			u$3(ConversationSelect, {
				conversations,
				selected,
				setSelected,
				disabled: processing,
				loading,
				error
			}),
			exportSource === "API" && !loading && !processing && hasMore && u$3("div", {
				className: "flex items-center justify-center mt-2 mb-1 gap-2",
				children: [u$3("button", {
					type: "button",
					className: "Button neutral",
					style: {
						fontSize: "0.8rem",
						padding: "4px 14px"
					},
					disabled: loadingMore,
					onClick: loadMore,
					children: loadingMore ? `${t("Loading")}...` : totalAvailable !== null ? t("Load more conversations remaining", {
						n: 100,
						remaining: totalAvailable - apiConversations.length
					}) : t("Load more conversations", { n: 100 })
				}), totalAvailable !== null && !loadingMore && u$3("span", {
					className: "text-xs text-gray-400 dark:text-gray-500 tabular-nums",
					children: [
						apiConversations.length,
						" ",
						"/",
						totalAvailable
					]
				})]
			}),
			u$3("div", {
				className: "ActionBar flex flex-wrap mt-3 items-center gap-2",
				children: [
					u$3("select", {
						className: "Select shrink-0",
						disabled: processing,
						value: exportType,
						onChange: (e) => setExportType(e.currentTarget.value),
						children: exportAllOptions.map(({ label }) => u$3("option", {
							value: label,
							children: label
						}, t(label)))
					}),
					u$3("div", { className: "flex flex-grow" }),
					u$3("button", {
						type: "button",
						className: "Button red",
						disabled: disabled || exportSource === "Local",
						onClick: deleteAll,
						children: t("Delete")
					}),
					u$3("button", {
						type: "button",
						className: "Button green",
						disabled,
						onClick: exportAll,
						children: t("Export")
					})
				]
			}),
			operationError && u$3("p", {
				role: "alert",
				className: "mt-2 text-sm text-red-600 dark:text-red-400",
				children: [
					t("Error"),
					":",
					operationError
				]
			}),
			pendingDownloads.length > 0 && u$3("div", {
				className: "mt-2 rounded-md border border-blue-400/70 bg-blue-50 p-3 text-sm text-blue-950 dark:border-blue-500/60 dark:bg-blue-950/40 dark:text-blue-100",
				children: [u$3("p", {
					role: "status",
					children: t(downloadSummary.prepared === downloadSummary.total ? "All export parts ready" : processing ? "Export parts in progress" : "Export parts stopped", {
						prepared: downloadSummary.prepared,
						total: downloadSummary.total
					})
				}), u$3("div", {
					className: "mt-2 flex flex-col gap-2",
					children: pendingDownloads.map((download, index) => u$3("button", {
						type: "button",
						className: "Button green",
						onClick: () => downloadPendingFile(download),
						children: `${t("Download")} ${download.filename}`
					}, `${download.filename}-${index}`))
				})]
			}),
			totalBatches > 1 && !processing && u$3("p", {
				className: "mt-1.5 text-xs text-right text-gray-400 dark:text-gray-500",
				children: t("Export parts info", {
					total: totalBatches,
					size: 100
				})
			}),
			processing && u$3(S, { children: [u$3("div", {
				className: "mt-2 mb-1 justify-between flex items-center gap-2",
				children: [
					u$3("span", {
						className: "truncate text-sm text-gray-600 dark:text-gray-300",
						children: progress.currentStatus === "rate_limited" ? `⏳ Rate limited — waiting ${progress.rateLimitWaitSecs ?? "…"}s` : progress.currentName
					}),
					u$3("span", {
						className: "shrink-0 tabular-nums text-sm text-gray-500 dark:text-gray-400",
						children: progress.totalBatches > 1 ? `${t("Batch progress").replace("{{current}}", String(progress.batchIndex + 1)).replace("{{total}}", String(progress.totalBatches))} \u00B7 ${progress.completed}/${progress.total}` : `${progress.completed}/${progress.total}`
					}),
					u$3("button", {
						type: "button",
						className: "Button red",
						style: {
							fontSize: "0.75rem",
							padding: "3px 10px",
							height: "auto"
						},
						title: "Stop the export — any batches already downloaded are kept",
						onClick: cancelExport,
						children: t("Cancel")
					})
				]
			}), u$3("div", {
				className: "w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700",
				children: u$3("div", {
					className: `h-2.5 rounded-full ${progress.currentStatus === "rate_limited" ? "bg-amber-500" : "bg-blue-600"}`,
					style: { width: `${progress.total > 0 ? progress.completed / progress.total * 100 : 0}%` }
				})
			})] }),
			processing ? u$3("button", {
				type: "button",
				className: "IconButton CloseButton",
				"aria-label": "Export in progress",
				title: "Click Cancel to stop the export",
				style: {
					cursor: "not-allowed",
					opacity: .25
				},
				children: u$3(IconCross, {})
			}) : u$3(DialogClose, {
				asChild: true,
				children: u$3("button", {
					type: "button",
					className: "IconButton CloseButton",
					"aria-label": "Close",
					children: u$3(IconCross, {})
				})
			})
		] });
	};
	var ExportDialog = ({ format, open, onOpenChange, portalContainer }) => {
		const guardClose = (e) => {
			if (exportingRef.current) e.preventDefault();
		};
		return u$3(Dialog, {
			modal: false,
			open,
			onOpenChange: (val) => {
				if (!val && exportingRef.current) return;
				onOpenChange(val);
			},
			children: u$3(DialogPortal, {
				container: portalContainer,
				children: [u$3("div", {
					"aria-hidden": "true",
					className: "DialogOverlay",
					onClick: () => {
						if (!exportingRef.current) onOpenChange(false);
					}
				}), u$3(DialogContent$1, {
					className: "DialogContent _export",
					onEscapeKeyDown: guardClose,
					onInteractOutside: guardClose,
					children: open && u$3(DialogContent, { format })
				})]
			})
		});
	};
	init_hooks_module();
	var TIMEOUT = 2500;
	var MenuItem = ({ text, description, successText, disabled = false, title, ariaLabel, icon: Icon, onClick, className }) => {
		const [loading, setLoading] = d$1(false);
		const [succeed, setSucceed] = d$1(false);
		const handleClick = typeof onClick === "function" ? async (e) => {
			e.preventDefault();
			if (loading) return;
			try {
				setLoading(true);
				if (await onClick()) {
					setSucceed(true);
					setTimeout(() => setSucceed(false), TIMEOUT);
				}
			} catch (error) {
				console.error("[DeepSeek Exporter] Menu action failed:", error);
			} finally {
				setLoading(false);
			}
		} : void 0;
		return u$3("button", {
			type: "button",
			className: `
            menu-item
            flex flex-shrink-0 m-0 items-center gap-3 rounded-lg
            transition-colors duration-200
            cursor-pointer
            border border-menu ${className ?? ""}`,
			onClick: handleClick,
			disabled,
			"aria-label": ariaLabel ?? (description ? `${text}: ${description}` : void 0),
			title,
			children: loading ? u$3("div", {
				className: "flex justify-center items-center w-full h-full",
				children: u$3(IconLoading, { className: "w-4 h-4" })
			}) : u$3(S, { children: [Icon && u$3(Icon, {}), u$3("span", {
				className: "ce-menu-item-copy",
				children: [u$3("span", {
					className: "ce-menu-item-text",
					children: succeed && successText ? successText : text
				}), description && !succeed && u$3("span", {
					className: "ce-menu-item-description",
					children: description
				})]
			})] })
		});
	};
	init_compat_module();
	function useTitle() {
		return C$4(subscribe, getSnapshot);
	}
	function subscribe(callback) {
		const target = document.querySelector("title");
		if (!target) return noop;
		const observer = new MutationObserver(callback);
		observer.observe(target, {
			subtree: true,
			characterData: true,
			childList: true
		});
		return () => observer.disconnect();
	}
	function getSnapshot() {
		return getPageTitle();
	}
	var $d447af545b77c9f1$export$b204af158042fbac = (target) => {
		if ($d447af545b77c9f1$var$isWindow(target)) return target.document;
		if ($d447af545b77c9f1$export$62858bae88b53fd0(target)) return target;
		return target?.ownerDocument ?? (typeof document !== "undefined" ? document : void 0);
	};
	var $d447af545b77c9f1$export$f21a1ffae260145a = (target) => {
		return $d447af545b77c9f1$export$b204af158042fbac(target)?.defaultView ?? (typeof window !== "undefined" ? window : void 0);
	};
	function $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) {
		return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
	}
	function $d447af545b77c9f1$var$isWindow(value) {
		return typeof value === "object" && value != null && "window" in value && value.window === value;
	}
	function $d447af545b77c9f1$export$62858bae88b53fd0(value) {
		return $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) && value.nodeType === 9;
	}
	function $d447af545b77c9f1$export$af51f0f06c0f328a(value) {
		return $d447af545b77c9f1$export$8ee0fc9ee280b4ee(value) && value.nodeType === 11 && "host" in value;
	}
	var $6a20a7989e6c817a$var$_shadowDOM = false;
	function $6a20a7989e6c817a$export$98658e8c59125e6a() {
		return $6a20a7989e6c817a$var$_shadowDOM;
	}
	function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
		if (!$6a20a7989e6c817a$export$98658e8c59125e6a()) return otherNode && node ? node.contains(otherNode) : false;
		if (!node || !otherNode) return false;
		let currentNode = otherNode;
		while (currentNode !== null) {
			if (currentNode === node) return true;
			if (typeof currentNode.assignedElements !== "function" && currentNode.assignedSlot?.parentNode) currentNode = currentNode.assignedSlot.parentNode;
			else if ($d447af545b77c9f1$export$af51f0f06c0f328a(currentNode)) currentNode = currentNode.host;
			else currentNode = currentNode.parentNode;
		}
		return false;
	}
	var $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document) => {
		if (!$6a20a7989e6c817a$export$98658e8c59125e6a()) return doc.activeElement;
		let activeElement = doc.activeElement;
		while (activeElement && "shadowRoot" in activeElement && activeElement.shadowRoot?.activeElement) activeElement = activeElement.shadowRoot.activeElement;
		return activeElement;
	};
	function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
		if ($6a20a7989e6c817a$export$98658e8c59125e6a() && event.target instanceof Element && event.target.shadowRoot) {
			if ("composedPath" in event) return event.composedPath()[0] ?? null;
			else if ("composedPath" in event.nativeEvent) return event.nativeEvent.composedPath()[0] ?? null;
		}
		return event.target;
	}
	function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
		if ($1969ac565cfec8d0$var$supportsPreventScroll()) element.focus({ preventScroll: true });
		else {
			let scrollableElements = $1969ac565cfec8d0$var$getScrollableElements(element);
			element.focus();
			$1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements);
		}
	}
	var $1969ac565cfec8d0$var$supportsPreventScrollCached = null;
	function $1969ac565cfec8d0$var$supportsPreventScroll() {
		if ($1969ac565cfec8d0$var$supportsPreventScrollCached == null) {
			$1969ac565cfec8d0$var$supportsPreventScrollCached = false;
			try {
				document.createElement("div").focus({ get preventScroll() {
					$1969ac565cfec8d0$var$supportsPreventScrollCached = true;
					return true;
				} });
			} catch {}
		}
		return $1969ac565cfec8d0$var$supportsPreventScrollCached;
	}
	function $1969ac565cfec8d0$var$getScrollableElements(element) {
		let parent = element.parentNode;
		let scrollableElements = [];
		let rootScrollingElement = document.scrollingElement || document.documentElement;
		while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
			if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
				element: parent,
				scrollTop: parent.scrollTop,
				scrollLeft: parent.scrollLeft
			});
			parent = parent.parentNode;
		}
		if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
			element: rootScrollingElement,
			scrollTop: rootScrollingElement.scrollTop,
			scrollLeft: rootScrollingElement.scrollLeft
		});
		return scrollableElements;
	}
	function $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements) {
		for (let { element, scrollTop, scrollLeft } of scrollableElements) {
			element.scrollTop = scrollTop;
			element.scrollLeft = scrollLeft;
		}
	}
	init_compat_module();
	var $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== "undefined" ? gn.useLayoutEffect : () => {};
	init_compat_module();
	function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
		let event = nativeEvent;
		event.nativeEvent = nativeEvent;
		event.isDefaultPrevented = () => event.defaultPrevented;
		event.isPropagationStopped = () => event.cancelBubble;
		event.persist = () => {};
		return event;
	}
	function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
		Object.defineProperty(event, "target", { value: target });
		Object.defineProperty(event, "currentTarget", { value: target });
	}
	function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
		let stateRef = A$2({
			isFocused: false,
			observer: null
		});
		$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
			const state = stateRef.current;
			return () => {
				if (state.observer) {
					state.observer.disconnect();
					state.observer = null;
				}
			};
		}, []);
		return q$1((e) => {
			let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
				stateRef.current.isFocused = true;
				let target = eventTarget;
				let onBlurHandler = (e) => {
					stateRef.current.isFocused = false;
					if (target.disabled) {
						let event = $a92dc41f639950be$export$525bc4921d56d4a(e);
						onBlur?.(event);
					}
					if (stateRef.current.observer) {
						stateRef.current.observer.disconnect();
						stateRef.current.observer = null;
					}
				};
				target.addEventListener("focusout", onBlurHandler, { once: true });
				stateRef.current.observer = new MutationObserver(() => {
					if (stateRef.current.isFocused && target.disabled) {
						stateRef.current.observer?.disconnect();
						let relatedTargetEl = target === $23f2114a1b82827e$export$cd4e5573fbe2b576() ? null : $23f2114a1b82827e$export$cd4e5573fbe2b576();
						target.dispatchEvent(new FocusEvent("blur", { relatedTarget: relatedTargetEl }));
						target.dispatchEvent(new FocusEvent("focusout", {
							bubbles: true,
							relatedTarget: relatedTargetEl
						}));
					}
				});
				stateRef.current.observer.observe(target, {
					attributes: true,
					attributeFilter: ["disabled"]
				});
			}
		}, [onBlur]);
	}
	var $a92dc41f639950be$export$fda7da73ab5d4c48 = false;
	function $2add3ce32c6007eb$var$testUserAgent(re) {
		if (typeof window === "undefined" || window.navigator == null) return false;
		let brands = window.navigator["userAgentData"]?.brands;
		return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
	}
	function $2add3ce32c6007eb$var$testPlatform(re) {
		return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator["userAgentData"]?.platform || window.navigator.platform) : false;
	}
	function $2add3ce32c6007eb$var$cached(fn) {
		let res = null;
		return () => {
			if (res == null) res = fn();
			return res;
		};
	}
	var $2add3ce32c6007eb$export$9ac100e40613ea10 = $2add3ce32c6007eb$var$cached(function() {
		return $2add3ce32c6007eb$var$testPlatform(/^Mac/i);
	});
	var $2add3ce32c6007eb$export$186c6964ca17d99 = $2add3ce32c6007eb$var$cached(function() {
		return $2add3ce32c6007eb$var$testPlatform(/^iPhone/i);
	});
	var $2add3ce32c6007eb$export$7bef049ce92e4224 = $2add3ce32c6007eb$var$cached(function() {
		return $2add3ce32c6007eb$var$testPlatform(/^iPad/i) || $2add3ce32c6007eb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
	});
	var $2add3ce32c6007eb$export$fedb369cb70207f1 = $2add3ce32c6007eb$var$cached(function() {
		return $2add3ce32c6007eb$export$186c6964ca17d99() || $2add3ce32c6007eb$export$7bef049ce92e4224();
	});
	var $2add3ce32c6007eb$export$78551043582a6a98 = $2add3ce32c6007eb$var$cached(function() {
		return $2add3ce32c6007eb$var$testUserAgent(/AppleWebKit/i) && ($2add3ce32c6007eb$export$fedb369cb70207f1() || !$2add3ce32c6007eb$export$6446a186d09e379e());
	});
	var $2add3ce32c6007eb$export$6446a186d09e379e = $2add3ce32c6007eb$var$cached(function() {
		return $2add3ce32c6007eb$var$testUserAgent(/Chrome|CriOS|CrMo/i);
	});
	var $2add3ce32c6007eb$export$a11b0059900ceec8 = $2add3ce32c6007eb$var$cached(function() {
		return $2add3ce32c6007eb$var$testUserAgent(/Android/i);
	});
	var $2add3ce32c6007eb$export$b7d78993b74f766d = $2add3ce32c6007eb$var$cached(function() {
		return $2add3ce32c6007eb$var$testUserAgent(/(Firefox|FxiOS)/i);
	});
	function $b5c62b033c25b96d$export$60278871457622de(event) {
		if (event.pointerType === "" && event.isTrusted) return true;
		if ($2add3ce32c6007eb$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
		return event.detail === 0 && !event.pointerType;
	}
	init_compat_module();
	function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
		let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
		if (!$2add3ce32c6007eb$export$78551043582a6a98() && $2add3ce32c6007eb$export$b7d78993b74f766d() && window.event?.type?.startsWith("key") && target.target === "_blank") {
			if ($2add3ce32c6007eb$export$9ac100e40613ea10()) metaKey = true;
			else ctrlKey = true;
		}
		let event = $2add3ce32c6007eb$export$78551043582a6a98() && $2add3ce32c6007eb$export$9ac100e40613ea10() && !$2add3ce32c6007eb$export$7bef049ce92e4224() && true ? new KeyboardEvent("keydown", {
			keyIdentifier: "Enter",
			metaKey,
			ctrlKey,
			altKey,
			shiftKey
		}) : new MouseEvent("click", {
			metaKey,
			ctrlKey,
			altKey,
			shiftKey,
			detail: 1,
			bubbles: true,
			cancelable: true
		});
		$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = setOpening;
		$1969ac565cfec8d0$export$de79e2c695e052f3(target);
		target.dispatchEvent(event);
		$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
	}
	$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
	init_compat_module();
	var $8f5a2122b0992be3$var$currentModality = null;
	var $8f5a2122b0992be3$export$901e90a13c50a14e = new Set();
	var $8f5a2122b0992be3$export$d90243b58daecda7 = new Map();
	var $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
	var $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
	var $8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS = {
		Tab: true,
		Escape: true
	};
	function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e) {
		for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e) handler(modality, e);
	}
	function $8f5a2122b0992be3$var$isValidKey(e) {
		return !(e.metaKey || !$2add3ce32c6007eb$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
	}
	function $8f5a2122b0992be3$var$handleKeyboardEvent(e) {
		$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
		if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $8f5a2122b0992be3$var$isValidKey(e)) {
			$8f5a2122b0992be3$var$currentModality = "keyboard";
			$8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e);
		}
	}
	function $8f5a2122b0992be3$var$handlePointerEvent(e) {
		$8f5a2122b0992be3$var$currentModality = "pointer";
		"pointerType" in e && e.pointerType;
		if (e.type === "mousedown" || e.type === "pointerdown") {
			$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
			$8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e);
		}
	}
	function $8f5a2122b0992be3$var$handleClickEvent(e) {
		if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $b5c62b033c25b96d$export$60278871457622de(e)) {
			$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
			$8f5a2122b0992be3$var$currentModality = "virtual";
		}
	}
	function $8f5a2122b0992be3$var$handleFocusEvent(e) {
		let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a($23f2114a1b82827e$export$e58f029f0fbfdb29(e));
		let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(e));
		if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ownerWindow || $23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ownerDocument || $a92dc41f639950be$export$fda7da73ab5d4c48 || !e.isTrusted) return;
		if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
			$8f5a2122b0992be3$var$currentModality = "virtual";
			$8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e);
		}
		$8f5a2122b0992be3$var$hasEventBeforeFocus = false;
		$8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
	}
	function $8f5a2122b0992be3$var$handleWindowBlur() {
		if ($a92dc41f639950be$export$fda7da73ab5d4c48) return;
		$8f5a2122b0992be3$var$hasEventBeforeFocus = false;
		$8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
	}
	function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
		if (typeof window === "undefined" || typeof document === "undefined") return;
		const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
		const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
		if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject)) return;
		let focus = windowObject.HTMLElement.prototype.focus;
		Reflect.defineProperty(windowObject.HTMLElement.prototype, "focus", {
			configurable: true,
			writable: true,
			value: function() {
				$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
				focus.apply(this, arguments);
			}
		});
		documentObject.addEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
		documentObject.addEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
		documentObject.addEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
		windowObject.addEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
		windowObject.addEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
		if (typeof PointerEvent !== "undefined") {
			documentObject.addEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
			documentObject.addEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
			documentObject.addEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
		}
		windowObject.addEventListener("beforeunload", () => {
			$8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
		}, { once: true });
		$8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, { focus });
	}
	var $8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener) => {
		const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
		const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
		if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
		if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject)) return;
		Reflect.defineProperty(windowObject.HTMLElement.prototype, "focus", {
			configurable: true,
			writable: true,
			value: $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus
		});
		documentObject.removeEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
		documentObject.removeEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
		documentObject.removeEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
		windowObject.removeEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
		windowObject.removeEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
		if (typeof PointerEvent !== "undefined") {
			documentObject.removeEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
			documentObject.removeEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
			documentObject.removeEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
		}
		$8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
	};
	function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
		const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
		let loadListener;
		if (documentObject.readyState !== "loading") $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
		else {
			loadListener = () => {
				$8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
			};
			documentObject.addEventListener("DOMContentLoaded", loadListener);
		}
		return () => $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
	}
	if (typeof document !== "undefined") $8f5a2122b0992be3$export$2f1888112f558a7d();
	function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
		return $8f5a2122b0992be3$var$currentModality !== "pointer";
	}
	var $8f5a2122b0992be3$var$nonTextInputTypes = new Set([
		"checkbox",
		"radio",
		"range",
		"color",
		"file",
		"image",
		"button",
		"submit",
		"reset"
	]);
	function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e) {
		let eventTarget = e ? $23f2114a1b82827e$export$e58f029f0fbfdb29(e) : void 0;
		let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
		let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(eventTarget);
		const IHTMLInputElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLInputElement : HTMLInputElement;
		const IHTMLTextAreaElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
		const IHTMLElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLElement : HTMLElement;
		const IKeyboardEvent = typeof ownerWindow !== "undefined" ? ownerWindow.KeyboardEvent : KeyboardEvent;
		let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
		isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
		return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
	}
	function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
		$8f5a2122b0992be3$var$setupGlobalFocusEvents();
		h$1(() => {
			if (opts?.enabled === false) return;
			let handler = (modality, e) => {
				if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!opts?.isTextInput, modality, e)) return;
				fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
			};
			$8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
			return () => {
				$8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
			};
		}, deps);
	}
	init_compat_module();
	function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
		let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
		const onBlur = q$1((e) => {
			if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === e.currentTarget) {
				if (onBlurProp) onBlurProp(e);
				if (onFocusChange) onFocusChange(false);
				return true;
			}
		}, [onBlurProp, onFocusChange]);
		const onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
		const onFocus = q$1((e) => {
			let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
			const activeElement = ownerDocument ? $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument) : $23f2114a1b82827e$export$cd4e5573fbe2b576();
			if (eventTarget === e.currentTarget && eventTarget === activeElement) {
				if (onFocusProp) onFocusProp(e);
				if (onFocusChange) onFocusChange(true);
				onSyntheticFocus(e);
			}
		}, [
			onFocusChange,
			onFocusProp,
			onSyntheticFocus
		]);
		return { focusProps: {
			onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
			onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
		} };
	}
	init_compat_module();
	function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
		let globalListeners = A$2(new Map());
		let addGlobalListener = q$1((eventTarget, type, listener, options) => {
			let fn = options?.once ? (...args) => {
				globalListeners.current.delete(listener);
				listener(...args);
			} : listener;
			globalListeners.current.set(listener, {
				type,
				eventTarget,
				fn,
				options
			});
			eventTarget.addEventListener(type, fn, options);
		}, []);
		let removeGlobalListener = q$1((eventTarget, type, listener, options) => {
			let fn = globalListeners.current.get(listener)?.fn || listener;
			eventTarget.removeEventListener(type, fn, options);
			globalListeners.current.delete(listener);
		}, []);
		let removeAllGlobalListeners = q$1(() => {
			globalListeners.current.forEach((value, key) => {
				removeGlobalListener(value.eventTarget, value.type, key, value.options);
			});
		}, [removeGlobalListener]);
		h$1(() => {
			return removeAllGlobalListeners;
		}, [removeAllGlobalListeners]);
		return {
			addGlobalListener,
			removeGlobalListener,
			removeAllGlobalListeners
		};
	}
	init_compat_module();
	function $2c9edc598a03d523$export$420e68273165f4ec(props) {
		let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
		let state = A$2({ isFocusWithin: false });
		let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
		let onBlur = q$1((e) => {
			if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
			if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) {
				state.current.isFocusWithin = false;
				removeAllGlobalListeners();
				if (onBlurWithin) onBlurWithin(e);
				if (onFocusWithinChange) onFocusWithinChange(false);
			}
		}, [
			onBlurWithin,
			onFocusWithinChange,
			state,
			removeAllGlobalListeners
		]);
		let onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
		let onFocus = q$1((e) => {
			if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
			let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
			const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
			if (!state.current.isFocusWithin && activeElement === eventTarget) {
				if (onFocusWithin) onFocusWithin(e);
				if (onFocusWithinChange) onFocusWithinChange(true);
				state.current.isFocusWithin = true;
				onSyntheticFocus(e);
				let currentTarget = e.currentTarget;
				addGlobalListener(ownerDocument, "focus", (e) => {
					let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
					if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(currentTarget, eventTarget)) {
						let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", { relatedTarget: eventTarget });
						$a92dc41f639950be$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
						let event = $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent);
						onBlur(event);
					}
				}, { capture: true });
			}
		}, [
			onFocusWithin,
			onFocusWithinChange,
			onSyntheticFocus,
			addGlobalListener,
			onBlur
		]);
		if (isDisabled) return { focusWithinProps: {
			onFocus: void 0,
			onBlur: void 0
		} };
		return { focusWithinProps: {
			onFocus,
			onBlur
		} };
	}
	init_compat_module();
	function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
		let { autoFocus = false, isTextInput, within } = props;
		let state = A$2({
			isFocused: false,
			isFocusVisible: autoFocus || $8f5a2122b0992be3$export$b9b3dfddab17db27()
		});
		let [isFocused, setFocused] = d$1(false);
		let [isFocusVisibleState, setFocusVisible] = d$1(() => state.current.isFocused && state.current.isFocusVisible);
		let updateState = q$1(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
		let onFocusChange = q$1((isFocused) => {
			state.current.isFocused = isFocused;
			state.current.isFocusVisible = $8f5a2122b0992be3$export$b9b3dfddab17db27();
			setFocused(isFocused);
			updateState();
		}, [updateState]);
		$8f5a2122b0992be3$export$ec71b4b83ac08ec3((isFocusVisible) => {
			state.current.isFocusVisible = isFocusVisible;
			updateState();
		}, [isTextInput, isFocused], {
			enabled: isFocused,
			isTextInput
		});
		let { focusProps } = $1e74c67db218ce67$export$f8168d8dd8fd66e6({
			isDisabled: within,
			onFocusChange
		});
		let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec({
			isDisabled: !within,
			onFocusWithinChange: onFocusChange
		});
		return {
			isFocused,
			isFocusVisible: isFocusVisibleState,
			focusProps: within ? focusWithinProps : focusProps
		};
	}
	init_compat_module();
	var $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
	var $e969f22b6713ca4a$var$hoverCount = 0;
	function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
		$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
		setTimeout(() => {
			$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
		}, 500);
	}
	function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e) {
		if (e.pointerType === "touch") $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
	}
	function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
		let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(null);
		if (typeof ownerDocument === "undefined") return;
		if ($e969f22b6713ca4a$var$hoverCount === 0) {
			if (typeof PointerEvent !== "undefined") ownerDocument.addEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
		}
		$e969f22b6713ca4a$var$hoverCount++;
		return () => {
			$e969f22b6713ca4a$var$hoverCount--;
			if ($e969f22b6713ca4a$var$hoverCount > 0) return;
			if (typeof PointerEvent !== "undefined") ownerDocument.removeEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
		};
	}
	function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
		let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
		let [isHovered, setHovered] = d$1(false);
		let state = A$2({
			isHovered: false,
			ignoreEmulatedMouseEvents: false,
			pointerType: "",
			target: null
		}).current;
		h$1($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
		let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
		let { hoverProps, triggerHoverEnd } = T$1(() => {
			let triggerHoverStart = (event, pointerType) => {
				state.pointerType = pointerType;
				if (isDisabled || pointerType === "touch" || state.isHovered || !$23f2114a1b82827e$export$4282f70798064fe0(event.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(event))) return;
				state.isHovered = true;
				let target = event.currentTarget;
				state.target = target;
				addGlobalListener($d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(event)), "pointerover", (e) => {
					if (state.isHovered && state.target && !$23f2114a1b82827e$export$4282f70798064fe0(state.target, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) triggerHoverEnd(e, e.pointerType);
				}, { capture: true });
				if (onHoverStart) onHoverStart({
					type: "hoverstart",
					target,
					pointerType
				});
				if (onHoverChange) onHoverChange(true);
				setHovered(true);
			};
			let triggerHoverEnd = (event, pointerType) => {
				let target = state.target;
				state.pointerType = "";
				state.target = null;
				if (pointerType === "touch" || !state.isHovered || !target) return;
				state.isHovered = false;
				removeAllGlobalListeners();
				if (onHoverEnd) onHoverEnd({
					type: "hoverend",
					target,
					pointerType
				});
				if (onHoverChange) onHoverChange(false);
				setHovered(false);
			};
			let hoverProps = {};
			if (typeof PointerEvent !== "undefined") {
				hoverProps.onPointerEnter = (e) => {
					if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
					triggerHoverStart(e, e.pointerType);
				};
				hoverProps.onPointerLeave = (e) => {
					if (!isDisabled && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) triggerHoverEnd(e, e.pointerType);
				};
			}
			return {
				hoverProps,
				triggerHoverEnd
			};
		}, [
			onHoverStart,
			onHoverChange,
			onHoverEnd,
			isDisabled,
			state,
			addGlobalListener,
			removeAllGlobalListeners
		]);
		h$1(() => {
			if (isDisabled) triggerHoverEnd({ currentTarget: state.target }, state.pointerType);
		}, [isDisabled]);
		return {
			hoverProps,
			isHovered
		};
	}
	var i = Object.defineProperty;
	var d = (t, e, n) => e in t ? i(t, e, {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: n
	}) : t[e] = n;
	var r$2 = (t, e, n) => (d(t, typeof e != "symbol" ? e + "" : e, n), n);
	var o$4 = class {
		constructor() {
			r$2(this, "current", this.detect());
			r$2(this, "handoffState", "pending");
			r$2(this, "currentId", 0);
		}
		set(e) {
			this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
		}
		reset() {
			this.set(this.detect());
		}
		nextId() {
			return ++this.currentId;
		}
		get isServer() {
			return this.current === "server";
		}
		get isClient() {
			return this.current === "client";
		}
		detect() {
			return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
		}
		handoff() {
			this.handoffState === "pending" && (this.handoffState = "complete");
		}
		get isHandoffComplete() {
			return this.handoffState === "complete";
		}
	};
	var s$4 = new o$4();
	function l$3(n) {
		var u;
		return s$4.isServer ? null : n == null ? document : (u = n == null ? void 0 : n.ownerDocument) != null ? u : document;
	}
	function t$2(e) {
		typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o) => setTimeout(() => {
			throw o;
		}));
	}
	function o$3() {
		let s = [], r = {
			addEventListener(e, t, n, i) {
				return e.addEventListener(t, n, i), r.add(() => e.removeEventListener(t, n, i));
			},
			requestAnimationFrame(...e) {
				let t = requestAnimationFrame(...e);
				return r.add(() => cancelAnimationFrame(t));
			},
			nextFrame(...e) {
				return r.requestAnimationFrame(() => r.requestAnimationFrame(...e));
			},
			setTimeout(...e) {
				let t = setTimeout(...e);
				return r.add(() => clearTimeout(t));
			},
			microTask(...e) {
				let t = { current: !0 };
				return t$2(() => {
					t.current && e[0]();
				}), r.add(() => {
					t.current = !1;
				});
			},
			style(e, t, n) {
				let i = e.style.getPropertyValue(t);
				return Object.assign(e.style, { [t]: n }), this.add(() => {
					Object.assign(e.style, { [t]: i });
				});
			},
			group(e) {
				let t = o$3();
				return e(t), this.add(() => t.dispose());
			},
			add(e) {
				return s.includes(e) || s.push(e), () => {
					let t = s.indexOf(e);
					if (t >= 0) for (let n of s.splice(t, 1)) n();
				};
			},
			dispose() {
				for (let e of s.splice(0)) e();
			}
		};
		return r;
	}
	init_compat_module();
	function p$1() {
		let [e] = d$1(o$3);
		return h$1(() => () => e.dispose(), [e]), e;
	}
	init_compat_module();
	var n$2 = (e, t) => {
		s$4.isServer ? h$1(e, t) : _$1(e, t);
	};
	init_compat_module();
	function s$3(e) {
		let r = A$2(e);
		return n$2(() => {
			r.current = e;
		}, [e]), r;
	}
	init_compat_module();
	var o$2 = function(t) {
		let e = s$3(t);
		return gn.useCallback((...r) => e.current(...r), [e]);
	};
	init_compat_module();
	function E$3(e) {
		let t = e.width / 2, n = e.height / 2;
		return {
			top: e.clientY - n,
			right: e.clientX + t,
			bottom: e.clientY + n,
			left: e.clientX - t
		};
	}
	function P$1(e, t) {
		return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
	}
	function w$1({ disabled: e = !1 } = {}) {
		let t = A$2(null), [n, l] = d$1(!1), r = p$1(), o = o$2(() => {
			t.current = null, l(!1), r.dispose();
		}), f = o$2((s) => {
			if (r.dispose(), t.current === null) {
				t.current = s.currentTarget, l(!0);
				{
					let i = l$3(s.currentTarget);
					r.addEventListener(i, "pointerup", o, !1), r.addEventListener(i, "pointermove", (c) => {
						if (t.current) {
							let p = E$3(c);
							l(P$1(p, t.current.getBoundingClientRect()));
						}
					}, !1), r.addEventListener(i, "pointercancel", o, !1);
				}
			}
		});
		return {
			pressed: n,
			pressProps: e ? {} : {
				onPointerDown: f,
				onPointerUp: o,
				onClick: o
			}
		};
	}
	init_compat_module();
	function n$1(e) {
		return T$1(() => e, Object.values(e));
	}
	init_compat_module();
	var e$2 = X$1(void 0);
	function a$3() {
		return x$1(e$2);
	}
	function t$1(...r) {
		return Array.from(new Set(r.flatMap((n) => typeof n == "string" ? n.split(" ") : []))).filter(Boolean).join(" ");
	}
	function u$2(r, n, ...a) {
		if (r in n) {
			let e = n[r];
			return typeof e == "function" ? e(...a) : e;
		}
		let t = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e) => `"${e}"`).join(", ")}.`);
		throw Error.captureStackTrace && Error.captureStackTrace(t, u$2), t;
	}
	init_compat_module();
	var A = ((a) => (a[a.None = 0] = "None", a[a.RenderStrategy = 1] = "RenderStrategy", a[a.Static = 2] = "Static", a))(A || {});
	var C$3 = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(C$3 || {});
	function K() {
		let e = I$1();
		return q$1((r) => U$1({
			mergeRefs: e,
			...r
		}), [e]);
	}
	function U$1({ ourProps: e, theirProps: r, slot: t, defaultTag: a, features: o, visible: n = !0, name: i, mergeRefs: l }) {
		l = l != null ? l : H$1;
		let s = P(r, e);
		if (n) return F(s, t, a, i, l);
		let y = o != null ? o : 0;
		if (y & 2) {
			let { static: f = !1, ...u } = s;
			if (f) return F(u, t, a, i, l);
		}
		if (y & 1) {
			let { unmount: f = !0, ...u } = s;
			return u$2(f ? 0 : 1, {
				[0]() {
					return null;
				},
				[1]() {
					return F({
						...u,
						hidden: !0,
						style: { display: "none" }
					}, t, a, i, l);
				}
			});
		}
		return F(s, t, a, i, l);
	}
	function F(e, r = {}, t, a, o) {
		let { as: n = t, children: i, refName: l = "ref", ...s } = h(e, ["unmount", "static"]), y = e.ref !== void 0 ? { [l]: e.ref } : {}, f = typeof i == "function" ? i(r) : i;
		f = E$2(f), "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(r)), s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
		let u = {};
		if (r) {
			let d = !1, p = [];
			for (let [c, T] of Object.entries(r)) typeof T == "boolean" && (d = !0), T === !0 && p.push(c.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`));
			if (d) {
				u["data-headlessui-state"] = p.join(" ");
				for (let c of p) u[`data-${c}`] = "";
			}
		}
		if (b$1(n) && (Object.keys(m$1(s)).length > 0 || Object.keys(m$1(u)).length > 0)) if (!hn(f) || Array.isArray(f) && f.length > 1 || L$2(f)) {
			if (Object.keys(m$1(s)).length > 0) throw new Error([
				"Passing props on \"Fragment\"!",
				"",
				`The current component <${a} /> is rendering a "Fragment".`,
				"However we need to passthrough the following props:",
				Object.keys(m$1(s)).concat(Object.keys(m$1(u))).map((d) => `  - ${d}`).join(`
`),
				"",
				"You can apply a few solutions:",
				["Add an `as=\"...\"` prop, to ensure that we render an actual element instead of a \"Fragment\".", "Render a single element as the child so that we can forward the props onto that element."].map((d) => `  - ${d}`).join(`
`)
			].join(`
`));
		} else {
			let d = f.props, p = d == null ? void 0 : d.className, c = typeof p == "function" ? (...R) => t$1(p(...R), s.className) : t$1(p, s.className), T = c ? { className: c } : {}, g = P(f.props, m$1(h(s, ["ref"])));
			for (let R in u) R in g && delete u[R];
			return mn(f, Object.assign({}, g, u, y, { ref: o(D(f), y.ref) }, T));
		}
		return k$2(n, Object.assign({}, h(s, ["ref"]), !b$1(n) && y, !b$1(n) && u), f);
	}
	function I$1() {
		let e = A$2([]), r = q$1((t) => {
			for (let a of e.current) a != null && (typeof a == "function" ? a(t) : a.current = t);
		}, []);
		return (...t) => {
			if (!t.every((a) => a == null)) return e.current = t, r;
		};
	}
	function H$1(...e) {
		return e.every((r) => r == null) ? void 0 : (r) => {
			for (let t of e) t != null && (typeof t == "function" ? t(r) : t.current = r);
		};
	}
	function P(...e) {
		if (e.length === 0) return {};
		if (e.length === 1) return e[0];
		let r = {}, t = {};
		for (let o of e) for (let n in o) n.startsWith("on") && typeof o[n] == "function" ? (t[n] ?? (t[n] = []), t[n].push(o[n])) : r[n] = o[n];
		if (r.disabled || r["aria-disabled"]) for (let o in t) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(o) && (t[o] = [(n) => {
			var i;
			return (i = n == null ? void 0 : n.preventDefault) == null ? void 0 : i.call(n);
		}]);
		for (let o in t) Object.assign(r, { [o](n, ...i) {
			let l = t[o];
			for (let s of l) {
				if ((n instanceof Event || (n == null ? void 0 : n.nativeEvent) instanceof Event) && n.defaultPrevented) return;
				s(n, ...i);
			}
		} });
		return r;
	}
	function V$1(...e) {
		if (e.length === 0) return {};
		if (e.length === 1) return e[0];
		let r = {}, t = {};
		for (let o of e) for (let n in o) n.startsWith("on") && typeof o[n] == "function" ? (t[n] ?? (t[n] = []), t[n].push(o[n])) : r[n] = o[n];
		for (let o in t) Object.assign(r, { [o](...n) {
			let i = t[o];
			for (let l of i) l?.(...n);
		} });
		return r;
	}
	function Y(e) {
		var r;
		return Object.assign(D$1(e), { displayName: (r = e.displayName) != null ? r : e.name });
	}
	function m$1(e) {
		let r = Object.assign({}, e);
		for (let t in r) r[t] === void 0 && delete r[t];
		return r;
	}
	function h(e, r = []) {
		let t = Object.assign({}, e);
		for (let a of r) a in t && delete t[a];
		return t;
	}
	function D(e) {
		return gn.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
	}
	function E$2(e) {
		if (e != null && e.$$typeof === Symbol.for("react.lazy")) {
			let r = e._payload;
			if (r != null && r.status === "fulfilled") return E$2(r.value);
		}
		return e;
	}
	function b$1(e) {
		return e === S || e === Symbol.for("react.fragment");
	}
	function L$2(e) {
		return b$1(e.type);
	}
	init_compat_module();
	function b(l, r, c) {
		let [i, s] = d$1(c), e = l !== void 0, t = A$2(e), u = A$2(!1), d = A$2(!1);
		return e && !t.current && !u.current ? (u.current = !0, t.current = e, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e && t.current && !d.current && (d.current = !0, t.current = e, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e ? l : i, o$2((n) => (e || bn(() => s(n)), r == null ? void 0 : r(n)))];
	}
	init_compat_module();
	function l$2(e) {
		let [t] = d$1(e);
		return t;
	}
	init_compat_module();
	function p(t = {}, i = null, n = []) {
		for (let [e, o] of Object.entries(t)) s$2(n, r$1(i, e), o);
		return n;
	}
	function r$1(t, i) {
		return t ? t + "[" + i + "]" : i;
	}
	function s$2(t, i, n) {
		if (Array.isArray(n)) for (let [e, o] of n.entries()) s$2(t, r$1(i, e.toString()), o);
		else n instanceof Date ? t.push([i, n.toISOString()]) : typeof n == "boolean" ? t.push([i, n ? "1" : "0"]) : typeof n == "string" ? t.push([i, n]) : typeof n == "number" ? t.push([i, `${n}`]) : n == null ? t.push([i, ""]) : c$1(n) && !hn(n) && p(n, i, t);
	}
	function g(t) {
		var n, e;
		let i = (n = t == null ? void 0 : t.form) != null ? n : t.closest("form");
		if (i) {
			for (let o of i.elements) if (o !== t && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
				o.click();
				return;
			}
			(e = i.requestSubmit) == null || e.call(i);
		}
	}
	function c$1(t) {
		if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
		let i = Object.getPrototypeOf(t);
		return i === null || Object.getPrototypeOf(i) === null;
	}
	var a$2 = "span";
	var s$1 = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s$1 || {});
	function l$1(t, r) {
		var n;
		let { features: d = 1, ...e } = t, o = {
			ref: r,
			"aria-hidden": (d & 2) === 2 ? !0 : (n = e["aria-hidden"]) != null ? n : void 0,
			hidden: (d & 4) === 4 ? !0 : void 0,
			style: {
				position: "fixed",
				top: 1,
				left: 1,
				width: 1,
				height: 0,
				padding: 0,
				margin: -1,
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				whiteSpace: "nowrap",
				borderWidth: "0",
				...(d & 4) === 4 && (d & 2) !== 2 && { display: "none" }
			}
		};
		return K()({
			ourProps: o,
			theirProps: e,
			slot: {},
			defaultTag: a$2,
			name: "Hidden"
		});
	}
	var f$2 = Y(l$1);
	init_compat_module();
	var f$1 = X$1(null);
	function c({ children: t }) {
		let e = x$1(f$1);
		if (!e) return gn.createElement(gn.Fragment, null, t);
		let { target: r } = e;
		return r ? $(gn.createElement(gn.Fragment, null, t), r) : null;
	}
	function j$1({ data: t, form: e, disabled: r, onReset: n, overrides: F }) {
		let [i, a] = d$1(null), p$5 = p$1();
		return h$1(() => {
			if (n && i) return p$5.addEventListener(i, "reset", n);
		}, [
			i,
			e,
			n
		]), gn.createElement(c, null, gn.createElement(C$2, {
			setForm: a,
			formId: e
		}), p(t).map(([s, v]) => gn.createElement(f$2, {
			features: s$1.Hidden,
			...m$1({
				key: s,
				as: "input",
				type: "hidden",
				hidden: !0,
				readOnly: !0,
				form: e,
				disabled: r,
				name: s,
				value: v,
				...F
			})
		})));
	}
	function C$2({ setForm: t, formId: e }) {
		return h$1(() => {
			if (e) {
				let r = document.getElementById(e);
				r && t(r);
			}
		}, [t, e]), e ? null : gn.createElement(f$2, {
			features: s$1.Hidden,
			as: "input",
			type: "hidden",
			hidden: !0,
			readOnly: !0,
			ref: (r) => {
				if (!r) return;
				let n = r.closest("form");
				n && t(n);
			}
		});
	}
	init_compat_module();
	var e$1 = X$1(void 0);
	function u$1() {
		return x$1(e$1);
	}
	function o$1(e) {
		return typeof e != "object" || e === null ? !1 : "nodeType" in e;
	}
	function t(e) {
		return o$1(e) && "tagName" in e;
	}
	function n(e) {
		return t(e) && "accessKey" in e;
	}
	function l(e) {
		return n(e) && e.nodeName === "INPUT";
	}
	function m(e) {
		return n(e) && e.nodeName === "LABEL";
	}
	function a$1(e) {
		return n(e) && e.nodeName === "FIELDSET";
	}
	function E$1(e) {
		return n(e) && e.nodeName === "LEGEND";
	}
	function L$1(e) {
		return t(e) ? e.matches("a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type=\"hidden\"]),label,select,textarea,video[controls]") : !1;
	}
	function s(l) {
		let e = l.parentElement, t = null;
		for (; e && !a$1(e);) E$1(e) && (t = e), e = e.parentElement;
		let i = (e == null ? void 0 : e.getAttribute("disabled")) === "";
		return i && r(t) ? !1 : i;
	}
	function r(l) {
		if (!l) return !1;
		let e = l.previousElementSibling;
		for (; e !== null;) {
			if (E$1(e)) return !1;
			e = e.previousElementSibling;
		}
		return !0;
	}
	init_compat_module();
	var u = Symbol();
	function y(...t) {
		let n = A$2(t);
		h$1(() => {
			n.current = t;
		}, [t]);
		let c = o$2((e) => {
			for (let o of n.current) o != null && (typeof o == "function" ? o(e) : o.current = e);
		});
		return t.every((e) => e == null || (e == null ? void 0 : e[u])) ? void 0 : c;
	}
	init_compat_module();
	init_hooks_module();
	var a = X$1(null);
	a.displayName = "DescriptionContext";
	function f() {
		let r = x$1(a);
		if (r === null) {
			let e = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
			throw Error.captureStackTrace && Error.captureStackTrace(e, f), e;
		}
		return r;
	}
	function w() {
		var r, e;
		return (e = (r = x$1(a)) == null ? void 0 : r.value) != null ? e : void 0;
	}
	function H() {
		let [r, e] = d$1([]);
		return [r.length > 0 ? r.join(" ") : void 0, T$1(() => function(t) {
			let i = o$2((n) => (e((o) => [...o, n]), () => e((o) => {
				let s = o.slice(), p = s.indexOf(n);
				return p !== -1 && s.splice(p, 1), s;
			}))), l = T$1(() => ({
				register: i,
				slot: t.slot,
				name: t.name,
				props: t.props,
				value: t.value
			}), [
				i,
				t.slot,
				t.name,
				t.props,
				t.value
			]);
			return gn.createElement(a.Provider, { value: l }, t.children);
		}, [e])];
	}
	var I = "p";
	function C$1(r, e) {
		let c = g$2(), t = a$3(), { id: i = `headlessui-description-${c}`, ...l } = r, n = f(), o = y(e);
		n$2(() => n.register(i), [i, n.register]);
		let s = n$1({
			...n.slot,
			disabled: t || !1
		}), p = {
			ref: o,
			...n.props,
			id: i
		};
		return K()({
			ourProps: p,
			theirProps: l,
			slot: s,
			defaultTag: I,
			name: n.name || "Description"
		});
	}
	var _ = Y(C$1);
	var M = Object.assign(_, {});
	var o = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(o || {});
	init_compat_module();
	init_hooks_module();
	var L = X$1(null);
	L.displayName = "LabelContext";
	function C() {
		let n = x$1(L);
		if (n === null) {
			let l = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
			throw Error.captureStackTrace && Error.captureStackTrace(l, C), l;
		}
		return n;
	}
	function N(n) {
		var a, e, o;
		let l = (e = (a = x$1(L)) == null ? void 0 : a.value) != null ? e : void 0;
		return ((o = n == null ? void 0 : n.length) != null ? o : 0) > 0 ? [l, ...n].filter(Boolean).join(" ") : l;
	}
	function V({ inherit: n = !1 } = {}) {
		let l = N(), [a, e] = d$1([]), o = n ? [l, ...a].filter(Boolean) : a;
		return [o.length > 0 ? o.join(" ") : void 0, T$1(() => function(t) {
			let p = o$2((i) => (e((u) => [...u, i]), () => e((u) => {
				let d = u.slice(), f = d.indexOf(i);
				return f !== -1 && d.splice(f, 1), d;
			}))), b = T$1(() => ({
				register: p,
				slot: t.slot,
				name: t.name,
				props: t.props,
				value: t.value
			}), [
				p,
				t.slot,
				t.name,
				t.props,
				t.value
			]);
			return gn.createElement(L.Provider, { value: b }, t.children);
		}, [e])];
	}
	var G = "label";
	function U(n, l$6) {
		var y$4;
		let a = g$2(), e = C(), o = u$1(), T = a$3(), { id: t = `headlessui-label-${a}`, htmlFor: p = o != null ? o : (y$4 = e.props) == null ? void 0 : y$4.htmlFor, passive: b = !1, ...i } = n, u = y(l$6);
		n$2(() => e.register(t), [t, e.register]);
		let d = o$2((s) => {
			let g = s.currentTarget;
			if (!(s.target !== s.currentTarget && L$1(s.target)) && (m(g) && s.preventDefault(), e.props && "onClick" in e.props && typeof e.props.onClick == "function" && e.props.onClick(s), m(g))) {
				let r = document.getElementById(g.htmlFor);
				if (r) {
					let E = r.getAttribute("disabled");
					if (E === "true" || E === "") return;
					let x = r.getAttribute("aria-disabled");
					if (x === "true" || x === "") return;
					(l(r) && (r.type === "file" || r.type === "radio" || r.type === "checkbox") || r.role === "radio" || r.role === "checkbox" || r.role === "switch") && r.click(), r.focus({ preventScroll: !0 });
				}
			}
		}), f = n$1({
			...e.slot,
			disabled: T || !1
		}), c = {
			ref: u,
			...e.props,
			id: t,
			htmlFor: p,
			onClick: d
		};
		return b && ("onClick" in c && (delete c.htmlFor, delete c.onClick), "onClick" in i && delete i.onClick), K()({
			ourProps: c,
			theirProps: i,
			slot: f,
			defaultTag: p ? G : "div",
			name: e.name || "Label"
		});
	}
	var j = Y(U);
	var Z = Object.assign(j, {});
	init_compat_module();
	function e(t, u) {
		return T$1(() => {
			var n;
			if (t.type) return t.type;
			let r = (n = t.as) != null ? n : "button";
			if (typeof r == "string" && r.toLowerCase() === "button" || (u == null ? void 0 : u.tagName) === "BUTTON" && !u.hasAttribute("type")) return "button";
		}, [
			t.type,
			t.as,
			u
		]);
	}
	init_compat_module();
	init_hooks_module();
	var E = X$1(null);
	E.displayName = "GroupContext";
	var ve = S;
	function xe(n) {
		var c;
		let [t, a] = d$1(null), [f, h] = V(), [b, o] = H(), s = T$1(() => ({
			switch: t,
			setSwitch: a
		}), [t, a]), T = {}, y = n, p = K();
		return gn.createElement(o, {
			name: "Switch.Description",
			value: b
		}, gn.createElement(h, {
			name: "Switch.Label",
			value: f,
			props: {
				htmlFor: (c = s.switch) == null ? void 0 : c.id,
				onClick(u) {
					t && (m(u.currentTarget) && u.preventDefault(), t.click(), t.focus({ preventScroll: !0 }));
				}
			}
		}, gn.createElement(E.Provider, { value: s }, p({
			ourProps: T,
			theirProps: y,
			slot: {},
			defaultTag: ve,
			name: "Switch.Group"
		}))));
	}
	var Ce = "button";
	function Le(n, t) {
		var g$4;
		let a = g$2(), f = u$1(), h = a$3(), { id: b$4 = f || `headlessui-switch-${a}`, disabled: o$7 = h || !1, checked: s$7, defaultChecked: T, onChange: y$3, name: p, value: c, form: u, autoFocus: S = !1, ...C } = n, _ = x$1(E), [L, R] = d$1(null), A = y(A$2(null), t, _ === null ? null : _.setSwitch, R), l = l$2(T), [d, r] = b(s$7, y$3, l != null ? l : !1), F = p$1(), [H, P] = d$1(!1), D = o$2(() => {
			P(!0), r?.(!d), F.nextFrame(() => {
				P(!1);
			});
		}), k = o$2((e) => {
			if (s(e.currentTarget)) return e.preventDefault();
			e.preventDefault(), D();
		}), M = o$2((e) => {
			e.key === o.Space ? (e.preventDefault(), D()) : e.key === o.Enter && g(e.currentTarget);
		}), U = o$2((e) => e.preventDefault()), I = N(), B = w(), { isFocusVisible: K$3, focusProps: O } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: S }), { isHovered: W, hoverProps: N$3 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: o$7 }), { pressed: J, pressProps: V } = w$1({ disabled: o$7 }), X = n$1({
			checked: d,
			disabled: o$7,
			hover: W,
			focus: K$3,
			active: J,
			autofocus: S,
			changing: H
		}), j = V$1({
			id: b$4,
			ref: A,
			role: "switch",
			type: e(n, L),
			tabIndex: n.tabIndex === -1 ? 0 : (g$4 = n.tabIndex) != null ? g$4 : 0,
			"aria-checked": d,
			"aria-labelledby": I,
			"aria-describedby": B,
			disabled: o$7 || void 0,
			autoFocus: S,
			onClick: k,
			onKeyUp: M,
			onKeyPress: U
		}, O, N$3, V), $ = q$1(() => {
			if (l !== void 0) return r == null ? void 0 : r(l);
		}, [r, l]), q = K();
		return gn.createElement(gn.Fragment, null, p != null && gn.createElement(j$1, {
			disabled: o$7,
			data: { [p]: c || "on" },
			overrides: {
				type: "checkbox",
				checked: d
			},
			form: u,
			onReset: $
		}), q({
			ourProps: j,
			theirProps: C,
			slot: X,
			defaultTag: Ce,
			name: "Switch"
		}));
	}
	var Re = Y(Le);
	var tt = Object.assign(Re, {
		Group: xe,
		Label: Z,
		Description: M
	});
	function Toggle({ label, checked = true, onCheckedUpdate }) {
		return u$3("div", {
			className: "inline-flex items-center",
			children: [u$3(tt, {
				checked,
				onChange: onCheckedUpdate,
				"data-state": checked ? "checked" : "unchecked",
				className: "toggle-switch",
				children: u$3("span", {
					"data-state": checked ? "checked" : "unchecked",
					className: "toggle-switch-handle"
				})
			}), label && u$3("span", {
				className: "toggle-switch-label",
				children: label
			})]
		});
	}
	var EXPORT_ALL_LIMIT_MIN = 100;
	var EXPORT_ALL_LIMIT_MAX = 2e4;
	var EXPORT_ALL_LIMIT_STEP = 100;
	function Variable({ name, title }) {
		return u$3("strong", {
			className: "cursor-help select-all whitespace-nowrap",
			title,
			children: name
		});
	}
	var SettingDialog = ({ open, onOpenChange, portalContainer }) => {
		const { format, setFormat, enableTimestamp, setEnableTimestamp, timeStamp24H, setTimeStamp24H, enableTimestampHTML, setEnableTimestampHTML, enableTimestampMarkdown, setEnableTimestampMarkdown, enableMeta, setEnableMeta, exportMetaList, setExportMetaList, enableThinking, setEnableThinking, enableSources, setEnableSources, exportAllLimit, setExportAllLimit } = useSettingContext();
		const { t, i18n } = useTranslation();
		const _title = useTitle();
		const date = dateStr();
		const timestamp$1 = timestamp();
		const title = (0, import_sanitize_filename.default)(_title).replace(/\s+/g, "_");
		const chatId = getChatIdFromUrl() || "this-is-a-mock-chat-id";
		const now = Date.now() / 1e3;
		const createTime = now;
		const updateTime = now;
		const preview = getFileNameWithFormat(format, "{ext}", {
			title,
			chatId,
			createTime,
			updateTime
		});
		const source = `${baseUrl}/a/chat/s/${chatId}`;
		return u$3(Dialog, {
			modal: false,
			open,
			onOpenChange,
			children: u$3(DialogPortal, {
				container: portalContainer,
				children: [u$3("div", {
					"aria-hidden": "true",
					className: "DialogOverlay",
					onClick: () => onOpenChange(false)
				}), u$3(DialogContent$1, {
					className: "DialogContent _settings",
					children: [
						u$3(DialogTitle, {
							className: "DialogTitle",
							children: t("Exporter Settings")
						}),
						u$3("div", {
							className: "DialogBody",
							children: u$3("dl", {
								className: "space-y-3",
								children: [
									u$3("div", {
										className: "relative flex bg-white dark:bg-white/5 rounded p-4",
										children: u$3("div", { children: [u$3("dt", {
											className: "text-md font-medium text-gray-800 dark:text-white",
											children: `${t("Language")} 🌐`
										}), u$3("dd", { children: u$3("select", {
											className: "Select mt-3",
											value: i18n.language,
											onChange: (e) => i18n.changeLanguage(e.currentTarget.value),
											children: LOCALES.map(({ name, code }) => u$3("option", {
												value: code,
												children: name
											}, code))
										}) })] })
									}),
									u$3("div", {
										className: "relative flex bg-white dark:bg-white/5 rounded p-4",
										children: u$3("div", { children: [u$3("dt", {
											className: "text-md font-medium text-gray-800 dark:text-white",
											children: t("File Name")
										}), u$3("dd", { children: [
											u$3("p", {
												className: "text-sm text-gray-700 dark:text-gray-300",
												children: [
													t("Available variables"),
													":",
													" ",
													u$3(Variable, {
														name: "{title}",
														title
													}),
													",",
													" ",
													u$3(Variable, {
														name: "{date}",
														title: date
													}),
													",",
													" ",
													u$3(Variable, {
														name: "{timestamp}",
														title: timestamp$1
													}),
													",",
													" ",
													u$3(Variable, {
														name: "{chat_id}",
														title: chatId
													}),
													",",
													" ",
													u$3(Variable, {
														name: "{create_time}",
														title: unixTimestampToISOString(createTime)
													}),
													",",
													" ",
													u$3(Variable, {
														name: "{update_time}",
														title: unixTimestampToISOString(updateTime)
													})
												]
											}),
											u$3("input", {
												className: "Input mt-4",
												id: "filename",
												value: format,
												onChange: (e) => setFormat(e.currentTarget.value)
											}),
											u$3("p", {
												className: "mt-2 text-sm text-gray-700 dark:text-gray-300",
												children: [
													t("Preview"),
													":",
													" ",
													u$3("span", {
														className: "select-all rounded bg-black/5 dark:bg-white/10 px-1.5 py-0.5 font-mono text-[0.8rem]",
														children: preview
													})
												]
											})
										] })] })
									}),
									u$3("div", {
										className: "relative flex bg-white dark:bg-white/5 rounded p-4",
										children: [u$3("div", { children: [u$3("dt", {
											className: "text-md font-medium text-gray-800 dark:text-white",
											children: t("Export Thinking Process")
										}), u$3("dd", {
											className: "text-sm text-gray-700 dark:text-gray-300",
											children: t("Export Thinking Process Description")
										})] }), u$3("div", {
											className: "absolute right-4",
											children: u$3(Toggle, {
												label: "",
												checked: enableThinking,
												onCheckedUpdate: setEnableThinking
											})
										})]
									}),
									u$3("div", {
										className: "relative flex bg-white dark:bg-white/5 rounded p-4",
										children: [u$3("div", { children: [u$3("dt", {
											className: "text-md font-medium text-gray-800 dark:text-white",
											children: t("Export Sources")
										}), u$3("dd", {
											className: "text-sm text-gray-700 dark:text-gray-300",
											children: t("Export Sources Description")
										})] }), u$3("div", {
											className: "absolute right-4",
											children: u$3(Toggle, {
												label: "",
												checked: enableSources,
												onCheckedUpdate: setEnableSources
											})
										})]
									}),
									u$3("div", {
										className: "relative flex bg-white dark:bg-white/5 rounded p-4",
										children: u$3("div", { children: [u$3("dt", {
											className: "text-md font-medium text-gray-800 dark:text-white",
											children: t("Export All Limit")
										}), u$3("dd", {
											className: "text-sm text-gray-700 dark:text-gray-300 mt-2",
											children: [t("Export All Limit Description"), u$3("div", {
												className: "flex items-center gap-4 mt-3",
												children: [u$3("input", {
													type: "range",
													min: EXPORT_ALL_LIMIT_MIN,
													max: EXPORT_ALL_LIMIT_MAX,
													step: EXPORT_ALL_LIMIT_STEP,
													value: exportAllLimit,
													onChange: (e) => setExportAllLimit(Number.parseInt(e.currentTarget.value, 10)),
													className: "flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
													id: "exportAllLimitSlider"
												}), u$3("input", {
													className: "Input tabular-nums",
													style: {
														width: "5.5rem",
														flex: "none",
														textAlign: "right"
													},
													type: "number",
													min: EXPORT_ALL_LIMIT_MIN,
													max: EXPORT_ALL_LIMIT_MAX,
													step: EXPORT_ALL_LIMIT_STEP,
													value: exportAllLimit,
													onChange: (e) => {
														const value = Number.parseInt(e.currentTarget.value, 10);
														if (Number.isFinite(value)) setExportAllLimit(value);
													},
													onBlur: (e) => {
														const value = Number.parseInt(e.currentTarget.value, 10);
														setExportAllLimit(Number.isFinite(value) ? Math.min(EXPORT_ALL_LIMIT_MAX, Math.max(EXPORT_ALL_LIMIT_MIN, value)) : EXPORT_ALL_LIMIT_MIN);
													}
												})]
											})]
										})] })
									}),
									u$3("div", {
										className: "relative flex bg-white dark:bg-white/5 rounded p-4",
										children: [u$3("div", { children: [u$3("dt", {
											className: "text-md font-medium text-gray-800 dark:text-white",
											children: t("Conversation Timestamp")
										}), u$3("dd", {
											className: "text-sm text-gray-700 dark:text-gray-300",
											children: [t("Conversation Timestamp Description"), enableTimestamp && u$3(S, { children: [
												u$3("div", {
													className: "mt-2",
													children: u$3(Toggle, {
														label: t("Use 24-hour format"),
														checked: timeStamp24H,
														onCheckedUpdate: setTimeStamp24H
													})
												}),
												u$3("div", {
													className: "mt-2",
													children: u$3(Toggle, {
														label: t("Enable on HTML"),
														checked: enableTimestampHTML,
														onCheckedUpdate: setEnableTimestampHTML
													})
												}),
												u$3("div", {
													className: "mt-2",
													children: u$3(Toggle, {
														label: t("Enable on Markdown"),
														checked: enableTimestampMarkdown,
														onCheckedUpdate: setEnableTimestampMarkdown
													})
												})
											] })]
										})] }), u$3("div", {
											className: "absolute right-4",
											children: u$3(Toggle, {
												label: "",
												checked: enableTimestamp,
												onCheckedUpdate: setEnableTimestamp
											})
										})]
									}),
									u$3("div", {
										className: "relative flex bg-white dark:bg-white/5 rounded p-4",
										children: [u$3("div", { children: [u$3("dt", {
											className: "text-md font-medium text-gray-800 dark:text-white",
											children: t("Export Metadata")
										}), u$3("dd", {
											className: "text-sm text-gray-700 dark:text-gray-300",
											children: [t("Export Metadata Description"), enableMeta && u$3(S, { children: [
												u$3("p", {
													className: "mt-2 text-sm text-gray-700 dark:text-gray-300",
													children: [
														t("Available variables"),
														":",
														" ",
														u$3(Variable, {
															name: "{title}",
															title
														}),
														",",
														" ",
														u$3(Variable, {
															name: "{date}",
															title: date
														}),
														",",
														" ",
														u$3(Variable, {
															name: "{timestamp}",
															title: timestamp$1
														}),
														",",
														" ",
														u$3(Variable, {
															name: "{source}",
															title: source
														}),
														",",
														" ",
														u$3(Variable, {
															name: "{model}",
															title: "DeepSeek Chat"
														}),
														",",
														" ",
														u$3(Variable, {
															name: "{model_name}",
															title: "text-davinci-002-render-sha"
														}),
														",",
														" ",
														u$3(Variable, {
															name: "{create_time}",
															title: "2023-04-10T21:45:35.027Z"
														}),
														",",
														" ",
														u$3(Variable, {
															name: "{update_time}",
															title: "2023-04-10T21:45:35.027Z"
														})
													]
												}),
												exportMetaList.map((meta, i) => u$3("div", {
													className: "flex items-center mt-2",
													children: [
														u$3("input", {
															className: "Input",
															value: meta.name,
															onChange: (e) => {
																const list = [...exportMetaList];
																list[i] = {
																	...list[i],
																	name: e.currentTarget.value
																};
																setExportMetaList(list);
															}
														}),
														u$3("span", {
															className: "mx-2",
															children: "→"
														}),
														u$3("input", {
															className: "Input",
															value: meta.value,
															onChange: (e) => {
																const list = [...exportMetaList];
																list[i] = {
																	...list[i],
																	value: e.currentTarget.value
																};
																setExportMetaList(list);
															}
														}),
														u$3("button", {
															type: "button",
															className: "ml-2 rounded-full p-1 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-150",
															"aria-label": "Remove",
															onClick: () => setExportMetaList(exportMetaList.filter((_, j) => j !== i)),
															children: u$3(IconTrash, { className: "w-4 h-4" })
														})
													]
												}, i)),
												u$3("div", {
													className: "flex justify-center items-center mt-2 pr-8",
													children: u$3("button", {
														type: "button",
														className: "w-full border border-[#6f6e77] dark:border-gray-[#86858d] rounded-md py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition ease-in-out duration-150",
														"aria-label": "Add",
														onClick: () => setExportMetaList([...exportMetaList, {
															name: "",
															value: ""
														}]),
														children: "+"
													})
												})
											] })]
										})] }), u$3("div", {
											className: "absolute right-4",
											children: u$3(Toggle, {
												label: "",
												checked: enableMeta,
												onCheckedUpdate: setEnableMeta
											})
										})]
									})
								]
							})
						}),
						u$3("div", {
							className: "SettingsDialogFooter",
							children: u$3(DialogClose, {
								asChild: true,
								children: u$3("button", {
									type: "button",
									className: "Button green font-bold",
									children: t("Save")
								})
							})
						}),
						u$3(DialogClose, {
							asChild: true,
							children: u$3("button", {
								type: "button",
								className: "IconButton CloseButton",
								"aria-label": "Close",
								children: u$3(IconCross, {})
							})
						})
					]
				})]
			})
		});
	};
	init_compat_module();
	init_hooks_module();
	function MenuInner({ container }) {
		const { t } = useTranslation();
		const [open, setOpen] = d$1(false);
		const [jsonOpen, setJsonOpen] = d$1(false);
		const [exportOpen, setExportOpen] = d$1(false);
		const [settingOpen, setSettingOpen] = d$1(false);
		const menuRootRef = A$2(null);
		const [menuPosition, setMenuPosition] = d$1({
			left: 12,
			bottom: 12
		});
		const { format, enableMeta, exportMetaList } = useSettingContext();
		const metaList = T$1(() => enableMeta ? exportMetaList : [], [enableMeta, exportMetaList]);
		const onClickText = q$1(() => exportToText(), []);
		const onClickPng = q$1(() => exportToPng(format), [format]);
		const onClickMarkdown = q$1(() => exportToMarkdown(format, metaList), [format, metaList]);
		const onClickHtml = q$1(() => exportToHtml(format, metaList), [format, metaList]);
		const openDialog = q$1((dialog) => {
			setOpen(false);
			if (dialog === "settings") setSettingOpen(true);
			if (dialog === "json") setJsonOpen(true);
			if (dialog === "export") setExportOpen(true);
			return false;
		}, []);
		const onClickOfficialJSON = q$1(() => exportToJson(format), [format]);
		const onClickTavern = q$1(() => exportToTavern(format), [format]);
		const onClickOoba = q$1(() => exportToOoba(format), [format]);
		const isMobile = useWindowResize(() => window.innerWidth) < 768;
		h$1(() => {
			if (!open) return;
			const updatePosition = () => {
				const rect = menuRootRef.current?.getBoundingClientRect();
				if (!rect) return;
				if (isMobile) {
					setMenuPosition({
						left: 12,
						bottom: 64
					});
					return;
				}
				const panelWidth = 268;
				const panelGap = 8;
				const viewportPadding = 12;
				const left = window.innerWidth - rect.right >= 288 ? rect.right + panelGap : Math.max(viewportPadding, rect.left - panelWidth - panelGap);
				setMenuPosition({
					left,
					bottom: Math.max(viewportPadding, window.innerHeight - rect.bottom)
				});
			};
			updatePosition();
			window.addEventListener("resize", updatePosition);
			window.addEventListener("scroll", updatePosition, true);
			return () => {
				window.removeEventListener("resize", updatePosition);
				window.removeEventListener("scroll", updatePosition, true);
			};
		}, [isMobile, open]);
		return u$3(S, { children: [
			u$3("div", {
				className: "ce-menu-root",
				ref: menuRootRef,
				children: u$3(MenuItem, {
					className: "ce-nav-trigger",
					text: t("ExportHelper"),
					ariaLabel: t("ExportHelper"),
					icon: IconArrowRightFromBracket,
					onClick: () => {
						setOpen((value) => !value);
						return true;
					}
				})
			}),
			open && $(u$3(S, { children: [u$3("div", {
				"aria-hidden": "true",
				className: isMobile ? "dropdown-backdrop animate-fadeIn" : "ce-clickout-backdrop",
				onClick: () => setOpen(false)
			}), u$3("div", {
				className: `
                            ce-menu-panel
                            grid grid-cols-2
                            bg-menu
                            ce-card
                            transition-opacity duration-200
                            gap-1 py-2 px-1
                            ${isMobile ? "animate-slideUp" : "animate-fadeIn"}`,
				style: isMobile ? void 0 : menuPosition,
				role: "menu",
				children: [
					u$3(MenuItem, {
						className: "row-full",
						text: t("Setting"),
						icon: IconSetting,
						onClick: () => openDialog("settings")
					}),
					u$3("div", {
						"aria-hidden": "true",
						className: "ce-menu-divider row-full"
					}),
					u$3(MenuItem, {
						text: t("Copy Text"),
						successText: t("Copied!"),
						icon: IconCopy,
						className: "row-full",
						onClick: onClickText
					}),
					u$3(MenuItem, {
						text: t("Screenshot"),
						icon: IconCamera,
						className: "row-half",
						onClick: onClickPng
					}),
					u$3(MenuItem, {
						text: t("Markdown"),
						icon: IconMarkdown,
						className: "row-half",
						onClick: onClickMarkdown
					}),
					u$3(MenuItem, {
						text: t("HTML"),
						icon: FileCode,
						className: "row-half",
						onClick: onClickHtml
					}),
					u$3(MenuItem, {
						text: t("JSON"),
						icon: IconJSON,
						className: "row-half",
						onClick: () => openDialog("json")
					}),
					u$3("div", {
						"aria-hidden": "true",
						className: "ce-menu-divider row-full"
					}),
					u$3(MenuItem, {
						className: "row-full",
						text: t("Export All"),
						icon: IconZip,
						onClick: () => openDialog("export")
					})
				]
			})] }), container),
			u$3(SettingDialog, {
				open: settingOpen,
				onOpenChange: setSettingOpen,
				portalContainer: container
			}),
			u$3(Dialog, {
				modal: false,
				open: jsonOpen,
				onOpenChange: setJsonOpen,
				children: u$3(DialogPortal, {
					container,
					children: [u$3("div", {
						"aria-hidden": "true",
						className: "DialogOverlay",
						onClick: () => setJsonOpen(false)
					}), u$3(DialogContent$1, {
						className: "DialogContent JsonExportDialog",
						children: [
							u$3(DialogTitle, {
								className: "DialogTitle",
								children: t("JSON")
							}),
							u$3(MenuItem, {
								text: "DeepSeek Raw",
								description: t("Native Format"),
								icon: IconCopy,
								className: "row-full JsonExportOption",
								onClick: onClickOfficialJSON
							}),
							u$3(MenuItem, {
								text: "JSONL",
								description: "TavernAI · SillyTavern",
								icon: IconCopy,
								className: "row-full JsonExportOption",
								onClick: onClickTavern
							}),
							u$3(MenuItem, {
								text: "Ooba",
								description: "text-generation-webui",
								icon: IconCopy,
								className: "row-full JsonExportOption",
								onClick: onClickOoba
							})
						]
					})]
				})
			}),
			u$3(ExportDialog, {
				format,
				open: exportOpen,
				onOpenChange: setExportOpen,
				portalContainer: container
			})
		] });
	}
	function Menu({ container }) {
		return u$3(SettingProvider, { children: u$3(MenuInner, { container }) });
	}
	init_preact_module();
	var HOST_ID = "deepseek-exporter-root";
	var PORTAL_HOST_ID = "deepseek-exporter-portal";
	var COMPONENT_CSS = [
		tailwind_default,
		missing_tailwind_default,
		style_default,
		Dialog_default,
		CheckBox_default
	].join("\n");
	var triggerHost = null;
	var portalHost = null;
	var triggerContainer = null;
	var portalContainer = null;
	var cachedNativeTarget = null;
	var rendered = false;
	var syncScheduled = false;
	main();
	function main() {
		onloadSafe(() => {
			syncMount();
			new MutationObserver(scheduleSyncMount).observe(document.body, {
				childList: true,
				subtree: true
			});
			window.addEventListener("resize", () => {
				cachedNativeTarget = null;
				scheduleSyncMount();
			});
		});
	}
	function scheduleSyncMount() {
		if (syncScheduled) return;
		syncScheduled = true;
		requestAnimationFrame(() => {
			syncScheduled = false;
			syncMount();
		});
	}
	function createShell(id, role) {
		const host = document.createElement("div");
		host.id = id;
		host.dataset.deepseekExporter = "";
		host.dataset.version = package_default.version;
		host.dataset.role = role;
		const shadowRoot = host.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = COMPONENT_CSS;
		const container = document.createElement("div");
		container.className = role === "portal" ? "deepseek-exporter-shell deepseek-exporter-portal-shell" : "deepseek-exporter-shell";
		shadowRoot.append(style, container);
		return {
			host,
			container
		};
	}
	function ensureShells() {
		if (!triggerHost || !triggerContainer) {
			const shell = createShell(HOST_ID, "trigger");
			triggerHost = shell.host;
			triggerContainer = shell.container;
		}
		if (!portalHost || !portalContainer) {
			const shell = createShell(PORTAL_HOST_ID, "portal");
			portalHost = shell.host;
			portalContainer = shell.container;
		}
	}
	function syncMount() {
		if (!document.body) return;
		ensureShells();
		if (!triggerHost || !triggerContainer || !portalHost || !portalContainer) return;
		if (!portalHost.isConnected) document.body.append(portalHost);
		const target = getNativeMountTarget();
		if (target) {
			triggerHost.dataset.placement = "native";
			if (triggerHost.parentElement !== target.parent || triggerHost.nextElementSibling !== target.before) target.parent.insertBefore(triggerHost, target.before);
		} else {
			triggerHost.dataset.placement = "floating";
			if (triggerHost.parentElement !== document.body) document.body.append(triggerHost);
		}
		if (!rendered) {
			R$1(u$3(Menu, { container: portalContainer }), triggerContainer);
			rendered = true;
			setupThemeSync();
		}
	}
	function isVisible(element) {
		const rect = element.getBoundingClientRect();
		if (rect.width < 1 || rect.height < 1) return false;
		const style = getComputedStyle(element);
		return style.display !== "none" && style.visibility !== "hidden";
	}
	function isCachedTargetUsable(target) {
		return target.parent.isConnected && isVisible(target.parent) && (target.before == null || target.before.parentElement === target.parent);
	}
	function getNativeMountTarget() {
		if (cachedNativeTarget && isCachedTargetUsable(cachedNativeTarget)) return cachedNativeTarget;
		cachedNativeTarget = findNativeMountTarget();
		return cachedNativeTarget;
	}
	function findNativeMountTarget() {
		const historyLinks = Array.from(document.querySelectorAll("a[href*=\"/a/chat/s/\"]")).filter(isVisible).slice(0, 24);
		if (historyLinks.length === 0) return null;
		const candidateCounts = new Map();
		for (const link of historyLinks) {
			let element = link.parentElement;
			while (element && element !== document.body) {
				const rect = element.getBoundingClientRect();
				if (rect.left <= 48 && rect.right <= 420 && rect.width >= 150 && rect.width <= 360 && rect.height >= window.innerHeight * .45 && rect.top <= 80 && rect.bottom >= window.innerHeight - 100) candidateCounts.set(element, (candidateCounts.get(element) ?? 0) + 1);
				element = element.parentElement;
			}
		}
		const sidebar = Array.from(candidateCounts.entries()).sort(([a, aCount], [b, bCount]) => {
			const aRect = a.getBoundingClientRect();
			const bRect = b.getBoundingClientRect();
			const aScore = aCount * 1e3 + aRect.height - Math.abs(window.innerHeight - aRect.bottom) * 4;
			return bCount * 1e3 + bRect.height - Math.abs(window.innerHeight - bRect.bottom) * 4 - aScore;
		})[0]?.[0];
		if (!sidebar) return null;
		const sidebarRect = sidebar.getBoundingClientRect();
		const footerRow = Array.from(sidebar.querySelectorAll("div, nav, section, footer")).filter((element) => {
			if (element === triggerHost || element.contains(triggerHost)) return false;
			const rect = element.getBoundingClientRect();
			return isVisible(element) && rect.width >= sidebarRect.width * .62 && rect.height >= 30 && rect.height <= 96 && rect.left >= sidebarRect.left - 2 && rect.right <= sidebarRect.right + 2 && Math.abs(sidebarRect.bottom - rect.bottom) <= 32;
		}).sort((a, b) => {
			const aRect = a.getBoundingClientRect();
			const bRect = b.getBoundingClientRect();
			const aDepth = getElementDepth(a);
			const bDepth = getElementDepth(b);
			return Math.abs(sidebarRect.bottom - aRect.bottom) - Math.abs(sidebarRect.bottom - bRect.bottom) || bRect.width - aRect.width || aDepth - bDepth;
		})[0] ?? null;
		if (footerRow?.parentElement) return {
			parent: footerRow.parentElement,
			before: footerRow
		};
		return {
			parent: sidebar,
			before: null
		};
	}
	function getElementDepth(element) {
		let depth = 0;
		let current = element;
		while (current?.parentElement) {
			depth++;
			current = current.parentElement;
		}
		return depth;
	}
	function setupThemeSync() {
		if (!triggerHost || !triggerContainer || !portalHost || !portalContainer) return;
		const syncTheme = () => {
			if (!triggerHost || !triggerContainer || !portalHost || !portalContainer) return;
			const roots = [document.documentElement, document.body];
			const explicitlyDark = roots.some((root) => root.classList.contains("dark") || root.dataset.theme === "dark");
			const explicitlyLight = roots.some((root) => root.classList.contains("light") || root.dataset.theme === "light");
			const dark = explicitlyDark || !explicitlyLight && window.matchMedia("(prefers-color-scheme: dark)").matches;
			triggerContainer.classList.toggle("dark", dark);
			portalContainer.classList.toggle("dark", dark);
			triggerHost.dataset.theme = dark ? "dark" : "light";
			portalHost.dataset.theme = dark ? "dark" : "light";
		};
		syncTheme();
		const themeObserver = new MutationObserver(syncTheme);
		const observerOptions = {
			attributes: true,
			attributeFilter: ["class", "data-theme"]
		};
		themeObserver.observe(document.documentElement, observerOptions);
		themeObserver.observe(document.body, observerOptions);
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncTheme);
	}
})(JSZip, html2canvas);
