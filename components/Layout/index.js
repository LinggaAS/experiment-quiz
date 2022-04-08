import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Typography, Box } from '@mui/material'

const Layout = ({ title, description, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{ title }</title>
        <meta name='description' content={description} />
        <link rel="icon" href="/asset/img/qexs-flag.png"></link>
      </Head>

      <main>
        { children }
      </main>

      <footer>
        <Box sx={(theme) => ({ textAlign: 'center', margin: '20px 10px', color: theme.palette.secondary.main, '& a': { textDecoration: 'underline' } })}>
          <Typography component="p" variant="caption">Developed by Agmar & Lingga</Typography>
          <Typography component="p" variant="caption">
            Contact us on 
            <Link href="mailto:agmarputra@gmail.com"><a> agmarputra@gmail.com</a></Link> or 
            <Link href="mailto:lasetiabudi@gmail.com"><a> lasetiabudi@gmail.com</a></Link>
          </Typography>
        </Box>
      </footer>
    </Fragment>
  )
}

Layout.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Layout.defaultProps = {
  title: 'QEXS',
  description: 'QEXS by Agmar, Lingga, Abdullah and Fannan',
}
 
export default Layout