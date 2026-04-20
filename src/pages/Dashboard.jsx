import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Dummy data for mini charts
const chartData1 = [{uv: 300}, {uv: 400}, {uv: 200}, {uv: 500}, {uv: 450}, {uv: 600}, {uv: 550}];
const chartData2 = [{uv: 1200}, {uv: 1100}, {uv: 1500}, {uv: 1300}, {uv: 1600}, {uv: 1400}, {uv: 1700}];
const chartData3 = [{uv: 50}, {uv: 40}, {uv: 60}, {uv: 55}, {uv: 70}, {uv: 65}, {uv: 80}];
const chartData4 = [{uv: 85}, {uv: 88}, {uv: 82}, {uv: 90}, {uv: 89}, {uv: 92}, {uv: 95}];

const kFormatter = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

// Dummy data for recent students - replace with actual data
const recentStudents = [
  { id: 1, name: 'کاشف علی', fatherName: 'محمد علی', class: 'حفظ', madrasa: 'مدرسہ نور القرآن' },
  { id: 2, name: 'عمران خان', fatherName: 'اکرم خان', class: 'ناظرہ', madrasa: 'مدرسہ فیضانِ مدینہ' },
  { id: 3, name: 'سلمان احمد', fatherName: 'فاروق احمد', class: 'عالم کورس', madrasa: 'جامعۃ الرشید' },
  { id: 4, name: 'زبیر قریشی', fatherName: 'عبداللہ قریشی', class: 'حفظ', madrasa: 'مدرسہ نور القرآن' },
];

function StatCard({ title, icon, mainMetric, insight, insightIcon, chartData, color }) {
  return (
    <Paper 
      elevation={0}
      sx={{
        p: 3,
        borderRadius: '16px',
        height: '100%',
        border: '1px solid #e0e0e0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          {React.cloneElement(icon, { sx: { ...icon.props.sx, fontSize: 32, color: color, mb: 2 } })}
          <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
            {kFormatter(mainMetric)}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
        </Box>
        <Box sx={{ height: 60, width: '50%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                  <defs>
                      <linearGradient id={`colorUv-${color.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                          <stop offset="95%" stopColor={color} stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ background: 'white', border: '1px solid #ddd', borderRadius: '8px' }} 
                    labelStyle={{ fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="uv" stroke={color} strokeWidth={2} fill={`url(#colorUv-${color.replace('#','')})`} />
              </AreaChart>
            </ResponsiveContainer>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, color: insight.startsWith('+') ? 'success.main' : 'error.main' }}>
        {insightIcon}
        <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 'medium' }}>
          {insight}
        </Typography>
      </Box>
    </Paper>
  );
}

function Dashboard() {
  const { t } = useTranslation();

  const statCards = [
    { title: t('madaris'), icon: <SchoolIcon />, mainMetric: 400, insight: '+5 this month', insightIcon: <ArrowUpwardIcon sx={{fontSize: '1rem'}}/>, chartData: chartData1, color: '#3f51b5' },
    { title: t('students'), icon: <PeopleIcon />, mainMetric: 10500, insight: '+12% this month', insightIcon: <ArrowUpwardIcon sx={{fontSize: '1rem'}}/>, chartData: chartData2, color: '#4caf50' },
    { title: t('exams'), icon: <BookIcon />, mainMetric: 2400, insight: '-2% from last week', insightIcon: <ArrowDownwardIcon sx={{fontSize: '1rem'}}/>, chartData: chartData3, color: '#ff9800' },
    { title: t('reports'), icon: <AssessmentIcon />, mainMetric: 4000, insight: '+1.5% pass rate', insightIcon: <ArrowUpwardIcon sx={{fontSize: '1rem'}}/>, chartData: chartData4, color: '#f44336' },
  ];

  return (
    <Box>
      {/* Welcome Banner */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px' }}>
         <img src="https://i.pinimg.com/originals/5a/0f/73/5a0f7354f3e6eb483539959341498059.png" alt={t('quran_icon')} style={{ width: '60px', marginBottom: '16px' }} />
        <Typography variant="h5" component="h2" sx={{ mb: 1, fontFamily: "'Jameel Noori Nastaleeq', serif", fontWeight: 'bold' }}>دین کی تعلیم سیکھو اور سکھاؤ</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', fontFamily: "'Jameel Noori Nastaleeq', serif" }}>تم میں سے بہترین وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔ (صحیح البخاری)</Typography>
      </Paper>

      {/* Stats Grid */}
      <Grid container spacing={3}>
        {statCards.map(card => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>
      
      {/* Quick Actions & Recent Students */}
      <Grid container spacing={4} sx={{ mt: 1 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: '12px', height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>{t('quick_actions')}</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}><Button component={Link} to="/students/new" variant="contained" startIcon={<AddIcon />} fullWidth>{t('add_student')}</Button></Grid>
                <Grid item xs={12}><Button component={Link} to="/classes/new" variant="contained" startIcon={<AddIcon />} fullWidth>{t('add_class')}</Button></Grid>
                <Grid item xs={12}><Button component={Link} to="/madaris/new" variant="contained" startIcon={<AddIcon />} fullWidth>{t('add_madrasa')}</Button></Grid>
                <Grid item xs={12}><Button component={Link} to="/reports" variant="contained" color="secondary" startIcon={<AssessmentIcon />} fullWidth>{t('view_reports')}</Button></Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: '12px', height: '100%' }}>
             <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>{t('recent_students')}</Typography>
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>{t('name')}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>{t('father_name')}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>{t('class')}</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>{t('madrasa')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentStudents.map((student) => (
                    <TableRow key={student.id} hover>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.fatherName}</TableCell>
                      <TableCell>{student.class}</TableCell>
                      <TableCell>{student.madrasa}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
      
      {/* Footer */}
      <Box component="footer" sx={{ mt: 4, py: 2, borderTop: '1px solid #e0e0e0', backgroundColor: 'white', textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Islah-ul-Madaris. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
