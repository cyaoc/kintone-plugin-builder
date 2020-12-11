# kintone-plugin-builder
这是从react-kintone-plugin项目中分离出来的模版，仅提供js的IE11转换功能

# 安装
下载后
```console
npm i
```

# 使用方式

- 把原有的plugin代码丢到本项目根目录的plugin文件夹下
  
- 把js文件丢入根目录的src文件夹下
  
- 修改manifest.json，把js路径修改为dist/js/{$your_js_name}.js

- 有private.ppk的请把它丢到项目根目录，否则会自动生成新的

- 运行
```console
npm run build
```
