---
publish: true
aliases:
  - Initial Keycloak Setup
created: 2026-04-09T23:07:39.416+07:00
modified: 2026-04-09T23:07:39.417+07:00
published: 2026-04-09T23:07:39.417+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-09-27 15:31
status: in progress
parent:
  - "[[keycloak_202509271530]]"
---


1. 

## docker-compose example

```
name: fazuh-login

services:

  keycloak:
    command: start-dev
    image: 'quay.io/keycloak/keycloak:26.3.5'
    environment:
      - KC_BOOTSTRAP_ADMIN_USERNAME=temp-admin
      - KC_BOOTSTRAP_ADMIN_PASSWORD=temp-admin
      # db
      - KC_DB=mysql
      - KC_DB_URL=jdbc:mysql://mysql:3306/${DB_DATABASE:-keycloak}
      - KC_DB_USERNAME=${DB_USER:-keycloak}
      - KC_DB_PASSWORD=${DB_PASSWORD:?error}
      # monitoring
      - KC_METRICS_ENABLED=true
      - KC_HEALTH_ENABLED=true  # check on /health
      - KC_EVENT_METRICS_USER_ENABLED=true
      # network
      - KC_PROXY_HEADERS=xforwarded
    expose:
      - 8080
      - 8443
    volumes:
      - keycloak-data:/opt/keycloak/data
    networks:
      fazuh-web-network:
        aliases:
          - web_keycloak
      default:
    restart: unless-stopped

  # Backend
  mysql:
    image: mysql:8.4
    volumes:
      - mysql-data:/var/lib/mysql
    networks: 
      default:
    expose:
      - 3306
    environment:
      - MYSQL_DATABASE=${DB_DATABASE:-keycloak}
      - MYSQL_USER=${DB_USER:-keycloak}
      - MYSQL_PASSWORD=${DB_PASSWORD:?error}
      - MYSQL_ROOT_PASSWORD=${DB_ROOT_PASSWORD:?error}
    restart: unless-stopped

networks:
  fazuh-web-network:
    external: true

volumes:
  keycloak-data:
  mysql-data:
```
