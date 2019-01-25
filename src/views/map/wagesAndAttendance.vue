<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartPopulation"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "attendance",
        mounted() {
            this.populationConfigure();
        },
        methods:{
            populationConfigure(){
                let myChart = echarts.init(this.$refs.myEchartPopulation); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                myChart.setOption({ // 进行相关配置
                    backgroundColor: '#FFFFFF',
                    title: {
                        text: '工人工资与考勤匹配情况',
                        subtext: '',
                        x:'left'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['工资', '天']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        name:"元"
                    },
                    yAxis: {
                        type: 'category',
                        data: ['1/10','1/11','1/12','1/13','1/14','1/15'],
                        name:"日期"
                    },
                    series: [
                        {
                            name: '工资',
                            type: 'bar',
                            data: [18203, 23489, 29034, 104970, 131744, 630230],
                            color:'#66b1ff'
                        },
                        {
                            name: '天',
                            type: 'bar',
                            data: [3600, 4400, 4600, 7000, 8400, 15900]
                        },

                    ]
                })
            },


        }
    }
</script>

<style scoped>

</style>
