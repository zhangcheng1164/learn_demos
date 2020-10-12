class Dog {
  async say() {
    const s = await Promise.resolve('hello')
    return s
  }
}

new Dog().say().then(console.log)
