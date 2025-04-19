---
{"creation-time":"2025-04-19 16:26","status":"adult","tags":["content-type/procedural"],"parent":["[[linux]]","[[cyber security]]"],"publish":true,"PassFrontmatter":true}
---


[pam_usb](https://github.com/mcdope/pam_usb/) (active fork of the [original repo](https://github.com/aluzzardi/pam_usb)) provides hardware authentication for Linux using ordinary USB Flash Drives.

It works with any application supporting [PAM](https://wiki.archlinux.org/title/PAM "PAM"), such as [su](https://wiki.archlinux.org/title/Su "Su") and [Display manager](https://wiki.archlinux.org/title/Display_manager "Display manager").

---

1. Install [pam_usb](https://aur.archlinux.org/packages/pam_usb/) package from AUR.
2. Set up devices and users:
	
	```bash
	pamusb-conf --add-device Credentials
	pamusb-conf --add-user faz
	```
	Note that `Credentials` can be any arbitrary name you would like.
3. Test the configuration using `pamusb-check faz`.
4. Set up the PAM module in `/etc/pam.d/system-auth`:
	
	The default PAM configuration file should include the following line:
	```
	auth    [success=2 default=ignore]    pam_unix.so try_first_pass nullok_secure
	```
	Change it to:
	```
	auth    sufficient                    pam_usb.so
	auth    [success=2 default=ignore]    pam_unix.so nullok_secure
	```

Now you should be able to authenticate with the relevant USB device plugged-in.
```
$ sudo su
* pam_usb v.SVN
* Authentication request for user "root" (su)
* Device "MyDevice" is connected (good).
* Performing one time pad verification...
* Verification match, updating one time pads...
* Access granted.
```