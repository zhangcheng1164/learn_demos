// preset-env的useBuiltIns 设为entry时，需要我们手动import core-js才可以
import 'core-js'

class Dog {
  color = 'black'

  constructor(dog) {
    let {name, age} = dog
    this.name = name
    this.age = age
  }

  say() {
    Promise.resolve('hello').then(data => {
      console.log(data, this.name, this.color)
    })
  }
}

new Dog({name: 'zz', age: 11}).say()