export default class SoundPlayer {
  foo: string

  constructor() {
    this.foo = 'bar'
  }

  playSoundFile(fileName: string) {
    console.log(`Playing sound file ${fileName} ${this.foo}`)
  }

  say() {
    console.log(this.foo)
  }

  say2() {
    console.log(this.foo)
  }

  say3() {
    console.log(this.foo)
  }
}
