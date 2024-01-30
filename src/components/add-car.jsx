import tag_2 from '../assets/tag-2.svg'
import close_icon from '../assets/close.svg'
import { useEffect, useState } from 'react'
import photo_icon from '../assets/photo-icon.svg'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../hooks/firebase'
import axios from 'axios'

const AddCar = ({ setaddCarIsOpen }) => {
    const [catigorys, setcatigorys] = useState(null)

    const [MarkasiDropDown, setMarkasiDropDown] = useState(false)
    const [MarkasiDropDownValue, setMarkasiDropDownValue] = useState("Loading")

    const [TanirovkasiDropDown, setTanirovkasiDropDown] = useState(false)
    const [TanirovkasiDropDownValue, setTanirovkasiDropDownValue] = useState("Yo'q")


    const [MotorValue, setMotorValue] = useState("")
    const [distanseValue, setdistanseValue] = useState("")
    const [yiliValue, setYiliValue] = useState("")
    const [colorValue, setcolorValue] = useState("")
    const [narxi, setnarxi] = useState("")
    const [descrtiption, setdescrtiption] = useState("")
    const [gearbookValue, setgearbookValue] = useState("")
    const [nameValue, setnameValue] = useState("")

    const [isProgressOpen, setIsProgressOpen] = useState(false);

    const [progress, setProgress] = useState(0);
    

    const [uploadImageTashqiTomon, setUploadImageTashqiTomon] = useState(null);
    const [uploadImageIchkiTomon, setUploadImageIchkiTomon] = useState(null);
    const [imageUrlTashqiTomon, setImageUrlTashqiTomon] = useState('');
    const [imageUrlIchkiTomon, setImageUrlIchkiTomon] = useState('');

    const [error, setError] = useState({ message: '', show: false });


    const showError = (errorMessage) => {
        setError({ message: errorMessage, show: true });
        setIsProgressOpen(false);
        setTimeout(() => setError({ message: '', show: false }), 3000);
    };

    const carData = {
        tanerovkasi: TanirovkasiDropDownValue,
        category_id_markasi: MarkasiDropDownValue,
        discription: descrtiption,
        ichki_rasm: imageUrlIchkiTomon,
        tashqi_rasm: imageUrlTashqiTomon,
        narx: narxi,
        gearbook: gearbookValue,
        color: colorValue,
        year: yiliValue,
        motor: MotorValue,
        distance: distanseValue.includes("km") ? distanseValue : distanseValue + " km",
        title: nameValue
    };

    const token = localStorage.getItem("adminToken")

    async function createCar() {
        if (
            carData.category_id_markasi.length > 3 &&
            carData.tanerovkasi.length > 1 &&
            carData.color.length > 1 &&
            carData.discription.length > 3 &&
            carData.gearbook.length > 3 &&
            carData.narx.length > 3 &&
            carData.motor.length > 1 &&
            carData.year.length > 3 &&
            carData.distance.length > 3
        ) {
            try {
                const log = await axios.post("http://localhost:4001/create_car", carData, { "headers": { token } })
                console.log(log);
                setaddCarIsOpen(false)
                if (log) {

                }
            } catch (error) {
                console.log(error);
            }
        } else {
            showError("Ma'lumot to'liq kiritilmagan")
        }
    }

    async function getCatigory() {
        try {
            const catigory = await axios.get("http://localhost:4001/get_categories", { headers: { token } })
            const newCatigory = []
            catigory.data.map(element => {
                newCatigory.push({ category_title: element.category_title, id: element.id })
            });
            setcatigorys(newCatigory)
            setMarkasiDropDownValue(newCatigory[0].category_title)
        } catch (error) {
            showError(error.data)
        }
    }

        if (imageUrlIchkiTomon && imageUrlTashqiTomon) {
            createCar()
        }

    const handleUploadImage = async (e) => {
        e.preventDefault();

        if (
            carData.category_id_markasi.length > 3 &&
            carData.tanerovkasi.length > 1 &&
            carData.color.length > 1 &&
            carData.discription.length > 3 &&
            carData.gearbook.length > 3 &&
            carData.narx.length > 3 &&
            carData.motor.length > 1 &&
            carData.year.length > 3 &&
            carData.distance.length > 3
        ) {
            // uploadImageTashqiTomon
            if (!uploadImageTashqiTomon) {
                showError('Tashqi tomon rasm yuklash kerak');
                return;
            } else {
                const TashqiTomonstorageRef = ref(storage, `/files/${uploadImageTashqiTomon.name}`);
                const TashqiTomonuploadTask = uploadBytesResumable(TashqiTomonstorageRef, uploadImageTashqiTomon);

                try {
                    TashqiTomonuploadTask.on(
                        'state_changed',
                        (snapshot) => {
                            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                            setProgress(prog);
                            setIsProgressOpen(true);
                        },
                        (error) => {
                            console.log(error);
                            showError('Rasmni yuklashda xatolik yuz berdi');
                        },
                        () => {
                            getDownloadURL(TashqiTomonuploadTask.snapshot.ref)
                                .then((url) => {
                                    setImageUrlTashqiTomon(url);
                                })
                                .then(() => setIsProgressOpen(false))
                                .catch((error) => {
                                    console.log(error);
                                    showError('Rasm manzilini olishda xatolik yuz berdi');
                                });
                        }
                    );
                } catch (error) {
                    showError(error.data)
                }
            }
            // uploadImageTashqiTomon end

            // uploadImageIchkiTomon
            if (!uploadImageIchkiTomon) {
                showError('Ichki tomon rasm yuklash kerak');
                return;
            } else {
                const IchkiTomonstorageRef = ref(storage, `/files/${uploadImageIchkiTomon.name}`);
                const IchkiTomonuploadTask = uploadBytesResumable(IchkiTomonstorageRef, uploadImageIchkiTomon);

                try {
                    IchkiTomonuploadTask.on(
                        'state_changed',
                        (snapshot) => {
                            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                            setProgress(prog);
                            setIsProgressOpen(true);
                        },
                        (error) => {
                            console.log(error);
                            showError('Rasmni yuklashda xatolik yuz berdi');
                        },
                        () => {
                            getDownloadURL(IchkiTomonuploadTask.snapshot.ref)
                                .then((url) => {
                                    setImageUrlIchkiTomon(url);
                                })
                                .then(() => setIsProgressOpen(false))
                                .catch((error) => {
                                    console.log(error);
                                    showError('Rasm manzilini olishda xatolik yuz berdi');
                                });
                        }
                    );
                } catch (error) {
                    showError(error.data)
                }
            }

            // uploadImageIchkiTomon end
        } else {
            showError("Ma'lumot to'liq kiritilmagan")
        }
    };

    useEffect(() => {
        getCatigory()
    }, [])



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
            <div className='absolute w-full h-full bg-[#F4F4F4] opacity-70 top-0  z-40' ></div>
            <div className='absolute w-full  flex justify-center items-center top-0 z-50'>
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
                                            aria-labelledby="dropdownDefaultButton">
                                            {catigorys ? catigorys.map(catigory => (
                                                <li key={catigory.id}>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-[#a1a1a1]  dark:hover:text-white"
                                                        onClick={() => MarkDropDown(catigory.category_title)}
                                                    >
                                                        {catigory.category_title}
                                                    </a>
                                                </li>
                                            )) :
                                                <p className='text-center'>Loading</p>
                                            }

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
                                    <input type="number" name="" id="Motor" placeholder='Kiriting' required className=' w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' onChange={(e) => setMotorValue(e.target.value)} />
                                </label>
                                <label htmlFor="Yili" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Yili
                                    <input type="month" name="" id="Yili" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' onChange={(e) => setYiliValue(e.target.value)} />
                                </label>
                            </div>

                            <div className='flex sm:flex-row max-sm:flex-col  gap-6 justify-between mb-4'>
                                <label htmlFor="Color" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Color
                                    <input type="text" name="" id="Color" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' onChange={(e) => setcolorValue(e.target.value)} />
                                </label>
                                <label htmlFor="Distance" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Distance
                                    <input type="text" name="" id="Distance" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' onChange={(e) => setdistanseValue(e.target.value)} />
                                </label>
                            </div>

                            <div className='flex  sm:flex-row max-sm:flex-col gap-6 justify-between mb-4'>
                                <label htmlFor="Rasm 360 ichki tomon" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Rasm 360 ichki tomon
                                    <input type="file" name="" id="Rasm 360 ichki tomon" placeholder='Kiriting' accept='image/*' required onChange={(e) => setUploadImageIchkiTomon(e.target.files[0])} />
                                    <div className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md cursor-pointer flex gap-3' >
                                        <img src={uploadImageIchkiTomon ? URL.createObjectURL(uploadImageIchkiTomon) : photo_icon} alt="photo icon" />
                                        <span className='text-[#9A9FA5]'>{!uploadImageIchkiTomon ? "Yuklash" : null}</span>
                                    </div>
                                </label>
                                <label htmlFor="Rasm 360 tashqi tomon" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Rasm 360 tashqi tomon
                                    <input type="file" name="" id="Rasm 360 tashqi tomon" placeholder='Kiriting' accept='image/*' required onChange={(e) => setUploadImageTashqiTomon(e.target.files[0])} />
                                    <div className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md cursor-pointer flex gap-3' >
                                        <img src={uploadImageTashqiTomon ? URL.createObjectURL(uploadImageTashqiTomon) : photo_icon} alt="photo icon" />
                                        <span className='text-[#9A9FA5]'>{!uploadImageTashqiTomon ? "Yuklash" : null}</span>
                                    </div>
                                </label>
                            </div>
                            <div className='flex  sm:flex-row max-sm:flex-col gap-6 justify-between mb-4'>
                                <label htmlFor="gearbook" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Gearbook
                                    <input type="gearbook" name="" id="Narxi" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' onChange={(e) => setgearbookValue(e.target.value)} />
                                </label>
                                <label htmlFor="Nomi" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Nomi
                                    <input type="Nomi" name="" id="Narxi" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' onChange={(e) => setnameValue(e.target.value)} />
                                </label>
                            </div>
                            <div className='flex  sm:flex-row max-sm:flex-col gap-6 justify-between mb-4'>
                                <label htmlFor="model" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Deseription
                                    <textarea name="" id="model" placeholder='Kiriting' required className='w-full h-[200px] py-3 pl-3 bg-[#F4F4F4] rounded-md' onChange={(e) => setdescrtiption(e.target.value)} />
                                </label>
                                <label htmlFor="Narxi" className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Narxi
                                    <input type="text" name="" id="Narxi" placeholder='Kiriting' required className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md' onChange={(e) => setnarxi(e.target.value)} />
                                </label>
                            </div>
                        </div>
                        {error.show && <p className='text-red-500'>{error.message}</p>}
                        {isProgressOpen && <h3>Yuklanmoqda: {progress}%</h3>}
                        <hr className='w-full h-[1px] bg-slate-100 mb-6' />
                        <button className={`px-5 py-3 bg-[#2A85FF] rounded-xl text-[#fff] text-[15px] font-bold ${isProgressOpen ? "cursor-not-allowed" : "cursor-pointer"}`} onClick={(e) => handleUploadImage(e)}>Saqlash</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCar
