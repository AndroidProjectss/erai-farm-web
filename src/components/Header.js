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

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'О нас', href: '/about' },
  { label: 'Карьера', href: '/career' },
  { label: 'Галерея', href: '/gallery' },
  { label: 'Контакты', href: '/contacts' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const getScrollY = () => {
      const windowY = window.scrollY || 0;
      const docY = document.documentElement?.scrollTop || document.body?.scrollTop || 0;
      return Math.max(windowY, docY);
    };

    const updateScrolled = () => {
      setScrolled(getScrollY() > 50);
    };

    let raf1 = 0;
    let raf2 = 0;
    let timeoutId = 0;

    // Next.js can restore scroll position asynchronously after navigation.
    // Re-check a few times to avoid the header "sticking" in the wrong state.
    updateScrolled();
    raf1 = window.requestAnimationFrame(updateScrolled);
    raf2 = window.requestAnimationFrame(updateScrolled);
    timeoutId = window.setTimeout(updateScrolled, 150);

    window.addEventListener('scroll', updateScrolled, { passive: true });
    window.addEventListener('resize', updateScrolled, { passive: true });
    window.addEventListener('pageshow', updateScrolled);

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.clearTimeout(timeoutId);
      window.removeEventListener('scroll', updateScrolled);
      window.removeEventListener('resize', updateScrolled);
      window.removeEventListener('pageshow', updateScrolled);
    };
  }, [pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Закрываем меню при смене страницы
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
          src="/logo.png"
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
                  primaryTypographyProps={{
                    fontSize: '1.25rem',
                    fontWeight: pathname === item.href ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>
      <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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
          Связаться с нами
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
              minHeight: { xs: 70, md: 80 },
              px: { xs: 0 },
            }}
          >
            {/* Логотип */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 1, sm: 1.25 },
                    py: { xs: 0.75, sm: 0.9 },
                    borderRadius: 2.5,
                    backgroundColor: 'transparent',
                    border: '1px solid transparent',
                    backdropFilter: 'none',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="ЭрайФарм"
                    width={140}
                    height={56}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </Box>
              </motion.div>
            </Link>

            {/* Desktop навигация */}
            {mounted && !isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                  Связаться
                </Button>
              </Box>
            )}

            {/* Mobile menu button */}
            {mounted && isMobile && (
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
      <Toolbar sx={{ minHeight: { xs: 70, md: 80 } }} />
    </>
  );
}
