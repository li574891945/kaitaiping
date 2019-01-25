<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartMap"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    import '../../../node_modules/echarts/map/js/province/guangdong' // 引入中国地图数据
    import jiangmeng from './../../../public/data/440700'
    export default {
        name: "attendance",
        data() {
            return {
            }
        },
        mounted() {
            this.chinaConfigure();
            console.log(jiangmeng)
        },
        methods:{
            chinaConfigure() {
                // console.log(this.userJson)
                let myChart = echarts.init(this.$refs.myEchartMap); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                echarts.registerMap('江门市', jiangmeng);
                let myData = [
                    {name: '工地1', value: [113.075531,21.576212]},
                    {name: '工地2', value: [113.781327, 22.1 ,  ]},
                    {name: '工地3', value: [114.781327, 25,  ]},
                    {name: '工地4', value: [114.781327, 24 ,  ]},
                    {name: '工地5', value: [113.1, 22.6 ,  ]},
                    {name: '工地6', value: [113.781327, 23.5 ,  ]},
                    {name: '工地7', value: [113.781327, 22.9 ,  ]},
                    {name: '工地8', value: [113.781327, 27 ,  ]},
                ]
                myChart.setOption({ // 进行相关配置
                    tooltip: {
                        trigger: 'item',
                        formatter: function loadData(result){//回调函数，参数params具体格式参加官方API
                            //鼠标放到某个地市上，显示这个地市的名称加人口数
                            //例如 params.name：当前地市名称。params.value：你传入的json数据与当前地市匹配的一项。
                            //params.data.value:你传入的json数据与当前地市匹配的一项中'value'对应的数据
                            return result.name+'<br />数据:'+result.value;
                        },
                    },
                    geo: {
                        map: '广东',//地图类型为中国地图,要是世界那就是world,要是省市区：例如beijing、shanghai
                        show:false,
                    },
                    visualMap: {
                        show : true,
                        x: 'left',
                        y: 'center',
                        splitList: [
                            {start: 10, end:100, label: '地标'},{start: 2, end: 3,label: '2 - 3（个）'},
                            {start: 1, end: 2,label: '1 - 2（个）'},{start: 0, end:0,label: '0（个）'},
                        ],
                        color: ['#F62157', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
                    },
                    title:{
                        text:'江门市',
                        //subtext:'',
                        x:'left',
                        y:'top',
                        textAlign:'left'
                    },
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
                            type: 'map',
                            map: '江门市' ,//要和echarts.registerMap（）中第一个参数一致
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data : [
                                {name:'恩平市',value:'2'},
                                {name:'开平市',value:'3'},
                                {name:'鹤山市',value:'0'},
                                {name:'蓬江区',value:'1'},
                                {name:'江海区',value:'3'},
                                {name:'新会区',value:'2'},
                                {name:'台山市',value:'0'},
                            ]//dataParam//人口数据：例如[{name:'济南',value:'100万'},{name:'菏泽'，value:'100万'}......]
                        }
                    ]
                })
            },

        }
    }
</script>

<style scoped>

</style>
