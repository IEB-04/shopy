"use client";
import React from 'react';
import type { NextPage } from 'next';
import LoginForm from '@/app/forms/auth/loginForm';
import './style.css';
import './reset.css';



const Login: NextPage = () => {

    return (
        <>
            <div className="back min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                </div>

                <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md card">
                    <div className="bg-white py-4 px-2 shadow sm:rounded-lg sm:px-10 content">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    );
};


export default Login;