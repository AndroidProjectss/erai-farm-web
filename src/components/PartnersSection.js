'use client';
import { Box, Typography, Container, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';

const partners = [
  // Основные партнеры из презентации
  { name: 'KRKA', country: 'Словения' },
  { name: 'Sanofi', country: 'Франция' },
  { name: 'Takeda', country: 'Япония' },
  { name: 'Nobel', country: 'Турция' },
  { name: 'STADA', country: 'Германия' },
  { name: 'Grindex', country: 'Латвия' },
  { name: 'Sopharma', country: 'Болгария' },
  { name: 'Биннофарм', country: 'Россия' },
  { name: 'Ranbaxy', country: 'Индия' },
  { name: 'Kusum', country: 'Украина' },
  { name: 'Микроген', country: 'Россия' },
  { name: 'Himalaya', country: 'Индия' },
  { name: 'Pfizer', country: 'США' },
  { name: 'Bosnalijek', country: 'Босния' },
  { name: 'Алкалоид', country: 'Северная Македония' },
  { name: 'World Medicine', country: 'Великобритания' },
  { name: 'Sun Pharma', country: 'Индия' },
  { name: 'Glenmark', country: 'Индия' },
  { name: 'Naturprodukt', country: 'Германия' },
  { name: 'Биотэк', country: 'Россия' },
  { name: 'ФармВИЛАР', country: 'Россия' },
  { name: 'Фармак', country: 'Украина' },
  { name: 'Arterium', country: 'Украина' },
  { name: 'Абдифарм', country: 'Узбекистан' },
  { name: 'Berlin-Chemie', country: 'Германия' },
  { name: 'Gedeon Richter', country: 'Венгрия' },
  { name: 'Egis', country: 'Венгрия' },
  { name: 'Sandoz', country: 'Швейцария' },
];

const featuredPartners = ['KRKA', 'Sanofi', 'Takeda', 'Nobel', 'STADA', 'Grindex', 'Gedeon Richter', 'Berlin-Chemie'];

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
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
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
              <HandshakeIcon sx={{ color: '#0a8a38', fontSize: 20 }} />
              <Typography
                variant="overline"
                sx={{
                  color: '#0a8a38',
                  letterSpacing: 3,
                  fontWeight: 600,
                }}
              >
                78 прямых контрактов
              </Typography>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                mb: 2,
              }}
            >
              Наши партнёры
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              Прямые импортные контракты с ведущими мировыми производителями 
              лекарственных средств и медицинских изделий
            </Typography>
          </Box>
        </motion.div>

        {/* Featured partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
              mb: 4,
            }}
          >
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    backgroundColor: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                    }}
                  >
                    {partner}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* All partners chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
            }}
          >
            {partners
              .filter(p => !featuredPartners.includes(p.name))
              .map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.5 + index * 0.02 }}
                >
                  <Chip
                    label={partner.name}
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      color: 'white',
                      borderRadius: 2,
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      py: 2.5,
                      px: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.25)',
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </motion.div>
              ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.8 }}
            >
              <Chip
                label="+50 других"
                sx={{
                  backgroundColor: '#04742c',
                  color: 'white',
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  py: 2.5,
                  px: 1,
                }}
              />
            </motion.div>
          </Box>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 3, md: 6 },
              mt: 8,
              pt: 6,
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {[
              { value: '78', label: 'Прямых контрактов' },
              { value: '15%', label: 'Доля рынка' },
              { value: '5%', label: 'Госпитальный канал' },
              { value: '3-е', label: 'Место по рейтингу ввоза' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: '#0a8a38',
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      mt: 1,
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
