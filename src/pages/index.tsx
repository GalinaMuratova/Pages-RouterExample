import React from 'react';
import Home from "@/components/screens/Home/Home";

const HomePage = ({fact}) => {
  return <Home text={fact}/>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://catfact.ninja/fact');
    const json = await res.json();

    return {
      props: {
        fact: json.fact,
      },
    };
  } catch (error) {
    console.error('Error', error);
    return {
      props: {
        fact: '',
      },
    };
  }
};

export default HomePage;

