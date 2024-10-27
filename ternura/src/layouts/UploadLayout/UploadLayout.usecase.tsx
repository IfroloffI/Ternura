import UploadFileIcon from '@/components/icons/UploadFileIcon';
import { Button } from '@chakra-ui/react';

export const uploadLayoutUsecaseDocs = {
  children: (
    <div
      className={`
                p-10
                w-full 
                border border-dashed border-grey-light-stroke rounded-medium
                flex flex-col items-center
                `}
    >
      <UploadFileIcon />
      <div className="h-2.5" />
      <p>Выберите файл</p>
      <div className="h-2" />
      <p className="font-medium text-gray-500">
        Минимальный размер 200x200, форматы docx, pdf, png, jpeg, wepb, heic, до
        20МБ
      </p>
      <div className="h-5" />
      <Button className="!bg-gray-400 !max-w-44" variant="filled">
        Выбрать файл
      </Button>
    </div>
  ),
};
