#!/usr/bin/env node
/*!
 * -----------
 * ASPDB®-Data
 * -----------
 * Data of ASPDB — A manually curated dedicated acid shock proteins database.
 * ___________________________________________________________________________
 *
 * CCPE ——————— Centre for Computational Protein Engineering.
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ___________________________________________________________________________
 *
 * @date      : 10-Dec-2016
 * @license   : Apache, version 2.0
 * @purpose   : To create Data System(s) with Node.js® and NPM.
 * @require   : Node.js®
 * @require   : NPM
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Data System/-- of "ASPDB®-Data".
 * ___________________________________________________________________________
 */

// global __dirname: true
// global require: true

// # Usage: $ node -v
// # Usage: $ npm -v

// Invoking strict mode.
"use strict";

// To load required Node module.
// -----------------------------
var os         = require('os');
var fs         = require('fs');
var path       = require('path');

// To load required NPM modules.
// -----------------------------
var chalk      = require('chalk');
var semver     = require('semver');

// Default color defined.
// ----------------------
var noop       = chalk.red;
var yeep       = chalk.green;
var okay       = chalk.blue;
var boop       = chalk.cyan;
var goop       = chalk.gray;

///-------------------
// An object literals.
///-------------------
var build = {
  // Non-identifier property names are quoted.
  "system"     : "SEED™",
  "name"       : "Skövde",
  "year"       : "2016",
  "audience"   : "for all scientist and computational biologist."
};

///--------------------------
// A smart stripBOM function.
///----------- 01 -----------
function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

///--------------------
// A citation of ASPDB®
///--------------------
var cite = JSON.parse(stripBOM(fs.readFileSync('./citation.json', {
  encoding: "utf8"
})));

// To get credential(s) information.
///---------------------------------
var pass  = JSON.parse(stripBOM(fs.readFileSync('./secret.json', {
  encoding: "utf8"
})));
