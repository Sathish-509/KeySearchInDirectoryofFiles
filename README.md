
This project is developed using callback which is in master branch and using async await in asyncawait branch.

# KeySearchInDirectoryofFiles
Node application to find the search key in a given directory of files

* Used node versions:
Node: v12.14.0
npm: 6.13.4

Steps: 
* npm install
* node Server.js <directory_path> <search_key>

* using fs module for reading files in a directory.
* using filequeue module to read files instead of fs, since fs not supporting more open files at atime.
Example: node Server.js "C:\Users\sathish\Documents\my-app" "enableProdMode"

```
C:\Users\sathish\Documents\my-app\src\main.ts
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\core.d.ts
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\bundles\core.umd.min.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\esm2015\index.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\esm2015\public_api.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\bundles\core.umd.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\fesm5\core.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\bundles\core.umd.min.js.map
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\fesm2015\core.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\language-service\bundles\language-service.umd.min.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\bundles\core.umd.js.map
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\fesm2015\core.js.map
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\fesm5\core.js.map
C:\Users\sathish\Documents\my-app\node_modules\@angular\language-service\bundles\language-service.umd.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\esm2015\src\application_ref.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\esm2015\src\core.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\esm5\src\application_ref.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\esm5\src\core.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\esm2015\src\util\is_dev_mode.js
C:\Users\sathish\Documents\my-app\node_modules\@angular\core\esm5\src\util\is_dev_mode.js
C:\Users\sathish\Documents\my-app\node_modules\@schematics\angular\application\files\src\main.ts.template
C:\Users\sathish\Documents\my-app\node_modules\@schematics\angular\universal\files\src\__main@stripTsExtension__.ts.template
```
