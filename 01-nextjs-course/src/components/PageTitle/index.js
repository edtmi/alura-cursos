import Head from "next/head";

export function PageTitle({ children }) {
  return (
    <Head>
      <title>
        {children}
      </title>
    </Head>
  )
}