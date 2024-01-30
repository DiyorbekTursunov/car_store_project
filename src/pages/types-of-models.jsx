import { useLocation, useNavigate, useParams } from 'react-router'

import { useEffect, useState } from 'react'
import axios from 'axios'

const Types_of_models = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    const [isLoading, setisLoading] = useState(false)

    const token = localStorage.getItem("token")
    const [types_of_models, settypes_of_models] = useState([])

    // const types_of_models = [
    //     {
    //         img: tahoe_car,
    //         name: "tahoe",
    //         price: "329 900 000",
    //         id: 1,
    //     },
    //     {
    //         img: damas_car,
    //         name: "damas",
    //         price: "329 900 000",
    //         id: 2,
    //     },
    //     {
    //         img: equinox_car,
    //         name: "equinox",
    //         price: "329 900 000",
    //         id: 3,
    //     },
    //     {
    //         img: nexia_car,
    //         name: "nexia",
    //         price: "329 900 000",
    //         id: 4,
    //     },
    // ]
    useEffect(() => {
        if (token) {
            getCatigory()

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
            const data = await axios.get(`http://localhost:4001/get_cars/model/${params.slug}`, { headers })
            if (data.status == 200) {
                settypes_of_models(data.data)
                setisLoading(false)
                console.log(data);
            } else {
                // navigate('/register')  
                setisLoading(false)
            }
        } catch (error) {
            navigate('/register')
            console.log(error);
            setisLoading(false)
        }
    }
    function navigate_to(path) {
        navigate(`${location.pathname}/${path}`)
    }


    return (
        <div className='max-w-[1280px] mx-auto py-6 px-3 mt-6'>
            <button className='mt-4 flex gap-4' onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M11.2072 17.7929C11.5977 18.1834 11.5977 18.8166 11.2072 19.2071C10.8167 19.5976 10.1835 19.5976 9.79299 19.2071L4.00009 13.4142C3.21905 12.6332 3.21904 11.3668 4.00009 10.5858L9.79299 4.79289C10.1835 4.40237 10.8167 4.40237 11.2072 4.79289C11.5977 5.18342 11.5977 5.81658 11.2072 6.20711L6.41431 11H20.5001C21.0524 11 21.5001 11.4477 21.5001 12C21.5001 12.5523 21.0524 13 20.5001 13H6.41431L11.2072 17.7929Z" fill="#6F767E" />
            </svg>
                <p>ortga qaytish</p>
            </button>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center gap-5 justify-between mt-12'>
                {!isLoading && types_of_models.map(model => (
                    <div className='cursor-pointer max-sm:text-center flex flex-col justify-between' key={model.id} onClick={() => navigate_to(model.id)} >
                        <img src={model.tashqi_rasm} alt="car image" />
                        <div>
                            <h1 className=' md:text-2xl sm:text-xl font-medium mb-1'>{""} {model.title}</h1>
                            <h1 className='sl:text-2xl sm:text-1xl font-medium '>Narxi: {model.narx}</h1>
                        </div>
                    </div>
                ))}
                {isLoading ?
                    <div>
                        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                            <svg className="w-8 h-8 text-gray-200 animate-spin  fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default Types_of_models