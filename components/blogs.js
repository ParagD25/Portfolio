import ProjectBox from './project-box';
import classNamees from './projetcs.module.css';
import Section from './section';
import Button from './UI/button';
import BlogBox from './blog-box';

function Blogs() {
    const projects = [
        {
            name: "Closures in Python",
            tech: "Closures are an important concept in programming that allows developers to create functions with a persistent state. In Python, closures are created when a nested function references a variable from its enclosing function.",
            live: "https://paragdurafe.hashnode.dev/closures-in-python"
        },
        {
            name: "Decorators in Python",
            tech: "Python is a versatile programming language that allows developers to write clean and concise code. One of the key features of Python is its support for decorators, which are a powerful tool for modifying the behavior of functions and classes.",
            live: "https://paragdurafe.hashnode.dev/decorators-in-python"
        },
        
    ]
    return (
        <Section>
            <div className="section_title">
                <img src='./blog.png' className='icon-image'></img>Blogs
            </div>
            <div className={`${classNamees.projects_wrapper} section_content`}>
                {projects?.map(project => <BlogBox key={project.github} name={project.name} tech={project.tech} live={project.live} />)}
                <div className={classNamees.more}>
                <a href="https://paragdurafe.hashnode.dev/" target="_blank" rel="noopener noreferrer"><Button>More Blogs</Button></a>
                </div>
            </div>
        </Section>
    )
}
export default Blogs;