import tag_2 from '../assets/tag-2.svg'
import close_icon from '../assets/close.svg'
import photo_icon from '../assets/photo-icon.svg'



const CreateCatigoryModal = ({ setKatigoriyaIsOpen }) => {
    return (
        <div>
            <div className='absolute w-full h-screen bg-[#F4F4F4] opacity-70 top-0 z-40' ></div>
            <div className='absolute w-full h-screen flex justify-center items-center top-0 z-50'>
                <div className='w-[1164px] bg-[#FCFCFC] rounded-2xl py-8 px-6 shadow-2xl'>
                    <div className='flex justify-between items-center mb-6'>
                        <div className='flex items-center gap-4'>
                            <img src={tag_2} alt="tag image" />
                            <h2 className='text-[20px] font-semibold'>Katigoriya yaratish</h2>
                        </div>
                        <button className='p-2 bg-[#F4F4F4] rounded-[50%]' onClick={() => setKatigoriyaIsOpen(false)}>
                            <img src={close_icon} alt="close icon" />
                        </button>
                    </div>
                    <form className='flex flex-col items-end'>
                        <div className='flex w-full justify-between mb-4'>
                            <label htmlFor="model" className='flex flex-col gap-2'>
                                Markasi
                                <input type="text" name="" id="model" placeholder='Kiriting' className='w-[536px] py-3 pl-3 bg-[#F4F4F4] rounded-md' />
                            </label>
                            <label htmlFor="Rasm 360 ichki tomon" className='flex flex-col gap-2'>
                            Rasm 360 ichki makon
                                    <input type="file" name="" id="Rasm 360 ichki tomon" placeholder='Kiriting' accept='image/*' required />
                                    <div className='w-[536px] py-3 pl-3 bg-[#F4F4F4] rounded-md cursor-pointer flex gap-3' >
                                        <img src={photo_icon} alt="photo icon" />
                                        <span className='text-[#9A9FA5]'>Yuklash</span>
                                    </div>
                                </label>
                        </div>
                        <hr className='w-full h-[1px] bg-slate-100 mb-6'/>
                        <button className='px-5 py-3 bg-[#2A85FF] rounded-xl text-[#fff] text-[15px] font-bold'>Saqlash</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCatigoryModal