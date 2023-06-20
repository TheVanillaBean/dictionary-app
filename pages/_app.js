import AppProvider from '@/context/appContext.context';
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
      <AppProvider>
        <Head>
          <title>Dictionary App</title>
          <meta name='description' content='Search for the definition of a word' />
          <meta name='viewport' content='width=device-width, user-scalable=no' />
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </main>
  );
}
