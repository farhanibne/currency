import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Currency List  </title>
      <link rel="icon" href="/dz.png" />
      </Head> 
      <Component {...pageProps} />
    </>
 
  )

}

export default MyApp
