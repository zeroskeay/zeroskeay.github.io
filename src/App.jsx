import { Outlet,NavLink,Link } from 'react-router-dom';
import { useState } from 'react';
import './App.less'


function App() {
  const [headerColer,setHeaderColer] = useState('blue')

  return (
  <>
    {/* 头部 */}
    <header className={'header color-'+headerColer}>
      {/* 导航 */}
      <nav>
        {/* 作者 */}
        <div className='author'><Link to='/'>Skeay</Link></div>
        {/* nav */}
        <ul>
          <li><NavLink onClick={()=>setHeaderColer('blue')} to='/'>HOME</NavLink> </li>
          <li><NavLink onClick={()=>setHeaderColer('green')} to='/article'>ARTICLE</NavLink></li>
          <li><NavLink onClick={()=>setHeaderColer('orange')} to='/demos'>Demos</NavLink></li>
          <li><NavLink onClick={()=>setHeaderColer('red')} to='/about'>ABOUT</NavLink></li>
        </ul>
      </nav>
      <section>
        <h1>skeay's blog</h1>
        <hr />
        <span>黄玉帅</span>
      </section>
    </header>
    <main>
      <div className='article-container'>
      {/* 主页 */}
      {/* 关于我 */}
      {/* 文章列表 */}
      {/* 标签 */}
      {/* 整理内容 */}
      <Outlet />
      </div>  
    </main>
    {/* footer */}
    {/* <footer>底部内容</footer> */}
  </>
  );
}

export default App
