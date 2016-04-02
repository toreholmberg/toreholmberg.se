curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CF_ZONE/purge_cache" \
  -H "X-Auth-Email: $CF_AUTH_EMAIL" \
  -H "X-Auth-Key: $CF_AUTH_KEY" \
  -H "Content-Type: application/json" \
  --data '{ "purge_everything": true }'
