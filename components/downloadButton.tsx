import { DownloadIcon } from "lucide-react";

const DownloadButton = () => {
  return (
    <div>
      <a href="/images/cv.pdf" download={'portfolio-cv.pdf'}>
            <button
              type="button"
              className="group flex items-center justify-center gap-2.5 bg-slate-200/80 backdrop-blur-sm text-blue-950 font-medium text-lg px-8 py-5 rounded-full border border-slate-300 hover:bg-slate-300/70 hover:border-slate-400 transition-all duration-300"
            >
              Download CV
              <DownloadIcon size={22} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
      </a>
    </div>
  )
}

export default DownloadButton;