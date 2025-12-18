import { ChangeEvent  } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => {
  return (
    <input
      className='search-box-container'
      placeholder={placeholder}
      type='search'
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
