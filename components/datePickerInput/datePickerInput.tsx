import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputFieldProps from '../inputDefault/InputProps';
import inputStyles from '../inputDefault/inputDefaultStyle';

const DateInputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  inputValue,
  onChanged,
  errors
}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const { 
    input, 
    container, 
    labelStyle,
    errorInput,
    errorText 
  } = inputStyles;

  input.color = "#000";

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = selectedDate.toISOString().split('T')[0];
      if (onChanged) {
        onChanged(label, formattedDate);
        return;
      }
      throw new Error(`onChanged is not defined for the date input field with label "${label}"`);
    }
  };

  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TouchableOpacity onPress={() => setShow(true)}>
        <TextInput
          style={[input, errors[label] ? errorInput : null]}
          placeholder={placeholder}
          value={inputValue}
          editable={false}
        />
      </TouchableOpacity>
      {errors[label] && <Text style={errorText}>{errors[label]}</Text>}
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};


export default DateInputField;
