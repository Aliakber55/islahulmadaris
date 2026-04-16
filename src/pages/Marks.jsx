import React from 'react';
import { useTranslation } from 'react-i18next';

function Marks() {
  const { t } = useTranslation();
  return <h1>{t('marks')}</h1>;
}

export default Marks;
