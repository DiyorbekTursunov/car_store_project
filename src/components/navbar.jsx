import notification_true from '../assets/notification_true.svg'
import notification_false from '../assets/notification_false.svg'
import user_icon from '../assets/user-icon.svg'
import user_img from '../assets/user-img.png'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectLogin } from '../slices/login'
import axios from 'axios'
import { selectLoginAdmin } from '../slices/loginAdmin'

import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isAdmin, setisAmin] = useState(false)
    const [isLogin, setisLogin] = useState(false)
    const [notificationIsOn, setnotificationIsOn] = useState(false)
    const [PathAdmin, setPathAdmin] = useState(false)

    const AdminToken = localStorage.getItem("adminToken")
    const token = localStorage.getItem("token")
    const locaton = useLocation()



    const navigate = useNavigate()


    function navigate_to() {
        if (PathAdmin) {
            navigate('/modellari')
        } else {
            navigate('/admin')
        }
    }



    useEffect(() => {
        function checkPath() {
            if (locaton.pathname === '/admin') {
                setPathAdmin(true)
            } else {
                setPathAdmin(false)
            }
        }
        checkPath()

        function checkAdmin() {
            if (AdminToken) {
                setisAmin(true)
            } else {
                setisAmin(false)
            }
        }
        checkAdmin()
    },)

    return (
        <div className='max-w-[1280px] mx-auto py-6 px-3'>
            <div className={`flex items-center ${isAdmin ? "justify-between" : "justify-end"}`}>
                {isAdmin ? <button className='rounded-xl bg-[#2A85FF] flex items-center gap-2 px-5 py-3 max-sm:px-3 text-[#fff]' onClick={() => navigate_to()}>
                    {/* user icon */}
                    <img src={user_icon} alt="user icon" />
                    {PathAdmin ? "Asosiyga qaytish" : "Admin o‘tish"}
                </button> : null}

                <div className='flex gap-2'>
                    <div className='flex gap-2'>
                        <button className='rounded-xl bg-[#2A85FF] flex items-center gap-2 px-5 py-3 max-sm:px-3 text-[#fff]' onClick={() => navigate('login')}>
                            {/* user icon */}
                            Login
                        </button>
                        <button className='rounded-xl bg-[#2A85FF] flex items-center gap-2 px-5 py-3 max-sm:px-3 text-[#fff]' onClick={() => navigate('/register')}>
                            {/* user icon */}
                            Register
                        </button>
                    </div>
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
        </div >
    )
}

export default Navbar
