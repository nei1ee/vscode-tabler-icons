import { resolve } from 'path'
import fs from 'fs-extra'
import { parse as YAMLParser } from 'yaml'
import pkg from '../package.json'
import type { Codicon, IconSet } from './types'

const icons = YAMLParser(fs.readFileSync(resolve(__dirname, 'icons.yaml'), 'utf-8')) as Partial<Record<Codicon, string>>

const set: IconSet = {
  name: 'tabler-icons',
  display: 'Tabler Icons',
  icons,
}

async function build() {
  const tags = fs.readJSONSync(resolve(__dirname, '../node_modules/@tabler/icons/tags.json'), 'utf-8')

  const name = set.name
  const displayName = set.display

  fs.removeSync('temp')
  fs.ensureDirSync('temp/dist')
  fs.ensureDirSync('temp/icons')

  fs.ensureDirSync('build')
  fs.emptyDirSync('build')

  const icons = Object.entries(set.icons).map(([k, v]) => {
    v = v || k
    k = k.replace('codicon:', '')
    const [, name] = v.split(':')

    const iconPath = resolve(__dirname, `../node_modules/@tabler/icons/icons/${name}.svg`)
    fs.copyFileSync(iconPath, `temp/icons/${k}.svg`)
    return [k, name]
  })
  const webFontPath = resolve(__dirname, '../node_modules/@tabler/icons-webfont/fonts/')

  fs.copySync(webFontPath, 'temp/dist/')

  fs.copyFileSync(`./temp/dist/${name}.woff`, `build/${name}.woff`)

  fs.writeJSONSync(
    `build/${name}.json`,
    {
      fonts: [
        {
          id: name,
          src: [
            {
              path: `./${name}.woff`,
              format: 'woff',
            },
          ],
          weight: 'normal',
          style: 'normal',
        },
      ],

      iconDefinitions: Object.fromEntries(icons.map(([k, name], _) => [k, { fontCharacter: `\\${tags[name].unicode}` }])),
    },
    { spaces: 2 },
  )

  fs.writeJSONSync(
    'build/package.json',
    {
      name,
      publisher: 'zguolee',
      version: pkg.version,
      displayName: `${displayName} Product Icons`,
      description: `${displayName} Product Icons for VS Code`,
      icon: 'icon.png',
      categories: ['Themes'],
      engines: {
        vscode: pkg.engines.vscode,
      },
      license: 'MIT',
      keywords: ['icon', 'theme', 'product', 'product-icon-theme'],
      extensionKind: ['ui'],
      contributes: {
        productIconThemes: [
          {
            id: name,
            label: `${displayName} Icons`,
            path: `./${name}.json`,
          },
        ],
      },
      repository: {
        type: 'git',
        url: 'https://github.com/zguolee/vscode-tabler-icons.git',
      },
      bugs: {
        url: 'https://github.com/zguolee/vscode-tabler-icons/issues',
      },
      author: {
        name: 'Neil Lee',
      },
    },
    { spaces: 2 },
  )

  fs.copySync('README.md', 'build/README.md')
  fs.copySync('icon.png', 'build/icon.png')
  fs.copySync('LICENSE', 'build/LICENSE')
}

build()
