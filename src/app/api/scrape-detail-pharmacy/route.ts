import puppeteer from "puppeteer";
import * as cheerio from "cheerio";
import { DetailPharmacyType } from "@/lib/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pharmacyQuery = searchParams.get("pharmacy");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `${process.env.NEXT_PUBLIC_URL_SITE_PHARMACY}/pharmacies${pharmacyQuery}`
  );
  const content = await page.content();

  const $ = cheerio.load(content);
  const pharmacy: DetailPharmacyType = {
    address: "",
    location: "",
    city: "",
    country: "",
    phone: "",
    description: "",
    listGuard: [],
    name: "",
  };

  pharmacy.address = $('td[itemprop="streetAddress"]').text().trim() || "";
  pharmacy.location = $('td[itemprop="streetAddress"] a').attr("href") || "";
  pharmacy.city = $('td[itemprop="addressRegion"]').text().trim() || "";
  pharmacy.country = $('td[itemprop="addressCountry"]').text().trim() || "";
  pharmacy.phone = $('a[itemprop="telephone"]').text().trim() || "";
  pharmacy.description = $('p[itemprop="description"]').text().trim() || "";
  pharmacy.name = $('h1[itemprop="name"]').text().trim() || "";

  $(".pharma_history tr").each((i, elem) => {
    if (i !== 0) {
      pharmacy.listGuard.push({
        startDate: $(elem).find("td:nth-child(1)").text().trim(),
        endDate: $(elem).find("td:nth-child(2)").text().trim(),
        guard: $(elem).find("td:nth-child(3)").text().trim(),
      });
    }
  });

  console.log(pharmacy, "data");
  await browser.close();

  return new Response(JSON.stringify(pharmacy), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
