import { useState } from "react";
import Button from "../components/button";
import { Input } from "../components/input";

import Layout from "../components/layout";
import Table from "../components/table";

const App = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-4 border-t-2 border-zinc-900 ">
        <h1 className=" text-center text-[30px] font-bold ">Todos</h1>

        <div className="mx-auto w-11/12 h-auto border-2 pb-3">
          <p className="text-zinc-800 border-b-2 bg-gray-200 p-2 pl-5">
            Add a Task
          </p>
          <p className="bold text-zinc-800 p-2 pl-5">Item</p>
          <Input id="coba" label="Enter what you want to procastinate" />
          <Button label="Submit" />
        </div>

        <div className="mt-10 mx-14">
          <p className="text-zinc-800 border-b-2 bg-gray-200 p-2 pl-5">Task</p>
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default App;
