import './styles.css';
import cardBackground from '../../assets/images/bg-card-back.png';

type Props = {
  cvc: string;
};

const CardBack = ({ cvc }: Props) => {
  return (
    <div className='cardBack'>
      <div className='cardBackground'>
        <img src={cardBackground} alt='back card background' />
      </div>
      <div className='cardSecret'>{cvc ? cvc : 123}</div>
    </div>
  );
};

export default CardBack;
