<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #444;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.main {
  width: 61vw;
  margin: 0 auto;
}

.main p {
  margin-bottom: 10px;
  font-size: 1.8rem;
  line-height: 1.7;
  text-indent: .7rem;
}

@media screen and (max-width: 768px) {
  .main {
    width: 92%;
  } 

  .main p {
    font-size: 1.6rem;
    line-height: 1.6;
    margin-bottom: 8px;
  }
}

.section {
  padding: 30px 0;
}

h2.section-title {
  margin-bottom: 30px;
  padding-left: 2.5rem;
  color: #444;
  font-size: 3.3rem;
  border-left: 7px solid #777;
}

@media screen and (max-width: 768px) {
  .section {
    padding: 20px 0;
  }

  h2.section-title {
    font-size: 2rem;
    padding-left: 1.8rem;
  }
}

/*
  シンタックスハイライト
 */

pre {
  width: 90%;
  margin: 20px 0 20px 20px;
}

pre code {
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 1.7;
  letter-spacing: 0.5px;
}

@media screen and (max-width: 768px) {
  pre {
    margin: 10px 0 10px 10px;
  } 

  pre code {
    font-size: 1.3rem;
    line-height: 1.6;
  }
}
</style>