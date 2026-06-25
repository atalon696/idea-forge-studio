import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { nav, site, legalNav } from "@/lib/site";
import { products } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-steel-700/60 bg-forge-900">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="navbar" className="h-9 w-auto" />
            <p className="mt-5 max-w-xs text-sm text-steel-500">
              {site.tagline}. Estudio de desarrollo de software a medida.
            </p>
          </div>

          <FooterCol title="Navegación">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Productos">
            {products.map((p) => (
              <FooterLink key={p.slug} href={`/productos#${p.slug}`}>
                {p.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Contacto">
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-steel-500 transition-colors hover:text-molten-spark"
            >
              {site.email}
            </a>
            <p className="mt-3 text-sm text-steel-500">
              Cuéntanos tu problema y te respondemos.
            </p>
          </FooterCol>
        </div>

        <hr className="forge-rule my-12" />

        <div className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
          {legalNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.12em] text-steel-500 transition-colors hover:text-molten-spark"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-steel-500 sm:flex-row">
          <p className="font-mono uppercase tracking-[0.14em]">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Forjado con precisión
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-steel-100">
        {title}
      </h4>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-steel-500 transition-colors hover:text-molten-spark"
    >
      {children}
    </Link>
  );
}
