'use client';
import Image from 'next/image';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';

const partnerLogoFiles = [
  'photo_1_2026-02-06_12-39-08.jpg',
  'photo_2_2026-02-06_12-39-08.jpg',
  'photo_3_2026-02-06_12-39-08.jpg',
  'photo_4_2026-02-06_12-39-08.jpg',
  'photo_5_2026-02-06_12-39-08.jpg',
  'photo_6_2026-02-06_12-39-08.jpg',
  'photo_7_2026-02-06_12-39-08.jpg',
  'photo_8_2026-02-06_12-39-08.jpg',
  'photo_9_2026-02-06_12-39-08.jpg',
  'photo_10_2026-02-06_12-39-08.jpg',
  'photo_11_2026-02-06_12-39-08.jpg',
  'photo_12_2026-02-06_12-39-08.jpg',
  'photo_13_2026-02-06_12-39-08.jpg',
  'photo_14_2026-02-06_12-39-08.jpg',
  'photo_15_2026-02-06_12-39-08.jpg',
  'photo_16_2026-02-06_12-39-08.jpg',
];

const otherPartnersLabel = '+60 других';

export default function PartnersSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #16348a 0%, #0d2b52 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                px: 3,
                py: 1,
                borderRadius: 999,
                mb: 3,
              }}
            >
              <HandshakeIcon sx={{ color: '#0a8a38', fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: '#0a8a38',
                  letterSpacing: 3,
                  fontWeight: 700,
                }}
              >
                78 прямых контрактов
              </Typography>
            </Box>

            <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
              Наши партнёры
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                maxWidth: 780,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Логотипы ключевых партнёров и производителей. Полный список включает десятки других
              компаний.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Paper
            elevation={0}
            sx={{
              maxWidth: 1240,
              mx: 'auto',
              p: { xs: 2, sm: 2.5, md: 3 },
              borderRadius: 4,
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              {partnerLogoFiles.map((file, index) => (
                <Box
                  key={file}
                  sx={{
                    width: {
                      xs: 'calc(50% - 16px)',
                      sm: 'calc(33.333% - 16px)',
                      md: 'calc(25% - 16px)',
                      lg: 'calc(16.666% - 16px)',
                    },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.05 + index * 0.03 }}
                    style={{ height: '100%' }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        position: 'relative',
                        height: { xs: 82, sm: 92, md: 102 },
                        borderRadius: 2,
                        backgroundColor: '#fff',
                        border: '1px solid rgba(0,0,0,0.06)',
                        overflow: 'hidden',
                        transition: 'transform 160ms ease, box-shadow 160ms ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 14px 40px rgba(0,0,0,0.22)',
                        },
                      }}
                    >
                      <Box sx={{ position: 'absolute', inset: 0, p: { xs: 0.5, md: 1 } }}>
                        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                          <Image
                            src={`/partners/${file}`}
                            alt={`Логотип партнёра ${index + 1}`}
                            fill
                            sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, (max-width: 1200px) 25vw, 16vw"
                            style={{ objectFit: 'contain' }}
                            priority={index < 6}
                          />
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Box>
              ))}

              <Box
                sx={{
                  width: {
                    xs: 'calc(50% - 16px)',
                    sm: 'calc(33.333% - 16px)',
                    md: 'calc(25% - 16px)',
                    lg: 'calc(16.666% - 16px)',
                  },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.05 + partnerLogoFiles.length * 0.03 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: { xs: 82, sm: 92, md: 102 },
                      borderRadius: 3,
                      background:
                        'linear-gradient(135deg, rgba(4,116,44,0.96) 0%, rgba(10,138,56,0.96) 100%)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      px: 2,
                      boxShadow: '0 14px 40px rgba(0,0,0,0.22)',
                    }}
                  >
                    <Box>
                      <Typography variant="h5" fontWeight={900} sx={{ lineHeight: 1 }}>
                        {otherPartnersLabel}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                        других партнёров
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
