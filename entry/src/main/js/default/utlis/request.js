import fetch from '@system.fetch';
import storage from '@system.storage';
import {getItem} from '../utlis/storage.js'

const BASEURL = 'https://www.lk.shunbokj.cn/api/'
const header = {
    'Content-Type': 'application/json',
}


// get
export const get_request = (url, param) => {
    return request(url, 'GET', param)
}


// post
export const post_request = (url, data) => {
    return request(url, 'POST', '', data)
}

export const post_token_request = async (url, data) => {
    if (!header.token) {
       const {data: res } = await getItem('TOKEN')
        header.token = JSON.parse(res)
    }

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
    console.info('header : ' + JSON.stringify(header))
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