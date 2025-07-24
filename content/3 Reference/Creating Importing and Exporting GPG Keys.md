---
{"publish":true,"created":"2025-07-24T11:50:56.197+07:00","modified":"2025-07-24T11:50:56.198+07:00","published":"2025-07-24T11:50:56.198+07:00","tags":["content-type/procedural"],"cssclasses":"","creation-time":"2025-04-19 13:59","status":"adult","parent":["[[cyber security]]"]}
---


## Creating
```bash
gpg --full-generate-key
```

## Exporting

```bash
gpg --export-secret-keys --output 'keyfile.gpg' 'keyid'
```

## Importing

1. Import the key: `gpg --import <keyfile>`
2. Trust the key: `gpg --edit-key <keyid>` and then **trust**, then choose **5** for ultimate trust (or other type of trusts).
3. Verify the key: `gpg --list-secret-keys`. The key should have `ultimate` trust.
