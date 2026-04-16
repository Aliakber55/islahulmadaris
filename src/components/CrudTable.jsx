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
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
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

function CrudTable({ collectionName, formFields, tableColumns, initialData, onDataChange, onBeforeSubmit }) {
  const [data, setData] = useState(initialData || []);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const { t } = useTranslation();

  const collectionRef = collection(db, collectionName);

  const fetchData = async () => {
    if (!initialData) {
      const snapshot = await getDocs(collectionRef);
      setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
  };

  useEffect(() => {
    if (initialData) {
      setData(initialData);
    } else {
      fetchData();
    }
  }, [initialData]);

  const handleOpen = (item = null) => {
    if (item) {
      setIsEditing(true);
      setCurrentItem(item);
    } else {
      setIsEditing(false);
      const initialItem = formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {});
      setCurrentItem(initialItem);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let itemToSave = { ...currentItem };
    if (onBeforeSubmit) {
      itemToSave = await onBeforeSubmit(itemToSave);
    }

    if (isEditing) {
      const itemDoc = doc(db, collectionName, itemToSave.id);
      await updateDoc(itemDoc, itemToSave);
    } else {
      await addDoc(collectionRef, { ...itemToSave, createdAt: serverTimestamp() });
    }
    handleClose();
    if (onDataChange) {
      onDataChange();
    } else {
      fetchData();
    }
  };

  const handleDelete = async (id) => {
    const itemDoc = doc(db, collectionName, id);
    await deleteDoc(itemDoc);
    if (onDataChange) {
      onDataChange();
    } else {
      fetchData();
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen()} sx={{mb: 2}}>{t(`add_${collectionName.slice(0, -1)}`)}</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6">{t(isEditing ? `edit_${collectionName.slice(0, -1)}` : `add_${collectionName.slice(0, -1)}`)}</Typography>
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => {
              if (field.type === 'select') {
                return (
                  <FormControl fullWidth margin="normal" key={field.name}>
                    <InputLabel>{t(field.label)}</InputLabel>
                    <Select
                      value={currentItem[field.name] || ''}
                      onChange={(e) => setCurrentItem({ ...currentItem, [field.name]: e.target.value })}
                    >
                      {field.options.map(option => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )
              }
              return (
                <TextField
                  key={field.name}
                  label={t(field.label)}
                  fullWidth
                  margin="normal"
                  value={currentItem[field.name] || ''}
                  onChange={(e) => setCurrentItem({ ...currentItem, [field.name]: e.target.value })}
                />
              )
            })}
            <Button type="submit" variant="contained" color="primary">{t('save')}</Button>
          </form>
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableColumns.map((col) => (
                <TableCell key={col.key}>{t(col.label)}</TableCell>
              ))}
              <TableCell>{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                {tableColumns.map((col) => (
                  <TableCell key={col.key}>{col.render ? col.render(item[col.key], item) : item[col.key]}</TableCell>
                ))}
                <TableCell>
                  <Button onClick={() => handleOpen(item)}>{t('edit')}</Button>
                  <Button onClick={() => handleDelete(item.id)}>{t('delete')}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CrudTable;
