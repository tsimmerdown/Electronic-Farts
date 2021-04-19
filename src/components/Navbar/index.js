import React from "react"
import Nav1 from "./Nav1"
import Nav2 from "./Nav2"

const Navbar = ({ siteTitle }) => {
  return (
    <>
      <Nav1>{siteTitle}</Nav1>
      <Nav2>{siteTitle}</Nav2>
    </>
  )
}

export default Navbar
