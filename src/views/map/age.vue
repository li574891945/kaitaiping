<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartWebsite"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "attendance",
        mounted() {
            this.websiteConfigure();
        },
        methods:{
            websiteConfigure(){
                let myChart = echarts.init(this.$refs.myEchartWebsite); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                myChart.setOption({ // 进行相关配置
                    backgroundColor: '#FFFFFF',
                    title: {
                        text: '工人年龄统计',
                        subtext: '',
                        x:'left'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        y: 'center',
                        data: ['18-30 (岁)','30-35 (岁)','31-40 (岁)','50以上 (岁)','40-50 (岁)']
                    },
                    series : [
                        {
                            name: '年龄统计',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'18-30 (岁)'},
                                {value:310, name:'30-35 (岁)'},
                                {value:234, name:'31-40 (岁)'},
                                {value:135, name:'50以上 (岁)'},
                                {value:1548, name:'40-50 (岁)'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                })
            },

        }
    }
</script>

<style scoped>

</style>
