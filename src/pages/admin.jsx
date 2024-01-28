import tag from '../assets/tag.svg'
import plusIcon from '../assets/plus.svg'
import arrov_right from '../assets/arrov-right.svg'
import CreateCatigoryModal from '../components/create-catigory-modal'
import { useState } from 'react'
import AddCar from '../components/add-car'


const Admin = () => {
    const [KatigoriyaIsOpen, setKatigoriyaIsOpen] = useState(false)
    const [addCarIsOpen, setaddCarIsOpen] = useState(false)
    return (
        <div className="w-full bg-[#F4F4F4] h-screen pt-[40px]">
            {KatigoriyaIsOpen ? <CreateCatigoryModal setKatigoriyaIsOpen={setKatigoriyaIsOpen}/> : null}
            {addCarIsOpen ? <AddCar setaddCarIsOpen={setaddCarIsOpen}/> : null}
            <div className="max-w-[1280px] mx-auto px-3">
                <div className="bg-[#fff] rounded-lg pt-4 px-3 pb-3">
                    <div className='flex justify-between items-center mb-8'>
                        <div className='flex items-center gap-4'>
                            <img src={tag} alt="tag image" />
                            <h2 className='text-[20px] font-semibold'>Mashinalar</h2>
                        </div>
                        <div className='flex items-center gap-8'>
                            <button className='flex gap-2 bg-[#2A85FF] px-5 py-3 rounded-lg text-[#fff] text-[15px] font-bold' onClick={() => setKatigoriyaIsOpen(true)}>
                                <img src={plusIcon} alt="plus icon" />
                                Katigoriya yaratish
                            </button>
                            <button className='flex gap-2 bg-[#2A85FF] px-5 py-3 rounded-lg text-[#fff] text-[15px] font-bold' onClick={() => setaddCarIsOpen(true)}>
                                <img src={plusIcon} alt="plus icon" />
                                Mashina qo‘shish
                            </button>
                        </div>
                    </div>
                    <div className='max-w-[996px] mx-auto'>
                        <ul className='max-w-[910px] flex  text-[#6F767E] text-[13px] font-semibold mb-5'>
                            <li className='flex gap-7'>
                                <span>#</span>
                                <span>Markasi</span>
                            </li>
                            <li className='pl-[120px]'>
                                <span>Gearbook</span>
                            </li>
                            <li className='pl-36'>
                                <span>Tanirovkasi</span>
                            </li>
                            <li className='pl-10'>
                                <span>Motor</span>
                            </li>
                            <li className='pl-14'>
                                <span>Year</span>
                            </li>
                            <li className='pl-20'>
                                <span>Color</span>
                            </li>
                            <li className='pl-[70px]'>
                                <span>Distance</span>
                            </li>
                        </ul>
                        <ul className='flex flex-col  text-[15px] font-bold mb-7'>
                            <li className='flex justify-between border-b-slate-100 border-b-[2px] py-[19px]'>
                                <div className='flex gap-6'>
                                    <span>1.</span>
                                    <span>CHEVROLET</span>
                                </div>
                                <span>Avtomat karobka</span>
                                <span>Yoq</span>
                                <span>1.6</span>
                                <span>2016</span>
                                <span>Oq</span>
                                <span>3000km</span>
                                <img src={arrov_right} alt="" />
                            </li>
                            <li className='flex justify-between border-b-slate-100 border-b-[2px] py-[19px]'>
                                <div className='flex gap-6'>
                                    <span>1.</span>
                                    <span>CHEVROLET</span>
                                </div>
                                <span>Avtomat karobka</span>
                                <span>Yoq</span>
                                <span>1.6</span>
                                <span>2016</span>
                                <span>Oq</span>
                                <span>3000km</span>
                                <img src={arrov_right} alt="" />
                            </li>
                            <li className='flex justify-between border-b-slate-100 border-b-[2px] py-[19px]'>
                                <div className='flex gap-6'>
                                    <span>1.</span>
                                    <span>CHEVROLET</span>
                                </div>
                                <span>Avtomat karobka</span>
                                <span>Yoq</span>
                                <span>1.6</span>
                                <span>2016</span>
                                <span>Oq</span>
                                <span>3000km</span>
                                <img src={arrov_right} alt="" />
                            </li>
                            <li className='flex justify-between border-b-slate-100 border-b-[2px] py-[19px]'>
                                <div className='flex gap-6'>
                                    <span>1.</span>
                                    <span>CHEVROLET</span>
                                </div>
                                <span>Avtomat karobka</span>
                                <span>Yoq</span>
                                <span>1.6</span>
                                <span>2016</span>
                                <span>Oq</span>
                                <span>3000km</span>
                                <img src={arrov_right} alt="" />
                            </li>
                            <li className='flex justify-between border-b-slate-100 border-b-[2px] py-[19px]'>
                                <div className='flex gap-6'>
                                    <span>1.</span>
                                    <span>CHEVROLET</span>
                                </div>
                                <span>Avtomat karobka</span>
                                <span>Yoq</span>
                                <span>1.6</span>
                                <span>2016</span>
                                <span>Oq</span>
                                <span>3000km</span>
                                <img src={arrov_right} alt="" />
                            </li>
                            <li className='flex justify-between border-b-slate-100 border-b-[2px] py-[19px]'>
                                <div className='flex gap-6'>
                                    <span>1.</span>
                                    <span>CHEVROLET</span>
                                </div>
                                <span>Avtomat karobka</span>
                                <span>Yoq</span>
                                <span>1.6</span>
                                <span>2016</span>
                                <span>Oq</span>
                                <span>3000km</span>
                                <img src={arrov_right} alt="" />
                            </li>
                            <li className='flex justify-between border-b-slate-100 border-b-[2px] py-[19px]'>
                                <div className='flex gap-6'>
                                    <span>1.</span>
                                    <span>CHEVROLET</span>
                                </div>
                                <span>Avtomat karobka</span>
                                <span>Yoq</span>
                                <span>1.6</span>
                                <span>2016</span>
                                <span>Oq</span>
                                <span>3000km</span>
                                <img src={arrov_right} alt="" />
                            </li>
                        </ul>
                        <nav aria-label="Page navigation example" className='w-full flex justify-center my-3'>
                            <ul className="flex items-center -space-x-px h-8 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 "
                                    >
                                        <span className="sr-only">Previous</span>
                                        <svg
                                            className="w-2.5 h-2.5 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 1 1 5l4 4"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 "
                                    >
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 "
                                    >
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 "
                                    >
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 "
                                    >
                                        ...
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500"
                                    >
                                        <span className="sr-only">Next</span>
                                        <svg
                                            className="w-2.5 h-2.5 rtl:rotate-180"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 9 4-4-4-4"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
