import { MouseEvent, useRef } from "react";
import * as Styled from "./styles";

export default function Header() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (linkRef.current !== null) {
      const getAttribute = linkRef.current.getAttribute("href")!;
      const airpodElement = document.querySelector(getAttribute);

      const distanceToTop = airpodElement.offsetTop;

      scrollTo({
        behavior: "smooth",
        top: distanceToTop - 100,
      });
    }
  }

  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Title>AirPods</Styled.Title>
        <Styled.Navigation>
          <Styled.Menu>
            <Styled.List>
              <Styled.Link>Description</Styled.Link>
            </Styled.List>
            <Styled.List>
              <Styled.Link
                href="#airpods"
                ref={linkRef}
                onClick={(event) => handleClick(event)}
              >
                Specifications
              </Styled.Link>
            </Styled.List>
            <Styled.List>
              <Styled.Link>Buy Now</Styled.Link>
            </Styled.List>
          </Styled.Menu>
        </Styled.Navigation>
      </Styled.Container>
    </Styled.Header>
  );
}
