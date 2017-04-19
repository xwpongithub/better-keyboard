export function genRandomID(len) {
    let idArr = [];
    for (let i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789-_', a = 0; len > a; a++) {
        let e = Math.floor(Math.random() * i.length);
        idArr.push(i[e]);
    }
    return idArr.join('');
}

/**
 * 根据字符串生成DOM元素，只能有一个根元素
 */
export function parseDom(arg) {
    var objE = document.createElement('div');
    objE.innerHTML = arg;
    return objE.childNodes[0];
}