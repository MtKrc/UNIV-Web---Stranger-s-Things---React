const BASEURL = "https://strangers-things.herokuapp.com/api/2301-FTB-PT-WEB-PT";

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${BASEURL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await response.json();
    return data.posts;
  } catch (error) {
    console.error("!!Error Fetching Posts!!:", error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASEURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const { data } = await response.json();
    return data.token;
  } catch (error) {
    console.error("!! Error Registering User !!:", error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASEURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("!! Error logging in User !!:", error);
  }
};

export const fetchUser = async (token) => {
  try {
    const response = await fetch(`${BASEURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("!! Error Fetching User (users/me) !!", error);
  }
};

export const createPost = async (
  token,
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    const response = await fetch(`${BASEURL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("POST /posts failed:", error);
  }
};


export const deletePost = async (token, postId) => {
  try {
    await fetch(`${BASEURL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("DELETE /posts/:postId failed:", error);
  }
};

export const createMessage = async (token, postId, content) => {
  try {
    const response = await fetch(`${BASEURL}/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    });
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("POST /posts/:postId/messages failed:", error);
  }
};