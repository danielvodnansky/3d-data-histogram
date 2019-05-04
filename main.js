Vue.component('rotation-axis-x', {
    data: function () {
        return {
            value: null
        }
    },
    template: `<div class="input-group col-sm-12 col-md-4 mb-3" id="rotation-axis-x">
                <div class="input-group-prepend">
                    <div class="input-group-text">X</div>
                </div>
                <input type="number" min="-180" max="180" name="axisXtext" data-axis='x'
                       class="form-control" v-model="value"/>
                <input type="range" min="-180" max="180" name="value" data-axis='x' value="-20" class="custom-range"
                       v-model="value"/>
            </div>`,
    watch: {
        value: function (newValue) {
            this.$emit('change', newValue);
        }
    },
    created: function () {
        this.value = -20
    }
});

Vue.component('rotation-axis-y', {
    data: function () {
        return {
            value: null
        }
    },
    template: `<div class="input-group col-sm-12 col-md-4 mb-3" id="rotation-axis-y">
                <div class="input-group-prepend">
                    <div class="input-group-text">Y</div>
                </div>
                <input type="number" min="-180" max="180" name="axisYtext" data-axis='y'
                       class="form-control" v-model="value"/>
                <input type="range" min="-180" max="180" name="axisY" data-axis='y' class="custom-range"
                       v-model="value"/>
            </div>`,
    watch: {
        value: function (newValue) {
            this.$emit('change', newValue);
        }
    },
    created: function () {
        this.value = -40
    }
});

Vue.component('rotation-axis-z', {
    data: function () {
        return {
            value: null
        }
    },
    template: `<div class="input-group col-sm-12 col-md-4 mb-3" id="rotation-axis-z">
                <div class="input-group-prepend">
                    <div class="input-group-text">Z</div>
                </div>
                <input type="number" min="-180" max="180" name="axisZtext" data-axis='z'
                       class="form-control" v-model="value"/>
                <input type="range" min="-180" max="180" name="value" data-axis='z' class="custom-range" v-model="value"/>
            </div>`,
    watch: {
        value: function (newValue) {
            this.$emit('change', newValue);
        }
    },
    created: function () {
        this.value = 0
    }
});

Vue.component('perspective', {
    data: function () {
        return {
            value: null
        }
    },
    template: `<div class="input-group col-sm-12 col-md-4 mb-3" id="perspective">
                <div class="input-group-prepend">
                    <div class="input-group-text">Perspective</div>
                </div>
                <input type="number" min="200" max="2500" name="perspective" data-css-change='.cont' data-unit='px'
                       data-property='perspective' class="form-control" v-model="value"/>
                <input type="range" min="200" max="2500" name="perspectiveText" data-css-change='.cont' data-unit='px'
                       data-property='perspective' class="custom-range" v-model="value"/>
            </div>`,
    watch: {
        value: function (newValue) {
            this.$emit('change', newValue);
        }
    },
    created: function () {
        this.value = 2500
    }
});

Vue.component('zoom', {
    data: function () {
        return {
            value: null
        }
    },
    template: `
            <div class="input-group col-sm-12 col-md-4 mb-3" id="zoom">
                <div class="input-group-prepend">
                    <div class="input-group-text">Zoom</div>
                </div>
                <input type="number" min="0" max="3" step="any" name="zoom" data-zoom='.cont'
                       class="form-control" v-model="value"/>
                <input type="range" min="0" max="3" step="any" name="zoomText" data-zoom='.cont'
                       class="custom-range" v-model="value"/>
            </div>`,
    watch: {
        value: function (newValue) {
            this.$emit('change', newValue);
        }
    },
    created: function () {
        this.value = 1.5
    }
});

Vue.component('intervals', {
    data: function () {
        return {
            value: null,
            on: true
        }
    },
    template: `
            <div class="input-group col-sm-12 col-md-4 mb-3" id="intervals">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" class="form-check-input" aria-label="Intervals" name="intervals" checked v-model="on">
                        Intervals
                    </div>
                </div>
                <input type="number" class="form-control" aria-label="..." min="5" max="100" name="interval" v-model="value" :disabled="!on">
                <input type="range" min="5" max="100" step="5" name="intervalText" data-zoom='.cont'
                       class="custom-range" v-model="value" :disabled="!on"/>
            </div>`,
    watch: {
        value: function (newValue) {
            this.$emit('change', this.on ? newValue : null);
        }
    },
    created: function () {
        this.value = 10
    }
});

Vue.component('cube', {
    props: ['axisX', 'axisY', 'axisZ', 'perspective', 'zoom', 'intervals'],
    template: `
        <section class="cont" v-bind:style="{ transform: 'scale(' + zoom + ')', perspective: perspective + 'px' }">
            <div id="cube" v-bind:style="{ transform: 'rotateX(' + axisX + 'deg) rotateY(' + axisY + 'deg) rotateZ(' + axisZ + 'deg)' }">
                <figure class="front">1</figure>
                <figure class="back">
                    <img src="img/3dgrafEntr.png" alt="entropy" draggable="false" class="graph-background"/>
                    <div class="background back-background"></div>
                </figure>
                <div class="cover back-cover"></div>
                <figure class="right">3</figure>
                <figure class="left">
                    <img src="img/3dgrafStruk.png" alt="entropy" draggable="false" class="graph-background"/>
                    <div class="background left-background"></div>
                </figure>
                <div class="cover left-cover"></div>
                <figure class="top">5</figure>
                <figure class="bottom">
                    <img src="img/3dgrafHie.png" alt="entropy" draggable="false" class="graph-background"/>
                    <div class="background bottom-background"></div>
                </figure>
                <div class="cover bottom-cover"></div>
            </div>
        </section>
    `
});

Vue.component('csvFile', {
    template:
        `<div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile"
                   accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" v-on:change="fileChange">
            <label class="custom-file-label" for="customFile">
                Choose file
            </label>
        </div>`,
    /*data: function () {
        return {
            fileData: 0
        }

    },*/
    methods: {
        fileChange: function (evt) {
            /*//console.log('event.target.files', event.target.files);
            var reader = new FileReader();
            var files = event.target.files;
            console.log('files', event.target.files);
            //var fileData = null;
            for (var i = 0; i < files.length; i++) {
                var f = files[i];
                var type = f.type;
                console.log('type', type);
                reader.onload = (function (ev) {
                    console.log('ev.target.result',ev.target.result);
                    return function (e) {
                        var data = (e.target.result);
                        console.log('data', data);
                        var fileData = parseCSV(data);
                        console.log('fileData', fileData);
                        this.$emit('change', fileData);
                    };
                })(reader);
            }
            //this.fileData = fileData;*/

            var reader = new FileReader();
            var files = evt.target.files;
            for (var i = 0; i < files.length; i++) {
                var f = files[i];
                var type = f.type;

                reader.onload = (function (event) {
                    return function (e) {
                        var data = (e.target.result);
                        //var data2 = (reader.readAsText(f));
                        fileData = data;
                        var parsedData = parseCSV(data);
                        console.log('parsedData', parsedData);
                        this.$emit('change', parsedData);
                    };
                })(reader);

                reader.addEventListener("load", function () {
                    let fileCSV = reader.result;
                    console.log('fileCSV', fileCSV);
                    var parsedData = parseCSV(fileCSV);
                    console.log('parsedData', parsedData);
                    this.$emit('change', parsedData);
                }.bind(this), false);

                var text = reader.readAsText(f);
            }
        }
    },
    watch: {
        /*fileData: function (newValue) {
            this.$emit('change', fileData);
        }*/
    }
});

var app = new Vue({
    el: '#app',
    data: {
        axisX: null,
        axisY: null,
        axisZ: null,
        perspective: null,
        zoom: null,
        intervals: null,
        fileData: null
    },
    methods: {
        mo: function (evt) {
            if (this.captureToggle) {
                let x = evt.x;
                let areaWidth = $('.drawArea').width();
                let areaLeft = $('.drawArea').position().left;
                let normalizedX = (x - areaLeft) / areaWidth;
                let roundedX = (Math.round(normalizedX * 100) / 100).toFixed(2);
                this.axisY = roundedX * 360 - 180;
            }
        },
        captureOn: function () {
            this.captureToggle = true
        },
        captureOff: function () {
            this.captureToggle = false
        },
        wheel: function (evt) {
            evt.preventDefault();
            this.zoom *= ((1000 - evt.deltaY) / 1000);
        }
    }
});

var parseCSV = function (data) {
    let csv = data ? Papa.parse(data, {
        delimiter: ";",
        header: true
    }) : null;
    if (!csv) {
        return;
    }
    return csv;
};