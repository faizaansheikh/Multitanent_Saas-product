'use client';
import Image from "next/image";
import { useState } from "react";
import leaves from '../images/leaves.jpg'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import axios from '@/lib/axios';
import CustomAlert from "@/components/custom/CustomAlert";
import { toast } from "sonner";

export default function Register({setToggle}:any) {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Username must be at least 2 characters"
        }),
        email: z.string().email({
            message: "Please enter a valid email address",
        }),
        password: z.string().min(7, {
            message: "password must be at least 7 characters"
        })
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

        const onSubmit = async (data: any) => {
            
           
            try {
                const res = await axios.post('/signup', { data });
                if(res.data){
                    toast.success("User created successfully!")
                    form.reset(); 
                }
             
                
            } catch (err: any) {
                toast.error(err.response?.data?.message || 'Signup failed')
            
            }
        }
    
    return (
        <>
       
            <div className="d flex justify-center items-center h-screen w-full bg-[#144734]">
                <div className="d flex justify-between items-center bg-[whitesmoke] w-[1150px] h-[700px] rounded-[20px]">
                    <div className="d flex flex-col justify-center items-center w-full h-[700px] ">

                        <div>
                            <div className="d flex flex-col justify-center">
                                <h3 className="font-medium text-4xl my-4">Register</h3>
                                <p className="text-[17px] mb-[20px]">A brand new day is here. Its your day to shape.
                                    Sign In!
                                </p>
                            </div>

                            <Form {...form} >
                                <form onSubmit={form.handleSubmit(onSubmit)} >
                                    <FormField
                                        control={form.control}
                                        name="name"

                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    Name
                                                </FormLabel>
                                                <FormControl>
                                                    <input

                                                        placeholder="name"
                                                        {...field}
                                                        className=" text-md px-3 py-2 border rounded-md outline-none border-gray-300 dark:border-gray-700 bg-[#FDFAF6] dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-black-500 focus:border-transparent"
                                                        onChange={(e: any) => {
                                                            field.onChange(e)
                                                            // setState({ ...state, name: e.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                                <div className="">
                                                    <FormMessage className="text-sm text-red-600" />
                                                </div>

                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="email"

                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <input

                                                        placeholder="email"
                                                        {...field}
                                                        className=" text-md px-3 py-2 border rounded-md outline-none border-gray-300 dark:border-gray-700 bg-[#FDFAF6] dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-black-500 focus:border-transparent"
                                                        onChange={(e: any) => {
                                                            field.onChange(e)
                                                            // setState({ ...state, email: e.target.value })
                                                        }}
                                                    />
                                                </FormControl>
                                                <div className="">
                                                    <FormMessage className="text-sm text-red-600" />
                                                </div>

                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="password"

                                        render={({ field }) => (
                                            <FormItem className="">
                                                <FormLabel className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    Password
                                                </FormLabel>
                                                <FormControl>
                                                    <input
                                                        type="password"
                                                        placeholder="password"
                                                        {...field}
                                                        className="text-md px-3 py-2 border rounded-sm outline-none border-gray-300 dark:border-gray-700 bg-[#FDFAF6] dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-black-500 focus:border-transparent"
                                                        onChange={(e: any) => {
                                                            field.onChange(e)
                                                            // setState({ ...state, password: e.target.value })
                                                        }}
                                                    />
                                                </FormControl>

                                                <div className="mb-2">
                                                    <FormMessage className="text-sm text-red-600" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="d flex flex-col items-center">
                                        <Button className="bg-[#09422D] w-full cursor-pointer" type="submit">
                                            Sign Up
                                        </Button>
                                        <p className="mt-2">Already have an account? <span className="cursor-pointer text-[#09422D] font-medium"  onClick={()=>setToggle(false)}>Sign in</span></p>
                                    </div>
                                </form>
                            </Form>

                        </div>
                    </div>



                    <div className="hidden md:flex relative w-full h-[660px] rounded-[20px] mr-[20px] ">
                        <Image
                            alt=""
                            src={leaves}
                            fill
                            priority 
                            className="object-cover rounded-[20px]"
                        />
                    </div>
                </div>
            </div>

        </>
    );
}
