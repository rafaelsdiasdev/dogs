import React from 'react';
import UserHeaderNav from './UserHeaderNav';

import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

export const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;

    const titulo = {
      '/conta': 'Minha Conta',
      '/conta/estatisticas': 'Estatisticas',
      '/conta/postar': 'Poste Sua Foto',
    };

    setTitle(titulo[pathname]);
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
