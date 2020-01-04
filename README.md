# KeySearchInDirectoryofFiles
Node application to find the search key in a given directory of files

* Used node versions:
Node: v12.14.0
npm: 6.13.4

Steps: 
* npm install
* node --experimental-modules app_asyncawait.mjs <directory_path> <search_key>

* using fs-promise achieved the functionality.
* package.json needs to be changed as below to support ES7 feature:
```
  "type": "module",
  "@std/esm": "cjs",
```

Ex: node --experimental-modules app_asyncawait.mjs "C:\Users\sathish\Documents\SearchFiles" "rreaddir"

```
[ 'C:\\Users\\sathish\\Documents\\SearchFiles\\app_asyncawait.mjs' ]

```
