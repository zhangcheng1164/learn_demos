export default function request(url: string): Promise<{ name: string }> {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10)
    process.nextTick(() => {
      if (userID === 4) {
        resolve({ name: 'haha' })
      } else {
        reject(new Error(`User with ${userID} not found`))
      }
    })
  })
}
