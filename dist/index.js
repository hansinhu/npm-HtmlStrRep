! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.HtmlStrReplace = e() : t.HtmlStrReplace = e()
}(window, function () {
  return function (t) {
    var e = {};

    function r(n) {
      if (e[n]) return e[n].exports;
      var o = e[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        configurable: !1,
        enumerable: !0,
        get: n
      })
    }, r.r = function (t) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return r.d(e, "a", e), e
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 0)
  }([function (t, e, r) {
    "use strict";
    r.r(e), r.d(e, "default", function () {
      return n
    });
    class n {
      constructor() {
        this.endObj = {
          tag: "",
          children: [],
          nextStr: null
        }, this.originStr = "", this.sFrom = "", this.sTo = ""
      }
      startRep(t, e, r = "") {
        if (this.originStr = t, this.sFrom = e, this.sTo = r, -1 === t.indexOf(e) || !e) return t;
        return this.endObj = this.strToObj(t), this.reGroup(this.endObj, r)
      }
      reGroup(t, e) {
        let r = "";
        if (t.tag) {
          let n = [];
          t.children.forEach(t => {
            n.push(this.reGroup(t, e))
          }), r += n.join(t.tag)
        } else r += this.replace(t.nextStr);
        return r
      }
      replace(t) {
        return t.split(this.sFrom).join(this.sTo)
      }
      strToObj(t) {
        let e = {
            tag: "",
            children: [],
            nextStr: null
          },
          r = this.deleHave(this.machTag(t));
        if (r) {
          let n = r[0];
          e.tag = n, e.nextStr = "";
          let o = t.split(n);
          o.forEach((t, r) => {
            e.children.push({
              tag: "",
              children: [],
              nextStr: o[r]
            }), t && this.deleHave(this.machTag(t)) && (e.children[r] = this.strToObj(t))
          })
        } else e.nextStr = t;
        return e
      }
      machTag(t) {
        return t.match(/<[^>]+>/g)
      }
      deleHave(t) {
        if (!t) return t;
        let e = [];
        for (let r of t) - 1 === e.indexOf(r) && e.push(r);
        return e
      }
    }
  }])
});