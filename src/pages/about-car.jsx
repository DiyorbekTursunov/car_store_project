import { useLocation, useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import malibu_car from '../assets/malibu-car.png'
import malibu_car_front from '../assets/malibu-car-front.png'
import malibu_car_inner from '../assets/malibu-car-inner.png'
import view from '../assets/360-view.svg'
import { useEffect, useState } from "react"
import axios from "axios"


const AboutCar = () => {
    const [selectedOption, setSelectedOption] = useState('Ichki_taraf');

    const [isLoading, setisLoading] = useState(false)

    const [aboutCarValue, setaboutCarValue] = useState({})
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const params = useParams()
    const location = useLocation()

    const token = localStorage.getItem("token")
    // const [models, setmodels] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        if (token) {
            getCatigory()
            console.log("true");

        } else {
            navigate('/register')
        }
    }, [])


    async function getCatigory() {

        const headers = {
            token
        };
        try {
            setisLoading(true)
            const data = await axios.get(`http://localhost:4001/get_car_info/${params.slug}`, { headers })
            if (data.status == 200) {
                setaboutCarValue(data.data[0])
                setisLoading(false)
            }
        } catch (error) {
            setisLoading(false)
            navigate('/register')
            console.log(error);
        }
    }
    console.log(aboutCarValue);

    const carType = [
        {
            id: 1,
            key: "Marka:",
            value: "CHEVROLET",
        },
        {
            id: 2,
            key: "Tanirovkasi:",
            value: "Yo‘q",
        },
        {
            id: 3,
            key: "Motor:",
            value: "1.6",
        },
        {
            id: 4,
            key: "Year:",
            value: "2016",
        },
        {
            id: 5,
            key: "Color:",
            value: "Oq",
        },
        {
            id: 6,
            key: "Distance:",
            value: "3000 km",
        },
        {
            id: 7,
            key: "Gearbook:",
            value: "Avtomat karobka",
        },
        {
            id: 8,
            key: "Deseription:",
            value: "Mishina ideal holatda krasska top toza 100tali. Ayol kishiniki judayam akuratno haydalgan. ",
        },
        {
            id: 9,
            key: "Umumiy xarajat:",
            value: "329 900 000 so'm dan",
        },
    ]
    return (
        <div className='max-w-[1280px] mx-auto py-6 px-3'>
            <h1 className="md:text-5xl sm:text-3xl max-sm:text-xl font-semibold mb-5">Mashina haqida</h1>
            <div className="flex gap-6">
                <button className='mb-14 flex gap-4' onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M11.2072 17.7929C11.5977 18.1834 11.5977 18.8166 11.2072 19.2071C10.8167 19.5976 10.1835 19.5976 9.79299 19.2071L4.00009 13.4142C3.21905 12.6332 3.21904 11.3668 4.00009 10.5858L9.79299 4.79289C10.1835 4.40237 10.8167 4.40237 11.2072 4.79289C11.5977 5.18342 11.5977 5.81658 11.2072 6.20711L6.41431 11H20.5001C21.0524 11 21.5001 11.4477 21.5001 12C21.5001 12.5523 21.0524 13 20.5001 13H6.41431L11.2072 17.7929Z" fill="#6F767E" />
                </svg>
                    <p>ortga qaytish</p>
                </button>
                <button className=' flex gap-4' onClick={() => navigate('/')}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M11.2072 17.7929C11.5977 18.1834 11.5977 18.8166 11.2072 19.2071C10.8167 19.5976 10.1835 19.5976 9.79299 19.2071L4.00009 13.4142C3.21905 12.6332 3.21904 11.3668 4.00009 10.5858L9.79299 4.79289C10.1835 4.40237 10.8167 4.40237 11.2072 4.79289C11.5977 5.18342 11.5977 5.81658 11.2072 6.20711L6.41431 11H20.5001C21.0524 11 21.5001 11.4477 21.5001 12C21.5001 12.5523 21.0524 13 20.5001 13H6.41431L11.2072 17.7929Z" fill="#6F767E" />
                </svg>
                    <p>Home ga qaytish</p>
                </button>
            </div>
            {!isLoading ? <div className="flex md:flex-row sm:flex-col max-sm:flex-col  justify-between items-start gap-8">
                <div className="md:w-[396px] sm:w-full bg-[#F6F6F6] rounded-lg px-6 py-4">
                    <h2 className="uppercase text-xl font-medium mb-2">{aboutCarValue.title}</h2>
                    <p className="mb-4">{aboutCarValue.price}</p>
                    <img src={aboutCarValue.tashqi_rasm} alt="car img" className="mb-4" />
                    <ul className="flex flex-col gap-2">
                        <li>
                            <span className="text-base text-[rgba(0, 0, 0, 0.60)]">Tanirovkasi:</span>{" "}
                            <span className="text-base font-semibold">{aboutCarValue.tanerovkasi}</span>
                        </li>
                        <li>
                            <span className="text-base text-[rgba(0, 0, 0, 0.60)]">Motor:</span>{" "}
                            <span className="text-base font-semibold">{aboutCarValue.motor}</span>
                        </li>
                        <li>
                            <span className="text-base text-[rgba(0, 0, 0, 0.60)]">Year:</span>{" "}
                            <span className="text-base font-semibold">{aboutCarValue.year}</span>
                        </li>
                        <li>
                            <span className="text-base text-[rgba(0, 0, 0, 0.60)]">Color:</span>{" "}
                            <span className="text-base font-semibold">{aboutCarValue.color}</span>
                        </li>
                        <li>
                            <span className="text-base text-[rgba(0, 0, 0, 0.60)]">Distance:</span>{" "}
                            <span className="text-base font-semibold">{aboutCarValue.distance}</span>
                        </li>
                        <li>
                            <span className="text-base text-[rgba(0, 0, 0, 0.60)]">Gearbook:</span>{" "}
                            <span className="text-base font-semibold">{aboutCarValue.gearbook}</span>
                        </li>
                        <li>
                            <span className="text-base text-[rgba(0, 0, 0, 0.60)]">Deseription:</span>{" "}
                            <span className="text-base font-semibold">{aboutCarValue.discription}</span>
                        </li>
                        <li>
                            <span className="text-base text-[rgba(0, 0, 0, 0.60)]">Umumiy xarajat:</span>{" "}
                            <span className="text-base font-semibold">{aboutCarValue.narx}</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-between ">
                    <h2 className="uppercase text-2xl font-medium mb-2">    {aboutCarValue.title}</h2>
                    <div className="flex  flex-col items-center">
                        {selectedOption === 'Tashqi' ? <img src={aboutCarValue.tashqi_rasm} className="w-[824px]" alt="car image" /> : <img src={aboutCarValue.ichki_rasm} className="w-[824px]" alt="car image" />}
                        <img src={view} alt="360 view" className="w-[32px] h-[32px] cursor-pointer" />
                        <p className="text-[12px]">Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
                        <div className="flex gap-12">
                            <label htmlFor="Ichki_taraf" className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="Ichki_taraf"
                                    className="w-6 accent-[#000] cursor-pointer"
                                    checked={selectedOption === 'Ichki_taraf'}
                                    onChange={handleRadioChange}
                                    value="Ichki_taraf"
                                    name="select"
                                />
                                Ichki taraf
                            </label>
                            <label htmlFor="Tashqi" className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="Tashqi"
                                    className="w-6 accent-[#000] cursor-pointer"
                                    checked={selectedOption === 'Tashqi'}
                                    onChange={handleRadioChange}
                                    value="Tashqi"
                                    name="select"
                                />
                                Tashqi
                            </label>
                        </div>
                    </div>
                </div>
            </div> : null}
            {isLoading ?
                <div>
                    <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                        <svg className="w-8 h-8 text-gray-200 animate-spin  fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                : null}
        </div>
    )
}

export default AboutCar