import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Component01 from "../components/01/index"

const Styles = require("../styles/_index.module.scss")

interface Props {
  location: {
    pathname: string
  }
} 

const Home: React.VFC<Props> = ({ location }) => {
  return (
    <Layout
      location={location.pathname}
    >
      <div className={Styles.wrapper}>
        <Link
          className={Styles.box}
          to="animation01"
        >
          <Component01 />
        </Link>
      </div>
    </Layout>
  )
}

export default Home