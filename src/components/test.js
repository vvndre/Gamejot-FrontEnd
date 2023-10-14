import React, { useEffect } from "react";
import cookie from "cookie";
import axios from "axios";

function Test() {
  const fetchPostByUser = () => {
    const cookies = cookie.parse(document.cookie);

    axios
      .get("http://localhost:3000/user/posts", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        // setGamesList(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchPostByUser();
  }, []);

  return <div>test</div>;
}

export default Test;
