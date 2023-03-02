/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import { imgsList } from '../../../../config'

function Crud () {
  const [bodyContext, setBodyContext] = useState([])

  const theadText = [
    '图片ID',
    '图片预览',
    '图片高度',
    '图片宽度',
    '图片地址',
    '删除图片'
  ]

  const tBodyContext = [
    {
      imgId: 1,
      imgUrl: imgsList[0],
      imgHeight: '600px',
      imgWidth: '300px'
    }
  ]

  useEffect(() => {
    setBodyContext(tBodyContext)
  }, [])

  function addImgInfo () {
    // const getData = await axios('url')
    const newItem = tBodyContext.map((item) => {
      item.imgId = bodyContext.length + 1
      item.imgUrl = imgsList[bodyContext.length % imgsList.length]
      return item
    })

    setBodyContext(bodyContext.concat(newItem))
  }

  function deleteItemByIndex (index) {
    bodyContext.splice(index, 1)
    setBodyContext(bodyContext.slice())
  }

  return (
    <>
      <div className='flex justify-center'>
        <button onClick={(e) => addImgInfo()} className='p-2 border-double text-dark-400 border-4 border-indigo-600'>随机一张图</button>
      </div>
      <table className="container text-center border-2 table-auto">
        <thead className='border-2 bg-orange-400 text-cyan-800'>
          <tr>
            {theadText.map((value, index) => <th key={index}> {value} </th>)}
          </tr>
        </thead>
        <tbody>
          {bodyContext.map((imgInfos, index) =>
            <tr key={index}>
              <td>{imgInfos.imgId}</td>
              <td><img src={imgInfos.imgUrl} style={{ width: '80px' }} /></td>
              <td>{imgInfos.imgHeight}</td>
              <td>{imgInfos.imgWidth}</td>
              <td>{imgInfos.imgUrl.length > 20 ? imgInfos.imgUrl.substring(0, 20).concat('...') : imgInfos.imgUrl}</td>
              <td><button onClick={() => deleteItemByIndex(index)} className='p-2 border-double text-red-500 border-4 border-indigo-600'>删除</button></td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  )
}

export default Crud
