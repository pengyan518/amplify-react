import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import {Link} from 'react-router-dom'
import * as React from 'react'

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Link color="inherit" to="/privacy-policy">
        Privacy Policy 💓
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
