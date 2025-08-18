import { Formik, Form, } from 'formik';
import type { FormikHelpers } from 'formik';
import * as Yup from 'yup';


const PersonalInfo = () => {
    return (
        <section className='flex flex-col gap-y-8 pt-15'>

            <div>
                <h1 className='text-Blueish-950 font-bold text-3xl xl:text-4xl'>Personal Info</h1>
                <h4 className='text-Greyish-500 mt-3'>Please provide your name, email, address, and phone number.</h4>
            </div>

        </section>
    );
};
export default PersonalInfo;
