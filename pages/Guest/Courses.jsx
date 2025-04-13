import CourseCard from '../../components/Guest/CourseCard';
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="text-2xl font-bold mb-4">Courses</h2>
</motion.div>


const Courses = () => {
  const courses = [
    { name: 'B.Tech Computer Science', duration: '4 Years', eligibility: '10+2 PCM' },
    { name: 'BBA', duration: '3 Years', eligibility: '10+2 Any Stream' },
    { name: 'B.Com', duration: '3 Years', eligibility: '10+2 Commerce' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Courses Offered</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
