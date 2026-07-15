import emailjs from '@emailjs/browser'
import { useState, type SyntheticEvent } from 'react'
import { Navbar } from './Navbar'

interface FormData {
    name: string
    email: string
    message: string
}

export function HireMe() {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    })

    const SERVICE_ID = "service_7j3057e"
    const TEMPLATE_ID = "template_kz038ll"

    const PUBLIC_KEY = "s1IMVyV8TeAdoLdc6"

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget as HTMLFormElement, PUBLIC_KEY)
            .then(() => {
                alert("message sent")
                setFormData({ name: "", email: "", message: "" })
            })
            .catch(() => alert("oops something went wrong, try again"))
    }

    return (
        <section id='Contact' className='flex justify-center p-4 sm:p-10 m-4 sm:m-10 bg-gray-900/90 rounded-2xl min-h-screen
         relative overflow-hidden'>

            <Navbar />

            <div className='px-6 sm:px-8 w-full max-w-[500px] mt-28 sm:mt-25 border border-gray-700 py-8'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-orange-400 hover:text-white text-center sm:text-left'>
                    Get in Touch
                </h2>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='relative'>
                        <input type='text' id='name' name='name' placeholder='name'
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })}
                            value={formData.name}
                            required
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
            focus:border-blue-500' />
                    </div>

                    <div className='relative'>
                        <input type='email' id='email' name='email' placeholder='example@gmail.com'
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })}
                            required
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
            focus:border-blue-500' />
                    </div>

                    <div className='relative'>
                        <textarea id='message' name='message' placeholder='type'
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={5}
                            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none 
            focus:border-blue-500' />
                    </div>

                    <button type='submit' className='w-full rounded py-3 px-6 bg-orange-400 text-white 
                    font-medium transition overflow-hidden cursor-pointer
        hover:translate-y-0.5'>send message</button>
                </form>
            </div>
        </section>
    )
}