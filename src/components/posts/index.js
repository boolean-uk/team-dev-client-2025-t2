import { useEffect, useState } from 'react';
import Post from '../post';
import { getPosts } from '../../service/apiClient';

const Posts = ({ searchVal }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  useEffect(() => {
    const filtered = posts.filter((post) => {
      const fullName = `${post.author.firstName} ${post.author.lastName}`.toLowerCase();
      const content = post.content.toLowerCase();
      const searchTerm = searchVal;
      console.log(filteredPosts);
      return fullName.includes(searchTerm) || content.includes(searchTerm);
    });
    setFilteredPosts(filtered);
  }, [searchVal, posts]);

  return (
    <>
      {filteredPosts.map((post) => {
        return (
          <Post
            key={post.id}
            name={`${post.author.firstName} ${post.author.lastName}`}
            date={post.createdAt}
            content={post.content}
            comments={post.comments}
          />
        );
      })}
    </>
  );
};

export default Posts;
