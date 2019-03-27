const defaultCssVariables = {
  pageBackground: 'white',
  headerBackground: 'white',
  textColor: '#000',
  linkColor: '#000',
  accentColor: '#3eaf7c',
  sidebarWidth: '280px',
  sidebarBackground: 'white',
  sidebarSectionTitleColor: 'rgb(136, 136, 136)',
  borderColor: '#eaeaea',
  headerHeight: '60px',
  codeFont: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace',
  tipColor: 'rgb(6, 125, 247)',
  successColor: '#42b983',
  warningColor: '#ff9800',
  dangerColor: 'rgb(255, 0, 31)',
  navLinkColor: '#999',
  navLinkActiveColor: '#000',
  codeBlockBackground: '#fdfaf6',
  codeBlockShadowColor: '#faede5',
  codeBlockShadowWidth: '1px',
  highlightedLineBackground: '#faede5',
  highlightedLineBorderColor: '#f1beb6',
  inlineCodeColor: 'inherit',
  inlineCodeBackground: '#fdfaf6',
  loaderPrimaryColor: '#f3f3f3',
  loaderSecondaryColor: '#ecebeb',
  contentLinkBorder: '2px solid var(--border-color)',
  contentLinkHoverBorderColor: '#ccc',
  tableHeaderBackground: '#fafafa',
  tableHeaderColor: '#666'
}

const darkCssVariables = {
  ...defaultCssVariables,
  pageBackground: '#2f3136',
  headerBackground: '#2f3136',
  sidebarBackground: '#2f3136',
  textColor: 'hsla(0,0%,100%,0.88)',
  accentColor: '#0096cf',
  linkColor: 'currentColor',
  navLinkColor: '#eee',
  navLinkActiveColor: '#fff',
  codeBlockBackground: '#011627',
  codeBlockShadowColor: '#333',
  codeBlockShadowWidth: '0px',
  borderColor: '#3e4147',
  highlightedLineBackground: '#022a4b',
  highlightedLineBorderColor: '#ffa7c4',
  inlineCodeColor: '#e6e6e6',
  inlineCodeBackground: '#373c49',
  loaderPrimaryColor: 'hsla(0, 0%, 100%, 0.08)',
  loaderSecondaryColor: 'hsla(0, 0%, 100%, 0.18)',
  contentLinkBorder: '2px solid hsla(0, 0%, 100%, 0.28)',
  contentLinkHoverBorderColor: 'currentColor',
  tableHeaderBackground: 'var(--border-color)',
  tableHeaderColor: '#868686'
}

export {defaultCssVariables, darkCssVariables}
