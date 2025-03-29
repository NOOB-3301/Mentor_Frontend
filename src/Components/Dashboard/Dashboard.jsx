import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../utils/Navbar';

const Dashboard = () => {
  // Demo data for AI mentor platform
  const industryNews = [
    'New breakthrough in transformer architectures improves NLP models',
    'Demand for AI ethics specialists grows by 40% year-over-year',
    'Global AI adoption in enterprises reaches 35% across key industries',
  ];

  const relevantJobs = [
    { title: 'Machine Learning Engineer', company: 'DeepMind' },
    { title: 'AI Research Scientist', company: 'OpenAI' },
    { title: 'Data Infrastructure Engineer', company: 'Tesla AI' },
  ];

  const recommendedCourses = [
    { name: 'Advanced Deep Learning', platform: 'Coursera' },
    { name: 'MLOps Fundamentals', platform: 'Udacity' },
    { name: 'AI Ethics Certification', platform: 'edX' },
  ];

  const careerPaths = [
    { role: 'AI Product Manager', compatibility: '85%' },
    { role: 'Computer Vision Specialist', compatibility: '78%' },
    { role: 'NLP Engineer', compatibility: '92%' },
  ];

  const skillProgress = [
    { skill: 'Python', progress: 90 },
    { skill: 'TensorFlow', progress: 75 },
    { skill: 'Data Visualization', progress: 65 },
  ];

  // Animation variants
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1,
      } 
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardHover = {
    scale: 1.02,
    transition: { duration: 0.3 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className='mt-20'></div>
        <motion.section
          className="my-4"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <motion.div 
            className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4"
            variants={itemVariant}
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Welcome Back, User</h1>
              <p className="text-gray-600 mt-2">
                Your AI Career Assistant | Current Skill Level: 
                <span className="font-semibold text-blue-600 ml-2">Advanced Beginner</span>
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="inline-block px-4 py-2 bg-white rounded shadow">
                <p className="text-gray-600 text-sm">
                  Next Learning Session: Today 3:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Key Metrics */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <motion.div 
            className="p-4 bg-white rounded shadow"
            variants={itemVariant}
            whileHover={cardHover}
          >
            <h2 className="text-sm text-gray-600">Completed Courses</h2>
            <p className="text-2xl font-bold text-gray-800">12</p>
            <p className="text-green-500 text-xs mt-1">+2 this week</p>
          </motion.div>

          <motion.div 
            className="p-4 bg-white rounded shadow"
            variants={itemVariant}
            whileHover={cardHover}
          >
            <h2 className="text-sm text-gray-600">Skill Assessments</h2>
            <p className="text-2xl font-bold text-gray-800">8</p>
            <p className="text-blue-500 text-xs mt-1">1 pending</p>
          </motion.div>

          <motion.div 
            className="p-4 bg-white rounded shadow"
            variants={itemVariant}
            whileHover={cardHover}
          >
            <h2 className="text-sm text-gray-600">Career Paths</h2>
            <p className="text-2xl font-bold text-gray-800">3</p>
            <p className="text-purple-500 text-xs mt-1">2 new matches</p>
          </motion.div>

          <motion.div 
            className="p-4 bg-white rounded shadow"
            variants={itemVariant}
            whileHover={cardHover}
          >
            <h2 className="text-sm text-gray-600">Resume Strength</h2>
            <p className="text-2xl font-bold text-gray-800">84%</p>
            <p className="text-yellow-500 text-xs mt-1">3 improvements found</p>
          </motion.div>
        </motion.section>

        {/* Main Content Sections */}
        <motion.section
          className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          {/* Skill Progress */}
          <motion.div 
            className="p-6 bg-white rounded shadow"
            variants={itemVariant}
            whileHover={cardHover}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Skill Progress</h2>
            {skillProgress.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                  <span className="text-sm text-gray-700">{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2" 
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Career Recommendations */}
          <motion.div 
            className="p-6 bg-white rounded shadow"
            variants={itemVariant}
            whileHover={cardHover}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Career Recommendations</h2>
            {careerPaths.map((path, index) => (
              <div key={index} className="mb-4 p-3 border rounded hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-800">{path.role}</h3>
                    <p className="text-sm text-gray-600">Required Skills: 12/15</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">{path.compatibility}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Learning Section */}
        <motion.section
          className="my-8"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4 text-gray-800" 
            variants={itemVariant}
          >
            Learning Recommendations
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4" 
            variants={itemVariant}
          >
            {recommendedCourses.map((course, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-white rounded shadow"
                whileHover={cardHover}
              >
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-3">Platform: {course.platform}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Start Course
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Additional Sections */}
        <motion.section
          className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          {/* AI Mentor Chat */}
          {/* <motion.div 
            className="p-6 bg-white rounded shadow h-64"
            variants={itemVariant}
            whileHover={cardHover}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">AI Career Mentor</h2>
            <div className="bg-gray-100 p-4 rounded h-40 overflow-y-auto">
              <div className="text-sm text-gray-600">
                <p className="mb-2">Mentor: How can I assist you today?</p>
                <p className="text-gray-400">[Chat interface placeholder]</p>
              </div>
            </div>
          </motion.div> */}

          {/* Skill Gap Analysis */}
          {/* <motion.div 
            className="p-6 bg-white rounded shadow"
            variants={itemVariant}
            whileHover={cardHover}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Skill Gap Analysis</h2>
            <div className="w-full h-32 bg-gray-50 rounded flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Target Role: Machine Learning Engineer</p>
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">78%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div> */}
        </motion.section>

        {/* Industry News Section */}
        <motion.section
          className="my-8"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          <motion.h2 
            className="text-2xl font-bold mb-4 text-gray-800" 
            variants={itemVariant}
          >
            AI Industry News
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4" 
            variants={itemVariant}
          >
            {industryNews.map((news, index) => (
              <motion.div 
                key={index} 
                className="p-4 bg-white rounded shadow"
                whileHover={cardHover}
              >
                <p className="text-gray-700">{news}</p>
                <button className="mt-3 text-blue-600 text-sm hover:underline">
                  Read More →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Dashboard;