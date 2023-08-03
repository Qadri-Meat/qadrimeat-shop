import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      )}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop"}>
              {t("Shop")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop?category=beef"}>
                  {t("Beef")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop?category=mutton"}>
                  {t("Mutton")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/shop?category=chicken"}>
                  {t("Chicken")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>{t("About")}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>{t("Contact")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
