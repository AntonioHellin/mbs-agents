const mugDesigns: Record<string, { color: string; text: string; textColor: string }> = {
  "love-coding": { color: "#ef4444", text: "I ❤️ Coding", textColor: "#ffffff" },
  "works-on-machine": { color: "#3b82f6", text: "It works\non my machine", textColor: "#ffffff" },
  localhost: { color: "#10b981", text: "127.0.0.1", textColor: "#ffffff" },
  "sleep-not-found": { color: "#8b5cf6", text: "404:\nSleep not found", textColor: "#ffffff" },
  "sudo-coffee": { color: "#f59e0b", text: "sudo make\nme a coffee", textColor: "#000000" },
  "js-good-parts": { color: "#f7df1e", text: "JS:\nThe Good Parts", textColor: "#000000" },
  "python-zen": { color: "#3776ab", text: "import\nzen", textColor: "#ffffff" },
  "git-gud": { color: "#f05032", text: "git gud", textColor: "#ffffff" },
  "rust-ferris": { color: "#dea584", text: "🦀 Rust", textColor: "#000000" },
  "full-stack": { color: "#06b6d4", text: "Full Stack\nDeveloper", textColor: "#ffffff" },
}

interface MugSvgProps {
  design: string
  className?: string
}

export function MugSvg({ design, className = "" }: MugSvgProps) {
  const mug = mugDesigns[design] ?? mugDesigns["love-coding"]!

  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="40" y="50" width="100" height="120" rx="10" fill={mug.color} />
      <rect x="40" y="50" width="100" height="20" rx="5" fill="rgba(255,255,255,0.15)" />
      <rect x="140" y="70" width="30" height="60" rx="15" fill={mug.color} stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
      <text
        x="90"
        y="120"
        textAnchor="middle"
        fill={mug.textColor}
        fontSize="14"
        fontWeight="bold"
        fontFamily="monospace"
      >
        {mug.text.split("\n").map((line, i) => (
          <tspan key={i} x="90" dy={i === 0 ? "0" : "16"}>
            {line}
          </tspan>
        ))}
      </text>
    </svg>
  )
}
