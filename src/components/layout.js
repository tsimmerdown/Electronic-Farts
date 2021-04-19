/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Navbar from "./Navbar"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
