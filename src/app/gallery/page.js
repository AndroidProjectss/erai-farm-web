import GalleryPage from './GalleryPage';

export const metadata = {
  title: 'Галерея - ЭрайФарм | Фото компании и складов',
  description: 'Фотогалерея фармацевтической компании ЭрайФарм. Фото складов, офиса, сотрудников и эксклюзивной продукции.',
  openGraph: {
    title: 'Галерея - ЭрайФарм',
    description: 'Фотографии фармацевтической компании ЭрайФарм',
  },
};

export default function Gallery() {
  return <GalleryPage />;
}
