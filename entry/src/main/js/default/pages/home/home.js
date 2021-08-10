import {
    home_banner_list_path
} from '../../utlis/api/home_api.js';

import { getItem } from '../../utlis/storage.js'

export default {
    data() {
        return {
            swiper_list: [],
            queryInfo: {
                pageNum: 1,
                pageSize: 10,
            },
            total: 0,
            shop_list: []
        }
    },
    onInit() {
        console.info('Token :' + getItem('TOKEN'))
        this.get_banner_list_data()
        //        this.get_shop_list_data()
    },
    async get_banner_list_data () {
        let that = this,
            param = {
                putSite: 0
            }

        const {data: {
            data: results
        }} = await home_banner_list_path(param)
        const res = JSON.parse(results)
        if (res.code == 200000) {
            that.swiper_list = res.data
        }
    },
    get_shop_list_data() {
        var that = this
        fetch.fetch({
            url: that.url + 'v1/web/shopProduct/getList',
            method: 'POST',
            data: this.queryInfo,
            header: {
                'Content-Type': 'application/json',
            },
            success: function (response) {
                const res = JSON.parse(response.data)
                if (res.code == 100000) {
                    that.shop_list = that.shop_list.concat(res.data.resultList)
                    that.total = res.data.totalPages
                }
            },
            fail: function (error) {
                console.info("fetch fail" + JSON.stringify(error));
            }
        });
    },
    onscroll(e) {
        if (this.queryInfo.pageNum > this.total) return
        this.queryInfo.pageNum++
//        this.get_shop_list_data()
    }
}