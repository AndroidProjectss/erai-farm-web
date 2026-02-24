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
  metadataBase: new URL('https://erai.kg'),
  title: {
    default: 'ЭрайФарм (ERAI Pharm) — фармацевтическая компания Кыргызстана',
    template: '%s | ЭрайФарм',
  },
  description: 'ЭрайФарм (ERAI Pharm) — фармацевтическая компания и один из крупнейших дистрибьюторов лекарств в Кыргызстане. Бишкек, прямые контракты с производителями, поставки для аптек и медицинских учреждений.',
  keywords: [
    'ЭрайФарм',
    'Эрай фарм',
    'Ерай фарм',
    'Эрвй фарм',
    'ERAI Pharm',
    'ERAI',
    'erai',
    'erai.kg',
    'фармацевтическая компания Кыргызстан',
    'фармдистрибьютор Кыргызстан',
    'лекарства Бишкек',
    'аптечная сеть Кыргызстан',
  ],
  authors: [{ name: 'ЭрайФарм' }],
  applicationName: 'ЭрайФарм',
  creator: 'ЭрайФарм',
  publisher: 'ЭрайФарм',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo-sm.png',
    shortcut: '/logo-sm.png',
    apple: '/logo-sm.png',
  },
  openGraph: {
    title: 'ЭрайФарм (ERAI Pharm) — фармацевтическая компания Кыргызстана',
    description: 'Официальный сайт ERAI Pharm. Поставки фармацевтической продукции, логистика и дистрибуция по Кыргызстану.',
    url: '/',
    siteName: 'ЭрайФарм',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/about.png',
        width: 1200,
        height: 630,
        alt: 'ЭрайФарм — официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ЭрайФарм (ERAI Pharm)',
    description: 'Фармацевтическая компания и дистрибьютор в Кыргызстане',
    images: ['/about.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ЭрайФарм',
    alternateName: 'ERAI Pharm',
    url: 'https://erai.kg',
    logo: 'https://erai.kg/logo-sm.png',
    email: 'eraipharm.corp@erai.kg',
    telephone: '+996312925511',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Профсоюзная, дом № 63',
      addressLocality: 'Бишкек',
      postalCode: '720080',
      addressCountry: 'KG',
    },
    sameAs: ['https://www.instagram.com/erai_pharm'],
  };

  return (
    <html lang="ru" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
