import React, { 
  // useRef,
    useState 
} from 'react';
import './styles/app.css';

// import Postitem from './components/Postitem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';

function App() {

    const [posts, setPosts] = useState([
            {id: 1, title: "AJavaScript1", body: "DThis is the programming lenguage"},
            {id: 2, title: "DJavaScript2", body: "AThis is the programming lenguage"},
            {id: 3, title: "CJavaScript3", body: "BThis is the programming lenguage"},
            {id: 4, title: "BJavaScript4", body: "CThis is the programming lenguage"}
    ]);

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    const [post, setPost] = useState({title: '', body: ''});
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = getSortedPosts();

  // const bodyInputRef = useRef();

    // const addNewPost = (e) => {
    //     e.preventDefault()
    //     // const newPost = {
    //     //   id: Date.now(),
    //     //   title,
    //     //   body
    //     // }
    //     // setPosts([...posts, newPost]);
    //     setPosts([...posts, {...post, id: Date.now()}]);
    //     setPost({title: '', body: ''})
    //     // setTitle('');
    //     // setBody('');
    //     // console.log(bodyInputRef.current.value);
    // };

    function getSortedPosts() {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        } 
        return posts
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    };

    return (
        <div className="App">
            {/* <Counter/> */}
            {/* <ClassCounter/> */}
            {/* <Postitem post={{id: 1, title: "JavaScript", body: "This is the programming lenguage"}}/> */}
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}></hr>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Поиск'
                />
                <MySelect 
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    options={[
                        {value: 'title', name: 'По имени'},
                        {value: 'body', name: 'По содержанию'}
                    ]}
                >
                </MySelect>
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={sortedPosts} title={'Список постов'}/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>
            }
        </div>
    );
}

export default App;
