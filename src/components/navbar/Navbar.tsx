import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
      </div>
    </div>
  );
};

export default Navbar;
