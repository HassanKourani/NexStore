import { Card } from "antd";
import Title from "antd/es/typography/Title";
import { styled } from "styled-components";

export const StyledPageTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const StyledCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 24px;
  padding: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 16px;
  }
`;

export const StyledCard = styled(Card)`
  transition: all 0.3s ease;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;
