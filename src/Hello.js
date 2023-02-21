import React from "react";
/*
 * 리액트 컴포넌트를 만들 때 import React from "react";를 통해서 리액트를 불러와야함.
 * 리액트 컴포넌트는 함수형태로도, 클래스 형태로도 작성 할 수 있다
 *  * 리액트 컴포넌트에서는 XML형시그이 값을 반환해 줄 수 있는데 이를 JSX라 부른다.
 */

function Hello() {
    return <div>안녕</div>
}

export default Hello;
/* 
 * 이 코드는 Hello라는 컴포넌트를 보내겠다는 의미로, 이렇게 하면 다른 컴포넌트에서 불러와서 사용 할 수 있다.
 */