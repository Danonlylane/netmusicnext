import '../styles/globals.css'

import AppFooter from '../components/app-footer'
import AppHeader from '../components/app-header'
import Discover from './discover/index.page';

import { Provider } from 'react-redux';
import store from '@/store'



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppHeader />
      <Discover/>
      <Component {...pageProps} />
      <AppFooter />
    </Provider>
  )
}

export default MyApp
