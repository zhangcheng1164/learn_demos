import { getUserName } from '../src/async_demo/user'

jest.mock('../src/async_demo/request.ts')
it('test 1', () => {
  expect.assertions(1)
  return getUserName('4').then((data) => expect(data).toEqual('haha'))
})

it('test resolve 2', () => {
  expect.assertions(1)
  return expect(getUserName('4')).resolves.toEqual('haha')
})

it('test resolve 3', async () => {
  const userName = await getUserName('4')
  expect(userName).toEqual('haha')
})

it('test 2', () => {
  expect.assertions(1)
  return getUserName('5').catch((e) =>
    expect(e).toEqual(new Error('User with 5 not found'))
  )
})

it('test reject 1', () => {
  return expect(getUserName('5')).rejects.toEqual(
    new Error('User with 5 not found')
  )
})
