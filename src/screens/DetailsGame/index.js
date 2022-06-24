import { React, useState, useEffect } from "react";
import { Link, useParams, useMatch } from "react-router-dom";
import axios from "axios";
const DetailsGame = () => {
  let { params } = useParams();
  // let { url } = useMatch();
  const [dataSource, setDataSource] = useState(null);
  const urlRequest = `/games?id=`;
  useEffect(() => {
    axios.get(`${urlRequest}${params}`).then((res) => {
      setDataSource(res.data[0]);
    });
    console.log(params);
    console.log(dataSource);
  }, [params]);
  // console.log(id);
  // console.log("aa");
  // console.log(dataSource);
  return (
    <div>
      {dataSource && <div>{dataSource.caption}</div>}
      {params}
    </div>
  );
};
export default DetailsGame;
