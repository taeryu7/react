
// 클래스형 컴포넌트
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>0</h1>
        <button>+1</button>
        <button>-1</button>
      </div>
    );
  }
}

export default Counter;

/*
// useReducer 를 사용하여 상태 업데이트 로직 분리하기

// useReduce 이해하기
// 이전에 만든 사용자 리스트 기능에서의 주요 상태 업데이트 로직은 App 컴포넌트 내부에서 이루어졌다.
// 상태를 업데이트 할 때는 usestate 를 사용해서 새로운 상태를 설정했는데, 상태를 관리하게 될 때 useState를 사용하는것말고 다른 방법이 있다.
// useReducer 를 사용하는건데, 이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
// 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있다.

// reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수다.

function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState;
}

// reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.
// 여기서 action 은 업데이트를 위한 정보를 가지고 있다. 주로 type 값을 지닌 객체 형태로 사용하지만, 꼭 따라야 할 규칙은 따로 없다.

//액션의 예시
// 카운터에 1을 더하는 액션
{
  type: 'INCREMENT'
}
// 카운터에 1을 빼는 액션
{
  type: 'DECREMENT'
}
// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
  value: 'tester@react.com'
}
// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer 배우기',
    done: false,
  }
}
// 위에처럼 action 객체의 형태는 자유이지만, type 값을 대문자와 _ 로 구성하는 관습이 존재하기도 하지만, 꼭 따라야 할 필요는 없다.

// useReduce의 사용법
const [state, dispatch] = useReducer(reducer, initialState);
// 여기서 state 는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, dispatch 는 액션을 발생시키는 함수라고 이해하면된다.
// 함수는 다음과 같이 사용한다 : dispatch({ type: 'INCREMENT' }).
// useReducer 에 넣는 첫번째 파라미터는 reducer 함수이고, 두번째 파라미터는 초기 상태다.




import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
*/

/*
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
*/

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