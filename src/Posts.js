import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect runs once on component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.slice(0, 10).map(post => (
          <li key={post.id} style={{ margin: '10px 0', borderBottom: '1px solid #ccc' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
