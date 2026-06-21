import { useEffect, useState } from 'react';
import styles from './menu.module.css';

export default function( {pages, activePage} ) {
    const pagesArray = Array.from(pages);

    const [menuOpen, setMenuOpen] = useState(false);

    console.log('seier sider!')
    console.log(pages)

    return (
        <div className='relative w-full'>
            <div className='hidden md:flex md:flex-row gap-7'>
                {pagesArray.map(page => <a
                    href={page.path}
                    className={`${styles.link} ${activePage === page.path ? styles.activepage : ''}`}
                    data-text={page.name}>
                        {page.name}
                </a>)}
            </div>    
            <div className={`${styles.link} md:hidden flex flex-col justify-start p-3 pr-13`} >
                <div onClick={() => {setMenuOpen(!menuOpen)}}>☰</div>
            </div>
            <div className={`md:hidden absolute self-start top-full flex flex-col right-0 z-100 pr-1`}>
                {pagesArray.map((page, i) => <a
                    href={page.path}
                    className={`${styles.link}`}
                    data-text={page.name}
                    style={{
                        transform: menuOpen ? 'translateY(0)' : `translateY(-${i*2}rem)`,
                        opacity: menuOpen ? 1 : 0,
                        pointerEvents: menuOpen ? 'auto' : 'none',
                        transitionDelay: `${i * 1000}ms`, 
                        zIndex: `${150 - i}`,
                        transition: `transform 0.2s ease, opacity 0.3s ease`,
                    }}>
                        <div class='bg-black z-150'>
                            {page.name}
                        </div>
                </a>)}
            </div>
        </div>
    )
}