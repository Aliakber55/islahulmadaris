import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';
import { alpha } from '@mui/system';

const kFormatter = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num);
};

function StatCard({ icon, title, metric, insight }) {
  const theme = useTheme();
  const isPositive = insight.startsWith('+');

  return (
    <Paper sx={{
      p: 3, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.1)}`,
      }
    }}>
      <Box>
        <Box sx={{ 
          width: 48, 
          height: 48, 
          borderRadius: '50%', 
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          mb: 2 
        }}>
          {React.cloneElement(icon, { sx: { color: theme.palette.primary.main } })}
        </Box>
        <Typography variant="h4" component="div" sx={{fontWeight: 'bold'}}>{kFormatter(metric)}</Typography>
        <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', mt: 0.5, color: 'text.secondary' }}>{title}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', color: isPositive ? '#4caf50' : '#f44336', mt: 2 }}>
        {isPositive ? <ArrowUpwardIcon sx={{fontSize: '1rem'}}/> : <ArrowDownwardIcon sx={{fontSize: '1rem'}}/>}
        <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 'bold' }}>
          {insight.substring(1)} vs last month
        </Typography>
      </Box>
    </Paper>
  );
}

function Dashboard() {
  const { t } = useTranslation();
  const theme = useTheme();
  
  const statCards = [
    { title: t('madaris'), icon: <SchoolIcon />, metric: 400, insight: '+5%' },
    { title: t('students'), icon: <PeopleIcon />, metric: 10500, insight: '+12%' },
    { title: t('exams'), icon: <BookIcon />, metric: 2400, insight: '-2%' },
    { title: t('reports'), icon: <AssessmentIcon />, metric: 4000, insight: '+1.5%' },
  ];

  const quickActions = [
      { text: t('add_student'), path: '/students/new', icon: <AddIcon/>, variant: 'contained' },
      { text: t('add_class'), path: '/classes/new', icon: <AddIcon/>, variant: 'outlined' },
      { text: t('add_madrasa'), path: '/madaris/new', icon: <AddIcon/>, variant: 'outlined' },
  ];

  const recentStudents = [
    { id: 1, name: 'کاشف علی', fatherName: 'محمد علی', class: 'حفظ', madrasa: 'مدرسہ نور القرآن' },
    { id: 2, name: 'عمران خان', fatherName: 'اکرم خان', class: 'ناظرہ', madrasa: 'مدرسہ فیضانِ مدینہ' },
    { id: 3, name: 'سلمان احمد', fatherName: 'فاروق احمد', class: 'عالم کورس', madrasa: 'جامعۃ الرشید' },
    { id: 4, name: 'زبیر قریشی', fatherName: 'عبداللہ قریشی', class: 'حفظ', madrasa: 'مدرسہ نور القرآن' },
    { id: 5, name: 'بلال صدیقی', fatherName: 'یوسف صدیقی', class: 'ناظرہ', madrasa: 'مدرسہ فیضانِ مدینہ' },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, flexGrow: 1 }}>
      <Paper sx={{ 
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 4 },
        mb: 4, 
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.secondary.main, 0.8)} 100%)`,
        color: '#fff',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        boxShadow: `0 8px 32px ${alpha(theme.palette.primary.dark, 0.3)}`
      }}>
         <img src="https://i.pinimg.com/originals/5a/0f/73/5a0f7354f3e6eb483539959341498059.png" alt={t('quran_icon')} style={{ width: '80px', marginBottom: '24px', filter: 'brightness(0) invert(1)' }} />
        <Typography component="h1" sx={{ mb: 1.5, fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: { xs: '2.2rem', md: '2.8rem' }, fontWeight: 'bold', color: 'white' }}>دین کی تعلیم سیکھو اور سکھاؤ</Typography>
        <Typography variant="body1" sx={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: { xs: '1.1rem', md: '1.3rem' }, lineHeight: 1.8, color: 'white', opacity: 0.9, maxWidth: '600px' }}>تم میں سے بہترین وہ ہے جو قرآن سیکھے اور دوسروں کو سکھائے۔ (صحیح البخاری)</Typography>
      </Paper>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statCards.map(card => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>
      
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: { xs: 2, md: 3 }, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>{t('Quick Actions')}</Typography>
            <Grid container spacing={2}>
                {quickActions.map(action => (
                    <Grid item xs={12} key={action.text}>
                        <Button 
                            component={Link} 
                            to={action.path} 
                            variant={action.variant}
                            color={action.variant === 'contained' ? 'primary' : 'outlined'}
                            startIcon={action.icon} 
                            fullWidth
                        >
                            {action.text}
                        </Button>
                    </Grid>
                ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: { xs: 2, md: 3 }, height: '100%' }}>
             <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>{t('Recent Students')}</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {['name', 'father_name', 'class', 'madrasa'].map(head => (
                      <TableCell key={head} sx={{ fontWeight: 600, color: 'text.primary', py: 1.5, borderBottom: `2px solid ${theme.palette.divider}` }}>{t(head)}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentStudents.map((student) => (
                    <TableRow key={student.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell sx={{ py: 2.5, borderBottom: `1px solid ${theme.palette.divider}` }}>{student.name}</TableCell>
                      <TableCell sx={{ py: 2.5, borderBottom: `1px solid ${theme.palette.divider}` }}>{student.fatherName}</TableCell>
                      <TableCell sx={{ py: 2.5, borderBottom: `1px solid ${theme.palette.divider}` }}>{student.class}</TableCell>
                      <TableCell sx={{ py: 2.5, borderBottom: `1px solid ${theme.palette.divider}` }}>{student.madrasa}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
