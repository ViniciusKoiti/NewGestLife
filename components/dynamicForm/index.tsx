import React, { useState } from 'react';
import { View, Button, StyleSheet, NativeSyntheticEvent, TextInputEndEditingEventData } from 'react-native';
import DynamicFormProps from './dynamicFormProps';
import InputFieldProps from '../inputDefault/InputProps';
import ValidatedInputField from '../inputDefault';

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (name: string, valueInput: string) => {
        setFormData({ ...formData, [name]: valueInput });
    };

    const handleBlur = (label: string,
         eventBlur: NativeSyntheticEvent<TextInputEndEditingEventData>) => {


        
    };

    const handleSubmit = () => {
        const validationErrors: { [key: string]: string } = {};
        fields.forEach((field: InputFieldProps ) => {
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
                onBlur={handleBlur}
              />
            );
          case 'checkbox':
            return null;
          case 'multiselect':
            return null;
          case 'datecalendar':
            return null;
          default:
            return null;
        }
      };

    return (
        <View>
        {fields.map(field => renderField(field))}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
}

export default DynamicForm;
