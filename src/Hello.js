
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
// isSpecial && <b>*</b> 의 결과는 isSpecial 이 false 일땐 false 이고, isSpecial이 true 일 땐 <b>*</b> 가된다.
// https://learnjs.vlpt.us/useful/03-short-circuiting.html <--모르면 단축평가논리법 보고 참고


/*
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
// isSpecial 값이 true라면 <b>*</b>를, 그렇지 않다면 null이 나오게 만듬.
// JSX에서 null, false, undefined를 렌더링하게된다면 아무것도 나타나지 않는다.
*/

/*
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
// 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 겂을 설정하고 싶다면 컴포넌트에 defaultprops 라는 값을 설정하면 된다.
*/

/*import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

export default Hello;
// props 내부값을 조회 할 때 마다 props. 를 입력하고 있는데, 함수의 파라미터에서 비구조화 할당(분해구조) 문법을 쓰면 코드 간결하게 작성 가능.
*/

/*
import React from 'react';

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>
}

export default Hello;
// 컴포넌트에게 전달되는 props는 파라미터를 통해서 조회할 수 있다.
// props는 객체형태로 전달되며, 만약 name값을 조회하고 싶으면 props.name을 조회하면 된다.
*/


/*
import React from "react";

// 리액트 컴포넌트를 만들 때 import React from "react";를 통해서 리액트를 불러와야함.
// 리액트 컴포넌트는 함수형태로도, 클래스 형태로도 작성 할 수 있다
// 리액트 컴포넌트에서는 XML형시그이 값을 반환해 줄 수 있는데 이를 JSX라 부른다.
 

function Hello() {
    return <div>안녕</div>
}

export default Hello;
// 이 코드는 Hello라는 컴포넌트를 보내겠다는 의미로, 이렇게 하면 다른 컴포넌트에서 불러와서 사용 할 수 있다.
*/