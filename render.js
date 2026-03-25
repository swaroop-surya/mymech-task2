import nunjucks from 'nunjucks';
import fs from 'fs';
import path from 'path';

// configure nunjucks
nunjucks.configure('src/templates', { autoescape: true });

// pages to render
const pages = ['index', 'about', 'contact'];

// output folder
const outputDir = 'dist';

// create dist if not exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// render each page
pages.forEach(page => {
  const html = nunjucks.render(`${page}.njk`, {
    title: page.toUpperCase()
  });

  fs.writeFileSync(
    path.join(outputDir, `${page}.html`),
    html
  );
});

console.log("Templates rendered successfully.");

import fsExtra from 'fs-extra';

// copy assets
fsExtra.copySync('src/assets', 'dist/assets');