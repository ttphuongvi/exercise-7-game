import { React, useState, useEffect } from "react";
import { Link, useParams, useMatch } from "react-router-dom";
import axios from "axios";
const DetailsGame = () => {
  let { params } = useParams();
  let { url } = useMatch();
  const [dataSource, setDataSource] = useState(null);
  const urlRequest = `/games?id=`;
  useEffect(() => {
    axios.get(`${urlRequest}${params.id}`).then((res) => {
      setDataSource(res.data);
    });
    console.log("aa");
  }, [params.id]);
  console.log(params, url);
  return <div></div>;
};
export default DetailsGame;
