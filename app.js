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

/** 내 정보 조회 API */
app.get('/users/me/:id', (req, res) => {
// id 값을 가져온다
const { id } = req.params;

// id가 일치하는 user를 찾는다
const user = users.find((user) => user.id === +id);

// user의 정보를 반환한다.
res.status(200).json(user)
return;
} )

app.listen(port, () => {
  console.log(port, "포트로 연결되었습니다.");
});