/*
* key: cookie name
* value: cookie value
* maxAge: expiry time, eg: 1s, 10m, 15h, 5d, 2w, 2M, 1y
* */

import {toSeconds} from "./utils.js";

export function setCookie(key, value, maxAge) {
    console.log("max-age: " + toSeconds(maxAge) + "s")
    document.cookie = key + '=' + value + ';max-age=' + toSeconds(maxAge)
}

export function getCookie(key) {
    const cookie_ = document.cookie;  //拿到cookie中的所有数据  是一个字符串
    const cookie_arr = cookie_.split('; ');// 以 ;和空格 分割成数组
    for (let k of cookie_arr) {//循环遍历数组cookie_arr  for of 遍历取到值
        let res = k.split('=');  //以等号再次进行分割
        if (res[0] === key) {
            return res[1];
        }
    }
    return null
}

export function removeCookie(key){
    /* 将cookie的过期时间设置0s后，借用过期删除机制实现 */
    document.cookie = key + '=value;max-age=0'
}

