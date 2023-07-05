import {observer} from 'mobx-react';
import {useStores} from '../../store/index';
import {Text} from 'react-native';

const Test = () => {
  const {testStore} = useStores();
  return <Text>{testStore.testObject.numberObject.number}</Text>;
};

export default observer(Test);
