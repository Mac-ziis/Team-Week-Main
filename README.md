# _Title_

#### By _**Joseph Murray, Kari Vigna, Mac Granger, Greg Stilwell, Will Jolley**_

#### _{Brief description of application}_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Node.js_
* _Webpack_
* _NPM_
* _Babel_
* _ESLint_
* _JSON_ 
* _DotEnv_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* Have VS Code installed
* Clone this repository to your desktop.
* Open the repository in VS Code.
* Navigate to the .gitignore file and enter .env on a new line.
* Navigate to the root directory and run the following commands in your terminal:
  * To create a .env file to store your API key: touch .env
  * To install dotenv plugin: npm install dotenv-webpack@2.0.0 --save-dev
* Navigate to webpack.config.js 
  * Add the following on line 5: const Dotenv = require('dotenv-webpack');
  * Add the following to the plugins array: new Dotenv();
    * Make sure to add a comma at the end of the previous plugin.
* Generate API keys by creating accounts at:
  * https://my.plantnet.org/
  * https://perenual.com/login
  * https://openweathermap.org/
* Insert your API keys in the .env file using the following syntax: 
* API_Key=(Your Key Here) - without the parentheses. 
* From the root directory, run the following commands in your terminal:
  * to install dependencies: npm install
  * to run the application: npm run build
  * to open the application in a browser window: npm start

## Known Bugs

* _Any known issues_
* _should go here_

## License

Copyright (c) _date_ _author name(s)_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
