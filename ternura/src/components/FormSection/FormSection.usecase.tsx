import TextField from '@/components/Fields/customFields/TextField';
import Select from '../Fields/customFields/Select';
import { selectUseCaseAccountType } from '../Fields/customFields/Select/Select.usecase';

export const formSectionUsecasePlaceholder = {
  title: 'Title',
  children: (
    <>
      <TextField key="field-1" placeholder="Поле 1" />
      <TextField key="field-1" placeholder="Поле 2" />
    </>
  ),
};

export const formSectionUsecaseAccountType = {
  title: 'Тип аккаунта',
  children: <Select {...selectUseCaseAccountType} />,
};

export const formSectionUsecaseAccountContacts = {
  title: 'Контактные данные',
  children: (
    <>
      <TextField key="telephone" defaultValue="+7(999) 999-99-99" type="tel" />
      <TextField key="email" defaultValue="test@gmail.com" type="email" />
    </>
  ),
};

export const formSectionUsecaseAccountPerson = {
  title: 'Контактные данные',
  children: (
    <>
      <TextField key="name" placeholder="Имя" />
      <TextField key="surname" placeholder="Фамилия" />
    </>
  ),
};
