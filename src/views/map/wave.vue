<template>
    <div>
        <div class="main">
            <span>
                <span class="tit">条件</span>
                <el-select v-model="value4" clearable placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </span>
            <el-input style="width: 200px;margin-left: 20px" v-model="input" placeholder="请输入内容"></el-input>
            <el-button style="margin-left: 10px" type="primary" icon="el-icon-search" @click="lineConfigure(value4)" circle ></el-button>
        </div>
        <div :style="{height:'700px',width:'100%'}" ref="myEchartLine"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        data() {
            return {
                options: [{
                    value: '0',
                    label: '项目名称'
                }, {
                    value: '1',
                    label: '区域名称'
                }, {
                    value: '2',
                    label: '总包名称'
                }, {
                    value: '3',
                    label: '工人名称'
                }],
                value4: '1',
                input: '',
                data:[
                    [820, 932, 901, 934, 1290, 1330, 1320, 1420],
                    [1320, 1420, 901, 934, 700, 1330, 1320, 901],
                    [820, 700, 1330, 934, 1290, 884, 1320, 904],
                    [820, 1330, 901, 934, 753, 685, 1320, 951]
                ]
            }
        },
        name: "attendance",
        mounted() {
            this.lineConfigure(this.value4);
        },
        methods:{
            lineConfigure(value){
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
                        data: this.data[value],
                        type: 'line',
                        smooth: true
                    }]
                })
            },

        }
    }
</script>

<style scoped>
    .main{
        margin-top: 20px;
        margin-left: 40px;
        margin-bottom: 20px;
    }
    .tit{
        margin-right: 20px;
    }
</style>
