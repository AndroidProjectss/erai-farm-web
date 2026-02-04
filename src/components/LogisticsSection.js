'use client';
import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupsIcon from '@mui/icons-material/Groups';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';

const logisticsStats = [
  {
    icon: InventoryIcon,
    value: '2000',
    label: 'Паллетомест',
    color: '#16348a',
  },
  {
    icon: LocalShippingIcon,
    value: '15',
    label: 'Автомобилей',
    color: '#04742c',
  },
  {
    icon: GroupsIcon,
    value: '52',
    label: 'Сотрудника',
    color: '#16348a',
  },
  {
    icon: SpeedIcon,
    value: '24ч',
    label: 'Доставка по КР',
    color: '#04742c',
  },
];

const warehouses = [
  { city: 'Бишкек', type: 'Главный склад', size: '2000 паллет', isMain: true },
  { city: 'Ош', type: 'Региональный склад', size: '400 паллет', isMain: false },
  { city: 'Джалал-Абад', type: 'Региональный склад', size: '200 паллет', isMain: false },
  { city: 'Иссык-Куль', type: 'Сезонный склад', size: '100 паллет', isMain: false },
  { city: 'Кара-Балта', type: 'Логистический пункт', size: '50 паллет', isMain: false },
];

const features = [
  {
    icon: VerifiedIcon,
    title: 'GDP Class A',
    description: 'Новый склад класса A в Q1 2026 — полное соответствие стандартам GDP',
  },
  {
    icon: InventoryIcon,
    title: 'WMS Система',
    description: 'Автоматизированная система управления складом для точного учёта',
  },
  {
    icon: LocalShippingIcon,
    title: 'Ежедневная доставка',
    description: 'Регулярные поставки во все регионы Кыргызстана',
  },
  {
    icon: SpeedIcon,
    title: 'Холодовая цепь',
    description: 'Соблюдение температурного режима для термолабильных препаратов',
  },
];

export default function LogisticsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
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
              <WarehouseIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  letterSpacing: 3,
                  fontWeight: 600,
                }}
              >
                Логистика и Склад
              </Typography>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                mb: 2,
              }}
            >
              Надёжная логистика
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Установленный логистический канал по всей стране с эффективными 
              ежедневными поставками и соблюдением стандартов хранения
            </Typography>
          </Box>
        </motion.div>

        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {logisticsStats.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.100',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: stat.color,
                      boxShadow: `0 10px 30px ${stat.color}15`,
                    },
                  }}
                >
                  <stat.icon sx={{ fontSize: 36, color: stat.color, mb: 1 }} />
                  <Typography
                    variant="h3"
                    sx={{
                      color: stat.color,
                      fontWeight: 800,
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          {/* Warehouses map */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                  Наши склады
                </Typography>

                {warehouses.map((warehouse, index) => (
                  <motion.div
                    key={warehouse.city}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 2,
                        mb: 2,
                        borderRadius: 2,
                        backgroundColor: warehouse.isMain ? 'rgba(22, 52, 138, 0.08)' : 'grey.50',
                        border: '1px solid',
                        borderColor: warehouse.isMain ? 'primary.light' : 'transparent',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: warehouse.isMain ? 'rgba(22, 52, 138, 0.12)' : 'grey.100',
                        },
                      }}
                    >
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 700,
                              color: 'text.primary',
                            }}
                          >
                            {warehouse.city}
                          </Typography>
                          {warehouse.isMain && (
                            <Chip
                              label="Главный"
                              size="small"
                              sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                fontWeight: 600,
                                height: 22,
                              }}
                            />
                          )}
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {warehouse.type}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                        }}
                      >
                        {warehouse.size}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}


              </Paper>
            </motion.div>
          </Grid>

          {/* Features */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid key={feature.title} size={{ xs: 12, sm: 6 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      style={{ height: '100%' }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          border: '1px solid',
                          borderColor: 'grey.100',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: 'secondary.main',
                            boxShadow: '0 10px 30px rgba(4, 116, 44, 0.1)',
                            '& .feature-icon': {
                              backgroundColor: 'secondary.main',
                              color: 'white',
                            },
                          },
                        }}
                      >
                        <Box
                          className="feature-icon"
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(4, 116, 44, 0.1)',
                            color: 'secondary.main',
                            mb: 2,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <feature.icon sx={{ fontSize: 24 }} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: 1,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          {feature.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
