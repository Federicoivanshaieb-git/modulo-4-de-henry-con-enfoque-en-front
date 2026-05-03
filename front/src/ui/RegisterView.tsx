'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateFormRegister } from '@/lib/validate';
import { register } from '@/services/authService';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterView = () => {
  const router = useRouter();
  
  const initialValues = {
    email: '',
    password: '',
    name: '',
    address: '',
    phone: ''
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-10 font-(family-name:--font-vt323)]">
      
      <div className="w-full max-w-md bg-[#C0C0C0] p-8 border-4 border-black shadow-[10px_10px_0_0_#000]">
        <h1 className="text-4xl font-black text-black mb-8 text-center uppercase italic border-b-4 border-black pb-2">
          [ REGISTRATION FORM ]
        </h1>
        
        <Formik
          initialValues={initialValues}
          validate={validateFormRegister}
          onSubmit={async (values) => {
            try {
              
              await register(values); 
              router.push("/login"); 
            } catch (error) {
              
              console.error("Auth Error:", error);
            }
          }}
        >
          {({ isValid, dirty }) => (
            <Form className="flex flex-col space-y-4">
              
              <div className="flex flex-col">
                <label className="text-xl font-bold text-black mb-1 uppercase">Name</label>
                <Field name="name" placeholder="BART SIMPSON" className="p-3 bg-white border-2 border-black focus:bg-blue-50 outline-none transition-all uppercase" />
                <ErrorMessage name="name" component="span" className="text-red-600 text-sm mt-1 font-bold" />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-bold text-black mb-1 uppercase">Email</label>
                <Field type="email" name="email" placeholder="USER@EXAMPLE.COM" className="p-3 bg-white border-2 border-black focus:bg-blue-50 outline-none transition-all uppercase" />
                <ErrorMessage name="email" component="span" className="text-red-600 text-sm mt-1 font-bold" />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-bold text-black mb-1 uppercase">Password</label>
                <Field type="password" name="password" placeholder="******" className="p-3 bg-white border-2 border-black focus:bg-blue-50 outline-none transition-all" />
                <ErrorMessage name="password" component="span" className="text-red-600 text-sm mt-1 font-bold" />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-bold text-black mb-1 uppercase">Address</label>
                <Field name="address" placeholder="EVERGREEN TERRACE 742" className="p-3 bg-white border-2 border-black focus:bg-blue-50 outline-none transition-all uppercase" />
                <ErrorMessage name="address" component="span" className="text-red-600 text-sm mt-1 font-bold" />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-bold text-black mb-1 uppercase">Phone</label>
                <Field name="phone" placeholder="555-0123" className="p-3 bg-white border-2 border-black focus:bg-blue-50 outline-none transition-all" />
                <ErrorMessage name="phone" component="span" className="text-red-600 text-sm mt-1 font-bold" />
              </div>

              <Link href="/login" className="text-blue-800 hover:underline text-lg text-center mt-2 uppercase font-bold">
                Do you already have an account? Log in here
              </Link>

              <button 
                type="submit" 
                disabled={!(isValid && dirty)}
                className={`mt-6 py-4 border-4 border-black font-black text-2xl uppercase transition-all
                  ${!(isValid && dirty) 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-[#008000] text-white hover:bg-[#006400] active:translate-y-1 active:shadow-none shadow-[6px_6px_0_0_#000]'
                  }`}
              >
                Create Account
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterView;