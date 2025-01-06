import { Card } from "antd";
import {
  StyledPageTitle,
  StyledCategoriesGrid,
  StyledCard,
} from "../styles/common";
import { Link } from "react-router";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Description 1",
      image: "https://placehold.co/300x300",
      slug: "electronics",
    },
    {
      id: 2,
      name: "Clothing",
      description: "Description 2",
      image: "https://placehold.co/300x300",
      slug: "clothing",
    },
    {
      id: 3,
      name: "Home & Office",
      description: "Description 3",
      image: "https://placehold.co/300x300",
      slug: "home-and-office",
    },
  ];

  return (
    <div>
      <StyledPageTitle level={2}>Categories</StyledPageTitle>
      <StyledCategoriesGrid>
        {categories.map((category) => (
          <Link key={category.id} to={`/${category.slug}`}>
            <StyledCard
              cover={
                <img
                  style={{ objectFit: "cover", width: "100%", height: 150 }}
                  src={category.image}
                  alt={category.name}
                />
              }
            >
              <Card.Meta title={category.name} />
            </StyledCard>
          </Link>
        ))}
      </StyledCategoriesGrid>
    </div>
  );
};

export default Categories;
