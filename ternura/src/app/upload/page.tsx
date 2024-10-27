'use client';
import PhotoInput from '@/components/PhotoInput';
import {Form, Formik} from 'formik';

export default function UploadPage() {
  return (
    <div className='w-full h-full'>
      <Formik
        initialValues={{photos: []}} // Initial values for Formik
        onSubmit={values => {
          console.log(values); // Handle form submission
        }}>
        {(
          {values}, // Access Formik's values
        ) => (
          <Form>
            {/* <PhotoInput name='photos' value={values.photos} />{' '} */}
            {/* Pass the current value of photos */}
            <button type='submit' className='mt-4'>
              Submit
            </button>{' '}
            {/* Add a submit button */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
