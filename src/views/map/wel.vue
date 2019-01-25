<template>
  <div>
    <div :style="{height:'800px',width:'100%'}" ref="myEchartMap"></div>
    <div :style="{height:'800px',width:'100%'}" ref="myEchartDoubleLine"></div>
    <div :style="{height:'800px',width:'100%'}" ref="myEchartLine"></div>
    <div :style="{height:'800px',width:'100%'}" ref="myEchartLineAndBar"></div>
    <div :style="{height:'800px',width:'100%'}" ref="myEchartLineTwo"></div>
    <div :style="{height:'800px',width:'100%'}" ref="myEchartPopulation"></div>
    <div :style="{height:'800px',width:'100%'}" ref="myEchartBar"></div>
    <div :style="{height:'800px',width:'100%'}" ref="myEchartWebsite"></div>
  </div>
</template>

<script>
  import echarts from "echarts";
  import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据

  export default {
    name: 'wel',
    data() {
      return {
        activeNames: ['1', '2', '3', '4'],
        DATA: [],
        text: '',
        actor: '',
        count: 0,
        isText: false,
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
        colors: ['#5793f3', '#d14a61', '#675bba']
      }
    },
    computed: {
      // ...mapGetters(['website'])
    },
    mounted() {
      this.chinaConfigure();
      this.barConfigure();
      this.lineConfigure();
      this.lineTwoConfigure();
      this.doubleLineConfigure();
      this.lineAndBarConfigure();
      this.populationConfigure();
      this.websiteConfigure();
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    methods: {
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
      lineTwoConfigure(){
        let myChart = echarts.init(this.$refs.myEchartLineTwo); //这里是为了获得容器所在位置
        // window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
          backgroundColor: '#FFFFFF',
          title: {
            text: '劳务纠纷预警',
            subtext: '',
            x:'left'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['已发的劳务费', '已产生的劳务费', ]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis:  {
            type: 'value',
            name:"数量"
          },
          yAxis: {
            type: 'category',
            data: ['18/04','18/05','18/06','18/07','18/08','18/09','18/10','18/11','18/12','19/01',],
            name:"日期"
          },
          series: [
            {
              name: '已产生的劳务费',
              type: 'bar',
              stack: '总量',
              barWidth: '70%',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [104000, 104302, 165301, 144334, 113290, 178330, 145320, 113290, 148330, 135320]
            },
            {
              name: '已发的劳务费',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [0, 5832, 7901, 13884, 0, 0, 1320,40000,30000,0]
            }
          ]
        })
      },
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

<style scoped="scoped"  >

</style>
