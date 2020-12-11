# kintone-plugin-builder
This is a template separated from the react-kintone-plugin project, which provides IE11 support for JS only

# Installation
```console
npm i
```

# How to use

- Create a new plugin folder and copy your code into that directory.
  PS:
  manifest.json must be in the root directory of the plugin
  
- Create a new src folder and copy your js code to that directory
  
- Modify manifest.json, change the js path to dist/js/{$your_js_name}.js

- If you have a certificate file, please copy it to the project root directory, otherwise the system will automatically generate a new one

- Make sure that the entry field in config/webpack.prod.js contains all your js files

- Run
```console
npm run build
```
