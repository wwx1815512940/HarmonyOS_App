import { get_request } from '../request.js'

export const login = data => {
    return get_request('v1/web/user/login', data)
}