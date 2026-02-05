import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <nav>
        <Link href="/">home</Link> | <Link href="/login">login</Link>
      </nav> */}
      <Component {...pageProps} />
    </Layout>
  );
}
