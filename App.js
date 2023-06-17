import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import StackNavigator from './StackNavigating';

export default function App() {
  return (
    
  <Provider store={store}>
      <StatusBar  style='auto'/>
     
        <StackNavigator/>
     </Provider>
      
    
  );
}

const styles = StyleSheet.create({
 
});
