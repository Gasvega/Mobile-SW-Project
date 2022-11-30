import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#121330',
    secondary: '#414757',
    error: '#f13a59', //오류시 텍스트 색 -> 빨간계열
    success: '#00B386',
  },
}
