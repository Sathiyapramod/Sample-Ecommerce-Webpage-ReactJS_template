import React from 'react';

const Cartbutton = () => {
    let value=false;
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center flex-row gap-2'>
            <button className='btn btn-outline-dark d-flex col gap-2'>
              <div>🛒</div>
              <div>Cart</div>
              <div className='rounded-circle ms-1 me-1  ps-2 pe-2 bg-secondary text-white'>{value ? "1" : "0"}</div>
            </button>
          </div>
    </div>
  )
}

export default Cartbutton