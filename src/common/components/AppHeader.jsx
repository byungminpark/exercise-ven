import './AppHeader.css';

import MenuList from './MenuList';

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <h1 className="visually-hidden">벤브라더스를 사용하면, 피트니스 시설의 인포메이션 데스크를 대체할 수 있습니다.</h1>
      
      <div className="AppHeader-logo" />

      <nav className="AppHeader-nav">
        <MenuList />
      </nav>
    </header>
  );
};

export default AppHeader;