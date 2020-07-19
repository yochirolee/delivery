import React,{useContext}  from 'react';
import Head from "next/head";
import {withAuthWrapper} from '../hoc/withAuthWrapper';

import Link from "next/link";
import Header from "./header";

const name = "Yochiro";
export const siteTitle = "Restaurant App";


function Layout({ children, home }) {



  return (
    <div className="bg-red-600 h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>

      <main>{children}</main>
     
    </div>
  );
}
export default Layout;
