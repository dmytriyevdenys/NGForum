import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PostSmall } from "../components/Posts/PostSmall/PostSmall"
import { getMyPosts } from "../redux/postsSlice"


const Profile = () => { 
const dispatch = useDispatch()
const myPosts = useSelector (state => state.posts.myPosts)
const userId = useSelector(state => state.auth.authUser.id)
const posts = useSelector(state => state.posts.posts)

const test = posts.map(post => {
    if (post.owner.id === userId) {
        return post;
    }
});
    return ( 
        <div>
         {test && test.map(post => (
                <PostSmall 
                 key={post.id}
                 title={post.title}
                 body={post.body}
                 images={post.images}
                 answers={post.answers}
                 />
         ))}
        </div>
    )
}

export default Profile