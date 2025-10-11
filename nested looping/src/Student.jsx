const Student = ({student}) => {
  return (
    <>
      <h3>Students</h3>
      {student.map((student) => (
        <ul>
          <li>Name: {student.name}</li>
        </ul>
      ))}
    </>
  );
};
export default Student;
