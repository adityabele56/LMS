import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: "24 Jan, 2026",
      title: "How to stay motivated while learning online",
      category: "Education",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600",
      desc: "Consistency is key. Learn the top 5 secrets to mastering any skill from home."
    },
    {
      id: 2,
      date: "20 Jan, 2026",
      title: "The future of AI in modern web development",
      category: "Technology",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600",
      desc: "AI tools are changing how we code. Are you ready for the 2026 shift?"
    },
    {
      id: 3,
      date: "15 Jan, 2026",
      title: "UI Design trends that will dominate this year",
      category: "Design",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600",
      desc: "From Glassmorphism to Bento Grids, see what the top designers are using."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0f081a] relative overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h4 className="text-violet-500 font-black uppercase tracking-[0.3em] text-xs">Latest News</h4>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Insights</span>
            </h2>
          </div>
          <button className="px-8 py-3 border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all duration-500 font-bold">
            View All Posts
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post) => (
            <article 
              key={post.id}
              className="group cursor-pointer bg-[#1a0b2e]/30 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-violet-500/30 shadow-2xl"
            >
              {/* Image with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-violet-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {post.desc}
                </p>

                <div className="pt-4 flex items-center gap-2 text-violet-400 font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read More 
                  <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;