'use client'
import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {z} from 'zod'
export default function Home1() {
  const formSchema = z.object({
     username:z.string().min(2,{
       message: "Username must be at least 2 characters"
     }),
     email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password:z.string().min(7,{
      message: "password must be at least 7 characters"
    })
  })
  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });
  const form = useForm({
    resolver:zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    }
  })
  const onSubmit = (data: any) => {
    console.log(data);

  }
  return (
    <>
   
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 w-[400px] h-auto p-6 rounded">
          <div className="text-center">
            <h3 className="text-5xl m-2 font-bold">Join Mystery <br /> Message</h3>
            <h6 className="text-md mb-8 mt-6 font-medium">Signup to start your anonymous adventure</h6>
          </div>
          {/* <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} >
              <FormField
                control={form.control}
                name="username"

                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-md font-medium text-gray-900 dark:text-gray-100">
                      Username
                    </FormLabel>
                    <FormControl>
                      <input

                        placeholder="Username"
                        {...field}
                        className="text-md px-3 py-2 border rounded-sm outline-none border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-black-500 focus:border-transparent"
                        onChange={(e: any) => {
                          field.onChange(e)
                          setState({ ...state, username: e.target.value })
                        }}
                      />
                    </FormControl>
                        <div className="mb-2">
                        <FormMessage className="text-sm text-red-600" />
                        </div>
                
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="email"

                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-md font-medium text-gray-900 dark:text-gray-100">
                      Email
                    </FormLabel>
                    <FormControl>
                      <input

                        placeholder="email"
                        {...field}
                        className="text-md px-3 py-2 border rounded-sm outline-none border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-black-500 focus:border-transparent"
                        onChange={(e: any) => {
                          field.onChange(e)
                          setState({ ...state, email: e.target.value })
                        }}
                      />
                    </FormControl>
                      <div className="mb-2">
                        <FormMessage className="text-sm text-red-600" />
                        </div>

                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="password"

                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-md font-medium text-gray-900 dark:text-gray-100">
                      Password
                    </FormLabel>
                    <FormControl>
                      <input
                        type="password"
                        placeholder="password"
                        {...field}
                        className="text-md px-3 py-2 border rounded-sm outline-none border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-black-500 focus:border-transparent"
                        onChange={(e: any) => {
                          field.onChange(e)
                          setState({ ...state, password: e.target.value })
                        }}
                      />
                    </FormControl>

                      <div className="mb-2">
                        <FormMessage className="text-sm text-red-600" />
                        </div>
                  </FormItem>
                )}
              />
              <div className="d flex justify-end items-end">
              <Button className="cursor-pointer" onClick={onSubmit}>
                 Signup
              </Button>
              </div>
            </form>
          </Form> */}
        </div>
      </div>


    </>
  );
}
