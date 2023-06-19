import { useEffect } from "react";

const Menu = () => {

  useEffect(() => {
  }, []);

  return (
    <div>
      <ul className="menu w-56 bg-neutral text-neutral-content">
        <li className="menu-title" style={{ color: "#fff" }}>
          套牌列表
        </li>
        <li>
          <a>E-Hero 系列</a>
        </li>
        <li>
          <a>三幻神</a>
        </li>
        <li>
          <a>我的单卡</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
