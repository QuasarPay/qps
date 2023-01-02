import Head from 'next/head'
import Image from 'next/image'
import NextLink from "next/link"
import { Mulish } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React from 'react'

const mulish = Mulish({ subsets: ['latin'], weight:'400' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Quasar Payment System</title>
        <meta name="description" content="An Innovative way to transactions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qpsicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <NextLink href="/signin" passHref>
            <p>
              Get access to the Demo ⚡
            </p>
          </NextLink>
          <div className={styles.qpsser}>
              By 
                <a href="https://github.com/johnmiicheal" target="_blank" rel="noopener noreferrer">
                  Johnmiicheal
                </a> | 
                <a href="https://github.com/owolabioromidayo" target="_blank" rel="noopener noreferrer">
                  Oromidayo
                </a> | 
                <a href="https://github.com/ScientificX" target="_blank" rel="noopener noreferrer">
                  Otiger
                </a>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.qpslogo}>
              <Image
                src="/qps.svg"
                alt="13"
                width={100}
                height={40}
                priority
              />
            </div>
            <Image
              className={styles.logo}
              src="/qps_text.svg"
              alt="qps Logo"
              width={400}
              height={37}
              priority
            />
        </div>

        <div className={styles.grid}>
          <NextLink
            href="/audio"
            className={styles.card}
            passHref
          >
            <h2 className={mulish.className}>
              Audio Query System <span>-&gt;</span>
            </h2>
            <p className={mulish.className}>
              Find out how we leveraged a multilingual text-to-speech model to build an audio query system which determine actions
            </p>
          </NextLink>

          <NextLink
            href="/loans"
            className={styles.card}
            passHref
          >
            <h2 className={mulish.className}>
              Loan Worthiness System <span>-&gt;</span>
            </h2>
            <p className={mulish.className}>
              Learn more about our supervised learning model which we use to determine the optimal max loan amount.
            </p>
          </NextLink>

          <NextLink
            href="/social-banking"
            className={styles.card}
            passHref
          >
            <h2 className={mulish.className}>
              Social Banking as a Service <span>-&gt;</span>
            </h2>
            <p className={mulish.className}>
              See what makes social banking platform so much different as we take advantage of the advent of decentralized exchanges
            </p>
          </NextLink>

        </div>
      </main>
    </>
  )
}
