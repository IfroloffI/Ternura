'use client';
import Card from '@/components/Card';
import {MainHeader} from '@/components/MainHeader';
import {CardDefault} from '@/components/Card/Card.usecase';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import {useState} from 'react';
import {Button, Spinner} from '@chakra-ui/react';
import Props from '@/components/Card/Card.props';

const queryClient = new QueryClient();

const ProfilesList = () => {
  const [curCard, setCurCard] = useState<number>(0);
  const {data, isLoading, error} = useQuery<Props[]>({
    queryKey: ['profiles'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/getSuitablePropfiles/user019`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

  const handlePrev = () => {
    setCurCard(prev => (prev > 0 ? prev - 1 : prev)); // Не даем уйти ниже 0
  };

  const handleNext = () => {
    setCurCard(prev => (prev < (data?.length || 0) - 1 ? prev + 1 : prev)); // Не даем уйти выше последнего индекса
  };

  if (isLoading)
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <Spinner />
      </div>
    );
  else if (error) return <div>Ошибка: {error.message}</div>;
  else {
    return (
      <div className='w-full h-full flex'>
        <Card
          profile={data[curCard]}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    );
  }
};

export default function SearchPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfilesList />
    </QueryClientProvider>
  );
}
