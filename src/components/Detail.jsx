import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import db from "../firebase";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("No such document in firebase!");
        }
      })
      .catch((error) => {
        console.log("error getting documents", error);
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddListButton>
            <span>+</span>
          </AddListButton>
          <GroupWatchButton>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatchButton>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh -70px);
  padding: 0 calc(3.5vw +5px);
  position: relative;
  margin-left: 30px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
  margin-top: 10px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`;

const PlayButton = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddListButton = styled.button`
  margin-right: 16px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  cursor: pointer;

  span {
    font-size: 30px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    span {
      font-size: 24px;
    }
  }
`;

const GroupWatchButton = styled(AddListButton)`
  background-color: rgba(0, 0, 0, 0.8);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  
  color: rgb(249, 249, 249);
  max-width: 80%;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
