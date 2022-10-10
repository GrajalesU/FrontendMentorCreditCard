import './styles.css';
import cardBackground from '../../assets/images/bg-card-back.png';

const CardBack = () => {
  return (
    <div className='cardBack'>
      <div className='cardBackground'>
        <img src={cardBackground} alt='back card background' />
      </div>
      <div className='cardSecret'>123</div>
    </div>
  );
};

export default CardBack;
