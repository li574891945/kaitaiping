<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartDoubleLine"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "attendance",
        data(){
            return{
                colors: ['#5793f3', '#d14a61', '#675bba']
            }
        },
        mounted() {
            this.doubleLineConfigure();
        },
        methods:{
            doubleLineConfigure(){
                let myChart = echarts.init(this.$refs.myEchartDoubleLine); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                myChart.setOption({ // 进行相关配置
                    backgroundColor: '#FFFFFF',
                    title: {
                        text: '进场人数与产值匹配度',
                        subtext: '',
                        x:'left'
                    },
                    color: this.colors,
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        data:['进场人数', '产值']
                    },
                    grid: {
                        top: 70,
                        bottom: 50
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: this.colors[1]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '进场人数  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                        },
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: this.colors[0]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '产值  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name:'产值',
                            type:'line',
                            xAxisIndex: 1,
                            smooth: true,
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'进场人数',
                            type:'line',
                            smooth: true,
                            data: [4, 6, 11, 18, 48, 69, 231, 46, 55, 18, 10, 1]
                        }
                    ]
                })
            },

        }
    }
</script>

<style scoped>

</style>
