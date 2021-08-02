import './Reservation.css';

// import ReservationForm from './components/ReservationForm'

function Reservation() {
  return (
    <section className="Reservation">
      <h2 className="visually-hidden">오프라인 예약체험 및 비지니스 상담이 가능합니다.</h2>

      {/* <ReservationForm /> */}
      <form className="Reservation-form">
        <legend>예약하기</legend>
        <label>
          성함
          <input type="text" />
        </label>
        <label>
          전화번호
          <input type="tel" />
        </label>
        <label>
          날짜
          <input type="date" />
        </label>
        <label>
          시간
          <input type="time" />
        </label>
      </form>

      <iframe 
      title="위치 지도" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5937003039044!2d127.92596190077697!3d37.33397272302878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3563743619e24e45%3A0x2d54208de2de0596!2z7JeQ7J6E7Yq466CI7J2064ud656p!5e0!3m2!1sko!2skr!4v1627925272600!5m2!1sko!2skr" 
      width="400" 
      height="300" 
      style={{"border": 0, "background-color": "lightgray"}} 
      allowfullscreen="" 
      loading="lazy" />
    </section>
  );
};

export default Reservation;