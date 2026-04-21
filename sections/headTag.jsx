import {} from "react";
import Head from "next/head";

export default function HeadTag() {
  const pageUrl = "https://fikrimobiliu.site/";
  const previewImage = "https://fikrimobiliu.site/images/Fikri-profile-cutout.png";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://fikrimobiliu.site/#website",
        url: "https://fikrimobiliu.site/",
        name: "Fikri Mobiliu - Portfolio",
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://fikrimobiliu.site/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Person",
        "@id": "https://fikrimobiliu.site/#person",
        name: "Fikri Mobiliu",
        alternateName: "fikrimobiliu",
        url: "https://fikrimobiliu.site/",
        image: "https://fikrimobiliu.site/images/Fikri-profile-cutout.png",
        jobTitle: "DevSec Professional",
        description:
          "DevSec professional focused on secure application, network, and website development.",
        sameAs: [
          "https://github.com/zlfikrimobiliu",
          "https://www.instagram.com/zlfikrimobiliu/"
        ],
        worksFor: {
          "@type": "Organization",
          name: "Independent / Freelance"
        },
        knowsAbout: [
          "DevSecOps",
          "Web Development",
          "Application Security",
          "Network Security",
          "Frontend Development"
        ]
      }
    ]
  };

  return (
    <Head>
      <title>Fikri Mobiliu - Portfolio</title>

      <meta charSet="utf-8" />
      <link rel="canonical" href={pageUrl} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

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
        content={`Fikri Mobiliu is a DevSec professional focused on secure web, application, and network development.`}
      />
      <meta
        name="image"
        content={previewImage}
      />
      <meta name="keywords" content="Fikri Mobiliu, Frontend Developer, Web Developer" />
      <meta name="author" content="Fikri Mobiliu" />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      <meta property="og:site_name" content="Fikri Mobiliu - Portfolio" />
      <meta property="og:title" content={`Fikri Mobiliu - DevSec Portfolio`} />
      <meta
        property="og:description"
        content={`Discover Fikri Mobiliu's portfolio, projects, and DevSec expertise in secure web and network development.`}
      />
      <meta
        property="og:image"
        content={previewImage}
      />
      <meta property="og:image:alt" content="Fikri Mobiliu profile portrait" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fikrimobiliu" />
      <meta name="twitter:creator" content={`fikrimobiliu`} />
      <meta name="twitter:title" content={`Fikri Mobiliu - DevSec Portfolio`} />
      <meta
        name="twitter:description"
        content={`Portfolio and profile of Fikri Mobiliu, DevSec professional for secure digital products.`}
      />
      <meta name="twitter:image" content={previewImage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
