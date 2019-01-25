<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartMap"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据

    export default {
        name: "attendance",
        data() {
            return {

                mydata : [
                    {name: '北京',value: '1' },{name: '天津',value: '1' },
                    {name: '上海',value: '0' },{name: '重庆',value: '0' },
                    {name: '河北',value: '0' },{name: '河南',value: '0' },
                    {name: '云南',value: '1' },{name: '辽宁',value: '0' },
                    {name: '黑龙江',value: '0' },{name: '湖南',value: '6' },
                    {name: '安徽',value: '0' },{name: '山东',value: '0' },
                    {name: '新疆',value: '0' },{name: '江苏',value: '0' },
                    {name: '浙江',value: '1' },{name: '江西',value: '1' },
                    {name: '湖北',value: '2' },{name: '广西',value: '5' },
                    {name: '甘肃',value: '0' },{name: '山西',value: '0' },
                    {name: '内蒙古',value: '0' },{name: '陕西',value: '0' },
                    {name: '吉林',value: '0' },{name: '福建',value: '1' },
                    {name: '贵州',value: '3' },{name: '广东',value: '8' },
                    {name: '青海',value: '0' },{name: '西藏',value: '0'},
                    {name: '四川',value: '0' },{name: '宁夏',value: '0'},
                    {name: '海南',value: '0' },{name: '台湾',value: '0'},
                    {name: '香港',value: '0' },{name: '澳门',value: '0'}
                ],

            }
        },
        mounted() {
            this.chinaConfigure();
        },
        methods:{
            chinaConfigure() {
                // console.log(this.userJson)
                let myChart = echarts.init(this.$refs.myEchartMap); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                var myData = [
                    {name: '工地1', value: [100.15, 26.89,]},
                    {name: '工地2', value: [109.781327, 29.608266,  ]},
                    {name: '工地3', value: [114.38, 23.35,  ]},
                    {name: '工地4', value: [119.207216, 25.985295,  ]},
                    {name: '工地5', value: [116.245672, 26.7787677,  ]},
                    {name: '工地6', value: [113.245672, 26.7787677,  ]},
                    {name: '工地7', value: [116.245672, 22.7787677,  ]},
                    {name: '工地8', value: [107.245672, 27.7787677,  ]},
                    {name: '工地9', value: [108.245672, 27.7787677,  ]},
                    {name: '工地10', value: [108.245672, 26.7787677,  ]},
                    {name: '工地11', value: [107.245672, 25.7787677,  ]},
                    {name: '工地12', value: [101.245672, 24.7787677,  ]},
                    {name: '工地13', value: [101.245672, 22.7787677,  ]},
                ]
                myChart.setOption({ // 进行相关配置
                    backgroundColor: '#FFFFFF',
                    title: {
                        text: '项目所在区域分布图',
                        subtext: '',
                        x:'left'
                    },
                    tooltip : {
                        trigger: 'item'
                    },
                    //左侧小导航图标
                    visualMap: {
                        show : true,
                        x: 'left',
                        y: 'center',
                        splitList: [
                            {start: 10, end:100, label: '地标'},{start: 4, end: 10,label: '4 - 10（个）'},
                            {start: 3, end: 4,label: '3 - 4（个）'},{start: 2, end: 3,label: '2 - 3（个）'},
                            {start: 1, end: 2,label: '1 - 2（个）'},{start: 0, end:0,label: '0（个）'},
                        ],
                        color: ['#F62157', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
                    },
                    geo: {
                        map: 'china',//地图类型为中国地图,要是世界那就是world,要是省市区：例如beijing、shanghai
                        itemStyle: { // 定义样式
                            normal: {       // 普通状态下的样式
                                areaColor: '#F62157',
                                borderColor: '#fff',
                            },
                            emphasis: {         // 高亮状态下的样式
                                areaColor: '#e9fbf1'
                            }
                        }
                    },
                    //配置属性
                    series: [
                        {
                            name: '',//series名称
                            type: 'scatter',//为散点类型
                            coordinateSystem: 'geo',// series坐标系类型
                            data: myData,
                            symbol: 'pin',
                            symbolSize: [20, 20],

                        },
                        {
                            name: '数据',
                            type: 'map',
                            mapType: 'china',
                            // roam: true,
                            label: {
                                normal: {
                                    show: true  //省份名称
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            data:this.mydata  //数据
                        }
                    ]
                })
            },

        }
    }
</script>

<style scoped>

</style>
