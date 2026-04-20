import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

// Dummy data for charts - replace with actual data
const madarisData = [{ name: 'Madaris', Value: 400 }];
const studentsData = [{ name: 'Class 4', Value: 2500 }, { name: 'Class 5', Value: 10000}, { name: 'Class 6', Value: 5000}];
const examsData = [{ name: 'Final', Value: 2400 }];
const reportsData = [{ name: 'Grades', pass: 4000, fail: 1000 }];

// Dummy data for recent students - replace with actual data
const recentStudents = [
  { id: 1, name: 'کاشف علی', fatherName: 'محمد علی', class: 'حفظ', madrasa: 'مدرسہ نور القرآن' },
  { id: 2, name: 'عمران خان', fatherName: 'اکرم خان', class: 'ناظرہ', madrasa: 'مدرسہ فیضانِ مدینہ' },
  { id: 3, name: 'سلمان احمد', fatherName: 'فاروق احمد', class: 'عالم کورس', madrasa: 'جامعۃ الرشید' },
  { id: 4, name: 'زبیر قریشی', fatherName: 'عبداللہ قریشی', class: 'حفظ', madrasa: 'مدرسہ نور القرآن' },
];

function ChartCard({ title, icon, chartData, dataKey, fillColor }) {
  return (
    <Paper 
      elevation={3} 
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack on extra small screens, row on others
        alignItems: 'center',
        borderRadius: '12px',
        height: '100%'
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: { xs: 'center', sm: 'flex-start' }, 
        textAlign: { xs: 'center', sm: 'left' },
        mb: { xs: 2, sm: 0 },
        mr: { xs: 0, sm: 2 },
        flexShrink: 0,
      }}>
        {icon}
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Box>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
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

  const chartCards = [
    { title: t('madaris'), icon: <SchoolIcon sx={{ color: '#3f51b5', fontSize: 40 }} />, data: madarisData, key: 'Value', color: '#3f51b5' },
    { title: t('students'), icon: <PeopleIcon sx={{ color: '#4caf50', fontSize: 40 }} />, data: studentsData, key: 'Value', color: '#4caf50' },
    { title: t('exams'), icon: <BookIcon sx={{ color: '#ff9800', fontSize: 40 }} />, data: examsData, key: 'Value', color: '#ff9800' },
    { title: t('reports'), icon: <AssessmentIcon sx={{ color: '#f44336', fontSize: 40 }}/>, data: reportsData, key: 'pass', color: '#f44336' },
  ];

  return (
    <Box sx={{ p: 3, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      {/* Welcome Banner */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px' }}>
         <img src="https://i.pinimg.com/originals/5a/0f/73/5a0f7354f3e6eb483539959341498059.png" alt={t('quran_icon')} style={{ width: '60px', marginBottom: '16px' }} />
        <Typography variant="h5" component="h2" sx={{ mb: 1, fontFamily: "'Jameel Noori Nastaleeq', serif", fontWeight: 'bold' }}>دین کی تعلیم سیکھو اور سکھاؤ</Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', fontFamily: "'Jameel Noori Nastaleeq', serif" }}>تم میں سے بہترین وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔ (صحیح البخاری)</Typography>
      </Paper>

      {/* Charts Grid */}
      <Grid container spacing={3}>
        {chartCards.map(card => (
          <Grid item xs={12} md={6} key={card.title}>
            <ChartCard title={card.title} icon={card.icon} chartData={card.data} dataKey={card.key} fillColor={card.color} />
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
