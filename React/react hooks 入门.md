# react hooks 入门

> 官网地址：https://zh-hans.reactjs.org/docs/hooks-intro.html



掌握以下使用

+ useState
+ useEffect
+ useMemo
+ useCallback
+ 自定义一个 hook



```js
// login.js

import './App.css';
import {useState, useCallback} from 'react';

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleClick = useCallback(() => {
    const params = {
      username,
      password
    }
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(resp => resp.json())
    .then(res => {
      console.log(res)
    })
    console.log(params)
  }, [username, password])

  return (
    <div className="App">
      <label>
        用户名
        <input type="text" id="username" onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        密码
        <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <button onClick={handleClick}>提交</button>
    </div>
  );
}

export default App;

```

