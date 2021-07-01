/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

const { optimize, extendDefaultPlugins } = require('svgo');

const defaultOptions = [
  { name: "convertShapeToPath", active: false },
  { name: "mergePaths", active: false },
  { name: "inlineStyles", params: { onlyMatchedOnce: false } },
  { name: "removeAttrs", params: { attrs: '(fill|stroke.*)' } },
  { name: "removeTitle", active: true }
];

const optimizeSvg = (svg, options = []) => {
  return optimize(svg, {
    plugins: extendDefaultPlugins(defaultOptions.concat(options))
  })
};

module.exports = optimizeSvg;
