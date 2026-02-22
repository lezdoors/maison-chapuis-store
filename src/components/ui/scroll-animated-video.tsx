import React, { useEffect, useMemo, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type Source = { mp4?: string; webm?: string; ogg?: string };
type VideoLike = string | Source;

type Eases = {
  container?: string;
  overlay?: string;
  text?: string;
};

export type HeroScrollVideoProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  credits?: ReactNode;
  media?: VideoLike;
  poster?: string;
  mediaType?: "video" | "image";
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  autoPlay?: boolean;
  overlay?: {
    caption?: ReactNode;
    heading?: ReactNode;
    paragraphs?: ReactNode[];
    extra?: ReactNode;
  };
  initialBoxSize?: number;
  targetSize?: { widthVw: number; heightVh: number; borderRadius?: number } | "fullscreen";
  scrollHeightVh?: number;
  showHeroExitAnimation?: boolean;
  sticky?: boolean;
  overlayBlur?: number;
  overlayRevealDelay?: number;
  eases?: Eases;
  smoothScroll?: boolean;
  lenisOptions?: Record<string, unknown>;
  className?: string;
  style?: CSSProperties;
};

const DEFAULTS = {
  initialBoxSize: 360,
  targetSize: "fullscreen" as const,
  scrollHeightVh: 280,
  overlayBlur: 10,
  overlayRevealDelay: 0.35,
  eases: { container: "expo.out", overlay: "expo.out", text: "power3.inOut" } as Eases,
};

function isSourceObject(m?: VideoLike): m is Source {
  return !!m && typeof m !== "string";
}

export const HeroScrollVideo: React.FC<HeroScrollVideoProps> = ({
  title = "Future Forms",
  subtitle = "Design in Motion",
  meta = "2025",
  credits = (
    <>
      <p>Crafted by</p>
      <p>Maison Chapuis</p>
    </>
  ),
  media,
  poster,
  mediaType = "video",
  muted = true,
  loop = true,
  playsInline = true,
  autoPlay = false,
  overlay = {
    caption: "MAISON CHAPUIS",
    heading: "A Heritage of Light",
    paragraphs: [
      "For generations, the artisans of Marrakech have shaped raw brass into extraordinary works of light.",
    ],
    extra: null,
  },
  initialBoxSize = DEFAULTS.initialBoxSize,
  targetSize = DEFAULTS.targetSize,
  scrollHeightVh = DEFAULTS.scrollHeightVh,
  showHeroExitAnimation = true,
  sticky = true,
  overlayBlur = DEFAULTS.overlayBlur,
  overlayRevealDelay = DEFAULTS.overlayRevealDelay,
  eases = DEFAULTS.eases,
  smoothScroll = false,
  lenisOptions: _lenisOptions,
  className,
  style,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayCaptionRef = useRef<HTMLDivElement | null>(null);
  const overlayContentRef = useRef<HTMLDivElement | null>(null);

  const cssVars: CSSProperties = useMemo(
    () => ({
      ["--initial-size" as string]: `${initialBoxSize}px`,
      ["--overlay-blur" as string]: `${overlayBlur}px`,
    }),
    [initialBoxSize, overlayBlur]
  );

  useEffect(() => {
    let gsap: any;
    let ScrollTrigger: any;
    let heroTl: any;
    let mainTl: any;
    let overlayDarkenEl: HTMLDivElement | null = null;
    let cancelled = false;

    (async () => {
      const gsapPkg = await import("gsap");
      gsap = gsapPkg.gsap || gsapPkg.default || gsapPkg;

      const stPkg = await import("gsap/ScrollTrigger").catch(() => import("gsap/dist/ScrollTrigger"));
      ScrollTrigger = (stPkg as any).default || (stPkg as any).ScrollTrigger || stPkg;

      gsap.registerPlugin(ScrollTrigger);
      if (cancelled) return;

      const containerEase = eases.container ?? "expo.out";
      const overlayEase = eases.overlay ?? "expo.out";
      const textEase = eases.text ?? "power3.inOut";

      const container = containerRef.current!;
      const overlayEl = overlayRef.current!;
      const overlayCaption = overlayCaptionRef.current!;
      const overlayContent = overlayContentRef.current!;
      const headline = headlineRef.current!;

      if (container) {
        overlayDarkenEl = document.createElement("div");
        overlayDarkenEl.style.position = "absolute";
        overlayDarkenEl.style.inset = "0";
        overlayDarkenEl.style.background = "rgba(0,0,0,0)";
        overlayDarkenEl.style.pointerEvents = "none";
        overlayDarkenEl.style.zIndex = "1";
        container.appendChild(overlayDarkenEl);
      }

      if (showHeroExitAnimation && headline) {
        heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: headline,
            start: "top top",
            end: "top+=420 top",
            scrub: 1.1,
          },
        });
        headline.querySelectorAll<HTMLElement>(".hsv-headline > *").forEach((el: HTMLElement, i: number) => {
          heroTl.to(el, {
            rotationX: 80, y: -36, scale: 0.86, opacity: 0, filter: "blur(4px)",
            transformOrigin: "center top", ease: textEase,
          }, i * 0.08);
        });
      }

      const triggerEl = rootRef.current?.querySelector("[data-sticky-scroll]") as HTMLElement;
      if (!triggerEl || !container || !overlayEl) return;

      mainTl = gsap.timeline({
        scrollTrigger: { trigger: triggerEl, start: "top top", end: "bottom bottom", scrub: 1.1 },
      });

      const target = targetSize === "fullscreen"
        ? { width: "92vw", height: "92vh", borderRadius: 0 }
        : { width: `${(targetSize as any).widthVw ?? 92}vw`, height: `${(targetSize as any).heightVh ?? 92}vh`, borderRadius: (targetSize as any).borderRadius ?? 0 };

      gsap.set(container, { width: initialBoxSize, height: initialBoxSize, borderRadius: 20, clipPath: "inset(0 0 0 0)" });
      gsap.set(overlayEl, { clipPath: "inset(100% 0 0 0)" });
      gsap.set(overlayContent, { filter: `blur(${overlayBlur}px)`, scale: 1.05 });
      gsap.set([overlayContent, overlayCaption], { y: 30 });

      mainTl
        .to(container, { width: target.width, height: target.height, borderRadius: target.borderRadius, ease: containerEase }, 0)
        .to(overlayDarkenEl, { backgroundColor: "rgba(0,0,0,0.4)", ease: "power2.out" }, 0)
        .to(overlayEl, { clipPath: "inset(0% 0 0 0)", backdropFilter: `blur(${overlayBlur}px)`, ease: overlayEase }, overlayRevealDelay)
        .to(overlayCaption, { y: 0, ease: overlayEase }, overlayRevealDelay + 0.05)
        .to(overlayContent, { y: 0, filter: "blur(0px)", scale: 1, ease: overlayEase }, overlayRevealDelay + 0.05);

      const videoEl = container.querySelector("video") as HTMLVideoElement | null;
      if (videoEl) {
        const tryPlay = () => videoEl.play().catch(() => {});
        tryPlay();
        ScrollTrigger.create({ trigger: triggerEl, start: "top top", onEnter: tryPlay });
      }
    })();

    return () => {
      cancelled = true;
      try { heroTl?.kill?.(); mainTl?.kill?.(); } catch {}
      try { if (overlayDarkenEl?.parentElement) overlayDarkenEl.parentElement.removeChild(overlayDarkenEl); } catch {}
    };
  }, [initialBoxSize, targetSize, scrollHeightVh, overlayBlur, overlayRevealDelay,
      eases.container, eases.overlay, eases.text, showHeroExitAnimation, sticky, smoothScroll]);

  const renderMedia = () => {
    if (mediaType === "image") {
      const src = typeof media === "string" ? media : media?.mp4 || "";
      return <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
    }
    const sources: React.JSX.Element[] = [];
    if (typeof media === "string") {
      sources.push(<source key="mp4" src={media} type="video/mp4" />);
    } else if (isSourceObject(media)) {
      if (media.webm) sources.push(<source key="webm" src={media.webm} type="video/webm" />);
      if (media.mp4) sources.push(<source key="mp4" src={media.mp4} type="video/mp4" />);
      if (media.ogg) sources.push(<source key="ogg" src={media.ogg} type="video/ogg" />);
    }
    return (
      <video poster={poster} muted={muted} loop={loop} playsInline={playsInline} autoPlay={autoPlay || muted}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        {sources}
      </video>
    );
  };

  return (
    <div ref={rootRef} className={["hsv-root", className].filter(Boolean).join(" ")} style={{ ...cssVars, ...style }}>
      <div className="hsv-container" ref={headlineRef}>
        <div className="hsv-headline">
          <h1 className="hsv-title">{title}</h1>
          {subtitle ? <h2 className="hsv-subtitle">{subtitle}</h2> : null}
          {meta ? <div className="hsv-meta">{meta}</div> : null}
          {credits ? <div className="hsv-credits">{credits}</div> : null}
        </div>
      </div>

      <div className="hsv-scroll" data-sticky-scroll style={{ height: `${Math.max(150, scrollHeightVh)}vh` }}>
        <div className={`hsv-sticky ${sticky ? "is-sticky" : ""}`}>
          <div className="hsv-media" ref={containerRef}>
            {renderMedia()}
            <div className="hsv-overlay" ref={overlayRef}>
              {overlay?.caption ? <div className="hsv-caption" ref={overlayCaptionRef}>{overlay.caption}</div> : null}
              <div className="hsv-overlay-content" ref={overlayContentRef}>
                {overlay?.heading ? <h3>{overlay.heading}</h3> : null}
                {overlay?.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                {overlay?.extra}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hsv-root {
          --bg: #FAF8F5;
          --text: #2C2C2C;
          --muted: #4A4A4A;
          --muted-bg: rgba(44,44,44,0.06);
          --muted-border: rgba(44,44,44,0.12);
          --overlay-bg: rgba(10,10,14,0.42);
          --overlay-text: #ffffff;
          --accent: #C5A455;
          --accent-2: #D4BA78;
          --shadow: 0 10px 30px rgba(0,0,0,0.08);
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', system-ui, sans-serif;
          overflow-x: clip;
        }
        .hsv-container {
          height: 100vh;
          display: grid;
          place-items: center;
          padding: clamp(16px, 3vw, 40px);
          perspective: 900px;
        }
        .hsv-headline { text-align: center; transform-style: preserve-3d; max-width: min(100%, 1100px); }
        .hsv-headline > * { transform-style: preserve-3d; backface-visibility: hidden; transform-origin: center top; }
        .hsv-title {
          margin: 0 0 .6rem 0;
          font-size: clamp(40px, 8vw, 96px);
          line-height: 0.98;
          font-weight: 300;
          letter-spacing: -0.02em;
          font-family: 'Cormorant Garamond', Georgia, serif;
          background: linear-gradient(90deg, var(--text) 0%, var(--text) 50%, var(--accent) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hsv-subtitle {
          margin: 0 0 1.25rem 0;
          font-size: clamp(16px, 3vw, 24px);
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .hsv-meta {
          display: inline-flex; align-items: center; gap: .5rem;
          padding: .4rem .7rem; border-radius: 999px;
          font-size: .85rem; font-weight: 500; letter-spacing: .05em;
          background: var(--muted-bg); border: 1px solid var(--muted-border);
          color: var(--text); margin: 1rem 0 0 0;
        }
        .hsv-meta::before {
          content: ""; width: 8px; height: 8px; border-radius: 999px;
          background: linear-gradient(135deg, var(--accent), var(--accent-2));
          display: inline-block;
        }
        .hsv-credits {
          margin-top: 1.1rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--muted);
        }
        .hsv-scroll { position: relative; }
        .hsv-sticky.is-sticky { position: sticky; top: 0; height: 100vh; display: grid; place-items: center; }
        .hsv-media {
          position: relative; width: var(--initial-size); height: var(--initial-size);
          border-radius: 20px; overflow: hidden; background: #000;
          display: grid; place-items: center;
          box-shadow: var(--shadow);
        }
        .hsv-overlay {
          position: absolute; inset: 0;
          background: var(--overlay-bg); color: var(--overlay-text);
          display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
          padding: clamp(16px, 4vw, 40px);
          clip-path: inset(100% 0 0 0);
          backdrop-filter: blur(var(--overlay-blur));
          z-index: 2;
        }
        .hsv-caption {
          font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.2em;
          position: absolute; top: clamp(8px, 3vw, 24px); left: 0; width: 100%; text-align: center;
          opacity: 0.9; color: var(--accent-2);
        }
        .hsv-overlay-content { max-width: 60ch; display: grid; gap: 0.9rem; }
        .hsv-overlay-content h3 {
          font-size: clamp(26px, 5vw, 50px);
          line-height: 1.1; margin: 0; font-weight: 300;
          font-family: 'Cormorant Garamond', Georgia, serif;
          color: #fff;
        }
        .hsv-overlay-content h3::after {
          content: ""; display: block; width: 60px; height: 2px;
          margin: 12px auto 0 auto;
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
        }
        .hsv-overlay-content p {
          font-size: clamp(14px, 2vw, 18px);
          line-height: 1.75; margin: 0; color: #f3f4f6; opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default HeroScrollVideo;
