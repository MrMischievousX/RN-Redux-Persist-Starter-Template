import * as React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeBackground } from '../redux_config/actions';

const { width, height } = Dimensions.get('window');

const Screen2 = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');
  const { backgroundColor } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          backgroundColor: 'white',
          margin: 20,
          padding: 50,
          fontSize: 40,
          textAlign: 'center',
        }}
        onChangeText={onChangeText}
        value={text}
      />
      <TouchableOpacity onPress={() => dispatch(changeBackground(text.toLowerCase()))}>
        <View style={{ margin: 20, backgroundColor: 'white' }}>
          <Text style={{ textAlign: 'center', padding: 10 }}>
            Change Background Color
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Screen3')}>
        <View style={{ margin: 20, backgroundColor: 'white' }}>
          <Text style={{ textAlign: 'center', padding: 10 }}>
            Goto Screen 3
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Screen2;
