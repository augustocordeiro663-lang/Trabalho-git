import React from "react";
import { CommentGet } from "../../Models/Comment";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <div className="flex flex-col">
      {comments?.map((comment, index) => (
        <div key={index} className="p-4 mb-4 bg-white shadow rounded">
          <div className="flex justify-between mb-2">
            <h3 className="font-bold text-gray-900">{comment.title}</h3>
            <span className="text-sm text-gray-500">{comment.createdBy}</span>
          </div>
          <p className="text-gray-700">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default StockCommentList;