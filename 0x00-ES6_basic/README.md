![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20221220%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221220T212914Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=af70a072faae7978f0c311144d1d9002f21d26fcb1d1c8f65f5e5eb6938fceac)

Resources
---------

**Read or watch**:

*   [ECMAScript 6 - ECMAScript 2015](/rltoken/HRvh-7X2k2JmPu2XMuvlnQ "ECMAScript 6 - ECMAScript 2015")
*   [Statements and declarations](/rltoken/bu6OK8Wbzzxr04Si-qup-w "Statements and declarations")
*   [Arrow functions](/rltoken/kn70en_i7XsVl9PUhAK1fQ "Arrow functions")
*   [Default parameters](/rltoken/e1-hBHivLFWOip87Lc4Jfw "Default parameters")
*   [Rest parameter](/rltoken/TB_tbhDM8tPkVIS4_Tw_rw "Rest parameter")
*   [Javascript ES6 — Iterables and Iterators](/rltoken/-AhjdgEBG1O6dC-ZTiX65g "Javascript ES6 — Iterables and Iterators")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/TyqtB2dhm7oqGWD-ZNvFxw "explain to anyone"), **without the help of Google**:

*   What ES6 is
*   New features introduced in ES6
*   The difference between a constant and a variable
*   Block-scoped variables
*   Arrow functions and function parameters default to them
*   Rest and spread function parameters
*   String templating in ES6
*   Object creation and their properties in ES6
*   Iterators and for-of loops

Requirements
------------

### General

*   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension
*   Your code will be tested using the [Jest Testing Framework](/rltoken/K0bBQgH1IKAABeUzTmzxAA "Jest Testing Framework")
*   Your code will be analyzed using the linter [ESLint](/rltoken/iKElBm_Xlj10nllm5OILKA "ESLint") along with specific rules that we’ll provide
*   All of your functions must be exported

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y

    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3

### Install Jest, Babel, and ESLint

in your project directory:

*   Install Jest using: `npm install --save-dev jest`
*   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
*   Install ESLint using: `npm install --save-dev eslint`

Configuration files
-------------------

### `package.json`

<details>
    <summary> Click to show/hide file contents </summary>

    ```json
    {
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
      },
      "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
      }
    }
    ```
</details>

### `babel.config.js`

<details>
    <summary> Click to show/hide file contents </summary>

    ```js
    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };
    ```
</details>

### `.eslintrc.js`

<details>
    <summary> Click to show/hide file contents </summary>

    ```js
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };
    ```
</details>

### Finally…

Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.
