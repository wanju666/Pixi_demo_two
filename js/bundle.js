/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// test //\r\nlet type = \"WebGL\"\r\nif (!PIXI.utils.isWebGLSupported()) {\r\n    type = \"canvas\"\r\n}\r\n\r\nPIXI.utils.sayHello(type)\r\n\r\n\r\n// 使用别名 //\r\nlet Application = PIXI.Application,\r\n    Container = PIXI.Container,\r\n    loader = PIXI.loader,\r\n    resources = PIXI.loader.resources,\r\n    TextureCache = PIXI.utils.TextureCache,\r\n    Sprite = PIXI.Sprite,\r\n    Rectangle = PIXI.Rectangle;\r\n\r\n// PIXI实例 //\r\nlet app = new Application({\r\n    width: 512,\r\n    height: 512,\r\n    backgroundColor: 0x1099bb\r\n});\r\n\r\ndocument.body.appendChild(app.view);\r\n\r\n// **************//\r\n// 绘制形状初始化 //\r\n// *************//\r\n\r\n// 矩形 //\r\nlet rectangle = new PIXI.Graphics();\r\nrectangle.beginFill(0x66ccff);\r\nrectangle.lineStyle(4, 0x0000ff);\r\nrectangle.drawRect(20, 20, 100, 100);\r\nrectangle.endFill();\r\napp.stage.addChild(rectangle);\r\n\r\n// 圆形 //\r\nlet circle = new PIXI.Graphics();\r\n// circle.beginFill(0x66ccff);\r\ncircle.lineStyle(4, 0x0000ff);\r\ncircle.drawCircle(200, 200, 32);\r\ncircle.endFill();\r\napp.stage.addChild(circle);\r\n\r\n// 椭圆 //\r\nlet ellipse = new PIXI.Graphics();\r\nellipse.beginFill(0x66ccff);\r\nellipse.lineStyle(4, 0x0000ff);\r\nellipse.drawEllipse(300, 300, 50, 20);\r\nellipse.endFill();\r\napp.stage.addChild(ellipse);\r\n\r\n// 圆角矩形//\r\nlet roundRect = new PIXI.Graphics();\r\nroundRect.beginFill(0x66ccff);\r\nroundRect.lineStyle(4, 0x0000ff);\r\nroundRect.drawRoundedRect(380, 380, 100, 100, 10);\r\nroundRect.endFill();\r\napp.stage.addChild(roundRect); \r\n\r\n// 线段 //\r\nlet line = new PIXI.Graphics();\r\nline.lineStyle(4, 0x66ccff);\r\nline.moveTo(0, 10);\r\nline.lineTo(512, 10);\r\n// line.position.set(32, 32);\r\napp.stage.addChild(line);\r\n\r\n// 多边形 //\r\nlet triangle = new PIXI.Graphics();\r\ntriangle.beginFill(0x66ccff);\r\ntriangle.lineStyle(4, 0x0000ff);\r\ntriangle.drawPolygon([\r\n    -32, 64,\r\n    32, 64,\r\n    0, 0,\r\n    -32, 64\r\n]);\r\ntriangle.endFill;\r\ntriangle.position.set(100, 300);\r\napp.stage.addChild(triangle);\r\n\r\n\r\n// *********//\r\n// 显示文本 //\r\n// *******//\r\nlet style = new PIXI.TextStyle({\r\n    fontFamily: \"宋体\",\r\n    fontSize: 36,\r\n    fill: \"red\",\r\n    stroke: \"yellow\",\r\n    strokeThickness: 4,\r\n    dropShadow: true,\r\n    dropShadowColor: \"blue\",\r\n    dropShadowBlur: 4,\r\n    dropShadowAngle: Math.PI / 6,\r\n    dropShadowDistance: 6\r\n});\r\n\r\nlet message = new PIXI.Text(\"Hello Pixi!\", style);\r\n\r\nmessage.position.set(300, 100);\r\n\r\napp.stage.addChild(message);\r\n\r\nmessage.text = \"Hello treedom!\";\r\n\r\nmessage.style = {\r\n    fontFamily: 'Arial',\r\n    fontSize: 36,\r\n    fontStyle: 'italic',\r\n    fontWeight: 'bold',\r\n    fill: ['#ffffff', '#00ff99'],\r\n    stroke: '#4a1850',\r\n    strokeThickness: 5,\r\n    dropShadow: true,\r\n    dropShadowColor: '#000000',\r\n    dropShadowBlur: 4,\r\n    dropShadowAngle: Math.PI / 6,\r\n    dropShadowDistance: 6,\r\n    wordWrap: true,\r\n    wordWrapWidth: 100,\r\n    align: \"center\"\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });