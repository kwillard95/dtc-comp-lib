import React from 'react'
import { ThemeProvider } from 'styled-components'
import designTokens from './designTokens'

const Theme = (props) => {
  const { children } = props
 return (
  <ThemeProvider theme={designTokens}>
  {children}
</ThemeProvider>
 )
}

export default Theme