const skills = [
    { name: 'Backend Development', level: '80' },
    { name: 'MySQL', level: '80' },
    { name: 'Basic PHP (MVC & OOP)', level: '75' },
    { name: 'Basic Laravel', level: '75' },
    { name: 'Basic NodeJS', level: '70' },
    { name: 'Basic Python', level: '75' },
    { name: 'Basic API', level: '80' },
    { name: 'HTML5', level: '95' },
    { name: 'CSS3', level: '90' },
    { name: 'JavaScript', level: '85' },
    { name: 'Tailwind CSS', level: '85' },
    { name: 'Bootstrap 5', level: '85' },
    { name: 'React JS', level: '75' },
    { name: 'GitHub', level: '85' },
    { name: 'AWS EC2', level: '70' },
    { name: 'Postman', level: '85' },
    { name: 'WordPress', level: '75' },
    { name: 'Netlify / Vercel', level: '85' },
    { name: 'Linux (Ubuntu)', level: '75' },
    { name: 'Docker', level: '70' },
    { name: 'API Testing with Postman', level: '85' },
    { name: 'Bug Reporting (Jira, GitHub Board)', level: '80' },
    { name: 'STLC & Test Case Writing', level: '85' },
    { name: 'Microsoft Word', level: '90' },
    { name: 'Microsoft Excel', level: '85' },
    { name: 'Microsoft PowerPoint', level: '85' },
    { name: 'QA Tester', level: '85' },
    { name: 'Graphic Designer', level: '80' },
    { name: 'Web & UI/UX Design', level: '85' },
    { name: 'DevOps', level: '70' }
];
const container = document.getElementById('techSkills');
skills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skill-card';
    div.innerHTML = '<div class=""skill-info""><span>' + skill.name + '</span><span>' + skill.level + '%</span></div><div class=""progress-bar""><div class=""progress"" style=""width: ' + skill.level + '%""></div></div>';
    container.appendChild(div);
});
