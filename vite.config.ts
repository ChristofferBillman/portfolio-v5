import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import {calculateDirSizesPlugin} from './bundleSizePlugin'

export default defineConfig({
  plugins: [react(), calculateDirSizesPlugin()],
})
