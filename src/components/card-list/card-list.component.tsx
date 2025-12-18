import Card from '../card/card.component';

import './card-list.styles.css';

type Monster = {
  id: string;
  name: string;
  email: string;
};

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className='card-list-container'>
      {monsters.map(({ name, email, id }, idx) => {
        return (
          <Card key={`${name}-${idx}`} name={name} email={email} id={id}></Card>
        );
      })}
    </div>
  );
};

export default CardList;
