import { DISPLAY_NAME, NAME } from './constants'

export type IDS =
  | 'account'
  | 'activate-breakpoints'
  | 'add'
  | 'archive'
  | 'arrow-both'
  | 'arrow-circle-down'
  | 'arrow-circle-left'
  | 'arrow-circle-right'
  | 'arrow-circle-up'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-small-down'
  | 'arrow-small-left'
  | 'arrow-small-right'
  | 'arrow-small-up'
  | 'arrow-swap'
  | 'arrow-up'
  | 'azure-devops'
  | 'azure'
  | 'beaker-stop'
  | 'beaker'
  | 'bell-dot'
  | 'bell-slash-dot'
  | 'bell-slash'
  | 'bell'
  | 'blank'
  | 'bold'
  | 'book'
  | 'bookmark'
  | 'bracket'
  | 'bracket-dot'
  | 'bracket-error'
  | 'briefcase'
  | 'broadcast'
  | 'browser'
  | 'bug'
  | 'calendar'
  | 'call-incoming'
  | 'call-outgoing'
  | 'case-sensitive'
  | 'check-all'
  | 'check'
  | 'checklist'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chrome-close'
  | 'chrome-maximize'
  | 'chrome-minimize'
  | 'chrome-restore'
  | 'clock'
  | 'circle-filled'
  | 'circle-large-filled'
  | 'circle-large'
  | 'circle-slash'
  | 'circle-small-filled'
  | 'circle-small'
  | 'circle'
  | 'circuit-board'
  | 'clear-all'
  | 'clippy'
  | 'close-all'
  | 'close'
  | 'cloud-download'
  | 'cloud-upload'
  | 'cloud'
  | 'code'
  | 'collapse-all'
  | 'collapse-close-all'
  | 'color-mode'
  | 'combine'
  | 'comment-discussion'
  | 'comment-draft'
  | 'comment-unresolved'
  | 'comment'
  | 'compare-changes'
  | 'compass-active'
  | 'compass-dot'
  | 'compass'
  | 'copy'
  | 'credit-card'
  | 'dash'
  | 'dashboard'
  | 'database'
  | 'debug-all'
  | 'debug-alt-small'
  | 'debug-alt'
  | 'debug-breakpoint-conditional-unverified'
  | 'debug-breakpoint-conditional'
  | 'debug-breakpoint-data-unverified'
  | 'debug-breakpoint-data'
  | 'debug-breakpoint-function-unverified'
  | 'debug-breakpoint-function'
  | 'debug-breakpoint-log-unverified'
  | 'debug-breakpoint-log'
  | 'debug-breakpoint-unsupported'
  | 'debug-console'
  | 'debug-continue-small'
  | 'debug-continue'
  | 'debug-coverage'
  | 'debug-disconnect'
  | 'debug-line-by-line'
  | 'debug-pause'
  | 'debug-rerun'
  | 'debug-restart-frame'
  | 'debug-restart'
  | 'debug-reverse-continue'
  | 'debug-stackframe-active'
  | 'debug-stackframe'
  | 'debug-start'
  | 'debug-step-back'
  | 'debug-step-into'
  | 'debug-step-out'
  | 'debug-step-over'
  | 'debug-stop'
  | 'debug'
  | 'desktop-download'
  | 'device-camera-video'
  | 'device-camera'
  | 'device-mobile'
  | 'diff-added'
  | 'diff-ignored'
  | 'diff-modified'
  | 'diff-multiple'
  | 'diff-removed'
  | 'diff-renamed'
  | 'diff'
  | 'discard'
  | 'drop-down-button'
  | 'edit'
  | 'editor-layout'
  | 'ellipsis'
  | 'empty-window'
  | 'error-small'
  | 'error'
  | 'exclude'
  | 'expand-all'
  | 'export'
  | 'extensions'
  | 'eye-closed'
  | 'eye'
  | 'feedback'
  | 'file-binary'
  | 'file-code'
  | 'file-media'
  | 'file-pdf'
  | 'file-submodule'
  | 'file-symlink-directory'
  | 'file-symlink-file'
  | 'file-zip'
  | 'file'
  | 'files'
  | 'filter-filled'
  | 'filter'
  | 'find-selection'
  | 'flame'
  | 'fold-down'
  | 'fold-up'
  | 'fold'
  | 'folder-active'
  | 'folder-library'
  | 'folder-opened'
  | 'folder'
  | 'gear'
  | 'gift'
  | 'gist-secret'
  | 'git-branch'
  | 'git-commit'
  | 'git-compare'
  | 'git-merge'
  | 'git-pull-request-closed'
  | 'git-pull-request-create'
  | 'git-pull-request-draft'
  | 'git-pull-request-go-to-changes'
  | 'git-pull-request-new-changes'
  | 'git-pull-request'
  | 'github-action'
  | 'github-alt'
  | 'github-inverted'
  | 'github'
  | 'gitlens-gitlens'
  | 'gitlens-gitlens-inspect'
  | 'gitlens-switch'
  | 'globe'
  | 'go-to-file'
  | 'grabber'
  | 'graph-left'
  | 'graph-line'
  | 'graph-scatter'
  | 'graph'
  | 'gripper'
  | 'group-by-ref-type'
  | 'heart-filled'
  | 'heart'
  | 'history'
  | 'home'
  | 'horizontal-rule'
  | 'hubot'
  | 'inbox'
  | 'indent'
  | 'info'
  | 'insert'
  | 'inspect'
  | 'issue-draft'
  | 'issue-reopened'
  | 'issues'
  | 'italic'
  | 'jersey'
  | 'json'
  | 'kebab-vertical'
  | 'key'
  | 'law'
  | 'layers-active'
  | 'layers-dot'
  | 'layers'
  | 'layout-activitybar-left'
  | 'layout-activitybar-right'
  | 'layout-centered'
  | 'layout-menubar'
  | 'layout-panel-center'
  | 'layout-panel-justify'
  | 'layout-panel-left'
  | 'layout-panel-off'
  | 'layout-panel-right'
  | 'layout-panel'
  | 'layout-sidebar-left-off'
  | 'layout-sidebar-left'
  | 'layout-sidebar-right-off'
  | 'layout-sidebar-right'
  | 'layout-statusbar'
  | 'layout'
  | 'library'
  | 'lightbulb-autofix'
  | 'lightbulb'
  | 'light-bulb'
  | 'link-external'
  | 'link'
  | 'list-filter'
  | 'list-flat'
  | 'list-ordered'
  | 'list-selection'
  | 'list-tree'
  | 'list-unordered'
  | 'live-share'
  | 'loading'
  | 'location'
  | 'lock-small'
  | 'lock'
  | 'magnet'
  | 'mail-read'
  | 'mail'
  | 'map-filled'
  | 'map'
  | 'markdown'
  | 'megaphone'
  | 'mention'
  | 'menu'
  | 'merge'
  | 'milestone'
  | 'mirror'
  | 'more'
  | 'mortar-board'
  | 'move'
  | 'multiple-windows'
  | 'mute'
  | 'new-file'
  | 'new-folder'
  | 'newline'
  | 'no-newline'
  | 'note'
  | 'notebook-template'
  | 'notebook'
  | 'octoface'
  | 'open-preview'
  | 'organization'
  | 'output'
  | 'package'
  | 'paintcan'
  | 'panel-close'
  | 'pass-filled'
  | 'pass'
  | 'person-add'
  | 'person'
  | 'pie-chart'
  | 'pin'
  | 'pinned-dirty'
  | 'pinned'
  | 'play-circle'
  | 'play'
  | 'plug'
  | 'plus'
  | 'ports-stop-forward-icon'
  | 'preserve-case'
  | 'preview'
  | 'primitive-square'
  | 'project'
  | 'pulse'
  | 'question'
  | 'quick-input-back'
  | 'quote'
  | 'radio-tower'
  | 'reactions'
  | 'record-keys'
  | 'record-small'
  | 'record'
  | 'redo'
  | 'references'
  | 'refresh'
  | 'regex'
  | 'remote-explorer'
  | 'remote'
  | 'remove'
  | 'replace-all'
  | 'replace'
  | 'reply'
  | 'repo-clone'
  | 'repo-force-push'
  | 'repo-forked'
  | 'repo-pull'
  | 'repo-push'
  | 'repo'
  | 'report'
  | 'request-changes'
  | 'rocket'
  | 'root-folder-opened'
  | 'root-folder'
  | 'rss'
  | 'ruby'
  | 'run-above'
  | 'run-all'
  | 'run-below'
  | 'run-errors'
  | 'save-all'
  | 'save-as'
  | 'save'
  | 'screen-full'
  | 'screen-normal'
  | 'search-fuzzy'
  | 'search-stop'
  | 'search'
  | 'send'
  | 'server-environment'
  | 'server-process'
  | 'server'
  | 'settings-gear'
  | 'settings'
  | 'shield'
  | 'sign-in'
  | 'sign-out'
  | 'smiley'
  | 'sort-precedence'
  | 'source-control'
  | 'sparkle'
  | 'split-horizontal'
  | 'split-vertical'
  | 'squirrel'
  | 'star-empty'
  | 'star-full'
  | 'star-half'
  | 'stop-circle'
  | 'symbol-array'
  | 'symbol-boolean'
  | 'symbol-class'
  | 'symbol-color'
  | 'symbol-constant'
  | 'symbol-enum-member'
  | 'symbol-enum'
  | 'symbol-event'
  | 'symbol-field'
  | 'symbol-file'
  | 'symbol-interface'
  | 'symbol-key'
  | 'symbol-keyword'
  | 'symbol-method'
  | 'symbol-misc'
  | 'symbol-namespace'
  | 'symbol-numeric'
  | 'symbol-operator'
  | 'symbol-parameter'
  | 'symbol-property'
  | 'symbol-ruler'
  | 'symbol-snippet'
  | 'symbol-string'
  | 'symbol-text'
  | 'symbol-structure'
  | 'symbol-struct'
  | 'symbol-variable'
  | 'symbol-function'
  | 'sync-ignored'
  | 'sync'
  | 'table'
  | 'tag'
  | 'target'
  | 'tasklist'
  | 'telescope'
  | 'terminal-bash'
  | 'terminal-cmd'
  | 'terminal-debian'
  | 'terminal-linux'
  | 'terminal-powershell'
  | 'terminal-tmux'
  | 'terminal-ubuntu'
  | 'terminal'
  | 'text-size'
  | 'three-bars'
  | 'thumbsdown'
  | 'thumbsup'
  | 'tools'
  | 'toolbar-more'
  | 'trash'
  | 'trashcan'
  | 'tree-item-expanded'
  | 'triangle-down'
  | 'triangle-left'
  | 'triangle-right'
  | 'triangle-up'
  | 'twitter'
  | 'type-hierarchy-sub'
  | 'type-hierarchy-super'
  | 'type-hierarchy'
  | 'unfold'
  | 'ungroup-by-ref-type'
  | 'unlock'
  | 'unmute'
  | 'unverified'
  | 'variable-group'
  | 'verified-filled'
  | 'verified'
  | 'versions'
  | 'vm-active'
  | 'vm-connect'
  | 'vm-outline'
  | 'vm-running'
  | 'vm'
  | 'wand'
  | 'warning'
  | 'watch'
  | 'whitespace'
  | 'whole-word'
  | 'widget-close'
  | 'window'
  | 'word-wrap'
  | 'workspace-trusted'
  | 'workspace-unknown'
  | 'workspace-untrusted'
  | 'zoom-in'
  | 'zoom-out'

export type Codicon = `codicon:${IDS}`

export interface IconSet {
  name: string
  display: string
  icons: Partial<Record<Codicon, string>>
}

export const set: IconSet = {
  name: NAME,
  display: DISPLAY_NAME,
  icons: {
    'codicon:account': 'tabler:user',
    // 'codicon:activate-breakpoints': 'tabler:activate-breakpoints',
    'codicon:add': 'tabler:plus',
    'codicon:archive': 'tabler:archive',
    'codicon:arrow-both': 'tabler:arrows-horizontal',
    'codicon:arrow-circle-down': 'tabler:circle-arrow-down',
    'codicon:arrow-circle-left': 'tabler:circle-arrow-left',
    'codicon:arrow-circle-right': 'tabler:circle-arrow-right',
    'codicon:arrow-circle-up': 'tabler:circle-arrow-up',
    'codicon:arrow-down': 'tabler:arrow-down',
    'codicon:arrow-left': 'tabler:arrow-left',
    'codicon:arrow-right': 'tabler:arrow-right',
    'codicon:arrow-small-down': 'tabler:arrow-narrow-down',
    'codicon:arrow-small-left': 'tabler:arrow-narrow-left',
    'codicon:arrow-small-right': 'tabler:arrow-narrow-right',
    'codicon:arrow-small-up': 'tabler:arrow-narrow-up',
    'codicon:arrow-swap': 'tabler:arrows-left-right',
    'codicon:arrow-up': 'tabler:arrow-up',
    'codicon:beaker': 'tabler:flask',
    // 'codicon:azure-devops': 'tabler:azure-devops',
    'codicon:azure': 'tabler:brand-azure',
    'codicon:beaker-stop': 'tabler:flask-off',
    'codicon:bell': 'tabler:bell',
    'codicon:bell-dot': 'tabler:bell-ringing',
    // 'codicon:bell-slash-dot': 'tabler:bell-slash-dot',
    'codicon:bell-slash': 'tabler:bell-off',
    // 'codicon:blank': 'tabler:blank',
    'codicon:bold': 'tabler:bold',
    'codicon:book': 'tabler:book',
    'codicon:bookmark': 'tabler:bookmark',
    'codicon:bracket': 'tabler:braces',
    // 'codicon:bracket-dot': 'tabler:bracket-dot',
    'codicon:bracket-error': 'tabler:braces-off',
    'codicon:briefcase': 'tabler:briefcase',
    'codicon:broadcast': 'tabler:broadcast',
    'codicon:browser': 'tabler:browser',
    'codicon:bug': 'tabler:bug',
    'codicon:calendar': 'tabler:calendar',
    'codicon:call-incoming': 'tabler:phone-incoming',
    'codicon:call-outgoing': 'tabler:phone-outgoing',
    'codicon:case-sensitive': 'tabler:letter-case',
    'codicon:check': 'tabler:check',
    'codicon:check-all': 'tabler:checks',
    'codicon:checklist': 'tabler:list-check',
    'codicon:chevron-down': 'tabler:chevron-down',
    'codicon:chevron-left': 'tabler:chevron-left',
    'codicon:chevron-right': 'tabler:chevron-right',
    // 'codicon:circle-small-filled': 'tabler:circle-small-filled',
    // 'codicon:circle-small': 'tabler:circle-small',
    'codicon:circle': 'tabler:point',
    'codicon:chevron-up': 'tabler:chevron-up',
    // 'codicon:chrome-close': 'tabler:chrome-close',
    // 'codicon:chrome-maximize': 'tabler:chrome-maximize',
    // 'codicon:chrome-minimize': 'tabler:chrome-minimize',
    // 'codicon:chrome-restore': 'tabler:chrome-restore',
    'codicon:clock': 'tabler:clock',
    'codicon:circle-filled': 'tabler:point-filled',
    'codicon:circle-large': 'tabler:circle',
    'codicon:circle-large-filled': 'tabler:circle-filled',
    'codicon:circle-slash': 'tabler:circle-off',
    // 'codicon:circuit-board': 'tabler:circuit-board',
    'codicon:clear-all': 'tabler:clear-all',
    'codicon:clippy': 'tabler:clippy',
    'codicon:close-all': 'tabler:close-all',
    'codicon:close': 'tabler:x',
    'codicon:cloud': 'tabler:cloud',
    'codicon:cloud-download': 'tabler:cloud-download',
    'codicon:cloud-upload': 'tabler:cloud-upload',
    'codicon:code': 'tabler:code',
    'codicon:comment': 'tabler:message',
    'codicon:compare-changes': 'tabler:exchange',
    'codicon:collapse-all': 'tabler:library-minus',
    // 'codicon:collapse-close-all': 'tabler:library-close',
    'codicon:color-mode': 'tabler:contrast',
    // 'codicon:combine': 'tabler:combine',
    'codicon:comment-discussion': 'tabler:messages',
    'codicon:comment-draft': 'tabler:message-dots',
    'codicon:comment-unresolved': 'tabler:comment-unresolved',
    'codicon:compass': 'tabler:compass',
    'codicon:compass-active': 'tabler:compass-active',
    'codicon:compass-dot': 'tabler:compass-dot',
    'codicon:copy': 'tabler:copy',
    'codicon:credit-card': 'tabler:credit-card',
    'codicon:dash': 'tabler:line-dashed',
    'codicon:dashboard': 'tabler:dashboard',
    'codicon:database': 'tabler:database',
    'codicon:debug': 'tabler:bug',
    'codicon:debug-all': 'tabler:debug-all',
    'codicon:debug-alt': 'tabler:bug',
    'codicon:debug-alt-small': 'tabler:debug-alt-small',
    'codicon:debug-breakpoint-conditional': 'tabler:debug-breakpoint-conditional',
    'codicon:debug-breakpoint-conditional-unverified': 'tabler:debug-breakpoint-conditional-unverified',
    'codicon:debug-breakpoint-data': 'tabler:debug-breakpoint-data',
    'codicon:debug-breakpoint-data-unverified': 'tabler:debug-breakpoint-data-unverified',
    'codicon:debug-breakpoint-function': 'tabler:debug-breakpoint-function',
    'codicon:debug-breakpoint-function-unverified': 'tabler:debug-breakpoint-function-unverified',
    'codicon:debug-breakpoint-log': 'tabler:debug-breakpoint-log',
    'codicon:debug-breakpoint-log-unverified': 'tabler:debug-breakpoint-log-unverified',
    'codicon:debug-breakpoint-unsupported': 'tabler:debug-breakpoint-unsupported',
    'codicon:debug-console': 'tabler:debug-console',
    'codicon:debug-continue': 'tabler:debug-continue',
    'codicon:debug-continue-small': 'tabler:debug-continue-small',
    'codicon:debug-coverage': 'tabler:debug-coverage',
    'codicon:debug-disconnect': 'tabler:plug-connected',
    'codicon:debug-line-by-line': 'tabler:debug-line-by-line',
    'codicon:debug-pause': 'tabler:debug-pause',
    'codicon:debug-rerun': 'tabler:debug-rerun',
    'codicon:debug-restart': 'tabler:debug-restart',
    'codicon:debug-restart-frame': 'tabler:debug-restart-frame',
    'codicon:debug-reverse-continue': 'tabler:debug-reverse-continue',
    'codicon:debug-stackframe': 'tabler:debug-stackframe',
    'codicon:debug-stackframe-active': 'tabler:debug-stackframe-active',
    'codicon:debug-start': 'tabler:debug-start',
    'codicon:debug-step-back': 'tabler:debug-step-back',
    'codicon:debug-step-into': 'tabler:debug-step-into',
    'codicon:debug-step-out': 'tabler:debug-step-out',
    'codicon:debug-step-over': 'tabler:debug-step-over',
    'codicon:debug-stop': 'tabler:debug-stop',
    'codicon:desktop-download': 'tabler:device-desktop-down',
    'codicon:device-camera': 'tabler:camera',
    'codicon:device-camera-video': 'tabler:video',
    'codicon:device-mobile': 'tabler:device-mobile',
    // 'codicon:diff': 'tabler:diff',
    // 'codicon:diff-added': 'tabler:diff-added',
    // 'codicon:diff-ignored': 'tabler:diff-ignored',
    'codicon:diff-modified': 'tabler:diff-modified',
    'codicon:diff-multiple': 'tabler:file-diff',
    // 'codicon:diff-removed': 'tabler:diff-removed',
    // 'codicon:diff-renamed': 'tabler:diff-renamed',
    'codicon:discard': 'tabler:arrow-back-up',
    'codicon:drop-down-button': 'tabler:chevron-down',
    'codicon:edit': 'tabler:edit',
    'codicon:editor-layout': 'tabler:layout-board',
    'codicon:ellipsis': 'tabler:dots',
    'codicon:empty-window': 'tabler:empty-window',
    'codicon:error': 'tabler:circle-x',
    'codicon:error-small': 'tabler:circle-x',
    'codicon:exclude': 'tabler:exclude',
    'codicon:expand-all': 'tabler:expand-all',
    'codicon:export': 'tabler:arrow-right-bar',
    'codicon:extensions': 'tabler:puzzle',
    'codicon:eye': 'tabler:eye',
    'codicon:eye-closed': 'tabler:eye-off',
    'codicon:feedback': 'tabler:feedback',
    'codicon:file': 'tabler:file',
    'codicon:file-binary': 'tabler:file-digit',
    'codicon:file-code': 'tabler:file-code',
    'codicon:file-media': 'tabler:photo',
    'codicon:file-pdf': 'tabler:file-type-pdf',
    'codicon:file-submodule': 'tabler:folders',
    'codicon:file-symlink-directory': 'tabler:folder-symlink',
    'codicon:file-symlink-file': 'tabler:file-symlink',
    'codicon:file-zip': 'tabler:file-zip',
    'codicon:files': 'tabler:files',
    'codicon:filter': 'tabler:filter',
    'codicon:filter-filled': 'tabler:filter-filled',
    'codicon:find-selection': 'tabler:align-justified',
    'codicon:flame': 'tabler:flame',
    'codicon:fold': 'tabler:fold',
    'codicon:fold-down': 'tabler:fold-down',
    'codicon:fold-up': 'tabler:fold-up',
    'codicon:folder': 'tabler:folder',
    'codicon:folder-active': 'tabler:folder-check',
    'codicon:folder-library': 'tabler:folder-library',
    'codicon:folder-opened': 'tabler:folder-open',
    'codicon:gear': 'tabler:settings',
    'codicon:gift': 'tabler:gift',
    'codicon:gist-secret': 'tabler:gist-secret',
    'codicon:git-branch': 'tabler:git-branch',
    'codicon:git-commit': 'tabler:git-commit',
    'codicon:git-compare': 'tabler:git-compare',
    'codicon:git-merge': 'tabler:git-merge',
    'codicon:git-pull-request': 'tabler:git-pull-request',
    'codicon:git-pull-request-closed': 'tabler:git-pull-request-closed',
    'codicon:git-pull-request-create': 'tabler:git-pull-request',
    'codicon:git-pull-request-draft': 'tabler:git-pull-request-draft',
    'codicon:git-pull-request-go-to-changes': 'tabler:git-pull-request-go-to-changes',
    'codicon:git-pull-request-new-changes': 'tabler:file-diff',
    'codicon:github': 'tabler:brand-github',
    // 'codicon:github-action': 'tabler:github-action',
    'codicon:github-alt': 'tabler:brand-github',
    'codicon:github-inverted': 'tabler:brand-github-filled',
    'codicon:gitlens-gitlens': 'tabler:brand-git',
    'codicon:gitlens-gitlens-inspect': 'tabler:brand-git',
    'codicon:gitlens-switch': 'tabler:switch',
    'codicon:globe': 'tabler:globe',
    'codicon:go-to-file': 'tabler:file-arrow-right',
    // 'codicon:grabber': 'tabler:grabber',
    'codicon:graph': 'tabler:graph',
    'codicon:graph-left': 'tabler:graph-left',
    'codicon:graph-line': 'tabler:chart-sankey',
    'codicon:graph-scatter': 'tabler:graph-scatter',
    'codicon:gripper': 'tabler:gripper',
    'codicon:group-by-ref-type': 'tabler:group-by-ref-type',
    'codicon:heart': 'tabler:heart',
    'codicon:heart-filled': 'tabler:heart-filled',
    'codicon:history': 'tabler:history',
    'codicon:home': 'tabler:home',
    'codicon:horizontal-rule': 'tabler:horizontal-rule',
    'codicon:hubot': 'tabler:robot',
    'codicon:inbox': 'tabler:inbox',
    'codicon:indent': 'tabler:indent',
    'codicon:info': 'tabler:info-circle',
    // 'codicon:insert': 'tabler:insert',
    // 'codicon:inspect': 'tabler:inspect',
    'codicon:issue-draft': 'tabler:circle-dotted',
    'codicon:issue-reopened': 'tabler:refresh-dot',
    'codicon:issues': 'tabler:circle-dot',
    'codicon:italic': 'tabler:italic',
    'codicon:jersey': 'tabler:shirt-sport',
    'codicon:json': 'tabler:braces',
    'codicon:kebab-vertical': 'tabler:dots-vertical',
    'codicon:key': 'tabler:key',
    'codicon:law': 'tabler:scale',
    'codicon:layers': 'tabler:stack-2',
    'codicon:layers-active': 'tabler:layers-active',
    'codicon:layers-dot': 'tabler:layers-dot',
    'codicon:layout': 'tabler:layout',
    'codicon:layout-activitybar-left': 'tabler:layout-sidebar',
    'codicon:layout-activitybar-right': 'tabler:layout-sidebar-right',
    // 'codicon:layout-centered': 'tabler:layout-centered',
    // 'codicon:layout-menubar': 'tabler:layout-menubar',
    'codicon:layout-panel': 'tabler:layout-bottombar-collapse-filled',
    // 'codicon:layout-panel-center': 'tabler:layout-panel-center',
    // 'codicon:layout-panel-justify': 'tabler:layout-panel-justify',
    // 'codicon:layout-panel-left': 'tabler:layout-panel-left',
    'codicon:layout-panel-off': 'tabler:layout-bottombar-expand-filled',
    // 'codicon:layout-panel-right': 'tabler:layout-panel-right',
    'codicon:layout-sidebar-left': 'tabler:layout-sidebar-left-collapse-filled',
    'codicon:layout-sidebar-left-off': 'tabler:layout-sidebar-left-expand-filled',
    'codicon:layout-sidebar-right': 'tabler:layout-sidebar-right-collapse-filled',
    'codicon:layout-sidebar-right-off': 'tabler:layout-sidebar-right-expand-filled',
    'codicon:layout-statusbar': 'tabler:layout-bottombar-filled',
    'codicon:library': 'tabler:books',
    'codicon:lightbulb': 'tabler:bulb',
    'codicon:light-bulb': 'tabler:bulb',
    'codicon:lightbulb-autofix': 'tabler:bulb-filled',
    'codicon:link': 'tabler:link',
    'codicon:link-external': 'tabler:external-link',
    'codicon:list-filter': 'tabler:list-search',
    'codicon:list-flat': 'tabler:list',
    'codicon:list-ordered': 'tabler:list-numbers',
    'codicon:list-selection': 'tabler:align-justified',
    'codicon:list-tree': 'tabler:list-tree',
    'codicon:list-unordered': 'tabler:list',
    'codicon:live-share': 'tabler:live-share',
    'codicon:loading': 'tabler:loader',
    'codicon:location': 'tabler:location',
    'codicon:lock': 'tabler:lock',
    // 'codicon:lock-small': 'tabler:lock-small',
    'codicon:magnet': 'tabler:magnet',
    'codicon:mail': 'tabler:mail',
    'codicon:mail-read': 'tabler:mail-opened',
    'codicon:map': 'tabler:map',
    // 'codicon:map-filled': 'tabler:map-filled',
    'codicon:markdown': 'tabler:markdown',
    'codicon:megaphone': 'tabler:speakerphone',
    'codicon:mention': 'tabler:at',
    'codicon:menu': 'tabler:menu-2',
    'codicon:merge': 'tabler:arrow-merge',
    'codicon:milestone': 'tabler:sign-right',
    'codicon:mirror': 'tabler:mirror',
    'codicon:more': 'tabler:dots',
    'codicon:mortar-board': 'tabler:school',
    'codicon:move': 'tabler:arrows-move',
    'codicon:multiple-windows': 'tabler:multiple-windows',
    'codicon:mute': 'tabler:volume-off',
    'codicon:new-file': 'tabler:file-plus',
    'codicon:new-folder': 'tabler:folder-plus',
    'codicon:newline': 'tabler:newline',
    'codicon:no-newline': 'tabler:no-newline',
    'codicon:note': 'tabler:note',
    'codicon:notebook': 'tabler:notebook',
    'codicon:notebook-template': 'tabler:notebook-template',
    // 'codicon:octoface': 'tabler:octoface',
    // 'codicon:open-preview': 'tabler:article',
    'codicon:organization': 'tabler:users-group',
    'codicon:output': 'tabler:notes',
    'codicon:package': 'tabler:package',
    'codicon:paintcan': 'tabler:bucket-droplet',
    'codicon:panel-close': 'tabler:x',
    'codicon:pass': 'tabler:circle-check',
    'codicon:pass-filled': 'tabler:circle-check-filled',
    'codicon:person': 'tabler:man',
    'codicon:person-add': 'tabler:user-plus',
    'codicon:pie-chart': 'tabler:chart-pie',
    'codicon:pin': 'tabler:pin',
    'codicon:pinned': 'tabler:pinned',
    'codicon:pinned-dirty': 'tabler:pinned-dirty',
    'codicon:play': 'tabler:player-play',
    'codicon:play-circle': 'tabler:play-circle',
    'codicon:plug': 'tabler:plug',
    'codicon:plus': 'tabler:plus',
    'codicon:ports-stop-forward-icon': 'tabler:x',
    'codicon:preserve-case': 'tabler:letter-case-upper',
    'codicon:preview': 'tabler:preview',
    'codicon:primitive-square': 'tabler:square',
    'codicon:project': 'tabler:align-box-top-center',
    'codicon:pulse': 'tabler:activity',
    'codicon:question': 'tabler:help',
    'codicon:quick-input-back': 'tabler-arrow-left',
    'codicon:quote': 'tabler:quote',
    'codicon:radio-tower': 'tabler:building-broadcast-tower',
    // 'codicon:reactions': 'tabler:reactions',
    'codicon:record': 'tabler:circle-dot',
    'codicon:record-keys': 'tabler:keyboard',
    'codicon:record-small': 'tabler:record-small',
    'codicon:redo': 'tabler:arrow-forward-up',
    'codicon:references': 'tabler:references',
    'codicon:refresh': 'tabler:refresh',
    'codicon:regex': 'tabler:regex',
    'codicon:remote': 'tabler:cloud-code',
    'codicon:remote-explorer': 'tabler:device-desktop-code',
    'codicon:remove': 'tabler:minus',
    'codicon:replace': 'tabler:replace',
    'codicon:replace-all': 'tabler:replace-filled',
    'codicon:reply': 'tabler:arrow-back-up',
    'codicon:repo': 'tabler:book-2',
    'codicon:repo-clone': 'tabler:book-download',
    'codicon:repo-force-push': 'tabler:repo-force-push',
    'codicon:repo-forked': 'tabler:git-fork',
    'codicon:repo-pull': 'tabler:repo-pull',
    'codicon:repo-push': 'tabler:book-upload',
    'codicon:report': 'tabler:report',
    'codicon:request-changes': 'tabler:request-changes',
    'codicon:rocket': 'tabler:rocket',
    'codicon:root-folder': 'tabler:root-folder',
    'codicon:root-folder-opened': 'tabler:root-folder-opened',
    'codicon:rss': 'tabler:rss',
    // 'codicon:ruby': 'tabler:ruby',
    'codicon:run-above': 'tabler:run-above',
    'codicon:run-all': 'tabler:run-all',
    'codicon:run-below': 'tabler:run-below',
    'codicon:run-errors': 'tabler:run-errors',
    'codicon:save': 'tabler:device-floppy',
    'codicon:save-all': 'tabler:save-all',
    'codicon:save-as': 'tabler:save-as',
    'codicon:screen-full': 'tabler:maximize',
    'codicon:screen-normal': 'tabler:minimize',
    'codicon:search': 'tabler:search',
    'codicon:search-fuzzy': 'tabler:search-fuzzy',
    'codicon:search-stop': 'tabler:search-stop',
    'codicon:send': 'tabler:send',
    'codicon:server': 'tabler:server',
    'codicon:server-environment': 'tabler:server-environment',
    'codicon:server-process': 'tabler:server-process',
    'codicon:settings': 'tabler:adjustments',
    'codicon:settings-gear': 'tabler:settings',
    'codicon:shield': 'tabler:shield',
    'codicon:sign-in': 'tabler:login',
    'codicon:sign-out': 'tabler:logout',
    'codicon:smiley': 'tabler:mood-smile',
    'codicon:sort-precedence': 'tabler:sort-precedence',
    'codicon:source-control': 'tabler:git-merge',
    'codicon:sparkle': 'tabler:sparkles',
    'codicon:split-horizontal': 'tabler:layout-columns',
    'codicon:split-vertical': 'tabler:layout-rows',
    'codicon:squirrel': 'tabler:squirrel',
    'codicon:star-empty': 'tabler:star',
    'codicon:star-full': 'tabler:star-filled',
    'codicon:star-half': 'tabler:star-half-filled',
    'codicon:stop-circle': 'tabler:stop-circle',
    'codicon:symbol-array': 'tabler:brackets',
    'codicon:symbol-boolean': 'tabler:arrow-bar-both',
    'codicon:symbol-class': 'tabler:layout-collage',
    'codicon:symbol-color': 'tabler:color-swatch',
    'codicon:symbol-constant': 'tabler:article',
    'codicon:symbol-enum': 'tabler:layers-intersect',
    'codicon:symbol-enum-member': 'tabler:layers-intersect',
    'codicon:symbol-event': 'tabler:bolt',
    'codicon:symbol-field': 'tabler:rectangular-prism',
    'codicon:symbol-file': 'tabler:file',
    'codicon:symbol-interface': 'tabler:keyframe-align-horizontal',
    'codicon:symbol-key': 'tabler:abc',
    'codicon:symbol-keyword': 'tabler:align-box-left-top',
    'codicon:symbol-method': 'tabler:cube',
    'codicon:symbol-misc': 'tabler:triangle-square-circle',
    'codicon:symbol-namespace': 'tabler:braces',
    'codicon:symbol-numeric': 'tabler:math',
    'codicon:symbol-operator': 'tabler:math-symbols',
    'codicon:symbol-parameter': 'tabler:text-recognition',
    'codicon:symbol-property': 'tabler:tool',
    'codicon:symbol-ruler': 'tabler:ruler-3',
    'codicon:symbol-snippet': 'tabler:device-ipad-horizontal',
    'codicon:symbol-string': 'tabler:abc',
    'codicon:symbol-text': 'tabler:abc',
    'codicon:symbol-structure': 'tabler:layout-2',
    'codicon:symbol-struct': 'tabler:layout-2',
    'codicon:symbol-variable': 'tabler:rectangular-prism',
    'codicon:symbol-function': 'tabler:cube',
    'codicon:sync': 'tabler:refresh',
    'codicon:sync-ignored': 'tabler:refresh-off',
    'codicon:table': 'tabler:table',
    'codicon:tag': 'tabler:tag',
    'codicon:target': 'tabler:target',
    'codicon:tasklist': 'tabler:list-check',
    'codicon:telescope': 'tabler:telescope',
    'codicon:terminal': 'tabler:terminal',
    // 'codicon:terminal-bash': 'tabler:terminal-bash',
    // 'codicon:terminal-cmd': 'tabler:terminal-cmd',
    'codicon:terminal-debian': 'tabler:brand-debian',
    // 'codicon:terminal-linux': 'tabler:terminal-linux',
    'codicon:terminal-powershell': 'tabler:brand-powershell',
    // 'codicon:terminal-tmux': 'tabler:layout-board',
    'codicon:terminal-ubuntu': 'tabler:brand-ubuntu',
    'codicon:text-size': 'tabler:text-size',
    'codicon:three-bars': 'tabler:baseline-density-medium',
    'codicon:thumbsdown': 'tabler:thumb-down',
    'codicon:thumbsup': 'tabler:thumb-up',
    'codicon:tools': 'tabler:tools',
    'codicon:toolbar-more': 'tabler:dots',
    'codicon:trash': 'tabler:trash',
    'codicon:trashcan': 'tabler:trash',
    'codicon:tree-item-expanded': 'tabler:chevron-down',
    'codicon:triangle-down': 'tabler:caret-down-filled',
    'codicon:triangle-left': 'tabler:caret-left-filled',
    'codicon:triangle-right': 'tabler:caret-right-filled',
    'codicon:triangle-up': 'tabler:caret-up-filled',
    'codicon:twitter': 'tabler:brand-twitter-filled',
    // 'codicon:type-hierarchy': 'tabler:type-hierarchy',
    // 'codicon:type-hierarchy-sub': 'tabler:type-hierarchy-sub',
    // 'codicon:type-hierarchy-super': 'tabler:type-hierarchy-super',
    // 'codicon:unfold': 'tabler:unfold',
    // 'codicon:ungroup-by-ref-type': 'tabler:ungroup-by-ref-type',
    'codicon:unlock': 'tabler:lock-open',
    'codicon:unmute': 'tabler:volume',
    'codicon:unverified': 'tabler:unverified',
    'codicon:variable-group': 'tabler:variable-group',
    'codicon:verified': 'tabler:discount-check',
    'codicon:verified-filled': 'tabler:discount-check-filled',
    'codicon:versions': 'tabler:versions',
    'codicon:vm': 'tabler:device-desktop',
    'codicon:vm-active': 'tabler:device-desktop-check',
    // 'codicon:vm-connect': 'tabler:vm-connect',
    // 'codicon:vm-outline': 'tabler:vm-outline',
    // 'codicon:vm-running': 'tabler:vm-running',
    'codicon:wand': 'tabler:wand',
    'codicon:warning': 'tabler:alert-triangle',
    'codicon:watch': 'tabler:device-watch',
    // 'codicon:whitespace': 'tabler:whitespace',
    'codicon:whole-word': 'tabler:space',
    'codicon:widget-close': 'tabler:x',
    // 'codicon:window': 'tabler:window',
    'codicon:word-wrap': 'tabler:text-wrap',
    'codicon:workspace-trusted': 'tabler:shield-check',
    'codicon:workspace-unknown': 'tabler:shield-question',
    'codicon:workspace-untrusted': 'tabler:shield-x',
    'codicon:zoom-in': 'tabler:zoom-in',
    'codicon:zoom-out': 'tabler:zoom-out',
  },
}
