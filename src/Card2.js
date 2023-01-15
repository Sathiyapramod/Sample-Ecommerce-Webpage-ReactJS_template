import { useState } from 'react';

export function Card2({ Counter }) {

    const [show, setShow] = useState(true);

    let card = [
        {
            banner: "450x300",
            name: "Special Item",
            rating: "⭐⭐⭐⭐⭐",
            initialprice: "$20.00",
            revisedprice: "$18.00"
        },
    ]
    return (
        <div>{card.map((element) => {
            return (
                <div class="col bg-light container-fluid card d-flex flex-column border-1 shadow">
                    <div class="container-fluid card-header p-2 d-flex justify-content-center align-items-center fs-2 opacity-50">
                        <div className="badge bg-black position-absolute fs-6 fw-light text-center">Sale</div>
                        <div>{element.banner}</div>
                    </div>
                    <div class="card-body fw-bold flex-column gap-0 bg-light d-flex justify-content-between">
                        <div className='fw-bold fs-5 lh-0' >{element.name}</div>
                        <div className='visible'>{element.rating}</div>
                        <div className='d-flex flex-row justify-content-center align-items-center fw-normal gap-2'>
                            <div className='text-decoration-line-through'>{element.initialprice}</div>
                            <div className='fs-5 fw-bold'>{element.revisedprice}</div>
                        </div>
                        <div><button className='btn btn-outline-dark btn-sm' onClick={() => {
                            setShow(!show);
                            Counter(show);
                        }}>{show ? "Add to" : "Remove"} Cart
                        </button>
                        </div>
                    </div>
                </div>
            );
        })}</div>
    )

}
