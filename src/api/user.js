import axios from 'axios'
import global_ from '@/components/Global/index';

// 服务器URL
const BASE_URL = global_.serverSrc

export function login (userInfo) {
    const url = BASE_URL + 'api/users/login'

    const data = Object.assign({}, userInfo)

    return axios
        .post(url, data)
        .then(res => {
            return Promise.resolve(res.data)
        })
        .catch(err => {
            throw err
        })
}
