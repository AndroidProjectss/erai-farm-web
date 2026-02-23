'use client';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupsIcon from '@mui/icons-material/Groups';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import HistoryIcon from '@mui/icons-material/History';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import CTASection from '@/components/CTASection';

const stats = [
  { icon: TrendingUpIcon, value: '27', label: 'лет на рынке', suffix: '' },
  { icon: WarehouseIcon, value: '4 000', label: 'м² складов', suffix: '' },
  { icon: HandshakeIcon, value: '70+', label: 'контрактов', suffix: '' },
  { icon: GroupsIcon, value: '400+', label: 'сотрудников', suffix: '' },
  { icon: Inventory2Icon, value: '1 млрд+', label: 'упаковок в год', suffix: '' },
];

const values = [
  {
    icon: VerifiedIcon,
    title: 'Качество',
    description: 'Мы работаем только с проверенными производителями и гарантируем качество каждого препарата',
  },
  {
    icon: HistoryIcon,
    title: 'Надежность',
    description: '27 лет стабильной работы на рынке — доказательство нашей надежности как партнера',
  },
  {
    icon: EmojiEventsIcon,
    title: 'Профессионализм',
    description: 'Команда профессионалов, которая развивает фармацевтическую индустрию Кыргызстана',
  },
];

const team = [
  {
    name: 'Руководитель компании',
    position: 'Генеральный директор',
    placeholder: true,
  },
  {
    name: 'Заместитель директора',
    position: 'Заместитель генерального директора',
    placeholder: true,
  },
  {
    name: 'Коммерческий директор',
    position: 'Директор по продажам',
    placeholder: true,
  },
];

export default function AboutPage() {
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
            top: '20%',
            right: '10%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(4, 116, 44, 0.2)',
            filter: 'blur(80px)',
          }}
        />

        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: 3, opacity: 0.8, mb: 2, display: 'block' }}
                >
                  О компании
                </Typography>
                <Typography variant="h1" sx={{ mb: 3 }}>
                  О нас
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6, mb: 4 }}
                >
                  Фармацевтическая компания ЭрайФарм основана в 1999 году и на 
                  сегодняшний день является одним из крупнейших фармдистрибьюторов 
                  в Кыргызстане.
                </Typography>
                
                {/* Кнопка скачивания презентации убрана по ТЗ */}
              </motion.div>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 350 },
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.2)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Image
                    src="/about.png"
                    alt="ЭрайФарм — офис и складской комплекс"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Статистика */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'grey.50' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, minmax(0, 1fr))',
                sm: 'repeat(3, minmax(0, 1fr))',
                md: 'repeat(5, minmax(0, 1fr))',
              },
              gap: 2,
              alignItems: 'stretch',
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 3,
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 0.5,
                    transition: 'box-shadow 180ms ease, border-color 180ms ease',
                    '&:hover': {
                      boxShadow: '0 18px 50px rgba(15, 23, 42, 0.12)',
                      borderColor: 'rgba(22, 52, 138, 0.25)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(22, 52, 138, 0.08)',
                      border: '1px solid rgba(22, 52, 138, 0.14)',
                    }}
                  >
                    <stat.icon sx={{ fontSize: 28, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" fontWeight={700} color="primary.main">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* История */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 3 }}>
                Наша история
              </Typography>
              <Typography variant="h2" color="primary.main" sx={{ mt: 1, mb: 3 }}>
                27 лет развития
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                lineHeight: 2,
                color: 'text.secondary',
                textAlign: 'center',
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              Фармацевтическая компания ЭрайФарм основана в 1999 году и на сегодняшний 
              день является одним из крупнейших фармдистрибьюторов в Кыргызстане. За 27 
              лет работы мы выстроили надежную систему логистики, охватывающую всю 
              территорию страны, наладили прямые контракты с более чем 70 производителями 
              фармацевтической продукции и сформировали команду из более чем 400 
              профессионалов своего дела.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Ценности */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'grey.50' }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 3 }}>
                Наши принципы
              </Typography>
              <Typography variant="h2" color="primary.main" sx={{ mt: 1 }}>
                Ценности компании
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} alignItems="stretch">
            {values.map((value, index) => (
              <Grid
                key={value.title}
                size={{ xs: 12, md: 4 }}
                sx={{ display: 'flex' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ height: '100%', width: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      width: '100%',
                      textAlign: 'center',
                      borderRadius: 4,
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardContent
                      sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #16348a 0%, #04742c 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          flexShrink: 0,
                        }}
                      >
                        <value.icon sx={{ fontSize: 36, color: 'white' }} />
                      </Box>
                      <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ flex: 1 }}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Руководство - PLACEHOLDER */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 3 }}>
                Команда
              </Typography>
              <Typography variant="h2" color="primary.main" sx={{ mt: 1, mb: 2 }}>
                Руководство компании
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                Профессиональная команда с многолетним опытом в фармацевтической отрасли
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {team.map((member, index) => (
              <Grid key={member.position} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card sx={{ textAlign: 'center', borderRadius: 4 }}>
                    <CardContent sx={{ py: 4 }}>
                      {/* PLACEHOLDER: Здесь будет фото руководителя */}
                      <Avatar
                        sx={{
                          width: 150,
                          height: 150,
                          mx: 'auto',
                          mb: 3,
                          backgroundColor: 'grey.200',
                          fontSize: '3rem',
                        }}
                      >
                        👤
                      </Avatar>
                      <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.position}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          mt: 2,
                          color: 'warning.main',
                          fontStyle: 'italic',
                        }}
                      >
                        📷 Ожидается фото после фотосессии
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <CTASection />
    </>
  );
}
