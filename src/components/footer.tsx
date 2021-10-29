import React from "react"
import { Link } from "gatsby"

const Styles = require("../styles/_footer.module.scss")

const Footer = () => (
  <footer className={Styles.footer}>
    <h1>CSS Animation & Tips</h1>

    <Link to="/">Home</Link>
    <Link to="https://">Home</Link>
  </footer>
)

export default Footer