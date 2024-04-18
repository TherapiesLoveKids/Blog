import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './BlogHeader.module.scss';

interface BlogHeaderProps {
  title?: string;
  description?: any[];
  level: 1 | 2;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, description, level }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header?.classList.add(styles.transparentHeader);
      } else {
        header?.classList.remove(styles.transparentHeader);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  switch (level) {
    case 1:
      return (
        <header className={styles.header}>
          <div className={styles.header1}>
            <Link href="/">
              <img src='/1-logo.svg' draggable="false" />
            </Link>
            <div className={`${styles.iconMobile} ${isMenuOpen ? styles.active : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaBars />
            </div>
            <div className={styles.menuDesktop}>
              <Link href="/">
                <h3 className={pathname === "/" ? `${styles.pageActive} ${styles.pageLink}` : styles.pageLink}>Início</h3>
              </Link>
              <Link href="/sobre">
                <h3 className={pathname === "/sobre" ? `${styles.pageActive} ${styles.pageLink}` : styles.pageLink}>Sobre nós</h3>
              </Link>
            </div>
          </div>
          <div className={styles['stroke-header-wrapper']}>
            <div className={styles['stroke-1']}></div>
            <div className={styles['stroke-2']}></div>
            <div className={styles['stroke-3']}></div>
            <div className={styles['stroke-4']}></div>
          </div>
        </header>
      );

    case 2:
      return (
        <header className={styles.header}>
          <div className={styles.header1}>
            <Link href="/">
              <img src='/1-logo.svg' draggable="false" />
            </Link>
            <div className={`${styles.iconMobile} ${isMenuOpen ? styles.active : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaBars />
            </div>
            <div className={styles.menuDesktop}>
              <Link href="/">
                <h3 className={pathname === "/" ? `${styles.pageActive} ${styles.pageLink}` : styles.pageLink}>Início</h3>
              </Link>
              <Link href="/sobre">
                <h3 className={pathname === "/sobre" ? `${styles.pageActive} ${styles.pageLink}` : styles.pageLink}>Sobre nós</h3>
              </Link>
            </div>
          </div>
          <div className={styles['stroke-header-wrapper']}>
            <div className={styles['stroke-1']}></div>
            <div className={styles['stroke-2']}></div>
            <div className={styles['stroke-3']}></div>
            <div className={styles['stroke-4']}></div>
          </div>
        </header>
      );

    default:
      throw new Error(`Invalid level: ${JSON.stringify(level) || typeof level}, only 1 or 2 are allowed`);
  }
};

export default BlogHeader;