class Dog {
  async say() {
    const r = await Promise.resolve('hello')
    return r
  }
}

new Dog().say().then(console.log)