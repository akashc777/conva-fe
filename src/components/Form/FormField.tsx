import React from "react";

interface ProfileFieldProps {
  label: string;
  name: string;
  value: string;
  type?: string; // Added type prop
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly: boolean,
  required: boolean,
}

const FormField: React.FC<ProfileFieldProps> = ({
  label,
  name,
  value,
  type = "text", // Set default type to "text"
  onChange,
  readOnly,
  required
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="block mb-2 text-m font-medium text-gray-900">
        {label}{required && (<span className='text-red-600'>*</span>)}:
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type={type} // Set input type dynamically
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        required={required}
      />
    </div>
  );
};

export default FormField;
