import router from '@system.router';

export default {
    data: {
        phone: '',
        date: '2021-08-06',
        gender: '男',
        hobby: '',
        ver: '', // 验证码
        isDis: false,
        text: '发送验证码',
    },
    onInit() {},
    change: function (e) {
        this.data.phone = ''
        this.data.date = '2021-08-06'
    },
    getPhone(e) {
        this.phone = e.value;
        console.info("phone=" + this.phone)
    },
    getDate(e) {
        console.log(JSON.stringify(e))
        this.date = e.year + '-' + (e.month + 1) + '-' + e.day;
        console.info("date=" + this.date)
    },
    getFemaleGender(e) {
        if (e.checked) {
            this.gender = '女'
            console.info("gender =" + this.gender)
        }
    },
    getMaleGender(e) {
        if (e.checked) {
            this.gender = '男'
            console.info("gender =" + this.gender)
        }
    },
    getHobby(e) {
        this.hobby = e.newValue;
        console.info("hobby=" + this.hobby)
    },
    onSend() {
        this.text = 60
        this.isDis = true
        //        this.get_code_data()
        var timer = setInterval(() => {
            if (this.text != 1) return this.text--
            clearInterval(timer)
            this.isDis = false
            this.text = '发送验证码'
        }, 1000)
    },

// 获取验证码
    get_code_data() {
        var that = this
    },

// 登录
    onRegiste() {
        let message = this.phone.length == 0 ? this.$t('Strings.name_null') : ''
        if (message != '') return prompt.showToast({
            message
        })

        router.push({
            uri: 'pages/index/index'
        })
    }
}