import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper } from '@mui/material';

function Dashboard() {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Paper 
        elevation={3} 
        sx={{
          p: 4,
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        }}
      >
        <img src="https://i.pinimg.com/originals/5a/0f/73/5a0f7354f3e6eb483539959341498059.png" alt="Quran Icon" style={{ width: '100px', marginBottom: '20px' }} />
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontFamily: "'Jameel Noori Nastaleeq', serif", fontWeight: 'bold' }}>
          دین کی تعلیم سیکھو اور سکھاؤ
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', fontFamily: "'Jameel Noori Nastaleeq', serif" }}>
          تم میں سے بہترین وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔ (صحیح البخاری)
        </Typography>
      </Paper>
    </Box>
  );
}

export default Dashboard;
