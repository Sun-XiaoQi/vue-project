const KEY = 'goodid'
export function getData(){
    // 因为存储的是字符串数组，所以要转成数组
    return JSON.parse(localStorage.getItem(KEY) || '[]')
}
export function setData(data){
     // 先取，不然会覆盖原来的
    var array = JSON.parse(localStorage.getItem(KEY) || '[]')

    array.push(data)

    // 再存
    localStorage.setItem(KEY,JSON.stringify(array))
}

