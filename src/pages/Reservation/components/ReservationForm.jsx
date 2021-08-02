import './ReservationForm.css';

import { useState } from 'react';

const DEFAULT_FORM = {
  name: '',
  tel: '',
  date: '',
  time: ''
};

function ReservationForm() {
  const [form, setForm] = useState(DEFAULT_FORM);

  const onChange = ({ target }) => {
    setForm((prev) => ( {...prev, [target.name]: target.value} ));
  };
  const onClick = () => alert(JSON.stringify(form, null, 4));

  return (
    <form className="ReservationForm">
      <legend>쇼룸 예약</legend>

      <label>성함
        <input type="text" name="name" value={form.name} onChange={onChange} />
      </label>
      <label>전화번호
        <input type="tel" name="tel" value={form.tel} onChange={onChange} />
      </label>
      <label>날짜
        <input type="date" name="date" value={form.date} onChange={onChange} />
      </label>
      <label>시간
        <input type="time" name="time" value={form.time} onChange={onChange} />
      </label>

      <br />
      <button type="button" onClick={onClick}>예약하기</button>
    </form>
  );
}

export default ReservationForm;