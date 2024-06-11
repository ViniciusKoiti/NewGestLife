import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { DynamicFormProps } from './dynamicFormProps';
import ValidatedInputField from '../inputDefault';

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleBlur = (name: string, value: string) => {
        // Você pode adicionar lógica adicional ao desfocar, se necessário
    };

    const handleSubmit = () => {
        const validationErrors: { [key: string]: string } = {};
        fields.forEach((field: DynamicFormProps) => {
            if (field.funcaoDeValidacao) {
                const errorMsg = field.funcaoDeValidacao(formData[field.name] || '');
                if (errorMsg) {
                    validationErrors[field.name] = errorMsg;
                }
            }
        });

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData);
        }
    };

    return (
        <View> </View>
    );
}

export default DynamicForm;
