import NavItem from '../NavItem';
import React from 'react';

function Nav({ sections, currentSection, SetCurrentSection }) {
    return (
        <nav className='navbar'>
            <h1 className='my-name'>Ramon Alvarado</h1>
            <ul className='flex space-a'>
                {sections.map(section => (
                    <NavItem
                        key={section.name}
                        section={section.name}
                        currentSection={currentSection}
                        SetCurrentSection={SetCurrentSection}
                    />
                ))}
            </ul>
        </nav>
    );
}

export default Nav;