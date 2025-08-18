import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import AppInput from './AppInput.tsx';
import AppButton from '../AppButton.tsx';

type IPersonalInfoProps = {
    name: string;
    email: string;
    phone: string;
}

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phone: Yup.string()
        .required('Phone number is required')
});




const PersonalInfo = () => {

    const initialValues: IPersonalInfoProps = {
        name: '',
        email: '',
        phone: ''
    };

    return (
        <section className='flex flex-col gap-y-8 pt-15'>
            <div>
                <h1 className='text-Blueish-950 font-bold text-3xl xl:text-4xl'>Personal Info</h1>
                <h4 className='text-Greyish-500 mt-3'>Please provide your name, email, address, and phone number.</h4>
            </div>

            {/*FORMS*/}
            <Formik initialValues={initialValues} onSubmit={() => {}} validationSchema={validationSchema}>
                {({values, isSubmitting}) => (
                    <Form className='flex flex-col'>
                        <div className='flex flex-col gap-y-5'>

                        <AppInput label='Name' name='name' id='name' type='text' value={values.name} placeholder='e.g. Stephen King' />
                        <AppInput label='Email Address' name='email' id='email' type='email' value={values.email} placeholder='e.g. stephenking@lorem.com' />
                        <AppInput label='Phone Number' name='phone' id='phone' type='text' value={values.phone} placeholder='e.g. +1 234 567 890' />
                        </div>


                        <div className='self-end mt-40'>
                        <AppButton disabled={isSubmitting}>
                            <span>{isSubmitting ? 'loading' : 'Next Step'}</span>
                        </AppButton>
                        </div>
                    </Form>
                )}
            </Formik>

        </section>
    );
};
export default PersonalInfo;
