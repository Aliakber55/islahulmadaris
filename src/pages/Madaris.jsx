import React, { useState, useEffect } from 'react';
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

function Madaris() {
  const [madaris, setMadaris] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMadrasa, setCurrentMadrasa] = useState({ name: '', location: '', contact: '' });

  const madarisCollectionRef = collection(db, 'madaris');

  useEffect(() => {
    const getMadaris = async () => {
      const data = await getDocs(madarisCollectionRef);
      setMadaris(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMadaris();
  }, []);

  const handleOpen = (madrasa = null) => {
    if (madrasa) {
      setIsEditing(true);
      setCurrentMadrasa(madrasa);
    } else {
      setIsEditing(false);
      setCurrentMadrasa({ name: '', location: '', contact: '' });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      const madrasaDoc = doc(db, 'madaris', currentMadrasa.id);
      await updateDoc(madrasaDoc, currentMadrasa);
    } else {
      await addDoc(madarisCollectionRef, { ...currentMadrasa, createdAt: serverTimestamp() });
    }
    handleClose();
    // Refresh the list
    const data = await getDocs(madarisCollectionRef);
    setMadaris(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleDelete = async (id) => {
    const madrasaDoc = doc(db, 'madaris', id);
    await deleteDoc(madrasaDoc);
    // Refresh the list
    const data = await getDocs(madarisCollectionRef);
    setMadaris(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen()}>Add Madrasa</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6">{isEditing ? 'Edit' : 'Add'} Madrasa</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={currentMadrasa.name}
              onChange={(e) => setCurrentMadrasa({ ...currentMadrasa, name: e.target.value })}
            />
            <TextField
              label="Location"
              fullWidth
              margin="normal"
              value={currentMadrasa.location}
              onChange={(e) => setCurrentMadrasa({ ...currentMadrasa, location: e.target.value })}
            />
            <TextField
              label="Contact"
              fullWidth
              margin="normal"
              value={currentMadrasa.contact}
              onChange={(e) => setCurrentMadrasa({ ...currentMadrasa, contact: e.target.value })}
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </form>
        </Box>
      </Modal>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {madaris.map((madrasa) => (
              <TableRow key={madrasa.id}>
                <TableCell>{madrasa.name}</TableCell>
                <TableCell>{madrasa.location}</TableCell>
                <TableCell>{madrasa.contact}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(madrasa)}>Edit</Button>
                  <Button onClick={() => handleDelete(madrasa.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Madaris;
