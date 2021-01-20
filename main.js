var lang = 'en';
var defaultStructuresData = () => {
    return {
        rdbs: {
            on: false,
            name: 'RDBS',
            title: lang == 'cz' ? 'relační databáze' : 'relational database',
            hierMin: 0,
            hierMax: 1,
            entMin: 0.9,
            entMax: 1,
            strucMin: 0.9,
            strucMax: 1,
            color: 'rgba(112, 112, 255, 0.4)',
            titleRotate: 0
        },
        xml: {
            on: false,
            name: 'XML',
            title: 'XML',
            hierMin: 0.9,
            hierMax: 1,
            entMin: 0,
            entMax: 1,
            strucMin: 0,
            strucMax: 1,
            color: 'rgba(112, 255, 112, 0.4)',
            titleRotate: 90
        },
        json: {
            on: false,
            name: 'JSON',
            title: 'JSON',
            hierMin: 0.9,
            hierMax: 1,
            entMin: 0,
            entMax: 1,
            strucMin: 0.9,
            strucMax: 1,
            color: 'rgba(255, 112, 112, 0.4)',
            titleRotate: 90
        },
        rdf: {
            on: false,
            name: 'RDF',
            title: 'RDF',
            hierMin: 0,
            hierMax: 1,
            entMin: 0,
            entMax: 1,
            strucMin: 0.9,
            strucMax: 1,
            color: 'rgba(255, 255, 112, 0.4)',
            titleRotate: 0
        },
        unstruc: {
            on: false,
            name: 'unstructured',
            title: lang == 'cz' ? 'nestrukturované formáty' : 'unstructured formats',
            hierMin: 0.9,
            hierMax: 1,
            entMin: 0,
            entMax: 1,
            strucMin: 0,
            strucMax: 0.1,
            color: 'rgba(112, 255, 225, 0.4)',
            titleRotate: 90
        },
    };
};
Vue.component('rotation-axis-x', {
    data: function () {
        return {
            value: null
        }
    },
    template: `<div class="input-group col-sm-12 col-md-4 mb-3" id="rotation-axis-x">
                <div class="input-group-prepend">
                    <div class="input-group-text">rotate X</div>
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
                    <div class="input-group-text">rotate Y</div>
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
                    <div class="input-group-text">rotate Z</div>
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
                <input type="number" min="0" max="3" step="0.001" name="zoom" data-zoom='.cont'
                       class="form-control" v-model="value"/>
                <input type="range" min="0" max="3" step="0.001" name="zoomText" data-zoom='.cont'
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
            <div class="input-group col-sm-12 col-md-4 mb-3" id="intervals" title="Granularity of areas covered by data objects">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" class="d-none form-check-input" aria-label="Intervals" name="intervals" checked v-model="on">
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
    props: ['axisX', 'axisY', 'axisZ', 'perspective', 'zoom', 'intervals', 'objects', 'structures'],
    template: `
        <section class="cont" v-bind:style="{ transform: 'scale(' + zoom + ')', perspective: perspective + 'px' }">
            <div id="cube" v-bind:style="{ transform: 'rotateX(' + axisX + 'deg) rotateY(' + axisY + 'deg) rotateZ(' + axisZ + 'deg)' }">
                <figure class="front">
                    <div class="graph-background"></div>
                </figure>
                <figure class="back">
                    <div class="graph-background grid">
                        <span class="axis-label">
                            <span>1</span>
                            <span>&emsp;<!--amount of information--> i &emsp;</span>
                            <span>0</span>
                        </span>
                    </div>
                    <!--<img src="img/3dgrafEntr.png" alt="entropy" draggable="false" class="graph-background"/>-->
                    <div class="background back-background"></div>
                </figure>
                <div class="cover back-cover"></div>
                <figure class="right">
                    <div class="graph-background"></div>
                </figure>
                <figure class="left">
                    <div class="graph-background grid">
                        <span class="axis-label">
                            <span>1</span>
                            <span>&emsp;<!--amount of structuredness--> s &emsp;</span>
                            <span>0</span>
                        </span>
                    </div>
                    <!--<img src="img/3dgrafStruk.png" alt="entropy" draggable="false" class="graph-background"/>-->
                    <div class="background left-background"></div>
                </figure>
                <div class="cover left-cover"></div>
                <figure class="top">
                    <div class="graph-background"></div>
                </figure>
                <figure class="bottom">
                    <div class="graph-background grid">
                        <span class="axis-label">
                            <span>1</span>
                            <span>&emsp;<!--amount of hierarchicallity--> h &emsp;</span>
                            <span>0</span>
                        </span>
                    </div>
                    <!--<img src="img/3dgrafHie.png" alt="entropy" draggable="false" class="graph-background"/>-->
                    <div class="background bottom-background"></div>
                </figure>
                <div class="cover bottom-cover"></div>
                <cube-data v-bind:objects="objects" v-bind:structures="structures" v-bind:intervals="intervals"></cube-data>
            </div>
        </section>
    `
});

Vue.component('cube-data', {
    props: ['structures', 'objects', 'intervals'],
    data: function () {
        return {
            intervalLargestSize: null
        }
    },
    template: `
    <div>
        <div id="cube-data">
            <div v-for="(structure, index) in structures">
                <transition name="fade">
                    <block v-if="structure.on" v-bind:id="'structure_' + index" v-bind:title="structure.title"
                    v-bind:x="200*structure.hierMin" v-bind:y="200*structure.entMin" v-bind:z="200*structure.strucMin"
                    v-bind:width="200*(structure.hierMax-structure.hierMin)" 
                    v-bind:height="200*(structure.entMax-structure.entMin)" 
                    v-bind:length="200*(structure.strucMax-structure.strucMin)"
                    v-bind:color="structure.color" v-bind:titleRotate="structure.titleRotate"
                    v-bind:label="structure.title"></block>
                </transition>
                </div>
            </div>
            <div v-if="intervals" id="cube-data-intervals">
                <block v-for="(object, index) in intervalBlocks" v-bind:id="'area_' + index" 
                v-bind:title="'h: ' + (object.hierStep/200).toFixed(3) + ', i: ' + (object.entStep/200).toFixed(3) + ', s: ' + (object.strucStep/200).toFixed(3) + ', size: ' + object.size"
                v-bind:x="object.hierStep" v-bind:y="object.entStep" v-bind:z="object.strucStep"
                v-bind:width="200 / intervals" v-bind:height="200 / intervals" v-bind:length="200 / intervals"
                v-bind:color="'rgba(112, 112, 255, ' + object.size / intervalLargestSize + ')'"></block>
            </div>
        </div>
    </div>
    `,
    computed: {
        intervalBlocks: function () {
            if (!this.intervals || !this.objects) {
                return null;
            }
            let intervalSize = 200 / this.intervals;
            //console.log('intervalSize', intervalSize);
            let intervalBricks = {};
            let intervalLargestSize = 0;
            this.objects.forEach(function (item) {
                //console.log('item', item);
                //console.log(item.hierarchicallity, intervalSize, ~~(item.hierarchicallity * 200 / intervalSize) * intervalSize);
                hierStep = item.hierarchicallity < 1 ? (~~(item.hierarchicallity * 200 / intervalSize) * intervalSize) : 200 - intervalSize;
                entStep = item.information_amount < 1 ? (~~(item.information_amount * 200 / intervalSize) * intervalSize) : 200 - intervalSize;
                strucStep = item.structuredness < 1 ? (~~(item.structuredness * 200 / intervalSize) * intervalSize) : 200 - intervalSize;
                blockID = `${hierStep}_${entStep}_${strucStep}`;
                //console.log('blockID', blockID);
                if (blockID in intervalBricks) {
                    intervalBricks[blockID].size += item.size;
                } else {
                    intervalBricks[blockID] = {};
                    intervalBricks[blockID].size = item.size;
                    intervalBricks[blockID].hierStep = hierStep;
                    intervalBricks[blockID].entStep = entStep;
                    intervalBricks[blockID].strucStep = strucStep;
                }
                if (intervalLargestSize < intervalBricks[blockID].size) {
                    intervalLargestSize = intervalBricks[blockID].size;
                }
            });
            this.intervalLargestSize = intervalLargestSize;
            //console.log('intervalBricks', intervalBricks);
            //console.log('intervalLargestSize', intervalLargestSize);
            return intervalBricks;
        }
    }
});

Vue.component('block', {
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
    template: `
        <div class="block" v-bind:id="id" v-bind:title="title"
        v-bind:style="{transform: 'translate3d(' + (x) + 'px, ' + (200 - y - height) + 'px, ' + (z - 100 + length / 2) + 'px)',
             'transform-style': 'preserve-3d'}">
            <div class="front" v-bind:style="{transform: 'rotateY(   0deg ) translateZ( ' + (length / 2) + 'px )',
                                            width: width+'px',
                                            height: height+'px',
                                            'background-color': color}">
                <span class="title">
                    <span v-bind:style="{transform: 'rotate(' + titleRotate + 'deg)'}">{{label}}</span>
                </span> 
            </div>
            <div class="back" v-bind:style="{transform: 'rotateX( 180deg ) translateZ( ' + ((length) / 2) + 'px )',
                                            width: width+'px',
                                            height: height+'px',
                                            'background-color': color}"></div>
            <div class="right" v-bind:style="{transform: 'rotateY(  90deg ) translateZ( ' + ((-length) / 2) + 'px )',
                                            width: length+'px',
                                            height: height+'px',
                                            'background-color': color}"></div>
            <div class="left" v-bind:style="{transform: 'rotateY( -90deg ) translateZ( ' + (length / 2 - width) + 'px )',
                                            width: length+'px',
                                            height: height+'px',
                                            'background-color': color}"></div>
            <div class="top" v-bind:style="{transform: 'rotateX(  90deg ) translateZ( ' + (length / 2) + 'px )',
                                            width: width+'px',
                                            height: length+'px',
                                            'background-color': color}"></div>
            <div class="bottom" v-bind:style="{transform: 'rotateX( 90deg ) translateZ( ' + (-height + length / 2) + 'px )',
                                            width: width+'px',
                                            height: length+'px',
                                            'background-color': color}"></div>
        </div>
    `
});

Vue.component('csvFile', {
    template:
        `<div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile"
                   accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" v-on:change="fileChange">
            <label class="custom-file-label" for="customFile">
                Choose
            </label>
        </div>`,
    methods: {
        fileChange: function (evt) {

            var reader = new FileReader();
            var files = evt.target.files;
            for (var i = 0; i < files.length; i++) {
                var f = files[i];
                var type = f.type;
                reader.addEventListener("load", function () {
                    let fileCSV = reader.result;
                    var parsedData = parseCSV(fileCSV);
                    //console.log('parsedData.data', parsedData.data);
                    this.$emit('change', parsedData.data);
                }.bind(this), false);
                var text = reader.readAsText(f);
            }
        }
    }
});

Vue.component('previewTable', {
    template: `
        <div v-if="!!data" id="data-table">
            <table class="table table-striped table-hover table-sm table-responsive-sm" id="data-preview">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">object_id</th>
                        <th scope="col">size</th>
                        <th scope="col">information_amount</th>
                        <th scope="col">hierarchicallity</th>
                        <th scope="col">structuredness</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="object in data">
                        <td scope="row">{{object.object_id}}</td>
                        <td>{{object.size}}</td>
                        <td>{{object.information_amount}}</td>
                        <td>{{object.hierarchicallity}}</td>
                        <td>{{object.structuredness}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    props: ['data']
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
        fileData: null,
        structures: {}
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
        },
        reset: function () {
            this.structures = defaultStructuresData();
            this.fileData = null;
        },
        loadDemo: function () {
            fetch("https://raw.githubusercontent.com/danielvodnansky/3d-data-histogram/main/demo_data/demo.json")
                .then(response => this.fileData = JSON.parse(response.json()));
        }
    },
    created: function () {
        this.reset();
    }
});

var parseCSV = function (data) {
    let text = data.replace(/0,/g, "0.");
    //console.log(text);
    let csv = data ? Papa.parse(text, {
        delimiter: ";",
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true
    }) : null;
    if (!csv) {
        return;
    }
    //console.log(csv);
    return csv;
};