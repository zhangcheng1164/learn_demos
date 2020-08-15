class Student {
  friends: string[] = []

  constructor(public name: string) {}

  addFriend(...friends: string[]): void {
    this.friends.push(...friends)
  }
}

export default Student
