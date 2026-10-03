import { Link } from "@tanstack/react-router";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 py-4 text-xs uppercase tracking-[0.12em] text-navy-foreground/50">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && <span className="text-gold">/</span>}
          {index === items.length - 1 ? (
            <span className="text-gold font-medium">{item.label}</span>
          ) : (
            <Link to={item.href} className="hover:text-gold transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
