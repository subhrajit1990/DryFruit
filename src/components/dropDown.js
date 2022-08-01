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
    console.log(event.target.attributes.getNamedItem("data-variantname").value + " :: ddaaa :: "+event.target.getAttribute('data-variantname'));
    setValue({
      optionType : event.target.getAttribute('variantName'),
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
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.price} data-variantName={option.variantName}>{option.variantName}</option>
        ))} 
      </select>
    </label>
  );
};

export default dropDown;