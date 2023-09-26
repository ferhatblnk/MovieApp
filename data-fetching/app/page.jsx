import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json();
};

async function HomePage() {
  const data = await getData();
  console.log(data);
  return <h1>Data fetching</h1>;
}

export default HomePage;
