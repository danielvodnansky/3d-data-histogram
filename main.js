

Vue.component('rotation-axis-x', {
    data: function () {
        return {
            value: -20
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
            </div>`
});

Vue.component('rotation-axis-y', {
    data: function () {
        return {
            value: -40
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
            </div>`
});

Vue.component('rotation-axis-z', {
    data: function () {
        return {
            value: 0
        }
    },
    template: `<div class="input-group col-sm-12 col-md-4 mb-3" id="rotation-axis-z">
                <div class="input-group-prepend">
                    <div class="input-group-text">Z</div>
                </div>
                <input type="number" min="-180" max="180" name="axisZtext" data-axis='z'
                       class="form-control" v-model="value"/>
                <input type="range" min="-180" max="180" name="value" data-axis='z' class="custom-range" v-model="value"/>
            </div>`
});

Vue.component('perspective', {
    data: function () {
        return {
            value: 0
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
            </div>`
});

Vue.component('zoom', {
    data: function () {
        return {
            value: 1.5
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
            </div>`
});

Vue.component('intervals', {
    data: function () {
        return {
            value: 10,
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
            </div>`
});

var app = new Vue({
    el: '#app'
});
