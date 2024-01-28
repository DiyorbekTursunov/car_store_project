import tag_2 from '../assets/tag-2.svg'
import close_icon from '../assets/close.svg'
import { useState } from 'react'
import photo_icon from '../assets/photo-icon.svg'

const AddCar = ({ setaddCarIsOpen }) => {
    const [MarkasiDropDown, setMarkasiDropDown] = useState(false)
    const [MarkasiDropDownValue, setMarkasiDropDownValue] = useState("Chevrolet")

    const [TanirovkasiDropDown, setTanirovkasiDropDown] = useState(false)
    const [TanirovkasiDropDownValue, setTanirovkasiDropDownValue] = useState("Yo'q")

    function MarkDropDown(value) {
        setMarkasiDropDownValue(value)
        setMarkasiDropDown(false)
    }

    function TanirovkaDropDown(value) {
        setTanirovkasiDropDownValue(value)
        setTanirovkasiDropDown(false)
    }

    return (
        <>
            <div className='absolute w-full h-full bg-[#F4F4F4] opacity-70 top-0 z-40' ></div>
            <div className='absolute w-full md:h-full  flex justify-center items-center top-0 z-50'>
                <div className='w-[1164px] bg-[#FCFCFC] rounded-2xl py-8 px-6 shadow-2xl'>
                    <div className='flex justify-between items-center mb-6'>
                        <div className='flex items-center gap-4'>
                            <img src={tag_2} alt="tag image" />
                            <h2 className='text-[20px] font-semibold'>Mashina qo’shish</h2>
                        </div>
                        <button className='p-2 bg-[#F4F4F4] rounded-[50%]' onClick={() => setaddCarIsOpen(false)}>
                            <img src={close_icon} alt="close icon" />
                        </button>
                    </div>
                    <form className='flex flex-col items-end'>
                        <div className='w-full'>
                            <div className='flex sm:flex-row max-sm:flex-col gap-6 justify-between mb-4'>
                                <label htmlFor="model" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2 relative'>
                                    Markasi
                                    <button
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="dropdown"
                                        className="w-full py-3 px-3 bg-[#F4F4F4] rounded-md  focus:ring-4  font-medium text-sm  py text-center inline-flex items-center justify-between"
                                        type="button"
                                        onClick={() => setMarkasiDropDown(!MarkasiDropDown)}
                                    >
                                        {MarkasiDropDownValue}{" "}
                                        <svg
                                            className="w-2.5 h-2.5 ms-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    {MarkasiDropDown ? <div id="dropdown" className=" absolute top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-50">
                                        <ul
                                            className="py-2 text-sm bg-[#b8b8b8]"
                                            aria-labelledby="dropdownDefaultButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-[#a1a1a1]  dark:hover:text-white"
                                                    onClick={() => MarkDropDown("Chevrolet")}
                                                >
                                                    Chevrolet
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2  hover:bg-[#a1a1a1]  dark:hover:text-white"
                                                    onClick={() => MarkDropDown("Lada")}
                                                >
                                                    Lada
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2  hover:bg-[#a1a1a1]  dark:hover:text-white"
                                                    onClick={() => MarkDropDown("Lamborghini")}
                                                >
                                                    Lamborghini
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2  hover:bg-[#a1a1a1]  dark:hover:text-white"
                                                    onClick={() => MarkDropDown("Ferrari")}
                                                >
                                                    Ferrari
                                                </a>
                                            </li>
                                        </ul>
                                    </div> : null}
                                </label>

                                <label htmlFor="Tanirovkasi" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2 relative'>
                                    Tanirovkasi
                                    <button
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="dropdown"
                                        className="w-full py-3 px-3 bg-[#F4F4F4] rounded-md  focus:ring-4  font-medium text-sm  py text-center inline-flex items-center justify-between"
                                        type="button"
                                        onClick={() => setTanirovkasiDropDown(!TanirovkasiDropDown)}
                                    >
                                        {TanirovkasiDropDownValue}{" "}
                                        <svg
                                            className="w-2.5 h-2.5 ms-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    {TanirovkasiDropDown ? <div id="dropdown" className=" absolute top-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-40">
                                        <ul
                                            className="py-2 text-sm bg-[#b8b8b8]"
                                            aria-labelledby="dropdownDefaultButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-[#a1a1a1]  dark:hover:text-white"
                                                    onClick={() => TanirovkaDropDown("Yo'q")}
                                                >
                                                    Yo'q
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2  hover:bg-[#a1a1a1]  dark:hover:text-white"
                                                    onClick={() => TanirovkaDropDown("Ha")}
                                                >
                                                    Ha
                                                </a>
                                            </li>
                                        </ul>
                                    </div> : null}
                                </label>
                            </div>
                            <div className='flex sm:flex-row max-sm:flex-col gap-6  justify-between mb-4'>
                                <label htmlFor="Motor" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Motor
                                    <input type="number" name="" id="Motor" placeholder='Kiriting' required className=' w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' />
                                </label>
                                <label htmlFor="Motor" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Motor
                                    <input type="number" name="" id="Motor" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' />
                                </label>
                            </div>

                            <div className='flex sm:flex-row max-sm:flex-col  gap-6 justify-between mb-4'>
                                <label htmlFor="Color" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Color
                                    <input type="text" name="" id="Color" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' />
                                </label>
                                <label htmlFor="Distance" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Distance
                                    <input type="text" name="" id="Distance" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' />
                                </label>
                            </div>

                            <div className='flex  sm:flex-row max-sm:flex-col gap-6 justify-between mb-4'>
                                <label htmlFor="Rasm 360 ichki tomon" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Rasm 360 ichki tomon
                                    <input type="file" name="" id="Rasm 360 ichki tomon" placeholder='Kiriting' accept='image/*' required />
                                    <div className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md cursor-pointer flex gap-3' >
                                        <img src={photo_icon} alt="photo icon" />
                                        <span className='text-[#9A9FA5]'>Yuklash</span>
                                    </div>
                                </label>
                                <label htmlFor="Rasm 360 tashqi tomon" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Rasm 360 tashqi tomon
                                    <input type="file" name="" id="Rasm 360 tashqi tomon" placeholder='Kiriting' accept='image/*' required />
                                    <div className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md cursor-pointer flex gap-3' >
                                        <img src={photo_icon} alt="photo icon" />
                                        <span className='text-[#9A9FA5]'>Yuklash</span>
                                    </div>
                                </label>
                            </div>

                            <div className='flex  sm:flex-row max-sm:flex-col gap-6 justify-between mb-4'>
                                <label htmlFor="model" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Deseription
                                    <textarea name="" id="model" placeholder='Kiriting' required className='w-full h-[200px] py-3 pl-3 bg-[#F4F4F4] rounded-md' />
                                </label>
                                <label htmlFor="Modeli turi uchun rasm" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Modeli turi uchun rasm
                                    <input type="file" name="" id="Modeli turi uchun rasm" placeholder='Kiriting' accept='image/*' required />
                                    <div className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md cursor-pointer flex gap-3' >
                                        <img src={photo_icon} alt="photo icon" />
                                        <span className='text-[#9A9FA5]'>Yuklash</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <hr className='w-full h-[1px] bg-slate-100 mb-6' />
                        <button className='px-5 py-3 bg-[#2A85FF] rounded-xl text-[#fff] text-[15px] font-bold'>Saqlash</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCar
