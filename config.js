var app = new Vue({
  el: '#page',
  data: {
    网页名称: 'Chen Yiyi',
    姓名: 'Chen Yiyi',
    号码: '07 66 66 08 39',
    邮箱: 'yiyi.chen@utt.fr',
    个人网页: 'www.baidu.com',
    地址: '24 Rue Jeannette, 10000, Troyes',
    职业: "Étudiante en 4ème année d'Université de Techologie de Troyes",
    头像地址: 'images/myself.jpg',
    /** 支持类型有[微博,qq,git,instagram]*/
    联系方式: [
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
    ],
    关于我标题: 'Bonjour',
    关于我内容: 'Je suis étudiante en 4ème année d’école d’ingénieur à la recherche d’un stage dans le domaine de la développement Web pour 6 mois à partir de juillet ou d’août 2020.',
    /** 个人简历*/
    工作经历: [
      {
        职业名称: 'Projet de programmation Java',
        时间: 'Octobre 2019',
        介绍: 'Réalisation d’un jeu de cartes: « Jest »'
      },
      {
        职业名称: "Projet national d'innovation des étudiants de Chine",
        时间: 'Décembre 2018',
        介绍: 'Recherche sur le système de formation des ingénieurs français'
      },
      {
        职业名称: 'Projet de programmation C++',
        时间: 'Octobre 2018',
        介绍: "Réalisation d’un jeu en mode console : Casse briques"
        
      },
      {
        职业名称: "Stage d'électronique (Atelier d'électronique de l'Université de Shanghai)",
        时间: 'Juillet 2018',
        介绍: "Dessin de circuits électroniques à l'aide du logiciel MULTISIM"
      },
      {
        职业名称: "Stage de métaux(Atelier d'électronique de l'Université de Shanghai)",
        时间: 'Juillet 2017',
        介绍: "Dessin de pièces mécaniques à l’aide du logiciel CATIA et Apprentissage de la programmation de machines"
      },
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: 'Information et Système Informatique Bac+4',
        学校名称: 'Université de Technologie de Troyes (UTT)',
        时间: '2019',
        介绍: 'Programmation / Bases de données / Ingénierie logicielle / Technologies du Web'
      },
      {
        学段: 'Licence en Génie Informatique',
        学校名称: "Université de Technologie Sino-Européenne de l’Université de Shanghai, Chine (U.T.S.E.U.S.)",
        时间: '2016 - 2019',
        介绍: 'Programmation / Réseau / Système d’exploitation / Management du projet'
      },
      {
        学段: 'Gao Kao – équivalant du BAC',
        学校名称: 'Premier Lycée de Shanghai, Shanghai',
        时间: '2016',
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
        名称: 'C',
        进度: 80,
      },
      {
        名称: 'C++',
        进度: 80
      },
      {
        名称: 'Java',
        进度: 80
      },
      {
        名称: 'PHP',
        进度: 70
      },
      {
        名称: 'HTML5 + CSS3',
        进度: 80
      },
      {
        名称: 'Vue',
        进度: 60
      },
      {
        名称: 'Javascript',
        进度: 60
      },
      {
        名称: 'MySQL',
        进度: 70
      }
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