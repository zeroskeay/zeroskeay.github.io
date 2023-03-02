/* eslint-disable react/react-in-jsx-scope */
import { Outlet, Link } from 'react-router-dom'

import './index.less'

// eslint-disable-next-line react/display-name
export default function () {
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
