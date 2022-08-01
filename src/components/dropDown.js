import * as React from 'react';

const dropDown = (props) => {

  console.log( "drop down list :: " +JSON.stringify(props.productData));
  const options = props.productData;

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dropdown
        label="What do we eat?"
        options={options}
        value={value}
        onChange={handleChange}
      />
      <p className="product-price"><span>Per Kg</span> {value}</p>
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.price}>{option.variantName}</option>
        ))}
      </select>
    </label>
  );
};

export default dropDown;