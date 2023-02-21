
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
 * JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 으로 감싸서 보여준다.

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