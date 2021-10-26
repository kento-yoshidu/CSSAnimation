import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import Component01 from "../components/01/index"

const Styles = require("../styles/_index.module.scss")

export default function Home() {
  return (
    <Layout>
      
      <div className={Styles.wrapper}>
        <Link
          className={Styles.box}
          to="animation01"
        >
          <Component01 />
        </Link>
        <div className={Styles.box}>
          box
        </div>
        <div className={Styles.box}>
          box
        </div>
        <div className={Styles.box}>
          box
        </div>
        <div className={Styles.box}>
          box
        </div>
      </div>
    </Layout>
  )
}
