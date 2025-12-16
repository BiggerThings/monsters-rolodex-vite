import './search-box.styles.css';

const SearchBox = ({ placeholder, onChangeHandler }: { placeholder: string; onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
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
