import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import CourseTile from './CourseTile';

const CourseTable = ({ isAdmin }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COURSE',
    drop: (item) => moveCourse(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const moveCourse = (id) => {
    // Logic to move course
  };

  return (
    <div ref={drop} className="course-table">
      <CourseTile id="course1" name="Course 1" />
      <CourseTile id="course2" name="Course 2" />
      {/* Render more courses */}
    </div>
  );
};

export default CourseTable;
