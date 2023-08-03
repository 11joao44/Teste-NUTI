import axios, { AxiosPromise } from 'axios'
import { useQuery } from 'react-query'
import { CountData } from '../interface/CountData'

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<CountData[]> => {
  const response = axios.get(API_URL + '/counter_tags')
  return response
}

export function useCountData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['count-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data?.data
  }
}
