import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import usePreventDoubleClick from '../hooks/usePreventDoubleClick'

export default function App({ Component, pageProps }: AppProps) {
  const ref = usePreventDoubleClick()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
