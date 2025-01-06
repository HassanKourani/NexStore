import { Breadcrumb, Menu } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import Logo from "../assets/logo_transparent.png";
import {
  StyledBreadcrumb,
  StyledChild,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledImage,
} from "../styles/landing-page-layout";
import { StyledLogo } from "../styles/landing-page-layout";
import { StyledLayout } from "../styles/landing-page-layout";

const items = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "stores",
    label: "Stores",
  },
  {
    key: "categories",
    label: "Categories",
  },
];

const SELECTED_KEYS = {
  stores: "stores",
  categories: "categories",
  home: "home",
};

const LandingPageLayout = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const navigate = useNavigate();
  const selectedKey =
    pathSegments.length === 0
      ? SELECTED_KEYS.home
      : SELECTED_KEYS[pathSegments[0] as keyof typeof SELECTED_KEYS];

  return (
    <StyledLayout>
      <StyledHeader>
        <StyledLogo>
          <StyledImage src={Logo} alt="logo" />
        </StyledLogo>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(e) => {
            navigate(e.key === "home" ? "/" : e.key);
          }}
        />
      </StyledHeader>
      <StyledContent>
        <StyledBreadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            return (
              <Breadcrumb.Item key={index}>
                {isLast ? (
                  segment.charAt(0).toUpperCase() + segment.slice(1)
                ) : (
                  <Link to={path}>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                )}
              </Breadcrumb.Item>
            );
          })}
        </StyledBreadcrumb>
        <StyledChild>
          <Outlet />
        </StyledChild>
      </StyledContent>
      <StyledFooter>
        NexStore ©{new Date().getFullYear()} Created by NexStore Team
      </StyledFooter>
    </StyledLayout>
  );
};

export default LandingPageLayout;
