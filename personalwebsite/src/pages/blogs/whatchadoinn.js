import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/nav'

export default function WhatChaDoinn() {
    return (
        <>
        <Head>
          <title>Peng</title>
          <meta name="description" content="Daily photo challenges, for fun, positivity and good vibes" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/playstore.png" />        
        </Head>
        <NavBar/>
        <div className="main">
            <div className='blogsWrapper'>
                <div className='blog'>
                    <div style={{marginTop: 30}}/>
                    <text className="blogTitle" style={{textAlign: 'center', fontSize: 55}}>
                        Peng6
                    </text>
                    <text className="blogDate">
                        Saturday 1, April 2023
                    </text>
                </div>
                <div class="app-icons">
                    <a href='https://apps.apple.com/us/app/whatchadoinn/id6446037266'
                        target="_blank"
                    >
                        <img
                            alt='Get it on App store'
                            style={{width: 136, height: 58}}
                            src="/imgs/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        />
                    </a>
                    <a href='https://play.google.com/store/apps/details?id=com.whatchadoinn'
                        target="_blank"
                    >
                        <img 
                            alt='Get it on Google Play' 
                            style={{width: 150, height: 58}}
                            src='https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png'
                        />
                    </a>
                </div>
                <div className="blogText" style={{textAlign: 'center', alignItems: 'center'}}>
                    <p style={{fontSize: 22}}>
                    Join our vibrant community and receive
                    a daily notification with an exciting photo challenge!
                    </p>
                    <p style={{fontSize: 22}}>
                    Whether it's a breathtaking landscape or a quirky selfie,
                    let your imagination run wild! Share your masterpiece
                    with friends effortlessly and discover their
                    unique perspectives too. 
                    </p>
                    <p style={{fontSize: 22}}>
                    Download now and start inspiring each other with your photographic talents! (Everyday at 12:00:00 GMT)
                    </p>
                </div>
                </div>
            </div>
        </>
    )
};