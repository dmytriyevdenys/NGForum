import { CreatePostSmall } from "../components/CreatePost/CreatePostSmall";
import { PostSmall } from "../components/Posts/PostSmall/PostSmall";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../redux/postsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading)
 
  useEffect(() => { 

    dispatch(getPosts());

  }, [dispatch]);

  return (
    <>
    <CreatePostSmall/>
    {loading ? (
      <div>Завантаження</div>
    ) : (
      <>  
        {posts.map(post => (
          <PostSmall 
          key={post.id}
          title={post.title}
          body={post.body}
          images={post.images}
          answers={post.answers}
          />
        ))}
      </>
    )}
  </>
  );
};

export default Home;
