import Head from 'next/head'
import { Container } from 'semantic-ui-react'

import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <title>Next.js 9 MERN!</title>
    </Head>
    <Header />
    <Container text style={{ paddingTop: '1em' }}>
      {children}
    </Container>
  </>
)

export default Layout
