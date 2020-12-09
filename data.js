const data = [
    {id: 0, slug: "welcome-to-learn-verified", lab: false },
    {id: 1, slug: "prework-intro-navigating-curriculum-on-learn-ide", lab: false },
    {id: 2, slug: "prework-intro-ask-a-question", lab: false },
    {id: 3, slug: "git-version-control-introduction-to-version-control", lab: false },
    {id: 4, slug: "git-version-control-git-basics", lab: false },
    {id: 5, slug: "git-version-control-getting-code-with-git", lab: false },
    {id: 6, slug: "git-version-control-pushing-code-with-git", lab: false },
    {id: 7, slug: "git-basics-lab-v-000", lab: true },
    {id: 8, slug: "careers-online-presence-github", lab: false },
    {id: 9, slug: "github-pull-request-basics", lab: false },
    {id: 10, slug: "git-collaboration-readme", lab: false },
    {id: 11, slug: "git-collaboration-quiz", lab: false },
    {id: 12, slug: "git-github-learn-quiz", lab: false },
    {id: 13, slug: "intro-to-tdd-rspec-and-learn-v-000", lab: true },
    {id: 14, slug: "intro-to-tic-tac-toe-rb", lab: false },
    {id: 15, slug: "matz-readme", lab: false },
    {id: 16, slug: "ruby-lecture-intro-what-is-a-program", lab: false },
    {id: 17, slug: "hello-world-ruby-v-000", lab: true },
    {id: 18, slug: "irb-readme", lab: false },
    {id: 19, slug: "ruby-lecture-reading-error-messages-v-000", lab: true },
    {id: 20, slug: "variable-readme", lab: false },
]

let anchor = document.createElement('a');
let div = document.getElementById('root');
let ul = document.createElement('ul')

let newdata = data.forEach(d => {
    console.log(d)
    let a = document.createElement('a')
    let p = document.createElement('p')
    a.innerHTML = d.slug
    if (d.lab){ 
        a.href = `https://github.com/learn-co-students/${d.slug}`} 
        else {
        a.href = `https://github.com/learn-co-curriculum/${d.slug}`
    }
    p.appendChild(a)
    div.appendChild(p)
    console.log(a)
})
    
