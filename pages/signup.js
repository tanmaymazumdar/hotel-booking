import { useState } from 'react'
import { useRouter } from 'next/router'
import { register } from '../globals'

export default function Signup() {
  const [formData, setFormData] = useState({})
  const router = useRouter()

  function handleFormInput(key, value) {
    setFormData({ ...formData, [key]: value })
  }

  function trySignin() {
    if (formData.firstname && formData.lastname && formData.email && formData.password && formData.confirm_password) {
      if (formData.password === formData.confirm_password) {
        delete formData.confirm_password
        register({...formData, username: `${formData.firstname} ${formData.lastname}`}).then(res => {
          router.replace('/login')
        })
      }
    }
  }

  return (
    <div className='flex place-items-center w-full h-full' style={{height:'100vh', width: '100%'}}>
      <div className='w-80  p-6 mx-auto rounded-lg shadow-md'>
        <h1 className='text-center text-lg'>Signup</h1>

        <input onChange={e => { handleFormInput('firstname', e.target.value) }} placeholder='First Name' className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
        <input onChange={e => { handleFormInput('lastname', e.target.value) }} placeholder='Last Name' className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
        <input onChange={e => { handleFormInput('email', e.target.value) }} type='email' placeholder='Email ID' className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
        <input onChange={e => { handleFormInput('password', e.target.value) }} type='password' placeholder='Password' className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
        <input onChange={e => { handleFormInput('confirm_password', e.target.value) }} type='password' placeholder='Confirm Password' className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />

        <button className='bg-green-700 px-4 py-1 rounded text-white self-center block mx-auto mt-2' onClick={trySignin}>Sign Up</button>
      </div>
    </div>
  )
}
