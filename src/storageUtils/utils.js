import moment from "moment";

export function toMilliSecond(time) {
    /* 判断时间类型 s/m/h/d/w/M/y */
    let array = Array.from(time);
    let num = array.slice(0, -1).join('');
    let lastCharacter = array[array.length - 1];
    /* 关键字非空 */
    if ("smhdwMy".indexOf(lastCharacter) === -1) {
        return null
    }
    let uint = null;
    switch (lastCharacter) {
        case "s":
            uint = "seconds";
            break;
        case "m":
            uint = "minutes";
            break;
        case "h":
            uint = "hours";
            break;
        case "d":
            uint = "days";
            break;
        case "w":
            uint = "weeks";
            break;
        case "M":
            uint = "months";
            break;
        case "y":
            uint = "years";
            break;
    }
    /* 转换到毫秒 */
    if (uint !== null) {
        return moment.duration(num, uint).asMilliseconds();
    }
}