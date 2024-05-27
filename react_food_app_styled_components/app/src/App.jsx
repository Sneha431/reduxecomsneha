import styled from "styled-components";
import logo from "./assets/logo.svg";
import { ImSpinner2 } from "react-icons/im";
import { useEffect, useState } from "react";
import SearchResult from "./Components/SearchResults/SearchResult";
const base_url = import.meta.env.VITE_APP_BASE_URL;

const App = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [nomatch, setnomatch] = useState(false);
  const [error, seterror] = useState([]);
  const [filltereddata, setfilltereddata] = useState([]);
  const [selectedbtn, setselectedbtn] = useState("all");
  const fetchdata = async () => {
    setloading(true);
    try {
      const response = await fetch(base_url);
      const result = await response.json();
      console.log(result);

      setdata(result);
      setfilltereddata(result);

      setloading(false);
    } catch (error) {
      seterror(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const getfiltereddata = (value) => {
    const filteredData = data?.filter((food) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length !== 0) {
      setfilltereddata(filteredData);
      console.log("match");
      setnomatch(false);
    } else {
      setfilltereddata([]);
      setnomatch(true);
    }
  };
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];
  const getcategorydata = (type) => {
    console.log(type);
    if (type === "all") {
      setfilltereddata(data);
      setselectedbtn("all");
      return;
    } else {
      const filteredData = data?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase())
      );
      if (filteredData !== "") {
        setfilltereddata(filteredData);
        setselectedbtn(type);
        return;
      }
    }
  };
  const errordiv = <div>{error}</div>;
  return (
    <>
      {loading && (
        <Spinner>
          {" "}
          <ImSpinner2 />
        </Spinner>
      )}
      <Container>
        {error && errordiv}

        <TopContainer>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search Food"
              onChange={(e) => getfiltereddata(e.target.value)}
            />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterBtns.map((btn) => (
            <Button
              key={btn.name}
              onClick={() => getcategorydata(btn.type)}
              isselected={selectedbtn === btn.type}
            >
              {btn.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>

      <SearchResult
        data={filltereddata}
        base_url={base_url}
        nomatch={nomatch}
      />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      padding: 0 10px;
      border-radius: 5px;
      height: 30px;
      font-size: 15px;
      &::placeholder {
        color: white;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 120px;
  }
`;
const FilterContainer = styled.section`
  max-width: 300px;
  margin: 0 auto;
  gap: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Button = styled.section`
  background: ${({ isselected }) => (isselected ? "#f22f2f" : "#ff4343")};
  outline: 1px solid ${({ isselected }) => (isselected ? "white" : "#ff4343")};
  cursor: pointer;
  border: none;
  background-color: #ff4343;
  color: white;
  font-weight: 400;
  border-radius: 6px;
  padding: 10px;
  width: 80px;
  text-align: center;
  &:hover {
    background-color: #ff434344;
  }
`;
const Spinner = styled.div`
  margin: auto;
  max-width: 100vw;
  padding: 10px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
`;
