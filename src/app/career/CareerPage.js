'use client';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CTASection from '@/components/CTASection';

const benefits = [
  {
    icon: AttachMoneyIcon,
    title: 'Конкурентная зарплата',
    description: 'Достойная оплата труда и своевременные выплаты',
  },
  {
    icon: TrendingUpIcon,
    title: 'Карьерный рост',
    description: 'Возможности для профессионального развития',
  },
  {
    icon: SchoolIcon,
    title: 'Обучение',
    description: 'Корпоративные тренинги и программы развития',
  },
  {
    icon: GroupsIcon,
    title: 'Дружный коллектив',
    description: 'Команда профессионалов и комфортная атмосфера',
  },
  {
    icon: LocalHospitalIcon,
    title: 'Соц. пакет',
    description: 'Медицинское обслуживание и другие бонусы',
  },
  {
    icon: WorkIcon,
    title: 'Стабильность',
    description: '27 лет на рынке — надежный работодатель',
  },
];

// PLACEHOLDER: Реальные вакансии будут добавлены позже
const vacancies = [
  {
    title: 'Менеджер по продажам',
    department: 'Отдел продаж',
    location: 'г. Бишкек',
    type: 'Полная занятость',
    description: 'Ищем энергичного менеджера для работы с аптечными сетями и медицинскими учреждениями.',
    requirements: [
      'Опыт работы в продажах от 2 лет',
      'Знание фармацевтического рынка (желательно)',
      'Коммуникабельность и ответственность',
      'Водительские права категории B',
    ],
    placeholder: true,
  },
  {
    title: 'Фармацевт-провизор',
    department: 'Склад',
    location: 'г. Бишкек',
    type: 'Полная занятость',
    description: 'Требуется специалист для работы на складе фармацевтической продукции.',
    requirements: [
      'Высшее фармацевтическое образование',
      'Сертификат провизора',
      'Знание правил хранения лекарственных средств',
      'Внимательность и аккуратность',
    ],
    placeholder: true,
  },
  {
    title: 'Водитель-экспедитор',
    department: 'Логистика',
    location: 'г. Бишкек',
    type: 'Полная занятость',
    description: 'Доставка фармацевтической продукции по городу и регионам.',
    requirements: [
      'Водительские права категории B/C',
      'Опыт работы от 1 года',
      'Знание города и области',
      'Ответственность и пунктуальность',
    ],
    placeholder: true,
  },
];

export default function CareerPage() {
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
            bottom: '-20%',
            right: '-5%',
            width: 400,
            height: 400,
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
                Присоединяйтесь к нам
              </Typography>
              <Typography variant="h1" sx={{ mb: 3 }}>
                Карьера в ЭрайФарм
              </Typography>
              <Typography
                variant="h5"
                sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6, maxWidth: 700, mx: 'auto' }}
              >
                Станьте частью команды одной из крупнейших фармацевтических 
                компаний Кыргызстана с 27-летней историей успеха
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Преимущества работы */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'grey.50' }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 3 }}>
                Почему мы
              </Typography>
              <Typography variant="h2" color="primary.main" sx={{ mt: 1 }}>
                Преимущества работы у нас
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid key={benefit.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      border: '1px solid',
                      borderColor: 'grey.200',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #16348a 0%, #2a55b5 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <benefit.icon sx={{ color: 'white', fontSize: 28 }} />
                    </Box>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Вакансии */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: 3 }}>
                Открытые позиции
              </Typography>
              <Typography variant="h2" color="primary.main" sx={{ mt: 1, mb: 2 }}>
                Вакансии
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                Мы всегда в поиске талантливых специалистов. Ознакомьтесь с 
                актуальными вакансиями или отправьте резюме на рассмотрение.
              </Typography>
            </Box>
          </motion.div>

          {vacancies.map((vacancy, index) => (
            <motion.div
              key={vacancy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Accordion
                sx={{
                  mb: 2,
                  borderRadius: '16px !important',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ px: 4, py: 2 }}
                >
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {vacancy.title}
                    </Typography>
                    <Chip label={vacancy.department} size="small" color="primary" variant="outlined" />
                    <Chip label={vacancy.location} size="small" variant="outlined" />
                    <Chip label={vacancy.type} size="small" color="secondary" />
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 4, pb: 4 }}>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {vacancy.description}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2 }}>
                    Требования:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                    {vacancy.requirements.map((req) => (
                      <Typography component="li" variant="body2" key={req} sx={{ mb: 1 }}>
                        {req}
                      </Typography>
                    ))}
                  </Box>
                  <Button variant="contained" color="primary">
                    Откликнуться
                  </Button>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Container>
      </Box>

      {/* Контакты HR */}
      <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'grey.50' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card sx={{ borderRadius: 4, textAlign: 'center' }}>
              <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                <Typography variant="h3" color="primary.main" sx={{ mb: 2 }}>
                  HR-отдел
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, mx: 'auto' }}>
                  Для получения информации о вакансиях или отправки резюме 
                  свяжитесь с нашим отделом кадров
                </Typography>
                
                <Grid container spacing={3} justifyContent="center">
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        backgroundColor: 'primary.main',
                        color: 'white',
                      }}
                    >
                      <PhoneIcon sx={{ fontSize: 32, mb: 1 }} />
                      <Typography variant="h6" fontWeight={600}>
                        Телефон HR
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                        +996 (312) 925511
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mt: 0.5 }}>
                        (добавочный номер HR будет указан)
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        backgroundColor: 'secondary.main',
                        color: 'white',
                      }}
                    >
                      <EmailIcon sx={{ fontSize: 32, mb: 1 }} />
                      <Typography variant="h6" fontWeight={600}>
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, mt: 1 }}>
                        hr@erai.kg
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mt: 0.5 }}>
                        Отправьте резюме
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Box>

      {/* CTA */}
      <CTASection />
    </>
  );
}
