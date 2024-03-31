import {
    useState,
    useEffect,
    useRef
} from "react";

import Dropdown from "./Dropdown";

const MenuItems = ({
    items,
    depthLevel
}) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return ( 
        <li className = {!depthLevel ? items.class: "menu-items"}
        ref = {
            ref
        }
        onMouseEnter = {
            onMouseEnter
        }
        onMouseLeave = {
            onMouseLeave
        } 
        >
        { items.submenu ? ( <>
                <a aria-haspopup = "nav-options-list"
                aria-expanded = {
                    dropdown ? "true" : "false"
                }
                onClick = {
                    () => setDropdown((prev) => !prev)
                } >
                {
                    items.title
                } {
                    " "
                } 
                </a> 
                <Dropdown depthLevel = {
                    depthLevel
                }
                submenus = {
                    items.submenu
                }
                dropdown = {
                    dropdown
                }/> </>
            ) : ( <a href = {items.to} > {
                    items.title
                } </a>
            )
        } </li>
    );
};

export default MenuItems;