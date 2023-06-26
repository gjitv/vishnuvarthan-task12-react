import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { productSearch } from '../redux/action'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const handleOnChange=(e)=>{
        navigate("/products")
        e.preventDefault();    
        dispatch(productSearch(e.target.value))    
    }
    
    return (
        <div>
            <Disclosure as="nav" className="bg-blue-700">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">

                                            <p
                                    
                                                className={classNames(
                                                    'text-white hover:bg-blue-800 hover:text-white',
                                                    'rounded-md px-3 py-2 text-lg font-medium'
                                                )}

                                            >
                                                SHOPPIFY
                                            </p>
                                            <p
                                                className={classNames(
                                                    'text-gray-100 flex items-center hover:bg-blue-800 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}

                                            >
                                                <Link to="/login">LOGIN</Link> 
                                            </p>
                                            <p
                                                className={classNames(
                                                    'text-gray-100 flex items-center hover:bg-blue-800 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}

                                            >
                                                <Link to="/">HOME</Link> 
                                            </p>
                                            <p
                                                
                                                className={classNames(
                                                    'text-gray-100 flex items-center hover:bg-blue-800 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}

                                            >
                                                <Link to="/cart">CART</Link> 
                                            </p>
                                            
                                            <p 
                                                className={classNames(
                                                    'text-gray-100 flex items-center hover:bg-blue-800 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}

                                            >
                                               <Link to="/products">PRODUCTS</Link> 
                                            </p>
                                           
                                        </div>
                                    </div>
                                    <form className="sm:ml-10">
                                        <input onChange={handleOnChange} className="shadow appearance-none border rounded w-full py-2 md:px-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search Products" />
                                    </form>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <Disclosure.Button
                                    key="SHOPPIFY"
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        'text-gray-300 hover:bg-blue-800 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}

                                >
                                    SHOFFIFY
                                </Disclosure.Button>
                                <Disclosure.Button
                                    key="HOME"
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        'text-gray-300 hover:bg-blue-800 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}

                                >
                                   <Link to="/">HOME</Link> 
                                </Disclosure.Button>
                                <Disclosure.Button
                                    key="LOGIN"
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        'text-gray-300 hover:bg-blue-800 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}

                                >
                                   <Link to="/login">LOGIN</Link>
                                </Disclosure.Button>
                                <Disclosure.Button
                                    key="PRODUCTS"
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        'text-gray-300 hover:bg-blue-800 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}

                                >
                                   <Link to="/products">PRODUCTS</Link> 
                                </Disclosure.Button>
                                <Disclosure.Button
                                    key="CART0"
                                    as="a"
                                    href="#"
                                    className={classNames(
                                        'text-gray-300 hover:bg-blue-800 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}

                                >
                                   <Link to="/cart">CART</Link>
                                </Disclosure.Button>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default Navbar


