export type CardProps = {
  id: string;
  userName: string;
  avatarUrl: string;
  postedDate: string;
  imageUrl: string;
  location: string;
  title: string;
  description: string;
  upvotes: number;
  comments: number;
  distance: string;
  status: "REPORTED" | "IN_PROGRESS" | "RESOLVED";
  category: "ROAD" | "WASTE" | "LIGHTING" | "WATER" | "PARK" | "SAFETY";
  isBookmarked?: boolean;
  isUpvoted?: boolean;
  onBookmark?: () => void;
  onMenu?: () => void;
  onReadMore?: () => void;
  onUpvote?: () => void;
  onComment?: () => void;
  onShare?: () => void;
};
