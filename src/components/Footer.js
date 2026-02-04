'use client';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'О нас', href: '/about' },
  { label: 'Карьера', href: '/career' },
  { label: 'Галерея', href: '/gallery' },
  { label: 'Контакты', href: '/contacts' },
];

const socialLinks = [
  { icon: TelegramIcon, href: '#', label: 'Telegram' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
];

export default function Footer() {
  const theme = useTheme();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #16348a 0%, #0d2b52 100%)',
        color: 'white',
        pt: { xs: 6, md: 8 },
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Декоративные элементы */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(4, 116, 44, 0.1)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          filter: 'blur(40px)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Логотип и описание */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ mb: 3 }}>
                <Box
                  component="img"
                  src={`${basePath}/logo.png`}
                  alt="ЭрайФарм"
                  sx={{
                    width: { xs: 130, sm: 160 },
                    height: { xs: 52, sm: 64 },
                    objectFit: 'contain',
                    // Do not invert: the logo is a PNG and inversion turns it into a white block.
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 3, lineHeight: 1.8 }}>
                Фармацевтическая компания ЭрайФарм — один из крупнейших 
                фармдистрибьюторов в Кыргызстане с 1999 года.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'secondary.main',
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <social.icon />
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Навигация */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Навигация
              </Typography>
              <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        '&:hover': {
                          color: 'white',
                          transform: 'translateX(5px)',
                        },
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Контакты */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Контакты
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <PhoneIcon sx={{ fontSize: 20, mt: 0.3, color: 'secondary.light' }} />
                  <Box>
                    <Typography variant="body2">+996 (312) 925511</Typography>
                    <Typography variant="body2">+996 (312) 925510</Typography>
                    <Typography variant="body2">+996 (312) 995509</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <EmailIcon sx={{ fontSize: 20, color: 'secondary.light' }} />
                  <Typography variant="body2" sx={{ overflowWrap: 'anywhere' }}>
                    zakupki@erai.kg
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Адрес */}
          <Grid size={{ xs: 12, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Адрес
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: 20, mt: 0.3, color: 'secondary.light' }} />
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  720080, г. Бишкек,<br />
                  ул. Профсоюзная, дом № 63
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2026 ЭрайФарм. Все права защищены.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Разработано с ❤️ в Кыргызстане
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
