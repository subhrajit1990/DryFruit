import * as React from 'react';

const dropDown = (props) => {

  console.log( "drop down list :: " +JSON.stringify(props.productData));
  const options = props.productData;

  const [value, setValue] = React.useState({
      optionType : "",
      optionAmt:""
  })
  

  const handleChange = (event) => {
    debugger;
    setValue({
      optionType : event.target.value,
      optionAmt : event.target.value
    }) 
  };
  return (
    <div>
      <Dropdown
        label="What do we eat?"
        options={options}
        value={value.optionAmt}
        onChange={handleChange}
      />
      <p className="product-price"><span>{value.optionType}</span> {value.optionAmt}</p>
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value}  onChange={onChange}>
        {options.map((option) => (
          <option value={option.prie}>{option.variantName}</option>
        ))} 
      </select>
    </label>
  );
};

export default dropDown;