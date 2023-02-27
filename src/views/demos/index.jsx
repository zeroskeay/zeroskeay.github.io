import { Outlet ,Link} from 'react-router-dom';

import './index.less'

export default function(){
  return (
  <>
    <section className='demos'>
      <ul>
        <li>
          <Link rel="stylesheet" to="/demos">Slider</Link>
        </li>
        <li>
          <Link rel="stylesheet" to="/demos/crud" >Crud</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </section>
  </>)
}