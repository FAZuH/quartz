---
{"publish":true,"created":"2025-10-14T04:15:27.039+07:00","modified":"2025-10-14T04:15:27.039+07:00","published":"2025-10-14T04:15:27.039+07:00","cssclasses":"","creation-time":"2025-03-13 19:15","status":"adult","tags":null,"parent":["[[linux]]"]}
---


The configuration file is located on `/etc/default/grub`.

For configuration documentation, see https://www.gnu.org/software/grub/manual/grub/html_node/Simple-configuration.html.

Make sure to apply grub config changes using:

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Making the logs more verbose

Set `GRUB_CMDLINE_LINUX="debug loglevel=7"`

Explanation below:

`GRUB_CMDLINE_LINUX`

- Command-line arguments to add to menu entries for the Linux kernel.

`GRUB_CMDLINE_LINUX_DEFAULT`

- Unless `GRUB_DISABLE_RECOVERY` is set to ‘true’, two menu entries will be generated for each Linux kernel: one default entry and one entry for recovery mode.
- This option lists command-line arguments to add only to the default menu entry, after those listed in ‘GRUB_CMDLINE_LINUX’.

The difference:

- Options in `GRUB_CMDLINE_LINUX` are **always effective**.
    
- Options in `GRUB_CMDLINE_LINUX_DEFAULT` are **effective ONLY during normal boot** (NOT during recovery mode).
