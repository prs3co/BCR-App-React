import React, { useState } from 'react'

function useLocalStorage(keyName: string, defaultValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName)
      if (value) {
        return JSON.parse(value)
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (error) {
      console.log(error)
      return defaultValue
    }
  })

  function setValue(newValue: any) {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue))
    } catch (error) {
      console.log(error)
    }
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}

export default useLocalStorage
