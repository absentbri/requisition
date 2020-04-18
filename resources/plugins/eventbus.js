import Vue from 'vue'

/* VUE GLOBAL EVENT BUS */
export default function ( {app, store} ){
    app.$bus = new Vue
    if (store) store.$bus = app.$bus
}