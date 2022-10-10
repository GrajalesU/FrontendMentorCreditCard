import './styles.css';

const CardForm = () => {
  return (
    <form className='cardForm'>
      <div className='cardFormElement'>
        <label htmlFor='name' className='cardFormElementLabel'>
          CARDHOLDER NAME
        </label>
        <input
          className='cardFormElementInput'
          type='text'
          id='name'
          placeholder='e.g. Jane Appleseed'
        />
        <small className='textError'>{"Can't be blank"}</small>
      </div>
      <div className='cardFormElement'>
        <label htmlFor='number' className='cardFormElementLabel'>
          CARD NUMBER
        </label>
        <input
          className='cardFormElementInput'
          type='text'
          id='number'
          placeholder='e.g. 1234 5678 9123 0000'
        />
        <small className='textError'>Wrong format numbers only</small>
      </div>
      <div className='sharedSpace'>
        <div className='cardFormElement exp'>
          <p className='cardFormElementText'>
            EXP. DATE (<label htmlFor='month'>MM</label>/<label htmlFor='year'>YY</label>)
          </p>
          <div className='sharedSpace'>
            <input className='cardFormElementInput half' type='text' id='month' placeholder='MM' />
            <input className='cardFormElementInput half' type='text' id='year' placeholder='YY' />
          </div>
          <small className='textError'>{"Can't be blank"}</small>
        </div>
        <div className='cardFormElement cvc'>
          <label htmlFor='cvc' className='cardFormElementLabel'>
            CVC
          </label>
          <input className='cardFormElementInput' type='text' id='cvc' placeholder='e.g. 123' />
          <small className='textError'>Wrong format numbers only</small>
        </div>
      </div>

      <button className='cardFormButton' type='submit'>
        Confirm
      </button>
    </form>
  );
};

export default CardForm;
