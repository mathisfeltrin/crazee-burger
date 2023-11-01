import { BsPersonCircle } from "react-icons/bs";

export default function Input({ value, onChange, ...restProps }) {
  return (
    <div className="input-with-icon">
      <BsPersonCircle className="icon" />
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </div>
  );
}
