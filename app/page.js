import Image from 'next/image';
import styles from './page.module.scss';
import NavItem from './components/navbar/NavItem';
import DropDown from './components/navbar/DropDown';
import DropDownItem from './components/navbar/DropDownItem';
import { BsCardImage } from 'react-icons/bs';
import { HiOutlineQueueList, HiArrowDownCircle } from 'react-icons/hi2';
import { SiShopify } from 'react-icons/si';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <NavItem
          title='Component collection'
          icon={<HiArrowDownCircle />}
          className={styles.desc}
          url=''
        >
          <DropDown>
            <DropDownItem
              title='Product teaser'
              icon={<BsCardImage />}
              url='/teaser'
            />
            <DropDownItem
              title='Product list'
              icon={<HiOutlineQueueList />}
              url='/'
            />
          </DropDown>
        </NavItem>
        <div>
          <a
            href='https://robertwagar.se'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/rob1.png'
              alt='Robone logo'
              className={styles.roboneLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/astroHome.png'
          alt='Astro universe'
          width={400}
          height={400}
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
