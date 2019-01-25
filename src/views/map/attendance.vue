<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartLineAndBar"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "attendance",
        mounted() {
            this.lineAndBarConfigure();
        },
        methods:{
            lineAndBarConfigure(){
                let myChart = echarts.init(this.$refs.myEchartLineAndBar); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                myChart.setOption({ // 进行相关配置
                    backgroundColor: '#FFFFFF',
                    title: {
                        text: '期间工人出勤率',
                        subtext: '',
                        x:'left'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#999'
                            }
                        }
                    },

                    legend: {
                        // data:['蒸发量', '平均温度']
                        data:['出勤小时数', '出勤率']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1/10','1/11','1/12','1/13','1/14','1/15','1/16','1/17','1/18','1/19','1/20','1/21'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '数量',
                            min: 0,
                            max: 250,
                            interval: 50,
                            axisLabel: {
                                formatter: '{value} '
                            }
                        },
                        {
                            type: 'value',
                            name: '百分率',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'出勤小时数',
                            type:'bar',
                            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                        },

                        {
                            name:'出勤率',
                            type:'line',
                            yAxisIndex: 1,
                            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                        }
                    ]
                })
            },

        }
    }
</script>

<style scoped>

</style>
