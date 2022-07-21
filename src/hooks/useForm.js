import { useState } from "react";

export const useForm = (valorInicial = {}) => {

  const [inputValues, setInputValues] = useState(valorInicial);

  const resetForm = () => {
    setInputValues(valorInicial);
  };

  const setForm = (newValues) => {
    setInputValues(newValues);
  };

  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  const mostrarValues = () => {
    console.log('--------------------------');
    console.log(`Nombre: ${inputValues.nombre}`);
    console.log(`Apellido: ${inputValues.apellido}`);
    console.log(`Correo: ${inputValues.correo}`);
    console.log('--------------------------');

    resetForm('');
  };

  return { inputValues, handleInputChange, resetForm, setForm, mostrarValues };

}