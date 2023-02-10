import { getPercents } from "../getPercents";

describe('getPercents test', () => {
    it('should operate correctly with numbers', () => {
        expect(getPercents(30, 200)).toBe(60)
        expect(getPercents(20, 200)).toBe(40)
        expect(getPercents(10, 200)).toBe(20)
    })
    it('should operate correctly with invalid numbers', () => {
        expect(getPercents('30', '200')).toBe('Данные неверны')
    })
})