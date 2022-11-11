import React, { 
  // useRef,
    useState,
    useMemo 
} from 'react';
import './styles/app.css';

// import Postitem from './components/Postitem';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';

function App() {

    const [posts, setPosts] = useState([
            {id: 1, title: "AJavaScript1", body: "DThis is the programming lenguage"},
            {id: 2, title: "DJavaScript2", body: "AThis is the programming lenguage"},
            {id: 3, title: "CJavaScript3", body: "BThis is the programming lenguage"},
            {id: 4, title: "BJavaScript4", body: "CThis is the programming lenguage"}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            console.log("sort selected")
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } 
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Создать запись
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}></hr>
            <PostFilter 
                filter={filter} 
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
        </div>
    )
}

export default App;
