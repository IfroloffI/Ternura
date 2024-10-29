'use client';
import {MainHeader} from '@/components/MainHeader';
import {Button} from '@chakra-ui/react';
import Input from '@/components/Input';
import {Formik} from 'formik';
import InputWrapper from '@/components/InputWrapper';
import FormSection from '@/components/FormSection';
import Select from '@/components/Select';
import UserData from '@/components/UserData';

const handleSubmit = values => {
  console.log(values);
};

const initialValues = {
  phone: '',
  first_name: '',
  last_name: '',
};

export default function MyPage() {
  return (
    <div className='w-full h-full'>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}>
        {({handleSubmit, values, dirty}) => (
          <div className='w-full shadow-shadow_3 rounded-2xl p-8 gap-4 flex-col flex'>
            <div className='grid grid-cols-2 gap-11'>
              <UserData
                fullName={'Имя фамилия'}
                phone={'896235235'}
                photoUrl={undefined}
                photoVariant='filled'
                className='gap-10 !h-fit'
              />
            </div>
            <div className='grid grid-cols-2 gap-11 '>
              <div>
                <FormSection title='Личные данные'>
                  <InputWrapper name='first_name' fullwidth direction='row'>
                    <Input fullwidth key='name' placeholder='Имя' />
                  </InputWrapper>
                  <InputWrapper name='last_name' fullwidth direction='row'>
                    <Input fullwidth key='surname' placeholder='Фамилия' />
                  </InputWrapper>
                </FormSection>
              </div>
              <div className='flex flex-col gap-20'>
                <FormSection title='Контактные данные'>
                  <InputWrapper name='phone' fullwidth direction='row'>
                    <Input
                      enableMask
                      fullwidth
                      placeholder='Телефон'
                      key='telephone'
                      type='tel'
                    />
                  </InputWrapper>

                  <InputWrapper name='email' fullwidth>
                    <Input
                      fullwidth
                      key='email'
                      type='email'
                      placeholder='Email'
                    />
                  </InputWrapper>
                </FormSection>
                <Button
                  // variant='primary'
                  className='!leading-none !border-purpleMain !border-2 hover:!bg-purpleMain duration-200 transition-colors !text-black'
                  type='submit'
                  onClick={handleSubmit}
                  isDisabled={!dirty}>
                  Сохранить изменения
                </Button>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
