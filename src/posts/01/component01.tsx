import React from "react"

const Styles = require("./styles.module.scss")

export const Component01 = () => (
  <div className={`${Styles.baseBoxWrapper} ${Styles.boxWrapper}`}>
    <div className={`${Styles.baseBox} ${Styles.box}`}>
      <p>#01</p>
      <div className={Styles.mask}>
        <p>slide up</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
)

export const Component01A = () => (
  <div className={`${Styles.boxWrapper} ${Styles.boxWrapperA}`}>
    <div className={`${Styles.box} ${Styles.boxA}`}>
      <p>#01</p>
      <div className={Styles.boxAMask}>
        <p>slide up</p>
      </div>
    </div>
  </div>
)

export const Component01B = () => (
  <div className={Styles.boxWrapperB}>
    <div className={`${Styles.box} ${Styles.boxB}`}>
      <p>#01</p>
      <div className={Styles.boxBMask}>
        <p>slide up</p>
      </div>
    </div>
  </div>
)

export const Component01C = () => (
  <div className={Styles.boxWrapperC}>
    <div className={Styles.boxC}>
      <p>#01</p>
      <div className={Styles.boxCMask}>
        <p>slide up</p>
      </div>
    </div>
  </div>
)
