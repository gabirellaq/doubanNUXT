module.exports = {
    head: {
        title: 'douban',
        meta: [
            {
                charset: 'utf-8'
            },{
                name: 'viewport',
                content: 'width=device-width,initial-scale=1'
            },{
                hid: 'description',
                name: 'description',
                content: 'Meta description'
            }
        ],
        //ali iconfont
        link: [
            {
                'rel': 'stylesheet',
                'href': '//at.alicdn.com/t/font_562725_frnswhj7jgfzuxr.css'
            }
        ]
    },
    css: [
        {
            src: '~assets/css/reset.scss',
            lang: 'scss'
        },{
            src: '~assets/css/style.scss',
            lang: 'scss'
        }
    ],
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:1234'
    },
    loading: {
        color: '#00b600',
        height: '2px',
        failedColor: 'red'
    },
    plugins: [
        '~plugins/filters',
        '~plugins/element-ui'
    ]
}