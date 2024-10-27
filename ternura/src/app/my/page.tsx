'use client';
import {MainHeader} from '@/components/MainHeader';
import { Button, Input} from '@chakra-ui/react';
import {Formik} from 'formik';
import InputWrapper from '@/components/InputWrapper';

const initialValues = {
  phone: '',
  first_name: '',
  last_name: '',
};

export default function MyPage() {
  return (
    
      <div className='w-full h-full'>
        {/* <Input type='tel' placeholder='Введите телефон' /> */}
        <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}>
        {({handleSubmit, values, dirty}) => (
          <div className='w-full shadow-shadow_3 rounded-2xl p-8 gap-4 flex-col flex'>
            <div className='grid grid-cols-2 gap-11'>
              <UserData
                fullName={getFullName(me)}
                phone={me.phone}
                photoUrl={me.photo_url}
                photoVariant='filled'
                className='gap-10 !h-fit'
              />

              <FormSection
                title='Тип аккаунта'
                className='flex flex-col gap-4 mt-3'>
                <InputWrapper name='type' fullWidth direction='row'>
                  <Select
                    isDisabled={isSelectDisabled}
                    fullWidth
                    height='3.7rem'
                    {...selectUseCaseAccountType}
                  />
                </InputWrapper>
                <AreYouSurePopover
                  handleOpenModal={handleOpenModal}
                  handleCloseModal={handleCloseModal}
                  handleEditType={() => {
                    handleEditType(values);
                  }}
                  isModalOpen={isModalOpen}
                />
              </FormSection>
            </div>
            <div className='grid grid-cols-2 gap-11 '>
              <div>
                <FormSection title='Личные данные'>
                  <InputWrapper name='first_name' fullWidth direction='row'>
                    <Input fullWidth fullHeight key='name' placeholder='Имя' />
                  </InputWrapper>
                  <InputWrapper name='last_name' fullWidth direction='row'>
                    <Input
                      fullWidth
                      fullHeight
                      key='surname'
                      placeholder='Фамилия'
                    />
                  </InputWrapper>
                </FormSection>
              </div>
              <div className='flex flex-col gap-20'>
                <FormSection title='Контактные данные'>
                  <InputWrapper name='phone' fullWidth>
                    <Input
                      enableMask
                      fullWidth
                      fullHeight
                      key='telephone'
                      type='tel'
                    />
                  </InputWrapper>

                  <InputWrapper name='email' fullWidth>
                    <Input
                      fullWidth
                      fullHeight
                      key='email'
                      type='email'
                      placeholder='Email'
                    />
                  </InputWrapper>
                </FormSection>
                <Button
                  variant='primary'
                  className='!leading-none'
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
