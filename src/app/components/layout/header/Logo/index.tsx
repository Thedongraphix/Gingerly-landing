import Image from 'next/image';
import Link from 'next/link';

// ─── HOW TO ADJUST LOGO SIZE ───
// Change LOGO_HEIGHT below. Width scales automatically.
//   '34px' → compact  |  '44px' → balanced  |  '56px' → large

const LOGO_HEIGHT = '180px';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/images/logo/gingerly-logo.svg"
                alt="Gingerly"
                width={130}
                height={36}
                style={{ width: 'auto', height: LOGO_HEIGHT }}
                quality={100}
                priority={true}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/gingerly-white.png"
                alt="Gingerly"
                width={130}
                height={36}
                style={{ width: 'auto', height: LOGO_HEIGHT }}
                quality={100}
                priority={true}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
