import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll No</th>
          <th>Email</th>
          <th>Attendance</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student._id}>
            <td>{student.name}</td>
            <td>{student.rollNo}</td>
            <td>{student.email}</td>
            <td>{student.attendance}%</td>
            <td>{student.marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
