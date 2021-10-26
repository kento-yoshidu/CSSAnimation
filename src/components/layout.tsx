import React, { ReactNode } from "react"

import Header from "./header"

interface Props {
  children: ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout