// src/pages/_app.js

import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/fonts/stylesheet.css";

import Header from "../components/Header";
import Footer from "../components/Footer";


import { useRouter } from "next/router";
import Home from "./Home";
import IBDP from "./ibdp";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  let RenderedComponent = null;

  if (router.pathname === "/") {
    RenderedComponent = <Home />;
  } else if (router.pathname === "/ibdp") {
    RenderedComponent = <IBDP />;
  } else {
    RenderedComponent = <Component {...pageProps} />;
  }

  return (
    <>
      <Header />
      {RenderedComponent}
      <Footer />
    </>
  );
}
