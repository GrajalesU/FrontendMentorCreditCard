import { useState } from 'react';
import Added from '~/components/Added/Added';
import CardBack from '~/components/CardBack';
import CardForm from '~/components/CardForm';
import CardFront from '~/components/CardFront';

const CreditCard = () => {
  const [number, setNumber] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<[string, string]>(['', '']);
  const [cvc, setCvc] = useState<string>('');
  const [added, setAdded] = useState<boolean>(false);
  return (
    <div className='container'>
      <div className='background' />
      <div className='cardContainer'>
        <div className='cardContainerBack'>
          <CardBack cvc={cvc} />
        </div>
        <div className='cardContainerFront'>
          <CardFront number={number} date={date} name={name} />
        </div>
      </div>
      {added ? (
        <Added />
      ) : (
        <CardForm
          number={number}
          date={date}
          name={name}
          cvc={cvc}
          setNumber={setNumber}
          setDate={setDate}
          setName={setName}
          setCvc={setCvc}
          setAdded={setAdded}
        />
      )}
    </div>
  );
};

export default CreditCard;
