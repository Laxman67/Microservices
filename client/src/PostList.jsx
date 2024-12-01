import { useEffect, useState } from 'react';
import { memo } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = useState({});
  const fetchPost = async () => {
    const res = await axios.get('http://localhost:4002/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPost = Object.values(posts);

  return (
    <>
      <h1>Posts</h1>
      <div className='d-flex flex-row flex-wrap justify-content-between'>
        {renderedPost.map((post) => {
          return (
            <div
              className='card'
              key={post.id}
              style={{ width: '30%', marginBottom: '20px' }}
            >
              <div className='card-body'>
                <h2>{post.title}</h2>

                <CommentList comments={post.comments} />
                <CommentCreate postId={post.id} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(PostList);
