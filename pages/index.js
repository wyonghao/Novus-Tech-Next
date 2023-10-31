import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import FeatureCard41 from '../components/feature-card41'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Novus Tech</title>
          <meta
            name="description"
            content="Novus Tech: Technology Inclusive, discover cutting-edge services, expertise, and solutions for a brighter digital future."
          />
          <meta property="og:title" content="Novus Tech" />
          <meta
            property="og:description"
            content="Novus Tech: Technology Inclusive, discover cutting-edge services, expertise, and solutions for a brighter digital future."
          />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <div className="home-logo">
              <img
                alt="image"
                src="/external/novustechiconpurple-1500h-200w-200w.png"
                className="home-image"
              />
            </div>
            <div className="home-links-container">
              <a href="#HomeTop" className="home-link">
                Home
              </a>
              <a href="#WhyChooseUs" className="home-link01">
                Why Choose Us
              </a>
              <a href="#Services" className="home-link02 Anchor">
                services
              </a>
              <a href="#contact" className="home-link03 Anchor">
                contact
              </a>
            </div>
            <div className="home-cta-container"></div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <div className="home-logo1">
              <img
                alt="image"
                src="/external/novustechiconpurple-1500h-200w-200w.png"
                className="home-image01"
              />
            </div>
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="image"
                  src="/novustechiconpurple-1500h.png"
                  className="home-logo2"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links">
                <a href="#HomeTop" className="home-link04">
                  Home
                </a>
                <a href="#WhyChooseUs" className="home-link05">
                  <span className="home-text">Why Choose Us</span>
                  <br></br>
                </a>
                <a href="#Services" className="home-link06">
                  Services
                </a>
                <a href="#contact" className="home-link07">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>
        <header data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <div className="home-logo3">
              <img
                alt="image"
                src="/novustechiconpurple-1500h.png"
                className="home-image02"
              />
            </div>
            <div className="home-links-container1">
              <a href="#HomeTop" className="home-link08">
                Home
              </a>
              <a href="#WhyChooseUs" className="home-link09">
                Why Choose Us
              </a>
              <a href="#Services" className="home-link10 Anchor">
                services
              </a>
              <a href="#contact" className="home-link11 Anchor">
                contact
              </a>
            </div>
            <div className="home-cta-container1">
              <div data-role="BurgerMenu" className="home-burger-menu1">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu1">
              <div className="home-top1">
                <img
                  alt="image"
                  src="/novustechiconpurple-1500h.png"
                  className="home-image03"
                />
                <div data-role="CloseMobileMenu" className="home-container1">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-mid">
                <div className="home-links-container2">
                  <a href="#features" className="home-link12 Anchor">
                    features
                  </a>
                  <span className="home-link13 Anchor">services</span>
                  <a href="#about-us" className="home-link14 Anchor">
                    About Us
                  </a>
                  <a href="#contact" className="home-link15 Anchor">
                    contact
                  </a>
                </div>
                <button className="home-cta-btn Anchor button">
                  sTART BUILDING
                </button>
              </div>
              <div className="home-bot">
                <div className="home-social-links-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon08"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
              <header
                data-thq="thq-navbar"
                className="home-navbar-interactive1"
              >
                <img
                  alt="logo"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image04"
                />
                <div data-thq="thq-navbar-nav" className="home-desktop-menu1">
                  <nav className="home-links1">
                    <span>About</span>
                    <span className="home-text03">Features</span>
                    <span className="home-text04">Pricing</span>
                    <span className="home-text05">Team</span>
                    <span className="home-text06">Blog</span>
                  </nav>
                  <div className="home-buttons">
                    <button className="home-login button">Login</button>
                    <button className="button">Register</button>
                  </div>
                </div>
                <div data-thq="thq-burger-menu" className="home-burger-menu2">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu2">
                  <div className="home-nav1">
                    <div className="home-top2">
                      <img
                        alt="image"
                        src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                        className="home-logo4"
                      />
                      <div
                        data-thq="thq-close-menu"
                        className="home-close-menu1"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon16">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <nav className="home-links2">
                      <span className="home-text07">About</span>
                      <span className="home-text08">Features</span>
                      <span className="home-text09">Pricing</span>
                      <span className="home-text10">Team</span>
                      <span className="home-text11">Blog</span>
                    </nav>
                    <div className="home-buttons1">
                      <button className="home-login1 button">Login</button>
                      <button className="button">Register</button>
                    </div>
                  </div>
                  <div>
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="home-icon18"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon20"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon22"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </header>
        <div id="HomeTop" className="home-home">
          <div className="home-home-text-container">
            <img
              alt="image"
              src="/novustechbannnerpurple-400h.png"
              className="home-image05"
            />
            <h1 className="home-heading">
              <span className="home-text12">Welcome to Novus Tech</span>
              <br></br>
            </h1>
            <span className="home-text14">
              At Novus Technology, we are at the forefront of innovation,
              delivering cutting-edge technology solutions that drive businesses
              into the future. Our commitment to excellence and passion for
              innovation make us the partner of choice for companies seeking to
              transform their digital landscape.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1697895648538-0117b2383a03?ixid=M3w5MTMyMXwwfDF8YWxsfDU1fHx8fHx8Mnx8MTY5ODQzOTk4OHw&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="home-image06"
          />
        </div>
        <div className="home-section-separator"></div>
        <div id="WhyChooseUs" className="home-why-choose-us">
          <div className="home-heading-container">
            <h2 className="home-text15 Section-Heading">Why Choose Us</h2>
          </div>
          <div className="home-cards-container">
            <div className="home-feature-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1609619385076-36a873425636?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxpbm5vdmF0aW9ufGVufDB8fHx8MTY5ODQ0MTc4MHww&amp;ixlib=rb-4.0.3&amp;w=300"
                className="home-image07"
              />
              <span className="home-heading1 Card-Heading">
                Innovation Unleashed
              </span>
              <span className="home-text16">
                {' '}
                We&apos;re dedicated to pushing the boundaries of what&apos;s
                possible. Our team of experts thrives on solving complex
                challenges and turning innovative ideas into reality.
              </span>
            </div>
            <div className="home-feature-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1691073112675-9685bc6779bf?ixid=M3w5MTMyMXwwfDF8YWxsfDE1Mnx8fHx8fDJ8fDE2OTg0NDE1MDV8&amp;ixlib=rb-4.0.3&amp;w=300"
                className="home-image08"
              />
              <span className="home-heading2 Card-Heading">
                Tailored Solutions
              </span>
              <span className="home-text17">
                We understand that every business is unique. Our solutions are
                customized to fit your specific needs, ensuring optimal results.
              </span>
            </div>
            <div className="home-feature-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxleHBlcnR8ZW58MHx8fHwxNjk4NDQxNzE0fDA&amp;ixlib=rb-4.0.3&amp;w=300"
                className="home-image09"
              />
              <span className="home-heading3 Card-Heading">
                Proven Expertise
              </span>
              <span className="home-text18">
                With years of experience and a track record of success, Novus
                Technology is your trusted partner in technology, delivering
                results that matter.
              </span>
            </div>
          </div>
        </div>
        <div className="home-section-separator1"></div>
        <div id="Services" className="home-services">
          <div className="home-features">
            <h1 className="home-text19">
              <span>Discover our </span>
              <span>unique services</span>
            </h1>
            <div className="home-separator"></div>
            <div className="home-container2">
              <div className="home-container3">
                <FeatureCard41
                  title="Cloud Solutions"
                  description="Harness the power of the cloud for scalability, security, and cost-efficiency."
                  rootClassName="rootClassName1"
                ></FeatureCard41>
                <FeatureCard41
                  title="Software Development"
                  description="Crafting bespoke software solutions that streamline your operations and enhance customer experiences."
                  rootClassName="rootClassName4"
                ></FeatureCard41>
                <FeatureCard41
                  title="Cybersecurity"
                  description="Safeguard your digital assets with our top-tier cybersecurity measures and strategies."
                  rootClassName="rootClassName3"
                ></FeatureCard41>
                <FeatureCard41
                  title="AI and Machine Learning"
                  description="Leverage the latest in AI and ML to gain insights, automate processes, and innovate."
                  rootClassName="rootClassName2"
                ></FeatureCard41>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;w=500"
                className="home-image10"
              />
            </div>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div id="about-us" className="home-about-us">
          <div className="home-heading-container1">
            <h2 className="home-text22 Section-Heading">
              What&apos;s the story behind our product?
            </h2>
            <span className="home-secondary-text Section-Text">
              {' '}
              Lorem upsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod.
            </span>
            <button className="home-cta-btn1 button Anchor">
              START BUILDING
            </button>
          </div>
          <div className="home-text-container">
            <span className="home-text23 Section-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
            <span className="home-text24 Section-Text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </span>
          </div>
          <button className="home-cta-btn2 button Anchor">
            START BUILDING
          </button>
        </div>
        <div className="home-section-separator3"></div>
        <div className="home-testimonials">
          <h2 className="home-text25 Section-Heading">
            What are they saying about us?
          </h2>
          <div className="home-cards-container1">
            <div className="home-testimonial-card">
              <div className="home-card-heading">
                <div className="home-name-and-position">
                  <span className="Card-Heading">Will Evans</span>
                  <span className="home-position Card-Text">Position</span>
                </div>
                <div className="home-stars-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon24"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon26"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon28"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon30"
                  >
                    <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon32"
                  >
                    <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text26 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="home-testimonial-card1">
              <div className="home-card-heading1">
                <div className="home-name-and-position1">
                  <span className="Card-Heading">Marie Alba</span>
                  <span className="home-position1 Card-Text">Position</span>
                </div>
                <div className="home-stars-container1">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon34"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon36"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon38"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon40"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon42"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text27 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
            <div className="home-testimonial-card2">
              <div className="home-card-heading2">
                <div className="home-name-and-position2">
                  <span className="Card-Heading">Taylor Sam</span>
                  <span className="home-position2 Card-Text">Position</span>
                </div>
                <div className="home-stars-container2">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon44"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon46"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon48"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon50"
                  >
                    <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon52"
                  >
                    <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                  </svg>
                </div>
              </div>
              <span className="home-text28 Card-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed
                nisi. Nulla quis sem at nibh elementum imperdiet.
              </span>
            </div>
          </div>
        </div>
        <div className="home-section-separator4"></div>
        <div id="contact" className="home-contact">
          <div className="home-content-container">
            <h2 className="home-text29 Section-Heading">Get in Touch</h2>
            <span className="home-text30">
              Ready to explore what Novus Technology can do for your business?
              Contact us today, and let&apos;s embark on a path to a brighter
              digital future together.
            </span>
            <div className="home-locations-container">
              <div className="home-location-1">
                <span className="home-heading4">UK Office</span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon54">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span>
                    2 Hampton Court Road, Birmingham, England, B17 9AE
                  </span>
                </div>
                <div className="home-email">
                  <svg viewBox="0 0 1024 1024" className="home-icon56">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <a
                    href="mailto:info@novustech.io?subject=Inquiry About Service"
                    className="home-link16 Section-Text"
                  >
                    info@novustech.io
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container4">
            <div className="home-container5">
              <React.Fragment>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.797444819859!2d-1.9729792342563603!3d52.460984373989405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd8f499a2837%3A0x41fdcabf7efb12b!2s2%20Hampton%20Ct%20Rd%2C%20Harborne%2C%20Birmingham%20B17%209AE!5e0!3m2!1sen!2suk!4v1698693604398!5m2!1sen!2suk"
                  width={600}
                  height={450}
                  style={{ border: '0' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrer-policy="no-referrer-when-downgrade"
                />
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
          }
          .home-desktop-menu {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1414px;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-logo {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image {
            width: 50px;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-links-container {
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link {
            font-style: normal;
            font-weight: 700;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link01 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-link02 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-cta-container {
            display: flex;
            align-items: center;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: dashed;
            border-width: 0px;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-logo1 {
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image01 {
            width: 50px;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: absolute;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .home-logo2 {
            width: 50px;
            height: auto;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: 16px;
            height: 16px;
          }
          .home-links {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link04 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link05 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link06 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link07 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            display: none;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-logo3 {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image02 {
            width: 50px;
            object-fit: cover;
          }
          .home-links-container1 {
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link08 {
            font-style: normal;
            font-weight: 700;
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link09 {
            color: var(--dl-color-gray-black);
            font-size: 18px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-link10 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-cta-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu1 {
            display: none;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
          }
          .home-icon04 {
            width: 36px;
            height: 36px;
          }
          .home-mobile-menu1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-top1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image03 {
            width: 50px;
            object-fit: cover;
          }
          .home-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon06 {
            width: 24px;
            height: 24px;
          }
          .home-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links-container2 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link13 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link14 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link15 {
            text-decoration: none;
          }
          .home-cta-btn {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-bot {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-social-links-container {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon08 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
          }
          .home-navbar-interactive1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .home-image04 {
            height: 2rem;
          }
          .home-desktop-menu1 {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text03 {
            margin-left: 32px;
          }
          .home-text04 {
            margin-left: 32px;
          }
          .home-text05 {
            margin-left: 32px;
          }
          .home-text06 {
            margin-left: 32px;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-width: 0px;
            margin-right: 32px;
          }
          .home-burger-menu2 {
            display: none;
          }
          .home-icon14 {
            width: 16px;
            height: 16px;
          }
          .home-mobile-menu2 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .home-logo4 {
            height: 2rem;
          }
          .home-close-menu1 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon16 {
            width: 16px;
            height: 16px;
          }
          .home-links2 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text08 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text10 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login1 {
            margin-right: 32px;
          }
          .home-icon18 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .home-icon20 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .home-icon22 {
            width: 16px;
            height: 16px;
          }
          .home-home {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-home-text-container {
            width: 466px;
            height: 397px;
            display: flex;
            align-items: flex-start;
            margin-left: 50px;
            flex-direction: column;
          }
          .home-image05 {
            width: 300px;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-heading {
            width: auto;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text14 {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-image06 {
            width: 600px;
            height: 397px;
            object-fit: contain;
            margin-right: var(--dl-space-space-tripleunit);
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-why-choose-us {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tenunits);
          }
          .home-heading-container {
            width: 802px;
            height: 63px;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text15 {
            width: 584px;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-feature-card {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image07 {
            width: 267px;
            height: 197px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text16 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-feature-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image08 {
            width: 273px;
            height: 185px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text17 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-feature-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-image09 {
            width: 279px;
            height: 178px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .home-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text18 {
            color: var(--dl-color-gray-500);
            text-align: center;
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-services {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            max-width: 1400px;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text19 {
            font-size: 3rem;
            margin-bottom: 32px;
            text-transform: capitalize;
          }
          .home-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 32px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container3 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .home-image10 {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-about-us {
            width: 100%;
            display: none;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-heading-container1 {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text22 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-secondary-text {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text23 {
            color: var(--dl-color-gray-500);
          }
          .home-text24 {
            color: var(--dl-color-gray-500);
          }
          .home-cta-btn2 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-testimonials {
            width: 100%;
            display: none;
            padding: var(--dl-space-space-tripleunit);
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text25 {
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-cards-container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-testimonial-card {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-position {
            color: var(--dl-color-gray-700);
          }
          .home-stars-container {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon24 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon26 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon28 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon30 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon32 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text26 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .home-testimonial-card1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position1 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-position1 {
            color: var(--dl-color-gray-700);
          }
          .home-stars-container1 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon34 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon36 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon38 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon40 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon42 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text27 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .home-testimonial-card2 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card-heading2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-name-and-position2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-position2 {
            color: var(--dl-color-gray-700);
          }
          .home-stars-container2 {
            width: 50%;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon44 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon46 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon48 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon50 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .home-icon52 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text28 {
            color: var(--dl-color-gray-500);
            text-align: left;
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-contact {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            border-color: #ffffff;
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-content-container {
            width: 567px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-self: stretch;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            flex-direction: column;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text29 {
            margin-top: var(--dl-space-space-doubleunit);
            border-color: #ffffff;
            border-width: 1px;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text30 {
            padding-top: var(--dl-space-space-doubleunit);
            border-color: #ffffff;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-locations-container {
            width: 100%;
            height: 194px;
            display: flex;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: row;
          }
          .home-location-1 {
            width: 476px;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-right: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-heading4 {
            font-size: 24px;
            font-style: normal;
            font-family: 'Roboto';
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon54 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon56 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-link16 {
            text-decoration: none;
          }
          .home-container4 {
            width: 628px;
          }
          .home-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              flex: 1;
              position: relative;
              align-items: center;
            }
            .home-link03 {
              align-self: center;
            }
            .home-home {
              flex-direction: column-reverse;
            }
            .home-home-text-container {
              width: 80%;
              margin-left: 0px;
            }
            .home-image06 {
              width: 80%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-feature-card {
              align-self: center;
            }
            .home-features {
              align-items: center;
            }
            .home-container2 {
              flex-direction: column;
            }
            .home-image10 {
              width: 300px;
              height: 300px;
              margin-top: 32px;
              margin-left: 0px;
            }
            .home-about-us {
              flex-direction: column;
            }
            .home-heading-container1 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-cta-btn1 {
              width: 40%;
              display: none;
            }
            .home-text-container {
              width: 100%;
            }
            .home-cta-btn2 {
              width: 280px;
              display: block;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-locations-container {
              flex-wrap: wrap;
            }
            .home-location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-links-container {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .home-icon {
              fill: #000000;
            }
            .home-link04 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link05 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link06 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-link07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-links-container1 {
              display: none;
            }
            .home-burger-menu1 {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon04 {
              fill: var(--dl-color-gray-white);
            }
            .home-mobile-menu1 {
              display: none;
            }
            .home-navbar-interactive1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-desktop-menu1 {
              display: none;
            }
            .home-burger-menu2 {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-text07 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text08 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text09 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text10 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text11 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-heading {
              text-align: center;
            }
            .home-text12 {
              text-align: center;
            }
            .home-text14 {
              text-align: center;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-feature-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-feature-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-feature-card2 {
              width: 70%;
            }
            .home-features {
              padding-left: 32px;
              padding-right: 32px;
            }
            .home-text19 {
              text-align: center;
            }
            .home-container2 {
              flex-direction: column;
            }
            .home-about-us {
              align-items: center;
            }
            .home-heading-container1 {
              align-items: center;
            }
            .home-text22 {
              text-align: center;
            }
            .home-secondary-text {
              text-align: center;
            }
            .home-text25 {
              text-align: center;
            }
            .home-cards-container1 {
              align-items: center;
              flex-direction: column;
            }
            .home-testimonial-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container {
              justify-content: flex-end;
            }
            .home-testimonial-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container1 {
              justify-content: flex-end;
            }
            .home-testimonial-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-stars-container2 {
              justify-content: flex-end;
            }
            .home-contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .home-content-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-icon {
              fill: #000000;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-burger-menu1 {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .home-cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-navbar-interactive1 {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu2 {
              padding: 16px;
            }
            .home-home-text-container {
              width: 100%;
            }
            .home-image06 {
              width: 100%;
            }
            .home-feature-card {
              width: 100%;
            }
            .home-feature-card1 {
              width: 100%;
            }
            .home-feature-card2 {
              width: 100%;
            }
            .home-features {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .home-container3 {
              grid-template-columns: 1fr;
            }
            .home-image10 {
              width: 250px;
              height: 250px;
            }
            .home-secondary-text {
              text-align: center;
            }
            .home-text25 {
              text-align: center;
            }
            .home-testimonial-card {
              width: 100%;
            }
            .home-testimonial-card1 {
              width: 100%;
            }
            .home-testimonial-card2 {
              width: 100%;
            }
            .home-content-container {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text29 {
              text-align: center;
            }
            .home-locations-container {
              margin-bottom: 0px;
            }
            .home-location-1 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
