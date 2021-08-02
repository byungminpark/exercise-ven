import './AppFooter.css';

const AppFooter = () => {
  return (
    <footer className="AppFooter">
      <p className="AppFooter-policy">
        <a>개인정보처리방침</a>
        &nbsp; | &nbsp;
        <a>이용약관</a>
      </p>
      
      <p className="AppFooter-copyright">
        &copy; 2021 Working Cow Inc.  All right reserved.
      </p>
      
      <address className="AppFooter-address">
        <span>주식회사 워킹카우</span>
        <dl>
          <dt>대표자</dt>
          <dd>이승민</dd>
          <br />
          <dt>주소</dt>
          <dd>서울특별시 송파구 올림픽로35길 93, 지하1층 B113호</dd>
          <br />
          <dt>사업자등록번호</dt>
          <dd>616-87-31372</dd>
          <br />
          <dt>통신판매신고번호</dt>
          <dd>2020-서울송파0110</dd>
          <br />
          <dt>전화번호</dt>
          <dd>02-6084-3500</dd>
          <br />
          <dt>이메일</dt>
          <dd>min@working-cow.com</dd>
        </dl>
      </address>
    </footer>
  );
};

export default AppFooter;