#!/usr/bin/env node

const path = require('path');
const { copyTemplate } = require('../lib/createSkeleton');

const args = process.argv.slice(2);
const dest = args[0] || '.';

if (!dest) {
  console.error('Please specify a destination directory.');
  process.exit(1);
}

copyTemplate(dest);

// const createSkeleton = require('../lib/createSkeleton')
// const targetDir = process.argv[2] || 'new-project';

// createSkeleton(targetDir);