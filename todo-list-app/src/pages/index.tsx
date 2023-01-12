import { useEffect, useState } from "react";
import axios from "axios";

import { Input } from "../components/input";
import Button from "../components/button";
import Layout from "../components/layout";

import { TodosType } from "../utils/types/todo";

const App = () => {
  const [datas, setDatas] = useState<TodosType[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(" https://api.todoist.com/rest/v2/tasks", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TODO_API}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function HandleAddTask() {
    const body = {
      content: inputTask,
    };
    axios
      .post("https://api.todoist.com/rest/v2/tasks", body, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TODO_API}`,
        },
      })
      .then((res) => {
        alert("oke bertambah");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => fetchData());
  }

  function HandleDeleteTask(todo: TodosType) {
    axios
      .delete("https://api.todoist.com/rest/v2/tasks", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TODO_API}`,
        },
      })
      .then((res) => {
        // console.log(res);
        let dupeDatas: TodosType[] = datas.slice();
        const filterData = dupeDatas.filter((item) => item.content !== todo.id);
        setDatas(filterData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Layout>
      <div className="container mx-auto mt-4 border-t-2 border-zinc-900 ">
        <h1 className=" text-center text-[30px] font-bold ">Todos</h1>

        <div className="mx-auto w-11/12 h-auto border-2 pb-3">
          <p className="text-zinc-800 border-b-2 bg-gray-200 p-2 pl-5">
            Add a Task
          </p>
          <p className="bold text-zinc-800 p-2 pl-5">Item</p>
          <Input
            id="input-task"
            label="Enter what you want to procastinate"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />

          <Button
            className="mx-5 mt-5 w-[90px] h-9 rounded-xl text-zinc-50 bg-sky-600 border-none tracking-wider normal-case "
            label="Submit"
            onClick={() => HandleAddTask()}
          />
        </div>

        <div className="border-2 mx-auto w-11/12 px-5 mt-8">
          <p className="text-zinc-800 border-b-2 bg-gray-200 p-2 pl-5 -mx-5">
            Task
          </p>

          {datas.map((data) => (
            <table
              key={data.id}
              className="table-fixed  bg-zinc-50 w-full   border-b-2"
            >
              <thead className="text-left">
                <tr>
                  <th className="w-6/12">Item</th>
                  <th className="w-3/12">Status</th>
                  <th className="w-4/12">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="break-words">{data.content}</td>
                  <td>Incomplete</td>
                  <td className="grid lg:grid-cols-3 md:grid-cols-2">
                    <Button label="Edit" />
                    <Button
                      className=" w-[90px] h-9 rounded-xl text-zinc-50 bg-red-500 border-none tracking-wider normal-case mt-2"
                      label="Hapus"
                      onClick={() => HandleDeleteTask}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default App;
