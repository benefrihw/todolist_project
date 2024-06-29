import cors from 'cors';
import express from "express";
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const users = [
    {
      id: 1,
      email: '1111',
      password: '1111',
      role: 'student',
      name: '1111',
    },
    {
      id: 2,
      email: '2222',
      password: '2222',
      role: 'student',
      name: '2222',
    },
  ];
  
  const todoItems = [
    {
      id: 1,
      userId: 1,
      title: '할일1',
      doneAt: null,
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 2,
      userId: 1,
      title: '할일1',
      doneAt: null,
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 3,
      userId: 1,
      title: '할일1',
      doneAt: null,
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 4,
      userId: 1,
      title: '할일1',
      doneAt: null,
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 5,
      userId: 2,
      title: '할일2',
      doneAt: null,
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 6,
      userId: 2,
      title: '할일2',
      doneAt: null,
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 7,
      userId: 2,
      title: '할일2',
      doneAt: null,
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
    {
      id: 8,
      userId: 2,
      title: '할일2',
      doneAt: null,
      createdAt: '2021-08-01',
      updatedAt: '2021-08-01',
    },
  ];

/** 로그인 API */
app.post('/sign-in', (req, res) => {
// email, password 가져오기
const { email, password } = req.body;

// 모든 항목 입력 확인
if ( !email || !password ) {
res.status(400).json({ message: "모든 값을 입력해주세요."});
return;
}

// email, 비밀번호 일치여부 확인하기
const existingUser = users.find((user) => user.email === email && user.password === password);
if ( !existingUser ) {
  res.status(400).json({ message: "입력값이 올바르지 않습니다."});
  return;
}

// 성공 메세지 반환
res.status(200).json({ message: "로그인 성공했습니다."});
return;
})


app.listen(port, () => {
  console.log(port, "포트로 연결되었습니다.");
});