import fs from 'fs/promises'
import path from 'path'
import webp from 'webp-converter'

const imgsPath = './public/img/'
const imgRoot = path.resolve(imgsPath)

function searchFiles(dir, images, verbose) {
	if(arguments.length === 2) {
		verbose = false
	}
	if(arguments.length === 1) {
		verbose = false
		images = []
	}
	return new Promise(resolve => {
		if(verbose) console.log(`Searching ${dir}`)
		fs.readdir(dir)
		.then(async files => {
			// To use async/await, we need to use a for-of loop.
			// forEach does not work as intended with async/await.
			for(const file of files) {

				if(file === '.DS_Store') continue
				if(file === 'icons') continue
				if(path.extname(file) === '.svg') continue
				if(path.extname(file) === '.webp') continue

				const filePath = path.join(dir, file)

				if((await fs.stat(filePath)).isDirectory()) {
					await searchFiles(filePath, images, verbose)
					continue
				}
				if(verbose) console.log(`Found file ${file}`)
				images.push(filePath)
			}
			resolve(images)
		})
	})
}

searchFiles(imgRoot, [], true)
.then(images => {
	console.log(`Found ${images.length} non-webp images in ${imgsPath}.`)
	console.log('Creating webp versions...')
	for(const img of images) {
		webp.cwebp(img, img.replace(/\.[^/.]+$/, '') + '.webp', '-q 80','-v')
	}
	console.log('Done!')
})