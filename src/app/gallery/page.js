import GalleryPage from './GalleryPage';
import { cookies } from 'next/headers';

const gallerySeo = {
  ru: {
    title: 'Галерея - ЭрайФарм | Фото компании и складов',
    description:
      'Фотогалерея фармацевтической компании ЭрайФарм. Фото складов, офиса, сотрудников и эксклюзивной продукции.',
    ogTitle: 'Галерея - ЭрайФарм',
    ogDescription: 'Фотографии фармацевтической компании ЭрайФарм',
    ogLocale: 'ru_RU',
  },
  kg: {
    title: 'Галерея - ЭрайФарм | Компаниянын жана кампалардын сүрөттөрү',
    description:
      'ЭрайФарм фармацевтикалык компаниясынын сүрөт галереясы. Кампалардын, кеңсенин, кызматкерлердин жана эксклюзивдүү продукциянын сүрөттөрү.',
    ogTitle: 'Галерея - ЭрайФарм',
    ogDescription: 'ЭрайФарм фармацевтикалык компаниясынын сүрөттөрү',
    ogLocale: 'ky_KG',
  },
};

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'kg' ? 'kg' : 'ru';
  const seo = gallerySeo[locale];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: '/gallery',
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      locale: seo.ogLocale,
      url: '/gallery',
    },
  };
}

export default function Gallery() {
  return <GalleryPage />;
}
