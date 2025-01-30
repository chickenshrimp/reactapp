import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import './i18n';

const App = () => {
  const { t, i18n } = useTranslation();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

  return (
    <View style={styles.container}>
      {/* Global Title */}
      <Text style={styles.title}>{t('welcome')}</Text>

      {/* Language Change Buttons */}
      <View style={styles.languageButtons}>
        <Button title="🇷🇺 Русский" onPress={() => changeLanguage('ru')} />
        <Button title="🇺🇸 English" onPress={() => changeLanguage('en')} />
        <Button title="🇯🇵 Japanese" onPress={() => changeLanguage('ja')} />

      </View>

      {/* Button to toggle text */}
      <Button 
        style={styles.buttonToggle}
        title={clicked ? t('buttonClicked') : t('buttonText')} 
        onPress={handleClick}
      />

      {/* Cards Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{t('cards.sports')}</Text>
        <Text style={styles.cardDesc}>{t('cards.sportsDesc')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{t('cards.stars')}</Text>
        <Text style={styles.cardDesc}>{t('cards.starsDesc')}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{t('cards.code')}</Text>
        <Text style={styles.cardDesc}>{t('cards.codeDesc')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#61dafb',
    marginBottom: 20,
  },
  languageButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#3a3f4b',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 5,
  },
  cardDesc: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
  },
  buttonToggle: {
    marginBottom: 20
  }
});

export default App;