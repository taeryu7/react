

/*
// 클래스형 컴포넌트
import React, { Component } from 'react';

class Counter extends Component {
  handleIncrease() {
    console.log('increase');
    console.log(this);
  }

  handleDecrease() {
    console.log('decrease');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;

// 이렇게 클래스 내부에 종속된 함수를 '메서드' 라고 부른다.
// 클래스에서 커스텀메서드를 만들 때는 보통 이름을 handle... 이라고 이름을 짓는다.
// 정해진 규칙은 아니라서 꼭 지킬 필요는 없다.
// 위 코드로 handleIncrease 에서 this 를 콘솔에 출력하면 undefined 가 나타나게 된다.
// 이렇게 되는 이유는, 우리가 만든 메서드들을 각 button 들의 이벤트로 등록하게 되는 과정에서 각 메서드와 컴포넌트 인스턴스의 관계가 끊겨버리기 때문이다.
// 이를 해결하기 위해서 할 수 있는 방법은 총 3가지 방법이 있다.


// 1. 클래스의 생성자 메서드 constructor 에서 bind 작업을 해준다. (아래코드 참조)
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    console.log('increase');
    console.log(this);
  }

  handleDecrease() {
    console.log('decrease');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;

// 함수의 bind 를 사용하면, 해당 함수에서 가르킬 this 를 직접 설정해줄 수 있다.
// constructor 에서는 props 파라미터로 받아오고 super(props) 를 호출해주어야 하는데,
// 클래스가 컴포넌트로서 작동 할 수 있도록 해주는 Component 쪽에 구현되어있는 생성자 함수를 먼저 실행해주고, 우리가 할 작업을 하겠다 라는 것을 의미한다.
// 이 방법이 가장 일반적인 방법이고, 또 다른 방법은 커스텀 메서드를 선언 할 때 화살표 함수 문법을 사용해서 작성한다. (아래코드 참조)
mport React, { Component } from 'react';

class Counter extends Component {
  handleIncrease = () => {
    console.log('increase');
    console.log(this);
  };

  handleDecrease = () => {
    console.log('decrease');
  };

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;

// 클래스형 컴포넌트에서 화살표 함수를 사용해서 메서드를 구현 하는 것은 클래스에 특정 속성을 선언 할 수 있게 해주는 class-properties 라는 문법을 사용하는데,
// 이 문법은 아직 정식 자바스크립트 문법이 아니다.
// CRA 로 만든 프로젝트에는 적용이 되어있는 문법이기 때문에 바로 사용 할 수 있다.
// CRA 로 만든 프로젝트에서는 커스텀 메서드를 만들 때 이 방법을 많이 사용한다, 그리고 가장 편한 방법이다.

// 세번째는 onClick 에서 새로운 함수를 만들어서 전달을 하는 것인데 자주 사용하지 않는방법이다.
// 렌더링 할 때마다 함수가 새로 만들어지기때문에 나중에 컴포넌트 최적화 할 때 까다롭다.
return (
  <div>
    <h1>0</h1>
    <button onClick={() => this.handleIncrease()}>+1</button>
    <button onClick={() => this.handleDecrease()}>-1</button>
  </div>
);

// 상태선언하기
// 클래스형 컴포넌트에서 상태를 관리 할 때에는 state라는 것을 사용한다.
//  state 를 선언 할 때에는 constructor 내부에서 this.state 를 설정 하면된다.

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  handleIncrease = () => {
    console.log('increase');
    console.log(this);
  };

  handleDecrease = () => {
    console.log('decrease');
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
// 클래스형 컴포넌트의 state는 무조건 객체형태여야한다.
// render 메서드에서 state를 조회할려면 this.state를 조회하면 된다.
// 화살표 함수 문법을 사용하여 메서드를 작성 할 수 있게 해줬던 class-properties 문법이 적용되어 있다면,
// 굳이 constructor 를 작성하지 않고도 다음과 같이 state 를 설정해줄 수 있다.

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0
  };
  handleIncrease = () => {
    console.log('increase');
    console.log(this);
  };

  handleDecrease = () => {
    console.log('decrease');
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;


// 상태 업데이트하기
// 상태를 업데이트해야 할 때에는 this.setState 함수를 사용한다.

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0
  };
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;

// this.setState 를 사용 할 떄는 위 코드 처럼 객체 안에 업데이트 하고 싶은 값을 넣어서 호출해주면 되는데, 만약 다음과 같이 state에 다른값이 있다면
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;

// this.setState 를 할 때 파라미터에 넣는 객체에 fixed 값을 넣어주지 않아도 값이 유지된다.
// 하지만, 클래스형 컴포넌트의 state 에서 객체 형태의 상태를 관리해야 한다면, 불변성을 관리해줘가면서 업데이트를 해야한다. (아래는 예제)
state = {
  counter: 0,
  fixed: 1,
  updateMe: {
    toggleMe: false,
    dontChangeMe: 1
  }
};

handleToggle = () => {
  this.setState({
    updateMe: {
      ...this.state.updateMe,
      toggleMe: !this.state.updateMe.toggleMe
    }
  });
};

// setState 의 함수형 업데이트
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;
// 함수형 업데이트는 보통 한 함수에서 setState를 여러번에 걸쳐서 사용하는 경우에 쓰면 유용하다.
// 아래 코드는 setState 를 두번 사용하면서 state.counter 값에 1을 더해주는 작업을 두번주지만, 실제로 2가 더해지지는 않는다.

handleIncrease = () => {
  this.setState({
    counter: this.state.counter + 1
  });
  this.setState({
    counter: this.state.counter + 1
  });
};

// 다음과 같이 함수형 업데이트로 처리해주면 값이 2씩 더해진다.

import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;

//업데이트 할 객체를 넣어주는 setState 에서 2씩 더해지지 않는 이유는 setState 를 한다고 해서 상태가 바로 바뀌는게 아니기 때문이다.
// setState 는 단순히 상태를 바꾸는 함수가 아니라 상태로 바꿔달라고 요청해주는 함수로 이해를 해야한다.
// 성능적인 이유 때문에 리액트에서는 상태가 바로 업데이트 되지 않고 비동기적으로 업데이트가 된다.

//만약 상태가 업데이트 되고 나서 어떤 작업을 하고 싶다면 아래처럼 setState 의 두번째 파라미터에 콜백함수를 넣어줄 수도 있다.
mport React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(
      {
        counter: this.state.counter + 1
      },
      () => {
        console.log(this.state.counter);
      }
    );
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;
*/

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