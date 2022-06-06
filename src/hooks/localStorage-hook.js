import { useState, useEffect } from 'react'

const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    const value = JSON.parse(window.localStorage.getItem(key))
    return value
  })
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}

export default useLocalStorage
