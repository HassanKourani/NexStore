import styled from "styled-components";
import { Breadcrumb, Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledLogo = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100%;
  object-fit: cover;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
`;

export const StyledContent = styled(Content)`
  padding: 0 48px;
`;

export const StyledFooter = styled(Footer)`
  text-align: center;
`;

export const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 16px 0;
`;

export const StyledChild = styled.div`
  min-height: 280px;
  padding: 24px;
`;
