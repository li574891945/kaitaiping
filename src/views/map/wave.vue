<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartLine"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "attendance",
        mounted() {
            this.lineConfigure();
        },
        methods:{
            lineConfigure(){
                let myChart = echarts.init(this.$refs.myEchartLine); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                myChart.setOption({ // 进行相关配置
                    backgroundColor: '#FFFFFF',
                    title: {
                        text: '期间工人入场波动情况',
                        subtext: '',
                        x:'left'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['01-10', '01-11', '01-12', '01-13', '01-14', '01-15', '01-16', '01-17'],
                        name: '数量',
                    },
                    yAxis: {
                        type: 'value',
                        name: '日期',
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 1420],
                        type: 'line',
                        smooth: true
                    }]
                })
            },

        }
    }
</script>

<style scoped>

</style>
