# This file is created temporarily in order to parse the FMSH's old website (calendar page)


def get_substr_between_two_substrings(str, substr1, substr2):
    res = ''.join(str.split(substr1)[1].split(substr2)[0])
    return res


month_sep = "<tr valign=top><td colspan=2 align=center><b>"
empty_line1 = "<tr valign=top><td colspan=2 align=center></td></tr>"
empty_line2 = "<tr valign=top><td colspan=2 align=center>&nbsp;</td></tr>"

yearmonth = {"2022": {}, "2023": {}, "2024": {}}
current_year_and_month = []
current_date = ""
current_date_and_time_text = ""
colors = set()

unsure_lines = ["Unsure Lines: "]

with open("file.txt") as my_file:
    for line in my_file:
        if empty_line1 in line:
            continue
        if month_sep in line:
            month = line[line.index(month_sep) + len(month_sep): -1]
            year_and_month = month.replace(" ГОДА</b></td></tr>", "")
            year = year_and_month.split(" ")[1]
            month = year_and_month.split(" ")[0]
            current_year_and_month = [year, month]
            yearmonth[year][month] = []
        else:
            if "<a name=" in line:
                current_date = line[line.index('<a name="') + len('<a name="') : line.index('<a name="') + len('<a name="') + len("yyyymmdd")]
                current_date_and_time_text = get_substr_between_two_substrings(line, "><b>", "</b>")
                text_of_the_event1 = get_substr_between_two_substrings(line, "</a></td><td>", "</td></tr>")
                color = ""
                if "<font color" in line:
                    color += get_substr_between_two_substrings(line, '<font color=', '><b>')
                if "dodgerblue" in color:
                    yearmonth[year][month].append([current_date, current_date_and_time_text, "darkblue", text_of_the_event1])    
                else:
                    yearmonth[year][month].append([current_date, current_date_and_time_text, color, text_of_the_event1])
            else:
                unsure_lines.append(line)


for year, months in yearmonth.items():
    for month, contents in months.items():
        for day in contents:
            print()
            for i in range(len(day)):
                if i == 0:
                    print(f'\n<div class="article-text has-border event-{day[0]} hidden-event">')
                elif i == 1:
                    print(f'<div class="article-header date colored-{day[2]}">{day[1]}</div>')
                elif i == 2:
                    pass
                else:
                    newday = day[i].replace("<br>", "\n<br><br>").replace(empty_line2, "").replace("<font color=", "").replace(day[2] + ">", "").replace("</font>", "")
                    print(newday)
            print("</div>")