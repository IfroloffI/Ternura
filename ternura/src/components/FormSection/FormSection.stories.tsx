import { fn } from '@storybook/test';
import { Meta, StoryObj } from '@storybook/react';
import Props from '@/components/FormSection/FormSection.props';
import FormSection from '@/components/FormSection/index';

import {
  formSectionUsecaseAccountContacts,
  formSectionUsecaseAccountPerson,
  formSectionUsecaseAccountType,
  formSectionUsecasePlaceholder,
} from '@/components/FormSection/FormSection.usecase';

const ActionsData = {
  onSelect: fn(),
  onChange: fn(),
};

const meta: Meta<Props> = {
  component: FormSection,
  args: { ...ActionsData },
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    ...formSectionUsecasePlaceholder,
  },
};

export const UserData: Story = {
  args: {
    ...formSectionUsecaseAccountPerson,
  },
};

export const UserContacts: Story = {
  args: {
    ...formSectionUsecaseAccountContacts,
  },
};

export const UserAccount: Story = {
  args: {
    ...formSectionUsecaseAccountType,
  },
};
