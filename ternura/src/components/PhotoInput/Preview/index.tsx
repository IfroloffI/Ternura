import { memo } from 'react';
import { Box } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PreviewItem from './PreviewItem';

export type Item = {
  src: string;
};

interface Props {
  items: Item[];
  onDelete: (src: string) => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

function Preview({ items, moveCard, onDelete }: Props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box display="flex" flexWrap="wrap" gap={3} maxW="100svw">
        {items.map((item, index) => (
          <PreviewItem
            item={item}
            id={item.src}
            key={item.src}
            moveCard={moveCard}
            onDelete={onDelete}
            index={index}
          />
        ))}
      </Box>
    </DndProvider>
  );
}

export default memo(Preview);
