import * as React from 'react';

const dropDown = (props) => {
  const options = props.productData;
  console.log(JSON.stringify(options));
  const [value, setValue] = React.useState({
      optionType : "",
      optionAmt:""
  })
  

  const handleChange = (event) => {
    setValue({
      optionType : event.target.options[event.target.selectedIndex].attributes.variantname.value,
      optionAmt : event.target.value
    }) 
  };
  return (
    <div>
      <Dropdown
        label=""
        options={options}
        variantName={value.optionType}
        value={value.optionAmt}
        onChange={handleChange}
      />
      <p className="product-price"><span>{value.optionType}</span> {value.optionAmt}</p>
    </div>
  );
};

const Dropdown = ({ label, value, variantName, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} variantName={variantName} onChange={onChange}>
        {options.map((option) => (
          <option value={option.price} variantName={option.variantName}>{option.variantName}</option>
        ))} 
      </select>
    </label>
  );
};

export default dropDown;