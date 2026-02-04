'use client';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkIcon from '@mui/icons-material/Work';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InventoryIcon from '@mui/icons-material/Inventory';

const services = [
  {
    icon: LocalShippingIcon,
    title: 'Логистика',
    description: 'Надежная и быстрая доставка лекарственных препаратов по всему Кыргызстану',
    color: 'primary',
  },
  {
    icon: InventoryIcon,
    title: 'Складское хранение',
    description: 'Современные склады площадью 4000 м² с соблюдением всех стандартов хранения',
    color: 'secondary',
  },
  {
    icon: WorkIcon,
    title: 'Дистрибьюция',
    description: 'Прямые контракты с более чем 70 производителями фармацевтической продукции',
    color: 'primary',
  },
  {
    icon: SupportAgentIcon,
    title: 'Поддержка партнеров',
    description: 'Профессиональная консультация и поддержка для аптек и медицинских учреждений',
    color: 'secondary',
  },
];

export default function ServicesSection() {
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
              Наша деятельность
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                mt: 1,
                mb: 2,
              }}
            >
              Что мы предлагаем
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              ЭрайФарм предлагает полный комплекс услуг по дистрибьюции 
              фармацевтической продукции в Кыргызстане
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'grey.100',
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: service.color === 'primary' ? 'primary.main' : 'secondary.main',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-5px)',
                      '& .service-icon': {
                        transform: 'scale(1.1)',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box
                      className="service-icon"
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: service.color === 'primary'
                          ? 'linear-gradient(135deg, rgba(22, 52, 138, 0.1) 0%, rgba(22, 52, 138, 0.2) 100%)'
                          : 'linear-gradient(135deg, rgba(4, 116, 44, 0.1) 0%, rgba(4, 116, 44, 0.2) 100%)',
                        mb: 3,
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <service.icon
                        sx={{
                          fontSize: 32,
                          color: service.color === 'primary' ? 'primary.main' : 'secondary.main',
                        }}
                      />
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'text.primary',
                        mb: 2,
                        fontWeight: 600,
                      }}
                    >
                      {service.title}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={Link}
              href="/about"
              endIcon={<ArrowForwardIcon />}
            >
              Узнать больше
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
