---
publish: true
aliases:
  - Using git-crypt to Store Encrypted Files in a Git Repository
created: 2026-03-25T15:22:40.605+07:00
modified: 2026-03-25T15:22:40.605+07:00
published: 2026-03-25T15:22:40.605+07:00
creation-time: 2025-07-22 16:28
status: in progress
tag:
parent: "[[cyber security]]"
---

## Assumptions

1. [git](https://git-scm.com/) is installed, and avaiable on PATH
2. [git-crypt](https://github.com/AGWA/git-crypt) is installed, and avaiable on PATH
3. Repository of interest is at `~/repo`
4. Valid GPG key. See [[Creating Importing and Exporting GPG Keys]] to create/import one

## Steps

1. Configure your Git repository

```bash
cd ~/repo
git-crypt init
```

2. Specify files to encrypt using `.gitattributes` file:

```
# Encrypt all files with name secretfile
secretfile filter=git-crypt diff=git-crypt
# Encrypt all files matching *.key, e.g., private.key
*.key filter=git-crypt diff=git-crypt
# Encrypt all files under folder secretdir recuvely
secretdir/** filter=git-crypt diff=git-crypt
# Don't encrypt matching files, e.g., .env-backup-example
*env*-example* !filter !diff  
```

3. Add your GPG key to your repo. Replace `$USER_ID` with your GPG id, e.g., `E1555F86885827379EC58C595EFCCCB6B24FD9FA`

```bash
git-crypt add-gpg-user $USER_ID
```

4. Add and commit your files. It will be automatically encrypted with git-crypt

You may lock and unlock the encrypted files with `git-crypt lock` and `git-crypt unlock`, respectively.
