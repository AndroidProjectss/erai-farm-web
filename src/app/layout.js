import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/theme/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'ЭрайФарм - Фармацевтическая компания Кыргызстана',
  description: 'Фармацевтическая компания ЭрайФарм основана в 1999 году и является одним из крупнейших фармдистрибьюторов в Кыргызстане. 27 лет на рынке, 400+ сотрудников, 70+ прямых контрактов с производителями.',
  keywords: 'ЭрайФарм, фармацевтика, дистрибьютор, Кыргызстан, Бишкек, лекарства, медицина',
  authors: [{ name: 'ЭрайФарм' }],
  creator: 'ЭрайФарм',
  icons: {
    icon: '/logo-sm.png',
    shortcut: '/logo-sm.png',
    apple: '/logo-sm.png',
  },
  openGraph: {
    title: 'ЭрайФарм - Фармацевтическая компания Кыргызстана',
    description: 'Один из крупнейших фармдистрибьюторов в Кыргызстане с 1999 года',
    url: 'https://erai.kg',
    siteName: 'ЭрайФарм',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
