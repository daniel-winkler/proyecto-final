import { slide as Menu } from 'react-burger-menu';
import Navlinks from "./Navlinks";

export default function Burger() {
    return (
        <>
            {/* TODO: needs styling !! */}
            <Menu>
                <Navlinks />
            </Menu>
        </>
    )
}
