import Link from "next/link";

const Header = () => {
  return (
    <div className="text-3xl font-bold my-6">
      <Link href={"/"} className={"text-[var(--palitra-3)]"}>Все Статьи</Link>
    </div>
  )
}

export default Header;