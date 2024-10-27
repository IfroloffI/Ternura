import { Suspense, memo, useCallback, useRef } from 'react';
import { Box, IconButton, Image, Skeleton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import type { Identifier, XYCoord } from 'dnd-core';
import { useDrag, useDrop } from 'react-dnd';
import { type Item } from '../index';

interface Props {
  item: Item;
  index: number;
  onDelete: (src: string) => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  id: any;
}
interface DragItem {
  index: number;
  id: string;
  type: string;
}

const CustomImage = ({ src }: { src: string }) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Image alt="image" objectFit="cover" boxSize="100px" src={src} />
    </Suspense>
  );
};

function PreviewItem({ item, moveCard, index, id, onDelete }: Props) {
  const handleDelete = useCallback(() => {
    onDelete(item.src);
  }, [item.src, onDelete]);

  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientXLeft =
        (clientOffset as XYCoord).x - hoverBoundingRect.left;
      const hoverClientXTop =
        (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.bottom;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      console.log(
        'hoverClientXLeft ',
        hoverClientXLeft,
        'hoverMiddleX ',
        hoverMiddleX,
        'hoverMiddleY',
        hoverMiddleY,
        'hoverClientXTop',
        hoverClientXTop,
        'ЭТО ПЕРВЫЙ IF',
        dragIndex < hoverIndex,
      );
      if (
        dragIndex < hoverIndex &&
        (hoverClientXLeft < hoverMiddleX ||
          100 - hoverClientXLeft < hoverMiddleX) &&
        hoverClientXTop < hoverMiddleY
      ) {
        return;
      }

      // Dragging upwards
      if (
        dragIndex > hoverIndex &&
        hoverClientXLeft > hoverMiddleX &&
        hoverClientXTop > hoverMiddleY
      ) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <Box
      borderRadius="md"
      cursor="grab"
      ref={ref}
      data-handler-id={handlerId}
      overflow="hidden"
      key={item.src}
      position="relative"
      opacity={opacity}
    >
      <CustomImage
        src={`https://storage.yandexcloud.net/home-auction-public/${item.src}`}
      />
      <IconButton
        aria-label="delete"
        position="absolute"
        top="10px"
        right="10px"
        size="xs"
        onClick={handleDelete}
        icon={<CloseIcon />}
      />
    </Box>
  );
}

export default memo(PreviewItem);
