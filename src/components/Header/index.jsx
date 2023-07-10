'use client';

import Link from "next/link"
import Image from "next/image"
import MenuIcon from "../MenuIcon"
import Menu from '../Menu'
import styles from './index.module.css'
import * as menuActions from '@/redux/features/menuSlice'
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '@/redux/selectors';

export default function Header() {
    const menu = useSelector(selectMenu);
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href='/'>
                    <Image 
                        src='/logo--full.svg' 
                        alt="dessin vectoriel de plusieurs triangles superposés"
                        width={100}
                        height={37}
                        className={styles.logo}
                        priority
                    />
                </Link>
                <MenuIcon onClick={() => dispatch(menuActions.toggle())}/>
                {menu && 
                    <Menu/>
                }
            </div>
        </header>
    )
}