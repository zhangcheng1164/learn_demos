import fs from 'fs'
import path from 'path'

// typeof fs

type MockFs = Pick<typeof fs, Exclude<keyof typeof fs, 'readdirSync'>> & {
  readdirSync(dir: string): string[]
  setMockFiles(files: string[]): void
}

const mockFs = jest.createMockFromModule<MockFs>('fs')

let mockFiles = Object.create(null)

function setMockFiles(newMockFiles: string[]): void {
  mockFiles = Object.create(null)

  newMockFiles.forEach((file) => {
    const dir = path.dirname(file)

    if (!mockFiles[dir]) {
      mockFiles[dir] = []
    }

    mockFiles[dir].push(path.basename(file))
  })
}

function readdirSync(directoryPath: string) {
  return mockFiles[directoryPath] || []
}

mockFs.readdirSync = readdirSync
mockFs.setMockFiles = setMockFiles

export default mockFs
