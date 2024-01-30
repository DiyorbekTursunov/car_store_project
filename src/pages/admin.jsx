import tag from '../assets/tag.svg'
import plusIcon from '../assets/plus.svg'
import arrov_right from '../assets/arrov-right.svg'
import CreateCatigoryModal from '../components/create-catigory-modal'
import { useEffect, useState } from 'react'
import AddCar from '../components/add-car'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useStore } from 'react-redux'


const Admin = () => {
    const [KatigoriyaIsOpen, setKatigoriyaIsOpen] = useState(false)
    const [addCarIsOpen, setaddCarIsOpen] = useState(false)
    const token = localStorage.getItem("adminToken")
    const navigate = useNavigate()
    const [carsData, setcarsData] = useState([])

    const [isLoading, setisLoading] = useState(false)

    const [currentPage, setcurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(10)

    async function getAllCars() {
        try {
            setisLoading(true)
            const headers = {
                token
            };
            const cars = await axios.get("http://localhost:4001/get_all_car", { headers })
            if (cars.status = 200) {
                setcarsData(cars.data)
                setisLoading(false)
            } else {
                navigate("/")
                setisLoading(false)
            }
        } catch (error) {
            setisLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
        getAllCars()
    }, [])

    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const thisPageIndex = carsData && carsData.slice(firstItemIndex, lastItemIndex)

    const pages = []

    for (let i = 0; i < carsData.length / 10; i++) {
        pages.push(i + 1)
    }


    return (
        <div className="w-full bg-[#F4F4F4] h-screen pt-[40px]">
            {KatigoriyaIsOpen ? <CreateCatigoryModal setKatigoriyaIsOpen={setKatigoriyaIsOpen} /> : null}
            {addCarIsOpen ? <AddCar setaddCarIsOpen={setaddCarIsOpen} /> : null}
            <div className="max-w-[1280px] mx-auto px-3">
                <div className="bg-[#fff] rounded-lg pt-4 px-3 pb-3">
                    <div className='flex max-sm:flex-col max-sm:gap-4 justify-between items-center mb-8'>
                        <div className='flex items-center gap-4'>
                            <img src={tag} alt="tag image" />
                            <h2 className='text-[20px] font-semibold'>Mashinalar</h2>
                        </div>
                        <div className='flex max-sm:flex-col items-center gap-8'>
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
                    <div className='max-w-[996px] mx-auto max-sm:overflow-scroll '>
                        <ul className='max-w-[860px] flex  lg:justify-start max-sm:w-[626px] md:justify-between sm:justify-between max-sm:justify-between  text-[#6F767E] text-[13px] font-semibold mb-5'>
                            <li className='xl:pr-48'>
                                <span>Name</span>
                            </li>
                            <li className='xl:pr-32'>
                                <span>Gearbook</span>
                            </li>
                            <li className='xl:pr-10'>
                                <span>Tanirovkasi</span>
                            </li>
                            <li className=' xl:pr-10'>
                                <span>Motor</span>
                            </li>
                            <li className=' xl:pr-28'>
                                <span>Year</span>
                            </li>
                            <li className=' xl:pr-16'>
                                <span>Color</span>
                            </li>
                            <li className=' xl:'>
                                <span>Distance</span>
                            </li>
                        </ul>
                        <ul className='flex flex-col items-end text-[15px] max-sm:w-[796px] font-bold mb-7'>
                            {isLoading ?
                                <div>
                                    <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                                        <svg className="w-8 h-8 text-gray-200 animate-spin  fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                                : null}
                            {!isLoading && thisPageIndex.map(data => (
                                <li className='flex justify-between w-full  items-center border-b-slate-100 border-b-[2px] py-[19px]' key={data.id}>
                                    <span className='w-[150px]'>{data.title}</span>
                                    <span className='w-[130px]'>{data.gearbook}</span>
                                    <span className='w-[20px]'>{data.tanerovkasi}</span>
                                    <span className='w-[10px]'>{data.motor}</span>
                                    <span className='w-[70px]'>{data.year}</span>
                                    <span>{data.color}</span>
                                    <span>{data.distance}</span>
                                    <img src={arrov_right} alt="" className='w-[24px] cursor-pointer' onClick={() => navigate(`/modellari/models/${data.id}`)} />
                                </li>
                            ))}
                        </ul>

                        <nav aria-label="Page navigation example" className='w-full flex justify-center my-3'>
                            <ul className="flex items-center -space-x-px h-8 text-sm">
                                <li>
                                    <button
                                        onClick={() => setcurrentPage(currentPage > 0 && currentPage - 1)}
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
                                    </button>
                                </li>
                                {pages.map((page, index) => (
                                    <button onClick={() => setcurrentPage(page)} key={index}>
                                        <a
                                            href="#"
                                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 "
                                        >
                                            {page}
                                        </a>
                                    </button>
                                ))}
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 "
                                    >
                                        ...
                                    </a>
                                </li>
                                <button onClick={() => setcurrentPage(currentPage + 1)}>
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
                                </button>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
