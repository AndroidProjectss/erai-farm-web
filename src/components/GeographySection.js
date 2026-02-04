'use client';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const regions = [
  { name: 'Бишкек', coverage: 100, offices: true, warehouse: true, pharmacies: 85 },
  { name: 'Чуйская область', coverage: 100, offices: true, warehouse: true, pharmacies: 15 },
  { name: 'Ошская область', coverage: 100, offices: true, warehouse: true, pharmacies: 25 },
  { name: 'Джалал-Абадская область', coverage: 100, offices: true, warehouse: true, pharmacies: 7 },
  { name: 'Иссык-Кульская область', coverage: 100, offices: true, warehouse: true, pharmacies: 8 },
  { name: 'Таласская область', coverage: 95, offices: false, warehouse: false, pharmacies: 2 },
  { name: 'Нарынская область', coverage: 90, offices: false, warehouse: false, pharmacies: 2 },
  { name: 'Баткенская область', coverage: 85, offices: false, warehouse: false, pharmacies: 1 },
];

export default function GeographySection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0d2b52 0%, #16348a 50%, #0d2b52 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255,255,255,0.1)',
                px: 3,
                py: 1,
                borderRadius: 10,
                mb: 3,
              }}
            >
              <LocationOnIcon sx={{ color: '#0a8a38', fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: '#0a8a38',
                  letterSpacing: 3,
                  fontWeight: 600,
                }}
              >
                Покрытие регионов
              </Typography>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                mb: 2,
              }}
            >
              100% покрытие Кыргызстана
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Мы присутствуем во всех регионах страны — от Бишкека до отдалённых районов. 
              Регулярные поставки обеспечивают доступность лекарств для всех жителей Кыргызстана.
            </Typography>
          </Box>
        </motion.div>

        {/* Region cards */}
        <Grid container spacing={2}>
          {regions.map((region, index) => (
            <Grid key={region.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      transform: 'translateY(-3px)',
                      borderColor: 'rgba(4, 116, 44, 0.3)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <LocationOnIcon sx={{ color: '#0a8a38', fontSize: 18 }} />
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                      }}
                    >
                      {region.name}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: '#0a8a38',
                        fontWeight: 800,
                      }}
                    >
                      {region.coverage}%
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(255,255,255,0.6)' }}
                    >
                      покрытие
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {region.pharmacies > 0 && (
                      <Chip
                        label={`${region.pharmacies} аптек`}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(4, 116, 44, 0.2)',
                          color: '#0a8a38',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                    {region.warehouse && (
                      <Chip
                        label="Склад"
                        size="small"
                        icon={<CheckCircleIcon sx={{ fontSize: 14, color: '#0a8a38 !important' }} />}
                        sx={{
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.8)',
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 3, md: 8 },
              mt: 8,
              pt: 6,
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {[
              { value: '8', label: 'Областей охвачено' },
              { value: '5', label: 'Складов в регионах' },
              { value: '145+', label: 'Аптек по стране' },
              { value: '24ч', label: 'Доставка в любую точку' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'white',
                      fontWeight: 800,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
