import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { db } from '../services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import CrudTable from '../components/CrudTable';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography
} from '@mui/material';

function Students() {
  const [madaris, setMadaris] = useState([]);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedMadrasa, setSelectedMadrasa] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const { t } = useTranslation();

  const madarisCollectionRef = collection(db, 'madaris');
  const classesCollectionRef = collection(db, 'classes');
  const studentsCollectionRef = collection(db, 'students');

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

  const getMadrasaName = (madrasaId) => {
    const madrasa = madaris.find(m => m.id === madrasaId);
    return madrasa ? madrasa.name : 'Unknown';
  }

  const getClassName = (classId) => {
    const aClass = classes.find(c => c.id === classId);
    return aClass ? aClass.name : 'Unknown';
  }

  const formFields = [
    { name: 'name', label: 'name' },
    { name: 'fatherName', label: 'father_name' },
    {
      name: 'madrasaId',
      label: 'madrasa',
      type: 'select',
      options: madaris.map(m => ({ value: m.id, label: m.name }))
    },
    {
      name: 'classId',
      label: 'class',
      type: 'select',
      options: classes.map(c => ({ value: c.id, label: c.name }))
    },
  ];

  const tableColumns = [
    { key: 'rollNo', label: 'roll_no' },
    { key: 'name', label: 'name' },
    { key: 'fatherName', label: 'father_name' },
    { key: 'madrasaId', label: 'madrasa', render: (madrasaId) => getMadrasaName(madrasaId) },
    { key: 'classId', label: 'class', render: (classId) => getClassName(classId) },
  ];

  const handleDataChange = async () => {
    const studentsData = await getDocs(studentsCollectionRef);
    setStudents(studentsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const onBeforeSubmit = async (item) => {
    if (!item.id) { // Only generate roll number for new students
      const q = query(studentsCollectionRef, where('madrasaId', '==', item.madrasaId));
      const querySnapshot = await getDocs(q);
      const studentCount = querySnapshot.size;
      item.rollNo = `${item.madrasaId}-${String(studentCount + 1).padStart(3, '0')}`;
    }
    return item;
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

      <CrudTable
        collectionName="students"
        formFields={formFields}
        tableColumns={tableColumns}
        initialData={filteredStudents}
        onDataChange={handleDataChange}
        onBeforeSubmit={onBeforeSubmit}
      />
    </div>
  );
}

export default Students;
