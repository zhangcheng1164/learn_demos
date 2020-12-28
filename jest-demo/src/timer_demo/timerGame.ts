export default function timerGame(callback?: () => void): void {
  console.log('Ready ... go !')
  setTimeout(() => {
    console.log('Time up --stop')
    if (callback) callback()
  }, 1000)
}
