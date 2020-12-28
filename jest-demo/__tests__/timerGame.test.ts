import timerGame from '../src/timer_demo/timerGame'

beforeEach(() => {
  jest.useFakeTimers()
})

it('test', () => {
  timerGame()

  expect(setTimeout).toHaveBeenCalled()
})

it('test 2', () => {
  timerGame()

  expect(setTimeout).toHaveBeenCalledTimes(1)
})

it('test 3', () => {
  const cb = jest.fn()
  timerGame(cb)

  jest.runAllTimers()
  expect(cb).toHaveBeenCalled()
})

it('test 4', () => {
  const cb = jest.fn()
  setTimeout(() => {
    console.log('---1---')
    cb()
    setTimeout(() => {
      cb()
      console.log('---2---')
    }, 500)
  }, 1000)

  jest.runOnlyPendingTimers()
  expect(cb).toHaveBeenCalledTimes(1)

  jest.runOnlyPendingTimers()
  expect(cb).toHaveBeenCalledTimes(2)
})
