import * as React from 'react';

const dropDown = (props) => {

  console.log( "drop down list :: " +JSON.stringify(props.productData));
  const options = props.productData;

  const [value, setValue] = React.useState({
      optionType : "",
      optionAmt:""
  })
  

  const handleChange = (event) => {
    setValue({
      optionType : event.target.optionsType,
      optionAmt : event.target.value
    }) 
  };
  return (
    <div>
      <Dropdown
        label="What do we eat?"
        options={options}
        optionsType= {optionsType}
        value={value}
        onChange={handleChange}
      />
      <p className="product-price"><span>{optionsType}</span> {optionAmt}</p>
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value}  optionsType= {optionsType} onChange={onChange}>
        {options.map((option) => (
          <option value={option.price}  optionsType= {option.variantName}>{option.variantName}</option>
        ))} 
      </select>
    </label>
  );
};

export default dropDown;