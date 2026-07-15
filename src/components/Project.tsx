
import { Navbar } from "./Navbar"


export function Project() {

    const projects = [
        {
            title: "personal portfolio",
            description: "very good to navigate and has a beautiful interface, integrated with Email js to send and recieve message from the contact page so fast to load and was deployed to my github account,using :",
            tech: ["React", "tailwindcss", "javascript", "github"],
            link: "https://rossytech3833.github.io/myPortfolio/"
        },
        {
            title: "admin dashboard",
            description: "A full CRUD admin panel for managing members,Features include form validation with React Hook Form and Yup, paginated data views with skeleton loaders, optimistic UI updates, and a custom delete confirmation modal so fast to load and was deployed to my github account, using the tools:",
            tech: ["React", "Typscript", "Tanstack query", "axios", "github"],
            link: "#"
        },
        {
            title: "landing page",
            description: "A responsive multi-section landing page,featuring an SVG wave footer and clean, modern layout. Deployed on GitHub Pages using HashRouter for smooth client-side routing.this was brought to live from a UI/UX figma design so fast to load and was deployed to my github account, using the tools:",
            tech: ["React", "Typscript", "Tanstack query", "axios", "github"],
            link: "https://rossytech3833.github.io/Landing-page/"
        },
        {
            title: "mini-blog-post",
            description: "A blog platform with full CRUD functionality for posts, plus interactive like/unlike and comment features, powered by TanStack Query for efficient data fetching and caching. so fast to load and was deployed to my github account,using :",
            tech: ["React", "tailwindcss", "Tanstack-query", "firebase", "Typsscript", "github"],
            link: "#"
        },
        {
            title: "Blogging site",
            description: "very good to navigate and has a beautiful interface, so fast to load and was deployed to my github account,using :",
            tech: ["React", "tailwindcss", "firebase", "javascript", "github"],
            link: "https://rossytech3833.github.io/MyBlog/"
        },
        {
            title: "E-commerce",
            description: "very good to navigate and has a beautiful interface, so fast to load and was deployed to my github account,using :",
            tech: ["React", "tailwindcss", "Redux", "firebase", "javascript", "github"],
            link: "https://rossytech3833.github.io/E-commerce/"
        },
    ]

    return (
        <div className="flex min-h-screen p-4 sm:p-10 m-4 sm:m-10 rounded-2xl border justify-center bg-gray-900/90 relative overflow-hidden">

            <Navbar />

            <section id='Services' className='w-full flex justify-center items-center py-24 sm:py-20'>
                <div className='max-w-5xl mx-auto px-2 sm:px-4'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white capitalize text-center md:text-left'>
                        featured project
                    </h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10'>
        {projects.map((project, i) => (
            <div key={i} className='text-gray-300 border border-gray-800 rounded-xl p-5 bg-gray-800/20'>
            <h3 className="uppercase text-orange-400 font-semibold">{project.title} :</h3>
           <p className="text-sm sm:text-base mt-2">{project.description}</p>

             <div className='flex flex-wrap gap-2 mt-4'>
               {project.tech.map((tech, key) => (
             <h4 key={key}
                className='text-xs sm:text-sm text-white rounded-full py-1 px-3 border border-gray-600 bg-white/5'>
                        {tech}
               </h4>
            ))}
              </div>
         <div className="mt-4">
              <a href={project.link} className="text-orange-400 hover:text-white transition">
              view project &#8594;
                </a>
              </div>
                </div>
                        ))}
                    </div>
                </div>
           
            </section>
        </div>
        
    )
}