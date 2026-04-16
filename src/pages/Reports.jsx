import React from 'react';
import { useTranslation } from 'react-i18next';

function Reports() {
  const { t } = useTranslation();
  return <h1>{t('reports')}</h1>;
}

export default Reports;
