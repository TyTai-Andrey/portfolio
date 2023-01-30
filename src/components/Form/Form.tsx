import React from 'react';

interface FormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({
  children,
  className,
  onSubmit,
}) => (
  <form className={className} onSubmit={onSubmit}>
    {children}
  </form>
);
