import { Link } from 'react-router-dom';

import './MenuList.css';
import MENUS from '../constants/MENUS.json';

const MENUS_NAMES = Object.keys(MENUS);

const MenuList = () => {
  return (
    <ul className="MenuList">
      {MENUS_NAMES.map(i => {
        return (
          <Link to={MENUS[i] === 'home' ? '/' : MENUS[i]}>
            <li key={i} className="MenuList-item">{i}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default MenuList;