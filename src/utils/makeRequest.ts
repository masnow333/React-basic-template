import axios, { AxiosHeaders } from 'axios';
import { useSelector } from 'react-redux';

export const useAxios = <T,D> (url:string, method: string) => {
    const user: userModel = useSelector((state: any) => state.user);
    let headers = new AxiosHeaders();
	if (user.jwt !== '') {
        headers.setAuthorization(`Bearer ${user.jwt}`)
	}
	headers.setContentType('application/json');
    const fetchData = async (data: T) => {
      try {
        const response = await axios({
          url,
          method,
          data,
          headers
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    };
  

    const executeRequest = async (data: T): Promise<D> => {
      return await fetchData(data);
    };
  
    return { executeRequest };
  };
