import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import BookIcon from '@mui/icons-material/Book';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/system';

const menuItems = [
  { text: 'dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'madaris', icon: <SchoolIcon />, path: '/madaris' },
  { text: 'students', icon: <PeopleIcon />, path: '/students' },
  { text: 'classes', icon: <ClassIcon />, path: '/classes' },
  { text: 'exams', icon: <BookIcon />, path: '/exams' },
  { text: 'reports', icon: <AssessmentIcon />, path: '/reports' },
];

function Sidebar() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, height: '100%', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.1)}` }}>
        <img src="https://i.pinimg.com/originals/5a/0f/73/5a0f7354f3e6eb483539959341498059.png" alt="Logo" style={{ width: 40, height: 40, marginRight: 12, filter: 'brightness(0) invert(1)' }} />
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', letterSpacing: 1, color: 'white' }}>
          Islah ul Madaris
        </Typography>
      </Box>
      <List sx={{ flexGrow: 1, p: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ my: 0.5 }}>
            <ListItemButton
              component={NavLink}
              to={item.path}
              end={item.path === '/'}
              sx={{
                borderRadius: '8px',
                '&.active': {
                  backgroundColor: theme.palette.secondary.main,
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.2)'
                },
                '&:hover': {
                  backgroundColor: alpha(theme.palette.common.white, 0.05),
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={t(item.text)} sx={{textTransform: 'capitalize'}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
