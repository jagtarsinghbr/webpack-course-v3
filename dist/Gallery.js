webpackJsonp([1],{"./src/components/Gallery.js":function(e,n,l){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var s=u(l("./node_modules/path-browserify/index.js")),o=u(l("./src/node_modules/babel-plugin-universal-import/importCss.js")),r=u(l("./src/node_modules/babel-plugin-universal-import/universalImport.js")),t=u(l("./node_modules/react/index.js"));function u(e){return e&&e.__esModule?e:{default:e}}l("./src/css/Gallery.css");var a=function(){(0,r.default)({id:"lodash",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Gallery.js",load:function(){return Promise.all([l.e(5).then(l.bind(null,"./node_modules/lodash/lodash.js")),(0,o.default)("lodash",{})]).then(function(e){return e[0]})},path:function(){return s.default.join(e,"lodash")},resolve:function(){return"./node_modules/lodash/lodash.js"},chunkName:function(){return"lodash"}}).then(function(e){console.log("imported",e)})};n.default=function(){return t.default.createElement("div",null,t.default.createElement("h1",{onClick:a},"Gallery"))}}).call(n,"/")},"./src/css/Gallery.css":function(e,n){}});