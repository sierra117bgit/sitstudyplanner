import React from 'react';
import CourseTable from './components/CourseTable';
import { jsPDF } from 'jspdf';

const CoursePlanner = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Your Course Plan', 10, 10);
    // Add more details to PDF
    doc.save('course-plan.pdf');
  };

  return (
    <div>
      <header>
        <img src="/path/to/logo.png" alt="SIT Logo" />
        <h1>SIT Course Planner</h1>
        <button onClick={generatePDF}>Download PDF</button>
        <a href="/admin">Admin Mode</a>
      </header>
      <CourseTable />
    </div>
  );
};

export default CoursePlanner;
