import { Link } from "react-dom"

const NavBar = () => {
	return (
		<div className="flex flex-col bg-amber-500 w-100% box- h-20">
			<Link to={"/"}>Home</Link>
		</div>
	);
};

export default NavBar;