import React from "react";
import styled from "styled-components";
import BgImg from "../assets/bg-image.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Section = styled.section`
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  padding-left: 14rem;
  padding-top: 8rem;
  @media (max-width: 1024px) {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Right = styled.div`
  width: 80%;
  @media (max-width: 1024px) {
    padding: 2rem;
    margin: auto;
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 400;
`;

const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 80%;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Get 2 FREE Stocks <br /> valued up to $1850!
          </Title>
          <Desc>
            Open and fund a brokerage account with $100 or more and you will
            have a chance of claiming stocks like <span> GOOG, FB, SBUX</span>{" "}
            and more!
          </Desc>
          <Button href="https://bit.ly/webull-join" target="_blank">
            <span>Claim </span>
            <MdKeyboardArrowRight />
          </Button>
        </Left>
        <Right>
          <Image alt="hero" src={BgImg}></Image>
        </Right>
      </Content>
    </Section>
  );
};

export default Hero;
