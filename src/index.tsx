import * as React from 'react'
import {createRoot} from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material/styles'
import App from './App'
import theme from './theme'
// import aws amplify
import {Amplify} from 'aws-amplify'
import awsExports from './aws-exports'
import AuthProvider from './contexts/AuthContext'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

//Check if you are in localhost or production

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.

    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.

    window.location.hostname.match(/^127(?:.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

const signInURI = awsExports.oauth.redirectSignIn.split(',')

const signOutURI = awsExports.oauth.redirectSignOut.split(',')

if (isLocalhost) {
  awsExports.oauth.redirectSignIn = signInURI[0]

  awsExports.oauth.redirectSignOut = signOutURI[0]
} else if (
  window.location.hostname === 'https://master.d2k0z3rns6w91v.amplifyapp.com/'
  // Add Your Application Domain here. For Example:
  // https://{env}.{appID}.amplifyapp.com/
) {
  awsExports.oauth.redirectSignIn = signInURI[1]

  awsExports.oauth.redirectSignOut = signOutURI[1]
} else {
  console.debug('This is not possible')
}

// configure amplify
Amplify.configure(awsExports)

root.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <CssBaseline />
      <App />
    </AuthProvider>
  </ThemeProvider>
)
