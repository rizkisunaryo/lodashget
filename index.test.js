const lodashGet = require('./')
const assert = require('assert')

describe('lodashget', () => {
    it(`should return return 'c' for lodashGet(obj, 'a.b')`, () => {
        const obj = {
            a: {
                b: 'c'
            }
        }
        assert.equal(lodashGet(obj, 'a.b'), 'c')
    })

    it(`should return return '' as default value`, () => {
        const obj = {
            a: {
                b: 'c'
            }
        }
        assert.equal(lodashGet(obj, 'a.b.c', ''), '')
    })

    it(`should return 3 for lodashGet(arr, '[0][1][1]')`, () => {
        const arr = [[1, [2, 3]], 4]
        assert.equal(lodashGet(arr, '[0][1][1]'), 3)
    })

    it(`should return 'saja' for lodashGet(obj, \`a.b[1][2]['coba']\`)`, () => {
        const obj = {
            a: {
                b: [1, [2, 3, {coba: 'saja'}], 5]
            }
        }
        assert.equal(lodashGet(obj, `a.b[1][2]['coba']`), 'saja')
    })

    it(`should return 10 as defaultValue for lodashGet(arr, '[0][1][1].coba.saja')`, () => {
        const arr = [[1, [2, 3]], 4]
        assert.equal(lodashGet(arr, '[0][1][1].coba.saja', 10), 10)
    })

    it(`should return 'dasar' as defaultValue for lodashGet(obj, \`a.b[1][2]['coba']['lagi']['terus']\`)`, () => {
        const obj = {
            a: {
                b: [1, [2, 3, {coba: 'saja'}], 5]
            }
        }
        assert.equal(lodashGet(obj, `a.b[1][2]['coba']['lagi']['terus']`, 'dasar'), 'dasar')
    })

    it(`should return default if object / array is null`, () => {
        const obj = null
        assert.equal(lodashGet(obj, `a.b[1][2]['coba']['lagi']['terus']`, 'dasar'), 'dasar')
    })

    it(`should return default if object / array is undefined`, () => {
        const obj = undefined
        assert.equal(lodashGet(obj, `a.b[1][2]['coba']['lagi']['terus']`, 'dasar'), 'dasar')
    })

    it(`should return default if array, but expected like object`, () => {
        const arr = [[1, [2, 3]], 4]
        assert.equal(lodashGet(arr, `a.b[1][2]['coba']['lagi']['terus']`, 'dasar'), 'dasar')
    })

    it(`should return undefined if expected doesn't exist, but no default value`, () => {
        const obj = {
            a: {
                b: [1, [2, 3, {coba: 'saja'}], 5]
            }
        }
        assert.equal(lodashGet(obj, `a.b[1][2]['coba']['lagi']['terus']`), undefined)
    })

    it(`should return undefined if object / array is null, and default value is not set`, () => {
        const obj = null
        assert.equal(lodashGet(obj, `a.b[1][2]['coba']['lagi']['terus']`), undefined)
    })

    it(`should return undefined if object / array is undefined, and default value is not set`, () => {
        const obj = undefined
        assert.equal(lodashGet(obj, `a.b[1][2]['coba']['lagi']['terus']`), undefined)
    })
})