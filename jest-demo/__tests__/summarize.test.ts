import fs from 'fs'
import { summarizeFilesInDirectorySync } from '../src/mock_demo/FileSummarizer'

jest.mock('fs')

type MockFs = Pick<typeof fs, Exclude<keyof typeof fs, 'readdirSync'>> & {
  readdirSync(dir: string): string[]
  setMockFiles(files: string[]): void
}

const mockFs = (fs as unknown) as MockFs

describe('list files in dirctory sync', () => {
  const MOCK_FILE_INFO = ['/path/to/file1.js', '/path/to/file2.txt']

  beforeEach(() => {
    mockFs.setMockFiles(MOCK_FILE_INFO)
  })

  test('includes all files in the directory in the summary', () => {
    const summary = summarizeFilesInDirectorySync('/path/to')
    expect(summary).toHaveLength(2)

    expect(fs.readFileSync('../src/async_demo/request.ts')).toBeUndefined()
  })
})
