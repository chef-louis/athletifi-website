/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'about-hero': "url('/assets/img/webp/about-hero-img.webp')",
        'blue-underline': "url('/assets/img/svg/blue-underline.svg')",
        'header-bg': "url('/assets/img/webp/header_bg_2.webp')",
        'new-hero-img': "url('/assets/img/webp/news-hero-img.webp')",
        'playground-unique': "url('/assets/img/webp/Unique-section-bg.webp')",
        'playground-unique-sm':
          "url('/assets/img/webp/sm_Unique-section-bg.webp')",
        shadow_blue: 'linear-gradient(151deg, #11568C 0%, #00C5F4 100%)',
        'stats-reimagined': "url('/assets/img/svg/bg_stats_reimagined.svg')",
        'strategic-advisor': "url('/assets/img/webp/our_strategic_bg.webp')",
      },
      blur: {
        111: '111px',
        55: '55px',
        75: '75px',
      },
      borderRadius: {
        10: '10px',
        20: '20px',
        30: '30px',
      },
      borderWidth: {
        2: '2px',
      },
      boxShadow: {
        'coach-shadow': '0 50px 60px 0px rgba(88, 133, 249, 0.10)',
      },
      colors: {
        bgnav: 'rgba(0, 8, 15, 0.10)',
        blackBG: '#000b13',
        blue_linear_gradient: 'rgba(255, 255, 255, 0.03)',
        darkerSkyBlue: '#00C7FF',
        darkgray: '#0D171F',
        extraDarkBlue: '#00c3f47b',
        matchtitles: 'rgba(0, 197, 244, 0.05)',
        offwhite: '#B1B5B8', 
        partnersBorders: '#49545C',
        primary: '#FDFEFF',
        skyblue: '#00C5F4',
        //dashboard
        chartRed: '#DA393B',
        chartBlue: '#27B6BD',
        chartYellow: '#B09E03',
        chartOrange: '#FC6713',
        chartPurple: '#5A54A2',
        cardsBackground: '#113448'
      },
      container: {
        center: true,
        padding: {
          '2xl': '0rem',
          DEFAULT: '1rem',
          xl: '0rem',
        },
      },
      fontFamily: {
        sourceSansPro: ['SourceSansPro', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        basemd: '24px',
        lg: '28px',
        lg2xl: '40px',
        lgm: '30px',
        lgxl: '36px',
        md: '18px',
        sxl: '43px',
        xl: '48px',
        xxl: '50px',
        xxs: '13px',
      },
      height: {
        1000: '1000px',
        120: '120%',
        120: '120px',
        15: '15px',
        150: '150px',
        152: '152px',
        180: '180px',
        200: '200px',
        207: '207px',
        220: '220px',
        248: '248px',
        286: '286px',
        '2pixel': '2px',
        30: '30px',
        300: '300px',
        35: '35px',
        '3pixel': '3px',
        400: '400px',
        420: '420px',
        441: '441px',
        448: '448px',
        452: '452px',
        457: '457px',
        541: '541px',
        603: '603px',
        610: '610px',
        700: '700px',
        850: '850px',
      },
      inset: {
        '-10': '-10px',
        '-2': '-2px',
        '-4': '-4px',
        '-5': '-5px',
        '-50': '-50px',
        '-6': '-6px',
        '-7': '-7px',
        '-8': '-8px',
        '12pixel': '12px',
        160: '160px',
        '20/100': '20%',
        '30/100': '30%',
        300: '300px',
        '40pixel': '40px',
        50: '50px',
        '65/100': '65%',
        '80pixel': '80px',
      },
      lineHeight: {
        110: '110%',
        120: '120%',
        140: '140%',
        150: '150%',
        25: '25px',
        27: '27px',
        35: '35px',
        39: '39px',
        45: '45px',
        50: '50px',
        58: '58px',
        60: '60px',
        66: '66px',
      },
      maxHeight: {
        244: '244px',
        430: '430px',
        700: '700px',
      },
      maxWidth: {
        '1/2': '50%',
        100: '100px',
        1000: '1000px',
        1140: '1140px',
        1320: '1320px',
        140: '140px',
        210: '210px',
        230: '230px',
        240: '240px',
        270: '270px',
        '30/100': '30%',
        300: '300px',
        326: '326px',
        350: '350px',
        36: '36px',
        365: '365px',
        396: '396px',
        400: '400px',
        430: '430px',
        447: '447px',
        475: '475px',
        48: '48px',
        '48/100': '48%',
        490: '490px',
        500: '500px',
        505: '505px',
        506: '506px',
        520: '520px',
        530: '530px',
        543: '543px',
        555: '555px',
        600: '600px',
        608: '608px',
        617: '617px',
        623: '623px',
        652: '652px',
        658: '658px',
        670: '670px',
        700: '700px',
        769: '769px',
        769: '769px',
      },
      minWidth: {
        1530: '1530px',
        225: '225px',
        315: '315px',
        40: '40%',
        500: '500px',
      },
      padding: {
        100: '100px',
        '10pixel': '10px',
        117: '117px',
        126: '126px',
        139: '139px',
        145: '145px',
        '14pixel': '14px',
        160: '160px',
        170: '170px',
      },
      screens: {
        1530: '1530px',
        375: '375px',
        500: '500px',
      },
      spacing: {
        1: '1px',
        100: '100px',
        108: '108px',
        '10pixel': '10px',
        114: '114px',
        123: '123px',
        125: '125px',
        14: '14px',
        14.5: '14.5px',
        15: '15px',
        150: '150px',
        160: '160px',
        176: '176px',
        '18pixel': '18px',
        190: '190px',
        '20pixel': '20px',
        '24pixel': '24px',
        25: '25px',
        250: '250px',
        '30pixel': '30px',
        '40pixel': '40px',
        43: '43px',
        45: '45px',
        '48pixel': '48px',
        '56pixel': '56px',
        '60pixel': '60px',
        '6pixel': '6px',
        70: '70px',
        '72pixel': '72px',
        80: '80px',
        '80pixel': '80px',
        90: '90px',
        95: '95px',
      },
      translate: {
        '-20': '-20px',
        20: '20px',
      },
      width: {
        100: '100px',
        120: '120px',
        150: '150px',
        1530: '1530px',
        200: '200px',
        207: '207px',
        209: '209px',
        220: '220px',
        224: '224px',
        230: '230px',
        248: '248px',
        290: '290px',
        300: '300px',
        315: '315px',
        35: '35px',
        '40/100': '40%',
        400: '400px',
        '43/100': '43%',
        448: '448px',
        450: '450px',
        457: '457px',
        462: '462px',
        500: '500px',
        505: '505px',
        506: '506px',
        531: '531px',
        550: '550px',
        600: '600px',
        690: '690px',
        700: '700px',
        '80/100': '80%',
      },
    },
  },
};