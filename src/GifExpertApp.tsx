import { useEffect, useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
import { keycloak } from './config/keycloak';
import { useTranslation } from 'react-i18next';

const GifExpertApp = () => {
  const [categories, setcategories] = useState(['Dragon Ball Z']);
  const [accessToken, setAccessToken] = useState('');
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      if (authenticated) {
        if (keycloak.token) {
          setAccessToken(keycloak.token);
        }
      }
    });
  }, []);

  return (
    <div>
      <p>{t('header.hello')}, Bastián</p>
      <button onClick={() => i18n.changeLanguage('es')}>ES</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <h2>GifExpertApp</h2>
      <p>{accessToken}</p>
      <AddCategory setCategories={setcategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
