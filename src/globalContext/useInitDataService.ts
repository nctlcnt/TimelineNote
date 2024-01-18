import data from '../data/data.json'
import { InitDataType } from '@/type'
import { useMemo } from 'react'


const useInitDataService = (): InitDataType => {

    const initData = useMemo(() => {
        return data
    }, [])

    return {
        initNotes: initData.notes,
        initTags: initData.tags,
    }
}
export default useInitDataService