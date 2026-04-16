import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../services/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Modal, 
  Box, 
  TextField, 
  Typography 
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Classes() {
  const [classes, setClasses] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentClass, setCurrentClass] = useState({ name: '' });
  const { t } = useTranslation();

  const classesCollectionRef = collection(db, 'classes');

  useEffect(() => {
    const getClasses = async () => {
      const data = await getDocs(classesCollectionRef);
      setClasses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getClasses();
  }, []);

  const handleOpen = (classData = null) => {
    if (classData) {
      setIsEditing(true);
      setCurrentClass(classData);
    } else {
      setIsEditing(false);
      setCurrentClass({ name: '' });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      const classDoc = doc(db, 'classes', currentClass.id);
      await updateDoc(classDoc, currentClass);
    } else {
      await addDoc(classesCollectionRef, { ...currentClass, createdAt: serverTimestamp() });
    }
    handleClose();
    // Refresh the list
    const data = await getDocs(classesCollectionRef);
    setClasses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleDelete = async (id) => {
    const classDoc = doc(db, 'classes', id);
    await deleteDoc(classDoc);
    // Refresh the list
    const data = await getDocs(classesCollectionRef);
    setClasses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen()}>{t('add_class')}</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6">{t(isEditing ? 'edit_class' : 'add_class')}</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label={t('name')}
              fullWidth
              margin="normal"
              value={currentClass.name}
              onChange={(e) => setCurrentClass({ ...currentClass, name: e.target.value })}
            />
            <Button type="submit" variant="contained" color="primary">{t('save')}</Button>
          </form>
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('name')}</TableCell>
              <TableCell>{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classes.map((classData) => (
              <TableRow key={classData.id}>
                <TableCell>{classData.name}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(classData)}>{t('edit')}</Button>
                  <Button onClick={() => handleDelete(classData.id)}>{t('delete')}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Classes;
