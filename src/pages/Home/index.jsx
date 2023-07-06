import {useTranslation} from 'react-i18next';
import {Text, Button} from 'react-native';
import {observer} from 'mobx-react';
import {useStores} from '../../store/index';
import Test from '../../components/Test/index';

const HomePage = () => {
  const {t, i18n} = useTranslation();
  const {testStore} = useStores();

  return (
    <>
      <Text>{t('test')}</Text>
      <Button
        title={t('button')}
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'en' ? 'zh-CN' : 'en');
        }}
      />
      <Test />
      <Button
        title={t('test-mobx.button')}
        onPress={() => {
          testStore.testObjectCountAdd();
        }}
      />
      <Text>
        {testStore.testApiData ? JSON.stringify(testStore.testApiData) : ''}
      </Text>
      <Button
        title={t('test-api.button')}
        onPress={() => {
          testStore.getTestData();
        }}
      />
    </>
  );
};

export default observer(HomePage);
