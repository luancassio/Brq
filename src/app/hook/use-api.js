
import {useEffect, useRef, useState} from 'react'

export default function useApi(configReq){
    const {axiosInstance, method, url, othersConfig = {},  } = configReq
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const effectRun = useRef(false)

    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            try {
                const response = await axiosInstance[method](url, {
                    ...othersConfig,
                    signal: controller.signal
                })
                setData(response.data)
            } catch (error) {
                console.error(error)
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        if(effectRun.current){
            fetchData()
        }
        return () => {
            controller.abort()
            effectRun.current = true
        }
    }, [])

    return [data, loading, error]
}