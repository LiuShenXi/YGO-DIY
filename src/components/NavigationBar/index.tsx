import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationBar = () => {
  const router = useRouter();
  
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">YGO-DIY</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/my-cards" className={router.pathname == "/my-cards" ? "active" : ""}>我的卡牌</Link>
          </li>
          <li>
            <Link href="/create-card" className={router.pathname == "/create-card" ? "active" : ""}>卡牌制作</Link>
          </li>
          <li>
            <Link href="/card-square" className={router.pathname == "/card-square" ? "active" : ""}>卡牌广场</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/logout" className="btn">登出</Link>
      </div>
    </div>
  );
};

export default NavigationBar;
