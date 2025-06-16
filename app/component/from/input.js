'use client';
import { DatePicker, Form, Input } from 'antd';
import { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const FormInput = ({
  label,
  name,
  placeholder,
  className,
  required,
  isEmail,
  initialValue,
  rules = [],
  textArea,
  type,
  readOnly,
  onChange,
  value,
  rows,
  cols,
  icon
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  let initRules = [
    {
      required: required,
      message: `${'Please provide'} ${typeof label === 'string' ? label : 'a value'}`
    }
  ];

  if (isEmail) {
    initRules.push({ type: 'email', message: 'Please enter a valid email address' });
  }

  let input = <Input
    className={`form-input ${readOnly ? 'bg-gray-100' : ''} ${className}`}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    readOnly={readOnly}
    value={value}
    prefix={icon}
  />;

  if (textArea) {
    input = (
      <textarea
        className="form-input"
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        cols={cols}
      />
    );
  }

  if (type === 'date') {
    input = <DatePicker className={`form-input ${className}`} onChange={onChange} />;
  }

  if (type?.trim() === 'password') {
    input = (
      <Input.Password
        className={`form-input ${className}`}
        placeholder={placeholder}
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
    );
  }

  return (
    <Form.Item
      name={name}
      label={label}
      rules={[...initRules, ...rules]}
      className="w-full"
      initialValue={initialValue || ''}
    >
      {input}
    </Form.Item>
  );
};

export default FormInput;

export const HiddenInput = ({ name, initialValue }) => {
  return (
    <Form.Item name={name} initialValue={initialValue || ''} hidden>
      <input className="form-input" />
    </Form.Item>
  );
};
