const portfolioItemsData = [
  {
    id: 1,
    name: "CRWN Clothing",
    thumbnailUrl: "assets/img/portfolio/portfolio-crwn-clothing.png",
    imageCount: 4,
    moreDetailsUrl: "/portfolio-details",
    date: ": 27 August, 2021",
    liveUrl: "https://crwn-clothing-2022-charliealonso.netlify.app/",
    description:
      "An E-commerce clothing store built on a React environment. The page has subdirectories for each category of clothes sold, shopping cart feature, utilizes Stripe api for payment processing, and handles user authentication through Firebase.",
  },
  {
    id: 2,
    name: "quote-generator",
    thumbnailUrl: "assets/img/portfolio/react-quote-generator.png",
    imageCount: 1,
    moreDetailsUrl: "/portfolio-details",
    date: ": 16 October, 2021",
    liveUrl: "https://charlie-alonso-react-quote-generator.netlify.app/",
    description:
      "Generates quotes using an api containing hundreds of random quotes. I learned how to fetch, and render, data from an api. Built with vanilla Javascript, then rebuilt using react.",
  },
  {
    id: 3,
    name: "My Portfolio",
    thumbnailUrl: "assets/img/portfolio/portfolio-website.png",
    imageCount: 1,
    moreDetailsUrl: "/portfolio-details",
    date: ": 2 October, 2021",
    liveUrl: "\\",
    description:
      "My portfolio built with a bootstrapmade.com template, iPortfolio. This project uses React.js's props to dynamically change the portfolio-details page depending on which project's link was clicked.",
  },
  {
    id: 4,
    name: "Time Tracking Dashboard",
    thumbnailUrl: "assets/img/portfolio/time-tracking-dashboard.png",
    imageCount: 4,
    moreDetailsUrl: "/portfolio-details",
    date: ": 13 March, 2022",
    liveUrl: "https://charlie025x.github.io/Time-tracking-dashboard/",
    description:
      "A profile dashboard that displays the amount of hours spent on certain activities, the dashboard also allows for viewing the hours spent on said activity in three different time frames (daily, weekly, and monthly). With React.js, I rendered a card for every category there was data for in my data.json file. Then I added onClick events on the time frame buttons to change the state of the active time frame accordingly, resulting in the cards rerendering to show the correct hours spent, as per data.json's data",
  },
  {
    id: 5,
    name: "Tip Calculator App",
    thumbnailUrl: "assets/img/portfolio/tip-calculator.png",
    imageCount: 4,
    moreDetailsUrl: "/portfolio-details",
    date: ": 20 March, 2022",
    liveUrl: "https://charlie025x.github.io/Tip-calculator-app/",
    description:
      "This web application outputs the tip for a bill for different scenarios. The calculator allows the user to input their bill, tip percentage preference, and the amount of people the bill will be split between, so that the user can know what their tip should be (per person). Built with React.js and SCSS.",
  },
];

export default portfolioItemsData;
