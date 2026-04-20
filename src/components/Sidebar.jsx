import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import GradeIcon from '@mui/icons-material/Grade';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ClassIcon from '@mui/icons-material/Class';
import logo from '../assets/logo.png';

const drawerWidth = 240;

function Sidebar() {
  const { t } = useTranslation();

  const navItems = [
    { text: t('dashboard'), icon: <DashboardIcon />, path: '/' },
    { text: t('madaris'), icon: <SchoolIcon />, path: '/madaris' },
    { text: t('classes'), icon: <ClassIcon />, path: '/classes' },
    { text: t('students'), icon: <PeopleIcon />, path: '/students' },
    { text: t('exams'), icon: <BookIcon />, path: '/exams' },
    { text: t('marks'), icon: <GradeIcon />, path: '/marks' },
    { text: t('reports'), icon: <AssessmentIcon />, path: '/reports' },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: '#e0e0e0',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2,  borderBottom: '1px solid #ffffff20' }}>
        <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
        <Typography variant="h6" sx={{ ml: 2, fontFamily: "'Jameel Noori Nastaleeq', serif", color: 'white' }}>
          اصلاح المدارس
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            component={NavLink} 
            to={item.path} 
            key={item.text} 
            end
            sx={{
              '&.active': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderLeft: '4px solid #fff',
                paddingLeft: '20px',
                color: 'white',
              },
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.05)',
              },
              color: '#e0e0e0',
              padding: '12px 24px',
            }}
          >
            <ListItemIcon sx={{ color: '#e0e0e0', minWidth: '40px' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
