import './styles.css';
import cardBackground from '../../assets/images/bg-card-front.png';
import cardLogo from '../../assets/images/card-logo.svg';

type Props = {
  number: string;
  name: string;
  date: [string, string];
};
const CardFront = ({ number, name, date }: Props) => {
  return (
    <div className='cardFront'>
      <div className='cardBackground'>
        <img src={cardBackground} alt='front card background' />
      </div>
      <img className='cardLogo' src={cardLogo} alt='' />
      <div className='cardNumber'>{number ? number : '9591 6489 6389 1011'}</div>
      <div className='cardName'>{name ? name : 'FELICIA LEIRE'}</div>
      <div className='cardDate'>
        {date[0] ? date[0] : '09'}/{date[1] ? date[1] : '26'}
      </div>
    </div>
  );
};

export default CardFront;
