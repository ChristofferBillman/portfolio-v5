import { Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import { gzip } from 'zlib'
import { promisify } from 'util'
import { readdir, stat, readFile } from 'fs/promises'

const __dirname = import.meta.dirname

const gzipAsync = promisify(gzip)

export const calculateDirSizesPlugin = (): Plugin => {
  return {
    name: 'calculate-dir-sizes',
    async writeBundle() {
      const directoryPath = path.resolve(__dirname, './dist/assets')

      const dirSize = async (directory: string): Promise<number> => {
        const files = await readdir(directory)
        const stats = files.map(file => stat(path.join(directory, file)))

        return (await Promise.all(stats)).reduce((acc, { size }) => acc + size, 0)
      }

      const dirGzippedSize = async (directory: string): Promise<number> => {
        const files = await readdir(directory)
        const gzippedSizes = await Promise.all(files.map(async (file) => {
          const filePath = path.join(directory, file)
          const fileContents = await readFile(filePath)
          const gzipped = await gzipAsync(fileContents)
          return gzipped.length
        }))

        return gzippedSizes.reduce((acc, size) => acc + size, 0)
      }

      const originalSize = (await dirSize(directoryPath)) / 1024
      const gzippedSize = (await dirGzippedSize(directoryPath)) / 1024

      const bundleSizes = {
        originalSize: originalSize.toFixed(2) + ' kB',
        gzippedSize: gzippedSize.toFixed(2) + ' kB'
      }

      fs.writeFileSync('./dist/bundlesize.json', JSON.stringify(bundleSizes, null, 2))
	  fs.writeFileSync('./public/bundlesize.json', JSON.stringify(bundleSizes, null, 2))
    }
  }
}