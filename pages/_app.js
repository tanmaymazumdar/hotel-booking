import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const {pathname, replace} = useRouter()

  useEffect(() => {
    if (pathname === '/signup') {
      return <Component {...pageProps} />
    } else if (['/login'].indexOf(pathname) === -1) {
      let auth = localStorage.getItem('auth')
      if (auth) {
        auth = JSON.parse(auth)
        if (auth.token && auth.userId) {
          return <Component {...pageProps} />
        }
      } else {
        replace('/login')
      }
    }
  }, [])


  return <Component {...pageProps} />
}
