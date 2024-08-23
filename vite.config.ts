import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), basicSsl() ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
