for dir in poison polaroid pop-surreal position-paper postcard powder-burn prairie preprint-rush press-pass pressure-cooker; do
  echo "========== $dir =========="
  echo "--- Content ---"
  find examples/$dir/content -type f
  echo "--- URL grep ---"
  find examples/$dir/templates -type f -name "*.html" | xargs grep -Eo 'href="[^"]*"|src="[^"]*"' | grep -v 'http' | grep -v 'mailto' | grep -v '{{ base_url }}'
  find examples/$dir/templates -type f -name "*.html" | xargs grep -Eo '\{\{ *[a-zA-Z0-9_\.]+\.url *\}\}'
done
