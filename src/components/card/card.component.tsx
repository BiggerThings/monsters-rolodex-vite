import './card.styles.css';

type Monster = {
  id: string;
  name: string;
  email: string;
};

const Card = ({ name, email, id } : Monster) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
