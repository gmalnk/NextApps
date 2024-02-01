import React from "react";
import DraggableComponent from "../common/DraggableComponent";
import AddTradeForm from "./AddTradeForm";

export default function AddTradePanel() {
  return (
    <DraggableComponent>
      <div className=" p-[2px] bg-gray-400 w-[40rem]">
        <div
          id="draggable"
          className=" p-4 bg-blue-400 drag cursor-move h-12"
        ></div>
        <AddTradeForm />
      </div>
    </DraggableComponent>
  );
}
