import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../hooks/firebase';
import axios from 'axios';
import tag_2 from '../assets/tag-2.svg';
import close_icon from '../assets/close.svg';
import photo_icon from '../assets/photo-icon.svg'

// Import your SVG and image assets here

const CreateCatigoryModal = ({ setKatigoriyaIsOpen }) => {
    const [progress, setProgress] = useState(0);
    const token = localStorage.getItem("adminToken")

    const [isProgressOpen, setIsProgressOpen] = useState(false);
    const [inputTitle, setInputTitle] = useState('');
    const [uploadImage, setUploadImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState({ message: '', show: false });

    const [isUplodedImage, setisUplodedImage] = useState(false)

    const showError = (errorMessage) => {
        setError({ message: errorMessage, show: true });
        setIsProgressOpen(false);
        setTimeout(() => setError({ message: '', show: false }), 3000);
    };

    const createCategory = async () => {

        if (inputTitle.length > 3) {
            try {
                const carData = { category_img: imageUrl, category_title: inputTitle };
                const log = await axios.post('http://localhost:4001/create_category', carData, { headers: { token } });
                if (log.status = 200) {
                    // setUploadImage(false); 
                    setKatigoriyaIsOpen(false)
                } else {
                    showError("Ma'lumot to'liq kiritilmagan");
                }
            } catch (error) {
                console.log(error);
                showError(error.data);
            }
        }
    };
    useEffect(() => {
        if (imageUrl) {
            createCategory()
        }
    }, [imageUrl])

    const handleUploadImage = async (e) => {
        e.preventDefault();


        if (inputTitle.length > 3) {
            if (!uploadImage) {
                showError('Rasm yuklash kerak');
                return;
            }

            const storageRef = ref(storage, `/files/${uploadImage.name}`);
            const uploadTask = uploadBytesResumable(storageRef, uploadImage);

            return new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        setProgress(prog);
                        setIsProgressOpen(true);
                    },
                    (error) => {
                        console.log(error);
                        setIsProgressOpen(false);
                        reject(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref)
                            .then((url) => setImageUrl(url))
                            .then(() => {
                                setIsProgressOpen(false);
                                resolve();
                            })
                            .catch((error) => {
                                console.log(error);
                                setIsProgressOpen(false);
                                reject(error);
                            });
                    }
                );
            });
        } else {
            showError("Ma'lumot to'liq kiritilmagan");
        }
    };



    return (
        <>
            <div className='absolute w-full h-screen bg-[#F4F4F4] opacity-70 top-0 z-40'></div>
            <div className='absolute w-full h-screen flex justify-center items-center top-0 z-50'>
                <div className='w-[1164px] bg-[#FCFCFC] max-sm:h-screen rounded-2xl py-8 px-6 shadow-2xl'>
                    <div className='flex justify-between items-center mb-6'>
                        <div className='flex items-center gap-4'>
                            <img src={tag_2} alt='tag image' />
                            <h2 className='text-[20px] font-semibold'>Katigoriya yaratish</h2>
                        </div>
                        <button className='p-2 bg-[#F4F4F4] rounded-[50%]' onClick={() => setKatigoriyaIsOpen(false)}>
                            <img src={close_icon} alt='close icon' />
                        </button>
                    </div>
                    <form className='flex flex-col items-end'>
                        <div className='w-full'>
                            <div className='flex sm:flex-row max-sm:flex-col gap-6 justify-between mb-4'>
                                <label htmlFor='model' className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Markasi
                                    <input
                                        type='text'
                                        id='model'
                                        placeholder='Kiriting'
                                        required
                                        className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md'
                                        onChange={(e) => setInputTitle(e.target.value)}
                                    />
                                </label>
                                <label htmlFor='Rasm 360 ichki tomon' className='flex sm:w-1/2 max-sm:w-full flex-col gap-2'>
                                    Rasm 360 ichki makon
                                    <input
                                        type='file'
                                        id='Rasm 360 ichki tomon'
                                        placeholder='Kiriting'
                                        accept='image/*'
                                        required
                                        onChange={(e) => setUploadImage(e.target.files[0])}
                                    />
                                    <div className='w-full py-3 pl-3 bg-[#F4F4F4] rounded-md cursor-pointer flex gap-3'>
                                        <img src={uploadImage ? URL.createObjectURL(uploadImage) : photo_icon} alt='photo icon' />
                                        <span className='text-[#9A9FA5]'>{!uploadImage ? 'Yuklash' : null}</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {error.show && <p className='text-red-500'>{error.message}</p>}
                        {isProgressOpen && <h3>Yuklanmoqda: {progress}%</h3>}
                        <hr className='w-full h-[1px] bg-slate-100 mb-6' />
                        <button
                            className={`px-5 py-3 bg-[#2A85FF] rounded-xl text-[#fff] text-[15px] font-bold ${isProgressOpen ? "cursor-not-allowed" : "cursor-pointer"}`}
                            onClick={(e) => handleUploadImage(e)}
                        >
                            Saqlash
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateCatigoryModal;
