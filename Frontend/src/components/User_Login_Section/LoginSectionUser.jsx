import React, {useState,useEffect}from 'react'
import group8img from "../../assets/group8.png"
import LoginPhoto from "../../assets/photoLoginSession.png"
import logo from "../../assets/MED+Logo.png"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../Redux/userSlice"


function LoginSectionUser() {
    const [LoginDetail,SetLoginDetail] = useState({email:"",password:""});
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(localStorage.getItem('login')){
            const loginData = JSON.parse(localStorage.getItem("login"))
        
            if(loginData.login && loginData.token){  //if the login is true and a token is created
                navigate('/UserDashboard')         
               }
        }
    
   }, [])
    



const HandleSubmit = (event)=>{
    event.preventDefault()
    console.log("LoginDetails are "+LoginDetail)

    axios.post("http://localhost:6002/login",LoginDetail).then((res)=>{
        console.log(res);
        console.log(res.data);
        console.log(res.data.token);

        //saving the JWT token in local Storage
        localStorage.setItem('login',JSON.stringify({
                            login:true,
                            token:res.data.token
                                                    })  
                            )

        //after saving the JWT token in local Storage,Storing the login details in Store
        if(localStorage.getItem('login')){
            const loginData = JSON.parse(localStorage.getItem("login"))
        
            if(loginData.login && loginData.token){  //if the login is true and a token is created
                dispatch(
                    loginUser({
                        name:res.data.name,
                        email:res.data.email,
                        login: true,
                        token: res.data.token
                    })
                )
            }
        }
        return res 

    }).then((res)=>{
        console.log("second Then Function ");
        navigate('/UserDashboard') 
    })
    .catch(err=>console.log(err))

}




    return (
        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">

            <div className=' h-[445px] bg-lightgreen2 rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex md:w-[800px] 
                            lg:flex'>
                <div className=' h-[430px]   bg-white
                            md:flex md:w-[800px] 
                            lg:flex
                    '>
                    {/* Login Sectin Left side */}
                    <div className='w-full h-full hidden
                                md:w-1/2 display-block md:px-7 md:py-9 md:flex  md:flex-col  md:items-center 
                                lg:w-1/2 lg:px-7 lg:py-9 lg:flex  lg:flex-col  lg:items-center' >
                        <img src={group8img} alt="" />
                        <img className='w-[250px]' src={LoginPhoto} alt="" />
                    </div>

                    {/* Login Sectin right side */}
                    <div className='mx-3 w-full h-full  flex items-center
                                    md:w-1/2 
                                    lg:w-1/2 '>
                        <form className=' md:w-full h-3/4   md:border-l-[1px] flex flex-col  items-center 
                                        md:px-7' action="" onSubmit={HandleSubmit}>
                          
                                <img src={logo} className=' w-[70px] h-[30px] ' alt="" />
                                <h1 className='text-[17px] mt-[18px]'>Welcome user! please Login to your Account</h1>

                                <input className=' mt-6 md:my-0 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Email' type="email"  onChange={(e) => { SetLoginDetail({...LoginDetail, email: e.target.value }); }} />
                                <input className=' my-6 md:mt-5 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="password"  onChange={(e) => { SetLoginDetail({...LoginDetail, password: e.target.value }); }} />

                                <span className='md:mt-[-10px] text-sm' href="http://">Or Login with OTP</span>


                                <div className='w-full h-[40px] flex flex-row items-center justify-between
                                            md:flex  md:h-[50px] md:w-full md:items-center md:justify-between'>

                                    <input className='my-3 md:w-[150px] h-[30px] border-b-[1px] focus:outline-none ' placeholder='Mobile' type="text" />

                                    <Link to='verifyotp'>
                                        <button className=' rounded-md text-white w-[110px] bg-lightgreen2 h-7'  > Send OTP</button>
                                    </Link>

                                </div>

                                <div className='mt-1 flex h-[50px] w-full  flex-row items-center justify-between
                                  md:flex md:flex-row md:h-[50px] md:w-full  md:items-center md:justify-between'>
                                    <div className='flex '>
                                        <input type="checkbox" name="" id="" />
                                        <p className='ml-1'>Remenber Me</p>
                                    </div>

                                    <a className='block text-[14px]' href="http://">forgotten Password</a>

                                </div>
                                <div className='flex h-[50px] w-full mt-6 items-center justify-center '>

                                    <button className='rounded-[4px] text-white w-[120px] bg-lightgreen2 h-8' type="submit"  > LOGIN</button>
                                    <button className='rounded-[4px] ml-4 text-lightgreen w-[120px] border-2 border-lightgreen h-8' > SIGNUP</button>

                                </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default LoginSectionUser