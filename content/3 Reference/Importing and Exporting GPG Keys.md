---
{"creation-time":"2025-04-19 13:59","status":"adult","tags":["content-type/procedural"],"parent":["[[cyber security]]"],"publish":true,"PassFrontmatter":true}
---


## Exporting

```bash
gpg --export-secret-keys --output 'keyfile.gpg' 'keyid'
```

Example:
`gpg --export-secret-keys --output fazuh.gpg ABCDEFGHIJKLMNOPRSTUVWXYZ1234567890QWERT`

## Importing

1. Import the key: `gpg --import <keyfile>`
2. Trust the key: `gpg --edit-key <keyid>` and then **trust**, then choose **5** for ultimate trust (or other type of trusts).
3. Verify the key: `gpg --list-secret-keys`. The key should have `ultimate` trust.
