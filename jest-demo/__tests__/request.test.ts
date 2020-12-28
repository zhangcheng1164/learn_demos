import axios from 'axios'
import path from 'path'

jest.mock('path')

it('test 1', () => {
  const r = path.resolve('hello', 'world')
  expect(r).toEqual('hello*world')

  return axios.get('xx').then((res) => expect(res).toBe('hello'))
})
