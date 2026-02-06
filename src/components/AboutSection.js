'use client';
import { Box, Typography, Container, Grid, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  'Надежный партнер с 1999 года',
  'Прямые контракты с производителями',
  'Современные складские комплексы',
  'Оперативная доставка по всей стране',
  'Широкий ассортимент препаратов',
];

export default function AboutSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                {/* PLACEHOLDER: Нужно фото склада или офиса ЭрайФарм */}
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 300, md: 450 },
                    background: 'linear-gradient(135deg, #16348a 0%, #04742c 100%)',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Декоративные линии */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '200%',
                      height: '200%',
                      background: `
                        repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 20px,
                          rgba(255,255,255,0.03) 20px,
                          rgba(255,255,255,0.03) 40px
                        )
                      `,
                    }}
                  />
                  
                  <Box sx={{ textAlign: 'center', p: 4, zIndex: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{ color: 'white', mb: 2 }}
                    >
                      📷
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: 'rgba(255,255,255,0.8)' }}
                    >
                      Здесь будет профессиональное фото<br />
                      склада или офиса компании
                    </Typography>
                  </Box>
                </Box>

                {/* Декоративный элемент */}
                <Paper
                  elevation={8}
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    right: -20,
                    width: { xs: 100, md: 150 },
                    height: { xs: 100, md: 150 },
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #04742c 0%, #0a8a38 100%)',
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <Box>
                    <Typography variant="h3" fontWeight={700}>
                      27
                    </Typography>
                    <Typography variant="caption" sx={{ lineHeight: 1.2 }}>
                      лет опыта
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  letterSpacing: 3,
                  fontWeight: 600,
                }}
              >
                О компании
              </Typography>
              
              <Typography
                variant="h2"
                sx={{
                  color: 'primary.main',
                  mt: 1,
                  mb: 3,
                }}
              >
                Фармацевтическая компания ЭрайФарм
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: '1.125rem',
                  lineHeight: 1.8,
                }}
              >
                Фармацевтическая компания ЭрайФарм основана в 1999 году и на сегодняшний 
                день является одним из крупнейших фармдистрибьюторов в Кыргызстане. 
                Мы обеспечиваем надежную доставку качественных лекарственных препаратов 
                по всей стране.
              </Typography>

              <Box sx={{ mb: 4 }}>
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: 'secondary.main',
                          fontSize: 24,
                        }}
                      />
                      <Typography variant="body1" fontWeight={500}>
                        {feature}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    href="/about"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Подробнее о нас
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
