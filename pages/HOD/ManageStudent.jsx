// src/pages/HOD/ManageStudent.jsx

import React, { useEffect, useState } from "react";
import { getAllStudents, addStudent, deleteStudent } from "@/services/hodAPI";
import { toast } from "react-toastify";

const ManageStudent = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        name: "",
        email: "",
        department: "",
        rollNumber: "",
    });

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await getAllStudents();
            setStudents(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch students");
        }
    };

    const handleAddStudent = async (e) => {
        e.preventDefault();
        try {
            await addStudent(newStudent);
            toast.success("Student added successfully");
            fetchStudents();
            setNewStudent({ name: "", email: "", department: "", rollNumber: "" });
        } catch (error) {
            console.error(error);
            toast.error("Failed to add student");
        }
    };

    const handleDeleteStudent = async (id) => {
        if (!window.confirm("Are you sure you want to delete this student?")) return;

        try {
            await deleteStudent(id);
            toast.success("Student deleted successfully");
            fetchStudents();
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete student");
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Manage Students</h2>

            {/* Add Student Form */}
            <form onSubmit={handleAddStudent} className="mb-6 space-y-2">
                <input
                    type="text"
                    placeholder="Name"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={newStudent.department}
                    onChange={(e) =>
                        setNewStudent({ ...newStudent, department: e.target.value })
                    }
                    className="border p-2 w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Roll Number"
                    value={newStudent.rollNumber}
                    onChange={(e) =>
                        setNewStudent({ ...newStudent, rollNumber: e.target.value })
                    }
                    className="border p-2 w-full"
                    required
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Add Student
                </button>
            </form>

            {/* Student List */}
            <table className="w-full table-auto border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Department</th>
                        <th className="p-2 border">Roll Number</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student._id} className="text-center">
                            <td className="p-2 border">{student.name}</td>
                            <td className="p-2 border">{student.email}</td>
                            <td className="p-2 border">{student.department}</td>
                            <td className="p-2 border">{student.rollNumber}</td>
                            <td className="p-2 border">
                                <button
                                    onClick={() => handleDeleteStudent(student._id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {students.length === 0 && (
                        <tr>
                            <td colSpan="5" className="p-4 text-center">
                                No students found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudent;
