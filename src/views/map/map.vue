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
            jump(id){
                // this.$router.push({
                //     path: this.$router.$avueRouter.getPath({
                //         name: "项目信息",
                //         src: 'http://120.76.60.230:8081/JMBBackend/BEProject/Detail?id='+id
                //     })
                // });
                window.location.href='http://120.76.60.230:8081/JMBBackend/BEProject/Detail?id='+id;

            },
            chinaConfigure() {
                // console.log(this.userJson)
                let _this = this;
                let myChart = echarts.init(this.$refs.myEchartMap); //这里是为了获得容器所在位置
                // window.onresize = myChart.resize;
                echarts.registerMap('江门市', jiangmeng);
                myChart.on('click', function(params){
                    console.log(params);//此处写点击事件内容
                    if(params.componentType == "series"){
                        _this.jump(params.data.id)
                    }
                });
                let myData = [
                    {adds: '嘉瀚花园施工总承包工程', value: [113.109935,22.574098],name:'江海区',id:'66'},
                    {adds: '灏昌园A、B、C、D幢高层住宅、B地块半地下层和地下一层（车库）', value: [113.081549,22.648888],name:'蓬江区',id:'49'},
                    {adds: '台山市保利公馆二期', value: [112.80191,22.253883],name:'台山市',id:'55'},
                    {adds: '轩汇豪庭住宅小区三期（3.2期）', value: [112.686147,22.391695],name:'开平市',id:'54'},
                    {adds: '江门市世纪城旧城改造项目-华鑫阁1幢及商业1', value: [113.093095,22.589503],name:'蓬江区',id:'52'},
                    {adds: '江门市海逸峰璟花园', value: [113.084245,22.588248],name:'蓬江区',id:'51'},
                    {adds: '荷塘镇高村农贸市场建设工程', value: [113.103518,22.6342],name:'蓬江区',id:'50'},
                    {adds: '富港-天荟湾', value: [113.101515,22.575431],name:'江海区',id:'48'},
                    {adds: '江海怡景湾小区地块二三栋住宅', value: [113.10669,22.561881],name:'江海区',id:'46'},
                    {adds: '胜坚紫悦花园10#集中商业', value: [113.076805,22.59776],name:'蓬江区',id:'45'},
                    {adds: '厂房二', value: [112.879936,22.585644],name:'鹤山市',id:'44'},
                    {adds: '台山海骏达花园十三区', value: [112.808496,22.202312],name:'台上市',id:'40'},
                    {adds: '永信大厦', value: [113.074123,22.625634],name:'蓬江区',id:'37'},
                    {adds: '江门中医药学院项目', value: [113.064746,22.574765],name:'蓬江区',id:'26'},
                    {adds: '名城上都商住楼', value: [113.039324,22.48373],name:'新会区',id:'21'},
                    {adds: '广东江门幼儿师范高等专科学校新校区建设工程(一期)', value: [113.079413,22.579421],name:'蓬江区',id:'1'},
                    {adds: '一鹿彤行', value: [112.639247,22.620072],name:'鹤山市',id:'5'},
                    {adds: '1#、2#仓库（吴剑中、陆卫和、李庆彬）', value: [113.137288,22.648302],name:'蓬江区',id:'38'},
                    {adds: '鹤山市沙坪松鹤新城(南区)E4、E5、E6座；E7、E8、E9座；商业裙楼、停车库', value: [112.986745,22.785584],name:'鹤山市',id:'41'},
                    {adds: '1#厂房（刘运英）', value: [113.142948,22.659089],name:'蓬江区',id:'39'},

                ]
                myChart.setOption({ // 进行相关配置
                    tooltip: {
                        trigger: 'item',
                        formatter: function loadData(result){//回调函数，参数params具体格式参加官方API
                            //鼠标放到某个地市上，显示这个地市的名称加人口数
                            //例如 params.name：当前地市名称。params.value：你传入的json数据与当前地市匹配的一项。
                            //params.data.value:你传入的json数据与当前地市匹配的一项中'value'对应的数据
                            // console.log(result.data)
                            if (result.data.adds){
                                return result.data.adds + '<br /> ' +  result.data.name ;
                            }else {
                                return result.data.name + '<br /> ' +  result.data.value;
                            }

                        },
                    },
                    geo: {
                        map: '江门市',//地图类型为中国地图,要是世界那就是world,要是省市区：例如beijing、shanghai
                        show:true,
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
                                    show: false
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
