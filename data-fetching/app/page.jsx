import React from "react";

const getData1 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
    // next : {revalidate : 10} Cache with time
  });
  return res.json();
};

const getData2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
    cache: "no-store",
    // next : {revalidate : 10} Cache with time
  });
  return res.json();
};

const getData3 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
    cache: "no-store",
    // next : {revalidate : 10} Cache with time
  });
  return res.json();
};

async function HomePage() {
  const [getData1, getData2, getData3] = await Promise.all([
    data1,
    data2,
    data3,
  ]);

  console.log(data1,data2,data3);
  // const data = await getData();
  // console.log(data);
  return <h1>Data fetching</h1>;
}

export default HomePage;
