import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <meta name="Parag Durafe" content="Python developer, Java Developer" />
        <meta name="Parag Durafe" content="Python developer, Java Developer" />
        <meta name="Bilal" content="portfolio, python, java, developer" />
        <title>Parag Durafe</title>
      </Head>
      <Component {...pageProps} />
    </>)
}

export default MyApp
