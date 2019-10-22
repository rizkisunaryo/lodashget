# Reason Behind This Library Creation
Some of my friends are reluctant to use https://lodash.com/ . They say lodash is heavy. That's why I create this library. This lodashget is light, it only contains small block of code that imitates `lodash.get`.


# Examples

```js
const lodashget = require('@rizkisunaryo/lodashget')

const obj = {
    a: {
        b: 'c'
    }
}
console.log(lodashget(obj, 'a.b')) // output: 'c'
```

```js
const lodashget = require('@rizkisunaryo/lodashget')

const obj = {
    a: {
        b: 'c'
    }
}
console.log(lodashget(obj, 'a.b.c', '')) // output: ''
```

```js
const lodashget = require('@rizkisunaryo/lodashget')

const arr = [[1, [2, 3]], 4]
console.log(lodashget(arr, '[0][1][1]')) // output: 3
```

```js
const lodashget = require('@rizkisunaryo/lodashget')

const obj = {
    a: {
        b: [1, [2, 3, {coba: 'saja'}], 5]
    }
}
console.log(lodashget(obj, `a.b[1][2]['coba']`)) // output: 'saja'
```

```js
const lodashget = require('@rizkisunaryo/lodashget')

const arr = [[1, [2, 3]], 4]
console.log(lodashget(arr, '[0][1][1].coba.saja', 10)) // output: 10
```

```js
const lodashget = require('@rizkisunaryo/lodashget')

const obj = {
    a: {
        b: [1, [2, 3, {coba: 'saja'}], 5]
    }
}
console.log(lodashget(obj, `a.b[1][2]['coba']['lagi']['terus']`, 'dasar')) // output: 'dasar'
```
