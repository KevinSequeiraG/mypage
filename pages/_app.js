import '../styles/globals.css'
import 'material-icons/iconfont/material-icons.css';
import 'aos/dist/aos.css'
import 'animate.css';
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
