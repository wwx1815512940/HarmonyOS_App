import storage from '@system.storage';

var data;

// 存储数据
export const setItem = (key, value) => {
    storage.set({
        key,
        value: JSON.stringify(value),
        success: () => {
        }
    })
}
// 获取数据
export const getItem = key => {
    storage.get({
        key,
        success: res => {
            data = JSON.parse(res)
        },
        fail: err => {
        }
    })


    return data

}


// 删除数据
export const removeItem = key => {
    storage.clear({})
}

