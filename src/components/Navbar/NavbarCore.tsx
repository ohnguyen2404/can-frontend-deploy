import Image from "next/image";
import { useRouter } from "next/router";
import { LINKS } from "../../utils/settings";


type TNavbarCore = {
    textColor: "white" | "black",
    logoColor: "white" | "red" | "blue",
}

const NavbarCore = (props: TNavbarCore) => {
    const router = useRouter();
    const currentPath = router.asPath;

    return (
        <nav className={`w-full flex justify-between items-center`}>
            <Image src={`/logo_${props.logoColor}.png`} alt="logo" width={75} height={59} />
            <ul className="flex flex-row flex-1 items-center justify-end">
                {LINKS.map((link, index) => (
                    <li className={`uppercase cursor-pointer text-xl text-${props.textColor} ${props.textColor === "black" ? "font-semibold" : "font-normal"} ${index === LINKS.length - 1 ? "mr-0" : "mr-10"} ${currentPath.includes(link.id) && "underline underline-offset-8"}`}
                        key={link.id}>
                        <a onClick={() => {
                            router.push(`#${link.id}`);
                        }}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavbarCore;