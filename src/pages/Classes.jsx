import React from 'react';
import CrudTable from '../components/CrudTable';

function Classes() {
  const formFields = [
    { name: 'name', label: 'name' },
  ];

  const tableColumns = [
    { key: 'name', label: 'name' },
  ];

  return (
    <CrudTable 
      collectionName="classes"
      formFields={formFields}
      tableColumns={tableColumns}
    />
  );
}

export default Classes;
