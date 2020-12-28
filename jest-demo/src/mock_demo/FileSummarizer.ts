import fs from 'fs'

export function summarizeFilesInDirectorySync(dir: fs.PathLike) {
  return fs.readdirSync(dir).map((fileName) => ({
    dir,
    fileName,
  }))
}
