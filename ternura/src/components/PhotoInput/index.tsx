import { memo, useCallback, useMemo } from 'react';
import { Button, VStack } from '@chakra-ui/react';
import { useFormikContext } from 'formik';
import Preview from './Preview';
import UploadLayout from '@/layouts/UploadLayout';
import CameraMobileIcon from '../icons/CameraMobileIcon';

interface Props {
  name: string;
  value: string[];
}

function PhotoInput({ name, value }: Props) {

  const { setFieldValue } = useFormikContext();

  const handleDrop = useCallback(
    async acceptedFiles => {
      const requests = [];

      acceptedFiles.forEach(file => {
        const formData = new FormData();
        formData.append('file', file, file.name);
      });
      
      const results = await Promise.all(requests);

      const imagesIds = results.map(result => result.data);

      setFieldValue(name, [...value, ...imagesIds]);
    },
    [name, value],
  );

  const previewItems = useMemo(() => value.map(src => ({ src })), [value]);

  const handleDeleteItem = useCallback(
    delSrc =>
      setFieldValue(
        name,
        value.filter(src => src !== delSrc),
      ),
    [value, name],
  );

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const updatedItems = [...value];
      const [movedItem] = updatedItems.splice(dragIndex, 1);
      updatedItems.splice(hoverIndex, 0, movedItem);
      setFieldValue(name, updatedItems);
    },
    [value, name, setFieldValue],
  );

  return (
    <VStack spacing={3} alignItems="flex-start">
      <UploadLayout onDrop={handleDrop}>
        <div className="flex flex-col md:hidden gap-4 w-full !max-w-[100svw] text-xs font-medium text-left  text-gray-500">
          <p className="max-w-[90svw] w-[90svw]">
            Сфотографируйте все комнаты, санузел, коридор, балкон, вид из окна,
            подъезд, фасад здания
          </p>
          <Button
            leftIcon={<CameraMobileIcon className="!w-4 !h-4" />}
            className="!md:hidden !w-full !max-w-full  !flex !items-center  !bg-gray-400"
          >
            Выбрать файл
          </Button>
          <p>
            Минимальный размер 200x200, форматы .jpeg, .jpg, .heic, .png, до
            20МБ
          </p>
        </div>

        <div
          className={`
                border-grey-light-stroke
                rounded-medium 
                w-full flex-col hidden md:flex items-center
                border border-dashed p-10
                `}
        >
          
          <div className="h-2.5" />
          <p>Выберите фото</p>
          <div className="h-2" />
          <p className="font-medium text-gray-500">
            Минимальный размер 200x200, форматы png, jpeg, до 20МБ
          </p>
          <div className="h-5" />
          <Button className="max-w-44 bg-gray-400" variant="filled">
            Выбрать фото
          </Button>
        </div>
      </UploadLayout>
      <Preview
        items={previewItems}
        moveCard={moveCard}
        onDelete={handleDeleteItem}
      />
    </VStack>
  );
}

export default memo(PhotoInput);
