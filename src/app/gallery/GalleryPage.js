'use client';
import { useMemo, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Tabs,
  Tab,
  Chip,
  Modal,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import CTASection from '@/components/CTASection';
import { useLocale } from '@/i18n/LocaleProvider';

// PLACEHOLDER: Реальные фото будут добавлены после фотосессии
const galleryCategories = [
  { id: 'all', icon: null },
  { id: 'warehouse', icon: WarehouseIcon },
  { id: 'office', icon: BusinessIcon },
  { id: 'team', icon: GroupsIcon },
  { id: 'products', icon: LocalPharmacyIcon },
];

export default function GalleryPage() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();
  const isMobileFilters = useMediaQuery(theme.breakpoints.down('sm'));

  const galleryItems = useMemo(
    () => t.galleryPage.items.map((item, index) => ({ id: index + 1, ...item, placeholder: true })),
    [t.galleryPage.items]
  );

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const categoryLabel = (id) => t.galleryPage.categories[id] || id;

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handlePrev = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredItems[nextIndex]);
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
            bottom: '-10%',
            right: '10%',
            width: 350,
            height: 350,
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
                {t.galleryPage.heroOverline}
              </Typography>
              <Typography variant="h1" sx={{ mb: 3 }}>
                {t.galleryPage.heroTitle}
              </Typography>
              <Typography
                variant="h5"
                sx={{ opacity: 0.9, fontWeight: 400, lineHeight: 1.6, maxWidth: 600, mx: 'auto' }}
              >
                {t.galleryPage.heroDescription}
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Фильтры */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              {isMobileFilters ? (
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'center',
                    maxWidth: 900,
                  }}
                >
                  {galleryCategories.map((cat) => (
                    <Chip
                      key={cat.id}
                      label={categoryLabel(cat.id)}
                      icon={cat.icon ? <cat.icon fontSize="small" /> : undefined}
                      clickable
                      onClick={() => setActiveCategory(cat.id)}
                      color={activeCategory === cat.id ? 'primary' : 'default'}
                      variant={activeCategory === cat.id ? 'filled' : 'outlined'}
                      sx={{
                        borderRadius: 2,
                        '& .MuiChip-label': { fontWeight: 600 },
                      }}
                    />
                  ))}
                </Box>
              ) : (
                <Tabs
                  value={activeCategory}
                  onChange={(e, val) => setActiveCategory(val)}
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  sx={{
                    maxWidth: '100%',
                    '& .MuiTab-root': {
                      minHeight: 48,
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '1rem',
                    },
                    '& .Mui-selected': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {galleryCategories.map((cat) => (
                    <Tab
                      key={cat.id}
                      value={cat.id}
                      label={categoryLabel(cat.id)}
                      icon={cat.icon ? <cat.icon /> : undefined}
                      iconPosition="start"
                    />
                  ))}
                </Tabs>
              )}
            </Box>
          </motion.div>

          {/* Галерея */}
          <Grid container spacing={3}>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card
                      sx={{
                        cursor: 'pointer',
                        borderRadius: 4,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                          '& .overlay': {
                            opacity: 1,
                          },
                        },
                      }}
                      onClick={() => handleImageClick(item)}
                    >
                      <Box sx={{ position: 'relative' }}>
                        {/* PLACEHOLDER изображение */}
                        <Box
                          sx={{
                            height: 250,
                            background: `linear-gradient(135deg, 
                              ${item.category === 'warehouse' ? '#16348a' : 
                                item.category === 'office' ? '#04742c' : 
                                item.category === 'team' ? '#0f3366' : '#0a8a38'} 0%, 
                              rgba(0,0,0,0.3) 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            p: 3,
                          }}
                        >
                          <Typography variant="h2" sx={{ color: 'white', opacity: 0.3 }}>
                            📷
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'white', opacity: 0.6, textAlign: 'center', mt: 1 }}
                          >
                            {t.galleryPage.placeholderCard}
                          </Typography>
                        </Box>
                        
                        {/* Overlay с информацией */}
                        <Box
                          className="overlay"
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                            p: 2,
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight={600} color="white">
                            {item.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          </Grid>
        </Container>
      </Box>

      {/* Модальное окно */}
      <Modal
        open={modalOpen}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '90%',
            maxWidth: 900,
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: -50,
              right: 0,
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: -60,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>

          {selectedImage && (
            <Paper sx={{ borderRadius: 4, overflow: 'hidden' }}>
              {/* PLACEHOLDER */}
              <Box
                sx={{
                  height: { xs: 300, md: 500 },
                  background: 'linear-gradient(135deg, #16348a 0%, #04742c 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h1" sx={{ color: 'white', opacity: 0.3 }}>
                  📷
                </Typography>
                <Typography variant="h6" sx={{ color: 'white', opacity: 0.6, mt: 2 }}>
                  {t.galleryPage.placeholderModal}
                </Typography>
              </Box>
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" fontWeight={600}>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {selectedImage.description}
                </Typography>
              </Box>
            </Paper>
          )}
        </Box>
      </Modal>

      {/* CTA */}
      <CTASection />
    </>
  );
}
