import React from 'react'

import Header from '../header/header'
import Footer from '../footer/footer'

const Layout = (props) => {
  let homepage = props.home ? true : false
  return (
    <div>
      <Header home={homepage} />
      { props.children }
      <Footer />
    </div>
  )
}

export default Layout
