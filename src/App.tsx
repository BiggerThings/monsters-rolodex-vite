import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';

import './App.css';

type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
      setFilteredMonsters(users);
    }

    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value.toLowerCase();
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString)
    );
    setFilteredMonsters(newFilteredMonsters);
  };

  return (
    <div className='app-container'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox placeholder="Search monsters" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
