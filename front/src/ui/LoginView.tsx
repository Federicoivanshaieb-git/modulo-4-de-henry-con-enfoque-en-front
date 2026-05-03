'use client'
import { useAuth } from '@/context/AuthContext';
import { validateFormLogin } from '@/lib/validate';
import { login } from '@/services/authService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginView = () => {
  const { setUserData } = useAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-10 font-(family-name:--font-vt323)]">
      <div className="w-full max-w-md bg-[#C0C0C0] p-8 border-4 border-black shadow-[10px_10px_0_0_#000]">
        <h1 className="text-4xl font-black text-black mb-8 text-center uppercase italic border-b-4 border-black pb-2">
          [ USERLOGIN ]
        </h1>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validateFormLogin}
          onSubmit={async (values) => {
            try {
              const response = await login(values);
              const { token, user } = response;
              setUserData({ token, user });
              router.push("/");
            } catch (error) {
              console.error("Login Error:", error);
              
            }
          }}
        >
          {({ isValid, dirty }) => (
            <Form className="flex flex-col space-y-6">
              
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl font-bold text-black mb-1 uppercase tracking-tight">
                  Email:
                </label>
                <Field 
                  type="email" 
                  name="email" 
                  placeholder="USER@EXAMPLE.COM" 
                  className="p-3 bg-white border-2 border-black focus:bg-blue-50 outline-none transition-all uppercase"
                />
                <ErrorMessage name="email" component="span" className="text-red-600 text-sm mt-1 font-bold" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" name="password" className="text-xl font-bold text-black mb-1 uppercase tracking-tight">
                  Password:
                </label>
                <Field 
                  type="password" 
                  name="password" 
                  placeholder="******" 
                  className="p-3 bg-white border-2 border-black focus:bg-blue-50 outline-none transition-all"
                />
                <ErrorMessage name="password" component="span" className="text-red-600 text-sm mt-1 font-bold" />
              </div>
                
              <Link href="/register" className="text-blue-800 hover:underline text-lg text-center mt-2 uppercase font-bold">
                Don't have an account? Sign up here
              </Link>

              <button 
                type="submit" 
                disabled={!(isValid && dirty)}
                className={`mt-4 py-4 border-4 border-black font-black text-2xl uppercase transition-all
                  ${!(isValid && dirty) 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-[#0000FF] text-white hover:bg-[#0000AA] active:translate-y-1 active:shadow-none shadow-[6px_6px_0_0_#000]'
                  }`}
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginView;
