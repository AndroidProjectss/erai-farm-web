'use client';
import { Box, Typography, Container, Grid, Paper, Chip, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import SchoolIcon from '@mui/icons-material/School';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const pharmacyStats = [
  {
    icon: StorefrontIcon,
    value: '145+',
    label: 'Аптек',
    description: 'По всему Кыргызстану, включая франшизу',
    color: '#16348a',
  },
  {
    icon: SchoolIcon,
    value: '300',
    label: 'Фармацевтов',
    description: 'Обученных специалистов в нашей сети',
    color: '#04742c',
  },
  {
    icon: TrendingUpIcon,
    value: '200',
    label: 'Цель 2026',
    description: 'Точек продаж к концу года',
    color: '#16348a',
  },
  {
    icon: LocalPharmacyIcon,
    value: '+40%',
    label: 'Рост сети',
    description: 'Планируемый рост в 2026 году',
    color: '#04742c',
  },
];

const regions = [
  { name: 'Бишкек', count: 85, percentage: 60 },
  { name: 'Ош', count: 25, percentage: 17 },
  { name: 'Чуйская область', count: 15, percentage: 10 },
  { name: 'Иссык-Куль', count: 8, percentage: 6 },
  { name: 'Джалал-Абад', count: 7, percentage: 5 },
  { name: 'Другие регионы', count: 5, percentage: 2 },
];

export default function PharmacyNetworkSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="xl">
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
                backgroundColor: 'rgba(22, 52, 138, 0.1)',
                px: 3,
                py: 1,
                borderRadius: 10,
                mb: 3,
              }}
            >
              <LocalPharmacyIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  letterSpacing: 3,
                  fontWeight: 600,
                }}
              >
                Розничная сеть
              </Typography>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                mb: 2,
              }}
            >
              Аптечная сеть ЭрайФарм
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Одна из крупнейших розничных сетей в Кыргызстане с акцентом на качественное 
              обслуживание клиентов и широкий ассортимент лекарственных средств
            </Typography>
          </Box>
        </motion.div>

        {/* Stats cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {pharmacyStats.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 4 },
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'grey.100',
                    textAlign: 'center',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: stat.color,
                      boxShadow: `0 10px 40px ${stat.color}15`,
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 50, md: 60 },
                      height: { xs: 50, md: 60 },
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: `${stat.color}15`,
                      color: stat.color,
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    <stat.icon sx={{ fontSize: { xs: 24, md: 28 } }} />
                  </Box>
                  
                  <Typography
                    variant="h3"
                    sx={{
                      color: stat.color,
                      fontWeight: 800,
                      mb: 0.5,
                      fontSize: { xs: '1.75rem', md: '2.5rem' },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 0.5,
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Regional distribution */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'grey.100',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    mb: 4,
                  }}
                >
                  Распределение по регионам
                </Typography>

                {regions.map((region, index) => (
                  <motion.div
                    key={region.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            color: 'text.primary',
                          }}
                        >
                          {region.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Chip
                            label={`${region.count} аптек`}
                            size="small"
                            sx={{
                              backgroundColor: 'primary.main',
                              color: 'white',
                              fontWeight: 600,
                            }}
                          />
                        </Box>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={region.percentage}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          backgroundColor: 'grey.100',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 4,
                            background: `linear-gradient(90deg, #16348a 0%, #04742c 100%)`,
                          },
                        }}
                      />
                    </Box>
                  </motion.div>
                ))}
              </Paper>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #16348a 0%, #0d2b52 100%)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Pattern overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      mb: 3,
                    }}
                  >
                    Наши преимущества
                  </Typography>

                  {[
                    'Широкий ассортимент — более 10 000 SKU',
                    'Квалифицированные фармацевты',
                    'Программа лояльности для клиентов',
                    'Онлайн-заказ с доставкой',
                    'Консультации специалистов',
                    'Доступные цены',
                    'Удобное расположение',
                    'Современное оборудование',
                  ].map((advantage, index) => (
                    <motion.div
                      key={advantage}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: '#0a8a38',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255,255,255,0.9)',
                          }}
                        >
                          {advantage}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
