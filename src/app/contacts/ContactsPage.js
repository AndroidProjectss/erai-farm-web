'use client';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Телефоны',
    content: ['+996 (312) 925511', '+996 (312) 925510', '+996 (312) 995509'],
    color: 'primary',
  },
  {
    icon: EmailIcon,
    title: 'Email',
    content: ['zakupki@erai.kg'],
    color: 'secondary',
  },
  {
    icon: LocationOnIcon,
    title: 'Адрес',
    content: ['720080, г. Бишкек,', 'ул. Профсоюзная, дом № 63'],
    color: 'primary',
  },
  {
    icon: AccessTimeIcon,
    title: 'Режим работы',
    content: ['Пн-Пт: 9:00 - 18:00', 'Сб-Вс: выходной'],
    color: 'secondary',
  },
];

export default function ContactsPage() {
  return (
    <>
      {/* Hero секция */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #16348a 0%, #0d2b52 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          mt: { xs: '-70px', md: '-80px' },
          pt: { xs: '120px', md: '150px' },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '-5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(4, 116, 44, 0.2)',
            filter: 'blur(80px)',
          }}
        />

        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="overline"
                sx={{ letterSpacing: 3, opacity: 0.8, mb: 2, display: 'block' }}
              >
                Свяжитесь с нами
              </Typography>
              <Typography variant="h1" sx={{ mb: 3 }}>
                Контакты
              </Typography>
              <Typography
                variant="h5"
                sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6, maxWidth: 600, mx: 'auto' }}
              >
                Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Контактная информация */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid key={info.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          borderRadius: '50%',
                          background: info.color === 'primary'
                            ? 'linear-gradient(135deg, #16348a 0%, #2a55b5 100%)'
                            : 'linear-gradient(135deg, #04742c 0%, #0a8a38 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <info.icon sx={{ color: 'white', fontSize: 32 }} />
                      </Box>
                      <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                        {info.title}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        {info.content.map((line, i) => (
                          <Typography
                            key={i}
                            variant="body1"
                            color="text.secondary"
                            sx={{
                              display: 'block',
                              ...(info.title === 'Телефоны' && {
                                '&:hover': { color: 'primary.main' },
                                cursor: 'pointer',
                                textDecoration: 'none',
                              }),
                              ...(info.title === 'Email' && {
                                '&:hover': { color: 'secondary.main' },
                                textDecoration: 'none',
                              }),
                            }}
                            {...(info.title === 'Телефоны' && {
                              component: 'a',
                              href: `tel:${line.replace(/\D/g, '')}`,
                            })}
                            {...(info.title === 'Email' && {
                              component: 'a',
                              href: `mailto:${line}`,
                            })}
                          >
                            {line}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Карта и форма */}
      <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: 'grey.50' }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Карта */}
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    height: { xs: 300, md: 500 },
                    border: '1px solid',
                    borderColor: 'grey.200',
                  }}
                >
                  {/* Google Maps - ул. Профсоюзная, дом № 63, Бишкек */}
                  <iframe
                    src="https://www.google.com/maps?&q=%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9F%D1%80%D0%BE%D1%84%D1%81%D0%BE%D1%8E%D0%B7%D0%BD%D0%B0%D1%8F%2C%2063&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ЭрайФарм - ул. Профсоюзная, 63, Бишкек"
                  />
                </Paper>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, textAlign: 'center' }}
                >
                  📍 720080, г. Бишкек, ул. Профсоюзная, дом № 63
                </Typography>
              </motion.div>
            </Grid>

            {/* Форма обратной связи */}
            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    height: '100%',
                    border: '1px solid',
                    borderColor: 'grey.200',
                  }}
                >
                  <Typography variant="h4" fontWeight={600} sx={{ mb: 1 }}>
                    Напишите нам
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </Typography>

                  <Box component="form" noValidate>
                    <TextField
                      fullWidth
                      label="Ваше имя"
                      variant="outlined"
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Телефон"
                      variant="outlined"
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Тема обращения"
                      variant="outlined"
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      label="Сообщение"
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{ mb: 3 }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{ py: 1.5 }}
                      >
                        Отправить сообщение
                      </Button>
                    </motion.div>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Схема проезда */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="primary.main" sx={{ mb: 3 }}>
                Как нас найти
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: 'primary.main',
                  color: 'white',
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      Фармацевтическая компания ЭрайФарм
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8 }}>
                      Наш офис и складской комплекс расположены по адресу:<br />
                      <strong>720080, г. Бишкек, ул. Профсоюзная, дом № 63</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
                      Мы работаем с понедельника по пятницу с 9:00 до 18:00
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      href="https://maps.google.com/?q=720080,Бишкек,Профсоюзная,63"
                      target="_blank"
                      sx={{
                        backgroundColor: 'white',
                        color: 'primary.main',
                        py: 2,
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
                      }}
                      startIcon={<LocationOnIcon />}
                    >
                      Открыть на карте
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
