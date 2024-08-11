import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

export async function GET() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `${process.env.NEXT_PUBLIC_URL_SITE_PHARMACY}/pharmacie-garde-maroc.html`
  );
  const content = await page.content();

  const cities: { value: string; label: string }[] = [];
  const $ = cheerio.load(content);
  const listItems = $("#agItemList li");
  listItems.each((index, element) => {
    const city = $(element).find("h3 a").attr("title");
    const link = $(element).find("h3 a").attr("href");
    if (city && link) cities.push({ value: link, label: city });
  });
  await browser.close();

  return new Response(JSON.stringify(cities), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
