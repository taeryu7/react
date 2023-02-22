
//함수형 업데이트
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
  // onIncrease 와 onDecrease 에서 setNumber 를 사용 할 때 그 다음 상태를 파라미터로 넣어준것이 아니라, 값을 업데이트 하는 함수를 파라미터로 넣음.
  // 
}

export default Counter;


/*
// 동적인 값 끼얹기, UseState
import React, { useState } from 'react'; // 이 코드는 리액트 패키지에서 useState 라는 함수를 호출한다.

function Counter() {
  const [number, setNumber] = useState(0);
  // useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출
  // 함수를 호출해주면 배열이 반환되는데, 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
 
  // 원래는 이래야되지만
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];

  // 배열 비구조화 할당을 통해서 아래와 같이 각 원소를 추출함.
  const onIncrease = () => {
    setNumber(number + 1);
  }

  const onDecrease = () => {
    setNumber(number - 1);
  }
  // Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정


  return (
    <div>
      <h1>{number}</h1> 
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
// 컴포넌트에서 동적인 값을 상태(state)라고 부름. 리액트에 useState 라는 함수가 있는데, 이것을 사용하면 컴포넌트에서 상태를 관리 할 수 있다.
*/

/*
// 이벤트설정
import React from 'react';

function Counter() {
  const onIncrease = () => {
    console.log('+1')
  }
  const onDecrease = () => {
    console.log('-1');
  }
  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
export default Counter;
// 여기서 onIncrease 와 onDecrease 는 화살표 함수를 사용하여 구현
// 리액트에서 엘리먼트에 이벤트를 설정해줄때 on이벤트이름={실행하고싶은함수} 형태로 설정해주어야함
// 여기서 주의할점은, 함수형태를 넣어주어야하지, 함수를 아래과 같이 실행하면 안됨.
// onClick={onIncrease()} 이렇게 하면 렌더링 시점에서 함수가 호출되어버려서 이벤트를 설정할때 함수타입의 값을 널어주어야한다.
*/

/*
// 콘솔에서 바뀌는값 관리
import React from "react";

function Counter() {
    return (
        <div>
            <h1>0</h1>
            <button>+1</button>
            <button>-1</button>
        </div>
    );
}

export default Counter;
// 16.8부터 hooks라는 기능이 도입되면서 함수형 컴포넌트에서 상태관리가 가능해짐.
*/