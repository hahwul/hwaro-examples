+++
title = "Front Page"
description = "The latest news and analysis from The Herald."
template = "page"
+++

<div class="front-page">
    <div class="main-column">
        <article class="main-story">
            <div class="main-story-image">
                <a href="{{ base_url }}/posts/post1/">
                    <img src="https://images.unsplash.com/photo-1541872516559-251cd612cd20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Capitol Building" loading="lazy">
                </a>
            </div>
            <h2 class="main-story-title"><a href="{{ base_url }}/posts/post1/">Landmark Legislation Passes Senate in Midnight Vote</a></h2>
            <p class="main-story-excerpt">After months of gridlock and intense negotiation, lawmakers reached a bipartisan consensus early this morning. The historic bill aims to overhaul national infrastructure and digital privacy standards...</p>
            <div class="meta">
                <span class="byline">By <strong>Eleanor Rigby</strong></span> &middot; <span class="pubdate">Oct 24, 2023</span>
            </div>
        </article>

        <div class="section-divider"><span>Business & Economy</span></div>

        <div class="articles-grid">
            <article class="grid-item">
                <a href="{{ base_url }}/posts/post2/" class="grid-image-link">
                    <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Stock Market Display" class="grid-image" loading="lazy">
                </a>
                <div class="grid-content">
                    <span class="grid-category"><a href="{{ base_url }}/categories/business/">Business</a></span>
                    <h3 class="grid-title"><a href="{{ base_url }}/posts/post2/">Markets Rally as Tech Sector Reports Record Earnings</a></h3>
                    <p class="grid-excerpt">Major indices hit new all-time highs as the largest technology firms blew past analyst expectations for the third quarter.</p>
                    <div class="grid-meta">
                        <span class="grid-author">James Miller</span>
                        <span class="grid-date">Oct 24, 2023</span>
                    </div>
                </div>
            </article>

            <article class="grid-item">
                <a href="{{ base_url }}/posts/post3/" class="grid-image-link">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" class="grid-image" loading="lazy">
                </a>
                <div class="grid-content">
                    <span class="grid-category"><a href="{{ base_url }}/categories/technology/">Technology</a></span>
                    <h3 class="grid-title"><a href="{{ base_url }}/posts/post3/">The Future of Remote Work is Hybrid</a></h3>
                    <p class="grid-excerpt">New data suggests that the permanent return to office is a myth, with the majority of enterprises adopting a flexible hybrid model.</p>
                    <div class="grid-meta">
                        <span class="grid-author">Sarah Jenkins</span>
                        <span class="grid-date">Oct 23, 2023</span>
                    </div>
                </div>
            </article>
        </div>
    </div>

    <aside class="sidebar-column">
        <div class="sidebar-stories">
            <article class="secondary-story">
                <h3 class="secondary-story-title"><a href="{{ base_url }}/posts/post4/">Global Summit Concludes with Bold Climate Commitments</a></h3>
                <p class="secondary-story-excerpt">World leaders agreed to accelerate the phase-out of fossil fuels, committing billions in new funding for developing nations transitioning to green energy.</p>
                <div class="meta">
                    <span class="byline">By <strong>David Chen</strong></span> &middot; <span class="pubdate">Oct 24, 2023</span>
                </div>
            </article>

            <article class="secondary-story">
                <h3 class="secondary-story-title"><a href="#">Opinion: The Cost of Convenience in the Digital Age</a></h3>
                <p class="secondary-story-excerpt">We are trading our most fundamental right to privacy for faster delivery times and personalized advertisements. Is it worth the price?</p>
                <div class="meta">
                    <span class="byline">By <strong>Editorial Board</strong></span> &middot; <span class="pubdate">Oct 23, 2023</span>
                </div>
            </article>

            <article class="secondary-story">
                <h3 class="secondary-story-title"><a href="#">City Council Approves New Downtown Transit Hub</a></h3>
                <p class="secondary-story-excerpt">The multi-million dollar project promises to reduce congestion and revitalize the historic district, but local business owners remain skeptical.</p>
                <div class="meta">
                    <span class="byline">By <strong>Amanda Torres</strong></span> &middot; <span class="pubdate">Oct 22, 2023</span>
                </div>
            </article>
        </div>
    </aside>
</div>
