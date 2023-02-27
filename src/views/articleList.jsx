import { articleNames } from '../config';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function articleList(){ 
  const navigate = useNavigate()
  function handleClick(item,subIndex){
    console.log(item,subIndex)
  }
  return(
    <>
      {/* <ReactMarkdown >{markdown}</ReactMarkdown> */}
      <ul>
      {Object.keys(articleNames).map((item,index)=>
        articleNames[item].length 
          ?<li key={index}>
            <h1>{item}</h1>
            <ul>
                {
                  articleNames[item].map((subItem,subIndex)=><li key={subIndex}>
                    <Link to={'/articleDetail?type='+item+'&idx='+subIndex}>{subItem} </Link>
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