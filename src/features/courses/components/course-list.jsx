/* eslint-disable react/prop-types */
import Course from "./course";

// eslint-disable-next-line react/prop-types
const CourseList = ({ courses }) => {
  return (
    <div className="row">
      {courses.map((course) => (
        <div className="col-3" key={course.id}>
          <Course {...course} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
