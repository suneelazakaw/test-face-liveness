function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
            return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var main = createCommonjsModule(function (module) {
    /*! For license information please see main.js.LICENSE.txt */
    (() => {
        var e = {
            757: (e2, t2, n2) => {
                e2.exports = n2(666);
            }, 575: function (e2, t2, n2) {
                (function () {
                    var e3;
                    function t3(e4) {
                        var t4 = 0;
                        return function () {
                            return t4 < e4.length ? { done: false, value: e4[t4++] } : { done: true };
                        };
                    }
                    var r, a = typeof Object.defineProperties == "function" ? Object.defineProperty : function (e4, t4, n3) {
                        return e4 == Array.prototype || e4 == Object.prototype || (e4[t4] = n3.value), e4;
                    }, o = function (e4) {
                        e4 = [typeof globalThis == "object" && globalThis, e4, typeof window == "object" && window, typeof self == "object" && self, typeof n2.g == "object" && n2.g];
                        for (var t4 = 0; t4 < e4.length; ++t4) {
                            var r2 = e4[t4];
                            if (r2 && r2.Math == Math)
                                return r2;
                        }
                        throw Error("Cannot find global object");
                    }(this);
                    function i(e4, t4) {
                        if (t4)
                            e: {
                                var n3 = o;
                                e4 = e4.split(".");
                                for (var r2 = 0; r2 < e4.length - 1; r2++) {
                                    var i2 = e4[r2];
                                    if (!(i2 in n3))
                                        break e;
                                    n3 = n3[i2];
                                }
                                (t4 = t4(r2 = n3[e4 = e4[e4.length - 1]])) != r2 && t4 != null && a(n3, e4, { configurable: true, writable: true, value: t4 });
                            }
                    }
                    function s(e4) {
                        return (e4 = { next: e4 })[Symbol.iterator] = function () {
                            return this;
                        }, e4;
                    }
                    function l(e4) {
                        var n3 = typeof Symbol != "undefined" && Symbol.iterator && e4[Symbol.iterator];
                        return n3 ? n3.call(e4) : { next: t3(e4) };
                    }
                    function u(e4) {
                        if (!(e4 instanceof Array)) {
                            e4 = l(e4);
                            for (var t4, n3 = []; !(t4 = e4.next()).done;)
                                n3.push(t4.value);
                            e4 = n3;
                        }
                        return e4;
                    }
                    if (i("Symbol", function (e4) {
                        function t4(e5, t5) {
                            this.g = e5, a(this, "description", { configurable: true, writable: true, value: t5 });
                        }
                        if (e4)
                            return e4;
                        t4.prototype.toString = function () {
                            return this.g;
                        };
                        var n3 = 0;
                        return function e5(r2) {
                            if (this instanceof e5)
                                throw new TypeError("Symbol is not a constructor");
                            return new t4("jscomp_symbol_" + (r2 || "") + "_" + n3++, r2);
                        };
                    }), i("Symbol.iterator", function (e4) {
                        if (e4)
                            return e4;
                        e4 = Symbol("Symbol.iterator");
                        for (var n3 = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), r2 = 0; r2 < n3.length; r2++) {
                            var i2 = o[n3[r2]];
                            typeof i2 == "function" && typeof i2.prototype[e4] != "function" && a(i2.prototype, e4, {
                                configurable: true, writable: true, value: function () {
                                    return s(t3(this));
                                }
                            });
                        }
                        return e4;
                    }), typeof Object.setPrototypeOf == "function")
                        r = Object.setPrototypeOf;
                    else {
                        var c;
                        e: {
                            var d = {};
                            try {
                                d.__proto__ = { a: true }, c = d.a;
                                break e;
                            } catch (P2) {
                            }
                            c = false;
                        }
                        r = c ? function (e4, t4) {
                            if (e4.__proto__ = t4, e4.__proto__ !== t4)
                                throw new TypeError(e4 + " is not extensible");
                            return e4;
                        } : null;
                    }
                    var f = r;
                    function p() {
                        this.u = false, this.h = null, this.Ka = void 0, this.g = 1, this.da = 0, this.i = null;
                    }
                    function h(e4) {
                        if (e4.u)
                            throw new TypeError("Generator is already running");
                        e4.u = true;
                    }
                    function m(e4, t4) {
                        e4.i = { Wa: t4, $a: true }, e4.g = e4.da;
                    }
                    function v(e4, t4) {
                        return e4.g = 3, { value: t4 };
                    }
                    function g(e4) {
                        this.g = new p(), this.h = e4;
                    }
                    function y(e4, t4, n3, r2) {
                        try {
                            var a2 = t4.call(e4.g.h, n3);
                            if (!(a2 instanceof Object))
                                throw new TypeError("Iterator result " + a2 + " is not an object");
                            if (!a2.done)
                                return e4.g.u = false, a2;
                            var o2 = a2.value;
                        } catch (t5) {
                            return e4.g.h = null, m(e4.g, t5), b(e4);
                        }
                        return e4.g.h = null, r2.call(e4.g, o2), b(e4);
                    }
                    function b(e4) {
                        for (; e4.g.g;)
                            try {
                                var t4 = e4.h(e4.g);
                                if (t4)
                                    return e4.g.u = false, { value: t4.value, done: false };
                            } catch (t5) {
                                e4.g.Ka = void 0, m(e4.g, t5);
                            }
                        if (e4.g.u = false, e4.g.i) {
                            if (t4 = e4.g.i, e4.g.i = null, t4.$a)
                                throw t4.Wa;
                            return { value: t4.return, done: true };
                        }
                        return { value: void 0, done: true };
                    }
                    function C(e4) {
                        this.next = function (t4) {
                            return h(e4.g), e4.g.h ? t4 = y(e4, e4.g.h.next, t4, e4.g.O) : (e4.g.O(t4), t4 = b(e4)), t4;
                        }, this.throw = function (t4) {
                            return h(e4.g), e4.g.h ? t4 = y(e4, e4.g.h.throw, t4, e4.g.O) : (m(e4.g, t4), t4 = b(e4)), t4;
                        }, this.return = function (t4) {
                            return function (e5, t5) {
                                h(e5.g);
                                var n3 = e5.g.h;
                                return n3 ? y(e5, "return" in n3 ? n3.return : function (e6) {
                                    return { value: e6, done: true };
                                }, t5, e5.g.return) : (e5.g.return(t5), b(e5));
                            }(e4, t4);
                        }, this[Symbol.iterator] = function () {
                            return this;
                        };
                    }
                    function S(e4, t4) {
                        return t4 = new C(new g(t4)), f && e4.prototype && f(t4, e4.prototype), t4;
                    }
                    p.prototype.O = function (e4) {
                        this.Ka = e4;
                    }, p.prototype.return = function (e4) {
                        this.i = { return: e4 }, this.g = this.da;
                    }, Array.from || (Array.from = function (e4) {
                        return [].slice.call(e4);
                    }), Object.assign || (Object.assign = function (e4) {
                        for (var t4, n3 = [].slice.call(arguments, 1), r2 = 0; r2 < n3.length; r2++)
                            if (t4 = n3[r2])
                                for (var a2 = e4, o2 = Object.keys(t4), i2 = 0; i2 < o2.length; i2++) {
                                    var s2 = o2[i2];
                                    a2[s2] = t4[s2];
                                }
                        return e4;
                    });
                    var _ = setTimeout;
                    function w() {
                    }
                    function E(e4) {
                        if (!(this instanceof E))
                            throw new TypeError("Promises must be constructed via new");
                        if (typeof e4 != "function")
                            throw new TypeError("not a function");
                        this.N = 0, this.Ea = false, this.I = void 0, this.ba = [], D(e4, this);
                    }
                    function L(e4, t4) {
                        for (; e4.N === 3;)
                            e4 = e4.I;
                        e4.N === 0 ? e4.ba.push(t4) : (e4.Ea = true, z(function () {
                            var n3 = e4.N === 1 ? t4.bb : t4.cb;
                            if (n3 === null)
                                (e4.N === 1 ? k : R)(t4.promise, e4.I);
                            else {
                                try {
                                    var r2 = n3(e4.I);
                                } catch (e5) {
                                    return void R(t4.promise, e5);
                                }
                                k(t4.promise, r2);
                            }
                        }));
                    }
                    function k(e4, t4) {
                        try {
                            if (t4 === e4)
                                throw new TypeError("A promise cannot be resolved with itself.");
                            if (t4 && (typeof t4 == "object" || typeof t4 == "function")) {
                                var n3 = t4.then;
                                if (t4 instanceof E)
                                    return e4.N = 3, e4.I = t4, void x(e4);
                                if (typeof n3 == "function")
                                    return void D(function (e5, t5) {
                                        return function () {
                                            e5.apply(t5, arguments);
                                        };
                                    }(n3, t4), e4);
                            }
                            e4.N = 1, e4.I = t4, x(e4);
                        } catch (t5) {
                            R(e4, t5);
                        }
                    }
                    function R(e4, t4) {
                        e4.N = 2, e4.I = t4, x(e4);
                    }
                    function x(e4) {
                        e4.N === 2 && e4.ba.length === 0 && z(function () {
                            e4.Ea || typeof console != "undefined" && console && console.warn("Possible Unhandled Promise Rejection:", e4.I);
                        });
                        for (var t4 = 0, n3 = e4.ba.length; t4 < n3; t4++)
                            L(e4, e4.ba[t4]);
                        e4.ba = null;
                    }
                    function N(e4, t4, n3) {
                        this.bb = typeof e4 == "function" ? e4 : null, this.cb = typeof t4 == "function" ? t4 : null, this.promise = n3;
                    }
                    function D(e4, t4) {
                        var n3 = false;
                        try {
                            e4(function (e5) {
                                n3 || (n3 = true, k(t4, e5));
                            }, function (e5) {
                                n3 || (n3 = true, R(t4, e5));
                            });
                        } catch (e5) {
                            n3 || (n3 = true, R(t4, e5));
                        }
                    }
                    function T(e4) {
                        return e4 && typeof e4 == "object" && e4.constructor === E ? e4 : new E(function (t4) {
                            t4(e4);
                        });
                    }
                    E.prototype.catch = function (e4) {
                        return this.then(null, e4);
                    }, E.prototype.then = function (e4, t4) {
                        var n3 = new this.constructor(w);
                        return L(this, new N(e4, t4, n3)), n3;
                    }, E.prototype.finally = function (e4) {
                        var t4 = this.constructor;
                        return this.then(function (n3) {
                            return t4.resolve(e4()).then(function () {
                                return n3;
                            });
                        }, function (n3) {
                            return t4.resolve(e4()).then(function () {
                                return t4.reject(n3);
                            });
                        });
                    };
                    var P, M, O, I, A, F, z = typeof setImmediate == "function" && function (e4) {
                        setImmediate(e4);
                    } || function (e4) {
                        _(e4, 0);
                    };
                    if (!window.Promise) {
                        window.Promise = E, E.prototype.then = E.prototype.then, E.all = function (e4) {
                            return new E(function (t4, n3) {
                                function r2(e5, i3) {
                                    try {
                                        if (i3 && (typeof i3 == "object" || typeof i3 == "function")) {
                                            var s2 = i3.then;
                                            if (typeof s2 == "function")
                                                return void s2.call(i3, function (t5) {
                                                    r2(e5, t5);
                                                }, n3);
                                        }
                                        a2[e5] = i3, --o2 == 0 && t4(a2);
                                    } catch (e6) {
                                        n3(e6);
                                    }
                                }
                                if (!e4 || e4.length === void 0)
                                    return n3(new TypeError("Promise.all accepts an array"));
                                var a2 = Array.prototype.slice.call(e4);
                                if (a2.length === 0)
                                    return t4([]);
                                for (var o2 = a2.length, i2 = 0; i2 < a2.length; i2++)
                                    r2(i2, a2[i2]);
                            });
                        }, E.race = function (e4) {
                            return new E(function (t4, n3) {
                                if (!e4 || e4.length === void 0)
                                    return n3(new TypeError("Promise.race accepts an array"));
                                for (var r2 = 0, a2 = e4.length; r2 < a2; r2++)
                                    T(e4[r2]).then(t4, n3);
                            });
                        }, E.resolve = T, E.reject = function (e4) {
                            return new E(function (t4, n3) {
                                n3(e4);
                            });
                        };
                        var j = document.createTextNode(""), U = [];
                        new MutationObserver(function () {
                            for (var e4 = U.length, t4 = 0; t4 < e4; t4++)
                                U[t4]();
                            U.splice(0, e4);
                        }).observe(j, { characterData: true }), z = function (e4) {
                            U.push(e4), j.textContent = 0 < j.textContent.length ? "" : "a";
                        };
                    }
                    !function (e4, t4) {
                        if (!(t4 in e4)) {
                            var r2 = typeof n2.g == typeof r2 ? window : n2.g, a2 = 0, o2 = String(Math.random()), i2 = "__symbol@@" + o2, s2 = e4.getOwnPropertyNames, l2 = e4.getOwnPropertyDescriptor, u2 = e4.create, c2 = e4.keys, d2 = e4.freeze || e4, f2 = e4.defineProperty, p2 = e4.defineProperties, h2 = l2(e4, "getOwnPropertyNames"), m2 = e4.prototype, v2 = m2.hasOwnProperty, g2 = m2.propertyIsEnumerable, y2 = m2.toString, b2 = function (e5, t5, n3) {
                                v2.call(e5, i2) || f2(e5, i2, { enumerable: false, configurable: false, writable: false, value: {} }), e5[i2]["@@" + t5] = n3;
                            }, C2 = function (e5, t5) {
                                var n3 = u2(e5);
                                return s2(t5).forEach(function (e6) {
                                    E2.call(t5, e6) && D2(n3, e6, t5[e6]);
                                }), n3;
                            }, S2 = function () {
                            }, _2 = function (e5) {
                                return e5 != i2 && !v2.call(R2, e5);
                            }, w2 = function (e5) {
                                return e5 != i2 && v2.call(R2, e5);
                            }, E2 = function (e5) {
                                var t5 = String(e5);
                                return w2(t5) ? v2.call(this, t5) && !!this[i2] && this[i2]["@@" + t5] : g2.call(this, e5);
                            }, L2 = function (t5) {
                                return f2(m2, t5, {
                                    enumerable: false, configurable: true, get: S2, set: function (e5) {
                                        P2(this, t5, { enumerable: false, configurable: true, writable: true, value: e5 }), b2(this, t5, true);
                                    }
                                }), R2[t5] = f2(e4(t5), "constructor", x2), d2(R2[t5]);
                            }, k2 = function e5(t5) {
                                if (this instanceof e5)
                                    throw new TypeError("Symbol is not a constructor");
                                return L2("__symbol:".concat(t5 || "", o2, ++a2));
                            }, R2 = u2(null), x2 = { value: k2 }, N2 = function (e5) {
                                return R2[e5];
                            }, D2 = function (e5, t5, n3) {
                                var r3 = String(t5);
                                if (w2(r3)) {
                                    if (t5 = P2, n3.enumerable) {
                                        var a3 = u2(n3);
                                        a3.enumerable = false;
                                    } else
                                        a3 = n3;
                                    t5(e5, r3, a3), b2(e5, r3, !!n3.enumerable);
                                } else
                                    f2(e5, t5, n3);
                                return e5;
                            }, T2 = function (e5) {
                                return s2(e5).filter(w2).map(N2);
                            };
                            h2.value = D2, f2(e4, "defineProperty", h2), h2.value = T2, f2(e4, t4, h2), h2.value = function (e5) {
                                return s2(e5).filter(_2);
                            }, f2(e4, "getOwnPropertyNames", h2), h2.value = function (e5, t5) {
                                var n3 = T2(t5);
                                return n3.length ? c2(t5).concat(n3).forEach(function (n4) {
                                    E2.call(t5, n4) && D2(e5, n4, t5[n4]);
                                }) : p2(e5, t5), e5;
                            }, f2(e4, "defineProperties", h2), h2.value = E2, f2(m2, "propertyIsEnumerable", h2), h2.value = k2, f2(r2, "Symbol", h2), h2.value = function (e5) {
                                return (e5 = "__symbol:".concat("__symbol:", e5, o2)) in m2 ? R2[e5] : L2(e5);
                            }, f2(k2, "for", h2), h2.value = function (e5) {
                                if (_2(e5))
                                    throw new TypeError(e5 + " is not a symbol");
                                if (v2.call(R2, e5) && (e5 = e5.slice(10)).slice(0, 10) === "__symbol:" && (e5 = e5.slice(10)) !== o2)
                                    return 0 < (e5 = e5.slice(0, e5.length - o2.length)).length ? e5 : void 0;
                            }, f2(k2, "keyFor", h2), h2.value = function (e5, t5) {
                                var n3 = l2(e5, t5);
                                return n3 && w2(t5) && (n3.enumerable = E2.call(e5, t5)), n3;
                            }, f2(e4, "getOwnPropertyDescriptor", h2), h2.value = function (e5, t5) {
                                return arguments.length === 1 || t5 === void 0 ? u2(e5) : C2(e5, t5);
                            }, f2(e4, "create", h2), h2.value = function () {
                                var e5 = y2.call(this);
                                return e5 === "[object String]" && w2(this) ? "[object Symbol]" : e5;
                            }, f2(m2, "toString", h2);
                            try {
                                if (u2(f2({}, "__symbol:", {
                                    get: function () {
                                        return f2(this, "__symbol:", { value: true })["__symbol:"];
                                    }
                                }))["__symbol:"] !== true)
                                    throw "IE11";
                                var P2 = f2;
                            } catch (e5) {
                                P2 = function (e6, t5, n3) {
                                    var r3 = l2(m2, t5);
                                    delete m2[t5], f2(e6, t5, n3), f2(m2, t5, r3);
                                };
                            }
                        }
                    }(Object, "getOwnPropertySymbols"), P = Object, M = Symbol, I = P.defineProperty, A = P.prototype, F = A.toString, "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function (e4) {
                        e4 in M || (I(M, e4, { value: M(e4) }), e4 === "toStringTag" && ((O = P.getOwnPropertyDescriptor(A, "toString")).value = function () {
                            var e5 = F.call(this), t4 = this == null ? this : this[M.toStringTag];
                            return t4 == null ? e5 : "[object " + t4 + "]";
                        }, I(A, "toString", O)));
                    }), function (e4, t4, n3) {
                        function r2() {
                            return this;
                        }
                        t4[e4] || (t4[e4] = function () {
                            var t5 = 0, n4 = this, a2 = {
                                next: function () {
                                    var e5 = n4.length <= t5;
                                    return e5 ? { done: e5 } : { done: e5, value: n4[t5++] };
                                }
                            };
                            return a2[e4] = r2, a2;
                        }), n3[e4] || (n3[e4] = function () {
                            var t5 = String.fromCodePoint, n4 = this, a2 = 0, o2 = n4.length, i2 = {
                                next: function () {
                                    var e5 = o2 <= a2, r3 = e5 ? "" : t5(n4.codePointAt(a2));
                                    return a2 += r3.length, e5 ? { done: e5 } : { done: e5, value: r3 };
                                }
                            };
                            return i2[e4] = r2, i2;
                        });
                    }(Symbol.iterator, Array.prototype, String.prototype);
                    var B = Object.prototype.toString;
                    Object.prototype.toString = function () {
                        return this === void 0 ? "[object Undefined]" : this === null ? "[object Null]" : B.call(this);
                    }, Object.keys = function (e4) {
                        return Object.getOwnPropertyNames(e4).filter(function (t4) {
                            return (t4 = Object.getOwnPropertyDescriptor(e4, t4)) && t4.enumerable;
                        });
                    }, String.prototype[Symbol.iterator] && String.prototype.codePointAt || (String.prototype[Symbol.iterator] = function e4() {
                        var t4, n3 = this;
                        return S(e4, function (e5) {
                            if (e5.g == 1 && (t4 = 0), e5.g != 3)
                                return t4 < n3.length ? e5 = v(e5, n3[t4]) : (e5.g = 0, e5 = void 0), e5;
                            t4++, e5.g = 2;
                        });
                    }), Set.prototype[Symbol.iterator] || (Set.prototype[Symbol.iterator] = function e4() {
                        var t4, n3, r2 = this;
                        return S(e4, function (e5) {
                            if (e5.g == 1 && (t4 = [], r2.forEach(function (e6) {
                                t4.push(e6);
                            }), n3 = 0), e5.g != 3)
                                return n3 < t4.length ? e5 = v(e5, t4[n3]) : (e5.g = 0, e5 = void 0), e5;
                            n3++, e5.g = 2;
                        });
                    }), Map.prototype[Symbol.iterator] || (Map.prototype[Symbol.iterator] = function e4() {
                        var t4, n3, r2 = this;
                        return S(e4, function (e5) {
                            if (e5.g == 1 && (t4 = [], r2.forEach(function (e6, n4) {
                                t4.push([n4, e6]);
                            }), n3 = 0), e5.g != 3)
                                return n3 < t4.length ? e5 = v(e5, t4[n3]) : (e5.g = 0, e5 = void 0), e5;
                            n3++, e5.g = 2;
                        });
                    });
                    var V = document.createEvent("Event");
                    if (V.initEvent("foo", true, true), V.preventDefault(), !V.defaultPrevented) {
                        var Z = Event.prototype.preventDefault;
                        Event.prototype.preventDefault = function () {
                            this.cancelable && (Z.call(this), Object.defineProperty(this, "defaultPrevented", {
                                get: function () {
                                    return true;
                                }, configurable: true
                            }));
                        };
                    }
                    var H = /Trident/.test(navigator.userAgent);
                    if (!window.Event || H && typeof window.Event != "function") {
                        var G = window.Event;
                        if (window.Event = function (e4, t4) {
                            t4 = t4 || {};
                            var n3 = document.createEvent("Event");
                            return n3.initEvent(e4, !!t4.bubbles, !!t4.cancelable), n3;
                        }, G) {
                            for (var W in G)
                                window.Event[W] = G[W];
                            window.Event.prototype = G.prototype;
                        }
                    }
                    if ((!window.CustomEvent || H && typeof window.CustomEvent != "function") && (window.CustomEvent = function (e4, t4) {
                        t4 = t4 || {};
                        var n3 = document.createEvent("CustomEvent");
                        return n3.initCustomEvent(e4, !!t4.bubbles, !!t4.cancelable, t4.detail), n3;
                    }, window.CustomEvent.prototype = window.Event.prototype), !window.MouseEvent || H && typeof window.MouseEvent != "function") {
                        var q = window.MouseEvent;
                        if (window.MouseEvent = function (e4, t4) {
                            t4 = t4 || {};
                            var n3 = document.createEvent("MouseEvent");
                            return n3.initMouseEvent(e4, !!t4.bubbles, !!t4.cancelable, t4.view || window, t4.detail, t4.screenX, t4.screenY, t4.clientX, t4.clientY, t4.ctrlKey, t4.altKey, t4.shiftKey, t4.metaKey, t4.button, t4.relatedTarget), n3;
                        }, q)
                            for (var K in q)
                                window.MouseEvent[K] = q[K];
                        window.MouseEvent.prototype = q.prototype;
                    }
                    Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", {
                        get: function () {
                            var e4 = (this.ownerDocument || this).querySelector("base[href]");
                            return e4 && e4.href || window.location.href;
                        }, configurable: true, enumerable: true
                    });
                    var J, Y, Q = Element.prototype, X = (J = Object.getOwnPropertyDescriptor(Q, "attributes")) !== null && J !== void 0 ? J : Object.getOwnPropertyDescriptor(Node.prototype, "attributes"), $ = (Y = X == null ? void 0 : X.get) !== null && Y !== void 0 ? Y : function () {
                        return this.attributes;
                    }, ee = Array.prototype.map;
                    Q.hasOwnProperty("getAttributeNames") || (Q.getAttributeNames = function () {
                        return ee.call($.call(this), function (e4) {
                            return e4.name;
                        });
                    });
                    var te, ne = Element.prototype;
                    ne.hasOwnProperty("matches") || (ne.matches = (te = ne.webkitMatchesSelector) !== null && te !== void 0 ? te : ne.msMatchesSelector);
                    var re = Node.prototype.appendChild;
                    function ae(e4) {
                        (e4 = e4.prototype).hasOwnProperty("append") || Object.defineProperty(e4, "append", {
                            configurable: true, enumerable: true, writable: true, value: function (e5) {
                                for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                    t4[n3] = arguments[n3];
                                for (n3 = (t4 = l(t4)).next(); !n3.done; n3 = t4.next())
                                    n3 = n3.value, re.call(this, typeof n3 == "string" ? document.createTextNode(n3) : n3);
                            }
                        });
                    }
                    ae(Document), ae(DocumentFragment), ae(Element);
                    var oe, ie, se = Node.prototype.insertBefore, le = (ie = (oe = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) === null || oe === void 0 ? void 0 : oe.get) !== null && ie !== void 0 ? ie : function () {
                        return this.firstChild;
                    };
                    function ue(e4) {
                        (e4 = e4.prototype).hasOwnProperty("prepend") || Object.defineProperty(e4, "prepend", {
                            configurable: true, enumerable: true, writable: true, value: function (e5) {
                                for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                    t4[n3] = arguments[n3];
                                n3 = le.call(this);
                                for (var r2 = (t4 = l(t4)).next(); !r2.done; r2 = t4.next())
                                    r2 = r2.value, se.call(this, typeof r2 == "string" ? document.createTextNode(r2) : r2, n3);
                            }
                        });
                    }
                    ue(Document), ue(DocumentFragment), ue(Element);
                    var ce, de, fe = Node.prototype.appendChild, pe = Node.prototype.removeChild, he = (de = (ce = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) === null || ce === void 0 ? void 0 : ce.get) !== null && de !== void 0 ? de : function () {
                        return this.firstChild;
                    };
                    function me(e4) {
                        (e4 = e4.prototype).hasOwnProperty("replaceChildren") || Object.defineProperty(e4, "replaceChildren", {
                            configurable: true, enumerable: true, writable: true, value: function (e5) {
                                for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                    t4[n3] = arguments[n3];
                                for (; (n3 = he.call(this)) !== null;)
                                    pe.call(this, n3);
                                for (n3 = (t4 = l(t4)).next(); !n3.done; n3 = t4.next())
                                    n3 = n3.value, fe.call(this, typeof n3 == "string" ? document.createTextNode(n3) : n3);
                            }
                        });
                    }
                    me(Document), me(DocumentFragment), me(Element);
                    var ve, ge, ye, be, Ce = Node.prototype.insertBefore, Se = (ge = (ve = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) === null || ve === void 0 ? void 0 : ve.get) !== null && ge !== void 0 ? ge : function () {
                        return this.parentNode;
                    }, _e = (be = (ye = Object.getOwnPropertyDescriptor(Node.prototype, "nextSibling")) === null || ye === void 0 ? void 0 : ye.get) !== null && be !== void 0 ? be : function () {
                        return this.nextSibling;
                    };
                    function we(e4) {
                        (e4 = e4.prototype).hasOwnProperty("after") || Object.defineProperty(e4, "after", {
                            configurable: true, enumerable: true, writable: true, value: function (e5) {
                                for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                    t4[n3] = arguments[n3];
                                if ((n3 = Se.call(this)) !== null)
                                    for (var r2 = _e.call(this), a2 = (t4 = l(t4)).next(); !a2.done; a2 = t4.next())
                                        a2 = a2.value, Ce.call(n3, typeof a2 == "string" ? document.createTextNode(a2) : a2, r2);
                            }
                        });
                    }
                    we(CharacterData), we(Element);
                    var Ee, Le, ke = Node.prototype.insertBefore, Re = (Le = (Ee = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) === null || Ee === void 0 ? void 0 : Ee.get) !== null && Le !== void 0 ? Le : function () {
                        return this.parentNode;
                    };
                    function xe(e4) {
                        (e4 = e4.prototype).hasOwnProperty("before") || Object.defineProperty(e4, "before", {
                            configurable: true, enumerable: true, writable: true, value: function (e5) {
                                for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                    t4[n3] = arguments[n3];
                                if ((n3 = Re.call(this)) !== null)
                                    for (var r2 = (t4 = l(t4)).next(); !r2.done; r2 = t4.next())
                                        r2 = r2.value, ke.call(n3, typeof r2 == "string" ? document.createTextNode(r2) : r2, this);
                            }
                        });
                    }
                    xe(CharacterData), xe(Element);
                    var Ne, De, Te = Node.prototype.removeChild, Pe = (De = (Ne = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) === null || Ne === void 0 ? void 0 : Ne.get) !== null && De !== void 0 ? De : function () {
                        return this.parentNode;
                    };
                    function Me(e4) {
                        (e4 = e4.prototype).hasOwnProperty("remove") || Object.defineProperty(e4, "remove", {
                            configurable: true, enumerable: true, writable: true, value: function () {
                                var e5 = Pe.call(this);
                                e5 && Te.call(e5, this);
                            }
                        });
                    }
                    Me(CharacterData), Me(Element);
                    var Oe, Ie, Ae = Node.prototype.insertBefore, Fe = Node.prototype.removeChild, ze = (Ie = (Oe = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) === null || Oe === void 0 ? void 0 : Oe.get) !== null && Ie !== void 0 ? Ie : function () {
                        return this.parentNode;
                    };
                    function je(e4) {
                        (e4 = e4.prototype).hasOwnProperty("replaceWith") || Object.defineProperty(e4, "replaceWith", {
                            configurable: true, enumerable: true, writable: true, value: function (e5) {
                                for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                    t4[n3] = arguments[n3];
                                if ((n3 = ze.call(this)) !== null) {
                                    for (var r2 = (t4 = l(t4)).next(); !r2.done; r2 = t4.next())
                                        r2 = r2.value, Ae.call(n3, typeof r2 == "string" ? document.createTextNode(r2) : r2, this);
                                    Fe.call(n3, this);
                                }
                            }
                        });
                    }
                    je(CharacterData), je(Element);
                    var Ue = window.Element.prototype, Be = window.HTMLElement.prototype, Ve = window.SVGElement.prototype;
                    !Be.hasOwnProperty("classList") || Ue.hasOwnProperty("classList") || Ve.hasOwnProperty("classList") || Object.defineProperty(Ue, "classList", Object.getOwnPropertyDescriptor(Be, "classList"));
                    var Ze = document.createElement("style");
                    Ze.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
                    var He = document.querySelector("head");
                    He.insertBefore(Ze, He.firstChild);
                    var Ge = window;
                    Ge.WebComponents = Ge.WebComponents || { flags: {} };
                    var We = document.querySelector('script[src*="webcomponents-bundle"]'), qe = /wc-(.+)/, Ke = {};
                    if (!Ke.noOpts) {
                        if (location.search.slice(1).split("&").forEach(function (e4) {
                            var t4;
                            (e4 = e4.split("="))[0] && (t4 = e4[0].match(qe)) && (Ke[t4[1]] = e4[1] || true);
                        }), We)
                            for (var Je = 0, Ye = void 0; Ye = We.attributes[Je]; Je++)
                                Ye.name !== "src" && (Ke[Ye.name] = Ye.value || true);
                        var Qe = {};
                        Ke.log && Ke.log.split && Ke.log.split(",").forEach(function (e4) {
                            Qe[e4] = true;
                        }), Ke.log = Qe;
                    }
                    Ge.WebComponents.flags = Ke;
                    var Xe = Ke.shadydom;
                    if (Xe) {
                        Ge.ShadyDOM = Ge.ShadyDOM || {}, Ge.ShadyDOM.force = Xe;
                        var $e = Ke.noPatch;
                        Ge.ShadyDOM.noPatch = $e === "true" || $e;
                    }
                    var et = Ke.register || Ke.ce;
                    function tt() {
                    }
                    function nt(e4) {
                        return e4.__shady || (e4.__shady = new tt()), e4.__shady;
                    }
                    function rt(e4) {
                        return e4 && e4.__shady;
                    }
                    et && window.customElements && (Ge.customElements.forcePolyfill = et), function () {
                        function e4() {
                        }
                        function t4(e5, t5) {
                            if (!e5.childNodes.length)
                                return [];
                            switch (e5.nodeType) {
                                case Node.DOCUMENT_NODE:
                                    return m2.call(e5, t5);
                                case Node.DOCUMENT_FRAGMENT_NODE:
                                    return v2.call(e5, t5);
                                default:
                                    return h2.call(e5, t5);
                            }
                        }
                        var n3 = typeof HTMLTemplateElement == "undefined", r2 = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment), a2 = false;
                        /Trident/.test(navigator.userAgent) && function () {
                            function e5(e6, t6) {
                                if (e6 instanceof DocumentFragment)
                                    for (var r4; r4 = e6.firstChild;)
                                        n4.call(this, r4, t6);
                                else
                                    n4.call(this, e6, t6);
                                return e6;
                            }
                            a2 = true;
                            var t5 = Node.prototype.cloneNode;
                            Node.prototype.cloneNode = function (e6) {
                                return e6 = t5.call(this, e6), this instanceof DocumentFragment && (e6.__proto__ = DocumentFragment.prototype), e6;
                            }, DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll, DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector, Object.defineProperties(DocumentFragment.prototype, {
                                nodeType: {
                                    get: function () {
                                        return Node.DOCUMENT_FRAGMENT_NODE;
                                    }, configurable: true
                                }, localName: {
                                    get: function () {
                                    }, configurable: true
                                }, nodeName: {
                                    get: function () {
                                        return "#document-fragment";
                                    }, configurable: true
                                }
                            });
                            var n4 = Node.prototype.insertBefore;
                            Node.prototype.insertBefore = e5;
                            var r3 = Node.prototype.appendChild;
                            Node.prototype.appendChild = function (t6) {
                                return t6 instanceof DocumentFragment ? e5.call(this, t6, null) : r3.call(this, t6), t6;
                            };
                            var o3 = Node.prototype.removeChild, i3 = Node.prototype.replaceChild;
                            Node.prototype.replaceChild = function (t6, n5) {
                                return t6 instanceof DocumentFragment ? (e5.call(this, t6, n5), o3.call(this, n5)) : i3.call(this, t6, n5), n5;
                            }, Document.prototype.createDocumentFragment = function () {
                                var e6 = this.createElement("df");
                                return e6.__proto__ = DocumentFragment.prototype, e6;
                            };
                            var s3 = Document.prototype.importNode;
                            Document.prototype.importNode = function (e6, t6) {
                                return t6 = s3.call(this, e6, t6 || false), e6 instanceof DocumentFragment && (t6.__proto__ = DocumentFragment.prototype), t6;
                            };
                        }();
                        var o2 = Node.prototype.cloneNode, i2 = Document.prototype.createElement, s2 = Document.prototype.importNode, l2 = Node.prototype.removeChild, u2 = Node.prototype.appendChild, c2 = Node.prototype.replaceChild, d2 = DOMParser.prototype.parseFromString, f2 = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || {
                            get: function () {
                                return this.innerHTML;
                            }, set: function (e5) {
                                this.innerHTML = e5;
                            }
                        }, p2 = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || {
                            get: function () {
                                return this.childNodes;
                            }
                        }, h2 = Element.prototype.querySelectorAll, m2 = Document.prototype.querySelectorAll, v2 = DocumentFragment.prototype.querySelectorAll, g2 = function () {
                            if (!n3) {
                                var e5 = document.createElement("template"), t5 = document.createElement("template");
                                return t5.content.appendChild(document.createElement("div")), e5.content.appendChild(t5), (e5 = e5.cloneNode(true)).content.childNodes.length === 0 || e5.content.firstChild.content.childNodes.length === 0 || r2;
                            }
                        }();
                        if (n3) {
                            var y2 = document.implementation.createHTMLDocument("template"), b2 = true, C2 = document.createElement("style");
                            C2.textContent = "template{display:none;}";
                            var S2 = document.head;
                            S2.insertBefore(C2, S2.firstElementChild), e4.prototype = Object.create(HTMLElement.prototype);
                            var _2 = !document.createElement("div").hasOwnProperty("innerHTML");
                            e4.Z = function (t5) {
                                if (!t5.content && t5.namespaceURI === document.documentElement.namespaceURI) {
                                    t5.content = y2.createDocumentFragment();
                                    for (var n4; n4 = t5.firstChild;)
                                        u2.call(t5.content, n4);
                                    if (_2)
                                        t5.__proto__ = e4.prototype;
                                    else if (t5.cloneNode = function (t6) {
                                        return e4.sa(this, t6);
                                    }, b2)
                                        try {
                                            E2(t5), L2(t5);
                                        } catch (e5) {
                                            b2 = false;
                                        }
                                    e4.bootstrap(t5.content);
                                }
                            };
                            var w2 = { option: ["select"], thead: ["table"], col: ["colgroup", "table"], tr: ["tbody", "table"], th: ["tr", "tbody", "table"], td: ["tr", "tbody", "table"] }, E2 = function (t5) {
                                Object.defineProperty(t5, "innerHTML", {
                                    get: function () {
                                        return T2(this);
                                    }, set: function (t6) {
                                        var n4 = w2[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(t6) || ["", ""])[1].toLowerCase()];
                                        if (n4)
                                            for (var r3 = 0; r3 < n4.length; r3++)
                                                t6 = "<" + n4[r3] + ">" + t6 + "</" + n4[r3] + ">";
                                        for (y2.body.innerHTML = t6, e4.bootstrap(y2); this.content.firstChild;)
                                            l2.call(this.content, this.content.firstChild);
                                        if (t6 = y2.body, n4)
                                            for (r3 = 0; r3 < n4.length; r3++)
                                                t6 = t6.lastChild;
                                        for (; t6.firstChild;)
                                            u2.call(this.content, t6.firstChild);
                                    }, configurable: true
                                });
                            }, L2 = function (e5) {
                                Object.defineProperty(e5, "outerHTML", {
                                    get: function () {
                                        return "<template>" + this.innerHTML + "</template>";
                                    }, set: function (e6) {
                                        if (!this.parentNode)
                                            throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
                                        for (y2.body.innerHTML = e6, e6 = this.ownerDocument.createDocumentFragment(); y2.body.firstChild;)
                                            u2.call(e6, y2.body.firstChild);
                                        c2.call(this.parentNode, e6, this);
                                    }, configurable: true
                                });
                            };
                            E2(e4.prototype), L2(e4.prototype), e4.bootstrap = function (n4) {
                                for (var r3, a3 = 0, o3 = (n4 = t4(n4, "template")).length; a3 < o3 && (r3 = n4[a3]); a3++)
                                    e4.Z(r3);
                            }, document.addEventListener("DOMContentLoaded", function () {
                                e4.bootstrap(document);
                            }), Document.prototype.createElement = function () {
                                var t5 = i2.apply(this, arguments);
                                return t5.localName === "template" && e4.Z(t5), t5;
                            }, DOMParser.prototype.parseFromString = function () {
                                var t5 = d2.apply(this, arguments);
                                return e4.bootstrap(t5), t5;
                            }, Object.defineProperty(HTMLElement.prototype, "innerHTML", {
                                get: function () {
                                    return T2(this);
                                }, set: function (t5) {
                                    f2.set.call(this, t5), e4.bootstrap(this);
                                }, configurable: true, enumerable: true
                            });
                            var k2 = /[&\u00A0"]/g, R2 = /[&\u00A0<>]/g, x2 = function (e5) {
                                switch (e5) {
                                    case "&":
                                        return "&amp;";
                                    case "<":
                                        return "&lt;";
                                    case ">":
                                        return "&gt;";
                                    case '"':
                                        return "&quot;";
                                    case "\xA0":
                                        return "&nbsp;";
                                }
                            }, N2 = (C2 = function (e5) {
                                for (var t5 = {}, n4 = 0; n4 < e5.length; n4++)
                                    t5[e5[n4]] = true;
                                return t5;
                            })("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), D2 = C2("style script xmp iframe noembed noframes plaintext noscript".split(" ")), T2 = function (e5, t5) {
                                e5.localName === "template" && (e5 = e5.content);
                                for (var n4, r3 = "", a3 = t5 ? t5(e5) : p2.get.call(e5), o3 = 0, i3 = a3.length; o3 < i3 && (n4 = a3[o3]); o3++) {
                                    e: {
                                        var s3 = n4, l3 = e5, u3 = t5;
                                        switch (s3.nodeType) {
                                            case Node.ELEMENT_NODE:
                                                for (var c3 = s3.localName, d3 = "<" + c3, f3 = s3.attributes, h3 = 0; l3 = f3[h3]; h3++)
                                                    d3 += " " + l3.name + '="' + l3.value.replace(k2, x2) + '"';
                                                d3 += ">", s3 = N2[c3] ? d3 : d3 + T2(s3, u3) + "</" + c3 + ">";
                                                break e;
                                            case Node.TEXT_NODE:
                                                s3 = s3.data, s3 = l3 && D2[l3.localName] ? s3 : s3.replace(R2, x2);
                                                break e;
                                            case Node.COMMENT_NODE:
                                                s3 = "<!--" + s3.data + "-->";
                                                break e;
                                            default:
                                                throw window.console.error(s3), Error("not implemented");
                                        }
                                    }
                                    r3 += s3;
                                }
                                return r3;
                            };
                        }
                        if (n3 || g2) {
                            e4.sa = function (e5, t5) {
                                var n4 = o2.call(e5, false);
                                return this.Z && this.Z(n4), t5 && (u2.call(n4.content, o2.call(e5.content, true)), P2(n4.content, e5.content)), n4;
                            };
                            var P2 = function (n4, r3) {
                                if (r3.querySelectorAll && (r3 = t4(r3, "template")).length !== 0)
                                    for (var a3, o3, i3 = 0, s3 = (n4 = t4(n4, "template")).length; i3 < s3; i3++)
                                        o3 = r3[i3], a3 = n4[i3], e4 && e4.Z && e4.Z(o3), c2.call(a3.parentNode, M2.call(o3, true), a3);
                            }, M2 = Node.prototype.cloneNode = function (t5) {
                                if (!a2 && r2 && this instanceof DocumentFragment) {
                                    if (!t5)
                                        return this.ownerDocument.createDocumentFragment();
                                    var n4 = O2.call(this.ownerDocument, this, true);
                                } else
                                    n4 = this.nodeType === Node.ELEMENT_NODE && this.localName === "template" && this.namespaceURI == document.documentElement.namespaceURI ? e4.sa(this, t5) : o2.call(this, t5);
                                return t5 && P2(n4, this), n4;
                            }, O2 = Document.prototype.importNode = function (n4, r3) {
                                if (r3 = r3 || false, n4.localName === "template")
                                    return e4.sa(n4, r3);
                                var a3 = s2.call(this, n4, r3);
                                if (r3) {
                                    P2(a3, n4), n4 = t4(a3, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
                                    for (var o3, l3 = 0; l3 < n4.length; l3++) {
                                        o3 = n4[l3], (r3 = i2.call(document, "script")).textContent = o3.textContent;
                                        for (var u3, d3 = o3.attributes, f3 = 0; f3 < d3.length; f3++)
                                            u3 = d3[f3], r3.setAttribute(u3.name, u3.value);
                                        c2.call(o3.parentNode, r3, o3);
                                    }
                                }
                                return a3;
                            };
                        }
                        n3 && (window.HTMLTemplateElement = e4);
                    }(), tt.prototype.toJSON = function () {
                        return {};
                    };
                    var at = window.ShadyDOM || {};
                    at.Ya = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
                    var ot = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
                    function it() {
                        return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint";
                    }
                    function st(e4) {
                        return (e4 = rt(e4)) && e4.firstChild !== void 0;
                    }
                    function lt(e4) {
                        return e4 instanceof ShadowRoot;
                    }
                    function ut(e4) {
                        return (e4 = (e4 = rt(e4)) && e4.root) && Jr(e4);
                    }
                    at.H = !!(ot && ot.configurable && ot.get), at.ya = at.force || !at.Ya, at.J = at.noPatch || false, at.fa = at.preferPerformance, at.Aa = at.J === "on-demand", at.Na = navigator.userAgent.match("Trident");
                    var ct = Element.prototype, dt = ct.matches || ct.matchesSelector || ct.mozMatchesSelector || ct.msMatchesSelector || ct.oMatchesSelector || ct.webkitMatchesSelector, ft = document.createTextNode(""), pt = 0, ht = [];
                    function mt(e4) {
                        ht.push(e4), ft.textContent = pt++;
                    }
                    new MutationObserver(function () {
                        for (; ht.length;)
                            try {
                                ht.shift()();
                            } catch (e4) {
                                throw ft.textContent = pt++, e4;
                            }
                    }).observe(ft, { characterData: true });
                    var vt = document.contains ? function (e4, t4) {
                        return e4.__shady_native_contains(t4);
                    } : function (e4, t4) {
                        return e4 === t4 || e4.documentElement && e4.documentElement.__shady_native_contains(t4);
                    };
                    function gt(e4, t4) {
                        for (; t4;) {
                            if (t4 == e4)
                                return true;
                            t4 = t4.__shady_parentNode;
                        }
                        return false;
                    }
                    function yt(e4) {
                        for (var t4 = e4.length - 1; 0 <= t4; t4--) {
                            var n3 = e4[t4], r2 = n3.getAttribute("id") || n3.getAttribute("name");
                            r2 && r2 !== "length" && isNaN(r2) && (e4[r2] = n3);
                        }
                        return e4.item = function (t5) {
                            return e4[t5];
                        }, e4.namedItem = function (t5) {
                            if (t5 !== "length" && isNaN(t5) && e4[t5])
                                return e4[t5];
                            for (var n4 = l(e4), r3 = n4.next(); !r3.done; r3 = n4.next())
                                if (((r3 = r3.value).getAttribute("id") || r3.getAttribute("name")) == t5)
                                    return r3;
                            return null;
                        }, e4;
                    }
                    function bt(e4) {
                        var t4 = [];
                        for (e4 = e4.__shady_native_firstChild; e4; e4 = e4.__shady_native_nextSibling)
                            t4.push(e4);
                        return t4;
                    }
                    function Ct(e4) {
                        var t4 = [];
                        for (e4 = e4.__shady_firstChild; e4; e4 = e4.__shady_nextSibling)
                            t4.push(e4);
                        return t4;
                    }
                    function St(e4, t4, n3) {
                        if (n3.configurable = true, n3.value)
                            e4[t4] = n3.value;
                        else
                            try {
                                Object.defineProperty(e4, t4, n3);
                            } catch (e5) {
                            }
                    }
                    function _t(e4, t4, n3, r2) {
                        for (var a2 in n3 = n3 === void 0 ? "" : n3, t4)
                            r2 && 0 <= r2.indexOf(a2) || St(e4, n3 + a2, t4[a2]);
                    }
                    function wt(e4, t4) {
                        for (var n3 in t4)
                            n3 in e4 && St(e4, n3, t4[n3]);
                    }
                    function Et(e4) {
                        var t4 = {};
                        return Object.getOwnPropertyNames(e4).forEach(function (n3) {
                            t4[n3] = Object.getOwnPropertyDescriptor(e4, n3);
                        }), t4;
                    }
                    function Lt(e4, t4) {
                        for (var n3, r2 = Object.getOwnPropertyNames(t4), a2 = 0; a2 < r2.length; a2++)
                            e4[n3 = r2[a2]] = t4[n3];
                    }
                    function kt(e4) {
                        return e4 instanceof Node ? e4 : document.createTextNode("" + e4);
                    }
                    function Rt(e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        if (t4.length === 1)
                            return kt(t4[0]);
                        n3 = document.createDocumentFragment();
                        for (var r2 = (t4 = l(t4)).next(); !r2.done; r2 = t4.next())
                            n3.appendChild(kt(r2.value));
                        return n3;
                    }
                    var xt, Nt = [];
                    function Dt(e4) {
                        xt || (xt = true, mt(Tt)), Nt.push(e4);
                    }
                    function Tt() {
                        xt = false;
                        for (var e4 = !!Nt.length; Nt.length;)
                            Nt.shift()();
                        return e4;
                    }
                    function Pt() {
                        this.g = false, this.addedNodes = [], this.removedNodes = [], this.oa = new Set();
                    }
                    Tt.list = Nt, Pt.prototype.flush = function () {
                        if (this.g) {
                            this.g = false;
                            var e4 = this.takeRecords();
                            e4.length && this.oa.forEach(function (t4) {
                                t4(e4);
                            });
                        }
                    }, Pt.prototype.takeRecords = function () {
                        if (this.addedNodes.length || this.removedNodes.length) {
                            var e4 = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
                            return this.addedNodes = [], this.removedNodes = [], e4;
                        }
                        return [];
                    };
                    var Mt = /[&\u00A0"]/g, Ot = /[&\u00A0<>]/g;
                    function It(e4) {
                        switch (e4) {
                            case "&":
                                return "&amp;";
                            case "<":
                                return "&lt;";
                            case ">":
                                return "&gt;";
                            case '"':
                                return "&quot;";
                            case "\xA0":
                                return "&nbsp;";
                        }
                    }
                    function At(e4) {
                        for (var t4 = {}, n3 = 0; n3 < e4.length; n3++)
                            t4[e4[n3]] = true;
                        return t4;
                    }
                    var Ft = At("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), zt = At("style script xmp iframe noembed noframes plaintext noscript".split(" "));
                    function jt(e4, t4) {
                        e4.localName === "template" && (e4 = e4.content);
                        for (var n3 = "", r2 = t4 ? t4(e4) : e4.childNodes, a2 = 0, o2 = r2.length, i2 = void 0; a2 < o2 && (i2 = r2[a2]); a2++) {
                            e: {
                                var s2 = i2, l2 = e4, u2 = t4;
                                switch (s2.nodeType) {
                                    case Node.ELEMENT_NODE:
                                        for (var c2, d2 = "<" + (l2 = s2.localName), f2 = s2.attributes, p2 = 0; c2 = f2[p2]; p2++)
                                            d2 += " " + c2.name + '="' + c2.value.replace(Mt, It) + '"';
                                        d2 += ">", s2 = Ft[l2] ? d2 : d2 + jt(s2, u2) + "</" + l2 + ">";
                                        break e;
                                    case Node.TEXT_NODE:
                                        s2 = s2.data, s2 = l2 && zt[l2.localName] ? s2 : s2.replace(Ot, It);
                                        break e;
                                    case Node.COMMENT_NODE:
                                        s2 = "<!--" + s2.data + "-->";
                                        break e;
                                    default:
                                        throw window.console.error(s2), Error("not implemented");
                                }
                            }
                            n3 += s2;
                        }
                        return n3;
                    }
                    var Ut = at.H, Bt = {
                        querySelector: function (e4) {
                            return this.__shady_native_querySelector(e4);
                        }, querySelectorAll: function (e4) {
                            return this.__shady_native_querySelectorAll(e4);
                        }
                    }, Vt = {};
                    function Zt(e4) {
                        Vt[e4] = function (t4) {
                            return t4["__shady_native_" + e4];
                        };
                    }
                    function Ht(e4, t4) {
                        for (var n3 in _t(e4, t4, "__shady_native_"), t4)
                            Zt(n3);
                    }
                    function Gt(e4, t4) {
                        t4 = t4 === void 0 ? [] : t4;
                        for (var n3 = 0; n3 < t4.length; n3++) {
                            var r2 = t4[n3], a2 = Object.getOwnPropertyDescriptor(e4, r2);
                            a2 && (Object.defineProperty(e4, "__shady_native_" + r2, a2), a2.value ? Bt[r2] || (Bt[r2] = a2.value) : Zt(r2));
                        }
                    }
                    var Wt = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false), qt = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, false), Kt = document.implementation.createHTMLDocument("inert");
                    function Jt(e4) {
                        for (var t4; t4 = e4.__shady_native_firstChild;)
                            e4.__shady_native_removeChild(t4);
                    }
                    var Yt = ["firstElementChild", "lastElementChild", "children", "childElementCount"], Qt = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"], Xt = Et({
                        get childNodes() {
                            return this.__shady_childNodes;
                        }, get firstChild() {
                            return this.__shady_firstChild;
                        }, get lastChild() {
                            return this.__shady_lastChild;
                        }, get childElementCount() {
                            return this.__shady_childElementCount;
                        }, get children() {
                            return this.__shady_children;
                        }, get firstElementChild() {
                            return this.__shady_firstElementChild;
                        }, get lastElementChild() {
                            return this.__shady_lastElementChild;
                        }, get shadowRoot() {
                            return this.__shady_shadowRoot;
                        }
                    }), $t = Et({
                        get textContent() {
                            return this.__shady_textContent;
                        }, set textContent(e4) {
                            this.__shady_textContent = e4;
                        }, get innerHTML() {
                            return this.__shady_innerHTML;
                        }, set innerHTML(e4) {
                            this.__shady_innerHTML = e4;
                        }
                    }), en = Et({
                        get parentElement() {
                            return this.__shady_parentElement;
                        }, get parentNode() {
                            return this.__shady_parentNode;
                        }, get nextSibling() {
                            return this.__shady_nextSibling;
                        }, get previousSibling() {
                            return this.__shady_previousSibling;
                        }, get nextElementSibling() {
                            return this.__shady_nextElementSibling;
                        }, get previousElementSibling() {
                            return this.__shady_previousElementSibling;
                        }, get className() {
                            return this.__shady_className;
                        }, set className(e4) {
                            this.__shady_className = e4;
                        }
                    });
                    function tn(e4) {
                        for (var t4 in e4) {
                            var n3 = e4[t4];
                            n3 && (n3.enumerable = false);
                        }
                    }
                    tn(Xt), tn($t), tn(en);
                    var nn = at.H || at.J === true, rn = nn ? function () {
                    } : function (e4) {
                        var t4 = nt(e4);
                        t4.Pa || (t4.Pa = true, wt(e4, en));
                    }, an = nn ? function () {
                    } : function (e4) {
                        var t4 = nt(e4);
                        t4.Oa || (t4.Oa = true, wt(e4, Xt), window.customElements && window.customElements.polyfillWrapFlushCallback && !at.J || wt(e4, $t));
                    }, on = "__eventWrappers" + Date.now(), sn = function () {
                        var e4 = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
                        return e4 ? function (t4) {
                            return e4.get.call(t4);
                        } : null;
                    }(), ln = function () {
                        function e4() {
                        }
                        var t4 = false, n3 = {
                            get capture() {
                                return t4 = true, false;
                            }
                        };
                        return window.addEventListener("test", e4, n3), window.removeEventListener("test", e4, n3), t4;
                    }();
                    function un(e4) {
                        if (e4 && typeof e4 == "object")
                            var t4 = !!e4.capture, n3 = !!e4.once, r2 = !!e4.passive, a2 = e4.U;
                        else
                            t4 = !!e4, r2 = n3 = false;
                        return { La: a2, capture: t4, once: n3, passive: r2, Ja: ln ? e4 : t4 };
                    }
                    var cn = { blur: true, focus: true, focusin: true, focusout: true, click: true, dblclick: true, mousedown: true, mouseenter: true, mouseleave: true, mousemove: true, mouseout: true, mouseover: true, mouseup: true, wheel: true, beforeinput: true, input: true, keydown: true, keyup: true, compositionstart: true, compositionupdate: true, compositionend: true, touchstart: true, touchend: true, touchmove: true, touchcancel: true, pointerover: true, pointerenter: true, pointerdown: true, pointermove: true, pointerup: true, pointercancel: true, pointerout: true, pointerleave: true, gotpointercapture: true, lostpointercapture: true, dragstart: true, drag: true, dragenter: true, dragleave: true, dragover: true, drop: true, dragend: true, DOMActivate: true, DOMFocusIn: true, DOMFocusOut: true, keypress: true }, dn = { DOMAttrModified: true, DOMAttributeNameChanged: true, DOMCharacterDataModified: true, DOMElementNameChanged: true, DOMNodeInserted: true, DOMNodeInsertedIntoDocument: true, DOMNodeRemoved: true, DOMNodeRemovedFromDocument: true, DOMSubtreeModified: true };
                    function fn(e4) {
                        return e4 instanceof Node ? e4.__shady_getRootNode() : e4;
                    }
                    function pn(e4, t4) {
                        var n3 = [], r2 = e4;
                        for (e4 = fn(e4); r2;)
                            n3.push(r2), r2 = r2.__shady_assignedSlot ? r2.__shady_assignedSlot : r2.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r2.host && (t4 || r2 !== e4) ? r2.host : r2.__shady_parentNode;
                        return n3[n3.length - 1] === document && n3.push(window), n3;
                    }
                    function hn(e4, t4) {
                        if (!lt)
                            return e4;
                        e4 = pn(e4, true);
                        for (var n3, r2, a2 = 0, o2 = void 0, i2 = void 0; a2 < t4.length; a2++)
                            if ((r2 = fn(n3 = t4[a2])) !== o2 && (i2 = e4.indexOf(r2), o2 = r2), !lt(r2) || -1 < i2)
                                return n3;
                    }
                    function mn(e4) {
                        function t4(t5, n3) {
                            return (t5 = new e4(t5, n3)).__composed = n3 && !!n3.composed, t5;
                        }
                        return t4.__proto__ = e4, t4.prototype = e4.prototype, t4;
                    }
                    var vn = { focus: true, blur: true };
                    function gn(e4) {
                        return e4.__target !== e4.target || e4.__relatedTarget !== e4.relatedTarget;
                    }
                    function yn(e4, t4, n3) {
                        if (n3 = t4.__handlers && t4.__handlers[e4.type] && t4.__handlers[e4.type][n3])
                            for (var r2, a2 = 0; (r2 = n3[a2]) && (!gn(e4) || e4.target !== e4.relatedTarget) && (r2.call(t4, e4), !e4.__immediatePropagationStopped); a2++)
                                ;
                    }
                    function bn(e4) {
                        var t4 = e4.composedPath(), n3 = t4.map(function (e5) {
                            return hn(e5, t4);
                        }), r2 = e4.bubbles;
                        Object.defineProperty(e4, "currentTarget", {
                            configurable: true, enumerable: true, get: function () {
                                return i2;
                            }
                        });
                        var a2 = Event.CAPTURING_PHASE;
                        Object.defineProperty(e4, "eventPhase", {
                            configurable: true, enumerable: true, get: function () {
                                return a2;
                            }
                        });
                        for (var o2 = t4.length - 1; 0 <= o2; o2--) {
                            var i2 = t4[o2];
                            if (a2 = i2 === n3[o2] ? Event.AT_TARGET : Event.CAPTURING_PHASE, yn(e4, i2, "capture"), e4.ra)
                                return;
                        }
                        for (o2 = 0; o2 < t4.length; o2++) {
                            var s2 = (i2 = t4[o2]) === n3[o2];
                            if ((s2 || r2) && (a2 = s2 ? Event.AT_TARGET : Event.BUBBLING_PHASE, yn(e4, i2, "bubble"), e4.ra))
                                return;
                        }
                        a2 = 0, i2 = null;
                    }
                    function Cn(e4, t4, n3, r2, a2, o2) {
                        for (var i2 = 0; i2 < e4.length; i2++) {
                            var s2 = e4[i2], l2 = s2.type, u2 = s2.capture, c2 = s2.once, d2 = s2.passive;
                            if (t4 === s2.node && n3 === l2 && r2 === u2 && a2 === c2 && o2 === d2)
                                return i2;
                        }
                        return -1;
                    }
                    function Sn(e4) {
                        return Tt(), !at.fa && this instanceof Node && !vt(document, this) ? (e4.__target || Ln(e4, this), bn(e4)) : this.__shady_native_dispatchEvent(e4);
                    }
                    function _n(e4, t4, n3) {
                        var r2 = un(n3), a2 = r2.capture, o2 = r2.once, i2 = r2.passive, s2 = r2.La;
                        if (r2 = r2.Ja, t4) {
                            var l2 = typeof t4;
                            if ((l2 === "function" || l2 === "object") && (l2 !== "object" || t4.handleEvent && typeof t4.handleEvent == "function")) {
                                if (dn[e4])
                                    return this.__shady_native_addEventListener(e4, t4, r2);
                                var u2 = s2 || this;
                                if (s2 = t4[on]) {
                                    if (-1 < Cn(s2, u2, e4, a2, o2, i2))
                                        return;
                                } else
                                    t4[on] = [];
                                s2 = function (r3) {
                                    if (o2 && this.__shady_removeEventListener(e4, t4, n3), r3.__target || Ln(r3), u2 !== this) {
                                        var i3 = Object.getOwnPropertyDescriptor(r3, "currentTarget");
                                        Object.defineProperty(r3, "currentTarget", {
                                            get: function () {
                                                return u2;
                                            }, configurable: true
                                        });
                                        var s3 = Object.getOwnPropertyDescriptor(r3, "eventPhase");
                                        Object.defineProperty(r3, "eventPhase", {
                                            configurable: true, enumerable: true, get: function () {
                                                return a2 ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE;
                                            }
                                        });
                                    }
                                    if (r3.__previousCurrentTarget = r3.currentTarget, (!lt(u2) && u2.localName !== "slot" || r3.composedPath().indexOf(u2) != -1) && (r3.composed || -1 < r3.composedPath().indexOf(u2))) {
                                        if (gn(r3) && r3.target === r3.relatedTarget)
                                            r3.eventPhase === Event.BUBBLING_PHASE && r3.stopImmediatePropagation();
                                        else if (r3.eventPhase === Event.CAPTURING_PHASE || r3.bubbles || r3.target === u2 || u2 instanceof Window) {
                                            var c2 = l2 === "function" ? t4.call(u2, r3) : t4.handleEvent && t4.handleEvent(r3);
                                            return u2 !== this && (i3 ? (Object.defineProperty(r3, "currentTarget", i3), i3 = null) : delete r3.currentTarget, s3 ? (Object.defineProperty(r3, "eventPhase", s3), s3 = null) : delete r3.eventPhase), c2;
                                        }
                                    }
                                }, t4[on].push({ node: u2, type: e4, capture: a2, once: o2, passive: i2, pb: s2 }), this.__handlers = this.__handlers || {}, this.__handlers[e4] = this.__handlers[e4] || { capture: [], bubble: [] }, this.__handlers[e4][a2 ? "capture" : "bubble"].push(s2), vn[e4] || this.__shady_native_addEventListener(e4, s2, r2);
                            }
                        }
                    }
                    function wn(e4, t4, n3) {
                        if (t4) {
                            var r2 = un(n3);
                            n3 = r2.capture;
                            var a2 = r2.once, o2 = r2.passive, i2 = r2.La;
                            if (r2 = r2.Ja, dn[e4])
                                return this.__shady_native_removeEventListener(e4, t4, r2);
                            var s2 = i2 || this;
                            i2 = void 0;
                            var l2 = null;
                            try {
                                l2 = t4[on];
                            } catch (e5) {
                            }
                            l2 && -1 < (a2 = Cn(l2, s2, e4, n3, a2, o2)) && (i2 = l2.splice(a2, 1)[0].pb, l2.length || (t4[on] = void 0)), this.__shady_native_removeEventListener(e4, i2 || t4, r2), i2 && this.__handlers && this.__handlers[e4] && -1 < (t4 = (e4 = this.__handlers[e4][n3 ? "capture" : "bubble"]).indexOf(i2)) && e4.splice(t4, 1);
                        }
                    }
                    var En = Et({
                        get composed() {
                            return this.__composed === void 0 && (sn ? this.__composed = this.type === "focusin" || this.type === "focusout" || sn(this) : this.isTrusted !== false && (this.__composed = cn[this.type])), this.__composed || false;
                        }, composedPath: function () {
                            return this.__composedPath || (this.__composedPath = pn(this.__target, this.composed)), this.__composedPath;
                        }, get target() {
                            return hn(this.currentTarget || this.__previousCurrentTarget, this.composedPath());
                        }, get relatedTarget() {
                            return this.__relatedTarget ? (this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = pn(this.__relatedTarget, true)), hn(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)) : null;
                        }, stopPropagation: function () {
                            Event.prototype.stopPropagation.call(this), this.ra = true;
                        }, stopImmediatePropagation: function () {
                            Event.prototype.stopImmediatePropagation.call(this), this.ra = this.__immediatePropagationStopped = true;
                        }
                    });
                    function Ln(e4, t4) {
                        if (t4 = t4 === void 0 ? e4.target : t4, e4.__target = t4, e4.__relatedTarget = e4.relatedTarget, at.H) {
                            if (!(t4 = Object.getPrototypeOf(e4)).hasOwnProperty("__shady_patchedProto")) {
                                var n3 = Object.create(t4);
                                n3.__shady_sourceProto = t4, _t(n3, En), t4.__shady_patchedProto = n3;
                            }
                            e4.__proto__ = t4.__shady_patchedProto;
                        } else
                            _t(e4, En);
                    }
                    var kn = mn(Event), Rn = mn(CustomEvent), xn = mn(MouseEvent), Nn = Object.getOwnPropertyNames(Element.prototype).filter(function (e4) {
                        return e4.substring(0, 2) === "on";
                    }), Dn = Object.getOwnPropertyNames(HTMLElement.prototype).filter(function (e4) {
                        return e4.substring(0, 2) === "on";
                    });
                    function Tn(e4) {
                        return {
                            set: function (t4) {
                                var n3 = nt(this), r2 = e4.substring(2);
                                n3.T || (n3.T = {}), n3.T[e4] && this.removeEventListener(r2, n3.T[e4]), this.__shady_addEventListener(r2, t4), n3.T[e4] = t4;
                            }, get: function () {
                                var t4 = rt(this);
                                return t4 && t4.T && t4.T[e4];
                            }, configurable: true
                        };
                    }
                    function Pn(e4, t4) {
                        return { index: e4, ga: [], na: t4 };
                    }
                    function Mn(e4, t4, n3, r2) {
                        var a2 = 0, o2 = 0, i2 = 0, s2 = 0, l2 = Math.min(t4 - a2, r2 - o2);
                        if (a2 == 0 && o2 == 0)
                            e: {
                                for (i2 = 0; i2 < l2; i2++)
                                    if (e4[i2] !== n3[i2])
                                        break e;
                                i2 = l2;
                            }
                        if (t4 == e4.length && r2 == n3.length) {
                            s2 = e4.length;
                            for (var u2 = n3.length, c2 = 0; c2 < l2 - i2 && On(e4[--s2], n3[--u2]);)
                                c2++;
                            s2 = c2;
                        }
                        if (o2 += i2, r2 -= s2, (t4 -= s2) - (a2 += i2) == 0 && r2 - o2 == 0)
                            return [];
                        if (a2 == t4) {
                            for (t4 = Pn(a2, 0); o2 < r2;)
                                t4.ga.push(n3[o2++]);
                            return [t4];
                        }
                        if (o2 == r2)
                            return [Pn(a2, t4 - a2)];
                        for (r2 = r2 - (i2 = o2) + 1, s2 = t4 - (l2 = a2) + 1, t4 = Array(r2), u2 = 0; u2 < r2; u2++)
                            t4[u2] = Array(s2), t4[u2][0] = u2;
                        for (u2 = 0; u2 < s2; u2++)
                            t4[0][u2] = u2;
                        for (u2 = 1; u2 < r2; u2++)
                            for (c2 = 1; c2 < s2; c2++)
                                if (e4[l2 + c2 - 1] === n3[i2 + u2 - 1])
                                    t4[u2][c2] = t4[u2 - 1][c2 - 1];
                                else {
                                    var d2 = t4[u2 - 1][c2] + 1, f2 = t4[u2][c2 - 1] + 1;
                                    t4[u2][c2] = d2 < f2 ? d2 : f2;
                                }
                        for (l2 = t4.length - 1, i2 = t4[0].length - 1, r2 = t4[l2][i2], e4 = []; 0 < l2 || 0 < i2;)
                            l2 == 0 ? (e4.push(2), i2--) : i2 == 0 ? (e4.push(3), l2--) : (s2 = t4[l2 - 1][i2 - 1], (d2 = (u2 = t4[l2 - 1][i2]) < (c2 = t4[l2][i2 - 1]) ? u2 < s2 ? u2 : s2 : c2 < s2 ? c2 : s2) == s2 ? (s2 == r2 ? e4.push(0) : (e4.push(1), r2 = s2), l2--, i2--) : d2 == u2 ? (e4.push(3), l2--, r2 = u2) : (e4.push(2), i2--, r2 = c2));
                        for (e4.reverse(), t4 = void 0, l2 = [], i2 = 0; i2 < e4.length; i2++)
                            switch (e4[i2]) {
                                case 0:
                                    t4 && (l2.push(t4), t4 = void 0), a2++, o2++;
                                    break;
                                case 1:
                                    t4 || (t4 = Pn(a2, 0)), t4.na++, a2++, t4.ga.push(n3[o2]), o2++;
                                    break;
                                case 2:
                                    t4 || (t4 = Pn(a2, 0)), t4.na++, a2++;
                                    break;
                                case 3:
                                    t4 || (t4 = Pn(a2, 0)), t4.ga.push(n3[o2]), o2++;
                            }
                        return t4 && l2.push(t4), l2;
                    }
                    function On(e4, t4) {
                        return e4 === t4;
                    }
                    var In = Et({ dispatchEvent: Sn, addEventListener: _n, removeEventListener: wn }), An = null;
                    function Fn() {
                        return An || (An = window.ShadyCSS && window.ShadyCSS.ScopingShim), An || null;
                    }
                    function zn(e4, t4, n3) {
                        var r2 = Fn();
                        return !(!r2 || t4 !== "class" || (r2.setElementClass(e4, n3), 0));
                    }
                    function jn(e4, t4) {
                        var n3 = Fn();
                        n3 && n3.unscopeNode(e4, t4);
                    }
                    function Un(e4, t4) {
                        var n3 = Fn();
                        if (!n3)
                            return true;
                        if (e4.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                            for (n3 = true, e4 = e4.__shady_firstChild; e4; e4 = e4.__shady_nextSibling)
                                n3 = n3 && Un(e4, t4);
                            return n3;
                        }
                        return e4.nodeType !== Node.ELEMENT_NODE || n3.currentScopeForNode(e4) === t4;
                    }
                    function Bn(e4) {
                        if (e4.nodeType !== Node.ELEMENT_NODE)
                            return "";
                        var t4 = Fn();
                        return t4 ? t4.currentScopeForNode(e4) : "";
                    }
                    function Vn(e4, t4) {
                        if (e4)
                            for (e4.nodeType === Node.ELEMENT_NODE && t4(e4), e4 = e4.__shady_firstChild; e4; e4 = e4.__shady_nextSibling)
                                e4.nodeType === Node.ELEMENT_NODE && Vn(e4, t4);
                    }
                    var Zn = window.document, Hn = at.fa, Gn = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"), Wn = Gn && Gn.get;
                    function qn(e4) {
                        for (var t4; t4 = e4.__shady_firstChild;)
                            e4.__shady_removeChild(t4);
                    }
                    function Kn(e4) {
                        var t4 = rt(e4);
                        if (t4 && t4.qa !== void 0)
                            for (t4 = e4.__shady_firstChild; t4; t4 = t4.__shady_nextSibling)
                                Kn(t4);
                        (e4 = rt(e4)) && (e4.qa = void 0);
                    }
                    function Jn(e4) {
                        var t4 = e4;
                        if (e4 && e4.localName === "slot") {
                            var n3 = rt(e4);
                            (n3 = n3 && n3.aa) && (t4 = n3.length ? n3[0] : Jn(e4.__shady_nextSibling));
                        }
                        return t4;
                    }
                    function Yn(e4, t4, n3) {
                        if (e4 = (e4 = rt(e4)) && e4.ea) {
                            if (t4)
                                if (t4.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                                    for (var r2 = 0, a2 = t4.childNodes.length; r2 < a2; r2++)
                                        e4.addedNodes.push(t4.childNodes[r2]);
                                else
                                    e4.addedNodes.push(t4);
                            n3 && e4.removedNodes.push(n3), function (e5) {
                                e5.g || (e5.g = true, mt(function () {
                                    e5.flush();
                                }));
                            }(e4);
                        }
                    }
                    var Qn = Et({
                        get parentNode() {
                            var e4 = rt(this);
                            return (e4 = e4 && e4.parentNode) !== void 0 ? e4 : this.__shady_native_parentNode;
                        }, get firstChild() {
                            var e4 = rt(this);
                            return (e4 = e4 && e4.firstChild) !== void 0 ? e4 : this.__shady_native_firstChild;
                        }, get lastChild() {
                            var e4 = rt(this);
                            return (e4 = e4 && e4.lastChild) !== void 0 ? e4 : this.__shady_native_lastChild;
                        }, get nextSibling() {
                            var e4 = rt(this);
                            return (e4 = e4 && e4.nextSibling) !== void 0 ? e4 : this.__shady_native_nextSibling;
                        }, get previousSibling() {
                            var e4 = rt(this);
                            return (e4 = e4 && e4.previousSibling) !== void 0 ? e4 : this.__shady_native_previousSibling;
                        }, get childNodes() {
                            if (st(this)) {
                                var e4 = rt(this);
                                if (!e4.childNodes) {
                                    e4.childNodes = [];
                                    for (var t4 = this.__shady_firstChild; t4; t4 = t4.__shady_nextSibling)
                                        e4.childNodes.push(t4);
                                }
                                var n3 = e4.childNodes;
                            } else
                                n3 = this.__shady_native_childNodes;
                            return n3.item = function (e5) {
                                return n3[e5];
                            }, n3;
                        }, get parentElement() {
                            var e4 = rt(this);
                            return (e4 = e4 && e4.parentNode) && e4.nodeType !== Node.ELEMENT_NODE && (e4 = null), e4 !== void 0 ? e4 : this.__shady_native_parentElement;
                        }, get isConnected() {
                            if (Wn && Wn.call(this))
                                return true;
                            if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE)
                                return false;
                            var e4 = this.ownerDocument;
                            if (e4 === null || vt(e4, this))
                                return true;
                            for (e4 = this; e4 && !(e4 instanceof Document);)
                                e4 = e4.__shady_parentNode || (lt(e4) ? e4.host : void 0);
                            return !!(e4 && e4 instanceof Document);
                        }, get textContent() {
                            if (st(this)) {
                                for (var e4 = [], t4 = this.__shady_firstChild; t4; t4 = t4.__shady_nextSibling)
                                    t4.nodeType !== Node.COMMENT_NODE && e4.push(t4.__shady_textContent);
                                return e4.join("");
                            }
                            return this.__shady_native_textContent;
                        }, set textContent(e4) {
                            switch (e4 == null && (e4 = ""), this.nodeType) {
                                case Node.ELEMENT_NODE:
                                case Node.DOCUMENT_FRAGMENT_NODE:
                                    if (!st(this) && at.H) {
                                        var t4 = this.__shady_firstChild;
                                        (t4 != this.__shady_lastChild || t4 && t4.nodeType != Node.TEXT_NODE) && qn(this), this.__shady_native_textContent = e4;
                                    } else
                                        qn(this), (0 < e4.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(e4));
                                    break;
                                default:
                                    this.nodeValue = e4;
                            }
                        }, insertBefore: function (e4, t4) {
                            if (this.ownerDocument !== Zn && e4.ownerDocument !== Zn)
                                return this.__shady_native_insertBefore(e4, t4), e4;
                            if (e4 === this)
                                throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
                            if (t4) {
                                var n3 = rt(t4);
                                if ((n3 = n3 && n3.parentNode) !== void 0 && n3 !== this || n3 === void 0 && t4.__shady_native_parentNode !== this)
                                    throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
                            }
                            if (t4 === e4)
                                return e4;
                            Yn(this, e4);
                            var r2 = [], a2 = (n3 = $r(this)) ? n3.host.localName : Bn(this), o2 = e4.__shady_parentNode;
                            if (o2) {
                                var i2 = Bn(e4), s2 = !!n3 || !$r(e4) || Hn && this.__noInsertionPoint !== void 0;
                                o2.__shady_removeChild(e4, s2);
                            }
                            o2 = true;
                            var l2 = (!Hn || e4.__noInsertionPoint === void 0 && this.__noInsertionPoint === void 0) && !Un(e4, a2), c2 = n3 && !e4.__noInsertionPoint && (!Hn || e4.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
                            return (c2 || l2) && (l2 && (i2 = i2 || Bn(e4)), Vn(e4, function (e5) {
                                if (c2 && e5.localName === "slot" && r2.push(e5), l2) {
                                    var t5 = i2;
                                    Fn() && (t5 && jn(e5, t5), (t5 = Fn()) && t5.scopeNode(e5, a2));
                                }
                            })), r2.length && (Gr(n3), n3.i.push.apply(n3.i, u(r2)), Ur(n3)), st(this) && (function (e5, t5, n4) {
                                Nr(t5, 2);
                                var r3 = nt(t5);
                                if (r3.firstChild !== void 0 && (r3.childNodes = null), e5.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                                    for (e5 = e5.__shady_native_firstChild; e5; e5 = e5.__shady_native_nextSibling)
                                        Dr(e5, t5, r3, n4);
                                else
                                    Dr(e5, t5, r3, n4);
                            }(e4, this, t4), (s2 = rt(this)).root ? (o2 = false, ut(this) && Ur(s2.root)) : n3 && this.localName === "slot" && (o2 = false, Ur(n3))), o2 ? (n3 = lt(this) ? this.host : this, t4 ? (t4 = Jn(t4), n3.__shady_native_insertBefore(e4, t4)) : n3.__shady_native_appendChild(e4)) : e4.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(e4), e4;
                        }, appendChild: function (e4) {
                            if (this != e4 || !lt(e4))
                                return this.__shady_insertBefore(e4);
                        }, removeChild: function (e4, t4) {
                            if (t4 = t4 !== void 0 && t4, this.ownerDocument !== Zn)
                                return this.__shady_native_removeChild(e4);
                            if (e4.__shady_parentNode !== this)
                                throw Error("The node to be removed is not a child of this node: " + e4);
                            Yn(this, null, e4);
                            var n3 = $r(e4), r2 = n3 && function (e5, t5) {
                                if (e5.g) {
                                    Wr(e5);
                                    var n4, r3 = e5.h;
                                    for (n4 in r3)
                                        for (var a3 = r3[n4], o3 = 0; o3 < a3.length; o3++) {
                                            var i3 = a3[o3];
                                            if (gt(t5, i3)) {
                                                a3.splice(o3, 1);
                                                var s2 = e5.g.indexOf(i3);
                                                if (0 <= s2 && (e5.g.splice(s2, 1), (s2 = rt(i3.__shady_parentNode)) && s2.ia && s2.ia--), o3--, s2 = (i3 = rt(i3)).aa)
                                                    for (var l2 = 0; l2 < s2.length; l2++) {
                                                        var u2 = s2[l2], c2 = u2.__shady_native_parentNode;
                                                        c2 && c2.__shady_native_removeChild(u2);
                                                    }
                                                i3.aa = [], i3.assignedNodes = [], s2 = true;
                                            }
                                        }
                                    return s2;
                                }
                            }(n3, e4), a2 = rt(this);
                            if (st(this) && (function (e5, t5) {
                                var n4 = nt(e5);
                                e5 === (t5 = nt(t5)).firstChild && (t5.firstChild = n4.nextSibling), e5 === t5.lastChild && (t5.lastChild = n4.previousSibling), e5 = n4.previousSibling;
                                var r3 = n4.nextSibling;
                                e5 && (nt(e5).nextSibling = r3), r3 && (nt(r3).previousSibling = e5), n4.parentNode = n4.previousSibling = n4.nextSibling = void 0, t5.childNodes !== void 0 && (t5.childNodes = null);
                            }(e4, this), ut(this))) {
                                Ur(a2.root);
                                var o2 = true;
                            }
                            if (Fn() && !t4 && n3 && e4.nodeType !== Node.TEXT_NODE) {
                                var i2 = Bn(e4);
                                Vn(e4, function (e5) {
                                    jn(e5, i2);
                                });
                            }
                            return Kn(e4), n3 && ((t4 = this.localName === "slot") && (o2 = true), (r2 || t4) && Ur(n3)), o2 || (o2 = lt(this) ? this.host : this, (!a2.root && e4.localName !== "slot" || o2 === e4.__shady_native_parentNode) && o2.__shady_native_removeChild(e4)), e4;
                        }, replaceChild: function (e4, t4) {
                            return this.__shady_insertBefore(e4, t4), this.__shady_removeChild(t4), e4;
                        }, cloneNode: function (e4) {
                            if (this.localName == "template")
                                return this.__shady_native_cloneNode(e4);
                            var t4 = this.__shady_native_cloneNode(false);
                            if (e4 && t4.nodeType !== Node.ATTRIBUTE_NODE) {
                                e4 = this.__shady_firstChild;
                                for (var n3; e4; e4 = e4.__shady_nextSibling)
                                    n3 = e4.__shady_cloneNode(true), t4.__shady_appendChild(n3);
                            }
                            return t4;
                        }, getRootNode: function (e4) {
                            if (this && this.nodeType) {
                                var t4 = nt(this), n3 = t4.qa;
                                return n3 === void 0 && (lt(this) ? (n3 = this, t4.qa = n3) : (n3 = (n3 = this.__shady_parentNode) ? n3.__shady_getRootNode(e4) : this, document.documentElement.__shady_native_contains(this) && (t4.qa = n3))), n3;
                            }
                        }, contains: function (e4) {
                            return gt(this, e4);
                        }
                    }), Xn = Et({
                        get assignedSlot() {
                            var e4 = this.__shady_parentNode;
                            return (e4 = e4 && e4.__shady_shadowRoot) && Br(e4), (e4 = rt(this)) && e4.assignedSlot || null;
                        }
                    });
                    function $n(e4, t4, n3) {
                        var r2 = [];
                        return er(e4, t4, n3, r2), r2;
                    }
                    function er(e4, t4, n3, r2) {
                        for (e4 = e4.__shady_firstChild; e4; e4 = e4.__shady_nextSibling) {
                            var a2;
                            if (a2 = e4.nodeType === Node.ELEMENT_NODE) {
                                var o2 = t4, i2 = n3, s2 = r2, l2 = o2(a2 = e4);
                                l2 && s2.push(a2), i2 && i2(l2) ? a2 = l2 : (er(a2, o2, i2, s2), a2 = void 0);
                            }
                            if (a2)
                                break;
                        }
                    }
                    var tr = {
                        get firstElementChild() {
                            var e4 = rt(this);
                            if (e4 && e4.firstChild !== void 0) {
                                for (e4 = this.__shady_firstChild; e4 && e4.nodeType !== Node.ELEMENT_NODE;)
                                    e4 = e4.__shady_nextSibling;
                                return e4;
                            }
                            return this.__shady_native_firstElementChild;
                        }, get lastElementChild() {
                            var e4 = rt(this);
                            if (e4 && e4.lastChild !== void 0) {
                                for (e4 = this.__shady_lastChild; e4 && e4.nodeType !== Node.ELEMENT_NODE;)
                                    e4 = e4.__shady_previousSibling;
                                return e4;
                            }
                            return this.__shady_native_lastElementChild;
                        }, get children() {
                            return st(this) ? yt(Array.prototype.filter.call(Ct(this), function (e4) {
                                return e4.nodeType === Node.ELEMENT_NODE;
                            })) : this.__shady_native_children;
                        }, get childElementCount() {
                            var e4 = this.__shady_children;
                            return e4 ? e4.length : 0;
                        }
                    }, nr = Et((tr.append = function (e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        this.__shady_insertBefore(Rt.apply(null, u(t4)), null);
                    }, tr.prepend = function (e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        this.__shady_insertBefore(Rt.apply(null, u(t4)), this.__shady_firstChild);
                    }, tr.replaceChildren = function (e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        for (; (n3 = this.__shady_firstChild) !== null;)
                            this.__shady_removeChild(n3);
                        this.__shady_insertBefore(Rt.apply(null, u(t4)), null);
                    }, tr)), rr = Et({
                        querySelector: function (e4) {
                            return $n(this, function (t4) {
                                return dt.call(t4, e4);
                            }, function (e5) {
                                return !!e5;
                            })[0] || null;
                        }, querySelectorAll: function (e4, t4) {
                            if (t4) {
                                t4 = Array.prototype.slice.call(this.__shady_native_querySelectorAll(e4));
                                var n3 = this.__shady_getRootNode();
                                return yt(t4.filter(function (e5) {
                                    return e5.__shady_getRootNode() == n3;
                                }));
                            }
                            return yt($n(this, function (t5) {
                                return dt.call(t5, e4);
                            }));
                        }
                    }), ar = at.fa && !at.J ? Lt({}, nr) : nr;
                    Lt(nr, rr);
                    var or = Et({
                        after: function (e4) {
                            for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                t4[n3] = arguments[n3];
                            if ((n3 = this.__shady_parentNode) !== null) {
                                var r2 = this.__shady_nextSibling;
                                n3.__shady_insertBefore(Rt.apply(null, u(t4)), r2);
                            }
                        }, before: function (e4) {
                            for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                t4[n3] = arguments[n3];
                            (n3 = this.__shady_parentNode) !== null && n3.__shady_insertBefore(Rt.apply(null, u(t4)), this);
                        }, remove: function () {
                            var e4 = this.__shady_parentNode;
                            e4 !== null && e4.__shady_removeChild(this);
                        }, replaceWith: function (e4) {
                            for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                                t4[n3] = arguments[n3];
                            if ((n3 = this.__shady_parentNode) !== null) {
                                var r2 = this.__shady_nextSibling;
                                n3.__shady_removeChild(this), n3.__shady_insertBefore(Rt.apply(null, u(t4)), r2);
                            }
                        }
                    }), ir = window.document;
                    function sr(e4, t4) {
                        if (t4 === "slot")
                            ut(e4 = e4.__shady_parentNode) && Ur(rt(e4).root);
                        else if (e4.localName === "slot" && t4 === "name" && (t4 = $r(e4))) {
                            if (t4.g) {
                                Wr(t4);
                                var n3 = e4.Qa, r2 = qr(e4);
                                if (r2 !== n3) {
                                    var a2 = (n3 = t4.h[n3]).indexOf(e4);
                                    0 <= a2 && n3.splice(a2, 1), (n3 = t4.h[r2] || (t4.h[r2] = [])).push(e4), 1 < n3.length && (t4.h[r2] = Kr(n3));
                                }
                            }
                            Ur(t4);
                        }
                    }
                    var lr = Et({
                        get previousElementSibling() {
                            var e4 = rt(this);
                            if (e4 && e4.previousSibling !== void 0) {
                                for (e4 = this.__shady_previousSibling; e4 && e4.nodeType !== Node.ELEMENT_NODE;)
                                    e4 = e4.__shady_previousSibling;
                                return e4;
                            }
                            return this.__shady_native_previousElementSibling;
                        }, get nextElementSibling() {
                            var e4 = rt(this);
                            if (e4 && e4.nextSibling !== void 0) {
                                for (e4 = this.__shady_nextSibling; e4 && e4.nodeType !== Node.ELEMENT_NODE;)
                                    e4 = e4.__shady_nextSibling;
                                return e4;
                            }
                            return this.__shady_native_nextElementSibling;
                        }, get slot() {
                            return this.getAttribute("slot");
                        }, set slot(e4) {
                            this.__shady_setAttribute("slot", e4);
                        }, get className() {
                            return this.getAttribute("class") || "";
                        }, set className(e4) {
                            this.__shady_setAttribute("class", e4);
                        }, setAttribute: function (e4, t4) {
                            this.ownerDocument !== ir ? this.__shady_native_setAttribute(e4, t4) : zn(this, e4, t4) || (this.__shady_native_setAttribute(e4, t4), sr(this, e4));
                        }, removeAttribute: function (e4) {
                            this.ownerDocument !== ir ? this.__shady_native_removeAttribute(e4) : zn(this, e4, "") ? this.getAttribute(e4) === "" && this.__shady_native_removeAttribute(e4) : (this.__shady_native_removeAttribute(e4), sr(this, e4));
                        }
                    });
                    at.fa || Nn.forEach(function (e4) {
                        lr[e4] = Tn(e4);
                    });
                    var ur = Et({
                        attachShadow: function (e4) {
                            if (!this)
                                throw Error("Must provide a host.");
                            if (!e4)
                                throw Error("Not enough arguments.");
                            if (e4.shadyUpgradeFragment && !at.Na) {
                                var t4 = e4.shadyUpgradeFragment;
                                if (t4.__proto__ = ShadowRoot.prototype, jr(t4, this, e4), Tr(t4, t4), e4 = t4.__noInsertionPoint ? null : t4.querySelectorAll("slot"), t4.__noInsertionPoint = void 0, e4 && e4.length) {
                                    var n3 = t4;
                                    Gr(n3), n3.i.push.apply(n3.i, u(e4)), Ur(t4);
                                }
                                t4.host.__shady_native_appendChild(t4);
                            } else
                                t4 = new zr(Ir, this, e4);
                            return this.__CE_shadowRoot = t4;
                        }, get shadowRoot() {
                            var e4 = rt(this);
                            return e4 && e4.gb || null;
                        }
                    });
                    Lt(lr, ur);
                    var cr = document.implementation.createHTMLDocument("inert"), dr = Et({
                        get innerHTML() {
                            return st(this) ? jt(this.localName === "template" ? this.content : this, Ct) : this.__shady_native_innerHTML;
                        }, set innerHTML(e4) {
                            if (this.localName === "template")
                                this.__shady_native_innerHTML = e4;
                            else {
                                qn(this);
                                var t4 = this.localName || "div";
                                for (t4 = this.namespaceURI && this.namespaceURI !== cr.namespaceURI ? cr.createElementNS(this.namespaceURI, t4) : cr.createElement(t4), at.H ? t4.__shady_native_innerHTML = e4 : t4.innerHTML = e4; e4 = t4.__shady_firstChild;)
                                    this.__shady_insertBefore(e4);
                            }
                        }
                    }), fr = Et({
                        blur: function () {
                            var e4 = rt(this);
                            (e4 = (e4 = e4 && e4.root) && e4.activeElement) ? e4.__shady_blur() : this.__shady_native_blur();
                        }
                    });
                    at.fa || Dn.forEach(function (e4) {
                        fr[e4] = Tn(e4);
                    });
                    var pr = Et({
                        assignedNodes: function (e4) {
                            if (this.localName === "slot") {
                                var t4 = this.__shady_getRootNode();
                                return t4 && lt(t4) && Br(t4), (t4 = rt(this)) && (e4 && e4.flatten ? t4.aa : t4.assignedNodes) || [];
                            }
                        }, addEventListener: function (e4, t4, n3) {
                            if (this.localName !== "slot" || e4 === "slotchange")
                                _n.call(this, e4, t4, n3);
                            else {
                                typeof n3 != "object" && (n3 = { capture: !!n3 });
                                var r2 = this.__shady_parentNode;
                                if (!r2)
                                    throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                                n3.U = this, r2.__shady_addEventListener(e4, t4, n3);
                            }
                        }, removeEventListener: function (e4, t4, n3) {
                            if (this.localName !== "slot" || e4 === "slotchange")
                                wn.call(this, e4, t4, n3);
                            else {
                                typeof n3 != "object" && (n3 = { capture: !!n3 });
                                var r2 = this.__shady_parentNode;
                                if (!r2)
                                    throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                                n3.U = this, r2.__shady_removeEventListener(e4, t4, n3);
                            }
                        }
                    }), hr = Et({
                        getElementById: function (e4) {
                            return e4 === "" ? null : $n(this, function (t4) {
                                return t4.id == e4;
                            }, function (e5) {
                                return !!e5;
                            })[0] || null;
                        }
                    });
                    function mr(e4, t4) {
                        for (var n3; t4 && !e4.has(n3 = t4.__shady_getRootNode());)
                            t4 = n3.host;
                        return t4;
                    }
                    var vr = "__shady_native_" + it(), gr = Et({
                        get activeElement() {
                            var e4 = at.H ? document.__shady_native_activeElement : document.activeElement;
                            if (!e4 || !e4.nodeType)
                                return null;
                            var t4 = !!lt(this);
                            if (!(this === document || t4 && this.host !== e4 && this.host.__shady_native_contains(e4)))
                                return null;
                            for (t4 = $r(e4); t4 && t4 !== this;)
                                t4 = $r(e4 = t4.host);
                            return this === document ? t4 ? null : e4 : t4 === this ? e4 : null;
                        }, elementsFromPoint: function (e4, t4) {
                            e4 = [].slice.call(document[vr](e4, t4)), t4 = function (e5) {
                                var t5 = new Set();
                                for (t5.add(e5); lt(e5) && e5.host;)
                                    e5 = e5.host.__shady_getRootNode(), t5.add(e5);
                                return t5;
                            }(this);
                            for (var n3 = new Set(), r2 = 0; r2 < e4.length; r2++)
                                n3.add(mr(t4, e4[r2]));
                            var a2 = [];
                            return n3.forEach(function (e5) {
                                return a2.push(e5);
                            }), a2;
                        }, elementFromPoint: function (e4, t4) {
                            return this.__shady_elementsFromPoint(e4, t4)[0] || null;
                        }
                    }), yr = window.document, br = Et({
                        importNode: function (e4, t4) {
                            if (e4.ownerDocument !== yr || e4.localName === "template")
                                return this.__shady_native_importNode(e4, t4);
                            var n3 = this.__shady_native_importNode(e4, false);
                            if (t4)
                                for (e4 = e4.__shady_firstChild; e4; e4 = e4.__shady_nextSibling)
                                    t4 = this.__shady_importNode(e4, true), n3.__shady_appendChild(t4);
                            return n3;
                        }
                    }), Cr = Et({ dispatchEvent: Sn, addEventListener: _n.bind(window), removeEventListener: wn.bind(window) }), Sr = {};
                    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Sr.parentElement = Qn.parentElement), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Sr.contains = Qn.contains), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Sr.children = nr.children), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Sr.innerHTML = dr.innerHTML), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Sr.className = lr.className);
                    var _r = { EventTarget: [In], Node: [Qn, window.EventTarget ? null : In], Text: [Xn], Comment: [Xn], CDATASection: [Xn], ProcessingInstruction: [Xn], Element: [lr, nr, or, Xn, !at.H || "innerHTML" in Element.prototype ? dr : null, window.HTMLSlotElement ? null : pr], HTMLElement: [fr, Sr], HTMLSlotElement: [pr], DocumentFragment: [ar, hr], Document: [br, ar, hr, gr], Window: [Cr], CharacterData: [or] }, wr = at.H ? null : ["innerHTML", "textContent"];
                    function Er(e4, t4, n3, r2) {
                        t4.forEach(function (t5) {
                            return e4 && t5 && _t(e4, t5, n3, r2);
                        });
                    }
                    function Lr(e4) {
                        var t4, n3 = e4 ? null : wr;
                        for (t4 in _r)
                            Er(window[t4] && window[t4].prototype, _r[t4], e4, n3);
                    }
                    function kr(e4) {
                        return e4.__shady_protoIsPatched = true, Er(e4, _r.EventTarget), Er(e4, _r.Node), Er(e4, _r.Element), Er(e4, _r.HTMLElement), Er(e4, _r.HTMLSlotElement), e4;
                    }
                    ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function (e4) {
                        var t4 = window[e4], n3 = Object.create(t4.prototype);
                        n3.__shady_protoIsPatched = true, Er(n3, _r.EventTarget), Er(n3, _r.Node), _r[e4] && Er(n3, _r[e4]), t4.prototype.__shady_patchedProto = n3;
                    });
                    var Rr = at.Aa, xr = at.H;
                    function Nr(e4, t4) {
                        if (Rr && !e4.__shady_protoIsPatched && !lt(e4)) {
                            var n3 = Object.getPrototypeOf(e4), r2 = n3.hasOwnProperty("__shady_patchedProto") && n3.__shady_patchedProto;
                            r2 || (kr(r2 = Object.create(n3)), n3.__shady_patchedProto = r2), Object.setPrototypeOf(e4, r2);
                        }
                        xr || (t4 === 1 ? rn(e4) : t4 === 2 && an(e4));
                    }
                    function Dr(e4, t4, n3, r2) {
                        Nr(e4, 1), r2 = r2 || null;
                        var a2 = nt(e4), o2 = r2 ? nt(r2) : null;
                        a2.previousSibling = r2 ? o2.previousSibling : t4.__shady_lastChild, (o2 = rt(a2.previousSibling)) && (o2.nextSibling = e4), (o2 = rt(a2.nextSibling = r2)) && (o2.previousSibling = e4), a2.parentNode = t4, r2 ? r2 === n3.firstChild && (n3.firstChild = e4) : (n3.lastChild = e4, n3.firstChild || (n3.firstChild = e4)), n3.childNodes = null;
                    }
                    function Tr(e4, t4) {
                        var n3 = nt(e4);
                        if (t4 || n3.firstChild === void 0) {
                            n3.childNodes = null;
                            var r2 = n3.firstChild = e4.__shady_native_firstChild;
                            for (n3.lastChild = e4.__shady_native_lastChild, Nr(e4, 2), n3 = r2, r2 = void 0; n3; n3 = n3.__shady_native_nextSibling) {
                                var a2 = nt(n3);
                                a2.parentNode = t4 || e4, a2.nextSibling = n3.__shady_native_nextSibling, a2.previousSibling = r2 || null, r2 = n3, Nr(n3, 1);
                            }
                        }
                    }
                    var Pr = Et({
                        addEventListener: function (e4, t4, n3) {
                            typeof n3 != "object" && (n3 = { capture: !!n3 }), n3.U = n3.U || this, this.host.__shady_addEventListener(e4, t4, n3);
                        }, removeEventListener: function (e4, t4, n3) {
                            typeof n3 != "object" && (n3 = { capture: !!n3 }), n3.U = n3.U || this, this.host.__shady_removeEventListener(e4, t4, n3);
                        }
                    });
                    function Mr(e4, t4) {
                        _t(e4, Pr, t4), _t(e4, gr, t4), _t(e4, dr, t4), _t(e4, nr, t4), at.J && !t4 ? (_t(e4, Qn, t4), _t(e4, hr, t4)) : at.H || (_t(e4, en), _t(e4, Xt), _t(e4, $t));
                    }
                    var Or, Ir = {}, Ar = at.deferConnectionCallbacks && document.readyState === "loading";
                    function Fr(e4) {
                        var t4 = [];
                        do {
                            t4.unshift(e4);
                        } while (e4 = e4.__shady_parentNode);
                        return t4;
                    }
                    function zr(e4, t4, n3) {
                        if (e4 !== Ir)
                            throw new TypeError("Illegal constructor");
                        this.g = null, jr(this, t4, n3);
                    }
                    function jr(e4, t4, n3) {
                        if (e4.host = t4, e4.mode = n3 && n3.mode, Tr(e4.host), (t4 = nt(e4.host)).root = e4, t4.gb = e4.mode !== "closed" ? e4 : null, (t4 = nt(e4)).firstChild = t4.lastChild = t4.parentNode = t4.nextSibling = t4.previousSibling = null, at.preferPerformance)
                            for (; t4 = e4.host.__shady_native_firstChild;)
                                e4.host.__shady_native_removeChild(t4);
                        else
                            Ur(e4);
                    }
                    function Ur(e4) {
                        e4.Y || (e4.Y = true, Dt(function () {
                            return Br(e4);
                        }));
                    }
                    function Br(e4) {
                        var t4;
                        if (t4 = e4.Y) {
                            for (var n3; e4;)
                                e4.Y && (n3 = e4), lt(e4 = (t4 = e4).host.__shady_getRootNode()) && (t4 = rt(t4.host)) && 0 < t4.ia || (e4 = void 0);
                            t4 = n3;
                        }
                        (n3 = t4) && n3._renderSelf();
                    }
                    function Vr(e4, t4, n3) {
                        var r2 = nt(t4), a2 = r2.ua;
                        r2.ua = null, n3 || (n3 = (e4 = e4.h[t4.__shady_slot || "__catchall"]) && e4[0]), n3 ? (nt(n3).assignedNodes.push(t4), r2.assignedSlot = n3) : r2.assignedSlot = void 0, a2 !== r2.assignedSlot && r2.assignedSlot && (nt(r2.assignedSlot).xa = true);
                    }
                    function Zr(e4, t4, n3) {
                        for (var r2 = 0, a2 = void 0; r2 < n3.length && (a2 = n3[r2]); r2++)
                            if (a2.localName == "slot") {
                                var o2 = rt(a2).assignedNodes;
                                o2 && o2.length && Zr(e4, t4, o2);
                            } else
                                t4.push(n3[r2]);
                    }
                    function Hr(e4, t4) {
                        t4.__shady_native_dispatchEvent(new Event("slotchange")), (t4 = rt(t4)).assignedSlot && Hr(e4, t4.assignedSlot);
                    }
                    function Gr(e4) {
                        e4.i = e4.i || [], e4.g = e4.g || [], e4.h = e4.h || {};
                    }
                    function Wr(e4) {
                        if (e4.i && e4.i.length) {
                            for (var t4, n3 = e4.i, r2 = 0; r2 < n3.length; r2++) {
                                var a2 = n3[r2];
                                Tr(a2);
                                var o2 = a2.__shady_parentNode;
                                Tr(o2), (o2 = rt(o2)).ia = (o2.ia || 0) + 1, o2 = qr(a2), e4.h[o2] ? ((t4 = t4 || {})[o2] = true, e4.h[o2].push(a2)) : e4.h[o2] = [a2], e4.g.push(a2);
                            }
                            if (t4)
                                for (var i2 in t4)
                                    e4.h[i2] = Kr(e4.h[i2]);
                            e4.i = [];
                        }
                    }
                    function qr(e4) {
                        var t4 = e4.name || e4.getAttribute("name") || "__catchall";
                        return e4.Qa = t4;
                    }
                    function Kr(e4) {
                        return e4.sort(function (e5, t4) {
                            e5 = Fr(e5);
                            for (var n3 = Fr(t4), r2 = 0; r2 < e5.length; r2++) {
                                t4 = e5[r2];
                                var a2 = n3[r2];
                                if (t4 !== a2)
                                    return (e5 = Ct(t4.__shady_parentNode)).indexOf(t4) - e5.indexOf(a2);
                            }
                        });
                    }
                    function Jr(e4) {
                        return Wr(e4), !(!e4.g || !e4.g.length);
                    }
                    if (zr.prototype._renderSelf = function () {
                        var e4 = Ar;
                        if (Ar = true, this.Y = false, this.g) {
                            Wr(this);
                            for (var t4, n3 = 0; n3 < this.g.length; n3++) {
                                var r2 = rt(t4 = this.g[n3]), a2 = r2.assignedNodes;
                                if (r2.assignedNodes = [], r2.aa = [], r2.Ga = a2)
                                    for (r2 = 0; r2 < a2.length; r2++) {
                                        var o2 = rt(a2[r2]);
                                        o2.ua = o2.assignedSlot, o2.assignedSlot === t4 && (o2.assignedSlot = null);
                                    }
                            }
                            for (n3 = this.host.__shady_firstChild; n3; n3 = n3.__shady_nextSibling)
                                Vr(this, n3);
                            for (n3 = 0; n3 < this.g.length; n3++) {
                                if (!(a2 = rt(t4 = this.g[n3])).assignedNodes.length)
                                    for (r2 = t4.__shady_firstChild; r2; r2 = r2.__shady_nextSibling)
                                        Vr(this, r2, t4);
                                if ((r2 = (r2 = rt(t4.__shady_parentNode)) && r2.root) && (Jr(r2) || r2.Y) && r2._renderSelf(), Zr(this, a2.aa, a2.assignedNodes), r2 = a2.Ga) {
                                    for (o2 = 0; o2 < r2.length; o2++)
                                        rt(r2[o2]).ua = null;
                                    a2.Ga = null, r2.length > a2.assignedNodes.length && (a2.xa = true);
                                }
                                a2.xa && (a2.xa = false, Hr(this, t4));
                            }
                            for (t4 = this.g, n3 = [], a2 = 0; a2 < t4.length; a2++)
                                (o2 = rt(r2 = t4[a2].__shady_parentNode)) && o2.root || !(0 > n3.indexOf(r2)) || n3.push(r2);
                            for (t4 = 0; t4 < n3.length; t4++) {
                                for (a2 = (o2 = n3[t4]) === this ? this.host : o2, r2 = [], o2 = o2.__shady_firstChild; o2; o2 = o2.__shady_nextSibling)
                                    if (o2.localName == "slot")
                                        for (var i2 = rt(o2).aa, s2 = 0; s2 < i2.length; s2++)
                                            r2.push(i2[s2]);
                                    else
                                        r2.push(o2);
                                o2 = bt(a2), i2 = Mn(r2, r2.length, o2, o2.length);
                                for (var l2 = s2 = 0, u2 = void 0; s2 < i2.length && (u2 = i2[s2]); s2++) {
                                    for (var c2 = 0, d2 = void 0; c2 < u2.ga.length && (d2 = u2.ga[c2]); c2++)
                                        d2.__shady_native_parentNode === a2 && a2.__shady_native_removeChild(d2), o2.splice(u2.index + l2, 1);
                                    l2 -= u2.na;
                                }
                                for (l2 = 0, u2 = void 0; l2 < i2.length && (u2 = i2[l2]); l2++)
                                    for (s2 = o2[u2.index], c2 = u2.index; c2 < u2.index + u2.na; c2++)
                                        d2 = r2[c2], a2.__shady_native_insertBefore(d2, s2), o2.splice(c2, 0, d2);
                            }
                        }
                        if (!at.preferPerformance && !this.Fa)
                            for (n3 = this.host.__shady_firstChild; n3; n3 = n3.__shady_nextSibling)
                                t4 = rt(n3), n3.__shady_native_parentNode !== this.host || n3.localName !== "slot" && t4.assignedSlot || this.host.__shady_native_removeChild(n3);
                        this.Fa = true, Ar = e4, Or && Or();
                    }, function (e4) {
                        e4.__proto__ = DocumentFragment.prototype, Mr(e4, "__shady_"), Mr(e4), Object.defineProperties(e4, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: true }, nodeName: { value: "#document-fragment", configurable: true }, nodeValue: { value: null, configurable: true } }), ["localName", "namespaceURI", "prefix"].forEach(function (t4) {
                            Object.defineProperty(e4, t4, { value: void 0, configurable: true });
                        }), ["ownerDocument", "baseURI", "isConnected"].forEach(function (t4) {
                            Object.defineProperty(e4, t4, {
                                get: function () {
                                    return this.host[t4];
                                }, configurable: true
                            });
                        });
                    }(zr.prototype), window.customElements && window.customElements.define && at.ya && !at.preferPerformance) {
                        var Yr = new Map();
                        Or = function () {
                            var e4 = [];
                            Yr.forEach(function (t5, n4) {
                                e4.push([n4, t5]);
                            }), Yr.clear();
                            for (var t4 = 0; t4 < e4.length; t4++) {
                                var n3 = e4[t4][0];
                                e4[t4][1] ? n3.__shadydom_connectedCallback() : n3.__shadydom_disconnectedCallback();
                            }
                        }, Ar && document.addEventListener("readystatechange", function () {
                            Ar = false, Or();
                        }, { once: true });
                        var Qr = window.customElements.define, Xr = function (e4, t4) {
                            var n3 = t4.prototype.connectedCallback, r2 = t4.prototype.disconnectedCallback;
                            Qr.call(window.customElements, e4, function (e5, t5, n4) {
                                var r3 = 0, a2 = "__isConnected" + r3++;
                                return (t5 || n4) && (e5.prototype.connectedCallback = e5.prototype.__shadydom_connectedCallback = function () {
                                    Ar ? Yr.set(this, true) : this[a2] || (this[a2] = true, t5 && t5.call(this));
                                }, e5.prototype.disconnectedCallback = e5.prototype.__shadydom_disconnectedCallback = function () {
                                    Ar ? this.isConnected || Yr.set(this, false) : this[a2] && (this[a2] = false, n4 && n4.call(this));
                                }), e5;
                            }(t4, n3, r2)), t4.prototype.connectedCallback = n3, t4.prototype.disconnectedCallback = r2;
                        };
                        window.customElements.define = Xr, Object.defineProperty(window.CustomElementRegistry.prototype, "define", { value: Xr, configurable: true });
                    }
                    function $r(e4) {
                        if (lt(e4 = e4.__shady_getRootNode()))
                            return e4;
                    }
                    function ea(e4) {
                        this.node = e4;
                    }
                    function ta(e4) {
                        Object.defineProperty(ea.prototype, e4, {
                            get: function () {
                                return this.node["__shady_" + e4];
                            }, set: function (t4) {
                                this.node["__shady_" + e4] = t4;
                            }, configurable: true
                        });
                    }
                    (e3 = ea.prototype).addEventListener = function (e4, t4, n3) {
                        return this.node.__shady_addEventListener(e4, t4, n3);
                    }, e3.removeEventListener = function (e4, t4, n3) {
                        return this.node.__shady_removeEventListener(e4, t4, n3);
                    }, e3.appendChild = function (e4) {
                        return this.node.__shady_appendChild(e4);
                    }, e3.insertBefore = function (e4, t4) {
                        return this.node.__shady_insertBefore(e4, t4);
                    }, e3.removeChild = function (e4) {
                        return this.node.__shady_removeChild(e4);
                    }, e3.replaceChild = function (e4, t4) {
                        return this.node.__shady_replaceChild(e4, t4);
                    }, e3.cloneNode = function (e4) {
                        return this.node.__shady_cloneNode(e4);
                    }, e3.getRootNode = function (e4) {
                        return this.node.__shady_getRootNode(e4);
                    }, e3.contains = function (e4) {
                        return this.node.__shady_contains(e4);
                    }, e3.dispatchEvent = function (e4) {
                        return this.node.__shady_dispatchEvent(e4);
                    }, e3.setAttribute = function (e4, t4) {
                        this.node.__shady_setAttribute(e4, t4);
                    }, e3.getAttribute = function (e4) {
                        return this.node.__shady_native_getAttribute(e4);
                    }, e3.hasAttribute = function (e4) {
                        return this.node.__shady_native_hasAttribute(e4);
                    }, e3.removeAttribute = function (e4) {
                        this.node.__shady_removeAttribute(e4);
                    }, e3.attachShadow = function (e4) {
                        return this.node.__shady_attachShadow(e4);
                    }, e3.focus = function () {
                        this.node.__shady_native_focus();
                    }, e3.blur = function () {
                        this.node.__shady_blur();
                    }, e3.importNode = function (e4, t4) {
                        if (this.node.nodeType === Node.DOCUMENT_NODE)
                            return this.node.__shady_importNode(e4, t4);
                    }, e3.getElementById = function (e4) {
                        if (this.node.nodeType === Node.DOCUMENT_NODE)
                            return this.node.__shady_getElementById(e4);
                    }, e3.elementsFromPoint = function (e4, t4) {
                        return this.node.__shady_elementsFromPoint(e4, t4);
                    }, e3.elementFromPoint = function (e4, t4) {
                        return this.node.__shady_elementFromPoint(e4, t4);
                    }, e3.querySelector = function (e4) {
                        return this.node.__shady_querySelector(e4);
                    }, e3.querySelectorAll = function (e4, t4) {
                        return this.node.__shady_querySelectorAll(e4, t4);
                    }, e3.assignedNodes = function (e4) {
                        if (this.node.localName === "slot")
                            return this.node.__shady_assignedNodes(e4);
                    }, e3.append = function (e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        return this.node.__shady_append.apply(this.node, u(t4));
                    }, e3.prepend = function (e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        return this.node.__shady_prepend.apply(this.node, u(t4));
                    }, e3.after = function (e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        return this.node.__shady_after.apply(this.node, u(t4));
                    }, e3.before = function (e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        return this.node.__shady_before.apply(this.node, u(t4));
                    }, e3.remove = function () {
                        return this.node.__shady_remove();
                    }, e3.replaceWith = function (e4) {
                        for (var t4 = [], n3 = 0; n3 < arguments.length; ++n3)
                            t4[n3] = arguments[n3];
                        return this.node.__shady_replaceWith.apply(this.node, u(t4));
                    }, o.Object.defineProperties(ea.prototype, {
                        activeElement: {
                            configurable: true, enumerable: true, get: function () {
                                if (lt(this.node) || this.node.nodeType === Node.DOCUMENT_NODE)
                                    return this.node.__shady_activeElement;
                            }
                        }, _activeElement: {
                            configurable: true, enumerable: true, get: function () {
                                return this.activeElement;
                            }
                        }, host: {
                            configurable: true, enumerable: true, get: function () {
                                if (lt(this.node))
                                    return this.node.host;
                            }
                        }, parentNode: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_parentNode;
                            }
                        }, firstChild: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_firstChild;
                            }
                        }, lastChild: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_lastChild;
                            }
                        }, nextSibling: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_nextSibling;
                            }
                        }, previousSibling: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_previousSibling;
                            }
                        }, childNodes: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_childNodes;
                            }
                        }, parentElement: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_parentElement;
                            }
                        }, firstElementChild: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_firstElementChild;
                            }
                        }, lastElementChild: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_lastElementChild;
                            }
                        }, nextElementSibling: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_nextElementSibling;
                            }
                        }, previousElementSibling: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_previousElementSibling;
                            }
                        }, children: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_children;
                            }
                        }, childElementCount: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_childElementCount;
                            }
                        }, shadowRoot: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_shadowRoot;
                            }
                        }, assignedSlot: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_assignedSlot;
                            }
                        }, isConnected: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_isConnected;
                            }
                        }, innerHTML: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_innerHTML;
                            }, set: function (e4) {
                                this.node.__shady_innerHTML = e4;
                            }
                        }, textContent: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_textContent;
                            }, set: function (e4) {
                                this.node.__shady_textContent = e4;
                            }
                        }, slot: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_slot;
                            }, set: function (e4) {
                                this.node.__shady_slot = e4;
                            }
                        }, className: {
                            configurable: true, enumerable: true, get: function () {
                                return this.node.__shady_className;
                            }, set: function (e4) {
                                this.node.__shady_className = e4;
                            }
                        }
                    }), Nn.forEach(function (e4) {
                        return ta(e4);
                    }), Dn.forEach(function (e4) {
                        return ta(e4);
                    });
                    var na = new WeakMap();
                    function ra(e4) {
                        if (lt(e4) || e4 instanceof ea)
                            return e4;
                        var t4 = na.get(e4);
                        return t4 || (t4 = new ea(e4), na.set(e4, t4)), t4;
                    }
                    if (at.ya) {
                        var aa = at.H ? function (e4) {
                            return e4;
                        } : function (e4) {
                            return an(e4), rn(e4), e4;
                        }, oa = {
                            inUse: at.ya, patch: aa, isShadyRoot: lt, enqueue: Dt, flush: Tt, flushInitial: function (e4) {
                                !e4.Fa && e4.Y && Br(e4);
                            }, settings: at, filterMutations: function (e4, t4) {
                                var n3 = t4.getRootNode();
                                return e4.map(function (e5) {
                                    var t5 = n3 === e5.target.getRootNode();
                                    if (t5 && e5.addedNodes) {
                                        if (t5 = [].slice.call(e5.addedNodes).filter(function (e6) {
                                            return n3 === e6.getRootNode();
                                        }), t5.length)
                                            return e5 = Object.create(e5), Object.defineProperty(e5, "addedNodes", { value: t5, configurable: true }), e5;
                                    } else if (t5)
                                        return e5;
                                }).filter(function (e5) {
                                    return e5;
                                });
                            }, observeChildren: function (e4, t4) {
                                var n3 = nt(e4);
                                n3.ea || (n3.ea = new Pt()), n3.ea.oa.add(t4);
                                var r2 = n3.ea;
                                return {
                                    Ra: t4, X: r2, Sa: e4, takeRecords: function () {
                                        return r2.takeRecords();
                                    }
                                };
                            }, unobserveChildren: function (e4) {
                                var t4 = e4 && e4.X;
                                t4 && (t4.oa.delete(e4.Ra), t4.oa.size || (nt(e4.Sa).ea = null));
                            }, deferConnectionCallbacks: at.deferConnectionCallbacks, preferPerformance: at.preferPerformance, handlesDynamicScoping: true, wrap: at.J ? ra : aa, wrapIfNeeded: at.J === true ? ra : function (e4) {
                                return e4;
                            }, Wrapper: ea, composedPath: function (e4) {
                                return e4.__composedPath || (e4.__composedPath = pn(e4.target, true)), e4.__composedPath;
                            }, noPatch: at.J, patchOnDemand: at.Aa, nativeMethods: Bt, nativeTree: Vt, patchElementProto: kr
                        };
                        window.ShadyDOM = oa, function () {
                            var e4 = ["dispatchEvent", "addEventListener", "removeEventListener"];
                            window.EventTarget ? (Gt(window.EventTarget.prototype, e4), window.__shady_native_addEventListener === void 0 && Gt(Window.prototype, e4)) : (Gt(Node.prototype, e4), Gt(Window.prototype, e4)), Ut ? Gt(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : Ht(Node.prototype, {
                                parentNode: {
                                    get: function () {
                                        return Wt.currentNode = this, Wt.parentNode();
                                    }
                                }, firstChild: {
                                    get: function () {
                                        return Wt.currentNode = this, Wt.firstChild();
                                    }
                                }, lastChild: {
                                    get: function () {
                                        return Wt.currentNode = this, Wt.lastChild();
                                    }
                                }, previousSibling: {
                                    get: function () {
                                        return Wt.currentNode = this, Wt.previousSibling();
                                    }
                                }, nextSibling: {
                                    get: function () {
                                        return Wt.currentNode = this, Wt.nextSibling();
                                    }
                                }, childNodes: {
                                    get: function () {
                                        var e5 = [];
                                        Wt.currentNode = this;
                                        for (var t4 = Wt.firstChild(); t4;)
                                            e5.push(t4), t4 = Wt.nextSibling();
                                        return e5;
                                    }
                                }, parentElement: {
                                    get: function () {
                                        return qt.currentNode = this, qt.parentNode();
                                    }
                                }, textContent: {
                                    get: function () {
                                        switch (this.nodeType) {
                                            case Node.ELEMENT_NODE:
                                            case Node.DOCUMENT_FRAGMENT_NODE:
                                                for (var e5, t4 = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, false), n3 = ""; e5 = t4.nextNode();)
                                                    n3 += e5.nodeValue;
                                                return n3;
                                            default:
                                                return this.nodeValue;
                                        }
                                    }, set: function (e5) {
                                        switch (e5 == null && (e5 = ""), this.nodeType) {
                                            case Node.ELEMENT_NODE:
                                            case Node.DOCUMENT_FRAGMENT_NODE:
                                                Jt(this), (0 < e5.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(e5), void 0);
                                                break;
                                            default:
                                                this.nodeValue = e5;
                                        }
                                    }
                                }
                            }), Gt(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" ")), Gt(HTMLElement.prototype, ["parentElement", "contains"]), e4 = {
                                firstElementChild: {
                                    get: function () {
                                        return qt.currentNode = this, qt.firstChild();
                                    }
                                }, lastElementChild: {
                                    get: function () {
                                        return qt.currentNode = this, qt.lastChild();
                                    }
                                }, children: {
                                    get: function () {
                                        var e5 = [];
                                        qt.currentNode = this;
                                        for (var t4 = qt.firstChild(); t4;)
                                            e5.push(t4), t4 = qt.nextSibling();
                                        return yt(e5);
                                    }
                                }, childElementCount: {
                                    get: function () {
                                        return this.children ? this.children.length : 0;
                                    }
                                }
                            }, Ut ? (Gt(Element.prototype, Yt), Gt(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), Gt(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (Ht(Element.prototype, e4), Ht(Element.prototype, {
                                previousElementSibling: {
                                    get: function () {
                                        return qt.currentNode = this, qt.previousSibling();
                                    }
                                }, nextElementSibling: {
                                    get: function () {
                                        return qt.currentNode = this, qt.nextSibling();
                                    }
                                }, innerHTML: {
                                    get: function () {
                                        return jt(this, bt);
                                    }, set: function (e5) {
                                        var t4 = this.localName === "template" ? this.content : this;
                                        Jt(t4);
                                        var n3 = this.localName || "div";
                                        for ((n3 = this.namespaceURI && this.namespaceURI !== Kt.namespaceURI ? Kt.createElementNS(this.namespaceURI, n3) : Kt.createElement(n3)).innerHTML = e5, e5 = this.localName === "template" ? n3.content : n3; n3 = e5.__shady_native_firstChild;)
                                            t4.__shady_native_insertBefore(n3, void 0);
                                    }
                                }, className: {
                                    get: function () {
                                        return this.getAttribute("class") || "";
                                    }, set: function (e5) {
                                        this.setAttribute("class", e5);
                                    }
                                }
                            })), Gt(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" ")), Gt(Element.prototype, Qt), Gt(HTMLElement.prototype, ["focus", "blur"]), window.HTMLTemplateElement && Gt(window.HTMLTemplateElement.prototype, ["innerHTML"]), Ut ? Gt(DocumentFragment.prototype, Yt) : Ht(DocumentFragment.prototype, e4), Gt(DocumentFragment.prototype, Qt), Ut ? (Gt(Document.prototype, Yt), Gt(Document.prototype, ["activeElement"])) : Ht(Document.prototype, e4), Gt(Document.prototype, ["importNode", "getElementById", "elementFromPoint", it()]), Gt(Document.prototype, Qt);
                        }(), Lr("__shady_"), Object.defineProperty(document, "_activeElement", gr.activeElement), _t(Window.prototype, Cr, "__shady_"), at.J ? at.Aa && _t(Element.prototype, ur) : (Lr(), function () {
                            if (!sn && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
                                var e4 = function () {
                                    var e5 = new MouseEvent("click", { bubbles: true, cancelable: true, composed: true });
                                    this.__shady_dispatchEvent(e5);
                                };
                                Element.prototype.click ? Element.prototype.click = e4 : HTMLElement.prototype.click && (HTMLElement.prototype.click = e4);
                            }
                        }()), function () {
                            for (var e4 in vn)
                                window.__shady_native_addEventListener(e4, function (e5) {
                                    e5.__target || (Ln(e5), bn(e5));
                                }, true);
                        }(), window.Event = kn, window.CustomEvent = Rn, window.MouseEvent = xn, window.ShadowRoot = zr;
                    }
                    var ia = window.Document.prototype.createElement, sa = window.Document.prototype.createElementNS, la = window.Document.prototype.importNode, ua = window.Document.prototype.prepend, ca = window.Document.prototype.append, da = window.DocumentFragment.prototype.prepend, fa = window.DocumentFragment.prototype.append, pa = window.Node.prototype.cloneNode, ha = window.Node.prototype.appendChild, ma = window.Node.prototype.insertBefore, va = window.Node.prototype.removeChild, ga = window.Node.prototype.replaceChild, ya = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), ba = window.Element.prototype.attachShadow, Ca = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), Sa = window.Element.prototype.getAttribute, _a = window.Element.prototype.setAttribute, wa = window.Element.prototype.removeAttribute, Ea = window.Element.prototype.getAttributeNS, La = window.Element.prototype.setAttributeNS, ka = window.Element.prototype.removeAttributeNS, Ra = window.Element.prototype.insertAdjacentElement, xa = window.Element.prototype.insertAdjacentHTML, Na = window.Element.prototype.prepend, Da = window.Element.prototype.append, Ta = window.Element.prototype.before, Pa = window.Element.prototype.after, Ma = window.Element.prototype.replaceWith, Oa = window.Element.prototype.remove, Ia = window.HTMLElement, Aa = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), Fa = window.HTMLElement.prototype.insertAdjacentElement, za = window.HTMLElement.prototype.insertAdjacentHTML, ja = new Set();
                    function Ua(e4) {
                        var t4 = ja.has(e4);
                        return e4 = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(e4), !t4 && e4;
                    }
                    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function (e4) {
                        return ja.add(e4);
                    });
                    var Ba = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);
                    function Va(e4) {
                        var t4 = e4.isConnected;
                        if (t4 !== void 0)
                            return t4;
                        if (Ba(e4))
                            return true;
                        for (; e4 && !(e4.__CE_isImportDocument || e4 instanceof Document);)
                            e4 = e4.parentNode || (window.ShadowRoot && e4 instanceof ShadowRoot ? e4.host : void 0);
                        return !(!e4 || !(e4.__CE_isImportDocument || e4 instanceof Document));
                    }
                    function Za(e4) {
                        var t4 = e4.children;
                        if (t4)
                            return Array.prototype.slice.call(t4);
                        for (t4 = [], e4 = e4.firstChild; e4; e4 = e4.nextSibling)
                            e4.nodeType === Node.ELEMENT_NODE && t4.push(e4);
                        return t4;
                    }
                    function Ha(e4, t4) {
                        for (; t4 && t4 !== e4 && !t4.nextSibling;)
                            t4 = t4.parentNode;
                        return t4 && t4 !== e4 ? t4.nextSibling : null;
                    }
                    function Ga(e4, t4, n3) {
                        for (var r2 = e4; r2;) {
                            if (r2.nodeType === Node.ELEMENT_NODE) {
                                var a2 = r2;
                                t4(a2);
                                var o2 = a2.localName;
                                if (o2 === "link" && a2.getAttribute("rel") === "import") {
                                    if (r2 = a2.import, n3 === void 0 && (n3 = new Set()), r2 instanceof Node && !n3.has(r2))
                                        for (n3.add(r2), r2 = r2.firstChild; r2; r2 = r2.nextSibling)
                                            Ga(r2, t4, n3);
                                    r2 = Ha(e4, a2);
                                    continue;
                                }
                                if (o2 === "template") {
                                    r2 = Ha(e4, a2);
                                    continue;
                                }
                                if (a2 = a2.__CE_shadowRoot)
                                    for (a2 = a2.firstChild; a2; a2 = a2.nextSibling)
                                        Ga(a2, t4, n3);
                            }
                            r2 = r2.firstChild ? r2.firstChild : Ha(e4, r2);
                        }
                    }
                    function Wa() {
                        var e4 = !(po == null || !po.noDocumentConstructionObserver), t4 = !(po == null || !po.shadyDomFastWalk);
                        this.ca = [], this.g = [], this.W = false, this.shadyDomFastWalk = t4, this.nb = !e4;
                    }
                    function qa(e4, t4, n3, r2) {
                        var a2 = window.ShadyDOM;
                        if (e4.shadyDomFastWalk && a2 && a2.inUse) {
                            if (t4.nodeType === Node.ELEMENT_NODE && n3(t4), t4.querySelectorAll)
                                for (e4 = a2.nativeMethods.querySelectorAll.call(t4, "*"), t4 = 0; t4 < e4.length; t4++)
                                    n3(e4[t4]);
                        } else
                            Ga(t4, n3, r2);
                    }
                    function Ka(e4, t4) {
                        e4.W && qa(e4, t4, function (t5) {
                            return Ja(e4, t5);
                        });
                    }
                    function Ja(e4, t4) {
                        if (e4.W && !t4.__CE_patched) {
                            t4.__CE_patched = true;
                            for (var n3 = 0; n3 < e4.ca.length; n3++)
                                e4.ca[n3](t4);
                            for (n3 = 0; n3 < e4.g.length; n3++)
                                e4.g[n3](t4);
                        }
                    }
                    function Ya(e4, t4) {
                        var n3 = [];
                        for (qa(e4, t4, function (e5) {
                            return n3.push(e5);
                        }), t4 = 0; t4 < n3.length; t4++) {
                            var r2 = n3[t4];
                            r2.__CE_state === 1 ? e4.connectedCallback(r2) : $a(e4, r2);
                        }
                    }
                    function Qa(e4, t4) {
                        var n3 = [];
                        for (qa(e4, t4, function (e5) {
                            return n3.push(e5);
                        }), t4 = 0; t4 < n3.length; t4++) {
                            var r2 = n3[t4];
                            r2.__CE_state === 1 && e4.disconnectedCallback(r2);
                        }
                    }
                    function Xa(e4, t4, n3) {
                        var r2 = (n3 = n3 === void 0 ? {} : n3).ob, a2 = n3.upgrade || function (t5) {
                            return $a(e4, t5);
                        }, o2 = [];
                        for (qa(e4, t4, function (t5) {
                            if (e4.W && Ja(e4, t5), t5.localName === "link" && t5.getAttribute("rel") === "import") {
                                var n4 = t5.import;
                                n4 instanceof Node && (n4.__CE_isImportDocument = true, n4.__CE_registry = document.__CE_registry), n4 && n4.readyState === "complete" ? n4.__CE_documentLoadHandled = true : t5.addEventListener("load", function () {
                                    var n5 = t5.import;
                                    if (!n5.__CE_documentLoadHandled) {
                                        n5.__CE_documentLoadHandled = true;
                                        var o3 = new Set();
                                        r2 && (r2.forEach(function (e5) {
                                            return o3.add(e5);
                                        }), o3.delete(n5)), Xa(e4, n5, { ob: o3, upgrade: a2 });
                                    }
                                });
                            } else
                                o2.push(t5);
                        }, r2), t4 = 0; t4 < o2.length; t4++)
                            a2(o2[t4]);
                    }
                    function $a(e4, t4) {
                        try {
                            var n3 = t4.ownerDocument, r2 = n3.__CE_registry, a2 = r2 && (n3.defaultView || n3.__CE_isImportDocument) ? uo(r2, t4.localName) : void 0;
                            if (a2 && t4.__CE_state === void 0) {
                                a2.constructionStack.push(t4);
                                try {
                                    try {
                                        if (new a2.constructorFunction() !== t4)
                                            throw Error("The custom element constructor did not produce the element being upgraded.");
                                    } finally {
                                        a2.constructionStack.pop();
                                    }
                                } catch (e5) {
                                    throw t4.__CE_state = 2, e5;
                                }
                                if (t4.__CE_state = 1, t4.__CE_definition = a2, a2.attributeChangedCallback && t4.hasAttributes()) {
                                    var o2 = a2.observedAttributes;
                                    for (a2 = 0; a2 < o2.length; a2++) {
                                        var i2 = o2[a2], s2 = t4.getAttribute(i2);
                                        s2 !== null && e4.attributeChangedCallback(t4, i2, null, s2, null);
                                    }
                                }
                                Va(t4) && e4.connectedCallback(t4);
                            }
                        } catch (e5) {
                            to(e5);
                        }
                    }
                    function eo(e4, t4, n3, r2) {
                        var a2 = t4.__CE_registry;
                        if (a2 && (r2 === null || r2 === "http://www.w3.org/1999/xhtml") && (a2 = uo(a2, n3)))
                            try {
                                var o2 = new a2.constructorFunction();
                                if (o2.__CE_state === void 0 || o2.__CE_definition === void 0)
                                    throw Error("Failed to construct '" + n3 + "': The returned value was not constructed with the HTMLElement constructor.");
                                if (o2.namespaceURI !== "http://www.w3.org/1999/xhtml")
                                    throw Error("Failed to construct '" + n3 + "': The constructed element's namespace must be the HTML namespace.");
                                if (o2.hasAttributes())
                                    throw Error("Failed to construct '" + n3 + "': The constructed element must not have any attributes.");
                                if (o2.firstChild !== null)
                                    throw Error("Failed to construct '" + n3 + "': The constructed element must not have any children.");
                                if (o2.parentNode !== null)
                                    throw Error("Failed to construct '" + n3 + "': The constructed element must not have a parent node.");
                                if (o2.ownerDocument !== t4)
                                    throw Error("Failed to construct '" + n3 + "': The constructed element's owner document is incorrect.");
                                if (o2.localName !== n3)
                                    throw Error("Failed to construct '" + n3 + "': The constructed element's local name is incorrect.");
                                return o2;
                            } catch (a3) {
                                return to(a3), t4 = r2 === null ? ia.call(t4, n3) : sa.call(t4, r2, n3), Object.setPrototypeOf(t4, HTMLUnknownElement.prototype), t4.__CE_state = 2, t4.__CE_definition = void 0, Ja(e4, t4), t4;
                            }
                        return Ja(e4, t4 = r2 === null ? ia.call(t4, n3) : sa.call(t4, r2, n3)), t4;
                    }
                    function to(e4) {
                        var t4 = e4.message, n3 = e4.sourceURL || e4.fileName || "", r2 = e4.line || e4.lineNumber || 0, a2 = e4.column || e4.columnNumber || 0, o2 = void 0;
                        ErrorEvent.prototype.initErrorEvent === void 0 ? o2 = new ErrorEvent("error", { cancelable: true, message: t4, filename: n3, lineno: r2, colno: a2, error: e4 }) : ((o2 = document.createEvent("ErrorEvent")).initErrorEvent("error", false, true, t4, n3, r2), o2.preventDefault = function () {
                            Object.defineProperty(this, "defaultPrevented", {
                                configurable: true, get: function () {
                                    return true;
                                }
                            });
                        }), o2.error === void 0 && Object.defineProperty(o2, "error", {
                            configurable: true, enumerable: true, get: function () {
                                return e4;
                            }
                        }), window.dispatchEvent(o2), o2.defaultPrevented || console.error(e4);
                    }
                    function no() {
                        var e4 = this;
                        this.I = void 0, this.Ha = new Promise(function (t4) {
                            e4.g = t4;
                        });
                    }
                    function ro(e4) {
                        var t4 = document;
                        this.X = void 0, this.S = e4, this.g = t4, Xa(this.S, this.g), this.g.readyState === "loading" && (this.X = new MutationObserver(this.h.bind(this)), this.X.observe(this.g, { childList: true, subtree: true }));
                    }
                    function ao(e4) {
                        e4.X && e4.X.disconnect();
                    }
                    function oo(e4) {
                        this.ka = new Map(), this.la = new Map(), this.Ca = new Map(), this.ta = false, this.wa = new Map(), this.ja = function (e5) {
                            return e5();
                        }, this.V = false, this.ma = [], this.S = e4, this.Da = e4.nb ? new ro(e4) : void 0;
                    }
                    function io(e4, t4) {
                        if (!Ua(t4))
                            throw new SyntaxError("The element name '" + t4 + "' is not valid.");
                        if (uo(e4, t4))
                            throw Error("A custom element with name '" + t4 + "' has already been defined.");
                        if (e4.ta)
                            throw Error("A custom element is already being defined.");
                    }
                    function so(e4, t4, n3) {
                        var r2;
                        e4.ta = true;
                        try {
                            var a2 = n3.prototype;
                            if (!(a2 instanceof Object))
                                throw new TypeError("The custom element constructor's prototype is not an object.");
                            var o2 = function (e5) {
                                var t5 = a2[e5];
                                if (t5 !== void 0 && !(t5 instanceof Function))
                                    throw Error("The '" + e5 + "' callback must be a function.");
                                return t5;
                            }, i2 = o2("connectedCallback"), s2 = o2("disconnectedCallback"), l2 = o2("adoptedCallback"), u2 = (r2 = o2("attributeChangedCallback")) && n3.observedAttributes || [];
                        } catch (e5) {
                            throw e5;
                        } finally {
                            e4.ta = false;
                        }
                        return n3 = { localName: t4, constructorFunction: n3, connectedCallback: i2, disconnectedCallback: s2, adoptedCallback: l2, attributeChangedCallback: r2, observedAttributes: u2, constructionStack: [] }, e4.la.set(t4, n3), e4.Ca.set(n3.constructorFunction, n3), n3;
                    }
                    function lo(e4) {
                        if (e4.V !== false) {
                            e4.V = false;
                            for (var t4 = [], n3 = e4.ma, r2 = new Map(), a2 = 0; a2 < n3.length; a2++)
                                r2.set(n3[a2], []);
                            for (Xa(e4.S, document, {
                                upgrade: function (n4) {
                                    if (n4.__CE_state === void 0) {
                                        var a3 = n4.localName, o3 = r2.get(a3);
                                        o3 ? o3.push(n4) : e4.la.has(a3) && t4.push(n4);
                                    }
                                }
                            }), a2 = 0; a2 < t4.length; a2++)
                                $a(e4.S, t4[a2]);
                            for (a2 = 0; a2 < n3.length; a2++) {
                                for (var o2 = n3[a2], i2 = r2.get(o2), s2 = 0; s2 < i2.length; s2++)
                                    $a(e4.S, i2[s2]);
                                (o2 = e4.wa.get(o2)) && o2.resolve(void 0);
                            }
                            n3.length = 0;
                        }
                    }
                    function uo(e4, t4) {
                        var n3 = e4.la.get(t4);
                        if (n3)
                            return n3;
                        if (n3 = e4.ka.get(t4)) {
                            e4.ka.delete(t4);
                            try {
                                return so(e4, t4, n3());
                            } catch (e5) {
                                to(e5);
                            }
                        }
                    }
                    function co(e4, t4, n3) {
                        function r2(t5) {
                            return function (n4) {
                                for (var r3 = [], a2 = 0; a2 < arguments.length; ++a2)
                                    r3[a2] = arguments[a2];
                                a2 = [];
                                for (var o2 = [], i2 = 0; i2 < r3.length; i2++) {
                                    var s2 = r3[i2];
                                    if (s2 instanceof Element && Va(s2) && o2.push(s2), s2 instanceof DocumentFragment)
                                        for (s2 = s2.firstChild; s2; s2 = s2.nextSibling)
                                            a2.push(s2);
                                    else
                                        a2.push(s2);
                                }
                                for (t5.apply(this, r3), r3 = 0; r3 < o2.length; r3++)
                                    Qa(e4, o2[r3]);
                                if (Va(this))
                                    for (r3 = 0; r3 < a2.length; r3++)
                                        (o2 = a2[r3]) instanceof Element && Ya(e4, o2);
                            };
                        }
                        n3.prepend !== void 0 && (t4.prepend = r2(n3.prepend)), n3.append !== void 0 && (t4.append = r2(n3.append));
                    }
                    Wa.prototype.connectedCallback = function (e4) {
                        var t4 = e4.__CE_definition;
                        if (t4.connectedCallback)
                            try {
                                t4.connectedCallback.call(e4);
                            } catch (e5) {
                                to(e5);
                            }
                    }, Wa.prototype.disconnectedCallback = function (e4) {
                        var t4 = e4.__CE_definition;
                        if (t4.disconnectedCallback)
                            try {
                                t4.disconnectedCallback.call(e4);
                            } catch (e5) {
                                to(e5);
                            }
                    }, Wa.prototype.attributeChangedCallback = function (e4, t4, n3, r2, a2) {
                        var o2 = e4.__CE_definition;
                        if (o2.attributeChangedCallback && -1 < o2.observedAttributes.indexOf(t4))
                            try {
                                o2.attributeChangedCallback.call(e4, t4, n3, r2, a2);
                            } catch (e5) {
                                to(e5);
                            }
                    }, no.prototype.resolve = function (e4) {
                        if (this.I)
                            throw Error("Already resolved.");
                        this.I = e4, this.g(e4);
                    }, ro.prototype.h = function (e4) {
                        var t4 = this.g.readyState;
                        for (t4 !== "interactive" && t4 !== "complete" || ao(this), t4 = 0; t4 < e4.length; t4++)
                            for (var n3 = e4[t4].addedNodes, r2 = 0; r2 < n3.length; r2++)
                                Xa(this.S, n3[r2]);
                    }, (e3 = oo.prototype).eb = function (e4, t4) {
                        var n3 = this;
                        if (!(t4 instanceof Function))
                            throw new TypeError("Custom element constructor getters must be functions.");
                        io(this, e4), this.ka.set(e4, t4), this.ma.push(e4), this.V || (this.V = true, this.ja(function () {
                            return lo(n3);
                        }));
                    }, e3.define = function (e4, t4) {
                        var n3 = this;
                        if (!(t4 instanceof Function))
                            throw new TypeError("Custom element constructors must be functions.");
                        io(this, e4), so(this, e4, t4), this.ma.push(e4), this.V || (this.V = true, this.ja(function () {
                            return lo(n3);
                        }));
                    }, e3.upgrade = function (e4) {
                        Xa(this.S, e4);
                    }, e3.get = function (e4) {
                        if (e4 = uo(this, e4))
                            return e4.constructorFunction;
                    }, e3.whenDefined = function (e4) {
                        if (!Ua(e4))
                            return Promise.reject(new SyntaxError("'" + e4 + "' is not a valid custom element name."));
                        var t4 = this.wa.get(e4);
                        if (t4)
                            return t4.Ha;
                        t4 = new no(), this.wa.set(e4, t4);
                        var n3 = this.la.has(e4) || this.ka.has(e4);
                        return e4 = this.ma.indexOf(e4) === -1, n3 && e4 && t4.resolve(void 0), t4.Ha;
                    }, e3.polyfillWrapFlushCallback = function (e4) {
                        this.Da && ao(this.Da);
                        var t4 = this.ja;
                        this.ja = function (n3) {
                            return e4(function () {
                                return t4(n3);
                            });
                        };
                    }, window.CustomElementRegistry = oo, oo.prototype.define = oo.prototype.define, oo.prototype.upgrade = oo.prototype.upgrade, oo.prototype.get = oo.prototype.get, oo.prototype.whenDefined = oo.prototype.whenDefined, oo.prototype.polyfillDefineLazy = oo.prototype.eb, oo.prototype.polyfillWrapFlushCallback = oo.prototype.polyfillWrapFlushCallback;
                    var fo = {}, po = window.customElements;
                    function ho() {
                        var e4 = new Wa();
                        !function (e5) {
                            function t4() {
                                var t5 = this.constructor, n3 = document.__CE_registry.Ca.get(t5);
                                if (!n3)
                                    throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
                                var r2 = n3.constructionStack;
                                if (r2.length === 0)
                                    return r2 = ia.call(document, n3.localName), Object.setPrototypeOf(r2, t5.prototype), r2.__CE_state = 1, r2.__CE_definition = n3, Ja(e5, r2), r2;
                                var a2 = r2.length - 1, o2 = r2[a2];
                                if (o2 === fo)
                                    throw Error("Failed to construct '" + n3.localName + "': This element was already constructed.");
                                return r2[a2] = fo, Object.setPrototypeOf(o2, t5.prototype), Ja(e5, o2), o2;
                            }
                            t4.prototype = Ia.prototype, Object.defineProperty(HTMLElement.prototype, "constructor", { writable: true, configurable: true, enumerable: false, value: t4 }), window.HTMLElement = t4;
                        }(e4), function (e5) {
                            Document.prototype.createElement = function (t4) {
                                return eo(e5, this, t4, null);
                            }, Document.prototype.importNode = function (t4, n3) {
                                return t4 = la.call(this, t4, !!n3), this.__CE_registry ? Xa(e5, t4) : Ka(e5, t4), t4;
                            }, Document.prototype.createElementNS = function (t4, n3) {
                                return eo(e5, this, n3, t4);
                            }, co(e5, Document.prototype, { prepend: ua, append: ca });
                        }(e4), co(e4, DocumentFragment.prototype, { prepend: da, append: fa }), function (e5) {
                            function t4(t5, n3) {
                                Object.defineProperty(t5, "textContent", {
                                    enumerable: n3.enumerable, configurable: true, get: n3.get, set: function (t6) {
                                        if (this.nodeType === Node.TEXT_NODE)
                                            n3.set.call(this, t6);
                                        else {
                                            var r2 = void 0;
                                            if (this.firstChild) {
                                                var a2 = this.childNodes, o2 = a2.length;
                                                if (0 < o2 && Va(this)) {
                                                    r2 = Array(o2);
                                                    for (var i2 = 0; i2 < o2; i2++)
                                                        r2[i2] = a2[i2];
                                                }
                                            }
                                            if (n3.set.call(this, t6), r2)
                                                for (t6 = 0; t6 < r2.length; t6++)
                                                    Qa(e5, r2[t6]);
                                        }
                                    }
                                });
                            }
                            Node.prototype.insertBefore = function (t5, n3) {
                                if (t5 instanceof DocumentFragment) {
                                    var r2 = Za(t5);
                                    if (t5 = ma.call(this, t5, n3), Va(this))
                                        for (n3 = 0; n3 < r2.length; n3++)
                                            Ya(e5, r2[n3]);
                                    return t5;
                                }
                                return r2 = t5 instanceof Element && Va(t5), n3 = ma.call(this, t5, n3), r2 && Qa(e5, t5), Va(this) && Ya(e5, t5), n3;
                            }, Node.prototype.appendChild = function (t5) {
                                if (t5 instanceof DocumentFragment) {
                                    var n3 = Za(t5);
                                    if (t5 = ha.call(this, t5), Va(this))
                                        for (var r2 = 0; r2 < n3.length; r2++)
                                            Ya(e5, n3[r2]);
                                    return t5;
                                }
                                return n3 = t5 instanceof Element && Va(t5), r2 = ha.call(this, t5), n3 && Qa(e5, t5), Va(this) && Ya(e5, t5), r2;
                            }, Node.prototype.cloneNode = function (t5) {
                                return t5 = pa.call(this, !!t5), this.ownerDocument.__CE_registry ? Xa(e5, t5) : Ka(e5, t5), t5;
                            }, Node.prototype.removeChild = function (t5) {
                                var n3 = t5 instanceof Element && Va(t5), r2 = va.call(this, t5);
                                return n3 && Qa(e5, t5), r2;
                            }, Node.prototype.replaceChild = function (t5, n3) {
                                if (t5 instanceof DocumentFragment) {
                                    var r2 = Za(t5);
                                    if (t5 = ga.call(this, t5, n3), Va(this))
                                        for (Qa(e5, n3), n3 = 0; n3 < r2.length; n3++)
                                            Ya(e5, r2[n3]);
                                    return t5;
                                }
                                r2 = t5 instanceof Element && Va(t5);
                                var a2 = ga.call(this, t5, n3), o2 = Va(this);
                                return o2 && Qa(e5, n3), r2 && Qa(e5, t5), o2 && Ya(e5, t5), a2;
                            }, ya && ya.get ? t4(Node.prototype, ya) : function (e6, t5) {
                                e6.W = true, e6.ca.push(t5);
                            }(e5, function (e6) {
                                t4(e6, {
                                    enumerable: true, configurable: true, get: function () {
                                        for (var e7 = [], t5 = this.firstChild; t5; t5 = t5.nextSibling)
                                            t5.nodeType !== Node.COMMENT_NODE && e7.push(t5.textContent);
                                        return e7.join("");
                                    }, set: function (e7) {
                                        for (; this.firstChild;)
                                            va.call(this, this.firstChild);
                                        e7 != null && e7 !== "" && ha.call(this, document.createTextNode(e7));
                                    }
                                });
                            });
                        }(e4), function (e5) {
                            function t4(t5, n4) {
                                Object.defineProperty(t5, "innerHTML", {
                                    enumerable: n4.enumerable, configurable: true, get: n4.get, set: function (t6) {
                                        var r3 = this, a2 = void 0;
                                        if (Va(this) && (a2 = [], qa(e5, this, function (e6) {
                                            e6 !== r3 && a2.push(e6);
                                        })), n4.set.call(this, t6), a2)
                                            for (var o2 = 0; o2 < a2.length; o2++) {
                                                var i2 = a2[o2];
                                                i2.__CE_state === 1 && e5.disconnectedCallback(i2);
                                            }
                                        return this.ownerDocument.__CE_registry ? Xa(e5, this) : Ka(e5, this), t6;
                                    }
                                });
                            }
                            function n3(t5, n4) {
                                t5.insertAdjacentElement = function (t6, r3) {
                                    var a2 = Va(r3);
                                    return t6 = n4.call(this, t6, r3), a2 && Qa(e5, r3), Va(t6) && Ya(e5, r3), t6;
                                };
                            }
                            function r2(t5, n4) {
                                function r3(t6, n5) {
                                    for (var r4 = []; t6 !== n5; t6 = t6.nextSibling)
                                        r4.push(t6);
                                    for (n5 = 0; n5 < r4.length; n5++)
                                        Xa(e5, r4[n5]);
                                }
                                t5.insertAdjacentHTML = function (e6, t6) {
                                    if ((e6 = e6.toLowerCase()) === "beforebegin") {
                                        var a2 = this.previousSibling;
                                        n4.call(this, e6, t6), r3(a2 || this.parentNode.firstChild, this);
                                    } else if (e6 === "afterbegin")
                                        a2 = this.firstChild, n4.call(this, e6, t6), r3(this.firstChild, a2);
                                    else if (e6 === "beforeend")
                                        a2 = this.lastChild, n4.call(this, e6, t6), r3(a2 || this.firstChild, null);
                                    else {
                                        if (e6 !== "afterend")
                                            throw new SyntaxError("The value provided (" + String(e6) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                                        a2 = this.nextSibling, n4.call(this, e6, t6), r3(this.nextSibling, a2);
                                    }
                                };
                            }
                            ba && (Element.prototype.attachShadow = function (t5) {
                                if (t5 = ba.call(this, t5), e5.W && !t5.__CE_patched) {
                                    t5.__CE_patched = true;
                                    for (var n4 = 0; n4 < e5.ca.length; n4++)
                                        e5.ca[n4](t5);
                                }
                                return this.__CE_shadowRoot = t5;
                            }), Ca && Ca.get ? t4(Element.prototype, Ca) : Aa && Aa.get ? t4(HTMLElement.prototype, Aa) : function (e6, t5) {
                                e6.W = true, e6.g.push(t5);
                            }(e5, function (e6) {
                                t4(e6, {
                                    enumerable: true, configurable: true, get: function () {
                                        return pa.call(this, true).innerHTML;
                                    }, set: function (e7) {
                                        var t5 = this.localName === "template", n4 = t5 ? this.content : this, r3 = sa.call(document, this.namespaceURI, this.localName);
                                        for (r3.innerHTML = e7; 0 < n4.childNodes.length;)
                                            va.call(n4, n4.childNodes[0]);
                                        for (e7 = t5 ? r3.content : r3; 0 < e7.childNodes.length;)
                                            ha.call(n4, e7.childNodes[0]);
                                    }
                                });
                            }), Element.prototype.setAttribute = function (t5, n4) {
                                if (this.__CE_state !== 1)
                                    return _a.call(this, t5, n4);
                                var r3 = Sa.call(this, t5);
                                _a.call(this, t5, n4), n4 = Sa.call(this, t5), e5.attributeChangedCallback(this, t5, r3, n4, null);
                            }, Element.prototype.setAttributeNS = function (t5, n4, r3) {
                                if (this.__CE_state !== 1)
                                    return La.call(this, t5, n4, r3);
                                var a2 = Ea.call(this, t5, n4);
                                La.call(this, t5, n4, r3), r3 = Ea.call(this, t5, n4), e5.attributeChangedCallback(this, n4, a2, r3, t5);
                            }, Element.prototype.removeAttribute = function (t5) {
                                if (this.__CE_state !== 1)
                                    return wa.call(this, t5);
                                var n4 = Sa.call(this, t5);
                                wa.call(this, t5), n4 !== null && e5.attributeChangedCallback(this, t5, n4, null, null);
                            }, Element.prototype.removeAttributeNS = function (t5, n4) {
                                if (this.__CE_state !== 1)
                                    return ka.call(this, t5, n4);
                                var r3 = Ea.call(this, t5, n4);
                                ka.call(this, t5, n4);
                                var a2 = Ea.call(this, t5, n4);
                                r3 !== a2 && e5.attributeChangedCallback(this, n4, r3, a2, t5);
                            }, Fa ? n3(HTMLElement.prototype, Fa) : Ra && n3(Element.prototype, Ra), za ? r2(HTMLElement.prototype, za) : xa && r2(Element.prototype, xa), co(e5, Element.prototype, { prepend: Na, append: Da }), function (e6) {
                                function t5(t6) {
                                    return function (n5) {
                                        for (var r3 = [], a2 = 0; a2 < arguments.length; ++a2)
                                            r3[a2] = arguments[a2];
                                        a2 = [];
                                        for (var o2 = [], i2 = 0; i2 < r3.length; i2++) {
                                            var s2 = r3[i2];
                                            if (s2 instanceof Element && Va(s2) && o2.push(s2), s2 instanceof DocumentFragment)
                                                for (s2 = s2.firstChild; s2; s2 = s2.nextSibling)
                                                    a2.push(s2);
                                            else
                                                a2.push(s2);
                                        }
                                        for (t6.apply(this, r3), r3 = 0; r3 < o2.length; r3++)
                                            Qa(e6, o2[r3]);
                                        if (Va(this))
                                            for (r3 = 0; r3 < a2.length; r3++)
                                                (o2 = a2[r3]) instanceof Element && Ya(e6, o2);
                                    };
                                }
                                var n4 = Element.prototype;
                                Ta !== void 0 && (n4.before = t5(Ta)), Pa !== void 0 && (n4.after = t5(Pa)), Ma !== void 0 && (n4.replaceWith = function (t6) {
                                    for (var n5 = [], r3 = 0; r3 < arguments.length; ++r3)
                                        n5[r3] = arguments[r3];
                                    r3 = [];
                                    for (var a2 = [], o2 = 0; o2 < n5.length; o2++) {
                                        var i2 = n5[o2];
                                        if (i2 instanceof Element && Va(i2) && a2.push(i2), i2 instanceof DocumentFragment)
                                            for (i2 = i2.firstChild; i2; i2 = i2.nextSibling)
                                                r3.push(i2);
                                        else
                                            r3.push(i2);
                                    }
                                    for (o2 = Va(this), Ma.apply(this, n5), n5 = 0; n5 < a2.length; n5++)
                                        Qa(e6, a2[n5]);
                                    if (o2)
                                        for (Qa(e6, this), n5 = 0; n5 < r3.length; n5++)
                                            (a2 = r3[n5]) instanceof Element && Ya(e6, a2);
                                }), Oa !== void 0 && (n4.remove = function () {
                                    var t6 = Va(this);
                                    Oa.call(this), t6 && Qa(e6, this);
                                });
                            }(e5);
                        }(e4), e4 = new oo(e4), document.__CE_registry = e4, Object.defineProperty(window, "customElements", { configurable: true, enumerable: true, value: e4 });
                    }
                    function mo() {
                        this.end = this.start = 0, this.rules = this.parent = this.previous = null, this.cssText = this.parsedCssText = "", this.atRule = false, this.type = 0, this.parsedSelector = this.selector = this.keyframesName = "";
                    }
                    function vo(e4) {
                        var t4 = e4 = e4.replace(Lo, "").replace(ko, ""), n3 = new mo();
                        n3.start = 0, n3.end = t4.length;
                        for (var r2 = n3, a2 = 0, o2 = t4.length; a2 < o2; a2++)
                            if (t4[a2] === "{") {
                                r2.rules || (r2.rules = []);
                                var i2 = r2, s2 = i2.rules[i2.rules.length - 1] || null;
                                (r2 = new mo()).start = a2 + 1, r2.parent = i2, r2.previous = s2, i2.rules.push(r2);
                            } else
                                t4[a2] === "}" && (r2.end = a2 + 1, r2 = r2.parent || n3);
                        return go(n3, e4);
                    }
                    function go(e4, t4) {
                        var n3 = t4.substring(e4.start, e4.end - 1);
                        if (e4.parsedCssText = e4.cssText = n3.trim(), e4.parent && (n3 = function (e5) {
                            return e5.replace(/\\([0-9a-f]{1,6})\s/gi, function (e6, t5) {
                                for (t5 = 6 - (e6 = t5).length; t5--;)
                                    e6 = "0" + e6;
                                return "\\" + e6;
                            });
                        }(n3 = t4.substring(e4.previous ? e4.previous.end : e4.parent.start, e4.start - 1)), n3 = (n3 = n3.replace(Po, " ")).substring(n3.lastIndexOf(";") + 1), n3 = e4.parsedSelector = e4.selector = n3.trim(), e4.atRule = n3.indexOf("@") === 0, e4.atRule ? n3.indexOf("@media") === 0 ? e4.type = wo : n3.match(To) && (e4.type = _o, e4.keyframesName = e4.selector.split(Po).pop()) : e4.type = n3.indexOf("--") === 0 ? Eo : So), n3 = e4.rules)
                            for (var r2 = 0, a2 = n3.length, o2 = void 0; r2 < a2 && (o2 = n3[r2]); r2++)
                                go(o2, t4);
                        return e4;
                    }
                    function yo(e4, t4, n3) {
                        n3 = n3 === void 0 ? "" : n3;
                        var r2 = "";
                        if (e4.cssText || e4.rules) {
                            var a2, o2 = e4.rules;
                            if ((a2 = o2) && (a2 = !((a2 = o2[0]) && a2.selector && a2.selector.indexOf("--") === 0)), a2) {
                                a2 = 0;
                                for (var i2 = o2.length, s2 = void 0; a2 < i2 && (s2 = o2[a2]); a2++)
                                    r2 = yo(s2, t4, r2);
                            } else
                                (r2 = (t4 = t4 ? e4.cssText : (t4 = (t4 = e4.cssText).replace(Ro, "").replace(xo, "")).replace(No, "").replace(Do, "")).trim()) && (r2 = "  " + r2 + "\n");
                        }
                        return r2 && (e4.selector && (n3 += e4.selector + " {\n"), n3 += r2, e4.selector && (n3 += "}\n\n")), n3;
                    }
                    po && !po.forcePolyfill && typeof po.define == "function" && typeof po.get == "function" || ho(), window.__CE_installPolyfill = ho;
                    var bo, Co, So = 1, _o = 7, wo = 4, Eo = 1e3, Lo = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, ko = /@import[^;]*;/gim, Ro = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, xo = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, No = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, Do = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, To = /^@[^\s]*keyframes/, Po = /\s+/g, Mo = !(window.ShadyDOM && window.ShadyDOM.inUse);
                    function Oo(e4) {
                        bo = (!e4 || !e4.shimcssproperties) && (Mo || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)")));
                    }
                    window.ShadyCSS && window.ShadyCSS.cssBuild !== void 0 && (Co = window.ShadyCSS.cssBuild);
                    var Io = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
                    window.ShadyCSS && window.ShadyCSS.nativeCss !== void 0 ? bo = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Oo(window.ShadyCSS), window.ShadyCSS = void 0) : Oo(window.WebComponents && window.WebComponents.flags);
                    var Ao = bo, Fo = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi, zo = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, jo = /(--[\w-]+)\s*([:,;)]|$)/gi, Uo = /(animation\s*:)|(animation-name\s*:)/, Bo = /@media\s(.*)/, Vo = /\{[^}]*\}/g, Zo = new Set();
                    function Ho(e4, t4) {
                        return e4 ? (typeof e4 == "string" && (e4 = vo(e4)), t4 && qo(e4, t4), yo(e4, Ao)) : "";
                    }
                    function Go(e4) {
                        return !e4.__cssRules && e4.textContent && (e4.__cssRules = vo(e4.textContent)), e4.__cssRules || null;
                    }
                    function Wo(e4) {
                        return !!e4.parent && e4.parent.type === _o;
                    }
                    function qo(e4, t4, n3, r2) {
                        if (e4) {
                            var a2 = false, o2 = e4.type;
                            if (r2 && o2 === wo) {
                                var i2 = e4.selector.match(Bo);
                                i2 && (window.matchMedia(i2[1]).matches || (a2 = true));
                            }
                            if (o2 === So ? t4(e4) : n3 && o2 === _o ? n3(e4) : o2 === Eo && (a2 = true), (e4 = e4.rules) && !a2)
                                for (a2 = 0, o2 = e4.length, i2 = void 0; a2 < o2 && (i2 = e4[a2]); a2++)
                                    qo(i2, t4, n3, r2);
                        }
                    }
                    function Ko(e4, t4, n3, r2) {
                        var a2 = document.createElement("style");
                        return t4 && a2.setAttribute("scope", t4), a2.textContent = e4, Qo(a2, n3, r2), a2;
                    }
                    var Jo = null;
                    function Yo(e4) {
                        e4 = document.createComment(" Shady DOM styles for " + e4 + " ");
                        var t4 = document.head;
                        return t4.insertBefore(e4, (Jo ? Jo.nextSibling : null) || t4.firstChild), Jo = e4;
                    }
                    function Qo(e4, t4, n3) {
                        (t4 = t4 || document.head).insertBefore(e4, n3 && n3.nextSibling || t4.firstChild), Jo ? e4.compareDocumentPosition(Jo) === Node.DOCUMENT_POSITION_PRECEDING && (Jo = e4) : Jo = e4;
                    }
                    function Xo(e4, t4) {
                        for (var n3 = 0, r2 = e4.length; t4 < r2; t4++)
                            if (e4[t4] === "(")
                                n3++;
                            else if (e4[t4] === ")" && --n3 == 0)
                                return t4;
                        return -1;
                    }
                    function $o(e4, t4) {
                        var n3 = e4.indexOf("var(");
                        if (n3 === -1)
                            return t4(e4, "", "", "");
                        var r2 = Xo(e4, n3 + 3), a2 = e4.substring(n3 + 4, r2);
                        return n3 = e4.substring(0, n3), e4 = $o(e4.substring(r2 + 1), t4), (r2 = a2.indexOf(",")) === -1 ? t4(n3, a2.trim(), "", e4) : t4(n3, a2.substring(0, r2).trim(), a2.substring(r2 + 1).trim(), e4);
                    }
                    function ei(e4, t4) {
                        Mo ? e4.setAttribute("class", t4) : window.ShadyDOM.nativeMethods.setAttribute.call(e4, "class", t4);
                    }
                    var ti = window.ShadyDOM && window.ShadyDOM.wrap || function (e4) {
                        return e4;
                    };
                    function ni(e4) {
                        var t4 = e4.localName, n3 = "";
                        return t4 ? -1 < t4.indexOf("-") || (n3 = t4, t4 = e4.getAttribute && e4.getAttribute("is") || "") : (t4 = e4.is, n3 = e4.extends), { is: t4, ha: n3 };
                    }
                    function ri(e4) {
                        for (var t4 = [], n3 = "", r2 = 0; 0 <= r2 && r2 < e4.length; r2++)
                            if (e4[r2] === "(") {
                                var a2 = Xo(e4, r2);
                                n3 += e4.slice(r2, a2 + 1), r2 = a2;
                            } else
                                e4[r2] === "," ? (t4.push(n3), n3 = "") : n3 += e4[r2];
                        return n3 && t4.push(n3), t4;
                    }
                    function ai(e4) {
                        if (Co !== void 0)
                            return Co;
                        if (e4.__cssBuild === void 0) {
                            var t4 = e4.getAttribute("css-build");
                            if (t4)
                                e4.__cssBuild = t4;
                            else {
                                if ((t4 = (t4 = e4.localName === "template" ? e4.content.firstChild : e4.firstChild) instanceof Comment && (t4 = t4.textContent.trim().split(":"))[0] === "css-build" ? t4[1] : "") !== "") {
                                    var n3 = e4.localName === "template" ? e4.content.firstChild : e4.firstChild;
                                    n3.parentNode.removeChild(n3);
                                }
                                e4.__cssBuild = t4;
                            }
                        }
                        return e4.__cssBuild || "";
                    }
                    function oi(e4) {
                        return !((e4 = e4 === void 0 ? "" : e4) === "" || !Ao) && (Mo ? e4 === "shadow" : e4 === "shady");
                    }
                    function ii() {
                    }
                    function si(e4, t4, n3) {
                        var r2;
                        if (t4.nodeType === Node.ELEMENT_NODE && n3(t4), r2 = t4.localName === "template" ? (t4.content || t4._content || t4).childNodes : t4.children || t4.childNodes)
                            for (t4 = 0; t4 < r2.length; t4++)
                                si(e4, r2[t4], n3);
                    }
                    function li(e4, t4, n3) {
                        if (t4) {
                            if (e4.classList)
                                n3 ? (e4.classList.remove("style-scope"), e4.classList.remove(t4)) : (e4.classList.add("style-scope"), e4.classList.add(t4));
                            else if (e4.getAttribute) {
                                var r2 = e4.getAttribute("class");
                                n3 ? r2 && ei(e4, t4 = r2.replace("style-scope", "").replace(t4, "")) : ei(e4, (r2 ? r2 + " " : "") + "style-scope " + t4);
                            }
                        }
                    }
                    function ui(e4, t4, n3) {
                        si(Li, e4, function (e5) {
                            li(e5, t4, true), li(e5, n3);
                        });
                    }
                    function ci(e4, t4) {
                        si(Li, e4, function (e5) {
                            li(e5, t4 || "", true);
                        });
                    }
                    function di(e4, t4, n3, r2, a2) {
                        var o2 = Li;
                        return (a2 = a2 === void 0 ? "" : a2) === "" && (a2 = Mo || (r2 === void 0 ? "" : r2) === "shady" ? Ho(t4, n3) : function (e5, t5, n4, r3, a3) {
                            var o3 = fi(n4, r3);
                            return n4 = n4 ? "." + n4 : "", Ho(t5, function (t6) {
                                t6.i || (t6.selector = t6.F = pi(e5, t6, e5.h, n4, o3), t6.i = true), a3 && a3(t6, n4, o3);
                            });
                        }(o2, t4, (e4 = ni(e4)).is, e4.ha, n3) + "\n\n"), a2.trim();
                    }
                    function fi(e4, t4) {
                        return t4 ? "[is=" + e4 + "]" : e4;
                    }
                    function pi(e4, t4, n3, r2, a2) {
                        var o2 = ri(t4.selector);
                        if (!Wo(t4)) {
                            t4 = 0;
                            for (var i2 = o2.length, s2 = void 0; t4 < i2 && (s2 = o2[t4]); t4++)
                                o2[t4] = n3.call(e4, s2, r2, a2);
                        }
                        return o2.filter(function (e5) {
                            return !!e5;
                        }).join(",");
                    }
                    function hi(e4) {
                        return e4.replace(gi, function (e5, t4, n3) {
                            return -1 < n3.indexOf("+") ? n3 = n3.replace(/\+/g, "___") : -1 < n3.indexOf("___") && (n3 = n3.replace(/___/g, "+")), ":" + t4 + "(" + n3 + ")";
                        });
                    }
                    function mi(e4, t4) {
                        e4 = e4.split(/(\[.+?\])/);
                        for (var n3 = [], r2 = 0; r2 < e4.length; r2++)
                            if (r2 % 2 == 1)
                                n3.push(e4[r2]);
                            else {
                                var a2 = e4[r2];
                                a2 === "" && r2 === e4.length - 1 || ((a2 = a2.split(":"))[0] += t4, n3.push(a2.join(":")));
                            }
                        return n3.join("");
                    }
                    function vi(e4) {
                        e4.selector === ":root" && (e4.selector = "html");
                    }
                    ii.prototype.h = function (e4, t4, n3) {
                        var r2 = false;
                        e4 = e4.trim();
                        var a2 = gi.test(e4);
                        a2 && (e4 = hi(e4 = e4.replace(gi, function (e5, t5, n4) {
                            return ":" + t5 + "(" + n4.replace(/\s/g, "") + ")";
                        })));
                        var o2 = Ei.test(e4);
                        if (o2) {
                            var i2 = function (e5) {
                                for (var t5, n4 = []; t5 = e5.match(Ei);) {
                                    var r3 = t5.index, a3 = Xo(e5, r3);
                                    if (a3 === -1)
                                        throw Error(t5.input + " selector missing ')'");
                                    t5 = e5.slice(r3, a3 + 1), e5 = e5.replace(t5, "\uE000"), n4.push(t5);
                                }
                                return { Ba: e5, matches: n4 };
                            }(e4);
                            e4 = i2.Ba, i2 = i2.matches;
                        }
                        return e4 = (e4 = e4.replace(Ci, ":host $1")).replace(yi, function (e5, a3, o3) {
                            return r2 || (e5 = function (e6, t5, n4, r3) {
                                var a4 = e6.indexOf("::slotted");
                                if (0 <= e6.indexOf(":host") ? e6 = function (e7, t6) {
                                    var n5 = e7.match(Si);
                                    return (n5 = n5 && n5[2].trim() || "") ? n5[0].match(bi) ? e7.replace(Si, function (e8, n6, r4) {
                                        return t6 + r4;
                                    }) : n5.split(bi)[0] === t6 ? n5 : "should_not_match" : e7.replace(":host", t6);
                                }(e6, r3) : a4 !== 0 && (e6 = n4 ? mi(e6, n4) : e6), n4 = false, 0 <= a4 && (t5 = "", n4 = true), n4) {
                                    var o4 = true;
                                    n4 && (e6 = e6.replace(_i, function (e7, t6) {
                                        return " > " + t6;
                                    }));
                                }
                                return { value: e6, Ua: t5, stop: o4 };
                            }(o3, a3, t4, n3), r2 = r2 || e5.stop, a3 = e5.Ua, o3 = e5.value), a3 + o3;
                        }), o2 && (e4 = function (e5, t5) {
                            var n4 = e5.split("\uE000");
                            return t5.reduce(function (e6, t6, r3) {
                                return e6 + t6 + n4[r3 + 1];
                            }, n4[0]);
                        }(e4, i2)), a2 && (e4 = hi(e4)), e4.replace(wi, function (e5, t5, n4, r3) {
                            return '[dir="' + n4 + '"] ' + t5 + r3 + ", " + t5 + '[dir="' + n4 + '"]' + r3;
                        });
                    }, ii.prototype.i = function (e4) {
                        return e4.match(":host") ? "" : e4.match("::slotted") ? this.h(e4, ":not(.style-scope)") : mi(e4.trim(), ":not(.style-scope)");
                    }, o.Object.defineProperties(ii.prototype, {
                        g: {
                            configurable: true, enumerable: true, get: function () {
                                return "style-scope";
                            }
                        }
                    });
                    var gi = /:(nth[-\w]+)\(([^)]+)\)/, yi = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, bi = /[[.:#*]/, Ci = /^(::slotted)/, Si = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, _i = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, wi = /(.*):dir\((?:(ltr|rtl))\)(.*)/, Ei = /:(?:matches|any|-(?:webkit|moz)-any)/, Li = new ii();
                    function ki(e4, t4, n3, r2, a2) {
                        this.M = e4 || null, this.h = t4 || null, this.za = n3 || [], this.K = null, this.cssBuild = a2 || "", this.ha = r2 || "", this.g = this.L = this.R = null;
                    }
                    function Ri(e4) {
                        return e4 ? e4.__styleInfo : null;
                    }
                    function xi(e4, t4) {
                        return e4.__styleInfo = t4;
                    }
                    function Ni(e4) {
                        var t4 = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
                        return t4 && t4.call(this, e4);
                    }
                    ki.prototype.i = function () {
                        return this.M;
                    }, ki.prototype._getStyleRules = ki.prototype.i;
                    var Di = /:host\s*>\s*/, Ti = navigator.userAgent.match("Trident");
                    function Pi() {
                    }
                    function Mi(e4) {
                        if (!e4.D) {
                            var t4 = {}, n3 = {};
                            Oi(e4, n3) && (t4.P = n3, e4.rules = null), t4.cssText = e4.parsedCssText.replace(Vo, "").replace(Fo, ""), e4.D = t4;
                        }
                    }
                    function Oi(e4, t4) {
                        var n3 = e4.D;
                        if (!n3) {
                            n3 = e4.parsedCssText;
                            for (var r2; e4 = Fo.exec(n3);)
                                (r2 = (e4[2] || e4[3]).trim()) === "inherit" && r2 === "unset" || (t4[e4[1].trim()] = r2), r2 = true;
                            return r2;
                        }
                        if (n3.P)
                            return Object.assign(t4, n3.P), true;
                    }
                    function Ii(e4, t4, n3) {
                        return t4 && (t4 = 0 <= t4.indexOf(";") ? Ai(e4, t4, n3) : $o(t4, function (t5, r2, a2, o2) {
                            return r2 ? ((r2 = Ii(e4, n3[r2], n3)) && r2 !== "initial" ? r2 === "apply-shim-inherit" && (r2 = "inherit") : r2 = Ii(e4, n3[a2] || a2, n3) || a2, t5 + (r2 || "") + o2) : t5 + o2;
                        })), t4 && t4.trim() || "";
                    }
                    function Ai(e4, t4, n3) {
                        t4 = t4.split(";");
                        for (var r2, a2, o2 = 0; o2 < t4.length; o2++)
                            if (r2 = t4[o2]) {
                                if (zo.lastIndex = 0, a2 = zo.exec(r2))
                                    r2 = Ii(e4, n3[a2[1]], n3);
                                else if ((a2 = r2.indexOf(":")) !== -1) {
                                    var i2 = r2.substring(a2);
                                    i2 = Ii(e4, i2 = i2.trim(), n3) || i2, r2 = r2.substring(0, a2) + i2;
                                }
                                t4[o2] = r2 && r2.lastIndexOf(";") === r2.length - 1 ? r2.slice(0, -1) : r2 || "";
                            }
                        return t4.join(";");
                    }
                    function Fi(e4) {
                        return function (t4) {
                            return t4.replace(e4.u, e4.g);
                        };
                    }
                    function zi(e4, t4) {
                        var n3 = ji, r2 = Go(e4);
                        e4.textContent = Ho(r2, function (e5) {
                            var r3 = e5.cssText = e5.parsedCssText;
                            e5.D && e5.D.cssText && (r3 = r3.replace(Ro, "").replace(xo, ""), e5.cssText = Ai(n3, r3, t4));
                        });
                    }
                    o.Object.defineProperties(Pi.prototype, {
                        g: {
                            configurable: true, enumerable: true, get: function () {
                                return "x-scope";
                            }
                        }
                    });
                    var ji = new Pi(), Ui = {}, Bi = window.customElements;
                    if (Bi && !Mo && !Io) {
                        var Vi = Bi.define;
                        Bi.define = function (e4, t4, n3) {
                            Ui[e4] || (Ui[e4] = Yo(e4)), Vi.call(Bi, e4, t4, n3);
                        };
                    }
                    function Zi() {
                        this.cache = {};
                    }
                    function Hi() {
                    }
                    Zi.prototype.store = function (e4, t4, n3, r2) {
                        var a2 = this.cache[e4] || [];
                        a2.push({ P: t4, styleElement: n3, L: r2 }), 100 < a2.length && a2.shift(), this.cache[e4] = a2;
                    };
                    var Gi = new RegExp(Li.g + "\\s*([^\\s]*)");
                    function Wi(e4) {
                        return (e4 = (e4.classList && e4.classList.value ? e4.classList.value : e4.getAttribute("class") || "").match(Gi)) ? e4[1] : "";
                    }
                    function qi(e4) {
                        var t4 = ti(e4).getRootNode();
                        return t4 === e4 || t4 === e4.ownerDocument ? "" : (e4 = t4.host) ? ni(e4).is : "";
                    }
                    function Ki(e4) {
                        for (var t4 = 0; t4 < e4.length; t4++) {
                            var n3 = e4[t4];
                            if (n3.target !== document.documentElement && n3.target !== document.head)
                                for (var r2 = 0; r2 < n3.addedNodes.length; r2++) {
                                    var a2 = n3.addedNodes[r2];
                                    if (a2.nodeType === Node.ELEMENT_NODE) {
                                        var o2 = a2.getRootNode(), i2 = Wi(a2);
                                        if (i2 && o2 === a2.ownerDocument && (a2.localName !== "style" && a2.localName !== "template" || ai(a2) === ""))
                                            ci(a2, i2);
                                        else if (o2 instanceof ShadowRoot)
                                            for ((o2 = qi(a2)) !== i2 && ui(a2, i2, o2), a2 = window.ShadyDOM.nativeMethods.querySelectorAll.call(a2, ":not(." + Li.g + ")"), i2 = 0; i2 < a2.length; i2++) {
                                                var s2 = qi(o2 = a2[i2]);
                                                s2 && li(o2, s2);
                                            }
                                    }
                                }
                        }
                    }
                    if (!(Mo || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
                        var Ji = new MutationObserver(Ki), Yi = function (e4) {
                            Ji.observe(e4, { childList: true, subtree: true });
                        };
                        if (window.customElements && !window.customElements.polyfillWrapFlushCallback)
                            Yi(document);
                        else {
                            var Qi = function () {
                                Yi(document.body);
                            };
                            window.HTMLImports ? window.HTMLImports.whenReady(Qi) : requestAnimationFrame(function () {
                                if (document.readyState === "loading") {
                                    var e4 = function () {
                                        Qi(), document.removeEventListener("readystatechange", e4);
                                    };
                                    document.addEventListener("readystatechange", e4);
                                } else
                                    Qi();
                            });
                        }
                        Hi = function () {
                            Ki(Ji.takeRecords());
                        };
                    }
                    var Xi = {}, $i = Promise.resolve();
                    function es(e4) {
                        (e4 = Xi[e4]) && (e4._applyShimCurrentVersion = e4._applyShimCurrentVersion || 0, e4._applyShimValidatingVersion = e4._applyShimValidatingVersion || 0, e4._applyShimNextVersion = (e4._applyShimNextVersion || 0) + 1);
                    }
                    function ts(e4) {
                        return e4._applyShimCurrentVersion === e4._applyShimNextVersion;
                    }
                    var ns = {}, rs = new Zi();
                    function as() {
                        this.da = {}, this.i = document.documentElement;
                        var e4 = new mo();
                        e4.rules = [], this.u = xi(this.i, new ki(e4)), this.O = false, this.g = this.h = null;
                    }
                    function os(e4) {
                        var t4 = ni(e4), n3 = t4.is;
                        t4 = t4.ha;
                        var r2 = Ui[n3] || null, a2 = Xi[n3];
                        if (a2)
                            return xi(e4, t4 = new ki(n3 = a2._styleAst, r2, a2.g, t4, a2 = ai(a2))), t4;
                    }
                    function is(e4) {
                        if (!e4.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
                            e4.h = window.ShadyCSS.ApplyShim, e4.h.invalidCallback = es;
                            var t4 = true;
                        } else
                            t4 = false;
                        return function (e5) {
                            !e5.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (e5.g = window.ShadyCSS.CustomStyleInterface, e5.g.transformCallback = function (t5) {
                                e5.Ma(t5);
                            }, e5.g.validateCallback = function () {
                                requestAnimationFrame(function () {
                                    (e5.g.enqueued || e5.O) && e5.flushCustomStyles();
                                });
                            });
                        }(e4), t4;
                    }
                    function ss(e4, t4, n3) {
                        var r2 = ni(t4).is;
                        if (n3.K) {
                            var a2, o2 = n3.K;
                            for (a2 in o2)
                                a2 === null ? t4.style.removeProperty(a2) : t4.style.setProperty(a2, o2[a2]);
                        }
                        !(o2 = Xi[r2]) && t4 !== e4.i || o2 && ai(o2) !== "" || !o2 || !o2._style || ts(o2) || ((ts(o2) || o2._applyShimValidatingVersion !== o2._applyShimNextVersion) && (is(e4), e4.h && e4.h.transformRules(o2._styleAst, r2), o2._style.textContent = di(t4, n3.M), function (e5) {
                            e5._applyShimValidatingVersion = e5._applyShimNextVersion, e5._validating || (e5._validating = true, $i.then(function () {
                                e5._applyShimCurrentVersion = e5._applyShimNextVersion, e5._validating = false;
                            }));
                        }(o2)), Mo && (e4 = t4.shadowRoot) && (e4 = e4.querySelector("style")) && (e4.textContent = di(t4, n3.M)), n3.M = o2._styleAst);
                    }
                    function ls(e4, t4) {
                        return (t4 = ti(t4).getRootNode().host) ? Ri(t4) || os(t4) ? t4 : ls(e4, t4) : e4.i;
                    }
                    function us(e4, t4, n3) {
                        var r2 = ls(e4, t4), a2 = Ri(r2), o2 = a2.R;
                        for (var i2 in r2 === e4.i || o2 || (us(e4, r2, a2), o2 = a2.R), e4 = Object.create(o2 || null), r2 = function (e5, t5, n4) {
                            var r3 = {}, a3 = {};
                            return qo(t5, function (t6) {
                                !function (e6, t7, n5, r4) {
                                    if (t7.D || Mi(t7), t7.D.P) {
                                        var a4 = ni(e6);
                                        e6 = a4.is, a4 = a4.ha, a4 = e6 ? fi(e6, a4) : "html";
                                        var o3 = t7.parsedSelector, i3 = !!o3.match(Di) || a4 === "html" && -1 < o3.indexOf("html"), s2 = o3.indexOf(":host") === 0 && !i3;
                                        n5 === "shady" && (s2 = !(i3 = o3 === a4 + " > *." + a4 || o3.indexOf("html") !== -1) && o3.indexOf(a4) === 0), (i3 || s2) && (n5 = a4, s2 && (t7.F || (t7.F = pi(Li, t7, Li.h, e6 ? "." + e6 : "", a4)), n5 = t7.F || a4), i3 && a4 === "html" && (n5 = t7.F || t7.O), r4({ Ba: n5, ab: s2, qb: i3 }));
                                    }
                                }(e5, t6, n4, function (n5) {
                                    Ni.call(e5._element || e5, n5.Ba) && (n5.ab ? Oi(t6, r3) : Oi(t6, a3));
                                });
                            }, null, true), { hb: a3, Za: r3 };
                        }(t4, n3.M, n3.cssBuild), t4 = function (e5, t5) {
                            var n4 = {}, r3 = [];
                            return qo(e5, function (e6) {
                                e6.D || Mi(e6);
                                var a3 = e6.F || e6.parsedSelector;
                                t5 && e6.D.P && a3 && Ni.call(t5, a3) && (Oi(e6, n4), e6 = e6.index, a3 = parseInt(e6 / 32, 10), r3[a3] = (r3[a3] || 0) | 1 << e6 % 32);
                            }, null, true), { P: n4, key: r3 };
                        }(a2.M, t4).P, Object.assign(e4, r2.Za, t4, r2.hb), t4 = n3.K)
                            ((a2 = t4[i2]) || a2 === 0) && (e4[i2] = a2);
                        for (i2 = ji, t4 = Object.getOwnPropertyNames(e4), a2 = 0; a2 < t4.length; a2++)
                            e4[r2 = t4[a2]] = Ii(i2, e4[r2], e4);
                        n3.R = e4;
                    }
                    (e3 = as.prototype).flush = function () {
                        Hi();
                    }, e3.Xa = function (e4) {
                        return Go(e4);
                    }, e3.lb = function (e4) {
                        return Ho(e4);
                    }, e3.prepareTemplate = function (e4, t4, n3) {
                        this.prepareTemplateDom(e4, t4), this.prepareTemplateStyles(e4, t4, n3);
                    }, e3.prepareTemplateStyles = function (e4, t4, n3) {
                        if (!e4._prepared && !Io) {
                            Mo || Ui[t4] || (Ui[t4] = Yo(t4)), e4._prepared = true, e4.name = t4, e4.extends = n3, Xi[t4] = e4;
                            var r2 = ai(e4), a2 = oi(r2);
                            n3 = { is: t4, extends: n3 };
                            for (var o2 = [], i2 = e4.content.querySelectorAll("style"), s2 = 0; s2 < i2.length; s2++) {
                                var l2 = i2[s2];
                                if (l2.hasAttribute("shady-unscoped")) {
                                    if (!Mo) {
                                        var u2 = l2.textContent;
                                        if (!Zo.has(u2)) {
                                            Zo.add(u2);
                                            var c2 = document.createElement("style");
                                            c2.setAttribute("shady-unscoped", ""), c2.textContent = u2, document.head.appendChild(c2);
                                        }
                                        l2.parentNode.removeChild(l2);
                                    }
                                } else
                                    o2.push(l2.textContent), l2.parentNode.removeChild(l2);
                            }
                            o2 = o2.join("").trim() + (ns[t4] || ""), is(this), a2 || ((i2 = !r2) && (i2 = zo.test(o2) || Fo.test(o2), zo.lastIndex = 0, Fo.lastIndex = 0), s2 = vo(o2), i2 && Ao && this.h && this.h.transformRules(s2, t4), e4._styleAst = s2), i2 = [], Ao || (i2 = function (e5) {
                                var t5 = {}, n4 = [], r3 = 0;
                                for (var a3 in qo(e5, function (e6) {
                                    Mi(e6), e6.index = r3++, e6 = e6.D.cssText;
                                    for (var n5; n5 = jo.exec(e6);) {
                                        var a4 = n5[1];
                                        n5[2] !== ":" && (t5[a4] = true);
                                    }
                                }, function (e6) {
                                    n4.push(e6);
                                }), e5.h = n4, e5 = [], t5)
                                    e5.push(a3);
                                return e5;
                            }(e4._styleAst)), i2.length && !Ao || (s2 = Mo ? e4.content : null, t4 = Ui[t4] || null, r2 = (r2 = di(n3, e4._styleAst, null, r2, a2 ? o2 : "")).length ? Ko(r2, n3.is, s2, t4) : null, e4._style = r2), e4.g = i2;
                        }
                    }, e3.fb = function (e4, t4) {
                        ns[t4] = e4.join(" ");
                    }, e3.prepareTemplateDom = function (e4, t4) {
                        if (!Io) {
                            var n3 = ai(e4);
                            Mo || n3 === "shady" || e4._domPrepared || (e4._domPrepared = true, function (e5, t5) {
                                si(Li, e5, function (e6) {
                                    li(e6, t5 || "");
                                });
                            }(e4.content, t4));
                        }
                    }, e3.flushCustomStyles = function () {
                        if (!Io) {
                            var e4 = is(this);
                            if (this.g) {
                                var t4 = this.g.processStyles();
                                if ((e4 || this.g.enqueued) && !oi(this.u.cssBuild)) {
                                    if (Ao) {
                                        if (!this.u.cssBuild)
                                            for (e4 = 0; e4 < t4.length; e4++) {
                                                var n3 = this.g.getStyleForCustomStyle(t4[e4]);
                                                if (n3 && Ao && this.h) {
                                                    var r2 = Go(n3);
                                                    is(this), this.h.transformRules(r2), n3.textContent = Ho(r2);
                                                }
                                            }
                                    } else {
                                        for (function (e5, t5) {
                                            t5 = t5.map(function (t6) {
                                                return e5.g.getStyleForCustomStyle(t6);
                                            }).filter(function (e6) {
                                                return !!e6;
                                            }), t5.sort(function (e6, t6) {
                                                return (e6 = t6.compareDocumentPosition(e6)) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : e6 & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
                                            }), e5.u.M.rules = t5.map(function (e6) {
                                                return Go(e6);
                                            });
                                        }(this, t4), us(this, this.i, this.u), e4 = 0; e4 < t4.length; e4++)
                                            (n3 = this.g.getStyleForCustomStyle(t4[e4])) && zi(n3, this.u.R);
                                        this.O && this.styleDocument();
                                    }
                                    this.g.enqueued = false;
                                }
                            }
                        }
                    }, e3.styleElement = function (e4, t4) {
                        if (Io) {
                            if (t4) {
                                Ri(e4) || xi(e4, new ki(null));
                                var n3 = Ri(e4);
                                n3.K = n3.K || {}, Object.assign(n3.K, t4), ss(this, e4, n3);
                            }
                        } else if (n3 = Ri(e4) || os(e4)) {
                            if (e4 !== this.i && (this.O = true), t4 && (n3.K = n3.K || {}, Object.assign(n3.K, t4)), Ao)
                                ss(this, e4, n3);
                            else if (this.flush(), us(this, e4, n3), n3.za && n3.za.length) {
                                var r2;
                                t4 = ni(e4).is;
                                e: {
                                    if (r2 = rs.cache[t4])
                                        for (var a2 = r2.length - 1; 0 <= a2; a2--) {
                                            var o2 = r2[a2];
                                            t: {
                                                for (var i2 = n3.za, s2 = 0; s2 < i2.length; s2++) {
                                                    var l2 = i2[s2];
                                                    if (o2.P[l2] !== n3.R[l2]) {
                                                        i2 = false;
                                                        break t;
                                                    }
                                                }
                                                i2 = true;
                                            }
                                            if (i2) {
                                                r2 = o2;
                                                break e;
                                            }
                                        }
                                    r2 = void 0;
                                }
                                i2 = r2 ? r2.styleElement : null, a2 = n3.L, (o2 = r2 && r2.L) || (o2 = t4 + "-" + (o2 = this.da[t4] = (this.da[t4] || 0) + 1)), n3.L = o2, o2 = n3.L, s2 = ji, s2 = i2 ? i2.textContent || "" : function (e5, t5, n4, r3) {
                                    var a3 = ni(t5), o3 = fi(a3.is, a3.ha), i3 = new RegExp("(?:^|[^.#[:])" + (t5.extends ? "\\" + o3.slice(0, -1) + "\\]" : o3) + "($|[.:[\\s>+~])"), s3 = Ri(t5);
                                    a3 = s3.M, s3 = s3.cssBuild;
                                    var l3 = function (e6, t6) {
                                        e6 = e6.h;
                                        var n5 = {};
                                        if (!Mo && e6)
                                            for (var r4 = 0, a4 = e6[r4]; r4 < e6.length; a4 = e6[++r4]) {
                                                var o4 = a4, i4 = t6;
                                                o4.u = new RegExp("\\b" + o4.keyframesName + "(?!\\B|-)", "g"), o4.g = o4.keyframesName + "-" + i4, o4.F = o4.F || o4.selector, o4.selector = o4.F.replace(o4.keyframesName, o4.g), n5[a4.keyframesName] = Fi(a4);
                                            }
                                        return n5;
                                    }(a3, r3);
                                    return di(t5, a3, function (t6) {
                                        var a4 = "";
                                        if (t6.D || Mi(t6), t6.D.cssText && (a4 = Ai(e5, t6.D.cssText, n4)), t6.cssText = a4, !Mo && !Wo(t6) && t6.cssText) {
                                            var s4 = a4 = t6.cssText;
                                            if (t6.Ia == null && (t6.Ia = Uo.test(a4)), t6.Ia)
                                                if (t6.pa == null)
                                                    for (var u3 in t6.pa = [], l3)
                                                        a4 !== (s4 = (s4 = l3[u3])(a4)) && (a4 = s4, t6.pa.push(u3));
                                                else {
                                                    for (u3 = 0; u3 < t6.pa.length; ++u3)
                                                        a4 = (s4 = l3[t6.pa[u3]])(a4);
                                                    s4 = a4;
                                                }
                                            t6.cssText = s4, t6.F = t6.F || t6.selector, a4 = "." + r3, s4 = 0;
                                            for (var c2 = (u3 = ri(t6.F)).length, d2 = void 0; s4 < c2 && (d2 = u3[s4]); s4++)
                                                u3[s4] = d2.match(i3) ? d2.replace(o3, a4) : a4 + " " + d2;
                                            t6.selector = u3.join(",");
                                        }
                                    }, s3);
                                }(s2, e4, n3.R, o2);
                                var u2 = (l2 = Ri(e4)).g;
                                u2 && !Mo && u2 !== i2 && (u2._useCount--, 0 >= u2._useCount && u2.parentNode && u2.parentNode.removeChild(u2)), Mo ? l2.g ? (l2.g.textContent = s2, i2 = l2.g) : s2 && (i2 = Ko(s2, o2, e4.shadowRoot, l2.h)) : i2 ? i2.parentNode || (Ti && -1 < s2.indexOf("@media") && (i2.textContent = s2), Qo(i2, null, l2.h)) : s2 && (i2 = Ko(s2, o2, null, l2.h)), i2 && (i2._useCount = i2._useCount || 0, l2.g != i2 && i2._useCount++, l2.g = i2), o2 = i2, Mo || (i2 = n3.L, l2 = s2 = e4.getAttribute("class") || "", a2 && (l2 = s2.replace(new RegExp("\\s*x-scope\\s*" + a2 + "\\s*", "g"), " ")), s2 !== (l2 += (l2 ? " " : "") + "x-scope " + i2) && ei(e4, l2)), r2 || rs.store(t4, n3.R, o2, n3.L);
                            }
                        }
                    }, e3.styleDocument = function (e4) {
                        this.styleSubtree(this.i, e4);
                    }, e3.styleSubtree = function (e4, t4) {
                        var n3 = ti(e4), r2 = n3.shadowRoot, a2 = e4 === this.i;
                        if ((r2 || a2) && this.styleElement(e4, t4), e4 = a2 ? n3 : r2)
                            for (e4 = Array.from(e4.querySelectorAll("*")).filter(function (e5) {
                                return ti(e5).shadowRoot;
                            }), t4 = 0; t4 < e4.length; t4++)
                                this.styleSubtree(e4[t4]);
                    }, e3.Ma = function (e4) {
                        var t4 = this, n3 = ai(e4);
                        if (n3 !== this.u.cssBuild && (this.u.cssBuild = n3), !oi(n3)) {
                            var r2 = Go(e4);
                            qo(r2, function (e5) {
                                if (Mo)
                                    vi(e5);
                                else {
                                    var r3 = Li;
                                    e5.selector = e5.parsedSelector, vi(e5), e5.selector = e5.F = pi(r3, e5, r3.i, void 0, void 0);
                                }
                                Ao && n3 === "" && (is(t4), t4.h && t4.h.transformRule(e5));
                            }), Ao ? e4.textContent = Ho(r2) : this.u.M.rules.push(r2);
                        }
                    }, e3.getComputedStyleValue = function (e4, t4) {
                        var n3;
                        return Ao || (n3 = (Ri(e4) || Ri(ls(this, e4))).R[t4]), (n3 = n3 || window.getComputedStyle(e4).getPropertyValue(t4)) ? n3.trim() : "";
                    }, e3.kb = function (e4, t4) {
                        var n3 = ti(e4).getRootNode();
                        if (t4 = t4 ? (typeof t4 == "string" ? t4 : String(t4)).split(/\s/) : [], !(n3 = n3.host && n3.host.localName)) {
                            var r2 = e4.getAttribute("class");
                            if (r2) {
                                r2 = r2.split(/\s/);
                                for (var a2 = 0; a2 < r2.length; a2++)
                                    if (r2[a2] === Li.g) {
                                        n3 = r2[a2 + 1];
                                        break;
                                    }
                            }
                        }
                        n3 && t4.push(Li.g, n3), Ao || (n3 = Ri(e4)) && n3.L && t4.push(ji.g, n3.L), ei(e4, t4.join(" "));
                    }, e3.Ta = function (e4) {
                        return Ri(e4);
                    }, e3.jb = function (e4, t4) {
                        li(e4, t4);
                    }, e3.mb = function (e4, t4) {
                        li(e4, t4, true);
                    }, e3.ib = function (e4) {
                        return qi(e4);
                    }, e3.Va = function (e4) {
                        return Wi(e4);
                    }, as.prototype.flush = as.prototype.flush, as.prototype.prepareTemplate = as.prototype.prepareTemplate, as.prototype.styleElement = as.prototype.styleElement, as.prototype.styleDocument = as.prototype.styleDocument, as.prototype.styleSubtree = as.prototype.styleSubtree, as.prototype.getComputedStyleValue = as.prototype.getComputedStyleValue, as.prototype.setElementClass = as.prototype.kb, as.prototype._styleInfoForNode = as.prototype.Ta, as.prototype.transformCustomStyleForDocument = as.prototype.Ma, as.prototype.getStyleAst = as.prototype.Xa, as.prototype.styleAstToString = as.prototype.lb, as.prototype.flushCustomStyles = as.prototype.flushCustomStyles, as.prototype.scopeNode = as.prototype.jb, as.prototype.unscopeNode = as.prototype.mb, as.prototype.scopeForNode = as.prototype.ib, as.prototype.currentScopeForNode = as.prototype.Va, as.prototype.prepareAdoptedCssText = as.prototype.fb, Object.defineProperties(as.prototype, {
                        nativeShadow: {
                            get: function () {
                                return Mo;
                            }
                        }, nativeCss: {
                            get: function () {
                                return Ao;
                            }
                        }
                    });
                    var cs, ds, fs = new as();
                    window.ShadyCSS && (cs = window.ShadyCSS.ApplyShim, ds = window.ShadyCSS.CustomStyleInterface), window.ShadyCSS = {
                        ScopingShim: fs, prepareTemplate: function (e4, t4, n3) {
                            fs.flushCustomStyles(), fs.prepareTemplate(e4, t4, n3);
                        }, prepareTemplateDom: function (e4, t4) {
                            fs.prepareTemplateDom(e4, t4);
                        }, prepareTemplateStyles: function (e4, t4, n3) {
                            fs.flushCustomStyles(), fs.prepareTemplateStyles(e4, t4, n3);
                        }, styleSubtree: function (e4, t4) {
                            fs.flushCustomStyles(), fs.styleSubtree(e4, t4);
                        }, styleElement: function (e4) {
                            fs.flushCustomStyles(), fs.styleElement(e4);
                        }, styleDocument: function (e4) {
                            fs.flushCustomStyles(), fs.styleDocument(e4);
                        }, flushCustomStyles: function () {
                            fs.flushCustomStyles();
                        }, getComputedStyleValue: function (e4, t4) {
                            return fs.getComputedStyleValue(e4, t4);
                        }, nativeCss: Ao, nativeShadow: Mo, cssBuild: Co, disableRuntime: Io
                    }, cs && (window.ShadyCSS.ApplyShim = cs), ds && (window.ShadyCSS.CustomStyleInterface = ds), function (e4) {
                        function t4(e5) {
                            return e5 == "" && (o2.call(this), this.m = true), e5.toLowerCase();
                        }
                        function n3(e5) {
                            var t5 = e5.charCodeAt(0);
                            return 32 < t5 && 127 > t5 && [34, 35, 60, 62, 63, 96].indexOf(t5) == -1 ? e5 : encodeURIComponent(e5);
                        }
                        function r2(e5) {
                            var t5 = e5.charCodeAt(0);
                            return 32 < t5 && 127 > t5 && [34, 35, 60, 62, 96].indexOf(t5) == -1 ? e5 : encodeURIComponent(e5);
                        }
                        function a2(e5, a3, i3) {
                            function s3(e6) {
                            }
                            var l3 = a3 || "scheme start", p3 = 0, h2 = "", m2 = false, v2 = false;
                            e:
                            for (; (e5[p3 - 1] != null || p3 == 0) && !this.m;) {
                                var y2 = e5[p3];
                                switch (l3) {
                                    case "scheme start":
                                        if (!y2 || !d2.test(y2)) {
                                            if (a3) {
                                                break e;
                                            }
                                            h2 = "", l3 = "no scheme";
                                            continue;
                                        }
                                        h2 += y2.toLowerCase(), l3 = "scheme";
                                        break;
                                    case "scheme":
                                        if (y2 && f2.test(y2))
                                            h2 += y2.toLowerCase();
                                        else {
                                            if (y2 != ":") {
                                                if (a3) {
                                                    break e;
                                                }
                                                h2 = "", p3 = 0, l3 = "no scheme";
                                                continue;
                                            }
                                            if (this.l = h2, h2 = "", a3)
                                                break e;
                                            u2[this.l] !== void 0 && (this.G = true), l3 = this.l == "file" ? "relative" : this.G && i3 && i3.l == this.l ? "relative or authority" : this.G ? "authority first slash" : "scheme data";
                                        }
                                        break;
                                    case "scheme data":
                                        y2 == "?" ? (this.A = "?", l3 = "query") : y2 == "#" ? (this.C = "#", l3 = "fragment") : y2 != null && y2 != "	" && y2 != "\n" && y2 != "\r" && (this.va += n3(y2));
                                        break;
                                    case "no scheme":
                                        if (i3 && u2[i3.l] !== void 0) {
                                            l3 = "relative";
                                            continue;
                                        }
                                        o2.call(this), this.m = true;
                                        break;
                                    case "relative or authority":
                                        if (y2 != "/" || e5[p3 + 1] != "/") {
                                            l3 = "relative";
                                            continue;
                                        }
                                        l3 = "authority ignore slashes";
                                        break;
                                    case "relative":
                                        if (this.G = true, this.l != "file" && (this.l = i3.l), y2 == null) {
                                            this.o = i3.o, this.v = i3.v, this.s = i3.s.slice(), this.A = i3.A, this.B = i3.B, this.j = i3.j;
                                            break e;
                                        }
                                        if (y2 == "/" || y2 == "\\")
                                            l3 = "relative slash";
                                        else if (y2 == "?")
                                            this.o = i3.o, this.v = i3.v, this.s = i3.s.slice(), this.A = "?", this.B = i3.B, this.j = i3.j, l3 = "query";
                                        else {
                                            if (y2 != "#") {
                                                l3 = e5[p3 + 1];
                                                var b2 = e5[p3 + 2];
                                                (this.l != "file" || !d2.test(y2) || l3 != ":" && l3 != "|" || b2 != null && b2 != "/" && b2 != "\\" && b2 != "?" && b2 != "#") && (this.o = i3.o, this.v = i3.v, this.B = i3.B, this.j = i3.j, this.s = i3.s.slice(), this.s.pop()), l3 = "relative path";
                                                continue;
                                            }
                                            this.o = i3.o, this.v = i3.v, this.s = i3.s.slice(), this.A = i3.A, this.C = "#", this.B = i3.B, this.j = i3.j, l3 = "fragment";
                                        }
                                        break;
                                    case "relative slash":
                                        if (y2 != "/" && y2 != "\\") {
                                            this.l != "file" && (this.o = i3.o, this.v = i3.v, this.B = i3.B, this.j = i3.j), l3 = "relative path";
                                            continue;
                                        }
                                        l3 = this.l == "file" ? "file host" : "authority ignore slashes";
                                        break;
                                    case "authority first slash":
                                        if (y2 != "/") {
                                            l3 = "authority ignore slashes";
                                            continue;
                                        }
                                        l3 = "authority second slash";
                                        break;
                                    case "authority second slash":
                                        if (l3 = "authority ignore slashes", y2 != "/") {
                                            continue;
                                        }
                                        break;
                                    case "authority ignore slashes":
                                        if (y2 != "/" && y2 != "\\") {
                                            l3 = "authority";
                                            continue;
                                        }
                                        break;
                                    case "authority":
                                        if (y2 == "@") {
                                            for (m2 && (h2 += "%40"), m2 = true, y2 = 0; y2 < h2.length; y2++)
                                                (b2 = h2[y2]) == "	" || b2 == "\n" || b2 == "\r" ? s3() : b2 == ":" && this.j === null ? this.j = "" : (b2 = n3(b2), this.j !== null ? this.j += b2 : this.B += b2);
                                            h2 = "";
                                        } else {
                                            if (y2 == null || y2 == "/" || y2 == "\\" || y2 == "?" || y2 == "#") {
                                                p3 -= h2.length, h2 = "", l3 = "host";
                                                continue;
                                            }
                                            h2 += y2;
                                        }
                                        break;
                                    case "file host":
                                        if (y2 == null || y2 == "/" || y2 == "\\" || y2 == "?" || y2 == "#") {
                                            h2.length != 2 || !d2.test(h2[0]) || h2[1] != ":" && h2[1] != "|" ? (h2.length != 0 && (this.o = t4.call(this, h2), h2 = ""), l3 = "relative path start") : l3 = "relative path";
                                            continue;
                                        }
                                        y2 == "	" || y2 == "\n" || y2 == "\r" ? s3() : h2 += y2;
                                        break;
                                    case "host":
                                    case "hostname":
                                        if (y2 != ":" || v2) {
                                            if (y2 == null || y2 == "/" || y2 == "\\" || y2 == "?" || y2 == "#") {
                                                if (this.o = t4.call(this, h2), h2 = "", l3 = "relative path start", a3)
                                                    break e;
                                                continue;
                                            }
                                            y2 != "	" && y2 != "\n" && y2 != "\r" ? (y2 == "[" ? v2 = true : y2 == "]" && (v2 = false), h2 += y2) : s3();
                                        } else if (this.o = t4.call(this, h2), h2 = "", l3 = "port", a3 == "hostname")
                                            break e;
                                        break;
                                    case "port":
                                        if (/[0-9]/.test(y2))
                                            h2 += y2;
                                        else {
                                            if (y2 == null || y2 == "/" || y2 == "\\" || y2 == "?" || y2 == "#" || a3) {
                                                if (h2 != "" && ((h2 = parseInt(h2, 10)) != u2[this.l] && (this.v = h2 + ""), h2 = ""), a3)
                                                    break e;
                                                l3 = "relative path start";
                                                continue;
                                            }
                                            y2 == "	" || y2 == "\n" || y2 == "\r" ? s3() : (o2.call(this), this.m = true);
                                        }
                                        break;
                                    case "relative path start":
                                        if (l3 = "relative path", y2 != "/" && y2 != "\\")
                                            continue;
                                        break;
                                    case "relative path":
                                        y2 != null && y2 != "/" && y2 != "\\" && (a3 || y2 != "?" && y2 != "#") ? y2 != "	" && y2 != "\n" && y2 != "\r" && (h2 += n3(y2)) : ((b2 = c2[h2.toLowerCase()]) && (h2 = b2), h2 == ".." ? (this.s.pop(), y2 != "/" && y2 != "\\" && this.s.push("")) : h2 == "." && y2 != "/" && y2 != "\\" ? this.s.push("") : h2 != "." && (this.l == "file" && this.s.length == 0 && h2.length == 2 && d2.test(h2[0]) && h2[1] == "|" && (h2 = h2[0] + ":"), this.s.push(h2)), h2 = "", y2 == "?" ? (this.A = "?", l3 = "query") : y2 == "#" && (this.C = "#", l3 = "fragment"));
                                        break;
                                    case "query":
                                        a3 || y2 != "#" ? y2 != null && y2 != "	" && y2 != "\n" && y2 != "\r" && (this.A += r2(y2)) : (this.C = "#", l3 = "fragment");
                                        break;
                                    case "fragment":
                                        y2 != null && y2 != "	" && y2 != "\n" && y2 != "\r" && (this.C += y2);
                                }
                                p3++;
                            }
                        }
                        function o2() {
                            this.B = this.va = this.l = "", this.j = null, this.v = this.o = "", this.s = [], this.C = this.A = "", this.G = this.m = false;
                        }
                        function i2(e5, t5) {
                            t5 === void 0 || t5 instanceof i2 || (t5 = new i2(String(t5))), this.g = e5, o2.call(this), a2.call(this, this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, t5);
                        }
                        var s2 = false;
                        try {
                            var l2 = new URL("b", "http://a");
                            l2.pathname = "c%20d", s2 = l2.href === "http://a/c%20d";
                        } catch (e5) {
                        }
                        if (!s2) {
                            var u2 = Object.create(null);
                            u2.ftp = 21, u2.file = 0, u2.gopher = 70, u2.http = 80, u2.https = 443, u2.ws = 80, u2.wss = 443;
                            var c2 = Object.create(null);
                            c2["%2e"] = ".", c2[".%2e"] = "..", c2["%2e."] = "..", c2["%2e%2e"] = "..";
                            var d2 = /[a-zA-Z]/, f2 = /[a-zA-Z0-9+\-.]/;
                            i2.prototype = {
                                toString: function () {
                                    return this.href;
                                }, get href() {
                                    if (this.m)
                                        return this.g;
                                    var e5 = "";
                                    return this.B == "" && this.j == null || (e5 = this.B + (this.j != null ? ":" + this.j : "") + "@"), this.protocol + (this.G ? "//" + e5 + this.host : "") + this.pathname + this.A + this.C;
                                }, set href(e5) {
                                    o2.call(this), a2.call(this, e5);
                                }, get protocol() {
                                    return this.l + ":";
                                }, set protocol(e5) {
                                    this.m || a2.call(this, e5 + ":", "scheme start");
                                }, get host() {
                                    return this.m ? "" : this.v ? this.o + ":" + this.v : this.o;
                                }, set host(e5) {
                                    !this.m && this.G && a2.call(this, e5, "host");
                                }, get hostname() {
                                    return this.o;
                                }, set hostname(e5) {
                                    !this.m && this.G && a2.call(this, e5, "hostname");
                                }, get port() {
                                    return this.v;
                                }, set port(e5) {
                                    !this.m && this.G && a2.call(this, e5, "port");
                                }, get pathname() {
                                    return this.m ? "" : this.G ? "/" + this.s.join("/") : this.va;
                                }, set pathname(e5) {
                                    !this.m && this.G && (this.s = [], a2.call(this, e5, "relative path start"));
                                }, get search() {
                                    return this.m || !this.A || this.A == "?" ? "" : this.A;
                                }, set search(e5) {
                                    !this.m && this.G && (this.A = "?", e5[0] == "?" && (e5 = e5.slice(1)), a2.call(this, e5, "query"));
                                }, get hash() {
                                    return this.m || !this.C || this.C == "#" ? "" : this.C;
                                }, set hash(e5) {
                                    this.m || (e5 ? (this.C = "#", e5[0] == "#" && (e5 = e5.slice(1)), a2.call(this, e5, "fragment")) : this.C = "");
                                }, get origin() {
                                    var e5;
                                    if (this.m || !this.l)
                                        return "";
                                    switch (this.l) {
                                        case "data":
                                        case "file":
                                        case "javascript":
                                        case "mailto":
                                            return "null";
                                    }
                                    return (e5 = this.host) ? this.l + "://" + e5 : "";
                                }
                            };
                            var p2 = e4.URL;
                            p2 && (i2.createObjectURL = function (e5) {
                                return p2.createObjectURL.apply(p2, arguments);
                            }, i2.revokeObjectURL = function (e5) {
                                p2.revokeObjectURL(e5);
                            }), e4.URL = i2;
                        }
                    }(window);
                    var ps = window.customElements, hs = false, ms = null;
                    function vs() {
                        window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document), ms && ms(), hs = true, window.WebComponents.ready = true, document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: true }));
                    }
                    ps.polyfillWrapFlushCallback && ps.polyfillWrapFlushCallback(function (e4) {
                        ms = e4, hs && e4();
                    }), document.readyState !== "complete" ? (window.addEventListener("load", vs), window.addEventListener("DOMContentLoaded", function () {
                        window.removeEventListener("load", vs), vs();
                    })) : vs();
                }).call(this);
            }, 618: (e2, t2, n2) => {
                function r(e3, t3) {
                    if (!(e3 instanceof t3))
                        throw new TypeError("Cannot call a class as a function");
                }
                function a(e3, t3) {
                    for (var n3 = 0; n3 < t3.length; n3++) {
                        var r2 = t3[n3];
                        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
                    }
                }
                function o(e3, t3, n3) {
                    return t3 && a(e3.prototype, t3), n3 && a(e3, n3), e3;
                }
                function i(e3, t3) {
                    return i = Object.setPrototypeOf || function (e4, t4) {
                        return e4.__proto__ = t4, e4;
                    }, i(e3, t3);
                }
                function s(e3, t3) {
                    if (typeof t3 != "function" && t3 !== null)
                        throw new TypeError("Super expression must either be null or a function");
                    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), t3 && i(e3, t3);
                }
                function l(e3) {
                    return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e4) {
                        return typeof e4;
                    } : function (e4) {
                        return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
                    }, l(e3);
                }
                function u(e3, t3) {
                    if (t3 && (l(t3) === "object" || typeof t3 == "function"))
                        return t3;
                    if (t3 !== void 0)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function (e4) {
                        if (e4 === void 0)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e4;
                    }(e3);
                }
                function c(e3) {
                    return c = Object.setPrototypeOf ? Object.getPrototypeOf : function (e4) {
                        return e4.__proto__ || Object.getPrototypeOf(e4);
                    }, c(e3);
                }
                function d() {
                    if (typeof Reflect == "undefined" || !Reflect.construct)
                        return false;
                    if (Reflect.construct.sham)
                        return false;
                    if (typeof Proxy == "function")
                        return true;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                        })), true;
                    } catch (e3) {
                        return false;
                    }
                }
                function f(e3, t3, n3) {
                    return f = d() ? Reflect.construct : function (e4, t4, n4) {
                        var r2 = [null];
                        r2.push.apply(r2, t4);
                        var a2 = new (Function.bind.apply(e4, r2))();
                        return n4 && i(a2, n4.prototype), a2;
                    }, f.apply(null, arguments);
                }
                function p(e3) {
                    var t3 = typeof Map == "function" ? new Map() : void 0;
                    return p = function (e4) {
                        if (e4 === null || (n3 = e4, Function.toString.call(n3).indexOf("[native code]") === -1))
                            return e4;
                        var n3;
                        if (typeof e4 != "function")
                            throw new TypeError("Super expression must either be null or a function");
                        if (t3 !== void 0) {
                            if (t3.has(e4))
                                return t3.get(e4);
                            t3.set(e4, r2);
                        }
                        function r2() {
                            return f(e4, arguments, c(this).constructor);
                        }
                        return r2.prototype = Object.create(e4.prototype, { constructor: { value: r2, enumerable: false, writable: true, configurable: true } }), i(r2, e4);
                    }, p(e3);
                }
                n2(575);
                var h = n2(294), m = n2(935);
                function v(e3, t3) {
                    (t3 == null || t3 > e3.length) && (t3 = e3.length);
                    for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
                        r2[n3] = e3[n3];
                    return r2;
                }
                function g(e3, t3) {
                    if (e3) {
                        if (typeof e3 == "string")
                            return v(e3, t3);
                        var n3 = Object.prototype.toString.call(e3).slice(8, -1);
                        return n3 === "Object" && e3.constructor && (n3 = e3.constructor.name), n3 === "Map" || n3 === "Set" ? Array.from(e3) : n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? v(e3, t3) : void 0;
                    }
                }
                function y(e3, t3) {
                    return function (e4) {
                        if (Array.isArray(e4))
                            return e4;
                    }(e3) || function (e4, t4) {
                        var n3 = e4 == null ? null : typeof Symbol != "undefined" && e4[Symbol.iterator] || e4["@@iterator"];
                        if (n3 != null) {
                            var r2, a2, o2 = [], i2 = true, s2 = false;
                            try {
                                for (n3 = n3.call(e4); !(i2 = (r2 = n3.next()).done) && (o2.push(r2.value), !t4 || o2.length !== t4); i2 = true)
                                    ;
                            } catch (e5) {
                                s2 = true, a2 = e5;
                            } finally {
                                try {
                                    i2 || n3.return == null || n3.return();
                                } finally {
                                    if (s2)
                                        throw a2;
                                }
                            }
                            return o2;
                        }
                    }(e3, t3) || g(e3, t3) || function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function b(e3) {
                    return function (e4) {
                        if (Array.isArray(e4))
                            return v(e4);
                    }(e3) || function (e4) {
                        if (typeof Symbol != "undefined" && e4[Symbol.iterator] != null || e4["@@iterator"] != null)
                            return Array.from(e4);
                    }(e3) || g(e3) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function C(e3, t3, n3, r2, a2, o2, i2) {
                    try {
                        var s2 = e3[o2](i2), l2 = s2.value;
                    } catch (e4) {
                        return void n3(e4);
                    }
                    s2.done ? t3(l2) : Promise.resolve(l2).then(r2, a2);
                }
                function S(e3) {
                    return function () {
                        var t3 = this, n3 = arguments;
                        return new Promise(function (r2, a2) {
                            var o2 = e3.apply(t3, n3);
                            function i2(e4) {
                                C(o2, r2, a2, i2, s2, "next", e4);
                            }
                            function s2(e4) {
                                C(o2, r2, a2, i2, s2, "throw", e4);
                            }
                            i2(void 0);
                        });
                    };
                }
                var _, w, E, L, k, R, x, N, D, T, P, M = n2(757), O = n2.n(M);
                !function (e3) {
                    e3[e3.eFL_Message_FitFaceIntoOval = 1] = "eFL_Message_FitFaceIntoOval", e3[e3.eFL_Message_LookStraight = 2] = "eFL_Message_LookStraight", e3[e3.eFL_Message_MoveCloser = 3] = "eFL_Message_MoveCloser", e3[e3.eFL_Message_MoveAway = 4] = "eFL_Message_MoveAway", e3[e3.eFL_Message_HoldStill = 5] = "eFL_Message_HoldStill", e3[e3.eFL_Message_Empty = 6] = "eFL_Message_Empty";
                }(_ || (_ = {})), function (e3) {
                    e3[e3.eFL_ProcessingStage_Far = 0] = "eFL_ProcessingStage_Far", e3[e3.eFL_ProcessingStage_Near = 1] = "eFL_ProcessingStage_Near";
                }(w || (w = {})), function (e3) {
                    e3[e3.eFL_MessageStyle_Normal = 0] = "eFL_MessageStyle_Normal", e3[e3.eFL_MessageStyle_Alarm = 1] = "eFL_MessageStyle_Alarm";
                }(E || (E = {})), function (e3) {
                    e3[e3.eFL_Status_Finished = 0] = "eFL_Status_Finished", e3[e3.eFL_Status_InProcess = 1] = "eFL_Status_InProcess", e3[e3.eFL_Status_Timeout = 2] = "eFL_Status_Timeout", e3[e3.eFL_Status_Failed = 3] = "eFL_Status_Failed";
                }(L || (L = {})), function (e3) {
                    e3[e3.eFL_Command_Init = 0] = "eFL_Command_Init", e3[e3.eFL_Command_StartNewSession = 1] = "eFL_Command_StartNewSession", e3[e3.eFL_Command_Process = 2] = "eFL_Command_Process", e3[e3.eFL_Command_Free = 3] = "eFL_Command_Free";
                }(k || (k = {})), function (e3) {
                    e3.ACCURATE = "faceCaptureStatus.ACCURATE", e3.NOFACE = "faceCaptureStatus.NOFACE", e3.SMALL = "faceCaptureStatus.SMALL", e3.HUGE = "faceCaptureStatus.HUGE", e3.PROCESSING = "faceCaptureStatus.PROCESSING", e3.NOT_CENTERED = "faceCaptureStatus.NOT_CENTERED";
                }(R || (R = {})), function (e3) {
                    e3.FINDING = "documentReaderStatus.FINDING", e3.PROCESSING = "documentReaderStatus.PROCESSING", e3.SUCCESS = "documentReaderStatus.SUCCESS", e3.FAILED = "documentReaderStatus.FAILED", e3.DOCUMENT_POSITION_AVAILABLE = "documentReaderStatus.DOCUMENT_POSITION_AVAILABLE", e3.START_DETECTION = "documentReaderStatus.START_DETECTION", e3.START_NEXT_PAGE = "documentReaderStatus.START_NEXT_PAGE", e3.SNAPSHOT = "documentReaderStatus.SNAPSHOT";
                }(x || (x = {})), function (e3) {
                    e3.PREPARING = "streamStatus.PREPARING", e3.REQUESTING = "streamStatus.REQUESTING", e3.PLAY = "streamStatus.PLAY", e3.UNKNOWN_ERROR = "streamStatus.UNKNOWN_ERROR", e3.PERMISSION_DENIED = "streamStatus.PERMISSION_DENIED", e3.NO_CAMERA = "streamStatus.NO_CAMERA";
                }(N || (N = {})), function (e3) {
                    e3.INSTRUCTION = "faceCaptureReducerStatus.INSTRUCTION", e3.SUCCESS = "faceCaptureReducerStatus.SUCCESS", e3.FAILED = "faceCaptureReducerStatus.FAILED", e3.CAPTURING = "faceCaptureReducerStatus.CAPTURING", e3.PROCESSING_REQUEST = "faceCaptureReducerStatus.PROCESSING_REQUEST";
                }(D || (D = {})), function (e3) {
                    e3.CHOOSE_INPUT_SOURCE = "documentReaderReducerStatus.CHOOSE_INPUT_SOURCE", e3.CAMERA_PROCESSING = "documentReaderReducerStatus.CAMERA_PROCESSING", e3.FILE_PROCESSING = "documentReaderReducerStatus.FILE_PROCESSING", e3.API_PROCESSING = "documentReaderReducerStatus.API_PROCESSING", e3.SUCCESS = "documentReaderReducerStatus.SUCCESS", e3.FAILED = "documentReaderReducerStatus.FAILED";
                }(T || (T = {})), function (e3) {
                    e3.USER = "user", e3.ENVIRONMENT = "environment";
                }(P || (P = {}));
                var I = 2e3, A = "NotAllowedError", F = { VGA: { width: 640, height: 480 }, HD: { width: 1280, height: 720 } }, z = ["rear", "back", "r\xFCck", "arri\xE8re", "trasera", "tr\xE1s", "traseira", "posteriore", "\u540E\u9762", "\u5F8C\u9762", "\u80CC\u9762", "\u540E\u7F6E", "\u5F8C\u7F6E", "\u80CC\u7F6E", "\u0437\u0430\u0434\u043D\u0435\u0439", "\u0627\u0644\u062E\u0644\u0641\u064A\u0629", "\uD6C4", "arka", "achterzijde", "\u0E2B\u0E25\u0E31\u0E07", "baksidan", "bagside", "sau", "bak", "tylny", "takakamera", "belakang", "\u05D0\u05D7\u05D5\u05E8\u05D9\u05EA", "\u03C0\u03AF\u03C3\u03C9", "spate", "h\xE1ts\xF3", "zadn\xED", "darrere", "zadn\xE1", "\u0437\u0430\u0434\u043D\u044F", "stra\u017Enja", "belakang", "\u092C\u0948\u0915"];
                const j = function e3(t3, n3) {
                    r(this, e3), this.deviceId = t3.deviceId, this.facing = n3, this.groupId = t3.groupId, this.label = t3.label;
                }, U = new (function () {
                    function e3(t3) {
                        r(this, e3), this.logLvl = t3;
                    }
                    return o(e3, [{
                        key: "log", value: function (e4, t3) {
                            var n3 = this.time();
                            t3 === 1 && this.logLvl >= 4 && console.log(n3 + "[log]", e4), t3 === 2 && this.logLvl >= 3 && console.info("%c".concat(n3, " [info] ").concat(e4), "color: #6e56b0;"), t3 === 3 && this.logLvl >= 2 && console.warn(n3 + "[warn]", e4), t3 === 4 && this.logLvl >= 1 && console.error(n3 + "[error]", e4);
                        }
                    }, {
                        key: "time", value: function () {
                            var e4 = new Date(), t3 = e4.getHours(), n3 = e4.getMinutes(), r2 = e4.getSeconds(), a2 = e4.getMilliseconds();
                            return "[".concat(t3 > 9 ? t3 : "0" + t3, ":").concat(n3 > 9 ? n3 : "0" + n3, ":").concat(r2 > 9 ? r2 : "0" + r2, ":").concat(a2, "]");
                        }
                    }, {
                        key: "debug", value: function (e4) {
                            this.log(e4, 1);
                        }
                    }, {
                        key: "info", value: function (e4) {
                            this.log(e4, 2);
                        }
                    }, {
                        key: "warn", value: function (e4) {
                            this.log(e4, 3);
                        }
                    }, {
                        key: "error", value: function (e4) {
                            this.log(e4, 4);
                        }
                    }]), e3;
                }())(Number("1"));
                function B(e3, t3) {
                    var n3 = typeof Symbol != "undefined" && e3[Symbol.iterator] || e3["@@iterator"];
                    if (!n3) {
                        if (Array.isArray(e3) || (n3 = function (e4, t4) {
                            if (e4) {
                                if (typeof e4 == "string")
                                    return V(e4, t4);
                                var n4 = Object.prototype.toString.call(e4).slice(8, -1);
                                return n4 === "Object" && e4.constructor && (n4 = e4.constructor.name), n4 === "Map" || n4 === "Set" ? Array.from(e4) : n4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? V(e4, t4) : void 0;
                            }
                        }(e3)) || t3 && e3 && typeof e3.length == "number") {
                            n3 && (e3 = n3);
                            var r2 = 0, a2 = function () {
                            };
                            return {
                                s: a2, n: function () {
                                    return r2 >= e3.length ? { done: true } : { done: false, value: e3[r2++] };
                                }, e: function (e4) {
                                    throw e4;
                                }, f: a2
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var o2, i2 = true, s2 = false;
                    return {
                        s: function () {
                            n3 = n3.call(e3);
                        }, n: function () {
                            var e4 = n3.next();
                            return i2 = e4.done, e4;
                        }, e: function (e4) {
                            s2 = true, o2 = e4;
                        }, f: function () {
                            try {
                                i2 || n3.return == null || n3.return();
                            } finally {
                                if (s2)
                                    throw o2;
                            }
                        }
                    };
                }
                function V(e3, t3) {
                    (t3 == null || t3 > e3.length) && (t3 = e3.length);
                    for (var n3 = 0, r2 = new Array(t3); n3 < t3; n3++)
                        r2[n3] = e3[n3];
                    return r2;
                }
                function Z(e3) {
                    return e3.getTracks()[0].getSettings().facingMode;
                }
                function H(e3, t3) {
                    var n3 = e3.toLowerCase();
                    return t3.some(function (e4) {
                        return n3.includes(e4);
                    });
                }
                function G(e3) {
                    return W.apply(this, arguments);
                }
                function W() {
                    return W = S(O().mark(function e3(t3) {
                        var n3, r2, a2, o2, i2, s2, l2, u2, c2, d2, f2, p2;
                        return O().wrap(function (e4) {
                            for (; ;)
                                switch (e4.prev = e4.next) {
                                    case 0:
                                        return n3 = [], r2 = [], e4.next = 4, navigator.mediaDevices.enumerateDevices();
                                    case 4:
                                        if (a2 = e4.sent, !(o2 = a2.filter(function (e5) {
                                            return e5.kind === "videoinput";
                                        })).length || !o2.every(function (e5) {
                                            return e5.label === "";
                                        })) {
                                            e4.next = 14;
                                            break;
                                        }
                                        return e4.next = 9, navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
                                    case 9:
                                        return i2 = e4.sent, e4.next = 12, navigator.mediaDevices.enumerateDevices();
                                    case 12:
                                        a2 = e4.sent, i2.getTracks().forEach(function (e5) {
                                            return e5.stop();
                                        });
                                    case 14:
                                        s2 = a2.filter(function (e5) {
                                            return e5.kind === "videoinput";
                                        }), l2 = B(s2);
                                        try {
                                            for (l2.s(); !(u2 = l2.n()).done;)
                                                H((c2 = u2.value).label, z) ? r2.push(new j(c2, P.ENVIRONMENT)) : n3.push(new j(c2, P.USER));
                                        } catch (e5) {
                                            l2.e(e5);
                                        } finally {
                                            l2.f();
                                        }
                                        if (!(n3.length > 0 || r2.length > 0)) {
                                            e4.next = 28;
                                            break;
                                        }
                                        return d2 = r2.length > 0 ? r2 : n3, t3 === P.ENVIRONMENT && r2.length > 0 && (d2 = r2), t3 === P.USER && n3.length > 0 && (d2 = n3), d2 = d2.sort(function (e5, t4) {
                                            return e5.label.localeCompare(t4.label);
                                        }), f2 = 0, p2 = d2.map(function (e5) {
                                            var t4 = RegExp(/\b([0-9]+)MP?\b/, "i").exec(e5.label);
                                            return t4 !== null ? parseInt(t4[1], 10) : NaN;
                                        }), p2.some(function (e5) {
                                            return isNaN(e5);
                                        }) || (f2 = p2.lastIndexOf(Math.max.apply(Math, b(p2)))), e4.abrupt("return", d2[f2]);
                                    case 28:
                                        return e4.abrupt("return", null);
                                    case 29:
                                    case "end":
                                        return e4.stop();
                                }
                        }, e3);
                    })), W.apply(this, arguments);
                }
                var q = n2(248);
                function K(e3) {
                    var t3, n3, r2, a2 = e3.onChangeVideoStatus, o2 = e3.forwardRef, i2 = e3.onCapture, s2 = e3.onVideoSizeChanged, l2 = e3.mode, u2 = e3.resolution, c2 = e3.mirroring, d2 = h.useRef(null), f2 = function () {
                        var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P.ENVIRONMENT, t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.VGA, n4 = y(h.useState({ status: N.REQUESTING, stream: null, facingMode: void 0 }), 2), r3 = n4[0], a3 = r3.status, o3 = r3.stream, i3 = r3.facingMode, s3 = n4[1], l3 = h.useCallback(function () {
                            return s3({ status: N.PLAY, stream: o3, facingMode: i3 });
                        }, [a3, o3, i3]);
                        return h.useEffect(function () {
                            var n5 = null;
                            function r4() {
                                return (r4 = S(O().mark(function n6() {
                                    var r5, a4;
                                    return O().wrap(function (n7) {
                                        for (; ;)
                                            switch (n7.prev = n7.next) {
                                                case 0:
                                                    if (U.info("useStream :: Requesting stream"), !navigator.mediaDevices) {
                                                        n7.next = 28;
                                                        break;
                                                    }
                                                    return n7.prev = 2, n7.next = 5, G(e4);
                                                case 5:
                                                    if ((r5 = n7.sent) !== null) {
                                                        n7.next = 8;
                                                        break;
                                                    }
                                                    return n7.abrupt("return", { status: N.NO_CAMERA, stream: null, facingMode: void 0 });
                                                case 8:
                                                    return n7.next = 10, navigator.mediaDevices.getUserMedia({ video: { height: { ideal: t4.height }, width: { ideal: t4.width }, frameRate: { max: 30 }, facingMode: { ideal: e4 }, deviceId: { exact: r5.deviceId } }, audio: false });
                                                case 10:
                                                    if (!(a4 = n7.sent)) {
                                                        n7.next = 16;
                                                        break;
                                                    }
                                                    return U.info("useStream :: Stream ready"), n7.abrupt("return", { status: N.PREPARING, stream: a4, facingMode: Z(a4) });
                                                case 16:
                                                case 25:
                                                case 28:
                                                    return n7.abrupt("return", { status: N.UNKNOWN_ERROR, stream: null, facingMode: void 0 });
                                                case 17:
                                                    n7.next = 26;
                                                    break;
                                                case 19:
                                                    if (n7.prev = 19, n7.t0 = n7.catch(2), n7.t0.name !== A) {
                                                        n7.next = 25;
                                                        break;
                                                    }
                                                    return n7.abrupt("return", { status: N.PERMISSION_DENIED, stream: null, facingMode: void 0 });
                                                case 26:
                                                    n7.next = 29;
                                                    break;
                                                case 29:
                                                case "end":
                                                    return n7.stop();
                                            }
                                    }, n6, null, [[2, 19]]);
                                }))).apply(this, arguments);
                            }
                            return function () {
                                return r4.apply(this, arguments);
                            }().then(function (e5) {
                                n5 = e5.stream, s3(e5);
                            }), function () {
                                n5 && n5.getTracks()[0].stop();
                            };
                        }, []), { status: a3, stream: o3, facingMode: i3, onPlay: l3 };
                    }(l2, u2), p2 = f2.status, m2 = f2.stream, v2 = f2.facingMode, g2 = f2.onPlay, b2 = y(h.useState([0, 0]), 2), C2 = y(b2[0], 2), _2 = C2[0], w2 = C2[1], E2 = b2[1];
                    return h.useEffect(function () {
                        if (o2 != null && o2.current)
                            return o2 == null || o2.current.addEventListener("resize", e4), function () {
                                o2 != null && o2.current && (o2 == null || o2.current.removeEventListener("resize", e4));
                            };
                        function e4() {
                            o2 != null && o2.current && (E2([o2 == null ? void 0 : o2.current.videoWidth, o2 == null ? void 0 : o2.current.videoHeight]), p2 !== N.PLAY && g2(), s2 && s2({ width: o2 == null ? void 0 : o2.current.videoWidth, height: o2 == null ? void 0 : o2.current.videoHeight, left: 0, top: 0 }));
                        }
                    }, [o2 == null ? void 0 : o2.current, p2]), h.useEffect(function () {
                        p2 === N.PREPARING && o2.current && (o2.current.srcObject = m2), a2({ status: p2, facingMode: v2 });
                    }, [p2]), t3 = function () {
                        var e4, t4, n4;
                        if (o2 != null && o2.current && d2 != null && d2.current) {
                            var r3 = o2 == null ? void 0 : o2.current, a3 = r3.videoHeight, s3 = r3.videoWidth;
                            (e4 = d2.current.getContext("2d")) === null || e4 === void 0 || e4.drawImage(o2 == null ? void 0 : o2.current, 0, 0);
                            var l3 = s3 && ((t4 = d2.current.getContext("2d")) === null || t4 === void 0 ? void 0 : t4.getImageData(0, 0, s3, a3).data) || new Uint8ClampedArray(), u3 = "image/jpeg", c3 = (n4 = d2.current) === null || n4 === void 0 ? void 0 : n4.toDataURL(u3, 0.8).replace("data:".concat(u3, ";base64,"), "");
                            i2({ capture: l3, raw: c3, mimeType: u3 });
                        }
                    }, n3 = 30, r2 = h.useRef(null), h.useEffect(function () {
                        n3 !== null && (r2.current = t3);
                    }), h.useEffect(function () {
                        if (n3 !== null) {
                            var e4 = setInterval(function () {
                                r2.current !== null && r2.current();
                            }, n3);
                            return function () {
                                return clearInterval(e4);
                            };
                        }
                    }, [n3]), h.createElement("div", { className: q.Z.locals.container }, h.createElement("video", { className: c2 || v2 === "environment" ? q.Z.locals.mirroring : "", ref: o2, autoPlay: true, playsInline: true }), h.createElement("canvas", { ref: d2, width: _2, height: w2 }));
                }
                const J = h.memo(K);
                function Y() {
                    return Y = Object.assign || function (e3) {
                        for (var t3 = 1; t3 < arguments.length; t3++) {
                            var n3 = arguments[t3];
                            for (var r2 in n3)
                                Object.prototype.hasOwnProperty.call(n3, r2) && (e3[r2] = n3[r2]);
                        }
                        return e3;
                    }, Y.apply(this, arguments);
                }
                function Q(e3, t3, n3) {
                    return t3 in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
                }
                var X = n2(1);
                function $(e3) {
                    var t3 = e3.primary, n3 = e3.children, r2 = X.Z.locals, a2 = r2.container, o2 = r2.primary;
                    return h.createElement("div", { className: "".concat(a2, " ").concat(t3 && o2) }, h.createElement("span", null, n3));
                }
                const ee = h.memo($);
                var te, ne = n2(305), re = n2(412), ae = h.createContext({}), oe = n2(518);
                function ie() {
                    var e3 = y(h.useState(function () {
                        var e4 = window.matchMedia("(orientation: landscape)").matches ? te.landscape : te.portrait;
                        return { isPortrait: e4 === te.portrait, isLandscape: e4 === te.landscape, orientation: e4 };
                    }), 2), t3 = e3[0], n3 = e3[1], r2 = h.useCallback(function () {
                        var e4 = window.matchMedia("(orientation: landscape)").matches ? te.landscape : te.portrait, r3 = { isPortrait: e4 === te.portrait, isLandscape: e4 === te.landscape, orientation: e4 };
                        t3.orientation !== r3.orientation && n3(r3);
                    }, [t3.orientation]);
                    return h.useEffect(function () {
                        return (typeof window == "undefined" ? "undefined" : l(window)) !== void 0 && (r2(), window.addEventListener("load", r2, false), window.addEventListener("resize", r2, false)), function () {
                            window.removeEventListener("load", r2, false), window.removeEventListener("resize", r2, false);
                        };
                    }, [r2]), t3;
                }
                function se(e3) {
                    var t3, n3, r2 = e3.scale, a2 = e3.videoStatus, o2 = e3.onFrameResize, i2 = e3.message, s2 = e3.messageStyle, l2 = e3.prepared, u2 = h.useRef(null), c2 = h.useRef(null), d2 = h.useRef(null), f2 = function (e4, t4) {
                        var n4 = y(h.useState(e4), 2), r3 = n4[0], a3 = n4[1], o3 = y(h.useState(false), 2), i3 = o3[0], s3 = o3[1];
                        return h.useEffect(function () {
                            !i3 && e4 && a3(e4);
                        }), h.useEffect(function () {
                            s3(true);
                            var e5 = setTimeout(function () {
                                s3(false);
                            }, t4);
                            return function () {
                                clearTimeout(e5);
                            };
                        }, [r3]), r3;
                    }(i2, 100), p2 = f2 === _.eFL_Message_HoldStill, m2 = h.useContext(ae).ovalOffset, v2 = m2 === void 0 ? 0 : m2, g2 = ne.Z.locals, b2 = g2.container, C2 = g2.backgroundSvg, S2 = g2.hide, w2 = g2.done, L2 = g2.secondaryMessage, k2 = g2.pulseAndScale, R2 = g2.centreMessage, x2 = (0, re.useLocalize)().translate, D2 = ie().isLandscape, T2 = y(h.useState({ viewBoxWidth: 0, viewBoxHeight: 0, BGFrameX: 0, BGFrameY: 0, BGFrameWidth: 0, BGFrameHeight: 0, RX: 0, RY: 0, clipX: 0, clipY: 0, clipWidth: 0, frameX: 0, frameY: 0, scaledFrameWidth: 0, scaledFrameHeight: 0, steadyStrokeWidth: 0, strokeWidth: 0 }), 2), P2 = T2[0], M2 = T2[1];
                    h.useEffect(function () {
                        if (d2.current) {
                            var e4 = d2.current.clientWidth, t4 = d2.current.clientHeight, n4 = t4 / 100, a3 = 0.5 * n4, o3 = 70 * n4, i3 = 70 * n4, s3 = 10 * n4, l3 = (e4 - s3) / 2, u3 = (t4 - s3) / 2, c3 = oe.tq ? oe.Em && D2 ? o3 : i3 : o3, f3 = c3 / 1.4 * r2, p3 = c3 * r2, h2 = f3 - 2 * n4, m3 = p3 - 2 * n4;
                            M2({ viewBoxWidth: e4, viewBoxHeight: t4, BGFrameX: (e4 - h2) / 2, BGFrameY: (t4 - m3) / 2, BGFrameWidth: h2, BGFrameHeight: m3, RX: f3 / 2, RY: f3 / 2, clipX: l3, clipY: u3, clipWidth: s3, frameX: (e4 - f3) / 2, frameY: (t4 - p3) / 2, scaledFrameWidth: f3, scaledFrameHeight: p3, steadyStrokeWidth: 1.5 * a3, strokeWidth: a3 });
                        }
                    }, [r2]), h.useEffect(function () {
                        if (u2.current && c2.current) {
                            var e4 = u2.current.getBoundingClientRect(), t4 = e4.left, n4 = e4.top, r3 = c2.current.getBoundingClientRect(), a3 = r3.width, i3 = r3.height, s3 = r3.left, l3 = r3.top;
                            o2({ width: a3, height: i3, left: s3 - t4, top: l3 - n4 });
                        }
                    }, [P2]);
                    var O2, I2 = (Q(t3 = {}, N.PREPARING, x2("strPrepareCamera")), Q(t3, N.REQUESTING, x2("faceLivenessCameraLayoutVideoStatusMessagesRequesting")), Q(t3, N.UNKNOWN_ERROR, x2("messageUnknownError")), t3), A2 = (Q(n3 = {}, _.eFL_Message_LookStraight, x2("hint_lookStraight")), Q(n3, _.eFL_Message_FitFaceIntoOval, x2("hint_fit")), Q(n3, _.eFL_Message_MoveCloser, x2("hint_moveCloser")), Q(n3, _.eFL_Message_MoveAway, x2("hint_moveAway")), Q(n3, _.eFL_Message_HoldStill, x2("hint_stayStill")), Q(n3, _.eFL_Message_Empty, x2("faceLivenessCameraLayoutMessageLabelsDetecting")), n3);
                    return h.createElement("div", { ref: d2, className: b2 }, h.createElement("svg", { className: C2, ref: u2, xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid slice", viewBox: "0 0 ".concat(P2.viewBoxWidth, " ").concat(P2.viewBoxHeight) }, h.createElement("defs", null, h.createElement("mask", { id: "bgClip" }, h.createElement("rect", { x: "0", y: "0", width: P2.viewBoxWidth, height: P2.viewBoxHeight, fill: "#fff" }), h.createElement("rect", { x: P2.BGFrameX, y: oe.tq ? P2.BGFrameY + v2 : P2.BGFrameY, width: P2.BGFrameWidth, height: P2.BGFrameHeight, rx: P2.RX, ry: P2.RY })), h.createElement("mask", { id: "ovalClip" }, h.createElement("rect", { x: "0", y: "0", width: P2.viewBoxWidth, height: P2.viewBoxHeight, fill: "#fff" }), h.createElement("rect", { x: P2.clipX, y: "0", width: P2.clipWidth, height: P2.viewBoxHeight }), h.createElement("rect", { x: "0", y: oe.tq ? P2.clipY + v2 : P2.clipY, width: P2.viewBoxWidth, height: P2.clipWidth }))), h.createElement("rect", Y({}, l2 ? { mask: "url(#bgClip)" } : {}, { x: "0", y: "0", width: P2.viewBoxWidth, height: P2.viewBoxHeight, fill: "white" })), h.createElement("rect", Y({ ref: c2 }, p2 ? {} : { mask: "url(#ovalClip)" }, { className: "".concat(p2 ? w2 : "", " ").concat(l2 ? "" : S2), x: P2.frameX, y: oe.tq ? P2.frameY + v2 : P2.frameY, width: P2.scaledFrameWidth, height: P2.scaledFrameHeight, rx: P2.RX, ry: P2.RY, fill: "none", stroke: "#663399", strokeWidth: P2.steadyStrokeWidth }))), h.createElement("div", { className: "".concat(L2, " ").concat(s2 === E.eFL_MessageStyle_Alarm ? k2 : "", " ").concat(l2 ? "" : R2) }, h.createElement(ee, null, l2 ? a2 === N.PLAY ? (O2 = f2) ? A2[O2] : "" : I2[a2] : x2("faceLivenessCameraLayoutPreparingService"))));
                }
                !function (e3) {
                    e3.portrait = "portrait", e3.landscape = "landscape";
                }(te || (te = {}));
                const le = h.memo(se);
                var ue = n2(672);
                const ce = function () {
                    function e3() {
                        r(this, e3), this.callbacks = {};
                    }
                    return o(e3, [{
                        key: "on", value: function (e4, t3) {
                            this.callbacks[e4] || (this.callbacks[e4] = []), this.callbacks[e4].push(t3);
                        }
                    }, {
                        key: "emit", value: function (e4, t3) {
                            this.callbacks[e4] && this.callbacks[e4].forEach(function (e5) {
                                return e5(t3);
                            });
                        }
                    }, {
                        key: "unsubscribe", value: function (e4, t3) {
                            this.callbacks[e4] = this.callbacks[e4].filter(function (e5) {
                                return t3 !== e5;
                            });
                        }
                    }, {
                        key: "unsubscribeAll", value: function () {
                            this.callbacks = {};
                        }
                    }]), e3;
                }();
                function de(e3, t3) {
                    var n3 = Object.keys(e3);
                    if (Object.getOwnPropertySymbols) {
                        var r2 = Object.getOwnPropertySymbols(e3);
                        t3 && (r2 = r2.filter(function (t4) {
                            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                        })), n3.push.apply(n3, r2);
                    }
                    return n3;
                }
                var fe, pe, he = "message";
                !function (e3) {
                    e3.stdout = "stdout", e3.stderr = "stderr", e3.custom = "custom";
                }(fe || (fe = {})), function (e3) {
                    e3.onRuntimeInitialized = "onRuntimeInitialized", e3.processImage = "processImage", e3.process = "process", e3.startNewPage = "startNewPage", e3.initializeService = "initializeService";
                }(pe || (pe = {}));
                var me = function () {
                    function e3() {
                        r(this, e3), Q(this, "initialized", false), Q(this, "processing", false), Q(this, "prepared", false), Q(this, "params", { width: 0, height: 0 }), Q(this, "eventEmitter", new ce()), this.worker = null;
                    }
                    var t3;
                    return o(e3, [{
                        key: "prepare", value: (t3 = S(O().mark(function e4(t4) {
                            var r2, a2, o2, i2, s2, l2 = this;
                            return O().wrap(function (e5) {
                                for (; ;)
                                    switch (e5.prev = e5.next) {
                                        case 0:
                                            return e5.prev = 1, U.info("FaceLivenessService :: Download worker (PROD mode)..."), e5.next = 5, fetch("https://wasm.regulaforensics.com/face/release/5.9/LivenessProcessor.worker.js");
                                        case 5:
                                            return r2 = e5.sent, a2 = new Response(r2.body), e5.next = 9, a2.blob();
                                        case 9:
                                            o2 = e5.sent, i2 = URL.createObjectURL(o2), this.worker = new Worker(i2), U.info("FaceLivenessService :: Worker uploaded and created (PROD mode)"), e5.next = 19;
                                            break;
                                        case 15:
                                            e5.prev = 15, e5.t0 = e5.catch(1), U.error("FaceLivenessService :: Worker error ".concat(e5.t0)), console.log(e5.t0);
                                        case 19:
                                            e5.next = 25;
                                            break;
                                        case 21:
                                            U.info("FaceLivenessService :: Connecting worker (DEV mode)..."), s2 = n2(915), this.worker = new s2.default(), U.info("FaceLivenessService :: Worker connected (DEV mode)");
                                        case 25:
                                            this.eventEmitter.on(he, t4), this.worker && (this.worker.onmessage = function (e6) {
                                                return l2.onWorkerMessage(e6);
                                            }, this.worker.postMessage({ target: "gl", op: "setPrefetched", preMain: true }), this.worker.postMessage({ target: "worker-init", URL: document.URL, currentScriptUrl: "https://wasm.regulaforensics.com/face/release/5.9/LivenessProcessor.worker.js", preMain: true })), U.info("FaceLivenessService :: Worker prepared");
                                        case 28:
                                        case "end":
                                            return e5.stop();
                                    }
                            }, e4, this, [[1, 15]]);
                        })), function (e4) {
                            return t3.apply(this, arguments);
                        })
                    }, {
                        key: "initialize", value: function (e4) {
                            U.info("FaceLivenessService :: initialize start"), this.params = e4, this.postCustomMessage(function (e5) {
                                for (var t4 = 1; t4 < arguments.length; t4++) {
                                    var n3 = arguments[t4] != null ? arguments[t4] : {};
                                    t4 % 2 ? de(Object(n3), true).forEach(function (t5) {
                                        Q(e5, t5, n3[t5]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(n3)) : de(Object(n3)).forEach(function (t5) {
                                        Object.defineProperty(e5, t5, Object.getOwnPropertyDescriptor(n3, t5));
                                    });
                                }
                                return e5;
                            }({ event: pe.initializeService }, this.params), true), U.info("FaceLivenessService :: initialize end");
                        }
                    }, {
                        key: "postCustomMessage", value: function (e4, t4) {
                            U.info("FaceLivenessService :: postCustomMessage"), this.worker && this.worker.postMessage({ target: "custom", userData: e4, preMain: t4 });
                        }
                    }, {
                        key: "emit", value: function (e4) {
                            U.info("FaceLivenessService :: emit"), this.eventEmitter.emit(he, { initialized: this.initialized, prepared: this.prepared, data: e4 });
                        }
                    }, {
                        key: "print", value: function (e4) {
                            console.log(e4);
                        }
                    }, {
                        key: "printErr", value: function (e4) {
                            console.log(e4);
                        }
                    }, {
                        key: "onWorkerMessage", value: function (e4) {
                            var t4 = e4.data;
                            switch (t4.target) {
                                case "stdout":
                                    this.print(t4.content);
                                    break;
                                case "stderr":
                                    this.printErr(t4.content);
                                    break;
                                case "custom":
                                    e4.data.method === "onRuntimeInitialized" ? (U.info("FaceLivenessService :: onWorkerMessage -> custom -> onRuntimeInitialized"), this.prepared = true) : e4.data.method === "initializeService" ? (U.info("FaceLivenessService :: onWorkerMessage -> custom -> initializeService"), this.initialized = true) : this.processing = false, this.emit(t4.data);
                                    break;
                                default:
                                    throw "what? " + t4.target;
                            }
                        }
                    }, {
                        key: "shutdown", value: function () {
                            this.worker && (this.worker.terminate(), this.eventEmitter.unsubscribeAll()), U.info("FaceLivenessService :: shutdown");
                        }
                    }, {
                        key: "processImage", value: function (e4) {
                            var t4 = e4.capture, n3 = e4.frame;
                            t4 && (U.info("FaceLivenessService :: processImage start"), this.postCustomMessage({ event: pe.processImage, imageUInt8Array: t4, oval: { x: Math.round(n3.left), y: Math.round(n3.top), width: Math.round(n3.width), height: Math.round(n3.height) } }, true), U.info("FaceLivenessService :: processImage end"));
                        }
                    }]), e3;
                }();
                const ve = me, ge = function () {
                    var e3 = y(h.useState({ appCodeName: "", appName: "", appVersion: "", language: "", languages: [], platform: "", product: "", productSub: "", userAgent: "", vendor: "", vendorSub: "" }), 2), t3 = e3[0], n3 = e3[1];
                    return h.useEffect(function () {
                        if (window.navigator) {
                            var e4 = window.navigator, t4 = e4.appCodeName, r2 = e4.appName, a2 = e4.appVersion, o2 = e4.language, i2 = e4.languages, s2 = e4.platform, l2 = e4.product, u2 = e4.productSub, c2 = e4.userAgent, d2 = e4.vendor, f2 = e4.vendorSub;
                            n3({ appCodeName: t4, appName: r2, appVersion: a2, language: o2, languages: i2, platform: s2, product: l2, productSub: u2, userAgent: c2, vendor: d2, vendorSub: f2 });
                        }
                    }, []), t3;
                };
                function ye(e3, t3) {
                    var n3 = Object.keys(e3);
                    if (Object.getOwnPropertySymbols) {
                        var r2 = Object.getOwnPropertySymbols(e3);
                        t3 && (r2 = r2.filter(function (t4) {
                            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                        })), n3.push.apply(n3, r2);
                    }
                    return n3;
                }
                function be(e3) {
                    for (var t3 = 1; t3 < arguments.length; t3++) {
                        var n3 = arguments[t3] != null ? arguments[t3] : {};
                        t3 % 2 ? ye(Object(n3), true).forEach(function (t4) {
                            Q(e3, t4, n3[t4]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : ye(Object(n3)).forEach(function (t4) {
                            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
                        });
                    }
                    return e3;
                }
                function Ce(e3, t3, n3, r2, a2, o2, i2, s2) {
                    var l2, u2 = arguments.length > 8 && arguments[8] !== void 0 && arguments[8], c2 = a2 / o2, d2 = i2 / s2, f2 = (o2 / (l2 = d2 > c2 ? a2 / i2 : o2 / s2) - s2) / 2, p2 = (a2 / l2 - i2) / 2;
                    if (u2)
                        return { width: e3 / l2, height: t3 / l2, left: n3 / l2 - p2, top: r2 / l2 - f2 };
                    var h2 = e3 * l2, m2 = t3 * l2, v2 = (n3 + p2) * l2, g2 = (r2 + f2) * l2;
                    if (v2 < 0 && (h2 = h2 - Math.abs(2 * v2) - 2, v2 = 1), g2 < 0 && (m2 -= Math.abs(g2), g2 = 1, m2 > o2)) {
                        var y2 = m2 - o2;
                        m2 = m2 - y2 - 2;
                    }
                    if (g2 > 0 && g2 + m2 > o2) {
                        var b2 = g2 + m2 - o2;
                        m2 = m2 - b2 - 1;
                    }
                    return { width: h2, height: m2, left: v2, top: g2 };
                }
                const Se = function (e3) {
                    var t3 = e3.onCapture, n3 = e3.debug, r2 = e3.scale, a2 = e3.onChangeVideoStatus, o2 = e3.videoStatus, i2 = e3.onComplitionFailed, s2 = h.useContext(ae).mode, l2 = h.useRef(null), u2 = h.useRef(null), c2 = y(function (e4, t4) {
                        var n4 = y(h.useState({ height: 0, width: 0 }), 2), r3 = n4[0], a3 = r3.height, o3 = r3.width, i3 = n4[1];
                        return h.useEffect(function () {
                            e4 != null && e4.current && i3({ height: e4.current.clientHeight, width: e4.current.clientWidth });
                        }, [t4]), [o3, a3];
                    }(u2, o2), 2), d2 = c2[0], f2 = c2[1], p2 = y(h.useState({ width: 0, height: 0, left: 0, top: 0 }), 2), m2 = p2[0], v2 = p2[1], g2 = y(h.useState({ width: 0, height: 0, left: 0, top: 0 }), 2), b2 = g2[0], C2 = g2[1], k2 = y(h.useState({ width: 0, height: 0, left: 0, top: 0 }), 2), R2 = k2[0], x2 = k2[1], D2 = y(h.useState({ capture: new Uint8ClampedArray(), raw: "" }), 2), T2 = D2[0], M2 = T2.capture, I2 = T2.raw, A2 = D2[1], z2 = function (e4) {
                        var t4 = e4.capture, n4 = e4.frame, r3 = e4.window, a3 = e4.debug, o3 = e4.mode, i3 = h.useRef(false), s3 = ge(), l3 = h.useMemo(function () {
                            return new ve();
                        }, []), u3 = y(h.useState({ initialized: false, message: _.eFL_Message_Empty, messageStyle: E.eFL_MessageStyle_Normal, prepared: false, processingStage: w.eFL_ProcessingStage_Far, status: L.eFL_Status_InProcess, request: null, requestSize: null, debugOutput: {}, images: [] }), 2), c3 = u3[0], d3 = u3[1], f3 = h.useCallback(function () {
                            var e5 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t5 = e5.data, n5 = e5.initialized, r4 = e5.prepared;
                            U.info("useFaceLiveness :: Worker listener response"), i3.current = false, d3(be(be({}, c3), {}, { initialized: n5, prepared: r4 }, t5));
                        }, []);
                        return h.useEffect(function () {
                            function e5() {
                                return (e5 = S(O().mark(function e6() {
                                    var t5;
                                    return O().wrap(function (e7) {
                                        for (; ;)
                                            switch (e7.prev = e7.next) {
                                                case 0:
                                                    if (c3.initialized || !c3.prepared || !r3.width || !r3.height) {
                                                        e7.next = 6;
                                                        break;
                                                    }
                                                    return U.info("useFaceLiveness :: Start initializing service"), t5 = { version: "1.1.0".trim(), userAgent: s3 }, e7.next = 5, l3.initialize({ width: r3.width, height: r3.height, metadata: typeof o3 == "number" ? be(be({}, t5), {}, { mode: o3 }) : be({}, t5), debug: a3 });
                                                case 5:
                                                    U.info("useFaceLiveness :: Service initialized");
                                                case 6:
                                                    if (c3.prepared) {
                                                        e7.next = 11;
                                                        break;
                                                    }
                                                    return U.info("useFaceLiveness :: Start preparing service"), e7.next = 10, l3.prepare(f3);
                                                case 10:
                                                    U.info("useFaceLiveness :: Service prepared");
                                                case 11:
                                                case "end":
                                                    return e7.stop();
                                            }
                                    }, e6);
                                }))).apply(this, arguments);
                            }
                            !function () {
                                e5.apply(this, arguments);
                            }();
                        }, [c3.prepared, c3.initialized, r3.width, r3.height, a3]), h.useEffect(function () {
                            c3.initialized && t4 != null && t4.length && !i3.current && n4.width && n4.height && c3.prepared && (U.info("useFaceLiveness :: Processing image..."), i3.current = true, l3.processImage({ capture: t4, frame: n4 }));
                        }, [c3.initialized, c3.prepared, i3, t4, n4]), h.useEffect(function () {
                            return function () {
                                l3.shutdown();
                            };
                        }, []), c3;
                    }({ capture: M2, frame: R2, window: m2, scale: r2, debug: n3, mode: s2 }), j2 = z2.message, B2 = z2.messageStyle, V2 = z2.status, Z2 = z2.processingStage, H2 = z2.request, G2 = z2.debugOutput, W2 = z2.prepared, q2 = z2.images, K2 = h.useCallback(function (e4) {
                        v2(e4);
                    }, []), Y2 = h.useCallback(function (e4) {
                        return A2(e4);
                    }, []), Q2 = h.useCallback(function (e4) {
                        return C2(e4);
                    }, []);
                    return function (e4, t4) {
                        h.useEffect(function () {
                            function n4() {
                                t4 ? t4() : location.reload();
                            }
                            if (e4 === N.PLAY)
                                return window.focus(), window.addEventListener("blur", n4), function () {
                                    window.removeEventListener("blur", n4);
                                };
                        }, [e4]);
                    }(o2, i2), h.useEffect(function () {
                        t3({ status: V2, processingStage: Z2, request: H2, raw: I2 ? [I2] : [], images: q2 });
                    }, [V2, Z2]), h.useEffect(function () {
                        if (u2.current && u2.current.videoHeight > 0) {
                            var e4 = Ce(b2.width, b2.height, b2.left, b2.top, m2.width, m2.height, d2, f2);
                            x2(e4);
                        }
                    }, [m2, f2, b2]), h.useEffect(function () {
                        if (n3 && l2.current && G2.face) {
                            var e4 = Ce(G2.face.width, G2.face.height, G2.face.x, G2.face.y, m2.width, m2.height, d2, f2, n3), t4 = e4.width, r3 = e4.height, a3 = e4.left, o3 = e4.top, i3 = l2.current.getContext("2d");
                            i3 && (i3.clearRect(0, 0, d2, f2), i3.beginPath(), i3.rect(a3, o3, t4, r3), i3.strokeStyle = "rebeccapurple", i3.stroke());
                        }
                    }, [l2, G2, d2, f2, m2]), h.createElement("div", { className: ue.Z.locals.container }, W2 && h.createElement(J, { forwardRef: u2, onChangeVideoStatus: a2, onCapture: Y2, onVideoSizeChanged: K2, mode: P.USER, resolution: F.HD }), h.createElement(le, { onFrameResize: Q2, scale: r2, videoStatus: o2, message: j2, prepared: W2, messageStyle: B2 }), n3 && h.createElement("canvas", { ref: l2, className: ue.Z.locals["debug-canvas"], width: d2, height: f2 }));
                }, _e = function (e3) {
                    var t3 = e3.size;
                    return h.createElement("svg", { width: t3 ? 1.4 * t3 : 163, height: t3 || 114, viewBox: "0 0 163 114", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 26C20.1797 26 26 20.1797 26 13H150C151.657 13 153 14.3431 153 16V110C153 111.657 151.657 113 150 113H16C14.3431 113 13 111.657 13 110V26Z", fill: "#7E53B9", fillOpacity: "0.15" }), h.createElement("path", { d: "M74 96L72.5 102.5L64 105L45.5 109L44 113H122L119.5 109L98.5 104.5L92 99.5V96L85 98H81L74 96Z", fill: "white" }), h.createElement("path", { d: "M102.411 66.2723C108.688 52.1741 102.865 39.2848 92.3275 41.6143C74.3598 30.5453 54.914 46.648 62.0163 66.2719C58.2803 66.2719 60.1383 85.2526 64.3048 81.1084C66.5057 86.3691 67.8517 91.8727 73.4374 95.1223C74.2007 95.5664 76.268 97.5 83.0002 97.5C89.6002 97.5 91.4186 95.7575 92.167 95.3267C92.2766 95.2635 92.3846 95.1995 92.4909 95.1347C97.6962 91.9599 99.0059 86.7313 101.12 81.7291C103.9 84.6665 105 77.0833 105 76C105.495 71.7832 105 65 102.411 66.2723Z", fill: "white" }), h.createElement("path", { d: "M92.3275 41.6143L91.803 42.4658C92.0241 42.602 92.2897 42.6468 92.5433 42.5908L92.3275 41.6143ZM102.411 66.2723L101.497 65.8656C101.326 66.2501 101.414 66.7007 101.717 66.9927C102.02 67.2846 102.474 67.3555 102.852 67.1698L102.411 66.2723ZM64.3048 81.1084L65.2274 80.7224C65.0989 80.4154 64.826 80.1923 64.4995 80.1275C64.173 80.0627 63.8357 80.1646 63.5996 80.3994L64.3048 81.1084ZM62.0163 66.2719V67.2719C62.3422 67.2719 62.6477 67.1131 62.8349 66.8463C63.0221 66.5794 63.0675 66.2381 62.9566 65.9316L62.0163 66.2719ZM73.4374 95.1223L73.9402 94.2579H73.9402L73.4374 95.1223ZM105 76L104.007 75.8834C104.002 75.9221 104 75.961 104 76L105 76ZM101.12 81.7291L101.847 81.0417C101.615 80.7965 101.274 80.685 100.942 80.7451C100.61 80.8052 100.331 81.0288 100.199 81.3398L101.12 81.7291ZM92.167 95.3267L91.668 94.46L91.668 94.46L92.167 95.3267ZM93.297 95.7263C93.6306 95.2861 93.5441 94.6589 93.104 94.3253C92.6638 93.9917 92.0366 94.0782 91.703 94.5183L93.297 95.7263ZM94.4374 102L93.8234 102.789L94.4374 102ZM113.437 107.5L113.654 106.524L113.437 107.5ZM74.0701 94.5179C73.7362 94.0779 73.109 93.9918 72.669 94.3257C72.229 94.6595 72.1429 95.2868 72.4767 95.7267L74.0701 94.5179ZM71.336 102L70.7221 101.211L71.336 102ZM52.336 107.5L52.1191 106.524L52.336 107.5ZM92.5433 42.5908C94.9573 42.0571 97.0403 42.403 98.7357 43.3704C100.441 44.3435 101.829 45.989 102.754 48.173C104.61 52.5536 104.551 59.0061 101.497 65.8656L103.324 66.6791C106.547 59.4403 106.716 52.399 104.595 47.3929C103.532 44.8834 101.881 42.8622 99.7268 41.6333C97.5629 40.3985 94.9664 40.0068 92.1116 40.6379L92.5433 42.5908ZM63.5996 80.3994C63.4092 80.5888 63.2761 80.6606 63.207 80.6859C63.1519 80.7061 63.1338 80.6997 63.1237 80.6969C63.0617 80.6798 62.835 80.5584 62.5267 80.0327C61.9301 79.0153 61.4439 77.1959 61.1897 75.1225C60.9384 73.0735 60.9323 70.9313 61.1982 69.3375C61.3326 68.5316 61.5244 67.9433 61.7344 67.584C61.8365 67.4093 61.9206 67.3277 61.967 67.2941C62.0014 67.2691 62.0105 67.2719 62.0163 67.2719V65.2719C61.0466 65.2719 60.3962 65.9101 60.0077 66.5748C59.6205 67.2373 59.3771 68.0995 59.2255 69.0084C58.9192 70.8439 58.9375 73.1878 59.2045 75.366C59.4686 77.5198 59.9946 79.6685 60.8015 81.0444C61.195 81.7153 61.7678 82.3969 62.5903 82.6245C63.5086 82.8786 64.3471 82.4768 65.0101 81.8174L63.5996 80.3994ZM73.9402 94.2579C68.7236 91.223 67.5081 86.1742 65.2274 80.7224L63.3823 81.4943C65.5033 86.5641 66.9798 92.5224 72.9345 95.9867L73.9402 94.2579ZM62.9566 65.9316C59.5469 56.5105 62.5192 48.0279 68.4044 43.2068C74.2866 38.3882 83.174 37.1499 91.803 42.4658L92.852 40.7629C83.5133 35.0098 73.694 36.2882 67.137 41.6597C60.5828 47.0287 57.3834 56.4094 61.076 66.6123L62.9566 65.9316ZM83.0002 96.5C79.7307 96.5 77.6516 96.0307 76.3281 95.54C74.9807 95.0406 74.4532 94.5564 73.9402 94.2579L72.9345 95.9867C73.1849 96.1323 74.0727 96.837 75.6329 97.4153C77.2169 98.0025 79.5375 98.5 83.0002 98.5V96.5ZM102.852 67.1698C102.932 67.1303 102.981 67.1198 103.002 67.117C103.013 67.1156 103.018 67.1159 103.019 67.116C103.02 67.116 103.02 67.1161 103.02 67.116C103.02 67.116 103.02 67.116 103.019 67.116C103.019 67.116 103.019 67.116 103.019 67.116C103.019 67.116 103.019 67.1159 103.019 67.1159C103.019 67.1159 103.019 67.116 103.019 67.116C103.019 67.116 103.02 67.116 103.02 67.116C103.02 67.1161 103.02 67.1162 103.021 67.1164C103.022 67.1168 103.024 67.1176 103.026 67.119C103.032 67.1217 103.042 67.1272 103.056 67.1377C103.084 67.1593 103.129 67.2001 103.185 67.2728C103.438 67.6008 103.693 68.2655 103.879 69.2614C104.242 71.2019 104.246 73.847 104.007 75.8834L105.993 76.1166C106.249 73.9362 106.254 71.0813 105.845 68.8941C105.646 67.8261 105.322 66.77 104.769 66.0522C104.481 65.6776 104.083 65.3349 103.552 65.1882C103.007 65.0376 102.463 65.1324 101.97 65.3748L102.852 67.1698ZM100.394 82.4165C100.816 82.8623 101.298 83.2091 101.85 83.3427C102.44 83.4854 102.987 83.3552 103.437 83.0688C103.857 82.8011 104.175 82.4104 104.417 82.0233C104.664 81.6283 104.869 81.1777 105.039 80.7227C105.379 79.8133 105.617 78.7913 105.769 77.9417C105.919 77.1072 106 76.3607 106 76L104 76C104 76.1809 103.944 76.7885 103.801 77.5888C103.66 78.374 103.448 79.2673 103.166 80.0219C103.025 80.399 102.875 80.7175 102.722 80.9624C102.564 81.2152 102.436 81.3351 102.362 81.3821C102.317 81.4106 102.323 81.3993 102.32 81.3988C102.28 81.3891 102.12 81.3302 101.847 81.0417L100.394 82.4165ZM92.666 96.1933C92.7829 96.126 92.8981 96.0577 93.0117 95.9884L91.9702 94.2809C91.8711 94.3414 91.7704 94.4011 91.668 94.46L92.666 96.1933ZM93.0117 95.9884C98.5678 92.5996 100.007 86.9322 102.041 82.1184L100.199 81.3398C98.0051 86.5305 96.8247 91.3201 91.9702 94.2809L93.0117 95.9884ZM83.0002 98.5C86.3871 98.5 88.6096 98.053 90.1137 97.5169C91.5993 96.9873 92.4234 96.333 92.666 96.1933L91.668 94.46C91.1623 94.7512 90.7029 95.1836 89.4422 95.633C88.1999 96.0758 86.2132 96.5 83.0002 96.5V98.5ZM92.5 95.1223C91.703 94.5183 91.703 94.5184 91.703 94.5184C91.703 94.5184 91.7029 94.5184 91.7029 94.5184C91.7029 94.5184 91.7029 94.5185 91.7029 94.5185C91.7028 94.5185 91.7028 94.5186 91.7028 94.5186C91.7027 94.5187 91.7026 94.5188 91.7025 94.5189C91.7024 94.5191 91.7022 94.5193 91.7021 94.5195C91.7018 94.52 91.7014 94.5204 91.7011 94.5209C91.7004 94.5218 91.6997 94.5227 91.6989 94.5238C91.6973 94.5259 91.6956 94.5282 91.6936 94.5308C91.6898 94.5361 91.6851 94.5425 91.6798 94.5499L93.3021 95.7194C93.3027 95.7187 93.3026 95.7189 93.3017 95.72C93.3013 95.7206 93.3007 95.7214 93.2999 95.7224C93.2995 95.7229 93.2991 95.7235 93.2986 95.7242C93.2984 95.7245 93.2981 95.7248 93.2978 95.7252C93.2977 95.7254 93.2976 95.7255 93.2974 95.7257C93.2974 95.7258 93.2973 95.7259 93.2972 95.726C93.2972 95.726 93.2971 95.7261 93.2971 95.7261C93.2971 95.7262 93.2971 95.7262 93.2971 95.7262C93.2971 95.7262 93.297 95.7262 93.297 95.7262C93.297 95.7263 93.297 95.7263 92.5 95.1223ZM91.6797 94.5499C91.5472 94.7338 90.8195 95.8021 90.7755 97.3569C90.7294 98.9843 91.4369 100.933 93.8234 102.789L95.0513 101.211C93.0959 99.6897 92.7491 98.3184 92.7747 97.4136C92.8024 96.4363 93.2725 95.7605 93.3021 95.7194L91.6797 94.5499ZM93.8234 102.789C96.2419 104.67 98.9072 105.587 102.031 106.288C103.587 106.638 105.283 106.939 107.126 107.273C108.976 107.609 110.991 107.981 113.22 108.476L113.654 106.524C111.384 106.019 109.336 105.641 107.483 105.305C105.623 104.968 103.975 104.675 102.469 104.337C99.4675 103.663 97.1329 102.83 95.0513 101.211L93.8234 102.789ZM113.22 108.476C114.74 108.814 116.658 109.527 118.24 110.446C119.03 110.905 119.703 111.397 120.196 111.892C120.698 112.396 120.948 112.839 121.019 113.196L122.981 112.804C122.802 111.911 122.261 111.131 121.614 110.482C120.96 109.824 120.129 109.231 119.245 108.717C117.478 107.69 115.365 106.904 113.654 106.524L113.22 108.476ZM73.2734 95.1223C72.4767 95.7267 72.4764 95.7262 72.476 95.7257C72.4759 95.7256 72.4755 95.7251 72.4753 95.7248C72.4748 95.7242 72.4744 95.7236 72.474 95.7231C72.4733 95.7221 72.4727 95.7213 72.4722 95.7207C72.4712 95.7194 72.4709 95.7189 72.471 95.7191C72.4714 95.7196 72.4739 95.723 72.4782 95.7293C72.4868 95.7418 72.5028 95.7656 72.524 95.7999C72.5665 95.8687 72.6287 95.9777 72.6942 96.1209C72.8262 96.4094 72.9642 96.8198 72.9941 97.3095C73.0497 98.2218 72.745 99.6372 70.7221 101.211L71.95 102.789C74.427 100.863 75.0911 98.8393 74.9904 97.1878C74.9421 96.3956 74.7206 95.7428 74.5128 95.2886C74.4084 95.0605 74.3055 94.8783 74.2255 94.7487C74.1853 94.6837 74.1507 94.6316 74.124 94.5929C74.1107 94.5736 74.0993 94.5576 74.0902 94.5451C74.0856 94.5388 74.0817 94.5334 74.0783 94.5289C74.0766 94.5266 74.0751 94.5246 74.0737 94.5227C74.073 94.5218 74.0724 94.521 74.0718 94.5201C74.0715 94.5197 74.071 94.5192 74.0709 94.519C74.0705 94.5184 74.0701 94.5179 73.2734 95.1223ZM70.7221 101.211C68.6406 102.83 66.3059 103.663 63.3045 104.337C61.7983 104.675 60.1509 104.968 58.2903 105.305C56.4371 105.641 54.3895 106.019 52.1191 106.524L52.553 108.476C54.7825 107.981 56.7975 107.609 58.6474 107.273C60.4899 106.939 62.1862 106.638 63.7426 106.288C66.8662 105.587 69.5315 104.67 71.95 102.789L70.7221 101.211ZM52.1191 106.524C50.4084 106.904 48.2959 107.69 46.5287 108.717C45.644 109.231 44.8139 109.824 44.1592 110.482C43.5127 111.131 42.9714 111.911 42.7928 112.804L44.754 113.196C44.8255 112.839 45.0757 112.396 45.5769 111.892C46.0699 111.397 46.7437 110.905 47.5334 110.446C49.115 109.527 51.0338 108.814 52.553 108.476L52.1191 106.524Z", fill: "black" }), h.createElement("path", { d: "M74 82C74 82 77 89.5 83 89.5C89 89.5 92 82 92 82", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }), h.createElement("path", { d: "M74 82C74 82 77 83.5 83 83.5C89 83.5 92 82 92 82", stroke: "black", strokeWidth: "2", strokeLinecap: "round" }), h.createElement("path", { d: "M67.0001 62C67.0001 62 67.544 58.3104 72.6327 57.3067C76.9577 56.4536 87.393 56.2077 90.2501 51C90.2501 55.4 98.0001 58.1053 98.0001 58.1053", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 22C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.02944 4 4 8.02944 4 13C4 17.9706 8.02944 22 13 22Z", fill: "#E61C1C" }), h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.8511 17.4157C16.1506 17.7152 16.6361 17.7152 16.9356 17.4157L17.4157 16.9356C17.7151 16.6362 17.7151 16.1506 17.4157 15.8512L14.5645 13L17.4156 10.1489C17.7151 9.84945 17.7151 9.36392 17.4156 9.06445L16.9355 8.58437C16.6361 8.2849 16.1505 8.2849 15.8511 8.58437L13 11.4355L10.1488 8.58436C9.84937 8.2849 9.36384 8.2849 9.06438 8.58436L8.58429 9.06445C8.28483 9.36391 8.28483 9.84944 8.58429 10.1489L11.4354 13L8.58425 15.8512C8.28478 16.1506 8.28478 16.6362 8.58425 16.9356L9.06433 17.4157C9.3638 17.7152 9.84933 17.7152 10.1488 17.4157L13 14.5646L15.8511 17.4157Z", fill: "white" }));
                }, we = function (e3) {
                    var t3 = e3.size;
                    return h.createElement("svg", { width: t3 ? 1.4 * t3 : 163, height: t3 || 113, viewBox: "0 0 163 113", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 26C20.1797 26 26 20.1797 26 13H150C151.657 13 153 14.3431 153 16V110C153 111.657 151.657 113 150 113H16C14.3431 113 13 111.657 13 110V26Z", fill: "#7E53B9", fillOpacity: "0.15" }), h.createElement("g", { clipPath: "url(#clip0)" }, h.createElement("path", { d: "M74 96L72.5 102.5L64 105L45.5 109L44 113H122L119.5 109L98.5 104.5L92 99.5V96L85 98H81L74 96Z", fill: "white" }), h.createElement("path", { d: "M102.411 66.2723C108.688 52.1741 102.865 39.2848 92.3275 41.6143C74.3598 30.5453 54.914 46.648 62.0163 66.2719C58.2803 66.2719 60.1383 85.2526 64.3048 81.1084C66.5057 86.3691 67.8517 91.8727 73.4374 95.1223C74.2007 95.5664 76.268 97.5 83.0002 97.5C89.6002 97.5 91.4186 95.7575 92.167 95.3267C92.2766 95.2635 92.3846 95.1995 92.4909 95.1347C97.6962 91.9599 99.0059 86.7313 101.12 81.7291C103.9 84.6665 105 77.0833 105 76C105.495 71.7832 105 65 102.411 66.2723Z", fill: "white" }), h.createElement("path", { d: "M92.3275 41.6143L91.803 42.4658C92.0241 42.602 92.2897 42.6468 92.5433 42.5908L92.3275 41.6143ZM102.411 66.2723L101.497 65.8656C101.326 66.2501 101.414 66.7007 101.717 66.9927C102.02 67.2846 102.474 67.3555 102.852 67.1698L102.411 66.2723ZM64.3048 81.1084L65.2274 80.7224C65.0989 80.4154 64.826 80.1923 64.4995 80.1275C64.173 80.0627 63.8357 80.1646 63.5996 80.3994L64.3048 81.1084ZM62.0163 66.2719V67.2719C62.3422 67.2719 62.6477 67.1131 62.8349 66.8463C63.0221 66.5794 63.0675 66.2381 62.9566 65.9316L62.0163 66.2719ZM73.4374 95.1223L73.9402 94.2579H73.9402L73.4374 95.1223ZM105 76L104.007 75.8834C104.002 75.9221 104 75.961 104 76L105 76ZM101.12 81.7291L101.847 81.0417C101.615 80.7965 101.274 80.685 100.942 80.7451C100.61 80.8052 100.331 81.0288 100.199 81.3398L101.12 81.7291ZM92.167 95.3267L91.668 94.46L91.668 94.46L92.167 95.3267ZM93.297 95.7263C93.6306 95.2861 93.5441 94.6589 93.104 94.3253C92.6638 93.9917 92.0366 94.0782 91.703 94.5183L93.297 95.7263ZM94.4374 102L93.8234 102.789L94.4374 102ZM113.437 107.5L113.654 106.524L113.437 107.5ZM74.0701 94.5179C73.7362 94.0779 73.109 93.9918 72.669 94.3257C72.229 94.6595 72.1429 95.2868 72.4767 95.7267L74.0701 94.5179ZM71.336 102L70.7221 101.211L71.336 102ZM52.336 107.5L52.1191 106.524L52.336 107.5ZM92.5433 42.5908C94.9573 42.0571 97.0403 42.403 98.7357 43.3704C100.441 44.3435 101.829 45.989 102.754 48.173C104.61 52.5536 104.551 59.0061 101.497 65.8656L103.324 66.6791C106.547 59.4403 106.716 52.399 104.595 47.3929C103.532 44.8834 101.881 42.8622 99.7268 41.6333C97.5629 40.3985 94.9664 40.0068 92.1116 40.6379L92.5433 42.5908ZM63.5996 80.3994C63.4092 80.5888 63.2761 80.6606 63.207 80.6859C63.1519 80.7061 63.1338 80.6997 63.1237 80.6969C63.0617 80.6798 62.835 80.5584 62.5267 80.0327C61.9301 79.0153 61.4439 77.1959 61.1897 75.1225C60.9384 73.0735 60.9323 70.9313 61.1982 69.3375C61.3326 68.5316 61.5244 67.9433 61.7344 67.584C61.8365 67.4093 61.9206 67.3277 61.967 67.2941C62.0014 67.2691 62.0105 67.2719 62.0163 67.2719V65.2719C61.0466 65.2719 60.3962 65.9101 60.0077 66.5748C59.6205 67.2373 59.3771 68.0995 59.2255 69.0084C58.9192 70.8439 58.9375 73.1878 59.2045 75.366C59.4686 77.5198 59.9946 79.6685 60.8015 81.0444C61.195 81.7153 61.7678 82.3969 62.5903 82.6245C63.5086 82.8786 64.3471 82.4768 65.0101 81.8174L63.5996 80.3994ZM73.9402 94.2579C68.7236 91.223 67.5081 86.1742 65.2274 80.7224L63.3823 81.4943C65.5033 86.5641 66.9798 92.5224 72.9345 95.9867L73.9402 94.2579ZM62.9566 65.9316C59.5469 56.5105 62.5192 48.0279 68.4044 43.2068C74.2866 38.3882 83.174 37.1499 91.803 42.4658L92.852 40.7629C83.5133 35.0098 73.694 36.2882 67.137 41.6597C60.5828 47.0287 57.3834 56.4094 61.076 66.6123L62.9566 65.9316ZM83.0002 96.5C79.7307 96.5 77.6516 96.0307 76.3281 95.54C74.9807 95.0406 74.4532 94.5564 73.9402 94.2579L72.9345 95.9867C73.1849 96.1323 74.0727 96.837 75.6329 97.4153C77.2169 98.0025 79.5375 98.5 83.0002 98.5V96.5ZM102.852 67.1698C102.932 67.1303 102.981 67.1198 103.002 67.117C103.013 67.1156 103.018 67.1159 103.019 67.116C103.02 67.116 103.02 67.1161 103.02 67.116C103.02 67.116 103.02 67.116 103.019 67.116C103.019 67.116 103.019 67.116 103.019 67.116C103.019 67.116 103.019 67.1159 103.019 67.1159C103.019 67.1159 103.019 67.116 103.019 67.116C103.019 67.116 103.02 67.116 103.02 67.116C103.02 67.1161 103.02 67.1162 103.021 67.1164C103.022 67.1168 103.024 67.1176 103.026 67.119C103.032 67.1217 103.042 67.1272 103.056 67.1377C103.084 67.1593 103.129 67.2001 103.185 67.2728C103.438 67.6008 103.693 68.2655 103.879 69.2614C104.242 71.2019 104.246 73.847 104.007 75.8834L105.993 76.1166C106.249 73.9362 106.254 71.0813 105.845 68.8941C105.646 67.8261 105.322 66.77 104.769 66.0522C104.481 65.6776 104.083 65.3349 103.552 65.1882C103.007 65.0376 102.463 65.1324 101.97 65.3748L102.852 67.1698ZM100.394 82.4165C100.816 82.8623 101.298 83.2091 101.85 83.3427C102.44 83.4854 102.987 83.3552 103.437 83.0688C103.857 82.8011 104.175 82.4104 104.417 82.0233C104.664 81.6283 104.869 81.1777 105.039 80.7227C105.379 79.8133 105.617 78.7913 105.769 77.9417C105.919 77.1072 106 76.3607 106 76L104 76C104 76.1809 103.944 76.7885 103.801 77.5888C103.66 78.374 103.448 79.2673 103.166 80.0219C103.025 80.399 102.875 80.7175 102.722 80.9624C102.564 81.2152 102.436 81.3351 102.362 81.3821C102.317 81.4106 102.323 81.3993 102.32 81.3988C102.28 81.3891 102.12 81.3302 101.847 81.0417L100.394 82.4165ZM92.666 96.1933C92.7829 96.126 92.8981 96.0577 93.0117 95.9884L91.9702 94.2809C91.8711 94.3414 91.7704 94.4011 91.668 94.46L92.666 96.1933ZM93.0117 95.9884C98.5678 92.5996 100.007 86.9322 102.041 82.1184L100.199 81.3398C98.0051 86.5305 96.8247 91.3201 91.9702 94.2809L93.0117 95.9884ZM83.0002 98.5C86.3871 98.5 88.6096 98.053 90.1137 97.5169C91.5993 96.9873 92.4234 96.333 92.666 96.1933L91.668 94.46C91.1623 94.7512 90.7029 95.1836 89.4422 95.633C88.1999 96.0758 86.2132 96.5 83.0002 96.5V98.5ZM92.5 95.1223C91.703 94.5183 91.703 94.5184 91.703 94.5184C91.703 94.5184 91.7029 94.5184 91.7029 94.5184C91.7029 94.5184 91.7029 94.5185 91.7029 94.5185C91.7028 94.5185 91.7028 94.5186 91.7028 94.5186C91.7027 94.5187 91.7026 94.5188 91.7025 94.5189C91.7024 94.5191 91.7022 94.5193 91.7021 94.5195C91.7018 94.52 91.7014 94.5204 91.7011 94.5209C91.7004 94.5218 91.6997 94.5227 91.6989 94.5238C91.6973 94.5259 91.6956 94.5282 91.6936 94.5308C91.6898 94.5361 91.6851 94.5425 91.6798 94.5499L93.3021 95.7194C93.3027 95.7187 93.3026 95.7189 93.3017 95.72C93.3013 95.7206 93.3007 95.7214 93.2999 95.7224C93.2995 95.7229 93.2991 95.7235 93.2986 95.7242C93.2984 95.7245 93.2981 95.7248 93.2978 95.7252C93.2977 95.7254 93.2976 95.7255 93.2974 95.7257C93.2974 95.7258 93.2973 95.7259 93.2972 95.726C93.2972 95.726 93.2971 95.7261 93.2971 95.7261C93.2971 95.7262 93.2971 95.7262 93.2971 95.7262C93.2971 95.7262 93.297 95.7262 93.297 95.7262C93.297 95.7263 93.297 95.7263 92.5 95.1223ZM91.6797 94.5499C91.5472 94.7338 90.8195 95.8021 90.7755 97.3569C90.7294 98.9843 91.4369 100.933 93.8234 102.789L95.0513 101.211C93.0959 99.6897 92.7491 98.3184 92.7747 97.4136C92.8024 96.4363 93.2725 95.7605 93.3021 95.7194L91.6797 94.5499ZM93.8234 102.789C96.2419 104.67 98.9072 105.587 102.031 106.288C103.587 106.638 105.283 106.939 107.126 107.273C108.976 107.609 110.991 107.981 113.22 108.476L113.654 106.524C111.384 106.019 109.336 105.641 107.483 105.305C105.623 104.968 103.975 104.675 102.469 104.337C99.4675 103.663 97.1329 102.83 95.0513 101.211L93.8234 102.789ZM113.22 108.476C114.74 108.814 116.658 109.527 118.24 110.446C119.03 110.905 119.703 111.397 120.196 111.892C120.698 112.396 120.948 112.839 121.019 113.196L122.981 112.804C122.802 111.911 122.261 111.131 121.614 110.482C120.96 109.824 120.129 109.231 119.245 108.717C117.478 107.69 115.365 106.904 113.654 106.524L113.22 108.476ZM73.2734 95.1223C72.4767 95.7267 72.4764 95.7262 72.476 95.7257C72.4759 95.7256 72.4755 95.7251 72.4753 95.7248C72.4748 95.7242 72.4744 95.7236 72.474 95.7231C72.4733 95.7221 72.4727 95.7213 72.4722 95.7207C72.4712 95.7194 72.4709 95.7189 72.471 95.7191C72.4714 95.7196 72.4739 95.723 72.4782 95.7293C72.4868 95.7418 72.5028 95.7656 72.524 95.7999C72.5665 95.8687 72.6287 95.9777 72.6942 96.1209C72.8262 96.4094 72.9642 96.8198 72.9941 97.3095C73.0497 98.2218 72.745 99.6372 70.7221 101.211L71.95 102.789C74.427 100.863 75.0911 98.8393 74.9904 97.1878C74.9421 96.3956 74.7206 95.7428 74.5128 95.2886C74.4084 95.0605 74.3055 94.8783 74.2255 94.7487C74.1853 94.6837 74.1507 94.6316 74.124 94.5929C74.1107 94.5736 74.0993 94.5576 74.0902 94.5451C74.0856 94.5388 74.0817 94.5334 74.0783 94.5289C74.0766 94.5266 74.0751 94.5246 74.0737 94.5227C74.073 94.5218 74.0724 94.521 74.0718 94.5201C74.0715 94.5197 74.071 94.5192 74.0709 94.519C74.0705 94.5184 74.0701 94.5179 73.2734 95.1223ZM70.7221 101.211C68.6406 102.83 66.3059 103.663 63.3045 104.337C61.7983 104.675 60.1509 104.968 58.2903 105.305C56.4371 105.641 54.3895 106.019 52.1191 106.524L52.553 108.476C54.7825 107.981 56.7975 107.609 58.6474 107.273C60.4899 106.939 62.1862 106.638 63.7426 106.288C66.8662 105.587 69.5315 104.67 71.95 102.789L70.7221 101.211ZM52.1191 106.524C50.4084 106.904 48.2959 107.69 46.5287 108.717C45.644 109.231 44.8139 109.824 44.1592 110.482C43.5127 111.131 42.9714 111.911 42.7928 112.804L44.754 113.196C44.8255 112.839 45.0757 112.396 45.5769 111.892C46.0699 111.397 46.7437 110.905 47.5334 110.446C49.115 109.527 51.0338 108.814 52.553 108.476L52.1191 106.524Z", fill: "black" }), h.createElement("path", { d: "M67.0001 62C67.0001 62 67.544 58.3104 72.6327 57.3067C76.9577 56.4536 87.393 56.2077 90.2501 51C90.2501 55.4 98.0001 58.1053 98.0001 58.1053", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M147 39.7083C158.276 39.7083 167.417 30.6608 167.417 19.5C167.417 8.33925 158.276 -0.708328 147 -0.708328C135.724 -0.708328 126.583 8.33925 126.583 19.5C126.583 30.6608 135.724 39.7083 147 39.7083Z", fill: "white", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M147 49.1791V53.2208V57.2624", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M109.529 19.5H117.696", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M121.059 47.6795L126.857 41.9403", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })), h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 22C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.02944 4 4 8.02944 4 13C4 17.9706 8.02944 22 13 22Z", fill: "#E61C1C" }), h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.8511 17.4157C16.1506 17.7152 16.6361 17.7152 16.9356 17.4157L17.4156 16.9356C17.7151 16.6362 17.7151 16.1506 17.4156 15.8512L14.5645 13L17.4156 10.1489C17.7151 9.84945 17.7151 9.36392 17.4156 9.06445L16.9355 8.58437C16.636 8.2849 16.1505 8.2849 15.851 8.58437L12.9999 11.4355L10.1488 8.58436C9.84936 8.2849 9.36383 8.2849 9.06436 8.58436L8.58428 9.06445C8.28481 9.36391 8.28481 9.84944 8.58428 10.1489L11.4354 13L8.58423 15.8512C8.28477 16.1506 8.28477 16.6362 8.58423 16.9356L9.06432 17.4157C9.36378 17.7152 9.84931 17.7152 10.1488 17.4157L12.9999 14.5646L15.8511 17.4157Z", fill: "white" }), h.createElement("defs", null, h.createElement("clipPath", { id: "clip0" }, h.createElement("rect", { x: "13", y: "13", width: "140", height: "100", rx: "3", fill: "white" }))));
                };
                const Ee = function (e3) {
                    var t3 = e3.size;
                    return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", null, h.createElement("circle", { cx: "40", cy: "40", r: "40", fill: "#1B101F", fillOpacity: "0.5" })), h.createElement("g", { opacity: "0.8" }, h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40 67C54.9117 67 67 54.9117 67 40C67 25.0883 54.9117 13 40 13C25.0883 13 13 25.0883 13 40C13 54.9117 25.0883 67 40 67ZM40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16C26.7452 16 16 26.7452 16 40C16 53.2548 26.7452 64 40 64Z", fill: "white" })));
                };
                var Le = n2(747);
                var ke = n2(112), Re = {
                    fullscreen: function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t3 || 24, height: t3 || 24, viewBox: "0 0 24 24", fill: "white" }, h.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }));
                    }, verified: function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 86 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("ellipse", { cx: "43", cy: "42", rx: "40", ry: "40", transform: "rotate(90 43 42)", stroke: "#5DA600", strokeWidth: "3" }), h.createElement("path", { d: "M66 30L40.5069 54L28 42.2256", stroke: "#5DA600", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }));
                    }, check: function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 64, height: t3 || 64, viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 32C-1.52588e-05 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32ZM50.9142 22.5811C51.6953 21.7999 51.6953 20.5337 50.9142 19.7526C50.1331 18.9716 48.8668 18.9716 48.0858 19.7526L30.5002 37.3381L22.7477 29.5857C21.9666 28.8047 20.7003 28.8047 19.9193 29.5857C19.1382 30.3669 19.1382 31.6331 19.9193 32.4143L29.0859 41.5808C29.461 41.9561 29.9697 42.1667 30.5002 42.1667C31.0306 42.1667 31.5393 41.9561 31.9144 41.5808L50.9142 22.5811Z", fill: "#7E53B9" }));
                    }, error: function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 86 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("ellipse", { cx: "43", cy: "42", rx: "40", ry: "40", transform: "rotate(90 43 42)", stroke: "#FF0000", strokeWidth: "3" }), h.createElement("path", { d: "M57 28L29 56M29 28L57 56", stroke: "#FF0000", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" }));
                    }, cross: function (e3) {
                        var t3 = e3.size, n3 = e3.color;
                        return h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: t3 || 24, height: t3 || 24, fill: n3 || "rgba(0,0,0,0.6)" }, h.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
                    }, snapshot: function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 60, height: t3 || 60, viewBox: "0 0 60 60", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", { opacity: "0.6" }, h.createElement("circle", { cx: "30", cy: "30", r: "29.5", stroke: "white" })), h.createElement("circle", { cx: "30", cy: "30", r: "21", fill: "white" }));
                    }, square: function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 46, height: t3 || 46, viewBox: "0 0 46 46", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("path", { d: "M45 34V41C45 43.2091 43.2091 45 41 45H34M45 12V5C45 2.79086 43.2091 1 41 1H34M12 1H5C2.79086 1 1 2.79086 1 5V12M1 34V41C1 43.2091 2.79086 45 5 45H12", stroke: "white", strokeWidth: "1.5" }));
                    }, "instruction-face-liveness": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 ? 2.14 * t3 : 300, height: t3 || 140, viewBox: "0 0 300 140", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("defs", null, h.createElement("clipPath", { className: Le.Z.locals.mask, id: "ovalClipLiveness" }, h.createElement("path", { d: "M150 26C133.431 26 120 39.4315 120 56V84C120 100.569 133.431 114 150 114C166.569 114 180 100.569 180 84V56C180 39.4315 166.569 26 150 26Z" }))), h.createElement("path", { d: "M0 -10 H 300 V 150 H 0 V-10", fill: "#EBE1F6" }), h.createElement("g", { clipPath: "url(#ovalClipLiveness)" }, h.createElement("path", { d: "M0 0 H 300 V 150 H 0 V0", fill: "white" }), h.createElement("g", { className: Le.Z.locals.man }, h.createElement("path", { d: "M160.394 41.0144L159.872 41.8678C160.092 42.0022 160.356 42.0464 160.608 41.9912L160.394 41.0144ZM171.689 68.4015L170.777 67.9918C170.605 68.3758 170.691 68.8266 170.993 69.1196C171.296 69.4125 171.749 69.4848 172.127 69.3005L171.689 68.4015ZM129.001 84.8796L129.922 84.4909C129.793 84.1854 129.521 83.9636 129.196 83.8989C128.871 83.8341 128.535 83.9348 128.299 84.1676L129.001 84.8796ZM126.437 68.4011V69.4011C126.763 69.4011 127.069 69.2418 127.256 68.9743C127.443 68.7068 127.488 68.3648 127.376 68.0582L126.437 68.4011ZM139.232 100.445L138.732 101.311V101.311L139.232 100.445ZM174.59 79.2058L173.597 79.0882C173.593 79.1272 173.59 79.1665 173.59 79.2059L174.59 79.2058ZM170.244 85.569L170.967 84.8786C170.735 84.6353 170.396 84.5251 170.065 84.5851C169.735 84.6452 169.456 84.8675 169.324 85.1768L170.244 85.569ZM160.214 100.672L159.718 99.8031L160.214 100.672ZM161.381 101.052C161.717 100.613 161.633 99.9856 161.194 99.6502C160.755 99.3148 160.128 99.3985 159.792 99.8373L161.381 101.052ZM162.757 108.084L162.147 108.875L162.757 108.084ZM177.273 114.192L177.488 113.216L177.273 114.192ZM139.842 99.8369C139.506 99.3983 138.879 99.3148 138.44 99.6505C138.002 99.9861 137.918 100.614 138.254 101.052L139.842 99.8369ZM136.878 108.084L137.488 108.875L136.878 108.084ZM122.362 114.192L122.577 115.169L122.362 114.192ZM160.608 41.9912C163.341 41.3922 165.707 41.7795 167.635 42.8705C169.573 43.9667 171.142 45.816 172.186 48.2586C174.279 53.1565 174.208 60.3532 170.777 67.9918L172.602 68.8112C176.203 60.7912 176.387 53.0006 174.025 47.4728C172.841 44.7025 171.006 42.4793 168.62 41.1297C166.225 39.7748 163.349 39.3429 160.18 40.0376L160.608 41.9912ZM128.299 84.1676C127.859 84.6015 127.667 84.5353 127.643 84.5287C127.526 84.4967 127.252 84.3281 126.903 83.7376C126.223 82.5884 125.677 80.5504 125.391 78.2437C125.109 75.9613 125.102 73.5716 125.402 71.7891C125.553 70.8889 125.771 70.2211 126.015 69.8058C126.258 69.3942 126.412 69.4011 126.437 69.4011V67.4011C125.415 67.4011 124.719 68.0668 124.293 68.7901C123.868 69.5097 123.598 70.4529 123.429 71.4572C123.088 73.4836 123.108 76.0766 123.407 78.4892C123.702 80.8775 124.289 83.2468 125.182 84.7558C125.619 85.4944 126.24 86.2177 127.114 86.4575C128.081 86.7228 128.976 86.3085 129.703 85.5917L128.299 84.1676ZM139.731 99.5784C133.844 96.1826 132.468 90.5239 129.922 84.4909L128.079 85.2684C130.465 90.9213 132.104 97.4881 138.732 101.311L139.731 99.5784ZM127.376 68.0582C123.542 57.5553 126.882 48.0864 133.514 42.7002C140.145 37.3147 150.161 35.9362 159.872 41.8678L160.915 40.161C150.498 33.7984 139.557 35.2153 132.253 41.1477C124.949 47.0794 121.375 57.4509 125.498 68.744L127.376 68.0582ZM149.945 102.085C146.269 102.085 143.925 101.562 142.426 101.011C140.903 100.452 140.29 99.9005 139.731 99.5784L138.732 101.311C139.029 101.482 140.001 102.251 141.736 102.889C143.494 103.535 146.078 104.085 149.945 104.085V102.085ZM172.127 69.3005C172.321 69.2062 172.396 69.2298 172.406 69.2324C172.428 69.2386 172.517 69.2716 172.655 69.4485C172.955 69.8341 173.244 70.5932 173.453 71.7026C173.862 73.8705 173.866 76.8191 173.597 79.0882L175.584 79.3235C175.869 76.9091 175.874 73.7489 175.419 71.3322C175.196 70.1494 174.837 68.9972 174.234 68.2213C173.92 67.8175 173.495 67.457 172.934 67.3035C172.36 67.1462 171.783 67.2436 171.251 67.5025L172.127 69.3005ZM169.521 86.2595C169.985 86.7461 170.505 87.1135 171.092 87.2541C171.714 87.4035 172.292 87.2682 172.771 86.9658C173.221 86.6815 173.567 86.2633 173.833 85.8404C174.105 85.4098 174.332 84.9164 174.521 84.4151C174.899 83.4131 175.163 82.2847 175.333 81.3444C175.501 80.4193 175.59 79.5973 175.59 79.2058L173.59 79.2059C173.59 79.416 173.526 80.0979 173.365 80.9885C173.207 81.8639 172.969 82.8628 172.649 83.7091C172.49 84.1319 172.319 84.4928 172.142 84.7729C171.96 85.0607 171.806 85.2096 171.703 85.2749C171.628 85.3222 171.599 85.319 171.558 85.3093C171.481 85.2907 171.281 85.2076 170.967 84.8786L169.521 86.2595ZM160.71 101.54C160.84 101.466 160.968 101.39 161.094 101.314L160.059 99.6026C159.947 99.6703 159.834 99.7371 159.718 99.8031L160.71 101.54ZM161.094 101.314C167.277 97.575 168.875 91.3294 171.164 85.9612L169.324 85.1768C166.875 90.9204 165.539 96.2892 160.059 99.6026L161.094 101.314ZM149.945 104.085C153.728 104.085 156.202 103.59 157.871 103.001C159.521 102.418 160.422 101.704 160.71 101.54L159.718 99.8031C159.168 100.117 158.631 100.611 157.204 101.115C155.796 101.613 153.555 102.085 149.945 102.085V104.085ZM160.587 100.445C159.792 99.8373 159.792 99.8373 159.792 99.8373C159.792 99.8373 159.792 99.8374 159.792 99.8374C159.792 99.8374 159.792 99.8374 159.792 99.8374C159.792 99.8375 159.792 99.8375 159.792 99.8376C159.792 99.8377 159.792 99.8378 159.792 99.8379C159.792 99.8381 159.792 99.8383 159.792 99.8385C159.791 99.8389 159.791 99.8394 159.791 99.8398C159.79 99.8408 159.789 99.8418 159.788 99.8429C159.787 99.845 159.785 99.8475 159.783 99.8502C159.779 99.8558 159.774 99.8625 159.768 99.8704L161.386 101.046C161.387 101.045 161.387 101.045 161.386 101.046C161.386 101.046 161.385 101.047 161.384 101.048C161.384 101.049 161.383 101.049 161.383 101.05C161.383 101.05 161.382 101.05 161.382 101.051C161.382 101.051 161.382 101.051 161.382 101.051C161.382 101.051 161.382 101.052 161.382 101.052C161.382 101.052 161.382 101.052 161.381 101.052C161.381 101.052 161.381 101.052 161.381 101.052C161.381 101.052 161.381 101.052 161.381 101.052C161.381 101.052 161.381 101.052 160.587 100.445ZM159.768 99.8703C159.626 100.066 158.824 101.232 158.775 102.929C158.725 104.701 159.499 106.834 162.147 108.875L163.368 107.292C161.151 105.582 160.745 104.028 160.774 102.987C160.806 101.872 161.346 101.1 161.386 101.046L159.768 99.8703ZM162.147 108.875C164.605 110.771 165.841 111.852 167.723 112.678C169.573 113.491 172.059 114.067 177.058 115.169L177.488 113.216C172.405 112.096 170.153 111.561 168.527 110.847C166.932 110.146 165.951 109.283 163.368 107.292L162.147 108.875ZM177.058 115.169C178.713 115.534 182.705 116.963 186.272 120.675C189.813 124.36 193 130.361 193 140H195C195 129.872 191.632 123.367 187.715 119.289C183.823 115.239 179.451 113.648 177.488 113.216L177.058 115.169ZM139.048 100.445C138.254 101.052 138.253 101.052 138.253 101.051C138.253 101.051 138.253 101.051 138.252 101.05C138.252 101.05 138.251 101.049 138.251 101.049C138.25 101.048 138.25 101.047 138.249 101.047C138.249 101.045 138.248 101.045 138.249 101.046C138.25 101.047 138.253 101.052 138.258 101.059C138.269 101.075 138.288 101.103 138.313 101.142C138.362 101.222 138.434 101.347 138.51 101.511C138.662 101.84 138.821 102.308 138.855 102.868C138.92 103.918 138.56 105.523 136.267 107.292L137.488 108.875C140.236 106.757 140.962 104.542 140.851 102.745C140.798 101.88 140.554 101.168 140.326 100.672C140.211 100.424 140.098 100.225 140.01 100.085C139.966 100.014 139.928 99.9577 139.9 99.9162C139.885 99.8955 139.873 99.8784 139.863 99.8652C139.858 99.8586 139.854 99.8529 139.851 99.8482C139.849 99.8458 139.847 99.8437 139.846 99.8418C139.845 99.8409 139.844 99.84 139.844 99.8392C139.844 99.8388 139.843 99.8382 139.843 99.838C139.843 99.8374 139.842 99.8369 139.048 100.445ZM136.267 107.292C133.684 109.283 132.703 110.146 131.108 110.847C129.482 111.561 127.23 112.096 122.147 113.216L122.577 115.169C127.576 114.067 130.061 113.491 131.912 112.678C133.794 111.852 135.03 110.771 137.488 108.875L136.267 107.292ZM122.147 113.216C120.177 113.65 115.894 115.245 112.094 119.298C108.27 123.378 105 129.88 105 140H107C107 130.352 110.101 124.349 113.554 120.666C117.03 116.957 120.929 115.532 122.577 115.169L122.147 113.216Z", fill: "black" }), h.createElement("path", { d: "M132 64C132 64 132.614 59.6396 138.359 58.4533C143.242 57.4451 155.024 57.1545 158.25 51C158.25 56.2 167 59.3972 167 59.3972", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))), h.createElement("path", { className: Le.Z.locals.circle, fillRule: "evenodd", clipRule: "evenodd", d: "M117.994 83.8432V84.75C117.994 98.6217 126.82 110.432 139.163 114.871V116.989C125.696 112.466 115.994 99.741 115.994 84.75V83.8432H117.994ZM139.163 25.1069C126.82 29.5458 117.994 41.356 117.994 55.2276V61.6767H115.994V55.2276C115.994 40.2366 125.696 27.5117 139.163 22.989V25.1069ZM181.994 61.6767V55.2277C181.994 41.6581 173.548 30.0612 161.626 25.4073V23.2694C174.675 28.0202 183.994 40.5357 183.994 55.2277V61.6767H181.994ZM161.626 114.57C173.548 109.916 181.994 98.3196 181.994 84.75V83.8432H183.994V84.75C183.994 99.442 174.675 111.957 161.626 116.708V114.57Z", fill: "#663399" }), h.createElement("circle", { className: Le.Z.locals["icon-background"], cx: "267", cy: "33", r: "20", fill: "#663399" }), h.createElement("g", { className: Le.Z.locals["icon-mark"] }, h.createElement("path", { d: "M259 32.5L266 39.5", stroke: "white", strokeWidth: "3", strokeLinecap: "round" }), h.createElement("path", { d: "M278.5 27L266 39.5", stroke: "white", strokeWidth: "3", strokeLinecap: "round" })), h.createElement("path", { className: Le.Z.locals["full-circle"], fillRule: "evenodd", clipRule: "evenodd", d: "M104.016 50.2998C104.016 24.9036 124.604 4.3159 150 4.3159C175.396 4.3159 195.984 24.9036 195.984 50.2998V89.7015C195.984 115.098 175.396 135.685 150 135.685C124.604 135.685 104.016 115.098 104.016 89.7015V50.2998ZM150 6.3159C125.708 6.3159 106.016 26.0082 106.016 50.2998V89.7015C106.016 113.993 125.708 133.685 150 133.685C174.292 133.685 193.984 113.993 193.984 89.7015V50.2998C193.984 26.0082 174.292 6.3159 150 6.3159Z", stroke: "#663399", fill: "#663399", strokeWidth: "1" }));
                    }, "instruction-face-detection": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 ? 2.14 * t3 : 300, height: t3 || 140, viewBox: "0 0 300 140", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("defs", null, h.createElement("clipPath", { className: ke.Z.locals.mask, id: "ovalClipLiveness" }, h.createElement("path", { d: "M150 26C133.431 26 120 39.4315 120 56V84C120 100.569 133.431 114 150 114C166.569 114 180 100.569 180 84V56C180 39.4315 166.569 26 150 26Z" }))), h.createElement("path", { d: "M0 -10 H 300 V 150 H 0 V-10", fill: "#EBE1F6" }), h.createElement("g", { clipPath: "url(#ovalClipLiveness)" }, h.createElement("path", { d: "M0 0 H 300 V 150 H 0 V0", fill: "white" }), h.createElement("g", { className: ke.Z.locals.man }, h.createElement("path", { d: "M160.394 41.0144L159.872 41.8678C160.092 42.0022 160.356 42.0464 160.608 41.9912L160.394 41.0144ZM171.689 68.4015L170.777 67.9918C170.605 68.3758 170.691 68.8266 170.993 69.1196C171.296 69.4125 171.749 69.4848 172.127 69.3005L171.689 68.4015ZM129.001 84.8796L129.922 84.4909C129.793 84.1854 129.521 83.9636 129.196 83.8989C128.871 83.8341 128.535 83.9348 128.299 84.1676L129.001 84.8796ZM126.437 68.4011V69.4011C126.763 69.4011 127.069 69.2418 127.256 68.9743C127.443 68.7068 127.488 68.3648 127.376 68.0582L126.437 68.4011ZM139.232 100.445L138.732 101.311V101.311L139.232 100.445ZM174.59 79.2058L173.597 79.0882C173.593 79.1272 173.59 79.1665 173.59 79.2059L174.59 79.2058ZM170.244 85.569L170.967 84.8786C170.735 84.6353 170.396 84.5251 170.065 84.5851C169.735 84.6452 169.456 84.8675 169.324 85.1768L170.244 85.569ZM160.214 100.672L159.718 99.8031L160.214 100.672ZM161.381 101.052C161.717 100.613 161.633 99.9856 161.194 99.6502C160.755 99.3148 160.128 99.3985 159.792 99.8373L161.381 101.052ZM162.757 108.084L162.147 108.875L162.757 108.084ZM177.273 114.192L177.488 113.216L177.273 114.192ZM139.842 99.8369C139.506 99.3983 138.879 99.3148 138.44 99.6505C138.002 99.9861 137.918 100.614 138.254 101.052L139.842 99.8369ZM136.878 108.084L137.488 108.875L136.878 108.084ZM122.362 114.192L122.577 115.169L122.362 114.192ZM160.608 41.9912C163.341 41.3922 165.707 41.7795 167.635 42.8705C169.573 43.9667 171.142 45.816 172.186 48.2586C174.279 53.1565 174.208 60.3532 170.777 67.9918L172.602 68.8112C176.203 60.7912 176.387 53.0006 174.025 47.4728C172.841 44.7025 171.006 42.4793 168.62 41.1297C166.225 39.7748 163.349 39.3429 160.18 40.0376L160.608 41.9912ZM128.299 84.1676C127.859 84.6015 127.667 84.5353 127.643 84.5287C127.526 84.4967 127.252 84.3281 126.903 83.7376C126.223 82.5884 125.677 80.5504 125.391 78.2437C125.109 75.9613 125.102 73.5716 125.402 71.7891C125.553 70.8889 125.771 70.2211 126.015 69.8058C126.258 69.3942 126.412 69.4011 126.437 69.4011V67.4011C125.415 67.4011 124.719 68.0668 124.293 68.7901C123.868 69.5097 123.598 70.4529 123.429 71.4572C123.088 73.4836 123.108 76.0766 123.407 78.4892C123.702 80.8775 124.289 83.2468 125.182 84.7558C125.619 85.4944 126.24 86.2177 127.114 86.4575C128.081 86.7228 128.976 86.3085 129.703 85.5917L128.299 84.1676ZM139.731 99.5784C133.844 96.1826 132.468 90.5239 129.922 84.4909L128.079 85.2684C130.465 90.9213 132.104 97.4881 138.732 101.311L139.731 99.5784ZM127.376 68.0582C123.542 57.5553 126.882 48.0864 133.514 42.7002C140.145 37.3147 150.161 35.9362 159.872 41.8678L160.915 40.161C150.498 33.7984 139.557 35.2153 132.253 41.1477C124.949 47.0794 121.375 57.4509 125.498 68.744L127.376 68.0582ZM149.945 102.085C146.269 102.085 143.925 101.562 142.426 101.011C140.903 100.452 140.29 99.9005 139.731 99.5784L138.732 101.311C139.029 101.482 140.001 102.251 141.736 102.889C143.494 103.535 146.078 104.085 149.945 104.085V102.085ZM172.127 69.3005C172.321 69.2062 172.396 69.2298 172.406 69.2324C172.428 69.2386 172.517 69.2716 172.655 69.4485C172.955 69.8341 173.244 70.5932 173.453 71.7026C173.862 73.8705 173.866 76.8191 173.597 79.0882L175.584 79.3235C175.869 76.9091 175.874 73.7489 175.419 71.3322C175.196 70.1494 174.837 68.9972 174.234 68.2213C173.92 67.8175 173.495 67.457 172.934 67.3035C172.36 67.1462 171.783 67.2436 171.251 67.5025L172.127 69.3005ZM169.521 86.2595C169.985 86.7461 170.505 87.1135 171.092 87.2541C171.714 87.4035 172.292 87.2682 172.771 86.9658C173.221 86.6815 173.567 86.2633 173.833 85.8404C174.105 85.4098 174.332 84.9164 174.521 84.4151C174.899 83.4131 175.163 82.2847 175.333 81.3444C175.501 80.4193 175.59 79.5973 175.59 79.2058L173.59 79.2059C173.59 79.416 173.526 80.0979 173.365 80.9885C173.207 81.8639 172.969 82.8628 172.649 83.7091C172.49 84.1319 172.319 84.4928 172.142 84.7729C171.96 85.0607 171.806 85.2096 171.703 85.2749C171.628 85.3222 171.599 85.319 171.558 85.3093C171.481 85.2907 171.281 85.2076 170.967 84.8786L169.521 86.2595ZM160.71 101.54C160.84 101.466 160.968 101.39 161.094 101.314L160.059 99.6026C159.947 99.6703 159.834 99.7371 159.718 99.8031L160.71 101.54ZM161.094 101.314C167.277 97.575 168.875 91.3294 171.164 85.9612L169.324 85.1768C166.875 90.9204 165.539 96.2892 160.059 99.6026L161.094 101.314ZM149.945 104.085C153.728 104.085 156.202 103.59 157.871 103.001C159.521 102.418 160.422 101.704 160.71 101.54L159.718 99.8031C159.168 100.117 158.631 100.611 157.204 101.115C155.796 101.613 153.555 102.085 149.945 102.085V104.085ZM160.587 100.445C159.792 99.8373 159.792 99.8373 159.792 99.8373C159.792 99.8373 159.792 99.8374 159.792 99.8374C159.792 99.8374 159.792 99.8374 159.792 99.8374C159.792 99.8375 159.792 99.8375 159.792 99.8376C159.792 99.8377 159.792 99.8378 159.792 99.8379C159.792 99.8381 159.792 99.8383 159.792 99.8385C159.791 99.8389 159.791 99.8394 159.791 99.8398C159.79 99.8408 159.789 99.8418 159.788 99.8429C159.787 99.845 159.785 99.8475 159.783 99.8502C159.779 99.8558 159.774 99.8625 159.768 99.8704L161.386 101.046C161.387 101.045 161.387 101.045 161.386 101.046C161.386 101.046 161.385 101.047 161.384 101.048C161.384 101.049 161.383 101.049 161.383 101.05C161.383 101.05 161.382 101.05 161.382 101.051C161.382 101.051 161.382 101.051 161.382 101.051C161.382 101.051 161.382 101.052 161.382 101.052C161.382 101.052 161.382 101.052 161.381 101.052C161.381 101.052 161.381 101.052 161.381 101.052C161.381 101.052 161.381 101.052 161.381 101.052C161.381 101.052 161.381 101.052 160.587 100.445ZM159.768 99.8703C159.626 100.066 158.824 101.232 158.775 102.929C158.725 104.701 159.499 106.834 162.147 108.875L163.368 107.292C161.151 105.582 160.745 104.028 160.774 102.987C160.806 101.872 161.346 101.1 161.386 101.046L159.768 99.8703ZM162.147 108.875C164.605 110.771 165.841 111.852 167.723 112.678C169.573 113.491 172.059 114.067 177.058 115.169L177.488 113.216C172.405 112.096 170.153 111.561 168.527 110.847C166.932 110.146 165.951 109.283 163.368 107.292L162.147 108.875ZM177.058 115.169C178.713 115.534 182.705 116.963 186.272 120.675C189.813 124.36 193 130.361 193 140H195C195 129.872 191.632 123.367 187.715 119.289C183.823 115.239 179.451 113.648 177.488 113.216L177.058 115.169ZM139.048 100.445C138.254 101.052 138.253 101.052 138.253 101.051C138.253 101.051 138.253 101.051 138.252 101.05C138.252 101.05 138.251 101.049 138.251 101.049C138.25 101.048 138.25 101.047 138.249 101.047C138.249 101.045 138.248 101.045 138.249 101.046C138.25 101.047 138.253 101.052 138.258 101.059C138.269 101.075 138.288 101.103 138.313 101.142C138.362 101.222 138.434 101.347 138.51 101.511C138.662 101.84 138.821 102.308 138.855 102.868C138.92 103.918 138.56 105.523 136.267 107.292L137.488 108.875C140.236 106.757 140.962 104.542 140.851 102.745C140.798 101.88 140.554 101.168 140.326 100.672C140.211 100.424 140.098 100.225 140.01 100.085C139.966 100.014 139.928 99.9577 139.9 99.9162C139.885 99.8955 139.873 99.8784 139.863 99.8652C139.858 99.8586 139.854 99.8529 139.851 99.8482C139.849 99.8458 139.847 99.8437 139.846 99.8418C139.845 99.8409 139.844 99.84 139.844 99.8392C139.844 99.8388 139.843 99.8382 139.843 99.838C139.843 99.8374 139.842 99.8369 139.048 100.445ZM136.267 107.292C133.684 109.283 132.703 110.146 131.108 110.847C129.482 111.561 127.23 112.096 122.147 113.216L122.577 115.169C127.576 114.067 130.061 113.491 131.912 112.678C133.794 111.852 135.03 110.771 137.488 108.875L136.267 107.292ZM122.147 113.216C120.177 113.65 115.894 115.245 112.094 119.298C108.27 123.378 105 129.88 105 140H107C107 130.352 110.101 124.349 113.554 120.666C117.03 116.957 120.929 115.532 122.577 115.169L122.147 113.216Z", fill: "black" }), h.createElement("path", { d: "M132 64C132 64 132.614 59.6396 138.359 58.4533C143.242 57.4451 155.024 57.1545 158.25 51C158.25 56.2 167 59.3972 167 59.3972", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))), h.createElement("path", { className: ke.Z.locals.circle, fillRule: "evenodd", clipRule: "evenodd", d: "M117.994 83.8432V84.75C117.994 98.6217 126.82 110.432 139.163 114.871V116.989C125.696 112.466 115.994 99.741 115.994 84.75V83.8432H117.994ZM139.163 25.1069C126.82 29.5458 117.994 41.356 117.994 55.2276V61.6767H115.994V55.2276C115.994 40.2366 125.696 27.5117 139.163 22.989V25.1069ZM181.994 61.6767V55.2277C181.994 41.6581 173.548 30.0612 161.626 25.4073V23.2694C174.675 28.0202 183.994 40.5357 183.994 55.2277V61.6767H181.994ZM161.626 114.57C173.548 109.916 181.994 98.3196 181.994 84.75V83.8432H183.994V84.75C183.994 99.442 174.675 111.957 161.626 116.708V114.57Z", fill: "#663399" }), h.createElement("circle", { className: ke.Z.locals["icon-background"], cx: "267", cy: "33", r: "20", fill: "#663399" }), h.createElement("g", { className: ke.Z.locals["icon-mark"] }, h.createElement("path", { d: "M259 32.5L266 39.5", stroke: "white", strokeWidth: "3", strokeLinecap: "round" }), h.createElement("path", { d: "M278.5 27L266 39.5", stroke: "white", strokeWidth: "3", strokeLinecap: "round" })), h.createElement("g", { className: ke.Z.locals.photo }, h.createElement("rect", { width: "68", height: "68", rx: "3", fill: "#C5B9D2" }), h.createElement("path", { d: "M32.7731 46.6597L28.1199 45.4358L27.62 48.6259L22.7123 51.8001L16.8231 53.1833C16.8231 53.1833 13.41 55.5608 11.38 57.8751C9.35 60.1894 8.48 68.0001 8.48 68.0001H59.52C59.52 63.5027 56.62 57.8751 56.62 57.8751L51.98 53.8251L44.5515 51.8001L39.8155 48.1284V45.4358L35.2269 46.6597H32.7731Z", fill: "white" }), h.createElement("path", { d: "M46.5798 26.5752C50.6585 17.5156 46.8752 9.23285 40.0283 10.7298C28.3537 3.61678 15.7187 13.9645 20.3334 26.575C17.9059 26.575 19.1132 38.7721 21.8204 36.109C23.2504 39.4896 24.125 43.0262 27.7543 45.1145C28.2503 45.3998 29.5936 46.6424 33.9678 46.6424C38.2562 46.6424 39.4378 45.5227 39.924 45.2458C39.9953 45.2052 40.0654 45.1641 40.1345 45.1224C43.5167 43.0823 44.3676 39.7224 45.7415 36.5079C47.5477 38.3955 48.2625 33.5225 48.2625 32.8263C48.5842 30.1166 48.2625 25.7576 46.5798 26.5752Z", fill: "white" }), h.createElement("path", { d: "M40.0283 10.7298L39.508 11.5838C39.7277 11.7177 39.9905 11.7617 40.2419 11.7068L40.0283 10.7298ZM46.5798 26.5752L45.668 26.1647C45.4952 26.5485 45.5812 26.9994 45.8832 27.2926C46.1851 27.5859 46.6383 27.6586 47.0169 27.4747L46.5798 26.5752ZM21.8204 36.109L22.7414 35.7194C22.6124 35.4144 22.3407 35.193 22.0159 35.1283C21.6911 35.0636 21.3553 35.1639 21.1192 35.3961L21.8204 36.109ZM20.3334 26.575V27.575C20.66 27.575 20.966 27.4155 21.1531 27.1479C21.3401 26.8802 21.3847 26.538 21.2725 26.2313L20.3334 26.575ZM27.7543 45.1145L28.2531 44.2477L28.2531 44.2477L27.7543 45.1145ZM48.2625 32.8263L47.2694 32.7084C47.2648 32.7475 47.2625 32.7869 47.2625 32.8263L48.2625 32.8263ZM45.7415 36.5079L46.464 35.8165C46.2318 35.5738 45.8932 35.4639 45.5627 35.524C45.2322 35.584 44.954 35.806 44.822 36.1149L45.7415 36.5079ZM39.924 45.2458L40.4189 46.1148L40.4189 46.1148L39.924 45.2458ZM40.9344 45.7224C41.2701 45.2839 41.1869 44.6563 40.7484 44.3205C40.3099 43.9847 39.6822 44.068 39.3464 44.5065L40.9344 45.7224ZM41.3992 49.5341L42.0089 48.7415L41.3992 49.5341ZM49.8184 53.0685L50.0331 52.0918H50.0331L49.8184 53.0685ZM28.4412 44.5058C28.1051 44.0676 27.4773 43.9849 27.0391 44.321C26.6009 44.6572 26.5182 45.2849 26.8544 45.7231L28.4412 44.5058ZM26.389 49.5341L25.7793 48.7415H25.7793L26.389 49.5341ZM17.9698 53.0685L17.7551 52.0918H17.7551L17.9698 53.0685ZM40.2419 11.7068C41.7358 11.3801 43.0019 11.595 44.0226 12.171C45.0526 12.7523 45.9063 13.7437 46.4819 15.0875C47.6386 17.788 47.6213 21.8259 45.668 26.1647L47.4917 26.9858C49.617 22.2649 49.7474 17.6317 48.3204 14.3001C47.6041 12.6279 46.4831 11.2631 45.0055 10.4292C43.5187 9.59016 41.7442 9.33105 39.8147 9.75291L40.2419 11.7068ZM21.1192 35.3961C20.9246 35.5875 20.9607 35.4493 21.1437 35.4994C21.2343 35.5242 21.1486 35.5428 20.9648 35.2328C20.6156 34.6439 20.3071 33.5348 20.1438 32.2176C19.9835 30.9247 19.9818 29.5852 20.147 28.6055C20.2312 28.1069 20.3462 27.7787 20.4502 27.6027C20.5518 27.4307 20.5271 27.575 20.3334 27.575V25.575C19.5328 25.575 19.0149 26.1004 18.7284 26.5851C18.4444 27.0657 18.2766 27.6697 18.1749 28.2728C17.9684 29.4969 17.9825 31.0402 18.159 32.4637C18.3325 33.8629 18.6817 35.3037 19.2444 36.2528C19.5166 36.7118 19.9503 37.2464 20.6157 37.4285C21.3734 37.6358 22.0395 37.2963 22.5217 36.8219L21.1192 35.3961ZM28.2531 44.2477C24.9941 42.3726 24.2517 39.2898 22.7414 35.7194L20.8994 36.4986C22.2492 39.6894 23.2559 43.6799 27.2556 45.9812L28.2531 44.2477ZM21.2725 26.2313C19.1102 20.3224 20.9968 15.0348 24.7019 12.0331C28.4066 9.03156 34.0228 8.24184 39.508 11.5838L40.5486 9.87586C34.3592 6.10478 27.8206 6.93237 23.4429 10.4791C19.0654 14.0256 16.9419 20.2171 19.3943 26.9187L21.2725 26.2313ZM33.9678 45.6424C31.8761 45.6424 30.5664 45.3455 29.751 45.0466C28.9122 44.739 28.6318 44.4656 28.2531 44.2477L27.2556 45.9812C27.3728 46.0487 28.0121 46.5392 29.0625 46.9243C30.1363 47.318 31.6853 47.6424 33.9678 47.6424V45.6424ZM47.0169 27.4747C47.0585 27.4545 46.9972 27.4933 46.8848 27.4626C46.7856 27.4355 46.7665 27.3861 46.809 27.4405C46.9187 27.5813 47.0719 27.9374 47.1902 28.5637C47.4172 29.7653 47.4217 31.4264 47.2694 32.7084L49.2555 32.9442C49.425 31.5165 49.4295 29.6433 49.1554 28.1924C49.0232 27.4924 48.8006 26.7427 48.3867 26.2114C48.1674 25.9299 47.8497 25.6529 47.412 25.5333C46.9612 25.4101 46.5219 25.4916 46.1428 25.6758L47.0169 27.4747ZM45.019 37.1992C45.3201 37.5139 45.6893 37.7859 46.1357 37.8927C46.6185 38.0083 47.0682 37.9012 47.4305 37.6729C47.7643 37.4626 48.0051 37.164 48.178 36.8907C48.3556 36.6099 48.4987 36.2964 48.6146 35.9898C48.8464 35.3771 49.0054 34.6968 49.1065 34.1391C49.2049 33.5965 49.2625 33.0912 49.2625 32.8263L47.2625 32.8263C47.2625 32.9095 47.2307 33.2743 47.1386 33.7823C47.0493 34.275 46.9167 34.8255 46.744 35.2822C46.6577 35.5102 46.5703 35.6911 46.4878 35.8214C46.4006 35.9594 46.3515 35.9889 46.3643 35.9808C46.4056 35.9548 46.5031 35.9242 46.6011 35.9476C46.6627 35.9624 46.6144 35.9737 46.464 35.8165L45.019 37.1992ZM40.4189 46.1148C40.4973 46.0701 40.5747 46.0247 40.651 45.9787L39.618 44.2661C39.5561 44.3035 39.4932 44.3404 39.4292 44.3768L40.4189 46.1148ZM40.651 45.9787C44.3855 43.726 45.3673 39.9279 46.661 36.9009L44.822 36.1149C43.368 39.5168 42.6479 42.4385 39.618 44.2661L40.651 45.9787ZM33.9678 47.6424C36.198 47.6424 37.6822 47.3513 38.7042 46.991C39.7082 46.6371 40.3068 46.1786 40.4189 46.1148L39.4292 44.3768C39.055 44.5899 38.8197 44.8297 38.0392 45.1048C37.2768 45.3736 36.026 45.6424 33.9678 45.6424V47.6424ZM40.1404 45.1145C39.3464 44.5065 39.3464 44.5065 39.3464 44.5066C39.3464 44.5066 39.3464 44.5066 39.3464 44.5066C39.3464 44.5066 39.3463 44.5066 39.3463 44.5067C39.3463 44.5067 39.3462 44.5068 39.3462 44.5068C39.3461 44.5069 39.3461 44.507 39.346 44.5071C39.3458 44.5073 39.3457 44.5075 39.3455 44.5077C39.3452 44.5081 39.3449 44.5085 39.3446 44.5089C39.3439 44.5098 39.3433 44.5107 39.3426 44.5116C39.3411 44.5135 39.3396 44.5156 39.3379 44.5178C39.3345 44.5223 39.3307 44.5275 39.3264 44.5334L40.9427 45.7114C40.9422 45.712 40.9413 45.7133 40.9399 45.7151C40.9392 45.716 40.9384 45.7171 40.9375 45.7183C40.937 45.7189 40.9365 45.7196 40.936 45.7203C40.9358 45.7206 40.9355 45.721 40.9352 45.7213C40.9351 45.7215 40.9349 45.7217 40.9348 45.7219C40.9347 45.722 40.9347 45.722 40.9346 45.7221C40.9346 45.7222 40.9345 45.7222 40.9345 45.7223C40.9345 45.7223 40.9344 45.7223 40.9344 45.7224C40.9344 45.7224 40.9344 45.7224 40.9344 45.7224C40.9344 45.7224 40.9344 45.7224 40.1404 45.1145ZM39.3264 44.5334C39.2221 44.6765 38.7015 45.4345 38.6698 46.54C38.636 47.7197 39.1633 49.0758 40.7895 50.3267L42.0089 48.7415C40.8139 47.8222 40.6562 47.0448 40.669 46.5973C40.6763 46.3428 40.7412 46.1232 40.811 45.9592C40.881 45.795 40.9488 45.703 40.9426 45.7114L39.3264 44.5334ZM40.7895 50.3267C42.1895 51.4037 42.9596 52.0742 44.1111 52.5787C45.2314 53.0696 46.7216 53.4117 49.6038 54.0452L50.0331 52.0918C47.0674 51.44 45.81 51.1395 44.9137 50.7468C44.0484 50.3677 43.5328 49.9137 42.0089 48.7415L40.7895 50.3267ZM49.6038 54.0452C50.4997 54.2421 52.7354 55.0352 54.736 57.1122C56.7103 59.1619 58.52 62.5267 58.52 68.0001H60.52C60.52 62.0366 58.5282 58.1663 56.1764 55.7247C53.8509 53.3104 51.2357 52.3561 50.0331 52.0918L49.6038 54.0452ZM27.6478 45.1145C26.8544 45.7231 26.854 45.7226 26.8536 45.7221C26.8535 45.722 26.8531 45.7215 26.8528 45.7211C26.8524 45.7205 26.8519 45.7199 26.8515 45.7193C26.8506 45.7182 26.8498 45.7171 26.8491 45.7162C26.8477 45.7143 26.8467 45.713 26.846 45.712C26.8447 45.7102 26.8447 45.7101 26.8458 45.7118C26.8482 45.7152 26.8552 45.7254 26.8655 45.7419C26.8863 45.7752 26.9193 45.8321 26.9547 45.9087C27.0266 46.0641 27.1008 46.2834 27.1167 46.5424C27.1444 46.9915 27.0141 47.7916 25.7793 48.7415L26.9987 50.3267C28.6877 49.0275 29.1868 47.6178 29.113 46.4193C29.0781 45.8545 28.9187 45.3906 28.7698 45.0688C28.6949 44.9068 28.6206 44.7765 28.5618 44.6823C28.5322 44.6351 28.5063 44.5965 28.4857 44.567C28.4754 44.5522 28.4664 44.5397 28.459 44.5295C28.4552 44.5244 28.4519 44.5199 28.4489 44.5159C28.4474 44.5139 28.446 44.5121 28.4447 44.5104C28.4441 44.5096 28.4435 44.5088 28.4429 44.508C28.4426 44.5076 28.4422 44.5071 28.442 44.5069C28.4416 44.5063 28.4412 44.5058 27.6478 45.1145ZM25.7793 48.7415C24.2554 49.9137 23.7398 50.3677 22.8745 50.7468C21.9782 51.1395 20.7208 51.44 17.7551 52.0918L18.1844 54.0452C21.0666 53.4117 22.5568 53.0696 23.6771 52.5787C24.8286 52.0742 25.5987 51.4037 26.9987 50.3267L25.7793 48.7415ZM17.7551 52.0918C16.5454 52.3577 13.9808 53.3161 11.7092 55.7336C9.41292 58.1773 7.48 62.0451 7.48 68.0001H9.48C9.48 62.5182 11.2427 59.1508 13.1667 57.1032C15.1152 55.0295 17.2956 54.2405 18.1844 54.0452L17.7551 52.0918Z", fill: "black" }), h.createElement("path", { d: "M23.56 24.0285C23.56 24.0285 23.9162 21.5057 27.2484 20.8194C30.0806 20.236 36.9141 20.0679 38.785 16.5071C38.785 19.5157 43.86 21.3655 43.86 21.3655", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })), h.createElement("g", { className: ke.Z.locals.card }, h.createElement("path", { d: "M0 3C0 1.34315 1.34315 0 3 0H52C53.6569 0 55 1.34315 55 3V17H0V3Z", fill: "white" }), h.createElement("path", { opacity: "0.6", d: "M56 3C56 1.34315 57.3431 0 59 0H107C108.657 0 110 1.34315 110 3V17H56V3Z", fill: "white" }), h.createElement("path", { opacity: "0.6", d: "M111 3C111 1.34315 112.343 0 114 0H162C163.657 0 165 1.34315 165 3V17H111V3Z", fill: "white" }), h.createElement("path", { d: "M0 17H165V92C165 93.6569 163.657 95 162 95H3C1.34314 95 0 93.6569 0 92V17Z", fill: "white" }), h.createElement("rect", { x: "12", y: "7", width: "34", height: "4", fill: "#C5B9D2" }), h.createElement("g", { className: ke.Z.locals.text }, h.createElement("rect", { x: "12", y: "29", width: "58", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "78", y: "29", width: "18", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "104", y: "29", width: "29", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "12", y: "40", width: "42", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "62", y: "51", width: "61", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "62", y: "40", width: "42", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "12", y: "66", width: "48", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "12", y: "77", width: "27", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "47", y: "77", width: "27", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "83", y: "77", width: "14", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "105", y: "77", width: "34", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "12", y: "51", width: "9", height: "3", fill: "#D9D9D9" }), h.createElement("rect", { x: "25", y: "51", width: "25", height: "3", fill: "#D9D9D9" }))));
                    }, "regula-logo": function (e3) {
                        var t3 = e3.color, n3 = e3.size;
                        return h.createElement("svg", { width: n3 || 24, height: n3 || 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.44668 9.73177L0.783731 10.1555C-0.106412 10.8948 0.13711 13.1114 0.725552 14.149C0.759628 14.2088 0.815314 14.2869 0.854377 14.3475C-0.0906204 16.4702 -0.55273 18.7041 1.09208 20.6606C2.24653 22.0347 3.69353 23.1737 5.34166 23.9903C5.38738 24.0128 5.404 24.0003 5.40234 23.9762C5.40067 23.9505 5.37657 23.9114 5.34499 23.894C3.88053 23.0989 3.13584 21.5155 3.62371 19.942C3.78911 19.4086 3.99689 18.8296 4.24457 18.214C4.33433 18.3029 4.46316 18.4117 4.59946 18.523C5.45304 19.2807 6.44291 20.0442 7.53752 20.7694C9.85305 22.3039 12.1678 23.3598 13.978 23.8001C15.7317 24.2263 17.6374 24.046 19.1235 23.0225C20.9395 21.7713 22.4123 20.0907 23.3789 18.1342C23.4246 18.0412 23.3274 17.8709 23.1911 18.1242C21.6402 20.9962 19.1077 22.7325 15.6901 21.1483C13.712 20.2311 11.4488 18.675 9.29619 16.648C8.23068 15.6452 7.28485 14.6134 6.48115 13.5998C6.50109 13.5633 6.52187 13.5267 6.54182 13.491L7.417 13.3822C11.6666 12.7624 18.4769 12.0529 22.1073 9.95607C23.4437 9.18429 23.8061 8.02287 23.211 6.91046C20.9196 2.63031 16.1821 -0.210932 10.8429 0.012546C7.78603 0.139654 5.01669 1.25206 2.85242 3.01579C2.50418 3.56826 2.32465 4.24035 2.27063 4.92076C2.1925 5.90107 2.37535 6.89883 2.69035 7.57923C4.06172 4.21045 7.28568 1.73225 11.1613 1.29775C9.3045 2.50487 6.83355 5.01297 4.51967 8.18902C4.14317 8.70659 3.78495 9.2225 3.44668 9.73177ZM20.0502 4.46965C20.0876 4.51866 20.125 4.56851 20.1624 4.61835C21.385 6.27907 20.5414 7.12812 18.7179 7.57591C16.4722 8.12754 12.8867 8.59776 10.7964 8.83702C10.3966 8.88272 9.68267 8.97493 9.33692 9.01398C11.3366 6.12787 13.3313 3.86817 14.8432 2.72336C15.9743 1.866 17.0091 2.18003 18.1203 2.88702C18.8293 3.3373 19.4776 3.86983 20.0502 4.46965Z", fill: t3 || "#663399" }));
                    }, "back-camera": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 48, height: t3 || 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", { opacity: "0.9" }, h.createElement("rect", { x: "23", y: "13", width: "2", height: "22", rx: "1", fill: "white" }), h.createElement("path", { d: "M30.3017 24L38 14.7621L38 33.238L30.3017 24Z", fill: "white", stroke: "white", strokeWidth: "2" }), h.createElement("path", { d: "M17.6983 24L10 14.7621L10 33.238L17.6983 24Z", stroke: "white", strokeWidth: "2" })));
                    }, "front-camera": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 48, height: t3 || 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", { opacity: "0.9" }, h.createElement("rect", { x: "23", y: "13", width: "2", height: "22", rx: "1", fill: "white" }), h.createElement("path", { d: "M30.3017 24L38 14.7621L38 33.238L30.3017 24Z", stroke: "white", strokeWidth: "2" }), h.createElement("path", { d: "M17.6983 24L10 14.7621L10 33.238L17.6983 24Z", fill: "white", stroke: "white", strokeWidth: "2" })));
                    }, "camera-logo": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 86 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("ellipse", { cx: "43", cy: "42", rx: "40", ry: "40", transform: "rotate(90 43 42)", stroke: "#E93C3C", strokeWidth: "3" }), h.createElement("path", { d: "M41.213 32.6666H45.6663C46.3736 32.6666 47.0519 32.9476 47.552 33.4477C48.0521 33.9478 48.333 34.626 48.333 35.3333V39.7866L49.6663 41.12L57.6663 35.3333V48.6666M48.333 47.3333V48.6666C48.333 49.3739 48.0521 50.0521 47.552 50.5522C47.0519 51.0523 46.3736 51.3333 45.6663 51.3333H30.9997C30.2924 51.3333 29.6142 51.0523 29.1141 50.5522C28.614 50.0521 28.333 49.3739 28.333 48.6666V35.3333C28.333 34.626 28.614 33.9478 29.1141 33.4477C29.6142 32.9476 30.2924 32.6666 30.9997 32.6666H33.6663L48.333 47.3333Z", stroke: "#E93C3C", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M28.333 27.3334L57.6663 56.6667", stroke: "#E93C3C", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }));
                    }, "fullscreen-exit": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: t3 || 24, height: t3 || 24, viewBox: "0 0 24 24", fill: "white" }, h.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
                    }, "no-smiling": _e, "no-glare": we, "from-camera": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 48, height: t3 || 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("path", { d: "M46 38C46 39.0609 45.5786 40.0783 44.8284 40.8284C44.0783 41.5786 43.0609 42 42 42H6C4.93913 42 3.92172 41.5786 3.17157 40.8284C2.42143 40.0783 2 39.0609 2 38V16C2 14.9391 2.42143 13.9217 3.17157 13.1716C3.92172 12.4214 4.93913 12 6 12H14L18 7.20001H30L34 12H42C43.0609 12 44.0783 12.4214 44.8284 13.1716C45.5786 13.9217 46 14.9391 46 16V38Z", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M24.0001 34.8C28.6393 34.8 32.4001 31.0392 32.4001 26.4C32.4001 21.7608 28.6393 18 24.0001 18C19.3609 18 15.6001 21.7608 15.6001 26.4C15.6001 31.0392 19.3609 34.8 24.0001 34.8Z", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("rect", { x: "37", y: "17", width: "4", height: "4", rx: "1", fill: "#6F489D" }));
                    }, "from-gallery": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 48, height: t3 || 48, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", { clipPath: "url(#clip0)" }, h.createElement("path", { d: "M43.875 34.125C45.6699 34.125 47.125 32.6699 47.125 30.875V8.125C47.125 6.33007 45.6699 4.875 43.875 4.875H21.125C19.3301 4.875 17.875 6.33007 17.875 8.125", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M35.875 11.875H5.125C3.33007 11.875 1.875 13.3301 1.875 15.125V37.875C1.875 39.6699 3.33007 41.125 5.125 41.125H35.875C37.6699 41.125 39.125 39.6699 39.125 37.875V15.125C39.125 13.3301 37.6699 11.875 35.875 11.875Z", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M10.8125 23.25C12.1587 23.25 13.25 22.1587 13.25 20.8125C13.25 19.4663 12.1587 18.375 10.8125 18.375C9.46631 18.375 8.375 19.4663 8.375 20.8125C8.375 22.1587 9.46631 23.25 10.8125 23.25Z", fill: "#663399" }), h.createElement("path", { d: "M31.125 31.375L23 23.25L5.125 41.125", stroke: "black", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })), h.createElement("defs", null, h.createElement("clipPath", { id: "clip0" }, h.createElement("rect", { width: "48", height: "48", fill: "white" }))));
                    }, "docreader-search": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", null, h.createElement("circle", { cx: "40", cy: "40", r: "40", fill: "#1B101F", fillOpacity: "0.5" })), h.createElement("g", { opacity: "0.8" }, h.createElement("circle", { cx: "40", cy: "40", r: "23.5", stroke: "white" }), h.createElement("circle", { cx: "40", cy: "40", r: "1", fill: "white" })));
                    }, "docreader-processing-finished": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80ZM64.0282 29.0922C64.6314 28.5243 64.66 27.575 64.0922 26.9718C63.5243 26.3686 62.575 26.34 61.9718 26.9078L37.5069 49.9399L26.0282 39.1334C25.425 38.5656 24.4757 38.5942 23.9079 39.1974C23.34 39.8006 23.3686 40.7499 23.9718 41.3177L36.4787 53.0922C37.0563 53.6359 37.9575 53.6359 38.5351 53.0922L64.0282 29.0922Z", fill: "white" }));
                    }, "docreader-processing-error": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", null, h.createElement("circle", { cx: "40", cy: "40", r: "40", fill: "#E95454", fillOpacity: "0.45" })), h.createElement("g", null, h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M40 67C54.9117 67 67 54.9117 67 40C67 25.0883 54.9117 13 40 13C25.0883 13 13 25.0883 13 40C13 54.9117 25.0883 67 40 67ZM40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16C26.7452 16 16 26.7452 16 40C16 53.2548 26.7452 64 40 64Z", fill: "white" })));
                    }, "docreader-processing": Ee, "docreader-flip": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", null, h.createElement("circle", { cx: "40", cy: "40", r: "40", fill: "#1B101F", fillOpacity: "0.5" })), h.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 25.2308C16 24.551 16.5373 24 17.2 24H62.8C63.4627 24 64 24.551 64 25.2308V54.7692C64 55.449 63.4627 56 62.8 56H17.2C16.5373 56 16 55.449 16 54.7692V25.2308ZM21.4 30.1538C21.4 29.814 21.6686 29.5385 22 29.5385H32.8C33.1314 29.5385 33.4 29.814 33.4 30.1538V43.6923C33.4 44.0322 33.1314 44.3077 32.8 44.3077H22C21.6686 44.3077 21.4 44.0322 21.4 43.6923V30.1538ZM39.4 29.5385C39.0686 29.5385 38.8 29.814 38.8 30.1538V30.7692C38.8 31.1091 39.0686 31.3846 39.4 31.3846H58C58.3314 31.3846 58.6 31.1091 58.6 30.7692V30.1538C58.6 29.814 58.3314 29.5385 58 29.5385H39.4ZM39.4 35.0769C39.0686 35.0769 38.8 35.3524 38.8 35.6923V36.3077C38.8 36.6476 39.0686 36.9231 39.4 36.9231H49.6C49.9314 36.9231 50.2 36.6476 50.2 36.3077V35.6923C50.2 35.3524 49.9314 35.0769 49.6 35.0769H39.4ZM38.8 41.2308C38.8 40.8909 39.0686 40.6154 39.4 40.6154H53.8C54.1314 40.6154 54.4 40.8909 54.4 41.2308V41.8462C54.4 42.186 54.1314 42.4615 53.8 42.4615H39.4C39.0686 42.4615 38.8 42.186 38.8 41.8462V41.2308ZM22 49.8462C21.6686 49.8462 21.4 50.1217 21.4 50.4615V51.0769C21.4 51.4168 21.6686 51.6923 22 51.6923H32.2C32.5314 51.6923 32.8 51.4168 32.8 51.0769V50.4615C32.8 50.1217 32.5314 49.8462 32.2 49.8462H22Z", fill: "white" }));
                    }, "docreader-camera-disabled": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", null, h.createElement("circle", { cx: "40", cy: "40", r: "40", fill: "#1B101F", fillOpacity: "0.5" })), h.createElement("path", { d: "M40.213 30.6667H44.6663C45.3736 30.6667 46.0519 30.9476 46.552 31.4477C47.0521 31.9478 47.333 32.6261 47.333 33.3334V37.7867L48.6663 38.12L56.6663 33.3334V46.6667M47.333 45.3334V46.6667C47.333 47.3739 47.0521 48.0522 46.552 48.5523C46.0519 49.0524 45.3736 49.3334 44.6663 49.3334H29.9997C29.2924 49.3334 28.6142 49.0524 28.1141 48.5523C27.614 48.0522 27.333 47.3739 27.333 46.6667V33.3334C27.333 32.6261 27.614 31.9478 28.1141 31.4477C28.6142 30.9476 29.2924 30.6667 29.9997 30.6667H32.6663L47.333 45.3334Z", stroke: "#FF5E5E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M27.333 25.3333L56.6663 54.6666", stroke: "#FF5E5E", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }));
                    }, "docreader-camera-preparing": function (e3) {
                        var t3 = e3.size;
                        return h.createElement("svg", { width: t3 || 80, height: t3 || 80, viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h.createElement("g", null, h.createElement("circle", { cx: "40", cy: "40", r: "40", fill: "#1B101F", fillOpacity: "0.5" })), h.createElement("path", { d: "M47.333 43L56.6663 46.6666V33.3333L47.333 37", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), h.createElement("path", { d: "M47.333 43V46.6667C47.333 48.1394 46.1391 49.3334 44.6663 49.3334H29.9997C28.5269 49.3334 27.333 48.1394 27.333 46.6667V33.3334C27.333 31.8606 28.5269 30.6667 29.9997 30.6667H44.6663C46.1391 30.6667 47.333 31.8606 47.333 33.3334V43.5", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }));
                    }
                };
                const xe = function (e3) {
                    var t3 = e3.type, n3 = e3.size, r2 = e3.color, a2 = Re[t3];
                    return h.createElement(a2, { size: n3, color: r2 });
                };
                var Ne = n2(841), De = n2(155), Te = n2(76);
                const Pe = function (e3) {
                    var t3 = e3.children, n3 = e3.onClick;
                    return h.createElement("button", { className: Te.Z.locals.button, onClick: n3 }, t3);
                }, Me = function (e3) {
                    var t3 = e3.onClick, n3 = e3.title, r2 = e3.subtitle, a2 = e3.type, o2 = e3.size, i2 = (0, re.useLocalize)().translate;
                    return h.createElement("div", { className: De.Z.locals["info-message"] }, h.createElement("div", { className: De.Z.locals["text-container"] }, h.createElement(xe, { type: a2, size: o2 }), h.createElement("p", { className: De.Z.locals.title }, n3), h.createElement("p", { className: De.Z.locals.subtitle }, r2), t3 && h.createElement(Pe, { onClick: t3 }, i2("faceLivenessScreenButton"))));
                }, Oe = function (e3) {
                    var t3 = e3.onClose, n3 = e3.children, r2 = e3.complitionStatus, a2 = ie(), o2 = a2.isPortrait, i2 = a2.isLandscape;
                    return h.useEffect(function () {
                        var e4 = document.getElementsByTagName("body")[0];
                        return e4.style.overflow = "hidden", function () {
                            e4.style.overflow = "";
                        };
                    }), h.createElement("div", { "data-device": oe.tq && o2 ? "mobile" : "desktop", className: Ne.Z.locals.container }, h.createElement("div", { className: Ne.Z.locals.window }, oe.UA && i2 ? h.createElement(Me, { type: "error", title: "Portrait orientation only", subtitle: "Turn your device into portrait mode" }) : n3, h.createElement("header", null, h.createElement("button", { onClick: t3 }, h.createElement(xe, { type: "cross", color: "rgba(0, 0, 0, 0.6)" }))), r2 !== D.INSTRUCTION && h.createElement("footer", { className: Ne.Z.locals.footer }, h.createElement("div", { className: Ne.Z.locals.ads }, h.createElement(xe, { color: "#8C8C8C", type: "regula-logo", size: 18 }), h.createElement("div", { className: Ne.Z.locals.pipe }), h.createElement("span", null, "Powered by Regula")))));
                };
                var Ie = n2(887);
                const Ae = function () {
                    return h.createElement("div", { className: Ie.Z.locals.container }, h.createElement("div", { className: Ie.Z.locals.spinner }));
                }, Fe = function (e3) {
                    var t3 = e3.title;
                    return h.createElement("div", { className: De.Z.locals["process-message"] }, h.createElement(Ae, null), h.createElement("span", { className: De.Z.locals.message }, t3));
                };
                var ze, je;
                !function (e3) {
                    e3.START = "captureActionTypes.START", e3.ADD_CAPTURE = "captureActionTypes.ADD_CAPTURE", e3.RESET = "captureActionTypes.RESET", e3.FAILED = "captureActionTypes.FAILED", e3.SUCCESS = "captureActionTypes.SUCCESS", e3.SET_STREAM_STATUS = "captureActionTypes.SET_STREAM_STATUS", e3.SET_FD_RESPONSE = "captureActionTypes.SET_FD_RESPONSE", e3.SET_FL_RESPONSE = "captureActionTypes.SET_FL_RESPONSE";
                }(ze || (ze = {})), function (e3) {
                    e3.SET_STREAM_STATUS = "documentReaderActionTypes.SET_STREAM_STATUS", e3.SET_STATUS = "documentReaderActionTypes.SET_STATUS", e3.SET_RESPONSE = "documentReaderActionTypes.SET_RESPONSE", e3.SET_FILE_IMAGE = "documentReaderActionTypes.SET_FILE_IMAGE", e3.RESET = "documentReaderActionTypes.RESET";
                }(je || (je = {}));
                var Ue = n2(303);
                const Be = function (e3) {
                    var t3 = e3.onClick, n3 = (0, re.useLocalize)().translate;
                    return h.createElement("div", { className: Ue.Z.locals["retry-screen"] }, h.createElement("div", { className: Ue.Z.locals.text }, h.createElement("p", { className: Ue.Z.locals.title }, n3("faceLivenessRetryScreenTitle")), h.createElement("p", { className: Ue.Z.locals.subtitle }, n3("faceLivenessRetryScreenSubtitle"))), h.createElement("div", { className: Ue.Z.locals.icons }, h.createElement("div", { className: Ue.Z.locals["icon-item"] }, h.createElement(_e, null), h.createElement("p", { className: Ue.Z.locals["icon-subtitle"] }, n3("livenessRetry_text_noSmiling"))), h.createElement("div", { className: Ue.Z.locals["icon-item"] }, h.createElement(we, null), h.createElement("p", { className: Ue.Z.locals["icon-subtitle"] }, n3("livenessRetry_text_noGlare")))), h.createElement(Pe, { onClick: t3 }, n3("faceLivenessScreenButton")));
                };
                var Ve = n2(391);
                const Ze = function (e3) {
                    var t3 = e3.onClick, n3 = e3.icon, r2 = e3.title, a2 = e3.subtitle, o2 = (0, re.useLocalize)().translate;
                    return h.createElement("div", { className: Ve.Z.locals["instruction-window"] }, h.createElement("div", { className: Ve.Z.locals.text }, h.createElement("p", { className: Ve.Z.locals.title }, r2), h.createElement("p", { className: Ve.Z.locals.subtitle }, a2)), h.createElement(xe, { type: n3 }), h.createElement(Pe, { onClick: t3 }, o2("faceLivenessInstructionScreenButton")));
                };
                function He(e3, t3) {
                    var n3 = Object.keys(e3);
                    if (Object.getOwnPropertySymbols) {
                        var r2 = Object.getOwnPropertySymbols(e3);
                        t3 && (r2 = r2.filter(function (t4) {
                            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                        })), n3.push.apply(n3, r2);
                    }
                    return n3;
                }
                function Ge(e3) {
                    for (var t3 = 1; t3 < arguments.length; t3++) {
                        var n3 = arguments[t3] != null ? arguments[t3] : {};
                        t3 % 2 ? He(Object(n3), true).forEach(function (t4) {
                            Q(e3, t4, n3[t4]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : He(Object(n3)).forEach(function (t4) {
                            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
                        });
                    }
                    return e3;
                }
                function We(e3) {
                    return e3 === L.eFL_Status_Finished ? D.PROCESSING_REQUEST : e3 === L.eFL_Status_Timeout || e3 === L.eFL_Status_Failed ? D.FAILED : D.CAPTURING;
                }
                const qe = function () {
                    var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.8, t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1.35, n3 = { scale: e3, complitionStatus: D.INSTRUCTION, videoStatus: N.PREPARING, tryCount: 1, request: null, capture: [], response: { code: -1 }, images: [] };
                    return h.useReducer(function (r2, a2) {
                        switch (a2.type) {
                            case ze.SET_FD_RESPONSE:
                                return Ge(Ge({}, r2), {}, { complitionStatus: a2.payload.status === L.eFL_Status_InProcess && a2.payload.processingStage === w.eFL_ProcessingStage_Near ? D.SUCCESS : We(a2.payload.status), capture: a2.payload.raw });
                            case ze.SET_FL_RESPONSE:
                                return Ge(Ge({}, r2), {}, { complitionStatus: We(a2.payload.status), request: !r2.request && a2.payload.request, scale: a2.payload.processingStage === w.eFL_ProcessingStage_Far ? e3 : t3, images: a2.payload.images });
                            case ze.START:
                                return Ge(Ge({}, r2), {}, { complitionStatus: D.CAPTURING });
                            case ze.FAILED:
                                return Ge(Ge({}, r2), {}, { complitionStatus: D.FAILED, response: a2.payload ? a2.payload : r2.response });
                            case ze.SUCCESS:
                                return Ge(Ge({}, r2), {}, { complitionStatus: D.SUCCESS, response: a2.payload ? a2.payload : r2.response });
                            case ze.SET_STREAM_STATUS:
                                return Ge(Ge({}, r2), {}, { complitionStatus: a2.payload === N.PERMISSION_DENIED || a2.payload === N.UNKNOWN_ERROR || a2.payload === N.NO_CAMERA ? D.FAILED : r2.complitionStatus, videoStatus: a2.payload });
                            case ze.RESET:
                                return Ge(Ge({}, n3), {}, { tryCount: r2.tryCount + 1 });
                            default:
                                return r2;
                        }
                    }, n3);
                }, Ke = { ru: JSON.parse('{"strPrepareCamera":"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A\u0430\u043C\u0435\u0440\u044B...","hint_fit":"\u041F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u043B\u0438\u0446\u043E \u0432 \u043E\u0432\u0430\u043B","hint_stayStill":"\u041D\u0435 \u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435\u0441\u044C","livenessProcessing_title_processing":"\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430...","hint_lookStraight":"\u0421\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043F\u0440\u044F\u043C\u043E","hint_moveCloser":"\u041F\u043E\u0434\u0432\u0438\u043D\u044C\u0442\u0435\u0441\u044C \u0431\u043B\u0438\u0436\u0435","hint_moveAway":"\u041E\u0442\u043E\u0434\u0432\u0438\u043D\u044C\u0442\u0435\u0441\u044C \u043F\u043E\u0434\u0430\u043B\u044C\u0448\u0435","livenessRetry_text_noSmiling":"\u0412\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043B\u0438\u0446\u0430 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E (\u043D\u0435 \u0443\u043B\u044B\u0431\u0430\u0439\u0442\u0435\u0441\u044C)","livenessRetry_text_noGlare":"\u041E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u044F\u0440\u043A\u043E\u0435/\u0442\u0443\u0441\u043A\u043B\u043E\u0435, \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0431\u043B\u0438\u043A\u0438","faceLivenessInstructionScreenTitle":"\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443","faceLivenessInstructionScreenSubtitle":"\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u0441\u044C \u043F\u0435\u0440\u0435\u0434 \u043A\u0430\u043C\u0435\u0440\u043E\u0439 \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043B\u0438\u0446\u043E \u043E\u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u043E\u0432\u0430\u043B\u0430, \u043F\u043E\u0441\u043B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u0430 \u043E\u0432\u0430\u043B\u0430 \u2013 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u044C\u0442\u0435\u0441\u044C.","faceLivenessInstructionScreenButton":"\u041D\u0430\u0447\u0430\u0442\u044C","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043A\u0430\u043C\u0435\u0440\u0435","messageUnknownError":"\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A","faceLivenessCameraLayoutMessageLabelsDetecting":"\u041F\u043E\u0438\u0441\u043A \u043B\u0438\u0446\u0430...","faceLivenessCameraLayoutPreparingService":"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0441\u0435\u0440\u0432\u0438\u0441\u0430...","faceLivenessInfoScreenVerifiedTitle":"\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043E!","faceLivenessInfoScreenVerifiedSubtitle":"\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u043E\u0448\u043B\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0443.","statusSuccess":"\u0413\u043E\u0442\u043E\u0432\u043E!","statusCameraUnavailableTitle":"\u041A\u0430\u043C\u0435\u0440\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430!","statusCameraUnavailableSubtitle":"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043A\u0430\u043C\u0435\u0440\u0435 \u0438 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u044D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u044F.","statusError":"\u041E\u0448\u0438\u0431\u043A\u0430!","faceLivenessScreenButton":"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443","InfoScreenNoCameraTitle":"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u0430\u043C\u0435\u0440\u0430","faceLivenessInfoScreenNoCameraSubtitle":"\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A\u0430\u043C\u0435\u0440\u044B \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430.","faceLivenessRetryScreenTitle":"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0435\u0449\u0435 \u0440\u0430\u0437","faceLivenessRetryScreenSubtitle":"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043B\u0435\u0434\u0443\u0439\u0442\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F\u043C","faceDetectionInstructionScreenTitle":"\u0421\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0441\u0435\u043B\u0444\u0438","faceDetectionInstructionScreenSubtitle":"\u041F\u043E\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0441\u0432\u043E\u0435 \u043B\u0438\u0446\u043E \u0432 \u0446\u0435\u043D\u0442\u0440 \u043E\u0432\u0430\u043B\u0430 \u0438 \u043D\u0435 \u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435\u0441\u044C. \u041C\u044B \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0432\u0441\u0435 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435.","faceInfoScreenSuccessSubtitle":"\u0421\u043D\u0438\u043C\u043E\u043A \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D.","documentReaderDocumentReaderStartScreenTitle":"\u041E\u0442\u0441\u043A\u0430\u043D\u0438\u0440\u0443\u0439\u0442\u0435 ID-\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0432 \u0432\u0430\u0448\u0435\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435","documentReaderDocumentReaderStartScreenSubtitle":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u0430\u043C\u0435\u0440\u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0434\u043B\u044F \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0438\u0437 \u0433\u0430\u043B\u0435\u0440\u0435\u0438","documentReaderDocumentReaderStartScreenButtonCamera":"\u0421 \u043A\u0430\u043C\u0435\u0440\u044B","documentReaderDocumentReaderStartScreenButtonGallery":"\u0418\u0437 \u0433\u0430\u043B\u0435\u0440\u0435\u0438","documentReaderDocumentReaderLayoutConnectionProblem":"\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u043A\u0430\u043C\u0435\u0440\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E.","documentReaderDocumentReaderLayoutInitializing":"\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0441\u0435\u0440\u0432\u0438\u0441\u0430...","documentReaderDocumentReaderLayoutProcessing":"\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430...","documentReaderDocumentReaderLayoutDocumentCenter":"\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435","documentReaderDocumentReaderLayoutFlipDocument":"\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442","documentReaderInfoScreenSuccessSubtitle":"\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430.","cameraCaptureCameraCaptureStartScreenTitle":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043E\u0442\u043E","cameraCaptureCameraCaptureStartScreenSubtitle":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u0430\u043C\u0435\u0440\u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u0438\u043B\u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E \u0438\u0437 \u0433\u0430\u043B\u0435\u0440\u0435\u0438","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0438 \u0441\u0434\u0435\u043B\u0430\u0439\u0442\u0435 \u0444\u043E\u0442\u043E","documentReaderDocumentReaderLayoutStartDetection":"\u041F\u043E\u0438\u0441\u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430..."}'), en: JSON.parse(`{"strPrepareCamera":"Preparing the camera...","hint_fit":"Fit your face in the oval","hint_stayStill":"Hold steady","livenessProcessing_title_processing":"Processing...","hint_lookStraight":"Look straight","hint_moveCloser":"Move closer","hint_moveAway":"Move away","livenessRetry_text_noSmiling":"Neutral expression, no smiling","livenessRetry_text_noGlare":"No glare or extreme lighting","faceLivenessInstructionScreenTitle":"Start liveness verification","faceLivenessInstructionScreenSubtitle":"Position your face in the center of the oval & move closer when the size of the frame is changed.","faceLivenessInstructionScreenButton":"Get started","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Allow access to the camera","messageUnknownError":"Something went wrong","faceLivenessCameraLayoutMessageLabelsDetecting":"Detecting a face...","faceLivenessCameraLayoutPreparingService":"Preparing the service...","faceLivenessInfoScreenVerifiedTitle":"Verified!","faceLivenessInfoScreenVerifiedSubtitle":"You have successfully passed the liveness check.","statusSuccess":"Success!","statusCameraUnavailableTitle":"Camera unavailable!","statusCameraUnavailableSubtitle":"Allow access to the camera and reload this page to continue.","statusError":"Error!","faceLivenessScreenButton":"Try again","InfoScreenNoCameraTitle":"No camera available","faceLivenessInfoScreenNoCameraSubtitle":"Check the camera connection and try again.","faceLivenessRetryScreenTitle":"Let's try that again","faceLivenessRetryScreenSubtitle":"Please follow the guidelines","faceDetectionInstructionScreenTitle":"Take a selfie","faceDetectionInstructionScreenSubtitle":"Position your face in the center of the oval and hold steady. We'll do the rest.","faceInfoScreenSuccessSubtitle":"The photo is captured successfully.","documentReaderDocumentReaderStartScreenTitle":"Scan an ID in your browser","documentReaderDocumentReaderStartScreenSubtitle":"Use your device camera to scan a document or select a photo of the document from the gallery","documentReaderDocumentReaderStartScreenButtonCamera":"From \u0441amera","documentReaderDocumentReaderStartScreenButtonGallery":"From gallery","documentReaderDocumentReaderLayoutConnectionProblem":"Make sure the camera is connected correctly.","documentReaderDocumentReaderLayoutInitializing":"Initializing the service...","documentReaderDocumentReaderLayoutProcessing":"Document processing...","documentReaderDocumentReaderLayoutDocumentCenter":"Position the document in the center","documentReaderDocumentReaderLayoutFlipDocument":"Flip the document","documentReaderInfoScreenSuccessSubtitle":"Processing finished.","cameraCaptureCameraCaptureStartScreenTitle":"Upload a photo","cameraCaptureCameraCaptureStartScreenSubtitle":"Use your device camera or select a photo from the gallery","cameraCaptureCameraCaptureLayoutDocumentCenter":"Position the document in the center and take a photo","documentReaderDocumentReaderLayoutStartDetection":"Detecting a document..."}`), de: JSON.parse(`{"strPrepareCamera":"Kamera wird vorbereitet...","hint_fit":"Gesicht in das Oval einpassen","hint_stayStill":"Nicht bewegen","livenessProcessing_title_processing":"Bearbeitung...","hint_lookStraight":"Geradeaus schauen","hint_moveCloser":"N\xE4her an die Kamera","hint_moveAway":"Weiter von der Kamera","livenessRetry_text_noSmiling":"Neutraler Ausdruck, kein L\xE4cheln","livenessRetry_text_noGlare":"Keine Blendung oder extreme Beleuchtung","faceLivenessInstructionScreenTitle":"Liveness-Verifizierung starten","faceLivenessInstructionScreenSubtitle":"Positionieren Sie Ihr Gesicht in der Mitte des Ovals und r\xFCcken Sie n\xE4her heran, wenn die Gr\xF6\xDFe des Rahmens sich \xE4ndert.","faceLivenessInstructionScreenButton":"Los geht's","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Erlauben Sie den Zugriff auf die Kamera","messageUnknownError":"Etwas ist schief gelaufen","faceLivenessCameraLayoutMessageLabelsDetecting":"Suche nach Gesicht...","faceLivenessCameraLayoutPreparingService":"Service wird vorbereitet...","faceLivenessInfoScreenVerifiedTitle":"Verifiziert!","faceLivenessInfoScreenVerifiedSubtitle":"Sie haben den Liveness-Check erfolgreich bestanden.","statusSuccess":"Erfolgreich!","statusCameraUnavailableTitle":"Kamera nicht verf\xFCgbar!","statusCameraUnavailableSubtitle":"Erlauben Sie den Zugriff auf die Kamera und laden Sie diese Seite neu, um fortzufahren.","statusError":"Fehler!","faceLivenessScreenButton":"Erneut versuchen","InfoScreenNoCameraTitle":"Keine Kamera vorhanden","faceLivenessInfoScreenNoCameraSubtitle":"\xDCberpr\xFCfen Sie die Kameraverbindung und versuchen Sie es erneut.","faceLivenessRetryScreenTitle":"Nochmal wiederholen","faceLivenessRetryScreenSubtitle":"Folgen Sie bitte den Anweisungen","faceDetectionInstructionScreenTitle":"Machen Sie ein Selfie","faceDetectionInstructionScreenSubtitle":"Positionieren Sie Ihr Gesicht in der Mitte des Ovals und halten still. Wir machen den Rest.","faceInfoScreenSuccessSubtitle":"Das Foto wurde erfolgreich aufgenommen.","documentReaderDocumentReaderStartScreenTitle":"Scannen Sie eine ID in Ihrem Browser","documentReaderDocumentReaderStartScreenSubtitle":"Verwenden Sie die Kamera Ihres Ger\xE4ts, um ein Dokument zu scannen, oder w\xE4hlen Sie ein Foto des Dokuments in der Galerie aus.","documentReaderDocumentReaderStartScreenButtonCamera":"Von Kamera","documentReaderDocumentReaderStartScreenButtonGallery":"Von Gallerie","documentReaderDocumentReaderLayoutConnectionProblem":"Stellen Sie sicher, dass die Kamera richtig angeschlossen ist.","documentReaderDocumentReaderLayoutInitializing":"Service wird initialisiert...","documentReaderDocumentReaderLayoutProcessing":"Dokument in Bearbeitung...","documentReaderDocumentReaderLayoutDocumentCenter":"Positionieren Sie das Dokument in der Mitte","documentReaderDocumentReaderLayoutFlipDocument":"Dokument drehen","documentReaderInfoScreenSuccessSubtitle":"Bearbeitung abgeschlossen.","cameraCaptureCameraCaptureStartScreenTitle":"Foto hochladen","cameraCaptureCameraCaptureStartScreenSubtitle":"Verwenden Sie die Kamera Ihres Ger\xE4ts oder w\xE4hlen Sie ein Foto aus der Galerie aus","cameraCaptureCameraCaptureLayoutDocumentCenter":"Positionieren Sie das Dokument in der Mitte und machen ein Foto","documentReaderDocumentReaderLayoutStartDetection":"Suche nach Dokument..."}`), pl: JSON.parse('{"strPrepareCamera":"Przygotowywanie kamery...","hint_fit":"Umie\u015B\u0107 twarz w owalu","hint_stayStill":"Nie ruszaj si\u0119","livenessProcessing_title_processing":"Przetwarzanie...","hint_lookStraight":"Patrz prosto","hint_moveCloser":"Przysu\u0144 si\u0119 bli\u017Cej","hint_moveAway":"Odsu\u0144 si\u0119 dalej","livenessRetry_text_noSmiling":"Wyraz twarzy jest naturalny (nie u\u015Bmiechaj si\u0119)","livenessRetry_text_noGlare":"O\u015Bwietlenie nie jest zbyt jasne/s\u0142abe, nie ma odblask\xF3w","faceLivenessInstructionScreenTitle":"Rozpocznij weryfikacj\u0119","faceLivenessInstructionScreenSubtitle":"Sta\u0144 przed obiektywem tak, aby twarz okaza\u0142a si\u0119 po\u015Brodku owalu, po zmianie rozmiaru owalu \u2013 przybli\u017C si\u0119.","faceLivenessInstructionScreenButton":"Rozpocznij","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Zezw\xF3l na dost\u0119p do aparatu","messageUnknownError":"Co\u015B posz\u0142o nie tak","faceLivenessCameraLayoutMessageLabelsDetecting":"Wyszukiwanie twarzy...","faceLivenessCameraLayoutPreparingService":"Przygotowanie serwisu...","faceLivenessInfoScreenVerifiedTitle":"Zweryfikowano!","faceLivenessInfoScreenVerifiedSubtitle":"Weryfikacja zako\u0144czona pomy\u015Blnie.","statusSuccess":"Gotowe!","statusCameraUnavailableTitle":"Aparat jest niedost\u0119pny!","statusCameraUnavailableSubtitle":"Zezw\xF3l na dost\u0119p do aparatu i od\u015Bwie\u017C t\u0119 stron\u0119, aby kontynuowa\u0107.","statusError":"B\u0142\u0105d!","faceLivenessScreenButton":"Powt\xF3rz pr\xF3b\u0119","InfoScreenNoCameraTitle":"Brak aparatu","faceLivenessInfoScreenNoCameraSubtitle":"Sprawd\u017A, czy aparat jest w\u0142\u0105czony i spr\xF3buj ponownie.","faceLivenessRetryScreenTitle":"Spr\xF3bujmy jeszcze raz","faceLivenessRetryScreenSubtitle":"Post\u0119puj zgodnie z zaleceniami","faceDetectionInstructionScreenTitle":"Zr\xF3b selfie","faceDetectionInstructionScreenSubtitle":"Umie\u015B\u0107 swoj\u0105 twarz po\u015Brodku owalu i nie ruszaj si\u0119. Reszt\u0119 zrobimy my.","faceInfoScreenSuccessSubtitle":"Zdj\u0119cie wykonano pomy\u015Blnie.","documentReaderDocumentReaderStartScreenTitle":"Zeskanuj dokument ID w swojej wyszukiwarce","documentReaderDocumentReaderStartScreenSubtitle":"U\u017Cyj aparatu w swoim urz\u0105dzeniu do skanowania dokumentu albo wybierz zdj\u0119cie dokumentu z galerii","documentReaderDocumentReaderStartScreenButtonCamera":"Z aparatu","documentReaderDocumentReaderStartScreenButtonGallery":"Z galerii","documentReaderDocumentReaderLayoutConnectionProblem":"Upewnij si\u0119, \u017Ce aparat jest pod\u0142\u0105czony prawid\u0142owo.","documentReaderDocumentReaderLayoutInitializing":"Inicjalizacja serwisu...","documentReaderDocumentReaderLayoutProcessing":"Przetwarzanie dokumentu...","documentReaderDocumentReaderLayoutDocumentCenter":"Umie\u015B\u0107 dokument po\u015Brodku","documentReaderDocumentReaderLayoutFlipDocument":"Odwr\xF3\u0107 dokument","documentReaderInfoScreenSuccessSubtitle":"Przetwarzanie dokumentu zako\u0144czone.","cameraCaptureCameraCaptureStartScreenTitle":"Za\u0142aduj zdj\u0119cie","cameraCaptureCameraCaptureStartScreenSubtitle":"U\u017Cyj aparatu w swoim urz\u0105dzeniu albo wybierz zdj\u0119cie z galerii","cameraCaptureCameraCaptureLayoutDocumentCenter":"Umie\u015B\u0107 dokument po\u015Brodku i zr\xF3b zdj\u0119cie","documentReaderDocumentReaderLayoutStartDetection":"Wyszukiwanie dokumentu..."}'), it: JSON.parse(`{"strPrepareCamera":"Preparazione della fotocamera in corso...","hint_fit":"Adatta il viso all'ovale","hint_stayStill":"Stai fermo","livenessProcessing_title_processing":"Elaborazione...","hint_lookStraight":"Guarda dritto","hint_moveCloser":"Avvicinati","hint_moveAway":"Allontanati","livenessRetry_text_noSmiling":"Espressione neutra, nessun sorriso","livenessRetry_text_noGlare":"Nessun riflesso o illuminazione estrema","faceLivenessInstructionScreenTitle":"Inizia verifica liveness","faceLivenessInstructionScreenSubtitle":"Posiziona il tuo viso al centro dell'ovale e avvicinati quando la dimensione della cornice viene modificata.","faceLivenessInstructionScreenButton":"Cominciamo","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Consenti l'accesso alla fotocamera","messageUnknownError":"Qualcosa \xE8 andato storto","faceLivenessCameraLayoutMessageLabelsDetecting":"Rilevamento di un volto...","faceLivenessCameraLayoutPreparingService":"Preparazione del servizio...","faceLivenessInfoScreenVerifiedTitle":"Verificato!","faceLivenessInfoScreenVerifiedSubtitle":"Hai superato con successo il liveness check.","statusSuccess":"L'operazione \xE8 andata a buon fine!","statusCameraUnavailableTitle":"Fotocamera non disponibile!","statusCameraUnavailableSubtitle":"Consenti l'accesso alla fotocamera e ricarica questa pagina per continuare.","statusError":"Errore!","faceLivenessScreenButton":"Prova di nuovo","InfoScreenNoCameraTitle":"Non c'\xE8 la fotocamera","faceLivenessInfoScreenNoCameraSubtitle":"Controlla la connessione della fotocamera e riprova.","faceLivenessRetryScreenTitle":"Prova a ripeterlo un'altra volta","faceLivenessRetryScreenSubtitle":"Per favore segui le linee guida","faceDetectionInstructionScreenTitle":"Fai un selfie","faceDetectionInstructionScreenSubtitle":"Posiziona il viso al centro dell'ovale e tienilo fermo. Noi faremo il resto.","faceInfoScreenSuccessSubtitle":"La foto \xE8 stata scattata con successo.","documentReaderDocumentReaderStartScreenTitle":"Scansiona un ID nel browser","documentReaderDocumentReaderStartScreenSubtitle":"Usa la fotocamera del tuo dispositivo per scansionare un documento o seleziona una foto del documento dalla galleria","documentReaderDocumentReaderStartScreenButtonCamera":"Dalla fotocamera","documentReaderDocumentReaderStartScreenButtonGallery":"Dalla galleria","documentReaderDocumentReaderLayoutConnectionProblem":"Assicurati che la fotocamera sia collegata correttamente.","documentReaderDocumentReaderLayoutInitializing":"Avvio del servizio...","documentReaderDocumentReaderLayoutProcessing":"Elaborazione dei documenti in corso...","documentReaderDocumentReaderLayoutDocumentCenter":"Posiziona il documento al centro","documentReaderDocumentReaderLayoutFlipDocument":"Capovolgi il documento","documentReaderInfoScreenSuccessSubtitle":"Elaborazione finita.","cameraCaptureCameraCaptureStartScreenTitle":"Carica una foto","cameraCaptureCameraCaptureStartScreenSubtitle":"Usa la fotocamera del tuo dispositivo o seleziona una foto dalla galleria","cameraCaptureCameraCaptureLayoutDocumentCenter":"Posiziona il documento al centro e scatta una foto","documentReaderDocumentReaderLayoutStartDetection":"Rilevamento di un documento..."}`), ch: JSON.parse('{"strPrepareCamera":"\u6B63\u5728\u51C6\u5907\u76F8\u673A","hint_fit":"\u4F7F\u60A8\u7684\u8138\u9002\u5408\u692D\u5706\u5F62","hint_stayStill":"\u6301\u7A33","livenessProcessing_title_processing":"\u5904\u7406\u4E2D...","hint_lookStraight":"\u76F4\u770B","hint_moveCloser":"\u9760\u8FD1\u70B9","hint_moveAway":"\u79FB\u5F00","livenessRetry_text_noSmiling":"\u4E2D\u7ACB\u7684\u8868\u60C5\uFF0C\u6CA1\u6709\u5FAE\u7B11","livenessRetry_text_noGlare":"\u6CA1\u6709\u7729\u5149\u6216\u6781\u7AEF\u7167\u660E","faceLivenessInstructionScreenTitle":"Liveness\u9A8C\u8BC1\u5F00\u59CB","faceLivenessInstructionScreenSubtitle":"\u5C06\u60A8\u7684\u8138\u653E\u5728\u692D\u5706\u5F62\u7684\u4E2D\u5FC3\uFF0C\u5E76\u5728\u6846\u67B6\u5927\u5C0F\u6539\u53D8\u65F6\u9760\u8FD1\u3002","faceLivenessInstructionScreenButton":"\u5F00\u59CB","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u5141\u8BB8\u8BBF\u95EE\u76F8\u673A","messageUnknownError":"\u51FA\u4E86\u95EE\u9898","faceLivenessCameraLayoutMessageLabelsDetecting":"\u68C0\u6D4B\u4EBA\u8138...","faceLivenessCameraLayoutPreparingService":"\u6B63\u5728\u51C6\u5907\u670D\u52A1...","faceLivenessInfoScreenVerifiedTitle":"\u5DF2\u9A8C\u8BC1\uFF01","faceLivenessInfoScreenVerifiedSubtitle":"\u60A8\u5DF2\u6210\u529F\u901A\u8FC7liveness\u68C0\u67E5\u3002","statusSuccess":"\u6210\u529F\uFF01","statusCameraUnavailableTitle":"\u76F8\u673A\u4E0D\u53EF\u7528\uFF01","statusCameraUnavailableSubtitle":"\u5141\u8BB8\u8BBF\u95EE\u76F8\u673A\u5E76\u91CD\u65B0\u52A0\u8F7D\u6B64\u9875\u9762\u4EE5\u7EE7\u7EED\u3002","statusError":"\u9519\u8BEF\uFF01","faceLivenessScreenButton":"\u518D\u8BD5\u4E00\u6B21","InfoScreenNoCameraTitle":"\u6CA1\u6709\u76F8\u673A","faceLivenessInfoScreenNoCameraSubtitle":"\u68C0\u67E5\u76F8\u673A\u7684\u8FDE\u63A5\uFF0C\u518D\u8BD5\u4E00\u6B21\u3002","faceLivenessRetryScreenTitle":"\u518D\u8BD5\u4E00\u6B21","faceLivenessRetryScreenSubtitle":"\u8BF7\u9075\u5FAA\u51C6\u5219","faceDetectionInstructionScreenTitle":"\u81EA\u62CD\u4E00\u5F20","faceDetectionInstructionScreenSubtitle":"\u5C06\u4F60\u7684\u8138\u653E\u5728\u692D\u5706\u5F62\u7684\u4E2D\u5FC3\uFF0C\u5E76\u4FDD\u6301\u7A33\u5B9A\u3002\u5F62\u7684\u4E2D\u5FC3\u5269\u4E0B\u7684\u6211\u4EEC\u6765\u505A\u3002","faceInfoScreenSuccessSubtitle":"\u7167\u7247\u62CD\u6444\u6210\u529F\u3002","documentReaderDocumentReaderStartScreenTitle":"\u5728\u6D4F\u89C8\u5668\u4E2D\u626B\u63CF\u8EAB\u4EFD\u8BC1\u4EF6","documentReaderDocumentReaderStartScreenSubtitle":"\u4F7F\u7528\u60A8\u7684\u8BBE\u5907\u76F8\u673A\u626B\u63CF\u8BC1\u4EF6\u6216\u4ECE\u56FE\u5E93\u4E2D\u9009\u62E9\u8BC1\u4EF6\u7684\u7167\u7247","documentReaderDocumentReaderStartScreenButtonCamera":"\u4ECE\u76F8\u673A","documentReaderDocumentReaderStartScreenButtonGallery":"\u6765\u81EA\u624B\u673A\u56FE\u5E93","documentReaderDocumentReaderLayoutConnectionProblem":"\u786E\u4FDD\u76F8\u673A\u8FDE\u63A5\u6B63\u786E\u3002","documentReaderDocumentReaderLayoutInitializing":"\u6B63\u5728\u521D\u59CB\u5316\u670D\u52A1...","documentReaderDocumentReaderLayoutProcessing":"\u8BC1\u4EF6\u5904\u7406...","documentReaderDocumentReaderLayoutDocumentCenter":"\u5C06\u8BC1\u4EF6\u7F6E\u4E8E\u4E2D\u5FC3","documentReaderDocumentReaderLayoutFlipDocument":"\u7FFB\u8F6C\u8BC1\u4EF6","documentReaderInfoScreenSuccessSubtitle":"\u5904\u7406\u5B8C\u6BD5\u3002","cameraCaptureCameraCaptureStartScreenTitle":"\u4E0A\u4F20\u4E00\u5F20\u7167\u7247","cameraCaptureCameraCaptureStartScreenSubtitle":"\u4F7F\u7528\u60A8\u7684\u8BBE\u5907\u76F8\u673A\u6216\u4ECE\u56FE\u5E93\u4E2D\u9009\u62E9\u4E00\u5F20\u7167\u7247","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u5C06\u8BC1\u4EF6\u653E\u5728\u4E2D\u592E\u5E76\u62CD\u7167","documentReaderDocumentReaderLayoutStartDetection":"\u68C0\u6D4B\u8BC1\u4EF6..."}'), fr: JSON.parse(`{"strPrepareCamera":"Cam\xE9ra en pr\xE9paration...","hint_fit":"Ajustez votre visage dans l'ovale","hint_stayStill":"Ne bougez plus","livenessProcessing_title_processing":"Analyse...","hint_lookStraight":"Regardez la cam\xE9ra","hint_moveCloser":"Rapprochez","hint_moveAway":"Eloignez","livenessRetry_text_noSmiling":"Expression neutre, pas de sourire","livenessRetry_text_noGlare":"Eviter reflets et forte luminosit\xE9","faceLivenessInstructionScreenTitle":"Lance la v\xE9rification de pr\xE9sence vivante","faceLivenessInstructionScreenSubtitle":"Positionnez votre visage au centre de l'ovale, et rapprochez-vous lorsque la dimension du cadre change.","faceLivenessInstructionScreenButton":"Lancer","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Autoriser l'acc\xE8s \xE0 la cam\xE9ra","messageUnknownError":"Anomalie","faceLivenessCameraLayoutMessageLabelsDetecting":"D\xE9tection du visage...","faceLivenessCameraLayoutPreparingService":"Pr\xE9paration...","faceLivenessInfoScreenVerifiedTitle":"V\xE9rifi\xE9!","faceLivenessInfoScreenVerifiedSubtitle":"Test de pr\xE9sence vivante r\xE9ussi.","statusSuccess":"R\xE9ussi!","statusCameraUnavailableTitle":"Cam\xE9ra indisponible!","statusCameraUnavailableSubtitle":"Autoriser l'acc\xE8s \xE0 la cam\xE9ra, et recharger cette page pour continuer.","statusError":"Erreur!","faceLivenessScreenButton":"R\xE9essayer","InfoScreenNoCameraTitle":"Cam\xE9ra introuvable","faceLivenessInfoScreenNoCameraSubtitle":"V\xE9rifier la connexion \xE0 la cam\xE9ra et r\xE9essayer.","faceLivenessRetryScreenTitle":"R\xE9essayons","faceLivenessRetryScreenSubtitle":"Veuillez suivre les instructions","faceDetectionInstructionScreenTitle":"Prendre un selfie","faceDetectionInstructionScreenSubtitle":"Positionnez votre visage au centre de l'ovale, ne bougez plus. Nous nous occupons du reste...","faceInfoScreenSuccessSubtitle":"Photo correcte.","documentReaderDocumentReaderStartScreenTitle":"Scannez une pi\xE8ce d'identit\xE9","documentReaderDocumentReaderStartScreenSubtitle":"Utilisez la cam\xE9ra de votre mobile pour scanner un document, ou s\xE9lectionnez une photo du document dans la galerie","documentReaderDocumentReaderStartScreenButtonCamera":"Depuis la \u0441am\xE9ra","documentReaderDocumentReaderStartScreenButtonGallery":"Depuis la galerie","documentReaderDocumentReaderLayoutConnectionProblem":"Assurez-vous que la cam\xE9ra est correctement connect\xE9e.","documentReaderDocumentReaderLayoutInitializing":"Initialisation du service...","documentReaderDocumentReaderLayoutProcessing":"Analyse du document...","documentReaderDocumentReaderLayoutDocumentCenter":"Positionner le document au centre","documentReaderDocumentReaderLayoutFlipDocument":"Inverser le document","documentReaderInfoScreenSuccessSubtitle":"Termin\xE9.","cameraCaptureCameraCaptureStartScreenTitle":"Envoyez une photo","cameraCaptureCameraCaptureStartScreenSubtitle":"Utilisez la cam\xE9ra de votre appareil, ou s\xE9lectionnez une photo dans la galerie","cameraCaptureCameraCaptureLayoutDocumentCenter":"Positionez le document au centre, et prenez une photo","documentReaderDocumentReaderLayoutStartDetection":"D\xE9tection d'un document..."}`), es: JSON.parse('{"strPrepareCamera":"Preparando la c\xE1mara...","hint_fit":"Coloque su rostro en el \xF3valo","hint_stayStill":"Qu\xE9dese quieto","livenessProcessing_title_processing":"Procesamiento...","hint_lookStraight":"Mire hacia adelante","hint_moveCloser":"Ac\xE9rquese","hint_moveAway":"Al\xE9jese","livenessRetry_text_noSmiling":"Mantenga expresi\xF3n neutra, sin sonrisa","livenessRetry_text_noGlare":"No haya brillo o iluminaci\xF3n extrema","faceLivenessInstructionScreenTitle":"Inicie la verificaci\xF3n liveness","faceLivenessInstructionScreenSubtitle":"Coloque su cara en el centro del \xF3valo y ac\xE9rquese cuando cambie el tama\xF1o del marco.","faceLivenessInstructionScreenButton":"Empezar","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Permita el acceso a la c\xE1mara","messageUnknownError":"Algo sali\xF3 mal","faceLivenessCameraLayoutMessageLabelsDetecting":"Detectando un rostro...","faceLivenessCameraLayoutPreparingService":"Preparando el servicio...","faceLivenessInfoScreenVerifiedTitle":"\xA1Verificado!","faceLivenessInfoScreenVerifiedSubtitle":"Ha realizado con \xE9xito la comprobaci\xF3n liveness.","statusSuccess":"\xA1Listo!","statusCameraUnavailableTitle":"\xA1C\xE1mara no disponible!","statusCameraUnavailableSubtitle":"Permita el acceso a la c\xE1mara y recargue esta p\xE1gina para continuar.","statusError":"\xA1Error!","faceLivenessScreenButton":"Int\xE9ntelo de nuevo","InfoScreenNoCameraTitle":"No hay c\xE1mara disponible","faceLivenessInfoScreenNoCameraSubtitle":"Compruebe la conexi\xF3n de la c\xE1mara y vuelva a intentarlo.","faceLivenessRetryScreenTitle":"Intent\xE9moslo de nuevo","faceLivenessRetryScreenSubtitle":"Por favor, siga las directrices","faceDetectionInstructionScreenTitle":"T\xF3mese un selfie","faceDetectionInstructionScreenSubtitle":"Coloque su rostro en el centro del \xF3valo y qu\xE9dese quieto. Nosotros haremos el resto.","faceInfoScreenSuccessSubtitle":"La foto se ha capturado con \xE9xito.","documentReaderDocumentReaderStartScreenTitle":"Escanee un documento de identidad en su navegador","documentReaderDocumentReaderStartScreenSubtitle":"Utilice la c\xE1mara de su dispositivo para escanear un documento o seleccione una foto del documento de la galer\xEDa","documentReaderDocumentReaderStartScreenButtonCamera":"Desde la c\xE1mara","documentReaderDocumentReaderStartScreenButtonGallery":"Desde la galer\xEDa","documentReaderDocumentReaderLayoutConnectionProblem":"Aseg\xFArese de que la c\xE1mara est\xE1 conectada correctamente.","documentReaderDocumentReaderLayoutInitializing":"Inicializando el servicio...","documentReaderDocumentReaderLayoutProcessing":"Procesando el documento...","documentReaderDocumentReaderLayoutDocumentCenter":"Coloque el documento en el centro","documentReaderDocumentReaderLayoutFlipDocument":"D\xE9le la vuelta al documento","documentReaderInfoScreenSuccessSubtitle":"Procesamiento finalizado.","cameraCaptureCameraCaptureStartScreenTitle":"Suba una foto","cameraCaptureCameraCaptureStartScreenSubtitle":"Utilice la c\xE1mara de su dispositivo o seleccione una foto de la galer\xEDa","cameraCaptureCameraCaptureLayoutDocumentCenter":"Coloque el documento en el centro y tome una foto","documentReaderDocumentReaderLayoutStartDetection":"Detectando un documento..."}'), pt: JSON.parse('{"strPrepareCamera":"Preparando o documento....","hint_fit":"Encaixar o rosto na oval","hint_stayStill":"Mantenha-se im\xF3vel","livenessProcessing_title_processing":"A processar...","hint_lookStraight":"Olhe diretamente","hint_moveCloser":"Aproxime-se","hint_moveAway":"Afaste-se","livenessRetry_text_noSmiling":"Express\xE3o neutra, sem sorrir","livenessRetry_text_noGlare":"Sem brilho ou ilumina\xE7\xE3o extrema","faceLivenessInstructionScreenTitle":"Inicie valida\xE7\xE3o de vida ativa","faceLivenessInstructionScreenSubtitle":"Posicione o seu rosto no centro da oval e aproxime-se quando o tamanho da moldura for alterado.","faceLivenessInstructionScreenButton":"Comece","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Permita o acesso \xE0 c\xE2mara","messageUnknownError":"Algo correu mal","faceLivenessCameraLayoutMessageLabelsDetecting":"Detectando um rosto...","faceLivenessCameraLayoutPreparingService":"Preparando o servi\xE7o...","faceLivenessInfoScreenVerifiedTitle":"Verificado!","faceLivenessInfoScreenVerifiedSubtitle":"Passou com sucesso a valida\xE7\xE3o de vida ativa","statusSuccess":"Sucesso!","statusCameraUnavailableTitle":"C\xE2mara indispon\xEDvel!","statusCameraUnavailableSubtitle":"Permita o acesso \xE0 c\xE2mara e volte a carregar esta p\xE1gina para continuar.","statusError":"Erro!","faceLivenessScreenButton":"Tente outra vez","InfoScreenNoCameraTitle":"N\xE3o h\xE1 c\xE2mara","faceLivenessInfoScreenNoCameraSubtitle":"Verifique a liga\xE7\xE3o da c\xE2mara e tente novamente.","faceLivenessRetryScreenTitle":"Vamos tentar de novo","faceLivenessRetryScreenSubtitle":"Por favor, siga as orienta\xE7\xF5es","faceDetectionInstructionScreenTitle":"Tire uma selfie","faceDetectionInstructionScreenSubtitle":"Posicione o seu rosto no centro da oval e mantenha-se firme. N\xF3s faremos o resto.","faceInfoScreenSuccessSubtitle":"A fotografia \xE9 capturada com sucesso.","documentReaderDocumentReaderStartScreenTitle":"Digitalize um ID no seu navegador","documentReaderDocumentReaderStartScreenSubtitle":"Utilize a c\xE2mara do seu dispositivo para digitalizar um documento ou selecionar uma fotografia do documento na galeria","documentReaderDocumentReaderStartScreenButtonCamera":"Da c\xE2mara","documentReaderDocumentReaderStartScreenButtonGallery":"Da galeria","documentReaderDocumentReaderLayoutConnectionProblem":"Certifique-se de que a c\xE2mara est\xE1 ligada corretamente.","documentReaderDocumentReaderLayoutInitializing":"Iniciar o servi\xE7o ...","documentReaderDocumentReaderLayoutProcessing":"Procesar o documento...","documentReaderDocumentReaderLayoutDocumentCenter":"Posicione o documento no centro","documentReaderDocumentReaderLayoutFlipDocument":"Vire o documento","documentReaderInfoScreenSuccessSubtitle":"Processamento terminado.","cameraCaptureCameraCaptureStartScreenTitle":"Carregue uma foto","cameraCaptureCameraCaptureStartScreenSubtitle":"Utilize a sua m\xE1quina fotogr\xE1fica ou selecione uma fotografia da galeria","cameraCaptureCameraCaptureLayoutDocumentCenter":"Posicione o documento no centro e tire uma fotografia","documentReaderDocumentReaderLayoutStartDetection":"Detectando um documento..."}'), ar: JSON.parse('{"strPrepareCamera":"...\u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","hint_fit":"\u0636\u0639 \u0648\u062C\u0647\u0643 \u0641\u064A \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0628\u064A\u0636\u0627\u0648\u064A","hint_stayStill":"\u0627\u0628\u0642 \u062B\u0627\u0628\u062A\u064B\u0627","livenessProcessing_title_processing":"\u062C\u0627\u0631\u064A\xA0\u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629...","hint_lookStraight":"\u0627\u0646\u0638\u0631 \u0645\u0628\u0627\u0634\u0631\u0629\u064B \u0644\u0644\u0643\u0627\u0645\u064A\u0631\u0627","hint_moveCloser":"\u0627\u0642\u062A\u0631\u0628 \u0623\u0643\u062B\u0631","hint_moveAway":"\u0627\u0628\u062A\u0639\u062F \u0642\u0644\u064A\u0644\u064B\u0627","livenessRetry_text_noSmiling":"\u062A\u0639\u0628\u064A\u0631\u0627\u062A \u0637\u0628\u064A\u0639\u064A\u0629 \u0644\u0644\u0648\u062C\u0647\u060C \u0639\u062F\u0645 \u0627\u0644\u0627\u0628\u062A\u0633\u0627\u0645","livenessRetry_text_noGlare":"\u0639\u062F\u0645 \u0648\u062C\u062F\u0648\u062F \u0627\u0644\u0648\u0647\u062C \u0623\u0648 \u0627\u0644\u0625\u0636\u0627\u0621\u0629 \u0627\u0644\u0634\u062F\u064A\u062F\u0629","faceLivenessInstructionScreenTitle":"\u0628\u062F\u0621 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062D\u064A\u0648\u064A\u0651\u0629","faceLivenessInstructionScreenSubtitle":"\u0636\u0639 \u0648\u062C\u0647\u0643 \u0641\u064A \u0648\u0633\u0637 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0628\u064A\u0636\u0627\u0648\u064A \u0648\u0627\u0642\u062A\u0631\u0628 \u0623\u0643\u062B\u0631 \u0643\u0644\u0645\u0627 \u062A\u063A\u064A\u0631 \u062D\u062C\u0645 \u0627\u0644\u0625\u0637\u0627\u0631.","faceLivenessInstructionScreenButton":"\u0627\u0628\u062F\u0623","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u0627\u0633\u0645\u062D \u0628\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","messageUnknownError":"\u062D\u062F\u062B \u062E\u0637\u0623 \u0645\u0627","faceLivenessCameraLayoutMessageLabelsDetecting":"\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0639\u0651\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0648\u062C\u0647...","faceLivenessCameraLayoutPreparingService":"\u062C\u0627\u0631\u064A \u062A\u062D\u0636\u064A\u0631 \u0627\u0644\u062E\u062F\u0645\u0629...","faceLivenessInfoScreenVerifiedTitle":"\u0627\u0646\u062A\u0647\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u062D\u0642\u0651\u0642!","faceLivenessInfoScreenVerifiedSubtitle":"\u0644\u0642\u062F \u0646\u062C\u062D\u062A \u0641\u064A \u0627\u062C\u062A\u064A\u0627\u0632 \u0641\u062D\u0635 \u0627\u0644\u062D\u064A\u0648\u064A\u0651\u0629.","statusSuccess":"\u062A\u0645!","statusCameraUnavailableTitle":"\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u063A\u064A\u0631 \u0645\u062A\u0627\u062D\u0629!","statusCameraUnavailableSubtitle":"\u0627\u0633\u0645\u062D \u0628\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0648\u0623\u0639\u062F \u062A\u062D\u0645\u064A\u0644 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062D\u0629 \u0644\u0644\u0645\u062A\u0627\u0628\u0639\u0629.","statusError":"\u062E\u0637\u0623!","faceLivenessScreenButton":"\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649","InfoScreenNoCameraTitle":"\u062A\u0639\u0630\u0651\u0631 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","faceLivenessInfoScreenNoCameraSubtitle":"\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0648\u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.","faceLivenessRetryScreenTitle":"\u062F\u0639\u0646\u0627 \u0646\u062D\u0627\u0648\u0644 \u0630\u0644\u0643 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649","faceLivenessRetryScreenSubtitle":"\u064A\u0631\u062C\u0649 \u0627\u062A\u0628\u0627\u0639 \u0627\u0644\u0625\u0631\u0634\u0627\u062F\u0627\u062A","faceDetectionInstructionScreenTitle":"\u0627\u0644\u062A\u0642\u0637 \u0635\u0648\u0631\u0629 \u0633\u064A\u0644\u0641\u064A","faceDetectionInstructionScreenSubtitle":"\u0636\u0639 \u0648\u062C\u0647\u0643 \u0641\u064A \u0648\u0633\u0637 \u0627\u0644\u0634\u0643\u0644 \u0627\u0644\u0628\u064A\u0636\u0627\u0648\u064A \u0648\u0627\u062C\u0639\u0644\u0647 \u062B\u0627\u0628\u062A\u064B\u0627. \u0648\u0627\u062A\u0631\u0643 \u0627\u0644\u0628\u0627\u0642\u064A \u0639\u0644\u064A\u0646\u0627.","faceInfoScreenSuccessSubtitle":"\u062A\u0645 \u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D.","documentReaderDocumentReaderStartScreenTitle":"\u0627\u0645\u0633\u062D \u0627\u0644\u0645\u0639\u0631\u0641 \u0627\u0644\u0634\u062E\u0635\u064A (ID) \u0641\u064A \u0645\u062A\u0635\u0641\u062D\u0643","documentReaderDocumentReaderStartScreenSubtitle":"\u0627\u0633\u062A\u062E\u062F\u0645 \u0643\u0627\u0645\u064A\u0631\u0627 \u062C\u0647\u0627\u0632\u0643 \u0644\u0645\u0633\u062D \u0645\u0633\u062A\u0646\u062F \u0636\u0648\u0626\u064A\u064B\u0627 \u0623\u0648 \u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629\u064B \u0644\u0645\u0633\u062A\u0646\u062F \u0645\u0646 \u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631 \u0644\u062F\u064A\u0643","documentReaderDocumentReaderStartScreenButtonCamera":"\u0645\u0646 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627","documentReaderDocumentReaderStartScreenButtonGallery":"\u0645\u0646 \u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631","documentReaderDocumentReaderLayoutConnectionProblem":"\u062A\u0623\u0643\u062F \u0645\u0646 \u0623\u0646 \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0645\u062A\u0635\u0644\u0629 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D.","documentReaderDocumentReaderLayoutInitializing":"\u062C\u0627\u0631\u064A \u062A\u0647\u064A\u0626\u0629 \u0627\u0644\u062E\u062F\u0645\u0629...","documentReaderDocumentReaderLayoutProcessing":"\u062C\u0627\u0631\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F...","documentReaderDocumentReaderLayoutDocumentCenter":"\u0636\u0639 \u0627\u0644\u0645\u0633\u062A\u0646\u062F \u0641\u064A \u0627\u0644\u0648\u0633\u0637","documentReaderDocumentReaderLayoutFlipDocument":"\u0627\u0642\u0644\u0628 \u0627\u0644\u0645\u0633\u062A\u0646\u062F","documentReaderInfoScreenSuccessSubtitle":"\u0627\u0646\u062A\u0647\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629.","cameraCaptureCameraCaptureStartScreenTitle":"\u062D\u0645\u0651\u0644 \u0627\u0644\u0635\u0648\u0631\u0629","cameraCaptureCameraCaptureStartScreenSubtitle":"\u0627\u0633\u062A\u062E\u062F\u0645 \u0643\u0627\u0645\u064A\u0631\u0627 \u062C\u0647\u0627\u0632\u0643 \u0623\u0648 \u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0645\u0646 \u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u0636\u0639 \u0627\u0644\u0645\u0633\u062A\u0646\u062F \u0641\u064A \u0627\u0644\u0648\u0633\u0637 \u0648\u0627\u0644\u062A\u0642\u0637 \u0635\u0648\u0631\u0629 \u0644\u0647","documentReaderDocumentReaderLayoutStartDetection":"\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0639\u0651\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0648\u062B\u064A\u0642\u0629..."}'), nl: JSON.parse('{"strPrepareCamera":"De camera aan het voorbereiden...","hint_fit":"Pas uw gezicht in de ovaal","hint_stayStill":"Blijf stil","livenessProcessing_title_processing":"Bezig met verwerken...","hint_lookStraight":"Kijk recht vooruit","hint_moveCloser":"Kom dichter","hint_moveAway":"Ga verder weg","livenessRetry_text_noSmiling":"Neutrale uitdrukking, geen glimlach","livenessRetry_text_noGlare":"Geen schittering of extreme verlichting","faceLivenessInstructionScreenTitle":"Start verificatie liveness","faceLivenessInstructionScreenSubtitle":"Plaats uw gezicht in het midden van het ovaal en kom dichterbij wanneer de grootte van het frame wordt gewijzigd.","faceLivenessInstructionScreenButton":"Ga aan de slag","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Sta toegang tot de camera toe","messageUnknownError":"Er ging iets fout","faceLivenessCameraLayoutMessageLabelsDetecting":"Bezig met een gezicht te ontdekken...","faceLivenessCameraLayoutPreparingService":"Voorbereiding van de dienst...","faceLivenessInfoScreenVerifiedTitle":"Gecontroleerd!","faceLivenessInfoScreenVerifiedSubtitle":"U bent geslaagd voor de liveness-check","statusSuccess":"Succes!","statusCameraUnavailableTitle":"Camera onbeschikbaar!","statusCameraUnavailableSubtitle":"Sta toegang to de camera toe en laad de pagina opnieuw om door te gaan.","statusError":"Fout!","faceLivenessScreenButton":"Probeer opnieuw","InfoScreenNoCameraTitle":"Er is geen camera","faceLivenessInfoScreenNoCameraSubtitle":"Controleer de cameraverbinding en probeer het opnieuw.","faceLivenessRetryScreenTitle":"Laten we dat nog eens proberen","faceLivenessRetryScreenSubtitle":"Volg de richtlijnen","faceDetectionInstructionScreenTitle":"Neem een selfie.","faceDetectionInstructionScreenSubtitle":"Plaats uw gezicht in het midden van het ovaal en houd het stil. Wij doen de rest.","faceInfoScreenSuccessSubtitle":"De foto is succesvol gemaakt.","documentReaderDocumentReaderStartScreenTitle":"Scan een ID in uw browser","documentReaderDocumentReaderStartScreenSubtitle":"Gebruik de camera van uw toestel om een document te scannen of selecteer een foto van het document van de galerij","documentReaderDocumentReaderStartScreenButtonCamera":"Van camera","documentReaderDocumentReaderStartScreenButtonGallery":"Van galerij","documentReaderDocumentReaderLayoutConnectionProblem":"Zorg ervoor dat de camera correct is aangesloten.","documentReaderDocumentReaderLayoutInitializing":"Initialisatie van de dienst...","documentReaderDocumentReaderLayoutProcessing":"Documentenverwerking...","documentReaderDocumentReaderLayoutDocumentCenter":"Plaats het document in het midden","documentReaderDocumentReaderLayoutFlipDocument":"Draai het document om","documentReaderInfoScreenSuccessSubtitle":"Verwerking klaar.","cameraCaptureCameraCaptureStartScreenTitle":"Upload een foto","cameraCaptureCameraCaptureStartScreenSubtitle":"Gebruik de camera van uw toestel of selecteer een foto uit de galerij","cameraCaptureCameraCaptureLayoutDocumentCenter":"Plaats het document in het midden en maak een foto","documentReaderDocumentReaderLayoutStartDetection":"Bezig met het zoeken naar een document..."}'), vi: JSON.parse('{"strPrepareCamera":"\u0110ang chu\u1EA9n b\u1ECB camera...","hint_fit":"\u0110\u01B0a khu\xF4n m\u1EB7t b\u1EA1n v\xE0o h\xECnh oval","hint_stayStill":"Gi\u1EEF y\xEAn","livenessProcessing_title_processing":"\u0110ang x\u1EED l\xFD...","hint_lookStraight":"Nh\xECn th\u1EB3ng","hint_moveCloser":"Di chuy\u1EC3n t\u1EDBi g\u1EA7n h\u01A1n","hint_moveAway":"Di chuy\u1EC3n ra xa h\u01A1n","livenessRetry_text_noSmiling":"V\u1EBB m\u1EB7t trung t\xEDnh, kh\xF4ng c\u01B0\u1EDDi","livenessRetry_text_noGlare":"Kh\xF4ng ch\xF3i hay s\xE1ng qu\xE1 m\u1EE9c","faceLivenessInstructionScreenTitle":"B\u1EAFt \u0111\u1EA7u x\xE1c minh ng\u01B0\u1EDDi th\u1EADt","faceLivenessInstructionScreenSubtitle":"\u0110\u01B0a khu\xF4n m\u1EB7t b\u1EA1n v\xE0o gi\u1EEFa h\xECnh oval v\xE0 di chuy\u1EC3n g\u1EA7n h\u01A1n khi k\xEDch th\u01B0\u1EDBc khung thay \u0111\u1ED5i.","faceLivenessInstructionScreenButton":"B\u1EAFt \u0111\u1EA7u","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Cho ph\xE9p truy c\u1EADp camera","messageUnknownError":"C\xF3 l\u1ED7i x\u1EA3y ra","faceLivenessCameraLayoutMessageLabelsDetecting":"\u0110ang d\xF2 t\xECm khu\xF4n m\u1EB7t...","faceLivenessCameraLayoutPreparingService":"\u0110ang chu\u1EA9n b\u1ECB d\u1ECBch v\u1EE5...","faceLivenessInfoScreenVerifiedTitle":"\u0110\xE3 x\xE1c minh!","faceLivenessInfoScreenVerifiedSubtitle":"B\u1EA1n \u0111\xE3 v\u01B0\u1EE3t qua th\xE0nh c\xF4ng qu\xE1 tr\xECnh ki\u1EC3m tra ng\u01B0\u1EDDi th\u1EADt.","statusSuccess":"Th\xE0nh c\xF4ng!","statusCameraUnavailableTitle":"Camera kh\xF4ng c\xF3 s\u1EB5n!","statusCameraUnavailableSubtitle":"Cho ph\xE9p truy c\u1EADp camera v\xE0 t\u1EA3i l\u1EA1i trang n\xE0y \u0111\u1EC3 ti\u1EBFp t\u1EE5c.","statusError":"C\xF3 l\u1ED7i!","faceLivenessScreenButton":"Th\u1EED l\u1EA1i","InfoScreenNoCameraTitle":"Kh\xF4ng c\xF3 camera","faceLivenessInfoScreenNoCameraSubtitle":"Ki\u1EC3m tra k\u1EBFt n\u1ED1i camera v\xE0 th\u1EED l\u1EA1i.","faceLivenessRetryScreenTitle":"H\xE3y th\u1EED l\u1EA1i","faceLivenessRetryScreenSubtitle":"Vui l\xF2ng l\xE0m theo h\u01B0\u1EDBng d\u1EABn","faceDetectionInstructionScreenTitle":"Ch\u1EE5p \u1EA3nh selfie","faceDetectionInstructionScreenSubtitle":"\u0110\u01B0a khu\xF4n m\u1EB7t b\u1EA1n v\xE0o gi\u1EEFa h\xECnh oval v\xE0 gi\u1EEF nguy\xEAn. Ch\xFAng t\xF4i s\u1EBD th\u1EF1c hi\u1EC7n c\xE1c b\u01B0\u1EDBc c\xF2n l\u1EA1i.","faceInfoScreenSuccessSubtitle":"\u1EA2nh \u0111\u01B0\u1EE3c ch\u1EE5p th\xE0nh c\xF4ng.","documentReaderDocumentReaderStartScreenTitle":"Qu\xE9t gi\u1EA5y t\u1EDD t\xF9y th\xE2n trong tr\xECnh duy\u1EC7t c\u1EE7a b\u1EA1n","documentReaderDocumentReaderStartScreenSubtitle":"S\u1EED d\u1EE5ng camera trong thi\u1EBFt b\u1ECB \u0111\u1EC3 qu\xE9t gi\u1EA5y t\u1EDD ho\u1EB7c ch\u1ECDn \u1EA3nh ch\u1EE5p gi\u1EA5y t\u1EDD t\u1EEB th\u01B0 vi\u1EC7n \u1EA3nh.","documentReaderDocumentReaderStartScreenButtonCamera":"T\u1EEB camera","documentReaderDocumentReaderStartScreenButtonGallery":"T\u1EEB th\u01B0 vi\u1EC7n \u1EA3nh","documentReaderDocumentReaderLayoutConnectionProblem":"H\xE3y \u0111\u1EA3m b\u1EA3o camera \u0111\u01B0\u1EE3c k\u1EBFt n\u1ED1i \u0111\xFAng c\xE1ch.","documentReaderDocumentReaderLayoutInitializing":"\u0110ang kh\u1EDFi ch\u1EA1y d\u1ECBch v\u1EE5...","documentReaderDocumentReaderLayoutProcessing":"\u0110ang x\u1EED l\xFD gi\u1EA5y t\u1EDD...","documentReaderDocumentReaderLayoutDocumentCenter":"\u0110\u01B0a gi\u1EA5y t\u1EDD v\xE0o ch\xEDnh gi\u1EEFa","documentReaderDocumentReaderLayoutFlipDocument":"L\u1EADt gi\u1EA5y t\u1EDD","documentReaderInfoScreenSuccessSubtitle":"\u0110\xE3 x\u1EED l\xFD xong.","cameraCaptureCameraCaptureStartScreenTitle":"T\u1EA3i \u1EA3nh l\xEAn","cameraCaptureCameraCaptureStartScreenSubtitle":"S\u1EED d\u1EE5ng camera trong thi\u1EBFt b\u1ECB ho\u1EB7c ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n \u1EA3nh","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u0110\u01B0a gi\u1EA5y t\u1EDD v\xE0o ch\xEDnh gi\u1EEFa v\xE0 ch\u1EE5p \u1EA3nh","documentReaderDocumentReaderLayoutStartDetection":"\u0110ang d\xF2 t\xECm m\u1ED9t gi\u1EA5y t\u1EDD..."}'), ko: JSON.parse('{"strPrepareCamera":"\uCE74\uBA54\uB77C \uC900\uBE44 \uC911...","hint_fit":"\uC5BC\uAD74\uC744 \uD0C0\uC6D0\uD615\uC5D0 \uB9DE\uCD94\uAE30","hint_stayStill":"\uC77C\uC815\uD558\uAC8C \uC720\uC9C0\uD558\uAE30","livenessProcessing_title_processing":"\uCC98\uB9AC \uC911...","hint_lookStraight":"\uC55E\uC744 \uB611\uBC14\uB85C \uBCF4\uAE30","hint_moveCloser":"\uB354 \uAC00\uAE4C\uC774 \uC774\uB3D9","hint_moveAway":"\uBA40\uB9AC \uC774\uB3D9","livenessRetry_text_noSmiling":"\uC911\uB9BD \uD45C\uD604, \uBBF8\uC18C \uC5C6\uC74C","livenessRetry_text_noGlare":"\uB208\uBD80\uC2EC \uB610\uB294 \uACFC\uB3C4\uD55C \uC870\uBA85 \uC5C6\uC74C","faceLivenessInstructionScreenTitle":"\uD65C\uB3D9\uC131 \uD655\uC778 \uC2DC\uC791","faceLivenessInstructionScreenSubtitle":"\uC5BC\uAD74\uC744 \uD0C0\uC6D0\uD615\uC758 \uC911\uC559\uC5D0 \uC704\uCE58\uC2DC\uD0A4\uACE0 \uD504\uB808\uC784\uC758 \uD06C\uAE30\uAC00 \uBC14\uB014 \uB54C \uB354 \uAC00\uAE4C\uC774 \uC6C0\uC9C1\uC785\uB2C8\uB2E4.","faceLivenessInstructionScreenButton":"\uC2DC\uC791\uD558\uAE30","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\uCE74\uBA54\uB77C\uC5D0 \uC561\uC138\uC2A4 \uD5C8\uC6A9","messageUnknownError":"\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4","faceLivenessCameraLayoutMessageLabelsDetecting":"\uC5BC\uAD74 \uAC10\uC9C0 \uC911...","faceLivenessCameraLayoutPreparingService":"\uC11C\uBE44\uC2A4 \uC900\uBE44 \uC911...","faceLivenessInfoScreenVerifiedTitle":"\uD655\uC778\uB428!","faceLivenessInfoScreenVerifiedSubtitle":"\uD65C\uB3D9\uC131 \uAC80\uC0AC\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uD1B5\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","statusSuccess":"\uC131\uACF5!","statusCameraUnavailableTitle":"\uCE74\uBA54\uB77C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4!","statusCameraUnavailableSubtitle":"\uCE74\uBA54\uB77C\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uB97C \uD5C8\uC6A9\uD558\uACE0 \uC774 \uD398\uC774\uC9C0\uB97C \uC7AC\uB85C\uB4DC\uD558\uC5EC \uACC4\uC18D\uD558\uC2ED\uC2DC\uC624.","statusError":"\uC624\uB958!","faceLivenessScreenButton":"\uB2E4\uC2DC \uC2DC\uB3C4","InfoScreenNoCameraTitle":"\uCE74\uBA54\uB77C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4","faceLivenessInfoScreenNoCameraSubtitle":"\uCE74\uBA54\uB77C \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uACE0 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC2ED\uC2DC\uC624.","faceLivenessRetryScreenTitle":"\uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694","faceLivenessRetryScreenSubtitle":"\uAC00\uC774\uB4DC\uB77C\uC778\uC744 \uB530\uB974\uC138\uC694","faceDetectionInstructionScreenTitle":"\uC140\uCE74 \uCC0D\uAE30","faceDetectionInstructionScreenSubtitle":"\uC5BC\uAD74\uC744 \uD0C0\uC6D0\uD615\uC758 \uC911\uC559\uC5D0 \uC704\uCE58\uC2DC\uD0A4\uACE0 \uADF8 \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD569\uB2C8\uB2E4. \uB098\uBA38\uC9C0\uB294 \uC6B0\uB9AC\uAC00 \uD560\uAC8C\uC694.","faceInfoScreenSuccessSubtitle":"\uC0AC\uC9C4\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uCEA1\uCC98\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","documentReaderDocumentReaderStartScreenTitle":"\uBE0C\uB77C\uC6CC\uC800\uC5D0\uC11C ID\uB97C \uC2A4\uCE94\uD558\uC138\uC694","documentReaderDocumentReaderStartScreenSubtitle":"\uC7A5\uCE58 \uCE74\uBA54\uB77C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBB38\uC11C\uB97C \uC2A4\uCE94\uD558\uAC70\uB098 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uBB38\uC11C\uC758 \uC0AC\uC9C4\uC744 \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624","documentReaderDocumentReaderStartScreenButtonCamera":"\uCE74\uBA54\uB77C\uC5D0\uC11C","documentReaderDocumentReaderStartScreenButtonGallery":"\uAC24\uB7EC\uB9AC\uC5D0\uC11C","documentReaderDocumentReaderLayoutConnectionProblem":"\uCE74\uBA54\uB77C\uAC00 \uC62C\uBC14\uB974\uAC8C \uC5F0\uACB0\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uC2ED\uC2DC\uC624.","documentReaderDocumentReaderLayoutInitializing":"\uC11C\uBE44\uC2A4 \uCD08\uAE30\uD654 \uC911...","documentReaderDocumentReaderLayoutProcessing":"\uBB38\uC11C \uCC98\uB9AC \uC911...","documentReaderDocumentReaderLayoutDocumentCenter":"\uBB38\uC11C\uB97C \uAC00\uC6B4\uB370\uC5D0 \uC704\uCE58\uC2DC\uD0A4\uC2ED\uC2DC\uC624","documentReaderDocumentReaderLayoutFlipDocument":"\uBB38\uC11C\uB97C \uB4A4\uC9D1\uC73C\uC2ED\uC2DC\uC624","documentReaderInfoScreenSuccessSubtitle":"\uCC98\uB9AC\uAC00 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.","cameraCaptureCameraCaptureStartScreenTitle":"\uC0AC\uC9C4 \uC5C5\uB85C\uB4DC","cameraCaptureCameraCaptureStartScreenSubtitle":"\uC7A5\uCE58 \uCE74\uBA54\uB77C\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 \uAC24\uB7EC\uB9AC\uC5D0\uC11C \uC0AC\uC9C4\uC744 \uC120\uD0DD\uD558\uC138\uC694","cameraCaptureCameraCaptureLayoutDocumentCenter":"\uBB38\uC11C\uB97C \uAC00\uC6B4\uB370\uC5D0 \uC704\uCE58\uC2DC\uD0A4\uACE0 \uC0AC\uC9C4\uC744 \uCC0D\uC73C\uC2ED\uC2DC\uC624","documentReaderDocumentReaderLayoutStartDetection":"\uBB38\uC11C \uAC10\uC9C0 \uC911..."}'), ms: JSON.parse('{"strPrepareCamera":"Menyediakan kamera...","hint_fit":"Muatkan muka anda dalam bulatan","hint_stayStill":"Pegang dengan stabil","livenessProcessing_title_processing":"Sedang diproses...","hint_lookStraight":"Pandang tegak","hint_moveCloser":"Dekatkan","hint_moveAway":"Jauhkan","livenessRetry_text_noSmiling":"Ekspresi neutral, tiada senyuman","livenessRetry_text_noGlare":"Tiada silau atau pencahayaan ekstrem","faceLivenessInstructionScreenTitle":"Mulakan pengesahan daya hidup","faceLivenessInstructionScreenSubtitle":"Letak muka anda di tengah bentuk bujur dan bergerak lebih dekat apabila ukuran bingkai diubah.","faceLivenessInstructionScreenButton":"Mulakan","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Benarkan akses ke kamera","messageUnknownError":"Ada masalah","faceLivenessCameraLayoutMessageLabelsDetecting":"Mengesan rupa muka...","faceLivenessCameraLayoutPreparingService":"Menyediakan perkhidmatan...","faceLivenessInfoScreenVerifiedTitle":"Disahkan!","faceLivenessInfoScreenVerifiedSubtitle":"Anda telah berjaya melepasi pemeriksaan daya hidup.","statusSuccess":"Berjaya!","statusCameraUnavailableTitle":"Kamera tidak tersedia!","statusCameraUnavailableSubtitle":"Benarkan akses ke kamera dan muat semula halaman ini untuk bermula.","statusError":"Ralat!","faceLivenessScreenButton":"Sila cuba lagi","InfoScreenNoCameraTitle":"Tiada kamera","faceLivenessInfoScreenNoCameraSubtitle":"Semak sambungan kamera dan cuba lagi.","faceLivenessRetryScreenTitle":"Mari kita cuba lagi","faceLivenessRetryScreenSubtitle":"Sila ikut garis panduan","faceDetectionInstructionScreenTitle":"Ambil selfie","faceDetectionInstructionScreenSubtitle":"Letakkan muka anda di tengah bentuk bujur dan tahan dengan stabil. Kami akan uruskan selebihnya.","faceInfoScreenSuccessSubtitle":"Gambar diambil dengan berjaya.","documentReaderDocumentReaderStartScreenTitle":"Imbas ID di pelayar anda","documentReaderDocumentReaderStartScreenSubtitle":"Gunakan kamera peranti anda untuk mengimbas dokumen atau pilih sekeping gambar dari galeri","documentReaderDocumentReaderStartScreenButtonCamera":"Dari kamera","documentReaderDocumentReaderStartScreenButtonGallery":"Dari galeri","documentReaderDocumentReaderLayoutConnectionProblem":"Pastikan kamera disambung dengan betul.","documentReaderDocumentReaderLayoutInitializing":"Memulakan perkhidmatan ...","documentReaderDocumentReaderLayoutProcessing":"Memproses dokumen...","documentReaderDocumentReaderLayoutDocumentCenter":"Letakkan dokumen di tengah","documentReaderDocumentReaderLayoutFlipDocument":"Terbalikkan dokumen","documentReaderInfoScreenSuccessSubtitle":"Pemprosesan selesai.","cameraCaptureCameraCaptureStartScreenTitle":"Muat naik gambar","cameraCaptureCameraCaptureStartScreenSubtitle":"Gunakan kamera peranti anda atau pilih sekeping gambar dari galeri","cameraCaptureCameraCaptureLayoutDocumentCenter":"Letakkan dokumen di tengah dan mengambil sekeping gamber","documentReaderDocumentReaderLayoutStartDetection":"Mengesan dokumen..."}'), gr: JSON.parse('{"strPrepareCamera":"\u03A0\u03C1\u03BF\u03B5\u03C4\u03BF\u03B9\u03BC\u03B1\u03C3\u03AF\u03B1 \u03C4\u03B7\u03C2 \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1\u03C2...","hint_fit":"\u03A4\u03B1\u03B9\u03C1\u03B9\u03AC\u03BE\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CC\u03C3\u03C9\u03C0\u03CC \u03C3\u03B1\u03C2 \u03C3\u03C4\u03BF \u03BF\u03B2\u03AC\u03BB","hint_stayStill":"\u039C\u03B5\u03AF\u03BD\u03B5\u03C4\u03B5 \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03BF\u03AF","livenessProcessing_title_processing":"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1...","hint_lookStraight":"\u039A\u03BF\u03B9\u03C4\u03AC\u03BE\u03C4\u03B5 \u03BC\u03C0\u03C1\u03BF\u03C3\u03C4\u03AC","hint_moveCloser":"\u03A0\u03BB\u03B7\u03C3\u03B9\u03AC\u03C3\u03C4\u03B5","hint_moveAway":"\u0391\u03C0\u03BF\u03BC\u03B1\u03BA\u03C1\u03C5\u03BD\u03B8\u03B5\u03AF\u03C4\u03B5","livenessRetry_text_noSmiling":"\u039F\u03C5\u03B4\u03AD\u03C4\u03B5\u03C1\u03B7 \u03AD\u03BA\u03C6\u03C1\u03B1\u03C3\u03B7, \u03C7\u03C9\u03C1\u03AF\u03C2 \u03C7\u03B1\u03BC\u03CC\u03B3\u03B5\u03BB\u03BF","livenessRetry_text_noGlare":"\u03A7\u03C9\u03C1\u03AF\u03C2 \u03BB\u03AC\u03BC\u03C8\u03B5\u03B9\u03C2 \u03AE \u03AD\u03BD\u03C4\u03BF\u03BD\u03BF \u03C6\u03C9\u03C4\u03B9\u03C3\u03BC\u03CC","faceLivenessInstructionScreenTitle":"\u039E\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF\u03BD \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF \u03B6\u03C9\u03C4\u03B9\u03BA\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2","faceLivenessInstructionScreenSubtitle":"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CC\u03C3\u03C9\u03C0\u03CC \u03C3\u03B1\u03C2 \u03C3\u03C4\u03BF \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF \u03C4\u03BF\u03C5 \u03BF\u03B2\u03AC\u03BB \u03BA\u03B1\u03B9 \u03BC\u03B5\u03C4\u03B1\u03BA\u03B9\u03BD\u03B7\u03B8\u03B5\u03AF\u03C4\u03B5 \u03C0\u03B9\u03BF \u03BA\u03BF\u03BD\u03C4\u03AC \u03CC\u03C4\u03B1\u03BD \u03B1\u03BB\u03BB\u03AC\u03BE\u03B5\u03C4\u03B5 \u03C4\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03C0\u03BB\u03B1\u03B9\u03C3\u03AF\u03BF\u03C5.","faceLivenessInstructionScreenButton":"\u039E\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03C4\u03B5","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u0395\u03C0\u03B9\u03C4\u03C1\u03AD\u03C8\u03C4\u03B5 \u03C4\u03B7\u03BD \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03B7\u03BD \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1","messageUnknownError":"\u039A\u03AC\u03C4\u03B9 \u03C0\u03AE\u03B3\u03B5 \u03C3\u03C4\u03C1\u03B1\u03B2\u03AC","faceLivenessCameraLayoutMessageLabelsDetecting":"\u0395\u03BD\u03C4\u03BF\u03C0\u03B9\u03C3\u03BC\u03CC\u03C2 \u03C0\u03C1\u03BF\u03C3\u03CE\u03C0\u03BF\u03C5...","faceLivenessCameraLayoutPreparingService":"\u03A0\u03C1\u03BF\u03B5\u03C4\u03BF\u03B9\u03BC\u03B1\u03C3\u03AF\u03B1 \u03C4\u03B7\u03C2 \u03C5\u03C0\u03B7\u03C1\u03B5\u03C3\u03AF\u03B1\u03C2 ...","faceLivenessInfoScreenVerifiedTitle":"\u0395\u03C0\u03B1\u03BB\u03B7\u03B8\u03B5\u03CD\u03C4\u03B7\u03BA\u03B5!","faceLivenessInfoScreenVerifiedSubtitle":"\u03A0\u03B5\u03C1\u03AC\u03C3\u03B1\u03C4\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03CE\u03C2 \u03C4\u03BF\u03BD \u03AD\u03BB\u03B5\u03B3\u03C7\u03BF \u03B6\u03C9\u03C4\u03B9\u03BA\u03CC\u03C4\u03B7\u03C4\u03B1\u03C2.","statusSuccess":"\u0395\u03C0\u03B9\u03C4\u03C5\u03C7\u03AE\u03C2!","statusCameraUnavailableTitle":"\u0397 \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1 \u03B4\u03B5\u03BD \u03B5\u03AF\u03BD\u03B1\u03B9 \u03B4\u03B9\u03B1\u03B8\u03AD\u03C3\u03B9\u03BC\u03B7!","statusCameraUnavailableSubtitle":"\u0395\u03C0\u03B9\u03C4\u03C1\u03AD\u03C8\u03C4\u03B5 \u03C4\u03B7\u03BD \u03C0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03C4\u03B7\u03BD \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1 \u03BA\u03B1\u03B9 \u03C6\u03BF\u03C1\u03C4\u03CE\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5.","statusError":"\u03A3\u03C6\u03AC\u03BB\u03BC\u03B1!","faceLivenessScreenButton":"\u03A0\u03C1\u03BF\u03C3\u03C0\u03B1\u03B8\u03AE\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC","InfoScreenNoCameraTitle":"\u0394\u03B5\u03BD \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9 \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1","faceLivenessInfoScreenNoCameraSubtitle":"\u0395\u03BB\u03AD\u03B3\u03BE\u03C4\u03B5 \u03C4\u03B7 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03C4\u03B5 \u03BE\u03B1\u03BD\u03AC.","faceLivenessRetryScreenTitle":"\u0391\u03C2 \u03C4\u03BF \u03B4\u03BF\u03BA\u03B9\u03BC\u03AC\u03C3\u03BF\u03C5\u03BC\u03B5 \u03BE\u03B1\u03BD\u03AC","faceLivenessRetryScreenSubtitle":"\u03A0\u03B1\u03C1\u03B1\u03BA\u03B1\u03BB\u03CE \u03B1\u03BA\u03BF\u03BB\u03BF\u03C5\u03B8\u03AE\u03C3\u03C4\u03B5 \u03B1\u03C5\u03C4\u03AD\u03C2 \u03C4\u03B9\u03C2 \u03BF\u03B4\u03B7\u03B3\u03AF\u03B5\u03C2","faceDetectionInstructionScreenTitle":"\u03A4\u03C1\u03B1\u03B2\u03AE\u03BE\u03C4\u03B5 \u03BC\u03B9\u03B1 \u03C3\u03AD\u03BB\u03C6\u03B9","faceDetectionInstructionScreenSubtitle":"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CC\u03C3\u03C9\u03C0\u03CC \u03C3\u03B1\u03C2 \u03C3\u03C4\u03BF \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF \u03C4\u03BF\u03C5 \u03BF\u03B2\u03AC\u03BB \u03BA\u03B1\u03B9 \u03BA\u03C1\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03C3\u03C4\u03B1\u03B8\u03B5\u03C1\u03CC. \u0398\u03B1 \u03BA\u03AC\u03BD\u03BF\u03C5\u03BC\u03B5 \u03C4\u03B1 \u03C5\u03C0\u03CC\u03BB\u03BF\u03B9\u03C0\u03B1.","faceInfoScreenSuccessSubtitle":"\u0397 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1 \u03C4\u03C1\u03B1\u03B2\u03AE\u03C7\u03C4\u03B7\u03BA\u03B5 \u03BC\u03B5 \u03B5\u03C0\u03B9\u03C4\u03C5\u03C7\u03AF\u03B1.","documentReaderDocumentReaderStartScreenTitle":"\u03A3\u03B1\u03C1\u03CE\u03C3\u03C4\u03B5 \u03AD\u03BD\u03B1 \u03B1\u03BD\u03B1\u03B3\u03BD\u03C9\u03C1\u03B9\u03C3\u03C4\u03B9\u03BA\u03CC \u03C3\u03C4\u03BF \u03C0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AE\u03B3\u03B7\u03C3\u03AE\u03C2 \u03C3\u03B1\u03C2","documentReaderDocumentReaderStartScreenSubtitle":"\u03A7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1 \u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 \u03C3\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03B1\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03AD\u03BD\u03B1 \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF \u03AE \u03BD\u03B1 \u03B5\u03C0\u03B9\u03BB\u03AD\u03BE\u03B5\u03C4\u03B5 \u03BC\u03B9\u03B1 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1 \u03C4\u03BF\u03C5 \u03B5\u03B3\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5 \u03B1\u03C0\u03CC \u03C4\u03B7 \u03C3\u03C5\u03BB\u03BB\u03BF\u03B3\u03AE","documentReaderDocumentReaderStartScreenButtonCamera":"\u0391\u03C0\u03CC \u03C4\u03B7\u03BD \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1","documentReaderDocumentReaderStartScreenButtonGallery":"\u0391\u03C0\u03CC \u03C4\u03B7\u03BD \u03C3\u03C5\u03BB\u03BB\u03BF\u03B3\u03AE","documentReaderDocumentReaderLayoutConnectionProblem":"\u0392\u03B5\u03B2\u03B1\u03B9\u03C9\u03B8\u03B5\u03AF\u03C4\u03B5 \u03CC\u03C4\u03B9 \u03B7 \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C3\u03C9\u03C3\u03C4\u03AC \u03C3\u03C5\u03BD\u03B4\u03B5\u03B4\u03B5\u03BC\u03AD\u03BD\u03B7.","documentReaderDocumentReaderLayoutInitializing":"\u0391\u03C1\u03C7\u03B9\u03BA\u03BF\u03C0\u03BF\u03AF\u03B7\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03C5\u03C0\u03B7\u03C1\u03B5\u03C3\u03AF\u03B1\u03C2...","documentReaderDocumentReaderLayoutProcessing":"\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03B5\u03B3\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5...","documentReaderDocumentReaderLayoutDocumentCenter":"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF \u03C3\u03C4\u03BF \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF","documentReaderDocumentReaderLayoutFlipDocument":"\u0393\u03C5\u03C1\u03AF\u03C3\u03C4\u03B5 \u03C4\u03BF \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF","documentReaderInfoScreenSuccessSubtitle":"\u0397 \u03B5\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5.","cameraCaptureCameraCaptureStartScreenTitle":"\u0391\u03BD\u03AD\u03B2\u03B1\u03C3\u03B5 \u03BC\u03B9\u03B1 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1","cameraCaptureCameraCaptureStartScreenSubtitle":"\u03A7\u03C1\u03B7\u03C3\u03B9\u03BC\u03BF\u03C0\u03BF\u03B9\u03AE\u03C3\u03C4\u03B5 \u03C4\u03B7\u03BD \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1 \u03C4\u03B7\u03C2 \u03C3\u03C5\u03C3\u03BA\u03B5\u03C5\u03AE\u03C2 \u03C3\u03B1\u03C2 \u03AE \u03B5\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03BC\u03B9\u03B1 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1 \u03B1\u03C0\u03CC \u03C4\u03B7 \u03C3\u03C5\u03BB\u03BB\u03BF\u03B3\u03AE","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u03A4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03AD\u03B3\u03B3\u03C1\u03B1\u03C6\u03BF \u03C3\u03C4\u03BF \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF \u03BA\u03B1\u03B9 \u03C4\u03C1\u03B1\u03B2\u03AE\u03BE\u03C4\u03B5 \u03BC\u03B9\u03B1 \u03C6\u03C9\u03C4\u03BF\u03B3\u03C1\u03B1\u03C6\u03AF\u03B1","documentReaderDocumentReaderLayoutStartDetection":"\u0395\u03BD\u03C4\u03BF\u03C0\u03B9\u03C3\u03BC\u03CC\u03C2 \u03B5\u03B3\u03B3\u03C1\u03AC\u03C6\u03BF\u03C5..."}'), tr: JSON.parse('{"strPrepareCamera":"Kamera haz\u0131rlan\u0131yor...","hint_fit":"Y\xFCz\xFCn\xFCz\xFC oval alana getirin","hint_stayStill":"Sabit durun","livenessProcessing_title_processing":"\u0130\u015Fleniyor...","hint_lookStraight":"Tam kar\u015F\u0131ya bak\u0131n","hint_moveCloser":"Yak\u0131na gelin","hint_moveAway":"Biraz uzakla\u015F\u0131n","livenessRetry_text_noSmiling":"Do\u011Fal ifadenizle durun, g\xFCl\xFCmsemeyin","livenessRetry_text_noGlare":"Parlama veya a\u015F\u0131r\u0131 \u0131\u015F\u0131k yok","faceLivenessInstructionScreenTitle":"Canl\u0131l\u0131k do\u011Frulamas\u0131n\u0131 ba\u015Flat","faceLivenessInstructionScreenSubtitle":"Y\xFCz\xFCn\xFCz\xFC oval alan\u0131n ortas\u0131na getirin ve \xE7er\xE7evenin boyutu de\u011Fi\u015Fti\u011Finde daha yak\u0131na gelin.","faceLivenessInstructionScreenButton":"Ba\u015Flay\u0131n","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Kamera eri\u015Fimine izin ver","messageUnknownError":"Bir hata olu\u015Ftu","faceLivenessCameraLayoutMessageLabelsDetecting":"Y\xFCz alg\u0131lan\u0131yor...","faceLivenessCameraLayoutPreparingService":"Hizmet haz\u0131rlan\u0131yor...","faceLivenessInfoScreenVerifiedTitle":"Do\u011Fruland\u0131!","faceLivenessInfoScreenVerifiedSubtitle":"Canl\u0131l\u0131k testini ba\u015Far\u0131yla ge\xE7tiniz.","statusSuccess":"Ba\u015Far\u0131l\u0131!","statusCameraUnavailableTitle":"Kamera kullan\u0131lam\u0131yor!","statusCameraUnavailableSubtitle":"Devam etmek i\xE7in kameraya eri\u015Fim izni vererek bu sayfay\u0131 yeniden y\xFCkleyin.","statusError":"Hata!","faceLivenessScreenButton":"Tekrar deneyin","InfoScreenNoCameraTitle":"Kamera yok","faceLivenessInfoScreenNoCameraSubtitle":"Kamera ba\u011Flant\u0131s\u0131n\u0131 kontrol ederek tekrar deneyin","faceLivenessRetryScreenTitle":"Tekrar deneyelim","faceLivenessRetryScreenSubtitle":"L\xFCtfen talimatlar\u0131 izleyin","faceDetectionInstructionScreenTitle":"Selfie \xE7ekin","faceDetectionInstructionScreenSubtitle":"Y\xFCz\xFCn\xFCz\xFC oval alan\u0131n ortas\u0131na getirin ve sabit durun. Kalan\u0131n\u0131 biz halledece\u011Fiz.","faceInfoScreenSuccessSubtitle":"Foto\u011Fraf ba\u015Far\u0131yla al\u0131nd\u0131.","documentReaderDocumentReaderStartScreenTitle":"Taray\u0131c\u0131n\u0131zda bir kimlik tarat\u0131n","documentReaderDocumentReaderStartScreenSubtitle":"Belge taratmak i\xE7in cihaz\u0131n\u0131z\u0131n kameras\u0131n\u0131 kullan\u0131n veya galeriden bir belgenin foto\u011Fraf\u0131n\u0131 se\xE7in","documentReaderDocumentReaderStartScreenButtonCamera":"Kameradan","documentReaderDocumentReaderStartScreenButtonGallery":"Galeriden","documentReaderDocumentReaderLayoutConnectionProblem":"Kameran\u0131n d\xFCzg\xFCn ba\u011Fland\u0131\u011F\u0131ndan emin olun.","documentReaderDocumentReaderLayoutInitializing":"Hizmet ba\u015Flat\u0131l\u0131yor...","documentReaderDocumentReaderLayoutProcessing":"Belge i\u015Fleniyor...","documentReaderDocumentReaderLayoutDocumentCenter":"Belgeyi ortaya konumland\u0131r\u0131n","documentReaderDocumentReaderLayoutFlipDocument":"Belgeyi ters \xE7evirin","documentReaderInfoScreenSuccessSubtitle":"\u0130\u015Fleme tamamland\u0131.","cameraCaptureCameraCaptureStartScreenTitle":"Foto\u011Fraf y\xFCkleyin","cameraCaptureCameraCaptureStartScreenSubtitle":"Cihaz\u0131n\u0131z\u0131n kameras\u0131n\u0131 kullan\u0131n veya galeriden bir foto\u011Fraf se\xE7in","cameraCaptureCameraCaptureLayoutDocumentCenter":"Belgeyi ortaya konumland\u0131r\u0131n ve foto\u011Fraf \xE7ekin","documentReaderDocumentReaderLayoutStartDetection":"Belge alg\u0131lan\u0131yor..."}'), jp: JSON.parse('{"strPrepareCamera":"\u30AB\u30E1\u30E9\u6E96\u5099\u4E2D...","hint_fit":"\u3053\u306E\u6955\u5186\u306B\u3042\u306A\u305F\u306E\u9854\u3092\u5408\u308F\u305B\u3066\u304F\u3060\u3055\u3044","hint_stayStill":"\u52D5\u304B\u306A\u3044\u3067\u304F\u3060\u3055\u3044","livenessProcessing_title_processing":"\u51E6\u7406\u3057\u3066\u3044\u307E\u3059...","hint_lookStraight":"\u8996\u7DDA\u3092\u771F\u3063\u76F4\u3050\u306B\u3057\u3066\u304F\u3060\u3055\u3044","hint_moveCloser":"\u8FD1\u5BC4\u3063\u3066\u304F\u3060\u3055\u3044","hint_moveAway":"\u9060\u3056\u304B\u3063\u3066\u304F\u3060\u3055\u3044","livenessRetry_text_noSmiling":"\u81EA\u7136\u306A\u8868\u60C5\u3067\u7B11\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044","livenessRetry_text_noGlare":"\u30B0\u30EC\u30A2\u3084\u904E\u5EA6\u306A\u7167\u660E\u3092\u907F\u3051\u3066\u304F\u3060\u3055\u3044","faceLivenessInstructionScreenTitle":"Liveness\u7167\u5408\u3092\u958B\u59CB","faceLivenessInstructionScreenSubtitle":"\u3042\u306A\u305F\u306E\u9854\u3092\u5186\u306E\u4E2D\u5FC3\u306B\u914D\u7F6E\u3057\u3001\u30D5\u30EC\u30FC\u30E0\u306E\u5927\u304D\u3055\u304C\u5909\u5316\u3057\u305F\u3089\u8FD1\u3065\u3044\u3066\u304F\u3060\u3055\u3044\u3002","faceLivenessInstructionScreenButton":"\u958B\u59CB","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u30AB\u30E1\u30E9\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u8A31\u53EF","messageUnknownError":"\u4F55\u3089\u304B\u306E\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F","faceLivenessCameraLayoutMessageLabelsDetecting":"\u9854\u3092\u691C\u51FA\u3057\u3066\u3044\u307E\u3059...","faceLivenessCameraLayoutPreparingService":"\u30B5\u30FC\u30D3\u30B9\u3092\u6E96\u5099\u3057\u3066\u3044\u307E\u3059...","faceLivenessInfoScreenVerifiedTitle":"\u7167\u5408\u5B8C\u4E86\uFF01","faceLivenessInfoScreenVerifiedSubtitle":"Liveness\u30C1\u30A7\u30C3\u30AF\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002","statusSuccess":"\u6210\u529F\uFF01","statusCameraUnavailableTitle":"\u30AB\u30E1\u30E9\u304C\u5229\u7528\u3067\u304D\u307E\u305B\u3093\uFF01","statusCameraUnavailableSubtitle":"\u7D99\u7D9A\u3059\u308B\u306B\u306F\u30AB\u30E1\u30E9\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u8A31\u53EF\u3057\u3001\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3057\u3066\u304F\u3060\u3055\u3044\u3002","statusError":"\u30A8\u30E9\u30FC\uFF01","faceLivenessScreenButton":"\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044","InfoScreenNoCameraTitle":"\u30AB\u30E1\u30E9\u304C\u3042\u308A\u307E\u305B\u3093","faceLivenessInfoScreenNoCameraSubtitle":"\u30AB\u30E1\u30E9\u3068\u306E\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3001\u3082\u3046\u4E00\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002","faceLivenessRetryScreenTitle":"\u3082\u3046\u4E00\u5EA6\u8A66\u3057\u3066\u307F\u307E\u3057\u3087\u3046","faceLivenessRetryScreenSubtitle":"\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\u306B\u5F93\u3063\u3066\u304F\u3060\u3055\u3044","faceDetectionInstructionScreenTitle":"\u81EA\u64AE\u308A\u3092\u3059\u308B","faceDetectionInstructionScreenSubtitle":"\u9854\u3092\u5186\u306E\u4E2D\u5FC3\u306B\u914D\u7F6E\u3057\u3066\u52D5\u304B\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u5F8C\u306F\u304A\u4EFB\u305B\u304F\u3060\u3055\u3044\u3002","faceInfoScreenSuccessSubtitle":"\u5199\u771F\u306E\u30AD\u30E3\u30D7\u30C1\u30E3\u30FC\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002","documentReaderDocumentReaderStartScreenTitle":"\u30D6\u30E9\u30A6\u30B6\u3067ID\u3092\u30B9\u30AD\u30E3\u30F3\u3057\u3066\u304F\u3060\u3055\u3044","documentReaderDocumentReaderStartScreenSubtitle":"\u3054\u5229\u7528\u306E\u30C7\u30D0\u30A4\u30B9\u306E\u30AB\u30E1\u30E9\u3067\u30B9\u30AD\u30E3\u30F3\u3059\u308B\u304B\u3001\u30AE\u30E3\u30E9\u30EA\u30FC\u304B\u3089\u66F8\u985E\u306E\u5199\u771F\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","documentReaderDocumentReaderStartScreenButtonCamera":"\u30AB\u30E1\u30E9\u304B\u3089","documentReaderDocumentReaderStartScreenButtonGallery":"\u30AE\u30E3\u30E9\u30EA\u30FC\u304B\u3089","documentReaderDocumentReaderLayoutConnectionProblem":"\u30AB\u30E1\u30E9\u304C\u9069\u5207\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002","documentReaderDocumentReaderLayoutInitializing":"\u30B5\u30FC\u30D3\u30B9\u3092\u521D\u671F\u5316\u3057\u3066\u3044\u307E\u3059...","documentReaderDocumentReaderLayoutProcessing":"\u6587\u66F8\u3092\u51E6\u7406\u3057\u3066\u3044\u307E\u3059...","documentReaderDocumentReaderLayoutDocumentCenter":"\u66F8\u985E\u3092\u4E2D\u5FC3\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044","documentReaderDocumentReaderLayoutFlipDocument":"\u66F8\u985E\u3092\u88CF\u8FD4\u3059","documentReaderInfoScreenSuccessSubtitle":"\u51E6\u7406\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002","cameraCaptureCameraCaptureStartScreenTitle":"\u5199\u771F\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","cameraCaptureCameraCaptureStartScreenSubtitle":"\u3054\u5229\u7528\u306E\u30C7\u30D0\u30A4\u30B9\u306E\u30AB\u30E1\u30E9\u3092\u4F7F\u7528\u3059\u308B\u304B\u3001\u30AE\u30E3\u30E9\u30EA\u30FC\u304B\u3089\u5199\u771F\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u66F8\u985E\u3092\u4E2D\u5FC3\u306B\u914D\u7F6E\u3057\u3001\u5199\u771F\u3092\u64AE\u5F71\u3057\u3066\u304F\u3060\u3055\u3044","documentReaderDocumentReaderLayoutStartDetection":"\u6587\u66F8\u3092\u524A\u9664\u3057\u3066\u3044\u307E\u3059..."}'), cz: JSON.parse('{"strPrepareCamera":"P\u0159\xEDprava fotoapar\xE1tu...","hint_fit":"Napasujte sv\u016Fj obli\u010Dej do ov\xE1lu","hint_stayStill":"Dr\u017Ete telefon pevn\u011B","livenessProcessing_title_processing":"Zpracov\xE1v\xE1 se...","hint_lookStraight":"D\xEDvejte se zp\u0159\xEDma","hint_moveCloser":"P\u0159ibli\u017Ete se","hint_moveAway":"Oddalte se","livenessRetry_text_noSmiling":"Neutr\xE1ln\xED v\xFDraz, bez \xFAsm\u011Bvu","livenessRetry_text_noGlare":"Bez osln\u011Bn\xED \u010Di extr\xE9mn\xEDho osv\u011Btlen\xED","faceLivenessInstructionScreenTitle":"Za\u010D\xEDt verifikaci liveness","faceLivenessInstructionScreenSubtitle":"Um\xEDst\u011Bte obli\u010Dej do st\u0159edu ov\xE1lu. Kdy\u017E se velikost r\xE1me\u010Dku zm\u011Bn\xED, p\u0159ibli\u017Ete se k n\u011Bmu.","faceLivenessInstructionScreenButton":"Za\u010D\xEDt","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Povolte p\u0159\xEDstup k fotoapar\xE1tu","messageUnknownError":"N\u011Bco se pokazilo","faceLivenessCameraLayoutMessageLabelsDetecting":"Detekce obli\u010Deje...","faceLivenessCameraLayoutPreparingService":"Slu\u017Eba se p\u0159ipravuje...","faceLivenessInfoScreenVerifiedTitle":"Ov\u011B\u0159eno!","faceLivenessInfoScreenVerifiedSubtitle":"\xDAsp\u011B\u0161n\u011B jste pro\u0161li kontrolou Liveness.","statusSuccess":"\xDAsp\u011Bch!","statusCameraUnavailableTitle":"Fotoapar\xE1t nen\xED k dispozici!","statusCameraUnavailableSubtitle":"Pro pokra\u010Dov\xE1n\xED povolte p\u0159\xEDstup k fotoapar\xE1tu a znovu na\u010Dt\u011Bte tuto str\xE1nku.","statusError":"Chyba!","faceLivenessScreenButton":"Zkusit to znovu","InfoScreenNoCameraTitle":"Chyb\xED fotoapar\xE1t","faceLivenessInfoScreenNoCameraSubtitle":"Zkontrolujte p\u0159ipojen\xED k fotoapar\xE1tu a zkuste to znovu.","faceLivenessRetryScreenTitle":"Zkusme to znovu","faceLivenessRetryScreenSubtitle":"Postupujte podle pokyn\u016F","faceDetectionInstructionScreenTitle":"Ud\u011Blejte si selfie","faceDetectionInstructionScreenSubtitle":"Dr\u017Ete telefon pevn\u011B a um\xEDst\u011Bte obli\u010Dej do st\u0159edu ov\xE1lu My u\u017E se postar\xE1me o zbytek.","faceInfoScreenSuccessSubtitle":"Fotografie byla \xFAsp\u011B\u0161n\u011B po\u0159\xEDzena.","documentReaderDocumentReaderStartScreenTitle":"Skenov\xE1n\xED pr\u016Fkazu toto\u017Enosti v prohl\xED\u017Ee\u010Di","documentReaderDocumentReaderStartScreenSubtitle":"Naskenujte dokument pomoc\xED fotoapar\xE1tu v za\u0159\xEDzen\xED nebo vyberte fotografii z galerie","documentReaderDocumentReaderStartScreenButtonCamera":"Z fotoapar\xE1tu","documentReaderDocumentReaderStartScreenButtonGallery":"Z galerie","documentReaderDocumentReaderLayoutConnectionProblem":"Zkontrolujte, zda je fotoapar\xE1t spr\xE1vn\u011B p\u0159ipojen.","documentReaderDocumentReaderLayoutInitializing":"Spou\u0161t\u011Bn\xED slu\u017Eby...","documentReaderDocumentReaderLayoutProcessing":"Zpracov\xE1n\xED dokumentu...","documentReaderDocumentReaderLayoutDocumentCenter":"Um\xEDst\u011Bte dokumentu do st\u0159edu","documentReaderDocumentReaderLayoutFlipDocument":"Obra\u0165te dokument","documentReaderInfoScreenSuccessSubtitle":"Zpracov\xE1n\xED dokon\u010Deno.","cameraCaptureCameraCaptureStartScreenTitle":"Nahr\xE1t fotografii","cameraCaptureCameraCaptureStartScreenSubtitle":"Pou\u017Eijte fotoapar\xE1t v za\u0159\xEDzen\xED nebo nahrajte fotografii z galerie","cameraCaptureCameraCaptureLayoutDocumentCenter":"Um\xEDst\u011Bte dokumentu do st\u0159edu a vyfo\u0165te jej","documentReaderDocumentReaderLayoutStartDetection":"Detekce dokumentu..."}'), th: JSON.parse('{"strPrepareCamera":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B...","hint_fit":"\u0E27\u0E32\u0E07\u0E43\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E01\u0E23\u0E2D\u0E1A\u0E23\u0E39\u0E1B\u0E27\u0E07\u0E23\u0E35","hint_stayStill":"\u0E08\u0E31\u0E1A\u0E43\u0E2B\u0E49\u0E19\u0E34\u0E48\u0E07","livenessProcessing_title_processing":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E1B\u0E23\u0E30\u0E21\u0E27\u0E25\u0E1C\u0E25","hint_lookStraight":"\u0E21\u0E2D\u0E07\u0E15\u0E23\u0E07","hint_moveCloser":"\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E01\u0E25\u0E49\u0E01\u0E27\u0E48\u0E32\u0E19\u0E35\u0E49","hint_moveAway":"\u0E2D\u0E2D\u0E01\u0E44\u0E1B\u0E44\u0E01\u0E25\u0E01\u0E27\u0E48\u0E32\u0E19\u0E35\u0E49","livenessRetry_text_noSmiling":"\u0E17\u0E33\u0E2A\u0E35\u0E2B\u0E19\u0E49\u0E32\u0E18\u0E23\u0E23\u0E21\u0E14\u0E32 \u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E22\u0E34\u0E49\u0E21","livenessRetry_text_noGlare":"\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E49\u0E41\u0E2A\u0E07\u0E08\u0E49\u0E32 \u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E2A\u0E07\u0E2A\u0E27\u0E48\u0E32\u0E07\u0E21\u0E32\u0E01","faceLivenessInstructionScreenTitle":"\u0E40\u0E23\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A Liveness","faceLivenessInstructionScreenSubtitle":"\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07\u0E43\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E23\u0E07\u0E01\u0E25\u0E32\u0E07\u0E23\u0E39\u0E1B\u0E27\u0E07\u0E23\u0E35 \u0E41\u0E25\u0E30\u0E02\u0E22\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E21\u0E32\u0E43\u0E01\u0E25\u0E49\u0E02\u0E36\u0E49\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E2D\u0E1A\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E02\u0E19\u0E32\u0E14","faceLivenessInstructionScreenButton":"\u0E40\u0E23\u0E34\u0E48\u0E21","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B","messageUnknownError":"\u0E21\u0E35\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14","faceLivenessCameraLayoutMessageLabelsDetecting":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A\u0E43\u0E1A\u0E2B\u0E19\u0E49\u0E32...","faceLivenessCameraLayoutPreparingService":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23...","faceLivenessInfoScreenVerifiedTitle":"\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E41\u0E25\u0E49\u0E27!","faceLivenessInfoScreenVerifiedSubtitle":"\u0E04\u0E38\u0E13\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A liveness \u0E41\u0E25\u0E49\u0E27","statusSuccess":"\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08!","statusCameraUnavailableTitle":"\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B\u0E44\u0E21\u0E48\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19!","statusCameraUnavailableSubtitle":"\u0E42\u0E1B\u0E23\u0E14\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B \u0E41\u0E25\u0E30\u0E42\u0E2B\u0E25\u0E14\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E35\u0E49\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E08\u0E32\u0E01\u0E19\u0E31\u0E49\u0E19\u0E08\u0E36\u0E07\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E15\u0E48\u0E2D","statusError":"\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14!","faceLivenessScreenButton":"\u0E25\u0E2D\u0E07\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","InfoScreenNoCameraTitle":"\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B","faceLivenessInfoScreenNoCameraSubtitle":"\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E01\u0E31\u0E1A\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B\u0E41\u0E25\u0E49\u0E27\u0E25\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","faceLivenessRetryScreenTitle":"\u0E21\u0E32\u0E25\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","faceLivenessRetryScreenSubtitle":"\u0E02\u0E2D\u0E43\u0E2B\u0E49\u0E04\u0E38\u0E13\u0E17\u0E33\u0E15\u0E32\u0E21\u0E04\u0E33\u0E41\u0E19\u0E30\u0E19\u0E33","faceDetectionInstructionScreenTitle":"\u0E16\u0E48\u0E32\u0E22\u0E40\u0E0B\u0E25\u0E1F\u0E35\u0E48","faceDetectionInstructionScreenSubtitle":"\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07\u0E43\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E15\u0E23\u0E07\u0E01\u0E25\u0E32\u0E07\u0E23\u0E39\u0E1B\u0E27\u0E07\u0E23\u0E35 \u0E41\u0E25\u0E30\u0E2B\u0E22\u0E38\u0E14\u0E19\u0E34\u0E48\u0E07 \u0E40\u0E23\u0E32\u0E08\u0E30\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E40\u0E2D\u0E07","faceInfoScreenSuccessSubtitle":"\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E41\u0E25\u0E49\u0E27","documentReaderDocumentReaderStartScreenTitle":"\u0E2A\u0E41\u0E01\u0E19\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E43\u0E19\u0E40\u0E1A\u0E23\u0E32\u0E27\u0E4C\u0E40\u0E0B\u0E2D\u0E23\u0E4C","documentReaderDocumentReaderStartScreenSubtitle":"\u0E43\u0E0A\u0E49\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E41\u0E01\u0E19\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E20\u0E32\u0E1E\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E08\u0E32\u0E01\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E","documentReaderDocumentReaderStartScreenButtonCamera":"\u0E08\u0E32\u0E01\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B","documentReaderDocumentReaderStartScreenButtonGallery":"\u0E08\u0E32\u0E01\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E","documentReaderDocumentReaderLayoutConnectionProblem":"\u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E43\u0E2B\u0E49\u0E41\u0E19\u0E48\u0E43\u0E08\u0E27\u0E48\u0E32\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07","documentReaderDocumentReaderLayoutInitializing":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23...","documentReaderDocumentReaderLayoutProcessing":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23...","documentReaderDocumentReaderLayoutDocumentCenter":"\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E44\u0E27\u0E49\u0E15\u0E23\u0E07\u0E01\u0E25\u0E32\u0E07","documentReaderDocumentReaderLayoutFlipDocument":"\u0E1E\u0E25\u0E34\u0E01\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23","documentReaderInfoScreenSuccessSubtitle":"\u0E01\u0E32\u0E23\u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E32\u0E23\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19","cameraCaptureCameraCaptureStartScreenTitle":"\u0E2D\u0E31\u0E1B\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E","cameraCaptureCameraCaptureStartScreenSubtitle":"\u0E43\u0E0A\u0E49\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B\u0E43\u0E19\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E08\u0E32\u0E01\u0E04\u0E25\u0E31\u0E07\u0E20\u0E32\u0E1E","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E44\u0E27\u0E49\u0E15\u0E23\u0E07\u0E01\u0E25\u0E32\u0E07\u0E41\u0E25\u0E30\u0E16\u0E48\u0E32\u0E22\u0E23\u0E39\u0E1B","documentReaderDocumentReaderLayoutStartDetection":"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23..."}'), hi: JSON.parse('{"strPrepareCamera":"\u0915\u0948\u092E\u0930\u093E \u0924\u0948\u092F\u093E\u0930 \u0915\u0930\u0928\u093E...","hint_fit":"\u0905\u092A\u0928\u093E \u091A\u0947\u0939\u0930\u093E \u092B\u094D\u0930\u0947\u092E \u092E\u0947\u0902 \u092B\u093F\u091F \u0915\u0930\u0947\u0902","hint_stayStill":"\u0938\u094D\u0925\u093F\u0930 \u092A\u0915\u0921\u093C\u0947\u0902","livenessProcessing_title_processing":"\u092A\u094D\u0930\u094B\u0938\u0947\u0938\u093F\u0902\u0917...","hint_lookStraight":"\u0938\u093E\u092E\u0928\u0947 \u0926\u0947\u0916\u0947\u0902","hint_moveCloser":"\u0928\u091C\u0926\u0940\u0915 \u0906\u090F\u0902","hint_moveAway":"\u0926\u0942\u0930 \u091C\u093E\u090F\u0901","livenessRetry_text_noSmiling":"\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u092D\u093E\u0935, \u0915\u094B\u0908 \u092E\u0941\u0938\u094D\u0915\u0941\u0930\u093E\u0939\u091F \u0928\u0939\u0940\u0902","livenessRetry_text_noGlare":"\u0915\u094B\u0908 \u091A\u092E\u0915 \u092F\u093E \u0905\u0924\u094D\u092F\u0927\u093F\u0915 \u092A\u094D\u0930\u0915\u093E\u0936 \u0928\u0939\u0940\u0902","faceLivenessInstructionScreenTitle":"\u091C\u0940\u0935\u0902\u0924\u0924\u093E \u0938\u0924\u094D\u092F\u093E\u092A\u0928 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902","faceLivenessInstructionScreenSubtitle":"\u0905\u092A\u0928\u0947 \u091A\u0947\u0939\u0930\u0947 \u0915\u094B \u0905\u0902\u0921\u093E\u0915\u093E\u0930 \u0915\u0947 \u0915\u0947\u0902\u0926\u094D\u0930 \u092E\u0947\u0902 \u0930\u0916\u0947\u0902 \u0914\u0930 \u091C\u092C \u092B\u094D\u0930\u0947\u092E \u0915\u093E \u0906\u0915\u093E\u0930 \u092C\u0926\u0932 \u091C\u093E\u090F \u0924\u094B \u0928\u091C\u0926\u0940\u0915 \u0906 \u091C\u093E\u090F\u0902\u0964","faceLivenessInstructionScreenButton":"\u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u0915\u0948\u092E\u0930\u093E \u0915\u094B \u0910\u0915\u094D\u0938\u0947\u0938 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u0926\u0947\u0902","messageUnknownError":"\u0915\u0941\u091B \u0924\u094D\u0930\u0941\u091F\u093F \u0939\u0941\u0908","faceLivenessCameraLayoutMessageLabelsDetecting":"\u091A\u0947\u0939\u0930\u093E \u092A\u0939\u091A\u093E\u0928 \u0930\u0939\u093E \u0939\u0948","faceLivenessCameraLayoutPreparingService":"\u0938\u0947\u0935\u093E \u0924\u0948\u092F\u093E\u0930 \u0915\u0930\u0928\u093E...","faceLivenessInfoScreenVerifiedTitle":"\u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924!","faceLivenessInfoScreenVerifiedSubtitle":"\u0906\u092A\u0928\u0947 \u091C\u0940\u0935\u0902\u0924\u0924\u093E \u091C\u093E\u0902\u091A \u0915\u094B \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u092A\u093E\u0938 \u0915\u0930 \u0932\u093F\u092F\u093E \u0939\u0948\u0964","statusSuccess":"\u0938\u092B\u0932!","statusCameraUnavailableTitle":"\u0915\u0948\u092E\u0930\u093E \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948!","statusCameraUnavailableSubtitle":"\u0915\u0948\u092E\u0930\u093E \u0915\u094B \u0910\u0915\u094D\u0938\u0947\u0938 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u0926\u0947\u0902 \u0914\u0930 \u091C\u093E\u0930\u0940 \u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0907\u0938 \u092A\u0943\u0937\u094D\u0920 \u0915\u094B \u092A\u0941\u0928\u0903 \u0932\u094B\u0921 \u0915\u0930\u0947\u0902\u0964","statusError":"\u0924\u094D\u0930\u0941\u091F\u093F!","faceLivenessScreenButton":"\u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902","InfoScreenNoCameraTitle":"\u0915\u094B\u0908 \u0915\u0948\u092E\u0930\u093E \u0928\u0939\u0940\u0902 \u0939\u0948","faceLivenessInfoScreenNoCameraSubtitle":"\u0915\u0943\u092A\u092F\u093E \u0915\u0948\u092E\u0930\u093E \u0915\u0928\u0947\u0915\u094D\u0936\u0928 \u0915\u0940 \u091C\u093E\u0901\u091A \u0915\u0930\u0947\u0902 \u0914\u0930 \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964","faceLivenessRetryScreenTitle":"\u0906\u090F\u0902 \u092B\u093F\u0930 \u0938\u0947 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902","faceLivenessRetryScreenSubtitle":"\u0915\u0943\u092A\u092F\u093E \u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u093E \u092A\u093E\u0932\u0928 \u0915\u0930\u0947\u0902","faceDetectionInstructionScreenTitle":"\u090F\u0915 \u0938\u0947\u0932\u094D\u095E\u0940 \u0932\u0947\u0902","faceDetectionInstructionScreenSubtitle":"\u0905\u092A\u0928\u093E \u091A\u0947\u0939\u0930\u093E \u0905\u0902\u0921\u093E\u0915\u093E\u0930 \u0915\u0947 \u0915\u0947\u0902\u0926\u094D\u0930 \u092E\u0947\u0902 \u0930\u0916\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093F\u0930 \u0930\u0939\u0947\u0902\u0964 \u092C\u093E\u0915\u0940 \u0939\u092E \u0915\u0930 \u0932\u0947\u0902\u0917\u0947\u0964","faceInfoScreenSuccessSubtitle":"\u092B\u093C\u094B\u091F\u094B \u0938\u092B\u0932\u0924\u093E\u092A\u0942\u0930\u094D\u0935\u0915 \u0932\u0947 \u0932\u0940 \u0917\u0908 \u0939\u0948\u0964","documentReaderDocumentReaderStartScreenTitle":"\u0905\u092A\u0928\u0947 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u092E\u0947\u0902 \u0915\u094B\u0908 \u0906\u0908\u0921\u0940 \u0938\u094D\u0915\u0948\u0928 \u0915\u0930\u0947\u0902","documentReaderDocumentReaderStartScreenSubtitle":"\u0915\u093F\u0938\u0940 \u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u0915\u094B \u0938\u094D\u0915\u0948\u0928 \u0915\u0930\u0928\u0947 \u092F\u093E \u0917\u0948\u0932\u0930\u0940 \u0938\u0947 \u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u0915\u0940 \u090F\u0915 \u091B\u0935\u093F \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0928\u0947 \u0921\u093F\u0935\u093E\u0907\u0938 \u0915\u0947 \u0915\u0948\u092E\u0930\u0947 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902","documentReaderDocumentReaderStartScreenButtonCamera":"\u0915\u0948\u092E\u0930\u093E \u0938\u0947","documentReaderDocumentReaderStartScreenButtonGallery":"\u0917\u0948\u0932\u0930\u0940 \u0938\u0947","documentReaderDocumentReaderLayoutConnectionProblem":"\u0938\u0941\u0928\u093F\u0936\u094D\u091A\u093F\u0924 \u0915\u0930\u0947\u0902 \u0915\u093F \u0915\u0948\u092E\u0930\u093E \u0938\u0939\u0940 \u0938\u0947 \u0915\u0928\u0947\u0915\u094D\u091F\u0947\u0921 \u0939\u0948\u0964","documentReaderDocumentReaderLayoutInitializing":"\u0938\u0947\u0935\u093E \u0936\u0941\u0930\u0942 \u0915\u0930 \u0930\u0939\u093E \u0939\u0948...","documentReaderDocumentReaderLayoutProcessing":"\u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u092A\u094D\u0930\u094B\u0938\u0947\u0938\u093F\u0902\u0917...","documentReaderDocumentReaderLayoutDocumentCenter":"\u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u0915\u094B \u092C\u0940\u091A \u092E\u0947\u0902 \u0930\u0916\u0947\u0902","documentReaderDocumentReaderLayoutFlipDocument":"\u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u092A\u0932\u091F\u0947\u0902","documentReaderInfoScreenSuccessSubtitle":"\u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0930\u0923 \u0938\u092E\u093E\u092A\u094D\u0924 \u0939\u0941\u0906\u0964","cameraCaptureCameraCaptureStartScreenTitle":"\u090F\u0915 \u095E\u094B\u091F\u094B \u0905\u092A\u0932\u094B\u0921 \u0915\u0930\u0947\u0902","cameraCaptureCameraCaptureStartScreenSubtitle":"\u0905\u092A\u0928\u0947 \u0921\u093F\u0935\u093E\u0907\u0938 \u0915\u0947 \u0915\u0948\u092E\u0930\u0947 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0947\u0902 \u092F\u093E \u0917\u0948\u0932\u0930\u0940 \u0938\u0947 \u090F\u0915 \u091B\u0935\u093F \u0915\u093E \u091A\u092F\u0928 \u0915\u0930\u0947\u0902","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u0926\u0938\u094D\u0924\u093E\u0935\u0947\u091C\u093C \u0915\u094B \u092C\u0940\u091A \u092E\u0947\u0902 \u0930\u0916\u0947\u0902 \u0914\u0930 \u092B\u093C\u094B\u091F\u094B \u0932\u0947\u0902","documentReaderDocumentReaderLayoutStartDetection":"\u0926\u0938\u094D\u0924\u093E\u0935\u0947\u095B \u092A\u0939\u091A\u093E\u0928 \u0930\u0939\u093E \u0939\u0948..."}'), bn: JSON.parse('{"strPrepareCamera":"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4 \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7...","hint_fit":"\u09A1\u09BF\u09AE\u09CD\u09AC\u09BE\u0995\u09C3\u09A4\u09BF\u09B0 \u09AD\u09C7\u09A4\u09B0\u09C7 \u09AE\u09C1\u0996\u099F\u09BF \u09B0\u09BE\u0996\u09C1\u09A8","hint_stayStill":"\u09B8\u09CD\u09A5\u09BF\u09B0 \u09A5\u09BE\u0995\u09C1\u09A8","livenessProcessing_title_processing":"\u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7...","hint_lookStraight":"\u09B8\u09CB\u099C\u09BE \u09A4\u09BE\u0995\u09BE\u09A8","hint_moveCloser":"\u0995\u09BE\u099B\u09C7 \u09AF\u09BE\u09A8","hint_moveAway":"\u09A6\u09C2\u09B0\u09C7 \u09AF\u09BE\u09A8","livenessRetry_text_noSmiling":"\u09B8\u09CD\u09AC\u09BE\u09AD\u09BE\u09AC\u09BF\u0995 \u09A5\u09BE\u0995\u09C1\u09A8, \u09B9\u09BE\u09B8\u09AC\u09C7\u09A8 \u09A8\u09BE","livenessRetry_text_noGlare":"\u099A\u0995\u099A\u0995\u09C7 \u09AC\u09BE \u0985\u09A7\u09BF\u0995 \u0989\u099C\u09CD\u099C\u09CD\u09AC\u09B2 \u0986\u09B2\u09CB \u09A8\u09DF","faceLivenessInstructionScreenTitle":"\u09B2\u09BE\u0987\u09AD\u09B2\u09BF\u09A8\u09C7\u09B8\xA0\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8","faceLivenessInstructionScreenSubtitle":"\u0986\u09AA\u09A8\u09BE\u09B0 \u09AE\u09C1\u0996\u099F\u09BF \u09A1\u09BF\u09AE\u09CD\u09AC\u09BE\u0995\u09C3\u09A4\u09BF\u09B0 \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8 \u098F\u09AC\u0982 \u09AB\u09CD\u09B0\u09C7\u09AE\u09C7\u09B0 \u0986\u0995\u09BE\u09B0 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u09B9\u09B2\u09C7 \u0995\u09BE\u099B\u09BE\u0995\u09BE\u099B\u09BF \u09AF\u09BE\u09A8\u0964","faceLivenessInstructionScreenButton":"\u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8","messageUnknownError":"\u0995\u09BF\u099B\u09C1 \u098F\u0995\u099F\u09BE \u09AD\u09C1\u09B2 \u09B9\u09DF\u09C7\u099B\u09C7","faceLivenessCameraLayoutMessageLabelsDetecting":"\u099A\u09C7\u09B9\u09BE\u09B0\u09BE \u09B6\u09A8\u09BE\u0995\u09CD\u09A4 \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7...","faceLivenessCameraLayoutPreparingService":"\u09AA\u09B0\u09BF\u09B7\u09C7\u09AC\u09BE \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09C1\u09A4 \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7...","faceLivenessInfoScreenVerifiedTitle":"\u09AF\u09BE\u099A\u09BE\u0987\u0995\u09C3\u09A4!","faceLivenessInfoScreenVerifiedSubtitle":"\u0986\u09AA\u09A8\u09BF \u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u09B2\u09BE\u0987\u09AD\u09B2\u09BF\u09A8\u09C7\u09B8\xA0\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u09AA\u09BE\u09B8 \u0995\u09B0\u09C7\u099B\u09C7\u09A8\u0964","statusSuccess":"\u09B8\u09AB\u09B2!","statusCameraUnavailableTitle":"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09AC\u09BF\u09A6\u09CD\u09AF\u09AE\u09BE\u09A8 \u09A8\u09C7\u0987!","statusCameraUnavailableSubtitle":"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8 \u098F\u09AC\u0982 \u099A\u09BE\u09B2\u09BF\u09DF\u09C7 \u09AF\u09C7\u09A4\u09C7 \u098F\u0987 \u09AA\u09C7\u099C\u099F\u09BF \u09AA\u09C1\u09A8\u09B0\u09BE\u09DF \u09B2\u09CB\u09A1 \u0995\u09B0\u09C1\u09A8\u0964","statusError":"\u09A4\u09CD\u09B0\u09C1\u099F\u09BF!","faceLivenessScreenButton":"\u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8","InfoScreenNoCameraTitle":"\u0995\u09CB\u09A8\u09CB \u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09A8\u09C7\u0987","faceLivenessInfoScreenNoCameraSubtitle":"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE\u09B0 \u09B8\u0982\u09AF\u09CB\u0997\u099F\u09BF \u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C7 \u09A6\u09C7\u0996\u09C1\u09A8 \u098F\u09AC\u0982 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8\u0964","faceLivenessRetryScreenTitle":"\u099A\u09B2\u09C1\u09A8 \u0986\u09AC\u09BE\u09B0 \u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09BE \u09AF\u09BE\u0995","faceLivenessRetryScreenSubtitle":"\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9\u09AA\u09C2\u09B0\u09CD\u09AC\u0995 \u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09A8\u09BE\u09AC\u09B2\u09C0 \u0985\u09A8\u09C1\u09B8\u09B0\u09A3 \u0995\u09B0\u09C1\u09A8","faceDetectionInstructionScreenTitle":"\u098F\u0995\u099F\u09BF \u09B8\u09C7\u09B2\u09AB\u09BF \u09A4\u09C1\u09B2\u09C1\u09A8","faceDetectionInstructionScreenSubtitle":"\u0986\u09AA\u09A8\u09BE\u09B0 \u09AE\u09C1\u0996\u099F\u09BF \u09A1\u09BF\u09AE\u09CD\u09AC\u09BE\u0995\u09C3\u09A4\u09BF\u09B0 \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8 \u098F\u09AC\u0982 \u09B8\u09CD\u09A5\u09BF\u09B0 \u09A5\u09BE\u0995\u09C1\u09A8\u0964 \u0986\u09AE\u09B0\u09BE \u09AC\u09BE\u0995\u09BF\u099F\u09BE \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09AC\u09CB\u0964","faceInfoScreenSuccessSubtitle":"\u09B8\u09AB\u09B2\u09AD\u09BE\u09AC\u09C7 \u099B\u09AC\u09BF\u099F\u09BF \u09A4\u09CB\u09B2\u09BE \u09B9\u09AF\u09BC\u09C7\u099B\u09C7\u0964","documentReaderDocumentReaderStartScreenTitle":"\u0986\u09AA\u09A8\u09BE\u09B0 \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0\u09C7 \u098F\u0995\u099F\u09BF \u0986\u0987\u09A1\u09BF \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8","documentReaderDocumentReaderStartScreenSubtitle":"\u098F\u0995\u099F\u09BF \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u09B8\u09CD\u0995\u09CD\u09AF\u09BE\u09A8 \u0995\u09B0\u09A4\u09C7 \u09AC\u09BE \u0997\u09CD\u09AF\u09BE\u09B2\u09BE\u09B0\u09BF \u09A5\u09C7\u0995\u09C7 \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u098F\u0995\u099F\u09BF \u099B\u09AC\u09BF \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09A4\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09A1\u09BF\u09AD\u09BE\u0987\u09B8\u09C7\u09B0 \u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8","documentReaderDocumentReaderStartScreenButtonCamera":"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09A5\u09C7\u0995\u09C7","documentReaderDocumentReaderStartScreenButtonGallery":"\u0997\u09CD\u09AF\u09BE\u09B2\u09BE\u09B0\u09BF \u09A5\u09C7\u0995\u09C7","documentReaderDocumentReaderLayoutConnectionProblem":"\u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE\u099F\u09BF \u09B8\u09A0\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09B8\u0982\u09AF\u09C1\u0995\u09CD\u09A4 \u0986\u099B\u09C7 \u09A4\u09BE \u09A8\u09BF\u09B6\u09CD\u099A\u09BF\u09A4 \u0995\u09B0\u09C1\u09A8\u0964","documentReaderDocumentReaderLayoutInitializing":"\u09AA\u09B0\u09BF\u09B7\u09C7\u09AC\u09BE \u09B6\u09C1\u09B0\u09C1 \u09B9\u099A\u09CD\u099B\u09C7...","documentReaderDocumentReaderLayoutProcessing":"\u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7...","documentReaderDocumentReaderLayoutDocumentCenter":"\u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F\u099F\u09BF \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8","documentReaderDocumentReaderLayoutFlipDocument":"\u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F\u099F\u09BF \u0989\u09B2\u09CD\u099F\u09BE\u09A8","documentReaderInfoScreenSuccessSubtitle":"\u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u09B9\u09DF\u09C7\u099B\u09C7\u0964","cameraCaptureCameraCaptureStartScreenTitle":"\u098F\u0995\u099F\u09BF \u099B\u09AC\u09BF \u0986\u09AA\u09B2\u09CB\u09A1 \u0995\u09B0\u09C1\u09A8","cameraCaptureCameraCaptureStartScreenSubtitle":"\u0986\u09AA\u09A8\u09BE\u09B0 \u09A1\u09BF\u09AD\u09BE\u0987\u09B8\u09C7\u09B0 \u0995\u09CD\u09AF\u09BE\u09AE\u09C7\u09B0\u09BE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8 \u0985\u09A5\u09AC\u09BE \u0997\u09CD\u09AF\u09BE\u09B2\u09BE\u09B0\u09C0 \u09A5\u09C7\u0995\u09C7 \u098F\u0995\u099F\u09BF \u099B\u09AC\u09BF \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F\u099F\u09BF \u0995\u09C7\u09A8\u09CD\u09A6\u09CD\u09B0\u09C7 \u09B0\u09BE\u0996\u09C1\u09A8 \u098F\u09AC\u0982 \u098F\u0995\u099F\u09BF \u099B\u09AC\u09BF \u09A4\u09C1\u09B2\u09C1\u09A8","documentReaderDocumentReaderLayoutStartDetection":"\u098F\u0995\u099F\u09BF \u09A1\u0995\u09C1\u09AE\u09C7\u09A8\u09CD\u099F \u09B6\u09A8\u09BE\u0995\u09CD\u09A4 \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7..."}'), he: JSON.parse('{"strPrepareCamera":"\u05D4\u05DE\u05E6\u05DC\u05DE\u05D4 \u05D1\u05D4\u05DB\u05E0\u05D4...","hint_fit":"\u05D9\u05E9 \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05E4\u05E0\u05D9\u05DD \u05DE\u05D5\u05E4\u05D9\u05E2\u05D5\u05EA \u05D1\u05EA\u05D5\u05DA \u05D4\u05D0\u05DC\u05D9\u05E4\u05E1\u05D4","hint_stayStill":"\u05DC\u05D0 \u05DC\u05D6\u05D5\u05D6","livenessProcessing_title_processing":"\u05D1\u05E2\u05D9\u05D1\u05D5\u05D3...","hint_lookStraight":"\u05DC\u05D4\u05E1\u05EA\u05DB\u05DC \u05E7\u05D3\u05D9\u05DE\u05D4","hint_moveCloser":"\u05DC\u05D4\u05EA\u05E7\u05E8\u05D1","hint_moveAway":"\u05DC\u05D4\u05EA\u05E8\u05D7\u05E7","livenessRetry_text_noSmiling":"\u05DC\u05D0 \u05DC\u05E2\u05E9\u05D5\u05EA \u05D4\u05D1\u05E2\u05D5\u05EA \u05E4\u05E0\u05D9\u05DD \u05D5\u05DC\u05D0 \u05DC\u05D7\u05D9\u05D9\u05DA","livenessRetry_text_noGlare":"\u05DC\u05D0 \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05EA\u05D0\u05D5\u05E8\u05D4 \u05D7\u05D6\u05E7\u05D4 \u05D0\u05D5 \u05D1\u05D5\u05D4\u05E7\u05EA","faceLivenessInstructionScreenTitle":"\u05D4\u05EA\u05D7\u05DC\u05EA \u05D0\u05D9\u05DE\u05D5\u05EA \u05E9\u05DC \u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8 \u05D7\u05D9","faceLivenessInstructionScreenSubtitle":"\u05D9\u05E9 \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05E4\u05E0\u05D9\u05DD \u05DE\u05D5\u05E4\u05D9\u05E2\u05D5\u05EA \u05D1\u05DE\u05E8\u05DB\u05D6 \u05D4\u05E2\u05D9\u05D2\u05D5\u05DC, \u05D5\u05DC\u05D4\u05EA\u05E7\u05E8\u05D1 \u05D0\u05DD \u05D2\u05D5\u05D3\u05DC \u05D4\u05DE\u05E1\u05D2\u05E8\u05EA \u05DE\u05E9\u05EA\u05E0\u05D4.","faceLivenessInstructionScreenButton":"\u05E9\u05E0\u05EA\u05D7\u05D9\u05DC?","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"\u05E2\u05DC\u05D9\u05DA \u05DC\u05D0\u05E4\u05E9\u05E8 \u05D2\u05D9\u05E9\u05D4 \u05DC\u05DE\u05E6\u05DC\u05DE\u05D4","messageUnknownError":"\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9","faceLivenessCameraLayoutMessageLabelsDetecting":"\u05DE\u05D6\u05D4\u05D4 \u05E4\u05E0\u05D9\u05DD...","faceLivenessCameraLayoutPreparingService":"\u05DE\u05DB\u05D9\u05DF \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA...","faceLivenessInfoScreenVerifiedTitle":"\u05D9\u05D5\u05E4\u05D9, \u05D4\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05E1\u05EA\u05D9\u05D9\u05DD!","faceLivenessInfoScreenVerifiedSubtitle":"\u05E2\u05D1\u05E8\u05EA \u05D0\u05EA \u05D1\u05D3\u05D9\u05E7\u05EA \u05D4\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8 \u05D4\u05D7\u05D9.","statusSuccess":"\u05D9\u05D5\u05E4\u05D9!","statusCameraUnavailableTitle":"\u05D4\u05DE\u05E6\u05DC\u05DE\u05D4 \u05DC\u05D0 \u05D6\u05DE\u05D9\u05E0\u05D4","statusCameraUnavailableSubtitle":"\u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA, \u05E2\u05DC\u05D9\u05DA \u05DC\u05D0\u05E4\u05E9\u05E8 \u05D2\u05D9\u05E9\u05D4 \u05DC\u05DE\u05E6\u05DC\u05DE\u05D4 \u05D5\u05DC\u05D0\u05D7\u05E8 \u05DE\u05DB\u05DF \u05DC\u05D8\u05E2\u05D5\u05DF \u05DE\u05D7\u05D3\u05E9 \u05D0\u05EA \u05D4\u05D3\u05E3.","statusError":"\u05E9\u05D2\u05D9\u05D0\u05D4","faceLivenessScreenButton":"\u05DB\u05D3\u05D0\u05D9 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1","InfoScreenNoCameraTitle":"\u05D0\u05D9\u05DF \u05DE\u05E6\u05DC\u05DE\u05D4","faceLivenessInfoScreenNoCameraSubtitle":"\u05D9\u05E9 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D7\u05D9\u05D1\u05D5\u05E8 \u05DC\u05DE\u05E6\u05DC\u05DE\u05D4 \u05D5\u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1.","faceLivenessRetryScreenTitle":"\u05E0\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1","faceLivenessRetryScreenSubtitle":"\u05D9\u05E9 \u05DC\u05E4\u05E2\u05D5\u05DC \u05DC\u05E4\u05D9 \u05D4\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA","faceDetectionInstructionScreenTitle":"\u05E6\u05D9\u05DC\u05D5\u05DD \u05EA\u05DE\u05D5\u05E0\u05EA \u05E1\u05DC\u05E4\u05D9","faceDetectionInstructionScreenSubtitle":"\u05D9\u05E9 \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05E4\u05E0\u05D9\u05DD \u05DE\u05D5\u05E4\u05D9\u05E2\u05D5\u05EA \u05D1\u05DE\u05E8\u05DB\u05D6 \u05D4\u05E2\u05D9\u05D2\u05D5\u05DC, \u05D5\u05DC\u05D0 \u05DC\u05D6\u05D5\u05D6. \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E0\u05D3\u05D0\u05D2 \u05DC\u05DB\u05DC \u05D4\u05E9\u05D0\u05E8.","faceInfoScreenSuccessSubtitle":"\u05D9\u05D5\u05E4\u05D9, \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E6\u05D5\u05DC\u05DE\u05D4.","documentReaderDocumentReaderStartScreenTitle":"\u05E1\u05E8\u05D9\u05E7\u05EA \u05EA\u05E2\u05D5\u05D3\u05D4 \u05DE\u05D6\u05D4\u05D4 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF","documentReaderDocumentReaderStartScreenSubtitle":"\u05E6\u05D9\u05DC\u05D5\u05DD \u05DE\u05E1\u05DE\u05DA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05E6\u05DC\u05DE\u05EA \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D0\u05D5 \u05D1\u05D7\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D4 \u05E9\u05DC \u05D4\u05DE\u05E1\u05DE\u05DA \u05DE\u05D4\u05D2\u05DC\u05E8\u05D9\u05D4","documentReaderDocumentReaderStartScreenButtonCamera":"\u05DE\u05D4\u05DE\u05E6\u05DC\u05DE\u05D4","documentReaderDocumentReaderStartScreenButtonGallery":"\u05DE\u05D4\u05D2\u05DC\u05E8\u05D9\u05D4","documentReaderDocumentReaderLayoutConnectionProblem":"\u05D9\u05E9 \u05DC\u05D5\u05D5\u05D3\u05D0 \u05E9\u05D4\u05DE\u05E6\u05DC\u05DE\u05D4 \u05DE\u05D7\u05D5\u05D1\u05E8\u05EA \u05DB\u05DE\u05D5 \u05E9\u05E6\u05E8\u05D9\u05DA.","documentReaderDocumentReaderLayoutInitializing":"\u05DE\u05E4\u05E2\u05D9\u05DC \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA...","documentReaderDocumentReaderLayoutProcessing":"\u05D4\u05DE\u05E1\u05DE\u05DA \u05D1\u05E2\u05D9\u05D1\u05D5\u05D3...","documentReaderDocumentReaderLayoutDocumentCenter":"\u05D9\u05E9 \u05DC\u05DE\u05E7\u05DD \u05D0\u05EA \u05D4\u05DE\u05E1\u05DE\u05DA \u05D1\u05DE\u05E8\u05DB\u05D6","documentReaderDocumentReaderLayoutFlipDocument":"\u05D9\u05E9 \u05DC\u05D4\u05E4\u05D5\u05DA \u05D0\u05EA \u05D4\u05DE\u05E1\u05DE\u05DA \u05DC\u05E6\u05D9\u05D3\u05D5 \u05D4\u05E9\u05E0\u05D9","documentReaderInfoScreenSuccessSubtitle":"\u05D4\u05E2\u05D9\u05D1\u05D5\u05D3 \u05D4\u05E1\u05EA\u05D9\u05D9\u05DD.","cameraCaptureCameraCaptureStartScreenTitle":"\u05D4\u05E2\u05DC\u05D0\u05EA \u05EA\u05DE\u05D5\u05E0\u05D4","cameraCaptureCameraCaptureStartScreenSubtitle":"\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05DE\u05E6\u05DC\u05DE\u05EA \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8 \u05D0\u05D5 \u05D1\u05D7\u05D9\u05E8\u05EA \u05EA\u05DE\u05D5\u05E0\u05D4 \u05DE\u05D4\u05D2\u05DC\u05E8\u05D9\u05D4","cameraCaptureCameraCaptureLayoutDocumentCenter":"\u05DE\u05D9\u05E7\u05D5\u05DD \u05D4\u05DE\u05E1\u05DE\u05DA \u05D1\u05DE\u05E8\u05DB\u05D6 \u05D5\u05E6\u05D9\u05DC\u05D5\u05DD \u05E9\u05DC\u05D5","documentReaderDocumentReaderLayoutStartDetection":"\u05DE\u05D6\u05D4\u05D4 \u05DE\u05E1\u05DE\u05DA..."}'), fi: JSON.parse('{"strPrepareCamera":"Valmistellaan kameraa...","hint_fit":"Sovita kasvosi soikioon","hint_stayStill":"Pid\xE4 vakaasti","livenessProcessing_title_processing":"K\xE4sitell\xE4\xE4n...","hint_lookStraight":"Katso suoraan eteesi","hint_moveCloser":"Siirry l\xE4hemm\xE4s","hint_moveAway":"Siirry kauemmas","livenessRetry_text_noSmiling":"Neutraali ilme, \xE4l\xE4 hymyile","livenessRetry_text_noGlare":"Ei heijastuksia tai erikoista valaistusta","faceLivenessInstructionScreenTitle":"Aloita el\xE4vyystarkistus","faceLivenessInstructionScreenSubtitle":"Sijoita kasvosi soikion keskelle ja siirry l\xE4hemm\xE4s, kun kehyksen koko muuttuu.","faceLivenessInstructionScreenButton":"Aloita","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Salli kameran k\xE4ytt\xF6","messageUnknownError":"Jokin ep\xE4onnistui","faceLivenessCameraLayoutMessageLabelsDetecting":"Tunnistetaan kasvoja...","faceLivenessCameraLayoutPreparingService":"Valmistellaan palvelua...","faceLivenessInfoScreenVerifiedTitle":"Varmistettu!","faceLivenessInfoScreenVerifiedSubtitle":"El\xE4vyystarkistus on onnistunut.","statusSuccess":"Onnistui!","statusCameraUnavailableTitle":"Kamera ei ole k\xE4ytett\xE4viss\xE4!","statusCameraUnavailableSubtitle":"Jatka sallimalla kameran k\xE4ytt\xF6 ja lataamalla t\xE4m\xE4 sivu uudelleen.","statusError":"Virhe!","faceLivenessScreenButton":"Yrit\xE4 uudelleen!","InfoScreenNoCameraTitle":"Kameraa ei ole","faceLivenessInfoScreenNoCameraSubtitle":"Tarkista kameran yhteys ja yrit\xE4 uudelleen.","faceLivenessRetryScreenTitle":"Yritet\xE4\xE4n t\xE4t\xE4 uudelleen","faceLivenessRetryScreenSubtitle":"Noudata ohjeita","faceDetectionInstructionScreenTitle":"Ota selfie","faceDetectionInstructionScreenSubtitle":"Sijoita kasvosi soikion keskelle ja pid\xE4 kameraa vakaasti. Me teemme loput.","faceInfoScreenSuccessSubtitle":"Valokuvan ottaminen onnistui.","documentReaderDocumentReaderStartScreenTitle":"Skannaa henkil\xF6kortti selaimeesi","documentReaderDocumentReaderStartScreenSubtitle":"Skannaa asiakirja laitteesi kameralla tai valitse asiakirjan valokuva galleriasta.","documentReaderDocumentReaderStartScreenButtonCamera":"Kamerasta","documentReaderDocumentReaderStartScreenButtonGallery":"Galleriasta","documentReaderDocumentReaderLayoutConnectionProblem":"Varmista, ett\xE4 kamera on kytketty oikein.","documentReaderDocumentReaderLayoutInitializing":"Alustetaan palvelua...","documentReaderDocumentReaderLayoutProcessing":"K\xE4sitell\xE4\xE4n asiakirjaa...","documentReaderDocumentReaderLayoutDocumentCenter":"Sijoita asiakirja keskelle","documentReaderDocumentReaderLayoutFlipDocument":"K\xE4\xE4nn\xE4 asiakirja","documentReaderInfoScreenSuccessSubtitle":"K\xE4sittely p\xE4\xE4ttynyt.","cameraCaptureCameraCaptureStartScreenTitle":"Lataa valokuva","cameraCaptureCameraCaptureStartScreenSubtitle":"K\xE4yt\xE4 laitteesi kameraa tai valitse kuva galleriasta","cameraCaptureCameraCaptureLayoutDocumentCenter":"Sijoita asiakirja keskelle ja ota valokuva","documentReaderDocumentReaderLayoutStartDetection":"Tunnistetaan asiakirjaa..."}'), sv: JSON.parse('{"strPrepareCamera":"F\xF6rbereder kameran...","hint_fit":"Placera huvudet i ovalen","hint_stayStill":"H\xE5ll stadigt","livenessProcessing_title_processing":"Bearbetar...","hint_lookStraight":"Titta rakt fram","hint_moveCloser":"Flytta n\xE4rmare","hint_moveAway":"Flytta l\xE4ngre bort","livenessRetry_text_noSmiling":"Neutralt uttryck, le inte","livenessRetry_text_noGlare":"Inget skarpt eller bl\xE4ndande ljus","faceLivenessInstructionScreenTitle":"Starta liveness-verifiering","faceLivenessInstructionScreenSubtitle":"Positionera ditt ansikte i mitten av ellipsen och r\xF6r dig n\xE4rmare n\xE4r ramens storlek \xE4ndras.","faceLivenessInstructionScreenButton":"Kom ig\xE5ng","faceLivenessCameraLayoutVideoStatusMessagesRequesting":"Ge appen \xE5tkomstbeh\xF6righet till kameran","messageUnknownError":"Ett fel intr\xE4ffade","faceLivenessCameraLayoutMessageLabelsDetecting":"Identifierar ansikte...","faceLivenessCameraLayoutPreparingService":"F\xF6rbereder tj\xE4nsten...","faceLivenessInfoScreenVerifiedTitle":"Verifierad!","faceLivenessInfoScreenVerifiedSubtitle":"Du har genomf\xF6rt liveness-kontrollen.","statusSuccess":"Utf\xF6rt!","statusCameraUnavailableTitle":"Kameran \xE4r inte tillg\xE4nglig!","statusCameraUnavailableSubtitle":"Ge appen \xE5tkomstbeh\xF6righet till kameran och ladda om denna sida f\xF6r att forts\xE4tta,","statusError":"Fel!","faceLivenessScreenButton":"F\xF6rs\xF6k igen","InfoScreenNoCameraTitle":"Det finns ingen kamera","faceLivenessInfoScreenNoCameraSubtitle":"Kontrollera kameraanslutningen och f\xF6rs\xF6k igen.","faceLivenessRetryScreenTitle":"Vi f\xF6rs\xF6ker igen","faceLivenessRetryScreenSubtitle":"F\xF6lj riktlinjerna","faceDetectionInstructionScreenTitle":"Ta en selfie","faceDetectionInstructionScreenSubtitle":"Positionera ansiktet i mitten av ellipsen och h\xE5ll stadigt. Vi sk\xF6ter resten.","faceInfoScreenSuccessSubtitle":"Fotot tas.","documentReaderDocumentReaderStartScreenTitle":"Skanna in ett ID-kort i din webbl\xE4sare","documentReaderDocumentReaderStartScreenSubtitle":"Anv\xE4nd din enhetskamera f\xF6r att skanna dokument eller foton fr\xE5n galleriet","documentReaderDocumentReaderStartScreenButtonCamera":"Fr\xE5n kameran","documentReaderDocumentReaderStartScreenButtonGallery":"Fr\xE5n galleriet","documentReaderDocumentReaderLayoutConnectionProblem":"Kontrollera att kameran \xE4r korrekt ansluten.","documentReaderDocumentReaderLayoutInitializing":"Startar tj\xE4nsten...","documentReaderDocumentReaderLayoutProcessing":"Dokumentet bearbetas....","documentReaderDocumentReaderLayoutDocumentCenter":"Placera dokumentet i mitten","documentReaderDocumentReaderLayoutFlipDocument":"V\xE4nd p\xE5 dokumentet","documentReaderInfoScreenSuccessSubtitle":"Bearbetning klar.","cameraCaptureCameraCaptureStartScreenTitle":"Ladda upp foto","cameraCaptureCameraCaptureStartScreenSubtitle":"Anv\xE4nd kameran eller v\xE4lj ett foto fr\xE5n galleriet","cameraCaptureCameraCaptureLayoutDocumentCenter":"Placera dokumentet i mitten och ta ett foto","documentReaderDocumentReaderLayoutStartDetection":"Identifierar dokument..."}') }, Je = function (e3) {
                    return function (t3) {
                        var n3 = t3.locale, r2 = (window.navigator ? window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage : "en").substring(0, 2).toLowerCase(), a2 = Ke.hasOwnProperty(r2) ? r2 : "en", o2 = n3 && Ke.hasOwnProperty(n3) ? n3 : a2;
                        return h.createElement(re.LocalizationProvider, { disableCache: true, locale: o2, translations: Ke }, h.createElement(e3, t3));
                    };
                }, Ye = function (e3) {
                    return function (t3) {
                        return h.createElement(ae.Provider, { value: t3 }, h.createElement(e3, t3));
                    };
                };
                n2(704);
                var Qe = function (e3) {
                    switch (e3) {
                        case "":
                        case "true":
                            return true;
                        default:
                            return false;
                    }
                }, Xe = function (e3) {
                    var t3 = Number(e3);
                    if (!isNaN(t3) && e3 !== null && e3 !== "")
                        return t3;
                };
                function $e() {
                    for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
                        t3[n3] = arguments[n3];
                    var r2 = [].concat(t3);
                    return r2.length === 0 ? function (e4) {
                        return e4;
                    } : r2.length === 1 ? r2[0] : r2.reduce(function (e4, t4) {
                        return function () {
                            return e4(t4.apply(void 0, arguments));
                        };
                    });
                }
                const et = $e(Ye, Je)(function () {
                    var e3 = h.useContext(ae), t3 = e3.onSuccess, n3 = e3.onFail, r2 = e3.debug, a2 = e3.startScale, o2 = ie().orientation, i2 = (0, re.useLocalize)().translate, s2 = y(h.useState(null), 2), l2 = s2[0], u2 = s2[1], c2 = y(qe(a2), 2), d2 = c2[0], f2 = d2.complitionStatus, p2 = d2.videoStatus, m2 = d2.scale, v2 = d2.capture, g2 = c2[1], b2 = h.useCallback(function () {
                        return g2({ type: ze.RESET });
                    }, []), C2 = h.useCallback(function () {
                        return g2({ type: ze.START });
                    }, []), S2 = h.useCallback(function () {
                        return g2({ type: ze.FAILED });
                    }, []), _2 = h.useCallback(function (e4) {
                        var t4 = e4.status;
                        return g2({ type: ze.SET_STREAM_STATUS, payload: t4 });
                    }, []), w2 = h.useCallback(function (e4) {
                        g2({ type: ze.SET_FD_RESPONSE, payload: e4 });
                    }, []);
                    return h.useEffect(function () {
                        return function () {
                            l2 && clearTimeout(l2);
                        };
                    }, []), h.useEffect(function () {
                        f2 === D.SUCCESS && t3 && u2(setTimeout(function () {
                            return t3({ capture: v2 });
                        }, I));
                    }, [f2]), h.useEffect(function () {
                        oe.tq && b2();
                    }, [oe.tq, o2]), h.useMemo(function () {
                        return h.createElement(Oe, { complitionStatus: f2, onClose: n3 }, f2 === D.INSTRUCTION ? h.createElement(Ze, { onClick: C2, icon: "instruction-face-detection", title: i2("faceDetectionInstructionScreenTitle"), subtitle: i2("faceDetectionInstructionScreenSubtitle") }) : f2 === D.CAPTURING ? h.createElement(Se, { onCapture: w2, debug: r2, scale: m2, onChangeVideoStatus: _2, videoStatus: p2, onComplitionFailed: S2 }) : f2 === D.PROCESSING_REQUEST ? h.createElement(Fe, { title: i2("livenessProcessing_title_processing") }) : f2 === D.SUCCESS ? h.createElement(Me, { type: "verified", title: i2("statusSuccess"), subtitle: i2("faceInfoScreenSuccessSubtitle") }) : f2 === D.FAILED && p2 === N.PERMISSION_DENIED ? h.createElement(Me, { type: "camera-logo", title: i2("statusCameraUnavailableTitle"), subtitle: i2("statusCameraUnavailableSubtitle") }) : f2 === D.FAILED && p2 === N.UNKNOWN_ERROR ? h.createElement(Me, { onClick: b2, type: "error", title: i2("statusError"), subtitle: i2("messageUnknownError") }) : f2 === D.FAILED && p2 === N.NO_CAMERA ? h.createElement(Me, { type: "error", title: i2("InfoScreenNoCameraTitle"), subtitle: i2("faceLivenessInfoScreenNoCameraSubtitle") }) : h.createElement(Be, { onClick: b2 }));
                    }, [n3, b2, w2, r2, m2, p2, f2, _2]);
                });
                var tt = n2(273), nt = n2(761), rt = n2(965);
                var at, ot = [ue.Z, q.Z, ne.Z, X.Z, Te.Z, Ie.Z, tt.Z, De.Z, nt.Z, rt.Z, Ve.Z, Ue.Z, ke.Z, Ne.Z].reduce(function (e3, t3) {
                    return e3 + t3.toString();
                }, ""), it = function (e3) {
                    s(i2, e3);
                    var t3, n3, a2 = (t3 = i2, n3 = function () {
                        if (typeof Reflect == "undefined" || !Reflect.construct)
                            return false;
                        if (Reflect.construct.sham)
                            return false;
                        if (typeof Proxy == "function")
                            return true;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                            })), true;
                        } catch (e4) {
                            return false;
                        }
                    }(), function () {
                        var e4, r2 = c(t3);
                        if (n3) {
                            var a3 = c(this).constructor;
                            e4 = Reflect.construct(r2, arguments, a3);
                        } else
                            e4 = r2.apply(this, arguments);
                        return u(this, e4);
                    });
                    function i2() {
                        var e4;
                        r(this, i2), (e4 = a2.call(this)).root = e4.attachShadow({ mode: "open" }), e4.mounted = false;
                        var t4 = document.createElement("template");
                        return t4.innerHTML = "\n            <style>\n            :host {\n                position: fixed;\n                display: flex;\n                height: 100%;\n                width: 100%;\n                top: 0;\n                left: 0;\n                z-index: 2147483647;\n                font-family: var(--font-family), sans-serif;\n            }\n            ".concat(ot, '\n            </style>\n            <div id="mount" style="display: flex; flex: 1"></div>\n        '), e4.root.appendChild(t4.content.cloneNode(true)), e4.mount = e4.root.getElementById("mount"), e4;
                    }
                    return o(i2, [{
                        key: "attributeChangedCallback", value: function (e4) {
                            var t4 = i2.observedAttributes.includes(e4);
                            this.mounted && t4 && this.render();
                        }
                    }, {
                        key: "connectedCallback", value: function () {
                            this.render(), this.mounted = true;
                        }
                    }, {
                        key: "render", value: function () {
                            var e4 = this;
                            m.render(h.createElement(et, {
                                onSuccess: function (t4) {
                                    return e4.mount.dispatchEvent(new CustomEvent("face-capture", { bubbles: true, composed: true, detail: t4 }));
                                }, onFail: function () {
                                    return e4.mount.dispatchEvent(new CustomEvent("face-capture", { bubbles: true, composed: true }));
                                }, debug: Qe(this.getAttribute("debug")), locale: this.getAttribute("locale") || void 0
                            }), this.mount);
                        }
                    }, {
                        key: "disconnectedCallback", value: function () {
                            m.unmountComponentAtNode(this.mount);
                        }
                    }], [{
                        key: "observedAttributes", get: function () {
                            return ["debug", "locale"];
                        }
                    }]), i2;
                }(p(HTMLElement)), st = new Uint8Array(16);
                function lt() {
                    if (!at && !(at = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto)))
                        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return at(st);
                }
                const ut = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, ct = function (e3) {
                    return typeof e3 == "string" && ut.test(e3);
                };
                for (var dt = [], ft = 0; ft < 256; ++ft)
                    dt.push((ft + 256).toString(16).substr(1));
                const pt = function (e3, t3, n3) {
                    var r2 = (e3 = e3 || {}).random || (e3.rng || lt)();
                    if (r2[6] = 15 & r2[6] | 64, r2[8] = 63 & r2[8] | 128, t3) {
                        n3 = n3 || 0;
                        for (var a2 = 0; a2 < 16; ++a2)
                            t3[n3 + a2] = r2[a2];
                        return t3;
                    }
                    return function (e4) {
                        var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n4 = (dt[e4[t4 + 0]] + dt[e4[t4 + 1]] + dt[e4[t4 + 2]] + dt[e4[t4 + 3]] + "-" + dt[e4[t4 + 4]] + dt[e4[t4 + 5]] + "-" + dt[e4[t4 + 6]] + dt[e4[t4 + 7]] + "-" + dt[e4[t4 + 8]] + dt[e4[t4 + 9]] + "-" + dt[e4[t4 + 10]] + dt[e4[t4 + 11]] + dt[e4[t4 + 12]] + dt[e4[t4 + 13]] + dt[e4[t4 + 14]] + dt[e4[t4 + 15]]).toLowerCase();
                        if (!ct(n4))
                            throw TypeError("Stringified UUID is invalid");
                        return n4;
                    }(r2);
                };
                function ht(e3, t3) {
                    var n3 = Object.keys(e3);
                    if (Object.getOwnPropertySymbols) {
                        var r2 = Object.getOwnPropertySymbols(e3);
                        t3 && (r2 = r2.filter(function (t4) {
                            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                        })), n3.push.apply(n3, r2);
                    }
                    return n3;
                }
                function mt(e3) {
                    for (var t3 = 1; t3 < arguments.length; t3++) {
                        var n3 = arguments[t3] != null ? arguments[t3] : {};
                        t3 % 2 ? ht(Object(n3), true).forEach(function (t4) {
                            Q(e3, t4, n3[t4]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : ht(Object(n3)).forEach(function (t4) {
                            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
                        });
                    }
                    return e3;
                }
                function vt() {
                    return (vt = S(O().mark(function e3(t3, n3) {
                        var r2, a2, o2, i2, s2, l2, u2;
                        return O().wrap(function (e4) {
                            for (; ;)
                                switch (e4.prev = e4.next) {
                                    case 0:
                                        return r2 = n3.backendURL, a2 = n3.uuid, n3.debug, o2 = n3.try_id, i2 = o2 === void 0 ? 1 : o2, e4.prev = 1, e4.next = 4, fetch("".concat(r2, "/api/liveness/3d?id=").concat(a2, "&tryid=").concat(i2), { method: "POST", body: t3 });
                                    case 4:
                                        return l2 = e4.sent, e4.next = 7, l2.json();
                                    case 7:
                                        if (((u2 = e4.sent) == null || (s2 = u2.results) === null || s2 === void 0 ? void 0 : s2.livenessStatus) === 0) {
                                            e4.next = 10;
                                            break;
                                        }
                                        throw u2;
                                    case 10:
                                        return e4.abrupt("return", u2);
                                    case 13:
                                        throw e4.prev = 13, e4.t0 = e4.catch(1), mt({}, e4.t0);
                                    case 16:
                                    case "end":
                                        return e4.stop();
                                }
                        }, e3, null, [[1, 13]]);
                    }))).apply(this, arguments);
                }
                const gt = {
                    getLivenessResult: function (e3, t3) {
                        return vt.apply(this, arguments);
                    }
                };
                function yt(e3, t3) {
                    var n3 = Object.keys(e3);
                    if (Object.getOwnPropertySymbols) {
                        var r2 = Object.getOwnPropertySymbols(e3);
                        t3 && (r2 = r2.filter(function (t4) {
                            return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
                        })), n3.push.apply(n3, r2);
                    }
                    return n3;
                }
                function bt(e3) {
                    for (var t3 = 1; t3 < arguments.length; t3++) {
                        var n3 = arguments[t3] != null ? arguments[t3] : {};
                        t3 % 2 ? yt(Object(n3), true).forEach(function (t4) {
                            Q(e3, t4, n3[t4]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : yt(Object(n3)).forEach(function (t4) {
                            Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
                        });
                    }
                    return e3;
                }
                const Ct = $e(Ye, Je)(function () {
                    var e3 = h.useContext(ae), t3 = e3.onSuccess, n3 = e3.onFail, r2 = e3.url, a2 = r2 === void 0 ? "https://faceapi.regulaforensics.com" : r2, o2 = e3.debug, i2 = e3.startScale, s2 = e3.endScale, l2 = ie().orientation, u2 = (0, re.useLocalize)().translate, c2 = y(h.useState(null), 2), d2 = c2[0], f2 = c2[1], p2 = y(h.useState(pt()), 1)[0], m2 = y(qe(i2, s2), 2), v2 = m2[0], g2 = v2.complitionStatus, b2 = v2.videoStatus, C2 = v2.scale, _2 = v2.request, w2 = v2.tryCount, E2 = v2.response, L2 = v2.images, k2 = m2[1], R2 = h.useCallback(function () {
                        return k2({ type: ze.RESET });
                    }, []), x2 = h.useCallback(function () {
                        return k2({ type: ze.START });
                    }, []), T2 = h.useCallback(function () {
                        return k2({ type: ze.FAILED });
                    }, []), P2 = h.useCallback(function (e4) {
                        var t4 = e4.status;
                        return k2({ type: ze.SET_STREAM_STATUS, payload: t4 });
                    }, []), M2 = h.useCallback(function (e4) {
                        k2({ type: ze.SET_FL_RESPONSE, payload: e4 });
                    }, []), A2 = h.useCallback(function () {
                        n3(E2);
                    }, [E2]);
                    return h.useEffect(function () {
                        return function () {
                            d2 && clearTimeout(d2);
                        };
                    }, []), h.useEffect(function () {
                        function e4() {
                            return e4 = S(O().mark(function e5() {
                                var n4;
                                return O().wrap(function (e6) {
                                    for (; ;)
                                        switch (e6.prev = e6.next) {
                                            case 0:
                                                if (n4 = { code: -1 }, e6.prev = 1, !_2) {
                                                    e6.next = 8;
                                                    break;
                                                }
                                                return e6.next = 5, gt.getLivenessResult(_2, { backendURL: a2, uuid: p2, try_id: w2 });
                                            case 5:
                                                n4 = e6.sent, e6.next = 9;
                                                break;
                                            case 8:
                                                return e6.abrupt("return", Promise.reject(n4));
                                            case 9:
                                                k2({ type: ze.SUCCESS, payload: n4 }), t3 && f2(setTimeout(function () {
                                                    return t3(bt(bt({}, n4), {}, { images: L2 }));
                                                }, I)), e6.next = 16;
                                                break;
                                            case 13:
                                                e6.prev = 13, e6.t0 = e6.catch(1), k2({ type: ze.FAILED, payload: e6.t0 });
                                            case 16:
                                            case "end":
                                                return e6.stop();
                                        }
                                }, e5, null, [[1, 13]]);
                            })), e4.apply(this, arguments);
                        }
                        g2 === D.PROCESSING_REQUEST && function () {
                            e4.apply(this, arguments);
                        }();
                    }, [g2, _2]), h.useEffect(function () {
                        oe.tq && R2();
                    }, [oe.tq, l2]), h.useMemo(function () {
                        return h.createElement(Oe, { complitionStatus: g2, onClose: A2 }, g2 === D.INSTRUCTION ? h.createElement(Ze, { onClick: x2, icon: "instruction-face-liveness", title: u2("faceLivenessInstructionScreenTitle"), subtitle: u2("faceLivenessInstructionScreenSubtitle") }) : g2 === D.CAPTURING ? h.createElement(Se, { onCapture: M2, debug: o2, scale: C2, onChangeVideoStatus: P2, videoStatus: b2, onComplitionFailed: T2 }) : g2 === D.PROCESSING_REQUEST ? h.createElement(Fe, { title: u2("livenessProcessing_title_processing") }) : g2 === D.SUCCESS ? h.createElement(Me, { type: "verified", title: u2("faceLivenessInfoScreenVerifiedTitle"), subtitle: u2("faceLivenessInfoScreenVerifiedSubtitle") }) : g2 === D.FAILED && b2 === N.PERMISSION_DENIED ? h.createElement(Me, { type: "camera-logo", title: u2("statusCameraUnavailableTitle"), subtitle: u2("statusCameraUnavailableSubtitle") }) : g2 === D.FAILED && b2 === N.UNKNOWN_ERROR ? h.createElement(Me, { onClick: R2, type: "error", title: u2("statusError"), subtitle: u2("messageUnknownError") }) : g2 === D.FAILED && b2 === N.NO_CAMERA ? h.createElement(Me, { type: "error", title: u2("InfoScreenNoCameraTitle"), subtitle: u2("faceLivenessInfoScreenNoCameraSubtitle") }) : h.createElement(Be, { onClick: R2 }));
                    }, [n3, R2, M2, o2, C2, b2, g2, P2]);
                });
                var St = [ue.Z, q.Z, ne.Z, X.Z, Te.Z, Ie.Z, tt.Z, De.Z, nt.Z, rt.Z, Ve.Z, Ue.Z, Le.Z, Ne.Z].reduce(function (e3, t3) {
                    return e3 + t3.toString();
                }, ""), _t = function (e3) {
                    s(i2, e3);
                    var t3, n3, a2 = (t3 = i2, n3 = function () {
                        if (typeof Reflect == "undefined" || !Reflect.construct)
                            return false;
                        if (Reflect.construct.sham)
                            return false;
                        if (typeof Proxy == "function")
                            return true;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                            })), true;
                        } catch (e4) {
                            return false;
                        }
                    }(), function () {
                        var e4, r2 = c(t3);
                        if (n3) {
                            var a3 = c(this).constructor;
                            e4 = Reflect.construct(r2, arguments, a3);
                        } else
                            e4 = r2.apply(this, arguments);
                        return u(this, e4);
                    });
                    function i2() {
                        var e4;
                        r(this, i2), (e4 = a2.call(this)).root = e4.attachShadow({ mode: "open" }), e4.mounted = false;
                        var t4 = document.createElement("template");
                        return t4.innerHTML = "\n            <style>\n            :host {\n                position: fixed;\n                display: flex;\n                height: 100%;\n                width: 100%;\n                top: 0;\n                left: 0;\n                z-index: 2147483647;\n                font-family: var(--font-family), sans-serif;\n            }\n            ".concat(St, '\n            </style>\n            <div id="mount" style="display: flex; flex: 1"></div>\n        '), e4.root.appendChild(t4.content.cloneNode(true)), e4.mount = e4.root.getElementById("mount"), e4;
                    }
                    return o(i2, [{
                        key: "attributeChangedCallback", value: function (e4) {
                            var t4 = i2.observedAttributes.includes(e4);
                            this.mounted && t4 && this.render();
                        }
                    }, {
                        key: "connectedCallback", value: function () {
                            this.render(), this.mounted = true;
                        }
                    }, {
                        key: "render", value: function () {
                            var e4 = this;
                            m.render(h.createElement(Ct, {
                                onSuccess: function () {
                                    var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { code: -1 };
                                    return e4.mount.dispatchEvent(new CustomEvent("face-liveness", { bubbles: true, composed: true, detail: t4 }));
                                }, onFail: function () {
                                    var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { code: -1 };
                                    return e4.mount.dispatchEvent(new CustomEvent("face-liveness", { bubbles: true, composed: true, detail: t4 }));
                                }, url: this.getAttribute("url") || void 0, debug: Qe(this.getAttribute("debug")), locale: this.getAttribute("locale") || void 0, mode: Xe(this.getAttribute("mode"))
                            }), this.mount);
                        }
                    }, {
                        key: "disconnectedCallback", value: function () {
                            m.unmountComponentAtNode(this.mount);
                        }
                    }], [{
                        key: "observedAttributes", get: function () {
                            return ["url", "debug", "locale", "mode"];
                        }
                    }]), i2;
                }(p(HTMLElement));
                console.info("%cThis site using @regulaforensics/vp-frontend-components face version: ".concat("1.1.0".trim()), "color: #6e56b0;");
                var wt = window.customElements.get("face-capture"), Et = window.customElements.get("face-liveness");
                !wt && "facedetection,faceliveness,camerasnapshot,docreader".includes("facedetection") && window.customElements.define("face-capture", it), !Et && "facedetection,faceliveness,camerasnapshot,docreader".includes("faceliveness") && window.customElements.define("face-liveness", _t);
            }, 915: () => {
            }, 704: (e2, t2) => {
                !function () {
                    for (var e3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t3 = new Uint8Array(256), n2 = 0; n2 < e3.length; n2++)
                        t3[e3.charCodeAt(n2)] = n2;
                }();
            }, 76: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._1RHQH45A9-N5NZJ_Z5gOUn {\n  border: none;\n  margin: 0;\n  background: #663399;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  font-family: var(--font-family), sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 24px;\n  color: white;\n  appearance: none;\n  padding: 0.5em 2.15em;\n  border-radius: 2px;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n}\n\n._1RHQH45A9-N5NZJ_Z5gOUn:hover {\n  background: #7c45b4;\n}\n\n._1RHQH45A9-N5NZJ_Z5gOUn:active {\n  background: #663399;\n}\n", ""]), a.locals = { button: "_1RHQH45A9-N5NZJ_Z5gOUn" };
                const o = a;
            }, 112: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, ".lzJNy8FO00HoVx3U7fnxO {\n    animation-name: lzJNy8FO00HoVx3U7fnxO;\n    animation-duration: 12s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n}\n\n@keyframes lzJNy8FO00HoVx3U7fnxO {\n    0% {\n        transform: scale(0);\n    }\n    8% {\n        transform: scale(1);\n    }\n    47% {\n        transform: scale(1);\n    }\n    48% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(0);\n    }\n}\n\n._37F1jHfN13Ygbar1-LmOab {\n    animation-name: _37F1jHfN13Ygbar1-LmOab;\n    animation-duration: 12s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n}\n\n@keyframes _37F1jHfN13Ygbar1-LmOab {\n    0% {\n        transform: scale(0);\n    }\n    8% {\n        transform: scale(1);\n    }\n    47% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 0;\n        transform: scale(1);\n    }\n}\n\n._3Ack2bQRR73i9s8XACbVoj {\n    animation-name: _3Ack2bQRR73i9s8XACbVoj;\n    animation-duration: 12s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n}\n\n@keyframes _3Ack2bQRR73i9s8XACbVoj {\n    0% {\n        opacity: 0;\n    }\n    10% {\n        opacity: 0;\n    }\n    17% {\n        opacity: 1;\n    }\n    47% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n._1IlgCqBUnA7JLaAhEyl5UY {\n    animation-name: _1IlgCqBUnA7JLaAhEyl5UY;\n    animation-duration: 12s;\n    animation-iteration-count: infinite;\n    transform-origin: 267px 30px;\n}\n\n@keyframes _1IlgCqBUnA7JLaAhEyl5UY {\n    0% {\n        opacity: 0;\n        transform: scale(0);\n    }\n    20% {\n        opacity: 0;\n        transform: scale(0);\n    }\n    27% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    47% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    50% {\n        opacity: 0;\n        transform: scale(1);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(1);\n    }\n}\n\n._3iG32iUnMzgMHNpLMxdLcA {\n    animation-name: _3iG32iUnMzgMHNpLMxdLcA;\n    animation-duration: 12s;\n    animation-iteration-count: infinite;\n    transform-origin: 267px 35px;\n}\n\n@keyframes _3iG32iUnMzgMHNpLMxdLcA {\n    0% {\n        opacity: 0;\n    }\n    27% {\n        opacity: 0;\n    }\n    28% {\n        opacity: 1;\n    }\n    47% {\n        opacity: 1;\n    }\n    50% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n._2knyEfeZfnQ5wdML_S9BO7 {\n    animation-name: _2knyEfeZfnQ5wdML_S9BO7;\n    animation-duration: 12s;\n    animation-iteration-count: infinite;\n}\n\n@keyframes _2knyEfeZfnQ5wdML_S9BO7 {\n    0% {\n        opacity: 0;\n        transform: translate(92px, 25px) scale(1.7);\n    }\n    47% {\n        opacity: 0;\n        transform: translate(92px, 25px) scale(1.7);\n    }\n    55% {\n        opacity: 1;\n        transform: translate(20px, 20px) scale(1);\n    }\n    97% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n        transform: translate(20px, 20px) scale(1);\n    }\n}\n\n._1QoZGflqoD8osXYgHvDwpJ {\n    animation-name: _1QoZGflqoD8osXYgHvDwpJ;\n    animation-duration: 12s;\n    animation-iteration-count: infinite;\n}\n\n@keyframes _1QoZGflqoD8osXYgHvDwpJ {\n    0% {\n        transform: translate(110px, 20px);\n        opacity: 0;\n    }\n    55% {\n        transform: translate(110px, 20px);\n        opacity: 0;\n    }\n    63% {\n        transform: translate(110px, 20px);\n        opacity: 1;\n    }\n    97% {\n        opacity: 1;\n    }\n    100% {\n        transform: translate(110px, 20px);\n        opacity: 0;\n    }\n}\n\n._1E0_R44tZCWPghKP3UkdW_ {\n    animation-name: _1E0_R44tZCWPghKP3UkdW_;\n    animation-duration: 12s;\n    animation-iteration-count: infinite;\n}\n\n@keyframes _1E0_R44tZCWPghKP3UkdW_ {\n    0% {\n        opacity: 0;\n    }\n    60% {\n        opacity: 0;\n    }\n    63% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n", ""]), a.locals = { mask: "lzJNy8FO00HoVx3U7fnxO", circle: "_37F1jHfN13Ygbar1-LmOab", man: "_3Ack2bQRR73i9s8XACbVoj", "icon-background": "_1IlgCqBUnA7JLaAhEyl5UY", "icon-mark": "_3iG32iUnMzgMHNpLMxdLcA", photo: "_2knyEfeZfnQ5wdML_S9BO7", card: "_1QoZGflqoD8osXYgHvDwpJ", text: "_1E0_R44tZCWPghKP3UkdW_" };
                const o = a;
            }, 747: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, ".B1NFqx1KSWLPb-waWJXu_ {\n    animation-name: B1NFqx1KSWLPb-waWJXu_;\n    animation-duration: 9s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n}\n\n@keyframes B1NFqx1KSWLPb-waWJXu_ {\n    0% {\n        transform: scale(0);\n    }\n    10% {\n        transform: scale(1);\n    }\n    40% {\n        transform: scale(1);\n    }\n    45% {\n        transform: scale(1.3);\n    }\n    98% {\n        transform: scale(1.3);\n    }\n    100% {\n        transform: scale(0);\n    }\n}\n\n._2bh-E5HQDWBcIoaBdko0hE {\n    animation-name: _2bh-E5HQDWBcIoaBdko0hE;\n    animation-duration: 9s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n}\n\n@keyframes _2bh-E5HQDWBcIoaBdko0hE {\n    0% {\n        transform: scale(0);\n    }\n    10% {\n        transform: scale(1);\n    }\n    40% {\n        transform: scale(1);\n    }\n    45% {\n        transform: scale(1.3);\n    }\n    75% {\n        opacity: 1;\n        transform: scale(1.3);\n    }\n    77% {\n        opacity: 0;\n        transform: scale(1.3);\n    }\n    98% {\n        opacity: 0;\n        transform: scale(1.3);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(0);\n    }\n}\n\n._1UoaADVeoP8DpFoNXLytXw {\n    animation-name: _1UoaADVeoP8DpFoNXLytXw;\n    animation-duration: 9s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n}\n\n@keyframes _1UoaADVeoP8DpFoNXLytXw {\n    0% {\n        opacity: 0;\n    }\n    15% {\n        opacity: 0;\n    }\n    20% {\n        opacity: 1;\n    }\n    50% {\n        transform: scale(1);\n    }\n    55% {\n        transform: scale(1.35);\n    }\n    98% {\n        opacity: 1;\n        transform: scale(1.35);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(0);\n    }\n}\n\n.CrCjwSy8_oTQIWa3McVct {\n    animation-name: CrCjwSy8_oTQIWa3McVct;\n    animation-duration: 9s;\n    animation-iteration-count: infinite;\n    transform-origin: 267px 30px;\n}\n\n@keyframes CrCjwSy8_oTQIWa3McVct {\n    0% {\n        opacity: 0;\n        transform: scale(0);\n    }\n    70% {\n        opacity: 0;\n        transform: scale(0);\n    }\n    75% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    98% {\n        transform: scale(1);\n    }\n    100% {\n        opacity: 1;\n        transform: scale(0);\n    }\n}\n\n.GGeaRnLkPtrEpeS6fyEzR {\n    animation-name: GGeaRnLkPtrEpeS6fyEzR;\n    animation-duration: 9s;\n    animation-iteration-count: infinite;\n    transform-origin: 267px 35px;\n}\n\n@keyframes GGeaRnLkPtrEpeS6fyEzR {\n    0% {\n        opacity: 0;\n    }\n    75% {\n        opacity: 0;\n    }\n    77% {\n        opacity: 1;\n    }\n    98% {\n        opacity: 1;\n        transform: scale(1);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(0);\n    }\n}\n\n._11om1lPZ9jJ5eGP_SeuRGT {\n    animation-name: _11om1lPZ9jJ5eGP_SeuRGT;\n    animation-duration: 9s;\n    animation-iteration-count: infinite;\n    transform-origin: center;\n}\n\n\n@keyframes _11om1lPZ9jJ5eGP_SeuRGT {\n    0% {\n        transform: scale(0.955);\n        opacity: 0;\n    }\n    65% {\n        opacity: 0;\n    }\n    70% {\n        opacity: 1;\n    }\n    98% {\n        opacity: 1;\n        transform: scale(0.955);\n    }\n    100% {\n        transform: scale(0);\n        opacity: 0;\n    }\n}\n", ""]), a.locals = { mask: "B1NFqx1KSWLPb-waWJXu_", circle: "_2bh-E5HQDWBcIoaBdko0hE", man: "_1UoaADVeoP8DpFoNXLytXw", "icon-background": "CrCjwSy8_oTQIWa3McVct", "icon-mark": "GGeaRnLkPtrEpeS6fyEzR", "full-circle": "_11om1lPZ9jJ5eGP_SeuRGT" };
                const o = a;
            }, 1: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._33hUWlOFSnRECrp6UIKvuz {\n    display: inline-block;\n    padding: 0.75em 1.1em;\n    color: white;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 25px;\n    border-radius: 6px;\n    background: rgba(0, 0, 0, 0.6);\n}\n\n._33hUWlOFSnRECrp6UIKvuz._3ocv84yYjQeAnW9Xyoem-v {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n", ""]), a.locals = { container: "_33hUWlOFSnRECrp6UIKvuz", primary: "_3ocv84yYjQeAnW9Xyoem-v" };
                const o = a;
            }, 887: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, '._1IG3vpyk_S7utMubaPfpfn {\n  height: 3em;\n  width: 3em;\n  animation: _1UiFJKMTrLsX-yV_NiGFtU 3s linear infinite;\n}\n\n@keyframes _1UiFJKMTrLsX-yV_NiGFtU {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n._1In8ws4d7N7YGxBpyF1ve4 {\n  width: 3em;\n  height: 3em;\n  clip: rect(22px, 44px, 44px, 0);\n  animation: _1UiFJKMTrLsX-yV_NiGFtU 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n}\n\n._1In8ws4d7N7YGxBpyF1ve4::before {\n  box-sizing: border-box;\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  height: 44px;\n  width: 44px;\n  border: 3px solid transparent;\n  border-top: 3px solid #6F21BD;\n  border-radius: 50%;\n  animation: _1UiFJKMTrLsX-yV_NiGFtU 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n}\n\n._1In8ws4d7N7YGxBpyF1ve4::after {\n  box-sizing: border-box;\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  height: 44px;\n  width: 44px;\n  border: 3px solid rgba(49, 49, 49, 0.1);\n  border-radius: 50%;\n}\n', ""]), a.locals = { container: "_1IG3vpyk_S7utMubaPfpfn", spin: "_1UiFJKMTrLsX-yV_NiGFtU", spinner: "_1In8ws4d7N7YGxBpyF1ve4" };
                const o = a;
            }, 965: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._3YDP-TyhZrUB09CQFrepzp {\n  display: flex;\n  flex: 1;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: white;\n  background: black;\n}\n._2e3qoF7XA8mXVdJioAF6yr {\n  display: block;\n}\n\n._3Z2O7bZ2m6uHpwuIgGaOee {\n  display: none;\n}", ""]), a.locals = { container: "_3YDP-TyhZrUB09CQFrepzp", message: "_2e3qoF7XA8mXVdJioAF6yr", "file-input": "_3Z2O7bZ2m6uHpwuIgGaOee" };
                const o = a;
            }, 273: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._28-W_knW4wbXPpqR703yw9 {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: rgba(255,255,255,1);\n}\n\n._1rRicHlsFfcB4BDaTSE96e {\n  display: flex;\n  width: 640px;\n  height: 360px;\n  position: relative;\n  background: white;\n  overflow: hidden;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02);\n  color: white;\n}\n\n._1rRicHlsFfcB4BDaTSE96e.tRaOpzb2Hp2FPFgEFsY3q {\n    width: 100%;\n    height: 100%;\n}\n\nheader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  padding: 1em;\n  box-sizing: border-box;\n}\n\nheader button, footer button {\n  border: none;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n  background: none;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  appearance: none;\n}\n\n.T_8HcGm3-A3qTWfyqO5vB {\n  position: absolute;\n  bottom: 0;\n  padding: 0 1em 0.8em;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n}\n\n.aJzN4J2Wid_5lXvtqWZvg {\n  display: flex;\n  align-items: center;\n}\n\n.aJzN4J2Wid_5lXvtqWZvg span {\n  font-size: 10px;\n  line-height: 24px;\n  color: #8C8C8C;\n}\n\n.aJzN4J2Wid_5lXvtqWZvg .I974gJGLPBhgpmJmt8Pz3 {\n  margin: 0 6px;\n  opacity: 0.3;\n  height: 18px;\n  width: 1px;\n  background-color: #8C8C8C;\n}\n\n@media (max-width: 640px) {\n  ._1rRicHlsFfcB4BDaTSE96e {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n  }\n\n  .T_8HcGm3-A3qTWfyqO5vB {\n    width: 100%;\n    justify-content: center;\n  }\n}\n\n@media (max-height: 360px) {\n  ._1rRicHlsFfcB4BDaTSE96e {\n    height: 100%;\n  }\n}\n", ""]), a.locals = { container: "_28-W_knW4wbXPpqR703yw9", window: "_1rRicHlsFfcB4BDaTSE96e", full: "tRaOpzb2Hp2FPFgEFsY3q", footer: "T_8HcGm3-A3qTWfyqO5vB", ads: "aJzN4J2Wid_5lXvtqWZvg", pipe: "I974gJGLPBhgpmJmt8Pz3" };
                const o = a;
            }, 761: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "", ""]), a.locals = {};
                const o = a;
            }, 672: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._1o0pN7NQPI-tH6xWnozy0F {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    color: white;\n}\n\nbutton:focus {\n    outline: none;\n}\n\n\n.q72Wlm1Yr7JT2R1xLG6a3 {\n    display: block;\n    transform: scaleX(-1);\n}\n", ""]), a.locals = { container: "_1o0pN7NQPI-tH6xWnozy0F", "debug-canvas": "q72Wlm1Yr7JT2R1xLG6a3" };
                const o = a;
            }, 841: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._2B4fYRg4uvE80Ny_nEJGc- {\n    display: flex;\n    flex: 1;\n    justify-content: center;\n    align-items: flex-start;\n    background-color: rgba(255,255,255,1);\n}\n\n._2aVQU4E9YTc8y2SyCCFaD {\n    display: flex;\n    width: 640px;\n    height: 360px;\n    position: relative;\n    background: white;\n    overflow: hidden;\n    border-radius: 12px;\n    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02);\n    color: white;\n}\n\ndiv[data-device='mobile'] ._2aVQU4E9YTc8y2SyCCFaD {\n    width: 360px;\n    height: 640px;\n}\n\nheader {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    padding: 1em;\n    box-sizing: border-box;\n}\n\nheader button, footer button {\n    border: none;\n    padding: 0;\n    margin: 0;\n    text-decoration: none;\n    background: none;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, transform 150ms ease;\n    appearance: none;\n}\n\n._1TUe3hThTiAGpZ1TvyAr0t {\n    position: absolute;\n    bottom: 0;\n    padding: 0 1em 0.8em;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n}\n\ndiv[data-device='mobile'] ._1TUe3hThTiAGpZ1TvyAr0t {\n    width: 100%;\n    justify-content: center;\n}\n\n._1g96imQhL8Ai19vILuCNek {\n    display: flex;\n    align-items: center;\n}\n\n._1g96imQhL8Ai19vILuCNek span {\n    font-size: 10px;\n    line-height: 24px;\n    color: #8C8C8C;\n}\n\n._1g96imQhL8Ai19vILuCNek ._3_sLL4KnHEWGGcpU1uAtpg {\n    margin: 0 6px;\n    opacity: 0.3;\n    height: 18px;\n    width: 1px;\n    background-color: #8C8C8C;\n}\n\n@media (max-width: 360px) {\n    div[data-device='mobile'] ._2aVQU4E9YTc8y2SyCCFaD {\n        width: 100%;\n    }\n}\n\n@media (max-height: 640px) {\n    div[data-device='mobile'] ._2aVQU4E9YTc8y2SyCCFaD {\n        height: 100%;\n    }\n}\n\n@media (max-width: 360px) and (max-height: 640px) {\n    div[data-device='mobile'] ._2aVQU4E9YTc8y2SyCCFaD {\n        border-radius: 0;\n    }\n}\n\n@media (max-width: 640px) {\n    div[data-device='desktop'] ._2aVQU4E9YTc8y2SyCCFaD {\n        width: 100%;\n    }\n}\n\n@media (max-height: 360px) {\n    div[data-device='desktop'] ._2aVQU4E9YTc8y2SyCCFaD {\n        height: 100%;\n    }\n}\n\n@media (max-width: 640px) and (max-height: 360px) {\n    div[data-device='desktop'] ._2aVQU4E9YTc8y2SyCCFaD {\n        border-radius: 0;\n    }\n}\n", ""]), a.locals = { container: "_2B4fYRg4uvE80Ny_nEJGc-", window: "_2aVQU4E9YTc8y2SyCCFaD", footer: "_1TUe3hThTiAGpZ1TvyAr0t", ads: "_1g96imQhL8Ai19vILuCNek", pipe: "_3_sLL4KnHEWGGcpU1uAtpg" };
                const o = a;
            }, 305: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._2-gr256ojsrHIKm_1NcVFb {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.tlrPeiIngXJbKTixVMi9Y {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.-ycce9qhYT2UAGGjLKhQU {\n    opacity: 0;\n}\n\n._33Lk9wcsP1jreMAYfUw6_l {\n    stroke-dasharray: 100;\n    animation: _2WiqiLKk7VGCcSl74DAExx 10s linear infinite;\n    animation-direction: reverse;\n}\n\n.uQ9Thd5iT7njHBp4ITLR0 {\n    animation: _2u7-3mpK2rrJ7-h4TO6O6e 1s infinite ease-in-out;\n}\n\n@keyframes _2u7-3mpK2rrJ7-h4TO6O6e {\n    0% { opacity: 0.3 }\n    50% { opacity: 1 }\n    100% { opacity: 0.3 }\n}\n\n._3G5BUng1MkTFldcGokBfJe {\n    position: absolute;\n    bottom: 8%;\n    width: 100%;\n    text-align: center;\n    font-size: 18px;\n}\n\n._3q5Rb-HO5Wd05GDFnPgH1R {\n    position: absolute;\n    top: 0;\n    padding: 1em;\n    width: 100%;\n    text-align: center;\n    font-size: 22px;\n    box-sizing: border-box;\n    transition: .5s ease;\n}\n\n._1amk74IA7JAQJtovVBL8p6 {\n    top: 50%;\n    transform: translateY(-50%);\n}\n\ndiv[data-device='mobile'] ._3q5Rb-HO5Wd05GDFnPgH1R {\n    padding: 3em 1em;\n    font-size: 20px;\n}\n\n._2crk990_q_ifOCYGl9G6Hg {\n    animation-name: _1ndNixqrVP1a_3qjuoviGj, ZX1OLy0Mq7JBfLaMUNTnq;\n    animation-duration: .3s, 1s;\n    animation-iteration-count: infinite, infinite;\n    animation-timing-function: ease-out, ease-out;\n    animation-direction: alternate;\n}\n\n@keyframes _1ndNixqrVP1a_3qjuoviGj {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes ZX1OLy0Mq7JBfLaMUNTnq {\n    from {\n        transform: scale(1);\n    }\n    to {\n        transform: scale(1.3);\n    }\n}\n", ""]), a.locals = { container: "_2-gr256ojsrHIKm_1NcVFb", backgroundSvg: "tlrPeiIngXJbKTixVMi9Y", hide: "-ycce9qhYT2UAGGjLKhQU", frame: "_33Lk9wcsP1jreMAYfUw6_l", dash: "_2WiqiLKk7VGCcSl74DAExx", done: "uQ9Thd5iT7njHBp4ITLR0", pulse: "_2u7-3mpK2rrJ7-h4TO6O6e", primaryMessage: "_3G5BUng1MkTFldcGokBfJe", secondaryMessage: "_3q5Rb-HO5Wd05GDFnPgH1R", centreMessage: "_1amk74IA7JAQJtovVBL8p6", pulseAndScale: "_2crk990_q_ifOCYGl9G6Hg", "pulse-animation": "_1ndNixqrVP1a_3qjuoviGj", "scale-animation": "ZX1OLy0Mq7JBfLaMUNTnq" };
                const o = a;
            }, 155: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._2clN3jzvvgLDBfvg8eOdfu {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n._2clN3jzvvgLDBfvg8eOdfu ._3lIG-B6mwGo6OqOC4WJ0ox {\n  display: block;\n  padding-top: 0.85em;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 20px;\n  color: #444444;\n}\n\n.Z8PeU45t-qpR2vQHDelyS {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1.5em;\n}\n\n.f1AeihL33xuv2nyWFvgpE {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 325px;\n}\n\n.f1AeihL33xuv2nyWFvgpE > svg {\n  margin-bottom: 1.12em;\n}\n\n.Z8PeU45t-qpR2vQHDelyS ._2Nr-wNx5rrt9pejJf2MEp0 {\n  margin: 0 0 0.5em;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 28px;\n  color: #262626;\n}\n\n.Z8PeU45t-qpR2vQHDelyS ._1g5mUh2JSLdAhpwK1av_kX {\n  margin: 0 0 1em;\n  font-style: normal;\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 22px;\n  color: #8C8C8C;\n  text-align: center;\n}\n", ""]), a.locals = { "process-message": "_2clN3jzvvgLDBfvg8eOdfu", message: "_3lIG-B6mwGo6OqOC4WJ0ox", "info-message": "Z8PeU45t-qpR2vQHDelyS", "text-container": "f1AeihL33xuv2nyWFvgpE", title: "_2Nr-wNx5rrt9pejJf2MEp0", subtitle: "_1g5mUh2JSLdAhpwK1av_kX" };
                const o = a;
            }, 391: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, ".CqTASZvc9GeXxgx_YFcUo {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    padding: 1em;\n}\n\ndiv[data-device='mobile'] .CqTASZvc9GeXxgx_YFcUo {\n    justify-content: space-between;\n    padding: 4em 1em 1.5em;\n}\n\n._3M8JcjW-gCIkSGaKoqDTHy {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    max-width: 450px;\n}\n\n._276x5Pk1usx6KVag3eUDY3 {\n    margin: 0 0 0.5em;\n    font-size: 20px;\n    font-weight: bold;\n    line-height: 28px;\n    color: black;\n}\n\ndiv[data-device='mobile'] ._276x5Pk1usx6KVag3eUDY3 {\n    font-size: 24px;\n    line-height: 30px;\n    color: #262626;\n}\n\n._3vd0RlDXPv7mk_WRosCgTj {\n    margin: 0 0 1.25em;\n    font-style: normal;\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 22px;\n    color: #8C8C8C;\n    text-align: center;\n}\n\n.CqTASZvc9GeXxgx_YFcUo svg {\n    margin-bottom: 1em;\n}\n\n.CqTASZvc9GeXxgx_YFcUo button {\n    width: 100%;\n    max-width: 300px;\n}\n\n@media (max-width: 360px) {\n    div[data-device='mobile'] .CqTASZvc9GeXxgx_YFcUo svg {\n        width: 100%;\n    }\n}\n", ""]), a.locals = { "instruction-window": "CqTASZvc9GeXxgx_YFcUo", text: "_3M8JcjW-gCIkSGaKoqDTHy", title: "_276x5Pk1usx6KVag3eUDY3", subtitle: "_3vd0RlDXPv7mk_WRosCgTj" };
                const o = a;
            }, 303: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, "._1UdmJacCW2Xvqf3tRjSBnS {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 1em;\n}\n\ndiv[data-device='mobile'] ._1UdmJacCW2Xvqf3tRjSBnS {\n    justify-content: space-between;\n    padding: 4em 1em 3.5em;\n}\n\n._3LtygzS36B_IiDVRCufToN {\n    text-align: center;\n}\n\n._3LtygzS36B_IiDVRCufToN .ocjaErKjr2wSYdo4ICW3b {\n    margin: 0 0 0.5em;\n    font-size: 20px;\n    font-weight: bold;\n    line-height: 28px;\n    color: #262626;\n}\n\ndiv[data-device='mobile'] ._3LtygzS36B_IiDVRCufToN .ocjaErKjr2wSYdo4ICW3b {\n    font-size: 24px;\n    line-height: 30px;\n}\n\n._3LtygzS36B_IiDVRCufToN ._1RAN-uBqDJiBnVTD7hEzOs {\n    margin: 0 0 1em;\n    font-style: normal;\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 20px;\n    color: #8C8C8C;\n}\n\n._1UdmJacCW2Xvqf3tRjSBnS ._3nbgshJOZZWIwx5GCrapse {\n    display: flex;\n}\n\n._3nbgshJOZZWIwx5GCrapse ._3rHIj0wcSy2fqhMxy--lHv {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n._3nbgshJOZZWIwx5GCrapse ._3rHIj0wcSy2fqhMxy--lHv + ._3rHIj0wcSy2fqhMxy--lHv {\n    margin-left: 2em;\n}\n\ndiv[data-device='mobile'] ._3nbgshJOZZWIwx5GCrapse ._3rHIj0wcSy2fqhMxy--lHv + ._3rHIj0wcSy2fqhMxy--lHv {\n    margin-left: 0;\n}\n\n._3rHIj0wcSy2fqhMxy--lHv > svg {\n    margin-bottom: 0.7em;\n}\n\n._21-kLcCN3crH0en0u3Luoz {\n    font-size: 14px;\n    line-height: 20px;\n    color: #262626;\n    margin: 0 0 1em;\n    font-style: normal;\n    font-weight: normal;\n    text-align: center;\n}\n\n._3rHIj0wcSy2fqhMxy--lHv > p {\n    word-break: break-word;\n    text-align: center;\n    max-width: 150px;\n}\n\ndiv[data-device='mobile'] ._1UdmJacCW2Xvqf3tRjSBnS button {\n    width: 100%;\n}\n\n@media (max-width: 360px) {\n    div[data-device='mobile'] ._1UdmJacCW2Xvqf3tRjSBnS ._3nbgshJOZZWIwx5GCrapse svg {\n        width: 100%;\n    }\n}\n", ""]), a.locals = { "retry-screen": "_1UdmJacCW2Xvqf3tRjSBnS", text: "_3LtygzS36B_IiDVRCufToN", title: "ocjaErKjr2wSYdo4ICW3b", subtitle: "_1RAN-uBqDJiBnVTD7hEzOs", icons: "_3nbgshJOZZWIwx5GCrapse", "icon-item": "_3rHIj0wcSy2fqhMxy--lHv", "icon-subtitle": "_21-kLcCN3crH0en0u3Luoz" };
                const o = a;
            }, 248: (e2, t2, n2) => {
                n2.d(t2, { Z: () => o });
                var r = n2(645), a = n2.n(r)()(function (e3) {
                    return e3[1];
                });
                a.push([e2.id, ".LozcFCkv-2Fh0UobTeCdU {\n    flex: 1;\n}\n\nvideo {\n    width: 100%;\n    object-fit: cover;\n    transform: scaleX(-1);\n    height: 100%;\n}\n\ncanvas {\n    display: none;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.krR3Ug-5pbLNli03GIeml {\n    color: white;\n    position: absolute;\n    top: 40%;\n    left: 40%;\n}\n\n.MOYgFpNINYPMFg4XPNF3w {\n    transform: scaleX(1);\n}\n", ""]), a.locals = { container: "LozcFCkv-2Fh0UobTeCdU", info: "krR3Ug-5pbLNli03GIeml", mirroring: "MOYgFpNINYPMFg4XPNF3w" };
                const o = a;
            }, 645: (e2) => {
                e2.exports = function (e3) {
                    var t2 = [];
                    return t2.toString = function () {
                        return this.map(function (t3) {
                            var n2 = e3(t3);
                            return t3[2] ? "@media ".concat(t3[2], " {").concat(n2, "}") : n2;
                        }).join("");
                    }, t2.i = function (e4, n2, r) {
                        typeof e4 == "string" && (e4 = [[null, e4, ""]]);
                        var a = {};
                        if (r)
                            for (var o = 0; o < this.length; o++) {
                                var i = this[o][0];
                                i != null && (a[i] = true);
                            }
                        for (var s = 0; s < e4.length; s++) {
                            var l = [].concat(e4[s]);
                            r && a[l[0]] || (n2 && (l[2] ? l[2] = "".concat(n2, " and ").concat(l[2]) : l[2] = n2), t2.push(l));
                        }
                    }, t2;
                };
            }, 412: function (e2, t2, n2) {
                !function (e3, t3) {
                    var n3 = "default" in t3 ? t3.default : t3;
                    function r(e4) {
                        return (r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e5) {
                            return typeof e5;
                        } : function (e5) {
                            return e5 && typeof Symbol == "function" && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
                        })(e4);
                    }
                    var a = {}, o = /{{([^{]+[^}])}}/g;
                    function i(e4, t4) {
                        if (!t4)
                            return e4;
                        if (Object.keys(t4).length === 0)
                            return e4;
                        var n4, r2, a2, i2 = e4.match(o);
                        return i2 && i2.length !== 0 ? (n4 = i2, r2 = t4, a2 = Object.keys(r2), n4.map(function (e5) {
                            var t5 = Array.prototype.slice.call(e5, 2, -2).join(""), n5 = a2.find(function (e6) {
                                return e6 === t5;
                            });
                            return n5 ? [e5, r2[n5]] : (console.warn("[LOCALIZE-REACT] Looks like template is being used, but no value passed for ", e5), [e5, e5]);
                        })).reduce(function (e5, t5) {
                            var n5 = new RegExp(t5[0], "gi");
                            return e5.replace(n5, t5[1]);
                        }, e4) : e4;
                    }
                    var s = n3.createContext(), l = s.Consumer;
                    function u() {
                        return t3.useContext(s);
                    }
                    e3.LocalizationConsumer = l, e3.LocalizationContext = s, e3.LocalizationProvider = function (e4) {
                        var o2 = e4.children, l2 = e4.disableCache, u2 = e4.locale, c = e4.translations, d = c === void 0 ? {} : c, f = function (e5, t4) {
                            if (!e5)
                                return null;
                            if (r(t4[e5]) === "object")
                                return e5;
                            var n4 = e5.toLowerCase().replace(/-/g, "_");
                            if (r(t4[n4]) === "object")
                                return n4;
                            var a2 = n4.split("_")[0];
                            return r(t4[a2]) === "object" ? a2 : (console.warn("[LOCALIZE-REACT]: There are no translations for specified locale", e5), e5);
                        }(u2, d), p = f ? d[f] : d;
                        function h(e5, t4, n4) {
                            if (!p || !e5)
                                return n4 || e5;
                            var r2 = typeof n4 == "string" ? n4 : e5, a2 = p[e5];
                            if (typeof a2 == "string")
                                return t4 ? i(a2, t4) : a2;
                            var o3 = e5.split(".");
                            if (o3.length === 1)
                                return i(r2, t4);
                            for (var s2 = p[o3[0]], l3 = 1; l3 < o3.length; l3++)
                                s2 = s2 && s2[o3[l3]];
                            return i(typeof s2 == "string" ? s2 : r2, t4);
                        }
                        t3.useEffect(function () {
                            a = {};
                        }, [u2, d]);
                        var m, v = l2 ? h : (m = h, function (e5, t4, n4) {
                            var r2 = 2 < arguments.length && n4 !== void 0 ? n4 : "", o3 = t4 ? JSON.stringify(t4, null, "") + e5 + r2 : e5 + r2;
                            if (a[o3])
                                return a[o3];
                            var i2 = m(e5, t4, r2);
                            return a[o3] = i2;
                        });
                        return n3.createElement(s.Provider, { value: { locale: u2, translate: v, translations: d } }, o2);
                    }, e3.Message = function (e4) {
                        var t4 = e4.defaultMessage, n4 = e4.descriptor, r2 = e4.values;
                        return (0, u().translate)(n4, r2, t4);
                    }, e3.useLocalize = u, Object.defineProperty(e3, "__esModule", { value: true });
                }(t2, n2(294));
            }, 418: (e2) => {
                var t2 = Object.getOwnPropertySymbols, n2 = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
                function a(e3) {
                    if (e3 == null)
                        throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e3);
                }
                e2.exports = function () {
                    try {
                        if (!Object.assign)
                            return false;
                        var e3 = new String("abc");
                        if (e3[5] = "de", Object.getOwnPropertyNames(e3)[0] === "5")
                            return false;
                        for (var t3 = {}, n3 = 0; n3 < 10; n3++)
                            t3["_" + String.fromCharCode(n3)] = n3;
                        if (Object.getOwnPropertyNames(t3).map(function (e4) {
                            return t3[e4];
                        }).join("") !== "0123456789")
                            return false;
                        var r2 = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function (e4) {
                            r2[e4] = e4;
                        }), Object.keys(Object.assign({}, r2)).join("") === "abcdefghijklmnopqrst";
                    } catch (e4) {
                        return false;
                    }
                }() ? Object.assign : function (e3, o) {
                    for (var i, s, l = a(e3), u = 1; u < arguments.length; u++) {
                        for (var c in i = Object(arguments[u]))
                            n2.call(i, c) && (l[c] = i[c]);
                        if (t2) {
                            s = t2(i);
                            for (var d = 0; d < s.length; d++)
                                r.call(i, s[d]) && (l[s[d]] = i[s[d]]);
                        }
                    }
                    return l;
                };
            }, 518: (e2, t2, n2) => {
                (r = n2(294)) && typeof r == "object" && "default" in r && r.default;
                var r, a = n2(451), o = new a(), i = o.getBrowser(), s = (o.getCPU(), o.getDevice()), l = o.getEngine(), u = o.getOS(), c = o.getUA();
                var d = "mobile", f = "tablet", p = "Chrome", h = "Firefox", m = "Opera", v = "Yandex", g = "Safari", y = "Internet Explorer", b = "Edge", C = "Chromium", S = "IE", _ = "Mobile Safari", w = "MIUI Browser", E = "Samsung Browser", L = "iOS", k = "Android", R = "Windows Phone", x = "Windows", N = "Mac OS", D = function (e3) {
                    var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
                    return e3 || t3;
                }, T = function () {
                    return !(typeof window == "undefined" || !window.navigator && !navigator) && (window.navigator || navigator);
                }, P = function (e3) {
                    var t3 = T();
                    return t3 && t3.platform && (t3.platform.indexOf(e3) !== -1 || t3.platform === "MacIntel" && t3.maxTouchPoints > 1 && !window.MSStream);
                }, M = function (e3) {
                    return e3.type === d;
                }, O = function (e3) {
                    return e3.type === f;
                }, I = function (e3) {
                    var t3 = e3.type;
                    return t3 === d || t3 === f;
                }, A = function (e3) {
                    return e3.type === "smarttv";
                }, F = function (e3) {
                    return e3.type === void 0;
                }, z = function (e3) {
                    return e3.type === "wearable";
                }, j = function (e3) {
                    return e3.type === "console";
                }, U = function (e3) {
                    return e3.type === "embedded";
                }, B = function (e3) {
                    var t3 = e3.vendor;
                    return D(t3);
                }, V = function (e3) {
                    var t3 = e3.model;
                    return D(t3);
                }, Z = function (e3) {
                    var t3 = e3.type;
                    return D(t3, "browser");
                }, H = function (e3) {
                    return e3.name === k;
                }, G = function (e3) {
                    return e3.name === x;
                }, W = function (e3) {
                    return e3.name === N;
                }, q = function (e3) {
                    return e3.name === R;
                }, K = function (e3) {
                    return e3.name === L;
                }, J = function (e3) {
                    var t3 = e3.version;
                    return D(t3);
                }, Y = function (e3) {
                    var t3 = e3.name;
                    return D(t3);
                }, Q = function (e3) {
                    return e3.name === p;
                }, X = function (e3) {
                    return e3.name === h;
                }, $ = function (e3) {
                    return e3.name === C;
                }, ee = function (e3) {
                    return e3.name === b;
                }, te = function (e3) {
                    return e3.name === v;
                }, ne = function (e3) {
                    var t3 = e3.name;
                    return t3 === g || t3 === _;
                }, re = function (e3) {
                    return e3.name === _;
                }, ae = function (e3) {
                    return e3.name === m;
                }, oe = function (e3) {
                    var t3 = e3.name;
                    return t3 === y || t3 === S;
                }, ie = function (e3) {
                    return e3.name === w;
                }, se = function (e3) {
                    return e3.name === E;
                }, le = function (e3) {
                    var t3 = e3.version;
                    return D(t3);
                }, ue = function (e3) {
                    var t3 = e3.major;
                    return D(t3);
                }, ce = function (e3) {
                    var t3 = e3.name;
                    return D(t3);
                }, de = function (e3) {
                    var t3 = e3.name;
                    return D(t3);
                }, fe = function (e3) {
                    var t3 = e3.version;
                    return D(t3);
                }, pe = function () {
                    var e3 = T(), t3 = e3 && e3.userAgent && e3.userAgent.toLowerCase();
                    return typeof t3 == "string" && /electron/.test(t3);
                }, he = function (e3) {
                    return typeof e3 == "string" && e3.indexOf("Edg/") !== -1;
                }, me = function () {
                    var e3 = T();
                    return e3 && (/iPad|iPhone|iPod/.test(e3.platform) || e3.platform === "MacIntel" && e3.maxTouchPoints > 1) && !window.MSStream;
                }, ve = function () {
                    return P("iPad");
                }, ge = function () {
                    return P("iPhone");
                }, ye = function () {
                    return P("iPod");
                };
                A(s), j(s), z(s), U(s), re(i) || ve(), $(i);
                var Ce = I(s) || ve(), Se = M(s), _e = O(s) || ve();
                F(s), F(s), H(u), q(u), K(u) || ve(), Q(i), X(i), ne(i), ae(i), oe(i), J(u), Y(u), le(i), ue(i), ce(i), B(s), V(s), de(l), fe(l), ee(i) || he(c), te(i), Z(s), me(), ve(), ge(), ye(), pe(), he(c), ee(i) && he(c), G(u), W(u), ie(i), se(i);
                t2.tq = Ce, t2.UA = Se, t2.Em = _e;
            }, 448: (e2, t2, n2) => {
                var r = n2(294), a = n2(418), o = n2(840);
                function i(e3) {
                    for (var t3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e3, n3 = 1; n3 < arguments.length; n3++)
                        t3 += "&args[]=" + encodeURIComponent(arguments[n3]);
                    return "Minified React error #" + e3 + "; visit " + t3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
                }
                if (!r)
                    throw Error(i(227));
                var s = new Set(), l = {};
                function u(e3, t3) {
                    c(e3, t3), c(e3 + "Capture", t3);
                }
                function c(e3, t3) {
                    for (l[e3] = t3, e3 = 0; e3 < t3.length; e3++)
                        s.add(t3[e3]);
                }
                var d = !(typeof window == "undefined" || window.document === void 0 || window.document.createElement === void 0), f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = Object.prototype.hasOwnProperty, h = {}, m = {};
                function v(e3, t3, n3, r2, a2, o2, i2) {
                    this.acceptsBooleans = t3 === 2 || t3 === 3 || t3 === 4, this.attributeName = r2, this.attributeNamespace = a2, this.mustUseProperty = n3, this.propertyName = e3, this.type = t3, this.sanitizeURL = o2, this.removeEmptyString = i2;
                }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e3) {
                    g[e3] = new v(e3, 0, false, e3, null, false, false);
                }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e3) {
                    var t3 = e3[0];
                    g[t3] = new v(t3, 1, false, e3[1], null, false, false);
                }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e3) {
                    g[e3] = new v(e3, 2, false, e3.toLowerCase(), null, false, false);
                }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e3) {
                    g[e3] = new v(e3, 2, false, e3, null, false, false);
                }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e3) {
                    g[e3] = new v(e3, 3, false, e3.toLowerCase(), null, false, false);
                }), ["checked", "multiple", "muted", "selected"].forEach(function (e3) {
                    g[e3] = new v(e3, 3, true, e3, null, false, false);
                }), ["capture", "download"].forEach(function (e3) {
                    g[e3] = new v(e3, 4, false, e3, null, false, false);
                }), ["cols", "rows", "size", "span"].forEach(function (e3) {
                    g[e3] = new v(e3, 6, false, e3, null, false, false);
                }), ["rowSpan", "start"].forEach(function (e3) {
                    g[e3] = new v(e3, 5, false, e3.toLowerCase(), null, false, false);
                });
                var y = /[\-:]([a-z])/g;
                function b(e3) {
                    return e3[1].toUpperCase();
                }
                function C(e3, t3, n3, r2) {
                    var a2 = g.hasOwnProperty(t3) ? g[t3] : null;
                    (a2 !== null ? a2.type === 0 : !r2 && 2 < t3.length && (t3[0] === "o" || t3[0] === "O") && (t3[1] === "n" || t3[1] === "N")) || (function (e4, t4, n4, r3) {
                        if (t4 == null || function (e5, t5, n5, r4) {
                            if (n5 !== null && n5.type === 0)
                                return false;
                            switch (typeof t5) {
                                case "function":
                                case "symbol":
                                    return true;
                                case "boolean":
                                    return !r4 && (n5 !== null ? !n5.acceptsBooleans : (e5 = e5.toLowerCase().slice(0, 5)) !== "data-" && e5 !== "aria-");
                                default:
                                    return false;
                            }
                        }(e4, t4, n4, r3))
                            return true;
                        if (r3)
                            return false;
                        if (n4 !== null)
                            switch (n4.type) {
                                case 3:
                                    return !t4;
                                case 4:
                                    return t4 === false;
                                case 5:
                                    return isNaN(t4);
                                case 6:
                                    return isNaN(t4) || 1 > t4;
                            }
                        return false;
                    }(t3, n3, a2, r2) && (n3 = null), r2 || a2 === null ? function (e4) {
                        return !!p.call(m, e4) || !p.call(h, e4) && (f.test(e4) ? m[e4] = true : (h[e4] = true, false));
                    }(t3) && (n3 === null ? e3.removeAttribute(t3) : e3.setAttribute(t3, "" + n3)) : a2.mustUseProperty ? e3[a2.propertyName] = n3 === null ? a2.type !== 3 && "" : n3 : (t3 = a2.attributeName, r2 = a2.attributeNamespace, n3 === null ? e3.removeAttribute(t3) : (n3 = (a2 = a2.type) === 3 || a2 === 4 && n3 === true ? "" : "" + n3, r2 ? e3.setAttributeNS(r2, t3, n3) : e3.setAttribute(t3, n3))));
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e3) {
                    var t3 = e3.replace(y, b);
                    g[t3] = new v(t3, 1, false, e3, null, false, false);
                }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e3) {
                    var t3 = e3.replace(y, b);
                    g[t3] = new v(t3, 1, false, e3, "http://www.w3.org/1999/xlink", false, false);
                }), ["xml:base", "xml:lang", "xml:space"].forEach(function (e3) {
                    var t3 = e3.replace(y, b);
                    g[t3] = new v(t3, 1, false, e3, "http://www.w3.org/XML/1998/namespace", false, false);
                }), ["tabIndex", "crossOrigin"].forEach(function (e3) {
                    g[e3] = new v(e3, 1, false, e3.toLowerCase(), null, false, false);
                }), g.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false), ["src", "href", "action", "formAction"].forEach(function (e3) {
                    g[e3] = new v(e3, 1, false, e3.toLowerCase(), null, true, true);
                });
                var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = 60103, w = 60106, E = 60107, L = 60108, k = 60114, R = 60109, x = 60110, N = 60112, D = 60113, T = 60120, P = 60115, M = 60116, O = 60121, I = 60128, A = 60129, F = 60130, z = 60131;
                if (typeof Symbol == "function" && Symbol.for) {
                    var j = Symbol.for;
                    _ = j("react.element"), w = j("react.portal"), E = j("react.fragment"), L = j("react.strict_mode"), k = j("react.profiler"), R = j("react.provider"), x = j("react.context"), N = j("react.forward_ref"), D = j("react.suspense"), T = j("react.suspense_list"), P = j("react.memo"), M = j("react.lazy"), O = j("react.block"), j("react.scope"), I = j("react.opaque.id"), A = j("react.debug_trace_mode"), F = j("react.offscreen"), z = j("react.legacy_hidden");
                }
                var U, B = typeof Symbol == "function" && Symbol.iterator;
                function V(e3) {
                    return e3 === null || typeof e3 != "object" ? null : typeof (e3 = B && e3[B] || e3["@@iterator"]) == "function" ? e3 : null;
                }
                function Z(e3) {
                    if (U === void 0)
                        try {
                            throw Error();
                        } catch (e4) {
                            var t3 = e4.stack.trim().match(/\n( *(at )?)/);
                            U = t3 && t3[1] || "";
                        }
                    return "\n" + U + e3;
                }
                var H = false;
                function G(e3, t3) {
                    if (!e3 || H)
                        return "";
                    H = true;
                    var n3 = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t3)
                            if (t3 = function () {
                                throw Error();
                            }, Object.defineProperty(t3.prototype, "props", {
                                set: function () {
                                    throw Error();
                                }
                            }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(t3, []);
                                } catch (e4) {
                                    var r2 = e4;
                                }
                                Reflect.construct(e3, [], t3);
                            } else {
                                try {
                                    t3.call();
                                } catch (e4) {
                                    r2 = e4;
                                }
                                e3.call(t3.prototype);
                            }
                        else {
                            try {
                                throw Error();
                            } catch (e4) {
                                r2 = e4;
                            }
                            e3();
                        }
                    } catch (e4) {
                        if (e4 && r2 && typeof e4.stack == "string") {
                            for (var a2 = e4.stack.split("\n"), o2 = r2.stack.split("\n"), i2 = a2.length - 1, s2 = o2.length - 1; 1 <= i2 && 0 <= s2 && a2[i2] !== o2[s2];)
                                s2--;
                            for (; 1 <= i2 && 0 <= s2; i2--, s2--)
                                if (a2[i2] !== o2[s2]) {
                                    if (i2 !== 1 || s2 !== 1)
                                        do {
                                            if (i2--, 0 > --s2 || a2[i2] !== o2[s2])
                                                return "\n" + a2[i2].replace(" at new ", " at ");
                                        } while (1 <= i2 && 0 <= s2);
                                    break;
                                }
                        }
                    } finally {
                        H = false, Error.prepareStackTrace = n3;
                    }
                    return (e3 = e3 ? e3.displayName || e3.name : "") ? Z(e3) : "";
                }
                function W(e3) {
                    switch (e3.tag) {
                        case 5:
                            return Z(e3.type);
                        case 16:
                            return Z("Lazy");
                        case 13:
                            return Z("Suspense");
                        case 19:
                            return Z("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return G(e3.type, false);
                        case 11:
                            return G(e3.type.render, false);
                        case 22:
                            return G(e3.type._render, false);
                        case 1:
                            return G(e3.type, true);
                        default:
                            return "";
                    }
                }
                function q(e3) {
                    if (e3 == null)
                        return null;
                    if (typeof e3 == "function")
                        return e3.displayName || e3.name || null;
                    if (typeof e3 == "string")
                        return e3;
                    switch (e3) {
                        case E:
                            return "Fragment";
                        case w:
                            return "Portal";
                        case k:
                            return "Profiler";
                        case L:
                            return "StrictMode";
                        case D:
                            return "Suspense";
                        case T:
                            return "SuspenseList";
                    }
                    if (typeof e3 == "object")
                        switch (e3.$$typeof) {
                            case x:
                                return (e3.displayName || "Context") + ".Consumer";
                            case R:
                                return (e3._context.displayName || "Context") + ".Provider";
                            case N:
                                var t3 = e3.render;
                                return t3 = t3.displayName || t3.name || "", e3.displayName || (t3 !== "" ? "ForwardRef(" + t3 + ")" : "ForwardRef");
                            case P:
                                return q(e3.type);
                            case O:
                                return q(e3._render);
                            case M:
                                t3 = e3._payload, e3 = e3._init;
                                try {
                                    return q(e3(t3));
                                } catch (e4) {
                                }
                        }
                    return null;
                }
                function K(e3) {
                    switch (typeof e3) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return e3;
                        default:
                            return "";
                    }
                }
                function J(e3) {
                    var t3 = e3.type;
                    return (e3 = e3.nodeName) && e3.toLowerCase() === "input" && (t3 === "checkbox" || t3 === "radio");
                }
                function Y(e3) {
                    e3._valueTracker || (e3._valueTracker = function (e4) {
                        var t3 = J(e4) ? "checked" : "value", n3 = Object.getOwnPropertyDescriptor(e4.constructor.prototype, t3), r2 = "" + e4[t3];
                        if (!e4.hasOwnProperty(t3) && n3 !== void 0 && typeof n3.get == "function" && typeof n3.set == "function") {
                            var a2 = n3.get, o2 = n3.set;
                            return Object.defineProperty(e4, t3, {
                                configurable: true, get: function () {
                                    return a2.call(this);
                                }, set: function (e5) {
                                    r2 = "" + e5, o2.call(this, e5);
                                }
                            }), Object.defineProperty(e4, t3, { enumerable: n3.enumerable }), {
                                getValue: function () {
                                    return r2;
                                }, setValue: function (e5) {
                                    r2 = "" + e5;
                                }, stopTracking: function () {
                                    e4._valueTracker = null, delete e4[t3];
                                }
                            };
                        }
                    }(e3));
                }
                function Q(e3) {
                    if (!e3)
                        return false;
                    var t3 = e3._valueTracker;
                    if (!t3)
                        return true;
                    var n3 = t3.getValue(), r2 = "";
                    return e3 && (r2 = J(e3) ? e3.checked ? "true" : "false" : e3.value), (e3 = r2) !== n3 && (t3.setValue(e3), true);
                }
                function X(e3) {
                    if ((e3 = e3 || (typeof document != "undefined" ? document : void 0)) === void 0)
                        return null;
                    try {
                        return e3.activeElement || e3.body;
                    } catch (t3) {
                        return e3.body;
                    }
                }
                function $(e3, t3) {
                    var n3 = t3.checked;
                    return a({}, t3, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n3 != null ? n3 : e3._wrapperState.initialChecked });
                }
                function ee(e3, t3) {
                    var n3 = t3.defaultValue == null ? "" : t3.defaultValue, r2 = t3.checked != null ? t3.checked : t3.defaultChecked;
                    n3 = K(t3.value != null ? t3.value : n3), e3._wrapperState = { initialChecked: r2, initialValue: n3, controlled: t3.type === "checkbox" || t3.type === "radio" ? t3.checked != null : t3.value != null };
                }
                function te(e3, t3) {
                    (t3 = t3.checked) != null && C(e3, "checked", t3, false);
                }
                function ne(e3, t3) {
                    te(e3, t3);
                    var n3 = K(t3.value), r2 = t3.type;
                    if (n3 != null)
                        r2 === "number" ? (n3 === 0 && e3.value === "" || e3.value != n3) && (e3.value = "" + n3) : e3.value !== "" + n3 && (e3.value = "" + n3);
                    else if (r2 === "submit" || r2 === "reset")
                        return void e3.removeAttribute("value");
                    t3.hasOwnProperty("value") ? ae(e3, t3.type, n3) : t3.hasOwnProperty("defaultValue") && ae(e3, t3.type, K(t3.defaultValue)), t3.checked == null && t3.defaultChecked != null && (e3.defaultChecked = !!t3.defaultChecked);
                }
                function re(e3, t3, n3) {
                    if (t3.hasOwnProperty("value") || t3.hasOwnProperty("defaultValue")) {
                        var r2 = t3.type;
                        if (!(r2 !== "submit" && r2 !== "reset" || t3.value !== void 0 && t3.value !== null))
                            return;
                        t3 = "" + e3._wrapperState.initialValue, n3 || t3 === e3.value || (e3.value = t3), e3.defaultValue = t3;
                    }
                    (n3 = e3.name) !== "" && (e3.name = ""), e3.defaultChecked = !!e3._wrapperState.initialChecked, n3 !== "" && (e3.name = n3);
                }
                function ae(e3, t3, n3) {
                    t3 === "number" && X(e3.ownerDocument) === e3 || (n3 == null ? e3.defaultValue = "" + e3._wrapperState.initialValue : e3.defaultValue !== "" + n3 && (e3.defaultValue = "" + n3));
                }
                function oe(e3, t3) {
                    return e3 = a({ children: void 0 }, t3), (t3 = function (e4) {
                        var t4 = "";
                        return r.Children.forEach(e4, function (e5) {
                            e5 != null && (t4 += e5);
                        }), t4;
                    }(t3.children)) && (e3.children = t3), e3;
                }
                function ie(e3, t3, n3, r2) {
                    if (e3 = e3.options, t3) {
                        t3 = {};
                        for (var a2 = 0; a2 < n3.length; a2++)
                            t3["$" + n3[a2]] = true;
                        for (n3 = 0; n3 < e3.length; n3++)
                            a2 = t3.hasOwnProperty("$" + e3[n3].value), e3[n3].selected !== a2 && (e3[n3].selected = a2), a2 && r2 && (e3[n3].defaultSelected = true);
                    } else {
                        for (n3 = "" + K(n3), t3 = null, a2 = 0; a2 < e3.length; a2++) {
                            if (e3[a2].value === n3)
                                return e3[a2].selected = true, void (r2 && (e3[a2].defaultSelected = true));
                            t3 !== null || e3[a2].disabled || (t3 = e3[a2]);
                        }
                        t3 !== null && (t3.selected = true);
                    }
                }
                function se(e3, t3) {
                    if (t3.dangerouslySetInnerHTML != null)
                        throw Error(i(91));
                    return a({}, t3, { value: void 0, defaultValue: void 0, children: "" + e3._wrapperState.initialValue });
                }
                function le(e3, t3) {
                    var n3 = t3.value;
                    if (n3 == null) {
                        if (n3 = t3.children, t3 = t3.defaultValue, n3 != null) {
                            if (t3 != null)
                                throw Error(i(92));
                            if (Array.isArray(n3)) {
                                if (!(1 >= n3.length))
                                    throw Error(i(93));
                                n3 = n3[0];
                            }
                            t3 = n3;
                        }
                        t3 == null && (t3 = ""), n3 = t3;
                    }
                    e3._wrapperState = { initialValue: K(n3) };
                }
                function ue(e3, t3) {
                    var n3 = K(t3.value), r2 = K(t3.defaultValue);
                    n3 != null && ((n3 = "" + n3) !== e3.value && (e3.value = n3), t3.defaultValue == null && e3.defaultValue !== n3 && (e3.defaultValue = n3)), r2 != null && (e3.defaultValue = "" + r2);
                }
                function ce(e3) {
                    var t3 = e3.textContent;
                    t3 === e3._wrapperState.initialValue && t3 !== "" && t3 !== null && (e3.value = t3);
                }
                var de = "http://www.w3.org/1999/xhtml";
                function fe(e3) {
                    switch (e3) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml";
                    }
                }
                function pe(e3, t3) {
                    return e3 == null || e3 === "http://www.w3.org/1999/xhtml" ? fe(t3) : e3 === "http://www.w3.org/2000/svg" && t3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e3;
                }
                var he, me, ve = (me = function (e3, t3) {
                    if (e3.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e3)
                        e3.innerHTML = t3;
                    else {
                        for ((he = he || document.createElement("div")).innerHTML = "<svg>" + t3.valueOf().toString() + "</svg>", t3 = he.firstChild; e3.firstChild;)
                            e3.removeChild(e3.firstChild);
                        for (; t3.firstChild;)
                            e3.appendChild(t3.firstChild);
                    }
                }, typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function (e3, t3, n3, r2) {
                    MSApp.execUnsafeLocalFunction(function () {
                        return me(e3, t3);
                    });
                } : me);
                function ge(e3, t3) {
                    if (t3) {
                        var n3 = e3.firstChild;
                        if (n3 && n3 === e3.lastChild && n3.nodeType === 3)
                            return void (n3.nodeValue = t3);
                    }
                    e3.textContent = t3;
                }
                var ye = { animationIterationCount: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, be = ["Webkit", "ms", "Moz", "O"];
                function Ce(e3, t3, n3) {
                    return t3 == null || typeof t3 == "boolean" || t3 === "" ? "" : n3 || typeof t3 != "number" || t3 === 0 || ye.hasOwnProperty(e3) && ye[e3] ? ("" + t3).trim() : t3 + "px";
                }
                function Se(e3, t3) {
                    for (var n3 in e3 = e3.style, t3)
                        if (t3.hasOwnProperty(n3)) {
                            var r2 = n3.indexOf("--") === 0, a2 = Ce(n3, t3[n3], r2);
                            n3 === "float" && (n3 = "cssFloat"), r2 ? e3.setProperty(n3, a2) : e3[n3] = a2;
                        }
                }
                Object.keys(ye).forEach(function (e3) {
                    be.forEach(function (t3) {
                        t3 = t3 + e3.charAt(0).toUpperCase() + e3.substring(1), ye[t3] = ye[e3];
                    });
                });
                var _e = a({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
                function we(e3, t3) {
                    if (t3) {
                        if (_e[e3] && (t3.children != null || t3.dangerouslySetInnerHTML != null))
                            throw Error(i(137, e3));
                        if (t3.dangerouslySetInnerHTML != null) {
                            if (t3.children != null)
                                throw Error(i(60));
                            if (typeof t3.dangerouslySetInnerHTML != "object" || !("__html" in t3.dangerouslySetInnerHTML))
                                throw Error(i(61));
                        }
                        if (t3.style != null && typeof t3.style != "object")
                            throw Error(i(62));
                    }
                }
                function Ee(e3, t3) {
                    if (e3.indexOf("-") === -1)
                        return typeof t3.is == "string";
                    switch (e3) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return false;
                        default:
                            return true;
                    }
                }
                function Le(e3) {
                    return (e3 = e3.target || e3.srcElement || window).correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
                }
                var ke = null, Re = null, xe = null;
                function Ne(e3) {
                    if (e3 = ta(e3)) {
                        if (typeof ke != "function")
                            throw Error(i(280));
                        var t3 = e3.stateNode;
                        t3 && (t3 = ra(t3), ke(e3.stateNode, e3.type, t3));
                    }
                }
                function De(e3) {
                    Re ? xe ? xe.push(e3) : xe = [e3] : Re = e3;
                }
                function Te() {
                    if (Re) {
                        var e3 = Re, t3 = xe;
                        if (xe = Re = null, Ne(e3), t3)
                            for (e3 = 0; e3 < t3.length; e3++)
                                Ne(t3[e3]);
                    }
                }
                function Pe(e3, t3) {
                    return e3(t3);
                }
                function Me(e3, t3, n3, r2, a2) {
                    return e3(t3, n3, r2, a2);
                }
                function Oe() {
                }
                var Ie = Pe, Ae = false, Fe = false;
                function ze() {
                    Re === null && xe === null || (Oe(), Te());
                }
                function je(e3, t3) {
                    var n3 = e3.stateNode;
                    if (n3 === null)
                        return null;
                    var r2 = ra(n3);
                    if (r2 === null)
                        return null;
                    n3 = r2[t3];
                    e:
                    switch (t3) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r2 = !r2.disabled) || (r2 = !((e3 = e3.type) === "button" || e3 === "input" || e3 === "select" || e3 === "textarea")), e3 = !r2;
                            break e;
                        default:
                            e3 = false;
                    }
                    if (e3)
                        return null;
                    if (n3 && typeof n3 != "function")
                        throw Error(i(231, t3, typeof n3));
                    return n3;
                }
                var Ue = false;
                if (d)
                    try {
                        var Be = {};
                        Object.defineProperty(Be, "passive", {
                            get: function () {
                                Ue = true;
                            }
                        }), window.addEventListener("test", Be, Be), window.removeEventListener("test", Be, Be);
                    } catch (me2) {
                        Ue = false;
                    }
                function Ve(e3, t3, n3, r2, a2, o2, i2, s2, l2) {
                    var u2 = Array.prototype.slice.call(arguments, 3);
                    try {
                        t3.apply(n3, u2);
                    } catch (e4) {
                        this.onError(e4);
                    }
                }
                var Ze = false, He = null, Ge = false, We = null, qe = {
                    onError: function (e3) {
                        Ze = true, He = e3;
                    }
                };
                function Ke(e3, t3, n3, r2, a2, o2, i2, s2, l2) {
                    Ze = false, He = null, Ve.apply(qe, arguments);
                }
                function Je(e3) {
                    var t3 = e3, n3 = e3;
                    if (e3.alternate)
                        for (; t3.return;)
                            t3 = t3.return;
                    else {
                        e3 = t3;
                        do {
                            (1026 & (t3 = e3).flags) != 0 && (n3 = t3.return), e3 = t3.return;
                        } while (e3);
                    }
                    return t3.tag === 3 ? n3 : null;
                }
                function Ye(e3) {
                    if (e3.tag === 13) {
                        var t3 = e3.memoizedState;
                        if (t3 === null && (e3 = e3.alternate) !== null && (t3 = e3.memoizedState), t3 !== null)
                            return t3.dehydrated;
                    }
                    return null;
                }
                function Qe(e3) {
                    if (Je(e3) !== e3)
                        throw Error(i(188));
                }
                function Xe(e3, t3) {
                    for (var n3 = e3.alternate; t3 !== null;) {
                        if (t3 === e3 || t3 === n3)
                            return true;
                        t3 = t3.return;
                    }
                    return false;
                }
                var $e, et, tt, nt, rt = false, at = [], ot = null, it = null, st = null, lt = new Map(), ut = new Map(), ct = [], dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
                function ft(e3, t3, n3, r2, a2) {
                    return { blockedOn: e3, domEventName: t3, eventSystemFlags: 16 | n3, nativeEvent: a2, targetContainers: [r2] };
                }
                function pt(e3, t3) {
                    switch (e3) {
                        case "focusin":
                        case "focusout":
                            ot = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            it = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            st = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            lt.delete(t3.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            ut.delete(t3.pointerId);
                    }
                }
                function ht(e3, t3, n3, r2, a2, o2) {
                    return e3 === null || e3.nativeEvent !== o2 ? (e3 = ft(t3, n3, r2, a2, o2), t3 !== null && (t3 = ta(t3)) !== null && et(t3), e3) : (e3.eventSystemFlags |= r2, t3 = e3.targetContainers, a2 !== null && t3.indexOf(a2) === -1 && t3.push(a2), e3);
                }
                function mt(e3) {
                    var t3 = ea(e3.target);
                    if (t3 !== null) {
                        var n3 = Je(t3);
                        if (n3 !== null) {
                            if ((t3 = n3.tag) === 13) {
                                if ((t3 = Ye(n3)) !== null)
                                    return e3.blockedOn = t3, void nt(e3.lanePriority, function () {
                                        o.unstable_runWithPriority(e3.priority, function () {
                                            tt(n3);
                                        });
                                    });
                            } else if (t3 === 3 && n3.stateNode.hydrate)
                                return void (e3.blockedOn = n3.tag === 3 ? n3.stateNode.containerInfo : null);
                        }
                    }
                    e3.blockedOn = null;
                }
                function vt(e3) {
                    if (e3.blockedOn !== null)
                        return false;
                    for (var t3 = e3.targetContainers; 0 < t3.length;) {
                        var n3 = Qt(e3.domEventName, e3.eventSystemFlags, t3[0], e3.nativeEvent);
                        if (n3 !== null)
                            return (t3 = ta(n3)) !== null && et(t3), e3.blockedOn = n3, false;
                        t3.shift();
                    }
                    return true;
                }
                function gt(e3, t3, n3) {
                    vt(e3) && n3.delete(t3);
                }
                function yt() {
                    for (rt = false; 0 < at.length;) {
                        var e3 = at[0];
                        if (e3.blockedOn !== null) {
                            (e3 = ta(e3.blockedOn)) !== null && $e(e3);
                            break;
                        }
                        for (var t3 = e3.targetContainers; 0 < t3.length;) {
                            var n3 = Qt(e3.domEventName, e3.eventSystemFlags, t3[0], e3.nativeEvent);
                            if (n3 !== null) {
                                e3.blockedOn = n3;
                                break;
                            }
                            t3.shift();
                        }
                        e3.blockedOn === null && at.shift();
                    }
                    ot !== null && vt(ot) && (ot = null), it !== null && vt(it) && (it = null), st !== null && vt(st) && (st = null), lt.forEach(gt), ut.forEach(gt);
                }
                function bt(e3, t3) {
                    e3.blockedOn === t3 && (e3.blockedOn = null, rt || (rt = true, o.unstable_scheduleCallback(o.unstable_NormalPriority, yt)));
                }
                function Ct(e3) {
                    function t3(t4) {
                        return bt(t4, e3);
                    }
                    if (0 < at.length) {
                        bt(at[0], e3);
                        for (var n3 = 1; n3 < at.length; n3++) {
                            var r2 = at[n3];
                            r2.blockedOn === e3 && (r2.blockedOn = null);
                        }
                    }
                    for (ot !== null && bt(ot, e3), it !== null && bt(it, e3), st !== null && bt(st, e3), lt.forEach(t3), ut.forEach(t3), n3 = 0; n3 < ct.length; n3++)
                        (r2 = ct[n3]).blockedOn === e3 && (r2.blockedOn = null);
                    for (; 0 < ct.length && (n3 = ct[0]).blockedOn === null;)
                        mt(n3), n3.blockedOn === null && ct.shift();
                }
                function St(e3, t3) {
                    var n3 = {};
                    return n3[e3.toLowerCase()] = t3.toLowerCase(), n3["Webkit" + e3] = "webkit" + t3, n3["Moz" + e3] = "moz" + t3, n3;
                }
                var _t = { animationend: St("Animation", "AnimationEnd"), animationiteration: St("Animation", "AnimationIteration"), animationstart: St("Animation", "AnimationStart"), transitionend: St("Transition", "TransitionEnd") }, wt = {}, Et = {};
                function Lt(e3) {
                    if (wt[e3])
                        return wt[e3];
                    if (!_t[e3])
                        return e3;
                    var t3, n3 = _t[e3];
                    for (t3 in n3)
                        if (n3.hasOwnProperty(t3) && t3 in Et)
                            return wt[e3] = n3[t3];
                    return e3;
                }
                d && (Et = document.createElement("div").style, "AnimationEvent" in window || (delete _t.animationend.animation, delete _t.animationiteration.animation, delete _t.animationstart.animation), "TransitionEvent" in window || delete _t.transitionend.transition);
                var kt = Lt("animationend"), Rt = Lt("animationiteration"), xt = Lt("animationstart"), Nt = Lt("transitionend"), Dt = new Map(), Tt = new Map(), Pt = ["abort", "abort", kt, "animationEnd", Rt, "animationIteration", xt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Nt, "transitionEnd", "waiting", "waiting"];
                function Mt(e3, t3) {
                    for (var n3 = 0; n3 < e3.length; n3 += 2) {
                        var r2 = e3[n3], a2 = e3[n3 + 1];
                        a2 = "on" + (a2[0].toUpperCase() + a2.slice(1)), Tt.set(r2, t3), Dt.set(r2, a2), u(a2, [r2]);
                    }
                }
                (0, o.unstable_now)();
                var Ot = 8;
                function It(e3) {
                    if ((1 & e3) != 0)
                        return Ot = 15, 1;
                    if ((2 & e3) != 0)
                        return Ot = 14, 2;
                    if ((4 & e3) != 0)
                        return Ot = 13, 4;
                    var t3 = 24 & e3;
                    return t3 !== 0 ? (Ot = 12, t3) : (32 & e3) != 0 ? (Ot = 11, 32) : (t3 = 192 & e3) != 0 ? (Ot = 10, t3) : (256 & e3) != 0 ? (Ot = 9, 256) : (t3 = 3584 & e3) != 0 ? (Ot = 8, t3) : (4096 & e3) != 0 ? (Ot = 7, 4096) : (t3 = 4186112 & e3) != 0 ? (Ot = 6, t3) : (t3 = 62914560 & e3) != 0 ? (Ot = 5, t3) : 67108864 & e3 ? (Ot = 4, 67108864) : (134217728 & e3) != 0 ? (Ot = 3, 134217728) : (t3 = 805306368 & e3) != 0 ? (Ot = 2, t3) : (1073741824 & e3) != 0 ? (Ot = 1, 1073741824) : (Ot = 8, e3);
                }
                function At(e3, t3) {
                    var n3 = e3.pendingLanes;
                    if (n3 === 0)
                        return Ot = 0;
                    var r2 = 0, a2 = 0, o2 = e3.expiredLanes, i2 = e3.suspendedLanes, s2 = e3.pingedLanes;
                    if (o2 !== 0)
                        r2 = o2, a2 = Ot = 15;
                    else if ((o2 = 134217727 & n3) != 0) {
                        var l2 = o2 & ~i2;
                        l2 !== 0 ? (r2 = It(l2), a2 = Ot) : (s2 &= o2) != 0 && (r2 = It(s2), a2 = Ot);
                    } else
                        (o2 = n3 & ~i2) != 0 ? (r2 = It(o2), a2 = Ot) : s2 !== 0 && (r2 = It(s2), a2 = Ot);
                    if (r2 === 0)
                        return 0;
                    if (r2 = n3 & ((0 > (r2 = 31 - Vt(r2)) ? 0 : 1 << r2) << 1) - 1, t3 !== 0 && t3 !== r2 && (t3 & i2) == 0) {
                        if (It(t3), a2 <= Ot)
                            return t3;
                        Ot = a2;
                    }
                    if ((t3 = e3.entangledLanes) !== 0)
                        for (e3 = e3.entanglements, t3 &= r2; 0 < t3;)
                            a2 = 1 << (n3 = 31 - Vt(t3)), r2 |= e3[n3], t3 &= ~a2;
                    return r2;
                }
                function Ft(e3) {
                    return (e3 = -1073741825 & e3.pendingLanes) != 0 ? e3 : 1073741824 & e3 ? 1073741824 : 0;
                }
                function zt(e3, t3) {
                    switch (e3) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return (e3 = jt(24 & ~t3)) === 0 ? zt(10, t3) : e3;
                        case 10:
                            return (e3 = jt(192 & ~t3)) === 0 ? zt(8, t3) : e3;
                        case 8:
                            return (e3 = jt(3584 & ~t3)) === 0 && (e3 = jt(4186112 & ~t3)) === 0 && (e3 = 512), e3;
                        case 2:
                            return (t3 = jt(805306368 & ~t3)) === 0 && (t3 = 268435456), t3;
                    }
                    throw Error(i(358, e3));
                }
                function jt(e3) {
                    return e3 & -e3;
                }
                function Ut(e3) {
                    for (var t3 = [], n3 = 0; 31 > n3; n3++)
                        t3.push(e3);
                    return t3;
                }
                function Bt(e3, t3, n3) {
                    e3.pendingLanes |= t3;
                    var r2 = t3 - 1;
                    e3.suspendedLanes &= r2, e3.pingedLanes &= r2, (e3 = e3.eventTimes)[t3 = 31 - Vt(t3)] = n3;
                }
                var Vt = Math.clz32 ? Math.clz32 : function (e3) {
                    return e3 === 0 ? 32 : 31 - (Zt(e3) / Ht | 0) | 0;
                }, Zt = Math.log, Ht = Math.LN2, Gt = o.unstable_UserBlockingPriority, Wt = o.unstable_runWithPriority, qt = true;
                function Kt(e3, t3, n3, r2) {
                    Ae || Oe();
                    var a2 = Yt, o2 = Ae;
                    Ae = true;
                    try {
                        Me(a2, e3, t3, n3, r2);
                    } finally {
                        (Ae = o2) || ze();
                    }
                }
                function Jt(e3, t3, n3, r2) {
                    Wt(Gt, Yt.bind(null, e3, t3, n3, r2));
                }
                function Yt(e3, t3, n3, r2) {
                    var a2;
                    if (qt)
                        if ((a2 = (4 & t3) == 0) && 0 < at.length && -1 < dt.indexOf(e3))
                            e3 = ft(null, e3, t3, n3, r2), at.push(e3);
                        else {
                            var o2 = Qt(e3, t3, n3, r2);
                            if (o2 === null)
                                a2 && pt(e3, r2);
                            else {
                                if (a2) {
                                    if (-1 < dt.indexOf(e3))
                                        return e3 = ft(o2, e3, t3, n3, r2), void at.push(e3);
                                    if (function (e4, t4, n4, r3, a3) {
                                        switch (t4) {
                                            case "focusin":
                                                return ot = ht(ot, e4, t4, n4, r3, a3), true;
                                            case "dragenter":
                                                return it = ht(it, e4, t4, n4, r3, a3), true;
                                            case "mouseover":
                                                return st = ht(st, e4, t4, n4, r3, a3), true;
                                            case "pointerover":
                                                var o3 = a3.pointerId;
                                                return lt.set(o3, ht(lt.get(o3) || null, e4, t4, n4, r3, a3)), true;
                                            case "gotpointercapture":
                                                return o3 = a3.pointerId, ut.set(o3, ht(ut.get(o3) || null, e4, t4, n4, r3, a3)), true;
                                        }
                                        return false;
                                    }(o2, e3, t3, n3, r2))
                                        return;
                                    pt(e3, r2);
                                }
                                Mr(e3, t3, r2, null, n3);
                            }
                        }
                }
                function Qt(e3, t3, n3, r2) {
                    var a2 = Le(r2);
                    if ((a2 = ea(a2)) !== null) {
                        var o2 = Je(a2);
                        if (o2 === null)
                            a2 = null;
                        else {
                            var i2 = o2.tag;
                            if (i2 === 13) {
                                if ((a2 = Ye(o2)) !== null)
                                    return a2;
                                a2 = null;
                            } else if (i2 === 3) {
                                if (o2.stateNode.hydrate)
                                    return o2.tag === 3 ? o2.stateNode.containerInfo : null;
                                a2 = null;
                            } else
                                o2 !== a2 && (a2 = null);
                        }
                    }
                    return Mr(e3, t3, r2, a2, n3), null;
                }
                var Xt = null, $t = null, en = null;
                function tn() {
                    if (en)
                        return en;
                    var e3, t3, n3 = $t, r2 = n3.length, a2 = "value" in Xt ? Xt.value : Xt.textContent, o2 = a2.length;
                    for (e3 = 0; e3 < r2 && n3[e3] === a2[e3]; e3++)
                        ;
                    var i2 = r2 - e3;
                    for (t3 = 1; t3 <= i2 && n3[r2 - t3] === a2[o2 - t3]; t3++)
                        ;
                    return en = a2.slice(e3, 1 < t3 ? 1 - t3 : void 0);
                }
                function nn(e3) {
                    var t3 = e3.keyCode;
                    return "charCode" in e3 ? (e3 = e3.charCode) === 0 && t3 === 13 && (e3 = 13) : e3 = t3, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
                }
                function rn() {
                    return true;
                }
                function an() {
                    return false;
                }
                function on(e3) {
                    function t3(t4, n3, r2, a2, o2) {
                        for (var i2 in this._reactName = t4, this._targetInst = r2, this.type = n3, this.nativeEvent = a2, this.target = o2, this.currentTarget = null, e3)
                            e3.hasOwnProperty(i2) && (t4 = e3[i2], this[i2] = t4 ? t4(a2) : a2[i2]);
                        return this.isDefaultPrevented = (a2.defaultPrevented != null ? a2.defaultPrevented : a2.returnValue === false) ? rn : an, this.isPropagationStopped = an, this;
                    }
                    return a(t3.prototype, {
                        preventDefault: function () {
                            this.defaultPrevented = true;
                            var e4 = this.nativeEvent;
                            e4 && (e4.preventDefault ? e4.preventDefault() : typeof e4.returnValue != "unknown" && (e4.returnValue = false), this.isDefaultPrevented = rn);
                        }, stopPropagation: function () {
                            var e4 = this.nativeEvent;
                            e4 && (e4.stopPropagation ? e4.stopPropagation() : typeof e4.cancelBubble != "unknown" && (e4.cancelBubble = true), this.isPropagationStopped = rn);
                        }, persist: function () {
                        }, isPersistent: rn
                    }), t3;
                }
                var sn, ln, un, cn = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e3) {
                        return e3.timeStamp || Date.now();
                    }, defaultPrevented: 0, isTrusted: 0
                }, dn = on(cn), fn = a({}, cn, { view: 0, detail: 0 }), pn = on(fn), hn = a({}, fn, {
                    screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: kn, button: 0, buttons: 0, relatedTarget: function (e3) {
                        return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
                    }, movementX: function (e3) {
                        return "movementX" in e3 ? e3.movementX : (e3 !== un && (un && e3.type === "mousemove" ? (sn = e3.screenX - un.screenX, ln = e3.screenY - un.screenY) : ln = sn = 0, un = e3), sn);
                    }, movementY: function (e3) {
                        return "movementY" in e3 ? e3.movementY : ln;
                    }
                }), mn = on(hn), vn = on(a({}, hn, { dataTransfer: 0 })), gn = on(a({}, fn, { relatedTarget: 0 })), yn = on(a({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), bn = a({}, cn, {
                    clipboardData: function (e3) {
                        return "clipboardData" in e3 ? e3.clipboardData : window.clipboardData;
                    }
                }), Cn = on(bn), Sn = on(a({}, cn, { data: 0 })), _n = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, wn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, En = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
                function Ln(e3) {
                    var t3 = this.nativeEvent;
                    return t3.getModifierState ? t3.getModifierState(e3) : !!(e3 = En[e3]) && !!t3[e3];
                }
                function kn() {
                    return Ln;
                }
                var Rn = a({}, fn, {
                    key: function (e3) {
                        if (e3.key) {
                            var t3 = _n[e3.key] || e3.key;
                            if (t3 !== "Unidentified")
                                return t3;
                        }
                        return e3.type === "keypress" ? (e3 = nn(e3)) === 13 ? "Enter" : String.fromCharCode(e3) : e3.type === "keydown" || e3.type === "keyup" ? wn[e3.keyCode] || "Unidentified" : "";
                    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: kn, charCode: function (e3) {
                        return e3.type === "keypress" ? nn(e3) : 0;
                    }, keyCode: function (e3) {
                        return e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
                    }, which: function (e3) {
                        return e3.type === "keypress" ? nn(e3) : e3.type === "keydown" || e3.type === "keyup" ? e3.keyCode : 0;
                    }
                }), xn = on(Rn), Nn = on(a({}, hn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Dn = on(a({}, fn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: kn })), Tn = on(a({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Pn = a({}, hn, {
                    deltaX: function (e3) {
                        return "deltaX" in e3 ? e3.deltaX : "wheelDeltaX" in e3 ? -e3.wheelDeltaX : 0;
                    }, deltaY: function (e3) {
                        return "deltaY" in e3 ? e3.deltaY : "wheelDeltaY" in e3 ? -e3.wheelDeltaY : "wheelDelta" in e3 ? -e3.wheelDelta : 0;
                    }, deltaZ: 0, deltaMode: 0
                }), Mn = on(Pn), On = [9, 13, 27, 32], In = d && "CompositionEvent" in window, An = null;
                d && "documentMode" in document && (An = document.documentMode);
                var Fn = d && "TextEvent" in window && !An, zn = d && (!In || An && 8 < An && 11 >= An), jn = String.fromCharCode(32), Un = false;
                function Bn(e3, t3) {
                    switch (e3) {
                        case "keyup":
                            return On.indexOf(t3.keyCode) !== -1;
                        case "keydown":
                            return t3.keyCode !== 229;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return true;
                        default:
                            return false;
                    }
                }
                function Vn(e3) {
                    return typeof (e3 = e3.detail) == "object" && "data" in e3 ? e3.data : null;
                }
                var Zn = false, Hn = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
                function Gn(e3) {
                    var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
                    return t3 === "input" ? !!Hn[e3.type] : t3 === "textarea";
                }
                function Wn(e3, t3, n3, r2) {
                    De(r2), 0 < (t3 = Ir(t3, "onChange")).length && (n3 = new dn("onChange", "change", null, n3, r2), e3.push({ event: n3, listeners: t3 }));
                }
                var qn = null, Kn = null;
                function Jn(e3) {
                    Rr(e3, 0);
                }
                function Yn(e3) {
                    if (Q(na(e3)))
                        return e3;
                }
                function Qn(e3, t3) {
                    if (e3 === "change")
                        return t3;
                }
                var Xn = false;
                if (d) {
                    var $n;
                    if (d) {
                        var er = "oninput" in document;
                        if (!er) {
                            var tr = document.createElement("div");
                            tr.setAttribute("oninput", "return;"), er = typeof tr.oninput == "function";
                        }
                        $n = er;
                    } else
                        $n = false;
                    Xn = $n && (!document.documentMode || 9 < document.documentMode);
                }
                function nr() {
                    qn && (qn.detachEvent("onpropertychange", rr), Kn = qn = null);
                }
                function rr(e3) {
                    if (e3.propertyName === "value" && Yn(Kn)) {
                        var t3 = [];
                        if (Wn(t3, Kn, e3, Le(e3)), e3 = Jn, Ae)
                            e3(t3);
                        else {
                            Ae = true;
                            try {
                                Pe(e3, t3);
                            } finally {
                                Ae = false, ze();
                            }
                        }
                    }
                }
                function ar(e3, t3, n3) {
                    e3 === "focusin" ? (nr(), Kn = n3, (qn = t3).attachEvent("onpropertychange", rr)) : e3 === "focusout" && nr();
                }
                function or(e3) {
                    if (e3 === "selectionchange" || e3 === "keyup" || e3 === "keydown")
                        return Yn(Kn);
                }
                function ir(e3, t3) {
                    if (e3 === "click")
                        return Yn(t3);
                }
                function sr(e3, t3) {
                    if (e3 === "input" || e3 === "change")
                        return Yn(t3);
                }
                var lr = typeof Object.is == "function" ? Object.is : function (e3, t3) {
                    return e3 === t3 && (e3 !== 0 || 1 / e3 == 1 / t3) || e3 != e3 && t3 != t3;
                }, ur = Object.prototype.hasOwnProperty;
                function cr(e3, t3) {
                    if (lr(e3, t3))
                        return true;
                    if (typeof e3 != "object" || e3 === null || typeof t3 != "object" || t3 === null)
                        return false;
                    var n3 = Object.keys(e3), r2 = Object.keys(t3);
                    if (n3.length !== r2.length)
                        return false;
                    for (r2 = 0; r2 < n3.length; r2++)
                        if (!ur.call(t3, n3[r2]) || !lr(e3[n3[r2]], t3[n3[r2]]))
                            return false;
                    return true;
                }
                function dr(e3) {
                    for (; e3 && e3.firstChild;)
                        e3 = e3.firstChild;
                    return e3;
                }
                function fr(e3, t3) {
                    var n3, r2 = dr(e3);
                    for (e3 = 0; r2;) {
                        if (r2.nodeType === 3) {
                            if (n3 = e3 + r2.textContent.length, e3 <= t3 && n3 >= t3)
                                return { node: r2, offset: t3 - e3 };
                            e3 = n3;
                        }
                        e: {
                            for (; r2;) {
                                if (r2.nextSibling) {
                                    r2 = r2.nextSibling;
                                    break e;
                                }
                                r2 = r2.parentNode;
                            }
                            r2 = void 0;
                        }
                        r2 = dr(r2);
                    }
                }
                function pr(e3, t3) {
                    return !(!e3 || !t3) && (e3 === t3 || (!e3 || e3.nodeType !== 3) && (t3 && t3.nodeType === 3 ? pr(e3, t3.parentNode) : "contains" in e3 ? e3.contains(t3) : !!e3.compareDocumentPosition && !!(16 & e3.compareDocumentPosition(t3))));
                }
                function hr() {
                    for (var e3 = window, t3 = X(); t3 instanceof e3.HTMLIFrameElement;) {
                        try {
                            var n3 = typeof t3.contentWindow.location.href == "string";
                        } catch (e4) {
                            n3 = false;
                        }
                        if (!n3)
                            break;
                        t3 = X((e3 = t3.contentWindow).document);
                    }
                    return t3;
                }
                function mr(e3) {
                    var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
                    return t3 && (t3 === "input" && (e3.type === "text" || e3.type === "search" || e3.type === "tel" || e3.type === "url" || e3.type === "password") || t3 === "textarea" || e3.contentEditable === "true");
                }
                var vr = d && "documentMode" in document && 11 >= document.documentMode, gr = null, yr = null, br = null, Cr = false;
                function Sr(e3, t3, n3) {
                    var r2 = n3.window === n3 ? n3.document : n3.nodeType === 9 ? n3 : n3.ownerDocument;
                    Cr || gr == null || gr !== X(r2) || (r2 = "selectionStart" in (r2 = gr) && mr(r2) ? { start: r2.selectionStart, end: r2.selectionEnd } : { anchorNode: (r2 = (r2.ownerDocument && r2.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r2.anchorOffset, focusNode: r2.focusNode, focusOffset: r2.focusOffset }, br && cr(br, r2) || (br = r2, 0 < (r2 = Ir(yr, "onSelect")).length && (t3 = new dn("onSelect", "select", null, t3, n3), e3.push({ event: t3, listeners: r2 }), t3.target = gr)));
                }
                Mt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Mt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Mt(Pt, 2);
                for (var _r = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), wr = 0; wr < _r.length; wr++)
                    Tt.set(_r[wr], 0);
                c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
                function kr(e3, t3, n3) {
                    var r2 = e3.type || "unknown-event";
                    e3.currentTarget = n3, function (e4, t4, n4, r3, a2, o2, s2, l2, u2) {
                        if (Ke.apply(this, arguments), Ze) {
                            if (!Ze)
                                throw Error(i(198));
                            var c2 = He;
                            Ze = false, He = null, Ge || (Ge = true, We = c2);
                        }
                    }(r2, t3, void 0, e3), e3.currentTarget = null;
                }
                function Rr(e3, t3) {
                    t3 = (4 & t3) != 0;
                    for (var n3 = 0; n3 < e3.length; n3++) {
                        var r2 = e3[n3], a2 = r2.event;
                        r2 = r2.listeners;
                        e: {
                            var o2 = void 0;
                            if (t3)
                                for (var i2 = r2.length - 1; 0 <= i2; i2--) {
                                    var s2 = r2[i2], l2 = s2.instance, u2 = s2.currentTarget;
                                    if (s2 = s2.listener, l2 !== o2 && a2.isPropagationStopped())
                                        break e;
                                    kr(a2, s2, u2), o2 = l2;
                                }
                            else
                                for (i2 = 0; i2 < r2.length; i2++) {
                                    if (l2 = (s2 = r2[i2]).instance, u2 = s2.currentTarget, s2 = s2.listener, l2 !== o2 && a2.isPropagationStopped())
                                        break e;
                                    kr(a2, s2, u2), o2 = l2;
                                }
                        }
                    }
                    if (Ge)
                        throw e3 = We, Ge = false, We = null, e3;
                }
                function xr(e3, t3) {
                    var n3 = aa(t3), r2 = e3 + "__bubble";
                    n3.has(r2) || (Pr(t3, e3, 2, false), n3.add(r2));
                }
                var Nr = "_reactListening" + Math.random().toString(36).slice(2);
                function Dr(e3) {
                    e3[Nr] || (e3[Nr] = true, s.forEach(function (t3) {
                        Lr.has(t3) || Tr(t3, false, e3, null), Tr(t3, true, e3, null);
                    }));
                }
                function Tr(e3, t3, n3, r2) {
                    var a2 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, o2 = n3;
                    if (e3 === "selectionchange" && n3.nodeType !== 9 && (o2 = n3.ownerDocument), r2 !== null && !t3 && Lr.has(e3)) {
                        if (e3 !== "scroll")
                            return;
                        a2 |= 2, o2 = r2;
                    }
                    var i2 = aa(o2), s2 = e3 + "__" + (t3 ? "capture" : "bubble");
                    i2.has(s2) || (t3 && (a2 |= 4), Pr(o2, e3, a2, t3), i2.add(s2));
                }
                function Pr(e3, t3, n3, r2) {
                    var a2 = Tt.get(t3);
                    switch (a2 === void 0 ? 2 : a2) {
                        case 0:
                            a2 = Kt;
                            break;
                        case 1:
                            a2 = Jt;
                            break;
                        default:
                            a2 = Yt;
                    }
                    n3 = a2.bind(null, t3, n3, e3), a2 = void 0, !Ue || t3 !== "touchstart" && t3 !== "touchmove" && t3 !== "wheel" || (a2 = true), r2 ? a2 !== void 0 ? e3.addEventListener(t3, n3, { capture: true, passive: a2 }) : e3.addEventListener(t3, n3, true) : a2 !== void 0 ? e3.addEventListener(t3, n3, { passive: a2 }) : e3.addEventListener(t3, n3, false);
                }
                function Mr(e3, t3, n3, r2, a2) {
                    var o2 = r2;
                    if ((1 & t3) == 0 && (2 & t3) == 0 && r2 !== null)
                        e:
                        for (; ;) {
                            if (r2 === null)
                                return;
                            var i2 = r2.tag;
                            if (i2 === 3 || i2 === 4) {
                                var s2 = r2.stateNode.containerInfo;
                                if (s2 === a2 || s2.nodeType === 8 && s2.parentNode === a2)
                                    break;
                                if (i2 === 4)
                                    for (i2 = r2.return; i2 !== null;) {
                                        var l2 = i2.tag;
                                        if ((l2 === 3 || l2 === 4) && ((l2 = i2.stateNode.containerInfo) === a2 || l2.nodeType === 8 && l2.parentNode === a2))
                                            return;
                                        i2 = i2.return;
                                    }
                                for (; s2 !== null;) {
                                    if ((i2 = ea(s2)) === null)
                                        return;
                                    if ((l2 = i2.tag) === 5 || l2 === 6) {
                                        r2 = o2 = i2;
                                        continue e;
                                    }
                                    s2 = s2.parentNode;
                                }
                            }
                            r2 = r2.return;
                        }
                    !function (e4, t4, n4) {
                        if (Fe)
                            return e4();
                        Fe = true;
                        try {
                            Ie(e4, t4, n4);
                        } finally {
                            Fe = false, ze();
                        }
                    }(function () {
                        var r3 = o2, a3 = Le(n3), i3 = [];
                        e: {
                            var s3 = Dt.get(e3);
                            if (s3 !== void 0) {
                                var l3 = dn, u2 = e3;
                                switch (e3) {
                                    case "keypress":
                                        if (nn(n3) === 0)
                                            break e;
                                    case "keydown":
                                    case "keyup":
                                        l3 = xn;
                                        break;
                                    case "focusin":
                                        u2 = "focus", l3 = gn;
                                        break;
                                    case "focusout":
                                        u2 = "blur", l3 = gn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l3 = gn;
                                        break;
                                    case "click":
                                        if (n3.button === 2)
                                            break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l3 = mn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l3 = vn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l3 = Dn;
                                        break;
                                    case kt:
                                    case Rt:
                                    case xt:
                                        l3 = yn;
                                        break;
                                    case Nt:
                                        l3 = Tn;
                                        break;
                                    case "scroll":
                                        l3 = pn;
                                        break;
                                    case "wheel":
                                        l3 = Mn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l3 = Cn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l3 = Nn;
                                }
                                var c2 = (4 & t3) != 0, d2 = !c2 && e3 === "scroll", f2 = c2 ? s3 !== null ? s3 + "Capture" : null : s3;
                                c2 = [];
                                for (var p2, h2 = r3; h2 !== null;) {
                                    var m2 = (p2 = h2).stateNode;
                                    if (p2.tag === 5 && m2 !== null && (p2 = m2, f2 !== null && (m2 = je(h2, f2)) != null && c2.push(Or(h2, m2, p2))), d2)
                                        break;
                                    h2 = h2.return;
                                }
                                0 < c2.length && (s3 = new l3(s3, u2, null, n3, a3), i3.push({ event: s3, listeners: c2 }));
                            }
                        }
                        if ((7 & t3) == 0) {
                            if (l3 = e3 === "mouseout" || e3 === "pointerout", (!(s3 = e3 === "mouseover" || e3 === "pointerover") || (16 & t3) != 0 || !(u2 = n3.relatedTarget || n3.fromElement) || !ea(u2) && !u2[Xr]) && (l3 || s3) && (s3 = a3.window === a3 ? a3 : (s3 = a3.ownerDocument) ? s3.defaultView || s3.parentWindow : window, l3 ? (l3 = r3, (u2 = (u2 = n3.relatedTarget || n3.toElement) ? ea(u2) : null) !== null && (u2 !== (d2 = Je(u2)) || u2.tag !== 5 && u2.tag !== 6) && (u2 = null)) : (l3 = null, u2 = r3), l3 !== u2)) {
                                if (c2 = mn, m2 = "onMouseLeave", f2 = "onMouseEnter", h2 = "mouse", e3 !== "pointerout" && e3 !== "pointerover" || (c2 = Nn, m2 = "onPointerLeave", f2 = "onPointerEnter", h2 = "pointer"), d2 = l3 == null ? s3 : na(l3), p2 = u2 == null ? s3 : na(u2), (s3 = new c2(m2, h2 + "leave", l3, n3, a3)).target = d2, s3.relatedTarget = p2, m2 = null, ea(a3) === r3 && ((c2 = new c2(f2, h2 + "enter", u2, n3, a3)).target = p2, c2.relatedTarget = d2, m2 = c2), d2 = m2, l3 && u2)
                                    e: {
                                        for (f2 = u2, h2 = 0, p2 = c2 = l3; p2; p2 = Ar(p2))
                                            h2++;
                                        for (p2 = 0, m2 = f2; m2; m2 = Ar(m2))
                                            p2++;
                                        for (; 0 < h2 - p2;)
                                            c2 = Ar(c2), h2--;
                                        for (; 0 < p2 - h2;)
                                            f2 = Ar(f2), p2--;
                                        for (; h2--;) {
                                            if (c2 === f2 || f2 !== null && c2 === f2.alternate)
                                                break e;
                                            c2 = Ar(c2), f2 = Ar(f2);
                                        }
                                        c2 = null;
                                    }
                                else
                                    c2 = null;
                                l3 !== null && Fr(i3, s3, l3, c2, false), u2 !== null && d2 !== null && Fr(i3, d2, u2, c2, true);
                            }
                            if ((l3 = (s3 = r3 ? na(r3) : window).nodeName && s3.nodeName.toLowerCase()) === "select" || l3 === "input" && s3.type === "file")
                                var v2 = Qn;
                            else if (Gn(s3))
                                if (Xn)
                                    v2 = sr;
                                else {
                                    v2 = or;
                                    var g2 = ar;
                                }
                            else
                                (l3 = s3.nodeName) && l3.toLowerCase() === "input" && (s3.type === "checkbox" || s3.type === "radio") && (v2 = ir);
                            switch (v2 && (v2 = v2(e3, r3)) ? Wn(i3, v2, n3, a3) : (g2 && g2(e3, s3, r3), e3 === "focusout" && (g2 = s3._wrapperState) && g2.controlled && s3.type === "number" && ae(s3, "number", s3.value)), g2 = r3 ? na(r3) : window, e3) {
                                case "focusin":
                                    (Gn(g2) || g2.contentEditable === "true") && (gr = g2, yr = r3, br = null);
                                    break;
                                case "focusout":
                                    br = yr = gr = null;
                                    break;
                                case "mousedown":
                                    Cr = true;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    Cr = false, Sr(i3, n3, a3);
                                    break;
                                case "selectionchange":
                                    if (vr)
                                        break;
                                case "keydown":
                                case "keyup":
                                    Sr(i3, n3, a3);
                            }
                            var y2;
                            if (In)
                                e: {
                                    switch (e3) {
                                        case "compositionstart":
                                            var b2 = "onCompositionStart";
                                            break e;
                                        case "compositionend":
                                            b2 = "onCompositionEnd";
                                            break e;
                                        case "compositionupdate":
                                            b2 = "onCompositionUpdate";
                                            break e;
                                    }
                                    b2 = void 0;
                                }
                            else
                                Zn ? Bn(e3, n3) && (b2 = "onCompositionEnd") : e3 === "keydown" && n3.keyCode === 229 && (b2 = "onCompositionStart");
                            b2 && (zn && n3.locale !== "ko" && (Zn || b2 !== "onCompositionStart" ? b2 === "onCompositionEnd" && Zn && (y2 = tn()) : ($t = "value" in (Xt = a3) ? Xt.value : Xt.textContent, Zn = true)), 0 < (g2 = Ir(r3, b2)).length && (b2 = new Sn(b2, e3, null, n3, a3), i3.push({ event: b2, listeners: g2 }), (y2 || (y2 = Vn(n3)) !== null) && (b2.data = y2))), (y2 = Fn ? function (e4, t4) {
                                switch (e4) {
                                    case "compositionend":
                                        return Vn(t4);
                                    case "keypress":
                                        return t4.which !== 32 ? null : (Un = true, jn);
                                    case "textInput":
                                        return (e4 = t4.data) === jn && Un ? null : e4;
                                    default:
                                        return null;
                                }
                            }(e3, n3) : function (e4, t4) {
                                if (Zn)
                                    return e4 === "compositionend" || !In && Bn(e4, t4) ? (e4 = tn(), en = $t = Xt = null, Zn = false, e4) : null;
                                switch (e4) {
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t4.ctrlKey || t4.altKey || t4.metaKey) || t4.ctrlKey && t4.altKey) {
                                            if (t4.char && 1 < t4.char.length)
                                                return t4.char;
                                            if (t4.which)
                                                return String.fromCharCode(t4.which);
                                        }
                                        return null;
                                    case "compositionend":
                                        return zn && t4.locale !== "ko" ? null : t4.data;
                                }
                            }(e3, n3)) && 0 < (r3 = Ir(r3, "onBeforeInput")).length && (a3 = new Sn("onBeforeInput", "beforeinput", null, n3, a3), i3.push({ event: a3, listeners: r3 }), a3.data = y2);
                        }
                        Rr(i3, t3);
                    });
                }
                function Or(e3, t3, n3) {
                    return { instance: e3, listener: t3, currentTarget: n3 };
                }
                function Ir(e3, t3) {
                    for (var n3 = t3 + "Capture", r2 = []; e3 !== null;) {
                        var a2 = e3, o2 = a2.stateNode;
                        a2.tag === 5 && o2 !== null && (a2 = o2, (o2 = je(e3, n3)) != null && r2.unshift(Or(e3, o2, a2)), (o2 = je(e3, t3)) != null && r2.push(Or(e3, o2, a2))), e3 = e3.return;
                    }
                    return r2;
                }
                function Ar(e3) {
                    if (e3 === null)
                        return null;
                    do {
                        e3 = e3.return;
                    } while (e3 && e3.tag !== 5);
                    return e3 || null;
                }
                function Fr(e3, t3, n3, r2, a2) {
                    for (var o2 = t3._reactName, i2 = []; n3 !== null && n3 !== r2;) {
                        var s2 = n3, l2 = s2.alternate, u2 = s2.stateNode;
                        if (l2 !== null && l2 === r2)
                            break;
                        s2.tag === 5 && u2 !== null && (s2 = u2, a2 ? (l2 = je(n3, o2)) != null && i2.unshift(Or(n3, l2, s2)) : a2 || (l2 = je(n3, o2)) != null && i2.push(Or(n3, l2, s2))), n3 = n3.return;
                    }
                    i2.length !== 0 && e3.push({ event: t3, listeners: i2 });
                }
                function zr() {
                }
                var jr = null, Ur = null;
                function Br(e3, t3) {
                    switch (e3) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!t3.autoFocus;
                    }
                    return false;
                }
                function Vr(e3, t3) {
                    return e3 === "textarea" || e3 === "option" || e3 === "noscript" || typeof t3.children == "string" || typeof t3.children == "number" || typeof t3.dangerouslySetInnerHTML == "object" && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
                }
                var Zr = typeof setTimeout == "function" ? setTimeout : void 0, Hr = typeof clearTimeout == "function" ? clearTimeout : void 0;
                function Gr(e3) {
                    (e3.nodeType === 1 || e3.nodeType === 9 && (e3 = e3.body) != null) && (e3.textContent = "");
                }
                function Wr(e3) {
                    for (; e3 != null; e3 = e3.nextSibling) {
                        var t3 = e3.nodeType;
                        if (t3 === 1 || t3 === 3)
                            break;
                    }
                    return e3;
                }
                function qr(e3) {
                    e3 = e3.previousSibling;
                    for (var t3 = 0; e3;) {
                        if (e3.nodeType === 8) {
                            var n3 = e3.data;
                            if (n3 === "$" || n3 === "$!" || n3 === "$?") {
                                if (t3 === 0)
                                    return e3;
                                t3--;
                            } else
                                n3 === "/$" && t3++;
                        }
                        e3 = e3.previousSibling;
                    }
                    return null;
                }
                var Kr = 0, Jr = Math.random().toString(36).slice(2), Yr = "__reactFiber$" + Jr, Qr = "__reactProps$" + Jr, Xr = "__reactContainer$" + Jr, $r = "__reactEvents$" + Jr;
                function ea(e3) {
                    var t3 = e3[Yr];
                    if (t3)
                        return t3;
                    for (var n3 = e3.parentNode; n3;) {
                        if (t3 = n3[Xr] || n3[Yr]) {
                            if (n3 = t3.alternate, t3.child !== null || n3 !== null && n3.child !== null)
                                for (e3 = qr(e3); e3 !== null;) {
                                    if (n3 = e3[Yr])
                                        return n3;
                                    e3 = qr(e3);
                                }
                            return t3;
                        }
                        n3 = (e3 = n3).parentNode;
                    }
                    return null;
                }
                function ta(e3) {
                    return !(e3 = e3[Yr] || e3[Xr]) || e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 13 && e3.tag !== 3 ? null : e3;
                }
                function na(e3) {
                    if (e3.tag === 5 || e3.tag === 6)
                        return e3.stateNode;
                    throw Error(i(33));
                }
                function ra(e3) {
                    return e3[Qr] || null;
                }
                function aa(e3) {
                    var t3 = e3[$r];
                    return t3 === void 0 && (t3 = e3[$r] = new Set()), t3;
                }
                var oa = [], ia = -1;
                function sa(e3) {
                    return { current: e3 };
                }
                function la(e3) {
                    0 > ia || (e3.current = oa[ia], oa[ia] = null, ia--);
                }
                function ua(e3, t3) {
                    ia++, oa[ia] = e3.current, e3.current = t3;
                }
                var ca = {}, da = sa(ca), fa = sa(false), pa = ca;
                function ha(e3, t3) {
                    var n3 = e3.type.contextTypes;
                    if (!n3)
                        return ca;
                    var r2 = e3.stateNode;
                    if (r2 && r2.__reactInternalMemoizedUnmaskedChildContext === t3)
                        return r2.__reactInternalMemoizedMaskedChildContext;
                    var a2, o2 = {};
                    for (a2 in n3)
                        o2[a2] = t3[a2];
                    return r2 && ((e3 = e3.stateNode).__reactInternalMemoizedUnmaskedChildContext = t3, e3.__reactInternalMemoizedMaskedChildContext = o2), o2;
                }
                function ma(e3) {
                    return e3.childContextTypes != null;
                }
                function va() {
                    la(fa), la(da);
                }
                function ga(e3, t3, n3) {
                    if (da.current !== ca)
                        throw Error(i(168));
                    ua(da, t3), ua(fa, n3);
                }
                function ya(e3, t3, n3) {
                    var r2 = e3.stateNode;
                    if (e3 = t3.childContextTypes, typeof r2.getChildContext != "function")
                        return n3;
                    for (var o2 in r2 = r2.getChildContext())
                        if (!(o2 in e3))
                            throw Error(i(108, q(t3) || "Unknown", o2));
                    return a({}, n3, r2);
                }
                function ba(e3) {
                    return e3 = (e3 = e3.stateNode) && e3.__reactInternalMemoizedMergedChildContext || ca, pa = da.current, ua(da, e3), ua(fa, fa.current), true;
                }
                function Ca(e3, t3, n3) {
                    var r2 = e3.stateNode;
                    if (!r2)
                        throw Error(i(169));
                    n3 ? (e3 = ya(e3, t3, pa), r2.__reactInternalMemoizedMergedChildContext = e3, la(fa), la(da), ua(da, e3)) : la(fa), ua(fa, n3);
                }
                var Sa = null, _a = null, wa = o.unstable_runWithPriority, Ea = o.unstable_scheduleCallback, La = o.unstable_cancelCallback, ka = o.unstable_shouldYield, Ra = o.unstable_requestPaint, xa = o.unstable_now, Na = o.unstable_getCurrentPriorityLevel, Da = o.unstable_ImmediatePriority, Ta = o.unstable_UserBlockingPriority, Pa = o.unstable_NormalPriority, Ma = o.unstable_LowPriority, Oa = o.unstable_IdlePriority, Ia = {}, Aa = Ra !== void 0 ? Ra : function () {
                }, Fa = null, za = null, ja = false, Ua = xa(), Ba = 1e4 > Ua ? xa : function () {
                    return xa() - Ua;
                };
                function Va() {
                    switch (Na()) {
                        case Da:
                            return 99;
                        case Ta:
                            return 98;
                        case Pa:
                            return 97;
                        case Ma:
                            return 96;
                        case Oa:
                            return 95;
                        default:
                            throw Error(i(332));
                    }
                }
                function Za(e3) {
                    switch (e3) {
                        case 99:
                            return Da;
                        case 98:
                            return Ta;
                        case 97:
                            return Pa;
                        case 96:
                            return Ma;
                        case 95:
                            return Oa;
                        default:
                            throw Error(i(332));
                    }
                }
                function Ha(e3, t3) {
                    return e3 = Za(e3), wa(e3, t3);
                }
                function Ga(e3, t3, n3) {
                    return e3 = Za(e3), Ea(e3, t3, n3);
                }
                function Wa() {
                    if (za !== null) {
                        var e3 = za;
                        za = null, La(e3);
                    }
                    qa();
                }
                function qa() {
                    if (!ja && Fa !== null) {
                        ja = true;
                        var e3 = 0;
                        try {
                            var t3 = Fa;
                            Ha(99, function () {
                                for (; e3 < t3.length; e3++) {
                                    var n3 = t3[e3];
                                    do {
                                        n3 = n3(true);
                                    } while (n3 !== null);
                                }
                            }), Fa = null;
                        } catch (t4) {
                            throw Fa !== null && (Fa = Fa.slice(e3 + 1)), Ea(Da, Wa), t4;
                        } finally {
                            ja = false;
                        }
                    }
                }
                var Ka = S.ReactCurrentBatchConfig;
                function Ja(e3, t3) {
                    if (e3 && e3.defaultProps) {
                        for (var n3 in t3 = a({}, t3), e3 = e3.defaultProps)
                            t3[n3] === void 0 && (t3[n3] = e3[n3]);
                        return t3;
                    }
                    return t3;
                }
                var Ya = sa(null), Qa = null, Xa = null, $a = null;
                function eo() {
                    $a = Xa = Qa = null;
                }
                function to(e3) {
                    var t3 = Ya.current;
                    la(Ya), e3.type._context._currentValue = t3;
                }
                function no(e3, t3) {
                    for (; e3 !== null;) {
                        var n3 = e3.alternate;
                        if ((e3.childLanes & t3) === t3) {
                            if (n3 === null || (n3.childLanes & t3) === t3)
                                break;
                            n3.childLanes |= t3;
                        } else
                            e3.childLanes |= t3, n3 !== null && (n3.childLanes |= t3);
                        e3 = e3.return;
                    }
                }
                function ro(e3, t3) {
                    Qa = e3, $a = Xa = null, (e3 = e3.dependencies) !== null && e3.firstContext !== null && ((e3.lanes & t3) != 0 && (Ii = true), e3.firstContext = null);
                }
                function ao(e3, t3) {
                    if ($a !== e3 && t3 !== false && t3 !== 0)
                        if (typeof t3 == "number" && t3 !== 1073741823 || ($a = e3, t3 = 1073741823), t3 = { context: e3, observedBits: t3, next: null }, Xa === null) {
                            if (Qa === null)
                                throw Error(i(308));
                            Xa = t3, Qa.dependencies = { lanes: 0, firstContext: t3, responders: null };
                        } else
                            Xa = Xa.next = t3;
                    return e3._currentValue;
                }
                var oo = false;
                function io(e3) {
                    e3.updateQueue = { baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
                }
                function so(e3, t3) {
                    e3 = e3.updateQueue, t3.updateQueue === e3 && (t3.updateQueue = { baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, effects: e3.effects });
                }
                function lo(e3, t3) {
                    return { eventTime: e3, lane: t3, tag: 0, payload: null, callback: null, next: null };
                }
                function uo(e3, t3) {
                    if ((e3 = e3.updateQueue) !== null) {
                        var n3 = (e3 = e3.shared).pending;
                        n3 === null ? t3.next = t3 : (t3.next = n3.next, n3.next = t3), e3.pending = t3;
                    }
                }
                function co(e3, t3) {
                    var n3 = e3.updateQueue, r2 = e3.alternate;
                    if (r2 !== null && n3 === (r2 = r2.updateQueue)) {
                        var a2 = null, o2 = null;
                        if ((n3 = n3.firstBaseUpdate) !== null) {
                            do {
                                var i2 = { eventTime: n3.eventTime, lane: n3.lane, tag: n3.tag, payload: n3.payload, callback: n3.callback, next: null };
                                o2 === null ? a2 = o2 = i2 : o2 = o2.next = i2, n3 = n3.next;
                            } while (n3 !== null);
                            o2 === null ? a2 = o2 = t3 : o2 = o2.next = t3;
                        } else
                            a2 = o2 = t3;
                        return n3 = { baseState: r2.baseState, firstBaseUpdate: a2, lastBaseUpdate: o2, shared: r2.shared, effects: r2.effects }, void (e3.updateQueue = n3);
                    }
                    (e3 = n3.lastBaseUpdate) === null ? n3.firstBaseUpdate = t3 : e3.next = t3, n3.lastBaseUpdate = t3;
                }
                function fo(e3, t3, n3, r2) {
                    var o2 = e3.updateQueue;
                    oo = false;
                    var i2 = o2.firstBaseUpdate, s2 = o2.lastBaseUpdate, l2 = o2.shared.pending;
                    if (l2 !== null) {
                        o2.shared.pending = null;
                        var u2 = l2, c2 = u2.next;
                        u2.next = null, s2 === null ? i2 = c2 : s2.next = c2, s2 = u2;
                        var d2 = e3.alternate;
                        if (d2 !== null) {
                            var f2 = (d2 = d2.updateQueue).lastBaseUpdate;
                            f2 !== s2 && (f2 === null ? d2.firstBaseUpdate = c2 : f2.next = c2, d2.lastBaseUpdate = u2);
                        }
                    }
                    if (i2 !== null) {
                        for (f2 = o2.baseState, s2 = 0, d2 = c2 = u2 = null; ;) {
                            l2 = i2.lane;
                            var p2 = i2.eventTime;
                            if ((r2 & l2) === l2) {
                                d2 !== null && (d2 = d2.next = { eventTime: p2, lane: 0, tag: i2.tag, payload: i2.payload, callback: i2.callback, next: null });
                                e: {
                                    var h2 = e3, m2 = i2;
                                    switch (l2 = t3, p2 = n3, m2.tag) {
                                        case 1:
                                            if (typeof (h2 = m2.payload) == "function") {
                                                f2 = h2.call(p2, f2, l2);
                                                break e;
                                            }
                                            f2 = h2;
                                            break e;
                                        case 3:
                                            h2.flags = -4097 & h2.flags | 64;
                                        case 0:
                                            if ((l2 = typeof (h2 = m2.payload) == "function" ? h2.call(p2, f2, l2) : h2) == null)
                                                break e;
                                            f2 = a({}, f2, l2);
                                            break e;
                                        case 2:
                                            oo = true;
                                    }
                                }
                                i2.callback !== null && (e3.flags |= 32, (l2 = o2.effects) === null ? o2.effects = [i2] : l2.push(i2));
                            } else
                                p2 = { eventTime: p2, lane: l2, tag: i2.tag, payload: i2.payload, callback: i2.callback, next: null }, d2 === null ? (c2 = d2 = p2, u2 = f2) : d2 = d2.next = p2, s2 |= l2;
                            if ((i2 = i2.next) === null) {
                                if ((l2 = o2.shared.pending) === null)
                                    break;
                                i2 = l2.next, l2.next = null, o2.lastBaseUpdate = l2, o2.shared.pending = null;
                            }
                        }
                        d2 === null && (u2 = f2), o2.baseState = u2, o2.firstBaseUpdate = c2, o2.lastBaseUpdate = d2, Fs |= s2, e3.lanes = s2, e3.memoizedState = f2;
                    }
                }
                function po(e3, t3, n3) {
                    if (e3 = t3.effects, t3.effects = null, e3 !== null)
                        for (t3 = 0; t3 < e3.length; t3++) {
                            var r2 = e3[t3], a2 = r2.callback;
                            if (a2 !== null) {
                                if (r2.callback = null, r2 = n3, typeof a2 != "function")
                                    throw Error(i(191, a2));
                                a2.call(r2);
                            }
                        }
                }
                var ho = new r.Component().refs;
                function mo(e3, t3, n3, r2) {
                    n3 = (n3 = n3(r2, t3 = e3.memoizedState)) == null ? t3 : a({}, t3, n3), e3.memoizedState = n3, e3.lanes === 0 && (e3.updateQueue.baseState = n3);
                }
                var vo = {
                    isMounted: function (e3) {
                        return !!(e3 = e3._reactInternals) && Je(e3) === e3;
                    }, enqueueSetState: function (e3, t3, n3) {
                        e3 = e3._reactInternals;
                        var r2 = ll(), a2 = ul(e3), o2 = lo(r2, a2);
                        o2.payload = t3, n3 != null && (o2.callback = n3), uo(e3, o2), cl(e3, a2, r2);
                    }, enqueueReplaceState: function (e3, t3, n3) {
                        e3 = e3._reactInternals;
                        var r2 = ll(), a2 = ul(e3), o2 = lo(r2, a2);
                        o2.tag = 1, o2.payload = t3, n3 != null && (o2.callback = n3), uo(e3, o2), cl(e3, a2, r2);
                    }, enqueueForceUpdate: function (e3, t3) {
                        e3 = e3._reactInternals;
                        var n3 = ll(), r2 = ul(e3), a2 = lo(n3, r2);
                        a2.tag = 2, t3 != null && (a2.callback = t3), uo(e3, a2), cl(e3, r2, n3);
                    }
                };
                function go(e3, t3, n3, r2, a2, o2, i2) {
                    return typeof (e3 = e3.stateNode).shouldComponentUpdate == "function" ? e3.shouldComponentUpdate(r2, o2, i2) : !(t3.prototype && t3.prototype.isPureReactComponent && cr(n3, r2) && cr(a2, o2));
                }
                function yo(e3, t3, n3) {
                    var r2 = false, a2 = ca, o2 = t3.contextType;
                    return typeof o2 == "object" && o2 !== null ? o2 = ao(o2) : (a2 = ma(t3) ? pa : da.current, o2 = (r2 = (r2 = t3.contextTypes) != null) ? ha(e3, a2) : ca), t3 = new t3(n3, o2), e3.memoizedState = t3.state !== null && t3.state !== void 0 ? t3.state : null, t3.updater = vo, e3.stateNode = t3, t3._reactInternals = e3, r2 && ((e3 = e3.stateNode).__reactInternalMemoizedUnmaskedChildContext = a2, e3.__reactInternalMemoizedMaskedChildContext = o2), t3;
                }
                function bo(e3, t3, n3, r2) {
                    e3 = t3.state, typeof t3.componentWillReceiveProps == "function" && t3.componentWillReceiveProps(n3, r2), typeof t3.UNSAFE_componentWillReceiveProps == "function" && t3.UNSAFE_componentWillReceiveProps(n3, r2), t3.state !== e3 && vo.enqueueReplaceState(t3, t3.state, null);
                }
                function Co(e3, t3, n3, r2) {
                    var a2 = e3.stateNode;
                    a2.props = n3, a2.state = e3.memoizedState, a2.refs = ho, io(e3);
                    var o2 = t3.contextType;
                    typeof o2 == "object" && o2 !== null ? a2.context = ao(o2) : (o2 = ma(t3) ? pa : da.current, a2.context = ha(e3, o2)), fo(e3, n3, a2, r2), a2.state = e3.memoizedState, typeof (o2 = t3.getDerivedStateFromProps) == "function" && (mo(e3, t3, o2, n3), a2.state = e3.memoizedState), typeof t3.getDerivedStateFromProps == "function" || typeof a2.getSnapshotBeforeUpdate == "function" || typeof a2.UNSAFE_componentWillMount != "function" && typeof a2.componentWillMount != "function" || (t3 = a2.state, typeof a2.componentWillMount == "function" && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount == "function" && a2.UNSAFE_componentWillMount(), t3 !== a2.state && vo.enqueueReplaceState(a2, a2.state, null), fo(e3, n3, a2, r2), a2.state = e3.memoizedState), typeof a2.componentDidMount == "function" && (e3.flags |= 4);
                }
                var So = Array.isArray;
                function _o(e3, t3, n3) {
                    if ((e3 = n3.ref) !== null && typeof e3 != "function" && typeof e3 != "object") {
                        if (n3._owner) {
                            if (n3 = n3._owner) {
                                if (n3.tag !== 1)
                                    throw Error(i(309));
                                var r2 = n3.stateNode;
                            }
                            if (!r2)
                                throw Error(i(147, e3));
                            var a2 = "" + e3;
                            return t3 !== null && t3.ref !== null && typeof t3.ref == "function" && t3.ref._stringRef === a2 ? t3.ref : (t3 = function (e4) {
                                var t4 = r2.refs;
                                t4 === ho && (t4 = r2.refs = {}), e4 === null ? delete t4[a2] : t4[a2] = e4;
                            }, t3._stringRef = a2, t3);
                        }
                        if (typeof e3 != "string")
                            throw Error(i(284));
                        if (!n3._owner)
                            throw Error(i(290, e3));
                    }
                    return e3;
                }
                function wo(e3, t3) {
                    if (e3.type !== "textarea")
                        throw Error(i(31, Object.prototype.toString.call(t3) === "[object Object]" ? "object with keys {" + Object.keys(t3).join(", ") + "}" : t3));
                }
                function Eo(e3) {
                    function t3(t4, n4) {
                        if (e3) {
                            var r3 = t4.lastEffect;
                            r3 !== null ? (r3.nextEffect = n4, t4.lastEffect = n4) : t4.firstEffect = t4.lastEffect = n4, n4.nextEffect = null, n4.flags = 8;
                        }
                    }
                    function n3(n4, r3) {
                        if (!e3)
                            return null;
                        for (; r3 !== null;)
                            t3(n4, r3), r3 = r3.sibling;
                        return null;
                    }
                    function r2(e4, t4) {
                        for (e4 = new Map(); t4 !== null;)
                            t4.key !== null ? e4.set(t4.key, t4) : e4.set(t4.index, t4), t4 = t4.sibling;
                        return e4;
                    }
                    function a2(e4, t4) {
                        return (e4 = Bl(e4, t4)).index = 0, e4.sibling = null, e4;
                    }
                    function o2(t4, n4, r3) {
                        return t4.index = r3, e3 ? (r3 = t4.alternate) !== null ? (r3 = r3.index) < n4 ? (t4.flags = 2, n4) : r3 : (t4.flags = 2, n4) : n4;
                    }
                    function s2(t4) {
                        return e3 && t4.alternate === null && (t4.flags = 2), t4;
                    }
                    function l2(e4, t4, n4, r3) {
                        return t4 === null || t4.tag !== 6 ? ((t4 = Gl(n4, e4.mode, r3)).return = e4, t4) : ((t4 = a2(t4, n4)).return = e4, t4);
                    }
                    function u2(e4, t4, n4, r3) {
                        return t4 !== null && t4.elementType === n4.type ? ((r3 = a2(t4, n4.props)).ref = _o(e4, t4, n4), r3.return = e4, r3) : ((r3 = Vl(n4.type, n4.key, n4.props, null, e4.mode, r3)).ref = _o(e4, t4, n4), r3.return = e4, r3);
                    }
                    function c2(e4, t4, n4, r3) {
                        return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n4.containerInfo || t4.stateNode.implementation !== n4.implementation ? ((t4 = Wl(n4, e4.mode, r3)).return = e4, t4) : ((t4 = a2(t4, n4.children || [])).return = e4, t4);
                    }
                    function d2(e4, t4, n4, r3, o3) {
                        return t4 === null || t4.tag !== 7 ? ((t4 = Zl(n4, e4.mode, r3, o3)).return = e4, t4) : ((t4 = a2(t4, n4)).return = e4, t4);
                    }
                    function f2(e4, t4, n4) {
                        if (typeof t4 == "string" || typeof t4 == "number")
                            return (t4 = Gl("" + t4, e4.mode, n4)).return = e4, t4;
                        if (typeof t4 == "object" && t4 !== null) {
                            switch (t4.$$typeof) {
                                case _:
                                    return (n4 = Vl(t4.type, t4.key, t4.props, null, e4.mode, n4)).ref = _o(e4, null, t4), n4.return = e4, n4;
                                case w:
                                    return (t4 = Wl(t4, e4.mode, n4)).return = e4, t4;
                            }
                            if (So(t4) || V(t4))
                                return (t4 = Zl(t4, e4.mode, n4, null)).return = e4, t4;
                            wo(e4, t4);
                        }
                        return null;
                    }
                    function p2(e4, t4, n4, r3) {
                        var a3 = t4 !== null ? t4.key : null;
                        if (typeof n4 == "string" || typeof n4 == "number")
                            return a3 !== null ? null : l2(e4, t4, "" + n4, r3);
                        if (typeof n4 == "object" && n4 !== null) {
                            switch (n4.$$typeof) {
                                case _:
                                    return n4.key === a3 ? n4.type === E ? d2(e4, t4, n4.props.children, r3, a3) : u2(e4, t4, n4, r3) : null;
                                case w:
                                    return n4.key === a3 ? c2(e4, t4, n4, r3) : null;
                            }
                            if (So(n4) || V(n4))
                                return a3 !== null ? null : d2(e4, t4, n4, r3, null);
                            wo(e4, n4);
                        }
                        return null;
                    }
                    function h2(e4, t4, n4, r3, a3) {
                        if (typeof r3 == "string" || typeof r3 == "number")
                            return l2(t4, e4 = e4.get(n4) || null, "" + r3, a3);
                        if (typeof r3 == "object" && r3 !== null) {
                            switch (r3.$$typeof) {
                                case _:
                                    return e4 = e4.get(r3.key === null ? n4 : r3.key) || null, r3.type === E ? d2(t4, e4, r3.props.children, a3, r3.key) : u2(t4, e4, r3, a3);
                                case w:
                                    return c2(t4, e4 = e4.get(r3.key === null ? n4 : r3.key) || null, r3, a3);
                            }
                            if (So(r3) || V(r3))
                                return d2(t4, e4 = e4.get(n4) || null, r3, a3, null);
                            wo(t4, r3);
                        }
                        return null;
                    }
                    function m2(a3, i2, s3, l3) {
                        for (var u3 = null, c3 = null, d3 = i2, m3 = i2 = 0, v3 = null; d3 !== null && m3 < s3.length; m3++) {
                            d3.index > m3 ? (v3 = d3, d3 = null) : v3 = d3.sibling;
                            var g2 = p2(a3, d3, s3[m3], l3);
                            if (g2 === null) {
                                d3 === null && (d3 = v3);
                                break;
                            }
                            e3 && d3 && g2.alternate === null && t3(a3, d3), i2 = o2(g2, i2, m3), c3 === null ? u3 = g2 : c3.sibling = g2, c3 = g2, d3 = v3;
                        }
                        if (m3 === s3.length)
                            return n3(a3, d3), u3;
                        if (d3 === null) {
                            for (; m3 < s3.length; m3++)
                                (d3 = f2(a3, s3[m3], l3)) !== null && (i2 = o2(d3, i2, m3), c3 === null ? u3 = d3 : c3.sibling = d3, c3 = d3);
                            return u3;
                        }
                        for (d3 = r2(a3, d3); m3 < s3.length; m3++)
                            (v3 = h2(d3, a3, m3, s3[m3], l3)) !== null && (e3 && v3.alternate !== null && d3.delete(v3.key === null ? m3 : v3.key), i2 = o2(v3, i2, m3), c3 === null ? u3 = v3 : c3.sibling = v3, c3 = v3);
                        return e3 && d3.forEach(function (e4) {
                            return t3(a3, e4);
                        }), u3;
                    }
                    function v2(a3, s3, l3, u3) {
                        var c3 = V(l3);
                        if (typeof c3 != "function")
                            throw Error(i(150));
                        if ((l3 = c3.call(l3)) == null)
                            throw Error(i(151));
                        for (var d3 = c3 = null, m3 = s3, v3 = s3 = 0, g2 = null, y2 = l3.next(); m3 !== null && !y2.done; v3++, y2 = l3.next()) {
                            m3.index > v3 ? (g2 = m3, m3 = null) : g2 = m3.sibling;
                            var b2 = p2(a3, m3, y2.value, u3);
                            if (b2 === null) {
                                m3 === null && (m3 = g2);
                                break;
                            }
                            e3 && m3 && b2.alternate === null && t3(a3, m3), s3 = o2(b2, s3, v3), d3 === null ? c3 = b2 : d3.sibling = b2, d3 = b2, m3 = g2;
                        }
                        if (y2.done)
                            return n3(a3, m3), c3;
                        if (m3 === null) {
                            for (; !y2.done; v3++, y2 = l3.next())
                                (y2 = f2(a3, y2.value, u3)) !== null && (s3 = o2(y2, s3, v3), d3 === null ? c3 = y2 : d3.sibling = y2, d3 = y2);
                            return c3;
                        }
                        for (m3 = r2(a3, m3); !y2.done; v3++, y2 = l3.next())
                            (y2 = h2(m3, a3, v3, y2.value, u3)) !== null && (e3 && y2.alternate !== null && m3.delete(y2.key === null ? v3 : y2.key), s3 = o2(y2, s3, v3), d3 === null ? c3 = y2 : d3.sibling = y2, d3 = y2);
                        return e3 && m3.forEach(function (e4) {
                            return t3(a3, e4);
                        }), c3;
                    }
                    return function (e4, r3, o3, l3) {
                        var u3 = typeof o3 == "object" && o3 !== null && o3.type === E && o3.key === null;
                        u3 && (o3 = o3.props.children);
                        var c3 = typeof o3 == "object" && o3 !== null;
                        if (c3)
                            switch (o3.$$typeof) {
                                case _:
                                    e: {
                                        for (c3 = o3.key, u3 = r3; u3 !== null;) {
                                            if (u3.key === c3) {
                                                if (u3.tag === 7) {
                                                    if (o3.type === E) {
                                                        n3(e4, u3.sibling), (r3 = a2(u3, o3.props.children)).return = e4, e4 = r3;
                                                        break e;
                                                    }
                                                } else if (u3.elementType === o3.type) {
                                                    n3(e4, u3.sibling), (r3 = a2(u3, o3.props)).ref = _o(e4, u3, o3), r3.return = e4, e4 = r3;
                                                    break e;
                                                }
                                                n3(e4, u3);
                                                break;
                                            }
                                            t3(e4, u3), u3 = u3.sibling;
                                        }
                                        o3.type === E ? ((r3 = Zl(o3.props.children, e4.mode, l3, o3.key)).return = e4, e4 = r3) : ((l3 = Vl(o3.type, o3.key, o3.props, null, e4.mode, l3)).ref = _o(e4, r3, o3), l3.return = e4, e4 = l3);
                                    }
                                    return s2(e4);
                                case w:
                                    e: {
                                        for (u3 = o3.key; r3 !== null;) {
                                            if (r3.key === u3) {
                                                if (r3.tag === 4 && r3.stateNode.containerInfo === o3.containerInfo && r3.stateNode.implementation === o3.implementation) {
                                                    n3(e4, r3.sibling), (r3 = a2(r3, o3.children || [])).return = e4, e4 = r3;
                                                    break e;
                                                }
                                                n3(e4, r3);
                                                break;
                                            }
                                            t3(e4, r3), r3 = r3.sibling;
                                        }
                                        (r3 = Wl(o3, e4.mode, l3)).return = e4, e4 = r3;
                                    }
                                    return s2(e4);
                            }
                        if (typeof o3 == "string" || typeof o3 == "number")
                            return o3 = "" + o3, r3 !== null && r3.tag === 6 ? (n3(e4, r3.sibling), (r3 = a2(r3, o3)).return = e4, e4 = r3) : (n3(e4, r3), (r3 = Gl(o3, e4.mode, l3)).return = e4, e4 = r3), s2(e4);
                        if (So(o3))
                            return m2(e4, r3, o3, l3);
                        if (V(o3))
                            return v2(e4, r3, o3, l3);
                        if (c3 && wo(e4, o3), o3 === void 0 && !u3)
                            switch (e4.tag) {
                                case 1:
                                case 22:
                                case 0:
                                case 11:
                                case 15:
                                    throw Error(i(152, q(e4.type) || "Component"));
                            }
                        return n3(e4, r3);
                    };
                }
                var Lo = Eo(true), ko = Eo(false), Ro = {}, xo = sa(Ro), No = sa(Ro), Do = sa(Ro);
                function To(e3) {
                    if (e3 === Ro)
                        throw Error(i(174));
                    return e3;
                }
                function Po(e3, t3) {
                    switch (ua(Do, t3), ua(No, e3), ua(xo, Ro), e3 = t3.nodeType) {
                        case 9:
                        case 11:
                            t3 = (t3 = t3.documentElement) ? t3.namespaceURI : pe(null, "");
                            break;
                        default:
                            t3 = pe(t3 = (e3 = e3 === 8 ? t3.parentNode : t3).namespaceURI || null, e3 = e3.tagName);
                    }
                    la(xo), ua(xo, t3);
                }
                function Mo() {
                    la(xo), la(No), la(Do);
                }
                function Oo(e3) {
                    To(Do.current);
                    var t3 = To(xo.current), n3 = pe(t3, e3.type);
                    t3 !== n3 && (ua(No, e3), ua(xo, n3));
                }
                function Io(e3) {
                    No.current === e3 && (la(xo), la(No));
                }
                var Ao = sa(0);
                function Fo(e3) {
                    for (var t3 = e3; t3 !== null;) {
                        if (t3.tag === 13) {
                            var n3 = t3.memoizedState;
                            if (n3 !== null && ((n3 = n3.dehydrated) === null || n3.data === "$?" || n3.data === "$!"))
                                return t3;
                        } else if (t3.tag === 19 && t3.memoizedProps.revealOrder !== void 0) {
                            if ((64 & t3.flags) != 0)
                                return t3;
                        } else if (t3.child !== null) {
                            t3.child.return = t3, t3 = t3.child;
                            continue;
                        }
                        if (t3 === e3)
                            break;
                        for (; t3.sibling === null;) {
                            if (t3.return === null || t3.return === e3)
                                return null;
                            t3 = t3.return;
                        }
                        t3.sibling.return = t3.return, t3 = t3.sibling;
                    }
                    return null;
                }
                var zo = null, jo = null, Uo = false;
                function Bo(e3, t3) {
                    var n3 = jl(5, null, null, 0);
                    n3.elementType = "DELETED", n3.type = "DELETED", n3.stateNode = t3, n3.return = e3, n3.flags = 8, e3.lastEffect !== null ? (e3.lastEffect.nextEffect = n3, e3.lastEffect = n3) : e3.firstEffect = e3.lastEffect = n3;
                }
                function Vo(e3, t3) {
                    switch (e3.tag) {
                        case 5:
                            var n3 = e3.type;
                            return (t3 = t3.nodeType !== 1 || n3.toLowerCase() !== t3.nodeName.toLowerCase() ? null : t3) !== null && (e3.stateNode = t3, true);
                        case 6:
                            return (t3 = e3.pendingProps === "" || t3.nodeType !== 3 ? null : t3) !== null && (e3.stateNode = t3, true);
                        default:
                            return false;
                    }
                }
                function Zo(e3) {
                    if (Uo) {
                        var t3 = jo;
                        if (t3) {
                            var n3 = t3;
                            if (!Vo(e3, t3)) {
                                if (!(t3 = Wr(n3.nextSibling)) || !Vo(e3, t3))
                                    return e3.flags = -1025 & e3.flags | 2, Uo = false, void (zo = e3);
                                Bo(zo, n3);
                            }
                            zo = e3, jo = Wr(t3.firstChild);
                        } else
                            e3.flags = -1025 & e3.flags | 2, Uo = false, zo = e3;
                    }
                }
                function Ho(e3) {
                    for (e3 = e3.return; e3 !== null && e3.tag !== 5 && e3.tag !== 3 && e3.tag !== 13;)
                        e3 = e3.return;
                    zo = e3;
                }
                function Go(e3) {
                    if (e3 !== zo)
                        return false;
                    if (!Uo)
                        return Ho(e3), Uo = true, false;
                    var t3 = e3.type;
                    if (e3.tag !== 5 || t3 !== "head" && t3 !== "body" && !Vr(t3, e3.memoizedProps))
                        for (t3 = jo; t3;)
                            Bo(e3, t3), t3 = Wr(t3.nextSibling);
                    if (Ho(e3), e3.tag === 13) {
                        if (!(e3 = (e3 = e3.memoizedState) !== null ? e3.dehydrated : null))
                            throw Error(i(317));
                        e: {
                            for (e3 = e3.nextSibling, t3 = 0; e3;) {
                                if (e3.nodeType === 8) {
                                    var n3 = e3.data;
                                    if (n3 === "/$") {
                                        if (t3 === 0) {
                                            jo = Wr(e3.nextSibling);
                                            break e;
                                        }
                                        t3--;
                                    } else
                                        n3 !== "$" && n3 !== "$!" && n3 !== "$?" || t3++;
                                }
                                e3 = e3.nextSibling;
                            }
                            jo = null;
                        }
                    } else
                        jo = zo ? Wr(e3.stateNode.nextSibling) : null;
                    return true;
                }
                function Wo() {
                    jo = zo = null, Uo = false;
                }
                var qo = [];
                function Ko() {
                    for (var e3 = 0; e3 < qo.length; e3++)
                        qo[e3]._workInProgressVersionPrimary = null;
                    qo.length = 0;
                }
                var Jo = S.ReactCurrentDispatcher, Yo = S.ReactCurrentBatchConfig, Qo = 0, Xo = null, $o = null, ei = null, ti = false, ni = false;
                function ri() {
                    throw Error(i(321));
                }
                function ai(e3, t3) {
                    if (t3 === null)
                        return false;
                    for (var n3 = 0; n3 < t3.length && n3 < e3.length; n3++)
                        if (!lr(e3[n3], t3[n3]))
                            return false;
                    return true;
                }
                function oi(e3, t3, n3, r2, a2, o2) {
                    if (Qo = o2, Xo = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, Jo.current = e3 === null || e3.memoizedState === null ? Ti : Pi, e3 = n3(r2, a2), ni) {
                        o2 = 0;
                        do {
                            if (ni = false, !(25 > o2))
                                throw Error(i(301));
                            o2 += 1, ei = $o = null, t3.updateQueue = null, Jo.current = Mi, e3 = n3(r2, a2);
                        } while (ni);
                    }
                    if (Jo.current = Di, t3 = $o !== null && $o.next !== null, Qo = 0, ei = $o = Xo = null, ti = false, t3)
                        throw Error(i(300));
                    return e3;
                }
                function ii() {
                    var e3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
                    return ei === null ? Xo.memoizedState = ei = e3 : ei = ei.next = e3, ei;
                }
                function si() {
                    if ($o === null) {
                        var e3 = Xo.alternate;
                        e3 = e3 !== null ? e3.memoizedState : null;
                    } else
                        e3 = $o.next;
                    var t3 = ei === null ? Xo.memoizedState : ei.next;
                    if (t3 !== null)
                        ei = t3, $o = e3;
                    else {
                        if (e3 === null)
                            throw Error(i(310));
                        e3 = { memoizedState: ($o = e3).memoizedState, baseState: $o.baseState, baseQueue: $o.baseQueue, queue: $o.queue, next: null }, ei === null ? Xo.memoizedState = ei = e3 : ei = ei.next = e3;
                    }
                    return ei;
                }
                function li(e3, t3) {
                    return typeof t3 == "function" ? t3(e3) : t3;
                }
                function ui(e3) {
                    var t3 = si(), n3 = t3.queue;
                    if (n3 === null)
                        throw Error(i(311));
                    n3.lastRenderedReducer = e3;
                    var r2 = $o, a2 = r2.baseQueue, o2 = n3.pending;
                    if (o2 !== null) {
                        if (a2 !== null) {
                            var s2 = a2.next;
                            a2.next = o2.next, o2.next = s2;
                        }
                        r2.baseQueue = a2 = o2, n3.pending = null;
                    }
                    if (a2 !== null) {
                        a2 = a2.next, r2 = r2.baseState;
                        var l2 = s2 = o2 = null, u2 = a2;
                        do {
                            var c2 = u2.lane;
                            if ((Qo & c2) === c2)
                                l2 !== null && (l2 = l2.next = { lane: 0, action: u2.action, eagerReducer: u2.eagerReducer, eagerState: u2.eagerState, next: null }), r2 = u2.eagerReducer === e3 ? u2.eagerState : e3(r2, u2.action);
                            else {
                                var d2 = { lane: c2, action: u2.action, eagerReducer: u2.eagerReducer, eagerState: u2.eagerState, next: null };
                                l2 === null ? (s2 = l2 = d2, o2 = r2) : l2 = l2.next = d2, Xo.lanes |= c2, Fs |= c2;
                            }
                            u2 = u2.next;
                        } while (u2 !== null && u2 !== a2);
                        l2 === null ? o2 = r2 : l2.next = s2, lr(r2, t3.memoizedState) || (Ii = true), t3.memoizedState = r2, t3.baseState = o2, t3.baseQueue = l2, n3.lastRenderedState = r2;
                    }
                    return [t3.memoizedState, n3.dispatch];
                }
                function ci(e3) {
                    var t3 = si(), n3 = t3.queue;
                    if (n3 === null)
                        throw Error(i(311));
                    n3.lastRenderedReducer = e3;
                    var r2 = n3.dispatch, a2 = n3.pending, o2 = t3.memoizedState;
                    if (a2 !== null) {
                        n3.pending = null;
                        var s2 = a2 = a2.next;
                        do {
                            o2 = e3(o2, s2.action), s2 = s2.next;
                        } while (s2 !== a2);
                        lr(o2, t3.memoizedState) || (Ii = true), t3.memoizedState = o2, t3.baseQueue === null && (t3.baseState = o2), n3.lastRenderedState = o2;
                    }
                    return [o2, r2];
                }
                function di(e3, t3, n3) {
                    var r2 = t3._getVersion;
                    r2 = r2(t3._source);
                    var a2 = t3._workInProgressVersionPrimary;
                    if (a2 !== null ? e3 = a2 === r2 : (e3 = e3.mutableReadLanes, (e3 = (Qo & e3) === e3) && (t3._workInProgressVersionPrimary = r2, qo.push(t3))), e3)
                        return n3(t3._source);
                    throw qo.push(t3), Error(i(350));
                }
                function fi(e3, t3, n3, r2) {
                    var a2 = Ns;
                    if (a2 === null)
                        throw Error(i(349));
                    var o2 = t3._getVersion, s2 = o2(t3._source), l2 = Jo.current, u2 = l2.useState(function () {
                        return di(a2, t3, n3);
                    }), c2 = u2[1], d2 = u2[0];
                    u2 = ei;
                    var f2 = e3.memoizedState, p2 = f2.refs, h2 = p2.getSnapshot, m2 = f2.source;
                    f2 = f2.subscribe;
                    var v2 = Xo;
                    return e3.memoizedState = { refs: p2, source: t3, subscribe: r2 }, l2.useEffect(function () {
                        p2.getSnapshot = n3, p2.setSnapshot = c2;
                        var e4 = o2(t3._source);
                        if (!lr(s2, e4)) {
                            e4 = n3(t3._source), lr(d2, e4) || (c2(e4), e4 = ul(v2), a2.mutableReadLanes |= e4 & a2.pendingLanes), e4 = a2.mutableReadLanes, a2.entangledLanes |= e4;
                            for (var r3 = a2.entanglements, i2 = e4; 0 < i2;) {
                                var l3 = 31 - Vt(i2), u3 = 1 << l3;
                                r3[l3] |= e4, i2 &= ~u3;
                            }
                        }
                    }, [n3, t3, r2]), l2.useEffect(function () {
                        return r2(t3._source, function () {
                            var e4 = p2.getSnapshot, n4 = p2.setSnapshot;
                            try {
                                n4(e4(t3._source));
                                var r3 = ul(v2);
                                a2.mutableReadLanes |= r3 & a2.pendingLanes;
                            } catch (e5) {
                                n4(function () {
                                    throw e5;
                                });
                            }
                        });
                    }, [t3, r2]), lr(h2, n3) && lr(m2, t3) && lr(f2, r2) || ((e3 = { pending: null, dispatch: null, lastRenderedReducer: li, lastRenderedState: d2 }).dispatch = c2 = Ni.bind(null, Xo, e3), u2.queue = e3, u2.baseQueue = null, d2 = di(a2, t3, n3), u2.memoizedState = u2.baseState = d2), d2;
                }
                function pi(e3, t3, n3) {
                    return fi(si(), e3, t3, n3);
                }
                function hi(e3) {
                    var t3 = ii();
                    return typeof e3 == "function" && (e3 = e3()), t3.memoizedState = t3.baseState = e3, e3 = (e3 = t3.queue = { pending: null, dispatch: null, lastRenderedReducer: li, lastRenderedState: e3 }).dispatch = Ni.bind(null, Xo, e3), [t3.memoizedState, e3];
                }
                function mi(e3, t3, n3, r2) {
                    return e3 = { tag: e3, create: t3, destroy: n3, deps: r2, next: null }, (t3 = Xo.updateQueue) === null ? (t3 = { lastEffect: null }, Xo.updateQueue = t3, t3.lastEffect = e3.next = e3) : (n3 = t3.lastEffect) === null ? t3.lastEffect = e3.next = e3 : (r2 = n3.next, n3.next = e3, e3.next = r2, t3.lastEffect = e3), e3;
                }
                function vi(e3) {
                    return e3 = { current: e3 }, ii().memoizedState = e3;
                }
                function gi() {
                    return si().memoizedState;
                }
                function yi(e3, t3, n3, r2) {
                    var a2 = ii();
                    Xo.flags |= e3, a2.memoizedState = mi(1 | t3, n3, void 0, r2 === void 0 ? null : r2);
                }
                function bi(e3, t3, n3, r2) {
                    var a2 = si();
                    r2 = r2 === void 0 ? null : r2;
                    var o2 = void 0;
                    if ($o !== null) {
                        var i2 = $o.memoizedState;
                        if (o2 = i2.destroy, r2 !== null && ai(r2, i2.deps))
                            return void mi(t3, n3, o2, r2);
                    }
                    Xo.flags |= e3, a2.memoizedState = mi(1 | t3, n3, o2, r2);
                }
                function Ci(e3, t3) {
                    return yi(516, 4, e3, t3);
                }
                function Si(e3, t3) {
                    return bi(516, 4, e3, t3);
                }
                function _i(e3, t3) {
                    return bi(4, 2, e3, t3);
                }
                function wi(e3, t3) {
                    return typeof t3 == "function" ? (e3 = e3(), t3(e3), function () {
                        t3(null);
                    }) : t3 != null ? (e3 = e3(), t3.current = e3, function () {
                        t3.current = null;
                    }) : void 0;
                }
                function Ei(e3, t3, n3) {
                    return n3 = n3 != null ? n3.concat([e3]) : null, bi(4, 2, wi.bind(null, t3, e3), n3);
                }
                function Li() {
                }
                function ki(e3, t3) {
                    var n3 = si();
                    t3 = t3 === void 0 ? null : t3;
                    var r2 = n3.memoizedState;
                    return r2 !== null && t3 !== null && ai(t3, r2[1]) ? r2[0] : (n3.memoizedState = [e3, t3], e3);
                }
                function Ri(e3, t3) {
                    var n3 = si();
                    t3 = t3 === void 0 ? null : t3;
                    var r2 = n3.memoizedState;
                    return r2 !== null && t3 !== null && ai(t3, r2[1]) ? r2[0] : (e3 = e3(), n3.memoizedState = [e3, t3], e3);
                }
                function xi(e3, t3) {
                    var n3 = Va();
                    Ha(98 > n3 ? 98 : n3, function () {
                        e3(true);
                    }), Ha(97 < n3 ? 97 : n3, function () {
                        var n4 = Yo.transition;
                        Yo.transition = 1;
                        try {
                            e3(false), t3();
                        } finally {
                            Yo.transition = n4;
                        }
                    });
                }
                function Ni(e3, t3, n3) {
                    var r2 = ll(), a2 = ul(e3), o2 = { lane: a2, action: n3, eagerReducer: null, eagerState: null, next: null }, i2 = t3.pending;
                    if (i2 === null ? o2.next = o2 : (o2.next = i2.next, i2.next = o2), t3.pending = o2, i2 = e3.alternate, e3 === Xo || i2 !== null && i2 === Xo)
                        ni = ti = true;
                    else {
                        if (e3.lanes === 0 && (i2 === null || i2.lanes === 0) && (i2 = t3.lastRenderedReducer) !== null)
                            try {
                                var s2 = t3.lastRenderedState, l2 = i2(s2, n3);
                                if (o2.eagerReducer = i2, o2.eagerState = l2, lr(l2, s2))
                                    return;
                            } catch (e4) {
                            }
                        cl(e3, a2, r2);
                    }
                }
                var Di = { readContext: ao, useCallback: ri, useContext: ri, useEffect: ri, useImperativeHandle: ri, useLayoutEffect: ri, useMemo: ri, useReducer: ri, useRef: ri, useState: ri, useDebugValue: ri, useDeferredValue: ri, useTransition: ri, useMutableSource: ri, useOpaqueIdentifier: ri, unstable_isNewReconciler: false }, Ti = {
                    readContext: ao, useCallback: function (e3, t3) {
                        return ii().memoizedState = [e3, t3 === void 0 ? null : t3], e3;
                    }, useContext: ao, useEffect: Ci, useImperativeHandle: function (e3, t3, n3) {
                        return n3 = n3 != null ? n3.concat([e3]) : null, yi(4, 2, wi.bind(null, t3, e3), n3);
                    }, useLayoutEffect: function (e3, t3) {
                        return yi(4, 2, e3, t3);
                    }, useMemo: function (e3, t3) {
                        var n3 = ii();
                        return t3 = t3 === void 0 ? null : t3, e3 = e3(), n3.memoizedState = [e3, t3], e3;
                    }, useReducer: function (e3, t3, n3) {
                        var r2 = ii();
                        return t3 = n3 !== void 0 ? n3(t3) : t3, r2.memoizedState = r2.baseState = t3, e3 = (e3 = r2.queue = { pending: null, dispatch: null, lastRenderedReducer: e3, lastRenderedState: t3 }).dispatch = Ni.bind(null, Xo, e3), [r2.memoizedState, e3];
                    }, useRef: vi, useState: hi, useDebugValue: Li, useDeferredValue: function (e3) {
                        var t3 = hi(e3), n3 = t3[0], r2 = t3[1];
                        return Ci(function () {
                            var t4 = Yo.transition;
                            Yo.transition = 1;
                            try {
                                r2(e3);
                            } finally {
                                Yo.transition = t4;
                            }
                        }, [e3]), n3;
                    }, useTransition: function () {
                        var e3 = hi(false), t3 = e3[0];
                        return vi(e3 = xi.bind(null, e3[1])), [e3, t3];
                    }, useMutableSource: function (e3, t3, n3) {
                        var r2 = ii();
                        return r2.memoizedState = { refs: { getSnapshot: t3, setSnapshot: null }, source: e3, subscribe: n3 }, fi(r2, e3, t3, n3);
                    }, useOpaqueIdentifier: function () {
                        if (Uo) {
                            var e3 = false, t3 = function (e4) {
                                return { $$typeof: I, toString: e4, valueOf: e4 };
                            }(function () {
                                throw e3 || (e3 = true, n3("r:" + (Kr++).toString(36))), Error(i(355));
                            }), n3 = hi(t3)[1];
                            return (2 & Xo.mode) == 0 && (Xo.flags |= 516, mi(5, function () {
                                n3("r:" + (Kr++).toString(36));
                            }, void 0, null)), t3;
                        }
                        return hi(t3 = "r:" + (Kr++).toString(36)), t3;
                    }, unstable_isNewReconciler: false
                }, Pi = {
                    readContext: ao, useCallback: ki, useContext: ao, useEffect: Si, useImperativeHandle: Ei, useLayoutEffect: _i, useMemo: Ri, useReducer: ui, useRef: gi, useState: function () {
                        return ui(li);
                    }, useDebugValue: Li, useDeferredValue: function (e3) {
                        var t3 = ui(li), n3 = t3[0], r2 = t3[1];
                        return Si(function () {
                            var t4 = Yo.transition;
                            Yo.transition = 1;
                            try {
                                r2(e3);
                            } finally {
                                Yo.transition = t4;
                            }
                        }, [e3]), n3;
                    }, useTransition: function () {
                        var e3 = ui(li)[0];
                        return [gi().current, e3];
                    }, useMutableSource: pi, useOpaqueIdentifier: function () {
                        return ui(li)[0];
                    }, unstable_isNewReconciler: false
                }, Mi = {
                    readContext: ao, useCallback: ki, useContext: ao, useEffect: Si, useImperativeHandle: Ei, useLayoutEffect: _i, useMemo: Ri, useReducer: ci, useRef: gi, useState: function () {
                        return ci(li);
                    }, useDebugValue: Li, useDeferredValue: function (e3) {
                        var t3 = ci(li), n3 = t3[0], r2 = t3[1];
                        return Si(function () {
                            var t4 = Yo.transition;
                            Yo.transition = 1;
                            try {
                                r2(e3);
                            } finally {
                                Yo.transition = t4;
                            }
                        }, [e3]), n3;
                    }, useTransition: function () {
                        var e3 = ci(li)[0];
                        return [gi().current, e3];
                    }, useMutableSource: pi, useOpaqueIdentifier: function () {
                        return ci(li)[0];
                    }, unstable_isNewReconciler: false
                }, Oi = S.ReactCurrentOwner, Ii = false;
                function Ai(e3, t3, n3, r2) {
                    t3.child = e3 === null ? ko(t3, null, n3, r2) : Lo(t3, e3.child, n3, r2);
                }
                function Fi(e3, t3, n3, r2, a2) {
                    n3 = n3.render;
                    var o2 = t3.ref;
                    return ro(t3, a2), r2 = oi(e3, t3, n3, r2, o2, a2), e3 === null || Ii ? (t3.flags |= 1, Ai(e3, t3, r2, a2), t3.child) : (t3.updateQueue = e3.updateQueue, t3.flags &= -517, e3.lanes &= ~a2, ts(e3, t3, a2));
                }
                function zi(e3, t3, n3, r2, a2, o2) {
                    if (e3 === null) {
                        var i2 = n3.type;
                        return typeof i2 != "function" || Ul(i2) || i2.defaultProps !== void 0 || n3.compare !== null || n3.defaultProps !== void 0 ? ((e3 = Vl(n3.type, null, r2, t3, t3.mode, o2)).ref = t3.ref, e3.return = t3, t3.child = e3) : (t3.tag = 15, t3.type = i2, ji(e3, t3, i2, r2, a2, o2));
                    }
                    return i2 = e3.child, (a2 & o2) == 0 && (a2 = i2.memoizedProps, (n3 = (n3 = n3.compare) !== null ? n3 : cr)(a2, r2) && e3.ref === t3.ref) ? ts(e3, t3, o2) : (t3.flags |= 1, (e3 = Bl(i2, r2)).ref = t3.ref, e3.return = t3, t3.child = e3);
                }
                function ji(e3, t3, n3, r2, a2, o2) {
                    if (e3 !== null && cr(e3.memoizedProps, r2) && e3.ref === t3.ref) {
                        if (Ii = false, (o2 & a2) == 0)
                            return t3.lanes = e3.lanes, ts(e3, t3, o2);
                        (16384 & e3.flags) != 0 && (Ii = true);
                    }
                    return Vi(e3, t3, n3, r2, o2);
                }
                function Ui(e3, t3, n3) {
                    var r2 = t3.pendingProps, a2 = r2.children, o2 = e3 !== null ? e3.memoizedState : null;
                    if (r2.mode === "hidden" || r2.mode === "unstable-defer-without-hiding")
                        if ((4 & t3.mode) == 0)
                            t3.memoizedState = { baseLanes: 0 }, gl(0, n3);
                        else {
                            if ((1073741824 & n3) == 0)
                                return e3 = o2 !== null ? o2.baseLanes | n3 : n3, t3.lanes = t3.childLanes = 1073741824, t3.memoizedState = { baseLanes: e3 }, gl(0, e3), null;
                            t3.memoizedState = { baseLanes: 0 }, gl(0, o2 !== null ? o2.baseLanes : n3);
                        }
                    else
                        o2 !== null ? (r2 = o2.baseLanes | n3, t3.memoizedState = null) : r2 = n3, gl(0, r2);
                    return Ai(e3, t3, a2, n3), t3.child;
                }
                function Bi(e3, t3) {
                    var n3 = t3.ref;
                    (e3 === null && n3 !== null || e3 !== null && e3.ref !== n3) && (t3.flags |= 128);
                }
                function Vi(e3, t3, n3, r2, a2) {
                    var o2 = ma(n3) ? pa : da.current;
                    return o2 = ha(t3, o2), ro(t3, a2), n3 = oi(e3, t3, n3, r2, o2, a2), e3 === null || Ii ? (t3.flags |= 1, Ai(e3, t3, n3, a2), t3.child) : (t3.updateQueue = e3.updateQueue, t3.flags &= -517, e3.lanes &= ~a2, ts(e3, t3, a2));
                }
                function Zi(e3, t3, n3, r2, a2) {
                    if (ma(n3)) {
                        var o2 = true;
                        ba(t3);
                    } else
                        o2 = false;
                    if (ro(t3, a2), t3.stateNode === null)
                        e3 !== null && (e3.alternate = null, t3.alternate = null, t3.flags |= 2), yo(t3, n3, r2), Co(t3, n3, r2, a2), r2 = true;
                    else if (e3 === null) {
                        var i2 = t3.stateNode, s2 = t3.memoizedProps;
                        i2.props = s2;
                        var l2 = i2.context, u2 = n3.contextType;
                        u2 = typeof u2 == "object" && u2 !== null ? ao(u2) : ha(t3, u2 = ma(n3) ? pa : da.current);
                        var c2 = n3.getDerivedStateFromProps, d2 = typeof c2 == "function" || typeof i2.getSnapshotBeforeUpdate == "function";
                        d2 || typeof i2.UNSAFE_componentWillReceiveProps != "function" && typeof i2.componentWillReceiveProps != "function" || (s2 !== r2 || l2 !== u2) && bo(t3, i2, r2, u2), oo = false;
                        var f2 = t3.memoizedState;
                        i2.state = f2, fo(t3, r2, i2, a2), l2 = t3.memoizedState, s2 !== r2 || f2 !== l2 || fa.current || oo ? (typeof c2 == "function" && (mo(t3, n3, c2, r2), l2 = t3.memoizedState), (s2 = oo || go(t3, n3, s2, r2, f2, l2, u2)) ? (d2 || typeof i2.UNSAFE_componentWillMount != "function" && typeof i2.componentWillMount != "function" || (typeof i2.componentWillMount == "function" && i2.componentWillMount(), typeof i2.UNSAFE_componentWillMount == "function" && i2.UNSAFE_componentWillMount()), typeof i2.componentDidMount == "function" && (t3.flags |= 4)) : (typeof i2.componentDidMount == "function" && (t3.flags |= 4), t3.memoizedProps = r2, t3.memoizedState = l2), i2.props = r2, i2.state = l2, i2.context = u2, r2 = s2) : (typeof i2.componentDidMount == "function" && (t3.flags |= 4), r2 = false);
                    } else {
                        i2 = t3.stateNode, so(e3, t3), s2 = t3.memoizedProps, u2 = t3.type === t3.elementType ? s2 : Ja(t3.type, s2), i2.props = u2, d2 = t3.pendingProps, f2 = i2.context, l2 = typeof (l2 = n3.contextType) == "object" && l2 !== null ? ao(l2) : ha(t3, l2 = ma(n3) ? pa : da.current);
                        var p2 = n3.getDerivedStateFromProps;
                        (c2 = typeof p2 == "function" || typeof i2.getSnapshotBeforeUpdate == "function") || typeof i2.UNSAFE_componentWillReceiveProps != "function" && typeof i2.componentWillReceiveProps != "function" || (s2 !== d2 || f2 !== l2) && bo(t3, i2, r2, l2), oo = false, f2 = t3.memoizedState, i2.state = f2, fo(t3, r2, i2, a2);
                        var h2 = t3.memoizedState;
                        s2 !== d2 || f2 !== h2 || fa.current || oo ? (typeof p2 == "function" && (mo(t3, n3, p2, r2), h2 = t3.memoizedState), (u2 = oo || go(t3, n3, u2, r2, f2, h2, l2)) ? (c2 || typeof i2.UNSAFE_componentWillUpdate != "function" && typeof i2.componentWillUpdate != "function" || (typeof i2.componentWillUpdate == "function" && i2.componentWillUpdate(r2, h2, l2), typeof i2.UNSAFE_componentWillUpdate == "function" && i2.UNSAFE_componentWillUpdate(r2, h2, l2)), typeof i2.componentDidUpdate == "function" && (t3.flags |= 4), typeof i2.getSnapshotBeforeUpdate == "function" && (t3.flags |= 256)) : (typeof i2.componentDidUpdate != "function" || s2 === e3.memoizedProps && f2 === e3.memoizedState || (t3.flags |= 4), typeof i2.getSnapshotBeforeUpdate != "function" || s2 === e3.memoizedProps && f2 === e3.memoizedState || (t3.flags |= 256), t3.memoizedProps = r2, t3.memoizedState = h2), i2.props = r2, i2.state = h2, i2.context = l2, r2 = u2) : (typeof i2.componentDidUpdate != "function" || s2 === e3.memoizedProps && f2 === e3.memoizedState || (t3.flags |= 4), typeof i2.getSnapshotBeforeUpdate != "function" || s2 === e3.memoizedProps && f2 === e3.memoizedState || (t3.flags |= 256), r2 = false);
                    }
                    return Hi(e3, t3, n3, r2, o2, a2);
                }
                function Hi(e3, t3, n3, r2, a2, o2) {
                    Bi(e3, t3);
                    var i2 = (64 & t3.flags) != 0;
                    if (!r2 && !i2)
                        return a2 && Ca(t3, n3, false), ts(e3, t3, o2);
                    r2 = t3.stateNode, Oi.current = t3;
                    var s2 = i2 && typeof n3.getDerivedStateFromError != "function" ? null : r2.render();
                    return t3.flags |= 1, e3 !== null && i2 ? (t3.child = Lo(t3, e3.child, null, o2), t3.child = Lo(t3, null, s2, o2)) : Ai(e3, t3, s2, o2), t3.memoizedState = r2.state, a2 && Ca(t3, n3, true), t3.child;
                }
                function Gi(e3) {
                    var t3 = e3.stateNode;
                    t3.pendingContext ? ga(0, t3.pendingContext, t3.pendingContext !== t3.context) : t3.context && ga(0, t3.context, false), Po(e3, t3.containerInfo);
                }
                var Wi, qi, Ki, Ji = { dehydrated: null, retryLane: 0 };
                function Yi(e3, t3, n3) {
                    var r2, a2 = t3.pendingProps, o2 = Ao.current, i2 = false;
                    return (r2 = (64 & t3.flags) != 0) || (r2 = (e3 === null || e3.memoizedState !== null) && (2 & o2) != 0), r2 ? (i2 = true, t3.flags &= -65) : e3 !== null && e3.memoizedState === null || a2.fallback === void 0 || a2.unstable_avoidThisFallback === true || (o2 |= 1), ua(Ao, 1 & o2), e3 === null ? (a2.fallback !== void 0 && Zo(t3), e3 = a2.children, o2 = a2.fallback, i2 ? (e3 = Qi(t3, e3, o2, n3), t3.child.memoizedState = { baseLanes: n3 }, t3.memoizedState = Ji, e3) : typeof a2.unstable_expectedLoadTime == "number" ? (e3 = Qi(t3, e3, o2, n3), t3.child.memoizedState = { baseLanes: n3 }, t3.memoizedState = Ji, t3.lanes = 33554432, e3) : ((n3 = Hl({ mode: "visible", children: e3 }, t3.mode, n3, null)).return = t3, t3.child = n3)) : (e3.memoizedState, i2 ? (a2 = function (e4, t4, n4, r3, a3) {
                        var o3 = t4.mode, i3 = e4.child;
                        e4 = i3.sibling;
                        var s2 = { mode: "hidden", children: n4 };
                        return (2 & o3) == 0 && t4.child !== i3 ? ((n4 = t4.child).childLanes = 0, n4.pendingProps = s2, (i3 = n4.lastEffect) !== null ? (t4.firstEffect = n4.firstEffect, t4.lastEffect = i3, i3.nextEffect = null) : t4.firstEffect = t4.lastEffect = null) : n4 = Bl(i3, s2), e4 !== null ? r3 = Bl(e4, r3) : (r3 = Zl(r3, o3, a3, null)).flags |= 2, r3.return = t4, n4.return = t4, n4.sibling = r3, t4.child = n4, r3;
                    }(e3, t3, a2.children, a2.fallback, n3), i2 = t3.child, o2 = e3.child.memoizedState, i2.memoizedState = o2 === null ? { baseLanes: n3 } : { baseLanes: o2.baseLanes | n3 }, i2.childLanes = e3.childLanes & ~n3, t3.memoizedState = Ji, a2) : (n3 = function (e4, t4, n4, r3) {
                        var a3 = e4.child;
                        return e4 = a3.sibling, n4 = Bl(a3, { mode: "visible", children: n4 }), (2 & t4.mode) == 0 && (n4.lanes = r3), n4.return = t4, n4.sibling = null, e4 !== null && (e4.nextEffect = null, e4.flags = 8, t4.firstEffect = t4.lastEffect = e4), t4.child = n4;
                    }(e3, t3, a2.children, n3), t3.memoizedState = null, n3));
                }
                function Qi(e3, t3, n3, r2) {
                    var a2 = e3.mode, o2 = e3.child;
                    return t3 = { mode: "hidden", children: t3 }, (2 & a2) == 0 && o2 !== null ? (o2.childLanes = 0, o2.pendingProps = t3) : o2 = Hl(t3, a2, 0, null), n3 = Zl(n3, a2, r2, null), o2.return = e3, n3.return = e3, o2.sibling = n3, e3.child = o2, n3;
                }
                function Xi(e3, t3) {
                    e3.lanes |= t3;
                    var n3 = e3.alternate;
                    n3 !== null && (n3.lanes |= t3), no(e3.return, t3);
                }
                function $i(e3, t3, n3, r2, a2, o2) {
                    var i2 = e3.memoizedState;
                    i2 === null ? e3.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r2, tail: n3, tailMode: a2, lastEffect: o2 } : (i2.isBackwards = t3, i2.rendering = null, i2.renderingStartTime = 0, i2.last = r2, i2.tail = n3, i2.tailMode = a2, i2.lastEffect = o2);
                }
                function es(e3, t3, n3) {
                    var r2 = t3.pendingProps, a2 = r2.revealOrder, o2 = r2.tail;
                    if (Ai(e3, t3, r2.children, n3), (2 & (r2 = Ao.current)) != 0)
                        r2 = 1 & r2 | 2, t3.flags |= 64;
                    else {
                        if (e3 !== null && (64 & e3.flags) != 0)
                            e:
                            for (e3 = t3.child; e3 !== null;) {
                                if (e3.tag === 13)
                                    e3.memoizedState !== null && Xi(e3, n3);
                                else if (e3.tag === 19)
                                    Xi(e3, n3);
                                else if (e3.child !== null) {
                                    e3.child.return = e3, e3 = e3.child;
                                    continue;
                                }
                                if (e3 === t3)
                                    break e;
                                for (; e3.sibling === null;) {
                                    if (e3.return === null || e3.return === t3)
                                        break e;
                                    e3 = e3.return;
                                }
                                e3.sibling.return = e3.return, e3 = e3.sibling;
                            }
                        r2 &= 1;
                    }
                    if (ua(Ao, r2), (2 & t3.mode) == 0)
                        t3.memoizedState = null;
                    else
                        switch (a2) {
                            case "forwards":
                                for (n3 = t3.child, a2 = null; n3 !== null;)
                                    (e3 = n3.alternate) !== null && Fo(e3) === null && (a2 = n3), n3 = n3.sibling;
                                (n3 = a2) === null ? (a2 = t3.child, t3.child = null) : (a2 = n3.sibling, n3.sibling = null), $i(t3, false, a2, n3, o2, t3.lastEffect);
                                break;
                            case "backwards":
                                for (n3 = null, a2 = t3.child, t3.child = null; a2 !== null;) {
                                    if ((e3 = a2.alternate) !== null && Fo(e3) === null) {
                                        t3.child = a2;
                                        break;
                                    }
                                    e3 = a2.sibling, a2.sibling = n3, n3 = a2, a2 = e3;
                                }
                                $i(t3, true, n3, null, o2, t3.lastEffect);
                                break;
                            case "together":
                                $i(t3, false, null, null, void 0, t3.lastEffect);
                                break;
                            default:
                                t3.memoizedState = null;
                        }
                    return t3.child;
                }
                function ts(e3, t3, n3) {
                    if (e3 !== null && (t3.dependencies = e3.dependencies), Fs |= t3.lanes, (n3 & t3.childLanes) != 0) {
                        if (e3 !== null && t3.child !== e3.child)
                            throw Error(i(153));
                        if (t3.child !== null) {
                            for (n3 = Bl(e3 = t3.child, e3.pendingProps), t3.child = n3, n3.return = t3; e3.sibling !== null;)
                                e3 = e3.sibling, (n3 = n3.sibling = Bl(e3, e3.pendingProps)).return = t3;
                            n3.sibling = null;
                        }
                        return t3.child;
                    }
                    return null;
                }
                function ns(e3, t3) {
                    if (!Uo)
                        switch (e3.tailMode) {
                            case "hidden":
                                t3 = e3.tail;
                                for (var n3 = null; t3 !== null;)
                                    t3.alternate !== null && (n3 = t3), t3 = t3.sibling;
                                n3 === null ? e3.tail = null : n3.sibling = null;
                                break;
                            case "collapsed":
                                n3 = e3.tail;
                                for (var r2 = null; n3 !== null;)
                                    n3.alternate !== null && (r2 = n3), n3 = n3.sibling;
                                r2 === null ? t3 || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r2.sibling = null;
                        }
                }
                function rs(e3, t3, n3) {
                    var r2 = t3.pendingProps;
                    switch (t3.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return ma(t3.type) && va(), null;
                        case 3:
                            return Mo(), la(fa), la(da), Ko(), (r2 = t3.stateNode).pendingContext && (r2.context = r2.pendingContext, r2.pendingContext = null), e3 !== null && e3.child !== null || (Go(t3) ? t3.flags |= 4 : r2.hydrate || (t3.flags |= 256)), null;
                        case 5:
                            Io(t3);
                            var o2 = To(Do.current);
                            if (n3 = t3.type, e3 !== null && t3.stateNode != null)
                                qi(e3, t3, n3, r2), e3.ref !== t3.ref && (t3.flags |= 128);
                            else {
                                if (!r2) {
                                    if (t3.stateNode === null)
                                        throw Error(i(166));
                                    return null;
                                }
                                if (e3 = To(xo.current), Go(t3)) {
                                    r2 = t3.stateNode, n3 = t3.type;
                                    var s2 = t3.memoizedProps;
                                    switch (r2[Yr] = t3, r2[Qr] = s2, n3) {
                                        case "dialog":
                                            xr("cancel", r2), xr("close", r2);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            xr("load", r2);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e3 = 0; e3 < Er.length; e3++)
                                                xr(Er[e3], r2);
                                            break;
                                        case "source":
                                            xr("error", r2);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            xr("error", r2), xr("load", r2);
                                            break;
                                        case "details":
                                            xr("toggle", r2);
                                            break;
                                        case "input":
                                            ee(r2, s2), xr("invalid", r2);
                                            break;
                                        case "select":
                                            r2._wrapperState = { wasMultiple: !!s2.multiple }, xr("invalid", r2);
                                            break;
                                        case "textarea":
                                            le(r2, s2), xr("invalid", r2);
                                    }
                                    for (var u2 in we(n3, s2), e3 = null, s2)
                                        s2.hasOwnProperty(u2) && (o2 = s2[u2], u2 === "children" ? typeof o2 == "string" ? r2.textContent !== o2 && (e3 = ["children", o2]) : typeof o2 == "number" && r2.textContent !== "" + o2 && (e3 = ["children", "" + o2]) : l.hasOwnProperty(u2) && o2 != null && u2 === "onScroll" && xr("scroll", r2));
                                    switch (n3) {
                                        case "input":
                                            Y(r2), re(r2, s2, true);
                                            break;
                                        case "textarea":
                                            Y(r2), ce(r2);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            typeof s2.onClick == "function" && (r2.onclick = zr);
                                    }
                                    r2 = e3, t3.updateQueue = r2, r2 !== null && (t3.flags |= 4);
                                } else {
                                    switch (u2 = o2.nodeType === 9 ? o2 : o2.ownerDocument, e3 === de && (e3 = fe(n3)), e3 === de ? n3 === "script" ? ((e3 = u2.createElement("div")).innerHTML = "<script></script>", e3 = e3.removeChild(e3.firstChild)) : typeof r2.is == "string" ? e3 = u2.createElement(n3, { is: r2.is }) : (e3 = u2.createElement(n3), n3 === "select" && (u2 = e3, r2.multiple ? u2.multiple = true : r2.size && (u2.size = r2.size))) : e3 = u2.createElementNS(e3, n3), e3[Yr] = t3, e3[Qr] = r2, Wi(e3, t3), t3.stateNode = e3, u2 = Ee(n3, r2), n3) {
                                        case "dialog":
                                            xr("cancel", e3), xr("close", e3), o2 = r2;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            xr("load", e3), o2 = r2;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (o2 = 0; o2 < Er.length; o2++)
                                                xr(Er[o2], e3);
                                            o2 = r2;
                                            break;
                                        case "source":
                                            xr("error", e3), o2 = r2;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            xr("error", e3), xr("load", e3), o2 = r2;
                                            break;
                                        case "details":
                                            xr("toggle", e3), o2 = r2;
                                            break;
                                        case "input":
                                            ee(e3, r2), o2 = $(e3, r2), xr("invalid", e3);
                                            break;
                                        case "option":
                                            o2 = oe(e3, r2);
                                            break;
                                        case "select":
                                            e3._wrapperState = { wasMultiple: !!r2.multiple }, o2 = a({}, r2, { value: void 0 }), xr("invalid", e3);
                                            break;
                                        case "textarea":
                                            le(e3, r2), o2 = se(e3, r2), xr("invalid", e3);
                                            break;
                                        default:
                                            o2 = r2;
                                    }
                                    we(n3, o2);
                                    var c2 = o2;
                                    for (s2 in c2)
                                        if (c2.hasOwnProperty(s2)) {
                                            var d2 = c2[s2];
                                            s2 === "style" ? Se(e3, d2) : s2 === "dangerouslySetInnerHTML" ? (d2 = d2 ? d2.__html : void 0) != null && ve(e3, d2) : s2 === "children" ? typeof d2 == "string" ? (n3 !== "textarea" || d2 !== "") && ge(e3, d2) : typeof d2 == "number" && ge(e3, "" + d2) : s2 !== "suppressContentEditableWarning" && s2 !== "suppressHydrationWarning" && s2 !== "autoFocus" && (l.hasOwnProperty(s2) ? d2 != null && s2 === "onScroll" && xr("scroll", e3) : d2 != null && C(e3, s2, d2, u2));
                                        }
                                    switch (n3) {
                                        case "input":
                                            Y(e3), re(e3, r2, false);
                                            break;
                                        case "textarea":
                                            Y(e3), ce(e3);
                                            break;
                                        case "option":
                                            r2.value != null && e3.setAttribute("value", "" + K(r2.value));
                                            break;
                                        case "select":
                                            e3.multiple = !!r2.multiple, (s2 = r2.value) != null ? ie(e3, !!r2.multiple, s2, false) : r2.defaultValue != null && ie(e3, !!r2.multiple, r2.defaultValue, true);
                                            break;
                                        default:
                                            typeof o2.onClick == "function" && (e3.onclick = zr);
                                    }
                                    Br(n3, r2) && (t3.flags |= 4);
                                }
                                t3.ref !== null && (t3.flags |= 128);
                            }
                            return null;
                        case 6:
                            if (e3 && t3.stateNode != null)
                                Ki(0, t3, e3.memoizedProps, r2);
                            else {
                                if (typeof r2 != "string" && t3.stateNode === null)
                                    throw Error(i(166));
                                n3 = To(Do.current), To(xo.current), Go(t3) ? (r2 = t3.stateNode, n3 = t3.memoizedProps, r2[Yr] = t3, r2.nodeValue !== n3 && (t3.flags |= 4)) : ((r2 = (n3.nodeType === 9 ? n3 : n3.ownerDocument).createTextNode(r2))[Yr] = t3, t3.stateNode = r2);
                            }
                            return null;
                        case 13:
                            return la(Ao), r2 = t3.memoizedState, (64 & t3.flags) != 0 ? (t3.lanes = n3, t3) : (r2 = r2 !== null, n3 = false, e3 === null ? t3.memoizedProps.fallback !== void 0 && Go(t3) : n3 = e3.memoizedState !== null, r2 && !n3 && (2 & t3.mode) != 0 && (e3 === null && t3.memoizedProps.unstable_avoidThisFallback !== true || (1 & Ao.current) != 0 ? Os === 0 && (Os = 3) : (Os !== 0 && Os !== 3 || (Os = 4), Ns === null || (134217727 & Fs) == 0 && (134217727 & zs) == 0 || hl(Ns, Ts))), (r2 || n3) && (t3.flags |= 4), null);
                        case 4:
                            return Mo(), e3 === null && Dr(t3.stateNode.containerInfo), null;
                        case 10:
                            return to(t3), null;
                        case 19:
                            if (la(Ao), (r2 = t3.memoizedState) === null)
                                return null;
                            if (s2 = (64 & t3.flags) != 0, (u2 = r2.rendering) === null)
                                if (s2)
                                    ns(r2, false);
                                else {
                                    if (Os !== 0 || e3 !== null && (64 & e3.flags) != 0)
                                        for (e3 = t3.child; e3 !== null;) {
                                            if ((u2 = Fo(e3)) !== null) {
                                                for (t3.flags |= 64, ns(r2, false), (s2 = u2.updateQueue) !== null && (t3.updateQueue = s2, t3.flags |= 4), r2.lastEffect === null && (t3.firstEffect = null), t3.lastEffect = r2.lastEffect, r2 = n3, n3 = t3.child; n3 !== null;)
                                                    e3 = r2, (s2 = n3).flags &= 2, s2.nextEffect = null, s2.firstEffect = null, s2.lastEffect = null, (u2 = s2.alternate) === null ? (s2.childLanes = 0, s2.lanes = e3, s2.child = null, s2.memoizedProps = null, s2.memoizedState = null, s2.updateQueue = null, s2.dependencies = null, s2.stateNode = null) : (s2.childLanes = u2.childLanes, s2.lanes = u2.lanes, s2.child = u2.child, s2.memoizedProps = u2.memoizedProps, s2.memoizedState = u2.memoizedState, s2.updateQueue = u2.updateQueue, s2.type = u2.type, e3 = u2.dependencies, s2.dependencies = e3 === null ? null : { lanes: e3.lanes, firstContext: e3.firstContext }), n3 = n3.sibling;
                                                return ua(Ao, 1 & Ao.current | 2), t3.child;
                                            }
                                            e3 = e3.sibling;
                                        }
                                    r2.tail !== null && Ba() > Vs && (t3.flags |= 64, s2 = true, ns(r2, false), t3.lanes = 33554432);
                                }
                            else {
                                if (!s2)
                                    if ((e3 = Fo(u2)) !== null) {
                                        if (t3.flags |= 64, s2 = true, (n3 = e3.updateQueue) !== null && (t3.updateQueue = n3, t3.flags |= 4), ns(r2, true), r2.tail === null && r2.tailMode === "hidden" && !u2.alternate && !Uo)
                                            return (t3 = t3.lastEffect = r2.lastEffect) !== null && (t3.nextEffect = null), null;
                                    } else
                                        2 * Ba() - r2.renderingStartTime > Vs && n3 !== 1073741824 && (t3.flags |= 64, s2 = true, ns(r2, false), t3.lanes = 33554432);
                                r2.isBackwards ? (u2.sibling = t3.child, t3.child = u2) : ((n3 = r2.last) !== null ? n3.sibling = u2 : t3.child = u2, r2.last = u2);
                            }
                            return r2.tail !== null ? (n3 = r2.tail, r2.rendering = n3, r2.tail = n3.sibling, r2.lastEffect = t3.lastEffect, r2.renderingStartTime = Ba(), n3.sibling = null, t3 = Ao.current, ua(Ao, s2 ? 1 & t3 | 2 : 1 & t3), n3) : null;
                        case 23:
                        case 24:
                            return yl(), e3 !== null && e3.memoizedState !== null != (t3.memoizedState !== null) && r2.mode !== "unstable-defer-without-hiding" && (t3.flags |= 4), null;
                    }
                    throw Error(i(156, t3.tag));
                }
                function as(e3) {
                    switch (e3.tag) {
                        case 1:
                            ma(e3.type) && va();
                            var t3 = e3.flags;
                            return 4096 & t3 ? (e3.flags = -4097 & t3 | 64, e3) : null;
                        case 3:
                            if (Mo(), la(fa), la(da), Ko(), (64 & (t3 = e3.flags)) != 0)
                                throw Error(i(285));
                            return e3.flags = -4097 & t3 | 64, e3;
                        case 5:
                            return Io(e3), null;
                        case 13:
                            return la(Ao), 4096 & (t3 = e3.flags) ? (e3.flags = -4097 & t3 | 64, e3) : null;
                        case 19:
                            return la(Ao), null;
                        case 4:
                            return Mo(), null;
                        case 10:
                            return to(e3), null;
                        case 23:
                        case 24:
                            return yl(), null;
                        default:
                            return null;
                    }
                }
                function os(e3, t3) {
                    try {
                        var n3 = "", r2 = t3;
                        do {
                            n3 += W(r2), r2 = r2.return;
                        } while (r2);
                        var a2 = n3;
                    } catch (e4) {
                        a2 = "\nError generating stack: " + e4.message + "\n" + e4.stack;
                    }
                    return { value: e3, source: t3, stack: a2 };
                }
                function is(e3, t3) {
                    try {
                        console.error(t3.value);
                    } catch (e4) {
                        setTimeout(function () {
                            throw e4;
                        });
                    }
                }
                Wi = function (e3, t3) {
                    for (var n3 = t3.child; n3 !== null;) {
                        if (n3.tag === 5 || n3.tag === 6)
                            e3.appendChild(n3.stateNode);
                        else if (n3.tag !== 4 && n3.child !== null) {
                            n3.child.return = n3, n3 = n3.child;
                            continue;
                        }
                        if (n3 === t3)
                            break;
                        for (; n3.sibling === null;) {
                            if (n3.return === null || n3.return === t3)
                                return;
                            n3 = n3.return;
                        }
                        n3.sibling.return = n3.return, n3 = n3.sibling;
                    }
                }, qi = function (e3, t3, n3, r2) {
                    var o2 = e3.memoizedProps;
                    if (o2 !== r2) {
                        e3 = t3.stateNode, To(xo.current);
                        var i2, s2 = null;
                        switch (n3) {
                            case "input":
                                o2 = $(e3, o2), r2 = $(e3, r2), s2 = [];
                                break;
                            case "option":
                                o2 = oe(e3, o2), r2 = oe(e3, r2), s2 = [];
                                break;
                            case "select":
                                o2 = a({}, o2, { value: void 0 }), r2 = a({}, r2, { value: void 0 }), s2 = [];
                                break;
                            case "textarea":
                                o2 = se(e3, o2), r2 = se(e3, r2), s2 = [];
                                break;
                            default:
                                typeof o2.onClick != "function" && typeof r2.onClick == "function" && (e3.onclick = zr);
                        }
                        for (d2 in we(n3, r2), n3 = null, o2)
                            if (!r2.hasOwnProperty(d2) && o2.hasOwnProperty(d2) && o2[d2] != null)
                                if (d2 === "style") {
                                    var u2 = o2[d2];
                                    for (i2 in u2)
                                        u2.hasOwnProperty(i2) && (n3 || (n3 = {}), n3[i2] = "");
                                } else
                                    d2 !== "dangerouslySetInnerHTML" && d2 !== "children" && d2 !== "suppressContentEditableWarning" && d2 !== "suppressHydrationWarning" && d2 !== "autoFocus" && (l.hasOwnProperty(d2) ? s2 || (s2 = []) : (s2 = s2 || []).push(d2, null));
                        for (d2 in r2) {
                            var c2 = r2[d2];
                            if (u2 = o2 != null ? o2[d2] : void 0, r2.hasOwnProperty(d2) && c2 !== u2 && (c2 != null || u2 != null))
                                if (d2 === "style")
                                    if (u2) {
                                        for (i2 in u2)
                                            !u2.hasOwnProperty(i2) || c2 && c2.hasOwnProperty(i2) || (n3 || (n3 = {}), n3[i2] = "");
                                        for (i2 in c2)
                                            c2.hasOwnProperty(i2) && u2[i2] !== c2[i2] && (n3 || (n3 = {}), n3[i2] = c2[i2]);
                                    } else
                                        n3 || (s2 || (s2 = []), s2.push(d2, n3)), n3 = c2;
                                else
                                    d2 === "dangerouslySetInnerHTML" ? (c2 = c2 ? c2.__html : void 0, u2 = u2 ? u2.__html : void 0, c2 != null && u2 !== c2 && (s2 = s2 || []).push(d2, c2)) : d2 === "children" ? typeof c2 != "string" && typeof c2 != "number" || (s2 = s2 || []).push(d2, "" + c2) : d2 !== "suppressContentEditableWarning" && d2 !== "suppressHydrationWarning" && (l.hasOwnProperty(d2) ? (c2 != null && d2 === "onScroll" && xr("scroll", e3), s2 || u2 === c2 || (s2 = [])) : typeof c2 == "object" && c2 !== null && c2.$$typeof === I ? c2.toString() : (s2 = s2 || []).push(d2, c2));
                        }
                        n3 && (s2 = s2 || []).push("style", n3);
                        var d2 = s2;
                        (t3.updateQueue = d2) && (t3.flags |= 4);
                    }
                }, Ki = function (e3, t3, n3, r2) {
                    n3 !== r2 && (t3.flags |= 4);
                };
                var ss = typeof WeakMap == "function" ? WeakMap : Map;
                function ls(e3, t3, n3) {
                    (n3 = lo(-1, n3)).tag = 3, n3.payload = { element: null };
                    var r2 = t3.value;
                    return n3.callback = function () {
                        Ws || (Ws = true, qs = r2), is(0, t3);
                    }, n3;
                }
                function us(e3, t3, n3) {
                    (n3 = lo(-1, n3)).tag = 3;
                    var r2 = e3.type.getDerivedStateFromError;
                    if (typeof r2 == "function") {
                        var a2 = t3.value;
                        n3.payload = function () {
                            return is(0, t3), r2(a2);
                        };
                    }
                    var o2 = e3.stateNode;
                    return o2 !== null && typeof o2.componentDidCatch == "function" && (n3.callback = function () {
                        typeof r2 != "function" && (Ks === null ? Ks = new Set([this]) : Ks.add(this), is(0, t3));
                        var e4 = t3.stack;
                        this.componentDidCatch(t3.value, { componentStack: e4 !== null ? e4 : "" });
                    }), n3;
                }
                var cs = typeof WeakSet == "function" ? WeakSet : Set;
                function ds(e3) {
                    var t3 = e3.ref;
                    if (t3 !== null)
                        if (typeof t3 == "function")
                            try {
                                t3(null);
                            } catch (t4) {
                                Il(e3, t4);
                            }
                        else
                            t3.current = null;
                }
                function fs(e3, t3) {
                    switch (t3.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & t3.flags && e3 !== null) {
                                var n3 = e3.memoizedProps, r2 = e3.memoizedState;
                                t3 = (e3 = t3.stateNode).getSnapshotBeforeUpdate(t3.elementType === t3.type ? n3 : Ja(t3.type, n3), r2), e3.__reactInternalSnapshotBeforeUpdate = t3;
                            }
                            return;
                        case 3:
                            return void (256 & t3.flags && Gr(t3.stateNode.containerInfo));
                    }
                    throw Error(i(163));
                }
                function ps(e3, t3, n3) {
                    switch (n3.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if ((t3 = (t3 = n3.updateQueue) !== null ? t3.lastEffect : null) !== null) {
                                e3 = t3 = t3.next;
                                do {
                                    if ((3 & e3.tag) == 3) {
                                        var r2 = e3.create;
                                        e3.destroy = r2();
                                    }
                                    e3 = e3.next;
                                } while (e3 !== t3);
                            }
                            if ((t3 = (t3 = n3.updateQueue) !== null ? t3.lastEffect : null) !== null) {
                                e3 = t3 = t3.next;
                                do {
                                    var a2 = e3;
                                    r2 = a2.next, (4 & (a2 = a2.tag)) != 0 && (1 & a2) != 0 && (Pl(n3, e3), Tl(n3, e3)), e3 = r2;
                                } while (e3 !== t3);
                            }
                            return;
                        case 1:
                            return e3 = n3.stateNode, 4 & n3.flags && (t3 === null ? e3.componentDidMount() : (r2 = n3.elementType === n3.type ? t3.memoizedProps : Ja(n3.type, t3.memoizedProps), e3.componentDidUpdate(r2, t3.memoizedState, e3.__reactInternalSnapshotBeforeUpdate))), void ((t3 = n3.updateQueue) !== null && po(n3, t3, e3));
                        case 3:
                            if ((t3 = n3.updateQueue) !== null) {
                                if (e3 = null, n3.child !== null)
                                    switch (n3.child.tag) {
                                        case 5:
                                        case 1:
                                            e3 = n3.child.stateNode;
                                    }
                                po(n3, t3, e3);
                            }
                            return;
                        case 5:
                            return e3 = n3.stateNode, void (t3 === null && 4 & n3.flags && Br(n3.type, n3.memoizedProps) && e3.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return void (n3.memoizedState === null && (n3 = n3.alternate, n3 !== null && (n3 = n3.memoizedState, n3 !== null && (n3 = n3.dehydrated, n3 !== null && Ct(n3)))));
                    }
                    throw Error(i(163));
                }
                function hs(e3, t3) {
                    for (var n3 = e3; ;) {
                        if (n3.tag === 5) {
                            var r2 = n3.stateNode;
                            if (t3)
                                typeof (r2 = r2.style).setProperty == "function" ? r2.setProperty("display", "none", "important") : r2.display = "none";
                            else {
                                r2 = n3.stateNode;
                                var a2 = n3.memoizedProps.style;
                                a2 = a2 != null && a2.hasOwnProperty("display") ? a2.display : null, r2.style.display = Ce("display", a2);
                            }
                        } else if (n3.tag === 6)
                            n3.stateNode.nodeValue = t3 ? "" : n3.memoizedProps;
                        else if ((n3.tag !== 23 && n3.tag !== 24 || n3.memoizedState === null || n3 === e3) && n3.child !== null) {
                            n3.child.return = n3, n3 = n3.child;
                            continue;
                        }
                        if (n3 === e3)
                            break;
                        for (; n3.sibling === null;) {
                            if (n3.return === null || n3.return === e3)
                                return;
                            n3 = n3.return;
                        }
                        n3.sibling.return = n3.return, n3 = n3.sibling;
                    }
                }
                function ms(e3, t3) {
                    if (_a && typeof _a.onCommitFiberUnmount == "function")
                        try {
                            _a.onCommitFiberUnmount(Sa, t3);
                        } catch (e4) {
                        }
                    switch (t3.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if ((e3 = t3.updateQueue) !== null && (e3 = e3.lastEffect) !== null) {
                                var n3 = e3 = e3.next;
                                do {
                                    var r2 = n3, a2 = r2.destroy;
                                    if (r2 = r2.tag, a2 !== void 0)
                                        if ((4 & r2) != 0)
                                            Pl(t3, n3);
                                        else {
                                            r2 = t3;
                                            try {
                                                a2();
                                            } catch (e4) {
                                                Il(r2, e4);
                                            }
                                        }
                                    n3 = n3.next;
                                } while (n3 !== e3);
                            }
                            break;
                        case 1:
                            if (ds(t3), typeof (e3 = t3.stateNode).componentWillUnmount == "function")
                                try {
                                    e3.props = t3.memoizedProps, e3.state = t3.memoizedState, e3.componentWillUnmount();
                                } catch (e4) {
                                    Il(t3, e4);
                                }
                            break;
                        case 5:
                            ds(t3);
                            break;
                        case 4:
                            Ss(e3, t3);
                    }
                }
                function vs(e3) {
                    e3.alternate = null, e3.child = null, e3.dependencies = null, e3.firstEffect = null, e3.lastEffect = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.return = null, e3.updateQueue = null;
                }
                function gs(e3) {
                    return e3.tag === 5 || e3.tag === 3 || e3.tag === 4;
                }
                function ys(e3) {
                    e: {
                        for (var t3 = e3.return; t3 !== null;) {
                            if (gs(t3))
                                break e;
                            t3 = t3.return;
                        }
                        throw Error(i(160));
                    }
                    var n3 = t3;
                    switch (t3 = n3.stateNode, n3.tag) {
                        case 5:
                            var r2 = false;
                            break;
                        case 3:
                        case 4:
                            t3 = t3.containerInfo, r2 = true;
                            break;
                        default:
                            throw Error(i(161));
                    }
                    16 & n3.flags && (ge(t3, ""), n3.flags &= -17);
                    e:
                    t:
                    for (n3 = e3; ;) {
                        for (; n3.sibling === null;) {
                            if (n3.return === null || gs(n3.return)) {
                                n3 = null;
                                break e;
                            }
                            n3 = n3.return;
                        }
                        for (n3.sibling.return = n3.return, n3 = n3.sibling; n3.tag !== 5 && n3.tag !== 6 && n3.tag !== 18;) {
                            if (2 & n3.flags)
                                continue t;
                            if (n3.child === null || n3.tag === 4)
                                continue t;
                            n3.child.return = n3, n3 = n3.child;
                        }
                        if (!(2 & n3.flags)) {
                            n3 = n3.stateNode;
                            break e;
                        }
                    }
                    r2 ? bs(e3, n3, t3) : Cs(e3, n3, t3);
                }
                function bs(e3, t3, n3) {
                    var r2 = e3.tag, a2 = r2 === 5 || r2 === 6;
                    if (a2)
                        e3 = a2 ? e3.stateNode : e3.stateNode.instance, t3 ? n3.nodeType === 8 ? n3.parentNode.insertBefore(e3, t3) : n3.insertBefore(e3, t3) : (n3.nodeType === 8 ? (t3 = n3.parentNode).insertBefore(e3, n3) : (t3 = n3).appendChild(e3), (n3 = n3._reactRootContainer) != null || t3.onclick !== null || (t3.onclick = zr));
                    else if (r2 !== 4 && (e3 = e3.child) !== null)
                        for (bs(e3, t3, n3), e3 = e3.sibling; e3 !== null;)
                            bs(e3, t3, n3), e3 = e3.sibling;
                }
                function Cs(e3, t3, n3) {
                    var r2 = e3.tag, a2 = r2 === 5 || r2 === 6;
                    if (a2)
                        e3 = a2 ? e3.stateNode : e3.stateNode.instance, t3 ? n3.insertBefore(e3, t3) : n3.appendChild(e3);
                    else if (r2 !== 4 && (e3 = e3.child) !== null)
                        for (Cs(e3, t3, n3), e3 = e3.sibling; e3 !== null;)
                            Cs(e3, t3, n3), e3 = e3.sibling;
                }
                function Ss(e3, t3) {
                    for (var n3, r2, a2 = t3, o2 = false; ;) {
                        if (!o2) {
                            o2 = a2.return;
                            e:
                            for (; ;) {
                                if (o2 === null)
                                    throw Error(i(160));
                                switch (n3 = o2.stateNode, o2.tag) {
                                    case 5:
                                        r2 = false;
                                        break e;
                                    case 3:
                                    case 4:
                                        n3 = n3.containerInfo, r2 = true;
                                        break e;
                                }
                                o2 = o2.return;
                            }
                            o2 = true;
                        }
                        if (a2.tag === 5 || a2.tag === 6) {
                            e:
                            for (var s2 = e3, l2 = a2, u2 = l2; ;)
                                if (ms(s2, u2), u2.child !== null && u2.tag !== 4)
                                    u2.child.return = u2, u2 = u2.child;
                                else {
                                    if (u2 === l2)
                                        break e;
                                    for (; u2.sibling === null;) {
                                        if (u2.return === null || u2.return === l2)
                                            break e;
                                        u2 = u2.return;
                                    }
                                    u2.sibling.return = u2.return, u2 = u2.sibling;
                                }
                            r2 ? (s2 = n3, l2 = a2.stateNode, s2.nodeType === 8 ? s2.parentNode.removeChild(l2) : s2.removeChild(l2)) : n3.removeChild(a2.stateNode);
                        } else if (a2.tag === 4) {
                            if (a2.child !== null) {
                                n3 = a2.stateNode.containerInfo, r2 = true, a2.child.return = a2, a2 = a2.child;
                                continue;
                            }
                        } else if (ms(e3, a2), a2.child !== null) {
                            a2.child.return = a2, a2 = a2.child;
                            continue;
                        }
                        if (a2 === t3)
                            break;
                        for (; a2.sibling === null;) {
                            if (a2.return === null || a2.return === t3)
                                return;
                            (a2 = a2.return).tag === 4 && (o2 = false);
                        }
                        a2.sibling.return = a2.return, a2 = a2.sibling;
                    }
                }
                function _s(e3, t3) {
                    switch (t3.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            var n3 = t3.updateQueue;
                            if ((n3 = n3 !== null ? n3.lastEffect : null) !== null) {
                                var r2 = n3 = n3.next;
                                do {
                                    (3 & r2.tag) == 3 && (e3 = r2.destroy, r2.destroy = void 0, e3 !== void 0 && e3()), r2 = r2.next;
                                } while (r2 !== n3);
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if ((n3 = t3.stateNode) != null) {
                                r2 = t3.memoizedProps;
                                var a2 = e3 !== null ? e3.memoizedProps : r2;
                                e3 = t3.type;
                                var o2 = t3.updateQueue;
                                if (t3.updateQueue = null, o2 !== null) {
                                    for (n3[Qr] = r2, e3 === "input" && r2.type === "radio" && r2.name != null && te(n3, r2), Ee(e3, a2), t3 = Ee(e3, r2), a2 = 0; a2 < o2.length; a2 += 2) {
                                        var s2 = o2[a2], l2 = o2[a2 + 1];
                                        s2 === "style" ? Se(n3, l2) : s2 === "dangerouslySetInnerHTML" ? ve(n3, l2) : s2 === "children" ? ge(n3, l2) : C(n3, s2, l2, t3);
                                    }
                                    switch (e3) {
                                        case "input":
                                            ne(n3, r2);
                                            break;
                                        case "textarea":
                                            ue(n3, r2);
                                            break;
                                        case "select":
                                            e3 = n3._wrapperState.wasMultiple, n3._wrapperState.wasMultiple = !!r2.multiple, (o2 = r2.value) != null ? ie(n3, !!r2.multiple, o2, false) : e3 !== !!r2.multiple && (r2.defaultValue != null ? ie(n3, !!r2.multiple, r2.defaultValue, true) : ie(n3, !!r2.multiple, r2.multiple ? [] : "", false));
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (t3.stateNode === null)
                                throw Error(i(162));
                            return void (t3.stateNode.nodeValue = t3.memoizedProps);
                        case 3:
                            return void ((n3 = t3.stateNode).hydrate && (n3.hydrate = false, Ct(n3.containerInfo)));
                        case 13:
                            return t3.memoizedState !== null && (Bs = Ba(), hs(t3.child, true)), void ws(t3);
                        case 19:
                            return void ws(t3);
                        case 23:
                        case 24:
                            return void hs(t3, t3.memoizedState !== null);
                    }
                    throw Error(i(163));
                }
                function ws(e3) {
                    var t3 = e3.updateQueue;
                    if (t3 !== null) {
                        e3.updateQueue = null;
                        var n3 = e3.stateNode;
                        n3 === null && (n3 = e3.stateNode = new cs()), t3.forEach(function (t4) {
                            var r2 = Fl.bind(null, e3, t4);
                            n3.has(t4) || (n3.add(t4), t4.then(r2, r2));
                        });
                    }
                }
                function Es(e3, t3) {
                    return e3 !== null && ((e3 = e3.memoizedState) === null || e3.dehydrated !== null) && (t3 = t3.memoizedState) !== null && t3.dehydrated === null;
                }
                var Ls = Math.ceil, ks = S.ReactCurrentDispatcher, Rs = S.ReactCurrentOwner, xs = 0, Ns = null, Ds = null, Ts = 0, Ps = 0, Ms = sa(0), Os = 0, Is = null, As = 0, Fs = 0, zs = 0, js = 0, Us = null, Bs = 0, Vs = 1 / 0;
                function Zs() {
                    Vs = Ba() + 500;
                }
                var Hs, Gs = null, Ws = false, qs = null, Ks = null, Js = false, Ys = null, Qs = 90, Xs = [], $s = [], el = null, tl = 0, nl = null, rl = -1, al = 0, ol = 0, il = null, sl = false;
                function ll() {
                    return (48 & xs) != 0 ? Ba() : rl !== -1 ? rl : rl = Ba();
                }
                function ul(e3) {
                    if ((2 & (e3 = e3.mode)) == 0)
                        return 1;
                    if ((4 & e3) == 0)
                        return Va() === 99 ? 1 : 2;
                    if (al === 0 && (al = As), Ka.transition !== 0) {
                        ol !== 0 && (ol = Us !== null ? Us.pendingLanes : 0), e3 = al;
                        var t3 = 4186112 & ~ol;
                        return (t3 &= -t3) == 0 && (t3 = (e3 = 4186112 & ~e3) & -e3) == 0 && (t3 = 8192), t3;
                    }
                    return e3 = Va(), e3 = zt((4 & xs) != 0 && e3 === 98 ? 12 : e3 = function (e4) {
                        switch (e4) {
                            case 99:
                                return 15;
                            case 98:
                                return 10;
                            case 97:
                            case 96:
                                return 8;
                            case 95:
                                return 2;
                            default:
                                return 0;
                        }
                    }(e3), al);
                }
                function cl(e3, t3, n3) {
                    if (50 < tl)
                        throw tl = 0, nl = null, Error(i(185));
                    if ((e3 = dl(e3, t3)) === null)
                        return null;
                    Bt(e3, t3, n3), e3 === Ns && (zs |= t3, Os === 4 && hl(e3, Ts));
                    var r2 = Va();
                    t3 === 1 ? (8 & xs) != 0 && (48 & xs) == 0 ? ml(e3) : (fl(e3, n3), xs === 0 && (Zs(), Wa())) : ((4 & xs) == 0 || r2 !== 98 && r2 !== 99 || (el === null ? el = new Set([e3]) : el.add(e3)), fl(e3, n3)), Us = e3;
                }
                function dl(e3, t3) {
                    e3.lanes |= t3;
                    var n3 = e3.alternate;
                    for (n3 !== null && (n3.lanes |= t3), n3 = e3, e3 = e3.return; e3 !== null;)
                        e3.childLanes |= t3, (n3 = e3.alternate) !== null && (n3.childLanes |= t3), n3 = e3, e3 = e3.return;
                    return n3.tag === 3 ? n3.stateNode : null;
                }
                function fl(e3, t3) {
                    for (var n3 = e3.callbackNode, r2 = e3.suspendedLanes, a2 = e3.pingedLanes, o2 = e3.expirationTimes, s2 = e3.pendingLanes; 0 < s2;) {
                        var l2 = 31 - Vt(s2), u2 = 1 << l2, c2 = o2[l2];
                        if (c2 === -1) {
                            if ((u2 & r2) == 0 || (u2 & a2) != 0) {
                                c2 = t3, It(u2);
                                var d2 = Ot;
                                o2[l2] = 10 <= d2 ? c2 + 250 : 6 <= d2 ? c2 + 5e3 : -1;
                            }
                        } else
                            c2 <= t3 && (e3.expiredLanes |= u2);
                        s2 &= ~u2;
                    }
                    if (r2 = At(e3, e3 === Ns ? Ts : 0), t3 = Ot, r2 === 0)
                        n3 !== null && (n3 !== Ia && La(n3), e3.callbackNode = null, e3.callbackPriority = 0);
                    else {
                        if (n3 !== null) {
                            if (e3.callbackPriority === t3)
                                return;
                            n3 !== Ia && La(n3);
                        }
                        t3 === 15 ? (n3 = ml.bind(null, e3), Fa === null ? (Fa = [n3], za = Ea(Da, qa)) : Fa.push(n3), n3 = Ia) : t3 === 14 ? n3 = Ga(99, ml.bind(null, e3)) : (n3 = function (e4) {
                            switch (e4) {
                                case 15:
                                case 14:
                                    return 99;
                                case 13:
                                case 12:
                                case 11:
                                case 10:
                                    return 98;
                                case 9:
                                case 8:
                                case 7:
                                case 6:
                                case 4:
                                case 5:
                                    return 97;
                                case 3:
                                case 2:
                                case 1:
                                    return 95;
                                case 0:
                                    return 90;
                                default:
                                    throw Error(i(358, e4));
                            }
                        }(t3), n3 = Ga(n3, pl.bind(null, e3))), e3.callbackPriority = t3, e3.callbackNode = n3;
                    }
                }
                function pl(e3) {
                    if (rl = -1, ol = al = 0, (48 & xs) != 0)
                        throw Error(i(327));
                    var t3 = e3.callbackNode;
                    if (Dl() && e3.callbackNode !== t3)
                        return null;
                    var n3 = At(e3, e3 === Ns ? Ts : 0);
                    if (n3 === 0)
                        return null;
                    var r2 = n3, a2 = xs;
                    xs |= 16;
                    var o2 = Sl();
                    for (Ns === e3 && Ts === r2 || (Zs(), bl(e3, r2)); ;)
                        try {
                            El();
                            break;
                        } catch (t4) {
                            Cl(e3, t4);
                        }
                    if (eo(), ks.current = o2, xs = a2, Ds !== null ? r2 = 0 : (Ns = null, Ts = 0, r2 = Os), (As & zs) != 0)
                        bl(e3, 0);
                    else if (r2 !== 0) {
                        if (r2 === 2 && (xs |= 64, e3.hydrate && (e3.hydrate = false, Gr(e3.containerInfo)), (n3 = Ft(e3)) !== 0 && (r2 = _l(e3, n3))), r2 === 1)
                            throw t3 = Is, bl(e3, 0), hl(e3, n3), fl(e3, Ba()), t3;
                        switch (e3.finishedWork = e3.current.alternate, e3.finishedLanes = n3, r2) {
                            case 0:
                            case 1:
                                throw Error(i(345));
                            case 2:
                            case 5:
                                Rl(e3);
                                break;
                            case 3:
                                if (hl(e3, n3), (62914560 & n3) === n3 && 10 < (r2 = Bs + 500 - Ba())) {
                                    if (At(e3, 0) !== 0)
                                        break;
                                    if (((a2 = e3.suspendedLanes) & n3) !== n3) {
                                        ll(), e3.pingedLanes |= e3.suspendedLanes & a2;
                                        break;
                                    }
                                    e3.timeoutHandle = Zr(Rl.bind(null, e3), r2);
                                    break;
                                }
                                Rl(e3);
                                break;
                            case 4:
                                if (hl(e3, n3), (4186112 & n3) === n3)
                                    break;
                                for (r2 = e3.eventTimes, a2 = -1; 0 < n3;) {
                                    var s2 = 31 - Vt(n3);
                                    o2 = 1 << s2, (s2 = r2[s2]) > a2 && (a2 = s2), n3 &= ~o2;
                                }
                                if (n3 = a2, 10 < (n3 = (120 > (n3 = Ba() - n3) ? 120 : 480 > n3 ? 480 : 1080 > n3 ? 1080 : 1920 > n3 ? 1920 : 3e3 > n3 ? 3e3 : 4320 > n3 ? 4320 : 1960 * Ls(n3 / 1960)) - n3)) {
                                    e3.timeoutHandle = Zr(Rl.bind(null, e3), n3);
                                    break;
                                }
                                Rl(e3);
                                break;
                            default:
                                throw Error(i(329));
                        }
                    }
                    return fl(e3, Ba()), e3.callbackNode === t3 ? pl.bind(null, e3) : null;
                }
                function hl(e3, t3) {
                    for (t3 &= ~js, t3 &= ~zs, e3.suspendedLanes |= t3, e3.pingedLanes &= ~t3, e3 = e3.expirationTimes; 0 < t3;) {
                        var n3 = 31 - Vt(t3), r2 = 1 << n3;
                        e3[n3] = -1, t3 &= ~r2;
                    }
                }
                function ml(e3) {
                    if ((48 & xs) != 0)
                        throw Error(i(327));
                    if (Dl(), e3 === Ns && (e3.expiredLanes & Ts) != 0) {
                        var t3 = Ts, n3 = _l(e3, t3);
                        (As & zs) != 0 && (n3 = _l(e3, t3 = At(e3, t3)));
                    } else
                        n3 = _l(e3, t3 = At(e3, 0));
                    if (e3.tag !== 0 && n3 === 2 && (xs |= 64, e3.hydrate && (e3.hydrate = false, Gr(e3.containerInfo)), (t3 = Ft(e3)) !== 0 && (n3 = _l(e3, t3))), n3 === 1)
                        throw n3 = Is, bl(e3, 0), hl(e3, t3), fl(e3, Ba()), n3;
                    return e3.finishedWork = e3.current.alternate, e3.finishedLanes = t3, Rl(e3), fl(e3, Ba()), null;
                }
                function vl(e3, t3) {
                    var n3 = xs;
                    xs &= -2, xs |= 8;
                    try {
                        return e3(t3);
                    } finally {
                        (xs = n3) === 0 && (Zs(), Wa());
                    }
                }
                function gl(e3, t3) {
                    ua(Ms, Ps), Ps |= t3, As |= t3;
                }
                function yl() {
                    Ps = Ms.current, la(Ms);
                }
                function bl(e3, t3) {
                    e3.finishedWork = null, e3.finishedLanes = 0;
                    var n3 = e3.timeoutHandle;
                    if (n3 !== -1 && (e3.timeoutHandle = -1, Hr(n3)), Ds !== null)
                        for (n3 = Ds.return; n3 !== null;) {
                            var r2 = n3;
                            switch (r2.tag) {
                                case 1:
                                    (r2 = r2.type.childContextTypes) != null && va();
                                    break;
                                case 3:
                                    Mo(), la(fa), la(da), Ko();
                                    break;
                                case 5:
                                    Io(r2);
                                    break;
                                case 4:
                                    Mo();
                                    break;
                                case 13:
                                case 19:
                                    la(Ao);
                                    break;
                                case 10:
                                    to(r2);
                                    break;
                                case 23:
                                case 24:
                                    yl();
                            }
                            n3 = n3.return;
                        }
                    Ns = e3, Ds = Bl(e3.current, null), Ts = Ps = As = t3, Os = 0, Is = null, js = zs = Fs = 0;
                }
                function Cl(e3, t3) {
                    for (; ;) {
                        var n3 = Ds;
                        try {
                            if (eo(), Jo.current = Di, ti) {
                                for (var r2 = Xo.memoizedState; r2 !== null;) {
                                    var a2 = r2.queue;
                                    a2 !== null && (a2.pending = null), r2 = r2.next;
                                }
                                ti = false;
                            }
                            if (Qo = 0, ei = $o = Xo = null, ni = false, Rs.current = null, n3 === null || n3.return === null) {
                                Os = 1, Is = t3, Ds = null;
                                break;
                            }
                            e: {
                                var o2 = e3, i2 = n3.return, s2 = n3, l2 = t3;
                                if (t3 = Ts, s2.flags |= 2048, s2.firstEffect = s2.lastEffect = null, l2 !== null && typeof l2 == "object" && typeof l2.then == "function") {
                                    var u2 = l2;
                                    if ((2 & s2.mode) == 0) {
                                        var c2 = s2.alternate;
                                        c2 ? (s2.updateQueue = c2.updateQueue, s2.memoizedState = c2.memoizedState, s2.lanes = c2.lanes) : (s2.updateQueue = null, s2.memoizedState = null);
                                    }
                                    var d2 = (1 & Ao.current) != 0, f2 = i2;
                                    do {
                                        var p2;
                                        if (p2 = f2.tag === 13) {
                                            var h2 = f2.memoizedState;
                                            if (h2 !== null)
                                                p2 = h2.dehydrated !== null;
                                            else {
                                                var m2 = f2.memoizedProps;
                                                p2 = m2.fallback !== void 0 && (m2.unstable_avoidThisFallback !== true || !d2);
                                            }
                                        }
                                        if (p2) {
                                            var v2 = f2.updateQueue;
                                            if (v2 === null) {
                                                var g2 = new Set();
                                                g2.add(u2), f2.updateQueue = g2;
                                            } else
                                                v2.add(u2);
                                            if ((2 & f2.mode) == 0) {
                                                if (f2.flags |= 64, s2.flags |= 16384, s2.flags &= -2981, s2.tag === 1)
                                                    if (s2.alternate === null)
                                                        s2.tag = 17;
                                                    else {
                                                        var y2 = lo(-1, 1);
                                                        y2.tag = 2, uo(s2, y2);
                                                    }
                                                s2.lanes |= 1;
                                                break e;
                                            }
                                            l2 = void 0, s2 = t3;
                                            var b2 = o2.pingCache;
                                            if (b2 === null ? (b2 = o2.pingCache = new ss(), l2 = new Set(), b2.set(u2, l2)) : (l2 = b2.get(u2)) === void 0 && (l2 = new Set(), b2.set(u2, l2)), !l2.has(s2)) {
                                                l2.add(s2);
                                                var C2 = Al.bind(null, o2, u2, s2);
                                                u2.then(C2, C2);
                                            }
                                            f2.flags |= 4096, f2.lanes = t3;
                                            break e;
                                        }
                                        f2 = f2.return;
                                    } while (f2 !== null);
                                    l2 = Error((q(s2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
                                }
                                Os !== 5 && (Os = 2), l2 = os(l2, s2), f2 = i2;
                                do {
                                    switch (f2.tag) {
                                        case 3:
                                            o2 = l2, f2.flags |= 4096, t3 &= -t3, f2.lanes |= t3, co(f2, ls(0, o2, t3));
                                            break e;
                                        case 1:
                                            o2 = l2;
                                            var S2 = f2.type, _2 = f2.stateNode;
                                            if ((64 & f2.flags) == 0 && (typeof S2.getDerivedStateFromError == "function" || _2 !== null && typeof _2.componentDidCatch == "function" && (Ks === null || !Ks.has(_2)))) {
                                                f2.flags |= 4096, t3 &= -t3, f2.lanes |= t3, co(f2, us(f2, o2, t3));
                                                break e;
                                            }
                                    }
                                    f2 = f2.return;
                                } while (f2 !== null);
                            }
                            kl(n3);
                        } catch (e4) {
                            t3 = e4, Ds === n3 && n3 !== null && (Ds = n3 = n3.return);
                            continue;
                        }
                        break;
                    }
                }
                function Sl() {
                    var e3 = ks.current;
                    return ks.current = Di, e3 === null ? Di : e3;
                }
                function _l(e3, t3) {
                    var n3 = xs;
                    xs |= 16;
                    var r2 = Sl();
                    for (Ns === e3 && Ts === t3 || bl(e3, t3); ;)
                        try {
                            wl();
                            break;
                        } catch (t4) {
                            Cl(e3, t4);
                        }
                    if (eo(), xs = n3, ks.current = r2, Ds !== null)
                        throw Error(i(261));
                    return Ns = null, Ts = 0, Os;
                }
                function wl() {
                    for (; Ds !== null;)
                        Ll(Ds);
                }
                function El() {
                    for (; Ds !== null && !ka();)
                        Ll(Ds);
                }
                function Ll(e3) {
                    var t3 = Hs(e3.alternate, e3, Ps);
                    e3.memoizedProps = e3.pendingProps, t3 === null ? kl(e3) : Ds = t3, Rs.current = null;
                }
                function kl(e3) {
                    var t3 = e3;
                    do {
                        var n3 = t3.alternate;
                        if (e3 = t3.return, (2048 & t3.flags) == 0) {
                            if ((n3 = rs(n3, t3, Ps)) !== null)
                                return void (Ds = n3);
                            if ((n3 = t3).tag !== 24 && n3.tag !== 23 || n3.memoizedState === null || (1073741824 & Ps) != 0 || (4 & n3.mode) == 0) {
                                for (var r2 = 0, a2 = n3.child; a2 !== null;)
                                    r2 |= a2.lanes | a2.childLanes, a2 = a2.sibling;
                                n3.childLanes = r2;
                            }
                            e3 !== null && (2048 & e3.flags) == 0 && (e3.firstEffect === null && (e3.firstEffect = t3.firstEffect), t3.lastEffect !== null && (e3.lastEffect !== null && (e3.lastEffect.nextEffect = t3.firstEffect), e3.lastEffect = t3.lastEffect), 1 < t3.flags && (e3.lastEffect !== null ? e3.lastEffect.nextEffect = t3 : e3.firstEffect = t3, e3.lastEffect = t3));
                        } else {
                            if ((n3 = as(t3)) !== null)
                                return n3.flags &= 2047, void (Ds = n3);
                            e3 !== null && (e3.firstEffect = e3.lastEffect = null, e3.flags |= 2048);
                        }
                        if ((t3 = t3.sibling) !== null)
                            return void (Ds = t3);
                        Ds = t3 = e3;
                    } while (t3 !== null);
                    Os === 0 && (Os = 5);
                }
                function Rl(e3) {
                    var t3 = Va();
                    return Ha(99, xl.bind(null, e3, t3)), null;
                }
                function xl(e3, t3) {
                    do {
                        Dl();
                    } while (Ys !== null);
                    if ((48 & xs) != 0)
                        throw Error(i(327));
                    var n3 = e3.finishedWork;
                    if (n3 === null)
                        return null;
                    if (e3.finishedWork = null, e3.finishedLanes = 0, n3 === e3.current)
                        throw Error(i(177));
                    e3.callbackNode = null;
                    var r2 = n3.lanes | n3.childLanes, a2 = r2, o2 = e3.pendingLanes & ~a2;
                    e3.pendingLanes = a2, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.expiredLanes &= a2, e3.mutableReadLanes &= a2, e3.entangledLanes &= a2, a2 = e3.entanglements;
                    for (var s2 = e3.eventTimes, l2 = e3.expirationTimes; 0 < o2;) {
                        var u2 = 31 - Vt(o2), c2 = 1 << u2;
                        a2[u2] = 0, s2[u2] = -1, l2[u2] = -1, o2 &= ~c2;
                    }
                    if (el !== null && (24 & r2) == 0 && el.has(e3) && el.delete(e3), e3 === Ns && (Ds = Ns = null, Ts = 0), 1 < n3.flags ? n3.lastEffect !== null ? (n3.lastEffect.nextEffect = n3, r2 = n3.firstEffect) : r2 = n3 : r2 = n3.firstEffect, r2 !== null) {
                        if (a2 = xs, xs |= 32, Rs.current = null, jr = qt, mr(s2 = hr())) {
                            if ("selectionStart" in s2)
                                l2 = { start: s2.selectionStart, end: s2.selectionEnd };
                            else
                                e:
                                if (l2 = (l2 = s2.ownerDocument) && l2.defaultView || window, (c2 = l2.getSelection && l2.getSelection()) && c2.rangeCount !== 0) {
                                    l2 = c2.anchorNode, o2 = c2.anchorOffset, u2 = c2.focusNode, c2 = c2.focusOffset;
                                    try {
                                        l2.nodeType, u2.nodeType;
                                    } catch (e4) {
                                        l2 = null;
                                        break e;
                                    }
                                    var d2 = 0, f2 = -1, p2 = -1, h2 = 0, m2 = 0, v2 = s2, g2 = null;
                                    t:
                                    for (; ;) {
                                        for (var y2; v2 !== l2 || o2 !== 0 && v2.nodeType !== 3 || (f2 = d2 + o2), v2 !== u2 || c2 !== 0 && v2.nodeType !== 3 || (p2 = d2 + c2), v2.nodeType === 3 && (d2 += v2.nodeValue.length), (y2 = v2.firstChild) !== null;)
                                            g2 = v2, v2 = y2;
                                        for (; ;) {
                                            if (v2 === s2)
                                                break t;
                                            if (g2 === l2 && ++h2 === o2 && (f2 = d2), g2 === u2 && ++m2 === c2 && (p2 = d2), (y2 = v2.nextSibling) !== null)
                                                break;
                                            g2 = (v2 = g2).parentNode;
                                        }
                                        v2 = y2;
                                    }
                                    l2 = f2 === -1 || p2 === -1 ? null : { start: f2, end: p2 };
                                } else
                                    l2 = null;
                            l2 = l2 || { start: 0, end: 0 };
                        } else
                            l2 = null;
                        Ur = { focusedElem: s2, selectionRange: l2 }, qt = false, il = null, sl = false, Gs = r2;
                        do {
                            try {
                                Nl();
                            } catch (e4) {
                                if (Gs === null)
                                    throw Error(i(330));
                                Il(Gs, e4), Gs = Gs.nextEffect;
                            }
                        } while (Gs !== null);
                        il = null, Gs = r2;
                        do {
                            try {
                                for (s2 = e3; Gs !== null;) {
                                    var b2 = Gs.flags;
                                    if (16 & b2 && ge(Gs.stateNode, ""), 128 & b2) {
                                        var C2 = Gs.alternate;
                                        if (C2 !== null) {
                                            var S2 = C2.ref;
                                            S2 !== null && (typeof S2 == "function" ? S2(null) : S2.current = null);
                                        }
                                    }
                                    switch (1038 & b2) {
                                        case 2:
                                            ys(Gs), Gs.flags &= -3;
                                            break;
                                        case 6:
                                            ys(Gs), Gs.flags &= -3, _s(Gs.alternate, Gs);
                                            break;
                                        case 1024:
                                            Gs.flags &= -1025;
                                            break;
                                        case 1028:
                                            Gs.flags &= -1025, _s(Gs.alternate, Gs);
                                            break;
                                        case 4:
                                            _s(Gs.alternate, Gs);
                                            break;
                                        case 8:
                                            Ss(s2, l2 = Gs);
                                            var _2 = l2.alternate;
                                            vs(l2), _2 !== null && vs(_2);
                                    }
                                    Gs = Gs.nextEffect;
                                }
                            } catch (e4) {
                                if (Gs === null)
                                    throw Error(i(330));
                                Il(Gs, e4), Gs = Gs.nextEffect;
                            }
                        } while (Gs !== null);
                        if (S2 = Ur, C2 = hr(), b2 = S2.focusedElem, s2 = S2.selectionRange, C2 !== b2 && b2 && b2.ownerDocument && pr(b2.ownerDocument.documentElement, b2)) {
                            s2 !== null && mr(b2) && (C2 = s2.start, (S2 = s2.end) === void 0 && (S2 = C2), "selectionStart" in b2 ? (b2.selectionStart = C2, b2.selectionEnd = Math.min(S2, b2.value.length)) : (S2 = (C2 = b2.ownerDocument || document) && C2.defaultView || window).getSelection && (S2 = S2.getSelection(), l2 = b2.textContent.length, _2 = Math.min(s2.start, l2), s2 = s2.end === void 0 ? _2 : Math.min(s2.end, l2), !S2.extend && _2 > s2 && (l2 = s2, s2 = _2, _2 = l2), l2 = fr(b2, _2), o2 = fr(b2, s2), l2 && o2 && (S2.rangeCount !== 1 || S2.anchorNode !== l2.node || S2.anchorOffset !== l2.offset || S2.focusNode !== o2.node || S2.focusOffset !== o2.offset) && ((C2 = C2.createRange()).setStart(l2.node, l2.offset), S2.removeAllRanges(), _2 > s2 ? (S2.addRange(C2), S2.extend(o2.node, o2.offset)) : (C2.setEnd(o2.node, o2.offset), S2.addRange(C2))))), C2 = [];
                            for (S2 = b2; S2 = S2.parentNode;)
                                S2.nodeType === 1 && C2.push({ element: S2, left: S2.scrollLeft, top: S2.scrollTop });
                            for (typeof b2.focus == "function" && b2.focus(), b2 = 0; b2 < C2.length; b2++)
                                (S2 = C2[b2]).element.scrollLeft = S2.left, S2.element.scrollTop = S2.top;
                        }
                        qt = !!jr, Ur = jr = null, e3.current = n3, Gs = r2;
                        do {
                            try {
                                for (b2 = e3; Gs !== null;) {
                                    var w2 = Gs.flags;
                                    if (36 & w2 && ps(b2, Gs.alternate, Gs), 128 & w2) {
                                        C2 = void 0;
                                        var E2 = Gs.ref;
                                        if (E2 !== null) {
                                            var L2 = Gs.stateNode;
                                            Gs.tag, C2 = L2, typeof E2 == "function" ? E2(C2) : E2.current = C2;
                                        }
                                    }
                                    Gs = Gs.nextEffect;
                                }
                            } catch (e4) {
                                if (Gs === null)
                                    throw Error(i(330));
                                Il(Gs, e4), Gs = Gs.nextEffect;
                            }
                        } while (Gs !== null);
                        Gs = null, Aa(), xs = a2;
                    } else
                        e3.current = n3;
                    if (Js)
                        Js = false, Ys = e3, Qs = t3;
                    else
                        for (Gs = r2; Gs !== null;)
                            t3 = Gs.nextEffect, Gs.nextEffect = null, 8 & Gs.flags && ((w2 = Gs).sibling = null, w2.stateNode = null), Gs = t3;
                    if ((r2 = e3.pendingLanes) === 0 && (Ks = null), r2 === 1 ? e3 === nl ? tl++ : (tl = 0, nl = e3) : tl = 0, n3 = n3.stateNode, _a && typeof _a.onCommitFiberRoot == "function")
                        try {
                            _a.onCommitFiberRoot(Sa, n3, void 0, (64 & n3.current.flags) == 64);
                        } catch (e4) {
                        }
                    if (fl(e3, Ba()), Ws)
                        throw Ws = false, e3 = qs, qs = null, e3;
                    return (8 & xs) != 0 || Wa(), null;
                }
                function Nl() {
                    for (; Gs !== null;) {
                        var e3 = Gs.alternate;
                        sl || il === null || ((8 & Gs.flags) != 0 ? Xe(Gs, il) && (sl = true) : Gs.tag === 13 && Es(e3, Gs) && Xe(Gs, il) && (sl = true));
                        var t3 = Gs.flags;
                        (256 & t3) != 0 && fs(e3, Gs), (512 & t3) == 0 || Js || (Js = true, Ga(97, function () {
                            return Dl(), null;
                        })), Gs = Gs.nextEffect;
                    }
                }
                function Dl() {
                    if (Qs !== 90) {
                        var e3 = 97 < Qs ? 97 : Qs;
                        return Qs = 90, Ha(e3, Ml);
                    }
                    return false;
                }
                function Tl(e3, t3) {
                    Xs.push(t3, e3), Js || (Js = true, Ga(97, function () {
                        return Dl(), null;
                    }));
                }
                function Pl(e3, t3) {
                    $s.push(t3, e3), Js || (Js = true, Ga(97, function () {
                        return Dl(), null;
                    }));
                }
                function Ml() {
                    if (Ys === null)
                        return false;
                    var e3 = Ys;
                    if (Ys = null, (48 & xs) != 0)
                        throw Error(i(331));
                    var t3 = xs;
                    xs |= 32;
                    var n3 = $s;
                    $s = [];
                    for (var r2 = 0; r2 < n3.length; r2 += 2) {
                        var a2 = n3[r2], o2 = n3[r2 + 1], s2 = a2.destroy;
                        if (a2.destroy = void 0, typeof s2 == "function")
                            try {
                                s2();
                            } catch (e4) {
                                if (o2 === null)
                                    throw Error(i(330));
                                Il(o2, e4);
                            }
                    }
                    for (n3 = Xs, Xs = [], r2 = 0; r2 < n3.length; r2 += 2) {
                        a2 = n3[r2], o2 = n3[r2 + 1];
                        try {
                            var l2 = a2.create;
                            a2.destroy = l2();
                        } catch (e4) {
                            if (o2 === null)
                                throw Error(i(330));
                            Il(o2, e4);
                        }
                    }
                    for (l2 = e3.current.firstEffect; l2 !== null;)
                        e3 = l2.nextEffect, l2.nextEffect = null, 8 & l2.flags && (l2.sibling = null, l2.stateNode = null), l2 = e3;
                    return xs = t3, Wa(), true;
                }
                function Ol(e3, t3, n3) {
                    uo(e3, t3 = ls(0, t3 = os(n3, t3), 1)), t3 = ll(), (e3 = dl(e3, 1)) !== null && (Bt(e3, 1, t3), fl(e3, t3));
                }
                function Il(e3, t3) {
                    if (e3.tag === 3)
                        Ol(e3, e3, t3);
                    else
                        for (var n3 = e3.return; n3 !== null;) {
                            if (n3.tag === 3) {
                                Ol(n3, e3, t3);
                                break;
                            }
                            if (n3.tag === 1) {
                                var r2 = n3.stateNode;
                                if (typeof n3.type.getDerivedStateFromError == "function" || typeof r2.componentDidCatch == "function" && (Ks === null || !Ks.has(r2))) {
                                    var a2 = us(n3, e3 = os(t3, e3), 1);
                                    if (uo(n3, a2), a2 = ll(), (n3 = dl(n3, 1)) !== null)
                                        Bt(n3, 1, a2), fl(n3, a2);
                                    else if (typeof r2.componentDidCatch == "function" && (Ks === null || !Ks.has(r2)))
                                        try {
                                            r2.componentDidCatch(t3, e3);
                                        } catch (e4) {
                                        }
                                    break;
                                }
                            }
                            n3 = n3.return;
                        }
                }
                function Al(e3, t3, n3) {
                    var r2 = e3.pingCache;
                    r2 !== null && r2.delete(t3), t3 = ll(), e3.pingedLanes |= e3.suspendedLanes & n3, Ns === e3 && (Ts & n3) === n3 && (Os === 4 || Os === 3 && (62914560 & Ts) === Ts && 500 > Ba() - Bs ? bl(e3, 0) : js |= n3), fl(e3, t3);
                }
                function Fl(e3, t3) {
                    var n3 = e3.stateNode;
                    n3 !== null && n3.delete(t3), (t3 = 0) == 0 && ((2 & (t3 = e3.mode)) == 0 ? t3 = 1 : (4 & t3) == 0 ? t3 = Va() === 99 ? 1 : 2 : (al === 0 && (al = As), (t3 = jt(62914560 & ~al)) === 0 && (t3 = 4194304))), n3 = ll(), (e3 = dl(e3, t3)) !== null && (Bt(e3, t3, n3), fl(e3, n3));
                }
                function zl(e3, t3, n3, r2) {
                    this.tag = e3, this.key = n3, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r2, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
                }
                function jl(e3, t3, n3, r2) {
                    return new zl(e3, t3, n3, r2);
                }
                function Ul(e3) {
                    return !(!(e3 = e3.prototype) || !e3.isReactComponent);
                }
                function Bl(e3, t3) {
                    var n3 = e3.alternate;
                    return n3 === null ? ((n3 = jl(e3.tag, t3, e3.key, e3.mode)).elementType = e3.elementType, n3.type = e3.type, n3.stateNode = e3.stateNode, n3.alternate = e3, e3.alternate = n3) : (n3.pendingProps = t3, n3.type = e3.type, n3.flags = 0, n3.nextEffect = null, n3.firstEffect = null, n3.lastEffect = null), n3.childLanes = e3.childLanes, n3.lanes = e3.lanes, n3.child = e3.child, n3.memoizedProps = e3.memoizedProps, n3.memoizedState = e3.memoizedState, n3.updateQueue = e3.updateQueue, t3 = e3.dependencies, n3.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }, n3.sibling = e3.sibling, n3.index = e3.index, n3.ref = e3.ref, n3;
                }
                function Vl(e3, t3, n3, r2, a2, o2) {
                    var s2 = 2;
                    if (r2 = e3, typeof e3 == "function")
                        Ul(e3) && (s2 = 1);
                    else if (typeof e3 == "string")
                        s2 = 5;
                    else
                        e:
                        switch (e3) {
                            case E:
                                return Zl(n3.children, a2, o2, t3);
                            case A:
                                s2 = 8, a2 |= 16;
                                break;
                            case L:
                                s2 = 8, a2 |= 1;
                                break;
                            case k:
                                return (e3 = jl(12, n3, t3, 8 | a2)).elementType = k, e3.type = k, e3.lanes = o2, e3;
                            case D:
                                return (e3 = jl(13, n3, t3, a2)).type = D, e3.elementType = D, e3.lanes = o2, e3;
                            case T:
                                return (e3 = jl(19, n3, t3, a2)).elementType = T, e3.lanes = o2, e3;
                            case F:
                                return Hl(n3, a2, o2, t3);
                            case z:
                                return (e3 = jl(24, n3, t3, a2)).elementType = z, e3.lanes = o2, e3;
                            default:
                                if (typeof e3 == "object" && e3 !== null)
                                    switch (e3.$$typeof) {
                                        case R:
                                            s2 = 10;
                                            break e;
                                        case x:
                                            s2 = 9;
                                            break e;
                                        case N:
                                            s2 = 11;
                                            break e;
                                        case P:
                                            s2 = 14;
                                            break e;
                                        case M:
                                            s2 = 16, r2 = null;
                                            break e;
                                        case O:
                                            s2 = 22;
                                            break e;
                                    }
                                throw Error(i(130, e3 == null ? e3 : typeof e3, ""));
                        }
                    return (t3 = jl(s2, n3, t3, a2)).elementType = e3, t3.type = r2, t3.lanes = o2, t3;
                }
                function Zl(e3, t3, n3, r2) {
                    return (e3 = jl(7, e3, r2, t3)).lanes = n3, e3;
                }
                function Hl(e3, t3, n3, r2) {
                    return (e3 = jl(23, e3, r2, t3)).elementType = F, e3.lanes = n3, e3;
                }
                function Gl(e3, t3, n3) {
                    return (e3 = jl(6, e3, null, t3)).lanes = n3, e3;
                }
                function Wl(e3, t3, n3) {
                    return (t3 = jl(4, e3.children !== null ? e3.children : [], e3.key, t3)).lanes = n3, t3.stateNode = { containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation }, t3;
                }
                function ql(e3, t3, n3) {
                    this.tag = t3, this.containerInfo = e3, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n3, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ut(0), this.expirationTimes = Ut(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ut(0), this.mutableSourceEagerHydrationData = null;
                }
                function Kl(e3, t3, n3, r2) {
                    var a2 = t3.current, o2 = ll(), s2 = ul(a2);
                    e:
                    if (n3) {
                        t: {
                            if (Je(n3 = n3._reactInternals) !== n3 || n3.tag !== 1)
                                throw Error(i(170));
                            var l2 = n3;
                            do {
                                switch (l2.tag) {
                                    case 3:
                                        l2 = l2.stateNode.context;
                                        break t;
                                    case 1:
                                        if (ma(l2.type)) {
                                            l2 = l2.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break t;
                                        }
                                }
                                l2 = l2.return;
                            } while (l2 !== null);
                            throw Error(i(171));
                        }
                        if (n3.tag === 1) {
                            var u2 = n3.type;
                            if (ma(u2)) {
                                n3 = ya(n3, u2, l2);
                                break e;
                            }
                        }
                        n3 = l2;
                    } else
                        n3 = ca;
                    return t3.context === null ? t3.context = n3 : t3.pendingContext = n3, (t3 = lo(o2, s2)).payload = { element: e3 }, (r2 = r2 === void 0 ? null : r2) !== null && (t3.callback = r2), uo(a2, t3), cl(a2, s2, o2), s2;
                }
                function Jl(e3) {
                    return (e3 = e3.current).child ? (e3.child.tag, e3.child.stateNode) : null;
                }
                function Yl(e3, t3) {
                    if ((e3 = e3.memoizedState) !== null && e3.dehydrated !== null) {
                        var n3 = e3.retryLane;
                        e3.retryLane = n3 !== 0 && n3 < t3 ? n3 : t3;
                    }
                }
                function Ql(e3, t3) {
                    Yl(e3, t3), (e3 = e3.alternate) && Yl(e3, t3);
                }
                function Xl(e3, t3, n3) {
                    var r2 = n3 != null && n3.hydrationOptions != null && n3.hydrationOptions.mutableSources || null;
                    if (n3 = new ql(e3, t3, n3 != null && n3.hydrate === true), t3 = jl(3, null, null, t3 === 2 ? 7 : t3 === 1 ? 3 : 0), n3.current = t3, t3.stateNode = n3, io(t3), e3[Xr] = n3.current, Dr(e3.nodeType === 8 ? e3.parentNode : e3), r2)
                        for (e3 = 0; e3 < r2.length; e3++) {
                            var a2 = (t3 = r2[e3])._getVersion;
                            a2 = a2(t3._source), n3.mutableSourceEagerHydrationData == null ? n3.mutableSourceEagerHydrationData = [t3, a2] : n3.mutableSourceEagerHydrationData.push(t3, a2);
                        }
                    this._internalRoot = n3;
                }
                function $l(e3) {
                    return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11 && (e3.nodeType !== 8 || e3.nodeValue !== " react-mount-point-unstable "));
                }
                function eu(e3, t3, n3, r2, a2) {
                    var o2 = n3._reactRootContainer;
                    if (o2) {
                        var i2 = o2._internalRoot;
                        if (typeof a2 == "function") {
                            var s2 = a2;
                            a2 = function () {
                                var e4 = Jl(i2);
                                s2.call(e4);
                            };
                        }
                        Kl(t3, i2, e3, a2);
                    } else {
                        if (o2 = n3._reactRootContainer = function (e4, t4) {
                            if (t4 || (t4 = !(!(t4 = e4 ? e4.nodeType === 9 ? e4.documentElement : e4.firstChild : null) || t4.nodeType !== 1 || !t4.hasAttribute("data-reactroot"))), !t4)
                                for (var n4; n4 = e4.lastChild;)
                                    e4.removeChild(n4);
                            return new Xl(e4, 0, t4 ? { hydrate: true } : void 0);
                        }(n3, r2), i2 = o2._internalRoot, typeof a2 == "function") {
                            var l2 = a2;
                            a2 = function () {
                                var e4 = Jl(i2);
                                l2.call(e4);
                            };
                        }
                        vl(function () {
                            Kl(t3, i2, e3, a2);
                        });
                    }
                    return Jl(i2);
                }
                Hs = function (e3, t3, n3) {
                    var r2 = t3.lanes;
                    if (e3 !== null)
                        if (e3.memoizedProps !== t3.pendingProps || fa.current)
                            Ii = true;
                        else {
                            if ((n3 & r2) == 0) {
                                switch (Ii = false, t3.tag) {
                                    case 3:
                                        Gi(t3), Wo();
                                        break;
                                    case 5:
                                        Oo(t3);
                                        break;
                                    case 1:
                                        ma(t3.type) && ba(t3);
                                        break;
                                    case 4:
                                        Po(t3, t3.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        r2 = t3.memoizedProps.value;
                                        var a2 = t3.type._context;
                                        ua(Ya, a2._currentValue), a2._currentValue = r2;
                                        break;
                                    case 13:
                                        if (t3.memoizedState !== null)
                                            return (n3 & t3.child.childLanes) != 0 ? Yi(e3, t3, n3) : (ua(Ao, 1 & Ao.current), (t3 = ts(e3, t3, n3)) !== null ? t3.sibling : null);
                                        ua(Ao, 1 & Ao.current);
                                        break;
                                    case 19:
                                        if (r2 = (n3 & t3.childLanes) != 0, (64 & e3.flags) != 0) {
                                            if (r2)
                                                return es(e3, t3, n3);
                                            t3.flags |= 64;
                                        }
                                        if ((a2 = t3.memoizedState) !== null && (a2.rendering = null, a2.tail = null, a2.lastEffect = null), ua(Ao, Ao.current), r2)
                                            break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return t3.lanes = 0, Ui(e3, t3, n3);
                                }
                                return ts(e3, t3, n3);
                            }
                            Ii = (16384 & e3.flags) != 0;
                        }
                    else
                        Ii = false;
                    switch (t3.lanes = 0, t3.tag) {
                        case 2:
                            if (r2 = t3.type, e3 !== null && (e3.alternate = null, t3.alternate = null, t3.flags |= 2), e3 = t3.pendingProps, a2 = ha(t3, da.current), ro(t3, n3), a2 = oi(null, t3, r2, e3, a2, n3), t3.flags |= 1, typeof a2 == "object" && a2 !== null && typeof a2.render == "function" && a2.$$typeof === void 0) {
                                if (t3.tag = 1, t3.memoizedState = null, t3.updateQueue = null, ma(r2)) {
                                    var o2 = true;
                                    ba(t3);
                                } else
                                    o2 = false;
                                t3.memoizedState = a2.state !== null && a2.state !== void 0 ? a2.state : null, io(t3);
                                var s2 = r2.getDerivedStateFromProps;
                                typeof s2 == "function" && mo(t3, r2, s2, e3), a2.updater = vo, t3.stateNode = a2, a2._reactInternals = t3, Co(t3, r2, e3, n3), t3 = Hi(null, t3, r2, true, o2, n3);
                            } else
                                t3.tag = 0, Ai(null, t3, a2, n3), t3 = t3.child;
                            return t3;
                        case 16:
                            a2 = t3.elementType;
                            e: {
                                switch (e3 !== null && (e3.alternate = null, t3.alternate = null, t3.flags |= 2), e3 = t3.pendingProps, a2 = (o2 = a2._init)(a2._payload), t3.type = a2, o2 = t3.tag = function (e4) {
                                    if (typeof e4 == "function")
                                        return Ul(e4) ? 1 : 0;
                                    if (e4 != null) {
                                        if ((e4 = e4.$$typeof) === N)
                                            return 11;
                                        if (e4 === P)
                                            return 14;
                                    }
                                    return 2;
                                }(a2), e3 = Ja(a2, e3), o2) {
                                    case 0:
                                        t3 = Vi(null, t3, a2, e3, n3);
                                        break e;
                                    case 1:
                                        t3 = Zi(null, t3, a2, e3, n3);
                                        break e;
                                    case 11:
                                        t3 = Fi(null, t3, a2, e3, n3);
                                        break e;
                                    case 14:
                                        t3 = zi(null, t3, a2, Ja(a2.type, e3), r2, n3);
                                        break e;
                                }
                                throw Error(i(306, a2, ""));
                            }
                            return t3;
                        case 0:
                            return r2 = t3.type, a2 = t3.pendingProps, Vi(e3, t3, r2, a2 = t3.elementType === r2 ? a2 : Ja(r2, a2), n3);
                        case 1:
                            return r2 = t3.type, a2 = t3.pendingProps, Zi(e3, t3, r2, a2 = t3.elementType === r2 ? a2 : Ja(r2, a2), n3);
                        case 3:
                            if (Gi(t3), r2 = t3.updateQueue, e3 === null || r2 === null)
                                throw Error(i(282));
                            if (r2 = t3.pendingProps, a2 = (a2 = t3.memoizedState) !== null ? a2.element : null, so(e3, t3), fo(t3, r2, null, n3), (r2 = t3.memoizedState.element) === a2)
                                Wo(), t3 = ts(e3, t3, n3);
                            else {
                                if ((o2 = (a2 = t3.stateNode).hydrate) && (jo = Wr(t3.stateNode.containerInfo.firstChild), zo = t3, o2 = Uo = true), o2) {
                                    if ((e3 = a2.mutableSourceEagerHydrationData) != null)
                                        for (a2 = 0; a2 < e3.length; a2 += 2)
                                            (o2 = e3[a2])._workInProgressVersionPrimary = e3[a2 + 1], qo.push(o2);
                                    for (n3 = ko(t3, null, r2, n3), t3.child = n3; n3;)
                                        n3.flags = -3 & n3.flags | 1024, n3 = n3.sibling;
                                } else
                                    Ai(e3, t3, r2, n3), Wo();
                                t3 = t3.child;
                            }
                            return t3;
                        case 5:
                            return Oo(t3), e3 === null && Zo(t3), r2 = t3.type, a2 = t3.pendingProps, o2 = e3 !== null ? e3.memoizedProps : null, s2 = a2.children, Vr(r2, a2) ? s2 = null : o2 !== null && Vr(r2, o2) && (t3.flags |= 16), Bi(e3, t3), Ai(e3, t3, s2, n3), t3.child;
                        case 6:
                            return e3 === null && Zo(t3), null;
                        case 13:
                            return Yi(e3, t3, n3);
                        case 4:
                            return Po(t3, t3.stateNode.containerInfo), r2 = t3.pendingProps, e3 === null ? t3.child = Lo(t3, null, r2, n3) : Ai(e3, t3, r2, n3), t3.child;
                        case 11:
                            return r2 = t3.type, a2 = t3.pendingProps, Fi(e3, t3, r2, a2 = t3.elementType === r2 ? a2 : Ja(r2, a2), n3);
                        case 7:
                            return Ai(e3, t3, t3.pendingProps, n3), t3.child;
                        case 8:
                        case 12:
                            return Ai(e3, t3, t3.pendingProps.children, n3), t3.child;
                        case 10:
                            e: {
                                r2 = t3.type._context, a2 = t3.pendingProps, s2 = t3.memoizedProps, o2 = a2.value;
                                var l2 = t3.type._context;
                                if (ua(Ya, l2._currentValue), l2._currentValue = o2, s2 !== null)
                                    if (l2 = s2.value, (o2 = lr(l2, o2) ? 0 : 0 | (typeof r2._calculateChangedBits == "function" ? r2._calculateChangedBits(l2, o2) : 1073741823)) == 0) {
                                        if (s2.children === a2.children && !fa.current) {
                                            t3 = ts(e3, t3, n3);
                                            break e;
                                        }
                                    } else
                                        for ((l2 = t3.child) !== null && (l2.return = t3); l2 !== null;) {
                                            var u2 = l2.dependencies;
                                            if (u2 !== null) {
                                                s2 = l2.child;
                                                for (var c2 = u2.firstContext; c2 !== null;) {
                                                    if (c2.context === r2 && (c2.observedBits & o2) != 0) {
                                                        l2.tag === 1 && ((c2 = lo(-1, n3 & -n3)).tag = 2, uo(l2, c2)), l2.lanes |= n3, (c2 = l2.alternate) !== null && (c2.lanes |= n3), no(l2.return, n3), u2.lanes |= n3;
                                                        break;
                                                    }
                                                    c2 = c2.next;
                                                }
                                            } else
                                                s2 = l2.tag === 10 && l2.type === t3.type ? null : l2.child;
                                            if (s2 !== null)
                                                s2.return = l2;
                                            else
                                                for (s2 = l2; s2 !== null;) {
                                                    if (s2 === t3) {
                                                        s2 = null;
                                                        break;
                                                    }
                                                    if ((l2 = s2.sibling) !== null) {
                                                        l2.return = s2.return, s2 = l2;
                                                        break;
                                                    }
                                                    s2 = s2.return;
                                                }
                                            l2 = s2;
                                        }
                                Ai(e3, t3, a2.children, n3), t3 = t3.child;
                            }
                            return t3;
                        case 9:
                            return a2 = t3.type, r2 = (o2 = t3.pendingProps).children, ro(t3, n3), r2 = r2(a2 = ao(a2, o2.unstable_observedBits)), t3.flags |= 1, Ai(e3, t3, r2, n3), t3.child;
                        case 14:
                            return o2 = Ja(a2 = t3.type, t3.pendingProps), zi(e3, t3, a2, o2 = Ja(a2.type, o2), r2, n3);
                        case 15:
                            return ji(e3, t3, t3.type, t3.pendingProps, r2, n3);
                        case 17:
                            return r2 = t3.type, a2 = t3.pendingProps, a2 = t3.elementType === r2 ? a2 : Ja(r2, a2), e3 !== null && (e3.alternate = null, t3.alternate = null, t3.flags |= 2), t3.tag = 1, ma(r2) ? (e3 = true, ba(t3)) : e3 = false, ro(t3, n3), yo(t3, r2, a2), Co(t3, r2, a2, n3), Hi(null, t3, r2, true, e3, n3);
                        case 19:
                            return es(e3, t3, n3);
                        case 23:
                        case 24:
                            return Ui(e3, t3, n3);
                    }
                    throw Error(i(156, t3.tag));
                }, Xl.prototype.render = function (e3) {
                    Kl(e3, this._internalRoot, null, null);
                }, Xl.prototype.unmount = function () {
                    var e3 = this._internalRoot, t3 = e3.containerInfo;
                    Kl(null, e3, null, function () {
                        t3[Xr] = null;
                    });
                }, $e = function (e3) {
                    e3.tag === 13 && (cl(e3, 4, ll()), Ql(e3, 4));
                }, et = function (e3) {
                    e3.tag === 13 && (cl(e3, 67108864, ll()), Ql(e3, 67108864));
                }, tt = function (e3) {
                    if (e3.tag === 13) {
                        var t3 = ll(), n3 = ul(e3);
                        cl(e3, n3, t3), Ql(e3, n3);
                    }
                }, nt = function (e3, t3) {
                    return t3();
                }, ke = function (e3, t3, n3) {
                    switch (t3) {
                        case "input":
                            if (ne(e3, n3), t3 = n3.name, n3.type === "radio" && t3 != null) {
                                for (n3 = e3; n3.parentNode;)
                                    n3 = n3.parentNode;
                                for (n3 = n3.querySelectorAll("input[name=" + JSON.stringify("" + t3) + '][type="radio"]'), t3 = 0; t3 < n3.length; t3++) {
                                    var r2 = n3[t3];
                                    if (r2 !== e3 && r2.form === e3.form) {
                                        var a2 = ra(r2);
                                        if (!a2)
                                            throw Error(i(90));
                                        Q(r2), ne(r2, a2);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ue(e3, n3);
                            break;
                        case "select":
                            (t3 = n3.value) != null && ie(e3, !!n3.multiple, t3, false);
                    }
                }, Pe = function (e3, t3) {
                    var n3 = xs;
                    xs |= 1;
                    try {
                        return e3(t3);
                    } finally {
                        (xs = n3) === 0 && (Zs(), Wa());
                    }
                }, Me = function (e3, t3, n3, r2, a2) {
                    var o2 = xs;
                    xs |= 4;
                    try {
                        return Ha(98, e3.bind(null, t3, n3, r2, a2));
                    } finally {
                        (xs = o2) === 0 && (Zs(), Wa());
                    }
                }, Oe = function () {
                    (49 & xs) == 0 && (function () {
                        if (el !== null) {
                            var e3 = el;
                            el = null, e3.forEach(function (e4) {
                                e4.expiredLanes |= 24 & e4.pendingLanes, fl(e4, Ba());
                            });
                        }
                        Wa();
                    }(), Dl());
                }, Ie = function (e3, t3) {
                    var n3 = xs;
                    xs |= 2;
                    try {
                        return e3(t3);
                    } finally {
                        (xs = n3) === 0 && (Zs(), Wa());
                    }
                };
                var tu = { findFiberByHostInstance: ea, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, nu = {
                    bundleType: tu.bundleType, version: tu.version, rendererPackageName: tu.rendererPackageName, rendererConfig: tu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: S.ReactCurrentDispatcher, findHostInstanceByFiber: function (e3) {
                        return (e3 = function (e4) {
                            if (e4 = function (e5) {
                                var t4 = e5.alternate;
                                if (!t4) {
                                    if ((t4 = Je(e5)) === null)
                                        throw Error(i(188));
                                    return t4 !== e5 ? null : e5;
                                }
                                for (var n3 = e5, r2 = t4; ;) {
                                    var a2 = n3.return;
                                    if (a2 === null)
                                        break;
                                    var o2 = a2.alternate;
                                    if (o2 === null) {
                                        if ((r2 = a2.return) !== null) {
                                            n3 = r2;
                                            continue;
                                        }
                                        break;
                                    }
                                    if (a2.child === o2.child) {
                                        for (o2 = a2.child; o2;) {
                                            if (o2 === n3)
                                                return Qe(a2), e5;
                                            if (o2 === r2)
                                                return Qe(a2), t4;
                                            o2 = o2.sibling;
                                        }
                                        throw Error(i(188));
                                    }
                                    if (n3.return !== r2.return)
                                        n3 = a2, r2 = o2;
                                    else {
                                        for (var s2 = false, l2 = a2.child; l2;) {
                                            if (l2 === n3) {
                                                s2 = true, n3 = a2, r2 = o2;
                                                break;
                                            }
                                            if (l2 === r2) {
                                                s2 = true, r2 = a2, n3 = o2;
                                                break;
                                            }
                                            l2 = l2.sibling;
                                        }
                                        if (!s2) {
                                            for (l2 = o2.child; l2;) {
                                                if (l2 === n3) {
                                                    s2 = true, n3 = o2, r2 = a2;
                                                    break;
                                                }
                                                if (l2 === r2) {
                                                    s2 = true, r2 = o2, n3 = a2;
                                                    break;
                                                }
                                                l2 = l2.sibling;
                                            }
                                            if (!s2)
                                                throw Error(i(189));
                                        }
                                    }
                                    if (n3.alternate !== r2)
                                        throw Error(i(190));
                                }
                                if (n3.tag !== 3)
                                    throw Error(i(188));
                                return n3.stateNode.current === n3 ? e5 : t4;
                            }(e4), !e4)
                                return null;
                            for (var t3 = e4; ;) {
                                if (t3.tag === 5 || t3.tag === 6)
                                    return t3;
                                if (t3.child)
                                    t3.child.return = t3, t3 = t3.child;
                                else {
                                    if (t3 === e4)
                                        break;
                                    for (; !t3.sibling;) {
                                        if (!t3.return || t3.return === e4)
                                            return null;
                                        t3 = t3.return;
                                    }
                                    t3.sibling.return = t3.return, t3 = t3.sibling;
                                }
                            }
                            return null;
                        }(e3)) === null ? null : e3.stateNode;
                    }, findFiberByHostInstance: tu.findFiberByHostInstance || function () {
                        return null;
                    }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null
                };
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
                    var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!ru.isDisabled && ru.supportsFiber)
                        try {
                            Sa = ru.inject(nu), _a = ru;
                        } catch (me2) {
                        }
                }
                t2.render = function (e3, t3, n3) {
                    if (!$l(t3))
                        throw Error(i(200));
                    return eu(null, e3, t3, false, n3);
                }, t2.unmountComponentAtNode = function (e3) {
                    if (!$l(e3))
                        throw Error(i(40));
                    return !!e3._reactRootContainer && (vl(function () {
                        eu(null, null, e3, false, function () {
                            e3._reactRootContainer = null, e3[Xr] = null;
                        });
                    }), true);
                };
            }, 935: (e2, t2, n2) => {
                !function e3() {
                    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function")
                        try {
                            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e3);
                        } catch (e4) {
                            console.error(e4);
                        }
                }(), e2.exports = n2(448);
            }, 408: (e2, t2, n2) => {
                var r = n2(418), a = 60103, o = 60106;
                t2.Fragment = 60107, t2.StrictMode = 60108, t2.Profiler = 60114;
                var i = 60109, s = 60110, l = 60112;
                t2.Suspense = 60113;
                var u = 60115, c = 60116;
                if (typeof Symbol == "function" && Symbol.for) {
                    var d = Symbol.for;
                    a = d("react.element"), o = d("react.portal"), t2.Fragment = d("react.fragment"), t2.StrictMode = d("react.strict_mode"), t2.Profiler = d("react.profiler"), i = d("react.provider"), s = d("react.context"), l = d("react.forward_ref"), t2.Suspense = d("react.suspense"), u = d("react.memo"), c = d("react.lazy");
                }
                var f = typeof Symbol == "function" && Symbol.iterator;
                function p(e3) {
                    for (var t3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + e3, n3 = 1; n3 < arguments.length; n3++)
                        t3 += "&args[]=" + encodeURIComponent(arguments[n3]);
                    return "Minified React error #" + e3 + "; visit " + t3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
                }
                var h = {
                    isMounted: function () {
                        return false;
                    }, enqueueForceUpdate: function () {
                    }, enqueueReplaceState: function () {
                    }, enqueueSetState: function () {
                    }
                }, m = {};
                function v(e3, t3, n3) {
                    this.props = e3, this.context = t3, this.refs = m, this.updater = n3 || h;
                }
                function g() {
                }
                function y(e3, t3, n3) {
                    this.props = e3, this.context = t3, this.refs = m, this.updater = n3 || h;
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function (e3, t3) {
                    if (typeof e3 != "object" && typeof e3 != "function" && e3 != null)
                        throw Error(p(85));
                    this.updater.enqueueSetState(this, e3, t3, "setState");
                }, v.prototype.forceUpdate = function (e3) {
                    this.updater.enqueueForceUpdate(this, e3, "forceUpdate");
                }, g.prototype = v.prototype;
                var b = y.prototype = new g();
                b.constructor = y, r(b, v.prototype), b.isPureReactComponent = true;
                var C = { current: null }, S = Object.prototype.hasOwnProperty, _ = { key: true, ref: true, __self: true, __source: true };
                function w(e3, t3, n3) {
                    var r2, o2 = {}, i2 = null, s2 = null;
                    if (t3 != null)
                        for (r2 in t3.ref !== void 0 && (s2 = t3.ref), t3.key !== void 0 && (i2 = "" + t3.key), t3)
                            S.call(t3, r2) && !_.hasOwnProperty(r2) && (o2[r2] = t3[r2]);
                    var l2 = arguments.length - 2;
                    if (l2 === 1)
                        o2.children = n3;
                    else if (1 < l2) {
                        for (var u2 = Array(l2), c2 = 0; c2 < l2; c2++)
                            u2[c2] = arguments[c2 + 2];
                        o2.children = u2;
                    }
                    if (e3 && e3.defaultProps)
                        for (r2 in l2 = e3.defaultProps)
                            o2[r2] === void 0 && (o2[r2] = l2[r2]);
                    return { $$typeof: a, type: e3, key: i2, ref: s2, props: o2, _owner: C.current };
                }
                function E(e3) {
                    return typeof e3 == "object" && e3 !== null && e3.$$typeof === a;
                }
                var L = /\/+/g;
                function k(e3, t3) {
                    return typeof e3 == "object" && e3 !== null && e3.key != null ? function (e4) {
                        var t4 = { "=": "=0", ":": "=2" };
                        return "$" + e4.replace(/[=:]/g, function (e5) {
                            return t4[e5];
                        });
                    }("" + e3.key) : t3.toString(36);
                }
                function R(e3, t3, n3, r2, i2) {
                    var s2 = typeof e3;
                    s2 !== "undefined" && s2 !== "boolean" || (e3 = null);
                    var l2 = false;
                    if (e3 === null)
                        l2 = true;
                    else
                        switch (s2) {
                            case "string":
                            case "number":
                                l2 = true;
                                break;
                            case "object":
                                switch (e3.$$typeof) {
                                    case a:
                                    case o:
                                        l2 = true;
                                }
                        }
                    if (l2)
                        return i2 = i2(l2 = e3), e3 = r2 === "" ? "." + k(l2, 0) : r2, Array.isArray(i2) ? (n3 = "", e3 != null && (n3 = e3.replace(L, "$&/") + "/"), R(i2, t3, n3, "", function (e4) {
                            return e4;
                        })) : i2 != null && (E(i2) && (i2 = function (e4, t4) {
                            return { $$typeof: a, type: e4.type, key: t4, ref: e4.ref, props: e4.props, _owner: e4._owner };
                        }(i2, n3 + (!i2.key || l2 && l2.key === i2.key ? "" : ("" + i2.key).replace(L, "$&/") + "/") + e3)), t3.push(i2)), 1;
                    if (l2 = 0, r2 = r2 === "" ? "." : r2 + ":", Array.isArray(e3))
                        for (var u2 = 0; u2 < e3.length; u2++) {
                            var c2 = r2 + k(s2 = e3[u2], u2);
                            l2 += R(s2, t3, n3, c2, i2);
                        }
                    else if (c2 = function (e4) {
                        return e4 === null || typeof e4 != "object" ? null : typeof (e4 = f && e4[f] || e4["@@iterator"]) == "function" ? e4 : null;
                    }(e3), typeof c2 == "function")
                        for (e3 = c2.call(e3), u2 = 0; !(s2 = e3.next()).done;)
                            l2 += R(s2 = s2.value, t3, n3, c2 = r2 + k(s2, u2++), i2);
                    else if (s2 === "object")
                        throw t3 = "" + e3, Error(p(31, t3 === "[object Object]" ? "object with keys {" + Object.keys(e3).join(", ") + "}" : t3));
                    return l2;
                }
                function x(e3, t3, n3) {
                    if (e3 == null)
                        return e3;
                    var r2 = [], a2 = 0;
                    return R(e3, r2, "", "", function (e4) {
                        return t3.call(n3, e4, a2++);
                    }), r2;
                }
                function N(e3) {
                    if (e3._status === -1) {
                        var t3 = e3._result;
                        t3 = t3(), e3._status = 0, e3._result = t3, t3.then(function (t4) {
                            e3._status === 0 && (t4 = t4.default, e3._status = 1, e3._result = t4);
                        }, function (t4) {
                            e3._status === 0 && (e3._status = 2, e3._result = t4);
                        });
                    }
                    if (e3._status === 1)
                        return e3._result;
                    throw e3._result;
                }
                var D = { current: null };
                function T() {
                    var e3 = D.current;
                    if (e3 === null)
                        throw Error(p(321));
                    return e3;
                }
                var P = { ReactCurrentDispatcher: D, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: C, IsSomeRendererActing: { current: false }, assign: r };
                t2.Children = {
                    map: x, forEach: function (e3, t3, n3) {
                        x(e3, function () {
                            t3.apply(this, arguments);
                        }, n3);
                    }, count: function (e3) {
                        var t3 = 0;
                        return x(e3, function () {
                            t3++;
                        }), t3;
                    }, toArray: function (e3) {
                        return x(e3, function (e4) {
                            return e4;
                        }) || [];
                    }, only: function (e3) {
                        if (!E(e3))
                            throw Error(p(143));
                        return e3;
                    }
                }, t2.Component = v, t2.PureComponent = y, t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, t2.cloneElement = function (e3, t3, n3) {
                    if (e3 == null)
                        throw Error(p(267, e3));
                    var o2 = r({}, e3.props), i2 = e3.key, s2 = e3.ref, l2 = e3._owner;
                    if (t3 != null) {
                        if (t3.ref !== void 0 && (s2 = t3.ref, l2 = C.current), t3.key !== void 0 && (i2 = "" + t3.key), e3.type && e3.type.defaultProps)
                            var u2 = e3.type.defaultProps;
                        for (c2 in t3)
                            S.call(t3, c2) && !_.hasOwnProperty(c2) && (o2[c2] = t3[c2] === void 0 && u2 !== void 0 ? u2[c2] : t3[c2]);
                    }
                    var c2 = arguments.length - 2;
                    if (c2 === 1)
                        o2.children = n3;
                    else if (1 < c2) {
                        u2 = Array(c2);
                        for (var d2 = 0; d2 < c2; d2++)
                            u2[d2] = arguments[d2 + 2];
                        o2.children = u2;
                    }
                    return { $$typeof: a, type: e3.type, key: i2, ref: s2, props: o2, _owner: l2 };
                }, t2.createContext = function (e3, t3) {
                    return t3 === void 0 && (t3 = null), (e3 = { $$typeof: s, _calculateChangedBits: t3, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: i, _context: e3 }, e3.Consumer = e3;
                }, t2.createElement = w, t2.createFactory = function (e3) {
                    var t3 = w.bind(null, e3);
                    return t3.type = e3, t3;
                }, t2.createRef = function () {
                    return { current: null };
                }, t2.forwardRef = function (e3) {
                    return { $$typeof: l, render: e3 };
                }, t2.isValidElement = E, t2.lazy = function (e3) {
                    return { $$typeof: c, _payload: { _status: -1, _result: e3 }, _init: N };
                }, t2.memo = function (e3, t3) {
                    return { $$typeof: u, type: e3, compare: t3 === void 0 ? null : t3 };
                }, t2.useCallback = function (e3, t3) {
                    return T().useCallback(e3, t3);
                }, t2.useContext = function (e3, t3) {
                    return T().useContext(e3, t3);
                }, t2.useDebugValue = function () {
                }, t2.useEffect = function (e3, t3) {
                    return T().useEffect(e3, t3);
                }, t2.useImperativeHandle = function (e3, t3, n3) {
                    return T().useImperativeHandle(e3, t3, n3);
                }, t2.useLayoutEffect = function (e3, t3) {
                    return T().useLayoutEffect(e3, t3);
                }, t2.useMemo = function (e3, t3) {
                    return T().useMemo(e3, t3);
                }, t2.useReducer = function (e3, t3, n3) {
                    return T().useReducer(e3, t3, n3);
                }, t2.useRef = function (e3) {
                    return T().useRef(e3);
                }, t2.useState = function (e3) {
                    return T().useState(e3);
                }, t2.version = "17.0.2";
            }, 294: (e2, t2, n2) => {
                e2.exports = n2(408);
            }, 666: (e2) => {
                var t2 = function (e3) {
                    var t3, n2 = Object.prototype, r = n2.hasOwnProperty, a = typeof Symbol == "function" ? Symbol : {}, o = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";
                    function l(e4, t4, n3) {
                        return Object.defineProperty(e4, t4, { value: n3, enumerable: true, configurable: true, writable: true }), e4[t4];
                    }
                    try {
                        l({}, "");
                    } catch (e4) {
                        l = function (e5, t4, n3) {
                            return e5[t4] = n3;
                        };
                    }
                    function u(e4, t4, n3, r2) {
                        var a2 = t4 && t4.prototype instanceof v ? t4 : v, o2 = Object.create(a2.prototype), i2 = new x(r2 || []);
                        return o2._invoke = function (e5, t5, n4) {
                            var r3 = d;
                            return function (a3, o3) {
                                if (r3 === p)
                                    throw new Error("Generator is already running");
                                if (r3 === h) {
                                    if (a3 === "throw")
                                        throw o3;
                                    return D();
                                }
                                for (n4.method = a3, n4.arg = o3; ;) {
                                    var i3 = n4.delegate;
                                    if (i3) {
                                        var s2 = L(i3, n4);
                                        if (s2) {
                                            if (s2 === m)
                                                continue;
                                            return s2;
                                        }
                                    }
                                    if (n4.method === "next")
                                        n4.sent = n4._sent = n4.arg;
                                    else if (n4.method === "throw") {
                                        if (r3 === d)
                                            throw r3 = h, n4.arg;
                                        n4.dispatchException(n4.arg);
                                    } else
                                        n4.method === "return" && n4.abrupt("return", n4.arg);
                                    r3 = p;
                                    var l2 = c(e5, t5, n4);
                                    if (l2.type === "normal") {
                                        if (r3 = n4.done ? h : f, l2.arg === m)
                                            continue;
                                        return { value: l2.arg, done: n4.done };
                                    }
                                    l2.type === "throw" && (r3 = h, n4.method = "throw", n4.arg = l2.arg);
                                }
                            };
                        }(e4, n3, i2), o2;
                    }
                    function c(e4, t4, n3) {
                        try {
                            return { type: "normal", arg: e4.call(t4, n3) };
                        } catch (e5) {
                            return { type: "throw", arg: e5 };
                        }
                    }
                    e3.wrap = u;
                    var d = "suspendedStart", f = "suspendedYield", p = "executing", h = "completed", m = {};
                    function v() {
                    }
                    function g() {
                    }
                    function y() {
                    }
                    var b = {};
                    l(b, o, function () {
                        return this;
                    });
                    var C = Object.getPrototypeOf, S = C && C(C(N([])));
                    S && S !== n2 && r.call(S, o) && (b = S);
                    var _ = y.prototype = v.prototype = Object.create(b);
                    function w(e4) {
                        ["next", "throw", "return"].forEach(function (t4) {
                            l(e4, t4, function (e5) {
                                return this._invoke(t4, e5);
                            });
                        });
                    }
                    function E(e4, t4) {
                        function n3(a3, o2, i2, s2) {
                            var l2 = c(e4[a3], e4, o2);
                            if (l2.type !== "throw") {
                                var u2 = l2.arg, d2 = u2.value;
                                return d2 && typeof d2 == "object" && r.call(d2, "__await") ? t4.resolve(d2.__await).then(function (e5) {
                                    n3("next", e5, i2, s2);
                                }, function (e5) {
                                    n3("throw", e5, i2, s2);
                                }) : t4.resolve(d2).then(function (e5) {
                                    u2.value = e5, i2(u2);
                                }, function (e5) {
                                    return n3("throw", e5, i2, s2);
                                });
                            }
                            s2(l2.arg);
                        }
                        var a2;
                        this._invoke = function (e5, r2) {
                            function o2() {
                                return new t4(function (t5, a3) {
                                    n3(e5, r2, t5, a3);
                                });
                            }
                            return a2 = a2 ? a2.then(o2, o2) : o2();
                        };
                    }
                    function L(e4, n3) {
                        var r2 = e4.iterator[n3.method];
                        if (r2 === t3) {
                            if (n3.delegate = null, n3.method === "throw") {
                                if (e4.iterator.return && (n3.method = "return", n3.arg = t3, L(e4, n3), n3.method === "throw"))
                                    return m;
                                n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a 'throw' method");
                            }
                            return m;
                        }
                        var a2 = c(r2, e4.iterator, n3.arg);
                        if (a2.type === "throw")
                            return n3.method = "throw", n3.arg = a2.arg, n3.delegate = null, m;
                        var o2 = a2.arg;
                        return o2 ? o2.done ? (n3[e4.resultName] = o2.value, n3.next = e4.nextLoc, n3.method !== "return" && (n3.method = "next", n3.arg = t3), n3.delegate = null, m) : o2 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, m);
                    }
                    function k(e4) {
                        var t4 = { tryLoc: e4[0] };
                        1 in e4 && (t4.catchLoc = e4[1]), 2 in e4 && (t4.finallyLoc = e4[2], t4.afterLoc = e4[3]), this.tryEntries.push(t4);
                    }
                    function R(e4) {
                        var t4 = e4.completion || {};
                        t4.type = "normal", delete t4.arg, e4.completion = t4;
                    }
                    function x(e4) {
                        this.tryEntries = [{ tryLoc: "root" }], e4.forEach(k, this), this.reset(true);
                    }
                    function N(e4) {
                        if (e4) {
                            var n3 = e4[o];
                            if (n3)
                                return n3.call(e4);
                            if (typeof e4.next == "function")
                                return e4;
                            if (!isNaN(e4.length)) {
                                var a2 = -1, i2 = function n4() {
                                    for (; ++a2 < e4.length;)
                                        if (r.call(e4, a2))
                                            return n4.value = e4[a2], n4.done = false, n4;
                                    return n4.value = t3, n4.done = true, n4;
                                };
                                return i2.next = i2;
                            }
                        }
                        return { next: D };
                    }
                    function D() {
                        return { value: t3, done: true };
                    }
                    return g.prototype = y, l(_, "constructor", y), l(y, "constructor", g), g.displayName = l(y, s, "GeneratorFunction"), e3.isGeneratorFunction = function (e4) {
                        var t4 = typeof e4 == "function" && e4.constructor;
                        return !!t4 && (t4 === g || (t4.displayName || t4.name) === "GeneratorFunction");
                    }, e3.mark = function (e4) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e4, y) : (e4.__proto__ = y, l(e4, s, "GeneratorFunction")), e4.prototype = Object.create(_), e4;
                    }, e3.awrap = function (e4) {
                        return { __await: e4 };
                    }, w(E.prototype), l(E.prototype, i, function () {
                        return this;
                    }), e3.AsyncIterator = E, e3.async = function (t4, n3, r2, a2, o2) {
                        o2 === void 0 && (o2 = Promise);
                        var i2 = new E(u(t4, n3, r2, a2), o2);
                        return e3.isGeneratorFunction(n3) ? i2 : i2.next().then(function (e4) {
                            return e4.done ? e4.value : i2.next();
                        });
                    }, w(_), l(_, s, "Generator"), l(_, o, function () {
                        return this;
                    }), l(_, "toString", function () {
                        return "[object Generator]";
                    }), e3.keys = function (e4) {
                        var t4 = [];
                        for (var n3 in e4)
                            t4.push(n3);
                        return t4.reverse(), function n4() {
                            for (; t4.length;) {
                                var r2 = t4.pop();
                                if (r2 in e4)
                                    return n4.value = r2, n4.done = false, n4;
                            }
                            return n4.done = true, n4;
                        };
                    }, e3.values = N, x.prototype = {
                        constructor: x, reset: function (e4) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = t3, this.done = false, this.delegate = null, this.method = "next", this.arg = t3, this.tryEntries.forEach(R), !e4)
                                for (var n3 in this)
                                    n3.charAt(0) === "t" && r.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = t3);
                        }, stop: function () {
                            this.done = true;
                            var e4 = this.tryEntries[0].completion;
                            if (e4.type === "throw")
                                throw e4.arg;
                            return this.rval;
                        }, dispatchException: function (e4) {
                            if (this.done)
                                throw e4;
                            var n3 = this;
                            function a2(r2, a3) {
                                return s2.type = "throw", s2.arg = e4, n3.next = r2, a3 && (n3.method = "next", n3.arg = t3), !!a3;
                            }
                            for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
                                var i2 = this.tryEntries[o2], s2 = i2.completion;
                                if (i2.tryLoc === "root")
                                    return a2("end");
                                if (i2.tryLoc <= this.prev) {
                                    var l2 = r.call(i2, "catchLoc"), u2 = r.call(i2, "finallyLoc");
                                    if (l2 && u2) {
                                        if (this.prev < i2.catchLoc)
                                            return a2(i2.catchLoc, true);
                                        if (this.prev < i2.finallyLoc)
                                            return a2(i2.finallyLoc);
                                    } else if (l2) {
                                        if (this.prev < i2.catchLoc)
                                            return a2(i2.catchLoc, true);
                                    } else {
                                        if (!u2)
                                            throw new Error("try statement without catch or finally");
                                        if (this.prev < i2.finallyLoc)
                                            return a2(i2.finallyLoc);
                                    }
                                }
                            }
                        }, abrupt: function (e4, t4) {
                            for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
                                var a2 = this.tryEntries[n3];
                                if (a2.tryLoc <= this.prev && r.call(a2, "finallyLoc") && this.prev < a2.finallyLoc) {
                                    var o2 = a2;
                                    break;
                                }
                            }
                            o2 && (e4 === "break" || e4 === "continue") && o2.tryLoc <= t4 && t4 <= o2.finallyLoc && (o2 = null);
                            var i2 = o2 ? o2.completion : {};
                            return i2.type = e4, i2.arg = t4, o2 ? (this.method = "next", this.next = o2.finallyLoc, m) : this.complete(i2);
                        }, complete: function (e4, t4) {
                            if (e4.type === "throw")
                                throw e4.arg;
                            return e4.type === "break" || e4.type === "continue" ? this.next = e4.arg : e4.type === "return" ? (this.rval = this.arg = e4.arg, this.method = "return", this.next = "end") : e4.type === "normal" && t4 && (this.next = t4), m;
                        }, finish: function (e4) {
                            for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
                                var n3 = this.tryEntries[t4];
                                if (n3.finallyLoc === e4)
                                    return this.complete(n3.completion, n3.afterLoc), R(n3), m;
                            }
                        }, catch: function (e4) {
                            for (var t4 = this.tryEntries.length - 1; t4 >= 0; --t4) {
                                var n3 = this.tryEntries[t4];
                                if (n3.tryLoc === e4) {
                                    var r2 = n3.completion;
                                    if (r2.type === "throw") {
                                        var a2 = r2.arg;
                                        R(n3);
                                    }
                                    return a2;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        }, delegateYield: function (e4, n3, r2) {
                            return this.delegate = { iterator: N(e4), resultName: n3, nextLoc: r2 }, this.method === "next" && (this.arg = t3), m;
                        }
                    }, e3;
                }(e2.exports);
                try {
                    regeneratorRuntime = t2;
                } catch (e3) {
                    typeof globalThis == "object" ? globalThis.regeneratorRuntime = t2 : Function("r", "regeneratorRuntime = r")(t2);
                }
            }, 53: (e2, t2) => {
                var n2, r, a, o;
                if (typeof performance == "object" && typeof performance.now == "function") {
                    var i = performance;
                    t2.unstable_now = function () {
                        return i.now();
                    };
                } else {
                    var s = Date, l = s.now();
                    t2.unstable_now = function () {
                        return s.now() - l;
                    };
                }
                if (typeof window == "undefined" || typeof MessageChannel != "function") {
                    var u = null, c = null, d = function () {
                        if (u !== null)
                            try {
                                var e3 = t2.unstable_now();
                                u(true, e3), u = null;
                            } catch (e4) {
                                throw setTimeout(d, 0), e4;
                            }
                    };
                    n2 = function (e3) {
                        u !== null ? setTimeout(n2, 0, e3) : (u = e3, setTimeout(d, 0));
                    }, r = function (e3, t3) {
                        c = setTimeout(e3, t3);
                    }, a = function () {
                        clearTimeout(c);
                    }, t2.unstable_shouldYield = function () {
                        return false;
                    }, o = t2.unstable_forceFrameRate = function () {
                    };
                } else {
                    var f = window.setTimeout, p = window.clearTimeout;
                    if (typeof console != "undefined") {
                        var h = window.cancelAnimationFrame;
                        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof h != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
                    }
                    var m = false, v = null, g = -1, y = 5, b = 0;
                    t2.unstable_shouldYield = function () {
                        return t2.unstable_now() >= b;
                    }, o = function () {
                    }, t2.unstable_forceFrameRate = function (e3) {
                        0 > e3 || 125 < e3 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : y = 0 < e3 ? Math.floor(1e3 / e3) : 5;
                    };
                    var C = new MessageChannel(), S = C.port2;
                    C.port1.onmessage = function () {
                        if (v !== null) {
                            var e3 = t2.unstable_now();
                            b = e3 + y;
                            try {
                                v(true, e3) ? S.postMessage(null) : (m = false, v = null);
                            } catch (e4) {
                                throw S.postMessage(null), e4;
                            }
                        } else
                            m = false;
                    }, n2 = function (e3) {
                        v = e3, m || (m = true, S.postMessage(null));
                    }, r = function (e3, n3) {
                        g = f(function () {
                            e3(t2.unstable_now());
                        }, n3);
                    }, a = function () {
                        p(g), g = -1;
                    };
                }
                function _(e3, t3) {
                    var n3 = e3.length;
                    e3.push(t3);
                    e:
                    for (; ;) {
                        var r2 = n3 - 1 >>> 1, a2 = e3[r2];
                        if (!(a2 !== void 0 && 0 < L(a2, t3)))
                            break e;
                        e3[r2] = t3, e3[n3] = a2, n3 = r2;
                    }
                }
                function w(e3) {
                    return (e3 = e3[0]) === void 0 ? null : e3;
                }
                function E(e3) {
                    var t3 = e3[0];
                    if (t3 !== void 0) {
                        var n3 = e3.pop();
                        if (n3 !== t3) {
                            e3[0] = n3;
                            e:
                            for (var r2 = 0, a2 = e3.length; r2 < a2;) {
                                var o2 = 2 * (r2 + 1) - 1, i2 = e3[o2], s2 = o2 + 1, l2 = e3[s2];
                                if (i2 !== void 0 && 0 > L(i2, n3))
                                    l2 !== void 0 && 0 > L(l2, i2) ? (e3[r2] = l2, e3[s2] = n3, r2 = s2) : (e3[r2] = i2, e3[o2] = n3, r2 = o2);
                                else {
                                    if (!(l2 !== void 0 && 0 > L(l2, n3)))
                                        break e;
                                    e3[r2] = l2, e3[s2] = n3, r2 = s2;
                                }
                            }
                        }
                        return t3;
                    }
                    return null;
                }
                function L(e3, t3) {
                    var n3 = e3.sortIndex - t3.sortIndex;
                    return n3 !== 0 ? n3 : e3.id - t3.id;
                }
                var k = [], R = [], x = 1, N = null, D = 3, T = false, P = false, M = false;
                function O(e3) {
                    for (var t3 = w(R); t3 !== null;) {
                        if (t3.callback === null)
                            E(R);
                        else {
                            if (!(t3.startTime <= e3))
                                break;
                            E(R), t3.sortIndex = t3.expirationTime, _(k, t3);
                        }
                        t3 = w(R);
                    }
                }
                function I(e3) {
                    if (M = false, O(e3), !P)
                        if (w(k) !== null)
                            P = true, n2(A);
                        else {
                            var t3 = w(R);
                            t3 !== null && r(I, t3.startTime - e3);
                        }
                }
                function A(e3, n3) {
                    P = false, M && (M = false, a()), T = true;
                    var o2 = D;
                    try {
                        for (O(n3), N = w(k); N !== null && (!(N.expirationTime > n3) || e3 && !t2.unstable_shouldYield());) {
                            var i2 = N.callback;
                            if (typeof i2 == "function") {
                                N.callback = null, D = N.priorityLevel;
                                var s2 = i2(N.expirationTime <= n3);
                                n3 = t2.unstable_now(), typeof s2 == "function" ? N.callback = s2 : N === w(k) && E(k), O(n3);
                            } else
                                E(k);
                            N = w(k);
                        }
                        if (N !== null)
                            var l2 = true;
                        else {
                            var u2 = w(R);
                            u2 !== null && r(I, u2.startTime - n3), l2 = false;
                        }
                        return l2;
                    } finally {
                        N = null, D = o2, T = false;
                    }
                }
                var F = o;
                t2.unstable_IdlePriority = 5, t2.unstable_ImmediatePriority = 1, t2.unstable_LowPriority = 4, t2.unstable_NormalPriority = 3, t2.unstable_Profiling = null, t2.unstable_UserBlockingPriority = 2, t2.unstable_cancelCallback = function (e3) {
                    e3.callback = null;
                }, t2.unstable_continueExecution = function () {
                    P || T || (P = true, n2(A));
                }, t2.unstable_getCurrentPriorityLevel = function () {
                    return D;
                }, t2.unstable_getFirstCallbackNode = function () {
                    return w(k);
                }, t2.unstable_next = function (e3) {
                    switch (D) {
                        case 1:
                        case 2:
                        case 3:
                            var t3 = 3;
                            break;
                        default:
                            t3 = D;
                    }
                    var n3 = D;
                    D = t3;
                    try {
                        return e3();
                    } finally {
                        D = n3;
                    }
                }, t2.unstable_pauseExecution = function () {
                }, t2.unstable_requestPaint = F, t2.unstable_runWithPriority = function (e3, t3) {
                    switch (e3) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e3 = 3;
                    }
                    var n3 = D;
                    D = e3;
                    try {
                        return t3();
                    } finally {
                        D = n3;
                    }
                }, t2.unstable_scheduleCallback = function (e3, o2, i2) {
                    var s2 = t2.unstable_now();
                    switch (i2 = typeof i2 == "object" && i2 !== null && typeof (i2 = i2.delay) == "number" && 0 < i2 ? s2 + i2 : s2, e3) {
                        case 1:
                            var l2 = -1;
                            break;
                        case 2:
                            l2 = 250;
                            break;
                        case 5:
                            l2 = 1073741823;
                            break;
                        case 4:
                            l2 = 1e4;
                            break;
                        default:
                            l2 = 5e3;
                    }
                    return e3 = { id: x++, callback: o2, priorityLevel: e3, startTime: i2, expirationTime: l2 = i2 + l2, sortIndex: -1 }, i2 > s2 ? (e3.sortIndex = i2, _(R, e3), w(k) === null && e3 === w(R) && (M ? a() : M = true, r(I, i2 - s2))) : (e3.sortIndex = l2, _(k, e3), P || T || (P = true, n2(A))), e3;
                }, t2.unstable_wrapCallback = function (e3) {
                    var t3 = D;
                    return function () {
                        var n3 = D;
                        D = t3;
                        try {
                            return e3.apply(this, arguments);
                        } finally {
                            D = n3;
                        }
                    };
                };
            }, 840: (e2, t2, n2) => {
                e2.exports = n2(53);
            }, 451: function (e2, t2, n2) {
                var r;
                !function (a, o) {
                    var i = "function", s = "undefined", l = "object", u = "string", c = "model", d = "name", f = "type", p = "vendor", h = "version", m = "architecture", v = "console", g = "mobile", y = "tablet", b = "smarttv", C = "wearable", S = "embedded", _ = {
                        extend: function (e3, t3) {
                            var n3 = {};
                            for (var r2 in e3)
                                t3[r2] && t3[r2].length % 2 == 0 ? n3[r2] = t3[r2].concat(e3[r2]) : n3[r2] = e3[r2];
                            return n3;
                        }, has: function (e3, t3) {
                            return typeof e3 === u && t3.toLowerCase().indexOf(e3.toLowerCase()) !== -1;
                        }, lowerize: function (e3) {
                            return e3.toLowerCase();
                        }, major: function (e3) {
                            return typeof e3 === u ? e3.replace(/[^\d\.]/g, "").split(".")[0] : o;
                        }, trim: function (e3, t3) {
                            return e3 = e3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof t3 === s ? e3 : e3.substring(0, 255);
                        }
                    }, w = {
                        rgx: function (e3, t3) {
                            for (var n3, r2, a2, s2, u2, c2, d2 = 0; d2 < t3.length && !u2;) {
                                var f2 = t3[d2], p2 = t3[d2 + 1];
                                for (n3 = r2 = 0; n3 < f2.length && !u2;)
                                    if (u2 = f2[n3++].exec(e3))
                                        for (a2 = 0; a2 < p2.length; a2++)
                                            c2 = u2[++r2], typeof (s2 = p2[a2]) === l && s2.length > 0 ? s2.length == 2 ? typeof s2[1] == i ? this[s2[0]] = s2[1].call(this, c2) : this[s2[0]] = s2[1] : s2.length == 3 ? typeof s2[1] !== i || s2[1].exec && s2[1].test ? this[s2[0]] = c2 ? c2.replace(s2[1], s2[2]) : o : this[s2[0]] = c2 ? s2[1].call(this, c2, s2[2]) : o : s2.length == 4 && (this[s2[0]] = c2 ? s2[3].call(this, c2.replace(s2[1], s2[2])) : o) : this[s2] = c2 || o;
                                d2 += 2;
                            }
                        }, str: function (e3, t3) {
                            for (var n3 in t3)
                                if (typeof t3[n3] === l && t3[n3].length > 0) {
                                    for (var r2 = 0; r2 < t3[n3].length; r2++)
                                        if (_.has(t3[n3][r2], e3))
                                            return n3 === "?" ? o : n3;
                                } else if (_.has(t3[n3], e3))
                                    return n3 === "?" ? o : n3;
                            return e3;
                        }
                    }, E = { browser: { oldSafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } }, oldEdge: { version: { 0.1: "12.", 21: "13.", 31: "14.", 39: "15.", 41: "16.", 42: "17.", 44: "18." } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } }, L = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [h, [d, "Chrome"]], [/(?:edge|edgios|edga|edg)\/([\w\.]+)/i], [h, [d, "Edge"]], [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i], [d, h], [/opios[\/\s]+([\w\.]+)/i], [h, [d, "Opera Mini"]], [/\sopr\/([\w\.]+)/i], [h, [d, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i], [d, h], [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [h, [d, "UCBrowser"]], [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i], [h, [d, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [h, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [h, [d, "Konqueror"]], [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i], [h, [d, "IE"]], [/yabrowser\/([\w\.]+)/i], [h, [d, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], h], [/focus\/([\w\.]+)/i], [h, [d, "Firefox Focus"]], [/opt\/([\w\.]+)/i], [h, [d, "Opera Touch"]], [/coc_coc_browser\/([\w\.]+)/i], [h, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [h, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [h, [d, "Opera Coast"]], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [h, [d, "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], [h, [d, "Firefox"]], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[d, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], h], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], h], [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i], [d, h], [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i], [d], [/;fbav\/([\w\.]+);/i], [h, [d, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[d, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i], [d, h], [/\bgsa\/([\w\.]+)\s.*safari\//i], [h, [d, "GSA"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [h, [d, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], h], [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i], [h, [d, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [d, h], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [h, [d, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [h, d], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [d, [h, w.str, E.browser.oldSafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [d, h], [/(navigator|netscape)\/([\w\.-]+)/i], [[d, "Netscape"], h], [/ile\svr;\srv:([\w\.]+)\).+firefox/i], [h, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [d, h]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[m, "amd64"]], [/(ia32(?=;))/i], [[m, _.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[m, "ia32"]], [/\b(aarch64|armv?8e?l?)\b/i], [[m, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[m, "armhf"]], [/windows\s(ce|mobile);\sppc;/i], [[m, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[m, /ower/, "", _.lowerize]], [/(sun4\w)[;\)]/i], [[m, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[m, _.lowerize]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i], [c, [p, "Samsung"], [f, y]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i], [c, [p, "Samsung"], [f, g]], [/\((ip(?:hone|od)[\s\w]*);/i], [c, [p, "Apple"], [f, g]], [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [p, "Apple"], [f, y]], [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i], [c, [p, "Huawei"], [f, y]], [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i], [c, [p, "Huawei"], [f, g]], [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[c, /_/g, " "], [p, "Xiaomi"], [f, g]], [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i], [[c, /_/g, " "], [p, "Xiaomi"], [f, y]], [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [c, [p, "OPPO"], [f, g]], [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i], [c, [p, "Vivo"], [f, g]], [/\s(rmx[12]\d{3})(?:\sbuild|;)/i], [c, [p, "Realme"], [f, g]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i], [c, [p, "Motorola"], [f, g]], [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [c, [p, "Motorola"], [f, y]], [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i], [c, [p, "LG"], [f, y]], [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i], [c, [p, "LG"], [f, g]], [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i], [c, [p, "Lenovo"], [f, y]], [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i], [[c, /_/g, " "], [p, "Nokia"], [f, g]], [/droid.+;\s(pixel\sc)[\s)]/i], [c, [p, "Google"], [f, y]], [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i], [c, [p, "Google"], [f, g]], [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [p, "Sony"], [f, g]], [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i], [[c, "Xperia Tablet"], [p, "Sony"], [f, y]], [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i], [c, [p, "OnePlus"], [f, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i], [c, [p, "Amazon"], [f, y]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[c, "Fire Phone"], [p, "Amazon"], [f, g]], [/\((playbook);[\w\s\),;-]+(rim)/i], [c, p, [f, y]], [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i], [c, [p, "BlackBerry"], [f, g]], [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i], [c, [p, "ASUS"], [f, y]], [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i], [c, [p, "ASUS"], [f, g]], [/(nexus\s9)/i], [c, [p, "HTC"], [f, y]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [p, [c, /_/g, " "], [f, g]], [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [c, [p, "Acer"], [f, y]], [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i], [c, [p, "Meizu"], [f, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [p, c, [f, g]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i], [p, c, [f, y]], [/\s(surface\sduo)\s/i], [c, [p, "Microsoft"], [f, y]], [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i], [c, [p, "Fairphone"], [f, g]], [/\s(u304aa)\sbuild/i], [c, [p, "AT&T"], [f, g]], [/sie-(\w*)/i], [c, [p, "Siemens"], [f, g]], [/[;\/]\s?(rct\w+)\sbuild/i], [c, [p, "RCA"], [f, y]], [/[;\/\s](venue[\d\s]{2,7})\sbuild/i], [c, [p, "Dell"], [f, y]], [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i], [c, [p, "Verizon"], [f, y]], [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i], [c, [p, "Barnes & Noble"], [f, y]], [/[;\/]\s(tm\d{3}\w+)\sbuild/i], [c, [p, "NuVision"], [f, y]], [/;\s(k88)\sbuild/i], [c, [p, "ZTE"], [f, y]], [/;\s(nx\d{3}j)\sbuild/i], [c, [p, "ZTE"], [f, g]], [/[;\/]\s?(gen\d{3})\sbuild.*49h/i], [c, [p, "Swiss"], [f, g]], [/[;\/]\s?(zur\d{3})\sbuild/i], [c, [p, "Swiss"], [f, y]], [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i], [c, [p, "Zeki"], [f, y]], [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i], [[p, "Dragon Touch"], c, [f, y]], [/[;\/]\s?(ns-?\w{0,9})\sbuild/i], [c, [p, "Insignia"], [f, y]], [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i], [c, [p, "NextBook"], [f, y]], [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i], [[p, "Voice"], c, [f, g]], [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i], [[p, "LvTel"], c, [f, g]], [/;\s(ph-1)\s/i], [c, [p, "Essential"], [f, g]], [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i], [c, [p, "Envizen"], [f, y]], [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i], [c, [p, "MachSpeed"], [f, y]], [/[;\/]\s?tu_(1491)\sbuild/i], [c, [p, "Rotor"], [f, y]], [/(shield[\w\s]+)\sbuild/i], [c, [p, "Nvidia"], [f, y]], [/(sprint)\s(\w+)/i], [p, c, [f, g]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [p, "Microsoft"], [f, g]], [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [p, "Zebra"], [f, y]], [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [p, "Zebra"], [f, g]], [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i], [p, c, [f, v]], [/droid.+;\s(shield)\sbuild/i], [c, [p, "Nvidia"], [f, v]], [/(playstation\s[345portablevi]+)/i], [c, [p, "Sony"], [f, v]], [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i], [c, [p, "Microsoft"], [f, v]], [/smart-tv.+(samsung)/i], [p, [f, b]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [p, "Samsung"], [f, b]], [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i], [[p, "LG"], [f, b]], [/(apple)\s?tv/i], [p, [c, "Apple TV"], [f, b]], [/crkey/i], [[c, "Chromecast"], [p, "Google"], [f, b]], [/droid.+aft([\w])(\sbuild\/|\))/i], [c, [p, "Amazon"], [f, b]], [/\(dtv[\);].+(aquos)/i], [c, [p, "Sharp"], [f, b]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[p, _.trim], [c, _.trim], [f, b]], [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i], [[f, b]], [/((pebble))app\/[\d\.]+\s/i], [p, c, [f, C]], [/droid.+;\s(glass)\s\d/i], [c, [p, "Google"], [f, C]], [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i], [c, [p, "Zebra"], [f, C]], [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i], [p, [f, S]], [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [c, [f, g]], [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [c, [f, y]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[f, _.lowerize]], [/(android[\w\.\s\-]{0,9});.+build/i], [c, [p, "Generic"]], [/(phone)/i], [[f, g]]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [h, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [h, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [d, h], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [h, d]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [d, h], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i], [d, [h, w.str, E.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[d, "Windows"], [h, w.str, E.os.windows.version]], [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i], [[h, /_/g, "."], [d, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i], [[d, "Mac OS"], [h, /_/g, "."]], [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i], [d, h], [/\(bb(10);/i], [h, [d, "BlackBerry"]], [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i], [h, [d, "Symbian"]], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [h, [d, "webOS"]], [/crkey\/([\d\.]+)/i], [h, [d, "Chromecast"]], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[d, "Chromium OS"], h], [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i], [d, h], [/(sunos)\s?([\w\.\d]*)/i], [[d, "Solaris"], h], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [d, h]] }, k = function (e3, t3) {
                        if (typeof e3 == "object" && (t3 = e3, e3 = o), !(this instanceof k))
                            return new k(e3, t3).getResult();
                        var n3 = e3 || (a !== void 0 && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : ""), r2 = t3 ? _.extend(L, t3) : L;
                        return this.getBrowser = function () {
                            var e4 = { name: o, version: o };
                            return w.rgx.call(e4, n3, r2.browser), e4.major = _.major(e4.version), e4;
                        }, this.getCPU = function () {
                            var e4 = { architecture: o };
                            return w.rgx.call(e4, n3, r2.cpu), e4;
                        }, this.getDevice = function () {
                            var e4 = { vendor: o, model: o, type: o };
                            return w.rgx.call(e4, n3, r2.device), e4;
                        }, this.getEngine = function () {
                            var e4 = { name: o, version: o };
                            return w.rgx.call(e4, n3, r2.engine), e4;
                        }, this.getOS = function () {
                            var e4 = { name: o, version: o };
                            return w.rgx.call(e4, n3, r2.os), e4;
                        }, this.getResult = function () {
                            return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
                        }, this.getUA = function () {
                            return n3;
                        }, this.setUA = function (e4) {
                            return n3 = typeof e4 === u && e4.length > 255 ? _.trim(e4, 255) : e4, this;
                        }, this.setUA(n3), this;
                    };
                    k.VERSION = "0.7.28", k.BROWSER = { NAME: d, MAJOR: "major", VERSION: h }, k.CPU = { ARCHITECTURE: m }, k.DEVICE = { MODEL: c, VENDOR: p, TYPE: f, CONSOLE: v, MOBILE: g, SMARTTV: b, TABLET: y, WEARABLE: C, EMBEDDED: S }, k.ENGINE = { NAME: d, VERSION: h }, k.OS = { NAME: d, VERSION: h }, typeof t2 !== s ? (e2.exports && (t2 = e2.exports = k), t2.UAParser = k) : (r = function () {
                        return k;
                    }.call(t2, n2, t2, e2)) === o || (e2.exports = r);
                    var R = a !== void 0 && (a.jQuery || a.Zepto);
                    if (R && !R.ua) {
                        var x = new k();
                        R.ua = x.getResult(), R.ua.get = function () {
                            return x.getUA();
                        }, R.ua.set = function (e3) {
                            x.setUA(e3);
                            var t3 = x.getResult();
                            for (var n3 in t3)
                                R.ua[n3] = t3[n3];
                        };
                    }
                }(typeof window == "object" ? window : this);
            }
        }, t = {};
        function n(r) {
            var a = t[r];
            if (a !== void 0)
                return a.exports;
            var o = t[r] = { id: r, exports: {} };
            return e[r].call(o.exports, o, o.exports, n), o.exports;
        }
        n.n = (e2) => {
            var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
            return n.d(t2, { a: t2 }), t2;
        }, n.d = (e2, t2) => {
            for (var r in t2)
                n.o(t2, r) && !n.o(e2, r) && Object.defineProperty(e2, r, { enumerable: true, get: t2[r] });
        }, n.g = function () {
            if (typeof globalThis == "object")
                return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e2) {
                if (typeof window == "object")
                    return window;
            }
        }(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n(618);
    })();
});
var main$1 = /* @__PURE__ */ getDefaultExportFromCjs(main);
export default main$1;
