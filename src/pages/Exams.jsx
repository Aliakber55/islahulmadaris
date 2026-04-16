import React from 'react';
import { useTranslation } from 'react-i18next';

function Exams() {
  const { t } = useTranslation();
  return <h1>{t('exams')}</h1>;
}

export default Exams;
