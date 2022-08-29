const fromIntToString = (int: number): string => `${int}`

describe('number formatting', () => {
    it('if it formats integer into string', () => {
        expect(fromIntToString(23)).toBe('23')
        expect(fromIntToString(11)).toBe('11')
        expect(fromIntToString(3)).toBe('3')
        expect(fromIntToString(23)).not.toBe('123')
    })
})

export {}
