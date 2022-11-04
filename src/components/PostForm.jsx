import React from "react";
import { useState } from "react";
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost);
        setPost({title: '', body: ''})
    };

    return (
        <form>
            {/* Управлаемый компонент */}
            <MyInput 
                value={post.title}
                // onChange={e => setTitle(e.target.value)}
                onChange={e => setPost({...post, title: e.target.value})} 
                type='text'
                placeholder='Название поста'
            />
            <MyInput 
                value={post.body}
                // onChange={e => setBody(e.target.value)}
                onChange={e => setPost({...post, body: e.target.value})}
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
    );
}

export default PostForm;