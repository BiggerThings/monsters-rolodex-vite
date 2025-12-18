import Card from '../card/card.component';
import { Monster } from '../../App';

import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className='card-list-container'>
      {monsters.map((monster, idx) => {
        return (
          <Card key={`${monster.name}-${idx}`} monster={monster}></Card>
        );
      })}
    </div>
  );
};

export default CardList;
