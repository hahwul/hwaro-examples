for dir in poison polaroid pop-surreal position-paper postcard powder-burn prairie preprint-rush press-pass pressure-cooker; do
  echo "========== $dir =========="
  grep -roE 'href="(\{\{ base_url \}\})?/[a-zA-Z0-9_-]+/?(\s*")?' examples/$dir/templates | awk -F':' '{print $2}' | sort | uniq | grep -v '{{ base_url }}/"' | sed -E 's/href="(\{\{ base_url \}\})?//' | tr -d '"' | tr -d '/' | while read p; do
    if [ ! -z "$p" ] && [ ! -f "examples/$dir/content/$p.md" ] && [ ! -d "examples/$dir/content/$p" ]; then
      echo "Missing page or section: $p"
    fi
  done
done
