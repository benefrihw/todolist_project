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

//할 일 생성 api
app.post("/todo-items", (req, res) => {
  /*
  1. 할 일을 생성하기 위해서는 body로 어떤 걸 받는지 알아와야 한다.
  2. 생성된 할 일은 각자의 id를 부여받는다
  3. todoItems arr 안으로 생성한 todoItem을 넣는다.(구.분.할)
  */
  const { title } = req.body;
  const user = 1;

  if (!title) {
    res.status(401).json({ message: "할 일은 비워둘 수 없습니다." });
    return;
  }

  const newTodoItem = {
    /*
    이 식의 의미 : todoItems arr의(todoItems[])
    가장 마지막 index를 조회하고(todoItems[todoItems.length-1])
    가장 마지막 index가 있다면 그 index의 id를 확인한 뒤에 1을 더하고(삼항연산자)
    가장 마지막 index가 없다면 1을 아이템의 id로 설정해라
    */
    id: todoItems[todoItems.length - 1]
      ? todoItems[todoItems.length - 1].id + 1
      : 1,
    userId: user,
    title,
    doneAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  todoItems.push(newTodoItem);

  res.send(newTodoItem);
  return;
});

app.patch("/todo-items/:id", (req, res) => {
  /*
  1. 할 일을 수정하려면, 어떤 아이템을 수정할 건지 id를 알아야 한다.
  2. 여기서 할 수정은, doneAt가 null에서 현재 시간으로 바뀌는 것을 의미한다.
  3. 만약 doneAt가 null이 아닌 상태에서 patch를 하면, 다시 null로 돌아와야 한다.
  - 삼항연산자로 해볼까?
  */

  const { id } = req.params;

  const modifyItemIdx = todoItems.findIndex((item) => item.id === +id);
  const selectedItem = todoItems[modifyItemIdx];

  if (modifyItemIdx == -1) {
    res.status(404).json({ message: "찾으시는 아이템이 없습니다." });
    return;
  }

  todoItems.splice(modifyItemIdx, 1, {
    ...selectedItem,
    doneAt: selectedItem.doneAt === null ? new Date() : null,
  });

  res.send({ result: true, selectedItem });
  return;
});

app.delete("/todo-items/:id", (req, res) => {
  /*
  1. 아이템 id를 params로 받는다
  2. splice로 삭제한다.
  */

  const { id } = req.params;

  const deleteItemIdx = todoItems.findIndex((item) => item.id === +id);

  if (deleteItemIdx == -1) {
    res.status(404).json({ message: "찾으시는 아이템이 없습니다." });
    return;
  }

  todoItems.splice(deleteItemIdx, 1);

  res.send({ result: true });
});

app.listen(port, () => {
  console.log(port, "포트로 연결되었습니다.");
});
