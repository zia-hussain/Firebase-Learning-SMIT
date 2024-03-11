import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";
import Img from "../../../Components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      {data?.length && data?.length > 0 && (
        <ContentWrapper>
          <div className="sectionHeading">Top Cast</div>
          {!loading ? (
            <div className="listItems">
              {data?.map((item) => {
                let imgUrl = item?.profile_path
                  ? url?.profile + item?.profile_path
                  : avatar;
                return (
                  <div className="listItem" key={item?.id}>
                    <div className="profileImg">
                      <Img src={imgUrl} alt={item?.name} />
                    </div>
                    <div className="name">{item?.name}</div>
                    <div className="character">{item?.character}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="castSkeleton">
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
            </div>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default Cast;
