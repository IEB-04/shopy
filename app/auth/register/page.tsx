"use client"; // علامت‌گذاری فایل به عنوان کامپوننت کلاینت

import React from 'react';
import { Field, Form, Formik } from 'formik';
import type { NextPage } from 'next';
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
                <div className="back">
      <h1>دانلود سریال Money heist</h1>
      <p>خلاصه داستان : سریال خانه کاغذی، یک مرد مرموز به اسم پروفسور نقشه بزرگترین سرقت تاریخ را طرح ریزی می کند و برای این کار یک تیم هشت نفره که هرکدام مهارت های منحصر به فرد خود را دارند و هیچ چیزی برای از دست دادن ندارند را استخدام می کند و…</p>
    </div>
        
            <div className="back min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-4 px-2 shadow sm:rounded-lg sm:px-10">
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
                                    
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="my-3">
                                        <Field id="name" name="name" type="text" autoComplete="name" required className="appearance-none block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="my-3">
                                        <Field id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="my-3">
                                        <Field id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
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
