import SoundPlayer from '../src/mock_class/soundPlayer'
import SoundPlayerConsumer from '../src/mock_class/soundPlayerConsumer'

jest.mock('../src/mock_class/soundPlayer.ts')

interface MockSoundPlayerInterface {
  playSoundFile(file: string): void
}

const MockSoundPlayer = (SoundPlayer as unknown) as jest.MockedClass<
  new () => MockSoundPlayerInterface
>

it('test xx', () => {
  MockSoundPlayer.mockImplementation(() => {
    return {
      playSoundFile: () => {
        throw new Error('sss')
      },
    }
  })

  const consumer = new SoundPlayerConsumer()
  expect(() => consumer.playSomethingCool()).toThrow()
})
