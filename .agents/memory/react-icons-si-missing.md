---
name: react-icons/si missing icons
description: Some commonly expected icon names do not exist in react-icons/si v5.x — causes runtime SyntaxError in Vite if imported.
---

**Rule:** Do not import `SiJava` or `SiMicrosoftazure` from `react-icons/si` — they don't exist in v5.x and cause a Vite runtime SyntaxError.

**Why:** react-icons v5.x dropped or never included several icons that seem like they should exist. `SiJava` and `SiMicrosoftazure` are the most commonly assumed ones that are missing.

**How to apply:** Before using any `react-icons/si` icon, verify it exists: `node -e "const si = require('<path>/react-icons/si/index.js'); console.log(!!si['SiIconName']);"`. For missing icons, use `null` and render a text-initial fallback div instead.

Known-valid in v5.x: SiPython, SiSpringboot, SiApachekafka, SiPostgresql, SiMongodb, SiDocker, SiKubernetes, SiPrometheus, SiGrafana, SiDbt, SiRabbitmq.
