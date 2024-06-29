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

// 할일 전체 목록 조회

// todoItems 배열의 전체 객체를 출력한다.
app.get ('/todo-items', (req,res) =>{
    res.send({todoItems});
});

// todoItems 배열에서 지정한 id 를 가진 객체를 하나 출력한다.
app.get('/todo-items/:id', (req,res)=>
{
  const {id} = req.params;
  const selectedTodoItemById = todoItems.find((item) => item.id === Number(id));
  res.send(selectedTodoItemById);
})

// todoItems 배열에서 지정한 title keyword 를 가진 객체를 모두 출력한다.
app.get('/todo-items/search/:keyword',(req,res) =>{
  const{keyword} = req.params;
  const selectedTodoItemByKeyword = todoItems.filter((item) => item.title === keyword);
  res.send(selectedTodoItemByKeyword);
});


app.listen(port, () => {
  console.log(port, "포트로 연결되었습니다.");
});