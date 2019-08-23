import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"

import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar></Navbar>
    {children}
    <Footer></Footer>
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
