class Dog {
  async say() {
    return Promise.resolve('hello')
  }
}

new Dog().say().then(console.log)