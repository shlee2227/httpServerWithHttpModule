const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const createUser = (req, res) => {
  const { id, name, email, password } = req.body.data;
  users.push({
    id,
    name,
    email,
    password,
  });
  res.json({ message: "user-Created" });
};

const createPost = (req, res) => {
  const { id, title, content, userId } = req.body.data;

  posts.push({
    id,
    title,
    content,
    userId,
  });
  res.json({ message: "post_Created" });
};

const viewPostList = (req, res) => {
  const data = [];

  for (i = 0; i < posts.length; i++) {
    const detectedUserId = posts[i].userId;
    const detectedPostingId = posts[i].id;

    const userIndex = users.findIndex((obj) => obj.id === detectedUserId);
    const postIndex = posts.findIndex((obj) => obj.id === detectedPostingId);

    data.push({
      userID: users[userIndex].id,
      userName: users[userIndex].name,
      postingId: posts[postIndex].id,
      postingTitle: posts[postIndex].title,
      postingContent: posts[postIndex].content,
    });
  }

  res.json({ data });
};

module.exports = { createUser, createPost, viewPostList };
