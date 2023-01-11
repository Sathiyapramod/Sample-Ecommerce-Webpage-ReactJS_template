import React from 'react'

const Card6 = () => {
    let card = [
        {
            banner: "450x300",
            name: "Fancy product",
            price: "$40.00 - $80.00",
        },
    ]
    return (
        <div>{card.map((element) => {
            return (
                <div class="col container-fluid card bg-light border-1 shadow d-flex flex-column ms">
                    <div class="container-fluid card-header p-2 d-flex justify-content-center align-items-center fs-2 opacity-50">
                        <div className="invisible badge bg-dark position-absolute fs-6">Sale</div>
                        <div>{element.banner}</div>
                    </div>
                    <div class="card-body fw-bold col gap-2 bg-light">
                        <div className='fw-bold fs-6 h-30'>{element.name}</div>
                        <div className='fw-light fs-6'>{element.price}</div>
                        <div className='invisible'>⭐{element.rating}</div>
                        <div><button className='btn btn-outline-dark btn-sm'>View Options</button></div>
                    </div>
                </div>
            );
        })}</div>
    )
}

export default Card6