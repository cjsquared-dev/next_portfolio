import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./ui/Footer";

import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
