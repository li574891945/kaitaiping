<template>
    <div>
        <div :style="{height:'800px',width:'100%'}" ref="myEchartBar"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "attendance",
        mounted() {
            this.barConfigure();
        },
        methods:{
            barConfigure(){
                let myChart = echarts.init(this.$refs.myEchartBar); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                myChart.setOption({ // 进行相关配置
                    backgroundColor: '#FFFFFF',
                    title: {
                        text: '工人籍贯统计分析',
                        subtext: '',
                        x:'left'
                    },
                    tooltip: {},


                    xAxis: {
                        data: ['四川', '安徽', '山东', '新疆', '河南', '东北', '山西',"广东","北京",
                            '广西', '湖南', '湖北', '福建', '浙江', '海南', '台湾',"香港","天津"
                        ],
                        name: '城市',
                    },
                    yAxis: {
                        name: '数量',
                    },
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [68, 80, 76, 50, 70, 90, 80,200,50,40, 180, 140, 120, 50, 70, 20,10,30],
                        itemStyle: {
                            //通常情况下：
                            normal:{
                                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                color: function (params){
                                    var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECAAAA','#616A6B','#EACCCC','#4A235A','#3498DB' ];
                                    return colorList[params.dataIndex];
                                }
                            },
                            //鼠标悬停时：
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    }]
                })
            },
        }
    }
</script>

<style scoped>

</style>
