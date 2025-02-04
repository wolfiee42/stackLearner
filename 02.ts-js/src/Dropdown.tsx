// React Dropdown
interface DropdownProps<T> {
  options: T;
  renderOption: (option: T) => string;
  onSelect: (option: T) => void;
}

function Dropdown<T>({ options, renderOption, onSelect }: DropdownProps<T>) {
  return (
    <select onChange={(e) => onSelect(options[e.target.selectedIndex])}>
      {options.map((option, index) => (
        <option key={index}> {renderOption(option)} </option>
      ))}
    </select>
  );
}

const items = [
  { id: 1, label: "Item 1" },
  { id: 2, label: "Item 2" },
];

<Dropdown
  options={items}
  renderOption={(item) => item.label}
  onSelect={(item) => console.log(item)}
/>;
