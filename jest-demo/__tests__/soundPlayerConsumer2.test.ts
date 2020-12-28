import SoundPlayerConsumer from '../src/mock_class/soundPlayerConsumer'

const mockPlaySoundFile = jest.fn()

jest.mock('../src/mock_class/soundPlayer.ts', () => {
  return jest.fn().mockImplementation(() => ({
    playSoundFile: mockPlaySoundFile,
  }))
})

it('test 1', () => {
  const consumer = new SoundPlayerConsumer()
  consumer.playSomethingCool()

  expect(mockPlaySoundFile).toHaveBeenCalledWith('song.mp3')
})
