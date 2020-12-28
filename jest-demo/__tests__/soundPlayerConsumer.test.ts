import * as soundPlayerModule from '../src/mock_class/soundPlayer'
import SoundPlayerConsumer from '../src/mock_class/soundPlayerConsumer'

jest.mock('../src/mock_class/soundPlayer.ts')

type MockSoundPlayerModuleType = typeof soundPlayerModule & {
  mockPlaySoundFile(p: string): void
}

const mockSoundPlayerModule = (soundPlayerModule as unknown) as MockSoundPlayerModuleType

const mockPlaySoundFile = mockSoundPlayerModule.mockPlaySoundFile as jest.MockedFunction<
  typeof mockSoundPlayerModule.mockPlaySoundFile
>

it('test', () => {
  const consumer = new SoundPlayerConsumer()
  consumer.playSomethingCool()

  expect(mockPlaySoundFile).toHaveBeenCalledWith('song.mp3')
})
