import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";

const sfMono = localFont({
  src: [
    {
      path: './fonts/sf-mono/SFMonoRegular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/sf-mono/SFMonoMedium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/sf-mono/SFMonoBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/sf-mono/SFMonoHeavy.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-sf-mono',
});

export const metadata: Metadata = {
  title: "$scihub UNLOCK SCIENCE",
  description: "$scihub UNLOCK SCIENCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfMono.variable} font-sf antialiased`}>
        {children}
      </body>
    </html>
  );
}
