import Vue from 'vue'
//全局常量属性
var constant= {
    install(Vue){
        Vue.prototype.constant = {
            title: "Mr.Z",
            description: "钟宇峰的个人博客",
            head: [
                ["link", { rel: "icon", href: "/favicon.ico" }],
                [
                "meta",
                {
                    name: "viewport",
                    content: "width=device-width,initial-scale=1,user-scalable=no",
                },
                ],
            ],
            plugins: ["vuepress-plugin-table-of-contents", "@vuepress/back-to-top"],
            // theme:
            theme: {
                // Logo
                logo: "Z",
                // 主页
                home: {
                title: "Mr.Z",
                subTitle: "在生活里，我们永远是初学者",
                },
                // 页脚
                footer: {
                // 版权信息
                copyright: "Copyright © 2019-2020 Mr.Z | 版权所有",
                },
                // 个人信息卡片
                infoCard: {
                // 头像
                headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
                // 姓名
                name: "Mr.Z",
                // 邮箱
                mail: "zyf208513@gmail.com",
                },
                // 联系人页面
                contact: {
                title: "Hello There !!!!",
                subTitle1: "Thank you for visiting my blog",
                subTitle2: "Hope we can make progress together",
                // QQ二维码地址
                qq:
                    "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
                // 微信二维码地址
                wechat:
                    "https://libra321.oss-cn-huhehaote.aliyuncs.com/blog/weixin-qrcode.png",
                // 邮箱
                mail: "zyf208513@gmail.com",
                // github地址
                github: "https://github.com/Libra11",
                // 头像图片地址
                headerPic: "https://libra321.oss-cn-huhehaote.aliyuncs.com/avatar.jpg",
                },
                comment: {
                showComment: true,
                owner: "Libra11",
                repo: "vuepress-theme-libra",
                clientId: "07f6df24d9150e2da866",
                clientSecret: "ec60c756133e4a608e60405110a1fd6c78f19ecc",
                },
            },
        };
        
    }
}
  Vue.use(constant);