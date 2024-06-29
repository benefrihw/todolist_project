import cors from 'cors';
import express from "express";
import 'dotenv/config';
import jwt from 'jsonwebtoken';

app.use(cors());
app.use(express.json());

const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(port, "포트로 연결되었습니다.");
});