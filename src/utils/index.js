export function genRandomID(len) {
    let idArr = [];
    for (let i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789-_', a = 0; len > a; a++) {
        let e = Math.floor(Math.random() * i.length);
        idArr.push(i[e]);
    }
    return idArr.join('');
}