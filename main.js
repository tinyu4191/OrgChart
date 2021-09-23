const main = document.querySelector('#main')

function getOrgData() {
    // axios.get('http://tnvqis03/COMPONENT/getOrganizationData.do?custGrp=HUAWEI').then(function (res) {
    //     console.log(res)
    // })

    const res = [
        {
            img: '廖安勛_1590990658914.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '544',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '廖安勛',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 560,
            position: null,
            eating_habits: null,
            department: '工程師',
        },
        {
            img: '任雪斌_1590989451007.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: null,
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '任雪斌',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 537,
            position: null,
            eating_habits: null,
            department: null,
        },
        {
            img: '夏_1590990998426.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '541',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '夏興華',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 545,
            position: null,
            eating_habits: null,
            department: 'SQE組長',
        },
        {
            img: '周韶輝_1590991041871.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '541',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '  周韶輝 ',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 546,
            position: null,
            eating_habits: null,
            department: 'PET組長',
        },
        {
            img: 'Rz_1590991598409.png',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '545',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '劉潤洲',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 547,
            position: null,
            eating_habits: null,
            department: 'INX 全機種',
        },
        {
            img: '徐瑩_1590991670480.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '545',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '徐瑩',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 551,
            position: null,
            eating_habits: null,
            department: '工程師-深越',
        },
        {
            img: null,
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '545',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '吳秀坤',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 552,
            position: null,
            eating_habits: null,
            department: '工程師-信利',
        },
        {
            img: '周德志_1590991766979.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '545',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '周德志',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 550,
            position: null,
            eating_habits: null,
            department: '工程師-FFR',
        },
        {
            img: '宋愛翌_1590992095121.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '545',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '宋愛翌',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 553,
            position: null,
            eating_habits: null,
            department: '工程師',
        },
        {
            img: null,
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '545',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '周雄',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 554,
            position: null,
            eating_habits: null,
            department: '工程師',
        },
        {
            img: '何_1590991304713.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '546',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '何裕勛',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 555,
            position: null,
            eating_habits: null,
            department: '舒曼工程師',
        },
        {
            img: '楊文娟_1590991178013.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '546',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '楊文娟',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 556,
            position: null,
            eating_habits: null,
            department: '新項目工程師',
        },
        {
            img: '張寧_1590991402196.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '546',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '張寧',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 557,
            position: null,
            eating_habits: null,
            department: '13"/14"工程師',
        },
        {
            img: null,
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '546',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '劉勁',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 558,
            position: null,
            eating_habits: null,
            department: '16.1"工程師',
        },
        {
            img: 'ZY_1591056188869.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '544',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '顏澤宇',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 574,
            position: null,
            eating_habits: null,
            department: 'SQE工程師',
        },
        {
            img: '朱臣才_1590989902374.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '537',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '朱臣才',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 541,
            position: null,
            eating_habits: null,
            department: '部長',
        },
        {
            img: '江逸鴻_1590990336063.jpg',
            education: null,
            gender: null,
            date_of_birth: null,
            pid: '537',
            combat_effectiveness: null,
            size_of_cleanSuit: null,
            language_skills: null,
            marital_status: null,
            nationality: null,
            personality: null,
            background: null,
            contact: null,
            name: '江逸鴻 ',
            family_members: null,
            trait: null,
            size_of_claenShoe: null,
            id: 544,
            position: null,
            eating_habits: null,
            department: '部長',
        },
    ]
    let resData = res.map((item) => {
        return {
            name: item.name.trim(),
            pid: String(item.pid),
            id: String(item.id),
            department: item.department,
        }
    })
    console.table(resData)
    // 找出領導
    let leader = resData.filter((e) => e.pid === 'null')[0]

    // 往下尋找
    let idFind = [leader.id]
    let arrAll = []
    let count = 1
    while (idFind.length > 0) {
        let arr = []
        idFind.forEach((id) => {
            // console.log('Start :', id)
            let d = resData.filter((e) => e.pid === String(id))
            // console.log('Result :', d)

            if (count === 1) {
                let obj = {}
                obj.parent = String(id)
                obj.children = d.map((e) => e.id)
                obj.level = count
                arrAll.push(obj)
            } else {
                let obj = {}
                obj.parent = String(id)
                obj.children = d.map((e) => e.id)
                obj.level = count
                arrAll.push(obj)
            }
            arr = arr.concat(d.map((e) => e.id))
        })
        count += 1
        idFind = arr
    }
    let arrNew = arrAll.filter((e) => e.children.length > 0)
    console.table(arrNew)

    let levels = Array.from(new Set(arrNew.map((e) => e.level)))
    console.log(levels)

    // 從level找起
    let findLevel = 1
    const bigBoss = arrNew.find((e) => e.level === findLevel)
    const bigBossID = bigBoss.parent
    const objOrgChart = findBoss(bigBossID)

    function findBoss(id) {
        const obj = {}
        const boss = arrNew.find((e) => e.parent === id)
        if (boss === undefined) {
            const bossData = resData.find((e) => e.id === id)
            obj.name = bossData.name
            obj.department = bossData.department

            return obj
        } else {
            const bossData = resData.find((e) => e.id === id)
            obj.name = bossData.name
            obj.department = bossData.department
            if (boss.level !== 1) obj.collapsed = true
            if (boss.children.length > 0) obj.children = findChildren(boss.children)

            return obj
        }
    }

    function findChildren(arr) {
        const arrReturn = []
        arr.forEach((child) => {
            arrReturn.push(findBoss(child))
        })
        return arrReturn
    }
    console.log(objOrgChart)

    paintOrgChart(main, objOrgChart)
}

function paintOrgChart(dom, obj) {
    let myChart = echarts.init(dom)
    let option

    const data = obj

    option = {
        tooltip: {
            show: false,
            trigger: 'item',
            triggerOn: 'mousemove',
        },
        series: [
            {
                type: 'tree',
                id: 0,
                name: 'tree1',
                data: [data],

                top: '5%',
                left: '0%',
                bottom: '20%',
                right: '0%',

                roam: true,

                orient: 'TB',

                symbolSize: 20,

                edgeShape: 'polyline',
                edgeForkPosition: '63%',
                initialTreeDepth: 3,

                lineStyle: {
                    width: 2,
                },

                label: {
                    position: 'bottom',
                    width: 120,
                    align: 'center',
                    borderColor: '#a0a0a0',
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: [0, 0],
                    show: true,
                    backgroundColor: 'white',
                    formatter: function (e) {
                        const data = e.data
                        let index = e.treeAncestors.length
                        let lineRichIndex
                        let indexRandom = Math.floor(Math.random() * 6) + 1
                        let avatar = `{cc${indexRandom}|}`
                        if (index === 2) {
                            lineRichIndex = '{dd|}'
                            avatar = '{cc|}'
                        } else if (index === 3) {
                            lineRichIndex = '{ee|}'
                        } else if (index === 4) {
                            lineRichIndex = '{ff|}'
                        } else if (index === 5) {
                            lineRichIndex = '{gg|}'
                        }

                        return [
                            [`{aa|${data.department}}`],
                            [lineRichIndex],
                            [avatar, `{bb|${data.name}}`].join(''),
                        ].join('\n')
                    },
                    rich: {
                        aa: {
                            padding: [5, 0],
                        },
                        bb: {},
                        cc: {
                            width: 50,
                            height: 50,
                            backgroundColor: {
                                image: './images/boss-avatar-1.png',
                            },
                            align: 'left',
                        },
                        cc1: {
                            width: 50,
                            height: 50,
                            backgroundColor: {
                                image: './images/male-avatar-1.png',
                            },
                            align: 'left',
                        },
                        cc2: {
                            width: 50,
                            height: 50,
                            backgroundColor: {
                                image: './images/male-avatar-2.png',
                            },
                            align: 'left',
                        },
                        cc3: {
                            width: 50,
                            height: 50,
                            backgroundColor: {
                                image: './images/female-avatar-1.png',
                            },
                            align: 'left',
                        },
                        cc4: {
                            width: 50,
                            height: 50,
                            backgroundColor: {
                                image: './images/female-avatar-2.png',
                            },
                            align: 'left',
                        },
                        cc5: {
                            width: 50,
                            height: 50,
                            backgroundColor: {
                                image: './images/female-avatar-3.png',
                            },
                            align: 'left',
                        },
                        cc6: {
                            width: 50,
                            height: 50,
                            backgroundColor: {
                                image: './images/male-avatar-3.png',
                            },
                            align: 'left',
                        },
                        dd: {
                            width: '99%',
                            height: 1,
                            borderColor: 'blue',
                            borderWidth: 2,
                            align: 'left',
                        },
                        ee: {
                            width: '99%',
                            height: 1,
                            borderColor: 'green',
                            borderWidth: 2,
                            align: 'left',
                        },
                        ff: {
                            width: '99%',
                            height: 1,
                            borderColor: 'tomato',
                            borderWidth: 2,
                            align: 'left',
                        },
                        gg: {
                            width: '99%',
                            height: 1,
                            borderColor: 'purple',
                            borderWidth: 2,
                            align: 'left',
                        },
                    },
                },

                emphasis: {
                    focus: 'descendant',
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
            },
        ],
    }

    myChart.setOption(option)
    setTimeout(function () {
        window.addEventListener('resize', () => {
            myChart.resize()
        })
    }, 200)
}

getOrgData()
