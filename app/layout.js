// global style
import './globals.scss';
import Image from 'next/image';
import Nav from './components/navbar/Nav';
import NavItem from './components/navbar/NavItem';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlinePersonPin, MdOutlineAlternateEmail } from 'react-icons/md';

// component nav
import { BsCardImage } from 'react-icons/bs';
import {
  HiOutlineQueueList,
  HiArrowDownCircle,
  HiArchiveBoxArrowDown,
} from 'react-icons/hi2';

// fonst
import { Inter } from 'next/font/google';
// styles
import styles from './layout.module.scss';
import DropDown from './components/navbar/DropDown';
import DropDownItem from './components/navbar/DropDownItem';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Component library',
  description: 'A component library by Robert Wägar',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${styles.layout}`}>
        <a
          href='https://robertwagar.se'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.roboneLogo}
        >
          <Image
            src='/rob1.png'
            alt='Robone logo'
            width={100}
            height={100}
            priority
          />
        </a>
        <div className={styles.navSpecial}>
          <Nav>
            <NavItem title='Home' url='/' icon={<AiOutlineHome />} />
            <NavItem title='About' url='' icon={<MdOutlinePersonPin />} />
            <NavItem
              title='Contact'
              url=''
              icon={<MdOutlineAlternateEmail />}
            />
          </Nav>
        </div>
        <div className={styles.componentNav}>
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
                className={styles.desc}
              />
              <DropDownItem
                title='Slider'
                icon={<HiOutlineQueueList />}
                url='/slider'
                className={styles.desc}
              />
              <DropDownItem
                title='texts'
                icon={<HiArchiveBoxArrowDown />}
                url='/textefx'
                className={styles.desc}
              />
              <DropDownItem
                title='Short bios'
                icon={<HiOutlineQueueList />}
                url='/shortbios'
                className={styles.desc}
              />
            </DropDown>
          </NavItem>
        </div>
        {children}
      </body>
    </html>
  );
}
