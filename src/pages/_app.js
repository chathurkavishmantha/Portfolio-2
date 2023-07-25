import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Montserrat   } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat  ({
  subsets: ['latin'],
  // variable: '--font-mont'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={`${montserrat.variable} font-montserrat bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
