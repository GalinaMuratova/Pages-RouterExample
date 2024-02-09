import React, {FC, PropsWithChildren} from 'react';
import Header from "@/components/Header/Header";
import Meta from "@/components/seo/Meta";
import {IMeta} from "@/types";

const Layout: FC<PropsWithChildren<IMeta>> = ({children, title, description}) => {
    return (
        <Meta title={title} description={description}>
            <Header/>
            <main>
                {children}
            </main>
        </Meta>
    );
};

export default Layout;