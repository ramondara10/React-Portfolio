import React, { useEffect, useState } from 'react';

function About() {
    const githubEndpoint = 'https://github.com/ramondara10';
    const [githubData, setGithubData] = useState('');

    useEffect(() => {
        getGithubData();
    }, []);

    const getGithubData = async () => {
        try {
            const res = await fetch(githubEndpoint);
            const data = await res.json();
            setGithubData(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section>
            <h2 className='heading'>HI! My name is Ramon.</h2>
            <h3 className='sub-heading'>Full Stack Developer</h3>
            <div className='bio-container'>
                <img
                    className='my-pic'
                    src={githubData.avatar_url}
                    alt='fishing at the lake.'
                />

                <article className='bio'>
                    I'm a Full Stack JavaScript Developer specializing in the
                    MERN stack and capable in creating responsive web
                    applications. I've earned a Full Stack Development
                    Certificate from SMU (Southern Methodist University) Coding
                    Bootcamp.
                    <br />
                    I have created multiple projects using front-end technology
                    such as JavaScript, React, HTML, and CSS as well as back-end
                    tools like Node.js, Express.js, MongoDB, GraphQL and MySQL
                    while following to development methods such as Agile
                    development, RESTful APIs, MVC structure and Single Page
                    Applications.
                    <br />
                    When I'm not coding, usually I would be with my dog Shadow being out in trails,
                    or I may be playing videogames like Final Fantasy 14,
                    ESO, Legend of Zelda, Monster Hunter, or Smash Bros. I like being at home but
                    I would like to go out of the country and experience different cultures
                </article>
            </div>
        </section>
    );
}

export default About;