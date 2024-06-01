import React from 'react';
import CourseTable from './CourseTable';

const AdminPanel = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <div className="admin-toolkit">
        <button>Add Course Block</button>
        <button>Add Connector Line</button>
      </div>
      <CourseTable isAdmin={true} />
    </div>
  );
};

export default AdminPanel;
