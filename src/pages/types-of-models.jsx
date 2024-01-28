import { useLocation, useNavigate, useParams } from 'react-router'

import damas_car from '../assets/damas-car.png'
import nexia_car from '../assets/nexia-car.png'
import equinox_car from '../assets/equinox-car.png'
import tahoe_car from '../assets/tahoe-car.png'

const Types_of_models = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()

    const types_of_models = [
        {
            img: tahoe_car,
            name: "tahoe",
            price: "329 900 000",
            id: 1,
        },
        {
            img: damas_car,
            name: "damas",
            price: "329 900 000",
            id: 2,
        },
        {
            img: equinox_car,
            name: "equinox",
            price: "329 900 000",
            id: 3,
        },
        {
            img: nexia_car,
            name: "nexia",
            price: "329 900 000",
            id: 4,
        },
    ]

    function navigate_to(path) {
        navigate(`${location.pathname}/${path}`)
    }


    return (
        <div className='max-w-[1280px] mx-auto py-6 px-3 mt-6'>
            <div className='grid grid-cols-4 gap-5 justify-between mt-12'>
                {types_of_models.map(model => (
                    <div className='cursor-pointer' key={model.id} onClick={() => navigate_to(model.name)} >
                        <img src={model.img} alt="car image" />
                        <h1 className='text-2xl font-medium mb-1'>{params.slug.toUpperCase()} {model.name.toUpperCase()}</h1>
                        <h1 className='text-2xl font-medium'>Narxi: {model.price}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Types_of_models