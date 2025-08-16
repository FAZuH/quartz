---
{"publish":true,"aliases":["Design Browser History"],"created":"2025-08-15T21:00:11.834+07:00","modified":"2025-08-15T21:00:39.910+07:00","published":"2025-08-15T21:00:39.910+07:00","cssclasses":"","creation-time":"2025-08-15 21:00","status":"baby","tag":null,"parent":"[[list_202508150439]]"}
---

## Solution

```python
class BrowserHistory:
    def __init__(self, homepage: str):
        self.history: list[str] = [homepage]
        self.pos: int = 0
        

    def visit(self, url: str) -> None:
        # CASE: pos is middle of history
        if self.pos != len(self.history) - 1:
            self.history = self.history[:self.pos + 1]
        self.pos += 1
        self.history.append(url)
        

    def back(self, steps: int) -> str:
        self.pos -= steps
        if self.pos < 0:
            self.pos = 0
        return self.history[self.pos]
        

    def forward(self, steps: int) -> str:
        self.pos += steps
        if self.pos >= (size := len(self.history)):
            self.pos = size - 1
        return self.history[self.pos]

```

