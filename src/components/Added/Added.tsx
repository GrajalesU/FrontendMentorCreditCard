import './styles.css';
import addedImage from '../../assets/images/icon-complete.svg';
const Added = () => {
  return (
    <div className='added'>
      <img src={addedImage} alt='Circle with check symbol' />
      <h1 className='addedTitle'>THANK YOU!</h1>
      <h2 className='addedDetail'>{"We've added your card details"}</h2>
      <button
        className='addedButton'
        onClick={() => {
          window.location.reload();
        }}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default Added;
