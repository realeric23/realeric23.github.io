/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Ui = u(() => {
    window.tram = (function (e) {
      function t(l, b) {
        var A = new f.Bare();
        return A.init(l, b);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      }
      function n(l) {
        var b = parseInt(l.slice(1), 16),
          A = (b >> 16) & 255,
          N = (b >> 8) & 255,
          w = 255 & b;
        return [A, N, w];
      }
      function i(l, b, A) {
        return (
          "#" + ((1 << 24) | (l << 16) | (b << 8) | A).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, b) {
        h("Type warning: Expected: [" + l + "] Got: [" + typeof b + "] " + b);
      }
      function s(l, b, A) {
        h("Units do not match [" + l + "]: " + b + ", " + A);
      }
      function c(l, b, A) {
        if ((b !== void 0 && (A = b), l === void 0)) return A;
        var N = A;
        return (
          xe.test(l) || !Me.test(l)
            ? (N = parseInt(l, 10))
            : Me.test(l) && (N = 1e3 * parseFloat(l)),
          0 > N && (N = 0),
          N === N ? N : A
        );
      }
      function h(l) {
        ae.debug && window && window.console.warn(l);
      }
      function I(l) {
        for (var b = -1, A = l ? l.length : 0, N = []; ++b < A; ) {
          var w = l[b];
          w && N.push(w);
        }
        return N;
      }
      var d = (function (l, b, A) {
          function N(se) {
            return typeof se == "object";
          }
          function w(se) {
            return typeof se == "function";
          }
          function q() {}
          function re(se, _e) {
            function Y() {
              var Fe = new fe();
              return w(Fe.init) && Fe.init.apply(Fe, arguments), Fe;
            }
            function fe() {}
            _e === A && ((_e = se), (se = Object)), (Y.Bare = fe);
            var de,
              we = (q[l] = se[l]),
              ot = (fe[l] = Y[l] = new q());
            return (
              (ot.constructor = Y),
              (Y.mixin = function (Fe) {
                return (fe[l] = Y[l] = re(Y, Fe)[l]), Y;
              }),
              (Y.open = function (Fe) {
                if (
                  ((de = {}),
                  w(Fe) ? (de = Fe.call(Y, ot, we, Y, se)) : N(Fe) && (de = Fe),
                  N(de))
                )
                  for (var wr in de) b.call(de, wr) && (ot[wr] = de[wr]);
                return w(ot.init) || (ot.init = se), Y;
              }),
              Y.open(_e)
            );
          }
          return re;
        })("prototype", {}.hasOwnProperty),
        T = {
          ease: [
            "ease",
            function (l, b, A, N) {
              var w = (l /= N) * l,
                q = w * l;
              return (
                b +
                A * (-2.75 * q * w + 11 * w * w + -15.5 * q + 8 * w + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, b, A, N) {
              var w = (l /= N) * l,
                q = w * l;
              return b + A * (-1 * q * w + 3 * w * w + -3 * q + 2 * w);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, b, A, N) {
              var w = (l /= N) * l,
                q = w * l;
              return (
                b +
                A * (0.3 * q * w + -1.6 * w * w + 2.2 * q + -1.8 * w + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, b, A, N) {
              var w = (l /= N) * l,
                q = w * l;
              return b + A * (2 * q * w + -5 * w * w + 2 * q + 2 * w);
            },
          ],
          linear: [
            "linear",
            function (l, b, A, N) {
              return (A * l) / N + b;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, b, A, N) {
              return A * (l /= N) * l + b;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, b, A, N) {
              return -A * (l /= N) * (l - 2) + b;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, b, A, N) {
              return (l /= N / 2) < 1
                ? (A / 2) * l * l + b
                : (-A / 2) * (--l * (l - 2) - 1) + b;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, b, A, N) {
              return A * (l /= N) * l * l + b;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, b, A, N) {
              return A * ((l = l / N - 1) * l * l + 1) + b;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, b, A, N) {
              return (l /= N / 2) < 1
                ? (A / 2) * l * l * l + b
                : (A / 2) * ((l -= 2) * l * l + 2) + b;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, b, A, N) {
              return A * (l /= N) * l * l * l + b;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, b, A, N) {
              return -A * ((l = l / N - 1) * l * l * l - 1) + b;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, b, A, N) {
              return (l /= N / 2) < 1
                ? (A / 2) * l * l * l * l + b
                : (-A / 2) * ((l -= 2) * l * l * l - 2) + b;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, b, A, N) {
              return A * (l /= N) * l * l * l * l + b;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, b, A, N) {
              return A * ((l = l / N - 1) * l * l * l * l + 1) + b;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, b, A, N) {
              return (l /= N / 2) < 1
                ? (A / 2) * l * l * l * l * l + b
                : (A / 2) * ((l -= 2) * l * l * l * l + 2) + b;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, b, A, N) {
              return -A * Math.cos((l / N) * (Math.PI / 2)) + A + b;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, b, A, N) {
              return A * Math.sin((l / N) * (Math.PI / 2)) + b;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, b, A, N) {
              return (-A / 2) * (Math.cos((Math.PI * l) / N) - 1) + b;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, b, A, N) {
              return l === 0 ? b : A * Math.pow(2, 10 * (l / N - 1)) + b;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, b, A, N) {
              return l === N
                ? b + A
                : A * (-Math.pow(2, (-10 * l) / N) + 1) + b;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, b, A, N) {
              return l === 0
                ? b
                : l === N
                ? b + A
                : (l /= N / 2) < 1
                ? (A / 2) * Math.pow(2, 10 * (l - 1)) + b
                : (A / 2) * (-Math.pow(2, -10 * --l) + 2) + b;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, b, A, N) {
              return -A * (Math.sqrt(1 - (l /= N) * l) - 1) + b;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, b, A, N) {
              return A * Math.sqrt(1 - (l = l / N - 1) * l) + b;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, b, A, N) {
              return (l /= N / 2) < 1
                ? (-A / 2) * (Math.sqrt(1 - l * l) - 1) + b
                : (A / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + b;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, b, A, N, w) {
              return (
                w === void 0 && (w = 1.70158),
                A * (l /= N) * l * ((w + 1) * l - w) + b
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, b, A, N, w) {
              return (
                w === void 0 && (w = 1.70158),
                A * ((l = l / N - 1) * l * ((w + 1) * l + w) + 1) + b
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, b, A, N, w) {
              return (
                w === void 0 && (w = 1.70158),
                (l /= N / 2) < 1
                  ? (A / 2) * l * l * (((w *= 1.525) + 1) * l - w) + b
                  : (A / 2) *
                      ((l -= 2) * l * (((w *= 1.525) + 1) * l + w) + 2) +
                    b
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        y = document,
        O = window,
        C = "bkwld-tram",
        R = /[\-\.0-9]/g,
        L = /[A-Z]/,
        S = "number",
        X = /^(rgb|#)/,
        M = /(em|cm|mm|in|pt|pc|px)$/,
        G = /(em|cm|mm|in|pt|pc|px|%)$/,
        B = /(deg|rad|turn)$/,
        $ = "unitless",
        J = /(all|none) 0s ease 0s/,
        oe = /^(width|height)$/,
        H = " ",
        P = y.createElement("a"),
        _ = ["Webkit", "Moz", "O", "ms"],
        D = ["-webkit-", "-moz-", "-o-", "-ms-"],
        x = function (l) {
          if (l in P.style) return { dom: l, css: l };
          var b,
            A,
            N = "",
            w = l.split("-");
          for (b = 0; b < w.length; b++)
            N += w[b].charAt(0).toUpperCase() + w[b].slice(1);
          for (b = 0; b < _.length; b++)
            if (((A = _[b] + N), A in P.style))
              return { dom: A, css: D[b] + l };
        },
        U = (t.support = {
          bind: Function.prototype.bind,
          transform: x("transform"),
          transition: x("transition"),
          backface: x("backface-visibility"),
          timing: x("transition-timing-function"),
        });
      if (U.transition) {
        var Q = U.timing.dom;
        if (((P.style[Q] = T["ease-in-back"][0]), !P.style[Q]))
          for (var ne in E) T[ne][0] = E[ne];
      }
      var W = (t.frame = (function () {
          var l =
            O.requestAnimationFrame ||
            O.webkitRequestAnimationFrame ||
            O.mozRequestAnimationFrame ||
            O.oRequestAnimationFrame ||
            O.msRequestAnimationFrame;
          return l && U.bind
            ? l.bind(O)
            : function (b) {
                O.setTimeout(b, 16);
              };
        })()),
        V = (t.now = (function () {
          var l = O.performance,
            b = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return b && U.bind
            ? b.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        v = d(function (l) {
          function b(ie, ve) {
            var Te = I(("" + ie).split(H)),
              ge = Te[0];
            ve = ve || {};
            var Ge = z[ge];
            if (!Ge) return h("Unsupported property: " + ge);
            if (!ve.weak || !this.props[ge]) {
              var Qe = Ge[0],
                ke = this.props[ge];
              return (
                ke || (ke = this.props[ge] = new Qe.Bare()),
                ke.init(this.$el, Te, Ge, ve),
                ke
              );
            }
          }
          function A(ie, ve, Te) {
            if (ie) {
              var ge = typeof ie;
              if (
                (ve ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                ge == "number" && ve)
              )
                return (
                  (this.timer = new te({
                    duration: ie,
                    context: this,
                    complete: q,
                  })),
                  void (this.active = !0)
                );
              if (ge == "string" && ve) {
                switch (ie) {
                  case "hide":
                    Y.call(this);
                    break;
                  case "stop":
                    re.call(this);
                    break;
                  case "redraw":
                    fe.call(this);
                    break;
                  default:
                    b.call(this, ie, Te && Te[1]);
                }
                return q.call(this);
              }
              if (ge == "function") return void ie.call(this, this);
              if (ge == "object") {
                var Ge = 0;
                ot.call(
                  this,
                  ie,
                  function (Ae, by) {
                    Ae.span > Ge && (Ge = Ae.span), Ae.stop(), Ae.animate(by);
                  },
                  function (Ae) {
                    "wait" in Ae && (Ge = c(Ae.wait, 0));
                  }
                ),
                  we.call(this),
                  Ge > 0 &&
                    ((this.timer = new te({ duration: Ge, context: this })),
                    (this.active = !0),
                    ve && (this.timer.complete = q));
                var Qe = this,
                  ke = !1,
                  dn = {};
                W(function () {
                  ot.call(Qe, ie, function (Ae) {
                    Ae.active && ((ke = !0), (dn[Ae.name] = Ae.nextStyle));
                  }),
                    ke && Qe.$el.css(dn);
                });
              }
            }
          }
          function N(ie) {
            (ie = c(ie, 0)),
              this.active
                ? this.queue.push({ options: ie })
                : ((this.timer = new te({
                    duration: ie,
                    context: this,
                    complete: q,
                  })),
                  (this.active = !0));
          }
          function w(ie) {
            return this.active
              ? (this.queue.push({ options: ie, args: arguments }),
                void (this.timer.complete = q))
              : h(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function q() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ie = this.queue.shift();
              A.call(this, ie.options, !0, ie.args);
            }
          }
          function re(ie) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ve;
            typeof ie == "string"
              ? ((ve = {}), (ve[ie] = 1))
              : (ve = typeof ie == "object" && ie != null ? ie : this.props),
              ot.call(this, ve, Fe),
              we.call(this);
          }
          function se(ie) {
            re.call(this, ie), ot.call(this, ie, wr, Iy);
          }
          function _e(ie) {
            typeof ie != "string" && (ie = "block"),
              (this.el.style.display = ie);
          }
          function Y() {
            re.call(this), (this.el.style.display = "none");
          }
          function fe() {
            this.el.offsetHeight;
          }
          function de() {
            re.call(this),
              e.removeData(this.el, C),
              (this.$el = this.el = null);
          }
          function we() {
            var ie,
              ve,
              Te = [];
            this.upstream && Te.push(this.upstream);
            for (ie in this.props)
              (ve = this.props[ie]), ve.active && Te.push(ve.string);
            (Te = Te.join(",")),
              this.style !== Te &&
                ((this.style = Te), (this.el.style[U.transition.dom] = Te));
          }
          function ot(ie, ve, Te) {
            var ge,
              Ge,
              Qe,
              ke,
              dn = ve !== Fe,
              Ae = {};
            for (ge in ie)
              (Qe = ie[ge]),
                ge in pe
                  ? (Ae.transform || (Ae.transform = {}),
                    (Ae.transform[ge] = Qe))
                  : (L.test(ge) && (ge = r(ge)),
                    ge in z ? (Ae[ge] = Qe) : (ke || (ke = {}), (ke[ge] = Qe)));
            for (ge in Ae) {
              if (((Qe = Ae[ge]), (Ge = this.props[ge]), !Ge)) {
                if (!dn) continue;
                Ge = b.call(this, ge);
              }
              ve.call(this, Ge, Qe);
            }
            Te && ke && Te.call(this, ke);
          }
          function Fe(ie) {
            ie.stop();
          }
          function wr(ie, ve) {
            ie.set(ve);
          }
          function Iy(ie) {
            this.$el.css(ie);
          }
          function Ye(ie, ve) {
            l[ie] = function () {
              return this.children
                ? Ty.call(this, ve, arguments)
                : (this.el && ve.apply(this, arguments), this);
            };
          }
          function Ty(ie, ve) {
            var Te,
              ge = this.children.length;
            for (Te = 0; ge > Te; Te++) ie.apply(this.children[Te], ve);
            return this;
          }
          (l.init = function (ie) {
            if (
              ((this.$el = e(ie)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ae.keepInherited && !ae.fallback)
            ) {
              var ve = j(this.el, "transition");
              ve && !J.test(ve) && (this.upstream = ve);
            }
            U.backface &&
              ae.hideBackface &&
              m(this.el, U.backface.css, "hidden");
          }),
            Ye("add", b),
            Ye("start", A),
            Ye("wait", N),
            Ye("then", w),
            Ye("next", q),
            Ye("stop", re),
            Ye("set", se),
            Ye("show", _e),
            Ye("hide", Y),
            Ye("redraw", fe),
            Ye("destroy", de);
        }),
        f = d(v, function (l) {
          function b(A, N) {
            var w = e.data(A, C) || e.data(A, C, new v.Bare());
            return w.el || w.init(A), N ? w.start(N) : w;
          }
          l.init = function (A, N) {
            var w = e(A);
            if (!w.length) return this;
            if (w.length === 1) return b(w[0], N);
            var q = [];
            return (
              w.each(function (re, se) {
                q.push(b(se, N));
              }),
              (this.children = q),
              this
            );
          };
        }),
        p = d(function (l) {
          function b() {
            var q = this.get();
            this.update("auto");
            var re = this.get();
            return this.update(q), re;
          }
          function A(q, re, se) {
            return re !== void 0 && (se = re), q in T ? q : se;
          }
          function N(q) {
            var re = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
            return (re ? i(re[1], re[2], re[3]) : q).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var w = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (q, re, se, _e) {
            (this.$el = q), (this.el = q[0]);
            var Y = re[0];
            se[2] && (Y = se[2]),
              ee[Y] && (Y = ee[Y]),
              (this.name = Y),
              (this.type = se[1]),
              (this.duration = c(re[1], this.duration, w.duration)),
              (this.ease = A(re[2], this.ease, w.ease)),
              (this.delay = c(re[3], this.delay, w.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = oe.test(this.name)),
              (this.unit = _e.unit || this.unit || ae.defaultUnit),
              (this.angle = _e.angle || this.angle || ae.defaultAngle),
              ae.fallback || _e.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    H +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? H + T[this.ease][0] : "") +
                    (this.delay ? H + this.delay + "ms" : "")));
          }),
            (l.set = function (q) {
              (q = this.convert(q, this.type)), this.update(q), this.redraw();
            }),
            (l.transition = function (q) {
              (this.active = !0),
                (q = this.convert(q, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  q == "auto" && (q = b.call(this))),
                (this.nextStyle = q);
            }),
            (l.fallback = function (q) {
              var re =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (q = this.convert(q, this.type)),
                this.auto &&
                  (re == "auto" && (re = this.convert(this.get(), this.type)),
                  q == "auto" && (q = b.call(this))),
                (this.tween = new Z({
                  from: re,
                  to: q,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return j(this.el, this.name);
            }),
            (l.update = function (q) {
              m(this.el, this.name, q);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                m(this.el, this.name, this.get()));
              var q = this.tween;
              q && q.context && q.destroy();
            }),
            (l.convert = function (q, re) {
              if (q == "auto" && this.auto) return q;
              var se,
                _e = typeof q == "number",
                Y = typeof q == "string";
              switch (re) {
                case S:
                  if (_e) return q;
                  if (Y && q.replace(R, "") === "") return +q;
                  se = "number(unitless)";
                  break;
                case X:
                  if (Y) {
                    if (q === "" && this.original) return this.original;
                    if (re.test(q))
                      return q.charAt(0) == "#" && q.length == 7 ? q : N(q);
                  }
                  se = "hex or rgb string";
                  break;
                case M:
                  if (_e) return q + this.unit;
                  if (Y && re.test(q)) return q;
                  se = "number(px) or string(unit)";
                  break;
                case G:
                  if (_e) return q + this.unit;
                  if (Y && re.test(q)) return q;
                  se = "number(px) or string(unit or %)";
                  break;
                case B:
                  if (_e) return q + this.angle;
                  if (Y && re.test(q)) return q;
                  se = "number(deg) or string(angle)";
                  break;
                case $:
                  if (_e || (Y && G.test(q))) return q;
                  se = "number(unitless) or string(unit or %)";
              }
              return a(se, q), q;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        g = d(p, function (l, b) {
          l.init = function () {
            b.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), X));
          };
        }),
        k = d(p, function (l, b) {
          (l.init = function () {
            b.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (A) {
              this.$el[this.name](A);
            });
        }),
        K = d(p, function (l, b) {
          function A(N, w) {
            var q, re, se, _e, Y;
            for (q in N)
              (_e = pe[q]),
                (se = _e[0]),
                (re = _e[1] || q),
                (Y = this.convert(N[q], se)),
                w.call(this, re, Y, se);
          }
          (l.init = function () {
            b.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                pe.perspective &&
                  ae.perspective &&
                  ((this.current.perspective = ae.perspective),
                  m(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (N) {
              A.call(this, N, function (w, q) {
                this.current[w] = q;
              }),
                m(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (N) {
              var w = this.values(N);
              this.tween = new he({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var q,
                re = {};
              for (q in this.current) re[q] = q in w ? w[q] : this.current[q];
              (this.active = !0), (this.nextStyle = this.style(re));
            }),
            (l.fallback = function (N) {
              var w = this.values(N);
              this.tween = new he({
                current: this.current,
                values: w,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              m(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (N) {
              var w,
                q = "";
              for (w in N) q += w + "(" + N[w] + ") ";
              return q;
            }),
            (l.values = function (N) {
              var w,
                q = {};
              return (
                A.call(this, N, function (re, se, _e) {
                  (q[re] = se),
                    this.current[re] === void 0 &&
                      ((w = 0),
                      ~re.indexOf("scale") && (w = 1),
                      (this.current[re] = this.convert(w, _e)));
                }),
                q
              );
            });
        }),
        Z = d(function (l) {
          function b(Y) {
            se.push(Y) === 1 && W(A);
          }
          function A() {
            var Y,
              fe,
              de,
              we = se.length;
            if (we)
              for (W(A), fe = V(), Y = we; Y--; )
                (de = se[Y]), de && de.render(fe);
          }
          function N(Y) {
            var fe,
              de = e.inArray(Y, se);
            de >= 0 &&
              ((fe = se.slice(de + 1)),
              (se.length = de),
              fe.length && (se = se.concat(fe)));
          }
          function w(Y) {
            return Math.round(Y * _e) / _e;
          }
          function q(Y, fe, de) {
            return i(
              Y[0] + de * (fe[0] - Y[0]),
              Y[1] + de * (fe[1] - Y[1]),
              Y[2] + de * (fe[2] - Y[2])
            );
          }
          var re = { ease: T.ease[1], from: 0, to: 1 };
          (l.init = function (Y) {
            (this.duration = Y.duration || 0), (this.delay = Y.delay || 0);
            var fe = Y.ease || re.ease;
            T[fe] && (fe = T[fe][1]),
              typeof fe != "function" && (fe = re.ease),
              (this.ease = fe),
              (this.update = Y.update || o),
              (this.complete = Y.complete || o),
              (this.context = Y.context || this),
              (this.name = Y.name);
            var de = Y.from,
              we = Y.to;
            de === void 0 && (de = re.from),
              we === void 0 && (we = re.to),
              (this.unit = Y.unit || ""),
              typeof de == "number" && typeof we == "number"
                ? ((this.begin = de), (this.change = we - de))
                : this.format(we, de),
              (this.value = this.begin + this.unit),
              (this.start = V()),
              Y.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = V()), (this.active = !0), b(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), N(this));
            }),
            (l.render = function (Y) {
              var fe,
                de = Y - this.start;
              if (this.delay) {
                if (de <= this.delay) return;
                de -= this.delay;
              }
              if (de < this.duration) {
                var we = this.ease(de, 0, 1, this.duration);
                return (
                  (fe = this.startRGB
                    ? q(this.startRGB, this.endRGB, we)
                    : w(this.begin + we * this.change)),
                  (this.value = fe + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (fe = this.endHex || this.begin + this.change),
                (this.value = fe + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (Y, fe) {
              if (((fe += ""), (Y += ""), Y.charAt(0) == "#"))
                return (
                  (this.startRGB = n(fe)),
                  (this.endRGB = n(Y)),
                  (this.endHex = Y),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var de = fe.replace(R, ""),
                  we = Y.replace(R, "");
                de !== we && s("tween", fe, Y), (this.unit = de);
              }
              (fe = parseFloat(fe)),
                (Y = parseFloat(Y)),
                (this.begin = this.value = fe),
                (this.change = Y - fe);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var se = [],
            _e = 1e3;
        }),
        te = d(Z, function (l) {
          (l.init = function (b) {
            (this.duration = b.duration || 0),
              (this.complete = b.complete || o),
              (this.context = b.context),
              this.play();
          }),
            (l.render = function (b) {
              var A = b - this.start;
              A < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        he = d(Z, function (l, b) {
          (l.init = function (A) {
            (this.context = A.context),
              (this.update = A.update),
              (this.tweens = []),
              (this.current = A.current);
            var N, w;
            for (N in A.values)
              (w = A.values[N]),
                this.current[N] !== w &&
                  this.tweens.push(
                    new Z({
                      name: N,
                      from: this.current[N],
                      to: w,
                      duration: A.duration,
                      delay: A.delay,
                      ease: A.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (A) {
              var N,
                w,
                q = this.tweens.length,
                re = !1;
              for (N = q; N--; )
                (w = this.tweens[N]),
                  w.context &&
                    (w.render(A), (this.current[w.name] = w.value), (re = !0));
              return re
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((b.destroy.call(this), this.tweens)) {
                var A,
                  N = this.tweens.length;
                for (A = N; A--; ) this.tweens[A].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !U.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!U.transition) return (ae.fallback = !0);
        ae.agentTests.push("(" + l + ")");
        var b = new RegExp(ae.agentTests.join("|"), "i");
        ae.fallback = b.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new Z(l);
        }),
        (t.delay = function (l, b, A) {
          return new te({ complete: b, duration: l, context: A });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var m = e.style,
        j = e.css,
        ee = { transform: U.transform && U.transform.css },
        z = {
          color: [g, X],
          background: [g, X, "background-color"],
          "outline-color": [g, X],
          "border-color": [g, X],
          "border-top-color": [g, X],
          "border-right-color": [g, X],
          "border-bottom-color": [g, X],
          "border-left-color": [g, X],
          "border-width": [p, M],
          "border-top-width": [p, M],
          "border-right-width": [p, M],
          "border-bottom-width": [p, M],
          "border-left-width": [p, M],
          "border-spacing": [p, M],
          "letter-spacing": [p, M],
          margin: [p, M],
          "margin-top": [p, M],
          "margin-right": [p, M],
          "margin-bottom": [p, M],
          "margin-left": [p, M],
          padding: [p, M],
          "padding-top": [p, M],
          "padding-right": [p, M],
          "padding-bottom": [p, M],
          "padding-left": [p, M],
          "outline-width": [p, M],
          opacity: [p, S],
          top: [p, G],
          right: [p, G],
          bottom: [p, G],
          left: [p, G],
          "font-size": [p, G],
          "text-indent": [p, G],
          "word-spacing": [p, G],
          width: [p, G],
          "min-width": [p, G],
          "max-width": [p, G],
          height: [p, G],
          "min-height": [p, G],
          "max-height": [p, G],
          "line-height": [p, $],
          "scroll-top": [k, S, "scrollTop"],
          "scroll-left": [k, S, "scrollLeft"],
        },
        pe = {};
      U.transform &&
        ((z.transform = [K]),
        (pe = {
          x: [G, "translateX"],
          y: [G, "translateY"],
          rotate: [B],
          rotateX: [B],
          rotateY: [B],
          scale: [S],
          scaleX: [S],
          scaleY: [S],
          skew: [B],
          skewX: [B],
          skewY: [B],
        })),
        U.transform &&
          U.backface &&
          ((pe.z = [G, "translateZ"]),
          (pe.rotateZ = [B]),
          (pe.scaleZ = [S]),
          (pe.perspective = [M]));
      var xe = /ms/,
        Me = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ss = u((wV, As) => {
    var Oy = window.$,
      wy = Ui() && Oy.tram;
    As.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        c = n.toString,
        h = n.hasOwnProperty,
        I = r.forEach,
        d = r.map,
        T = r.reduce,
        E = r.reduceRight,
        y = r.filter,
        O = r.every,
        C = r.some,
        R = r.indexOf,
        L = r.lastIndexOf,
        S = Array.isArray,
        X = Object.keys,
        M = i.bind,
        G =
          (e.each =
          e.forEach =
            function (_, D, x) {
              if (_ == null) return _;
              if (I && _.forEach === I) _.forEach(D, x);
              else if (_.length === +_.length) {
                for (var U = 0, Q = _.length; U < Q; U++)
                  if (D.call(x, _[U], U, _) === t) return;
              } else
                for (var ne = e.keys(_), U = 0, Q = ne.length; U < Q; U++)
                  if (D.call(x, _[ne[U]], ne[U], _) === t) return;
              return _;
            });
      (e.map = e.collect =
        function (_, D, x) {
          var U = [];
          return _ == null
            ? U
            : d && _.map === d
            ? _.map(D, x)
            : (G(_, function (Q, ne, W) {
                U.push(D.call(x, Q, ne, W));
              }),
              U);
        }),
        (e.find = e.detect =
          function (_, D, x) {
            var U;
            return (
              B(_, function (Q, ne, W) {
                if (D.call(x, Q, ne, W)) return (U = Q), !0;
              }),
              U
            );
          }),
        (e.filter = e.select =
          function (_, D, x) {
            var U = [];
            return _ == null
              ? U
              : y && _.filter === y
              ? _.filter(D, x)
              : (G(_, function (Q, ne, W) {
                  D.call(x, Q, ne, W) && U.push(Q);
                }),
                U);
          });
      var B =
        (e.some =
        e.any =
          function (_, D, x) {
            D || (D = e.identity);
            var U = !1;
            return _ == null
              ? U
              : C && _.some === C
              ? _.some(D, x)
              : (G(_, function (Q, ne, W) {
                  if (U || (U = D.call(x, Q, ne, W))) return t;
                }),
                !!U);
          });
      (e.contains = e.include =
        function (_, D) {
          return _ == null
            ? !1
            : R && _.indexOf === R
            ? _.indexOf(D) != -1
            : B(_, function (x) {
                return x === D;
              });
        }),
        (e.delay = function (_, D) {
          var x = a.call(arguments, 2);
          return setTimeout(function () {
            return _.apply(null, x);
          }, D);
        }),
        (e.defer = function (_) {
          return e.delay.apply(e, [_, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (_) {
          var D, x, U;
          return function () {
            D ||
              ((D = !0),
              (x = arguments),
              (U = this),
              wy.frame(function () {
                (D = !1), _.apply(U, x);
              }));
          };
        }),
        (e.debounce = function (_, D, x) {
          var U,
            Q,
            ne,
            W,
            V,
            v = function () {
              var f = e.now() - W;
              f < D
                ? (U = setTimeout(v, D - f))
                : ((U = null), x || ((V = _.apply(ne, Q)), (ne = Q = null)));
            };
          return function () {
            (ne = this), (Q = arguments), (W = e.now());
            var f = x && !U;
            return (
              U || (U = setTimeout(v, D)),
              f && ((V = _.apply(ne, Q)), (ne = Q = null)),
              V
            );
          };
        }),
        (e.defaults = function (_) {
          if (!e.isObject(_)) return _;
          for (var D = 1, x = arguments.length; D < x; D++) {
            var U = arguments[D];
            for (var Q in U) _[Q] === void 0 && (_[Q] = U[Q]);
          }
          return _;
        }),
        (e.keys = function (_) {
          if (!e.isObject(_)) return [];
          if (X) return X(_);
          var D = [];
          for (var x in _) e.has(_, x) && D.push(x);
          return D;
        }),
        (e.has = function (_, D) {
          return h.call(_, D);
        }),
        (e.isObject = function (_) {
          return _ === Object(_);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var $ = /(.)^/,
        J = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        oe = /\\|'|\r|\n|\u2028|\u2029/g,
        H = function (_) {
          return "\\" + J[_];
        },
        P = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (_, D, x) {
          !D && x && (D = x), (D = e.defaults({}, D, e.templateSettings));
          var U = RegExp(
              [
                (D.escape || $).source,
                (D.interpolate || $).source,
                (D.evaluate || $).source,
              ].join("|") + "|$",
              "g"
            ),
            Q = 0,
            ne = "__p+='";
          _.replace(U, function (f, p, g, k, K) {
            return (
              (ne += _.slice(Q, K).replace(oe, H)),
              (Q = K + f.length),
              p
                ? (ne +=
                    `'+
((__t=(` +
                    p +
                    `))==null?'':_.escape(__t))+
'`)
                : g
                ? (ne +=
                    `'+
((__t=(` +
                    g +
                    `))==null?'':__t)+
'`)
                : k &&
                  (ne +=
                    `';
` +
                    k +
                    `
__p+='`),
              f
            );
          }),
            (ne += `';
`);
          var W = D.variable;
          if (W) {
            if (!P.test(W))
              throw new Error("variable is not a bare identifier: " + W);
          } else
            (ne =
              `with(obj||{}){
` +
              ne +
              `}
`),
              (W = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ne +
            `return __p;
`;
          var V;
          try {
            V = new Function(D.variable || "obj", "_", ne);
          } catch (f) {
            throw ((f.source = ne), f);
          }
          var v = function (f) {
            return V.call(this, f, e);
          };
          return (
            (v.source =
              "function(" +
              W +
              `){
` +
              ne +
              "}"),
            v
          );
        }),
        e
      );
    })();
  });
  var Xe = u((AV, Ds) => {
    var Ee = {},
      zt = {},
      Yt = [],
      Vi = window.Webflow || [],
      Tt = window.jQuery,
      Ze = Tt(window),
      Ay = Tt(document),
      at = Tt.isFunction,
      $e = (Ee._ = Ss()),
      xs = (Ee.tram = Ui() && Tt.tram),
      vn = !1,
      ki = !1;
    xs.config.hideBackface = !1;
    xs.config.keepInherited = !0;
    Ee.define = function (e, t, r) {
      zt[e] && Ns(zt[e]);
      var n = (zt[e] = t(Tt, $e, r) || {});
      return Cs(n), n;
    };
    Ee.require = function (e) {
      return zt[e];
    };
    function Cs(e) {
      Ee.env() &&
        (at(e.design) && Ze.on("__wf_design", e.design),
        at(e.preview) && Ze.on("__wf_preview", e.preview)),
        at(e.destroy) && Ze.on("__wf_destroy", e.destroy),
        e.ready && at(e.ready) && Sy(e);
    }
    function Sy(e) {
      if (vn) {
        e.ready();
        return;
      }
      $e.contains(Yt, e.ready) || Yt.push(e.ready);
    }
    function Ns(e) {
      at(e.design) && Ze.off("__wf_design", e.design),
        at(e.preview) && Ze.off("__wf_preview", e.preview),
        at(e.destroy) && Ze.off("__wf_destroy", e.destroy),
        e.ready && at(e.ready) && Ry(e);
    }
    function Ry(e) {
      Yt = $e.filter(Yt, function (t) {
        return t !== e.ready;
      });
    }
    Ee.push = function (e) {
      if (vn) {
        at(e) && e();
        return;
      }
      Vi.push(e);
    };
    Ee.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var pn = navigator.userAgent.toLowerCase(),
      Ls = (Ee.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      xy = (Ee.env.chrome =
        /chrome/.test(pn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(pn.match(/chrome\/(\d+)\./)[1], 10)),
      Cy = (Ee.env.ios = /(ipod|iphone|ipad)/.test(pn));
    Ee.env.safari = /safari/.test(pn) && !xy && !Cy;
    var Wi;
    Ls &&
      Ay.on("touchstart mousedown", function (e) {
        Wi = e.target;
      });
    Ee.validClick = Ls
      ? function (e) {
          return e === Wi || Tt.contains(e, Wi);
        }
      : function () {
          return !0;
        };
    var qs = "resize.webflow orientationchange.webflow load.webflow",
      Ny = "scroll.webflow " + qs;
    Ee.resize = Bi(Ze, qs);
    Ee.scroll = Bi(Ze, Ny);
    Ee.redraw = Bi();
    function Bi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = $e.throttle(function (i) {
          $e.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && ($e.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = $e.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    Ee.location = function (e) {
      window.location = e;
    };
    Ee.env() && (Ee.location = function () {});
    Ee.ready = function () {
      (vn = !0), ki ? Ly() : $e.each(Yt, Rs), $e.each(Vi, Rs), Ee.resize.up();
    };
    function Rs(e) {
      at(e) && e();
    }
    function Ly() {
      (ki = !1), $e.each(zt, Cs);
    }
    var Dt;
    Ee.load = function (e) {
      Dt.then(e);
    };
    function Ps() {
      Dt && (Dt.reject(), Ze.off("load", Dt.resolve)),
        (Dt = new Tt.Deferred()),
        Ze.on("load", Dt.resolve);
    }
    Ee.destroy = function (e) {
      (e = e || {}),
        (ki = !0),
        Ze.triggerHandler("__wf_destroy"),
        e.domready != null && (vn = e.domready),
        $e.each(zt, Ns),
        Ee.resize.off(),
        Ee.scroll.off(),
        Ee.redraw.off(),
        (Yt = []),
        (Vi = []),
        Dt.state() === "pending" && Ps();
    };
    Tt(Ee.ready);
    Ps();
    Ds.exports = window.Webflow = Ee;
  });
  var Gs = u((SV, Fs) => {
    var Ms = Xe();
    Ms.define(
      "brand",
      (Fs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          c =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          h;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            y = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(y) && a.hostname !== y && (E = !0),
            E &&
              !s &&
              ((h = h || d()),
              T(),
              setTimeout(T, 500),
              e(r).off(c, I).on(c, I));
        };
        function I() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(h).attr("style", E ? "display: none !important;" : "");
        }
        function d() {
          return;
        }
        function T() {
          var E = i.children(o),
            y = E.length && E.get(0) === h,
            O = Ms.env("editor");
          if (y) {
            O && E.remove();
            return;
          }
          E.length && E.remove(), O || i.append(h);
        }
        return t;
      })
    );
  });
  var Us = u((RV, Xs) => {
    var Hi = Xe();
    Hi.define(
      "edit",
      (Xs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Hi.env("test") || Hi.env("frame")) && !r.fixture && !qy())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          c,
          h = r.load || T,
          I = !1;
        try {
          I =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        I
          ? h()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            h()
          : i.on(s, d).triggerHandler(s);
        function d() {
          c || (/\?edit/.test(a.hash) && h());
        }
        function T() {
          (c = !0),
            (window.WebflowEditor = !0),
            i.off(s, d),
            L(function (X) {
              e.ajax({
                url: R("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(X),
              });
            });
        }
        function E(X) {
          return function (M) {
            if (!M) {
              console.error("Could not load editor data");
              return;
            }
            (M.thirdPartyCookiesSupported = X),
              y(C(M.bugReporterScriptPath), function () {
                y(C(M.scriptPath), function () {
                  window.WebflowEditor(M);
                });
              });
          };
        }
        function y(X, M) {
          e.ajax({ type: "GET", url: X, dataType: "script", cache: !0 }).then(
            M,
            O
          );
        }
        function O(X, M, G) {
          throw (console.error("Could not load editor script: " + M), G);
        }
        function C(X) {
          return X.indexOf("//") >= 0
            ? X
            : R("https://editor-api.webflow.com" + X);
        }
        function R(X) {
          return X.replace(/([^:])\/\//g, "$1/");
        }
        function L(X) {
          var M = window.document.createElement("iframe");
          (M.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (M.style.display = "none"),
            (M.sandbox = "allow-scripts allow-same-origin");
          var G = function (B) {
            B.data === "WF_third_party_cookies_unsupported"
              ? (S(M, G), X(!1))
              : B.data === "WF_third_party_cookies_supported" &&
                (S(M, G), X(!0));
          };
          (M.onerror = function () {
            S(M, G), X(!1);
          }),
            window.addEventListener("message", G, !1),
            window.document.body.appendChild(M);
        }
        function S(X, M) {
          window.removeEventListener("message", M, !1), X.remove();
        }
        return n;
      })
    );
    function qy() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Vs = u((xV, Ws) => {
    var Py = Xe();
    Py.define(
      "focus-visible",
      (Ws.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(S) {
            return !!(
              S &&
              S !== document &&
              S.nodeName !== "HTML" &&
              S.nodeName !== "BODY" &&
              "classList" in S &&
              "contains" in S.classList
            );
          }
          function c(S) {
            var X = S.type,
              M = S.tagName;
            return !!(
              (M === "INPUT" && a[X] && !S.readOnly) ||
              (M === "TEXTAREA" && !S.readOnly) ||
              S.isContentEditable
            );
          }
          function h(S) {
            S.getAttribute("data-wf-focus-visible") ||
              S.setAttribute("data-wf-focus-visible", "true");
          }
          function I(S) {
            S.getAttribute("data-wf-focus-visible") &&
              S.removeAttribute("data-wf-focus-visible");
          }
          function d(S) {
            S.metaKey ||
              S.altKey ||
              S.ctrlKey ||
              (s(r.activeElement) && h(r.activeElement), (n = !0));
          }
          function T() {
            n = !1;
          }
          function E(S) {
            s(S.target) && (n || c(S.target)) && h(S.target);
          }
          function y(S) {
            s(S.target) &&
              S.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              I(S.target));
          }
          function O() {
            document.visibilityState === "hidden" && (i && (n = !0), C());
          }
          function C() {
            document.addEventListener("mousemove", L),
              document.addEventListener("mousedown", L),
              document.addEventListener("mouseup", L),
              document.addEventListener("pointermove", L),
              document.addEventListener("pointerdown", L),
              document.addEventListener("pointerup", L),
              document.addEventListener("touchmove", L),
              document.addEventListener("touchstart", L),
              document.addEventListener("touchend", L);
          }
          function R() {
            document.removeEventListener("mousemove", L),
              document.removeEventListener("mousedown", L),
              document.removeEventListener("mouseup", L),
              document.removeEventListener("pointermove", L),
              document.removeEventListener("pointerdown", L),
              document.removeEventListener("pointerup", L),
              document.removeEventListener("touchmove", L),
              document.removeEventListener("touchstart", L),
              document.removeEventListener("touchend", L);
          }
          function L(S) {
            (S.target.nodeName && S.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), R());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", T, !0),
            document.addEventListener("pointerdown", T, !0),
            document.addEventListener("touchstart", T, !0),
            document.addEventListener("visibilitychange", O, !0),
            C(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", y, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Hs = u((CV, Bs) => {
    var ks = Xe();
    ks.define(
      "focus",
      (Bs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            c = s.tagName;
          return (
            (/^a$/i.test(c) && s.href != null) ||
            (/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
            (/^input$/i.test(c) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(c) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(c) ||
            (/^video$/i.test(c) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            ks.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var zs = u((NV, Ks) => {
    "use strict";
    var ji = window.jQuery,
      st = {},
      hn = [],
      js = ".w-ix",
      gn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ji(t).triggerHandler(st.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ji(t).triggerHandler(st.types.OUTRO));
        },
      };
    st.triggers = {};
    st.types = { INTRO: "w-ix-intro" + js, OUTRO: "w-ix-outro" + js };
    st.init = function () {
      for (var e = hn.length, t = 0; t < e; t++) {
        var r = hn[t];
        r[0](0, r[1]);
      }
      (hn = []), ji.extend(st.triggers, gn);
    };
    st.async = function () {
      for (var e in gn) {
        var t = gn[e];
        gn.hasOwnProperty(e) &&
          (st.triggers[e] = function (r, n) {
            hn.push([t, n]);
          });
      }
    };
    st.async();
    Ks.exports = st;
  });
  var Ar = u((LV, $s) => {
    "use strict";
    var Ki = zs();
    function Ys(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var Dy = window.jQuery,
      En = {},
      Qs = ".w-ix",
      My = {
        reset: function (e, t) {
          Ki.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ki.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ki.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE");
        },
      };
    En.triggers = {};
    En.types = { INTRO: "w-ix-intro" + Qs, OUTRO: "w-ix-outro" + Qs };
    Dy.extend(En.triggers, My);
    $s.exports = En;
  });
  var Zs = u((qV, Et) => {
    function zi(e) {
      return (
        (Et.exports = zi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (Et.exports.__esModule = !0),
        (Et.exports.default = Et.exports),
        zi(e)
      );
    }
    (Et.exports = zi),
      (Et.exports.__esModule = !0),
      (Et.exports.default = Et.exports);
  });
  var Qt = u((PV, Sr) => {
    var Fy = Zs().default;
    function Js(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Js = function (i) {
        return i ? r : t;
      })(e);
    }
    function Gy(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (Fy(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = Js(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Sr.exports = Gy),
      (Sr.exports.__esModule = !0),
      (Sr.exports.default = Sr.exports);
  });
  var ut = u((DV, Rr) => {
    function Xy(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Rr.exports = Xy),
      (Rr.exports.__esModule = !0),
      (Rr.exports.default = Rr.exports);
  });
  var Ie = u((MV, eu) => {
    var _n = function (e) {
      return e && e.Math == Math && e;
    };
    eu.exports =
      _n(typeof globalThis == "object" && globalThis) ||
      _n(typeof window == "object" && window) ||
      _n(typeof self == "object" && self) ||
      _n(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var $t = u((FV, tu) => {
    tu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Mt = u((GV, ru) => {
    var Uy = $t();
    ru.exports = !Uy(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var mn = u((XV, nu) => {
    var xr = Function.prototype.call;
    nu.exports = xr.bind
      ? xr.bind(xr)
      : function () {
          return xr.apply(xr, arguments);
        };
  });
  var su = u((au) => {
    "use strict";
    var iu = {}.propertyIsEnumerable,
      ou = Object.getOwnPropertyDescriptor,
      Wy = ou && !iu.call({ 1: 2 }, 1);
    au.f = Wy
      ? function (t) {
          var r = ou(this, t);
          return !!r && r.enumerable;
        }
      : iu;
  });
  var Yi = u((WV, uu) => {
    uu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Je = u((VV, lu) => {
    var cu = Function.prototype,
      Qi = cu.bind,
      $i = cu.call,
      Vy = Qi && Qi.bind($i);
    lu.exports = Qi
      ? function (e) {
          return e && Vy($i, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return $i.apply(e, arguments);
            }
          );
        };
  });
  var pu = u((kV, du) => {
    var fu = Je(),
      ky = fu({}.toString),
      By = fu("".slice);
    du.exports = function (e) {
      return By(ky(e), 8, -1);
    };
  });
  var hu = u((BV, vu) => {
    var Hy = Ie(),
      jy = Je(),
      Ky = $t(),
      zy = pu(),
      Zi = Hy.Object,
      Yy = jy("".split);
    vu.exports = Ky(function () {
      return !Zi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return zy(e) == "String" ? Yy(e, "") : Zi(e);
        }
      : Zi;
  });
  var Ji = u((HV, gu) => {
    var Qy = Ie(),
      $y = Qy.TypeError;
    gu.exports = function (e) {
      if (e == null) throw $y("Can't call method on " + e);
      return e;
    };
  });
  var Cr = u((jV, Eu) => {
    var Zy = hu(),
      Jy = Ji();
    Eu.exports = function (e) {
      return Zy(Jy(e));
    };
  });
  var ct = u((KV, _u) => {
    _u.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Zt = u((zV, mu) => {
    var eI = ct();
    mu.exports = function (e) {
      return typeof e == "object" ? e !== null : eI(e);
    };
  });
  var Nr = u((YV, yu) => {
    var eo = Ie(),
      tI = ct(),
      rI = function (e) {
        return tI(e) ? e : void 0;
      };
    yu.exports = function (e, t) {
      return arguments.length < 2 ? rI(eo[e]) : eo[e] && eo[e][t];
    };
  });
  var Tu = u((QV, Iu) => {
    var nI = Je();
    Iu.exports = nI({}.isPrototypeOf);
  });
  var Ou = u(($V, bu) => {
    var iI = Nr();
    bu.exports = iI("navigator", "userAgent") || "";
  });
  var Nu = u((ZV, Cu) => {
    var xu = Ie(),
      to = Ou(),
      wu = xu.process,
      Au = xu.Deno,
      Su = (wu && wu.versions) || (Au && Au.version),
      Ru = Su && Su.v8,
      et,
      yn;
    Ru &&
      ((et = Ru.split(".")),
      (yn = et[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1])));
    !yn &&
      to &&
      ((et = to.match(/Edge\/(\d+)/)),
      (!et || et[1] >= 74) &&
        ((et = to.match(/Chrome\/(\d+)/)), et && (yn = +et[1])));
    Cu.exports = yn;
  });
  var ro = u((JV, qu) => {
    var Lu = Nu(),
      oI = $t();
    qu.exports =
      !!Object.getOwnPropertySymbols &&
      !oI(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Lu && Lu < 41)
        );
      });
  });
  var no = u((ek, Pu) => {
    var aI = ro();
    Pu.exports = aI && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var io = u((tk, Du) => {
    var sI = Ie(),
      uI = Nr(),
      cI = ct(),
      lI = Tu(),
      fI = no(),
      dI = sI.Object;
    Du.exports = fI
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = uI("Symbol");
          return cI(t) && lI(t.prototype, dI(e));
        };
  });
  var Fu = u((rk, Mu) => {
    var pI = Ie(),
      vI = pI.String;
    Mu.exports = function (e) {
      try {
        return vI(e);
      } catch {
        return "Object";
      }
    };
  });
  var Xu = u((nk, Gu) => {
    var hI = Ie(),
      gI = ct(),
      EI = Fu(),
      _I = hI.TypeError;
    Gu.exports = function (e) {
      if (gI(e)) return e;
      throw _I(EI(e) + " is not a function");
    };
  });
  var Wu = u((ik, Uu) => {
    var mI = Xu();
    Uu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : mI(r);
    };
  });
  var ku = u((ok, Vu) => {
    var yI = Ie(),
      oo = mn(),
      ao = ct(),
      so = Zt(),
      II = yI.TypeError;
    Vu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && ao((r = e.toString)) && !so((n = oo(r, e)))) ||
        (ao((r = e.valueOf)) && !so((n = oo(r, e)))) ||
        (t !== "string" && ao((r = e.toString)) && !so((n = oo(r, e))))
      )
        return n;
      throw II("Can't convert object to primitive value");
    };
  });
  var Hu = u((ak, Bu) => {
    Bu.exports = !1;
  });
  var In = u((sk, Ku) => {
    var ju = Ie(),
      TI = Object.defineProperty;
    Ku.exports = function (e, t) {
      try {
        TI(ju, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        ju[e] = t;
      }
      return t;
    };
  });
  var Tn = u((uk, Yu) => {
    var bI = Ie(),
      OI = In(),
      zu = "__core-js_shared__",
      wI = bI[zu] || OI(zu, {});
    Yu.exports = wI;
  });
  var uo = u((ck, $u) => {
    var AI = Hu(),
      Qu = Tn();
    ($u.exports = function (e, t) {
      return Qu[e] || (Qu[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: AI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var Ju = u((lk, Zu) => {
    var SI = Ie(),
      RI = Ji(),
      xI = SI.Object;
    Zu.exports = function (e) {
      return xI(RI(e));
    };
  });
  var bt = u((fk, ec) => {
    var CI = Je(),
      NI = Ju(),
      LI = CI({}.hasOwnProperty);
    ec.exports =
      Object.hasOwn ||
      function (t, r) {
        return LI(NI(t), r);
      };
  });
  var co = u((dk, tc) => {
    var qI = Je(),
      PI = 0,
      DI = Math.random(),
      MI = qI((1).toString);
    tc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + MI(++PI + DI, 36);
    };
  });
  var lo = u((pk, ac) => {
    var FI = Ie(),
      GI = uo(),
      rc = bt(),
      XI = co(),
      nc = ro(),
      oc = no(),
      Jt = GI("wks"),
      Ft = FI.Symbol,
      ic = Ft && Ft.for,
      UI = oc ? Ft : (Ft && Ft.withoutSetter) || XI;
    ac.exports = function (e) {
      if (!rc(Jt, e) || !(nc || typeof Jt[e] == "string")) {
        var t = "Symbol." + e;
        nc && rc(Ft, e)
          ? (Jt[e] = Ft[e])
          : oc && ic
          ? (Jt[e] = ic(t))
          : (Jt[e] = UI(t));
      }
      return Jt[e];
    };
  });
  var lc = u((vk, cc) => {
    var WI = Ie(),
      VI = mn(),
      sc = Zt(),
      uc = io(),
      kI = Wu(),
      BI = ku(),
      HI = lo(),
      jI = WI.TypeError,
      KI = HI("toPrimitive");
    cc.exports = function (e, t) {
      if (!sc(e) || uc(e)) return e;
      var r = kI(e, KI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = VI(r, e, t)), !sc(n) || uc(n))
        )
          return n;
        throw jI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), BI(e, t);
    };
  });
  var fo = u((hk, fc) => {
    var zI = lc(),
      YI = io();
    fc.exports = function (e) {
      var t = zI(e, "string");
      return YI(t) ? t : t + "";
    };
  });
  var vo = u((gk, pc) => {
    var QI = Ie(),
      dc = Zt(),
      po = QI.document,
      $I = dc(po) && dc(po.createElement);
    pc.exports = function (e) {
      return $I ? po.createElement(e) : {};
    };
  });
  var ho = u((Ek, vc) => {
    var ZI = Mt(),
      JI = $t(),
      eT = vo();
    vc.exports =
      !ZI &&
      !JI(function () {
        return (
          Object.defineProperty(eT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var go = u((gc) => {
    var tT = Mt(),
      rT = mn(),
      nT = su(),
      iT = Yi(),
      oT = Cr(),
      aT = fo(),
      sT = bt(),
      uT = ho(),
      hc = Object.getOwnPropertyDescriptor;
    gc.f = tT
      ? hc
      : function (t, r) {
          if (((t = oT(t)), (r = aT(r)), uT))
            try {
              return hc(t, r);
            } catch {}
          if (sT(t, r)) return iT(!rT(nT.f, t, r), t[r]);
        };
  });
  var Lr = u((mk, _c) => {
    var Ec = Ie(),
      cT = Zt(),
      lT = Ec.String,
      fT = Ec.TypeError;
    _c.exports = function (e) {
      if (cT(e)) return e;
      throw fT(lT(e) + " is not an object");
    };
  });
  var qr = u((Ic) => {
    var dT = Ie(),
      pT = Mt(),
      vT = ho(),
      mc = Lr(),
      hT = fo(),
      gT = dT.TypeError,
      yc = Object.defineProperty;
    Ic.f = pT
      ? yc
      : function (t, r, n) {
          if ((mc(t), (r = hT(r)), mc(n), vT))
            try {
              return yc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw gT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var bn = u((Ik, Tc) => {
    var ET = Mt(),
      _T = qr(),
      mT = Yi();
    Tc.exports = ET
      ? function (e, t, r) {
          return _T.f(e, t, mT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var _o = u((Tk, bc) => {
    var yT = Je(),
      IT = ct(),
      Eo = Tn(),
      TT = yT(Function.toString);
    IT(Eo.inspectSource) ||
      (Eo.inspectSource = function (e) {
        return TT(e);
      });
    bc.exports = Eo.inspectSource;
  });
  var Ac = u((bk, wc) => {
    var bT = Ie(),
      OT = ct(),
      wT = _o(),
      Oc = bT.WeakMap;
    wc.exports = OT(Oc) && /native code/.test(wT(Oc));
  });
  var mo = u((Ok, Rc) => {
    var AT = uo(),
      ST = co(),
      Sc = AT("keys");
    Rc.exports = function (e) {
      return Sc[e] || (Sc[e] = ST(e));
    };
  });
  var On = u((wk, xc) => {
    xc.exports = {};
  });
  var Dc = u((Ak, Pc) => {
    var RT = Ac(),
      qc = Ie(),
      yo = Je(),
      xT = Zt(),
      CT = bn(),
      Io = bt(),
      To = Tn(),
      NT = mo(),
      LT = On(),
      Cc = "Object already initialized",
      Oo = qc.TypeError,
      qT = qc.WeakMap,
      wn,
      Pr,
      An,
      PT = function (e) {
        return An(e) ? Pr(e) : wn(e, {});
      },
      DT = function (e) {
        return function (t) {
          var r;
          if (!xT(t) || (r = Pr(t)).type !== e)
            throw Oo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    RT || To.state
      ? ((Ot = To.state || (To.state = new qT())),
        (Nc = yo(Ot.get)),
        (bo = yo(Ot.has)),
        (Lc = yo(Ot.set)),
        (wn = function (e, t) {
          if (bo(Ot, e)) throw new Oo(Cc);
          return (t.facade = e), Lc(Ot, e, t), t;
        }),
        (Pr = function (e) {
          return Nc(Ot, e) || {};
        }),
        (An = function (e) {
          return bo(Ot, e);
        }))
      : ((Gt = NT("state")),
        (LT[Gt] = !0),
        (wn = function (e, t) {
          if (Io(e, Gt)) throw new Oo(Cc);
          return (t.facade = e), CT(e, Gt, t), t;
        }),
        (Pr = function (e) {
          return Io(e, Gt) ? e[Gt] : {};
        }),
        (An = function (e) {
          return Io(e, Gt);
        }));
    var Ot, Nc, bo, Lc, Gt;
    Pc.exports = { set: wn, get: Pr, has: An, enforce: PT, getterFor: DT };
  });
  var Gc = u((Sk, Fc) => {
    var wo = Mt(),
      MT = bt(),
      Mc = Function.prototype,
      FT = wo && Object.getOwnPropertyDescriptor,
      Ao = MT(Mc, "name"),
      GT = Ao && function () {}.name === "something",
      XT = Ao && (!wo || (wo && FT(Mc, "name").configurable));
    Fc.exports = { EXISTS: Ao, PROPER: GT, CONFIGURABLE: XT };
  });
  var kc = u((Rk, Vc) => {
    var UT = Ie(),
      Xc = ct(),
      WT = bt(),
      Uc = bn(),
      VT = In(),
      kT = _o(),
      Wc = Dc(),
      BT = Gc().CONFIGURABLE,
      HT = Wc.get,
      jT = Wc.enforce,
      KT = String(String).split("String");
    (Vc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        c;
      if (
        (Xc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!WT(r, "name") || (BT && r.name !== s)) && Uc(r, "name", s),
          (c = jT(r)),
          c.source || (c.source = KT.join(typeof s == "string" ? s : ""))),
        e === UT)
      ) {
        o ? (e[t] = r) : VT(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Uc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Xc(this) && HT(this).source) || kT(this);
    });
  });
  var So = u((xk, Bc) => {
    var zT = Math.ceil,
      YT = Math.floor;
    Bc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? YT : zT)(t);
    };
  });
  var jc = u((Ck, Hc) => {
    var QT = So(),
      $T = Math.max,
      ZT = Math.min;
    Hc.exports = function (e, t) {
      var r = QT(e);
      return r < 0 ? $T(r + t, 0) : ZT(r, t);
    };
  });
  var zc = u((Nk, Kc) => {
    var JT = So(),
      eb = Math.min;
    Kc.exports = function (e) {
      return e > 0 ? eb(JT(e), 9007199254740991) : 0;
    };
  });
  var Qc = u((Lk, Yc) => {
    var tb = zc();
    Yc.exports = function (e) {
      return tb(e.length);
    };
  });
  var Ro = u((qk, Zc) => {
    var rb = Cr(),
      nb = jc(),
      ib = Qc(),
      $c = function (e) {
        return function (t, r, n) {
          var i = rb(t),
            o = ib(i),
            a = nb(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    Zc.exports = { includes: $c(!0), indexOf: $c(!1) };
  });
  var Co = u((Pk, el) => {
    var ob = Je(),
      xo = bt(),
      ab = Cr(),
      sb = Ro().indexOf,
      ub = On(),
      Jc = ob([].push);
    el.exports = function (e, t) {
      var r = ab(e),
        n = 0,
        i = [],
        o;
      for (o in r) !xo(ub, o) && xo(r, o) && Jc(i, o);
      for (; t.length > n; ) xo(r, (o = t[n++])) && (~sb(i, o) || Jc(i, o));
      return i;
    };
  });
  var Sn = u((Dk, tl) => {
    tl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var nl = u((rl) => {
    var cb = Co(),
      lb = Sn(),
      fb = lb.concat("length", "prototype");
    rl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return cb(t, fb);
      };
  });
  var ol = u((il) => {
    il.f = Object.getOwnPropertySymbols;
  });
  var sl = u((Gk, al) => {
    var db = Nr(),
      pb = Je(),
      vb = nl(),
      hb = ol(),
      gb = Lr(),
      Eb = pb([].concat);
    al.exports =
      db("Reflect", "ownKeys") ||
      function (t) {
        var r = vb.f(gb(t)),
          n = hb.f;
        return n ? Eb(r, n(t)) : r;
      };
  });
  var cl = u((Xk, ul) => {
    var _b = bt(),
      mb = sl(),
      yb = go(),
      Ib = qr();
    ul.exports = function (e, t) {
      for (var r = mb(t), n = Ib.f, i = yb.f, o = 0; o < r.length; o++) {
        var a = r[o];
        _b(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var fl = u((Uk, ll) => {
    var Tb = $t(),
      bb = ct(),
      Ob = /#|\.prototype\./,
      Dr = function (e, t) {
        var r = Ab[wb(e)];
        return r == Rb ? !0 : r == Sb ? !1 : bb(t) ? Tb(t) : !!t;
      },
      wb = (Dr.normalize = function (e) {
        return String(e).replace(Ob, ".").toLowerCase();
      }),
      Ab = (Dr.data = {}),
      Sb = (Dr.NATIVE = "N"),
      Rb = (Dr.POLYFILL = "P");
    ll.exports = Dr;
  });
  var pl = u((Wk, dl) => {
    var No = Ie(),
      xb = go().f,
      Cb = bn(),
      Nb = kc(),
      Lb = In(),
      qb = cl(),
      Pb = fl();
    dl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        h,
        I;
      if (
        (n
          ? (a = No)
          : i
          ? (a = No[r] || Lb(r, {}))
          : (a = (No[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((h = t[s]),
            e.noTargetGet ? ((I = xb(a, s)), (c = I && I.value)) : (c = a[s]),
            (o = Pb(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && c !== void 0)
          ) {
            if (typeof h == typeof c) continue;
            qb(h, c);
          }
          (e.sham || (c && c.sham)) && Cb(h, "sham", !0), Nb(a, s, h, e);
        }
    };
  });
  var hl = u((Vk, vl) => {
    var Db = Co(),
      Mb = Sn();
    vl.exports =
      Object.keys ||
      function (t) {
        return Db(t, Mb);
      };
  });
  var El = u((kk, gl) => {
    var Fb = Mt(),
      Gb = qr(),
      Xb = Lr(),
      Ub = Cr(),
      Wb = hl();
    gl.exports = Fb
      ? Object.defineProperties
      : function (t, r) {
          Xb(t);
          for (var n = Ub(r), i = Wb(r), o = i.length, a = 0, s; o > a; )
            Gb.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var ml = u((Bk, _l) => {
    var Vb = Nr();
    _l.exports = Vb("document", "documentElement");
  });
  var Sl = u((Hk, Al) => {
    var kb = Lr(),
      Bb = El(),
      yl = Sn(),
      Hb = On(),
      jb = ml(),
      Kb = vo(),
      zb = mo(),
      Il = ">",
      Tl = "<",
      qo = "prototype",
      Po = "script",
      Ol = zb("IE_PROTO"),
      Lo = function () {},
      wl = function (e) {
        return Tl + Po + Il + e + Tl + "/" + Po + Il;
      },
      bl = function (e) {
        e.write(wl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      Yb = function () {
        var e = Kb("iframe"),
          t = "java" + Po + ":",
          r;
        return (
          (e.style.display = "none"),
          jb.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(wl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Rn,
      xn = function () {
        try {
          Rn = new ActiveXObject("htmlfile");
        } catch {}
        xn =
          typeof document < "u"
            ? document.domain && Rn
              ? bl(Rn)
              : Yb()
            : bl(Rn);
        for (var e = yl.length; e--; ) delete xn[qo][yl[e]];
        return xn();
      };
    Hb[Ol] = !0;
    Al.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Lo[qo] = kb(t)), (n = new Lo()), (Lo[qo] = null), (n[Ol] = t))
            : (n = xn()),
          r === void 0 ? n : Bb(n, r)
        );
      };
  });
  var xl = u((jk, Rl) => {
    var Qb = lo(),
      $b = Sl(),
      Zb = qr(),
      Do = Qb("unscopables"),
      Mo = Array.prototype;
    Mo[Do] == null && Zb.f(Mo, Do, { configurable: !0, value: $b(null) });
    Rl.exports = function (e) {
      Mo[Do][e] = !0;
    };
  });
  var Cl = u(() => {
    "use strict";
    var Jb = pl(),
      eO = Ro().includes,
      tO = xl();
    Jb(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return eO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    tO("includes");
  });
  var Ll = u((Yk, Nl) => {
    var rO = Ie(),
      nO = Je();
    Nl.exports = function (e, t) {
      return nO(rO[e].prototype[t]);
    };
  });
  var Pl = u((Qk, ql) => {
    Cl();
    var iO = Ll();
    ql.exports = iO("Array", "includes");
  });
  var Ml = u(($k, Dl) => {
    var oO = Pl();
    Dl.exports = oO;
  });
  var Gl = u((Zk, Fl) => {
    var aO = Ml();
    Fl.exports = aO;
  });
  var Fo = u((Jk, Xl) => {
    var sO =
      typeof global == "object" && global && global.Object === Object && global;
    Xl.exports = sO;
  });
  var tt = u((eB, Ul) => {
    var uO = Fo(),
      cO = typeof self == "object" && self && self.Object === Object && self,
      lO = uO || cO || Function("return this")();
    Ul.exports = lO;
  });
  var er = u((tB, Wl) => {
    var fO = tt(),
      dO = fO.Symbol;
    Wl.exports = dO;
  });
  var Hl = u((rB, Bl) => {
    var Vl = er(),
      kl = Object.prototype,
      pO = kl.hasOwnProperty,
      vO = kl.toString,
      Mr = Vl ? Vl.toStringTag : void 0;
    function hO(e) {
      var t = pO.call(e, Mr),
        r = e[Mr];
      try {
        e[Mr] = void 0;
        var n = !0;
      } catch {}
      var i = vO.call(e);
      return n && (t ? (e[Mr] = r) : delete e[Mr]), i;
    }
    Bl.exports = hO;
  });
  var Kl = u((nB, jl) => {
    var gO = Object.prototype,
      EO = gO.toString;
    function _O(e) {
      return EO.call(e);
    }
    jl.exports = _O;
  });
  var wt = u((iB, Ql) => {
    var zl = er(),
      mO = Hl(),
      yO = Kl(),
      IO = "[object Null]",
      TO = "[object Undefined]",
      Yl = zl ? zl.toStringTag : void 0;
    function bO(e) {
      return e == null
        ? e === void 0
          ? TO
          : IO
        : Yl && Yl in Object(e)
        ? mO(e)
        : yO(e);
    }
    Ql.exports = bO;
  });
  var Go = u((oB, $l) => {
    function OO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    $l.exports = OO;
  });
  var Xo = u((aB, Zl) => {
    var wO = Go(),
      AO = wO(Object.getPrototypeOf, Object);
    Zl.exports = AO;
  });
  var _t = u((sB, Jl) => {
    function SO(e) {
      return e != null && typeof e == "object";
    }
    Jl.exports = SO;
  });
  var Uo = u((uB, tf) => {
    var RO = wt(),
      xO = Xo(),
      CO = _t(),
      NO = "[object Object]",
      LO = Function.prototype,
      qO = Object.prototype,
      ef = LO.toString,
      PO = qO.hasOwnProperty,
      DO = ef.call(Object);
    function MO(e) {
      if (!CO(e) || RO(e) != NO) return !1;
      var t = xO(e);
      if (t === null) return !0;
      var r = PO.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ef.call(r) == DO;
    }
    tf.exports = MO;
  });
  var rf = u((Wo) => {
    "use strict";
    Object.defineProperty(Wo, "__esModule", { value: !0 });
    Wo.default = FO;
    function FO(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var nf = u((ko, Vo) => {
    "use strict";
    Object.defineProperty(ko, "__esModule", { value: !0 });
    var GO = rf(),
      XO = UO(GO);
    function UO(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var tr;
    typeof self < "u"
      ? (tr = self)
      : typeof window < "u"
      ? (tr = window)
      : typeof global < "u"
      ? (tr = global)
      : typeof Vo < "u"
      ? (tr = Vo)
      : (tr = Function("return this")());
    var WO = (0, XO.default)(tr);
    ko.default = WO;
  });
  var Bo = u((Fr) => {
    "use strict";
    Fr.__esModule = !0;
    Fr.ActionTypes = void 0;
    Fr.default = uf;
    var VO = Uo(),
      kO = sf(VO),
      BO = nf(),
      of = sf(BO);
    function sf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var af = (Fr.ActionTypes = { INIT: "@@redux/INIT" });
    function uf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(uf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        c = !1;
      function h() {
        s === a && (s = a.slice());
      }
      function I() {
        return o;
      }
      function d(O) {
        if (typeof O != "function")
          throw new Error("Expected listener to be a function.");
        var C = !0;
        return (
          h(),
          s.push(O),
          function () {
            if (C) {
              (C = !1), h();
              var L = s.indexOf(O);
              s.splice(L, 1);
            }
          }
        );
      }
      function T(O) {
        if (!(0, kO.default)(O))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof O.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
          (c = !0), (o = i(o, O));
        } finally {
          c = !1;
        }
        for (var C = (a = s), R = 0; R < C.length; R++) C[R]();
        return O;
      }
      function E(O) {
        if (typeof O != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = O), T({ type: af.INIT });
      }
      function y() {
        var O,
          C = d;
        return (
          (O = {
            subscribe: function (L) {
              if (typeof L != "object")
                throw new TypeError("Expected the observer to be an object.");
              function S() {
                L.next && L.next(I());
              }
              S();
              var X = C(S);
              return { unsubscribe: X };
            },
          }),
          (O[of.default] = function () {
            return this;
          }),
          O
        );
      }
      return (
        T({ type: af.INIT }),
        (n = { dispatch: T, subscribe: d, getState: I, replaceReducer: E }),
        (n[of.default] = y),
        n
      );
    }
  });
  var jo = u((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    Ho.default = HO;
    function HO(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var ff = u((Ko) => {
    "use strict";
    Ko.__esModule = !0;
    Ko.default = QO;
    var cf = Bo(),
      jO = Uo(),
      dB = lf(jO),
      KO = jo(),
      pB = lf(KO);
    function lf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function zO(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function YO(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: cf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                cf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function QO(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        YO(r);
      } catch (c) {
        s = c;
      }
      return function () {
        var h =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          I = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var T = !1, E = {}, y = 0; y < o.length; y++) {
          var O = o[y],
            C = r[O],
            R = h[O],
            L = C(R, I);
          if (typeof L > "u") {
            var S = zO(O, I);
            throw new Error(S);
          }
          (E[O] = L), (T = T || L !== R);
        }
        return T ? E : h;
      };
    }
  });
  var pf = u((zo) => {
    "use strict";
    zo.__esModule = !0;
    zo.default = $O;
    function df(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function $O(e, t) {
      if (typeof e == "function") return df(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = df(a, t));
      }
      return n;
    }
  });
  var Qo = u((Yo) => {
    "use strict";
    Yo.__esModule = !0;
    Yo.default = ZO;
    function ZO() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var vf = u(($o) => {
    "use strict";
    $o.__esModule = !0;
    var JO =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    $o.default = nw;
    var ew = Qo(),
      tw = rw(ew);
    function rw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function nw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            c = s.dispatch,
            h = [],
            I = {
              getState: s.getState,
              dispatch: function (T) {
                return c(T);
              },
            };
          return (
            (h = t.map(function (d) {
              return d(I);
            })),
            (c = tw.default.apply(void 0, h)(s.dispatch)),
            JO({}, s, { dispatch: c })
          );
        };
      };
    }
  });
  var Zo = u((Ke) => {
    "use strict";
    Ke.__esModule = !0;
    Ke.compose =
      Ke.applyMiddleware =
      Ke.bindActionCreators =
      Ke.combineReducers =
      Ke.createStore =
        void 0;
    var iw = Bo(),
      ow = rr(iw),
      aw = ff(),
      sw = rr(aw),
      uw = pf(),
      cw = rr(uw),
      lw = vf(),
      fw = rr(lw),
      dw = Qo(),
      pw = rr(dw),
      vw = jo(),
      _B = rr(vw);
    function rr(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ke.createStore = ow.default;
    Ke.combineReducers = sw.default;
    Ke.bindActionCreators = cw.default;
    Ke.applyMiddleware = fw.default;
    Ke.compose = pw.default;
  });
  var hf = u((Ne) => {
    "use strict";
    Object.defineProperty(Ne, "__esModule", { value: !0 });
    Ne.QuickEffectIds =
      Ne.QuickEffectDirectionConsts =
      Ne.EventTypeConsts =
      Ne.EventLimitAffectedElements =
      Ne.EventContinuousMouseAxes =
      Ne.EventBasedOn =
      Ne.EventAppliesTo =
        void 0;
    var hw = {
      NAVBAR_OPEN: "NAVBAR_OPEN",
      NAVBAR_CLOSE: "NAVBAR_CLOSE",
      TAB_ACTIVE: "TAB_ACTIVE",
      TAB_INACTIVE: "TAB_INACTIVE",
      SLIDER_ACTIVE: "SLIDER_ACTIVE",
      SLIDER_INACTIVE: "SLIDER_INACTIVE",
      DROPDOWN_OPEN: "DROPDOWN_OPEN",
      DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
      MOUSE_CLICK: "MOUSE_CLICK",
      MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
      MOUSE_DOWN: "MOUSE_DOWN",
      MOUSE_UP: "MOUSE_UP",
      MOUSE_OVER: "MOUSE_OVER",
      MOUSE_OUT: "MOUSE_OUT",
      MOUSE_MOVE: "MOUSE_MOVE",
      MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
      SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
      SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
      SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
      ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
      ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
      PAGE_START: "PAGE_START",
      PAGE_FINISH: "PAGE_FINISH",
      PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
      PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
      PAGE_SCROLL: "PAGE_SCROLL",
    };
    Ne.EventTypeConsts = hw;
    var gw = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    Ne.EventAppliesTo = gw;
    var Ew = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    Ne.EventBasedOn = Ew;
    var _w = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    Ne.EventContinuousMouseAxes = _w;
    var mw = {
      CHILDREN: "CHILDREN",
      SIBLINGS: "SIBLINGS",
      IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
    };
    Ne.EventLimitAffectedElements = mw;
    var yw = {
      FADE_EFFECT: "FADE_EFFECT",
      SLIDE_EFFECT: "SLIDE_EFFECT",
      GROW_EFFECT: "GROW_EFFECT",
      SHRINK_EFFECT: "SHRINK_EFFECT",
      SPIN_EFFECT: "SPIN_EFFECT",
      FLY_EFFECT: "FLY_EFFECT",
      POP_EFFECT: "POP_EFFECT",
      FLIP_EFFECT: "FLIP_EFFECT",
      JIGGLE_EFFECT: "JIGGLE_EFFECT",
      PULSE_EFFECT: "PULSE_EFFECT",
      DROP_EFFECT: "DROP_EFFECT",
      BLINK_EFFECT: "BLINK_EFFECT",
      BOUNCE_EFFECT: "BOUNCE_EFFECT",
      FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
      FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
      RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
      JELLO_EFFECT: "JELLO_EFFECT",
      GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
      SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
      PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
    };
    Ne.QuickEffectIds = yw;
    var Iw = {
      LEFT: "LEFT",
      RIGHT: "RIGHT",
      BOTTOM: "BOTTOM",
      TOP: "TOP",
      BOTTOM_LEFT: "BOTTOM_LEFT",
      BOTTOM_RIGHT: "BOTTOM_RIGHT",
      TOP_RIGHT: "TOP_RIGHT",
      TOP_LEFT: "TOP_LEFT",
      CLOCKWISE: "CLOCKWISE",
      COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
    };
    Ne.QuickEffectDirectionConsts = Iw;
  });
  var Jo = u((nr) => {
    "use strict";
    Object.defineProperty(nr, "__esModule", { value: !0 });
    nr.ActionTypeConsts = nr.ActionAppliesTo = void 0;
    var Tw = {
      TRANSFORM_MOVE: "TRANSFORM_MOVE",
      TRANSFORM_SCALE: "TRANSFORM_SCALE",
      TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
      TRANSFORM_SKEW: "TRANSFORM_SKEW",
      STYLE_OPACITY: "STYLE_OPACITY",
      STYLE_SIZE: "STYLE_SIZE",
      STYLE_FILTER: "STYLE_FILTER",
      STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
      STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
      STYLE_BORDER: "STYLE_BORDER",
      STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
      PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
      GENERAL_DISPLAY: "GENERAL_DISPLAY",
      GENERAL_START_ACTION: "GENERAL_START_ACTION",
      GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
      GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
      GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
      GENERAL_LOOP: "GENERAL_LOOP",
      STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
    };
    nr.ActionTypeConsts = Tw;
    var bw = {
      ELEMENT: "ELEMENT",
      ELEMENT_CLASS: "ELEMENT_CLASS",
      TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
    };
    nr.ActionAppliesTo = bw;
  });
  var gf = u((Cn) => {
    "use strict";
    Object.defineProperty(Cn, "__esModule", { value: !0 });
    Cn.InteractionTypeConsts = void 0;
    var Ow = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
    Cn.InteractionTypeConsts = Ow;
  });
  var Ef = u((Nn) => {
    "use strict";
    Object.defineProperty(Nn, "__esModule", { value: !0 });
    Nn.ReducedMotionTypes = void 0;
    var ww = Jo(),
      {
        TRANSFORM_MOVE: Aw,
        TRANSFORM_SCALE: Sw,
        TRANSFORM_ROTATE: Rw,
        TRANSFORM_SKEW: xw,
        STYLE_SIZE: Cw,
        STYLE_FILTER: Nw,
        STYLE_FONT_VARIATION: Lw,
      } = ww.ActionTypeConsts,
      qw = {
        [Aw]: !0,
        [Sw]: !0,
        [Rw]: !0,
        [xw]: !0,
        [Cw]: !0,
        [Nw]: !0,
        [Lw]: !0,
      };
    Nn.ReducedMotionTypes = qw;
  });
  var _f = u((ce) => {
    "use strict";
    Object.defineProperty(ce, "__esModule", { value: !0 });
    ce.IX2_VIEWPORT_WIDTH_CHANGED =
      ce.IX2_TEST_FRAME_RENDERED =
      ce.IX2_STOP_REQUESTED =
      ce.IX2_SESSION_STOPPED =
      ce.IX2_SESSION_STARTED =
      ce.IX2_SESSION_INITIALIZED =
      ce.IX2_RAW_DATA_IMPORTED =
      ce.IX2_PREVIEW_REQUESTED =
      ce.IX2_PLAYBACK_REQUESTED =
      ce.IX2_PARAMETER_CHANGED =
      ce.IX2_MEDIA_QUERIES_DEFINED =
      ce.IX2_INSTANCE_STARTED =
      ce.IX2_INSTANCE_REMOVED =
      ce.IX2_INSTANCE_ADDED =
      ce.IX2_EVENT_STATE_CHANGED =
      ce.IX2_EVENT_LISTENER_ADDED =
      ce.IX2_ELEMENT_STATE_CHANGED =
      ce.IX2_CLEAR_REQUESTED =
      ce.IX2_ANIMATION_FRAME_CHANGED =
      ce.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        void 0;
    var Pw = "IX2_RAW_DATA_IMPORTED";
    ce.IX2_RAW_DATA_IMPORTED = Pw;
    var Dw = "IX2_SESSION_INITIALIZED";
    ce.IX2_SESSION_INITIALIZED = Dw;
    var Mw = "IX2_SESSION_STARTED";
    ce.IX2_SESSION_STARTED = Mw;
    var Fw = "IX2_SESSION_STOPPED";
    ce.IX2_SESSION_STOPPED = Fw;
    var Gw = "IX2_PREVIEW_REQUESTED";
    ce.IX2_PREVIEW_REQUESTED = Gw;
    var Xw = "IX2_PLAYBACK_REQUESTED";
    ce.IX2_PLAYBACK_REQUESTED = Xw;
    var Uw = "IX2_STOP_REQUESTED";
    ce.IX2_STOP_REQUESTED = Uw;
    var Ww = "IX2_CLEAR_REQUESTED";
    ce.IX2_CLEAR_REQUESTED = Ww;
    var Vw = "IX2_EVENT_LISTENER_ADDED";
    ce.IX2_EVENT_LISTENER_ADDED = Vw;
    var kw = "IX2_EVENT_STATE_CHANGED";
    ce.IX2_EVENT_STATE_CHANGED = kw;
    var Bw = "IX2_ANIMATION_FRAME_CHANGED";
    ce.IX2_ANIMATION_FRAME_CHANGED = Bw;
    var Hw = "IX2_PARAMETER_CHANGED";
    ce.IX2_PARAMETER_CHANGED = Hw;
    var jw = "IX2_INSTANCE_ADDED";
    ce.IX2_INSTANCE_ADDED = jw;
    var Kw = "IX2_INSTANCE_STARTED";
    ce.IX2_INSTANCE_STARTED = Kw;
    var zw = "IX2_INSTANCE_REMOVED";
    ce.IX2_INSTANCE_REMOVED = zw;
    var Yw = "IX2_ELEMENT_STATE_CHANGED";
    ce.IX2_ELEMENT_STATE_CHANGED = Yw;
    var Qw = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    ce.IX2_ACTION_LIST_PLAYBACK_CHANGED = Qw;
    var $w = "IX2_VIEWPORT_WIDTH_CHANGED";
    ce.IX2_VIEWPORT_WIDTH_CHANGED = $w;
    var Zw = "IX2_MEDIA_QUERIES_DEFINED";
    ce.IX2_MEDIA_QUERIES_DEFINED = Zw;
    var Jw = "IX2_TEST_FRAME_RENDERED";
    ce.IX2_TEST_FRAME_RENDERED = Jw;
  });
  var mf = u((F) => {
    "use strict";
    Object.defineProperty(F, "__esModule", { value: !0 });
    F.W_MOD_JS =
      F.W_MOD_IX =
      F.WILL_CHANGE =
      F.WIDTH =
      F.WF_PAGE =
      F.TRANSLATE_Z =
      F.TRANSLATE_Y =
      F.TRANSLATE_X =
      F.TRANSLATE_3D =
      F.TRANSFORM =
      F.SKEW_Y =
      F.SKEW_X =
      F.SKEW =
      F.SIBLINGS =
      F.SCALE_Z =
      F.SCALE_Y =
      F.SCALE_X =
      F.SCALE_3D =
      F.ROTATE_Z =
      F.ROTATE_Y =
      F.ROTATE_X =
      F.RENDER_TRANSFORM =
      F.RENDER_STYLE =
      F.RENDER_PLUGIN =
      F.RENDER_GENERAL =
      F.PRESERVE_3D =
      F.PLAIN_OBJECT =
      F.PARENT =
      F.OPACITY =
      F.IX2_ID_DELIMITER =
      F.IMMEDIATE_CHILDREN =
      F.HTML_ELEMENT =
      F.HEIGHT =
      F.FONT_VARIATION_SETTINGS =
      F.FLEX =
      F.FILTER =
      F.DISPLAY =
      F.CONFIG_Z_VALUE =
      F.CONFIG_Z_UNIT =
      F.CONFIG_Y_VALUE =
      F.CONFIG_Y_UNIT =
      F.CONFIG_X_VALUE =
      F.CONFIG_X_UNIT =
      F.CONFIG_VALUE =
      F.CONFIG_UNIT =
      F.COMMA_DELIMITER =
      F.COLOR =
      F.COLON_DELIMITER =
      F.CHILDREN =
      F.BOUNDARY_SELECTOR =
      F.BORDER_COLOR =
      F.BAR_DELIMITER =
      F.BACKGROUND_COLOR =
      F.BACKGROUND =
      F.AUTO =
      F.ABSTRACT_NODE =
        void 0;
    var eA = "|";
    F.IX2_ID_DELIMITER = eA;
    var tA = "data-wf-page";
    F.WF_PAGE = tA;
    var rA = "w-mod-js";
    F.W_MOD_JS = rA;
    var nA = "w-mod-ix";
    F.W_MOD_IX = nA;
    var iA = ".w-dyn-item";
    F.BOUNDARY_SELECTOR = iA;
    var oA = "xValue";
    F.CONFIG_X_VALUE = oA;
    var aA = "yValue";
    F.CONFIG_Y_VALUE = aA;
    var sA = "zValue";
    F.CONFIG_Z_VALUE = sA;
    var uA = "value";
    F.CONFIG_VALUE = uA;
    var cA = "xUnit";
    F.CONFIG_X_UNIT = cA;
    var lA = "yUnit";
    F.CONFIG_Y_UNIT = lA;
    var fA = "zUnit";
    F.CONFIG_Z_UNIT = fA;
    var dA = "unit";
    F.CONFIG_UNIT = dA;
    var pA = "transform";
    F.TRANSFORM = pA;
    var vA = "translateX";
    F.TRANSLATE_X = vA;
    var hA = "translateY";
    F.TRANSLATE_Y = hA;
    var gA = "translateZ";
    F.TRANSLATE_Z = gA;
    var EA = "translate3d";
    F.TRANSLATE_3D = EA;
    var _A = "scaleX";
    F.SCALE_X = _A;
    var mA = "scaleY";
    F.SCALE_Y = mA;
    var yA = "scaleZ";
    F.SCALE_Z = yA;
    var IA = "scale3d";
    F.SCALE_3D = IA;
    var TA = "rotateX";
    F.ROTATE_X = TA;
    var bA = "rotateY";
    F.ROTATE_Y = bA;
    var OA = "rotateZ";
    F.ROTATE_Z = OA;
    var wA = "skew";
    F.SKEW = wA;
    var AA = "skewX";
    F.SKEW_X = AA;
    var SA = "skewY";
    F.SKEW_Y = SA;
    var RA = "opacity";
    F.OPACITY = RA;
    var xA = "filter";
    F.FILTER = xA;
    var CA = "font-variation-settings";
    F.FONT_VARIATION_SETTINGS = CA;
    var NA = "width";
    F.WIDTH = NA;
    var LA = "height";
    F.HEIGHT = LA;
    var qA = "backgroundColor";
    F.BACKGROUND_COLOR = qA;
    var PA = "background";
    F.BACKGROUND = PA;
    var DA = "borderColor";
    F.BORDER_COLOR = DA;
    var MA = "color";
    F.COLOR = MA;
    var FA = "display";
    F.DISPLAY = FA;
    var GA = "flex";
    F.FLEX = GA;
    var XA = "willChange";
    F.WILL_CHANGE = XA;
    var UA = "AUTO";
    F.AUTO = UA;
    var WA = ",";
    F.COMMA_DELIMITER = WA;
    var VA = ":";
    F.COLON_DELIMITER = VA;
    var kA = "|";
    F.BAR_DELIMITER = kA;
    var BA = "CHILDREN";
    F.CHILDREN = BA;
    var HA = "IMMEDIATE_CHILDREN";
    F.IMMEDIATE_CHILDREN = HA;
    var jA = "SIBLINGS";
    F.SIBLINGS = jA;
    var KA = "PARENT";
    F.PARENT = KA;
    var zA = "preserve-3d";
    F.PRESERVE_3D = zA;
    var YA = "HTML_ELEMENT";
    F.HTML_ELEMENT = YA;
    var QA = "PLAIN_OBJECT";
    F.PLAIN_OBJECT = QA;
    var $A = "ABSTRACT_NODE";
    F.ABSTRACT_NODE = $A;
    var ZA = "RENDER_TRANSFORM";
    F.RENDER_TRANSFORM = ZA;
    var JA = "RENDER_GENERAL";
    F.RENDER_GENERAL = JA;
    var eS = "RENDER_STYLE";
    F.RENDER_STYLE = eS;
    var tS = "RENDER_PLUGIN";
    F.RENDER_PLUGIN = tS;
  });
  var Be = u((Se) => {
    "use strict";
    var yf = Qt().default;
    Object.defineProperty(Se, "__esModule", { value: !0 });
    var Ln = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    Se.IX2EngineConstants = Se.IX2EngineActionTypes = void 0;
    var ea = hf();
    Object.keys(ea).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Ln, e) ||
        (e in Se && Se[e] === ea[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return ea[e];
          },
        });
    });
    var ta = Jo();
    Object.keys(ta).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Ln, e) ||
        (e in Se && Se[e] === ta[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return ta[e];
          },
        });
    });
    var ra = gf();
    Object.keys(ra).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Ln, e) ||
        (e in Se && Se[e] === ra[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return ra[e];
          },
        });
    });
    var na = Ef();
    Object.keys(na).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        Object.prototype.hasOwnProperty.call(Ln, e) ||
        (e in Se && Se[e] === na[e]) ||
        Object.defineProperty(Se, e, {
          enumerable: !0,
          get: function () {
            return na[e];
          },
        });
    });
    var rS = yf(_f());
    Se.IX2EngineActionTypes = rS;
    var nS = yf(mf());
    Se.IX2EngineConstants = nS;
  });
  var If = u((qn) => {
    "use strict";
    Object.defineProperty(qn, "__esModule", { value: !0 });
    qn.ixData = void 0;
    var iS = Be(),
      { IX2_RAW_DATA_IMPORTED: oS } = iS.IX2EngineActionTypes,
      aS = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case oS:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    qn.ixData = aS;
  });
  var Gr = u((RB, mt) => {
    function ia() {
      return (
        (mt.exports = ia =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
        (mt.exports.__esModule = !0),
        (mt.exports.default = mt.exports),
        ia.apply(this, arguments)
      );
    }
    (mt.exports = ia),
      (mt.exports.__esModule = !0),
      (mt.exports.default = mt.exports);
  });
  var ir = u((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    var sS =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    be.clone = Dn;
    be.addLast = Of;
    be.addFirst = wf;
    be.removeLast = Af;
    be.removeFirst = Sf;
    be.insert = Rf;
    be.removeAt = xf;
    be.replaceAt = Cf;
    be.getIn = Mn;
    be.set = Fn;
    be.setIn = Gn;
    be.update = Lf;
    be.updateIn = qf;
    be.merge = Pf;
    be.mergeDeep = Df;
    be.mergeIn = Mf;
    be.omit = Ff;
    be.addDefaults = Gf;
    var Tf = "INVALID_ARGS";
    function bf(e) {
      throw new Error(e);
    }
    function oa(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var uS = {}.hasOwnProperty;
    function Dn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = oa(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function He(e, t, r) {
      var n = r;
      n == null && bf(Tf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var c = 0; c < a.length; c++) {
        var h = a[c];
        if (h != null) {
          var I = oa(h);
          if (I.length)
            for (var d = 0; d <= I.length; d++) {
              var T = I[d];
              if (!(e && n[T] !== void 0)) {
                var E = h[T];
                t && Pn(n[T]) && Pn(E) && (E = He(e, t, n[T], E)),
                  !(E === void 0 || E === n[T]) &&
                    (i || ((i = !0), (n = Dn(n))), (n[T] = E));
              }
            }
        }
      }
      return n;
    }
    function Pn(e) {
      var t = typeof e > "u" ? "undefined" : sS(e);
      return e != null && (t === "object" || t === "function");
    }
    function Of(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function wf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Af(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Sf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Rf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function xf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Cf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Mn(e, t) {
      if ((!Array.isArray(t) && bf(Tf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Fn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Dn(i);
      return (o[t] = r), o;
    }
    function Nf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          Pn(e) && Pn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Nf(a, t, r, n + 1);
      }
      return Fn(e, o, i);
    }
    function Gn(e, t, r) {
      return t.length ? Nf(e, t, r, 0) : r;
    }
    function Lf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Fn(e, t, i);
    }
    function qf(e, t, r) {
      var n = Mn(e, t),
        i = r(n);
      return Gn(e, t, i);
    }
    function Pf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : He(!1, !1, e, t, r, n, i, o);
    }
    function Df(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : He(!1, !0, e, t, r, n, i, o);
    }
    function Mf(e, t, r, n, i, o, a) {
      var s = Mn(e, t);
      s == null && (s = {});
      for (
        var c = void 0,
          h = arguments.length,
          I = Array(h > 7 ? h - 7 : 0),
          d = 7;
        d < h;
        d++
      )
        I[d - 7] = arguments[d];
      return (
        I.length
          ? (c = He.call.apply(He, [null, !1, !1, s, r, n, i, o, a].concat(I)))
          : (c = He(!1, !1, s, r, n, i, o, a)),
        Gn(e, t, c)
      );
    }
    function Ff(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (uS.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = oa(e), s = 0; s < a.length; s++) {
        var c = a[s];
        r.indexOf(c) >= 0 || (o[c] = e[c]);
      }
      return o;
    }
    function Gf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        s[c - 6] = arguments[c];
      return s.length
        ? He.call.apply(He, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : He(!0, !1, e, t, r, n, i, o);
    }
    var cS = {
      clone: Dn,
      addLast: Of,
      addFirst: wf,
      removeLast: Af,
      removeFirst: Sf,
      insert: Rf,
      removeAt: xf,
      replaceAt: Cf,
      getIn: Mn,
      set: Fn,
      setIn: Gn,
      update: Lf,
      updateIn: qf,
      merge: Pf,
      mergeDeep: Df,
      mergeIn: Mf,
      omit: Ff,
      addDefaults: Gf,
    };
    be.default = cS;
  });
  var Uf = u((Xn) => {
    "use strict";
    var lS = ut().default;
    Object.defineProperty(Xn, "__esModule", { value: !0 });
    Xn.ixRequest = void 0;
    var fS = lS(Gr()),
      dS = Be(),
      pS = ir(),
      {
        IX2_PREVIEW_REQUESTED: vS,
        IX2_PLAYBACK_REQUESTED: hS,
        IX2_STOP_REQUESTED: gS,
        IX2_CLEAR_REQUESTED: ES,
      } = dS.IX2EngineActionTypes,
      _S = { preview: {}, playback: {}, stop: {}, clear: {} },
      Xf = Object.create(null, {
        [vS]: { value: "preview" },
        [hS]: { value: "playback" },
        [gS]: { value: "stop" },
        [ES]: { value: "clear" },
      }),
      mS = (e = _S, t) => {
        if (t.type in Xf) {
          let r = [Xf[t.type]];
          return (0, pS.setIn)(e, [r], (0, fS.default)({}, t.payload));
        }
        return e;
      };
    Xn.ixRequest = mS;
  });
  var Vf = u((Un) => {
    "use strict";
    Object.defineProperty(Un, "__esModule", { value: !0 });
    Un.ixSession = void 0;
    var yS = Be(),
      lt = ir(),
      {
        IX2_SESSION_INITIALIZED: IS,
        IX2_SESSION_STARTED: TS,
        IX2_TEST_FRAME_RENDERED: bS,
        IX2_SESSION_STOPPED: OS,
        IX2_EVENT_LISTENER_ADDED: wS,
        IX2_EVENT_STATE_CHANGED: AS,
        IX2_ANIMATION_FRAME_CHANGED: SS,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: RS,
        IX2_VIEWPORT_WIDTH_CHANGED: xS,
        IX2_MEDIA_QUERIES_DEFINED: CS,
      } = yS.IX2EngineActionTypes,
      Wf = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      NS = 20,
      LS = (e = Wf, t) => {
        switch (t.type) {
          case IS: {
            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
            return (0, lt.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
          }
          case TS:
            return (0, lt.set)(e, "active", !0);
          case bS: {
            let {
              payload: { step: r = NS },
            } = t;
            return (0, lt.set)(e, "tick", e.tick + r);
          }
          case OS:
            return Wf;
          case SS: {
            let {
              payload: { now: r },
            } = t;
            return (0, lt.set)(e, "tick", r);
          }
          case wS: {
            let r = (0, lt.addLast)(e.eventListeners, t.payload);
            return (0, lt.set)(e, "eventListeners", r);
          }
          case AS: {
            let { stateKey: r, newState: n } = t.payload;
            return (0, lt.setIn)(e, ["eventState", r], n);
          }
          case RS: {
            let { actionListId: r, isPlaying: n } = t.payload;
            return (0, lt.setIn)(e, ["playbackState", r], n);
          }
          case xS: {
            let { width: r, mediaQueries: n } = t.payload,
              i = n.length,
              o = null;
            for (let a = 0; a < i; a++) {
              let { key: s, min: c, max: h } = n[a];
              if (r >= c && r <= h) {
                o = s;
                break;
              }
            }
            return (0, lt.merge)(e, { viewportWidth: r, mediaQueryKey: o });
          }
          case CS:
            return (0, lt.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    Un.ixSession = LS;
  });
  var Bf = u((LB, kf) => {
    function qS() {
      (this.__data__ = []), (this.size = 0);
    }
    kf.exports = qS;
  });
  var Wn = u((qB, Hf) => {
    function PS(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Hf.exports = PS;
  });
  var Xr = u((PB, jf) => {
    var DS = Wn();
    function MS(e, t) {
      for (var r = e.length; r--; ) if (DS(e[r][0], t)) return r;
      return -1;
    }
    jf.exports = MS;
  });
  var zf = u((DB, Kf) => {
    var FS = Xr(),
      GS = Array.prototype,
      XS = GS.splice;
    function US(e) {
      var t = this.__data__,
        r = FS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : XS.call(t, r, 1), --this.size, !0;
    }
    Kf.exports = US;
  });
  var Qf = u((MB, Yf) => {
    var WS = Xr();
    function VS(e) {
      var t = this.__data__,
        r = WS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Yf.exports = VS;
  });
  var Zf = u((FB, $f) => {
    var kS = Xr();
    function BS(e) {
      return kS(this.__data__, e) > -1;
    }
    $f.exports = BS;
  });
  var ed = u((GB, Jf) => {
    var HS = Xr();
    function jS(e, t) {
      var r = this.__data__,
        n = HS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Jf.exports = jS;
  });
  var Ur = u((XB, td) => {
    var KS = Bf(),
      zS = zf(),
      YS = Qf(),
      QS = Zf(),
      $S = ed();
    function or(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    or.prototype.clear = KS;
    or.prototype.delete = zS;
    or.prototype.get = YS;
    or.prototype.has = QS;
    or.prototype.set = $S;
    td.exports = or;
  });
  var nd = u((UB, rd) => {
    var ZS = Ur();
    function JS() {
      (this.__data__ = new ZS()), (this.size = 0);
    }
    rd.exports = JS;
  });
  var od = u((WB, id) => {
    function e0(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    id.exports = e0;
  });
  var sd = u((VB, ad) => {
    function t0(e) {
      return this.__data__.get(e);
    }
    ad.exports = t0;
  });
  var cd = u((kB, ud) => {
    function r0(e) {
      return this.__data__.has(e);
    }
    ud.exports = r0;
  });
  var ft = u((BB, ld) => {
    function n0(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    ld.exports = n0;
  });
  var aa = u((HB, fd) => {
    var i0 = wt(),
      o0 = ft(),
      a0 = "[object AsyncFunction]",
      s0 = "[object Function]",
      u0 = "[object GeneratorFunction]",
      c0 = "[object Proxy]";
    function l0(e) {
      if (!o0(e)) return !1;
      var t = i0(e);
      return t == s0 || t == u0 || t == a0 || t == c0;
    }
    fd.exports = l0;
  });
  var pd = u((jB, dd) => {
    var f0 = tt(),
      d0 = f0["__core-js_shared__"];
    dd.exports = d0;
  });
  var gd = u((KB, hd) => {
    var sa = pd(),
      vd = (function () {
        var e = /[^.]+$/.exec((sa && sa.keys && sa.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function p0(e) {
      return !!vd && vd in e;
    }
    hd.exports = p0;
  });
  var ua = u((zB, Ed) => {
    var v0 = Function.prototype,
      h0 = v0.toString;
    function g0(e) {
      if (e != null) {
        try {
          return h0.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Ed.exports = g0;
  });
  var md = u((YB, _d) => {
    var E0 = aa(),
      _0 = gd(),
      m0 = ft(),
      y0 = ua(),
      I0 = /[\\^$.*+?()[\]{}|]/g,
      T0 = /^\[object .+?Constructor\]$/,
      b0 = Function.prototype,
      O0 = Object.prototype,
      w0 = b0.toString,
      A0 = O0.hasOwnProperty,
      S0 = RegExp(
        "^" +
          w0
            .call(A0)
            .replace(I0, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function R0(e) {
      if (!m0(e) || _0(e)) return !1;
      var t = E0(e) ? S0 : T0;
      return t.test(y0(e));
    }
    _d.exports = R0;
  });
  var Id = u((QB, yd) => {
    function x0(e, t) {
      return e?.[t];
    }
    yd.exports = x0;
  });
  var At = u(($B, Td) => {
    var C0 = md(),
      N0 = Id();
    function L0(e, t) {
      var r = N0(e, t);
      return C0(r) ? r : void 0;
    }
    Td.exports = L0;
  });
  var Vn = u((ZB, bd) => {
    var q0 = At(),
      P0 = tt(),
      D0 = q0(P0, "Map");
    bd.exports = D0;
  });
  var Wr = u((JB, Od) => {
    var M0 = At(),
      F0 = M0(Object, "create");
    Od.exports = F0;
  });
  var Sd = u((eH, Ad) => {
    var wd = Wr();
    function G0() {
      (this.__data__ = wd ? wd(null) : {}), (this.size = 0);
    }
    Ad.exports = G0;
  });
  var xd = u((tH, Rd) => {
    function X0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Rd.exports = X0;
  });
  var Nd = u((rH, Cd) => {
    var U0 = Wr(),
      W0 = "__lodash_hash_undefined__",
      V0 = Object.prototype,
      k0 = V0.hasOwnProperty;
    function B0(e) {
      var t = this.__data__;
      if (U0) {
        var r = t[e];
        return r === W0 ? void 0 : r;
      }
      return k0.call(t, e) ? t[e] : void 0;
    }
    Cd.exports = B0;
  });
  var qd = u((nH, Ld) => {
    var H0 = Wr(),
      j0 = Object.prototype,
      K0 = j0.hasOwnProperty;
    function z0(e) {
      var t = this.__data__;
      return H0 ? t[e] !== void 0 : K0.call(t, e);
    }
    Ld.exports = z0;
  });
  var Dd = u((iH, Pd) => {
    var Y0 = Wr(),
      Q0 = "__lodash_hash_undefined__";
    function $0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Y0 && t === void 0 ? Q0 : t),
        this
      );
    }
    Pd.exports = $0;
  });
  var Fd = u((oH, Md) => {
    var Z0 = Sd(),
      J0 = xd(),
      eR = Nd(),
      tR = qd(),
      rR = Dd();
    function ar(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    ar.prototype.clear = Z0;
    ar.prototype.delete = J0;
    ar.prototype.get = eR;
    ar.prototype.has = tR;
    ar.prototype.set = rR;
    Md.exports = ar;
  });
  var Ud = u((aH, Xd) => {
    var Gd = Fd(),
      nR = Ur(),
      iR = Vn();
    function oR() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Gd(),
          map: new (iR || nR)(),
          string: new Gd(),
        });
    }
    Xd.exports = oR;
  });
  var Vd = u((sH, Wd) => {
    function aR(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Wd.exports = aR;
  });
  var Vr = u((uH, kd) => {
    var sR = Vd();
    function uR(e, t) {
      var r = e.__data__;
      return sR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    kd.exports = uR;
  });
  var Hd = u((cH, Bd) => {
    var cR = Vr();
    function lR(e) {
      var t = cR(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Bd.exports = lR;
  });
  var Kd = u((lH, jd) => {
    var fR = Vr();
    function dR(e) {
      return fR(this, e).get(e);
    }
    jd.exports = dR;
  });
  var Yd = u((fH, zd) => {
    var pR = Vr();
    function vR(e) {
      return pR(this, e).has(e);
    }
    zd.exports = vR;
  });
  var $d = u((dH, Qd) => {
    var hR = Vr();
    function gR(e, t) {
      var r = hR(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    Qd.exports = gR;
  });
  var kn = u((pH, Zd) => {
    var ER = Ud(),
      _R = Hd(),
      mR = Kd(),
      yR = Yd(),
      IR = $d();
    function sr(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    sr.prototype.clear = ER;
    sr.prototype.delete = _R;
    sr.prototype.get = mR;
    sr.prototype.has = yR;
    sr.prototype.set = IR;
    Zd.exports = sr;
  });
  var ep = u((vH, Jd) => {
    var TR = Ur(),
      bR = Vn(),
      OR = kn(),
      wR = 200;
    function AR(e, t) {
      var r = this.__data__;
      if (r instanceof TR) {
        var n = r.__data__;
        if (!bR || n.length < wR - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new OR(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    Jd.exports = AR;
  });
  var ca = u((hH, tp) => {
    var SR = Ur(),
      RR = nd(),
      xR = od(),
      CR = sd(),
      NR = cd(),
      LR = ep();
    function ur(e) {
      var t = (this.__data__ = new SR(e));
      this.size = t.size;
    }
    ur.prototype.clear = RR;
    ur.prototype.delete = xR;
    ur.prototype.get = CR;
    ur.prototype.has = NR;
    ur.prototype.set = LR;
    tp.exports = ur;
  });
  var np = u((gH, rp) => {
    var qR = "__lodash_hash_undefined__";
    function PR(e) {
      return this.__data__.set(e, qR), this;
    }
    rp.exports = PR;
  });
  var op = u((EH, ip) => {
    function DR(e) {
      return this.__data__.has(e);
    }
    ip.exports = DR;
  });
  var sp = u((_H, ap) => {
    var MR = kn(),
      FR = np(),
      GR = op();
    function Bn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new MR(); ++t < r; ) this.add(e[t]);
    }
    Bn.prototype.add = Bn.prototype.push = FR;
    Bn.prototype.has = GR;
    ap.exports = Bn;
  });
  var cp = u((mH, up) => {
    function XR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    up.exports = XR;
  });
  var fp = u((yH, lp) => {
    function UR(e, t) {
      return e.has(t);
    }
    lp.exports = UR;
  });
  var la = u((IH, dp) => {
    var WR = sp(),
      VR = cp(),
      kR = fp(),
      BR = 1,
      HR = 2;
    function jR(e, t, r, n, i, o) {
      var a = r & BR,
        s = e.length,
        c = t.length;
      if (s != c && !(a && c > s)) return !1;
      var h = o.get(e),
        I = o.get(t);
      if (h && I) return h == t && I == e;
      var d = -1,
        T = !0,
        E = r & HR ? new WR() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s; ) {
        var y = e[d],
          O = t[d];
        if (n) var C = a ? n(O, y, d, t, e, o) : n(y, O, d, e, t, o);
        if (C !== void 0) {
          if (C) continue;
          T = !1;
          break;
        }
        if (E) {
          if (
            !VR(t, function (R, L) {
              if (!kR(E, L) && (y === R || i(y, R, r, n, o))) return E.push(L);
            })
          ) {
            T = !1;
            break;
          }
        } else if (!(y === O || i(y, O, r, n, o))) {
          T = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), T;
    }
    dp.exports = jR;
  });
  var vp = u((TH, pp) => {
    var KR = tt(),
      zR = KR.Uint8Array;
    pp.exports = zR;
  });
  var gp = u((bH, hp) => {
    function YR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    hp.exports = YR;
  });
  var _p = u((OH, Ep) => {
    function QR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ep.exports = QR;
  });
  var bp = u((wH, Tp) => {
    var mp = er(),
      yp = vp(),
      $R = Wn(),
      ZR = la(),
      JR = gp(),
      ex = _p(),
      tx = 1,
      rx = 2,
      nx = "[object Boolean]",
      ix = "[object Date]",
      ox = "[object Error]",
      ax = "[object Map]",
      sx = "[object Number]",
      ux = "[object RegExp]",
      cx = "[object Set]",
      lx = "[object String]",
      fx = "[object Symbol]",
      dx = "[object ArrayBuffer]",
      px = "[object DataView]",
      Ip = mp ? mp.prototype : void 0,
      fa = Ip ? Ip.valueOf : void 0;
    function vx(e, t, r, n, i, o, a) {
      switch (r) {
        case px:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case dx:
          return !(e.byteLength != t.byteLength || !o(new yp(e), new yp(t)));
        case nx:
        case ix:
        case sx:
          return $R(+e, +t);
        case ox:
          return e.name == t.name && e.message == t.message;
        case ux:
        case lx:
          return e == t + "";
        case ax:
          var s = JR;
        case cx:
          var c = n & tx;
          if ((s || (s = ex), e.size != t.size && !c)) return !1;
          var h = a.get(e);
          if (h) return h == t;
          (n |= rx), a.set(e, t);
          var I = ZR(s(e), s(t), n, i, o, a);
          return a.delete(e), I;
        case fx:
          if (fa) return fa.call(e) == fa.call(t);
      }
      return !1;
    }
    Tp.exports = vx;
  });
  var Hn = u((AH, Op) => {
    function hx(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Op.exports = hx;
  });
  var Le = u((SH, wp) => {
    var gx = Array.isArray;
    wp.exports = gx;
  });
  var da = u((RH, Ap) => {
    var Ex = Hn(),
      _x = Le();
    function mx(e, t, r) {
      var n = t(e);
      return _x(e) ? n : Ex(n, r(e));
    }
    Ap.exports = mx;
  });
  var Rp = u((xH, Sp) => {
    function yx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Sp.exports = yx;
  });
  var pa = u((CH, xp) => {
    function Ix() {
      return [];
    }
    xp.exports = Ix;
  });
  var va = u((NH, Np) => {
    var Tx = Rp(),
      bx = pa(),
      Ox = Object.prototype,
      wx = Ox.propertyIsEnumerable,
      Cp = Object.getOwnPropertySymbols,
      Ax = Cp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                Tx(Cp(e), function (t) {
                  return wx.call(e, t);
                }));
          }
        : bx;
    Np.exports = Ax;
  });
  var qp = u((LH, Lp) => {
    function Sx(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Lp.exports = Sx;
  });
  var Dp = u((qH, Pp) => {
    var Rx = wt(),
      xx = _t(),
      Cx = "[object Arguments]";
    function Nx(e) {
      return xx(e) && Rx(e) == Cx;
    }
    Pp.exports = Nx;
  });
  var kr = u((PH, Gp) => {
    var Mp = Dp(),
      Lx = _t(),
      Fp = Object.prototype,
      qx = Fp.hasOwnProperty,
      Px = Fp.propertyIsEnumerable,
      Dx = Mp(
        (function () {
          return arguments;
        })()
      )
        ? Mp
        : function (e) {
            return Lx(e) && qx.call(e, "callee") && !Px.call(e, "callee");
          };
    Gp.exports = Dx;
  });
  var Up = u((DH, Xp) => {
    function Mx() {
      return !1;
    }
    Xp.exports = Mx;
  });
  var jn = u((Br, cr) => {
    var Fx = tt(),
      Gx = Up(),
      kp = typeof Br == "object" && Br && !Br.nodeType && Br,
      Wp = kp && typeof cr == "object" && cr && !cr.nodeType && cr,
      Xx = Wp && Wp.exports === kp,
      Vp = Xx ? Fx.Buffer : void 0,
      Ux = Vp ? Vp.isBuffer : void 0,
      Wx = Ux || Gx;
    cr.exports = Wx;
  });
  var Kn = u((MH, Bp) => {
    var Vx = 9007199254740991,
      kx = /^(?:0|[1-9]\d*)$/;
    function Bx(e, t) {
      var r = typeof e;
      return (
        (t = t ?? Vx),
        !!t &&
          (r == "number" || (r != "symbol" && kx.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Bp.exports = Bx;
  });
  var zn = u((FH, Hp) => {
    var Hx = 9007199254740991;
    function jx(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Hx;
    }
    Hp.exports = jx;
  });
  var Kp = u((GH, jp) => {
    var Kx = wt(),
      zx = zn(),
      Yx = _t(),
      Qx = "[object Arguments]",
      $x = "[object Array]",
      Zx = "[object Boolean]",
      Jx = "[object Date]",
      eC = "[object Error]",
      tC = "[object Function]",
      rC = "[object Map]",
      nC = "[object Number]",
      iC = "[object Object]",
      oC = "[object RegExp]",
      aC = "[object Set]",
      sC = "[object String]",
      uC = "[object WeakMap]",
      cC = "[object ArrayBuffer]",
      lC = "[object DataView]",
      fC = "[object Float32Array]",
      dC = "[object Float64Array]",
      pC = "[object Int8Array]",
      vC = "[object Int16Array]",
      hC = "[object Int32Array]",
      gC = "[object Uint8Array]",
      EC = "[object Uint8ClampedArray]",
      _C = "[object Uint16Array]",
      mC = "[object Uint32Array]",
      ye = {};
    ye[fC] =
      ye[dC] =
      ye[pC] =
      ye[vC] =
      ye[hC] =
      ye[gC] =
      ye[EC] =
      ye[_C] =
      ye[mC] =
        !0;
    ye[Qx] =
      ye[$x] =
      ye[cC] =
      ye[Zx] =
      ye[lC] =
      ye[Jx] =
      ye[eC] =
      ye[tC] =
      ye[rC] =
      ye[nC] =
      ye[iC] =
      ye[oC] =
      ye[aC] =
      ye[sC] =
      ye[uC] =
        !1;
    function yC(e) {
      return Yx(e) && zx(e.length) && !!ye[Kx(e)];
    }
    jp.exports = yC;
  });
  var Yp = u((XH, zp) => {
    function IC(e) {
      return function (t) {
        return e(t);
      };
    }
    zp.exports = IC;
  });
  var $p = u((Hr, lr) => {
    var TC = Fo(),
      Qp = typeof Hr == "object" && Hr && !Hr.nodeType && Hr,
      jr = Qp && typeof lr == "object" && lr && !lr.nodeType && lr,
      bC = jr && jr.exports === Qp,
      ha = bC && TC.process,
      OC = (function () {
        try {
          var e = jr && jr.require && jr.require("util").types;
          return e || (ha && ha.binding && ha.binding("util"));
        } catch {}
      })();
    lr.exports = OC;
  });
  var Yn = u((UH, ev) => {
    var wC = Kp(),
      AC = Yp(),
      Zp = $p(),
      Jp = Zp && Zp.isTypedArray,
      SC = Jp ? AC(Jp) : wC;
    ev.exports = SC;
  });
  var ga = u((WH, tv) => {
    var RC = qp(),
      xC = kr(),
      CC = Le(),
      NC = jn(),
      LC = Kn(),
      qC = Yn(),
      PC = Object.prototype,
      DC = PC.hasOwnProperty;
    function MC(e, t) {
      var r = CC(e),
        n = !r && xC(e),
        i = !r && !n && NC(e),
        o = !r && !n && !i && qC(e),
        a = r || n || i || o,
        s = a ? RC(e.length, String) : [],
        c = s.length;
      for (var h in e)
        (t || DC.call(e, h)) &&
          !(
            a &&
            (h == "length" ||
              (i && (h == "offset" || h == "parent")) ||
              (o &&
                (h == "buffer" || h == "byteLength" || h == "byteOffset")) ||
              LC(h, c))
          ) &&
          s.push(h);
      return s;
    }
    tv.exports = MC;
  });
  var Qn = u((VH, rv) => {
    var FC = Object.prototype;
    function GC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || FC;
      return e === r;
    }
    rv.exports = GC;
  });
  var iv = u((kH, nv) => {
    var XC = Go(),
      UC = XC(Object.keys, Object);
    nv.exports = UC;
  });
  var $n = u((BH, ov) => {
    var WC = Qn(),
      VC = iv(),
      kC = Object.prototype,
      BC = kC.hasOwnProperty;
    function HC(e) {
      if (!WC(e)) return VC(e);
      var t = [];
      for (var r in Object(e)) BC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    ov.exports = HC;
  });
  var Xt = u((HH, av) => {
    var jC = aa(),
      KC = zn();
    function zC(e) {
      return e != null && KC(e.length) && !jC(e);
    }
    av.exports = zC;
  });
  var Kr = u((jH, sv) => {
    var YC = ga(),
      QC = $n(),
      $C = Xt();
    function ZC(e) {
      return $C(e) ? YC(e) : QC(e);
    }
    sv.exports = ZC;
  });
  var cv = u((KH, uv) => {
    var JC = da(),
      eN = va(),
      tN = Kr();
    function rN(e) {
      return JC(e, tN, eN);
    }
    uv.exports = rN;
  });
  var dv = u((zH, fv) => {
    var lv = cv(),
      nN = 1,
      iN = Object.prototype,
      oN = iN.hasOwnProperty;
    function aN(e, t, r, n, i, o) {
      var a = r & nN,
        s = lv(e),
        c = s.length,
        h = lv(t),
        I = h.length;
      if (c != I && !a) return !1;
      for (var d = c; d--; ) {
        var T = s[d];
        if (!(a ? T in t : oN.call(t, T))) return !1;
      }
      var E = o.get(e),
        y = o.get(t);
      if (E && y) return E == t && y == e;
      var O = !0;
      o.set(e, t), o.set(t, e);
      for (var C = a; ++d < c; ) {
        T = s[d];
        var R = e[T],
          L = t[T];
        if (n) var S = a ? n(L, R, T, t, e, o) : n(R, L, T, e, t, o);
        if (!(S === void 0 ? R === L || i(R, L, r, n, o) : S)) {
          O = !1;
          break;
        }
        C || (C = T == "constructor");
      }
      if (O && !C) {
        var X = e.constructor,
          M = t.constructor;
        X != M &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof X == "function" &&
            X instanceof X &&
            typeof M == "function" &&
            M instanceof M
          ) &&
          (O = !1);
      }
      return o.delete(e), o.delete(t), O;
    }
    fv.exports = aN;
  });
  var vv = u((YH, pv) => {
    var sN = At(),
      uN = tt(),
      cN = sN(uN, "DataView");
    pv.exports = cN;
  });
  var gv = u((QH, hv) => {
    var lN = At(),
      fN = tt(),
      dN = lN(fN, "Promise");
    hv.exports = dN;
  });
  var _v = u(($H, Ev) => {
    var pN = At(),
      vN = tt(),
      hN = pN(vN, "Set");
    Ev.exports = hN;
  });
  var Ea = u((ZH, mv) => {
    var gN = At(),
      EN = tt(),
      _N = gN(EN, "WeakMap");
    mv.exports = _N;
  });
  var Zn = u((JH, Av) => {
    var _a = vv(),
      ma = Vn(),
      ya = gv(),
      Ia = _v(),
      Ta = Ea(),
      wv = wt(),
      fr = ua(),
      yv = "[object Map]",
      mN = "[object Object]",
      Iv = "[object Promise]",
      Tv = "[object Set]",
      bv = "[object WeakMap]",
      Ov = "[object DataView]",
      yN = fr(_a),
      IN = fr(ma),
      TN = fr(ya),
      bN = fr(Ia),
      ON = fr(Ta),
      Ut = wv;
    ((_a && Ut(new _a(new ArrayBuffer(1))) != Ov) ||
      (ma && Ut(new ma()) != yv) ||
      (ya && Ut(ya.resolve()) != Iv) ||
      (Ia && Ut(new Ia()) != Tv) ||
      (Ta && Ut(new Ta()) != bv)) &&
      (Ut = function (e) {
        var t = wv(e),
          r = t == mN ? e.constructor : void 0,
          n = r ? fr(r) : "";
        if (n)
          switch (n) {
            case yN:
              return Ov;
            case IN:
              return yv;
            case TN:
              return Iv;
            case bN:
              return Tv;
            case ON:
              return bv;
          }
        return t;
      });
    Av.exports = Ut;
  });
  var Pv = u((e5, qv) => {
    var ba = ca(),
      wN = la(),
      AN = bp(),
      SN = dv(),
      Sv = Zn(),
      Rv = Le(),
      xv = jn(),
      RN = Yn(),
      xN = 1,
      Cv = "[object Arguments]",
      Nv = "[object Array]",
      Jn = "[object Object]",
      CN = Object.prototype,
      Lv = CN.hasOwnProperty;
    function NN(e, t, r, n, i, o) {
      var a = Rv(e),
        s = Rv(t),
        c = a ? Nv : Sv(e),
        h = s ? Nv : Sv(t);
      (c = c == Cv ? Jn : c), (h = h == Cv ? Jn : h);
      var I = c == Jn,
        d = h == Jn,
        T = c == h;
      if (T && xv(e)) {
        if (!xv(t)) return !1;
        (a = !0), (I = !1);
      }
      if (T && !I)
        return (
          o || (o = new ba()),
          a || RN(e) ? wN(e, t, r, n, i, o) : AN(e, t, c, r, n, i, o)
        );
      if (!(r & xN)) {
        var E = I && Lv.call(e, "__wrapped__"),
          y = d && Lv.call(t, "__wrapped__");
        if (E || y) {
          var O = E ? e.value() : e,
            C = y ? t.value() : t;
          return o || (o = new ba()), i(O, C, r, n, o);
        }
      }
      return T ? (o || (o = new ba()), SN(e, t, r, n, i, o)) : !1;
    }
    qv.exports = NN;
  });
  var Oa = u((t5, Fv) => {
    var LN = Pv(),
      Dv = _t();
    function Mv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Dv(e) && !Dv(t))
        ? e !== e && t !== t
        : LN(e, t, r, n, Mv, i);
    }
    Fv.exports = Mv;
  });
  var Xv = u((r5, Gv) => {
    var qN = ca(),
      PN = Oa(),
      DN = 1,
      MN = 2;
    function FN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var c = s[0],
          h = e[c],
          I = s[1];
        if (a && s[2]) {
          if (h === void 0 && !(c in e)) return !1;
        } else {
          var d = new qN();
          if (n) var T = n(h, I, c, e, t, d);
          if (!(T === void 0 ? PN(I, h, DN | MN, n, d) : T)) return !1;
        }
      }
      return !0;
    }
    Gv.exports = FN;
  });
  var wa = u((n5, Uv) => {
    var GN = ft();
    function XN(e) {
      return e === e && !GN(e);
    }
    Uv.exports = XN;
  });
  var Vv = u((i5, Wv) => {
    var UN = wa(),
      WN = Kr();
    function VN(e) {
      for (var t = WN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, UN(i)];
      }
      return t;
    }
    Wv.exports = VN;
  });
  var Aa = u((o5, kv) => {
    function kN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    kv.exports = kN;
  });
  var Hv = u((a5, Bv) => {
    var BN = Xv(),
      HN = Vv(),
      jN = Aa();
    function KN(e) {
      var t = HN(e);
      return t.length == 1 && t[0][2]
        ? jN(t[0][0], t[0][1])
        : function (r) {
            return r === e || BN(r, e, t);
          };
    }
    Bv.exports = KN;
  });
  var zr = u((s5, jv) => {
    var zN = wt(),
      YN = _t(),
      QN = "[object Symbol]";
    function $N(e) {
      return typeof e == "symbol" || (YN(e) && zN(e) == QN);
    }
    jv.exports = $N;
  });
  var ei = u((u5, Kv) => {
    var ZN = Le(),
      JN = zr(),
      eL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      tL = /^\w*$/;
    function rL(e, t) {
      if (ZN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        JN(e)
        ? !0
        : tL.test(e) || !eL.test(e) || (t != null && e in Object(t));
    }
    Kv.exports = rL;
  });
  var Qv = u((c5, Yv) => {
    var zv = kn(),
      nL = "Expected a function";
    function Sa(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(nL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (Sa.Cache || zv)()), r;
    }
    Sa.Cache = zv;
    Yv.exports = Sa;
  });
  var Zv = u((l5, $v) => {
    var iL = Qv(),
      oL = 500;
    function aL(e) {
      var t = iL(e, function (n) {
          return r.size === oL && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    $v.exports = aL;
  });
  var eh = u((f5, Jv) => {
    var sL = Zv(),
      uL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      cL = /\\(\\)?/g,
      lL = sL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(uL, function (r, n, i, o) {
            t.push(i ? o.replace(cL, "$1") : n || r);
          }),
          t
        );
      });
    Jv.exports = lL;
  });
  var Ra = u((d5, th) => {
    function fL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    th.exports = fL;
  });
  var sh = u((p5, ah) => {
    var rh = er(),
      dL = Ra(),
      pL = Le(),
      vL = zr(),
      hL = 1 / 0,
      nh = rh ? rh.prototype : void 0,
      ih = nh ? nh.toString : void 0;
    function oh(e) {
      if (typeof e == "string") return e;
      if (pL(e)) return dL(e, oh) + "";
      if (vL(e)) return ih ? ih.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -hL ? "-0" : t;
    }
    ah.exports = oh;
  });
  var ch = u((v5, uh) => {
    var gL = sh();
    function EL(e) {
      return e == null ? "" : gL(e);
    }
    uh.exports = EL;
  });
  var Yr = u((h5, lh) => {
    var _L = Le(),
      mL = ei(),
      yL = eh(),
      IL = ch();
    function TL(e, t) {
      return _L(e) ? e : mL(e, t) ? [e] : yL(IL(e));
    }
    lh.exports = TL;
  });
  var dr = u((g5, fh) => {
    var bL = zr(),
      OL = 1 / 0;
    function wL(e) {
      if (typeof e == "string" || bL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -OL ? "-0" : t;
    }
    fh.exports = wL;
  });
  var ti = u((E5, dh) => {
    var AL = Yr(),
      SL = dr();
    function RL(e, t) {
      t = AL(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[SL(t[r++])];
      return r && r == n ? e : void 0;
    }
    dh.exports = RL;
  });
  var ri = u((_5, ph) => {
    var xL = ti();
    function CL(e, t, r) {
      var n = e == null ? void 0 : xL(e, t);
      return n === void 0 ? r : n;
    }
    ph.exports = CL;
  });
  var hh = u((m5, vh) => {
    function NL(e, t) {
      return e != null && t in Object(e);
    }
    vh.exports = NL;
  });
  var Eh = u((y5, gh) => {
    var LL = Yr(),
      qL = kr(),
      PL = Le(),
      DL = Kn(),
      ML = zn(),
      FL = dr();
    function GL(e, t, r) {
      t = LL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = FL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && ML(i) && DL(a, i) && (PL(e) || qL(e)));
    }
    gh.exports = GL;
  });
  var mh = u((I5, _h) => {
    var XL = hh(),
      UL = Eh();
    function WL(e, t) {
      return e != null && UL(e, t, XL);
    }
    _h.exports = WL;
  });
  var Ih = u((T5, yh) => {
    var VL = Oa(),
      kL = ri(),
      BL = mh(),
      HL = ei(),
      jL = wa(),
      KL = Aa(),
      zL = dr(),
      YL = 1,
      QL = 2;
    function $L(e, t) {
      return HL(e) && jL(t)
        ? KL(zL(e), t)
        : function (r) {
            var n = kL(r, e);
            return n === void 0 && n === t ? BL(r, e) : VL(t, n, YL | QL);
          };
    }
    yh.exports = $L;
  });
  var ni = u((b5, Th) => {
    function ZL(e) {
      return e;
    }
    Th.exports = ZL;
  });
  var xa = u((O5, bh) => {
    function JL(e) {
      return function (t) {
        return t?.[e];
      };
    }
    bh.exports = JL;
  });
  var wh = u((w5, Oh) => {
    var eq = ti();
    function tq(e) {
      return function (t) {
        return eq(t, e);
      };
    }
    Oh.exports = tq;
  });
  var Sh = u((A5, Ah) => {
    var rq = xa(),
      nq = wh(),
      iq = ei(),
      oq = dr();
    function aq(e) {
      return iq(e) ? rq(oq(e)) : nq(e);
    }
    Ah.exports = aq;
  });
  var St = u((S5, Rh) => {
    var sq = Hv(),
      uq = Ih(),
      cq = ni(),
      lq = Le(),
      fq = Sh();
    function dq(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? cq
        : typeof e == "object"
        ? lq(e)
          ? uq(e[0], e[1])
          : sq(e)
        : fq(e);
    }
    Rh.exports = dq;
  });
  var Ca = u((R5, xh) => {
    var pq = St(),
      vq = Xt(),
      hq = Kr();
    function gq(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!vq(t)) {
          var o = pq(r, 3);
          (t = hq(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    xh.exports = gq;
  });
  var Na = u((x5, Ch) => {
    function Eq(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Ch.exports = Eq;
  });
  var Lh = u((C5, Nh) => {
    var _q = /\s/;
    function mq(e) {
      for (var t = e.length; t-- && _q.test(e.charAt(t)); );
      return t;
    }
    Nh.exports = mq;
  });
  var Ph = u((N5, qh) => {
    var yq = Lh(),
      Iq = /^\s+/;
    function Tq(e) {
      return e && e.slice(0, yq(e) + 1).replace(Iq, "");
    }
    qh.exports = Tq;
  });
  var ii = u((L5, Fh) => {
    var bq = Ph(),
      Dh = ft(),
      Oq = zr(),
      Mh = 0 / 0,
      wq = /^[-+]0x[0-9a-f]+$/i,
      Aq = /^0b[01]+$/i,
      Sq = /^0o[0-7]+$/i,
      Rq = parseInt;
    function xq(e) {
      if (typeof e == "number") return e;
      if (Oq(e)) return Mh;
      if (Dh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Dh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = bq(e);
      var r = Aq.test(e);
      return r || Sq.test(e) ? Rq(e.slice(2), r ? 2 : 8) : wq.test(e) ? Mh : +e;
    }
    Fh.exports = xq;
  });
  var Uh = u((q5, Xh) => {
    var Cq = ii(),
      Gh = 1 / 0,
      Nq = 17976931348623157e292;
    function Lq(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = Cq(e)), e === Gh || e === -Gh)) {
        var t = e < 0 ? -1 : 1;
        return t * Nq;
      }
      return e === e ? e : 0;
    }
    Xh.exports = Lq;
  });
  var La = u((P5, Wh) => {
    var qq = Uh();
    function Pq(e) {
      var t = qq(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Wh.exports = Pq;
  });
  var kh = u((D5, Vh) => {
    var Dq = Na(),
      Mq = St(),
      Fq = La(),
      Gq = Math.max;
    function Xq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : Fq(r);
      return i < 0 && (i = Gq(n + i, 0)), Dq(e, Mq(t, 3), i);
    }
    Vh.exports = Xq;
  });
  var qa = u((M5, Bh) => {
    var Uq = Ca(),
      Wq = kh(),
      Vq = Uq(Wq);
    Bh.exports = Vq;
  });
  var ai = u((Ue) => {
    "use strict";
    var kq = ut().default;
    Object.defineProperty(Ue, "__esModule", { value: !0 });
    Ue.withBrowser =
      Ue.TRANSFORM_STYLE_PREFIXED =
      Ue.TRANSFORM_PREFIXED =
      Ue.IS_BROWSER_ENV =
      Ue.FLEX_PREFIXED =
      Ue.ELEMENT_MATCHES =
        void 0;
    var Bq = kq(qa()),
      jh = typeof window < "u";
    Ue.IS_BROWSER_ENV = jh;
    var oi = (e, t) => (jh ? e() : t);
    Ue.withBrowser = oi;
    var Hq = oi(() =>
      (0, Bq.default)(
        [
          "matches",
          "matchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
          "webkitMatchesSelector",
        ],
        (e) => e in Element.prototype
      )
    );
    Ue.ELEMENT_MATCHES = Hq;
    var jq = oi(() => {
      let e = document.createElement("i"),
        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
        r = "";
      try {
        let { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i];
          if (((e.style.display = o), e.style.display === o)) return o;
        }
        return r;
      } catch {
        return r;
      }
    }, "flex");
    Ue.FLEX_PREFIXED = jq;
    var Kh = oi(() => {
      let e = document.createElement("i");
      if (e.style.transform == null) {
        let t = ["Webkit", "Moz", "ms"],
          r = "Transform",
          { length: n } = t;
        for (let i = 0; i < n; i++) {
          let o = t[i] + r;
          if (e.style[o] !== void 0) return o;
        }
      }
      return "transform";
    }, "transform");
    Ue.TRANSFORM_PREFIXED = Kh;
    var Hh = Kh.split("transform")[0],
      Kq = Hh ? Hh + "TransformStyle" : "transformStyle";
    Ue.TRANSFORM_STYLE_PREFIXED = Kq;
  });
  var Pa = u((G5, Zh) => {
    var zq = 4,
      Yq = 0.001,
      Qq = 1e-7,
      $q = 10,
      Qr = 11,
      si = 1 / (Qr - 1),
      Zq = typeof Float32Array == "function";
    function zh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function Yh(e, t) {
      return 3 * t - 6 * e;
    }
    function Qh(e) {
      return 3 * e;
    }
    function ui(e, t, r) {
      return ((zh(t, r) * e + Yh(t, r)) * e + Qh(t)) * e;
    }
    function $h(e, t, r) {
      return 3 * zh(t, r) * e * e + 2 * Yh(t, r) * e + Qh(t);
    }
    function Jq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ui(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > Qq && ++s < $q);
      return a;
    }
    function eP(e, t, r, n) {
      for (var i = 0; i < zq; ++i) {
        var o = $h(t, r, n);
        if (o === 0) return t;
        var a = ui(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    Zh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = Zq ? new Float32Array(Qr) : new Array(Qr);
      if (t !== r || n !== i)
        for (var a = 0; a < Qr; ++a) o[a] = ui(a * si, t, n);
      function s(c) {
        for (var h = 0, I = 1, d = Qr - 1; I !== d && o[I] <= c; ++I) h += si;
        --I;
        var T = (c - o[I]) / (o[I + 1] - o[I]),
          E = h + T * si,
          y = $h(E, t, n);
        return y >= Yq ? eP(c, E, t, n) : y === 0 ? E : Jq(c, h, h + si, t, n);
      }
      return function (h) {
        return t === r && n === i
          ? h
          : h === 0
          ? 0
          : h === 1
          ? 1
          : ui(s(h), r, i);
      };
    };
  });
  var Da = u((ue) => {
    "use strict";
    var tP = ut().default;
    Object.defineProperty(ue, "__esModule", { value: !0 });
    ue.bounce = FP;
    ue.bouncePast = GP;
    ue.easeOut = ue.easeInOut = ue.easeIn = ue.ease = void 0;
    ue.inBack = RP;
    ue.inCirc = OP;
    ue.inCubic = cP;
    ue.inElastic = NP;
    ue.inExpo = IP;
    ue.inOutBack = CP;
    ue.inOutCirc = AP;
    ue.inOutCubic = fP;
    ue.inOutElastic = qP;
    ue.inOutExpo = bP;
    ue.inOutQuad = uP;
    ue.inOutQuart = vP;
    ue.inOutQuint = EP;
    ue.inOutSine = yP;
    ue.inQuad = aP;
    ue.inQuart = dP;
    ue.inQuint = hP;
    ue.inSine = _P;
    ue.outBack = xP;
    ue.outBounce = SP;
    ue.outCirc = wP;
    ue.outCubic = lP;
    ue.outElastic = LP;
    ue.outExpo = TP;
    ue.outQuad = sP;
    ue.outQuart = pP;
    ue.outQuint = gP;
    ue.outSine = mP;
    ue.swingFrom = DP;
    ue.swingFromTo = PP;
    ue.swingTo = MP;
    var ci = tP(Pa()),
      yt = 1.70158,
      rP = (0, ci.default)(0.25, 0.1, 0.25, 1);
    ue.ease = rP;
    var nP = (0, ci.default)(0.42, 0, 1, 1);
    ue.easeIn = nP;
    var iP = (0, ci.default)(0, 0, 0.58, 1);
    ue.easeOut = iP;
    var oP = (0, ci.default)(0.42, 0, 0.58, 1);
    ue.easeInOut = oP;
    function aP(e) {
      return Math.pow(e, 2);
    }
    function sP(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function uP(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function cP(e) {
      return Math.pow(e, 3);
    }
    function lP(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function fP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function dP(e) {
      return Math.pow(e, 4);
    }
    function pP(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function vP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function hP(e) {
      return Math.pow(e, 5);
    }
    function gP(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function EP(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function _P(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function mP(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function yP(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function IP(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function TP(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function bP(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function OP(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function wP(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function AP(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function SP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function RP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function xP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function CP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function NP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
    }
    function LP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
            1);
    }
    function qP(e) {
      let t = yt,
        r = 0,
        n = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
              (n *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / r) *
                0.5 +
              1);
    }
    function PP(e) {
      let t = yt;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function DP(e) {
      let t = yt;
      return e * e * ((t + 1) * e - t);
    }
    function MP(e) {
      let t = yt;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function FP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function GP(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var Fa = u(($r) => {
    "use strict";
    var XP = ut().default,
      UP = Qt().default;
    Object.defineProperty($r, "__esModule", { value: !0 });
    $r.applyEasing = kP;
    $r.createBezierEasing = VP;
    $r.optimizeFloat = Ma;
    var Jh = UP(Da()),
      WP = XP(Pa());
    function Ma(e, t = 5, r = 10) {
      let n = Math.pow(r, t),
        i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
    function VP(e) {
      return (0, WP.default)(...e);
    }
    function kP(e, t, r) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Ma(r ? (t > 0 ? r(t) : t) : t > 0 && e && Jh[e] ? Jh[e](t) : t);
    }
  });
  var ng = u((pr) => {
    "use strict";
    Object.defineProperty(pr, "__esModule", { value: !0 });
    pr.createElementState = rg;
    pr.ixElements = void 0;
    pr.mergeActionState = Ga;
    var li = ir(),
      tg = Be(),
      {
        HTML_ELEMENT: W5,
        PLAIN_OBJECT: BP,
        ABSTRACT_NODE: V5,
        CONFIG_X_VALUE: HP,
        CONFIG_Y_VALUE: jP,
        CONFIG_Z_VALUE: KP,
        CONFIG_VALUE: zP,
        CONFIG_X_UNIT: YP,
        CONFIG_Y_UNIT: QP,
        CONFIG_Z_UNIT: $P,
        CONFIG_UNIT: ZP,
      } = tg.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: JP,
        IX2_INSTANCE_ADDED: eD,
        IX2_ELEMENT_STATE_CHANGED: tD,
      } = tg.IX2EngineActionTypes,
      eg = {},
      rD = "refState",
      nD = (e = eg, t = {}) => {
        switch (t.type) {
          case JP:
            return eg;
          case eD: {
            let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
              { actionTypeId: s } = o,
              c = e;
            return (
              (0, li.getIn)(c, [r, n]) !== n && (c = rg(c, n, a, r, o)),
              Ga(c, r, s, i, o)
            );
          }
          case tD: {
            let {
              elementId: r,
              actionTypeId: n,
              current: i,
              actionItem: o,
            } = t.payload;
            return Ga(e, r, n, i, o);
          }
          default:
            return e;
        }
      };
    pr.ixElements = nD;
    function rg(e, t, r, n, i) {
      let o =
        r === BP ? (0, li.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0, li.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
    }
    function Ga(e, t, r, n, i) {
      let o = oD(i),
        a = [t, rD, r];
      return (0, li.mergeIn)(e, a, n, o);
    }
    var iD = [
      [HP, YP],
      [jP, QP],
      [KP, $P],
      [zP, ZP],
    ];
    function oD(e) {
      let { config: t } = e;
      return iD.reduce((r, n) => {
        let i = n[0],
          o = n[1],
          a = t[i],
          s = t[o];
        return a != null && s != null && (r[o] = s), r;
      }, {});
    }
  });
  var ig = u((qe) => {
    "use strict";
    Object.defineProperty(qe, "__esModule", { value: !0 });
    qe.renderPlugin =
      qe.getPluginOrigin =
      qe.getPluginDuration =
      qe.getPluginDestination =
      qe.getPluginConfig =
      qe.createPluginInstance =
      qe.clearPlugin =
        void 0;
    var aD = (e) => e.value;
    qe.getPluginConfig = aD;
    var sD = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    qe.getPluginDuration = sD;
    var uD = (e) => e || { value: 0 };
    qe.getPluginOrigin = uD;
    var cD = (e) => ({ value: e.value });
    qe.getPluginDestination = cD;
    var lD = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    qe.createPluginInstance = lD;
    var fD = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    qe.renderPlugin = fD;
    var dD = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    qe.clearPlugin = dD;
  });
  var Xa = u((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: !0 });
    Ce.getPluginOrigin =
      Ce.getPluginDuration =
      Ce.getPluginDestination =
      Ce.getPluginConfig =
      Ce.createPluginInstance =
      Ce.clearPlugin =
        void 0;
    Ce.isPluginType = hD;
    Ce.renderPlugin = void 0;
    var Wt = ig(),
      og = Be(),
      pD = ai(),
      vD = {
        [og.ActionTypeConsts.PLUGIN_LOTTIE]: {
          getConfig: Wt.getPluginConfig,
          getOrigin: Wt.getPluginOrigin,
          getDuration: Wt.getPluginDuration,
          getDestination: Wt.getPluginDestination,
          createInstance: Wt.createPluginInstance,
          render: Wt.renderPlugin,
          clear: Wt.clearPlugin,
        },
      };
    function hD(e) {
      return e === og.ActionTypeConsts.PLUGIN_LOTTIE;
    }
    var Vt = (e) => (t) => {
        if (!pD.IS_BROWSER_ENV) return () => null;
        let r = vD[t];
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      },
      gD = Vt("getConfig");
    Ce.getPluginConfig = gD;
    var ED = Vt("getOrigin");
    Ce.getPluginOrigin = ED;
    var _D = Vt("getDuration");
    Ce.getPluginDuration = _D;
    var mD = Vt("getDestination");
    Ce.getPluginDestination = mD;
    var yD = Vt("createInstance");
    Ce.createPluginInstance = yD;
    var ID = Vt("render");
    Ce.renderPlugin = ID;
    var TD = Vt("clear");
    Ce.clearPlugin = TD;
  });
  var sg = u((j5, ag) => {
    function bD(e, t) {
      return e == null || e !== e ? t : e;
    }
    ag.exports = bD;
  });
  var cg = u((K5, ug) => {
    function OD(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    ug.exports = OD;
  });
  var fg = u((z5, lg) => {
    function wD(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var c = a[e ? s : ++i];
          if (r(o[c], c, o) === !1) break;
        }
        return t;
      };
    }
    lg.exports = wD;
  });
  var pg = u((Y5, dg) => {
    var AD = fg(),
      SD = AD();
    dg.exports = SD;
  });
  var Ua = u((Q5, vg) => {
    var RD = pg(),
      xD = Kr();
    function CD(e, t) {
      return e && RD(e, t, xD);
    }
    vg.exports = CD;
  });
  var gg = u(($5, hg) => {
    var ND = Xt();
    function LD(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!ND(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    hg.exports = LD;
  });
  var Wa = u((Z5, Eg) => {
    var qD = Ua(),
      PD = gg(),
      DD = PD(qD);
    Eg.exports = DD;
  });
  var mg = u((J5, _g) => {
    function MD(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    _g.exports = MD;
  });
  var Ig = u((ej, yg) => {
    var FD = cg(),
      GD = Wa(),
      XD = St(),
      UD = mg(),
      WD = Le();
    function VD(e, t, r) {
      var n = WD(e) ? FD : UD,
        i = arguments.length < 3;
      return n(e, XD(t, 4), r, i, GD);
    }
    yg.exports = VD;
  });
  var bg = u((tj, Tg) => {
    var kD = Na(),
      BD = St(),
      HD = La(),
      jD = Math.max,
      KD = Math.min;
    function zD(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = HD(r)), (i = r < 0 ? jD(n + i, 0) : KD(i, n - 1))),
        kD(e, BD(t, 3), i, !0)
      );
    }
    Tg.exports = zD;
  });
  var wg = u((rj, Og) => {
    var YD = Ca(),
      QD = bg(),
      $D = YD(QD);
    Og.exports = $D;
  });
  var Sg = u((fi) => {
    "use strict";
    Object.defineProperty(fi, "__esModule", { value: !0 });
    fi.default = void 0;
    var ZD = Object.prototype.hasOwnProperty;
    function Ag(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function JD(e, t) {
      if (Ag(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (let i = 0; i < r.length; i++)
        if (!ZD.call(t, r[i]) || !Ag(e[r[i]], t[r[i]])) return !1;
      return !0;
    }
    var eM = JD;
    fi.default = eM;
  });
  var zg = u((me) => {
    "use strict";
    var vi = ut().default;
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.cleanupHTMLElement = $M;
    me.clearAllStyles = QM;
    me.getActionListProgress = JM;
    me.getAffectedElements = Ka;
    me.getComputedStyle = wM;
    me.getDestinationValues = LM;
    me.getElementId = IM;
    me.getInstanceId = mM;
    me.getInstanceOrigin = RM;
    me.getItemConfigByKey = void 0;
    me.getMaxDurationItemIndex = Kg;
    me.getNamespacedParameterId = r1;
    me.getRenderType = Bg;
    me.getStyleProp = qM;
    me.mediaQueriesEqual = i1;
    me.observeStore = OM;
    me.reduceListToGroup = e1;
    me.reifyState = TM;
    me.renderHTMLElement = PM;
    Object.defineProperty(me, "shallowEqual", {
      enumerable: !0,
      get: function () {
        return Fg.default;
      },
    });
    me.shouldAllowMediaQuery = n1;
    me.shouldNamespaceEventParameter = t1;
    me.stringifyTarget = o1;
    var Rt = vi(sg()),
      ka = vi(Ig()),
      Va = vi(wg()),
      Rg = ir(),
      kt = Be(),
      Fg = vi(Sg()),
      tM = Fa(),
      vt = Xa(),
      We = ai(),
      {
        BACKGROUND: rM,
        TRANSFORM: nM,
        TRANSLATE_3D: iM,
        SCALE_3D: oM,
        ROTATE_X: aM,
        ROTATE_Y: sM,
        ROTATE_Z: uM,
        SKEW: cM,
        PRESERVE_3D: lM,
        FLEX: fM,
        OPACITY: di,
        FILTER: Zr,
        FONT_VARIATION_SETTINGS: Jr,
        WIDTH: dt,
        HEIGHT: pt,
        BACKGROUND_COLOR: Gg,
        BORDER_COLOR: dM,
        COLOR: pM,
        CHILDREN: xg,
        IMMEDIATE_CHILDREN: vM,
        SIBLINGS: Cg,
        PARENT: hM,
        DISPLAY: pi,
        WILL_CHANGE: vr,
        AUTO: xt,
        COMMA_DELIMITER: en,
        COLON_DELIMITER: gM,
        BAR_DELIMITER: Ng,
        RENDER_TRANSFORM: Xg,
        RENDER_GENERAL: Ba,
        RENDER_STYLE: Ha,
        RENDER_PLUGIN: Ug,
      } = kt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: hr,
        TRANSFORM_SCALE: gr,
        TRANSFORM_ROTATE: Er,
        TRANSFORM_SKEW: tn,
        STYLE_OPACITY: Wg,
        STYLE_FILTER: rn,
        STYLE_FONT_VARIATION: nn,
        STYLE_SIZE: _r,
        STYLE_BACKGROUND_COLOR: mr,
        STYLE_BORDER: yr,
        STYLE_TEXT_COLOR: Ir,
        GENERAL_DISPLAY: hi,
      } = kt.ActionTypeConsts,
      EM = "OBJECT_VALUE",
      Vg = (e) => e.trim(),
      ja = Object.freeze({ [mr]: Gg, [yr]: dM, [Ir]: pM }),
      kg = Object.freeze({
        [We.TRANSFORM_PREFIXED]: nM,
        [Gg]: rM,
        [di]: di,
        [Zr]: Zr,
        [dt]: dt,
        [pt]: pt,
        [Jr]: Jr,
      }),
      Lg = {},
      _M = 1;
    function mM() {
      return "i" + _M++;
    }
    var yM = 1;
    function IM(e, t) {
      for (let r in e) {
        let n = e[r];
        if (n && n.ref === t) return n.id;
      }
      return "e" + yM++;
    }
    function TM({ events: e, actionLists: t, site: r } = {}) {
      let n = (0, ka.default)(
          e,
          (a, s) => {
            let { eventTypeId: c } = s;
            return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
          },
          {}
        ),
        i = r && r.mediaQueries,
        o = [];
      return (
        i
          ? (o = i.map((a) => a.key))
          : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: n,
            mediaQueries: i,
            mediaQueryKeys: o,
          },
        }
      );
    }
    var bM = (e, t) => e === t;
    function OM({ store: e, select: t, onChange: r, comparator: n = bM }) {
      let { getState: i, subscribe: o } = e,
        a = o(c),
        s = t(i());
      function c() {
        let h = t(i());
        if (h == null) {
          a();
          return;
        }
        n(h, s) || ((s = h), r(s, e));
      }
      return a;
    }
    function qg(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        } = e;
        return {
          id: r,
          objectId: n,
          selector: i,
          selectorGuids: o,
          appliesTo: a,
          useEventTarget: s,
        };
      }
      return {};
    }
    function Ka({
      config: e,
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i,
    }) {
      var o, a, s;
      if (!i) throw new Error("IX2 missing elementApi");
      let { targets: c } = e;
      if (Array.isArray(c) && c.length > 0)
        return c.reduce(
          (x, U) =>
            x.concat(
              Ka({
                config: { target: U },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i,
              })
            ),
          []
        );
      let {
          getValidDocument: h,
          getQuerySelector: I,
          queryDocument: d,
          getChildElements: T,
          getSiblingElements: E,
          matchSelector: y,
          elementContains: O,
          isSiblingNode: C,
        } = i,
        { target: R } = e;
      if (!R) return [];
      let {
        id: L,
        objectId: S,
        selector: X,
        selectorGuids: M,
        appliesTo: G,
        useEventTarget: B,
      } = qg(R);
      if (S) return [Lg[S] || (Lg[S] = {})];
      if (G === kt.EventAppliesTo.PAGE) {
        let x = h(L);
        return x ? [x] : [];
      }
      let J =
          ((o =
            t == null ||
            (a = t.action) === null ||
            a === void 0 ||
            (s = a.config) === null ||
            s === void 0
              ? void 0
              : s.affectedElements) !== null && o !== void 0
            ? o
            : {})[L || X] || {},
        oe = !!(J.id || J.selector),
        H,
        P,
        _,
        D = t && I(qg(t.target));
      if (
        (oe
          ? ((H = J.limitAffectedElements), (P = D), (_ = I(J)))
          : (P = _ = I({ id: L, selector: X, selectorGuids: M })),
        t && B)
      ) {
        let x = r && (_ || B === !0) ? [r] : d(D);
        if (_) {
          if (B === hM) return d(_).filter((U) => x.some((Q) => O(U, Q)));
          if (B === xg) return d(_).filter((U) => x.some((Q) => O(Q, U)));
          if (B === Cg) return d(_).filter((U) => x.some((Q) => C(Q, U)));
        }
        return x;
      }
      return P == null || _ == null
        ? []
        : We.IS_BROWSER_ENV && n
        ? d(_).filter((x) => n.contains(x))
        : H === xg
        ? d(P, _)
        : H === vM
        ? T(d(P)).filter(y(_))
        : H === Cg
        ? E(d(P)).filter(y(_))
        : d(_);
    }
    function wM({ element: e, actionItem: t }) {
      if (!We.IS_BROWSER_ENV) return {};
      let { actionTypeId: r } = t;
      switch (r) {
        case _r:
        case mr:
        case yr:
        case Ir:
        case hi:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var Pg = /px/,
      AM = (e, t) =>
        t.reduce(
          (r, n) => (r[n.type] == null && (r[n.type] = DM[n.type]), r),
          e || {}
        ),
      SM = (e, t) =>
        t.reduce(
          (r, n) => (
            r[n.type] == null &&
              (r[n.type] = MM[n.type] || n.defaultValue || 0),
            r
          ),
          e || {}
        );
    function RM(e, t = {}, r = {}, n, i) {
      let { getStyle: o } = i,
        { actionTypeId: a } = n;
      if ((0, vt.isPluginType)(a)) return (0, vt.getPluginOrigin)(a)(t[a]);
      switch (n.actionTypeId) {
        case hr:
        case gr:
        case Er:
        case tn:
          return t[n.actionTypeId] || za[n.actionTypeId];
        case rn:
          return AM(t[n.actionTypeId], n.config.filters);
        case nn:
          return SM(t[n.actionTypeId], n.config.fontVariations);
        case Wg:
          return { value: (0, Rt.default)(parseFloat(o(e, di)), 1) };
        case _r: {
          let s = o(e, dt),
            c = o(e, pt),
            h,
            I;
          return (
            n.config.widthUnit === xt
              ? (h = Pg.test(s) ? parseFloat(s) : parseFloat(r.width))
              : (h = (0, Rt.default)(parseFloat(s), parseFloat(r.width))),
            n.config.heightUnit === xt
              ? (I = Pg.test(c) ? parseFloat(c) : parseFloat(r.height))
              : (I = (0, Rt.default)(parseFloat(c), parseFloat(r.height))),
            { widthValue: h, heightValue: I }
          );
        }
        case mr:
        case yr:
        case Ir:
          return KM({
            element: e,
            actionTypeId: n.actionTypeId,
            computedStyle: r,
            getStyle: o,
          });
        case hi:
          return { value: (0, Rt.default)(o(e, pi), r.display) };
        case EM:
          return t[n.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var xM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      CM = (e, t) => (t && (e[t.type] = t.value || 0), e),
      NM = (e, t, r) => {
        if ((0, vt.isPluginType)(e)) return (0, vt.getPluginConfig)(e)(r, t);
        switch (e) {
          case rn: {
            let n = (0, Va.default)(r.filters, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          case nn: {
            let n = (0, Va.default)(r.fontVariations, ({ type: i }) => i === t);
            return n ? n.value : 0;
          }
          default:
            return r[t];
        }
      };
    me.getItemConfigByKey = NM;
    function LM({ element: e, actionItem: t, elementApi: r }) {
      if ((0, vt.isPluginType)(t.actionTypeId))
        return (0, vt.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case hr:
        case gr:
        case Er:
        case tn: {
          let { xValue: n, yValue: i, zValue: o } = t.config;
          return { xValue: n, yValue: i, zValue: o };
        }
        case _r: {
          let { getStyle: n, setStyle: i, getProperty: o } = r,
            { widthUnit: a, heightUnit: s } = t.config,
            { widthValue: c, heightValue: h } = t.config;
          if (!We.IS_BROWSER_ENV) return { widthValue: c, heightValue: h };
          if (a === xt) {
            let I = n(e, dt);
            i(e, dt, ""), (c = o(e, "offsetWidth")), i(e, dt, I);
          }
          if (s === xt) {
            let I = n(e, pt);
            i(e, pt, ""), (h = o(e, "offsetHeight")), i(e, pt, I);
          }
          return { widthValue: c, heightValue: h };
        }
        case mr:
        case yr:
        case Ir: {
          let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
          return { rValue: n, gValue: i, bValue: o, aValue: a };
        }
        case rn:
          return t.config.filters.reduce(xM, {});
        case nn:
          return t.config.fontVariations.reduce(CM, {});
        default: {
          let { value: n } = t.config;
          return { value: n };
        }
      }
    }
    function Bg(e) {
      if (/^TRANSFORM_/.test(e)) return Xg;
      if (/^STYLE_/.test(e)) return Ha;
      if (/^GENERAL_/.test(e)) return Ba;
      if (/^PLUGIN_/.test(e)) return Ug;
    }
    function qM(e, t) {
      return e === Ha ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function PM(e, t, r, n, i, o, a, s, c) {
      switch (s) {
        case Xg:
          return XM(e, t, r, i, a);
        case Ha:
          return zM(e, t, r, i, o, a);
        case Ba:
          return YM(e, i, a);
        case Ug: {
          let { actionTypeId: h } = i;
          if ((0, vt.isPluginType)(h)) return (0, vt.renderPlugin)(h)(c, t, i);
        }
      }
    }
    var za = {
        [hr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [gr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [tn]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      DM = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      MM = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      FM = (e, t) => {
        let r = (0, Va.default)(t.filters, ({ type: n }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      GM = Object.keys(za);
    function XM(e, t, r, n, i) {
      let o = GM.map((s) => {
          let c = za[s],
            {
              xValue: h = c.xValue,
              yValue: I = c.yValue,
              zValue: d = c.zValue,
              xUnit: T = "",
              yUnit: E = "",
              zUnit: y = "",
            } = t[s] || {};
          switch (s) {
            case hr:
              return `${iM}(${h}${T}, ${I}${E}, ${d}${y})`;
            case gr:
              return `${oM}(${h}${T}, ${I}${E}, ${d}${y})`;
            case Er:
              return `${aM}(${h}${T}) ${sM}(${I}${E}) ${uM}(${d}${y})`;
            case tn:
              return `${cM}(${h}${T}, ${I}${E})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: a } = i;
      Bt(e, We.TRANSFORM_PREFIXED, i),
        a(e, We.TRANSFORM_PREFIXED, o),
        VM(n, r) && a(e, We.TRANSFORM_STYLE_PREFIXED, lM);
    }
    function UM(e, t, r, n) {
      let i = (0, ka.default)(t, (a, s, c) => `${a} ${c}(${s}${FM(c, r)})`, ""),
        { setStyle: o } = n;
      Bt(e, Zr, n), o(e, Zr, i);
    }
    function WM(e, t, r, n) {
      let i = (0, ka.default)(
          t,
          (a, s, c) => (a.push(`"${c}" ${s}`), a),
          []
        ).join(", "),
        { setStyle: o } = n;
      Bt(e, Jr, n), o(e, Jr, i);
    }
    function VM({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
      return (
        (e === hr && n !== void 0) ||
        (e === gr && n !== void 0) ||
        (e === Er && (t !== void 0 || r !== void 0))
      );
    }
    var kM = "\\(([^)]+)\\)",
      BM = /^rgb/,
      HM = RegExp(`rgba?${kM}`);
    function jM(e, t) {
      let r = e.exec(t);
      return r ? r[1] : "";
    }
    function KM({
      element: e,
      actionTypeId: t,
      computedStyle: r,
      getStyle: n,
    }) {
      let i = ja[t],
        o = n(e, i),
        a = BM.test(o) ? o : r[i],
        s = jM(HM, a).split(en);
      return {
        rValue: (0, Rt.default)(parseInt(s[0], 10), 255),
        gValue: (0, Rt.default)(parseInt(s[1], 10), 255),
        bValue: (0, Rt.default)(parseInt(s[2], 10), 255),
        aValue: (0, Rt.default)(parseFloat(s[3]), 1),
      };
    }
    function zM(e, t, r, n, i, o) {
      let { setStyle: a } = o;
      switch (n.actionTypeId) {
        case _r: {
          let { widthUnit: s = "", heightUnit: c = "" } = n.config,
            { widthValue: h, heightValue: I } = r;
          h !== void 0 &&
            (s === xt && (s = "px"), Bt(e, dt, o), a(e, dt, h + s)),
            I !== void 0 &&
              (c === xt && (c = "px"), Bt(e, pt, o), a(e, pt, I + c));
          break;
        }
        case rn: {
          UM(e, r, n.config, o);
          break;
        }
        case nn: {
          WM(e, r, n.config, o);
          break;
        }
        case mr:
        case yr:
        case Ir: {
          let s = ja[n.actionTypeId],
            c = Math.round(r.rValue),
            h = Math.round(r.gValue),
            I = Math.round(r.bValue),
            d = r.aValue;
          Bt(e, s, o),
            a(
              e,
              s,
              d >= 1 ? `rgb(${c},${h},${I})` : `rgba(${c},${h},${I},${d})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = n.config;
          Bt(e, i, o), a(e, i, r.value + s);
          break;
        }
      }
    }
    function YM(e, t, r) {
      let { setStyle: n } = r;
      switch (t.actionTypeId) {
        case hi: {
          let { value: i } = t.config;
          i === fM && We.IS_BROWSER_ENV
            ? n(e, pi, We.FLEX_PREFIXED)
            : n(e, pi, i);
          return;
        }
      }
    }
    function Bt(e, t, r) {
      if (!We.IS_BROWSER_ENV) return;
      let n = kg[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, vr);
      if (!a) {
        o(e, vr, n);
        return;
      }
      let s = a.split(en).map(Vg);
      s.indexOf(n) === -1 && o(e, vr, s.concat(n).join(en));
    }
    function Hg(e, t, r) {
      if (!We.IS_BROWSER_ENV) return;
      let n = kg[t];
      if (!n) return;
      let { getStyle: i, setStyle: o } = r,
        a = i(e, vr);
      !a ||
        a.indexOf(n) === -1 ||
        o(
          e,
          vr,
          a
            .split(en)
            .map(Vg)
            .filter((s) => s !== n)
            .join(en)
        );
    }
    function QM({ store: e, elementApi: t }) {
      let { ixData: r } = e.getState(),
        { events: n = {}, actionLists: i = {} } = r;
      Object.keys(n).forEach((o) => {
        let a = n[o],
          { config: s } = a.action,
          { actionListId: c } = s,
          h = i[c];
        h && Dg({ actionList: h, event: a, elementApi: t });
      }),
        Object.keys(i).forEach((o) => {
          Dg({ actionList: i[o], elementApi: t });
        });
    }
    function Dg({ actionList: e = {}, event: t, elementApi: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e;
      n &&
        n.forEach((o) => {
          Mg({ actionGroup: o, event: t, elementApi: r });
        }),
        i &&
          i.forEach((o) => {
            let { continuousActionGroups: a } = o;
            a.forEach((s) => {
              Mg({ actionGroup: s, event: t, elementApi: r });
            });
          });
    }
    function Mg({ actionGroup: e, event: t, elementApi: r }) {
      let { actionItems: n } = e;
      n.forEach(({ actionTypeId: i, config: o }) => {
        let a;
        (0, vt.isPluginType)(i)
          ? (a = (0, vt.clearPlugin)(i))
          : (a = jg({ effect: ZM, actionTypeId: i, elementApi: r })),
          Ka({ config: o, event: t, elementApi: r }).forEach(a);
      });
    }
    function $M(e, t, r) {
      let { setStyle: n, getStyle: i } = r,
        { actionTypeId: o } = t;
      if (o === _r) {
        let { config: a } = t;
        a.widthUnit === xt && n(e, dt, ""), a.heightUnit === xt && n(e, pt, "");
      }
      i(e, vr) && jg({ effect: Hg, actionTypeId: o, elementApi: r })(e);
    }
    var jg =
      ({ effect: e, actionTypeId: t, elementApi: r }) =>
      (n) => {
        switch (t) {
          case hr:
          case gr:
          case Er:
          case tn:
            e(n, We.TRANSFORM_PREFIXED, r);
            break;
          case rn:
            e(n, Zr, r);
            break;
          case nn:
            e(n, Jr, r);
            break;
          case Wg:
            e(n, di, r);
            break;
          case _r:
            e(n, dt, r), e(n, pt, r);
            break;
          case mr:
          case yr:
          case Ir:
            e(n, ja[t], r);
            break;
          case hi:
            e(n, pi, r);
            break;
        }
      };
    function ZM(e, t, r) {
      let { setStyle: n } = r;
      Hg(e, t, r),
        n(e, t, ""),
        t === We.TRANSFORM_PREFIXED && n(e, We.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Kg(e) {
      let t = 0,
        r = 0;
      return (
        e.forEach((n, i) => {
          let { config: o } = n,
            a = o.delay + o.duration;
          a >= t && ((t = a), (r = i));
        }),
        r
      );
    }
    function JM(e, t) {
      let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
        { actionItem: i, verboseTimeElapsed: o = 0 } = t,
        a = 0,
        s = 0;
      return (
        r.forEach((c, h) => {
          if (n && h === 0) return;
          let { actionItems: I } = c,
            d = I[Kg(I)],
            { config: T, actionTypeId: E } = d;
          i.id === d.id && (s = a + o);
          let y = Bg(E) === Ba ? 0 : T.duration;
          a += T.delay + y;
        }),
        a > 0 ? (0, tM.optimizeFloat)(s / a) : 0
      );
    }
    function e1({ actionList: e, actionItemId: t, rawData: r }) {
      let { actionItemGroups: n, continuousParameterGroups: i } = e,
        o = [],
        a = (s) => (
          o.push((0, Rg.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        n && n.some(({ actionItems: s }) => s.some(a)),
        i &&
          i.some((s) => {
            let { continuousActionGroups: c } = s;
            return c.some(({ actionItems: h }) => h.some(a));
          }),
        (0, Rg.setIn)(r, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
        })
      );
    }
    function t1(e, { basedOn: t }) {
      return (
        (e === kt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === kt.EventBasedOn.ELEMENT || t == null)) ||
        (e === kt.EventTypeConsts.MOUSE_MOVE && t === kt.EventBasedOn.ELEMENT)
      );
    }
    function r1(e, t) {
      return e + gM + t;
    }
    function n1(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function i1(e, t) {
      return (0, Fg.default)(e && e.sort(), t && t.sort());
    }
    function o1(e) {
      if (typeof e == "string") return e;
      let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
      return t + Ng + r + Ng + n;
    }
  });
  var Ht = u((Ve) => {
    "use strict";
    var Tr = Qt().default;
    Object.defineProperty(Ve, "__esModule", { value: !0 });
    Ve.IX2VanillaUtils =
      Ve.IX2VanillaPlugins =
      Ve.IX2ElementsReducer =
      Ve.IX2Easings =
      Ve.IX2EasingUtils =
      Ve.IX2BrowserSupport =
        void 0;
    var a1 = Tr(ai());
    Ve.IX2BrowserSupport = a1;
    var s1 = Tr(Da());
    Ve.IX2Easings = s1;
    var u1 = Tr(Fa());
    Ve.IX2EasingUtils = u1;
    var c1 = Tr(ng());
    Ve.IX2ElementsReducer = c1;
    var l1 = Tr(Xa());
    Ve.IX2VanillaPlugins = l1;
    var f1 = Tr(zg());
    Ve.IX2VanillaUtils = f1;
  });
  var Zg = u((Ei) => {
    "use strict";
    Object.defineProperty(Ei, "__esModule", { value: !0 });
    Ei.ixInstances = void 0;
    var Yg = Be(),
      Qg = Ht(),
      br = ir(),
      {
        IX2_RAW_DATA_IMPORTED: d1,
        IX2_SESSION_STOPPED: p1,
        IX2_INSTANCE_ADDED: v1,
        IX2_INSTANCE_STARTED: h1,
        IX2_INSTANCE_REMOVED: g1,
        IX2_ANIMATION_FRAME_CHANGED: E1,
      } = Yg.IX2EngineActionTypes,
      {
        optimizeFloat: gi,
        applyEasing: $g,
        createBezierEasing: _1,
      } = Qg.IX2EasingUtils,
      { RENDER_GENERAL: m1 } = Yg.IX2EngineConstants,
      {
        getItemConfigByKey: Ya,
        getRenderType: y1,
        getStyleProp: I1,
      } = Qg.IX2VanillaUtils,
      T1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: c,
            customEasingFn: h,
            skipMotion: I,
            skipToValue: d,
          } = e,
          { parameters: T } = t.payload,
          E = Math.max(1 - a, 0.01),
          y = T[n];
        y == null && ((E = 1), (y = s));
        let O = Math.max(y, 0) || 0,
          C = gi(O - r),
          R = I ? d : gi(r + C * E),
          L = R * 100;
        if (R === r && e.current) return e;
        let S, X, M, G;
        for (let $ = 0, { length: J } = i; $ < J; $++) {
          let { keyframe: oe, actionItems: H } = i[$];
          if (($ === 0 && (S = H[0]), L >= oe)) {
            S = H[0];
            let P = i[$ + 1],
              _ = P && L !== oe;
            (X = _ ? P.actionItems[0] : null),
              _ && ((M = oe / 100), (G = (P.keyframe - oe) / 100));
          }
        }
        let B = {};
        if (S && !X)
          for (let $ = 0, { length: J } = o; $ < J; $++) {
            let oe = o[$];
            B[oe] = Ya(c, oe, S.config);
          }
        else if (S && X && M !== void 0 && G !== void 0) {
          let $ = (R - M) / G,
            J = S.config.easing,
            oe = $g(J, $, h);
          for (let H = 0, { length: P } = o; H < P; H++) {
            let _ = o[H],
              D = Ya(c, _, S.config),
              Q = (Ya(c, _, X.config) - D) * oe + D;
            B[_] = Q;
          }
        }
        return (0, br.merge)(e, { position: R, current: B });
      },
      b1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: c,
            destination: h,
            destinationKeys: I,
            pluginDuration: d,
            instanceDelay: T,
            customEasingFn: E,
            skipMotion: y,
          } = e,
          O = c.config.easing,
          { duration: C, delay: R } = c.config;
        d != null && (C = d),
          (R = T ?? R),
          a === m1 ? (C = 0) : (o || y) && (C = R = 0);
        let { now: L } = t.payload;
        if (r && n) {
          let S = L - (i + R);
          if (s) {
            let $ = L - i,
              J = C + R,
              oe = gi(Math.min(Math.max(0, $ / J), 1));
            e = (0, br.set)(e, "verboseTimeElapsed", J * oe);
          }
          if (S < 0) return e;
          let X = gi(Math.min(Math.max(0, S / C), 1)),
            M = $g(O, X, E),
            G = {},
            B = null;
          return (
            I.length &&
              (B = I.reduce(($, J) => {
                let oe = h[J],
                  H = parseFloat(n[J]) || 0,
                  _ = (parseFloat(oe) - H) * M + H;
                return ($[J] = _), $;
              }, {})),
            (G.current = B),
            (G.position = X),
            X === 1 && ((G.active = !1), (G.complete = !0)),
            (0, br.merge)(e, G)
          );
        }
        return e;
      },
      O1 = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case d1:
            return t.payload.ixInstances || Object.freeze({});
          case p1:
            return Object.freeze({});
          case v1: {
            let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: c,
                groupIndex: h,
                isCarrier: I,
                origin: d,
                destination: T,
                immediate: E,
                verbose: y,
                continuous: O,
                parameterId: C,
                actionGroups: R,
                smoothing: L,
                restingValue: S,
                pluginInstance: X,
                pluginDuration: M,
                instanceDelay: G,
                skipMotion: B,
                skipToValue: $,
              } = t.payload,
              { actionTypeId: J } = i,
              oe = y1(J),
              H = I1(oe, J),
              P = Object.keys(T).filter((D) => T[D] != null),
              { easing: _ } = i.config;
            return (0, br.set)(e, r, {
              id: r,
              elementId: n,
              active: !1,
              position: 0,
              start: 0,
              origin: d,
              destination: T,
              destinationKeys: P,
              immediate: E,
              verbose: y,
              current: null,
              actionItem: i,
              actionTypeId: J,
              eventId: o,
              eventTarget: a,
              eventStateKey: s,
              actionListId: c,
              groupIndex: h,
              renderType: oe,
              isCarrier: I,
              styleProp: H,
              continuous: O,
              parameterId: C,
              actionGroups: R,
              smoothing: L,
              restingValue: S,
              pluginInstance: X,
              pluginDuration: M,
              instanceDelay: G,
              skipMotion: B,
              skipToValue: $,
              customEasingFn:
                Array.isArray(_) && _.length === 4 ? _1(_) : void 0,
            });
          }
          case h1: {
            let { instanceId: r, time: n } = t.payload;
            return (0, br.mergeIn)(e, [r], {
              active: !0,
              complete: !1,
              start: n,
            });
          }
          case g1: {
            let { instanceId: r } = t.payload;
            if (!e[r]) return e;
            let n = {},
              i = Object.keys(e),
              { length: o } = i;
            for (let a = 0; a < o; a++) {
              let s = i[a];
              s !== r && (n[s] = e[s]);
            }
            return n;
          }
          case E1: {
            let r = e,
              n = Object.keys(e),
              { length: i } = n;
            for (let o = 0; o < i; o++) {
              let a = n[o],
                s = e[a],
                c = s.continuous ? T1 : b1;
              r = (0, br.set)(r, a, c(s, t));
            }
            return r;
          }
          default:
            return e;
        }
      };
    Ei.ixInstances = O1;
  });
  var Jg = u((_i) => {
    "use strict";
    Object.defineProperty(_i, "__esModule", { value: !0 });
    _i.ixParameters = void 0;
    var w1 = Be(),
      {
        IX2_RAW_DATA_IMPORTED: A1,
        IX2_SESSION_STOPPED: S1,
        IX2_PARAMETER_CHANGED: R1,
      } = w1.IX2EngineActionTypes,
      x1 = (e = {}, t) => {
        switch (t.type) {
          case A1:
            return t.payload.ixParameters || {};
          case S1:
            return {};
          case R1: {
            let { key: r, value: n } = t.payload;
            return (e[r] = n), e;
          }
          default:
            return e;
        }
      };
    _i.ixParameters = x1;
  });
  var eE = u((mi) => {
    "use strict";
    Object.defineProperty(mi, "__esModule", { value: !0 });
    mi.default = void 0;
    var C1 = Zo(),
      N1 = If(),
      L1 = Uf(),
      q1 = Vf(),
      P1 = Ht(),
      D1 = Zg(),
      M1 = Jg(),
      { ixElements: F1 } = P1.IX2ElementsReducer,
      G1 = (0, C1.combineReducers)({
        ixData: N1.ixData,
        ixRequest: L1.ixRequest,
        ixSession: q1.ixSession,
        ixElements: F1,
        ixInstances: D1.ixInstances,
        ixParameters: M1.ixParameters,
      });
    mi.default = G1;
  });
  var tE = u((cj, on) => {
    function X1(e, t) {
      if (e == null) return {};
      var r = {},
        n = Object.keys(e),
        i,
        o;
      for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
      return r;
    }
    (on.exports = X1),
      (on.exports.__esModule = !0),
      (on.exports.default = on.exports);
  });
  var nE = u((lj, rE) => {
    var U1 = wt(),
      W1 = Le(),
      V1 = _t(),
      k1 = "[object String]";
    function B1(e) {
      return typeof e == "string" || (!W1(e) && V1(e) && U1(e) == k1);
    }
    rE.exports = B1;
  });
  var oE = u((fj, iE) => {
    var H1 = xa(),
      j1 = H1("length");
    iE.exports = j1;
  });
  var sE = u((dj, aE) => {
    var K1 = "\\ud800-\\udfff",
      z1 = "\\u0300-\\u036f",
      Y1 = "\\ufe20-\\ufe2f",
      Q1 = "\\u20d0-\\u20ff",
      $1 = z1 + Y1 + Q1,
      Z1 = "\\ufe0e\\ufe0f",
      J1 = "\\u200d",
      eF = RegExp("[" + J1 + K1 + $1 + Z1 + "]");
    function tF(e) {
      return eF.test(e);
    }
    aE.exports = tF;
  });
  var gE = u((pj, hE) => {
    var cE = "\\ud800-\\udfff",
      rF = "\\u0300-\\u036f",
      nF = "\\ufe20-\\ufe2f",
      iF = "\\u20d0-\\u20ff",
      oF = rF + nF + iF,
      aF = "\\ufe0e\\ufe0f",
      sF = "[" + cE + "]",
      Qa = "[" + oF + "]",
      $a = "\\ud83c[\\udffb-\\udfff]",
      uF = "(?:" + Qa + "|" + $a + ")",
      lE = "[^" + cE + "]",
      fE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      dE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      cF = "\\u200d",
      pE = uF + "?",
      vE = "[" + aF + "]?",
      lF = "(?:" + cF + "(?:" + [lE, fE, dE].join("|") + ")" + vE + pE + ")*",
      fF = vE + pE + lF,
      dF = "(?:" + [lE + Qa + "?", Qa, fE, dE, sF].join("|") + ")",
      uE = RegExp($a + "(?=" + $a + ")|" + dF + fF, "g");
    function pF(e) {
      for (var t = (uE.lastIndex = 0); uE.test(e); ) ++t;
      return t;
    }
    hE.exports = pF;
  });
  var _E = u((vj, EE) => {
    var vF = oE(),
      hF = sE(),
      gF = gE();
    function EF(e) {
      return hF(e) ? gF(e) : vF(e);
    }
    EE.exports = EF;
  });
  var yE = u((hj, mE) => {
    var _F = $n(),
      mF = Zn(),
      yF = Xt(),
      IF = nE(),
      TF = _E(),
      bF = "[object Map]",
      OF = "[object Set]";
    function wF(e) {
      if (e == null) return 0;
      if (yF(e)) return IF(e) ? TF(e) : e.length;
      var t = mF(e);
      return t == bF || t == OF ? e.size : _F(e).length;
    }
    mE.exports = wF;
  });
  var TE = u((gj, IE) => {
    var AF = "Expected a function";
    function SF(e) {
      if (typeof e != "function") throw new TypeError(AF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    IE.exports = SF;
  });
  var Za = u((Ej, bE) => {
    var RF = At(),
      xF = (function () {
        try {
          var e = RF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    bE.exports = xF;
  });
  var Ja = u((_j, wE) => {
    var OE = Za();
    function CF(e, t, r) {
      t == "__proto__" && OE
        ? OE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    wE.exports = CF;
  });
  var SE = u((mj, AE) => {
    var NF = Ja(),
      LF = Wn(),
      qF = Object.prototype,
      PF = qF.hasOwnProperty;
    function DF(e, t, r) {
      var n = e[t];
      (!(PF.call(e, t) && LF(n, r)) || (r === void 0 && !(t in e))) &&
        NF(e, t, r);
    }
    AE.exports = DF;
  });
  var CE = u((yj, xE) => {
    var MF = SE(),
      FF = Yr(),
      GF = Kn(),
      RE = ft(),
      XF = dr();
    function UF(e, t, r, n) {
      if (!RE(e)) return e;
      t = FF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var c = XF(t[i]),
          h = r;
        if (c === "__proto__" || c === "constructor" || c === "prototype")
          return e;
        if (i != a) {
          var I = s[c];
          (h = n ? n(I, c, s) : void 0),
            h === void 0 && (h = RE(I) ? I : GF(t[i + 1]) ? [] : {});
        }
        MF(s, c, h), (s = s[c]);
      }
      return e;
    }
    xE.exports = UF;
  });
  var LE = u((Ij, NE) => {
    var WF = ti(),
      VF = CE(),
      kF = Yr();
    function BF(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = WF(e, a);
        r(s, a) && VF(o, kF(a, e), s);
      }
      return o;
    }
    NE.exports = BF;
  });
  var PE = u((Tj, qE) => {
    var HF = Hn(),
      jF = Xo(),
      KF = va(),
      zF = pa(),
      YF = Object.getOwnPropertySymbols,
      QF = YF
        ? function (e) {
            for (var t = []; e; ) HF(t, KF(e)), (e = jF(e));
            return t;
          }
        : zF;
    qE.exports = QF;
  });
  var ME = u((bj, DE) => {
    function $F(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    DE.exports = $F;
  });
  var GE = u((Oj, FE) => {
    var ZF = ft(),
      JF = Qn(),
      e2 = ME(),
      t2 = Object.prototype,
      r2 = t2.hasOwnProperty;
    function n2(e) {
      if (!ZF(e)) return e2(e);
      var t = JF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !r2.call(e, n))) || r.push(n);
      return r;
    }
    FE.exports = n2;
  });
  var UE = u((wj, XE) => {
    var i2 = ga(),
      o2 = GE(),
      a2 = Xt();
    function s2(e) {
      return a2(e) ? i2(e, !0) : o2(e);
    }
    XE.exports = s2;
  });
  var VE = u((Aj, WE) => {
    var u2 = da(),
      c2 = PE(),
      l2 = UE();
    function f2(e) {
      return u2(e, l2, c2);
    }
    WE.exports = f2;
  });
  var BE = u((Sj, kE) => {
    var d2 = Ra(),
      p2 = St(),
      v2 = LE(),
      h2 = VE();
    function g2(e, t) {
      if (e == null) return {};
      var r = d2(h2(e), function (n) {
        return [n];
      });
      return (
        (t = p2(t)),
        v2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    kE.exports = g2;
  });
  var jE = u((Rj, HE) => {
    var E2 = St(),
      _2 = TE(),
      m2 = BE();
    function y2(e, t) {
      return m2(e, _2(E2(t)));
    }
    HE.exports = y2;
  });
  var zE = u((xj, KE) => {
    var I2 = $n(),
      T2 = Zn(),
      b2 = kr(),
      O2 = Le(),
      w2 = Xt(),
      A2 = jn(),
      S2 = Qn(),
      R2 = Yn(),
      x2 = "[object Map]",
      C2 = "[object Set]",
      N2 = Object.prototype,
      L2 = N2.hasOwnProperty;
    function q2(e) {
      if (e == null) return !0;
      if (
        w2(e) &&
        (O2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          A2(e) ||
          R2(e) ||
          b2(e))
      )
        return !e.length;
      var t = T2(e);
      if (t == x2 || t == C2) return !e.size;
      if (S2(e)) return !I2(e).length;
      for (var r in e) if (L2.call(e, r)) return !1;
      return !0;
    }
    KE.exports = q2;
  });
  var QE = u((Cj, YE) => {
    var P2 = Ja(),
      D2 = Ua(),
      M2 = St();
    function F2(e, t) {
      var r = {};
      return (
        (t = M2(t, 3)),
        D2(e, function (n, i, o) {
          P2(r, i, t(n, i, o));
        }),
        r
      );
    }
    YE.exports = F2;
  });
  var ZE = u((Nj, $E) => {
    function G2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    $E.exports = G2;
  });
  var e_ = u((Lj, JE) => {
    var X2 = ni();
    function U2(e) {
      return typeof e == "function" ? e : X2;
    }
    JE.exports = U2;
  });
  var r_ = u((qj, t_) => {
    var W2 = ZE(),
      V2 = Wa(),
      k2 = e_(),
      B2 = Le();
    function H2(e, t) {
      var r = B2(e) ? W2 : V2;
      return r(e, k2(t));
    }
    t_.exports = H2;
  });
  var i_ = u((Pj, n_) => {
    var j2 = tt(),
      K2 = function () {
        return j2.Date.now();
      };
    n_.exports = K2;
  });
  var s_ = u((Dj, a_) => {
    var z2 = ft(),
      es = i_(),
      o_ = ii(),
      Y2 = "Expected a function",
      Q2 = Math.max,
      $2 = Math.min;
    function Z2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        c,
        h = 0,
        I = !1,
        d = !1,
        T = !0;
      if (typeof e != "function") throw new TypeError(Y2);
      (t = o_(t) || 0),
        z2(r) &&
          ((I = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? Q2(o_(r.maxWait) || 0, t) : o),
          (T = "trailing" in r ? !!r.trailing : T));
      function E(G) {
        var B = n,
          $ = i;
        return (n = i = void 0), (h = G), (a = e.apply($, B)), a;
      }
      function y(G) {
        return (h = G), (s = setTimeout(R, t)), I ? E(G) : a;
      }
      function O(G) {
        var B = G - c,
          $ = G - h,
          J = t - B;
        return d ? $2(J, o - $) : J;
      }
      function C(G) {
        var B = G - c,
          $ = G - h;
        return c === void 0 || B >= t || B < 0 || (d && $ >= o);
      }
      function R() {
        var G = es();
        if (C(G)) return L(G);
        s = setTimeout(R, O(G));
      }
      function L(G) {
        return (s = void 0), T && n ? E(G) : ((n = i = void 0), a);
      }
      function S() {
        s !== void 0 && clearTimeout(s), (h = 0), (n = c = i = s = void 0);
      }
      function X() {
        return s === void 0 ? a : L(es());
      }
      function M() {
        var G = es(),
          B = C(G);
        if (((n = arguments), (i = this), (c = G), B)) {
          if (s === void 0) return y(c);
          if (d) return clearTimeout(s), (s = setTimeout(R, t)), E(c);
        }
        return s === void 0 && (s = setTimeout(R, t)), a;
      }
      return (M.cancel = S), (M.flush = X), M;
    }
    a_.exports = Z2;
  });
  var c_ = u((Mj, u_) => {
    var J2 = s_(),
      eG = ft(),
      tG = "Expected a function";
    function rG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(tG);
      return (
        eG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        J2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    u_.exports = rG;
  });
  var yi = u((le) => {
    "use strict";
    var nG = ut().default;
    Object.defineProperty(le, "__esModule", { value: !0 });
    le.viewportWidthChanged =
      le.testFrameRendered =
      le.stopRequested =
      le.sessionStopped =
      le.sessionStarted =
      le.sessionInitialized =
      le.rawDataImported =
      le.previewRequested =
      le.playbackRequested =
      le.parameterChanged =
      le.mediaQueriesDefined =
      le.instanceStarted =
      le.instanceRemoved =
      le.instanceAdded =
      le.eventStateChanged =
      le.eventListenerAdded =
      le.elementStateChanged =
      le.clearRequested =
      le.animationFrameChanged =
      le.actionListPlaybackChanged =
        void 0;
    var l_ = nG(Gr()),
      f_ = Be(),
      iG = Ht(),
      {
        IX2_RAW_DATA_IMPORTED: oG,
        IX2_SESSION_INITIALIZED: aG,
        IX2_SESSION_STARTED: sG,
        IX2_SESSION_STOPPED: uG,
        IX2_PREVIEW_REQUESTED: cG,
        IX2_PLAYBACK_REQUESTED: lG,
        IX2_STOP_REQUESTED: fG,
        IX2_CLEAR_REQUESTED: dG,
        IX2_EVENT_LISTENER_ADDED: pG,
        IX2_TEST_FRAME_RENDERED: vG,
        IX2_EVENT_STATE_CHANGED: hG,
        IX2_ANIMATION_FRAME_CHANGED: gG,
        IX2_PARAMETER_CHANGED: EG,
        IX2_INSTANCE_ADDED: _G,
        IX2_INSTANCE_STARTED: mG,
        IX2_INSTANCE_REMOVED: yG,
        IX2_ELEMENT_STATE_CHANGED: IG,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: TG,
        IX2_VIEWPORT_WIDTH_CHANGED: bG,
        IX2_MEDIA_QUERIES_DEFINED: OG,
      } = f_.IX2EngineActionTypes,
      { reifyState: wG } = iG.IX2VanillaUtils,
      AG = (e) => ({ type: oG, payload: (0, l_.default)({}, wG(e)) });
    le.rawDataImported = AG;
    var SG = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
      type: aG,
      payload: { hasBoundaryNodes: e, reducedMotion: t },
    });
    le.sessionInitialized = SG;
    var RG = () => ({ type: sG });
    le.sessionStarted = RG;
    var xG = () => ({ type: uG });
    le.sessionStopped = xG;
    var CG = ({ rawData: e, defer: t }) => ({
      type: cG,
      payload: { defer: t, rawData: e },
    });
    le.previewRequested = CG;
    var NG = ({
      actionTypeId: e = f_.ActionTypeConsts.GENERAL_START_ACTION,
      actionListId: t,
      actionItemId: r,
      eventId: n,
      allowEvents: i,
      immediate: o,
      testManual: a,
      verbose: s,
      rawData: c,
    }) => ({
      type: lG,
      payload: {
        actionTypeId: e,
        actionListId: t,
        actionItemId: r,
        testManual: a,
        eventId: n,
        allowEvents: i,
        immediate: o,
        verbose: s,
        rawData: c,
      },
    });
    le.playbackRequested = NG;
    var LG = (e) => ({ type: fG, payload: { actionListId: e } });
    le.stopRequested = LG;
    var qG = () => ({ type: dG });
    le.clearRequested = qG;
    var PG = (e, t) => ({
      type: pG,
      payload: { target: e, listenerParams: t },
    });
    le.eventListenerAdded = PG;
    var DG = (e = 1) => ({ type: vG, payload: { step: e } });
    le.testFrameRendered = DG;
    var MG = (e, t) => ({ type: hG, payload: { stateKey: e, newState: t } });
    le.eventStateChanged = MG;
    var FG = (e, t) => ({ type: gG, payload: { now: e, parameters: t } });
    le.animationFrameChanged = FG;
    var GG = (e, t) => ({ type: EG, payload: { key: e, value: t } });
    le.parameterChanged = GG;
    var XG = (e) => ({ type: _G, payload: (0, l_.default)({}, e) });
    le.instanceAdded = XG;
    var UG = (e, t) => ({ type: mG, payload: { instanceId: e, time: t } });
    le.instanceStarted = UG;
    var WG = (e) => ({ type: yG, payload: { instanceId: e } });
    le.instanceRemoved = WG;
    var VG = (e, t, r, n) => ({
      type: IG,
      payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
    });
    le.elementStateChanged = VG;
    var kG = ({ actionListId: e, isPlaying: t }) => ({
      type: TG,
      payload: { actionListId: e, isPlaying: t },
    });
    le.actionListPlaybackChanged = kG;
    var BG = ({ width: e, mediaQueries: t }) => ({
      type: bG,
      payload: { width: e, mediaQueries: t },
    });
    le.viewportWidthChanged = BG;
    var HG = () => ({ type: OG });
    le.mediaQueriesDefined = HG;
  });
  var v_ = u((Pe) => {
    "use strict";
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.elementContains = nX;
    Pe.getChildElements = oX;
    Pe.getClosestElement = void 0;
    Pe.getProperty = ZG;
    Pe.getQuerySelector = eX;
    Pe.getRefType = uX;
    Pe.getSiblingElements = aX;
    Pe.getStyle = $G;
    Pe.getValidDocument = tX;
    Pe.isSiblingNode = iX;
    Pe.matchSelector = JG;
    Pe.queryDocument = rX;
    Pe.setStyle = QG;
    var jG = Ht(),
      KG = Be(),
      { ELEMENT_MATCHES: ts } = jG.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: d_,
        HTML_ELEMENT: zG,
        PLAIN_OBJECT: YG,
        WF_PAGE: p_,
      } = KG.IX2EngineConstants;
    function QG(e, t, r) {
      e.style[t] = r;
    }
    function $G(e, t) {
      return e.style[t];
    }
    function ZG(e, t) {
      return e[t];
    }
    function JG(e) {
      return (t) => t[ts](e);
    }
    function eX({ id: e, selector: t }) {
      if (e) {
        let r = e;
        if (e.indexOf(d_) !== -1) {
          let n = e.split(d_),
            i = n[0];
          if (((r = n[1]), i !== document.documentElement.getAttribute(p_)))
            return null;
        }
        return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
      }
      return t;
    }
    function tX(e) {
      return e == null || e === document.documentElement.getAttribute(p_)
        ? document
        : null;
    }
    function rX(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function nX(e, t) {
      return e.contains(t);
    }
    function iX(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function oX(e) {
      let t = [];
      for (let r = 0, { length: n } = e || []; r < n; r++) {
        let { children: i } = e[r],
          { length: o } = i;
        if (o) for (let a = 0; a < o; a++) t.push(i[a]);
      }
      return t;
    }
    function aX(e = []) {
      let t = [],
        r = [];
      for (let n = 0, { length: i } = e; n < i; n++) {
        let { parentNode: o } = e[n];
        if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
          continue;
        r.push(o);
        let a = o.firstElementChild;
        for (; a != null; )
          e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
      }
      return t;
    }
    var sX = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[ts] && r[ts](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    Pe.getClosestElement = sX;
    function uX(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? zG
          : YG
        : null;
    }
  });
  var rs = u((Xj, g_) => {
    var cX = ft(),
      h_ = Object.create,
      lX = (function () {
        function e() {}
        return function (t) {
          if (!cX(t)) return {};
          if (h_) return h_(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    g_.exports = lX;
  });
  var Ii = u((Uj, E_) => {
    function fX() {}
    E_.exports = fX;
  });
  var bi = u((Wj, __) => {
    var dX = rs(),
      pX = Ii();
    function Ti(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Ti.prototype = dX(pX.prototype);
    Ti.prototype.constructor = Ti;
    __.exports = Ti;
  });
  var T_ = u((Vj, I_) => {
    var m_ = er(),
      vX = kr(),
      hX = Le(),
      y_ = m_ ? m_.isConcatSpreadable : void 0;
    function gX(e) {
      return hX(e) || vX(e) || !!(y_ && e && e[y_]);
    }
    I_.exports = gX;
  });
  var w_ = u((kj, O_) => {
    var EX = Hn(),
      _X = T_();
    function b_(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = _X), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? b_(s, t - 1, r, n, i)
            : EX(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    O_.exports = b_;
  });
  var S_ = u((Bj, A_) => {
    var mX = w_();
    function yX(e) {
      var t = e == null ? 0 : e.length;
      return t ? mX(e, 1) : [];
    }
    A_.exports = yX;
  });
  var x_ = u((Hj, R_) => {
    function IX(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    R_.exports = IX;
  });
  var L_ = u((jj, N_) => {
    var TX = x_(),
      C_ = Math.max;
    function bX(e, t, r) {
      return (
        (t = C_(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = C_(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), TX(e, this, s);
        }
      );
    }
    N_.exports = bX;
  });
  var P_ = u((Kj, q_) => {
    function OX(e) {
      return function () {
        return e;
      };
    }
    q_.exports = OX;
  });
  var F_ = u((zj, M_) => {
    var wX = P_(),
      D_ = Za(),
      AX = ni(),
      SX = D_
        ? function (e, t) {
            return D_(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: wX(t),
              writable: !0,
            });
          }
        : AX;
    M_.exports = SX;
  });
  var X_ = u((Yj, G_) => {
    var RX = 800,
      xX = 16,
      CX = Date.now;
    function NX(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = CX(),
          i = xX - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= RX) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    G_.exports = NX;
  });
  var W_ = u((Qj, U_) => {
    var LX = F_(),
      qX = X_(),
      PX = qX(LX);
    U_.exports = PX;
  });
  var k_ = u(($j, V_) => {
    var DX = S_(),
      MX = L_(),
      FX = W_();
    function GX(e) {
      return FX(MX(e, void 0, DX), e + "");
    }
    V_.exports = GX;
  });
  var j_ = u((Zj, H_) => {
    var B_ = Ea(),
      XX = B_ && new B_();
    H_.exports = XX;
  });
  var z_ = u((Jj, K_) => {
    function UX() {}
    K_.exports = UX;
  });
  var ns = u((eK, Q_) => {
    var Y_ = j_(),
      WX = z_(),
      VX = Y_
        ? function (e) {
            return Y_.get(e);
          }
        : WX;
    Q_.exports = VX;
  });
  var Z_ = u((tK, $_) => {
    var kX = {};
    $_.exports = kX;
  });
  var is = u((rK, em) => {
    var J_ = Z_(),
      BX = Object.prototype,
      HX = BX.hasOwnProperty;
    function jX(e) {
      for (
        var t = e.name + "", r = J_[t], n = HX.call(J_, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    em.exports = jX;
  });
  var wi = u((nK, tm) => {
    var KX = rs(),
      zX = Ii(),
      YX = 4294967295;
    function Oi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = YX),
        (this.__views__ = []);
    }
    Oi.prototype = KX(zX.prototype);
    Oi.prototype.constructor = Oi;
    tm.exports = Oi;
  });
  var nm = u((iK, rm) => {
    function QX(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    rm.exports = QX;
  });
  var om = u((oK, im) => {
    var $X = wi(),
      ZX = bi(),
      JX = nm();
    function eU(e) {
      if (e instanceof $X) return e.clone();
      var t = new ZX(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = JX(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    im.exports = eU;
  });
  var um = u((aK, sm) => {
    var tU = wi(),
      am = bi(),
      rU = Ii(),
      nU = Le(),
      iU = _t(),
      oU = om(),
      aU = Object.prototype,
      sU = aU.hasOwnProperty;
    function Ai(e) {
      if (iU(e) && !nU(e) && !(e instanceof tU)) {
        if (e instanceof am) return e;
        if (sU.call(e, "__wrapped__")) return oU(e);
      }
      return new am(e);
    }
    Ai.prototype = rU.prototype;
    Ai.prototype.constructor = Ai;
    sm.exports = Ai;
  });
  var lm = u((sK, cm) => {
    var uU = wi(),
      cU = ns(),
      lU = is(),
      fU = um();
    function dU(e) {
      var t = lU(e),
        r = fU[t];
      if (typeof r != "function" || !(t in uU.prototype)) return !1;
      if (e === r) return !0;
      var n = cU(r);
      return !!n && e === n[0];
    }
    cm.exports = dU;
  });
  var vm = u((uK, pm) => {
    var fm = bi(),
      pU = k_(),
      vU = ns(),
      os = is(),
      hU = Le(),
      dm = lm(),
      gU = "Expected a function",
      EU = 8,
      _U = 32,
      mU = 128,
      yU = 256;
    function IU(e) {
      return pU(function (t) {
        var r = t.length,
          n = r,
          i = fm.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(gU);
          if (i && !a && os(o) == "wrapper") var a = new fm([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = os(o),
            c = s == "wrapper" ? vU(o) : void 0;
          c &&
          dm(c[0]) &&
          c[1] == (mU | EU | _U | yU) &&
          !c[4].length &&
          c[9] == 1
            ? (a = a[os(c[0])].apply(a, c[3]))
            : (a = o.length == 1 && dm(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var h = arguments,
            I = h[0];
          if (a && h.length == 1 && hU(I)) return a.plant(I).value();
          for (var d = 0, T = r ? t[d].apply(this, h) : I; ++d < r; )
            T = t[d].call(this, T);
          return T;
        };
      });
    }
    pm.exports = IU;
  });
  var gm = u((cK, hm) => {
    var TU = vm(),
      bU = TU();
    hm.exports = bU;
  });
  var _m = u((lK, Em) => {
    function OU(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Em.exports = OU;
  });
  var ym = u((fK, mm) => {
    var wU = _m(),
      as = ii();
    function AU(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = as(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = as(t)), (t = t === t ? t : 0)),
        wU(as(e), t, r)
      );
    }
    mm.exports = AU;
  });
  var Gm = u((Ni) => {
    "use strict";
    var Ci = ut().default;
    Object.defineProperty(Ni, "__esModule", { value: !0 });
    Ni.default = void 0;
    var ze = Ci(Gr()),
      SU = Ci(gm()),
      RU = Ci(ri()),
      xU = Ci(ym()),
      jt = Be(),
      ss = fs(),
      Si = yi(),
      CU = Ht(),
      {
        MOUSE_CLICK: NU,
        MOUSE_SECOND_CLICK: LU,
        MOUSE_DOWN: qU,
        MOUSE_UP: PU,
        MOUSE_OVER: DU,
        MOUSE_OUT: MU,
        DROPDOWN_CLOSE: FU,
        DROPDOWN_OPEN: GU,
        SLIDER_ACTIVE: XU,
        SLIDER_INACTIVE: UU,
        TAB_ACTIVE: WU,
        TAB_INACTIVE: VU,
        NAVBAR_CLOSE: kU,
        NAVBAR_OPEN: BU,
        MOUSE_MOVE: HU,
        PAGE_SCROLL_DOWN: xm,
        SCROLL_INTO_VIEW: Cm,
        SCROLL_OUT_OF_VIEW: jU,
        PAGE_SCROLL_UP: KU,
        SCROLLING_IN_VIEW: zU,
        PAGE_FINISH: Nm,
        ECOMMERCE_CART_CLOSE: YU,
        ECOMMERCE_CART_OPEN: QU,
        PAGE_START: Lm,
        PAGE_SCROLL: $U,
      } = jt.EventTypeConsts,
      us = "COMPONENT_ACTIVE",
      qm = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: Im } = jt.IX2EngineConstants,
      { getNamespacedParameterId: Tm } = CU.IX2VanillaUtils,
      Pm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      sn = Pm(({ element: e, nativeEvent: t }) => e === t.target),
      ZU = Pm(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      ht = (0, SU.default)([sn, ZU]),
      Dm = (e, t) => {
        if (t) {
          let { ixData: r } = e.getState(),
            { events: n } = r,
            i = n[t];
          if (i && !eW[i.eventTypeId]) return i;
        }
        return null;
      },
      JU = ({ store: e, event: t }) => {
        let { action: r } = t,
          { autoStopEventId: n } = r.config;
        return !!Dm(e, n);
      },
      je = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
        let { action: o, id: a } = t,
          { actionListId: s, autoStopEventId: c } = o.config,
          h = Dm(e, c);
        return (
          h &&
            (0, ss.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: r,
              eventStateKey: c + Im + n.split(Im)[1],
              actionListId: (0, RU.default)(h, "action.config.actionListId"),
            }),
          (0, ss.stopActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          (0, ss.startActionGroup)({
            store: e,
            eventId: a,
            eventTarget: r,
            eventStateKey: n,
            actionListId: s,
          }),
          i
        );
      },
      rt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      un = { handler: rt(ht, je) },
      Mm = (0, ze.default)({}, un, { types: [us, qm].join(" ") }),
      cs = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      bm = "mouseover mouseout",
      ls = { types: cs },
      eW = { PAGE_START: Lm, PAGE_FINISH: Nm },
      an = (() => {
        let e = window.pageXOffset !== void 0,
          r =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, xU.default)(
            e ? window.pageYOffset : r.scrollTop,
            0,
            r.scrollHeight - window.innerHeight
          ),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      tW = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      rW = ({ element: e, nativeEvent: t }) => {
        let { type: r, target: n, relatedTarget: i } = t,
          o = e.contains(n);
        if (r === "mouseover" && o) return !0;
        let a = e.contains(i);
        return !!(r === "mouseout" && o && a);
      },
      nW = (e) => {
        let {
            element: t,
            event: { config: r },
          } = e,
          { clientWidth: n, clientHeight: i } = an(),
          o = r.scrollOffsetValue,
          c = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
        return tW(t.getBoundingClientRect(), {
          left: 0,
          top: c,
          right: n,
          bottom: i - c,
        });
      },
      Fm = (e) => (t, r) => {
        let { type: n } = t.nativeEvent,
          i = [us, qm].indexOf(n) !== -1 ? n === us : r.isActive,
          o = (0, ze.default)({}, r, { isActive: i });
        return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
      },
      Om = (e) => (t, r) => {
        let n = { elementHovered: rW(t) };
        return (
          ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
            e(t, n)) ||
          n
        );
      },
      iW = (e) => (t, r) => {
        let n = (0, ze.default)({}, r, { elementVisible: nW(t) });
        return (
          ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
            e(t, n)) ||
          n
        );
      },
      wm =
        (e) =>
        (t, r = {}) => {
          let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = an(),
            {
              event: { config: a, eventTypeId: s },
            } = t,
            { scrollOffsetValue: c, scrollOffsetUnit: h } = a,
            I = h === "PX",
            d = i - o,
            T = Number((n / d).toFixed(2));
          if (r && r.percentTop === T) return r;
          let E = (I ? c : (o * (c || 0)) / 100) / d,
            y,
            O,
            C = 0;
          r &&
            ((y = T > r.percentTop),
            (O = r.scrollingDown !== y),
            (C = O ? T : r.anchorTop));
          let R = s === xm ? T >= C + E : T <= C - E,
            L = (0, ze.default)({}, r, {
              percentTop: T,
              inBounds: R,
              anchorTop: C,
              scrollingDown: y,
            });
          return (r && R && (O || L.inBounds !== r.inBounds) && e(t, L)) || L;
        },
      oW = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      aW = (e) => (t, r) => {
        let n = { finished: document.readyState === "complete" };
        return n.finished && !(r && r.finshed) && e(t), n;
      },
      sW = (e) => (t, r) => {
        let n = { started: !0 };
        return r || e(t), n;
      },
      Am =
        (e) =>
        (t, r = { clickCount: 0 }) => {
          let n = { clickCount: (r.clickCount % 2) + 1 };
          return (n.clickCount !== r.clickCount && e(t, n)) || n;
        },
      Ri = (e = !0) =>
        (0, ze.default)({}, Mm, {
          handler: rt(
            e ? ht : sn,
            Fm((t, r) => (r.isActive ? un.handler(t, r) : r))
          ),
        }),
      xi = (e = !0) =>
        (0, ze.default)({}, Mm, {
          handler: rt(
            e ? ht : sn,
            Fm((t, r) => (r.isActive ? r : un.handler(t, r)))
          ),
        }),
      Sm = (0, ze.default)({}, ls, {
        handler: iW((e, t) => {
          let { elementVisible: r } = t,
            { event: n, store: i } = e,
            { ixData: o } = i.getState(),
            { events: a } = o;
          return !a[n.action.config.autoStopEventId] && t.triggered
            ? t
            : (n.eventTypeId === Cm) === r
            ? (je(e), (0, ze.default)({}, t, { triggered: !0 }))
            : t;
        }),
      }),
      Rm = 0.05,
      uW = {
        [XU]: Ri(),
        [UU]: xi(),
        [GU]: Ri(),
        [FU]: xi(),
        [BU]: Ri(!1),
        [kU]: xi(!1),
        [WU]: Ri(),
        [VU]: xi(),
        [QU]: { types: "ecommerce-cart-open", handler: rt(ht, je) },
        [YU]: { types: "ecommerce-cart-close", handler: rt(ht, je) },
        [NU]: {
          types: "click",
          handler: rt(
            ht,
            Am((e, { clickCount: t }) => {
              JU(e) ? t === 1 && je(e) : je(e);
            })
          ),
        },
        [LU]: {
          types: "click",
          handler: rt(
            ht,
            Am((e, { clickCount: t }) => {
              t === 2 && je(e);
            })
          ),
        },
        [qU]: (0, ze.default)({}, un, { types: "mousedown" }),
        [PU]: (0, ze.default)({}, un, { types: "mouseup" }),
        [DU]: {
          types: bm,
          handler: rt(
            ht,
            Om((e, t) => {
              t.elementHovered && je(e);
            })
          ),
        },
        [MU]: {
          types: bm,
          handler: rt(
            ht,
            Om((e, t) => {
              t.elementHovered || je(e);
            })
          ),
        },
        [HU]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: r,
              nativeEvent: n,
              eventStateKey: i,
            },
            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: c,
                reverse: h,
                restingState: I = 0,
              } = r,
              {
                clientX: d = o.clientX,
                clientY: T = o.clientY,
                pageX: E = o.pageX,
                pageY: y = o.pageY,
              } = n,
              O = s === "X_AXIS",
              C = n.type === "mouseout",
              R = I / 100,
              L = c,
              S = !1;
            switch (a) {
              case jt.EventBasedOn.VIEWPORT: {
                R = O
                  ? Math.min(d, window.innerWidth) / window.innerWidth
                  : Math.min(T, window.innerHeight) / window.innerHeight;
                break;
              }
              case jt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: X,
                  scrollTop: M,
                  scrollWidth: G,
                  scrollHeight: B,
                } = an();
                R = O ? Math.min(X + E, G) / G : Math.min(M + y, B) / B;
                break;
              }
              case jt.EventBasedOn.ELEMENT:
              default: {
                L = Tm(i, c);
                let X = n.type.indexOf("mouse") === 0;
                if (X && ht({ element: t, nativeEvent: n }) !== !0) break;
                let M = t.getBoundingClientRect(),
                  { left: G, top: B, width: $, height: J } = M;
                if (!X && !oW({ left: d, top: T }, M)) break;
                (S = !0), (R = O ? (d - G) / $ : (T - B) / J);
                break;
              }
            }
            return (
              C && (R > 1 - Rm || R < Rm) && (R = Math.round(R)),
              (a !== jt.EventBasedOn.ELEMENT || S || S !== o.elementHovered) &&
                ((R = h ? 1 - R : R),
                e.dispatch((0, Si.parameterChanged)(L, R))),
              { elementHovered: S, clientX: d, clientY: T, pageX: E, pageY: y }
            );
          },
        },
        [$U]: {
          types: cs,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: r, reverse: n } = t,
              { scrollTop: i, scrollHeight: o, clientHeight: a } = an(),
              s = i / (o - a);
            (s = n ? 1 - s : s), e.dispatch((0, Si.parameterChanged)(r, s));
          },
        },
        [zU]: {
          types: cs,
          handler: (
            { element: e, store: t, eventConfig: r, eventStateKey: n },
            i = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: c,
                clientHeight: h,
              } = an(),
              {
                basedOn: I,
                selectedAxis: d,
                continuousParameterGroupId: T,
                startsEntering: E,
                startsExiting: y,
                addEndOffset: O,
                addStartOffset: C,
                addOffsetValue: R = 0,
                endOffsetValue: L = 0,
              } = r,
              S = d === "X_AXIS";
            if (I === jt.EventBasedOn.VIEWPORT) {
              let X = S ? o / s : a / c;
              return (
                X !== i.scrollPercent &&
                  t.dispatch((0, Si.parameterChanged)(T, X)),
                { scrollPercent: X }
              );
            } else {
              let X = Tm(n, T),
                M = e.getBoundingClientRect(),
                G = (C ? R : 0) / 100,
                B = (O ? L : 0) / 100;
              (G = E ? G : 1 - G), (B = y ? B : 1 - B);
              let $ = M.top + Math.min(M.height * G, h),
                oe = M.top + M.height * B - $,
                H = Math.min(h + oe, c),
                _ = Math.min(Math.max(0, h - $), H) / H;
              return (
                _ !== i.scrollPercent &&
                  t.dispatch((0, Si.parameterChanged)(X, _)),
                { scrollPercent: _ }
              );
            }
          },
        },
        [Cm]: Sm,
        [jU]: Sm,
        [xm]: (0, ze.default)({}, ls, {
          handler: wm((e, t) => {
            t.scrollingDown && je(e);
          }),
        }),
        [KU]: (0, ze.default)({}, ls, {
          handler: wm((e, t) => {
            t.scrollingDown || je(e);
          }),
        }),
        [Nm]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: rt(sn, aW(je)),
        },
        [Lm]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: rt(sn, sW(je)),
        },
      };
    Ni.default = uW;
  });
  var fs = u((Nt) => {
    "use strict";
    var it = ut().default,
      cW = Qt().default;
    Object.defineProperty(Nt, "__esModule", { value: !0 });
    Nt.observeRequests = GW;
    Nt.startActionGroup = _s;
    Nt.startEngine = Di;
    Nt.stopActionGroup = Es;
    Nt.stopAllActionGroups = Km;
    Nt.stopEngine = Mi;
    var lW = it(Gr()),
      fW = it(tE()),
      dW = it(qa()),
      Ct = it(ri()),
      pW = it(yE()),
      vW = it(jE()),
      hW = it(zE()),
      gW = it(QE()),
      cn = it(r_()),
      EW = it(c_()),
      nt = Be(),
      Wm = Ht(),
      Oe = yi(),
      Re = cW(v_()),
      _W = it(Gm()),
      mW = ["store", "computedStyle"],
      yW = Object.keys(nt.QuickEffectIds),
      ds = (e) => yW.includes(e),
      {
        COLON_DELIMITER: ps,
        BOUNDARY_SELECTOR: Li,
        HTML_ELEMENT: Vm,
        RENDER_GENERAL: IW,
        W_MOD_IX: Xm,
      } = nt.IX2EngineConstants,
      {
        getAffectedElements: qi,
        getElementId: TW,
        getDestinationValues: vs,
        observeStore: Kt,
        getInstanceId: bW,
        renderHTMLElement: OW,
        clearAllStyles: km,
        getMaxDurationItemIndex: wW,
        getComputedStyle: AW,
        getInstanceOrigin: SW,
        reduceListToGroup: RW,
        shouldNamespaceEventParameter: xW,
        getNamespacedParameterId: CW,
        shouldAllowMediaQuery: Pi,
        cleanupHTMLElement: NW,
        stringifyTarget: LW,
        mediaQueriesEqual: qW,
        shallowEqual: PW,
      } = Wm.IX2VanillaUtils,
      {
        isPluginType: hs,
        createPluginInstance: gs,
        getPluginDuration: DW,
      } = Wm.IX2VanillaPlugins,
      Um = navigator.userAgent,
      MW = Um.match(/iPad/i) || Um.match(/iPhone/),
      FW = 12;
    function GW(e) {
      Kt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: WW }),
        Kt({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: VW,
        }),
        Kt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: kW }),
        Kt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: BW });
    }
    function XW(e) {
      Kt({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          Mi(e),
            km({ store: e, elementApi: Re }),
            Di({ store: e, allowEvents: !0 }),
            Bm();
        },
      });
    }
    function UW(e, t) {
      let r = Kt({
        store: e,
        select: ({ ixSession: n }) => n.tick,
        onChange: (n) => {
          t(n), r();
        },
      });
    }
    function WW({ rawData: e, defer: t }, r) {
      let n = () => {
        Di({ store: r, rawData: e, allowEvents: !0 }), Bm();
      };
      t ? setTimeout(n, 0) : n();
    }
    function Bm() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function VW(e, t) {
      let {
          actionTypeId: r,
          actionListId: n,
          actionItemId: i,
          eventId: o,
          allowEvents: a,
          immediate: s,
          testManual: c,
          verbose: h = !0,
        } = e,
        { rawData: I } = e;
      if (n && i && I && s) {
        let d = I.actionLists[n];
        d && (I = RW({ actionList: d, actionItemId: i, rawData: I }));
      }
      if (
        (Di({ store: t, rawData: I, allowEvents: a, testManual: c }),
        (n && r === nt.ActionTypeConsts.GENERAL_START_ACTION) || ds(r))
      ) {
        Es({ store: t, actionListId: n }),
          jm({ store: t, actionListId: n, eventId: o });
        let d = _s({
          store: t,
          eventId: o,
          actionListId: n,
          immediate: s,
          verbose: h,
        });
        h &&
          d &&
          t.dispatch(
            (0, Oe.actionListPlaybackChanged)({
              actionListId: n,
              isPlaying: !s,
            })
          );
      }
    }
    function kW({ actionListId: e }, t) {
      e ? Es({ store: t, actionListId: e }) : Km({ store: t }), Mi(t);
    }
    function BW(e, t) {
      Mi(t), km({ store: t, elementApi: Re });
    }
    function Di({ store: e, rawData: t, allowEvents: r, testManual: n }) {
      let { ixSession: i } = e.getState();
      t && e.dispatch((0, Oe.rawDataImported)(t)),
        i.active ||
          (e.dispatch(
            (0, Oe.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(Li),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          r &&
            (QW(e),
            HW(),
            e.getState().ixSession.hasDefinedMediaQueries && XW(e)),
          e.dispatch((0, Oe.sessionStarted)()),
          jW(e, n));
    }
    function HW() {
      let { documentElement: e } = document;
      e.className.indexOf(Xm) === -1 && (e.className += ` ${Xm}`);
    }
    function jW(e, t) {
      let r = (n) => {
        let { ixSession: i, ixParameters: o } = e.getState();
        i.active &&
          (e.dispatch((0, Oe.animationFrameChanged)(n, o)),
          t ? UW(e, r) : requestAnimationFrame(r));
      };
      r(window.performance.now());
    }
    function Mi(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: r } = t;
        r.forEach(KW), e.dispatch((0, Oe.sessionStopped)());
      }
    }
    function KW({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function zW({
      store: e,
      eventStateKey: t,
      eventTarget: r,
      eventId: n,
      eventConfig: i,
      actionListId: o,
      parameterGroup: a,
      smoothing: s,
      restingValue: c,
    }) {
      let { ixData: h, ixSession: I } = e.getState(),
        { events: d } = h,
        T = d[n],
        { eventTypeId: E } = T,
        y = {},
        O = {},
        C = [],
        { continuousActionGroups: R } = a,
        { id: L } = a;
      xW(E, i) && (L = CW(t, L));
      let S = I.hasBoundaryNodes && r ? Re.getClosestElement(r, Li) : null;
      R.forEach((X) => {
        let { keyframe: M, actionItems: G } = X;
        G.forEach((B) => {
          let { actionTypeId: $ } = B,
            { target: J } = B.config;
          if (!J) return;
          let oe = J.boundaryMode ? S : null,
            H = LW(J) + ps + $;
          if (((O[H] = YW(O[H], M, B)), !y[H])) {
            y[H] = !0;
            let { config: P } = B;
            qi({
              config: P,
              event: T,
              eventTarget: r,
              elementRoot: oe,
              elementApi: Re,
            }).forEach((_) => {
              C.push({ element: _, key: H });
            });
          }
        });
      }),
        C.forEach(({ element: X, key: M }) => {
          let G = O[M],
            B = (0, Ct.default)(G, "[0].actionItems[0]", {}),
            { actionTypeId: $ } = B,
            J = hs($) ? gs($)(X, B) : null,
            oe = vs({ element: X, actionItem: B, elementApi: Re }, J);
          ms({
            store: e,
            element: X,
            eventId: n,
            actionListId: o,
            actionItem: B,
            destination: oe,
            continuous: !0,
            parameterId: L,
            actionGroups: G,
            smoothing: s,
            restingValue: c,
            pluginInstance: J,
          });
        });
    }
    function YW(e = [], t, r) {
      let n = [...e],
        i;
      return (
        n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
        i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
        n[i].actionItems.push(r),
        n
      );
    }
    function QW(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: r } = t;
      Hm(e),
        (0, cn.default)(r, (i, o) => {
          let a = _W.default[o];
          if (!a) {
            console.warn(`IX2 event type not configured: ${o}`);
            return;
          }
          rV({ logic: a, store: e, events: i });
        });
      let { ixSession: n } = e.getState();
      n.eventListeners.length && ZW(e);
    }
    var $W = ["resize", "orientationchange"];
    function ZW(e) {
      let t = () => {
        Hm(e);
      };
      $W.forEach((r) => {
        window.addEventListener(r, t),
          e.dispatch((0, Oe.eventListenerAdded)(window, [r, t]));
      }),
        t();
    }
    function Hm(e) {
      let { ixSession: t, ixData: r } = e.getState(),
        n = window.innerWidth;
      if (n !== t.viewportWidth) {
        let { mediaQueries: i } = r;
        e.dispatch((0, Oe.viewportWidthChanged)({ width: n, mediaQueries: i }));
      }
    }
    var JW = (e, t) => (0, vW.default)((0, gW.default)(e, t), hW.default),
      eV = (e, t) => {
        (0, cn.default)(e, (r, n) => {
          r.forEach((i, o) => {
            let a = n + ps + o;
            t(i, n, a);
          });
        });
      },
      tV = (e) => {
        let t = { target: e.target, targets: e.targets };
        return qi({ config: t, elementApi: Re });
      };
    function rV({ logic: e, store: t, events: r }) {
      nV(r);
      let { types: n, handler: i } = e,
        { ixData: o } = t.getState(),
        { actionLists: a } = o,
        s = JW(r, tV);
      if (!(0, pW.default)(s)) return;
      (0, cn.default)(s, (d, T) => {
        let E = r[T],
          { action: y, id: O, mediaQueries: C = o.mediaQueryKeys } = E,
          { actionListId: R } = y.config;
        qW(C, o.mediaQueryKeys) || t.dispatch((0, Oe.mediaQueriesDefined)()),
          y.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(E.config) ? E.config : [E.config]).forEach((S) => {
              let { continuousParameterGroupId: X } = S,
                M = (0, Ct.default)(a, `${R}.continuousParameterGroups`, []),
                G = (0, dW.default)(M, ({ id: J }) => J === X),
                B = (S.smoothing || 0) / 100,
                $ = (S.restingState || 0) / 100;
              G &&
                d.forEach((J, oe) => {
                  let H = O + ps + oe;
                  zW({
                    store: t,
                    eventStateKey: H,
                    eventTarget: J,
                    eventId: O,
                    eventConfig: S,
                    actionListId: R,
                    parameterGroup: G,
                    smoothing: B,
                    restingValue: $,
                  });
                });
            }),
          (y.actionTypeId === nt.ActionTypeConsts.GENERAL_START_ACTION ||
            ds(y.actionTypeId)) &&
            jm({ store: t, actionListId: R, eventId: O });
      });
      let c = (d) => {
          let { ixSession: T } = t.getState();
          eV(s, (E, y, O) => {
            let C = r[y],
              R = T.eventState[O],
              { action: L, mediaQueries: S = o.mediaQueryKeys } = C;
            if (!Pi(S, T.mediaQueryKey)) return;
            let X = (M = {}) => {
              let G = i(
                {
                  store: t,
                  element: E,
                  event: C,
                  eventConfig: M,
                  nativeEvent: d,
                  eventStateKey: O,
                },
                R
              );
              PW(G, R) || t.dispatch((0, Oe.eventStateChanged)(O, G));
            };
            L.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(X)
              : X();
          });
        },
        h = (0, EW.default)(c, FW),
        I = ({ target: d = document, types: T, throttle: E }) => {
          T.split(" ")
            .filter(Boolean)
            .forEach((y) => {
              let O = E ? h : c;
              d.addEventListener(y, O),
                t.dispatch((0, Oe.eventListenerAdded)(d, [y, O]));
            });
        };
      Array.isArray(n) ? n.forEach(I) : typeof n == "string" && I(e);
    }
    function nV(e) {
      if (!MW) return;
      let t = {},
        r = "";
      for (let n in e) {
        let { eventTypeId: i, target: o } = e[n],
          a = Re.getQuerySelector(o);
        t[a] ||
          ((i === nt.EventTypeConsts.MOUSE_CLICK ||
            i === nt.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (r) {
        let n = document.createElement("style");
        (n.textContent = r), document.body.appendChild(n);
      }
    }
    function jm({ store: e, actionListId: t, eventId: r }) {
      let { ixData: n, ixSession: i } = e.getState(),
        { actionLists: o, events: a } = n,
        s = a[r],
        c = o[t];
      if (c && c.useFirstGroupAsInitialState) {
        let h = (0, Ct.default)(c, "actionItemGroups[0].actionItems", []),
          I = (0, Ct.default)(s, "mediaQueries", n.mediaQueryKeys);
        if (!Pi(I, i.mediaQueryKey)) return;
        h.forEach((d) => {
          var T;
          let { config: E, actionTypeId: y } = d,
            O =
              (E == null || (T = E.target) === null || T === void 0
                ? void 0
                : T.useEventTarget) === !0
                ? { target: s.target, targets: s.targets }
                : E,
            C = qi({ config: O, event: s, elementApi: Re }),
            R = hs(y);
          C.forEach((L) => {
            let S = R ? gs(y)(L, d) : null;
            ms({
              destination: vs({ element: L, actionItem: d, elementApi: Re }, S),
              immediate: !0,
              store: e,
              element: L,
              eventId: r,
              actionItem: d,
              actionListId: t,
              pluginInstance: S,
            });
          });
        });
      }
    }
    function Km({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, cn.default)(t, (r) => {
        if (!r.continuous) {
          let { actionListId: n, verbose: i } = r;
          ys(r, e),
            i &&
              e.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Es({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
    }) {
      let { ixInstances: o, ixSession: a } = e.getState(),
        s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, Li) : null;
      (0, cn.default)(o, (c) => {
        let h = (0, Ct.default)(c, "actionItem.config.target.boundaryMode"),
          I = n ? c.eventStateKey === n : !0;
        if (c.actionListId === i && c.eventId === t && I) {
          if (s && h && !Re.elementContains(s, c.element)) return;
          ys(c, e),
            c.verbose &&
              e.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: i,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function _s({
      store: e,
      eventId: t,
      eventTarget: r,
      eventStateKey: n,
      actionListId: i,
      groupIndex: o = 0,
      immediate: a,
      verbose: s,
    }) {
      var c;
      let { ixData: h, ixSession: I } = e.getState(),
        { events: d } = h,
        T = d[t] || {},
        { mediaQueries: E = h.mediaQueryKeys } = T,
        y = (0, Ct.default)(h, `actionLists.${i}`, {}),
        { actionItemGroups: O, useFirstGroupAsInitialState: C } = y;
      if (!O || !O.length) return !1;
      o >= O.length && (0, Ct.default)(T, "config.loop") && (o = 0),
        o === 0 && C && o++;
      let L =
          (o === 0 || (o === 1 && C)) &&
          ds((c = T.action) === null || c === void 0 ? void 0 : c.actionTypeId)
            ? T.config.delay
            : void 0,
        S = (0, Ct.default)(O, [o, "actionItems"], []);
      if (!S.length || !Pi(E, I.mediaQueryKey)) return !1;
      let X = I.hasBoundaryNodes && r ? Re.getClosestElement(r, Li) : null,
        M = wW(S),
        G = !1;
      return (
        S.forEach((B, $) => {
          let { config: J, actionTypeId: oe } = B,
            H = hs(oe),
            { target: P } = J;
          if (!P) return;
          let _ = P.boundaryMode ? X : null;
          qi({
            config: J,
            event: T,
            eventTarget: r,
            elementRoot: _,
            elementApi: Re,
          }).forEach((x, U) => {
            let Q = H ? gs(oe)(x, B) : null,
              ne = H ? DW(oe)(x, B) : null;
            G = !0;
            let W = M === $ && U === 0,
              V = AW({ element: x, actionItem: B }),
              v = vs({ element: x, actionItem: B, elementApi: Re }, Q);
            ms({
              store: e,
              element: x,
              actionItem: B,
              eventId: t,
              eventTarget: r,
              eventStateKey: n,
              actionListId: i,
              groupIndex: o,
              isCarrier: W,
              computedStyle: V,
              destination: v,
              immediate: a,
              verbose: s,
              pluginInstance: Q,
              pluginDuration: ne,
              instanceDelay: L,
            });
          });
        }),
        G
      );
    }
    function ms(e) {
      var t;
      let { store: r, computedStyle: n } = e,
        i = (0, fW.default)(e, mW),
        {
          element: o,
          actionItem: a,
          immediate: s,
          pluginInstance: c,
          continuous: h,
          restingValue: I,
          eventId: d,
        } = i,
        T = !h,
        E = bW(),
        { ixElements: y, ixSession: O, ixData: C } = r.getState(),
        R = TW(y, o),
        { refState: L } = y[R] || {},
        S = Re.getRefType(o),
        X = O.reducedMotion && nt.ReducedMotionTypes[a.actionTypeId],
        M;
      if (X && h)
        switch (
          (t = C.events[d]) === null || t === void 0 ? void 0 : t.eventTypeId
        ) {
          case nt.EventTypeConsts.MOUSE_MOVE:
          case nt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            M = I;
            break;
          default:
            M = 0.5;
            break;
        }
      let G = SW(o, L, n, a, Re, c);
      if (
        (r.dispatch(
          (0, Oe.instanceAdded)(
            (0, lW.default)(
              {
                instanceId: E,
                elementId: R,
                origin: G,
                refType: S,
                skipMotion: X,
                skipToValue: M,
              },
              i
            )
          )
        ),
        zm(document.body, "ix2-animation-started", E),
        s)
      ) {
        iV(r, E);
        return;
      }
      Kt({ store: r, select: ({ ixInstances: B }) => B[E], onChange: Ym }),
        T && r.dispatch((0, Oe.instanceStarted)(E, O.tick));
    }
    function ys(e, t) {
      zm(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: r, actionItem: n } = e,
        { ixElements: i } = t.getState(),
        { ref: o, refType: a } = i[r] || {};
      a === Vm && NW(o, n, Re), t.dispatch((0, Oe.instanceRemoved)(e.id));
    }
    function zm(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function iV(e, t) {
      let { ixParameters: r } = e.getState();
      e.dispatch((0, Oe.instanceStarted)(t, 0)),
        e.dispatch((0, Oe.animationFrameChanged)(performance.now(), r));
      let { ixInstances: n } = e.getState();
      Ym(n[t], e);
    }
    function Ym(e, t) {
      let {
          active: r,
          continuous: n,
          complete: i,
          elementId: o,
          actionItem: a,
          actionTypeId: s,
          renderType: c,
          current: h,
          groupIndex: I,
          eventId: d,
          eventTarget: T,
          eventStateKey: E,
          actionListId: y,
          isCarrier: O,
          styleProp: C,
          verbose: R,
          pluginInstance: L,
        } = e,
        { ixData: S, ixSession: X } = t.getState(),
        { events: M } = S,
        G = M[d] || {},
        { mediaQueries: B = S.mediaQueryKeys } = G;
      if (Pi(B, X.mediaQueryKey) && (n || r || i)) {
        if (h || (c === IW && i)) {
          t.dispatch((0, Oe.elementStateChanged)(o, s, h, a));
          let { ixElements: $ } = t.getState(),
            { ref: J, refType: oe, refState: H } = $[o] || {},
            P = H && H[s];
          switch (oe) {
            case Vm: {
              OW(J, H, P, d, a, C, Re, c, L);
              break;
            }
          }
        }
        if (i) {
          if (O) {
            let $ = _s({
              store: t,
              eventId: d,
              eventTarget: T,
              eventStateKey: E,
              actionListId: y,
              groupIndex: I + 1,
              verbose: R,
            });
            R &&
              !$ &&
              t.dispatch(
                (0, Oe.actionListPlaybackChanged)({
                  actionListId: y,
                  isPlaying: !1,
                })
              );
          }
          ys(e, t);
        }
      }
    }
  });
  var $m = u((It) => {
    "use strict";
    var oV = Qt().default,
      aV = ut().default;
    Object.defineProperty(It, "__esModule", { value: !0 });
    It.actions = void 0;
    It.destroy = Qm;
    It.init = fV;
    It.setEnv = lV;
    It.store = void 0;
    Gl();
    var sV = Zo(),
      uV = aV(eE()),
      Is = fs(),
      cV = oV(yi());
    It.actions = cV;
    var Fi = (0, sV.createStore)(uV.default);
    It.store = Fi;
    function lV(e) {
      e() && (0, Is.observeRequests)(Fi);
    }
    function fV(e) {
      Qm(), (0, Is.startEngine)({ store: Fi, rawData: e, allowEvents: !0 });
    }
    function Qm() {
      (0, Is.stopEngine)(Fi);
    }
  });
  var ty = u((hK, ey) => {
    var Zm = Xe(),
      Jm = $m();
    Jm.setEnv(Zm.env);
    Zm.define(
      "ix2",
      (ey.exports = function () {
        return Jm;
      })
    );
  });
  var ny = u((gK, ry) => {
    var Or = Xe();
    Or.define(
      "links",
      (ry.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = Or.env(),
          a = window.location,
          s = document.createElement("a"),
          c = "w--current",
          h = /index\.(html|php)$/,
          I = /\/$/,
          d,
          T;
        r.ready = r.design = r.preview = E;
        function E() {
          (i = o && Or.env("design")),
            (T = Or.env("slug") || a.pathname || ""),
            Or.scroll.off(O),
            (d = []);
          for (var R = document.links, L = 0; L < R.length; ++L) y(R[L]);
          d.length && (Or.scroll.on(O), O());
        }
        function y(R) {
          var L =
            (i && R.getAttribute("href-disabled")) || R.getAttribute("href");
          if (((s.href = L), !(L.indexOf(":") >= 0))) {
            var S = e(R);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var X = e(s.hash);
              X.length && d.push({ link: S, sec: X, active: !1 });
              return;
            }
            if (!(L === "#" || L === "")) {
              var M = s.href === a.href || L === T || (h.test(L) && I.test(T));
              C(S, c, M);
            }
          }
        }
        function O() {
          var R = n.scrollTop(),
            L = n.height();
          t.each(d, function (S) {
            var X = S.link,
              M = S.sec,
              G = M.offset().top,
              B = M.outerHeight(),
              $ = L * 0.5,
              J = M.is(":visible") && G + B - $ >= R && G + $ <= R + L;
            S.active !== J && ((S.active = J), C(X, c, J));
          });
        }
        function C(R, L, S) {
          var X = R.hasClass(L);
          (S && X) || (!S && !X) || (S ? R.addClass(L) : R.removeClass(L));
        }
        return r;
      })
    );
  });
  var oy = u((EK, iy) => {
    var Gi = Xe();
    Gi.define(
      "scroll",
      (iy.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = y() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (P) {
              window.setTimeout(P, 15);
            },
          c = Gi.env("editor") ? ".w-editor-body" : "body",
          h =
            "header, " +
            c +
            " > .header, " +
            c +
            " > .w-nav:not([data-no-scroll])",
          I = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + I + ")",
          T = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(T));
        function y() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var O = /^#[a-zA-Z0-9][\w:.-]*$/;
        function C(P) {
          return O.test(P.hash) && P.host + P.pathname === r.host + r.pathname;
        }
        let R =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function L() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            R.matches
          );
        }
        function S(P, _) {
          var D;
          switch (_) {
            case "add":
              (D = P.attr("tabindex")),
                D
                  ? P.attr("data-wf-tabindex-swap", D)
                  : P.attr("tabindex", "-1");
              break;
            case "remove":
              (D = P.attr("data-wf-tabindex-swap")),
                D
                  ? (P.attr("tabindex", D),
                    P.removeAttr("data-wf-tabindex-swap"))
                  : P.removeAttr("tabindex");
              break;
          }
          P.toggleClass("wf-force-outline-none", _ === "add");
        }
        function X(P) {
          var _ = P.currentTarget;
          if (
            !(
              Gi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))
            )
          ) {
            var D = C(_) ? _.hash : "";
            if (D !== "") {
              var x = e(D);
              x.length &&
                (P && (P.preventDefault(), P.stopPropagation()),
                M(D, P),
                window.setTimeout(
                  function () {
                    G(x, function () {
                      S(x, "add"),
                        x.get(0).focus({ preventScroll: !0 }),
                        S(x, "remove");
                    });
                  },
                  P ? 0 : 300
                ));
            }
          }
        }
        function M(P) {
          if (
            r.hash !== P &&
            n &&
            n.pushState &&
            !(Gi.env.chrome && r.protocol === "file:")
          ) {
            var _ = n.state && n.state.hash;
            _ !== P && n.pushState({ hash: P }, "", P);
          }
        }
        function G(P, _) {
          var D = i.scrollTop(),
            x = B(P);
          if (D !== x) {
            var U = $(P, D, x),
              Q = Date.now(),
              ne = function () {
                var W = Date.now() - Q;
                window.scroll(0, J(D, x, W, U)),
                  W <= U ? s(ne) : typeof _ == "function" && _();
              };
            s(ne);
          }
        }
        function B(P) {
          var _ = e(h),
            D = _.css("position") === "fixed" ? _.outerHeight() : 0,
            x = P.offset().top - D;
          if (P.data("scroll") === "mid") {
            var U = i.height() - D,
              Q = P.outerHeight();
            Q < U && (x -= Math.round((U - Q) / 2));
          }
          return x;
        }
        function $(P, _, D) {
          if (L()) return 0;
          var x = 1;
          return (
            a.add(P).each(function (U, Q) {
              var ne = parseFloat(Q.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (x = ne);
            }),
            (472.143 * Math.log(Math.abs(_ - D) + 125) - 2e3) * x
          );
        }
        function J(P, _, D, x) {
          return D > x ? _ : P + (_ - P) * oe(D / x);
        }
        function oe(P) {
          return P < 0.5
            ? 4 * P * P * P
            : (P - 1) * (2 * P - 2) * (2 * P - 2) + 1;
        }
        function H() {
          var { WF_CLICK_EMPTY: P, WF_CLICK_SCROLL: _ } = t;
          o.on(_, d, X),
            o.on(P, I, function (D) {
              D.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: H };
      })
    );
  });
  var sy = u((_K, ay) => {
    var dV = Xe();
    dV.define(
      "touch",
      (ay.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            c = Math.min(Math.round(window.innerWidth * 0.04), 40),
            h,
            I;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", T, !1),
            o.addEventListener("touchend", E, !1),
            o.addEventListener("touchcancel", y, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", T, !1),
            o.addEventListener("mouseup", E, !1),
            o.addEventListener("mouseout", y, !1);
          function d(C) {
            var R = C.touches;
            (R && R.length > 1) ||
              ((a = !0),
              R ? ((s = !0), (h = R[0].clientX)) : (h = C.clientX),
              (I = h));
          }
          function T(C) {
            if (a) {
              if (s && C.type === "mousemove") {
                C.preventDefault(), C.stopPropagation();
                return;
              }
              var R = C.touches,
                L = R ? R[0].clientX : C.clientX,
                S = L - I;
              (I = L),
                Math.abs(S) > c &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", C, { direction: S > 0 ? "right" : "left" }), y());
            }
          }
          function E(C) {
            if (a && ((a = !1), s && C.type === "mouseup")) {
              C.preventDefault(), C.stopPropagation(), (s = !1);
              return;
            }
          }
          function y() {
            a = !1;
          }
          function O() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", T, !1),
              o.removeEventListener("touchend", E, !1),
              o.removeEventListener("touchcancel", y, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", T, !1),
              o.removeEventListener("mouseup", E, !1),
              o.removeEventListener("mouseout", y, !1),
              (o = null);
          }
          this.destroy = O;
        }
        function i(o, a, s) {
          var c = e.Event(o, { originalEvent: a });
          e(a.target).trigger(c, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var uy = u((Ts) => {
    "use strict";
    Object.defineProperty(Ts, "__esModule", { value: !0 });
    Ts.default = pV;
    function pV(e, t, r, n, i, o, a, s, c, h, I, d, T) {
      return function (E) {
        e(E);
        var y = E.form,
          O = {
            name: y.attr("data-name") || y.attr("name") || "Untitled Form",
            pageId: y.attr("data-wf-page-id") || "",
            elementId: y.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              y.html()
            ),
            trackingCookies: n(),
          };
        let C = y.attr("data-wf-flow");
        C && (O.wfFlow = C), i(E);
        var R = o(y, O.fields);
        if (R) return a(R);
        if (((O.fileUploads = s(y)), c(E), !h)) {
          I(E);
          return;
        }
        d.ajax({
          url: T,
          type: "POST",
          data: O,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (L) {
            L && L.code === 200 && (E.success = !0), I(E);
          })
          .fail(function () {
            I(E);
          });
      };
    }
  });
  var ly = u((yK, cy) => {
    var Xi = Xe();
    Xi.define(
      "forms",
      (cy.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          c,
          h = /e(-)?mail/i,
          I = /^\S+@\S+$/,
          d = window.alert,
          T = Xi.env(),
          E,
          y,
          O,
          C = /list-manage[1-9]?.com/i,
          R = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              L(), !T && !E && X();
            };
        function L() {
          (c = e("html").attr("data-wf-site")),
            (y = "https://webflow.com/api/v1/form/" + c),
            a &&
              y.indexOf("https://webflow.com") >= 0 &&
              (y = y.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${y}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(S);
        }
        function S(W, V) {
          var v = e(V),
            f = e.data(V, s);
          f || (f = e.data(V, s, { form: v })), M(f);
          var p = v.closest("div.w-form");
          (f.done = p.find("> .w-form-done")),
            (f.fail = p.find("> .w-form-fail")),
            (f.fileUploads = p.find(".w-file-upload")),
            f.fileUploads.each(function (K) {
              U(K, f);
            });
          var g =
            f.form.attr("aria-label") || f.form.attr("data-name") || "Form";
          f.done.attr("aria-label") || f.form.attr("aria-label", g),
            f.done.attr("tabindex", "-1"),
            f.done.attr("role", "region"),
            f.done.attr("aria-label") ||
              f.done.attr("aria-label", g + " success"),
            f.fail.attr("tabindex", "-1"),
            f.fail.attr("role", "region"),
            f.fail.attr("aria-label") ||
              f.fail.attr("aria-label", g + " failure");
          var k = (f.action = v.attr("action"));
          if (
            ((f.handler = null),
            (f.redirect = v.attr("data-redirect")),
            C.test(k))
          ) {
            f.handler = _;
            return;
          }
          if (!k) {
            if (c) {
              f.handler = (() => {
                let K = uy().default;
                return K(M, o, Xi, oe, x, B, d, $, G, c, D, e, y);
              })();
              return;
            }
            R();
          }
        }
        function X() {
          (E = !0),
            n.on("submit", s + " form", function (K) {
              var Z = e.data(this, s);
              Z.handler && ((Z.evt = K), Z.handler(Z));
            });
          let W = ".w-checkbox-input",
            V = ".w-radio-input",
            v = "w--redirected-checked",
            f = "w--redirected-focus",
            p = "w--redirected-focus-visible",
            g = ":focus-visible, [data-wf-focus-visible]",
            k = [
              ["checkbox", W],
              ["radio", V],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + W + ")",
            (K) => {
              e(K.target).siblings(W).toggleClass(v);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (K) => {
              e(`input[name="${K.target.name}"]:not(${W})`).map((te, he) =>
                e(he).siblings(V).removeClass(v)
              );
              let Z = e(K.target);
              Z.hasClass("w-radio-input") || Z.siblings(V).addClass(v);
            }),
            k.forEach(([K, Z]) => {
              n.on(
                "focus",
                s + ` form input[type="${K}"]:not(` + Z + ")",
                (te) => {
                  e(te.target).siblings(Z).addClass(f),
                    e(te.target).filter(g).siblings(Z).addClass(p);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${K}"]:not(` + Z + ")",
                  (te) => {
                    e(te.target).siblings(Z).removeClass(`${f} ${p}`);
                  }
                );
            });
        }
        function M(W) {
          var V = (W.btn = W.form.find(':input[type="submit"]'));
          (W.wait = W.btn.attr("data-wait") || null),
            (W.success = !1),
            V.prop("disabled", !1),
            W.label && V.val(W.label);
        }
        function G(W) {
          var V = W.btn,
            v = W.wait;
          V.prop("disabled", !0), v && ((W.label = V.val()), V.val(v));
        }
        function B(W, V) {
          var v = null;
          return (
            (V = V || {}),
            W.find(':input:not([type="submit"]):not([type="file"])').each(
              function (f, p) {
                var g = e(p),
                  k = g.attr("type"),
                  K =
                    g.attr("data-name") || g.attr("name") || "Field " + (f + 1),
                  Z = g.val();
                if (k === "checkbox") Z = g.is(":checked");
                else if (k === "radio") {
                  if (V[K] === null || typeof V[K] == "string") return;
                  Z =
                    W.find(
                      'input[name="' + g.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof Z == "string" && (Z = e.trim(Z)),
                  (V[K] = Z),
                  (v = v || H(g, k, K, Z));
              }
            ),
            v
          );
        }
        function $(W) {
          var V = {};
          return (
            W.find(':input[type="file"]').each(function (v, f) {
              var p = e(f),
                g = p.attr("data-name") || p.attr("name") || "File " + (v + 1),
                k = p.attr("data-value");
              typeof k == "string" && (k = e.trim(k)), (V[g] = k);
            }),
            V
          );
        }
        let J = { _mkto_trk: "marketo" };
        function oe() {
          return document.cookie.split("; ").reduce(function (V, v) {
            let f = v.split("="),
              p = f[0];
            if (p in J) {
              let g = J[p],
                k = f.slice(1).join("=");
              V[g] = k;
            }
            return V;
          }, {});
        }
        function H(W, V, v, f) {
          var p = null;
          return (
            V === "password"
              ? (p = "Passwords cannot be submitted.")
              : W.attr("required")
              ? f
                ? h.test(W.attr("type")) &&
                  (I.test(f) ||
                    (p = "Please enter a valid email address for: " + v))
                : (p = "Please fill out the required field: " + v)
              : v === "g-recaptcha-response" &&
                !f &&
                (p = "Please confirm you\u2019re not a robot."),
            p
          );
        }
        function P(W) {
          x(W), D(W);
        }
        function _(W) {
          M(W);
          var V = W.form,
            v = {};
          if (/^https/.test(o.href) && !/^https/.test(W.action)) {
            V.attr("method", "post");
            return;
          }
          x(W);
          var f = B(V, v);
          if (f) return d(f);
          G(W);
          var p;
          t.each(v, function (Z, te) {
            h.test(te) && (v.EMAIL = Z),
              /^((full[ _-]?)?name)$/i.test(te) && (p = Z),
              /^(first[ _-]?name)$/i.test(te) && (v.FNAME = Z),
              /^(last[ _-]?name)$/i.test(te) && (v.LNAME = Z);
          }),
            p &&
              !v.FNAME &&
              ((p = p.split(" ")),
              (v.FNAME = p[0]),
              (v.LNAME = v.LNAME || p[1]));
          var g = W.action.replace("/post?", "/post-json?") + "&c=?",
            k = g.indexOf("u=") + 2;
          k = g.substring(k, g.indexOf("&", k));
          var K = g.indexOf("id=") + 3;
          (K = g.substring(K, g.indexOf("&", K))),
            (v["b_" + k + "_" + K] = ""),
            e
              .ajax({ url: g, data: v, dataType: "jsonp" })
              .done(function (Z) {
                (W.success = Z.result === "success" || /already/.test(Z.msg)),
                  W.success || console.info("MailChimp error: " + Z.msg),
                  D(W);
              })
              .fail(function () {
                D(W);
              });
        }
        function D(W) {
          var V = W.form,
            v = W.redirect,
            f = W.success;
          if (f && v) {
            Xi.location(v);
            return;
          }
          W.done.toggle(f),
            W.fail.toggle(!f),
            f ? W.done.focus() : W.fail.focus(),
            V.toggle(!f),
            M(W);
        }
        function x(W) {
          W.evt && W.evt.preventDefault(), (W.evt = null);
        }
        function U(W, V) {
          if (!V.fileUploads || !V.fileUploads[W]) return;
          var v,
            f = e(V.fileUploads[W]),
            p = f.find("> .w-file-upload-default"),
            g = f.find("> .w-file-upload-uploading"),
            k = f.find("> .w-file-upload-success"),
            K = f.find("> .w-file-upload-error"),
            Z = p.find(".w-file-upload-input"),
            te = p.find(".w-file-upload-label"),
            he = te.children(),
            ae = K.find(".w-file-upload-error-msg"),
            m = k.find(".w-file-upload-file"),
            j = k.find(".w-file-remove-link"),
            ee = m.find(".w-file-upload-file-name"),
            z = ae.attr("data-w-size-error"),
            pe = ae.attr("data-w-type-error"),
            xe = ae.attr("data-w-generic-error");
          if (
            (T ||
              te.on("click keydown", function (w) {
                (w.type === "keydown" && w.which !== 13 && w.which !== 32) ||
                  (w.preventDefault(), Z.click());
              }),
            te.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            j.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            T)
          )
            Z.on("click", function (w) {
              w.preventDefault();
            }),
              te.on("click", function (w) {
                w.preventDefault();
              }),
              he.on("click", function (w) {
                w.preventDefault();
              });
          else {
            j.on("click keydown", function (w) {
              if (w.type === "keydown") {
                if (w.which !== 13 && w.which !== 32) return;
                w.preventDefault();
              }
              Z.removeAttr("data-value"),
                Z.val(""),
                ee.html(""),
                p.toggle(!0),
                k.toggle(!1),
                te.focus();
            }),
              Z.on("change", function (w) {
                (v = w.target && w.target.files && w.target.files[0]),
                  v &&
                    (p.toggle(!1),
                    K.toggle(!1),
                    g.toggle(!0),
                    g.focus(),
                    ee.text(v.name),
                    N() || G(V),
                    (V.fileUploads[W].uploading = !0),
                    Q(v, b));
              });
            var Me = te.outerHeight();
            Z.height(Me), Z.width(1);
          }
          function l(w) {
            var q = w.responseJSON && w.responseJSON.msg,
              re = xe;
            typeof q == "string" && q.indexOf("InvalidFileTypeError") === 0
              ? (re = pe)
              : typeof q == "string" &&
                q.indexOf("MaxFileSizeError") === 0 &&
                (re = z),
              ae.text(re),
              Z.removeAttr("data-value"),
              Z.val(""),
              g.toggle(!1),
              p.toggle(!0),
              K.toggle(!0),
              K.focus(),
              (V.fileUploads[W].uploading = !1),
              N() || M(V);
          }
          function b(w, q) {
            if (w) return l(w);
            var re = q.fileName,
              se = q.postData,
              _e = q.fileId,
              Y = q.s3Url;
            Z.attr("data-value", _e), ne(Y, se, v, re, A);
          }
          function A(w) {
            if (w) return l(w);
            g.toggle(!1),
              k.css("display", "inline-block"),
              k.focus(),
              (V.fileUploads[W].uploading = !1),
              N() || M(V);
          }
          function N() {
            var w = (V.fileUploads && V.fileUploads.toArray()) || [];
            return w.some(function (q) {
              return q.uploading;
            });
          }
        }
        function Q(W, V) {
          var v = new URLSearchParams({ name: W.name, size: W.size });
          e.ajax({ type: "GET", url: `${O}?${v}`, crossDomain: !0 })
            .done(function (f) {
              V(null, f);
            })
            .fail(function (f) {
              V(f);
            });
        }
        function ne(W, V, v, f, p) {
          var g = new FormData();
          for (var k in V) g.append(k, V[k]);
          g.append("file", v, f),
            e
              .ajax({
                type: "POST",
                url: W,
                data: g,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                p(null);
              })
              .fail(function (K) {
                p(K);
              });
        }
        return r;
      })
    );
  });
  var py = u((IK, dy) => {
    var bs = Xe(),
      fy = "w-condition-invisible",
      vV = "." + fy;
    function hV(e) {
      return e.filter(function (t) {
        return !fn(t);
      });
    }
    function fn(e) {
      return !!(e.$el && e.$el.closest(vV).length);
    }
    function Os(e, t) {
      for (var r = e; r >= 0; r--) if (!fn(t[r])) return r;
      return -1;
    }
    function ws(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!fn(t[r])) return r;
      return -1;
    }
    function gV(e, t) {
      return Os(e - 1, t) === -1;
    }
    function EV(e, t) {
      return ws(e + 1, t) === -1;
    }
    function ln(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function _V(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        c = /(^|\s+)/g,
        h = [],
        I,
        d,
        T,
        E = [];
      function y(f, p) {
        return (
          (h = o(f) ? f : [f]),
          d || y.build(),
          hV(h).length > 1 &&
            ((d.items = d.empty),
            h.forEach(function (g, k) {
              var K = V("thumbnail"),
                Z = V("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(K);
              ln(Z, `show item ${k + 1} of ${h.length}`),
                fn(g) && Z.addClass(fy),
                (d.items = d.items.add(Z)),
                oe(g.thumbnailUrl || g.url, function (te) {
                  te.prop("width") > te.prop("height")
                    ? U(te, "wide")
                    : U(te, "tall"),
                    K.append(U(te, "thumbnail-image"));
                });
            }),
            d.strip.empty().append(d.items),
            U(d.content, "group")),
          i(Q(d.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          U(d.html, "noscroll"),
          y.show(p || 0)
        );
      }
      (y.build = function () {
        return (
          y.destroy(),
          (d = { html: r(t.documentElement), empty: r() }),
          (d.arrowLeft = V("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.arrowRight = V("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (d.close = V("control close").attr("role", "button")),
          ln(d.arrowLeft, "previous image"),
          ln(d.arrowRight, "next image"),
          ln(d.close, "close lightbox"),
          (d.spinner = V("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (d.strip = V("strip").attr("role", "tablist")),
          (T = new _(d.spinner, D("hide"))),
          (d.content = V("content").append(
            d.spinner,
            d.arrowLeft,
            d.arrowRight,
            d.close
          )),
          (d.container = V("container").append(d.content, d.strip)),
          (d.lightbox = V("backdrop hide").append(d.container)),
          d.strip.on("click", x("item"), S),
          d.content
            .on("swipe", X)
            .on("click", x("left"), C)
            .on("click", x("right"), R)
            .on("click", x("close"), L)
            .on("click", x("image, caption"), R),
          d.container.on("click", x("view"), L).on("dragstart", x("img"), G),
          d.lightbox.on("keydown", B).on("focusin", M),
          r(n).append(d.lightbox),
          y
        );
      }),
        (y.destroy = function () {
          d && (Q(d.html, "noscroll"), d.lightbox.remove(), (d = void 0));
        }),
        (y.show = function (f) {
          if (f !== I) {
            var p = h[f];
            if (!p) return y.hide();
            if (fn(p)) {
              if (f < I) {
                var g = Os(f - 1, h);
                f = g > -1 ? g : f;
              } else {
                var k = ws(f + 1, h);
                f = k > -1 ? k : f;
              }
              p = h[f];
            }
            var K = I;
            (I = f),
              d.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              T.show();
            var Z = (p.html && v(p.width, p.height)) || p.url;
            return (
              oe(Z, function (te) {
                if (f !== I) return;
                var he = V("figure", "figure").append(U(te, "image")),
                  ae = V("frame").append(he),
                  m = V("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(ae),
                  j,
                  ee;
                p.html &&
                  ((j = r(p.html)),
                  (ee = j.is("iframe")),
                  ee && j.on("load", z),
                  he.append(U(j, "embed"))),
                  p.caption &&
                    he.append(V("caption", "figcaption").text(p.caption)),
                  d.spinner.before(m),
                  ee || z();
                function z() {
                  if (
                    (d.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    T.hide(),
                    f !== I)
                  ) {
                    m.remove();
                    return;
                  }
                  let pe = gV(f, h);
                  ne(d.arrowLeft, "inactive", pe),
                    W(d.arrowLeft, pe),
                    pe && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                  let xe = EV(f, h);
                  if (
                    (ne(d.arrowRight, "inactive", xe),
                    W(d.arrowRight, xe),
                    xe && d.arrowRight.is(":focus") && d.arrowLeft.focus(),
                    d.view
                      ? (i(d.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(H(d.view)),
                        i(m)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: f > K ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : m.css("opacity", 1),
                    (d.view = m),
                    d.view.prop("tabIndex", 0),
                    d.items)
                  ) {
                    Q(d.items, "active"), d.items.removeAttr("aria-selected");
                    var Me = d.items.eq(f);
                    U(Me, "active"), Me.attr("aria-selected", !0), P(Me);
                  }
                }
              }),
              d.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              E.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (E.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                d.close.focus()),
              y
            );
          }
        }),
        (y.hide = function () {
          return (
            i(d.lightbox).add("opacity .3s").start({ opacity: 0 }).then(J), y
          );
        }),
        (y.prev = function () {
          var f = Os(I - 1, h);
          f > -1 && y.show(f);
        }),
        (y.next = function () {
          var f = ws(I + 1, h);
          f > -1 && y.show(f);
        });
      function O(f) {
        return function (p) {
          this === p.target && (p.stopPropagation(), p.preventDefault(), f());
        };
      }
      var C = O(y.prev),
        R = O(y.next),
        L = O(y.hide),
        S = function (f) {
          var p = r(this).index();
          f.preventDefault(), y.show(p);
        },
        X = function (f, p) {
          f.preventDefault(),
            p.direction === "left"
              ? y.next()
              : p.direction === "right" && y.prev();
        },
        M = function () {
          this.focus();
        };
      function G(f) {
        f.preventDefault();
      }
      function B(f) {
        var p = f.keyCode;
        p === 27 || $(p, "close")
          ? y.hide()
          : p === 37 || $(p, "left")
          ? y.prev()
          : p === 39 || $(p, "right")
          ? y.next()
          : $(p, "item") && r(":focus").click();
      }
      function $(f, p) {
        if (f !== 13 && f !== 32) return !1;
        var g = r(":focus").attr("class"),
          k = D(p).trim();
        return g.includes(k);
      }
      function J() {
        d &&
          (d.strip.scrollLeft(0).empty(),
          Q(d.html, "noscroll"),
          U(d.lightbox, "hide"),
          d.view && d.view.remove(),
          Q(d.content, "group"),
          U(d.arrowLeft, "inactive"),
          U(d.arrowRight, "inactive"),
          (I = d.view = void 0),
          E.forEach(function (f) {
            var p = f.node;
            p &&
              (f.hidden
                ? p.attr("aria-hidden", f.hidden)
                : p.removeAttr("aria-hidden"),
              f.tabIndex
                ? p.attr("tabIndex", f.tabIndex)
                : p.removeAttr("tabIndex"));
          }),
          (E = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function oe(f, p) {
        var g = V("img", "img");
        return (
          g.one("load", function () {
            p(g);
          }),
          g.attr("src", f),
          g
        );
      }
      function H(f) {
        return function () {
          f.remove();
        };
      }
      function P(f) {
        var p = f.get(0),
          g = d.strip.get(0),
          k = p.offsetLeft,
          K = p.clientWidth,
          Z = g.scrollLeft,
          te = g.clientWidth,
          he = g.scrollWidth - te,
          ae;
        k < Z
          ? (ae = Math.max(0, k + K - te))
          : k + K > te + Z && (ae = Math.min(k, he)),
          ae != null &&
            i(d.strip).add("scroll-left 500ms").start({ "scroll-left": ae });
      }
      function _(f, p, g) {
        (this.$element = f),
          (this.className = p),
          (this.delay = g || 200),
          this.hide();
      }
      (_.prototype.show = function () {
        var f = this;
        f.timeoutId ||
          (f.timeoutId = setTimeout(function () {
            f.$element.removeClass(f.className), delete f.timeoutId;
          }, f.delay));
      }),
        (_.prototype.hide = function () {
          var f = this;
          if (f.timeoutId) {
            clearTimeout(f.timeoutId), delete f.timeoutId;
            return;
          }
          f.$element.addClass(f.className);
        });
      function D(f, p) {
        return f.replace(c, (p ? " ." : " ") + s);
      }
      function x(f) {
        return D(f, !0);
      }
      function U(f, p) {
        return f.addClass(D(p));
      }
      function Q(f, p) {
        return f.removeClass(D(p));
      }
      function ne(f, p, g) {
        return f.toggleClass(D(p), g);
      }
      function W(f, p) {
        return f.attr("aria-hidden", p).attr("tabIndex", p ? -1 : 0);
      }
      function V(f, p) {
        return U(r(t.createElement(p || "div")), f);
      }
      function v(f, p) {
        var g =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          f +
          '" height="' +
          p +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(g);
      }
      return (
        (function () {
          var f = e.navigator.userAgent,
            p = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            g = f.match(p),
            k = f.indexOf("Android ") > -1 && f.indexOf("Chrome") === -1;
          if (!k && (!g || g[2] > 7)) return;
          var K = t.createElement("style");
          t.head.appendChild(K), e.addEventListener("resize", Z, !0);
          function Z() {
            var te = e.innerHeight,
              he = e.innerWidth,
              ae =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                te +
                "px}.w-lightbox-view {width:" +
                he +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * te +
                "px}.w-lightbox-image {max-width:" +
                he +
                "px;max-height:" +
                te +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * te +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * te +
                "px}.w-lightbox-item {width:" +
                0.1 * te +
                "px;padding:" +
                0.02 * te +
                "px " +
                0.01 * te +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * te +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * te +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * te +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * te +
                "px}.w-lightbox-image {max-width:" +
                0.96 * he +
                "px;max-height:" +
                0.96 * te +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * he +
                "px;max-height:" +
                0.84 * te +
                "px}}";
            K.textContent = ae;
          }
          Z();
        })(),
        y
      );
    }
    bs.define(
      "lightbox",
      (dy.exports = function (e) {
        var t = {},
          r = bs.env(),
          n = _V(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          s = ".w-lightbox",
          c;
        t.ready = t.design = t.preview = h;
        function h() {
          (a = r && bs.env("design")),
            n.destroy(),
            (c = {}),
            (o = i.find(s)),
            o.webflowLightBox(),
            o.each(function () {
              ln(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var E = this;
            e.each(E, function (y, O) {
              var C = e.data(O, s);
              C ||
                (C = e.data(O, s, {
                  el: e(O),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                C.el.off(s),
                I(C),
                a
                  ? C.el.on("setting" + s, I.bind(null, C))
                  : C.el.on("click" + s, d(C)).on("click" + s, function (R) {
                      R.preventDefault();
                    });
            });
          },
        });
        function I(E) {
          var y = E.el.children(".w-json").html(),
            O,
            C;
          if (!y) {
            E.items = [];
            return;
          }
          try {
            y = JSON.parse(y);
          } catch (R) {
            console.error("Malformed lightbox JSON configuration.", R);
          }
          T(y),
            y.items.forEach(function (R) {
              R.$el = E.el;
            }),
            (O = y.group),
            O
              ? ((C = c[O]),
                C || (C = c[O] = []),
                (E.items = C),
                y.items.length &&
                  ((E.index = C.length), C.push.apply(C, y.items)))
              : ((E.items = y.items), (E.index = 0));
        }
        function d(E) {
          return function () {
            E.items.length && n(E.items, E.index || 0);
          };
        }
        function T(E) {
          E.images &&
            (E.images.forEach(function (y) {
              y.type = "image";
            }),
            (E.items = E.images)),
            E.embed && ((E.embed.type = "video"), (E.items = [E.embed])),
            E.groupId && (E.group = E.groupId);
        }
        return t;
      })
    );
  });
  var hy = u((TK, vy) => {
    var Lt = Xe(),
      mV = Ar(),
      De = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    Lt.define(
      "navbar",
      (vy.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          c,
          h,
          I,
          d = Lt.env(),
          T = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          y = "w--open",
          O = "w--nav-dropdown-open",
          C = "w--nav-dropdown-toggle-open",
          R = "w--nav-dropdown-list-open",
          L = "w--nav-link-open",
          S = mV.triggers,
          X = e();
        (r.ready = r.design = r.preview = M),
          (r.destroy = function () {
            (X = e()), G(), c && c.length && c.each(oe);
          });
        function M() {
          (h = d && Lt.env("design")),
            (I = Lt.env("editor")),
            (s = e(document.body)),
            (c = o.find(E)),
            c.length && (c.each(J), G(), B());
        }
        function G() {
          Lt.resize.off($);
        }
        function B() {
          Lt.resize.on($);
        }
        function $() {
          c.each(p);
        }
        function J(m, j) {
          var ee = e(j),
            z = e.data(j, E);
          z ||
            (z = e.data(j, E, {
              open: !1,
              el: ee,
              config: {},
              selectedIdx: -1,
            })),
            (z.menu = ee.find(".w-nav-menu")),
            (z.links = z.menu.find(".w-nav-link")),
            (z.dropdowns = z.menu.find(".w-dropdown")),
            (z.dropdownToggle = z.menu.find(".w-dropdown-toggle")),
            (z.dropdownList = z.menu.find(".w-dropdown-list")),
            (z.button = ee.find(".w-nav-button")),
            (z.container = ee.find(".w-container")),
            (z.overlayContainerId = "w-nav-overlay-" + m),
            (z.outside = v(z));
          var pe = ee.find(".w-nav-brand");
          pe &&
            pe.attr("href") === "/" &&
            pe.attr("aria-label") == null &&
            pe.attr("aria-label", "home"),
            z.button.attr("style", "-webkit-user-select: text;"),
            z.button.attr("aria-label") == null &&
              z.button.attr("aria-label", "menu"),
            z.button.attr("role", "button"),
            z.button.attr("tabindex", "0"),
            z.button.attr("aria-controls", z.overlayContainerId),
            z.button.attr("aria-haspopup", "menu"),
            z.button.attr("aria-expanded", "false"),
            z.el.off(E),
            z.button.off(E),
            z.menu.off(E),
            _(z),
            h
              ? (H(z), z.el.on("setting" + E, D(z)))
              : (P(z),
                z.button.on("click" + E, W(z)),
                z.menu.on("click" + E, "a", V(z)),
                z.button.on("keydown" + E, x(z)),
                z.el.on("keydown" + E, U(z))),
            p(m, j);
        }
        function oe(m, j) {
          var ee = e.data(j, E);
          ee && (H(ee), e.removeData(j, E));
        }
        function H(m) {
          m.overlay && (ae(m, !0), m.overlay.remove(), (m.overlay = null));
        }
        function P(m) {
          m.overlay ||
            ((m.overlay = e(T).appendTo(m.el)),
            m.overlay.attr("id", m.overlayContainerId),
            (m.parent = m.menu.parent()),
            ae(m, !0));
        }
        function _(m) {
          var j = {},
            ee = m.config || {},
            z = (j.animation = m.el.attr("data-animation") || "default");
          (j.animOver = /^over/.test(z)),
            (j.animDirect = /left$/.test(z) ? -1 : 1),
            ee.animation !== z && m.open && t.defer(ne, m),
            (j.easing = m.el.attr("data-easing") || "ease"),
            (j.easing2 = m.el.attr("data-easing2") || "ease");
          var pe = m.el.attr("data-duration");
          (j.duration = pe != null ? Number(pe) : 400),
            (j.docHeight = m.el.attr("data-doc-height")),
            (m.config = j);
        }
        function D(m) {
          return function (j, ee) {
            ee = ee || {};
            var z = i.width();
            _(m),
              ee.open === !0 && te(m, !0),
              ee.open === !1 && ae(m, !0),
              m.open &&
                t.defer(function () {
                  z !== i.width() && ne(m);
                });
          };
        }
        function x(m) {
          return function (j) {
            switch (j.keyCode) {
              case De.SPACE:
              case De.ENTER:
                return W(m)(), j.preventDefault(), j.stopPropagation();
              case De.ESCAPE:
                return ae(m), j.preventDefault(), j.stopPropagation();
              case De.ARROW_RIGHT:
              case De.ARROW_DOWN:
              case De.HOME:
              case De.END:
                return m.open
                  ? (j.keyCode === De.END
                      ? (m.selectedIdx = m.links.length - 1)
                      : (m.selectedIdx = 0),
                    Q(m),
                    j.preventDefault(),
                    j.stopPropagation())
                  : (j.preventDefault(), j.stopPropagation());
            }
          };
        }
        function U(m) {
          return function (j) {
            if (m.open)
              switch (
                ((m.selectedIdx = m.links.index(document.activeElement)),
                j.keyCode)
              ) {
                case De.HOME:
                case De.END:
                  return (
                    j.keyCode === De.END
                      ? (m.selectedIdx = m.links.length - 1)
                      : (m.selectedIdx = 0),
                    Q(m),
                    j.preventDefault(),
                    j.stopPropagation()
                  );
                case De.ESCAPE:
                  return (
                    ae(m),
                    m.button.focus(),
                    j.preventDefault(),
                    j.stopPropagation()
                  );
                case De.ARROW_LEFT:
                case De.ARROW_UP:
                  return (
                    (m.selectedIdx = Math.max(-1, m.selectedIdx - 1)),
                    Q(m),
                    j.preventDefault(),
                    j.stopPropagation()
                  );
                case De.ARROW_RIGHT:
                case De.ARROW_DOWN:
                  return (
                    (m.selectedIdx = Math.min(
                      m.links.length - 1,
                      m.selectedIdx + 1
                    )),
                    Q(m),
                    j.preventDefault(),
                    j.stopPropagation()
                  );
              }
          };
        }
        function Q(m) {
          if (m.links[m.selectedIdx]) {
            var j = m.links[m.selectedIdx];
            j.focus(), V(j);
          }
        }
        function ne(m) {
          m.open && (ae(m, !0), te(m, !0));
        }
        function W(m) {
          return a(function () {
            m.open ? ae(m) : te(m);
          });
        }
        function V(m) {
          return function (j) {
            var ee = e(this),
              z = ee.attr("href");
            if (!Lt.validClick(j.currentTarget)) {
              j.preventDefault();
              return;
            }
            z && z.indexOf("#") === 0 && m.open && ae(m);
          };
        }
        function v(m) {
          return (
            m.outside && o.off("click" + E, m.outside),
            function (j) {
              var ee = e(j.target);
              (I && ee.closest(".w-editor-bem-EditorOverlay").length) ||
                f(m, ee);
            }
          );
        }
        var f = a(function (m, j) {
          if (m.open) {
            var ee = j.closest(".w-nav-menu");
            m.menu.is(ee) || ae(m);
          }
        });
        function p(m, j) {
          var ee = e.data(j, E),
            z = (ee.collapsed = ee.button.css("display") !== "none");
          if ((ee.open && !z && !h && ae(ee, !0), ee.container.length)) {
            var pe = k(ee);
            ee.links.each(pe), ee.dropdowns.each(pe);
          }
          ee.open && he(ee);
        }
        var g = "max-width";
        function k(m) {
          var j = m.container.css(g);
          return (
            j === "none" && (j = ""),
            function (ee, z) {
              (z = e(z)), z.css(g, ""), z.css(g) === "none" && z.css(g, j);
            }
          );
        }
        function K(m, j) {
          j.setAttribute("data-nav-menu-open", "");
        }
        function Z(m, j) {
          j.removeAttribute("data-nav-menu-open");
        }
        function te(m, j) {
          if (m.open) return;
          (m.open = !0),
            m.menu.each(K),
            m.links.addClass(L),
            m.dropdowns.addClass(O),
            m.dropdownToggle.addClass(C),
            m.dropdownList.addClass(R),
            m.button.addClass(y);
          var ee = m.config,
            z = ee.animation;
          (z === "none" || !n.support.transform || ee.duration <= 0) &&
            (j = !0);
          var pe = he(m),
            xe = m.menu.outerHeight(!0),
            Me = m.menu.outerWidth(!0),
            l = m.el.height(),
            b = m.el[0];
          if (
            (p(0, b),
            S.intro(0, b),
            Lt.redraw.up(),
            h || o.on("click" + E, m.outside),
            j)
          ) {
            w();
            return;
          }
          var A = "transform " + ee.duration + "ms " + ee.easing;
          if (
            (m.overlay &&
              ((X = m.menu.prev()), m.overlay.show().append(m.menu)),
            ee.animOver)
          ) {
            n(m.menu)
              .add(A)
              .set({ x: ee.animDirect * Me, height: pe })
              .start({ x: 0 })
              .then(w),
              m.overlay && m.overlay.width(Me);
            return;
          }
          var N = l + xe;
          n(m.menu).add(A).set({ y: -N }).start({ y: 0 }).then(w);
          function w() {
            m.button.attr("aria-expanded", "true");
          }
        }
        function he(m) {
          var j = m.config,
            ee = j.docHeight ? o.height() : s.height();
          return (
            j.animOver
              ? m.menu.height(ee)
              : m.el.css("position") !== "fixed" &&
                (ee -= m.el.outerHeight(!0)),
            m.overlay && m.overlay.height(ee),
            ee
          );
        }
        function ae(m, j) {
          if (!m.open) return;
          (m.open = !1), m.button.removeClass(y);
          var ee = m.config;
          if (
            ((ee.animation === "none" ||
              !n.support.transform ||
              ee.duration <= 0) &&
              (j = !0),
            S.outro(0, m.el[0]),
            o.off("click" + E, m.outside),
            j)
          ) {
            n(m.menu).stop(), b();
            return;
          }
          var z = "transform " + ee.duration + "ms " + ee.easing2,
            pe = m.menu.outerHeight(!0),
            xe = m.menu.outerWidth(!0),
            Me = m.el.height();
          if (ee.animOver) {
            n(m.menu)
              .add(z)
              .start({ x: xe * ee.animDirect })
              .then(b);
            return;
          }
          var l = Me + pe;
          n(m.menu).add(z).start({ y: -l }).then(b);
          function b() {
            m.menu.height(""),
              n(m.menu).set({ x: 0, y: 0 }),
              m.menu.each(Z),
              m.links.removeClass(L),
              m.dropdowns.removeClass(O),
              m.dropdownToggle.removeClass(C),
              m.dropdownList.removeClass(R),
              m.overlay &&
                m.overlay.children().length &&
                (X.length ? m.menu.insertAfter(X) : m.menu.prependTo(m.parent),
                m.overlay.attr("style", "").hide()),
              m.el.triggerHandler("w-close"),
              m.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var _y = u((bK, Ey) => {
    var qt = Xe(),
      yV = Ar(),
      gt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      gy =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    qt.define(
      "slider",
      (Ey.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = qt.env(),
          c = ".w-slider",
          h = '<div class="w-slider-dot" data-wf-ignore />',
          I =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          d = "w-slider-force-show",
          T = yV.triggers,
          E,
          y = !1;
        (r.ready = function () {
          (a = qt.env("design")), O();
        }),
          (r.design = function () {
            (a = !0), setTimeout(O, 1e3);
          }),
          (r.preview = function () {
            (a = !1), O();
          }),
          (r.redraw = function () {
            (y = !0), O(), (y = !1);
          }),
          (r.destroy = C);
        function O() {
          (o = i.find(c)), o.length && (o.each(S), !E && (C(), R()));
        }
        function C() {
          qt.resize.off(L), qt.redraw.off(r.redraw);
        }
        function R() {
          qt.resize.on(L), qt.redraw.on(r.redraw);
        }
        function L() {
          o.filter(":visible").each(U);
        }
        function S(v, f) {
          var p = e(f),
            g = e.data(f, c);
          g ||
            (g = e.data(f, c, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: p,
              config: {},
            })),
            (g.mask = p.children(".w-slider-mask")),
            (g.left = p.children(".w-slider-arrow-left")),
            (g.right = p.children(".w-slider-arrow-right")),
            (g.nav = p.children(".w-slider-nav")),
            (g.slides = g.mask.children(".w-slide")),
            g.slides.each(T.reset),
            y && (g.maskWidth = 0),
            p.attr("role") === void 0 && p.attr("role", "region"),
            p.attr("aria-label") === void 0 && p.attr("aria-label", "carousel");
          var k = g.mask.attr("id");
          if (
            (k || ((k = "w-slider-mask-" + v), g.mask.attr("id", k)),
            !a && !g.ariaLiveLabel && (g.ariaLiveLabel = e(I).appendTo(g.mask)),
            g.left.attr("role", "button"),
            g.left.attr("tabindex", "0"),
            g.left.attr("aria-controls", k),
            g.left.attr("aria-label") === void 0 &&
              g.left.attr("aria-label", "previous slide"),
            g.right.attr("role", "button"),
            g.right.attr("tabindex", "0"),
            g.right.attr("aria-controls", k),
            g.right.attr("aria-label") === void 0 &&
              g.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            g.left.hide(), g.right.hide(), g.nav.hide(), (E = !0);
            return;
          }
          g.el.off(c),
            g.left.off(c),
            g.right.off(c),
            g.nav.off(c),
            X(g),
            a
              ? (g.el.on("setting" + c, _(g)), P(g), (g.hasTimer = !1))
              : (g.el.on("swipe" + c, _(g)),
                g.left.on("click" + c, $(g)),
                g.right.on("click" + c, J(g)),
                g.left.on("keydown" + c, B(g, $)),
                g.right.on("keydown" + c, B(g, J)),
                g.nav.on("keydown" + c, "> div", _(g)),
                g.config.autoplay &&
                  !g.hasTimer &&
                  ((g.hasTimer = !0), (g.timerCount = 1), H(g)),
                g.el.on("mouseenter" + c, G(g, !0, "mouse")),
                g.el.on("focusin" + c, G(g, !0, "keyboard")),
                g.el.on("mouseleave" + c, G(g, !1, "mouse")),
                g.el.on("focusout" + c, G(g, !1, "keyboard"))),
            g.nav.on("click" + c, "> div", _(g)),
            s ||
              g.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var K = p.filter(":hidden");
          K.addClass(d);
          var Z = p.parents(":hidden");
          Z.addClass(d), y || U(v, f), K.removeClass(d), Z.removeClass(d);
        }
        function X(v) {
          var f = {};
          (f.crossOver = 0),
            (f.animation = v.el.attr("data-animation") || "slide"),
            f.animation === "outin" &&
              ((f.animation = "cross"), (f.crossOver = 0.5)),
            (f.easing = v.el.attr("data-easing") || "ease");
          var p = v.el.attr("data-duration");
          if (
            ((f.duration = p != null ? parseInt(p, 10) : 500),
            M(v.el.attr("data-infinite")) && (f.infinite = !0),
            M(v.el.attr("data-disable-swipe")) && (f.disableSwipe = !0),
            M(v.el.attr("data-hide-arrows"))
              ? (f.hideArrows = !0)
              : v.config.hideArrows && (v.left.show(), v.right.show()),
            M(v.el.attr("data-autoplay")))
          ) {
            (f.autoplay = !0),
              (f.delay = parseInt(v.el.attr("data-delay"), 10) || 2e3),
              (f.timerMax = parseInt(v.el.attr("data-autoplay-limit"), 10));
            var g = "mousedown" + c + " touchstart" + c;
            a ||
              v.el.off(g).one(g, function () {
                P(v);
              });
          }
          var k = v.right.width();
          (f.edge = k ? k + 40 : 100), (v.config = f);
        }
        function M(v) {
          return v === "1" || v === "true";
        }
        function G(v, f, p) {
          return function (g) {
            if (f) v.hasFocus[p] = f;
            else if (
              e.contains(v.el.get(0), g.relatedTarget) ||
              ((v.hasFocus[p] = f),
              (v.hasFocus.mouse && p === "keyboard") ||
                (v.hasFocus.keyboard && p === "mouse"))
            )
              return;
            f
              ? (v.ariaLiveLabel.attr("aria-live", "polite"),
                v.hasTimer && P(v))
              : (v.ariaLiveLabel.attr("aria-live", "off"), v.hasTimer && H(v));
          };
        }
        function B(v, f) {
          return function (p) {
            switch (p.keyCode) {
              case gt.SPACE:
              case gt.ENTER:
                return f(v)(), p.preventDefault(), p.stopPropagation();
            }
          };
        }
        function $(v) {
          return function () {
            x(v, { index: v.index - 1, vector: -1 });
          };
        }
        function J(v) {
          return function () {
            x(v, { index: v.index + 1, vector: 1 });
          };
        }
        function oe(v, f) {
          var p = null;
          f === v.slides.length && (O(), Q(v)),
            t.each(v.anchors, function (g, k) {
              e(g.els).each(function (K, Z) {
                e(Z).index() === f && (p = k);
              });
            }),
            p != null && x(v, { index: p, immediate: !0 });
        }
        function H(v) {
          P(v);
          var f = v.config,
            p = f.timerMax;
          (p && v.timerCount++ > p) ||
            (v.timerId = window.setTimeout(function () {
              v.timerId == null || a || (J(v)(), H(v));
            }, f.delay));
        }
        function P(v) {
          window.clearTimeout(v.timerId), (v.timerId = null);
        }
        function _(v) {
          return function (f, p) {
            p = p || {};
            var g = v.config;
            if (a && f.type === "setting") {
              if (p.select === "prev") return $(v)();
              if (p.select === "next") return J(v)();
              if ((X(v), Q(v), p.select == null)) return;
              oe(v, p.select);
              return;
            }
            if (f.type === "swipe")
              return g.disableSwipe || qt.env("editor")
                ? void 0
                : p.direction === "left"
                ? J(v)()
                : p.direction === "right"
                ? $(v)()
                : void 0;
            if (v.nav.has(f.target).length) {
              var k = e(f.target).index();
              if (
                (f.type === "click" && x(v, { index: k }), f.type === "keydown")
              )
                switch (f.keyCode) {
                  case gt.ENTER:
                  case gt.SPACE: {
                    x(v, { index: k }), f.preventDefault();
                    break;
                  }
                  case gt.ARROW_LEFT:
                  case gt.ARROW_UP: {
                    D(v.nav, Math.max(k - 1, 0)), f.preventDefault();
                    break;
                  }
                  case gt.ARROW_RIGHT:
                  case gt.ARROW_DOWN: {
                    D(v.nav, Math.min(k + 1, v.pages)), f.preventDefault();
                    break;
                  }
                  case gt.HOME: {
                    D(v.nav, 0), f.preventDefault();
                    break;
                  }
                  case gt.END: {
                    D(v.nav, v.pages), f.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function D(v, f) {
          var p = v.children().eq(f).focus();
          v.children().not(p);
        }
        function x(v, f) {
          f = f || {};
          var p = v.config,
            g = v.anchors;
          v.previous = v.index;
          var k = f.index,
            K = {};
          k < 0
            ? ((k = g.length - 1),
              p.infinite &&
                ((K.x = -v.endX), (K.from = 0), (K.to = g[0].width)))
            : k >= g.length &&
              ((k = 0),
              p.infinite &&
                ((K.x = g[g.length - 1].width),
                (K.from = -g[g.length - 1].x),
                (K.to = K.from - K.x))),
            (v.index = k);
          var Z = v.nav
            .children()
            .eq(k)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          v.nav
            .children()
            .not(Z)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            p.hideArrows &&
              (v.index === g.length - 1 ? v.right.hide() : v.right.show(),
              v.index === 0 ? v.left.hide() : v.left.show());
          var te = v.offsetX || 0,
            he = (v.offsetX = -g[v.index].x),
            ae = { x: he, opacity: 1, visibility: "" },
            m = e(g[v.index].els),
            j = e(g[v.previous] && g[v.previous].els),
            ee = v.slides.not(m),
            z = p.animation,
            pe = p.easing,
            xe = Math.round(p.duration),
            Me = f.vector || (v.index > v.previous ? 1 : -1),
            l = "opacity " + xe + "ms " + pe,
            b = "transform " + xe + "ms " + pe;
          if (
            (m.find(gy).removeAttr("tabindex"),
            m.removeAttr("aria-hidden"),
            m.find("*").removeAttr("aria-hidden"),
            ee.find(gy).attr("tabindex", "-1"),
            ee.attr("aria-hidden", "true"),
            ee.find("*").attr("aria-hidden", "true"),
            a || (m.each(T.intro), ee.each(T.outro)),
            f.immediate && !y)
          ) {
            n(m).set(ae), w();
            return;
          }
          if (v.index === v.previous) return;
          if (
            (a || v.ariaLiveLabel.text(`Slide ${k + 1} of ${g.length}.`),
            z === "cross")
          ) {
            var A = Math.round(xe - xe * p.crossOver),
              N = Math.round(xe - A);
            (l = "opacity " + A + "ms " + pe),
              n(j).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(m)
                .set({ visibility: "", x: he, opacity: 0, zIndex: v.depth++ })
                .add(l)
                .wait(N)
                .then({ opacity: 1 })
                .then(w);
            return;
          }
          if (z === "fade") {
            n(j).set({ visibility: "" }).stop(),
              n(m)
                .set({ visibility: "", x: he, opacity: 0, zIndex: v.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(w);
            return;
          }
          if (z === "over") {
            (ae = { x: v.endX }),
              n(j).set({ visibility: "" }).stop(),
              n(m)
                .set({
                  visibility: "",
                  zIndex: v.depth++,
                  x: he + g[v.index].width * Me,
                })
                .add(b)
                .start({ x: he })
                .then(w);
            return;
          }
          p.infinite && K.x
            ? (n(v.slides.not(j))
                .set({ visibility: "", x: K.x })
                .add(b)
                .start({ x: he }),
              n(j).set({ visibility: "", x: K.from }).add(b).start({ x: K.to }),
              (v.shifted = j))
            : (p.infinite &&
                v.shifted &&
                (n(v.shifted).set({ visibility: "", x: te }),
                (v.shifted = null)),
              n(v.slides).set({ visibility: "" }).add(b).start({ x: he }));
          function w() {
            (m = e(g[v.index].els)),
              (ee = v.slides.not(m)),
              z !== "slide" && (ae.visibility = "hidden"),
              n(ee).set(ae);
          }
        }
        function U(v, f) {
          var p = e.data(f, c);
          if (p) {
            if (W(p)) return Q(p);
            a && V(p) && Q(p);
          }
        }
        function Q(v) {
          var f = 1,
            p = 0,
            g = 0,
            k = 0,
            K = v.maskWidth,
            Z = K - v.config.edge;
          Z < 0 && (Z = 0),
            (v.anchors = [{ els: [], x: 0, width: 0 }]),
            v.slides.each(function (he, ae) {
              g - p > Z &&
                (f++,
                (p += K),
                (v.anchors[f - 1] = { els: [], x: g, width: 0 })),
                (k = e(ae).outerWidth(!0)),
                (g += k),
                (v.anchors[f - 1].width += k),
                v.anchors[f - 1].els.push(ae);
              var m = he + 1 + " of " + v.slides.length;
              e(ae).attr("aria-label", m), e(ae).attr("role", "group");
            }),
            (v.endX = g),
            a && (v.pages = null),
            v.nav.length && v.pages !== f && ((v.pages = f), ne(v));
          var te = v.index;
          te >= f && (te = f - 1), x(v, { immediate: !0, index: te });
        }
        function ne(v) {
          var f = [],
            p,
            g = v.el.attr("data-nav-spacing");
          g && (g = parseFloat(g) + "px");
          for (var k = 0, K = v.pages; k < K; k++)
            (p = e(h)),
              p
                .attr("aria-label", "Show slide " + (k + 1) + " of " + K)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              v.nav.hasClass("w-num") && p.text(k + 1),
              g != null && p.css({ "margin-left": g, "margin-right": g }),
              f.push(p);
          v.nav.empty().append(f);
        }
        function W(v) {
          var f = v.mask.width();
          return v.maskWidth !== f ? ((v.maskWidth = f), !0) : !1;
        }
        function V(v) {
          var f = 0;
          return (
            v.slides.each(function (p, g) {
              f += e(g).outerWidth(!0);
            }),
            v.slidesWidth !== f ? ((v.slidesWidth = f), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var yy = u((OK, my) => {
    var Pt = Xe(),
      IV = Ar();
    Pt.define(
      "tabs",
      (my.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = Pt.env,
          s = a.safari,
          c = a(),
          h = "data-w-tab",
          I = "data-w-pane",
          d = ".w-tabs",
          T = "w--current",
          E = "w--tab-active",
          y = IV.triggers,
          O = !1;
        (t.ready = t.design = t.preview = C),
          (t.redraw = function () {
            (O = !0), C(), (O = !1);
          }),
          (t.destroy = function () {
            (i = n.find(d)), i.length && (i.each(S), R());
          });
        function C() {
          (o = c && Pt.env("design")),
            (i = n.find(d)),
            i.length &&
              (i.each(X), Pt.env("preview") && !O && i.each(S), R(), L());
        }
        function R() {
          Pt.redraw.off(t.redraw);
        }
        function L() {
          Pt.redraw.on(t.redraw);
        }
        function S(H, P) {
          var _ = e.data(P, d);
          _ &&
            (_.links && _.links.each(y.reset),
            _.panes && _.panes.each(y.reset));
        }
        function X(H, P) {
          var _ = d.substr(1) + "-" + H,
            D = e(P),
            x = e.data(P, d);
          if (
            (x || (x = e.data(P, d, { el: D, config: {} })),
            (x.current = null),
            (x.tabIdentifier = _ + "-" + h),
            (x.paneIdentifier = _ + "-" + I),
            (x.menu = D.children(".w-tab-menu")),
            (x.links = x.menu.children(".w-tab-link")),
            (x.content = D.children(".w-tab-content")),
            (x.panes = x.content.children(".w-tab-pane")),
            x.el.off(d),
            x.links.off(d),
            x.menu.attr("role", "tablist"),
            x.links.attr("tabindex", "-1"),
            M(x),
            !o)
          ) {
            x.links.on("click" + d, B(x)), x.links.on("keydown" + d, $(x));
            var U = x.links.filter("." + T),
              Q = U.attr(h);
            Q && J(x, { tab: Q, immediate: !0 });
          }
        }
        function M(H) {
          var P = {};
          P.easing = H.el.attr("data-easing") || "ease";
          var _ = parseInt(H.el.attr("data-duration-in"), 10);
          _ = P.intro = _ === _ ? _ : 0;
          var D = parseInt(H.el.attr("data-duration-out"), 10);
          (D = P.outro = D === D ? D : 0),
            (P.immediate = !_ && !D),
            (H.config = P);
        }
        function G(H) {
          var P = H.current;
          return Array.prototype.findIndex.call(
            H.links,
            (_) => _.getAttribute(h) === P,
            null
          );
        }
        function B(H) {
          return function (P) {
            P.preventDefault();
            var _ = P.currentTarget.getAttribute(h);
            _ && J(H, { tab: _ });
          };
        }
        function $(H) {
          return function (P) {
            var _ = G(H),
              D = P.key,
              x = {
                ArrowLeft: _ - 1,
                ArrowUp: _ - 1,
                ArrowRight: _ + 1,
                ArrowDown: _ + 1,
                End: H.links.length - 1,
                Home: 0,
              };
            if (D in x) {
              P.preventDefault();
              var U = x[D];
              U === -1 && (U = H.links.length - 1),
                U === H.links.length && (U = 0);
              var Q = H.links[U],
                ne = Q.getAttribute(h);
              ne && J(H, { tab: ne });
            }
          };
        }
        function J(H, P) {
          P = P || {};
          var _ = H.config,
            D = _.easing,
            x = P.tab;
          if (x !== H.current) {
            H.current = x;
            var U;
            H.links.each(function (p, g) {
              var k = e(g);
              if (P.immediate || _.immediate) {
                var K = H.panes[p];
                g.id || (g.id = H.tabIdentifier + "-" + p),
                  K.id || (K.id = H.paneIdentifier + "-" + p),
                  (g.href = "#" + K.id),
                  g.setAttribute("role", "tab"),
                  g.setAttribute("aria-controls", K.id),
                  g.setAttribute("aria-selected", "false"),
                  K.setAttribute("role", "tabpanel"),
                  K.setAttribute("aria-labelledby", g.id);
              }
              g.getAttribute(h) === x
                ? ((U = g),
                  k
                    .addClass(T)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(y.intro))
                : k.hasClass(T) &&
                  k
                    .removeClass(T)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(y.outro);
            });
            var Q = [],
              ne = [];
            H.panes.each(function (p, g) {
              var k = e(g);
              g.getAttribute(h) === x ? Q.push(g) : k.hasClass(E) && ne.push(g);
            });
            var W = e(Q),
              V = e(ne);
            if (P.immediate || _.immediate) {
              W.addClass(E).each(y.intro),
                V.removeClass(E),
                O || Pt.redraw.up();
              return;
            } else {
              var v = window.scrollX,
                f = window.scrollY;
              U.focus(), window.scrollTo(v, f);
            }
            V.length && _.outro
              ? (V.each(y.outro),
                r(V)
                  .add("opacity " + _.outro + "ms " + D, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => oe(_, V, W)))
              : oe(_, V, W);
          }
        }
        function oe(H, P, _) {
          if (
            (P.removeClass(E).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            _.addClass(E).each(y.intro),
            Pt.redraw.up(),
            !H.intro)
          )
            return r(_).set({ opacity: 1 });
          r(_)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + H.intro + "ms " + H.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Gs();
  Us();
  Vs();
  Hs();
  Ar();
  ty();
  ny();
  oy();
  sy();
  ly();
  py();
  hy();
  _y();
  yy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fade-in-on-scroll",
        originalId:
          "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fade-in-on-scroll",
          originalId:
            "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639044095607,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fade-in-move-on-scroll",
        originalId:
          "646b2cebfa006878138dc847|d153327e-0b89-53f6-8af6-bfb408d9df35",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fade-in-move-on-scroll",
          originalId:
            "646b2cebfa006878138dc847|d153327e-0b89-53f6-8af6-bfb408d9df35",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639044166707,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fade-in-slace-on-scroll",
        originalId:
          "646b2cebfa006878138dc847|b40307ba-5bc6-bd78-6e19-712b5713de87",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fade-in-slace-on-scroll",
          originalId:
            "646b2cebfa006878138dc847|b40307ba-5bc6-bd78-6e19-712b5713de87",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639044220804,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".fade-in-blur-on-scroll",
        originalId:
          "646b2cebfa006878138dc847|548a5b34-b2c2-5a0b-7e8c-aacb07ebb25f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".fade-in-blur-on-scroll",
          originalId:
            "646b2cebfa006878138dc847|548a5b34-b2c2-5a0b-7e8c-aacb07ebb25f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639044269084,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639044628729,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc846",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc846",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639404799008,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc844",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc844",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639405959723,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc845",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc845",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639405976045,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc840",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc840",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1639406178290,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-38",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer-link",
        originalId: "b743ab2e-4e76-33d8-5bab-3917c2bdaadc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-link",
          originalId: "b743ab2e-4e76-33d8-5bab-3917c2bdaadc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677521710588,
    },
    "e-38": {
      id: "e-38",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer-link",
        originalId: "b743ab2e-4e76-33d8-5bab-3917c2bdaadc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-link",
          originalId: "b743ab2e-4e76-33d8-5bab-3917c2bdaadc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677521710589,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-41",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".link-block-2.animation-03",
        originalId:
          "62e39d1f126f5823c2e4b5ce|8ed1b952-23ff-bc0f-8964-7935e1d755b9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link-block-2.animation-03",
          originalId:
            "62e39d1f126f5823c2e4b5ce|8ed1b952-23ff-bc0f-8964-7935e1d755b9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1638368629176,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-39",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".link-block-2.animation-03",
        originalId:
          "62e39d1f126f5823c2e4b5ce|8ed1b952-23ff-bc0f-8964-7935e1d755b9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link-block-2.animation-03",
          originalId:
            "62e39d1f126f5823c2e4b5ce|8ed1b952-23ff-bc0f-8964-7935e1d755b9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1638368629175,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-48",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".nav-link",
        originalId: "8c81de9a-363a-68ad-cc13-a5f80e4dce80",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-link",
          originalId: "8c81de9a-363a-68ad-cc13-a5f80e4dce80",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677540964128,
    },
    "e-48": {
      id: "e-48",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-47",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".nav-link",
        originalId: "8c81de9a-363a-68ad-cc13-a5f80e4dce80",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".nav-link",
          originalId: "8c81de9a-363a-68ad-cc13-a5f80e4dce80",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677540964128,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "eb050d0c-cd20-6fbc-5d31-0eaf0a144c87",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "eb050d0c-cd20-6fbc-5d31-0eaf0a144c87",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677580650773,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".social-media-link",
        originalId: "63e9f374-1b94-5da6-0e63-45a5ce638a75",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".social-media-link",
          originalId: "63e9f374-1b94-5da6-0e63-45a5ce638a75",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677605431884,
    },
    "e-56": {
      id: "e-56",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-55",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".social-media-link",
        originalId: "63e9f374-1b94-5da6-0e63-45a5ce638a75",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".social-media-link",
          originalId: "63e9f374-1b94-5da6-0e63-45a5ce638a75",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677605431885,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".link",
        originalId:
          "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459e3c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link",
          originalId:
            "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459e3c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677615805595,
    },
    "e-60": {
      id: "e-60",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-59",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".link",
        originalId:
          "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459e3c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link",
          originalId:
            "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459e3c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677615805595,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".link-with-line",
        originalId:
          "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459e42",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link-with-line",
          originalId:
            "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459e42",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677615979294,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-61",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".link-with-line",
        originalId:
          "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459e42",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".link-with-line",
          originalId:
            "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459e42",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677615979295,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc845|fb9d556f-919b-cc52-92b3-3faf5e9f10da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc845|fb9d556f-919b-cc52-92b3-3faf5e9f10da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677617332448,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc845|0fc88dd6-e4ea-dabd-73a5-e8d8be45e487",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc845|0fc88dd6-e4ea-dabd-73a5-e8d8be45e487",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677617399180,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc845|49c967ad-0e24-9825-80c1-68938cadab62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc845|49c967ad-0e24-9825-80c1-68938cadab62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677617943075,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-70",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc845|79e2c71e-3c8b-4849-7b25-eac217f47c05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc845|79e2c71e-3c8b-4849-7b25-eac217f47c05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677618030713,
    },
    "e-72": {
      id: "e-72",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-71",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc841",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc841",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677618406901,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".style-guide-empty-container",
        originalId:
          "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459d89",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".style-guide-empty-container",
          originalId:
            "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459d89",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677618625412,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459d83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459d83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677618649554,
    },
    "e-78": {
      id: "e-78",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-77",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc847",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc847",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677618657847,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459d53",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc847|38b8173a-6c33-0dcc-71f2-1b6aad459d53",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677618673036,
    },
    "e-83": {
      id: "e-83",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-84",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".section-background",
        originalId:
          "646b2cebfa006878138dc83d|6f05d71d-80da-ed92-fa64-de88dc3efe23",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".section-background",
          originalId:
            "646b2cebfa006878138dc83d|6f05d71d-80da-ed92-fa64-de88dc3efe23",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677622062406,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-86",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc846|b3bc168a-e127-399c-44f4-74e3f6ef9962",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc846|b3bc168a-e127-399c-44f4-74e3f6ef9962",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677622220059,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-88",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer-heading",
        originalId: "4f1ed82d-0a92-1f11-afa9-bc9cf80ba701",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer-heading",
          originalId: "4f1ed82d-0a92-1f11-afa9-bc9cf80ba701",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677622293726,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-90",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83d|8f0fe4c7-959e-fa8c-65c0-1b1ae63ef1c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d|8f0fe4c7-959e-fa8c-65c0-1b1ae63ef1c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684792851965,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".hero-cricle-bg",
        originalId:
          "646b2cebfa006878138dc83d|fea18232-cbba-f8ed-c4ec-e302bd26bda2",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".hero-cricle-bg",
          originalId:
            "646b2cebfa006878138dc83d|fea18232-cbba-f8ed-c4ec-e302bd26bda2",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684848143855,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "b5e15a8d-9712-11ba-e4bd-f4b401c9eda7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "b5e15a8d-9712-11ba-e4bd-f4b401c9eda7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684848357784,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_ACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slide",
        originalId:
          "646b2cebfa006878138dc83d|fd07d403-7f33-c814-93f0-753c1c03095c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slide",
          originalId:
            "646b2cebfa006878138dc83d|fd07d403-7f33-c814-93f0-753c1c03095c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1599737843517,
    },
    "e-96": {
      id: "e-96",
      name: "",
      animationType: "custom",
      eventTypeId: "SLIDER_INACTIVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-95",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".slide",
        originalId:
          "646b2cebfa006878138dc83d|fd07d403-7f33-c814-93f0-753c1c03095c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".slide",
          originalId:
            "646b2cebfa006878138dc83d|fd07d403-7f33-c814-93f0-753c1c03095c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1599737843531,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-26", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small"],
      target: {
        id: "646b2cebfa006878138dc83d|fb4bc833-1ed5-26d2-d6d8-631c2c09a611",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d|fb4bc833-1ed5-26d2-d6d8-631c2c09a611",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-26-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1684930055228,
    },
    "e-98": {
      id: "e-98",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-99",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83d|0188b585-01df-8cba-2869-3295ebe55f79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d|0188b585-01df-8cba-2869-3295ebe55f79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684930372694,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83d|0188b585-01df-8cba-2869-3295ebe55f79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d|0188b585-01df-8cba-2869-3295ebe55f79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684930372696,
    },
    "e-100": {
      id: "e-100",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-29", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "646b2cebfa006878138dc83d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-29-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-29-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1684930450246,
    },
    "e-102": {
      id: "e-102",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-101",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e0fe2720eefb44ece54a2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e0fe2720eefb44ece54a2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684934626720,
    },
    "e-104": {
      id: "e-104",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-103",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e1a13e515d1163d92ec6b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e1a13e515d1163d92ec6b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684937236047,
    },
    "e-110": {
      id: "e-110",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-29", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "646e1a13e515d1163d92ec6b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e1a13e515d1163d92ec6b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-29-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-29-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1684937236047,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-30", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e1a13e515d1163d92ec6b|af76c436-029f-9383-fd05-b7b4a0b8bbf8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e1a13e515d1163d92ec6b|af76c436-029f-9383-fd05-b7b4a0b8bbf8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-30-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1684937905560,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e1a13e515d1163d92ec6b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e1a13e515d1163d92ec6b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684945654386,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-115",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e0fe2720eefb44ece54a2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e0fe2720eefb44ece54a2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1684945779653,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470732c8fe92eec9c996503",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470732c8fe92eec9c996503",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685091116964,
    },
    "e-118": {
      id: "e-118",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-29", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6470732c8fe92eec9c996503",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470732c8fe92eec9c996503",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-29-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-29-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1685091116964,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-30", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470732c8fe92eec9c996503|af76c436-029f-9383-fd05-b7b4a0b8bbf8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470732c8fe92eec9c996503|af76c436-029f-9383-fd05-b7b4a0b8bbf8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-30-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1685091116964,
    },
    "e-120": {
      id: "e-120",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-121",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470732c8fe92eec9c996503",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470732c8fe92eec9c996503",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685091116964,
    },
    "e-124": {
      id: "e-124",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-125",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470732c8fe92eec9c996503|8622642c-9213-0bbe-3158-25821b752550",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470732c8fe92eec9c996503|8622642c-9213-0bbe-3158-25821b752550",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600252497277,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470732c8fe92eec9c996503|8622642c-9213-0bbe-3158-25821b752550",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470732c8fe92eec9c996503|8622642c-9213-0bbe-3158-25821b752550",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600252497294,
    },
    "e-126": {
      id: "e-126",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-127",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".team-link",
        originalId:
          "6470732c8fe92eec9c996503|8622642c-9213-0bbe-3158-25821b752550",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".team-link",
          originalId:
            "6470732c8fe92eec9c996503|8622642c-9213-0bbe-3158-25821b752550",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600253733608,
    },
    "e-130": {
      id: "e-130",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-131",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470732c8fe92eec9c996503|1c287cbb-a645-d992-0499-64c4868473dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470732c8fe92eec9c996503|1c287cbb-a645-d992-0499-64c4868473dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600252979540,
    },
    "e-132": {
      id: "e-132",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-133",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".job-position-link.fadein-into-view",
        originalId:
          "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".job-position-link.fadein-into-view",
          originalId:
            "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1599574864018,
    },
    "e-136": {
      id: "e-136",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-137",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".job-position-link",
        originalId:
          "6470732c8fe92eec9c996503|1c287cbb-a645-d992-0499-64c4868473de",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".job-position-link",
          originalId:
            "6470732c8fe92eec9c996503|1c287cbb-a645-d992-0499-64c4868473de",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685095315311,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".job-position-link",
        originalId:
          "6470732c8fe92eec9c996503|1c287cbb-a645-d992-0499-64c4868473de",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".job-position-link",
          originalId:
            "6470732c8fe92eec9c996503|1c287cbb-a645-d992-0499-64c4868473de",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685095315313,
    },
    "e-138": {
      id: "e-138",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-139",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".post-link",
        originalId:
          "646b279935a0d6f1b9c1cca5|26d29e72-2966-c052-f3fb-cf221fb4942f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".post-link",
          originalId:
            "646b279935a0d6f1b9c1cca5|26d29e72-2966-c052-f3fb-cf221fb4942f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1598968970419,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".post-link",
        originalId:
          "646b279935a0d6f1b9c1cca5|26d29e72-2966-c052-f3fb-cf221fb4942f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".post-link",
          originalId:
            "646b279935a0d6f1b9c1cca5|26d29e72-2966-c052-f3fb-cf221fb4942f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1598968970423,
    },
    "e-140": {
      id: "e-140",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-141",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".post-link",
        originalId:
          "646b279935a0d6f1b9c1ccb4|40ceb1a3-fc92-317c-6177-1cb98b6e0ebe",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".post-link",
          originalId:
            "646b279935a0d6f1b9c1ccb4|40ceb1a3-fc92-317c-6177-1cb98b6e0ebe",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1599572693563,
    },
    "e-142": {
      id: "e-142",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-143",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "9d538fde-143e-eaa1-2f31-632fd2dff925",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "9d538fde-143e-eaa1-2f31-632fd2dff925",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685104001041,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-144",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470a9b0b5326f5dbad9f452",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470a9b0b5326f5dbad9f452",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685105072746,
    },
    "e-146": {
      id: "e-146",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-29", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6470a9b0b5326f5dbad9f452",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470a9b0b5326f5dbad9f452",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-29-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-29-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 95,
          restingState: 50,
        },
      ],
      createdOn: 1685105072746,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-30", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470a9b0b5326f5dbad9f452|af76c436-029f-9383-fd05-b7b4a0b8bbf8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470a9b0b5326f5dbad9f452|af76c436-029f-9383-fd05-b7b4a0b8bbf8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-30-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1685105072746,
    },
    "e-148": {
      id: "e-148",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-149",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470a9b0b5326f5dbad9f452",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470a9b0b5326f5dbad9f452",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685105072746,
    },
    "e-150": {
      id: "e-150",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-44", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "6470a9b0b5326f5dbad9f452",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470a9b0b5326f5dbad9f452",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-44-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-44-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 90,
          restingState: 50,
        },
      ],
      createdOn: 1685106347959,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-152",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".social-icon-holder",
        originalId:
          "647080eee005606711f4648c|9e4d2a83-1b42-07af-d664-df46b6f10a02",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".social-icon-holder",
          originalId:
            "647080eee005606711f4648c|9e4d2a83-1b42-07af-d664-df46b6f10a02",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600261851677,
    },
    "e-152": {
      id: "e-152",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-151",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".social-icon-holder",
        originalId:
          "647080eee005606711f4648c|9e4d2a83-1b42-07af-d664-df46b6f10a02",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".social-icon-holder",
          originalId:
            "647080eee005606711f4648c|9e4d2a83-1b42-07af-d664-df46b6f10a02",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1600261851688,
    },
    "e-154": {
      id: "e-154",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-153",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647080eee005606711f4648c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647080eee005606711f4648c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685109406443,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-156",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647080eee005606711f4648c|9e4d2a83-1b42-07af-d664-df46b6f10a40",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647080eee005606711f4648c|9e4d2a83-1b42-07af-d664-df46b6f10a40",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685109516423,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-158",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647080eee005606711f4648c|fc8d0b28-af68-d5ad-42ed-b73f6513a564",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647080eee005606711f4648c|fc8d0b28-af68-d5ad-42ed-b73f6513a564",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685109527740,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-160",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647076ad4f90b915daff55ed|d47decdb-9adf-acc3-ed90-3777ad0fbba5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647076ad4f90b915daff55ed|d47decdb-9adf-acc3-ed90-3777ad0fbba5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685110289388,
    },
    "e-160": {
      id: "e-160",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-159",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647076ad4f90b915daff55ed|d47decdb-9adf-acc3-ed90-3777ad0fbba5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647076ad4f90b915daff55ed|d47decdb-9adf-acc3-ed90-3777ad0fbba5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685110289388,
    },
    "e-164": {
      id: "e-164",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-163",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647076ad4f90b915daff55ed",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647076ad4f90b915daff55ed",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685110347271,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".text-center",
        originalId:
          "647076ad4f90b915daff55ed|d47decdb-9adf-acc3-ed90-3777ad0fbb9b",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".text-center",
          originalId:
            "647076ad4f90b915daff55ed|d47decdb-9adf-acc3-ed90-3777ad0fbb9b",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685110364621,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-48",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".card-item.fadein-into-view",
        originalId:
          "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".card-item.fadein-into-view",
          originalId:
            "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1599574864018,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-170",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647076ad4f90b915daff55ed|41be5e0a-8d19-7612-2e24-365674faf3d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647076ad4f90b915daff55ed|41be5e0a-8d19-7612-2e24-365674faf3d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685110524570,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-40",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-172",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".card.team-social-media-card",
        originalId:
          "647076ad4f90b915daff55ed|ee18d7ba-2b1e-e367-c458-fde36fdf5008",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".card.team-social-media-card",
          originalId:
            "647076ad4f90b915daff55ed|ee18d7ba-2b1e-e367-c458-fde36fdf5008",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685110762801,
    },
    "e-172": {
      id: "e-172",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-171",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".card.team-social-media-card",
        originalId:
          "647076ad4f90b915daff55ed|ee18d7ba-2b1e-e367-c458-fde36fdf5008",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".card.team-social-media-card",
          originalId:
            "647076ad4f90b915daff55ed|ee18d7ba-2b1e-e367-c458-fde36fdf5008",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685110762802,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-174",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470732c8fe92eec9c996503",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470732c8fe92eec9c996503",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685131276206,
    },
    "e-176": {
      id: "e-176",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-30", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc841|7d854ce3-e171-f156-f7a3-9bae6599d1ba",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc841|7d854ce3-e171-f156-f7a3-9bae6599d1ba",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-30-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1685135261992,
    },
    "e-178": {
      id: "e-178",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-177",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc841",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc841",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685135730067,
    },
    "e-180": {
      id: "e-180",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-179",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685135910208,
    },
    "e-182": {
      id: "e-182",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-181",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e0fe2720eefb44ece54a2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e0fe2720eefb44ece54a2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685135934385,
    },
    "e-184": {
      id: "e-184",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-183",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e1a13e515d1163d92ec6b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e1a13e515d1163d92ec6b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685135965355,
    },
    "e-186": {
      id: "e-186",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-185",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6470a9b0b5326f5dbad9f452",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6470a9b0b5326f5dbad9f452",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685135986570,
    },
    "e-188": {
      id: "e-188",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-187",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc846",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc846",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685135998748,
    },
    "e-190": {
      id: "e-190",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-189",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc841",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc841",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136014148,
    },
    "e-192": {
      id: "e-192",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-191",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc847",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc847",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136038039,
    },
    "e-194": {
      id: "e-194",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-193",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc845",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc845",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136047846,
    },
    "e-196": {
      id: "e-196",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-195",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc844",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc844",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136056742,
    },
    "e-198": {
      id: "e-198",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-197",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc840",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc840",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136110365,
    },
    "e-200": {
      id: "e-200",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-199",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647080eee005606711f4648c",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647080eee005606711f4648c",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136130242,
    },
    "e-202": {
      id: "e-202",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-201",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "647076ad4f90b915daff55ed",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "647076ad4f90b915daff55ed",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136146673,
    },
    "e-204": {
      id: "e-204",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-203",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136158697,
    },
    "e-206": {
      id: "e-206",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-205",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685136175051,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "c69740f0-85fd-3be9-0eb9-3cdc217038eb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "c69740f0-85fd-3be9-0eb9-3cdc217038eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: true,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685272118351,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-210",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".instruction-item",
        originalId:
          "646b2cebfa006878138dc844|09026ba6-078c-dc73-1525-8042ca305a8c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".instruction-item",
          originalId:
            "646b2cebfa006878138dc844|09026ba6-078c-dc73-1525-8042ca305a8c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685273092860,
    },
    "e-211": {
      id: "e-211",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-212",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".license-box",
        originalId:
          "646b2cebfa006878138dc845|d567474e-1e2e-e661-5c15-d76d7a5f2756",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".license-box",
          originalId:
            "646b2cebfa006878138dc845|d567474e-1e2e-e661-5c15-d76d7a5f2756",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685273376169,
    },
    "e-214": {
      id: "e-214",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-213",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83e",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83e",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685273515159,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-216",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83e|61a78268b9eb307096471f54aN",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83e|61a78268b9eb307096471f54aN",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685273525916,
    },
    "e-218": {
      id: "e-218",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_FINISH",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-217",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83f",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83f",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685273550536,
    },
    "e-219": {
      id: "e-219",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-220",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83f|61b761dff10ed73a46351b61aN",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83f|61b761dff10ed73a46351b61aN",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685273556500,
    },
    "e-221": {
      id: "e-221",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-52", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["tiny"],
      target: {
        id: "646b2cebfa006878138dc83d|fb4bc833-1ed5-26d2-d6d8-631c2c09a611",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d|fb4bc833-1ed5-26d2-d6d8-631c2c09a611",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-52-p",
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1685274653484,
    },
    "e-222": {
      id: "e-222",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-53",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-223",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83d|242c4aaf-e096-86cf-4bff-8c7d12019000",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d|242c4aaf-e096-86cf-4bff-8c7d12019000",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685362841816,
    },
    "e-224": {
      id: "e-224",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-225",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83d|138b8082-1774-1f03-f73a-6e9a49284607",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d|138b8082-1774-1f03-f73a-6e9a49284607",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685363523786,
    },
    "e-226": {
      id: "e-226",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-227",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".card-side-content",
        originalId:
          "646b2cebfa006878138dc83d|138b8082-1774-1f03-f73a-6e9a4928460c",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".card-side-content",
          originalId:
            "646b2cebfa006878138dc83d|138b8082-1774-1f03-f73a-6e9a4928460c",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685363600103,
    },
    "e-228": {
      id: "e-228",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-229",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".grid-3-features",
        originalId:
          "646b2cebfa006878138dc83d|0cb8083c-acc7-4715-e9fd-8dcd94b0c8a9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".grid-3-features",
          originalId:
            "646b2cebfa006878138dc83d|0cb8083c-acc7-4715-e9fd-8dcd94b0c8a9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685363637499,
    },
    "e-230": {
      id: "e-230",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-53",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-231",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e1a13e515d1163d92ec6b|242c4aaf-e096-86cf-4bff-8c7d12019000",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e1a13e515d1163d92ec6b|242c4aaf-e096-86cf-4bff-8c7d12019000",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685363712423,
    },
    "e-232": {
      id: "e-232",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-233",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646e1a13e515d1163d92ec6b|138b8082-1774-1f03-f73a-6e9a49284607",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646e1a13e515d1163d92ec6b|138b8082-1774-1f03-f73a-6e9a49284607",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1685363744850,
    },
    "e-234": {
      id: "e-234",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-235",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "646b2cebfa006878138dc83d|2fc392f4-b92b-074a-ba3c-1da9da0c8181",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "646b2cebfa006878138dc83d|2fc392f4-b92b-074a-ba3c-1da9da0c8181",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1674658549392,
    },
  },
  actionLists: {
    "a-11": {
      id: "a-11",
      title: "â¬‡ï¸ Fade In On Scroll",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-11-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1639044101700,
    },
    "a-12": {
      id: "a-12",
      title: "â¬‡ï¸ Fade In & Move On Scroll",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-12-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                yValue: 25,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-12-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1639044101700,
    },
    "a-13": {
      id: "a-13",
      title: "â¬‡ï¸ Fade In & Slace On Scroll",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-13-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-13-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1639044101700,
    },
    "a-14": {
      id: "a-14",
      title: "â¬‡ï¸ Fade In & Blur On Scroll",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-14-n-5",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                filters: [
                  { type: "blur", filterId: "3278", value: 5, unit: "px" },
                ],
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-14-n-6",
              actionTypeId: "STYLE_FILTER",
              config: {
                delay: 100,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc847|48a7b1d3-b07a-497b-d5ee-44049694be04",
                },
                filters: [
                  { type: "blur", filterId: "3278", value: 0, unit: "px" },
                ],
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1639044101700,
    },
    "a-31": {
      id: "a-31",
      title: "â° HomePage Load - Done",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["e120672f-745f-faa1-71e7-c904666db13c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-31-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["4a438b8c-ed17-3d15-3a04-344330e31156"],
                },
                value: "flex",
              },
            },
            {
              id: "a-31-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-logo",
                  selectorGuids: ["c365a38a-7754-b98d-86c6-1dac398beeef"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-31-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-logo",
                  selectorGuids: ["c365a38a-7754-b98d-86c6-1dac398beeef"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["4a438b8c-ed17-3d15-3a04-344330e31156"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-bg",
                  selectorGuids: ["145c4d73-8ae1-ae5b-7953-72d5c03b2ee7"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-10",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                xValue: 27,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-31-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-12",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                xValue: 27,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-31-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-description",
                  selectorGuids: ["2fddf4f8-4744-f801-c1cd-594fb2bed33f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-buttons-holder",
                  selectorGuids: ["4077e26a-49d8-95e8-4166-c9574c45fb10"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".animation-section",
                  selectorGuids: ["c35d01bf-6744-a861-9722-a8a8b4489e9f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-circle-bg-holder",
                  selectorGuids: ["ec7493ff-7562-4395-ffc6-c0f0b36b6791"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-15",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                xValue: 0.6,
                yValue: 0.6,
                locked: true,
              },
            },
            {
              id: "a-31-n-16",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2500,
                target: {
                  selector: ".preloader-logo",
                  selectorGuids: ["c365a38a-7754-b98d-86c6-1dac398beeef"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-31-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2500,
                target: {
                  selector: ".preloader-logo",
                  selectorGuids: ["c365a38a-7754-b98d-86c6-1dac398beeef"],
                },
                yValue: -20,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2500,
                target: {
                  selector: ".preloader-bg",
                  selectorGuids: ["145c4d73-8ae1-ae5b-7953-72d5c03b2ee7"],
                },
                yValue: -60,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1500,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1700,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["4a438b8c-ed17-3d15-3a04-344330e31156"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-31-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2000,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-23",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 2000,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-31-n-24",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 2200,
                easing: "",
                duration: 0,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["4a438b8c-ed17-3d15-3a04-344330e31156"],
                },
                value: "none",
              },
            },
            {
              id: "a-31-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2200,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-31-n-26",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 2200,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-31-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2600,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-description",
                  selectorGuids: ["2fddf4f8-4744-f801-c1cd-594fb2bed33f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2600,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".animation-section",
                  selectorGuids: ["c35d01bf-6744-a861-9722-a8a8b4489e9f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2600,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".hero-circle-bg-holder",
                  selectorGuids: ["ec7493ff-7562-4395-ffc6-c0f0b36b6791"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2800,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-buttons-holder",
                  selectorGuids: ["4077e26a-49d8-95e8-4166-c9574c45fb10"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-31-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2800,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["e120672f-745f-faa1-71e7-c904666db13c"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1639392502342,
    },
    "a-16": {
      id: "a-16",
      title: "â° Page Load - Done",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["e120672f-745f-faa1-71e7-c904666db13c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-35",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-16-n-43",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-36",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["4a438b8c-ed17-3d15-3a04-344330e31156"],
                },
                value: "flex",
              },
            },
            {
              id: "a-16-n-39",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-logo",
                  selectorGuids: ["c365a38a-7754-b98d-86c6-1dac398beeef"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-16-n-42",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-logo",
                  selectorGuids: ["c365a38a-7754-b98d-86c6-1dac398beeef"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-45",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["4a438b8c-ed17-3d15-3a04-344330e31156"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-47",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-bg",
                  selectorGuids: ["145c4d73-8ae1-ae5b-7953-72d5c03b2ee7"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-49",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-50",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                xValue: 27,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-16-n-53",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-54",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                xValue: 27,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-16-n-58",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-description",
                  selectorGuids: ["2fddf4f8-4744-f801-c1cd-594fb2bed33f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-60",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-buttons-holder",
                  selectorGuids: ["4077e26a-49d8-95e8-4166-c9574c45fb10"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-62",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".on-page-load-1",
                  selectorGuids: ["09302f60-f432-8246-9db1-b2835cbefb32"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-64",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".on-page-load-2",
                  selectorGuids: ["24423813-5ab1-6ef1-2efa-fd8cc20b115d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-66",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".on-page-load-3",
                  selectorGuids: ["e748fa86-7bd0-b34c-f626-8bc0afb03833"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-38",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                xValue: 0.6,
                yValue: 0.6,
                locked: true,
              },
            },
            {
              id: "a-16-n-40",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2500,
                target: {
                  selector: ".preloader-logo",
                  selectorGuids: ["c365a38a-7754-b98d-86c6-1dac398beeef"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
            {
              id: "a-16-n-41",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2500,
                target: {
                  selector: ".preloader-logo",
                  selectorGuids: ["c365a38a-7754-b98d-86c6-1dac398beeef"],
                },
                yValue: -20,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-48",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 2500,
                target: {
                  selector: ".preloader-bg",
                  selectorGuids: ["145c4d73-8ae1-ae5b-7953-72d5c03b2ee7"],
                },
                yValue: -60,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-44",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1500,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-46",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1700,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["4a438b8c-ed17-3d15-3a04-344330e31156"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-16-n-51",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2000,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-52",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 2000,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-16-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2000,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["e120672f-745f-faa1-71e7-c904666db13c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-37",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 2200,
                easing: "",
                duration: 0,
                target: {
                  selector: ".preloader",
                  selectorGuids: ["4a438b8c-ed17-3d15-3a04-344330e31156"],
                },
                value: "none",
              },
            },
            {
              id: "a-16-n-55",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2200,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-16-n-56",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 2200,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-16-n-59",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2600,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-description",
                  selectorGuids: ["2fddf4f8-4744-f801-c1cd-594fb2bed33f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-61",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2800,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-buttons-holder",
                  selectorGuids: ["4077e26a-49d8-95e8-4166-c9574c45fb10"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-63",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2800,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".on-page-load-1",
                  selectorGuids: ["09302f60-f432-8246-9db1-b2835cbefb32"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-65",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3000,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".on-page-load-2",
                  selectorGuids: ["24423813-5ab1-6ef1-2efa-fd8cc20b115d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-16-n-67",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3200,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".on-page-load-3",
                  selectorGuids: ["e748fa86-7bd0-b34c-f626-8bc0afb03833"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1639392502342,
    },
    "a-47": {
      id: "a-47",
      title: "â° Page Load No Preload - Done",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-47-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["e120672f-745f-faa1-71e7-c904666db13c"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-47-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".preloader-circle-holder",
                  selectorGuids: ["e7c3f397-9e5e-a269-f214-6a57f70b7a48"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-47-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-47-n-10",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                xValue: 27,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-47-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-47-n-12",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                xValue: 27,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-47-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-description",
                  selectorGuids: ["2fddf4f8-4744-f801-c1cd-594fb2bed33f"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".hero-buttons-holder",
                  selectorGuids: ["4077e26a-49d8-95e8-4166-c9574c45fb10"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".on-page-load-1",
                  selectorGuids: ["09302f60-f432-8246-9db1-b2835cbefb32"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".on-page-load-2",
                  selectorGuids: ["24423813-5ab1-6ef1-2efa-fd8cc20b115d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-47-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".on-page-load-3",
                  selectorGuids: ["e748fa86-7bd0-b34c-f626-8bc0afb03833"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-47-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-47-n-25",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-1",
                  selectorGuids: ["6fa71e96-9a26-a7ac-eacf-9e91effddb64"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-47-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".navbar",
                  selectorGuids: ["e120672f-745f-faa1-71e7-c904666db13c"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-47-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-47-n-29",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 500,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-text-2",
                  selectorGuids: ["90ceaf72-2044-1e61-7527-31c8763b1270"],
                },
                xValue: 0,
                xUnit: "deg",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-47-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 700,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-description",
                  selectorGuids: ["2fddf4f8-4744-f801-c1cd-594fb2bed33f"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-47-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".hero-buttons-holder",
                  selectorGuids: ["4077e26a-49d8-95e8-4166-c9574c45fb10"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-47-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".on-page-load-1",
                  selectorGuids: ["09302f60-f432-8246-9db1-b2835cbefb32"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-47-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".on-page-load-2",
                  selectorGuids: ["24423813-5ab1-6ef1-2efa-fd8cc20b115d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-47-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1100,
                easing: "ease",
                duration: 700,
                target: {
                  selector: ".on-page-load-3",
                  selectorGuids: ["e748fa86-7bd0-b34c-f626-8bc0afb03833"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1639392502342,
    },
    a: {
      id: "a",
      title: "ðŸ‘† Link Underline -> Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-block-underline",
                  selectorGuids: ["e7362ff3-1cb5-d07c-af2e-df27fc2f3066"],
                },
                xValue: -101,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-block-underline",
                  selectorGuids: ["e7362ff3-1cb5-d07c-af2e-df27fc2f3066"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1638368632285,
    },
    "a-2": {
      id: "a-2",
      title: "ðŸ‘† Link Underline -> Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-block-underline",
                  selectorGuids: ["e7362ff3-1cb5-d07c-af2e-df27fc2f3066"],
                },
                xValue: 101,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-block-underline",
                  selectorGuids: ["e7362ff3-1cb5-d07c-af2e-df27fc2f3066"],
                },
                xValue: -101,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1638368632285,
    },
    "a-21": {
      id: "a-21",
      title: "Link Background - Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-background",
                  selectorGuids: ["f9c28adb-3f0f-f5a6-0fe1-cab226a9111d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-21-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-background",
                  selectorGuids: ["f9c28adb-3f0f-f5a6-0fe1-cab226a9111d"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-background",
                  selectorGuids: ["f9c28adb-3f0f-f5a6-0fe1-cab226a9111d"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-21-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-background",
                  selectorGuids: ["f9c28adb-3f0f-f5a6-0fe1-cab226a9111d"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1677540968975,
    },
    "a-22": {
      id: "a-22",
      title: "Link Background - Animation Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-background",
                  selectorGuids: ["f9c28adb-3f0f-f5a6-0fe1-cab226a9111d"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-22-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-background",
                  selectorGuids: ["f9c28adb-3f0f-f5a6-0fe1-cab226a9111d"],
                },
                xValue: 0.7,
                yValue: 0.7,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1677540968975,
    },
    "a-23": {
      id: "a-23",
      title: "Infinit Scroll Hero Circle",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|fea18232-cbba-f8ed-c4ec-e302bd26bda2",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 2000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|fea18232-cbba-f8ed-c4ec-e302bd26bda2",
                },
                zValue: 360,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-23-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|fea18232-cbba-f8ed-c4ec-e302bd26bda2",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1684848156857,
    },
    "a-24": {
      id: "a-24",
      title: "Feedback Slider Active",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|fd07d403-7f33-c814-93f0-753c1c03095c",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1599737847609,
    },
    "a-25": {
      id: "a-25",
      title: "Feedback Slider InActive",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|fd07d403-7f33-c814-93f0-753c1c03095c",
                },
                value: 0.5,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1599737847609,
    },
    "a-26": {
      id: "a-26",
      title: "Device Animation On Scroll",
      continuousParameterGroups: [
        {
          id: "a-26-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-26-n-7",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-icons-scale-holder",
                      selectorGuids: ["0a0d0b4d-b046-cb0b-d744-f308ca489876"],
                    },
                    xValue: 0.7,
                    yValue: 0.7,
                    locked: true,
                  },
                },
                {
                  id: "a-26-n-15",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-26-n-17",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-26-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-26-n-21",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    xValue: 30,
                    xUnit: "deg",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-26-n-9",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-26-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 24,
              actionItems: [
                {
                  id: "a-26-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-26-n-22",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    xValue: 0,
                    xUnit: "deg",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 43,
              actionItems: [
                {
                  id: "a-26-n-5",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-26-n-13",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    xValue: 1.2,
                    yValue: 1.2,
                    locked: true,
                  },
                },
                {
                  id: "a-26-n-19",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".device",
                      selectorGuids: ["b9fe104e-8801-b91c-205e-f004865f8ef0"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: "a-26-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-26-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-26-n-8",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-icons-scale-holder",
                      selectorGuids: ["0a0d0b4d-b046-cb0b-d744-f308ca489876"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 47,
              actionItems: [
                {
                  id: "a-26-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-26-n-14",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-26-n-16",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    xValue: 1.3,
                    yValue: 1.3,
                    locked: true,
                  },
                },
                {
                  id: "a-26-n-18",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-26-n-20",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".device",
                      selectorGuids: ["b9fe104e-8801-b91c-205e-f004865f8ef0"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-26-n-23",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    xValue: 1.3,
                    yValue: 1.3,
                    locked: true,
                  },
                },
                {
                  id: "a-26-n-24",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1684930059830,
    },
    "a-27": {
      id: "a-27",
      title: "Play Icon Zoom",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".play-icon-image",
                  selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fd0"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".play-icon-image",
                  selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fd0"],
                },
                xValue: 1.2,
                yValue: 1.2,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1684930375929,
    },
    "a-28": {
      id: "a-28",
      title: "Play Icon Zoom Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".play-icon-image",
                  selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fd0"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1684930375929,
    },
    "a-29": {
      id: "a-29",
      title: "Play Circle Move With Mouse",
      continuousParameterGroups: [
        {
          id: "a-29-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-29-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    xValue: -20,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-29-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    xValue: 20,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-29-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-29-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-29-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    yValue: 20,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1684930458529,
    },
    "a-30": {
      id: "a-30",
      title: "Features Hero Image Move",
      continuousParameterGroups: [
        {
          id: "a-30-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-30-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".features-hero-image",
                      selectorGuids: ["da89fa2d-79fe-a606-b4be-a3a99af3f126"],
                    },
                    yValue: 20,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-30-n-3",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".secondary-hero-gradient",
                      selectorGuids: ["ed6aabcf-0bf9-8b1b-5ab6-bc72e9c1f713"],
                    },
                    widthValue: 60,
                    heightValue: 60,
                    widthUnit: "%",
                    heightUnit: "%",
                    locked: false,
                  },
                },
                {
                  id: "a-30-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".secondary-hero-gradient",
                      selectorGuids: ["ed6aabcf-0bf9-8b1b-5ab6-bc72e9c1f713"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-30-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".features-image-gradient",
                      selectorGuids: ["460e1e9c-59f6-466d-7016-cda99111787c"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: "a-30-n-4",
                  actionTypeId: "STYLE_SIZE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".secondary-hero-gradient",
                      selectorGuids: ["ed6aabcf-0bf9-8b1b-5ab6-bc72e9c1f713"],
                    },
                    widthValue: 100,
                    heightValue: 60,
                    widthUnit: "%",
                    heightUnit: "%",
                    locked: false,
                  },
                },
                {
                  id: "a-30-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".secondary-hero-gradient",
                      selectorGuids: ["ed6aabcf-0bf9-8b1b-5ab6-bc72e9c1f713"],
                    },
                    yValue: -30,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 35,
              actionItems: [
                {
                  id: "a-30-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".features-hero-image",
                      selectorGuids: ["da89fa2d-79fe-a606-b4be-a3a99af3f126"],
                    },
                    yValue: 3,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: "a-30-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".features-image-gradient",
                      selectorGuids: ["460e1e9c-59f6-466d-7016-cda99111787c"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-30-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".features-hero-image",
                      selectorGuids: ["da89fa2d-79fe-a606-b4be-a3a99af3f126"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1684937915964,
    },
    "a-32": {
      id: "a-32",
      title: "Secondary Hero Gradient Load",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".secondary-hero-image-holder",
                  selectorGuids: ["ffb53372-932e-93f4-556a-19b110f87af4"],
                },
                yValue: 10,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".secondary-hero-image-holder",
                  selectorGuids: ["ffb53372-932e-93f4-556a-19b110f87af4"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-32-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2500,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".secondary-hero-image-holder",
                  selectorGuids: ["ffb53372-932e-93f4-556a-19b110f87af4"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-32-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2500,
                easing: "ease",
                duration: 1000,
                target: {
                  selector: ".secondary-hero-image-holder",
                  selectorGuids: ["ffb53372-932e-93f4-556a-19b110f87af4"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1684945605870,
    },
    "a-33": {
      id: "a-33",
      title: "Load Price Section On Pricing Page",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "646e0fe2720eefb44ece54a2|8525ffff-f873-120c-8c16-1e8181b0793c",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "646e0fe2720eefb44ece54a2|8525ffff-f873-120c-8c16-1e8181b0793c",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2500,
                easing: "ease",
                duration: 1000,
                target: {
                  id: "646e0fe2720eefb44ece54a2|8525ffff-f873-120c-8c16-1e8181b0793c",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-33-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2500,
                easing: "ease",
                duration: 1000,
                target: {
                  id: "646e0fe2720eefb44ece54a2|8525ffff-f873-120c-8c16-1e8181b0793c",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1684945786101,
    },
    "a-35": {
      id: "a-35",
      title: "Team Member On Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["81d93cc4-3463-f2ba-0b8f-a86330c2f4b7"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["81d93cc4-3463-f2ba-0b8f-a86330c2f4b7"],
                },
                xValue: 0.95,
                yValue: 0.95,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1600252502696,
    },
    "a-36": {
      id: "a-36",
      title: "Team Member On Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".team-image",
                  selectorGuids: ["81d93cc4-3463-f2ba-0b8f-a86330c2f4b7"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1600252502696,
    },
    "a-37": {
      id: "a-37",
      title: "Fade In Slow - On Scroll into VIew",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1cc9d|e74ed22c-3155-00fa-e7e3-df8b5875d506",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-37-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1500,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1cc9d|e74ed22c-3155-00fa-e7e3-df8b5875d506",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1599490304692,
    },
    "a-38": {
      id: "a-38",
      title: "Fade Move In Element On Scroll into View",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1cc9d|7cfc0610-17c8-cfb3-1dab-3d44d138f306",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-38-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1cc9d|7cfc0610-17c8-cfb3-1dab-3d44d138f306",
                },
                yValue: 20,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1200,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1cc9d|7cfc0610-17c8-cfb3-1dab-3d44d138f306",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-38-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1cc9d|7cfc0610-17c8-cfb3-1dab-3d44d138f306",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1599490134104,
    },
    "a-39": {
      id: "a-39",
      title: "Scale Fade Element on Scroll into view",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
                },
                xValue: 0.85,
                yValue: 0.85,
                locked: true,
              },
            },
            {
              id: "a-39-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-39-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 650,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-39-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 650,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1599574871245,
    },
    "a-40": {
      id: "a-40",
      title: "Display Card Colored Bg On Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-40-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-colored-bg",
                  selectorGuids: ["b493d3f6-3522-c8fa-8ecb-72cd33a93c41"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-40-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-colored-bg",
                  selectorGuids: ["b493d3f6-3522-c8fa-8ecb-72cd33a93c41"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1685095352211,
    },
    "a-41": {
      id: "a-41",
      title: "Hide Card Colored Bg On Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-colored-bg",
                  selectorGuids: ["b493d3f6-3522-c8fa-8ecb-72cd33a93c41"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1685095352211,
    },
    "a-42": {
      id: "a-42",
      title: "Post Item Animate On Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-item-overlay",
                  selectorGuids: ["6e90badf-4241-2f4b-fccb-a3b4a159ae07"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-42-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-item-overlay",
                  selectorGuids: ["6e90badf-4241-2f4b-fccb-a3b4a159ae07"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1598968973228,
    },
    "a-43": {
      id: "a-43",
      title: "Post Item Animate On Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-item-overlay",
                  selectorGuids: ["6e90badf-4241-2f4b-fccb-a3b4a159ae07"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1598968973228,
    },
    "a-44": {
      id: "a-44",
      title: "Insights Persons Follow Mouse",
      continuousParameterGroups: [
        {
          id: "a-44-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-44-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-person-holder",
                      selectorGuids: ["03d6bbd9-7e0f-9b19-f3e9-ec2a75588ff4"],
                    },
                    xValue: -4,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-44-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-person-holder",
                      selectorGuids: ["03d6bbd9-7e0f-9b19-f3e9-ec2a75588ff4"],
                    },
                    yValue: -4,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-44-n-9",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-persons-gradient",
                      selectorGuids: ["b0329367-6f8b-69bb-fa7d-14ae5c0a233a"],
                    },
                    xValue: -20,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-44-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-person-holder",
                      selectorGuids: ["03d6bbd9-7e0f-9b19-f3e9-ec2a75588ff4"],
                    },
                    xValue: 4,
                    xUnit: "px",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-44-n-6",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-person-holder",
                      selectorGuids: ["03d6bbd9-7e0f-9b19-f3e9-ec2a75588ff4"],
                    },
                    yValue: 4,
                    xUnit: "DEG",
                    yUnit: "deg",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-44-n-10",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-persons-gradient",
                      selectorGuids: ["b0329367-6f8b-69bb-fa7d-14ae5c0a233a"],
                    },
                    xValue: 0,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-44-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-44-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-person-holder",
                      selectorGuids: ["03d6bbd9-7e0f-9b19-f3e9-ec2a75588ff4"],
                    },
                    yValue: -2,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-44-n-7",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-person-holder",
                      selectorGuids: ["03d6bbd9-7e0f-9b19-f3e9-ec2a75588ff4"],
                    },
                    xValue: -3,
                    xUnit: "deg",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-44-n-11",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-persons-gradient",
                      selectorGuids: ["b0329367-6f8b-69bb-fa7d-14ae5c0a233a"],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-44-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-person-holder",
                      selectorGuids: ["03d6bbd9-7e0f-9b19-f3e9-ec2a75588ff4"],
                    },
                    yValue: 2,
                    xUnit: "PX",
                    yUnit: "px",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-44-n-8",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-person-holder",
                      selectorGuids: ["03d6bbd9-7e0f-9b19-f3e9-ec2a75588ff4"],
                    },
                    xValue: 3,
                    xUnit: "deg",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-44-n-12",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      selector: ".insights-persons-gradient",
                      selectorGuids: ["b0329367-6f8b-69bb-fa7d-14ae5c0a233a"],
                    },
                    yValue: 10,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1685106351395,
    },
    "a-45": {
      id: "a-45",
      title: "Display Gradient Social Icon",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".social-icon-background",
                  selectorGuids: ["022894b5-1e51-9135-90af-b5d1c95d5824"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-45-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".social-icon-background",
                  selectorGuids: ["022894b5-1e51-9135-90af-b5d1c95d5824"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1600261854577,
    },
    "a-46": {
      id: "a-46",
      title: "Hide Gradient Social Icon",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-46-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".social-icon-background",
                  selectorGuids: ["022894b5-1e51-9135-90af-b5d1c95d5824"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1600261854577,
    },
    "a-48": {
      id: "a-48",
      title: "Scale Fade Element on Scroll into view 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-48-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
                },
                xValue: 0.85,
                yValue: 0.85,
                locked: true,
              },
            },
            {
              id: "a-48-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-48-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 650,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-48-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 650,
                target: {
                  useEventTarget: true,
                  id: "646b279935a0d6f1b9c1ccb4|14ae29cc-e7dd-a4e2-3c1f-2fee22136637",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1599574871245,
    },
    "a-50": {
      id: "a-50",
      title: "Footer Name Infinit",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-50-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".footer-name._1",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "aa6430d7-2f97-07c2-7673-329292953360",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".footer-name._2",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "64a38a26-6a56-b560-c7ef-513dffbe3058",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".footer-name._3",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "1fd26409-dbad-919f-6516-b513bf307be5",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-50-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._1",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "aa6430d7-2f97-07c2-7673-329292953360",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._2",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "64a38a26-6a56-b560-c7ef-513dffbe3058",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._3",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "1fd26409-dbad-919f-6516-b513bf307be5",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-50-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._1",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "aa6430d7-2f97-07c2-7673-329292953360",
                  ],
                },
                xValue: 200,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._3",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "1fd26409-dbad-919f-6516-b513bf307be5",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._2",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "64a38a26-6a56-b560-c7ef-513dffbe3058",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-50-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._1",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "aa6430d7-2f97-07c2-7673-329292953360",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._2",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "64a38a26-6a56-b560-c7ef-513dffbe3058",
                  ],
                },
                xValue: -200,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._3",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "1fd26409-dbad-919f-6516-b513bf307be5",
                  ],
                },
                xValue: -200,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-50-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._1",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "aa6430d7-2f97-07c2-7673-329292953360",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._2",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "64a38a26-6a56-b560-c7ef-513dffbe3058",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._3",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "1fd26409-dbad-919f-6516-b513bf307be5",
                  ],
                },
                xValue: -200,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-50-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._1",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "aa6430d7-2f97-07c2-7673-329292953360",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._2",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "64a38a26-6a56-b560-c7ef-513dffbe3058",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 15000,
                target: {
                  selector: ".footer-name._3",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "1fd26409-dbad-919f-6516-b513bf307be5",
                  ],
                },
                xValue: -300,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-50-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._1",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "aa6430d7-2f97-07c2-7673-329292953360",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._2",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "64a38a26-6a56-b560-c7ef-513dffbe3058",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-50-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".footer-name._3",
                  selectorGuids: [
                    "4a98098f-5ee3-afbf-4f65-049e9905b11d",
                    "1fd26409-dbad-919f-6516-b513bf307be5",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1685131278948,
    },
    "a-51": {
      id: "a-51",
      title: "Infinit Scroll Footer Circle",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-51-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|fea18232-cbba-f8ed-c4ec-e302bd26bda2",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-51-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 5000,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|fea18232-cbba-f8ed-c4ec-e302bd26bda2",
                },
                zValue: 360,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-51-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|fea18232-cbba-f8ed-c4ec-e302bd26bda2",
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1684848156857,
    },
    "a-52": {
      id: "a-52",
      title: "Mobile - Device Animation On Scroll",
      continuousParameterGroups: [
        {
          id: "a-52-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-52-n",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-icons-scale-holder",
                      selectorGuids: ["0a0d0b4d-b046-cb0b-d744-f308ca489876"],
                    },
                    xValue: 0.4,
                    yValue: 0.4,
                    locked: true,
                  },
                },
                {
                  id: "a-52-n-2",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-52-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 5,
              actionItems: [
                {
                  id: "a-52-n-4",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-52-n-5",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    xValue: 30,
                    xUnit: "deg",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-52-n-6",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-52-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    yValue: -20,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 24,
              actionItems: [
                {
                  id: "a-52-n-8",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-52-n-9",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    xValue: 0,
                    xUnit: "deg",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
              ],
            },
            {
              keyframe: 43,
              actionItems: [
                {
                  id: "a-52-n-10",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
                {
                  id: "a-52-n-11",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    xValue: 1.2,
                    yValue: 1.2,
                    locked: true,
                  },
                },
                {
                  id: "a-52-n-12",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".device",
                      selectorGuids: ["b9fe104e-8801-b91c-205e-f004865f8ef0"],
                    },
                    value: 0,
                    unit: "",
                  },
                },
              ],
            },
            {
              keyframe: 45,
              actionItems: [
                {
                  id: "a-52-n-13",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
                {
                  id: "a-52-n-14",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".dashboard-app-perspective",
                      selectorGuids: ["f655315e-8854-7ec4-b563-3777f6d2994f"],
                    },
                    yValue: 0,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-52-n-15",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".anim-icons-scale-holder",
                      selectorGuids: ["0a0d0b4d-b046-cb0b-d744-f308ca489876"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 47,
              actionItems: [
                {
                  id: "a-52-n-16",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
                {
                  id: "a-52-n-17",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".play-icon-holder",
                      selectorGuids: ["f5981bd0-9734-d2d6-a106-26a1f31b3fcf"],
                    },
                    xValue: 1,
                    yValue: 1,
                    locked: true,
                  },
                },
              ],
            },
            {
              keyframe: 60,
              actionItems: [
                {
                  id: "a-52-n-18",
                  actionTypeId: "TRANSFORM_SCALE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    xValue: 1.3,
                    yValue: 1.3,
                    locked: true,
                  },
                },
                {
                  id: "a-52-n-19",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".main-hero-bg",
                      selectorGuids: ["d630e774-2d1f-8e97-56d7-caae16b1a1fd"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-52-n-20",
                  actionTypeId: "STYLE_OPACITY",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".device",
                      selectorGuids: ["b9fe104e-8801-b91c-205e-f004865f8ef0"],
                    },
                    value: 1,
                    unit: "",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1684930059830,
    },
    "a-53": {
      id: "a-53",
      title: "Display iPhone On Scroll",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-53-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-image-iphone",
                  selectorGuids: ["519242a8-b001-0432-c0c0-4cbb4f7d6e11"],
                },
                yValue: 60,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-53-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-image-iphone",
                  selectorGuids: ["519242a8-b001-0432-c0c0-4cbb4f7d6e11"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-53-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-image-iphone",
                  selectorGuids: ["519242a8-b001-0432-c0c0-4cbb4f7d6e11"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-53-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-image-iphone",
                  selectorGuids: ["519242a8-b001-0432-c0c0-4cbb4f7d6e11"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1685362844197,
    },
    "a-54": {
      id: "a-54",
      title: "Display Mac On Scroll",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-54-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-image-mac",
                  selectorGuids: ["1b68f798-6cd9-56f8-7914-4ac99c145d15"],
                },
                xValue: 100,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-54-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-image-mac",
                  selectorGuids: ["1b68f798-6cd9-56f8-7914-4ac99c145d15"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-54-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-image-mac",
                  selectorGuids: ["1b68f798-6cd9-56f8-7914-4ac99c145d15"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-54-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "ease",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".card-image-mac",
                  selectorGuids: ["1b68f798-6cd9-56f8-7914-4ac99c145d15"],
                },
                xValue: 0,
                yValue: null,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1685362844197,
    },
    "a-55": {
      id: "a-55",
      title: "Buy This Template - Fade In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-55-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|2fc392f4-b92b-074a-ba3c-1da9da0c8181",
                },
                xValue: null,
                yValue: 20,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|2fc392f4-b92b-074a-ba3c-1da9da0c8181",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-55-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 3000,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|2fc392f4-b92b-074a-ba3c-1da9da0c8181",
                },
                xValue: null,
                yValue: 0,
                xUnit: "px",
                yUnit: "px",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3000,
                easing: "ease",
                duration: 700,
                target: {
                  useEventTarget: true,
                  id: "646b2cebfa006878138dc83d|2fc392f4-b92b-074a-ba3c-1da9da0c8181",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1674658552143,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
