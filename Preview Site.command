#!/bin/bash
# Double-click to preview the site locally.
# Opens a small Python web server and launches your default browser.

cd "$(dirname "$0")"
PORT=8765

# Find a free port if 8765 is taken
while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; do
  PORT=$((PORT + 1))
done

echo "Serving site at http://localhost:$PORT"
echo "Press Ctrl+C in this window to stop."
sleep 0.5
open "http://localhost:$PORT/"
python3 -m http.server $PORT
