import './MenuList.css';
import MENUS from '../constants/MENUS.json';

const MENUS_NAMES = Object.keys(MENUS);

const MenuList = () => {
  return (
    <ul className="MenuList">
      {MENUS_NAMES.map(i => {
        return (
          <li key={i} className="MenuList-item">{i}</li>
        );
      })}
    </ul>
  );
};

export default MenuList;