import { MouseEvent, useEffect, useRef, useState } from "react";
import { Mouse } from "phosphor-react";

import Phone1 from "../../assets/airpod1.png";
import Phone2 from "../../assets/airpod2.png";

import { useTheme } from "styled-components";
import * as Styled from "./styles";

export default function Main() {
  const theme = useTheme();

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    const airpodElement = document.getElementById("airpods");

    if (airpodElement && airpodElement !== null) {
      const distanceToTop = airpodElement.offsetTop!;

      scrollTo({
        behavior: "smooth",
        top: distanceToTop - 100,
      });
    }
  }

  return (
    <Styled.Container>
      <Styled.Info>
        <Styled.Title>Airpods</Styled.Title>
        <Styled.Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ullam consequuntur hic ut corporis error reiciendis, molestias quasi.
          Laudantium delectus beatae eum voluptate in praesentium debitis
          deleniti cupiditate magnam incidunt ducimus vero qui quas, quasi
          perspiciatis accusamus? Cumque a dicta corporis.
        </Styled.Description>
      </Styled.Info>
      <Styled.Phones>
        <img src={Phone1} alt="Air Pod" draggable={false} />
        <img src={Phone2} alt="Air Pod" draggable={false} />
      </Styled.Phones>
      <Styled.ScrollDown onClick={handleClick}>
        <Styled.ScrollContainer>
          <Styled.ScrollText>
            <span>Scroll Down </span>
            <span>For More</span>
          </Styled.ScrollText>
          <Mouse size={24} color={theme.colors.dark} weight="light" />
        </Styled.ScrollContainer>
      </Styled.ScrollDown>
    </Styled.Container>
  );
}
