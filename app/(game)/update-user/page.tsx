import Navbar from '@/components/gameDashboard/Navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const playerInfo = {
        name: "John doe",
        email: "johndoe@gmail.com",
        phoneNumber: 11111111,
        DOB: "07/03/2023",
        gender: "female",
        address: "ad, af, 13535",
        country: "India",
        city: "Kolhapur",
        postalCode: 416005
    }
    return (
        <div className='bg-Background text-white pt-20' >
            <Navbar />
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center basis-[90%]'>
                    <h2>Edit Profile</h2>
                    <div>
                        <Image src={"/assets/drawer/user-avatar.svg"} alt='user avatar' width={500} height={500} className='w-[100%] rounded-full' />
                        <p className='text-Secondary'>Change Avatar</p>
                    </div>
                </div>
                <div className='user-edit  space-y-4 w-[90%] basis-[90%]' >
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder={playerInfo.name} name='name' className='placeholder:text-GreyLight px-2 py-4 rounded-sm bg-GreyDark outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder={playerInfo.email} name='email' className='placeholder:text-GreyLight px-2 py-4 rounded-sm bg-GreyDark outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="phone-no">Phone Number</label>
                        <input type="number" placeholder={playerInfo.phoneNumber.toString()} name='phone-no' className='placeholder:text-GreyLight px-2 py-4 rounded-sm bg-GreyDark outline-none' />
                    </div>
                    <div className='flex justify-between items-center' >
                        <div className='flex flex-col basis-[45%] '>
                            <label htmlFor="dob">DOB</label>
                            <input type="date" name="dob" id="" placeholder={playerInfo.DOB.toString()} className='placeholder:text-GreyLight px-2 py-4 rounded-sm bg-GreyDark outline-none' />
                        </div>
                        <div className='flex flex-col basis-[45%] '>
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="" className='placeholder:text-GreyLight px-2 py-4 rounded-sm bg-GreyDark outline-none' >
                                <option value="Male" selected>Male</option>
                                <option value="Female"  >Female</option>
                                <option value="Other" >Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="" placeholder={playerInfo.address.toString()} className='placeholder:text-GreyLight px-2 py-4 rounded-sm bg-GreyDark outline-none' />
                    </div>
                    <div className='flex justify-between gap-3 items-center ' >
                        <div className='flex flex-col basis-[43%] '>
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="" placeholder={playerInfo.country.toString()} className='placeholder:text-GreyLight px-1 py-4 rounded-sm bg-GreyDark outline-none' />
                        </div>
                        <div className='flex flex-col basis-[43%] '>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="" placeholder={playerInfo.city.toString()} className='placeholder:text-GreyLight px-1 py-4 rounded-sm bg-GreyDark outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="postalCode">Postal Code</label>
                        <input type="number" name="postalCode" id="" placeholder={playerInfo.postalCode.toString()} className='placeholder:text-GreyLight px-2 py-4 rounded-sm bg-GreyDark outline-none' />
                    </div>
                </div>
                <button className='custom-gradient px-3 py-4 w-[90%] mx-auto my-3'>
                    update
                </button>
            </div>
        </div>
    )
}

export default page