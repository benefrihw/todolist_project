import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(port, "포트로 연결되었습니다.");
});

// 포트연결