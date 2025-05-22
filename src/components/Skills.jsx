export default function Skills() {
    const skills = ['React', 'JavaScript (ES6+)', 'CSS/Tailwind', 'HTML', 'Git', 'Next.js', 'RESTful APIs'];
  
    return (
      <section id="skills" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span key={skill} className="bg-blue-500 text-white px-4 py-2 rounded-full">{skill}</span>
            ))}
          </div>
        </div>
      </section>
    );
  }