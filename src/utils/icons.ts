import astroIcon from "@/assets/svg/astro.svg";
import dockerIcon from "@/assets/svg/docker.svg";
import nodeIcon from "@/assets/svg/nodedotjs.svg";
import reactIcon from "@/assets/svg/react.svg";
import supabaseIcon from "@/assets/svg/supabase.svg";
import tailwindIcon from "@/assets/svg/tailwindcss.svg";
import nextIcon from "@/assets/svg/nextdotjs.svg";
import sanity from "@/assets/svg/sanity.svg";
import cloudinary from "@/assets/svg/cloudinary.svg";
import postgresIcon from "@/assets/svg/postgresql.svg";
import typescript from "@/assets/svg/typescript.svg";

const brandIcons: Partial<Record<string, typeof astroIcon>> = {
    Astro: astroIcon,
    Docker: dockerIcon,
    "Node.js": nodeIcon,
    React: reactIcon,
    "React Native": reactIcon,
    Supabase: supabaseIcon,
    "Tailwind CSS": tailwindIcon,
    "Next.js": nextIcon,
    Sanity: sanity,
    Cloudinary: cloudinary,
    PostgreSQL: postgresIcon,
    TypeScript: typescript
};

export default brandIcons;