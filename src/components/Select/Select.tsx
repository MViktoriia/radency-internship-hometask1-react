import React from 'react';
import './Select.css';


type Props = {
    name: string;
    values: string[];
    onChange: React.ChangeEventHandler<HTMLSelectElement>; 
}


function Select({name, values, onChange}: Props) {
  return (
      <select className='notes-select' name={name} id={name} onChange={onChange}>
          {values.map(value => (<option key={value} value={value}>{value}</option>))}
      </select>
  )
};

export default Select;