import React from "react";

const Home = (props) => {
  const { homeUrl } = props;
  return <div>{homeUrl?.total_pages}</div>;
};

export default Home;
