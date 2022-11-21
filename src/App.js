import React, { 
    useEffect,
    // useRef,
    useState,
    // useMemo 
} from 'react';
import './styles/app.css';

// import Postitem from './components/Postitem';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import PostService from './API/PostService';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import Loader from './components/UI/Loader/Loader';

// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';

function App() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setPostsLoading] = useState(false)

    async function fetchPosts() {
        setPostsLoading(true)
        setTimeout(async () => {
            const posts = await PostService.getAll()
            setPosts(posts)
            setPostsLoading(false)
        }, 1000);
    }

    useEffect(() => {
        fetchPosts()
    }, [])

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
            {isPostsLoading 
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            }
        </div>
    )
}

export default App;
