import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [], isFetching: false, error: null };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            data: result,
            isFetching: true,
          });
        },
        (error) => {
          this.setState({
            isFetching: true,
            error,
          });
        }
      );
  }

  render() {
    const { data, isFetching, error } = this.state;

    if (error) {
      return <div>Error {error.message}</div>;
    } else if (!isFetching) {
      return <div>Loading...</div>;
    } else {
      const userSet = new Set();
      data.forEach((item) => {
        userSet.add(item.userId);
      });
      let user = Array.from(userSet);
      console.log(userSet);
      const content = user.map((user) => {
        return (
          <div key={user}>
            <h1>User: {user}</h1>
            {data.map((post) => {
              if (post.userId === user) {
                return (
                  <div key={post.id}>
                    <h2>id: {post.id}</h2>
                    <h3>Title:{post.title}</h3>
                    <p>text: {post.body}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        );
      });

      return <div>{content}</div>;
    }
  }
}

export default Posts;
