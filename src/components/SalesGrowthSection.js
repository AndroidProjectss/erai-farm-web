'use client';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const salesData = [
  { year: '2021', value: 15.8, growth: null },
  { year: '2022', value: 22.6, growth: 43 },
  { year: '2023', value: 32.2, growth: 42 },
  { year: '2024', value: 44.2, growth: 37 },
  { year: '2025', value: 52.6, growth: 19, isForecast: true },
  { year: '2026', value: 60.5, growth: 15, isForecast: true },
];

const maxValue = 65;

function AnimatedNumber({ value, suffix = '', duration = 2 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(value * easeOut);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue.toFixed(1)}{suffix}
    </span>
  );
}

export default function SalesGrowthSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: '#ffffff',
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
                backgroundColor: 'rgba(4, 116, 44, 0.1)',
                px: 3,
                py: 1,
                borderRadius: 10,
                mb: 3,
              }}
            >
              <TrendingUpIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  letterSpacing: 3,
                  fontWeight: 600,
                }}
              >
                Рост продаж
              </Typography>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                mb: 2,
              }}
            >
              Динамика развития
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Стабильный рост продаж — результат стратегического развития и доверия партнёров
            </Typography>
          </Box>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'grey.100',
              background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
            }}
          >
            {/* Bar chart */}
            <Box
              sx={{
                overflowX: { xs: 'auto', sm: 'visible' },
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: { xs: 1, sm: 2, md: 3 },
                  height: { xs: 250, md: 350 },
                  mb: 3,
                  minWidth: { xs: 420, sm: 'unset' },
                }}
              >
                {salesData.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      height: '100%',
                      justifyContent: 'flex-end',
                      transformOrigin: 'bottom',
                      minWidth: 60,
                    }}
                  >
                  {/* Growth badge */}
                  {item.growth && (
                    <Box
                      sx={{
                        backgroundColor: '#04742c',
                        color: 'white',
                        px: { xs: 0.5, sm: 1 },
                        py: 0.25,
                        borderRadius: 1,
                        mb: 1,
                        fontSize: { xs: '0.6rem', sm: '0.75rem' },
                        fontWeight: 600,
                      }}
                    >
                      +{item.growth}%
                    </Box>
                  )}
                  
                  {/* Bar */}
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: 80,
                      height: `${(item.value / maxValue) * 100}%`,
                      background: item.isForecast
                        ? 'linear-gradient(180deg, #04742c 0%, #145c2e 100%)'
                        : 'linear-gradient(180deg, #16348a 0%, #0d2b52 100%)',
                      borderRadius: '8px 8px 0 0',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      opacity: item.isForecast ? 0.8 : 1,
                      '&:hover': {
                        transform: 'scaleY(1.02)',
                        boxShadow: item.isForecast
                          ? '0 -10px 30px rgba(4, 116, 44, 0.3)'
                          : '0 -10px 30px rgba(22, 52, 138, 0.3)',
                      },
                      ...(item.isForecast && {
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 5px,
                          rgba(255,255,255,0.1) 5px,
                          rgba(255,255,255,0.1) 10px
                        ), linear-gradient(180deg, #04742c 0%, #145c2e 100%)`,
                      }),
                    }}
                  />
                  </motion.div>
                ))}
              </Box>
            </Box>

            {/* Year labels */}
            <Box
              sx={{
                overflowX: { xs: 'auto', sm: 'visible' },
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderTop: '2px solid',
                  borderColor: 'grey.200',
                  pt: 2,
                  minWidth: { xs: 420, sm: 'unset' },
                }}
              >
                {salesData.map((item) => (
                  <Box
                    key={item.year}
                    sx={{
                      flex: 1,
                      textAlign: 'center',
                      minWidth: 60,
                    }}
                  >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: item.isForecast ? 'secondary.main' : 'text.primary',
                    }}
                  >
                    {item.year}
                  </Typography>
                  {item.isForecast && item.year !== '2025' && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.65rem',
                      }}
                    >
                      прогноз
                    </Typography>
                  )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </motion.div>

        {/* Key metrics */}
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: 'center' }}>
          {[
            {
              value: 283,
              suffix: '%',
              label: 'Рост за 5 лет',
              description: 'по сравнению с 2021 годом',
              color: '#16348a',
            },
          ].map((metric, index) => (
            <Grid key={metric.label} size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.100',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: metric.color,
                      boxShadow: `0 10px 40px ${metric.color}15`,
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      color: metric.color,
                      fontWeight: 800,
                      mb: 1,
                    }}
                  >
                    <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {metric.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    {metric.description}
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
