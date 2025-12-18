import {} from "react";
import Head from "next/head";

export default function HeadTag() {
  return (
    <Head>
      <title>Fikri Mobiliu - Portfolio</title>

      <meta charSet="utf-8" />
      <link rel="icon" href="/images/logo-fm-transprnt.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0a192f" />
      {/* <!-- Windows Phone --> */}
      <meta name="msapplication-navbutton-color" content="#0a192f" />
      {/* <!-- iOS Safari --> */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#0a192f" />

      <link rel="manifest" href="/manifest.json" />

      <meta
        name="description"
        content={`Fikri Mobiliu - Frontend Developer Portfolio`}
      />
      <meta
        name="image"
        content={"https://i.ibb.co/R7b5mPz/Mask-Group-8.png"}
      />
      <meta name="keywords" content="Fikri Mobiliu, Frontend Developer, Web Developer" />

      <meta property="og:title" content={`Fikri Mobiliu`} />
      <meta
        property="og:description"
        content={`Fikri Mobiliu's portfolio website`}
      />
      <meta
        property="og:image"
        content={"https://i.ibb.co/R7b5mPz/Mask-Group-8.png"}
      />
      <meta property="og:url" content={`https://fikrimobiliu.site/`} />
      <meta property="og:type" content="website" />

      <meta
        name="twitter:card"
        content={"https://i.ibb.co/R7b5mPz/Mask-Group-8.png"}
      />
      <meta name="twitter:creator" content={`fikrimobiliu`} />
      <meta name="twitter:title" content={`Fikri Mobiliu`} />
      <meta
        name="twitter:description"
        content={`Fikri Mobiliu's portfolio website`}
      />
      <meta
        name="twitter:image"
        content={"https://i.ibb.co/R7b5mPz/Mask-Group-8.png"}
      />


    </Head>
  );
}
