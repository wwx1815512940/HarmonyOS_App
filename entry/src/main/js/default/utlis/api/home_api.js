import {
    post_request,
    post_token_request
} from '../request.js';

export const home_banner_list_path = data => {
    return post_request('v1/web/infBanner/findAll', data)
}

export const home_shop_list_path = data => {
    return post_token_request('v1/web/shopProduct/getList', data)
}