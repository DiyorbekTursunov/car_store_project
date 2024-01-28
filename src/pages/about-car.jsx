import { useLocation, useParams } from "react-router"

import malibu_car from '../assets/malibu-car.png'
import malibu_car_front from '../assets/malibu-car-front.png'
import malibu_car_inner from '../assets/malibu-car-inner.png'
import view from '../assets/360-view.svg'
import { useState } from "react"


const AboutCar = () => {
    const [selectedOption, setSelectedOption] = useState('Tashqi');

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const params = useParams()
    const location = useLocation()


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
            <h1 className="text-5xl font-semibold mb-16">Mashina haqida</h1>

            <div className="flex justify-between items-start gap-8">
                <div className="w-[396px] bg-[#F6F6F6] rounded-lg px-6 py-4">
                    <h2 className="uppercase text-xl font-medium mb-2">{location.pathname.split('/')[2]} {params.slug}</h2>
                    <p className="mb-4">329 900 000 so‘m dan</p>
                    <img src={malibu_car} alt="car img" className="mb-4" />
                    <ul className="flex flex-col gap-2">
                        {carType.map(e => (
                            <li key={e.id}>
                                <span className="text-base font-semibold">{e.key}</span>{" "}
                                <span className="text-base text-[rgba(0, 0, 0, 0.60)]">{e.value}</span>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="flex flex-col justify-between ">
                    <h2 className="uppercase text-2xl font-medium mb-2">{location.pathname.split('/')[2]} {params.slug}</h2>
                    <div className="flex  flex-col items-center">
                        {selectedOption === 'Tashqi' ? <img src={malibu_car_front} alt="car image" /> : <img src={malibu_car_inner} alt="car image" />}
                        <img src={view} alt="360 view" className="w-[32px] h-[32px] cursor-pointer" />
                        <p className="text-[12px]">Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
                        <div className="flex gap-12">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCar