#!/bin/bash
sed -i '' 's/padding: var(--space-4);/padding: var(--space-2);/' static/css/style.css
sed -i '' 's/margin-top: var(--space-4);/margin-top: var(--space-2);/' static/css/style.css
sed -i '' 's/padding-top: var(--space-4);/padding-top: var(--space-2);/' static/css/style.css

cat << 'INNER_EOF' >> static/css/style.css

@media (max-width: 600px) {
  .site-head .container,
  .site-foot .container,
  .patent-masthead-top,
  .patent-meta-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }
  .patent-masthead-meta {
    grid-template-columns: 1fr;
  }
}
INNER_EOF
