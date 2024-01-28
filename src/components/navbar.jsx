import notification_true from '../assets/notification_true.svg'
import notification_false from '../assets/notification_false.svg'
import user_icon from '../assets/user-icon.svg'
import user_img from '../assets/user-img.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'


const Navbar = () => {
    const [isAmin, setisAmin] = useState(false)
    const [notificationIsOn, setnotificationIsOn] = useState(true)


    const naviate = useNavigate()
    function navigate_to(isAdmin) {
        if (isAdmin) {
            naviate('/modellari')
        } else {
            naviate('/admin')
        }
    }
    return (
        <div className='max-w-[1280px] mx-auto py-6 px-3'>
            <div className={`flex items-center ${isAmin ? "justify-between" : "justify-end"}`}>
                <button className='rounded-xl bg-[#2A85FF] flex items-center gap-2 px-5 py-3 max-sm:px-3 text-[#fff]' onClick={() => navigate_to(isAmin)}>
                    {/* user icon */}
                    <img src={user_icon} alt="user icon" />
                    {isAmin ? "Asosiyga qaytish" : "Admin o‘tish"}
                </button>
                {/* user profile */}
                {isAmin ? <div className='flex items-center gap-6'>
                    <button className='w-[48px] h-[48px] flex items-center justify-center'>
                        {notificationIsOn ?
                            <img src={notification_true} alt="notification icon" className='w-full ' />
                            :
                            <img src={notification_false} alt="notification icon" className='w-[24px] ' />
                        }
                    </button>
                    <img src={user_img} alt="user image" />
                </div> : null}
            </div>
        </div>
    )
}

export default Navbar
