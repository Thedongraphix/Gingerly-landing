"use client";
import { ShieldCheck, Landmark, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  ShieldCheck,
  Landmark,
  Fingerprint,
} as const;

type IconName = keyof typeof ICON_MAP;

const SingleAchievement = ({
  achievements,
}: {
  achievements: any;
}) => {
  const {
    icon,
    sub_title,
    title,
    tag,
    bg_color,
    icon_bg,
    txt_color,
    tag_color,
    hover_border,
    hover_shadow,
  } = achievements;
  const IconComponent = ICON_MAP[icon as IconName];

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-8 p-8 2xl:p-10 rounded-2xl h-full",
        "border border-transparent transition-all duration-500 ease-out cursor-default",
        "hover:-translate-y-1.5 hover:shadow-xl",
        bg_color,
        hover_border,
        hover_shadow,
      )}
    >
      {/* Icon with tinted background circle */}
      <div
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center",
          "transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
          icon_bg,
        )}
      >
        {IconComponent && (
          <IconComponent
            size={28}
            className={cn(txt_color, "transition-colors duration-300")}
            strokeWidth={1.5}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1">
        <p className={cn("font-semibold text-lg", txt_color)}>{sub_title}</p>
        <p className="text-muted-foreground leading-relaxed text-[15px]">
          {title}
        </p>
      </div>

      {/* Tag badge */}
      <div>
        <span
          className={cn(
            "inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider",
            "transition-all duration-300 group-hover:px-5",
            tag_color,
          )}
        >
          {tag}
        </span>
      </div>
    </div>
  );
};

export default SingleAchievement;
