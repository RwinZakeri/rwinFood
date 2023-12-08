import Link from 'next/link';
import styles from './LayoutStyle.module.css';

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <div className={styles.left}><Link href="/"><h1>Rwin's Food</h1></Link></div>

        <div>
            <div className={styles.right}>
                <Link href="/menu">Menu</Link>
                <Link href="/categories">Categories</Link>
            </div>
        </div>
    </header>

    <div className={styles.container}>{children}</div>

    <footer className={styles.footer}>
        <h2>made with Love by <a href='https://google.com' target='_blank' rel='noreferrer'>Rwin</a></h2>
    </footer>
    </>
  )
}

export default Layout
