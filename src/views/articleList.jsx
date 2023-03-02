/* eslint-disable react/react-in-jsx-scope */
import { articleNames } from '../config'
import { Link } from 'react-router-dom'

function articleList () {
  return (
    <>
      {/* <ReactMarkdown >{markdown}</ReactMarkdown> */}
      <ul className='article-list'>
      {Object.keys(articleNames).map((item, index) =>
        articleNames[item].length
          ? <li key={index}>
            <h1>{item}</h1>
            <ul>
                {
                  articleNames[item].map((subItem, subIndex) => <li key={subIndex}>
                    <Link to={'/articleDetail?type=' + item + '&idx=' + subIndex}>{subItem} </Link>
                  </li>)
                }
            </ul>
          </li>
          : false
      )
      }
      </ul>

    </>
  )
}
export default articleList
