import './styles.css';
import {
  validateCardNumber,
  validateCardCVC,
  formatCardNumber,
  hasText,
  validateMonth,
  validateYear,
} from '~/utils/form';
import useError from '~/hooks/useError';

type Props = {
  number: string;
  name: string;
  date: [string, string];
  cvc: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<[string, string]>>;
  setAdded: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardForm = ({
  number,
  setNumber,
  name,
  setName,
  date,
  setDate,
  cvc,
  setCvc,
  setAdded,
}: Props) => {
  const nameError = useError(name, [hasText], ["Can't be blank"]);
  const cvcError = useError(cvc, [hasText, validateCardCVC], ["Can't be blank", 'Wrong format']);
  const yearError = useError(date[1], [hasText, validateYear], [" Can't be blank", 'Wrong format']);
  const monthError = useError(
    date[0],
    [hasText, validateMonth],
    ["Can't be blank", 'Wrong format'],
  );
  const numberError = useError(
    number,
    [hasText, validateCardNumber],
    ["Can't be blank", 'Wrong format'],
  );

  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!nameError && !cvcError && !yearError && !monthError) setAdded(true);
  };

  return (
    <form className='cardForm' onSubmit={handleForm}>
      <div className='cardFormElement'>
        <label htmlFor='name' className='cardFormElementLabel'>
          CARDHOLDER NAME
        </label>
        <input
          className={nameError ? 'error cardFormElementInput' : 'cardFormElementInput'}
          type='text'
          id='name'
          placeholder='e.g. Jane Appleseed'
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={21}
        />
        <small className='textError'>{nameError}</small>
      </div>
      <div className='cardFormElement'>
        <label htmlFor='number' className='cardFormElementLabel'>
          CARD NUMBER
        </label>
        <input
          className={numberError ? 'error cardFormElementInput' : 'cardFormElementInput'}
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
        <small className='textError'>{numberError}</small>
      </div>
      <div className='sharedSpace'>
        <div className='cardFormElement exp'>
          <p className='cardFormElementText'>
            EXP. DATE (<label htmlFor='month'>MM</label>/<label htmlFor='year'>YY</label>)
          </p>
          <div className='sharedSpace'>
            <div className='half'>
              <input
                className={monthError ? 'cardFormElementInput error' : 'cardFormElementInput'}
                type='text'
                id='month'
                placeholder='MM'
                maxLength={2}
                value={date[0]}
                onChange={(e) => {
                  setDate([e.target.value, date[1]]);
                }}
              />
              <small className='textError'>{monthError && monthError}</small>
            </div>
            <div className='half'>
              <input
                className={yearError ? 'cardFormElementInput error' : 'cardFormElementInput'}
                type='text'
                id='year'
                placeholder='YY'
                maxLength={2}
                value={date[1]}
                onChange={(e) => {
                  setDate([date[0], e.target.value]);
                }}
              />
              <small className='textError'>{yearError && yearError}</small>
            </div>
          </div>
        </div>
        <div className='cardFormElement cvc'>
          <label htmlFor='cvc' className='cardFormElementLabel'>
            CVC
          </label>
          <input
            className={cvcError ? 'error cardFormElementInput' : 'cardFormElementInput'}
            type='text'
            id='cvc'
            placeholder='e.g. 123'
            maxLength={3}
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
          />
          <small className='textError'>{cvcError}</small>
        </div>
      </div>

      <button className='cardFormButton' type='submit'>
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
