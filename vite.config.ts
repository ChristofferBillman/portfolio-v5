import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { projectsSE } from './src/data/projectsSE'

import {calculateDirSizesPlugin} from './bundleSizePlugin'


const dynamicRoutes = ['/about', '/contact', '/projects', ...projectsSE.map(project => `/projects/${project.id}`)]

export default defineConfig({
  plugins: [
	react(),
	calculateDirSizesPlugin(),
	Sitemap({
		hostname: 'https://christofferbillman.se',
		dynamicRoutes,
		exclude: ['/404'],
		changefreq: 'monthly'
	}),
  ],
}) 
