
// 배열에 항목 수정하기
// 아래코드는 User 컴포넌트에 계정명을 클릭했을 때 색상이 초록색으로 바뀌고, 다시누르면 검정색으로 바뀌게 구현하는 코드다.
// 배열의 불변성을 유지하면서 배열을 업데이트 할 떄 에도 map함수를 사용 할 수 있다.
// id값을 비쇼해서 id가 다르면 그대로 두고, 같다면 active 값을 반전시키도록 구현을 하면 된다.

import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;

/*
//배열에 항목 제거하기
import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;
*/

/*
// 배열에 변화를 줄 때 객체와 마찬가지로 불변성을 지켜주어야한다. 그렇기 때문에 배열의 push, splice, sort등의 함수를 쓰면 안된다.
// 만약 사용해야 된다면, 기존의 배열을 한번 복사하고 나서 사용해야한다.
// 불변성을 지키면서 배열에 새 항목을 추가하는 방법은 두가지가 있다.
// 첫번째는 spread 연산자를 사용한다.

import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}
export default App;


// 또 다른 반법으로은 concat 함수를 사용하는 것이다. concat함수는 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열은 만들어준다.
import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
*/

/*
useRef 로 컴포넌트 안의 변수 만들기

컴포넌트에서 특정 DOM 을 선택해야 할 때, ref 를 사용해야 한다고 배웠는데, 
함수형 컴포넌트에서 이를 설정 할 때 useRef 를 사용하여 설정한다고 배웠다.

useRef Hook 은 DOM 을 선택하는 용도 외에도, 다른 용도가 한가지 더 있는데, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는 것.
useRef 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다.

리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회 할 수 있는 반면,
useRef 로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있다.

이 변수를 사용하여 다음과 같은 값을 관리 할 수 있다.

setTimeout, setInterval 을 통해서 만들어진 id
외부 라이브러리를 사용하여 생성된 인스턴스
scroll 위치
우리는, App 컴포넌트에서 useRef 를 사용하여 변수를 관리해볼건데 용도는 우리가 앞으로 배열에 새 항목을 추가할건데, 
새 항목에서 사용 할 고유 id 를 관리하는 용도로 사용된다.


지금은 우리가 UserList 컴포넌트 내부에서 배열을 직접 선언해서 사용을 하고 있는데, 이렇게 UserList 에서 선언해서 사용하는 대신
이 배열을 App 에서 선언하고 UserList 에게 props 로 전달을 해보자.

import React from 'react';

import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  return <UserList users={users} />;
}

export default App;
// useRef() 를 사용 할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이된다.
// 이 값을 수정 할 때 .current 값을 수정하면 되고, 조회할 때는 .current를 조회하면 된다.
*/

/*
import React from "react";
import UserList from "./UserList";

function App() {
  return (
    <UserList />
  );
}
export default App;
*/

/*
import React from 'react';
import InputSample from './InputSample';

function App() {
  return (
    <InputSample />
  );
}

export default App;
*/

/*
// Counter.js를 위한 코드
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <Counter />
  );
}

export default App;
*/

/*
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
// props 값 설정을 생략하면 ={true}
// 컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 true 로 설정한 것으로 간주
// 이렇게 isSpecial 이름만 넣어주면 isSpecial={true} 와 동일한 의미입니다.
/

/*
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
  )
}
//true는 자바스크립트 값이라 중괄호로 표시.
// 컴포넌트 내에서 isSpecial이 true냐 falde냐에 따라 컴포넌트 좌측에 *표시하기
// 위에철럼 처리하는 기본적인 방법은 삼항연산자 사용

export default App;
*/

/*
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
*/

/*
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </>
  );
}

export default App;
*/

/*
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" color="red"/>
  );
}

export default App;
*/

/*
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" />
  );
}

export default App;
*/

/*
import React from 'react';
import Hello from './Hello';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      { 주석은 화면에 보이지 않습니다 
       중괄호로 감싸지 않으면 화면에 보입니다 
      
      <Hello 
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
// JSX 내부주석은 { 이런형태로  작성됨
*/

/*
import React from 'react';
import Hello from './Hello';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
/*

/*import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
    </>
  );
}

export default App;
// JSX에서 태그에 style 과 CSS class를 설정하는 방법은 HTML에서 설정하는 방법과는 다름
// 인라인 스타일은 객체형태로 작성해야하며, background-color 처럼 - 로 구분되어 있는 이름들은 backgroundColor처럼 camleCase형태로 네이밍 해주어야함
*/

/*
import React from 'react';
import Hello from './Hello';


function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <br />
    </div>
  );
}

export default App;

// react에서는 태그는 꼭 닫혀있어야 한다. 그렇지 않으면 오류발생.
// 태그를 열었으면 반드시 <div></div> 이렇게 닫아야한다.
// 태그와 태그 사이에 내용이 없어도 Self Closing태그라는것을 사용해야함.
// 현재 Hello 컴포넌트를 사용할 때도 Self Closing태그를 썻는데 열리고 바로 닫히는 태그를 의미.
*/

/* 
 import React from 'react';
 import Hello from './Hello';

 function App() {
  return (
    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}

 export default App;
// 태그를 작성 할 때 이름 없이 작성을 하게 되면 Fragment 가 만들어지는데, Fragment 는 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않는다.
 */

 /*
 JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여준다.

 import React from 'react';
 import Hello from './Hello';

 function App() {
   const name = 'react';
   return (
     <>
       <Hello />
       <div>{name}</div>
     </>
  );
}
 export default App;

 */