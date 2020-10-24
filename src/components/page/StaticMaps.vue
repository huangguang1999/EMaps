<template>
  <div class="content">
    <div id="map" ref="rootmap"></div>
    <el-card shadow="always" class="tooltip">
      <el-radio-group v-model="addOrNot">
        <el-radio id="addFeatures" name="cluster"  label="添加聚合标注"></el-radio>
        <el-radio id="removeFeatures" name="cluster"  label="移除聚合标注"></el-radio>
      </el-radio-group>
    </el-card>
    <div>
    </div>
  </div>
</template>

<script>
import "ol/ol.css";
import { Map, View, Feature } from "ol";
import Point from 'ol/geom/Point';
import SourceVector from 'ol/source/Vector';
import LayerVector from 'ol/layer/Vector';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Cluster from 'ol/source/Cluster';
import { Style, Circle, Stroke, Fill, Text } from 'ol/style';
import mapconfig from '@/config/mapconfig';
import staticMapData from '@/assets/data/staticMap-data.json';
export default {
    name: "StaticMaps",
    data() {
      return {
        map: null,
        addOrNot: '',
      }
    },
    mounted() {
        let mapcontainer = this.$refs.rootmap;
        this.map = new Map({
            target: mapcontainer,
            layers: mapconfig.streetmap(),
            // layers: [
            //     new Tile({
            //         source: new OSM()
            //     })
            // ],
            view: new View({
                projection: "EPSG:4326",
                center: [mapconfig.x,mapconfig.y],  //沈阳
                zoom: mapconfig.zoom
            })
        });
        // 创建要素
        let len = staticMapData.length
        let features = new Array(len)
        for(let i = 0; i < len; i++) {
          features[i] = new Feature(
           new Point([staticMapData[i].lon-0, staticMapData[i].lat-0])
          );
        }

        //矢量要素数据源
        let source = new SourceVector({
            features: features
        });

        //聚合标注数据源
        let clusterSource = new Cluster({
            distance: 40,               //聚合的距离参数，即当标注间距离小于此值时进行聚合，单位是像素
            source: source              //聚合的数据源，即矢量要素数据源对象
        });

        //加载聚合标注的矢量图层
        let styleCache = {};                    //用于保存特定数量的聚合群的要素样式
        let clusters = new LayerVector({
            source: clusterSource,
            style: function (feature, resolution){
                let size = feature.get('features').length;          //获取该要素所在聚合群的要素数量
                let style = styleCache[size];
                if(!style){
                    style = [
                        new Style({
                            image: new Circle({
                                radius: 10,
                                stroke: new Stroke({
                                    color: '#fff'
                                }),
                                fill: new Fill({
                                    color: '#3399CC'
                                })
                            }),
                            text: new Text({
                                text: size.toString(),
                                fill: new Fill({
                                    color: '#fff'
                                })
                            })
                        })
                    ];
                    styleCache[size] = style;
                }
                return style;
            }
        });
        this.map.addLayer(clusters);
        
        //添加聚合标注
        let _this = this
        document.getElementById('addFeatures').onclick = function(){
            //当前聚合标注数据源中的要素
            var currentFeatures = clusterSource.getSource().getFeatures();
            //如果聚合标注数据源中没有要素，则重新添加要素
            if(currentFeatures.length == 0){
                clusterSource.getSource().addFeatures(features);
                clusters.setSource(clusterSource);
                _this.map.addLayer(clusters);
            }
        }
        //移除聚合标注
        document.getElementById('removeFeatures').onclick = function(){
            clusterSource.getSource().clear();        //移除聚合标注数据源中的所有要素
            _this.map.removeLayer(clusters);              //移除标注图层
        }
    }
}
</script>

<style scoped>
.content {
  width: auto;
  height: 100%;
  overflow-y: hidden;
}
#map{
  width: auto;
  height: 100%;
}
/*隐藏ol的一些自带元素*/
.ol-attribution,.ol-zoom {
    display: none;
}
.tooltip {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
