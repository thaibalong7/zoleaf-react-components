import React, { FC } from "react";
import { get } from 'vendors/lodash';
// import _ from 'lodash';
import './styles.scss';

const Home: FC = () => {
  const a = get({}, '');
  return <div className="home">Hello world HOME TEST {a}</div>;
};

export default Home;
