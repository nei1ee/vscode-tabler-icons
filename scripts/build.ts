import { resolve } from 'node:path'
import fs from 'fs-extra'
import pkg from '../package.json'
import { set } from './set'
import { DISPLAY_NAME, NAME } from './constants'

async function theme() {
  const tags = fs.readJSONSync(resolve(__dirname, '../node_modules/@tabler/icons/tags.json'), 'utf-8')

  fs.removeSync('temp')
  fs.ensureDirSync('temp/dist')
  fs.ensureDirSync('temp/icons')

  fs.ensureDirSync('theme')
  fs.emptyDirSync('theme')

  const icons = Object.entries(set.icons).map(([k, v]) => {
    v = v || k
    k = k.replace('codicon:', '')
    const [, name] = v.split(':')
    const iconPath = resolve(__dirname, `../node_modules/@tabler/icons/icons/${name}.svg`)
    if (fs.existsSync(iconPath))
      fs.copyFileSync(iconPath, `temp/icons/${k}.svg`)

    return [k, name]
  })

  const webFontPath = resolve(__dirname, '../node_modules/@tabler/icons-webfont/fonts/')

  fs.copySync(webFontPath, 'temp/dist/')

  fs.copyFileSync(`./temp/dist/${NAME}.woff`, `theme/${NAME}.woff`)

  const iconDefinitions = {}

  for (const [k, name] of icons) {
    if (tags[name]?.unicode) {
      Object.assign(iconDefinitions, {
        [k]: {
          fontCharacter: `\\${tags[name].unicode}`,
        },
      })
    }
  }

  fs.writeJSONSync(
    `theme/${NAME}.json`,
    {
      fonts: [
        {
          id: NAME,
          src: [
            {
              path: `./${NAME}.woff`,
              format: 'woff',
            },
          ],
          weight: 'normal',
          style: 'normal',
        },
      ],
      iconDefinitions,
    },
    { spaces: 2 },
  )

  fs.writeJSONSync(
    'theme/package.json',
    {
      publisher: 'zguolee',
      name: NAME,
      displayName: `${DISPLAY_NAME} Product Icons`,
      version: pkg.version,
      description: `${DISPLAY_NAME} Product Icons for VS Code`,
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
            id: DISPLAY_NAME,
            label: `${DISPLAY_NAME} Icons`,
            path: `./${NAME}.json`,
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

  fs.copySync('README.md', 'theme/README.md')
  fs.copySync('icon.png', 'theme/icon.png')
  fs.copySync('LICENSE', 'theme/LICENSE')
}

theme()
