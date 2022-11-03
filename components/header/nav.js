import Style from "./nav.module.css"
import Link from "next/link";
function Navbar() {
  return <div className={Style.MainWrap}>
    <ul className={Style.ul}>
        <li className={Style.Link}>
            <Link href={'/'}>Home</Link>
        </li>
        <li className={Style.Link}>
            <Link href={'/index'}>Contact</Link>
        </li>

    </ul>
  </div>;
}
export default Navbar;