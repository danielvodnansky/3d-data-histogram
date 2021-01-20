(function (t) {
    function e(e) {
        for (var i, o, s = e[0], l = e[1], c = e[2], d = 0, p = []; d < s.length; d++) o = s[d], a[o] && p.push(a[o][0]), a[o] = 0;
        for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
        u && u(e);
        while (p.length) p.shift()();
        return r.push.apply(r, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], i = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== a[l] && (i = !1)
            }
            i && (r.splice(e--, 1), t = o(o.s = n[0]))
        }
        return t
    }

    var i = {}, a = {app: 0}, r = [];

    function o(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {i: e, l: !1, exports: {}};
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }

    o.m = t, o.c = i, o.d = function (t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
    }, o.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) o.d(n, i, function (e) {
            return t[e]
        }.bind(null, i));
        return n
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [], l = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var c = 0; c < s.length; c++) e(s[c]);
    var u = l;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("1d50")
    }, "1d50": function (t, e, n) {
        "use strict";
        n.r(e);
        n("9e45"), n("5cdb"), n("e4e8"), n("34ee"), n("d970"), n("f510"), n("225b"), n("e630"), n("d0e9");
        var i = function () {
            return {
                rdbs: {
                    on: !1,
                    name: "RDBS",
                    title: "relational database",
                    hierMin: 0,
                    hierMax: 1,
                    entMin: .9,
                    entMax: 1,
                    strucMin: .9,
                    strucMax: 1,
                    color: "rgba(112, 112, 255, 0.4)",
                    titleRotate: 0
                },
                xml: {
                    on: !1,
                    name: "XML",
                    title: "XML",
                    hierMin: .9,
                    hierMax: 1,
                    entMin: 0,
                    entMax: 1,
                    strucMin: 0,
                    strucMax: 1,
                    color: "rgba(112, 255, 112, 0.4)",
                    titleRotate: 90
                },
                json: {
                    on: !1,
                    name: "JSON",
                    title: "JSON",
                    hierMin: .9,
                    hierMax: 1,
                    entMin: 0,
                    entMax: 1,
                    strucMin: .9,
                    strucMax: 1,
                    color: "rgba(255, 112, 112, 0.4)",
                    titleRotate: 90
                },
                rdf: {
                    on: !1,
                    name: "RDF",
                    title: "RDF",
                    hierMin: 0,
                    hierMax: 1,
                    entMin: 0,
                    entMax: 1,
                    strucMin: .9,
                    strucMax: 1,
                    color: "rgba(255, 255, 112, 0.4)",
                    titleRotate: 0
                },
                unstruc: {
                    on: !1,
                    name: "unstructured",
                    title: "unstructured formats",
                    hierMin: .9,
                    hierMax: 1,
                    entMin: 0,
                    entMax: 1,
                    strucMin: 0,
                    strucMax: .1,
                    color: "rgba(112, 255, 225, 0.4)",
                    titleRotate: 90
                }
            }
        };
        Vue.component("rotation-axis-x", {
            data: function () {
                return {value: null}
            },
            template: '<div class="input-group col-sm-12 col-md-4 mb-3" id="rotation-axis-x">\n                <div class="input-group-prepend">\n                    <div class="input-group-text">X</div>\n                </div>\n                <input type="number" min="-180" max="180" name="axisXtext" data-axis=\'x\'\n                       class="form-control" v-model="value"/>\n                <input type="range" min="-180" max="180" name="value" data-axis=\'x\' value="-20" class="custom-range"\n                       v-model="value"/>\n            </div>',
            watch: {
                value: function (t) {
                    this.$emit("change", t)
                }
            },
            created: function () {
                this.value = -20
            }
        }), Vue.component("rotation-axis-y", {
            data: function () {
                return {value: null}
            },
            template: '<div class="input-group col-sm-12 col-md-4 mb-3" id="rotation-axis-y">\n                <div class="input-group-prepend">\n                    <div class="input-group-text">Y</div>\n                </div>\n                <input type="number" min="-180" max="180" name="axisYtext" data-axis=\'y\'\n                       class="form-control" v-model="value"/>\n                <input type="range" min="-180" max="180" name="axisY" data-axis=\'y\' class="custom-range"\n                       v-model="value"/>\n            </div>',
            watch: {
                value: function (t) {
                    this.$emit("change", t)
                }
            },
            created: function () {
                this.value = -40
            }
        }), Vue.component("rotation-axis-z", {
            data: function () {
                return {value: null}
            },
            template: '<div class="input-group col-sm-12 col-md-4 mb-3" id="rotation-axis-z">\n                <div class="input-group-prepend">\n                    <div class="input-group-text">Z</div>\n                </div>\n                <input type="number" min="-180" max="180" name="axisZtext" data-axis=\'z\'\n                       class="form-control" v-model="value"/>\n                <input type="range" min="-180" max="180" name="value" data-axis=\'z\' class="custom-range" v-model="value"/>\n            </div>',
            watch: {
                value: function (t) {
                    this.$emit("change", t)
                }
            },
            created: function () {
                this.value = 0
            }
        }), Vue.component("perspective", {
            data: function () {
                return {value: null}
            },
            template: '<div class="input-group col-sm-12 col-md-4 mb-3" id="perspective">\n                <div class="input-group-prepend">\n                    <div class="input-group-text">Perspective</div>\n                </div>\n                <input type="number" min="200" max="2500" name="perspective" data-css-change=\'.cont\' data-unit=\'px\'\n                       data-property=\'perspective\' class="form-control" v-model="value"/>\n                <input type="range" min="200" max="2500" name="perspectiveText" data-css-change=\'.cont\' data-unit=\'px\'\n                       data-property=\'perspective\' class="custom-range" v-model="value"/>\n            </div>',
            watch: {
                value: function (t) {
                    this.$emit("change", t)
                }
            },
            created: function () {
                this.value = 2500
            }
        }), Vue.component("zoom", {
            data: function () {
                return {value: null}
            },
            template: '\n            <div class="input-group col-sm-12 col-md-4 mb-3" id="zoom">\n                <div class="input-group-prepend">\n                    <div class="input-group-text">Zoom</div>\n                </div>\n                <input type="number" min="0" max="3" step="0.001" name="zoom" data-zoom=\'.cont\'\n                       class="form-control" v-model="value"/>\n                <input type="range" min="0" max="3" step="0.001" name="zoomText" data-zoom=\'.cont\'\n                       class="custom-range" v-model="value"/>\n            </div>',
            watch: {
                value: function (t) {
                    this.$emit("change", t)
                }
            },
            created: function () {
                this.value = 1.5
            }
        }), Vue.component("intervals", {
            data: function () {
                return {value: null, on: !0}
            },
            template: '\n            <div class="input-group col-sm-12 col-md-4 mb-3" id="intervals">\n                <div class="input-group-prepend">\n                    <div class="input-group-text">\n                        <input type="checkbox" class="d-none form-check-input" aria-label="Intervals" name="intervals" checked v-model="on">\n                        Intervals\n                    </div>\n                </div>\n                <input type="number" class="form-control" aria-label="..." min="5" max="100" name="interval" v-model="value" :disabled="!on">\n                <input type="range" min="5" max="100" step="5" name="intervalText" data-zoom=\'.cont\'\n                       class="custom-range" v-model="value" :disabled="!on"/>\n            </div>',
            watch: {
                value: function (t) {
                    this.$emit("change", this.on ? t : null)
                }
            },
            created: function () {
                this.value = 10
            }
        }), Vue.component("cube", {
            props: ["axisX", "axisY", "axisZ", "perspective", "zoom", "intervals", "objects", "structures"],
            template: '\n        <section class="cont" v-bind:style="{ transform: \'scale(\' + zoom + \')\', perspective: perspective + \'px\' }">\n            <div id="cube" v-bind:style="{ transform: \'rotateX(\' + axisX + \'deg) rotateY(\' + axisY + \'deg) rotateZ(\' + axisZ + \'deg)\' }">\n                <figure class="front">\n                    <div class="graph-background"></div>\n                </figure>\n                <figure class="back">\n                    <div class="graph-background grid">\n                        <span class="axis-label">1&emsp;amount of information&emsp;0</span>\n                    </div>\n                    \x3c!--<img src="img/3dgrafEntr.png" alt="entropy" draggable="false" class="graph-background"/>--\x3e\n                    <div class="background back-background"></div>\n                </figure>\n                <div class="cover back-cover"></div>\n                <figure class="right">\n                    <div class="graph-background"></div>\n                </figure>\n                <figure class="left">\n                    <div class="graph-background grid">\n                        <span class="axis-label">1&ensp;amount of structuredness&ensp;0</span>\n                    </div>\n                    \x3c!--<img src="img/3dgrafStruk.png" alt="entropy" draggable="false" class="graph-background"/>--\x3e\n                    <div class="background left-background"></div>\n                </figure>\n                <div class="cover left-cover"></div>\n                <figure class="top">\n                    <div class="graph-background"></div>\n                </figure>\n                <figure class="bottom">\n                    <div class="graph-background grid">\n                        <span class="axis-label">0&ensp;amount of hierarchicallity&ensp;1</span>\n                    </div>\n                    \x3c!--<img src="img/3dgrafHie.png" alt="entropy" draggable="false" class="graph-background"/>--\x3e\n                    <div class="background bottom-background"></div>\n                </figure>\n                <div class="cover bottom-cover"></div>\n                <cube-data v-bind:objects="objects" v-bind:structures="structures" v-bind:intervals="intervals"></cube-data>\n            </div>\n        </section>\n    '
        }), Vue.component("cube-data", {
            props: ["structures", "objects", "intervals"],
            data: function () {
                return {intervalLargestSize: null}
            },
            template: '\n    <div>\n        <div id="cube-data">\n            <div v-for="(structure, index) in structures">\n                <transition name="fade">\n                    <block v-if="structure.on" v-bind:id="\'structure_\' + index" v-bind:title="structure.title"\n                    v-bind:x="200*structure.hierMin" v-bind:y="200*structure.entMin" v-bind:z="200*structure.strucMin"\n                    v-bind:width="200*(structure.hierMax-structure.hierMin)" \n                    v-bind:height="200*(structure.entMax-structure.entMin)" \n                    v-bind:length="200*(structure.strucMax-structure.strucMin)"\n                    v-bind:color="structure.color" v-bind:titleRotate="structure.titleRotate"\n                    v-bind:label="structure.title"></block>\n                </transition>\n                </div>\n            </div>\n            <div v-if="intervals" id="cube-data-intervals">\n                <block v-for="(object, index) in intervalBlocks" v-bind:id="\'area_\' + index" \n                v-bind:title="\'h: \' + (object.hierStep/200).toFixed(3) + \', i: \' + (object.entStep/200).toFixed(3) + \', s: \' + (object.strucStep/200).toFixed(3) + \', size: \' + object.size"\n                v-bind:x="object.hierStep" v-bind:y="object.entStep" v-bind:z="object.strucStep"\n                v-bind:width="200 / intervals" v-bind:height="200 / intervals" v-bind:length="200 / intervals"\n                v-bind:color="\'rgba(112, 112, 255, \' + object.size / intervalLargestSize + \')\'"></block>\n            </div>\n        </div>\n    </div>\n    ',
            computed: {
                intervalBlocks: function () {
                    if (!this.intervals || !this.objects) return null;
                    var t = 200 / this.intervals, e = {}, n = 0;
                    return this.objects.forEach(function (i) {
                        hierStep = i.hierarchicallity < 1 ? ~~(200 * i.hierarchicallity / t) * t : 200 - t, entStep = i.information_amount < 1 ? ~~(200 * i.information_amount / t) * t : 200 - t, strucStep = i.structuredness < 1 ? ~~(200 * i.structuredness / t) * t : 200 - t, blockID = "".concat(hierStep, "_").concat(entStep, "_").concat(strucStep), blockID in e ? e[blockID].size += i.size : (e[blockID] = {}, e[blockID].size = i.size, e[blockID].hierStep = hierStep, e[blockID].entStep = entStep, e[blockID].strucStep = strucStep), n < e[blockID].size && (n = e[blockID].size)
                    }), this.intervalLargestSize = n, e
                }
            }
        }), Vue.component("block", {
            props: {
                id: String,
                x: Number,
                y: Number,
                z: Number,
                width: Number,
                height: Number,
                length: Number,
                color: String,
                title: String,
                label: String,
                titleRotate: Number
            },
            template: "\n        <div class=\"block\" v-bind:id=\"id\" v-bind:title=\"title\"\n        v-bind:style=\"{transform: 'translate3d(' + (x) + 'px, ' + (200 - y - height) + 'px, ' + (z - 100 + length / 2) + 'px)',\n             'transform-style': 'preserve-3d'}\">\n            <div class=\"front\" v-bind:style=\"{transform: 'rotateY(   0deg ) translateZ( ' + (length / 2) + 'px )',\n                                            width: width+'px',\n                                            height: height+'px',\n                                            'background-color': color}\">\n                <span class=\"title\">\n                    <span v-bind:style=\"{transform: 'rotate(' + titleRotate + 'deg)'}\">{{label}}</span>\n                </span> \n            </div>\n            <div class=\"back\" v-bind:style=\"{transform: 'rotateX( 180deg ) translateZ( ' + ((length) / 2) + 'px )',\n                                            width: width+'px',\n                                            height: height+'px',\n                                            'background-color': color}\"></div>\n            <div class=\"right\" v-bind:style=\"{transform: 'rotateY(  90deg ) translateZ( ' + ((-length) / 2) + 'px )',\n                                            width: length+'px',\n                                            height: height+'px',\n                                            'background-color': color}\"></div>\n            <div class=\"left\" v-bind:style=\"{transform: 'rotateY( -90deg ) translateZ( ' + (length / 2 - width) + 'px )',\n                                            width: length+'px',\n                                            height: height+'px',\n                                            'background-color': color}\"></div>\n            <div class=\"top\" v-bind:style=\"{transform: 'rotateX(  90deg ) translateZ( ' + (length / 2) + 'px )',\n                                            width: width+'px',\n                                            height: length+'px',\n                                            'background-color': color}\"></div>\n            <div class=\"bottom\" v-bind:style=\"{transform: 'rotateX( 90deg ) translateZ( ' + (-height + length / 2) + 'px )',\n                                            width: width+'px',\n                                            height: length+'px',\n                                            'background-color': color}\"></div>\n        </div>\n    "
        }), Vue.component("csvFile", {
            template: '<div class="custom-file">\n            <input type="file" class="custom-file-input" id="customFile"\n                   accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" v-on:change="fileChange">\n            <label class="custom-file-label" for="customFile">\n                Choose\n            </label>\n        </div>',
            methods: {
                fileChange: function (t) {
                    for (var e = new FileReader, n = t.target.files, i = 0; i < n.length; i++) {
                        var r = n[i];
                        r.type;
                        e.addEventListener("load", function () {
                            var t = e.result, n = a(t);
                            this.$emit("change", n.data)
                        }.bind(this), !1);
                        e.readAsText(r)
                    }
                }
            }
        }), Vue.component("previewTable", {
            template: '\n        <div v-if="!!data" id="data-table">\n            <table class="table table-striped table-hover table-sm table-responsive-sm" id="data-preview">\n                <thead class="thead-dark">\n                    <tr>\n                        <th scope="col">object_id</th>\n                        <th scope="col">size</th>\n                        <th scope="col">information_amount</th>\n                        <th scope="col">hierarchicallity</th>\n                        <th scope="col">structuredness</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr v-for="object in data">\n                        <td scope="row">{{object.object_id}}</td>\n                        <td>{{object.size}}</td>\n                        <td>{{object.information_amount}}</td>\n                        <td>{{object.hierarchicallity}}</td>\n                        <td>{{object.structuredness}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    ',
            props: ["data"]
        });
        new Vue({
            el: "#app",
            data: {
                axisX: null,
                axisY: null,
                axisZ: null,
                perspective: null,
                zoom: null,
                intervals: null,
                fileData: null,
                structures: {}
            },
            methods: {
                mo: function (t) {
                    if (this.captureToggle) {
                        var e = t.x, n = $(".drawArea").width(), i = $(".drawArea").position().left, a = (e - i) / n,
                            r = (Math.round(100 * a) / 100).toFixed(2);
                        this.axisY = 360 * r - 180
                    }
                }, captureOn: function () {
                    this.captureToggle = !0
                }, captureOff: function () {
                    this.captureToggle = !1
                }, wheel: function (t) {
                    t.preventDefault(), this.zoom *= (1e3 - t.deltaY) / 1e3
                }, reset: function () {
                    this.structures = i(), this.fileData = null
                }
            },
            created: function () {
                this.reset()
            }
        });
        var a = function (t) {
            var e = t.replace(/0,/g, "0."),
                n = t ? Papa.parse(e, {delimiter: ";", header: !0, dynamicTyping: !0, skipEmptyLines: !0}) : null;
            if (n) return n
        }
    }
});
//# sourceMappingURL=app.e97997c7.js.map