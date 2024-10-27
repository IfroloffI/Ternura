import { FC } from 'react';
import Props from '@/components/FormSection/FormSection.props';

const FormSection: FC<Props> = ({
  children,
  title,
  className,
  ...props
}: Props) => {
  return (
    <div {...props} className={`flex flex-col gap-4 md:gap-5 ${className}`}>
      <p className="text-grey text-sm md:text-lg">{title}</p>
      <div className="flex flex-col gap-2.5 md:gap-4 w-full">{children}</div>
    </div>
  );
};

export default FormSection;
