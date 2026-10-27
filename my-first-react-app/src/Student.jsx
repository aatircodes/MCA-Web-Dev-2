    const students = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 20,
    course: "Computer Science",
    marks: 85,
    city: "Delhi"
  },
  {
    id: 2,
    name: "Priya Singh",
    age: 19,
    course: "Information Technology",
    marks: 92,
    city: "Mumbai"
  },
  {
    id: 3,
    name: "Aman Verma",
    age: 21,
    course: "Computer Science",
    marks: 78,
    city: "Lucknow"
  },
  {
    id: 4,
    name: "Neha Gupta",
    age: 20,
    course: "Software Engineering",
    marks: 88,
    city: "Jaipur"
  },
  {
    id: 5,
    name: "Arjun Kumar",
    age: 22,
    course: "Information Technology",
    marks: 81,
    city: "Pune"
  }
];

function Student() {

return (
  <>
  <h3>List of students:</h3>
  <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Marks</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        {students.map((stu) => (
            <tr key={stu.id}>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.course}</td>
                <td>{stu.marks}</td>
                <td>{stu.city}</td>
            </tr>
        ))}
    </tbody>
  </table>
  </>  
);

}

export default Student;