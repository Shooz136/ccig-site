import { getCollection } from "astro:content";

export const sponsorLevelOrder = ["platinum", "gold", "silver", "bronze", "community"] as const;

export const sponsorLevelLabels = {
  platinum: "Platinum Sponsors",
  gold: "Gold Sponsors",
  silver: "Silver Sponsors",
  bronze: "Bronze Sponsors",
  community: "Community Sponsors",
} as const;

export type SponsorLevel = keyof typeof sponsorLevelLabels;

export const sortSponsors = (a, b) => {
  const levelDiff =
    sponsorLevelOrder.indexOf(a.data.level) - sponsorLevelOrder.indexOf(b.data.level);

  if (levelDiff !== 0) {
    return levelDiff;
  }

  if (a.data.sortOrder !== b.data.sortOrder) {
    return a.data.sortOrder - b.data.sortOrder;
  }

  return a.data.name.localeCompare(b.data.name);
};

export const getPublishedSponsors = async () => {
  const sponsors = await getCollection("sponsors", ({ data }) => !data.draft);
  return sponsors.sort(sortSponsors);
};

export const groupSponsorsByLevel = (sponsors) =>
  sponsorLevelOrder
    .map((level) => ({
      level,
      label: sponsorLevelLabels[level],
      sponsors: sponsors.filter((sponsor) => sponsor.data.level === level),
    }))
    .filter((group) => group.sponsors.length > 0);
