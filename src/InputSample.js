

// input 에 입력하는 값이 하단에 나타나게 하고, 초기화 버튼을 누르면 input 이 값이 비워지도록 구현
// useState를 사용해서 input 의 onChange 라는 이벤트를 사용
// 이벤트에 등록하는 함수에서는 이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있는데,
// 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게
// 이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있다.
// 이 값을 useState 를 통해서 관리를 해주면 됨.
import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
// input 의 상태를 관리할 때에는 input 태그의 value 값도 설정해주는 것이 중요
// 그렇게 해야, 상태가 바뀌었을때 input 의 내용도 업데이트됨

/*
// input 상태 관리하기
import React from 'react';

function InputSample() {
  return (
    <div>
      <input />
      <button>초기화</button>
      <div>
        <b>값: </b>
      </div>
    </div>
  );
}

export default InputSample;
*/