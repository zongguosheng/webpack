function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function t(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function n(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), o = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./History")), i = "history.transit", u = function(u) {
    function a() {
        return e(this, a), t(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, {
            key: i,
            limit: 10
        }));
    }
    return n(a, o.default), r(a, [ {
        key: "equals",
        value: function(e, t) {
            return e.origin_name === t.origin_name && e.dest_name === t.dest_name;
        }
    } ]), a;
}();

exports.default = new u();