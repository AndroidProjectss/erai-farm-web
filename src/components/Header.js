'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';
import { useLocale } from '@/i18n/LocaleProvider';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.career, href: '/career' },
    { label: t.nav.gallery, href: '/gallery' },
    { label: t.nav.contacts, href: '/contacts' },
  ];

  const toggleLocale = () => {
    setLocale(locale === 'ru' ? 'kg' : 'ru');
  };

  const switcherLabel = locale === 'ru' ? 'KG' : 'RU';

  const renderLanguageSwitcher = () => (
    <Button
      onClick={toggleLocale}
      aria-label="Toggle language"
      sx={{
        minWidth: 94,
        height: 54,
        px: 2.2,
        borderRadius: 2.5,
        border: '1px solid',
        borderColor: 'grey.300',
        backgroundColor: 'grey.100',
        color: 'text.primary',
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'grey.200',
          borderColor: 'grey.400',
        },
      }}
    >
      <Box component="span" sx={{ fontSize: '1.05rem', lineHeight: 1, color: 'primary.main' }}>
        🌐
      </Box>
      <Box component="span" sx={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1 }} suppressHydrationWarning>
        {switcherLabel}
      </Box>
    </Button>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        background: 'linear-gradient(135deg, #16348a 0%, #0d2b52 100%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Image
          src="/logo-wide.png"
          alt="ЭрайФарм"
          width={120}
          height={48}
          style={{ objectFit: 'contain' }}
          priority
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flex: 1, pt: 4 }}>
        {navItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                sx={{
                  py: 2,
                  px: 3,
                  borderLeft: pathname === item.href ? '4px solid #04742c' : '4px solid transparent',
                  backgroundColor: pathname === item.href ? 'rgba(4, 116, 44, 0.2)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      fontSize: '1.25rem',
                      fontWeight: pathname === item.href ? 600 : 400,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>
      <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Box sx={{ mb: 2 }}>{renderLanguageSwitcher()}</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <PhoneIcon fontSize="small" />
          <span>+996 (312) 925511</span>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          component={Link}
          href="/contacts"
          sx={{ mt: 2 }}
        >
          {t.nav.contactUs}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backgroundImage: 'none',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 2px 24px rgba(0,0,0,0.10)',
          transition: 'all 0.3s ease',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              minHeight: { xs: 88, md: 98 },
              px: { xs: 0 },
              '& a:focus': { outline: 'none' },
              '& a:focus-visible': { outline: 'none' },
            }}
          >
            {/* Логотип */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 0.75, sm: 0.9 },
                    py: { xs: 0.2, sm: 0.3 },
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    lineHeight: 0,
                  }}
                >
                  <Image
                    src="/logo-wide.png"
                    alt="ЭрайФарм"
                    width={130}
                    height={52}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </Box>
              </motion.div>
            </Link>

            {/* Desktop навигация */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {renderLanguageSwitcher()}
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Button
                      component={Link}
                      href={item.href}
                      sx={{
                        color: 'text.primary',
                        fontWeight: pathname === item.href ? 600 : 500,
                        position: 'relative',
                        px: 2,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 6,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: pathname === item.href ? '60%' : '0%',
                          height: 3,
                          backgroundColor: 'secondary.main',
                          borderRadius: 2,
                          transition: 'width 0.3s ease',
                        },
                        '&:hover::after': {
                          width: '60%',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  href="/contacts"
                  sx={{ ml: 2 }}
                >
                  {t.nav.contactShort}
                </Button>
              </Box>
            )}

            {/* Mobile menu button */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {renderLanguageSwitcher()}
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: 'primary.main',
                    backgroundColor: 'rgba(22, 52, 138, 0.08)',
                    '&:hover': {
                      backgroundColor: 'rgba(22, 52, 138, 0.14)',
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 320,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer для контента */}
      <Toolbar sx={{ minHeight: { xs: 80, md: 90 } }} />
    </>
  );
}
