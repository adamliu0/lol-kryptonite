import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/index.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
    return (
        <>
        <Head>
            <title>Profile | LOL Kryptonite</title>
            <meta name="description" content="Profile page for LOL Kryptonite" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <p className={styles.title}>LOL KRYPTONITE</p>
                <form className={styles.searchForm}></form>
                <div>
                    <select className={styles.server}></select>
                </div>
            </main>
        </>
    )
}