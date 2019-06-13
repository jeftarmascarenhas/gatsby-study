import React from 'react'
import { graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div style={{  margin: '3rem auto', maxWidth: 600 }}>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
