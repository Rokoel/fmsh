from bs4 import BeautifulSoup

yearmonth = {}

current_year = None
current_month = None

with open("file.txt", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

for row in soup.find_all("tr"):
    cells = row.find_all("td")

    # ---------------- MONTH ----------------
    if len(cells) == 1:
        b = cells[0].find("b")
        if not b:
            continue

        text = b.get_text(strip=True).replace(" ГОДА", "")
        parts = text.split()

        if len(parts) >= 2:
            current_month, current_year = parts[0], parts[1]
            yearmonth.setdefault(current_year, {}).setdefault(current_month, [])

        continue

    # ---------------- EVENT ----------------
    if len(cells) == 2 and current_year and current_month:
        anchor = cells[0].find("a")
        if not anchor or not anchor.get("name"):
            continue

        date = anchor["name"][:8]

        label_tag = anchor.find("b")
        label = label_tag.get_text(strip=True) if label_tag else ""

        font = anchor.find("font")
        color = font.get("color", "") if font else ""
        if color == "dodgerblue":
            color = "darkblue"

        # IMPORTANT FIX:
        # extract HTML safely WITHOUT re-parsing as full document
        event_cell = cells[1]

        # unwrap formatting tags safely
        for tag in event_cell.find_all(["font", "i"]):
            tag.unwrap()

        event_html = "".join(str(x) for x in event_cell.contents)

        yearmonth[current_year][current_month].append(
            (date, label, color, event_html)
        )

# ---------------- OUTPUT ----------------
output_lines = []

for year, months in yearmonth.items():
    for month, events in months.items():
        for date, label, color, html in events:

            output_lines.append(
                f'<div class="article-text has-border event-{date} hidden-event" id="{date}">'
            )

            output_lines.append(
                f'<div class="article-header date colored-{color}">{label}</div>'
            )

            # IMPORTANT: do NOT re-wrap html with BeautifulSoup again
            output_lines.append(html)

            output_lines.append("</div>")

with open("output.html", "w", encoding="utf-8") as f:
    f.write("\n".join(output_lines))