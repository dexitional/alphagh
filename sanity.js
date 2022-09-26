import imageUrlBuilder from '@sanity/image-url'
import {
    createCurrentUserHook,
    createClient
} from "next-sanity";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "q444la4x",
  apiVersion: "2022-07-20",
  useCdn: process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(config); // Make Fetch Query to Sanity CMS
export const urlFor = (source) => imageUrlBuilder(config).image(source); // Extract Image Url
export const useCurrentUser = createCurrentUserHook(config); // Use Current LoggedIn User 