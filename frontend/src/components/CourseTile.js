import React from 'react';
import { useDrag } from 'react-dnd';

const CourseTile = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COURSE',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className="course-tile" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {name}
    </div>
  );
};

export default CourseTile;
