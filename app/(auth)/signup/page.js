"use client";
import { Checkbox } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

const Signup = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className='header_top h-[800px] xl:h-[1024px] flex container justify-center md:justify-between items-center gap-[25px] lg:gap-[50px]'>
        <div className='w-1/2 xl:w-[845px]  relative hidden md:block'>
            <Image src={'/signup.png'} alt='login' width={900} height={900} className='w-[845px] h-[800px] xl:h-[1024px]'/>
            <Image src={'/Logo.png'} alt='logo' width={900} height={900} className='w-[143px] h-[58px] absolute top-[60px] left-[60px]'/>
        </div>
        <div className='w-full sm:w-3/5 md:w-1/2'>
          <form action="" className=' select-none'>
          <div>
            <h1 className='font-jost font-bold text-[30px] mb-[5px]'>Create New Account 👋 </h1>
            <p className='text-base font-jost font-normal mb-[30px]'>Please enter details</p>
          </div>
          <label htmlFor="firstName" className='text-[12px] font-jost font-normal mb-[2px]'>First Name</label>
          <input type="text" id='firstName' placeholder='First Name' className='w-full p-4 outline-none border border-black  rounded-[10px] text-base font-jost font-normal mb-[18px]'/>

          <label htmlFor="lastName" className='text-[12px] font-jost font-normal mb-[2px]'>Last Name</label>
          <input type="text" id='lastName' placeholder='Last Name' className='w-full p-4 outline-none border border-black  rounded-[10px] text-base font-jost font-normal mb-[18px]'/>
          
          <label htmlFor="email" className='text-[12px] font-jost font-normal mb-[2px]'>Email Address</label>
          <input type="email" id='email' placeholder='Enter your email' className='w-full p-4 outline-none border border-black  rounded-[10px] text-base font-jost font-normal mb-[18px]'/>

          <label htmlFor="password" className='text-[12px] font-jost font-normal mb-[2px]'>Password</label>
          <input type="password" id='password' placeholder='Enter your password' className='w-full p-4 outline-none border border-black rounded-[10px] text-base font-jost font-normal'/>
          <div className='flex justify-between mt-[18px] mb-[32px]'>
           <div className='flex gap-3'>
           <Checkbox onChange={onChange} className='text-base font-jost font-normal text-black'>I agree to the <Link href={"/"} className='font-bold'>Terms & Conditions</Link></Checkbox>
           {/* <span ></span> */}
           </div>
           <p className='text-sm font-jost font-normal'>Forgot Password?</p>
          </div>
          <button className=' bg-black text-white p-5 w-full text-base font-jost font-normal rounded-md'>Login</button>
          <div className='flex gap-3 text-base font-jost font-normal justify-center mt-5'>
            <span>already have an account?</span>
            <Link href={"/login"} className='text-[#D96936] hover:text-[#2653A8]'>LogIn</Link>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Signup