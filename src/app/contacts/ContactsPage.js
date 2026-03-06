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
  Alert,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { useMemo, useState } from 'react';
import { useLocale } from '@/i18n/LocaleProvider';

export default function ContactsPage() {
  const { t } = useLocale();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useMemo(() => {
    return {
      lat: 42.885303,
      lon: 74.539373,
      addressShort: t.contactsPage.addressShort,
    };
  }, [t.contactsPage.addressShort]);

  const contactInfo = useMemo(() => [
    {
      id: 'phones',
      icon: PhoneIcon,
      type: 'phone',
      title: t.contactsPage.infoTitles.phones,
      content: ['+996 (312) 925511', '+996 (312) 925510', '+996 (312) 995509'],
      color: 'primary',
    },
    {
      id: 'email',
      icon: EmailIcon,
      type: 'email',
      title: t.contactsPage.infoTitles.email,
      content: ['eraipharm.corp@erai.kg'],
      color: 'secondary',
    },
    {
      id: 'address',
      icon: LocationOnIcon,
      type: 'text',
      title: t.contactsPage.infoTitles.address,
      content: t.contactsPage.infoContent.address,
      color: 'primary',
    },
    {
      id: 'hours',
      icon: AccessTimeIcon,
      type: 'text',
      title: t.contactsPage.infoTitles.hours,
      content: t.contactsPage.infoContent.hours,
      color: 'secondary',
    },
  ], [t.contactsPage.infoTitles, t.contactsPage.infoContent]);

  const twoGisLink = useMemo(() => {
    return 'https://2gis.kg/bishkek/geo/70030076268410586/74.539373%2C42.885303?m=74.539259%2C42.885506%2F17.63';
  }, []);

  const googleMapsEmbedSrc = useMemo(() => {
    // Без ключей/ENV: обычный embed через q=lat,lon.
    // Внешнее открытие/переходы делаем в 2ГИС.
    return `https://www.google.com/maps?q=${location.lat},${location.lon}&z=17&output=embed`;
  }, [location.lat, location.lon]);

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name) {
      setStatus({ type: 'error', message: t.contactsPage.formValidationName });
      return;
    }

    if (!phone && !email) {
      setStatus({ type: 'error', message: t.contactsPage.formValidationContact });
      return;
    }

    if (!message) {
      setStatus({ type: 'error', message: t.contactsPage.formValidationMessage });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setStatus({ type: 'error', message: data?.error || t.contactsPage.formSendError });
        return;
      }

      setStatus({ type: 'success', message: t.contactsPage.formSendSuccess });
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : t.contactsPage.formSendUnknownError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                {t.contactsPage.heroOverline}
              </Typography>
              <Typography variant="h1" sx={{ mb: 3 }}>
                {t.contactsPage.heroTitle}
              </Typography>
              <Typography
                variant="h5"
                sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6, maxWidth: 600, mx: 'auto' }}
              >
                {t.contactsPage.heroDescription}
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
              <Grid key={info.id} size={{ xs: 12, sm: 6, md: 3 }}>
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
                              ...(info.type === 'phone' && {
                                '&:hover': { color: 'primary.main' },
                                cursor: 'pointer',
                                textDecoration: 'none',
                              }),
                              ...(info.type === 'email' && {
                                '&:hover': { color: 'secondary.main' },
                                textDecoration: 'none',
                              }),
                            }}
                            {...(info.type === 'phone' && {
                              component: 'a',
                              href: `tel:${line.replace(/\D/g, '')}`,
                            })}
                            {...(info.type === 'email' && {
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
                  <iframe
                    src={googleMapsEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${t.contactsPage.addressBlockTitle} (Google Maps)`}
                  />
                </Paper>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, textAlign: 'center' }}
                >
                  📍 {location.addressShort}
                </Typography>
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="outlined"
                    href={twoGisLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LocationOnIcon />}
                  >
                    {t.contactsPage.open2gis}
                  </Button>
                </Box>
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
                    {t.contactsPage.formTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    {t.contactsPage.formDescription}
                  </Typography>

                  <Box component="form" noValidate onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label={t.contactsPage.formName}
                      variant="outlined"
                      sx={{ mb: 3 }}
                      value={form.name}
                      onChange={updateField('name')}
                      required
                    />
                    <TextField
                      fullWidth
                      label={t.contactsPage.formPhone}
                      variant="outlined"
                      sx={{ mb: 3 }}
                      value={form.phone}
                      onChange={updateField('phone')}
                      helperText={t.contactsPage.formHelper}
                    />
                    <TextField
                      fullWidth
                      label={t.contactsPage.formEmail}
                      type="email"
                      variant="outlined"
                      sx={{ mb: 3 }}
                      value={form.email}
                      onChange={updateField('email')}
                      helperText={t.contactsPage.formHelper}
                    />
                    <TextField
                      fullWidth
                      label={t.contactsPage.formMessage}
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{ mb: 3 }}
                      value={form.message}
                      onChange={updateField('message')}
                      required
                    />

                    {status?.message && (
                      <Alert severity={status.type} sx={{ mb: 3 }}>
                        {status.message}
                      </Alert>
                    )}

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
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                            <CircularProgress size={20} color="inherit" />
                            {t.contactsPage.formSending}
                          </Box>
                        ) : (
                          t.contactsPage.formSubmit
                        )}
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
                {t.contactsPage.howToFind}
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
                      {t.contactsPage.addressBlockTitle}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                      {t.contactsPage.addressBlockDescription}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
                      {t.contactsPage.addressBlockHours}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      href={twoGisLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'white',
                        color: 'primary.main',
                        py: 2,
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
                      }}
                      startIcon={<LocationOnIcon />}
                    >
                      {t.contactsPage.open2gis}
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
