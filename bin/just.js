#!/usr/bin/env node

const shelljs = require('shelljs');

// shelljs.exec("yarn add --dev vue");

const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
  spinner.color = 'yellow';
spinner.text = 'Loading rainbows';
  spinner.stop();
}, 1000);