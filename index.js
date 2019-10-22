module.exports = (obj, whatToGet, defaultValue) => {
    const whatToGetArr = whatToGet.split('.')
    for (let i = 0; i < whatToGetArr.length; i++) {
        if (obj[whatToGetArr[i]]) {
            obj = obj[whatToGetArr[i]]
        } else {
            return defaultValue
        }
    }
    return obj
}