import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import { PharmacyType } from "@/lib/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pharmacy = searchParams.get("pharmacy");
  if (!pharmacy) {
    return new Response(JSON.stringify([]), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${process.env.NEXT_PUBLIC_URL_SITE_PHARMACY}${pharmacy}`);
  const content = await page.content();
  const pharmacies: PharmacyType[] = [];
  const $ = cheerio.load(content);
  const listItems = $("#agItemList li");
  listItems.each((index, element) => {
    const link = $(element).find("a").attr("href");
    const city = $(element).find("span[itemprop=addressLocality]").text();
    const label = $(element).find("a h3").text();
    const gardeStatus = $(element).find(".garde-openingStatus").text();
    const phone = $(element).find("span[title=Appelle-nous]").text();
    const address = $(element)
      .find('p[itemprop="streetAddress"]')
      .text()
      .trim();

    if (link && city && label && gardeStatus && phone && address) {
      pharmacies.push({
        link,
        city,
        label,
        gardeStatus,
        phone,
        address,
      });
    }
  });
  await browser.close();

  return new Response(JSON.stringify(pharmacies), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
