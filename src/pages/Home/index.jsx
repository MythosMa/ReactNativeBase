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
        title={t('test-component.button')}
        onPress={() => {
          testStore.testObjectCountAdd();
        }}
      />
    </>
  );
};

export default observer(HomePage);
