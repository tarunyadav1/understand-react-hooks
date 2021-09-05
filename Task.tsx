import React, { useEffect, FC, memo } from 'react';

interface Props {
  task: string;
  id: number;
  handleDelete: any;
}

const Task: FC<Props> = ({ task, handleDelete, id }) => {
  useEffect(() => {
    // console.log('<Task> is rendering' + ' ' + task);
  });

  return (
    <li>
      {task}
      <button onClick={() => handleDelete(id)}>X</button>
    </li>
  );
};

export default memo(Task);
