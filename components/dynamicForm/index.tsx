import React, { useState } from 'react';
import { View, Text, NativeSyntheticEvent, TextInputEndEditingEventData, Pressable } from 'react-native';
import InputFieldProps from '../inputDefault/InputProps';
import ValidatedInputField from '../inputDefault';
import DynamicFormProps from './DynamicFormProps';
import formStyles from './DynamicFormStyle';
import DateInputField from '../datePickerInput/datePickerInput';

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit, submitButton }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { buttonDefault, textDefault } = formStyles;

  const handleChange = (name: string, valueInput: string) => {
    setFormData({ ...formData, [name]: valueInput });
  };

  const handleFieldBlur = (label: string,
    eventBlur: NativeSyntheticEvent<TextInputEndEditingEventData>) => {



  };

  const handleSubmit = () => {
    const validationErrors: { [key: string]: string } = {};
    fields.forEach((field: InputFieldProps) => {
      console.log(field);
      if (field.onSubmitted) {
        const errorMsg = field.onSubmitted(formData[field.label] || '', field.label);
        if (errorMsg) {
          validationErrors[field.label] = errorMsg;
        }
      }
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  };

  const renderField = (field: InputFieldProps) => {
    switch (field.type) {
      case 'input':
        return (
          <ValidatedInputField
            key={field.label}
            {...field}
            inputValue={formData[field.label] || ''}
            errors={errors}
            onChanged={handleChange}
            onBlur={handleFieldBlur}
          />
        );
      case 'checkbox':
        return null;
      case 'multiselect':
        return null;
      case 'datecalendar':
        return ( <DateInputField
          key={field.label}
          {...field}
          inputValue={formData[field.label] || ''}
          errors={errors}
          onChanged={handleChange} />
        )
      default:
        return null;
    }
  };

  return (
    <View>
      {fields.map(field => renderField(field))}
      <Pressable style={buttonDefault} onPress={handleSubmit}>
        <Text style={textDefault}>{submitButton}</Text>
      </Pressable>
    </View>
  );
}

export default DynamicForm;
