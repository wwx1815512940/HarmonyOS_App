import fetch from '@system.fetch';
import {getItem} from '../utlis/storage.js'

const BASEURL = 'https://www.lk.shunbokj.cn/api/'
const header = {
    'Content-Type': 'application/json',
}
const TOKEN = getItem('TOKEN')




// get
export const get_request = (url, param) => {
    return request(url, 'GET', param)
}


// post
export const post_request = (url, data) => {
    console.info('TOKEN : ' + TOKEN)
    return request(url, 'POST', '', data)
}


const request = (url, method, param, data) => {
    let path;
    switch (method) {
        case 'GET':
        path = `${BASEURL}${url}?${param}`
        break;
        case 'POST':
        path = `${BASEURL}${url}`
        break;
        default:
            break;
    }

    return fetch.fetch({
        url: path,
        method,
        data,
        header,
        success: response => {
        },
        fail: error => {
        }
    })
}