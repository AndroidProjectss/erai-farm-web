import ContactsPage from './ContactsPage';
import { cookies } from 'next/headers';

const contactsSeo = {
  ru: {
    title: 'Контакты - ЭрайФарм | Фармацевтическая компания',
    description:
      'Контакты фармацевтической компании ЭрайФарм. Адрес: 720080, г. Бишкек, ул. Профсоюзная, 63. Телефон: +996 (312) 925511. Email: eraipharm.corp@erai.kg',
    ogTitle: 'Контакты - ЭрайФарм',
    ogDescription: 'Свяжитесь с нами по вопросам сотрудничества',
    ogLocale: 'ru_RU',
  },
  kg: {
    title: 'Байланыш - ЭрайФарм | Фармацевтикалык компания',
    description:
      'ЭрайФарм фармацевтикалык компаниясынын байланыштары. Дареги: 720080, Бишкек, Профсоюзная көчөсү, 63. Телефон: +996 (312) 925511. Email: eraipharm.corp@erai.kg',
    ogTitle: 'Байланыш - ЭрайФарм',
    ogDescription: 'Кызматташуу маселелери боюнча биз менен байланышыңыз',
    ogLocale: 'ky_KG',
  },
};

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'kg' ? 'kg' : 'ru';
  const seo = contactsSeo[locale];

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      locale: seo.ogLocale,
    },
  };
}

export default function Contacts() {
  return <ContactsPage />;
}
