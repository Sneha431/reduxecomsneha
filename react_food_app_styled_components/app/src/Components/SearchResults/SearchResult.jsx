import styled from "styled-components";

import foodimage from "../../assets/bg.png";
import { Button, Container } from "../../App";
const base_url = import.meta.env.VITE_APP_BASE_URL;
console.log(base_url);
const SearchResult = ({ data: foods, nomatch }) => {
  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {nomatch && <p className="nomatchdiv">No matching found..</p>}
          {foods?.map((food) => (
            <FoodCard key={food.name}>
              <div className="food_image">
                <img src={base_url + food.image} alt={food.name} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{food.name}</h3>
                  <p>{food.text}</p>
                </div>
                <div className="btnprice">
                  <Button>${food.price.toFixed(2)}</Button>
                </div>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;
const FoodCardContainer = styled.section`
  padding: 10px;
  min-height: calc(100vh - 200px);
  min-width: calc(100vw - 20px);
  background-image: url(${foodimage});
  background-size: cover;
`;
const FoodCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 2rem;
  column-gap: 20px;
  padding: 10px;
  .nomatchdiv {
    display: flex;
    align-items: center;

    justify-content: center;
    margin-top: 100px;
  }
`;
const FoodCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 22rem;
  padding: 8px 6px;
  background-image: linear-gradient(to bottom right, #6d6666a3, #84845c4d);
  opacity: 0.9;
  border-radius: 6px;

  .info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .btnprice {
    display: flex;
    align-items: self-end;

    justify-content: end;
    margin-top: 27px;
  }
`;
