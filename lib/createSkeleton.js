const fs = require('fs-extra');
const path = require('path');

async function copyTemplate(dest) {
  const templateDir = path.join(__dirname, '..', 'templates');

  try {
    await fs.copy(templateDir, dest);
    console.log(`Template copied to ${dest}`);
  } catch (err) {
    console.error('Error copying template:', err);
  }
}

module.exports = { copyTemplate };
