import { useEffect, useState } from 'react';

const useError = (
  variable: string,
  validators: Array<(text: string) => boolean>,
  messages: Array<string>,
): string => {
  const [error, setError] = useState('');
  useEffect(() => {
    const errors: Array<string> = [];

    validators.forEach((validator, index) => {
      if (!validator(variable)) {
        errors.push(messages[index]);
      }

      if (errors.length > 0) setError(errors[0]);
      else setError('');
    });
  }, [variable, messages, validators]);
  return error;
};

export default useError;
