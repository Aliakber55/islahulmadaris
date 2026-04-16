import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../services/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, query, where } from 'firebase/firestore';
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
  InputLabel,
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

function Students() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [madaris, setMadaris] = useState([]);
  const [classes, setClasses] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({ name: '', fatherName: '', madrasaId: '', classId: '' });
  const [selectedMadrasa, setSelectedMadrasa] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const { t } = useTranslation();

  const studentsCollectionRef = collection(db, 'students');
  const madarisCollectionRef = collection(db, 'madaris');
  const classesCollectionRef = collection(db, 'classes');

  useEffect(() => {
    const fetchData = async () => {
      const madarisData = await getDocs(madarisCollectionRef);
      setMadaris(madarisData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const classesData = await getDocs(classesCollectionRef);
      setClasses(classesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const studentsData = await getDocs(studentsCollectionRef);
      setStudents(studentsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = students;
    if (selectedMadrasa) {
      filtered = filtered.filter(student => student.madrasaId === selectedMadrasa);
    }
    if (selectedClass) {
      filtered = filtered.filter(student => student.classId === selectedClass);
    }
    setFilteredStudents(filtered);
  }, [selectedMadrasa, selectedClass, students]);


  const handleOpen = (student = null) => {
    if (student) {
      setIsEditing(true);
      setCurrentStudent(student);
    } else {
      setIsEditing(false);
      setCurrentStudent({ name: '', fatherName: '', madrasaId: '', classId: '' });
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const studentDoc = doc(db, 'students', currentStudent.id);
      await updateDoc(studentDoc, currentStudent);
    } else {
      const q = query(studentsCollectionRef, where('madrasaId', '==', currentStudent.madrasaId));
      const querySnapshot = await getDocs(q);
      const studentCount = querySnapshot.size;
      const rollNo = `${currentStudent.madrasaId}-${String(studentCount + 1).padStart(3, '0')}`;

      await addDoc(studentsCollectionRef, { ...currentStudent, rollNo, createdAt: serverTimestamp() });
    }

    const studentsData = await getDocs(studentsCollectionRef);
    setStudents(studentsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    handleClose();
  };

  const handleDelete = async (id) => {
    const studentDoc = doc(db, 'students', id);
    await deleteDoc(studentDoc);
    const studentsData = await getDocs(studentsCollectionRef);
    setStudents(studentsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

 const getMadrasaName = (madrasaId) => {
    const madrasa = madaris.find(m => m.id === madrasaId);
    return madrasa ? madrasa.name : 'Unknown';
  }

  const getClassName = (classId) => {
    const aClass = classes.find(c => c.id === classId);
    return aClass ? aClass.name : 'Unknown';
  }

  return (
    <div>
      <Typography variant="h4">{t('students')}</Typography>
       <FormControl style={{ minWidth: 120, marginRight: '10px' }}>
        <InputLabel>{t('filter_by_madrasa')}</InputLabel>
        <Select
          value={selectedMadrasa}
          onChange={e => setSelectedMadrasa(e.target.value)}
        >
          <MenuItem value=""><em>{t('none')}</em></MenuItem>
          {madaris.map(madrasa => (
            <MenuItem key={madrasa.id} value={madrasa.id}>{madrasa.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

       <FormControl style={{ minWidth: 120 }}>
        <InputLabel>{t('filter_by_class')}</InputLabel>
        <Select
          value={selectedClass}
          onChange={e => setSelectedClass(e.target.value)}
        >
          <MenuItem value=""><em>{t('none')}</em></MenuItem>
          {classes.map(aClass => (
            <MenuItem key={aClass.id} value={aClass.id}>{aClass.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={() => handleOpen()} style={{ float: 'right' }}>{t('add_student')}</Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">{t(isEditing ? 'edit_student' : 'add_student')}</Typography>
          <form onSubmit={handleSubmit}>
            <TextField label={t('name')} fullWidth margin="normal" value={currentStudent.name} onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })} />
            <TextField label={t('father_name')} fullWidth margin="normal" value={currentStudent.fatherName} onChange={(e) => setCurrentStudent({ ...currentStudent, fatherName: e.target.value })} />
            <FormControl fullWidth margin="normal">
              <InputLabel>{t('madrasa')}</InputLabel>
              <Select
                value={currentStudent.madrasaId}
                onChange={(e) => setCurrentStudent({ ...currentStudent, madrasaId: e.target.value })}
              >
                {madaris.map(madrasa => (
                  <MenuItem key={madrasa.id} value={madrasa.id}>{madrasa.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>{t('class')}</InputLabel>
              <Select
                value={currentStudent.classId}
                onChange={(e) => setCurrentStudent({ ...currentStudent, classId: e.target.value })}
              >
                {classes.map(aClass => (
                  <MenuItem key={aClass.id} value={aClass.id}>{aClass.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">{t('save')}</Button>
          </form>
        </Box>
      </Modal>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('roll_no')}</TableCell>
              <TableCell>{t('name')}</TableCell>
              <TableCell>{t('father_name')}</TableCell>
              <TableCell>{t('madrasa')}</TableCell>
              <TableCell>{t('class')}</TableCell>
              <TableCell>{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.rollNo}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.fatherName}</TableCell>
                <TableCell>{getMadrasaName(student.madrasaId)}</TableCell>
                <TableCell>{getClassName(student.classId)}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(student)}>{t('edit')}</Button>
                  <Button onClick={() => handleDelete(student.id)}>{t('delete')}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Students;
