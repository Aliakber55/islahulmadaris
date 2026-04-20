import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import GradeIcon from '@mui/icons-material/Grade';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ClassIcon from '@mui/icons-material/Class';

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
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {navItems.map((item) => (
          <ListItem button component={NavLink} to={item.path} key={item.text} end>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
