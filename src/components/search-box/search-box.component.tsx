import { ChangeEventHandler  } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
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
