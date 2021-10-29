import React from "react"

import * as Styles from "../styles/_pageInfo.module.scss"

interface Props {
  date: string
  update: string
}

const PageInfo: React.VFC<Props> = ({ date, update }) => {
  return (
    <div className={Styles.wrapper}>
      <time>投稿日 : {date}</time>
      <time>更新日 : {update}</time>
    </div>
  )
}

export default PageInfo