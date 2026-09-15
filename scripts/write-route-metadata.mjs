import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
const routes = JSON.parse(await readFile('src/routeMetadata.json', 'utf8'));
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const [path, data] of Object.entries(routes)) {
  const url = `https://adasilva.ca${path}`;
  const image = `https://adasilva.ca${data.image}`;
  const tags = [
    `<title>${escape(data.title)}</title>`,
    `<meta name="description" content="${escape(data.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...Object.entries({'og:title':data.title,'og:description':data.description,'og:url':url,'og:type':'website','og:image':image}).map(([key,value])=>`<meta property="${key}" content="${escape(value)}" />`),
    ...Object.entries({'twitter:card':'summary_large_image','twitter:title':data.title,'twitter:description':data.description,'twitter:image':image}).map(([key,value])=>`<meta name="${key}" content="${escape(value)}" />`)
  ].join('\n    ');
  const html = template.replace(/<title>.*?<\/title>/, tags);
  const directory = path === '/' ? 'dist' : join('dist',path.slice(1));
  await mkdir(directory,{recursive:true});
  await writeFile(join(directory,'index.html'),html);
}
console.log(`Wrote metadata for ${Object.keys(routes).length} routes.`);
