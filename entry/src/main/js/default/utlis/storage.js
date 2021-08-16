import storage from '@system.storage';

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
export const getItem = (key, cb) => {
    console.info('callback : ' + cb)
    if (cb == undefined) {
        return storage.get({
            key,
            success: res => {
            },
            fail: err => {
            }
        })

    } else {
        let data;

        storage.get({
            key,
            success: res => {
                data = JSON.parse(res)
            },
            fail: err => {
            }
        })

        setTimeout(() => {
            cb && cb(data)
        }, 100)
    }


}


// 删除数据
export const removeItem = key => {
    storage.clear({})
}

