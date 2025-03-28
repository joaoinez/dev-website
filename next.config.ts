import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/public/images/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
