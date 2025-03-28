import { setSingleCompany } from '@/redux/slices/companySlice'
import { setAllJobs } from '@/redux/slices/jobSlice'
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = ({companyId}) => {
    const dispatch = useDispatch()
  useEffect(()=> {
    const fetchSingleComapny = async () => {
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, {withCredentials: true});
            console.log(res.data.jobs);
            
            if(res.data.success) {
                dispatch(setSingleCompany(res.data.company))
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    fetchSingleComapny();
  }, [companyId, dispatch])
}

export default useGetCompanyById