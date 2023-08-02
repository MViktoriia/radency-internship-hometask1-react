import React from 'react';
import './Select.css';


type Props = {
    name: string;
    values: string[];
    selectedValue: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>; 
}

function Select({name, values, selectedValue, onChange}: Props) {
  return (
      <select className='notes-select' name={name} id={name} value={selectedValue} onChange={onChange}>
          {values.map(value => (<option key={value} value={value}>{value}</option>))}
      </select>
  )
}

export default Select;