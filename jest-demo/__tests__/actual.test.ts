import { f1 } from '../src/mock_actual/Person'

const { f2 } = jest.requireActual('../src/mock_actual/Person.ts')

jest.mock('../src/mock_actual/Person.ts')

it('test 111', () => {
  expect(f1()).toBeUndefined()
})

it('test 222', () => {
  expect(f2()).toBe(2)
})
