import http from 'http'

export default function request(url: string): Promise<{ name: string }> {
  return new Promise((resolve) => {
    return http.get({ path: url }, (response) => {
      let data = ''
      response.on('data', (_data) => {
        data += _data
      })
      response.on('end', () => resolve(JSON.parse(data)))
    })
  })
}
