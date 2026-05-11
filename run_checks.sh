for dir in poison polaroid pop-surreal position-paper postcard powder-burn prairie preprint-rush press-pass pressure-cooker; do
  echo "========== $dir =========="
  ls -la examples/$dir/content/ 2>/dev/null || echo "No content"
  for section in examples/$dir/content/*/; do
    if [ -d "$section" ]; then
      echo "  Section: $(basename $section): $(ls -1 $section | grep -v _index.md | wc -l) entries"
    fi
  done
  find examples/$dir/templates -type f -name "*.html" | xargs grep -E 'href="/|src="/|\{\{.*url.*\}\}'
done
