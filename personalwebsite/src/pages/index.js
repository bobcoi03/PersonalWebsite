import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/nav'

import { useRef, useEffect } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const audioRef = useRef(null);
  
  const playPronunciationAudio = () => {
    audioRef.current.play();
  }

  return (
    <>
      <Head>
        <title>Quang Minh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favIcon.png" />
      </Head>
      <NavBar/>
      <div className="main">
      <div className="profile">
        <img 
          src="favIcon.png"
          width={150}
          height={150}
          className="profilePicture"
        />
        <div className="profileTextWrapper">
          <div>
            <text className="profileText">
              Hi, I'm Quang Minh, but you can call me Minh. 
            </text>
            <div
              className="audioIcon"
            >
              <img
                className="audioIcon"
                onClick={playPronunciationAudio}
                width={15}
                height={15}
                src="audioIcon.png"
              />
              <div className="tooltipText">
                Press to hear pronunciation
              </div>
              <audio
                ref={audioRef}
                id="pronunciationAudio"
                src="namePronunciation.mp3"
              />
            </div>
          </div>
          <div>
            <p className="profileText">
              I'm a software engineer and value investor.
            </p>
          </div>
          <div>
            <p className="profileText">
              I like doing things that bring joy to people's lives and making tools that make life easier. 
              The fields that I'm most interested in are AI, social applications and finance.
            </p>  
          </div>
          <div>
            <p className="profileText">
              <text>
              I'm currently working on&nbsp;
              <Link href="/blogs/catchUp">CatchUp</Link>, 
              an app that helps you keep up
              with your close friends on a daily.
              </text>
            </p>  
          </div>       
        </div>
      </div>
      <div className="footer">
        <a 
          className='navText'
          target="_blank"
          href="https://www.linkedin.com/in/minh-luong-95884219b/" 
        >
          LinkedIn
        </a>
        <a 
          className="navText"
          target="_blank"
          href="https://github.com/bobcoi03" 
        >
          Github
        </a>
        <a 
          className="navText"
          target="_blank"
          href="mailto: luongquangminh23@gmail.com"
        >
          Email
        </a>
      </div>  
      </div>
    </>
  )
}
