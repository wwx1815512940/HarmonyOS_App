import prompt from '@system.prompt';
import {login} from '../../utlis/api/login_api.js'
import {setItem} from '../../utlis/storage.js'

export default {
    data() {
        return {
            tabs: [{
                       id: '1',
                       title: '首页',
                       icon: 'common/images/selected_heart_icon.png',
                       tintIcon: 'common/images/heart_icon.png',
                       component: 'home'
                   }, {
                       id: '2',
                       title: '地图',
                       icon: 'common/images/selected_heart_icon.png',
                       tintIcon: 'common/images/heart_icon.png',
                       component: 'map'
                   }, {
                       id: '3',
                       title: '我的',
                       icon: 'common/images/selected_heart_icon.png',
                       tintIcon: 'common/images/heart_icon.png',
                       component: 'user'
                   }],
            currentSelected: 0
        }
    },
// 页面数据初始化完成时触发，只触发一次
    onInit() {
        this.get_login_data()
        console.log('页面数据初始化完成')
    },
// 页面创建完成时触发，只触发一次
    onReady() {
        console.log('面创建完成时触发')
    },
// 页面显示时触发
    onShow() {
        console.log('页面显示时触发')
    },
// 页面消失时触发
    onHide() {
        console.log('页面消失时触发')
    },
// 页面销毁时触发
    onDestroy() {
        console.log('页面销毁时触发')
    },
    change(e) {
        this.currentSelected = e.index
    },
// login
    async get_login_data() {
        let that = this
        const {data: {
            data: results
        }} = await login('code=oFdc_5X-z4YeEngFr_IhSE2KWMO1')
        let res = JSON.parse(results)
//        数据存储
        setItem('TOKEN', res.data.token)
        console.info('登录成功!')

        prompt.showToast({
            message: res.message,
            duration: 4000,
            bottom: '50%'
        })
    },
}
