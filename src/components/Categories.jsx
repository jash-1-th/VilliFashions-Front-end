import styled from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} />
      ))}
    </Container>
  );
};

export default Categories;
