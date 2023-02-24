


// Context AOI를 사용한 전역 값 관리
import React from 'react';

const User = React.memo(function User({ user }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => {}}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => {}}>삭제</button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);



/*
// React.memo 를 사용한 컴포넌트 리렌더링 방지
import React from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);
// deps 에 users 가 들어있기 때문에 배열이 바뀔때마다 함수가 새로 만들어지는건, 당연하다.
// 이걸 최적화하고 싶다면 deps 에서 users 를 지우고, 함수들에서 현재 useState 로 관리하는 users 를 참조하지 않게 한다.
// 함수형 업데이트를 하게 되면, setUsers 에 등록하는 콜백함수의 파라미터에서 최신 users 를 참조 할 수 있기 때문에 deps 에 users 를 넣지 않아도됨.
*/

/*
//useEffect를 사용해서 마운트/언마운트/업데이트 할 작업 설정하기

// deps 파라미터를 생략하기
// deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출이 됩니다.
import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log(user);
  });
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
// 참고로 리액트 컴포넌트는 기본적으로 부모컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링이 된. 바뀐게 없어도.
// 실제 DOM 에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만 해당한다. 하지만, Virtual DOM 에는 모든걸 다 렌더링하고 있다.
// 나중에는, 컴포넌트를 최적화 하는 과정에서 기존의 내용을 그대로 사용하면서 Virtual DOM 에 렌더링 하는 리소스를 아낄 수도 있다.
*/

/*
// deps에 특정값 넣기
// deps에 특정값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이되고, 지정한 값이 바뀔 떄 도 호출이 된다.
// deps 안에 특정 값이 있다면 언마운트시에도 호출이 되고, 값이 바뀌기 직전에도 호출이 된다.

import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
export default UserList;
// useEffect 안에서 사용하는 상태나, props 가 있다면, useEffect 의 deps 에 넣어주어야 합니다. 그렇게 하는게, 규칙이다.
// 만약 useEffect 안에서 사용하는 상태나 props 를 deps 에 넣지 않게 된다면,
// useEffect 에 등록한 함수가 실행 될 때 최신 props / 상태를 가르키지 않게된다
*/

/*

//마운트/언마운트
import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;

// useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣는다.
// 만약에 deps 배열을 비우게 된다면, 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출된다.
// useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부른다.
// cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데, deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됨.

// 마운트시에 하는 작업
// props 로 받은 값을 컴포넌트의 로컬 상태로 설정
// 외부 API 요청 (REST API 등)
// 라이브러리 사용 (D3, Video.js 등...)
// setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약

// 언 마운트시에 하는 작업
// setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
// 라이브러리 인스턴스 제거
*/

/*
// 배열에 항목 수정하기
import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
*/

/*
// 배열의 항목 제거하기
import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}
export default UserList;
// 위 코드에서 user컴포넌트의 삭제버튼이 클릭 될 때 user.id 값을 앞으로 props로 받아올 onRemove 함수의 파라미터로 넣어서 호출해야한다.
// onRemove는 "id 가 __인 객체를 삭제해라" 라는 역할을 가지고있다. 
// onRemove 함수는 UserList에도 전달 받을 것이며, 이를 그대로 User 컴포넌트에 전달해줄것이다.
// 불변성을 지키면서 특정 원소를 배열에서 제거하기위해서는 filter 배열 내장 함수를 사용하는것이 가장 편하다.
// 이 함수는 배열에서 특정 조건을 만족하는 원소들만 추출해서 새로운 배열을 만들어준다.
*/

/*
// useRef 로 컴포넌트 안의 변수 만들기
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
*/

/*
// 배열 렌더링 하기
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
*/

/*
// 배열안의 원소가 가지고있는 고유한 값이 없다면 map() 함수를 사용할때 설정하는 콜백함수의 두번째 파라미터 index를 key로 사용하면된다
<div>
  {users.map((user, index) => (
    <User user={user} key={index} />
  ))}
</div>
// 만약 배열을 렌더링 할때 key 설정을 하지 않게된다면 기본적인 배열의 index 값을 key로 사용하게되고 아래처럼 경고메시지가 뜬다.
// 경고가 뜨는 이유는 각 원소에 key가 있어야만 배열이 업데이트 될 때 효율적으로 렌저딩이 될 수 있기 때문이다.
*/

/*
//key의 존재유무에 따른 업데이트 방식

예를들어 이런 배열이 있다고 가정 할 시
const array = ['a', 'b', 'c', 'd'];

위 배열을 다음과 같이 렌더링을 하게 되다고 가정하면
array.map(item => <div>{item}</div>);
위 배열의 b 와 c 사이에 z 를 삽입하게 된다면, 리렌더링을 하게 될 때 <div>b</div> 와 <div>c</div> 사이에 새 div태그를 삽입하는게 아리하,
기존의 c 가 z 로바뀌고, d 는 c 로 바뀌고, 맨 마지막에 d 가 새로 삽입됨.

그 다음에 a 를 제거하게 된다면, 기존의 a 가 b 로 바뀌고, b 는 z 로 바뀌고, z는 c로 바뀌고, c는 d 로바뀌고, 맨 마지막에 있는 d 가 제거된다.
이 방식대로 하면 비효율적이지만 위에 간략하게 설명한대로 key 가 있다면 작업방식이 개선된다.

객체에 아래예제와 같이 key로 사용 할 수 있는 고유 값이 있고,
[
  {
    id: 0,
    text: 'a'
  },
  {
    id: 1,
    text: 'b'
  },
  {
    id: 2,
    text: 'c'
  },
  {
    id: 3,
    text: 'd'
  }
];
를 렌더링한다면
array.map(item => <div key={item.id}>{item.text}</div>);

배열이 업데이트 될 떄 key 가 없을 때 처럼 비효율적으로 업데이트 하는 것이 아니라,
수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제한다.

때문에, 배열을 렌더링 할 때에는 고유한 key 값이 있는것이 중요하며, 
만약에 배열안에 중복되는 key 가 있을 때에는 렌더링시에 오류메시지가 콘솔에 나타나게 되며, 업데이트가 제대로 이루어지지 않게 된다.

*/

/*
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}

export default UserList;
// 위 방식대로 하면 렌더링은 되는데 콘솔에서는 에러가 발생한다.
// 리액트에서 배열을 렌더링 할 때 key 라는 props를 설정해야함.
// key 값은 각 원소들이 가지고있는 고유값으로 설정을 해야하고 지금의 경우는 id 가 고유값이다.
*/

/*
import React from 'react';

function UserList() {
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
  return (
    <div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[1].email})</span>
      </div>
    </div>
  );
}
export default UserList;
// 이렇게 재사용되는 코드를 일일히 넣으면 좋지않으니 컴포넌트를 재사용 할 수 있게 위에서 새로 만들어보겠음.
*/