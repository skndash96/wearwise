import { FaRegBookmark, FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";

const Header: React.FC = () => {
    return (
        <header className="p-2 flex items-center justify-between bg-white/75 backdrop-blur-md">
            <h1 className="text-lg font-bold">
                <span className="mr-2">💅</span>
                Wearwise
            </h1>

            <div>
                <ul className="flex items-center gap-2">
                    <Button variant="ghost" className="px-2">
                        <FaSearch />
                        <span className="max-sm:hidden">
                            Explore
                        </span>
                    </Button>
                    <Button variant="ghost" className="px-2">
                        <FaRegBookmark />
                        <span className="max-sm:hidden">
                            Saved
                        </span>
                    </Button>
                    <Button className="">
                        Sign up
                    </Button>
                </ul>
            </div>
        </header>
    );
};

export default Header;