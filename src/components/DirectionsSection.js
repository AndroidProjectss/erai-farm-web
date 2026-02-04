'use client';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessIcon from '@mui/icons-material/Business';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import CampaignIcon from '@mui/icons-material/Campaign';
import GavelIcon from '@mui/icons-material/Gavel';

const directions = [
  {
    icon: BusinessIcon,
    title: 'Дистрибуция',
    description: 'Охвачены все каналы, включая госпитальный, где мы являемся одним из основных игроков',
    color: '#16348a',
  },
  {
    icon: StorefrontIcon,
    title: 'Аптечные сети',
    description: 'Одна из крупнейших сетей в КР с акцентом на потребительские услуги — более 145 аптек',
    color: '#04742c',
  },
  {
    icon: LocalShippingIcon,
    title: 'Логистика и Склад',
    description: 'Установленный логистический канал по всей стране с эффективными ежедневными поставками',
    color: '#16348a',
  },
  {
    icon: CampaignIcon,
    title: 'Отделы продаж и маркетинга',
    description: 'Возможность создания эксклюзивных команд вплоть до полноценного представительства',
    color: '#04742c',
  },
  {
    icon: WarehouseIcon,
    title: 'Региональные склады',
    description: 'Собственные склады в городах Ош и Джалал-Абад для своевременного обеспечения населения',
    color: '#16348a',
  },
  {
    icon: GavelIcon,
    title: 'Службы поддержки',
    description: 'Юридический, Комплаенс, Регистрация и Фармаконадзор — полное соблюдение этических норм',
    color: '#04742c',
  },
];

export default function DirectionsSection() {
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
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                letterSpacing: 3,
                fontWeight: 600,
              }}
            >
              Направления деятельности
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                mt: 1,
                mb: 2,
              }}
            >
              Полный цикл фармбизнеса
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              ЭрайФарм объединяет все ключевые направления фармацевтического бизнеса — 
              от импорта и дистрибьюции до собственной розничной сети и маркетинговой поддержки
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {directions.map((direction, index) => (
            <Grid key={direction.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'grey.100',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: direction.color,
                      boxShadow: `0 10px 40px ${direction.color}15`,
                      transform: 'translateY(-5px)',
                      '& .direction-icon': {
                        transform: 'scale(1.1)',
                        backgroundColor: direction.color,
                        color: 'white',
                      },
                    },
                  }}
                >
                  <Box
                    className="direction-icon"
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: `${direction.color}15`,
                      color: direction.color,
                      mb: 3,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <direction.icon sx={{ fontSize: 32 }} />
                  </Box>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'text.primary',
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    {direction.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {direction.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
