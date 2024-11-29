import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search for a coin..."
      onChange={e => setSearchTerm(e.target.value)}
      style={{color:'green',marginLeft:200, fontFamily: 'Poppins',textAlign:'center', display:'flex',justifySelf:'center',padding:10,fontWeight:500,fontSize:20,borderBottom:'2px solid wheat',border:'none',outline:'none'}}
    />
  );
};

export default SearchBar;