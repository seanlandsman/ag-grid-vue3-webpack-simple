// import { createApp } from 'vue/dist/vue.esm-bundler';
import {createApp} from "vue"
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {AgGridVue} from 'ag-grid-vue3';

const index = createApp({
    template: '<ag-grid-vue-template></ag-grid-vue-template>'
});

index.component("ag-grid-vue-template", {
    data() {
        return {
            rowData: null,
            gridOptions: null,
            columnDefs: null
        }
    },

    components: {
        AgGridVue,
    },

    beforeMount: function () {
        this.rowData = [
            {make: 1, model: "a", price: 100}
        ];

        this.columnDefs = [
            {field: 'make'},
            {field: 'model'},
            {field: 'price'}
        ];
    },

    template: `<ag-grid-vue style="width: 100%;height: 300px;" class="ag-theme-balham " v-bind:columnDefs="columnDefs" v-bind:rowData="rowData"></ag-grid-vue>`
})

index.mount("#app");

