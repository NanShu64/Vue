import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //导入 node.js path

//unplugin
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite' //图标
import IconsResolver from 'unplugin-icons/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  AutoImport({
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    imports: ['vue'],

    resolvers: [
      ElementPlusResolver(),
      // 自动导入图标组件
      IconsResolver(),
    ],
  }),
  Components({
    resolvers: [
      ElementPlusResolver(),
      // 自动注册图标组件
      IconsResolver({
        enabledCollections: ['ep'],
      }),
    ],
  }),
  Icons({
    autoInstall: true,
  }),
],
  resolve: {
    alias: { //配置路径别名
      '@': path.resolve(__dirname, 'src')
    }
  }
})

