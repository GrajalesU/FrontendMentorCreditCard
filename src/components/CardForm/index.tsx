import './styles.css';
import { validateCardNumber, validateCardCVC, formatCardNumber, isBlank } from '~/utils/form';
import { useState } from 'react';

type Props = {
  number: string;
  name: string;
  date: [string, string];
  cvc: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<[string, string]>>;
};

const NOT_ERRORS = {
  number: [false, ''],
  name: [false, ''],
  cvc: [false, ''],
  date: {
    month: false,
    year: false,
    message: '',
  },
};

const CardForm = ({ number, setNumber, name, setName, date, setDate, cvc, setCvc }: Props) => {
  const [errors, setErrors] = useState(NOT_ERRORS);
  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!validateCardCVC(cvc)) {
      setErrors((current) => {
        return {
          ...current,
          cvc: [true, 'Wrong format, numbers only'],
        };
      });
    } else {
      setErrors((current) => {
        return {
          ...current,
          cvc: [false, ''],
        };
      });
    }
    if (!validateCardNumber(number)) {
      setErrors((current) => {
        return {
          ...current,
          number: [true, 'Wrong format, numbers only'],
        };
      });
    } else {
      setErrors((current) => {
        return {
          ...current,
          number: [false, ''],
        };
      });
    }
    if (isBlank(number)) {
      setErrors((current) => {
        return {
          ...current,
          number: [true, "Can't be blank"],
        };
      });
    } else {
      setErrors((current) => {
        return {
          ...current,
          number: [false, ''],
        };
      });
    }
    if (isBlank(name)) {
      setErrors((current) => {
        return {
          ...current,
          name: [true, "Can't be blank"],
        };
      });
    } else {
      setErrors((current) => {
        return {
          ...current,
          name: [false, "Can't be blank"],
        };
      });
    }
    if (isBlank(cvc)) {
      setErrors((current) => {
        return {
          ...current,
          cvc: [true, "Can't be blank"],
        };
      });
    } else {
      setErrors((current) => {
        return {
          ...current,
          cvc: [false, ''],
        };
      });
    }
    if (isBlank(date[0])) {
      setErrors((current) => {
        return {
          ...current,
          date: {
            ...current.date,
            month: true,
            message: "Can't be blank",
          },
        };
      });
    } else {
      setErrors((current) => {
        return {
          ...current,
          date: {
            ...current.date,
            month: false,
            message: "Can't be blank",
          },
        };
      });
    }
    if (isBlank(date[1])) {
      setErrors((current) => {
        return {
          ...current,
          date: {
            ...current.date,
            year: true,
            message: "Can't be blank",
          },
        };
      });
    } else {
      setErrors((current) => {
        return {
          ...current,
          date: {
            ...current.date,
            year: false,
            message: "Can't be blank",
          },
        };
      });
    }
  };
  return (
    <form className='cardForm' onSubmit={handleForm}>
      <div className='cardFormElement'>
        <label htmlFor='name' className='cardFormElementLabel'>
          CARDHOLDER NAME
        </label>
        <input
          className={errors.name[0] ? 'error cardFormElementInput' : 'cardFormElementInput'}
          type='text'
          id='name'
          placeholder='e.g. Jane Appleseed'
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={21}
        />
        <small className='textError'>{errors.name[0] && errors.name[1]}</small>
      </div>
      <div className='cardFormElement'>
        <label htmlFor='number' className='cardFormElementLabel'>
          CARD NUMBER
        </label>
        <input
          className={errors.number[0] ? 'error cardFormElementInput' : 'cardFormElementInput'}
          type='text'
          id='number'
          placeholder='e.g. 1234 5678 9123 0000'
          maxLength={19}
          value={number}
          onChange={(e) => {
            const formatNumber = formatCardNumber(e.target.value);
            setNumber(formatNumber);
          }}
        />
        <small className='textError'>{errors.number[0] && errors.number[1]}</small>
      </div>
      <div className='sharedSpace'>
        <div className='cardFormElement exp'>
          <p className='cardFormElementText'>
            EXP. DATE (<label htmlFor='month'>MM</label>/<label htmlFor='year'>YY</label>)
          </p>
          <div className='sharedSpace'>
            <input
              className={
                errors.date.month ? 'cardFormElementInput half error' : 'cardFormElementInput half'
              }
              type='number'
              id='month'
              placeholder='MM'
              min='1'
              max='12'
              value={date[0]}
              onChange={(e) => {
                setDate([e.target.value, date[1]]);
              }}
            />
            <input
              className={
                errors.date.year ? 'cardFormElementInput half error' : 'cardFormElementInput half'
              }
              type='number'
              id='year'
              placeholder='YY'
              min='00'
              max='99'
              value={date[1]}
              onChange={(e) => {
                setDate([date[0], e.target.value]);
              }}
            />
          </div>
          <small className='textError'>
            {(errors.date.month || errors.date.year) && errors.date.message}
          </small>
        </div>
        <div className='cardFormElement cvc'>
          <label htmlFor='cvc' className='cardFormElementLabel'>
            CVC
          </label>
          <input
            className={errors.cvc[0] ? 'error cardFormElementInput' : 'cardFormElementInput'}
            type='text'
            id='cvc'
            placeholder='e.g. 123'
            maxLength={3}
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
          />
          <small className='textError'>{errors.cvc[0] && errors.cvc[1]}</small>
        </div>
      </div>

      <button className='cardFormButton' type='submit'>
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
