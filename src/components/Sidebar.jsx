import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import GradeIcon from '@mui/icons-material/Grade';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ClassIcon from '@mui/icons-material/Class'; // Import the Class icon
import { getAuth, signOut } from 'firebase/auth';

const drawerWidth = 240;

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Madaris', icon: <SchoolIcon />, path: '/madaris' },
  { text: 'Classes', icon: <ClassIcon />, path: '/classes' }, // Add the Classes link
  { text: 'Students', icon: <PeopleIcon />, path: '/students' },
  { text: 'Exams', icon: <BookIcon />, path: '/exams' },
  { text: 'Marks', icon: <GradeIcon />, path: '/marks' },
  { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
];

function Sidebar() {
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };

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
          <ListItem button component={NavLink} to={item.path} key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={handleLogout} sx={{ m: 2 }}>
        Logout
      </Button>
    </Drawer>
  );
}

export default Sidebar;
