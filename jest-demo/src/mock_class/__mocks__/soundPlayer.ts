export const mockPlaySoundFile = jest.fn()

const mock = jest.fn().mockImplementation(() => ({
  playSoundFile: mockPlaySoundFile,
}))

export default mock
