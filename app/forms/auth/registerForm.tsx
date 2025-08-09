import Input from "@/app/component/shared/forms/input/input";
import { Form, FormikProps, withFormik } from "formik";
import callApi from "@/app/helpers/callApi";
import React, { useEffect } from "react";
import * as yup from "yup";
import { useRouter } from 'next/navigation';


interface RegisterFormValues {
    name: string,
    email: string,
    password: string
}


const registerFormValidationSchema = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)

})

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
    const router = useRouter();
    useEffect(() => {
        if (props.status === 'success') {
            router.push('/auth/login');
        }
    }, [props.status, router]);
    return (
        <Form className="my-10">
            <div className="flex justify-center">
                <img
                    className="h-29 w-29 object-contain"
                    src="../../panda.png"
                    alt="Panda Shopy"
                />
            </div>
            <div>
                <Input name='name' label='Your Name' />
            </div>
            <div>
                <Input name='email' type='email' label='Email Address' />
            </div>
            <div>
                <Input name='password' type='' label='Password' />
            </div>
            {/* پیام خطا اگر اکانت وجود داشته باشد */}
            {props.status === 'error' && (
                <div className="text-red-600 text-center my-2">you already have an account</div>
            )}
            <div>
                <button
                    type="submit"
                    className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign Up
                </button>
                <div className="flex items-center justify-between">
                    <div className="w-full my-2 h-[1px] bg-gray-300"></div>
                    <span className="text-sm my-2 uppercase mx-6 text-gray-400">Or</span>
                    <div className="w-full my-2 h-[1px] bg-gray-300"></div>
                </div>
                <a href="/auth/login">have an account?</a>
            </div>
        </Form>
    )
}

interface RegisterFormProps {
    name?: string,
    email?: string
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
    mapPropsToValues: props => ({
        name: '',
        email: '',
        password: ''
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values, { setStatus }) => {
        try {
            const res = await callApi().post('auth/register', values)
            console.log(res)
            // اگر ثبت‌نام موفق بود:
            setStatus('success');
        } catch (err) {
            // اگر خطا بود:
            setStatus('error');
        }
    }
})(InnerRegisterForm)

export default RegisterForm;