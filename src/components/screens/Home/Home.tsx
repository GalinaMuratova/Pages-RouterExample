import React from 'react';
import Layout from "@/components/layout/Layout";

interface Props {
    text: string
}
const Home: React.FC<Props> = ({text}) => {
    return (
        <Layout title='Home' description='Some text'>
            <h1>Home page</h1>
            <p>{text}</p>
        </Layout>
    );
};

export default Home;