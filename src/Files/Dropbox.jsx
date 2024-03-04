import * as React from "react";

const Dropbox = () => {
  const options = [
    { label: "Udupi", value: "udupi" },
    { label: "Kundapur", value: "Kundapur" },
    { label: "Brahmavar", value: "Brahmavar" },
    { label: "Udupi", value: "udupi" },
    { label: "Barkur", value: "barkur" },
    { label: "Surathkal", value: "surathkal" },
    { label: "Sasthan", value: "Sasthan" },
  ];

  const [value, setValue] = React.useState("Udupi");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <label>
        Please enter your preferred location.
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <p>Your Preferred delivery location is {value}!</p>
    </div>
  );
};

export default Dropbox;
