"use client"; 

import React from 'react';
import { Field, Form, Formik } from 'formik';
import type { NextPage } from 'next';
import Input from '@/app/component/shared/forms/input/input';
import GlowingButton from '@/app/component/shared/forms/button/button';
import './style.css'

interface RegisterFormValues {
    name: string,
    email: string,
    password: string
}

const Register: NextPage = () => {

    const initialValues: RegisterFormValues = {
        name: '',
        email: '',
        password: ''
    };

    return (
        <>
            <div className="back min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md card">
                    <div className="bg-white py-4 px-2 shadow sm:rounded-lg sm:px-10 content">
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            <Form className="my-10">
                                <div className="flex justify-center">
                                    <img
                                        className="h-29 w-29 object-contain" // تنظیم اندازه مناسب برای عکس
                                        src="../../panda.png"
                                        alt="Panda Shopy"
                                    />
                                </div>
                                <div>
                                    
                                <Input name='name' label='Your Name'/>
                                </div>

                                <div>
                                    <Input name='email' type='email' label='Email Address'/>
                                </div>

                                <div>
                                <Input name='password' type='' label='Password'/>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Register
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
