import { Colors } from './types';

export const baseColors = {
  white: '#FFFFFF',
  black: '#000000',
  unselected: '#807994',
  warningError: 'linear-gradient(221.28deg, #C8B3FF 3.17%, #FF6A6A 97.64%)',
  transparent: 'transparent',
};

export const lightGraphColors = {
  graphLine1: '#7E51FD',
  graphLine2: '#0086C6',
  graphDot: "#ED2B00",
}

export const darkGraphColors = {
  graphLine1: '#85DAE5',
  graphLine2: '#11FFA9',
  graphDot: "#FFEB34",
}


export const graphColors = {
  axis: '#7e8d97',
  cartesianGrid: '#42484D',
  tooltip: '#9aaaaf',
};

export const lightColors: Colors = {
  ...baseColors,
  ...graphColors,
  ...lightGraphColors,
  text: '#000000',
  subText: '#46444F',
  textAlt: '#FFFFFF',
  textDisabled: '#6D6978',
  textButtonDisabled: '#6D6978',
  textInputError: '#6D6978',
  textInputErrorBorder: '#DC3939',
  textPopupTitle: '#CAD2D8',
  textCardDetail: '#46444F',
  success: '#1A9A64',
  error: '##DC3939',
  tag: '#EAE3F3',

  crab: '#8571FF',
  bull: '#35B47F',
  available: '#C7DFD5',
  full: 'rgba(17, 13, 24, 0.15)',
  new: 'linear-gradient(50.13deg, #8627FF 14.11%, #8094FF 85.68%)',

  positive: '#1A9A64',
  negative: '#DC3939',
  online: '#7E51FD',
  border: '#71678F',

  backgroundMain: 'linear-gradient(271.81deg, #EAE3F3 1.53%, #CFE2EB 98.55%)',
  backgroundBox: 'rgba(255, 255, 255, 0.4)',
  backgroundNav: '#2F3032',
  backgroundNavActive: 'rgba(123, 123, 164, 0.25)',
  backgroundBottomNav: '#2F3032',
  backgroundMobileNavButton: '#FFFFFF',
  backgroundTabNav: 'rgba(177, 172, 198, 0.4)',
  backgroundMobileNavClose: '#2F3032',
  backgroundContent: 'rgba(255, 255, 255, 0.4)',
  backgroundBanner: 'rgba(255, 255, 255, 0.4)',
  backgroundModal: 'linear-gradient(180deg, #DAD4F0 0%, #D7E9F0 100%)',
  backgroundSwitch: '#F5F5F5',
  backgroundDropdown: '#FFFFFF',
  backgroundWallet: '#E9E7F5',
  backgroundConnection: '#E9E7F5',
  backgroundActivities: 'rgba(255, 255, 255, 0.4)',
  backgroundComingSoon: '#7E51FD',
  backgroundComingSoonBorder: '#7E51FD',
  backgroundAudits:
    'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(50.13deg, #937EFF 14.11%, #B08AFF 55.86%, #C9B2FD 85.68%)',
  backgroundAuditsHover:
    'linear-gradient(50.13deg, #6E56FF 14.11%, #9A73EE 56.23%, #BB9BFF 85.68%)',
  backgroundGraph: '#E7E4F1',
  backgroundModalGraph: '#E8EAF6',
  backgroundBar: '#B4B9CC',
  backgroundInvestContainer: 'rgba(245, 237, 255, 0.5)',
  backgroundInvestToken: 'rgba(177, 172, 198, 0.4)',
  backgroundTooltip: '#2F3032',
  backgroundPortfolio: 'rgba(255, 255, 255, 0.65)',
  backgroundCardContainer: 'rgba(255, 255, 255, 0.65)',
  backgroundStrategyContainer:
    'linear-gradient(180deg, #DAD4F0 0%, #D7E9F0 100%)',
  backgroundPopup: '#2F3032',
  backgroundGraphTooltip: '#2F3032',

  buttonOutline: '#7E51FD',
  buttonOutlineLight: '#7E51FD',
  buttonOutlineBackground: '#7E51FD',
  buttonOutlineText: '#FFFFFF',
  buttonOutlineHover: '#8571FF',
  buttonOutlineWallet: 'linear-gradient(180deg, #DAD4F0 0%, #D7E9F0 0%)',
  buttonOutlineWhite: 'rgba(255, 255, 255, 0.65)',
  buttonOutlineWhiteHover: 'rgba(255, 255, 255, 0.65)',
  buttonContained: '#7E51FD',
  buttonContainedHover: '#8571FF',
  buttonPure: '#7BEFFF',
  buttonPureHover: '#85DAE6',
  buttonDisabled: 'rgba(17, 13, 24, 0.15)',
  buttonError: '#DC3939',
  buttonInfo: '#7E51FD',
  buttonInfoText: '#FFFFFF',
  buttonInfoHover: '#FFFFFF',
  buttonInfoFill: '#7E51FD',
  buttonModalLeft: '#000000',
  buttonModalWithdraw: 'linear-gradient(180deg, #DAD4F0 100%, #D7E9F0 100%)',
  buttonModalGraph: '#71678F',

  shadowBox: 'none',
  modalText: '#000000',

  navHover: 'rgba(177, 172, 198, 0.4)',
  navSelected: 'rgba(123, 123, 164, 0.25)',

  linkText: '#777E90',
  linkHover: 'rgba(13,23,24,0.55)',
  linkClear: '#6D6978',
  textAndLine: '#6D6978',

  scrollbarTrack: '#686789',
  scrollbarTrackHover: '#787790',
  scrollbarThumb: 'rgba(17, 13, 24, 0.15)',
  scrollbarThumbHover: 'rgba(17, 13, 24, 0.25)',

  boxTitleText: '#000000',
  boxTitleValue: '#000000',

  tableHeaderText: '#46444F',
  tableItemHover: 'rgba(105, 131, 142, 0.35)',
  tableDetailHeader: '#EAE3F3',

  tabBackground: '#EAE3F3',
  tabBorder: '#B4B9CC',
  tabBackgroundSelected: '#FAF6FF',
  tabBorderSelected: '#7E51FD',
  mobileTabBackgroundSelected: 'rgba(255, 255, 255, 0.65)',

  graphButton: '#8571FF',
  graphButtonActive: '#7E51FD',
  graphButtonShadow: '0px 0px 8px 0px #C0DBE78C',
  graphBacktest: '#008E97',
  graphShadow: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.25))', //filter

  overallInfoText: '#46444F',
  trackValueLabel: 'rgba(177, 172, 198, 0.4)',
  trackValueBar: 'linear-gradient(90deg, #6E56FF 2.36%, #BB9BFF 100%)',
  trackValueRail: 'rgba(177, 172, 198, 0.4)',
  trackResultText: '#6D6978',
  trackResultBackground: 'rgba(177, 172, 198, 0.4)',
  trackResultBorder: 'rgba(177, 172, 198, 0.4)',

  portfolioSearchText: '#6D6978',
  portfolioSearchBorder: '#71678F',

  footerText: '#B4B9CC',
  footerHover: '#8571FF',
  footerHoverFilter:
    'invert(54%) sepia(98%) saturate(3211%) hue-rotate(222deg) brightness(98%) contrast(104%)', //#8571FF
  avatarBorder: '#71678F',
  avatarBackground: '#E9E7F5',

  checkboxColor1: '#7E51FD',
  checkboxColor2: '#7E51FD',
  checkboxColor3: '#7E51FD',
  whitelistPathFill1: '#76B6F2',
  whitelistPathFill2: '#8571FF',
  startupColor1: '#6E56FF',
  startupColor2: '#9A73EE',
  startupColor3: '#BB9BFF',
  warningColor1: '#DC3939',
  warningColor2: '#DC3939',
  notApprovedIconColor1: '#FFFFFF',
  notApprovedIconColor2: '#EAE1FF',
  notApprovedIconColor3: '#BCA2FF',
  rejectModalIconColor1: '#C2B2FF',
  rejectModalIconColor2: '#E44C4C',
  pendingTxnColor1: '#6E56FF',
  pendingTxnColor2: '#9A73EE',
  pendingTxnColor3: '#BB9BFF',
  completedTxnColor1: '#7E51FD',
  completedTxnColor2: '#FFFFFF',
};

export const darkColors: Colors = {
  ...baseColors,
  ...graphColors,
  ...darkGraphColors,
  text: '#FFFFFF',
  subText: '#B1B5C3',
  textAlt: '#000000',
  textDisabled: '#7E8D97',
  textButtonDisabled: '#9AAAAF',
  textInputError: '#777E90',
  textInputErrorBorder: '#FF6A6A',
  textPopupTitle: '#CAD2D8',
  textCardDetail: '#CAD2D8',
  success: '#11FFA9',
  error: '#FF9A9A',
  tag: '#A3C4D3',

  crab: '#85DAE5',
  bull: '#A7B0FF',
  available: '#4E6667',
  full: 'rgba(105, 131, 142, 0.35)',
  new: 'linear-gradient(270deg, #11FFA9 7.14%, #11FFFF 98.57%)',

  positive: '#11FFA9',
  negative: '#FF9A9A',
  online: '#11FFA9',
  border: '#A3C4D3',

  backgroundMain:
    'radial-gradient(74.2% 74.2% at 50% 25.8%, #42759A 0%, #1B333D 100%)',
  backgroundBox:
    'linear-gradient(180deg, rgba(37, 72, 80, 0.8) 0%, rgba(14, 24, 29, 0.8) 98.96%)',
  backgroundNav: 'linear-gradient(270deg, #31585E 0%, #253E46 96.09%)',
  backgroundNavActive: 'rgba(105, 131, 142, 0.35)',
  backgroundBottomNav: 'linear-gradient(180deg, #31585E 0%, #253E46 96.09%)',
  backgroundMobileNavButton: 'rgba(13, 23, 24, 0.55)',
  backgroundTabNav: '#293E4A',
  backgroundMobileNavClose: 'rgba(13, 23, 24, 0.55)',
  backgroundContent: 'rgba(13, 23, 24, 0.55)',
  backgroundBanner: 'rgba(105, 131, 142, 0.2)',
  backgroundModal: 'linear-gradient(180deg, #516F7C 0%, #374D56 100%)',
  backgroundSwitch: 'rgba(13, 23, 24, 0.55)',
  backgroundDropdown: '#293E4A',
  backgroundWallet: '#273f4b',
  backgroundConnection: '#293E4A',
  backgroundActivities: 'rgba(13, 23, 24, 0.2)',
  backgroundComingSoon: '#18252A',
  backgroundComingSoonBorder:
    'linear-gradient(50.13deg, #B182FF 14.11%, #59C1FB 56.23%, #0EF7F8 85.68%)',
  backgroundAudits:
    'linear-gradient(50.13deg, #B182FF 14.11%, #59C1FB 56.23%, #0EF7F8 85.68%)',
  backgroundAuditsHover:
    'linear-gradient(73.11deg, #A88EF5 9.59%, #77DFF2 90.41%)',

  backgroundGraph: '#101719',
  backgroundModalGraph: '#27363C',
  backgroundBar: 'rgba(13, 23, 24, 0.55)',
  backgroundInvestContainer: 'rgba(13, 23, 24, 0.2)',
  backgroundInvestToken: 'rgba(245, 237, 255, 0.1)',
  backgroundTooltip: '#DFEEF5',
  backgroundPortfolio:
    'linear-gradient(180deg, rgba(75, 128, 140, 0.7) 0%, rgba(33, 60, 80, 0.7) 100%)',
  backgroundCardContainer: 'rgba(105, 131, 142, 0.35)',
  backgroundStrategyContainer:
    'linear-gradient(180deg, #4d6a77 0%, #2d3f47 100%)',
  backgroundPopup: 'linear-gradient(180deg, #29464d 0%, #111b23 98.96%)',
  backgroundGraphTooltip: 'linear-gradient(180deg, #516f7c 0%, #374d56 100%)',

  buttonOutline:
    'linear-gradient(259.88deg, #0ef7f8 0%, #95c0ff 50.25%, #ad60ff 100%)',
  buttonOutlineLight:
    'linear-gradient(73.11deg, #A88EF5 9.59%, #77DFF2 90.41%)',
  buttonOutlineBackground: '#1B313B',
  buttonOutlineText:
    'linear-gradient(259.88deg, #0ef7f8 0%, #95c0ff 50.25%, #ad60ff 100%)',
  buttonOutlineHover:
    'linear-gradient(73.11deg, #A88EF5 9.59%, #77DFF2 90.41%)',
  buttonOutlineWallet: '#374D56',
  buttonOutlineWhite: 'rgba(13, 23, 24, 0.25)',
  buttonOutlineWhiteHover: '#1B2A31',
  buttonContained:
    'linear-gradient(259.88deg, #0ef7f8, #95c0ff 50.25%, #ad60ff)',
  buttonContainedHover:
    'linear-gradient(58.99deg, #806DC0 4.64%, #70D8EC 96.11%)',
  buttonPure: '#71678F',
  buttonPureHover: '#7E51FD',
  buttonDisabled: 'rgba(13, 23, 24, 0.55)',
  buttonError: 'linear-gradient(51.74deg, #FFB3FC 6.87%, #FF5757 92.57%)',
  buttonInfo: '#7BEFFF',
  buttonInfoText: '#1B313B',
  buttonInfoHover: '#17181A',
  buttonInfoFill: '#85DAE6',
  buttonModalLeft: '#F8F8F8',
  buttonModalWithdraw: '#516F7C',
  buttonModalGraph: '#A3C4D3',

  shadowBox: '0px 0px 8px rgb(0 0 0 / 25%)',
  modalText: '#DFEEF5',

  navHover: 'rgba(13, 23, 24, 0.55)',
  navSelected: 'rgba(105, 131, 142, 0.35)',

  linkText: '#777E90',
  linkHover: '#7BEFFF',
  linkClear: '#CAD2D8',
  textAndLine: '#DFEEF5',

  scrollbarTrack: '#C2DAE6',
  scrollbarTrackHover: 'rgba(194, 218, 229, 0.8)',
  scrollbarThumb: 'rgba(13, 23, 24, 0.55)',
  scrollbarThumbHover: 'rgba(13, 23, 24, 1)',

  boxTitleText: '#CAD2D8',
  boxTitleValue:
    'linear-gradient(50.13deg, #B182FF 14.11%, #59C1FB 56.23%, #0EF7F8 85.68%)',

  tableHeaderText: '#9AAAAF',
  tableItemHover: 'rgba(255, 255, 255, 0.65)',
  tableDetailHeader: 'rgba(13, 23, 24, 0.55)',

  tabBackground: 'rgba(13, 23, 24, 0.55)',
  tabBorder: '#7E8D97',
  tabBackgroundSelected: '#374F5A',
  tabBorderSelected: '#7BEFFF',
  mobileTabBackgroundSelected: 'rgba(105, 131, 142, 0.35)',

  graphButton: '#75B3C0',
  graphButtonActive: '#7BEFFF',
  graphButtonShadow: '0px 0px 8px 0px #00000040',
  graphBacktest: '#19EE94',
  graphShadow: 'drop-shadow(0px 0px 16px rgba(192, 219, 231, 0.25))',

  overallInfoText: '#9AAAAF',
  trackValueLabel: 'rgba(105, 131, 142, 0.35)',
  trackValueBar: 'linear-gradient(78.04deg, #A88EF5 2.79%, #77DFF2 208.53%)',
  trackValueRail: 'rgba(13, 23, 24, 0.55)',
  trackResultText: '#A3C4D3',
  trackResultBackground: 'rgba(255, 255, 255, 0.1)',
  trackResultBorder: '#A3C4D3',

  portfolioSearchText: '#CAD2D8',
  portfolioSearchBorder: '#A3C4D3',

  footerText: '#9AAAAF',
  footerHover: '#7BEFFF',
  footerHoverFilter:
    'invert(0.19) sepia(1) saturate(5) hue-rotate(158.4deg) brightness(1.2)', //#7BEFFF
  avatarBorder: 'rgba(13, 23, 24, 0.55)',
  avatarBackground: '#6D4AFF',

  checkboxColor1: '#B182FF',
  checkboxColor2: '#59C1FB',
  checkboxColor3: '#0EF7F8',
  whitelistPathFill1: '#76DEF2',
  whitelistPathFill2: '#A88DF5',
  startupColor1: '#B182FF',
  startupColor2: '#59C1FB',
  startupColor3: '#0EF7F8',
  warningColor1: '#FFB3FC',
  warningColor2: '#FF5757',
  notApprovedIconColor1: '#000000',
  notApprovedIconColor2: '#5C5373',
  notApprovedIconColor3: '#5D459A',
  rejectModalIconColor1: '#CCB9FF',
  rejectModalIconColor2: '#FF6A6A',
  pendingTxnColor1: '#A88EF5',
  pendingTxnColor2: '#89C2F3',
  pendingTxnColor3: '#77DFF2',
  completedTxnColor1: '#85DAE6',
  completedTxnColor2: '#201F2F',
};
