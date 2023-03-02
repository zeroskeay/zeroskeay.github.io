/* eslint-disable react/react-in-jsx-scope */
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react'

function mainContent () {
  const [markdown, setMarkdown] = useState('')
  useEffect(() => {
    const url = '/article/任务的重要与紧急.md'
    fetch(url)
      .then(response => response.text())
      .then(text => {
        return setMarkdown(text)
      })
  }, [])
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  )
}
export default mainContent
