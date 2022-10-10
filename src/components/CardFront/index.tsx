import './styles.css';
import cardBackground from '../../assets/images/bg-card-front.png';
import cardLogo from '../../assets/images/card-logo.svg';
const CardFront = () => {
  return (
    <div className='cardFront'>
      <div className='cardBackground'>
        <img src={cardBackground} alt='front card background' />
      </div>
      <img className='cardLogo' src={cardLogo} alt='' />
      <div className='cardNumber'>9591 6489 6389 1011</div>
      <div className='cardName'>FELICIA LEIRE</div>
      <div className='cardDate'>09/26</div>
    </div>
  );
};

export default CardFront;
