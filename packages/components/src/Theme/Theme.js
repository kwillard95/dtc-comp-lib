import React from 'react'
import { ThemeProvider } from 'styled-components'
import designTokens from './designTokens'

const Theme = (props) => {
  const { children, className } = props
 return (
  <ThemeProvider className={className} theme={designTokens}>
  {children}
</ThemeProvider>
 )
}

export default Theme