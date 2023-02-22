
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

//key의 존재유무에 따른 업데이트 방식

/*
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