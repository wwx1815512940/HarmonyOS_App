import {
    home_banner_list_path,
    home_list_path
} from '../../utlis/api/home_api.js';

export default {
    data() {
        return {
            swiper_list: [],
            queryInfo: {
                pageNum: 1,
                pageSize: 10,
            },
            total: 0,
            list: [], // 商品列表
            isLoading: false,
        }
    },
    onInit() {
        setTimeout(() => {
            this.get_banner_list_data()
            this.get_list_data()
        }, 1000)
    },
    onReady() {

    },
//    banner
    async get_banner_list_data () {
        let that = this,
            param = {
                putSite: 0
            }
        try {
            const {data: {
                data: results
            }} = await home_banner_list_path(param)
            const res = JSON.parse(results)
            if (res.code == 200000) {
                that.swiper_list = res.data
            }
        } catch (error) {
        }
    },
//    获取列表
    async get_list_data() {
        var that = this
        that.isLoading = true
        try {
            const {data: {
                data: results
            }} = await home_list_path(this.queryInfo)
            const res = JSON.parse(results)
            if (res.code == 200000) {
                that.list = that.list.concat(res.data.resultList)
            }
        } catch (error) {
            console.info('error : ' + JSON.stringify(error))
        }
        that.isLoading = false

    },
    onscroll(e) {
        if (this.queryInfo.pageNum > this.total) return
        this.queryInfo.pageNum++
        this.get_shop_list_data()
    }
}