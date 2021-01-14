import Header from "../components/Header"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="ZWJmNDMwM2ItNWM3YS00ODYxLWE1ZDktZWZkMjAwOTgyOTE4NjM3NDYxNDMxNjYzMDA3OTEx" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
      </Head>
      <Header />
      <main className="main">
        <div className="promotional-message">
          <h3>REDISCOVER</h3>
          <h2>Fishkeeping</h2>
          <p>An <strong>exclusive collection of bettas</strong> available for everyone.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Index