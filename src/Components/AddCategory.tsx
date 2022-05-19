import React, { useState } from 'react';

export interface AddCategoryProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory = (props: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      props.setCategories((categories) => [inputValue, ...categories]);
      setInputValue('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};
