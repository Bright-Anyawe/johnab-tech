export interface Service {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  icon:
    | "globe"
    | "phone"
    | "settings"
    | "palette"
    | "video"
    | "share"
    | "film"
    | "pen"
    | "megaphone"
    | "sparkles";
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  category: string;
}
