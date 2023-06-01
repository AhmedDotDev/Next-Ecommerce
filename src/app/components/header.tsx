import Image from 'next/image';
import { NavigationMenuDemo } from './nav';

const Header = () => {
  return (
    <header className='flex flex-row'>
        <div>
        <Image src="" alt={'some text'} ></Image>
        </div>
    <nav className="">
    <NavigationMenuDemo/>
    </nav>
  </header>
  );
};

export default Header;

