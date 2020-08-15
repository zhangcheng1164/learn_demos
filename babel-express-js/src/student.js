class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    return `i am ${this.name} and i am ${this.age} years old`
  }
}

export default Student
