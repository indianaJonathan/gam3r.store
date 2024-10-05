import { useCallback } from 'react'

export default function useLocalStorage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const save = useCallback((key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [])

    const get = useCallback((key: string) => {
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : null
    }, [])

    const remove = useCallback((key: string) => {
        localStorage.removeItem(key)
    }, [])

    return { save, get, remove }
}
