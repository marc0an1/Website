"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/md-to-react-email";
exports.ids = ["vendor-chunks/md-to-react-email"];
exports.modules = {

/***/ "(action-browser)/./node_modules/md-to-react-email/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/md-to-react-email/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailMarkdown: () => (/* binding */ EmailMarkdown),\n/* harmony export */   camelToKebabCase: () => (/* binding */ camelToKebabCase),\n/* harmony export */   parseCssInJsToInlineCss: () => (/* binding */ parseCssInJsToInlineCss),\n/* harmony export */   parseMarkdownToJSX: () => (/* binding */ parseMarkdownToJSX)\n/* harmony export */ });\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ \"(action-browser)/./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(action-browser)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n// src/parser.ts\n\n\n// src/styles.ts\nvar emptyStyle = {};\nvar baseHeaderStyles = {\n  fontWeight: \"500\",\n  paddingTop: 20\n};\nvar h1 = {\n  ...baseHeaderStyles,\n  fontSize: \"2.5rem\"\n};\nvar h2 = {\n  ...baseHeaderStyles,\n  fontSize: \"2rem\"\n};\nvar h3 = {\n  ...baseHeaderStyles,\n  fontSize: \"1.75rem\"\n};\nvar h4 = {\n  ...baseHeaderStyles,\n  fontSize: \"1.5rem\"\n};\nvar h5 = {\n  ...baseHeaderStyles,\n  fontSize: \"1.25rem\"\n};\nvar h6 = {\n  ...baseHeaderStyles,\n  fontSize: \"1rem\"\n};\nvar bold = {\n  fontWeight: \"bold\"\n};\nvar italic = {\n  fontStyle: \"italic\"\n};\nvar blockQuote = {\n  background: \"#f9f9f9\",\n  borderLeft: \"10px solid #ccc\",\n  margin: \"1.5em 10px\",\n  padding: \"1em 10px\"\n};\nvar codeInline = {\n  color: \"#212529\",\n  fontSize: \"87.5%\",\n  display: \"inline\",\n  background: \" #f8f8f8\",\n  fontFamily: `SFMono-Regular,Menlo,Monaco,Consolas,monospace`\n};\nvar codeBlock = {\n  ...codeInline,\n  paddingTop: 10,\n  paddingRight: 10,\n  paddingLeft: 10,\n  paddingBottom: 1,\n  marginBottom: 20,\n  background: \" #f8f8f8\"\n};\nvar link = {\n  color: \"#007bff\",\n  textDecoration: \"underline\",\n  backgroundColor: \"transparent\"\n};\nvar styles = {\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  blockQuote,\n  bold,\n  italic,\n  link,\n  codeBlock: { ...codeBlock, wordWrap: \"break-word\" },\n  codeInline: { ...codeInline, wordWrap: \"break-word\" },\n  p: emptyStyle,\n  li: emptyStyle,\n  ul: emptyStyle,\n  ol: emptyStyle,\n  image: emptyStyle,\n  br: emptyStyle,\n  hr: emptyStyle,\n  table: emptyStyle,\n  thead: emptyStyle,\n  tbody: emptyStyle,\n  th: emptyStyle,\n  td: emptyStyle,\n  tr: emptyStyle,\n  strikethrough: emptyStyle\n};\n\n// src/utils.ts\nfunction escapeQuotes(value) {\n  if (value.includes('\"')) {\n    return value.replace(/\"/g, \"&#x27;\");\n  }\n  return value;\n}\nfunction camelToKebabCase(str) {\n  return str.replace(/([a-z0-9])([A-Z])/g, \"$1-$2\").toLowerCase();\n}\nfunction parseCssInJsToInlineCss(cssProperties) {\n  if (!cssProperties)\n    return \"\";\n  const numericalCssProperties = [\n    \"width\",\n    \"height\",\n    \"margin\",\n    \"marginTop\",\n    \"marginRight\",\n    \"marginBottom\",\n    \"marginLeft\",\n    \"padding\",\n    \"paddingTop\",\n    \"paddingRight\",\n    \"paddingBottom\",\n    \"paddingLeft\",\n    \"borderWidth\",\n    \"borderTopWidth\",\n    \"borderRightWidth\",\n    \"borderBottomWidth\",\n    \"borderLeftWidth\",\n    \"outlineWidth\",\n    \"top\",\n    \"right\",\n    \"bottom\",\n    \"left\",\n    \"fontSize\",\n    \"lineHeight\",\n    \"letterSpacing\",\n    \"wordSpacing\",\n    \"maxWidth\",\n    \"minWidth\",\n    \"maxHeight\",\n    \"minHeight\",\n    \"borderRadius\",\n    \"borderTopLeftRadius\",\n    \"borderTopRightRadius\",\n    \"borderBottomLeftRadius\",\n    \"borderBottomRightRadius\",\n    \"textIndent\",\n    \"gridColumnGap\",\n    \"gridRowGap\",\n    \"gridGap\",\n    \"translateX\",\n    \"translateY\"\n  ];\n  return Object.entries(cssProperties).map(([property, value]) => {\n    if (typeof value === \"number\" && numericalCssProperties.includes(property)) {\n      return `${camelToKebabCase(property)}:${value}px`;\n    } else {\n      const escapedValue = escapeQuotes(value);\n      return `${camelToKebabCase(property)}:${escapedValue}`;\n    }\n  }).join(\";\");\n}\nvar initRenderer = ({\n  customStyles\n}) => {\n  const finalStyles = { ...styles, ...customStyles };\n  const customRenderer = {\n    blockquote(quote) {\n      return `<blockquote${parseCssInJsToInlineCss(finalStyles.blockQuote) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.blockQuote)}\"` : \"\"}>\n${quote}</blockquote>\n`;\n    },\n    br() {\n      return `<br${parseCssInJsToInlineCss(finalStyles.br) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.br)}\"` : \"\"} />`;\n    },\n    code(code) {\n      code = code.replace(/\\n$/, \"\") + \"\\n\";\n      return `<pre${parseCssInJsToInlineCss(finalStyles.codeBlock) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.codeBlock)}\"` : \"\"}><code>${code}</code></pre>\n`;\n    },\n    codespan(text) {\n      return `<code${parseCssInJsToInlineCss(finalStyles.codeInline) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.codeInline)}\"` : \"\"}>${text}</code>`;\n    },\n    del(text) {\n      return `<del${parseCssInJsToInlineCss(finalStyles.strikethrough) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.strikethrough)}\"` : \"\"}>${text}</del>`;\n    },\n    em(text) {\n      return `<em${parseCssInJsToInlineCss(finalStyles.italic) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.italic)}\"` : \"\"}>${text}</em>`;\n    },\n    heading(text, level) {\n      return `<h${level}${parseCssInJsToInlineCss(\n        finalStyles[`h${level}`]\n      ) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(\n        finalStyles[`h${level}`]\n      )}\"` : \"\"}>${text}</h${level}>`;\n    },\n    hr() {\n      return `<hr${parseCssInJsToInlineCss(finalStyles.hr) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.hr)}\"` : \"\"} />\n`;\n    },\n    image(href, _, text) {\n      let out = `<img src=\"${href}\" alt=\"${text}\"${parseCssInJsToInlineCss(finalStyles.image) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.image)}\"` : \"\"}>`;\n      return out;\n    },\n    link(href, _, text) {\n      let out = `<a href=\"${href}\" target=\"_blank\"${parseCssInJsToInlineCss(finalStyles.link) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.link)}\"` : \"\"}>${text}</a>`;\n      return out;\n    },\n    list(body, ordered, start) {\n      const type = ordered ? \"ol\" : \"ul\";\n      const startatt = ordered && start !== 1 ? ' start=\"' + start + '\"' : \"\";\n      const styles2 = parseCssInJsToInlineCss(\n        finalStyles[ordered ? \"ol\" : \"ul\"]\n      );\n      return \"<\" + type + startatt + `${styles2 !== \"\" ? ` style=\"${styles2}\"` : \"\"}>\n` + body + \"</\" + type + \">\\n\";\n    },\n    listitem(text) {\n      return `<li${parseCssInJsToInlineCss(finalStyles.li) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.li)}\"` : \"\"}>${text}</li>\n`;\n    },\n    paragraph(text) {\n      return `<p${parseCssInJsToInlineCss(finalStyles.p) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.p)}\"` : \"\"}>${text}</p>\n`;\n    },\n    strong(text) {\n      return `<strong${parseCssInJsToInlineCss(finalStyles.bold) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.bold)}\"` : \"\"}>${text}</strong>`;\n    },\n    table(header, body) {\n      if (body)\n        body = `<tbody>${body}</tbody>`;\n      return `<table${parseCssInJsToInlineCss(finalStyles.table) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.table)}\"` : \"\"}>\n<thead${parseCssInJsToInlineCss(finalStyles.thead) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.thead)}\"` : \"\"}>\n${header}</thead>\n${body}</table>\n`;\n    },\n    tablecell(content, flags) {\n      const type = flags.header ? \"th\" : \"td\";\n      const tag = flags.align ? `<${type} align=\"${flags.align}\"${parseCssInJsToInlineCss(finalStyles.td) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.td)}\"` : \"\"}>` : `<${type}${parseCssInJsToInlineCss(finalStyles.td) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.td)}\"` : \"\"}>`;\n      return tag + content + `</${type}>\n`;\n    },\n    tablerow(content) {\n      return `<tr${parseCssInJsToInlineCss(finalStyles.tr) !== \"\" ? ` style=\"${parseCssInJsToInlineCss(finalStyles.tr)}\"` : \"\"}>\n${content}</tr>\n`;\n    }\n  };\n  return customRenderer;\n};\n\n// src/parser.ts\nvar MarkdownParser = class {\n  renderer;\n  constructor({ customStyles }) {\n    this.renderer = initRenderer({ customStyles });\n  }\n  parse(markdown) {\n    marked__WEBPACK_IMPORTED_MODULE_0__.marked.use({\n      renderer: this.renderer\n    });\n    return marked__WEBPACK_IMPORTED_MODULE_0__.marked.parse(markdown);\n  }\n};\n\n// src/parseMarkdownToJSX.ts\nvar parseMarkdownToJSX = ({\n  markdown,\n  customStyles\n}) => {\n  const parser = new MarkdownParser({ customStyles });\n  return parser.parse(markdown);\n};\n\n// src/components/emailMarkdown.tsx\n\nvar EmailMarkdown = ({\n  markdown,\n  markdownCustomStyles,\n  markdownContainerStyles\n}) => {\n  const parsedMarkdown = parseMarkdownToJSX({\n    markdown,\n    customStyles: markdownCustomStyles\n  });\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(\n    \"div\",\n    {\n      style: markdownContainerStyles,\n      dangerouslySetInnerHTML: { __html: parsedMarkdown }\n    }\n  );\n};\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9tZC10by1yZWFjdC1lbWFpbC9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0NBQXNDO0FBQ3JELGdCQUFnQix1Q0FBdUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dC9pbmRleC5tanM/MDQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFyc2VyLnRzXG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tIFwibWFya2VkXCI7XG5cbi8vIHNyYy9zdHlsZXMudHNcbnZhciBlbXB0eVN0eWxlID0ge307XG52YXIgYmFzZUhlYWRlclN0eWxlcyA9IHtcbiAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgcGFkZGluZ1RvcDogMjBcbn07XG52YXIgaDEgPSB7XG4gIC4uLmJhc2VIZWFkZXJTdHlsZXMsXG4gIGZvbnRTaXplOiBcIjIuNXJlbVwiXG59O1xudmFyIGgyID0ge1xuICAuLi5iYXNlSGVhZGVyU3R5bGVzLFxuICBmb250U2l6ZTogXCIycmVtXCJcbn07XG52YXIgaDMgPSB7XG4gIC4uLmJhc2VIZWFkZXJTdHlsZXMsXG4gIGZvbnRTaXplOiBcIjEuNzVyZW1cIlxufTtcbnZhciBoNCA9IHtcbiAgLi4uYmFzZUhlYWRlclN0eWxlcyxcbiAgZm9udFNpemU6IFwiMS41cmVtXCJcbn07XG52YXIgaDUgPSB7XG4gIC4uLmJhc2VIZWFkZXJTdHlsZXMsXG4gIGZvbnRTaXplOiBcIjEuMjVyZW1cIlxufTtcbnZhciBoNiA9IHtcbiAgLi4uYmFzZUhlYWRlclN0eWxlcyxcbiAgZm9udFNpemU6IFwiMXJlbVwiXG59O1xudmFyIGJvbGQgPSB7XG4gIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG59O1xudmFyIGl0YWxpYyA9IHtcbiAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG59O1xudmFyIGJsb2NrUXVvdGUgPSB7XG4gIGJhY2tncm91bmQ6IFwiI2Y5ZjlmOVwiLFxuICBib3JkZXJMZWZ0OiBcIjEwcHggc29saWQgI2NjY1wiLFxuICBtYXJnaW46IFwiMS41ZW0gMTBweFwiLFxuICBwYWRkaW5nOiBcIjFlbSAxMHB4XCJcbn07XG52YXIgY29kZUlubGluZSA9IHtcbiAgY29sb3I6IFwiIzIxMjUyOVwiLFxuICBmb250U2l6ZTogXCI4Ny41JVwiLFxuICBkaXNwbGF5OiBcImlubGluZVwiLFxuICBiYWNrZ3JvdW5kOiBcIiAjZjhmOGY4XCIsXG4gIGZvbnRGYW1pbHk6IGBTRk1vbm8tUmVndWxhcixNZW5sbyxNb25hY28sQ29uc29sYXMsbW9ub3NwYWNlYFxufTtcbnZhciBjb2RlQmxvY2sgPSB7XG4gIC4uLmNvZGVJbmxpbmUsXG4gIHBhZGRpbmdUb3A6IDEwLFxuICBwYWRkaW5nUmlnaHQ6IDEwLFxuICBwYWRkaW5nTGVmdDogMTAsXG4gIHBhZGRpbmdCb3R0b206IDEsXG4gIG1hcmdpbkJvdHRvbTogMjAsXG4gIGJhY2tncm91bmQ6IFwiICNmOGY4ZjhcIlxufTtcbnZhciBsaW5rID0ge1xuICBjb2xvcjogXCIjMDA3YmZmXCIsXG4gIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIlxufTtcbnZhciBzdHlsZXMgPSB7XG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYsXG4gIGJsb2NrUXVvdGUsXG4gIGJvbGQsXG4gIGl0YWxpYyxcbiAgbGluayxcbiAgY29kZUJsb2NrOiB7IC4uLmNvZGVCbG9jaywgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiIH0sXG4gIGNvZGVJbmxpbmU6IHsgLi4uY29kZUlubGluZSwgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiIH0sXG4gIHA6IGVtcHR5U3R5bGUsXG4gIGxpOiBlbXB0eVN0eWxlLFxuICB1bDogZW1wdHlTdHlsZSxcbiAgb2w6IGVtcHR5U3R5bGUsXG4gIGltYWdlOiBlbXB0eVN0eWxlLFxuICBicjogZW1wdHlTdHlsZSxcbiAgaHI6IGVtcHR5U3R5bGUsXG4gIHRhYmxlOiBlbXB0eVN0eWxlLFxuICB0aGVhZDogZW1wdHlTdHlsZSxcbiAgdGJvZHk6IGVtcHR5U3R5bGUsXG4gIHRoOiBlbXB0eVN0eWxlLFxuICB0ZDogZW1wdHlTdHlsZSxcbiAgdHI6IGVtcHR5U3R5bGUsXG4gIHN0cmlrZXRocm91Z2g6IGVtcHR5U3R5bGVcbn07XG5cbi8vIHNyYy91dGlscy50c1xuZnVuY3Rpb24gZXNjYXBlUXVvdGVzKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5pbmNsdWRlcygnXCInKSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cIi9nLCBcIiYjeDI3O1wiKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjYW1lbFRvS2ViYWJDYXNlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHBhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGNzc1Byb3BlcnRpZXMpIHtcbiAgaWYgKCFjc3NQcm9wZXJ0aWVzKVxuICAgIHJldHVybiBcIlwiO1xuICBjb25zdCBudW1lcmljYWxDc3NQcm9wZXJ0aWVzID0gW1xuICAgIFwid2lkdGhcIixcbiAgICBcImhlaWdodFwiLFxuICAgIFwibWFyZ2luXCIsXG4gICAgXCJtYXJnaW5Ub3BcIixcbiAgICBcIm1hcmdpblJpZ2h0XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIixcbiAgICBcIm1hcmdpbkxlZnRcIixcbiAgICBcInBhZGRpbmdcIixcbiAgICBcInBhZGRpbmdUb3BcIixcbiAgICBcInBhZGRpbmdSaWdodFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiLFxuICAgIFwicGFkZGluZ0xlZnRcIixcbiAgICBcImJvcmRlcldpZHRoXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiLFxuICAgIFwib3V0bGluZVdpZHRoXCIsXG4gICAgXCJ0b3BcIixcbiAgICBcInJpZ2h0XCIsXG4gICAgXCJib3R0b21cIixcbiAgICBcImxlZnRcIixcbiAgICBcImZvbnRTaXplXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCIsXG4gICAgXCJsZXR0ZXJTcGFjaW5nXCIsXG4gICAgXCJ3b3JkU3BhY2luZ1wiLFxuICAgIFwibWF4V2lkdGhcIixcbiAgICBcIm1pbldpZHRoXCIsXG4gICAgXCJtYXhIZWlnaHRcIixcbiAgICBcIm1pbkhlaWdodFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiLFxuICAgIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcbiAgICBcInRleHRJbmRlbnRcIixcbiAgICBcImdyaWRDb2x1bW5HYXBcIixcbiAgICBcImdyaWRSb3dHYXBcIixcbiAgICBcImdyaWRHYXBcIixcbiAgICBcInRyYW5zbGF0ZVhcIixcbiAgICBcInRyYW5zbGF0ZVlcIlxuICBdO1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY3NzUHJvcGVydGllcykubWFwKChbcHJvcGVydHksIHZhbHVlXSkgPT4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgbnVtZXJpY2FsQ3NzUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eSkpIHtcbiAgICAgIHJldHVybiBgJHtjYW1lbFRvS2ViYWJDYXNlKHByb3BlcnR5KX06JHt2YWx1ZX1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IGVzY2FwZVF1b3Rlcyh2YWx1ZSk7XG4gICAgICByZXR1cm4gYCR7Y2FtZWxUb0tlYmFiQ2FzZShwcm9wZXJ0eSl9OiR7ZXNjYXBlZFZhbHVlfWA7XG4gICAgfVxuICB9KS5qb2luKFwiO1wiKTtcbn1cbnZhciBpbml0UmVuZGVyZXIgPSAoe1xuICBjdXN0b21TdHlsZXNcbn0pID0+IHtcbiAgY29uc3QgZmluYWxTdHlsZXMgPSB7IC4uLnN0eWxlcywgLi4uY3VzdG9tU3R5bGVzIH07XG4gIGNvbnN0IGN1c3RvbVJlbmRlcmVyID0ge1xuICAgIGJsb2NrcXVvdGUocXVvdGUpIHtcbiAgICAgIHJldHVybiBgPGJsb2NrcXVvdGUke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLmJsb2NrUXVvdGUpICE9PSBcIlwiID8gYCBzdHlsZT1cIiR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMuYmxvY2tRdW90ZSl9XCJgIDogXCJcIn0+XG4ke3F1b3RlfTwvYmxvY2txdW90ZT5cbmA7XG4gICAgfSxcbiAgICBicigpIHtcbiAgICAgIHJldHVybiBgPGJyJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5icikgIT09IFwiXCIgPyBgIHN0eWxlPVwiJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5icil9XCJgIDogXCJcIn0gLz5gO1xuICAgIH0sXG4gICAgY29kZShjb2RlKSB7XG4gICAgICBjb2RlID0gY29kZS5yZXBsYWNlKC9cXG4kLywgXCJcIikgKyBcIlxcblwiO1xuICAgICAgcmV0dXJuIGA8cHJlJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5jb2RlQmxvY2spICE9PSBcIlwiID8gYCBzdHlsZT1cIiR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMuY29kZUJsb2NrKX1cImAgOiBcIlwifT48Y29kZT4ke2NvZGV9PC9jb2RlPjwvcHJlPlxuYDtcbiAgICB9LFxuICAgIGNvZGVzcGFuKHRleHQpIHtcbiAgICAgIHJldHVybiBgPGNvZGUke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLmNvZGVJbmxpbmUpICE9PSBcIlwiID8gYCBzdHlsZT1cIiR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMuY29kZUlubGluZSl9XCJgIDogXCJcIn0+JHt0ZXh0fTwvY29kZT5gO1xuICAgIH0sXG4gICAgZGVsKHRleHQpIHtcbiAgICAgIHJldHVybiBgPGRlbCR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMuc3RyaWtldGhyb3VnaCkgIT09IFwiXCIgPyBgIHN0eWxlPVwiJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5zdHJpa2V0aHJvdWdoKX1cImAgOiBcIlwifT4ke3RleHR9PC9kZWw+YDtcbiAgICB9LFxuICAgIGVtKHRleHQpIHtcbiAgICAgIHJldHVybiBgPGVtJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5pdGFsaWMpICE9PSBcIlwiID8gYCBzdHlsZT1cIiR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMuaXRhbGljKX1cImAgOiBcIlwifT4ke3RleHR9PC9lbT5gO1xuICAgIH0sXG4gICAgaGVhZGluZyh0ZXh0LCBsZXZlbCkge1xuICAgICAgcmV0dXJuIGA8aCR7bGV2ZWx9JHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhcbiAgICAgICAgZmluYWxTdHlsZXNbYGgke2xldmVsfWBdXG4gICAgICApICE9PSBcIlwiID8gYCBzdHlsZT1cIiR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoXG4gICAgICAgIGZpbmFsU3R5bGVzW2BoJHtsZXZlbH1gXVxuICAgICAgKX1cImAgOiBcIlwifT4ke3RleHR9PC9oJHtsZXZlbH0+YDtcbiAgICB9LFxuICAgIGhyKCkge1xuICAgICAgcmV0dXJuIGA8aHIke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLmhyKSAhPT0gXCJcIiA/IGAgc3R5bGU9XCIke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLmhyKX1cImAgOiBcIlwifSAvPlxuYDtcbiAgICB9LFxuICAgIGltYWdlKGhyZWYsIF8sIHRleHQpIHtcbiAgICAgIGxldCBvdXQgPSBgPGltZyBzcmM9XCIke2hyZWZ9XCIgYWx0PVwiJHt0ZXh0fVwiJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5pbWFnZSkgIT09IFwiXCIgPyBgIHN0eWxlPVwiJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5pbWFnZSl9XCJgIDogXCJcIn0+YDtcbiAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcbiAgICBsaW5rKGhyZWYsIF8sIHRleHQpIHtcbiAgICAgIGxldCBvdXQgPSBgPGEgaHJlZj1cIiR7aHJlZn1cIiB0YXJnZXQ9XCJfYmxhbmtcIiR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMubGluaykgIT09IFwiXCIgPyBgIHN0eWxlPVwiJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5saW5rKX1cImAgOiBcIlwifT4ke3RleHR9PC9hPmA7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG4gICAgbGlzdChib2R5LCBvcmRlcmVkLCBzdGFydCkge1xuICAgICAgY29uc3QgdHlwZSA9IG9yZGVyZWQgPyBcIm9sXCIgOiBcInVsXCI7XG4gICAgICBjb25zdCBzdGFydGF0dCA9IG9yZGVyZWQgJiYgc3RhcnQgIT09IDEgPyAnIHN0YXJ0PVwiJyArIHN0YXJ0ICsgJ1wiJyA6IFwiXCI7XG4gICAgICBjb25zdCBzdHlsZXMyID0gcGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoXG4gICAgICAgIGZpbmFsU3R5bGVzW29yZGVyZWQgPyBcIm9sXCIgOiBcInVsXCJdXG4gICAgICApO1xuICAgICAgcmV0dXJuIFwiPFwiICsgdHlwZSArIHN0YXJ0YXR0ICsgYCR7c3R5bGVzMiAhPT0gXCJcIiA/IGAgc3R5bGU9XCIke3N0eWxlczJ9XCJgIDogXCJcIn0+XG5gICsgYm9keSArIFwiPC9cIiArIHR5cGUgKyBcIj5cXG5cIjtcbiAgICB9LFxuICAgIGxpc3RpdGVtKHRleHQpIHtcbiAgICAgIHJldHVybiBgPGxpJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5saSkgIT09IFwiXCIgPyBgIHN0eWxlPVwiJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5saSl9XCJgIDogXCJcIn0+JHt0ZXh0fTwvbGk+XG5gO1xuICAgIH0sXG4gICAgcGFyYWdyYXBoKHRleHQpIHtcbiAgICAgIHJldHVybiBgPHAke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLnApICE9PSBcIlwiID8gYCBzdHlsZT1cIiR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMucCl9XCJgIDogXCJcIn0+JHt0ZXh0fTwvcD5cbmA7XG4gICAgfSxcbiAgICBzdHJvbmcodGV4dCkge1xuICAgICAgcmV0dXJuIGA8c3Ryb25nJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy5ib2xkKSAhPT0gXCJcIiA/IGAgc3R5bGU9XCIke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLmJvbGQpfVwiYCA6IFwiXCJ9PiR7dGV4dH08L3N0cm9uZz5gO1xuICAgIH0sXG4gICAgdGFibGUoaGVhZGVyLCBib2R5KSB7XG4gICAgICBpZiAoYm9keSlcbiAgICAgICAgYm9keSA9IGA8dGJvZHk+JHtib2R5fTwvdGJvZHk+YDtcbiAgICAgIHJldHVybiBgPHRhYmxlJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy50YWJsZSkgIT09IFwiXCIgPyBgIHN0eWxlPVwiJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy50YWJsZSl9XCJgIDogXCJcIn0+XG48dGhlYWQke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLnRoZWFkKSAhPT0gXCJcIiA/IGAgc3R5bGU9XCIke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLnRoZWFkKX1cImAgOiBcIlwifT5cbiR7aGVhZGVyfTwvdGhlYWQ+XG4ke2JvZHl9PC90YWJsZT5cbmA7XG4gICAgfSxcbiAgICB0YWJsZWNlbGwoY29udGVudCwgZmxhZ3MpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmbGFncy5oZWFkZXIgPyBcInRoXCIgOiBcInRkXCI7XG4gICAgICBjb25zdCB0YWcgPSBmbGFncy5hbGlnbiA/IGA8JHt0eXBlfSBhbGlnbj1cIiR7ZmxhZ3MuYWxpZ259XCIke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLnRkKSAhPT0gXCJcIiA/IGAgc3R5bGU9XCIke3BhcnNlQ3NzSW5Kc1RvSW5saW5lQ3NzKGZpbmFsU3R5bGVzLnRkKX1cImAgOiBcIlwifT5gIDogYDwke3R5cGV9JHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy50ZCkgIT09IFwiXCIgPyBgIHN0eWxlPVwiJHtwYXJzZUNzc0luSnNUb0lubGluZUNzcyhmaW5hbFN0eWxlcy50ZCl9XCJgIDogXCJcIn0+YDtcbiAgICAgIHJldHVybiB0YWcgKyBjb250ZW50ICsgYDwvJHt0eXBlfT5cbmA7XG4gICAgfSxcbiAgICB0YWJsZXJvdyhjb250ZW50KSB7XG4gICAgICByZXR1cm4gYDx0ciR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMudHIpICE9PSBcIlwiID8gYCBzdHlsZT1cIiR7cGFyc2VDc3NJbkpzVG9JbmxpbmVDc3MoZmluYWxTdHlsZXMudHIpfVwiYCA6IFwiXCJ9PlxuJHtjb250ZW50fTwvdHI+XG5gO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGN1c3RvbVJlbmRlcmVyO1xufTtcblxuLy8gc3JjL3BhcnNlci50c1xudmFyIE1hcmtkb3duUGFyc2VyID0gY2xhc3Mge1xuICByZW5kZXJlcjtcbiAgY29uc3RydWN0b3IoeyBjdXN0b21TdHlsZXMgfSkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBpbml0UmVuZGVyZXIoeyBjdXN0b21TdHlsZXMgfSk7XG4gIH1cbiAgcGFyc2UobWFya2Rvd24pIHtcbiAgICBtYXJrZWQudXNlKHtcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyXG4gICAgfSk7XG4gICAgcmV0dXJuIG1hcmtlZC5wYXJzZShtYXJrZG93bik7XG4gIH1cbn07XG5cbi8vIHNyYy9wYXJzZU1hcmtkb3duVG9KU1gudHNcbnZhciBwYXJzZU1hcmtkb3duVG9KU1ggPSAoe1xuICBtYXJrZG93bixcbiAgY3VzdG9tU3R5bGVzXG59KSA9PiB7XG4gIGNvbnN0IHBhcnNlciA9IG5ldyBNYXJrZG93blBhcnNlcih7IGN1c3RvbVN0eWxlcyB9KTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZShtYXJrZG93bik7XG59O1xuXG4vLyBzcmMvY29tcG9uZW50cy9lbWFpbE1hcmtkb3duLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG52YXIgRW1haWxNYXJrZG93biA9ICh7XG4gIG1hcmtkb3duLFxuICBtYXJrZG93bkN1c3RvbVN0eWxlcyxcbiAgbWFya2Rvd25Db250YWluZXJTdHlsZXNcbn0pID0+IHtcbiAgY29uc3QgcGFyc2VkTWFya2Rvd24gPSBwYXJzZU1hcmtkb3duVG9KU1goe1xuICAgIG1hcmtkb3duLFxuICAgIGN1c3RvbVN0eWxlczogbWFya2Rvd25DdXN0b21TdHlsZXNcbiAgfSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0eWxlOiBtYXJrZG93bkNvbnRhaW5lclN0eWxlcyxcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7IF9faHRtbDogcGFyc2VkTWFya2Rvd24gfVxuICAgIH1cbiAgKTtcbn07XG5leHBvcnQge1xuICBFbWFpbE1hcmtkb3duLFxuICBjYW1lbFRvS2ViYWJDYXNlLFxuICBwYXJzZUNzc0luSnNUb0lubGluZUNzcyxcbiAgcGFyc2VNYXJrZG93blRvSlNYXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/md-to-react-email/dist/index.mjs\n");

/***/ })

};
;