import React, { useState } from 'react';

interface SelectMenuProps {
  options: string[];
  onChange: (selectedOption: string) => void;
  value: string;
  classes?: string;
}

const SelectMenu: React.FC<SelectMenuProps> = ({ options, onChange, value, classes }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select value={value} onChange={handleSelectChange} className={`input_bg ${classes}`}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectMenu;
