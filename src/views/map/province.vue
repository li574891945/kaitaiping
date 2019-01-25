<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartMap"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    import '../../../node_modules/echarts/map/js/province/guangdong' // 引入中国地图数据

    export default {
        name: "attendance",
        data() {
            return {

                mydata : [
                    {name: '广州市',value: '1' },{name: '深圳市',value: '1' },
                    {name: '珠海市',value: '0' },{name: '汕头市',value: '0' },
                    {name: '佛山市',value: '0' },{name: '韶关市',value: '0' },
                    {name: '湛江市',value: '1' },{name: '肇庆市',value: '0' },
                    {name: '江门市',value: '0' },{name: '茂名市',value: '6' },
                    {name: '惠州市',value: '0' },{name: '梅州市',value: '0' },
                    {name: '汕尾市',value: '0' },{name: '河源市',value: '0' },
                    {name: '阳江市',value: '1' },{name: '清远市',value: '1' },
                    {name: '东莞市',value: '2' },{name: '中山市',value: '5' },
                    {name: '潮州市',value: '0' },{name: '揭阳市',value: '0' },
                    {name: '云浮市',value: '0' }
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
                    {name: '工地1', value: [115.15, 24.09,]},
                    {name: '工地2', value: [109.881327, 20.608266,  ]},
                    {name: '工地3', value: [114.38, 23.35,  ]},
                    {name: '工地4', value: [110.87216, 21.985295,  ]},
                    {name: '工地5', value: [112.245672, 21.7787677,  ]},
                    {name: '工地6', value: [111.245672, 21.6787677,  ]},
                    {name: '工地7', value: [113.545672, 22.9787677,  ]},
                    {name: '工地8', value: [113.445672, 22.7787677,  ]},
                    {name: '工地9', value: [113.245672, 22.8787677,  ]},
                    {name: '工地10', value: [113.99672, 22.5187677,  ]},
                    {name: '工地11', value: [113.645672, 23.8787677,  ]},
                    {name: '工地12', value: [112.845672, 24.1787677,  ]},
                    {name: '工地13', value: [112.245672, 24.4787677,  ]},
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
                        map: '广东',//地图类型为中国地图,要是世界那就是world,要是省市区：例如beijing、shanghai
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
                            mapType: '广东',
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
