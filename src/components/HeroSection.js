'use client';
import { Box, Typography, Container, Button, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';

const partners = ['KRKA', 'Sanofi', 'Takeda', 'Nobel', 'STADA', '+70'];

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        background: 'linear-gradient(135deg, #16348a 0%, #0d2b52 60%, #0a1f3d 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: { xs: 'flex-start', md: 'center' },
        // Pull the hero behind the fixed AppBar so the header can stay transparent at the top.
        mt: { xs: '-70px', md: '-80px' },
        pt: { xs: '110px', sm: '120px', md: '150px' },
        pb: { xs: 6, md: 0 },
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(4, 116, 44, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: { xs: 250, md: 400 },
          height: { xs: 250, md: 400 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22, 52, 138, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Grid pattern overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: { xs: 5, lg: 8 },
          }}
        >
          {/* Left content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', lg: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  backgroundColor: 'rgba(4, 116, 44, 0.2)',
                  border: '1px solid rgba(4, 116, 44, 0.3)',
                  borderRadius: 10,
                  px: 2.5,
                  py: 1,
                  mb: { xs: 3, md: 4 },
                }}
              >
                <VerifiedIcon sx={{ color: '#0a8a38', fontSize: 18 }} />
                <Typography
                  variant="body2"
                  sx={{ color: '#0a8a38', fontWeight: 600, letterSpacing: 0.5 }}
                >
                  3 место по рейтингу ввоза в КР
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  // Smaller on narrow screens to avoid any automatic hyphenation.
                  fontSize: { xs: 'clamp(1.55rem, 7.2vw, 2.05rem)', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: { xs: 2.5, md: 3 },
                  hyphens: 'none',
                }}
              >
                Фармацевтическая
                <Box
                  component="span"
                  sx={{
                    display: 'block',
                    background: 'linear-gradient(90deg, #0a8a38 0%, #04742c 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  компания ЭрайФарм
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: { xs: 3, md: 4 },
                  maxWidth: 600,
                  mx: { xs: 'auto', lg: 0 },
                  fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.5rem' },
                }}
              >
                Лидер фармацевтической дистрибуции в Кыргызстане с 1999 года. 
                78 прямых контрактов с ведущими мировыми производителями.
              </Typography>

              {/* CTA Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  justifyContent: { xs: 'center', lg: 'flex-start' },
                  mb: { xs: 3.5, md: 5 },
                }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    href="/contacts"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: 1.4,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      borderRadius: 3,
                    }}
                  >
                    Связаться с нами
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    href="/about"
                    sx={{
                      px: { xs: 3, sm: 4 },
                      py: 1.4,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      borderRadius: 3,
                      borderColor: 'rgba(255,255,255,0.3)',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    О компании
                  </Button>
                </motion.div>
              </Box>

              {/* Partner chips */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255,255,255,0.5)', mr: 1, alignSelf: 'center' }}
                >
                  Партнёры:
                </Typography>
                {partners.map((partner) => (
                  <Chip
                    key={partner}
                    label={partner}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: 500,
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.15)' },
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Right content - Stats cards */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2.5, md: 3 },
              maxWidth: { xs: '100%', lg: 500 },
            }}
          >
            {/* Main stat card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: 'rgba(4, 116, 44, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUpIcon sx={{ color: '#0a8a38', fontSize: 28 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                      Объём продаж 2024
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '2rem', sm: '2.5rem' } }}
                    >
                      $44.2M
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    backgroundColor: 'rgba(4, 116, 44, 0.2)',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                  }}
                >
                  <TrendingUpIcon sx={{ color: '#0a8a38', fontSize: 16 }} />
                  <Typography variant="body2" sx={{ color: '#0a8a38', fontWeight: 600 }}>
                    +37% год к году
                  </Typography>
                </Box>
              </Paper>
            </motion.div>

            {/* Stats row */}
            <Box
              sx={{
                display: 'grid',
                gap: { xs: 2, md: 3 },
                gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(3, minmax(0, 1fr))' },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 0.5 }}>
                    15%
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Доля рынка
                  </Typography>
                </Paper>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 0.5 }}>
                    145+
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Аптек в сети
                  </Typography>
                </Paper>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ height: '100%', gridColumn: { xs: '1 / -1', sm: 'auto' } }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 0.5 }}>
                    100%
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Покрытие КР
                  </Typography>
                </Paper>
              </motion.div>
            </Box>

            {/* Pharmacy network card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(4, 116, 44, 0.3) 0%, rgba(4, 116, 44, 0.1) 100%)',
                  border: '1px solid rgba(4, 116, 44, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LocalPharmacyIcon sx={{ color: '#0a8a38', fontSize: 32 }} />
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 0.5 }}>
                    Розничная сеть
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Более 300 фармацевтов
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Цель: 200 точек к 2026
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
