const navLinks = document.querySelectorAll('.filters a')
const courseContainer = document.getElementById('courseContainer')
const totalCreditsSpan = document.getElementById('credit');
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';


    if (course.completed) {
        card.classList.add('completed-course');
    } else {
        card.classList.add('incomplete-course');
    }

    card.innerHTML = `
        <p>${course.subject} ${course.number}</p>

    `;
    return card;
}

function updateCreditTotalDisplay(filteredCourses) {
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsSpan.textContent = total;
}

function displayCourses(filter) {
    courseContainer.innerHTML = '';

    const filteredCourses = courses.filter(course => {
        const courseSubject = course.subject.toLowerCase();
        return (filter === 'all') ||
            (filter === 'wdd' && courseSubject === 'wdd') ||
            (filter === 'cse' && courseSubject === 'cse');
    });

    if (filteredCourses.length === 0) {
        courseContainer.innerHTML = '<p class="no-courses-message">No courses found for this filter.</p>';
        totalCreditsSpan.textContent = 0;
        return;
    }

    filteredCourses.forEach(course => {
        const card = createCourseCard(course);
        if (card) {
            courseContainer.appendChild(card);
        }
    });

    updateCreditTotalDisplay(filteredCourses);
}

document.addEventListener('DOMContentLoaded', () => {

    displayCourses('all'); 
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const filterValue = e.target.dataset.filter || 'all';
            displayCourses(filterValue); 
        });
    });
});





