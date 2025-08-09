import Input from "@/app/component/shared/forms/input/input";
import { Form, FormikProps, withFormik } from "formik";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import callApi from "@/app/helpers/callApi";
import * as yup from "yup";


interface LoginFormValues {
    email: string,
    password: string
}

const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)

})

const InnerLoginForm = (props: FormikProps<LoginFormValues>) => {
    const router = useRouter();
    useEffect(() => {
        if (props.status === 'success') {
            router.push('/main');
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
                <Input name='email' type='email' label='Email Address' />
            </div>

            <div>
                <Input name='password' type='' label='Password' />
            </div>

            {/* پیام خطا اگر اطلاعات اشتباه باشد */}
            {props.status === 'error' && (
                <div className="text-red-600 text-center my-2">اطلاعات وارد شده اشتباه است!</div>
            )}
            <div>
                <button
                    type="submit"
                    className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign in
                </button>
                <div className="flex items-center justify-between">
                    <div className="w-full my-2 h-[1px] bg-gray-300"></div>
                    <span className="text-sm my-2 uppercase mx-6 text-gray-400">Or</span>
                    <div className="w-full my-2 h-[1px] bg-gray-300"></div>
                </div>
                <a href="./../../auth/register"> dont have a account?</a>
            </div>
        </Form>
    )
}

interface LoginFormProps {
    email?: string
}



const LoginForm = withFormik<LoginFormProps, LoginFormValues>({
    mapPropsToValues: props => ({
        email: '',
        password: ''
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values, { setStatus }) => {
        try {
            // فرض بر این است که API شما مسیر 'auth/login' دارد و اگر اطلاعات درست باشد، لاگین موفق می‌شود
            await callApi().post('auth/login', values);
            setStatus('success');
        } catch (err) {
            setStatus('error');
        }
    }
})(InnerLoginForm)

export default LoginForm;