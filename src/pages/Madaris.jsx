import React from 'react';
import CrudTable from '../components/CrudTable';

function Madaris() {
  const formFields = [
    { name: 'name', label: 'name' },
    { name: 'location', label: 'location' },
    { name: 'contact', label: 'contact' },
  ];

  const tableColumns = [
    { key: 'name', label: 'name' },
    { key: 'location', label: 'location' },
    { key: 'contact', label: 'contact' },
  ];

  return (
    <CrudTable 
      collectionName="madaris"
      formFields={formFields}
      tableColumns={tableColumns}
    />
  );
}

export default Madaris;
