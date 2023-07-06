import {useTranslation} from 'react-i18next';
import {Text, Button} from 'react-native';
import {observer} from 'mobx-react';
import {useStores} from '../../store/index';
import Test from '../../components/Test/index';
import Test2 from '../../components/Test2';

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
      {testStore.mobxComponent ? testStore.mobxComponent : <Text />}
      <Button
        title={t('test-component.button')}
        onPress={() => {
          testStore.setMobxComponent(<Test2 />);
        }}
      />
    </>
  );
};

export default observer(HomePage);
