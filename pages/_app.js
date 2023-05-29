import '@/styles/globals.css';
import { Inconsolata, Inter, Lora } from 'next/font/google';
import Head from 'next/head';

const InterFont = Inter({
  variable: '--font-inter',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const LoraFont = Lora({
  variable: '--font-lora',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

const InconsolataFont = Inconsolata({
  variable: '--font-inconsolata',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${InterFont.variable} ${LoraFont.variable} ${InconsolataFont.variable}`}>
      <Head>
        <title>Dictionary App</title>
        <meta name='description' content='Search for the definition of a word' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
