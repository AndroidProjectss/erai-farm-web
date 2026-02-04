'use client';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupsIcon from '@mui/icons-material/Groups';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const stats = [
  {
    icon: TrendingUpIcon,
    value: '27',
    label: 'лет на рынке фармдистрибьюции',
    suffix: '',
    color: 'primary',
          background: 'radial-gradient(circle, rgba(22, 52, 138, 0.05) 0%, transparent 70%)',
  {
    icon: LocalShippingIcon,
    value: '60000',
    label: 'Точек доставки на территории Кыргызстана',
    suffix: '+',
    color: 'secondary',
    note: '(примерно)',
  },
  {
    icon: WarehouseIcon,
    value: '4000',
    label: 'Площадь складских помещений, м²',
    suffix: '',
    color: 'primary',
  },
  {
    icon: HandshakeIcon,
    value: '70',
    label: 'Прямых контрактов с производителями',
    suffix: '+',
    color: 'secondary',
  },
  {
    icon: GroupsIcon,
    value: '400',
    label: 'Количество сотрудников',
    suffix: '+',
    color: 'primary',
  },
  {
    icon: Inventory2Icon,
    value: '1000000000',
    label: 'Доставляем упаковок в год более',
    suffix: '+',
    color: 'secondary',
    note: '(примерно)',
  },
];

// Компонент анимированного счетчика
function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numValue = parseInt(value.replace(/\D/g, ''));
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(numValue * easeOut));

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayValue(numValue);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(0) + ' млрд';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + ' млн';
    }
    if (num >= 1000) {
      return num.toLocaleString('ru-RU');
    }
    return num.toString();
  };

  return (
    <span ref={ref}>
      {formatNumber(displayValue)}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Декоративный элемент */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22, 52, 138, 0.05) 0%, transparent 70%)',
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
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.main',
                letterSpacing: 3,
                fontWeight: 600,
              }}
            >
              Цифры
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                mt: 1,
                mb: 2,
              }}
            >
              Наши достижения
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              27 лет мы развиваем фармацевтическую индустрию Кыргызстана, 
              обеспечивая доступность качественных лекарственных препаратов
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    borderRadius: 4,
                    background: 'white',
                    border: '1px solid',
                    borderColor: 'grey.100',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: stat.color === 'primary' ? 'primary.main' : 'secondary.main',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: stat.color === 'primary'
                        ? 'linear-gradient(135deg, #16348a 0%, #2a55b5 100%)'
                        : 'linear-gradient(135deg, #04742c 0%, #0a8a38 100%)',
                      mb: 3,
                    }}
                  >
                    <stat.icon sx={{ color: 'white', fontSize: 28 }} />
                  </Box>
                  
                  <Typography
                    variant="h3"
                    sx={{
                      color: stat.color === 'primary' ? 'primary.main' : 'secondary.main',
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                  
                  {stat.note && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.disabled',
                        display: 'block',
                        mt: 0.5,
                      }}
                    >
                      {stat.note}
                    </Typography>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
