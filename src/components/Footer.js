'use client';
import Link from 'next/link';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleProvider';

const socialLinks = [
  { icon: InstagramIcon, href: 'https://www.instagram.com/erai_pharm', label: 'Instagram' },
];

export default function Footer() {
  const { t } = useLocale();

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.career, href: '/career' },
    { label: t.nav.gallery, href: '/gallery' },
    { label: t.nav.contacts, href: '/contacts' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #16348a 0%, #0d2b52 100%)',
        color: 'white',
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 7 },
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
          zIndex: 0,
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
          zIndex: 0,
        }}
      />

      {/* Затемнение фона для читаемости */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 5, md: 7 }}>
          {/* Описание и соцсети */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 3, lineHeight: 1.8 }}>
                {t.footer.description}
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
                {t.footer.navigation}
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
                {t.footer.contacts}
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
                    eraipharm.corp@erai.kg
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
                {t.footer.address}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: 20, mt: 0.3, color: 'secondary.light' }} />
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  {t.footer.addressText}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 5, md: 6 }, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

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
            {t.footer.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
