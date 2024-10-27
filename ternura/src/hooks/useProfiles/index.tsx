import {useQuery, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';

const fetchProfiles = async () => {
  const response = await axios.get('http://localhost:8080/getProfiles');
  return response.data;
};

const useProfiles = () => {
  const queryClient = useQueryClient();

  const {data, error, isLoading} = useQuery(['profiles'], fetchProfiles, {
    onSuccess: () => {
      // Здесь можно выполнить дополнительные действия после успешного получения данных
    },
    onError: err => {
      console.log(err);
    },
  });

  return {data, error, isLoading};
};

export default useProfiles;
