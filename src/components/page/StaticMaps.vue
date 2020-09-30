<template>
    <div id="map" ref="rootmap"></div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import mapconfig from '@/config/mapconfig';
export default {
    name: "StaticMaps",
    data() {
        return {
            map: null
        };
    },
    mounted() {
        let mapcontainer = this.$refs.rootmap;
        this.map = new Map({
            target: mapcontainer,
            layers: mapconfig.streetmap(),
            mapStyle: 'amap://styles/grey',
            view: new View({
                projection: "EPSG:4326",    //使用这个坐标系
                center: [mapconfig.x,mapconfig.y],  //沈阳
                zoom: mapconfig.zoom
            })
        });
    }
}
</script>

<style scoped>
#map{
    height:100%;
}
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom {
    display: none;
}
</style>
