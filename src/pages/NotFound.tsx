import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Stránka nenájdená | AdonisTech</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[20vw] font-display font-bold leading-none bg-gradient-to-r from-purple-400 via-pink-300 to-white bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-zinc-300 mt-4 mb-8 max-w-md">
          Táto stránka neexistuje alebo bola presunutá.
        </p>
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform active:scale-[0.98]"
        >
          <ArrowLeft className="w-4 h-4" />
          Späť na hlavnú stránku
        </Link>
      </div>
    </>
  );
}
