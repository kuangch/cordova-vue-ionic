// const  CompressionPlugin = require('compression-webpack-plugin')
const  UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const glob = require('glob')
const path = require('path')

let config = {

    outputDir:path.resolve(__dirname, 'www'),
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',

    // 链式配置
    chainWebpack:(config) =>{

        config.devtool("source-map")

        // 小于1k的图片转成base64
        const imageRule = config.module.rule('images')
        // imageRule.uses.clear()
        imageRule.test(/.(png|jpe?g|gif)(\?\.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign({},options, {
                    limit: 1024,
                    name: 'img/[name].[hash:8].[ext]'
                })
            )


        // 代码分割
        const commonOptions = {
            chunks: 'all',
            reuseExistingChunk: true
        }
        config.optimization.splitChunks({
            // chunks: 'initial',
            // automaticNameDelimiter: '-',
            // name: true,
            cacheGroups: {
                dll: {
                    test: /[\\/]node_modules[\\/](vue|jquery)[\\/]/,
                    name: "chunk-vendors",
                    priority: 10,
                    ...commonOptions
                },

            }
        })

    },

    // 普通配置
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            return {
                plugins:[
                    new UglifyJSPlugin({
                        uglifyOptions: {
                            compress: {
                                warnings: false,
                                drop_debugger: true,
                                drop_console: true
                            }
                        }
                    }),
                    // new CompressionPlugin({
                    //     test: /\.js$|\.html$|\.css/,
                    //     threshold:10240,
                    //     deleteOriginalAssets:false
                    // })
                ]
            }

        } else {
            // 为开发环境修改配置...
        }
    },
}


// 多页应用配置
const PAGES_PATH = path.resolve(__dirname, './src/pages')
const pages = {}

const projectName = 'application'
glob.sync(PAGES_PATH + '/*/index.js').forEach(filepath => {
    let pageName = path.basename(path.dirname(filepath))
    pageName = pageName === 'main' ? 'app' : pageName
    pages[pageName] = {
        entry:filepath,
        title: pageName === 'app' ? projectName : pageName,
        filename: pageName === 'app' ? 'index.html' : `${pageName}.html`,
        // chunks:['vue_jquery',pageName]
    }
})

config.pages = pages

module.exports = config