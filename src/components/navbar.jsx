import notification_true from '../assets/notification_true.svg'
import notification_false from '../assets/notification_false.svg'
import user_icon from '../assets/user-icon.svg'
import user_img from '../assets/user-img.png'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectLogin } from '../slices/login'
import { checkIsLogin } from '../hooks/checkIsLogin'

const Navbar = () => {
    const [isAdmin, setisAmin] = useState(false)
    const [notificationIsOn, setnotificationIsOn] = useState(true)
    const isLogin = checkIsLogin()
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
            <div className={`flex items-center ${isAdmin ? "justify-between" : "justify-end"}`}>
                {isLogin ?
                    <button className='rounded-xl bg-[#2A85FF] flex items-center gap-2 px-5 py-3 max-sm:px-3 text-[#fff]' onClick={() => navigate_to(isAmin)}>
                        {/* user icon */}
                        <img src={user_icon} alt="user icon" />
                        {isAdmin ? "Asosiyga qaytish" : "Admin o‘tish"}
                    </button> :
                    <div className='flex gap-2'> 
                        <button className='rounded-xl bg-[#2A85FF] flex items-center gap-2 px-5 py-3 max-sm:px-3 text-[#fff]' onClick={() => naviate('login')}>
                            {/* user icon */}
                            Login
                        </button>
                        <button className='rounded-xl bg-[#2A85FF] flex items-center gap-2 px-5 py-3 max-sm:px-3 text-[#fff]' onClick={() => naviate('/register')}>
                            {/* user icon */}
                            Register
                        </button>
                    </div>
                }
                {/* user profile */}
                {isAdmin ? <div className='flex items-center gap-6'>
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
