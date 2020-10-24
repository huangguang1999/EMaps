<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div>{{role}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登录时间：
                        <span>2020-9-30</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>东莞</span>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height:252px;">
                    <div slot="header" class="clearfix">
                        <span>出行占比</span>
                    </div>
                    <span>地铁</span>
                    <el-progress :percentage="71.3" color="#42b983"></el-progress>
                    <span>公交</span>
                    <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
                    <span>私家车</span>
                    <el-progress :percentage="13.7"></el-progress>
                    <span>共享单车</span>
                    <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
                </el-card>
            </el-col>
            <el-col :span="16" >
                <el-card shadow="hover" style="height:403px;">
                    <div slot="header" class="clearfix">
                        <span>实时消息</span>
                    </div>
                    <div class="news-content">
                      <transition-group name="list">
                        <div v-for="item in newsList" :key="item.title" class="news-item">
                          <i :class="item.status ? 'icon-emaps-gantanhao' : 'icon-emaps-wujiaoxing'"></i>
                          <span>{{item.title}}</span>
                        </div>
                      </transition-group>
                    </div>
                </el-card>
                <el-row :gutter="20" class="mgt20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-lx-people grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>总数据量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-lx-notice grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">3210</div>
                                    <div>实时消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-lx-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">53</div>
                                    <div>重要消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <div id="bar" style="width:600px;height:300px;"></div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <div id="line" style="width:600px;height:300px;"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
export default {
    name: 'dashboard',
    data() {
        return {
            name: 'government',
            newsList: [
                {
                    title: '沈阳故宫人流达到高峰',
                    status: false
                },
                {
                    title: '沈阳10月1日10点将迎来最高人流',
                    status: false
                },
                {
                    title: '大连机场27日起开始执行冬春季航班计划',
                    status: false
                },
                {
                    title: '大连地铁5号线“超级穿海”工程大盾构将穿越黄海海域岩溶地层',
                    status: false
                },
                {
                    title: '27日所有客运站关停',
                    status: true
                },
                {
                    title: '国庆市民外出旅游、逛街购物、走亲访友等活动增多',
                    status: true
                }
            ],
            timer: null,
        };
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === 'government' ? '超级用户' : '普通用户';
        }
    },
    mounted() {
        this.changeList();
        this.drawBarChart();
        this.drawLineChart();
    },
    destroyed () {
      clearInterval(this.timer)
    },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        },
        changeList() {
          this.timer = setInterval(() => {
            this.newsList.splice(0, 1);
            this.newsList.push({
              title: '沈阳10月1日10点将迎来最高人流' + Math.random(),
              status: Math.random() >= 0.5 ? true : false,
            })
          }, 3000)
        },
        drawBarChart() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById("bar"));
          // 指定图表的配置项和数据
          let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        },
        drawLineChart() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById("line"));
          // 指定图表的配置项和数据
          let option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        },
    }
};
</script>


<style scoped lang="scss">
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.mgt20 {
    margin-top: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}

.news-content {
  width: 100%;
  
  .news-item {
    display: inline-block;
    width: 100%;
    height: 45px;
    border: 1px solid #eee;
    line-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

}

.icon-emaps-gantanhao {
  color: #ff0000;
}

.list-enter {
    opacity: 0;
    transform: translateY(100%);
}

.list-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

// 平滑过渡的两个因素：1.-move属性的设置 2.position: absolute属性的设置
.list-move, .list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-leave-active {
  position: absolute;
}
.list-enter-to, .list-leave {
    opacity: 1;
    transform: translateY(0);
}

</style>
