/* eslint-disable react/react-in-jsx-scope */
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { articleNames } from '../config'

function articleDetail () {
  const [markdown, setMarkdown] = useState('')
  // 获取文章id
  const [params] = useSearchParams()

  const articleType = params.getAll('type')
  const articleIdx = params.getAll('idx')
  const articleName = articleNames[articleType][articleIdx]

  useEffect(() => {
    const url = '/article/' + articleType + '/' + articleName + '.md'
    fetch(url)
      .then(response => response.text())
      .then(text => {
        return setMarkdown(text)
      })
  }, [])
  return (
    <div>
      <h1 style={{ textAlign: 'center', paddingBottom: '20px' }}>{articleName}</h1>
      <ReactMarkdown remarkPlugins={[remarkGfm]} >{markdown}</ReactMarkdown>
    </div>
  )
}
export default articleDetail
