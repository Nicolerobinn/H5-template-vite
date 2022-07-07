import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    //设置别名
    alias: {
        '@': path.resolve(__dirname, 'src')
    }
  },
  // 支持使用tsx语法
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h } from "vue";',
  },
  css:{
    postcss: {
        plugins: [
            require('postcss-import'),
            require('postcss-px-to-viewport')({
                viewportWidth: 3440, // 视口宽度，对应设计稿宽度
                viewporHeight: 1440, // 视口高度，对应设计稿高度
                unitPrecision: 3, // 指定px转换之后的小数位数
                viewportUnit: 'vw', // 转换的单位
                fontViewportUnit: 'vw', // 字体使用的单位
                replace: true, //  是否直接更换属性值，而不添加备用属性
                selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换的类
                exclude: /(\/|\\)(node_modules)(\/|\\)/, //禁止更改第三方UI框架样式
                minPixelValue: 1, // 小于或等于1px不转换
                mediaQuery: true, // 允许在媒体查询中转换
            }),
            require('cssnano')({
                'cssnano-preset-advaced': {
                    zindex: false,
                    autoprefixer: false,
                },
            })
        ]
    }
  }
})
