
import React, { useEffect, useState } from 'react'
import useDebounce from './usedebounce';

type SearchinputProps = {
    onChangeSearchQuery: (query: string) => void
}

const Searchinput = ({ onChangeSearchQuery}:SearchinputProps) => {

  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  useEffect(() => {
    if (debouncedSearchQuery) {
      onChangeSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onChangeSearchQuery]);


  return (
    <>
    <label htmlFor='search-input'>Search</label>
    <input id='search-input' type='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    
    </>
  )
}



export default Searchinput