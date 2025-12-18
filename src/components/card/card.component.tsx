import './card.styles.css';
import { Monster } from '../../App';

type CardProps = {
  monster: Monster;
};

const Card = ({ monster } : CardProps) => {
  const { name, email, id } = monster;
  
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
