import React from 'react';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'Adam Smith',
      title: 'Senior Python Developer',
      bio: 'Expert in algorithmic trading and financial analysis.',
      image: 'https://i.pravatar.cc/150?img=68', // Dummy image 1
      courses: 12,
      students: '500+',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'Lead UI/UX Designer',
      bio: 'Passionate about crafting intuitive and beautiful user interfaces.',
      image: 'https://i.pravatar.cc/150?img=25', // Dummy image 2
      courses: 8,
      students: '700+',
    },
    {
      id: 3,
      name: 'Mike Ross',
      title: 'Digital Marketing Strategist',
      bio: 'Helping businesses grow with data-driven marketing techniques.',
      image: 'https://i.pravatar.cc/150?img=12', // Dummy image 3
      courses: 15,
      students: '1200+',
    },
    {
      id: 4,
      name: 'Emily White',
      title: 'Data Science Lead',
      bio: 'Transforming complex data into actionable business insights.',
      image: 'https://i.pravatar.cc/150?img=5', // Dummy image 4
      courses: 10,
      students: '900+',
    },
    {
      id: 5,
      name: 'David Lee',
      title: 'Web Development Mentor',
      bio: 'Guiding aspiring developers through the world of modern web technologies.',
      image: 'https://i.pravatar.cc/150?img=67', // Dummy image 5
      courses: 18,
      students: '1500+',
    },
    {
      id: 6,
      name: 'Sophia Chen',
      title: 'Business & Leadership Coach',
      bio: 'Empowering leaders to build high-performing teams and strategies.',
      image: 'https://i.pravatar.cc/150?img=47', // Dummy image 6
      courses: 7,
      students: '600+',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0f081a] min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-violet-400">Expert Teachers</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Learn from industry leaders and experienced educators who are passionate about sharing their knowledge.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher) => (
            <div 
              key={teacher.id} 
              className="group bg-[#1a0b2e] border border-white/5 rounded-[2.5rem] p-8 text-center flex flex-col items-center hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Teacher Image */}
              <div className="w-32 h-32 rounded-full border-4 border-violet-500/50 overflow-hidden mb-6 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Teacher Info */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                {teacher.name}
              </h3>
              <p className="text-violet-400 text-md font-semibold mb-3">{teacher.title}</p>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{teacher.bio}</p>

              {/* Stats & Social Links (Optional) */}
              <div className="flex justify-around w-full border-t border-white/5 pt-6 mt-auto">
                <div>
                  <p className="text-white text-lg font-bold">{teacher.courses}</p>
                  <p className="text-slate-500 text-xs uppercase font-medium">Courses</p>
                </div>
                <div>
                  <p className="text-white text-lg font-bold">{teacher.students}</p>
                  <p className="text-slate-500 text-xs uppercase font-medium">Students</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action for more teachers */}
        <div className="text-center mt-20">
          <button className="px-10 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-bold rounded-full hover:scale-110 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300">
            View All Teachers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;