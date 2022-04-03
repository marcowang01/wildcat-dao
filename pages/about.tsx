import Head from "next/head";
import Navbar from "../components/navbar";
import { ProposalInvestmentCard } from "../components/proposalInvestmentCard";
import styles from "../styles/Home.module.css";

export default function Home() {
    
    return (
      <div className={styles.container}>
        <Head>
          <title>Wildcat DAO</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <span className="text-lg font-bold mt-5">About</span>
        <main className="w-full flex flex-row py-4 flex-grow max-w-5xl">
        <span className="text-lg font-bold mt-5 text-center">
              NU Blockchain Group has decided to launch a DAO for more transparent governance, communication, and treasury. 
            </span>
        </main>
      </div>
    );
  }
  