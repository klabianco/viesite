import Script from 'next/script'
import Head from "next/head";

const Header = ({title}) => {
    return (
        <>
        <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="author" content="Vienna Labianca" />
        <meta name="google-site-verification" content="nbTobdLoCc4hK3bvPn20V8frJrQnwjMooxreqNZuMvQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-9PQ2Z2KZ4Y`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9PQ2Z2KZ4Y', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      </>
    )
}

export default Header;