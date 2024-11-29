import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalCoins, coinsPerPage }) => {
  const totalPages = Math.ceil(totalCoins / coinsPerPage);

  return (
    <div style={{
      display:'flex',
      justifyContent:'space-evenly',
      paddingTop:'20px'
    }}>
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
        disabled={currentPage === 0}
        style={{
          backgroundColor:'green',
         color:'white',
         padding:10,
         borderRadius:5,
           border:'none',
            marginLeft:200,
        }}
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
        disabled={currentPage === totalPages - 1}
        style={{
          backgroundColor:'green',
         color:'white',
         padding:10,
         paddingLeft:20,
         paddingRight:20,
         borderRadius:5,
         border:'none',
         marginLeft:400
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;