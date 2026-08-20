import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "小D｜音视频转录整理助理",
  description: "把一段音视频，整理成一篇真正能读的中文分享式提纯稿。",
};

const inputs = ["小宇宙", "B站", "YouTube", "飞书妙记", "会议录音", "本地音频"];

const steps = [
  ["01", "识别来源", "判断链接、会议入口或本地文件属于哪类输入。"],
  ["02", "获取内容", "优先寻找现成字幕、逐字稿或会议文本。"],
  ["03", "转录音频", "没有可用文字时，用 faster-whisper 生成完整逐字稿。"],
  ["04", "清洗校对", "去掉噪音，修正 ASR 错词，保留重要专有名词。"],
  ["05", "主题重组", "按话题、案例、人物和观点变化添加真实标题。"],
  ["06", "飞书交付", "生成可阅读的飞书文档，并自动分享给请求者。"],
];

const standards = [
  ["保留信息密度", "关键案例、数字、原话、观点和争议表达，一个都不轻易删。"],
  ["拒绝摘要腔", "交付的是连续可读的分享式提纯稿，不是三句话总结。"],
  ["不确定就标记", "无法确认的人名、公司名或术语，会标注为 [待确认]，不硬猜。"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top"><span className="brand-mark">D</span><span>小D <em>/</em> Audio Intelligence</span></a>
        <div className="nav-links">
          <a href="#workflow">工作流</a><a href="#capabilities">能力边界</a><a href="#status">接入状态</a>
        </div>
        <a className="nav-cta" href="#workflow">了解小D <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> HERMES AGENT PROFILE / ONLINE</div>
          <h1>把一段音视频，<br /><span>整理成真正能读的文章。</span></h1>
          <p className="hero-lede">小D 是你的音视频转录整理助理。它听完、校对、重组，再把一份分享式提纯稿交到飞书里。</p>
          <div className="hero-actions"><a className="button button-primary" href="#workflow">查看工作方式 <span>→</span></a><a className="text-link" href="#capabilities">输入与输出 <span>↓</span></a></div>
          <div className="hero-meta"><span><b>6</b> 类输入来源</span><i /> <span><b>1</b> 个清晰交付</span><i /> <span><b>0</b> 摘要式废话</span></div>
        </div>
        <div className="hero-visual" aria-label="小D处理内容的状态面板">
          <div className="orbital orbital-one" /><div className="orbital orbital-two" />
          <div className="agent-card">
            <div className="card-top"><span className="mini-mark">D</span><span>小D / ACTIVE</span><span className="dots">•••</span></div>
            <div className="signal-line"><span className="signal-dot" />正在把声音变成结构</div>
            <div className="waveform">{Array.from({length: 34}, (_, i) => <i key={i} style={{height: `${18 + ((i * 19) % 48)}%`}} />)}</div>
            <div className="card-divider" />
            <div className="card-foot"><span>faster-whisper</span><span>LLM refinement</span><span className="check">✓</span></div>
          </div>
          <div className="floating-note note-top"><span>INPUT</span><strong>播客 / 会议 / 视频</strong></div>
          <div className="floating-note note-bottom"><span>OUTPUT</span><strong>飞书分享式提纯稿</strong></div>
        </div>
      </section>

      <section className="marquee"><div className="marquee-track">转录 TRANSCRIBE <b>✳</b> 校对 REFINE <b>✳</b> 重组 REFRAME <b>✳</b> 交付 DELIVER <b>✳</b> 转录 TRANSCRIBE <b>✳</b> 校对 REFINE</div></section>

      <section className="section shell" id="workflow">
        <div className="section-heading"><div><span className="section-kicker">01 / HOW IT WORKS</span><h2>从原始声音，<br /><em>到清晰表达。</em></h2></div><p>小D 不追求把内容变短，而是把内容变得更容易理解、更适合分享。每一步都围绕最终交付负责。</p></div>
        <div className="steps-grid">{steps.map(([number, title, copy]) => <article className="step" key={number}><span className="step-number">{number}</span><div className="step-icon">{number === "01" ? "⌁" : number === "02" ? "◌" : number === "03" ? "▥" : number === "04" ? "✦" : number === "05" ? "≋" : "↗"}</div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="capabilities section shell" id="capabilities">
        <div className="capability-panel"><span className="section-kicker">02 / CAPABILITIES</span><h2>它能处理什么？</h2><p>你只需要给出一个入口。剩下的识别、转录、清洗、组织和交付，由小D完成。</p><div className="input-list">{inputs.map((input, i) => <span key={input}><b>0{i + 1}</b>{input}</span>)}</div></div>
        <div className="output-panel"><div className="output-label"><span className="status-dot" /> STANDARD OUTPUT</div><div className="doc-window"><div className="doc-bar"><span /><span /><span /><em>分享式提纯稿.md</em></div><div className="doc-content"><div className="doc-overline">小D / REFINED TRANSCRIPT</div><h3>当声音里的信息，<br />终于可以被读懂</h3><div className="doc-line wide" /><div className="doc-line" /><div className="doc-line short" /><div className="doc-tag">飞书文档 · 可直接分享</div></div></div></div>
      </section>

      <section className="section shell standards"><div className="section-heading compact"><div><span className="section-kicker">03 / QUALITY BAR</span><h2>它如何保持<br /><em>内容可信？</em></h2></div><p>整理不是删减。小D 以原始内容为边界，让表达变顺，但不替你编造观点。</p></div><div className="standard-grid">{standards.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="status-band" id="status"><div className="shell status-inner"><div><span className="section-kicker">04 / CURRENTLY CONNECTED</span><h2>已经在工作，<br />随时准备接住下一段内容。</h2></div><div className="status-list"><span><b>✓</b> 飞书消息接收与回复</span><span><b>✓</b> 后台任务执行与事件去重</span><span><b>✓</b> yt-dlp + faster-whisper</span><span><b>✓</b> 飞书云文档自动创建与分享</span><span><b>✓</b> LLM 分享式提纯</span></div></div></section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark">D</span><span>小D <em>/</em> Audio Intelligence</span></a><span>音视频转录整理助理 · Hermes Agent</span><span>© 2026</span></footer>
    </main>
  );
}
