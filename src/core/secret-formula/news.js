import { DC } from "../constants";

// A = always there
// L = locked
// R = random chance condition
// P = patreon
// AI = created with gpt2

function newsAnimSpd(seconds) {
  return seconds / player.options.news.speed;
}


export const news = [{
  id: "ad1",
  text: "Parker-Hannifin - Your global leader in motion and control technologies for over 100 years."
},
{
  id: "ad2",
  text: "General Electric - Keeping your airplanes, in the air."
},
{
  id: "ad3",
  text: "AECOM - The infrastructure company, for when it matters most."
},
{
  id: "ad4",
  text: "Leidos Holdings - When you need to secure your homeland, you come to us."
},
{
  id: "ad5",
  text: "Owens & Minor - We’re here for you when it matters"
},
{
  id: "ad6",
  text: "Applied Materials - The giant thats holding your devices together"
},
{
  id: "ad7",
  text: "Westlake Chemical - When you need special chemicals that you can’t find anywhere else, you come to us"
},
{
  id: "ad8",
  text: "AT&T - The telecommunications giant you can rely on."
},
{
  id: "ad9",
  text: "General Dynamics - Protecting your frontlines, for freedom."
},
{
  id: "ad10",
  text: "Publix Super Markets - Selling great products at even greater prices"
},
{
  id: "ad11",
  text: "Kohl's - Selling great products for nearly 100 years"
},
{
  id: "ad12",
  text: "Targa Resources - Keeping your lights running, so you can focus on the bigger things"
},
{
  id: "ad13",
  text: "Valero Energy - Fuel has never been cheaper, with us"
},
{
  id: "ad14",
  text: "Omnicom Group - Prioritising customer communications, always"
},
{
  id: "ad15",
  text: "NCR - Want to sell stuff physically? We’ve got you, with our POS systems, available now."
},
{
  id: "ad16",
  text: "iHeartMedia - Mass media for the masses"
},
{
  id: "ad17",
  text: "Tyson Foods - Making sure you always have fresh food"
},
{
  id: "ad18",
  text: "Ameriprise Financial - Financial services whenever you need us"
},
{
  id: "ad19",
  text: "Office Depot - Office equipment at extraordinarily low prices"
},
{
  id: "ad20",
  text: "Charter Communications - Making sure you are always up-to-date on the latest news"
},
{
  id: "ad21",
  text: "CenterPoint Energy - Electrical reliability you can trust"
},
{
  id: "ad22",
  text: "Stryker - The global leader in medical technology, saving lives when it matters most"
},
{
  id: "ad23",
  text: "Voya Financial - Allowing you to retire with a safe investment since 1991"
},
{
  id: "ad24",
  text: "Enterprise Products Partners - Gas and oil for when you need it"
},
{
  id: "ad25",
  text: "Merck - Where science and technology go hand in hand"
},
{
  id: "ad26",
  text: "Zoetis - Pet health matters to us all, thats why we’re here"
},
{
  id: "ad27",
  text: "Mohawk Industries - Flooring for those houses that just need that bit more shine"
},
{
  id: "ad28",
  text: "Sanmina - Electronics that you can rely on"
},
{
  id: "ad29",
  text: "IBM - Selling computers for over 110 years."
},
{
  id: "ad30",
  text: "FedEx - Reliability in shipping"
},
{
  id: "ad501",
  text: "Antimatter Dimensions - The new hit game, free on steam, web, and android!"
},
{
  id: "ad502",
  text: "Perks - Love em or hate em, you cant live without them. Now including DAB!"
},
{
  id: "ad503",
  text: "Remnants - Whenever you feel low, just remember that you can always wait on us."
},
{
  id: "ad504",
  text: `Reality - The new hit thing! Now only takes 1e4150 EP for the second RM.`
},
{
  id: "ad505",
  text: "Replicanti - Growth without limits."
},
{
  id: "ad506",
  text: "The ticker - Proudly serving you commercials for as long as time itself"
},
{
  id: "ad507",
  text: "Dilation - When things get a bit fast, sometimes you need to just dilate and chill out"
},
{
  id: "ad508",
  text: "Lehmä! Now offering grass eating lessons! Learn what grass is safe to eat and what grass isn't."
},
{
  id: "ad509",
  text: "Avari - Infinite Pools for those who just cant get enough. Now 8% off!"
},
{
  id: "ad510",
  text: "Antimatter Bakery - Proudly serving you antimatter <s>cookies</s> for free!"
},
{
  id: "ad511",
  text: "Antimatter Dimensions: The Board Game - Now comes with extra news tickers, free of charge!"
},
{
  id: "ad512",
  text: "Aphone 10 - The world's first completely water soluble mobile device!"
},
{
  id: "ad513",
  text: "Morse Code+++ - the brand new Morse code, now with 20 new characters"
},
{
  id: "ad514",
  text: "Achievements - For when numbers get too boring."
},
{
  id: "ad515",
  text: "The Game - The first game that nobody can win!"
},
{
  id: "ad516",
  text: "Time Studies - Tired of boring old dimensions? Now you can speed up your game, with studies."
},
{
  id: "ad517",
  text: "Cats - Just a literal cat. You can just grab her for free from [DATA EXPUNGED]. We dont want her."
},
{
  id: "ad518",
  text: "Alchemy - For when you thought a math game couldnt be any less educational!"
},
{
  id: "ad519",
  text: "Celestials - For those who aren’t yet religious"
},
{
  id: "ad520",
  text: "Sacrifice - Ever feel like the game is just too slow to make progress? Try Sacrificing, the new hip trend!"
}]