import ContactsPage from './ContactsPage';

export const metadata = {
  title: 'Контакты - ЭрайФарм | Фармацевтическая компания',
  description: 'Контакты фармацевтической компании ЭрайФарм. Адрес: 720080, г. Бишкек, ул. Профсоюзная, 63. Телефон: +996 (312) 925511. Email: eraipharm.corp@erai.kg',
  openGraph: {
    title: 'Контакты - ЭрайФарм',
    description: 'Свяжитесь с нами по вопросам сотрудничества',
  },
};

export default function Contacts() {
  return <ContactsPage />;
}
