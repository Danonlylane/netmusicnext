import '../styles/globals.css'

import AppFooter from '../components/app-footer'
import AppHeader from '../components/app-header'
import Discover from '@/pages/discover';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppHeader />
      <Discover />
      <Component {...pageProps} />
      <AppFooter />
    </div>
  )
}

export default MyApp
