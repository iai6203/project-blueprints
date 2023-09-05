import React from 'react'

import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://devjs-portfolio.vercel.app/"
        target="_blank"
      >
        Kim JaeSoek
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Home = () => {
  return (
    <Container maxWidth="sm">
      <div className="my-4">
        <Typography
          variant="h5"
          component="h1"
          align="center"
          fontWeight="bolder"
          gutterBottom
        >
          Material UI CRA Example
          <br />
          with Tailwind CSS in TypeScript
        </Typography>
        <Slider
          className="my-4"
          defaultValue={50}
          classes={{ active: 'shadow-none' }}
          slotProps={{ thumb: { className: 'hover:shadow-none' } }}
        />
        <Copyright />
      </div>
    </Container>
  )
}

export default Home
