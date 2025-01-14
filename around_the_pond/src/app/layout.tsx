import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/styles/globals.css";
import NavBar from "./components/NavBar";
import Sky from "./components/Sky";
import { SkyProvider } from "./provider";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Life around the pond",
  description: "Blog and artwork of Thomas Jones",
  authors: [{name: 'effie'}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet"></link>
      
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SkyProvider>
        
          <Sky>
              <div>
                <NavBar/>
              </div>
              <div>
                {children}
              </div>
          </Sky>
        
        </SkyProvider>
      </body>
    </html>
  );
}
