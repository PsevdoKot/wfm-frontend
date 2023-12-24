export type FormSelectProps = {
  values: string[];
  selectedValue?: string;
  setSelectedValue: (value: string) => void;
  placeholder: string;
  id: string;
};

export default function FormSelect({ values, selectedValue, setSelectedValue, placeholder, id }: FormSelectProps): JSX.Element {
  return (
    <div className="signup__input-group">
      <label className="signup__label" htmlFor={id}>{placeholder}</label>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className="signup__select"
        placeholder={placeholder}
        name={id}
        id={id}
      >
        {values.map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}
