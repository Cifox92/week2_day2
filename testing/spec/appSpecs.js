describe("helloIronhack function", () => {

    it("Must exist", () => {
        expect(typeof helloIronhack).toEqual('function')
        expect(helloIronhack).toBeDefined()
    })

    it("Must return 'Hello, merluzo!'", () => {
        expect(helloIronhack()).toEqual('Hello, merluzo!')
    })
})


describe("calculateMe function", () => {

    it('Must return the sum of all values', () => {
        expect(calculateMe([90, 10, 10])).toEqual(110)
        expect(calculateMe([0, 90, 1])).toEqual(91)
    })

    it('Must return a number', () => {
        expect(typeof calculateMe([90, 10, 10])).toEqual('number')
    })
})




describe("Person object", () => {

    it("Must exist", () => {
        expect(typeof person).toEqual('object')
    })

    it('Must have "age" prop', () => {
        expect(person.age).toBeDefined()
    })

    it('Must have "grow" method', () => {
        expect(person.grow).toBeDefined()
        expect(typeof person.grow).toBe('function')
    })

    it('Grow method should increase the age as argumented', () => {
        person.grow(2)
        expect(person.age).toBe(101)
        person.grow(-2)
        expect(person.age).toBe(99)
    })

})