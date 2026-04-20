import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import AssessmentIcon from '@mui/icons-material/Assessment';
import hero from '../assets/hero.png';

const data = {
  madaris: [
    { name: 'Madaris A', value: 400 },
    { name: 'Madaris B', value: 300 },
    { name: 'Madaris C', value: 200 },
    { name: 'Madaris D', value: 278 },
  ],
  students: [
    { name: 'Class 1', value: 2400 },
    { name: 'Class 2', value: 1398 },
    { name: 'Class 3', value: 9800 },
    { name: 'Class 4', value: 3908 },
  ],
  exams: [
    { name: 'Mid-Term', value: 2000 },
    { name: 'Final', value: 2290 },
  ],
  reports: [
    { name: 'Pass/Fail', pass: 4000, fail: 2400 },
    { name: 'Grades', A: 2000, B: 3000, C: 1500 },
  ],
};

function ChartCard({ title, icon, chartData, dataKey, fillColor }) {
  return (
    <Paper 
      elevation={6} 
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
        borderRadius: '15px',
        boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6" component="h3" sx={{ ml: 1, fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill={fillColor} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}

function Dashboard() {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
       <Paper 
        elevation={3} 
        sx={{
          p: 4,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: '15px',
        }}
      >
        <img src={hero} alt="Quran Icon" style={{ width: '100px', marginBottom: '20px' }} />
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontFamily: "'Jameel Noori Nastaleeq', serif", fontWeight: 'bold' }}>
          دین کی تعلیم سیکھو اور سکھاؤ
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', fontFamily: "'Jameel Noori Nastaleeq', serif" }}>
          تم میں سے بہترین وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔ (صحیح البخاری)
        </Typography>
      </Paper>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ChartCard 
            title={t('madaris')} 
            icon={<SchoolIcon sx={{ color: '#3f51b5' }}/>} 
            chartData={data.madaris} 
            dataKey="value" 
            fillColor="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard 
            title={t('students')} 
            icon={<PeopleIcon sx={{ color: '#4caf50' }}/>} 
            chartData={data.students} 
            dataKey="value" 
            fillColor="#4caf50"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard 
            title={t('exams')} 
            icon={<BookIcon sx={{ color: '#ff9800' }}/>} 
            chartData={data.exams} 
            dataKey="value" 
            fillColor="#ff9800"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard 
            title={t('reports')} 
            icon={<AssessmentIcon sx={{ color: '#f44336' }}/>} 
            chartData={data.reports} 
            dataKey="pass" 
            fillColor="#f44336"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
