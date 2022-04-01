import { Fragment } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const PageMeta = ({ title, description, children }) => {
  return (
    <Fragment>
      <Head>
        <title>{ title }</title>
        <meta name='description' content={description} />
        <link rel="icon" href="/asset/img/qexs-flag.png"></link>
      </Head>

      { children }
    </Fragment>
  )
}

PageMeta.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
}

PageMeta.defaultProps = {
  title: 'QEXS',
  description: 'QEXS by Agmar, Lingga, Abdullah and Fannan',
}
 
export default PageMeta