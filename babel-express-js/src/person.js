class Person {
  constructor(name) {
    this.name = name
  }

  async say() {
    const greeting = await Promise.resolve('你好')
    return `${greeting} ${this.name}`
  }
}

export default Person
