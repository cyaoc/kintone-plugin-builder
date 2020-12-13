# kintone-plugin-builder
This is a separate template from the react-kintone-plugin project, which only provides ie11 support for kintone-plugin

# Installation
```console
npm i
```

# How to use
![usage](https://raw.githubusercontent.com/cyaoc/kintone-plugin-builder/master/screenshot/usage.png)
- Create a new plugin folder and copy your code files into that directory.
  
  PS:
  manifest.json must be in the root directory of the plugin
  
- Please write the files to be converted to entry
  
- Modify manifest.json, change the file path to dist/{$your_file_path}

- If you have a private.ppk file, please copy it to the project root directory, otherwise the system will automatically generate a new one


- Run
```console
npm run build
```
