import * as React from 'react'
import { AppProps } from 'next/app'
import 'sanitize.css'
// ____________________________________________
//
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
// ____________________________________________
//
export default App
