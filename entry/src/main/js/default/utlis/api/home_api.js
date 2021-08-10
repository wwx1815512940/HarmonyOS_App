import { post_request } from '../request.js';

export const home_banner_list_path = data => {
    return post_request('v1/web/infBanner/findAll', data)
}