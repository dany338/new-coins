const colors = {
  white: "#fff",
  black: "#000",
  primaryBlue: "#3366cc",
  primaryBlueLight: "#6896fc",
  fuchsia: "#F42F63",
  fuchsiaDark: "#7d203e",
  blue: "#4d2ff4",
  red: "#fb3764",
  green: "#15da76",

  lightGrey: "#CCCCCC",
  mediumGrey: "#8d8d8d",
  darkGrey: "#4A4A4F",
  darkGreyDarken: "#1b1b20",

  teal: "#459d8e",
  lightTeal: "#E2ECED",
  darkTeal: "#286357",

  grainsboro: "#e6e6e6",
  ceruleanblue: "#3366CC",
  bluelagoon: "#06616c",
  mayablue: "#6896FC",
  bastille: "#323234",
  sun: "#F08439",
  staleblue: "#6369d1",
  cadetblue: "#5c9ead",
  darkmidnightblue: "#033860",
  romansilver: "#8d8d92"
};

const themes = {
  light: {
    colors,
    black: colors.black,
    primaryColor: colors.blue,
    primaryColorDark: colors.fuchsiaDark,
    secondaryColor: colors.primaryBlue,
    secondaryColorLight: colors.primaryBlueLight,
    complementaryColor: colors.lightTeal,
    complementaryColorDark: colors.darkTeal,
    hoverColor: colors.bluelagoon,
    secondaryHoverColor: colors.cadetblue,
    headerTextColor: colors.black,
    pageBackground: colors.lightGrey,
    headerBackgrond: colors.white,
    sideBarBackground: colors.staleblue,
    sideBarBackgroundHover: colors.cadetblue,
    footerBackground: colors.grainsboro,
    cardShadow: `0px 3px 6px -1px ${colors.darkGrey}`,
    dropdownMenuShadow: `3px 3px 10px -2px ${colors.darkGrey}`
  }
};

export default themes;
