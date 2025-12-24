import type { IDS } from './types'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
// @ts-expect-error missing types
import SVGFixer from 'oslllo-svg-fixer'
import svgtofont from 'svgtofont'
import pkg from '../package.json'

import { DISPLAY_NAME, NAME } from './constants'
import { set } from './set'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const TABLER_ICONS_PATH = resolve(__dirname, '../node_modules/@tabler/icons')

async function theme() {
  fs.removeSync('temp')
  fs.ensureDirSync('temp/dist')
  fs.ensureDirSync('temp/icons')
  fs.ensureDirSync('theme')
  fs.emptyDirSync('theme')

  const icons = new Set<string>()

  for (const [_, v] of Object.entries(set.icons)) {
    const [, name] = v.split(':')
    if (icons.has(name)) {
      continue
    }
    icons.add(name)
    let svgPath = resolve(TABLER_ICONS_PATH, 'icons', 'outline', `${name}.svg`)
    if (name.endsWith('-filled')) {
      svgPath = resolve(TABLER_ICONS_PATH, 'icons', 'filled', `${name.replace('-filled', '')}.svg`)
    }
    let content = fs.readFileSync(svgPath, 'utf-8')
    content = content.replace('stroke-width="2"', `stroke-width="1.5"`)
    if (['point-filled', 'replace-filled'].includes(name)) {
      content = content.replace('<path stroke="none" d="M0 0h24v24H0z" fill="none"/>', '')
    }
    fs.writeFileSync(`temp/icons/${name}.svg`, content, 'utf-8')
  }

  await SVGFixer('temp/icons', `temp/icons`, { showProgressBar: true, throwIfDestinationDoesNotExist: false }).fix()
  await svgtofont({
    src: './temp/icons',
    dist: './temp/dist',
    fontName: NAME,
    css: false,
    generateInfoData: true,
    svgicons2svgfont: {
      fontName: NAME,
      fontHeight: 1000,
      normalize: true,
    },
    svgoOptions: {
      multipass: true,
    },
  })
  fs.copyFileSync(`./temp/dist/${NAME}.woff`, `theme/${NAME}.woff`)

  const infos = fs.readJSONSync('./temp/dist/info.json') as Record<IDS, { encodedCode: number }>

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
      iconDefinitions: Object.fromEntries(
        Object.entries(set.icons).map(([k, v]) => {
          const [, name] = k.split(':')
          const [, icon] = v.split(':')
          const info = infos[icon as IDS]
          if (!info) {
            throw new Error(`Icon not found: ${name}`)
          }
          return [
            name,
            {
              fontCharacter: info.encodedCode,
              fontId: NAME,
            },
          ]
        }),
      ),
    },
    { spaces: 2 },
  )

  fs.writeJSONSync(
    'theme/package.json',
    {
      publisher: 'nei1ee',
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
        url: 'https://github.com/nei1ee/vscode-tabler-icons.git',
      },
      bugs: {
        url: 'https://github.com/nei1ee/vscode-tabler-icons/issues',
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
