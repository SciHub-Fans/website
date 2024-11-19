import { useState, useCallback } from 'react'

export const useCopy = () => {
  const [copied, setCopied] = useState(false)

  const copy = useCallback((value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      // 2秒后重置复制状态
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    })
  }, [])

  return { copied, copy }
}