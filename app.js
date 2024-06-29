import cors from "cors";
import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    email: "1111",
    password: "1111",
    role: "student",
    name: "1111",
  },
  {
    id: 2,
    email: "2222",
    password: "2222",
    role: "student",
    name: "2222",
  },
];

const todoItems = [
  {
    id: 1,
    userId: 1,
    title: "할일1",
    doneAt: null,
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
  {
    id: 2,
    userId: 1,
    title: "할일1",
    doneAt: null,
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
  {
    id: 3,
    userId: 1,
    title: "할일1",
    doneAt: null,
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
  {
    id: 4,
    userId: 1,
    title: "할일1",
    doneAt: null,
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
  {
    id: 5,
    userId: 2,
    title: "할일2",
    doneAt: null,
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
  {
    id: 6,
    userId: 2,
    title: "할일2",
    doneAt: null,
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
  {
    id: 7,
    userId: 2,
    title: "할일2",
    doneAt: null,
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
  {
    id: 8,
    userId: 2,
    title: "할일2",
    doneAt: null,
    createdAt: "2021-08-01",
    updatedAt: "2021-08-01",
  },
];

/** 회원가입 */
// 작성 정보 가져오기
app.post("/sign-up", (req, res) => {
  const { email, password, rePassword, role, name } = req.body;

  // 전부 입력되었는지 확인하기
  if (!email || !password || !rePassword || !role || !name) {
    res.status(400).json({ message: "모든 항목을 입력해주세요." });
    return;
  }

  // 비밀번호 같은값 확인
  if (password !== rePassword) {
    res.status(400).json({ message: "입력한 비밀번호가 일치하지 않습니다." });
    return;
  }

  // 이메일 중복 확인
  const existingEmail = users.find((user) => user.email === email);
  if (existingEmail) {
    res.status(400).json({ message: "이미 등록된 이메일입니다." });
    return;
  }

  // newUsers에 정의하기
  const id = users.length === 0 ? 1 : users[users.length - 1].id + 1;
  const newUser = {
    id,
    email,
    password,
    role,
    name,
  };

  // users에 추가하기
  users.push(newUser);

  // 완료 후 반환하기
  res.status(200).json({ message: "회원가입이 완료되었습니다." });
});

app.listen(port, () => {
  console.log(port, "포트로 연결되었습니다.");
});
