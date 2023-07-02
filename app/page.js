'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import NavItem from './components/navbar/NavItem';
import { BsCardImage } from 'react-icons/bs';
import {
  HiOutlineQueueList,
  HiArrowDownCircle,
  HiArchiveBoxArrowDown,
} from 'react-icons/hi2';

export default function Home() {
  return (
    <main className={styles.main}>
     {/*  <div className={styles.description}>
        <NavItem
          title='Component collection'
          icon={<HiArrowDownCircle />}
          className={styles.desc}
          url=''
        />
        <NavItem
          title='Product teaser'
          icon={<BsCardImage />}
          url='/teaser'
          className={styles.desc}
        />
        <NavItem
          title='Slider'
          icon={<HiOutlineQueueList />}
          url='/slider'
          className={styles.desc}
        />
        <NavItem
          title='texts'
          icon={<HiArchiveBoxArrowDown />}
          url='/textefx'
          className={styles.desc}
        />
        <NavItem
          title='encyclopedia'
          icon={<HiOutlineQueueList />}
          url='/encyclopedia'
          className={styles.desc}
        />
        <div> */}
     {/*  </div> */}

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/astroHome.png'
          alt='Astro universe'
          width={300}
          height={300}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href='https://github.com/xxrobone/components_lib'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>You can find this repo here</p>
        </a>

        <a
          href='/'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Check live demo <span>-&gt;</span>
          </h2>
          <p>Coming soon!</p>
        </a>

        <a
          href='https://robertwagar.se'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Website <span>-&gt;</span>
          </h2>
          <p>Check my website and some some.</p>
        </a>

        <a
          href='/'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            Codepen <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
