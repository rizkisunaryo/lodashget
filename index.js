module.exports = (objOrArr, whatToGet, defaultValue) => {
    const whatToGetArr = whatToGet
        .split(/[.[]/)
        .filter(el => el !== '')
        .map(el => el.split(/['`\]]/).join(''))

    for (let i = 0; i < whatToGetArr.length; i++) {
        if (objOrArr[whatToGetArr[i]]) {
            objOrArr = objOrArr[whatToGetArr[i]]
        } else {
            return defaultValue
        }
    }
    return objOrArr
}