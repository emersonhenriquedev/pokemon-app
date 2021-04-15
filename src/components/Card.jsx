import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  /* box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5); */
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 3px 22px;
  padding: 1%;
  box-sizing: border-box;
  a {
    display: flex;
    justify-content: space-around;
    text-decoration: none;

    .labels {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .id {
      color: #585555;
      font-size: 0.9rem;
    }

    .name {
      font-weight: 400;
      color: #000;
      font-size: 1.4rem;
    }
  }

  .pokemon-types {
    display: flex;
    justify-content: flex-start;
    span {
      font-size: 0.9rem;
      margin-right: 1%;
      color: #585555;
    }
  }

  @media (max-width: 540px) {
    width: 300px;
  }
`;

export default function Card({ name, imgUrl, id, types }) {
  return (
    <Container>
      <Link to={`/pokemon/${id}`}>
        <img src={imgUrl} alt="" className="image" />
        <div className="labels">
          <p className="id">#{id}</p>
          <p className="name">{name}</p>
        </div>
      </Link>
      <div className="pokemon-types">
        {types.map((type, index) => {
          return <span key={index}>{type.type.name} </span>;
        })}
      </div>
    </Container>
  );
}
