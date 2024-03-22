import { useEffect, useLayoutEffect, useRef } from "react";
import { BatteryCharging, Clock, Coffee } from "phosphor-react";

import Airpod from "../../assets/airpods.png";

import * as Styled from "./styles";
import { useTheme } from "styled-components";

export default function Airpods() {
  const airpodsRef = useRef<HTMLAnchorElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (airpodsRef && airpodsRef.current !== null) {
      const distanceToTop = airpodsRef.current.offsetTop - 300;

      window.addEventListener("scroll", () => {
        if (window.scrollY >= distanceToTop) {
          const wrap = airpodsRef.current?.querySelectorAll(".wrap");
          const product = airpodsRef.current?.querySelector(".product");

          wrap?.forEach((element) => element?.classList.add("active"));
          product?.classList.add("active");
        }
      });
    }
  }, []);

  return (
    <Styled.Container id="airpods" ref={airpodsRef}>
      <Styled.Info>
        <Styled.Wrap className="wrap">
          <Styled.Description className="align-center">
            <Clock size={14} color={theme.colors.blue} /> More than
          </Styled.Description>
          <Styled.Title>
            24{" "}
            <Styled.Title
              style={{ margin: "0 5px", fontWeight: "400", fontSize: "2rem" }}
            >
              h
            </Styled.Title>
          </Styled.Title>
          <Styled.Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Styled.Description>
        </Styled.Wrap>

        <Styled.Wrap className="wrap">
          <Styled.Description className="align-center">
            <BatteryCharging size={14} color={theme.colors.blue} /> More than
            Limit
          </Styled.Description>
          <Styled.Title>
            5
            <Styled.Title
              style={{ margin: "0 5px", fontWeight: "400", fontSize: "2rem" }}
            >
              h
            </Styled.Title>
          </Styled.Title>
          <Styled.Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Styled.Description>
        </Styled.Wrap>

        <Styled.Wrap className="wrap">
          <Styled.Description className="align-center">
            <Coffee size={14} color={theme.colors.blue} />
            Limit
          </Styled.Description>
          <Styled.Title>
            15
            <Styled.Title
              style={{ margin: "0 5px", fontWeight: "400", fontSize: "2rem" }}
            >
              min
            </Styled.Title>
          </Styled.Title>
          <Styled.Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Styled.Description>
        </Styled.Wrap>
      </Styled.Info>
      <Styled.Product className="product">
        <Styled.Image src={Airpod} draggable={false} />
      </Styled.Product>
    </Styled.Container>
  );
}
