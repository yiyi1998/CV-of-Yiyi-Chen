var app = new Vue({
  el: '#page',
  data: {
    网页名称: 'Chen Yiyi',
    姓名: 'Yiyi Chen',
    号码: '+86 13482317110',
    邮箱: 'yiyichen98@foxmail.com',
    个人网页: '',
    地址: '上海市嘉定区百安公路',
    职业: "Student of University of Technology of Troyes (France)",
    头像地址: 'images/myself.jpg',
    /** 支持类型有[微博,qq,git,instagram]*/
    /** 联系方式: [
      {
        类型: 'linkedIn',
        地址: 'https://www.linkedin.com/in/yiyi-chen-67995a1a6/'
      },
      {
        类型: 'facebook',
        地址: 'https://www.facebook.com/profile.php?id=100027930992325'
      },
      {
        类型: 'git',
        地址: 'https://github.com/yiyi1998'
      },
      {
        类型: 'instagram',
        地址: 'https://www.instagram.com/chenyiyi1998/'
      }
    ],*/
    关于我标题: '您好，',
    关于我内容: '我现在正就读于法国特鲁瓦工程技术大学 (Université de Technologie de Troyes) 信息系统与软件工程专业，本科毕业于上海大学。我正在寻找大数据开发/前端开发/软件测试/产品方面的实习，可于2021年7月开始全职实习。',
    /** 个人简历*/
    工作经历: [
      {
        职业名称: '上海呈合科技有限公司',
        时间: '2020年7月至2021年1月',
        介绍: '前端开发工程师：进行公司官网改版开发；参与智慧城市项目前端开发',
        介绍1: '产品助理：与客户进行阶段验收沟通，整理需求并向研发人员明确；编写产品规格书、使用手册，拍摄介绍视频；在产品使用期间提供现场支持',
        介绍2: '软件测试：编写测试用例，E2E软件测试，出具测试报告、验收报告',
      },
      
      {
        职业名称: "国家级大学生创业创新项目",
        时间: '2018年全年',
        介绍: '法国精英工程师教育对培养卓越工程师的启示——以上海大学中欧工程技术学院为例'
      },
      {
        职业名称: 'Java编程项目',
        时间: '2019年10月至2020年1月',
        介绍: '纸牌游戏'
      },
      {
        职业名称: 'C++编程项目',
        时间: '2018年9月至2018年11月',
        介绍: "小球打砖块游戏"
        
      },
      {
        职业名称: "上海大学车间实习（电子）",
        时间: '2018年7月至2018年8月',
        介绍: "使用MULTISIM软件绘制电子电路图"
      },
      {
        职业名称: "上海大学车间实习（金工）",
        时间: '2017年7月至2017年8月',
        介绍: "使用CATIA软件绘制机械零件",
        介绍1: '各种自动化机器的操作'
      },
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: '工程师（硕士）：信息系统与软件工程',
        学校名称: '法国特鲁瓦工程技术大学 - Université de Technologie de Troyes (UTT)',
        时间: '2019年9月至今',
        介绍: '面向对象编程(JAVA) / web开发 / 软件质量 / 数据库基础（mySQL）/ 数据可视化 / web服务'
      },
      {
        学段: '本科：信息工程',
        学校名称: "上海大学",
        时间: '2016年9月至2019年6月',
        介绍: '项目管理 / 面向对象编程(C++) / C语言 / 数据结构 / 操作系统 (Linux) / 网络结构 / 法语 '
      },
    ],
    /** 我的能力 图标可以打开/fonts/demo.html看看需要什么样的图标*/
    我的能力: [
      {
        名称: '唱',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: '跳',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: 'rap',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: '篮球',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: '篮球',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      },
      {
        名称: '篮球',
        图标: '学校名称',
        介绍: '唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱唱'
      }
    ],
    /** 我的技能*/
    我的技能: [
      {
        名称: 'HTML5 + CSS3 + Javascript',
        进度: 90
      },
      {
        名称: 'Bootstrap',
        进度: 90
      },
      {
        名称: 'React',
        进度: 80
      },
      {
        名称: 'MySQL',
        进度: 80
      },
      {
        名称: 'C',
        进度: 80,
      },
      {
        名称: 'C++',
        进度: 70
      },
      {
        名称: 'Java',
        进度: 70
      },
      {
        名称: 'Vue',
        进度: 60
      },
      
      
    ],
    /** 我的作品*/
    我的作品: [
      {
        名称: 'Projet Java',
        地址: 'https://github.com/yiyi1998/Projet-Jest',
        图片: 'images/java.png',
        简介: "Réalisation d'un jeu de cartes : «Jest»"
      },
      {
        名称: 'Projet C++',
        地址: 'https://github.com/yiyi1998/Projet-Casse-briques',
        图片: 'images/c++.png',
        简介: "Réalisation d’un jeu en mode console : Casse briques"
      },
      {
        名称: 'Projet nodeJS',
        地址: 'https://sourceforge.net/projects/elitedelefrance-gl02/',
        图片: 'images/nodejs.png',
        简介: "Réalisation dans le cadre de l'UE GL02 à l'UTT a pour but d'extraire des données à partir de fichier contenant des tweets stockés au format .csv."
      }, {
        名称: 'Website de présentation',
        地址: 'https://yiyi1998.github.io/Website-de-CV-Yiyi-Chen/.',
        图片: 'images/user.png',
        简介: "Un site pour CV d'Yiyi Chen"
      }
    ]
  },
  mounted () {
    document.title = this.网页名称
  }
})