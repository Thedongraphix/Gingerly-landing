import Image from 'next/image';
import Link from 'next/link';

// ─── HOW TO ADJUST LOGO SIZE ───
// Mobile: h-[48px]  |  Desktop (md+): h-[130px]
// Edit the Tailwind classes on the <Image> elements below to change.
// Width always scales automatically to keep proportions.

const Logo = () => {
    return (
        <Link href="/" className="flex items-center shrink-0">
            {/* Light mode logo */}
            <Image
                src="/images/logo/gingerly-logo.svg"
                alt="Gingerly"
                width={130}
                height={36}
                quality={100}
                priority={true}
                className="dark:hidden h-[48px] md:h-[130px] w-auto"
            />
            {/* Dark mode logo */}
            <Image
                src="/images/logo/gingerly-white.png"
                alt="Gingerly"
                width={130}
                height={36}
                quality={100}
                priority={true}
                className="dark:block hidden h-[48px] md:h-[130px] w-auto"
            />
        </Link> 
    );
};

export default Logo;
