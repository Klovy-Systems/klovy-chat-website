import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }: any) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group">
      <article
        className="
          h-full
          rounded-2xl
          overflow-hidden
          border
          border-light_border
          dark:border-dark_border
          bg-light_bg
          dark:bg-dark_bg
          transition
          hover:shadow-xl
          flex
          flex-col
        "
      >
        <div className="relative h-48 w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <span
            className="
              absolute
              top-3
              right-3
              rounded-full
              bg-black/60
              backdrop-blur-sm
              px-3
              py-1
              text-xs
              font-medium
              text-white
            "
          >
            {blog.readingTime}
          </span>
        </div>

        <div className="flex flex-col flex-1 p-spacing_md">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-sm opacity-70 mb-4 line-clamp-3">
            {blog.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {blog.tags.map((tag: string) => (
              <span
                key={tag}
                className="
                  px-2
                  py-1
                  text-xs
                  rounded
                  bg-primary/10
                  text-primary
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
