import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // 在 IDE、容器或同步目录中，原生文件监听可能收不到保存事件。
      // 轮询可保证保存后 Vite 立即检测到变更并推送热更新。
      usePolling: true,
      interval: 100,
    },
  },
})
