/*
* key: cookie name
* value: cookie value
* expiry: expiry time, eg: 1s, 10m, 15h, 5d, 2w, 2M, 1y
* */

import {toMilliSecond} from "./utils.js";

export function setCookie(key, value, expiry) {
    const times = new Date();
    times.setTime(times.getTime() + toMilliSecond(expiry))
    document.cookie = key + '=' + value + ';expires=' + times
}

export function getCookie(key) {
    let cookie_ = document.cookie;  //拿到cookie中的所有数据  是一个字符串
    let cookie_arr = cookie_.split('; ');// 以 ;和空格 分割成数组
    for (let k of cookie_arr) {//循环遍历数组cookie_arr  for of 遍历取到值
        let res = k.split('=');  //以等号再次进行分割
        if (res[0] === key) {
            return res[1];
        }
    }
}

export function removeCookie(key) {
    const times = new Date();
    times.setTime(times.getDate() + -1)
    document.cookie = key + '=' + 'value' + ';expires=' + times
}

