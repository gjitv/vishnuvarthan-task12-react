import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productSearch } from '../redux/action';

const SubNavbar = () => {
    
    return (
        <div className='SubNavbar flex justify-center shadow-lg shadow-gray-100'>
            <div className='flex flex-row flex-wrap gap-4 items-center justify-center'>
                <div className='flex flex-col'>
                    <div className='w-20 p-2 flex flex-col items-center'>
                        <img className='w-3/4 p-1' src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" />
                        <p className='font-medium md:p-0 px-3'>Mobiles</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-20 p-2 flex flex-col items-center'>
                        <img className='w-3/4 p-1' src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" />
                        <p className='font-medium md:p-0 px-3'>Grocery</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-20 p-2 flex flex-col items-center'>
                        <img className='w-3/4 p-1' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" />
                        <p className='font-medium md:p-0 px-3'>Fashion</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-20 p-2 flex flex-col items-center'>
                        <img className='w-3/4 p-1' src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />
                        <p className='font-medium md:p-0 px-3'>Appliances</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-20 p-2 flex flex-col items-center'>
                        <img className='w-3/4 p-1' src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                        <p className='font-medium md:p-0 px-3'>Offers</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-20 p-2 flex flex-col items-center'>
                        <img className='w-3/4 p-1' src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />
                        <p className='font-medium md:p-0 px-3'>Toys</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-20 p-2 flex flex-col items-center'>
                        <img className='w-3/4 p-1' src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" />
                        <p className='font-medium md:p-0 px-3'>Bikes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubNavbar