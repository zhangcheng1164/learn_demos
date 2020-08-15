class Person {
  constructor(public name: string, public age: number) {}

  say(): string {
    return `i am ${this.name}, i am ${this.age} years old`
  }
}

export default Person
