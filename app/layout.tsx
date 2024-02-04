import { ReactNode } from "react";

import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

interface Metadata {
  title: string;
  description: string;
  image?: string;
}

export const metadata: Metadata = {
  title: "Lorem Ipsum: Your Complete Guide to Placeholder Text",
  description:
    "Everything you need to know about Lorem Ipsum. Discover its history, meaning, and how to use this placeholder text effectively in design and development.",
  image:
    "https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.image && (
          <meta property="og:image" content={metadata.image} />
        )}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: metadata.title,
            description: metadata.description,
            image: metadata.image,
            author: {
              "@type": "Person",
              name: "Ihor Dzhus",
            },
            publisher: {
              "@type": "Organization",
              name: "Developers",
              logo: {
                "@type": "ImageObject",
                url: "https://static.vecteezy.com/system/resources/thumbnails/004/699/890/small/it-letter-logo-isolated-on-white-background-vector.jpg",
              },
            },
            datePublished: "2024-02-04",
          })}
        </script>
      </Head>
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  );
}
