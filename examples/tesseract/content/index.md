+++
title = "Tesseract"
description = "Fourth-dimensional geometry - mathematical visualization platform"
+++

<section class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <p class="hero-label">Fourth-Dimensional Geometry</p>
      <h1 class="hero-title">Tesseract</h1>
      <p class="hero-subtitle">A mathematical visualization platform for exploring hypercubes, projections, and the geometry of four-dimensional space.</p>
      <div class="hero-coords">
        <code>v = (x, y, z, w) where w is in R</code>
      </div>
    </div>
    <div class="hero-visual">
      <div class="tesseract-scene">
        <div class="tesseract-container">
          <div class="cube outer-cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
          <div class="cube inner-cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face left"></div>
            <div class="face right"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
          <div class="edge edge-1"></div>
          <div class="edge edge-2"></div>
          <div class="edge edge-3"></div>
          <div class="edge edge-4"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="metrics-section">
  <h2 class="section-heading">Dimensional Properties</h2>
  <div class="metrics-grid">
    <div class="metric-card">
      <div class="metric-value">16</div>
      <div class="metric-label">Vertices</div>
      <div class="metric-formula">2<sup>n</sup> = 2<sup>4</sup></div>
    </div>
    <div class="metric-card">
      <div class="metric-value">32</div>
      <div class="metric-label">Edges</div>
      <div class="metric-formula">n * 2<sup>n-1</sup></div>
    </div>
    <div class="metric-card">
      <div class="metric-value">24</div>
      <div class="metric-label">Faces</div>
      <div class="metric-formula">2n(n-1) * 2<sup>n-3</sup></div>
    </div>
    <div class="metric-card">
      <div class="metric-value">8</div>
      <div class="metric-label">Cells</div>
      <div class="metric-formula">2n cubic cells</div>
    </div>
  </div>
</section>

<section class="concepts-section">
  <h2 class="section-heading">Core Concepts</h2>
  <div class="concepts-grid">
    <div class="concept-card">
      <div class="concept-axis" data-axis="x"></div>
      <h3 class="concept-title">Coordinate Systems</h3>
      <p class="concept-text">Extending Cartesian coordinates into the fourth dimension with basis vectors {e1, e2, e3, e4}. Each axis is orthogonal to every other, forming a hyperplane at each intersection.</p>
      <div class="concept-formula">
        <code>P = x*e1 + y*e2 + z*e3 + w*e4</code>
      </div>
    </div>
    <div class="concept-card">
      <div class="concept-axis" data-axis="y"></div>
      <h3 class="concept-title">Projection Methods</h3>
      <p class="concept-text">Perspective and orthographic projections collapse higher dimensions onto lower ones. A 4D object projected to 3D is analogous to a 3D object casting a 2D shadow.</p>
      <div class="concept-formula">
        <code>P'(x,y,z) = d/(d+w) * (x,y,z)</code>
      </div>
    </div>
    <div class="concept-card">
      <div class="concept-axis" data-axis="z"></div>
      <h3 class="concept-title">Rotation in 4D</h3>
      <p class="concept-text">In four dimensions, rotations occur in planes rather than around axes. There are six independent rotation planes: xy, xz, xw, yz, yw, and zw.</p>
      <div class="concept-formula">
        <code>R(theta) in SO(4), dim = 6</code>
      </div>
    </div>
    <div class="concept-card">
      <div class="concept-axis" data-axis="w"></div>
      <h3 class="concept-title">Cross Sections</h3>
      <p class="concept-text">Slicing a tesseract with a 3D hyperplane reveals familiar solids. Depending on the angle and position, cross sections can be cubes, tetrahedra, or octahedra.</p>
      <div class="concept-formula">
        <code>S = H3 intersect T4</code>
      </div>
    </div>
  </div>
</section>

<section class="axes-section">
  <h2 class="section-heading">The Four Axes</h2>
  <div class="axes-display">
    <div class="axis-row">
      <div class="axis-marker axis-x"></div>
      <div class="axis-info">
        <h4>X-Axis (Width)</h4>
        <p>The familiar horizontal dimension. In our tesseract, it defines the left-right extent of each cubic cell.</p>
      </div>
    </div>
    <div class="axis-row">
      <div class="axis-marker axis-y"></div>
      <div class="axis-info">
        <h4>Y-Axis (Height)</h4>
        <p>The vertical dimension. Together with X, it forms the frontal plane we see most naturally.</p>
      </div>
    </div>
    <div class="axis-row">
      <div class="axis-marker axis-z"></div>
      <div class="axis-info">
        <h4>Z-Axis (Depth)</h4>
        <p>The depth dimension completes three-dimensional space. Our visual perception already struggles here with perspective.</p>
      </div>
    </div>
    <div class="axis-row">
      <div class="axis-marker axis-w"></div>
      <div class="axis-info">
        <h4>W-Axis (Ana/Kata)</h4>
        <p>The fourth spatial dimension. Movement along W is called "ana" (positive) and "kata" (negative). It cannot be directly perceived.</p>
      </div>
    </div>
  </div>
</section>
