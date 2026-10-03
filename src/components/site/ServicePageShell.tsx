import { useState, type ReactNode } from "react";
import { ContactModal } from "@/components/ContactModal";
import { useReveal } from "@/hooks/use-reveal";
import { SiteContactSection } from "./SiteContactSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type ServicePageShellProps = {
  children: ReactNode;
  contact: {
    goldPhrase: string;
    titleBefore: string;
    titleAfter?: string;
    description: string;
    submitLabel?: string;
  };
};

export function ServicePageShell({ children, contact }: ServicePageShellProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen bg-navy font-sans text-navy-foreground antialiased selection:bg-gold selection:text-navy">
      <SiteHeader variant="page" onOpenModal={() => setIsModalOpen(true)} />
      <div className="site-header-offset">{children}</div>
      <SiteContactSection {...contact} />
      <SiteFooter />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
