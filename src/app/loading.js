'use client';
import { Box, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: 3,
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #16348a 0%, #04742c 100%)',
          }}
        />
      </motion.div>
      <Typography variant="body1" color="text.secondary">
        Загрузка...
      </Typography>
    </Box>
  );
}
