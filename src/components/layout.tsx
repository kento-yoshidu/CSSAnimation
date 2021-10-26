import React, { ReactNode } from "react"

import Header from "./header"

interface Props {
  children: ReactNode,
  location: string
}

const Layout: React.VFC<Props> = ({ children, location }) => (
  <>
    <Header
      location={location}
    />

    {children}
  </>
)

export default Layout