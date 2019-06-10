// 体重 体温
function drawWeight(id, opinion, opinionData, date, text) {
    this.charts = echarts.init(document.getElementById(id))
    this.charts.setOption({
        title: {
            text: text
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: opinion,
            top: "10px",
        },
        grid: {
            left: '3%',
            right: '15%',
            bottom: '20%',
            top: '50px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
        },
        yAxis: {
            type: 'value',

        },
        series: [{
            name: opinion,
            data: opinionData,
            type: 'line',
            itemStyle: {
                normal: {
                    color: '#878DCA',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#000'
                        }
                    }
                },
            },
        }]
    })
}

// 血压 血氧
function drawBlood(id, opinion, opinionData, opinionData2, date, text, name1, name2) {
    this.charts = echarts.init(document.getElementById(id))
    this.charts.setOption({
        title: {
            text: "" ? "" : text
        },
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            data: opinion,
            right: '50%',
            top: "10px",
        },
        grid: {
            left: '3%',
            right: '15%',
            bottom: '20%',
            top: '50px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
        },
        yAxis: {
            type: 'value',
            // name:"血压"
        },
        series: [
            {
                name: name1,
                data: opinionData,
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#878DCA',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                },
            },
            {
                name: name2,
                data: opinionData2,
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#91C7AE',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                },
            },
        ]
    })
}

// 血糖
function drawGlucose(id, opinion, opinionData, opinionData2, opinionData3, date, text) {
    this.charts = echarts.init(document.getElementById(id))
    this.charts.setOption({
        title: {
            text: "" ? "" : text
        },
        tooltip: {
            trigger: 'axis'
        },

        legend: {
            data: opinion,
            right: '50%',
            top: "10px",
            selectedMode: 'single',
        },
        grid: {
            left: '3%',
            right: '15%',
            bottom: '20%',
            top: '50px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [],
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '餐前',
                data: opinionData,
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#878DCA',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                },
            },
            {
                name: '餐后',
                data: opinionData2,
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#0AB7AD',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                },
            },
            {
                name: '随机',
                data: opinionData3,
                type: 'line',
                itemStyle: {
                    normal: {

                        color: '#EEB55B',
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#000'
                            }
                        }
                    },
                },
            },
        ]
    })
}

// 管理员 建档人数 建档率
function drawCrowd(id, opinion, opinionData, name, xformatter,laformatter) {
    this.charts =echarts.init(document.getElementById(id))
    this.charts.setOption({
        xAxis: {
            type: 'category',
            data: opinion,

        },
        yAxis: {
            name: name,
            type: 'value',
            axisLabel: {
                show: true,
                interval: 'auto',
                // formatter: '{value} %'
                formatter:xformatter
            },

        },
        // grid: {
        //
        //     // left: '5%',   // 与容器左侧的距离
        //     // right: '4%',
        //     // bottom: '20%',
        //     // top:'50px',
        //     containLabel: true
        // },
        series: [
            {
                type: 'bar',
                barWidth: 50,
                itemStyle: {
                    normal: {
                        color: '#6DA7FF',
                        label: {
                            show: true,
                            position: 'top',
                            // formatter:'{c}%',
                            formatter:laformatter,
                            textStyle: {
                                fontSize: 18,
                            },
                        }
                    }
                },
                data: opinionData
            }
        ]
    })
}
//普通
function drawfil(id,filData) {
    this.charts = echarts.init(document.getElementById(id));
    this.charts.setOption({
        series: [
            {
                color: ['#6DA7FF','#ccc'],
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: filData,

                // 设置值域的那指向线
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                // 设置值域的标签
                label: {
                    normal: {
                        position: 'inner',
                        formatter: '{c}',
                        fontSize: 16,
                    }
                }
            }
        ],

    })
}

// 九型体质
function drawBar(id, opinion, opinionData, colorNum,maxScore) {
    this.charts = echarts.init(document.getElementById(id))
    this.charts.setOption({
        xAxis: {
            type: 'category',
            data: opinion,
        },

        yAxis: {
            type: 'value',
            min: 0,
            max: maxScore
        },
        series: [
            {
                type: 'bar',
                barWidth: 50,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = colorNum;
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}',
                            textStyle: {
                                fontSize: 18,
                            },
                        }
                    }
                },
                data: opinionData
            }
        ]
    })
}

// 疾病人数
function drawIllnessChart() {
    var $this = this;
    this.illnessColumn = echarts.init(document.getElementById('illnessColumn'));
    this.illnessColumn.setOption({
        tooltip: {},
        xAxis: {
            type: 'category',
            data: $this.diseasesPersonsXData,
            axisLabel: {
                rotate: 25,
            },
        },
        grid: {
            left: '2%',
            right: '15%',
            bottom: '13%',
            top: '100px',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            name: '疾病人数',
        },
        series: [{
            name: '疾病人数',
            type: 'bar',
            itemStyle: {
                color: '#5EC0BC',
            },
            barBorderRadius: [18, 18, 0, 0],
            barWidth: 20,
            data: $this.diseasesPersonsSData,
        }]
    });
}
// 慢性趋势统计
function crossColumnChart() {
    var $this = this;
    this.crossColumn = echarts.init(document.getElementById('crossColumn'));
    this.crossColumn.setOption({

        title: {
            text: '慢病趋势统计',
            textStyle: {
                fontWeight: 400,
                fontSize: '18px',
            },
            left: "20px",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            x: '20px',
            y: '20px',
            icon: "circle",
            data: ['高血压', '2型糖尿病', '慢阻肺', '恶性肿瘤', '冠心病', '肝炎', '脑卒中', '高血脂症', '严重精神障碍'],
            color: ['#EBAA43', '#8CD181', '#629EE1', '#F5A874', '#747BB7', '#07BCB3', '#43BAEB', '#43BAEB', '#43BAEB'],
        },

        grid: {
            left: '1%',
            right: '15%',
            bottom: '5%',
            top: '80px',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: $this.bloodSData
            }
        ],
        yAxis: [
            {
                // name: '慢病趋势统计',
                type: 'value'
            }
        ],
        series: [
            {
                name: '高血压',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: $this.bloodXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(235,170,67,0.3)',//区域颜色
                        },
                        color: '#EBAA43',
                        borderColor: '#EBAA43',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#EBAA43"
                        }
                    },
                    emphasis: {
                        color: '#EBAA43',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#EBAA43"
                        }
                    }
                },
            },
            {
                name: '2型糖尿病',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: $this.diabetesXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(140,209,129,0.3)',
                        },
                        color: '#8CD181',
                        borderColor: '#8CD181',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#8CD181"
                        }
                    },
                    emphasis: {
                        color: '#8CD181',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#8CD181" //折线的颜色
                        }
                    }
                },
            },
            {
                name: '慢阻肺',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: $this.chronicXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(98,158,225,0.3)',
                        },
                        color: '#629EE1',
                        borderColor: '#629EE1',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#629EE1"
                        }
                    },
                    emphasis: {
                        color: '#629EE1',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#629EE1"
                        }
                    }
                },
            },
            {
                name: '恶性肿瘤',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: $this.strokeXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(245,168,116,0.3)',
                        },
                        color: '#F5A874',
                        borderColor: '#F5A874',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#F5A874"
                        }
                    },
                    emphasis: {
                        color: '#F5A874',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#F5A874"
                        }
                    }
                },
            },
            {
                name: '冠心病',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: $this.hyperlipemiaXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(116,123,183,0.3)',
                        },
                        color: '#747BB7',
                        borderColor: '#747BB7',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#747BB7"
                        }
                    },
                    emphasis: {
                        color: '#747BB7',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#747BB7"
                        }
                    }
                },
            },
            {
                name: '肝炎',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: $this.coronaryXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(7,188,179,0.3)',
                        },
                        color: '#07BCB3',
                        borderColor: '#07BCB3',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#07BCB3"
                        }
                    },
                    emphasis: {
                        color: '#07BCB3',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#07BCB3"
                        }
                    }
                },
            },
            {
                name: '脑卒中',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: $this.hepatitisXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(67,186,235,0.3)',
                        },
                        color: '#43BAEB',
                        borderColor: '#43BAEB',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#43BAEB"
                        }
                    },
                    emphasis: {
                        color: '#43BAEB',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#43BAEB"
                        }
                    }
                },
            },
            {
                name: '高血脂症',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: $this.tumourXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(67,186,235,0.3)',
                        },
                        color: '#43BAEB',
                        borderColor: '#43BAEB',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#43BAEB"
                        }
                    },
                    emphasis: {
                        color: '#43BAEB',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#43BAEB"
                        }
                    }
                },
            },
            {
                name: '严重精神障碍',
                type: 'line',
                stack: '总量',
                areaStyle: { normal: {} },
                data: $this.mentalXData,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            color: 'rgba(67,186,235,0.3)',
                        },
                        color: '#43BAEB',
                        borderColor: '#43BAEB',
                        lineStyle: {
                            width: 2,
                            type: 'solid',
                            color: "#43BAEB"
                        }
                    },
                    emphasis: {
                        color: '#43BAEB',
                        lineStyle: {
                            width: 1,
                            type: 'dotted',
                            color: "#43BAEB"
                        }
                    }
                },
            }
        ]
    });
}
function drawCrowd(id, opinion, opinionData, text) {
    this.charts = echarts.init(document.getElementById(id))
    this.charts.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].seriesName + "<br>" + params[0].name + ":" + params[0].value;
            }
        },
        xAxis: {
            type: 'category',
            data: opinion,
            axisLabel: {
                interval: 0,//横轴信息全部显示
                rotate: -30 //-30度角倾斜显示
            }
        },
        yAxis: {
            type: 'value',
            // name: '人群分类',
            splitLine: { show: false }  //改设置不显示坐标区域内的y轴分割线
        },
        series: [
            {
                name: text,
                type: 'bar',
                barWidth: 30,
                //center: ['70%', '50%'],
                itemStyle: {
                    normal: {
                        color: function (params) {
                            //首先定义一个数组
                            var colorList = [
                                '#629EE1', '#F17372', '#EBAA43', '#747BB7', '#747BB7',
                                '#F5A874', '#07BCB3', '#43BAEB', '#ECA8EA'
                            ];
                            return colorList[params.dataIndex]
                        },
                        //以下为是否显示
                        //label: {
                        //    show: true,
                        //    position: 'top', //在上方显示
                        //    textStyle: { //数值样式
                        //        color: 'black',
                        //        fontSize: 14
                        //    }
                        //}
                    },
                    //emphasis: {
                    //    shadowBlur: 10,
                    //    shadowOffsetX: 0,
                    //    shadowColor: 'rgba(0, 0, 0, 0.5)'
                    //}
                },
                data: opinionData
            }
        ]
    })
}