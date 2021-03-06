
export const nodeColor = '#E1F0F7'
export const standardColor = '#03A9F4'
export const idColor = '#3498db'
export const accentColor = '#ff4081'
export const okColor = '#009688'
export const levelColor = '#e7c533'
export const rankColor = '#67c613'
export const ps4Color = '#8662DD'
export const ps3Color = '#F05561'
export const psvColor = '#0AAAE9'

export const textWarningColor = '#c09853' // 麻烦
export const textDifficultColor = '#c09853' // 困难
export const textErrorColor = '#b94a48' // 噩梦
export const textHellColor = '#b94a48' // 地狱
export const textPerfectColor = '#659f13'
export const textSuccessColor = '#3a87ad' // 容易

export const errorColor = '#da314b'  // <25%
export const warningColor = '#faa732' // <50%
export const successColor = '#8cc14c' // <90%
export const perfectColor = '#00a8e6'  // 100%

export const gamePercentColor = [
  errorColor,
  textHellColor,
  textWarningColor,
  warningColor,
  textSuccessColor,
  perfectColor,
  textPerfectColor
]

export const trophyColor1 = '#7a96d1'
export const trophyColor2 = '#cd9a46'
export const trophyColor3 = '#a6a6a6'
export const trophyColor4 = '#bf6a3a'
export const trophyColor5 = 'rgba(0000.5)'
export const backgroundColorMapper = {
  '白金': '#d5d9e4',
  '金': '#f6e5c8',
  '银': '#dcdcdc',
  '铜': '#e4cdc1'
}
export const backgroundColorArrMapper = [
  'rgb(102, 127, 178)',
  'rgb(194, 144, 62)',
  'rgb(119, 119, 119)',
  'rgb(196, 100, 56)'
]

export const getColorFromProgress = (progress) => {
  const value = parseInt(progress)
  if (value < 25) return errorColor
  if (value < 50) return warningColor
  if (value < 75) return successColor
  return perfectColor
}

export const getLevelColorFromProgress = (progress) => {
  const value = parseFloat(progress)
  if (value <= 5) return textErrorColor
  if (value <= 25) return textWarningColor
  if (value <= 60) return textSuccessColor
  return textPerfectColor
}

export const getContentFromTrophy = text => {
  const item1 = text.split('金')[0]
  const item2 = text.split('银')[0].replace(item1, '')
  const item3 = text.split('铜')[0].replace(item1 + item2, '')
  const item4 = '铜' + text.split('铜').pop()
  return [
    item1,
    item2,
    item3,
    item4
  ]
}
