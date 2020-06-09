helloIronhack = () => 'Hello, merluzo!'
calculateMe = arr => arr.reduce((acc, val) => acc + val)

const person = {
    age: 99,
    grow(val) { this.age += val }
}