import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Component01 from "../components/01/index"
import Component02 from "../components/02/index"

const Styles = require("../styles/_index.module.scss")

interface Props {
  location: {
    pathname: string
  }
} 

const Home: React.VFC<Props> = ({ location }) => {
  return (
    <Layout
      location={location}
    >
      <div className={Styles.wrapper}>
        <Link
          className={Styles.box}
          to="01"
        >
          <Component01 />
        </Link>

        <Link
          className={Styles.box}
          to="02"
        >
          <Component02 />
        </Link>
      </div>
    </Layout>
  )
}

export default Home