import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className='container'>
      <h2>Add Post</h2>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
}

export default App;