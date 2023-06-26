import React from 'react'
import './Electronics.css'
import { Link } from 'react-router-dom'

const Electronics = () => {
  return (
    <div>
    <div className='py-5  bg-gray-100'>
        <div className="flex dlex-row flex-wrap bg-white shadow-md">
            <div className=" md:w-1/4 w-1/3 items-center text-center flex flex-col h-100 justify-center gap-7 md:h-96 h-52">
                <p className='md:text-3xl text-md md:px-0 px-2'>Best of Utilities</p>
                <button className="bg-blue-500 px-4 py-2 font-bold shadow-gray-100"><p className=" text-white md:text-sm text-xs"> <Link to="/products">VIEW ALL</Link></p></button>
            </div>
            <div className=" md:w-1/4 w-1/3 items-center text-center flex flex-col h-100 justify-center md:gap-5 gap:3 md:h-96 h-52">
                <div className="h-4/6 flex justify-center">
                    <img src="https://rukminim1.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70" alt="img" className="h-full md:w-auto w-4/5 py-3"  />
                </div>
                <div className="div">
                    <p className="">Best of trimmers</p>
                    <p className="text-lime-700">From ₹999</p>
                </div>
            </div>
            <div className=" md:w-1/4 w-1/3 items-center text-center flex flex-col h-100 justify-center md:gap-5 gap:3 md:h-96 h-52">
                <div className="h-4/6 flex justify-center">
                    <img src="https://rukminim1.flixcart.com/image/200/200/xif0q/power-bank/j/i/v/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagn22tuac3hqnz.jpeg?q=70" alt="img" className="h-full md:w-auto w-4/5  py-3" />
                </div>
                <div className="div">
                    <p className="">Best of trimmers</p>
                    <p className="text-lime-700">From ₹999</p>
                </div>
            </div>
            <div className=" md:w-1/4 w-1/3 items-center text-center flex flex-col h-100 justify-center md:gap-5 gap:3 md:h-96 h-52">
                <div className="h-4/6 flex justify-center">
                    <img src="https://rukminim1.flixcart.com/image/200/200/xif0q/electric-kettle/w/g/r/-original-imaggkhdr4thnypr.jpeg?q=70" alt="img" className="h-full md:w-auto w-4/5  py-3" />
                </div>
                <div className="div">
                    <p className="">Best of trimmers</p>
                    <p className="text-lime-700">From ₹999</p>
                </div>
            </div>
        </div>
    </div>
    <div className='py-5  bg-gray-100'>
        <div className="flex dlex-row flex-wrap bg-white shadow-md">
            <div className=" md:w-1/4 w-1/3 items-center text-center flex flex-col h-100 justify-center gap-7 md:h-96 h-52">
                <p className='md:text-3xl text-md md:px-0 px-2'>Best of Electronics</p>
                <button className="bg-blue-500 px-4 py-2 font-bold shadow-gray-100"><p className=" text-white md:text-sm text-xs"> <Link to="/products">VIEW ALL</Link></p></button>
            </div>
            <div className=" md:w-1/4 w-1/3 items-center text-center flex flex-col h-100 justify-center md:gap-5 gap:3 md:h-96 h-52">
                <div className="h-4/6 flex justify-center">
                    <img src="https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70" alt="img" className="h-full md:w-auto w-4/5 py-3"  />
                </div>
                <div className="div">
                    <p className="">Best of TV</p>
                    <p className="text-lime-700">From ₹999</p>
                </div>
            </div>
            <div className=" md:w-1/4 w-1/3 items-center text-center flex flex-col h-100 justify-center md:gap-5 gap:3 md:h-96 h-52">
                <div className="h-4/6 flex justify-center">
                    <img src="https://rukminim1.flixcart.com/image/200/200/xif0q/instant-camera/y/l/3/mini-12-instax-16791340-fujifilm-original-imagzkbhzrx7ssyd.jpeg?q=70" alt="img" className="h-full md:w-auto w-4/5  py-3" />
                </div>
                <div className="div">
                    <p className="">Best of trimmers</p>
                    <p className="text-lime-700">From ₹999</p>
                </div>
            </div>
            <div className=" md:w-1/4 w-1/3 items-center text-center flex flex-col h-100 justify-center md:gap-5 gap:3 md:h-96 h-52">
                <div className="h-4/6 flex justify-center">
                    <img src="https://rukminim1.flixcart.com/image/200/200/klzhq4w0/backpack/d/t/4/bingo-3-compartment-premium-quality-office-college-school-laptop-original-imagyzmz3kcr5rgy.jpeg?q=70" alt="img" className="h-full md:w-auto w-4/5  py-3" />
                </div>
                <div className="div">
                    <p className="">Best of trimmers</p>
                    <p className="text-lime-700">From ₹999</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Electronics