import React, { 
  // useRef,
  useState 
} from 'react';
import './styles/app.css';

// import Postitem from './components/Postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: "JavaScript", body: "This is the programming lenguage"},
      {id: 2, title: "JavaScript", body: "This is the programming lenguage"},
      {id: 3, title: "JavaScript", body: "This is the programming lenguage"},
      {id: 4, title: "JavaScript", body: "This is the programming lenguage"}
    ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
    // console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <ClassCounter/> */}
      {/* <Postitem post={{id: 1, title: "JavaScript", body: "This is the programming lenguage"}}/> */}
      <form>

        {/* Управлаемый компонент */}
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)} 
          type='text'
          placeholder='Название поста'
        />

        <MyInput 
          value={body}
          onChange={e => setBody(e.target.value)}
          type='text'
          placeholder='Описание поста'
        />

        {/* Неуправляемый компонент
        <MyInput 
          ref={bodyInputRef}
          type='text'
          placeholder='Описание поста'
        /> */}

        <MyButton onClick={addNewPost}>Добавить запись</MyButton>
      </form>

      <PostList posts={posts} title={'Список постов'}/>
    </div>
  );
}

export default App;
