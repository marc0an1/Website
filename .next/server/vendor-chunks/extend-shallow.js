"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/extend-shallow";
exports.ids = ["vendor-chunks/extend-shallow"];
exports.modules = {

/***/ "(action-browser)/./node_modules/extend-shallow/index.js":
/*!**********************************************!*\
  !*** ./node_modules/extend-shallow/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isObject = __webpack_require__(/*! is-extendable */ \"(action-browser)/./node_modules/is-extendable/index.js\");\n\nmodule.exports = function extend(o/*, objects*/) {\n  if (!isObject(o)) { o = {}; }\n\n  var len = arguments.length;\n  for (var i = 1; i < len; i++) {\n    var obj = arguments[i];\n\n    if (isObject(obj)) {\n      assign(o, obj);\n    }\n  }\n  return o;\n};\n\nfunction assign(a, b) {\n  for (var key in b) {\n    if (hasOwn(b, key)) {\n      a[key] = b[key];\n    }\n  }\n}\n\n/**\n * Returns true if the given `key` is an own property of `obj`.\n */\n\nfunction hasOwn(obj, key) {\n  return Object.prototype.hasOwnProperty.call(obj, key);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9leHRlbmQtc2hhbGxvdy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsNkVBQWU7O0FBRXRDO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBLGtCQUFrQixTQUFTO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzPzU1MmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpcy1leHRlbmRhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKG8vKiwgb2JqZWN0cyovKSB7XG4gIGlmICghaXNPYmplY3QobykpIHsgbyA9IHt9OyB9XG5cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgIGFzc2lnbihvLCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn07XG5cbmZ1bmN0aW9uIGFzc2lnbihhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGhhc093bihiLCBrZXkpKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBga2V5YCBpcyBhbiBvd24gcHJvcGVydHkgb2YgYG9iamAuXG4gKi9cblxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/extend-shallow/index.js\n");

/***/ })

};
;