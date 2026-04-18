+++
description = "Deep-dive tracks for a developer conference. Live sessions, workshops, and after-hours code."
template = "index"
+++

<div class="section-head">
  <h2>Four Tracks</h2>
  <div class="section-head-mark">// $ ls -la tracks/</div>
</div>

<div class="track-strip">
  <a class="track-cell" href="{{ base_url }}/tracks/systems-track/">
    <div class="track-num">TRK.01</div>
    <div class="track-name">Systems Track</div>
    <div class="track-blurb">Kernel bypass, async runtimes, observability under load. Deep into the box.</div>
    <div class="track-count">07 sessions &#183; 02 workshops</div>
  </a>
  <a class="track-cell" href="{{ base_url }}/tracks/data-track/">
    <div class="track-num">TRK.02</div>
    <div class="track-name">Data Track</div>
    <div class="track-blurb">Streaming, query planning, and the things nobody taught you about Postgres.</div>
    <div class="track-count">07 sessions &#183; 03 workshops</div>
  </a>
  <a class="track-cell" href="{{ base_url }}/tracks/platform-track/">
    <div class="track-num">TRK.03</div>
    <div class="track-name">Platform Track</div>
    <div class="track-blurb">Build systems, CI, and the unreasonable effectiveness of local-first tooling.</div>
    <div class="track-count">07 sessions &#183; 03 workshops</div>
  </a>
  <a class="track-cell" href="{{ base_url }}/tracks/craft-track/">
    <div class="track-num">TRK.04</div>
    <div class="track-name">Craft Track</div>
    <div class="track-blurb">API design, code review, documentation as a first-class artefact.</div>
    <div class="track-count">07 sessions &#183; 03 workshops</div>
  </a>
</div>

<div class="section-head">
  <h2>Featured Sessions</h2>
  <div class="section-head-mark">// live &#183; next 2 hours</div>
</div>

<div class="session-grid">

  <a class="terminal" href="{{ base_url }}/tracks/systems-track/">
    <div class="terminal-head">
      <div class="terminal-dots"><span class="terminal-dot red"></span><span class="terminal-dot yellow"></span><span class="terminal-dot green"></span></div>
      <div class="terminal-path">~/sessions/trk.01/session-013.sh</div>
      <div>stage-a</div>
    </div>
    <div class="terminal-body">
      <div class="terminal-prompt">$ <span class="cmd">run-session</span> <span class="flag">--track</span> <span class="arg">systems</span> <span class="flag">--live</span></div>
      <div class="terminal-title">Writing an Async Runtime in 90 Minutes</div>
      <div class="terminal-desc">From a blank crate to a working task executor with I/O reactor and a cooperative scheduler. Every line written on stage, every commit pushed during the session.</div>
      <div class="terminal-tags">
        <span class="terminal-tag">rust</span>
        <span class="terminal-tag">async</span>
        <span class="terminal-tag">runtime</span>
        <span class="terminal-tag">workshop</span>
      </div>
      <div class="terminal-meta">
        <span>14:00 &#183; 90 min</span>
        <span class="live-badge">&#9679; LIVE CODING</span>
      </div>
    </div>
  </a>

  <a class="terminal" href="{{ base_url }}/tracks/data-track/">
    <div class="terminal-head">
      <div class="terminal-dots"><span class="terminal-dot red"></span><span class="terminal-dot yellow"></span><span class="terminal-dot green"></span></div>
      <div class="terminal-path">~/sessions/trk.02/session-021.sh</div>
      <div>stage-b</div>
    </div>
    <div class="terminal-body">
      <div class="terminal-prompt">$ <span class="cmd">psql</span> <span class="flag">-c</span> <span class="str">"explain analyze ..."</span></div>
      <div class="terminal-title">Query Plans That Don't Suck</div>
      <div class="terminal-desc">The one-hour tour of the Postgres planner, from seq scans through merge joins to the plan cache. A live EXPLAIN ANALYZE tear-down of ten real-world slow queries.</div>
      <div class="terminal-tags">
        <span class="terminal-tag">postgres</span>
        <span class="terminal-tag">performance</span>
        <span class="terminal-tag">sql</span>
      </div>
      <div class="terminal-meta">
        <span>14:30 &#183; 60 min</span>
        <span class="live-badge">&#9679; STREAMING</span>
      </div>
    </div>
  </a>

  <a class="terminal" href="{{ base_url }}/tracks/platform-track/">
    <div class="terminal-head">
      <div class="terminal-dots"><span class="terminal-dot red"></span><span class="terminal-dot yellow"></span><span class="terminal-dot green"></span></div>
      <div class="terminal-path">~/sessions/trk.03/session-035.sh</div>
      <div>stage-c</div>
    </div>
    <div class="terminal-body">
      <div class="terminal-prompt">$ <span class="cmd">make</span> <span class="arg">everything</span> <span class="flag">-j16</span></div>
      <div class="terminal-title">Make Is Still Good, Actually</div>
      <div class="terminal-desc">A ninety-minute defence of GNU Make in 2026. Pattern rules, order-only prerequisites, the include graph, and the case against the twelve-YAML-file replacement.</div>
      <div class="terminal-tags">
        <span class="terminal-tag">make</span>
        <span class="terminal-tag">build</span>
        <span class="terminal-tag">tooling</span>
      </div>
      <div class="terminal-meta">
        <span>15:00 &#183; 90 min</span>
        <span class="live-badge">&#9679; LIVE CODING</span>
      </div>
    </div>
  </a>

  <a class="terminal" href="{{ base_url }}/tracks/craft-track/">
    <div class="terminal-head">
      <div class="terminal-dots"><span class="terminal-dot red"></span><span class="terminal-dot yellow"></span><span class="terminal-dot green"></span></div>
      <div class="terminal-path">~/sessions/trk.04/session-047.sh</div>
      <div>room-4</div>
    </div>
    <div class="terminal-body">
      <div class="terminal-prompt">$ <span class="cmd">git</span> <span class="arg">review</span> <span class="flag">--slow</span></div>
      <div class="terminal-title">The Long Code Review</div>
      <div class="terminal-desc">Four engineers review the same 1,400-line diff on stage. Live commentary, disagreements, revisions. The diff is published in advance so the audience arrives with their own notes.</div>
      <div class="terminal-tags">
        <span class="terminal-tag">code-review</span>
        <span class="terminal-tag">craft</span>
        <span class="terminal-tag">discussion</span>
      </div>
      <div class="terminal-meta">
        <span>15:30 &#183; 120 min</span>
        <span class="live-badge">&#9679; LIVE DISCUSSION</span>
      </div>
    </div>
  </a>

  <a class="terminal" href="{{ base_url }}/tracks/data-track/">
    <div class="terminal-head">
      <div class="terminal-dots"><span class="terminal-dot red"></span><span class="terminal-dot yellow"></span><span class="terminal-dot green"></span></div>
      <div class="terminal-path">~/sessions/trk.02/session-024.sh</div>
      <div>stage-b</div>
    </div>
    <div class="terminal-body">
      <div class="terminal-prompt">$ <span class="cmd">stream</span> <span class="flag">--from</span> <span class="arg">kafka</span> <span class="flag">--to</span> <span class="arg">flink</span></div>
      <div class="terminal-title">Exactly-Once Is a Promise, Not a Fact</div>
      <div class="terminal-desc">Where exactly-once semantics break in production streaming, how to detect the break, and when &ldquo;at-least-once with idempotency&rdquo; is the actual engineering answer.</div>
      <div class="terminal-tags">
        <span class="terminal-tag">streaming</span>
        <span class="terminal-tag">kafka</span>
        <span class="terminal-tag">flink</span>
        <span class="terminal-tag">consistency</span>
      </div>
      <div class="terminal-meta">
        <span>16:30 &#183; 60 min</span>
        <span>Recorded</span>
      </div>
    </div>
  </a>

  <a class="terminal" href="{{ base_url }}/tracks/systems-track/">
    <div class="terminal-head">
      <div class="terminal-dots"><span class="terminal-dot red"></span><span class="terminal-dot yellow"></span><span class="terminal-dot green"></span></div>
      <div class="terminal-path">~/sessions/trk.01/session-017.sh</div>
      <div>stage-a</div>
    </div>
    <div class="terminal-body">
      <div class="terminal-prompt">$ <span class="cmd">strace</span> <span class="flag">-f</span> <span class="flag">-o</span> <span class="arg">trace.log</span> ./app</div>
      <div class="terminal-title">Reading strace Output Like a Detective</div>
      <div class="terminal-desc">A forty-five-minute live walkthrough of a real-world production incident, using nothing but `strace`, `tcpdump`, and a whiteboard. The whiteboard is photographed and published at end of session.</div>
      <div class="terminal-tags">
        <span class="terminal-tag">linux</span>
        <span class="terminal-tag">debugging</span>
        <span class="terminal-tag">tools</span>
      </div>
      <div class="terminal-meta">
        <span>17:00 &#183; 45 min</span>
        <span class="live-badge">&#9679; LIVE WALKTHROUGH</span>
      </div>
    </div>
  </a>

</div>

<div class="code-block">
  <div class="code-block-head">
    <div class="dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
    <div style="flex:1;text-align:center;letter-spacing:0.06em;">~/breakout/sample.rs</div>
    <div>rust</div>
  </div>
<pre><span class="comment">// Session 013 &#183; Writing an Async Runtime in 90 Minutes</span>
<span class="comment">// Stage A &#183; 14:00 &#183; All code committed live</span>

<span class="kw">pub struct</span> <span class="type">Executor</span> {
    queue: <span class="type">ArrayQueue</span>&lt;<span class="type">Arc</span>&lt;<span class="type">Task</span>&gt;&gt;,
    io: <span class="type">Reactor</span>,
    parker: <span class="type">Parker</span>,
}

<span class="kw">impl</span> <span class="type">Executor</span> {
    <span class="kw">pub fn</span> <span class="fn">run</span>(&amp;<span class="kw">self</span>) {
        <span class="kw">loop</span> {
            <span class="kw">while let</span> <span class="type">Some</span>(task) = <span class="kw">self</span>.queue.<span class="fn">pop</span>() {
                task.<span class="fn">poll</span>();
            }
            <span class="kw">self</span>.io.<span class="fn">wait</span>(<span class="type">Duration</span>::<span class="fn">from_millis</span>(<span class="num">10</span>));
            <span class="kw">if</span> <span class="kw">self</span>.queue.<span class="fn">is_empty</span>() &amp;&amp; <span class="kw">self</span>.io.<span class="fn">idle</span>() { <span class="kw">break</span>; }
        }
    }
}
</pre>
</div>

<div class="section-head">
  <h2>Today&rsquo;s Agenda</h2>
  <div class="section-head-mark">// day 02 &#183; full programme</div>
</div>

<table class="agenda">
  <thead>
    <tr>
      <th>Time</th>
      <th>Session</th>
      <th style="text-align:right;">Track</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="a-time">09:00 &#183; 45 min</td>
      <td>
        <div class="a-title">Day 02 Keynote: The State of the Small Language</div>
        <div class="a-speaker">&mdash; Samira Okoye, Proctorate Labs</div>
      </td>
      <td class="a-track">All tracks</td>
    </tr>
    <tr>
      <td class="a-time">10:00 &#183; 60 min</td>
      <td>
        <div class="a-title">Observing a Distributed System Without Adding a Microservice</div>
        <div class="a-speaker">&mdash; Beto Karras, senior engineer, Atlas Software</div>
      </td>
      <td class="a-track">TRK.01</td>
    </tr>
    <tr>
      <td class="a-time">11:30 &#183; 60 min</td>
      <td>
        <div class="a-title">Postgres Indexes You&rsquo;re Not Using (And Should)</div>
        <div class="a-speaker">&mdash; Priya Venkat, platform lead, Terrace</div>
      </td>
      <td class="a-track">TRK.02</td>
    </tr>
    <tr>
      <td class="a-time">13:00 &#183; 45 min</td>
      <td>
        <div class="a-title">Lunch Lightning: Five Command-Line Tools You Haven&rsquo;t Met</div>
        <div class="a-speaker">&mdash; Audience rotation &#183; no slides</div>
      </td>
      <td class="a-track">TRK.03</td>
    </tr>
    <tr>
      <td class="a-time">14:00 &#183; 90 min</td>
      <td>
        <div class="a-title">Writing an Async Runtime in 90 Minutes</div>
        <div class="a-speaker">&mdash; Alex Rovner, author of *async-deep*</div>
      </td>
      <td class="a-track live">TRK.01 / LIVE</td>
    </tr>
    <tr>
      <td class="a-time">14:30 &#183; 60 min</td>
      <td>
        <div class="a-title">Query Plans That Don&rsquo;t Suck</div>
        <div class="a-speaker">&mdash; Nadia Pashman, Postgres committer</div>
      </td>
      <td class="a-track live">TRK.02 / LIVE</td>
    </tr>
    <tr>
      <td class="a-time">15:00 &#183; 90 min</td>
      <td>
        <div class="a-title">Make Is Still Good, Actually</div>
        <div class="a-speaker">&mdash; Eliot Tan, build-systems SME</div>
      </td>
      <td class="a-track live">TRK.03 / LIVE</td>
    </tr>
    <tr>
      <td class="a-time">15:30 &#183; 120 min</td>
      <td>
        <div class="a-title">The Long Code Review</div>
        <div class="a-speaker">&mdash; Four engineers, one diff, no slides</div>
      </td>
      <td class="a-track live">TRK.04 / LIVE</td>
    </tr>
    <tr>
      <td class="a-time">17:00 &#183; 45 min</td>
      <td>
        <div class="a-title">Reading strace Output Like a Detective</div>
        <div class="a-speaker">&mdash; Mira Chandrasekhar, SRE, NorthCo</div>
      </td>
      <td class="a-track live">TRK.01 / LIVE</td>
    </tr>
    <tr>
      <td class="a-time">18:30 &#183; 120 min</td>
      <td>
        <div class="a-title">Hack Night: Open Stage</div>
        <div class="a-speaker">&mdash; Bring a laptop, write some code, ship before midnight</div>
      </td>
      <td class="a-track">All tracks</td>
    </tr>
  </tbody>
</table>
