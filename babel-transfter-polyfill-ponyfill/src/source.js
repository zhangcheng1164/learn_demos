class Person {
  constructor(name) {
    this.name = name
  }

  say() {
    Promise.resolve('hello').then(d => console.log(d + this.name))
  }
}

new Person('zhangsan').say()