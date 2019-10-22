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
})