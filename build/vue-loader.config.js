module.exports = (isDev) => {
    return {
        preserveWhitespace:true, // 去除空格
        extractCSS:!isDev, // 提取vue中的css到一个文件夹中
        // hotReload:false, // 根据环境变量生成
        preLoader:{
            // 预解析 例如使用typescript
        },
        loaders:{
            // 自定义标签使用的loader
            // 指定后，vue文件会根据不同的模块解析
            // js:'coffee-loader
        },
        postLoader:{
            // 解析后的代码再解析
        },
        cssModules:{
            localIdentName: isDev?'[path]-[name]-[hash:base64:5]':'[hash:base64:5]', // 生成唯一名字
            camelCase:true, // 是否驼峰
        }
    }
};