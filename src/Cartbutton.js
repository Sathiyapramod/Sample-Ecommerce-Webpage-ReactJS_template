export function Cartbutton({value}){
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center flex-row gap-2'>
            <button className='btn btn-outline-dark d-flex col gap-2'>
              <div>🛒</div>
              <div>Cart</div>
              <div className='rounded-circle ms-1 me-1  ps-2 pe-2 bg-secondary text-white'>{value}</div>
            </button>
          </div>
    </div>
  );
}